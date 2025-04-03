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
    "2b3L9m9XrtXKfTRwXFKnFR8PwGafpNXTH1oAHwMxs4CrX5vfz4cohyKkKXStSWBjGgPGmz1KjXPSaTepsm7LgM6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JV1TorSXg78d3pyudyq7MtMnGHRUGdXAnjBj8yagohHzh9ZFe2MEGcexXXMrtWxDv95wsR3DaN4b1pTtS13Tyrp",
  "key1": "5C8q4L8HvZrmMy2Nxo9mSiuTMSTtRgp5TPq261Uj4aCZtQmeLmFooAxrgsSdLqz3ScfAGMtZUcJtBSS22PQdkZfw",
  "key2": "Zhg3n4ZX2ubRo3nr2r2EG1T8sxfTatXBTmSfLmL3MioPie9xXKYNM3KkiW7Ri2yvLhBYGWJ9BFQCDKr93spdLTn",
  "key3": "3KXZxcNDnJsL5dBR3UQ5XqZdjyjKwK2jQYy25TWBStttTSq3HRdy1ndHpoN8D2vnoBPYtdfPCo8f9XBQUND1V1Gb",
  "key4": "56rYPGCcHc3XqzuB4TSZRjhoz6p28WcwS5YU6j35UM327N2BBGvvCmCSqSuXczFpa2u3ByvMqpAhjnvoGHv3sonh",
  "key5": "616AY7Sg2C2Y2AtAwbwU2SdhtDHE4sN5G7HD5wpn3cfmH4fvQ1xRhgX9pjgEKCxD3nWn44uMpugnwBYPmiifNupw",
  "key6": "ZRrZ2DUnyHAk4mdBmPWEPetFSyZS94N8F8osag7PD8X9JWLrJ1jM5WaJ6ZPWfKwz6U27Nibwru4H7SwoDTfKtVB",
  "key7": "5gAQvt64sJE5uzqoW9g8yR3zmGukRM3bV23Zw3PKZUM6CnwA9fEbS2J3Pj385LvzNNm4Do3cJ4Sz6u3deMzMbVFp",
  "key8": "5oYa28ERtj2ogR1yXnvTAKVEZM3m2xYMV2c4frfXtfUYJLSNGJNuLMdpnGyEXvntFDDFFTxL6B5ZdczeK8m5NP6L",
  "key9": "KxSYAmK2iYCREfi6a5N586GWsJbXCoTzqU2kua6bKbVu5jmPLDX4AQPzjMg2ab7XiFHqtu8SPzncBRuxqHEv7pP",
  "key10": "5RXDZTM3e7yAkkVxwvPWnMAQEybKrc7WJhMPhSoCxgpVUqVbEC8VSjj39Pw4mZ5PBhEDeYgz5cmYMkBvvtCxUJhz",
  "key11": "6zsGGnWrr12KXsUhinczi8gsoMo7pnvrLHGJF2otL9BHiptX5fMXSWLiRK5J3NaMt92yCs4V8yiNNNdKmsZkxLt",
  "key12": "4Zau9hW1ECEhrCfSybWPtCiZgy1tF97SDaSb7amTXMP2RLq6Q42EcyNMCg6zrtsCuVh7VVuBPkLjqvRif7HKQ5sg",
  "key13": "2so5i3ZLK6kKaDpdiPZxsYQrVaqB1tcsqN3zseL9t7HfU9xjgQdATnTMHptz24swer7h7K6vz37WoR1NFAKWzzAR",
  "key14": "3uqcTWcSDKj1mu3HkNgRXcfZC9hrKsF6LmUpDqZk14rDdmxDEX1LxZirL9zfyVd76ag6bRBZhVE5Ff8FSMZaSvTc",
  "key15": "LYcRqimcgtCMQZbb7gigJWAUaoXp8QkQ48VaQTDPSXugJeuB9tptYiitDW8ANtYsS7qMZw1RownMKjYwDRiDvK5",
  "key16": "SskckP7q2nskzBsfF8EqhoRt2HFN1uEfSn4cwDCWdRyeWsDcPWWkETZk749J4ot58PvjfAcdeqz9nmobRorngaz",
  "key17": "3GHcULwUNnF3SDyLUGwhqyFNYQbqTuzo65n1dR1ByUDeZyMLGaajnXtrtRuBZ4PUivakayeQNeSMNhmQYHMmK2bi",
  "key18": "61ftW69fg8mxmNZZqSEf28TbHsJcDp4J3KLAhKrJjRi4bTHufMaNAV4hy8yELnRbGs9NpjrTMap6VisKrioj28uU",
  "key19": "3ZA1M4Bc7fZPcHxiU4NXTqa9Lt9yef6HXiGT1qQ4JEPZNDfNrJ4LRfnZTgQGzfJMjcPxeGnmc7pRhh32HFY493D4",
  "key20": "2XA23Q8F45M4uoPFzPXmvH84uvQm3CQY6T8XDCVcGZtbKjLAL32Ts5H8t1pVyfS6nokZPRduxmemoBfnthQzVtXn",
  "key21": "4TfQP1jzGeT6cJgDZPKcww2dEdg23mPdYp3XiTWvYLH3ScDyXgFBpWxPGf9XSkVQJrfS1TzHsx27ZW1Zqh3eyv5Y",
  "key22": "5Pruc1vdwdVEbA74wcpAX4zuuTby1qGz7f5WhRohe3qGPwWgKveC1uCrs4NUWMt489ppG7C4E5cdinapK2A2SJKj",
  "key23": "CCEeaNXvUqLVxcUDHY1AMPtCqSeU3j6fDLnN92R57D6fSGuMRpYEyCs2Tau4hhj4fJvT2f1gsZgziLx5FUYAfYi",
  "key24": "L1YJi2b173P97kszn7AqLMFJKMN1KywighJeefgmE2PEPfEMUXbmPzTHxVwF4KQXmjGaomJjMypYHHb2rt6u32C",
  "key25": "2LmHxoCtSXGogFCgnVyXmQBrX1PFGrXd9AFzVKWyFV6TeP1qv5eGU7dZtoRFXrCKEfb7iTjAoTAVTD5hxr9GE7FJ",
  "key26": "2ydYuJwEPU3te3U3EBf6ZK5Sm3xxHbhLHUqYhXnJgVBrhyQdX1zqujMqmDL1veV9DtFYC6sM7oimiKyU8BaeAXQr",
  "key27": "2HSuXmaMRfLSSLqCfbc2qobAjUMvvmar7hPob14gZSzik8zW3LwPYZJKu2idAJ2mkpkvYQXn3bhk5mAoRc2LKUSE",
  "key28": "3iq8DWVsA15wo28Xrf98VpqbqWxPzKr2wA5SbMWqyLZYFidb46EGvws62YWaU9TrqTNQTMqTA9KS1JxohmkfcmfA",
  "key29": "54ozpCubkJRtwULrrBwFdQeVHAFag9PC1a4BSu9Pj5XZq3q6kDFudq1r9jXksvqSggTbZaqw9f7i6jWb3amBgTEp",
  "key30": "4Y4fNFXZf3mHuo2Lk7v6P1ctGWtayvvvY1Q8EH4k2yKzTFdHDupMrzXXs1vyPcJLpCY2FTNApQTH3JgKUhFBVcQ7",
  "key31": "4kafNqxsQiK6XGCneRB2Fmdgeo2rqsuyLPQFhAgpzpx8QS3amt64cYgrRP1ovu9suQDnEktPsBjhkXGvkYin8uWq",
  "key32": "czLVjcohZGThfjX33zoaZYkN2tinyYyGP5t7VdkkjrrvU4ksrFLE5P1wLvcuLPcRqJWC6rB6RpQirtq5ABMPywt"
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
