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
    "1r1cGEVQjNJnEgSgZ8uWatYtUoX7YYUpRsaKvYny4PDfma4VW1dQs7S9U7DrTWyHnpYchzZENWHwjw81DYuxNKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uPfX9xRXeDxXEYq6kh76U9WSmAoxu31kN7xM37ZzLZdQoBqqfmV7y5U4oFC8gf526My4Gapk166FNHPwp2DN1dj",
  "key1": "5obYrYMHX7Qv81i5dcuUkVkYsAhneVnRXsUr1LCJLdAZ77caQTWh1JxGj4LVmpQQLV5dH9ghYdUqPbUgxuRFEBNR",
  "key2": "2of4vaAcn5RQW7CJfwC1jMiPS2VrxHupjCkc4Mn6kqxQkLtQjgZo5j8hqKnDW5RszczFumNkeYLxpFbVEZYnemJv",
  "key3": "2a9shHcx26XVQNwYzCk9WG7su1v1gCsuCKCBCCGmF98RV5SMqUHhZiQq9WqHst8xTsCP7JuaoEtbE7QChUNegH58",
  "key4": "3bexZsvAh31UkaBLdQBdyo4KnZemjEGPSvYhTVZFEzvpJ8hT2dgaFowqVfMHC5n3vFohQzU6fB3bmNqmYh818zH3",
  "key5": "36QKT4413kQNGcssYH9gez1PtUDfbdvCUmZHL54CAj9UHywMVtMcrWxtcNJh2L8JBkHEPxWiYQAFktM6t2g5sdLf",
  "key6": "62L63UtpL6FbgEv22Gj3MHqMGtHrzFmc5Yt6s6Ne3zCkX32yQANUJx7zoNV4H1HGGEev2EEYGKiuumUehiz6vSo",
  "key7": "4vSpnf2WLyKjyzWJUsxrLREq3koPCQj9wiTpmVyZcKMYtb1JJZ9Cpc9iqfSFES9YKXEY3cySKed7zD1XF6Cf7b2f",
  "key8": "5QxogUzNZYRo7DPCeryh7Hb9oDfUjtNFtH815oqfpbZzv85BMSxMHoCCYj1T97nptVwj8feyzfNmY8VnZeKJRF9h",
  "key9": "9XTvYt3kDDLMF4tjwvQRK8uFvFYNUxNspjfgCuGt5gMaW1sM2zRhJMcjGuGpX5to3XGHUxoT9mtF3TEM4bu7Uuj",
  "key10": "64mro7i9mitMNdHmBBbdghErvngpudq9Z9VBWMrFfHUvQGreLCqYSBPFwgP3C4TzDEguCDT4m9Qif4T1yRa9VChr",
  "key11": "5YUxwHTr6EkPqxvvEe3rEHXDoUs8tFMBsTw9mpPY6k6YcyUqp7oqmBhUNQpW2e4bRJDDYQvuJfDMEd9TyqCF58zq",
  "key12": "4qm6qdd9dakoGGtRpY87DH2xUMhJPxyrMvAUeDgs9jsnwXz38zhx3JtT4sPbm5dCGW1KQgCAzujDyP3ZRFs6uZGR",
  "key13": "3AZge6WeVCnE7gihVKURdeQpzFMvbU57eK2jKJWmsnFkKAmE4btNzZBzWBhrdqwAPT7HcHXMXsMTByvHqgVmf2nS",
  "key14": "3TG2aZ1PohUVJ3QnmteJBpeVsfaxuFJXFeb9PL21ZL8YMTTSfYF21ka7ieXAnNkvujdBnHUCcgqh3geR2672s1Go",
  "key15": "2gmpCEcbCuesvxeK4CyhpMXqiTL2GLCoRr6PfBbF3euaxdSvhJPGbtQLQ2uajDxuHvyHvZuu4a2PurPjpLS4gXRG",
  "key16": "3unuXME1jmEE1cKkoCRAvYy3Equ8NwauuNpvpsWKvemSCbEKNkbyZmHUwyEnTxt6Xt5ZFs2guKHu5eFaRJ9pGpkB",
  "key17": "4ZDn2tUcdEdaj7zT11hcX3Wc6u6o7v6MfSyKvWsbNDKS793eBEqT78X41JM5i4UBGebrSvT8FdpregEqq5DSLQpA",
  "key18": "2FaaecWhRYcWpoWCaZ13ikwNKb3JGCxXn5vh13JHxavEsGTA8aSez1BtZHEqSnM9gcPx2ZJWwSJraYSBas3Zu3rD",
  "key19": "268VhLvCPZuisDCK5eak9uzcYsesY9E1dsR36xXJbwCMzFEbMGP7S74NASeTXbsmE9KCDrWn6CdENEqmLSpaxtGM",
  "key20": "5mNLCZnRzfiXLeMjhys2VRHrUD1nhtaBQ27XjxDRiMoCyjZiBxGLCGYpeuYpMCDq2J7TVc8gKTyPitnZNkFXC3aJ",
  "key21": "59BPaht7ig3nZBWwjCfzQT8xyWwNHCKWkZhq73H8oX75TvSZGd3RZb46DU5mdAXBm1mYM6azHLxDbMSWU6dcdRM5",
  "key22": "5jNtzsFbB7mT395AfueMfnHrd8a1uLjguEf5DuE9dx9K3zsgKeTxAwgvmZBPsakjfbA7qk2ytDbUQrPoZhNzFLf8",
  "key23": "3Z91RSrzXDWCjd94Tc3aYdU3UidWkHH9epagwknB1V6UDKZs4CCNAV9UWCsxozXMYd4EvGcHWJjhpNU3Sefc5Mwt",
  "key24": "4JZEEiWLnCrPKJ4AAHEkQHDzfNfgLrg86QXSHafsN9uDjPbJfmUn3vPTsgwZCBLJpKgPqWt1qz2BW73LXckMoNHG",
  "key25": "3SJTmr88TL75FDncr5fCdtRCxyQ62Uq3HertZnB39Q2cWCbDKt8SorPoFtaLP1AroiNMsmQTSMwETiCmdhfGAb96",
  "key26": "5QNCf8MCSTd6VZfxR1cfhbccNL8XvjJjdSNV7p5NPNGrgF3kcNyZCZaCgaY7gjBSRHvyda1u7okm3RBgyH1v6sNY",
  "key27": "5kscegQ9Vtc68CMWppJcxA6gEhEU31sAbZXzNgb5N6d7Kan8nCWVjBB3YvReHW9FM9c5yVXvZbQPJhjdGzs5f1Zz",
  "key28": "3ykhU8kV4noEyKDG21KY3DABfsGtBax3t4FfjSijE9d6CFca8vzK3JUvtk8wum6wiS8FDrLc1GsqHMopk7EzoysF",
  "key29": "361u1yuRyCmVL6MAYfn1b11dnzeeSoYa9yn9MFKfiTdDSNp2L2qhTw2EgE7UGMA3Y6DpBSHwTKkHdUZmTS8s89MR",
  "key30": "47sTCUqJioRhCAj8SG3h2a2XAZcDdJJ2g1Nffnbk4K6r21kBHGzrSFM2ZUf7fWG66XPzKFpUNmVn1RDqE7VMdBYE"
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
