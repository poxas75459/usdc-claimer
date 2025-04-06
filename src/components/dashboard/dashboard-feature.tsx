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
    "qBDyNM4FefsrjNCKEE2UPDP38ccTuHcasBFBZGgHWjDLs6m6nT8L6qff312fFevP68ozHtpBpDJRe8ABi44y8jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xYxjvAhKJZf7P9YhBrjf5HtBfc6e2kcmncUYBPfRtPiY8iFAaSFikxGu3ci7SoYkEpoQCBCvv1toixjnTkUHapA",
  "key1": "jibsQ3mdEPZ4wcxvRLVTCKnyeJgg8iaJj1asVMYqCHZaGTHdCJnietmjQZNU6bShNXhZST4xLUzLv9a5S8nQ9s4",
  "key2": "5mS8NijKiinVRUW4xrXNrQp9Jmd5hwUATZoDHqMXsohqRrjtNajnCyRkdgkT8bXNP8CRUMzQBBFvYCBVC8ZBpwoY",
  "key3": "4SN1oX8jW7KqTKmdcc9fphnrXp5W7RHpc1WpvVEc3JrLoHNu98s8F8hacM8SMq9vRbhBWjyBDSwBEMTbuW68NmTk",
  "key4": "2MtE89NUcsuYG1z3KRtKEASG6Hkay39kzcC9ogeeyGajX17mTn57nhfKcBz8WUF5G1gwdeXNeKBYyJWDbPjAyD7G",
  "key5": "4xxM416ZhcEPfKyMiLg9hiXrGf9akFj1BmW3WSgR7LGRX2jqPzoNYezk845V3uVeFtBFghA7pRoxKJzipsVoT8wg",
  "key6": "5ZvkANC3rUGLa1xivS1SXZRPN3DQtkAb7prgLD8q7eVmaHoRiM6k62uwxpYDTzD29XY6jY6v9yrdgzytGNXZzgeY",
  "key7": "45ahEsy9cPWbK1wAkuvsaaELP9S14ZeZFLmmvGdAuw2SWxoiShixgMUbeRqLwxtGsc44uxStZZLmiCC4MtnTnjhs",
  "key8": "2Foyg5voEasE4c65zZnrgzQtm7poJrcCoi26pRHazLbNE1RdudTzHbmFZ8qLhiM6pVUBT2aamZT8n76AQEjXGREk",
  "key9": "jcZ2FZ8nfyoUF1uNPz1Z2p2Vj4PNM4fedUcNqZmhQciSyNWCqzQCjdycBPb8sYnXduSfisCR4eJqyooHMhYeySa",
  "key10": "5hRZe7g8AiUBYp1ukJckWG23AZ3vW92DAea2VphJAbiHDtcFjZrfLjf1GKvn3vHumnpmGGDqTTKwZDZn836gisL",
  "key11": "3izXXSLseTRMnsSNq6N4SwjJY7wLUYp46FRTfbZeZEquageBmfKsZBxY5pFQShHj9CMUBPUKmb9PewQW3kErbTeu",
  "key12": "4eT2ambM8hcXMgUeDgQ2vEEEyvknEidoQg43fZE7Qj5LmsPLHXPCDRKT9DW9eUc9WLhWAyy66w392Z8JZU7YuMG3",
  "key13": "3GwLmtm6GLS28yPcuECKYfDRuTnxCjy1j79YG9YNPi4vAdEUWL1on8sC53Ah5qWs51nACpFJLVJUCCVWuZzjxMsT",
  "key14": "uQ8Z8DxpzkE7ZhRLv5GDz7ugTVkDLPiEKCbkfEvyD2nMsjXZXfpY4c6bovG51LNWyb9M4hbs4UZRvbCuZnigawD",
  "key15": "54qTZefzseSaUdN47vgruq6FPQPPvqBPJ6EZmfGzCZGA232busLt1sh3NuKivwzi7umVwCZH3nn4Tjary6h84zH4",
  "key16": "542a8YHFvPdHTPpQNohT6YjXoS2Tgwhtv4fdz8yq6ABM6jZ7tECg4BxUztx3B8unuyCpLLvvqTUFA311KEXRXcXE",
  "key17": "3yMoPZuv2E7wWuCM5qkpANXVkm89wyfy9YRaYSNdKmr24fpHbs7YgVB9JgpLyEYgc2xXTvq1CzyRzV5pB4iP9qz8",
  "key18": "3uZejG5nQV742UwaHqfzxww1fEC4piHwoDb73BQjgt4AULUzgrs4WGJCG6ajWzJgEcapBwiKN3NVsJBNx1jWuPLF",
  "key19": "66LaU8MDsGLWwZD56bpyYcsVKgauMFwG94twcVFz1VvCXp7yZ5ERaGge4M8V62SmjjnpAMeV3GGLKppDu78fm3eg",
  "key20": "3iSxn1rfwMeJzyNfrVxEuTeopPDkZYTDyYgiBcpmdcNadtUKpzNDnwU8YCBVFHfJEMnWZxZjpjU6GCjT8UvR9BHE",
  "key21": "4yQiYs8azV6VfVd9goGFKjmMPvPFppjA7i7xhRYhmBw1NfB43apkipA818DXpvR5Bk7TF8RpyvLhto9cc5C82i5A",
  "key22": "Q6tcd2pP4wEbpPg4RZ9RN6x6vv7W2mofzXNDbnz5YGV56867iPGQFMDzJ9Ku9wT8jKKijwRuLD6qgsXHnCYkmnq",
  "key23": "3fTiCj9vZERETj1C4YKHM1DqFjjTPvLHNsGnZNFoP2GU6DZ2dZkH2R8h1GF8meDjGHrvVYPTLEEoxdsVRJ5abDkT",
  "key24": "34GoWC4w1o4b9ULms1ZDwUHsU8KrEzCsvHEjogYPZxvAjSt5qHLNisCsnGHZQFUMgZSzzkP2DAVGsqZ4fg7tbwVb",
  "key25": "2AwxbHVTihRFCaKdVdhUHdgUgKizUTRM3d35FNRV3t8wW3W93Cti4JDvtu8HLJyrAv2j1VnvdaJ9hb2xzXC9A4UL",
  "key26": "2RB3CU2MZjsyDBxugsMA9E19iJ7buaLhzdRThS168Ui114NwsGghZyZyjeduFaU7RUffovWjgfvyRuBZYCiiVKZt",
  "key27": "5amhxeyCy584edBQWxVZ1E6k7ZmtJRCvocC5fQsMZ4cFtFWPdT8zo9UM8YJjKrSSLRXDWfDnzEzvQG1SGifA38mn",
  "key28": "4BQ5XYPBrtSwLMRoTwNVct54nM2sfoj1egSgwnvkxk7pcTVPNorkdQfPc7icsnsW1D8NyK7cVfzJtKPXcvQ8Xzmp"
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
