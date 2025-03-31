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
    "mhoP4r5KpeKZgfxcFgRhmtb1ahPupdjDx78rnWPwjLBRayxieaUPYrq2vQsEGv56xEknodWoZAk4ZXWqaU3kfKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2US1svkaHWYgXvvMegXEyTCTWjHJaV2QaYH2tsuqGbTaJ4ukbs28DDGbazzwKXzYVDDTLkjsMxKnjfNAb4fYsJ8F",
  "key1": "53Yhv7a22MTZdn3Fcz5LfkeriipTModgd7r8uHDvhNsqFXR5WfQRTxLj3ppo11CFhG1ygAaJ364VbwaK4Y8bF9MR",
  "key2": "2orc2P5Zkesy3NaSr3PYaHicMJDnCdZ5NJ38R6sVxLqAZb4TKPFhVz7kAMTLa4qkVe4sSLsrmnm9AgoSrn27Mwee",
  "key3": "X2LgAuwPfCCHeYRQedXSPAG7Fj18KvyU2cav1hb3v1rgkEqgaM7U17t2dx3YRz88ziz5daYQ9BqSh47yqbjoKMu",
  "key4": "42xwEhXDS5vZWeFkXDaujtDmaoLbGz1X5FDD3o7e8hRSPiGXN1rkiHX7Aac92EvFgbM3CES9csgGGRC1LqJumoEe",
  "key5": "SrE1vTPqjyG3AYniE26D2eu1SCH8ehVq1PsxPUZXfHFSTtZ6ZRpkyRDeygFPiSVZcXJdY8jXnT1n7VTVDtKfWjP",
  "key6": "3ZuGhgPgfLe8tuekhBhVVP19QHBKN88QCWRT8fsTo3Z6MhtvpSpym6kCTyDoew4Q2AuaMAfSq7dKfyE4AnKCCT7w",
  "key7": "5jRr5fratJ8557PSPgzKoJVM33t6iQL7onr6FYxB6F1AGJrQVdH8JdH5UtXnDP1LTCmb5zJbNCszP7f4e4A9f618",
  "key8": "48GyJRW4qRUhZe7UuJiBEh13CK8qg2En8hYQcr4pBvHNsPVJrniRKnGVpUE3ZULSxerA571tTTpgzgkgVaLig9KG",
  "key9": "4vAeDNL7wySUxJLWvV89iw4VwVXs9568vn4e2VVAdKM9UUFkgWWfd5yXAyF27E82yZzp7fmCe2HsmsJKgLDpxHY1",
  "key10": "5sGJvjr3sFQj1qPipXwoCEa9FjZwyh3fB1uaptrjaFPTWEyXatSM2W2YcxiZLDh6BzzDi4SW4JPFgjHbPyxbpDkD",
  "key11": "52JrL5z1vNBQ52DjdXv98WWVqHgt6EbyLtbRxmQxdNFGVdMKacfU45hvqonaPuVZuxCCj3P7HodqDfSWAHvE9ih2",
  "key12": "5Jn1J38M3DDoHqgV8PT1CfBF8HPRRCrTmVhBfAbwYXd85sncpgSPsM668H1EBwEwK6uGRSnRNCvsybh5voH1PCiF",
  "key13": "23tcwGn5qqA41vRgzmNZeQbVPLcZU4FyuKBm9euHWRL5MuuUcr7NViDDB9JXX8aJ7G1hvvjPpnV8Fdj72mGh74Xz",
  "key14": "4xTRzfwrQNbhwBAjrVQZusx5JXbiNGmgibLPeyrDfXxo4n3Tavmzsd5DepAaAruoHWyD3cixf98isTz5xiW1rDMv",
  "key15": "LHfd8HzgasYsAL4XYRkgTtjcHvEd3CBuHf1TEx29n1najsZDCVEFE6NwL59DRx5aVCqEF3hGBupqMUxYSmWeWPa",
  "key16": "2iLWZvhECUpwmQHmLfuF73YfBt5vVmebZjpkQNBUfBHMMxapjBXy8bmgNs4rxKfj8hL4tCuUztwLoP8vZdar6poh",
  "key17": "3FF3puxZAsdnTAMLAbYghVHCaomCo1JWWKBs4FqYu1dzJa7b3QEmHbu8Q8qiqis3MVSnZ75QpAbQcPjNWPRgKBLz",
  "key18": "39jEqX81wAkVr3emPWDnYSArHB3iYrHh8eoqtYMZb3cZPAm2XoTkzEBDSdUAHzV2vFUUjpMCP9J2pRBohhLsRJ8T",
  "key19": "5NGGxbeed2HpaF1vUKv78gJQDyQoKob45yati8rqqf2iDiity9AyjmHEqEW728VybqpKR7ePscXr7XuCVDpfvNSU",
  "key20": "3wc2QuCE5evAdaEo5jhmBX3iDupxqk1ttG9HRUZekWPWhegQ1bWj9cCbutYsijHTabap5z4jpTG3huU1jYrcNK8r",
  "key21": "cnPzAP49hniKgF8Vp823euPBiBbSJTPfD97EhgZU5Ai1MJ8YdZoo1ytDRmiXsCCM1xAxBzpKGWYitkuzKwW3Lrr",
  "key22": "3i1Rf616ZwTu4Cf2a1CYqypn51dEDwVfAedaqqRmhmjp1FcS4VukQgPbj8N8S2ce5y4mCzYu33wd7q3EBu1BohvJ",
  "key23": "4mWyRV4pk1rF3d7wHD6BGaqd71Ck3UmghY4x8bcRQVuZqF9HNu118bA9GQVTxUu3U7fSCEx55PoHqVZgfwoyTTWb",
  "key24": "52bVd7FDQprYhob7Uhohsa78jAJimrW9rmR4sLb1Tg3ZYw5Q646sgA2FDye7FtVhijdoiTRwcLwRbX6HZMV8WGvp",
  "key25": "5yJz7bzoYkiZeFGqVAVTwitwQ7e2uTfDwKD9S6UxHVkE1dwRbKM2GzCRmvjHvo5fW7AGPhzm3dCdMS8fcrykk6DC",
  "key26": "YJQ3cs2rPaK6QCpmUsccLwE2xDkDCGXE3MmCKi1JFmnVfsGGjDTR6VK9pkUXx6zfk9VVSK5MbxdLCZjnsUCWsBv",
  "key27": "3rFYdrahSC1TNLYGquzZV29Fus3wZYyqBZ6uTQde4c1n67hQVAYCtMzKV7k3BF37a861n9VamrEaucqMXx6dEnAr",
  "key28": "w7Ccmo2xr9NsSjJTc6RDduVBBpQ74KqzUnSx4Q8p2CeDMyhMGCbMq5WVhYFLFB8j5VnUxRssLGdpNrG2u4naWWc",
  "key29": "1yZr5VbN8MwnudnrVeT4nfFmH5uSUNCPKw6WXv9LEw7aFNLCbMdCxgqzczhapytmC32KmuZSPFocPdHovbPVxvW"
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
