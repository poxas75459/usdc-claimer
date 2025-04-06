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
    "4oHLsGHfSLax7r1rENH3PgKozNa48szvXr61FoykC2bSdw3VmLxXX2rr6v9aJWsfCEK9CvG1fXfjhsZcNxZVxRqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GvSc6hmUFTB5upyRnyGP31GighZoKpzhiLQEUzFwEwTLEWEjCscEyS7634i2KtTiVnE9ybzWFRV848SLioKx8Ye",
  "key1": "2VsxD24jxxfwJ9LU1heTkUCbBUyBt9EtNSQD8zf5qt2oKuffAfSpR8b65JgPCY31gwWFKhkDmFvUBzTa5GLomeDE",
  "key2": "3drQu4hjrgBvRPcXwoxnMXr7z3jkDGCxvrkQVXGXttewVa8T7t6ZuwJq5ckirXG3xhgMTnu6dHSFKdfDYmib8kog",
  "key3": "4ciYhKAtxjMrqdkLifqMNRFVXtVvZZgdr2VcCRW8iRvEpmh5rB896rRB1LdEVWj4bHuR3WWaZKkdtYuQrbpzgguC",
  "key4": "J5kX1JCRNVaNSbvr3dtpYEfM4HAimL9ESpuNnwMW6Z9tXvjkYzSZCvqweJ4WfAXCNBcTjzfJpgb6XyXeUiWmLT1",
  "key5": "RCL4dHT9kCVjqZJxoJdkkTtFCJGxCLBWq9pyS7SGxUvZQ2XrVhtNiFP1yU482zu625PDYHpBX6bijrC5PRdxrhu",
  "key6": "5gcYLgcukRzVE7Br14eGmWDPkKd2NmZto3T4JDv3ySNs5pgbUjwh25vGY7rHRQteYbGGHRp8PqcggNpdrZYuoFVG",
  "key7": "W1t7RNouwasJGyYoGf2CuuGLuhCyfXXFvmvQcdtKcyra6NL8UiEeSAGkBpuhtLYk8X2nejLxeXGEtkvWaSkypGv",
  "key8": "4tpVzZUrW1thsAiuRQXxTKrRs5UD54DSUSRBSsoPaoZzejM5tPExQx6NYGAWqYmfWu8BQhQWVPF6Va4JWrxP3e5Q",
  "key9": "5E8pw6rpiDb84CGHDhk6btiMrQDyDS3MaKKrPkVBAbZpLvrehAGNVGBoDN7kdcfcDLKGB8Q8kdRaGk6Lw8tEWVcn",
  "key10": "5bNhRToioDdRDQEFvDm2Ly3fhNvSAMqnTg6mLsnRTLx9rAYp14AeWe15TEdLi8akbvxUSsWfbFh8mMkHkheMoFMf",
  "key11": "4xbzkyQg9gSseLZLS2QmCkrMkmWp8Fj4hLPGVGKcRns9rCaBm7Cx7fnFwHEeoi4oEm1XUdNtncAmDrBmMYp6sGzw",
  "key12": "2SDZv8cdgjai8HsXaU7j5tH6e9ZPn22hacQSvpLMgYEow1WaXyXeHPLCNKx41bKb6t1M2tymAEk7Z6r7wDcZJuw5",
  "key13": "5uProwEuZeReWzdM9nma97R5eVjAKFD6oQDDb8CUkavCLP5K5gCiLNdPry5Ps3AWzh4zPeaZSSWVT8rj7S7jmbuc",
  "key14": "38kB9UenoebMdoZPGAKkuym9s1u31nAEbYoGyiia2584WfqJdPwb15S5HAgD5m8gqNqtowAdDfWW4RF8VduTJk5W",
  "key15": "214uj6Zpu6S8AB2nnE3wd84a4LJCeHMkdBDYW2EHaGa7ybcdFRgu4eaH76dEKV4gRcpXiFVQDmVB5ePqFrNirPVE",
  "key16": "5VEqNsi7UiFLvmEpSqENUECrahcR4frNCqfG481ogYN4AsTq6Jb4Wo5UodFBKnRth3VZeYnebdVVUsE34fec7jfK",
  "key17": "5zsso27KFRFdkmnroh7nnFXkUbHu6A5yMKshq1wSrZfgtM1vb2Nvkhdz2Rj6opHycgyk14DHbnTefrkeE1NorjiZ",
  "key18": "3BvSxZiwkvFnJyR8NMPXQhYM3oGR4Sxfs3J2dH3BNuSztL6SpmizfrU4FMJgqWVdvB7Az4ZXNwAjvst45Gaa6gUn",
  "key19": "21KHGVJ1C9aTzTqAtvLMFZ3dQFsKbAADTnE5zBnotGjaULSsjsFmZZty7DXrTvUSpyRKyoj5YJarMnu1YcvfmxdU",
  "key20": "2AxM5xKb42bS43KsFiZ8f2kGspNBam2KSA3H4eMSqd1WXANHGbHUGmGKaNtXaX4ikwYjQip8sqya6WXFB9RLwFGk",
  "key21": "3a5t687LRLAgTqUG5X99KuxaVMUtQoucTmmHfDcvgz1rinqMB7hCTNj3CqjEJahv239BE35KVrME7m8NdUL1apMt",
  "key22": "39k1hbh8p585vP47FMvNcB93FAQuAR8Mzrn6SgkRxrCPNR5XkuR57Vjp7cYj8XUBDM7ZyAVJBuqNdDdHWcZ7VmDD",
  "key23": "38SudYSiBDx8iKkEioZi8R9UvktHyTvyGUHtcV9vh4Sf5sqwgXigGVazijT8UxyDtzmQNNraoDMdxmMAoxQdawhC",
  "key24": "3eoguTk8L5tN9SpUkASdJXR8WeGzifpA8UQXhWEz38gj8c6NwkTpMhc5akNCJxVwERu8VVK1i8XB5wygVfLaSsws",
  "key25": "WBMsRxxF5qjLCBwVxM6xVQvhXBzWQ2zBV3me8oWhcXJ2SPTv5NxPu1BQswuhGaPrC6L43epY6RgAbnTSWis3srP",
  "key26": "4F7tqVn8yjvCgvCHpdDTGtgbbK2Ld7J48p5k3GYMr9xgFwEgpCMJPcenamHwpBZTCXgTqvt4eEBFn6noeHxSy5kG",
  "key27": "5WSgHLVpBmrWozNBa2eNLiz1vqjF7DVuuUsbMvaing828xfz41A2X4Zd86a2Lmtrxv8qTudvQUMjpcvWhCPBfqJB",
  "key28": "JpsrzokJYZPirWfaS8k2JNUPnkG7FUEqXLPym3WZU6NKAJCYEig4RJAJ9crRYZTLDGXD4c8yNnm1yMXcvt5LMa9",
  "key29": "4uCGcFBhfVgBjJQgAYtscYdHDnr78U7R8U1TvXsH5DRyQoerLW7ySJRYyY5HMeC39QqdBeMZQPNNUEp62WmtHxGR",
  "key30": "2ZXhypic9wRpdGSLLH1YXMVcbkyNBbnYBrCg24KgwQ7kTQtJc378Qs9V3GCnWWEJDBmgKNyujYF4vB1vtdfidcYK"
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
