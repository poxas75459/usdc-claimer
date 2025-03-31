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
    "5GjU1GXWP6J3iaQA72xZ5JwjfokySBp4PLy1zgTeiw4aqvJ2T3irFFj27TNJscaWNhTnD15GX6w3LaaRE5dzw3PT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P1uVG8DTGB7vv2Z2WFSL2i5rtfBMogsj6SC2cYjiYEpJ49HTT1CPKt9XRpHySL3ntR4DGb4WrZgMPMeAxWtewhk",
  "key1": "29E3ehUy7UxtuT4wg5uzcnLeVLvkGo7mz1PaiHs7KHG4byPvs61eEXPUUjBZPEa8671k9LT5L4CeQuky1NRRCuNh",
  "key2": "4QfJLJ25DGXX86SkqwCZHWDGZLZNfvKhMxmeMLqMKGPqSwfdgd9NFA4gYZfZsn46Z121a1XC9rnuEBLPn8wxAz9Q",
  "key3": "5z3qybZ6fKMRkfg46ci8KeiEahfEiGvBxs13pEDHyoomarkPaVg3ETZscs8hYKx9G9Rzk2JatLR4wEenwMpqU8PV",
  "key4": "zfomJaw4ibAEp4faSD4GvBwf7iymF3DmTzdCjLrKAvk3hxkDBbwFVQ7MpQEdT8C32qPrueW3LLfjYJd8Ki16nXz",
  "key5": "5Ni7PnkRVei9x6YR8Q8H5sfEk2AJJWFt3hqMjDC3AWR32jymY1BJFTSAxW3YeU3bD2xFS4kcoPh6wc8aHBJmSDmK",
  "key6": "55TSetKci35D5ihXoZt3xqcK6pX9G26WJezZzBpvpZs5JGQCsDYRvnzMCSdnAMNbkKW9YjwdgES5sDNdqziJJV79",
  "key7": "q6weWAuYoK1DPpX5VWqKvSsNB9EB4WxmZZNCZFvs981RY6TCV6k49u2JiidV6KBQkTxSUf1YSHKMTjwscnkpnkB",
  "key8": "2HAwbWPALcb8ZBMTkjwTjMAJaQNRZ4Ly6UoxQoHYRE4rY12mGrD2QgiJZZN9aDCYcdZNBUoiWcYKjSo3pPEiV6fT",
  "key9": "4xiPqR6Bbf4R66UJTADcnhp5S6vzXL1CosDmutS9joMtBLJy1jJttwgNEKX8bwCE1eKLwz5WwBrJAv2FPLXR1PEu",
  "key10": "4QxsfdB5K7fJuh6bhw1dTCcSvWwHSkxQy2ucwo9oZAQhUQvwJb3EktthVCKodwTc83n6GtyW8L6cBnhSjb1GiAYY",
  "key11": "2ERfNd6WueFBB668s9kTpeRtBJfDx38osfDeY1jAcWVpPoiMiMME8dvT8iEQ8mBUfFMAVcW1qUVhZyRo2xXKHzwk",
  "key12": "4ib22uM11bo3Seo5LMVM4PwpSUestwb2ZBFY56tKkch2fNLqd9juHG46uUfrY9YSJj9KSkqH57xpmkKAQPzwJM9C",
  "key13": "3PqBV5GrZPhyytZoR3FQMCsix9F3w82JyJbwiuw9ehVcMN5JqRPGqKaahXSDxSpfMZfJoXTd74pbGkVyawNpnQrC",
  "key14": "518qGhmbnhu9E6BLmfTeiyXy7Fphd5uWG19mesc9hozL2dpn5qd47Po55A4U6wE8eebZUUGM6rrcLBQXNVi8tbjR",
  "key15": "9c6P6FKPu1Tp8GTVD4wx5XsDzJ7w6EJtFtuMbBbSDoEoYJ8wsjeCCRX8oh9Vu61K4q7wwGHtyYiUBGCvMGFJeDN",
  "key16": "58xqG6JrVyAe8zd8Mt22jmeWdXodjknLwMumThbFMiKvAE8GxwGETdqbQ4ZDq4FHcHRyPHHWDczgkaoM4sexTaM5",
  "key17": "2z83WpDMHsu3g4mn791gswtXFWg9qyNYfBaKsjUwMnNd2R9x7ZTkGScJwB2FqAkT2iH8bB94t95AdPevESQP78o3",
  "key18": "5RbVa8QvRxiUyTpHysd9epSpgm9mkQkYGtYumzBBQ4gLoKJ2aLGMGHojXUh5xHuyCAY5sUt47CCYACTXBUAhGPQY",
  "key19": "4zQbStE77YtTPp2k8hatRJHr44djKTCMscUDoyzYj3AMWvERquBUnWeA52SPGZ34LtYxpqQjhMenKJHYUePmzrRw",
  "key20": "3o2yNAyTqmxqcsUQJByK2rEjuhnTcHt6rxxwikGz66zb86P6pYgXM9KeBvU5Sh1DuKoLDsktLZi3ARuKskkrNbTb",
  "key21": "42rCvyyhuUy83L2hrb1dwVFu3kC3znpyMLPajSeMrzqTidZo1u7qK2a7gzLR2DoUdjyuR8P8Udwu5uSEmU1tppFZ",
  "key22": "9YCacLqKMa4TmwKqUts83CnCUj7xm8S7qeNyAJnciFSUWagREtBoEGnK9MKMxBmRhWhv8gy7opcYvc94cW4Qqh4",
  "key23": "51n1dsPHGzpZLsJXgs5YMTSNUHkdeo5EPGMQsmEfDeohunAZJhH4ZP1GHv4DTbuaSGvoDPe7U7ADkPHnxUUVnSN2",
  "key24": "2iK7eBH2HK7jh5nJpZqZzByJwprNkXN4t8PAFPAmzfiwezY9KDC7AEcoC9whnNAaj6M6HLmWtccpcXscKwZjFh1E",
  "key25": "6Ut4EtPK6n2VuteEZbqn7RrM9uhcBGRGCWtZejZWSoAjkJTYJaDCokgrDTNbYXHGR83e8Sk7txHVC8dkE7YW2sN"
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
