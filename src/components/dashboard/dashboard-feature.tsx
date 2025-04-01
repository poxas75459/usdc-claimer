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
    "3Hq38sZe49QLthwyQ6A9n62EgSjhMPT6AhASWqVKjHMgwqF65n1KzETBs8kGGYCDNH6VtkLajPfxv8i15yp2nqVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tJRraBoMXzoNS1af6gVQRjkzxPvAppcNXRHcFuvDncbty69oYi5cqE8Geom5sLgPEHNTDAQFf7pmcbZeb4jXZj4",
  "key1": "4iiuxyjPKm85NYastwukNMQvtVkcBkkErdTEwF2gnr2NNM2QuW7e8s8yWynjkyMYqjXBoZWSDhwRpBHtjQk7yuXV",
  "key2": "5bQmxoTfY6c1PPB2nceJJtCJA9JxaEiQTY1hAUG4HTg2DaqUhepcGA5uxRbhXe2YsKwPSS3ZmqtqAfJ6APHJ6X6C",
  "key3": "4xDmEwqkHRbRhKiUkcd7wocKCJ7EqDUTUHvZ2pTodo4vgLmUC919DjJsoGfFJ1qRmiiChrZJWELTPjPgmwKw5EtP",
  "key4": "4w8JCPT3YjGuZNi7E6fU9m9jgXANoP33cGGQxMJCt525rWwXbZR7dTbWCAoEb9PotJpso4EG6RT75b7ieHqZ1isW",
  "key5": "4dWkVZvScijC2JyNyyk8bfe9mZPuVNwUbhEnsmHADdWgEbZwBwJWuT6tdpBQS4kfrFLVvVUn49nLWH55Ki9iZrDM",
  "key6": "GvjJp7Ty54ycDHfG4vVpvgM6AdY49EmBHcgbzrYbR2UiA8Azpdc8xVJ48r95hEfLi6zDP3bT97Mr5MSPKGqByVu",
  "key7": "rR1HpqLRkmAfWiDDD9F18ui1vG8n3xA2rTJHiocBsURYunm4iaDmgvLewUos4Umb8ZqT6Bhzw6K6KvH2M75TqZ7",
  "key8": "5dr61fGEGp9jJSB74zRiXYAhiHyxBykaCogipk9CN3F7h7jWrpxQz1iCEzoi65hZYhkBfsDYYupvRsWzDZyErxj2",
  "key9": "3Yg2LyMV4gaED7F9kSY57Y6ZNVn5Lippi7frgZ9VzLge99hBaaZXUT4GD8avbf6yEU8DvU7EjrzRoZpLcwinjAit",
  "key10": "2K37WGdUW4kN7NKyBA4A4MVyxsAwK4YL548pCiZ3Rwx1g3A9qej7V2Ky32pAG9LsDB7vCWPRBhzZu3zYQBZF4cgU",
  "key11": "2s28PpjrvMwMCQBQShX3PSuy3eKxae4HNAatPcFSuk6sZDb1caE4NQViqi7Uv6cibJa8uj1ZKxxwqq3a1VfGKLXw",
  "key12": "7rHbbEkCZsttuQ4stDb8qaQWxXVeaK22MVmUJHyrrL5qGTVhZjJpHQVDBUmAqq9RF4pW4zt6TGKs4iEDF5qYNVn",
  "key13": "3rYJ15KqKDRqs2mdxFxAurKYjTyHxBoiECDt52S1S7Yixb2kjkrTQxKGwaY6XbewcrL91kk6mkGHd6hunDkLSwHv",
  "key14": "2JzstRnPiZZSZLeKf1RznXD2XFMrj6WvuHTnjenHYtPLeztunjbpmZezczN7jFSaJmVJv5fnv8UzToNhhZu8bsLR",
  "key15": "3EF4nxnXcAR1eMNPsD1qGx6XawepNiWHsKr75xU2s96VK4zcXG4fvBzTJz8mCyDVBpMeD2tCYFUjSaE3MBsn4x1t",
  "key16": "3VNwTG7aiqeFfTcB53oCPsVATwZjKHfLFbVrddYiPXvdLQF448sVUVtRtFZFiPVB1j76iTbhkSzU6yGymkGJhXN4",
  "key17": "4QJJPu8W1LcrSGg798mUSaRiM7ttEMVrZrvyU4d6g4t8ALsj13zU6zWUzap1jpLWVStDS7w8ZybrAHVhsU6TXWE",
  "key18": "PQQzk3v2H6RmzqJ4w31YUAzFjaUNdhgaNCft3Se5erL6JDjUG6wZkDKJyLR5Zai42jWiAsGvHET1gYUYYsrybRt",
  "key19": "aP3jYScuS2Y2opgD7dNiCciHxnqVgXNhrd55NPvVD5uk4hwR1G7i6uehopJ5bLVBiK4UyXd2pZinZEfnuT4nrWc",
  "key20": "ZvKuVuoqRcZ3Lh4yf8XSdXtpzYuy3Ljjka92hDGweb17UtZHu2kMqAeYNSNmz52MeuxH9mP47CppfooYkVRb1U9",
  "key21": "3CyC7QRgwJTxdvenU16Z7GbSyLL857rFGAmEkxM8Xvm1epCzYaqtnuN9YeYqe83FSYkHzzkrizTKzxZLUmLPYbNS",
  "key22": "3TUd7LEVyssjmQpZWY85mofPtY8Pusnw6dPbUANe1Q8QoZ6irpMgoMVaSbu1Q9Y5zPqPdfw9rejRZRGP5QngTbc7",
  "key23": "5F41YoqDtoUpkZSajYtczvNrHfD5vE3Gc9KFch9fLk58T8G4Fzy5mwuSLjs3F1ZhTCeR2RLKe8DnWkmCh5K9AbpH",
  "key24": "SWuCBTPamJbqkDNBhvmej6V9vrpTywfztXriSjxk4aZb4ismQhmqNLak9XCnqiuLLF2p8og83okSUS28UD2Qcrv",
  "key25": "3cTR6p5esvkZjV3mVQLETnQf7PcQJVPCdt35fJVLDPWL9JaC7UcZHwTioMHx2FbFamtcH8GutRy2Q21HsKFJ3qqk",
  "key26": "2mhHQSovP6EN17hmcxoDj8w5zWXzqD3XRaAJ5cupxibMJNhy8JcscYUJKpwxmcAWHMScAg3QjU6gYq85kQ97XJu7",
  "key27": "3LpwAFWdFsv4xbos59LU1Jkwt92AKzae8je1t5Kx4QNEkjemhsAQSB3QuGHQJ14wkMF3tDZATh2uHKob9sSmyM1u",
  "key28": "34d7R324o9MF5KU24oFiygFrLcPZkX7PMdgTPVCnUzKUYC96EGWJ9pjKCQyYhXXTbTHMwFonpRnHQSZgVanPNTJn",
  "key29": "4LhQmuGnaZ1vkkeoganLWqTcSQBHVc4rM5pNyD1EZE5kGBgic2evWcDteXEp2WtbvmmY3zQSxyn2XhaPWss6gCiM",
  "key30": "4FgPAhi5FukusCpidRoz8gn3adoRNSdWmpMG1UVABLqERwVAnequnBih6WqPhF2V5xyS85svgcfdEptbsxyPTAY5",
  "key31": "2yMz1TnCGSXH5wVhpxb2SFAQ6sCgLRLyngkiuL6hJXbWCJSacEfj2wujKKd37UnKtU5HJa5VSriq1XmyUYoWXgdY",
  "key32": "5fAWBJ52tLu944yMpJCkP96Lw4Pa4bKPNvm9bUei7wNhyfSHbHTcXXMgzKoodZdztaXi5N8HDkf9VHrpXCmqfGYd",
  "key33": "Gd4gqHc3av7t6nr14Q8RH86mx8LYKcyDaDg4HLG8QMq8RqwDLw6RVWZw5M8Wy4Z5QUT8go3CiMdGAueiacbtkXG",
  "key34": "52pV7koVLYeyT9CwSq76D3zV4tZy78fH5wr6NfFPDdRsqZKrgXt8uxqxxbv8FMzm3ZQgh1axBHb41zXwY4Myr9mz",
  "key35": "2TnESYF6e24zCgcMSJ7smR1NDc9DFr8smFbxYd86EnDSTpGeVtyf4kX1eJmnfix1qBBZZUZCK6CwukmBGA3AFsse",
  "key36": "64VGosTBFXyRMnoBS4xbt72cdAVhhcywu1aFnncpHBHC7wxHdy75dCevzLe5AAuiT1K92wrQgDGZGfKoLSWm8eqe",
  "key37": "52Vxtg5TQXqfF64eL4eQ2y7Rydvvh19HoLq9RJvf5i9cEMB2h4WTbWobWBSPurK6K2AgBz9PM1goCyKBq8yFHFtr",
  "key38": "4X5GiLUHkNinUqUKz6EiuDxn9ZQr7CQ2u7ZhzSbg476HYZWTo4HB1cu2Ge5VDYRNAoknajRtZQ7tmkBpjXQbMH4p",
  "key39": "2VBoyjLeEMNTW1TgiU5v2rJ9FavxTQz1Bq1VpH5JAP9m9w7oBqXa9eBxf5rd3GHDqgLMnaZ8Gu9SWy6FhL64i88F",
  "key40": "27YjfS3fZCDPsRGe72DfE9hveD1P95gY15EyGhivp9Pvi4xBMW4nXgz7bKD4z8v6xDbE8nzbx3EQXjC7qgsbiQGU",
  "key41": "5anqYHP1eRDLyTu9hPXr2tid6GixBm7AKMA1iLCMEk7TNEfsciz5dqP6qUtXLPnAF6U8Pqqb8UtbFmmV6TWFf4M8",
  "key42": "3HeHCjdKJRie9PVR6G6eqW67xsisCTPRYvMJshhYjfEWR8osLF7BMjxn3QwNciPiG4E7q1M7kcL38E4ARqNakg77",
  "key43": "2UDoe2V5XNHbiMy1ZMhBWD66eyDHhFrTD5w6mKHvAQ49txUGRU3cuzZhvcVBptsGy4Bnk9ZFVeA6thRGRGfEqP3c",
  "key44": "4EoXT6JARh9Ss4SfrNmESY62fAxv4upvgA95e2TL7o6oeYnQ6xJAmjRW7AUNtCx49HZkUWKDtVSKFsKU8QtTjUDV",
  "key45": "3dpXMrAME94X8nS3X8o7qBdxiFVD7G4bbJ5YR5E72Gpsq4j4Dwcd2rPRCJFRf6SCeNHXKxBkbMdcEY4Qs6Ze8WCA",
  "key46": "5EkWCDfQy2gYubNox3UhtZCDgxB5XNqB8K1U6Hen74hDVH4uWtXSeoHAxRBM13dUshUzyY5vg2yHZRg59GJPrnKh",
  "key47": "4cqAvL9ZVhoRjKBj63196uXwFiBBwj1dJAjshA6RnPZ8g1XGMPb7UhJWwfgSyZmogBAcwFadu7vgjUUUw888R3bT"
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
