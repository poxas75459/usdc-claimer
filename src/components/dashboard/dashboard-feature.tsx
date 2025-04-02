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
    "5W8g1TX2j4ZxYb86DCvoWMgTwvna7sTPjLWWnG7G6ucBa8dVWbfsMmBxLaTSk3C7rVh6te6kuWaK49X3hDXL8Fj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GaPda5CFidTx716eqsXHDA5LhUfrmbFbAxgHpcBAZvxFFwURzMpG7a4gnwykMDt3pXs888foZQRysAki253ry9g",
  "key1": "4oXxjenZxhiuZFTCXkPWBhYAT8jqxw2AQW29TwuYfhLfjkaMPykeSgrqtUdYym2svYcSXFJXuRzfJHK63xFobMfi",
  "key2": "4V8WfqiFCRvU93RtaWtECWVY6CwmwCYpBuf1AuR4pKnFdxUAq26a487zCkSzZT6BCXdsq9YWMuhFzts5rxxXkR66",
  "key3": "5PBLo4M3fXmbfSRcxeQTxP7puqDy2Yz84yu6FcQKomLn6ESRdvqpBJNMVXiaQW5N5n6espmuuccWRwxKCmhu3oAX",
  "key4": "3AyupfWf6RWarKxHBZ9az5Srrpowjcsw4PXnfxFKcQs9W6nUNB6B3N1b5CWVaBv52Eyq9etHm4RwaS413qKydo5u",
  "key5": "xqfrRsDPfvqTmzZsnYobLVNpYFKAJieBNxFzrfVKLYtBhTH4bynNC2gLcYwKPNHcRpb4Y9XdcEcNvKyuK8mXgUs",
  "key6": "5oydnXDp2RrosrFs7MPLr25h2HurMVeG5gXV8oyFfrmyfxkPcUknC95LFKEQoB4JapoGEygWnuYx23idYCvAnV7S",
  "key7": "4HBJcYJUpEt7cEQwFrDT6w6hrmSsDMWhxetuVy2U2fqaLh8qo1vVnatj6mB6pPTVyWqvrYYUJXa9i6ukzRguCNS1",
  "key8": "2tLi2evqkbDFbcFb6ypKpJrepTcDQZGTuHZNwcRY8R2JQZzLTLi74inGxpLY65tE6Vr52Pypu9cG33vJT6M36QmM",
  "key9": "cmJnpwTCHz5PWRXjo4K7jAsGPMs41vdg6neBuPTaKkQdWf6GfAr7o3QXf5ciErWSLkSGFobZxkmuJQM71QW5Sfr",
  "key10": "5cxxZYEn89ZPj9oBu2q9sSvZfavsqz3G4JxLimauR4Nvkf8ZFZ12FpP7YSvK77SKtbDrbLb57iNcKJzFaHeMgTvd",
  "key11": "2isYQhaHwmY6g5BUV9AQUbc48KvekABF3bHfupnj64bpEPD6QGcM6xahyb1SoYoGHoPi6FCguDxysSJ3MQn3q4j5",
  "key12": "3q6y8k4iagm7Lkp36kRiArNbefMWaNpg4zAZeTwa6JuinRreuwPRpXHXCXpr7EMbKoZCPhnYfVrRepAGfrgqmFzk",
  "key13": "3gDjsJwCU3Xtm4rrEvDLqe5Q9xEizTgUov2rhHcCCPnESQn35JGYGFHu4Nto53tsYk6n2AGdWnq1LLJYBbMQscg8",
  "key14": "4xNR18uHDWvm7Jm5kDDUm9uYapxD7dgaH3FDksJvk4KjJ6tLu5G5wFgwsbnbA1EeH4C5kv12Lyd5C1EtJNWmz5P9",
  "key15": "3Q9ht9nWFaWAnTDC9nwvEkgB3KB6h8kzPhxzGMXamPjUrV8EKjGbck88StvAxdWx5cfSr7yD6ZQJG4wq95kgt842",
  "key16": "63q1xP2PU4ZhGzf66TfHCYcRusuJ3LthQEgSkyWLsZuJ3p3tEaQ7euY38TgrPybYrt1ENxUKTSQ6HyxiuQZNoit",
  "key17": "2vSr3CaqTRwxeYJEQpgde5WTnsHsS9SBJfTHPTHsmE83W2VqW2BPDjnUDvSyKVdJNPDanmfpCpR3DaMU1jH5SMKr",
  "key18": "3SCmiFMYMDEuQnDNKytkdJSYZD5w75YJpJDQYawUffeCUv2uWcKDuijCjrFV44uCUesmqSaMcsw7EHEeSsxsuTXE",
  "key19": "3ySYCCkUzwZwJiWwzVeLphGZdZGtaTg2R5kMhW1HvW4KDo8oyqrfJNUS9EnmFyFkMKXNFNd8uG2WuQHm5h1VXzKB",
  "key20": "26i8mXqh7VFSVQnNvs38nK11MBe2GJ5vmRQGSK5sdgmd9v1svYhZED3hxvyyMZAefmgEFTX42zZfhqfXwQFj3HQ4",
  "key21": "4LLUKDhuCe2LFNNVh2uAGaun8kBsvLiborQ3DWDSbo1RhRdpQqzhNHa5zLBVW2qRGEN41Rab6VtWaQj2TgHZaWbh",
  "key22": "3z6e2zR9mZN3RiteTzPTP28e35vMMXdFFN9v9SfaFbmpxKA3uQmFtaVKQTpDLcJXAa9H9iKvnM1f2jc7Yk4fQCF2",
  "key23": "oRgZC4SHae5R42bVLTfyWc6bb63N3g7B2iCZUmiGtvxzC7ymBNxvr1vTiDZyANhkqeSR6uBbJVYGKq7TAFRtUgE",
  "key24": "2nueQmdBfXEZPP9mQhDiQsRxsZeNegeKi5MSfYtGsytDhutVQjK2PfvDV7CLywV4NQcTCgpgnJtxxswN9ETWKH3j",
  "key25": "LvvjPNJZqyLbUtmsN5J89k3nBF3Pu8YEdL6N8dqjTLvAxS99RT1dwo44zwigFTZikwSNqgd39okwTgAWv9pSono",
  "key26": "555ii3TGXmWo2tS3dhN1ntJYoWQwDbmXLPY2teC68AwKhjTR282Fh1wRDL9yTLVHYKViBmUR3yfLXxrkKafJ5phV",
  "key27": "HtRjhZewqhKY4pznP7ksxj4KCFE6qgEbFJDcJ4zEEr6RF25VAoEmDvcd2AXKAcaisFNAt2UPiYBWehxJkCksLoo",
  "key28": "2nAkHc36QyvjonZaVbdqiNDPjGpVx3EWcty5F6L9Hdh5rdNQ5HeLaGbdsTDPQ6Bx39zSg2TveR6WQrNHpBq9gQac",
  "key29": "41KDFNXsMPd85MsahdBMYApbJtevgf2m7K4jLGeoUqSqzKRdFDknkp3Zh8gFe3JTT5MfuV5bTQsouHLqpADDdb51",
  "key30": "5K2NXzCfYXaQVbRBfdu6xjR3VMiSw167XfdEs9Hb3FBe61zw9sVf9yJuyiqzajVdUn2hMMqdhS1Td2grbtWtpMxa",
  "key31": "6p32WdvcuVtTfQSHpkVtpKutUdTuFhZpkUToL7LiSJbK8Cq7AMagdmRz9pXmagrwAWVE5yZmrXgd1yhiWdfZaU7",
  "key32": "3EzAWZ7xwatvjEuchRWKt7cg8F6h5SugHcXuLUxR6c6t5yVGdRuDFbsENisfjCDJ7cUEnPZTZzPqiPD34TKHThQh",
  "key33": "3ThNuGc7Gg3ZXRp6wthgLaaMMs5vEBRH36vPq5Gki78EhfcWq2vcncgM5E4S4RDaSmDXkmjcaegTT9JWhx5MsFWY",
  "key34": "2ZTP7j2UKe8BDp5671mrWUA2WAVmzrXveAhGrgQXFVxiuXZQafRQ5G8QCemSNbjB8TX8oxRmZgDbF6cWC4SeDNdQ",
  "key35": "v15ZqLCfntFdfk1BKo9ZY5v18RBPbCjj9u8UBjQLLxnK2emVTV4SfX8dbzEmkLio4SBbi6HHJ2ZVZpcHpmFg35t",
  "key36": "2UPqu1QGJuQUop5wfYQZpG7NpiHKjM5k95LogCCbsnzxahUv4tv7Rz6DySpmquX3yHFhUJGP77r5QZrcPTDGmLtj",
  "key37": "5ec8n73gSeqgqpwApV7FQw6WEUTBDA2i5McWtzWABkVX3GbwTkKLntEFGenAm2DnR3xqSzfxcZVs8GyTzVkgQgg9",
  "key38": "2FaLJdNhSYoJUjba1r2v6fYF4t1cHp2WEhJq4EfBU8MXcKwva4X3wtYuMSG3x1jzi1dzqCeGWsJ4inFfTXF8mpTa",
  "key39": "UGR9CA8F9sfcEjhvuXC2VpwDJjNTqnKHhsmAV5SGEtgWuHYXqni38D6t6pCfXe2JHwHN9Hm1GExGJrpHp5wTyni",
  "key40": "2RPLpfcomJNL8XfCpQ4jpu1tH79vHJBJWYMFpPSKCuSrfpMTNUwAZTzosriLS8fv8rfYKgDFWH2JUjphtMFjx7ik",
  "key41": "211GzppbKbvBF9yFCVaHoM1B7LaDhS6d6BARZSKBTFVRuUkvu5UueM6PDYx4dxgJn4jc4p3n8hboqFMx6pbLSaet",
  "key42": "4hQHnnjFQuZCC9sP6JZHpLKw3jaNvyNUGWEKc9qDeAvtVp3r9sy3PBQS9ZoKRMp4FjCZ9JCa7ATGyPyrBcrprHbJ",
  "key43": "2iE3yCiRMmLBtjYyjwEkyozumw1y8FzZkUQ7fEXKWz8FjTBQoS2Eg9xkVJvkK3RHpj7b5RvCvNVct3mNA1guaT6W",
  "key44": "BWDFRRkYyUPHx9MsWHbp5m8Ai2vPpvZrVzzHv1KMPxU3UA2QavC5sDiV3b9yx3eMrq3nVVu81Uw8nsBiv2i7Vus"
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
