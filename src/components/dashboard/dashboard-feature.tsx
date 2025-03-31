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
    "unLvh6dm31hnVbcmNptXRG74RUmCFk8QiT6siP3jxdohxDbiBLezBjNAypuJZBaHi9Wz7KPueRA9B5tmGaEKkK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SopcZ9XL97cnVXya1BVRDofs8XGv8SHXQ4KwNe5CjeChoAoRcwf9ebw8tJXwx5wpzhkML8rSECK6rp8WvTByc8i",
  "key1": "62Uj7t4xtkQovhikRg9YwZ6EvuptLSk8kGhgFJUyaeiivdre1xWaPaxgrz71pWzzc8Mkif6C44YUiXw1G33ceUZr",
  "key2": "3LkDciczCuoxUgCttiSM6PKDXZ2Z1pSG8sk63vjAhmPH8siDrdNhtD65FRvcbRNF2gzYz2N3N88FtVn7uA9h75y7",
  "key3": "4WnAMVhYUXFk8ZAvos1otsVkYaqgJfDYUTbzzPENfEDTyH8tgFay7ciztGkbV2r7tQufHNrvi63e69jpa8Fnz2yB",
  "key4": "1debnnoijCkNT7zTzmMWU5igiZRWpQjsC7SVy3JTwHVg7GTZrvWPs5BtCiF7sQy4ijVXAXgbr4nLfB9zhbRTEN8",
  "key5": "5LZrWC3dZ8wvTmP2UNhgXjNnqziLgJKXef4MnzMvGU9Jo9Myd7SSHCrWbxM16YZHJoXT55JvzRmNhd14fjmFMtjr",
  "key6": "9hQxFsvFSHydZuQmhKMU4aqAAJXJdF8kFvTSR9q9oCWxhHYEp4aTAbheqXhc36XLGkX34VE5xmajUwufyBasNAg",
  "key7": "5PT6uWAfymEV7tGPnHnBDhpV6XCuJ6SLzQTiwzMvvA4kCGD7Qbz9pUksswEL43Sn2TsuoVGhkJPtdzDi11xVWUw7",
  "key8": "2UVMeW1qTPUDoLFnd7EuHsnhRVTkUevS3u4QvNhSYRF9Wx3fCXK7tqn5LmWZxgbdSJBkHxspyEr5n27riioEaUUo",
  "key9": "5Qro92bsHhR1u8HjLTQGkDohRMdCooAEG3qccxzQ2JS8RBBB3jzL5PTqV6kxNWRWutPNoghQALAbNWiEMDC2k9Tg",
  "key10": "5JXmJeufYeBjnrtiaWQSzww1japK7Km4SBzBTyvCouGWmBtYqDMLvQbqf5MpmH9XTSTswKpFx1w8q6XmZct1pj7b",
  "key11": "3mcVCKmkwnBdjboJZBHD7dwwt6KsA4xTATfGVrdBpihRaoT2awGFTG1fDQE1ZUWeC2wiUST8DEhsxWg5zyfqwgvj",
  "key12": "WVUghb4JuQYTviVoz6URMJq6ZyZk3DWQf4HECBd8wcvWYo5Qe5YymUdTpbV3R1twPUjWhp1sTdn7zWo8ULHcnnf",
  "key13": "2x8ArnMxUUzr1tVdQVNC8A9xvWhTccruao7RJHTXgJmVF3egfoGeivSSmLejiGpuFhYfAsoqoyZcJePdtBkVWY8G",
  "key14": "Pn8VBJ6xsP9duUJfArNSNYPZU3F7qpRwu6tjfUkWWTzBEfyfmDye7uasiGjd87VYHF13qHbaRTBoJJkKFUpfDxq",
  "key15": "3TaTmu6SZMv22UbdJMv7zP4jEJ6W9jLyvHHokrQN35dHfiZkU8EjoxtN2EEop3Vmkho4Xj6qcD6Ag7vFA9vj68fx",
  "key16": "fSe3xw6kRLWP55K8VBVcEHinRJksaWh7dRb5HEVm59YgMnHiVqzN5yAKPuG5T3fWWSH7d7PdmV9R3nqkLcb7juF",
  "key17": "3G1izFSR7yKm3j4Cf5x4H293X93WytoaakJypz6z9pjNyjCoHok2ovM64Jvmooax4JoKhLqnhJQEZyBhQRbDF4he",
  "key18": "4Dk72xu6ytXmqmKpnkCA6EnAZpP8UNFiEA4SeXiedm8wrQSfEpT7nsYKjvuXGK8HYYqi8E4noaHsn6ogRkzw3Ex1",
  "key19": "4FZwLD6YPuCRwnXSNTH2zQfiKHqKhtK6rS6HeAUUAxcRNzwRTWYTNYEoAbvz1UDGNoCWESJFdKfK3vesSVVYMY7x",
  "key20": "3hPtLBcpD9UNwuJXnKxazok1fETFpAnVNQqUii7UnrZHvaXsQqCvssxehVo57ZTSegL6r3Rxup6WB9Ltgwtj9oKN",
  "key21": "24xqU6MgvKpjCNxjjGxW6YHkagsmhDqFgjDHFJjj1MiLN16RW9nwX97xB3wxC5bthuwkAxHFbmECpq69nR1MX5zz",
  "key22": "4wkaKZ2e2u5KdNoSsT9LKb1i9bUuycm34dZCywi8k4Arcz4HBkTakNuzUYaUsEbvWYP5c4VmwvbeqoGCtiv4R2KG",
  "key23": "4chdgWojP6FeCDgXXXiCoxiePnFTsD7GS5yv646HUq4USHwi55N3FtMSUyQ4EbnJnGvMmLEaH4ZYP3R2yzn9UExE",
  "key24": "3eMr1cq9vqFfC1Ff4GruFb4C9DMtPMfuu6JP512cHg5LCT4p7kGJ7oMzDLbHmV5xA5LE8xemunAMrVMqMykNi2kP"
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
