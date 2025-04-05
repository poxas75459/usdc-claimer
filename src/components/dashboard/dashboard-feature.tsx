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
    "2YNDZDtNRzF6r49SiKGcbVPDuEFey8Bn6qieZjBCTGpGarwPD8AzxJiFmdeanEn64YEGaEhTRZaaMTc7PHTCwA2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SiJuesW3bo4bJWJqQ8Csu74uzSHMyrhYtKxyxVavvuPiagRkFGzqKNc3xkvKZUpTQ3MiUb39DnwFVtYjvHnNZSW",
  "key1": "2VKnJ7D9pGQCKQ5KDkedzYXhC39RbtncAn4bLSS3MwkqwkNvfc84DJtD8zLjMLmU7ZDY2ADKpeM6DYQPrKowrSRf",
  "key2": "2ujTfagaZFg56H4Wugru66Ga7CWELunWgo7NG3wttorS8CdYaEuftk4ZV8wgRkcRFEXUg8PUnybyK88ZvgyxY23G",
  "key3": "67JsKtMVL6fgWPkdMtTKNBK12nbykCx1M3F1G18ghksDpYE36bEQRBqEQeEJJnteYVswmwS7Wh52wHckXryWwBgM",
  "key4": "3Pdqk3jYQKifkABUzZJoUHdYvYW2FCPriDDGtBDHqSLDeEfoaaSKY34njvdywrNypk2egaQC8pwMBsv9LdoEEzQ6",
  "key5": "3h1F5yHHeW8bpByKruQgLbBMnpDFmxxrU7MEHeTNpvrKnndZXbEhpZN1NuoEM84c5DxKayHdDKF7L3je9riYsV2o",
  "key6": "4khEMdSgYaGZMp2YHdbMGrJW6UovPcVErFQdPUNGi5DwzN6DWhHPSpJnh68aZdgDs5fEpU3MERbooTTdooCwHwyw",
  "key7": "3faoeU3PU3CdCRLq34xd6BcqgJFtGHev6qBGJEyDdjckUwYPxjMYe3LuHBab9zeY9gkshJ8TTuPhdyfvYYw14yJV",
  "key8": "VEDNC6UVY4NkwosMiM7dEH63Zsyxysvon8wagHqFMYHMpBQUJ65jXeDQPPeTMoDMTNHTMfQBeRdeNLUMEuqf56u",
  "key9": "FocM1ZiAyy6S8aapSr5vWJBQE4zXoSDj284htB8tZa2njR4opyoncXmrKv71VFnu8YrUXzDDnaUUxh7AaKz75ve",
  "key10": "5Juqbdj2Hr5wGve2zSDgXPb1jxPuYhxL3hFJSPKM3L75V5JtqdgVfWuT3rFLAndppbqW8pfTRNYbJdamHUWUfiVL",
  "key11": "Tz3bADGrxseJ3Kvsri2wpFpzCYknr52TV7pFxPGJs3ExnW2HxHwgfzrJFimWbPz78fqJWe8i5iniAKwEpqeqrMx",
  "key12": "46upzBv3LeUbzVBjwBgo7LB1HGKjW3Bh3Y9qdkWUXCWW7tDMC1UJQKukXxQLmecvXs84AKS8B2HAM7uCPS4Edwic",
  "key13": "3yX1iQPudy8UbwkB2mSnDqrXRKX1SzqwJc3KQRrbxrdaHrm313EW5WeazfyZzLqtaedyQzJPz5mJpDMSy9gzrkrV",
  "key14": "KZjaJPTcpXM8gv6rwVgyxDpUQroqSCn2fnzZZExcJbXEFv8hLJ9koguRmPDahhVYqtFzbqHxYf5DbqUu21WCjrZ",
  "key15": "Byf8VpGFMbAL75S98Xv87WzhDvsEGFBk66sfh1yEK9MDVx8QNkRJnBCbk25xzuky3HkGVvgbHKFvGBhKGC5sa2G",
  "key16": "4gHZv6TXRpdGS6WtauLu6uQiKGCHTxftBTVZZ77E9dqqTQu1QKiNL6Q682fJ586aNfu1bkKkUdatMFWVDCBBpk38",
  "key17": "5AgbzyhA8LS2W3me6ybUoiZTXuG1JCEW4xunrUHPFyyQkSkDKmssaEyJA1SQx4N2rgWEtjtpZFXjqMgWU8aciptu",
  "key18": "DLpgYSY4zBo4QiNAZCdMHmfMp8zfAUGnDSgP7qVckmHMnKsA7GUTL5gFsjdmxTrjgi24i4DZYnGbCf5QHYAYqHo",
  "key19": "5F6Co2gtGuEKV634CbeQDDdAd3mEQdu2f347TYKHpgMk1qMyVMfpT46LJFMt9xNCuZW3RcnpHzHTmu2BDFkMay6Z",
  "key20": "2rqeaMx6KDqMdbznFN6qVciA1jDRLnEXGvSNmQ4pg5sPdhLzmy338bqdwDMScSSLGGNeivavQxvV91DidfgsiBHC",
  "key21": "3PE3PvZB5EyRgeZryx2V21C2LR797dcTRusC5BjvxQ2n1ML851W2Y9AVwY61XiyUjp1Z19V3L6mTQCYDJSX6P2CZ",
  "key22": "3XWp4ntkv2kFwssXgqb43CbqpESR5wTgTsLRCfzFywEsC4r4wH7BK8m5SFtGS5vDb7ree6o46t9eDnbeuXJQkmiC",
  "key23": "4BJYVNwkY2m5FrzNpRZZyuQc9JJvgk1PaeiCHjiZYoVB5HLCMmFAkJbmSmyiPnvEEgXdy4G5w6CwFoDc5zSw44GM",
  "key24": "4FrbN1twDeCMiFGkhhMvdieJwrS46xRULEcese8GuadXbH3acPNt94pt4YpxfpzspkBAGdKdm676kToHjc3kcpaD",
  "key25": "c2wZM1irkXsVjsndESDZR6XVuYigaLfr4ftSG8LGSoGr3b4JCEVybxo8cAoY9ofhLSgCwqXErPrYZCBG76xYRYn",
  "key26": "4mk914FEX2YTJrhJMdiZhgx4eXDFsUMopBhGUpcEE5USHpds9atUnzNKuYYADNj3EFR4USnF2tgJ3t1vY3cv5AhT",
  "key27": "2mg9JpzrcaxrFBvouCD9yANCUXPnMF7ToKXU2u6HzxPZPD3N11e8zWgVN1ADYBJ24uJYx5KrBjDgsUGmtVec1Vp4",
  "key28": "4QJPjyMe18kfW4g5i59rBARiXXRxvTsiUZR6KGETTH84BefzAsCpLMJYQ2nD1wQGCq9oX7nRZavwRuu2zXSUrn3A",
  "key29": "4CXbStjojKM76B8EVvD8mWUkwcr9oZHoTtQvpLyPJwJP9JHfKJAb1CNFCdXPpzmuPZNEh6k1Hg6J72NkzQ95zLR4",
  "key30": "2dDShpop9wsfEvEnCyXrMALoHKC7PgTx1RcMcp16b3m6QFBnbBNPbWNgUBYjh68DGuFGC878GqRvV7z7Kx9oKiEx",
  "key31": "2zKMUJVEZ7uWh4zcw3A84qNG1vrcbYkE3dE9XebLGrrBCVjK1nLuQdjLG5eJfqEXyyXyVhm7meQnSawshYMxn3eG",
  "key32": "4KviZ2CRZFzVboauxfTyZdSyPx6rGyFoNp2gP9rUgX1kXYLk1aXA6jVEHH1M8ZzDvKUjh52pXQbx8WeSxDJD59C2",
  "key33": "2kHSQ299tCDXFeChowAJjzu1gD4CTUtZ9qkfUExAjENEw8opBXAhTZ6YtF56eR5RHcRp8bSweN1n3sHVXtDAp5JK",
  "key34": "PaH6RRWmh8XwZp6popGkU6jF937t1n1bEFsxVGEDzUx21oScDBv9RPC7HtXEt6Gr13q21NGKeFCPNMyLKtuDajc",
  "key35": "4DWja5hEpDkssCam6QJCAGwgKPk8UfpugCzaiUf7Aaf1mhQy66jnAteQMu31eKS9aS9DAE4Y3bRFWfAjpXGV5Y8j",
  "key36": "5xptusmqd5Gpb7vfY2hDrzjd8HEFLwaPThVP8i5m2hkjzvwqsFhAur1z9qyJKS2A3DnKNAaPHYaULBmZrC1wkG75"
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
