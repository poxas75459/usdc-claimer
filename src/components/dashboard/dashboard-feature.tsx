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
    "4usDSUvvLUNzGRdK9pTDNzRGYUyzSaei6a7sCT6QgkA64p2JivdNJKJ2Mb4HLjkpZMnbyt9sKWdvbfM23xdLWojp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JZE5VSN1r3yd5Dn4UNEiJbejfv2VEgUQGcvjXmbdueqCTgUvcL1QA5FAQ7VB7CxAECnhEicwfmYeMRdGU4wVcaK",
  "key1": "5K2kNrqi7MN53KepG77GoRa3yeJPTjQDrc74JLNTRBvtXTZRt1nSKmBYMxfAY46fjh7Q4z1R2kcEUnbrquL11Bcw",
  "key2": "4reiSNoG5NyoMTy9Zg1krpwfmqHeYsvmj3NvVAbshriwJsfQBFuxb7qvhkZrhNJCvSpD4QDfVLVnoDcCwoSANWxd",
  "key3": "5cniAEtazDD8XmEmVqZVvNsuQ6gtEFAwsGa81qALuTasiLHZmhBmB2zNnGDoKDFmCqgme9zzEcCTQn7WnRqABLkm",
  "key4": "5rCde8VNeHJogZivAK5KiuNCTJV9YokudfVtTizZ37HmoQfbKrVbq91v6E2Eub6Qwvth9Wy2GqZCWCHu38GMu4gh",
  "key5": "XhzMV3kNyk9Qw39ZcTq74KwghR7gwAbjTnW3UZMu4DudGaK6V5D8sx4PhGAxmDMHHQCHzCnUZWojJE1TrarybCP",
  "key6": "53bC7vfrEoHp2jZg7u2Uk5A1Avr4THE7J669ojzT6wmsY8KziBpzjD3vGePc9DmtPSNdYshgpyCSzZBwzwHASPKp",
  "key7": "4mBDtzyXTwsv81V4TmKkQDKaeb9akzEPnLcUMNR3CWVjEA2EcjTGgh1JeimdkdCW2ky8NcL947fSLpsNZ8GsuKdH",
  "key8": "3ySip7cMij4wRK92nFm23unyoopreUxmcSNCUWrvJ9CSk2QyyrA2tFLHL5GAFMorN8wXv9t8EzWVdLVSgi3wJjik",
  "key9": "5r3cp5vw9hvfE4WbkhwSKH8d8oieyGYfu3pZFzvq6meN5sDHiQ65EBcCWGaDEB14GWQsTDt96z8YgDuuqcXJ3yyd",
  "key10": "3imMNkP5nYEp24d8185UURnXD4MN26jmv9Z7szgT1SaJ3mREp8a9Fh1YgmcQSg5oHJ81tCxzXXGrvvqUGpSnpxZr",
  "key11": "Rn8EB1h9jJeBeieK7ZUaSYFMAarACL6SCWk9wN8h1qNCZxFsijuWEt9DKB5a1uxbLRUGcH8L9zhDWQ25ecS7GDk",
  "key12": "3qx8s9DzKMuuHLgVkdfbmAM9QsoxfjfVNdqEDaqaKXYkuyGFBusdfWFpYtmwhu87txsjSUXod76ScJZhYfoMgj5u",
  "key13": "5c7YRnkyiLt5tj2uhuZahjhUVHiMt4sGN7cb4zi8PLbLqBdN5vimNte7woa8qapFDpxndu6onj31DjCbz9FDXUJy",
  "key14": "2eBQf1aPd9qjqNFfmfzceCKNHZ5GnvYrvQuKBjzbdsKxEZf9Ait7gCVZiW8F3hrF4DRUjJ1JSz5NfmcU7auaWt4S",
  "key15": "3jweEChh8XjHEL1dNDBx8RN9rFwEr1Q3yPLea4GZJHtEb7DoSz8BH4qcyzebw7chv5e8bDSrLbRYwSqihiZDxvcu",
  "key16": "4DUiVLemNgfBYuXMLynoXMwXiGRn9MR9N6yY52r1iH3pcXwfwDfTiFKZDKXdNwvjENCQy2wNjLik7UMjn5cgb5zB",
  "key17": "RSX514h2XXKzNc6Rcap3Edd1Bj8GFrUFo9dEGNZiLnMGaFh3kaP73zxgL5iA7Evd7JBYYXPXJXKBETDG4Yp8anA",
  "key18": "3nZjiDqJG1JqQFRJhb1ovZdkTqeTVsnVJCKHCZAFJzMKbvaceykRd9NRP3yXPT58dFWhiCD2iJeDTBYVHFpEGNgD",
  "key19": "teccE3bYVRLGV68cuhcQtntZU5gWBUG3A9sExirEcVjQoZMs2rttv7tqN5WpBwctqeckNs63Xza4VHG4T3p6W7V",
  "key20": "56WL9u3meYQZKWRHLpMLwJCStmEzASkMocrC9QoAUJMBxdL55KYgxzaNoJyMXBtZTP8Hk89uuhKL26yXE5wRMLEa",
  "key21": "TSdiiamWSJmjtXLHumdaeHcbAYyUcqMNJqgGFb4cCzmGtwCKLcGRNo8RqfDGKzZH7CGVLzkn6KViGD6uvuHKVfk",
  "key22": "JQYjXoXC9tE9LVrmpr1ktCNUTanzcCmwvWySKKe2qsx8MnD94aAqSj1jL5Lk9BknAf6AcVfHEH4x4S86gvuLyC1",
  "key23": "2Q1ZFNzB3SrQKx4smmyWUAAn1xbmNUv84sL2UoLv83WpcwUL12VYABHY6urb8fT2TZhrmKg6trQKmBtkQcYBkuxb",
  "key24": "FyjsXMiEbKefihb2WsvHoCiwFnYu3X4Fc76DsLYktjU54xwRKMBbP9RYe9CWTahh8oc6V6o9L3EZu7Tv8h6xBJo",
  "key25": "5Y3travfeb6PnrcBv7LXd74N5Qb9e5DBBjJxvCEfvh2boLCcaH1HHN3wXr2s9Bqmey8FCfx9ive38AT6AvDonR4v",
  "key26": "2rbGtQCTiCxeXD5Ce4vtfh1vbf5LPWGSvVbNjM1pZVSzhfRRBh6zLQFUnsSnFu5NFbMRSu6vpm9b8esoicEayWuW",
  "key27": "2rVUeKy2ZdFHp4uMBRJZH4Xsgkjfq7vGsF8qJfLxMzrHGSbPuvpsYBVfjLL1jjSYHgmzLQYeTNaFSfKoZvjVfA9g",
  "key28": "4AXLMXKdQJ42ovCPjVUjjcDSK25JCzQeRzX2QWZ9a2gFNM8DgVsutp1kjawC7C22xRHMmB6sra2FqUK7chkwKSwf",
  "key29": "44u7jUiuMqj2w4xAAc8GTrjy7uR41CpmMoJEc7SjUan86anwUsdShT9NkSrkM3fM4w5GqCHQDKebhBVirkoMHiU3",
  "key30": "hbQ7LxQXPmgoPxDnr4xGMkrbUJQCsjK2Ur1qJUsWN1pyrdc8MGyrL6NJRtpqGNm2MikstPZh2S628DAdXa28wE1",
  "key31": "5vPFQR2AjufkANgD96oW2zABJSAfFzu2bW2RS6QDR256YRwSvitkSnFczpoyWSXCJrQgkbXT9vwAuAeRZfC8rE4t",
  "key32": "5r3mYvQ2s1yjoq39WBDJ4byVQqSvoiLWvTmD5bL1VbEWEQ67CUXyEh2SBJBZqqiDmj4neRQ93k16E7jYbXhNA5Rh",
  "key33": "Bqz2WGjsshhUg91e1kozjP2umEvkigGWqadCELmzbEaNUFbsFxBwQ7TqbquDjViW6VS2DZ3yMHj4ddJNXMKt3D6",
  "key34": "2HgV1t1nCNbVNo1CWjWSV5xnaZapzoCw9RhrEWqwQ4dp1zFN1AbHVq7HdE6QS3QmUUTXmMY9AoNt7UCRu8qpucxs",
  "key35": "GYc2hpCXfBZxHj2sF6wT16CV3RF7r18d1BRgE5ixt6GbftoUsCvB9go6hjhQkwzYtVpi9PkBoVwnYBdWUhJ1scG",
  "key36": "3agMHY5XNASWNP9hAGyL5CECUHK4shA9P1RU9BbmRCZ8zwSnq3rEhvKuMbAcpGYAhZCWStyYMCwhXUibNyTFbpJC",
  "key37": "2fvA5FJEc2uWzDrLW6dTV9zJXK9UMJDKfKQb2sP5TaAcKumNxuy3jVCZ1SaoSQhnZPWwHAjUEAgTjZYmzskoKvEo"
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
