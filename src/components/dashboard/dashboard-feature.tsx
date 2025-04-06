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
    "kXzMFqPb7vtM2ucEDLAWGgHFoLawrNSzjAaT22CvKFNizv4z93MUqBXLNrtY9p3wazt53Nqof1ECzcesLQU76on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MYt68VsmiZPbeSAr3RQ4mebJ6Gsn6uZsSWGvtoGtvf4boNeSvhU6qnqQTrivjtEhES9h1j7zzZ14WgxhEXzsH8x",
  "key1": "218QeYB29TSHR82REgpi3TkSwxHcnpvDqQGBM45mSXsZDUzD8mwMUhgKyMHqsfTfbiVbkYruiwghx94YJh1QP4UG",
  "key2": "4jyjWqXbxA9rdq8nB1fBmGvCvgeECQ4gefoxU2T497oEYfcNjHMd6tp29XQYkf43VHm34sGJb9M7ouVJud9Srxp",
  "key3": "25mvJsKYnXijLvSZRszDWC1GxK5Bi1GRciGeVm5RxFrRt28FmMR95GnJo74uPzZfAhKXaZNew8JxqdFAdJM9mjUo",
  "key4": "9MsBPwCaWC3bLF5tsV6A56hfAYA9cwWVzi4KPG4S4dUoE8WWtHei8GuadZcnKmqnPbbho83qE5R7pjiZY2h9aVt",
  "key5": "3ES1opms6Pzk6CCM8SadZkkyTuMDRAg4UPTEF2b94G9DhEwRHJ8omZ6b1o5HH7ptBGXFPLwM4xZqBEF1PouHPAt4",
  "key6": "3bMaHpJboFatirz8A18DC5iSG95JV4NcWeTcT3mWTTxjyTw8iyZdo2NYtR2pmHgKb38djpWmXYJACqq8qK9az27Z",
  "key7": "28Rvt9eNrArGRwkdDkVGoJhSz9cym3DQAM44Yd5ScbTaNVhA4mCaeHkAfjhxfMxBYQ9rUEiprz8z4eTYkhk4h2uX",
  "key8": "2ZFJND3LCe1UEFKAPAaHhwwnU7CcmXkPTEk4LNmfNFNA6xdLxCB6xP68g86L5ae6ynbQi4ixb68Q1TLCQPnzFh9J",
  "key9": "5WRT8ddpFvjuq5AB4qYxM7RP9nwh1AWQ5TTuZ6jvdepRNZ2s8yin2RHDR5tUgRNWjrM8U5r9JbcRNbd3wjCKpagT",
  "key10": "3tFrmYNWxJZ1QMRhXVo7WjrN9FsNnV6XX4Aq7R11pDBCzhTWbJFsrU2ZkDaF949Ym99rC3vDQvZY9Xw7NqjQNb9j",
  "key11": "2W8BC2mRR6hGQpWJXzbTbZWgUksPRWBdBdm2tuU6Ux3Uqufahtn7mNTVE218kwznZFD6EQA99jJ75JQpk4iVFYBD",
  "key12": "3RjteuLMwQMikoxWGHLoy4o9w5H46omi85tb3T59GpwW7p8bbDBxoT7vSaJ7kiMZUEYAvxw2EFtgxESo4ZDbofeh",
  "key13": "pJPQRDjP5KSj2MEKTz3B1rgghn8tfdfEBn9p85yZJK4Eu7NGLAY7pmN9oxiSNP9it426eeisE9YdzLsYem4kGku",
  "key14": "678bs89wknpBGBYsvzN2ziaUgVQfEp1bDDgL9qq6aB9fBeQo2CtrVb1pUeJPWaCUkWLeZ4nqLB13hW3urgbHSAE9",
  "key15": "HuZAWKKZBU28YPKXtHZdNLytnai5piBKxe6tBkDWSmZJ2kakzQ2Ngo2jc9QvaaaGMeVbR5wKd1Mxpqcmok6GkH6",
  "key16": "3MLHQrD2BpX17ZrhDWimrVdmuGYR5aCasbXGtZzTL1dBMP3JUkHKv6yqgZ3KksqiXW7JuDYX1GzTzVzPmocKBoqM",
  "key17": "z3PotMRyPsgCiSmAR4wDj72Kbw3wkzDDXFoyzJAAAGyb9GxgMyz99CYtQfdZ7Q6RF8mDTcWKTnh3jTR6pwtsZKr",
  "key18": "4Ek4CjBEdKAnALm3Maq1fef6HBL58vWZGX6GWfXCFCMy9GZmgpKJkNyR7t7BtoFS2S1jBwofDEvvhcZHdf4mbdUA",
  "key19": "4su6qgSdAa67JnfRh3NBWM4UitFJcvmH6kB1SBPtfRYHZXDubZC1stupts6MT89pLvVyVaJL71BLSGSnbPVN9bH1",
  "key20": "5AuTdVKJEuKvEizGwGh3kpRj2tHa95TPgNgoFLJiVo2nwvtFfJs39VqF7KSk2xZQvU67VR6SswpKmJXuUmsCTzzv",
  "key21": "61yyewyQzdjJ9cGPSHg7KKoeSUYB1GPtwWVhsp1vcgFqHXhYRV31pEVYnWciR1iaGddiZjfZjDeMmCbD6Y8KdXRH",
  "key22": "63FqzrAG3rAB3Va8oJu5AEb8BU9JuXeoBeWfFgEjxnKCBqXzieHUmQ7EHbWyn4XNzn2jW2tfVopRqmjohCjLmGur",
  "key23": "3pd148Q6gxGtpvj67AmTu17jzMR3WCNroAhdTCv2ZrcXNyJJTDE996qW311fAvwdt5m6oEL79YovQFm5BE2ejBXi",
  "key24": "2rrcc6Ya6kCg2s8ABkqVWA3hq5sVTLzeMmdXv2VxsgcNYCy4BSZ6TdjwYKqQw6WCkJrajAPLHTxVYQpzBtUwcaVw",
  "key25": "4dYhVYWvTcmJCYRwhCLX5JWzHos4JJ7TJj4WdCJ6hRugVQLvhjXuWVawMxbc8vssHJ1WGZP1vfychECjEnojgxEv"
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
