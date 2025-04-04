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
    "38yjCyEQDAhQurZdQB5WjswxnVehApNBtvdNATEjwaRT74Aq9YcagEVqef9qUKKhNwvDntNorTRYuKqseTf8sG67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37t5dCwzJMB4prAmwL5Vv9dKdACbneZmhbQAnTWUA2MGCiRUXgUUdAdX4xMXTcvPsj2YwGw1XJzsfvNiGsP1RK2i",
  "key1": "5NHP7zx653dd3xy3Ep9f1vZHu8jytbfVRutJ3TbyzevLv7zsX2DhQYvoBaLTQmW5bqgZTH1k2uLdfysuvjCc7Sjp",
  "key2": "3StM5q6k2QecgYvPVXMhkEzWAFRRSDh1cyjxE24ApuWEmHnPdqVDgdEit73UbfqNQ3MB8xvv4hbKc5pa3HuoW4AY",
  "key3": "4W2D6gMA6zbY6VSQjiW4ZGy4ZdyM9PthNYLjp2hjfCDbY8aiFpDTcEAubLscEZY8bPKFJ1cUnbGdaYJiZP76z2tZ",
  "key4": "5mcmDQkA7AAcfjNKiNtRJpHzd34oiSrFF2zk9Y54VrFXVtg8v4aLwjXPyhJu1g3xeagt6rQVHambSqYtKqDRj4oU",
  "key5": "RUgLxtbpmx452dEBL7NgaayWpuogK1CByKyoS5Jb6sJSx2CsAT7P3bSgkARgR3ssaQPmfQgRYCeqwbUk3xJMjyr",
  "key6": "2G6xAYUzTu3bVtZUurq7xwe3yGuLnEmg2z9QW77WBVgKVnjqoGAkPmnG4pzicvfmBkehX4wGbfS9ZKP4iVU56AHU",
  "key7": "3ibaL3RUXgzefaLXC9RjeFH6oxNdW7E4HoEdFZc5o4qFPpSSm43mfM425HvBjzybe5VQCHAUcov3yyymSfEaeVAz",
  "key8": "4ruEngsqRRdiqv66hS9Codd7BB45NP6H4WtRgtFt8SMM4sRbuKdoWVxnaRrTGwvobVGpZEEjLjUpiMsYrvgPBtTw",
  "key9": "kpJN8eE84kKekTVE2GpkqnNAWsZbifNLXRrN2DCdc2xYfpCVp4z6KkedsHuhxQFTsC1Bvf8BSu5VEMtWsQAn917",
  "key10": "3mFdfWQjutnkNHVGfFSPzmo8ochh8kkpoJTJoKZb5fdzA4T2KF9it7UmrXMC1YR1xET1E2qF6XTSKje4KeWYNG91",
  "key11": "3JnfijBwic1NEQrnnknuo51N2sarre7Uw7dH97qwFQ2yC5nJjZhaFGQ9tcpMt3EyMWTWvh331g569cURKvsQV7XW",
  "key12": "5ZpBGBvCfLYekab4R7ZKwv2TCqesi39cAkS1d9Ff4BzH6G5MEmTLBdFWcHAGDsXAp3kS89qD6npNLt7Md1hUUm8C",
  "key13": "4PB7bwAZbHQGDqs2yke9Q8kyQDbhA9oP1xsZFETMLvVK2krgxvsYQnASmeYMbCy7uT5C26BKVmZS2DjPsSjHCb4Z",
  "key14": "2UtmEsHgm1eAKoQWBV39tqFpdfdhjJrawjtaQ3jiLAVSbh4frfhsqGT8KcyQxG38jyN53zZmMK9hnhXeQ9yZpdYV",
  "key15": "5cqkwFZVgk9zkiRJD9e2pTBN3oTkBfrZpGo6KCYdpVYHWbZB765HZRVVXCYbPUJL5YZLRRuT7jqQjRxytnP6uehM",
  "key16": "5ZEc797FcmnPFyXe6yJ5EnrnVar5ZZFbRVFQWLHTnaLEBoskUFB7yNtUmsfmWSTTGpFcxjN5qDDapzyxRBdwwJmH",
  "key17": "2KAn7MQa6wsCkaRZNLhPtHU6cjmxfGSJrSkHdiNyXkKBehAjB13kTwyUd77x4Czoed2HnVr9sFAqUqWe7EFiEnUe",
  "key18": "4XSTfs9ze66VSq29JEAtDhohrPDSe5AhGNcZrMWHZXEsKikfPE7CrbW7rMFDBCrxrtA8713vWTw7EWW1ihYwZshu",
  "key19": "4YjfpMaKpoeL4U1Vx8cuG89XvyBrgAnmQrNwmGftfbPHegvPhqzPLC6jkKryVFCTPFmDKKUMk6SLrY9Znx5BXQtP",
  "key20": "41rv1jZtmZ7okaHSfUwMoVhzD8DLPbDnKbHY4SqrvumP5Ft6Z1TdR7NkyRs9eCG8o21yw3oo3DEQKsVjSethJK8i",
  "key21": "KJgEST9Ringvs7aYhAwtRmBrwyNRy8BAxV4jgbvLAmrtWXixXzceKmw71QzjfgWt7VahWqCU8FnMfHY98yoC9ae",
  "key22": "DvbCcCKNtCHS1Njs76iTiSafdwPQqhRM1nn2W5bgk7sp8Dpw6Js33mvESN8F3uuTmtsjWubcaZeUs9W1xK1FHvU",
  "key23": "sTzqC4uThNNG5Umnvos4aMYc5TYLs2r4bQbGxucvDbnwN1uUu3MMeMWtoYVM2po8Xov6mnJAKRjAddsRjFELwmA",
  "key24": "3z3MTh4nEWBXS88FyFNiaX4mYFia4SWArhDvsMvd1xfkjExxvyLhQqiwG2tA31m4BHLxfZT5szexGoee5EX2hCBX",
  "key25": "51S6S2aoEmik6gKmjoAd4gW357SNJn5t2VSV8YvbqxiJxwvGAuYvAm7prD7o9GwmdEJDBWvvj11rxi4NwZEADShE",
  "key26": "2iXixTJM9MATVDQj4w78PeTHieJufDnaqZnwmrECEB1ShGxPrJ1rcFoR2nVry9j4jrMiYo4Z4c5MAmmvJ4q8g3e9",
  "key27": "2mdV9H8dRVir1hF5TKbuBRtx4dnSKjbwcv9Vj3nGCTzUnYSi8qVYy6pVvnNwQ3oM86rrzSLozSEob6yv3daenHdH",
  "key28": "3E3ZGvWzYnSfaZULStZtFmaK6KGZxGypu1mYMpm2jNRKELmyVB6WissJ45Xpxx9dEp36c9tBRR3aoSQD4ZnnnoqG",
  "key29": "5c3KBqcc7pvLuRbEoW4QaDFu9oKxtoU3wgAmqtMtdciUYS7z2yBeooppRzqwTBb42wikf3iTiqdGuP78UeEw3y2g",
  "key30": "39FJGo5t3nybToeJYm3hkzqws3f9QPcdKYe5X4cMD5jx3BChBGEXLHWtrseVRsNvT2H9jKh3yZ2aFRJnmkUnq55C",
  "key31": "4G1PwhPcw3Rz1SFLKjvPz4kZM9uiQf7F7CZuKUbJZyevq8bp27ERh78hwngSSx3a1FbGEp54uMMZt9xyjTkWKFFm",
  "key32": "2rYZVBjTuSqwB32o1VF6gc2ZCPjW7sBb3y9JEPisXaGEBpVkuEW5U4GSvLmnWgagZjMLokXPCLxKFzEWEBFCZKGw",
  "key33": "9Bwf39nJMBEUCXoPPpMSwgTFnpKtsesUnzb9234KzmTSYzpo5tzxdc6TBXbYL6RnVZtpjujATMAamnxiLqsmin2",
  "key34": "5p9N5rwpw9Wkr94Y8v5rCygWWDvhftLtuZG3dqcfuiPzucrrX2XPvAZoUK6Yv261CPY93vbgBzDPUU2JGbMubCiX",
  "key35": "54To19jiG7LbWKf3YtggLoZ7A9qzKT2Rqem5gGUUjT5FjrYwesJQqCbw729pfWS9XbgsTi3BzsKtmG7aSJeRbKmW"
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
