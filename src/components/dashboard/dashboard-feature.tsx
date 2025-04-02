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
    "4v5HPwQv6Tn4fVjTzMinRzvzq72ghF6VJo5mQouw8jSFTGSaY8eQCayXsEd5hpqR2tv34RKWTq82uSX5Dt2XPnHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KPxbDZePkCnYew3yLGofWPVJ4rAhuVcd1FRaC7sakDiEBDmW1vuGjK1FVienrByLTnxSJS3rULg1h5rnHCawivU",
  "key1": "2ksk4xuifncHsFnJHQqKiiAt5sW6MYXSApFUswPt9z1o3iJcdWgWBwGBg8J6vd95Ge3sdR3cjrRRCcHaDwAEqAU5",
  "key2": "2SgfWDxhhmZkgfw1s3jneUtF8PWw3e5notEK3Ty6XV5nn1Zc5jhnvNP5iTKB2MuuVbuxnrkmoRRPR6BDznMadrre",
  "key3": "2eMAFEGwHuysjBiezBRKMYDrBPZr7mMcQAvGXTeZPHykiHY1rkUocm9UyWrrVcWyj2QKVqeRV6LaNX4AGqcyUPEn",
  "key4": "4yF4BGbrx4hdnpD18rNMsUv1LDD9CvrhNagCQkByRsY4joZgJ2pFDjHVNBiMahdgyvTpyqPmURqwRemmen73g7Xr",
  "key5": "KQbKxnJnfwPZLDg8k3mnPPPQrQzvioWGjWA7FYyBGFjigLRMYJgPJNcKj9dRLyunpdAKAUwjf7YpQ6vCTEro6ry",
  "key6": "3wyWR9s8oUgt4TTT7b9n3Rz8Ei7oRhCVgkZxmDrfTPF8bnX1pCZBKvfPMhpGdDkJYyrjDArrV31sbPKBe7CAHkao",
  "key7": "4d9Mk7f6YSURY5CSQDn4HaoMfp1T4nFXYzUzPxMW2DUzQJMHNpTjcKm8WEZjsQfN4UM9Hy31ftaXfDE4AxtCkjvR",
  "key8": "3ax9Ko9VQe1kBfNNh3uopNXEtV9RQX5J27B9ki9NJ4UdPQoQf9ZnQqgE7S4DpbKd48NWq5jiB2P4FprboJ95zJsc",
  "key9": "3zRpV1diJsYZyDdnZGiK31NhtVgKi5xodSbHNsDtcEQSoJexC9nnQgcXPxWQJeYGkvWBgTe9ZccuWpioTYTrvn9H",
  "key10": "4QeoDajEVDaXfKeyaC1vLVREYMq3uPhJjijSshLa9dcF3HrSRrM3VYfufgXH6K6H4mMAHuKGNwafFBqH5BcWRze6",
  "key11": "E3vjWYU4b23LVKBdtjZzZowfS8ZSK3NvCHXvjbCj7kazcgnLuFEdcSkB8w3x3gHhSM5emA1PUZynpySae7fWUEy",
  "key12": "4tuSVNuvvgrWqKcmAc8JcjBgdFvHGuHG9DxMaTJ6DV94iUfFpntuyjyaoLMLVUZPXMnrzVsy3cHnxWy6LFPPvpSK",
  "key13": "5K7KEJjbt963hV32kL3tNZi1yN76WsLBPhkJwvkThrqBGUN8x642MsrWjy2pkFMesgyupTRKKMkRZcNLNe8CL52p",
  "key14": "56heGGfGma9C6cUswsdtjKSS2qsjtq2bTALwBn6DMxifWEUMYQNTFsCqtqwzWTMQKjYStv5Xie53MXbr9fkLtAmP",
  "key15": "5HQH2bLo4FiijENMs3KnLe7T1aoqcr7WDNFvdWjmkvT7K9ibsKALqxBF4Co5HGx2pCcXhxkHs7q9WF4rHtJXqt2g",
  "key16": "2ozTQ5wYqE8BnpUGfqt51b6VHxW9F46nBZfure7m4yJUydo6f11Ejqn1GtPW2nRqJ8LdZc7VeveteQBqF3c5AtVE",
  "key17": "4As7wL5H9bCoappdS7XiNQP2VDaAtAQdGe9EjtX6S1wJ93xHRkTdUYLatKP2PdtcvoLH7J4uqLbEoDQkU1W5GKrm",
  "key18": "45RULEwtkYawoZWECLdtroEMyaX4T1pVJD4SZL4wGrVn8XpnG9Moq9xAL2J4vbRWsBw46EqcVkUHkuqbuz5YnUA1",
  "key19": "5cVTwYzMzXwTTwcdoSUWaFkJbmtsCx2JC7FmdfLQRZwL5SKvtSajScceJNjhqBMXTYMRfGBX1mxuNXsRo5pvSqUp",
  "key20": "3KiYAj6v8Pi1Hw7JU4aRCpdUMtJA3FK9BDfvyGt26sFxyeGpNV919NsYa7TnVZVaCZ9JzRWCMbiKhozC3eAo3KVW",
  "key21": "17kQQeNy7eD65KLtBJuwMkadA7bXZhFL19QTZJQF7FX92zEakvphWuaW3UmhFfjnDpBmyZdqV6sug3fdxS9ZWyb",
  "key22": "3H2mu26P72cNZjQrHJY8meFNGntbMBWU1s9GQUDkWSP2yzhQ1KK7RQ5My9qGn7nGNP3JZo5CwU8Q1CMbrkm733pz",
  "key23": "2c6gdiLshKVqzTipTWNZVSAKruDyDTUL6tEsqNi8BQdRM2ir79HSe1iZdk5zqGTHwbtnDohfG8B3a2h5UYku1SfF",
  "key24": "5cutYNQDUXP77a84jFb5UdC6MZBtYbjUBU4PysYG7CH2LiCafi2nBZki43Qf7dxgjGBCANwn9CRVMiAfVvMvHj8d",
  "key25": "4wQRup9xZstmsA4NQnCAZgjr2RtiVF44R2U4Yqtf3vrkLXhQjGB1yScWkjw4mbd1EQG2RcjKRNpbe7w1NhqYjsSo",
  "key26": "24QCcogNx7UN6z9Y7UdBfMoTSj4DzMRP4T9v7BuE61gAWyCUbSFCTjaxyMWPwHSPTeZ6CnUtCXmGXKEWRyGDYWUX",
  "key27": "2oaDfCdA77pUuRpyWQ5EKXkpHxHag7vps2GrqdQEaFcbJgArKd3biV7QyfMnRvPGynAhh8TZCp3V3rc4MMNoGHee",
  "key28": "zpCYEH8ijEbU3dEM2BYqfnss91wfM9fL6nQzmirgnZoYu364KPg2471n1U7NnF684951K3pgpx5jdKNpQnvCTVh",
  "key29": "2JTiE56a72qYjnufwVxPzHzsrnTDRm7cxaHVokdiJtq2VLDBtJN92TzqQVCq4zbu1jhYPSjowgYyBkGWwhJoqJ7H",
  "key30": "4BX5FZC2i8vCm4dT4xScqwr1bB2c1ah4qkGLNuvnvdHwqxuZ2SCLdVqaHCzdfTP6emvabE3Y9JAs2bgoZ1M2x1zK",
  "key31": "4hGpZ1Aq5awvvmpVv9e4Ppx9jjdmo7peLf5m6vZmoUSPp8pXSXoFMNXbPpzP4tcSf4iJmiz26Da6WQBSMbaKNQRT",
  "key32": "5dFkcpQfz7DnWVrS5AFX6y49Tk83vbGojUj6iJSk7vZd7aDYsd4yy6ku94zJExExMqv47SyHUiRgvXKdEJXdGtBD",
  "key33": "LYTd272DAGGwE16r82yh6hEuEuKT8grAEPHh1c1YETvua7oopcMnpW7fHwKEFeR4Rcc2NqMDBycxAgttoLfsbtD",
  "key34": "3SQwogRKv2PW17rTnPzhP5K1e69XY2JFnB4tADb5he2kfQdSjMTksZA2K1WTAHpXFZf9ygDxTC7r39XfnozwWvkq",
  "key35": "2DTPdyd9CBMy8uyxipNFypGouqjgXv7pkrpDohJijHdeY2FMVz75TtWZR9vmS4De6Fi57j2gpEQHj6bCg5c6ojiG",
  "key36": "2NANnC4o8xS4a7q2JqsRr1WG5zwL4t4KCMZcMUBiKon3BM4oYawAML6QyUiE5uboH4mVX3yGhUyUFBFdbPVUVDUv",
  "key37": "4unD1XrHQZfaaMTmLwcpWLxV6Lm61WN1pM7LBpw42FV3dEbRMeU6QrLSEQnojtihSwEWPVR5eJD5s8mUbvM4ZVJ9",
  "key38": "4ahKbrWSz5Zkf2t9qwuyFsZgXKLUWJPuSAUvp7NKfUvxvdyLPPmMGGvPsjxXJxrbWs14f66r4yD9w5FsgttachRG",
  "key39": "hQwsDFVHUeA353spvi8vWz3HJBg8LQCoSZjwnAR7mHfMoD3W7sP23wgaYB4TBdQrGSQ56ydHR4PRKPyUFw5N4bi",
  "key40": "4WsC4K7gxBT5Qt7WuLpaxWfcAWVPRDXNMBYSquQjitEEaBk3rT6MskBjdPmCVwYsgC54Yoj1ixnGRnQyZhZyWqz5",
  "key41": "5gJRYY8Dujjt7K5TwiaanM5jHGPRXB6VN3Wr9BTSVfYYFMY9jDwfKVJtgesRsTvbydc9LXJKkV1e8XKuVC2UeVLz",
  "key42": "2qpz1FVhQFMMa7i9KKFN1hjxcUEoLbYqeMcqQdFHBkajKy6hJ1ZPmD7ZyiQmpniaBpQctF3VB7e9oEmrq5GMWEt7",
  "key43": "3PwYXdLWmokvY7WPxfqzn6ZbYk7hNJieWD7trJUTBGTWVj7geYu9VNNbwWEicDmyBs7Y5EaKdsnDefLPHMagSrdW",
  "key44": "5cUMEzVZ8PeSwhpNrzaPyj5G4Y5hrMbzePxLXyLNFLbcPv84RvHiQhgLhNDYVzxDk7QQpEmeYsZzs1n5Tgf7R4k7",
  "key45": "3HpSSeMgaK82ZqNTvb1iNB29pyBurvv4aDZmjxUtK1oLhXTuucyaizE4CQTgE7Zs3C4bVPn674sMCTyozd5ZQ1wj",
  "key46": "3vrFwgsFkw3gQgA3wRy5fpeZ1NQGcYkcz3Bh9VaKbejPT2yuqikqjYs2juhRbvBtitAW5RiMmmMAKTPcDhNhBfXr",
  "key47": "3MUpw85tBW5GFhpFNFRKp7ExmNtmk4dQwetGrBoHwahyXtJjir4iYbQSDqfwDUkmrfxEPkRZPHc9KfxEPeaX5u3Y",
  "key48": "5KKvgL18kLaqCpqwpq4UmquJJjdTLSGVQCtyFjx6tNPW79Y3Qs1vzkLbt8GGTuiUrido9ghdjNU7aLawMJV9Wx8Q",
  "key49": "LUFFbUbJLAemWPw5XoJwxyc5Hxmo7mA1kPanoMknvgySSooLBcdce5CryPoHkDFtdAoTVSWoorUKr43euN6M1AR"
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
