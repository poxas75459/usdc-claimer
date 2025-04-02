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
    "ipZo9WVcBmZAMwRJkHBje8ynBR1xa2Rq7YeuHtpy3ZzyrY8YT1gC9PMqgoq1cHunWnqiUGWzHYq8uyZrR1RzAM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MAdcoWtx6S11ELhBQQBmverLwe44duaaccm5J5sVTvBYYZNkvk8S2zks1fqfKhjeUQxphe5wAEpYUSHMxXVwagN",
  "key1": "Ag7Ny8p3AHy5pxUDfNTLaAtKsMGUXwgvMFuc5PZPGX1S5AnMEM2vGuDiziq36MMo9NBFPNeeqC4dUa9R9bKyAtV",
  "key2": "NJARqXpdqN1dABsDmfsMCsukZfsiRN7Mtr6sDheMEraKuVAPV3pBabFYdWFdvfF5AZvCTHYCCyjBpomvc5BBRoe",
  "key3": "2dyNogWe5wywByaw8D5mAcXznx5W9eVpPNx3Mf1JPsebWcGtaiYkg5a9RgTyirYDrTjZbwFGwbWcvqWevrmshFwS",
  "key4": "3hGsdMf26QvxJjzVkYcm4mYDH3TkqmbEyWnWgZYXcLr38qDPCLfmbDiXYpwpLjBDvcBsPrWuMn8bYYnKg8VKQj5R",
  "key5": "3oZ7KuXGuGuuksoVFhcLrDyLUayq2ZNmAwJAvMmQCzQyVBx55gmPHf7MmBod6TsNXRD1eqXsm8bt1pN2s48KzETC",
  "key6": "4ga93NeA8MdUWRMZhE2nMKjmGhqupREKT6EX7LS8AWL3fMrvcmvQFtK1nZf2nAiW7LAkWXU8zZeLZwnctuUBZR6S",
  "key7": "4vWUWMhKwXVfDmCs5enNyS9LFfCGgguVTVXJASTMckgYVmBFQoLjms3JiiZkndZkPoehbvgdqtsv1DSkxw3FDXpH",
  "key8": "3fxsDZGuTpyi54yW7eRCbWTXnMoAjhKC59QVa6fvGSr2smZhF9Tv3tCMLz8sXnzsTCvs1y1hzotLFKNBSRQgLMHr",
  "key9": "5DWvmWPjUhmvz3KJUma7Z2TpmzF1iK4ViFrisNymECRfxaeExWYuzZMsgbXhhQaPMnz2n1n1sE7vqnB1py3HxjJB",
  "key10": "2eHQkaPLWFxjdSAAF15fs1gsRQoaD6ZtwafJgzUUubMCLmiw7QWhqUjPPh9Qq4V8iWi4ZzzCCt9tDhrjEv9ycsoV",
  "key11": "dUAcnVM3j2qe7vDtFVJ4FxW4HSJAaMvoHbF5P9Q3djhz3gaaDWGJDAonY8jhMpDCyPebP5DBtQaZJHWtUVyDxEp",
  "key12": "2dBii5aj6dxFL99Nn1o6kBrYPg2dq3Hd4kPEBs18NQqmup6Vq5WK2oJttsBEiL3TuEWCKxZC5WjEmM7bkYw4kGs4",
  "key13": "3uhBzBzjgBV1rjkFi1HhxSkEBzWGsjLXdfeHXoMo1Jc3hrJZgWh2cHgeZG7t8DFaPQvYLWZWDtNHPp1i3rpi3uNy",
  "key14": "4VMxJzhsKGpahUdQthgnxT9wpHvDoHpitycKVV3vhasJDHe5o4TnpwiJdsvM5ubvar9YQc4ENX9zZ2pEqfkwUBJZ",
  "key15": "KSQiFoKRJczuVP7P97YrfBa6YbDDF7RedUyAuyX9XpttdtytySs65pyfs792vbzCcjyDTHRyv23Tz1fUyenXA5m",
  "key16": "277ptdb4WeuRoFFNNfDEgWMrQVBoUPwMZ7SRPfX25CgCBvYcyoB1ykVuj4PZBVuUZivrzVXZV3iVGH8Qvt3g2U4j",
  "key17": "4pgha2aP5YfqZUZfdVH9CGHfqNzB3HfmrV6bQWQ2foq7QVNEjJKgrsnpJq613se17cepLSKakuYg3wPRMiauCHAj",
  "key18": "2s9TvVHucJuEBYcWEzGs6MoHoh8HUmSH9S1gafhHsyWZ5xYNioc7nfpafyGAQvys7DYM2rbUYBKmgLUDvZTxjzPQ",
  "key19": "3bKHptQc3SaZ2usbEtmBjqFvt2eApGnxTjPgZcJL2G8ffGu7P91ro439FFFq5fpxUpjQMexsZ8JunXpfFcMxUSS7",
  "key20": "5HSVeaK5RxWe1UWLR1C6rPUNqHTxR2xZrXhausr2UQysyJmr9n2MJsbHeYgjvQvRxmEj4Ukgeq1Xn6BFPD73tnFC",
  "key21": "3EW1irEK9n16gsG6UXvbKTNzEyjgLSQp6pYgyD3yJ7UEWvftJ5UjhRink99pGeLop8wXwohWDtrjDraTDLqF2Zwt",
  "key22": "3D7FQnussWX1YbJyKZnW4pPFJnVqRVD3fjhGVSTZtLM4noGgVQr1NXDFN3caXXD9ERt4yV1GauN1YRZi63rSvLC7",
  "key23": "3cMFxvdLoJc9mRxCXmERNjrunysstx7zhP6x4QACefYfDcnPCCZZGiys1kkTUWHPRunWiQroQ56XYfGVm5ZZ4Van",
  "key24": "5xyquHLTP7Y9s9h2iGDM82UysaFmKgxS1JYLsGVhPRZ7tBmwq2VtqXSKtLpqBKJqsTHY8oChitWKdhcCpXntidL1",
  "key25": "2f8gjqw92GeqUZfSNUeav998fkBcHjQVSRdMYQZuZ6xpmWXCtt9RTyg2Mswfe6EDNZz6x9RdKzMkW7zQ8spjZM3p"
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
