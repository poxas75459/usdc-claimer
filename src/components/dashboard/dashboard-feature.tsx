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
    "K1hABzVFJRkSozfK5EQNXJtoiBNEfvFP33z6tbhMNcTpJAxdN54DTLpHqcXi7wc8pXGzXXv5LzPFZrdgF8tm7np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dyZU8CC1y5pKi4CesuaiQQw3fJG8mecC5TBbavDPHFs4NNfQ29DNFrDW5fSe6efAigV6wK5mapiAv8DPy3wo2Ns",
  "key1": "53PkCZmUrtAQcG6iMUs6kTg1X6tQBzdu3zoS5dF8roD6H4VHUifv2ryToegLjzsUgovMvuecvQpqw5yRznmoSUMR",
  "key2": "585AgNe7BAojK5W11D8u3HLuX7sHxFNsC3UmkSJKBkcGNmpJkG2tmqP7rABPJHBmEEebo4PNu8NF9wP1ETSAAHG1",
  "key3": "28yGF5xXmRvLSjV35SNKBLn3wivnKZgyx24SkpX4fsrExtDHmCcC6zhS8sxwhWii1eXgq69q1xhTbgAQLrws8k6i",
  "key4": "3jQRoUufSe2EfcN4kmb4JKK9HxdwCMo3QXSfgRz1TjichfTGei49oz1jy2kvu9hTe5ejLWTJEBuWXhB3JvG3VV7S",
  "key5": "35u1HLTXfZiH1HySoBcES2NWbxh1RQpKodVXUvVrpY6BjUsm8smcmkyLzYiaWy4iejt4TuCUkpgxhhmtJp9LTFxn",
  "key6": "2UN4n5JcwRjoSPX1c3Sa2GuCzLWvSgPy8XDioQ2Xze1EwERrzAAozfhe7A5GQ1fXK1w6BmaF2Zih9FhYNvUxTsv9",
  "key7": "5siaUCNXyBHFxLQQssTPLkuFqaUb8UmFuCbcQwrhc4wMHRU2w5vRuEbHwCCTWasjv8brcZhzCPBmW7FMB15h2SXz",
  "key8": "5S1xRgrYChpeSiJLKqQ9Gj6rpDAdTccqnxSP3uzZeobME7jf3wkXfHxPcZ7s5NfxreempWXbVs2cwGRhXyTr5nKq",
  "key9": "4jFvAwqCA45xg7pjZc6ncvpnZpJ7u4jis1RMEFNnH4NMuWTyMDkfoMke5wuQUYtzdZaEdBh7SNxQXVCzfjH4ygjP",
  "key10": "22E1ViCqAqtooZe67NEBMj9zJ6LgM7ADsTssPRzpaWLsToVMHrVbeyBoFz7Lxt7yZNJbeBmQrz77L7gHXkSYvCmz",
  "key11": "gKVSfTsTsnxkDSkfWdjbqFFytmRiEuxvns9aZkhDr17GesyAWARckFkyJRgurLDgRTvWS45KTgXdniF9tuUSnmq",
  "key12": "4hSuEVFUKps27vembKmEekgzMjdYTJNFgDntrZEinDWfJwf5FU6fVBS3C6qDwSokPXG3fq9autqXeBwA1HFi8ZK9",
  "key13": "2Q5dVzbdR4vn7r8oyfYgrrumeKLRDsMJt6Gx3TfXxadMUGwaDpJns9t4DhFvWqCVAmouZ2EPeE6nd7LzXwoK12tx",
  "key14": "4f6idPrZytiBZN9Gk5EiuENhqggh8RHpMkWvQPtFTYJBDsh7e7WVE1AK4PwPs2y9NaqRkheYsJmdLXNbsL51LX3o",
  "key15": "35H9uy6skZCZMmeuGaxM28y5MHQRCvtkmUgtBGBDCst3TWZZfVPpGcrji7EDNasBc1UPfWpjLZEnz7zFv3e2gBmG",
  "key16": "4D4hXH7EsKUzqxtTiW7VauaM9X2PSzbGMqtxSCbzQj4ojeFrV1ibAJC2uyC6QA7nxBuUc9KvT8KXm7VTCAE4vVtN",
  "key17": "63xzzLzbsmWC5HNbmLWb36vnnmCZ7qX3SXSkdToapGAVbs2og6HVkjtDEXLJrqLjVkhrCKjQ7uKzNhLruLiAXtfa",
  "key18": "2Vx4MWtqodw1jnLdEzZZbEbqQF9odHcThx7PGL8fA47fbybDrpqtvtta4NypEDaKE3BszgceACNjWmSk4wkrjgLU",
  "key19": "29eG4CyvqeFoyhQn7cnFSy93RA1dcQAVX1ow3SHd59hZdn6kJgaFepvJAd5rBxu4n7CfjxAE4QpmCNVZmbt7eWJB",
  "key20": "hCHsaqTnkk4hdvP7udYYoNVsWAToiVZ2ivKF7bxpTHfseY6AEjhPVVEhLm77R2qbHiAfuTYNf61d3QLawnWjDGM",
  "key21": "3ZFNVD9cV2d2BFcoKwNZoS35nzTnwbznZ98b61FgkJMa8LA46D2FbcRdq9RX5VuSmHE2SGXvZkab9JHc2r2TyyZW",
  "key22": "2SeG3zczzoCQZowjySX3PyKZZUGAoiUB2MGYHf6Dq1BXk1vrZFb1FeXo3i2sedEAgRmVKKFYcYmJMMW1PBm2sqUj",
  "key23": "fCXQPGH2EGsuq9yU2QUijaDjJqz9d1P8cgzn4ShWYthLf5aPyZ9sknqw74xNdFi8ifninRgq8AGT4VY5AxCLYYw",
  "key24": "5a1T8TQGNBdbDJuwnqrGTDVW4pFxpHMUdYxLsGJaKGd9zFBTqFV84AgLNetU6DoXWHRt7ng9M3xwE4fqZAavATqc",
  "key25": "2SpgvPrhrwmy7HDsNfJGdfiBoeLx95ydstUP9zmk6k2QFBcQQbH5Rd4xZWXpm5aQTzpnJZgUXN4t7mJjKsVwHMPY",
  "key26": "2cbqYXyc7ScXf9YYfu7bmjrLAJKEdob3fYJYwdGRGY4jbVaNxQNEWqTzXuFTXrRUhhRs7yaeUmU1i8DCaykZzbM6",
  "key27": "2nR3scUuRfUQ2ycxeYeu9rWLU7x9gemJyknQ9v2xhYX2bcKsDy8BAq6DjAD86YE3tgqXQEwfEAoqQ8oDjfs3W9yQ",
  "key28": "5PocNLUUQuU48dHeab2NsLr5hrykkKamugH2juKdYfcKDoQRgNs23W7QRZWBnqFUcvQsBDmESBE72edDSN2XK3Qg",
  "key29": "2DHfLs3kEb6KsCfZ2q2RKiwQW5yEVRXJLokceUoHX13c1a3tJvozb2uHJf8kZPcqMZ1PAGf4cokYWb4PAzkz8SCR",
  "key30": "2qXzdCU7JLuEmA7vBVE9b4ehrPy4KGZ1SWFhdDcd6NAkbJ1bSi4ZYpq3HZdgScmNLGnL3KyAdYk4zREtgqz9nfyw",
  "key31": "H3w1tfpn28d6fXQ45DZTo7Q2M6Tn8YayLda54zg8HTvMfWgRyhapVRxTKRhKS5Nmr8yqf1Yio2nbvUcge4yNFHG",
  "key32": "5NcmaM2GdrsAETApuc9XUZhSWUHbLwxdaJny8nEzE7w87p2qiFSPaUMqXzYqWW2ZSvLEsdTGybPw3p7E7egDqqU7",
  "key33": "44znvdf6KcyVPgfgjgU5kNdKG2mbNgh6L9kDfgBc5NLXfAEjzxwJUJUNn7r3prSw3HSqJ94XeyvjyjLYxPsZBXGX"
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
