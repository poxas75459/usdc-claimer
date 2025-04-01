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
    "23mYJiML5dQ1eJ366C6AG7XPyfQUi2Gvs71eKAR12NvoGBC8ByJYjjxcxu8jKdpxLf7nG2m2qoBB9tLQZFe6BarV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22P6PEXX6ne925LL56vsme6oJw2kkcR6nNDFoYtwmwxmDwj9jHQp8n5TXK4pro4EG2NV7e4NyVyHeGchKpPF7QoG",
  "key1": "5ZtbTN87XKSkUvWwXEAcAWzA4WAG7GDvgWxJN7i6YWuUt5SF3NMJioWXen1fxnGUnzy2mGa1vS8MQnZSjpWRD3Rd",
  "key2": "4VN6oTRQw4vnY2oDLtv3ZQpfZAL269iMnstAY8PVdSwf2qg7pDxT6jFo4qYUJKrnrYWzDeUiJhvEp3134iPr5Rp3",
  "key3": "2FLPj83BpVE1Ms3KG4QyypG1T86EJ3ZJpSUvPa7gNb2oaVGqQ7VHmYwMW17AgWYsWHDLxn2ctrqnH2KK5454X6eU",
  "key4": "3ppULnUMTjncY8SXqQdycyzrSVpfS7seY2q1pa2RP6LmQeaJBcGSiUXPMTAGNC3DoyH6BeVbpXPSxChKp34AfGXi",
  "key5": "3vc5kD29eEDpPBf3K6uWDf58umCCv8W5RzfHNDLig1xcfKA29jYE6DZkS7dsDBa85dbvjcoTqRhh9sa9NxgZnbZp",
  "key6": "5LPWQbSmh3CurYVQtp8TzrZHuYokLN6qCfdru4ovmYJodKi6fkLLUcqUTP7QyDmKrUzDFrtsF2eQvhP5ZbcEfpug",
  "key7": "2FP3D4EpiNtgK7S9itFU5w9kmiNWzr5paqLrPVH8TQ7jWA1gK5x5iYX3hBfPkD4ywA3Db7dT7NCuvwqeCb4XXxvz",
  "key8": "4Pznb6xXpYNPrPn9h8JkL7UcSAhkJKYMHGWqz7b4JExbqwSrEDa3T2348bjFjWHGU6sVHDnmG3iuimrknUAuLzQw",
  "key9": "44WX6vGWNJcpdtHND1QsgTz7UnY8ErxH47sPxGkhVaD3gQAgm6XZAbm5E4oSEXDhhwKcE2Na9AGPah5d6cKtA1ze",
  "key10": "5NADCdcUwHTduW5vrMP8tQJKRSV7tRD6RELx3TWyT8aAD8vShbQGf4MkMSUG7JnhLq52wbMQ8iz9ZoRtdKtXJbnS",
  "key11": "627jY59MD2gcb5mRpjfk15FB4DTnGEqetyQvCKe8AyryTR4tp6Uknm1KkLnBtGUkaqadc6Z84hRHRvFWRnhjytZL",
  "key12": "ZQqguMg1KxAu67ZLofUQCGsqFVyD5rwpegJFpxRemYbwfqVP7L24KHKdUrk3TXeLzMWCK6DyXZjwhPjhdhrC188",
  "key13": "293QwaTmDp25GLeaMgqWn457j7xeKinDmqLbakoWfMpGVMpemaanL35GQNxkC3gusfWvv51FzixzdJEiYATSZomf",
  "key14": "SqZX4A6oryCAPF2tXNfeZqMzpsesApLsXxHWiMPgypmQxmiCpD4tXSiChZkxPcSSvciaQWNdrdFWM3VMJdvpaX5",
  "key15": "5PECae35GjesxKd91LsZj65yUY7Xh9nD1EFreqXsezX583ygSSKWmonZTY5UkTSHpL2zGaComWudzAiR3w8oCaMG",
  "key16": "qCkgLaJJ8GrP1Mk8tyURNiAAazRRKD415dV79ct8SFbyWq7KirXGVGELbst9yU1wJJvABLeZSAynakUwQ7RGZzE",
  "key17": "21yGhX5HCprsSN1bXqn7NZho6CJWXfywGjGpk5d1ayNS9Ti1uD2Yvz1u2PSgHsGvK5zGbBnFhNms8FeUnLCTCiTg",
  "key18": "UM2HTyzwE8XxutwqoDFD9opApSX3PB2PoHdiHWu7AhtgcZqLPesCKEeUTYc2MsmnUMrTsVZ2Ak3UFSdyJKszvUb",
  "key19": "4RdQcjxzfVVdPzrsM3ffN4wFokztKG96yZ6scmPqqVi6LeNs7ZjgBe4HQgiWsNucSd5SfpHCia8J64wZsh3BCTjx",
  "key20": "4TukxhsggijdL5Dc3x2hD22mye5WHebfHY3dDfgkYVNtukLxjyDs8ePRAGJ6bUSZ8UVHpe3FS89c1sPVCk6k3bMn",
  "key21": "2k3ADFMTd2aTvabrhgvzjeDA2byV5VtBJbKBqMDLNPJJR6t57SDCHZ7o4hxy4UTroDWHJJg1zNt8qxz9oCaQ7ewf",
  "key22": "2s4RVSBsdnEQCtN7GKpJcQTGxH9ZEb2k9QrbXCBDPtL22zXpSQvfhmhhpXZkUqNRNYX1gGyNB8cZuyd2E3eB5ZBR",
  "key23": "21b2TcnFZq5GjzT2zyWbSQZCpt3bbU5evNHhZixs2GSMNjbbV3sadcrMEAovnZgAaDgw9682KKFWkVY9zgczANWm",
  "key24": "D6nirh6K8FaN57bwgzSA2YNbZJwSu8VdTGhSRwij7V3gH54rLc7JjTJmBDNWfxLmcXV11Bgsu8EVL7vUcCMc2oE",
  "key25": "3wsLtCpBZyktUd11sp8brw2pLjFUKczpAFVnWhvvi4VRbakLjSCV8TooC5yKDJXhncoKwQfrear925uKt9doXGCY",
  "key26": "3DFqvGD5ix1tgjpvwcrNt8ZttLANEdAz6SWzQKaP3ZhwXZwFEAZKsdGSsD7KAYq3FHfjAC2Fspp2qo95aiiPAaRQ",
  "key27": "34pPD3M2QhVfAfWLKtcqSD3WRzKJkmWD5NCuTygq2skRSq7BS8gRxnpWDms9kcSvyaXmEoUW4F3uU8xE6fnwSrC4",
  "key28": "4auNuFG58FWCB7Ad212J9NC7EHt4pyt4AXrEw2PwFEWcjk98sSBAw5G9rbPDdDG167FR3yJdcryPFcLvLgxcYChf",
  "key29": "5dmECX3sz9tzBGnM9XLovQjhg2NfNXBTVFtgvkgPt421vMgWE7gFpccDcGTxAENG52bjqyFF9XefFpAYLhVuUwWU"
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
