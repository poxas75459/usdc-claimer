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
    "4GhXF5eiHieUV79as9wwjiL8iydhD62K148ZLdGGRS7CtwvX412vjPhBbdfgAMt5gWdnLxm3tdj1PrqRybSTmtz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mbcey1uNLzA92rwt1nh88hu9RPcZFtMkPrHyE54LmDccS6D2EgeKRw1q81ubTseDkotQ4FiPJZQDKSkKptpRpFY",
  "key1": "4pkA3VnrKM3K35hv72KczYT8H1J1VEonScezwGNcu1wJvqExPu5jCKFw7kYuUDPez4AcU85t1gxUddGrb8QN3B2L",
  "key2": "4C12drosWJmfyjWshuANQoNEmJvjFpGsu6ZgNdb9soydTJ8mXzMh9UxJwXmEcfSPzWxw7p8HQdNEYLv5M1dikJV4",
  "key3": "5LiZHvP27yRa5EYJmskk3x3R4eurb9yeVFanRd1m6V1MYpUef8srEwxdNGkkbNJ2JsNG1CuaAYyZj9Dpbk4YjUN2",
  "key4": "62exgL9uLXbuofGG8eVfkYJk53mNKCrDaetXj7JjEdPRaEQvndkUwxH8PUWs14pUnTbqQUwUMTxgicA34kXZT54C",
  "key5": "3ccpSpVYhamX8fxLiDwgEhxkXjrGYcmQQ1Y1hjhyfXWB8r6reiBMSxtKphf3itAVTHN4xjhGABmnSiYxyTpwf352",
  "key6": "249m1GymJEGcfH1faJ6SJRpcX3LWzjMjKo2VRtCN6eJZECEUZa7pZsihtP5BmuTo6dkV9Fd95pqHK9QsKs4HgCap",
  "key7": "2ghKVqhBDaQMSB6gFxCTkGsD23XQXDwBPChuyH8YfEDDfzXZtjyWX66YP7i2LfWQuRn6Q1fkiZbjKoKiMRtudVou",
  "key8": "2TJhCpQke2Xd3SpJmjMabkeMWz898K91ozPKL9Riu7PYqoipbJYdxdE9r6dWqYk9vqmdZA1KU3j3STbnWZqEeiR",
  "key9": "5J3yYQCBtrUSL6JpfBUaeN5arcNyTSULYw1FR6NQGsTZXVVTAwDs5gD2hMuZ7B7g2yUNngNV8UYAxAXo2CqYATEW",
  "key10": "9ywYXc4d9iVfiJdPqjWErbTm7Mif6LF4i8KGFBb5tdE8bQ7vK2qLsVGD3K76nVvKM7kks2pLTUxQKLnKncgMVxx",
  "key11": "2DJgy6cMDKBPA53ugaQDt3ub58epmtr1ivk7hYP7y8fypzR3mH7QoKCtJic8w3RuVUMDhqAXmKQez9gh5uULpPMW",
  "key12": "2pPh9B33GVpP59wcYz2MMuCxkA1cp6H1FKtCkmwMPcemc7B8hhgyFc4Fs2y6Ss5bYNwZNKxhmtsABqtbXyoFRhHK",
  "key13": "3zqkstgwXLfQBB8cuLZzJk58mUqamU5PU1pSMP9XTzhdymMBx2jVZC1pZBbXtDkKBe1eRRuA1HSCyd5tcKoimakK",
  "key14": "3HjztgiZcrpQdXBpdaaRykh9qsUBe6KjVdozgKNTY7fuNozfYxDT1MaCK6afkdZWRVnTzuWpriRqkVKvFfRyAYvA",
  "key15": "cALrNdwn24yWwagH5KKmPbLBGSrynpXW6nkYthyDjY3mUR7wRjmVaBTzPjrsfYXmVwLLQqZwFpmE3D3zvoiYoRy",
  "key16": "C28RbWktfouVFZ2wCKW7eRtnPXRF1nex9Xw9di6bgGmLfyo4YrTsQVVPp2inV3WaqvVd1VNekBGkmT6ffEygR8D",
  "key17": "5GrTdnGfRkUa71fY4Zipej5hoD2DJyrYjGuxp3k3YAyGi6xNj5jzPsYAfijBhYyCssS5FEMSvjCWq41bbfHoATXa",
  "key18": "2uvfUR6BVDdD8aqncjmsAZ4ARth6qeNPawXYKRhumrfGM1fvPavtaXK3gX3oN8VvA5DrHCMeX5NwCXZHAZ9P8AHd",
  "key19": "3fRk7gQESomd1ZLP3HFEJ9Kp9LhXTk2Cwb3S9pWZjRYHg8WYvTn4g8pqtGMZr3Cz2qmNAL1bEHECeHuax4AcCx2Z",
  "key20": "5WAqQDo6Wp323EhJ59e3Mzgdcurh9bZAePeJ1yJiJyMktSPNfWmdAiQh9eyRNoWZS28ZXxsBDCuruHTc4ZDhGGbK",
  "key21": "reYRUuQbEN7piq2ARrB8H98CoBiNmkVA6nCLkkPpvJCrAf7qA18JzEC5SMcpe2CVFB3vEwXVRLQRFmA8gnRktAY",
  "key22": "mYf7MWNwFWgoq2BfxQbqsJbgwWwuCu9CMmjJqaYcMaz2SZUSnBY3pXBrEvytgtm92v7ZnkS59ykx2hQs5au8NC6",
  "key23": "HHAeBUBS3kepFNfbMV5ZFVjWVpy6XvmcwLjDdCeSARYBuYoJVMitsxw6mPJkHViaApZEz6ZuSXuFVW4GqFytpvd",
  "key24": "2bVxzApWrK9g7UfChjbHBhgPeReS5wue8hrxm5YKYzvKpD67BKJytsHFah9ZTEmJ7h5kTe9gR21N2M7Np8b9ArDx",
  "key25": "2ee5UnGW96FySRzRQymPuHcsbTAMWtrwZJh9sLV4ZZaGGoMzgsgmouwbqUyZnFAg68F2JMuWKVJLeKECyxu2EYc5"
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
