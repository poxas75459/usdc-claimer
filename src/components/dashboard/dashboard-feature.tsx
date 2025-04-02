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
    "5aLiTppKm1GVk6d2Xzeb5vVpx1CmUrmBoVAB7bSbVFyTmL6NrrDMJgCtYti4ACUum8w1EXPmNfS4cwB7Kw3o8e85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yWpp4P7Njp4zzye1wMmES97WP1dCMYybNJx9vnGJCAEi8AAJpB9cdZyw17M5y5yzkY9cwdrhWQPJZA5odfxkfuL",
  "key1": "4LEz9FRQrmweBDhkggdYBLfkhuMScCKWmrUVDspKNKg4t2FzqpxYEpMWAe74wjoANKsEtVUJJch9GJH8LA9aMUCk",
  "key2": "41B3kZ4bwSjwCYDFaDBMg5Y1yzZc3esqWW2JvdLWpyUSAG1uVYH3F1A24zZrS3sn7oFcZTcMpKGyXJX4fQVHu3ho",
  "key3": "47Lkma7PFsb3816UD1h1KWDHjH1ufvjyy7r4cwNfvgfJiR9BQ56YJgVRd9dSn4cYyuPUJ33DaJwzkfr1f5wMjchZ",
  "key4": "5t3dygPxNVbsaFnxfPXcfzM1YWoJxmmoM5AZBLijZqPpsfx2mLUSUzB7e7RZaVKff7sGrNEj6Sihj3uW1S6zfVGS",
  "key5": "6oKJrtsct6sGZaJDMQTs3NUs7ki3ui7iHE9j9TG6twhArK6PwLJkraCRe7ndQLAdRhQFvyX8rm7bcxJw3gCePSE",
  "key6": "ZN2dD6M5bwMo123VtnZ2SNMRPYyNuCQpz83t1aeLTMVFJDhTGkn4SmafDxK512JxReoQT2BT59nLLpZrN4w4ysU",
  "key7": "j4c2TzWpNgY2h9sGNN7oemdG12YNWde7E5RWdJdqCVTzyCuTjg54oRqZ7n8ic5NHNQiSNmNz7dFfGcS84EqzEkz",
  "key8": "3axdNPBtNXDz91SeK7UuZ9rMa8UPszWgEeh8TDa29L4nuahJCGVbGS9G7vq2ty8Zgvpije2dVRXHGur9Yb4bqQ5Z",
  "key9": "62N9ZtzVfPGvq4CgVLYEMMhb9iRRgRyKczYk2KgeUE7ub7W2z2uUu6KzuoyEXwERJqNtVm3D1Dv5tEa5bCfPzeEh",
  "key10": "53DpegbyWKGQDz39uPtzNdCrb833etYWzLc3NjnHp5uQJe9urokvSB5bgZT88Cz1kPdRSDvLbskUd4xcR9H6uCXe",
  "key11": "4KbpW4Uw98MjPpmqoRo528WKTHWN15hMqLfLAAW3z8htUvQDQs6y2GPiTSHTyrpF2fYaCFbp7BEnkP92MeE4R8CK",
  "key12": "3Y9szWVLFjNHLEXgWKo83e93ssbo4gNDSc2oCoyoWBRxsevWZZDaR1B18RtfRS7f7FyBGo9t4bF35JhQEvBaPit7",
  "key13": "kNVMF2oEJuffc8RgTk43tzLLT8iy638VDVZu9vEANhCNuAH9DTPszfdKiuCSxEDJwktYZMMMd1F2n2tAwaVbypu",
  "key14": "4SeBH6jpA8814Mgrv5UyZvuG4nNPz7gWF3kb7pgZfpMZUkSZRP2gqnu6jeYV1d3fsaA47VioDN2yNtUbRZMjT7Mv",
  "key15": "3aYWRgNgD3jpz4ukx6D7ywVwAjTBMjkn7MbmpvGkFKrA5X4HjNFdSSmWtaj5r5CfXFfuBHT9Wc8UeK4PZPb2CnWX",
  "key16": "2fr3tcMBzFNYnnmYxxafAT12aNTkz7g1f8AMq8sfwzmcP7kRv78qccQhXgmt8zWZBidm9sLjw9i9NyqMzSEZ1kCN",
  "key17": "34MYsTbRJ1yVrS8vQknkd1qWvjhQEf65dYL4Sjeg6YvYzvpPoTZSR6qXzpS11HPP2jhkDyDbvZKU82B5NenJPKme",
  "key18": "qVyTCAyDZ2ujMn4ECcW6vy67ihs4gWdfqLZiX2zZocr34mSkriw3ruyHV22VHQuvTH3Ng3vSgPB5b3Z9hJSkjgx",
  "key19": "4CF69zY5cvUu8cUjn7ydggNwFvoWgmJf5UC1D2V3TYCoB45hibDHnNAc2HeNf1YPNgZooqPbT2MpK1ao75D4wfkp",
  "key20": "3ya8vxoJ6xcUfWfLePQ516mHfGFkqbmrj9DD1tfDRFMDorr1yF8jHCpeVehtiWFWmoniLMZcXKDAGkXeksdqz7Bw",
  "key21": "4TLoMqwguSfQskAqKjE7MpjmYd32nfWyyxST25EtPdEx6speoCcRF6k18mU9EJvAyF8EgrbzcQ5b3NYG1NByHdQj",
  "key22": "5uRe9k4LytpWQmd3mgsTeFzt1oZouZy3rwYgEw2yED7cKpPhsZUa35kS1qR5iZrwvBrkezqfHcTka4STRTs3MXFY",
  "key23": "3xbjGGeoAmK4dB4R8VtfumXshzZJifxwch5xanS3F8fr26UWwfii9sAMueiqcPgtewG3ja9GTykHR8EVxjSKqws8",
  "key24": "51R59KxESQCneNbm9wuNUwDNdStiMPGbpv6mdBn1Z2QByC3JtkMdJDH3ZKmt2mX1Yw6MXqu8La6qYB5mujNpKmmP"
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
