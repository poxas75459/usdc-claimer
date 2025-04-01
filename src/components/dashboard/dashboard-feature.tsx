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
    "XZbUrW2Uwj532hJG9rJRvHxdTqEgNjTPPexeZi3UHRtFWTag59Z8fe7634F3qk3f83sBCNe9LzhZpzgYyiPxsDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTyzWCeGvLXWeRQA5AAYunAYDuFJpnZc6so6SsWTCh41kwY1hHou6s8viPU7pyHZS5TjjPV1bRL1MsQnxThmnF8",
  "key1": "2LfETasEriPB1SNNSEHQ1UvALVGwWbwzVWRtqtz2QYC5Kj47VmzQrkvoRtfkgZ7rRRZcJvM6oVH3ZxCCvih5z7yt",
  "key2": "5waodLNn1CiTTqvaabpz8bs74mGHogxY2Nm5CPJwqGSff8j5sYophjrdWLQN1PoKYrorQNLkQatqykdk7kwshdur",
  "key3": "5Nfnja5rtwTRcUTRm21s1vuyKxfWrgoxAP2kvfCm1mZ7x7ubGnkmUYxcce2szDXZMPgKiwSVGwX7LeejBZf2kj5X",
  "key4": "2CQT14quTWgbYcYZhoXts3rTQjfMkp3L7duUo9c5VFX8SswoZeeA5dCwEtQq7VULSWVwtvtTjpb9ic94qfzr5RxG",
  "key5": "4n7d98t8Pfkn3BMqmN5rkY1KFZerKkdmk1XiBdx7G4HSBUtvFWKAHQcvEKKaW5w768eND2HFoXkmvrQfMdbbUFeQ",
  "key6": "ZeGFY57Z3DeeZGw8FY9UVwk3VXfHnLwbVpSBdJE711FfCpupyEDBepAoAMkA1SQgZPg2xDg2GSuKPMWMgBwkjVL",
  "key7": "2VdxshvcozAwPqbQhcSNj4V8ymNFkfLx8EY8NETzyP4dc3ZUoBRXE6ctQLCCYkF3zH1SeudAdXbtr1e4L7geBT2p",
  "key8": "5TR4jFVScKRB2gx1j6HeZdzDA7L2nGd1PMSjMxvrf9ZLpXg9jFmzRAUL59hzqkYVKbQhyS4DSwjP2FYRcYCbErsb",
  "key9": "KhLnP7V1jFEHAPJBmaMSU7JrqhGDKWBwnvtHNR1eK66oBCM4MqrTHCkN9Yx87ChNsZHs3YADHKKUvyGRnF2bFi1",
  "key10": "yw3HcZuCeZ7eRcYpSLH9WunmwjUB1TsMHDbNTd1SsVHFc6btiZv3mEGWYk3xcPsiz2QEvgBkivrkXsARK2AC6L5",
  "key11": "5qumDHG46M5nUe8CvwAb9dHK71jEPCDfLq9nvH9rh47wMLk6rtXPhUvRce4ivx3icJtnLzG32fVSfFwcyCAA1aEw",
  "key12": "3CXxhG6cyU5ic9eCVaaWfi98iiBHzoGHKdtsWRBzb2yHUsMfBJgRWfJe5wuAqTUM9epBQoD4ZsDxd3CD11ZMRzFW",
  "key13": "62j3d5xQ3FXcLDwv3HWASqqrLUGPiRTGLZ9SEEMWJqJMEgEjxUZxibZn8N6gpbTyENJp2tsBYhjpdES3HStb83Qe",
  "key14": "4RY8xrA9fKmgUp53tuR3EFqSHuMSvX5jP2qk4Y7GTtuGGcmLhRaL1DEsZZhLPg2pcoubkAU5igbH8jkCsZ8pJS62",
  "key15": "6qDPd8chjde3Y29Ez2BDanG9BdM5qJEE4nA781hd8716rs1zkWjdVrTSHaLmnC4dJgWdJqXSiNBKNkstVgwBGCw",
  "key16": "4BxyUyRLugxsPtjgzQVKEFDiLFzTdopRhanc8i2ic6Bf4YuZANhsB4uLpHWjkSffcU7p4xEQ3UFESWDuAWHo5H8r",
  "key17": "4czQZfinqwJkKUSXsR1c1bMq2xY2zR9c1qHsRtJMAAMzqvfqMdwguZhNoXxHsDPkyw8jZyazDyz7PoaKkavvqhB",
  "key18": "3yzv4rPxkjAf1vK3rXa2AvHEHxFF74CgpzhZiVAptrnK4iBNF1r84vZWpdB2nPt6kf8XJWsZZuMWvc4duZxoLmkM",
  "key19": "3WRDb3r4vcvDnfWC2spHccZASCcasheW8s7K235wa1vyh5vSL18MYNyE2mKDtwwuFvEytuY6fSkYABJs4iWFRujB",
  "key20": "47mYhZ9jwMGkx4qSbyYXYYMwRJy8gD363y56XGRgXfvo35fiJj3H5KfDCrmHfmmoq78gbnYHTtRb6Qck6Dhhn1AM",
  "key21": "2oPHmnVJm3v4TZ1qN2P8EwJkgQvBEse3vYZZJNMrUTJK285Nrc6hSf2R6Py3Y69uyxSQTnXrqphCd6UU9EeWHjg",
  "key22": "4pY9H79CyKoxuZL3FD8uxnhh4oRZ9KEM3AdwUQi7rno9vccjceZzh4oyArLdXRu2hoG9SoGTDGPQsrdZKmG7EjkD",
  "key23": "5e8iuK3fNikRzi9v2UmC1UCdn7GusNn979x9zLU6qLDPV2ay29BEiFAAN8KqhuQuXor5RcKVxmLYDVbsQ2wjkBVz",
  "key24": "4BhZMLfqR3BRZ5oDKke18mz2iGHqA3qfwXnMiatHZG6Yd47DxhgLfi8Y6YsqW3wk7yeSYZUitc6gbMVrtN3MVZft",
  "key25": "5o8TM7Ng9PT2iGKWp6CuWYXkrmctjBFJZ8Rkgq6aposvhtaYwCA9NnYQSX4cuAD5QXVyNVV2Zm6a1fW3jytbQPTj",
  "key26": "5oVp3kwcMetk8ouyHjZ7YH1MZv18gLtZKqtcTruZX99i88VRXpRUjkWJTBggiyYvKEm64twNjtrbvpS62QUZXdw8",
  "key27": "3exFuqp7ZS7LNnrS3WP9gywnsYAY41dYvEMKXHEqrMCCkCY3mt7Fzj77o9y73XnkheKwQrHE9mkxPo9B1AJrnyZ5",
  "key28": "4ai8tJAT47kwitA46gv6D6k1ESThmh92gTQCmDkp926GxnSjnayB5RaiLhZyLNt1B3Kr4PnJ4EBXtD1czFoCFpxc",
  "key29": "SFoD9UtXhsTJeDkbCkfNwnjrS2kYZZTJHj8ZPdM4ftEpT69iQCW1TEeBtefMZTSLF3npyv1y9u7GzoHRBj5Mmgf",
  "key30": "5PdmETbjqYHG31M1LKZ4epxzpptx3QgmoJQsz8Q9LXiiVTvxnj6iFzRXziyq1MejhnLFhFWaiMT6XR3cAZBGsvZQ",
  "key31": "DboUUmVqRkdVXRd2b1zX7SaSMC6eNDrSkpLsLvdYSY9j7E6CuuCwqXtVhodhp8HzumZLKG9HzF3C3KmARbga4Vt",
  "key32": "4oT5EkmGbxRHenDeKhMMYdE1qGBJW1At8GsohgCBvL2P5Q2MRc3cjKi3EQEbt2Jtu7wbV6dkL4io3CzePWEA5HnW",
  "key33": "tn5YtdJNTq4uZrCu3nS9sUHELTB4eHtpWAENeJaCZa8sapahhjWs1M3z1S7SZAFRFEGQaSntBiWcGrUjicKnKjg",
  "key34": "5D48N5S4EhMKcQh8GnztqVCEG7RbqervdK5joYGhWw742d1FM2TW2hjphtHFfwTtK1B8hVFk6MCogDXo5CnzbpQT",
  "key35": "Nxrz8kxtJpENDjBhQtthr9GWDEdwpR78JE7KEXAsfBAUGJfTMyE2d9kL9qZ2TyD5fv8XdkaQxkMWsqBheHxjiqe",
  "key36": "4Wd4V6mTBZTkHyfb5BViYHBeP2c1doKWCKteeZojafNtYB2vqozZEozX2J2XWnK1NNYvrmD21MNZkH4etgsWA7Zy",
  "key37": "s1DkQHWaN2wzrY6c6bycwZpC8Lk5ziwEzzTyreNa9tsAKncsy4qLweRjJCyjbUEVpDPxSF2wN4XMPgUNT4NXLLG"
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
