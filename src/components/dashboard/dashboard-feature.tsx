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
    "3MZWWUTsY4hzrsHpSaBwBNNUzNvRDvZGhCgoTs9cExCzwyEGniNCnrgxgetZXUjGSU8jwTdEPqqJ6HaTrW96e2Xh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xSKxTzY1BBURTLf7ZVJtuhGDHV9hByG6SCWg9FG93xe1EYdt6pf8VeXncRd2Jhmo7eqfTueUpFfaMLhf5RTZY7F",
  "key1": "3tXqpq9a5eec5AjExo3s9PxcYLNtBLA5qVWua1CB7L5yRidWXszXcApoVnXHk4tAhwz78Yxnm6rqCytqQGNM4KJ1",
  "key2": "5VTtqZViKBwLAvX8sNQwcKPwfNa544VxPGq9e9QpzXxyX1gboy76Wqc43nJPBhnmGPNGaqvutsP7i8aLTTvo18ic",
  "key3": "5NCW8YZnWnoqBzGYYZPg4LYkyK36XvCdkA95bMpCN8SqA6ngMtHk23rEcXsEVha9kGH7VD3ChoCxX3Z2wzg53o6f",
  "key4": "3N7g8nJt3CGH2NpphTbcoJLnFDdsooFW3rCsQpgCxM8RjUYBD2wJZ4mS6BrEHitt11PwdLcW1S16NSpCh1gSXd8S",
  "key5": "2JjVWd5LtKyjwaMDsbG2PisaPeYpVArpEAtS9BtEisbHgdVBAqh9UurDXSP6v6tN9fSyHz51sJCHrdfxwXfk9xXt",
  "key6": "2xniKZH4Y7Lcds2xvrNija6yHCuc7m1NahvauMLKaK6Cy7MwfYA3d2CZuFgvQwmuL9sQt7oRLND5keRqFcLosH4i",
  "key7": "2MhkCP2gJxjgMhxyWEzW8TbKdXNuJPqbqxtsHMGm4TngC4Qs3jNmTGzCfddCSKtD8n3jnwVGS4bQdte92C8q7Vzh",
  "key8": "3YBBQFbb7YB5U7yBPA7V6knv6A4HatdovwJgmCkce4931MGfLgSVPjEsteD4p8uDE2ZpoBcsedCCTBLqhwNXwkgt",
  "key9": "2ScGzuKGeN5Rg4dmqhk9ojwVpMRXc4fFuzZVJe6wUqC9BTFEjfV4eBYVAevgvb2TsRSbCRJEAJVjAvP6TdafbUZj",
  "key10": "5BYqPwrvmybrT3tTeLP4osT3XxwQ7pnNzuZLBj6XSCry7VtKJV4ihaepmipe7xqMi5RZMZXW6yyXiwa18QAF2dA3",
  "key11": "2YM4C9WiqaWrCKeszT2ghfrwEuwWf981DseHRM646gbR1MBvxL1zoFoRsYs1qz62BN2bnt2UQ65L57NeczKP9fUc",
  "key12": "3sJeSBYtKABCM9hxGG5HQB9QvdFFysSyZfH8RYsAw4nXGQTr58JFFb8Jp7tJuDz73QS5mmucgFLDyiDVbtf2MFsi",
  "key13": "5p92te9R9yq75vGqBRHhx8QA8RW9F488VcWzk98tb38XvFDdw91Z1ejnuEUEh8EY5oTzaYS1w5uUKUh5juugfaWc",
  "key14": "5hnxyQwZhaxwxRxheHw7tRb9pruKoi9Y6wqjQgMaPAA9vgvmSwrZbgDcFF7YFqX2vzqhGhBiac2xWVV4RQpnBtgj",
  "key15": "3dhvg4joryETcp4rr18FBtXGfWTwjPRZuc9P8NhcWtbX3JqNwdXEGL873GTta1xzUWs8zGtA3cJPYMtepd9H7zU1",
  "key16": "32cgHvJ1XQhkzxKU3MCQTj1k4hWWmde7UwzYSVRgU17EbtCvgzcczAKhNh52HQYyXFJBCtwLF92yexmaJ9vURuP7",
  "key17": "3K6wDWvNbiENkYsfy1m8Pde1zc845XRwQ6L8YkxXemzdpYBGj5P7drboko3nGwbL2fowSWcPTxvP1jCJzFFYrdvP",
  "key18": "3Vz5aXbFXVd6VLo32D7GpWPJwNTxM4r3gGARH8fcjVPVu9iNd18UneGBwFXDcieFjY8eV2YQLdfipzAe2mTr8eM6",
  "key19": "yNS2eaFkAyrebBKBVu9VXPPehgzc1uvQKFcPp6ePx9ZLAFZEuRWQEppexhcsFjk7RsL96CReXexsDmxr59gbs7f",
  "key20": "2AVGMK7DEjkdRzdxjrx4JRXopTmzLGJnkh6FyfmL7UCi4RFQ5FQouBctXcYMvpTVZmJaYi69YPqHhaEsksgFYcG1",
  "key21": "5BuE8tsWYUjwQkfVduWBSykKkdQHSX4xb7qVRavjdVgPkm7Rf1bHrmJYCK42ibB9WyRt2ezBmqUboWBN7YNvnSxb",
  "key22": "4Stcr8JxpDsKXhvM77fVWxicyKfzmqzmMKxettqWAfMDruai1qn8EZo9GSnufcwy4y5ytj8fc7uZFZ6sYqE8gYt1",
  "key23": "23EiQkGc6WSzqtYSh9K8i2KoLVs4mUzsDsmp6nkkncJWGbdknnJujfYf3WAALoJQ1bHYpGjVWDgnAZwB3c48apns",
  "key24": "5fbhr4Vqr2h5jRSi4iXq6SHAKsDvWZdwNoCNRibpGXTsqLwR9PLK7T7wxd1VSfXzZwVkJRfRtxpAbLk9LMYKWF9s",
  "key25": "3gWC69z931DK8qERv7CyJQdsYEa539BiyC8JKqGsMsn7NGD55rqxidVZS3bnh856pvjSCi8Gu2QieuC8znrsehDo",
  "key26": "2pBPHdBGZTzhHFghr8EFkBotSHubTBAjztdYZQbzmVVLUM9RRmuANtAYsWuLgaiUxk1m3YGGW2tjLxaTTLM6sG5e",
  "key27": "425U2S4aogCEbx5K3CEQU9DHBqrpUtdH7SJRNJb2i2YNiAnbMZy69ztm9Hh6zJGbWKYWH3wcArfKDGZRzsVcVPJU",
  "key28": "1uTb1PPRVSHVV3BaqwGpqCgRwNmX2XHPGEFvcSL4snXqS2SeWovxDVmaUqwdfcisV9daUgywDdjeHnH2z4orEup",
  "key29": "49D6PqcNnQg55ArwYE9y4XtfAtwmQvFYVnG3tFU9rs4V3zQ6MJT9NmJjxa4HDWGopo6Fvy2qTPrzRzWUESDzEait",
  "key30": "2hU5FMFzaCyW1yyeuLuQ7ttHEWDP524MS3jwsnLQE4zY155sAQwAuyyN5NPgHmFjZHpwKSBTPsP5NpFtqkXKrGJ8",
  "key31": "2NV7T3KmJXjYa6g1BLVcjn3f7cRbsCTRPxUSPfyrxcxZCbicatoERemf3iNVzP53p85NVhusvqRtVY3gbPoa9XTA",
  "key32": "SdrioN39g1meLTCfcH6EMU3Q9avxmJydJ1B37JmfvqwLqCrE8G4grVBXkuQNDsiLDDuJFuyJwSnXZcUapZrPanq",
  "key33": "659qayKGv8SBKPsEMZCde6eyTLHZSDxafv7MMUXmGYd13A1DwU2dPi2VwacpfAg5HHv4ZSKvUZpeS1n76xxvGgTX"
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
