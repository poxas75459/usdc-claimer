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
    "55RmgZMrodnGmXKYWjVVJt7tQf6LQRycwBCDyuez5uW386f5UqoxXErfS4toB1NxTT5UcqKFd82tNzkLAixvcVjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "djTwLvBgSpd94u3F7KJG9SGF1pKzuQqGdnPgYDRWndwy5Qg7eRwDDHxpouVtwpysTGQpxPEtGX9xeSxxxN7czBP",
  "key1": "G42Fs9MsKyetAjnXPou5C2c3aD5CwAqfF4Nvu9asfZfByosjGxPqB67zCSSttbnyvvrFHGdyhb1sWQVCCTXYxgz",
  "key2": "7aBRSSKfcmYkbxcuW5A4xahSYe8o3qrSH58hbyurfF57xCrwuRzSLDU7R6BXEFG7Vhxnrpc2CrrJTwNjtjcBQfZ",
  "key3": "BcaRTFr7Yb1N4DYk3sWy55e6hEZ17aBC9Vj4TpdTBhJe93hLnGYSauthgWZwuKWFxr6j2VGvqdfD3nPnFtAXrEZ",
  "key4": "3UNMQDnrDQe9LQXE6JgrqzjjPuxEmRCnKgj6XWnxEKQ4LRCTjxxCz1BvXPuUbDQrck1xnLbr6w82VSh3WXri3k7Y",
  "key5": "5L2pCzpNuJLRxUzSZuj4cvBNkThDG4cSBfLcT7rDYsjJxD9qNvfXR4p9qGJ2wG5jCZ5J7U4mtbmZ2xFNeZMkuuxX",
  "key6": "UQTXbqKe1Vqws8ophLwXgFP3WwyyTVQncRuhj34jiq92DSKvFXsM5fK1UWVFNUDosRCvE9vFZgRJqzZibuPrGpw",
  "key7": "5jKMpazxjmFfqTGvz4ZNQW36hY6GwGAZ6GGkhjF8ekDSfcMaemyqo8tL48oey2zGdvSYyNRezbgnepFjkfuESsy3",
  "key8": "4r6Ahc3VLk6yp9uzrW9vdrrCQVnj2Y3YuTWMmHV3vQqBBW3c7NkxoitVtLfXjf6p4freUNGsMYHexeAFg1Rrr8Ya",
  "key9": "2iKH4ahpAc9hAVRWrc5dabUPPKvSQXqx8XVE3rFjQjjsBBX9ZQcGp6N8dfmeDaA9jxjnhzdAD9BjCDbYn8VzrciM",
  "key10": "5brGvSf5SBn5HWMCBdX9dFLimhqjEoovfdaiehw1kg9kehG7MuThaEhkudt9hUA7KS8nynHQpKk1FVpVii16rp8A",
  "key11": "Yz4VP414bGersYifwJfWGXg41z1EnaV1trQLDkfQFSXv2YSoiabyTkPBtJ3iwXGQNrwzdMMrqeMf5A9qxtCd9Ce",
  "key12": "3SjAhJgtbXMnozWWrHqECUGyMJyQPa6f1By9SEcL1kEzsVRb96cZ9x9FWgx7fMLDLsAq8fFHarPjNZu26p3yr1yf",
  "key13": "2rL87ijP3nUyquKgNRs99ACQq6KrBp2PmBPCDujtxWzxvqE5BooB1yAio7em4fV98aQSGKsenD2R1gHjdH3YcNwo",
  "key14": "5KKAob3yVEcvDr1iooiW2VHF8dhsdHBeY4o1PvLeTKnnF1zyJHoTgC1NXsG3vgnXgXJePdJaWqwNc83B1R9tdqwX",
  "key15": "5u7dVVpbRiG1HqRAuMa3Hh6mUU22JuCeXDgYfcU25B4fjjLc5VLXeX7dTWEdbXym5w15Lm2ip3daF2G8oimzDNt2",
  "key16": "4etDkVHyKztFUQGx27NazpjXy9NoHtomacin8ZtFW36z9cS7tLkyg5W18mg8M8rgq1DmkRfVrLG7w1AfPpfufaqw",
  "key17": "GUFEmumeGza8u2jv8VCWxRqkowPZ3zUupJSjmBnwEcga4fuiibZFyqSt2NsYeKeWFNW75JekYH7y1fS2kaB4A9f",
  "key18": "41gbQVgeeq1cMmX17WD8bcyJ3vqkccHxKEWTKdWp5KCckCLGAWhEVEj7TW1pzff8AVMw39Z444gxv2H5RH3tAURC",
  "key19": "5zbUKqehXWBP64xKT7XXoat2wk39k3hF8RspX1Z11Fph7iabzaPGDhQjpsV94waorzkXEtzmW9wLcqBFEx7x7yeG",
  "key20": "64dNoeq3rvxzN5ZpZHfKwtP4FR54kAyZkjSk2yFKdjBpDWs5W8Dx9De5EWZAUx9qQnwrmR2qXNucXrKuXRCinvCG",
  "key21": "2B3dKygSt8C4FvZjQJE4ERNJcHxRz9PLpghTvXQxaSThPfaP7jrqD44wi46zuR5SUBUpswivjVMVdpfuHZd1CNxK",
  "key22": "5Zxi5MtEVJNNYNhpxWdm9R8SXVsAn5NgAR7MSpTa21WUsXVqePMZF76z9MkUzT9NdZmqhgU9GfGFXgzbB2HzEEUm",
  "key23": "2xvN1pWqYt57vHkp8LeQRkWzY5bWAZDEKn8vE15ZhsLy3ro77CuQRBQbmYHAE5tQV4iSmeKF8kUrjauKQLqQM2Ku",
  "key24": "5Cv2VqsTatdq6MYxPttybvir5XShgEu75oRDSfidLxiF1u1sJsC6WB3vf2CAkUApaxY28NPthsD8EJDQJhrPC6Z3",
  "key25": "5yfg1UGZKYs7UbTXfiMwMXEq4UJv2ewQRYWeZ6UsJPxAVB1tNsuWVTy44ujJHTuCJ2MfYGTWUZsf7nw3TmHWc9YW",
  "key26": "53bYwwz2gKFp4GQagaVPr9ry9XDyUXPGPJPnRQCKAXhQXx2rSQuws3mSW2FCDtxNmCURLdJv2Z5NhA94YvbtLki7",
  "key27": "4acCy1aEkCj3TRvQSKpQTbThi1uVxRK2KVAcE2QNqtc3jtCBeUrpUuFGCaSmiGZd5XL3BEu6f9ypo6BiSz774SRk",
  "key28": "5zQCR2r1xNves37MVKZJi8iMJqo16i72rXVbuMYKrygYq8MNtMGQ13WBDJZ9TEuJXir8hjTbd2ZGUhM4wL5VhgRx",
  "key29": "3sVDz8tfAbi3USvVLAo7uRjdf3nauaqwsTJT3Hu2nxV35B3BWmF7Tj9wjmhF6KcX4S65P7Di2WoaiDmiEK8W4TPy",
  "key30": "3q1ZwYYZ16wR3CFXgVkQBwmjxeLsvTgEkXxn8mowXy5mAL7WEYUCnUkRWJgESj3jsJVSqMBA5tzsLBTQ3y2HTLYM",
  "key31": "4d4BXA7mcrY8pxWqtaoHkHfNyHyqQNkxCfg9dnpqtoztvBfvAnSnxcEojKouTDMy15kyxULE845ECxJm9UKtAEnn",
  "key32": "KqYfm2h6PxV9n4Tqw8ncJEx4jS1xF9hyKDRU2h7xsgA8eMx6s2f9Pjfu1zz28RuhRdH5ATXuiedTDzrMNbrctgR",
  "key33": "2LuEVvfTjzNUYiCAdoCka2rWk5yaRjs2fxQLLHKCzM3e4H48K46AWvLChEx5zi8ojjcd4stuLZowMzp6FswLQYaG",
  "key34": "29MTV6smrfqoPtYwx3FN2XZtQoETYLeKo7MkBu2KMhSbzhVJSigY9gXYoHcnoobWryfLuwsh2AixSYxqEBX7hR7q",
  "key35": "2cXJ6DUZRHnMEMmjZ4CbB14rGLZJMYC89SoBdGci4LvcVH1sxgvHPwArWZCyeYATv9Jf5eU6WeGz6wgcRXZ5qdiQ",
  "key36": "3SqftFtTYqobcYfzddpqKCGyEtytTExm12JmW1UHS7RBQbSTmAThp9YBYmRfthQEVBw1aULoGCbhaBGCJvFr7QDx",
  "key37": "WVqp7kkqwmc83bc19EQ9qtWxHY4oR2GagU4N52hM7iybCkDYrLS9ZrsRvv77rnKsVwAB6dhab2Jb4yT7CNQbyJS",
  "key38": "5UK2zfXhYiKLPrcijTdnT6SkbP8acTy83V6bTpmRK82dgcW5XwCNJtDLaQmKmcNJHMyNqE58TrShQwgZXkSCcgqG",
  "key39": "2pNsXnWK8UE46x3pAZDoN7gZ9kTzVFAnWvHAmyKVTi53enRXvbYqNPfaGynaKmnvmSYJmbVc4xVHqJyA9JFmoTMw",
  "key40": "2K67yhMPWAa7hFWiAmvwhSaBkuL1ozBBF16ByPdN5WXRqN2yVEURdcVGf9FbUs31BHiZ2cruzGKmNY3cELXFmWeV",
  "key41": "43fYHeTsAogUpTb9UALQKFr83s4uhBJvc17XcrgGXuMoMSTQqiBvW1vhkEiDczKfJ7eWXZ7DiLhj91QpKPwjvT9x",
  "key42": "nAW6mt54CDbUh3mdcYLKAgm4HdxTGDgvY5rVJ12tDUs5THomF3n6psJKoNLtWpnNVweH2LAZDJjvqdjtsCkTjFd",
  "key43": "2eXCFmdefZTDieJwiDgzVuZWpGnhTEtgiYwhMdYjogL3UoiD85VBQMPQfjqjctaZGWeP97gGrnfpt5eC1Q5Y5jtL"
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
