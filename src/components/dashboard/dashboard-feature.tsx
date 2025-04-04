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
    "5EhoKua5dz6ZtXKzaFzptB1jMS9U6SHTsQUqnv3YT1Podqb3eUpuLDn38J3ffeJdXqYkVkgwNkZnA9WkDntqr9XU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t1q5JDn84zTJotdym7y13ESMC5Jxw74ESu5jZLCLWqHH9QdAoP1AcLoMBFAXHYffmRAMMJN7xXygS8Jt7ZoWZBh",
  "key1": "5jt7SDNZqPQ2Xu3Fweoh4kFwyrqRcJZfuFkSRqtuvGvDni2ayZ741ZNb5SJ8AXybHq3ZW75ouEPwhrQk3JQyCqoY",
  "key2": "N96xewgbAXViRQuRmAPZeb83Xszg2GSRYWDPgHKiEmrfcx4eEX5Xwr21nvMjvMVuDaKkPKwEMABJDtL3ffpnVSV",
  "key3": "2jLnKa88FqzQrHQ9cHGt6z7RqmgqzeyHbgX4N4HH2ckVd6V7EAEudaEDRixiRxQkDeoVgbRkLbwqqNusGiCEhM7B",
  "key4": "4VfphdTYa56rG6CGefTS7Fuanfy69KqCcWmL6AVbHfd42Eyfuhusck1BaeA3WYLrqEmpn8RUWp82pRsp8de3cN9L",
  "key5": "3jyhYcmPTDwHC4LAT88y7WkVihFdMwGa1oE7oMVLtPXJ2DGRgsUhvoHfthEVcKVsUzGN8zjEyxegX7Xg7FXrRvTp",
  "key6": "TMZhpKUTfHVdRe6xqRdMp2p3ZZHZyQXGQ8erTrFML938KShoKUQebCNgxzLnrrxSVEQd7N6AwqS3uHqVq7sYCRJ",
  "key7": "349ne1vYhhgaVAcY9zKpnKmeNM8frcHy4H2eNiwUXVLJHKZgesiowveMRmsqH2PpRt34kfGz7QiRpJbkNqz5z3dR",
  "key8": "vdXKuBJUZFBH3ia3q5p6thT264pLWyjmXy6BWZ6zSasgMwnsGWnB2zpSwEVFvKJZ43AG4NYxBPf9QHZRpHeKAbc",
  "key9": "67978YeA9qusRmgJ3kcJVB8eekHyqnJ6wFdwqeXzJdtfyMKXMsWRpqYnrzmJRCbYdMRwB5vmrssgGLD1fvFnFajs",
  "key10": "Q3YbQ27tXsTgSMXKwbQBsRQbRLR4PDEigAsH6nMtUpFdhF7Cut1S9scuVQhjvFLaXJywnLsyhads6nf3oA3n29u",
  "key11": "4B9mTFbZYF12fAojf1EsLaHMJgS7bPCLhjQFZTp8DNicB2gzrQf95NbfBo9K3Ypkjmt9LFstkdeeAZcQ2GuS2GD6",
  "key12": "3KNSZ2oKKe8qkJ48nEzYHG9ATYpXj8ANe5vV8pjEmuvAoQxuKkV4iEFJqnojZbkqPCdR1Zd1id5D3hm7EG7eVEb1",
  "key13": "5vxKU3mBF4Mi3goVHnaJ6UnHuGcxaF5csD1BKyGyAr8sp47emJ63yispme4Mg8kQqGu3T4RbAZo4jV1E7c8b2zPz",
  "key14": "4jpZYSek8PqSxLDQbLGMsedC5gfNnw7D4GTD47TFN5GrPGBrRHEjwfUHjYJQ78tb1uowJuRRN5xhwkYQmPB9vKG",
  "key15": "AMGEfb7aGTLsoN27QSR1rsuabKdjcnABsYL4NsTFUzNX3cRw31otQCGrMxVRG8fTpkyWwDvbtTcQNq1PhdzhQYX",
  "key16": "4t27j54Ap45b61CRieQ9sWu2vy1HUUJgPJGXBX6m2LsRbVuisChRpgjerfND7ULYkEhqokZeCMn4Txw8kp9rpXPR",
  "key17": "3v9Nsr7iZrS4Dd8vUYE3a6Ndqe5Kon1awm6s4eBwWzSLDp7T62vN48d9ovxLhZsUtgNb95GtfSPk8gbxcfhX8uX1",
  "key18": "2gcnzjeLn6wCkLZ4nfDJe5KytrJ7zp9ELSfgQJxVg8DuKa1YiFTPiavRqU8TbjEMpTrvB9NEsNdFjBazYvS5djFu",
  "key19": "rLgpTGmSStGPsUfmF3BCamCGTxxZj7t9XKjxL5bBpbdpNQjiaRwJUFUX9sEZnkTX5uFwwwwiDgy3qNBkg6wq9o4",
  "key20": "q8uNYC46EGamoHcosrh7uYRkqwCygAAji5tyjE4CCym6zrBZugpnbV2QP364v6J4m8tV8FCrrwZV5NZuijzXMZn",
  "key21": "32RLc62mFz8VbVkrb9hirUwkuSxJRb4zYrGmSQNF4tvUAzDctSGj8zSs8vixCAchHYbStrbAHqz2hbQMXkcgJMau",
  "key22": "2vg2CuPGagtRdLTF1dLcMzPSedXF9WxDs7WMp9FkXKqyquELxm268iwbCu5ceRVte9EcY4jFoqPsNmFRn2vEN7pH",
  "key23": "5W2E3zWa1mwPNBCz5ruWZophu8AU92R7XHkmQvTKjnVxNmVPtdr3mjNgXUxhZrQet2JgvqF1P4pxU5s1HcdgidrT",
  "key24": "5aST67u1vbDhmtZtKaC6RUYNKdguqHVuyQKGYMJ6uayqnSNtDdyb4MJshS2Q3Lb3hZhYuUsFoor9T4UQfbeyYZHt",
  "key25": "PUdRLf2ZkkreHUSjxDr9SD5B3T21mK3EyokCR5eqgUoUJyUgk4YipmS1ETXZ6HVQdLJibsrJmAftAwitRqJWe2e",
  "key26": "5VMiUGYaRmHf7RUsUskRSRnZ2PzZUfUyq36Cb1REK7eN1qtSK8xieRZnGNwfSNnMT7DVwFNvxenb5tfCPD1EzV7e",
  "key27": "4hRPtRoywRTo2eRFkTtiQhmyc7T9gEKSTrNcVN9brk4KwRU8zp42vUDVWyi4NiGm1a9gWRx6CwRTT7uzkrXfSL39"
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
