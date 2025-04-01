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
    "4Dv4CSo6MDDoFpmkPQFfr5mBwe3ZcQjPk8jQ4qvZhAgYf6bxwLK2HQKipDzDPFR29psctAL9TSowsZksYkcR3jvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sDbQQsJA5v8ptLM7gQXuAiw85fG6tjXvhJm9mHYkmHMUSdxm8Yj9CCdYzoWTFmqu8tuSskKcPTNsZyZPjZbSLSj",
  "key1": "64zdRjT7JXQyQDoYJMcMiP6CQ85rCfbX79nzZajtvz9a2MeAeTtQm5867m9L6a2zSE1M4KuUf77eqpirPqm89kDv",
  "key2": "2r5QNmmwo8tqaf4mDkpCNqCkz4bk23ZjHJpyz6uHehS1xMG3Zn5gnSkRXhyTDBWQjNzWvhPUzogh3sHh89xAjdcD",
  "key3": "3emDHWdAnPjEipqXTY8TxkUWK1UmEk1r7CWuN1BJ8b3qY8QNYmmkD339a5vqECuBKPoxW2hQLPkugFRBytQPacMB",
  "key4": "MAVXQDcv1Pt2qJr2jFrpUbFMQWNitbMnMngoX7Mic1yJSEGpAwmAYywV8RZ6K8TLmjFtcnoAG8gjRsthHfW8VUT",
  "key5": "2SvHBJi6bt1JB4xbaVEDCZNSrD9fzuryEoVhix1MyMpzHuvYTKNBZqMrBzdYuCPMisCTQbViN8kaRhyuJRFboanB",
  "key6": "5zMNpeiBcPHKZ9dn5y1kLssh4HFBZFQwMQY6Kstr8ZAzFimJ1fn9jDqSvMcAst8FjznFmjPpWnfBk4VyVstqnLEQ",
  "key7": "2WRbFy4e3TKEMpdSXCfqF4JpSLrrHJNnArq3zuo8Stdbfa66VeddaXqTcsMGNvzcmCkSL2ogsG4kdcUCTDmVtyiP",
  "key8": "2jBaGcuK1kbBGuiEMLR8qCChh1tcvCCbg9cwJJjk7bxiB8L7azQ86qgR3mJWPMXzfjnxZsHYXuXsTexbyc2cEZqZ",
  "key9": "4oNvde72EbnP8D2aCgSFbwUePBSXotTPqP3MYVgrUE34ApgXndQcxVbdBPWP6Eu8n4UMryAJS6frUm2L3SJ3gbZ9",
  "key10": "3Vb4fu7K2fvsYHExqNaXu2i1rfKGyagGe2tNFfaT2t5giP89HZXiFfBwPgF2L7SbWQU1LKzN5rk4qEs4WMJbem1g",
  "key11": "5997h7D5KdxXRfspH8rtMgEJkbrs5KRyv7UARNcyYSoSkkoCgVXDV99FPt27wnpdYVSvYDJS6yzNe4mAeyLt7uR1",
  "key12": "2f5VcntYp99RRNuPLigivr3CDpXq4nBCU8JW3zsyuczVCpc7KyjHdScpiMck926j3gmdeGb7mwXddH7xruiKAamr",
  "key13": "5naJXneo6XVXBCouSQb2BeVyVx7sM7oBHxpD3p5tvn2icY961jiGNfZ46w4x6hTwLqYaJG33ZvuiMDsePjPRhFzQ",
  "key14": "224gpLSuqTqxddRKCTZ9rR8zmi271xE5VRMzExKTRk8kNEoV4X1aPkNv55y4m3r6xDcNEp4n3SCND5JdZJ387vCG",
  "key15": "3i7QqC8h5RLcZJysNSNDYUU81T4oeYxSe4qaLCD6oR2bati8ttLYnxQ34hekqYTkhNtRF77PrNcSCMY5iNGdHYiV",
  "key16": "66gPZudrR5copdq9dGaPSb956tBP16cadMHshuWRN3794JNvd1bfSHbJSWxLNRMhPri7URY59aA2GKMPy53mkJUm",
  "key17": "5RiKofULD1M56qWyLjzHwUrsN9sNPddAwoq4VHJy47cMFEpqupB5xCmNRho7ZcguEPMMe6LXctVxT4dAWq1xW1B5",
  "key18": "5Aqdwb7psnDd43QEEDKjNBNXe42A8JPYnAEdCmu7UpUqFiPe6graBtK7d39KVtk7zi9td3HTt8Css6tJm7NFsLyi",
  "key19": "CmVHCVPvmsFRVX9BA5YKsq4cuTrDULv6VYxx9F4Go7czwgZmTAUYnjBtUXz48U5F9ucyoA8zQrHUGkGEKg3hpT7",
  "key20": "5AQbNVFDenEpEWiARa3r6NocYgcmpwh6egN7AFKRCndbPUHfAwa92S4FxgWVn4geK8C1vgaRZu1EcWCuCACQKvKg",
  "key21": "2AWLroq2Ps7uF5dVqbJdQu49H4Qv4WKZsreBH7TWm8HJEgq6pS6RdJMszyTzuZFKuK2ukxUPMJJ5v3xLyNMzcTd7",
  "key22": "5GeCCjMFrKhUyjaw68AaXR3vjgpML6HJizzRkUrQ3QwNkQChwR4x4kw3AYEgT4nMFsDA1YbFRCiNYqjxTMghWbga",
  "key23": "2PaWc8HW74YC3XuVmiNVNBCppsfTCmdSJbXBKYba4F33kVeTVs5m8GduGKVWhbuAQd6mZDsh7w6fqY88gcVok8cq",
  "key24": "21XAPYZ823eeMt3sHkqvbV1feKMME8nc6d6ntibcDC88DmxsSnSXS9Aw4nvjUybPH5ZAkNAi9vUewGLWF69xLRZX",
  "key25": "4ErBsBmSoGU5G79tgrcydpxFKmZynn1Trrk4mYocbgDkAVhQhSJqTvs8ciuCrNKsJqAjwJQiUdaxkyYwLVjFv3oq",
  "key26": "3SDLVfqynVfaKJqbhqEv4QQnLAFzMdsn8JQJ2hL5jRvW4sYHvNChuGX114NkuYsmGpJzpPyW7xQUEfC4hsbge3gr",
  "key27": "3WQTkdxkyEv6ERhLsCM1EPCArF7YE8qbEW94qioVwouuFTGCi2JfQ7nwm1kZLFLukhybW2My5uVtBzAhs3odPPL3",
  "key28": "3ngQ4j45hkouCiQu7F8JsbWzwdEyikZcUBtg1gDWbYmhcqsRz2foPDKRSABZGGkidpNCstUUmgKQuHfEEKQDhepE",
  "key29": "56VRAB5H1QQgm1HMvcrwPQKtjAZnjUQy6DMEKC7sBu4ZyyeMm1teysWXbGaeGdMBHYrsWjjTNaUWY1ARqbKqXNEb"
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
