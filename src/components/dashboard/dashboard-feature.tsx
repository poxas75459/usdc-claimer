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
    "xGXYcMiRYHL3juJzrkTYsuLy6J6Rnpf7Vcrj55HdVBC7L6b6aJyWiNZPFaxFCp15agACNv3JwXXdfPLRERjhGW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27hwyeaHfu76RhbkMC5J1Jw5BnTgCCRmz69YwhxCmaQbYW66oKmgvdqe4fyjUKWwT8MC2WB6pU22QzhJMHMjof51",
  "key1": "3F8dwTRyxsWHWXqcvCdTirpAxdCBkPCiudq5HgEMSwdLdJYVw1gDMRMDbbFVsyZHJswY6swiYy4vDD6iYTEnDmNt",
  "key2": "4SpvBbrigLUfbyMUyNMtQem6TGdck1BJVjB1yhLePigrX8k8LGN8AkFZSjL8NA5cFg7Kahh6xU9YKxy6RPnRAhnz",
  "key3": "4yjWGUrqPxmYL5fmiV4bQWggvnVZr6ehDDZgHC4zKTPXYzvUUHVv9B3WgcusoZY4Afsp2rVDemEkyxyHNdq5XMKv",
  "key4": "2HUgbq83uWBMQsgpMQQ7zwN7sYC9qV3bxaycPXsNCb2Q6wmVJFeTsx8cHvXjWQz6xEsUt8YnRg2SLZggJhktj2EC",
  "key5": "64GHjiJmbu2VCCJ4QBqVd97j8D5US57aejMEt1eLh5321XV3aZ4BUrRreHFDQxfa2oqdneeusiM4Lpqsd5sDyHSw",
  "key6": "4zpGFYNufRZ9NFuVcB8DB9kbEbv3eUtvUv62Zy3mRRF2YYy4ii2gt2CCXUgWmJy3gLdSbM1K3zSzvZwpPKnhtGYs",
  "key7": "gjGQ34sxd7BvJvnx5PEHoPSyD5aRdWqdS8vtbQghGw4n4RbM24aKJBGrhBG8L9PZjdJ1YhEn3RoUJZnSWw1nPWp",
  "key8": "2efMHNeYmDtAXYTq7Hc9AQBWktrhpKgVrxfahXNBisgRN53UhZiH45vdDT26u8UrTHAS1tcio4oXYwfC8zYUBX6b",
  "key9": "5ixc89hSsibBEC57fBDqjkbTW2RVx43stPAyZPrjU3tHe6SeT7FiqriFwjuLbgEWFUzjKU8mkpAiBj19MYerMtrN",
  "key10": "2iwpWZ3a2LwUqxVuz9VqDE1bYp5iK1Jqjde3WoQq6FANG4C5oBBBEwz5MTMBTtZwjCua614UH1duST4YRCjntB6S",
  "key11": "29WiHDT7Ws125A3gib93AX3zMTeToRqpAPxV7UiLmvmrkwSApmVhwe6H1HC8tppmUKV5Syi4Ee8cpHy8MpTTaXGq",
  "key12": "4RAZXyjbfc8omEov1PFELHBvFTraD9EiFJSg1AVVvHqsDiEqYWPet9QNHDnuxxmHAf54QCocTJFabsgb9hotGT2H",
  "key13": "563To1dYnY2rW7raJ9V3udBKJftDP3gcQn7oPK3YduiXAiL1yxbpu3nPvh67fvJRwyWEReHWHYX8ziThDUmdMQ2X",
  "key14": "SGL8ZRCToFJr87hs6NaPoXwdTMmga8SKhyQizMqxiBEsnSoY1S5n7MXUEdQQcvtaMbzmnqekdtBw6vqZVCseAkV",
  "key15": "5549JsptfNBtfcfhEKK2pWvpW7QHeqKEkn2NWJNTyQYDfNZRcQGxAsqj3Dn1n1T1GJ1G93aXQtiCNU2WyKNCGSip",
  "key16": "3Li78becFFDtZHNQnE1h2YmkbMEZxk5MiRw3uEGnj3QvVNwKStL9SXotcCLrXRBZRDZnMH1uaKUcvRefbpUBAGpx",
  "key17": "4bHmaxJjHgH67pBEwSaHLQmQpN7EfQAyEeqaYTQvzMnHUvMsPWmEcHWS8Q9P3VfPRsGEr7QSuJLStGpxEgdrf7ZT",
  "key18": "3zWzDCooc95o68UcX1zRFbBgrYj8K7pEht8V5614bCG6ASVtKCpew64fcS8rLGba3ja8bfoQ2VK2nWrumTu6D7uf",
  "key19": "4eSnao2o1uaAnQMaL2cry5F1NDYhcbNekWoJYh79eckgXgVWVsUNnnxjzP45VVv9k3oUq4oJTFeF5PwoA1Jtyry8",
  "key20": "391CjDRLCFzo3riyvBCvU1vpE1jydKdnNCEFJ63yZYLSjCWCPLjK3KnfcqBctnKkVNrFrRpD566eNDmXvxYmZtFF",
  "key21": "5rZi5SL188xUBuj8Ro2wTWy3iXJUU1Sqy2C94ds2HDmEHxTFtHomsX1XS5XBpP68VXoKkqyxbZSaBcyqnx5CFf1P",
  "key22": "5MWRWBfEe1gDiaGJGfCdk3duoEXnJ3FGqD61M4kt7n65kyjyXuiKjF5tYV7GWbduKHHpVPLuxFXaoDEuENNuRtwu",
  "key23": "3wxCjTjYAUfrHCKwTGk9qu7TpmJ9Fsp5o8cyPyGJG6CjE7V2DdTFLy54qvKSTAGzy5TUDVvZhSxCqy3Y3nSSmcc2",
  "key24": "4iRwYf1vveTYpkyYD6p7cW4kvku9zTA67hMUP178Aq259Hujo96A73BvDisZvDxUVZRnvFcaemCwTjZx95F5Cp63",
  "key25": "4Gx3B6XJqxD1z3gh2NcRvfETrhsa1DmV8ohgJrueqp28GiAXWPCebiATRHCx1FCsBMaXM7B5KUseEWNf9WSTHdm3",
  "key26": "tK3UU8eftdbaMw9jAUB1joVNyoZJMsYVVxTmLa9yW5vSxgaUeZTQKWWWnPJeFzB4CUZ7C3nz2eDK6XrtgS9s9Hm",
  "key27": "3y8vJFm7oqzFDn9SYwB28APdKGhv3XvqdCd42ajN681p4R8mYguPfr15GopmsZs5wJxuKp6gDG4JRu3qLAiFPrXu"
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
