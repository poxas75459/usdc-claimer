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
    "61YpPasUrSoQGAUC5GjeogrbZM5paJDkmGqxgzQDZNu9FN28KvvcFqh8ooZtfFdXJ1Z7XxRTsQiLF8QAfNpYU8EV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J1Stmx2NP4krD1Z7Tkt1pWSfyxZcYadsJpy1D4D9xAnAipJuuM42Nstr2b5ZnDd4cmbiVjZtNGnRzCGeNWLrtKn",
  "key1": "3H78vpYv4fBUm3QAFpK1YPXe9CBVcgDwNuZQoaKFf14h2vTojRpxV9hNfjRaAFBcafZfjgcQGatZaMT9iw7oDPqb",
  "key2": "5LjQBao6tS3Nx715r5qhKu4etXtPVvcGhdfYC3UGZ7KaPc5Do5uESrjjBo5Q9hgBP6HfyHF7b9j6soKvsgsjXPNE",
  "key3": "4QgCdsXo8T1ib91NW8XZauQKidZxVg9KsaCUH2jiV2qb821F28MZRRwQAbzLAhdtzHEuLA72cT95vrRTLiTp98YA",
  "key4": "Vv43Hd66zPXJZsQkpxvoaJ3xKGCN5PeWU4LBo4YecVB9VGHepjLVmf4FB6guXHMTuqvcPawsEdNfzvTau2gj1Ld",
  "key5": "3SXsTjAzDGckWbzZ1eVBpT8S8TsK1EtEd67PBcgieJL8PiYKTf62qWDvAYSV8c24Tm6NfSsH88fS7vgpA79vMoFm",
  "key6": "337dwWemeoS1kg65CiyjZgyfTsAd513ZtgU8Y47aH4hsza9hMegpkcgKECsZyZMEjb82sM2Y3ZJJ6ijB5v31Yawk",
  "key7": "3ZmeVtqHx3UKDXncYGUxcCX54uzAFYrXHwGbmFiarUW12UUx4gJEH4vbWKW2KicqjzMsKauMyoD3YBqfdMvZBkzo",
  "key8": "4nvKy8uiXFyULVvWMGy58RSaW9J4xofmhKkEcDxQ5itM4gkNNZph64X9twDao5uiiCpfWnWcHpCi5P5xWbkzAQU2",
  "key9": "3A2G2xFSqMJcY74LdxSKWQ1S9E4x2btNQVvY694Ao51SqqtyDxHDyC2Md75Gtmzi5ZYcmXwPgg4pJquVJYUM8HDr",
  "key10": "3RnzAWxRUudGr1T1a2gVB1jG8NZFFRpuVZuGnNUcY8g1pgK3mPNR5FiDyb3Yfcexh5FqCUKmjgpo83hyZETu14gZ",
  "key11": "5xg7ST2X3fq5zRUG3sEaiaNNVruraMVzYVQ3jJGx4zC3GCr6atnPdTDuUT4sDKXk3e3RLpWTaBTi3MWAqsKUeU76",
  "key12": "3HCw49BCK6Jx13PExT7i3vQpu9WonGVBeHqr34oVz7ehdGeFEreUj5axTAvszGtyFkJMh6AJBb6uehrTBsFRksCD",
  "key13": "2MoJCnxq1pM4NUzj2SSQtE7tRFbV8dAk1tJqTZsTNQQTHJV96aZ8WvKYcUf8bfZxR2ph8s1B48G2sqLW6FSMowpo",
  "key14": "2AHh9VQ72gCj3qRRUg8BBLvHHrzttbXkHgNASsHg4mCdDc8PxB1nEvDbjhNW5tg91YMWsq2GQdvJtTLf2CdR9zm1",
  "key15": "43epGDqFFzjdXiJH7JnWVp4FzhJUd6TGsRH6WvJYAF3AP9wuSUaCxLec1TEPzqDEPS1tensfuMJaMruMkytzF7N1",
  "key16": "3rRTuM8GwYXW3DfNMPaQPFpVFjjLspzacTRnvBz7Yy8stdV1YsV3ThpeyHciGt6ykFqYwmvFbWQwf93jpxrbz42m",
  "key17": "4iaCE6GoqXWap3PGoPTzRWfoDRD6J31DWFdoENDMgWiS6gGZ8vTQSQ2aUsbCychLo4R2eRbibPZipFjG6RYQ8tJ9",
  "key18": "21D7JKBQgBzRkzFeMGigx6oNRhxWppFCC865AXQcondjZhTV7mpkq8y8ogz3cQzN6vS6LpveM4h6ZeiKEeHu5Gk6",
  "key19": "26at3YEGknT3Ebr1YFBqeMzubNLmKNBVNngid2GZ73ZZYHtVB8CqKhu9j6jW69FudKfjQP6LmBD2n2r5zRLSjhkP",
  "key20": "5i4igcZwoa6GM6zppW6MYRmQYsCrN7ESBoeTNhbvStbRicpBVZ22QrD1kmGHFu8gHSGRhQhfAF6syFBXNAGNs9pg",
  "key21": "1HLLWcdLrAscQQ7Q47Je7PRH3dZ8RWqy4Hrgv1eJUEm82tPR6hpB5AZs6MCnFQTcC4NyvjdSBCbCHdxKfrPFmvF",
  "key22": "2iLmPdFzVFRL9E8o8wXUJhALobTuzcmmqrebhdrx5T5GGtKhS9Z8vB7qXf3SvxtSf7eQSUqMvnoHD8345fTwvE31",
  "key23": "gJfG3xoUM83XDM8Guhbcz1Dp8uQhuyrBgWrx34iitNChRHCeYFkP21Ujkj7pLepgTzTuUDaGjhdVRSKkS7ELzLz",
  "key24": "3CBXs6KXSNzrtig8umKuwNdx8YNNm4rcYzNqWebpvAFTkggas6wvF8H5FTz1qmmDzB3M46b4VPJeVCXGGGPsnFNv",
  "key25": "3asgDvGw7eH2h8tbRXJk95YmztmcDA978Dq1bT3weY4N8N3RfFP2jtHNeyzq1Ediicwr9TUZ9krTgtu2ksEPuan1",
  "key26": "ZRqoNiJN88nxALnrLjK4imoEDvRfTs1ppUV929j3F9n7JCGphZs1uXLTUW81iWVQmvsurVvP7T9Az7EobnEFbgX",
  "key27": "2f2HirEuRhGzzyQBbCvMciHHht2Vaa4BMYzroT4WqUmWwTwDH3keAKaGzFznxEi9c4H2LHmyV5qh1E5xifMQzkgH"
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
