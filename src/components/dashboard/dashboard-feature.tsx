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
    "9vyhETZ54kpgnVF3bXgFSrir7XXDidzJZgPkMbAtebkYwu5TzmQ8h8XeF7AkYa5wyQ4ZAUeQZzJYxCMeKQXYMr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46BJ2J4EKVgWnsuzXGhd8hRCNuzK6gU98DEskmkhCmepD87ErcxvraW6BdPXV2FiLS6PCZYsp17ZtaUrMo9wHkii",
  "key1": "4sHn8RC4Bp7Nv1N6hGaZmSMMLXKt3sVvpfY4ipLD2NZMouuZM2s8K5yJYYT96bV5nfQ7xq3Coz69XcJYeADbF2eA",
  "key2": "437FRdqhzL59PugzUVQ1Z7izvKiGDgFys3LConxvAF6qAmEnGDxrrakCVAgisLfNGjdtAuC8dgNacxpR8kyhyzVG",
  "key3": "2tgU2FCV8KN34Gfti9Ygf8h5V5NMVnv53ApdjXut2wJhP24Wx6QC8LKMecMZBJuneYjQNf3XnCBSL47hH47FSTGP",
  "key4": "2Q5jhA7QGcaSREVdkZQaWvSYE1pw5wUNtukDoyYwGeVXxXCD8xvmruHQLhFHMMbstUb6v4cKted53oVX9Ns7hz7X",
  "key5": "2rtyNrLuLVAKQFbpsPvbr8zqS5svXr4Eq2zKSmsRC3Jj5Uw5YawaAiid5jqzTCmupR9wKhfn2znuWoTPNUGfWWCb",
  "key6": "2N1juLQHSyVdqL216bzsz9nXYbQfavjjQgcjDS6Kt5ZzAcxC3qprhUwTSWimpHp1hgswMS4XTVGn2DaRX3tmve5Q",
  "key7": "2yRvLWktqCvt7CM2CxYfqenuEJf9uhetCvAtS9qV6r7dqxP3bhvLPEsayt9tzgyEQ9UJRh8a6Z92ik7gENF9WWmc",
  "key8": "3iS2KSDaiSPZzHV7VDpbzJJMcbVn1fFxRCAMMvUZHPhQS2rTeg1k7KLfZheSYiQus4o4rXaYQzBv2nVRQpLPvfXV",
  "key9": "cnKrWVwgFUdZvA1ESKChcbhaikgH1ib1AHB8myd6eUGwbh3fmxd1vHZThZo2fCZq6TuY1BEpyBvqkipGsuSBSxL",
  "key10": "3DBrnx3KopXZTAspLMMj7uaZfgi3eaRR9b3Qtr2ofd6VHt4ajrXqncwwxgUGa4HjMsD6ibEeTZYmNjLYcfvr29Fh",
  "key11": "2Ea1dchq48R4wUXzbBTyjrgwuChwoK2faDzF9JEtELmWu2M9FbEzQMnPmv5xGNbvwEkPDQUvywANEtdvXCeKs4Rk",
  "key12": "3qXWCKBL55uQPzZkydrexR4exZfwvfD3XgnN2deFCfmFVVv2sH9TUwP6UDLbkwjYZ8N1CRxy6yQMSTZPb1qjJAk",
  "key13": "23hLj28PisdGrPkpAyiPgRFR7SPq5R7VeYe4ywfpE4kipvDSBuu8VRgbCDzjr3PAeFxFwxCC1K3hvrbWJxk5B78J",
  "key14": "3QkHa6smaGAjk9utxRLxRHKQnKPi5Luq2EpNg7X3WCxFWsi26PSw4XkN1FCSubvLMfNhU9XStsE6FUzpNQXLp4Cy",
  "key15": "4SZpFhAQyb8aXvgnL8yTgjgJT8vhNGviDYQDjA1kv3nF8tyLuskb9VhXnTvLutoQK49UWFAAUEvmirXTi6ydQrFD",
  "key16": "41JtDptPnPzSUiBvX1Zmtabz3xCot51uUfjzSCLkihYxCPURLRGv7dA2AuEKQepyaHkGiBMTB2ZZzZigFupaY5JZ",
  "key17": "4JhvruUT8UHK8k8mGbJkHuPpLQK8wXucmtD3GBn5JZErwqPVzv2CUCLjgai11VmJzA666wQA8LY2zimWB7FfrYFq",
  "key18": "363Yek4ocmz6rmyyZ1gdUMwYBC4MiFSkGr3P6mJ7o87QnRDmcWFsmw4NMC5tPRCEkYQb2kpUEqxRr3Y9t646M5TF",
  "key19": "4wTNkG5PV1VL7BVfu8a5PaaZHLdu3LQfzz3VDiLo2BBuew6adxZCv1CcTUcEZDCux4fj1QFaxwEqRCNyUcXNVoGV",
  "key20": "4wtm19HXHdqSggNfR5TYAjGpwwDC7eufXxLbNWkxmdP3yddjbmRBqq3wZtC6Fh64uP71fANBWq22jXLaxs46C4sM",
  "key21": "31r1C6ki3i4qfPswanWSMEDJxtdyCxoc4UtBWnr9kU28pM2zpLQGJF2QkmvtwhCm2MGWkXfPmEgbTfyJgxPsVK1G",
  "key22": "64dRxR3fTEh1cxqkNXpHms3bLSfAM5DMushU47HuF18cne82eNzqP3z4dHBSxvXYHSSiG14tJJM5kERuBPeYn94c",
  "key23": "2kic3w86s1Pkr5ZoZHdvQ8CAJS4Uc1ZigqSjFbdbsdfg17YTdrAwRLaNaBzbnQ4Vdjq9NssVcABZUuH9mPjDt5CK",
  "key24": "3QMTEv7MkCHQX3wg45uUANwPRGxnFGP3Y9ix3iuVp5N2yaYjPLYAGqMaUqVvBjikh6Y6h5MGEqrMy3a73Lg75H9C"
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
