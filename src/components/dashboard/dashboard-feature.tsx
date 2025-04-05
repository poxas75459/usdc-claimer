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
    "Euj1f9jXyGfF4fYZwxeTNfyVkz6qjiHAvdhbrZgkevW8SLbZyjopddKfd1zN1qBZkbSonsgNCkE7zGz4wcgoL4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sATBo4dE1PgfFVNJbz1USPykcVpeCrGzomUz4TvuJbRi4CoBWA1hJH7AxbZC8tmMttaSRSATHXHetYzSWRULoMo",
  "key1": "2iAch9UafeNwAVG9GnPShJqmMghk4Zq21RamKsdcJCb85HfZo7tiBxVK2spi7iCT14FyKiDz1rVna3bifoxB8cZA",
  "key2": "3hZfjV8MVfMAXHxezScVxKqgxjewCu2NogHDsUFRKE1ZgEFxDnqjGosXpXtkqD9aE4zovkWTAkWGt83UWa9bUNWU",
  "key3": "2Wy3HCBxMBKtQh7pCLvZ8sCvq2cLewddaWSqqzpGy3pUp8CmwjCALpDW1UESx9aTg89kmhVoaKQUDVebLsBRAbWQ",
  "key4": "4nKLVCiMEQY6Wd745LRJcpZsPDiGyrcGpPtZYw8WGYEisX986QFRKzwGndoKVwAFBdUYp7WMgarGcDxFiaeGSDWb",
  "key5": "4wugR6smGkRmxV5Q5T8NkWt5kASPt9QuCRKmmasPN91bmousLcs7TprXX7HdH3WWfo47rJ5ikLRpmAwetTSRX6yj",
  "key6": "4g352247XbRCPH8bGZc7CVxrXRkgtXL6PLkYsU5siQmSnH418KYRoiQ2StCi9XtTQvLbTEP5fqcfyUTwaHWhhz82",
  "key7": "4C9jPWxjqijbTSEbKqr8wyEmNQGKfPcJYrTVdCVQmP9gsjQJbmDXx4BhEBKnqD9FLHJ3zsAVdbvnKJdf229R3Q6N",
  "key8": "4LcbJdXw4cNCdtDQoFN98vYwB9zaRZS8X7zimn9tjQQ4sgvb3kwGEc3nogFNh18tmmNQ2JyyRpTbbaCCwuRj9Xie",
  "key9": "2UkTq3bspM6cVVfaWMEdXHyYoJABELw6N1E3z2PKvHmRQ8U2XJ6fgVjKb6rJsjdECfQwQzybZuoPxxnLGEAyCsxz",
  "key10": "2k2WhRkgWNDHKH2DycJgyTA3Q6GRyKhC8eo6MtisftbGQGigzL8dypYLStHZYxZtqutqFafHgYyC4pvixRFYVGaK",
  "key11": "35vDASQAarziH8pf9TboWJ6MJhYgJfMc8R1RYMUCd3YDJUrwXf8pYmuWsmM1Ak5YAJiPf9i7bvGEXT55D1baF8QM",
  "key12": "3aHLKxqrhfEpTwxFQzfUEJgSiNqoccgFxwvrYy72v4eJcxsNjbcgUBFFkHH6JvMsa4vEb94mTquDT1qppF1qSYu4",
  "key13": "4hzkK745S9XCEGfJ7x1VF6GdPkUkUmxdARC7nvHP3v6J1HPYnzit8K6FaGPZBddcEVfNC2HHmtxD3XRUxg6n1NmJ",
  "key14": "3yGPYtjkawQbEJqoSTW2BSc7k7D4t1AA1PUkHqB54Z18WNgwvpQtgPmKm85erAefsjyYwi5eYXL6ErHRMebsD62r",
  "key15": "4Dpt17SXubafhus6fZAzUF84jBH2LkM7T53jqbZnNFkCug2hDhT91eL9sfanBYptmkogwZ5X8K8Zeg2Q2tUitRMC",
  "key16": "5Yy8NYUDotSJ58aTurBCAJvoEMJmjekUejxf9mNCxVGsAs53ZjXN7uGJ6itbzhC6QA92KS7jNTvVAmitr9V69Tcn",
  "key17": "42fugPKkcjU77krPg3M8uqziusmaFhciDs2mD9ihu5JRmtJNHPniAGhXwJxf8wbsKjYo72wQUE7RaFF7FB2Coodi",
  "key18": "3CvLAHkm8QxxhUCidhc5sEsDapgwFhVNKE5QduuwqXsaMFwkf7Zydx4UhJ2Bw9eYEpt9T2mBZjsiQLoa44QgWuVV",
  "key19": "49Ym1JsWioTDj2bQWWUPEkYLY2sVydeomn9jE66rMsoRHQzEfvsk2oQp85Wc7C2Q8hbdxVFbV14Fcb6eNwfQJjUR",
  "key20": "m9ioiSjcpAfnmAd7osgFJJHvL3J2bbAdmhrwkzUYacZDnNULMyKL2pCyT5KNN4dC2Khq59Luy3YUkMR2JVsUf6u",
  "key21": "3VQDziqZeyFPNirPgWgkihtrK7sMuJEULDaXBh121U6mVZdHhayjmgkurScZef5hxVotGDHnfudh2kWfwkDpwWqs",
  "key22": "5btpHLjUaWiAfca1wM9u4KKjTpJdFtSXDZKdTuZShMFq653e62yAN2Pzi6jekrAh14JeR1mZWWze3phcyeMGcHbx",
  "key23": "5rhHs3JWhN2w21weNnitGsjJtB2UZKHa4LyFyPXE7yWq1cgkbqwDqpq6tMCzcAvtJyVH3WPmP5QwrGH52juDciUw",
  "key24": "4VQ3mUpWZxqZTwM8LV74cVotmn3Jisb3Kbjz3N7pXTRZKf7nXtcyHTxfQKNNV72usfnRh6GDgbdkEWn5dwHDQpT6",
  "key25": "3BDrb5WCF29ziY118GiJJZF9N4Zdcu6j6HpD8DZH2812EkBXAoWTdtCd33Y8F181RkGU7EGpG8aaAktDdTDrh3WA",
  "key26": "54WtXkiJ9wsB9Nzr9tEe8CjgfL52osAcQDoap5KYBFt1mhdneTnxVCN3YW3skwctyitCzDQGa9ytHqPbdjCToc1q",
  "key27": "pqq2hGZ4VSiiGEtVMJjejotPjnEShqxLqUHkkSdwhZFPKPSLLbV9UNTszzE6rb8F1c1RSs7TmBWJF7tXVz6S9eJ",
  "key28": "LWRxAHj1RMuUTwqNP3RmRSNMX1e6JvBSH9u3ydR1iYjAo7UhDraUcLXoGP7CwtW7ZGhC2Hp1QYPY55uxngzFMXc",
  "key29": "opkVUecnRMnY2dgMnfrRXzXmCw5XLUerkmKbrz6ub6sXnDutBnUvZtbRnN4Pqpt5jqS5ZPnBnANr4SGXePD6FJn",
  "key30": "2hDzvBKSZTHuyQBeHvkSdEa6B6hzPGiVA9kDq6TwPdpSgb2gUR3hS7ZasUSyaDScLohXPUhLoZbXi1Nn6hM7Mrjq",
  "key31": "QdaqRVpBHiF6es6gM92KWhVxEuj2W22yDJHcDfKByYFCw1fJ9iRo6DqNBEtdbs7tbu3ew2DNyUa4g4Grh91x2yF",
  "key32": "2NSSLwiNSTuTyNee3gJtp9114ribxhACUQvro2rZeRKgddr9DWWSG9vZgc4xX9HSNyE56f1tywHfvHKrhj89AN9F"
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
