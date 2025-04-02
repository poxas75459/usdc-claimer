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
    "2nyFmzfQMixwBYLfNhEeqctiMrhYYC83KGvqZCV1bPC6GqSVuBe4XHKkKsA199vZSWiPPNdPzmqnPytCm1niNPmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTq7LPDsjmNJ5hs3w7vmJ3DcWe6f12vTGQZ419eJTEL2aD1Q3xjPDLk5adMv7JSmsHwXzBfupZTaxvRDS4V3X3q",
  "key1": "rHhhKANvrD2HkwdYKXP7gfQes86E4SiojPaTYgkJtJJxhnBDoNv3hFAn4XCPhYQttBe4TSLkYFayZYLDmd8iUir",
  "key2": "cRgDebXSK29B2X9MCRmhSzvRmhdxt5JBiEo5jED9odGtzWrHFChTCySNfgF9yQR9Tr1psVxtvQpm7BKj2RpGvbp",
  "key3": "62zeSNQRsPQtfRJGwKNBytjhJDqZsQA8DoKxJbc7QFyQG3tBvFZ1pixZcSM6YHrmY3v6ECWos2REwYvrvk7RevZi",
  "key4": "5DVAtQQE7gi18L77S5PTrNUCyom19wLWyF16dT2dUr6iwCYHkk2NKDr7seCXzALgH5QujL3MUSpKb6py33GRZYpL",
  "key5": "63AbPfA4EuWtBMikfx7LChdk3JcST2nF3ePvXBYqDLurg5fMmTzq1HQYfV6Uh8wDrNPpd3WABkACcXaTCZEkbNcf",
  "key6": "4twdqT8KaQ1ak8SXQZbQ7nMtpDkYYck5PdHWfwo7rjxcUBuXJburrhuSdSrKXKp9FbgGi6WUGZtPGijVPRLernL7",
  "key7": "5DzjkRT8Cg6B613yP8bqJW5G29FWkosi2dc2vPmBKgxgz1ELnBA8o21uy9m2Mz81zwG8vpZXF5rCUPimymCZxx2a",
  "key8": "q8hbvcZNPovXRgwgJcyi6SaMJU5Cte3GW3Kdgyr8V64dFYiYt7io8dMWx7CiTpBH6hu3uPjtQLDExDV18NLZUXc",
  "key9": "4bob6jA3EmUwUpZBf9idPLJRrb1SpRXqcgPDR4xB2Da7JgPKEvSM1RWvYgFC9niGmxuNp4UTWphBQV77MbNSYsiQ",
  "key10": "21rzUfRdRJsAFwfUufXhDPUFsNK4p7tb2u1hCMZkkRBDrzJELBVZ9bp5mm6eQGBwyxEeNnhayzibi6GFd3JtRFsb",
  "key11": "4DKWEz6HtqEYHxicuGDAeJSY3r1Hy9YX91P6WAo7ZaPbrMrV3ciT15RUuMK8iMnFLkEpqbjeM6yG2E8d12qBW5aJ",
  "key12": "3D7XtvjursyvHBivJWz964UZZPKe1UuU1Co7EF3VePGShNHwKws7ofStFqSCYMGkXgbs2ARzLs9SwF71EL6jaqAC",
  "key13": "3VnyGAKUV8LE5U2w7EHMueGgwvmN4jk3Ro1imQ8ArcvHBE3YdsQZ57Ui5SbX73JYTxpTf4JvrHvNJX9niZR5Xrpq",
  "key14": "2EbRdTPiugcJU3WGd67Y32CsJa4E7hMqn77Xipw7VjU2EvdwreM5ZiY4rT1pPwrQrm5Aoq1bfghv78Gw3DvjKEzE",
  "key15": "246TuBnqafjXYmmo9RoeMpNQV3eWk8TTYZHJVHiGnNCqvvwbjzxrHYCnuaf4KqDVAq2fjwceFeaHUncaiM4dpw7k",
  "key16": "5Wuh5KARzwKwpJE7EmhUUgJKhvfeCRpfkGHMqo17A9MFmwo91cXBiTzRKzr36MYk9Mp3LLSC48hznFgNkBApevhV",
  "key17": "3Wa4HTnkY9KQhRmDJGRoQrNoiLLCqkWDPaMyFrHeZuFVPHbquRv8n2k4ShfX6Ry2Eprsjcmkeh7Uwfrbtj6k1MM1",
  "key18": "32Ejtw6ke6dBr8Zsey7pHBnhm1xssQAZkx72jrSeWy4d7kuhaDcoFYJUREaGAbYL5zBvSLFR1G4LYFnpPR2mQp6h",
  "key19": "5UFvpovnmv2NU7FUTFWCGTv4qg7zY36uj6KAvVdbr9sscjXBPuLLqJTo1iD1wwKeHxCKJawMDgu41S4nBx7ZRTzv",
  "key20": "58nDvXe8pnb6BENPuoD7dwtDcdXLeAmgMUEUGXe7hPKadePK19epEmni93XDV5muVcBZR1suR1QwhZdPut2nCH7M",
  "key21": "5ipsQvXrwv68qktW6yrnGb4rm4PCsEvs7GNK24wpVDZyvVVGJyHopThAqTKJLqi65m9oXSRNVCtdNmHeQZ9ZXC2E",
  "key22": "51aFdeoN2KhB1YSzFY9GqvQx8JZDM16z59zhYN4kA7HyAUsRPdGoGiTReeDUw8eVrJ8mYQsBJTfAwJQXcY5zRWps",
  "key23": "5bAC6aT74HXX4wDDiG4sVnQyNbco9Lk5Fcy8vZiY1sC855WdA8aSvaPuBjG4uYy1B8RQ1Keg8YgxXrLRPyNuUngC",
  "key24": "5gGaFBynu2FYGgbKtr1QAQReF5U57vM91Zyid1jP7rj96vcMwXySiXMKtTB6NdRbUwLTy4v4u5r4iRP9csnYC3Bo",
  "key25": "2baaKnJTRJ1kfMqtGp9GTmarSBnDzJD1PCME3q7XGetpjbEaZ3Ee8uq4CPhcet1rCcFLGtHQFpC79ecAJwKW9m9H",
  "key26": "57iToGuDQHWnqN235X6T5qsSqB3Qho3wNMeFP2FFbdK2b7f4dzmPwqe1mQz2zxGk4H6mKwNHsv4tqtkmAowSCf14",
  "key27": "5sEjbVTQdvByVbiq4NvM2RWeYQvkgHenhP13siMNL9GgzSzjz9agJuEgejYoucxumCjTFcK2852LqH7P9AHSnPCZ",
  "key28": "2QcrFgs7jfDvZTr6n2xPNQ85tKj6wKvEQ9yobchven2URAVZFSN2TNTLS1Mausx5Md3TRBjjmE4M9Vt7nBAN7sMK",
  "key29": "32ECAAeK6PGDJsrw2HCW2owu67HcMgn1DNtaue7hHkuMhWNZ6WzjBsan6ecrE9WPMydisp4Sd5TYJZ5BqnAoRiZr",
  "key30": "zVtpC7EZbbfHcBuzTPJk17XdarEoak6rtj73nyeW5DKqKLfz9DLNTxPXEeVN2VAC2EjP6sKyiLacbwqJb5cxj6q",
  "key31": "5mnRkJR89Qtmpr9vdcEQXrKWDoQneomLjkH1PhUwnJDtyPXqGBK4gPgVQLyTnJqCgpMvcVQ5yac5sMbRuUy2TgzF",
  "key32": "5DXtak9hZG8PGfVRKm7BUnQTWwHE6atPotCvDqyV49TM8qpjRUP6RZMks3HjrfBfHRydBM6zEcK5CDWuxgEQDqUs"
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
