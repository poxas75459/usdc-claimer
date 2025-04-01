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
    "4FzrCkKFWTQrY1xmF47RjNjGYjYiJMMca9x95Bpq48WPjsSbnnmeFPsZQhEgHDY1cQezWugDoVhoszLkqvRZ17NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HB1YCktCuPcvFPVPTg6sR2o1ZsJrTC76Xr6fTHKK97uY64Ru779omGAzZXycLYJPkLY3zfdud389BRtG1EG26Sf",
  "key1": "5vTNUZA1Kr8y2EmUqUUjhM4bB7MDZbUfhfbTcaDZi3Qke4acTBaiLGfNKWsk5dHVMWECfukrhpD6VN9dmxM1GPKF",
  "key2": "4nimxwrgepMLtJTYBnLRm7zJcN1m5nu2vN78jsuov32b8tpE57vHixwXFBsCtSy9MVX17gesPQ7gZWWR6kc9rDUm",
  "key3": "2YKjbB8UeqpJjoQFoiU8rDDJPZLq7XVgA43Vhq3ue3yg6oJ8dJodhq6oTCP3b69pZh9njSjKTzpjdevR3Y5JSote",
  "key4": "5BBg5ih11yAK9j5FyhtH1GYQnSiB62TKYX1E2S5F8HbFBXhmYm6AaVeNTFyEHP7sQKzUHeoHfBHFBpt3sDcFw9eg",
  "key5": "5PmXrKiAV5gp1eTim8JK7ftPnJvz5XWJc5nkwwEVxycLBCc3kHjaBTCM4yVt7v2qEMZdfStLPywCwd9fDiS7HR2i",
  "key6": "3GLYqJN5Ndsrzh6j4gg9CBm1xqt3xWS53BdHoEjtQUZy3bNPh8mW6tPX9iJQs8eBjqd4zua3hmgn2CVw95BnAddC",
  "key7": "3eBnrrjJKzbZvU35C6kZy2XNJHTwQrNMGZ5r8cmbFuCBfgEaTHGBipx9oDAMSBr6kamvVeqBYDuQSVsgw8QF1LwR",
  "key8": "35sUSXNeenRVhzAE2eehT5wDAHwVtvoRVGuZy8pdYKgqQuiptc8FsHcxzFh3B3wTGicfiZ93jsk61pyJqUj6zjMZ",
  "key9": "2UZwWSiqSKGAcCJjMUYSVv4hiTAHdik8anoTKa1CBwWBouv2BgTa61WuVgbSBZ7uF5YNyefYGsWqNxcU6UAYLite",
  "key10": "2L7XXD1GFFdnEUmM4KEUhuzuJ2nPcQkfRjr5YKrzsRDtyWAPBcJaM6Mx9BqjTd2xBt5j5uSjCmfxjK7gC3HB7e5r",
  "key11": "4Yu1YWF6shhgvbUQz4PSJPYjhXxE1qhd9V8LKiz3zwKVEtkbh94hV1Ex2qHMkvtLf1nCkFWKK14gAJkXRLnribVT",
  "key12": "2r1BAzq2uMYwFyNsFudnpMY1eR7t6qDwxnLvga9q3x3ieDFPkCSomVTGeVQmsQXNMKhPRguqs4ewuMs3YKXfrx7b",
  "key13": "58mQgKWoa1v3AdnHrpkgoPzzaa5mET8hwrY6NUGX4gaR6MmeVTorq8qycBywVobUpE25ALtoBLFq6AvQv1ybKu4",
  "key14": "HKD5RtjTrnBJgBv3a8ExdF3ENaEPSKSqLhnEN8NycjvYcyReTfAMPtZm4K4U3cidttKfXjfqqfUzwv2n8mo4LHB",
  "key15": "UNMr3JuKKxLxDq17jn2FiBkNDj37SdUb71BnSTvy9QbWACvkyq6mxH7ubSL4jpxhpfayHYs3RpepUZHjEMGQwNU",
  "key16": "4rbC3Yr6NdVvYozcvXrzttobxjS2ReTPCjEhRsevFCnRzSANncWHDiVU69yz2RBA9xd5sVSnCVQ4C1FzqmaWejSn",
  "key17": "2bun7tz8YXAPvyCFtojr4A9cUo9RGeG9HrFkuX33yPpR4RgpBms62fsFdXEJrG4wNHUJApVgXzF74APocatB4ytN",
  "key18": "5eB42ddaqafViDgfMJ1skAnzrobEa93Bei2zKJWR15Q1D8Voq43CaDfnrJ9qNq6EHMh8nnUrLHW9Fy4eB7YoL1gW",
  "key19": "5hKihz5CEwMU3sWzFsKU9tMPhZPTFkEX81EcvMG5Km5tfyYxQ2ToyY26CdDoXaqUsDkv2ssQxJ4eN9prfpxosqCT",
  "key20": "3tGTA4D1je9JMCy7YXjuD4vuAf5BWGTE9y2zPBDbYbuXf33RNdB816oPyWqJappGsoqXeockFz9qpfbaRzYopQpv",
  "key21": "2zvtkgDRJqU9GNaJXsct1A6XsQBPiuz1r3rb7LKP87DW4hEx2aNkRAsxrvEozfAjMQ6QWL8vLgb6ktHVwtewGcEe",
  "key22": "4R4bqqtemCCLVuCVEYWE7EnQUpDWvChPJFue7SVcdzEvbee3Cjb6t7sT2DWc6sxb1DDPWieQPydzK5yUiRsQFbfY",
  "key23": "2XXeaYGQqg6uAPuuNnVUbkpDTcko5SkzSUnm8aGxSwwfoazyK1Wa49F5eiQMD4X53BxMR2C6wGpS9r2h8auzPyDo",
  "key24": "8X3Mjj36bRv6pruEHTJHD3deYv2CX1B7ZqPqh514kSxzvX19P5F59XGJbhNTV6n9EcR3qE4DEcL7c8HdjfFKXNK"
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
