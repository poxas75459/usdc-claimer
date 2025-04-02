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
    "f3oNo3hPB8C3DGXY4AsuuRf8J1FaS3rJ1YA943pAGqH9ySLi9KjYQc7nqg2uHkdcQoAi7xGN6GUE2E6HrCTcU4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "343LSH3Q3k42miM7mHi97UbJuAkKpkW8rQqZ2zWbwVukh1codEnZCsC2VDc5by79rHQUR4YySTYpSbLNkCp7jKbu",
  "key1": "2JMoYqjk43ZT72BJxpfNdp8PTFBHJj74ZPmH1m2E1YFY2XAxPGeKSy2oH1RDtCCWsvEBjKEuEdSJ1FCcta9zV8Wm",
  "key2": "kEkhVk4JukCm7kv9Y81hjXgsVseRB75gmqwmNPVMAsYuHsjyRidsScrZPPsKTjCfKVu191uy4AZkGzi2FgdkMts",
  "key3": "2A8MPmkWAn425pWjWtuHZiCU3TEGzVJ5EG6q18A5BX3oy9Fhg9czZexN6Wve6TcwyfieUQhLnF3iBKnzqbKnsucj",
  "key4": "Emd7kaSGyTVaK5LT4FasCbAm3GiaL6HfD6TZn4tNyBJCWpxXtKxxp4fbfMaLZv1s5QtfMQP1rKyuLaD31CgcSC3",
  "key5": "417h5egVdnqi6irCpuotCMehaAN7cv4syS2SbYtEpKcbuPuELKgZSBcnn2LZwYufuNMAEoQWxB6XHfbK1xbkqtVu",
  "key6": "4GmE53TKjnwrowLPkQgRqbkCmAGVsdxDrzebAqhKsEsxYRPgJJ2Wf7984VEXHqa6kVSQ4ejrNy5GMDddwmU2Vg5z",
  "key7": "4jA6wgf5toz5iLBQNPehi6f5wQJSkesWeFU5GLBhxPb7pxFaDU5yBeLTrrfK9n1msnvsAVFAghj29X9GJ8p1dW1w",
  "key8": "5KMFG2pi4gC7d7yG7wwrCyCHhCZ58HqabKSRKcnhXJycNqfGxjYiT8MLt4H7RvWe7TtbgchYdJWXtKC49SmJ1dNc",
  "key9": "3zRX1iaDDz9sBdmmYB3rwBkZ82DUFaZsevt6euG1Bdv4iW5GwsbPT5FMXXHt9f5nrw5J5g1s2P2vmGL1DcPFFLbU",
  "key10": "1n5Th92yAj6JwvaLh9Kfj3cSmhyc9jb2zQ7xT9wsC6afvAtEBgc95bHH7E9khUSfcZ1fypTzJ5nTAEY9cCH1MLa",
  "key11": "5eVaEx32MNK6EG51Aujxx97CPj5nxyEeQVrXv1KmBMt3Rzu8TLTpyYQZSiSwGjSHzUTKuhAMR4LWZAEDuiLdaurJ",
  "key12": "4zVu5tGaG9hM1WVjk57ovUMm66ufeoUkY9eP3MyJYuehQ4RemMK6FhCXEnAwpFyNRmgg6v2dNEQ2isXSeNR8rKGs",
  "key13": "4x3Aj83HdQ6wLVbWnpKLb4iUeJkYNkwQSjRGTnbASepGN2XMAUXiQ9VHiQxQwqcKZfXr8Qi7tm1goHeeT6t4k3P3",
  "key14": "5Rapd6HbaCEx2zoN4a6uiPRTdciayVfAjSUMacQDdS3fukWRD4D5WofwqzdQjvmMp7uJ2BtbbRzQa8XomZYPZH7J",
  "key15": "37NdKsX9V2rRWdRPArs86zyveCNm9u954vJRxfWYnLYhBF5k8RSuqur2RY25u75fkz5CLf43gw7FbnhM7p3uXUNs",
  "key16": "4gc7nFZYccpt2fsLLMW8rxvRp4SkDq15rjEw2pHyvCr9wWUscKDyPeuTW3z31aQp9Ztw4nz9GmejyqnkkJADUPs9",
  "key17": "5WdqWCZWSkcXFdat2J1RyDHSkH8wBDr48G2ewGu21pGHEXzYdjjKhRDfFSsxX34tXEN9WQYzMbrYo7zHcTW2vcNP",
  "key18": "2EgFqNLDk4tMkKJePM3SFbqh4KhjzpV8y8yjjAntmv8qq3EZFfwm38oZa9HcHarKWDGfS1yhEagbyssYgGnHdZam",
  "key19": "5eWcM2yd1Zyj2GtB9hDQ7aazptLb9rJV7T1RSNGm7CSncFsQRkwSD4Fb9mYrS9evuMprdvzdZvQaqmsZcNuUVzv",
  "key20": "2yo3N6vUWguLZvZ7oY5jLLcyZioN61rUyZ3qTosKzh8PRCnmhdtVBn8YHsvioBEBrp7kGHprT5ZUuaL3VVPYZewb",
  "key21": "2gEd9AzshWmKjtnz4jPqxv2MB8exjXzskGxZVqLUPmgwtcdUZjvLjdVXnhfQtSCpm3bSCDakibLwoQr1zoyKmRQG",
  "key22": "32L2Dj5gfW2cozW8b3SqnHWh8x9Tbdu3e24fns5FiTpY81P1JyBQjHVRr5rRL1Lw1kBJz7CkXVURs6hAYx3iix1b",
  "key23": "5roGWx9dDFFbTdWJPnnx5maM7Drr8N2emWqKr1Z748bXhGvEw5377Psivpkd2xM7oxrSwkE2Vn61m8PVbfJjnT66",
  "key24": "4YEZN2ZbZWfT9EdhJToJoA5aueybN8gHLrTvULoJzGFcFoUHYevwkH6Y9hd6qwABMjPrgyv6CXcAYACeh5CoGfiw",
  "key25": "5bLNr8duahvjqC6m2iuBgPnP3K3ijUWW3b8HxTLGFa7fDhvBPFSmRvddVR2sgmZtiNAKkfTmegmAXA1rzxvDdp31",
  "key26": "4Kk3x7veeEhycqXQroPya3zm7v6ovjWFgKS2CvHHiHZ69qqVx5CnGbHRncXSZ8pmGQm3BnJqC1Fbawy1DmPVG43j",
  "key27": "2KCeWwheFVbCU6ctPR7EbsMHHkUzEaJRjDMi6zwUbp7VViaFcv1fimMKDDjAaBGzFrThqKxGTkTBQZLEaGHGvYWF",
  "key28": "255i8d7GhAnQmXWtviosBk9RxPdm7UphT5h6FguJz4dLQbKGm3zqcvEkvNkA7uQynh25eqkCB5dAttmjfvYbpMRi",
  "key29": "UgJWUrimPYh12MNxfWjYJtZLEwdbqdCmpbjamBGxE4T2g5d3hWLS2dvTHe5DZQtZ8Jovfm1iykiAuB8bhPX1nMJ"
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
