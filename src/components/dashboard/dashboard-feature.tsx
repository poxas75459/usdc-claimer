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
    "n2vgSF6x8JPLGx5HLoVgJTc8yNbq2eMNWjve3w9JcLBjXF6PsFEqkB6UDPxUUd795e22wM8km7xhRY4DztjnM9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58rCBoZdFT9F2cNZZsvYQe3QEeQoqd2ayAstW2kWNiC8HUf2i7F19388vMnGyRBfzy17kQweTfiK6p3uV2TdyUHa",
  "key1": "2S9YcEtp9X2ugBfhRSRJBYjD8GH1A8sPbZPraE1AkhArrWLvoa7sNAHyKdW4HrpWJaP1rwZVSR5FNRmMX2MKA4Bn",
  "key2": "5LDD1SoGWH12xhZypBSRZvM4s5RZvo4WfymoXsbb4oWhwwMtqtZ9a7CRnKmWaqdmmtmjv1puEmm5kVkHwe22YgKk",
  "key3": "2azzeFKsTtJYcJbEGpbqQqQWm2AMaVnx5eZNHi4kbbKuQf9JeUGsHZRJw6wfz7c1nGbr414BZPKCsGcgRKD2LQd2",
  "key4": "3RRQ6vqJceMG43k3qoGXL4bWXRQKYv2gjdZpRVbEktLSAfHNgfjrNSLQ3tyZqsBbyfY4vsJrEdZLa9ynR88fGAwe",
  "key5": "2by8t26yGAehuky8X7bhMrCLSUcDNzArZfjBqoXJqihPoD8dEcPKu4WpXUPRyUYhyTSDUHmNdn4ubHrYm5azw7Af",
  "key6": "3UwHG2ssuJoqvVQKEQH33WfxzspQoGzpQmrRZjnY82Lnx5TPehLLokLjBBdAc4twmHRFwXxFzRQuiN7Nh9uhBe5s",
  "key7": "5uBFquixyJ2Ndx6bDXgRinhseYTbEzk7p45MvyYQqh77yNNS1UooRosnTC1pzcF1so18AzQV3rabqoHfcyeqnC9s",
  "key8": "5q63BeoH92hezzYnDwUs9k9kGJkHjRAwbz2nMPcpXSL88if2seRHTPKa8vde6nPjTjZnPRRS6KE21jPab29UJKJW",
  "key9": "5Pq6Nd6nc1HBgj7QtGbKahqmGAKyXtKgycGLqT7BNjG7UTjC6QUdKPiGCrhwcwAWWncBvtCqUGs8WuSDyHUcjzBk",
  "key10": "4pbyLehYfasQ8vmVYpk3fy2sBohYTRStQaBaCfL8Ykz86uDfTPnMWjd8xCoKnYc3WwX7byzD9AiGPaqjpBt5wk8E",
  "key11": "LKhwmPHHAShtgpA3yRM9kknF8xeoMAdDmU2qChPDB1C4Go5LGGCew1SH8Fn4Ppqumtf2XQbLqiVcTV1zb8V4y4a",
  "key12": "wA2ykDhToVJ8AyzTwq9LwBBmSvCCbKJPzQZ3nUMsbeqjsz3ez2m23wBHaCQ6QvAbL5yfdFsJkkV27tgB3MXHJFn",
  "key13": "EFhNAc4xXdxXbfH3BrCPoPW8cupNAXbfsJXHf16JSgvrmrK55c8PSfGPPQXrStxLrLu5nqNaPgj4coEKGKV4KkK",
  "key14": "5b2sDfMLJPU3jkhcorMoeiV9gu3TV2RW7THu2KH7cGu3j4Q7yN7tbdgm7gPdFV7nizvNifJwDo3gXWg4DGaUUFUh",
  "key15": "43NWBWf9xDpok9KddohmyVm9LVz7YYGFkpUs4RmRUfmGAsQG7iYG2M1oJGvbLsjAB8V4yasKMij6gD64wTth7EF6",
  "key16": "4w5Swr7edgwX6uEbJ8W2fhbSMJfQwTpJMJR6YMms2ycRzZu2W6chyKjbT7P7GAeJAtJS7kLU246yXoNKaCf1M2t9",
  "key17": "43dkRmY8hPF77kvyrXHUxtPEJQiLfKAbpmk8cwXqGZQ2jVhjkLjNVPxV6xhLKiqvv96qa9zKxiEcVVyEkUaegqCm",
  "key18": "eicE26aM6LhdR4Y1SpQaYA8Zu2BaufQy39cWr3Y6aSxHrqrufLUZaqRYV3Tbavahw4szjm8p27FDdmGxyLQ4sQT",
  "key19": "2nDyuRGhbHdy4hysMT8BigKcWJ2b8WNcEMDJGttF3UeUxbhZGFuCmkmE3z8frUNjVJDBLgz3D51T7maMPHHcxBW8",
  "key20": "MoL7YgpCPAmtbvuH2rEnPh4eY4VQ8mrBtvVCxWXVbEWmfurm7GE81GL379XgGh7v8Zb4k1ZyTaM1rPSV73bCpeT",
  "key21": "3NFmHNxgZBnSHerWr11iLNB7JGPHhcyhxVeFrf8X2DqTaXXZKvrAVpb7h6FDCPXVHSjZxkxTMRgWZ4Nt1DW9zeuo",
  "key22": "NQf5h2JJXxfyoeXQvbKPvGteEaoRynzXyktxQ8CEQB77KqRqG8p39SjFibqk54hEpKEEqJxqbHN5MG8XCzfUeJH",
  "key23": "5YxRPoZKuxcRKM32ZaEL3xhbSpLr7ai7U3aWXSvM4kLdAcu8nVhWnMrRGcwMyDPEeqrAyshSGuEoZWrChWHjoPaQ",
  "key24": "j4EmEra1c1cyH4Kuzt752Ts94N1rHg3H4nHL45rm8UzQYmiN6nmWVxwWtfsY1Ns7jTqVvVQxb4mKBeBZLqbHUVR",
  "key25": "3epSpBcGcspZky3ZfQBu8S8wCZRy12V61yD97PhnJBgQtUvijz4KWBXKxQ8jo9M37gP8h1KN2xAJqxmeYPvtGJzp",
  "key26": "28AuFiwnfStR2FXcMyrDnYas8CvnSJWHyqihnPniHWacsCBdM546rpWdqKk1iArQwPaPVVXbRv6ohxqfnwbodjaN",
  "key27": "5X73gBqo3TU4FXv9727Pvy2p3zwCVxf5AaQozM1bzXnpDwC5snHHncXbnHHJTdKFPniLEi7gNX6a2jRQ5aXFCKZc",
  "key28": "2hfdATYKvFqkdTkfygJkcRWxFjYqCoRFKobKh62TiuKaYkgVdyuvwANt8PvVbLkpducw8EjAShTQcNMsBMb76chv",
  "key29": "2CLM2wEkz8Afy1fqeTS3NPLV7HXtCGJQ7oEqJ5kygWMna2Bi2wSaRzrcpHdpL9pZxjC1vqtWxjrjFbwekJkVwUVk",
  "key30": "2qebQTyrtp5VfYmTKghswr3632k5kWxB7G71RDNhdwLUeKMWRRpPoJnU54vJiE5RXFVevDLx5SUMJSZUg7BkuBrz",
  "key31": "3ftp4z2KN6x6awc47wQsasHwcSG1n24uMnqemPuvkvEPFYCZDAWrgNVH4NUgFhFv3o38PGtYhGzu6B36wB2mk1aP"
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
