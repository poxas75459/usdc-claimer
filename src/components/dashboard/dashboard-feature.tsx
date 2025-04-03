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
    "2DgQAKeKwzeETwYXPuMJwAQiFB6FFH9FqustHTDMdLfmuJcaoD7Qofny3hM8dgbXYf3GVHCTPWthPvUgrWSaaEGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hbNhkbbuMVpc3sf7GzxPLfeyBN2aAHgM1ZnHvEsCeDNQKFxPNwiDn9hDnKF3E4nEUddkH6VfZHJy5J7yVxw3QBA",
  "key1": "5moqk7wvdnMaW1cSdZR1nRb12YEGRxgdNqD3CommX7Km2cWi9XWuGwHvVhpZGJw8XjqjZ27etRzySy2sadkpQNug",
  "key2": "5n45ddvq87S9mMX9VMdjF9DcBKtkQnJ6CLaY75nYsyxHKxTJFB3XUuXjcMWxbwp64hD3GAXA9AkM8F3aMDZppqb",
  "key3": "3PBdDo1DFgjE41YHwmDE4urzks8NuWANxuvHUdfN5pAe5hNqrkDBhC7rgfR8usgtBJoV4srTLcGWiQD7z9bEkkvA",
  "key4": "4wn3An3Fnw9eXRHziSSsuXRBgqU1BoyG9td1A1mSB7YFWhkRjUurcSCQyStaQArmK7GxfLguaGSBTWUaYaJ15s67",
  "key5": "5a88Qna5XmEjHfUSurPmcCrC1vawoLGyUnkJAFQK5wTDofUQPq5h2TuS5xL1S1aST2Bxyq82tWWVUAUYaf7HDtDi",
  "key6": "43AT46pxYjncaVNZCmdoaWteaEa2oAp9PWn2kiXUrjimHN4kkyaw8VpTZdL99R7aoSuk9ReQEKuZjpozwvYFfhP1",
  "key7": "5Q2S31KC1ULHS5zx4CDcT7mhjhMQ31eMZJhVtoXC8qJpU3KWAnhX8GKvJwRZZKoJXKK1VWvjX8KmprAiKzfzhcMY",
  "key8": "4prbB1UkFpqzMxFdSRrHapRqhRXwfMy1ma5PKNaKKgvqeQNdxy5J5FkQwBcatJzVGrZgGQDejxy6djezjQnZoJfQ",
  "key9": "2EYzyKp3r8arzPQ4TTSsrSCymWFongAckbScMeCLtmYPMWx6QNfZpbXWr68wxxSUp75xr5P3rzJB9hZUtKJVdjGQ",
  "key10": "2N1okEgkM3goCDTJaTbj8oyhCoAzDSsD9dfGsVXz3CBW4QiqNGYvb9wubB2MZvT2zZqDMqbp9m2fU5H42XrF7CQh",
  "key11": "3dtDxVDYeLpXYZB7AadQSGtAorRh1DFMiZ9AnuNzRd3iMPnpnztZNhTXhf6cVhV9MMg18Wqsi2HtV4hb9st6kovf",
  "key12": "SFKuo6XnN5yhepvte2qFzatFGWyfWDnYgHSBZTbcXQZqL7fKCDmHDkPRJX5ikkypjRTFBz8JDDTwxLWGgzWuxVy",
  "key13": "4ZR48xnckfgTtPq9sMKabJahBL5rpAvcrctK19uuUF2LkdEeTTM1S6LSoS7NqAkwEdWNmCzA1p2bRb3guNdVAxyt",
  "key14": "46itTNMGimGpj1dX246Mk1HCzsC8PY3WSthyS6gdQ14rB1PZL5eisbK1nTFSNHXxrA1qfkXF1j6jgZ5eUBqjV1tB",
  "key15": "49jfCoYveoDuAGz9YCx3NBgPnCbd4Foyt2jcRyDYZaHcPiL74KFLryoSw8zUhPR9ZbRjzutRuWnCQpVD3hHSHou1",
  "key16": "36gkXisaeayPypYSju7oCgRJ4t7xmgUrukCY1FUajvX47VZzVLygqzy8t9PzCgrTGLcFR4TsWk3tsoKbYjrMpCNV",
  "key17": "5HmzTx99Dzy7QNTB3wBTPPxi8GSntmDHaExLyFF4TrqdRpwmssYimWpBs4LjFHAEnabsfGzjfaRbeFPAfaedTzj1",
  "key18": "47d5swaSQpd2ztpcVxvo755DrZotpS91oCy2yooXfd2ib4kGHyxYD51PfX1S1MKK6JCK68Qbqi8KbAi92oib5Pr6",
  "key19": "M6w1SCFWVP7tPyHPdTn3PwtB74e6nzn8uwhMmNvawMFAaYeVdc4JsXCBFGmY5SVfvwZQy5mk24z4qxPLbFCNBp6",
  "key20": "2kDt4AELrmnDMZx1c2hWYHus9AvhsJShw7C5sibB6eKDST6eq2PbzQRs9MA6mwn7EvYkM2EcAvsVS6XJCx5fRwBE",
  "key21": "5sov4VuK2nTXBgnwE6E8W5A9dudJT2QJKrRPQLq1c8B86o2ZAva4dFAm4xQJ5jjzY5sQL1t9kRb6PmqBPrrTnrDm",
  "key22": "4rPPiocJbMhPNvx2f48siZeFM6ktu81Re3bNacsvJxXoXU8DjuymLEQGQEU1ahndECQia5gZx1rKLEaJWpGNDXJp",
  "key23": "3f83B5MakNSUiPthqBfeo5ihTFqS2hRv89wmFcP7v9WZPcyym7afgJFMyHnSHVAC2HjwAb4pvCkiabJ8Xy1Q3WfD",
  "key24": "4HtiT98fcXd1STcSsZ3yruDfHCyboPehTHMtNVt27Z4y1ExbrKvF4gz6rYaQb3MmP1rq3EUYQKpii42u28MbzXQf",
  "key25": "5QjE9mXrXVWMPHt83iw9pfkpFHp4jof1a3QgsW549rdB6YAcVs3vnYk8CpiTSmG9XH6KMyoa8ir5aTgtjBQ83Kjo",
  "key26": "4xXHePhLX2WEYrNFYXe43Sz55L6JCu4ep5zbvbAuTRcfsqiPQw8i7xx1WfXjyzTkxCRHZWrAdrmWCPkxWSLKXiCk",
  "key27": "5CLbEJbdpiDYoSgJdKq7Wsi7hmiwPwxmpdgnZjPhveyVanTnF1t2PyPMntreLsLLBSkaZHCacWaVJXD9pznrrfcR",
  "key28": "4qRbCSc6hBCjqsAWBWfiLF1tUvF6myY9FqKRdTADNDGqjMexRqsTcobEVcVM2wvS1kmhZSFqQ4BLbVH24HRjNGra",
  "key29": "42yhkd9rAc6xVpBYMCGMoFX9nHRzgvimqhxkV81JKTEztPT5AEF6qh9iFuhrsnQnCU9WfE3h9nN4PyipbJj3F9VX",
  "key30": "4kHqc83hXhiwxcS737eZpGDbHisHDYJv5W4FHnQQKVvdHQJ1eXdKMyzCFVQTc1jHMNa6zmLbdCSMD3gHFvvStNUT",
  "key31": "5HUp8hZ3euEDszVT6f183dz3S52aYVHLfRaddAZxQaPTAcvucAfp37yj1jBCuTCupgSSN3uSJsUfwLgdzzBrCzmu"
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
