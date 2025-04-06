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
    "5BLBWkLutdx4tkjsR7tD9wPCKYFGi47hoBbDjH9N191Q2NgAAQ2RdmYyrvjL2RzTXyNuVH51ozLrPakQ6CtJGsAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vDbEuSjXLHhB4pwBe4MYdC3uT8uzMNqd6SceQEqaSSH4AdF6u3Gh6a7jJa5st4qCRimHrs1B11dSZ7r23A8UtM3",
  "key1": "5FPVaUF6eTtCp995RHNL1wJxHPti1wPs1UCSrj3G4ZG7oUGCFmMDjUAxssdMwBiEg4z3avMSCGmqnyveHGFzBhYd",
  "key2": "34fjYqxp8rByoY6Yz7TFxRno6VQHA4PbarGoBBYDtdXubXGS77ThPAPGDmrSNiYkEJ98vNga2ur7njb5MBhyeAaE",
  "key3": "2pY9UBEGwzkePsaB383H8vYgB5pK2ULtzicP5uJoEzsy4DeUAUBPK9ag3qVpfb39aGdh7KZZwv4ysSfy61UiFaEt",
  "key4": "653R99isB4qW4jSXqhECYA5fcLVjUmtagRprazZK9sJSz6ATMb9BSv2bjKkfuqCFebDzMu9BU38h4YwE4DhSnvX1",
  "key5": "5xddY2phQ1xgmKjydXo7iGA7aNDBxkP7ni2WHaKB51HMnPAyyVm1E6ntbtXbL6G6XEiGFg9QbgYg9VttKLTgAf5M",
  "key6": "3Hbrhmys2T1ZbHLBh6mrymyRnCJAExyfmVvtWghoSCvETwwAjZE2MgNi1XAJo8Uef3wTKGz55A5NAXVvEhGrAFxb",
  "key7": "3S5qUN8KiTadF8F3rypPPFefMvP5aVXqwAhPJdL8EvKxjCzQChY8ZXCPzdVF6jLmfGS3VVwDNeMsT9wGrqencVQz",
  "key8": "53ACUS18jmuieLeVFax6tyrV5wKoq8S4qYYXgS9KECaMzFEa2K2GR4KoaGomz1pLtqTYJurHa1bQuG5wqZSqSBqx",
  "key9": "5QonEC9tWhJeGyLJkDce9ojsN4B55znb3MG45WbGHLMo9SZMZVro3ExjYoaLZUsk6nZR4KJijWUUEC1GQccK5VBH",
  "key10": "5kdKsNTkLR6m7Cr8Q7Dtq7Wn6gTT81dmuxgbAHrepdhSZ6peKtrf2NYGE3KBDH3nFwHYvY3wycVLnsFfmPw6625D",
  "key11": "4XVsjuGhAh1EKdR3hNCgizE6TfdFfrW3yd3v1uhYAcgYFgmECnkmLYmXrkzg26gy2jzAny9ihMhZuryjgxP4FvwB",
  "key12": "5EbUtXyFszgd5KKQ92zVoWJhY9L487j9vdx3ZyVauoN9qZV3Hdbx1Y34X7oQm3R9gNQ7pLPAHdhWKoRXENKmxnhy",
  "key13": "3paKZ42gxi9uzvcNqyTBeRvP1c4eeua1FaLC1Kg9dXr5jUyebao5sRYugQGYaPV3de8ximCD4wKfA89W1UnWWLsf",
  "key14": "2Zi7c26zARsdK6d2nKKqSzXZWkqj6MFJYkCVCdvy7twmvBdhcMdhsiULtSgQBNzdZ8pZk94oH9ng3cDqgBroKTxG",
  "key15": "5bQAioNrSaZNw97xrKZo1jxg5eeYJMyzt6mw4CZZQ47K9LGnyLzG6cEqyK18t3zZgtBkUZih3Ehb25RLiS5aoqPn",
  "key16": "53wKES3jiRqoLqC4VLhVUJ9hWCu5KBeTzoy3YgUAtjHyXhi2XmZZ8HgmhsvK9m8Ycub6HZu5Z8Ykx2WcU5JZM4wq",
  "key17": "4HcAFt8GBvLFakZvvPjXadgCGVKykWZUCTXCvZPjpxckyQrZSrmnmpdpPiTvdNzf2FGHWHCHAquLhve6fDNVRGJS",
  "key18": "35VkzrVVqMsbxrUYXiCDPJgfZY3XkMoKVs7jiunMm7vi5cJ19pj1dJXLjb6fPQJj2aGGmkz29FZ9XuKXbMrd99jA",
  "key19": "2joxVHL3WJFwPy3xgMEW3b5mSCjurrFnowBBEqdchfaDiQu2zmZAUbAndH3UDPMvgZuwrXNvyuxQG2h8tZcBKm6J",
  "key20": "j2Mnext54WTAZh1EgQgVNUnup5LDgaxRntAZF8vEANvTdMSZd3m4sWZJ8cheRqjuRhBgGn8FBzoNg5zDL8aZP5f",
  "key21": "4bcw9Ax7yqzZk9CoA9aW6zbGXo3BtTq375TiX3t3g3R4Cndt7TuidiPboJu7o8ZFkERkAsWdBvEk3sG36rfb7xZi",
  "key22": "JQX1E4Q3cBSiKB61PCRbBHcCd5RR775UWyNdPUhHAcNKdSSGLPdM7RWhFa3bTa9akNbXv94UTsY9UkmZjpGXLSq",
  "key23": "4AKaidSDoqCD4T6yCFLtAtQgiH7uBTWJGocXNz6LN86WQBhdidi6d9s1s4yZusuNgchm2nS1pkRu39qbHfsLnv8B",
  "key24": "PYUndbAL49CwBcnKCtfxHmUun21md5y5qTmeHXMRCzbBGvVVMw4MWprZWhT46EoxXDbbm6espCkuvFudsQRPToR",
  "key25": "2ZkEGD5wLeqQFzYUJstmvsgiuMLXFYpks1uxuHwhFzdVd7AFLYTa7q9kRDfSCasVjxXMtyC1Mfk2XXbe5KVCfzCS",
  "key26": "3c8g1nMx7MtZ8qLNQarxgeUjJWGuPEFGQPYMgJQPZg2vtqkoZDhMyGsr4rZtb3Vs7aGm6KMuP4WbGWNFo8hPaGEh",
  "key27": "wHs3gp4JumD8BNPJRWmMXBc1zEghpvqAAbZoB8eB8N32MoF2KsMPX2CupwXak5FHuVTaAwZFcULhFE9TnZBwEUd",
  "key28": "iAU999WZyCUwoS2fBTgfXa1xwowkuexuwb7m6Yxj3gAxvgTF4qZfz5LhxF21msW7PgmoX99Z5dDWMJNPGWUKiq3",
  "key29": "3x8oE9VBmTNbEvZV8R15412tKvi96smTvLHd6bmcphXpJTAsqV41NGLq4QZnC7gGaLymUQFKJvDzb6CbwYVkZ2Hm",
  "key30": "22JsGbGCeQfLtmENdr6CeGJybaiFbeqj6ESSW4r1e1Qy32pm9W1iFtnrRqAZ9sFvPTtp6y7z7RVaDzQLRZce6Nuz",
  "key31": "BpHXPVpFy21B2AAXecaohWV7YeKdhyyCDfgr9vpmi4FLthpoFhJLG7xqwmzaWiJXVZVSLkTZ8gw4UPQsCfDHM7q",
  "key32": "824phxbPCdX6XpqjxZqhGhNaVXU9q8VCe1RFNLVm6SAD2mHGg5wTLaXQ4GYzby8VDKZcFhYoutquGJL6BwV4U1D",
  "key33": "4e2tTuvJTgKjx9kutVwhfEUU3S2WCKZNrg6QjFLZuAEyRjcuV1HkcxQRmbdAz9G4YZtWx7mck654FDviLndzGpzw",
  "key34": "6ejgZRekYnD22885Ei3XVTrdT26ErikESdv3BFtavGzjeXnsbMuBzWnFhB5KGBnM2FnjkPggShMpr8u36JPhVTP",
  "key35": "4BygNXi8zRkxULtZrmRK3RfZXobbtWaTwmNiimuccCp8VVmNkj2WWZf18NpazzL2bLXzQMAzx2AecRbbEVH4ENns",
  "key36": "2ndp2QDcxJNvNeJ3UTazyhjYmJ4FUW98P3tzMgeswDLekcr6q2TTnhJRb7RdD8wLPkzNvDNAtrTBh1ETE7N44y7u",
  "key37": "3epHtZZqirw3pgD4JakkowWumy7UbBzhJbwg4nsZhVDKdgUsGEjpgQSsAH31TcbiAc1uX1rssGjnpAgRCcQjErLN"
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
