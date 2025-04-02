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
    "3XGzDowH9svYjWVM3ChfCeuoHUJUVLMqvszbVrWHh5Md3cpVrv3qVeZugn81dWaKjMiqpUfbVTRs3HotYYTGGiNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wCuQg9nkdySEEGWRynSzDoZ1NDQ4HanVGXs6f43mg8Pai4CxLRXizoDmGgEpGKG3M3pBCTWdKEg5vY9Ui4SvnZS",
  "key1": "h4UAJMQvEiNUd25GR3Rqvb5FLfrwELKoFYpon9TFaTfTWsVENHXMHBiCZkX8fo6HafR1urVF4NSZkQp8FLpHPZK",
  "key2": "VhGYQE3Ewz7dS3L6HKEEaygBvUAQx6BaLNoDjCoRo7YLqGQLVjdMicQn5u7t2fe8qYERf8wmy64nzmzFZ9ih2Cv",
  "key3": "2xz5Z62HNVHoTy2Ww21KPfPfPEPH12LpmmZWFy2JmzyJnQNJZHemZNY5Nw72FjUhFeqL9PWPZN34sGf4EzJBvBTb",
  "key4": "3eYJBDSQD96i3wWiZiRaDJBWMmyoc6U6aEVfD3uuav8eQdPC7PKUnvxXt4CWFkthN2NdmTA1eVGSugvMNTStJdzF",
  "key5": "37JtygZjhW85ZiXGG113EZo78u4QZKPnjMfM1bTbDWCXFxTGJreLqh8wCcLj1pKU8aHRVjhzwgRiopLCSnneLCfc",
  "key6": "4AiSo7ywCigqJHr9sZzyxViuh2vQh8chsTUx1mmWcuFtJvwhwLA7zBPasTZNj3HJyXXZrwuSDndvavaAxiaTp8KH",
  "key7": "u8CYiUoXqvRBZjQeujoTn2xhbfqfpG8vcRNVV2HH5hPYTnCkk9R2xGncmQar2jbKHwMYAJGHTV2Tyxq2exagAFN",
  "key8": "4ZaHbPuMSPTTRw2XxL3JGCddAMevmRps8yTzqj54nRK1fJMngwPZXTi3cQeyLcFEFzef8EGYMtmngfbbwuyzDZMB",
  "key9": "61QfBjFERi7jQpj3LmGAVq6fTGFiu81xLBFNj9NJuyLxgAVqfu7PwEcNHvWR79eJDV1762aZcivdvR1JQPWfcdGn",
  "key10": "3ykwdAtALm5ic9dPkrdxbBcB7XQPw946WF39YRNqP9p7RPqbFouUDrhh2ck4AZPjQf3FnGu1HdBaYqmjaSMRo8ff",
  "key11": "3x93p8bqn66XjxVMgefsoPNGDN6CLxPTyiTjHAxfnHRgY2PMswabGzcGYVWnA3px3EC3f49imqrFktrh3Qr2TYbM",
  "key12": "3gsrfkFEVFHaiEm2FoJiwf41Jn9Yep3EGqUboKSqr5vwAbVpZtSvxqzzpU6xZuvxJH9hBdXwhhXKJNEcnPq39iFj",
  "key13": "33HiZoTWYyDxxYtDFcEE62CA4GK3H7hgUCvjAVNLQxgBh3Ee7hcjSdFBiaJNWdKjQ4JnLZiA74MQQcdrxuCH8MEk",
  "key14": "24cZnGQMEQr8FgGWCknp4NZ6yCxHC1hqeomGrtToZr5AAnmyJdpdJP2DidyfoVYNJXZUjuySDwhiXdeoGGoMVk5e",
  "key15": "rW648tqjaGkebn8b2NsRjrvBM1dDcfaziy9bUSxiNkrmwW51K9Kf8UvuLT8EsAmuG9HcJxJrmVzr2LdeA34HBbF",
  "key16": "3h3xjSBuoWZzVLGqjg1xxTYsnBe2qj1fE4fC8UecRjHEGL96GzbWz18WGa6B41y51sUMX3mLNZ2NttSgSVDVRJu3",
  "key17": "351FDYMfpyAPKohS1ZnFVS9mjk39WdEuZ7DytpSPtRKJwv1SLKojPoYztYBgHVCveQSAE74HHMK5iimbQeDB8eEv",
  "key18": "4E5Q7nqwMDdZcUAXeTmsXUJnW6iViadyAejifSNyE95XHDKkpDB5rcLgFCFRRZP7CsiHgXXnZ8ccgzFvzouRnhMS",
  "key19": "5r5iqqL7MyunhZuuDfKwF8dFs7ETXjF6LprtmPc1KEoEzZS6MXFhtmaVBXucz8tcM3AQnkmUwPpP3a6tUv1ErWxq",
  "key20": "5Yx2XRKfeNAziTY7xWriJPaw8K2Vi1vieoJrKq5mxqokAWp3iVBjeA5osjW6UjXxsKTqaQbie41bejwCyQ2uV7pF",
  "key21": "2EGaw5V5zyeNvWoyqFSUM35Cnw8ttTW1ziXxJaMLzChADM9Eti5ZNDTPG7QZopLbWcsrq4i2WZEpN6eUjgGwKoM2",
  "key22": "oy39Wmv8y8HyErJJHPtaJ6qecE1G55EpcsEb6b4x91sSEXV1wdjpJYk9aeJMdjmDn5iHwzDg89qoegtKm94R1u7",
  "key23": "4JzF7hjJP53FVWEBZdHsyQgGhnd383mqzCdAxAuVaTNJotHwjQrXV4HDRNoBf78ekqp2oyBSjc1gH9f4EbopskVd",
  "key24": "2Y2Tvxk9DW1bixcoXbePbinagEaCP56LmgdYUVPU34mfKFkTmEFH2oTVmxaTBdV1SyKtiMokmLV8pSjf8n39bgU7",
  "key25": "5gRCZyYZkbDM2P6b15iyQxBDWhwwcK8PD1bgdfG8JKtmqk8fSNaQHszpn4aebTzynYFHE182TABFD8NQHXEB7eA1",
  "key26": "2bY3E3Foa4dNbbm88zCoVgNwb8YQshYTjpQPEooMzbMchDN6xbxWKsF7uhzxhrLyLVw6qw82iDYBda1273vB7UD8",
  "key27": "XLjxfy4fKwemStfvawS5qKFuaJ4D2QCoQR1LT9E1iUZqDLnqdndf31FGsJCWTngujqzJHmWp1bJZFzXpLPW1gRq",
  "key28": "428KfoAic2n4XsRT8dMZGrmTkETZ3u3719RNBNSrmWXirMR7AQgMRoCKyzzMRehMfskYZRCRJNpdsVpSGrAx1QFM"
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
