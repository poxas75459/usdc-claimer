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
    "aJBferkuukwhQ3iNaJFhpU36of87NiejKZqSNqh2AYohciRpA55kK3sCuAnEL46aD2BbbAyUCZrTp5csu3ipWTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aDhTjzJWCiL5EQ1tyVUsQRe4QYxsJRMExstr9dGyrdAHmSiid5AFfkvc9tYSCoPVnJNosdTZHTviPCycjTUioME",
  "key1": "27oiS7YJAtgUhSGydoKeX3SxbuiaQeUkeKFSq5FAGxmJwoJmT6dPCDwVeud2GtgnzJQGDaiYSRLM8khSyoaADpcs",
  "key2": "x275vi9BHCRT9ZQEFZAXp9dZHay3MxPkHKFoxXaxc7MnjBg7qrP7ZCGfbKco27fPMhgTBZhPfYH967ofGEDpTg6",
  "key3": "3bBU3mwftRQTXsx4aC6CLYd9KH5xTkpGWdHchQqNB5UrxhNxCRmCLZguMT45hMChiXK7Fsh8F2iBoCa345qtceEc",
  "key4": "4x4roWRNBdkTNgHfDFKfVUgRL3U5Gn1g5Y7T8W91AhenxxqwkvE74ghfmHTY78FrwwoAD8xRvjbKEhePLQHzVrKV",
  "key5": "4j6TLDxpWi7xWMpAGqfSuwtQZCTdKUnFpRLeNyc3uXCJuyytSTqpY3fB8s1gpJKu3vVU8MwvYRAGCXbUZZ4AmANb",
  "key6": "qCsVtVGk1GSpcqAGSsmfJencbHbTj1Zvgq7fJww9xXCA6ufAXuGBYakMano9w1fhe3ThBhX6GUdvYfRDDw4Yj2T",
  "key7": "474KA4JssgBAAh5yq8VSWQY6xzkG1TP89KRe4FAtZUoLEm1EvxuEbtgFGMZEcEg62wqqkBFdw4LGpvZzoeLLBnme",
  "key8": "2ixfrx4p4okb7tdmnhZ8Hf1CYf52P1E3dLpuoRZXo4nxc1JETKnCDUS67jniW7TcbehcG5bax72a26wTfy4DEdCb",
  "key9": "YhginhLaDbaqaoyV3awj3WAXETjnWE7Kr9BXCDWYxyR4dX9UJDp5eCrDFv5NksZLZTm8Npfj3SyeKwYZLPNbiz4",
  "key10": "3FW3q6Vka9X7fS8dWCABDnEfvhmxX3Y6NrFjXmb51VLHPVJGK8mYYTHCwt1T7oeM5mEWzg3jucmMX9cLHN5wggzg",
  "key11": "2oMgELj2j14sKst3Cf9sRgvsVFnXkbzoxRCEWfQTAHpSWQxtkPCbV44wdJuAk48JwXjGq1i2r9DTrdp85v9E3Lec",
  "key12": "Um9JgjNhTzqg68gCFMfWo5rKSZWUmjUQLLCBmB6xGAxL4qCuTMfgYN6jiborCbKnnw7pYGnkqrbzbckC5uEBByX",
  "key13": "2hT6tJweZGhFKvXnkvLkdZuSsSPqKtwiHufAXzkKGZvPd3tsd1fPgjYPK2NcQU6MmJNvNZmAhWuMvrEM8REx1C9T",
  "key14": "56ibuXbxVj41St1SsagiCx2E3GUzKfqizT7N2BeZgwMBrCCXhtHjAPZrnoP1PCgZGknefLMmmsT74XMGmyjNUES6",
  "key15": "3JbaCWu9T8teezdz7wrbVh3h5ZHetN9TLiUpKHdnCMexFnaP7qXEeapDXCuTLoAmLbYx887ejT4wU5mN3rfKthTd",
  "key16": "58yov8Dva3tKSdQd1jNHsypi9BbyLhZJF5rNP2EV9YVocRvChWeenwi3YkmA8Ukaib795FQyFqQRacC22LHvwPra",
  "key17": "wby2Fdo8vD7XZeh4biZ1Er5xPD57JedHb2gKHk5F97ZvoRL4hUgwd1en9ndZdEc92CWA4yv3vZPiKoWPmxkvTLR",
  "key18": "UrM6BGPnhfhdJgS9xFBs3BayaP9uo4Hy6h7Pw23vkcZwqcioS2WJc4fKUfwVbXpDbdAN4yW4WTzzTbwBrPevhNs",
  "key19": "isBfd2ij68sQzSYx39byoV84Yo8wBd4p3JtvQYBcHRbMACtncWFUFdGrGDE43Yn5Y2d54NF74G2nPhDmtYrS4Pi",
  "key20": "3az9qa3DvpLngxzUhumZaJMpeJ9iTMDg9BQ6dgAd1SQqydTm5db2vAT1dLXgxdHjEhzqo51jDu8nryfMGNhsfthz",
  "key21": "S6MSFZBZMgJwChyVdoEN2rzK8yyiV9QPPy6Ky195T1eefGbrR2getbUeAHNuKt1ZnHstoyEehivfJ9o35tRiVqN",
  "key22": "4wwPrS9f8gXe4q4XcuYeh8xbhuJfo1G1DKp53jK91T2rtFrpKnGA2XQzDZyMqZk38uNWAHoiFxjfYoTszaRJs7Fa",
  "key23": "264foR6pJm4NWkhTQ9FTgLSV7gXCinYBsDbavpymVuuUGDVDFz5PJAqdUuyrzdcnhEtdTFibakRRHKq21sNh6NDi",
  "key24": "2jdkG8P3p3Fwen7hfwo6BvK41MqDvkSVQYYNhMug3b72558WDbzGUdzqz3mKUzAm28h1a34UfEJkfm5uCoiUUvaC",
  "key25": "2UuYgMBpwTi4y7JgcQ2kEKjoJAo6xg9nQpduvotFnCTvWyWKymADqafUxfUV6xN6QXPS8KA74vRt93gzTdyebuaS",
  "key26": "3bXeF4P3UtvEeoxVmJGaYeqjKw9P612TYD9rC9ZjH5haxa1ZzrLDQDvqiSyUi8J61YbvHeM8yLrDvwonEtfzKJAg",
  "key27": "2bpA9zQVhNxhVXNVuenqTy2rT9MxG1HCRmnjznsoih9hVhYJ5878zqt4WCRqKFeZbv7pFoL7K2h2rfZjUfZsYgjS",
  "key28": "48Ud89ZTznhmPEqdeeRuVkHj7RpdU2xg9kyHDR134fS2QNthHdek7rQBRVv9KRbigfw9orc88stTjMNTos7bMs4h",
  "key29": "2Dai7p4DbWPKVshPe4fFdwnNcQ7HjNFUud6jCXAAQ9HMcXCnu9NWeiYz1NJ1pqCEXWUmfy8VatznC5gneAk8G8Kh",
  "key30": "38hnq73D7PzCV1ZVRz3RD5FsXN2oPjN7r6vrZmHjut1d7o8rpnzAH4KM7Gq6nYheiEj1QHKX3yQTEEPX636ERHjR",
  "key31": "3zogBt3kiRCQmWKyc28hRakAvDEKy6Ejfd2EyebSq1jEUWEbDoKtwkRZ4Dd42XoSWZjfxZpud1ASsoVWq2RdnV9o",
  "key32": "jD7LtW91FCa2Ap48hiSNjHiVPDEuiDbQDSaSjLTT5eXaF22ma4NoobiSteme7eysrkvS9fnYSgmh4T4yfXiFukd",
  "key33": "vGHe7sM6vsgCKidHBAFovtE77m9A7LaoeFHU79gGPBhDh49MuhCn7yZj6iUNNkTQEPyGmN6EKGWhgtWoZkokiuX",
  "key34": "2r3c4GP2Nx4EEW2MGdwejRhPfZgy7wi41LogJbLVvXo53eniVMmmSfvXkQX4LuN9K2sAr6L3b815eegVUBhsAczS",
  "key35": "3ACaumT77KnZUKr6TbX8rc4CFKY2yzz3k9mQoJ2q9UonMkhWhmSL7xeBSJmDiuiKPN5vE98cGeLd4Q87jieJbmNC",
  "key36": "2bUqRrpy6hmU1xErAu745rXSMKr8bHLgMCP1jUgc8BrEX4VgAuhjesKJpQQXJjHcfS4Qqs5MtayrLoUwvuy2RTt7",
  "key37": "2K8SkRWrYQZ9qFSDRcUid42tFWrqjLph5aRPrt34avHc97PVBZkTgg6fTQ5EphrQuVbMPsBSCSgb4FRkznbjULVc",
  "key38": "5QRbKhXDaH82ZyDSjoYFXzuuubSGvMfczu2tmSmJPsp9EJZ3cPruBsGTrHpyMzWtSFkvRtyWBwkM2s59AbtRNhRF"
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
