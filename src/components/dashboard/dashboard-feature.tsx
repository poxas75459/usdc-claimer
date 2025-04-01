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
    "644EKy4K3Ng73r7ToEzGnaHpvVeRqk2713Erj5ymZHbSpNx6DEd971j9zqc6ae2EPAgasvcqKsKfAts929My2HJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ce2xWLperwu5SZJ1injSYiBKAzFRAVRcLC1Q4nRe4kD7jRLxCvUzYYZ7ZFN53Yw3bb6mVWRXEgFztLNGX7H8q4",
  "key1": "4DyLepy7qQ143EvDu5As51SLPWgmi6sEaw9mmyg56UWiao4ZTZ22GmhhcxwinMe3mytwJECBVM6Ni9p7mA1kqXnv",
  "key2": "2vDJ8ZvXgSdDohhYJDfumw2GwoYFu4hisbFdrUPrmNbAxqqwNuy17mr9qufbtqbWXe1eSrU9z6o5rhz5gakeN8e8",
  "key3": "4VudePqoajFqqnvDxXVq6QbpNwCrT4WJEZfg4vVkwKTK5AMCi3x2m2pazB1mX5LP28sPa88LmfhUA8WcpiNQ1HM2",
  "key4": "3G95JnxfYJZBa98ezy5Bac8rHoWg2ZMR3CkzqMe95TkYmxhKR4Q5bbLEb5qR8cv6BV4FYfSNyBVhuBiCWnwv5Pd2",
  "key5": "2duadBTT2sWQCP9RtJxCiER5AEzskPnmUtLW5GZkAn38TELLLtHSLeYoTqowtdunEdawi8SgzKkWeYBKc8BsT3fm",
  "key6": "4g6JqNzVL9N8ALvPkmdKi6YJzYcqkMa1yJkaeiT4UpKQkUmPYxCWnGtTw8Uqgpkpcsq575hzzKPFENB5o1u5BdBo",
  "key7": "hjGDWnDzNfx1LfY99GGTFmi2XfA7fuxtMWx9qqamRwyZeNufXRj4LnuCb2THefrD3kNqqBxLnngticgX5eZjs2L",
  "key8": "5jdGnh7bwEx4nSntYUukhyF89uEVSgvKurvwKqBgjoykJHHBt8kLN5Ec3k6dGsKH2dcmZ6M85fWCLK7TXUibFanA",
  "key9": "24ya98zLeYZsfeBq4JQiqP2ptnZD3dCKBdKASJ6fAZuAQjoq79aefoYKochaG3LkDa9RjGYHccThkscBCsRGD5BB",
  "key10": "4NkdtMV8U9MboRgCbkzMgzzBCdjmU2MCTgCMNFkmuTR9L7tZZY8FthNC8LP3CaZJS71vhpX9jg6C9TgjWDBs2oAP",
  "key11": "5GPrhn76PbFLGYNdw5kuAWavDDyuZEZrrNNdpZogHe1td8cWAJ2CKxXLeQxCZxMwDZvEVXbg4f9h3DBwVbeZJubr",
  "key12": "2dZpKG92ko1yWwRXpw4irYsdPGefe4D59CQAYXtDm9VNZRXpxKvrvkU2UjijconmLAkMnWRfDQ4AoFBXBa866urN",
  "key13": "KAyBGcDYpDfYDfwHDT93WbLzbX7W1A8GzT2MaRnCE6LhHAgx4JYyRjns2QUcomgyuEMVsLTVLBrzVVS61nCGDF9",
  "key14": "64dgArMQP11QEPwFcjjUVqtMo2coqByvDgxs16CWdEtH7c61LmxANXUw2wVoWwdE2pgsoHLuaCn3bfJtBpkfLvEG",
  "key15": "3zZbcqoesRohAod6gRYMMqAwofwQfsFUFLzSGQ6dG5LJgoqRuX4rCeuJRfpK22BT6BMfXgcjMykc7ikG4wcJF6p1",
  "key16": "CmarMkj14tYLWkw71TspUMbLFv83V8hVgobx5ynAzExHiedQQYEZiiPEXxeiDDFYGViYTNJsEkWMHNCLRuanfvS",
  "key17": "4FhZX8TLyhQ7nzH1m75rVwXP2TTtqRV2odmhanV3BupidH4oZ8tSStDikRZdTpLdtcMAgvqW6r7EZUBz7PNF5n12",
  "key18": "63UtHNPEj27YDh4RGS6wWwBKSiRo9ywprVy3fTmwfmKModZCQUHoNCppk1R4X7c7vsFHKtcDEvs3gFnMLd9KBn28",
  "key19": "1SSWJAQaGY8TuxV6SKgEqzVAb6JiydYWGfkXbDdfwPFJkNRWau2187tsS5mAp1M7q66zZ3q5upoAW3PScQusWMu",
  "key20": "5btHHaKsxsfL9YzkYxUirEYS8abeHJ3KeA4FMHzLjjNoBHV7fyzyuvJbfbudXZvWfv5js5vmjSBuK32AoK2Gtfji",
  "key21": "ZRBwLE7XXK1kc3j44RWS4mDZatCmcRGBZqzA9ZsukkY4YZNXr8SQTz1ZUw8JKMEVvEzaSBojV73TLBVjX9fNfL5",
  "key22": "46rtEkCN9x6ifC9z4TKRe36pjasRqS9ZhxYdfPMu7CrJap9zrspXXH7A5F4xwnxswLV9hYeQsrHmjBspQreVcbki",
  "key23": "6gj5vDS68ty2NJ6cgnAL8SFBxR2DaKZY7PLf1a73SEqn5stwfXdWPgVd3aZF9Kd8wXRFyFxquouKy1bgoVUqp8j",
  "key24": "2mUzdBccKwdVPM8XXiGqbAeAhSwiVxnDACtngQhXvxYNJgSGxpPpKKr7YmMjJ6nWrrpijokoUeEnQ9rgmyH1P3KU",
  "key25": "Zj2sidDH51Xuj8ANxLKRxhJbsZyxVHNByJEmWoJF2hwKYc2aWcWKGkzausPzGLsFVQnfXKFbbFQZPqXhzGdegzF",
  "key26": "5ytZfHDiv2VTmFxY1YR2vhQemucHFzymJWWd7WJ3TShogAgWyRMziJueoLdQ21sp6V69Nw5BCz954iF9HhBTJrkG",
  "key27": "2K32dKH5kE19ibX7yhfZDb7higd8wfcwVVY8uS9TSEbMpLWBNyTP4M6mYLC4Y5e1whPiVmmj6RyripkzWsW37hC6",
  "key28": "3VkgUdT5qwfYfeX3pbv9nbWruC3BMoErkJSJBfRpzyek4ddewjT2gSUDCZG6UyJvVEBK5aNyQuMTQgGrjQ2iHbva",
  "key29": "3EU31MD1iV2E4gnhVwHDSGa2epHGJZwxFuNXP1un46HEjtEeBpxcPb37scgAEKLG5zZGNzd6sKBtpRXLANzrRTMa",
  "key30": "5h6dspJTepeQevV7kSKwzpScbXnZ251C26rSG8xmsEdhPygrVRSkoTuN5H9QvRhUJ9kDWNCD91asRc11MuWoYth8",
  "key31": "5a4xzKbb1gtxWSvRs943pExvzX6YQbMeCu2Eh6uPVKCdRxy8GVxZWHC9NVpwBgVNUAHcZJp4QUJXtBGtoTqFQEH"
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
