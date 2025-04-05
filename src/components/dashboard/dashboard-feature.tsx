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
    "phkHwRzo7mHnNDAGdsGiaPn8eSassvTuQX9WUNEWtN1iWiyzPnmxx6qvUVVLnR4Zpbe94V4twm9HDmhWwhEP399"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Er4FSRKT1xC89Vu8mhZPTTwbLak4siA5zGcxHWJRumMGGZJiCAqdmWD9NkntMRFGotsNUpZGEWprmjAfKoPWbaL",
  "key1": "sY6R1WvLZMGRRrnPfULaw6xDFuFE8qnJ3fz452Xes8xtMJFo4Rkye9MTTkBCAQ5xcmQaV1VZKacLgLLq4bgUizX",
  "key2": "tTnxuGycz5FvjC4r4kVfX9NGUST4yhCBrB1ZmW3u4dzBsqLeSvA9na8eGTJKzxyqVWKYhM5tTYnXgFqAtsca5ff",
  "key3": "67jvGPweVsNGW6tAfMMMatooSokqPcXuJz3o3umBNfYW6cg4iX4Zi1jEn6zpud6CBjtPwMnZbH7oy1phzKQ5FC9f",
  "key4": "4kgNxzLMGrhsmWAAa1GxPc639D4x7ayuYkRT91rtFt6Nsb45jDkTMbNAVintQPrmuRADAHVUMnqRCpjYpL4W7YWJ",
  "key5": "44f5Ftrt71cwgTe4P6zJRfbRXRnRG9z6ZFbLz9Uii9VbsC1YU21aQvFzdA1H4Hg9uQ7B1wSspjrxAHZ9iRyJMAEC",
  "key6": "2c4wG2uCaUyyPv4LBwQ3FX1ytMQkQN2pwgFLgtcFpN3kye4poen7NRyo2TKWrm1toT8TgbhfjFWhvmcbMyptsxy3",
  "key7": "FeWMiaA5LYqjc8NJeV836BQFEmXTsc2ZFyycu21Cf1iaN8GuJABHetq16FvAQaRK5GszaSuvzeLKF6bb4nNXrMc",
  "key8": "3LrVnFYY22KXtzBLebkLtaARuEaJtCe6wfab6a48pqf3dZutPKAtv4eRdUFPuLh1wFw3icWiWcEmfZAfhJLYbPGi",
  "key9": "3P84yodbdEcD1CEtmjnR5YCAz7QNsWfUfaRZLYiu6FvUQzsvu4SRfmenyt7yBnWp1xiY7rbbwPePF6Q2STCusGQW",
  "key10": "hHhSRkxxT1jsWMgp7cGnZAzABp2LQDyqQ2jKpUmZJpbNxVYR32D5mwbRivy7TmzrGTv8fjptwWfG77yCCivsdZK",
  "key11": "4BsKqyUXs2YbJnK2M5BiVB7awwXjbHga6MgRhZJWBJU1w2D6A4WehXF4sMSvCSc3FEji8DGzfkKosy2djHYYM1ri",
  "key12": "2NSBxS8KzXyyyjkr9BMFEhbah7MUTSjrw6GJT2PjhmqHohaF5SyLzA1bWJHWej7jNmq5H6FmKLCH3fMeqpcayq3m",
  "key13": "24DXCkAUqLNds3xRetNuZ5y62iarSPao2s2xPk1kCc7kHZRHjEuEvz2c8zTR4D7EMbi4eLXh7vSiRHqcEoyKtMeS",
  "key14": "ULDacw9Tpr1fdwyhmU9tQLYdq16HGjc4q6M9areTwNoZSiypLSKbLzMzogg116F12Hf1ocneUQztsNRcqrgGrBj",
  "key15": "478fnR81Rn7ztq5p71aLEDZF81yAeZrawu2poh8UCcrnxvTf5pxsPEzFYgzi4FYXZfqp2hTphU6cWn7iwcUpuDti",
  "key16": "ZJ2x546QhPJHFKLP6jEtCgKAn34ZvnKZCHioRyUdvQrm4d7K6p5B5Xa9ixq5ea8uLtU6zsY6W45HNUUWUHoGT8V",
  "key17": "3FuM4jJQESfdCfUa6mhmUAeSvLV5mXsdYy3oRhuUK4fLfHioR6zUsLUcBEqHYqN1pnWJ26PR3Gagk4P8KdRCc3kG",
  "key18": "ZPizahB3wY8X9T7RvRTtNeuSkzaVdyUGdPSqSn44DagDv1y1NMerSWNnQYxccMuaBCjPqXEDWv2X4nejHCXHTbp",
  "key19": "5miAwmzP8ScRXwuGeG61Antr2hJHhM7bts66C9fVfAzrs1Svwiqe2kPe1qWyviVn4wxLUogTyFA2Lb6QzZNXF9Dq",
  "key20": "5nix8PESSqvQdmHCEJuvyzxsh6Qej2mCX9BbiZ7v4fqYvhY8MK8GAmCU2p5Q1WVDW1adj1mYpaVCH3Zn3chioyhy",
  "key21": "5nv2X6xWaGB8z6BWLGqQa8erY1a8SycRdzGtkzk9eTcGgv63Zxq6kHeD9BXa82Q8JCeZzvEjVLTypnz3zk1pBPqA",
  "key22": "3f16QvghsKCm82LYQnzT7y7dayciEY5XzRBZyHg65SsJsWzRsFuSikjGQrHUT4tstnNoLE2eFMDSZpTC7d6pss4h",
  "key23": "32vf6BCR9gT1oeC6wmtHKn2uCHnV48AtDH7UNBe811dwNjZt4mcLJVjespfyi8zo5DGJQCP9WGxMRkDAFs1VDp71",
  "key24": "4W8DAsMvfTSQycKL4XYsE36K85faZmZu5juHa26XyVeSn6SEZ2kQhND7ijuqbHLwyHahsnS7MV5u91bzPVr3KC2S"
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
