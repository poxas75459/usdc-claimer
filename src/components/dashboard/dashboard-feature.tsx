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
    "3mC3wbQsCuCvFoMgkfPwpLWKSgw19DBCMwFWnjBgfxt26q15ttDoxf6mwkUPyZHipQs5AGcrwvABGzr9p9W7wbZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mn2MBMeX9q4X3gYjP7eAEYRGRFgs5V9qYt3YKScryFWE9GXKUqkMfY52FP1PYmyikNFRVWQxGdf9WXB47kHoWij",
  "key1": "KeQ3iaSbSb7PmZTb3gg6baGs4f31gRDw7PKgSgJCcH46YZSPUTmQNZfaCkR1JzND9bpiS5Yr5orguPBjRNURSmd",
  "key2": "2FoPzD5rhRKCcdfkwn6rxxEoHU1yvZFG8S6B7zDR2LoCXpLKe9MyhnTfp5WSoMU4B2hizrkfwRSSB23yXFnbEVAr",
  "key3": "2qxmFRs2urZkvLZGQdCJ5Z5Kbhp8fx5HhTasTuKwPUcNU3sc9gqvrvaWUyUC3vd4gmoffV3tGKhzJcfk7EcjGkfi",
  "key4": "2HihM1hoArNbH5GPmHbzD7qHbNyb8gt835TA9AVSfxUDFubAwCBi8zR5cxPRWdJbad4cDLBu1m6h1Zp9fZHNWtxg",
  "key5": "3nWjWFoKFan8QitZwETyFacs3wzRdNum37uKVRAYv79iLEYaFW4m3aQsHrpHmYAvX4KZkvVXzrW7738NeWhHgVHM",
  "key6": "3W2rBxAfhb2tHCXU1pUcS2L59PTXZwy9vvjU2hbKJRQ21nmvYmx8XVunfwEUFpnkPEgTMdEHdmV8tbRCRgYjpZBd",
  "key7": "3wP3ih2kRwmgGSYC7dEqbx1UtiVyzu16mTRkVXL9QnHYQntkkU8LsmJ5FejxZaCeHy8VS1a1yMbNTQ8XajK9BkyM",
  "key8": "4iFfHQfSYYZzQxk5gAZNuuNNzNY82s5iCvm4jZTMLPY3HjcaJaXTh7Y746uDffV2fWpW5tyUHcRiBg7HyhGSeBrQ",
  "key9": "5BMtFa8YHPqc76eJoPfBaky2gQEPUabxGM374vcKRB43Qx7YMWViNx8j59npoXs9VxVZX5y9GnLw4ESJAmJhiMsw",
  "key10": "35hPQdkmQY2BEYCPQEuoNKrAd1g6dYYAyZCkLSxjHo3Diug6B61xsGAX255TPLJZr7uLUW6m3SU1pGsfkMh8Z1D3",
  "key11": "vcvAVeKo4uRPsZPsG3aDfN2MA9EnjdJwxzkDLoDAwbomHDBAJe1G7G9eZVz8dYcQGq42fo1UN3mgQTwe4K2tLt1",
  "key12": "2oQxVCSXSUbGyGuA9PvSssm9WiqXdqDrEh7d67YYkcnfiEDvVugjYUw1SkkamFNQV14RixfRf5xJwasSCT2vMVe1",
  "key13": "27DbVYJrqNv9MqNi54o8ugZhiwPJtHNzh8uxqBUHcdyPZU99EHP18SiwaNaqSdj4n8TREzYSuUTrkxGNSBTxQXUT",
  "key14": "3NAxRWjjPnotcfmdTCA9cUNMhoDWhcF3A9Q7msGsWJymxqkwciABgUwmJ8aeXzcQs3Bve3jPb7PXFWQTF9qHpzks",
  "key15": "pqPd38pk72Te3s6KCpTGbn7UfZ6RGy551aQ3k3whsJhPvf2cFh7wHENfkkm7iviMrKy1Nzkd6aEaREhCxpgTp8o",
  "key16": "63bmgiCrjS8r6CaGrSid6SMu6wfjzSp2hrZtrZ5NvX9JhUVtAnYiipypUWtmmfLGmKQRkeWTjc8GPe3YedrpwM31",
  "key17": "3fssWKMdDKxyWVKFAtpS3WmTNUiyK8ThBXphSdZ4S65DXZ29CU2RuqzLA3uxLRLrYNQVvPxY8juFoK9ykKac71T4",
  "key18": "21HSab12PFSPx3AfqS49Xsp4AhnCgATN7RywKKe8FT2kGRQTqBsh54cofSX7uAWGKRrM54acaMGFcHmcve5kkwUb",
  "key19": "53GkbQA1XWBWJntZLgkaUxpxm1aY4TsxJc7cre3sikgByVXqy4bUcJye81SfFmE39zpM1LSeXoY8M7ShK7JDH61W",
  "key20": "2gnHrTYxPMyCcc4phV7zUtvA2NWaKhc4qyhnLToqiM5hWYerm7uDvBZ3Vb4nTP6GsnmPTBKmVymrUq4P8feJ43pF",
  "key21": "4NE9C9ie8JK4gHCpy8djVGS7w3B9hwkEt922KtoNi2QJftuqzYey6qsW4kRrp6dMWipoTvDmGE7537XTAykeokqS",
  "key22": "qERXrMKQjyf8sVPoomNdKC7rUHswhzmUdUQ8woA1gsGSDzcSNyyeod4ztdjBVo6Jx5CFVH4pDBEzYcdJsqeVuaS",
  "key23": "22vgwqKpduec2QvmxsuKgtd93aPu7Qw3F63nbpVtFhbkEkbTsC6jqFgcYrGvM3caP1TtZxxwE9UjgZT7XNd8Qkac",
  "key24": "3tNeTFWRtsT3VyLyZ37etojp1DDd2L3miMgedyh5pFbHKp6T8QrWU878fdBPadjJ3wUf3v53dSEU47jooTL8gQfF",
  "key25": "4GTgW7nfguteZGkGWaZw5tosnq3UzbkYiEKC5Rbifoy3Qb7sX2hLArvRCTjtYFpbUJRJxSZ6BLHPq455PbSKdLR7",
  "key26": "36REUdq7NHrxDox5H6w6RUYH5juyQW4KrPfmNDKuhq3YQwq3g5fByHzrDsRZth3e56cxmVbJDttwed6Dq4W7Lbi6",
  "key27": "3yAyncUrHAFtHHqDAi8iAyLRhiwLGQhPYrLhmfK29PTCxsmxqvTja2NMJh3tLiiVgA31TQ444pWCiMR92wEMypF8",
  "key28": "4dnH82WeBgSk4wmvEBzDcCAMkMLeuq6NHNPR9oQGpJhBms942UJVGvh4JXgrAYyFYAKSrCtt4sUsBazMYM8jKHgr",
  "key29": "RBVo4v2MsLai556DKHo3a3tAaYmZVAV3b4t4NrKfvfppyXVyxr3nov7naCXco4HXgah4UeAe2gorHJxEuVoGBmK",
  "key30": "33oaV9TNT9HdPs2g15rg6j492omoy7vcJaLzyduz2CQxQQEB2KLoUYNZioao97bTYsd4JoxMCVCe7zvVbbhiaE7c",
  "key31": "4mBP7pbMGJTbVtrgji7zgDE5SoRB4f5NByJyM5y19p1NNeA9nVbJ9BePuYbteJwp31arkAs2bkLgoaUa6EFkZPxV",
  "key32": "3MWMLM3dkJRudHt7KTScJFJzREVS31rjuCDTdn4iF3iGn1Dd8b3XPtvThs8RptQcADUeYQCEdqtB1HgvQPndiJQz",
  "key33": "4uxgkgZZWg7LeZFESRvPYKBvPK7Ltc2rCYBCFCqRP7DwN9bZnppMFYBb6VfGff29wwrT2GU4rBXy383oyxuFFNV5",
  "key34": "5JhfqsbLfZe9FnH7kq5geWeJHfVxFWdhoEitv943ttXuQ4JqHGSf2F9QBQqpmLedq33HWVVmge3wu46JMjXeVQEd",
  "key35": "2NNjrY9N93XHCs8W9nLY64zmLfWhja3aVCPo5eSE8n14ccDnUFuq9trnzqx5BMg3e5aTiof5BFoG9xfmYVL8mdSB",
  "key36": "fPgbWGq5FjNtV1a8cUMqWvqx4bASyWwjaUeLJDq3k3m6arQtD9dEw6Khpu9Bqqq35YHpYCmorHkyf7DcLWtTEPV",
  "key37": "2ij2nmz55ocj38c9KgNxau98u8NVV1BTKtf7ZkbPBmAiwr6VqLJ575734X8NpLoAKaEkk3HqSsfYvr4YAHXF12BK",
  "key38": "32xGHT5fdhtukXaRow2sVGuEVuJ6z45gxM7quj5VoTT1xpRposKi4c2emmMgLfHetEQarGJGb6YFvLC8WaYPiAXF",
  "key39": "G6bSeCBy237VksBswYydJPRzfXQU1k6FQQswB6RdgPfPRsozp513SXyJqcLDvmpWJmE82zYGtUJ93mGGEgsKbes",
  "key40": "4mFXX4nqbcqu5cK5XsQt9S8oGdP88jc5Xhu3bSJd3EpCQvgSTStNZpSSRFru3Ra4jcxwd5fLNtvG7AmW55hzWqkJ",
  "key41": "28cPgbquN5z1Pr14co1M5VHuujExJ84xAirmrcXCLagepTeYgSjH1xqauMYNvqHh3u3joeyFaVSJPKmAEWwvDMh9",
  "key42": "Ljchm2jspLcpih6JCLivHCsbj156t2VmVqGB1UHeY9Z3fxAGJWstKDcs4qmvDqsERUeckuRzrAbc1aQ2h5DDgEP",
  "key43": "4csx7mJwCFGGax9yTVYTauYa5bCPBVxrbFu6oPWk3uFzeoVGB2NZJ1HXenAXrrr4bYacWVqP84qFUzTo61k55Y32",
  "key44": "3Zin8wyemq9ZdTNMB8VfzfB6zcWMaUBEPqidXVbFPNYAsPuMByhErv7r8pSiHzCTbbH5XUEbFRkARCCCsUcxgfQN",
  "key45": "2DquJBoXhPPPDuB4gkkxzfwnvE9JyXHjoQFzDx7pFauUAS2f3rJZxBFP5xiFqtqbQ2cL9W9BGRXJdM6eigiLosyX",
  "key46": "66K67KuuQQESWMYQZo3m9BMghgS16hZ1agsocRC9C8wf8TAQVVgtnXJ9dhhcBCwQLXWz2aMYeFpinM9qaxfGCHwt"
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
