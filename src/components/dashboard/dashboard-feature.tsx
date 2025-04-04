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
    "5W6SQuBLESnN77MckDPEPSVuehGZRgon2nWdPbd1vZqHSB1R4CLsEVSWXTnDUa5NbicNdGmZLyWzhbemjW6E5HBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vbBfuECXrWmuXkdk18qCsjyD4D3b4SyV3i9ybRUotJyt2EUzSeJYPVHH2ymm4MoJnX9ewYNqN3FGzqFrfudqxT4",
  "key1": "5WfV3k7TqDS9LXU518feXM8RLB8vacTrsZFneT5fAqzXq3EFDdmX2HdgotQfPc1Jmc7BweYrFKExi21gsk8QXmRN",
  "key2": "284PNGXkcD7mHS2VasAY3ZxYnFivPXF7YfZNfbwzAb35ubUjaNsjrdyt7QRwpEMxboAucsUDSqVnTMboSfnJ9GKg",
  "key3": "4dm5vjy2jvkhxjETrAp6oaPR4JNk3rgpXK9J4YfhuGJ9gxU9w9B1WPxzhFVKm2yhJskcQYZjpLBDdq2JpVMuxJUb",
  "key4": "RzzVWWtfVhdm49mgSuVbGh513tK846sPUX8aSfStRz74ZwaockH1w5ok6YuYbaeFK3rUp4EVTd4ygVroGbSzPwX",
  "key5": "5hAqXUtX5w5XSnhQzk6eKzja5ahT3CmmzoniVks5wiRk45igevhDWcyZVX1upa475PP3FqrSap7WEP6jjuh4jXy6",
  "key6": "4P8PZsmJTq4CWiG724w1AXZL5FDq8SyRWvnJokceRJf5e3P4LysAtfWB8aqbEHPPWXHXuDQYEm8kintm4LU8Fntk",
  "key7": "2KzTJFfwWJpVEc4HZFAzkAzEFjAexH9m884FjyDP9G4RfQSZg8oNmFsoPpYxvEuH7wuHFuMWwH8Sm2Vt7fdBXGNp",
  "key8": "3KfhBE72LeFosM8Z224EUrphbKqJbDUJzDtCCmLmGwYHqKqgN9USX4BdC9extTDsYS68GXcUCqoiDK9k5U8jhGyG",
  "key9": "3dwXf2i3pCdQdam7X2wd8PR1GSZ1egtSDcrjxUJsGAjadMPMZDVax9WBoHSd2cb59vHmCuLbpHufbHuLA35RWEJE",
  "key10": "57LhZSvzWMSNGfWMAA6aCyiwofvZMhbdWKQboqwSj1Mw35QVv8djbUJ2JdWkRBmngUvTgkGmd3bsdFoTqZJDSHma",
  "key11": "5VsPoawffnvMXhmqyrRbMYbDARdear3tu56z398xouU2pyTBGgRzcBeJJWRdZN8iztfGo6gQDQZ2rU9jRpYEDTq8",
  "key12": "2fNL77ntJ7hBWNTNgKB5L8mqN3KSFHCj8HAGr11FKc99t7ZF4QWScMkBzBCTXbFc5SP2o7YTDUi2xZ2r61Bea5bs",
  "key13": "2Zk2dX7K5swRzr6aU2o8deyjVyD4BKXRmcx7amDrP1DcXgtzt5vxa4WLjtudoA68TQRh5v4hB1sD2kx1SegLPN15",
  "key14": "3syaKnUjQabaGQ5AEYYUwPk6WGbGWpGEzzjXgU5WASzFnT5sKcfMAy5Wpc2yFz2upqZaRyio42xLPbjhUc5uuSVP",
  "key15": "42zqxhytr6qNv65m1Qr8e5Y49z6wU2u5BL1e2wx7RA4vqggeirfk6TK3VuWCCzSLGs8ggGRA5aLE87HP5HqbF6EJ",
  "key16": "3XTCtuhm4Sm244KDWH3TVuwnoEvyotn5j9Rw3xzE8nY2rikbY1nTs3bGACmA8MnJseSTX8oyLuiiNYAXPUuCjWJ9",
  "key17": "rdseYrGsTxLWwaE7HoKAKJpGXUHbEKgrNCYpryAooicnWLKH2Hyq61skPkRMpr1rjTfUcNZgWUqP6sj7eCikDew",
  "key18": "3RrEZUVHkpcNiipe2bdt396nHiaXEaML4DoW85BPw3ekmb67WLLRrGuQKBqTA3cno7hDM2uia2AvWGW3a5ydQLCu",
  "key19": "3D1WY8pUoTEQGEGxB8YpiQVBBBBkus2Jk5EpWDDYutqdHoC3UZuBASA6bBna6GwjXRot4bNfwbLJkdfHbX8BfBEw",
  "key20": "4MYJGVQZbN3JhjBrjNfPmpos66WbVvB8triT2cmwFW3EkoeBswY764YXMnxjJDn5MPN7djc7pLAsoXpAGtaSjh9k",
  "key21": "5VHQ7CNdnkNpGafkmxKa2kN3Go2dZmSmzKtQGKmJmN5xBWsUtSh2jfqTMZpehAcN16c6K6DBr8GN2tb9caW5RoRZ",
  "key22": "4oFoz4mHZehaLTECnZ6tDVtE7kxz9PFsK4dc9dYocKbN8nSzLbzCzc9U1Dsi7dpZY9u1RA8a6J1aYPwXwTNS6cJv",
  "key23": "ZAkxo8wfTx9eVwMRTDgPCeH6qEvTGBWQuttvVio1faRVJGV2JonJfeY5FrjcsJdpjFew4FSeFd4yXuxnMHj5gxQ",
  "key24": "DebEmbLGmMx2i87WZAQpHiHtoQhWebZ5vnAwUrhh4VCZ82EZL6D34NcTrn4FxHSUSXeEGAi4NxKfV6G7SpvZKyu",
  "key25": "5VXejLteVdNt63LQ9EN2vyRdDLGfRXaqobwpQ4c9dH6eWnxtuK5SdKMDFFfaMSZTJTUMP7bCVNDRdTD2GCUxA3Y6",
  "key26": "4Zm3MuyCrDixGJpP8uys8L7kUBcm5SQGBGvLjs7J9savSca2m4DhFcBDKENv9xnCPVgcKisrPYvyRbivyrXfgPud",
  "key27": "5rTNUjZzKimh5Q8cNzwK9WAXjNbTDvvvvcKXH6VoxJWSasCRihPpwoNXQBa3NbwU3AjP25PMSGiwHvDLPXHAs2Wv",
  "key28": "25a7zxi3dQwg9Sp7gBWXfwXixHQd9Jib9jvyFkBTYhvZZymhxskgs5WuoF6yz9Y3r1yhi9Jtuys7SwdJdcNk1Rzz",
  "key29": "3Z76zhKnJw7TNWcYKXrZaYG68YTrp1PMv6TXhxuBcZKREi6YDpGAcrA6cLxs46E8MvLqEg7iXzxRDA1hYVbciVXS",
  "key30": "3pZzafFrsmDvmXzBTC66qM2niY4Re8hQcE3eKKDRndHAmSrLdJ9o2UQvVV21ftL5L4DLabxS4zTFVKU1zAMMXS2u"
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
