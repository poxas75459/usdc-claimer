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
    "3WB75h2uw3w8oDRcKVacUmFGS47VZCQGgi5DDGErAGPeBpPf9XyUPZjXoKoE111BP3n4RWQyD15Ek9S7smZY24Ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R4nL7kREVRbkUysNvgUF1pjVWeF91ZtAhorw9dQVskH771P8isEJADYWRn4eZzXpsA3rHZ9JpgJ3ijVFjoMEwgj",
  "key1": "iZUjzKBZtA9VeK994V6Mhdm6JR99H6yV64eJqCtPw33DTUy922sjNYRfEtn9kJfYM77mR5ZpYVZTaytLnUxZTjs",
  "key2": "3eTaKQRcd57SGLbJ7EeCPugwGSvik2yuhxj6UhAHWpCowdhQxrMtKbiizHEt2BJ9QgEg2aL9B5LFA5Nb11R1512P",
  "key3": "47SEWtZZRSHrUMJ68ucLsJZWPREHJJnRfv98g83A1xbHU9PAktvMWzfv6ZaYMdbbWSTi8dkfivaWG45J5pmgvQdv",
  "key4": "RNyDYhVEpDKN7KzoUquhurdLHcUSZmqZDYbR85cUcHwMymmKr8YmJLd5Faz7aKyKw4RDtQMWFkHsYum2gnD8Aab",
  "key5": "34EWS66dMebc4q77Da4UX1t8YVAkJWGH4YwwyHzfDKoy4TNvEswBvR6Qv3FwQ3YxL8RSqfhDHZaKemTrgbopB9Qw",
  "key6": "5qHVMGjkfNZxi5fDiY5rSQg7wDZA1vt9G6utJSq6y7XZwZKGzB88PyBxEtLJK23eyr5Q982EK96mHTpnUG6YHYzd",
  "key7": "4R2n9N9Edj5dxSHJuozA4moS5um2mbsbfejtjVdxD2CwK4HnJ9VY32EJXJGhmifP81ou8UYzmhSVADJYf68c82XQ",
  "key8": "4B2y2HpsBFg7jsqjjoPWd9JXGaGTvjwCzokePH3r42Ynyc9Zg5YaTfA98EKTEuqEHMnr5mdd36W9DuDuUvd5gpz7",
  "key9": "2vXFe6fp1JrGWJv364wBnf7kiEu46hQPEib9rLq4skcHnCKCD641qfrKA5oEvB6xndQmLrTatvFpaMoL5S9aEY3M",
  "key10": "71r87Bc7QCzFMyyyvcasbyvPpexLDX3t2pXoawmSVjWtGAyNkRf2VF6zih8ZMLe71aszkUVkewf7dFmeTB4hs7S",
  "key11": "4CTHAaMWresd8kYjPwKo96KEgoLNnCjpZjZvQYEjM9yFdg9TmCjcj9YfGdCKwFHBrmeDDwHVY5Lbw6zcc7chmrQz",
  "key12": "3wqTwjhufUScTkxsH6muu2TyaQusXhgqzZAdt82xX8nbLVi2yHLgtwfD1uFMvb6tmcY7739F6carPRuihv1WrbYH",
  "key13": "2j6M5zMuBGCRsSS53HpiHBbQoEtpyxdm6fRk2pnG94durMDnWeJFwudshvNWjVxgnBmpr7YpSpD3ShqbuiKRzrqg",
  "key14": "3dk95TUfLjb92WZ7yceZCjDtsuD4gvMjs92Jhjhb8fi5j7Uro6b8LhZ4QLZZiBbF5YHgeBw3br16HF1J25N1q53",
  "key15": "5MKerUgou3aLzVTu2q52TnaEQFLUaAAwT3WkrPFHW8kpCUnAtHgDE7vVmVMGmQBQuru5FVTwJSF3tx5a7cguZJ2n",
  "key16": "57iviP8VaMgEeHZ3UrWXhnkscHSRc6Riyg5sDC52T2QuGGZuC1gDthfQouVKXVkgnjXLPxVEPvvLYp1D7QbjEVfJ",
  "key17": "2GZ7pHio7EyM7EuwJnN6nvnHZj895bfmE6tp527wX4yXS7vWZcVmsruBeYnjBWcCPkyuGud7sxyTwVVb9ayWouUv",
  "key18": "5JG26apN5fc482R6qRwpvxrCbdvSXTpLmwbQqabLt4NfX4ocwvmrw1fxUhDb9146wetCmcz3xuwNQYUHCHht1NyY",
  "key19": "JstR45NJnAKSmczL4FRqhAGFQTdKBbWhxedgxn5hnVteeYeyjWYH8Tm3Ees6WqY2wBL1XRJjNvxf9hkwqUjpbzu",
  "key20": "4LZPZZdgWmwg8xu4hsDiXokcJvhNFLLBJ7EHZ2p4kPfn8eWZYchBtDhMnct5GmS9p5okbPKhmRq2n9nc76hASZcW",
  "key21": "2nrL6UNvLz9vJRMoPCoQpiXayvDUw1v6VWpCLPvg8SNZs8hRFnxaZ46FMQgDdXZ7MR9LaNpyzsU3WcnCTpXoBzx8",
  "key22": "2eEn4A186DMcXmvghz6VH4rXqCdXhg2nYR7tJZJHjMN12UVHXA1qhB3BEf9UnhrEwhjsNVBoN85NqMYLbq48z5KK",
  "key23": "35UR4B6Etg1kFbkGxiqewaecCgTVFVGiHx37LpiDkze3tRGZfXSqiYZhmYauULvky2Rp6QbEaTaMh4BdE1eKWbbQ",
  "key24": "5tmdJn8BfFt7iNVd8QrB2GLya92N4tz5iHBJwojNkmJ2TfvK7wSbMsqzjHMFKvntnA44UAfUZcZv7tXpcSHCfzHg"
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
