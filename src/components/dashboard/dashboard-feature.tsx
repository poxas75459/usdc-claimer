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
    "2vCQjPbz3hMBfjGLszPaWbzaYyFyjZJE3KYnfFHYdorggRZGNdfcxiiqf22pXX8Wo7avC6t3n7oBSxNMSkChdyY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GZhwwQntfuwgX3tzRdHaeakXRM3WQDDP9bQ6vGqN2q24jz1Sgq6Rvv64k3XYyyrVERCxfuHovsP85iVKUAn3vHh",
  "key1": "5V7fiipXg3NH4WTq4zMr9rgxMYi7GgKSXB1zJg8UEvUcLbKekMQSFqi82wMTx5z1e2XZdCMQ12fA5jhzGLn1mHJb",
  "key2": "5SukBphafT5RLcj41mNNQLFSZCLTNjSgdbEfQD7JUHudw9vDr9ewPso3jgwUdHJz3cssrKCwcXCVoDTsMrMVoK7t",
  "key3": "52Cy2CU935v33b38SLeyioBqd6dnrDxebjDDonSJQALmAUyTTxj1LuYiwt5D5wBhRxXHmMZN1Tojccu3kXftpwdW",
  "key4": "J7jQQBgtAGq4PC324W8VaZZVod3TQRDdyGrhhcYLbSKwPdx9YC75VXnGfDNWup8KWwM3VU8w9dFSQmpK3yRh8nW",
  "key5": "4ExUvcX4dDGCEP6oJf2vrLei9ugB1nzqEHJPDusvRgtrHiDWRcfM51vA5rm61S9drYcU7HTZ8aYqMNdFPY6B7gKu",
  "key6": "5j95FKWRFqcgtDTV9FVpWQ2hZ9n5ZmUFzDRq4AzcGzgH7zC1Xp4gqh685PDyGZW4eADa8iLcomyKGveeprZXX5vu",
  "key7": "5VUe3BbaXvXHGV4WFKNaFhCC98Cnt1dnpSKMYSsesPWozWnnMu9xnafw6ASwMopJbVVZV8K3zEpf1FAMmWCPGpmq",
  "key8": "5Es4QMuuZjdKvrhrKVdbZfQLZ1SThyhHduUDkgQVLZxBsig8W9vSe7nwFsPxTPWLU2diK5oqz3WzUobHG2h6t9FE",
  "key9": "4oa615xUJVYAnq4jPQWogz2kvbiqBhV7NeXo1AyriaQ3yPH2E4YzYK2FrQnbPfiGSvDfPjR1rYFucYJydUnx5NGD",
  "key10": "4k6Kz2mNdWgrRFD7WsqtZvtE5Whwws3KFVWUhJiEZjMd5ENjihe454f4BjF7G7JcovtPw73qw37oBpQqc1bAA2mt",
  "key11": "29Mm8XPF1SyoJPVRXNCDD7csae33jazv3tx5RMmpS66LsbTqCognygwXTKeyXB8PGeJShuknBLzy9vEzPZZ38QpB",
  "key12": "r1S9ZnYx91VytAiLpFFvQAfPFbyJC99x5kmKRfCmssE9SdCrwztCvtkWjX3aLuSfwrZyRmp2c471Fq8okANQXwS",
  "key13": "3fnkV3w52ty9Z9cF45XxRXLF8s4UxRRDkv954xo1UFcem4nB2BaYsvEws8Ey3qM3sFBtGj7SMTDL94aYicJdwa3E",
  "key14": "3yFJCTXZdF3XnCdeN81qa44NXowSZQoSqKtfTG4UjmfSbCbLMtLzPctKmexM7CdcSt9812WvrywSViCLAr32Wdfd",
  "key15": "4XTU87Rb8hyKZNhAx9tvrQre3dsu1JQWbSXW1ykqU3oxP4Pmv6wwygSdCGaZV3oU1Bhc19ZRvo8RDhTFkpKiRZjL",
  "key16": "UKorCuv7ZnTb6acRGfHRE78y5t5BE7sWD8UqZpVCFGrRsekeTb7LecrkEGvkfCV4ogaZqQqdW2RhURqGJS6jZYe",
  "key17": "3UwYHVQksexuRQyxY68d2TwXsy5jsGYhz1DVBTqoFWKK4oUMNkiayz7NiMuoBB9Mfcz6FGo56ZxDpaMR6GHfTCw1",
  "key18": "5Erz7jDH2wvdZxFK61FhpZLHRYMrPx3VY2y9pjYE7U9rz6nAKySHsCf2LmQU4XdzbcXtV96SvknNrMMu6HH3wBcc",
  "key19": "2JNnbeKdGj36zUcPTtrGPERRBsDkj1Uy1X9m7aJYcysaL19S8mKu9xuJtkAGt1YqnhfpFTg6an8ApYwQmdjERG56",
  "key20": "55jsxnWKtiWFegQnGddTcXiEtvnnMUVgpuBapQxGGhPZHWPBNVnqKZfiemUJs6uz7gARstyv22bJf8nzn8hRxWzC",
  "key21": "vaDrghr5HwRhTZkHTx3Mc3mYEXPFqvHBaujR6NjsVjcP2RSyDDuiJMC2oYeJxQfjqBRP11GoGnREfPwHTbFhECm",
  "key22": "keaF2ragiUBUuYRRDAxADY6K3ubrse3NL8zJ3g8Wy3nk3JikbZvDpa97KeB1GcWyxTyks1AjmLRjoriz6wfrdRH",
  "key23": "3tYVawhYhzKxTsH8j3m5FcFeSKP5XCLcAGXdcKtv57UThaBg3mBMV7KW56n7PYpgYy7wSCyrsDbC8UTfENN7cxNw",
  "key24": "4LufnXJkoPR2t49YpnEMGFgwan1MvB4jQNUTEXhcyDRVEUSMJU3kQXFD8S7RajyCPFFnkZh346Qk9RopD5PGzXeu",
  "key25": "37wdTAUWjify1gGfaVPyHDUjozRC88hZYtqgzC6tEp2wdhDL6EesPHBcJFoAi94DkH5n9dMVPgwMFL1Qxe95wh6c",
  "key26": "4GKVtA91RKu53FDp9NV1na6Shzh1KUqfBREYcXJBN7p7nCDwinDuXo7bcCQh7Dm7XPvLFe5qxTCLFKNM2sHPS4Hf",
  "key27": "3G7iQBJJtWP82RQH7jdQctm2iuT7RQ7JKeWokbF3hprhSc2WxtRVaB2aPbGfVPGjip5Kb5bJ2CLPSNgio5Be51Bm",
  "key28": "8B1btC17JShxNvSpEnDXWrUF2KLS6tiJ7SMWKAxcNFowb7Gqkz4TupRMUhvc76funN66yWVe4K2yVZiSU3foW7b",
  "key29": "3dMxM9XHRpjkhxTX6kCZjZMKYpoiVV8UHoZCm39rgwANAXtTZ4V21aHHDdoVeceHFFVH98cnQt1zyJca3fCpu3XV"
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
