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
    "3BgVym4Xry1xD49icjjcSQrF37w9botQ8GV7bhMkWjVX6r5cupyCFxXnvy16Ev8pFgkrRigxyQtCBZYLNYiB5rKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SiUbCEfRmeGAq5mQhe8DNQbEFDMJqkTAXPETb7wHGBdxGnVMaUCs3EpeMv1tDojevnS3WdrP9WnAvPcQPzEjh4m",
  "key1": "5KkGNLYkSe3Z97nJ99ndb9jmerXAkUGvcEoWpdiA66QJNrp51ywyGh8diqgNMRDcxzNxQwDtcNmrPjz9854uoxdj",
  "key2": "tPNZH4sQr4cV9e7vij9JJ8sme8mHHz3m1PFyLJwTq77bgicmN99F1kzhJPT9duemcD7kxacsGpMUHnnjCoJHc8A",
  "key3": "3V5wFoqyWWq8EEzP1L619dtDRpqXtcmFuvQ7UiE4zy96SiZZ3GLh2fvGQTh5uqGNqWJTKbKtbinaF95HRCw8PCn7",
  "key4": "5gvgPhGtkjrJ5Bu7WP5nou1XTPSn8vRpsY48Yizj8cGFsigCFxueDRADcpuH8SN141FfroXMo8giDmMYRT88G6X4",
  "key5": "3yVo8KVC1Tb2DAEtqqtsJMc1zyd1KNwock47UeBcVst8PBWYPsedwaj7mUR4afbddETobX3Jp3PjQBNgRvzaLFAe",
  "key6": "3bbjsugfxgGA3nrSgRpC4PAFPekRQHGHH4zz9QZuYuFUGuTibYUrCeUZBwx4qTpf9BSBPMfhtuxf2mti2qmnAF9j",
  "key7": "5UsZxoQ8Kk2N4BCPF9oXypXHQtM1xzxc53QnvJUiNLTt4Apm4mgjgHLX9gqefLZ8PpZAKaxq1GSrmD2TsNpNuB4U",
  "key8": "2QwdDQ4oR1SJesRMahq9P3GU3dTPuMFBaGUgcCGga1Z8rdkvFmh6LAdKBq12ExYQJ61X3JveqkdzH9vvgB3fkKKU",
  "key9": "46VjJASbx2xtavi3gRkGCmeqf9bhgFeSNUn4jFHUptMuJWkzHhCnvwhZnh3eoA4mRFywhqEFy6CEp9apQTDNiCM7",
  "key10": "5m2z5H6Ksq2wCy4Ud2YWKSuuNa1UHbWRiyhxXJNNa3mLiHB6yUVjLAjVPd1jMb7GLiss93BjSN4qetKQ45pa21Cq",
  "key11": "2veaXx6NXgXHTXy2B5rbiu7SD2ZbQpeBmZUufKtz65uUwxJVoobr6yz6kbEHzSSBwEq7tDpaUTv3SN92puwVcHib",
  "key12": "39TyEaWN5PfmCQoPiPaDFXk5QcPmyQzsGqawN2WLvqZHhvzmfiqiUPHV9XoeFuLy2qeiprVQTEt6AQSf5fRyZbYw",
  "key13": "2ME4wDZf9SLjguxzeyrQpRbbdNS75RzGxsnrP66SxVdFNcQfix5mZCnPSonjN4MEdZRiVTf2AMxiXX1cLAAyGz8E",
  "key14": "2wd5yaYm8YcEc29ziCmDtt8Su1qnuDWC4xgjs2uNrkeApNQZ7YyYsD7WwRBSJkLk5MKD1VWaiLYcxNJJq6jzJ6wb",
  "key15": "2g381Dr9wMrPkyFHVAqWk4FxNDys7rxxbx1w7cAXTgtGdt72UtLCdPAjpt8USGAqogRvffZuN1Yep2X1Vjti8YPD",
  "key16": "672qaydB4o7g1DUpLTLNahPmyajz7FuERkBpQiYbRyUZY5tjrGnNN74KJgSer5hq41McwgXBs3Jnuwa69Tg1n439",
  "key17": "2cByem4QaSG9o9PWPhYtRe6iTcbR4HRXikzHwLS9ga5hp2HxQQWKLYqe5N61wUi4NjFsBkoZEQ9Zs2jYnYi3PGsf",
  "key18": "FD794WyVhoocaQKK9sZKHS5J38UjwwNpCkg25Hd6JNUYgBiChQbnKoeGeu25233YCYDuZgb2pfThFgT5tvrbSkR",
  "key19": "qfDv4Edcuh5SR65rw4TPSxVmvZzgKpQ88Z8E2LyN5JY8rsUw7oyBLkG4e6HEFXQUmMycXTRcDA5w9JbuJs4PH86",
  "key20": "1jqLNp91nhgqEqAPzGmPSEJyufPeqT342Z6e1HZPZSrk6ZakvgmR7Mza6j1bGUgag2NXEyGrDTStHSQmQDXFZYj",
  "key21": "4TEQYc9ZGBBxvnFW3RhKfrJcFxWwgbGBp77JyDh8PAnparA2muevhgCjk8iVDD2GV57gGtRw3T5LuCcBz87tW5j8",
  "key22": "2UDibMBvX2kM4oyfpT2xuhsc619x4CqnS4DdvpLoZ4SVV8PqTSc6G2FWTSkuA3HB6wS4QorbbbzoBB2mjwA7MbMd",
  "key23": "3M1dYjwA3APcLJttDMjdor9pLYQYJya25HA7K8z6EEqQhZzPD47qt6kXByqctrUqyi5TEASM8HA1Pw4cP8pGShAk",
  "key24": "61356G6GETmj7n6va3AjBjvzhcM3FpKVkRiz4GY8uWun3NkUkSqUcjyZDLY4UN5oo9bdUsgSDV4XeUEtkbcrX6xk",
  "key25": "4ViJWXpod7cFkVWx9cAwyRUy3sY2BgX7Q2w6J5TygTgTXFJVMxR3UY6N76kbN5JsukvforHdYoBy1bd5ZskArYct",
  "key26": "NhwtGbvBccSNFovJSBcyAjZcVbhAzHWSBZGe6FkXov3JBxM7V2xstMG8CMd1qAXkocmX8SqWvnBEhm2y8o5NEz1",
  "key27": "RGEXYp9gFNpdpPHiojVFthpxN1Hy2NqpaXqoJq5y3LhyEyAaDxvVF5oqiCGD8z2CkSTVZwR9yPhrBixRwj3JaCA"
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
