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
    "38GMXQwbUeGsYxVtQgNWRqPssrvMzXjyqk3dETNKwB9WMeZKvMLLXnURcnYqzBecVqDAvFNiijUm9CgBGryevuZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5viBkMi2oMLnm4ZJ3wrMsWZiYPMiev6Kbrt5RKUthVNcxDUzCoZbKHGkKRziCNQMQUxTvHPw5VkEM7TM4wkXbf4P",
  "key1": "aV5XbYjq8u33bEmnaFFBeSdWDUFjocGrS5UFka1fsA5P5hcJpfSQyMVDRwshCjJpYAXNYP9UcawALyqkQN22j5t",
  "key2": "5jPry8shS6UuUnvpAuWfhX3sSFamE7eFNvvk7F19PdSN7HmQ8T6rEDJcuLaqEZZp35y48FBkrirfbeLEj4L18vyT",
  "key3": "29pSL35nWwgvK3DwfMuRjUtpyN7pQzCajGez6rw51L5XCJSXndS6Fs2pFVxUXLawQraBpBWeicZ6KHnGvpMnWQPR",
  "key4": "4bKSYhDM3qnbfht4PMAZSyT64gh4SjXFoXPjsFEchjTDb5Cx6pRPqVjEZcJWbhc2aWtWrLB61BKoCHKKSpSmPFBR",
  "key5": "2gMdnSPCbp9iH1YH987QcYrd1wYY2RSj5mWVkT3CfSJkyjgJFZctCBTiWkpnnB24BRQn1fkmwbKEGUW8gq4KGFE4",
  "key6": "5QTf1cHsozqHnizRHfQDoZFfzJEJcV5r419Kdg28VbinbzveTX6KTLnV9EvwgUeD17sXCTVpJrJZyqWunkCcmYhz",
  "key7": "b6tHM5RTmQquNcwLMyT3xDbrgFN8qNJscuyeTN6ntEEr8w1jHS41Xrv6hmpYsYBNz3xdR4jh9LnTPiPpa8Nn2pr",
  "key8": "skn5BvgDqFRo5NugiGTgDJAJArsMsJSkYXNG6K4Ud71f5HaxiCwL23S2ChBum229vEQbh8xVWwc5RrjP9NNNpTn",
  "key9": "5YoGL77NRGmmBXfXzK8ENHhFj5NCMysVexktHV1o7e7mv4AgFGTa1htYZr15UyyrHTe3AGEoHxgmwgdDKMfkcyni",
  "key10": "4AZEVaZmuUrRvX48M3kHYBuAvemN98mAjQskPC7geUzzzLzcuihRh2Kpg1uJEiLdS4HC1Andr7ZfJHWgzvmtFZAP",
  "key11": "5FQP1DuAPi5Sujdt8pYu15SnArNfB5kc3TZZTwrmxyj8Uoee2pehSYd8LYMQGzWHHF19ZULYZAu2aC9wWnKPRotf",
  "key12": "2LtqPQ2aMbfUASyp2x8Lb9KfdLRN38DbBogYhMcr3FmYnxDoyFV9haZD2tEyLESmm4Y7iLCoJPavV24HE6gSTp7h",
  "key13": "2LNVUS82XWvxJvv9TjpzGoNLk1D73QwhzxMR9nTktJCEAkUrA6eG5MSWzYenKkNDHQHnww58QNCLWhFnzq9tbpjR",
  "key14": "5MqUHydf9emtEzRVzpwq6dsU54aqxiQ1Kfp1vBctCbEWH8vs9da5Q3ahu8Hxe8pyvUb6PTexWLeL7AwKvgvwRBqP",
  "key15": "4YR2Q1EVHMsGCHKEESw72CNttZdiVuBjwUBnZe8Vq9mPodDU3uhZUoCQ4HZdocQoEpT9wmd4jwbQbbWtpKJoWsrj",
  "key16": "55W4J5a6FcHpWjv7CbeNLrhxFAJpz4JS47Zd7KmNoYinReRDqjuAxh3k1h1VJ7QkQUDeLjZBM5RXRVtZqKmhpceh",
  "key17": "pZNsKSPmNbRegzQ78TUqyH85fPJpeVchSd16Wikv4nWojwxbbtzzd6LpHdijz5jNU4xgDRWDGa4gdPnbVBfof7w",
  "key18": "2KXLzCjx5641xSmCPvVoA7LidK29dZFgfoCzzpYFazf5pGQr9mNtGpchRgqLFQKCYxcvfsrfeCfXY5FZjWWMHRsX",
  "key19": "4QQPWDZESoN59jxzMTgvQx7eUMRc78Z6fgyGRuPGo6itS4wZkcL8jUxSSmRH2BaLRULDhHocdvWzbLqujM7gEpmu",
  "key20": "aeJM5VEP41wiAj1mJpWhib5LHkBDC5bsBT4HeSFUQg73VgFTKE7WMzmXrCASP7FLr5yWxxf7zQmziU5twrjh9Nf",
  "key21": "4gXadcndv8WL6LtFVrHKMR7YjdLkyhvQEKFWB8Tt9xzKRbFg4VqUUa8Ry3th4avfeB3Gt3rTjSMPbdmDTKoMU2eq",
  "key22": "26uzu27vh9uNwLTsoUx1sXN7jkpLyau1QGaYnfAsEHrWDi31QiuTvMN2nbFw29ALCUswTiDJV6fSGbYvSfEYen4w",
  "key23": "4JctCjrW9Gw3q2cDZrVomWmvVb8m7Q41mh2vajpxderJT7JoMpQcCWa8ZBz8jnDJe5hG2FPUPViTkusp4TCCdanX",
  "key24": "33ggLwicdhA2myY2QvQZZGfYhnNrWxPGt81btXiSrHeDjXrjvMAfVNDAz1mfgMp8axvdQXpxscKJiXupz4HNbXvd",
  "key25": "5ZHA786sLy7Fbj8YubympFK3dai23mCG1iq6fSV1B3jXzj4fm3iSdiLfNLj1cwudF7JqskoBxh5bmsGh24d9vgrv",
  "key26": "2K7VznND9zc1T19pLZwCamD8cQqtVUVw6dVdo2UPTTnkt6eqMRMNP4peaEcjxxuSwQ42YekoiY5fP8qXPP6adtwu",
  "key27": "8onNDgiYgd4rBZPqm5eKDfcFC6HEjPbdnxWHsiWCdkJUsK3pNRrD9TRAofCz4rwJDtGoLiCg5rLgFnuRLK4Covt",
  "key28": "p4Fw32xRjLbJ6fhvgAEQ39n8YwQw863TZy7QMDWfhGj6eyvj8EQrjpt5mzNVSnTZxQD6hegE7s4hKo3dzJppyUa",
  "key29": "KvGqqbHg7gvboPoPd2eJMWr57hsbPSXAksYxNgMjfTQZ2htEzCijisXehky28SQd2QSoMHKNJjEnkghh2xQvQEg",
  "key30": "4zpsMHw1zM26gXY1HzVkc2hFVzLuLKZkne6LBYviMh7y1i3XEBURZcShdP2syoR8vxWiTXmAVMnVcE5GR1eVhxmX",
  "key31": "FuJSASDm3HjzUGHYNVdmfFAh4aTRHA1ewADwt2xzJxTfUspqTt7UVHfzrhX8YCP2otYZ1DiBFPUX2PEVXrP93bt",
  "key32": "4LGmvdmXWrmYMtkR8CukYhuyXJRjkNfRSwq49hurbF5jBF8HrgBK1uZWLGHb1FP1bKLj19f9BEzvGgFWDJ34LW9R",
  "key33": "2jQw86UszRDvmgTiauB7ZtASMriFNKKgpDNn1ahtFAXq6QbGU9tWN4tam7ZZjku39nD9EpDvq1Q5CPTijrDTbw9W",
  "key34": "5PmQq6449v2i64zdZkU6VCBPQjrZNYHtw5YZmBBEhPCd9Fh1c1qwBs4tsjzy8pNcqpV4Y9euYrjXj1NMwHPqWvD8",
  "key35": "5uNfTB7vagfwQQ6VBSjXYiDRXeY8xvg9DdHztMKwjknwwF19SDGoQ5geGWp3vEsbYHbEG2jiYZ77JRpQydDb1Tpi",
  "key36": "2v7rs6NfwnCWw6NvmRUpbABfKvmsxstAiBE5XdwuyV7H5aj1BQYWPw1Hf5w9hbk6cf8h7Wt7GrPELWQfV3puvbZJ",
  "key37": "q6c3ktWWfZ5HZFN1pSE4uSdYb6FzFWGo8fQyH58tbPtrx3ixd938icSE75GnRobLbAKHKCgsNoFNVGTBT8DYaeH",
  "key38": "2wGTKdDKLvcf2c51yHM7Dj4sJvJUngiCyVMpdSEu4Tfbhdfsj1rmqbL3KTMBdmmVg2J78E9v5TpLnCccqKuGFLTh",
  "key39": "3BGzEJS1RfdcGM3nf8doB3KDbDwUUSuKWrXYdfCVqadYygeb3MCM2u3aEYE1ZednHYm31WeJdU6opsuSNgCamSmb",
  "key40": "5FRarYhHW82kN9bPifoa9PDXctJzwBfNHPzce2uDVf4h95FoDbPoPDj7u1ZxVKfTcSbC5gYNLUPSUJTH7YiaHfjf",
  "key41": "5RjaogXCzLbBmTsRoxxVTdJtuBoypTRj4cHsvX2X2Bhf91iPi3LQhTchiJoZbnHPBk7PKM8xyhJC2mzJ68dQCRQh",
  "key42": "48xJs76WLMSC3sT5YR8YJtZhTE3vN6ecLhC7NyXMWbAYR11i1c2871sWZsjXZeQ26R12Dgqx4Znf32QhqpM5HCpP",
  "key43": "259KmW3wa2YubZdNRArxnUyJLcXZF8nB9qFPRigYWa9kP3VtdSnBR7QaB2oRG3VMXWF57vMLD6dx1kKVDC91CTNA"
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
