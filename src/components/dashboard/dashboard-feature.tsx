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
    "4jop7HAcXdhebqZWiSbhpWL7LiQMyYTFQydFFaKiYH5HX2KpvNL8NCwgZJkdHbeXCxTZmHAFscwn9praLbkrjujn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67NNj4r29bAh226jHLu7GZrcza5VraQnF9RcqWUegHbWXLFGYZ9LH5mw74QEVHNj53yZ8oqt3BLxfFC2j3TJJXmo",
  "key1": "3dfKStPkyjtBspXG55GPoMYDGWLTueENHnrVEB3D7WyzrzPaSgkLW4r7rUdx9eS2P3HrnAi6N7q7BisGepcGvAdx",
  "key2": "2JFsd5rDxCQzJxd3Y7PZnRoVqoRJv4NBGy3SZnuGwpBcr5V717XwPSfy3yuX9WYF2t3QuJj31RF3VBxMTQ5n6aLo",
  "key3": "2H2v82qSgVkDydsCVu5NoksukPFkfdBfaCC8Hd8Aw3GBUFyerdo7YaAPPStbSFSgNzmxR9hA7sccnm1KUEhxUqKU",
  "key4": "N3MaAPKbc9qArCGqrV9HMrxbpwvQAqkHfmavwQHtuhFazj7nVY1SkpfaF22LQvMjgzgyGPe7UHU5bpPGcTzXWuh",
  "key5": "5VJbEFUpoRi2yypJ3iin4rEUBuqaSU4YqXE1oS5f8br1fsXxSRidN5GYc6B9PS6Q6L4dyG4k9uR7Bjofy5uVL5jd",
  "key6": "3uDR8583Pc3G7vhFbQgrLNJH54nHGSQCyBrf7iGxtjykFQXVcVdjKnR51scQr3UCnkK1RJuRSJRFEaPufa5ELWB6",
  "key7": "5aTPEM4nLSvqrXPiPJgbxhTFasFRQaqqZjEr1WSZbUDUUiDgLkUo5Rtv7vAN5UpCTypyJ45CKd6WLorsDn7SDyGu",
  "key8": "4thbDsPezJrL8uSqap4fUF3e73FZRVFNDPN7TSSWgJ3wnacd599U1fsXi1jE7mPGvsG97cNam981uz1SJqHCRUTG",
  "key9": "3LQxchs82XfudALEVWCkPg55xwSzQgjeYnQcPTv6iCTGBPeWbxK3qkym58WTYpbhEEb92XNCVTK9FH3LkSXErFiW",
  "key10": "onhip6V8haj4xTAUu7HPeWwYKyt9GDG12MwzBKK6SusKTacuFmntVchTfiv3iVTsXhGe9kdX6FVjRGyS5jj6ftc",
  "key11": "5Pt52fk2PCZkKEYmyfJZrRxXNcZj8TdGgfTw8AkRDRLzjAfCr7RyJftqaQUfGMqVeAq26xNi3a6BwFhQ9AVZTTrk",
  "key12": "2KnMoHtuKGfS8sTPLSbBe6fVZqEhdHPQVyp8TWXUE7t6bSADurA5LumNUc6odUK76TQidPp5B1DKtWUVfvd45GJM",
  "key13": "3y8no6FihR8rHr6icpQfvPSQegWmkYTtDD84uLQgtayWseRmJfUvaNUjNNXqGJMNwtqkbgGwWux6p679WHtMXzJm",
  "key14": "cUtfvjgjwuF5w5G2G8KpSL6fCKuxC9626bLn68fL6pGMt3o1Q4hkqP9VLHzBk6SgnWKfrSvDbD5XPDiWytfqvMB",
  "key15": "21FBc1nWqJy5yLpNbpuB1bnf8zGJ4PUkQGDUY5Uf96tTfvcmUqS1NbLZEg1Behyrcbm5EC5ZrDe1tXGnkR84Y3iD",
  "key16": "2m5vJHtWHyfyQEmGR2FBwiJZ32r53QZxpAaodU9dJVPnYcKvxEQM9ni9KZUcyzKUaWUFVnDX88dHQh5pqVEFXmHA",
  "key17": "5ZaWeUVUf4w2xgxH2TQoqTtotK8NouQpqJ9VJB3CPq3ZHfxsd7hJgyrSjkLdmXzzLLRRnE1mEA5xz8U6DQNn5zkZ",
  "key18": "3a83yv5GZ9HeXgap2Be8AtFrdC4axFMxMaiwqvomiAMRkvSVDzs9bEMVu34nKvTPS4LPitU9WL1yyKkfTJ4KabF7",
  "key19": "EAwuc5MbpoKQRVgXJSctdGU9bazkEkGxqbTXFws9bbsztrPBhHpdJed282TvcSdAHt6CakGp2EzpDKQnQWXMAMf",
  "key20": "5HqJ7Q5VYWzeXyLnKt4BbU2orfzJ7F3LsWKof7XXdDT2QoiyFgwSVtFRnBdJxhifSftd1jv7Ehhu1ZUttHqERZdk",
  "key21": "hibzvjE13y6uZidiUa6RBwFPJQ8S51iBckuvZWQueruY1z8G6VN8iw4KPgTbibPYmhxYpW6HT2Lm8r7bYoTupbX",
  "key22": "z5qnjQF6aqih41nwDLadh23G8mc4ggkcMuDeMqGwRk9GJX9t1C2yFAbARHgfieke6xtK3dahyeciqKdztS92mDE",
  "key23": "3Lk7zEdX4JRUn8bvipoxSuMNkx82vxENtiLGWKGopNFsiZ8VSWYen73NUeia1Hg5WZuoojjH5E5fLbj57w1ZPAo3",
  "key24": "4qkvbgRZjsgPcjzrrhHY8FzByH8KCZRpa4WfGkWWH6ANVeUh7NXy6d7kCV7P9qHcLqXs3ASgtY6qaYvruDPSxfEs",
  "key25": "2G1ZR6pERMpSpQmX6KBKzV34TgowcefFCP4a4QLmpmW1DycCEtdHcaD33gLvKqEgVzxa6RyFDXsDjP5uhdqw7zHH",
  "key26": "5nDaoWnXd2VBFKX37YFXoVfgJppfbVFHjHbpiHaSqgbAebJotjUZRQ7LpeP7m4Uuwg2dJbDB8JbJ8h8wZakPzTL6",
  "key27": "3sTjhXCGRaLcUC4Bus561q426jUWKPzD24A6Wgs2AYifJe4yyWTDD4jUrbkWbsxG5ae5dAKAUY2V1DsUijbZchPQ",
  "key28": "56GLchKyedvmweKwUVvm9qPo9ioCCmHWWdEfCUsbCjDwgubGqQZ5DwKboxHdAqsGXUHczhUw5FcDjiotsxQqPBmA",
  "key29": "3TMbo2HH9bo5YkM1uKpqZYp3Xmqif31CzXyBQJ9LGnTXsnjUJw8aMCT8uVTzNQ4MqTDuLMPi4NeGy11JZN4ChzEp",
  "key30": "4ugtViag1hVA1VsasRa184opJS4E2DQFLRrxvyoYiN2oFPHymA2JPft2krpVthqoyuBNv5hznV5wyAR3GBHnNxAQ"
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
