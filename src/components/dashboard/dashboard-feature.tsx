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
    "2yoEWtpdqzNZekkfqgWBRi7Ttet43SMpZnQuoG1qDzRC5JmCKcbNAXyEhZWfAzjRu2KGvtVgsTZ2WQDaGoyBBqAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sgcj4QS3Y6dame4wSa9kbYWiAr5ZN9c7KseeSDu8symU4AkAtcCxKdH7nfg9aVtiBpzPVJAb5FE1UiEYeNzdtEN",
  "key1": "4dBCVcyLYbeRGbdSYxU6y49eC2oPtwxAx84PHKYLkJ4yEizhXLdxBwy7EPqHC8dnUJPWJA23sptNvh41KeL6cYR2",
  "key2": "3ukTBFVSPE64ZECerY82yoEnaF3GFCkNuRBCeFzRoiNUEmnscvAgv4pofytUNkkmzsACTDiKRsCrxQ8kzEUEUhAn",
  "key3": "4DGqVRw1V1z5kR9kFVHxJsFCcE3Vwdz7FBuk9aCJ7gxc5EMBqPrkWp8mHrq9cb1oJVLuxfw5rco6Vd9Eaf4YiyjN",
  "key4": "3M64Xd2VRBU63Tj8oJ2E4wWehCNVt348196awngnYqBhd9NPeq5de8vKPEDSa9K6yXfRzEL5WoMeQbiAVSukNRhf",
  "key5": "4Bxquy17yhE3G6EDCKdW2Ce4NWHBhB7eUR4ubbYedHqfmvM5Q1oB9GAsCHEqkowfnSDxHr8Tw2bAyEBGkLaEjk14",
  "key6": "3erVeTacUq89EjtzXEsFNECLDCynu8vhchbzSq4k4UD5ujht2biAe1G7yez67azpBmQ9sceFibdDRy8MeV6wfKFw",
  "key7": "5GbzfBfne7i4hCdvr1qybxiH9nbJtzgzZcSuLXJjnSM7457V1c6YL6d1v3L4MABuscW3iwZmnJmEhqC8MaYsk1N7",
  "key8": "3jbtCtpfwBFSnpHkbDsHPzu5pKUxx5FwXJkp7sKGtrF3PQvQczM4SKixm2h9phHjdUtgQJyqzGqRzreUKLs3QWEj",
  "key9": "5rqcp8qkmxNYUdK1BsvWjYXcHGivFwCF1nAAqMHQuj1z6LJP68Y5gWdSTUFCBAo8iuTyH4NF9UsvfvjrD2evjgfi",
  "key10": "5WVy1GkJsYugoqDsgf7oV6r839r3ZSTyiXeJ6N4bH6JZGA3z6QXEc735hJ7zJj7x3kxrEzqCimf6e95NNmDEcBJ5",
  "key11": "5HhprYBDP7CJvmrJNBTxh51rGnW3dDK3nHfYALmoDVo8mqrxBJ3zSvPeSL62n6YXMVES6JPDM1WkRgMKj5rHYzNi",
  "key12": "6634Scta1FZqq1SBz5F56dyagp4yEwVRu2v6Sii7BG5Uo2WBK2s8iA8zFGTzoeWZVZpxqdUg8VwCZVgk7RHyU8Vr",
  "key13": "2ttj52xyVuf9adDjfdgSJmJLRaVD2gYfEVgcAv7BYSLHEJG54TQr3STEh7fRtvyEZHyRZS2FVMZ8bjTFAKCbBNJk",
  "key14": "4R7SKkfe6QRd3bvp3w9ywSqWX516itBkgRWWqYK685qTcQsZCXE8PZHNJxtsJZB4CGvE12ui8aZkMmHsL4YvR19C",
  "key15": "62DwNtR4AfYa9UMf4pzDkKH8jtaesnxyyMr623AA9VUiCR3Fk3s5FP3ycxrbhN2fjZM21oSffFJzSMreCtkMpvTe",
  "key16": "3XxkqszpeXFsoQqpeU7m9Roevk1ouZCVqQnh6yWf1cZwkbHeXcrdFMxB1Qzp662wfrDqnn5HKojXYwMknYgvfQ3q",
  "key17": "3f2VNxTB9bKfCzQms2vHJfyDCB5XAWLjxEPrSaekEhUKka2YbP1SFkD5Sg2Nk5YLmUYZaeHvZc6m8pBz9kc9ZufF",
  "key18": "4fuEQvf8Q1Vyhk536HcYQWMLPvxg2hXM5ty3QYaMu5LZ8sTRg9dW8BK5MgHzSezhtSw8yGT1LPRGU5TQUqkHh6zf",
  "key19": "GeDFyQTg39nVDLE2v9NmDZMUSPP9kKAr5csq7bgU3kWXr4z9nneB9bNdUVfYtbCXG2QaC5QdmdpBNxQnvFyhshT",
  "key20": "PNycSzAp3zRyHN1xQBXf6EmPv85vmDPpdry7S9j6SPjh2xvMTpziopXV6Azthk89FgabbCQDvi7dvyFMzsqXmTh",
  "key21": "5ss92sZcDasjNjdoqXDd2yHFa2aSugnEzNbnzv18PnGKJzAhMgQp84Q1DEFGQHH1AvmbriFfo8KRDnAB3365BRJU",
  "key22": "qn9fZBG7SUmWao99gFFEvUMu5qF5yW4aT6h4CuGqechhebG4Ezt2PCQ6ummXrxqgB6gr43mhH1TJgaXZrfL5wNb",
  "key23": "4QTK9hbxhDp3NwsYM89uVFEBvbJNDe4DHeuy8Wr2oLgFG6GvggjRkK7w7DbF67wpEUVzkqMgqc8UbtF5gZumSY7k",
  "key24": "3q1pc5jrkUfNXMi3gBCzasPYQjEoAd1nySZwVNYv3sG4TC4SJiip2cGiWbZ39jK2mPEsAtkDB5NruGebLSymC94K",
  "key25": "5uk9jZDzM54MZmswarCeAS5Qect9ShjuXBrTNjya1Jcvwu1LqSLtwoPz1SX8u63kXm4nKMBFTGg9x2dcUgrHfGKA",
  "key26": "3kzwxfvJ468SkcFgBareC5NRsLMBraXWG8qA4HeFbmyDNZkVrscpJ9KZc4BgHduRJSBqWv7AoPCRVaTgxGJxTEk8",
  "key27": "2qHwVBDzWme1UHEShDSMi9x9F8imzuZHpejMdghWQ8A2BAe6foTsyu8YDUHQr46MuvsKemFyw7pxPhoa7VMsHGVH",
  "key28": "Kpck93k99aS38phhN9wYjnF6tJUN3U68LFoiC2nPAMCHwyUEw8FkLVPnFz4BiSADQHzHhxJeqVoXMks7aFaHAck",
  "key29": "3sAsbLB8KcJeAQYKHdDE4A2kbemxA5KtmDAqPbFjrtrJyE1Jh2rwq4nyiLiyFDhiMHMhs4DGnUQsfHfGvJuWbowy",
  "key30": "31wdqh6EAHmTi9rBrzPSzQWcS18R5st5jXD8sjRRQjLK4Nu8FDn8f8j8WddG8vdH7RHHXc1KPEVQhDPacqdeD81A",
  "key31": "m7BwBUHyguLazDdtsRbC15JMKyQxQJMBwUGvuhyiuEjFNM1LDN1WHjfctRU3VxksiyDKryB38SL7pm4SVzfaBZ4",
  "key32": "4TS9TJiAuEAmWQ2b2BSjxbpdQyczRbuUqk8YcLE4fB3pah4AD5vay8hMDH2erxTaa2VLaBj56ro5RWYU7sYrTJ59",
  "key33": "2Gg8yHgZqbRZzfYh5hAsLeJLnd3Zhr5AMMC3wiNyzv4B7kybxi8yehR7mtVtASrmB5JmdmWBSWQooBznjvsaETX8",
  "key34": "27yKH1zVGk1XnGo3jvZTB4tS5CYPgyT6LehGdJqdR28ujGqAwYsq6LFFdHt5Jdx3FyGQ3EysTdUaPJJh1BDc983r",
  "key35": "aKvCM3EGbcsSCEdUzEPFmt3TVQaw5fjPCzKgNH8C6bgTdGtWd3T27Wa5NtV8HFJt53jWTQfMGekW7zgo1AHJwUG",
  "key36": "4KSKJkQ85Bp8FQeBCnhz1NSPshQx1yxTMnUZg4XYUoaV4maFJe6BmZtzZ2tReRxKJcTQnuCz8Uq9fZXzo3XLkJAh"
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
