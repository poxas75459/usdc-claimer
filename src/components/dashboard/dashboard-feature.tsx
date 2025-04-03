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
    "5wHpv71kvLj89KfuDPhkoPxZGvvCH3tDiBy9MuJGVvFyWRWH7W7QqRMWUrjNdHaFNACKxGqxhH582mySVXtjwLHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RitdMxQKpmr5RQSJ2QQnNeCPVTXGGesapNnNuEx8RkE4WJn6CBZEizc3GDQSHxWxQkbjspMspHVoJwPzEDEcr9H",
  "key1": "4CKrB7aE8hrh6ET5whcDw9dqU6GRK36c2rNmR8LBbACxP6HPimboakiMdFpyohsekGpHfampsm2Ts6vu4EzbmZSg",
  "key2": "5iVFQfXiH1tjyDmqwya9aePUrBRRvvYPax8vZQRCazkxzg8SVsC82ZSLmtNoA5ha61mNvxA8A8L8WP89hodKFxs2",
  "key3": "4ZgtHGaezsxEGpWaUHGsgdfkAnwPh2aFo4xtMm6F41Wtrabzo7J1ML5crfbg6JbakZfhCdnUxkbWiF9cYMGuQU8h",
  "key4": "39fYy5D6PZjDDGUY3cUe4ndQUrXb5PidDdZp6PSqjd3CiXbHJX1sRh8PD83aFwQq1hmrcYkFDB74S6QU9gT3XDvB",
  "key5": "4kF2xANmscijp3P8riMAAXBjf5XRQfbUxTPjjqpBqTEomrmJi5iE3rBMU8p6mhtNkHYMexbiV34XnRjfTYNBKUe8",
  "key6": "7NaD78GBLgpvv42r1oaV3i9DokXS2G8ayPwBUr9HCNZTyv4EpUQuq83njnFNpVGQvFrYDxfRtMRRTvrvhPavuSv",
  "key7": "4CsnhyUuFrmxnzhnoB9ueFhufFaZNGwVoyuzu91EjkUcqJASG1aJAodj6MyvjXukKPuD9ycY4qTvCKih29yt1Cpy",
  "key8": "4t6h5iu5CgARswYwXW3Q7ttNPxRRMVWo48WRVzShtFTKGwGGcS4BgoiZZFExbYHF4YWVUcMufqCZSYc7KguxSkPA",
  "key9": "64DMNk8q5jtLUZnk6uAAkrE9wS2BapuEPRFSmZzvaJLNikmLs1KS1cExfsnZfprCYd7Wdi5qXJAqcB2M9hmTtxnt",
  "key10": "5hspJ1psNvkJk6PfFndH44udNKeMDwDkVpfuH3dSBw9zPFjcvjskpYV2ZSwSk3gwUzjycmsQWUWhTJGYK7xGiHnq",
  "key11": "3AtmPR3sgYbcuu1LRampBx3wMQeqNPba9LHKhxLaB5EtWNUw3QciJBo1QyFfBDMC8L2HhreDddvpnrRwrh4f44mY",
  "key12": "uNb6Wo1wjB29XwCgBPDv87pNMbfe7Q1zf2M5RoV5B6MmM8iAPE6XDvkNg1MCEKHqj9aoq7BS6sCy52mFTArnsR7",
  "key13": "5YEbCdKYER33Qcau8dzBjnP7sdVjivDVh8x5gFd7hSJaaHpgyeWVc2dGEEEgiH8H4L4Zea7PVU7ZLjpydjwHMcX8",
  "key14": "wrtiY6RSQk41EqZitHAcg8eTJx96pHHz3MRqJNKKB7mDvhboTF8zE24u9NBpsQyfs1td2VsMh7ZfPbfYpbYMyyc",
  "key15": "62AmEjD9teJDrGzYaLma42BESHYYxW6eiBkpiK3xiqTrip2om54wTygCMdH6Zt37SUgECs6AwbPodfdCZWNEjDsp",
  "key16": "5PFb79pAn6oF2meXyTiVX4YqpwYZTgzaxFRCderDKdisN9WpzbiKQ59gJRvWfnnZbGiPSLupMb1a5dNcrQNVdjor",
  "key17": "5sbtAxAgF6dp55WgRN8Wb8nQaEwuErtBj75jGsHvUmpWMfrWHRV4qsCYHzcZZYUc2yxvrwUx7y7SgV5N1BsJB3kB",
  "key18": "3s8eK2nih8AFUxbPVT6o4oLyEmmohAQKW9aUmzkq7h1RGmymYJkHSKYh4MWtysiH9EXAgUWPycZQ9ZQNbDZKH55K",
  "key19": "4Z4waMxsP59cQXhThvuPZw5jJa5F8muHpdpCHEpoitEDuDLwjBK7QTfBTXG6rKkVTcdLya2dMQdMgtqTL2fodUNp",
  "key20": "2v6KvcgVnUUMy8TG1Tuth95J8apW66ZiTuTt8ANCMyVqpxH8XNxs45AEicWDqJpnwRvRciF5c63dieWtas5TSZCG",
  "key21": "4i1DmuyDouPmCmVUaA3zTn3RFXNu55GyGGzLaPFXGnoMbiaS1bcbb3Ms68sZ8bLYons6AgUA7Dz5qHUWWC2A7KxB",
  "key22": "3KWNKUB4KJqyyTBrxAoKZXLYiNuG2zmbxavVwvguhuZsxdmTaQddi5TtgX7pzk4mpDLjyR62qhMPiAQmxrVv7rPD",
  "key23": "5nxSFnfizjQUkKCzY3MRXTJUyf1JcGek8DKoPq5LQ9CitRYJTSgpru56cypFH1k3u8H2XXjdHUr7rirqba3qBKy2",
  "key24": "gwdEnfp1fJWskRtoQqqtEsGyCzKVi25bcYMwPxZkC1mJ5L9WUM33Ni9hiFjjvuPLkjug2qr9rTxyUY2saCv6dFQ",
  "key25": "XPotkqpfTNeLkmzgTxyo2yFro8BnsCQPCamrFvdMETJ2kshDAyxRGHD1M2CQ9Fw1ypQ5N86EkLJozkxqQag2P92",
  "key26": "3uR1br1d3Qyz8ha33Ssqe9JCbZm48qm4RjKKpW4jqXMzPaUuasXWrtexDfmNAZadkHvgVuaMEdhAFUTKbvek9T82",
  "key27": "2akrd3gbVCMAbS1XoWdkHx2VDzMu6sPMxwpZz5ZaZeVJyjqqPj5EnaR437s79DLsRGZ18UB95gJLPqQuEQrhzmfb",
  "key28": "bxxoaS2M9wRYEuo9GsH4kfAYQikDGoqXFnW2yiX8L9Dk1ihNphokdpJiDucYtUHjDcYerXMKEwYiA68UnXaxs7y",
  "key29": "2EBiPxZmVTZmQ3vjrbX1kgPhEnNuZ4ukBJfqSqaxBxjfwoAnV6E3vauEFdiT2836EY4ir55eJFT4nS8CuVFmxG9B",
  "key30": "5Y8BAjV476yH4PQcwXtRfLiUBg2joP5cepKi6UX5KHmiVVHquQReHfgYaRbLU2KFvBJxwT149eQpbFKmESkbzH9X",
  "key31": "33NSJJvbHf87fr5j59UG7T7udtyybwFpEN7XNZrQvVeNgBjfmDTdR1o1wnYLDqTZGvbxmTqaY3XjKakSahZNmCEv",
  "key32": "4umKNgxyxngBXQciyC4LZtRchydur9VvEoEuTLF3a9XgAcyWfDxZFHdmL4TApjvM7bGA9BT61w4CrhVJLksP3P4g",
  "key33": "5Xw7R7Hi5yhK4b3RcEtBGv5C22wni9LGUw2tieeZMS2AeNKuHf8UPiRFBz41jWbHyptASh6nM18B4irqk39mYZHE",
  "key34": "4V3D6xpL5j1FDGVGMTnMut67V9Uwqg5LGUkirKJa3daJgRavhT67KXdZkkPo2XgPyRckkN5WFY6QhqMQEVnwXWsa",
  "key35": "58r9nAVzQhbdMds7WD3XAt5smoKCG3NFS6yj3DKsmAHyTbaeigwSm82MHezBhVzbVepaBumEepJZfBfFmtuakqJF",
  "key36": "59XFSMuLDzqmuRvq8x6cKxZto1f7ASNXAKNEFaAkLY8xbgyUCMdMfSxpcoHc4W7EgGHTzJZR4rwZYC7DDumCadM5",
  "key37": "2SCTsuYUuwZZnuRaampU8wZAsYg2f5C9Lmj41cBkpwtWVeJtrFukjh5LRey8QVLvGy7wgYjpbkRdPgmCm2PPtFKn",
  "key38": "5dGV2NKPDrnW3E3mt4BkFwJd2GKJWcjUX51rMR9NgPQgsNQeHpPSyayGbGyP9qzdNv4XfuRJTBq1cUpKgKm9dbUw",
  "key39": "3DMsopvhtLQsE1SQ8ydZzE9r43NP52V6iZ3S7yJqWxp6j2NCPYx9uqNa2vWq45CtKp1rPAFxjpWKELuoDvpBVeE3",
  "key40": "63gxNBkta5zwAHecTvXwyHcfhRxz9A2G4MKKkcXenw5PRqKRvmK8i1g3kDvWZhoeBkRjds5MSCsv3Gdj7KU6sAFA",
  "key41": "4YXwZG1DYrCF5LfZgeVL4ew4Wz7MKVgXk1CbyJ48MoJr4da7nwDwQ6Zim5TFsCX21f9Pabfou24VBVK8HZcpgppQ",
  "key42": "2zUQC4edbXk8v9qoZFhos4oz39JV9JxFoxhZfTuhUFpFS981kM3SUKy5Z8sH9zfcWvLnYdipi97J2zhCu5FvSB7i",
  "key43": "3XGN2qvZXzUQfNUA2Vs3o52wFBbasxmLedZbgS9G18QQTPiEzy6PQPx21LHw8s7HfiiNvr3NtgxgmtYjrNo38esf",
  "key44": "5WiFQGT6kPUNqskzv1568H11rwfvtt2cHvuLgbxgunN651LXh8v21JYi3kEAXmRfz4357omP5zN3iZtKKh5FCTqh",
  "key45": "4rCedzhgWimBUE76vf6QvFk7v816AhzpxhPvPLXkyQbioYdbTXtkNEGBmc4N7L44aTbEVKrjq2ov9qZTQ7rxuWPV",
  "key46": "46w9aBGiEC2KLMtexPpwfJso7qK5WiC77ZDGdU44djg28Xp8xB1SVgtaVv5FoKSNSEyhcvuYJrwHdB7M9c8wdGD5",
  "key47": "FHTKUjJGXXkm9P8uijbjY8dFRj4PEweu1LXjch73cgyPQARCgMPwaNp6fCdeY5r2zPKvZzFr3M3B2uoxusb8w6D"
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
