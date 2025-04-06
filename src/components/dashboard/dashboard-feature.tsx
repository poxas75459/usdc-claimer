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
    "218zdy4yQfDENkTfuTySX6U4YVw7nbpLFpNvRcchc4t8ZxqVMMtvcvM3FNehHohyi7wLxhaMTUf1sXueeCCSk8vS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PaQhqTHnSMDu4nX4Q7UQLdd16noJKCY3v8YJHnsuas2UyBVkwaTGgQgL6ScioCD8hDph8qeMJZippeHBEQwZPbJ",
  "key1": "4FTxQYSipUL2E75G6GAiumT74oeV6v8N8be77y82sXxVGrQVz5MDEWzxXPNYLa6CAeJrntgns58Xg4jnoEtJzmLL",
  "key2": "2THKKjwSBhs7eN4gDAjDYgMqFcFaKhVh2fJSts7UWYKxrFss2AgvL4V1buYa3EVSkhTSkAbLjXrodhHhTc72hWVZ",
  "key3": "3Xn4TKxFd9Kt5wyACrf9pEL5zn8yvjvrstPrzr2SdMrG8bCKpna2ABZbwypLpoxjT9MVieUvxg1UfxY8sfshtc8Q",
  "key4": "5oPq415JjzxX6MbeAzpBRfsNQ2aYFam7mzz5Mbcnq5ivwGMmEqjLht7GYC3hvtLiJ5PoAJm9gKv8XxVFyZtmdp8z",
  "key5": "4zyR8ZpDoFqr3p6fgFr9PhDeimrzsAe3gYSiChpQGdFdsviNXcrZLr3WCASQhd9uar948sxUsZhZjs4vHBNRo58C",
  "key6": "HaAs9crAPCFBBDm5PoTxu26HtwNVjCSMMs8fHHvcgnpfkdiyAyqeWJfUM5C6h4Nw7NQx7DnFkK4ppxUZbk66vFY",
  "key7": "4Ebc6WTCKvbWi2M8pvDyrKeUVdXxqWsKUg9vcj73c2ZTKaSFTxPv4jg8Mo5NrjQtd6vRVCRPrtn8NMnrgbjbz9Zw",
  "key8": "55qvhrxP55VjZVs76TnJixgriSfp9MqiggByYuVgvhfEJ818buTGmvrPxanjsLUsT5FRiTN3EFpo3baTiHb6Am8f",
  "key9": "5V6J4oUq6YnyT6RNpKGChonn2XE766H5rngxCEcacL5rSByvuntsjtibQZB56rxvXKxBy3Uk6gM4iFqZxbPicYZQ",
  "key10": "2fTdWGF2D1FxXH1NATwCLppdVBjcX24LSTrtYqx9CLc11KVtbRBsj78pESzTawphxE7WtHGsqxBWMk7WrMakEu4y",
  "key11": "4PAz6xghjacch3im67yVCbsz9KcGX5KRBU9Zw7wjaYMVXDnMZs8MHkneEdZNZFNA3ZXT1eRUBCM57fFty1sFRMb7",
  "key12": "5SN7dTsju8gUDbSEoNfXz2CBC5xttXbEpiQj4j3yx8XDVwycLkyxALBtUq6AfZM97afADbwvz76tXgvWBQPpRkEc",
  "key13": "4SE5cUZED6T1mDE45kvkuqqMC49vRGyM95nXFCTYSVsoMccHpW7bDPs35qLyAJ5ynMXsLCw8MD6DhfA9JJypUVaX",
  "key14": "5BcFJLMXqgka68Nu1gWoHGSaiJqxyJA8nPJ8AYqoUoEs19mqkiNA5xquwEoMMmdwjtFSBLeR5ESiGXQWcDkBchWV",
  "key15": "4WaVewCYQy1GpWXyTSwDKkuMvkYLkNTkMrDQqi85J5ih1Zw48w5J77AdsfoWo8sR6hut3bZDAoN8CpwGCJD2oDd6",
  "key16": "2uWy5dFZZnsQwtVZmBKdNXWe1Ljvn5oPowQP6pZL3E2CDh8zAKSqFAhR5TSzCBZooMLmkbCjJWkmeZfT8c5uLX47",
  "key17": "5gG9Msbjes8Z57ZfVz59sX7DLN6KXYWbbeAmJH3j9jt2XR9AD2hbRdKBgojCnhiGctdbNdigENwZ6aVtP4cab1r8",
  "key18": "47HKBubGvm7GqziLx1DBVBmJAtNnBWhVRApwazCTswSJUGGCzPAphmiiBph7p3o9mim1zwJLRCHYB2ghfawi2QgJ",
  "key19": "5hNwmoSxqaX2vi6r9Zs3qK26QNyRYfYmAMyqthix2zeqJ5nq1KLBoEgwMANbf2b43JMLqThBJ3T3DGSZSPBNXxdk",
  "key20": "EJudTSCB5xeGmXyth3NG2XQnhN1LVRg3FCjaAmmJroQUh1jK4mqYWrQb6dmsNpo1i8b8gZVZ78QYmXytbHfz1eQ",
  "key21": "2GvVtAL1yjpU9cTd2EBNhzrLAGSumzZEBk7H5QAyCSN7Gmm6hHCYPnpqgxnzcfPQWHffsxBBk7kmXZVYBGPgVt8B",
  "key22": "kWdgS1nCoSyYPW4cJqT25hhYVUX1HJha7oAM6naESL8kVM6xyFcqvwDHdrd93LD4NAzG1SSgCiGqTowCS4WjmXR",
  "key23": "4x6XsR78ghZhjS4VxMEfPFT2aM9aQp4hinx4gZM2Uhhck4KrTpUhiGTPa2RtGViiA5f3GDyvm8pZrSomM8oFvi7y",
  "key24": "5kVtM1NgsfnsviwY76LBa9kYU6uBUSSR8nqPxX6EXGfz11BVcevGDyTcK3rNpnopNxYDgSNH4oxSwHr2px3dbWky",
  "key25": "4AZzUczPUeqnTFtEKw4T5DzQu7RyxymNe6seGXbS8Gg3af8BcZZFKGLZ3KphvxtHSVxUgZopz1QiGbKkoRcLfjjx",
  "key26": "4faN4fnGy7cGTWtL3anBdKJCPPF59bUxo3p59rUZurPUMcKjKUVUU7vCh8xSPZqkivkgD42jCSeCujjwUgrJqjrv",
  "key27": "wCpXb6kQELGEKBzet6fXndwEy5oG4b9J3s2yk1cPuZuKFyyrrd8duA3Fb38jE1gFVQ6yiRGhnrRBxCmLtvg1a3W",
  "key28": "29tPmD8YYauNepGKUPLMqSp1VRe2xVsRakjMA513MdE5fMWhpTcj7XT6wwASN3DtMehQiY6YDJ9b4Z7RCzFbdNgU",
  "key29": "45TpuqeDrc4EC5QGYyKERA835s6a3wZZkAAmHSfJiJVATgVva6qeHvye5R162DEa9AHB687aTnSvPYA2tgVGgc2N",
  "key30": "3LnN51LHPbPza5wpfLh2HwyVWs6odrt8burZFnRRfovpYGiKMfa8aEoeDGwtgw1G5D39kjE7STjZwB8QkGHXCrQv",
  "key31": "5mtV2xNUCX9BqEd5ErBedSLwvVviw1G5pQAg3Zxv69eUL6o1rtSDu8oD1JvAp3ftJqyCzcKcfF73s2oSULhcLv2w",
  "key32": "2phPdD3PfXTBHNhw165hT1aMJVJ8zZP5TbV2sTNPEJuRJweVCZG97dfsA3kbqGxunankjT8FwHh3e9gAJA7ZLuUs",
  "key33": "3WGsri38QkPcBDCD2zacfVX8ho7fSZiw1sbZPvibQ6f75PVNXTLrPotCM4p3ZQWBkxtk1Whb6ZjGqPp54XpmbqzL",
  "key34": "5eQHrCZZhhYozDRgNMrWMqBnWMWUAQXUQ8oDiSW4gUdKH2FPutNXAJ2okx6ZtegPvt3abZWdR5HVGVVk4S69QCQj",
  "key35": "gBdWHnoxWBCFNWhewpfpeBEsrf7toeF6xbbPbf9WMC9PcQWa1RmWiLyJFwhgms8BWsexupfqUBYfe1YqJWEKPr5"
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
