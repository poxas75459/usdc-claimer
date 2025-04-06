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
    "4dDibRCU7wrLpSPCrngEYjTYHqmQSMpXW1YbZ4i9wrFsH7a6K2iaw4KvinAUj29u1MSZJTEaudV6a3otyMcZuK7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nkSahoyodx7wVbZdhiVn3q57uAxxdATnziJVgZ2qrnXMxfqHEzUhLzG7so3C6zmApNSbPvq7ucAnYwDR8LTgVwf",
  "key1": "2bSgrmprqAr2KvWA7qE2zdecNxzidyp3xewP7hJyWgPf6nxJyzzb2DwgsxJFdrqd4GtSsajvzvBv6AcSskQwWney",
  "key2": "4ugVqngcXawXRi8eKa3T4NrSu4rbvfoFasDPpVP2ncwqYzbbwYjVDB2ETG2FUKTxYdTJcyfJdiuXAynzLPqYivR",
  "key3": "P2vcRymxvsPXTwAiaS7DFZskX9NF4GBGrqU3KEZxXxjVZsMn9T6hi1eP4tKCZcDx49aUjHupvnsG6pF1YKAGR6u",
  "key4": "5Sj86Xpf5aL777BcirZ4n93B1d2H4mdSyFZqweEJ1YLcdCM7jS72CmBGJiYcyL8XsdJZQ2uttAts75haHhkZYF8o",
  "key5": "3rMiwRg25GFD1iKkKQ8h8wJoQ5eq84PgZC4FRsMtewPkvSrNbNGhgKuYwUJbqmK7g2uzzeneUjrAFUwzWcNEcHev",
  "key6": "25yA6fykq6h2eZE5rzeMcnQiFY7LTTRWtQtRUVcP3Tk5ZBQRq5KnTutDwHDHTFU5e3eJUQmuDJQ6oJjB2rpPtRAU",
  "key7": "23jgkbB9fgwHnyRJMJX2EAsR5HBSXCu97y4mnzR8ymfsCATszBUgbJDVWc2tFKDS3wfzBNSafJJdSZFPXSaBWjyx",
  "key8": "3bRHZdNStdv5FidCntW73i3UAGhn4puaikkVtkrs3cum43ScVKaLbSUxptJjnPhe82dUTu5PVZz73gYn3gQ4HXmF",
  "key9": "3LLTzv1e9gwxTbTWsrvHJo4EVjAhEjaXepeSQGmyneqQN9uGsXqxGpSbJfMZjV6GpRjega4jLrmtLhGhhGmqofp9",
  "key10": "4hphA4dqc5uAbgGxY24p2UVq86Bjm5zGvSpKWqGQkk68eM9kqcLmykbusHqDGVXcsDhRGwt8HpTctU1cWPKg7vRG",
  "key11": "56quiUK3hvfYQNauCuRsLA2ZL1h6bopwL3NbejF1AMyRr5kkCSSamX8CoQmKykm5M1dJguiSwiPJ7CoMUYtMYDZH",
  "key12": "TqXs3werTs4rM37zFDUMpkNQcyzkhtxnfpNYRQSdSgTrcwHMzek2PUFKUXqFZ8ZPHUdETaaWVEiUhn5BtSq1RZG",
  "key13": "5pBbevLa91CpDDL8JTzvenF1pGt3y8EmCebQhuaKEjiyDRqiMmx5FYpAuayMa5z4X6EgYjBBvZotWRryc5agyvx5",
  "key14": "3TXViGE1BWV3vXtC9To9csXGEcC7yYhohc4PP9Gk3aESMyemeBAs7hnvkTLazE9M4o3BYEjTdCvN6YiqoKjZL7Li",
  "key15": "55K562Ab6wDcGfoMFkowMkBiUDfLA7NFicv7W7XZdVwQvLRKXVBZu1Kp81RK5ELYw51fLnhn9NuLwArqXvLKSJiP",
  "key16": "2iYTM3on95y9ckZnZiLsBZ35HH6V1a2ps4tUxJkmqewDKK3Us9e5fcehhYVQkzC6RWQAGtkiDGXRF1QjM5jdX8RP",
  "key17": "FxK7vZwVTFWcfKSxBehQ5yZRh2FakjLnpdYT1e8Xvebo5LZFApy7fRKPNtaRTBbgypjrWuUJNBnG2u2BA2FHX6H",
  "key18": "3mvALE2ZzPcXiMJ12m5igA2jYFxSv8mnvqSvrE8M7nXzgiB2bcvtxJqQmYuAAQv1x4aAef5BvyQfwSBSzpj8hjJt",
  "key19": "2E2c9ZKSqF9nGCGjLMRorproseY4YkZy9CvHhEkQKE7TCF94a7tu6aBorRqDeVB45smEJy9uWKmPVLeaQYKxbwoQ",
  "key20": "2okkoJX9f42ybhbqdk8kzSqdubnFUvE2qR4JFYVZrpPCcssqHCjwLN1Pmr8X38nMiQx5NCBhBugr5TLsdHn8G5L",
  "key21": "5W3PWYVaQMUYQes154BLSM9hGyAPXBoCygXVYQzYgenfB4MUh7tqzQy3ydnTE8YR97fyJto7UdiTqjZG64hskCtW",
  "key22": "FMCyRuF9fqWom7sdRw8dMjEHGJsaTuJzDRMQbWKxcowViDydkqeGp1YQgPcwakMN3R6cGTTD5rxn8mfgXhR7GzX",
  "key23": "4ChX7D6ZjFe1zLrAk3r7W2ThUJoMVQPah9ktWJ5oQvpNhVdopZNYYRUu3eSn1zhfEAMS8QCosuD8kS9eYiqTP42k",
  "key24": "4X96Hd6zsKhrYLxV38zYCw73HNKUDUAtEWmx6kLU6qDAGXaHkA1HWYoxhQf7NRZRPuJwkENc4Z8WSJcbas1A2LPZ",
  "key25": "2dFfD7WgoExXWjRnTAU8BXPJkpE8BLFkzJd62LGVPHzNLN3TbVtJAXw5ntcXvEwfWWa1kV1ofomEFy74kAbUTm9e",
  "key26": "3121c8youCMgALtT4sHwEwjfJGCPsBwUHaH86LntubDkDcRZGNzoTPJBDzFSp3ct75kmF3Lqf76twXHCfbr5sWGs",
  "key27": "9XXochK4nm8JeGGrZg47DNkAN2efEL4rCPsVPTgaiqKU2TTrWSFjLTbC3Ye2sRrHVNVnMLz4sjZZZH8KL9mwqnZ",
  "key28": "4CTpPeB3d6u6EP5D9NWhJWz8t8BTLm1QLtQGxBLmnBJGCB3yL69Cp2mJ6aSgmMzENVEdAS5S9KeTxGastJEZmdaW",
  "key29": "HK2gC6zxgGVp8b2GHsV436KcmgZPupr3jssZ7f3dv6FB23zCSFmbTJbckQMS7cP6Pmm7C5vjwCQbe2m6vRoygTi",
  "key30": "27mMe694DyjxtZx8suKabcxxC8SLDU45Azd72yATjuzqpnKNuewE7xfZsocVCsMGe2qSjxXzZqfCP9CQJa2XjpX8",
  "key31": "64uX24dqBcF8kTLQbyKCQUejgzS3QL77mJMvjyi8tvV62hiRc1YBB8cdW8chfBNZN3fXdsy9PE9gd5zdc66SPoFv",
  "key32": "3rYmf6FYPY6uFqCAirq6nvWC25r3QKWbBHerR342NPM5tKDKcAdjPYRKba7R5izCSoc2mDFUbCZ7X6RWVcDWjEXC",
  "key33": "eyX75RfoHa6Wi38nKyHeTCyUzMNGNVkWptyVL9vrA6kJxa3DXLehjoQ5Rafht21oZpZkcce6x732icrTkqPHprC"
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
