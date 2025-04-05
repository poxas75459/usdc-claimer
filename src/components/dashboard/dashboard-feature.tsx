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
    "2E1aUgYrGquBoz6bSUbPJRcNiZxPeU2TC2ydpHAAeQoxGuaGUMZ9n3oNQXZRzHkv1RHhyHdNNpUreFP8kWbpjnqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FoBa9HruNA2CyGrdFYDUN25TgriMtc9WPsGnhnxbMRpUozutjLgYkYjayb7jNYt8Xa2xsYEZDThWn9Txu5h8C5Q",
  "key1": "4Z53YdeNtoLz2hZ3ENRN1HYycjFiR7pgL92vDUaTmsxMWJRPgM2mXzWJZvqGdmmUESWwfvzrdH6Rwtk89oK6E8ze",
  "key2": "fQAMswvFMtqSBmCJapU82o7JCEHP3dMBGxafUFdjSAUYjSmmtCFw5m5vptXy5oDvyZm6UodcoXZSDX42MfuT6Rf",
  "key3": "3KeQaMVtQgVgLjXy8x5HrnVQ2aSbueZswCBRzeduFeKjBn47N6HqxszofBwJft3J1AQ5VMpLEtx4pNb3snV3QDUw",
  "key4": "4sGVNt74nt3R3GjVZuFagGf4XqVXC5tcmMz3AqMtbfNd4FuHjCwCcxLnn1Bv2wdjT7gFnCs78jBxagc4Fg9hckMR",
  "key5": "AmjMtRaCxXekxZqztWYAopMjoYZ4tyBVSyAbFC18baaVpJeHzsYe23oNhxsGUqHF2qb1yiqgde2BHNXTRgzezF6",
  "key6": "ZQCSkWyt1GadTZmxowmjJLu5qXF5wTzC7Viy1KbeX3AXNzAgffqmQ9vgc64P9AJL2THEaCnNjjdxVxgmdB8y2Sw",
  "key7": "5AxBZMLwpbNYyznhCPNbnjZdrrphWZCHjXDaoCwVbXPN4AArPKT8BDHpSP4YC1NrvwkF2pgXxHiJ6idrBm5FsyGg",
  "key8": "48z3Vz531REhtGm7X8nLyax1371bVi5kSSx22acPV5SvFa4Yjd73Vtt4W2NiRwj1sseRzQFCuvq5XREStq32dfCc",
  "key9": "3aVvQ47x3m9AHHE6wvZqpZsG4VWatEPrp1kXtS6ne1inSC5Jp7NozWRpVJFt74xYkWMqbGAAbY772quffJm8yWur",
  "key10": "5toTkN4LCUjssW85VKG2wKz1StJxUxVYrkXoNabuiYeHm2HpacDr1iobYvJE6UheJYSteJ7SzPM5nhtzbaRWGDDK",
  "key11": "2cSFoeVyVoaxEJWu7qyzXHLTxfpE9fdq5jHYc5wn3GRTPfn9bYcf3tQcn6d4Evz6MmC6D5YpN17xHgcf7Mn1sFmR",
  "key12": "mXvviA43cfibGbFSMMF96Y1rdhNFkh9w4Egk83hoT65gxZ4ti73FD7FZC2qRCM9Srkt1uZhMH3LebXVfq39Q2Px",
  "key13": "1ZuxvWpZfFPSeKnZLfeQfGTnxabZDKJjrQN7YZvsSRquxW2LZbQTtgLazgSCfd8JQ5knHujJBSvr5KWoAWamv5h",
  "key14": "4VJQG8ukHvhAcp9SBszQWRDtHEwNCf12CBADSzkF5w6To4wPN9FitbUtx6aknM1CSCdMuTE6xgDeiqxs3GdL1Azs",
  "key15": "22SsAtt7ZUidQnJJ819oVXNYkEQdVYJoRJaSSMJSSmSf9a79MNzD1Bqug4s3yZ9b6gjfbgaYuzmbHDD7FaMqPpJy",
  "key16": "5GKj3MwcCqJXfbLtS43S3PvaAxKdB6UvG7BLMfSUJaw2yMQ9c4JzYG6v2giAXE2aL1CSwkgcjyUVYHaGXvhEio5h",
  "key17": "2QYf2uzZDktA4eRYMyeQuq6ndBqqVqudZKDrGqHZYfktsKhrYe7FCRuSQDnTQNSh3nmCK94ZjN44m3BpbkwroJzo",
  "key18": "2cGN7T3vLXb8in7ZxaNLg84hrMWHeF848iWFD9HAqntciFivhXqWKDDhyYDLvMtqjtWWTNtcRVYCVZZTx9vivqaw",
  "key19": "KapMC6PA7Jra9Scd3XZjkiD3FxXWYCf6RioEsYZhPQsXrKXrJsxBc5uCwDmwR2axMUwZGQZaVbPutLi7R3iLpck",
  "key20": "36xARXcininw4tLEQkMcK363cGe9yMzPqforaZvRXMkR3bik9ZjirUJ4anhL8eM8TT4RX31whT41RMkd9q69LK14",
  "key21": "4oPBoEMubjaKiguwvyv3xarz47gtcr5WKNUnqr1gHfaio98aWRdoJ1aGhxzZRYdaBMhRNZxEFe1M8sJYzigU2EjC",
  "key22": "3RpQo8V3z8MTZs6twhxtuP3hgiq2inmyRJ73QajPkz5cGTHaeApbMhrW2ryw5vWPJ1pMUKoWBCETfhCmu74TSwZ",
  "key23": "3paH3zXVPWWLAPBGJBkouau4d9EaLPq4thfgi8Eb96UStzB8chLG7CjFVp7gQcWvLgTs2HFocXiKUTb64ka7V3Dq",
  "key24": "2Tw7Lpgnkg364eDGQM5qLDE9wGgKtaNz3W4WEN7rvVMPWnPboHzZHzZE5r1YQNhQ2kDU8PsFzDxHuVAEEfjzBQH2",
  "key25": "NcpYzCoqSggiYtZ15f4umzPPj2mvbPbqPHXe5qizjwMJ5Nh3oap7Y8EMfetRAMT7dDbpWLykGhrFYs73L91J3sD",
  "key26": "5cK4msZ2hL5aghEw8iQwKipPm1ZhH9KhLyLV2dUQgoqYMwk2SwdiJYzkMmXGCvnaw9xsAm8U5aRv81JGZQm7iYmG",
  "key27": "48ZhZiLbKdgRtGVd5YiVNkkTxe3uUKqYrQgaJN5SAM4m7fX7kpdf1TXHo89GNDMXR7sEFNC6NURbqJbgMhJ9ZZr9",
  "key28": "LrZuvZdHFu9w5acybfjQnjT7cNNh3tWysKNmvEHkrnG3kFZ3wKUfufnR5fJmA1YK3tgCUSHqWCP1dbXym8HYp1P",
  "key29": "3ZbqVy1KCbVc78yWJdXhesfMBU5S5vTEHLDDSzXqwDff6Yb444v4cAorFEinc4JxcwaizrCFUCB9fG4kA9MEaP2d",
  "key30": "5q3dk8g9zRKRb3GaYYmv8bvWv6WwVPW4WZ545fci6Lw2uA6x7ZY5aejJFB7rwUcbpfjBMzLcTqA5kjhZpFqhtxDH",
  "key31": "4ZwbZpN9rv7rdAij8Z5mb6yJNPjtFCH12r5RYmUvTWKWAKdxouDacKmQQPjodxMWAETzT3wCGzeXRQ6taKm1mcwi",
  "key32": "5odxt6xWGMJLKKaWGRmpTKKEVosYk2ga1AUfBaMzGoVntvdfvUs5UZgksFukbNg3EyJeFxtGXjhYwWA8b1AAqeAd",
  "key33": "4RGBkfRztkJNMvH5XLHCKbZp1ct76MSzaFQHuvDNjmxW7tXvXxPBEU8iGgzyB7kXqKGVaKdy3mZdju1fxrqZ4CpP",
  "key34": "65ABvAsmLgVNYQsPGMRzmMGu9MGa7DUUACnn92hkLjKfZ4nF9bCagAcM7cYm2yaEnCuEcQqaeMimgevrhYv5Dhib",
  "key35": "4TXU2zkRE4WnVtsrHrcryKC5VN3HAoNFKBBBMW6ZS3zU66Y3yMJjdHMAN47QqFKT6ydeuRkLhvZy7SGuAFTyXHie",
  "key36": "61yypJP4UZsRSgYiYYNn76KBoH38GLjm7biJNnyDNcSxDQ87YRXfAeQVhPSXPX8RZJ7tCLV5WASayzZqgVMej1na",
  "key37": "4yd2mxJtvUcZ6zPKYHrZBbSbYPKCaBcnWdvY9pWiGG7zeeBiLxdFGJG5d7BDYzizCNevSNwbw3iGkni4tBbb2no6",
  "key38": "2P3FNcznzhyRkfamkp9vBVU569NADDw4hDyxqT7BixDwhHxu99mNe4JeVTob9j52aaMj3bBfPgtJxDtia3FFn6wD",
  "key39": "5GWQXbKzRuXDX2ugNh3ufUEmuKRtvwtmKQjmEm8VKk64DbUtaLZ2DtB64oJ8vnAsJEQYLfoBqwWBJ6aMP7pUPvcW",
  "key40": "3Se9XJcaZME9fjkx7DhDTouZ3VUCTj9gqJcNR1ksVVvBBxak8qYFHaDLkW7zp3i3hndfAbwjHXSmhSu7563Kdcic",
  "key41": "5wxU6fxobuYnDiCEyayi67vohj8ZBGEamG7R7SeiFRN1hCAS1Tp12zhpzHsT2kmnf7RiPLrjtsxrqkZWgXK6L9ov",
  "key42": "4L21eb59gNxCgve68h2rQj4DzGCDrtSQUH362fdSoLi7dXwEjcB6WVnNyYSrLCdbYAHo1ev8bGL3cfMKHCpAuVdD",
  "key43": "74eTNrJnPncQYGZ2cuFTT9kaN891YA4UymRQaXqY2bTfodNvD9ZL8fc9G6hdCvouNTK7EgeRx7ejwyA4oSkxgrD",
  "key44": "tDNE2hWccHFHZsyNkXZyy5Cfz7QDf5HTd7wVrsU4yFcXnctEMqqRGhXqTU6Q7Lk7mJUQ4vzQYtUZSyyXKJmtcys",
  "key45": "4XdzZrVU8VPXoa2Xxbb5djm1SjUzaSiszNyqzJmXoa7LaKmg2LwvozJUpjRmmL6wc5uxfJehioSG7LSS149Tnrxd",
  "key46": "4S8geGHzQms6D49PQgv4jRhK1M37CPpqSXCVYMEAgZwg7YYrgasag8u5DSWAP19pEWhUB1p9gkanxM3hHQdgQNqa",
  "key47": "25Wsw2bjUv3QnrLCkm41yp3c9D4wNguMHXS1HoVQGh5pJnZwXwSpu2VG7WqeTJkihJE6k5iyASPfCn8RLnsjUmNZ"
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
