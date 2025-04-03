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
    "GK5eL4AAyQTtGjyNU5efzsGZXYvj3W9813pLYtLWK5ALUY4Y3shRfV2CW8QdiWQxJMSGH4Sg8iBTWq4TSfQvPch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mk86r3dKAJdCpkkgGjbdqGwPA9X5kB8Xbkbg8NqupKhLR5GGgM7xXktnPkNhCPBdad2qrAuQesmJmfVMHrVs26M",
  "key1": "ij8NnuL3tm9AE2GetMMBa7WwVXCQFeJyhNQXf7gnbXEwPq57zvea6aEYcmJbVuw6Zu9ob2Vpc9htSRyLjCXFkvU",
  "key2": "4AXHNULirR6yzCpnu5LHQPwM3o6uhd33vUTEkxv378AFwjKTAiEaMKnmvDMnZ36ojG8brLKvRWweMRVosChN6HYC",
  "key3": "3eo71TWNJUVm3LrmuZQkYQE53Dk5p2D8gfvPZVEgjC3SV1TvjMEgh7Kdq3bmGvhfXb6e5xix1KTpRJERkVRarjRN",
  "key4": "3BhhtJCRbLwasvT29KeQY3H1Q2uh1KHW4777PpRVZTiiejof6VbVmjzSdPyYhgm4xtUCmm3znYc648a7k6VqzHnJ",
  "key5": "2Ap3cChmcJeZ73egb86qibEosa9g4ZSUbi7BTjGc2PqPb69FGChoYqnbhyGQaRG6tuRmeGpKVd82yAz9J5CoSvbK",
  "key6": "3pLpQnkJV1rWJzkjUQkdNu7DBakwCupGBmvF7MN4cX92cJ1bwXTnFYRs3eB3TFuaDkdKVDvJKoMnX7suE99enFTT",
  "key7": "2iLguo6WiRRRsWygfTwViDgnSpMLX9eZFpTLTM7WXVmNvAc6Yp6a27XKHUYHvKDTXoahQxC76PvDsna15o3H1dyN",
  "key8": "3ao4nPtRr2EGXMhML5FtqQ3y4rRwH3tog57DYt9xXUTRURvdse19ovapZB8snkzVfZ2sWyKamC9xnfbJDwnZiA2e",
  "key9": "48FQsZUy83r5T2JoExu9mJQia6cJ7b2SMP4myG7SWKu2GqgfFVwcA3FooJ1NrVyKaCPNUULWWgnMsFGC6oLCknPD",
  "key10": "4tkuqiqEKfzRkSBD9mmZk8HZuLEWdy4WXeAsavmLGTftZpwnBJ34WhQvXbFRt4DEaG3mTaGYStDZtpMSzJiJ9fbC",
  "key11": "3X5ords6eqejwTGQ7RNwziG5zVRdtKR5kUcf3nPwPNZpxNvYsS9PH2vKqsAkrhNuyQJv8T1JtQMZwHS5NZeSoELN",
  "key12": "Tm3p7hBA67P4eE4YAXuAWRH9U1uood5eRFmUJsVAnhfGd6mtrii4QR9NdzFBrnpz6tMgA75LKvJRis6pA9hjbQp",
  "key13": "4nfC5dxcaFNJ1j6e4s7tUejZaEJmMRAwcw71tLMQbxescuh8cnUqKywrGrsdXuj3cvEvJ4j8L5VjZ4vAasRQJ9gc",
  "key14": "4uTgkUw7ucbUj1zR3PZETUTZyobBC2QB7q17rSFtEALXf6F5TjUanEvchKun6NqPAYTZkzfx6YyDbpGke6Abg6cV",
  "key15": "3j5KjamyW6b9FVcnLDQMHNUq4njCrjSVnfmxNGMYFPHiRQfDUu7sEQV9dBEBt4LDozNTgw52srRahdebvgG5bnXs",
  "key16": "m9WciRvBtiCrwMbU5Uqv5NKDVaqkkULjbsB6fJ8pkumUqyL4ttyBzuco5ZL4T3fTfQjPURSorcdibWwWhxkSwAX",
  "key17": "4Mhf4pPZjU3Hu7N6bER1uTLr5ZmMzdFgLjxsJ1orw35cidEJyBT5TjEXsaMuAxHZZbFkzBuhHbkiR1xGeRt8187M",
  "key18": "2VPTsKvC1CydhGN35PCnD4PRycAKcJQaGiGdfatUguzbfbfxuCvAeTHJDYJc1iK4HFUsjEHxtYQ3DwvmPYkXSbDd",
  "key19": "2gCNYrnMtA59KRDnc73uZDBKJRkPuEjAjBYbXU5GodqZyV1w4mbsnsxi96nffuBbrAATXXH5hfATG62HR7z7VJSZ",
  "key20": "3WmQbbQVZwu7R8Yo6QEeMVR8516ZJe39Erw3Fw2x8HNt6gjUu4CDiiqwjP8ZbNheK2QW78bcJtfWXUV24jrpnjTG",
  "key21": "3enQYU6VvUNypiBaRrvuarr3ygMtUiRPtQd2rcf6Q7NmS8ASWzPcJyh4xihH5XTzvDQRmhJ1duVLpfFrACBWHHZG",
  "key22": "rWmoeH6juJfFPcr6Pr8mYcDMLqRwLqXifwrLvFdP67kgyLfFn5Yx7F8Jp4oB2Dd6BZjQDFJwdycxfzAjDvrwxjz",
  "key23": "3qcJaPSzv9gtbd3HQs4GpgahhUT4ugDNzeEBzqo6Gpy6ufR7pXSA9LGFGCSGJqA8fzHJTfm4b39MHxF4NFPHGL81",
  "key24": "4VLcDTwZCzaYZxuFPD25JDaXfY4L77wxFUfDsmV5f5T5WUeWMUcH4GeWP7JTCsQiNSxDUfk8hDzXv6maFFgJomV9",
  "key25": "4m3Yadk79cxYiTagVGLeycBMd9sH854R76TxG7SiaybSXvLp4yAGEdk3cTukNj2vbdixvZnNHwA1nPM4qwH4ZHNr",
  "key26": "59fRFt4CQR9EuyU2UciDVDQCwRYTkNTBDH8DEvJMY5jQBQeM6YRzAtJsxCQMhTUYVeY9BHLhTR9SFCE3mj8eBM9T",
  "key27": "3y6GcWyJ7QYedtmpUStFBjLpoTZ97rZvJMW1Ahty9AJVVjkV2gicdqhHXQz1kneQvyLwSMgFeY43Noz1qm6xY4QZ"
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
