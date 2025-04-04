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
    "X8t4QR7PJcmi7kEkXWisNKv7ey6TCUwUZvFn5AS36co8A5SWyT33T7KLFmE4XD3GD8S8UGgVEr6M4sw3iaHuXGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gwbPqHPgbvBp9Fp3hKJUa4Zbf7HPqiLUG7funomhrgMBihirkjtzDNCAhT3qB5f3aW3EeQKqXGRZ7EaMJavtKbM",
  "key1": "S3FCgcDtd3T99KbNWjEcpTndaQguBJSoqZEG84gdamEHasnwW76CnhhdJ2SEpy2Jbq3xeijTE2QMLsxuR5chbEq",
  "key2": "3BCicrDYRkefusA2F7D8pgFYPBHnS9dJX5gTNANGo1scN9ghhRCsnt4zSeBGcUPxSnrf8q4VArKNV8KBRXsmrLxE",
  "key3": "457eQSdr7rvWYvnyQDnwQDFN2rTH4hay8LmMzZHGZwXDCMk13ytwnLVhzTGqhg1ryMWX815KfPemd6QYNEvJErac",
  "key4": "46g3wXFzuY7vrgDeBeaBUzMvSYW3veoguh9GWXXuLYNzaWVje1zx4dK2PR8yXyCcxDpXRY2mJ7L9dbxqHXM1MUzt",
  "key5": "2CZdTbC3MjRgFGez5vbefS4iTzNKXsH4FCMbAaHUuN6mt5oYx55CP2WEaRHAHPk9AmY62th5GbbgpsvytERfLjsY",
  "key6": "2VuysfDzrwQcXRvjhfnisuHfdoSWNdxmeunnkQ4B7R4uYXSLxxcQZeRm4Y1K8XBtMEa1QzzXM577HuHp41YBUUqW",
  "key7": "5MV4M19MfGQsHBr4eeNmVP65Yeei37eFgFnsDnRBKHR5jy8z9aUsnboZKpvz2A6A1VWdZnB9etaKW2RpEVkSYcn8",
  "key8": "55jyWsphkwEzLxAbAzc54ecFBethi1BdJDJrRBipFv8VgxYsWt83k2M6Ne6U3NZK63dCeZnD479m1qh35sGT6FAb",
  "key9": "3egpmWuTNBwqGNd8Gf7tnteHipUiVPxXKsF9nxLk3L69YMqfpDDHKYM9yBwh68McD1yaQaFhuBYnbL9TSoUy68eM",
  "key10": "3iD3PWEUUQpnEELoozHxHuVSdL3Q2KU68akFHfwnw16WogyV21vXYm7ua2siBZPWCxwH6wNg4cVjNoYsaXRZw5PW",
  "key11": "42vrfiZ63tndCuCSsVczSvsDPiRkDkvv8PHV66C2Kd8LixKMD2UfRiDK5TLFGf7BT8RVQC1NHGcfY5HPnHo8fJ27",
  "key12": "4mvjwqiMMNUk4V13HTNVrJo39qEdTKYEkPimSWL2wY82y5fZe14ejjBbxSNSJdESebz5tGyMbg1ueBkuc82HiJM2",
  "key13": "4d8RAsfmTe6uApuq2DtCzpR7EtxAMrN4BZPTSrqyjFbfAjz558zSTJpSfZzGZaaG1gkNaZpL99UQFrrC1znAjbhj",
  "key14": "MtMB3k6i1rGjgGZt2NUCGT8EDgRN2Nsj3Y6zG8yPL91FNELeP77wVwJrdKCuWDeyGPHNw8iRZ1hP6P4WA6ZQpJU",
  "key15": "354QrNtH2e6SSVngAHz4NW2HQu8EqBxZdTQ4yddNsCfKt1Nhd6YchthnLWMbUzeTvyu8FvpfGPhQqQphPHEXSUBr",
  "key16": "29uYahjtoXTckDBZ422GKb4jmPDXJsLBhsnnKYnkJjQtq7HMwpdpfrq5D6AiyHUwS4XDV339sNVfkqKLYRi7SWqL",
  "key17": "3ePjGD4sPToZb9e8xtfB5fNSAy2z3eorLKWMkWStPfBCmR9LhTVKx3Y5RbUBGDb2LLBuNpib66Xz3AZEfkYnrYEG",
  "key18": "dDHdrgK9JKQ91nDJ5UJdtYAzQDjLRbvPDcsp74Q2XCjAuQhLq8SxB55mTvMau8H4bkhyHrmBgST6koDVq914Zdx",
  "key19": "2oGqsUzeyWQNgg8ER5kXvgSoJz6NEJ8oAmNY6yhvMuwT1Br5nEomudKVk2kU6zXtyUDKnViHv3fzYvX6bz1nx7xP",
  "key20": "4zKNcVLhD3pLeudzAL4pybGtKBPRDr3DXsLtj2tWgR4wq43T4iM9ttAUjyddbseVSCyiG5nuWYDdMcp2oRHF1EoV",
  "key21": "4dDBPajME1JQiRPDhR7fJuNrXnPGhKADjn69cBXCkZHoNwGhkePo7mpJKsjoW8jRZunBmK99xSBcU4ijbDVDqLcQ",
  "key22": "4sp2qLLjQrj1xJCo5SzWBteyjF5f3VtWE1h7tqAJUoNtsc31cbVDGa7r3hosjrBsJw3M76cqc5SYyMQVRF7ry4GR",
  "key23": "42RF8Bv5QBs13zgmpTxU766ej9724iLPdognBYxco4nW9zhM5veHBaBqt8DNhEeYcdZadtnJ47uHDc2scbAvp5Em",
  "key24": "4nPHgQMXanKqMe2GXGhKQ254MC5a163ChhBDkq6zcMArE7yKeFsiPfxPWB8NKwoLaG6JBLykYzseRhKnEcYVdkVW"
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
