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
    "5fAYWh4SJYJh1TAm1V7Ytio3UkskaVmHbkwbXhXyWtCnU1HBs9raUgQ2NF1NX6n9XG5ib4ND979AifENeVNUZZ83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xBenfsYVYjtvaozk1rJPWpVEvHMeaJ6HEb3GLppm873VWeHxwebuqvhE3KqTZku9radN4TBewsNKVcQALRhiGKA",
  "key1": "roez3rLDhVsiFq4LZCMeQG9TPmf3ZwcXZ6ghVsKC7ZPUXZZnKNnpQpX9Gn5q2h5dXBTaDBenBq3vBcXxQLFjKCX",
  "key2": "wDYUGrtNER4ov6TkQkVPMomTCFCV2WTSZcwrXAjTpmmSvG5T99sPGCPESFzt9xkxEzv3HYRao7EMGayWESnEWwU",
  "key3": "4uFjtuoc1Jk5w9U19oZJvrHJJcjqEfd6KgMyuWVxvZ1XajGtani856GRnewBpVgu9cDPnZjYxEfgmbC2oQpD7FXu",
  "key4": "L9U6mt1ShZxuTanWoK5NAJF8KAwu1reYcRtfxH4ncv3uizjWp8g31hmZESC5A3hUqzahDKjK2LeM4fE4qedHuUu",
  "key5": "2QX3kLKcMP8QrLBm8YAeYMbhwhGGE2Cvwn3FkFeNvgdyV4sYy8PWHV2SXFm24DKqEKuQNctBhH4uNtUNLKRvbnT8",
  "key6": "2F1wi2DGev9aPcur9gbEwy8J9T8pQNn6cu7ZyyYuSyJTQKX3sUZq7mKp4Cu6spNWuKFfVFtPVZW3jyX2K4SoDDiU",
  "key7": "5FQGZ7putxuQFZtKRn2NkYEnEqxKSvrc5kb18SByznHL1fgiam2C1cMQB3EM2mworCwx1ATZpFrcihJK4McVZLsp",
  "key8": "3yPD3Vorg9xc4mamCeHA4PYPKGHgGWmxoamzC6Cwez9GVamxCjFpWiZ4RmEC88Bg6JgcHBrFezgBAyJJnWqmhyCC",
  "key9": "3xjtv7MicZPHG9jBok95tGfYCYJxWNRgAqjJGVfpcHRTBxmxYq2ZHxCPzhsCZL9QZK5smpK5MYB7N6pU3nmxNJZq",
  "key10": "2imQcVJALN6EnJVaetXUYzZod6FtQF9f3wBpunACNNTyH4LrNwqLnvcNvAMo4EAbRQ25HHDZcpFwgjqSeYHUCmcr",
  "key11": "1Kt3naDRFLxDW5Z52bjSP9SknD13LJJEQdMuuxgB6TqwyyWRC6reR3Xn1LBmHkeiJnpRcx1Dao7ANWXJ9MALSDG",
  "key12": "3FRco1eV2HsKdpwzZrJQYnKfnPDD7Fd7q3NvikxSbE8ASKPxfPx18hHqLg6xZDvvS4ooSh53T7Kwy1quR9iMB852",
  "key13": "2mTGPxZTHFWLGp3dUu7D4BvzcDw3jn93RFbxDSjZjnEMzpMCEQM2eJsFnDZZhoxHYUQR4i1vSdweaUE9ZqvFDMkc",
  "key14": "y3QggHu7JjFBu7H5bVBTtqJ3aVpBHeRS6YBqshs3HBWxTU8pzGiJVBzEoMiYWxZtwAZaoGRocPCqg1Fp9q4KFBB",
  "key15": "pTyYFNrcbTqCUweryuC1kL9vk6Dg3FhkYVAGiBBt91qWDtPY9RdGX87fVMwio6eUoycRBLoM1qTqc6Uwv1USAPM",
  "key16": "7jN24nrSGhvLeMSnFCsEBcF5uRzsyEvwvbNXAkGLupYYBdhUaMzhqvpW4a9oTWLuqyBk67KaS56B5yspJPMTyPP",
  "key17": "2UPkMr8SkvavnWJquGrpPAkHx3xREVjS6XTy6mwKyuFywG4wity9oPakRdyUGbVxABDigU115HvHwA3hLKix4oB3",
  "key18": "yAHYDUK4nM3xCP15TizJYJN1bPonW2S3tbYPszfsWKcSqBuAUTC5wfbqk37yygNpMogB4iHPpzeQEw2bbyB2D6h",
  "key19": "59vHGzxAmiZPcuZde4TDPhndAjVkJ5WJBgKxUymMvRMEsvKZN75XKLiAKgbZk7DPUz4zBpqyDNAMvGxRb2Ni2AvX",
  "key20": "rGLTwEpi7YeNpbLsNh26W7LXBgg6Bym98NZGCADbRRdUrujbmVvZzqqkTGyVFLqfGWwkRnfW8NoQ3k6QUEHfUwi",
  "key21": "5Brz8hPi7V8N2aGrT44eZU15eapN9gsvnHQgSfbw3Jaz7paRdU8a2jFfMYJrZLLYsXiV8rW6UKnSyj6DNN5wtxtY",
  "key22": "3QLQd2vU5SqN6GZuYD3apTKGs51PoqpKTu3MCerSL4xAJPT6ptxUj81xxzGRUaJbbRZbRNZU9cLiLt9JR8Rj9Eqw",
  "key23": "2X7NHxPk71jJWFVj7yKurZsPE2jrLrGt3cV8Y3KuqkFABa8vZsRXW4fSb2itXjs7XdSccGX8Ya3XQD3rYBELmQX1",
  "key24": "5rVgpj2VbCTDSJnanrG3Wmimu1vSKgTUPKGS7rJTmWi9PBDRznzXF6vFZhcBHHcdXsd9BDRtWGG9yWcyLJpNhW3q",
  "key25": "4v9gSUq1wxgFvqyAGBgzPRngeno6XjdHBzK6Fssx9UQbdrkTcRuWtqMJG53DkUScrj2ZGeHrQBf8kdR52nq91TTN",
  "key26": "4pGgfvZPQd4vYFPYWKGf6woo7CG4iGA5RQmF2LS3EeB32vqDQUVN3TJMfWyN2DbMGqf5TME9jTAmPj4cHfuRuaqm",
  "key27": "VJJq6mThWsY3WC27ELKZZLShb71zgxvmLhPWshPf4sRGg9CrMqLxefSs8SWnymQdb8K85znfzVXoVVeq1EzCBe2",
  "key28": "37gsSZWgTpuNtF5szpKbwFMjJyxW3BctnyGFB4QY2udKMXVoBwTqQ83ABrVf7RUF8qoCWHp1EPWQ6ZXxiwEULci6",
  "key29": "4scYrRTdL9nvf157KcaSfhWu6M7McpkWzQMxcmpPPxDRxT43LuLk2STQNFMrknYfnAWRbuijShxGPz7KTXDaXquq",
  "key30": "3CtgJxJ4JFsGKzcb9EhUpRshm8Wn9ke8nLiYuYLJLrNtokBmZZm28iG4xcyt5E3swNoTTAQjUCS98gm6Qv8HXFvQ",
  "key31": "2vDfgqtU6vKt9fkXBePKY4Lkdq5rcN6NJsoNRc5pDeogCGKnzykn9GZoDhAKeLyCTkv4HLS29S4BwpW6VJQ8QJpm",
  "key32": "3YsemVtLAjM66hL5zkwHojNE4zssuRmeYt37DsRGuEfaH29CLchubJnzRk3EnQMPLckUznFUvGJwrDdWpKFdq5KH",
  "key33": "2VrfurrRr9ZDH2vS2B4jSSWbZqCaP8Lhufy6RF4eAMH45LzmWH3xiK6iTTdmfYqBR6ne7dMxognQd2viSv8djFsc",
  "key34": "5QaSW5iT2r4V4GcFGWP9o4xtSho5ZVDwpkzhvAHRBAXjW8d4Uqv9zkseB48dRmcxJp4ekyyZeKBztTJRmnQpmfUv",
  "key35": "4gq487qcJi1VDjS8XeTQ37t7vEhnJ3xfERA9uzChrbYjTPZqo43EvYJwzeK1zAXVcY4nKpSDSAv4gbHxDWFbdgZt"
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
