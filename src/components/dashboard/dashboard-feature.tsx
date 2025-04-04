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
    "4bvpqbAPybMH59nto71yzNsBF74bFZyUTTZsUYNDtiqmNtmeu8ZzoPCSoL76RZkFeXJJrtgG6CsRzkuk6SwfhW66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nPFnRWFYgtGARm3CAxcrFkwk4Bg7YL9hTKJTis4GV9efzRBHtfZHq7o78p6kciQxLbfigWNGiXRm5JRxDqC2KCY",
  "key1": "4fs2zarCFEoNovFcdPF9dqNFnRiBo88QQQX6PJrwJZV4w838NqyiVtAiHP9pRRVMz4n7yrXmam5gBY5CZxr1wVR1",
  "key2": "2Lqpt75RzNC4PLj9BAEixvZ4ZPmBURX6pSWzcHpNmNYCQviBRs6UsYNbZeXg568MN8kVqnvSqA8QjsA5chvnZ4Z7",
  "key3": "3KRCYT9Mav4wCiDkRjtgr7gNgGgJHDcwe68qeJ5YeGNXdWgGx5eQ3jkbsT9DRxcU2q7jyisZ4qx2LGau26H8Pv4h",
  "key4": "3h82YuoJuyBDj3bMfEqvMcKkaoxdUU1xj5mX5FzQCzSfguM5zGwKdi3nw4vccRRMQgupCYL12XCdpAfm4vMPFR4o",
  "key5": "2Zt6fzJtudx56aoeWU9PLhabiX2FVVYCmEcVrqPyympZ3RoaKaUsm1VWZNBSPwDR7qBd4PXfJqPmrksaAde8Lbvi",
  "key6": "5FkvBktLkhBfSdEm7syN54vnD5kLsJ2tX1eujfDe4fD39iDdJQ1dgk4ZmzW2pSaoYTtUTzWavoqiQYP3Xgf4mUh",
  "key7": "2dKyHRFrR6UctXRW36ZPcpaobYczhE6YoqgXndVgET5nvRahRxdszaWqdzH5F7u1zMqiwWFjGLXxJstZb39Spkhh",
  "key8": "3P4rkdDzkNxMN2ESn1ykySHWNf8voDjq1QBFnbaXBKaaUwMtZiU2uMLSCxKoq3Bu8pmMZe2mNsTUh3yDnzKatCWu",
  "key9": "5pe5yHmaStP3rh8WSAFheJUwXtJb8gstM6XN5Jvha3FMbw7E6yRifdnURswouHg5XgFTCYsU42svNP6bV95g4eiD",
  "key10": "5K5GY57CfLdEZavgb3dK4FZyQnfCq6mEEpqLn9VCjZRVoDUyqbSHt3y9scQzfVpaiKt2Lv3WHUjc6LHfMVrUr8XB",
  "key11": "Gt5Rjn5pFxoR9qju7MVejfT7vSkUssTXGcwEn4YteYzvixLGm5QGFYAYXnwZcK4HXJSCg9nXCMqLruqmPQy8sMU",
  "key12": "46gHQsxnbpiCKqtvxk4AEx2C4v1JY5M2TLc1HCPNUTV6CdQ8i6r974YMH7MJfH2J8mDx58HtbsTnDrefdL9w2Tbd",
  "key13": "3eCsgVNRbFQcUpAkTFF1axmXUfu1eSKy67vyQ5puzFFGXdFa2mWH9hvhiYNM2qzwqHvdiUKE4eUC8eMjdsGgtqq7",
  "key14": "3JcxaqCR8QqadUXvsVZm9jQm2AyXqSCQmXhBYRKmVfCCB7RXnnMj8GkGQrqmguoC1c9jhQ9DWPx8yLgkR8aXx7aP",
  "key15": "2DkmrMCCjTjKhMWVdn3P2dLqXiyaE5322AqbK9rq5inq6FFLB3pxrjiSTAVsantkmnHr3JthtMoCUnxHRPgqkNFs",
  "key16": "41Z83MiGPw18pQdGU3jGabBihG92ctt4EfSdytGETn4EzEarjg5tekpowu4Vi1YMWMMuBMdZksRBH5LdQANQXC87",
  "key17": "2iiyzvxVnyS2mK73bg2h7MDi2cXjEAhc6tKRFX6Af3XSHdmCmrGiR3sCNz9Vnf7gehaoGPemXuRpSNXfbpbUJ8HN",
  "key18": "2WLts5KmrSPsNevyGprv6fYHypwdArgEGq3hb7qsMNnxaYWZWduh9Q6dQVxavANWDTa352srTMiQoTiW3NEZHRJP",
  "key19": "AHdhR5QY5Kb7EYwG8CUNtLzzP1AmURXEnEDhAAT3jjsF6XVeC5icvSpjaj43YywbkwCMgSd6LxkAF9g9uWb3UmR",
  "key20": "BJrmoJpknK69yStmdwS8Sio3WaNXsBDRdQtkCtiokMSrnQcbcZuJLhSQq44KmkoXXue5XBjMgbya4MBJumnRUQM",
  "key21": "2vUFsLvDros9wAC4tRLxSx2xVeDGUTKLniMuxXJgrAEP3i9CKhj3jjxXDzqRn1CckWEXZKxqtKwkzjQ3meU6pmAW",
  "key22": "ip1QYHSjUfP1qXRkJF8b2uAmenHrU9m2hCh7YzKbG7czv7DwxUBpco6U6VwQHJkzb6nUhJ3sQ5tmES98BQCLJ7x",
  "key23": "4FpxtVH1UjmqkeYkXtJpYUKi1LDfHfyjNZrqfXmrwZhFJxh1tR5LotPvhnyNVDfTXHbmkUf9AqMbjioNqReiwsjz",
  "key24": "5f8yn9TA6UuokmFhDgnVitup5cv3eWXUeUUp9Bn6n1iktgwQC2ozfKG98gw3N76ppE7KzS1KZio45NxqsTS2jMaC",
  "key25": "5GC7VEfmKd1DdTe2xGoSpGEDoDzbYc25hn89u4iBgRctjZ5n2Svmy8JkE4eGx9x28SkYsqdpf41uX4t8jcymDJAf",
  "key26": "55aQdCM9TjTyTS44tcHADipguMzMtGUSVAaUtzkqDXhmgSeoiu2cFNoxDYe8R3FDD3x9F5inXtGuFw8P1PhT7rRq",
  "key27": "J6fksDgYLUhi3vRPtwD4qvSpCTHWjQnnrg9SMPkcfu34L8gMrv7LkUKYBtCKuh7dDvnb6T7wy6PC2vAmuyz2QwM",
  "key28": "5k125i5BsYe6Lehu2snbdftrkiT9FW93UtEzRntan1i6ZjG2CAbxJpxUngNiz85DuKxKtEJFPSYcXqXDC7gZJq8B",
  "key29": "5BzSZM5zHWfWy2LaSFtNvha9y6dWSW1uM4XeNpjt6MnTBRNmMK1HfagpnPyeE2JnFEvHBjQEGtSeP6SYkTcFyph6",
  "key30": "3aT7DRpPXjdahE6J3oXhCQx6zyh3or4Ww19UxtBgasmKPPCFJ93CXU5X2iPKDqqXchNGGbqJUZ1MxXwceJ73j7fo",
  "key31": "5FFaJrHJGc3WHjgAV8JgE5JBauBbmQDcdnXLxKioSNdZ4wU4NkiDbezSbi3hsCVVh2ax8tEnFqtav9fZ8sUxYKiM",
  "key32": "5SvrrdoKT2bqCL8QDYtuB4UE5bwtyQArJguVv9UoFUFqLjQTXSfFvAQfoQRa4iqVoszyPDttfFp7tv13fewYzZjs",
  "key33": "332L5uojz4fq1QSUHujVoZyx3EQxKwdZrCQ9WBkxDTwiF7N6Gk7Tw6gagotqAL3SXYoHRD3FZwY4tcnx1h8H2QUP",
  "key34": "VZpogM15syikMfm3nUEqa357eYqPyVmJmgdTzWdqYSWRn2HfhtWVdi9MmMpqSpDiePDoPqNsow9oVQ6R4oUsETS",
  "key35": "YwXWsAxQJDonbqTu2cUvXLSMxvL7kp79esF4RBWtrvA8BNLJZWwbizqwpkxQtfmeoYWjGQXB4CUknm4Tz6DnmZg",
  "key36": "32vnd4FNsbtE9muce9E6PYNW2EQLmrho8qBHrWmMQWkYmGiifXKLW1NyvSoaM7pPwSbWmF1ZwXJ5tv3NK6vPLS4D",
  "key37": "ZCZNK7dXZ2r6HM5nZE4eap6owfwWhLR2JpFGqJUrX21x9Up1AikzQcBjxjuc7Lg24W71MGhGRXE38HCXr1ggwFG",
  "key38": "35BcD5NEPQTYRZ4wHQ9V2tVuXtwf4Tvwxgdg8m2js2c8n3CA7eTLfC6UubeGS9MNCDeddNSfhYhpUXkGbMpXRUwn",
  "key39": "5nRuYV1wuZpUSVLkyuenSoPTkbQS3ufNqsEB7aQMYVUSgrQtmsFCJcRaxCuZDUMMAKqugAeMsNuULKWFN5RLFh4x",
  "key40": "7ZdEfPNx7rCB583CSzwFkJUt2FaRmurF5W5EeXp8KnAukdJqXHb39AaByrBLZVpZRbs9xACzCcBfFAaQhwJ8sVL",
  "key41": "2zzwTtUyq85aobVkxeQsUH8GLsF1gDJHHqt5pQo2gtmNGZj29f6FzCDVQ86TihREURF3piUzrybzCfiCondptKVR",
  "key42": "5uLtcfju8kK5CFn7stbYa9vFk3ZSt2GDqCcixhQ46BfpBSkxSA5N9otQyr8U5UGAMaoz3ESdWneUXrK9LGhLD7c",
  "key43": "5SK7Rd6gr9CPugU7ZYuWLhMhce1WViK467VQn5zwGwxJabKsW4tzvHyqawNRzVcHBJ7b8tHtyR5MLrb874kdiVGs",
  "key44": "3n2pUNcbkj2sKL9hQX71uo6FwoHKaYttoqrpKSF5MvhvXkP3jbJjzR1p3AAkdkhkDwVqoPdiAzR97ax9E4Roj1pL"
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
