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
    "65NmqxdsVQvHCrs2vWu1v7TDD9juoZP7pREd1GSwoz9wfthQ5xoYLhUYuBPYu9zRwVCWSHFtmcitsLyr6EUSmTXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fbvDQqYWkPgXUwtiC2D2osqEZ4LmY1rrsKVa8aGHExWnFSQW5WuyQGY1y7z6RTf2G9sYbp9XrWPvxrhm2x2KoEZ",
  "key1": "3KZVWFvDroJXA7L46nrPrV4rwejGL69zyqBbcojJLdr8LEqEJtcr5TomULVfiyJd3CuMgh6GT22iZ2Xf9EDquWEd",
  "key2": "VHPWShi8Y1mQBusQLQz8DpmMLSUqVqWuiwKmjV1c9FHHfR6f5qQ84bC1oK89XXmhrkD3ukUtkB1phXBHWu9VPon",
  "key3": "5SLvy36hQMNaKYPLLJH6E5E3EtACJ8xLNtKTmNvVw7j8Prt7ca77dP8nW43bFaP1yhm9b6GRuqPBDYgVgzK5qy3b",
  "key4": "2zY5vw6a69ab6hW5RXYANeswUntnt3hUeNoh7XLAhWYu8EJqM6CKcX5WbsJDDDhxaTLmDH6cbQA3G9CGrmy676uq",
  "key5": "4qGZgNCo6uunMPqASrhgjMjCdjikAKH8e3s4cqqcXy6F7pwmnqoFbBH7czytMX2pe7upwqzED2oiPWQJ46AyHRMg",
  "key6": "4TvB4ok1HEqJSj2QhdgvRAsYTmjD1pJ2mk29SJpzzefQ7CVzmc8vtrUmYtxsNfLapNsw9sNydkwZJBiVw91F1XUX",
  "key7": "2kYGqg24Lu7G1hKYWPQkzsJdx73z2oJbnwoi4sSEkJt8cgyEV3fXPhB6JV2ZbdwLGZdmgraT7racVouMDhBrPTGr",
  "key8": "4D7Egxzk4V7s8xJZHBNYp4hMTPtagrtFtKcXZp4xK482bp9k8E2BDwgGPcZgcFbnjnQCPBo1xiCMbrQQMTnZyyAK",
  "key9": "4zg3NDEn3TEcgUYxnqY9kM1QPW71dgdWzCyGPcqu9bnfkcr4myTVqBsm7Jc6gbecL1GYhXdARENf8KrVnzH5jTUg",
  "key10": "5ycWSuWPEpYBhVvuB5e7xCDGeZfQ9ouLY6L9erEocd8dq8NaHVAWihp5YnF6pFb8Kd1qcZ9q8WYhYYhmhu13oE95",
  "key11": "5x229y2hFniK4eBJKapfT8R4chSu9CtgFw8ZhFm4MVsj2YHhsZDvak7oraN9QNxhwcykgBtdYFGz7N577TgWSPPj",
  "key12": "4m6Ps1FG6JwhwEjnRrmtL5khsVT4mpgtY9AqyQnU92EiLeDBggChrpJBRx9na1JxTyDDnaJyibJDUzfesC3pbED2",
  "key13": "c68Pwo2r44xCLUiKRE4kzyWNZR5m9qbTx9QAUGw7sDP56t1gasWXFN9eJecueGwjFzP8Y5zSUkdbf1f2s7WdPJ3",
  "key14": "3XbD399ZXrMagCfG4j9gnShYRw2tYGNQ3ynZoYZjXxk9EqTNuz1tqRfKyTASriJUkvjCRZh3RS5sQdnr6RYZG5jM",
  "key15": "28St21PymayUZ8RZjQQAm6c7J57NkN8idCZ1rKWHs5gH89Zojqz4BoSNk4tgNhQXb7yPPEj9F8pL5ufEyHnNCXV8",
  "key16": "Fyi5iTfRbHfU9v8WtouZJKrtgaBtXfye7nEXnvCzbae4TZuMdcR8sS4zBX7NVpHcUCTPX5V3HPpRSd5KnvR5SUF",
  "key17": "4PNuURePiFJN642syemJ9fcQpBQQ7BN1JhkYWVS45yRYgo4YFkqbpXZXDiA6uSU1C9VMPXNPNvh9mqy48LBdTqzS",
  "key18": "2eH6kupZQpjqDQVB6K1THg63uPdYKJqjbfgZMEShxpQT6ARmhT1rgyajiLi3B8kh1uo57Q3EsikLisVCifjhkNiD",
  "key19": "2Rh4YHCPtSFaRRk9CPCjp1F6Lch5yNZPyKkkvGWoZMKXdZofsc2ZwDJQjfD3hxpXmJkaw2QuKVspkHXFNUyg3v1s",
  "key20": "PF359A3ckJVaxne28zLmoNERuqYnGWgPA1FSwZn4V8dPhprbw63cspRZUQqoXjyMm61qaWyKcxfo1RwrCX5WQDy",
  "key21": "2Ff7y5Swi1jLYAwrDJMMums4w1UFYy6kjBXtco5TLrB5JA8v4pTfiTpLqe5XytWQjcSfKzJ8GkJETMG29eNVpVzi",
  "key22": "5DhJynatb6dAmehXoJTuCrZ1CQ7vWJPbGfZxNVdhYvCo937xW24ViAgbkCgwutTbTFLBmcs11ofWjK8s9VwFnBbt",
  "key23": "23y8eMXnPcxtUr7hRbNgN3we5hP94aqMF8GDMAyvDo1HEybd25YpNiigmLCEQ5Ctx6qm7x6L75Hj4af8gUc3jmhE",
  "key24": "2L7LwG9HrVXKH8qqyucbaANkGjNDmyrGqQnsCJKfUaHz66hVdKmDvQ1oTj13ZWcfXroMXa87DKa9yS3zioB1vCwa",
  "key25": "25E6nsLKbgFbViQfu4Jm44zyJ8GRJJuKHrkeyyftKF9JKc13qWiY5MoqwnLTxvzcSJ4WB2QUknvSpTVK168CrFf7",
  "key26": "4AK5rA5uBk1aq5Wx7RXbMGxK8Do7peieT1tukSuK9niDcdSoMigCngKYJP7JsfrcsmGXJR41foFXuhdU7F22FjeQ",
  "key27": "2LJEQNS2EDZiDFbK37rEhNxd3MrjeLWpYTV4pkA5WXZQTa7G63ZrMVpQtECGrRbXHnc6L7wu5zG8q6cfLku5Mwjk",
  "key28": "4fC2Gg3YZKBQ2utc9bn5ZyAgoYgkxoEtYuuvARh5uv6CA1AgbfbDaZGqSJdYcaNtCBxu2pGH7MEww4ZFQd7ginTq",
  "key29": "3CWfvyyuf5QAF4tS9EVS1cdTAqhAWk2Unfw8UjmDMYvXCwJhdt46a8uwmWAEkRumXcESgmANc9wyBMZnumrmF55T",
  "key30": "5ckawZVuRjWU5curxhzyAoxZpWejmU4D8hXATNTtiNeadsYpDrwMKQjSXwCgGLxkc8vGtCsP3xKJ7LGHTP9g7btE",
  "key31": "4g1MhS7KuC6eJUGHjY4jfPLPdcj4iVZy4UQV8dTFpNKYpexDoUoTBtfWsvwuSLnfPmF8FdZctAc8Y8wR31fMQjC8",
  "key32": "2VoasbiD5dqvxkkvua4m4sNYT7ggakW5uDZp9y3pHW6GqokHAujvwWY5fyVHzAjRo9i3mYrHD1NxSixjUvgsi2Kq",
  "key33": "4uNzFCLF9t6WV4rcqECLbMtwQmv8mVxWcxjudXBCHLxyRfenNztQ9ZXe27BiU5EWs2mEXY1NyKm5xoHAoQt3wuiL",
  "key34": "4CfiPCXg9wgzQenu2iFxvZ4WD1RiQAoNhTbLVP4qmwmY72ihMEmCvNhPpdXzFVmVgJXbWoKXoX6mR4Q9DR8YzdfF",
  "key35": "4YhKiCRid3LLf1eSLG5ULE37MWuFBgsRDxmJBUvRXeVwW9m9hVsEo9Az72HMtLyPwNSD1aNHNLsXzwHGK4gzmxWr",
  "key36": "3P1Cp9TcULZM7KQ25PryZnD1NGZLZoGAzByhCz3oBpAVMep4usqKtrs25FqbCeX92iTYZMsbV5YskerWgi1ikMcm",
  "key37": "4dBqbGDBPnrzpJEajT9Vg7AZLPGBguVZnNMDThm3429GWQXQQbEkdtaNoFaM4jn4BckeNN4hs9LLQyvbkrbr5QQw",
  "key38": "5TEaTmLPn5xiidSV3jtw5gQh4VL8PRzR6qohMBi1TSXypUgKpUaAZ1Tu13PzapzQafHrDryVWeT73MgKMEWZYY8",
  "key39": "3a2es31JwYETzKWWxWkhHGYMNgtQNoeaDWCYsLJZuvthnzLj8oRFKbhtW3sCyeyLzkRQYpb4yrfu2ENVFycAiqeM",
  "key40": "dHV5YoUktWjHHqZLb8zNTFC3y3pWg63RDNVa14caJnZG6mBSQ5Hmq63veuSUKqGCsztXx4PXzpPRNJ7N92Abf7x",
  "key41": "2qmmVr4Av8cuGp4AReVDxqwd2di6y8UfdZH582siZ2qaRXkLwD4vBJTy5qYmD8BUCNP6hrgvxAgFNjHTQfxYcvPR"
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
