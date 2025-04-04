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
    "2u4A31DWGjbJD1Pk4wQSnebQenLTcdkEyLjuRZPvLkBnYakxCVtiHoS5QyKfYfs3ZDbcjPRxAQFgaHkfhTJ49cNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vE6XvHvjitWW9WmrJrBxCdhd7QZ58aipyR99NqjxQejuXB1PeTrGqQvJF5obFmvy157Db1CYeD6cTpoK9TAGKgP",
  "key1": "3TegnFN6L5SMRiVgivLdHam9byGndLgC4CCm4VXHQRv3RxpVjfPBre9BLkcPiwnBR7HjgBy92HP9ZovbsyceXAYH",
  "key2": "i5HoX1gWZDvUyqqD4wC1EBApzzfebbxCQjw6qocgKk9Qvtd45cFSNEXcTWUVFKpYce2GhRgbp9M4yz8rtucthni",
  "key3": "33nhU3aijJxEZUGHiqrQwfHbrDNWPuzNKwyBVBx2RaysnBA4urwU28D7QgfFA8pZpt6ZoQDa2qifqSTE51Tuzsyy",
  "key4": "2wGVkTYfoNDwMxKur8WK8MxrKHZEKmuieMPTY7LRZpEAmdF2CsKEeU3uNmfxJeS82sPBXeM3Srp3Lftd69NW5wjN",
  "key5": "62MzjR5yPrR6vCpHLFJymRcxdi6yQu6W7hUeYtmeX3v4M7DrCQmcZfY8Kkm2KvM79SofYcxhMkKCJbaRjjXXHvnb",
  "key6": "HzvTUDbqSxgDGmHu7x4Rbg3w6RhS2qCo6gaQTa83G3PJABq9GKG5kM6JW3wkRXxKormK9yuCfarjvWVtnhtVnHz",
  "key7": "5GX62aNns4nMm9nJBWiNFg8fNfp33NY1o8ra84HuNFGJ8qnm2z3thacRsRzVpm2EaWKBUYnjc4wqbajVoD8QsubN",
  "key8": "JB3hEcKqUwVJFmuaCgzz7WqdbxajFpUnUYUtMwtKHr5TNN4mPP82Ws6KVqwabFLkVQips2vSnkzDuiAze87Wwku",
  "key9": "Qe5XLbQ42vaRZSUXmrujerX4T3m2Roe3EzwhZTLy9ewHi47gX55tR5w5anTZH18RUWU3nbhj3ntn45B2bEoZG2h",
  "key10": "2RNoGF9qY7rVE9EQ5MBFfoL65RZcBKcgAAj83xvn65C74kCNRxVhb1XJhTxGk97RMHy4Fe4W1KGVqmzRQDNoPy6v",
  "key11": "53j9EeWWeq8gGa4fhn914mvDz8cMtKF6jMqnmdcF6s9n558xFEUrqYQ6zLrHD5Jw2EqMrps7jkPE3guDSBSGqLHm",
  "key12": "AZCFgyKJB5y4Yjc2TncQew4JfUK8qAEUm9fog9m3hzqNnqHejRY2UTwJWSb2N9aXUakq6pqyzuUbqtTLtVSDMnz",
  "key13": "4kdfAitEtD2nfGbQ1hBEFYYfqTAz2Qs6DPdVathzTF4efrKdk7zQFqri4Mwg1X5Pwc2Tm8xWdpqG79MY1TP32uwS",
  "key14": "5JTZTmsaQoXMxcmbU7SYwVdxzZUkSi5zrrks3XzWAQrcFLsHoV5786pYtwvqnQSyeSpVerBYJL84wrgy4e41UgRr",
  "key15": "2jbGEceVrQFsgf9riPTc18WGCg82hzirwJxqKqCuDSLeTb3be7E5X7fCZJNsaSDE5P2WtdDg4N835YAJGaPhszaH",
  "key16": "3UEtfB7LDRDfizxPZUzhdnWX16mKWJdxTCLKnHFbXRH6AMn6dyZUVN9tBZgTdQuZRH1ozioRsBRmnkhg68bm2iwU",
  "key17": "2MsaKXjPsovuyicicoDA3G65QNnGUC6PUJUy3MAb7FVSmbHEXxcpXds3SWckgVJoTM59HeurRgmfaAzgrAmajAS3",
  "key18": "5VtELDv4QdFmEMTuNVdW921Lpv8UWiAcGeJ8GWAp52JwuPqAVG5v7UaWz3jeXqvMtrfZcnmhya8dVomEYj54MNHT",
  "key19": "39MeuJdDK573HLvLsqo8SE8jokeTFYVzPAezawgp9doBiA9JnVg7ieSPviN2eDT3EPYg3668famuSvvWgEfsQ3Hu",
  "key20": "3d5jrE7jLS9YCw2rqjDuu5Dm1xbyW4bLFtNndfHoS3PukQuZbUkh6QPH6U8gbwgzRgzcq7XEjzTpHHknQQSpYnXy",
  "key21": "22PgAgG3GHv9AoNahS8FNSsKH6gJidhUqTko13PYTGBnJcYZcy1vzpqsyaWNBxkchSRL5DddtL23S5rrTS82mYYT",
  "key22": "46jLgMnEhTyBSPAdAFpAiM1xJQJ269qsA4uWD6dyuqM4c8kg4P7v6mkC8gquNHNQVZdHxH5urBHtuEdCLitJ2DxH",
  "key23": "4VFKnzfSDggGkrSRRQ3ScVz5zP6yhVcxbXPMCRWfHY1BJsmnKihh84AYRAfGkLrXSakZh3sS8QMeTKVGEWtz18ZK",
  "key24": "2XWCqQhdTa54EfCUP1vfq8gAcnpCH9ktcKzDXcgXUweykWvo54GDodbMtPrfLfEo3drgMF3Ei6fAW26GDDXzFKnq",
  "key25": "26Dv3qXkJ19cVVXSsruuWMxU4gzZJBSskaLriFdg48Bx8VdDUwuAR2PgyJ6b3NvVgXVXw9FGkpebLRfWu6auPXns",
  "key26": "624asPymw4GdyHTif39UmEmGP2YZnNDnZgoGSKPk6ik7r3kRrHMLutYcLdF8SnoQHiAxgPzzvprc4aALeFZhmUXo",
  "key27": "2GxSQtqvs9QomRFH48LcgWvPEDFSSX3eEs8yxfRzxNEr4vApeDDMqeaxTJkGrMWPxuoRHTFUbP973Fw9PhKa6MC2",
  "key28": "3zvUAbVaQPn86Vuhm4CJ37ez4mdyB2N4rJX24BhcjiKEbnos3XT5XsHijKUjr2ctCx6VPuoQzuPbrGtcWuHNhimZ",
  "key29": "4gzMQhfVEMPt6BmapHjjryajiQw1NRo5TgiVrPRXv3uRGpYCNyuBytFHeD7DQqaoeEvY2JLM116rtgPZ8smLbsp5"
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
