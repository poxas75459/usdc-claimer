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
    "2pLMqxehaBgRqKzBnZGcKMbWP6B8mfvzNrUAkP7tUPmUQmbU51bPxtccgXTizxpmKCLjKry7zWvVqHDRL5djsU6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XCgpVs24hdUq47m7euZAJ9gQyXLjkabbgHQmQjCkaRHB8qXsprC5CQwLAaaoWrPebTRQPNMNrcS5ZNaUaiBFBKR",
  "key1": "4coAeGy2LNnZVwAEmMSExFnnhwsZvNxsraZEyyrKtRV1QtE7EwPYj5uYS42xRr7KYVwcvwWubXHfseqiJBwcssUx",
  "key2": "ChrjWwZS6R4u1FYeVnNGgdeEyxSXmhp3SpxGN3NQ6HXFCNVMtzG75RFYDTJWt5YDxR1PCokTArMXE7PQet799UG",
  "key3": "3z744jP6KF1SHfEKrTSCKtVTkdMRhEa9dcMZ4mWYYh9GKf4JpcvV2sVdnKHMnR3DbLWuMsBdvm9rA76Tqq2fDLHK",
  "key4": "3mqh3AfUkD7txv7cKefZMvGY5Zqiv2NaykEe3hVBNamLv8yypYwJxHTBAM7m71xr6er6Wcvoc936YKA4ryaaJjnV",
  "key5": "o3HUEHM1usRa7b11adeteWi9R7SgLqF5NqNWJSCHDWKANpy248WdM8kWVpTsoesJopaaESxSboWHgB5tqtF1aJJ",
  "key6": "4r7dTBpnrHrx3Y2tKNYwbzpjL1RUk5wi7fzh3iug8HXAS5HGBj7Vv3iHKW5ZdJfWwHhCekzHemQP4jh5DGrkzdSp",
  "key7": "28kQjqM9zXvUkGDSX7pxus7TRTamNkap2VXHnsfBtSa9jdBDEsGmGFhdGGjsvn7citQ5PewmgKrjw4AB7D7yss7z",
  "key8": "EfpAGKVu7Z1azim5nBh6iitGK7Ca9xQLK99vydiiXpPC8GbtPrMm8FwA5pRFDFepQ3icpkyLgnkMGmoHsXBrXep",
  "key9": "5E874c86gkm872BHUZnZTg8GdHG6g3KtUfpgREZhFJR3hxYtHsK4bzWv9ywxZV92ZiNFCV9VSzGpgLVTf7bzLnZn",
  "key10": "DAjArEuDZyiPXBZz48rJ9yi1nCEj4XuUbd4pjXXVEAjbVfZ6qWpL6N8Xtg1GYBQ12sW2jXMipJtN68ZP1Kb9Eqn",
  "key11": "471vbL9BPQPZp6CjMumaSTmkEVr55oCorLLdRR6PFMUAJrQ8YDc8gqLFE3P5Bv1VAu53EidNvdRy1zNJ7ChpupHY",
  "key12": "4ptkZxB1YjLDf58yEM5jtmVsmHQ1HGmSo33ZaB7qzgi8Xb8j6K6dw6ZEKtXANs5VpsTdRq3JVEKmXLzKtTqvodit",
  "key13": "JG3CiVSzcYf8PFmio63EG9Q9GtcXzNoSFkgZAKH9p4sq1JmKib5Y9gi1sNZh9UPSnkJXk5LExznrRp7njmkC8NU",
  "key14": "4wMEwvF1Mm2jcN7MrwkVqYUqFy3D1vHePCDNyNERgsbdCUFJ5ub4VwaGnVCaBLLfHX41G5EAR9xf3ihg997YvSy3",
  "key15": "3drsSs6cnrynsAMR37NAXz2v8qGM4AofiUDDyXNBZY7PoKEL1nUrKi2xhHqDapjGAs4AKNYqxpHUKS3f3dWtK7on",
  "key16": "345ztrcbuRKLSAVhY8XwRoAz4U2H3WMMYL4whRPaV8wvkqhmxw9gsEEWfcGUHZg25hyh4bcx1UKmqpiCStNgURn6",
  "key17": "4eWSQs8JX71ttpJqBuMp6GzqUKnD9sE84nH7MF2e6HThdi42Cd4cWQ9nY2au4b59SxEsnAdfXNLGKNi6Jq1TAJ5H",
  "key18": "5rH3gjxjjqUGBcrMJeBNgN7prYzpb946jsM7o4m6Q5d9t2Aq2n3A79ShYqsLQ1ZFBQ4YZLbYYzrvFUC1hvZKYLm5",
  "key19": "5eicHrsSZPaGejYQpx7hNszgU7TcVyzVKuUhnrzqMgyenWh5yPQscbRwejfKH5vA8XmxuMCUktbtC1YfGmhcHuNf",
  "key20": "LbPk1Y1TJCHXq2KfES5wqJzgKZwoAqRRQWQypEzVxytFtw4x5TLHSKH8Pw7hTpczFsJy7vC3HykN15Womc7LJQP",
  "key21": "3Y7eVPGjzHwxJ4LAyzKtxpNzZpy8tAMJTPLoq4o3hnpH69HUP7yCRGnDitRePAnt8T7rMwz81RE24wRjDVbbmfPN",
  "key22": "3kcU8fPH5P1BywmuYZFt4m3prSNK9tmJA8BoREwRuiPz1V8C6eVcuyDZHaP8NRhAj7fKC8zabt5fQ7oZnCdWKZuT",
  "key23": "3sZ1XUPQepygGztLgDQP4mnbHrBodb932huQD4DrpJmB4fYu95fK8JX6SSFVCDK9h6MBMcyVSaPQyJpX5oLSHvZW",
  "key24": "xohLspNk1RBFZTDwtUCQWXfEHY9eXwguLWeExJVFDKPr1y9gZgYXbMFKFd1UCDMKvYqwfeMqMC2hqZczuvoFoB6",
  "key25": "3auAcHqhrxEhsYhK8gW3YnDjMLZ7M7wqG2YrEzBv316uPeNdyc5ZjfpMzB5G97JiGMds5z5gYegpgxkDg5sSFrf9",
  "key26": "5YfPmebcSaSeow87Hvz3wwwMLiGbV6xA67DhAUDJX3qSJoYD57oPPTg4MkXYEeHBhwybm8CMh3xnw1JJu9Y4rc8C",
  "key27": "35veEs25kPbbRRgaPu6YWdkgVW9VJghmA4EuCZWpymwWTc9u6Emy1qarbr7Sfqd5pNL1gvr3ttXLkBbmWMQokk9C",
  "key28": "2CSmVUoSJeqgYodRLFHUNeC1EatG1CAA1a4gQ6ZwcEVULxdoofjktoURS9TUZtNEyj3m1gnZ2FgC4bxGXTCyeG5H",
  "key29": "3D8BdEf2cjCyuMZTPrGyTU4iJAzHo5Z5n2TLRmJ6QQiomnP2cUTRJSM9woXQkPYXjmojpoSjDTKNDL7sr67XT8nc",
  "key30": "tq5pwrhBY5vz3ZovDjdv3sfGy4NCjtDM3KBrBUumSVcMKuo1AYYth265jKAgb2xPTwyzJedqCp1bH46j9BtgNq2",
  "key31": "3x8rhAtWrBT81TxtAqGRLeV6KpTrSo7K5D5dZSDLBUzhwxuedGnhbYJ8MBKjS9pSR5yJBbEocwgaPi4tKYfAEe2F",
  "key32": "5vnNA4WBsUqxuckWZTiToQS7BaRZbQE9P9sB3JxMmzAqSkTL5GF2hRJcugvwQQYrnoAe5ViQMne7ErnNTCB4U5gx"
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
