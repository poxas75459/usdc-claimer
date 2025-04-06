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
    "4aAnTAnv7gtbZgAZWkysQmYvs6HSu9Mjj3TRm6bBYijiJ7VEUjRbamjEfshiFjMVWqU8EysgiNGhwJqaBbrBCfnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r9EA2wMvMHBi1Z2wHAHTh8ZNrhgAd5JmHScDnCNoL1m5dKY1TKiEJG9YejbjJhDcRAnjsVfyhXHaXRbqUiCUBjp",
  "key1": "3emunbboijC7eE8VaiSpqCrDTQU8WJ8RyWYzYKsRGZZKYRM6yXavW3zPsf9rbDGRiRxvFGdQhDrtz5vnLxPPCzmy",
  "key2": "4ZiY7kGFchSeBhyLqX2ghK6JyHVM6HwQYyXYGkSWyZumTepHgcoz7cDHBnUdJHYHVmMxahwduRrnkGdzaURcru8M",
  "key3": "2P3bjsF9Yq3zcBh1B9j4NSD6qX76jbzmWgsKttjnbNHPTZajRbHZGXyyiyGXhUknbxthteX386jzRWYVoQ1ifvpq",
  "key4": "3zp5Tbar4sQMU79FiSfTzAKHvVeRLGtV3EepyZBNPSp2sjDH8L1tANVWhoQG9SbPurDcafrrisG2eAo36Lai4jFN",
  "key5": "4MHNeRcCXCM1rkY8PUHFk7XVS2SHsRYyTMMuPj7A4EtVNu82LgfDK7CDf56fyqQ6pcn5xrBMSmDsW9WhmTBeAK7m",
  "key6": "UWNJsizvoZeBtoZgggZ9rKXDLt6ySTam836FAJtVmtcngpHqFQxiT4JjvbPVnmcSesPunRDHJEJGftFzbqHnihM",
  "key7": "uGqqjPH1VqN5X5cyNNU5Peus7e7fUkmM5DfqU94QdSxiMDNyDoDQNsiScKb3aGXuLsk4F6x1sNYZkxB8jVqtUbM",
  "key8": "4Jw6KSsEGAmSfyFBdW2WiXSkHWMKgNJkdX9tutj1jYdDyBGJfzTzEKjug5Fj16dvTPcroEDczjKn8g7irqVP8Bwz",
  "key9": "4bUxgC9xjt4aSHNaCx8TW9sAEfRGsnx76yt3a8xjDQSJQrMw95eNiiWctkdLgfcPfcj2UBfnhwDRbTwFcPTvt9Si",
  "key10": "5G9SJiz1pmitWTASzMXTVMT9LAuzkehYnw2Z1FCHJNp8J8HVtbSNpwFjLwbN5eJHsZy9cjxJup5iuKtB1xt5bUWa",
  "key11": "63CgQknSfpRCaigAXu1owFdCT2asDwScc7rryBphQ14akE87oMjKkDwcBXfxFk9RktPbWmG3id5Sti6RNgA2Fw7Z",
  "key12": "2mZv8ZCTAez1UC445pmJMz8suuRuaYCWQrqkKtXzizqzbpJUENVpnZ7z1mXqaE92Eqi1HBoRx8z3q2Rz82CTvVZS",
  "key13": "5poXPP8KQBvBfc2JviKDNmcD21QHpZXrrNRZND65hyTxYR3CGYvdL1HhFCAYXzC9r9ZhAHoSo7L2f6V4nLwWWg8V",
  "key14": "4JWF6R165kj8c43ZoXrCxJejVQjzGrmDXoBws2TF1Tw1KLpcRkFt1ga7j99q8nGXznAnHfWyQ8ZVmUPHTnLJVtjn",
  "key15": "2HyoQChD3rMnv7AnWY2pnwFSLPh97R9Uu7SGgcS8V8UbyVcTiEvPumCMDNiQRnkEpKKDP83ibwU2EvARcVJkraRW",
  "key16": "46s6YviKQY8QucwCtcCXpbbRPUcWdjJ5BKGf4H75NARKh8nYtgUW5bFegF1dm3mJmUREyBXhqeY47whP4GzfYHhN",
  "key17": "4wkiAQeANR4XXij3iLk4EkkkhCtfR7VJQjUiyPs1dUmaGuEUGsC21Ro52qd8sDqHWdaHiizZimvp2MqbYwR6fRYS",
  "key18": "M1Wupjg1x3tyADoBsdBQeuUs4Ax3i4PpKZv1uBD8h9MSooUmhCg2YjLAZqXx5JLQj7mrsGwTRysRS9QNSEPw6yH",
  "key19": "5sWUwm7Lm28afY4o5vUWwrpvwrcH9HCdgvcKx8JcQvKJDDkfnf56EbDrbbDSDXiC2GZv2AVG18tDnkhMj2T1ekCj",
  "key20": "c6CFU52mqJhzS2tFSfunRsfWaLjbypht4KNfgPiuPaC1NzxTDHFPbCs2xqpPqsoCkLzTGhbyKa33GvyLGmR2GYU",
  "key21": "qzfy9skbTd9gSw8gMJdumq6CXmdkxJ6aZEChDcctGYG7zvDJa6F8gBUxF6rCWcm8bnBFYweHuZ9ATuLUcdKCUCr",
  "key22": "4hXgu1ekvRcooPvRncjW4JyMnknyncxkkvFSLejap12ebGnC52Czj2m3Xob46Cvu5W1SkgTDvjvWcWhJcKJGZKUu",
  "key23": "31hH32DuSBtZA43pqoeZyE1dHv3BfUe5QEvGMKZ7YoqfUNUNFwGBQ3ZidEpY8bUuqKky8fFfjKLR7aoBUYpUcRh9",
  "key24": "5JcvHY3FX62dRmnF5mjL27XBRRaemgasL9cQQnf8urg69vSbB8whJ8Yz8tuFoTyD9TPbjr4Wk4XAw9Uen1vo9ops",
  "key25": "JdqvDcLGGyLUPKotDoJt62WRamTbeGyuRFuKs4NyJUYb98d85PERLWTLmX3Wa4YZLxv9FyRdZyh2Nq7zbruFotP",
  "key26": "4LJ2Wrz5xyoWBhYy9cYHWxqUMT6VznqkSGPXiMgfQk6RsHZ3eKxYWbNrHdkYYobTuCpEvBmcXQBdon73FZMCBh5G"
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
