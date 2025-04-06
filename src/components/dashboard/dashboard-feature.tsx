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
    "2RmT4i1uXXYWVt1PcsmRbQWZskQysHmroRQu7bL7YLZidyye449M1G1KcpHYGqf2a3rG7ku7f7wERNdccFZ2fxU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25zBZt55q9uqYTkjfNHheTfRLem9XCQRvNhAme3VTYypVu4vBofRKAX7ZJG2RNARZCneRPmkJNT6ipzJLu2Fa9Xs",
  "key1": "3chSGWrmpcZRE7yTnAhgwuBTAiEWZ65KA2gDZNvr15mShT3NpxVR9TqYYK2PLRptkJmTSvFTqwQkwAHCZvRAenoq",
  "key2": "2PDLuM1MAwHn3jqs2ZTe4hoP5kGHY3S8m1T8gPZm76ocHRgqDeTUYk8R3GfozBYdgzepT8uA9rRne9Kh2xwfcFUq",
  "key3": "2hppeSxsFZoP8EgPn5TGbyaZNiQSAqq7qPvbthvcFu6Li8NGEveKv6vYYcW582G2gieDPz5pm9W24chqBPMpkxHJ",
  "key4": "3GuMuwimCMJ6aRDoWJvxJGLZUQU259QPgmv9GQuuDzr1ZP58wuKCvyBYtNPqbaS99rFGyuNe66omfkfpAdyxhdry",
  "key5": "2rxn4M3dFSd1FRdSX1RQoq863C29BNqyGMUqH8w7VMJSkSg4mqYUXc4xZiHG1mszhFFkP4f9FRBjRd6mtTyoVNUX",
  "key6": "4y6eRJTPBUfknkCDmRHN7SJFCUsm4EJMrvpqg2hvfCuuVZioR48aD88fdfgKv3gbLfVsFYGpnomF1GTyNLEip4vp",
  "key7": "65BKwxQfscktoVYZ5P2LJu4ePbWSsXxcDLAjPGigatNY4dHuzJvb3ugPqeQ9yeiU3Z2u5gNwzueNgi86wYsrvrsx",
  "key8": "4dEnkD62PyRDEoqqqmZTVaHux9PtBYy6nqejrN5gnqURvUC6TU6KpD2pDXyaSDUS5M4Cjn7PWLd1fATvWZmqjCMS",
  "key9": "oAf3YhdUNUkPoit4TEvJRwZNeLRNF1kFEtCVpfTvSHi64BePfFqMX1EEVWwMyukjjHLFwuqvukyBMUPcuCEFuPK",
  "key10": "5azzvxr1SDT2BPe1JUjsU8cHd5dLqfVe8CCqE7xggZJK16VyAUqqdAHKGoa7Scp17bxA5MsCXN16scKyxU8QLZGU",
  "key11": "39fH6shTNZTT928r8uNhfVfvrbDFB4e4oZ1csZYMPyFqbSjX62Y4prWacBQuo7A7QArzaW9jwcddvWYjoKaitCye",
  "key12": "39pmzBFa6qXX19YqWfsCJeCMDDbm719wAdV3cL6Jd3WhB5TVZAP76DDoqQ8qjEMvbFbYJR7AhZ22XupcoZYUaogh",
  "key13": "25kYpKjzgrMRao1TVFm2jEhdZUskAkkBrLFrJhUBYuLY3o6TAkqYERX3rRmSLxJXNt2QtZtxBEXS9w4iHnpkjfvR",
  "key14": "3NvS1XTxvBeuvgBwn7xDz5w73aPqCV7Bvv5rz4jGj5BkRu4DY9Rc4piVS6RdKCG1nEWn6DauoWQepyB2akVVZZ27",
  "key15": "3cJyiz1zsSPXmvoSu297FntHTozrQoR2BiADjc4of6a6r4eRiWCTgW29m6P1jBTT1PBGXHrQP49omuoXGpAH3MuC",
  "key16": "3Uyb1wyVVm2PQKEywkDk96SuFgZTVixLR4fY68MYHZifF4CUwnD5vJdZ8P7sDcSZHrTmKjkqmhBNugfXWiPSiMde",
  "key17": "AeYx7nAkdb1NSM4ZwRSinpoXMiAjkGG7gD5y82P5TK5Tfb8HhzscTMWXtCHxs98PQZxqTEDt9AVuHfc7tGUqyWg",
  "key18": "3en5jjpEtU1rC1qDaX6BZwtPREsT4vF4KKgPgmdQ97cwbyd53gw3ik3jXWZjKS37h9nieLcybZeSvUM9qpYNUtY1",
  "key19": "5N8XJ5uz5N22KYFieffsvXCfcpYb2HTw6sPGmEBo2CPhq7KjPszPEsKhMjZpaxmTm3YxJB2dc7sCnHCFQEqBKh4g",
  "key20": "3x5FWwW5dSRYuNYZqsf29bdkVaRJE8NuD9EEdLmf8F9NAsYBnKZGMfvJcioXBkFaCcuYFi4AY6sfKa7KpncrvZoG",
  "key21": "2rXsBJ59QC1NV8ekuxfvz52GBFB6gdDKqJNMEgRQNeWkDrmpJ9gAfsuTAtcMnSc4nggY7HPhiGVzwCUz9cPwJQGo",
  "key22": "4mEADLCrFLdX7z3DioHv7qHZ8mmVDzk4WS4qzqLq3ZkuLaK9KPRbzafp6RkBSG64BfhH17U1XQLgyHc6uwTKf2Ry",
  "key23": "2bGnvyW6Ar8aJ6ppRofEJVgFuywtPUc3rK5kHJtuFSArdLw9zaWtD9HyGDLxKri1iqK5B1jWfJKkH4rmbrUbcrH5",
  "key24": "5DiCAdV9dj6LpnUciaKp2EKL1RZfBWN37tcLN18JuSdvVbSVfEwLPQeTHGLk9pzy7poLf9ZcSGzrBoZGFNzBwTiS",
  "key25": "2kLFfXH5vhubDKX7zc5G3mkF9wUbpUeacqCGbV632zu1joCztBGN6JA23KAZfh8Ut3L4NRQ59JBzkumzq48SsNbt"
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
