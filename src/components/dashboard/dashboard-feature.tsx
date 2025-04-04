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
    "Wq6BAqWrDJTAkH1wFjaiEnsvuxFGbG5X98oLDrNCaQkGJ1RqygEoSwZK6B1yosF1gMjwuoNFNLEMoz55ne43V5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HHeVGPAytrbispTAySdSiAFQx2SSFbvym22KVuEfGfEHD7YAxTvYQk6hn8cb97p6qpEM29z8aDwUNnJkqvtmyux",
  "key1": "2VWTbGHtXsNKtf5nddzzfdvGVgJqsoE23tPmRH6HD2fWHEgZWwfH8GHxr39kTwf3sKigbdhPRJ1V6RobLtJF4qSh",
  "key2": "X6NW9oJmYFAEEz1nUKCF3uRQXi7oiox3gKykPt7ytx4P1dgwSGJ2eVF15LvRYq88hzgS6iMS1yHSR5ysMwtkhzJ",
  "key3": "4sokG7cXvtF2PqZwVf5BDUJqmVMQhpoYFKZQ8GqwqRKZEDQg5EQSpHCCPaSCgSo5erYELLaN49VUDwBPguAPqRdC",
  "key4": "4TFkA984iMRxx1e2Fb6PfmMnC5K1KB2hU4AwCdi56jEyFkqBtxuF8MTnujg97GGD7H2YR3zVPQSTfsWj7bRV3Bfc",
  "key5": "4WTibVNM7q64gv99kpaLLCHTyojS2365M1MAw3GBNhCghfcTEdKzJxEEWpvjD47XaNz2sMQC3iDyaejYcTjpFNq2",
  "key6": "2cLaVCsFTycGKoGXJmVTpDEktgpBmK6ModMgEedjBoTnHdSCqutMSh9vmqdZQjBKmzMWyzBNAhdRb54Kzzbm9Nrc",
  "key7": "5pWaT7jDLyxADZcSvAEnWT4ZCtZ1AjoSqHp5wNEMgPSmTA8sLg58LJ19AKNbSLJ5smJkSuzn4sXk1kCVMqXqeKZy",
  "key8": "2n9snk1XWWCJocRwZsfkcMKUDAs6EJJouJo5wjxbZamkWswGEHnHDBtohWuxBT47ZdiY298LpepcE7vVhocrLiZs",
  "key9": "2YkRtshpoVwKwsZ79zLWrE5aKEo86e4hZ8QbfvLRDYBurkd4uCLPNJKoHDRpyvFXyAoYdchGejfuWcs6hrk4PWd4",
  "key10": "qHwnZAEEhuwBGg81ApWnBuPofwMQfsiPGs5SiEGHVKTsymvaMPJHucMzXZX1HzxqRbdWrn6poq3fFvM2GjdfD3U",
  "key11": "2ffBEBQ9Bdii1gcmnYtgw9PXpec1dJVBXEoggn5aMChdC8my1SBhYQCqNjQbVh8NntsxwW2AfVdDvnEui83VuD72",
  "key12": "66z2UgGMHb9vosic7mxwavnVuHFJ9TchQyr5VyriGoVmRNGTyX9MN2Rz7sNkFgrZ8xaQBCNmopDeozEggvAYtDHp",
  "key13": "4bgf3dftnn48kMVzXkhnMvMpS2adBWPdJJWKcyoqN2ZiaYWCjYsX9yHdGp4NcdgukFRUGE2p4FfAuXbvq1CGaeLh",
  "key14": "2kvtFpfxjdxemRrmM2ELaphPR3WRN3dLgeJcZd4y79sYSQz9hg3t2ht7adB9xeLF9SkgFCzefoBTCqEA8Yecj6gy",
  "key15": "3GZ3Y8jG5Fa6XThU72XHLUUjxQ5MpK6Zeg3zu5vLHk6nfGG7GJx34zVwky5xtkSxoHZBDfd1JUa8JohmGBFHGd5Y",
  "key16": "3fJgojsMea4DNYBkWmmaBDrhoXQy7EAcsGBknfo8Riims5hAt3Zn63qujECZttSyR4KYMP6NXKSD87jytYvcJJrw",
  "key17": "4f49Vw2J6285foB34dt6DL6kciWb1CQtvk7CmNxaV46FftpnqM4UqCDDm4SJuyTnh6KigiuoYbJNFztCHWzgMFvT",
  "key18": "5yh1VbY3rAGKktadrsysBiysFBXd4DnBZvVQus1HupvTcPwdYjG2m63tJKpHGphdL9sycVCvqHi1b431B94wxZmZ",
  "key19": "27GxECr9g7Z5ouiCv34Gnb95NarLSJW1EXo9BjTSF5wCypujb4dCnKinobBYxrGWD8PXnQ3qWtobNgD634cMhtD1",
  "key20": "25wTezW5jax9ZDwYZ5sESegMWqQM9GfbdrGFUW3rJCsmJnogaJMurMbdnKX75TyNLzdiCDJtBJZX86uT8WYZS7Pa",
  "key21": "2SQmQDLQGWaYr5nDRFpaPsALxTw9oC9m94teu5UW5SnLu3CMnQCvHXe3tuJiB52DTs7hk1NfKK4fhntiZFkNeuRB",
  "key22": "5N57Zf7mdp48TwauGxkfPS8ZDptKKFhbKjyTwuF5CSocYg1KzEqkJHuBMUXTipdrfmMZs6AqvfW5c4WHi2ssdFz2",
  "key23": "2fzx5wbNPMZnwvQVqgUvqj9vR6Uq1c2tF43P7YMKDaxvgsoU1XDDvNky6DQhmCdPfE2AHxobzv6n7fxXZdke9Xa4",
  "key24": "3dbkK9LS8Z5DFBZZ38G2YE9P9bQzjFpZaJCTzQTsSbUUTk7UJFzCKkGiqgSsaoDdi2MFM6jxt6nXAFqSPZrT5fa5",
  "key25": "3trhutQpHFbNsAGUe5Ag7TqeH3ZgCqDq4MegYskZLeNgWyvDRaXcRxya4YGhqzdaF3AUY5XiAnJ5T6qqYqdxjArD",
  "key26": "3PhmKopJqkSVCR5mnGs8DcW8JNUJ1Wdrrj4azcANYv3s1Q5Q7vS2QsmAFF8GBYmkL97qPu3keqkRHiq2E5z8R9Vn",
  "key27": "5Uxf8xDJYA4VkusmKDLCwMEz5Fgp5E9JVy8TirUFkWsac4Zc3iaaEhTECJsbsJP35Tda5QBKe1MBR6yaTfjDh8cP",
  "key28": "4DaMkd2LXpZF5fH5AyVXfNAcDrofiZ6tPzmne5qx9UxvMfHpmHd9ZSyJYG5v3Dxnmk8TjWPeCNQCoBvUiM8snKZS",
  "key29": "uYmCGqdK6ZRP1Xi8u9gENaDTsK5byNnN4AXojXMybUkFbUdxK6P3zkzTPaEBiQvmwbJdUXtECK2ZRuRDPL2HgC9",
  "key30": "4oEqB6VmMuQstEoA33ApgWz5TKU4B4iLZHrmtTJ5qUXnSEkzPA8G5Hv3GiomgV5dxshxrzuiyZa33AeYxUfSGQuN",
  "key31": "3A7JebCBaFU1bX4CskKL1sNABqta7MZaAgW5DxoXnnavqVraU1tPErpZxgiPvRCiAFbLWZDLxEKKCeFRaEsiKGRi",
  "key32": "3asNGvFmeC9CuGisVuFkHaYZiSYaC4uwapjYZXAAiAMtCvYjpbshDVp8ugYcJnoddmvm6GtBxfPtN66x4S4UwXmG"
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
