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
    "2JBUctYXUobFuoN29B1yZvNbENV97WbhY7LQEZVTPhpgWs3LBP4SwxcZebriV81avsH4Tzf3bY2xaGFMZqdLw5so"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CV3XRpPcoK7HsAmQUFpgUZXTU6YKAq7q9MPUw9njTe8Hpz4etYGVnanZDLkvAduivvKoRBm3cFBPACahwyqrmBX",
  "key1": "32eX5HVTLhyMAF7eQrY8znSyK3Hje3UrMkXdBzXyYbKfVpAkA5DMz5ogLkjxXtKf7KYftTW1GvP3QeR1DGjpeWxW",
  "key2": "5QgG6PqHispf8JRZayzxLonXbftiYNtF39EvfxVrSs81LtYTWBoYeTqWyXEREVWb3PGn4MDaipFJ8nMLU2isLWNP",
  "key3": "3WzoMBnzKeJfWXgFFv15vG8ywbRF9UPnN4zfibr1SpFGpa6nRr2czLM22jgiT6qPEzJNzsyftNbXWjfQEwgbtmLF",
  "key4": "67mr3aUu4vwtQV5x2brw6cGRdXgXVQCjw8xSbz8i8P3dr9vuW9S1EJGF2Z6uBXm4RpCUpk9EHbCTBzjJnscocyoF",
  "key5": "64qTv6tYbZQGQgQpBwonE9DcmsLpuQ5zdRgTJbjtNhHTE98JeWmcdpoyvph9LUk3gcnGwKsMD3Md4LQxZtHB6cB6",
  "key6": "2NEyk3jqPhGL9dB7PQB21iqnDtvz1qiukgqC9kinR8qbrsL5eaYTHb6YGfZkoxKzHBtpR9FwhMbHKepSJCgWkhGx",
  "key7": "3WW2jq25VKay42L6jsBRHHnrG3UpvLBNvrnnr9e6izeNPg4N2utv8pPXLZL9BrkQvTwtJ82891JLiM1YYQJ7Q8Am",
  "key8": "65NQRwNpyFVvtpGoPLCpQPLZGGPfezEKa73h6gxwGEF7irpoHdiFUxgWxo5ACSvhan5LDt5Ys381uN1D3MmhFibR",
  "key9": "2E6s3jF3Qkp7uEfRDDQgr2Ngy8qRDubEANMDhM68ynytgev3f3toS41VMDHvCFS7wWkZoo5FjviEP3hS2JBvxGVc",
  "key10": "5h6uZPoBjV2iZd8Cxp6LyPJRH5ECyY9VYW5nUf7Giv9gq3cx4AqWv5JSCk3PRpTuM6urhPHW6ujrsCZa7u4mnKhF",
  "key11": "2s9DbRtDqDZAzufCSp4FKygEVpE5zxCRuBGiX5XNPDVhjWd83rSxc2mKoYPzjge8sKGiJJ6VCyrGr1uPrkmVfjW7",
  "key12": "3S6pmU5b9WKD6hw77Ckf3ZTiXoHZmEj6nRgKpGmTxhpgN87nrdkhDKXDXTqHmwCfeGzjgRcLoACqabsfXX4HYCDE",
  "key13": "64xW1JtkAv8yvy6xQVqJqKGesyG6UVmkzVLQSDnhE7YmusHCzj54cPAaTfuP4gw2ykhx8qVi3RmHyy4YCtxrpaW8",
  "key14": "3h71Q553hwcqcNJdPFa668G5uRVakFEsZ4VmAXLuV9WPL7yi5PCQLogZJJ7CanQHHX5bj87ZrnivGPks7xPkVkf3",
  "key15": "EGmnAWWNh6QCWNCi31A66sdnPr7hDKVs3HSeTebkXoKsejVkV5NPYDZb4Rafd8Uneo4D7Q8a4tTaWKkC5Vcevjc",
  "key16": "2AJVWZYeJrx2Kt9VNoPB5JowtLzBSaKNDom8JSWhdvsUdeQweP4682cc65UsTYo8uKTaCaLcPmVkqWHm2UkA1RXB",
  "key17": "3gqmxiMHGT5LbTCdpo6r4td3Tcb7uLrQ7UmW4D4szHqLg211hmBdgxRX5Sf42kAdoT6tutKkrtvbjogfmBnuX2AS",
  "key18": "dqcSsyKQ2m4FK3KxP1m5k1vA1QRoJzi7oPfYan4JJyFCgyTfXvNSjv6hGMtxSJ9giuAC6tD84pmqx5pBkzUisfy",
  "key19": "41s9B1nPTpUBDaALcLutsXEfkN22dgV3oVvoqrrQ16HAm3TeHEAwCxYpRdJwAUzs5nXB4DQRLyREvStHL5J7pJ37",
  "key20": "23Yg3hUT4ax5uGiAy3X2RrwdwnThcd2yi8Uk1SrvFrnvq4rCsUdXJgsQ1ts9EAdbqqfun4xGi4Wec4yEbA9yWBtS",
  "key21": "oXyXN16hWgGY4JFLVPdoQ454wXwstXaU2FggPgAXqpaHchrUSmZjzVHkPLVTwxisPN5iaoTBoTFKEuTNhtsAdxF",
  "key22": "KTQbSbtdKraaQ5VaePr3rgSGYW4jRkHtoyVMWLhJ1yJRyt73yJhS5U88byZi9NctLe1CFmuihkfMeay2zqqRQVY",
  "key23": "3gighY7yWNMnUVQF7ie8Tw2Tf3Skn9ARSDfbC7kCDAfKFMtdYvKZnRPZZvFkLm43wKRS1QocRz2fNjp868AAUgRk",
  "key24": "3EiWKx3LvJYvqpd5UnJmNq53CMZQUJwmV6s6Ukpeo4rcYSmEnL8CY52fZ58A87noFkZM3LCfWoWokt78Qey3M9QF",
  "key25": "5rcKBmVM3ob7BbzQgGAHHsBhAdB8c8hS8ogutV8jxCtqQvCnr3VRtw5kBpuPhnoTMj6Ppz7zLT9NRybnLziwSSSA",
  "key26": "5ep2JokibWSAznjKMkmLkU6YBTH6JRQ3Fq16W2F55zMXDCeNQmM8DJBFAWZApe5yDoqxDvtpXdmooWpuNnF1AbL3",
  "key27": "2MpQcS8s1Mra5qhRUKYLNNJ5P7ZoZ18yUcRB9rxEYZLKnNU6U9YnUsvFkN4KcXiPPpotH7HFQwckfY8869EMoKwP",
  "key28": "4cE4T7Vk4ePkFESKFwcpSViZNnBYCFQemyXmMSsqnsV5kfmcKVp1gG51qR2EaCJ9Se6vBDGpzHYrJEs6VGTqNHqr",
  "key29": "3ZxsdJ7AiBJsuUpFZaNFUhs4mDgpEBnKQwmAUv1TnhfTJA46k3fiJS4Qp2qht6SA4R2ph7upy9n15ckwG1VbaE2Y"
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
