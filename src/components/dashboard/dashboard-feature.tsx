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
    "2Lhx2DMbe3NemCt2wc3kYXLjkQvXUN1m54LKmRcVoiHiBSGfAwk96mTzBMrVgi9g61xEZRydcMfPqStdJE2KQSzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WpQ8jCnSMU4kUrRCAeUjWwNwrrHQ9pE9bbqU8SrCuWkn7jj9cXqZJAmwXc4KS3N7LxK87y2XCGfgZ1BbGo5rfT5",
  "key1": "4gqH11bBv8oa5Ecc7hbHXkCLqg8fSrzmMePKpToyz6KjCxACi9jZ9snF98Mi4Z8P9u9j2M1mQ46TRQnRoUcp7Pim",
  "key2": "5GpnFxz67xSLonp5H45suRRdnLvd44empUNvAMbeZKsAaA7WaLXHnNkHBa1B42vRW8JvSKKzyvEDvWoPT5XExMMM",
  "key3": "DVJtPpWxdHNtbEN1fTJfKAUSMdvrpqfqvxQpwzZnqdF9VPRnLHHenWXBAMgRqzVF1CR1NCHMaVG2ZcpfCi52Msr",
  "key4": "24g8SDV4jr7xU6wKUgzkgfguGriknRLMfufNuHMGhkbx4N2rFVUA5YinYHtUbcWhTaWY7ThKTkKbS7wGLANo6Vt7",
  "key5": "3vR8Rex5oY9gx1DgdvupnCQ5AEBu4t5qQka81TFKzZL6qR3hhozKMPF7ybAbUq3KCBZrq3LzWZC8GLP1r4RzAxiE",
  "key6": "Rr2ftGvMxjrZty2t9DJoCwjUiF8aQnzpP2sL9pF48EnyvN5AB1k9APr3Y1CC1PFXJFCW7hHrgq5tQ1LGvkoV8W9",
  "key7": "2bNjV1LWPv5xoSkczwn2xugE4j6tHxVYgbgnk6NYYknyBWU3wxcYPA7UzfAHxVAbgsomvRacmDdc5QKaQ6xUkvcf",
  "key8": "FGR5LNhoxTF6WqC1Db5kYdHLZBDWu7SHK4JSqdpJo3TXxkVuvSdeWzeHbPjKaMAEUh56G8fYGfns1bjHzVe49Xa",
  "key9": "3A6Lwws9x9kGyW5z4DJy8NgX7aSVjazSjc6xYf6PapyTbNFwSjawvjR9mvb2eTLCKiSSKhGDZ2k3qCDSwZYieN2s",
  "key10": "iP65MMNGMVw1vvHaRGMGS89PFq7NC8TLPRqVEK3GDLKzBgAPVVot13yhK1URzSKiA6WssepJYbz6wckz2WqWQGw",
  "key11": "3ha9DuGr5FHou58XDf5p1BgVVJhArxhuezyudRzZWbMcsekgBuaeasrgsmb4EtPL5e9wrx7y6wJUYEAnpPguxibB",
  "key12": "3ixiRwQomK7WSctRGrbQWJK86mzc5XLz3sG4otCzsxtUkjsvaGqCWbxqSFVKTR73xridJVdBrnoG2NJVPNcNDnfR",
  "key13": "2LBb6Ff2wzCV4rvASKgYpeU5esCrEqWaboyx916rKvuPZkx72FeR9CUGP32fPpDq9dHSfgZ928ZrLXLUKKttMrrC",
  "key14": "3nkvziprdPzua4cWno1Lgo9DwgyMEAc3rFF2iErmxHHfwZDCV7EQj3AZKED9Q2vZtvkaaqD5ESmBja5WSpGcJUGP",
  "key15": "2GZgq6yRXfpbkVJJKXEQSMt3fivKwtduqCEUN8nxNwL6VSW7hTqqtcXXarBet1qCzj217ffQstqV3DucPHqDRDy7",
  "key16": "2xryZEEysf16axYbZh3YNrbP9Eomf3KAd1aAD2Rc9RvN1vgZbgjZbR9F8RUqwYxSccuWUV4X2EjcU6xX2wszfcHp",
  "key17": "34nweZdhaN8mF88TFYfoLsgLK5r3tK8sYhHqr67UBF3UEw7zLADAdgWNBdpKkEzpUXTQUt4joz5NmesmttHKvqnk",
  "key18": "2eSuawZm8bR3RN8NN6WykTPRnVRkvVnDkKCAs5JKBwcMGkn1jg2rm9xTLW3oNWVW5zmVFNQJTGjGpnKnzDZctQ54",
  "key19": "2XuWZ6gwjcm5aWvj67fScfwqECYWnMQucyrF24Lni7Be7NiCB65N3yPr9GGNMbZHh2WeCY1zfZ4yjErD3yXxuh5Y",
  "key20": "QgTTXNzXxKSuwH3Lu2BtaqbJ4cshJtaT8sDSG1S8iYerwjE98xnMCEkMwCMv3ogCmL8JVhkrkKWM8eckTQj9KkH",
  "key21": "4D5Y2thmC4ePDwDXnp8ceXX97Eur8KnKiSbWxMs2f2UEd2xcgEFPpGEBmz2cx7FDKcRhd3yYAjUE28EUkWQbPPKw",
  "key22": "48SALnaYrCyHKAyqMGw5SAmVNKBL4cbk7rnnwM9vjuA6uzQgeDz2M1BCjkKWcjLEQ6Y6RrgzLWAULGsbdGgFytVE",
  "key23": "36BA2S7FBsm4zLrjW7NNdBAe6GDbkHf2wAAFwAtsMPYn4Twna7CXb7Yb2L3zVF5ECmrT7FzU3iWP2csJD1H3vW56",
  "key24": "546CjH2qCB6cKLuUHryGy6ce6nnDQDGE3svreY5LPUeD4U38gD2vrwQErBYS21vreKJpnuKpVbAXitTUDG1qWEPH",
  "key25": "cQz1as7AzRCUr9X4xBQiuHjxsELiV4SUNwUWFTzifnvJyDu2d5Y2tbumXoNRua32VL3TfGFQAXf7rf7PxetD4TW"
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
