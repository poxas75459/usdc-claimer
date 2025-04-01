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
    "65DHmKN6bkTGs7Citpq1oRVTJLgJYHnhGaPPv9WuzzaDyjwZBrgUZy6zrjxEPfkMvUxTmxXxBmjnAX2fC5Fkv622"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KHbrG437uY4jLTDzc74ZNN4NJTjA6ejQqx6W8cXJDbvYgayopMXzZegKBWZdUAEaxFffPSPbf8EvaZDEfXpRMQx",
  "key1": "3hr7B85bkFHXRzyGMZaYhEiws6XHQmYUjH2YQpcV8ujPD3pdJwY3mpGHCKi6QSbpfZMZ6CGpyvZ6uCvwhdbWbGXY",
  "key2": "342NuMiq2jKu2bzJo9tqi7VfFip1tyqGuBrym1iAZcK5utEqrMpVT5NNDdrhboxha3pG5g47gLCpRvUAkNny14J3",
  "key3": "sZdnahndZ7CSigkjgoPXqzxti6rTbni5zCusUkcPkDQVo7yVhy4DDZYCqjoP9cuMYo7V1w6SugmbEbWvfZ1LraQ",
  "key4": "4SzJCUH8YMjnRtfYmUNm6TXJCu7kF3fbTgTW62Xhzeq7nuxTuCKQE2Hs1f7hu1cjhFM1LJZEZzqoUi591mDhAJXy",
  "key5": "4aZNRhT8apuDM91WrT5EuSquwyaWyPLPksPGYBoyQuEM8CaYrSWdKcrQZFTWRUiUYQYuCMHGDDFV77o1AwP3H9BC",
  "key6": "2FxE4pqR5j1PJsjuGJVje91w5UZ3Pyfju2Rf9fR6i8CAvZjXnDE8qBWvmJB5FtT51NWWgW9YeHJqzAiMLXf2jF5",
  "key7": "L5pe4ZaJqwwYpkvkc9Aafvi3yGqG7ySgFM1jwFrc1dp8q19MuMFWz7KR34C6uVThZeHKuzoCqn16bwrNJGGxQdh",
  "key8": "25tsSpwqho9cEzTJzuXcGkewYpRSNRZobkKGjhAC3TbBxYnNNXmMjtJ1Z1m5DUnvNJVZubjuP6KRoPmdcQ8xGq5R",
  "key9": "27DT8dBwrFCg19K4oMVcLCuQcRR39wtVyaKpR3VpUQTzHDTEH7pP91Pd3kqNc1LibPbydGB7U7advjgXTWPS5MEF",
  "key10": "31XTknY7D9e5vzSg1Ecu9fNPtnikg4T2FQNTy5EwLPAqE5AUSmhoVF2hxTM5ymKmVLhN1r8JHzWE5JREBAU9mYwC",
  "key11": "4ifsE2KuTcVEUib9ng39K1cnZbS1N6UeYZNKFfA7so2p7ikcBX5GRtHqf4bERVjQR7rYCAkCeZCp1R9eHdbCSA1U",
  "key12": "3JRDCd7JUiim5vr8LumkvSFZQofrbiaA2bvdkg5P8NFTCRkjBTzqB8kQC4i3oWQLz2z4vvRWXgyYovaxsGd4WQD3",
  "key13": "3YPyh6nf1sb8ZxvT4Sm4MQ9sS4cy957sPWcTkHLQzn1JSjiFhpxTBG3hNMP4yXVmJvSX8qDqiYGhyqpKzxrpEsBW",
  "key14": "C9pqjwVAsrjLXUXNCNgcNi8SVBLqdtuW1AgEznckcEoLNZqb5cQKUQhVspposh3anejKCdpnn6QLhDc1TM9D73p",
  "key15": "3ARb8AS1xQnWPdgYWC4XwgPMSKWgb94kdxp485AA8A5DXbQNYbZDu4T1Jz3ch5pTeZUJJpZ1b4NWbxmJmwHuofBo",
  "key16": "sEtCde2fpXUiCE3ckurSCCjfdYoEqcGLJKoVYrXsKzsCrfioWZxxS88K9C4dATxLmym6zzPxV5HEHYfANL6LjHd",
  "key17": "4audPPGss2rQX8hxPDM2nr3AQdJcGVmKorH92ZeE4NpuVhqF1ipFGM3mwnYZCYexAAyfXseoNAHhKHarDTkuaLfN",
  "key18": "4rBuXmF4Xz4jR1pCptxx9XixzjQ6KhEYNCgUUpgtfi2t2S43nu82vtcNujZyueuj4TkMbrpmRPVqm2H55tsk1vrs",
  "key19": "jzYN7nvxA2khaevLDA7uv48mirdPLcFYXiqtCjecspbj4LcaBQJno6Zo3AY7FF2GZ5izK6EmzQoKaqvrfYt2Fca",
  "key20": "22AqA2px5xBdoMZ7MqVjBTP4Tppuvt8MLrx6FEqQLacjVnVFvrecLgBtBN2hgqk3oRNMahr3djWxdHgWrYU9AnZS",
  "key21": "388LmyQtiWLnGJ66m7tWwbAUNCJSsdTHtWkwkc9E1PVgbcawX1poPhswc8S6kZw98gkDwBRCGHSKofhhCPAZV5zH",
  "key22": "4dM1TDsBBEYR3uiNjyor2MRLLR1EMpPARtBVDdoSbYQuNLV8FMCbqqRmYV8y1P464s7wSSXS42Y2Fg4iVAMJf14Z",
  "key23": "5c8L5TurpunxDoCnJCaFdRT7p5GDZzwoniruTJsvTdtvRgHLpZHSiWCSTX9v1uMm6MSRwLkdz8UNUZM6F4FTUT8F",
  "key24": "3k18Ln9m7qpqYesLFiNRUwDMvxWzzEYYNp7ozKXYbcpEJvWqpFdrz9fqeFMSjiq2bgzcALF4Ak2d4ApnsW1P1oRx",
  "key25": "4yMSA73VcQXCpobPiJ97ZGu7mg48E64yVd6b4d1EWPV1NBBgvqwHYeVM25oayqx1C43eYwYP7eiRcad65LULFGrn",
  "key26": "4ZdhUH2neLPWYLQJkhJFUoModo32wpzDEDPMr5fFGRvSBGWn5pG36D8TzLAqUU3f6GoPo9hm4LQZjThqFsbyDbTA",
  "key27": "w9WDVU4eb3jbq8PjQGECupLE86eGY8rZHeHMgzBvCfAfrXnP9B3MsfLbKk494VvfzUKSX2dTCT689v8QLw5D12f",
  "key28": "5MQ5E7AQzP18CtgkAjg1eevjNeWGAA9WQ9bne1CKCX2BCzHBNx1MXVgX5nRENTUp1TgeHeMZXbQVvHuRLvZraCwg",
  "key29": "d2wTpqMYZ2Ssohv7M9jgjgtP4z8TTnrgtGbLZNLmTLe4iAVUTdnuHR98DEenNGZv2LWoCKsg6G2hsHHamUzUViF"
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
