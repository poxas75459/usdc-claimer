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
    "4Kow58mn89GC2maJWaThQnUUnKQoMQhHcwnUgLpKHQbzoZJb5erVKz7y8yZdZRVFHfmKMEM4kwqQX2F4CdRipMpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57XZpD8uMBsDurVq3pjLLZxE2f8dyL5exhD9ZUZNT7tofHdafedFAb8tNaGJ2xEZTaHDEuFCgzuermKpsQiTqdeo",
  "key1": "5qH1xHMTbbhjsUJLj68udwAvEMU1rC6VT21VG2MosMM941REyfUKNprUjp61sP85fQ77gTN5N7CcxEMZegyMRhTV",
  "key2": "4YqdUzey53oZ6Covk6CKSQAj8nFRMUkRipDe9ebiBaSDYoXKxYKU29gBvgRv9TzNo6t6YFngy91k7fPhhqBDQC6L",
  "key3": "3nctdHAFGzzNt75t9XjsTaF2meETtdiL1uUDAuZR7Jj6n4SpkJUcVpKvLRVTTh4aHZ51aCwLz2KD9HARqw1G7Vfq",
  "key4": "3GYU9Wn5QF9NXNKhKUgjp6p6khGPoGZRaHnGjuzt5x7QEbsB95GYaWn2ubwrpkenuVF9485p6z5XthWKFvLzaxr5",
  "key5": "4CSxDpppJk94zFk9ZneBV8mFzdktykTrRrW47qmNkQ9DxmKNyHSo9bBkAHEepwGpojVu8wzp1BHGDsGtbcyMM1Br",
  "key6": "xCSVTYTjo2Qh7rzLxmg8JCaRUN2BrVtgPVUT9DPLP7GYzqPa7PxzZZHMAXrwacUa1d7epK1sy4ZJyyQvpTYCvyB",
  "key7": "4dY84bkruj9rm45sH38vAkyavVx1XR8wiiW3otGKGjusZDm5zzYyhEw3MykrWoU6PRuG9Xb8fc2QVhPDi3erhvAB",
  "key8": "2w6wq7w4AFLgPaqUtxVqeiZC379PB2GZ3QfNH4PkyF4MVd7UG4CyBJkgr9XAQNoxhsfQZhG48bznJvtCoD7kEmnd",
  "key9": "3HtSizB23YyAFPY8XKbgDLuXFgwBYi34H9KK42vQp9wW3abP16uWYZ2J63UTKfHnpJeFahfWgDL6AEK7LHyGr3bh",
  "key10": "4gb7kQSeJyXHdyJa9k1PA8jDZ2GzzCgs7eGjF2Bxukk2jKqkHqP98XJWNmKPr3vqrM1dZJQggZas42cc7Y2EnTpp",
  "key11": "2H2gbn4peoSftWXBTaJtiaQTQi9uem3fU2NvmBXzZrdSRzh4VjvksXE2aB8XQ7zaVrtM22N9SKNBJ9qfSnbsBhk1",
  "key12": "5Yq1Qm6pNGBb85MAwC2msmqnttjqRJZSnFmakqjWybnhUxKiTrbgg5cCLDgvQiscpvhRambxu7qnkHtXig9LfArt",
  "key13": "wfsWgGffBS3CefNnpprvaq4UMyD2qw41wXSky61PP6748ZtHNvDBPJTbGMuxMCF36cKCFgTBQPLCxAj2ar1zega",
  "key14": "2kzzn8jhsoxsh6PpALDMYiMACnJQhqoU3sdrsZ8nyEyj2BtNUTdRsB8nSJStspmQ1gaCcMRkv8Bw1iTKHMu1bJJg",
  "key15": "4S13FVjkpwisXWE1fHvNQSZguZRt9NhuGWiAtJRMXiKkvVwKFtTacLKmD5T4kh2kpMBqxhFnMFYTKaYhruphGHsg",
  "key16": "44Jhcg78CBpu3diPfbr98dHgeDcbto9AkiCGEFrpm6WF7F6WaNpFzRJhF14dv35P6sGx62ifShD4dbZwbuBoGbLP",
  "key17": "33UrBr3r52GoSyTrP4hGMcqoYehwa3cq6zcVgFZ31zPKZH3hqzoELvsJ78AgfoBheYh6vtfEhJ9GkTekbnpdYvLv",
  "key18": "3d3xA237h61ZzZi9bR1r7ZQ9YbneuVG6ruVTxhBntzBF9patTw45txpt3WEZX7FPk9oz9gnq4dbNTA9zyiyhsgiF",
  "key19": "51XvwjezWcHATVsP2oyVjZg16QjjtCqbFdEzk9fXQTkWYSzeNpT1kL74bVb6ipdxP3BKjuz4A9U9HaB1qpD1m5po",
  "key20": "2qho1rqNwJKxg5nF3SReAg9oUvD2sosE8sQgXbSWUVXDTAT7vVdz9pAJ65mH4N74zyPnHGY8fqioCPygf1G2Pzqn",
  "key21": "3LQkQdVCPZbStMXU9tVqRV6ZAmqp5eb2YGefvZDowpHAcgMRtW2f59T281tDwf1R1L1fvSAGLfroFC6ycA4tSc4S",
  "key22": "4jMuAccYqhY8irCCpCR7tXfNEgtvEZPiaBtRFh4rPEbQrQepgCwneGQJKEAp6qkXoxyX5LqeHi9JLV8eeKjNPYg7",
  "key23": "5Cj3WrvL1JNexNAQTS2s5dv52hwSZJzo8dXnDps4SXcaUDHps6bTYw1a7MdY4uFnW7A6SJsyXHqoyKxABfTxt2Yy",
  "key24": "3YvQBabAybpsdPGQoTicPWKnAkLVx8VmHcej4YXfBAQVxxdKJdWunB3gw3EJQpbE8wSDfSK7dAy5q4xXmsJwCUb8",
  "key25": "9KJtub1gebevGuCKfDpodrCHbpCUYd3yKqJgUpFeViYCcctc7FjVn2B8yjDGDbRiCE7uFPBruCk2Leuk9YmRpSY",
  "key26": "5hGaeNqWceLhCaSgr1tAdQ5or4RtEfuHazijqf67SA6DNV5pVng1Wtwsnp7dcGyoHuiZy24vHLR9aSMa7LV8DU5e",
  "key27": "58JM9CfSrQoBCCoouHZsTBHzksSgpzHejL7UWbvkDuNMEwB6ZJDN3YMbTjPXhK9dGZF9XhD69hGuTpzExa52kYvN",
  "key28": "2HMx5P18MaGnzE8rGe82o5K484XeL1ZfmH6SBS1CuNK7w2gqpWyPktNWULotgBy2bXV6UwvUNk63x5oPF5Zak26a",
  "key29": "DwqekDRUq2t6DVwkwdqCeGHYPATXJRuq9iikKPuFSPb4ntH68tRZ4EiiX4ZPdotQtz9PmQTQJKWyc1XK2dZBTia",
  "key30": "4nPJzL9ieJtKfxJyLtYPs99EM56ZQXBHzd2GSLyGZphfNkP5fPRy8qbe2cEKjT64j1TYX8nGxqVM8NFEkShKZo2x",
  "key31": "3HpLgViiS3uKnXfUvD2pMfECRtpvaJjyoWXiR4TtjHmdxBRqiebNpm5Q3xPYWM4MHS5NCP87U5ytX1V5MGfcKrEL",
  "key32": "WdQy73dwWt5YnpuBtRDLXLocrswAg6WSKW6Ne8M9q13f457RzK5WYaMtFEg9sD5j4fbEbLZFww2Fjz81fY548PA",
  "key33": "3kx6GP5Ty8JcXCHmKmFDmJgshwV2M32Hk1vfFYaQdjerXDUqzEEjqWpsYviPaP9vBjKvrazZ3hLEW3By27hPsrk9",
  "key34": "5GB9NZXMMax3XzvzAimcTxL6ba6urZ118wtNfc95rvDwZr28cz8cgG1LkZuPxVUqXiNUoB2b4voST7QwMQwCu19s"
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
