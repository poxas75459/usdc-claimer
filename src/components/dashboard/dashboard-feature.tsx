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
    "66h5wKkF18xxyyL2RLETrhE4N2oXHHeB28TDHpSEme5x5D4DLRHw9ubsAMVYuXN9Nk4GJWQbbEvoeKsLuTcobcFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bisq74ktGYK5qdztPifaVMWDsEr3ZYM6i4ENREXei81EdU7xdXKKAaNeYBgn3eWUgCCRotGsfsF1KkTJgH96J1s",
  "key1": "k1XYxDMBmpXV7dM4kPDDc5hrX4TqWX7FrPf8JVbJUHxN2a4CJoTDAiZQp5426msCtb5SXow78bVBqEEvVdzWMsc",
  "key2": "5gdWVsAjFe73fXvUPfZGhdyMKYFFevCWGXUdkgLSw9ZDGQCyrGLLZpEfZ5Pzx1fvZiRjiMJtoYxzuoPFX9Pus6BZ",
  "key3": "4KDWwZv95FhsCJCVArys9vKpQkHs4gR4PyYiewQtDRwbn2aAnuMKZsvfsbmPTDmwFSZQHEavR5pLGN3PvhrusSF9",
  "key4": "YeeVDvBKQAEjW2UZgbgcYCiNshVfaMzPmfUvH7RRMZm9gCDfoa2zgnaRsSxPKk939BxoN6qLQJD7DHQiscdsT9J",
  "key5": "32fdAWrvykjnKi7tZjnBMmr1xJTpU5RjrVz4VRWPmnsgL2xsALk3V47fQLn6W7x31v2ijqymyWpQr82PAACzLgK7",
  "key6": "55aMV1FCtYzMXveGFAqc5QtjhRGpMdyRVswT7CTRvXJ5EudarCS3f5xgS1rLBznJX28fFamBrhzMfMs6Fpb8NnSW",
  "key7": "412yYw6Yi7Y1K37iB89NM7b75izsARobXiq3zGtdHQgwNjdBDJSgVF3vb4cQYDdhGQV5TefjkUq3dcHDUi2nRU3z",
  "key8": "4e3VAUtFRADoMsFijasX1dsttApiExEAovo5ygBMj6KSHDefm2UpGBpg9idKp2KXmMKQVAS8fmoHRBKfrFgd4sJt",
  "key9": "5FV4HchBdvmzjZsNissgpZeDNwPAfPrRbreWtxoLYriDcZ3suuyUvFLUC57poZiNXrAtwEiCRzR3zxW2TFW2KSuX",
  "key10": "35RCT5x1ap9iBAS29WaCeD7QZao7uGPmCzJgpVnMUsqxrv5xFjuvy2Zw3NieGvdQkHSrnVw7ouHpMp53rZBRrYxv",
  "key11": "vA2GiSxjCDYeyKk7Ab9DvrEthLP4dxMCVcMcZC3YWZzRqGYfqVkEo4JPrKN8LZwcaufnG5nqCZE5Gyvna4Aeypq",
  "key12": "4dKoGbf8au2LgJe1Uy461W3fTpvv4Y9aGXjtHMHSuQMkYhMkLEKJRvxb17DB2B7vGhhVuh4AUHUPL9a9ZhTgoUEk",
  "key13": "2YWYE27A2REAS3Vgw7qYZMW1zin3FcBrEy1VHc9U2h5JYv7G1pdsMvEneSkuF1pUnKsrEoNG5dksuBtS3ZNvDsi8",
  "key14": "5aKsh3y4Ny7QWP3nQd6CCfTjp1sNqWN6BMXS6MC6Pu9WBmCzLU9xH8nBoEZonAxxtdud6oQndWKLBeefbqFjDJKZ",
  "key15": "2v4hagcMU38fy2A8xh4m5gJAoVL7SHdrZiWexGDFZ1kCiDDuzA4pKAV18W3V8XeqT1oEGxg1Zv5ayqZQpLVse49S",
  "key16": "5hQoQUCFLRH46UG3WDc2KzKuGmmbxriyConjJrzAna6Fy1RSTioXXQx1VU5ikR6z5LVB5nasoE6ENv6byq1RMF3j",
  "key17": "44esLnFmfyb7DMA23ZJDo71q4kdZJHEugWwNoDEgzHydAcYQWpAKJnDnPHihtxR2xLT5c88N9QLfjyWnK5HCihQR",
  "key18": "59DndsKGuP1JUmLwumfKCN599QQDMaRx4xPtmMYoaUKVV7C4GGU91BV8b6LqR3LSQdtXHrvPY5c5MvSyAQkB1Vc4",
  "key19": "3EN92WqNciwedXM1C1Ae8LRyxrtgPYTNUcydSqFR1KrUsXQ7EpZ5RdzYYDbHzsLgQh53ebdbVHKX8jgMBDa4jAWY",
  "key20": "42shQ8MGsX5QYZ8hHHxurFHYvM734H9kRH7mrY8RCWDXW6pHpsj5hRLqckGeDwCvDku1agoBhLK3D7ADAqGVnJEi",
  "key21": "5KervuTr7rS1ySiReE4PN6La4mZvz5XEhFdnzJhYbG4KWeCf9uT8H27iTACfTTjydCjncuwroDBmTCoGQ3JTW9u3",
  "key22": "4DPmVpw9cuf8pChMFxrnkpgRU9asEsT17u7qRMqdvjHoeJkmtvPGG8xbBxUaghm5FAgw2PazMXBDk1gLT4XaU99a",
  "key23": "2Fg2R21LmPZcCnDrBvkEMGgrxYbWVvwfeRWpawDa8Utak7NpxChmP287t2W2hTTFZuNVz5seZPzjWLD6VkQ5wY4U",
  "key24": "5oKZ9a7MYTEQ1cQDhvTMZwGtfYMiwdpQBNA3srSvh7Q1BQTF5xnso2E2LRyegiX7MLyrdumsDXSFGUMLv2hRgWBZ",
  "key25": "5zNL2fV99VoCFf3vQ5eE9xRyznkgdc4vZBjsKmNTF3KybzEt35Hi52YzuGwrwwAq9ZdKhuXSEDXzfMZynwKVrG8j",
  "key26": "2ZX3jgRryV4Cm25uhWvKCN1QwdQNrTkarMndq6cLZ56K7kAgTPZvB59CYWU1f4ucGbNcL8AYc5ZZonBX9ZKEQmem",
  "key27": "3uiZjtgRES9DjjDUYHz8B62rPe69uQhwp8UnXiixy91ntFTYWn44VAsQqBiseENpURJFNV1BuPSu5DivkJH8Kb8m",
  "key28": "2bxjCpqatoTyRyoZidtXoPzkSXQSfPbraw6VBg68u557Ztvu8qUVX8smPNksB2Q9aLGWDmwPfLf9ri2DRX6Bnp5d",
  "key29": "49j8hLrHbfSs7c9R44U5ZsJkwujopLmPKnyoouQ9mUnDoo8ahU6hdZiZ2rAko72PbQgCH1qQaL4hne7YdgnsnEBP",
  "key30": "2mfAYcXw4z94i3LMxjjUKw1iFUenPYErTe49WWe4gpTj9URif7ioj951H9FxEQR87kAgcEFEjyjJTtfayQ1aGQhE"
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
