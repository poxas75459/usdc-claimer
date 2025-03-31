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
    "QNTnZqUKgR5ZaGamh5jD3KgvhXkMXd2uxpBRs4ooqCczWECuXk3rTAMmUYbNWqRAMHdsu7xovNXWNFYsEYyTyP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PkXKZb4YGKBvDZZczBycxh3rYLtjhEfVNYHZLYzxq8Wx24ojS2hMk9Xsmoojwo2uABB25KWTCA7nW1Jy6i5ZcCw",
  "key1": "3B3FrQxVEWJzPoKXojsDtQqVDWRNLNjXMQmkeNr8h3KpkubaEWxvXr7wuRKSjQEkQSqY3DT2drwNReREzetLSuq7",
  "key2": "3FuyNvfnutLQ2aLzR9tFhxao6ePJct2ABXHSu5tN2SGBnvA2UPPHAck9cLgKvbRVQVjSLgAnfXuahUW84eP7iFac",
  "key3": "7Mb2XpdDikoAHvuzu14nuPbjRvDjQMmgfA8aRew5xH54K4KADjmP3E3pAnpKkwhXAqDqu6H7FS5WocB61X815jo",
  "key4": "3Wg5muPZKgZJyv4WyTLpzEpXczHY5KnWk9RoMjhug2pkjaMDUZbxmhUVKZbsR621hkkVezZhHwDvE2YKMY4ithei",
  "key5": "4nktxyACtqBLhSBfR6t3Ag1Zk2ASwSmyieXmR8MT1GcAvsjRmTHJoDV5RZrSuFY6tv7WLS87gr1CaSC7JQFVh8rY",
  "key6": "2uigCxvvaQJfotMZ3P9AmXu9jfUGaeq4qHT4Ba3yChVWnAPeYULuTo8kBhkbctDGff1gn9R9UvY1iWcT6x4y6VRf",
  "key7": "SvAvvm1HBpdhqcTk9h22cfnjEKbJVqhqRBNPkChtBTriMTDqK7oDAijMPMeqa1ij6BcLUUwFytDEh5Qo6SbLJhT",
  "key8": "2p4oQmeHdggk5YFnUabqKeWnvV8hh7UMJTLcSdaKyFuNxeYKmb3a8BcRf1vEc54AjZ1b3D4hrBxyzeDkrnx6eZzJ",
  "key9": "4KmHfLnzjfvfSuPH5PtCF6S89vqcDJwCoQZJEWYZfZqpAMr1vDQf1u168dFi4fCmMpLbk6RVpYM6mRF1GJGP3RA1",
  "key10": "4XcxiuHur2tsHGZwHimf99QX3aMZbyFVSCq9yahx2beS1qk15SzAELaitBR2rd3KC1gyWwvNxwWXq16KEzuaLNbE",
  "key11": "2dhzwxWPPhvkZYUVJQGDd83K7uaceFGqmH2Z6NBLrgnAiVmZyxmguLZeWdy6SsEP74CVfxZNhHaBsj9t6QFHcm9J",
  "key12": "D6dnGRsn7g3mwBUNBVEQZuDWdpwQd76PTpcMdEmkRWnc7FJaN1atPWwbADH3dauLBuTJj6CF78F839ALK39jqb7",
  "key13": "2KVtfasoz2U99NbtcR6ck38PvD7awAagfkA2xdW4rFkf6Vzdn7HAiWvAKV2ieZ5AXV4KvXreCsef3YVTch5WULJA",
  "key14": "3WE6X7pcLAYbNxZRXfmDtWiFL1vHpQCzJKRUmkVWYfaTorc1xmRAuAzKyq7zzGfoU89KcUuh8PPJnsko8J143CqU",
  "key15": "4tgta8VRkcDqyyLzTrzEumvHuarJsAXuYynSEwNamaLERxRmZkUEec7z1D8VVpvSFNVbN4rcdM3b81NWV6wg7eH1",
  "key16": "4D1HsuDZUZcMpDKMptcxpq5afR5iuHiMbhtHW2csuX3T8YouHYRGU5nL6bnUo5AQ3cDkx9c4oGnXKfG4Sin5skjn",
  "key17": "5ADjE6whbkL1zuv9jp3xnwZJwZRdXCmF87m1hGogHXmXqrHs2sxbPUZypNyYrNA5UgJkDwMUifrDU5mGLT6uky44",
  "key18": "2YH4Ae8s1wwyyDvQK8ikjkDTj68UD7JkpeBcUGBU66ina5DwZdTje9A57PgtR5eBtdkiiRm8eiVp5r1tDWgqa8rg",
  "key19": "5XNpzwWxY4GPT68RfzHkc4wWgL3GV3FeKv9sfcCY34way2JiA75LKczfvyiBGCYAi6NUwvkfw1z9ntFNcBBmXGwv",
  "key20": "5UKCvvGUqGCsRQm4yAL7vw1ZqtJ7PH893FnS2VhJEfQf6gC12ZhbPwnV3BU4RE6G8zoVgX7f9uR8JdXSKm4mG6KJ",
  "key21": "4t6RrWRktYA8wZXHkWuFpdeDgm6eUfpxFPbpyCyEmywWRWiB7DSrvTbQqfQ9zCsJH2Ccfgz3gZFFbdJ7aTPR9BZq",
  "key22": "2HLqm5AA8sr8pMZzu1EE2ubvrfBtR1CC89N3iXrZdJ8vDUw23drVrKLuzY8qiz4AGTrdRnkcKk42UHy67nfGXGW1",
  "key23": "4A26hfKPuFkSLcJ844fE3RuhjqqtQiJscRWE4whhRSSf3r1ZmTDv3kJ8dtcrbRTBiWaLcxDf9qEJ91RUSi9QRbQA",
  "key24": "2tCbHQBem2UqxE93jpq5pgUbgCbnNxsRDX6HdmWg3EQrbUzDmazYxPtcHHrj36ey2FuK48SRT16sCYTWgiZrpKXj",
  "key25": "4cXuLVtthHwsqFbfzaaWkzKKsFNga6KiZ5ktXTcLPuZ37F7rNJJEQVuznEhvhWSfYS4rh5a93JNHq5EcYDZZvzeL",
  "key26": "2AaHhjW4GSnqDtJsBe1U46V8uRhUfjrTnxwD6gvDCnbm9Tw4QYqfvejFn9nERijxGXGBMQhAwcgZQW3hxsdRZvMs",
  "key27": "FBBoVEN66Zs1EqpvVCA2D1KRcSaGDZLMAP3WQ6Fa44zjT2jfSYYwuuo39w5t2FJNr7nwk9nxvV8dGwnKjjB37mU",
  "key28": "3BXWyKxmPJe3TQQabqxPhaVGbW66KDRQCyp7tLhkeHCWqcYpCGWmMuDpdhcPeoV3BSfEMa3wVvCdwz7cKzrQCsSZ",
  "key29": "3oDpWJafFxj5tQic6M2vbmURWN8JA1X5FGnfQ8vAg61DQ5qUmP4mNQjhN6VBxLTArgd4YEcj7gZ8a99vLSVbaFDm",
  "key30": "22jPSbkSgtKxEtj8xaVjyLMFHdG3w8dKDSGKhYs96NGU2akk4kUVZC86qrKT1Pgs1vePWQg8iYis3MA9n3FGhnw9",
  "key31": "47PUNRKnkArGL3PQ8fC8URxZb2eV1jaHX4MguCiZJXifNNq2ymd7i6sTLhFBGvhDDMgGBt6pmYyMxeXCteRDhYvw",
  "key32": "4ExjntSeZEbMLvatNHfcvENeFBxrS9dN7q83cKw4ynLj1i6qsp3KazCfjLiDuNh2UgTUBYfuJvP2kgTKNWT9cZ5g",
  "key33": "5MsuCSgz3AYCFB2JLcqcAhioWnTy7jbXjdMkJfsyvdNdpMs1oxcpz6TQLRQis3R6QDvfpwRj3dp6tmfrehV94GgM",
  "key34": "2K9vKRMBM8mZVaBWdRZFkL9kqpG9JtovLEkMCsff8w9UXgV6NBNMBqzgTyfjovxeM8pszdEkrRnyN4q7S3f3XZeG",
  "key35": "5itCd9oPwa1t8GdSwrb5LK6v9ieRpGQ1jwPf6acfMRLyUjnU6cMFKKR5Q2NUpWFwTZTXzzGCM3D7YhT3c6L3XMCp",
  "key36": "X5uB8g5CZm1vyNXCNdbJJoNAvJ9ipAQufdEMRN5N1StU62fU23Xh4FoW3Ww5dPLKHZ5vsAGaCpFzegjfCxRBEpQ",
  "key37": "2DK9fXodVUDy1QMFNEh9ZV3FaRNaegT463m6YDzsuxqgV9ACudXdeMQM9b9Uf68G5zNswfiRo7WLEEPjt8w6R1j1",
  "key38": "4smmTBHkXUsV1qKShroBGye7NgiyGNebEutKSgyMGsHkiJvURzU145HkHhwrsdb9zA1bMN9Z59oED1fYmPtgtNjR",
  "key39": "GGirvFh92tTrU4PVgS5s2oR3sSdiFH4N48YpgiafL22XVrZjDMPNmXNsqfAL9gaL8aw85uJMj8rMH7v56akXK9p",
  "key40": "4DErQYgeiadriE5UdkgXbBDGNhsEuc8PbTWoGXjvs7hF83nHE1yrfYZR1QygLfeznnjGw58pNVFzsGfHNdQ7GdVc",
  "key41": "3T6wSsh9cZEi79dJ6wkfkEGiSBcLZbeZ3wW3CnF6RCACYU6WcZM2DiB5qzFkBQRLDkzASWWdekts8GqmTShCcKBo",
  "key42": "qfTY3V5fVUbnXBHkFiwpd5Xh8Mq3o6fxxFN8oJ5FwosEFopWg6GqtVYMMNMxsbzMo3tDjDV9C6WrcrSXhDjk6Sf",
  "key43": "65QdMkNpQLcMKNpHxgfRuMZaTXuT6MVWPpjDGwbWP6usU5URuXWyuTi8bHtbfc6yfaMaACzNBhNNwxgFTTo8jnny",
  "key44": "3QR9LfJddiA9thgdzgWLefmptKLzoAxsAkMPYvsbFtWBoCU8yfskUtJNvBnacPM8DAZVfdZ4XPMRAV21GSgoyQXt",
  "key45": "332zPaXrfYFeYbSYxh5fmo8kDH8dxDroZHWgpHRBKGm7U7shB6y4XnqzNK2Z4q9S9TTypKELWBQBEU2AYBDd8mbG",
  "key46": "5b1HwgSENo9xoHeZSa19YzFDpEazKZHsELdSst9Lh1t3eXstUTPgrymrUbSGhwRnN2RfgUtYMyDoPfEVWw75FSA7"
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
