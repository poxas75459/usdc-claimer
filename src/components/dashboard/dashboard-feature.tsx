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
    "qzbsHErZ4AqChrNQN8Kg8y9Ffdj1rsj4qgb2PVEuZLgW7hMPUF8uHGZtcT2Yc5tgdLi6rs6qe1v9nfkyM4BTVre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XGTiiN2E6tA5VUCB9jwqsFUkYaRwdiuPRYhT6NkjT1mjrhLd4MuZdoNx8x5XdMXrBAxRCB2jSR2rr5aiMDEtcXb",
  "key1": "3B1Ygahzh5hnRyfw77eDkTihgxu6kGgjonJSwqkr55rBaSr5Xp7rSHMSinXUjgTR5pZP1j2R5paXcaNw6Vyov8Bx",
  "key2": "3oYLzr8UmDc2pPL8iDELyN3HEkUUjzryhZtMn4haeKgkRWfNTrtJu5DuQKiJoNo8daSQVhP4kB3AocA7927bbZby",
  "key3": "2eiZpYC3ry3WofavQdfsbEGsKXzncYmxUH4sM3uRhMGVyTEdwYeoAriYtNNFYuziBFoqdaBp9966viUeqFhpdgX8",
  "key4": "2xrHRbH9tcepqasz8PqgJqgvG6pYoWEqau8LHCvNHnRzbMoXiFTQMkSFaF7TkrX1jHyhdN9qLD3TZrXR1LYhsXen",
  "key5": "5NezneWCdYj6jFny6toyMJFYenMuHwKmyaWV4mncHZqddUuxGrk882mYcBf1WdXYXLEmsFAy9eEZns8aczmrcdAJ",
  "key6": "uF3gQBNm56QEyQnJ2SVYvTLF8KvJctc6vNVLeu3kKFNGaPdNBBaoPMMppbafGLqEyPpYYRp55vrt4xkZStRtHzZ",
  "key7": "A1GPAvMjJHsdYvTmfZ729Gzmkh7swHNPS9NcGypuxGPQPxNZj27h9sR7dKtAXDWbd8SRM1u8mVrmgBmwWomLxYQ",
  "key8": "61Xf4AyZtBBfMe85qCijKZfNrZGrQt1JTcHmcZigBuCMNSxYiR6SJe3FhJSAfSX2yWfyp8Mian4HpwjsgmG5mfeF",
  "key9": "4BXJ8vT2srDeMy6uenMZXL5v3pdsDNTRajKmRHHgGxaBet4RNguftxWEAR7ZoVaViPVT8VKWVbWpfcHHScLwSSfS",
  "key10": "3fX7hybGpV9a8rwAeowcE2V9QusHAT5DGcpwQoDG88kqaC81cTPQEaqhC7v41Vd6Vs8yHBYuFGV5ds87rWbceATa",
  "key11": "4aiWrqbxjTDDYD8Z7NyknZ6x37btMuHKV3zyPy9wQwFnhvyQyVqQREXA9uP73TuXoyRoPE2iZobLf4iLxAZ8wDEJ",
  "key12": "4oay2WAZfjmGxEma91MXNe3gbktbcUcn9X5NGk38py7FbtJai3G4t2T4HVdUkN1QDPvBAB11yf2GJhDfXWvvmmZK",
  "key13": "5jBVcaQq49QdzjxTGBAnK6wixhJz4G3Vj3DqGfwbqTN9iSQ6N8oYdJxv1RTYAsDYHR5d27KySZMjcXQE9GswVefM",
  "key14": "3DvseV4wWuVPWQQA74pYpF4FejEsTx8NXYEo955ZhYjXQKh6Nm9yVuvPB6mpiqpDdjyiZkiiMMY6xEjChdSSNnTT",
  "key15": "2jDVdsxpKA9S1j87YC1N6xjmJ6XAwysG5yaRrHJbFZudiEZtA6S4fE66H1vRoVacGMFkV58XQ15Hemqa1BrCpr5r",
  "key16": "3pFkr2SqXWziKqxUe7JcvstcdArgfWVdyeg4cYfuu1is19Q6gT1U3yMrBWUcgSUh7591CapJTmbeSbHhimpT6NvX",
  "key17": "2yW7DpsDT599bz9exRMv3EoQ3dGeeFTmfuEf7gFHfKeqFaWRd6Br3aKk8wiWiCZRminDqE7B9X3XoyVFpMtYhDCr",
  "key18": "65pqsX45AHDfiuty675G56KW3EFvvNhGohxdxMd4JEKbn725udUiV8gJdhsBKnbNRH69F9PK8mTSD8uiHDDtceTF",
  "key19": "338MPaCQYMzi372W12wXQxtuNriDkpG6rMiY5Uzz67ouq4CA1pceEuQriSHUSrwPtorsfxbi1dao6aV282voY7NH",
  "key20": "2YkYWfBsnZwxSMczwQAcdCU7HjJCsijAb1ML4ieoKuwWVpGyT2kyzCJ44oDP4tjMVwrDpm3TkTZFPdBeX3pfcc9B",
  "key21": "5h91gxxmLm8Qc6PBLuRrz5biCrr6zygF7cezbifJVPmbWXnJdtMHKDtmEAL5e9ceB6F6QaS4Ba96CE6AXENrJss",
  "key22": "2Co1j4vu3KkeQXkaSb743MUhEebDtHaCmvTmJDb47dBQMnWNqjAZPbvXm5Y5YXhpNmN4DonMPL4V6t2qqsXSeo96",
  "key23": "3ciVi6UBqDtrdZSJ66aB5QbRf6V3vQzKTjYgmZZkdYSwpmVY2qRgUkyoPt4LrJDGf2jxTJ1bX5Z4i8jUMBezTpfJ",
  "key24": "5LqNLraycG1v6NjPpxpFb4zLZPoB12LiB7TYpk8LtnBj51TfRy3f7nPmcWwUs2inPJSKxuskNhzxgCr4jFiGheoN",
  "key25": "4y1TqPbDqe6iWwmBohsDcunQsBnpyb7FEPDuvYhhfXVV8wEGhCTvTSTDUucCzfV91tBEa2748QP5FsF6BKFdveMj",
  "key26": "2wMpzpgUvxLf9vGPjtrwqSdukAAF44XzqGYTQCDNYbLmB6B4iCZ2Mjf9Nckd3dkitJAZuyJqJxhH45B1eJaqx3uP",
  "key27": "5Z2LhPxhc4SoXiXhjTGJKzRSrGCQwDRrvu1rjbneGBS7gAmAa94DbUhXL1Rz3gdQUMf4qEeRzwQFTeE2un7vZj3o",
  "key28": "3zTd63938DJqk9zS2CkYf6K8G46heunT93cMDaTtiqzLLn8d6k85xXS29CoUhLaACG8KXAdHvFzdSZnTwpncPveD"
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
