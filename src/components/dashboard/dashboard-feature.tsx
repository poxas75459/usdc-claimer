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
    "271mRD8ztyqVvT6T6413zeUsmrqTZ8fNRDLmHq32WhtyAnKLADdh8FLpgp8q7owvj2Wfi7k8gmLyz6qjYEhuoQYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gE1UKnL1NBm8ARLdwNvfeNvQYo3bTj7kC7GNvUULvuFRoQX5EbHkQ6FTNegUTXugQ57AAJ1A2K4BxHLnJEc4Ed",
  "key1": "3DN5NPzBuMw4gMxALXTFUsamTAxEDZ3ZiQyX5urMiGUL4S6eEA67bFsJvHsTo4xA2eEyyYwpcoLqrp2DTojwShyc",
  "key2": "3pcUVHACcwggyXRRLtXknPWM62GP7nYpviu1bEvEhMAvv5yMRWAmCiqejeM4WviuTM8wkeHug85xPqhDyyEeWueU",
  "key3": "5YJ7o7ZjMgizSP48tjYVTGtKf7UBLHVtqE29PNJYnxr2dLAEHvHufhpZdzbnN6AX61JSvZX9NXp9SEBGbKL8N2th",
  "key4": "5kHnPPRbfUZSGXkVwLjhu4Hvh4NBWNkYnPWAkc9RjqmddjNF1eTsrred2xQ3QaJEiYqWe9oA36qjZKHndGWVkLLR",
  "key5": "2VtttSbRdXYthgHYRB5nyuiCnNcT7MkdHyQFtDyg7utZoJXJKbBdvWBaT1ehSR6H9mtQQSbmSV9KVB8j5iD8U7fw",
  "key6": "3qVq9tYfWEWmjFzJfdYHvFwRhodZkxv3bP1fhYDhxTMmd1CMsJitbD4ZG5acs41mLwNxR3mZXe7ujHMoBctiqHMx",
  "key7": "2PEq32Fi61aHqpQVLHTCoSCK9Q6fkjJKgaqnb6YLV4vuLTiwZyeqAC4ZVXdLo5BX2Hz87BRFr9ryFboLiU243fdF",
  "key8": "3uZtCudE5KPezuAtHuEsgAjY6X3mg9cRFYWddUF8G9C3SVaHXMEP7jSx2rEytCqTS5ckfSWm6mWdsL5gtWNTqAcN",
  "key9": "5L743pby4NN9N6TL5GWUyhB4SxaQXz7EEM9izVXCoRYxVCYPy8v6oKcZAP1nsuqutT2jTcn7XY3ndnndbzGoYZVC",
  "key10": "sW21kCkbhugb4jpzSYfNzAZgnVRg72TKeo3HmeUY9ywx61iAYTXxuL32zXTAGyuVD5ujQzrk7YBkpX7C4cspbpD",
  "key11": "3twkSogLaKxEykgCJBiDDydB7t1R4KY98nWJnu9xfoo1V3B2417VVkYMCiMfwX53M9MygnDwNaWfpacEJTYdtzwJ",
  "key12": "4CfhwKMumBkNZ96TmAoc4GQqTd1HbCPomTFhmuUp52eJj7DStyGDxk1riV68HA5yzUqtvYR8X3xtpMuhh4MQJErw",
  "key13": "3wpZcb3aNfYKEfLMZWxkM7VRUQ27U79TN16DsYh8BcQdanTSywCUVXMB5HknNuGg43oVbg3euqCCMmRUYnnfDzA7",
  "key14": "2cXBZdGXNpnQkRigkpRzf6pydhieqSzSmWtCGyLcJwkmHeZR81WGS6V1pEMm1EVRJ5va9FFhzHvSiCQzeTcnkZTa",
  "key15": "5Kxd9sv3Eaj8b7PuUa2BvennP1Ph3WLVeV8ZVDfyS6V6xaHUKGrxANDXqE11cH2A3gt3T5tWxnJqCS1h6bDLBHkf",
  "key16": "2gvffzVMockJaXKjLrHseV7ihfkt573geTV3BnQLxoocBadwf7Jy53AKJHJHPM6dZ5UvyoeEkuUe3qa6jfDbHxfj",
  "key17": "48nLk7qdV7A8JkLZzdkgH1qkuA1zYoAoZJeqhreFiqkHVHvLUNURZR7fV6A8m842metJewntXbVPhg45vNChzPex",
  "key18": "5PnndJqjgiTcHMQbuGMEE6pZR4XZs4Sc5sxFWrhz3dcEatvTa8cAEKPeRUWY2efD2KvDdbCyV78mTGbyfY5txcmD",
  "key19": "5pjNjd38HyVsDHqrqGWbjPYT7NYpBPJt1eFRMDTahGy9gvHqgd3irp6fr2MtGDcJR6QxH8Zymtrr9hniBERR6ee3",
  "key20": "4DEZ9eSwoD5zLUL9gabc7nPMPSVX6UFTAiMiXHdUGJTjUZ73Pz2p5aZFJZgSQtgx6ywTobqLVJSy3QihUxmoHuAu",
  "key21": "38m4sczqqzfAA88ywne4dba5z6dCD17staRu1Cnjn7kGqdfuwUYHL3jcURxkmkCka1QnKocNrpdo7YaiBZkqZpNS",
  "key22": "4fwywwiBhhaVxRNzSeBg6GD862H8piiY17N3ndHFvWT7gXimuJYKCTzY781f5qSQdCCnwvEjFDkw8oQGoKFjiQUn",
  "key23": "d8QeGYoDybZggokfebssFujYXY61QbtgzxKjekctcSHta4kDd9hhkJAiZGcjJpPAw34TdzEuKs9A5Hgfa5Ysc3m",
  "key24": "3sdFuZwSfydiZZyenieWXuPiAaxhF9fFCiGkMuJ6vYoimb3eTfhDz1EdAF1LptgF8fSuLTmmA8Y7ovqsYmDRLv6k",
  "key25": "3dMec81BKHSZqnNG6VWJismZpuaCuMSE9bx9bHiSEiBPEsV8zybA63wrdHt2taXWEa5FQc9ZM4ehW7sUDvxRsWeT",
  "key26": "2Ma4va5TYAkGoCeCtToDweh22A7GCqSDEPnLzXaBwb4vCxzoTzsEvFugUsTLh9yhHv5UA72wbVxGMBcNWuwQLMYQ",
  "key27": "4zwa7TBWsVxvgPvNC8m5FQ2H7PcqTbjDnLCMyF1Kbe7oC8BVT1j3MAVifT6ifrAJt2Qiy2rPG7eGsgf1JfzavAmo",
  "key28": "62RCey18e3tEAZFCzV1Sy3o1fSxt8A5XR6e1buF5qqHDdMYj8rWdsMSssEVRUqiTfocm6XvQcY43bVYFYfGaR8p1",
  "key29": "3Mq68tRdAAyP8EARkTRdHrmBHsPauFcBbgqFafcnhFMLprvncin8Dpw1u3SJnHLLMxk1uDbrUF1tjhepKKB1MS3a",
  "key30": "5L9ebLo9TZ1SiBcQfecYX3NR6dQ3ABD5r2uAPi6pV9t2ywFRg79gMH17zvaaXJwx7FcB1EquVF8xxf81bwez1t27",
  "key31": "32tVnBsmU72rtdL1s2sfUuzEbsTTa3Wisc24Lhj1bdiKpFgohyfLpkQC6CK4yujXgYdKgkCXPSwdfXT8xeZoQW8H",
  "key32": "bgMRbPLMEE5FLLJF1HNGixQv4nawwHRWsZeiHFTLVAAXxxRz2SxFkXR6rXa4xh7qb9FydtsSaCaXkDsqu8hwN88",
  "key33": "HtSr28DNnFRMtpUdtgH4WrNnZRnyGU9cW73vxBrMUWXbs6sJAAfr7pZvKYPQcercV6MMWRG1SmKDzYso4YoLj2r",
  "key34": "26WESsQ4L9H2J2LufG2VQCFGTNXz13tLoQKDtodULa22M8L6kuYvE83jjfVAaQkE7pvxNQMPJdNkJ5PQq9ZkQEmp",
  "key35": "3RkrHVBb4isHiFEWhkcVdJKkq19iZSmu1bsVE9wzjg4LGyFeF3PaFfPNBfxvLDHmMwJx7mYJSztLhKEc74Nb17gy",
  "key36": "2AQetamKkhdV7sUTDQo9xX77ko8xwHodfNTktWJEDajrwzCRmvnR4thw6kGGdSC5iuDgFoLTaHMbE1ZH32TbS886",
  "key37": "4Kmsjr5GDvcTvoidWyX1p4hK3obJ11x1q8BEuKVF49SP9UHjN6wtHkt8XsoTmdQZu3aBJdvc4Hm2xHvNZGsecb3t",
  "key38": "4fuovW2jHCwJz2bPnoS4LCpVvTveb9xqQZGJZHgR8S5VmMqS238qSccLibvdjvFWyKSVoxq2BynPw4eUFa1aaMB5",
  "key39": "2aWEfdgqxsg9VzzPnTaccjjkHdYNfjr4L1bbZRhBQJNqNXvzzuUwT2ALgg47f6m8Ka3RtTJubNJUsjntWuSLY2Nc",
  "key40": "2HsNqRrsasxh2crc4kdCKyHV3BmkGNECYF93MHvMHSTRirrsskMRRMBHcPq8z8vEwQMDdDv8JHmRxRTQ9yTMmqR3",
  "key41": "iJ1mKV38UVVDubsmn5weTMQn9yu8ExwSNe3tAnKgMWhtyUkCSrxL9xj3Xv3orStdXw6M3BAkt2u9qp29ZRBdVoA",
  "key42": "5oDwXYxHjPpqiX4w7higsfG7cXZ5weKicQYGyrRkngsEik7fEH1rVCzS8YXyEE7iP989uCpZK6CceW4s2N2Tg89N",
  "key43": "3hwJi1ptFwAuuW18fqmvAQCcHKBQCfJhc1Q68QaayAbSaX3ShAzUjasrBpcQYCDpdDboSz4N8VFScpJL4fN13gdF",
  "key44": "5sXJfK8diRnvVat6Vkr5yKvUyViCRLhFWwM3UNJUxi8ejU3FT5tGRyXG8HiweZ873dAu8EK4864MXwswSEmehJzz",
  "key45": "UVwbTMgBvHxcH1mpPyJPKAMP5hmgmh6wYhCKXz4Cka3BJncUtHVgqN5jUGUoCYpKDY6fQ1TGd4QoxTYNiJqdDGH",
  "key46": "65xvZtQokER61Q3cHz3eadToBUmHEVZuqEU8wkgsvhY9g5kq2sCYWQLUinapbbDR778MqqLAZsWPjpiZkBuoUTTa",
  "key47": "23eedMtSa5tuc4YWUodPUMjP7ffh1UCE23bz8HkboQPjY2HuepWsAcxFm9XJwC8tLiSFXU8PfkviS2bd9vy63KcS",
  "key48": "5ioCZC79SHUJ4c5jZGiwLv5rYg1mGywkpqFBYFRmvhvkW2LwdkGtffAHL8dXLtWaoozTVMTB792eU2vx5cyDFV9o"
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
