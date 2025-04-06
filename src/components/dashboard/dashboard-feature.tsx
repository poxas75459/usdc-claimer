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
    "5ViaaBBgmJdfPzZ4SNe6R3KzngKEUh414T3duW4g13EUhwHwwJR3uzrqeE4NvGa2nyHM3eu8zzj142r25fYSj4Dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "buHgyaeT7D4T2uCiiUpCDuFYt1yb7ZjUdEPnA1zKt2fWjCGP5PaaFsZzB4bGRhUASgB1HaCF2BVkkotAghErRiX",
  "key1": "2L1ZVJtRp1Fxr5hHrD4MtbxTzgTgfdTspNhjkxNWUJwcXucDssaDpeDsqxKrs6BYEPv59z3XshUC3sHPUnG5cEB1",
  "key2": "3auJrNBiMLeyfqKeZ9Rs8diggU5PrZ7EcNLsArLEvvb1nJmzMf1D35AMGMgmUCAtrbDuMgbmccqVmGvDfFXx4FQc",
  "key3": "2GNLGwJPRXP2dUA3HjP9n4Usx2odzjUN96aeyaf8CMtcUzU5jc8KaGJVD8E9ELws5cw3finmDaAo2NyxwouKTdZX",
  "key4": "zCPF1JVCUgoLDGvNPsREeoqvzFfgZh2oBDCE23u2JyZueAddqQjBYih9prwQLdpECh7ehnZiDRFBKpXfr9ErdUx",
  "key5": "4rXqEqAeH1StGvaik2RVw2ibeDWv3Gde3zXvZtJxZLXEFuQkQxwvXrbv1A56nfmohHsCps6ANZtyCQJUyiCBbAJC",
  "key6": "5BrTYJZM9XiUoPZVHqHXC9n6vzmfdKQYh1AVsToTY5rqQGiNsXTjzMAteVGrmES1sajhJykxGcxaYMuHn8Cdkswg",
  "key7": "4HEKBqLDafgJ9Jj8o19QGMXXA4TqhpmLZYsrqazTqR9424iYHC3Mtq6NGjHaWy7Jiq8wVqBrXmTJib8bqQWnha7R",
  "key8": "2jfs1uBXTeDZtm37oyftMAXe1a4AqkWZjZcYMnNdjUQRSDBLqC1gWsMRSbSuBP3o587x11smAyg4e2apueXng431",
  "key9": "3j2kayvWM6XBdX9cTAobupbjnF86sJsZ2HweaX4dHWmRaKCpf43PwFSRZjoWke5ZvXwurahZsFiNXHkqBgqZM1hW",
  "key10": "3U2F4CjnrJQLZq7iLBDALxzr5jQmKPQhnT1PoC2j2PrVchniHnK2L4ZDvsqsGtLnyqYEw88b66EV53KCSu1DrR7Z",
  "key11": "2Zx8ZyByJAiRMjtgwBsK9Aq5F8kFidjSfcGEyH68ih9Yeu9kr6Xs7du6PaERgXToG9xtNwHe6Lfn7V9oGNDyBJN9",
  "key12": "2QgH6UekQYF8GJRFggemTDPiXSvizXCCLhM2mupt8ej6orXTQWdLb1KgfwLiP8FSV8QB4FtFLBCCgNQ1ZyNjbbxx",
  "key13": "4dGsvxGEUoMWSUEhftkCZuJkqsBFHa9NWMUYrA6xidMT9rTEva9WqYHUJvEnXk1XuBm5tNEMT72XcyaCrrRGToDV",
  "key14": "3nEzfeQVdSF1u9MiWP6DZLaNqoQ9PXLrZyTDdGd9gtXmtgyQKAsEv2zrQvKTMXgkzeruub5XodYZhSUEa3TKvYCg",
  "key15": "2mtY2L5t8XYRyTFe1oZjNVGYnt6Ec9LT3empS36y4RZNwxx3rNESa7MbXv5QNcTKVsTgtj3ehpKqveYCaQfhg6A",
  "key16": "5yoQpi4VdLozRZPzdCcTxwnSEFCygg8psS6gJAs4zJxGS75oQ5SvwZAEsMzqL6quv5WrtvdTrvBmLkTczn7zKmQm",
  "key17": "j8b7h4UrQdT82CrDWBnLmV8riRdcPfPy1qwSigSZHWzCNE8LrHKgfhywGyz1wBts5jbcSDb6VkNLq7U7bxrEMVb",
  "key18": "DHs111WD7eJ5vYwjUz5Y3H3KkoSCo3zXLmsGayeJa6533sDDbVM6vncrAzVYsBPTA2NFV5L6nZ1NNkvJduwvicS",
  "key19": "49BJvZEvc5ghioztUfncxsF4LGgcdmvr1KimeDcfCebfn8UD26K7egTopfFdDCJVpvyNC819zZQ2z1rFu6bsEShA",
  "key20": "314HNKA2zpc5Eoe1Cyj2juBUnQwReZ94zu4FVXvkfgbeLFvznX9N7AqpstJ9ZsAppdbaUBcWWBcLatKFvz5ZbNbC",
  "key21": "9ssBZTxQXuiRwGbxbEZhNpGFWgS75S2TKC9kd7STE1wfDdvRTacmmrAbtEpL8s9PVdPepakdKHXjihFKDFCdfCo",
  "key22": "2pNBueD9qPeEGr7QfVraamoCie4Uq1bpSSLsV2EbKitzPtpmg9EvHinfjpS1b3AJdv2bt1RxVnfxu31BF5YyQCgM",
  "key23": "4ZyMBvD78Z5e434CDUFGbT9JDZAddbX3KC9Bf2A3kEgfQ9u9jgbdXt9Af1eT4xkbGt2pgKx6k5Gfuz3S7so1TNZP",
  "key24": "R9Cp2fE1KLTAHRDWypJE9bRFKmYnydqsqtLXnKaASWTdQe2A843SmwXUa3RLseUjdVHTbvFMMTWJZv8tomtQaf6",
  "key25": "66df4EVRHr6Erhp6xfvgWKmr88uDBP7tkShV2sr62fNZuQ2bWHV8cPxbbMvF7wcn9muj6xN6g8w8JmLYTwmPRd7w",
  "key26": "5gGfztn2igEqWqV3GNdQF2gSV7ofk5XcX4SKDMoijrHadcSJjmnH7xJSpa82ZPbHsVdjoZjXLePgSmfkiCpt3hPf",
  "key27": "6aoBmbbJoYYyQz3Ecmq4RiyamxBGPEeyXUufS74Rx4aBkDSBxC7rLk8rZGJMcx1EkNZe2T1MaHJARQb2td96kCK"
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
