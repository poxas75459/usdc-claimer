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
    "4WTXzjGFtw8nqUxMi7JLJmYGS7myJfbnddLuQB1CaNKtYNbv1ZvM9eETLcfTnTwAjzaRrm5bMh4AdnKuLuLujNtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xV338nA4ekfbC4VUdSWGMLbjhPno8BkEFU98QXMDKsTb5ShTVwY3su7ukN5whDWfamrsw6j62wnB2ugmxZg5abM",
  "key1": "4UA4cPv1384pca2Nn2dMbjbWbpkswYyTAEpRhFyq3SdEZJ4Zhe52aMUhFidGf4t4s78RpoPStjWbhzGo3XUAPZ9s",
  "key2": "jQ8LbrAxiLyLuTT6VrrpEZv7WMjRwDfhQ3LGLrg4CTnVJ1aagmHz4Beo31GKZvsFU4NqTWHJhArdSisE3zQ7sDK",
  "key3": "2ew6hWFnSi69en3mMRthzUWDmJTSZgk92qZcYMtsavozXyYoYSW5b4DGpgNNJBZD7Pbb4JQKsbd8Fk5JsCGsGBSH",
  "key4": "rpMp1qPqXFWPfsKN1Z8gFxSn8tsuL3ciyPvNFyrp824awL2UbyqhMLKxYR3HraPGKKF73UHjKmo6w36ZLaF7ejK",
  "key5": "4G3QRYB1F8MbFBEhBdZqCUJ86Er9WsLvCoo1eCPj2rMiX4kZRfwotxh6KYnL9mZVySbGQLtKkycLLqtWguCha4SY",
  "key6": "4UJowFGtFKPtZF8z9kUQWaJ33oqA3NktZpMyxT1XPBXHDsiGtJYv4fj21M14pGLZNpb5cBpS8h6zb8XvFiz5TvrX",
  "key7": "2Z2ZfHBsfuHin8Ych5pQLrMwcpMjdj5nZ6LLzzX3jeWH1my6SwvoA8xA5oMYrNEDw3LA8MsUL9fr8YxBRvwGDT66",
  "key8": "wTug2TQvkH1riyGVTV8iZ5Uh1PSBtXvxN5h98FPGincDvUSnmMfFzfN5kUCRntyUaibyQTTkBujeKdcYgnG2cMZ",
  "key9": "3fbkYJfrV92i6KnVUqbDqWQ5ayZ7PxvUDMVyC42DQPDRQwa2ftyr2PDd29VQYmju5Ru9NtjrL8h6MWDXqYpNidpG",
  "key10": "2ARnaokqxWvhYznqBhcRTKMV2RahuLde1hRaNXk2kkwjRXa9XqmzAWbCXdwMSFdKUQh7LqB92jspX8BrtNrfHSKa",
  "key11": "K5KdMdjjGN7aBrRguGaCe36kLy4nkNY7qPGiooaXssZKa9ab9N7nFaDP3u6zLArBUM54UKggTYHRaezAY6Md4Xo",
  "key12": "5AKTQyP1mN5vxxfuQxpUYKyiMg3jgPcHjqnesQ1Mru1cURATMpaYHU4EyHhXTVkfrXYzQdtzboAH9f4dGDowQev7",
  "key13": "2QmAGMnEfiyMAuN8qc5j1JhkR8KK6VAsjgkmbbS7aWvtWXPZEgsXtTjUm5ysHJudua8FdG29KEw2MTVmnn8ENbY3",
  "key14": "3T1UQorr1scTShMFsGRgz3gwkJbz2EuMJv4wqwoV7GUkPre9HkfjYxswvTKysdYun3TQY841BQb5pHscuBtKQ1g6",
  "key15": "5EN48NWnUgAyYPfGFFxcztFoF6KfqFmMpZKkFtd318pSShjWRptSBUvsfGSofZv4kYgWUMczCxhXwo1RYt7VX12H",
  "key16": "3FGAHQ4uxqq4XTg5mMsugZjUSNUcsZY2X694rVL4YBKWXMMDNtwL1JFp652Xe9Nkf7WAWzP3YveHWakQk8UGfbuH",
  "key17": "2W4R4YFiXd7SLzAWBtpvgn8U2YdHHWK17YrsBRZTYK3mUWa5i1P5QobE1H8kD9cPQqyAX5G1nSR62ADGStFHfRwH",
  "key18": "5h7w48wgWmJaafJKpifeowwuVj27kKCZBTFKF5xjmipwjJkr8xQkb63CigFjvt8KFUr5Ex2HPvyZHEMD7aBxUbLy",
  "key19": "3vcsEkARtJsnCPzBzEPMu4C4JjBZbZuJqkBJ8GS4oraMGU94TyE5nYsgciCcZBj2RUkyFexP6GrNq5SpwezzhcJs",
  "key20": "61kqUiUisz4ofktH6uyL9jwnMyiAWNQr32aHyUaCKNcuGEbJEUEZpWnfBgJqFNqFzwypFsW1GTgGb25Tiz5aZjYV",
  "key21": "2JawBjgvECvS1uiAXCmcfFUirxT9DJEsJJPJjRXV5CNrZs48YtMEQpEQxjQWWpGCns5FHLTv7Fkz3T2ARsszVNNt",
  "key22": "U8JMtZijWkptzGvq9MivGmKuW4DT32AaogdBy7W4fe6czKY7sDBdtp1A5Niy3J61DqRgHs2spLvgGtmxS4gwKQ1",
  "key23": "3WtwgGTrFM56oHK1hJiXjQYeNNuT4D8qQsrGKuoTAabfasEMBq3YDCNdJUjCcuNumKa1emRNFHpHEhdkocRdRt8V",
  "key24": "4BSktZ2zQxfozCA2wxPtDugEYFDSZMjLH2BV7HFrwoprS9aBTeghizV3pTKG1L4gc2H8zunhkYAk8Zr48G8k1ZSq",
  "key25": "1SvyyaUdQ6GBUHiPrBDMJ8d6iqPGjUuTRhsbHD6tChV5ttMyjkR4L3XUbCvxvmU5pV6pK9Wd1KxMeazYHubWeqL",
  "key26": "5WihyiBY7ioQjWnsinifcxoKpZMvE1VJ9JcKu89qQYAnMhnLQP8VVRTBVY4YCkpjak2ercp93j6gEg9AKwc6ib6D",
  "key27": "52AmxEnnjiH46jnj9ZNQiYayeLNyC8BiQuA4ZGrnerpbfj3o7PvHuXhR3dJkGi8S3yiDjQJjGnP8AvggkAv1rJgC",
  "key28": "7yMTisdrgKsjY5Y2KZpN9KpnWhfbZW4Skiqv1cXknhZVLA28ZVDzpGGJWr9ztfYkWA1iQgzxFNUakNodeirajU6",
  "key29": "2RoZQ5whZfsk2Xf1q73YcvxNRRp9ZF4TmtWiQTCvxeUCmEYQtYL1St5RYowHYSAsKMRdoAUrPpaXzEbT8HpkuDvw",
  "key30": "3uVWBerxag3P2zeKAEb7qRpRfr6kZQ1T6VNowCU8X2akuqu7rHSdjmkMxHJTNmi2ajbYPx7T1XizVL4hWjE116zG",
  "key31": "2Xe3cc6GERVYkH5duabNkmrjYiENxGj9hU29QSpC7QHXS1wyj2AbaX9XdMpCXBS1S8QQFAK6ZF18ECyTMFeD6ZP3",
  "key32": "4ygsqAcVSzRAsKHtcxerzMsZGCMZi6kE6EihGxXkUkEMUg526oc2AkCPZUNYGSRuvsuaPDcUBUA5QGbocMXWyadX",
  "key33": "41arX73ZFDzYufPTwzXVWcqMAQErwwqt4cGDc2j3VjES8oh7QevfSWknXhv22ACkheNeZTF8iv6mBqmZ5i3i8h4R",
  "key34": "ZCnspxBmYtyNCjxtyTL7bVjGGXK8pg9AmPRZxdzVqZ1WMNyj2FLorUyfBBbCULLAX6jzcUyhCtmpRFunuop2xbi",
  "key35": "5BKr1fFEeqYMhZr7bdgz3BNjjDFEtA4FBiDbzqZQ2xR56s1WymqA7m6ETLw3qxwD3K6N4YZzGzaxMsm8arGDQVZY",
  "key36": "2EuapjzbFVKmdspdbGzDRrjb99c666QwpQwKt5uiXJ6MteTWgch1sSe6edPjBkN7ytDTbnmXyHiw8PP2gKyD6Mqz",
  "key37": "4wdyEyXWiG9L32oexz33p8ZBKrtHc4KhFvEPHQCgVjsYEYK9UU2SLuzCUkVyWZ9C7crXzzXH5tpHtCoVAPVwVkNR",
  "key38": "m59F6DfSLkffGEx2iCS2o8znxGd3K4ipHVxGW31DwaZXCucik73szSQzjGPRdJZSx2cdGGyuoV6GAftjL9fq7aQ",
  "key39": "2fyhWeMJ74eUXjAnipTvoB1gcpgLCpLQg9a1aSUa2uZA4NE8WVqcGT6fUn8zyTeoQLohS55X7rhRcQX1j8SPnqav",
  "key40": "27P5ajfZKH7SKK4KDSNDLUWxNt32A3d8Tg4YqUxeL6K71SBgYNhWnct8kk31uptKzJo5c3qc5WBvL18GfxxjxArD",
  "key41": "39Grqumo1hhYVxqAzRweYA6WQasWQBMZUbZ8nxt1hdJvE15WDti2PqsE1vdPVDLkNEhuNVbcwokX67YUdfB9FZG3",
  "key42": "5hyBaFrMR2WofKd3zkbo9dPmEXRFGbK9RcBAdwSADmhcVXeKr1QKdfWS596sAKiX3A3NyBG6rh7EsvWJcNNrVhCT",
  "key43": "5ZAj4ce8jxEeyeC7KUBahqVUXPKcgFC1tYNLzK7nJr748XW2EaDbwK2dkgR5xa7RY26uatkjj1ywXJSrdDZCbQQx",
  "key44": "5Vk3Skr29jujnyhU2uTbKYPHyFvrpsHsBrPuz7PLNXLbHyVnLBQNWXp8MDH27Cc8y6BhyXSSAxaBwN45yRgeNBiY"
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
