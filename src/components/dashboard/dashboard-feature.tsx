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
    "cy3rAGp64f4HpB3YgFXmK4AqzE84R7oLsjki78vVqEPb2jqm7vdxAcM8t8b9yudUwJNrS1xLt4KWaCrEBGPDYtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61qzahpSGgNkLdsZCuJEyAJJ3NPB61aju2nsZLGV1ceRCpoDDstzxrVeA6YyQPtjNgj6EaEdb6ow7hSiU4whuwMP",
  "key1": "3kMiCqnECRueVouLtMGpGdzhc9ssNKbwir7xQdddeAQxWmdsdFMdXyLz3L8habrhSdhbuHgGNF7NxcatspKbanT5",
  "key2": "5UgsStqp9McDAEcBAJRbbFUhWGqze2edRP8d8nq6uo2EN3ThmGeWQpHF1bg4Gn9Lqi5nTsQWeuqRMC88rioSjskP",
  "key3": "3yL6F2DLGmwkiDhaN2fpKJGKrdhGgkzQA8zZbaFgjK5BiHcfYkvfFQvs72ss4ySCHTWGSTZLPxvh9k1N6vS8KPbA",
  "key4": "SNKaRbDtHL3P5pT9WYadkEn5dKFxp9zB2rFqa39QqiauJxdAz7gcNbf2zELL83QKrk45LhMs3oHpE1Qw1A5HvT5",
  "key5": "3P43n6AoRiXhmUWdyB8MbPJxdADyn4VjiDehmDsHvo5LmZ95y4dxzXJXnZic26SzJFjJYAJqLFAJbpECFw4GWqUe",
  "key6": "dh76nwhCbE7TnduuMFdg1DSYrmr65Z2tZwDTLXuwoj3rR8Tz5mf4xiCzjRszqjS11UiJu2NhfYMsz2MS3ZE5eLw",
  "key7": "4JL3cBKwRtF27vKZRpuahjJwMo3irmvN9J57rAHFYxW3GW7nKW6VaUsAHBWA3i1LWNS6DeuVowGBWLewaqvZyGEP",
  "key8": "4TQRbV6ZzBk1Z9R9WW4fLLDbbQhRVMt6jQhGd7Nn8SkwKoa8GLNHuZFvfwvEjpenbh7HdzkoLjGriUt2EG7GK3xu",
  "key9": "5pCjCiZdAgEDGXzBiQahsF738vpiP4KxCicHNPpwbP8VCns39B1dzuurwXoHWscF5MpF7aG24dVnSVpUQ9CckQeT",
  "key10": "4hMpdMSbSXwttkjy3KQu6MuT3cd6GG4ejBjjLGRMbmBmRt8hdEiDip1Bhko7vYQsKv3Wnua3N5hgwmz2ZHzyEa81",
  "key11": "2GNNo7BmyL9Zx8jMszb8Yp5LNc5BtzECWUN7qAAXJTkHx15qPKyNWFtofcHT5pQ7V5S3uLpxx3piue7Eem5UrFRh",
  "key12": "5Skda8xAvdezAZNmRC37ezvJqLJ2sZcnSo7ho1kYbPkMCiijVLti3GzC2gEzfrqigsD7oCLPZLafZYuyowLFH3Q2",
  "key13": "gddQPNErDzP7iRXjAiXBuA9RtSz7yGwaZNZ2ZZEh4asg7TbtiC4nLyTNFzmDUpg9tFf3jZCXtPCt48ijUqFykgs",
  "key14": "dfxzZ9Jn8QtfeWH7sZ2Q4Xzr6pSx6hwSbPSaAYXG6iFZ4yMgvbrLt25v6NWrXHYvH92Ph8pWBCBjpR5LSgx8ehe",
  "key15": "aD4GcaDWrGP2tUPBmxssES5jdWCk2aC8AFzYoqceXYGQQyVf7xt2bjaZsnpCcVggevzouKNTeZQGvp3DevQMCfy",
  "key16": "4Kwerz2D87otgTDhXSCa6UBc5vjtMhAbqJQSHeozor7dMBVo8cFZ7VMJuLF2NQzQrzAhVpXTZLnVJvg3Q6QWEfaX",
  "key17": "24hx79rzT3w6K61S8ohqbettA7m6AH4kbAXF9tm7NMcyc8ebHm1GHkRyVCfAXCvPtwxuc1rxbYwhYa62hNg1eqSr",
  "key18": "PvoZ3TxAPcRyFgGHuwoA8g9Z4LGUdYDYJyMwzgQM7k9QpEt7o88hHnUej1JjVkDJXEk51VFs4yvUmf5Pr2zZrG8",
  "key19": "34RB6SG4KMrV77XiBiif5J9HJ3cNbhQh3tLZhJSGte7qaUWtWGkCcc8FXYk1TowpCZepKAqatGK69wMp2snayoEu",
  "key20": "2GDXm1SNxHryPKD4cWdPXBEjGE3CAysyx86W2v1fsMSZv1UrVcy9MCzbN1A6k4q5gQApVUZwtuMBpDbAX8pmjvX4",
  "key21": "4H3L1Lx9GZ1yKFadvwDdKuSyjs562WCd8h7xSmmduq96aGbhn2gcWRWEmvZ8PiRD7f769HvehqTjGgH9uHdJm5R7",
  "key22": "x9W6iycPMNKpmjbcfGpyWFfkxYnQDC4ycYAtRsvaYC4cWe5ABoG23Zm4jc9acjrLhC6CDViJ5jXwCZwV1cU2NuM",
  "key23": "tHT6JnWxdAV9iiJ4Yk2BU5mRGt9yBb1W1PYAekQeRvfq1dsYdF8df1DmJ6isE4E78GXjQdfQxzorEkEdAUG3XMu",
  "key24": "64sAJM2rP6HhwbZMgaQKThWduC29TNxVGHYurP3oRJtpV8tXaQdthjbbmAZwRGrDtVhEAPNGkrG7fZ4393EEB74g",
  "key25": "3V2V4Tt3QKkzwUd1u4i63fZ5h18Mft5pGhkcY9VYexBLP9pJRmnPCpNkeDDiFCgpHKsoWpTmyowmpVQoamQdb1XA",
  "key26": "3C59CU4PRGNjd8G3U6L2RC5EPrLQtgAywCspjNVudsBEd8NA9TZ7ApCSVXSafqeHVrwaagwtG6NmMF2Adcd23pL7",
  "key27": "FYNc4M85LtWiXhJK1pmJzcLh4WHzPConphEj3ieohYDJGi1SjnHBFFMnkH2CfkdW7fX88ZLGUYr2y7Wih6mmUJD",
  "key28": "3HA9yRDz6Cs4kxFn12sHPeA9uhVup4ArNifuTDTh4PWQUocvy6o1ps2yaWhcnJCHzotwQcctnehEVbNJgx9oB2d",
  "key29": "3sJ2JQnMs8ovJPk1G8b6axBrLbkM9Y8tq4WGerYQaYzeW5Va7qb7jHdHBtsZNe9P7GPXrBiWzPYSSApCmNc4r6Na",
  "key30": "3FDJACH82mhhNmwErJ3UwnUfYvWB8LEt9Rj84A4mgunVZVmS1Jc516SQsx3XA6LWhyE3A16oVDSuLxxcA4uLVGHQ",
  "key31": "2myBsdGmX8rX5K5rfcXMSnX3k1TsVGzxESgBjaDLZfdCHyoptBZdjXBKH1Aw3NCzMWDvwQCFQNGH8EEysF47yvLd",
  "key32": "3Lh31YUzVRUz8hCmAn89cz6LHRQoLiGaYV1iz5iZCWMzgxA7JQXS5ALkgRcRj4odvBbJydYtqqmwtvFH5zzawVkc",
  "key33": "2fF3gq3TzMfuLzcW9eLptbFnLRdW4nvqxddENp4qnknuexcpNA4TwoEW31f6jw5BTqF75GqpEGQxfsDRqS3MphLC"
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
