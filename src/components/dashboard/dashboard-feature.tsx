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
    "4pDbbeYaV3xTAEDuvRVYMEeNWb1XzmjKshigDVgxPev67P3rJvJtbVSYV5ezEQAuHuBx6pMzMrqk3JhDFyGrRY1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QFhvVkeEsHJnmFdoWo16TLT6emGyGfCp1Ycnk13XeFKbA9HhJEzU2hEzS4LEJQzPe6RSzQoraC5dPTXThhgqmEf",
  "key1": "5ymuZzj9Xgysh6RP6MWFdfUTf7XUWnjqjbwq66KayNNw19Cc9mm3x44CHg2m6jbS8K78eeVG3CeNmNcJwgi9pnUN",
  "key2": "7zVYeUuNPSJkxF6Vzrc1NmGjzSWEdFfR3ndXfkBfXkgh8w8RpfohgFViGqL4XU8gyQQc4WZ9D7eR5erCYALDPxK",
  "key3": "67ZBSWCV2J5yCqfP6HwAArKpw8zamdfhPBZSJLFa3b8qAP6757Y5xH1RKpBKbcXfG3bLFPSoLssHesa8gxztKJ8H",
  "key4": "4pgmSJRnyqK9XHb8u2w3voxD1yERMB6dj5Z4NjdKonj9KcqjJLtGWsQAWnLCBQAxHva467WVMrn7LVRDb9jeV35L",
  "key5": "3kTuKhk2wojRMYih6dazR8BF9xp18azVi1ZtFis8f9Cpcp1UtZ8wZgqKpFSJVx3Pi9AVRLv11Qf7yViUAYPGYzUw",
  "key6": "38DNJsVoqKx7KbRNUmDQ1jYJAV1zu7LeJEo2bvtF95852GtTMpC191BvsJCDwkb3KVo2EgFMpsWVgdHRTsjLndf4",
  "key7": "4c6yCEMgxEirphXwmRub2eYd9t6Y1Ez6AG8upMvWAWhobsDeKnvRioKyxGiXYjpSn4jqeDsHbRi7TDfoAU6NyK1H",
  "key8": "4VbygtX91z5R9zcBNAXHjC2rJ1pSRLbEZC8tEcz6RonBBd1vZ3zNepsH2CF8TQ5qDpfyv51grsTtYfvUtJkZ9u5B",
  "key9": "5aKnV45drMz7FfGeZDzDwTgt4aobCDvX89MbvTjpEP3ZnmmvvN4DKigKAfoKetJYXGCkSefuonSj7ZjQuMnFPbEz",
  "key10": "4ALNLxVBG8DdMZDUavPicE3wRh1qcBwXaGZXfpGaBwmjxVr74V6tDF5DK5P2VsdroPrW3XJAiWWipqWyvbBHVKMi",
  "key11": "2bZtkpbGLFb3Z7kvBwAV3nCrxATUuPHiXNjTMfRK6cuGux4RxaW9VpCBekwZx1jP2gAgKbvB1rhUgGstrCK6tDti",
  "key12": "2aE7so9KR8D7fNVrx1JpVWge4ixqHtwqnbs8yiMtzmirMQVVUSbHRMjzYMDLX3irZaWUf8mkmM8ZomptKYbyfuvs",
  "key13": "58qHv121tJ1b77fWpLaeSGA2hLziDYR8tHPwk98DMDXcbq21R1o49qTmPGkpvuU7xFA6ohGXs9vMvMpQ457wuqgt",
  "key14": "3nKdm7gKtGzGSpx5qjy3PXpUan3nTCcFeKng9kvD2UZKzTKP1f18vDVZfMM5qYEEDfL9Ns34twDQeTxZ7fEZPyVR",
  "key15": "2ZCSQkhcJZa3GoLKTqNbeRmydZ2d4dN8mXwt9zaDyjmAWbB2iQBm21cLk4Kjo4KewqgZTiJjTrJv32SMZDK29h5q",
  "key16": "LKeWWa6UnmhnqY2svC2yvPhs9aQ6E8DSyBMHnCSmbKsPDA8MioKfj1Qj9ZaqMctaZiDTzvggdBNMwWJ6R422qXb",
  "key17": "5bQzvJ5HEEcoaVtxvSm2e3o5pnFV5Gub1uJWhvLmo9nZ9QZefhqkkapRdwgvVby5551Y6ahR9FG2Ku1AQedXDWWM",
  "key18": "5cGz4SQWfF4v58Xy4FbMcjGE4cTsoEqfTCzVUBjGHhT8oEjTCvmQby8QKpN1wQpowVVps3ULoq4EhMtpM6ddynCu",
  "key19": "5M31vBBuyaRfffbvGnsHfAqwS2uRYa9C28qYjiu61N1wCk5Jc5WnjkP9QGXXLW2pq3BaqzisVyTF1CyxseFqT8GY",
  "key20": "27XS6SDDoH8CKXRn9bzf89HwY7qTKAfV8XTzkkyQ4ab5ity6LH1v7g2LXdQy59yuCAojLHF5WzfRdWUhx5eJWEPA",
  "key21": "4cT5ScGCJKMxJYKs9nTqfNFn9SKkiQEmAEC4EcfpR3mSZJXGJVfd21q27S2AaeJnGd9NkRH1YgSXaZRznGsWmApf",
  "key22": "3mtkuyJSecNUpsHci6eqLzq2xKz8r4zrVejtiU3E1W2q9Edp9FoxCBCsaHmBTjaz2J5hHhc5hB8txD33kohSGmHh",
  "key23": "3Tsix1yPFQPwZxJnqF3Wc45dEoB3q3h7Bw4LmauAkMJf5hZ2jmtgbsgWUaYCgGdiKbfPXh1y3HrZbGtqzfVXUY1T",
  "key24": "2z9gK4PTK24wg7E3qsv8EWZhwXq3Qr6Gc9ju8tQ1YNKVsNtjZiLsFi42pijSsH6HjtCg1azT7AvE4DQkYsSdmhWx",
  "key25": "5KpR9fbyd9EnSjwJBbR3vdbsTL3mdh8Q4JDMWpJhtBEYJ2cUMYn3aRfudzwiL548Tb9AaUyJaLnh79gc5bCjSGSs",
  "key26": "5rMuQomRirn5K3kDpZsRNkEKj3DLNrHyYHd4ShMe8BLVdHvjQdua9igSm55JetsZ86R91osxoruc2ijxRWJs11m4",
  "key27": "3H3qR51wcGNJkJSTWmHM8T2m9H7kPfJTRcQubVvMS2n6dgNu4uRcAHbFx3oWhqfkf4DyeRJ1sTjDrnNZ2CKgJYM4",
  "key28": "vsyB9SH2pSSEnFGS72rWXdeVqdhErahN6EELoFXdqWkMHBi89kvb5WbNAih1DzmmHVzipEW2eZCKLqxYG62JGBV",
  "key29": "2AtiU31e5fRdDLpVkZRqvZcd6ZofjCQnrFyT5iWK57Y3wz4rsFwgJzen1C56cQuoBngCnFobcAuFCpoGUcubWQRD",
  "key30": "2ZpHwUd8HLTcP2zNu1D9ftvStzTM1eQP8AEkbAmsRr1RhSmPyMoWwsTDieTp6fUMd1dR9NrLz2Z9QrHQ2udLD6dm"
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
