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
    "1SQpShn71VcEESEfmMjHX8TMdJq78J4uiF34Y2gXya6sZpLHRev1AS5muegUVu6AbDiKpQbbzzHwqDEV6ErhAKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9wRodzc4wfRe9tvaCPEyQnEeyShN5LCw4MxmNmVqW68ZMcwpKwZgFGVm7GyLYSvpmTC25NmeQFarkFcNL7bQXX",
  "key1": "25WHcEmYAKEr1kHjcsXucns8MeudU5qEAYBKmaJLuuA6PzJeSWCfnRpWWhpvGFvAA7uBU7Q4uVmYUxBvJ2KaUF9h",
  "key2": "65mP6RGRe9C4mupcVNKDqhtxHi1xJ6iHaUzhn1qyfRAj7W2cGWESQXyoDasWaWJzDKVwoNz5WwTd4x2JCvrNUk1B",
  "key3": "SXdFZsmUKqYByM4xR4f6seZpQgVHBPEbjtZFqY2g81WT2kmDYStjV3veHRQjBAens2NKW3qEsDWNShNTo9B7Y4N",
  "key4": "y5JMUeGWeoDpje4hb1dqXvYfyPJqqCX1Pg2HEGdzwnjVCyR3B5xZWAEzXhRCPc9JtCmPMkDueTBQpzzuJ8obXUG",
  "key5": "HKdGR8TJubGWAy11daown67v1NbV6yL3LpQML6LmDWX8Y98DMX2BnxEWisUA2q2tpd2edeFngUP7iLyADFYFcLp",
  "key6": "3XXbLzRxbn8yaSrTVj8bibqPiG5g2oYdmLbPFSDM6tyB3Zgqwy7vsf1tYCZ7wj7QmtTvBkZu7KVJT1dANy5fUZKo",
  "key7": "3WjyZRVToP7kdvXMPjT4EQqVqVUrdVerb9hH1gGhyb5uWozEsLAmRPjMAxH86WzuzwapiXXseeB1eM7cj8KcnW49",
  "key8": "9FRZp8C8itZcCVE2xZsUA7gWSyoD4m3AmHm13PbQndwSxE6DSmYQo7BaM91465vET11E17yDUSNPnvKPE4wCokh",
  "key9": "2LwZ5LqzxiBNrmhfRkNshDsdutxTAFmf9B4q6JfKQEhtkb4kyTcx1LPERZABxT9MJtRuCvCZfe3kvcFaaLZAoiTQ",
  "key10": "UDLqm6Gbdkoz8Xr5pFZfN1zcBv5T4n627ezPX57XXNDgpwVmH4HhQ3X1NCnC83DyNE85KhSPQ42MijBr8bgGeE3",
  "key11": "3m8Xu4zDn5s1UGaWDK1hLHYHVHU3nrBEMfqzkBf5GECoQKWtoMXzqdaQWc7W1WoFMixFVK4gUcZYvGvgbx9d86FU",
  "key12": "vRvReN6tdPVKcXHSv5yeQMxc2W4Y5TZEbaG8r3XfBPoaPWPtPkizi5RXKNR6UaWxDTLLg9W11MbCSnACiZA3TUx",
  "key13": "4BLcpY9XG5VhhYXgXfXPq28pqFC9zS8VLK2DMJWCEWCNz3kxSukgjagcRoztMSMZ1amzwNaCvB2orb4Wuwp65kNf",
  "key14": "4s8zufhsUfZjkMmAA8UUi1bNvG5vPoBN1YHzTWFEnTBU3AXewrS1SpUvRpgpHcurTByM6xFibQZEWurtAVfyv823",
  "key15": "VsSjxQag1SeCTkUGnUxuTy6MfuqGppyXPYvAtY1MEgBTMYVFUGeWoAhV2HAknH1EKeYXisvSf693EhJCuQ9rd72",
  "key16": "Riw6nQ2uYMhd6jc6dn4Xx53DCpDHL4UrsCNdQgFoLAG37aiKsfRsMivL36yixVWdfdnSwNn4gXxBczhqwuJHHay",
  "key17": "AZpV2JVKRySDBux7HtS2Azf3XHZezTLAna2x3c2qyFhbpm9izexSUkpjKUc4BzfkFXA8gnvkH77aoVivpeLqh3T",
  "key18": "2qStWmhG4Psk63qPBgBBgfuX3xdJETSnnEfsbChqn5HGR6FrvZdNzobFqZAuv7BRgB6A9pLL8WtTnH11BYuqSQ8Y",
  "key19": "k7J1dFCKhzQVBHyHoPBbLAcE1ekru5Zb3YRYF7SpTLCChEfZmjiJUE41bjUhHRJjaHyCJ4ybViSGG85ubJaYg1T",
  "key20": "6fkDCtAGK5gPXMDHC7Se9GY4sLfTFqfjfTH4oGUaCtEkjkVSoS3wCGsjgBq97fJoSme3qi4E74wdBca4RzLcSHp",
  "key21": "5BUSamVAanQBFMvTTGpom9DYk23yBc4bToUrpenASWEPSeNjtynFjbLd317CAbx8GBj2WDJmyum6N8XcUYKG8Qji",
  "key22": "3DsBtukmggvr96Pz6pfNTzyL6XDP7dRQRExB4EtTQX5QHV4ASR8uEMSbDLsqMVSgXTRN2J6Sr3hZPZDgChvcnzfg",
  "key23": "4RbCQHExBBvTMQqpXVp7zACLhxCxtoMFU1S6Z9ZPKoX8NT9rCZYkJuba8LwvQkpthugsFNn6viYBnj1JAnqdyyNU",
  "key24": "21HMqvaucg46xBAGkUtgxxRorf6BYpYiHxuvmYLG4mU3XfzTSmuHfvnfe2F73imUAi2RPvco6Cu6xS3bBgT4ju8t",
  "key25": "5EbZkMDeTN15gH5XeqbJryGNV9t7XzmwN4C5sdX9eEQpga3HpTjQ8bHGSTdwJNJsLjQYMQeXmxwH22X1do43gLZn",
  "key26": "5hDDVMXALa1tQii3nNdevqWJSvuxLchPJ9fPrJX1rC5D9xVK2ksEW1SLGUFCbyqCjhukajxuUX9Vz7qxpVX4G5tr",
  "key27": "2jmzoYaoY7SSdr56Y3tj27zn8MGE1GW1wdpzW7iAqPed4o7knpDGkStqcC1iNGsCPkNHgYWK9CHsmRBCQQnB75dM",
  "key28": "4EYS76jitDG17NhZf7ErGvuUbKpvzjEiJLFYg5pt9NUJLM5aGFxVNKprkcXTRcCGqtCFtkv1FbZpCuobgbmcbmxY",
  "key29": "3tRx6Lrrb1FBB8iFYVZUMFH3iPUvRE4Hwiu1mVQ6FQ3DAFxvET2HbchQvmXzfqkfpVtXKprtZGrLqpEqDyr6BJPB",
  "key30": "3fqgBWjBM3ZCMxZ8SxC7SYYFuMSZ8hJruK7zcW1BdjcezzSy5ppLLTPQ7wLvmxC2Dzn2CHDUuZgrogXU1ThXxQVf",
  "key31": "4yUw5fHMDjUvGVaB7RLNMYEJ5RWwuv3XUKQaYmxsLces3RymvX7NX78WpWGgyLByKseWqZmQWjPTSmDJ4xd768En",
  "key32": "674tPcdBBjGdoBy4dPgP6mn84EbZ5ApDmYFshicD2JADxL3RLgGHFBGkueWmxwxLzBkFqBMf3GYd45HPmy3W4Pjh",
  "key33": "3g9i9rioZia6L2fNnjGW4SFrsmotVYejNBFYZqSudnWYYNpNvuAM7bQDsUYd3YGE3bWUBAmbB3tceoBqo1KFEfKZ",
  "key34": "swiJuisn6wg2ZJo5wYD1WwVS1FpCk9VMrD4tkCUxb8escAD5Ho9GZ7awgZsXt7TbiBUTbH4bUVAiZGe1JkXPMbd",
  "key35": "24MQMMi7AArduUyqxeo38PV1P51hQF5op2TiV84MCkMeprrcG2rB8a9egWkGh9VZLyTuR3Cc6wxtbGgZja5UhP6E",
  "key36": "66mDPGTva9fpDoUqBYyEWGhhk6etkx2KeSYNWejp9MDbQho8uGynnNTJ6BzWoVbjzzVGWxS5ksEzcR2QWcHufQCx",
  "key37": "55qMXDXtUwQgkdJE2m8obVYusRXwuWqEPMGy2dB4ywzEzvKPgtLS3f9pB4uNLtHP8Avy9cW9a2voNXCcJKj4b18J",
  "key38": "34rL8sdJm2QeDyWeFJyDtvVDuBbYpNgazCWE6fTATsFNpgtk8jK5kiHUwumxgZeCcGVwcvwRMgYAbE3uSdNr35LN"
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
