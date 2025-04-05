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
    "vhpEktmzh9WhVtQb64jS8KW7U1yrdXfAbBHxowjXmS48dqmic8UjnB9EbDFsCaXpin77zAUEvehPjwauLH3y3b2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tkA2Zrn8Jm5LbjVnNjYhH57xcPVnpww3KRkZW4LqNeysYPjSqz6Q7gi8A5XjVtkZhM6mnAEsqLP4SEifm3K2JyL",
  "key1": "2srFzPeHyYxt7UtmqF13jvav94ysqLEcyuLogDyqvT9vxevSTQx9qaWuCKws641tFMYrtnQHzeJpgMB8EgTwg7Zh",
  "key2": "2753rpaqmbGQoFwh5jpE3qETnUnVnahxgv43hayCS1z5FSP5Rgv8D37afKWeaUQMRkE4aezVqewt6VedKJNHw1dk",
  "key3": "2F2QNKMKDdV3mfrBZYZzC2Rf1yGgZSdKXW7Xi8vfe3CEtJ6VRWzAEyVCpBepmRxHsxgGKqnJqY5QE2je1kkSQQj2",
  "key4": "4Zqt26L9wysChew2avxgQ8jA5FV8n8ZibKSkRWLWzgfFQQ9osGgqxW9PyinW2GR3Jda6zgUS3YusKtimQT8HKDfT",
  "key5": "5nunxdEP1UmGdNT6dHcMx7eAtYMCJMRqtCPHqBvaph29TxrpT1uaJbhpxcbN8qgUnFV2WBPkBHVtF6zfVB8SFQpE",
  "key6": "648gxdZHq14fiV6GoE2vGebdTXFY8DSCWk6yNi8rhAa4dphP9bBFUDKsLyw48N7aYqQ7K6Fw7npkvN3UzrUqSAyw",
  "key7": "3kv6yVoxRSvnCkZGm5hB88eCMWcyDAr64qQAYQP4d7v8UjiPceArTrPD56TG7PNXNoVP69keb6t8WEPmwEt6aXSN",
  "key8": "5VRh8d2xd6YQnsi5UAvV2X3xXyRAT4gR2oJQWgVH5mGwFJ3WtZVicXR45ZyDmDkgsNiAmHZSaCjKs1zLLZgaYb3W",
  "key9": "3xZaovLm3GLNXCXq7QB3H8JkvSFafvL8yexAgCRCNASFXs8g3Um3rNdyeVR6eFQsojrCb1VTHhh5mdmLwT9brUM2",
  "key10": "2bexcqzhKfwAPX9SqoLuXnHZAxi6jNnkf7vEfGSzJSiBca2iLFSkeuw6jf7kCybVMioE8Xkr5TvaC5LFNvh2MRyF",
  "key11": "4bJLtVNgRypnT9DH2fiUdUnZ6eM5cR6NJXwFT8iFUw6UQargFZ9DCms5BvsjQQcSb5np8nz7iYS1f2gRwTA3JRGB",
  "key12": "FgnLtvFjcEArgD4pu8zLwaieUncPvsN2XzmhggMkcMe1SisSeCLXkfE2f5yyoNHZF1TGKvv37tRNNcNGCeKNDiX",
  "key13": "5oYkzbQTnUXpgsnkmXtUbkjLR1gXRpWdwmjUto5kLVd87qJqjp9yvfeF51d4ptUPNYP8v7fAR9iQCUGkMfR7Qy5x",
  "key14": "ukeFwTAetyMmRqQtyqrzAg4nWpbn1KJxUTgAZr3UsAwBQymgr7P6Wj7r6LKAXCW7FhusnTNTKDJbqwrgHEXpj8W",
  "key15": "5SjczEvRXANSRMe6zzMYfmqXNRHfwFU4rdJoL4kKuBoiUDn9T9bCKavUFyxZT29Azr6R9dH3nDyVGuBY7ydpBTQc",
  "key16": "2CNGuriyAJWZ2QroxwfJtytxvRsry8oLtCARMLchf5weVsbazeXfwxtaeMr2eZS19TmKA4FpKRPt98HFcx89WpZ6",
  "key17": "5zAeNTqTT1jyuPSVgSZregP4mLpAfoGXkm48WwSUazP99H16bWwZdXujj7oxbJQQz97zDjqeCpn9oF8bbhAW1M3U",
  "key18": "CP38ZGHHwG8VtTYRUuDqTWv7G2suxkqDNXsSbwniNABu9t8mznQVZgC4YSvK3HyECzNvWJRGpdbQfCZmQCjLQea",
  "key19": "3eB6nDRM1ax1sHgBrQZv5BVH6SHBQCXaNSnSJnJ2eXEPRNiXykHmqzubxwN1ex9ee52Ym852zapQLnjjqqNBHzhj",
  "key20": "3XFboCNHGcQC2uMcTF4v3VXBtSSRwwJhR4QpcTQefbEFhpct6toAjTH36CwxZH7bdxFQLQyaXKUFBsSc1sskB4eS",
  "key21": "5z4koScGfm8m6QmoLxn36UWKpFjXuqP75okGYvCYF25oWywoR2Fpghbj29SCRXM1Qe2uZvk3jrZdwp6qmRidKw9Z",
  "key22": "BiCsxzCrXyfDDWZQvEA6FRAzv2DuSR2P8djdtth6jo2QxUmAQqADyv3q4gsGKyNzYK4LNiLiXd1cUpvKkVao1WN",
  "key23": "5TZkbmMYJuYc71SYzxo6oFp9Uttg9qKkLD9X1ykkm5hHwFpuYy3P88doY5Y3kKZ1dDSXHJr3wHWu65jXStnAkY9y",
  "key24": "uTmXrDu9XJgJq3TrmWtn9Jg3xB5TT3WMX55tyxZKPAtEJ8n7hP5S5TTuA7BHWkfDosttcQsZHKPtqdTtjBVwb2a",
  "key25": "5E9VwZ9We9PrxVTUe5DPndw7UZwn2scrQBp3zg7Mydq6UfuxnMALnQGFxEMZb9yZdkUMQ7NK1XTaJE6nVu9Wo4y4",
  "key26": "4ePb9ZP1eY9sm4YRBUGmMjTBrB3pTt2iYpDiv5xprgrxxHMF3XCqAHcDNvGFbxL7g4o8EufCnVgwwSefdsTL6yb6",
  "key27": "3NWDTdb72MfdWYXAaw5ddv5mh6YL4yBoWtQeSXLHcNAhR5XLd1tnPffS4HcJezoiijASENYUnRVoLqkfHUa7UyZt",
  "key28": "2pTpBYXDrDJ2rwT34miixLMm9sPjHqy2gQtG8hfdu3JAdYnGUBcg9kUsqghAsywSfysagaiuB1ptZwLSCkyFUK5v",
  "key29": "3yp9t7D3pjrUMs2C46gsRXgH3g2HvfAJtLzgaAFCcPKX13PjgKd3irdkB9ZPNYfn6q2NWWYbtNThFJN5y1ByJ8mh",
  "key30": "3EtuTX1FFNdkcw9eQiKXBLRatHtayMErqLWawabVZtG2xa2zXFto8fQ5w5X9gX1MPv3XnARSCTNw4s8fnJphSHu5",
  "key31": "3gYCQykkWwg7Rkm4qqYZYcfoFiocCPUkzMkGJW5tzmCwNi74WqQQs3XskETJBUK78S1TiegcjhAU5JJL6C3dr5Lj",
  "key32": "346AH2jq6FmxWXL8BUMBwSWUs1fmya6BLGxb9nMbmsU8TWg2tJQkWTPEeNnYv8jxqw2j2b4Vg9bSqThjzFfaESqk",
  "key33": "5TULHHmhE7Zg8NDCzp5JYRzTpPUFKvNG2qJj2S1xJaxrTRhweKRuqHfhx6wbV6SbRH5BbNtvQPQGR96NgbP5ue1u",
  "key34": "4ERF94r3NxbJwa1ESnzCqZWGzNYzSFA3bN5Ymue6fdZ3LDZswtX1xNDGKRseVtgrh3xKPX55rZUUddfkBYnXzdd8",
  "key35": "GVQvRCq4RUC3SjoDZ24FbLTDyYNwmwPnePFh8TtBKBRzcF2WaSjYrPvFkrrsMq6MfAXaRhbk9Ks7WEk27F6Qty3"
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
