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
    "5UkMMRt2p9gmG6ps9tT9C7kb6nNfCzwUUZxrhD445JqUngLWeNzM3Pm9pbFDbaRYL42KPdEZ7AKmrgsfpoRSftDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WFHjQsPt6mvJZBaqQ5X7oHKpqGsEBZjXbcwjzuDcCv5S6RkEWdKoGZfXMu5GqLXhaJa7k9rgGPdC2FD1S2vrnz1",
  "key1": "2e43Q75iqvbNN1gpRphpGG9WBnVuPcykou5A1UPhaUNvq3Gf4eCqNaeDoJjQcaWVENGTBc6XTUCpSzZLvethP4DU",
  "key2": "5yWtsH3RcB5CY5xQvu1kq3tiBXUojs8m6FkLHp4QNy8M2h1XJ52grVBoATjJE8PV4jE9K4gBZ6bzb4URhVkdUvh1",
  "key3": "2J8tKzbiBUXPBcTnQmWjfGMAL8NHsfCk4nR4yU2jqqgSQ5aWsFKRq2dZc1WFDmkesnwyga7Z5Cxkdb7ZByykvjWQ",
  "key4": "44auq8FxoTo9WTjeRQXxtaj8iQd6W7VSSiF5UpE3jRkTosw8kenwiQvznREQDQxxbJ9vVEdF4TkTVn7cfj3uGzD6",
  "key5": "3BJAzifXWUDLQvm9j1L9mBauGkbjzy8hCrs8tDu6UZ8PkbQxqHY6KdEPKfTa7Gykhv2VAwy7PcCcjC5txdvBGvUj",
  "key6": "2D1qXRxEBW8rhHDpsZECoaxjxtzG4PMA25kSXQW1nhQpsCqHUYbbzdjSVgW9nyXup768uaShCdHgrnQN1URAHQ2d",
  "key7": "4MvVay1AH8SdULKrvhRiqxGu2nd5DZFwUmY48rEm6xrFeV167mX51F8Ar5feEeakVaheZN4vFQDZqop3za6ikPUG",
  "key8": "MAF3e9QbsaTXfrdYZnVS6rU43EWjMwtyk56Rt694X9pLyNsRMHzGNyEdFn2iJKRfZRMp4damevLGgVtvBarT5dS",
  "key9": "22J1PQjNxt4Nngbqxn8LgebYWUUNW9AkmXWhhnNcuPqS87ZKQ8Bzhp8V4XXYrdZ5rShwZTxCr3Hnm4ZnjU3zSV2W",
  "key10": "DQJRPu2eHFbRtEuTyDP1JV55b7VhnznXzx4iwQHWSPpD93n14b3XkoDrq5anRdPnxD5yahVisUS7Ek64niobgTS",
  "key11": "51A76innQJmNPeR7aBEDNCaKWFyCTvCD4BzkRdoC4QXgbgNYbPXKMrd2198QgDxF7otTpnF4XLSYCDp5777VCjHc",
  "key12": "2RAMzEfoeBS58mq5h7wJxMUHhmhHNHn5Yx3tvG4MAejU6MK2TBMBJoDtkaedL3gGcf7txf5f36PgvamjPJ76XHzm",
  "key13": "2PkKpYBJceUkGjS41sPFnYfQVvjA8wnkEMACRKMcVZEPKy6b9Wa8BhPtRKgKBDmRE3zMkR46Ym6pGGHdvsZbw3S2",
  "key14": "5itnFzBSoULGgPs7rzj4rC9WPh8JJgQ1Zrqnf5Xjc84R5VnvDkjcV8H7H3AvyA3Lt1MvJ8MG6GCqYtRuRnyTEJdt",
  "key15": "3QUWBtrHsDqZAxMTdEFRxNyVrqxHt9DzLVBHQUEp9iwScEZsMvyKLab9iuw1UaJjhKheL6vu9tRhNWiyg5yes736",
  "key16": "5qbHaYzExqypEJHzK7g1hpCZdjBJYyLM4fee1w4TKv5J8uBnwUChfZGb1mSVE28oq7jVBJUc3zkKVLAbuSASdx5P",
  "key17": "4HhE65WuqLJD5aZSC5mbciKqT7KVifgRswHiEt7xtyWVaccCNgFJbJdHYkB6TPiKQPnZ1srJndMNe3T9ygtAN1XB",
  "key18": "3DhEvXy6Nh651fuBDRo1NvA6viaafgL7HUvWK9odLWLrWCYJPrc95MvyTZGXxfBXfW6B38tsY7JJxUmZvLiSWNy8",
  "key19": "2cD5kksrPFPYdhMa9mg8QZo4V2wDE1h2eBqan2vVMVD871RM2GBJAaX65gg9fEkRTmvbf2M8A7Bg3KvHdFvKxwgT",
  "key20": "ToFaaTWjtKmdmCjrDUsSo6maEPN1BkpiXn5KVb1k4R5x97GR8YKQkhj1chfmDAJ3bRbHskPKqCrQ3JEKLsme9a9",
  "key21": "2Wt7AMXSEtsPo1nJ7ranc3SBLFrazu7xbNgVApzQm2TJYynVibwtdUJKR8nGwHJ8fa5rHuU2C5dVNr9pqYnXPxGE",
  "key22": "65mg6ZzNAo4ke2vgprjHp4MRj2tfGAwx2QURjqoBQUfgxm23K1B7fdH9RyXZaMtMf64RhutvsSbBC93wz92mQfv6",
  "key23": "2dWmCpyfd2gwQdPmNehd3yEPHEyPbDqf4oEaND8q4e9HGHgLYXRNVaAnas1yK9Hec8ULtJrfvTfVhTkK4xvb5VJU",
  "key24": "5H6q5EmRjCPU4hXbs2baUifBWMJWzAtTQpSGwAG4bVScBEgzUaLE3TjibzPyp8RDFuf7QwUaqQWkvEUjLweiW6tR",
  "key25": "2mzqkZGchMa2cUZLrDQCF6CEzG4qC8AVRRYXjfTbC6NJ1U1PpqJuyd2tEdF8QLnjEWXmNDj9z2jPTGzWbMwXpJZv",
  "key26": "56KU3MisDnta2CtWAhPGbX9qqmz1ygXxeTuQ8pdUWkULiAcDtgEPxU11fjyAmskXXgh9qUcH1Ho8jkkw9uuugHry",
  "key27": "563czV8C9FFDpxmsiBZhDuVoD6TyWtMSg2SgJZBZAHs6G6rJHyL2PkhbheGQV9uHehswBRMiSH1Q4fKxevrNWSAp",
  "key28": "4LaZx8Y3BspUxfkDs7ekxREKXY4Chrv86Z2Q62Pvp5H41UkQon3Sso3gjc4cPNa4rohcm6dmdtQYJWXBbxBi3eA",
  "key29": "3J9mxr2RPGGBaD4gHM7iisfyj3bRh7DsVcMrBFndh1yZULZJNJDYqgdqdmHA89wnvmn5w75pewGHDNbjRw5Jf2nG",
  "key30": "58haKykSukWHNvYFrRRArfbWsyUsTFw1GDaRLwKasyBU9GGJMZgocHfJp29ej9wQJLV27Ho7mFieAN4umWbog286",
  "key31": "65jiKuKNDAaAnS2Nh4DapKVLuJKPMqUqXwf7MMYjRLdp647fDBzAvWenyUJK9LbrJ2Xffa6VqpThxuVxXRVkNp7Y",
  "key32": "47wp82iDQ4n6vZjAsse6Jbhoup7c8923WU6DofohSKiAdN8gbxkra6Sn7FMiwBWBg3gRL3a7bwaF2H4o9aQFdLRe",
  "key33": "4DdaVbWdckU2fJQE6Ap5ofzrxDwJxRMwLxB27vLcYapEFWXcRdUYonBBu6ycZKyU1gz4MYtb7cxya98y5qTocPyw",
  "key34": "5UxSCfurkiqprYT5z7kLrwDJB8TW8tgTL3FWkRqGJJZ8ZMDfv3mv8jBx1s4bW4k598YwmNgPTLd6d6BopC8kHpnL",
  "key35": "2rBcYvEmR2ibS4qsrxQYu28QssAfYMa9TzdxPjXYKRpKyitrvx5GcCsugUx2C3P19BhdxfHzYoiYtkTSap8r4VuE",
  "key36": "2LokpeYzTcTrkUc52TQ7Z9tkfd57F7rR92h9k3MKwwAhVLobcJVSkExPUDeg8pYJ2SbNsKQuK8TjYbVnfzky3mSj",
  "key37": "4wPsXAs5KiyyfKogRC8rtbLtBfDy1PzhJCJC5pEU2Adt5b5nvgiSpJq97yXzXh4U451nGBfrQDdJnMPEUjRYCkho",
  "key38": "3PaFxDbTXgVufA9DUUe6KBEQe3JGWpNUreDcR8ZiNxFXi4tvztxYBeqeXHjr4Qd5S4B324iNBVsaVsa7UVcj2M9X",
  "key39": "4QDrJa9XmRp7tmcTBuzZQkYPGBquAaQfG8xEMk9xZQ5qjGeUPNVZwJKHfi64tvA6pjmtBHxMQgbjdo9Qfmk1bFos",
  "key40": "53xKC2Y6H8SDHrKCrPrQNGXDWXn2vnuo7qdEJwdce6epb3AqpPFqdzEXg62CM9h7fQfioXi5iZXPKQry1sN8PeP4",
  "key41": "54hADNecD5XFJCv4fCt92yLmwhcehibGZGHGx8ci5kNBhea9rmmQqGLfEHP5dY735VSg5QBa64oC3cePjo6X3EfW",
  "key42": "m254WAVds14okyhkXivh6wr4DaTFLodE7S12v4SbpAxXFAe2YcipDiREsSMzRreJJmnGvkKaWRpSnMAD5nd9QUo",
  "key43": "63dAFHn7irmJN6ShXUs4sTATtN3T3JAXHrpfbBRuNa3AMqCnyFre25aFWrLFFPVKTNeK19Ex11861bBwRXS29hfR",
  "key44": "4cU2riuTL8xtuxFqNSECKje3orAYSgFkcrNp4HvUMATWJXRM7wEZ8KbBCGohb5PCsugaxnuiZHKm6SsWTzKLnx1E",
  "key45": "4dJ6WAb1Lp6KeMBq2jnWVu5BsMAHgwAiWnmX9AzxqhYAMN4zypnjvzjD8L8QNiApp7S3MEovcC5QqZriLZSEpGB9",
  "key46": "5GZmEAU955w4mEjibUyMsywuRhhPTsk25sfv1DVNmM5pHzezCgqapwrJac2EfYxzpzWidi8WL1mGAyMhFrkyYSij"
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
