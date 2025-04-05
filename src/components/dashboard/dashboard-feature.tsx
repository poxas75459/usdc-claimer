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
    "5PBp3F4r6NPtPxbWC9Qac8RctN1upWnGoegQRuG13DFXjE75GkdojQqMqkQPgmSnSW4Tvarc1jcxSSBUU3m1MYCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NkiwH5bhghbWhWT4RbEkNotrzrX7pMDbEDPsegHHLpDgyWJmB4A8N3G9RNfEVziN2dG91HhMUGqXmEunmcPVUTY",
  "key1": "4Eccp39JEbKcCTZH6Eo8XjJhACRQa5YpYRkFkHjDEir7Ri3AxEq4JtAycQEJ1DL6DnLequmsEKGvyyyHJD73oaeT",
  "key2": "5htcNTxM2ZxoDW7wrX5RNAfZHmBwPkNQQ9zbzrHogEy66RgG1r5ETMG4jGQSUjiudUNgPEWY1yUMJDtyL2UvaFh2",
  "key3": "5vZrUFCBGpC3uZVs5PboXJHFx7HgBScouvFyoNWAUAQxDuCdNpcrhv1Cus4x5KeeWfoAjPAjXbGs3Q6UjBGLxYY1",
  "key4": "5Zxb3MKV6cWosFjQ8baSiZSKCnjHgi4pCyT95C1PieVBYW63f8fLbNL1ixKixVU2NYrw11JZNTrSDFHmt5U7Z3bS",
  "key5": "59pjdKapKwWpPbKCjzuCkr9Ud5u64u89rB8WBi27Qr8mJ9PuFFm1AddB7uC826FpUs4nbDG4PYBRJBr1cQdSbyrX",
  "key6": "4F27LHaoD867XW46pNqiCxmYxgtgosfXCveSkmvoM21Eq5rpB8WD52eXfawfs3f8AuxxSJKDYtUXSLwZLBDdGGy3",
  "key7": "5YH1WSVwDh1oL6SLYtgRJ88FAPKdnXWkTSQ6PPvL8BQENAid3bywNSLYZ78Nnho5Med3c3bAf7914d24M7tNW1He",
  "key8": "5VszD7JoMS55pvG2R3WQHNe5rDBUCky2VAc1g8VH6Q8ZXRgjMD5j7DK3AAbEdhpQrUvJ1r268Vv834eut7hyw8ew",
  "key9": "2thiCwz5nJaAkdFu5Li2Np3W4WsX9YQ8dvknecNMpV1wp8zLZykvUE2V4KuRkB8zb4Btx2R1zMapVHSavVzEWqw1",
  "key10": "4i9vwMJMwNn89THgfuZXbuEu8o7PoA5PJipXoTep3WU1wnV1NVcS6w63rMdrPvDRsuQWzx99PaJKmn4cM5Pizt9b",
  "key11": "57rss856eh7zuWWNvYDDHuBaQkkGJpZc9hHhdKgiN5gACop1pD7EazyVGgMWMEkTiREmNGKkvSFo44UdSWdgba95",
  "key12": "2c7nqcDoRcrJqyzEEEwsbHAt9rMnqanbtE6jBNGyM4JtVq511zEE2zhwqCu81wmJNiS1QmFHeTG3CVoSXyLGNfDE",
  "key13": "4hLJr7NM4Xx9TdfyeJooxj3NxsvYfVHMoUx11u3CFYcNKU2ztC593guGA4gUfwG8uY5Pqpa5anVEHMvuiTtQeykZ",
  "key14": "3PHWRA6QqST6QvSVBGTxDGeES44meAmupeHGUxx5qG2YdDhLLePi5AEortMyGDpHLM9bD7J9iPhb2dSWyt4GP59x",
  "key15": "4ec4EHSSqRpc9ThS4PvENnPGUwEMpMVJ4wg57Whz34CvZEL2oPYbowoQ7hRwhEUzy7cTcS7zMCMBew4zie7rcwxQ",
  "key16": "4WPW98GyN9f8H39qnx8FJfE8ovFJ4rU8KFimhervpsUwbHVAV2eiG3TK21UsZ8BkCELgyj8vjuxjokVHJ5yk7HPk",
  "key17": "4tH7vDcy4kDKiEQFSXL6WcQJqubMXvwpAAvLZHDazNzhrS7bsecgakKZntCGUPLgR4RzrTTjPJjYcR7qkBM4qdnG",
  "key18": "2gCL4uoyrBkRWKbjR1g72RNF4CJCfprqB8bkgNRzNbdCoxFu6dLBYb4JjqUUKYxmEyWVMVvPsqgGmXyjvKohKUmx",
  "key19": "3jLur1pLedN9qTX9pnNB3tnpxcGL7HZmnS2qsZAhyAGmAfL38isQqMcmW2pdjSco3oo7u8QinJWg5yX7oiHbVs7o",
  "key20": "4NysFJoLXAcodyjWRbSLuzFUEmkiGGJTYKPndy4eyQ5KRybQ6MocmZFog6CZ6H9cqMRqpXUU6E3MD6M7CkboVbMY",
  "key21": "4g9z7WaCWSPEsnNB3bokVqexsiFrMWBUQSMYptp87WhT6kuJHMitEiorDeTe13cgN1gEvyQsfg8QQG319SDk1Q5t",
  "key22": "3ayNTr5Q2XNz7y62C7zkQrpVmm2DCAQxBQhDZTAthwhejMuQHyvxBcuX5EVfJCKgrru4v61f23Sd8vHweCR6dX1x",
  "key23": "QnKbAzBUihkQf3tYV8PCSqMKXWFmzzd8ZdtnXAS3bWtjE6d6xymUvZM9q4o9zFyk5sGVNupZ9epc1cMpArvDJBG",
  "key24": "8s5grgmdjAKt4LgW5qcJiyZg9f6KeA9S7ygq9tXf4TBEauGFcMSXuCTbsbVbG92zcWCE6CF9fyvS3kxbA9uUPXM",
  "key25": "2HQXRG9zpqwpfwNtLzBkUUBknEgdDQhr38StARBzRWLZd1uS9rUvYv4r7M1sPUykoXiAJzkvrn9JX4UYHtECrKKi",
  "key26": "2Kk9QYC3ya1VbhQeGdCaWPHjgKe7rYVPg3SCy7rDNHRja9R9vYakkRtkhH21Ee5HVpKBaycYYPN7P7PJUULvD4xd",
  "key27": "v8zfuK9HTxyM67SP4LmXeWCnoQ9sSe5rT6XbnYVTarVbW2e2NNVJWWs3QJPcd6MoN4bs1eEg9K47t5MRFrjNWM8",
  "key28": "9iW4AkE9nETpvciG1zy8ww5NydH2aKPfVuzA3pBbqnZCyggYWh2EV31GcQvySSTQBpXN19MhGnxJd3GUkGn5H64",
  "key29": "z7iKprkkQaGKdSpEqN4wDu19yJUJXmetMvUf8DVjWwrCXBVSRSQXKfr3vTQNhCuXvLCX9txksGVgq8UZAeskWJa"
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
