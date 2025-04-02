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
    "4rVWjH5QBECuQyweotzcx9fdgBMVV9nSq8StnpwTAZFqJ9G9JqopK7eGLDK3Z45dAByQeEifSqinLrBpSQggbr74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44tnvqE38ztBBw9nx9FKvTeaLaEavczKxUC9qZA5dAXRWjHBVAprJkSansWba5P8sMWAoaxBaRkQt1oCwpqWa2eW",
  "key1": "2Ze2VFekZrcimV6t2J7NhZnBJNmDjxNGnjASpVAKm2XRH5LFWyVM31PbxXSHvw7pyqHPDwrFWLznY2vYZBypLWaB",
  "key2": "2SgMvfv98LKJ2uHRyV6ktdAXMjLAgJRzGCX4NGZ25MByxatzpy63Mo2GFrukTfPtDVfy6Xx5aXjkettim8hC1D49",
  "key3": "xzuF1QCMbhUvFiXuf7FiAWL3ESFHjexHPEA9d5gzz1GqxeabL8HAhM1YNY4M6gSeygC4naFqSGgZVLHsUqgnaeu",
  "key4": "5mewzaz7jQ7eySBd3P3RAWjzZzMXcajpAoh5xYamM254YubrMChVzkryDkrSHDUhhwqaWBeh48eK3K9oGBWQharo",
  "key5": "27rydVdxTTYLnaWoxwSou6qNWLhoN3CzQNEYpNG7ajj5di7jLaNwz7P2NC78rccpqdsHE3o8C2w5c9rDpxZn6c72",
  "key6": "MkEGmAxVoj78sJJQeaEmGiWmKJus4RU9L2bhZ81D2k8CiSn9TzufHeVy9DUu8gGTpCzZAwZ8iRLUEVYWsg9y52x",
  "key7": "45Di6XLbbKkRqypNoQ1w165fapTbNbE8Kbjwj3TMDy4m2xk842TgueY74T8HbUmA2uZEJjeqnRjpeJ23fxpcPVia",
  "key8": "4w9KfGZoZ31GL5QxKJhfP5eE5KsPRUmrew7a3UaSe3Cjm5e5gqCfY24ULGrAD1ytAjmpAoEqXvrkQQ8YnDLik9DB",
  "key9": "3j465di7fZQUmjZpMhKjQ2UVZ1z48JUuoYa1nK3ymjsMa13DzbmHYukVWvr9fLoB1v3vhotvHPfnDmXQffXiMqtQ",
  "key10": "2UFHRSbmwXwqb3CYC6KPbDSWULKvq3ecJh4dkZav4uV1VjHfXdPZK4MZCmvLGF4Sy683QHRm4vkWfQzJT8Ht8yD2",
  "key11": "2758GSvyioCEP4drq8Z41EoD9UTpdDJqxr7da3JvhCdR9VTGd1Cdj6ZKk7a7tb2PVbnUupgD9yvBU8AmQF9P7BPs",
  "key12": "4EN6pHbV9ezEupx5SiZE8Lo1obiGoXYNa4AjdELVV8fVwsLeUJ7gYoRGfihPfaNtbhqNnbfeSYuHSsenMh62T2R1",
  "key13": "2xz14PDgRw9z6PEu5sQR9zYZvy6CysFX4Pa6nSHvjLcsKUzd6N7rhnRQ5fQhPKz8t53qNoF2dDwe7gvJBwryRYZJ",
  "key14": "JPbf92WAf7J8kaGa9wTmssAprYkNCo5k6e9fwPuE3nDe9MbvGxCRZF1FqUWdSiGUPQn4iDZTnmKyjj2SDzxoycm",
  "key15": "aBN6mqdi1wvP4JQQTfKGJq51XJmLrGeW6enHQE2FrxFj5Wcu7W39BgGbM2kuaSRBF1Ufi7hrHhxLFuDwmLhA1ez",
  "key16": "ciyzTVknK7y98BXcKR44c3NaJNkDGaDCeT85Tif4fhKCervYVHUUiCDsYDca6upEPzEMttT2uTdLxPCYKqcFBrC",
  "key17": "4oqxAhBZ9dXt7CAdzBdZ1LotgfQiFdvo2HwisacRxsBZ6e5G4yXxbdk8URxAa5ojEUjkmfGn9cPsEyZuYfJqZf3y",
  "key18": "5FBbgo8amwUtnrufFUTFTATq89j9e7JXazxNb9ANFVHHmncHz6GFBZ86wmcLgjAUFpH54Xd4Qn2YY5ogweHs38Fu",
  "key19": "yi9dU6h4pfKmbvqwmF5wGA73X3fsf8ttVLQDLMQr5RuiTLHsa4EBiu7gXEfXHFHnMArnaKYW8HKZ2TgLUVxuzAb",
  "key20": "5441P6Z3oFfxPwEXsH7ZSu7mtZSY9eDiiVMe2GBZGXHXW6jdu4kLojp3ynpiFdNdxBuJSLffvd3RX9vN3Yfme4j2",
  "key21": "4F53wrWy94E9Ckztkvg5QgsLFvcxbqnSPR1SMtrzJnCahTYGQxEBFv5rwac7nBj97TN4hmm5tu1845aKgb4WGKM9",
  "key22": "3sWVnsMnNcAzvqg7H6DqheJmaSXLUsABE6g8wKUZLkNEPtimDcT8PytTfiFjKH5zcXMbVmuUNehisrTS9rMhMKpE",
  "key23": "3figJ3wQGCV6LfVgr5C8DbiLM1eMQPzyRoYy6r8HDMHrXVJd9HT3XmQ1ezvxJuMhJTEXddWbNC34ja1DM9gnkpkL",
  "key24": "5794Xo6sASp1PLHiJQMSVZxoo98sTjuqfquENgRGnqkH3Dc3wbcwo579UzYpwoQ89nwSqdzpGt8hitxV95ZSroD4",
  "key25": "86E8oWhFHbYZ6WXoRfof7eyo2wJPTjxp7i21GmErefZj9nFVhFs6iBsiHuE4uNLrpcpdUTR55Z2cWJfScpGr2MX",
  "key26": "5VBNkDK2BBvbey18jRQi55oZdajUhz3cwKMJLBPtLK9gpkFQYPWYyDFJwfFSn55u1NWeg6zhDSpBe1NtPTwcbRpU",
  "key27": "59CqzHGZHyGxbkqvkVDpqcRBrTLwXpyVK6cQGMUSbJSJAmRh19dTzkQfVLrLfUDJrGKTbyLxjbD7nLQufdi9ECWU",
  "key28": "2sUFLyyZsG8jARYhWW4FC5baypdgHZvSpAkxVEP9bhuYdGc7rMDme4NnPxyTtA7MfrrB3Jfi68AM8dq2Ytyns9jH",
  "key29": "3yxsdhoNkLAHqMCKQdqsCn3voAKhijuKba4rzecZ1mWLbZLgXh62rG316fQha1H4d8QLCM6L8uR815edBG33XGac",
  "key30": "2pPozmEc8Gju9Kpq6TdDNeFAinGKxUK2SKTqBdCxmbqFJpKdRTXDmQD2kHmDKX4Q2sZ7FzzrbFWqmRyHysc28K3W",
  "key31": "3ejH1niPVBpTzBZNnF1jPQrxATDMFBGm94NQh46VK2VuFiFgFCSudeoVwkbkyT4MhNfQYpAqjgQZxgaffyZPfdJW",
  "key32": "24pzrR6mwSSM1tqiRAmkkfNQVdNK93xfEWQ3W14eT3cdLrc7i2JpzyJ4ezSMHmWt6qm2poZ3Uk5KLqwbyxGdimz3",
  "key33": "3puSUipjGVnfXq7kDbcFzhMBrJrWoVV23B1jX8SKniMoWiCTpjogWqhY4Ew59cZ7huw4hSPcuW3NUS9uQdiREsFQ",
  "key34": "2VMGRCRZr6FmcCCa33kTBfQamNi1C91NnNjBJg9XJmBA7PR73TvRcNvncojUpjNQrskBWDmhYcQSryJCDfTYHkBj",
  "key35": "53aDzNkLcSe9zc7JiiyM23SzPZKFRfmJwxU6uDig3u6Zmk6aLUSVtSzGYsyrmGuVVGrj148fcut7gohXyK3VrX9n",
  "key36": "3eQuNrCBr7FuvWj3aHVhQ9Q5TqbgroUTGLsKg5KgdSDPHMXd9xsMomY5Gy9SGKPa4pSDRKqLzfcKQHCseaephBkS",
  "key37": "4PxL2ZwxSCe21XUcofHsZnzrs9FbUMvAa9HdmvP5jBmGkrzw88UTpM3CAQaJR6WKCbNS4ipdZCdyF5pNJu2BjEw9",
  "key38": "EwabDAXDPscBn1tkfZzoPdRBtiYXyB5TvyCaM16D9W9JMzLb95z1CYQSUQLN4HcKpkmNfZmNUzns3yRqYSevvPA"
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
