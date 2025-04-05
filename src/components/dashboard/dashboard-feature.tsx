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
    "5eJwEaa3s4d2JVhqqhmZYELpUP8Lrg1JFUUyETxHwse6QVPdjPbQHwnSpBS3vP5RLh4PnSLSY5gX1xhSphQHLaej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jp3qsQMqZRuqqynVNJyHgXG4aypeVgLfgsd5zBJr9Vhup63PtQ2vPNxFexB7JjesVvkDQkvt78PwPVfCJA6wHLw",
  "key1": "4NDEn4X3M3NRNbwPi39NKhwfRayCVHeWuonEHGUPwMSJeAuqwkYKetaTGvgYEKMZHbREgCmre25BrDFnQ4GjjKEw",
  "key2": "3Bjh7C8KyTrAXd7NKkXBt6nHp1vv1aup2vewFApxaXT935XVjr9QJCTj2oksK7iYwoAVyZuhNSoqm2FQY63Ey16G",
  "key3": "4TkJf17k3o5jidNZFvT4nm4PXhLbbRJPNgBx4aH9ZZmYkTvLdMATAS2zk9gw6amAWU5ZKzSsXziJPPEH2AoANC1a",
  "key4": "eMJmMW3iqSMargWdSRk85pb7LFghSUXAGHD2PQB29Sp6YXS4PmguCDFhjBWECLNnr1EHN5GeygnQE3t2SxzW1sV",
  "key5": "5tG5xyV9Hntf4Wu247ESi2qsTJNFx9vv4w8gUksgDtE6znaUxcMBEHsMYTt7LJ2fUs6nNB36kGe5GWtydzgdtt5u",
  "key6": "4HDwNv2dNmNP4kWZDs6v1Q2T7jJvFVc6mLKQ2nfdDxRp1HfGFWdySpqAUTMHDp3dsipsD9TVUkE5ABwePEnn2G8N",
  "key7": "5WNsHtGuj82VLakfcug3cm6vfsVzRTjPio3TLFNHHeMwdfhSARBd649i9qKfKeEMt3sAB1aGH3RenbmiMgnmf4RD",
  "key8": "3UkffqaNtgMEP5JWs9TNP6zwqLCqCPnSRJ33BZTz9DyrWEGvWbkT3rEtnFsti78i9esr1MRR146MAL5iU3A6kUqD",
  "key9": "3r4tqtDoXm9bGRiBtjDmHVJs5eDw9QYi3fh32TkxWmUoCEbfGTdZDJGbNPVdAegejitn35rvPju4TR7Kjqt9b7kb",
  "key10": "Tegs4snU3nxakuWVB7VYiMM4Nvoxt2mcisDCHcQuZkjmyyuFeF3WbUN5e4rEi6L9XhhnTadooSpwvM3bmMjiTzW",
  "key11": "4TJtDJjCHmyvBpdjAARbUgBRXCAftP26wEZc1RbBt5NCmNQ62WFaEh72Fh827Msv9Yjors9UyJaTV4azht6znYW2",
  "key12": "2WW9nbJUhQenMkcyk56FrVm5GtJAnvqp2mw8MyFSKyJTyepmnkn3x3b55vVZwQtqzctHuKtkjFit8aNQWbnR13SZ",
  "key13": "Ssc3JGSmPi8VUxxVUfURTYLJyanQJgWMSUAZcGHNV8dj224BAZYddvXv4PWMXUrbL5nJ4DGFrTq64mN1NrLEQpo",
  "key14": "2NwuHCeDX981wWfV43ZqpNPjn5n4KLqEwo9QUovuAFYyJdC1jhBBWPschrCjk3RvNjTLdfZK4hbjwaKNV4jKmAny",
  "key15": "4k8w24d3dWik1kzJqKfeZgeZmD6AxfobFuRmAGG45t3qYnLz8TCCdmuUSFqVLnGrLxvHKG6tJd917WzSd331CyPk",
  "key16": "5Vjm67R1pJop6YN8NCQndShhhk5g4kVLhSjZ4CPDfRtBSqZvikPHVFU5mg7bjwHFgnrQgzRMXhzwiLUKHQReJunj",
  "key17": "2ZDEwkzsA8AYAWPaFeDU6eWzwoBB26B2MTzLai1UqihtmxRXwBYKS6BULEsCQxXXitSQtGeaoV7YFTuUYDRMkS5D",
  "key18": "3F2i9hW4LtNVnTHao4eCpiwLLdddvQL33s5oEQ2Lxg8GojWDFSi51y3mFmhPa8CUx5RJ4unA7DAZ98TTUrkwByBw",
  "key19": "eHuanEdC6robrTiB8cCaTsB4ffpUMHztJjXSgoNV6YcykYgKh51UygTBbFabtjZCJraHxBW3EzZhW5aqx9MjgKi",
  "key20": "nusjRcdKiD871XhHFxRnifQjKYy9SdNunhPUfaMZSUi6sJvoL6HFcAm7FjMQszaUEJB3zNqhLq9EdysV3v8qKsm",
  "key21": "pSZBtqVv6NifwHWqEzox7Tv8w6h5sri92GLu8BKaCqAoae9KtoPqginREuQ1r4VdJiwManzUEkZAJHQ3PcR5MDC",
  "key22": "5yiMxEWs5Vdx4ZcXPXcZr1DwRT9n6Lx7kRpcFbkiPbX4BVw1GprAbDr79ETdBwta9ge9ekDcR9e5e8EmuoKDfCnx",
  "key23": "2xtsnrThHh3YHNmUPrbRKFyPw6i4xci5PAhwUjUQDNgANJMwZL71KaNWRoebJcivb4AcRiZmrcwQF9MvFEH1JTck",
  "key24": "upHdjAM3fABaJqNkTE2aheyvDbWgAQMz78Z5EWqfXC5CbKSFWbe9SFpYsmL3pecz1EMgmx9TfgGRAo7U6zSXbNZ",
  "key25": "3kneTYmXeMJkRPLzKqEodnijZYYh2CCkbX8z5dty5SmYUGjbk8Ah9nEjgi7BKroKgYsvT92Rk81LWYnP74STUfLW",
  "key26": "4H9cN8LG5YsKm32ZJoWynUDgUX8UQV2i41pU7FarqHaCXJFnspTd1zUKWVHCFA77nMpG31u4YrDXGzszfJzXpRR8",
  "key27": "U7K4CYUCSdbPJ3M5Lzyfd4b3ZkkbpqXXhq3LwhWTPUHY7WX7kRyGY9iD2iSMEncSYDN3C9erqrCxoPQd9URzfMK"
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
