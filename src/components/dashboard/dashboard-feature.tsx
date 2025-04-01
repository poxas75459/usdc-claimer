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
    "CKS2jXS776suYebK2dXrf8k2Sj8PdiTFN3zqFYs8FGQCKMLRqar13jgzacB21UbK8fKWAdfxRnJZvbWs16jDZa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1gMMsKYgQ1ZUhkRuftyUcJC1ZRH6zBppwCoHxaGJ7E8dKN6kBBCVHfo3L9BAwAKJyLrHZVUsJsAfMBY2Km65XX",
  "key1": "tREfRWxvDseV5eynBTKrgj4TkZXxWjT8csHCm4NKbLbHF9oBxu44wDAT6FuzB2Q1w6BoJEBCQy8Ao3pvb7rn2LB",
  "key2": "4eS1iU7wfEMdJGjBmZnYVgmEkP74ELkd47GKTmMo22EnbdmsbH2ijAA8f3rsgDQw7PvYg164n6cPw9uTRaFGBt8Z",
  "key3": "3EgXvCevXoi9uub84GHZQgG5ciyh6h66C19NG99pV52b4jcniT2SjnMU6wkdM7iK6F5vZdmbNUKpKKgrB6iA8jLW",
  "key4": "4j8wUfBcLoPmxGanUBUDWUDhnYVTQEDcLocj5LqkYwMzEWNXysQsNhGD8LKZMmm1FQoeM1fUCCdwFAT2ghMEmJgi",
  "key5": "2GYazKcahtPDV9HvuuEEUTrMLdHxWqCqyhHZFKfDsMD76Qx2EYWbc4FbQchAvvdB9RhSFYbEqPYDm7VH1SM3FK9P",
  "key6": "5CYPfvQo3ZPR9QiyVE3HHqkU7jdPzpEyk1eDB1cskVR1XorSLiyL1stb4YdW83PvuvaPgYYP2Y336MvNjGvqf7Lq",
  "key7": "NjZQ2gLJG5QmunGa2uit5auKmbdRMsnWmp6wD86mGbQ6RwSKZStq13QpX6pJjisXKab1SaoLMjWkZQRMZxYpQZM",
  "key8": "4iehHaWNHmFVdawwctJJMvX44N33i3L8vcvqunuJ9gd2v3yr5sRgNh8ZPAReie2RBfLfwDHZ8kDNrczTLpNYzbJd",
  "key9": "26dnYVTD91ZtGLYXx5jwjXwYG75VknKzQHqZ7FAyuApQ4GjVZ6HbkdyhhDFXCryHgaWSuuZbGx4BDFVDxrQ6ZJkH",
  "key10": "3ydH5GvyHvrYe8Ky2UuRwhUJoGJ8azNSpMEgVaDGWWm7xHFxUcfo4toXBL5n9a5Tp3F9axpZF6ixDDFd7vbXtcQc",
  "key11": "4UDFjyFwP59NiBRZ7ragt8FSSnX7hc7JsfeEfZQ6N6mN1f47WgLEJ8dMecUe5TJDLoLuTzafmttb4xHSh9PUD4Kf",
  "key12": "48oLmkyXs4TfaUsgFBUtMFjUcyFCNxR6TMR7mu119V864UeHJb5o31NuHSoEEyRnXsMy5dV4sfGnPqoc6HNxNbKi",
  "key13": "2GoGKuDhJ4RNTpT4e8WroEGgrUCjqmgkgkjfa5UHsHRC2TsLyDycdViumedkftQ5rfNKj5LhseamP4yCuaDbhwRy",
  "key14": "57ZR2v18yp6zjVJkHn2iNEN3vACRBJdPUJgyUj8to6j5ftDYVgznZufuGJ682QP4LPey7oZ2HCmefniZ9D8vLuYn",
  "key15": "4UtEKiJK8Enau11XDxiJ61h7koK2YzyU7LB9zisJnntmV5Hoopt9K9tshdyYnyRXngfBfYRzHh3ZYvAXTNQZ7sYX",
  "key16": "HckT1AJtoMogDpvL5vQQiCwWuuET2wqCHNwfjyTs6RdHHJ5ZZCp4QK5MWfQLZCzHrcZqV51Douxnm6dmEg43K97",
  "key17": "36BAP43k5FMHE6wjxYPYhoyudJWXUpFGFpQm5rh56qq4hksqngsskCGxK3x3nMzrNNCQeXRnX2817fs3TLkuhttZ",
  "key18": "5FsZKJvCxy2tKCeHaQvKZ5NKxxvj8DFSaWKYPGMZRYZdqKYgSrfwaPrAcuLDZPEpvzE4HYsy959UPZkaWbeDgLy8",
  "key19": "3b6w3scnBJUh8TyA2oyeAwWbdu7nk2ThiMfqop1J17E9dnjBCvDhazaEBziFurpCXBaEaA1uDPBQrzQtp8N6crqY",
  "key20": "45svvPVzSqtSHBi9WJXa4YfkqCb6gCWVU95DRwg6mujac1NCiCi6r3mPHfq5qNR2cB5EUDVvvERiEueSyCvQF1uX",
  "key21": "fKYRKRJs5drmPi6hg6jgjqirUNPFbr8NYrKyyQSdpVWz7sVHJNKUcfp9G5FT87ZS3V8E2EZWxsMpR6Sq7C5Ai3M",
  "key22": "2Ecy4qDxdntA6ZWgLsz1a4dYQz1eM6EUkUU8JnD2J6Xu8SQ29erW67nWV1A2RCAqQ2rGcUQ649H1LrF1kzYtyLZd",
  "key23": "4WkkV46PtkbiKy9aiWXgSsWa6zy67tBjFwNNwsoezHUMhEEd3wnoSNduBYwx29TKpFagnA8Tq1NmNZoKnm8dwfjm",
  "key24": "ybhBreNwJNAzVA87cc17HKZp7WfZmGgEyC6PdmnT2a7vghw9iCvy4FjzbAgts9faEhJFn6qaZxcuPZsEgMiJR1w",
  "key25": "Ph5gx9Pw3xSLqvupmFVebFQBGDZ9RAxYBi8z35nca34dC8VA4K1wEHFyjwSUoJg64ZPQwJrsyDtTQcrsG2tJcs1",
  "key26": "4aHsEd4U9xafaCy5sApFgjyqFNeWgBHvexLdbhzXE5MRi8dVEGjXANY5YfdWXUoLTvQJgrCp9cRnVyijadmugD6F",
  "key27": "LfZuDzgzM8gD4un1sSKkXxgtWpJrvQyWY9gN9wfDMAZnezTw1iWNkkaLcuPiMXogyBYkDWchMBYdhpsoNEGJvKU",
  "key28": "5kbgvRvTn7HBzYTprgzJrTreLgVicBTrtqMLp9faiLdiiHi1Kw2xcDrQqanAXExJkebMQt4ApXirEwuTbRAoguaj",
  "key29": "52F6GWe9qJ7tVz4cpWZw7AHAuS9fLmkq3jSCjH1LAabr5p1sApat41DZVwSWwjabwmVbkfTxwqZgTaEPV8zscKqf",
  "key30": "4Jo8y5dUqYKJfjPaNhHfVuwM44JDdw1AjvHNFvFUTY64iN5HSEGY4Zf5kVX2qSPc6mFc25h2JrLtiqjgCgwjeyt2",
  "key31": "4TKkbnnoLeQh8cvwNoZadyaxaAWzZ1btETEeL1dkd9XxeaA6gxRDZzw3VrCsUHYMroVwLDXfQUuwsQ6Lkt41QEp1",
  "key32": "3eSkAeha8FWcWmKVqUMf7WZbgZR9mviy57xQEGbry8fRurfCoxMfocEzTZpn2AWCXb3NJDBuoZREr64qtfytoEHJ",
  "key33": "2aStD8RmR2SQkLRuueLaWfPFkh9EbHmVubKoVR4iAESMYJFVgLqh6enHz4sfsK4FeJfhPuJyfk1oySn2wjrz3yZ4",
  "key34": "3kCCoASenG6CaJs26iVQWQPibvj4buUeieEhPvP5H5X7hsYwo5zP1qnuAU6w3EwBbXHo9MQrcWqb68HGyCN3xeFF",
  "key35": "U4exZQW2FiaentvA8F6cGP3JJzsnQssejjDAobD4KdqLb5K8t5g6Kh5KDJLoCvtJ3MtravovY5mSNoe8mtncxCv",
  "key36": "3YyiiuT56ynusHF2oHPm3xfmzMJA9HVQFouzxPqEhRS44NPzzLvajTkdezSQFeppWcS5uKgQ6hA51EpymHFaGXtw",
  "key37": "2kFTBnCfc5yU3iz6ShUCZXDkvBzEKQcCaNdyhPghwf87W3Rncv9psJ3MQwZQLxEwATj2yvqdzgNwhA47jeYnrzEX"
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
