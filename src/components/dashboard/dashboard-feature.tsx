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
    "2YiHcsjMYvpch22ThvegkaQSQU1AABMm3Qs27FoQdS3ztYBHMjoRvFdf7kvm6ZutiBYqdJGJPJGSCkfYTDMTdHE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G9YARirdwgddSR5YjwWuzV4jeuG2fX62sngPaKr3s8VDdmaEPRGAdRKAoPDnRvq7hTspraUHJ8w8aqT3hTJ1mDk",
  "key1": "3rB5ZHQHuscJe71pACPjC37PTYtDfHG2mxDSpQiJua6CtsZ3b53vw87u9PbX55Fmu24F6KUX2pKMfQUtD9hfM8YG",
  "key2": "54haGZjdxhxpk8ghEWtZf7PYczZBPns9o4FDu9LaXU95P5CEecVMn3LhPmowBaRsGEemnwVQmkxhjbJ1bL6PmCKh",
  "key3": "5nNxqLQdR9sXxpQo4WuNQP5NMkgt5C4sPkGHdDTN3hdUz98nVLU3sphMR75t8SAGNwPAfSV9kviujEDBE4DYTyck",
  "key4": "bsqy91JqFSZcowbRkK2xvyD7yLFJKsKbnKtZa5oxsa4KxvBa8MQ7RkmyFich6jcw31DCF3CoWXpeW4GDaboYCXA",
  "key5": "2toMEXu7TF3c5TctAoefWn5przoRHsJxJGHrK4UKRoB3gj85vWDHpTJdWNLbgXyQ37TnYMarc7xznHojjHGctfXE",
  "key6": "4z17pqu7eBGtW13tB8GNcPfXWyCHEEzSJnCZ3YLS5qXEMYTQV3CQ6Av9xhg1dmGsczxZHgyFM5C67SLj72eRsN6d",
  "key7": "62qeDbXgbUkNdBwJEJNx42demfr5Cg5AQzZ1NYDqJn51v1koUcymBJs5ES3jUanJnAutWXHGS23WcemccPzhxQMy",
  "key8": "4B3k1pCogR9sZ7Au3UCVJZUPpjDZ2whZK1sqfMkoPdMUxcnnzAxbAKZeymFNDEctUqiLpmfpnq3WQn4KAtjiqju2",
  "key9": "5A2sM9JRJjPzP2vnXNNgtsBpfa3XufFPxh4jFD5xVG8gBLDuncQ49A6XibxEF66s4xsLMG9FUrTuzihLfdMJVJuR",
  "key10": "64qhFFmJBYtppwdwcFxLFLAvdx1eXPyck78JyCr3Stgh31ACgxgqMVuT8SvS7GgVrJuzxhQtXGjaazRJhGDzRcV2",
  "key11": "3Q9U53yHL8WcHukqCuuxeVANQtHwQX4YWYPVvJi2NLeaAd3uHno1x6qvXYNJKoLFtbKcu7t3Fg1WfF3TVpzwBBiR",
  "key12": "2cPZJVpHvX8hncpLKUwBNikeEs9ZwcirjMEk7HXE1yuRuMHgHeF8N5FqHkAHKbQKSJ21rJu5ouAzxsigsejFYT6u",
  "key13": "5DFj3ZCehKLVqjvNgYKwPY8P51Bdsx1pvuRXTdA1sjXYAueTHEQgekkdkG38foeArP5LRMHuhkXwfZRxjyRYtJ5o",
  "key14": "5eWrYwWRadaDVimSDogKdpVstFamCAJganVXdrBA14SzJGnvM9CgF2F7Z1vTK5Q8kvCT954fwYEgqHLa8f859HVF",
  "key15": "5iMCgDvtiXxLAbwx8SPc4WiLrZngeBaLc3N744cg9t2tY543iyUhz9vvVvSnhGPPSyXwfHtuen5PcNd9fGokWeFb",
  "key16": "3kZzwMatHj68E7R2UxDfBzNbqLMwbsMxasGmBxQEyxxsTRGdPQDBke8MQJY4j45TijKeCNJoQzsdBvCKBWHF3vgh",
  "key17": "2bVqxtqE4VPwizwKJTe11VYhrBe9fAx9RkV46E51YS6JparLiT2Vg9DoeJZmHyoUEr6qX67q8WtBYprAxqy37oYG",
  "key18": "EQdLn4oyVgfHYv9EZXPvLarWhKAzSK5t27gTXYDQbVhy7sDJsZU693FpDTS1vGHP5N28FfqPXMcdaGu7TxWcYA9",
  "key19": "57aTuAtuNNSEvGpURcCQDgYDyu2Vd7qD2aY5Udnp1XzEhFoWMKwcWAWnetCRqHeadng6ZtaBZySwYJqWG3tGRofw",
  "key20": "34UpAm8UdMHyj8u6XeDMBZLeW2vv999gkkreQVNxrX7s9miUEFRGvdpvDxQouwsofDeoM9hMxEnrLJTATYp2aTHW",
  "key21": "5JNX8ZPG2iYBxcuGFY4M7uepRsyP8wRu43wfQYJ1LyKTbT5HtNkcF7xz2BgM27DdkcCbL25yyfyWYXoz4pmXswmD",
  "key22": "4aQuYtQqPU7S5zrsZdzMQKTep2kTSC6HsHexWs9Lugu3bXY7STVJXhKgtTXJV4MM72AuJUB1N6A3awggzemBwUZn",
  "key23": "5DM7Ruj4dk8JX5kZ4XeEbcKCtLQwyc843frHqqCawb2qErMKioAAPTuMQ76Bj5fSoMUPK8qRHX6ehdv1geSdWWKs",
  "key24": "5Kpi5vMtLcBCZM98TuhvQGk1y6hidQZ9XGkCGdamwtKZ8At8UEfHE8Ver7RikMSGN8vYZHjtSM3Uu5v1j3CGJqfH",
  "key25": "2mYVrsw27eS3L1FrNzp2QvMYDxZ1Y8pPTHVMZtTBM3k1YF6Kszwq7XjoWDbfXEZv2XWCteJUeQCboLrMoM2vJ8MJ",
  "key26": "2HpbDtdz43o8hiAykWgBFx4K3saJHLCAudG2f62A3vCP2iL3oYM69KweG5KxiRQBHM89iZJGuCojMJyQYjQq8H7s",
  "key27": "3zcSPVnqDa5ZezZgFS582FfYwcT479wENfSrkRbp1Wsjv3BXbPdpBcnehCYJKsPuVcW419UHebMvLkpowaraBCBG",
  "key28": "472tfXSvRTHyWZw4iaeuhxRgM7z9XXiFECk5bAykgG8j6uFuizGm1bVfKtHVzcp4iByoYaQUqZyL4WGfUmUGsiqH",
  "key29": "2KXaCttcceJi5Fj2E9d4iNExiSo4fTL4SFBzu53HjRdEhWU2KL7qJFobXee41mxALpKLAoFAebXAkpTxiuKzfeVJ",
  "key30": "4EVwZs6u9uCyF9nktc6V5NFfZnww7w4qD7dbCzmNFUKwz8QSgjGKqQxx6yGSFRJK7rQ3ZbdvHoP5nPwCjKDEVPNT",
  "key31": "45pnHskei8BAWEZwhea2w5bFPPmPtYniM3Yei5qLeoe4sckprxD8WWsv6qpAQCm5n3fJ2xsjVZKKau2ComHe6nyu",
  "key32": "65gauSYM8FSMx7tsVVEbHfuK3DEd1bfxuVyDwtygeLaa4iiTsMP7Gp21T4fhJV9b3RcJnaebE2PrGxzXVp9xtLtE",
  "key33": "2VYBs5LLQH7xMSnX37tBogTAFTgXiH6THnCn3qtKk3EwLe94Xght4N8JinMsKhJhm2AsnBsudEMHS823n7Tp6NUX",
  "key34": "5q3umRCg6aZhJ1q6xLxQF5RKruCtDa7YQKZY9AwqFurPgJLxG3z1G1JxhmJHY9pK2FgmxSqQZ2vrxtagvKWHJJbx",
  "key35": "3GK7wjNViX2bj4ipah7fzATDbGMBPh2RfERwZ2Zqykuu8LDtfGb71LxVjYoEjXG7MuhRnq8L5wowsdcAmu4bRScX",
  "key36": "2iJA9rN8YA8L61ab6TevV75BTzCyLwHiFMcEbub2R6QUCwVAuZ4awRPeQQbUvjVnnDb4vdYyJCB2E7dJPeeSJgxJ",
  "key37": "Bjnr9VmcQcMg6LaG9oKdAetWGyDefi8CeZFSHz1bJEyNpNWoYLxhcdT4zs3fJzvJpUwLNi7vCQdQKEzHhaFdoDm",
  "key38": "33SJnSD6sbMZDULbSu2W7cuaFNRxWgzrdx2rfC4gc1Tu8jYCEJTz4ykeCfcg7mHZ6YrEUba7Eeb9Cf6k1xXE8FXk"
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
