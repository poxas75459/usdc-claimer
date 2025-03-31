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
    "KHcwVfLBodAHuz7QSJZLAsTmJzxncoZsMPJJK9cFb6HDdbmkNVcbmjPbbYBudc6aA3pu6B5mxBvn4Wth7PKiAsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KBzurbNCTC83QoMukgTtfxu5qYo9kBM6Y2ji48xtTE9sdXfktrCmf2ABzcWKKnn1ZW9USHint3bamxPrfkWHxND",
  "key1": "87g4Lso18H2FwcEhjB7c1879aecySzeG6YbuVhG71sZKi89UdQs3SooXPYZKCSfMg47wu2ePLbpCZRNXF4mtHEi",
  "key2": "4HwoargpSrgVADypMbRwKgXZsHQGiZcGQcoycvMFPtPKbso3c2t1GBDsUpmCqWaPoEe6gYecz1MxNorPdRhRZuUJ",
  "key3": "54Pi41Luu4vMLAfzkLMTmfGog2WVHDurd85LdT3U3fWSSY676AyCNXkgmcVFj1q3N2zVgQ7CXZGpbjoH9haABKDQ",
  "key4": "2bwYas9zkSb6gngAYQFakiHauSx4NC7ibAmJoqNQ2fxHXnSmUaPQfZFZzCqTcDqJg1JuATDPTH4mfghNpcjKbMks",
  "key5": "ERupfDBLcEgU2dwwQaVaNMrCjnEd8Gd79hsQCkjWvyYSyCHgXJaz8mciknaXuzS6H2kkSbNpxNL7J5uJsLKpQkL",
  "key6": "3vtCb6FDtd6xDpTwKmSvfwYsV7Nnvy4wrd1LGpFFR9fbT5h7HjnNv3scbxDqdPbisw73J1yDGxAoCNM7XHqLLmWL",
  "key7": "35SgmJc18LkcZh8eztzWroBxGeGZgsbgabMXjDc1QcS83VaTwZKdAWemuFhRYbv4rK7AX5Fq2bfJPn8i4HMgA4Ji",
  "key8": "5pHRdUb4MTLuMee63vyB7k4VjzWsB4tkpd7Up42YhuMHJfTqVrkxmvMPP4NTxs6p2gMt9DXExzU9EbB1fC9ryZ2B",
  "key9": "31TvkCD6suAC6vUGAEy83MCWVygM8p1WBqHpg1Udnzdze8m7AxaZGJPYA19cPLkXp5e2EVCmDKZ7wVtTCDWHdKN9",
  "key10": "qyyhWiF7idMyThdtE5KvsoHdZzX1crkCYKkJC8WkNubAS8RBmQSYDGiw8ZHc72NDEKvyCw4b3BZzMNRuSdLxxzP",
  "key11": "26sVv1Nr1JVhSwwt5KFZzco15yVmbPhnL2KjpThf9eM9CxZRReN6W3b8paEjoWHDCYsfrvFoJHSY2LcDE8z3LXkZ",
  "key12": "pNzz3JLvcatwMZ7CrbgEn2GZfi1Kq1h64aPuquHpHgTEod67GhfmQ3751Rib8UG8BsBErQGbTSuDwtJ7MoDErqK",
  "key13": "4mdSuZmnJLzAhc7mSLx6wqUosLw9ue1CdVPzXdMUSwVnv62jYV9TduSZfFPF9BWh58DJGgCQso27PgbNi5mgFMrn",
  "key14": "3h6vA8GKoKMejYA5P1Phes4eMNfESwJFomgWrmqKNNrnBHK4fAZ5sWT9ptPzaNoKppcix4hcDN5bVmzUswEW6pwF",
  "key15": "7D5PMdB4kX2LuoVtLWgyv8Joh5oT3e66X4oAQWDx7Nt8F8TR4tDXimxGHVesGaBBcnsCm7ok8Fpfb45Sqk2mKZH",
  "key16": "QujvayvDPjA4a59WkE7b1MJWaG5L2vbgvKwFW5HPcUYGyBPQeLQgg2HZ42HyV6eKGkojgSv2xopwMHatEbzajGz",
  "key17": "2v4QCtSrARNLaiA6FWKbdrzyQ3Nsx8bLxs9TP7UKMaXHEiUiMXEzSF6d3ag6vFFgDjDUvEZTQUKsRWbSLJqAEfJ5",
  "key18": "2Wzqq4n9soaTN64LpDrAgs4Vd556zRBERX9TWbDtD7Av2C2cmapNkD4sHUiNRfDaZ4NeC1AGRZDfBvyvZEKx9gVG",
  "key19": "4LfyYtab6ECcurYtk4QZbaoDCouD41A6wRe8QCSvMndLTV565qDeXkE25WaPh1U2qcYXYREpW1t3SbJvR6wyAGfr",
  "key20": "3JRWJExVUKagQaMLCb3ogNTAKTNsPmBYezumPebBtZd4KjY5Jy1tFhDGUeGVAu4JRnc6NkQ5NDV4sPTj8nKx1jYY",
  "key21": "7JNia1NDq7Jq7dEWUdkuJJzw86SiWCAL677ZhL4LCg45hDqdsRZAQUZxAheEJr4tJt57tuECHse7ENRRDV6176G",
  "key22": "2dHugmLHtVLsUZykoDYocYwdYLWV3s8oTsf2fkKfzkEqGA5WP9PUvndaJ8sFZq6NWTqiVaurh6WsN7XGq9ECHa5D",
  "key23": "48eRqvqFgzymRuudBMHSLMdD3R8948SLuFNY9gZjECYHv1yEtXtjB68xMBAHLYoCYjHwFX9TKenXCxRrR9WWmaPg",
  "key24": "3oHTonygFQ4tYPd4qi8pUBioCzyu8QYAGhuKePi1dVihPT4WJHXE7omE7jAt4BkWawjndQP2g9oXuvEEynGB5LCZ",
  "key25": "2xsSHQomjPouaWAofCwbZ1r67cSVVu7GEkiFeVvuPQWVtM1ecyrF2gKhCgqRjnpmrky2hWtxDeMqW7LvS6keNMHt",
  "key26": "br4X5tTKDThYUaz8z6CuMYMhs4pTpi2mZwgYWaH6AVJgstk11iW78cELGHbqR6mJCkRZX5DtXZVk8UgP2pe1kJT",
  "key27": "xnD4NNdTQiSvA8Hur7jGfixgo9d9iyYm3E5Eyk2gU8geGnuZ7MawEmo5bRqUDDPxZhg37Z7upVLyVZEs6JW9Yo2",
  "key28": "3zyet3W86uWaxWstHmr88nAXo5azLJacRgRzMCLTmnyArpkbnnofwr6ripQb4hWhjuVfmEJMS8KFFQQCHWLgTmbT",
  "key29": "2sVdCy1yruf7ce3gqnun8jLgPjwED6CE9GvTW7oSTgB1g9WNZq34PRRbg9SGTzzzqLjPsEByvsxyPrEfj5q8bkkK",
  "key30": "2qjRgaGnpmWGv3VoivexcUcdWdy5f7oRvVnHBF8jhHCbdiio5RxHT8GaThf7VEED81YqWv3TYPneJ3Co6q3eB67B",
  "key31": "521oQMMi2VV6eXx2vACawZKhJssM1DM16XN4cLBYpWork3y4SFrmwSZ5T8SVYF4tap9fPhvvDCzzegjJpSkthTmp",
  "key32": "48b2W8n3RPGVzzKcRZ2CVue4HHfzpSR1Xs7PeGjT2UK3amMRv8Cqx3Z9CnxK1sD1kE2uSGRV1yqGCFJYKWWfRrSD",
  "key33": "5kBEpANB73vks9o6bPGnMiRye8Ez6GrLQkNSP7WBAQHwzv3UEUbdeN47t1hTVVHhEegrviujrhqXmYShYH1E8u3V",
  "key34": "63gAsAjwDqYaSxjPu1ZgvNt9xF3LBFKQmyxW43AkU2dkecg1YQ7prTUe8HWcgCzmWgnAtrLHmT5bjY817Py93rJg",
  "key35": "5hy4e5nGgXuZG6AnX8oFHxS7rXXrArS7JK9FkPmR2BPnnHKV2ykAPKi5ZwU737gCkHARJc3WiX8KbHBKzFhr15tv",
  "key36": "4fdqwWrwWVoGXk4b2QtzM31gRJMW2jd5TaXR29W8HSTdu7FWQVt7rJehg6E8hFyDa5FBiq2NvMq1jfCWuqrkTyug",
  "key37": "JDJszqcPc2Q5P7Bwn3ZME1KKBZxqR1nRbJQ9KmZhFXWh7akGGZvWDDpv4DSYf9PmTvgieaBmmoX8XoJv5i8R4sc",
  "key38": "4rhhgvWoNpanUBoC8E51cfFNs4ZAxqJeJEuMhzA6zzU7aFH2mKpExBKSYEhQxwxoecxaJrHR3TPCfZPJrx5sPa1V",
  "key39": "3vevbrcF3Tq5x4bzhzDezi84ZjKcVjq3j1Q1GMTM9Q1Fhqu2DeEgFYvUvCXLzdMBxxaQx6PBBJ8THx1zYk3eJTHK",
  "key40": "5LgTyqgAxMNWZGymFv6XS5cPTzSTridzJq8Z7k1cBSWhzRvsmkGEUD36w7YW6SzBsSvPANB1CJSKycxjf6TXyzrn",
  "key41": "4aWHwnwajsbkvBDyE5txkmEFkRGYk8s4jnAxhyEMRtHngnE5WoWGfqQH6Cyo6KqfEM5r173EkPj1hUg95LHqrLS",
  "key42": "4eTBrPDh5F4z2wp7QMUrza2ySyuXF7o6TQ6VXQAnSRDnRMVFPUVuKq3DRzWMkbLqXdstWGCDJCCgeJp6zk3Chrxi"
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
