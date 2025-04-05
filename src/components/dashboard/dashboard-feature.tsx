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
    "5wUBM4a6xqvAJKKgJUHo9oUFeNxYDnHPo1d6RMpuPLDuXzcmZvWLyXdhT8GDDseTn9zw36VwoRQQNRHiVJKR4jz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52CThz81AwGtpVN2MHWBgEAFA8pmCfATg474sBNBNaPgab9vQ4eDzK2gs4zDHQMRpzmiHje3V9tGkZnatNrY5H9d",
  "key1": "BNXSnYVKGJ4Xm1CWeYzaqJ8nX7bsMRtSPwWXorfhHoJhxHkyerSiKP6Gr5msrPx15XLq2xTy2GS44gSkEQVaBQq",
  "key2": "2rqEqFwuGiM1SY3PCoqLgdy81jSkA4xgbhrYqzHJMEXupQG4GH7KL7cm4RYmyKYjCLmhZJKB4dMCFBULq8gnrqwx",
  "key3": "uUf4MaNtP5BPw8rSGrvMcgQE6La1pWq4JxctgYGh8onTTEf5YLsaX8uVEZkv3tZMyrb1MRJDi26bJD7MXWWYNsW",
  "key4": "4DvXJTPdnzTNBAvLHM2dYhYDrii2m2nDPwDiUFtYHg6a6qBYEeSEp3fXKj77EpAgtrAMCjqiRtYpyCyx73sKQu1",
  "key5": "cX6KcAYX4pBw5rzt9n6VT85xVSY7aeAtDVzYWTewVWaDk463NTomcMXcfBAXEY3szhASaSrrg9ZvJJoS5UtSRLy",
  "key6": "3YjX9LXMKE1gr4stohRF6S4Aqkj4ngTavise1GAJr6W4s41CEaeVt4tFa5VGiw2ymksDZjaMMnf5BC2aorVot8di",
  "key7": "4UMd9E56eYtdcvBAoTwHLjkCVNXfxw6R2vQqoAtQQNStp5YpdVJpe5zcPAdva2SMnY3ZgVsyqgS7h7CNTHdCp8LG",
  "key8": "5UFuhci6mB2pa7W3xspVyY8SqAkyPSXGjAAb5dwQj9Ru2GLtRadaeUKTFK4w9RsPLfmjk61kAowPcM6zAk5LfGgp",
  "key9": "3qnRfYDUj8c5r2Qon5e6STdhhdhGmKs2M2Ksq4KrZHobzR9D4yAFA9D8XraWAj1CdjAkpUx1RxHKcVUmbixsAoe2",
  "key10": "5SNG1Bv6X4tgxzSAhkNhtRYhV4ZvDyvoDDnWfJUgKu77myt6ocRNqQLQKbbUxnDFJJtiKcKjEVTdNX7J7iAyvUhp",
  "key11": "4DSVG5FjLfdM78ckdmwDuJCUMurA7snWaZcvFhaEnjVd8nSYwqqrNYXBDerCgD2CbzMLNykACPJ3HFU4RzxY2WgG",
  "key12": "25MdDYCcQ92wehMQdAYwEriMPWkvWc48g1hhGFyPMWbwfkJptfisGm7t9C16PCKwtB1dvisG5J2KpyMGXjSKUEEv",
  "key13": "4vXWsC4ykHMWQXXanoRGaECy5jdtTGjnCpRuxYUuyZ2X66HV2QzvzfEmkpC7fS9i8r5YchyRRPqF3uoMWyByQzHL",
  "key14": "3Dpyz7PpKba3WFHsY9unFHSw2oSkyFh98aWBD4CKzoQZsJcvbb79okENpRJ7qXDRDgbnN9D2CcQysXQuZSq3JAWo",
  "key15": "5C8iiD7K2vMTtD3ZGNL7UZhz1kFzWNCDkazBco3MFhiXwrYLhSm9Dve7DTygF9ZBCYMyXXeLpdj53EutvNgiz1ef",
  "key16": "5dZYoJTGWiAtxCNP9W4pWyA1nAvrxyfizagxepHH2dBQq9ruZH8tK9d7Usf2DAszcnYiieNVahsRuBpCQ1XmF6hD",
  "key17": "3PTFmDGF8RasNKwd8V535eV7tSpBFa6iWwiM8Q6NYYLddCguT8ykUJ6HRffZkSnNGBPwzQk277KrQXn7St1BktKX",
  "key18": "5dxrDG95kYVZBbdSFuiqcVuk4NMH6K7sy8i4tqUgJLdJzkdwLeQh6uVhLRrQJdmsseQLaMUgJXEXhGpfjoyMkESv",
  "key19": "2Juyp2k5XgzyGrkPWYrEwymHfSmY5h72exKydFyccsHra1mCDBBCDfTQ5EgrzfSFbSiDGkSpuv3wTB17ZmfnUbNk",
  "key20": "5quAaVBCKgcPZSnA1kgviy22ocyzbx1u4JbdAmZ4Eg5T8RnYNaFhFMiQxc7cChDWJiDV4mmdCjXgn8c3w7XijsLZ",
  "key21": "4PeycZseeZ1GtRCFv97FLwAJuW6eJkJihNVs8tmiiBbkha16rgK2b9iHLnrFEkYJzKd2SqiV3HefJLTwHvqgUFgr",
  "key22": "5zFWF5oGRepFwSbBCVnYVWvBjayCEbuju1VafUo4y5ViXmgSJZNxzzNgRgbVQJBtchisFz5aBUZnervE5DBM6Fen",
  "key23": "2cJcG9FL2ZZYPnUUzzQ7EY48vjYdMzuKaXZJS9wcmURTyvAhwE45vAMGmMdam4mwJtmjxXgPH9AQPKcfixYBZfy5",
  "key24": "5rfeLqF2NnhqigCqaDEg8wRbBLTkqPeUJYVo3WCb6WYCuRgmT2NwqzReap8NGFzRXqgbWiE7aXBzMMKcjzupxF1G",
  "key25": "58KJ2j1VuR7YvnAuYyXyQqJscwnMQt4vNijJ4uV9d1odTNyZTgH7GKuDu2gJsAi8rKsb3NsHEAjfPSuUZd5Be265",
  "key26": "4YTABQXmo2Bswi8YywqpwkL1vVrT9hxVw7B5gc7JKyKcqnNThD1mri4cUHjvuZCyGkT3v5SqBbqsbEhWNonmf898",
  "key27": "287Bm4FPNLP1XBFdYnZyQWBdxfJdX1kGr1nVNPb3AJvQL55KSrd5XGXe8DGe2MStcbS3koR4f2KAzQNuEmLMcFzf",
  "key28": "2uNTsBjvGAb3A1ggGGb66G3J85Rg2LxYvskakvmJ8XYpHRq1LhzUXAtAFVswUjGLGVVcdUM7W921Z8YW8TtibxNp",
  "key29": "3UXN3AMeHoFBX3rbjnpGga8gvXAxpPouz9wKVazzR1zRx2HgkN6JPjfvHtPSdVLcasmvv8bTN9xeAMQ8ZdpYnDCw",
  "key30": "4X5FTimo2nbLLscvpxbUXFWM31eeESeyCEhuB4jDgecPhqLwvBEpD76dQH9FUgX1LaZ4U34LKdEa8y6R1KKP1yAK",
  "key31": "2xaXd2qPgBD7ofSvQtedhBYuJbPcKmVo8Gm78ZDf1tJXTY2CZqHFeea4mua6csivEXxJZfCpahQgkn6MuMgMuvGv",
  "key32": "3LgYawj91woC6PGdaF5fZeK4KWiqSDHENEr4Fc9eSDtcinZbquQUwQKVtQDqPHtkUoGsHZgPXgxDZb9br1ccUB3q",
  "key33": "2PLcXxakVi2oZPEDnxvatbp4guxCtrDHXqaz5Jidbg1sUx3HFVhbfhu7D6BmMRZ9YRsNnadbsVaFPXUAN2y1VCMQ",
  "key34": "33FFp3TvSqQKK5fqcTJnqH1sEeRqpMFQTnuhkDS8YsjjdFcaPkJKB7LKe4Sbyo3xwMRsGnK6qpBKXjqe752YiNcW",
  "key35": "4T5HX6DWJyS7qweqynL2koda5FWgHdPCAXmesQMMDRzXRpkiKz8F84dZK7M2m2XpoYVUAVw7GUv3oNFW9BEHTUd9",
  "key36": "32VPAFxB5vU3RswaraqzA8RoUDyuFdbgHzgxaRZB1frWpj69bPXUFRsYJ9FGKFXFUv1USvhTr8KhDM2CYwyHkBjZ",
  "key37": "Fi8ADFTaXQ2tZxotXte6WpoJ7o3ymC27zj62hgtwMbD29KfGEHWHVi78YiQDzu8aYDJj3nP6tVxzWA7n5VS6L7E",
  "key38": "2MsR8H8mZez38muTspZM8iC5iahRBhMCFwgg19gHKNtZEprvSCAdDxDJS8kZ8yx2vzsV3FEAn4haaPiEYie7x6w5",
  "key39": "63fpHoPU4Qvyw2FiYiEe6FEfGqgqy4Fqe95bUjY6ooUmKLw8E1QBHe1LMVC5bM24YFSBsDxLa9Dhm6TBm7XYG69q"
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
