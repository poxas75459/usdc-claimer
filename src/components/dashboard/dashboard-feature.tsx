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
    "4goYdimWTpraWSXWRmCKHaJZbjdWcMSkCV8R6rL91cMuF2DE61C9nc258rGTAHMvAkZmncGYZpYpNEEZDYn2eunS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WFrcuzbb94Jp1gv2sWqSxbxFai6txn9euytD561mNkUED8vMq51MDUtEiMpUbHJXQLHMCXLNCeSjVGbwvHhzmjR",
  "key1": "wtG8RtvjVoaiVtDCVjGA3c1zoVXSY15LsV1XVKay8LTbKsGL5HsbXC7dkHXai92ufHxMGD5vbE5dSyJcazQSrmx",
  "key2": "2HBs3vA3iCPk4R5XGGUg7FP3ws1CsWnFQmfHR3ucH316xhrCvkfLjSTTmU4mtMwZabHJPDPY5SewEAV6DWoEJwGg",
  "key3": "3YZjgmUBPPqTD2RWd7bX5d6p3usVibbtV1ptXrfJ82PiajSvFRwUwLNuLfgi6emMF9qHV5pRSePzmiBmvFr615kZ",
  "key4": "dTzgZDWcByoYGYUavZTxmdnkFhVHdFF36ZBKAMHT58LZ63PVgHthNA8VRyc1ygpKR3ErmjsY56rcSWuKyrRBt7H",
  "key5": "3N6dUjm6dabsJqBvZLrFgDqZubaQXDwFP3M2R2Wdq44C8Av4WkWiuw4ua6ZLX4mm5YMdX6vquYoa5pYCLSoR3DFc",
  "key6": "2H6p5kT1tQcWA7Fzo1j4AteNZnq55ixAT9GYuCyC7Ppjqa4XyStPr6LnkLMLqXqzNPSHNgAjYcHUaLLKYgQKPSGP",
  "key7": "4bvL8rsPEuWbix7eXLnZVz9w97FFLDd1uCLXuZdZG1teD2EVy4v6mB26iKVGrMJdMJxbMUndvoZhxgznV8ZKFM1k",
  "key8": "2prtJnLNMH5DS5p3W6ik5Aw6A7RJt62M2tFYyp3KfcncAqvjnTh2J5RK4vY83KyepkMzwV1G4nhFzSiB83R3BoPU",
  "key9": "tN59zjZVCobGU42UbHGC2z4GT51mFhU14EWqc8PQirqmGtGb5iuRRNeUmz7YcokWNVztJe8trt2B43vGsfwQJcx",
  "key10": "4XJ7uBPv5VvvKDnMUW8erJuyow46f1yp12WKaCULfy71LJDx4nfygkKonRibBygLNQXbJrrrtxby9hed15zUwhNL",
  "key11": "2rvSW6Sr35antFXXs2tkcgCRcXsDYip8rWranUZqwLTksNtCvTdgf9mwALeiP9yhMZgwLdBCKakyZHkTdgR1Wvxq",
  "key12": "5RHbu1LEeXRyE782FyRjgSbUfkpfxdGebX37kEPTsSKecZNyogRG6YNMUVV6ygzqBN6xYWLbrZU7RYto5du1SHXj",
  "key13": "4xEVcXCj9z78hkeMi8A62gUS8b2vDWFM4U5NM9RfR44zVi9uHaDkshNHPrA8YE9hRQ25aNauVaojKVJxqjsdrwnf",
  "key14": "MK4ohirig1XxUzGpUSTcqRQvbbnJ4TNBm9daYknBP4MLwf2asrnh4r4TRi8ptmsHAQBwR2SpJ9YXBKZxDpRAzW4",
  "key15": "UaVMFGGhE6iBB2T7WYjzb2hcroYn66meiEGWXubET5XWp9B2cJoN11mh8njdMAZHdyNvAYFjsb1Jt2R8zJLswW3",
  "key16": "2EsDzx9y2jz5tfuyrLL12cqVjwJVJWEV6EsX2U99ANcosSUwq9sAD96YxGiv3nbhGLLJmcFW3FAEeqMcH9eTQVK7",
  "key17": "62r1KMrDRUmTou69NS41PK7S6oC5Dnpww9C6P8H9Kj7FcH5XuiSLbwLKYMF69dr7XaMiLtNyxP8epXfmLuzSH3Bn",
  "key18": "4Pp4YKMzSVRpY1oSPbjv7nCJ4uBsQmKannP1GDr6DbufnfvagZgZpZCGASf6QXh4KaP2qctQ8T6C8sQo9W9QCpxd",
  "key19": "4Wa4ZB1yYVMyntGtnnMGQUKKw6rheZvgnJsBzceX6aJ7f66rnL3me6sjMp2CHWKo3dUKix6ALPzmC43USX9vMbxC",
  "key20": "295v4qA8rssT3r8cQLgmdkDKRUHkJ2YgPTLE4v9ZDDb7EAjJVLZVDEvUSYYLko9xH5QKjtSSzwMY7Cmecd9QoQJs",
  "key21": "2SDLCrrgP2xEirJksauJqb8wDUNJ5vSbqCGxv7cGNtJGWf4C5jc9rMbBrLYV4mrGUYDcA1GQZWCCueh7Bb8scw2c",
  "key22": "5RtsxPZ9cCaVEZ1Wn8AbRW4PNqfUKFwuy2VgRitiV8eRqMV3NxfoCdmSh6RwrRUi7rt43v5qnncjfMaK3BjTnRDL",
  "key23": "2wVekryRHAJsoGcDdCSfWED2rN3SvpQdDja1DuGdNuBtCLeKkJybAajhcZE8nLED4BQiGimMy6Aw6YkxZGcF1xXS",
  "key24": "38HAgBE6GgvkwPJ2z4iYBDPAFyjYdTykLGg3LM5Yjcd1CGHAc79gHCpj5pFjmmAjLYudDBJ5fHVFvtpshSoCGfZw",
  "key25": "65eGeHZdeTUV4wfStNzc8k2mbALtVmMFJbncuK6wEdQgHRFo4LtMyFTtPbN9Z9wsJ6KrjEBKtK4RLX9P496HvwK3",
  "key26": "2hbXg3EvExqgqquvYs2GiZw8h8g1YoXarqjsUyWE4LcRUH2y6HuQyxrbhS3jrf1uFoX6g3YsCDKNfqW6j2L8VfK5",
  "key27": "4QNGdhc9jFhdt15jHV8gFh2AwPH2ga4TC7gGXRJD8uf3kBTpDC2A8Bo9ERnkNM3bmDQX9UvkczW3avoLNWahsm7A",
  "key28": "4P21qNQHYFjH42PUFaS5vsc74may5kcpHjtLQ3xMUsSn9Hj9e2VkHkwqdya2qM6VmrwfnrRaxeKTN2gUpXBM6WxJ",
  "key29": "qM4NZw6D2URVnCndPhbwqs3bK9L7F5n77kYNQbPccNhVXJ5Hm5gdSeNZS5uZVqqzGgqGsyYY2op4bkTUpUCCTZT",
  "key30": "zaYWbQhtC6JXDKXqjXRMYaxvsXLoK3WUoCAC12XZiVo7o6s4MsfNgtdftN4bis3kKSTdxzVMfsqcpwKERoDqHJA",
  "key31": "5ALfbkc7JN788VMyjXPA3gjAa97aAU1eVNL4o4xkhkvdRwpamQrRQZ52Uv5yQWn8J7M6cLEQmqc6ADcoVsoKykDe",
  "key32": "4PiKLDMrMV2wrpnzw2HHfcfFUSDVowUv6aafZsuUt13KZsxrvCKbh44oNb1cEUiAgVkymVAXNFui8FBVnJMoTMhc",
  "key33": "4LmLEM3d8oNqg7TmJnmCxR7DnWts268DXd7TDdt8Vj32aqBbghSJQc3vYztuTUjNA9nDtCSDBDv1wXCZb9eXKo4G",
  "key34": "3meWxxqNokuXTqAjXRdiCSdZEDiGMBH1KhznEmCAXyRzRt3AQkK9KmrNzq2dUEAowRdZ6114mBxuACcdv4zJcWND",
  "key35": "2i4id4bsCV8QCofTMAvz9YaYqWHVSVfpvL3HSu1LQwY37bKwYk1T9FwtpYw8DWkmVsYwTiw6JkQQs9s5JRB3xZ37",
  "key36": "5b3Bf4SowaPjm7Jo7bz2dZNERWJCaD3VSPYRyMPDq4Q9NXreRv7LetM4UbP8XNcHZm7r5UhUF3B4ECCcUq87B2ih",
  "key37": "uyaj2BsihrJ6dUdU5cBxV3y55bzxQKCa5yWY2HR8Msnn6KUHLBT2G9itFvPek6NrNnH7SxUWWtH3H1aB7BPvQgP",
  "key38": "4e5vbtp7w5ZRkrJdBwMQzcNLRyzzpxt47GNQJm6knsLZuYZyQFFkhwQvn1xqv9whWgHyCyYMpgSwjMqFPcKXXkQz"
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
