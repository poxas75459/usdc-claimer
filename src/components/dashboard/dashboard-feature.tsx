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
    "4gdwz8Xw51YUs2czG327AvNcTYDTpTb7cJCfZxMxjLhdx98xZxnSsRQMYdBPSVwLpKzRXjeHdMagr3wU9q1YrBDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oumHp7S7AWMyhowCnAvvNRVVDDMt9wzgqPR2VXgGnN3nTKSAwtH4avVkRKV19HHfkmAdHPFRWT4fGAYbngpPmNi",
  "key1": "d9X9pPF6bN6ghqX7Fjob5E3wmYAgMHmztTmWF9f5HZZ8926i6uNGoX2fMt3orG4vACqtNftyMe53CrAErNao1Fp",
  "key2": "34sqaTemwom4MfKM7HufZwp4WNCYybXjYbQqdTAkZTHfeMp4jamihq4JdYA1ARiCFXBtHBc5ZPRjmdpQg66ZDDcQ",
  "key3": "JCGSKnyNEFKkQ4cyG61sYGozt9wfcPf6PtSCeabB4R3Yo1eewH4CsWUuzPpUJJ5Z6caLdszbLVTJiWakTu4bi9Z",
  "key4": "4DvJRR79wdgUJJMrp9ce5FrBd2V1tqWxHLqq7bVqYumQ3xxzcxJHnz1awFPMn6vtvXMfKEW3c5xebM4EQkbjwpyk",
  "key5": "2S4apaXSWgrC5DmsGtdxncaKwbgxvLFkCvVMtgLDFwhwuoxCrnMbPTf2E8hqTqtyCoKTGkuBa6aRbQJybqecuekx",
  "key6": "3cvRMAKbZNY5pSCGNs6mRCtkhyYeM6EbQEZKiL7QuBVdcgMwmHNA47XFU5XSCKcohR81bJLARZGqPTvazvNcPcZP",
  "key7": "3WrUAvcLNbbfZ62joX9c5edvBndbcoCcsNRiEdakww76apikcXLviwEX6ijUaj6ATUuBkwFDgbi2weFKCF3Zvs7n",
  "key8": "52p9n7fwoy5bNaSJbArEsBviunCJJPdKDLwJpSwpcF4HH3HgCrHNvscDs7Qs5Ldyo9aJSjVYLTVEv6DoWLLg5tn",
  "key9": "4fPYs1ELGdpBBUXLXbFThgREXVcPmuqeNg2E1KHnX1qMSAuCx7EPQCMQC7GfPkPPwyVKtuG39M2n5uVbyAXRvzoT",
  "key10": "5RQbz3fZbFHGeWNrfwzwuQrUS2JL6gxhysZ5shjPanzozHq4LaGNs1NqH7MnrJ3oybTp9hnHgNUobVoDd42TgAaQ",
  "key11": "2H68mxe17JsgS9qu3KjnfSESF9nXsN7R26JVrkBwgpEURxMxGzz5bEuefuh19bCSpG38ekUFHMDiVfzBZeGKfCYV",
  "key12": "24nNeYmzfu8ksWGnuAjBCxY5gyTf4mUdkpv72FiYN4aYcgs9j8TdPtxKsXDjFY7CJTrxSgx2wUt7D4yzqFi94vZM",
  "key13": "5CjiESfdP1xcYytPTLbuSiMcA1GQi2F18Znwd4Ye1PKh7wV92v41pPHY71reifXnH4TYiMHvN5xuP9qRR2BveoTs",
  "key14": "46LB6ttwax2Z68eVwyW39gCZtDabZngxBNmxwhiKxu7WbAgtfcvnonzHqHiHNcHhFBGE7PHRdDez2pJBf49oQVeH",
  "key15": "vcWc4JSWvbLBVWvmNA2vF6YQfuqEnXSnhcdrL9vjpVKvxVBu6BAvLLJgBeBPj3FWNmtowp1JJX3KNtSfHWsQRzu",
  "key16": "46naWMvULSd7EbAmS3WGszvcRsUAccgsZzZr7Afvr5yJbAadxKsdUp2bxwpoQ7u5uaJx7Jkx7yGYykTTYue7oqRD",
  "key17": "nCFs1Jb9h9MSKLFMFC74QzGX4Yz8KNriNB7M5SNGZEwXbkE5AJ4zYeStuGh6HxrMWKjz7u5Drq17H5GfkKEUHo4",
  "key18": "mQsy2MyfrQMkk4uYNqpfQx8g6Zsmihis8faB9v4AaxfXUD6czWWbNWdqu7QapKLuEr8TA6ewVyMXKeTfcmZmHjV",
  "key19": "2skGugJvSo8bC4b19novEvcoPwaEBqifdFXWydCipAXQtbBF6abfvmFV2t6VAqx3SmmwgEFMfCLAoxNWS1JXF3YM",
  "key20": "3dSMGK8TdcHFDv1NH3Pa9ikb7DGSUTMJx8Pm11XzsUZhKhSz3KePZVcTBeZahzy2CdkgWzeiyijXSgt7cC6WbvwQ",
  "key21": "22CP9dMamziSXLCGN6QfYWnEbnN4CzviAtJptBBBbi5t6tVwUnonM3Mpztp7eNoDuiXNtwKEzU98tvtXC93CbypJ",
  "key22": "aw8nVQeBzmikh3goRpqNo56t6uD26KcG8v7BEDn3MHXs3hzcmdEWiEftcr6mj1Yoz7BLqrX65K2pWigraJ1AAqD",
  "key23": "2Zqrqe6N8Zh6NxLKJt3MdUEPybEa6P3bJQmE5PZTtpa6FxG28jLNoRVsVGR3J99qGQyY8AiN5VYRDJF8GZN9j12Z",
  "key24": "5gRouZiXTmnQekoBKZw7o7gyV93ncDCXyqufbiS7z2YS7TQUHqP3rpaHbteYXkCg9idYcfRAgdUqBh7Jb5JEEbRB",
  "key25": "5qe1Rp9WWfJxeoEiHgUkYr5x8wVFaE1WgbzivDqPyjGMX7pLJXNcBRjYeDcY2WW6MCK9BkSC3ANBQvEDr7JAg3qz",
  "key26": "4azSr7HwMADbFrQSoBvcVCr2SNPskRybEfUxRhmEqAeveW1pqNDqcjA4jiPbkSBbekEZQ2eUy6bDWxMh7k2nNgTZ",
  "key27": "3mCzEjC3bBHdWgefU6ZAAfsgKVeWuv4CmQeEqYdikeoJs3WbTGroUYx5Kas4bhHNNimW1c9HdKBZphZRrJQUw9GU",
  "key28": "3K1L5tvbxCN7UFZEnN6ZfT5JUTUMkH1tuNXo8pTD9Sohppt2gwKZmb1jXBsMAsWh8mvuVKCwR4pSHUtHNyFiUECJ",
  "key29": "2RHayUBaaC72SHxknYx8ewKkfdyQnjE4Yw1LxHuPyMz7bdvdPYjrHUKwzb8BZ6i1d37vKEGEJTt3QwuCySAYigCi",
  "key30": "4RszJzFBVvjBoMYWsUGs2Ju9qUFYEuceW4TKUeKgMtmbvirEnRcX8KaPMfPABzN1spuFPaBRLHQhVybaw9c4wMze",
  "key31": "4CS3Yon3hjSVKBFtbeGbBsgHTki6EKv3D8xR7zL4zAbtLDiyZxKfQyb9rkuEuvM5NiqX3czohCSB6GU58xCthTds",
  "key32": "35fwWe2GJofwqrdN7HihXksyT3Mm99QMY5Tk2eyrCtvv8yvosvjEmx3pWB2AimXyicUHkB75QDMbAgKJJQKB34re",
  "key33": "42MgZ1SVbitWvEjxC5jCWeNsaw6EaWFNZ1oMU4zqi1LitPsBAUX7D3jwn83EVjk2cPYERAzt5HC7NR2cXAF58sHM",
  "key34": "45ft8D9ehya5N6iCaiccBF8jMx4aPxvQdmsTR6dgdFttx9W98tYe8uPEcxhyQoM42xWsndNmbeDbV4rvYQXG9TMx",
  "key35": "3d847DBob97T1jedivGuRFTxXrQE3HSiwZaA9o5ztaMXZt1CuPfVKqBXZzSVcPNAMF2Y5hVaBwq4X7Y7k8gdkMfv",
  "key36": "fH7osaud8Gt3vDav7cjwyBEBFj6gAiX7BQL4t2vvRcEFHPV4WCcM3p51jKWfFdjv6oML2Wfrb1SZ1WWgoQqCXqu",
  "key37": "5ysuUDFiNthNx8J6jS5a2ew1YqBnNbHxueuGsYbnCniuubCGTgfVq78GY5TYvqrz7uzEG3RiNdHFr3B5jcx6F5KP",
  "key38": "3miQ93vDdncLP1QxAdpgXwgmWiy17w5bd6r5MBAhDWAR87qdRvmu8VM5JY4AmB76ozrLUnfHhhS879hoL6UBriNf",
  "key39": "3G2sr1yTsWu8uggRL6fQQ6ZgaJ1MyHJDg7Z7ARZAwGiPcyoXchcH5p4zz5PZAUnZbz9eYCLia1Nnu3xQeyKFp384",
  "key40": "3yrtqU8U4fgP9xt1fvm4a4RRVD4BfXZzRCKV64bHqaSwDxR64WCyB1J3SP4FRKawP5V4qy3ZHXAcxgkRQDjPUAhH",
  "key41": "5csuj4QR3k395ogjaVDCR2TiJRfk43tU6S1co6RyufbWkQ6XfT875sCH7DQPUAKmevxGQEVGTeM1uzub7jmR3HPw",
  "key42": "5nTAGJNweo1xgJQfwp4pLbr57Gmp4oXKLoQg9YJW8TijbQdEVfDHbo1krzKuBxreMak6jMTymbeXJW1mY71YhgKs",
  "key43": "3CM5QVkHmmizwKYncFdFP5vWpdYuposyHGUHu2ce6L6ERTvsvTvWHFeVXbvGrFWTFDcjWrs7TeyDjPdi4BXA5Tzi"
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
