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
    "i1GywMguAV9uL7jcPBaWFMLWXKRUEZnTFmDoJpir2nEKbyUU7egXcsSVL6tC4FzW4xUDpZXBPm9UkRx46hAwSDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KdrA8R14kk7DbRSBBX1UkSxrVVavSq9BBCCFN212Wi9oQddypJJLnRfZa4F5dLw7k51Qw9ZyJWGDh3MxRbgdCNt",
  "key1": "4tCB9aYZi68PKeHevKcC7zd34E57zKpPGSKarzLLuz2Koj4sV49ibCAtf1rdsSe63yNeXr9vEvY52yKVeiVH4ndr",
  "key2": "2iDc69zvk3D5PQS9DSGyYHEBF4cXqu6gg7aSTAzQGCia6dFasrWym53CuFkUc3jH8foBHu8ibG1zjKAgt4Fs5YMd",
  "key3": "5UryEYDch8fcYxF4UYcr64nK2cM5RJYMXAGxsD41DpojQB3H8VFCym1wiCfzuZ4J67PS8NHh6Uwqc7esnB89m6VC",
  "key4": "4BYzkAykdLYP8hxenPos4cPb2ohE77WoJThapaRM1uwnncXpEJxeEKGp2XeV1Pbg6WoVnrQqJSEybDRLJbEpwLHP",
  "key5": "5W2TTp6wWg5tzT4V7qPmmFtvkcyCnzd2mpTMuqSt1ankyS5YkwEYY3L6YeycJtVr8gkp9xPmFgKp6ZPDLAKEwJhz",
  "key6": "3V2ZrRygx3NxW4mGjMj1hrf4ofCSiR5FSqExPF5KXNJsQNhXHESeMAY6GK1cc5VU3qq7wkLf2RVeWZg6PDtu3q7j",
  "key7": "2JiV6YoBB7z84YvyiHdmeuyo9tPHNVN9R71MKAtd7rJmnWuGYjfTGrDsAL4ER7xJGvQqDNgcs1pL9ET5eWtRmnog",
  "key8": "4Ywv6qvUrUAKq8Jz2NxN3x8vVNNjJDgvTTUxJsJAdfkcXtbCnoPJ5Zzy3RABZrP1XyrEcWbpwbGhKR9kxFHE33YV",
  "key9": "2vK8TZqKC3re8CDYaoBiyL6meC7jDddkhussudbiJWuUdL5fS4GnVhptmC6FMkKLfmj1Jd2B1Lu1nRDjSHd6zH2c",
  "key10": "4TKhHJxU3rYA5d34TLDWH3ikNkMKkyhRei8PLoFGNHEj4x62ZPetFnv47aA8GrE1TE26v6LG28u9v1dZH7C5YNDx",
  "key11": "4LzrcstewRzUN4mUaHsygA9Ag77zwH45k5Srm6s2iAzextqN16CkGTXVPturLDrK6MdB7PBjYdRNy6neW1hBdGWj",
  "key12": "5jhpQ4CTUhTXHasJHSRYtYWzBgBBoo8S5LZNko4d7ttLFMRnVZvxRsuF4fG4JGznCCnPEBeiPVFcjJn396gMVFH6",
  "key13": "5Wi24dy2krGSLcjgroue7JdzPaXKMafYCMX6ZUozALPVg6cgv2QahopXu6iRmfiNUn5L71XwbhLy3NRjA6S2KQ5N",
  "key14": "24QcPqWkEVAUyUcZ9Wb9waGaCsB6Wk9Kig9hHaC1czQ4erfcuR9rzExPTPAVNMNf8dKJPfr6VMNYrQP3TinjfNz4",
  "key15": "4qyTk39W3yZRUDojipLECEHQWJsKCj6sx6tqkZQ5RSq6qAUE8Ex7sNpWMZqrqAwVvTjDyGyVkPGqGWH76nyKqTAp",
  "key16": "3wZRme1D4XzTnrDMPS7k1vtrwU9RZcZcGqSJPspouysMMSZj4WMXmUR4HBPmUNgK52rTnrSP5eARSF3uAojiDZw5",
  "key17": "2d4o8djZWSfqi8XyyQGWFm3mqymfcdjHi5JifkGYgx8CC84SAYTKKg2ZiQrw9Ad1dzSzHsxuSHowXH9epwyD24eZ",
  "key18": "5SAz3WrquyHyMojBuc3ft8oGws7kSNLkkpWveNRcu5JuUhyaD5HRJLRwoXAfuKKHmfX57Hq9FXAi5F4mV3uPbNna",
  "key19": "3gdYVyGDgk41xNXpLMqtWJAjbMSmLAE4AiCvekNqkGn9RtAjY1Aw2YJPtz5HJKvvs74GGJ8ikXyRbZK2MUuWApB7",
  "key20": "49mNdHV5hGZE1LRKr4CaNtro66KULpjMPRhj9e63WSazLfCQk8QNg2UxFQ4nhPci9f7L1S69oJkVa43MWGxyEgzp",
  "key21": "5amgaDKj6irwtbXLRzcCNYuND5CVvwv7osTWz5DUGQ1HEfbFeWbwiSxEpsTv9epg32G5jAzDkbjj4wcZ2tciGRwX",
  "key22": "51EggDSiLJ8QECb61b8EKpm6J8STBCiDXmidPS2bW2quvkdVLbBf3qgLfYkwDFpStocsPD37xoYFXYBzkeoPPeov",
  "key23": "4G7YrGRQ7GHMbRmrsVaBAdv6jk2kq4GPFJ7FMuoD72JFmgganiqAqoADPSir57d8PZm9VTgoFUrECzJxvKjh3a74",
  "key24": "53P7iyZDvNmS1awP4479CQirfVGJ2YmqUnrZ5NHRU8zSyfCLAynXQj6TZNFurEmjndDDwSBj356uVjaMvw9ALYo1",
  "key25": "3uzsGTQXQtm4zzTcP3uRnUwaK8Epdg9mYHQ6jpZk2AQ17YmpbuXRPViprqpzbZhdAHuwNWfc82HvEWXuQaKv23R5",
  "key26": "3HtR4gQMfHvj57ngUDyUjMFFr6hgBLATFYyjEHGdVED7SCUBUvLE6uFWudy48XNpEC8Crz2PvbG59gx48knfbhk9",
  "key27": "4fbpfUfZ5EzaZGVwBjDYX9q8XLSHvMU4Fb7BAtaPVaJF3WqF2CmdDyPF49e1zTfuu8XSkrWTNmrQn9xZK4iRcSVb",
  "key28": "A5vCy1YQUkUwpE3pGPCP3SQ6rxFHZ472eJ9eR9wurphqRMHr42GDx59A5xXXPYB6F2ZN9V3iHTSuMSTdeM7TxxC",
  "key29": "Zy568cAnYkVmUhjF3CozbW2j8y23U91Y8xFe2y7ZGqpKuyz7KBTPTu416WQvrrThmTAXfkXHDGf1v8kuhYUQaAG",
  "key30": "537V8yRv17EJpeUdk4ESMX2YpMZiKpjYgtjbm4sAc9eXjapS5Pd5Wg537W94wGoTnrCgkhHEAmi7BPxHoYJfJKhz",
  "key31": "2kArM5DhaNLzmaV899xDtTnKip4bQX6HY8Fq2qiYKeoWnc3U7PJLUPAWoYBJ3bwtrY2Kb2a11LJ7y9dKqksaXnbt"
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
