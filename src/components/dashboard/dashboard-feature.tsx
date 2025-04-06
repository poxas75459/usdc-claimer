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
    "5FjZaKUfK7zJivvqPtMHpCwPai1GGee9hZoKsv3vqxdNwwWfnbdf2JJa2Cd4JivtQr1rWSzXACf8M9aKc5MTJDQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RaPwpsBuDhcQCLKgR5CBx4gsWGbgA3Udw9DrbYSNBg89gifMQKXi7MJrDD9ExEP3nS7pBT5dFJEQCQmCuTRhvuS",
  "key1": "2XcvGvuJuRxixf32A8p3168ZhQxtuPar27TkjpL1mE3TWduTSptLcUzDJmLGRB3vAw51kLg4B4Pv9fNPGaVTcXEC",
  "key2": "55w58xhzSseT9DBRAzpVaFAYjrn5ZxSkGTYcNFcoQmcXMSfqFF1tiAjFKjasFzWv7GHnGLwSxLMicAUk3jEpwmwa",
  "key3": "NSoqKHg9vMoUHfyWMeruLrEmD2fnquep3pRNkhprg7xgVxgf24W59GfYsoKxuJRDJ5kqgmhbiEF9uD6UtxqoULV",
  "key4": "5BXX61byZZEBcKD8grdjmkkoETamvtdVyB355bBpHbCdj6ryxTnG9eDn93CjWGQ7QvPEE765b5pSayio114tVzWx",
  "key5": "5HLYTf2UfGwTPR5dHWbfrEnrmEiaif86jZ1bLxdA3bvVcEozhXk6TzSQXxSqdB3jhGqRsw4ue7UvWxFRmYc6NtFz",
  "key6": "4WoJ6uQVyKrsVovFWcbaby53zAQP2RfuhkQAPgTyvhW6H14FahkaPwLnBiQMjDExHc6wbiTtDEXkdHk4aXbKdnpT",
  "key7": "2jDgWLYPYgY1HuuxseBu8Qn31VBKZKvtHHeaRquuSoDXgneLJGRLUhVxVNS4CxSux5v6x7fsc1zNYwzLrwsv2iSY",
  "key8": "Dz8G7y3eAy2WKtGdnortRxki2EK8QbdssGJk6q2cbV1Dt3PT9LpaAtgLJwVLechSeK616SKDdXtwgsFejgoVGCs",
  "key9": "4oUEWuFDUqz6EWAVYbg4Uq7XSvGFK8W62VZ2u7Qr2HdAcu3XAHcYywLcbxiAz6DYiSGJfetzHjVSk4x2mrLzA9Aw",
  "key10": "5uvy2FmipcGP8ZzDHzHBR5Mr2tTmADP9D1hL4FgwmboZJ1wNVE1H7UVSoPSZ9w2JXuE1SQVT327Enmc3P3QLFqJ2",
  "key11": "29odXXUADTPNh9HVcTUxK1QiH5voUqDNuwmSUBFwBy6z2rMNo5TLKT8uq3DoHLpbedwHBfdvbgRYrrRR2Wp77aoC",
  "key12": "3oCjWxPSbxX4vMyYCB5FCZ8jzgBAtzGTCcqqw8pFoFF2YgzxxkkZSU4aztm5u39rLGwQcjDKBpVDu3hDa7G7KPKJ",
  "key13": "3826odn6VUADdotpdFy5dLakQvtU6a4sZV1pzsCJ4TQnmtquyhKMmQpAFx9meUwHoGKcASfxomnT7dNfT7YXH6Rb",
  "key14": "4dQMQ3tuVMMJN6AU6ZVpGn8fJqnYXV2KmwMHqW6bEnHzwooSengvrwURWLvxwpijGmyYzj1b5oAzZHsHriJf8D69",
  "key15": "3kNVza62fqbuMgHM1x5fKaVDTfqtsMAvRXrF3x3Fbj8XQ3Vu2FNWqfGDg79Eiaq85o6zubUm13PKgU1BxZjN2TMx",
  "key16": "3457JmkinuyaagFd1fBBUvHbG4iSmWvYNcdHGUiJDgFsLJS1ZvQPhMWemaeBh1AhJLrpTyN56HfjC9R4XwPU3Bmw",
  "key17": "5YWHYMKLmk7Pq59HUrbE2XqHLt8Y6iHUeB7ycw88ohNcJcA9eXKQCvhRNEC2rnzZAgv1T51Xy1aoUWisuohRe5mT",
  "key18": "2n3vM4dMz5BaG61tKjW49T3N86n2zqkGbxcnPKQVTiP6M5PikRJbkEZaF5dqDTk9geGeL5rNyupsmCVxB3zNP28E",
  "key19": "GJaFepybqwkigsEqa93f96LLH2Aj1wL7DAv23DicYgxL7oFpJewk5CLHG1xbS9CTVECnKQyxuPE5RxoEnKduVcP",
  "key20": "3KuAbfruc8ZCox2T5Qi2F9KC9DGa2c8FwedScYtfMc6kdFmRLC1DzdF69NParCCbBKGZTFsht2QeYoXv3kLMiSc2",
  "key21": "5XF7YkhN9m1cXt69ZPQNj8LaGa9pvEtSb27EconwPDRep9PhPkybXAdvtWMymTHJvcWFYFyqjQxrQtkYgZrRJ9sL",
  "key22": "4UdSqVp32XHk5rg8JTJnhjmCtGjzyvefgPXZMc94jUL26KxyX7NiWwXsDMvhja8AmQEGinUPoXCBwaWY2YkQuf94",
  "key23": "GhFRnBgfK71C6jgey1Y3PZNqAPpRywnHRn33UrUUJqxUWn6LPxQr2RR4owteAqiuP2Bz8DbioAjTwXuBZZmSd9h",
  "key24": "5PrHyCHnReFDYnFuvBQdGVefRst88twDKCamHKwnTgDc3K8tiyUVwtdrcmF7fi1LXf48AcZRBryyx34W4bUcze6X",
  "key25": "5FEXd4snUMfqrQhFMXCiyyr7uRuDnsvu4hEdBEtzGPzczXMPP7pHVkbBZR5okGmvstpjFrgr3Khgd9j7NKZDGgU4",
  "key26": "34P2ndTigJUNAghHv7XBndeMLmVQacHEnnaobrFjyA333YvtiQ1jKfZVobwANNK6bFDyK1TAKS3saApwYqmHWPgB",
  "key27": "Z7MXdaWNTBqxsR7opg1dzsHysYQDoys7X2ryVgzBc7RAmtVTYq59R1NtD75K3eDw5iwxFdFhXH255XM54sNotMY",
  "key28": "VrksqMB4BdLUBhvEV3tsRmcJwK7rEWGP5bU8SYQsWVzTkcqbf2HJdB8ViyQmkh374aKxDtZQ4Wu7xouGkezCsvE",
  "key29": "JRxS7gYzpxWEU3X4WuLWStDBVdN2CUSRNeDvtDkY51PefTi4hJtPvSGRqNHSaZ4DdS9khzGrY51mbUNDwRLzmtu",
  "key30": "21pewMn23i5uYLcDfPqiYCxzXp2QQaiwCfvtqFSs5pm2UFoYNAJ78KcVW1fxthiPD46vmDM7JHUQCtYNTy91tkFv",
  "key31": "5TEFiD9brTyRZC8ZXnkSu42Mwmk8bfocWvVKnWXt1UzUk3DScD48XhSLNMuSnQeSq9Z95T9BdXqS1PkVbc9g4Z4n"
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
