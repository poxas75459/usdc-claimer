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
    "bHyuejHrmSzN2Y6EyPuGQXjuFEVZXhMuyN6tB1RSDBksXZgp5BFeVTRZYqjYa63sayoK9QAvsZQH3FAyFGXH9ve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FCV6iwBbKcEcHrtxuHg2LnL6p2LNADNi47EnWbSE15jzH12iRQE5Qf7BzANKHjVYsmjwpqUBTsSNUt7R5n12Hhe",
  "key1": "3FScv4NLoxFuHe19xqw4jSbeWrzPdodd44fVBKufXEbpHLg33gN7pr9SSLL2FWPA9LytK8wsPgJhtjRqSuu7XQuY",
  "key2": "5nEVoagtLPAFVXL7pqSXCXozkBRvuGAN7ZX84187wiRDXNzKqyeDKtxcxPf5X7NS4FhtK3oGBtbWSJQCj6AGYnim",
  "key3": "5QXkZ24uEzX5bSg1vM1GjsrWJ7DzeLrvuvWBju8gZn1GHujps26KzAX9EfdpJHiwUEDbK33S2UzCZvNwjiwTeEEN",
  "key4": "2a3RXNJTZ8Xn51LJb9U4LATatKoTVKWoaXzK3aykSP1xT11rTVKEHCwrhdvHC4edGu7A7LRWnLn1gaycVsWCFqDi",
  "key5": "5cP3eFi67DJmQWEV9Lcsep1ir8ZhdfmcYBjmGCaufqkbdMAKU68sSacdaxYGdmRnLpq6suNUYy8rdvKasYqraUE",
  "key6": "549d6jztk3g7Je5XCfbTsYHNhSiS2D47b9jMkeQFTV94MZCNPNeHCGfE9oSUYBdqqwNUNjb9eEUv3fPWquZe9sG1",
  "key7": "4VC9XjcA5qGBBFWWUefXs4YdcGDs5y4sRhW75enEuiPZvRPCGA6rx2ko3eqT6LMNkMmt3N5LmJYNfeD3TG96Vf5",
  "key8": "5wRghU92vDusXZSaEw13JQGdTnTN6hqXe51dCAy9mYBYG3zHxY1ZJN5zJKq98ekZemsy9FsXngfc6ar5uYApRMp8",
  "key9": "3PBs1WPRiCJScZDCqkc37cE4AzpWQm6SN17yjxre19cN88Ny5WB1zAE5qG5pR8HdA4rkqggBAbaE6FaUpaKb4Kqp",
  "key10": "5a2kgzq64EHunsgocoeUBPZW2i8hkdJci4JieWR9cLXqXx3FJA6V4ctXyPDC9sBkmKw4dbiWm3HDynfkf9xz8pUU",
  "key11": "5Sxm136ZDYKYwJ1mKWfM6TCcMJ8Vz4kBbqwcSTMFTUA8pfN9N5xpYSJC5zH55fM5zQJnmLftigvnfN8X4VUj3AuF",
  "key12": "3JZcvXtD3rvBFwtYekAqoEgS6dkVJZmox1YsFSy7mD3LCLdqa4j1ktXym5eCCXPKT8h5oNMx523LqsjY4bZRZg6H",
  "key13": "49fLbMXbyp496mJetknRSpyVkWYc5Q4yC4oQjtkKNiisxSWtDmeTZwvhgtuGWZVMjEAK6nbr1PwdLh8tNmNBVubR",
  "key14": "5HVdv9sSkZGuzdiAB5nNXLFRJqxBQygffyGqP3nweE8rxKKXm1aKUHEV93rZvNYbAE3M53YRQqMdFyFeUxuFjcSH",
  "key15": "R42XLsyjM3dW6dbT2ucw4XaxPTHCB8uCmY3oWNFTh8X84KPc4Pi1CmjgwY6Npt8Qndccv1MnEdmu1yytpFigNdD",
  "key16": "2NnaF7b59abMf8f1o4PAPByfcVrUvssoygHN78FoR5DXKF1kzFrbn14B72bKpQa3yCqmLEWjyWs3TCqwKZstSwFz",
  "key17": "3A6QcKh9bvwnaKmLEURuJFMNhAZMTFGAG6vTSmz2VcMxGujtuXnwpCUfjmnQ7UqQxnt98v9kYarN1Tyz7FTonYc7",
  "key18": "2Chu623TBHmuiZ111p8Dqca4FHcTiprR1kXRryjLTxV72AFdWm5cUbH55DxzomMvUAmsscY9WbySFXmhP347nbXe",
  "key19": "5HpbhxoX6o4Df5ZCZ98mcKgYipurXNSZMjtfn1G4f1Ri7wbnLhAzcFqE257Hr6pyb6VaHQrjc1MDbkG5HzrzR6SD",
  "key20": "4tMoBxF9i3eBSacVbib9sQ1wnZuN54usHBEdvur78sTLSFGZt8DPz1w2Gwr3aLN5fSMpaboxASXuGbmXYcShkcET",
  "key21": "4rv6bFCcVPoeyik6f8Hb1cND5VL18m4Cn7GjTabELr63qsic1fHDsqSQnkimn85U4k3QANY7RMTfLCRcJR4qFTAa",
  "key22": "4tYyon4PHueyY133rqGKz1kpZ9LuraZF5rP2fYyHY9e3W2s8rUVxGSRz4iE48RiHeZxkGNvFDK53jz9MD1ovSEew",
  "key23": "3PJdRJCeqntgoq1LdNJwMeZKUptJRA84gsNPccQTaEAzxrUb9P3tfcny5vrDrQ1kPDjSPqhfUR6HmSDnEXic7cHN",
  "key24": "4oYScq2K5Av26b373u88rzSdryqW8HkuVLn33nWQ5NUU8KLveiTnshj1j8Xq3DWEWNHJ5xiyLggtJj7TAee3cZsW",
  "key25": "DeQx4qkL1PCKa9mXiy4AB9ofSafjAtSnRVdjTtUfmc9GEz7KPt352s6BarZ1WCnUjPo2nGzUbWdr2zPeRG7aki1",
  "key26": "3Bvn32xHzy55oW9CMANxzcyw9RqRdbFxA8YxMuw1NEhCQvsardQquozpRwi1KUZn6AoT4m9awez42hMMr133vDDu"
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
