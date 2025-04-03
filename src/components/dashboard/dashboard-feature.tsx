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
    "2S8cWSUL5Gmw8qJfdGHqx9qj1tFF3hKe62UNqZYwBXakysuqdwLyv3JVesb4UXpQkCo4wkMC4z89iBm2k8jnPAGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XQLWMszmb5RWEWkE69nzqR5UvEeWxr45UGboGPeB1ixZ7jDiVd1Djc9J3mHX2bsnV3iv2tBim2rcm72757FFXaY",
  "key1": "3DbU3GXtdZbbyQHujeDzeqLktVj3hvXWBp7FFo72pWQnQP9L6aywVfrLw76VRjh3fENMiHmURGymQfG9u1vA4nq1",
  "key2": "3P4qsQZLjGGoSS43dmUscsqjTgHDbcoEvdEy3mWNjMXEfKiJrYAFmWdJEE9nvLL578C12k8Ck1Zh4mYw2EfciwF6",
  "key3": "3kXnvTUB2fwsa2tZn8s5yNJaAfdLNRz4AGxFZr9a7pQeHPr5bQbJ56FkVwxk7eZgm6bKUrRTURGXBKJCXaGRbfq8",
  "key4": "5TCvKaBgC7n94XEhgtmKoFH8JjqrG1QkMGGLmqgMHXaZW4T2GtrZ9cd7PXcQiTHz9mdvRpteUyoN6z1SrVR8jwtg",
  "key5": "2Po4qhsya4GZqNtki6DySSU3A3CTkTQNuB9Duv61U471rfHXkTpdEvGZPTPqxvu65rb9uY8UL2xwy15RrkxFNryD",
  "key6": "5DnEyRFEb41jzVGvNSai3sm5ZpVjuvf49R2YF83JZ41kdqFSVC5eqzv976Hq6fbmmLrzdWyhapBPbXuMYAhyMSGi",
  "key7": "5cGpou1pTFGucMH9sFpr7T5pm45CwmXz3zbWVKH9LzeJDz4p1KxQsFqE9GQgmXY14BDzrrXPQp1CXkuLbE3qY1Gc",
  "key8": "zZsZW6Gecme32XgLkkaXfiUHzKAMkrJV1jjHgdJN4FBCX8KXSbhnZjN5Vd11YuqeX7mabQWy1yPymbUkuzmdcy1",
  "key9": "rxLC3L9hZtoArcfSXL8joC2SbjzX18doJMPmWxbb17sgTTppasyXqFChNTRGSSbwQViz9YPXeWQvq19NM2NVogA",
  "key10": "Hn9ajQAodCQ7DdEpAK762axPZ1muHE4hLKjbEt1i7dAzUqd8xFe6ZttReaSR2w4phYJcZLotx64GTLaftdEixam",
  "key11": "1PUsBQs6B54wvMHVhMu2NRnCsnXqyK9H9o1TMeYHE2APvWU59HHxHfRneaaRc6MLrrFfZPwNc2e7GPkXkfdrjdC",
  "key12": "4ycxUi4hUgmdkopLLiKK2cxRXVUe3HdkNDHQ6NBFG3AwsnhyFUa3CopppzRuVrRkD4K4eri8gCN34dsXZWzkSfrX",
  "key13": "2sQtmjvP3yjXGFUaNsrygXrWqHr8h2Tj5JgvGQwpTeqLupiinGdCUZeYGUx4hjJXBWqwuN3Eko7HveEVHcjuBZc7",
  "key14": "3x9jqzL6bUJE22jvXrW2S9Qkx1n85wPY7tp3fv5PgUSVv4QPfi9WxJPoW6NncysFEqmgreFUZqvRRvGqEwywp64p",
  "key15": "521FTRiQPV42LZebeuB994TW99qfQf7nDzz785kFKDCfebkya3z32VyRc2LD68mhfmKcDC4pzZzDYhwLXa9grPNW",
  "key16": "3rAqbNhFj3eemXc5Vp5Hj97eaPaH6gjvg62B3aFT1379nZMLy1xSXp2PuCiqAf4fhTtNEZqzyuxFdnWvgYQhVgKr",
  "key17": "2piu7hTSDYnx8XzeksWDoePTY2k1XyZivKkyiPbzayDvaeT7rZAScgpBmhavpQPj1LCtomuYVDuedVoYf7DXt3MV",
  "key18": "2bCy3o3G5iSUM5nGufqxpdcXdbunxg3VdfyMtonBCFmBMZ3mj82iiAinvWWxW4NVNyNLW9YG7hFb5bmUv8qFQpeP",
  "key19": "2HyMkxLDakPxzHBdt6VAby63UAT3ELaJsdgF5a5icPwYuqsSPDK8dzL5JiBt2BXY4YcH4SLhTxdK7ywpWnsE96YT",
  "key20": "5WPx3d2iR4CnZjhyUPY77ci73Jo29YfskSTxR5AVzWDt7Gsy5qJbSbL88d1PpxQNr3XcVKJf3A6bKvnJMqEsM2Wt",
  "key21": "4y1Du6V1X3CHhcHNfUPziGFxtYMksh4kvzZDk4y938bhqU5NfGC5Dgyj341BtgNj6uU8kMLQAJMo8jupxC9XRxLG",
  "key22": "3YfHd4UGCX1BZVGgSrqbQFS8DfWJj2Hcaah5aP1qsuhxMyyawKAqLW7R2UdWs2LRaxoy4E4YzmHQHvYSCeh6oC7R",
  "key23": "2Muapus8UhEoAdPq7ATqmpDLrYd81vaGDkxjuce9Vsy52FhafoG4WorNWkesw6LrUVrzeFJUQqMYbgBcwsxJbunn",
  "key24": "wH3C9zC5xEzNNcYX2iUiuK8dvyQL5PstsipsL198ZKVBbnLi8nUFiCP3zxCQi8EsVzJjXarPkszED4Zumju6kUm",
  "key25": "3bGrhWPAhNH9qcFSybt4MUbdKzd6F8q9pyy4XKRUkczCXPEa4T3EypKkJFwt7mssU4Jbrwt2a5XAunT1m8jwmtN1",
  "key26": "5xXJ2Dfi8TS2PeNda3cDSokpQSUFGizjttLrwbjxRdANcJVEeew7U14vqAYiMnndLPXHJZ7QoxLTQGUkhds2wvUg",
  "key27": "5rkKXc45J3ZJFEimJ3KTfLTJ8vNC5hTe7RZyfB12u61v4S41yVKv7b13qLc1FzvftoUMZJvFrj44DzC64jc7xJyu",
  "key28": "57pvHQmJyKt2Pztd1n4o6H4Wnb2XDWJgFC2RKzMTKhLFLDbU4erjTBEHX21qZ7o5mM9AAQQFxqV3Hnw36pxfLWma"
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
