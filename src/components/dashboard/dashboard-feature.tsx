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
    "4dXPokxtyLkp1CRuXAYuM5EZMXTbTcjNv5fWPE6e6sSUQpH3Nip2cEHjtCrQt2x9Xtq39VGtw4biV66NGcrVpUhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j3pVhmu1FVtCT8RrMnzyWznSxEZ8XzjF1Q1aosBFbBqjD1cTaSpBdBA4wwasgUrXK6H34zRkQEfgouaf2BYnWP",
  "key1": "3AYJo1SBPwkXr1mpB7ggrbsWDXJ2E8zovAAg9VLcFkUcnadGtftLLvq1isxq6xYaGWvGbXs27r1RrsznYU8PgDWo",
  "key2": "2nGjmPKoLyVA268LyD8F7p1CKiacJhMRykc4DDhchetNGv5dTB6eYLKMTDTwdWupqEoLV8oo3boERu2VxswRVPxH",
  "key3": "n6T4AsvBXkvyvokYMDDQGKQMU3rGqBc4Ft6qmWmqno1ZsmPh1aBW1D6ggxDDaXS1VQxf7wTT9DJoGeiTdqVeiCi",
  "key4": "3vm39yy2ydgRFFxFg8EffEyBpWafG3t2vuFbasiHZYxw4mjBZzzyhCsTGLWjzbaUw5pcfewy3rGJSqUhtn9nCUx5",
  "key5": "CR3mnHgHZfoRVv3i6EjTuwtMJ8yXZC66RjAWHg1mddrXEtUseAQdds3XaFUvR7YTRbRG6SQ5qCdveoBhTYUe2Vz",
  "key6": "2vyGw41jYT6yjFfKa6T8unYBLTr5GK6xJaCxCP1hnNp3ZcLb9pmsuBAKRrdQHWRW2QPXbQQUd7TAC9KSxAxHoK1E",
  "key7": "5swFWff6xFJZzKhoUWJtabFktVSNnGVxjiomUK9nJgAsjSjr6vwQWcqwbkmN6w5dFQ9pkcf7C6PRgJrX4aWUJtyQ",
  "key8": "weEeEDcdnWzm2BApwfxB2YGjfYmDwSZrzm7idgU5EZKbZuUoc9zb6418A1Synx5s2GoxgThc3i55X2bzQn4gPWs",
  "key9": "2kP6MrmtYqVVGNQ9KWhJrHoGK93BcHj62JGvFGQ3D9wLmqw2UnCxeN5b2jMmwjbPFxTNh4ydNzF4Ljw1SFCbdSD",
  "key10": "2jDszgaZBkEeRsTcXBbnDgzM4LFUTX6uLTj1gNA8udHVsCmg7sVjMuZYbzCAuLh19rRHMbmgZ14bQ1NyuMesAxFJ",
  "key11": "4tijaDHeof4tmSN1Q2zHkmtWwA5W5rXYwWLkNqwG5L83FydjWUCG8W731HVzWthe5sLbb7zecHXeFm9xNz1oWVLM",
  "key12": "kBAoFMx1wPSpf75Q2XkukUDRixRPionCVMyJy1fnqeMcAuo8zAMhBy8QwW7TStVWpH2iyRg8asRWYjmFrdshurG",
  "key13": "5H6PALfLa3hJZy4xRW9iuDAwDuxpAHnJJo8GUwh2pQt4ka6TWp6to8gD6eWjLpBYNYtDXB7iiVJZmRCGyvSZLSQ8",
  "key14": "2bAokyesx7btVgjpuMbsHpsiaNA3ZwdPSVAsihxtJfqHLhyCvhAaXatwQ1z6ucgVJTZbwcSD6kukpJpBxoxKsWeZ",
  "key15": "35bnH6S39YZRNoNiVgDMEd3bxxpYA3ikvf24sfEmEBqKfuV6gkHkkzA22FzguRE8nKUJi2xxxBkfzXYaF14vnRzZ",
  "key16": "njizqQapE5zV1Hz9RwupncNhP54c5mKirNpR7Hc356ZPcnvQJiN7eNDDQWb3QFsx8koSR7v11bgE42MRtjFGKMQ",
  "key17": "nmZc9gpqqgWmUX4unb6Ngxfw2oorV6RmeVVWrpt7PbuHH3TVSDFzpAW7rTAMLXem8GqekBBvcVMJvEep416Zz2z",
  "key18": "BHzDGnuY4JpHposKmWXChm66t9shrWyudSnBK6T5wKVHcMRXJ9CL2t4PMpUwfKLyNmMPzGHFeQTXZ2qW9oRyJR6",
  "key19": "4wBp16q3Dmc9XBhZv6iojPMyLEa9QkWHvjFzgcU2rvcS25GxGtmns8GXCpDvz1ipMoqdSvtSSZGikK8FTAnpyPvd",
  "key20": "5dfof8zD8YErzA7w8zqtffh7J36tYvRGpmyXVKZBtgCUCGTXeWv4qTXoXepQFMuYEPkrd13zrAySVr3urMBmS78H",
  "key21": "3Zb536N6qmFox89dcDKcchbWC9L5hvSDx5tAqfY5P6RVAK3JYssTZShRVCpGVX8MPoxRquWE1b2GSReK81yaYdFE",
  "key22": "UoUc3yz7WR9W94EbS7FXbqa2RqxRnovjvawB2vq8EfWvqitrCwSoQfyqmNgvjvTRYRvXq6XmXFCvnMdURU5woAo",
  "key23": "4znKHXKDmpN9scEZt1otJtFZpJ9k1kDG6zmN27GQ6JLDSbJeYzj329pRcUxAgxGRLH6zvxZ8s8RechVzbXWNTvJS",
  "key24": "2u4bxosryr4DKQV8rzYE7DZG64LV7X7jx9VGCozfRXxN3bEmyiCxpxSyNZu1AHUDAoZRZKQUvCGUyMpxP8Jdu17t"
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
