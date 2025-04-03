/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5hUUZ4Reu3VXaWXTNVvqEnE4jNTFM95G1qC6qEAr4JV1MGQEJqw3VhCecgNykzbecooih7vpfUs1SQ7kGug1XGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e6kP3xoPndJGwzEtrU6p9Tpxt1TaR9Efg8XkPMrAtWMjXd5urssNFVMt34Y6Hzx8tCGqNM3aPL6EfrWTtt5d5d8",
  "key1": "23ScFiXV3SsJhEophe3xWk8mAf6difrgSJfV3ugXkCURhtmbCuK67AFn3pZVNAgFKkec4j2XR4HmGqhQdZA4Aigy",
  "key2": "3tmzBNXW2gEJfdTBHsgSHF8heFZmTWVs3vQtGSomStgQuVcXCSP9aj88dhG894vYupQzX9rFgLBGebHtBjWTF5pg",
  "key3": "3Cm4LuH39bTqwdsGgqNjA2GHZ8hf5RCibKtKXjPA1EDpGhJU7aaCKczxezufRtRZU5SBfLb9HQo3vLcgDMAqW5jn",
  "key4": "6gsMREMMk2fKi9WZ69oi1CWKDhTjDVFA4iULjt7nsqtHUywwtb9vg4TbkjpkSUeoHD1X3MgBkfGPfFwCVEMsGKG",
  "key5": "2t8MWMzjbAYfm2ciK8QPH4Yv3YmYB9EvCv2m3A19rdxVwxGwR5TmtpFiNj7YVcMosnekPbBEDuz8q43R2o856HCG",
  "key6": "4UY6wwrnvAHgCW6dMqYurj4jskWcQwn3zjSsS7XeDFJaZ4DH7u7t4AFBNaTiFnQwKnSCx8ikv5uVBM827JsnjFBC",
  "key7": "5VzuL2RjhYB4c2vJRU289reyvMCnDpdsYSwyrjSf4bMvb5tykzsx5kgWXphqpe59DGXd4pRZT1gbGZFR1snxUpQd",
  "key8": "355yXpvsu2bPRHGzFCRoLNRht91VpwUDHsrVDnERQ39sVBSZiPA7sgj21W5VLuDWEsEwFnGrmiRKSzSPxEV8KtKW",
  "key9": "3qeu5BEkhktompkaBn79UiBeqNpt8o9fHhm9tSgVAKtPjT3atGWZotnmwHc8B9roeRLiBE3pR6j1vQYZoaMuxfab",
  "key10": "2JmXfHcvYrqbhoRFaC2cUcyBJjoCikYahXsXQKeY8gk53yaPNtd32WHi5Qnox5o9ThQocuzkguSwvaDp9Gcd23UV",
  "key11": "2zLuP8Z1TsLV7FgPzGVgn8dBuJMxv29jphoQxAxMBKUdB8brXYCtXhvwxam7q5UJLxU17wzFdSaoJtfFogThpfGj",
  "key12": "2cFb4VAAVxYfvNYC1i9bxELSKsyPPSgS9AnLcLGWYGTRXPeVsoSqW3DeuTaNr7BRJ6wf6qFxxFJKWZdwds3xRujx",
  "key13": "imEE765jmoG7DwTQsVE1F9GVNDycs4gKfm3yjEpRq8bedgkR8a3tGhmKQqRwZhWcVvVtCWRYJ1vTj3qDcbUwNCR",
  "key14": "217d4bC2ihH4uxqhstbynZ5Jx8pZxkF53KYroKjiDKY7eEEtdHxSzT7eMLoc6oNR6sq6EwMzJChN2xhGu3SuGRHy",
  "key15": "3spACt41MF8jcPN1SiEpoGaxkAtykUiovpz4Z1pUhTJi3EeY322hhvvr16TKW6qCvagDohq2UiarAEwjVbrnk4T8",
  "key16": "2w8iLQhhERPskSLpv6bS3wm6htJ9kusU7Eo9jcPQk3Jv5dKznNFDfJDKBDkfDYEneEtr4CbBq15LtX1KjAwmrk9e",
  "key17": "3iAvRC8cTFo6tqSFVgjCf6spZKiLty1pciW9dSaf3vJWeeGU5fmj1pEioELQ4Wbvmb7CG7dvkJuCysWmGEUu25Lb",
  "key18": "xsgMDkE1Y8ziP4fdZMG2EqNSS9xXRHB9egivkzy9my8EqMjq6KLJ4NL4fNCTBYoWMRZkgDzXCDNckbGiaSxsFAx",
  "key19": "29hTgrrEdXWjbE42sqPhwdS8muWnKZQ7wCUKMqhVmsBrWynYCoJyDdUTDjeiFHF2PCQvu2Hf8oWVXSMDs3ZWRHc9",
  "key20": "5xXWkH1f1xdSTjChRjEDxoi2fJ7WCpd7JstjGvRMaENAS7upCy9nWmBvb3p3tfr4EyJL2f2zc6cxD7XBz3Mmgp5e",
  "key21": "9YDPS7uLv3ycCJZqT7BjqkFucWj6a8zJgJSVm9wmYNz1bZYdYGjm8HQnx8kganwZVZbXjzoefpbzrvPSo1Z3TXg",
  "key22": "5Z9s6Th3qDHshLwrkr6HDNBskJToyirmjDZvWXUaSgZ3cyFsy7atsS9XkhLtvP7PPxo6dttZBGcyVPKU1sWzZcBQ",
  "key23": "4Tv69YzANaV7hF1zWna3R3RFiJfJQsULUHWUYCSWSiygzfbeEnQsPA5ottyENZnVauPiKr6xgQVmNfKLfCcNWKmT",
  "key24": "37KPRnG4r45GZJ782bMy1Bzdaj2vQ6CJ3oJWyiknpgypRp8LFfxyYcVHBPweJedAtsHzRhnW5aheY1ntqhj7Aoyr",
  "key25": "5u4DFDSacfFBAzr4iqsFgjMoCU5FeDcCzYRngtqx7ufuJvk7EvNVxBQSL45dbap1MLwAV295AUX1qyrkjcYb2e1h",
  "key26": "3szvaxrPLk64DJEULyu8SYvm5TiJL7kn63vJYarTrWcNYxrpWJhCds1Qanpr5TAs6xvurboYz4eoX6sRR5edv9j6",
  "key27": "5rySn9kbqdGDoi3iiX8EnDCJ3cZxyrGQV1vgaru8pQxXW4nxs6hwmKTdzM7bbdxyfjoT1DDjjWpdr7vRAoeLSGxY",
  "key28": "4Afdk7KeEWiAKhcVS4DkkM6VpKGkHtoSe5vB9gC8gcuen83hBVZgXgWCjuuRjdGQNkxwjvrwDZZPqwDEJx8uNJ49",
  "key29": "3uJavZqeuwN9xTngY2sNKVHgGsYXQZmZsDyNomTbQwbTLLCzmELMiJLhCg6o79B7i3fB8g29tFDzC5wrAQ7e948p",
  "key30": "iMP5p9bMV5T7m13a8bHxGWATepDCmqxjAA3FqojyiHs5crAQssWeDANpYprHLYJ4aKTAmtuDAgppnJLp5SqLy6Q",
  "key31": "2G4N8Tm8wTyN2SA8eEKXdfRCnVLUqegdkPw9uCqNmZB2eEz4RffLWiVaSFdusY2DhwHyLtRD6vJkJd2spfHDtrx8",
  "key32": "in81hJ4n4rS494i8C85V5un57wJMPbQKnHdfATnw4rircXyjDT2vxGFuihnvRu65VBNB5Le1s9HeJLVKdhUEH6Z",
  "key33": "51DHQcDw9pjZQXf8NfsNRMUCtoU1FgdhBnYZjSzV2bYjqpHrqvx3CG3vxMP9F2NC1ciKGm7MGqVpbx6FJ6cFZAoF",
  "key34": "3uczU2ufPDnmVNdmZYLMzFaLdiK1SytLb8hGLXHDaq1uYUwLcEQMP6CEUrkDvWXbpbcMycZbJmNNTXgvHisS6XBW",
  "key35": "3J6ovH8MQG3iqkGGodc9qe3LpNJQkZUXKL3FBUNfg26222RMwukVEjps6CJNTrRrPpiLcugxnAKNQwop4zbhGxps",
  "key36": "3s9P2HPGKoKoDiv5sXXKoUQJM9CJVGTja9k5jdYXCySFab5FT6YgrjWQy1LKVGVVRh7h5wwoDpWuCWc4mWQ9uhTU",
  "key37": "3XJ48JYnaB5MyEHtfpx7abUevUXDF48w4vFLvt5fi12K6mBbQXC5UhixtUjD6ZoZeAeqQ5rKwTvw3NHvoPXmLvMT",
  "key38": "3gxDJm3p2WrhrFMpN8DYEASY8VT4V5WBxUoqrR8PkpzMCQzuDD7jsiNEEtuoDaufuf9ounK73mNVSZ6sSUE2t3kH",
  "key39": "3YCLdReZMS1T7Pka2py9yFx9XtZz1rvmvsR8QvQrtpjng3XR3kbaW8PgTPjYRVT6721ZZeTSNfLaLo8raGMJHAFx",
  "key40": "3Q6V4xHWu7sBtB42ChjkqibyLvVvpKCMmrTTqbfRdUbdGCGJ1Zfgz3D6yhFyZHDC2b5bAR5Bo9SkXZYNSBndHWUT",
  "key41": "3w16Cibng2kruHRaX91YaxerhyHMm5W3VHeBvryLHjePoxF65ZiJX6A8JMaqS2KN5PdFwGGFno9Awf7xuRWsFPrw",
  "key42": "RYSeWq1FuSwXRdLsbrmV8DkizRWazqi1xCCy7YZgHG6yqthcEvJ5HShRWhMdDAQ9ipJU919GLt7npRNkmbJWxrb"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
