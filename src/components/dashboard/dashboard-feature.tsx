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
    "4ye5h9Fi2CWrPeoEryGACPHScr7TNyLG4LVV3gS64n9DU2rBQFsrKdA3C2k23EeNuSW47W7cuYrEQBY8NEUsSe1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fnWkoHAHSmNsL2qWdBeeRzDESMZNpNzknskaTPuVCYHGxyQDWD8YPSyU8SMs8nGMtBw1eZTYUvQRK22qv3QL5Dq",
  "key1": "54PPn1tdk8dJWURq6Xy3h717xviTcPKi3wj9sfc279VeSZ9hv1EQwSdnY4oXNWT9smEURH5VUvv8qc9zPKqYNNLo",
  "key2": "4Vpj8AjHRPAotpaCA9pochpH83RxAKjWMT7GWU5YrKbjNgvCo4XdMzA69TEi29Rxu9x3GwG4ZynJoAfSiCxJ3Mmc",
  "key3": "21oApg7DPzB8SESS33QFLHZD7AFRnJ7iATUHTnTmRc2kq3psh9ZxVpyE9aqpkpevV2cKxAebhVD2uNwyDMUdDep3",
  "key4": "WNaFnpnzaNb3GvyxANPAC6SkPR2VcpxEtn1nb7kGPaGP2qJK7AcWKjTXXAQViucLpTvLGeSnXSwvgY59F8qqPLh",
  "key5": "4B1HGm4GzgrRXEAu6BruD5DuPoCs2BuaVMYoAvsWqwD6dHvn3SGVK5LFMGvStWgPjZXzE4LWAQ6tHcfnh4JmXzSX",
  "key6": "2d7QmsB6jjJnNUHPfbqx8qsH5kWeNZcvvM2DUyhve6X6Qy2itdHkZyaWePC1RfjMLeG5paDnk914fDqbWS5yb48j",
  "key7": "2DgoBeamNdjwcnYcGkoSxkxLie758z8KumatAtQbNdpqtffZtdk4G95kLp5mr8kpYHvKf47QJowssKfS4P17ga2o",
  "key8": "5mHTBgHwA4k9yLEbVpQWs1uxcrkJxTzPMcpvDFB4LWRNymYhk9bufPEEgXXtq9n95sfrMqXowfJFcxi37HJGjKzW",
  "key9": "3phQ73NrVjL4os2EM1Uh6XjKAKHhHax9NziGr4mwptnxjMrZSvNmLfHHbMgAcGEGnSJCxPVXYVezfQXHzniEZYP9",
  "key10": "353wCD4t3BH7FgRYCts7wqupb9UhMSYCUxKRhdD8u8oVk7RrNZR4pihUWxuwsBbRHjLshnnvXhApS3Ju9q5L5m9U",
  "key11": "2XevAuvPfPqW5QMU4PrUqp3YpMziCtFk1dcFZ3vLcpuWDU6hw1hpJnQ3BK6kdNhFui1RNXTJDYXu61Ght4KsLZv2",
  "key12": "2scCjUfnME92b1gQm3L2Bgsi2qzxnesPmXYwv71aB1U8nNwiLQG2VS2NzwnC1bBpdABnA2Vd1qYu5miFL75DydHy",
  "key13": "2y96cuBCjNwLfmxGg2a5SP7SaXbsJSFEQF5kpi3xYGjrCLoCnSsQq9oqfkPscnJxwawquMwqaULUrb6CMNWwpVHB",
  "key14": "jWXuZX5dJe1FAi9CuQ9E2mytNMzdjK9hNXSsS3TNdhCRe9HHLUC6WGiKwYhNMNRAwW5dVPqZgwubeuEENkEisSD",
  "key15": "279P6vG48TkuHHxxaPYf7S1BjoynnGsxabsvDbbFmysiQoCuMg5Y2tb9HzF4VXt3ibs1JBBZUMzTHEK9N2FEVG9z",
  "key16": "2qv5tu7g39DZJi1TEPxaGVqrSwpQTA9hbdioMhs2bDbbdz3tzppTPWTWJoeN8NGQN9hWVCj9nk6jtf8hmoc4fRVT",
  "key17": "55qWBXXj9gcVeoMBZjsMEgRzmJhgHFzjmrQDDPaTFF2Yv5z9gjnjU5ujgn4gzV1Z61HzYA1fBDwy3sPfjVAno7JA",
  "key18": "iHtAaSQtMywWESR5kVWmdYji7t4pVtUsvcb8UjvW9yayZVoZyQE2Uvh9R2KX5S7ijaZiGkFzLE19SZdGGkc77Ph",
  "key19": "55XozpSFWWjoxDf1WurkMxngVbepJ8oDvNfNPYs885yXiPMD7GJ8pHWhpjAN7YckihUrfprWkKRzThYk9yV3Ryda",
  "key20": "2fYZcXHkwcoPiPPVp2bVqJy1M7ZinHB4p8MS5tiEagj1MeG8NSvZM4Pdt66jN2Vb3Fhxjh7mteaY98hHPqtJxSgh",
  "key21": "Gu1YdLUD5QPwdHAjQTiWHKw48ZkqohxoBAeFJd4e3BQdph6k1PvmR4nneKavvPBQGrgedpca6KCttVMNgPYviUi",
  "key22": "63zsZ3Q21DhQ8iBVn5EbinkGQmCWDjWxXLCe6wi6Kp7QZkVDYRMHF9Tc34oDKSoAB7SrJk852xA7NB569Vyb1G64",
  "key23": "2omskmY2USUyscLJetHkVf6eMYULBgcQ1oC1uJowWarjyxwTwox1maV7kmVKwhYfGWkic4BJZYhL8xMdh3TLmT46",
  "key24": "51sfkTUghCLdqHfi36AgiTgSQBPoxt5cng4fRTDjkiabwctoMBX2QAsns9JnR8FNh1Qqdi68FhiADnEScfdFLeFG",
  "key25": "3jfs9jfEvjNT52jWVxZtXVt3R6je7d9Wjvj3FRNj4nJF8YZEa5DxGXQHy6a3Wvs2JmFM2mmQLT4uiB5QTqWdV3Xu",
  "key26": "5sVXCR9AXPF1TwY2FGWxwQBvuukMuUL31yMeRwjnqJNGRmwej9ax9XwxYmuqbyLj7ZArk5aFkPrRiwmZKqnbdNpK",
  "key27": "63Kvo2DDEaHtoJ3pazQ3abtJxzZJGtzwYPYhnkDamqkYBnN18SeWV63xVLYXjTV8rFx7NRUH3gmnWtoZ3ihMEujd",
  "key28": "2BMDggZPiQBF95a7LJp7zAcjUqbhZc9zbMyS3fTAFDafSgGDmQw9jH7fULSSGmfKpBj1aUCrXRVTnBXxtWEoEzaZ",
  "key29": "2DG69cmPu8hSBWobdfeZ7sTPtbP4LSeDcz82CHr6vEV6rMZ3HdRY7rAgQV5ejukB9wgB2pDrsKzZ3cgMocJ6JKZQ"
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
