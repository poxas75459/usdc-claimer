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
    "3BybkEpjVMT5SfAzAdQdG9C3fZj4hjqVh6jYKkQ9VA28C4dCFbrCr9CmzFcgM61YtyoHRHa9eX5DmkeptDN2cZtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f9uptcjds2UhzNAA3RcePn5BPXjDcALH1BQEbfcjZ8cvUWbLmN1rxmrrt2kWisEn8ef6wfkmLQCeqeuQMVBeRvo",
  "key1": "2HC84zLVCbAdyFUpYjmRQBh2t8uTSvJH5cP3SVNH24vwVCzuaM9HxMXf9P2Wbk6trPBcB9zZKSKLqm1ticqGWJY",
  "key2": "258xDQCEeVaQ7XHuBRv5ZdCXEHQhMQUFYVuZ8eYPdi95Z5xckEGJ9Ef88jFAKZqrreCdhxf6W3ernahKWMhcFzb7",
  "key3": "5RgyE1sunhG3enDSqGKzNJRzCFqFn8kuarUXCqSFT8XAXntux3nhbryFYDRAWkoCJ7bdc3PmQ8gNHTBZujYJMS3G",
  "key4": "3eJXKTAx6mZxCA9nYfafU7eqhWxRTuv5vJ991bFMbrY6Zg9ixpk2bGGmrdkpBjnhCgZwc5z4Ffk9aH7eRbcGdNDx",
  "key5": "5SsiDji8dKP6B89TobaSQsrcxXqp24U6f7ZE7DWGMXK9RofajYHPkMXxGmFKRCVNve4p2w6dmtyqR1C4YWL7fBDm",
  "key6": "5s3TqHumN6AKSorwEULxaxb2WAnTMrCLiy1SjhZgUuiQW85AjR6Y2j7AQF5yVsFBJrS8PDaaTiR71LqjNnYWJDiZ",
  "key7": "zEQ8wJGnmfJXMUFjczVF2X44dDbnx3zoMURCYEofwFQrhj9dArkrTJhrsZsruSf5u9adP644tpk5L2P74mZKcZr",
  "key8": "5vXJcu8eNxNnoSodmiEohdSABmNe617fMDqvWCPEmptbtoGYeqaeLDS7jSckkRQzKoVYn1XnJ1Efhkz7Tv1BE2CZ",
  "key9": "2dge8BPp6RGrnG74yrwkCXZPUhkrpVaRCQkJFNisMwJyzsCYopSS7ENffCfzSWXJk7VhHwWnYwcZMUT1MiKFvNjd",
  "key10": "4VyKCAFN18zwpACHhKTez2AZTKR8UVQTdfPnRDVDiLKMsesCWeHpEqdgeCSHFuEY96Vo5vHmdGkcLrtrPnzcd2Ro",
  "key11": "2JQeebunWmvTnBoToT36MVWLYuX5giRRD76HWZF2TCD6f13MzSq75PbrsAD25oTsphKUHDCkxynE1YutGNpv3EVJ",
  "key12": "3B9X6piGBUvnX3utgdSNaR2VgFLU3Y4494Gohwm4RRtU8YYqzxYZppxX1r1Ed6bqWzw67kdJjpthZhUqvV7DLtWf",
  "key13": "4V4YsGMns7cisJPdw6dUKrixd76e4Jrt1Tu56pJ3JQwtAp9Qt831y9e2xx4asAvH1V4imfvpMZSnEgVPGxLzqaAt",
  "key14": "G8gDWv2cnhXCtSDuXyMuErPLoPQHHRhKPw8SdgB7wbqFYomrAuxDfciyYF5GizfS4a4cTbjtMfWTRFB9CFbTu6R",
  "key15": "P7iXqE3EH4C9SbWAFgeWNYXdNr7nTy8VQyTKEZ5gmzSkXMsELyk7E4L8Qgod9zfscriDjQU315YZZb1B1voqjsD",
  "key16": "3VSMFD8vqHLRCJyNg5KNG7f7yTnewKiNLAGkDZjxbjpFHeaBKpXyPmQL9rXX2zQGWvupRHPrjE3KPgYh1D52Py2g",
  "key17": "2G9NwNXPbQQAFYZpDfu4UwXAk5hzKQViZrZhAgk9T6BhaedGusUcWZTteK3UAmMrYwyUFf8cikau7oi8vt9Rn4KB",
  "key18": "4Pfh8bTRTn4b6cxDwtbB4DxEDaHBJKCBBgZGspmUv1QnoL13kytUB4g8TZB4eMvhTYB2EBB1dWRDpifgeK2Au5s9",
  "key19": "5kgPdwXgqPinZNjHUUHPTifY6wrwqwv9RpAiYQCuct7xno16zcHzHVxAsBjWTY5pxrigC63r1WUTswtNP57eyprU",
  "key20": "5P8EBYL6xNhmMuQqpSoAXnYLguhtp8TygX3LQqZrbNfTpY5ayEd8popRPrMpdvDLbahLTyKuDTCwGQ6sEK119umd",
  "key21": "L6CCnL6gcGUFVKPXko9uAUpPog3uUFdpmVb7k9uRf3TBQHfadQAi943fPSAF6tDduEdjpiidWiaXfR7w6x12684",
  "key22": "33VKAHZXKK1SspWSWeTLgS9FEr2EYGCZrVUpNFvELHZHaWQ5qFqrvEqKgXPFH1SynzjJhJ3SsTZXoXQeSs6vJwRJ",
  "key23": "grVRxAZkftvP5PFjc3q2i5YHfea31rhmmgxmcXDoXRpKcw7JtsKdNjvCkRVvVgRm22GexRDmZA8WbEqmDJEP7oa",
  "key24": "5iqjt3jVK1RQVaj43SxaLCtubzuDGV1cJRHRAJbz5Z8kDuUnPWKmWpv4EJsGqEguzbFe2raU76NfeWdy4jZpK1AB",
  "key25": "58rnLvRzJkLNEW9CX9oAY58B1YkQt9yFM4gPaCY47fSdU2W75APx3t5PU4zuZ7siJfe2odffsHxKT7srXt8o4icK",
  "key26": "58rBMnGsQ1Lc45e7XTkFWajZHLhTHqVf2kJr2wMYwvNCJcA6a5ZVYkJ7feEsWmjhqADYqkHFM26VFJ1NuTPwWLyy",
  "key27": "kfwsSwN2zVP1j4KW2EAeBBfd4gGQR981CQodCXrWzwGeeu6vjYceyqAcoT7ZkK7gZY8VpKXKMrdxNFa8m9AjfKc",
  "key28": "4TMmhJg6Q6ztQWSnJBqgGmDazaZAg5D9jWEyfVYMpZpoU96i7wjbc52LCfqpcronxsY6aaEkJxXWBQNojFMMv6aK",
  "key29": "CuayDNdWJUxpXwEZSWRjSfRia73TCdCxkdaorQFEYeBJxkodykLubbBB6D4JtDvegbRij5ohQFYLJAj2hcgD7sV",
  "key30": "2Zdc6UNdZtTm5RptWuYZ9hSDEU7BpPv6V4znMQws4ynPhCntrPXLSpWf2jdCBEtcBReffnqBZcWK4udF5DcjNHTt",
  "key31": "3ewseMMzByWyyBC6hB6WGTRQz1TCwLc1L3UFpwXDdUWvLLQ4wz7DEcBgqeFDjLbQMenyc92HHxxggEviNfJ5hqR5",
  "key32": "ErhYDTVrhJGW26mLnBj866eusgEWJejUziocB3peA2ZeRw11BhAWungqpE2TvTHoZsYkdc7wtuU65TxhDsXTGNz",
  "key33": "5wekAuecYQ1k9ibzg9v3dyoMjf5kmgcAGpcn9JBYV1BEb8gKVkkrngG6WL254UXV4ReXSz9P6ztp8PTCt3bF2jhK",
  "key34": "f5tFXXW3hcNBRJ896bYVMWVgSWNsGAh1EEGZk7NyvrQwSe4Akpe4zJYUMHrosA2JbLYMQhfYpqfnm7hRbE4J2yh",
  "key35": "4mVLeC4PeTTsM38U56b8R6Q6tx3N7Es13hpjb44gkR21ahosgFrAvQH7frRexZszp9E2Xayopm4mGrVAAKt5qx5o",
  "key36": "66JHjNVHtLNmTcpirQ7CLPWALAks8jAnEa3L3TUzW9ZnFZWCtL5sCp8oGb35E8pDLbAAfybfDkPNp6bggwyfnxru",
  "key37": "4r4MZyn9u5BBVLS8m9AD4WsiFrskWzcbAKqmCb25q6FPK2tSJNiFXW5MvMFAsTMkU6eVV2mqZrMELiAjYSxECKyy",
  "key38": "4scPvQhV2zPfULxF7BUP5G9qazDk3wwUJWvoXNmdpU3fBqwzijUgeX8p8XwWR6vmuuwk8FqNBtvvxy3UJdZyaBxp",
  "key39": "5kwzd78K3YoKHpvCGUqVSfgaHg2BLStHF5WNK6rUavGgbGUeQbiSe1UM677qytayGbhtSq9pyYSofdVcMzv9RPRM"
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
