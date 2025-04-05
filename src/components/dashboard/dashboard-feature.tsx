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
    "4XYWeN7fFMQWH1h1iLi41NEWmfAcGVZVVwcvtJyvB1FhfVGfzq1jboBapSZsVBnvmE2b3797SDaiViQcSBWiJViV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eHYeEBJd2hY2pJ8h6KbfcMUiKwUfkt63QjDPgEqxiNNdqCMmntugEozg5NuJ563z6tDVeNz2TqZaS52oiCRRjo4",
  "key1": "2ViZunsdfwKzsu36mtjiumThKBaxC4UvMDYn53ZWiFLK44WVM1CbiBWUgb6gvDUWirHkmJinJ9GSGXrtoWDPGB3L",
  "key2": "2Boytp7rwhrJv9WdegmQYMHQURtQRVJtTmGBf6kqFf8DbpQGwrFe4Ph7cYQj8pZXbjePD66RwJbrGCrx9fPCJL4D",
  "key3": "216k4LioXKZ3N54HuDVTc1BD24pq9qjREHew2w3LxqUxheomCnGSpGp2JP4o8nosTDJbvM6LhGVRroyvjyYTx8Zr",
  "key4": "3GvA5tZsQLPYHxwra6WyNvWwbpbZjgN8ZgHLvXEqH1hHGDcj2CZsECucXvtnXML8K2NqzfUHLD9zX5A8yGhFAEMd",
  "key5": "21qaTsBD37SVaQbEpyB7UiCapUjYmPEx1kcrCUwaGNXbGREQb2Zgc87fXcXnAEoX5CB1XicTnCajSeYaSx884mmN",
  "key6": "MGDcc1uMt1WHMv7M9FpSscXC8mjUGQGDq8WwausX3gmGwfuS2rJ2pkzoQfGq5oRHcHZnZEFYmhK3Eve2B3qeJ9G",
  "key7": "5Fm792D2kG2G4u7Q3C4z6MPE7hvxALuTUmNFTy1UX97x2qWuC5GW7EJc8qc69X2GgerQT5tU2NHr2taG55C57TA4",
  "key8": "4xuUa8MqwxavTsqMRoWWmPq8e9doWVQcyEoyZhABwwKbz6byd14MGDb6RxWNdxMRWu2wwZkMAcZgK5ieZHD9bVPq",
  "key9": "3pYYm33jJnqfJmBwHuAcGJPUBddQMa6fFykLeuYAtjajwW6j6jnpCpB4Xy2xNH3SQMCTM9SmCryszsoxJG5gpFrL",
  "key10": "AvtmmkqVfaLTRgvSSBx43ZUghDu1pRg6je1pWsVsdJEdM5FNVDUq3GPmkQskMj1FLskg35NrwuQLqH9jLvFn1Y1",
  "key11": "5BtTrjhqa7G895Gro2PD8YVL5LfGv5cRKhSFcwJDhT42s91fXzaJoWe97vwgCpcGgzRLSKRWnB2fEMhVdDg8pd8W",
  "key12": "4n5t8wkkcLXdMnBx8suu93xwnWddWCcVResSVj2MErp8x6DPe2FED2RK6CcprHD93FtBbvqeWtWtvEZ4k416Ys9L",
  "key13": "2AggbYdiKQE3NCXpv1ZiVdQgQfigHrsu4sFNemibBYpncG4oVTgGceNLRcJeKtxQjqvAR6c6hqqzEEk8JLNxX7AR",
  "key14": "5KPAzgMUaRo24hXxRhc4q6Q9GfSrGXY5VMtZndzczpBWQDRWvH6Savkdex8C9iDKKqAi11B85nkUC4FhJ2FGBtrQ",
  "key15": "4zuDA8BNZs4G8zTeSuX61LEdiJaCMX1buo9RYd2JCMZ8TcQqBGZJx6exLu4sg2VgPfgSiuMquspJUrM2ipWCDwpZ",
  "key16": "3euU5deK331yxmgJhUDsHaGGLo17hVbSqsK3wix1J8my2T75yVebH2JQpcHfv7ZfQoqaG9ZW9AvCGAWevxug3nfH",
  "key17": "2W87gz64SMXagUq4ccX1ixDDQoU7LCfYyeks32wqMcwCqgZT51RhkZTkBYfKTGzi6wpi3VEg9fUXTWBr6EVeT5vp",
  "key18": "67Vvx8DFERp7JfYjcWLw921FKcJMV66uVyAPXfWKg6K6V4TAew6Hmaxusbm216n7XYx3awY92J5R8mQpAASy1vPV",
  "key19": "2ZExQwRZUg2GorHsopoi1KiLvxfjqigpp23rMNeyGyXLnzw7TuCTSm8i3UbWQ26EaVQUBHoPmvgx9kQNzMqmsBm1",
  "key20": "3odYECViKET4VWVzM3BHQPQboCsXbGudYttJiQ1ArhEMmcPNqaBQanF2AgvYdP3iy8iW2S6kUdRthpwQrPvZcruK",
  "key21": "j89CgsRJuPf1wrEtPQvvWxuAstPstH77EuPCQDeYsX2ep7TQfBWxxeJBMx9nPhdH76WCCiGs4ZCR5n6tQBWNKtf",
  "key22": "4DBKrcRHVCVAJVHM4cEqaswdvDKq9VuR5fU23qQMgxzayfhoxb8HfUF4UPoSCUF1vjuUNJrWSJsbPbcXKeEcCzdC",
  "key23": "45bTWEwBo7KH12m3Sazn5u5FsKoerKGuxzJZkmmuTG1nydrTcZCL82RBx4Ny45to6RDFzYTMY52NVbuvCu1uV7MY",
  "key24": "3UnWV1wN7y97GYdK4xBNwGvy3eGNTE7ATqeGZ1Nk4yww21CgFKGJ11EUSmuVsABJK68iPY4Y8x6YjTJvue8hTsNg",
  "key25": "ohxTB3dZKgKywbgiCn63AgF7Dfyugu6x8qCY7GL8qor6MiQyTy3wbwUzTdNkMJ3u5p1zqprwSnj28BAoSm3rZPX",
  "key26": "Xxuoa9niPiRekjK2sqpmCS6AJZAP9yLwhqnHJbpxY5tBXonWG4CQEmn5oN9twHey4d16wTZxhVRGRzUbRiF9nf6",
  "key27": "5EVaDzZrQegvyu6M3KnuqHg9H2nJgPMnae5TjK9Mv7NGWCAM377pQabCXjRVDcZQuyAWB692UcrJo2cinGG1JRMH"
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
