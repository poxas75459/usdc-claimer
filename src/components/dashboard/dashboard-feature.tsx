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
    "2sfra241NRh4upkpd51CSPo7DdMfHTAuDUUYGq8zpZd59gKbkykD1eNLgAf7e41b7D4GbrcJK7bTX24gM8jN3fL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41NuSWFRF5bFnwVdmAG8ZULeFaGVbLDk9vSTC7G79ojuSB2VCjBimV9sE1JdLVvAXV5y4JEC13Y17ELo4rUqtJa4",
  "key1": "588VUjvvRBx6xN9rY7xaEX2mb6wfR7newRi8jT5hDyqPURLeoKeAUsf3oYK4JnL14K5hEvnpKotab35bafWrbkZD",
  "key2": "3f3ZFfDpELdGqG3pD89j2rpdaD8ha5VCfirB2Mzx9EtTMPHSfAZk37mh35byzZczcJP8MD95iaRzcSb8jgdCjNJR",
  "key3": "4tDfGWaqkNjDDnN1n91S97RxfjV7PYGWsNqurfgMUhJ4eefgCZGG8KcqYi9ZCPpddZPChqhmKWFAYeSJwcS72BHB",
  "key4": "P3SZV24riVmfojMJjuFsbv6Su2Nxm15VXHESv7YnCcfr1oMU8PPyJ9D8Jp39EDrbvCJx3YWF3V69SC4TRfTtei1",
  "key5": "1fXdopZ5mherHLhPiGgXXJCMvBHZfExEqVLehjHeAFDmSVFX3reqFge4Tjc5Pnen2fG7nhYFECVEBPNQvBkkikw",
  "key6": "3iqWQaEuDKtJm6TXzsRDUdu7xnQvRgNAz46CSWifuiUXjfgXsBPcX2HJFeHiBbs1PUZqkFEKo8CRMFYqVhD87WeK",
  "key7": "3NJuMVkNiT8eTW6ZSREVhtajFEma44tvoXpisoYfp4BVt5sad4cz9pX5an61m3H7VQuU2Du6fkHJdkx938JBwMEK",
  "key8": "267S3KtfSzF45x4wdRJSctopEsU8yojfLGLEW9tBgaNaMFSiHS2KmYf34kML2wSQE2Ti2JPQRpyGFjPQV87cUrsu",
  "key9": "iwVpYMxXVuFbu4zsURCGoVo5kyZQVcocCqQsc1x1hcj6W1gZBfFgGw3hu66Y4fujj2V9E6qoqVjLGbMnWyiT3Si",
  "key10": "LpWZJv7aSTa1RRuj3AdsYBVibF536QjrBPnsZmQkDkgzPb5N3taJdz9itVKY3MdD3qRvhbHv6cZiutSNrPfiWQK",
  "key11": "4HCNWu8Wkv5kVtfbLKYB5QF94ad964wBq7hr13DBfzu34up8AjeEbrAXwhpYWW4yYfNkm2i995SWta4iDt1NjXnG",
  "key12": "4gYspKv5Y9wJDSvY1K4jDAcjKXUXw8VXHxXU26WdNFrjzoLBt2a7dbooMbtKMBusqkHnktg9v37sA6V5BVPh7z8i",
  "key13": "4Ue3ehui7HhXRqHnVbUyzkfEuD7s4Fa8H8zKyyDin1WtukhkMmkuyucTpZZ6M3H7onpXLCvFFGw8rXuzoHks3hqH",
  "key14": "4myuetbzdQdwbyBsAKRXGpzc8BWAhBvSocMzv6SqJny8FJNxSpYLuYZawNmvVz2Rkr2TuUx8HrHmWgo6dDRiXfDn",
  "key15": "4HFpN8S421U7HNzTJxwD63fLFQKVNBozVyTdcDpwBxXSeKKw429J8oxS1QY8RbqYCWweaANsk1GyEdfUL8HYXLRB",
  "key16": "5UbpMNeRCbZnfLMYZRHH4Lxzqc7hYRnepzweH32LzFxcRkQxKbmR9CT6FkJ8pGsWxd8AvGtFde7PmWMgemrGbR7s",
  "key17": "hWeyUapj5yEEzaitNV2Rz186Pnfgmby12CYeEGXDv7qyc2gTVFmRL7nrBgz74NqS4e9jiwUrNSAk6g9kTuJgPNN",
  "key18": "3xFPpUQKo4Lowrzb1jzHXpccAjYzWr64vtuFDN5Qr3wYiH2zkW9LsGHiZVBGv6QR6tVgtqigD8ZysQUknTLeadxG",
  "key19": "FGej64WPUFDdug8asuRnHr3xMEqVaJLvoZgupivnqtovAfxqbXvYCyggVDZSfAvbe8bfQQGm5HqKuRFViVWVPam",
  "key20": "29GGyTH4yQcx5anNcAJoEYLtA1jtf5NHx5mAWN9xcrKsLMZiWhzCpGY395caAoAHTCzsYUivjrHaA5Muo394TF2B",
  "key21": "5VftMhfEV31NAyBW49S87C1iNpw5GV4E98QMqpnaczVejFcHCB4HCBk7VWCmmYXZYhLNSS2GndGoLiGHEcZ8ttuD",
  "key22": "4zkiGLY1r7YMLXLC3L9UE9K5NSpqvqm8AwoBy26vXMSMRnivb2JRgtm6mTytrhNEt7bKRRx4vf4aUq48XhTAAK5P",
  "key23": "3YNErV91GNNijERyChSVKkkRnWmhpEcs7G1PVFoEkRXUC8A5YwKfprxeQx2ksSZhWm49nGmfU4k8EviUsb8MVy6k",
  "key24": "4f9mzzDe8BvYrAjiXcfnkfy7ZPNJs4D8eTwkmW3PFbqCSzNnD7RwD3owLT7BaThvTkuk957JHhLKCjAVCetzMtWH",
  "key25": "ctCHg54QVhRRJdTwL5wZYvUxyr4GzWDKapo8N8Tt89zLbxuzPLnky8iYgN3ENNhs8QnFQV3UWPHaaqpKJLpPZJm",
  "key26": "2Bs67N5Fs17LSuKUnqvJnM8saxom7fPWeyXAD23TKX9Za4nDvy12YBKiZMESv5gM9i7rEYJrLYfAALrREUZLeKni",
  "key27": "2RooqYGau2nQ9Mzv1vd6Z6RBVfA6hnKBUsowHZh1PHYYxhicip7cxGYEVT44zK3616neqeeeg6D2cnoUvyUD5dg4",
  "key28": "9q6uKMv6ZPgxf19Q6bLeda3kd3mw2sBDrrFPx1t8b4KGJ9CQF6nb8UvvDQUsWZKLtKpG2dG6nKK9XhLi1vfYdYM",
  "key29": "2awwKnKeNzT5WHRLVp7bgFfjHHFN9fMhoHFWeG3Y8fBiW1uyzoPoDWCgBSNjiD94PcZGkp8bohrmS1CL6Lwy8UWU",
  "key30": "5z7LeHVU3D1iKA2aUitaM7emPrhEYDSi9BzW4zpeRGvzSqpv1qPzJToFMwNPUm8NfikKoiu4LKKrsMH6bc3Ndkef",
  "key31": "5963BobL5jD97TL8RRFwoPMAB9rmU3F7MvKXDjmKpWAPX6JHRwvDiD1kUhZ1XUafuRGLMbYSRibDcBvudvonHEq5",
  "key32": "4rXyEKSy23DGjYvi3tQVL7WfLdL82MzQJQkFNh2uEs99DAeDiQwA6zuwhWK2EWbRk8Y6r9wVM6c9RkFuoecZdApT",
  "key33": "2ih3Vb2Hr6dqGKdvMpF1CCEs2gn4b8mZYVzrqkcX5S36LXKhwhywZpw8YWCMxgzVndVM95JuvAHRPC43HcKrGEMe",
  "key34": "425XN2Xw5RqpWFybMZEo1couMET4cSnoaaAaNw2hyUu6pHQh9asnn5Gn4p4HMSmQUzHcojXK9z2Mks3KJcA79DPv",
  "key35": "2zPFBtK32LRFWjpqteDKudKD7eqtq5JSBGZGyGcghxtfRv4rCtx78v6cEDW9E7pkNT68BEeRU823xvXJRJFgLn5Y",
  "key36": "MKqvNGrVxBREhrfLWQG2vViTb34G1siq8gCWWwmoFMkgzFF3tvDB948kNaSoTCgGAWFGmuJP25BFgZLCWKB2smb",
  "key37": "5WZrsRBs3CivWHnmGGkY5VnFGuKCiNgVfxCqxVtfFQ2hcSN3fppnbedo4dR452PdwQVK3Q1PC5hqof527UGebsBm",
  "key38": "4zruUZSKkZziww9urKNXnpuS7uD2pUUWLzZdzwdX4ofPito8Yw49BcWgd9KPCU2XqcaPEtWX4DxxjAJfpyaRYzan",
  "key39": "4BrahMx8eD4eMhgRB6rz2FijYupMpTRfLFPEoF8GmKH6zazTMvrkLbzUuz81j1PzcEnqoSQdxb3TEbhNDoxmbfS",
  "key40": "4m7top1xL6ouDduepxR9nMBo168KfupBMbL9ysrEsFadanqVrzv6eYqPuH6g3vDNsn9jgvapXLwVDkemcWVw4dhm",
  "key41": "3pk6yhsJudPeq1nD2wsmtGwD4oVhtyPtPRnLmAsXj2Kva5XCZAbdJ26w9Mvo6URxRZ1mZUNK5tFYS4seQWC3ngJF",
  "key42": "64V2WqfkGQsRMT3Gaafac6HMoK7S7g7Q1ZXgsvdHaCkWTyVJryReborRJQCvRnYiq4F8RBTCw5nmdJDgPS9qPP2c",
  "key43": "Wje8f4P2Ad1Yky236dLSdfaLm9VBhrziQXzYPsMqm4YBF8SjB9BZ5VpM1xdPgzRMsvPSDEhBbhut7Kvv18bt1Tc",
  "key44": "6gk7xfWAu3AL8fVvL8rrsRTikeSMMmvzG7vn2UfSLrGpqNDKvE7nPXk5mfFg4WNkQBgBWp45VBmSJY1jUiWCfL5",
  "key45": "svbnFZJ2PYtgMbiFNk85KXfaTEQSpUiZXbzqV9aF8nDTeJpFmJQ2dzbmdqq7u1sMV3AaGk3uMBuegmeLay84Yvo",
  "key46": "57Gkkj5H4HdLxFuoM1V2b13X9cZQvNvTwmPuAzkQSMWr2U2SurqZDnymPE85L9on9tSFp1u3S4g9zwvScyryztoZ",
  "key47": "fDQuKyn5h4fFin8c2nsH7t8aKUwt6gvpMvRsxJKZnzGQHDmJ2rN71YXNnnAnP8fo2HgDV4AuwHhQg4S7LJPjNkn",
  "key48": "5DdTUU4WHQNsqNQJjsBGw5DSaLkbpdxRV62M2k4Hc6JdQjz1AumDBYznRxsgbu4AvUZTXNQrE7FE3hm1ooE1sDD8"
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
