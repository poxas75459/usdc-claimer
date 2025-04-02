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
    "3o9YGo8sWKNwShd8P19FjZiGNjLecStatAH2SsFViRmqc9z1ihDxnHzhsbU4XZCEzodRDCRG1MtEMA96Qksy8oNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z1bHiBjZzB8Xkaw3hDeFiPgCcJ2eniQjxX4QiSjJvxdWEt3JmUoYsDRcP6tZuKXMtEfiZZZGeo4N3eFiv3ZmLjT",
  "key1": "aVifvKJ9Wjmm84WbYecUGZS1kFU3L1uYwXBmWJBkiHYJzKvvBq6WVbQccDAgCox3Jt2Dv5kjULXJaMqyqBVkkXo",
  "key2": "5fVLxQbdVxgepHLEaWF8zeAnbmmKkHGNHsYLY1YE6e4kiXTf3kA2NJGTfynWW84QnEihSpE1cg9c39WmtjPEDptV",
  "key3": "3gpSXiVMHvejVAVzV5RuzdmcbsKTQ3ptfpfKgf9FqdgktrPetBfqC8DPnsEBZyvvDVP59wxXa9e6jXhjZuTZr452",
  "key4": "2vpkP7iwbhgu4PN5KdHzEetS1k3C6ep85hEhEhyMgJU6KstMjuGzEFQW5QaKzGmTWVtd6p5rWJNrjhhG9hwJGbK5",
  "key5": "LehhL9kRLw7vGHhECDxsqCozffTrae45aASKwZK5RGvERyTHFwweJsJoU2X3VH4PCXY8GFE4xFFe5QZVhZcfEJN",
  "key6": "mKq9ESNXtzyLHwzdT29Fvgd2VicfMzrKVvqi7WtKPGyqM4j9X2rcmDCkXQZiQQkeRYdT6hpPigb9JRQEcA5wCzx",
  "key7": "4QUUe7QcjQ1e4gSZQF7MsMz6HAr3RTHsZrQZvjDNGoLSQN6t8nm28LkV9PLWf47udFUd2A9xovYYK3MDRd4Wa5R7",
  "key8": "54cPio57Enw5CZ9wWTJ6fwkQjsCAkms5dGxnpojHagmiKugt5SNSNjVPZ9JKHX8gyMWmHyAU2Ysvfxp7ojoiKpzZ",
  "key9": "38wQPS7fw5C4erd7Wxq7X9vHu7WJA13TYcqUfKxyhcLqVijGk3TyQSPeJfsWSGUiCcc6ReLsGjkeZUsWsaDsdYgn",
  "key10": "2PzDy5ZJLxtcgG5mYt1bEQvdN8CFV3MMprLaeUue8FT7NMrrhHMG3Qe5nHE2g31eLSTKNcNNGCQVHcnjQh7X4UYj",
  "key11": "YSsKwnZSyyrDqbzPRcjV53d5feJf2uMZU16rfpHuSgj2zHv4GQQvbkzdrNHQuL4ggNP2tFBuXjcsRxhTC7SqHz2",
  "key12": "27McTqUtUxsuDs4dWF3JgA2hVX8quQSnhraqQrz8BxPy5N9HKD5CejjfX9xbSrGRmhEAAxvAawgHp75FQA6ugQZL",
  "key13": "36bjWpCTp8aAkoXAshCjkvXbYJjXZUTDQgLv9D5iKgrz9naSrojjrir2wK8XXfcDYjJktmEHmn5mhmFPuBY9rEEv",
  "key14": "3rm4YfebvxDAt5J4po87ZvcKK5whQ3PiMPB8JbBtjbXdi1ME5yEtMpdPzLe4JJ9xNUeGXxDsK956nBJYn3youVfy",
  "key15": "5uYSq92ZNagKdQBeKFBQec89tsDSLWdUKiwEqt3vLZEB6TDBYYigawATW7fwoKWxdt7BP9ZWmyGe4yJQPKGCzSFc",
  "key16": "5ao6yUNVQxHHhvCrFDQfSpLEjBFKV99bwEuyFr3P5fbX38pm1Sru1i1pNYVJiuLMKHVTAXFqQQr7mTbRuunMKzsr",
  "key17": "3gEyYuHCBL3fMqdc7eRg8QDdgqgc9saEHaUvwpC9nRFadSRAjUbDNqb4sbgLzpeWknCNtfSxoD8LWnBscE3J7Wbp",
  "key18": "5iGBKjB6GzWpiezUrPJUde7ent4B5xWAVPkWmmMfbwQREMCCQtSNUnReiDep7AYCGaH3ZzA7Z1yK1Z4Yw9ZhhiFQ",
  "key19": "3q8426uXWXyX5UwUhNEkLQCxpqvS2bd1xNiox659Y36cW7NdvMTCeNueX2RyQxwtNYCHpDA8rotWfUsTVABMjo4D",
  "key20": "53mb6JVo2wSoto377Q9CfhD6XxSYHzuQwMjuHsLevgDrPN7Ujh1Gx362s2Tc78R6FPprMNL8qDhggxdePpzdAC93",
  "key21": "5p1RC7HZCE1X7xngjy2wHw6wr4jaLSfeDrqJG93AUM1wuShhHbRS9XB36vBFATxWxRVTLK2AvWDQ5RSHnCTu894G",
  "key22": "5H6f7KAv4uYF9RZxUHABmC6fCdkhVfQxFLXtb48msnBikPa5jGjS9eSXJpxd869eitrmtfUbTPx5jfTrF8NGyoG1",
  "key23": "5hAtW1vtyZV4zbHYXLq9x9ruaXAN9tSJxzZkF6bXeX534ZVruYiAKPfmvuyHQm7pVA9FsGxuuoYXvJafNyS5Hjri",
  "key24": "7LqByitPFduU3ePT87qDEwVoKNCZnykgctEvfJ5WGh4nQtPwWSStrC2PQ4iQzWcPsZTXLRt3mZS31XCJD9SeQ92",
  "key25": "25k5UaR96wMuopkJ9LDRA1kgakMi8fmNS6kmTLgBkYkoxP59eFLRDtFd35X2k9vn1jinVF7UK2cJXutjeEesD3dR",
  "key26": "5Te5ws4dPXrvEfLXaVjZpfGyoGhicwCx3vhE7qfWodQZf6ts3mdqDwk14VBMeGgyCXNFwfbNMVvPUMCgGS6fVzLW",
  "key27": "5f5T1829mCGAVPmogqNyyEBfMTvDH4MmMBE9FbSLbTq8KsbrBL8SNwj6AmpUicWcoW724Wytu8UxQb58orbAo71G",
  "key28": "2pFT2BYpSQz2DaUEubcSgyg3J8tNBjnEvuT8fgy2CrxKXegGWtCv1RNND2EtUveaVZxLtdSw5mjeDwQjA7CGDx23",
  "key29": "66JtmcW7mz44ZVLffhnCeAwdMM8gRAJ4vHxzUKrhDYeWJ3vqWcU6xWwyqxxuFgnwM7uZLnRK2rceRaX2QuFmuGM5",
  "key30": "5ne1zSUK22M4Teej5sRaTnG2ZQaLrwhxGvQYj2PZq47mLCati1xCUHXRzJbeLye58izHN9kWBJDoGQiP8TfRAoK5",
  "key31": "3ziQVuLCkQBi2wW4MytjYwKQr4Y51B3YjH7p18b2Di9KhL5GCYF1TsGu4tf5RN7s5L4TsxT8ZUepBaWuvGbxtrvG",
  "key32": "2GSJA3vLEHfEPr7aYvJMxoLSyGxF7xHiwaeszmCBYZ3qcVhKDQHzxvCmjBGnZL9dfGRPJ3tSjTGycaeV5tezjtiH",
  "key33": "4YUH9NgLf34skYQyF9fj6HrD9J11nZU7TrhTdSXGdg6bgAftPKXSNgAV25i3LW5CJB7UNPqqwgGEEFX7EuGSNoMf",
  "key34": "nCSUjTtqhGSZck7URDewrM1bMJ9fM2xdXMUkgriLcuCVSms5sQ9j7U5grPVwRf1LUKAfBwwDrsdekE7qw4Pk3LW",
  "key35": "d8hwg7R2m9mzCEa7LkKKmdaJsRN5KwqoD8KHoT3uN7y3Y5z25i6msGcjedey7YerD8qf6wrMLFuLQhb1H5w1kXU",
  "key36": "255cfRQ9Qyw78LFWjvw5DY7ykbkcgjPtEcfNsjh38ovFJThdS5xK3Lt6JQa51zhVYyV5DSNdwYUW4DZp35bvyEtr",
  "key37": "48AzS4KR623DErB9FACS9fPZosqtEui4JBD11MWDUkZK4BzwmhJLdfxhSSeLBbeVimrftEgxeq63RKrDGmeGvD3Z",
  "key38": "DhBVbfd8za6wSfmkZFarpMUNXh2TUg9HgtsV3xNPfLniHKV32VbNE4APXeMAWpyAxvyykhoc2VVgkkPLEdTZ4E4",
  "key39": "5qoFYjVdAMKCxSxwFBHzTretqRfJ2aAcKMtTnbnLjR8SQoWxpqusDLFE8M4sN6idZRkFNvJeybQCpgApchCaTqQE",
  "key40": "tw6sq92eTPU13npujK4hwwohKHEMzWakpgDfYkHSgsyy8dUhBrVNSDbqEtoZfsUiYSnvuUptR2E8cMEALfAn4FF"
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
