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
    "kiJqcnNLYS9xCwLNnZgtWDz9Titx3GXST4jrYcLEkox9BSJsWWiega8By1BXWUTDRvgaBNZNQ8bHFS1xcZ5VdsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NKBD8GufKQhRUvBvZxnCHYuhb466HcVjPKsETDtWmQbqavE4FChUmyqvCEvhEZyhPX77TzWdSghd5JdPL56kktB",
  "key1": "i9MSU8JebMNauwa3bHWQer8ghGQEq76PRNGHkgnNz2g5jNUekLfWGMZoXHMUhyTTASzqPDJMbDbUS6qEhPaA8xM",
  "key2": "YcDU3Hxsmm26spkrufzrQG7XMXiLqv1ZbgtpmhrbJYZLLeDbtwPdKHGF7qak6xDY2szHU9AyTBtnNS1tj5bo3SF",
  "key3": "yBBU73edXPYK5jtMFjzVK3wYc6Mqoj21p9csfLdPfFvgY2GmbPd9MHgFhyPBV8vrf312rr1QSBDV7hsUreFwzih",
  "key4": "FNRqDDRzHPinckWqWkUPy7zZEeYfENuSoTsMRJd68yYpGm5rXGrnCDKU4Ryc7mtNrMm7haeT3Kw1huj2P1o61tc",
  "key5": "2HGBK4453HFtYQf5ojCU8mbm21cQGjkSK89nqiy9DsQ9xy6aLTgdgJdSsmRQvotLaPMaZ4EZEtVAtcyK6Yn8NrVu",
  "key6": "5fTySNVXvzC5uAqNTqQy2iq5ZYyYX4vRFknyqthFf5MmjpK17LzkCo9eJfU9CnfvCCXKrqVQi8pyfqpEvd5gQv4v",
  "key7": "FznxLu7i5c63d9AjTqHRDbv9dhvuxjT4mwt3y5e3w2rhmWdt29WcCyJTkZkPKmp17jCeECNyehbA5kYsHGWhtRX",
  "key8": "3i2sWztoT1f4wZfrcBbTJPL17eU1nsN3hWJBf6TRtNTKPg8EopnU1JB2f7sod6uSNdiram4FpfbeWqujafksuMog",
  "key9": "5kU9dH2nHCkihuPyY37FaVZtFVohCUemqDbdqhyLmPe6iF2PU7VsXVB1efnsG5bcV5TfdjM2T87NFSi87R2naGe",
  "key10": "5sCxyVc6a32ZqGJshreSgZCavqqkJCXDexq1FV8uAGugundE1buQxDvqvWVw8WTAPfvbQJtsLF9cVWobDXecUHvp",
  "key11": "2pv5Cahmx14ZmB72uDPYkh4BySAPEq38W1smihuNbENJGzkcuHffahmhDJhwY6V3shApH5vpZEkUfz5zngNnCeb3",
  "key12": "3w5NZyEx91o1SUbUc7ETjwb1HSBvJDTtavaq7CjgfQPr7LTppKYAikSGxR2ruijhYvAhRnsxEzucXRM41fwZeUQm",
  "key13": "oSDJ6adsS1rnbTDttG8JruXKSnz7hEYejTkF51Ck9LNMgkJVsrhK4WFQJKhASzC4ZNkoswx6zAbYSfQRkztbuWH",
  "key14": "2Ew8iPWkBgoKmxEoZUEcJzKSdxCTvARhJKyXW8ofAPu5xduDaHBvK7FVce5x9bUK47MhkgoXpvZA1h8c2P1zYNXr",
  "key15": "3E3mTUMzxnyiXgyeZrwJvLdnG4bYA3Yd5Z3tdFBAEmQov56ETYFvPJm7zcohnzUpY6irnnZDwvFcc7JKcWPqs47c",
  "key16": "4z7FRV6cev4v9722ZhgrQR93Tg4LL6y8wQoGKqWEwEgYUcdLU3itgU3Z7YvdwMfSE6NpZzKV94hu25STmwKzApTH",
  "key17": "34vxqbUPNVFnnns5RRH47Q9UA3nZo5mfiDHSdnk2Ar6TExziwsJeraXKDipnjAPXFms6v2HFnmVWWhNHxf7L2ooN",
  "key18": "59DWNWypR9QFbcNYJHHpf2Z9gmyXwE12wiaMNgtb6sZwwP1o5P6AfdmRn3TjJfZA8wAQ7nURaw2X7HyBxRsvdZbT",
  "key19": "3TxCKESkLeerfabmTwf4SsRbS4RmWhJYRyvWU7q7vBgEPzpFsx7AroANv1MxhGvDntvSnAcKnJVthdbRh5i9bmB8",
  "key20": "5YvxEwb1Fgi9zR5JJfL7ubTTEsntnB23uHmo2LWjoBEPbJxf2kjRFvsYnTBF2TVJoJRDrEdXmiV8w5RosqE6r4K9",
  "key21": "5ECVgRVDpR7sWUgGLLTw1wJLLq5NKyxxYvakDDq4Aqnnxwcz41mAC2vvoihJ7ryw5hqkMacPyMZMXR8oMUYwJmV6",
  "key22": "3xvL5ouD84w86MKKcZnua1q7wJ5SKzh5NVWUmPRbug7jvVJictL5rCWXgNKEtimiRKDJyDCpqMbDRv15LaitonW7",
  "key23": "3o187AmQQM5nLaVwJ2LqGnaTLoyWAGS8iukVFwhpQZ4TKUeM4hjzZwtPcV4yYpvmnaQanuyL1ZZ4pbetit54sHEi",
  "key24": "2BJRBnPJK3vzNm4V3JHdJ1tD7HWr4YvJGMSRJvFv2LsfSJFE9XdG88iEx6bahKpRUAfxxryemdUcH7pdYpdtJBWn",
  "key25": "517t3FuD82psmJU8YCLBnKbsJHWUgESvCM66dk7AGzeELoPMMU9ZwUZ2wxiVGFANyciEgXg5AhcxTxSYeJ4Rdq35",
  "key26": "4qv13Nnzx84ttiguBj1tC6wTqjSFKSc2cA5zbPKhSxVVED8fMoNwmy5y4ayfekWQnTbZmJNXNM2CyALZZRH7vghY",
  "key27": "3AnksQBJGnkwg14XZdWfii3Emz5CXHBFvLb9HuatZpLxVG3GTiwBm6XiauzdcqppzN3WZuwHxooXZPd7yvMAvbUd",
  "key28": "58igMJhcCJJQ8YaKXYz27WVe5jFpkcp7QtPTs6bsq6jJBTq9dXXk44YyWKYNhZGQsrHoK4XYvFbzVDGF11NNLHF8",
  "key29": "3yeA51FzLYwnvVAvb5wabXes7HmXpkk7484urApsWayuFmknSjTcJeziUGcEVSQbfkBM7TmVQgK6dt17bikcGudY",
  "key30": "4Teo9km853FbUgLemHjvzsSGvsF18CSJKdj4aN4zdJFR4nHzEa9D3DFSEDxjAdz8XzVFfTFZX1eUy9bEmQSjBUdV",
  "key31": "5u1Xk1PecDxkoEchPDv4tndCgwGZTHePuV1GFKJGwGsTnjT8DWriHaxP66mnZaRCHzfXug38313KZtmBTQ8v226T",
  "key32": "5SfBELaZ6muXXdtM3JYcwRQbC242Yq8PEU6NXvZ7XkafFYET1TMRPWSJYkrWXmV4z4riepoiKFc6tHGAYpK1RGA5",
  "key33": "5XYzJwidRMeW1qa7CQAy1urQTsFC3JzdaUjCyMYfWqT2vhYK3pwDh22wWfEGgKmUHMN2jCwaakQdjNJVaZt7hPcM",
  "key34": "4HpiDaN454KqsV2N6zKS72VoTu5dH1hiQZENRuWqM2jnucJbY1xsSs6erKktmZAJEM7iW1AjGdF3r2JhqHnpVtmk",
  "key35": "5hr3LWXLh4VubBgGspeBkniKEqc7KVcZd3DzTmFRHaoF81RdWYwsRwbh8HTedjCZtwdfsQm1QZPmLPwp577vcPmr",
  "key36": "5kCZ1VyzCAQXhz5MS2jwV4LuBwbWu637xr18xd9ahGcj8YeyAJDGnmwxqauN5DyMnHdKRN5bdj4BKBBnwXwumNAd",
  "key37": "2mG8xLCMzkQTsew7aWfjCQeiVDVCLGjZvKYXz1yhcKsZ74G7ycpXvJQydjchvfHmdK6XprDt11u6UyQw31j1RBYC",
  "key38": "XY2jGWTwhi5DPfNHkfWQrEcmVEBwdqkVir8PkG9WPEya8qdue71559T8Xy6fRWTukJ4cbVcH8mzfJx6Mjyc2aSf",
  "key39": "4nGiQ1YSA95RyzWyrJfF6UpUgvmEMYswJhS17euUceFvT8kKVJcsQXZbEz9gHCsJKWV1Sngj8t75FFATXfwPMzH5",
  "key40": "5MjfqjYh8PiHvohj82JcVcWM1HnU93Nsxkac8HsXa2kaGw23zZozHzoT8KYV1TKp4XcWFV2o4BPZ1HLq1vByF8hY",
  "key41": "cHdjJDLv6oFLGbbrj3Aqtn4ACgQupYJzFLA3ugc1AF9naP8J7XovGYZAwBY1GxD4eHVa1jEwyF5re7W1P6ghW31",
  "key42": "43i8DMmaVDe7wgR4pVn8vLNU79kCPNQze4WeE2EoYXWfoxk9MQX2WEhVPhHLyPwRWf9UG42fVof7eEUzivbiqdsR"
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
