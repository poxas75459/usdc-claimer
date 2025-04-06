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
    "3eD1iResGJNHxm2SZpCDegoj1smDLqbpcNHUKByV6vEsSPuG6kbHu27HGGekT9JC3knbAfYgkowmW2KT5Suz55Pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t1aPV6YeGSS6ds1zq2iGMPC3Lrxk5j56AemgfJnLHKSnzeLnc7h6GH3tZDNmEw8UC9iS7FE851yBwDuKtqp4o1a",
  "key1": "2R8TxyuwwGuGrUXfCoZik9ZaRHmXppzskaSPaDU7WiGZgPqmM4JjoTxe3Py3LmbrSxPMSy4yLRshx4vNEHAgf8pi",
  "key2": "2h4Pso5Wyp9qa5deJr7UVsJMXHpVp6Xx9hxfJaMGVMaBQAaUNB5wwNmJcPiW5kus2opD643AsosgggJP2WiT9GW9",
  "key3": "w39HpdhBFu2wa8nQbVPEVHFdQRHDiAnhnMq8jk7esMvyej65FN6Mrs29yEYLtGZaXDkL851wBcc5Qyr81j5WjNJ",
  "key4": "44DHhdiszT2h5FD5Lm9pPMH7S6eMBEG1sLDobF642cUDtzCMEuhvrtJJjbCxnSfPJYFFDXcWbJoyo2gfvCb56K5r",
  "key5": "4MJBVVs9CMwzWxPMxtnR9EqLn67aTV4Mp6L6oL8ENJEkM8FGsB3pa1cA4cxNeV3my4ovc8STmJCeN4gHo1gdPgEp",
  "key6": "3U1JT81QBpnDbTtmg9Q6iSv9i2PwGLtNGBNGVVHJ7SdCTLCpTKRkHuCnj3xavJ13CSYaTe83UEJNkNtSoouWU8jf",
  "key7": "2JFy35vpEjkrfAUmm37d9haEz6cNaq8265mqvTE5vsj6wHmdJ5rbRBAhxx2wkdYHMNY3HEf4uamsufEGqy7zWwm9",
  "key8": "49eLddM6bYFoGzDBWyUqcoUk9w4KQV5U3J3cVHwuwh43WuFzKiud6wQx93yCr8qWmZ9BCVC9x9mDM4TDiZoAF38s",
  "key9": "4TxLYHqFkJz16DW3xkmhGxuTV6BJyNfKaJKNdFFUKHmVpeZPuxYFwjgeDaYvuuAGXX24RcruozqkJMMtxHUfVqp3",
  "key10": "5ibARPCSQeSAPxUKiWomQZtKjRPTJTCy6juze1ZfPWJ8Cv91YM3dZ1eE1kKtYU3vnqdcG2yACEgNxtDbWAqnyAm5",
  "key11": "3Ya6pSJwJYpMMaUj9SVngNk4JRbfoM1RQGCc3DMvnercuX89F533H9qpwcsd6znvAwszWeUeSpSsZu12Aa2HGKB5",
  "key12": "4rEjizKHS2XD11A8jENNAVZFecGV7cLtPVjb8dVdfpanyyp4tNphjbjQe3ZPBf74GnKRPrUqsNa4YmoBESdEsgzx",
  "key13": "5LLJhHsiSgscfpuNxAS8tRvTaxtucN1d5pkMHSwaKNvAiamykqrC2CTfUWV362iMVm6DD3CW95EYw27Rp32UjyV7",
  "key14": "2yPYtRZDQNP6LUzBw9ec8HaAmZF9RwCv2MgpMwAPDaXj7Q2sksEBFYGryVB9ikSd3GBfBN8U1DzXT3PLKUoN57kt",
  "key15": "2MygKY3PKbXktMcFvP4TU1iMZsGwDw23qgdqzm7hL6UBCNkh5Btphv1Ewbhre118KTv7xkJA1iHosFHXNnTWtM7Z",
  "key16": "5X73rq9x6iXwRjnYkh9CeJJmBj9KaEsHBSa62Y81kVjkxNHME8G1YhyiU14J2FwGfPhAuB9XxN5DMjCYAs782A7D",
  "key17": "5R7UivqwUXKHamTgpSsQMrp4JtV5ESZxhVd8aJ9u6qs91TSHxVzTmVUcQ2PcCQwvmyb5Y87Dy9Q4wq1uScdXMj9P",
  "key18": "2geiFKEQfryZFnDH6aekXKoxxUWR3XKwTV8ScuZRViyBKi81qR7UXYAzu21dVMbLYUYP3uFZTPzwBs9ZeStdkVhi",
  "key19": "651LXX8GCj5w2v376VAsKUVeCMcpwyUvAXoJ6GYqE99MrcD1qCGpXxRMTCXssx23wddju5npTBpgsNMjxM7pMnRf",
  "key20": "2kojckUVtkXwTFFQ7X7w8gc3tnADUv9kAu5pmrRq7XxnfAzcEXnyxb5pandDrZ143DYB4rdXk27yV5uGzN57ZfyV",
  "key21": "5iS9rdRCXbFG7V2PCVphfEh9CgZxD7JzBZ1qoj1YbcJVAGmD7AF753b2fhnCRXX9ZdX5wcftEJgJgcYGJsL7JwNw",
  "key22": "3Q6yYobyPdPfiFdhZLNGvHsiPHvJpqUqRL1rvUK7w5VfKSkEJyabBmdf7MMhorVWdHJ7BKveQ5dBRUswzwTuMjbp",
  "key23": "5FnZdH7SL7KF2NTdd11b4dcys9T6KPSuoAu9dwh1HCod3VZuE2XCwwC6avYATbEfyQPS8gqmGVEpiyhCT4BzZ55W",
  "key24": "2WUMJzAqfHRSvwS8QuKv7AwfpuzGepT8qt6y2wmJeFZ4xbVAmNWWEBnqYKNjKcHgi6z5oHHXMF1u7dt1v6wdsugL",
  "key25": "3JbJPiaokS36BDMfeLFnSyx7c5iPqRGP5xUMiHSkVekKY89FsP9bUTF6SFHc9LGnQosC4TEL8zsbQyjztHMpTozF",
  "key26": "2di595YTMvh592DBt9WHuZeZVL7znmuEfyCgNarCf4RFZGPTKNdQnBsN6B6Dnj3DPq7nJnfPjdrAAFSWWRbnv6Bm",
  "key27": "4gZNuNK7ib2tr4b2magJSeFRkjwa1KLygPZHk9MtWgLgT98GBE7PbrGY2Kx48tb3GT4NGzpri2ad1RWVnVGpEaJs",
  "key28": "4t9NDcwTuRzc63MfsZy1LxtppEiAmtuMHhnNPBoRLPhnBJ7jXpcpCyxkWZN2CV1vsuC4tjf3eJuVRkmb4WFL5LY3",
  "key29": "NFJ2ohXZ5y56mFWCTZgkPWpaTykWuaK3hZ1BH9xXuAZ4qHTMsnkXPbHr8Dz4jkbiuvnxDms5KXDuoD5JbWyqeB5",
  "key30": "4R2DxrzUqrRNGA8HWpkvtoESmujA9iUiYR19ytzdgDbYXbhLHNTstqudCasEr4ikisH2RxWnTVviA1iyMmSCKMbF",
  "key31": "2i3tbvQnKpLZVkJ7P8hN4JQX87YVDYNgZWqPsZWYXTdCQdCmQa15afjjwjbDUFdQGYHCcXLLUgtfBdLWKPK9S6yC",
  "key32": "5Pvt5yFiRkAJjRYyGCfk4aZkgNgvjR7AsTK9DQKtuk2n4AzqpLcZ4FvmozS877mau7UPFgRvDug4BVj6Eexngthv",
  "key33": "1eGJA8hF44Knm2LnGTFqaeW3qv5L1icibaYTKKbPkSFpSY3ZbCZ47RYAwu6XoqpmEC1iWmXciCSCi9bbxQ5RCY4",
  "key34": "4ikR1L8Hv9x4bqw68fiWj5g6DWg4ru5aeMNfKtA8DQk77rSKFCTCFvrnE943R3twK8aQTLxWAKKgQEci1AKuJRq",
  "key35": "3RfSpqpbdjXAUkVKoqG93bmHdhuuVEgvY79ytKCbBLZs6JLNw8wGdRAxFCva1tzMQ8BR8ue67HirtpEUoYZcEetk",
  "key36": "qrAzwQ1V1r9nj7hBqdNtH9bH92Jc2U54LKMfojn1JUjyAwqS6LCCSVQb1pKhrTmSJaJifLZapfyvby3Rq24QjHw",
  "key37": "5yzsTJYrhEnP91bk7unfVniZVrzxZa7WHVSAVh27M1anuqGVdZd5Lmy3vZLHuwkGUAeEFmwbM1D14nyMgibfiKcJ"
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
