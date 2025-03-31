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
    "5tz6Ert5Tj6tardpbV4eCTxR6TEJYwyTkxDvpQ2NdTGKmwYy2uwretNozmvQ1T4Was8iprkZ1mgyMmdnjtFMRoSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZfepbAcvWpazXPnMWdy1LEaCJktWyPsKA9agCG9rpbLA2TZRhoeLxTzzeFS9m9dnyPXvj11nCcrqJ72PkdFxmkE",
  "key1": "5fL18VJNxrBsJHPaqXPoX8iYoLPrsq9Jv6besaS3Wvi6CrN2n3bxv2pXCzXHbL8n9oaCXZGp6BMTpAjeikwgKv8V",
  "key2": "4Nr7CswRXDHaYt5JhSyhRnMu6qBEon8aAcLzVBVNg4VngdGHdReZpkiUTQFrppZaZgdK5uANLezVrqnzjmKszavq",
  "key3": "3oUqBQX5d5NhdbvyMrrwD36x6LF57jsj58gVktuQrxcdieGm2JePwiQePKbFfRSpUWQJFiztYh4KmmUvQFc6EGeE",
  "key4": "65qUA3oNKLc2ScVWT3J499yxYhRGP8yacvUawMwew4HB66Grt8eXSTQYj9zviHdJMckoJQtNYowGp9saqoZHbDuY",
  "key5": "Z1LeRTWQitq8htJcA9yrYim1cnTNYnikaQM5633JhmrpjSdU82mL8jBzdCpRfcuFD1jLYBwvcUhpf2kE3E2rfoR",
  "key6": "5wSphaDcK8ACK2f3zjLpS2AxaDAGop5eM2HbGXXU4cyjcQVbYGYVUwXSS6hz58RJAjjXRjd5SsFieXFar3KpRqdC",
  "key7": "4jeZPQuS3jz66Y3JapK8EW8rRA4LCN8nq2NiX9jJDbk6NUNVYpAMUsoGJHRQ4Yrspyju8ppJSJLecQWfJg2hdReT",
  "key8": "kWj6kmcNT9wsu7e3GJ4gJhgo6vaqvLjs6MvWYdvdGfJiuof5MHGwAirAQFVxBnja5C8v77DoCpW9n8iWawH9tDh",
  "key9": "2dwSq1VxU75YcjKMC9u7VrEg5VPRm4wHwAFeDD4BLBX7kKkR7sYhwGg9C8jeiJRdUbP9ad6JX15p1CNRyTbnHBiK",
  "key10": "3342bZuQJdq5sFywMjgCcTVfGaPGTwJc4rCzx1qAynobhQEhHtxm4u6onwBMeqM35Xpths6j7MhCS3Rk9EuLMPeB",
  "key11": "4A5kGiafANTTWwf5BsMBt4RG5ix55kbYbd8N1sZ2GCbKGkkpP1fyfzXu1krUQkwN1nUsSW8Z86sKtP1riHDtZJo9",
  "key12": "3wnd93RadEWKtmq16csVumiPQ9UoKvcyaFn2Jep5ZwrgBNShsaSGnBKKebSBbgwQbshS5dVBeZbBukYEmEYWvdht",
  "key13": "5dbRGCDV63hK7SVmP2TLL8iUSojcwfhz76YEsVYkE6z5Y3LdN6m9zosVdaWGPezP12KtBVAqQJQkcMKryjvMtv1v",
  "key14": "5fojknR4hH84eGQyYHu9ZJRsELcZperFvN5nGkPsT1uLB9J1srjW3wcRdq7g74mfW8iSPoARrwP9Gmwsxh5wXx8E",
  "key15": "h5rjQAdBcDSczE6c5E6QLd3kGFnvW8Y9VXwec3X73bYdTfjmGLvZcpLQm4ggZ9E33WeCxqSiorSxk5pqjqEfe2J",
  "key16": "5KsdpmfVycJQvwVtFGE77axJRjCsVVXC1PyLctTPu79U84gcNqvzbscKDNE3BsP85wuocjpJfpuU4e6BE1CVXReU",
  "key17": "CKZrXcrwwDCwCL3gcqzVZB3HT89czbn4588n24UzvhCzw7R8kTJYWNTdxumvcqywrgPJ6fCBxE8zLhMX7i1iFjG",
  "key18": "2PzhUY16aKRX2MtGaMXB1hgf1imSiUXdsXS5xnvzNpGPMneNNieEV2ig8ZDb2wEpza1TgHaJZE81oYUBLTFYJfQZ",
  "key19": "2mjCNLPqMeeRucULGMMuNL8U7jGctbcmgV41KscNrb8LVoYcFagEb8iRscr2eRd9NdV43QAdVd1yP9aDWQpycjhP",
  "key20": "4axJwTVuFvuHAcnbbJgmCykkxzacKN8ZykzrbxgaXzUAiNq38R99CBmoyqJRa8iYVr5YyTgi4GJFPVHroMBBMac7",
  "key21": "552aRU4wrwXyhuPRwpedgJ2uz25yZfutyvPbHam2Q3tuGW57NBUMG9XZyAQyQdNyTfuHTatW4mKdYiP7mcW4bDcy",
  "key22": "23cpPi3hBVbcxTK6jqCwMY2MT72w1eWPVxirssNC87c14daPAszRHE36LE9k9Q92faEi9MupSjCJqYkyqrjqbsjC",
  "key23": "2tsrwstm4gZcPU59pWWZmT9xqAGAh1yX2reA9oYj3xupKkmx2tS1zRSDwEq4JoiU76VdnesEnBVHMJs4girwZE6R",
  "key24": "5WujU1iESV5GDkNfvR4sRthZZAKPbPmhfXKbSxLiGD9EixWVKfoeGntqSxeP4KSHNa2B9FmoDPQR5DBjC6qTEpHj",
  "key25": "2vqbivPSnq9pp87SgrxVuWHuWK9uQYacTPV8fHdqENgUt75EUtusKksQ9ZRM2y9ic3zZTqZnyVHTmF1EepZbwASn",
  "key26": "2kAv8YuTdEkFoEJ6TczgndxcCScRGVfeABnGDs5rXsPRR4isCByeC9yGeiCfGG1gKvM4jeMXMsu96rU2ttYxEjzD"
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
