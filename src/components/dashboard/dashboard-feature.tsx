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
    "584cewcR9x6CYCwSXA46DbWxLiAMgTKDG8cKsTaLP3jQSuQ2pfSDfZhNjB7G7etnHTfLXYChoSNjLbcv3iLmCmAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mvUoqmvhPtKg8yBFYgDRKv2GSuYJC6hb8sNDjvBH6RotYREubyPSMz34eFwyQkM5NRCRg8cWu1XCNdksuz84Rs5",
  "key1": "27EGw6MbFSSNw28jRmp2NwZmDHMY49uboXRaEoPg8sED4P8owKSq6MdyPAcJewoYpmVK8aekxHzY14c9iJoHm5Gb",
  "key2": "3zL9foZWwEhHURb1WKFe5tMueqihiqhdVwHdmih6EcRGchys1zHoUQBSv8XQpb2UGfeQu5mFFm9L8DBHxUH3sSSy",
  "key3": "2kZPWH7d3agmx5xEjuNBWewxxR6fSAuoiWXHFbQvpJLJfsbsRzNzk5kag84K7b9BuD9Jf7MMPrkojqtANhvgw8rp",
  "key4": "5vqxTuWbkUixiSpsumxDdntfAzNV3VgZmbq16YLo7DRgHx5Z8pYiuLqbR5Agj21C1wqa46aDUavt7vcg8m3tZ2Sq",
  "key5": "3H6DzxN1SrZjZhov9Ka6ZF5SEFuyCFR7C4Uywr9knBa9tgGzbcyH19Jx3Fr9ZktFKX45ZTuhBtnbwHtka6d13NP9",
  "key6": "reAiZfXiByeS5xekLg59sFG5YfAGFcEv8HBujPgDsffFUZoX3Cz7W6qzSJRgZi2ogQV6KEGgZrhjpwb2W7CvDU2",
  "key7": "4pZoTPD6CtsopP99YLrQXH1KQ31uzpRwkdKXjfvwrzp26mDXw8AXz3abm1rM3fEXiAafDLjQ9UWJ9Nk3Pe2PtK1",
  "key8": "JGCEwmbrRW4kPK1VnJHTCbV88hHnqAAo6xPXZzqVSm1PHGoVGXWaDefrSemk9UQiFpi5jtQ1YGBmRFHXDQd4sK4",
  "key9": "2UPoUjEtxDMvCx71o2i8V4Pv4wN49AxaUeta7KB2ZJmepdEQshdJr9XsqM8wi9kypsvA6j4xHS5oERZP5FEqxo99",
  "key10": "4SPdtvEsa2qQEsAb3iYweXXUoHMzS4t1HoKUHdT66JoDSJQhPPJSG26NM3EuawMCRLWVvJfzKbJSBchTyKj2Erxq",
  "key11": "5odnJsetL9bSqp9RuSkVe4wVUpEYyDKJdRSV3D2hYBf5imRtX8YWJ89N6f4MgDg2XQF44QPhZvyCBtGm1DBqcHF4",
  "key12": "4s4ni8hGHM4Cy9LmnqughPWV3QuSPaZXKu3Dr7jwKSY9bbvXnMYhWHZQG5rcvoKNCEF4xkoXim8KezCRgCvBD1zs",
  "key13": "34HD9XR9A1hAnBEEGuBoXBt4M92Wano4gkiEmCZ923dC4W6XfXxVF185bVpiuWpAHdSc9SkQisqEUqE154yP3A2y",
  "key14": "4cT3F6prWWR5HubJgTnSLz3LnwTSkhkvwgfinhm8RgZXjcFf9ig6qvtt9LQCbXjcBvSiGo3CTwSMekyA4v65H9HZ",
  "key15": "128Euiy1PL6yNFHVwZLXJNa8DKEHUUB7Esm7EpbWEbpUCBJsVxVQJHkkq5Jo2sNgcR3LcBV4tjK62EHhpCmL4gXk",
  "key16": "4mzBsW2xcqnc5P89Nxe7BSVkMEoYs3xnvp1SauFrYvoRVoEmPz6cMjqj1mPrAbNFT8wSieCsBByfnch8wcRiNufk",
  "key17": "W4zEZuv6cjR1E1HaH7eyMHfeLMYm6dse8SnqkvVJfBMatCcm889h1S5NRzDgB2s6VAAXBiovyU1JQ7iRMFvwtap",
  "key18": "vcxiajctpqAQ3J3WWSZ2sQtzAtDH24hmUW6rjDWBSjETuzoeK5W3thMDZXgs2S2uRU5QCyyJvQaF6Q92N1kDmA1",
  "key19": "2jz3ZAPzw44KYNDaiZRQ8cjaVafAZjK2FTDtWFFt5xajunkEg2RpCjSma4JgCrwA8tP9jPfBMWWWe6xye2sijWmB",
  "key20": "4oieHHFWZP5HvhjDNMTFsKiJqvJT7p2aihvDWRYQhSWShgTShWADnix6uX4RhnYkTZpFPCeVns7DdviiqBFGSGiZ",
  "key21": "ax1XM7DCU5fE2MtmSTE3U5gPwVzAXzjdgaDjk11SCRW9g4Lg9aqEot8oEyDjVrLsETKV4Qd8ZTKWmqE85jJ7wpZ",
  "key22": "47REcigCGFRPXY5SxrJmrv63VWi7pHKMPSxYa6FEvZ37osmXDTJzPgsfG8Fi7AZ5cV8cTAVrLgQmXuqVi1qfNdeQ",
  "key23": "4NvBtkFB4d2rQceB6mk2Ht1cjfa69EfcWtPoktjr2G2aykr2vsSsYBn1G3e4FgQe6LUSsxngG2CMXt23djvbSCKd",
  "key24": "3iJNhWXYhLmc8nDucAk6KTXr9UQMG6Kb6UVQtfNvB4TLhfsNZq1EsduFuMoQqw9kbvg9qgAXzWTXa1BtW6iuhs44",
  "key25": "65Qevdh8v1u3fEUHCqFs7QEtsThbv1VqoNHSzjxeTzZhpH36JwzwmZ1TJvasKwWp2xuapPyUwTnayRsc1ykqfC7E",
  "key26": "2PAVsdZhTPDJ9puTAXWX4CMwncnnsRwj1rSb4mQJJWyBrd6dBRjdb3qxS4Lq2HTqDqBeHE72MkEaL6YrDefnDbQP",
  "key27": "4sATRz2uoevio3pSTFiwfH3oryktgUHbaX7uc86TJRiBXWDdopA15yufJKbjkz6p3GT4h2QCUyeYoNMG3pB3nj9B",
  "key28": "2b6M4XigGjoLThPNyiU4FxiqZd9tMpGC67H3Re5E1JtmuxA3TBhPZWkko9giuXhNRQuJ76cz4x7jHGyFZYq2JMTR",
  "key29": "3N2y9cHrg575wipZSkDwNxpVdVVmQ3VpMi4o9VfAxPnAwRuJei23Pyy1GJtFh5ynRHnYjRtwcUPS64LMr9tJ4cVs",
  "key30": "2aP4G4eNvx5gZ7Dp28cgy2LgsTUDse1FqERyp7TYTqbzguEvFD4KTWyWtGpq6eTsBMmpB2tgcPSf6SG36YjhkTaw"
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
