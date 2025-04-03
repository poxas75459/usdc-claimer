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
    "4RhiUoerERbuVfx8QmNG97zWS9nBLNx6nhKe4m6rCFQmaEnef5hN5cVdyzFNMFUoJnjwyQWRmr9vu8Y3bmahbieJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eCN4T1cq2ABdoJjvvMpVUCQRgrYbRMoHQGwFz8EEQ9i7R15Kr2yQBsPvmZzAL8KBuNWdYWVM14dorT3rfKhJd4r",
  "key1": "3Eo2wWqHjoCcNGfajFk5QNWLWn8D8KmoLNoq8pTK5cDNzt61m5SKjU5aadkrkLqaDoaweSGhW1jkd7oeZsiGbfHD",
  "key2": "2DCGeoiKxBaMmirNt9VPQ3R8SCv3A3YF1df1c3nwPYFip7oQ8BFjKzNo91hFkGrN5bSJm27M3u2ieGXswFgCZGJU",
  "key3": "3784YXQ1LgVFLc1NrnGJUx5xhjGN5RGLnigGbt3F9wxK9ySLtvEEegqPxY7WP3BMzCbjx4zrd3T2gGvRCwn5MAiS",
  "key4": "47Eur9kqiGNVaYJ9NRHoRDXK14yBjeHEtcueFE3eyqsmCum4wEzd9UmykxZtQVZ1xzRGETogN1UqBZRzUkR8c16e",
  "key5": "HSdoNQSnPG48RgSrRriscLQvvCmVHADTGquarP4evzy8b2hu3odN1tEs8FwkJxK5NnDCFYj6oNCaWauQ3bqG7i9",
  "key6": "c5d8jyhtZgkxNrpye3fcnT6MsBuAZWEMpD9n7dTExVhcRDtEuL1bjekvG7JKQcxEP3RqCE3GYCxmvwsLYUZx3H3",
  "key7": "4WnB6EcSuf9bKWM6kFXaPmYsd8hjVJ1phoBZ7sx3CtWpKec3B266LGxQ935LHNj6xUBgA9aYFsoYUnbhugGUkCSW",
  "key8": "4tPyZLdceVGSTgzXMnqyAsk7SZiLi5GMkGZhKNgJmWmeCJcciARnA5Hbc2T6haTd9BwECTKzZhc3NUp8fzCNDKr7",
  "key9": "3jHqxcaJ4R3jjSaprDeaBEe8kNLEW5fH2aVtxjijLoZDa1W8RGTZELKy3EyPBTfasXCkZ54XPRv49jooe3rfkEAf",
  "key10": "2Mv9UWN7BEMuKcmDwHXAtetXJHMMyjQb2nRjZWWEzkbU7qJ4KFm3se1i9B5Yqsv5RpKRjdLndejp6bcwU4iE3JWT",
  "key11": "5VAfKJut4zEmS545Xd5TLCPu2YLQdVD7AtaaSsPKWyrEn185tScWq5v9DxJGntpFZL5APXePHRvDEFmTCjRcRQ9k",
  "key12": "3BtGHnDG6DPSAhUf2mWbPMPMsdJjsvhmhmej98YLQ9XENLbdCjYxWp5ubgBfwEHzqAU2giWLBHCU8Xd72GaLDQQ8",
  "key13": "4F9gswkus6Nsx5YieXA4XqRRhwhCGBqAaQaoAqEtFpWvpA9TExumALaw4A12WYzjiVWD6rSQDmDvjnh7U9Hp1NS2",
  "key14": "65okovwvcukeHVif8F97VNFDTJphTrkoTNrmt3bEG92vdV3pqQyazhrjMbgv2sW1i4V63tejz8pztLC1zmroW5GH",
  "key15": "3zgVPrFXNc2Ua2J9GQ6JZa44we1wrmGsf69Nfx3k3iTQna7fhwYHmiiGta6dkJno5ejupmbs3KfxV57n6XJv3Vv9",
  "key16": "5XYTWUf3ykHtqzipsA8rbX13KQhD3PJqULhLvnaL5x6C8f7kCzpEfUpdMCm7UDeBHfTje5XrTa1hWxNsKkSY2L1S",
  "key17": "52BYk8maCrJoUwjMNGAjAff3tvMxVJ7XvxuxsNMDzfhKgJMYHc454VXuDUTcvdCRR4RY1mqS3KpAoyrYXq2yqhzM",
  "key18": "5Lz7FXqzkTJ5nTjeG8xTWHg5LGanb3xuhzUew7smhRoxztsM82Ss6X7WN2aRiZ94Yx1crdjJL3qtdJou3ukU2txW",
  "key19": "4QFkgyaz5BdFXNW6CznMvcATCZHWRorGS9Z3ggdHFfTnYrYnEy8Kc3TpFHoCpz4iSMbRtkEH7Dn6sXpJpbTDYHQD",
  "key20": "yKwvihsS4jUZYopH1cyV4xHcqZAYsdVxWDXQFqsrUhDCpXR9qJYNdM1yw8eVmspj1gi8HT9B7wDK8h5ddGpkwJu",
  "key21": "7AXFg4Srjn45SspPHP8jEjbKrDAs76X7Fj1XhVCexcFUzd5j9pA8zNR14h4uHmXsWzTfodqZaJtdDkPeHFzifhU",
  "key22": "5a5ubZvh7MRKxgv7Q7DdrQSataCxR3k9i9Eb5YZZD1MAXtN854TQtGtCYe4QudMwFGn8VZgv4b7MjCSRiicoabeQ",
  "key23": "3rgaAWkZkLUPAB74uZaxxkbYUy73g9ZZ4nSfZEEf3bK4VyLVYWyqUMqUuLvNDbmZ5aQ2VJeqGNoxWrXuwSYbBzNh",
  "key24": "2NEMeP8sabt6CMiB5FNKU1Q6fZ471KfAgohDgaHJxL9crhzywyjMp2vPAsfinTkWCaVovuwEbfSmGNaSpDLu7XVK",
  "key25": "5bLewGyKBFnbjDNK9ESLy5r7DQF1Hj3TkEuqzC5UaLzGy7PYjANyzLTwtDzuJyn8oj4TLDE1vZfk1cuzPzbW2m7n",
  "key26": "msoPGJb8Wvx7dq4Tx8n4FB3grAsRy5yx94SebvoTyMQzFYtZ59t39UAk8MR6W2zsr9YKoxrFCFKWyARQ5LBTCWe",
  "key27": "Uwg1gAPkMKMnvLauLDaW9TKrEgFFg396jHAgkCsCBv62U6uDvcZReaCMhG1CvdpdMTju8Ayo3P8ZppMw6rhaBSH",
  "key28": "3mwXWeDaeWk7WJ1xSadtaATydFtbQUzSdb4qSuZSezFvfkuADeuGYKe8Xo3Ev4qSEx2EqBoHnYnKgEwHpMoP8Ajx",
  "key29": "7H2oy8MxYFAbKw2t5Fy1RF6ErNY1BYRiiZxqn9jgMRY2y2SD5t2jPFvs1n1EgvnQfBsSSoTG8mGKNNfGeenVSCe",
  "key30": "4VbZrFDjiQ7W1PKvEs5KW6sSxcuSRG4gpsqvgpoVGSkWkmpqunneBRX26UMCzCx3eQM8tXBprhHkvMiKoUL8fGw2",
  "key31": "TCTGDfF7y6suPk9cYjnEBgtG6HtVk8kp4FETtzbppHfVsFvWzwgbr8QSbhVPMNNJ7wFHSJCtuyS86uE3Sr6YDdk",
  "key32": "5jMnKeRaP4P4yW9uD8N7rSSzff8Dzst3qv7tnpUjBmh1oGNHvZdZrkpo27XSCNQiEGRyLFXvinNv2is8xVxU9NBu",
  "key33": "2AT5aJUS5Mh3TR8pK6W47QUGNFzz7pxaCh3ijje4T7r7b3JqFELdZ2johRBzoGkd77ZuCJUNKEAMTxk6xQxfg4J2",
  "key34": "621bRVj9EeEQcK18cfcBEgvYeS1cAzFLXJL4R12GZeLEWTP6ETCxa3BVd5EEEZ8iZQCG9a3XE1SnxZ99LXVG5u97",
  "key35": "5h6VKi7EMSm1GGB6R3ENTHzEJ62QYk9kXCycUc4wd7cEeK3FS9FD8WhUVWufFoNRMBrYSdaNwdNjsc7UxkNcMjKE",
  "key36": "kNxdpqnxMS5C69eZsSutefKPhaaNyPpuftuqhUgJSN55uBicECL7wtjXPhyokqBnXGV5xRdqZd6A8RkZSFAUeow",
  "key37": "4WhryVuLQ4nm85ZEfUDrAPVS9mabbmE1upukGYuE4ieEkBjNmBCSZikBx1EXT4mo23Vv9xfzgqWWEfHET5JuZzYe",
  "key38": "64CPhv3ce3ArM8sBMFyrrHeahLGB7QXhTCtPuDN2G6NC5JWAx2a2DU5PhwVuTxVmFEMUhnJrNYrJmsTr26qHnSCD",
  "key39": "p1x9oyuL63X7SqcEV17y2HDySGndhuooDLWCi14WoRocZ2AVdLJ2CkqfEe8C9P6fTkeNewkAJ18BaVr2Pau8MHY",
  "key40": "5Za5APo9hBnUTDqgQRvWLyLDe22mXz1MSMFy6ikKwnR8iDSmngzJXRwtS8a1V9i1haacCbvfDEwrzKQ7Nh4F6EPa",
  "key41": "4mFHpgqgEBZiCGhao5Mq7LB8nd9UeURgv9sN92WAHoZg6b3u7hPkrAcENBnombLu8eGc4nxRVai76118V99GSvBX",
  "key42": "2WNHQ7CgnzSBXjvDkdd8Qo6jo48o6gXVM6dUfCqJoBexMKkMXeuniNk9uEbLmoCexJX6K9ZUk17KimzYr6jHt9Xo",
  "key43": "5UBcQk9wT2XV9pRoNG886vMA43TVhjZur4Hvw5F4uwfAJoZKrdiqaGs5w1CT5Eq1Ve6kehPdvAZ4F8rFueevSGkA",
  "key44": "24dA6kGznpoY1KnWErYE9cjaVPDCRasXPnz57wiGRCoCn391J68o4Lf4YkocqDbATFpzrFJ61EnJZ9CYZiAFKipe"
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
