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
    "2iP7F8nKvhTWNKwwL9yTYp9D2JJ2igrej6fHapzoRkbHuux8pht1vxWX8HM54JLrX6JzrjynYkJB8X1Dpqwy93ZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WHhcwjS5Kyrw1xTWgutuENnpX3WRFbgBH2twLidn2wuW32krvSAmSWPAwm4AW3Rhnrsm4xp2qbip2UX1k58FVfF",
  "key1": "2ovJFnbCa4EY351V3TWsgBRqR3dXHVisHJDncf2NNX7SpRPAKR3FFnUct18AR2buNrDrxf8ZYYSaF9Mk654yVoQj",
  "key2": "5hJ2UN9n3czFEPfYDJwhPNaptoY15LLVUEisZQgANuM6tphqWcNJeL2834A6xDrEPrdcpPux8ZVCgyiyTnq4cSz8",
  "key3": "fFMUQxGQQen2JvQJve42dy2Ugd74BmsgexE9Q1bF4diSheuSDKh5CTJfmMerrvWRiyjGa9c2KXG6MjzN6KKjE5Z",
  "key4": "2DZoVYj21oB8tMzfmuRDrGABQuUXm5Fczz4hFNGfAWEbd5xZcxUanz8RM7Uk56RmXwnLBKyniMZm6yqJnB3Ee2zy",
  "key5": "2M3H51pCAYnxZzv27i2UrsnHnZ288j5B711iHzs49AuCpjdhF2AZosuACNgSWMfZ5d9orufGLeC5KXQz4WPEjobT",
  "key6": "2ZRtGrrqTXEAZf7EW9esnFnj6Trikvp3DiFhai7Tnjuw7xKZVpxfZm8KqW7zFnVsUfo3DX2vCXm9PKXKf4V3M9S2",
  "key7": "3x3SYYerd74rnyCeWB9XAMxRE5PFL7c5ENEKrgyMNzyTCdnqnJ1DNv4A2VDPgyPhF6PYQBgUJd2haoe1o2asQrwe",
  "key8": "23MZn5BpmBn6ZMd2YPn2QCri8vgavGXtrGBJg7uRUBGQ88NM3cgx2BcLLcP6WCGX5KH2cr4T6FbqkgSrj7jJuaUS",
  "key9": "2yjaVoJVQujE6PyXLTgELNF3J3ud7pEF9t2h66M5QZ6whJxVmU5MtRPzWC8guZiVuj1eukZwXSXaAgKbmLL6Lv3N",
  "key10": "zQTZNzJFTcLzksHQwqFvLWYnR12BsTCGhmEHgPiacGRSRo4RFiMM6NLWGemvkbtdyaS8knF6aHqLpBf4aghsGGw",
  "key11": "5pRZb3uBY66e3R3Gb6Lqa8Kf59Xj51NUEzUNv91LVm4uE8WQvQqWHBt4HKRXPwThaAJNQ9xAHZXc86Z5z8yVh6n8",
  "key12": "3e4Rm5CUQmZ7QEUvBuXH1AGGQHpHYBJrSJh7YAvhbgvBnVWsjy1L9GsAdoT2Dxpu1bNWgyGEvhTsUtrS7YEoiWay",
  "key13": "2atBkwvq3WNBgSfZjDqQdiCwm5oZV522qDo52emJ517QUekdpZNgHSDkKG3aRPJ9e3d2U2cXQoUmCv95xNDpNK9V",
  "key14": "3CXzptxHKtJf8f495TJrLXwesKtaherxNQiaWQPfujF9wXYu5tcEQHKsRWdP88ynWK9CcXcVT68AF1wtxa317wNw",
  "key15": "UEVYaojDmC5AF4gh93W64KZgneSRGAgEQ2Vx841QBmBgjuU9qqiTZKvM6pN8EeE3UdAFkW4A612nw2XAiwUSNtw",
  "key16": "3oHkyVErvmZFaDcNhw5ghtYJ8aJc9He5XgxiguVh86Ho8pCTtC7SwYfNpZhjGCGweCzLYPDQxCvqJ1rp1WXEwPJN",
  "key17": "49LmRD4zTZbGoYfVjXo5mrtjHJJDsT8HFAbQJoysGiSWbCcFf6RAeaQHAFfW4DWZ4ZhkPbsAQ2sBpSNHVD4qaN3",
  "key18": "bbkiahLdwe4DReUwh8FRPrVWr5fHCu6wuzD6WFYBN31eSFyHtuB32zvaUEzmXrWzsBamoGusDWktYhxz2ZVjBss",
  "key19": "y9X1mfb6ooXsrqMoRWeaGQLxhX9KqTNE2AS9NBWHfiGEpLyvWD1gKXvdGSbw52RMo9HUNhaBgcL8GwdD4ZvYu2c",
  "key20": "3FX3wmKQL6NezULkTh9HaCaM3hbhu2sV4iMGMyGBdqmNcCapXGmworiFsjVc1rKyNCVQWnpiFNrDLHJTPdB1WMed",
  "key21": "2qwErj4D5jkvJjvXhGJdtAuqj3KzxS5d7RXvYtvhto4m47GeHJELApfMcSThok43ykWgWcEAt4PUmqu4TusLZGcc",
  "key22": "3Sw26gLfdzYSVkx4xFkHXwkqKddCV6BHBsjRwXDXtt3LME3Ugk3fPVmQavoeEhoadFG42GvKk5oNkd4fEMHt4Lpq",
  "key23": "5SUCbMGLKBkFbpUq9oqwoBayLviQXuNprzXYUh6Pr97XPZety6QWtVe93UfLYVXGsnHRLnfsyGSMUq8XxRcnm1vH",
  "key24": "4dxa3yKb1tBqxkenwqKZ14STBwrQsPkCzVPexhYRjLhd8NdrfFbQTreLadNeoXvcBrAjbXHyhNGkbBxqBqP7ssnP",
  "key25": "4Ek7Vf6gFd9rLhF3jDt4cujjy8ZXkSN7UTAMxwGhNPkVWKEuaYHG5qFCmLj3VBpWEfxK4BGg6N7BjrQzQdgXAufg",
  "key26": "4sDrN4Wapyu8zWejVuF2tnUS1tjhqvB8PtD2akS1jirUmmPGRK6Ub47b1eJLDBH5c86jdoRHc5aWJyeCugooH65D",
  "key27": "3hdq97h8xphc5cyDTYTCHWGHrQ6tQv1yr18ttKUoBrt1AUBawrsZnnDLx83zwsFfqCGwcrMGZFhAtPxptN7yR8Kj",
  "key28": "29pqj2qMJX1BEbSEz8b94uBQqKbjboNKrum6F5fpeB7dRoJVdnnQrJo2VH1oRzdip8Kn6wcru3CmX7MyQkRPKymj",
  "key29": "5eMH3PR7UXj6U3XVcVYvHA1Zm1HQ1L4qrFNGBUk1EeeZCmCFXKqLBT3h1feyX5XUXuRsaEb5Wv6Sf6hASd3emFTg",
  "key30": "NM4u599mF5oAsYRj9wJ4cXR29WfPXyT2QVjAyZneTU9auw7Jvf5BpbjLfdbiTEzqzW4JtbTkZ241tF2JJns3Nrr",
  "key31": "3776kSfiKekry8sjwRoxjJFcyg2pqj7Kz4Kp98o4MqjBJ4x7uYqSuXSnjnY7e4T6hxtCLbQVNkkoXtKfM75Sz8FM",
  "key32": "3gT7z3prk7eWvx3UTKr2cKhDbGkDqd6XcEaQCkZQYTDR5kzrsTEW4yDikME1ghhbBQP5SKnMr5jTCAieCfAYN9L1",
  "key33": "DGzt2jAeRkuiLKg6bzAEbwRa5aUrM7MYHBhoYjeGfDjLP6VnPq1dqBdH89L9igFE5ha7NDvZMKiQKeDhJpX1tMN"
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
