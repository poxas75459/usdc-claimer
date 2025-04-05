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
    "4njcS6VyEMyqf3txfmrY2TpAxdtYHFFbRepZVMM2tWFpTkk1Ay8hq4qLBVTtigW8N649UoNMgbYaTeJuhvRJVBHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fnUFXH1j9Ki22ZCgd26UdtMFFSpdCtxnMQjyaKjtzodsMPCCGghmd25ypQn4GXu7a2Lyp5r4pQtKwMnRiFVRKk4",
  "key1": "4oMJAqUgXbmvoTyxp4GMhGS6unf4cJouY12BJeUspTZzLV7ogskvPebmSpxQ8gaxUYtx8NyGbLG4YGxTn9boyXLS",
  "key2": "5Rpmb8XSFsZVEJTr2nM3gmZ45tsBNwThEEMzBaDgcXUhTqUD3a4eCjcm3ZRCHRD6jetwk3UvgrTa72Cs9Nv6xLvg",
  "key3": "kCy8VAVA7KLMgUPdMLg5kicLb2QHCLdWynkWZBLP41UGid4MbsY3Mm4pgiC3nidrm523rpAw5MJLFggckaTbqE4",
  "key4": "42zUpLT1MTA9vKb9XCu1sZqRfqhJB2RW7W41KuukVzTtMfEdr8gdZSMmzQr4dHQRWuNfqRNkfywZnJN7XFpMe4Zd",
  "key5": "2ErZwRpefL7SXTijYj5C11yuKuLUCMUpS9cND5D531Kr9oqgEo7Sm4aFQTmywmpPbBgDc8HsTwte9DN3n6eeB166",
  "key6": "5N181hV49Rq61qUrVQ6yyELKqV7zpiT7fqT1DDv5G5xEbbpLVaHb6LTmH9xPzkUqMwpnsBwWzcpykzaJTPGTxgt5",
  "key7": "27SWcLCimB3f2osWQ1DuJ8QWjBMU2XerptQ1EuB1pJiy2cUzxm2bFVQNYbfaXjCfeMXzLdMwCk3CM29trMMyT97z",
  "key8": "vhRWmeCEiutkon1EvRfBs1N6KUYxWRYRnzER6KZETVW6mMVvumq7fGA7Gh9Ds1ssr2bdBS5MZnp1cP1sSft5hvc",
  "key9": "2CwvhPFBgD1GW7W8ZjqoT8uaGwuYt1UCwY2gF8S5sLrWyVsa6qX8uEihtnUrFs4JSgL7SbMzrdgXuGTNWsk56B8W",
  "key10": "4ea5BUprfv6tTxgsMUHRwzetroQ8z4mGdkYHKcDwnvkpwTtqV7HUM7FdQ84VYTe1YUHX1MnZjLRsLFRqR8T8f7PH",
  "key11": "5gCpPxwTt4Bu5AerpQsYpbAAXwK1ykeqzeSRbsuU2jy1uBgx6bLRejXqJzRttP2oaBkUGgKhzMhNcgFefUp2xsho",
  "key12": "GFfe91SfG6iARVEYF2DNc6vWM2vM65uX4k9D4Lr66MDQ9h45UmR4XAgNw1KwvWAREbnkj5Y5VYtaN7q5FkgMYtt",
  "key13": "4g3io2TkEhye3TXaR6ECy3QA5FfhSfgFtbArqrSrP8QPHxXqevveWHAwRmkPhKbmCAAEV8ndjPuuARHebBsiV11a",
  "key14": "4qmKAg3j3c5tdzBduRXQKNoFDpigUWBfo3WLfAVryiDgbkxDw1suSviBv9MXSpum3mQ1gXHQqAUzxiVrdN8jNMG4",
  "key15": "2xkBKemxigShdPP1syhjJzQSbGuDs6drB3H1t8ZwAjRVbN9LVvc51NpL7mRQLEKSJ8jYcoBep75j8mNYg9xmWveX",
  "key16": "4zVwDgPf15hKPBxW4hedMYPUEvmasmfTQavUgrTGPrM7uiQmjxoRCBtiKMouYr8Yp4hSA5uhPmBi2VyEM5utrpvi",
  "key17": "2eYpsW6DhL2bnXxekxsMJcf7wcpkNCondm98h4zfuGmF5kQQ3PdF55ZUJSQy3KwA3Dh8qQ6umGJaKy9JxXNovffx",
  "key18": "3V8miGofqBZKT3BBHW7c9fAnGo397fn8wCehhDyYw1diTCqvTXPMiG16woCiJ8vxUpQT9xmqYsiXvtgtGZgPzERz",
  "key19": "5vX6c2oC86uqf8X68ot2Eh7hL811wgRy7tPBrz3K1L8LWBwhtk2Tm8Ao8TLMBmj8shpJG36ywXP1zABB5bpvnM8S",
  "key20": "jmeMtV52TvzqsTUTyT7Um72gJKL6BmP2LNdHtaZj8XS9BetGukQskrdh1KQSBoBWswyQS1Er7bHyrt8ZKYnsN5L",
  "key21": "2ENgcqeGQja1jivm3RofeWrr7UGNS3ogJ9war8fGJh92v7entzRYEmtSMtdYVrcqMGFURHL3phNxBsHrxMpugnoB",
  "key22": "2TNWdp8rN2tSZ25mFthrZRmVpQgUjFKpauzqQ2Y8fu5pw8G6TfcJQ91rceBaMGPFgP9wxx7nDbLU4TswxNoBqttn",
  "key23": "4Ve6LBBZbSUeoVhJggryE3Bqos59diYMwEwEp4CkCWGUSFSvQxREbezZXEqyhnUzx1rWg9evrPrKEnyrYftdRV2c",
  "key24": "67pF1EVUtKLkJ5pCuU1ZsdbH6vVwh8MNvQyFP8MoQWuBLJvomeUbYkVeAxpQgj6GQFr1VcGRnJojkeskSEMVyJjr",
  "key25": "24Frfaf3GneuB66g4aKxEqPr1X9SisAqCdDXvQRy6aSJLQfHNhU8jaXgAKZHLnq9BMCFAG3pzJ58Ybpg3eS8ZZLB",
  "key26": "nuyWZQQMFHEjW1RTXEsQZAozwGSxi1MqriatjUTt8UBW94WfkJGEXrwf16SmVspA6fFnWLdAcBkvvoWtmio1A1z",
  "key27": "25GsFrfCE5zVoRfrujPfb21aHFMoZxLz3QQTTc6BgDDbNjE6Tr4RvZGRRbXEF7KzibHF2WRexHgYpJiuBBmTo856",
  "key28": "67UxeLfLdikhmj8ptXj6JAiCiWvnFUTpjHNyJDMpTTYzm9H7tJj147DMbNyaohiZa52DRgmcVJkdubGRaRQ5zZwY",
  "key29": "2o1H9k1Tr38ZsJxsgzMBriMYLVLsknqaR5gDiibkKSCVz74fGoBZZG8f5nxjN4XE4vx1fRm4c2ZATksCbK9XWxKf",
  "key30": "59r6iW4fBakzDYwH2eYsMFq18XdPcoxxYQkoL9c2gK4kVyA2PUWqVwFpPL3bqbnt7p6tYxfHHrDo9CPzQWpsjDz8",
  "key31": "iKrGxXKqFWXy1CXgnQXPUGDoAiQ5vnGYWy661xsmUDVVbwkEuRcbpVrfRD4iHoEvQzUBeKNBUckFDfN1SyLtdag",
  "key32": "2Xc7MaZ8ufVW1YZe75CFSMHPJ5WKAK2hnttJxKSqsUYF4xnfTkChDp9bdczaRoVNT9ZaFVN7PP68xrmBaecV2dBz",
  "key33": "5nxUMETwZX8ptDgaSzQYWCf7zyGE4UyHfYFrMT3mZReYeS8kbLk84DzsuA5gwXa4LmQFJiknPkVLpEri4mbqA2hL",
  "key34": "5bG2e6oJwkuBCsEvsB9rBs3whBHaJD1UREZQF5mrpjDPzi67CFMmYYmtDHJjsuvo47pazy5Q4ZJkD8RAWvqBBnpK",
  "key35": "44d45DAsLujVCj9KBL3rcBHnzsh8fsuvYvuFH35pfvVvMXJSJ6pQoko532CQimck2jzQdEbxe9LPqKy7dZYbDNMP",
  "key36": "5t32h8wu5PoEo1oxdJXjpBmPgVut9tDKcqkhbhAEuA4Hr5fkzzLp3mMmTcWZDQGm4zmo9oJNgatGKgGdFcRz2S4T",
  "key37": "2PmKHbpTDpBdpyJBzRFPVtvJnX5hMHvsbxPbo5HfKE112aCwB5oftiznRG9VZx6oiJycuS9Z9N61SZvaLjDb21v9",
  "key38": "36JxLHvkW4wMGWuCrcEXgbE7kthGRvhz41HNVFfEbxVjfGDJvEeeTr9D8sxkBM5GDsomcBKaNPmgwvmni3ujcYzc",
  "key39": "66K4Dxt4dassQ8bG9JK7BTUwEoXmwtwUaMKi3jagnThhN1mQFnxjA11JnS9Bo9nkuxnx9DNarPuN6JLiTVpgUH6J",
  "key40": "DUYVimGJjY4XMo4XxFVGzWBrk42mfPKhKCrNoue9Q1psSZxryzy3bDX66N2vtX8EHULn4NiGj4bAn45HXDG3tyF"
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
