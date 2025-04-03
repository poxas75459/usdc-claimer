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
    "4fUHyFnPsZdQ2LWrmJqvYgkSGzxBFsKBWQZNqmaWb8xfq5rgKYZfGXTC2K9Qt4ea2iejAJVEHrT54hiZr2T3qaHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sQVpGZC43Jvub7aYuhi9BkupeLXGVQmKk5RZQae8CjzEgHsfj9nmigcRvFHpkTBnGV1bDpWWQ934Npfa5hpHiNn",
  "key1": "5CuL8Bpf5HuPLP5UDAyX3aG8ehCqQYrX7ka9x61R8SABfpUK1nsX1MzZH6tF4f2P8xz3pehjRqfarMP9oKDPyYX5",
  "key2": "3D5yZ19iwm8HDjsT53iJuFitWYt62LDhhZCHPhMadnhpioWw7yRjHaQxEkwwFZvYt9kJNpjctVnFaep8oJXvmUoD",
  "key3": "2nnZvsRCQNrMTCeQsxxNUnWrXueZR5Fuo8A9kmZpJER8vZ4pebENN1X9JdG2BWJQ3wZmf95KCc7kofgW4cjMR6hh",
  "key4": "hRH4XA7yKj43MFFLFoTowYG8qefj7iwG4E3NfwYyGG9QFrTSvAC8wRus1fsfsyNJeHGRrqp9LaRSbievemouWF2",
  "key5": "SAYDNTE2jvNZSPAS4sNqhQjMqYBd7uvdRXQ4SetB848Bdesr8bWH2nKkSqWvJQjzo3ZK9iAr2vcufMwEPqK3N6W",
  "key6": "3PN3uW1ab4YwhTYyuvoJYxY2U6JhvqqxoXAaMuBtUkh3xqbiioDejDXAmYSDwwxHq1xp7eEyVBv1WM7QkqW7abhK",
  "key7": "EegpRuAZMMKDyBvrn4TjZacDsvmQ5cGYkMeVKpfcxGr9cHHjHi1dwVRsfDtbsYJgYX8d6AQgV2CmhecTahM4sFo",
  "key8": "55mzN8sQ7xncesDNSsDTuU3CvM9bxpN2h8mQsQYbQn4dnKhSbba8nHsemHTkE762B4VRmybNDHmGbBHn786qjTsF",
  "key9": "4nra3MJp5bUpdJeGdhwkRYYEjieeB3qg9EmyzvvY9kvjj4BBjbm68RULR4yhmf2NhkLhhbVKSnx8cZkBBYzD8dPE",
  "key10": "4DGvRbWFXDHqX16VGUqzitorBuyVQn4M6TAiek26L57vuJiqd38SQHtPMcCL2o8r4jaVWCPbRnkELewx9kbVYBVj",
  "key11": "VBxTrvkuFWUATf7RNzQ6fkE87NLWQP2Lpjnd8uZvduhoEdb1eVp78VPFJwdQxqRntv5LtGazCjmZVyoD51neSoi",
  "key12": "hm5CjvzthdoapfVo321ravH2cLpWudGbPeyeb4bjghSSsYjhMuDmFvR8bP8b5p2UkPwCybgk2Z9oiTAhJshyGdn",
  "key13": "3HKvurz4WNWVgrSpW6Fx6xWvYVKhuSgEWbxwZWWD2ei6qkSE9MdgqzHDLYNphJKixbVznnrJsibnxBqi5evMKAUF",
  "key14": "fGS7tr2qBgZYEpqNSE7nSQ9VNMU7U4QMDcfWHB8Mur434eKC2x2xoaJhhC6ccLYKeJqB4D1f3FBCJ1zcwqZRBvy",
  "key15": "2EkD62PiFBmrMwPxpfjCqKrUNX8R2taU68fiCgE5Wh2kxXwu5JqrhouDPXGwQZw4kfp4qzJiv6fzSk8b25nKQCDG",
  "key16": "2Cqu5GAxG43r5eChe338xR84jr1YCVnhmo7cm29VXVpsihYMj5fUNLbyuuL2xbDMRtRgmYpwparp1QZ4LujH1QEP",
  "key17": "4XZKPcujyN9AAZ2jMvT9xkjUj24FPtWwG8pzRKva5bRDs77L1ZiWay3ocCf1eNZSEPc79znJWSCgXUAfVwidE5Gp",
  "key18": "2ZcxtcjDCyzFyXGLFzugNM4x9g6hobrpDtQ4RyGUvimtkfvDVVApdFBZ2HoDtQSwnK7eJdg62HfHiXaiwQwmbdYb",
  "key19": "34a98rGFTokh35rmUrcBMy8FTumpYSdxriMnHf7N3n8RTgsgAAvXRMPtwir4iyqB3JQZyLQpXj3uRmvysneEJ4KZ",
  "key20": "YWEkPiMd6GmNXU6HGj6qindCAaM1yeaWxVgPfr4HPQoMkPGNq68BWS2S2pQDD3e642KLYu9DnS1CdERZaRGyDam",
  "key21": "3dum5zmRMPhgGnHdhjqz2L5omMWC7zHq5p2NwxSmaqanQCMvokiFGNi1QjMoztR1zUjBEneRzmbukzZZCb48JrCH",
  "key22": "GND1PYWVjSLGKKH5apTG6YGqHPVA5DfsrskXUVetj3eZJwmRVcGLRBLvvTkYTvNeQaQ7E88QYAphoNMomSwEE3W",
  "key23": "2U5zagM3GYxrTyNTWzwEiaGfw6qY8JP7A6oaKgmbAFhDnABNtk9FmBbzjbgTtJ6TJBVe2oG4Njk4njtxdfeDGi6j",
  "key24": "5bPX9bwboZUv5YfbiFgPmL9ZtFSp1pitE9JhFbYVuAA86iF9EBLDtWakfkpQoGjiHxTgdfFQELvnqJXawiNVQvzx",
  "key25": "5DdotZXVQLVhBqHgkL23EDrWMkXPNt9PAnr8YCRxnSVCDhW4YTj24GQz1AWKpNiB2RxNyvfAAewuVPMMZAMyVu7f",
  "key26": "5R6vs99AocLMwj7gHdHFCrd3XDHaqFKC8shknM7YuAwswA7iSxcCSpqZZcAo5MtqcJoNNzt7y1yAsF39BBRKPJEZ",
  "key27": "k2B9JvMnVHDg5wq9giyoBK2DEnCJtd7XVQjmRypFmXxQmmY4pwpg2gzifpCLdNf3y5pM9Qo5EPxGtpr2xN1t8uP",
  "key28": "3g4b4NTVHpy14ymka4D4537oiVJENV66ot9mBLTpjgBNSq35DmrZCWdhRaxSdaM3NsufSkZurXbtRAAvMZDncRuG",
  "key29": "3DCfT4GEcVmD8sP1HHMCRq85aUVH3eSRrNhusKDzrTFWVT99cQtyy8aGNKMCmZHTuSxPBbqZinXX45PbjXM4Xcj1",
  "key30": "cmrYLRjkK9uBE29VU5TE46yWkDMW7gBaGi8jYusU4kRGoz6r77Kko6wmHXLFx38kVBxwrdT5PToUaam9355DzqG"
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
