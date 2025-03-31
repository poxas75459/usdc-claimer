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
    "4i5LW4FEshTbiSL7tddXbyEw8b76JcFE5R9MxUxiKgdpetfkumVUyV751XVXkqZt5zav7YTy1PgjQPHi56Vsm2Yd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63T65z775tYyGqdbt9Vzaw53mHmbVcU1p8mMQTfhFxSYZLn23KQaXJ7TEP1bpkC4govefYjNZeHsNentj5rWLg5s",
  "key1": "2vmybxKccqfVAoyXjRrYd44BW4cdajS3gBqoqjDWUmhdiu2Nwpaxd2BGJ6Sbp6585JkSFXBCzgxaDVhf5kLV8tdP",
  "key2": "fjcg4NmhAr1Syz8rxBfuSpLcy1WBmySDEg7WVJuAhh7dnZrXC3jWbekmE8ocKNteJgj67fFKMwtkcfPr449RCyC",
  "key3": "2gpQ2EgeQiowvw1irc1Xy3C59x8oYyobE317zoo3gN5nSfoumVocEPLRdu3bLn275haWCYJBXBBEh7VF4LLVUvKm",
  "key4": "5YtgNQiBKJFXEyPEwYd9prDN3kyCcLyE7dLFtiCaNzAcHXt4zjffxVLrXjAz2QkUfegV8yo4L5cqV228JMPTGQSt",
  "key5": "39qcMohj8FFmKarLiEDhFTimTzF3QpgbxJweW5xqrP4jLU8ME5Pjim6HHBv9rnFsssT4s24M7AvdSmm65E8djyi5",
  "key6": "5HssZmgY31MhiTH54N6VuF4DAQ9zUiSisMKJ2Ut6mwckreDJiEhNUGhyZsMbx2ogC6bbQRkd8PXuTtyoGbkJ2pWp",
  "key7": "3zn7ujUXEDxzHqLPnJwshUjxZa78o2ULjYQX4CSZuTAMiih2qJzkmGgxKMLkToBsgCyJVGD5ek1ASGAuJUk7rm8h",
  "key8": "aXvx5hJEKD52gxA462HU668U9ikHVxGyuuesp7riDyF6y4igB2TJDzc6kkEXQ2tPJ7nivzMSUMfD7PyfcjajbTH",
  "key9": "5N6ys6eJdtsqqshpE42s8XZPwCgVCJTgBfukzNFcRBEQ3EHdAhDkQyEdtCEGVT6X9Rzec7vDeH18AYAQyVQzKUbx",
  "key10": "GFr3WC8Md6cq8rRzHvhFZH1gqDgUhyaPriuo3PGEoKxHdAGp9MmM8Ghjj7dcFboqUUkH7XjhNrFPfmTd2yB9dgy",
  "key11": "5NJDRar9xK6rFNmXyS8zUhRdoVNgiQekTRkkWDVhLuG3JbU9FuZXoNe6H67ASouhB81QndLHBCzcK8oGLrnA3Z8k",
  "key12": "2ZnmdDYkpLwiUYCqaZsLZpNtrZq5M84aesxWLTgaWD4JXdcZzDRFqEBreUCxqdtRKEvBjJgNTWU86i9NC9A68w7a",
  "key13": "499JqyWYpxqZgZ5NWq1H5GLwD2Q7SwhhtwWqCZ4rJaQHxCmGTjXN1183CkfzUaKR5Rt9Dd15W67wC7Md78uLxkw7",
  "key14": "5fcorMcicFvqBXweAtJVy2VMRJ61Q1T3JpQiRNHmL1oz58XfXPz9gaoT5fm8L7ebu7D9MJSt3yU2yFZX9A5kg693",
  "key15": "s8GrrrRCwT25eLmMqCMypbRUvY7oA4Y2ED7QB1BQaggfnSPvMobLKSGh8Yvrnz8f3Nk3vsycZYMYGsw5aUvx37u",
  "key16": "2Rba3gcdbDpsaKQf2cnGPeMqhb67cPNGuu7wUHSbig4Nu6WqYCcNxbsFDo6n9dGdi826Q9yR47j3j2R1uLvgN81A",
  "key17": "3eqf6AF8oBEV7fP4arqpZJCdYVYs6FbY3a8rNEw3swQ8Jz1ySwB2LrgKUpAKGMGkWiQZyqtdPjMzFNLzzNfR1sg2",
  "key18": "2xeKLt9zBuHcpccFB9wjxRhDtALorRnADpdeeELP97CCY9Ln5jtbzQWarTziZ7NJSBBQsJf6DNn931cSxyGRCnRS",
  "key19": "2uoZC7zFrfH5c4sCZeXn7peMUNogumjXVYNYK8k7gsgaFAXrYjQWPGAYH73hH2tNsYVzBj34hzKrvDfamhLBMduu",
  "key20": "2GhNWZAyimJGomusc7sNmzjVPUV6L1gWShMx8u5x2syevv54E1DkkJ1Vv5QUDewEFLuRXTTzzPF6s2Zx3qV1T7Bh",
  "key21": "28mYh5Vy8rSDmBV68rEnUGeqJbtgwpGrmmQfkvjXbGTTBPHSEKhp71KKX29eGxb292JB9qzYaEr2ADvso6RSb457",
  "key22": "oxH1gMXzmdRZmWWJgh7uognFwta14vhLvDeHNS6CcTVirpaSW6bQU2X4dV2hTkUbfSB7whLNC2RLnuC8oB9tCnL",
  "key23": "2bsFJ5X89iL558pyXRDRTjVGdYkt71KkCk99T2AVjgA1DDDaAYU97BK6axG86Bh1f2CTRSXv5QR9ww4t6nh5eXFn",
  "key24": "2Bs2yTGv1ocUNJWMH4AWJFNa2UPbZiKFmsq2yFRRMHBPTSyXYnbmbQG1i45BPGKD72rzdkMPtdshNY6BuA6vcH4t",
  "key25": "2Zqkk5Ed8jncAhT4A6nAw1hnouUnrukPJCGZxkQp9AJ6D899gMGWzKsuyRK6BVnbpPdNkwd4V7uqcHMAcsFSqiNY",
  "key26": "4ybPwLF6xVvjFHz6XsYY56CwKr9zR3VoBnJkav5rwiG5Qk1kU53DLwY79ASb2D3sr9PPAWQvuJLjCoc5Hh3nzXQ9",
  "key27": "5ZP4Qjgs1UdQ2HoePvT86o1gzinj3kyF5aBDBFFDEj2TaGpokvWHtUx3Kgbfq5fT7pHArfV2n9htUzWy5jNPSMRX",
  "key28": "5JAt8c2X745HFbVihVundAGH292Rwjrg9XsetYg7mjrnt71g75BEguXV9EqnsmNg48t7Lwn9cw4FKzqt5F8szn2c",
  "key29": "budXf6Q134RYx6DPLawd4XXu1uXU9mcSypApLrsXCEBr96GdENeQUXJjyzubCxRHzfxVxC3Ruvezr3EoRMfHF1p",
  "key30": "4QhbxsnRgjNjekB4Hb3wCMSrNFefbdeNPwEJTDgPSXZCtPp7Zb7B2nNbr4yxWf8dCL6jFD6FED7EQucVamSASZBL",
  "key31": "4oFjXobgN4bVf9wV6PsJUq38i5NSFP9q1mHhVfcns1spjxpDYcJTBsGHT2M7tCQGEZ9BB4dYNnafrM4PgaL3ayYV",
  "key32": "2ZMvuWLcmuJ9WJNdP9hrK72y38x1e9Hxdv1xzgi3KpiFrWXrwhEc2s2qLoSXro5uKbDKAKhTTe7Gr3ZUkN1xKuSQ",
  "key33": "5GFa7gFk6GTfcF4mvH8x6HdZiSoZ37HK6jeZWGyvHLdz81NQvoF4RnybrNabjSJg42986eYNztFxJcWHQLnXpFMm",
  "key34": "64WsUjmNcHQ8kZoo5HMP8VUrsjoFTiemRj2sRfwabWDtn5vwUJJzJnoQuzBLKZ4KYF93kzavLFkLuAPPo5PeykQU"
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
