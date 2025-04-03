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
    "4CCD5RG1caMysui1frzdQ2AfYW39Hv3BsBr1dve7nfze3oJ9TM96Y1RdWiD8yGTmPrWHqRT54qFmvQ2ws8MtrwgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aFZhhoTLpA8jnjKKJNCd3iSouSk9vCnmmbF1AvLf9vc2yoW5ZizwUPYogJYLFAfL87NQnbXP8CrsPTVhGAXRJvC",
  "key1": "4RpyNvRMPAJ5nCCDKiR74Xn7BfsoL5tmUpMWMh3ZJMa3yMGzqWxNTqjDNv5K2FSPwQS5qGhFfCLAn6NhDhFmmpWu",
  "key2": "5uQCRLXJKDuXsjUS6T5unrnZSXDovN1mVeUbePyysvbrttuR8VwcMcUuv2xB11fJjHEQyFGR7jgCXEJyVW5WMk4F",
  "key3": "pramvMPyvdU4NC6uhmkPMYB12CnJ6zPCygCMFz9aHyMJZf4qXKce2W5rwqayKnYkFgXVj29Fz2zqrv452EYNXfR",
  "key4": "2EEQZcgcEMEqJqyXmKAfAi8D1cQA1WbAV8h4S9H3S6AxJnBZ4qjPYjhUnUKVH24N1NqgnZJEi7VXbCN44oZJwcTU",
  "key5": "Gu7MJAuSWaXQmYSJwjfCouoxoKQ98X2TY7CgLZ1iW4WWE8NjKAJ2JaqhdqgHdbZ5NePYCthUPgs5zs7ZBiD2yEK",
  "key6": "3THph2jgL4tpV9KrPvcKue9drMXgDg2GxtCKxynqD2izhzsXuK8VkhVrzAUxfUMgeLcxjuBDAvSXiDWHKt6dfenD",
  "key7": "TCgwJSUxrq21CJg4radbNncm3tvGKAwFS31CQkQsd84C5aLvsQgyDJC1b8UFQvayGH9bF9ijF3Tc8T597TLSGV3",
  "key8": "4d91dRTnYd7P6V1CHrs9J18U8kk8TdYfubbxwtYRGsPGFgmhHZZykUzvHq2WmYk2SGAsFj2Pz3MXNFjQaGjveAyf",
  "key9": "2d8CSMcegwH2BC6WVZWMQsMZKjA7ZYbym8ciPVT1roRpY4o2ViQdQkdWXofassmryNUDc6C1RFTVPbzcQmE8bbQ",
  "key10": "J3PqcugQSqrQP4geqzDntojYuS9jrtKYhGti4ktkpxq73EfVjutMQ7gw1TBggzGvR7H8mBZDaNHQ7pAUQbF4yBr",
  "key11": "Ah42wxzaS88qqDExDNe6JoMEpZWBZwUrVTLDNvNuFELa8sbGhAHYfGL9FWmbN7r3RJqmh55FkkcgZMt3PWvkfh1",
  "key12": "554VVGa759g9SSBMnJRGpDdecGGGeM423HyVQVpdpSc97UAYVkYZTeMpVETiSoXrQeg7BzPqosu5hiKCGJxWZfH3",
  "key13": "32GmvCecubZq2hMY4z9kHDrui5KMK3x6Fzb5Mn2dKL7MHTEUFToB5awtsiHSoWnqnN97M8rGJV43GWtEKzRinkr",
  "key14": "2DG6MwwpMf4CU8VAdv3ePBKEtiJ8SWZKGJWqgYyTcBdET8xLCLT6KmdBVv4Z6tkot9U1mvi8jgsZ6H6kLqyJFC8Q",
  "key15": "PjWVSBarwhzKMfKswX3LkmKT4uRSJJQLFYNjXRx3nZXvCMLByQtRQxRM2YLDZzgxozu6PGV5jhy5piXaUijCgsd",
  "key16": "5wF44st5cDCDZqybzLz4AXRPqUWKLnXJExHVWEqdPNWwkxuAesy6giB8DZNHrGyWAS2WD4NnvH6ZyMQqnuwx1ygc",
  "key17": "3p4iv6Fyu47RWVG3vGPw5Zp91Y3adwsBEi9W5tcJRPCHMfGJ2a5UWPmrmq7kasX3HfMHj6xLpzHxhH3eAeC95jCZ",
  "key18": "27tb33bp7uwxgfLwdDckqLPVAcBAZ6wxNwDeg2wQiHkjknMsdne9g4K39VNRR9YEyHtkLWu3y2xfspYYkMHiDgnM",
  "key19": "2KC5eYYJEGCeukXe44nnToMZCvSMoztMUrScgYFFEgxUMVY4fRHFLze8fPYu4DW1gjc5eaDLrpF6MjaLycFrbnUM",
  "key20": "4jPHPNyajQDGuSHVGn71qFxtiNVrU4FNutw6UsFr2jrVH5xLzcqh7NxFehDoG6uMxXgH4Np5oRd3UPX12A78gbFM",
  "key21": "8d3VLGyDaEGdLdRNKXDSxvdkXxSD8KVPuuSFjaTEH45QYdKwzd86AKRTikD9dsGug1GNCMS7TAm33essNxzpyq8",
  "key22": "5mRdahgaCgw1cvHMpLoVM9znbCMrmtA1mYEPYM1YxSKkkWxVeN8bqqrmxrdRybxSbyJGHv8kgsV197xMxpGk5sRG",
  "key23": "3PSWDFJ2ToioSny33q2fZCBs8Ac8h2eXuJFYrh2fNs6mQdPYAPdNmNZ8Dcdmc1vFMxFv2KDs1Y715LWksGou9MuG",
  "key24": "2VvQ9uwgPycAMrHpNFSZEC7Bj3sy8RMSqUXRKpBZXxzrNHw7VWBUtwp2om9c4ZovN1yoznakHtF1CWgd67Z2XrcQ",
  "key25": "45SA2ircU3D9w6aMPFyQkNvshFU8xaTQfin8bE5q2Pr2wHJ6z4MiyxpTijk174omwZEEkXr26euTp8SQ9BbyBUFS",
  "key26": "4V97YweiK3WmHnZu4qiRH1Qq2HyGzBrtZcfgBYzJh1MjLXr6WLXEynTE1Hik7oWDdkfapgcNp2ELsU8odji1nUu9",
  "key27": "3WCZxVdCBzjwk7TGc6YCRJmQai52Y6jvYJ79yZtuTc2Umcqnsb8KyzNDxNyEBF4v2BwwMoaRPooauLJkN16saLd4",
  "key28": "5eJNBVBEMXv1gyH47PDax19dktjjJo8A4c8BiiaBrHG5cHtEajrbCgCpxYwTaUfwTUwPMFEPkVkYz95Usj32qoc",
  "key29": "3CYDmbwdhnN3YQYPXzrH78geQzAYDVbhceeEJC1GxceDbsST9ZYoDfuAMDDdCMinxEi9X11FfVQXesjF5pgBqSy9",
  "key30": "5QCpbna5XnobyVQi2vtKSZ5zVDwPiDRfhjZUZHRJcWohrjqCH3PhsejevWBz9wNUPnG9L82Qdp1QxCbppurDcREx",
  "key31": "2KNrCQKD9cnLqV3KAcHakqGPbxEqtKkSUtBFhKmz5coyVRubAEGV9KD3PWDHs4d7FjMHeLiPLPe9CukfhG9WGJJP",
  "key32": "4bNv7w3hdRDSEP1uJ56aKb1R8vPSRmuhvz3A684PqL2VLuvyrXBrVKCHuGbJJoKkJrpuQvts4E6VGZantPwVKYMc",
  "key33": "2uto8cUXqrE9q8K7XkTyJ53wiDiSaJZG72PECnUqFAD3aQqW56mZMJXg2ddhLTMmR8panqJMEjXQEt6zqAobKgv4",
  "key34": "31cSDkepDni5xMSUqJFSXpovUz3eRWvy2deW1eGJWifWWGKTmscG2utroRZD1mg1NHScXik59CtvsnGFg4ygKBW6",
  "key35": "4GvZQ6Nv4QMVZwE9HpCDPwwZJ82XpLJKwPoz6cL2HxDVzckwh3yhXtegsiNdqTHfyo28pzWv7uqeMJKokDD855ax",
  "key36": "2KTYZPPegDSf8adCTWJES5zU8KDfXny24Cy4YsEafeEJBmRdtreTgVrQL5jRpi3NgVBpxi4qMnYvmWL6F1SoWKW7",
  "key37": "2LSnffDur6xFD7JAe1KcXs9LynQfRQCs1xL4kHY7dQrozvRxvyDBpBccJP86vdA6fKuPMrApqkrgqATfpfYs5RZD",
  "key38": "gTqs6uNFkKXmWWwmn8EH884L7XQxf8GMjNHzmuWsuQKwycqv9Q7jcpR417aftYKkfbExrBrPW6Zu2eMk66Ku47u",
  "key39": "4AmPNvNWHiBDpHvtHEU2t3PhCxpfwk1yFKZEsNNDG4G8fTgAnEhrHLUnMqNJzwhqK5yEqLtVsvaHy2mBqJvo45TX",
  "key40": "4DzrWjzQATeACVM5Nhqz4g35kwduRnvgnxu3i4WCPUxHwvZzJEzx3E4ingFVMEv6raqfkzTspvpsGfZgki255L67",
  "key41": "2PxiavRp6eGjwDvdv8hStvdtyxGCxdyDRx2Dx5G4LgsuUiUwkf78qDbe9DDeV8rSXpV7i3uvE1CD5F77iqKE8hGW",
  "key42": "vvCuNK92BqY7JLVRqBzwBKCwzP8aTfVXAYazn3EuYbajDNVzm233mW1DdhEvMqauNK2pmM6CdM2JTNAcWuowZ5s",
  "key43": "4XTEp9VAifKHzkTmWHMbEreTMF2wHPd1ukEM8w5umC5CD7Vtms1163tF9Gu2WRzar4EKRhvdbycLK6dbRQdBFm7P"
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
