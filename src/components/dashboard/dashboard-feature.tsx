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
    "5Cs1ke7p7xs6pezG34Npi3bgNY21NfJbJsuedaa3G7RjFDmcg6dNpVNfM2Yus7BE7aJXR6uRij6rHJ7NpsxU1RdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PASD5DPWEUW4nitX3tkhRCpmyzKUs1WtcqpaPkimZuLcEyxR4sMKRB4PXjsaWaHwhC4gNUDKJ8AwWDaKtZnEL3Z",
  "key1": "3oywcwo69yyApRPPjBxLhcxLqFFdcBisDSHs8KEHxY69f35vtQ1UWoc7roy6BCPf3TYRFvAAibnq9EucE2z9B4em",
  "key2": "2N4ZN1YyY7oTDvA2mcKxPRk2spjrKJzb4NcgqhuHYkHWCyYvHbtkXUtFYsfsGpdHYfaJ8qAwn8avocJMTqySEKky",
  "key3": "3bLNjkhN42BTuQoaS4e35EpZ2wbPXByhzmM5bkUb7tFJY3dx1Kq62R8hEtXCJEV7YPenNomawkZPpRJKgugopKhM",
  "key4": "5V9pN8mNU6T795vEy9mFsLYgwWCG5tVpwMfcWxZrB3XwW2EAcd7xM7fgFUPNFs58tYhwt8fe6Z9fou237b1vc99Y",
  "key5": "27TMim9GBJjnzrEMvx4hTzaJzPRokNoUEdat25n7jhrEsr3Rsppom5vZ4oAwt2GZWzyGMgxZ7HDbGXzsvrXhWt3G",
  "key6": "22p7WchVRwHVBTg8BQroAbj5UG5SrD11ZkkSLR5mp5v8S2YeauJwMThrTQqc1riqsogN2xboC5nFyxNfLVcAboWf",
  "key7": "539dK5ifaAh84WzUkdyAwtMNdwowcFdm5GfYbJ2D7SuCYdfCg9xEthM4qeenaevphYwvQEAx3khKRrJBFy5wPKn2",
  "key8": "3LML8zuu42mXNYVxoW5bGYKkhuk1ENTp9xrkcbgXRXNQHkxMq6A88qNWJoBqxMekWTourwjsK18KduYnnNnpo5AG",
  "key9": "nr7DzNkFx5oUaRTs6DX2HcJb2YkHxE9feZUJLcwmEqQJBfYRsYhBrXUe9hDRNYCf4aQAqV5Hmyz63RTQdvFpaJs",
  "key10": "MLEm5JgG3x5HimjK5YdcLscKM22w21zFPHFWruX7cKjaX4S96wPT8Y2XM89Va2fpz7L4VvBwUMcLjMZhj2L9tqS",
  "key11": "2DkC4zdQWbK8EmgmeNUAnUukG2EFww72VusiQ2mUwg5d3EMKeCvrGWCPHHanL6WbS6Jn7CdTFJ7ivarbLBWNhKw6",
  "key12": "hUwP3WEgy4wNYT5DiGW1VYgdWzbmRBPRyuKBPypGze9x8n1cEaeXc9DuomNbeE8b7dUMZur416LwfmbPgEvCRiE",
  "key13": "4wpd28w6igfvjvTPVdYENiasDUEjcjy795v6QrnqGuPD9eZaukXtdt3uHKfE1EsJQVuVcSKbMWGn3jsTRcye2B4x",
  "key14": "3nqJgD5guazpfJdEMdgqGYZNFJys4XT1kdVLCrn6aUzYk79eD3kHNcBzfQsEQrJpgscp7kNKACtAxrpwz5otjUSs",
  "key15": "5sdvoxmSVHAv2fe8dBaMRDGBHKLh9r89WnJPGCWQkHysMD4WfFasMMuVbfDiSZTU5DiX982xEEFWcbS2vsHsuPrd",
  "key16": "5wtQDwejgzSuQia9gTv3JZiaYZiftFQncXaUL87RtysJYsot9UG7M677a44Qr56aAZq3LiZbexnQLn6PmKyxZoGw",
  "key17": "5Q6Tcr8onsdZnLQ8vNP3NtrBNtHcTVjn8vvxHcLqy4VVtFKST5AewY9NQQQVTwhQdHG5CitmDfgajiPxNxcj8Y38",
  "key18": "4CQzjDbjne8Xz2srWk79WLqgZ9aNmdcEAVjujZxXiJyjRzEWgJzRWEwoWo4iovuVSdUp89Ex4ooWhcWVSQSfjVB",
  "key19": "4bHNiygh3sPLbvcVa6wmyuV937LRWSbo3MYowwoyZKTTqGJXrfQ8X2u6YLVtroZ88ScBTRzWCq2QnGFwGvrpAnHh",
  "key20": "gr3ZkiwrZ3jW23iMQqBeRGk11EpuN9mAqZNNmQi4TR4bBJQgCYznhmWyUUuAbQCkJDjdpiEj5wTsPxhiQXvi46f",
  "key21": "4KqrVFiFpUhsdkc57AcVDub56TrSswpmScdjAsEGwz4KjckKk2ujzh2RTHtK3PqpoQR1zcDJFaaZexmvLKsVLCvY",
  "key22": "5obBtx94mmBaWLq27eqSi632nTb3p8MsS59AypkhWmTiRckf8UHv5cn4gTtPQFH4NLnyxU6jHe8nLq8RJY4YD6EA",
  "key23": "xLB4duW1WBn39ReKpbkwJknagYR4CJN9jgSHcuyzcCQ5S1e1xGG4dXReLmFSu3nkibRmNPaJnNmJXAucyH23SyG",
  "key24": "29Q6T45wq7WE5ME8GEzqRxtuSM4wrk5g9fJo1Uym12UKEaC6PVMaraAHbdPvejB7GWCCAWWXQMQG4AL5DXkBdBk7",
  "key25": "3CNDV5TrzSKz5fu14x76pRZL7yaUQAoRafx7yQSX3XRpCaB93JTH1o7EU5DaLyqNKeFUzCQyeHbkZnGHModRhSdN",
  "key26": "3wmFde9cJDmYQEF9BnfQGxHKtnkkagwnAR591zaZQ1PNaxbooXRoxUEHbenr1tGcsLCL2CyKYEwKAosHfDMfyvvC"
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
