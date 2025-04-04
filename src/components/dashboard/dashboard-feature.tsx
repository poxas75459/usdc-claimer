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
    "aYnb2t3wcGvfCBxqAUGdUJqS9CNFpXAEu4Ue78zDQYuGKqV64CA3DYaN2xU8WjuzGQM8MWaduueBdozemEcc1xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9c8XwLBJKUX7iTHVQH5B5YATXbvGJxTUYqy6C316U2KrnxXAuxiF8FQSGs3AnVGkz2QdUGcg5umUPWDLEFyxTD",
  "key1": "5x6oospJCN7QKkspUmaHrzdjhg2CRPpF5GjmrATeVPjFzmN5KqeQeX1uTz71VoqraFH6GTvcaoj2tTJ7fd6HYcQ8",
  "key2": "4SLnMSfSszSifuic6y5MQikmFXmgVa8975RYcPjokezWDFGHZY3kFEkauk8tBcfxbvM31WMmLEAtEftSVUaxND2b",
  "key3": "5HNRm6NybJfKgDjkNnzqXTay18hSdqCLcH6KmBxkNHxWpZDFYfzc7TNt9bgghHDNx67DReC9HLqm6v2DrKKQhn1H",
  "key4": "5AY8EMY99J1GZ4Ai3ioFEHe6zWpUzb5x5Lk4uJUiFxtmG6yBuoRr6FCWwFtHK4jQMkt66X896cBWbcYkuRTp4Q1R",
  "key5": "5C3UkCLsjk6vzFoGtko3B8XY2R7EsH5B1wzYv4NpUdR97PyseZDFgeb7oYFStcqGo1qXQedmDpcuuqE2yCMuAita",
  "key6": "5aDNjzHhyZFobzXU9jKSPwWLyTcuCvhk7yfsav1GCxAqZQKoWta5KhBFHYreYy4BLfj1EMQVazvLPAcBGAky7qRx",
  "key7": "4Lx6StW4iMS1k9nFjsRpSLwJ4tudjEop9Bei9wgYjKiJBe12uxX2o3B3T2QHPTyACYvq3GpjP4TmvvaF9WFv2Qdt",
  "key8": "2mN1SrW2TAQ86HvACP921uc9YppjC6TgjpMh3smGdrzobNRsULmRDaevct6kt53k76LHm5rMg69P2Mv5VY3kFJE",
  "key9": "Sfsp4xYm54yPRU9exELZmqRuhsY55sFrFYzz28vgMrKRCZBvjGq4ve28eMxvbS2NVajXA7P8XRCbLMGDpKdVkKt",
  "key10": "2U3RHyRWHmtUknjJwrWwC2W7fq2Xbo8CHASaizecaVKNU8g7VnNLj4gwiZh2W9B47ZVZrpAkWYF3GuUqeNddoU5Y",
  "key11": "4tYASu1Crw1MrWvfxvgF2Rpo9QQZNhyseoUxu5SbXZH4U8c1N4qNND5FfNZCLSJMBwMSgwettfkiWYn5aiqbMmbb",
  "key12": "4jb8SXdDeknkR2f4mp1f9FxNZgPBcX3yaAM21Fncbqqke9azEgThrfEeBt2Z1JidtMLCCbpZVJVrDDX5vq1cLbwM",
  "key13": "3Q9wipCMDXYeXGSbzu7FcELmVP6sjy8HYEXX7u9zYF1DoKxsAJbpahrQu9ua7HeEAPqz4bkvQtyArQFf9voodEwZ",
  "key14": "2mrPj1FSP8t3PTphrtysP4612Ung9vgbn9SuDnTF8Pnws1sCWD2RfU1xLnnJUt8G9ueYezNdSpjnx7PpXPSNxATJ",
  "key15": "313btuCPAnjcnZfSkcXDp3Wh2qxtsftTDTVEr5LeybQu837dfPyNBu8JxaHnKaXHzM88twDLQcJTLPsjTeqtNTzu",
  "key16": "ZUfukosftAzTWZtH4HuTwQcceopuaTMvRF3bPKMCeBTpyAfMjGu9oHTNuTvYWpHhkozdMzYGLGhwBVYr3aEEZzc",
  "key17": "3MXVvcgD32djYntmb1D6AKgGwpc3x8GSNy7kG2RSyT2Hfpkgb5nxtnR8PEKfWHuGCNbkga4jZmpoXqJmtRAYPR1s",
  "key18": "AkEsV51dPqfbSxg1FPpNK5otmfn1j9rktanpzawfJJm1EPWgpwbGAbryMqtzXrmdCsjcZdY1MR58QHTW5irPhF1",
  "key19": "4Qpo6rdh2VGNJ4jz4UgB8sbvVsyCDToH6fYTKdP7tZB98WjyEKf6XmdU3Gf3p5GPtXW2XMi49sgZX7c4D7ZuF8CD",
  "key20": "nWReD9e5kVWGt4HereaLztozpRYejDnLWbnaXdmXKBduGkEeqbYUPXT5KtyGdGhm4fUPXgqapwRhaHZfTWKGsKg",
  "key21": "61C5X7USiXxD1Pjw9pxQiySmpKqwGMA9DZcZgBuiKmyKNaNgKH8Zz8N7fCzpkEsYw9BPPrzbVmE2sVzCCpUAypuh",
  "key22": "2jmJm9EebtGJW6MiwVFDKgBD4RhA5PXDN3r56RN91qcNpzYTnWp2cks3LgWxppjwyLZ4ogPrBT6Smo8nfSp4EXFP",
  "key23": "3R71amWLkEtWbgE1xJHV1XgiYqNXvNUHbtwzm32RYCKRiYd89MNgBzydMKFja2JRDffWT1aqWkzUeeb8eBSCRDQK",
  "key24": "a3g4QYHtmQzjK3bPNCHpZhaq9wgHKrmPVm4At9XTGtjZMAcMWpUj5jjQKoJDy3g2cjKuUmPgpqhKhSzZYYbMcjv",
  "key25": "2dEKRgUiGajS4U31djPDSuw5RAWC5S6ddKdaAWEFQ1K8hVGMocmhYVxkHSUeEkyuL1Lk1qB2f14ir6UfWbphENqk"
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
