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
    "5A3hmqmud5UAXdCyMHmJcwNFkF81pbpZFfStpTaSbwgUTkWAWjGzZ7oPxrSr1T22ER8nr1G4FtvRPVVyGifQijGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xyvzAo796tB2uCNHfdXH5feuW33jTcptP7UrADXPxV3Fz3tzGCFyjLusidGZh2KqEf4bdXoUNjmTA7z9mPpEfnL",
  "key1": "43yo2k48kNoWyGPYc5BP4bc2g4XTfLZows3hadMu7XM13qtnVsoEwYHTQ7CyaBgGTPZ1FEEKQ8JpuPdvN8Lipm2m",
  "key2": "5WjxJBYJLKZgzkVzsYDZA7zSLX38cQR3t6Pevi3Zs6JPfPNWjRLEAFFHQQfoVfPrbQxSp36ND31KsRwHmcGLD7No",
  "key3": "Um1Th5g3hTTVE73RmyNukQzxc5JGqawqmYFAfu6ruM1RiwdNiLDCA5uP8mEmL5xaxg5xTV38DcP7vBtHUmFdJDU",
  "key4": "3gCcYaXN8usz61z95omiKmNNWAxPrtobwt3iHJSC8C72Z9wHkW3o9ig8StyciManGywXcoL47pwdW3uLX3qt4Qa8",
  "key5": "5FVRfk8eavvfaqcPLXdu9Y7PqANTnBuAbXwXygSvvYyeRaA94LCBcAs9jNeebUyDCzHL8g1RQnQGDC3UVKkikN1v",
  "key6": "WK6PFAy8h51cQpFG8bARZRukdfikhLEH727vqZ1o1JDLNHUDvmaFTNSFXj7ChrwdWRJ1DcHRCMM5dXCmfyvPRFz",
  "key7": "3a6qtSeuUbuwdiLx9FLhLTcuc257GLkwLTZCR9o6RNChCEKpFSx1QUYG4xwzCMVXDBxAC5Kyz92sa5aPBW3E1WcC",
  "key8": "FHhpLEAyg77TMc8wncz1Havt7kpvBpZU7tp1SLt3w7qc4Qq8grkeu9nXY577HtotwX5fHriz1NRmQzprFnL8GVx",
  "key9": "2NoH448zBAwtWWsBL2b56ME9afafu17QhQrqjtbUL8vRVCnddeGpH16d2aovhPDNTT25tULptCaUd6tjCbiG9EQj",
  "key10": "3d6kLyNt5JJiVnGCTDMMYZKZh89AcDv2ao4u56MJgcDb5RrXii9BgghNdAJvSCGX1AaA9kNf5rN8CVDmEUctHGtq",
  "key11": "4YzHcEYJVJDjvr9vxSV3Q15qP36tGSQN5EGe7Bj5yEBxU3XSj2EwjhKDdxTemnosaTDpjSNN1o7GocPEt3MU1E3y",
  "key12": "2J9bXypKfgE7gz4US5eEnTdJq5nwMJAfU4BpqpXQd1dEGHwoSp53B983KdgGCon3hTP2rTPLALoSQvr15LZetets",
  "key13": "122zynMwtWcwxLQdWXJHzSicL9NqSiTvFZfgBceaawgkW9UdW4totpR6M21RgHKEuw4cSSz5NYqEVms9VPnCfpHD",
  "key14": "39MhapXGGaNgK2ZcGrWvsjq9HbCsYTmvnrhHBgFxrVFPhpao8AcH1NChAEQzHpGsqBD5PBaf3UMAsN4XGrd5MbSY",
  "key15": "4ogjrjz2TfT9UHWWkdUu1rBcjWynpEbFRMDpZAiEceaucczkmuGVS6B4dmHS1JikM8ZQTH4cJrGoAChDm8UGPnGF",
  "key16": "4o8a5TZbj7DWE2D21Tjxoist7Fdk6PFKemgZG9EUBwV3A3GHVSuUxg7LiBwyHe7BmKYrtq9LgQqEF2u7apn33WX3",
  "key17": "5N1jTooXvPNrqQLAwZ2TwuBbQDtu7VBvsFY9vxLEZNN3Ak9ABL1hrbUgVpJt6RURFAH9aE5qvYwjUDL9GEfHWFYz",
  "key18": "DPuYFfCxv6QRca1eEj27hkcBQTdPxiDbUjyqjKUfPTiw45dUhZ3KQVTNyYeAQJVKUcLGYU3JyKdWKQhb9M39nWM",
  "key19": "4ToaVLcMDPiJ7ST4GfU4jd2ayPrYYZ7jR9zmRS9rSMVoFj7RKmKhubmCZaqVf7fdGJWSC4sJLRTUniYYbpJr1eL",
  "key20": "5FUXt133gXP25GGvQRxPe9HrjorFoAGK81YdN9gLeYJAAeUQMC8hR6HtoDrCnH1CUsvxAcCc7MwFKk6pxBJmqe9h",
  "key21": "48WLJkURPwhht8R6nhwozQf7PBskLbXW4kCiVo1S78vHkieYPrXYSx9iS5s9q357eZsyqi78EYqZqDHadUPUi2dC",
  "key22": "cZGzvDFTvEQ72Qz4rKqqmvD6pxoR1EFq4wSzgmqWvDCUa4XMAaGS4BR55Ymu8Gs4xwWuL9WmDuwfKjiizqb27aX",
  "key23": "RffbjrXJ5mfowQTFKhocNJoVmvS77zKrz8pa6o4JbkJA4nuxEkGBatddEFUF1Vgv6bj7e41R1gCWXtVZpa9T48W",
  "key24": "5TmgUe3Sk2W1afxAiXrgiDheZE1Zk2M9gNKdnjF8xjpzEeLKCMYrs9XxVBB52zM65zCzvp1Sn8tMkW8isLtCAPCJ",
  "key25": "2Gbpdj6oSMYRnMDvqQeoR2ZMZ1cBh7Ua75aUakLesyB7eJAxz9TmSxCPGYZLZq4i5NY87qySJYuQF6mhPPoCcoJ1",
  "key26": "28WBX9fDimZHwbrDYVZjSPoH9JDDgGbTtfELDivbt3rDufWseK693A5neSQtkZoVJXykmNBFPD41ddtwiszKNGJU",
  "key27": "3X4A7JwVPAAKUCtyY8Vg8KHRK2nWiKnUwWVvt4AqxFcgFYoEetGKEGmmGBD1C8XmBjm9zHJ7LmfANXv7w2CcFWz7",
  "key28": "34WgM4TrrqNemm2RTvDtL1sCxRa9bndfVaMLJSCGcibT9yW6Ww23VpY3ZGYmhnazKbSJXmcQaKywRfdCroByjoBh",
  "key29": "y23rjGbdxiq4MiFuVumxEVAn2izjmhcuRcumm5qHSviYRWVSzHvhDAUsdfQpRbu36E3V9zKYp9wF1krg7WkhVoY",
  "key30": "3227CoTHFPfWjnwYcfTRZKirHFmF3XLhZb4jfwiqQmk3CLfRGex3Tyo4QzKpWMH6hCehcScu3y1pPHm9UmcmmS9U",
  "key31": "2dhRdbLZ9nKrWUcaumEhrNaeCWZMFXuMbFFaBCkWp2xZgfuipsmhuTqp31XjNHbRbQ49kpJd7Jb1xViL2WosWb75",
  "key32": "2CVusMETDrcYakCuKy8agU5HvUccokBEzeBWLpTCMoxRnbS8Kb31LYCWqiMHhq6MwWvm57uofaELwxeW1eZJ9j9Y",
  "key33": "2BEkwi3JwaEsny1T46W8D6zkd2QhVqTHM58Ad6bbut6YKtyMDMq6VET9oz2peeSJBxohDvFNWnCWFpuCLmjjkQwW",
  "key34": "4pdBxui2ijECaMreiyTHnchie7Ywvv7WiiWCz4isnaqFfwsoYccy24tDhmyZ1P3nYykcMgn1YLv19VijUwAD8Wdc",
  "key35": "57nhhzDj3Yi7vL2RrchLeJsf6Yycp6HooTAyTU2FHSRnS5K8LjAUPA9FVQU5eSmsHjdNie6phQUbV2hVkQLiRa2z",
  "key36": "3VuquSUN2sQAoTYA3MGB4HX51fiPCjLvRaheaegNkuiASQHChdTYacch4mC2qJcpJEUVyT6FFewZRncsNfiguJ5u",
  "key37": "63qEhXoWMMBXBbcHVkm2ZzGSrxcbvcNpC75VfeRX5dULqqPznSNF6n3gYCP5yHYAivVXy3JwFjGozbcYuS96njBG",
  "key38": "2YeZk4FVCPTnvNNKrBJgTKkasUq9mikzuKE2e4fKXz6SpyBo9L962bymLbyJXhxEteN7JLrkKJe45oQd3sUcZEtw",
  "key39": "3cNZDniums3Pq8uAttY375i7ukyh5CjHcSA7RffzJHQiRWc11ZJTBWUKJQcAttB2B1Y5WYirhqTKF8VhB47mRC9w"
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
