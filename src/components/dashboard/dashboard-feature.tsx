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
    "5Luxva2npvwEwHXfWkoNKYLNFFhZgoHkRNSNx41ohB1QEyjZL6Y3mvx9Pr1PbB7fyhEUS5ucpDo25ZxS19rzPhYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BGC4RYZqNLVjr1nT77SXJmSnVnVWuACY1YjX4zgMbWLTUNZ6PJ6CcpqN1MQSdyxNSSgyuCUpL8Xx4Ndxc3JEoFp",
  "key1": "4YdaXuVNY56KyK5TY3QAyYivgEC91SEFsCkD2muQCGGxbusRWxTzDsvs6jM3FyDCk1WepLtDxWb1Y4yp5VmAARbD",
  "key2": "2n5GVg8wcqxcnpnhTu1cazGbEsq2KatVLk4aXSxhDjUwqsyxtRs4aSvPCHWACHBv41vNm5sftsLNznBjynP2dT2s",
  "key3": "2VxAmeB2mNq4Au9aUvvYzbFPjPZPDfZ5yEtLuuSptA2jzSDgmZ8uXwRf3mUCe5qKHKq3qDfqMxt8s4Ne18yX79jm",
  "key4": "2thRLjGnfMomSq8NtPBoWkxvXAaQpeJPyL4UdPMBEHM8FTrw2SuXwvLTB8rNngryExx82RRjNPDeDoRvEo1gu9ok",
  "key5": "66QjnZLjijRWAE8XaDewPWLHwtMN9tfATdXHrNX9YeSmqpXZir7tbUi1FP8HCx6FquU9fuGZ6BxNPFULLvLHtrr3",
  "key6": "3L58XJ7qBRhJTmvt8SCFfGEAtNb7GMvCdnUBXJWuiyePZkJjXgEzo77n3ypHGsoCTSzufBgyq7QCChzCN7FtxzuA",
  "key7": "4b8XMVN4d3LRmsfRC49CyTk4U5Wq19b7i255JVAs6wi3LctoDW2EjCfihUwcXwodyACKo2p1W8KrwZbGjEccEH9X",
  "key8": "2MDCEszFLPv9MRZKT4Nc77dyJzP2VPmXQ987xZxjQzwSk5VjnVdXhiHv24UKqjm5cMojQTiGhq1CfZ8jcBN8CXKS",
  "key9": "2ZtEKqHcJDYnhxUvUU1ZPAZDzoLjxMB5umq8xmetG4JrQi4PPimMSMKQYY9acHjoChQNYx4LaeuSRE2HvzNm6kJ9",
  "key10": "4A8T472P27rGJm7iEoK9n8tmjREyy1LApuhZNqUovX2kxsDGkEETPakJ8n1192Jm5cMe1xuychRP3LBni4PRKr3a",
  "key11": "5aEx5KVJQ2HGohc1w3nnd4NexpsBFdrGbQBezwVxZkz1EnF3QoH383b7hsgTzJA971APDZwepJLu7Nn4EXTuZKQ2",
  "key12": "2XDvW42jH9SNvN6JyzZ4dFboJ2YRp1ZQfwyEfshKG1Ew6pr6psDjBQmos22x1grxWqdJbLhDg2zp39Hbi6knKDDv",
  "key13": "2Xfvde5xoKxyF91KB3kqvfWZkZkQwC2yut23b3ENr9LKhLHroXKJcBK1ZMJHFcVYNbsE9qZRBLzwnAzJCTn8dAyw",
  "key14": "551Baa7LtzPy5fDJKR4Ctbw9W5KLh64PWu41GKLCzgs5QZFhjFMYfkSBEcmjrjPCnC8sNkAkGTvjyNUvEi8kmwZu",
  "key15": "2vxUJYXH2UyAUKCzBB7nXTWW9MMmnpMsbJ9ujm7DW8Xuv7fptYqDLumZazyqSBeh1qZTbF3vxTazSQwh1FmkgQSM",
  "key16": "3WiJU29sDvt3JGTAfqEx2XVBNp81gUnFnDVJz6cbEFJBr9oobu3YkS5vz8THMPswJxfY4zum18mm5AuwmdVrg7kq",
  "key17": "4wtWK3zGqm17dFewHMk8qfGQyt6Nh6qjw3EqvsftdycqdtaRVpHkCBGJMxpZ7SRTNy21U2fBrEb5XtfFYuKGcyPz",
  "key18": "2SEtkNVkzdk3vYVyjsFTmEef6hHCR96JNMAdK2GAPUxn12CnhV8bcWJ9zBUumrs6NqEuZrNs651QpAc266HApEV9",
  "key19": "dz1bsx31qhK26PoxFgd8pMEZcSSRxwprdMuwXsEdRgd6C13soyH8LjyfVp6yohqe8REGzbaGU271rupToFht1mi",
  "key20": "3vCKnoGTo2oUExiVw6aGSkXQrLQCP45bLWEEMcw2xTBKRL3sareW3Uk6LWb96mHa3rQ36j3qzhsYGfMHvLpYv6jw",
  "key21": "2JHvr8YnwWsh7xo8ejUa3WjPKsxW17T5hjcuNXJacdA6GVYVDP2EaToPZoTbmx231vRKdpx4xK3nVtGKX5E1dRuS",
  "key22": "21S72TPkv9QnR2P8GtNZc3rmCYgQeqwUWwjYjqRqcHxqag83AUd5sQujkmFJgkrs8w4QPXwV9fY3hYxuHnQ4d2r7",
  "key23": "3PLkzmQJ3FHTce3832BL6Y2WqscKQ3YaUQpQ7kZq4XDhyb5TCeWE7bo1RVEdW1Xf23aJ1pt9LFVUKDhN7yxUcfdY",
  "key24": "5LtV4DqCkm6H6hP1HBRiPuYHskao4b3fcfukrm1Q3gFu6Jo2JhseWQuZ6PxTfKVGfpGUQWtw7Df49GqwRfCKNj2x",
  "key25": "5Py56Pmmnrvp8ZtiYt2ZVL6qGupSxFqHUxkPLAs4PcxfPi2RY7kqSorfHabSUGv2akb7ji9Zc1rYvh2mu6r2KYkX",
  "key26": "3X3xFnQWiMv2NwbUzZbzyeWtuaZztwBWEncLk89FCkSQ38JprGpDsFfWoQN6CjPuxpveoPDmyg96wS8L7m39Xm3i",
  "key27": "4NZ3AUmzhTWRrpMXpHNT3LjBw7c1QZFh9GvSuz1sNiBe7nd3Kn8esFJTYTeKPXUy9PWt4W2ACk8ZGyUZdV9HQsqz",
  "key28": "3Vp5BBmDMtSRtgXj1tbQy9Zp1YwAnRKGL49NSrfg8CQEGqnZEmGmvkNHwxqo9dqLAkMYZUTQJRRFziWHuXaDzZx4",
  "key29": "2xzqtGqNJsX4mUYduKCLK672mJanXxjtCP2HbKvayeB22gFwpkkTLqi6bTrqW3gpGEv5cxgjgwHxoBB5zwkBMj18",
  "key30": "276jRfXf74tENdsbau6yEtCCBMPzyTREnMv8w9tq7s4Xx4UbiMtepEtT4jLjkqQystYJsF33K3PXm2vg1aAL9TjW",
  "key31": "4FZerobyErX7L7iLNpKRcUs8hn63kRCABJBAC1kuGQxroptVCUKh5owiJHkFRG8GU6q6tRoSLx8LV3iYTFygfzu5"
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
