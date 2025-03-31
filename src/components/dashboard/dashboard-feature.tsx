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
    "WLz2v2vf5q6GR7wZCoCFL5gECV3zVxaBWoNNYQzBLx1jPeTAyBdpbxgZyQrQaXsesTctzp191Xf8TU84teDU9mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qowmWJbpNb2A4Fx4tU7y5VcnMk1oHrPtRHBjhbWmQXvsYxcY82Le5dTPNnHSdHWw674nLKDCXjby25z6c56Rvrg",
  "key1": "4EH8QG4kUS6Kc5e59gqQh4M6tWXorAbJWGDwaHRfc5EnLfnAd7fFZPoYBgQrLBcqHahSTy5Hq9P1VQCsUK4amRxU",
  "key2": "2nVix67FzpQrXbbUHGqc5fH5RKhUzjTNShWaNuCsekSrYq3gj27NnGH3h6dTX834Z8eDAMwQZ6De4weREvZGjZZy",
  "key3": "4ruSnoceKc1qrvWr61smnai47wWXNnBrCdTbq13fzB1krCFbpUQBVjEyRrWe1fLnmSE66LoJnX6jwL8yeaEaeE9R",
  "key4": "51ZePr7ygthfw4HhS2CXxKpoao65gYfmp5tFpWqUFNk37NHfzQMuT2DyBrd3LrjX4rzTe6DDxETGTU7v4gfbPxdw",
  "key5": "qsL99nFPB88tC25bHMG7Wdj9AQuCzGAnJsY1dVCM69WoqfKgG48CFY8z1b6Hr12RuUMwiJ3xS3EaA7kkr9PZy7J",
  "key6": "5sJgQiJBEP2tCRToemYHb1kR7PbmAiMV9PbtpdnFqHLztxgPJVLFH42iJfvFGeSFfV1fBiPZFHDwRfFHhms5u5MJ",
  "key7": "65QyzjDoKvrDKz1E8KF8rDnTWDTbpdfmkrye2ixH72Wj4NWjyPhg3CA2mw9xYJxoeWyPVfs8XxmYFpYvyjMbdoxC",
  "key8": "668tq6TvxXksQ8929L7N89zCNBp3uW7pT4HAJouVPvD85M8NfYdFFT4wFw9iAkp1TT3topu3uVj73SiCDL5PiE9Y",
  "key9": "4tVM2iKYWEGeV7HUwnuN872mvhD5dncrG4vcRpTpWqqWwFjCgPX7q1k1y64BwBan53K5vKCCRrs5Bmb8aay37BP9",
  "key10": "VbZh1t2q4pfAomWvzf2h8RmxCHMyhzPVKjLVsfne2QUgHEx6qwmwQxgew6acYrApTesCXMuEUJDJcGa81e58s55",
  "key11": "5xycumoUcpgbX1YN3s3CVV9QnsFFUa4wvm3qEAhpWMQs48JLvKa9deJML7C9dAaxMR4hj2qrJCBrawWMDQWwwC5a",
  "key12": "CoCYCdLkGHycPA2arQNXrPmdWr4JLCRgFXxYcqrKP1Gcwf9Wg3M3dHB7H4EzvWL8oJ6pL88QGWdruWN6NAB3cKM",
  "key13": "42rXJPffU3rF91fkfHyJ1G6EruL7YtKycw2SwVKzUD6P3KJVbEBmAsyuJqseVE8nM1CuFiTGUbQXZ2ifP4vKvrdT",
  "key14": "37wQAhH5UK7UxDFkSD1KzqKUpJTzSTzDMnrNQSVb7BbUaRcNMXUAnWnp1oHGVB4eCxN7Gc3XNtBfJGam4XmxjXo5",
  "key15": "uabn4DsADSKfCLbQfWbnxZvgE3qPQztSqqDsPAc6WkkPG7Wxm6N4QRq1c2DCwB1CXdDdiq221ci3xtWZTm3niHV",
  "key16": "2FG1wqg8KhPRTv5ytqrqq91VBZ9PPCcCB2tKW8hDsjnVTgvkwm4158C7rEkmtDNRMnURbVUdHFARwLqrdJsynQBg",
  "key17": "gktRfS3kbZ5c1xmtVgexeNwQi7KDgfsKFCTMWccyK7TmP3AzNAgZhJx8rwAtKPtvFjgJkgJKmYjCgZuVwe3b35P",
  "key18": "W749rimko9qz7JJjXMuZCTUkTbY5CAzr2LyD3qbv5sqVtRoaAMBpgSmadAPES2ZkjxCQ5BqXbBggArfBDFvmsf8",
  "key19": "cfzcYpHE6P9hPwNJQkayg5GTjMneCfwyAQ7UzN6ND5Gjt5KoqsoEDov3PQzWhQDp4gU65KV67a28kNWEXpNZb1q",
  "key20": "JrDJUYdNd8Js9UobPUFkYoVY9zgXWrnWeMHNHE3Xriv3MA1VvkspaCPLpgGR53QNAnAwuF57MrFvSzJdVBoAsZZ",
  "key21": "2iwuPYHzPob6hz9T6yKvqD28yEL3Ln1JSw4dmohkVtmspwUW9VnYwTagF1yKi4WujF7kVNJ582KvdzUtHs3cYg6i",
  "key22": "5TYNVCpYx7oEnySuEcNzFLsMkiF7EtBiTibPFwHginfy5SRokzVqYDesFyjuuqsQrsmxZew2XQFMvgmRFwgMpuHH",
  "key23": "fEq6S2PC645dMKbhw7HDeB2xtGdttbvngVagY6qbi8Zh9tRRvrHtNgp3zsSaXh7NbWgrLqyo5RiSv5dGe8yc4Cf",
  "key24": "5fVg79GRkV4v1npnttKy7RzoEy54ZtjFATF6XkAMm8ETj1NCn2mFs2GcUVS2sQJj9vqzCYeDkrpiEXgurjQpRoEx",
  "key25": "4nCZfCsevEyN3bJbnXSiGiQ6SE7gX2xvkdvBS6vaWatroxkTTYNmDN3DNKHW3W2GqJgT8ChyyRQY6sTYAJ1siE4C",
  "key26": "3f43e97ywzenS7SsDs1Z1eeLdosbqsr3EJbjwcz964s952JMa7otHE39qwpY9ZUpgpoBXRYe76tgnaAdKu4vyBk5",
  "key27": "4ce6L98J8T7JCJ944EtLfeiaS9xug2erWef9L76Xe9sfDFBBv9vT7njmKGLNyC3HdWtz9utiJCnHMen83j7PBVa4",
  "key28": "5wHgtDcrvGTBBNb96YkGWnDFY6xw9rAHy68zfEuzoS78q5S5EjGVW9SErHRue7UDp267mSAUudABJ9D47oh7Pajq",
  "key29": "4M7X7q8qCsRxKZuEg1ZjgCynNE7N59qs3GR19M6rgyGf81CwJb1uMjJ8aR3oA2KMG2yQ6Mmc467CKKokRqhW3sDw",
  "key30": "4ZA4zxvXvnZ9orb1SNMFLcqh6c5yQixPnNKmm1oDRcL6FEfo7FvwcJyM2tMDPTE9hnDekgUG55hvSQ5FinjCrsL3",
  "key31": "358BDbuGQ1Ytyab4ML57XV9c9R6czAeP2Qka1t8tLNBSmCwKqNJmyNsXQy99M3TEYAieyCBdwQThbmvd6YFeQq9A",
  "key32": "4r2ex8bD3Nc4XG5eEcUVKbqAKvUSzpzz2TXfvpLBMsVwEmfxjguP2Rds7vdLHieM6WcZRkxw9zLfEv7pizcKYx7F",
  "key33": "gQQhV4wFqkCWixSTXCwJPmydEzeJZBP1B6Thr2qU4GbxZokijPpDwMvXEhkUz5oaqvodZEaavYanCUh53K4qH5t",
  "key34": "5EgVM8QXmaARYBQ4tzLhgTQLMM96gz2hHoedQetPQTUY4tibRyQHKivoNknLkYsuT4xDeD2Br7NfaDVm78PwMv2F",
  "key35": "2fYWCiSrRBFmY1cX5B9kVNq1J5oicpLRNFaUFrw1iikBzeb8bfbRZGAh8w2AtAsFXnrK6iXJ6pDuQA9xANAfHCCu",
  "key36": "8UdVh94zABQeqGQ116LvBNCjsdK2dSPQdhji34526ZibGSAtgLnxH4GNQ8VQek8eXJpUt5jRoKggZSxYofL88hm",
  "key37": "3djt2KgHL7xXHk4akR5T3Axqke2DJJBHxi6ErYdFTRF4yaVTNzr8cjzxbR5VLYn6JifEYdoE58KRmcwsfUeodp72",
  "key38": "5a645efjgGNr5Xx7THAYZZoSkx9esQUSXXYNFw3mpYCDJqapv6Btik8kYhXxhTVJDN7ipMhvMcoNtFrkKknvupML",
  "key39": "5TYK2mePigT2iCaUccw3EFWoNYqLyqKrsQy7NKBVw7cjtqBc2J3LPpVjBkBDzgq47Hu93yzH1wo3AWPhSJcsH1ds",
  "key40": "26HujnHY4czm2JuayhQVrMtADdxFf9Ese4BJgkQxB7C8EAVgX6MiXRyiHTzfWBBL3mWv8DLNUHnzsP5eWmQrZ2xq",
  "key41": "LNRRkzbne8h8M7si27R1z6kVr6r4zzL1XcFZrpL1i1ZKJ3ZHhfzrKkjLdx8F9o9QnJQi8jmfNagtjsCswLf4FN8",
  "key42": "2J4AkoeTa1StkCZedML2b15Ty7dbQEsEp1L32XgQjeYsJ8bhTpbYt1J31Hcw3MzxVvjepShSSCFq6xjFCK49aGTH",
  "key43": "2bKA56SCyJWfWFULdDfpSCcDTSnQVHBfeQTPkQLHL2NGG7qi6Py38o5SviiMvNChfLk9FY8JkSHr42oe8RDphK8H",
  "key44": "2nJpF5vco558i6xJJN5yByAWzj7WtoUEv6t2D9hDxpFw3DYdnWCXoLUg4qYwnJ65Wxg9ZcJ7nwWcUBAhRpk3HCPr",
  "key45": "2Zb8keSheW6eXz4HvMLpPxf2FnSLBAQy5GTZa7sUrXHjpo7fkRN15RqSieqpQp5XggXvr5p6jL8J6EXesKFKyNgy",
  "key46": "2ihFhdGppomw5Yonacb1iuJaA4iFCbVvgZcUieUnfJWEBNr2rn6mAeGd6xyoYYDWoAUSv2gA3wvnShCmieLXonrK",
  "key47": "3e5pcBCJ57MoSpYL9H9aiWR62XwtgnZYtW2W5dVeKwkRQaGE1pWnLiRTqQasc8T4D9yW5SFzR482zCZJA5wJjvPF",
  "key48": "4cUFHx5mD9tFSYZJXPVTndoWFU4aAaWb2CBGc3DkeEZueW3hTPJ2jA4BevYqv4NvoedVEL99KNpuoEkAHC9npKkz",
  "key49": "22AnHvTgMG9HTuB8yJ4QPhzj2JHuo4Byy8jcPHVTKqzvyzNHY7zmpkc2J7uqRY91VyDhd1t3pPD4CUDRaJoG2uUP"
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
