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
    "4Kh6VVWjGqWnmAPQcy6UshX6rAsrmAuJmbhdvUHVS8gRLp5k7fXRHnstWRBqcUfwVmM9fDyzQK73Q6NFraoKLhJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wyUVQQmPHXHu3eG6dkGtMFfrhttry8zRBGv5yyiKdjq3U5BPHq9P2YoQBZpUJWvBQ2WCLai4TcqjbfZK8ED4sLP",
  "key1": "3UmZLnNhNy4cpJzzMb1gCAjNy8TQkzdk4m63mtxLdwuCZn8JfqU5AsMqjcnxsk8ieDUeFvZMHqcrbdpxcMDaREEQ",
  "key2": "cdLeH3dXfF6wdWXcnido7jrTVCtLJxcgkrAZtEHRZmAdzBkKWrKjxKdGB52imnd4HS1nMBP9vFwPXcNTjtYUqpt",
  "key3": "5LqaKwfaCynyCsDHM2GWn3ooj2b3LAnqtfPZ2A8dCQtWufqrF6dtWWDiAbP69deEsvw9wsW6ghusQfSxzrktVuit",
  "key4": "MPXRyCzWsE6MGdGq7Yn5cALQmjakBPZ1ao2PD5o8PF61sajq9QEPSa2mzcfjmG61rMfxqLuFScp2B7DpZNfLUZT",
  "key5": "2b6hHqyJftutJwX2XDezLgZK8XJ3R8nZ79CBhGmsTe7qVBFuGyi1nh8TgsfYf123U6B25GejhrEjh9yfY48C7qmc",
  "key6": "5bx2e53A37JkxpNQ896qWoFLPck63NEeWzaW4fyLJHEASqpAm9XH72VGGFUojwHCvaCNKADLoYLzab9D9c5qZNXp",
  "key7": "4APoqEWd3fnLyfM2aYeRQahWe5PYN4Zyxso722gF9BuSYbxDcQbed9ixP4zry8zZoMNsbmtHajq5hi52tZjAaHEY",
  "key8": "4NUre3c1rZTEyr3nTVDG8aVz2wBeFz9bjkHDtmhdNDbWmscQmcsNe35NAsh9jWtCzJ3WVzjErfW6yEPRG8Fy6AKR",
  "key9": "vGk1fU9HZ8VngxCPzbU8XXz7B1fcNjrwagX3eVvkmDPAZ8uz6jzAfjZtXuAxw22AhWXcdyTkxRETSDFKT1xujgZ",
  "key10": "2fcQqNtS3H9F95RzKbciR9HeDxJ5sQot3PY13k93DK2kfi9dYib4ZA2yzwcmfPU2hdrmy8z5DfVwm15Eb4pChJub",
  "key11": "3av9mo45x9fq6pkcXyEYUo2xDktDfaR9cgaLUzt4okkGbim7bArkN31QHv8MGoTgqRnPAKRCgn5afCRVJJ1JHALd",
  "key12": "kyye3ytJUMuKnDxRHzicf1RCeCrJ6t2DuDRkfimoFXV2p1JCifM2jhiVKewx62QvnEFgX4JJPPYYHwrtfAhBbbb",
  "key13": "5wNqN8UQD8AL2TqCLc5w5oLUCKteWXhHCDtUmCbWzVoRKNfGRznpfsm8J9QnER1iRDX9Ccm7G18gF1igevbCgQ45",
  "key14": "2WeZEtNU1jzKYhRBwMtvTtwn2gFHD4uyzw8WqLXD6sS1kdPnhoTEVUfdtVV2tiW4ZqpmUrCYCGQkXxdRj4XyHuTt",
  "key15": "4xE7yvN5EStsAPe3X7ntvaiN4jN1QWJ7ELqkYKsA96fx1zgcD3jsZxs13dMREBfczAKam7DfhBVmu18FatL9XpvR",
  "key16": "5k2Z8E4sSVfedfmMj31jhD7sVsLnrjeLur14EQpgSM7tBiVY2zAWsqzPEVo5PaWjGXaAoisy3uEt7GoeVPqqJhgX",
  "key17": "2ZeQx2MeV9HyZRYtYNz5XbwNqzeMfrvGJeB7Bch2rNyDUGufseDNannYBiZFXLhNrkZ9kerzA5nk3i5R9D1UDT5",
  "key18": "3aLR7gB7SVUPJezS1UDeZXFU8UKrZnjSbmcY4ARzxQDSo5g9Q5LPoqWyEF6wNtkyPsREb3DbbyFUikeDm5GiDjhB",
  "key19": "3Bn9FfJpZPu2xt3gXZmkSrXUb9T8CXSE43CtxwTJ82kdgM3x4hgEuL4XL6NegpRnykwFaeNUTre2zoJHejtukAZV",
  "key20": "FsJU4uQAEaTiRqdW9mqEyfAgRvVQur5ekLyBriivnf264AUEaTmRyStfx2wZuPLBcSC9VsMPX4XbW1eQo2BZ6oX",
  "key21": "BjVvVVRs5ZVkfXyJoRanPtDZAmC9HMVWTPcofjJ396SkdLgt5WdvszVqXyAxUMmWtuD4LJqVyvFH8WnqCViuoWe",
  "key22": "46888Z6p5C9LPLeL8tZdz6Ga4VG3zxDoHDkUMoZM9RwLGHscp8QjrFuSkf6w5njQUucpKvjz941cDmVp3jyW34nh",
  "key23": "3CUmGoCcGBjujLgjLLEkNrdZBttYYDDzBtzfXR8akPVSZB8pe5G3dbpRA6397xs6NTQB8samJpQhQCu6Fn4ybYz3",
  "key24": "2A8zMtVGGpgWAQ7JckpyMVYy3Rs6FWLYLKzSsuAAyRqeC1q6kfovYAFfUgUeZBLgwQtatSGt63beXWHzEeknP2De",
  "key25": "3BvyBvuEBoqfJmay6baMBhP61UWDVx2sFpP9iqQWcLTiPk5u3v72AA8eF45Nw8KBaSkFbvzoye5q4sNsQxu5pUpE",
  "key26": "5wRHacAv2fM66U3DFuLzo2t8F2tQkTah6cU6bPFDBkUC3eaawR7EETPthTHdkJrskwjhkvaCb7chpA65VCJusNEw",
  "key27": "5PYD4ukKPrDrzHhCWiQ3P3RJYzHZY8C24PLLFn4hKYKsPqczvLYMGyywZLdp6EGurDfb1jZA1Vyr6nPdQBnNygES",
  "key28": "3jAx5yZUpF8RnUswS6PfjB6rY2W8tWFuB8aQEpSeZgZKCFPiq79m915RFVNQPShUnC1bzLPENsyh57x3abVPYRpk",
  "key29": "3GNWZPnD7LKggqSdEadd6f3erSdeXLoKMdrV1TTrJ7SAhHzofnCPiHD5fkVg5a4apoMHTxRVubQGGPqJ9X7qBmyC",
  "key30": "5nMeubLd49JsHPhHE1mUzaxsoJo9uNrCGu87Udz29usUioJgnMck1aW546tZxdxUWg6kXoZjiAwDHo8WFyTLqzpo",
  "key31": "43Mw6LE6gCaWTpyWuANFPpAikdyvnhFwaVQ1XebpjyWfDb22qU1LLpsN9X9WVGTz2FkD1BdN4GVadWj4LtppV58A",
  "key32": "2sxwH9rxfqt5qYRxFXi1mnQA5tZxQ69SkaLbRTLqgv622vC9q8xLKSBqEwdCxo1iJU5XkoHJUG4zPQKMG61kTCwd",
  "key33": "41pUg9jNpUhZCacb5Tzj3D699DZWPeHVxg7E9DbqjqbzwxEfeLR8Aoe5fqKJHt1G6S7x3DePqHnh5KdWSKMkDS5k",
  "key34": "2XvkPyvnMTMccMvQc4TZcLQLm2mdF3Ce77gutsTTh6PQJLwoZ39ob5Sqvgwwy633irnvFVfefu1Rtzk4Vt1qP2i",
  "key35": "2dHcz2zy7dfous7oGE1T6DBxEXcyxbTdiFimoAgUcoyfTfvbzjmJVPBPnhvWrHftGZU5Kcgb79aMx6iV7rj8dZJP",
  "key36": "58NYDeVhCvPPche5fbSZNRo4BzdpZAHRSUnxpTVHME3dK7V2q86EMxq964y3E85UVGEeRsYwxQ4GzQ34phtR3XL2",
  "key37": "2898bTc2pyC8RZjU5EZ4TmqiqBnQsNwS8RpKgoJTMEfUvGHvdAcefWU2STikH7aC3GPS2uKZrSoeF87UWDW8YepF",
  "key38": "47LfWMiesuFCuggimZ7w7Zx74Mp2P6RFtJHyCtghVD3mvZL2Tk2qjRSZPa1wkXa4Dcv67Zzmy5D4uLDorfZvwquU",
  "key39": "5vH9hpv2uALMKrnWtKPVbdGhAHUpFmmccFGJYrhdr57P1kQuSMd43SCsgtEWMEvzz6JtemR4u64amK53yAfip9Sh",
  "key40": "5yNb3xYNaKqPXe4X2HgmduuAGw9t6Xec8LZ7ausUkYoFNCFAyJWMpLAZ4kMMpYfLj4ZK2Wov7MzZDMKDgn7typUU",
  "key41": "5FeBvL8nTPUaz3aGrAwKhSgwcpi1xAvMfB28bdqZjbDYPb6WvR1x6hDzSBuc2wBkBgmJL95CT4uCWxwScFZGrb2J",
  "key42": "2j2naByyBt5JHQR5HEGHrb45Szj2gnmysnZeLKbeNDb6t1JJnzHuK9sxRsz18hT8v4ayEKX9sGx75wumdUZ8mRJm",
  "key43": "TJGCKNnBi6MApDyyCFHysxPc877HyRdyBgTy2LrbRkbY4UsyGwR1QqYzmgc1BU2iFtKaU5rEM9b7UPGDpdq33ov",
  "key44": "387D7Sr8HBKdeV1N2JwNu7ACFYbi3fzoHcNvVpXJJjekjSUPEsk3eHcDpQLfXWqnB7bfFPytV8CMwBh7iKTeEYzV",
  "key45": "4crStiAGwLS6yhEGuMsbzZ6eLePYsBNcspwhLQEYc4zVBDXRLHYubtNpXpxZ5qgVHn6WsXaArTLm2NDgPvn1GbQh",
  "key46": "57gmdW6ekGRyUFkm8BkR31eJm7QvHjJ4vjYR8Ha8BBCpbNCogBsuzKxGJXCXUQ2op2Enk58aTzzA1seg7ueQok3V",
  "key47": "2w6UrGoTpRPgUX35WyJMULrV8Ke4NgtzwLHJHaqV8JnFCo85ZTUa6ReJczJbU8kaWCe72ruREvGGJwyhhyaKp5AB"
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
