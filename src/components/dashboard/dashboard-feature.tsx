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
    "51LFceTip1bQUmfxsrP5FdwDs8PfdPhvCczPeicVVHTF8p9UMyMWiZacLjSvDaCzxf57bXZYcMLyMkpAmyVJKhHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ubpb91uxB3T2GG5JR24QtpcWLbfxdVakpuVpJAGCwkQhv2nzGQgdq4SJZ5d8mvPJcFJ8yP7AwJLKomckHSSnHTm",
  "key1": "4cZgMoVnCtkgCdhahKgP2qXBokFE3TVRbpRxhj2cM9A6kGkMj5dR1smGXXKWVcfoiZGyC77Uhg9nE6JBPU78zhnS",
  "key2": "4qam426zzNetR99ug8D48vvkk6cRD7f17jgnHgfmXPfVrEAqRmjvWY94cMXB1srPs6EPQSjdxxPzDH5Y1ttfcKwT",
  "key3": "angMADMdj7TVTsmmuCLa2k3pmNxVkdNfRQRdYwazriu6iBU5qFq46qGq4fRiBpE1uGtyhSJLeTUKUwXs6Popimf",
  "key4": "3e7an9r5cgis5vyL6ygDrNxFE4CqhHueQ8htPtZcn45vLGcwR7UNgLxKQZ8m9SV4b9ks7RQ7rPZdbMc782vua9PP",
  "key5": "5m3BhwjH6mP9MdE5LWwz2HxQ3AMmW8Qui1zBMruUP7nB3yq4cVpZ7tQ74e6ZkBGDupfJvRKUWF65FhbwG4cKnqUN",
  "key6": "2H7UraDMGyuLkGtXzQeJ7xbocccAZ19QjYs46AS8GH6NyRfo1zdm5NYPug2sDeYXLaYaZMrrmD1qYBdac1EWnYNT",
  "key7": "43eH8rf8JBGkhe3StELSp5zsUj1enywenC5wBxXtzJXeNbQZjPJQF9mg9MnAj87vgPsmS8tGU6Tg4cLQfDURgJVV",
  "key8": "XvsYG5UQ7grRKHbZD6pcXSTcfEtTMLGpWerVLhLE1T2pBQQoFAEZSrGmPzNfcRZNj6DqvQKQs431KX1UUWe4qga",
  "key9": "4N6xpix6oH7vT7N3UeAv8jANZzFWbxiAvywsWAw5dHpDbTtMt9ZLcd2gZaRKk6o8KCdVq8mLoanVgXf6QDaGqMRt",
  "key10": "2gGiVQm5nggtoJYymUEcQGEdGkh8D1L49kxwyv7QKYExqJhFQNJsHV6XxzcYdZiBvSpc1QWqEGW8ixoFUPdLvVad",
  "key11": "4Fr3eKfpJhkA9B4udzDSp28kHNg8X4ga5e86mryeeBbp6TgJ9gux4M2vU5FuywDE37iU5G9sYDbaYU8PC3GTRRZN",
  "key12": "2BQpuyqFXUPAVq4GqRGKoKFMAGjTdyhRirt6KzQpMRW43cC6g4nacdJrQUMTZTT37hu6Td112xEtHeF9YatXktuv",
  "key13": "49j6nD5EKapVvkmoBqKdCdiGp3UtGr4ejUFwfWTn3FVQf1tMWvZLkYFjFQauZPXJCndt2ZZrW3P9kTFoMEqvt4w1",
  "key14": "3mBVCKVrJuvVUJ4rx9yUixMQ2n15jDhosEYszBqjTX3WMHTBuaBgqLRm7yeBY1wmbwpHXETvLZEcMN3JntJhfusC",
  "key15": "4vyLtyLwDcTXoHreSeCF2DSzWxZi2vK9KsamRfVxFaqdUz2qN1Watw8hooaQDJJoY71nVwBXWeskBc2ZNbRmr3kW",
  "key16": "BUJi2KU8pK7FfYktXLjHg1fLANNas4chbAT8hHcWs4qQL4M2f8zKzKMckUHsYebso7KcmoUyLZtCyHeXF79YPHS",
  "key17": "446cy4KEQvU1qb2megnP7xcxUeVJsQf7Lec2sTBd3vtMcunbWmFVg1ECezmdJEC9hqbpC7HgRHmgvdYXiJxbWp37",
  "key18": "2fzQRxmCpMAePdu2dWDQVhZGSLyHYxRErsE2EGwJ4Ra56ZZC7u3mgiia6egnqf6WgipdgUMDx5VW1M7X2fdhyatB",
  "key19": "4WHaBBGcQrtSg1aWggnaG91DTt3stud8HubrGtfmLPuzGdBGiSjp383PuK2USx2WLs3mQdwaG8iYHcq49amEj8ft",
  "key20": "2WdniyNZBYaoDL9VEyzXjNKXyHa4cymXbicT2XepuQv2tpUnQnG6TDfG97eJceRb8oUZvJZJ9zFkRKXLNxf8vzDE",
  "key21": "46ko3SgUtZ4o3Q5vecKwjUbJrwrbhD2Z3DqfbHSxChztm4VctgXPtf42dC5WURDE3kck63s1CxjFVAqResH4QahN",
  "key22": "4fb9rn97PhPTYR27hqqFnzFQpkfSyZ1ppEumzyTYp4ywxRE4mFkRLbXpua211hfE2mHQYu27jMKieooMHfz5iajb",
  "key23": "4UNgxtKUHfLUCZzFGVVMUsEBrPJ1bdLy7J5eEqWXL3yWPpT14vs2qJHp6ZCJ1qvtNTNSVA5EmjXoros4BEjrmT99",
  "key24": "4RLmbdxcvXs2zVEEhfEwZMxid4ZUPBE4wZRrs5SfFh6qH1xir2WxY6vZemHEtyFhXxvaTRVB5MMbhdZTYTiXaNRs",
  "key25": "61meVcCuftEAm99Mr7BcgKN35ZPW9citkPsBmyMQMeszZzLK7Btud58zQTXxcWhupgMhDaqxNDWn1E4wtESEBgUS",
  "key26": "X9YKDSSxJLrKtnbmhyhMHKV6MiqkGZ75TmLCM7GrwyVkMWEfvu75UJhq35wQTxr4mmCnW3CKi8EN122Sh277VBE",
  "key27": "3oYRMyYPcvYmLrzJo8823fEY3qxi9qPWBHBX2vD4AQENKsdp4dUar3NAPdbAoj9QEnVYNg5adLJR7Lk3DTYQ7Y9X"
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
