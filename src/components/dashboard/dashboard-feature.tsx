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
    "2SREkuaFTqmGDHfgPh6MbkpbRsKv8Vw6pfgcMRFbDVnwQBkwrCLkMgDXhWAabw49uzv9JaYhvVBR9LMvBx5jnHPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NJrHVefRPxMQuFs6qrr9ABVuoSD2Krt19KsRdPDvjrdLgmZs7DkCwMb5Xw4pZsX4YKmJz8jJLb7U3eX615PEYcC",
  "key1": "4ug32Efmm4LwaVAj6kZW5fijcT4XQaDP7TWpFeKyUnP3UXrz7NnRxP3YAZNxAafXbCm2wtJVKZ7Auce1xL1wnBeW",
  "key2": "4GYdjBYvZsqaShLtRS7YUgMzNZ2e2HPcxmtU39TMfNYsi172FLXZMzts5KBZM7e4KdJUsXqoBiN81CLzQ7AgPMwh",
  "key3": "4dQpPTfjQw1uF4BkS7vXRnWnDeaq6EMmykYt1sXFmUYFZ8QsWymUZ31SqPoZbQUdmp7CcWJfEoYN8d4TbuqnsP4J",
  "key4": "2J4jdmbQtrfakgt1Krg6uSvgmiwu2PmN4uVo7w1QB5D5yNrQv42fTdRxFAx8iUr6gzZhaTHM8AdySukmWBkhpons",
  "key5": "5FxaLMxKgwz2C4CQcgRAg8gP24r1qHWVGdf2o698FapbUXNazhkEgRGUbMm86FMwer4YSMmSQzpKasUdrB6gwjGq",
  "key6": "3Nh84UjP9VANECo8vVPJ2DoonSmTftFyG4H95yFqqHknUn2BuQ7Udye5K1WDQjBZWj1LVA16pLomoDBaQaQaoQGp",
  "key7": "5d9Lu3sh2WexhDoQex16zY2XX2XgsAgHZ3c1D2xNF52nriYJ5nhbdMF4kJTrz63ArFLivVVqXieSDX19ou55cCRF",
  "key8": "5Hukr83QkT5FjNEHLNHGt8NjNWkaHQqT2i5LhWfzuAvA4ZZbrcbPAwTTWmhAcG4j6tjejiaAgmVSuibHTySsW61A",
  "key9": "3Bmzw21oARy34y7R5NsnZH2sABrcXESniyqYR2DFArLTzucBv6arSbMQ8B5zvw3nbsZQJHPadHP47d5PZmbsddgp",
  "key10": "2XA3fddzhCRJMWQ13GcvMDYAB9VdZER6GabSBPVLV7RET9hHfjZzq3m1Ezbi4o83RpXgN7ung2kGpbNEatsEHP7U",
  "key11": "4XpA6gYLNiXGcub27QDn2tAQG3hRHccLRe3yGXa2c6bh2DjvWyX8cSraAUv55un2W7hxRRZQByA1F4NqDjkmeRH5",
  "key12": "CqfYQMe93xaJo2Mx4udUNcWvvEP4vdRzgsg8HF7Wu2JFzVXx4kJxEN4AbfCP7jVMSNdjVWn1cYT1JM9hr6Z75b2",
  "key13": "5GKs6z5qZGGirXaHSxci5s5kJng8B1dzHveZdbK7dafQB6bxZBoBrqUtavzpYKGqbPkVtDQFekJWa5q5FsJ3nxzH",
  "key14": "48RLu1X3XrW9zwpNRJFpXCHcx35Eb4MTKKPfvqc28wcgyvckAi5SxkmcDorimtWZa2pXeuGcUygZ8un7Xwc3Siy7",
  "key15": "3EBUdkW3Z3b7AsSNQ6orBUArpWsEzAp5cEVMup4sxwERm67ABaDKDTsckaMsHE8cN49ehWYxDJqDq6yE7Msdyrtp",
  "key16": "2DH6pCeARmjaxUeJX4K1YfNREa1cHeAHgx1xCWSoR6DrresEMgTUHNRRiHwZesaUFixcYhsodpGhV5W7gYBWPb22",
  "key17": "b2AHiJPQNgx6FFJwh4HskyYuAxhGjiEjG3K1TdDUEZtobRUW4MajYrHwtSW3Pz1oYuX4TsTgoKQoKzDgPQ1iZcR",
  "key18": "55xJPVPLfYuK8EdGu85iYM19pRMvqWLYPFGZdqS4paW1yanfJ7Dzgi5BDr9KMwRTu8bo9ZLP8XvpWsWi214m791W",
  "key19": "2Sc15mwnpfLm1KJ8tGZGkZbz1zAAj3ux5fNBpveFvTQxMfbFpAo9Q5ozDu6oUdapPvrouJwPGB6dNPXhZnFv3edb",
  "key20": "wNAdxfpUGPYgiV7bEte1wWeMVnU1drtrT8c2bKB7UqAE1vAHXiVej7ou6bmEdHrVBzd8tE1UpLDRxkD83zGVVvK",
  "key21": "63FpVCwJamb149udmedW7TZ7ywnFZZWpPwTPcBSY2rEMM6SiZS1tQMPNc1FN1CpBm98YAmDzHrv3xjfvrj4ioePT",
  "key22": "24AddbiQwUqn5jecMqoo9eRVUXb6UchyPuPHUj9Rqeuzqmu6Cvh9x2jN2XcmZC5LPwwDAon9QetroHAtwzp9eyun",
  "key23": "DEAQJucvuthVbaf7auTSYYXYiiqYtJJXxf1pzHXe2mSok519BHAGw3DmG2ttHNgRV9z85KEe43QfxGw41LorMBT",
  "key24": "56imeo2pmgjjieq3ZHGhWnvgLYX2fi3fsNpY9QAxU2pVkuX259nBaKqqjKDtw7bra6yABCLh1yPq3GMzVvQUkXqV",
  "key25": "3svYUNDfLLTiPChDCpS5pjb3DEK92e7hRtChHPKzM3pHpdGpTD3KoXnt4WQBBbGL4B8Xzx5mVmktZPZA1oVQ8hzX",
  "key26": "4txwzSYmfXvd5riabuR2khYcS8i5Qbz58cjc13TNnVjfZQW9Bpy19kNDNUy4s9r85GLdf8aF3iwBNkoeTSDCXCdP",
  "key27": "5wVQ5XgXqVnbomsbhUaNVPLXYMmZG17kF5BrBExdHyQQ1UwyAoBckBpfsf3kLbBfPHjrZjtzYAopySdirjFhgmdB",
  "key28": "2GqD9JkKA7dwvJeeHAi7jtdzdGh5BbFyfokGQAjh7yxbQYKRCwkETeDamgdUuzPGi9R1f1o6upQwuBPxqXxV3ntP",
  "key29": "4bFTMgCPMy7uJNxDm9LFswCqbBhvZH1i8XHpJQ9am2NqL1Xo4nm8BmRKGuSHQZXbSwmWoeotyGsjpxCBtUHZth3B",
  "key30": "8hW8WYhgCtmXtKDCKmc7bGQT3tdCun2DDmM26MJAcCMsgK9np2dUMVzndxPdCQegEDSHyAjGKn41tCBrKNV5f8f",
  "key31": "2PWoKpnL12bBwu4QNA7pgBU2eRjkgc97AwPxA1RJeERAgqJo81qV2yqNN8fb1W2SJKP7KeysomnDq2NyAzS2FGBs",
  "key32": "puUDioa2KB5rVQ6Fb7s5uiiVwXgjc2pAJhXtYY5XWFr4fg5LmyYuDzgNKEcgGQPcAf6XkgLz88TbXDvxtbpiAC9"
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
