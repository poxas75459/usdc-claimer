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
    "pV8PwEeVYsJg2cCVLA1Jw6heN25hTnvU2gC6FVZrxfiD65Un74aNnZUwQGtf54GNa3Huzbn7z2jcREnGrziwmCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tLsfNGLwhsqCtra91JRvkShaTFATwUKEnXTucvUETT9oowTBG1PF29qSgs2PMfD1gLpmLKyFgx2FxuBDBP3oK8D",
  "key1": "3QmvCYH5LXaXFAT1vE8aooQzajvsHAeB8G7MJKb4td4KBUKVu5x1CLX5bnw9Ce2UdnNtsKNX8ZsrqQEwq2ym39ja",
  "key2": "53AFvh89RrrbXoSMrBPQ3roZG13gSUt7cGewSjn4YJ3vMNKFer8TMcgy1HvGoEjiTpzTXQVWJ5RerGfGSpEF9MTE",
  "key3": "2pUswj8XhAVEqRUzP5XiBmyVJnLKr1xv5h4rVX7NRCP9wA6ae5sRey97kuDMg8RBgHnaYqFei5gMggZMqc4KNQwg",
  "key4": "124TX1vp31zK2sZui7WveeANKDwyr4vTAUUVvGyeMxoEAzfw4YYPH6odabD9Fij4ZFSFpfKgMzFpzcULbSQGmkVV",
  "key5": "42Mn6qriC3JznFnNRkyqHc6WQCET2azeqzMmEbw9LMpAEHQ1Y7TNBR2GaL3ZTxjWeTAk47RoQfpWBd2U8mbyMbGF",
  "key6": "3WX3LgQ2ki1SK8fToXu2M574tWDN7Ycq4tdLaxz2oAa3vafzykZyuUpvVMZnjCP21WRhTNZTvATVB3CjtyMPNGCH",
  "key7": "3qfERWoNSM4bBVoxkLeMsne4e2q6HVnmhbAf4znLgWCT11apssU8YnmvNmKGagKanPF4sPog91wE6dWtWbvkdzvZ",
  "key8": "3pteJUTD7jwKPqaE3JbCje93R9u194oXQENfKMWVcn8UPsvnXHmaqcntHt5Y7EuoZW3Z93MqF7JqgEUY5eCpK3Ug",
  "key9": "2sF4b9ysUtxPUZnw3C8pB2EaCPB8JBh9JiRa5tigzafWDeAeEcdyRbcJzY2Q8xHrVUdLdUAtgv7zzgUgxmemjXBu",
  "key10": "3AcK29dGbGXUfMdfyJ2TaDTS21HeaGNFbHnCKWxDqfQr9nvdRE9HcAjqoemWDHNdEQFFaF2VzPHxkg7LE3Rt5oxY",
  "key11": "29vxsKh4CjuqSkiA6uBKD49ecTsxffKe19eDsFeN92bXALhA5zmMvxvEBfNXoFxgwbUoWerUu5kvJwHJPc88SZHC",
  "key12": "4gJTFr42tzunjqdn47CFL8dts8TWyCU1ijFZt4cmmeoQoPVVfa59bbVo6wHohYwncxHSjf4Cyimz6sKphwvvSSBi",
  "key13": "61fa6T2n2oai3VS6K6uTDzU21jRKwZTKAh2iEy7NP9SSo3Uk6EBShsonWWGLKD6w6FyuECBsSpE9qqttdwyTBwkc",
  "key14": "55MVfsZCLzNF3nY7gRkxYgNico1L2RNJmQk2wQJydCbt99G5SPPvaxCrVssbENh8JWBq1kAGxtkrUmxpyfqF7131",
  "key15": "53h6RZv8RPQv8N3JZ7e2owGSFSnbJSkBASooi44LgjgUeFffQrhqV641n49u9UVG2tjrYiEEujwT7HftyGnK9oja",
  "key16": "3o9iGQVGxiZjgQ3de3kyx3ZRpC6HbyhbfVvYyRqg34fN9RZCU8roFDspgnBjvQ4zuWGs6j54YbgQfvkijTurioLk",
  "key17": "2uB9L9xfUhBgXDuZJifqBRUYH5L2mLyWLgMHpH8PX4zcFLqMw7RPZtngCnPdWMD2ZRRV2qMuUphmazhMSYxfdHrP",
  "key18": "4zND7yEZFubJ43H9Y3ghfFC8m4Jeatt2mHeyzwP1PACNzdrQW5N8iKMDhaEXWiZzpjNgtrdaU3vA3yGREnHpKgRw",
  "key19": "7QRpG1BnSPNSKz4PGGG8tJAFhPquSvpJFKe6ZZPjs8kin6RQGM3U7i8yR2BDedFWptZ7xV193GJtMv4DuuuZWTu",
  "key20": "2PEV13cQT3Y1ncNwaydHu3SDbtbo6qD1GjxuiEaxRkK7k81sHzGDHmGothYq8mjAxTJ8pux2b3Q6NXC9g6wJJPbz",
  "key21": "5HV458L1ECz4qf56XEip7ShRZkn9TMQEVvVc97CpfvmtgMeHKWncgn5fNLrwf1czFgogCGWTyjpyV31Lh8j778Na",
  "key22": "62riwWigDiaFXDW6p5ikMxRsxgWaaVYGFnS68HGaEsiKMAd9dkWNAcxDDERmK6hjGWvcfg9WpQxuUAqHfpMNEGfQ",
  "key23": "4CaJWrF1q5D8rbaoFm2qqkMNxSaGygxYWnhAwCVMaKkUceV4Z1zBtQ2FDhkT5Bs7qymLq61YpZDb2S1FMqmRfTKN",
  "key24": "JSt5ZmTFw3QqMJqCyEio46s3E4D5nocnMd3ySkzK6n4UvsMhyyqs4UY7Eez7WpBzsnNhniiVx5pnCHFmZs4UxeF",
  "key25": "E95Q5AfG9AsVpsFMxS1W1UY9frXh3AGqXcFbF6k7PLN43QJpufwsivmgBz7uBmA1ndcD1rYYHUFV34i1pBjJwcw",
  "key26": "62nzcUwkBqpnF9rod4btepKeupFz5dydqQWV4HPJbuJjrGHnKQDELFehYBtnXhBZEozGDyuMWb4UDTPfTAXadwPo",
  "key27": "2nRfqnhz8rubnntKHnq7MLVJtUWUJdCvc35k7UetdN8rqc1FhSvjc4UvZqezxD7WcVLZatJwi68ikCwG2FSnpFik",
  "key28": "3h32UbsuCiMuKvjCaFupVN962Vry5TEkN2oHNeEpqTDut6TVyydAHRU55UecjiJ7aRQ9Djjos1NS9hTTgbugap4P",
  "key29": "38unvNQN9WWYbwzyYBgAXhB7n4h1ggSHxqS9aayKvPpjQGoxJ83WLXfF8yrmNnaKMamMrtmEmJTWCK1XK6sYkUCq",
  "key30": "2nviJjqFV89BzbUvonKtQhGcY4DMAHDZQkjmwU8rJwywW1gUm17vG7bBUMzpG1duA7BsUf9rthGxjbKoGymiCHac",
  "key31": "U6ZqKNN411yCopbiyTTgNfNiCyPGqi5M2SkV9qbe8z5SX7Pgw2rvPr3DzUuQuwtUJbxHTG7DUYVcV4Syp2B7zUh"
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
