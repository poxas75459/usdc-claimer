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
    "3PQdLj5wSZ1WGF7zcfueK4ygCEvziwDwrHRopHvZboW2tbeTgxUfWmsp61Ve6MdMP76EYiDSrG2Z5NJ2w6ZJpDgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wAKzr4bHnkh1dEhtr6cb8F3j16usUeEdPPbKmuq63Cs5cXkxqWNKqhFmBccWvZWFTEDDaxCAFnSpQA6oELUQwks",
  "key1": "5zF5zGXTu2J3hNNkVhAevnRQFP95BSn9JtWfuWX4BRwzCu1JUJsAeg7hGfXhZHJE1UXqAZsBo2hr9YR59qEM9SRw",
  "key2": "5wPTkndhqzJ9rGrGYeFCDHJ8Cehsy7sANY5wkvH7Uf2p6dnNFWT7xBJf19F4vMT31YS47dgLbMPQHnoZRgn3EDPJ",
  "key3": "67UM8uqJXkntRVHgus2mPKKan3DJzU6uf8HNAJrkd9XUQ5oyhWsEYde7n6RAi6kYvAJQUuhDpWzKfvwhX2MsKniz",
  "key4": "6eWnf87hQvhonCC7LzifFD7THmo9qPwBhdMVAQiDk5gQKLJEkuvTWAFRXQyR51eeTAmsNC738qQMWyZjixKPism",
  "key5": "2ijJghWV2iyvEgVZ3JqM7cviNaHmyqamXdAQcDquZAANV5zCAjmrYtWtHBf5iHPv23XBjPWWgV2YEh9DsFduLp6V",
  "key6": "26YmtYcB1BUfU2cRmzpY39hgmEauV5iG4bhMsfeUnG89Z8qpicMMX2JQWuLZut5Sf4RcwZbaGZpjR7WwBgrB7mjL",
  "key7": "5TFuQasQDBnAvZ84oi8J79beaSNWaJNxpCz2dpUA4FhyQVQF4Cj29Bi5MAq15rm1uQuErKG7B5vucke7SizULgeh",
  "key8": "4BGfCtiNtR9wUD21ZcBBXUodVhqEM6e9tdgLCEgTYHPs3hFfvN9yn52evLeLBjYhKByWeDAXMvaUZMfqjdfXHq3S",
  "key9": "4eK2omtyBZ64j4SdGvuD15ML5tPNTrEWAQs3RPammnicP83jtErka6U3h5QKNi1KP9WcawZvkJPpdxtXaBtfP6R4",
  "key10": "3Tcf1LMjKKwPT43YpjM5cPPWqYMzrdnJGHnjH23E5CRBCUP6s3aEHUxpygpwaLyCNgvcXDtLX3VQChq7PicVYMBD",
  "key11": "59xD6idpUSTvE8h1ef29P1MSx5NY4BMsFPHBLZDQYLymEDgvcBUPhHkP4JfZm3nykNFm4sYABWDvse2yjURXDXCZ",
  "key12": "5gKNCpTRwhdiXNQTSWRzXSdrf8bcrMtg1FTehJjxvhn3tCUGfpoSZLST27BjaQAP3vcDFQeu9uaWRhnzkQcviHU2",
  "key13": "3zvokVd2kNUh3rmFWwpu9f1opw2qebSKYmSnjG6Kq5po4RBjzZDDC9G3GgqEfu24B6VNaUdgYXvzEffisPb5vqz1",
  "key14": "5pCA5nEe4Zbscnttu8SmuhC83YsBotP5fgWgT4vgqCZvBVnoHFP9WauiiVpMfHK4kQGzcnA3hhWALukcJA1hgZQB",
  "key15": "654Fpnjh9uD26Am77q2c3nJymk8Q7jmQuBoMS1gezU4vmtAEeryCsxbKo6f9KgFgiGaJmwH8CfjBxdqTjvJFh6dB",
  "key16": "9pN1wYa28MM13Uc2mfc7KKWqbnrARgYnqbDWgnr2aJgrtCf572mbsJP1JEihg51B5MYHmx5sa3Bjg21JUZgouSs",
  "key17": "3ywQKRF5roFepbNhnZatECStYagozVF3ELkx1zhYpu4YPzVy1joghUNkgHWXQ5v73PCUmeDu9viEmirTXsHneotQ",
  "key18": "2x8jYp3xsuuPanFY6B6m3FBiZgDU6PECmUgdu8Czft9D8fzGkgJXrHTan2c5SEjVwVJyJvSaM79uqY6LQimXX9rb",
  "key19": "5YkqEvawitvghpGRoj49k5DW2kUS8z6juHLJGVY1hXEp9Z3RchJty7MNAMSFbLzLxkwqCAkHZRHThuekcuLSUFnL",
  "key20": "gUMCsDgcbscmCSGRj7kKCYDPnSJeXANuYrouBnFCyj751aRusB86cvQUsYUyqY47n7C9SacTwepVbG5WYPt1JMP",
  "key21": "3625yuvfPEcB6vWg6yw1kc1iUUCsBfbzwoZEYZWX6tnoznJuaQ48Fw4KdortDyJeaxumWjd8jMQemuCMKTm6TYRp",
  "key22": "3Uz3jAJMGPEX7actucPKqVGvXFxdQpgaSW4PhH5sLUPm6fyScNyV7U9brp6e4UwBK3oZ2kXPLojZf4qvV5SYVYCZ",
  "key23": "G7QXdMryUp4G1A8tCNSaRtzRqu9JQ7sDnHGFcV4KsadKYEaHqqToGMbnr3mTWGxZYhPasf83YUxf2iuU8YPiRgZ",
  "key24": "41L2nK7pnTHwcFwU2yvrYjD2srJh2JaACcEEQRHkZa56GVDJKw171TB1h8ZJRw5vMJbEaDsbhRxJpHbKJjacngK1",
  "key25": "61Szfs8hnqJLK5YaoP9MeuitEVKHwpCJEwm5NzpHLF1d19uEEdy5Bim7fFRQqkwpKf2Lc1BVdy5MDGG7FQRRFzvU",
  "key26": "5dCJzhWfi7adcDdwfkDh6fr3Lonvu1Rcnrtk5uuQjS1k1xhodfqbVBFiQpKvrqh4iDqHWPu16syJ4FrYe9AXUecc",
  "key27": "5Luvipwh9bfFztZd3q1wyTZZjBFtbsqNW2mGQWgzLaEUPca3HN6cyw5kNZvMnbiP1KC8znPhNg3uiwXMvXUSfM14",
  "key28": "2rRVz3oTizJWzorAf9donLj8EP1SQ7nGJYGEpfrXDfu9Nwng3MPdqe7PNrVfWLD79oSjy9Fm2UM53aoCfPvfXy1C",
  "key29": "uuNL6Zbg4K7hbpWKqM5B4puehfvGMEuyk2HTNozwPEuW3AazVivHyz5CCVzsTjFzpx3FsiNQGWxzMnM3EjJ53Pk",
  "key30": "2hBoFfqSsEVy1cPzsnckYa8Q4MV1S8YQUajQVwAzavNa1yosjmvuAUh2V6PNG11VZLoGJX9ESgVxiYHW9bdypULr",
  "key31": "2C3f8MkFdpDY68YKQnjCQBJwg7rxmFN1BMj4Qo88HCd6SmGji6w7it9tPSBMHVFAUAS7qdPEbNGi1BbLxHb1NRoR",
  "key32": "43WeWiCAXXPME1VfEjCLWDnq7aKqsN3vidNo4CPMD9MMo7yDSVi5dU6mPJBKwUcwr3xz4jMi7ZFsTrNBk7WAkZ2N",
  "key33": "mbjPbyncz3Lb3QxcW3aaWbDJccDZatZo2pntKLYFJumtnGbdZcGZFxm1vdtxR237MFsZXF4NBkogMFYodZc3hpk",
  "key34": "SckQet5npf3X2HQ3nnebDmHzoqwxidz4fYR4PZXW8R1VdRstoySUmTkVDarN6h57DjUUWcUTC4Npw95DJNzTiWi",
  "key35": "3dSkkjX3oaw5vPARa5q2WpwenewCYwTYT3zFXVLUZwTQTzuJGQK8L2ZmkjeJHdF99t6aJTZ7HwVSC4wmh41ofh5a",
  "key36": "42SAK2LkrosTUeVnM8HHWMm1DvMpUvUE3UfuWa5ZqtrqqDXojfUWo5bMjnL6zpQZuKkoTgJvjHGXGofdKUR8BgoM",
  "key37": "NMSi889s2DEJ18sKbZe6sZWBdgdGVXGBXz6nj59piJi3URoxTDRAypFoXx7EpDAPjUbyNqk6s5z8AA61Q49XpHQ"
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
