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
    "3eMnTyxWnyaAen5TeKh3xcVvx2Dn3NYRfgPYSGUdkvyAAQmnfgY9QKsbBoK5FRuV6wtiavpTpmAcDyFhkCr9H59z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5shSCk56MudLrzxRfv2psGfK8HPSNEefxJNPretbjCb8od4jHKwPJBeq1zES7W8uncKjfULerYkdK8FK5Mp16U3w",
  "key1": "2f3FX7BJnkvw69ThMnW3pjjeQSQFMHFqVqX7F6YhCsa9nCsUembvR7WTFBQPhT5s7dYjok5Sox2vcPZiMvBTG9kM",
  "key2": "Jguo9iCyfPv3EnU3DWkH38FT28VSFXrYJK4eSUFSyLnRnYRrgKEAcA4i4MvfmuG6j5cuHJvhWuaFNixD9GZX4ek",
  "key3": "39tnF682zZSeARZWgbHY27JCkzo4UCCMkj3pZ8R5CQnRGTH6Hnrx6tTduXugYvd8ToXtfY9LFfWsvQ9i592nk2U8",
  "key4": "4vwvLZkWPFqvxLTfDgMSFHiqpZ8hJMen2duM6LrcbHK78TD7dt19oJY3duFeL8koqXUUSCWnfqN4cUWqzRoLUBmR",
  "key5": "5t4WXUzxb1Fr9jMERv3GbkD2SmffDtRtWNoUZ2bDnMEWeF1tuBpvfqatVZivRnrxHUb2RfV8n77cVv7f9Cjp9smv",
  "key6": "3NucBCPVDK31aBTGNVEBWi5bBHKJKe2dFKfrWc8qxqavjmHea2DgW6b4BUqRzrru8G1KZfBzmB6frMFHqaj7MhPG",
  "key7": "4M9pHuJkroEDiYji9FyVsKqKai4etLExqkxzP9b4pPThVkWv4zum3vLYsngr3HayA3HaNJKdeBTon94UwQMM1Tra",
  "key8": "4vNRaCMNLfY1MeQBt7pLMmKSwKF1CNFHwR5W5ZEXUPqhYirwBLLaycKDj7nDHruBqVttDDNWxJnJUC8dS7PP5EHj",
  "key9": "5m6m5kqGjZSEvtgKHURTnN8k78F3V5peED3kfAXjrtDXSJLFLe9q4mb7tx6AHJ7B9P7BFz898Ty7ZVdS6URyE7K6",
  "key10": "4hm8Zw7d5DxUCP6hUHjUQWEXBj4V1gYiBUwgPsK6QSoWbstYn4w5CMXknoHhYiqaF9Qz1TRpwMQJTiz3AQKJqwwk",
  "key11": "3vECJvSC4CdbpXTycmdeB6s89WrkEMzVX5WGg9w9fzFdwE5CfcRV1zXGfCDsQbfhttqDggCaUkWQijUTgDgYAJuV",
  "key12": "2QBXGpen7SjmVUNngPcM5P7ddhz5Tb7kTGEq31rRu2vAcwUWqTu5JaWBhyDxSEFnGhCdqBy239bpH6wM6ZqhZmGb",
  "key13": "3Jog4ntGXzdrN6DNcKDgk7DYsFa6WwUT4ZSvJQRNHCZZNRsUSwurH56KVfpEkCsByLyytsQxQHfqBiYqNyVfBcbP",
  "key14": "4xQsMp9g65XbdCtWA5nneQezWyajs5dkKcxKMFkd39dxbLi6BUcURPwauh5KfzDZrsdx5Ufn3foNC6eeSzcQgkdC",
  "key15": "62DHKqSwA8AFcjp62xxdwzjEy94bgKFmFa9mj2YiE8SmpFNtK4Ey97xpMgxw9vTCwQk235gjdd8H5icTJdMDz5SN",
  "key16": "585Tgjv4PMe57GysFAEnzkJXw3UWQsQCeyvcG6iXtXdNhYNQDJqA7PZnHSjmmarY5gbaaHc2pKEpvPXY5SXRLgar",
  "key17": "2p2UuU5T9CsyAZzwrcB14RmicQGXhzYTRUQYz3EkyJ1DoLSXwcFRyQQdM5ofuCqygzii3k8h7DtGFFtESvKRiPPw",
  "key18": "pGeFkh6kBPZpfUxA3b7ZaToCLLCaWiQCmHE3P8ukNEP91HDo5JoHanFERjuUGmuPQ2MQsaHkxsii1b1LQhvtUyk",
  "key19": "3cErYizfj1ZLcndCv9njpA3KQ91JXAeo4jUYSMb26GWY1aW9RAA8f3upMx1cN5wD6g4kuPd3yrXbqahUDoJHcRLX",
  "key20": "3gEx1TcPoGa1Zmopb4Cnq42SDpRC6ciJfJExYHF9ViWboeGMEq1zDAzFpuazMb2bABoypxFso87syvLAGY2hg629",
  "key21": "4YpeqwJuLd2G1LLN115oiq9tgWptAt5JTTvGvb3dKk1wXeRDpMVux7KDcsQUGugtgmmN1YNResKPRDYif3AJkZq6",
  "key22": "3kSmd2fFe4remermzNB1MjQSJdKBMmP8oGnrDyZoNqqwNDW2wnATavxBytKFWUoM9DarMPtrSrJrijvZuzikAqu3",
  "key23": "5BWYXz4RFD4C5mzs7RKDwmbmctt1YNfham2Zp8z1JFBy5UGA95rFDHQ2BQQwwmYW32BVMxkS6zn3u4o1qXxo9Mgb",
  "key24": "675p7gy3Yd59nokxQ4dFrWK1Jy5tEAzLVqREBF6mnzp3zHCfnSwqk5PkrmbzuFJwGL1Ktbmw8ievPs4mHjoKQq4X",
  "key25": "4Lpn3TY213thGuw8RYxYvhWTvrJrTfmBcXThgAGcYbS265yyrwBvxShXUm9Prph5RMRDAvbveBZDR6qiVnHgkySg",
  "key26": "41Nu9JeaTz7uSBp99asSiQ69fLh8Jh6UakEN3fFwbxzxoyZX7Zt6AjBpMRTipQjMfxccmGghM1zkF5RLK9bRqJPb",
  "key27": "2tiZ22cHsJXbAMeuiEBJxLiUZsPHakFEM7EqUuDYYQqrzhXhPoNR9m75mQozLigHsPFcmpQEdGMRK3dfReLGURUL",
  "key28": "61iZWNa3QELbnzyXaGPxdbkXNadGBdddew1emkBNYsYGKnPbqDfN2PTsXrBAV8FSbpqmdbZF82aDKBzqBocUfzMJ",
  "key29": "125P6hJ1yPVmtm1C29DgQ9VgDfF5sQ4HYn8cfSg1PsUVbEEVye27vpVZ2kumLsuRkAbUW5DhomfZqTHMRx9NLtft",
  "key30": "5n3s3qZv1XpkcGxE261ni7AsN2VNisw8nJ3xrsiEMgpDT6ik5fUBQ9ij8EJ3Pd2F7SvKPAQGvw6qPQcjx6KTMmmL",
  "key31": "35LggW4bMfP9MkjroeTTJRCybbsLFHbMr8WmERUNfF9XUCeEDq2nDdE7cU27H5eAKsgWgEZwmzos1cBtQQdmXkPU",
  "key32": "2qRBfUnmCVXnHN1TEmsEy2ZB2JEUgXwC8v5BnVxHPr4aorkmxhuYAjGKb2obVNnfahoGo63BAhmvLmSLnGakugHb",
  "key33": "nVKhnXuYf2g2abswZs1D97XnhVUQ9KnuNR2QxDE5gHwstGw7nYvSHA1157mnP94nZCQJmezVQBW615PQD5ScUst",
  "key34": "2gt29JyTjvYga5fQAEdPMT21695kPMHHSJuY9ZvWFHPjSxcft4UN5LdseEaBzH2s1Vykh3pjSMXcTAXfhcb8LFKc"
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
