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
    "3H1DXkTeZVL1x4gV6eBo44v35jQaPYaDam2arcVG5Cmqt7iurNc5qRVrzsGkdzeEGdL5EKue6wE7nFtp372CzBeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55dh8FzBzZqugxNCNUngq221bQB2ZnoujuCPgNsgL97BB8yeuvDmfVYmC4KvFj3GosRTy2PkaUUE2xP4SYkrz8KR",
  "key1": "21ja5MHDuCWJHea9BoxLn1aexFdY8pRduR433f9AZXhdfrpzoPbNaGusF1SxeZziUnbDw5AaifNmQC8evNDqr2v1",
  "key2": "66Qf2btLUiH1xiz9h2Fu9Bt99MQbzmY4oHbWcsWP2SPKiEf6QfVbxNio413jYW6xjybVrapdiWGRGPyuEdMB4TCQ",
  "key3": "JakgEhAPyMnYuo1RbedCAxh72PT7JUiPDwDwBbkzKmK61oeavehRrRCKvANMQmusnhqmieQtvYvXVN81pWnArLC",
  "key4": "2bDYnJS5iissqZwuUBkNjFfXQ7PDA4ZSFz4oQYGp3KAy8yfmTXHe9Wavh5EpvHa4MXhwe1xQ2RGfFkPAoHtbwVqB",
  "key5": "3sxTyrnrsV6V1sVMnoaqL68WUAbRixrvRJm4VCtt9yVRtLxqxhxoecAZJSxBxyPzdNEza5T9TshUPoDgJ64RAT9K",
  "key6": "3Zhcx8AEqH8Rs436BN4zTEsosdMJUKPgg5eBJvMZdUQjbUKomb8EvZKa5ZfW9gcinBavZdcYP8a8bhdtXbE9fzsS",
  "key7": "5XtC5x7GwkMeB8akuSkpeAeLNHLMDZtDa2aSHmcZEZUwdHEefGdDnWqci8KSE8MykXYjrgsM9yfYXqSY1f3DJ6Ar",
  "key8": "28NNtxQPLckeYdBZjYySa87ToZ6rtutsmUP3SMHKsZyv1ojac4TZ43jrZq8wJRMwB7FEFerwBLYN7PMs7KhQdeBG",
  "key9": "fL86K8ZPpYsaP1gW99VUUjYgWfX9JhvzQ5m3gTr5r4UT3tZtt4orftyasC2v57KvBqm9nMXgThb7hnDX7egRZ5Z",
  "key10": "4jv1fxKLegsUmw6rdgzqtgXajJe14r9g8SQXNzHSyY7Dw5r6uJQ7LKf5MWmG4zsqvvW1GJtTde5F82iHPLiuReW",
  "key11": "4BZ66kkEUd1c3vUijqmzDoJBfSjUfxhvn3tW8W6BkdapjXntCV2kaS6SebouatKnCGDfxZQDYA1zVct5VTCXLvj6",
  "key12": "2QGuXYFJP4nxtnfVsoEfQqh15vspTaS9pVnySdSiZJteGN2v5uuDafqe5edsULqkstQ7CjFPXHC2Ajo7KWiYVAYN",
  "key13": "UbjPdDLexN1dGWuvpB1BpzvNL64QW3njgp8bxr9W6hYbzVnShzKhYya3mCAd28MKmekuYnfGN8JwmyMQbPWHnUV",
  "key14": "4gS8n61URNwoaEkGQeXAgK6oXhzx4v3x5KNuiGZnoxm59mKUV1G4tuweHRQmoPeExA9qdjraW56c5pLAiDwc4xzu",
  "key15": "627AuGd8mcLY4zfDvhfZfAW4ikfzMNbFBdNw6EfL79A2rDWaw4yB73Wxvjxgu4eCdmHv3B1NsP1qFb9bSsApGrNL",
  "key16": "2Tyucwfzku55AuBH5S8zyDUYF7JFq4GzesViUMoxtRyTg1DTGneA5US4wzoustZC8zK7pyBDNHwnKnv2Ftd5qa8K",
  "key17": "4LaP1vqHh9ZFGAcg2Ta8nSNFMK7NqH3yWuaTbb4YyjBhd7fmYcX1Lpy5LTeijPG4J2GMHtrmUEBSQfQ824vmFpoh",
  "key18": "3yvqCeGXDp4UTsGhp8kLy1Z2FENfLeazHmmAmBAz2MAgZpqDp3jyDrJes5GuhqXU7PqLQqNpyTBt2FZP227nYFi9",
  "key19": "35DaFCcNFgn5takUdhxJ5nkFzVhtVbB5YhEFbf6fz4ki9nLckF3DqZLWukDzCdVawXDYw2zmpgcdyYQWtrbYNLkZ",
  "key20": "4iFy67u3MwHPawscQrQwSSCgRPtvu19VAQrRDKepcK7ckLevibdgWwu9BcQLMm2ZheGrqKxCj9KrEyZLirgtk7B9",
  "key21": "54qgeCTnaJJCoBukCNtrsJuMcib5UpAHyERui3hFfq5FB35n4c3WxoVavT6739oVqXt8nwtVeBEg4WdvM5M71Pa8",
  "key22": "52F7BWzon1f1fvDpd2nAyiK3ChCWpGdQCykuTikGCUs8b8CkZGLuuiwmFn2EZEcZkBjmJGUvkoNNWh8xy5RfWGjg",
  "key23": "qjTJnrdHjr1obfsP9RSEks4HxnCm9GZ19vqhW47anTRHMHTxWexWYEZto4g7z6PF9PFvZcboR4375Z5az8BVcwc",
  "key24": "4dZ25z22P4JuNaR9SdGSYDXA26KZ8f4Dnk6aqSReBS2CzEjL63wqEKwnrDWocg4EuwVKoXqG1ggXHSvSSL8KNQGt",
  "key25": "2Ato2dPrVZP2QzugoPPChdmrW6LNL3UkKuBy8eQeR6GXcHGRuKKYFn7LnUbqsZF7qZb8R7NU5HnTbQZ6wCREaKdZ",
  "key26": "4kCutuWw9ynvnybiyHrkjVcAhR523WStJ5g6mVCKrQSQEg2p89EDunRJAPm13rLxzhbQ3Kk9W3RBhYfRPmtSKUpq",
  "key27": "S2C5z2ssR2GqMETHoG9hRwD9L8G2pS749rW9TL6jCA5Q7WNwwiR85q5ZgWzzntFJPLvd8AsRToTqJvCaRoBCjhM",
  "key28": "43HxcdaTfSYsq1X3p7aMkrUX119SGjwEQRxLAFUgn83DsDmZmBwpyxPCtA6t5ZjJ66KQGqTBTiddUDRKnuzgc2iP",
  "key29": "3xz35xfocaqAJBhpkmzghDdk6PvRMHtoPi23k7Sp1JXz2vpVqFLr7f9ZHFC9AukmNFqLPTTjSR1Aqbhs9dok84GA",
  "key30": "3tzZkh9DFoN8yBmyuVCD5wAsupAubVVihFWsK9PYqxvugBBdT7TsrVAu2GQyVaRRNTjTKB83fK55JyLDAA74HY7w",
  "key31": "4CuvBqAdDq99aW6n3CTtcwuTsHCr44VA7JUxbmunDLDcmRgqPgABNuAb3Tf1PW4PQnXLsvLL6upwKHLM1iY31jKd",
  "key32": "2gsXpnMzRcVKX1qAec4Xf46SyJwPzx7wJeLYzU5AzGwiPA5vM4DHYUiNLY7HAxW8DrvzHsenDDZdJmycTGZfGBib",
  "key33": "38rDjuMW55abUstnEsn3nKt7NADPzsqwq7s96L2ziLxf8JCcwjAcmcfghFWsrEnycBSoKSBPcp2W1qVHh4V3fkfL",
  "key34": "3gfFsPdPzPEVJwFSoxEzXuW92NfT32HppqvCfCB83WJm5rFwLftRRtfr7xmnecuVriM6D9KXmwwyVhbBu8kdCCsP",
  "key35": "rBsdsmyguoj7iqbEDKNBkSEieggJtqTii8eTkomT6A3C3zysEHeXtaKg317oBHUwuUGhEYBvcir6AbQypuf6wWx",
  "key36": "3tzBQCKxmmw2ajUQfpn3eJrimBovzm3GcyzCdo7L4CD4rPw1oywJEr35841rYhGnAPNYJ2W2s1P5rAu1YLL7LeLR",
  "key37": "3xcehpDeJ2MGfyUeAwBjFidQ5AGY7SMHo6zuEYivdUztEJzxtZPXbvo5aM5hw8DjZvWrSbwFRvreRSbytVgEpMBZ",
  "key38": "4yjgZ6exdVnMxisx9WCrC1RZr23Bjfiz6ZyKq6HeGw3bSrhjpPdL5Y1P5w7FVVaHamytysM45dBM9HidchrQK98x",
  "key39": "36NdQE9jhhJa6eWUghREo9CYmMYa92a6bZK6RGe1fNFqQBFFmE8c4ouuq6kZ5iyJGtr8J9T6Wn1bB1uCe2pKi7fy",
  "key40": "2MSExtHoqQpnbbEpFwidDc3YxabdVd6UzpVHCk5TTpU5XdaLfs8jZQsuSSrRUbRqZkXGjmvAV7HGJtHREJJswX9V",
  "key41": "4ToZEP5GTaMs7uHupRhJBVHkd5ywUDVV4Cb3JnxtfvAFUAeXnDWEoqRbhu2rPggKycKF6yEdXZJDt5yS3WArxiSq",
  "key42": "5Mt66jQ8UnyFa5pVmeyWSiRWV4Qc5LguGsY4x91CPuEgW17QjG7uuTst8B3Yq1QGPV6nU51ADfks6DUY1GsdBnCE",
  "key43": "5F9eRzFB35GjKtzrfWA7nSxqJZdW34SP8XEEwbYB5TQMdQztECGgQSMEQue1XApWdmQo7pWrwoP27t6b3Un8dPeh",
  "key44": "3hgRGC1zFX7H6WmqB9azeay8FYJyTKLdyQgNXbVTzXmig3qUNoNonz9wNarKCQscA6YGxEdZX5EoBdbXM6BtHX8h",
  "key45": "RjTayCaFviQ5wyqhfV3M1onBf69p8cG39ruBnJrA28DPxWnuinagRdAPhS3UDQdhH6xDP7Gdm1zHNiHcry45ATM"
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
