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
    "sRivhCxqumtj8JVBSpCyRz2wdWpn3Buh8DQqpwz3AC2P4WNGwaU1iw7Wpo51BewNRf6qhrcpgmxxRr2yxk4rRJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a61uosNECL7LYCmoPayVxyZU3A42meNS6yXuQcvEbxrTU8nMdHp69Gc3Ak3FU6HaRKBgQNUZxirmVSg4Ajqjf5a",
  "key1": "5JZXos2MLzvQ7vHT7iuGNj5bPueYe2JdHLG7Zvtq8Nz8UWi8CzCQLehxVWVWjxwCAjKycP3uQQCHj3K32XTuD4FY",
  "key2": "2ApQHXmKydyXP312xzuqj2xucpjk2nQrKjsUccQCtDcmmDuvzDvdyYB9YzcSrdqmtfrFEpc97j7aavNPDyiu5sXk",
  "key3": "TcjqFAtqGXPb2EaJPiKgdfWihqcwi2TPcGBKURFXGNGX1rJSCLLYaSBUuzb94tNNHAMtw2EwksqrdSGSNbnsrLW",
  "key4": "3STE4duen2VPXnmdgVyxgYGUn1nGgDVRpDh9PWA9X4xBe3spPaFYftHgShMiPhp7E7deFHCeDcHEyDZpcqpyxeBQ",
  "key5": "dw72Qc84Po5SCnbXYBJUtZQCBvVkNQZ2nx1cGY7xjDeX1EJfwNGt8W9SPtwDvVub5CHKYRjwkrA63TBpCgX9Gsj",
  "key6": "5uEA9ojPjEHcKzjWgKGTtvFY56Mwaf4FE9LVBEmb8GmtZJgQ23Sn9qnDd64PXEAu9kUX3cQiRyQ1M63ftMnqAuJp",
  "key7": "5M9vceSner32YwHjfGPSpYDErUKUmBRg3kVDKUjKQo1eK3bPNNH94223Xtm1qx1NohjRD8Yu4shfUU9EgPbTCqJN",
  "key8": "4BhPqVNMDr54X1s77qF5hiDJh919eF7TSbr3vspCoLpyadAkDavYpb5RqGfyfhod33T9r4ACJoQbCowtb3aKyj7A",
  "key9": "2va5kruJXxN7cNdUHVX5vmNq5EBQrx7g4XMoYyBNHx1dWKNYKhHftXSWyUyT9727c2TkR4n9WoJ8UsC4s6tHtc4N",
  "key10": "5HKexJFRnusWwUWuMM7rnHpxyTXbwErzqScwAnfhW38T9wEzEtFvwhKpqkpoj3QGVPpdnbnb2SWKfgz96P3cWeKm",
  "key11": "3bwr7t6Ra8GEJcKyXj5aT6nVGuT4dCXmKPoJhESxZLuqERFpMJmS1SAimDQp77WA8T6Q3w79JZAvJZtA5fxjEmQy",
  "key12": "8Xa5VrKAuWV585c7bP9dCEPEryW36CTxtJhU2TBmqwHtdjxndTqc9FM1zy9VVC1dfWhQQqYonniZqcNeV4wMKQA",
  "key13": "2Fy5gzuthVXAUisegq44xabnqud3RY4MJmAJmY91FDVLVVmvysrznwHnQUKxRcTAWGjVjxkuusCN4ZS9v8dnADQx",
  "key14": "pPeWKCa6C17CjgbGA9mh7BBXkBSmEfcugGv63HqmQ2tBgfPxWbJg8HhYs7cokGei73eGckcRP7y5ksCmWjDUECX",
  "key15": "52V6t5djrf6bArZ5j46upRhbFwPnsMWwbxJYx1rbnCPbn6w8LG286YwWncLX451YV1oER3mrzqpqygqfHz6cwhqL",
  "key16": "MNipnCnQD3iVVprGcKT6L2qi25LGTxYmKiXcBEFrYeTmrJVdEsiRZsK6Jr6JPT7cCUNUPK6PiS3KLtSDUNu7Mux",
  "key17": "4uUUZ67MUJoJkhCWQfxcuRG1TjWCNNBsMayCmPpT3RrTbwhgZUApGfk3jjViwBTd3confMpDjws1YdYtpQASvMjy",
  "key18": "R6vHBXA8XYD9ovpZZe8RThuqRu3xWoXoMoUE1p9G71PKCyy9gBUQZemty6Lwkd7yHtfi8KGNfD5uVWSTGeY91g6",
  "key19": "2Q8PfDKFPMZhS7Vh8DVbktN9L3qXY1YiyEMYE7eR4fkaXKcomW4UzaF2TT69oW6vDZ9EiRiagtPLNWmsocxz2HE3",
  "key20": "XgHQrQuWchA8wLkwrXZvcd7jKJPsx3XoKbcTTnjqsrENjyeh7PgfEptRUuuxj2jntTdXpFwUKssW7ovTKXd8JVK",
  "key21": "2ZXknpkF39gwVzgXyiELABTtPZGC3vdGnTwd8gcSCveCnbHx59NxTsHsLfNJnVkdcfnCJ5skzXyhVVX34as3zJo8",
  "key22": "4cpE75uqVwBcUDti6Z3NqFy4akgCMDi5LtFT22bhczpFXzkwZNHnF7Qim84h9Qizb3NobwVTohk2e56ukNkBmLEV",
  "key23": "4dTvYrF5T82oFh1MxGZX82UnHFEqfvbaeU29uNggjp3dAggoThaba2VsgFuGzUxBGdgGmDd9zuh2o4R1cZfjJ8Nx",
  "key24": "5aDFEjaMQakscqMFnGFEXoLALFVYvf3QR2G9iMJUib9cQfxp1zGrCrh7tBEyTayUFkUHV4qG987Ck4UorhCXdj84",
  "key25": "2tgd5LGG9ZUfekePi1ukiE28eX8rkgaqxLcE1cmgx8uP65aH44B1CamKkHkv2ffMMixvvP6qKYReVQ42ddreqA5j",
  "key26": "2qcgg9zJVLgw53CPkibhFPHi6T3RdFRJdG6JELv2ZLreEKfPv8BPZ6PwnUoHfAhnPCpgPUgjuDx1TsEvaaZtvTyR",
  "key27": "65Ki7ywVcsUL6R2Mi5ZKyyQ9WE96x5grCfGWhAAU9ChzxUdnc7DkSuuNmzr9rjSyrLWw2YjVFyskE4kowSpP5iQY",
  "key28": "4RxgdUboqqmSzaxQBQq7oshJJ7eofg4F6rXZxe88P76u2X92Sm8QjVUZYtHPGyXafoJ682VnYyKGf1KobzheLhzE",
  "key29": "5yz5xuLK8ZYRFv1wLCK9QeFHXdJj2bNnhk1dSVkhKPasPr3Xcqv5KhE1CxFq5PFchPj7Tn82tLYwSJSHG2vb3u2X",
  "key30": "4zR8ND5B9DrWyU5xr3TNpGyhCe52RVFnwMJqprY2ktHM2xVK6ksUsqAyrjrqLZHy3yYTBSXRXBcTu2hYfHjnKudc",
  "key31": "4bewWT3gomHv9fY6cXzWLeQM8sLtqMFfnifAYC5VsCZDTvhwG629FPTNr1j3GnAGhZ9Sfc4v5iE2AnJDVmhbScnf",
  "key32": "4d8i3XGPMpdvRWc9kjnGyzNJVTafgCQZNwSThVMX3H7Jt46sCjozeNbpzmprEvrwT8Q4BgQnPjsw9pEkkY48dZTE"
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
