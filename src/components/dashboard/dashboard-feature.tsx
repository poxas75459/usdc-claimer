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
    "5G5Pm7Ec1BSNNN2hGc4JqAazvGNxsiA58kH45WzHGygrsU9yX6N6m8zQwEYdS1uHGLBvd3AEVaGa8TQny5JbntpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Z6ZWhUifnAXp3xZUgYExcKsD5DQ5aiNGTPt41NAwKYhLbmdRAscmAv28yV1dkG8bZmzkVe5GWTCRqVDgJ821rT",
  "key1": "36xaZ7RmpHuNQ5FBSojgcDYypWAauvBN4HpDiZ737gZP3KmU72MaGEZYTrTEPBhWoHBngbkHreJAgHfxY8jDkTz8",
  "key2": "2TvD9Uuvxa7j3dKv9xbzhfqvm4W75aquq2XdRiDDYEc4GZLxcYJFMUYr9b9wSiDi32GHGx8xGtdrkeJuhMpoKcQA",
  "key3": "5CH5HjtWaN1hB4byBSJQvejvJqefZv5Dkg8b778MTTuKY4irxgjZ94cHDTYu4LdGFTyoSWArQXeF5cnWccuf7abi",
  "key4": "5zrojsD3G1jDH6yiufAav3SsEg6DSRpDPU6HXLEbUR4J88t9iV5EAi9XnzYNEaC7FV2enGRwzZdGgm1PoJ7vYqyt",
  "key5": "5FBSB6vxhEgho252fGsqgkHukj9onURZtPZyARL2TUqUyWixoczZoX7nfrc8St27FDAG3r54TGY3nQsBBp82PhMV",
  "key6": "2TGuyhWCMmP5xALtBJNzNA5CZKwDiQ1nGE8qBnseWFp7ChHBcKA6C8EajWAq5YC2sm7hYcF4aZf7uqrEmy2Z9VGu",
  "key7": "2DfqUafnrfSZwaGywAZZdinpnpN8t6V2qMSZdcoxfPqcsC3TDAYYsWsN6ticJw1QRJNcxJA6K739AECzfyRBGYhC",
  "key8": "5pjREKGenzWByBtRZbkxSekmBgaV6gqCtSzEkre37xSB62kdsu6sNXAEWK48ZgMAAopGQXtcUUAGvRNDMou9MnLf",
  "key9": "4AM5KujYxTnfWaXDL9wFB7fcsu8amCprhzGZxJh9UgdvPHfN8yhfmyTWLJ3xVbUCNSu8LzSdkUE9McvrT32yf5EW",
  "key10": "4pT2PEzbxtMWotJNWoGyciqYZXBwAwn8Q223GaJZPMsSCEZD7WGqtVdC11bv6jDoBBYMHqnVJLD7r4VXBUpPKrMq",
  "key11": "4apb1Wo3bDqsquryQ3iJc5vKttr6x82vV8n7RdPiPBTcdYJYVkPgm8gLqtKUvfZ5Yd1p1kBR4squAejmcF5Jt9uH",
  "key12": "2cUQzjPzR4RbRbMfdrvxFGda5t9qwdkTFv9JCNcDURkew3vUikwGzCDHxXKwMf1Tg6LNdF6ACiMyvrqh9Nibptch",
  "key13": "4QzbZp8w9c5jveQtSxPxCbQU19VjX8VnC1ERhzcxbi89ghThHPAG5DTbVBbtSVPG8yeYk1YfXCGdhGobuNAXw3RE",
  "key14": "VHmLUrh1yZhRnXZVowaAESLihnJYCdLsDamiXsXrR94zaTzGNk54D2HJagGBvKTu955At5GAY7QSPLe4eTKUgL2",
  "key15": "5ZNziano4HooztWPVkd3CZieFd34jRgtks554TepCLA2BPmR3bCENPzXTWUg28yDw3P3iQbCDZkCJcQDq6H6wAr",
  "key16": "NReKsvCLeusC4rh46YfK6x4jN1DedyYc3ac8rrL3QgH9BGix4ABZFS7cHXuhjq3Qk5mvchpMAxJezAH6VLS6jF6",
  "key17": "5J8EmUP4A81V8DZivzGnWsgNrC1vSFHY6Pwt6J1rdvFiRMHbiSBnArCxe2e4pe9j4UfsnwV3QNFvA6hBEV8D2Lxk",
  "key18": "SzeZTpA5Gy7wR2KF1Petfg43YkEDAQPb9LmGrPJ4pKkm4GH4hgEXjaQMeAgSxLwvcGNijz5S5gWzqq5Ed4UnLBb",
  "key19": "U7itU9yKK2YmMxCYAQ3i9rn3BApik6QNhG3Mv39FyvSPQnWGKmzynwfGnxRkimkPsnmWzbGvDFvdQF9qjBfjgWH",
  "key20": "67Kq8ZCPAPEocYGW9kw7rvhdJJ3j8Wrc69ttqebYMT3AG3Nq9k66wzkPY4cE7Z7cNzzG7AXKUW7HNRTcCvxSWnp3",
  "key21": "4dgbpjp2UFM3atrgtDobWHAv93LXdpZzZcQ9zwQqzwDAigSRp11iKhwYiHC2YRtcLTpQ5XgY7vvEZypUo5TXZWxa",
  "key22": "3e5c2DBrYQcf6GbPzomC2yUkRHAmvXRoe75Xhxuhq2eiBgtQe5qqTnKmXi2zRSbxG2TbfbafGa16NUvFuw5ctcT6",
  "key23": "AgedFg886NVy7ExGEmPAfzKBkHxjVAW7x8M99qtpKp8vEBTDMVXm1sNXt8rCStnjpoNir3jYH4HBBJxa1dNqTWk",
  "key24": "n1oCjR8ngASNFrN277WaG6v4GS6KfsYrMCYkRVV9HdS97NReb478XzVce2k1heZxbyb1d81qPmNYKJUEGR3RtqZ",
  "key25": "XEKoGbeeZPxVNypaZvHGDNx87njKGxTnewcrMAn6aFh4P2P2zBvqTsxVZn6a4uz3CQapPG9TWP4Y6mEss9NLew5",
  "key26": "34ipqncFrm1gXwVc4UdzsxJ6AS1xqis1ampKGaeQShq1kKDdfBEodvJrmp2xTKw1HzJJA2N9TGmmyadwEbpdKD35",
  "key27": "QXDFhtd2T4we4dwYwFDRFbp4Nq2hLMH8jpdHiXD47qgqmxtrJjvQJBY13GaxXP3LB7Qvey6r8Xvo4u2qXJEBZX4",
  "key28": "3wkxxcwaYiWtH33eADiRiFzzEoBNJxDTU5yHURAKkURvtioAoYTopMiskmg15FS8AvBUYyNYSzj5amL1U54u7nDA",
  "key29": "39uVEpaQz1KRrzXrEhCj6ZczCczmYCqQYgE497VqderCUeiq89BEEMjn9GRB8Z3SRtgynyUXhRT1SDpxqYRQLv6A"
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
