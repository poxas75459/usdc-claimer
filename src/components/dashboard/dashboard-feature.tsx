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
    "5FhWzbAufk6xLKGHWvEqBU8LH2zmJ43wLGqt6LJ1E1v8XseHLQnzb2fj7yiFjBrU3eqswSUDbh19oGdX2NYWWRDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ocpseWzpsPW5SdFdZJfmVAkDvBaizxpDRGPFGrK7D16PBzZtF1RCTK6HurcCuwXNh3saQn1QUKmB6goS7JCyFHc",
  "key1": "9zacnvwH7GGz7YTs8UkUnfkEa621rTUkBdXFFuXAhcVdfJaZkQgAXMWQMTGZ1ahGzzbfTLRQQUZjEsVnMz7Q6w2",
  "key2": "2QMDMt6TnzLEQAevAD71217qLFUrokfWxof6VmNaSsgWJnEnA4myMqop2Fvbmw51ePUzUFhgg11tcnuZuSDRvg42",
  "key3": "61AkUM7oRtSTQFs5Ns1iHKZuyKGh8NdPUVX7puoco3XKigct5nFPcBpbhLu6T9Mv4aNTP1h126iX1BPDXVcWxRYM",
  "key4": "434ZScrgED2QGtFjDKm6Chk8S1v9B3coQoYNmYXAkhjHjnF32H2hZ8W9RhaxpgYHKUQUf2qmt6fXG9HJg7zRbXC9",
  "key5": "4HA6EqevMmpHVYMEiFp6XfxHGELDnowsk9b7dhMBSRHSmBLnBwwv1ecZip5TysPsJinHEQuSzP1TQCHtUw1AeSh6",
  "key6": "3raasm6HEtW315gw5WYbUrHBazwA95wNKzV7Fz7uChuXhS5V4HEKEamgboZqTFQgvqNSZ7PiD1Z45MhF3Mtsh14t",
  "key7": "3zR2drW13QfNh7f2M1Kq5UNe2sJwDpgoafWEfxSuR5JjdZkYG9cKkGNcRmirQM64H82LwPq9K44NaSmFEQWAYCKD",
  "key8": "2JwC7sEMEpkiKW7Nh7cL5nvrAVWsFoKj1pmUYoenZSuDYUto4uPdJFwskMqtJDHPCAevhLw74D8yW1SC2bFWUM8m",
  "key9": "5aSfTRQZ7QYxqNF5e3EZtX3meVEgx1yWkdeKkSUjK532CxpjspuKCZuuJS29uzBTH8YpjMsHUShbAM8a22BZUbzH",
  "key10": "32scNt7TLUAxHMad1KPcyj9Htb52JiNrLnHzWRX7xP7GAn9VZmkPGkjr973NWoWxqghJr3JWPCc9qNC4nrduN5VM",
  "key11": "4Z3toC6MNqW4231xxsTS4b6NksVpDKdN17pNwAuDU4VC7qi3ropVZjXAtDX1aDg4cGF2kjAPvRfZPYHmPFAEFa14",
  "key12": "JEnMnm1g6cSywprkFdvnRvxehZb44b7WiZoeeHo4u7FXHeuMDWQHodvh3dE2M1oLXjarFdhZRQFDT65JbTcr6wT",
  "key13": "36arawAkhVYPTNAwiTmHYzPGxK7JMNhTXfZqx4qFbrXq1tA6mnMsNA2d3Yh4aCmwMH5ng35tpcD3rgh6jWfztALT",
  "key14": "fD9iK63AMDAos3TdMSBWDfErjnRqabdqEkh7jLyaadJ2WgpJbaTCAYGn12JyAbmJhJXjkvYihaDzeKSDNrZL6in",
  "key15": "34idmRS7RndsJaDVJtUNKf8ZNK3wVJVHULikKEbPuLUf4Y1XnUyQ3XeUQKTHaubExhLUVxBeNBg1zWK8GYotpeRk",
  "key16": "2hcisLCCWU5YnNcpZHZFzyiefguYBz8AViJSxLAJGtyF59eHTSBoUQEieRw81fgAZVJL6ZFc7pBna8hjUs2G2q8x",
  "key17": "4bYP1FFPnpAWc4hLvfW5rwgREpk6TsuCvd2S1Tpp5U41BLqb4cSb2YSjkW51Tjurkqgsgewx7Wcx9wLUUNmcjEZ3",
  "key18": "aQSddRkDxNo7kGeYcmvyRRXC3Njm5P1UUDdfQVCrhsrSugwFWAQjx1Zr19ppe7g1314SPiE5yiE6nRriRnLUvbB",
  "key19": "4RSDZiTxGu9uQYjHoq5Gix55Swao7MtE4iME4oVosfuFNAzAyLS1r5yTKZWZrDtgtyAQ1FvJ7t6dAZqsppbHQA2V",
  "key20": "4tvnTxZ59NcdhK6fiem5mMcKz7ficJz93fJLGmcqPfk4AWC1iJLa857U6GCVur8qFynXTa2BjezGyXpkeHHjh2hf",
  "key21": "zHrYAB9X5mhjKrjaV85KRDsbVEAj6wnPcd5kapCbxiLYAvyYw5rKPw6ADSLCyPM4J2zVzDDUWDfvc1b75EFBV8S",
  "key22": "3AhVTFLnASELwkGiKxqNhQv2pBym88pfC1U1oH4wv5B2MSNr45DvL81ECHg3NeCfnd8hUBEkVWN5pRtPyoGP4sCc",
  "key23": "g7ndfTXFBMi8Ws4Xh1reY9dAnh8HbcFSTLze84v2irTovkASdBBdLXWD4kVjUyTrvD5j4ivRnd2AkMFeWXWoyte",
  "key24": "5JAjufkg3RjYw3zK17oYUFmLPEqwvkoQmSRW6ZDFAvRb8pGqyW11e7LpUaELLe4v1D8wZxunHb9F682RoCQnFuYu",
  "key25": "5FeabWKy6JFVLpeAN6H7kwGY1WVeTwpkEhAo4nZeoonJjqdwBUJLWyFSQfMXhhA9C1d3hshGVQqNL4ftRKD1o5Sy",
  "key26": "U1WrHSygA5yeba6y3ysmEM1gXsGgLDeNLsiVXJmJr5rEn17gKEA3HVGU1xSXzsGHnKPFsUBBkuB6znedMe1YmHz"
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
