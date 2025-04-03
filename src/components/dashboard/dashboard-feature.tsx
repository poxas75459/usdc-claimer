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
    "31sJVc7CGx7wMQ5yhnn9tkXwNzVDpTLnFMvnJ8HxGyb1NEtAb6w97oStvt4Xx44GNWEc1pFn8v42Fj64M32hxgan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eg7X43gfk5fP1GJH1xhnFGgWtKH7SRXoDaS2bjMRWC19ex2Kf1wWB7WDA56NVDR29MdnNAEKoDr5DegSF6421o9",
  "key1": "5pyZxkCqq8SLCJ4ShncGKJ2sjVearXq9YPeB71BTwHEhBRFcWNeXzmvHkGxvunG6c2HXUiofryAbeaQE8yBXhVDN",
  "key2": "2UTDKeS21cn6duAgUBkQMCBXZaDji52YydyDRqTyz89hj37rqAkgzUG8GHX3HH3oFFqnaKTR7Yej7NTR33eKX6yw",
  "key3": "2YuUEGozUcv4jVSaAbHmNBWmYSh63wVqcceGzuQAiAsaKRfNDRZ7KaqpQzpjdaQtVuxJ7JAYafh78rVbbo5ZnaHV",
  "key4": "5V2WhW3tBfjjfSc9xNDrFbDKt5HedYNf5EBVUr7Lp1rXezcNPG3bWGiUzMLoUBcWhsHBRtaLyUBb4499ae6qx7cZ",
  "key5": "4GdHLLP4ZjcrcMtbLQf9Pv2itLQsgZKc398y9pnBQ1QLJnimXZ2uNpSuhBQq4x2XuB7uH9HYmhcJNftyM9N997Nw",
  "key6": "33hA6f4Th4yqYBYX42eCpRtZxGZ54Jshha3NSDVs7B7PE1eRBygwC2Cm5A2u2KQrx24228eLJRHNprv7qSbyTh1K",
  "key7": "4Evh7CRxPE73GtxstkmTEYdSLg5umcTwaWmjYc56AA4GTdymbWKfgp1roPh1D4vZTXTULLwuYZAkKqvqY3tD2hwY",
  "key8": "2GKNh2vrWPTze19z7j2TeE7r5soTTJZWhkQ4geuvwJES2C8eTnjbfQBSMVQ6nbydd1L172AvPRDYiRnMwePbChbE",
  "key9": "abJn9NDHweGARyqWVhDqs5qvosxMSrAnfxif5w6xJ66CfF4Lxoat4Cr75tQpSkkhUKNy3zLSrHssHtG4tfG5mkh",
  "key10": "6yF84X3fHsUpcTrtFKCdMev3HuyeWo98frzwGYtrReLUm679ViNMLFNyH6MN1GX2oi4iC1AwnoBCB41kseTt9db",
  "key11": "E84n19iQofyFR9FPD552fsvUNvz3fBrWQDsoYgN9JXcBLYYVcDwTJRStsCHuWviQ316myRKYqNh5HuGfTCMxWvQ",
  "key12": "3yLuzJVuAGtLR8zWQMEJjrZcoEuprBamhrxS3mqWG3r6LoRrnyConggMivTro8cyX1ypJdEEpLU7EzP4y5b9D3Si",
  "key13": "2PuCMLEcqYhcXc4nRcZAQ3gtzM9sT7ZCqTsunboXsDnHHrFUqtfQH8NCEBLgxaRVyhKN8eCG1sJv8U5vhvDgDM5S",
  "key14": "5aE7rWh3aX9WZRDzG6LmRsrTcA617CJwA2RFmMoyDkQJBdE17k74xZQ1jYTcx9zAMY8h8sF3DHVBSKRHBtWw4RU7",
  "key15": "3wYtW3RF6zrRsvYDm1f7REsY95q5tEUHfBgtQEZRBqPhvaZYC15jV1oJXegevVVtDApqDMe7fG4GpTrCtE4LQ6y5",
  "key16": "t6dCK6yovYYZMxvDirPVaNPfhExpgxqhRkKDimt32ucaPLNeTeajBpHEBFtzzz1XN6WAJU3zU9aiQnFTF1me5J1",
  "key17": "3sykts21ML1toAvG9WJhnfaL8StQLaSuzh5LD2HcGM43NEa1jAcdj1wDv5WoyVVqosn5oPtieVKn1XgTpVKejD4g",
  "key18": "hxX6swQvbmDRHHMj2zWWRtTFMKPhnGrahTPxN5Kjq3mV7SSeax9NtNoGktgKZrWRM3ycoGwD91c7i6hzVAJXerf",
  "key19": "3g1UvRynRmLMQ4goLA7oix1pXnkhxNvKf1Gc229sUpdRCbNKH3vhcN5fiQfR9ZoXpjZiHb92gLjjQVQnh3fbEq8V",
  "key20": "3UpejcmVc2DbtWEtFDs2ty6i8VMEG5cV1EJRC1DL6idUyaQnyL2rruh86E3nKFvXEc1gW2QWZFL5WfRhgE7A5bbv",
  "key21": "4E7zoQn2LQkUYXGQ1zmgvoL8SeYTyUotucpnZzohUyAgYxR4WMKZaMTNhSbvKWKC29sK8PjoiG7ahJyZyP74iKEL",
  "key22": "Hu6HSWES68Qp1zp5XbW5iZ3wP4r8ixGNJKrvqY8HxWVkirpJXSBUEvYwKcoD6GYJELTC5KBfZsuzzTzyWQ1G9Xd",
  "key23": "2siAdDLgTQ1Pi5FV4RgtGCSoxJw9RcdPEiVVvtuadPN5agsr8RRfJducVqgyA598PVv7Db9sry9aMwvxcMEJLZop",
  "key24": "5u3bu5ZNQWuQs2mqLZSmi8EEXyNG6Z25d5Bc5MjdCbQPvJviriRZ1msK8XVmkBXxfA3z9ao6VBL5543PbCcyYsFC",
  "key25": "2eAjT49qJadfrHpNSNRA1knrCFDaPhiysswneFUp6pcxSvu9oWWE2aArUcvWGgnvVVM5XxZbnBsMk5g3DXbdvWzq",
  "key26": "2DEdzsM8fELEQk6mN5XNqUa5Cw7jK9KxphQq5q2SrJzSg1NFJ8DKHFA7oDDaZDU5ZnuTqpuPF5FkqDURnrgyHNc1",
  "key27": "3nMSDx9x7b1LVF7wuAP7wf2e3W7K984ED6gdcjyrBf96gvL2DboJ8SMQPvzZ6MoktbtheTafFMwBomuUjvZYda3k",
  "key28": "5exa9v4BJvinBnzkLZiVRvtry6QZUnT6beBBTX7xcxr1cigcLsnvTHiuNt2AEVUxw2CGtf8bSiYDVSTmAyJMfHMR",
  "key29": "4PCHSEKQ9GyMBqJ2KG8QJ8NdzYzek7FBUFUeRFUh9diRMXqt1qoqMCVnVB1WNGG4hTpTPnj8pA9eKb4xRKDKMouF",
  "key30": "3VEeVYShCgv5Nxue3tA1UZKfXZpb3kPx93sVsGPYDiih5Q1R3GPKoF7vH9BwgLdmfDcKBb54zRMH65VwpU59xmPb",
  "key31": "2e6c48toR9Mu2fRNTPcwax4UbFWmGWaULTV2fVVgrdbU1NLUCAHoEBpFqH39kGNybgSTorKXvWug4GCo4ixuRptQ",
  "key32": "2nV2LFLdBVzUysbPrLWY1KD1hQ5HtM3khBvFJHS5bCSygpJSsKgN1KqTQGULzEdBTt2U4A8dH8j9s5uUZQvMiDUN",
  "key33": "49yc95jc1ggdMpwrRTgEn8e9t6cknSeN3RqVN9DWDg4dUwNqAur6tV9Tui3wvaE1d84qtRZZTJiASKUaP6yxm3GY",
  "key34": "31W1fYY9EeDMQScqAaZX6XHRUiGuGSupxt7Co5G1iHhaESLxUTaKXCwer8n25PXJUJ7rGfoBUrPXqHAS2UzHmuvs",
  "key35": "2v6VNnWvNXTerM2RPXq8S2qMDZbTttvWDCWZRP3tt3zM4bANrauX7bk1VDZYxEcPsTmQnNgYrKFhPyE4GPTVrSX3",
  "key36": "5xvYoqDdq4EWxeransgRdEKhpMqhjPkvkjNze7pD1JriwAkbpuPsfhYmeyq7p5hfJgYPnZsQvLkJ6yaStxno9M7B",
  "key37": "5qvbx8DcMkm4Z9CS43aWBdmq9LJm83PSmUkJHZ4GHSe63gKsi28bYfGmXeWGUCWS2rYiJ2x4X8vf57VbLooayuz8",
  "key38": "39oP7BQh5JaFGUCXJdcaHogNyF5Qk2MkqFqkDmnpbShv6Xb4C1ocSN2tHYYxrZAmcmVtkFG5doDUehBLcFfDwNL8",
  "key39": "3EbskJgZo5B5z6Jy86bDRso6kxNG7A6PrTXcPmmBA5mYoJuTmSyUxmUUo2NP3STpqiKD9kS9fY2UV32wfBfx6iA9",
  "key40": "TghV6Ctq4MDSY9tJcvN66JrZ9UqWP2PgqzDCAPU1oU1T1kD6sJuYQfvVJYSvY7TXUGTwWVbqtrfZ8KR2LefmBuQ",
  "key41": "Q2eRCQkePqBPmJUwYc6iiuejSuEtq4ddBEs6VUx91gCjJzvjLTdxkLk4vnB6ivQzztuh2PMNJQJV9tVo1Mmatue",
  "key42": "xNoLHMsYAGRNTyrSLfBYCcL9Xt4f8ZnpkgFAfHxEPqV1YuHpZNL5p6mW35hhf3BRXhEzv27mLzMEX5iWijjjeTY",
  "key43": "5qebgqAe1pq4JZGrjiRzm1Ueq5QY51SAiE5f61Fcnw1oR66HgJXLraBLx8xxYEHvgoZN8xqGgXyEKd5k6aun1z8"
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
