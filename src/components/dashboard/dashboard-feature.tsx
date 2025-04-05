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
    "32ci8HwTuj2pkrUQo6jMZM4XzRSS3hJNkLE9TboFAF4d8T1dSayzJ2eNQ3Usw8HFfEgXHWE6CaDFot3zVv9LrqHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ga7nSYp1YmbqVukxbHJhnfAnVTmqvSxtHKn1bDpnhcDHwFnTUG7NKAPpHoALwfSDxEHS3nePXtEBoD7wdbuJVcJ",
  "key1": "2BEhoRhkJQb7JcmJtVbFzjXtBSq3wDBAJxuMuJWU7WeNu5cJE7Efr34w6XvgMeva575xbb9y1CAoraFcMoAyHLXx",
  "key2": "4B2yjJ4WsE8ue5uyua3yY68yVTTbSugiKDB3k4431ALngA7z4Vw5yktSJPj2fwxMgHHnJYRYz2iHXVuJM2zCCgtC",
  "key3": "2sgWwRrLzU97KJqMF1sQrR29exH4VAsZKWi3RQJAyVLdwgyZd14bY7jmVN8VzCgrWyJVgJdR38rhw8WR3TSAuY3G",
  "key4": "5K59jjUbRYkTDY3xvgVdLP5S6e79j35PxnCagwdeV5YpYBGKEMczn4NjFHytnYXeGo28BxNckVzdVcto6aMmF1zx",
  "key5": "5jFs9VGV5t3P6HFLz4BQo29T1VtqxphgjnPYZr4FhcQmnGJw7Vo4kKChNKJM5yr7UgdLqyRkEWMMcFhtrQedknFt",
  "key6": "5jSJABSoYfHwjzGE1duwXwGtUwRGiSxzZans88PWBfKMg17XGLt9y5wYnynWJdx2J7pdAJCbv9T5ccBpadv5Ewov",
  "key7": "3dGzf6atqJmdy8KL5ezkwVqpJ6LnCuHTiokLnbASPahPd1rCAEZLhEdpySMi98frLLAq1pSeqm54HdKGto5bnD1k",
  "key8": "4hzedejP1qrBLxMukwbbgznr5c7XrgnqujcquL5ssL3tLfzhsRYRAgcSN3SvUbygwFtHVW7qM6f3yWViQtkUVxu6",
  "key9": "4aqs7myYUgW96pphzxUJwSRkrkj4UUU4aRtgNyshwMCoMCbqcuyQfpRv5r8uvkRkAPh5mVaoMJ3N5HpWVkLGi66G",
  "key10": "3PgPwspCLn724aotHBJUGhxqvuvVzVMsH5mojyLB44P1bsZRayaHAdvkSzbURyg1V36LTjNkRRePbiA5mQ6fPqDF",
  "key11": "BowaypcrXyqxPVXCFEm7RvfL17vVnFUoAkyicDCJYLKDmNH2jv9u3Qycc7qv86ELMxFjeX5L6Th88Xirt1wRvit",
  "key12": "3PrqWDfFv3MVGiy2iAnp9jxBtHEcLEdyAjkT1L5chnapajm33QZGohocyZYE7WScBH3iKn4j8mrJEGZk6cxrmor1",
  "key13": "63aLwR3uTE76vaZX36CTAcahS4UoLzfDM18FWzQj1bBX13VhNfBLQaiDonaaRm7fi7oNajkGEmRnxCgjY97s1soe",
  "key14": "4PtZXH2eyT2o7XT1ywc5CD3rvFJgZ9dgdNAx3jj2AftDL5Huv3afJeoMavGH6UHy5boJrpZYYNmkw81ZXmCSZF3C",
  "key15": "3ysNgvQRs8nCPTT1FJVdGCeHqy4jntnggyUsFbN2zFATzhMK1rFUpGDThBrpHhJFwgtEAbQfgy3MFXsECHx9CjKw",
  "key16": "36oYQpaBCc7y3QgC367orLeFNidapBu6CR28fwBDFVMW54vRiUQ1VucenxcFzGDCXXrHbo9oh5Zmp1fcr1DYB3rg",
  "key17": "2WTYeP9JiE1292yitCtDQz8SQEeRWZDS6iiSGmZ4WD3GwWo9xp5BeniuKBeQDZx5nuGqYuYD4aRRSCwvxGZ2wwAY",
  "key18": "5cU19449v4RuBW9QtmY4YrVubFvVJRCzQEDjm8z57UXfBA2KTn2xm88pfdAFVhGZuKqzwkWbwvzF9iWHJJdWZHho",
  "key19": "egfcCNUYMMyniscDT7wgyh2Xk5FvK27WcAZzsboEP4M6ntmtL4AVN9T1w9vEm5BanRDbtC7nMAhxSTtd16FiFNi",
  "key20": "25g3FrLdikmZZ8trh3fuAD3LvnaQAx9ZPPVR9b1WSaEM1eMvRNJyfFkwVGmLwFYJdbhEvgum15Nw17pY2b9SpkCp",
  "key21": "5UMFrrkvntgPXJX5URbcRLnxs4Xf29eK74jE1iPW7Rn9KiJgU9rbk2qFmma5ovqSKixkWYxjLmR8LqWcNgzP9SKF",
  "key22": "GQrpmJYMXbSxkDLZxQdu6LmPUMJhQFfz7NMBnDw16QFyGssMBUjdb2jxwpxj3VLQJ3S9BXVFSGbyot5eDq8AJhf",
  "key23": "43KBr7mFxcWNxz7AJPPygpNeLVQdufPuEH5oV8XjP8RLJpk2ZBCiGEJUA1iqRYcHYPPk3x6kxktNVbRchKhnNPgJ",
  "key24": "8NBX7yyr7oc95B9SfqwwUHUSTs2Aeb3dJTGY9koY28hg6ffyGXW1GgVoaPjFFpFZrWBpGiEScNuwZQRXuGeeXA9",
  "key25": "2j45rzR5UqsbFU1PTi8bo9ciCCJicXt5vGQG5ZATFWgrMQXpYu6pfKeyRF368yz2zCaT1R6VCi9bFp3CmpPueP21",
  "key26": "2xT6MYfg9ctyun8c2AafLK7Mg6JRmvEhsrBvg57RaLAt8ALWF18gQupm9RBd1ocjxWCfZ6M2YugyFWeHaSN4rdck",
  "key27": "2SuqV5t6pum1tBhuh9LRAT1tnbUGCDRE1HvEoVRPbuHeMJJheHXAkD4U8hHZpypPxrkLRyfJG6sqDUCuCrPAAwCA",
  "key28": "2iUBPdxv6fBD98R5NsQShe4gwXf1sGM9j1T1N9TuAKKFRdK5Y3t5Wc8uzQC622KgSRgVMLtBhU4CxK242FeiX3t1",
  "key29": "3MEm4yttg8mmAbcFAnX7kNLRr5SXMeYmsZJhbMjAk9qy7mgeCJGdXgHDk5RzNvGGrJjuY6JAfPzfdt49zXhys5iS",
  "key30": "5j7Kw5QuvwfoThHUkQuMdVxY9xcoZPZzPqYkXTf1vkH5ySjojEt19ttjhppELf5NCe5pbrh2F9zBQFpdmGUtKYVi",
  "key31": "5jdv5i8Ra9DDkqWfJTWwvuiC5QNTTTdhAFGBuXJ8SFNJud2kgRQXR1LcMafMUavoKofVsXpezJYK8dG99DxhivrA",
  "key32": "rr9MjxcdbCZCN5KCueDJYFb8xBWsVqZT459AgkSzGQ78XGPbVrB4ZcFXPVTjqRkQrK74aauUeTjLtuPxFAJN8fa",
  "key33": "X7fZU7Tx6omzUGg7dNr3GH2FX4QREhQhx1ivKy6iw2Quauqo6eLn2hfyk1cpBr8d7hi3YXU5W46SNjN7fe9Gw6H",
  "key34": "3NpF8ivWNzQJeWJKuERkF9Gcvjpmqo6mUySs6AK2HF3pceQD37dF8r8kwRQHwZgsjfdarSvYXwadjjtu9UqzkaUa",
  "key35": "2ZJ3RQMhHE4ZBb9LE7zvG1EkTe7QPv6uHQsHWwpdsRz8FBvvYJzcDUvGxXuZ4kHK9XJDetUVDB6m2HiFh2aDrn8s",
  "key36": "7oWh5s4PoUNe2PZKZEGLRDrWWd6bZ31B5m9DM8szhFoByobMyUkdStYicgmYCduBLhEaxgutbCHVQPSSpWQKT3W",
  "key37": "93dzD6bpdPhkCEjcSJy5Jhkg5g5UNLWHoUGPxEM2cPzLXFggLijKKvCGt6EjfKxfQkx1QmvPMexRz2nrYL8czbo",
  "key38": "xtrnCfiXFrpeVUFCvVkjYWfLndajrBh9UmQp9bHt3g5FeEXj2EemDuX1KmrVuNRn2i23jm6HRCFkqffRiAvMBdg",
  "key39": "4GJWy6PMPCZ5UwYMzTMqHcD9dyEYM8GzGKus6udYab5TQPgx2EpGgvabYUMs8VpKiwZMKw4ksgYubQnV4YHKdBi2",
  "key40": "GMXV5ukcRxpwwaT2ywGj1TuMR8gPnrgbJ6Nwq6vNzQdR6Bprg3uQtEmjdkKchJe6QPqLQcMXhGaBZE8frFzwTQ2"
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
