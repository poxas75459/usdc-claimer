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
    "2FNKMEYhh8VcSBfxoGH3StG82ws7SUqDcumcgV7UHNBzQHujVBBHWUughRmKhAATRXxJuHCadZ66ax9hRwv9PDr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "674c2xJLXX5DJ8AovPX5BGjAmzkFBWEsGZSYfy5yA4Gk5ZBs3zLRJEHMcupVJ6bsqHhuhMbDTUWZApKhSHaPT3Y",
  "key1": "4J7ijvZT83pSKqU32D5UCbzVtckzFNsQ32CckBQ2Ygwi5jApTqX2RGqsXpATZLY6BZgH6k1h7zE7E25WABXychJQ",
  "key2": "5AQYgSXmNWNjvjKyCKfHtm65hvAb1mThvZTBJgxthv37dpu5QdwbiPpdwh6YDQ2LmEzmqa6oQJqbgN8g6sWCxofe",
  "key3": "57RPJca7BNMFBaXTfF362rvxyCaWteVavtXnXXsPQ9ic839eaZRyTjchf9S8S7ErJu2ckuLC2ndWCyP65UfjGVp3",
  "key4": "3RD3BdGbsBKB5t8qC5fE2HaC5j56uFAQnpw8v83AqTghML43oKweTo3fkuA9DhGJy4ytV652kSVrPTu4Fgnb1Z6E",
  "key5": "5W16bEa97YfqyBcoPp8BwcHwaKGSJEoXuYLDXAtE2F5fcwvrK6Cow9Uz6Q9iZaEiig9bjcegmYSJXfR9tTgsJnJA",
  "key6": "GSkNN6YhD4b2CMXZPs4RAVnQ3GfB1cCvZoeDrWjgcnT8ztoXwCvWrPHNxZhnRui28Wh1cAhYiPc7zBxcL3N1xC1",
  "key7": "yoXpbne1VF8x1DvHx3bdiArJibxvHooTEXy7WG6hqsWm7Vp4wYg2eP1Y9Mmtrr8PRqRkp3L7UmJcqsKtmA32J1k",
  "key8": "5SxPnnWCL94divAXrkWy5pwCEbdsYSVYb1HdPfNp1ypuLFRA24fz8MAN6LP62da8APJBH7kqUTD6HmN24Dua1tyP",
  "key9": "5MFE1yomfMf1LJvsZ7vo7TwmraxRxs2HbbJzqRfjParpQ4k9LEgvUAAc7nueVBrjpH8LDHN4R5VHWCW7k1s8QkuU",
  "key10": "4TmZWt8QASEE1GEvvWL263DtLQS4NyhwLGUvQnmMdAG5KEP7VwSHbfmtaHcXCCErd12ggdetRziMi4KfhVBQCnbK",
  "key11": "P1ET2asPHUwssPvwmoTmPLqvSQ6zYDybaVcbks23SuE8TEMkusBLPVtk26L4oV1WP6tLqjHYoL6ZEygL5HKkkpr",
  "key12": "5nEzJa9zXxHxPvyd45icn25uWjCvvXdH9Jtu3KjiK1MCZHSEPPXJQzkcKz8CCXRBD3pX53XrjqwxV4tFbPG3JmEP",
  "key13": "5yegQgpLMZKpw13XN4oFpx7kE47KTd2CGPDtCVqPoXLpxBnai13JsMoeZmc9QiH3tUBHfPsSxd1ntDJYXudiJGeL",
  "key14": "SeLeDxK6dg6crLu4pSo6n8P8KFAFPjyYL3wZpPKD1eSBAE5XvRvG2mKGGB9QqY3vNHc2YGmZNbH6bgr4i25a8Do",
  "key15": "23iK2N6kuPU1QcavTYvtiGLft6J16qkdn7n2qngqBtiPMcHtepW5Mcw5oUpWBWbBUijwq4hZo6SdRePQpgU4hhit",
  "key16": "2kiqKtA3YQyuWkKgc9dm3d4jN89r6WkQ1bjrqrnda1ghBGRcRo6XvZLsCbGUTG5G5ZuVMTsD6of8YPq53guW61P9",
  "key17": "3h5BZtEqnr6EskgZaNgXteY64FvSPRfb3GRb4vC3MmpyznMYHodgDktAb2L74ez8oay74QqD3fv12aG7CUxuWWHe",
  "key18": "3JhUDnaoKU5jpEy6CQhFPPm8y5u3hfJodfVXvsGVLQLXVi8EmNbQGYKendwx5jEis2S9xLaCD9uo5bLfY1HMN56k",
  "key19": "5PkSGWikGorCHhn127XtjPyH1qHM5oYKE5RabwBBCm8qsaA1riEKS7JL3psnVUPb24NSBbCUyNXLUpYrZ4N3C1Zj",
  "key20": "4TFMjmrwDcXSmj7hw7BGVma2vS1n6VQwihwpmwMsN8NWYkPHpaB9nz3SsuE4tB2cboBYhp5Ai5JJKRrawTtxVcVH",
  "key21": "5MMC9PbAnSNQEhbpMReJ3jMvgfRtixEwgoggjF461JtfudAsbFt2uH21Eg9Frb2e5ZHLTvU1aKP1zDpm27HzzEyw",
  "key22": "4KSG9j793nEgt6mnf3vxupFazP1iof2o7PaWYByNREtLUMSRQP2NXxLHQJoswhPm4KUm2jXuPKrvG16Lcnwqj2ec",
  "key23": "5QCsxYojH5VJVJou3qmscSrx2bD749JgbpLWK4DnaDAcYuoPG6RCfNaG6NZVJhuwzSdLWFowNd4iY8NfFtMbeRxW",
  "key24": "64MKNKQhQk266vpWdR1PdRF4ECLySmaeLi2BkurugpezmQKGmcVHkLDLepMsWbvFj4xAwj75XJqL9zxBCzwPYLhL",
  "key25": "3XTaaXPW4e37H2rCSAZQjxJQwegWMgDZJCudZNvBmyy7omtbA9h6gRLSdiUaot92FDarXuNt4PtVCSurB3fuvuD6",
  "key26": "4imADm9b69L2RrTThrRL5t74YGR3jSr6584Z9zdGnj73xSWRymwaZbZh4sUdTyLXnR2Nfodi7H83dzwSK6nxH7bE",
  "key27": "3UMqAgHCk5ANEBC68xKYwzuiWVE18QbtDBZ9MwLB2MrB3bYp1E6e4GbJZBFrJYuxQ37VMczQgaXYuNyNE8ZBH5df",
  "key28": "XioQfrzPwZM2b3FDH3uz6UDmbUDGepLyv69z1LDwkw7sn4rZjVhcNKhbFrWm6cX2a7JG8wHigAmWtgkaXCUcpDY"
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
