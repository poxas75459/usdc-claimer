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
    "2DNk8gDhhqBGquEcTHqLY6nS3mjgSi5QXfzTFUUSvXbEAsAdxn41yJKaMhccwEaTS54YV9PSaSNpodfaeY6ZC7Da"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xk7tDWcnG3qn93Q74PdWgErTv6DFhboDYAivxgoaRqvs6ZtyZfraz5G5AcL4izGtqrtWxCRrc4nHaEnc2H1XzQD",
  "key1": "63CAfpChso28PP3cPTAy28XGhYSL9zWcpxEBWDQaAoLetxJBBBAvV6bQFut6T8Cj1CTxFHYoGPeg2gXBdDampeKU",
  "key2": "4nyGuiwfvQUKgCVbyoSGawiiaR9kVyMudh71Eg68WbKouqwuqTbwfZ8aEp7aiSxWoWUzsx4dsRnUjFCRuNDoXjgi",
  "key3": "5A7aXarNofHNvZEYi3xqHwSgzSJoCwCHJHWsUoKNihFCrw85pcZCYnZUQoKVz6DJLhFDeAB4CEJj8WNpBMmJS5gx",
  "key4": "31NnNmDYdMkUUaRr9JeQuuPNyMFQM33f477CLbqQ4FUfyJBWXRzba23WqS4Z7wrj8YS8ryyQdyCGePnzMkvf8dv5",
  "key5": "HjnHQnhHGyS3Lmx3CwNo2drnRkgo91Djh9escDMtkavzBxypPphVtUc88NfBkamGUtUcMsUXCvmfJZpMwVv11Ff",
  "key6": "ZqUt97EAzWqKm1Y5zxkoEjeG9w9hnseA5cwFiBpVidUXkBdutphNpaMRieJAYZfrjsMzxMjsXXdUrtfoJyXpD47",
  "key7": "4VNqDgVnyfxC9jjW66eTCXRRoGTkbaXvdrXoghRLQRjEzU4HnTcb6yyvdUK8pUA4kbGSUvnnASPTN5zKabqiku84",
  "key8": "2ep5Sp8yGG6A3eftycuY1nKcr3o2cZ42hJEfroouMMHZZJ13WYHy4eXw9b58dis4V3GJaMx6sorTNg5YDav6NGs8",
  "key9": "7BAmLdhuKV5firybQRHSjmVksPxRnThSH4YnUQzugkG5c27fMg6c4egiqcTbvn69PMyKG1eSrrF25JHbCWyEAGU",
  "key10": "5cfYEPBbMYvwCfghicyVCaxRgCBk57jGy3mdFwDDWViGCrAaADp9XSG6h3DtBsgKo22PChYEtk92DuqDDrMHYGut",
  "key11": "4QFGoUCAyhaZocbZmFCc9B2zwhpGUMq9FM5bEmbGHRQbo4q5YBn3kzX5kcW9BS13K5PVKazGaHLW4KLjCm3stXxU",
  "key12": "vZU28VmSsa3hTHv5TdoLtjtiyVj2tkYryixuJHZZRUfSz9p1vsbGj7FU9jntuM4evhfw6eNNpTUh9T5sso235GB",
  "key13": "3e3q7pg6iyki4wXSqitkv5uBEiyUhQRvihsCwSEBnCTAifkWTy6pLpBrFXkrpnkW6JHezzfxiPS3VS3114Vr7n22",
  "key14": "4umXvpRLYNKzpwZwNKxVvf1AkyUZMn36gyax3UNLaa8g4PM9YvXXNAxHgCBchy7DVwA7dzkeUX5hanhgHtvCxTxf",
  "key15": "4jdv9hdbvohM3bKvntj2Ei1g4PdoT19Xat4FSKxnpGmjNVKfKdjvDysAQ4ooatpqQUCBK6wMNvkg8pesarMkoGUq",
  "key16": "41HPL5vMwpvQQf1Ct4zBBLYbP2hGr9jNbTwgWabnYwqS7C7MEod4zjEex65kDjHaNGB2E3of8ieqSBEannbsmwW2",
  "key17": "45Wj7XVgtApJQBUp7GzFbhiSFdUu2bUurjbGmhECyANkFhTiZtysmV58ACzXdFjMyNkkAueWerzd1Q1ZdNCoXN1R",
  "key18": "2TY6BCZD7M739Cd24e5XLmiypn7MS7zEjtb26Q2rSrkm23MkYwLJmcpdxa5ESkPuU4jkZLTHYpYEeWhx7zQBxwjz",
  "key19": "2hLYJNbo7kA16cyL45f2KmSd2hb2r3o8VBmQkrvEBFwV3JrdfxwyEaTE4gq4yptVZZQQ2TW7BzvaK9QiSEtCfkNR",
  "key20": "2Z1scVWAk4X6oSFo2FEe4qCtZBBQWVGsXyHW1Z8ropJUpaCQRUjdfpQqUpr7We7PqWnvD3tc4eT5yk9MGQQ7Cej",
  "key21": "3hyBJh1xu29hbHJ8tacuKcybo8mwcTUQsDZVAJFGntSJPzx4pNFTQdsuZ7jgt1w8oMqfCsE3pjM8fJX2DTg7uGqi",
  "key22": "5BoMxsr7FkbBg64sKe1tvDuHfiBJ8MuL5hrrL4zuU5MjaX4BxDyGHqiipCbcdUNfX3RS9bg6kwSJ57DGBF7qXEtk",
  "key23": "2hKiHNfYZs3t3VH7oazGiJvoi9kwGA5ZJbBSAzWAyi6AENhVCYuhMdUzUuoDvicjpCsyjcCJbYG5D2UEn2A69Kqm",
  "key24": "2wiYGgistDt3rtX8xRKJe4N2nsDBKBeUAJa9DjqoXpMY5w5TTThZjhRtNNNTyEeZ2p4BSWTogT6Fp6aWXJHiAED1",
  "key25": "456eL9tce26WLXabcV9GZurFrngp7b9xWGFR5gWLwUc1FMgo4s4tTBM1S6rwhvNYSmDC9XjwKdvgxLzEQEHLNm6h",
  "key26": "5zUfATFqAtMsF93jSzXgL45Ky7kzp8XtvLryhQojqFBW7zinKwqV4JmTThSHv5LhWSVLkcx1whi7Dk59KfbFbcjf",
  "key27": "5mCLX65fiR42Amc73JTQ8ZAJNiTTtdARkDjpeDxfip5BBcpq4H9PMavgFiLNb53wAku4XHCY5SbRTFDfif6SGqjH",
  "key28": "NXvA3yr1RBWnBqjeT4CoY14TtBrQSwkv2z2LVrV9FuFHdE8mSKqV7wivpWZrtA2HwW2WMjBT3cseZX57zdTPwXE",
  "key29": "5WKfbHubM4WRP5BD2LH5Z3FRPYt3XLusSSRBPVD1BVz3eD8vy96p21xvHdUWT33SnWGGvZPZuVe3dzke5HgF3QYf"
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
