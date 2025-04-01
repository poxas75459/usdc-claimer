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
    "4viuoTYeUaj6pqr2EZ6qbrSqGtHTLSpfxxbYc2Tem37qkZYFna74r81qhSqGt5NCoaQH5hfufNKxxSenT33V5ryn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qxBWyScUNyGxkXTmLL9sSLUPJqTnUSmcADFMrU5gEDGkX3WPhb1E34Vj2VV69G2DmPSLUhDX8oZiyqGWfUaaEpJ",
  "key1": "tEwLRhdQaxHLwRgkiaXmKE5hV3dAnJCXWTjRDqz1jRr9Ek4ZSEdRZefGxnd1fNFzZ3be3if5qFnUfPnDpid1JCe",
  "key2": "2qr6WXBKenAtVm52CKRKSujT6ZFFdzN2WpQyCPsL3aCR5RL3awenXuwM9yRvdR6RCVACqUeZ8RgiuMFntdcPpbMx",
  "key3": "4M43PJTeQk75woGnhSY44rqJm3RcTdpiyjFAfUSudbUgzcRQAGUkxYbLJ7LCE4pZDcHgvPdbCCBT2sJY6FW1vmki",
  "key4": "pwm3QgYQJhxZiy1bQebgafFYvNjiXCzb2M7ywSnSsK8ryPMTtvhzmzzjGaNd1Uw3FKUp6K4XWtw4huFr27T26Cg",
  "key5": "3y1TPd7e5u7zzFJbAQnESKkQtzwesjJcDDfZ3FK2gw1YbkTaRh7ax9SLb1bk1egT97mEszcZhUJ3ynxoVPq4FZG2",
  "key6": "4EyAqWq4WWgjRrE4Gf333RK9jvS7JE3s4SjSeTggioDPu4SjWqMJimrnAYsiwzArdrgwUvDDdNiGTn9ARmWT52SS",
  "key7": "twsMQH145VreAwasfbs9shPBFK3idCowzWJ1dVbYZPsc5hxExoHeb7ET7zxwaLYtFjYa7Ehv4moLfvsqz4cYfhm",
  "key8": "4WthvKyhTzF1HNmKqyMKUjYprqm2HnU7iVmsFzg6HqgHMwxBp3DZMghPak5JMSSMd3FVdM9jcdS1GAK9jxKao2jZ",
  "key9": "3RPrHxLfmpcPpt8LbRqRorBXLJCTpTCZ2rRYuwGV7tqgmCjKo14MzWLu8Lmdjctmn7jE6HGfWFcD9KszgVMq5LfE",
  "key10": "oqVWfPJMANsiri8X3mtGAkRUMoxyxtiy6GYcp2terY4Tq5DYuTJvj3t6uvH1XQNriYsFEpZpDM1KvhFCnfxEbZ4",
  "key11": "5VKhrazWURDmvyojcmvt9ZXFq7KycrjwXFcZK6sW4FcZrSQxNnuJjiad54mzyrvW24gebzpxzX2YTdA3rNrxNppB",
  "key12": "4VPnkULQJyW9yL5mAsUTUCM3D4sG59t4BUjSiqs9aDD4VYh7zzZBPRcC4nEfwYJ5ji8qd5cQ183e5f4wc8fAVWjm",
  "key13": "33MtrTcmrzgLTa8DygUVGNK3v3dE4VPxKEZkHNTyBDpHiGBm4HHUbce7JHLH54Rb9wM6dmStaufxv6RutD66JF4h",
  "key14": "4oFK3nfZzaNYPBk2XN3TmKnaeQu4U89XzVsw9dbXcZ6Dmzu6PvA66CMQ1WwWpCpC581zpyd1gS4dpvjHNEV35bZ5",
  "key15": "2FqmhcJnyDRDfyoTGo89UcY42g71hSufmcMf1EMZDsTqezm7WKhhAdbMCZDUVwmgkdJMQXcLs83YULhEuvtF3hYH",
  "key16": "EDQWoqwPeqYujhBqxSm295SEMP3RXordazbsaiD8EypkUsVqdZ73Hrb21BhfPqgFbFnuNFardHNoku8Q8AzLpJn",
  "key17": "4D93zecFQgFjvRjrXbR6psiWSqR44UvPR9KEijnhAPo2QR9eXXFkfdvkdFGGcWa8RLcQ1Hv7XxJq95U8ZxymtMg9",
  "key18": "2qUWs6EES1pZtX9ZHG8FAWV1JGfecgsbAfLB5wDJms6codCHbzVJDoeFaD8xtZLUVJqfS1BXKESRQiGrFSBRny27",
  "key19": "3ETSDFiBVaxtJpgscfUFPnQj9ATpTaxdBuwjJWgarVAbB6QA5gjKsvPgwu7U7kcLiqoTe71HzhvjRbe8swSwWWTP",
  "key20": "2hXp4X5mrdjCvskni7chbwhzwLmcNXht9DpaupeKckdbLqGTwYEbef2hhhNgHkxRzB1A3oySzqmyHa5dFkX8oa6d",
  "key21": "8N6jEdX7Q13UqrD6JQGWJ4qDT23ZhvXfdNDNjo16PtX97VVEqDqABrSk4Yqf6PfaXTkjNBazBiMeLUCo9YdyRUc",
  "key22": "2BECeXASMvRWPELtEbFm3Ftp7EJMQKJn89vhHp47hXW3PvDZSsrBFd1xwjtwsCCgpuMTiooaWeNEsJzWqFj2VdZ9",
  "key23": "RwK84ny9biRrw3DVWMe1PfmMVh9CeVpt5UBGA4kVDJDbCdpGFHUoHwA7eQkk8bfb9YzeEMD8jqYjv5xzmuvar15",
  "key24": "3aq45zKj9mkP4UTW7ahuFUY4B87LDEtfVhPFvhVSN1GWhGWuTDc8yZPtGr2xDy2xU3QBeyXbjbyM4oBkqAB4M32p",
  "key25": "q9GNryD8xZCvtwUiycjvAuoGHTnUc89TQkLHXbe4YGXwnFozzvw6p2vEfQRvEZ6im714YwHdG5K3rcF1rHMaAcw",
  "key26": "shaYjoGn63EoVXj7VKdShdgWZVVQdJcd4xbd9XpULTJU7Bzc5voWn5u5V5KYfSYYYXbbimGa1SsFiXB2r2bVpCy",
  "key27": "3PsGkuHsZL6oPsgghGC2NQHg2A6b7XC3P8jkENwMwppgQ12cJDWaCwXeh419m7jrzSid2yNd88Jyrn1GR6nU9Qhc",
  "key28": "Zd616hVDhPS2cHTmSUVe2V5oEUCF3xMjoSCyrtEJP66G2xxJE4NLXiBGuyeHPgU9DZRDKCRMPz2mbRkY5FvujXY",
  "key29": "2a8ikHQoT4ziRNqnUSXocBUTvihFCK7XMZyd3Jy8DVhjZr2s7TtAsY3QkSjj4Kap1MmbTtaXyx3JPuvhHdu2ppW1",
  "key30": "32AELk1uyefcyozC1ZxoznKQpGtyG8uDGPrQxRTRJbKDxxSWg8itLoAxTx3nXtrFi15CTg9GHXEXEumEkduvpcj4",
  "key31": "2bE2z8qx9mnXQZV9T8M3Z8h196J7hhyLyLqeyB5fxZfMWSLCZ4ynzT7NTszw1ULzo4qt2JCEw74JhsXtYCTQ4woz",
  "key32": "5zrDRusFTseSHmk5hGZt3EAAch8sCdEbcaCSEEyU3FcMdqAT9f9SgD1RGBhBKai25cbHXHFNyhKG8XJqL8fGGsiD",
  "key33": "37yGmvrmaRJRMQhsCtLqtwWuRL3JgC8NATDhzKdYH28v4TtbUYGiDtHyyKqsd4gBU44wnhUfRn2djFajrXnMRZXg",
  "key34": "3K81ZM7srCnY43wSNXvJTKQWyCjjJay14E8kWLVit4ShrYS9PNDrg593YCwtM6b2RB2cXQ9bZu92VEHTE71EgNG3",
  "key35": "rD1de8AmgQneZ4xSoAKvT2AXbeaEnX9FiKd7nYiDzGUCaUuT92SkZYxXoozanWxyGfjbtZWFMBrFUF7Y2U5goSd",
  "key36": "4745jLrzVF4eCmqYx9wftrw9oGwMDjRA5Fi75W734jq5Q1b187JaHNqu7cVcfVBPthFgiGrQgrsZ1Z1Y83LPngfF",
  "key37": "5RcS9UVV6H9N6t3utBEjwWz9TFnq4kVFkW3wXfWULFAVzzmUMHhTfMthgRzgzaMzanDDitBVVSej1htgbKKTh4uG",
  "key38": "LeuY2BiKGD1utVEHK4GcYownouL7WvZPoihjtgTyHmjttwuSSBmBPPumCPoQ4c6GNxHakkYPbq6mimk3C6qNjmS",
  "key39": "4SRMxHWU8gkBNH6D3iEFNQ2rwqd3Y5NR1szTCmxwTCKvKsCA3hVVycwHdvs85qQJtz1seoy7LsvGLgMzLMjivnsc",
  "key40": "9MAKKB75z8C4Mj321kQkhpAQ5rct1G2zqdieYYn19B8sYtvUg4Ly3MdkH87QeMRbck7ZJEz3orD5uCmuw8fKMws",
  "key41": "4n1Bc5f1W7r9DiUJzqPRMbsG3BaKunuF3KTPU9NFyhWCLArNJGjiyfRQoDyHiBurLXXf2ujnJqcFufi5uECfXs69",
  "key42": "3Sgrdp3JhQfH5rfh7VxzXBKeKuUHw1zkrad73VtV23ZxQzRqhLP5u5ztS6YCcc1EFe6hd3MU4rP2J1y3i65GSuDL",
  "key43": "3xqJHQ4eA8JM4T2znR74b4UYqNh5Pa3hQsmMdTP8QMCGdRQsV6kAFJAvkQrJcjSCGJ8QTFy86TnQR4ZVk7XeHVT8",
  "key44": "2wRNuLcAjw8qn9nkKPiShUGijAmckx33DXjpwXxJbguxocd1nNdwJuLSohEwhsJTz8sabfiFgfyAXR9SP8CvDWhs"
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
