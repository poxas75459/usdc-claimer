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
    "jvSU2Vz7cs7CmeJTNTp9VJ6ztVxtxKGiCGQSS6UTJbZ9CZG5F4dysy3bLD1DnXdjGGEnPrLazrhiqL94ExeGffC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39m9jQJgpUWaQUeqiNw4KtxuSfcgqxHBSyUUKqXmD3VnHL15hLXWCLYtVzupwccKDpcMyEpzXfdP2ind7v4od3MA",
  "key1": "5ttNLzkTJRtq4bdi4r7XCT21PN1ga7zebjnuFQtUUKCC1JZhdtJKFWhRm3hJ6t429bC6LHNVuZiQwnmNudj7uqBs",
  "key2": "3RR9UrswaKptu9uRhGtQzk4oafz14GkQDPHUHKnHabN6tqf55Befj6vMpDBrHLqes5qyT1D1QsW2RSLFFp2TbJTN",
  "key3": "3ZMDjxZHioGGTKozcMfWfbau7UAHZn92xcYfhaT4JfQQ3R8rPB37WTqaHHJieDy9xdd1vDPCXBVMxaa4DJ9jmpV",
  "key4": "5jhW9W4WWsmxfGg9aqR1m3cCgxKGhDbV6aMt6tc14tsKpC6bf2nnJ6rSthjMBDAQLhuDMDqoE8PudNFkvfmAyLUK",
  "key5": "5vhuiEbNfwtHNbuP3pCyVhYyhpWSQG6beX43YC23TChD9wKFjWC4HEDojHqbYunJvh4a8LqnJ7uibGdKVRu12LvC",
  "key6": "2kw5gmWt7oH7GLAoitfYKHwPF9huVt9MzB2aDiGcBENcBDmaEP2mfrexpeXv46ntbF1XkBKWFqftiG42kcUH9XWA",
  "key7": "4P6PNQKHdq5S73cyAzkpJFBjxEhR6vKZBMrSbEvMGAGQSPk3rXERFqnkg9hZDrrD979g2DTyWoF2m4eCK9LYKing",
  "key8": "5ZkkmVPvkVdBEPv6VZ1f59FAU9DtDEwseVEu1tgx8evi5zxH3oPKt3sKKhXazr3J8X7KFJm5ydVor4iwyKG8RHMA",
  "key9": "5x6vEiugpfhyP3MxJRT1D1EYri6bNyMCC6bsB3Je6V1N91z3VtPb3JDi3JBrqmYJ7ngcrMcDV3JD3z6eR6MTSaXq",
  "key10": "5TgP3oE9DUHhBYL1VEuhDbT6qnxW1eJQQRoRceLYiiXhoZ3MrNgCWujcpNSbY2hK5uKTDLhBeBHSUxtG8nx4Laay",
  "key11": "s1vPUZ8YwS8NvV5opqj3LG12J1AfRnRDWGxGAyjrv327H1CdsFbSVgnG64xM5hfvSkhGFAkRZhuQzFsGmr2vc8C",
  "key12": "mLRrrDw4rgiBTx8ahDC7sA8w1uxrfqpGUvjH8AkkvE5ziBikA33k2emBrXTNbjXKZJzcUWwYnPYDvt9ZFW3Cz8V",
  "key13": "4CzCMFvxBCbj1qdJSYh5weKLwdxQGPYvSffDBGvSSi15EoMKXgwsRU5QiDK72bg9Yyi7jmnudnScomKFbrda2Yx6",
  "key14": "5G7pUvwXBK1QgKRfPbGj4DHfvBFicg6pd2CHvixUycWCH42XtqpHwwrEfrHECSEDt2LbZwGNfqgWsUVPLTnxUDtR",
  "key15": "L8JA6d5SJA8LFmqe1PsARJwJS9tStk8cq4hoUkNpdQNXxhfj4eLw8Pj1t3kYDxbmfH1F5qGVrAPobnsStQoCjCv",
  "key16": "XKXknF48MCXzP8NJKwXCiZdVd18Xgy75eZVQVZFNRyATb6xL77LAWQqkvNfUZAtFgWz9mhsnLiKwVPNiiRgDwf1",
  "key17": "2DWxoDG6SL8xjLC6SbSRV2XQ1gRtx27Ry8SLsycuEMzJ6HdbJ2skLoAsPdjqrKwq482pBjP2d9pLmfZaUWRpExRG",
  "key18": "3AyAknMcsHDKuNrLHngyQNTZ82HQj1BAkKb8RtLXFEqaNj2HsyrpGc6kAc1yKhq6s8d5S19sWLTCu1SiKC4D6ErT",
  "key19": "3Y1iHpTefuvpmLUkwm9CHnjHbK3viZngJ6EqgJf7PpJjHm6vsvKVv6hade8ZWRC4Ehk7CCDmBwvuuGFzoEkGunYV",
  "key20": "2qARYTFGv2LTGc44zpMFUSWSeUvVc1WXrXkqgoGKFvgXfDVReyEekYjVkj33gynkmRgX6p2iq9GM7VkEosXEA4Mt",
  "key21": "ZFbUdcwHwjtRSyA4dAey99Eicckne6qxghRRkDdfm4x3WfCowmgyBv8WpY7PMnW9LVpLhF9vcpT7XxECUXgknxn",
  "key22": "hMRAnmeK8nAKcUWUqTSjGKcg1M5Gm1iCJS6WPGo3hGZucvGs9YtTkpf21ixB1iKaAaw2diviff5xTrtx6twbH5C",
  "key23": "uZZ3qiJZ42oBsywZMgn3fWhBbVoWEaQ2ecjZDh3x3cjN98FAbbhTW6Gx7EHxZdgmhE7545Mqii2j4UreVUfYJPS",
  "key24": "4fZCNTrzG4UFpS3NzUzcSmkMgnMd6hfofKooz1tj2qPbrrx3Lppmmn3T6RuaLPzHUwMANVLSDPJCUBV18eSxpL1T",
  "key25": "3zfoB2m2THEBpgka2E3B9VBTNj6m1DZoiPAiBYYfa8ffawCKB4mZmQZcLSJPYMeGqDRmuaudXjHB87GZu5yUT8Hk",
  "key26": "5ybcSdpcoYqf6hLUaBReC1hgCHN15VUNjsiUuvHwmquXVSFrcCwr2H5fhWNFxEQVunwHe3JDJH4ZDnpnmykk9jmL",
  "key27": "4eWx84vzifEFzJLMRy8yHHW8dK2kfMtTPeNfWJHt7rpfe4V1ma6fY5TdUoG1g9xPk4dad4Ys5KfM7w8CTofdWj4K",
  "key28": "4onbvBVavCQvgDM6qrYxiugeHodmePMyMpCMoFy7pynKXraKAjY7PfvuNuqarMFpdbQFEUmwksTq8cxxjKkY13Vc",
  "key29": "4Dep5edWc2bwtRxpoBU2xRjQRwiyLNodjV2wjQQsV3vz1nSt9THmP3cY7qBC5AhHMc8GNC4ArKsaoq4vaVFwdAMg",
  "key30": "1qoANfwtBKkB7QQvm9rSSQEeknV23rR8TCGHFnjFWNMp595egm6oytSUJHnbswa7J5nyicEbtDqMxSZbi35En6D",
  "key31": "3MkeBstGwKAvquEhZb1EQG969o1RxDa4QB7evv27zr8hNSCrQkjUsdchYj6MdU2XHVYd42VHqFuPMJTcK5nv82uv",
  "key32": "jsE3BX2VXh5i5dEQ2h6KRzTGJkSRM97rdMyBE2JDqFFu3L7hcmEn6tfF9ZKPuTH9u8Jwpa4oFLdc2gNUjAoWWNC",
  "key33": "4yU4w8PHT5wW7e386ApoxjEz4baA5Rkvf52hrYyDFaQA7VJF9dcr4RVErianj4c8UWMZStta4kzMkWyx1ukZzipB",
  "key34": "2nKpVfXnM8tnT23yDU2yyT29AnjWmi6sMFZ4Zsgqswi7SbWhmLCRVd6sg1QqM3aHNeHCRRxvtqMF6wLimkkGP4wy",
  "key35": "2VkUnvoN43wmnnw7cfqAXzEnYsFuSbwVRk2BgZLhp49ZHoib4QRFgQ8QiGDnuD95kbNmQwZyWTcVamTUnp4caWb6",
  "key36": "2Q7vr8HVAZdGZpFaWXpD9ZbinkvrfvfezfaX2aMsEU7jetWaDwpaJp9dFympRwjueCpkRr7PPxopvRVF28synNED",
  "key37": "3rdcFs6BcHuzf9WfMPTQ9P8W1s25eFWFoHiXsLc8CEzCrKESzGzdAb8EoUKQDRcG3p14cgfYLs8PzHdGzkUesuXb",
  "key38": "NZDHqX8qY5a74obVmkryTBuhuZupM7zBhp98fkZHNCE7DMh2cqNstm9eSediwEm2bj6eJ63excnykbWSUhbMbPi",
  "key39": "3kWgJqu4TUaRRmh9ArHWd6rQM8WEfPgRRx5vQALsoSBXtrQMVDX5NyVVD4Ax5Vm27VEyWBhEkKCa8wgic2tPorhC",
  "key40": "3HvD5A4ScB4tHj43w9PHEqZVonNaKVuNKYAiShWdRJnTENYtKXkjUawtRaRpBR8GHBNJ63NWrQShmQcpX17MeccU"
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
