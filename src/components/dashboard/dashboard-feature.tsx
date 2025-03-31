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
    "3zBnWf1EwPyRpKgrXQAcnthBBgm4YZt6zQLoyzMrAehdkZPhRLApwiivgFQVaYSe7gZ6r5WntKxxM4Vh6vVNkmm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29VmuKj4JfkQCr7Mxrgg3JRPWFe7VUaoHe1P4tM4uhmXtHD3oqYcLbWvNve7mSNkwy6785KgQXxndjfp6zgKvqWJ",
  "key1": "3CMJ1hSaLtmnN1kscYxNrdBLGyPvjkXtp7c6mNzTj5zen4yowA1M73Uy5DopM37i16ipjYDhQgc41uctsX8iLvBp",
  "key2": "5AHa94VT9xBAoTsqPNt9BHAGSevPJXjtXgQZLxAiSQ6Nxy8g8Yww5hcZrYULz7Kvw7MtuPbP2BvwYLh7yhnmGY8J",
  "key3": "3cPFJXxcKS2ok9aBHCgvvGH4s7cAtML7jKJiWDkdrcbPNNphxiA5Cf85FrAxcd9pJUN52XAcMvHHGEVs9gvJzenT",
  "key4": "xDjzqi5JGm1sF3PPMvxVCweEktp1ZNp8bWuEN8RPLtCZ8bY3erzeaARjENCcX9WYYyXgn5nHKXMwrxSCTjyvVp4",
  "key5": "3U3iYyrq5q89uAVinTL7VpVj3wATFhHTDbJef71LkrrYNDJzW7XwCFmVi4VbWTpa5Hg8BtmByXFrFfvBu7WEso87",
  "key6": "2LBaLMrpftuf37zGbyPeFRiJCd6bveuzKGpszJAMMjnqrNLAUM9em3dJKiKhzaHQ9T3LgDZ15xSZzsqa9DwavRWV",
  "key7": "3qe1EU6JdJAitiLSQCSrZuBchoPjkiH23ugfUVMChutDAq2Nxtk2xJK1JHrQNgn2ZMpzJGfxk5puCtARi6o4V1en",
  "key8": "7j3TnDr86X7o6a25FAyn2z4LLroz7kDncBjMVbh4kTfVwHYnaBELUweVrqyQqJBVjv7mh8twk6hVRfH8tsWz94n",
  "key9": "4ESYYXVNwihCjfW9QjqfXYJUmRYdgyC2cHFYKVDPjzi7oRi9QCeS1vbbXFMmhHxTScVz84tCmSxaVMVCUQtK22qL",
  "key10": "arZXmNoMC3uXzqu75DFSUUySEGR2JXNACx9RkV3RnbfJAiwd8xvv3c5T9JHqvkTPFFLj3D1x9vATKCYmzpKj841",
  "key11": "2PfKCjE1n2c9EPm5ijKZypiqZ4m5o1LeRLQ173vnHZ5Xvt4Zb1gdASi1ZfZcmYzMnBv3goxz7hY8fdwZxeY95552",
  "key12": "5dMBYb1PCbDW9FantdKy8Ng8pLFdXdrp111hTLVRKmRNSUyyNfKgm36BJer4tA7j4GhNA8KRp8m5qfohQN6dFvrz",
  "key13": "4C5pnAjs4B6m9yqDisg4WnUXxXGtKi3WE2Kn9Nwac4BJEunE1NXHHxiR4XxVtuEmcxQzx3wJ8V2peYqZH8eBCaqP",
  "key14": "2ctSBipmq6vqt6iK9L1DgJBz2UR2TBMb9gPPaCPuekARGtVJWSnuCeL6EmwWykkCWQJSUZsMSsDBaV47EdE7szfD",
  "key15": "3hxqv6Q3c3nPg6efoZYi7Gxx73guMmyHnvQYjizT7q5vaoybTcCy7gdBL4HrrJUqXDXvV8rwkRM4AzbMCC24gZom",
  "key16": "5TFATjr38TBvCLdm7TMdxxXxwg2RRFMfnLViJd8h9VGUsycmgsYh6gt9zXVXJn5dFEXaGgyKLdjF4tbgUawk3CjN",
  "key17": "tdfHzLLCpMN7vKpUsreHUp3jqAmNDnuEos5vJ34iyKWSGNoiZbJd94r51wnrNjUke8zRufJF2S9A548aG9kRv3b",
  "key18": "3AAWqW6XoeSJegPFxtADmyFkcqg36rwcAyRUSmzfqGF2JogVF9fJRbpn6PiQDhwBpSp8Y83Saqw6MiZHJcxKYq8M",
  "key19": "2xdt3eR7Dh2gwjxJD1SnG7nfBLokwu9Gwtv9qHoEJPCB6ihB3Dm6LyUENXyZzRn2VcfM1c77j3Qgb8mKPyGac4YU",
  "key20": "2CeVWEyxfeSXRE4ESizEZsXtV5f8wTQLXmE8wkeqq1pA15ju98DNnSFVMzY5dWA7Cf6qQwy2yxeQ6jdToD2WxDcm",
  "key21": "TNbRHybq4724d6VRP5u3s5avNf88VF16EJNTvfTt6CKfns9hWo8XiYL3CzMXBdaVHaFXqFKsv1qc8oeqjCSb4wG",
  "key22": "3pJNchu7J4s1RwhJXLkbDKwePt3yUgkTHhpYBoJVuyhyfT6RmyKsi9TcVieriePafsQ4xBc5UM7qpBz6XQKCYCpc",
  "key23": "38XRrrNBGp9TNnX7XMY277NH6K4n26bSgchj4j6iMEV5eWoKErG52uMjHTsjYUL3ihC6b5Q8FhMuBB32QMLtuMt7",
  "key24": "3gdCoUQqeHLYyrNrLHM7jAYzmLYbJdgQkpJTMRVQJiemYpLzE1HJkrkEciKiCuETw8t2NFA9WmuruDUi4suc34KK",
  "key25": "4mhCeyZqH2C4nVytPNQ76KvacV5ta4urYP6ML5Sy4z9seC6HThAbrBHoGiUR5teqRAuLPwheLW7FCkxCF5JbTfY9",
  "key26": "51FdZjPPgJD33wUyNXDgPwDXhm4yrfLckRW6VLmTo3xGZ2tbqFHSwsBkujqAJeZYq4k7a7ZhP1FsAynVgSQsmGBs",
  "key27": "27Au4Dnb3RmpDQB3MnDVEPvC6pTShz1MKKPxqZ3Cg4ZamdrtEQv4oWF8TgnnFU4r9hsV7Dk6hYkPZiYa1teqoWWw",
  "key28": "5twVbHR4eU5uojzQ8MSCbhHCFUZ2kYU8rkVY9YV5fSZuZLauGtdUJ8N8UrvvyUfLWN5yCoWy2uXpsBnjJt4wYWLj",
  "key29": "u8e93SNZf3s29c1wgYvV1kVdN4S4gB9NAyoSAQXrhwkbR1DtzQHB4S6GWrbteBYHfGFfujse5iqbFcpmnnZ8Pvo",
  "key30": "2qzwB8aUNCqhuTKwQBd5dVgMokcnvEHHYgDwT1N9DEU3jmZ8GJtmot4XYKbGkEKtaEgPPzSkzwBa9PZwDt9cWxJB",
  "key31": "5GCEc8VRgGsTwFX82wRzAi3LsKhcwZdxGyqDwXimebShSeLwC2ghhL48c4nBAWdtDCi97nMkMdscJH7YXJMPm4cn",
  "key32": "JfnYkPcaNxhLiA6GvyvgyXLN6DFjJjsPEdko5vYimoAkHcvbxLXPD5bQVroTfByXnCpdD2v7Q5pd56fdDiMDabt"
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
