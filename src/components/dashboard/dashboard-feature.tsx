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
    "2PzW93VUKJqVN1uzsxA4SZBfkJD7bux7CHxaKBU97hDiUKWqmTh8FNXRCCrCfzJZBRxLmHFCXZG6xoWPEyuAeR1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TYbhYkZNERhiLAA3wnUQFacGyk6J1Mwbc1hutn4YUxQ5XFeBwcT45ccUKoUAtCQjZAqWAvYNco13RYXBo7cdYPb",
  "key1": "4taDbhFhFVftG4XVpXRcKS6WtRGrAFsUNY4KgNhW5VG8xzCXbzvFkjSSTk8VgLbABag9W8y2SJ7x5CEXk4Cys8rF",
  "key2": "w9ch5piMKmu2zWhSUz3TkRG6bUF4zSw1rAHAkPmALbRzmrpMdJ65uCpT66or5UzKtw5KAPrQD2bThwyHzgG3FxA",
  "key3": "5RCUTxGykR4dr9KLta2t9f1Y8rhhD3aZAPq4xg3bNVbYSL6pPWAC4NS2j1EEWT39ESMyXxvZCWyWmp74F3pWrZsT",
  "key4": "v39aVEVLp2zTx8HzrovB1Y9piAN97RApmBegVroD7MDggADGqmnCVAmkqZL17K2DZ5682yHe997B7Fe6UZZoCRP",
  "key5": "66hMrgAA1i7rA9FYCMFxBpF6tybC5cYByQ9au55HRmoZD1tYWBMojwRCpnpBWce3dTTsXZ4gsiPUsvmp52jT3wir",
  "key6": "5Xdjem6BYJfaUxg33w4S18aJXUHXpmExRhLCXfhnoYyW7DwvPZwgceqZQCeJhXu9xvSf1HqHEyAbWupRc4sWJHP5",
  "key7": "4mkFY5DUGGu9t76o2cZkuaSPiv8d3Hat672BbvFVy42vxGg7kwiwdZ2BPtS4fVMjeNV24hp2ExT8DunmdYt3bHp3",
  "key8": "4usSFT339qJpHMQX8ZKY1JJmnr8qfBox8mP7YbJFkcdiwjVJryzGUQmG5FMHZV8mpDa7k9bZV1yjTUkdwFRdz6ke",
  "key9": "5Ar4ys4TaieWQnTtKNg556SQeBcuMbjRf59Fv8rnjXQRHWsrLBS52pqrURH6JJPp3kxAB6sZHpXa9FkMPNpfdgCh",
  "key10": "2mYBMMCXAyXnFi1XwCMpkbgJbn9uHa3fKghzgNpvbPFHYScDV5stxmtBJbSV1RZVvU6U4vnb7dAfrq7A8whvSYpQ",
  "key11": "2yAKuq9CXrp362wTPLXVCvSuViQY4MmeAP4wBcs2FVpFLmwhby6Man4nR4rAm83vQgUH5uejrS2smMM2e7RNzi1o",
  "key12": "37xd1gXAT7cvyX7xNkDYm2q7WtK2ExwyR4HiuUGwnzAmcJoZsDpW6nRUE5PGnqKhnrJuD4hFEiSDfmQvYMdJ8zCo",
  "key13": "2ALYdaHk5MmVqNYgiYVLHLZV1XyVsHB2MWVnSTkkG362Kfhv14WLsDHCGzzgC6bQYVQSwJHahbY7x3vEBqkeZU21",
  "key14": "v2kY19XGaNod1A6uVqnofvjxRX7JRL9VotxhuUqj1z45WjxDi3NMZfWxigqX8WXgDhcEYjziH7yDLMo8Y63EFwA",
  "key15": "5r73JUJqhGD9Njn1eDMRCZ3LWpGDNzkuwW57NRxN9BmTg59WBaEsgtFwtj8ASAr3MpL4Zk1uvNrirgoSGepe7DXu",
  "key16": "4x18nxbHkVSLFfZrTH1UQfoJRhzLdSmeZLZRNvB65hFxxirzBEWaxVsjcCWavonbhEhBRVLijqBsDndGw6awNAU2",
  "key17": "2KZqppY5daWq3MBxLTcsA4JXFqGgZgAmVtsPzDM1Nym6e1ut7azFWnQmJtVLxX8tRpKdXXZ1EHaSnhY8AG298Pv6",
  "key18": "2KCs66cyn1Kd7yFYqosotdz4Pnjy4y4HNn7oiCcSobzE4dwzMsowbYyTRUndzpgP1HCHPXdgu6EKZdKAVyCjJ83F",
  "key19": "twDAbVMEhuNgKqoQoQdDnpquoYez6DVJbJjhRjiMxgKaXaePmse3d7AGsjLZtpxPciSnsukjUnrcrnsssdWDZJC",
  "key20": "4SJNmAHrHfJ94ty9no9kUDViiFCwy5dsFDAL6wjZtRbA6hU5fddqh1H5vQqLq7NzpFFEuFQt4cvh1LQSg8cutvjf",
  "key21": "5DNLVeyXeqEM9Y5MKLYPRUisGj1wbb1qdagiuopnhVkqYUDnQv4BZG1BwMQ8VrVDW8MXtUye2wqRw3vYBfZnXAB1",
  "key22": "5HhmpdxYkuyJMasN1jMQeosmWwaoKnRcXvwxod7hLukDfL3FhKUyXBpfitrvEo3PaPXffe7HgyW1x3w8vCxqtFsY",
  "key23": "4PrA914jxj8dcw24qpJ1eqXBRtvRRHb8K9gbk91A7kg1M772vjQ83cPbKZyg8eSAnFLQCcT88wmXyAsNZP7jYvUB",
  "key24": "2FAmJx8ewbW1kQeJzhWMX19V9DJuThGkzp92ajPYfefCAAqo9yqaXeDsvac8hiaABm3xiX573mpDu8UFywXXynno",
  "key25": "3wA95cTNB8BNP13Vmaw49vhYL3hVGhQwN2EWxLtLD4bguAQCQa6RfDHjvPounSGQC8CJMoBzAHhW7fu8danPZ5yZ",
  "key26": "4jUkmpaYBabiF3Gpxn9iXjYV4gKwMsXDZe9URG5ksTnBnrn9QfRUoYRQ94KxsHoQNM8A44FwQB61sTFiutuacRnS",
  "key27": "4zstdi3zrVuDa9skNV1uguTS46dt82hQpfNncm5QT9ewh8c9pktEwVJrE5Cfw5ShFVYLWCK1y4aQapREApFByv9N",
  "key28": "4WyUUeYmdG9NRkA3XoERytXAcoxVVgYYDk3y2mymoi4Xyb7eHmQEd1bQrCeFGXdkyW8Rfqhsz2NsfE5mxfA761xi",
  "key29": "2649pi99iNUU9oN1Vn9WXz2KuDRVuCrfUUPC3kivbTeQyToM8Cg4cJBarn38SmHFX7cELw9z7HxPmnyq8scKKfUe",
  "key30": "4JvMvHektMfq8R5eia86YfCaiCgBYcUf4Sz5SVK8MvheEzt52yyJDwZRV9FnxyiaPUWZxSrnMTJqmKyC5AgvsNWo",
  "key31": "4TyGaEXyiwyAY6nX4Ekf1oCAM1ibWcFt5n2MijoCT3RtmcaiJqUdQKo7sZXXa7Kx3QJUPJ2wHUW7AsCbCQuk7v3p",
  "key32": "3m18LJJCqezQzKGTxwwZFVRSHAvtZCAHob8UBXaBArqYgMCnWdhRgmPoNJWtUxZz1yr6YnBuYzqqu8cQkGEzXC9U",
  "key33": "5FPXUPmibfhkTwusQVstTzTK1AYQvAUmcvjQx2B19xbXbU9fLAY9Zvwk1QWxvy3Zib6t1QmE4jxRxZ1dFmDjRdX8",
  "key34": "2dYHAYX5pJ5sAoorj5an6R2qog6bxLvChMhNbUheGx7vmv1efExSz2wX8nsDSF3t4VZsmYsRbBSEQvRfrLVSmqDj",
  "key35": "2PyidkSqQYgdYQYFjGvxSkf8AASGCFK2nkeDiPiBX78U2DWKzryPgS3HzcGfz3WDC2B1xDYFVd7ttXNrv3YVUe6V",
  "key36": "3WHtnBT6ASQvTY3CNkPA5rN71XSCwLp8eDkVZjaQgszwGfdMDWL2yVZQCewoo1dETRciEZXwyE8uUaUU3KTZtejM",
  "key37": "2jtAgF8hVBfSU7kWfjPw7WJ5HQwPPoUKhSZ1jPb1LGPh73AEWKWjr51jRg8PWkLQLkjkFAnBnBy6yCWZx8pwGjr3",
  "key38": "61tZ2424kejQ8CnHxa6uSoN9ZRPerQYsa4bCFbPguM9JX8F7hSYvF1VvZuLkEfUyi7iqTWivmKozs7XJK8TwDDVR"
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
