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
    "3CDyVqpcFKMS7DzvhARQNgZydZUqbVWZno8ztwJPTD2z1VqczHcz3GRqkTnbEHQ9n9HEqSQTEJBf1MHw6N7y8RTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QneQDDD1kM3XnPWCzeMGdnd5FLKH7wdpHpLjj7swpJJ3orei2zLcQ5VKH9qM3tcMaXsfxYgy1JFAVGAvzJ3mjSr",
  "key1": "2324Wbq6ny65s9bHimDXfkcfyCif7hvj2jfUD9DAjZhKmLRKkQmw2fBPJK7zztsBvH5DrjUtqHrkKroDVtLTeMUn",
  "key2": "2LGvEZt1hMgLgdgm9WHrDvy4QWEY9bo83sTzuazwhgrGsVfL1jHV6z3Z6MLgzGPv2CpT5fXiwjFKe1Ph877YjVCK",
  "key3": "28VJk2Fi6ae2HrT871PzCZQG16jjEjsvSGcjQR7TKX7AG3gSYQRpJVrPduciVyi5gzXsvbLo5L9GAxFGCirzRVUS",
  "key4": "3Y6ZbLMNn8JfVJBqj2Nn1xJgwdGqC3sDyRu8gAboQq3KjVfMcBX7oVKXUpabsN3xb9zf15os2CyqTkVREBU2axeb",
  "key5": "irArvE464Jz7fgduZ7Cc1UMvGX6sTgdXCEDz9m8uq1auGj7rCnkDsUiduNeesNV9cEv5EsJLveL8gVsbFiQUpbL",
  "key6": "5mVFZz9EFJpXpQDXfX8y2WmC8kwWWz92xjD1HdwjaMMeGafon7Q7HiDgDkKqEMEDu6JvQidnGKFGqjdQRJjde7oE",
  "key7": "2VoKxrfkkXPbRLWQeh6fD7dX5KGE4C9LkeRhfRDaxxgaPTQ4uDyW16L8Wb9wKaPsjjHLG8euBna2jga9j6yjB7DB",
  "key8": "5UyXiN6ZjQ93yQ9K9erMBwDDsZgehioezhzssfXNDXh61naY8kkA9z1KRdYNJHvBiNZmFKgcfD1LJVgtxnZjtHcY",
  "key9": "4hsx6EYBoLdF2CFhjxj4gVcSjr5cBLSojx6wEBprjD6XgAy1kQYTJxxkajaQbD8Ca52ardHfmXQrQrFYSFSAgRoG",
  "key10": "3Apkdu7vVitn3seTfdZ2J7HxPkMPoCGcawYxURRs7CgoDmbyoyzP422WtmAsE8dt8vCMEnUQ7qcNwxWf9hLG8tN8",
  "key11": "nQXrNW3hxmfUmZESwrz7g21GP381gTscGFKHCUDCtJBqH4xvE1uAjoAYqGdfrrRfefnbzKZ7R8kgGqoW3wrJYbN",
  "key12": "329nwYmDSAFZ4hMbsCt96eV3FYYwFcC9xvmW5WWTUMhJLZwXYmSdTLopRHMmQYeEGZRvjbwWEffe8WaztFhiuNVu",
  "key13": "4hWmfqLh8DoqN1xcEDUTmdm1PV3n7Zs26jaJ4iFyxtB1KCxpGbxfdVhStC8yJAzeP6eXaYMC1syThJa4XSp3bU4V",
  "key14": "4rAzXJJfpVCj65Sos6GsFJZrnq3cxiyxbYit1vymDW4a1NytVZSUSGVyFinWvqM944vUu8egS9fu82CuF9P6FyWy",
  "key15": "3CmVgcqBdFxK46oxRnhFcB26Zvqj3ZJbt7i2hiuHRvEPa6zQQM4ACCxHFXLqVWcVtppVMwGGSWzo8nFTf3G8TVpm",
  "key16": "5Cjsi35cLw2VTULPkTbrUmfcWcbScUycDVfg2t34f9M768ybZbg9hwoHdsSGBKUoZfYSA96h1cFDF7wHFdGdBz6Z",
  "key17": "24YaqMbdmsHvafJgCEYTPkXZDYMXJCevyfnuBiV6aAj9pnPKmVuKyjTTkEt4cY7gh9DDuaSzGVxFLFEM5pushTtX",
  "key18": "5mB4QgtwxMyA7Dm5FAKcFut7dBA43hXhwYBbDSt3mkssmn3gjHTEY6GzsyUVVu4Ta942VVGDKgc3FstyM1zJDrsA",
  "key19": "3JNX1uYwwSEGhV9X5ey6Ty8wJJbfTD4ZXNHbkoitSaDWGHuRUnXkJGWb2r3hXMMQ2S8ViPBy3mkPAef54o8cWoRb",
  "key20": "2x4qKZJs38BNma7j2uTxH5zDZXX55uHcE1mNb3Bog2NaBHADWXSwHFNXTeXhPeKw9uzHNVhnSkPTvTNNTbvTbun",
  "key21": "2fMinfh7Hz7gKdL7Z5J1eqMgncLxb5oiyzNvbF2LqxhMNrANeJKEHjzLGFLVKDgm1rwTCoApa44oXyrobqqxH1H2",
  "key22": "22cnqNF35Mk44tjTWgkksfsTWefK5gorQsjEFPPateMWtrd3z6koWCDeLCGYa5NQsZhbLwPoyXByk2eqzueZiKgw",
  "key23": "26oqxg6t3N226DuzUBEXHYfr5sG6BkJxqS1upjQtKKMMwR9ExM6sdDYHXSfRopWxGJgVfLGSoEvsSZXTpMiZExrU",
  "key24": "2ie3R2tdDzc54BqHFi26wdH9wxoJ2JQHK9gkn9V2MmQHn76upNHQ8kqVyyg8S9ZDgAqWN1iAVinfZ9jCN1CVHqdv",
  "key25": "2iEwxbGmrEZsWdhHkTPD7hKxhMKfUNa3jB5d7G77w1P6s79AniFCn17JiQwmvtydzydn9DFm8fH96Y6r39iJ6ozx",
  "key26": "2PDC7yJ66acUcnPhJ65jKzxV34pjE81mje7asznhanvjXmWRoFRZ66W7eb3ebQyxMdTsbHHBc32yZhGwJexwEjVW",
  "key27": "7u685PMX4afe73EfVkydeFb3AWgQ4FP7z1sLH4rkpYksjbo134FB3KY295EJoGKosAfefVjgRNkzcFeE3aM2DUF",
  "key28": "3wPwyF2UzwYy4WRaLXZwRqhhkXUW458SUp25gDtaQbYLVp5DmPoHYWsgLDGoVFqT8d1EXDamGb6YxmQDKTSY3UAy",
  "key29": "4pToEJUMgpd7eMG5MiUismVSfp6eoyGVHkE55uyGLAbJFJ2aVHyyYTQ5FovWaryuX4HqyNF4wNtRzK6VJ2GnCkmS",
  "key30": "5w6bmMacNqNbAK6Kk5m8mD5dfBbshUtZ1tQbd4Dq4wuuA67U1A142Td7icSuiTLXsEGUs2akGm7R68V34VAhrJug",
  "key31": "3VVXfj4rv22zDrVAPdNWwftC43HUXv32mAsjtg8ZL2yfnA2Znmz1dqpAREzuaBuyoBoKXPQ1YsNpvgEHvW2ptrcH",
  "key32": "2r5xGafhCawDYE6ST8pcsXwNPoGjxRMLZxEVV2ukExdyroWyRsCJqxoPcChNvN5JHgZ9j5mY8AHrjfWYdLLiMurg",
  "key33": "5ZGKPZY9YYvAwaHcuZi5SiVU2mvHJfxXARote6QZ6jpMZwF7T7diMYJdHuCAu5Pw6swdkHGV5jqGdcfZKoTVohC8",
  "key34": "4gMHsiWwFT413UzpxFfGbH7uGTScYbtVZruQ6Pjby1194FkYv9AXyvE7wNP8u2UfAQn9p16KaWKB81Togw1yYHCt",
  "key35": "2GHogjadGQHaeoSZEgPvoZdYwDQq4AeCAzbRJyMmHHVLAFqT4Pma52iZD6J5FUHpajJRWqWBWXkJtieV8QG4BQBU",
  "key36": "2r1cJF5zW6jPQ6G7Pdb4W9Am7MNyVmn4C3eCoogELrGidmryxMaK5Vd6Q2ERPH93bLRRdcc7si3bK4oB4kQYzQ1E",
  "key37": "2K8gha3YAPWDB5hNHzEBPUoSCcgGknEGytEz9BaDgEezF7bKEAfodSqqHGmcy4YGthFYcHSzYZoaGcdggYVfnESf",
  "key38": "5bsmzdgNiTWGWpANYJyWDvqJfDKZFtfWaDLYRZ48CPsEDwjJXB8SVW28hHRpA8cPGnMXUSBG1hgVnQpKAFQaxiYH",
  "key39": "5MHgqmf8rtUp51tMxfbzmifbQX7piztmkvz5UBxhx3YRp4hvriY3HaEPKcEvu12PVpeCzftSgkmNVEroiYfsizcL",
  "key40": "c1JnrZcWdFQsvKf4sgeo2atLkaDr6R7Bf5SQ1LWxUWckFrmjgcjVTtwvmUQLdyeRzEpB2WA4iT64gfzQbQy9XBa",
  "key41": "3GhyxGdQ8nZZ4ytMCVEfwdDBhQZ3vAg5QPjQHdX7REvfHjG8CJM6J5jLVWjKJa5BeCCdXHkTZvFWFVwFos48684r",
  "key42": "5Ro2rLW3WgcpVqWCAhu9JbY6nMvrAXDFJGXzcST8Mzob6ixRzS5SMmbCkEhEquZGJR6dTssFCk1CqV2JbvipG1Cm",
  "key43": "2W4WmBkcsWs5Y94SUomjkejq38tM77N8jkYprVUrAqBNqdzHRT1xYHBNa1eH7bHgpTWZ6hNquHcGnXhdkZEK6DEr",
  "key44": "WRajSzNV2g4tFZG55yof7ZaYo4Sy2KfrFzVSzSkq2m4zpYZoxogpY9pJr66jjPUfkYR2sw1dfH744JhowyL6pk3",
  "key45": "3HhdXKZ17vNNQuZ7ocFkhB3hLVrYAN8AgwzLonL738G1dsgKbdiweqHShrWqgB6UJbpkjqmtW9a1dUy5551aUUo6",
  "key46": "5MWUtP7kknMNTUsk73UsmJXBRmAxvegfHgf7bYzTKGtsDxXyaKCAgYxtxUmEpgfnPthjhWXa6B2sxNobr67xG9J2",
  "key47": "4PzHSrzpJGgMRbsedSdYnLw6wBKLX9zbchjJujPF5JTJRbPZKMJvykmeVhuscEpgKy3VZQU8hzwXGUfKUFoJR79f",
  "key48": "2eFRvA55Dx4Y5YeRZ39CWYn6CAqAXB8u9YcZp9oNnZij5rrZaebLCYDa3SLy5HWK1D2zwXVDJPYXaW3aEvU13dGj",
  "key49": "4cziSgPjMNHpi8RPrgxT9fk7hcYgfUs6EEedJfZmwZNYPgNKnjhbdeSwqHetiByr2X5XXq9ZnHC7wuDbjrZ4WWX4"
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
