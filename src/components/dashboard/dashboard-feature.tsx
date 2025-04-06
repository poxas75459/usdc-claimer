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
    "3fUKyf7MRrjaLnNf2BmrueWvtLWZE5vaXbPFY9EQa8VYcDvQm7YNcSwFa1sGx4RwT5fu8pnog9xPvnTMwHr8S87Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKw3cDocaWg2wwo1SRiV5AUcUXABPQdLdpQaUUDLar5PFZgPeprKo7Puv7ucHkSU8QnKcQb6jwvudH5R27aVK2j",
  "key1": "2oz4aG448EU7V6HHoUaC6FYi6w3sEeXCiHoULjyzM4mLd7QqTCPPqSyUW1xnkSpLDskpxR38jndhS9sSJezMFSGN",
  "key2": "3UwSTe3KL5TE8djq1EQxTLe3zGvPYrZFQbksCXEvUuS3rxN5hL1Th4RP5zzx12ZjKuRYMeRbpgqMsJSw2rUJyXk6",
  "key3": "DBbJ137Qs4rhdyt2nxPtiNUtfKHLC1mQ6D4H3WEtgVt9RymLom4EJrXB4S53GqwJwAMiLMvufJi7jfK5DN2wvgn",
  "key4": "2pDBxByVeKf61djQsRTZiPnw65owwA5GU7rPDeESGmyk9U6tBgak3H9DSgSoydJz2jVWiAVY4A3u9xbH5JAWm5Kq",
  "key5": "43Bg856DfUEZHGpGDWqxbg5ZgaPKSMxqN1LU9oxgWyYfFRHycjE7d8VMT7J2oJz9av6vaDuEjZzcsLbB4EAKm1bv",
  "key6": "5sSAZHVpL9Ui4qSiNfoKo4UDNC2Yw54GAPADJmTcr72trW57awq4Qy7V3QfVYxuSdE5Uw3bJwqgkMLvXatkL6ZTo",
  "key7": "2DCQdkjjwyXVkb1fgZbn9qcGzPDzz1eAxoQ3aCYNXxkXWWyiVzKRVXbHN6jZThmaU8ye3eApDvGxh4bvuFRMr95v",
  "key8": "52C1JzEUp44j7dJ2tZK66SWpobuBKuGTZuLWywVK2sWcA9szrzGZXaty3Mr2Xay4fnc1CnvC3cP33iWgqbmusWke",
  "key9": "4C61W9D3aDZrMsV4SGsn6fyGNtuJYCmQuT5TzKf8bGNNjm6bPof7KaKPVEa4qXgWEwjDekdTPAqCkEETu7ezK6sk",
  "key10": "2xveinANWZim9J2waQXgKN2vDYhZUqSPKNvRudNcRgarAiSVB6Zim2cgFdj2vxTGvv13PyTeZU9wPCUD8hmmPzGK",
  "key11": "4dZK5F6ziiaXCrNdeuS9GEfTyb9dmod2jA8Qqf8u54qaBKhVaDjLjrtZmNLtE2JNeqLQyj3tbnnyYxfx9Cj9DqwJ",
  "key12": "48ydcsxYP3XAhUMitpUeywgwyrhvQtzTiS6vkC9ryFXhNbWTockYiCdoB1Cpbc4L7XaWfAEx4sUTdU86ferXfUhY",
  "key13": "FseMuoMEA1Bz9vWLtEtNwxpYADQXqfrVj5A53ZYGCXDxJ438897DTaSFsE5Fd4W4YBgd7CfUJcWZbSvKBr9rwbe",
  "key14": "4YUXuDtcyENGR4CWMpR3i96gmgy5AcWWXUu2JrzqLCKXD9sZVo8tRwgHhQeZt7h16rJYrBtXZpZar6hrQWvyh8Pp",
  "key15": "3AXAUHyaXgvqaadJUENHF4AyG2uuazQy8zAnK4RskcmLrTpXrkDXiBE2UJPSkQ2HdXC4yckDkECNpQbHhoEpq6Pf",
  "key16": "2ASYSynPur1G3EBfHm9hzzE5i6FWdUAy3hDfidNFCJFiNUdLRyghc1oVpriDtYiZA1NNDiypbiUjWptfd88VretE",
  "key17": "4FxzG9iQEidUHmHQJGHbcoBh1K6UNrmABfcE8UDSdHNjqFvHenfUHHwm9ooYbk4cjcyroL59t6iikNEs9wjxfxWb",
  "key18": "4TfVQmVF5DE5wLrsxoVKL2Jwho35Kdx5gzqdPkLRQ5Co4zVxFX5ctQNLSfN2Q4NFsdKynx31xx8HKdCv6zn5NWzm",
  "key19": "22598QHtjxDCKzsuG6MWo7SjUdphp7K1htYiyAjKWXCCyH9AYW5tWRimk6dvdhdXSbmG4T9xAFeoKoYE6iXZ5pEX",
  "key20": "3NE9dpxPbAq9dqUvo4UyTj77uGimRvxApfboiq8JUZ5UWMkTMDWbb96VyrALSB5KauH1Rjtnjg2bUi7ngoZJVWYg",
  "key21": "4D6WQ3KG958ogpEQYpg2PxvWhXLzumbnkJGg58Nm6c8u3zGooU772JmWpRFYpXsXZkNBgGgK3jZiotKqj5qS7K8X",
  "key22": "ZDQihiUaj6SBouQYupdrZDCx8M3ZNfKxjN3U3PTm3as8PrmChtG7gY9PHqGofSTsK5srUHjff3bj6Ek3CmDpnbr",
  "key23": "5g7yXMmXkbAGzovZwq2Um1twvntDcC9QdkB7BTzZn9pqfY7BQfxZh2gBeetruRmhCatmnNCNLMCDUqj1ksEhr2zK",
  "key24": "5eLkdGqx724CDDamLkUzEjZNCDdNAJ3XBddxqaymbXzeenWyvUPGV4vDqd6xf1ihAZnKu4DXWmNWzJkWzGvHgbZm",
  "key25": "44VY1iRAHmRKVyMw82mStshFyYsbYkht1xcTyCpuZLHw1Gnybsg9JteiR9uxWvjMDfPpQ2mFThivDJBPLHnyQz8V",
  "key26": "uCfy41tHzb4kSr9vJYayoHJoHyDyCnDryzedBcdSuAWdLUN1QjYojSH6sd8c8A1Rc7ZfLyNNgGRHWG23LNMdN4s"
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
