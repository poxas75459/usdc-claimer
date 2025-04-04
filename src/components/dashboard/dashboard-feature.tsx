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
    "5JELYwK1hvvyDqXvn9gyN2mXZ8FSZbqBf4R8U51JSJbzoMJNfD7FZHYFEKMgT3egswocRwJEEmqdZHXNKwqbwB1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ACfEBs5bNcCmJzhMT8mHGEjTcAx6T7LgvAc3BT4zjG1scWzdeQaXddNA2w845x89MPR1rZ8uDpcc4fPAKH1aeB7",
  "key1": "wuzypt9kkqoY7eokFba4QmaDi7ScL6ZkMJnAW3T3Tj6XWhohzCrgGEqWcamf52SBvJYg2BCgpwmz8aqGMeA6NQi",
  "key2": "4tdqg6eLTQroc7jrNiUxJsNYrVBVoVF2SydzcCzonqF8mevVZJNi1y9fwfYSf6aArx2B6STqmAV3R4tTQ6Dut8A4",
  "key3": "2rD8xanjF3DQvfUf2FDzmdnPEz34KTdVmL19gZsnC9ogU8afJiDKz5awJDk9uiumUPv9hfUq8Ms8atT55BdWsmW9",
  "key4": "2PncUVoadKsHEgDzVz9WSy97uNLy9x6SFRp4tKhmmtNvLnBd84ZZRtBm7RUBC9q6zivqoD5x625tci6kTCA6YpMA",
  "key5": "3zgzN3sBCb2QNuFt47LbFdCxFWd8BwdhytHEG8yq3VW8Se7RZSLsMb8NtYVCAacSWs8rvZLtimb2PizivbkAS3RD",
  "key6": "4XS7ReuJu6LZgnhCKSE3xHnZ2NWWmZNd9Xye7so5oSZaLpFfh5XThNwt7TfcvihZ8QyWB4g5vCTkcAET9fdaohyA",
  "key7": "2ixwxrBbfuVYfHAyMBNCtHLaqfm5wyWP6E52sz5GnFoFGSBj9GxrYB7kXCaYVkhRXC7e1oi8W8GwouuoEpzWB4Zp",
  "key8": "4Na9dQhti9FpFC7yRLmRyRGh84EKNDBJmgPP1FovbDghszwPq1LhaNstwseLMzwR6Add6Y14EQRNywHFU6SQNgMS",
  "key9": "2sLBFWS9aYXY7Usai6CWxQxhTV9Q7r4ZgmcJeDZmvL7U9Z2wKpAtoe7VQy3ouqvLHYt86bFsdSwnWQHBbTwXo2ya",
  "key10": "2282h3p76efSHHdte3GMvEFNNHBg56VPEtBcsH8GPD72gtEkERwoEvBxAVMuKpDm596RxtRekRVWuTf3ZZRPS2jC",
  "key11": "yasMFhg4nXP8tPTaZjQkkn3kAtM3M6FXhP2pymaznvdvasP2biXwwyuo9h6ZGYsTe6RCxxcV2KwUKbg9TNHtPmE",
  "key12": "5xL8NV79KVjxFDGZ68LtjXqSJFr6jS124iWdPorZWJXQEoKkv57csTpJWqu2foRsgz3w6XKhoZCCQ9RHcCWSjFpC",
  "key13": "4tp9zrTPYh4Kzmcybzx2BeD2roAaKbKgwAyd3RtiMdLwcuXW4Wf6uP5EDZjFXCaHj1HWSP4gbhytUVaUo6LbrFei",
  "key14": "28jpo9rHAxRgAabzUVWx195hN9qmNC8sPh4ZF9xH2XsAuuxaNubSrqegNS7YD99yQKHEya8SXhpy5neKPw7M2q1H",
  "key15": "3UkRY4LE7foLcgGqoCSuSHhgv3wCk3rzjLWAyEAeyHk7FWwZCq5kAap8UzbRFtuVH7jiJ9o6rasPQ4E1YPJFRMsg",
  "key16": "5RqmHSKgNp3m3QY97zjttVSEwZyQKGmaHUAUctphgCxByyFeLxNjGKXCeGcRW5tZud42jRzUBEQyss4KvGVdfgJp",
  "key17": "4Vq32cgFL9ZZSDF6DCsXYupBkcwBr1aJwsQBYVCjdrUmmiwA9FwcoGgTttgALBFekcJMhC1tL4A3ecXTB1SXsVpV",
  "key18": "3Jj7BHVHMe1ZJeaasHHz6WnEZA5aL6vbvbCNMyiwHGy5aUifQhn8Z72CiSzmy7gTXQJq6vB4WiyNq44hjkxTZTRY",
  "key19": "3vKsDeDycBEKtGwEXvEp8Ld3SkyKQ7mtEV7XsKpKAaUeWS6dg2fWZLF4toWeUYk3FdQhjzKN1jf4F7PbnTuhLkvj",
  "key20": "wUxn6AyHzzKAy88JU1rsN9CntpoHUEXcGR1mYoFoeHT7ScKAX2JFGrfPe6nGi3ACioMyHAUGELQ59xPY1qNVMYy",
  "key21": "57gv6Bo9DUP5RNPai7aX8YhJwFneADpD19iyXSo63Gqni2RZwtButVnqbUYSWycD6Yps6okMGNSMGThnhKtVBU2p",
  "key22": "28mWPCwzZKM5x7mXatBbFS6VdBHLFmMDojjp15bfNKYd5hZgdp8wYeC4NtwkkFhASNyyDBLZwvax9j8YSynHAHQt",
  "key23": "2AuAowYgTMYT6zNV3ZqQgtpsJWpjphZmwfgpDGHuGjYU78cA2w7eTkHFcrDpHAGwwubbpaoqugFVesLgsuMZkzPA",
  "key24": "3RY5L4pbXEDDtFcuLTCcRQ8i5nJJhFDKkttLHDphZ4ojb4o78Us9AE9BqnPAnZM5gLB7683QEHdWiFphqDBYXaFA",
  "key25": "2GdXPqUhwfW14MCZsR5Td2qJRihST6KbfUaUFazZymNzdQ3Z6MnKtc8E53BiAsAt7gMJpGm37yWrMmnxV1CSE3bH",
  "key26": "3PVoPNdZ1EbpXujYXrwVbL6qPAC4TZub5B9mPuD1F7eiYtSSkvLMAC674UsZKCpAVx4qQmjRw4CZbgzFvoFRC92u",
  "key27": "27RLko6DGzQvzHxsUw1EXYRdTVnc66XzEbT14HZvGHGc1yVEgMTvwGiP5aax7rtzTSHVgPFQDU5qeYXXocaqeE7r",
  "key28": "5QLGP9WSLCacGeXLizS9jN6MQiChs7qTuuFR6xeSweLQp2c9tM46tCxWMTSCt2qYMa6cyuqjkrcW5Qe9DHQX9PJk",
  "key29": "59SoNJ8deUfKFnPDRC5Q9RgoKNVWD16X9KT2JQhv9Ysd718rqkrke1B89aR1BCmUzDbu2UtAvztnrvf3kmD2Uuw",
  "key30": "Co61o6cVRp19oprC9bYzdUcbmwNSa5oGGKnYdYxwXZRnVs4RioWzoeWBRDPWpBLbU8QonaXR3jnvvhBs7wK3r4n",
  "key31": "3Hgq5YLFE4yGUUo3wmwfciE2q92nhzti8Pnv6WCkLkgQBUygJtQYYUXBwQ57rzNURjReHkNrmLi2YqEyU1NQTvXi",
  "key32": "5fXeszbBAV8Qngqh6FV5JtZFTCQzLqAHXPWL44wD7EPw7Ec99JXto9PQ89wziLkb6eqWVbj9KDrZtoiPcvW4BsUk",
  "key33": "Yf44kJaZTy4SB2GarpbiZrmq8PtdBruUDVC7DeieEeVEs4Jxaby2x1np5qDSym48bAwccSEe5261cM4FhqUoBU2",
  "key34": "4Mxdch1ZutTmuwbp7H1v2CKqPZHCUEqdcD3VLXg4Md9QpTvDxCC5CJsuEDzXpyehNNp9LGQf7U8paxRJjyAdYr8Z",
  "key35": "5necKD7K3cnAmCLm22vkJhhsEQNCxKx61AjYAHzr9PNbzLw5RFrw3disfVJi3rVKkXicFcmJjzPdS3HNvjoP9VWq",
  "key36": "2r4rWb3QQSNTVQU3NvQTuq25cYBUMCkstYWFzCarPS8vAf2znS4RiW2ZNUcHVKAcLih6gcPaEaCaUbpNjT25ZyuP",
  "key37": "3p2Ss4YQAeEcfxTFsMBp7m4eb5THEXWmEffSfAgZ1oZLxswGx6GcPLRYCbKmHsGsuAnxFHYeBJQzUkXdF7n9FB53",
  "key38": "3HWo9zVYSiSAYdYdvPkCQwDB8TYhg8qEq6YS1Z3XNraAuCA6pYoMVGLndarRCewwgBCoArf1NzypLAisrgGimXFi",
  "key39": "3uprEjst8DUtrbW6EFKUPucozwyNNDLSHN8rhSydERTDakxzfspE1TByBnGPV9oG7V5Yq4skt6xDu6X8xPj34VV5",
  "key40": "41NAriH4jRMU1fjek3Vec1cBW9YwPYz9PPRdGgSgTrsWXV3kJBamY2N71ycymwRfShb5aL5r3x2G9ksLanefeQw3"
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
