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
    "2678UG2NhSLhMX85ZJ6Eh79dP673m5h5XPeGYgyDV8tW4SpmQRMNB3AmDxpmwcq25cgwgWp3smnnDzsXHkcNFar2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DAEgZd2KHAorpQRkyhErAFCYZEjeZZQAbhC6ACw67MDXaHZYYFxqn9EF1Hdtd3VuRvmGABU4uvytokmhR3mxXyb",
  "key1": "2deybhe2BoNyvtWoXxZX4ZWuC8AhyHCt1n8VejHyKrDCUo5humH18PUh4Cg5sbs5x6wXrLw7zgL9bFA4UCoAk3p4",
  "key2": "2psxNQ7wJbAkd6SFWR6AcAeHDJcqWCwKQf7CxFULHrkAo5ZPGa5dWyHteRZ9QKxjzPBFhhuMsmKib7CLbEt3vgsJ",
  "key3": "2URpGDBU95aFgEAJN3j832ovrdoLeK9d8bTSBDPoqUcdoVb2Nq9EFCVjD1UDcQreFxBxfiL5urBAtk3jLTTPWAKW",
  "key4": "GA8kyUaSz34ek23ch4B8NyknSG6ZaNBRDpB9QCNphtE2jbE9u1LJGhTUdKaS25jjMyWtGDw2wC8dck7xY6fi2G8",
  "key5": "jP4ggMvK2i3SLoAK3PAe1YMFZXCQqCBMwu5NtFgESdRMtAFyVjFtetPHKiv6jsJEVJoHfKapQ1pPeo6m3aUqrBH",
  "key6": "2yqq5xDTwPiVD5TGqN7T7xDqmgG2wZNLza1R67Cj2CFiKVLifPVDK64uyWcTe1iQd8owsM66Bhe6xRbg4c51ag9s",
  "key7": "dgvtKDQFsFcEMiuxYUJF34Jd38HqzXwKVjRaNdyDCexj3HJtrqHHunbyvPhaiYBr8E1QQ5r3eSkCgoguavmfz5A",
  "key8": "2BB5Uo2cij88DsK8eeudMF8HPXPvKyyGGNZEDSTFTVpigGubjze2muBAvvsZ4bb99jPyGxde4ewYaNcLCSkPB12V",
  "key9": "39TkzMd8Uq1jMPotWNAVdSo62LbQidntzmzC7Z2hbJHxefQSVZyhF91X5CAyVoxwLqQuRfDrjZYgJ5yUc3nN8ooa",
  "key10": "461hKud5dEfnV7SfeqtHZxNfSeijJW7y9cngEzkfmJWm56RX9FsmgLDXSWTk31YD7jcxDCge3FJSVVhexKP3Vj8G",
  "key11": "Xjuh1TBWTGu1uFUfaSVqBk36aVeYm3jn1JKdXajzBNdAVjvyoNyyxSEeepqSRZT7LzuDYVf5zwh5b3dFEorFNaD",
  "key12": "7ifthf9TdFBjhbY7NQACFiGpBJHuRPgNyznmvYVahDEABrJMWmXBcNWzFxZ3XH8HTLQfCgRej9X8Q2xboK2ycza",
  "key13": "36GypGyUbPBWX7MRV4kaU4JnEquG7ADbEFgbcrxafFwXJ6C9qQupa2Lg31boMitnAQRGCF3PiKFA52mAkBCxEf5j",
  "key14": "3ai5ZwKztmzHqwQMSyqb7oP6QReWr9cRo98SMuDZ6PAXdEgLKvswXyrBf5tt5C5RzSq5zt2CTicJFQMLSbxtq1cq",
  "key15": "5R74CfdzDvKLeSUu1fr73jc6wUrfwWYsZv76X2PPgyeRoA54apkYLDF58oYNHgRCPSzQ2yyQY4et52ZnK7TFTyCo",
  "key16": "2R3JxDYZnH538n8ZGXMAg9AWD2W3KfSFGeKmfLFGUh4aJAJKm1FAJQnTE5kcEMG5Qzttg1PNHUwg9apasnd4iHjJ",
  "key17": "oWVoTRj4kfK3GBznPfGyxw7dTo1W8mGpS3sH2eQyybTKAJGmgnugpj4GiCnryGaA2GcTVYRDh9XYJjFdZyS4Yjb",
  "key18": "SDTdf4kXQG5RzfgPjcDYDLkDtr6hcsKWa5DWaMaiCDB8MuJopXzpck1gZZhGDMCB5Gn4ojCo4f7HnjLs4VDBmm2",
  "key19": "4ZEZZCCL1Rb4FH8ttKxhzSNR5pxAr7j6HHEN6JegGUDRH4RVgAUHuU5j57QeA7pbL4J8pewcUX5LnJty3WG2uBKP",
  "key20": "4TmxcHPy4SFHu75ufmLWhSsawCaszcVuDVVt4DiQ2ci1cCqmYXrmUrnUQF31pYgqWDwSKff7Seaicw9MsmhgYhkJ",
  "key21": "5pwpUyJ4ab7cxnqx3iTQxvNTneX51BcJXrtAFXKbjJfmuuGSo9iWKfpFf9SFSyRBsLz4v6AhmG4Y2R981WaVWyxB",
  "key22": "5iGbkKj63RRNqfnStEdWqUFp7XbhK6Hzz2734FnvyPCCiDc2rL1FfYE3sgUkK8XtEpzCS1fwaP54ipePbzWVYFLo",
  "key23": "4cW4FGAMfeCiVdbD2zphxstuRXwPogjArHyYETsMVTKUR5keB54RLkhbPF9ezrj4Fwv2huxx8K31nS8HvCGfa1RR",
  "key24": "5FZnJ5HhCkNZAoe72RM6Y2niWJ1jtCjXJ7bTa1sfp4WL73jFNVNr5um7kip1eNkwFG5Yjws7e1tD8qUBovRn9JL8",
  "key25": "39Sabqoq42x4eZ11eNnkzeNpQesLnMh6tkEHV5BUSyMVS4GfNWzJy6oEGmryjbVwZv49fujA69F6NvXTaJ3rxKt2",
  "key26": "47BdiyBBQniz8Sykby6SZaDSv2UmJfp4jHXMSaXo1EVbaXdbwDX4p6WPRYj136JJpvEc8gNvi7xbu9FpVEBLS4R5"
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
