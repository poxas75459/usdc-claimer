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
    "2oAdHphzTSQyVuGFu8qRUpF39wrq6wxzj5T1fQdJvp91gEP9Amo9qQ4jf5Rttk6zyfJ4hEwdu5x5iAaCeuthb7Ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BdBjewMoC5LKmQGj7s7F15CvrMgxca2SyVNV97EqzHvNL2DrrCJXyZk8hwKPmSQsGH1kG1ThwXorF6aYZwitHL3",
  "key1": "59ivJjyp2fMGjpaCQW8QbSkKja3Z37Ueamd2eeyREm3KwWpL66CYdSvbmoA6AsJq4BGsjCwtbCQtUcncLRk5QvYj",
  "key2": "2pgu3HgbKzv3XmXJFQMDGzhG69f3DocchLsr6GWf2g4ZYmgX9uvFsQ3cuZLey5fLSD71sgC4fRfk15gk6aDj7GKV",
  "key3": "4ond1AJ5PH3adDRYmQksefa4QsKzrnX2Ys2rp7qj9b95DubUXu2QYeHJtexSysP2HaeyU5rvqUFNcsQt8jEDP9q1",
  "key4": "5Rg2cUi7gQgeTEDeRNLCGMxj6N6eMt8B9mwq5mcbXhbjE4cDEsSb1KtPB8dzdvG2z3D1EuCV1VXVRq9zohhcFemJ",
  "key5": "25zzMhog8AZ1V9yNZY7wB3S6ChxhzWN3ts3k148bwJT47BMs5ErfsPsjZ8SMQ8ggn6pkUnd9sB378Kn6z7xc8PFk",
  "key6": "4pkYhHZKnmQjrnijKWLuzt9o3ZCWepSpAZoKYnXUFVxEW7dV5uQYUXKNsHPFs1L4nrJbjDWd6d6cUFBFX4AknBU3",
  "key7": "5j1RQ5vXikubyZmsGYSjR31QftWFGkEBHjRPoYuebw6bJm7W6rUTBh3GpqZQR5G52cW2Uz8Z49GfVCJZrRwQUyB4",
  "key8": "EuyGcfhZBcmviQgkNnyS6jhCtuodzGfg1TzMrQV2ufmGXCuxEFr4zSkX8ci9NeXYdc4AYNhJArpEY6g3BF4HvSE",
  "key9": "4Hfi29un7XscQ2KKuGW6W3ZaeGCbimyxgnFuDkoc9JZkW4qWfjEwfAuWxRn2P8jEMWTBULYrHk596msm55RtRd4Z",
  "key10": "QmrsHaCqE3xn8nrPqkc7RdESb46FyrN5QeaY6HKsw5BgagtGRqZ6iBZu2g3teq8B4aN3jpSLx98GB9WRi2t4FcT",
  "key11": "4hdXjHioq1XdsmSYSLExCUBv4FEEf4G8tYC1A8mG5iyENmfbh7nKuMWpxyYfemMpasEJMmW3JiWxEm7esRVsm33k",
  "key12": "4DTcaVU9M1M94q4gcimPSBtGwyfgnediqLM6jHZnwgRu37pitojPR4TeS4DBwDGPykPimw4iXmPcZwoRSRmU8tdD",
  "key13": "V5UUFZ1kdTDXYHoHXoK9FDsPhCucLJ5TFkLWXhM1cN1jNpnG7KBq95uRGuogsNuLgC5qYVph1jYE7ra5eMqvuLe",
  "key14": "jzcEsmaQpDBZAhga7jnaZUg6NxRSEcoZXaY4FgeDgGNcTJhmE9jsgTsBREUwHM8GzXsNg99gwhTdvgt11rwxZH4",
  "key15": "2MZUuq7KyUNAcnDpbgUNbmTLf4t9JG6EB2wSG25c3JpqWfAdthttyKMe1VLwuGeYVC1QQ5GhPoEKDWEEjZ4hiYTB",
  "key16": "64vJNUoiJpys8VGar6Fb8dNyc678Jtn3yacqVU97x3wWVxMuR46eH4LzXWki5tFXvpxv5ydPWpb3hmBpuYcXkELT",
  "key17": "4xrx7H95mtbGRqV8cs26iCyZKaemaoqJRHJw26wxk15d1rJ6JL7a4btiahUDXvi8HRLN2QbRwS9pYE4WH5Nm3S1k",
  "key18": "4hGdQiKaJNuNeNFQxotX1KrXTN7gEFe4ps7YpMGSkMuaiyHFgjZ6eftRQsP2z1vLLsvAycH2YM4694AXq3vYrxg3",
  "key19": "4XUv4WFQvsgQ57KzgWUA2cqNVS3ovSN7Wh9YqMKnBrG4quZ6kKAPSguJ3ez9bp5rwVucma3oNhjDyBNJGVNir48a",
  "key20": "32TqNsJyDH9Ayacrw3jayeeuF8JmNP51KSvhXKWHKBx8nMiu7GGDVPAR8p8mahnGxRWigVhSVzVVfTJyATeWJ82x",
  "key21": "k3Bq2kCP7EKf5D4RnTkT7sn4bJUm9HXSyR7CbDNUikcW3xK4AkWAsnUnF4cUx85xiC861RHf5cc43furiKtA6BK",
  "key22": "3j6J1feph7K7YU3VhQYoLeWTDTHJQqTBdx1LdgHzNBvzvtYc6gPMYfS5MtGF16YPyfyJboRpU6SM7Wv6PWY1Krpe",
  "key23": "4aWo1oSAEhcdGg9g6vofQSxzNpaJvXgxXzENJJyvWsp4oJJNsR5c17kfbaKrc1gnaQpTuXehnQgVKU7VLBqe58w",
  "key24": "4JbsAexxhsiVRrLM3x9zLM3KF61W79tDV4a6nf2iNh1KZefstuMgRvDj6YrMY7RP76BjMnNWR9EMJ9PBhLLJ8sSL",
  "key25": "4DtEhKHwTY9WifTE1hhVQaduTzWcpdE63Ko9bcohJXK2NkTriAC6GGXq9vg2QyVNBSVWKNZ61LRY6KxksQDZomBe",
  "key26": "4Xt51Ns2WZ1XrHmXycnzHq1Kqa6UUgaEGPjgqme7t2TMc9KYdzhfu2r36JqbvNbxmcb7Siwdbsrm7SzDtMTT9sXj",
  "key27": "2oxNDBTkfWd7RWKyzWJYUoDrUvrxfx7txEmkV1PK1W5fbSAuCo4XWAknbqN2w9A4agWMK9sRKvWJ8T2mv6mUzLkn",
  "key28": "3y3Hd3T1YUbVxihudFLCSCVsDNVSkZGKvcdDvKzN1U8Wfz1vkpbkcRYUGMgCMYKhexbADY2TjtnPChdmErmk8zQK",
  "key29": "5KBwoKDnYJZP36TKyk5J4SaToqCZpiYdRBo7co9veaVe6gEsZj34s2bfiqFTxRKyrUN6WnSBZqPm8irHKj5HRrsZ",
  "key30": "35ZLy1EcUaLQ18PG585D8jPLTy8NsdhfZHN965R5wtQaA2E4cFqoGKLWHe87q2DpmqSkvVifEVDjs7w63gKZbtRb",
  "key31": "5pdoHSyTgg1zaRhvieBdHCS346yMWkmmm5Qft6ZEHrvxwdGZNRdL8U6vAQKx64kRdLsWnAtNzcudTL1mGaB2a16H",
  "key32": "3jK9PiJQdb1gGQoev6HEJtgXnfDsRcBLBJdmVawgzdWs3tuBM6Am78rBrj2VtMXaHWdjyaiYQ8CmPZyvnLFBn2HK",
  "key33": "5PQbGojY15uQpAuHUrM7jbQUoEu6vjGxnYVxgEyabx82RZVKTZyqW77NoyWTqD2vM6wktXTUtAqamRUQ4r9VHbj6",
  "key34": "4GZKgUz4KScTHkZqjkBGGtqSpgbwb6t2THXHivwpMA6yqSg8Bc3XWwxHkp4uphnCtv2wS4ZSyjSSnmVSqfcnSVQZ",
  "key35": "3CGKDt4Wv4GkRRwqEn5AmnAFr2FyhG8bExC15mq82sH4mGfm4FphgNpW5ep8rij8ZzUbUirzghhRnPcSbeH6Pfje",
  "key36": "3dz8u1E3ThLJXQqWJXXJX7AemifrmVj5LrCd71ueDr5wCz1uBkgfckBGUdwWx6wCoupiBhjcyxKU2YArFiHpiSGU",
  "key37": "5ENorY8bpFiDA7WBNnjiJYmyMuTjGgjJjQBiE9mV8m1CWsC9gzJGTnb3GmCYDnyCVkSfBaTZufXdN9RfxHVn9pS5",
  "key38": "2S24prbdNUyFb6TZXdwg7CPaZheepLeLG2vNnyHQW4GVSUYqnqoyJn8JNR2hvrAvnF1sx1noXsWs3f794gfKnMgE",
  "key39": "28h4j9zqFT3zmvJqQ9nwfoyVvMyjN333SyUWZ1CqhudVWjy262eXSjps4qsEsx67WzdzZsBmLDJSpVVx8XYkVGuz",
  "key40": "58f4RyH9VioWKJDaGZJt8XbZn8SYfPMEWeS9uf15yN63RfQPnv4FmGb2GwMJUoNzunuRgb6zy6EmbjieYVRFGYGa",
  "key41": "64we42gy1iWbGhadAA5jwkrHHkzjhFo7UFMWo56raPdmBAaUccehV8XDemw9Nuo5hqpT44TXFfXKrqzkiDrDY75D",
  "key42": "48MGKiyqX4b97Gc7ZAnZGpsMy4j1nznfrqGLs51EdeNwvfKC8YhKztr2dPqsexiyHsG3wC28sGMfeCfgNhzEyfVp",
  "key43": "4xmfqgGSDwngh9J2ZqyBNZArksmHhtGhfjnGxegqtZX2z3Dy63bXg2HCmziTefkGDEkRAmv4VQKEKh6UdXBwBR12"
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
