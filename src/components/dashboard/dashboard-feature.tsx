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
    "3BFtw1umb9QHzhENEbunDs8J5AUtJPrbb7QYEt4g1gPhF2WyuSCopN4LfQ5QJ2PzE8xPCeU1fZoAkYtEbHYrXUF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w8yaDjYVFo2UTdVGqcbgzqu19UbK9MKts8dLZnQFedTg6DPpASjkFaGwmX8VKyRrngspuAVV8ZyPzEhE4vbFRnd",
  "key1": "4j7Zs3NdjshtEEZGFFPqJdHKaCPQLytq1uTT8bDQN8PftA8Q3Lf6qV5hF27iZzJ3CWg2z1egwak9jBnaYowpmcFp",
  "key2": "zyncXRRdUucFhu7PxSqTcj41RuGNrk2QVMhvKNDZrXExA4KDxb5ZR2PGqzj97hS9gFiUCvHokF95Z3Pe7NzEo73",
  "key3": "5GxvMSrCEijEyJPsKsgmbwg89qLNqqWCTT2NEcn7oSFiXFmiA6XKhQ1rHtoiYnpCvfJpVtK8b1ogTpQXjcppkjr9",
  "key4": "guVpoAb4Vf9kmB3oBwf9SHX8PenpzmT7BR5mzcvKoqeF99ctksajL4K3xNLfK99spUEzBfYRu6C32PmocimnMjY",
  "key5": "zYwwEKsAjUhrrLRwsgFr7bLQaByaS9NoyJsNh7kqbA2kgwbk3ce9rMEirh6ongJSMWyTb13Wi1bhxmzbAGBAuF5",
  "key6": "5NKi6Ro6uCkc8ke89gqKfnbMVRP24GKRa6wsEBvovj5dFDFjbVhaWxGaCacPvZGVmUmmya6EWPxngqK4PAxv1Ndr",
  "key7": "5aPAqcZVyZdgbCt5ioZUahQTrWU4Y6VTgCArrFDUEQAaPGQnTGBfoWn22DKJfKQrhEwaur6XpfQ8hgm3DwMLebvE",
  "key8": "5RBznfmXwmzVDjEcuojiLgEqv5YoX9XMy5tChAosV3EXmEED59MpvgNyD65XD9ge39741ezMHX6E83i65uuPar9f",
  "key9": "51YREcYKT5iSyFJk6faUun63dPvZXEQqEcSakpL51bhthj5MGUQdp52J2CZjNtWmiPcYZBfB3WyzDnJkaRQVxRne",
  "key10": "3a78NYD7QGPMB4pca79DoEPrEkofEN42UTsSmhEiWHJyARd1NGdzwEhPZu5xNJnYLpH4Kpy9dW44oacjwUu2oRqQ",
  "key11": "58CorpRDQCxGbgYXTxmsDG3A5GHKysFWYGEhtjkiohvrcGPNUMe8MM4jZcnA2LdkWaskkQoJLgRcPUmo9h9vQ4CC",
  "key12": "4R18SX9EfzrbKJfGHeARv3U9Uita94jestNKX4uJwJEgLTsXZsUiqAvp4okxjWRfoeBnp6b4TysxMjiNHj6ixxw4",
  "key13": "PKK4KysfCx2T2w9ftkr5xdpE7gcf2D9Qnf4BB82pJ4GZSAwpGf8KvS7uFB5Gcb2GgmPvt2147EDNBiVS7jPGJDo",
  "key14": "4pXDkpHt38RgfyaN7VdBzTSJHAR2Dh2vJanYrHTPaUxrGHVj1y2yqymhgqxiXUP4x4SLixX8hub32bk3VJZsAi6k",
  "key15": "oN4iQYfdwXuUMYyHKECq1eqS15AeLmWSyrKeDCbE2fdVQDpR4wpABfjdpNkzZRNr78cj1SdP3NRZ5z5cdYwuDBN",
  "key16": "2eX9tGHAy5rg19uD15dXxkNSgzc6ho95xgSdA5wcN4tDZbqgbdq9Jm7YGs1NmsH4n5urbfkggjhmsN9dTBT7CPah",
  "key17": "3oTg5RVktp5HcWu8qyugGidCUTFQn86vaxZE5Ee1L3AeJfawT74NGfdcRRqhqVrz3HejxkQryrCe4Cpr2GpgrXfo",
  "key18": "5WeiozDir4e3Dat6n4VSbeag715Fv8M82ui2CcsfVewiepH9smepTNYYWai8Q1Ypz18SssZbUXi4aPnBojBF1duZ",
  "key19": "2LVMzRZNh8cjhTVWY88hFeinvnTDU2zUqTFNLzZdySaze7pnQUVjTuXTBYFpwBzdD5FsUw9nkJoXNuVkQG4u6Cxv",
  "key20": "4EFnVEP5AiWAhk1AWNJ3RHaSgzeFW9jx1VueNcUy4DusNUVHDzxTtwBEBQF5jjjmZvwurJLguAgNSaY3f5Ur4Hp7",
  "key21": "2L7qqgRdRMFJr5ShbXuqbRitzwJQPAbzCHY2kuPJDi41Wdqsz5kCsJRx2Hv5F1BH251jjzVUoSrjzsSax7Zfjbzd",
  "key22": "Ruhe6Vps9Us9BbVYC3rk6zWiqDMRPE2v9c1aXYCjGETyLNbfrM2e2wk29DCmzj2BSV14M4WXE71mEvcwn9Pya6F",
  "key23": "3bNgGiWYe3hQBhuhPrayRe7yfio4ozeUF97pbu4A11v2C8uCUY3GGsw48TbkkEj2Ya6Z477CiSGVkmjnSe1wLRsz",
  "key24": "43ZSmVFFPS7pahqkfci1kESMXJTHvAj6C2Dxzv5MYXYDxXe3A9fRDFKtxtDVBSVUhwY3bUafNAMeBaypTDMD7ULw",
  "key25": "3qxvmot6nFP6rSqtrN3zbxCum9ou9MeX5tfgiWsVyW3N7nV2o7WkXuZNWW9wBgMYbqSMmmkJTdDaXLZWMLa2cWNd",
  "key26": "5QvoCcwigantyqPfxnypvsYR9n3f3ViZmLPtqUutCcnHan88XEnqeyw1LFa8yGAuv9ELNdxKQQVzGRRc4VWik681",
  "key27": "2nNQH28wXzQSs43LXKp6HywoVhmtxHCae8EoaPwqnYJimsTDSjNrERejgNmjfQ2zX4qLhmRCg4oMQ2jcVRHPxsbc",
  "key28": "4E2ibNYE7tYbH88LJnAns1evwZTKeLBzywHAunAp5Px6GnHCKxVJ2WJVHBiyg2ieD748HTRK73mhEd77EHQKQTDt",
  "key29": "4GGFE2ecCXFrpKez1zyxFp48fRJTDvu8mAvSZ5UPtPwTMEJ7c31B8CrppVmMDwR8B2465XsK4Jgg28MpUMmVVAzq",
  "key30": "RwGS8N3mRLPJwz5VPyJhLrWqybBD8XVCW4tAJQWE8Jb1cZxt5C9CEVggeYWKwg5EDr5Co5Hdie3Ewbp1xC4XVfF",
  "key31": "4MfWd3nzrSqqkhc3i1ZqZbnvjJ7DXSfpspJSxMWJXazoVDvjcobYg8gMMhNzYP1vEt91WSarnBN9UFGxaDKV7fVu"
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
