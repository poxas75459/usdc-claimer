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
    "3MuGcXoWeJ879mT36ri2Nnmpc923e1NziCc9x521qH7vfLKYmRjPsghgwQ9aq8guGY5Vxx64tDQB3xekefiqf4S8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BpYnVaU8ww8MNdBzD5DWEvA5uMGuSkbV7nS5R8b3HcoUWoCsyjKptoRkboGXeHGpjWPN8inM4GE6id6RqRYULSU",
  "key1": "41E1rYbBKirP2ezwNKiirLrK72mDd63eaaGZmrAnVif78x3vsi64W7p1Q4mhAAxVjsR7DiN67stq8osf56yRRCSr",
  "key2": "2pv68sjwy557zfrWu6SKbhPPVssyYAANbkFBtNvsPW5fPNWEwr1FcNSp8Sniiu14k5hyFbc7MLQVVVJ9FJdWb93b",
  "key3": "3TKFqwc913ioED2BGje9KMo6QuEF638JWGeMBThaHqE6ebpVRfZorVTHvW19WEj8nTKeEbifR7DxR5GCds1W4mwU",
  "key4": "2eQBRfFK3xYpv6FX1Z1FpXFp5csekiUc48U6i3PaAARQUcYanJdj3y7xwHAEMTRqcpvUYF6rNBuFYvovgti9a6mq",
  "key5": "3mFufa3bCp7BUqBQMkCtTsns1fnACRu6up2vLHKsPzwJYqe7NQQ6o7d7p64aETNzHqN8eFvdbxFkD97FYWFSsZ8",
  "key6": "4SxsRgimNhcd3AZAkebEwCEZk3iYR1a5vcX9viHeYLB1CgdrUyJDjpkFFx9GdjaR5iKx9vkBeiv71ZBiKKyLJ5C3",
  "key7": "4fq1j4qL5HwuHR5zEnNot12Xi3m9NFWpkr46D7zgqX18iCnmgbB76kAh3yst5nYR6nb3wTzfSvVefb4Sm2hxPdxj",
  "key8": "5CZvSt2paSLa9kn5Ujnf5xUF4reEgHsym6Yt32eziMvMFqT8f5jUiXDNXe5qC1yEWBUjS9oaMjMsQBZ5gsaoh5C6",
  "key9": "5aWMAZD4wXaFVfKetYebyt4cbY1BfvsUMgE8hq5757taBzXVw65JYTdD1eMnNrCjousNQXABbVdhGrnT8LpaDYVg",
  "key10": "5ojkkqdKFVMh7zEmjtnvUog5n699JDTsZ6gPkyp3N5RMxEbsnGTwm9QJunBXZG3EfqvTAEXc7M4uSkstse9G6q2u",
  "key11": "4gDHCva11wottks18oA4RmumK937Hkv2EQjtsdXCrVEkJySTHURiMmHmU1Zo5Uee6n7fYb8DYYnuz4SJ3UMc3p6w",
  "key12": "2sB98YYmKt3PxnCdLzF89KAAc7NhzZiaVMYn6S4bM13uCHpPAqhw5cF3UAdWh1qX8dzEqEFbmYGs6CyEiHKUNJrV",
  "key13": "9boveaqLH7UNV59muiaYwYhDuiS5zWeUAs9XqSP2cubht5zL8ijWqNUDcjLnNUajPDXh9WCktWyWLQU1yQsRDwa",
  "key14": "3N13nWZipoBhXHjFgUKWVsMbesHCs7wFTqHtnynNYA36E1fQ5E8D6jm2Em7pc66mSEB13Dw88iv4QtYKHUgPAR9x",
  "key15": "2uHnZNa8ysAv8nfzFLSyNf1e7hyd8fNKa1Sgpr9NqwwqsTZNtbVMdZccTiizvizk98xGVy2ptT8DTQePXL3vtABK",
  "key16": "5p1VdUrDj9z9nBHAQigcbtjnBhygimxJrtWNkrzcp7JEv73JSykUkx9RoLNaK1Z72pQgVuDvEBhhhVkJVKhajQ9W",
  "key17": "3DVGy6NJP39qg3L9wM4YRLgTfvqMxL4ZNcL8AMWX2FeBcS7oY1iAuYqkc2RyvxbWKKcZJmiwsJPYny9UQPiECYRV",
  "key18": "5GLJ8k7vs2gLMFTn3utmyWC2QUAe2ZyS64dtUrn4jtzJWfybcpuT383a9cpdUpNdPyXa622s2uavRwzxVvUwHUPu",
  "key19": "29U1BALqFWunRWYkwQgYShuGpTqFY6zw1WN4WXWkcrAyEeX5CeuTpoUZBD6F94G34gDSoLgV9Q6PnhiYJXoVUsBo",
  "key20": "vTFFhHSDBxzThzD3dpogUaMRu1WLp6TsuSHvZe5Ntzrr3PsWJSj1aYQuh7Jgnv6Jh7UqfEBtkpwCytUJVVGw4AZ",
  "key21": "2TzPPakruE6mGEvnGCJQV3MEBUM4rKv7NFpJPnqe1P6KR4t9cdjdTSMGQN9PpUVUJfwsyGpAQoebT7d9WFzKMe3y",
  "key22": "4qCypPZ4sW33ZNSZwVWb6mXmNLXDTYBY7bzpRt4bsi92bPewPYyn39FcFacYVnkNPc4tsCmuejrMwb58uk8x8BVh",
  "key23": "2xY2gEsuzdyz8y7CAjPvKz1sz8vAmScZEp8iXnhNMRgo217cEXTVAz7fibgdCvA3UhvFDZPYGeskiCpmtVmyuby8",
  "key24": "d3pjKeahWhCF9MbUDs3PfGz86sjMEdPgk5oiDTtdh1jtzayxeMj4mcv3zRTHRzVAtai5AazW3DMKcYFQxwNQ7g9"
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
