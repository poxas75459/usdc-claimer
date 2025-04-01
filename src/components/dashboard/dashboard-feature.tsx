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
    "4H98aJSksrkGsJfiQajCVibQb6cjDnAKjGPC2EwPsutKBS3XUU26Spagw6b6ES1wxXWW2NeUcdrGsANzuUvNUDYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z12auckLHS4TeGxrZEJFHauGgYdeJoxJrDR6BbPcPjD7HBKxfdEJAKZAohmf3SyjZCRhUZyByp1stj6RGQcjoR7",
  "key1": "4rDgvuHm8Pji6ejHX4a8e542LYT8iVaJm5sReGcHjYYMqdhYg7pQzCGyU886G6Li5nBQ54HQMukLyUhjmfaAgjSB",
  "key2": "5ZYDRdgnLxFs2u2fdJoHqDWNmGitL1Z8SCxD3SFK2egGDbPpXPEagPPSWAR1YM2YkxmDzUonFu1sTCZ7C3HfrqqW",
  "key3": "A8PHpaBCNX8x98iAAzVYQ7FFHxb4uhRmLxCRESsyYCN5Ejw8YMfuz5BnEicUjEJKfbbtNz9pQDB8T3zrkdaiTBG",
  "key4": "5QgpgdoZMzpHFw2C1qdTica575NFs6SmfumgymuLk2tfdRmBW2Ts5eixdGLxGV2manZUXgPxk7bbnYcPd7cKQ5nX",
  "key5": "4SUAgSnhsvGcF2hKzwkvYgnGyXHjGDLzkw6znsUZqHEV1unQ63cSaUesa955T1ZCibQiTGLihBb1r6kGYNwLzztd",
  "key6": "4dK6NCEDEy6EStffr6oK7nhagcubkf83B9y9PgVhDu2WNrYQcBsgpFYcnEko7XZBra8csQ1J6u3vUCGMFPRR4oSv",
  "key7": "aduHz47MN9vijoZaWA4sGeNRkhxsDy9W4Zrkmy5hFyqpeX2RXsDZZCBFzqR85ZwnJXiJXHPHJNQNApfrY5fDzMc",
  "key8": "2eBdfECTNtZBYMfNnTzoiUZHeExGUTnzsFoXi2X8DKziHM4sWaepHeHQAVnJS7N8p2FBRNYgmD7c2qNAJDV1JDy6",
  "key9": "2zeQB3E2qq66t2TUpfT7aE7g6qhYozKRFRqWWPr8Wp5mgZ6u7qdFQtc9bpPAAqeVV2Yx1CtMESdosaxP8sSXQSP8",
  "key10": "36oGbcfdF7h7dvLi1YSfbAznTGQX2JFKe8J3biqKQxTPMrpNjhMWwhUQCBei6MyhkJJGDxueidqtFmJsR7gauVJm",
  "key11": "2yK2L1qgRnjz86QsD1vDqmcewDTcCtCAP671FhToFyGJRraCWtqAuCGWrKJ9bXWXqd3jiXMXRBjaaTbqxMcjGrwb",
  "key12": "3rRMbvM3R9Fw5ZtBx9feMK9jRT2c6kukL6ApAQ2395HDP4SXCPL9sNUgp6srgqVLmBxQwRm1VMnXXmiynHTfmGDN",
  "key13": "5CbNmhK98A6janTs2brhURVbEGDNuUBFWWzX524WxVzRgGb8dNZj3DdeU2e3d7hBj3MVdZ5EN3asKrmZwk8scUu2",
  "key14": "3GLsEKgowfPen1mybWDgcjdRMTc6buHAn8bVJKfobSDrcobWTpsUUW4vUSdsMxpPjQfpBfB2gaNcvKqANna1NBWt",
  "key15": "5sAsAQWTE1SivGWK2E3NoAePPh2sYYhWSPoW3jZ6VabD5W4i9NTXfT2bJhkV3cVZuNFxF9awU4zH76kxwrqYaH5b",
  "key16": "53S2irBezRVCzqm2TgzVeWCLJiE7KJdsgupjxH57QaCXwAaGXdXtNmZ5n8cyL2JwWGfSRxv4dkB3UinStLjD1FHn",
  "key17": "3nocKA6NV1rTgJvwPbAJuXJe7GzZnuJscdACYKBHKNgEnHRDjo6r4mMobTiQjbMRexGH1sAA5EgraE94MERAjjpA",
  "key18": "CmUinqCsoz2inC8jS2RPWAZB5StB3K5Dmq7bk7fSRD6P2JzX5Rzu7wawGz3ou5bdXogwXKvh27dDAwUPKfQphFG",
  "key19": "3ZXiFku9LP3NxNQH5vdGaAUWADf2CTDAS38MuoeNt7DpXQ6M6exYfnphPoL8Xd3NyUq266JbBG6Eg3ynfKpyUQ4G",
  "key20": "2wqfovQBBfj76pY8TpNH86MoCEHKc4jdAcnDspCiNGTaFrcKNkKuPcAmuh72iLDwebV5crfeKZsN8JXEQSJdSpd9",
  "key21": "3A8pNnZaEYboHrbCEZk32kSXEhZqDiBNjq5AmVMJmKHpdWjzdbj98QZSUp25wYCxkPBrqMDXxpXpD6SnCruJuBnB",
  "key22": "64KS8nEGcMMZBdo5aMVDXDc25JY2SHvayFxHPpQMjdaWUZig17Ma2W4N65BbtXkPj5AqhqpJjgAAYDZ93GR9zotP",
  "key23": "3VBrkJqyU5hp8goMmDqdtxk6S7kKxChzeY3MrSNoKp2seA1wRQ3ak7xWhqWcUcJt7LLbscxXbxeqZiB4S1ykTUb3",
  "key24": "5o7vDZemhrY5xfvXcrgCmPKuhru9tYYsjUCivaKZukhaHEGysLuoSDTTNNGHqdB9qd4hBvWuLZLT7YcNt5wrLmKz",
  "key25": "64esiNmRbY15dAdNuYMU1gUQgxx6JCFWvQvMX1r57YNzHk54tuup9cEjTzwAcgcE2EFZpeuwsoror9vZqNb6SVVo",
  "key26": "skb7pA7yPGgp7jiTRaHN27diLENBZoBrAeHJCEaAV7tzZZruDRJhxAhN2q24UfkNSXNJyxspSRuLuNgPFwQvrL5",
  "key27": "4xiqZ4jHmppEW9RUgPQ1pEcJEZHSwnUrw913nZFcB9HTritfLLDS4BZeWomRp17wCsSNkRbjE3nBTtxyJMN3r4DA",
  "key28": "5JtxmSAZR8pnTRBBpDyC1U35Papyk5o2jn8eMyeMoFn3SFmvq6CWYadAXEdurRWSXS4sSksLMsFQvCkAQRfePSMi",
  "key29": "5PRi71gNzoPiRhWUiECg2x78YVCTzj3WSXoK5KHax5L5Jk9kSGBFC8sTjE8R75dQWdzkQkPX5xUF5oeg3xSU2Z4N",
  "key30": "Kc94VDVyBEmpZmgUznU9osPe3W3BEAaHQJSTEiPBCMdyS3JNuHWbRj2uLtfWF6wyT42tsVHDWRFvwEdNuCMzz9t",
  "key31": "4AAhJURr2hHyDSixpwHjo4WU2yne4QW4PkA4uQ5ZrBjmmkEoLSgsz4ttzXFgSj13HyRggt6AedJTrS6Tv2KtLio7"
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
