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
    "2eAgU5UVQrF7PSTXgKLM8pmDR64DBdsC4mmmSWN6GQ87HSvjdMRbcxm6JGgh8zrGSnyrQ7qd3p87RhMe547XMxRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sfwwKkRMi3ApuJrRDfMxpUdx9wmCEccEQCACE8ZBVsTAjajfd65z8GBTppNjnunYTaFZvTt7o54mLPWK8qaiPkA",
  "key1": "41MQgxiRAe1dDVCgZVCmudgeZs8fjGTJVEKxXdGg7tj4nqNuhevwqLDvZQm4P4f5WrGCLLjKS3X7GeaFraiPcTqa",
  "key2": "5gF5xE7ci5XFh17B4eXfiAFGcwJaxxLw1k6wCVmvx2DcVWRF5K3oofcytVhUu3VyGjsLsMLPYgby5g7cTqAzZrar",
  "key3": "57xT2vFDSfBZpDjjJwaEd1nCPnpGVQsYyAaDEiAc8FnZTKGQLbCPEBirWj7e3Au5vjjmMsz351EkrSeY3h4tgBBn",
  "key4": "4jUgVZVxw81Td6mEP8EXFLAX1s51RxgK56x2QBs8gA4SxdB5vEhL67ggcDmEbk4aQ9xemotuvKgzDX85gSb1CzjE",
  "key5": "3w4izGch3ZpQRcNWoMRDr7mDAW4xZpixh9uYQnpUA3YJwqm644hRZmzh3sGuYS618pvgECEnPhgFSSozdNhtrqAT",
  "key6": "3WtXd7nksupkaA7G6VALPuGDMb5MJxSaDothtVUJSoDYsXbaBgunhsddycLvrGZXPzx8orHVM1pyhYhEfadRjThM",
  "key7": "4WdQFCfCAnnVR18TS4hUd39qNu4hZNGceoc1Xevtmb5ybrgXFgmBzDpF6SUahohiULdF92atHgj7ntttRr6uFKtc",
  "key8": "68DXZisuHqBSAb6JNeSnHJRKDTEbyYrUF4iY3daSekLqLNNSD581vc7ZrKqr5gvY5hYju2h23mSxY4PQpHHcnhK",
  "key9": "2haNMJhC5KYREJ2Kkdno7zvDWFGan95LmekUWwWSGFeuKpNaGckq29DNoJrwEArVNa2NPJS8rkgT3Qgf55d9SRNd",
  "key10": "nh6nAYaRyydyBjoyuEsCEg7dc1xn5hpGkgiquMLDtGRmoXH1S1hFzhdfafHQJzbbhDsbqkdudRePxLo2UgjAGcx",
  "key11": "2F2wisRB3eyEXDVThpFcmjHwK9Eae3Sd9A5Cf8rVjAsa26xTkxEoPHHVKq3pce233AiCmVFmoujPP116cWuETXcX",
  "key12": "2kUaUkTPdr1UFfCDFy6fRTNHrTybc5gYq5pX4AKbysazTgy64ghjSbQyW836NAEQ2pdAKcth4BnE12yuaWm1eXwn",
  "key13": "4t8wD7W4Rwrrv6BZCb7b1da7M4m2S4c6JLhvu4fyzF7jiLWKwotmpCH74ZD11NK5xPrd4CPkZAJ1sgmdrXaTxv2c",
  "key14": "b5va6nbMDCEiD7zZnVKp7RaQNLHZU3ZAaRTPrZCjVyxZZ23YbLJySN2t6ZfDo6pQSE7U7m5TuyAswa1CuuRsV5V",
  "key15": "hnrv5AdNrMGa7rJxRwu4eKJMrJSJnMaqJL2nUAxNAMdT91AyAAc3ERiV5siVCGviQbNQ1Eu8hTuu4dq6Dna34YQ",
  "key16": "FxRcWCG6J5Kprb4Thn2augU7HDPRkeuMC1tPhjZL5QvoqW7eT5d2u5RS6p87Yv7acFiCdU8wVukS1qkk3JJUYRR",
  "key17": "5H3aVrzwUFMqMtoiY7Cxh4PpQ3SQRNQsVmqxN6P6dNqXQ7JHdDjUdvgvfkAKf19535pH5EdJ8WRZo7KGpkQWd6hS",
  "key18": "DjRqWp8jx2BJ1XDZKy1VXRJMPzz2Y8eWuLFYm79UH8dabjYsGvAzhPQMe6g3QJocth8PPC5CYAq724TsGUQV914",
  "key19": "2n3DZYsZekADhCTm1HbsZGg69w9i2m8SQvNBiU5Gt1KpJkb2SrhyYiucMNgRenj9DvK49FwnGXUjL1hzFD2n5xYr",
  "key20": "2FYtdgesF2y78MQ32AF2zzQXC3TdDHm5B7gL6XGXYi2XBM6rHMMSXSDoj4xi5oDdsxUfnSBm4VJuvUBvcrBswwoZ",
  "key21": "5s67nvjnYU2wMWKxdZU81ae6Sz6T1GHMdRqUJQ5EnSTMsF4yR1oi2x64nadEKbG1g8oVXfYcGTqAaMb1gXAQ2yU9",
  "key22": "2hxuP985X56YFGXqttHZjyTmWMW4sUqcv6B7v6xQMDDS2WotF12kiq5rfbCoQBJhkdxdWcs8xuuCQZVs77TEsREm",
  "key23": "2REaTFkwq29RC86PgpyrzYyTLe7u8YkfEmdB6MFG453KbB5z4icKbryyQvZJNFpWzXgYADBS1CD2jqx42bFXZ5z4",
  "key24": "3xvbKvkqxUC2thRtxvGYmFWmTLPmiSDsJX1dk3SJ3UGaxkbpzezktmja1E2pjrDxsZxsheqG1D2EuD7nYcSZy6cJ",
  "key25": "2btFUmHEcwcgEwTxHT5H8wEZbKgcDyzr9eb8WA9LDgq6maqyrh49G9e1rZqv7Y9H9suoM68wTQgEKFvHoKPXx77A",
  "key26": "2DtQdKXQXn8MzSMFCFZWfcHTCgdeq3AWXPeVkwite9Kv1DVwkNEYq4YbTKafTVP2iSMJbiLkgevteBREfdF2EJYp",
  "key27": "4Z7HuXXTCqTMJ1948zAtLTGe7evLdRW638ktR6R7v1u5Kbu27mFK3ggZiyiWrndsgfyafCTssmhejk8pJHdyHeXR",
  "key28": "2qjBBocPkDeWQKVPM238YN2AsNcAhUzyipB5t3hkZbttC4SXwsgbAkRr6Lhcm28fUTq4hZNoUdFQyS79AvUX4s3J",
  "key29": "56ir1zeKVGB99MSpii3cwJN7rp5bNzEC4oD8mbcSZj5qNY6voiLFWnvN3CHhMjmxRLoZ2z3wiq7RcPJoCbgJv9tc",
  "key30": "2kwhy87sgBRncnxNd8CRCMnsiz3fWuCD37fA5em44499kkA6idfMSFqYSf13YEgxXerTDiswbe6SiYa2NKSQQSAy"
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
