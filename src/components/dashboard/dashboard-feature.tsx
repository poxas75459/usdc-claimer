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
    "2YyszoBJ4YN5tc1V5imEEvjXQauXh7ZudTDu57XqV6iYuj7p7whWCTRk4X1rkdfBu1JV1KuHAGzjDCQvVqwPN9RE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uqCJP97Sk3iv5gEWL3seMgdKj2WxPoP3teV7XbLV2PWVxPUCp1sNBjbckB3foHqPAFG3JrnZWUpvK9ru7kCZesr",
  "key1": "3qRGfCmRqiqM1DSxxjQV1sLRaHyUXNHd5jsCtfBr7WLUA5S6GiBnxZQevSoADFUcArfAH7rEzSpTv757eDoAPK9e",
  "key2": "21PrzgYQAzCWh47djHmEzj8KKi2RAbpweqdnaYA12VXsPVdXoAyCu9Asn1J4vzfGBDZeJku2Egm1M2XAfLdAYhfZ",
  "key3": "5or81ERAzxqingUFhMV5fXMUdsHRCqZf3W9jSseR4UoUooThLvs9eAsNdfiQ7zbZjH6AG5jur18soKbLPyfY8Ew2",
  "key4": "2cweq3fzAfySKsKgEyyKAnV2Vav8RDJYzFV6diLfZqvrGq6V61fqNwGmbjmruHNxMrT7QPY3ve1wsrCwL7ZYMLCV",
  "key5": "1XPN5NkEkVjeYi7TfSVrdVxFpg3QjE9BxueqpSaTuiws6Dwme6WDBerhLakfKtnuKT2Hbh6Yzznqx9ybrxrZ7o5",
  "key6": "4P4H9PjAte7KgqQqyF8FENKjd4QDS4NDhwz4S5iSJbvqDGPyKqELgEHjmcvjxJCFeqcFde8kU9ncaEC74t9WFWcc",
  "key7": "58JW2YgsXV6BhfB7Abc7mvbkuCJkZHKJtGG7WMTtzUDxUUgPB9SVc3gnuc6rzE6Yc8rN7uY882zjBqMisQNvhZGL",
  "key8": "WeanoExQjtRdBPi6yNoRYozWGB1b5i1VuzKMYspkagPcRhHppuJ8tb9sXY784BXVDPwJMkKqtodYTQBt8XfEV7v",
  "key9": "3tbK5CWAfGwudpCGuzPBZBdh666n9xh5QSMEntrcGZRXzSBDNy7uF7HXb5Ua2nyu1wJGMrkGuKjuWHodzmBdGqTm",
  "key10": "44kRNSZqRbhwgaKqfhvk5YMnjdy7gPNAyjjHEgzaL1sjFrdHjfQQNmi9taB5YFwmgp7xJFyzt5KYL9KjmSML6Yh4",
  "key11": "3BmiBihunFq8Uv9UgivXcHbpaSyhxNr3T5SXXmEnrocGqKAARQbeG1X24dzkTrb3iAAp4HtQQNwLyHKQWaAyFDGH",
  "key12": "4La1N5oUcBzGWUF2MGw9ZbaWa64CzsYHAArAxSgg7bMqvwMWcA4qcP9aNFoXmHKgxoykUCyMfRRC51Zvg9E9B3HG",
  "key13": "48sBXfLiDHuweqLwXZiG1Xy1iRA73ec8fRkBAQWgTAHXnMXr9GcZdPawWdMma6HhT5zf2aTA3JoMN94xFyNjjxpz",
  "key14": "589USQvf7jnHZomnFJwAkNVKGR6pENtYQ29Ms2mkZoS9MwhTaAyrXwKESR2PHC4T4CoXrdwrRJ14RETFQpnMyFJY",
  "key15": "4gY1FpwGdJZXLi6VNNjbTmvfjbHvY4L7cUzemr1VJ3WrZYc4yS2Pvru1RiPp1J8fQwr6DSo3DbvJGYxNaWCAmUVF",
  "key16": "5nVbdCNde3XvNcFEzzZe1Zir6pLRFVe7TsSdee1awyFx7osDLR6FPCjhVagoWE8YcKPugbgQ5euxucxK7eysVajN",
  "key17": "4h1VWxFQR7Kjup12AFhZWSWtjSWexShDV9mbcVicMZU7TPEs1fp4QaoVYxSeZxxNhA6HukzcyfoFqn6Nwb7N5APV",
  "key18": "3JXw6QuJcjJ94DtYfZxRZWnzdxZbkkczBTHzw5tytyVsL5naHHLH8uZWqWUrJnEhGSFJg6sws6CL6nHRDbphXJ8g",
  "key19": "4T1Fj2DzMGJKYeAZMK2HgAjmzCTFzu5kk7ARRQRNAp6D8VoUvbbsfo5TWGQhR3J6v1qfS8SEnQmrDi5KrBdgLwVP",
  "key20": "2ciUT9uaD6rY9kDMtFomUYGhWHLvQuo1m5nxTmVDRXTXBPeYtQTNAddv6NpWPykWsTfCd52EcBMDgcmTduQ1Au7r",
  "key21": "4zwkNhLe3MoXvBqGCzVAtPncbPEHqn3kjxYBHqsGNjhcRxRPEkbD1PtWygw89WkrGEhXuTW3kzERHSa5dYWTPn4N",
  "key22": "5hwXSRHpSjpPM9qb9863MM7FeNy6Byu5YQf4DAjG81kwn6KYTeJdm87eJadvp3mnQSaKkN1KD9p3iJipjpLZGhN3",
  "key23": "3SQinYmiVmvrrUhhzr6bgcx9DYjRPF9juk9PfKERLg345PagZt9UgNmVbCKR6KYgS9BnLJ7uRpDiBsb3JKuoZ9Mw",
  "key24": "2MUiiETwDFjaGoah29e2R4X6yFkLwExTsPNZQrU1TiWVxYC6i3Z3PYdgmLueG9RDWfnrQMUrReXjXJa1kDqm5uez",
  "key25": "3bq4BkgVDsBqWwyZ8AfDYY54R1XG2cojd9gdxWAHCcvxz6i9PfgPgzDRRq24HpKLwb9PbeNSQd6EQT73MX585ynQ",
  "key26": "vMdLhC44mH8dk9Qac1SVfhrhiSH3UjkiBRHazW8yeT2eXq4wTC9QpSCxp3Vo1THBMJwM3GRb1ipNEmymmqL9NTN",
  "key27": "3Bg2UXui8R6VmTn5XAEoTjt6MbJN5F91PddoNtNqQujoDmmG2qu3zK9wtstpQF6FFG2ZvBeSzknEScfVoPRkMJbr",
  "key28": "rf53YzaToUMLQGo54VdYcACv3SvhqxdXbauT7fKuQFy4BWzc7BdegrNnk62fBGibpvLJjPU7rLiJH5AwSTwfqa6",
  "key29": "364Xs2ZzZ3MbeddEMVFx5RaCpsyeZp8ra9g1sdgfsZeMnbeaUeia3BeEiAM7h5Z2qRNgv9Wc1KgGu2XzB1pyTeTT"
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
