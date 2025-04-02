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
    "4sNEYPo2YTrFQVdGiD2g548T41TAALAZHi4xSAaPqPv6pzTA5f6ToqTBqjXMb8xTbTRysn6s88tXc23YFW5QC3wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bqdUBrEZAUmAYTTx4mkw2z445Nh3JGH7c4xAMtwphR6LNaruKfXzcpEVB5xx1VYm8rEv6Lfukue61uV16U1gvPU",
  "key1": "4WzP95AcuBPBRvyzpGJpRXx1gCFrj1Fdtxyectis5EwDqAu9NFXYZW9vNNKMyHc8ZRZbU5LVu7GzU4kVW53P6vjf",
  "key2": "2c4ZS6uXcQTwvcrkaDyEYAFvGVRBZpaBPNWTmYVsGCkpFSRw7aEinAvgaXonLrcShx1nPGjHtj2hAw7mHFAGsesA",
  "key3": "ikBNi8PXyDCdRZBWn3pKTfBbxjtUdvSpuyC3Gpr15529SWigiG4AMiHDJdEiCiYjztkmnKWs548AqAsPq6uwycT",
  "key4": "3BZEMZz9pjnSyf2Fzi9WEJcwq5dMTiVA6K7iSEBPsrkmmbKoYAw4tt4U53UrpAKbWK72B9SMNVGz2xPQUthisBBM",
  "key5": "4skXDEcUnaMQiBweRoLsaE61t243Bf6JTkPB8dcTefF2QsiCK7QJGzVBfRxFya26mre122mbZYrUzBwffomo9Fxq",
  "key6": "5PArZ96prsxdfCoiu1rhuhTqjXKbcrzkLAfrwQhKPPJgBZtXSZgkAdtfNM8FTaP9pGPSeQBdQmxBYB37KXLnEv64",
  "key7": "4NoVNZwiWVjJQDkEK9KJgY2uFFFPzKpesJVrkLC57HMeTRRbbdqNijmCdTPxPapQTMYtSFnDqjjrAe7n3Ken28r9",
  "key8": "5aShhpug2vEWCVX2wzcdy2r31KjLh8D1thMBsaeaft31W6uX47a9kVNs44m6R5hV8fgbPeWeGpRiZ6y8CbVmQotV",
  "key9": "4ieFjdgLJvryb78xUwwQr3pTmQzsYZZaKkEShNamrwrnbUtbdXN9pmwhUX1FRoqGujbsmqtBjGfBgBoQmvMqLR6a",
  "key10": "5sH9q97fD9YrNY659GsiHrJvgvn4ZX3o7tQm7Hpvqt24t3YUP9UtyrZ4B5Qig7MspccxT9teAvB8ZBrM7WYE6Xf7",
  "key11": "4hBXevjrdurWGFSSk9RnCNRUzYmqXt4J56xGu9gU35AfFAJ1nTtCDXaX26ZN44NE9f4NfM5KepeY4xKAztHaCUMA",
  "key12": "2DgiQ1dgkWDAVhjAG33EMHxRrYv41FtK66ew418JSA1U7iHzmqiLtV8Y8f4wTyCS27sVznF4dh6s9RRnAB1U3zjA",
  "key13": "66my5ZbQryM8Lzm2Z6YeeJwktm96FWmVvYzCDderQkV5cS1U7CWSSfotTaM54SfxiFYZJbCxpqkNaRcpnj4Ub7AH",
  "key14": "4Yneyod5gbef29oZrUN5aoQSs5Gd7eoRb9LwjSgoGNH18ehYXbrmQb2o9fkJskDzu6kZ2nEoeyM6TbyYyT2qqpcQ",
  "key15": "3ckArtwLDiiu5C3oNUkbPjApzXWEATJJ847m3c3bga1Zsp9yDjpbiJULXxYc9JmDvwoSViHY95uCCwwdNFnb3EP4",
  "key16": "3D9R9LWJRbhz5oZcXdUP6e46sNSUX2s2eQGeyzUsy4J75BJPKHsyxcCBuDHUNPwjbguwbTS8vyRFdfNQjbqeGTH4",
  "key17": "3fCWQ1rF3j8pnGUfC1YJFWiDWAfPjiPrv8PSk4wUxZMCHYunjjRpDzG26tXA2bpxeuTyfCna6yWwC2UNnq4zKbKF",
  "key18": "5KTKT5tZi6mUk7UpWEQfBQBT4vkm8U6cqPsWLq79MzK2S6gLh4a5jREzzSthNsdNQjZF8C7HtxtKJkFurHdGDB7G",
  "key19": "5r5AwKmJ6c13VejoPa37HuR6sXLWVy29Yz5FT4J1XTRtmaDJWqGomFXEqGoqj7shMp1rZijKFsobcnvz9ShyhMgr",
  "key20": "4Kc39Wrs3trBtMgx27uydJN33jDGPjrX3xmnfjrR3RSZAyDUwquxi6TcJ4aiRmALjqJaxxubAbEXnp9cCrE1jkoy",
  "key21": "4snW1NFQqAzXMhtdgUCuivW1kosceHNbkWRqcCH4f4nvpL9LdTXhJgwjU3VEwJetft8WNTKT9B9YVbieCeSjjRGQ",
  "key22": "51Ag6VtY3vVuHmHkfbpLMCdgFaip7b7tPVfdeGJNrD78uKarSfRt5VKUtmG68ivfQUdmzEHbr7wUwqwmUfy66zSs",
  "key23": "5dJJFzrfj6YoEGoxeTp2MD4SGK3M8nWdfDvUKize92rCTVrYNcK7MbQjUhp1MaxWHKRS6sbLdyMGC2qED7wkBRZ7",
  "key24": "4q4u5Twbp4HmQKn3GuhnfkMnLxFpnLVXbMovk2fRQkVgsLg4b8FHqeNW4H38CCDRE5vDa2rtm3xGqfnDEgoD81xw",
  "key25": "5hcTsLNUeC6hQGMbvTjYQgJEurtwAidWNf7AQ2NWTbNkVxWwV1jWt63Q7wjYCr8tQRzNhgFQKzaKPXUsSeqomeJE",
  "key26": "2nPBdDW7Ge1sL5w8V78co1FwxwcYSpkURCFnuvEgNK4fZPY2t3uam88PMFC8ySUdn3r6bpKvRoyUH1DSNBipEKth",
  "key27": "536RXwAXof74YJWbi41dD1QvSPKi7SXsNSK4bfLPZL3rB4Sy19fzum6u3hDi5bRJE1M3RLjtiqbkmFqJNKKa6kGV",
  "key28": "2nzGcHZZ9M6ViwSnDABuTXftHgeCpjtFMSunuTCcUQE76dF1JFz2YnWpbiweTJKAyCHnwKgRkyfxgBpHRKnuPFp8",
  "key29": "3wC8nJBAXRyBtNUKfFgE23b58biLuHLBcTzeEzfXB41NY3yxMRxZYpfTBXaQZsB3TsQk66J2HEJo1orqkBsdxS7Y",
  "key30": "5ZNM1y2h9rwExg59XviJdMWv1BCvtLd5j1AgSkoCLY87t3qKuGPa4NpMSSF3smL16h7PBDMLQ2gTi3pgEcTV4fbv",
  "key31": "2hfFw5G4xEaAisuPVUuLWWR5efnwzsHDLSdi2c2YMThgM9s7WjaEz55a7fP5sfsehCAqJ7guUhE7rBtK6y9F5Sh6",
  "key32": "4VchS58YA1G2g5RKemNy2Wy6w63qyCyJfmgwaaH2KpbkMYxzSL6at5ocvi5C4ukTn3e2BYfW9f6fKVahECkX3vmD",
  "key33": "LeMn438N9xGLt5RfqmuzePjSLZUafj3QVh2wWeeGhfsuiDawkV6J6WWLveundzSdBKGAAXUM3vsuttRxtf5w9HM",
  "key34": "aXdmrhUQLmVgGfyEoC3tG5MgR2NDfdpLNuiBJbFqkKA7oeyGoExB2tD6pFk2LULeGPeYK2ubyw9fpJdmMcKt6oS",
  "key35": "4XZ9xj9sb4WWKCMTBsPnFeqiNAVMvc9jBGy8skeokB3uMm6JvMvz7xTYi1h28Q6KKNakMcbajyjoxEgUqr6HasdU",
  "key36": "2xifAuXrbjHDez89dH5S9695kLpoC74Km4CqJtkvdyu6j6Rdphycj8FaJaXtHSqGncwwX3RuDCjQsxkWJJRyGDsW",
  "key37": "4nkcskyCwYzb8nEbhq6pdMnsWe2DNK7qnz3AXhGYYdz2E2aPbzbDRDhB3UnYFDtJocoPjKVTPBysFqTw4Xe7BUkm",
  "key38": "2jNpHjhyHBumW5AHbRCeq62bDdfsWHCvwnz6TKTUtHw7nTr5nafy4VJawzb3GoV6Z1rbm3QmsPm2bXQWyuE3knJq",
  "key39": "yWDMNz5FqEgtvh1y6tSpLgKwLdgwADPz9k6hiiKGxfe4Y8RqPaDHrJ9sozK5DHB3gGZnQhscDrGpXiAntddWuJZ",
  "key40": "Tg9UbfNYoLiqxLw8hhGLVpYv86TRzW4DzqsSF1Wqih89xLGbwjimtAuNSSJ5nU44ZBuY3k5CYJgfNP8aSd5J4eg",
  "key41": "4AyNMtTY67D2R7QXLNtBcmiyLrhh14fcszmrF9cwyjET51KX6Xo9BHRBws5sXdTNn1Vj7MZ2epfVDjybPaxkv6AD",
  "key42": "5FQHDyqgK3LPB5VJtqjfrMak4UnxdxRaCqKXBboqt2AgNhdVkt7v35iAqvxa8v5dfi5Ux8yJvqbdcyFcTEVTvGCj",
  "key43": "5ZUuszGQoFhK7isySD3AkpBnQsLZVjRCKQubwUmUEKWeAEzCVo6eza6mHtthNjCcbGmTToNxJPEc3e58RZKmAWLV"
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
