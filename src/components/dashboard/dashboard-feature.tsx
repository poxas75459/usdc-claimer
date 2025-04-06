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
    "2PRCAo9DD5EH3kpLmuKRrXbNRwCiFVHfoEqckgfBR9yexfe5fjcDcdaeQHYJzTUWCYjT8Wpa3zCvc37zEjj7MnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nj4ktdu7jq4m6n2Qwh8ACNaWxfuWd6NAC9Gb1a6BSQqvmPTz7M1awDozsJedSDUW5q3rGSCAVqeovSJTE2ZyGg6",
  "key1": "hThtskyn4PEiwBndPHur7EwvkFmeYoWr9vpfhP2h3bwpMJPa39S84PJcce5qeGDChBLTnDkeEMuBQ8pcHCMSB6X",
  "key2": "4s5BNo7jBdwVWRo163PA4S3ac39wKP8e9ytuT81gimWA71ecd1sv9RS1MULqqweKLqp3VhTNKQ4UmifuNgcy7BxN",
  "key3": "pDtMV4WetnGeQMmKpHA4CyDc2uXyA2EV4S6hzWA8tPzwmH2pA4LEghodkHK1A15PZ7RFvzYAAxYrbWe4t5catkU",
  "key4": "23GAUxuJZQg8Em8EHSBhYCKaS1W9E26NzkfRBZMJpjrH1oHTYscMwqYLpDFn3UGG44mjefMNzNKfMo7UvCf5pVms",
  "key5": "44fuL9seTVVeTFkZmWxF1uSyZKNXkpbt8PfmM15enuSJC8BEcmJfqXh9CU3n6g7ZiR3xTbz5AgUCKszx6id1W9go",
  "key6": "5hDHBNbs1Aa4pstX3QnPgztEGVVYB9xkHXXABC9H8EZ7m3pD5vsJVkP61623d8hwix1QP5YxsvZPLVzpHuNgCopK",
  "key7": "5yL1QrgJBWZcPevHmdAViazjDgFcuMx8w3daLDRaUJaqamfrMhyf32qwVm7cPTwsNTeQGoJE35pgXdt1LfR3TNQH",
  "key8": "3z7gE5idWGNFSjPbowWKaUt77uJdfg4kPyhhpNKTVAd1rxTrQRFXWue8VvHdnZdF2k7LghP9YeJi7rKiwMWMDMCw",
  "key9": "33k6ULs2v1URawAJPXN2xU7fdX9MAu43xq33xXe35FzC9aH3t3JEq4bsjzqDKfHhf7UPaVMomyvSKsp1u2EoppxC",
  "key10": "5RmD72B2P677ianvo4gnYpK4Q8VCvUTp7hY8wRnQqvSphPrxDMdhrVBNcfzuGhQ35ScCAeSSxW7m2cYLYQazKikz",
  "key11": "23vfmLXo3puSM1cESU7eipV5ZKLaiA3eW1B18vUWsXPXbxDhoYyQd3z4Ajubts9bBBpbLRSPeZMEfBW3mGFUBHMw",
  "key12": "x4gg5Wi9VwewtDNpS6CTaR3WtbiWi9tbDkvMeHDRR4GC5FPn7B7Yezz7UbyapuxsjMAic8GGaKGezZ9UwC5aFZ5",
  "key13": "2rixFX4ECBvEUVTaz8fBtKJNwxs3dSSEpgimL2Yx3fuVQcQZJQbd7zHV1uy6MusGHQF7dyksdNJaWoWg2LzeRCZ2",
  "key14": "KD6K1JXBCP2kc3q3jxDtzQE4YgmEXSK6mbLXeWjsybwSbzmUEvuubZU39eFH1twcDyvAqPeFDLb35BHAmzJPqnv",
  "key15": "2eTNTnbDXnMnsvM48kqpbK29Vx4iDXnwooSfF69gxxierQ6oeg3QJqDqgwEC7sFxREBUoQbtqmaqzqpipCxDjfri",
  "key16": "4hWYtJsdyvcqZNmyYu8VPcgqxRAZutTFVpQwVUoFAGCJ7ttkbjAfqJ86Q2n4tGBLSJttLUNk96Y5Bdmfsvskn4jE",
  "key17": "4mmhSrmRNfTNSoQ6ei6T8EdW84LhXUStxZuXLoGpaHoBsNkidSoktLaN6kc7jjMFSptext2s2kdDG5nx7vKTWaxf",
  "key18": "5irMkjjzHSQ4URr4udu5mCNhEtESM8aejqyd8pVYc7zrcKYj5dcKqeNknpAEcBt43tocxD9eHEN5CgHDspj1xNQz",
  "key19": "JdBNuJH5rYqfUUxSNVA9wLCbh1NEXP2Qg1erjANwCZHoJ4LgqndpGSrg1TGXnYzovTFNuFm5PFbeusYcws7mbXD",
  "key20": "U1Aaedq1Lt2xVn5p5C4gxStsWqWSBnn41MuXALXPD9W6h8XDxM4JjcSLKbng6oVmNzQvjGrJbFwsoC8MbmDKMaE",
  "key21": "5iJaES3LZuRFbnHCj3KVpo31QVceYjB4X1WN5EwG8Ti2M4G2VHRXxhrPou5QLDN2hhd9qDgUrexvHM7WY6srXvMA",
  "key22": "44CZ91DFot3ipuE33BZjynXev8nXjFEnKosVTyZNYwNkswqqyATTXLG2VLw3mDdmHizE8CQAT4wuo4xxJ91anpKM",
  "key23": "4Z8xU9Ay4JsKfCQoqDN3jgWc615FgwDAKdKT6kAtXKmdiMbM1B4NickN2wWtLQEis7kmm53nnVRt551mgpCHETB7",
  "key24": "4efaK2zPNZAhHj3ZUtTXuDCASNnbvgqhCGKgWyST71hUsNMWUKkaEBe6ST4YWZcADFge6vrV7G99Sbt2hzAZwUT",
  "key25": "4MwW4DjNymoxTQcHKove38tx3Mpi6yA3mMvLpSdy62dbXFrYVywZgdUME7dpZbTHbaUx897vjxZR5tDoHNNZuDTj",
  "key26": "5xMC1RofP4pHnEEDdd6pTUaWQ5GwyyigpDDj7HqR6wveiHhFRxi7RfHQ3x8MDJMKTj2n4zB65mGxCe8xpNz9h91G",
  "key27": "46rHw9ddvDrihAFDiQVBrYb1fp7sRAeBzGaBeqQTzUC4KWrge1vwYLhPBxnSpTwUuGdXGM6Ra2FAm9thNDwrgyK7",
  "key28": "5S9ueuLb3ymhkvxdGDFvNvemGPq8fZQCwFuHFBjhPx7Kpu22zuxv8mT41BcTZ6gTjRSA1LuqnXdf3vaAbRJAFUhH",
  "key29": "2vU7ktoGtQLH8SgKi322QsrKDjE2YHgGAvEtQAqTMGWHRPWgznx6VnP8Xr5r14rftemVW2XnP2k7coxeziBAGdoM"
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
