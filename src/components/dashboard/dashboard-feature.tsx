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
    "5asT7ucNS1SpCX6CCyAQvXk6D6d2X8PLN6kYCq7B9JEFxtv9SjJfWRbkgPgR5URb9B9nuQdzUk3nGkeuz4hGKia5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JNdPNk7iQaiiZFwWg3SuV6mEFhPf8b5gCM4UfhgUGPA99RYfkFXAiErqbcihXNeG9WuXDJxYBbokPhWybeDubrK",
  "key1": "5XXVmB3tSJwR4A8C8dLtqAyT5VAbVkM6dN3zjBhqJHsmbBRmdjT7766tCdNHSEYHTmC6txEYFWoY9hSXnqGF9Z4p",
  "key2": "F2c9zSfpQV1YaUcgVfxGdPdrc7RtqSoT5eyyBXoccBhF9eq9GsF72Zg5kwnyr8KiDU4H5qYQovxVvLYiw3iofak",
  "key3": "5A7odU7c3mZFa5pfEQrWt9re9v9kKDBtghJnU95mA9XmECqCgAKd6HkP7yC2wWbVuNajTc4zkELTCBjzZfM4TbXF",
  "key4": "j8tdigstpniX4bJ5kMcskApQGJVfgxvbFLFUUPjyFDcDRqaSaUvi63GDicRY7AFktX6XBC78ZbBM124xF4RhqZP",
  "key5": "61Y6vHTywDjwKkGzfoAWRCSHgbXEFdmsu2PPnwCSdGMRtykr6cef87jJsNZxvU4MH7eZ3KX2nhHsT2VWZRiKWGah",
  "key6": "5NHY6yXucmBVWFDLC8dZqpvzXcgXwm99us1Ma6EHgqKWgLwnDmYsTm91MkuixbnWFoKWt9uyE866qptHXZuTridW",
  "key7": "2kv9B4QBmmLUBvTq3YgUex16MRRw8nw6dzW9paDQc3Ui1DQZha1VB8Ns9BqFzWJtHn5EMRK6DshMxEStVFXEeMJA",
  "key8": "5VNhjA6uzZ7KLqSDbTtb1vDqTxt1m689LEuqp5Bfhn85N5DKGuLSqWNrSbUHQEgwYkffHJ8UrGjd6c9mmNr3VqHY",
  "key9": "2ENDa1Y6HuHAjpNKD2dGWGCVouBx9X2yRephugRsSYNdG1F1TtwyrPDm9UU2CvHuxk3J4QSUNRtmv5bgvQ5C6jSd",
  "key10": "3M8ZbhLdTgvkuJNUntuF5Z9qdpcQ793WikNpK2751QM35A2sjSnvE22TYCXYi9Zf9LAcZWBNbemXU9avBRE45XY2",
  "key11": "2zGm5cBCYmaxzs2UuPAaCGcJFLn8Hsxz5SWPG82iHCZfHDFjx32PQVCTTACghdrcZQtEQyDsvDd2fgbqfD1Ugwsd",
  "key12": "4VM1yhvRPYJ6hr6L5D3mwkKGCr3dqPgPjMAHTpPgotXjRNPBB1dRgdLLdip9SrvGde6dMGWDQm1CGAycn3C2sUUW",
  "key13": "5Li1SvJ9zRNqDGk81666VVNPvXqXUFUcQoeT4JJc42AW7Bvk1TLn57hHVx2HnKnUgE6KYnTbmetHM4HBKbyGXUwu",
  "key14": "4DGbec2ESwJkQy2F4tq6iKHWX6f9vWsWhdQHgvd3rithfDQyVwTgdAZBRCSJ9L8vQKMUSjzALfY1AEpGGNxuE47w",
  "key15": "3SBLbiLNQ3xwbL4cVXvRUg4q5JZzKnyEVyvkvg79ef6UYbBuqsMtpxJifCRFW78K8ANLqT9mNCwTooigCvnBJ8jG",
  "key16": "2vpoqQNpvL9wEYqhcw51YLgvy7ypMiypTjA7DkitsLgJSfQoh8vDGf48VFJkpq7ea7XHgMaYqcLuisT2aPtnrgy3",
  "key17": "5iBbWmYbGkkeYuDc4pPNnYqEHArrVyhXG4Ywjp3rucwzfC3CnosoPfhvqvvwgSce8YKScg1N6czR5Pjingj31U1W",
  "key18": "37umv2REdQqtQRDgR9y3wXnn5poYoHY9EkAv5vwXCstM2WMFSa5xY9g4D2J5JGmaMRA9XDLp2bb2ZN6iqXwo4oW8",
  "key19": "2iBnefRB8kQKv57BvuqHQDuXyv6Cjbum1cpiiswMg9JVJpLdCH89SKo226qaNdMuFWFm9PECWQLn77tteEDymSrX",
  "key20": "3gELXrs8jHQpEsLAygLtmhFMoB7PNZRNjJuzMShNNtmzotqqYk7jmpCFKed9B6R4CenEYUm8J4vEQrbk6QtGKoWs",
  "key21": "5XUmQfje4HxCfS4MbFLoZMxG9HNAhvWBXjQqqkZWeQm9xbzfLapqjBWCddvYFFapXqwyuV4kbkbA8Gqqtkuffj7g",
  "key22": "5ETzn1CZ7nqp5CT25qukKPZTfUArn8ofUxTkEP2CCu6pbLHTHH2ehfbf7hpphrJcpF5sEoiD394dXe6CA3NeEeCu",
  "key23": "2AV8YEnBRFWZKiMo8u6UHdjAYtvAWznT3txi3t8ot7XG55ySUFYaezpD5Mw6fBQxSakJHMyw4w1ByucPu1XdB5UC",
  "key24": "5TKLdSUmAibrF9nubnfpQDkjRe9etYRVHj9LxDvNjsbDXibuKtrkzTFWgEiXVbiRwydVTYN18YDUbTUMuWxtTg56",
  "key25": "2pqqd2svitCQCZ556oTdFeNDNMhaYJn7EkJLeXgvGHcSCe7Bpeu2JgQSjuBq1cU3qCUg5Q9HN6cqvj8NEKd3wCgR",
  "key26": "5J9BFRXCr9W4magWJVv2g2Vy57KeE3ZahtP3oftRfiKvm6K7t8gSN664wUE3p8N8Y154uCqc2BUmwGwBrwaTf6FE",
  "key27": "5RhWsbnpDip2Vsfz4cEN2KUdKducZB9cg4dNZAX23R698UA9abyR1NZn6YKbedbZwgsUPRwFfsMz52h1Vt6unxV2",
  "key28": "NbBs4xBXg9yQua6GGpLnCwceUiffgyMXjty8n9mzyuShZsDEenSY3359uKKnCZQG2s8tciCCH13JmpyztTHMimu",
  "key29": "sSN52yUqpk5QvDewJr33k2ZiBz6rdwjtsocXKVgtsBsE2jMQsgfZfPJvRWyMmBjm4Fjtu2o6wRkHqevHBPFonVa",
  "key30": "5xucBE1uhcghqiCNp3aX2xMEMabqNAewdjLVYfELxQfMXhQzmujwUw5wQ75TMPG6bbiez3ttjZC1mQ3f2FHspDPG",
  "key31": "64rBsxus5Va3q66UZmX5Zh2vWyRxmJ2JE1wQrPnjwioaUefzhP1XjDwdBuF5oFeXik9H4TC5D8RHSjpzhXwTNjg8",
  "key32": "5RMn44UN6ZG6v4P6NKbApbyg5JTBWDf5po6AeHXhGfdDtjChepPquBgFZXa7yYk59DvuCUXP1oXdkDbsxoaoKo1h",
  "key33": "PCjcEKBgHs9xjxF1J7rPL5KiCRdh5q16ZqnHVH6TvHYs9rBWUcVBztRr8ZmwJJbxFrP9aR3csSVU73Ris2wSGZ5",
  "key34": "64rTWJ5V7BJm3guW92HwdBMrRVFNaBrVLBFMHoJArXSeMGpc9PcBom8U2pd8kdMMMDuaP7ybueKdf59CtgvbfBkm",
  "key35": "2pDGUNUZLgpdDK3eBKL1PhsTjc9D4LK6p2SoPDVW5pcg91AD7HE5Hx69UPbkFYsJtpwYKGMLsFrqBhAQMYjpm8fv",
  "key36": "4G2tu1byq2oUB8mRJ84Cy83J6KaSANJMVw2pc5TSK51UcQ2uh4btU1BQFeVXpvjgwkVuzNybTj95us7hDAf8dZWS",
  "key37": "2jWg5TGeLX1khDVugqSjeu2m164RnByepsZ5rxX1AT24Aj6jc8cJvrRcmggTmRCpe8s7G7YKQrJB1NWXPH61RC5F",
  "key38": "4Fc4LKYSvcLcQiMEEnFn1URQDTXxkQSRLJJuEGzGj5nYmCN5e68GCkoMCh5zzTDMJyBtWRHPGv13k7Y3RGf4DXT7",
  "key39": "wbARNRUDDSX5uWdUbq95j5RYh1WKKF92gtuYM98BEivYC6NgNMZRfJEPoQJBR1skp2fm7PrnqfWACkXubxdNpwy"
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
