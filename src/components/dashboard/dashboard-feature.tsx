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
    "5pAyG9NNqjgdLgm4romVL8CyheVn6nbgcX6sRZAYsjPS4i8itBWyS9czd4QijfwPqwctrZ6zEymfswdz8poF9Cvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zMLcw2m9Vt5jX7ZNaPJedbjG8YRP36BQUHf99w8VQvphj28a3uVvHq4sxGpTSSNjqziQicZNv2CtpXRi4qhuqo6",
  "key1": "5YCq8kAmW7TwFyqM2sJcgCYcLNktyUgz3DRXPSDwqXzAiCMHPK9gPsFDy8t2uGW9EvLpgfwjN1X9HX861RrCAzSZ",
  "key2": "HjJjP7xFXtpX28PpU51Ht8CK9rBzaVx4ZFiTsoZKEeRCGz7ShM48eSX1Z9RrZdtFC8S6Y8ij5V636ooNb23owoS",
  "key3": "nFPzEHBsTcoKHysKxPftMvFnyzKsssFj2UM75zax72EvwTPwVUvJNcRw4VkNZ1BTJUw4BvDxg6jWzutVxNbfP4S",
  "key4": "4Kjg5iTvhuqgFTu8vmkiM8a21wmgCf6dZayJEHB26HSRrYBLRCKwnu3nvbxZ9kJYzScwimVqxtgYiMHKzaXa4qAj",
  "key5": "2KFZaaoHwoC3MxJLBs1uifXLFMDYLxGWSWBEmAhPSqqiZhWPdwmJGKnWr5867JWusQxk4ySkvK45sZgQwXNknXQZ",
  "key6": "26bkhCmNpMxfySZUrR8xgNrBWY3DVYxT34CqFsQDX3YBDg6STW2dBAXB23uTcEcniF92rKJi6rKFmsc4uYJFybfW",
  "key7": "2HvYXGu9tZBJxaJNZTYj9AbmyZbepruoGS19i6Fc16UF7vupQnWUccFjScPfSXnygSJMkn9SXorPbyhXCpstyjE4",
  "key8": "4Q56ETPUTt2b88zfa1U3KKzsocEtK4mEaEZ14E1ETpnN5P1e4SPvyYLkgbebEqQKNK8wKHFVEaVkanAB8CSm8KX6",
  "key9": "vcoJNJ49uyEDcErQ5J9ntXMp8QSxSmuFRNPfygJ74KuYaCJcrQapifFxPJNdBCWXHfrWPFtPxhETuwRz6hDNv9x",
  "key10": "2MACnJLs6v1bwmBqgKpv42tVDvadaSsyH8dK8sUmVMU7uFjZE7e6PwZm7ZuJNuY3Fto9vh8M4a4UfVKXXLQUha29",
  "key11": "2VQPuev4ub5kuP1ujMCoYo2LL5BAcBobHiBy827usn9rkNL28Y5sm1vMFPfP5SnZZvcBb51Jx6nQ8bzhhxJ5ZFVZ",
  "key12": "66vwZxDHxQ14eGFxjRyjyF8AYuP85fFwwMaUHrsy5JvmkYXZCPfvmnkp2LkHKA29kRuKzgmpgD5DeUPX8wJ9MzZE",
  "key13": "2Y2bnx3KcjV38w4bLvbp6AMT8KSu73ag8UFaFMc8xKu2xxs9mMfe7Cdrh5PudWmDfg98FaJrsQAgWnN9yBifGwFB",
  "key14": "mvaa2uA4cHJqUNyitL5zTVHFpVPDmodQayXSJHGFRbybc9q23sPi3Z4JTMSmbTGcpxaGgPV51eo15qekg13MqRt",
  "key15": "4LNMhi4a6dbntncaUKrm81DyJkNBtqDNgTUfgbJvtughty7Zx4tF1Jcc1Fx331528JrhoDgkJid8SXTbGe9W7tBh",
  "key16": "5eHSddLGiXosfPuCcsvLNLSFRpG7ikrzeZg7UfeXzAmnMMbi1aoBSu4k2ZisMJeu6HLCeKXp7ukaVc46xmA8iPKL",
  "key17": "3Ms2x9s6HMpQJYvGtiJMcexs7kr6Xx3r2sug7adRZWFPnNtV61hRMZHCcqvPqiWJHw7mPvMkzw2Xskb18XVNo2sr",
  "key18": "X4DoRahB6KagVb4UcrE8Tka4KfAeTQUB2ZVx1JVCwSHawgZkrcmM9bt3sbsjcFDUbJBfTYREZJshbex2efaJ5QY",
  "key19": "3gnZGscUGARudH8XhXe8s7LB2J1zsgrDgYtfYaMsbdyd9tfkUaztYrkCu1ZJWcgTVsQS1f2igFD9Ju9ZrfMDQK7n",
  "key20": "3dAsFjkGgCzLuLSbChppeCAVeCADK2V3kbUvWJ51iQqJNbCYQV8kNpFe3JaEFkKRW4rfHUe57cBAwTeDBpfvQYAd",
  "key21": "6nAkQeowMGHWBR8yUgVpiT36GFABuMPb2VQhuTDNemcfNPCqG2g4cP4JkvXxUnCRDFi2vFHHhnUqtDdh8E7BM1m",
  "key22": "kbKNfNDq91MuHCqEDj1RQYosArE2rdd15wVxV4s2AiuprVPe2gW86RFzaxcruTHt57a1TECh23BekkjjfxqfVRL",
  "key23": "5Vw2C7xJMUr3wTKQZYSVkEHUwix5b5tKxGDhk7PA26o1JTSM2pq71xij6FkzSLmcsnRMYjq7v8fC95sG7u9it8No",
  "key24": "2X33oj8qKAopqYRvJhQbnAuhiFRmTKjJ9yjJVGn6QLYEXjqUu1hPXKerEv9myo4Zq5KuvRPc747vCqtewX2L3CG3",
  "key25": "pfDa7vbHVRMjvYmPwNa1FMGLkYzuvCevS5uaGuu435uYoPeven8mEDEWvNdCEbR8Ymf3yixDfgHMKuK3F3F46mG"
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
