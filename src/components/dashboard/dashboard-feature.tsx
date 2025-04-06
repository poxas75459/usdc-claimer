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
    "4TMi9Su4yteZxMaLYwYYajtyLvAEp3oxRid3EApskMk7mPnaUrZs7CteEYiv3oG2kqY6wTsxGkaB9oAmi3pnmM3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VBVz1pmHdeqV2yuDkHr6RtNtW4ZRVgGH6uEvjPURXhMYsMWQaUQ3tLUZmF7k447GXq6uWTPLMh1THhNuETEcV96",
  "key1": "3bAw8pTmmkhZAVpPk9BhcybAW7W3UL3kXHfaCbwRF9QcdSuDcr9qYeZZVPyoihe31BBsZNDscs1VcAzirhqFHapS",
  "key2": "gAFziiddAEzBT9DL99DwH8Aih9JVCAureT5tuD2GxGvvzrm6GGwUzwCVb8eL3UHk563BLFQWdxiYUmSmK7wWjUe",
  "key3": "3BpkHVGuSWkG7jpsKwsrFytd1sXQtcuseqB13okYKBjJ6EtazvH1w7WyJhU8DKNCjxuzgLkvbLy3AswKprzhKrEi",
  "key4": "3eggtrfyLqLgZWnzysmKUe6ZP4XSxKR5fkyVGsfsfF2fRBxLUvoFC66TsKN9v2wecBFjcZqDwy3dKPs7Xt5UPinV",
  "key5": "uqYixDh8Ra5QKj9eUZJ5iGAspKyrPKjohdba6M4fYcPMyoUJ8rUTM3TDLpE5xL5da2SAqooMwQDqsd64QAyPBGA",
  "key6": "46L1cVTrwMDMQVGFammAvEVzFGZZQ8SHaLd77uXfBYyYe2n7g49GqrjqdnCxoVkrgQMb1m2fAv24miUor8DMCVQH",
  "key7": "4v5kG6rJqnrUC5VZZTbwoTqjKhTaPyuP296grFKQ3mBckTWpe4J68eSY15xx9p3MsABe3dbdDca3BDZaKcVxAPmL",
  "key8": "48qPmYBSEE5hXKZ3bFnY22fe6pf8mcxChRgDdva8JPfxUJ1iSdfmL4NZQmXaqKrk5bBBp4aiHVNyWC8TKPpQgVsx",
  "key9": "2FYPVT77MXvJBkTJytaEBR3GY2Lx4gxkZpG6x5aHY2iQjnv4yRez5CfCp1SpMgkyXe1ecEMCdgoFjSjh6LwcA6Bt",
  "key10": "3ciV98eW5fATPoi66fQw2ykdzCiEWtdqoJSxg3ymiXxnCYeiGuiMEL7ALF1E6zPnr8FodSz1BPyQZ9i53tbXDaq2",
  "key11": "2ZWwaqsdMwVx9Kpa1totTnGmVUVtCe2Y17yHriohPfWSgmf6qtQ6RZDXoSnWo7KKTRdDHB9JBELDrrHimCMt9r9h",
  "key12": "2Q2Bg8aVWTE59vFHqoGkrtfBnRRzJFFpn9xUX9C9zFcgQ4isFa2MKxJkbyyjVxbrHMpRMooJvZP3M2ftUnVot1uK",
  "key13": "MTjXr8y56Ld8JRY8ZA4ypEH4pCpYwgZYavZuxGNirhcpb1RcCbK5GB7e86VuFsoY8VU1F2fd2Mkx5crzxMB1DcW",
  "key14": "5wirRDmB6vzhWpWKyXfvn427Gb8oHavwF3Mgk3EzAbjg2BmfQAu5jv8fDpCiZ1E5P93c7PShV68gHeFHwweSfLWs",
  "key15": "4u8ULpspXDtNfmEwgbpTBCxpqH49PUc3Zc5PQd97N2E3AJ1jYWuVM6d6SCng9CPCJ9HaRLXB8EKMkPy3GEuD9DVu",
  "key16": "3BMbt9mPiW31SfoYSwkDq7ATgpGQLyYMa1oYHYuNAZiHbsHrHuWxMvUP8SA2YDFhBfztfC4BxwzD8cAKFjvy9TPA",
  "key17": "i65cyDg77WuzDjkD2PUqTvMpyDYNgeJasDRKr4FbyK6U7CkggWMq3b2aSupPLbrDaWUgVD27x6Dy1KM2RbjxPhG",
  "key18": "3PDwNi5hJYyKR9n7dLMvpjiafCxottkMU9jtndysfp3nUa9L4mjoCJFQUAgfZbDGYkgBXTfvD1mncdf29kzSimtQ",
  "key19": "74wG892j1KKeYNfeWb2uF3s1Xorzb4E9gxVC9n83WbjCcf1BM44pQ9z4ANM4GJYY6hSgEWg1HgXPYcnqKF55yVE",
  "key20": "4TBjGpU6NpXpNriVEQ92B3Zavyab7KmrD7QzKzaEGgiBH25GNKGC98QdvghmuwL7FaG4DCVzUuSboTtw5jxxHKq7",
  "key21": "2q9tgK7SacE45SHgWfMtabw9sAf6Lkp9KBUNwCmkXaBDaFSxDc5ibkecSRChBZXQydqCnA7r3vsjQcN57pS2m63M",
  "key22": "Mm5i9hFxEFi4FZx4R5o3ySTfzHvLGoBdrd8UAVokxJUs2HkKTo12Ff6qMa7gkqRTXSJZmbZGuyUbbNVShNpNZe5",
  "key23": "3B5Thts73xpmHwSG5EdiZWWBPiWeXFsUr2DN6yxeubCwVoDTyRJuvYA6DVpMzNBdHXtuHjnek743SnRpRNaWytRh",
  "key24": "4mtyWByLzNZRPGcDeVmKrAGdYnAE4WTZbr3yCvqGem7sw5WLYZ3kbij8jwWwDuNKbQ1iaX5ie56jEk9ZZeSXe8iu"
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
