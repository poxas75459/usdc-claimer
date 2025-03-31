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
    "5d9FTFrvHAdZzMhxWzd9Dq65AEVQJiEpXYL7AZ27APwo3EA8xxy1nvmCavmatdKEfxaouBWKnVBUELyEwKpCdFYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XxsrnpQsBKzhqukG2eMQLc2Bur5YV6j3pj6uo8dH8kRvaxViMBW7LYnye4SweCg5dT6EKCwueVh54YDM1mYu5iJ",
  "key1": "3NMMtjo6L6wr34YG8QTPU9dakoHjskrguc6taecbRUR641FCfx9FwhpujW8ToXq9sSrGkqS7QhM7kydCb5Lujnr1",
  "key2": "4DTd2SPEwVa6HiNgEqt87QcKkT4K85yZQA1RiNZEZXrpzhnXeXcoUDVmKuKG2ckomF2upZeE8SCVgm5jSyUPAN9B",
  "key3": "dNX4yaYTLwJwnJXmshLkZ7zvCq6rmP5MSAuF4MkcEqtFdPUptuDRuJfjRjDw4UzhfQa2Hge42sCG27GNcmcemcm",
  "key4": "3jt4tNJigrxrkBvJoPd2yFRrSYwM6J7AsnFVCXLx7nQJ86RV8G29gYdD7spQxVhLGZs5z8DJKrg5kPFgtsCAx4Sb",
  "key5": "4xsSsd2MzWVumpNiEiCC16geGYAYtfWyr6x3oXzwdoiVahXqpQoNANtrNvBDUnTG71pNCQunUEFtBHzK9DVkXFcn",
  "key6": "4th4QFUrUim8RKCPr1ZDYryUKWCXy82HbsFBWSGxYSWpbmGxRDe3vKs4THzEmSDWvVeJofXdUDdZwWFaddEiQqEL",
  "key7": "5irQuNGNevYY77wUZv92viRKAnLXtUJif3tKfnyXedyrCnZR4Wiiz99KppxDWq4XfodmyMCcQiGkfppsqptu49JW",
  "key8": "4KbFusUERvCfuUAY6pJsgaATsK2Qj83fEAhaihKk7gLQ6s7bvMFtrLpcU3LxEeyHNuXuSGvfbjp84qFupq8Uk65N",
  "key9": "29T16wfH68NVBtytNrTrQmwT6tPRthYnQPykhDNnRqdFZRNNHgGtmpV8dEtwZcQRQkzJbZB8KffkydmEDfU2fNtr",
  "key10": "4Yis5ihfuWhyvGLNfVjGjWqKUmzG8h2UDRLEzxL3WpCaJ9kcYjdpH8k4VBNaJsGc2cgg72TcxCbd7mkY1VdVeLxS",
  "key11": "2SEPsjiQw2RpCWE4XZiXoBSqm72aGB4ZZMErJeYoyh2xpKRMpikcCyb3M4RbiX5sLDsNPPFmYAcRSUriuW4kqwFT",
  "key12": "2HhJCqAjqNnZ6dGNfWBvRwo39Xhiru2ZieqEtMRNKXVWVMFyYn88sZMmTANKt4BKc285hbM3N1JYdcm6RZtJjTY4",
  "key13": "5oQM7qKbYxgKK7BmMVYTU2Ja3rHNKAVmJ1JYhJhpEgF8MDSD172GtUTP5szua25Ff3Ci37rjUAvER11twGu28U13",
  "key14": "4YomXLtsN43Ckp7yv3rj3UMhuStGpMZ2LkZxc8BEspgXnLdWGfpoPoCHxLEqz3V498JTjbhm8p6VpsNPNzEXuZuv",
  "key15": "4cMukUeXADyx2PeSGrq75qTAF5TXqLgu1kqAF4tFkAT65YDiYvQpDj1JT1viXYZKXRQkn3mge4xENt9XLbvDv2nH",
  "key16": "4ZvnoAFzGgkKLBWPejQ9U8RWpeQgHN4CiCeux2Pi7yVq3caPUPrgd1tJeUGUBHGzFRX8dsS7H9tC8XfHRFHkznCh",
  "key17": "4sHx5soGzdCsLFBxZXWd8Y7unZsEX3ypgBUTLfxdu4PZ5JwCWwKHRd1REH2kTHXpWMwaPqNTBsWKeBqoKwLqFdyC",
  "key18": "4ssb34pGkxLvfgJEovGEEemaesMgAxPJWYE9byGeaGxocurbBwxdu2ay8xGeER44f2kxK3D6ssaSkwr6d7wruXaq",
  "key19": "4B7nsETbXr43oq1qL6xQzJJW8NKRM1PWs1gujwAm21VoSbzk6Js5i4udrNEtE9Unjs4jvnnP3gKXf46x2H2UQYn9",
  "key20": "5ZFUZdkWzdKFmindAShAghDRVjBj6SdxQgTadQgVdKB9V6jYdZpSDkoNqszkyGM2iKxviMxW9GTZgWVMeZiHyCcb",
  "key21": "3eR681LnCHDWKbW6gXdM1Jof2mVc85fJtfzJjr9yrg5c1DoLkczFycefGyhguPTyCko9jv2qHs3ri6sPz2dzdnPs",
  "key22": "4WAukzPY21mRttbmVG7qRfFkdv1JEf4fZ9GknHpyiMJnkb558tFDNsHSoA2Tgp95C8CQPJZWrm4RhBFP5RWyiuBb",
  "key23": "4aNzr1mjcKGBiFJuS3sMebLkaWEQ8mBQ8se1HA81b2jcQd5guVkVi6dsXaGpZ3WvSCS8V7LBvowQozJZrxAFdk59",
  "key24": "64V2qBw1UrageNwa3Q4MJz5hM7Fw5RYt5116sGiWKBXSESpzwukYM9fXtGVnWAmF1mN9AAFQxRP25vHz2asx29tC",
  "key25": "2LNrXVnt6gK4KXNSotzK3yc7SUKu2f3vBjTLwsqcqXQw6RZ6hb3vKEBTjWzZJJvsH5tMK7JgNBYG6eZQnugYHpz3",
  "key26": "37HSsEmssMAD9rxqszxbEPajZz6SSF6iokw3KDKoL8EPQg1q1GkQDHhc9BxB3xjtbqGbCgwRVzJ4nwQGwTLnoGnP",
  "key27": "oNMynthuvX8Um5oW5FcFsEd1ocLqqTfmh2hGhxonPttJFsmri92srgCCd7S1oCDyNqKStbMvVz6hS49PJAQ6ixj",
  "key28": "nuKxABHT85ThxXjbKEM8scxDHQKMbwbmJACtoP3YrYr9ddqkdARzT8ZHPJXLFpR8G6s6ukcgyihKBzyNXSXaGPk",
  "key29": "R49E7hegTtNGUh3DxqVJTRfSUN9L8rL6fZQvvp5dzSFZNpfUy1otSziCAgHDokM3TQrBAmtsvXLFim8UPRozsV6",
  "key30": "61jqFXwuUXCQ4LYgCHBoee1nAqq687cFDk1r4aVuVx7N9Ah1kRUJnr8Eo1M1JZzVUkyH3XsU2bCHAFNE1g9T1oXS",
  "key31": "7oJGEGpdt3TpbSSbYB8TnubJHC5ce4eCV69osaZqUuLV49M7kQg4Ag61FracfnHWn3MeQoD1phh4aXh6o1HoSbQ",
  "key32": "WiWfet8QBA3UTtq71M51qgjp8436koGbuJ6kiePUfPqthLEPePitu7jHGFTff2Rpfm4XoZWbo1b8kDEoGDPWTGU",
  "key33": "4WG88fTAReJsjh4YDVfoxTVkfSJuNrvZdFCTMkXwqPU5nvSkVHKnLXJoKDbDjiaF7shgB7N15Bwzd1Lbf6znpM5Z",
  "key34": "CVB65MmkL12B753d7tumg8fGmCAchBzzkyKHtMzV5UDbxx5xDuV6FoPwCW9XYgLvpfzpS32Kevfb48g5jDLfkSi"
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
