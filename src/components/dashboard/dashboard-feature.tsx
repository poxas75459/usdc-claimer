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
    "65Gef1GXPQYaLVn7YCZ7MF22iZiWTXHAkpPyMZTyi36niAKw6xi92G9qnCtWDUnieSM6GzUiG4b7HJh5ZLgVpgUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J8mV2Brw28FjoXYjv4NPnpPNDkBqVMW34izZbtZp6RdhqyaBB6szbNYaiv4cjsUhDJbqwukyteDuisDjZeJos8k",
  "key1": "2MceFC6wXY38YbWNrWVqyFEkn5ULD73Qq6hip1kJ9LGrHRvLy9LWVKTn8FsBLuQaS326d5BEdQpsCPWb1ufE64jq",
  "key2": "3oWnULD4t2m4TttPAvuyTx7dbbHQK57jxkC3cPNHqSACDtab1w1Nmv2dhZ4rDwWktL59pyh1RdMqmNApv6BgBTUw",
  "key3": "3eMPZ5fE3eiig6ni7cr65sTvrzk3eyo6zChNbkNCLtzb5w1tegKwA4xkjhHV9iNeMv2Fbm5rQLkRuWLGy5qCd73s",
  "key4": "64BUykqoJAVz1ajz7o799LsYdRPLuNP1x2a3a2hJ5U6w32PYwy9SGocoBXPbsACrsGjoDoonDdgtHbPjB4ANSiZM",
  "key5": "4M5Ch8gEKE216WZSZKxa5kRLAH2D77Kpp5Le68KWAVYpHJ7JiHLzyREX5CZwb3x5vmvS3HRuKfVwYeX5XpFNnJjn",
  "key6": "4e13HiryiKN5Ph5SoHpHa4nqNC7qw2JKk3nMZnERnHSSXYMVtiTQemQG11PMLSXQGmHS1LSZWs3QNDRG5mQZ6rq",
  "key7": "iFVmZVHKZPXaDsAPpfMxcTjLfcECFzYXnPNrc18wKSUAHKRDxbAn9b4DeZtjSGPU2A2F5o2Z9iPr287v1ehSCbD",
  "key8": "MJDjmrAnhLLShbXLBY4yz9MX8LwzRcxgR9LEvvx2YaQxpHg99d3cg1CXnX5ie7BTUWenJW7H64xoqSDXJKVeMzt",
  "key9": "63J1Qv4Tweq2DtKMDMWQcCpkCVmAvFLyyCVQJexY3arFfYg9ejzxpjwj7b7tLjFz7RXRoC8SXrYnMrDBeYQMH86z",
  "key10": "3SRqWNGrRUqinnUxBSs27yjemTGhyT4yXbnq2M5dRdDyWAmxYrg6J43WpMjfB3YNDFXVPsWReaA4rHbojGdxvRwK",
  "key11": "2oWJjKBGxaaU3tyeAZoYSAP8of5HsQMi5MZVaGfAkCKYKjen9VkEzKTA5r1b7FKqFNHX32R7C4Qe21LtG4yKH3Nf",
  "key12": "2zWBCDL3nqM5Dkxp9CQPXPg1K5CXEME1pRK3nEiEnx3YkHhLbR9Q1oUjz6otMBdvXujgJjYN3yobM2zeM75AcNES",
  "key13": "2G5wFyFHuC6CBSgnENBAFyLKqbbQDg7WJYCeDTca7QdDxXTUxqm5ng3QFb26o7zuZyzEHjjDy1b2x6ps1LqRoCEA",
  "key14": "2EbQD4fE8n9X6tqX3cozUsEsbC4JMRe8PtEpcDBwiFEFnUUwe73EFQUWcxqJgQfAZmZhBxSxnMfuNSgxMfLgDhaJ",
  "key15": "5riAg1Cr8TE4rqzjWzCuEGyhYbRiGD15xVPeBJ4YLQpbYft4ncKB7VvWCEhJbngm7APS8SFYZ4qe5ec4gVaKVv3D",
  "key16": "3hpxwMXgxEATiSnKXVGPvJz6aD6oFmLwhgaGcQF47qU78GBNnWXULD8BmJwG3NwX75RTpWsftGt9QzCZQuj67gYe",
  "key17": "2RjkLptMkRLNokHfwKopdmtf5UvpoPbVHTsKVp3Xsbc655GcFGZVMxgP3ThY19oYNUKPffkGU1SC9v8byFNBXy5i",
  "key18": "3rEwcpZ23QZ7JjpgEdKNZhk6h98f6U5iNsbMMMf2kBN9vKFgYbmXo55BE5P38zEJULMRCZswGJytF3zzF91ZrAMd",
  "key19": "59xeACpBrxpKUH4qqirk7QMhJWsvhgPFVxk6DRX8z3J4z9sVPd2ySM5D6guDJ6bq6RoCcU8enZTBv6nwMAv6Djwz",
  "key20": "o7Tp3F6GucSwj9z5ncVMHv19YmhJqGCe8AH4V17xLX6Ua7XY1mV4avzidXJfmPNKVUx3gsPgWrZZWZcMHqRG4L2",
  "key21": "5Tk72cPUy8v6bwfapwTARsYWaYF1KLFjPxUG7tUeTmxvuh3QMuxYv2cv7hNRzp5gkdrT69UhhFC967zkTCgDBgr6",
  "key22": "3vEu2PipSVoFEBAWy5FACUQ6e1vesRXeEFSPBGtMWjj86Rt26JXiZFJLLpBkdZTMNiaew2eAPKxuTVG7roKu1ktA",
  "key23": "4kxXa3FGGrsxe6ZuiRAohwvCwucJxMjfPx9ymVfChjHJxzpEMq8owpWBZnLgpZ54eRq4qW2NFJw8Gh6Hg3eisrTy",
  "key24": "H2sewSgNVcMpj8AzoNiTgd8rD5AbYQoFzdHag1oET8L4ymRok4iPXoyZxrriVUyYd457b1UQmz1gGnXM6zbhdTj",
  "key25": "5qtzPey5kGmG1aXh2sAt3wvaWLtKtrd2Mky1zjZEAwYGM645wNrbrHGc1gxRoPPG9VJMZDcDbtQXJBJP8Cu4YKUJ",
  "key26": "22P6TvQny1jZ7LeWLGXizQwShUmw8Hk64anai4ifc62tADoPDVd5KYcigmNDpeyP8eYtkjs8zUXtrrgKzVuxo9Tq",
  "key27": "6km3YkRVqUN7Mw2CK9TNy7fQRF5vjWPNGZgB43tYR44PFL8i4r9nbZBhXYsJQDkhYND2HSFZBq5ephe6wSfsvWJ",
  "key28": "2T4grb9rr1knzSjSA5cnrkCEsUdYPn8jJb1zbtUXhekLdzzRbvhZE7VBe1fap8knpJPehsY67BGL62ePFEZkKtvi",
  "key29": "3PHjNjHuayHQsuCg1F6DFB3svA8h99oHBv3XzrkyzivZFHAPofccPi8jfgiVysGsdVwFqxLah4hNch5SfVQx8NtL",
  "key30": "4m67W4mCh11CMHx4BUkECnpKhbMdR77RPBTYDf5wTSFDt8H1mr6seRzm9nV9FNHNFfZ8v8JvceDNeepuhYndFDE3",
  "key31": "GADdF2PhkDfpYCuXQ5mAvc9Tf7dQwh23RVWdkfzgCAg6w9NoFcYCMbNrKYz3zgki7AjexCPqLMTStiXeLuWbmsK",
  "key32": "z8QxzrSTykiYSdXEiEfnRLDJ9PzxJ2kVkx8VAcychzArtcBwRgJkUKqZnZ69BGx4aqgEQnwTo6i41i1sdh8ukpV",
  "key33": "m2Cqzue4seDAsBNJnzxnZAH5uyMPUZ9SD3dMKDBBXN8r3bcM4w9uzkKwDEHQy2yKxcATLtDE7MNB6DZsseEM8UC",
  "key34": "4cHsiAqRfaSRK4nae1P897zUikyL59rwQ2ZLRVxMfEMgX5oHoXGa7wa73ugo4VHnWveUf5sKSqcB3ZEKuyssZhV3",
  "key35": "4pnVmC8M5PRZsg4p5QPNZNGVYQy356zJDqu5YUQ29Rg6Cc5CRPVL1uZHgp3dLQzZX6qzPhpDytQVcgqAi9LScUZN"
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
