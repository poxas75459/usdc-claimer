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
    "XQdgn9kZ9bYbrv9kNqBcPhgdSNxP4TpU8GtZhJBmpUG4wn5LzmNAM4F5ZqrKC9xZ3dqty8bWc57oCBC6gJHJz6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42YtEKiZuaffxgLWfAxKJJr5aDRFozzNULRjerK7NAVPE3eGpDBXmtsn4K374bi6aox4Cdjo2gfwNwNFmX87KsrD",
  "key1": "3saAtSGspQXLXfocjxGxiaRNUPbHF4WYhJEKbBwnttCyQ4MTkXmpEc82LatfwHdy7eyQsLkZN4RUZfcn61pERvNA",
  "key2": "2BETCgrKJ8SBDqahEusg9FSe7fDfGet4rVTfcvUUsMDcCqmvGSKWSwaRRtCdc9BB8KyWdB6MZa4Th9NuB5j5Dbcg",
  "key3": "GuWiNx1aAgfevF3RTWV2QHjgjvA8VgQy478s3DZ4irVYjCKPEXxSpxhXr4Y4RLh4vHCFYuG4UTarP7wQHxcCZQm",
  "key4": "5oxkb8p47sAdfMRsnJPFTcFubLPL2rh1Sv1LqtMPekRGgwqH5abHCUft822q3WuKvXEDBUAj8LYC42VmiWTztFj2",
  "key5": "2CxHSxrB9oz1geG3WvcznmiEGPJGvWitkGAXGhS4ECxdaGuzqHrwMGdPSN1bSZf8JRLpWZCJP3LBDxiMeDdNyGWc",
  "key6": "3o1iEHLE2pFbXbYcS28NgqhmYcmPvjD49oxyESHhPJjvEv5MCL6uVzacNa2hGvE5st4HPdxevaZoUkBGDt7HmGaK",
  "key7": "3o4EoJ6B7rfoZGUQoHPw8JcoUavLpFruZKK61tQw1unwHGG1Gy3wmsERDyuBwxNvMKxJBjjtx6NmBUFnZ8kUKphV",
  "key8": "4JBF8smZt3aLvsc8UjJt4YbQPxL9PCsyUatFQxowJWSUhtXPGxsy7veyPq8zHCeV28crR9QjwhwxvscbkuudRd1U",
  "key9": "3Pp24uzBDXVEmH8vD3WkgdzULkNn7WgTkJpC8AGL8GnW1SgVFFoSWq9evVkmTuYXYJqGMyV1fny4LpSoP7DcXw4k",
  "key10": "5ruzvwVox5oychi5gqGGdeAoppZhc8mPPzQ9WCcFC2rhGisU3TY9TxQZxMRx4RXvyqszX2WH3Edai5foC333qbpN",
  "key11": "3zYTUreYg4h3WMxpq4B8xzWwEFxqnMW2ZhGkC6GdwuxVqKHKj36GMhbLMt9dc6YEMk6x3GF1raumCPpNeZZnqPbL",
  "key12": "4DvyAq7WvVboQXUebemzJQ62RfReUvaFkGUtqhWtjJShMr3XbwM6H3HpAKAyR26NgNPeQmG1hYQX83JHfmstLGDQ",
  "key13": "3GRVDS9qSrvj7Rr1fQf3TCn2345RjVZNZfV8PsyGbpVeN9JdbErBWRAZ67YhcsqLjxxMeYcfYzvXBGwpfJseYpQd",
  "key14": "4YTdKE2MnfKwGashjGNFioiFtADwKiRyk6uPgingXGq2v99czvt1KU68ZPagSA2tZk1qzgbCwEc3aDYrUd4ss2Ne",
  "key15": "5j4Rdq8jcmVvsdCUWojFsex6M5g9nemwcBNvsKgRh4XTfQs8Uhmm8FfChUEr5zq49AcssMTNYWDY1uVQAWH3ESZK",
  "key16": "3jHWrStVhNHtBLbtjUtu4oTVJkWdXMHBj55WYKvn6GK3cJj55KSnBrcKaURNU2DhhU3FaxFbshSuBxEuuMcrMiaw",
  "key17": "4XCkmWYtCFxEnnNaPSBjXxLXKwhMjTnFjDxB15ZdLRCbGyrfqb84JuXnXE6G9QwrSXEzfFyjaaWWZNnoNfQN2p1Q",
  "key18": "4v1yZhaKDRi8v6M15BJC52UpZkzK6frKTXB3AjZKWSLhXX7MwBVXVftpzxh6ZW39VTLdMhFKCpCCDR3hnkxp9KQJ",
  "key19": "3cWqqLvFg7vro6u7yM1PViWNXbHEAzddnm13xQscjee2y3NBUM64C1sUhcGh95KFvT3ZHEjmc6NwZUNdirdNerAJ",
  "key20": "bxrLsMqvMJkN2vFbZnK4fw962cFJyAEBmbn9sVfGQmt6FN5NYMhDH7B5c5JhXgHLoygNRtrZpjoD1spD9886PSL",
  "key21": "bGpCsoJTkKuBDv6NSRxSSgMj3m4cHcctHBpmNf289Un1GqFNeZCHJ2Q9KKxF62NWHM2hxy8TX1ntVFcocW5vhCD",
  "key22": "3ssF18Z314i7egnWDn4Z43Coq5gYex8Xs8oMiif6LpLWJ6vXDeyqprTPsbEW1NeFesGquX8p9GBYL31hM4k9csVv",
  "key23": "3LhTN86XrZ9LeHujZELUWyb4qbTkfbBGGCYso1wrqWEKHVftg6548AdJdqdFvQaXv7PuQxBgL1TBxSvaqTzNBMLC",
  "key24": "pqXv4Ekrp56CFrQTV3P37JhmXpNEfXeVPAebNEBeMpNHHghKRHt2kgaP5vPHP8rkQWg1Y4pTNnqdU2MRFcUwCtW",
  "key25": "4gFkVMM6Jz8uydeGo6na7JjUAuXL2aibKuzUAkd32BZyNF2RUrvxcYGNXREDy2taFvmWUsbQQv69s4RPyyZBr9B4",
  "key26": "2GGUJntWSBRxjit336viedRDRkEMQd5bSa5Ftpamt3fc7p6SYBE1T2kZPERQWUZzPfieH5uMufubqua55uZpmCKM",
  "key27": "5o7wwatarykWQvGDb2d32b1Dy78TsfYJgwcwFxbVVxiJbZoo4e7NJqWbRDrnzUXtd22HJkAN7ZrAVce6rydhJadn",
  "key28": "3eeuKoqEa13PvrHsQAspW2o95aWSbGdVoRfVLfG8ZSzj3LUZBAVW5f5H3gs4G1HJuskWS628J8cdwkiq6fQscPAc",
  "key29": "4EfGw8GVmWdSH6ZidAdVYfqL593hEiAb9Sf2xTmSXjWVrLa4qdRKY2SsN7cZyGFESNyAZvBE4Kjw9y1mjunYtoxR",
  "key30": "24SmqnWD1swQi8YP8TZsCUYu9TcrYQjZwXMJvYdQ1SjsFx9r8Lo1idskA4u8wmg6inTHeLdku9L3DaPJp4zopMRr",
  "key31": "2kpYivrBU7oRiEvMTx4KU66arZf417LbYT1WWZrge1rdHwspUYMSPX65SZgQUm6WbY5YY7mW9Eq1QocedYnGJxE9",
  "key32": "3tXJMutSJkk3Ftcgvo57AfqS2DqffL4rPRamjMvTZW1e8KgWHR5EoSiLeMaX5DxcCAUs7uLTpTqXBAdJzrzHFjPW",
  "key33": "3cQzaV53FCdTEkH3kQh5dswH8fZEo2zhMFBdddMvtuuy3NNUkbdbwdm3PrPff8EtfKbktPgBLaVF42hroJCjEZ5E",
  "key34": "3Gc92MrS9R4ierAxK4eLgz11mzEcJper13FeZfDHBgGcK8ZCJkB1gH5pcCJeiTDX8G1TUGyZfTSeaNtyFjFzygU6",
  "key35": "5qxR7ceTRcDtDhrfrr7PmQYgcT5RygcLmL4K73hgBKN41LU8oeDANP9jDjz7PgMcyNBQrbu7cbpohLkxd8xgczgJ",
  "key36": "2efLWCuYFg6MUaMYobFkttugR7hjR7oj4kbR8ie9Ch1hKPWXtBFiZJJqFb7DyFSvS7Y1aNw1KWQVcS3SpKEueQe6",
  "key37": "2UbokeKKB3FzKZE4BdMvZdZMjLUVPAcdwrJzTNJcrhwSKu54C9VMVDjpPpmqEN8QqCDwx53S2udSkuUAzZq4xtJw",
  "key38": "3bqTTjRqENyDELdcMv8aXBb8wDNKMwMDNJjK8Dsb16NtTci9g7s4qt3qHjnAAuLQ2nvEVxH2XiqrpADpoj4ppHR3",
  "key39": "5SXKVzeX43AS5m3JYZaqnxKcTPj7US9vZxgD892bZzKPbE4SHsxMxT4rnhxe6afvBvMV2yXkTM6xD1zgCrkjLrZ5",
  "key40": "3ZDmhMznzEh5o5YJqwxq4LTPWF7SosRc8kYoexCHE7pgwjMisgWPtyfjQ93UEPD6Wg2FePvARqwFyMEyA5ebVcM7",
  "key41": "4wjH9KpHPQFYmknBVgY79coiNx1jdCxSVbVqFaN6UFWZV4x7xA2N82Wc1S5XroVsq4j197rAme6iKW91UHqzFvqD",
  "key42": "5bwY4P56V1jeAULALojnXntjuEreZSzWqkCQYhbvZv3NtmkTWn1b5foLQsVmWyHUtBQ6SHDtCf8AZ2ThEF4WYqL2"
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
