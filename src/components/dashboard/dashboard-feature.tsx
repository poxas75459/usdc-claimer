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
    "jR5cgckbgbk14Gxup5JVYrzn8xSuZJHWk9Kwwd5NdAZDcoyvnyVwu6cDTovqjaQYaFJjXm4n3myHEKa5VbQuX2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yDZ6y9xndmL3bZFk8MeUFoEwsknqfN2p6cH7U8JyfWEE6g6AvFZg8eCEKj8j5yzu9mDipoEqY6suR1KrevzFjm",
  "key1": "3JwAXNq4CJRZbp41awAmqXWiGmUkxP4KqzDjH6u1TQNQkDuNiKJ2i6qpxKAMk8MtfCfbTzbqGYUeR4eJxZoa9mSq",
  "key2": "3vyrNCRRSJqZbUqbWvb3ETjZCZCGzqPt5GYY8Y5KCUqp375QBA6EGRrYtEkfo8z7NPMpceeVRBqwj7XBHzhpjDNa",
  "key3": "3vb48g14rDtnDmEMdEbuwiJgeo5gvwyxEWxVg2Q6aqYF4ACX1AFApYsfYcKPhy8AvQk338K5L5PNCBKqn9WiK7i6",
  "key4": "3PTZbqco136UTjPwFrPU9dYBND2x6jSDsMgFVvdJcTNmdcHqNLMuQV6roFuy3cEXFemRNG5QSspn1p6tKft3TEDb",
  "key5": "264quQEyaJHmuAo21oMG5LYFW9CqcTB5SiD8vf18hL1m82VtRQ6x2HJNLnQqN9m8wsE8SVkU6ZwQM6ZXBXQFYpvZ",
  "key6": "2tXKTfJdqL5JcsoPxN7kNRpJr9ZWgUHQmQJfHzw4Fd4L9uFZwpAcjiTWbg4qEYUfYUxtYsxPC1fA5hYhHpztYEh6",
  "key7": "2WQbovUfxd9d2qwBcKrQgezszT29kV9uHQDXkiV6GiebRZ5k5pBAENS7rk14DgMZw976gc6yRUcCxYCJnEQjfk6B",
  "key8": "EBm9h6p7s3ftYwsseYfXYCgfqLmojM3bLLTGKY4EcNruwpJj4tDiv12Vz9oxaXBX5UwCiQU7jGvyNoFiC3nakMw",
  "key9": "2NA4uwh9R6NXHKJS2fwRs8dS5qzXxKHkCeAuweLuKtsCabmGagvp4NP5QpZE8FnwNhGyUSbe19bQS6PwwkCxKeqw",
  "key10": "5opLcaWziZMTg7Sbh6g5DXCTWxaJfA2TMEXuNCsiDddVBPHs962xAQxUWANU1kjg5UvdEay9wviwiP3Xg37r7Z95",
  "key11": "2FKg5AaZsg5PakecYCTBngmsPXYbNjzxLJkHEPdxHUv4xFuXHe22ba2gYRza4T3RcsK1jjCCJsaXiu1RphEMNmun",
  "key12": "4wvPCXnzqKc175JpYBPwZiX9wVJz4KSHrefvSbFrhbey7TLzcuVnma2Hmu1KAbda66zymJ2VQT56p4XBdGMesRDC",
  "key13": "2SvC1SboDByjEuwpLL2o7gX91vY9DuXmkENgqCkY4aWiMpRYr2Cjc4xJuWc3WJabubq3WdW82c5vdiBRedarh1Hh",
  "key14": "2d4d6EHNo4KgAs596jkt8C4ZFQNXaDjuTSrssuaVRoihQVL8WstwDx1Pu9pQCdBRe8cvGFixe8cESSXyM11YWhKU",
  "key15": "ChTpTr3y8tyGRf99nqaFCkHpw4JuAkGbVRbCXJe3397Vn481i1bZuSe4bnLckExGQ5PKsf6t5g2YBYWXzfCXgtr",
  "key16": "2E8Z4KGeqKZaLmroJ8zxAQow3VL3HBNUTU9NYUPhPMW2rFRN4ShgKCL3p6fkVBNpKYwoP745w62KA8LMUUvsiW4K",
  "key17": "2MT8TW2ZkFrHDN3FFJuiWiG6p5y4nJCEz9fZs4rpEJzuWYBsciou2Grm3vKzh37HqVo2G1AkT6S5xuM7Ez8DoYLX",
  "key18": "37jrT7aXWzbbRgxcp6qqaVLp3mpqnRF9BV2jfaGWPXZnUwjFMqHoDJiFzVDLw9E4E2p8B1oFhi9uwJdtRSZg69f",
  "key19": "CWpuqAXZ8mBHjuhypKGs3VDGkqTxAxjAYCeS4vrqyhnHcuBoY3ZxEMbyUKFmyLYhG2XKaT4Tgak7sKWNgQkuWjD",
  "key20": "5XUFWaGdmKBPjQRNtmFvYAHJBB5YRdPwqtkSU1xKKpke92kp83ZwpqKhw9ZLp7rfi5NYHpbKodPe5uuer9HM1iGa",
  "key21": "4JpLNWpnMkFZ1qCpsRFwp84XkTQ45NPqaTvp5cg2Tt4WtB8qos5c3V6QaYgyY5sdX3C5zF2XoERKm8qQWSyG6YVY",
  "key22": "22HwTjWBEChhzNKkR49FyHnVsLj3JbovyQvHZBgBWH59MXudkhYNamyYwcXFWKzHhNAwNortgC96LRU2TFGzGT7U",
  "key23": "33N8kcJSBByQ91nab2Q2irHf633t92o1BuLECqPo7tDoBpNkLPT3ikLSLkUyo5Nq8Uh18rXxeA4cNiN4Ja1Va4nS",
  "key24": "Ewd1PW1pL56oau2V6fAWt8opviPoHH72C6rWq3JgxJo5Bo3WRKgczEQDSxZ7gEvkhkjho1vQbqfrDSjsz8cxa6g",
  "key25": "3yXqrkgFrzwxmHPivkgD57oQ2pAd42Gdz8kv4kRaTN8fzBA4vXTWtuzxgCncYD6nNsZReSpyhpA3uo874feP54VU",
  "key26": "2WfVD17CoLqCJe9hYy8mbHXMRH6hCSpoJB1ZZb7aUtkmKCiLTrciiP6bzoMp3BnBbJ3ZUU64wW1Pyq7u8FzoT8ug",
  "key27": "5Xs9xm1KvCyhPPMNxxmhmxz2rTfv7PYK32uSZZmsiGET6WENPdxygpuef2MuKdFP46hDW2NvGJLBNfagDXQxaF6f",
  "key28": "qD2zWRwyCYyHkAVi6rMDmqNk7DQudHrXBCccg4qqoaC6YqVueLg5zCjaKyAMx5yVk2yyh6bRpBQvGQ5zdQUQb5U",
  "key29": "5GdstMqvv8XgRmk99AyZqqaxVZTjFDgzGHJAZzc5WXfhpxdjRyGE6kNGPv44DBery1bNsqxhTsv633r8BA8WJL6c",
  "key30": "2qmLxVwbdBsDVWnM4cnvKHQXWyhnxxztzfMPSDshLtmkq5PbqWYUaoMh2Ucn5KAjC8iD9Auj5HXXfiTdTFkGWjWc",
  "key31": "5AEphK2SSGnGYk7qCgBPACqzR3Ez5NsS8R8cWAhM8y2GG9oS5pmBcVKeLf3z9Nbto6ete8rY2QK39t8k59s8kXwM",
  "key32": "5ptLvJCynH934qyXcCKeHxAQov3feRLHfQgwj7sufEnRF5EPQVvnWv1VLTmgEcX6WfeiUakkfEd2dbDg6fVy36SD",
  "key33": "JbZ4kxYvB7RWAUbjpUbopMsCv63RmwsAMZ2a8byNgTZsXTEf2HeyjNv5kZWDgSnUTfDRSyfLZVYDu4AQFroU639",
  "key34": "5Yf3Rrsd2z8vgmM6Li4KzRRk6JVM5FxQ7NnmBwvu4wm4AeXS95ZBJXaoTEkBv81GuTAN3CxvgSrYr3RoPHwyg9Ah",
  "key35": "LUZFqxLZtBKnhgtXgJ1g4QUY7TfK6PYS88BGUxR1k4fQLEVtNSn9SRPzqwbkZG4Y2LE6exLiAPKkBSntpLfDTBf",
  "key36": "4vyTJ4CFAXL2MLGFYoADZuRxtJxT9rSxPoDsgBmVdc54MnTV5jnKASF6v1W31xidzTWhzSV18bmf1vEk8PQLPvYK",
  "key37": "5JnPStarDpn1WaxKpoZixhZhinAfbhWX6gEsFT9jGfRSnwLbUANYywQVjWP4Dz62By7wePTamqJ2kiD4iUmKdZcz",
  "key38": "3sSkS7XJHG1TMxYhN5TzYCiG8PemFnJWwNkFdS5BgFTo7pKuZDM2432txHsM5CHcmPwF71Txhg87QwhATjo3iWJT"
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
