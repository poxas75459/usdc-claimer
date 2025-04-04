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
    "2EdAmNnthmrF8cHGnbpo2ftqWoP4Q16R17rVnH4joNeTUjEo7x6X64FSx2Y35J7XwbPm7d8ydskyzRXz7o6C7bZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pdQMawV8GBUnbnYvNQFJWqfRjGMPyjBuvbLAPL34j3EzWT2xd1XqeFDGKyo7bDUoQJJCuY4iPFNWbPZ8oydpTHq",
  "key1": "EgWLFej1zQEF4Wz5vDkM8cfo6Ctjfe7dJ53ttqLTKDxavNW3axAhuyWe8JAajpoCVDVAEMezxAUTuuMFdBwfEYP",
  "key2": "76GtUHm4GqAXdZy82Ft1uXLLv73CVZ1Tu4MRDVqanv5jCMZurCFjUzgL8ZVRu3hcp93jkK3JzTroGmXj6UZ97LF",
  "key3": "9oxcDhbZ6Fqu4tUBRWftP93WKU5Li43Gpg7bPwhYhVBxoZmBRMW5N3PsF27Ces9m9MHwauGFyWrVMoEHc3PYs6g",
  "key4": "2jrFborC14hL5XoHLKEsSdNdE6PK1dweRtwugj2waMU6K6eb77hmCu3kbzW3zKbVoJ9NkpJS7i7RkWAq2T8VR5Sg",
  "key5": "3VQAFHLUD9WnyHwAxJaoDuTx9dzHtF9cHupPxxrKLC3yox1ahRLSD2ByRa781DnMtKx3HUWrNf1uaBv3gbcP34B6",
  "key6": "5hct7KKp6vFcQJLkVqAFE7FQ1QvLkcJcjwqyXNnFu8Hhq3J53BSwNHCWzXB5AGcZ5uo6nGHqsnrp1NB1TVjiK5aw",
  "key7": "51SqdzSVyg9S8346awdzZFFacu56DfLB4iYSTU2kQwhDo9VVALa14LgUiFNGMhCwgtSqoHqJa3oWF32uTHqSQcgc",
  "key8": "4zkcxDD19FTtaUXdqBY81GUvq2R4Ty3irnw6yxjh1FFHk7SuKj4aj6qPSnXe1cBT9UF2Qp5n1Yc8y7HJzzDBvyN5",
  "key9": "5czJSY2GGXqf4RWP7QGAWbJtdRgc65oG1bizQKdv6fNTzMeB68VFa6ucfwN2XqGMSMUQFrCuwC5gkauKYEMFGKhR",
  "key10": "5pcbrGT5qGe2BhGZ5BTFyHnaaaRezGp1rD6eQhEH3xS9G2s1Dor7naUdyzKaaiAy5HTSd2WQrWykh23M9XiERNKQ",
  "key11": "31vhV6VWR45yC4tmQYXUhHeq3N24wLukxbSQXFXTffYofj18wdmBHjcbwAJpeAnbGdKxH2Fe4kNAjW8i6ByU87og",
  "key12": "Wu4PfEc1o2BRbBsQkxcDaaHdQqwnappPa8JRFcHaGj1cC4u9TAugmFGcoJgD6mFnPVKcmPsahcjBwrkTGqQAL3u",
  "key13": "55AojBBWs86x3T89ntF5mwzydZ9uQBALbq7AjQCNK4KKqRTHxUF4AHgDQmL9PM9j9vvFrJUMv4p1e7zTsGLJtYa7",
  "key14": "53wa7kfE3p5jsmVvLC3eC2FZKNrc8Rju61GzoK8N7cMU1uWSdb7popF7U6y8u9BQiMAp9BdpKgbDezpC1Hcxzfg",
  "key15": "2ewzLpXcjAEGgzXZg68oKJhewhwBpNEbdStAYK7auXM4kkfgpn6bqZkyKZU1JdE94XB6urEHAaTe7LD28ymVs3vG",
  "key16": "cpYhZtMrmi2ts8bU5ETU6Ynjk5hota1QmACueL5QgfDQEvRa2ECPrd8D84RM2n5yrigbsoAGaKVHvNWDXGiXkpw",
  "key17": "5CquY9cJ4u5r6L9d4RoRFT3KiUs9kwBABqqkJcsoH2f4j5vVkWfk7sNuQFYXFGF7oy7F816j1SwVCunm2gQim697",
  "key18": "3HsLpqi31tqn2SNcHVuu5nugkPTGHUMuxutbB469AtQUbdRdGzFuNz7Pft76sht7EwC7wtXKVxbaDmwG9tKWS3sS",
  "key19": "t1Mb3Be4oszB2VnjDvdVxv8GHGphH8g3xi3iEYv26vEXz8L4YBGKAHgCzoB2x4QxeHdzRdMBdpDAArVMc3NeMYQ",
  "key20": "Jj5csdqLZ3daiX9vqmYfn62xTWbdJNwaAHCaM8N2WhamPZkn3LhSw5iR25zWygf2GzZGGnRwVRsmxd9ByMeeVMf",
  "key21": "5yii2KUeJ1GofUwEdC8Dbwwq33zjLxJTBjbUiNvNEEhtAzsMDAhVgLW1K4j9XLZfmHs6jGRg8KuScvrHAriRvnT3",
  "key22": "3uC2Uy3cereUdEbaBjepxHdkq7Ki6SLD5hprxeoKDHGz6jtwCawGQc7zqnjTUatuEWVxSPVsqok1Vi4jPz7NAkNQ",
  "key23": "5jNUACRS8DxohGNtpxzoy2XUvfmrUveixKLwQmSMH3xdKQoYXvzC9xCJrFz6KVLJGdbmyFqvM7G7K79AfrZXMKH4",
  "key24": "2UV1qGApF9nUfRf56jTiY7857VvThPTuYtyKPwfjiEiH4M9KfBdAmoBkLcDPv8GeL4ephkwiEJMDNYQ3mAbXD1R9",
  "key25": "268yPnS6VxeuRnvXFVdLbGiR247avjgf64XJyZbwM34kYC6Lr5qWBHqECBaSD77mC4f8eAetGc1DALtxf5zR1C7y",
  "key26": "5GDpn6AjTevufkbVmb1yXwcB2Cq9EM6Mb4pqPXQmJfzLLfYfbiwkmihMxiPnSsps4ZmDktRr7ExE7qRPheZq2BZ8",
  "key27": "2tQbnEepzRmnYNYhtiJDp7gwa4kixNAKnRqHwpHYzBoXTUeECEs2JMJi3ExdzpADfS2efS3G4MvzRDVArsna82SJ",
  "key28": "21GzHJsvYQxujJpy5LXeFdXKhSEdqPSmqRAxXMDsie1nfGmytyyg25Tu1kuu2xX2NBmXNhdmg8NRkbRNDcWKo29f",
  "key29": "55PuqNgxZsXqh5p1vugoYTFz71x1GN6iHpsRcw1P4sotLndJP8V662oEGVh6o6o2rASDa5xAuivznW9rR9YgbAK2",
  "key30": "39Jh6EDoyBTdiTrJLDsyEmvD1mRfncG7RpGK8A2FVSLXAsidDQCbjMZ6CE4L8Ei18q6GJ3HgNQd6kgZZLGgYnhDX",
  "key31": "5PvBcadx67rrE8rZAStAVzUyFWvR7Jsg8zzPnHKceyzyV4g6icsAPeSeM9HewpH82DT9wPJDnKVqZMfZKt7dyMi2",
  "key32": "HGEXXTQFynSVBwfpmADHQ7rHZXvEQFipvz7CAWcFGNp4Zee3gPC4mdZAnZ1BWycRnFeetmZRgjoiVEqQT8DJuZB",
  "key33": "5D1Wa1RXgFQe9WqekBCiZGiJdWfhZmX7X45Wc2ihzmTy1ZAkiuwFo3C8qzZuyvCYwS4VhRunRVar26VF83sb1Kkn",
  "key34": "2KaDfPeLzn7gPaC11fNJmkLEtvQdVhQw239rTpbhP7NsUS1VZHHC7fXH9Rv1nDNJ42Kpe9TbAW6AZHXNkE69hmRs",
  "key35": "2z6X7RKLPubDEQ5uVp6Vm3hjo6PptjiSVtioQCBNp3Ab7NeZ8n9GLQ5RjXngd22tYYsxSpk659EXzYmC6NkjLKAD",
  "key36": "3DwkFFv48TaEQh3EGT1v6wFFQiYsJ2Fb6Fs8dimJRSmPoFgz9m4HSP6Wak36dkSx3NXGSjZd1e6scv9ua9hDFHkt"
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
