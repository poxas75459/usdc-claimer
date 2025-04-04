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
    "2eW1Z7vKAQ5FLavRDZFQUhpuBVBSaxW2VCow7eE4a2JB7yYiBHgr7EmfR2Hd1JNzbeCgfm3eetgYV9SjmYKB5btS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W7ETvheLvCrDwy59nMScgQh17pt3HDv4G8Pk6zrxUVWbPAj5zPUKcbScarAZiUtC2jtZeBMS9q1dwgUSGcAwF6c",
  "key1": "5TDEU6fCXFmHE1HPdPfPrzBKwPchfUP6cAPAxUBw64Y2d8kkQ4EKbpTeY7dGWW1dBPuAkiKipohuovssH9WsYzVF",
  "key2": "5oLenJ4fsrsdgpn74WDHifN92jjgUrfBjCk7oAHmSZ3FXmwfEPBMfXXpyH726jx4oPVBdysUhobzPZ3RN83mLDKZ",
  "key3": "3nDYpzMEMSUDXUjEeAJpVTWtp13LSCySocYY7rziZLai3KZTehPL7NZJ5ibmtECi7UtVHSChmWnoSEr9qfkismyn",
  "key4": "2YCMaaaiCPrG28g2nZayQAPFtWeQ9LH9ZAriEhcj8eUbtTzGK2ap8sSsYWmpymxCK5t9jqkWqiauDjEHPsBbWhth",
  "key5": "3vdhjtwBeuxyf55HL1oaUG9kxBinJhTzpF8mnqxbxVQKhpWRnHd6hFx1hUdT97rFMYptD2qnoTK3yiCX2g8kgcQB",
  "key6": "32aeVs2orw4inHiYtiS4VAQ1xzwTN3e4W52Mw1PjRh3zTDuwnBhecBaqB2pK3v2rbosFaRFHP43WykZSA9prSMXe",
  "key7": "vmQf7x3ABSaFNaAMCb7BTueFg9kNFKiFmekvNvhFo6wqmQM4GAXcedMHYWW6gtfkunXp965hrQEf9uAsJDLVyfx",
  "key8": "44vW5xY38kk6b4iJqM9LHoSHEqrhtMxFYNYHLjokbJKPYYmjTz6WFcacReZCeA8GzFcuWWjEy66PR9SDLJfz2LWL",
  "key9": "3igNW5nNZQ9CYd2WWUmuxct4DtAm7hNJijWkC57W6EsTfRdoHuFbPevNmPZZdFBr9QBXZ8T194ELVPLDQNwiJPX7",
  "key10": "3SsR5ZsTkSVhc2w4HcBLxG4EWFeTtN49bW3NPsm7XME53kv1rxcpMPbjHZbspu1mtA9a5gYMoRZa15NmZuVtFnau",
  "key11": "5L5ae4wHqE9mwF1sNjTiBa8w3EdHiMaueLhhtMLVaKijNeJnxjfs4zgkHBF5oi69v7wPqYj3dXNYpXda53gR6DEG",
  "key12": "5wrJAFD9WqZ8jtwk5jynyRPSGkyX1khErdE66pAPgmLjiDWE7K44Su1mU9uEzd8LzpZR8dQp7CNpRbuo1ar9ZD5B",
  "key13": "2AdBfdB2ZNo2T4vsh6igZmd7oLD8FroJFqFQ5RgPq4p7CPiimK6REAM4x5QDhfSMxZVit8irWnK24P3qkYFHvVnD",
  "key14": "4qchRL2EAGUcEDEvs5yr6Mq8oFqhhxKVbGBz6PxEn2jDLxgpqB14YqD6qaHXhV1K5kbGqYLCzPKjmdt1Fd52tJqU",
  "key15": "NXHpd7QXVkebEXjVnKUdi3eZfzSU4bB99ZT5fTHbHcrNqJcJyXTZUYvQSQcgDUF5SXGoXiZ14hPVN3JNBgofBpH",
  "key16": "CvVTa7SSgcCrNeW36776D1kY63WgwQQGdT3fEMTrCHJwkDPQmjbTXZGADfkXshxoxF2XoKH5WrDouXirvyXH595",
  "key17": "2P4q3BrhFLKaLq41uKy9AjES7fNocp21D9hm2xbdkfGKFdzNyDj2bMDWUqYMVbsRy5fUqaNuWHDkw5UP5w39hHqA",
  "key18": "5JP2T6kAzbSBay6QHkiSCCfWsPNZpxh9bDnBN3HbefkHgis8PnVnXVuSvzCHec3bbanUd9tLyCL8hmQqd7Vo3gEm",
  "key19": "GfpRVgHmY2sWhZqHH6B9ky9kzcLaaW3ftkjRqXFopFW6534jFJSCUMg1JyY8gMmgz1uJS1Do5yWTThwKqBGa6Vf",
  "key20": "32zbWtzjydG8LydyhHjGvk745wcX886QCWJSJp7DBZHAo72ei65Yt4kfn5mRS6bNg5fGZ4eqLqqc5uMM3nsSc8ZT",
  "key21": "44EDr4KT1XHtjE9DtKKMUDsMZP7Wj9gMnaoiGBxf87tqyanaKxKyaJAhoESTMyTsbaSxFoRJakAWn7jvc1o1rL9Y",
  "key22": "5VifYCKizKtjMCsVMqyeYpEzstG6C7NQcbcnB4umeBeSMbAKJUxQTaaJ7v7xw2z5f6TEemK5VuyZCdpDq5HTg7dp",
  "key23": "4aSpXkgytqXi1iipnWTz7r7xsuTiVyaUyfZEjX9TAWfdcqaqtnHyrHzbzLgJRupvU1ZzBmUSt37HezGZcmPNWm4y",
  "key24": "ePkhVnBBuijJyFCv9zAu8X8wNAagqnpjgmuSnxZM5MyVvjG67WBhb3CKkwUFnbGdszBexSuXD25HEhYA6x1LnZn",
  "key25": "U8p78iyjCADBtBTydbBRqfs8c8jQ4wdJzG8EU2mn8dhp4KUt1XGVfTXTMwbacg8DULYcEzUmZ8SDxfGH7MSjDc2",
  "key26": "4WGofFjJ7pAMTwWE2v8stS1YhJZo2aambCCEeGhZ7BtmaREV6JAcupy2vdBDMbYTz7sVz8wumQ4LCVHXQHxJYpLA",
  "key27": "31BhQxppSB8NnGfSerZjriroCjXCxx9fBJbzGSsdMDm819jgpcM1CEb3E1ygKnHFJ39tN8CATAAfpLGrPu459JDo",
  "key28": "2ZUWf8QNrkUier5DvKJRs5L8nnnZPnUPQjoRxNZyAmqZnptPc9U194naFaWb5VMLxR325BHrBehdsnnZ5LTsNALZ",
  "key29": "4BkWFD9TRTTkfooTpwT72NXWL82Z4ihitfamrc887xaTS5qNH54LdwgdY2bCHjiq1KfJvPpAdqpwAXYQrTdnUvQU",
  "key30": "2K7gR74nk82kdQvuJwXoGc7eomtBKcWAe3yRPvNWwNHwoGszmdTEeNTKxSGDfnMEgC1Y5e4wQJPa4KcqvchBgQyh"
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
