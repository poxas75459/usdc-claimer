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
    "31Bny9KVW2kXA6V6zujyeTv6QSmDweRPLDAUpVJvYMS4pRKs9rqy5hZkesCQToFBmQs5UfRnasCg9v8pmGh8QvQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f2EhYbgqi4sCAGbc4DB2ncEXpDr1xSA1ajYxkA9VJLDQuhhS2oxbiTzsFtkTfq7mqPBcJJL8Zn3KpYVzV98Vsoe",
  "key1": "5i3jmDTMJRfsn1D9HGfHBCc4Vs4Pr9ubNBGzyyUzJe4p8Y6GS9AhW1jhfRJBDxq9dTSM84Dtnf6jzXnAYCwPBGUo",
  "key2": "4zmTkh8tcCdZWrUYwJvzwtfkBPKEN5oHGB6gqxndiyf7ASCWmoz3K8VJveMinpaF1voiRhbk7RWtG52LsqYM6yzZ",
  "key3": "655YdyzUNsGjSL8XTwDtxMNwC3L72tRyTC1K8V9KxhKyTikebEoVnarc4hU2AVfp4kHBzUPauBZgCuNn1C3WZ7Rf",
  "key4": "3aJEf6ZkBCKBj2q32MQaqRh4ehohRtz3HKawowGKHU7t3MZHvdGtsdFt4MtU7Kt953Km8FV5Pprwu5mASTyrVANP",
  "key5": "4emgJZNSuuaYyhipqRp7YFoNZNDbGp7ahbipZKDM619o9H1aMX2hPyV7YM2CT8XKdTurnwVhPDfpqHQqGowMsue3",
  "key6": "15UnizenJFwnqVGh6zee3hiStVJ9Qx5xocdHEayDka8TvzHfWSFMXQVHmPQLZMi2m1Pj6ffqB45CbnwHzcfpV3d",
  "key7": "5UJvpMNVvivr5JKN9dMREVuw7YrdPDQj15DsVpKxnC7W62qCDoGf5h82V216Xr8yVNSLxCUumNHBL8C48yjPbdPm",
  "key8": "vFyJv4rkDqZY5RyoJVNXhxtfvutfh9XinY2Rb8sVBER4fY8f6cFPQ8nb5wKDveshLdBGNjRqroK6qJYw4zPPfXK",
  "key9": "65EmA41uHfBBmuBiu5ifRnrx9TvSQpRfMywoKT3Q2Xra6rkgGqR6oMZoWBWXDevKxRn59wYznby9fo6NftFHRKT1",
  "key10": "521aUUYG1uytYiSDtWTaBNHTUgZPKWgCkfs4D1VkV3bNcNkBpYmpuDRvC5B5T38RLf6Z6LxDTtGBxNQddNA2bJnW",
  "key11": "4ATCAQNQ3jKo7LSF7BFBb5zjAbcPfL4VLsHA8VSDcNyLKCVJntMfPu98LqRmAwCaqmSvuiATF2JedmaM8uUwT6Gi",
  "key12": "5f2C55DWxjSJ58WnmzVy9FWHtnk3rP9cAdVoJaxwkm1F5pnJandQT8osN3Sp4UQNG1HgtCHz4V2KJvuLPbcdSaNV",
  "key13": "37Ezb4Q53tqok8JgCmFMAoRVzbWjcVc5pCpyG1KNya45p8S8tXpBpLv6nBfMeuCrhB9nFPLTouz27L5W9RzHryty",
  "key14": "47cEHncPH7wvf6UeK9EAtsvvdZjLdpveL9MNWb688jYXoHQzCzgTJNLrnk5y5BV99SNLUfuesGV5gNUpUZULHCVF",
  "key15": "4j4C4yofV8g5JPohg6CZqRa4bsx95uUNV24E7wcjQVifzodzQG5G6ARh5RfeztfvFLHSmURr9f7nbKLmfC5NQTxq",
  "key16": "yRE8gBX3ohfigD6ENtkeqbTeTeYnucMuYa1bCnodMvcSF8yuaHeLpnMKubbMaW3sXjS1cNfs96NRQ71n4vzLNi1",
  "key17": "3FnasXusuuR4vTAVP3FbBfcuWYnsRnBfHNAHC9cszfBQEigMaciR9BGUvyjaz8uFCfoazi29kiYw5RjC4yjycafn",
  "key18": "2ZJ35YTArPRw7Hp2WRjL94VZtykBM4rYGDRNwSi3yUhJMub1zhtqRvskSvzJi7sWiEjGwzNqQD2LXRgX9KWzNJty",
  "key19": "5tZkvFZxuiCU6LntEDMitLQrAr8qkf6KRe6RXehKVmEkahwKKH4h6PCSB51ahn98BdRv2NrM2Y9VzE4K3rJr134r",
  "key20": "2ywwbJzdQ6mroV46QWRNwca1h7b9t1LauUdKSmscVGZ2t7Dv5s1L4bSYhrLEcnxBsBUm2f9XFaoBkELSMa1FxqRg",
  "key21": "3gLyV4gdMAL7Z9Rgh5VsPJZ6Qsg6mqJ6XQmPZhhSqHsGbjwxLN5iSfrf1Qp3KssHYDbvmnWs5Ac374hmKnKt2wTd",
  "key22": "3VeBFCojQsddMNAAotDVrzbhDn6PTEg9T4MzJCpjVGdAFjsHDJ15szVEvqAvNfqGqGUBzb5t22xqTkk9yXTScJwi",
  "key23": "B36iK1xqhFp9KoXYHswGWevpCzirkr8A23ianTAoDiKyCBhMQa95Jy4LvpRys6iHBnCKULrMyp2S16Bggfcxtrx",
  "key24": "93aUQgi8yT8bd6tyYQHUgURJLJegvQXkSnsQAstqyBAmpy9JeLgj3PhEfiNyf9Sjwk4LNQhUdBamsQahsWB6paC",
  "key25": "eFw2Lba1uJv4J4m2ozRMqEmiN2JfgYdAds4nePuk3MPD8RwSNibGBanAqdsxAWBY37CVQTW1kHq3FbACKQG4aT8",
  "key26": "2FTEWesNTw7ebazibeCJQXGNhEkhyy2pH5uRGg2vUFBsUNDEqHoK1Y49MR95Gie3tZ9ha3Tn5raxuGwWoJZmP1xa",
  "key27": "2xwquvi5bpVcErAox4pr4Ngo9cnnMnUWhU8tT9Sz4pvN4o9Aaf3oP9iWBhgn5stc6jieJT2tdscKKbCkExzGLZUN",
  "key28": "4SGoY9JoTP6KSG3TVMuRQPyjpjw4f7nGtS4cWQTUUe6NaZUAaP9sdoUWF47Sb718P5gPQdJCEHY4rLdx3c3DcGxS",
  "key29": "2xWead5hCepq6gdSoP8EV7Vp46xSWNQYXqT2YqJqU3gr2zhvFN41kDwuyuyU97y8vhMWVvvvpUhT51GPwMu6e1GZ"
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
