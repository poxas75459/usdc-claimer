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
    "37jvEnoeKaPvSAdgGfEjDgkaUJAKpTu7P7Cjz5PopbzqhzcXPv1v48PmHKtnGnyFM3HHjygiC556fXYoS2qeqtV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39tXevWFgDb4qLhz3BT8wSUSuK3UA4nEE9YJbKZ8w7wobvfacnDwg9pCH7PzqmLHgKJafBHiFqk3towyfeGb6b48",
  "key1": "4aux7AHVHf1c1sAfzGk2dNLvvDUMPbYuidC4ogp473EuWCU1xUUfBMV9WxtkrM3e2snaSRgjej5aZHi2XHXyeMuu",
  "key2": "4r7pp5YE6AcLgrk9pHxhXprZgKddUw5qPhmWwVZu9B6aWbDLmXUoJxHkmc5kWq83TiGSXiwnLzsXJ2ZD7hjUsM4x",
  "key3": "2ZaNtuYeqiBNZCj4UnsCwNuMZC9SsPdu1T937bWb3zArP4VcyQfEEfGxDqUCZ4jSSP9CcXTvfvp57phMpqigsyLC",
  "key4": "5RTr8WKSr4GcBPzj7KqwtaCsiHDMiyKmCAmQUqocwimWhGYJEe4cArbkwtkJBxUCZZZCXtFw64c7wtCZ6oue1bEX",
  "key5": "4h2uZK41oscqjahjVJGDELwGCxXDntjG4ANRBQHdpSKK7mykmrcfbW9k3YFCxfTdpUV9D7hGb3C9cnieqMaAWMjV",
  "key6": "38J83FvrifG2LeZH53fa9wftGa3Hp929goCeeE3DV5GC5samEWc3iM8Cnond4FFsSbefsZ3THARcoSjUKmCcrHRj",
  "key7": "2GMu5Y9bNfhFMcjB5ej3wEjKHXdSxmjv9WRrAGJ3MEUSugFy7918jCnoVbGbuo9t2MBA48XMZwaBWkRxiusWiSs7",
  "key8": "37NZaCZHq8tjvpi1aNgZFHvt4nb2TnByc6TxD5U9YzgVG87ZfLWkLEmp7pgkFxTYt4FJ3iPYhQD44dBBv6JSRZbV",
  "key9": "2yE2GcniXdHH9KHkB17pdMme9XVWZXpLB7WJuadtNq138E3DyGuwuzXXAD5V1jeRBvAwzh1uswuuSu8wEXfrHTu2",
  "key10": "rnBEkGGGMWxUWWJJwsa6w2mZPkS3bmKia3WYfvDvLusiW6N6on1NwfaBJk2APJsFymWPfxh3pYfQnjiW1KMVxRD",
  "key11": "4gV56gMKUfN4QcaLPCC7acUJsusPMAhJYNPxsW5pFa9vREtLsSexk5Ko1rYWLPqfGAg3SvEnYfdaZb6WJFa76jH",
  "key12": "42hHp9FMQUazwY72nSoZktbCB7Nj37QqQq5hJgAne27LapcjKBSzFapwaoc1XAN5m1HL2pJtpf31PcyuAvaBjtHL",
  "key13": "5D5BfSMCNbYQZP1QMK4kugqy16z2ACR4NDv4amNAFiqK2CswQuDnK8snUXiZP373DRRMCbDBh6wKZehtVrS2BaAJ",
  "key14": "4EqjVFKHY27vRqudsDPw7bvP4Njn9Rbyn5Tu36sW4NpY1NC5nmAhKymF8oJyb2H55qXhWay6uNKGMNbqiRcADvTH",
  "key15": "3JSEVYJMxxfWwab5YpWXa9FWoStSA3xaqkQdcojFHXA99fwsmj5CpJ7YgmyCbRfcKwxPFxCLMoCN6P9AyA34bXoG",
  "key16": "zogmRfUizxE3FEphGFPW1QWjJ72eXhx2CrJfv5A2ozijYSDjSpdA6ArwwCwd2ibe8gGnfVob7ijqZAXcAwxLYfd",
  "key17": "674F2m8p64krGmcnCPzU5ghM2DkV83gfULjZPRHLEhjRcvxsDDq1TJ4wab1gjobHFShaXZzVUE1YfknsUA2oVDEi",
  "key18": "3NjyNhTqucqRd9BsQ9MMejUrCaFpRqutNy4tTVap2wMpx6iJBVcfwVYueMRXHJrhFd27SsvMuQUifF1yfRPHSEkv",
  "key19": "5bRpxS1fDbtGb87LhegHgzMSjEQbd5fzQdH151SECiBub1SxY1UE5Hz5rGH2qxqGjPmAvRNEixcSJxxpdeo9qyHZ",
  "key20": "3tBG4ftQtjbc84SE1H6KWahCa6WJg9ZbPaWy2t2DPy6GumWSg74iSGgUdmNrHdomy6DZrvQs54gHPA4DA9pzCCND",
  "key21": "4fiiPAe81CAFtopvUJiwYxqTxJ1Uq2rVUm6chYoJcMrEKRssr5KwzMGw8GzqjP7seE9VpzqAUM4KqsbNVv7R54NQ",
  "key22": "dUhrUkwio4fXmWtAVkbKmBZNCJVs3gTZzvajod7f1DphYL2oB4NxBKb3FjCAGvHCVagjg3v6n52bnA8kkgMMNsG",
  "key23": "3FL1R1xGKJrtffM581zvzPzSvBZ1ToJkcfH5ztYJ6marNmzXPZpQMSnxK9LdhuL7AaKfJFac8nbz5RHXb7ijZsCC",
  "key24": "4FcRpF5twGMV3gRmYVLtX6M5bsUWDQp53NWoWA6g7ZaxjG2iDYeKqkdcwY498vKs8AGFqBpBLcQJNjMxG2Cr8HFr",
  "key25": "2hbvGnip45DarRME5woCoUmWRddw1VAttHRMiN5Bf6kJ7bwH3m8iwUyJ7SB6DukA7RncEBk1Mj6F3yGJGvKDA9YB",
  "key26": "5TgA5ZHRS1mgqmhkja4EohVnc8brzXAhwZiGQ3tS5JJ8VKnTHrrgBfRSr5iHj7KfdBtCjygL4osjpZ95aSFBz1fr",
  "key27": "X6ss29j4tuH8ZB6dK9LQumCxnwqPtfUCvWDtD3wWWKejr5H5jGVEAq91iiTwKgEoWNebjNP8Uq9exaH5UzqXuXm",
  "key28": "4vBwwcp4RC74F3ULwVvut9Ci1Fdx61ZbQXR1VsjKCiYY7MFr95vRnndK2Jkc9CS8NR1sfSjgbehyg9WqpTWvDKTg",
  "key29": "4yRvrCAFexXLz2Zqm1SHJx5xLYzBF24sT7SZE9h9drRFeuDJhHUd8QwM4aspzKyDenXb9Hu9xWrZdJkAG4RHGL6x",
  "key30": "5xdton4w3eq3WPeKgeaTdBbBcMHSoVCqvKdmswdn7DG6eYp6mv63NwbZgwaJrrqaRG1UsaMh1VBp2rMmbHnaNUgB",
  "key31": "2MNnHp6p1PwaqhcWCfKTzF9CJFKQPin2upKr87Qzkv2s3Sv1XLmVQKgq9atryxg81c991xUAaYJRpAxtGYWTVAif",
  "key32": "5BSjTgStYzXVmAKDn5NEN5Jy4FQNE13ib3XYqx4fxYwxcHqsW2u2oYiaFFRCT2C5FLsiKNZJXyCCFXWAfZL2uYJs"
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
