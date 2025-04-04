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
    "3qTfFMQcEsbNQdJmzRXWsz6sfKLHdXuPPPvKUEZwa4pHPobYE6MM4sKeUdXyFeL33YwTy6T4iz3AJ4CMqN2PxjFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VFTYkdpMKhoDtXcsN9GjvnWhmZQhaWVC1DCCJfLb3NddMukrHqay4754Z1iXB3QDefjQuMsDBwaV9BU8atRVjs5",
  "key1": "3HvgBKDNifsnWduwZQEpWmU4uQPVPKW6212W43HP1eHaEXAxi28WpQLDYQxiR5egnVyNUNWEQynCHdDgm6GwXS1U",
  "key2": "4mV3gjsorRwXEjQCu5U3JdHvxdd76YoFhw7SEYMGvvbmzaUtMJmwUg3J3FRbZEC4aCWp3iFzrvbLxUpFqhRTyK3Y",
  "key3": "5xsDdbHhSBepRJFysnmZxGo2z1WZnVHkwJjcWLPPEZQ3tSaE3s3cJAY7QUx28TxCiF55Wv2yjNwY5HE19zt5KqN1",
  "key4": "4taCeqJ71NDyC34Gkv93qdy6hApQFT5dyqZ4uDNFLEsfGbLtVo3kBdncH6vwjJPoMHWySzghGKZnNJJJgbGvuuzu",
  "key5": "5AWMYd2RKEbULh1pLvNkfuPe56cQDiFytcPxV18qWxL3Ev1KWSJ4GVJXuWRa3Bfu7tkSjdTBsCN62QRPnab43rpv",
  "key6": "4AVtS718hQp2pmXEbQnYVS27rm1ny2nhTRFerPxGup98NE1JxBoUmDkejWJu916iX9WhsQFpv9SAS9NyPuzsmsKT",
  "key7": "uhUFy85j2yM46RCJMUiodkbDWaybM845V4PhyekjRA5v7SKAkQGYnE1BQMd3mhThtEQJ3gzVrXQbrXseZQuUS37",
  "key8": "59C6jrxCMktCvyLFZiMR8SeUJRsx1bLoXYVKZ8R75scyPnfDcQLYusdKJpCaJQd6g4mukRJi3YZQvbuhwUMtUDi6",
  "key9": "5aPeYjgb9naJ6wqRfWPzkHPfqVEi3b8edP3JB1SPMT2nC1ZnXYkA7D2jneZAp1MK93eqR6uwSeefPiCEqfGPWe5a",
  "key10": "5VkZFDhnXqqhWjFwRhZhKv6rkj3Qf2VyAhnB4AowfGHTARK4g5ZH7RzKqkesdcMACegxbT4fL4vxb6DwVF2Kgpn8",
  "key11": "5Xfb6sRiy8UrmzWdFNv7sxfZwp22P8zUPP6yjbCxgGpEgovWL5658XsF4aRJ2Cie6yQAB35bYsg3y9gUAB3hb3qH",
  "key12": "3Nk1XT5w9hfhxwafJd9qTRs537HBRvR1Wt5ugA6J6o4oiwj61nzSNQz4ebW5WRqBibDwyKe2hNHXArwvGQLv3sU1",
  "key13": "3SuEX7jcFwUXGFsiukvx3pnXEM5gi2FsyQBgZ8yWbGLC9rhn2oEQdhsv2AWVWCmJjgnWYKDKqbaiP3yTaPDq6SGE",
  "key14": "5CVhhEcbkMVQN3DZJJL4gVNtndRBeKKH87KJzaSKrSPe4gm8sufv5av99St9NL5bPjbuoYXHYK5vXbVwyqHMsEz7",
  "key15": "4YzrhNenT94fndALJx5uyDsMxSfkPer2RX6kJZ519rRnrxw8zq84XQxZ4FqYGe26eVhAx8AFKEZufSXEGykHAFNG",
  "key16": "vFJA4ibYMU68ycXv9TDdgyWY241gdPGpP9qZeR3Kx5CT2W59wbWQBkk7DWTeiV41GqdG1csEd95rSrnuMFseswY",
  "key17": "WXL9iBBzkBNYKjBPQpvmXdRuHSUieovaKWLKnCyNRyoN6A4cFMu5eGUua4aGTPR84DU1HZJtkeQo5fT7RFNxbeE",
  "key18": "5ZnSqcEqkAGj2AXQRY4CcLrtCX7dAn9K8AdCuUkeFGgdBYhRxtQQs5fmEBToXB2PtDVa3odPB9LLCDcQhKGVaV3r",
  "key19": "2T9c3GKsEumuwWms2CAhpwVG4djssfwJ7JUBohpXBtYdXi4naqmiBc42iFyRRjJWcxdZU89BWjaP9vTo9Y5JAhwd",
  "key20": "5cZC5j7micQANmVceK8T1AoBsNZtcxjXqZeDRKxbDY2yBTxMatMrRBDbwNnHUJ3XtfeFuCxDhqmbK1gxNdXqf1hx",
  "key21": "2nX8j3zhDZMXLy9dQxZLAXDNhZrCnE3BLHhF23HHxufjPYNDMXSrkaGbP3kq5Dghscdv6JRhP5tEUXrBz2cA5bX1",
  "key22": "bzWR9Q3jLz7BEHTs8cvYHmJCuUxSK3iZamfxCw5VM5huPvU84ywUvhGxHE72QrR8KD5bw69YyMPfAumz8PxV4EC",
  "key23": "mh1gEBKTUxQP4d9bzHJPgaxFuMULnVqh9YLBG7SqDctf77wDEH6NADMvv8KvekPRs9wwbHy1aGWLve9aeB4z6Wf",
  "key24": "3sgCfgKxsYEMfZNhWvGAcqPxPy7q4rMFceuHXpoWw2Di4e8iDsmxems838RPRoivZm3Sf5ZdPcAHiBHowSoDy7s1",
  "key25": "48L2wZMcuFwvfsv379e3VNkNb7aV2aydhPqjtQS1FEmzpdnNdJuHrJpyFKP4zV8oBuWC9F4MvAadw1JYFi8oo8on"
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
