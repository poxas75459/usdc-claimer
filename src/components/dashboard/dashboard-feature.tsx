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
    "58vZuP32a9jk1EGZzSBKchLeA6r2aSJ1ZszkkUio8acLRvJDwzo3nxEa6rQ9vn7mDchynATURNW7ssHHSkAbXKnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FabXBhhapF3kGGC1XuHeoKujDGJUhQU13UwnVHw6pbEXj1Lw6b7ac2gNYXdnr3Qh5Jef7D2DofivR8k9t7SgUD2",
  "key1": "5vhLyEbiDiNKhrb8ALgb11cxJhC7AWuqECBzZTxpSfvZKbGYgjjcpbTLG6fVHqxhHta5M1XHmnnxUcPoFJTqk5GU",
  "key2": "2JkiVuVtfuiJ4ExoUyT4jHNt8xYrdyh53JCWbqUSbtBJwXFEHD6xaiykWH4qByE1ksiuLMHMxTQFKQX48FbyZsuR",
  "key3": "3fBn6bjcBYczvGF2cs8veLhUJQ5hVdwva3wGLVjrvGsG4vZNYQxerqbSydqD3jHjL4u3TmfxBG9TfrghXzieUUa9",
  "key4": "26UWRvAMhsYLD2UnEa29nJowwMNn4kZFjGDNrnEFhP1ZSJwugjyV6H3DKAXC6kPoVYLgmcz1zyFwcQhrHxzE5jZK",
  "key5": "59FvYSdHmEvQ7doprVM7zZQ5cDvZBUKarinpAuJJuvbEj7TXFUYuRYdbQD7ugfxa2KmJ3G7VZZXhT9B7by6H2Bs6",
  "key6": "yUxWU97tkZAZXfyNRNUGdJXTX7moz4dNZXbGa25asR3S98u3iiBgqN6Cp27quTvS5VkqoDs1mWonQ8SQcbaPdcP",
  "key7": "3h2L1zSbYqqAkjiJiUny1wvQXGqVjgCMDkb6BA3kXoc5x84dFP3TXg5ZMYewYo8A7Km67EPf3Pb6j9Jwqof93eXy",
  "key8": "4FGoXHR2KxSQTm4WjycY6XmCs5eJ92g4rsB4G3SFucdQvza1ocPRu5F3pKxcH7Gh7c8QLNkRhXj5SwqkZuki6EK8",
  "key9": "54LqcwPTbo7x4XBeHeMLoUDQHCTwtx49at6Y4V3unRj3HR4PdAkPJoyxpQozhWSXhSy488KqXSkHTqgZyP6CtW2",
  "key10": "FYwAetotjRdgR1Z3R2aj463kL6cWjLVqUe4fC6YdJ3VPAH3YaeJ69ayW1vLLC8A2KRF3RGP6N8q7TmR8EQD9eo8",
  "key11": "2hbEnzvcUAYjn1e9c6bfCKkHDotQBR7TaBoZfJ5W99ziEAV3FTxdX2E5Dd45gM2hhpuJW4vWw3MsKgTbehMpTm8M",
  "key12": "36Jk4rVHDnUjjqdPpCa6GcFWc9bJQGAiAzr38iMNi4P53EguSrwZwohuJmFLG8YZpT2DgqbETeJESgkJJGgSaE21",
  "key13": "3PPfxe6pZLN2LYxmtDzwptsNe6MAM3KEu6t6AXEyUUKka4cSwqQjLMSLihZTDpNk45YDhUSwXyhnqLMEtLDt4J86",
  "key14": "kx1Krp1Aa2nHebKgcWWqX5kieBPgtRgqf8TdCEbwY7ryonTvDf9Y21VSoyWBwxFFDoi4uPM4KZ8pmnVKm8XjK8E",
  "key15": "3vuJjKahCuVj1SGTHWfAPwTp5VyDPaHMffiJ9JiHEWsn8YqNrJWkJHJDagJf3XehNrUCDDZkjbsvnnftH9aaNs1u",
  "key16": "3iDvLqxoahqP7vtYmUGfQiWXSti5pwJodk6GE5DnkenqvDGNmP242Wq9NAMojTpmRvibikeaTxL8gujUhaepHhDw",
  "key17": "3fT7PuLX1MDAno37kVx3tS6Jh5QnV9ttbhmoMJQcW5vTAZKVX3ALvWWyzH31GppE3AXqmLuLpCxoqpvferHpzanL",
  "key18": "3z4aueFs27aDUNhzZ8XjwSZMiKVUbytA73SB1Ds2kkbMpt2jQLZ5JNHe2Wdwd1NrntycQ6q8Ce5Sr8MPW5gVEfWR",
  "key19": "3pAqAYkzKxQEeS7iVSJWRBtB2veMWLBDo6FNkGQKNm1VqS8UMAgMVAtfNtGVf11AaB2gE5yzAfY9xudvi3QmU5BV",
  "key20": "Z7SA8vpdnLWugnfc3rfUg63FoVvkni73d2AMKaQbJgGAhSwxv2MsWqLxEMj8x9eiHT7h3CerEkWqG6KNCyjXDYs",
  "key21": "5yEgvpV64uZbkcNZrSxyTGJKyt5LEg1ThQs83EXAaypPjviAPJD1H19348XV8mfKw9wsanYFk7QAEuqdyFBogosU",
  "key22": "28q8ciTCrnqjP8E4NjVvKf5kS3qsx7F8F95Y5X9WQjKVb7skyjY1mGy1EXWAirY8eUUhiHjbbD9QAvDffyXwjDNj",
  "key23": "4MfeAP6CcLhXPbhxMp6sypSstNPLx96or32fubjDSKJsmVH4VBXpadgny8bLiTR1R4LMVNnyZuZjY5fzCkYec3CC",
  "key24": "4YmyYigNey6EPGrzQtpUa3j3zpHKRM3jCBN6n99rccTE2RCXVJPNu73QosLjfD6QsW4Zkyq7mvkYEJkUuqfKjLQX",
  "key25": "47srxQAvhQyLJs5DPa3uWsPtYtncFHF91JrwCW1LfWTnNmMnGSBwj6K3gX88FeHtUNwDyVdk2wmesttWzhy6wPxu"
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
