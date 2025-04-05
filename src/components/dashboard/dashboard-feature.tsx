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
    "4qJWX5uzf3MiWjX4AVRuGddG7bfU24cJSkSdMSymh6obFa9EVP6t6EPDiE4qagG9DurkoEtwGcoF6mUu2XrQpWbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hxTD2JpFc8xgQa77ReCffiUSBxtetF95SH1pTTRNfqYewx59qu8fnvUv6yvx6VdW8XVbQcM9AhmxdzL48cvsacJ",
  "key1": "54NygqjegePSRY6SXxBYM23UtGqeTysiwFBYETZC7SrypYtDtkzCij5c3hcV6pVMp6pBMvixYhSRHY7P4puGAKRh",
  "key2": "pTZuFgcCkN9dHB6V27eUVTtTqMqbPcpV8VezzTNxoFB2Uq3WrVHuLeZ7SUjwnHYi4cjLFHQzcH4eBbmBpPz2D7g",
  "key3": "3yZsA7SGxcugjgfjuDMf9XvUcid9rs8ixUekZ4wzj3hxUNP6f2cwYZzqZhYGtSrTdHhbcdZZmUaPEPPp1x4Dsa6q",
  "key4": "p9n98gLaaGuNGFGoeExo5uuoUXP7Qx44NdKiJzxporM5F7LRF9w5WoaVjVVYQfSKhSEgYrqX9HRLdJTbhwXGVAq",
  "key5": "GD963GtV5EA9h6zMNuLtrvEgiAZPFuyG2hE6WhuWp9iTvzdQsMxe6JXgVpD2o3ojx4dmiPUwnd7SnApg9aHZZqk",
  "key6": "wsuHr9muXaXVycrxmCSTGUg3bsVEtAib5RWcBXpXPvqygUmSvF4b9P8vBVj36x1RNYvXe2pZmFuGXFBTHsCXyv1",
  "key7": "4o9VeaoKWvPMjCAKf8xrEK5WTf7yEJ6CC7Bt978KhqomBk5reLgx9femhRjiHgSMEhSK9yQs7D7MMf2WzPZVcCoo",
  "key8": "61XqavvhLiL1p6ZzKANj36frMNjqSd4JBuieypZ9EaLseTqqouUbCwPjmdaJ27WJkJZEuqrxY6WF7SLsEzyKLtTs",
  "key9": "3qGHyQZNqjfTZrWtBm1UX6MeyVDfQ4twLzzdUF2AGoAzuy8EEeQUTWyJpBmTWpWd5RtsWfXD34oGUMvMFm6mVWJk",
  "key10": "2niy7c4oD3tNV8AumszcGbxioubmgLUchhuNJc9pnp5UgxcdDjJtAtCqdn5Xb195sx4ERGLGgo9J63MADzqTMTWW",
  "key11": "5qSrYUQz8k6zJHrFYsHNnYvAQRRUc88rHAogcZQpaY7wUpPiQkjmY4npNZtXLm5bpygNWvxTEFJzoHe23LB3LS5u",
  "key12": "4vDMsxbkMP73djnb4Zh5UZYJzdX7fYfbGVivEKy2R4sEiVLoLnDbTkwwP44y3ko7kHPu1yX7JEM3VyZnEStRE9RK",
  "key13": "31qBoPvUPemNoBrv3tYNYLd7VHjSsjLaGxo4qDrngtnk7EQAMhhqYSARiVtwPpJoG57Ztp7kB12XhrF67vibmpso",
  "key14": "4uJR9HbqsPQd8X1X5Tz1dPJGk5ZDKEvW5X7a3xk2zcSTajz7jzQPnqSWm3PHqipUYy75AVjEgP3wzQAu4Hg2o4aM",
  "key15": "4Str6sMaRWBKYz5ZkFED5GQw3unpbV8rJPznq6fbzoyXqLEcfeBW71StaZHssr4WiALfgaoffb5U8pCrAQhyJUMV",
  "key16": "4QpKzRRHKc7LZqK1wfqFiFB3Mmhx583vtExnbF5wYLhH7oYGVMf7FEP45avbKVPtzgyU1YiV8cy8UY8u2BngoegQ",
  "key17": "5y3fYKtDHdJjFQTSw5PHJ33cfyXtsa83pVQXC1Cp33jbTCEPTcyqGtAF5JW3TjiEVdJ1fu1PMx7gEnngLpgPo9c2",
  "key18": "5qVjfVo9yd1ycb4H9SPoM1DTLQiDjhpXGxsY7vnJHhzf2cLb7swWiLgnmUHpPdqusbd1W5oZCQHUMM85z6JSQZWz",
  "key19": "tn7ruxLH45B2aANjFZsfDgLETaKW94kxTWL52nNuxYNZqcsScb4vnAB27S7JmUptw924zHjtfiDtPsyHUdgUhfA",
  "key20": "d1ngZLdfD851GVKKouBeb2w4j25QxAZnLDCwXUXQKpyfRHTysMiAnFgCJB7CTDFxxZK7vPC2bTgdjJjLcK4AAXQ",
  "key21": "2xUpSVvsgo7DgQpH4ddf3iR2VtTqrY2LXt2J74QJZLjtpEH5fwy9eVqAL6JCEXJyWE9W4G1nF5faoti3BxHHmZSe",
  "key22": "4kENdphHy6PfgxXfJVga8cBqL3NTU4FxwVztTzVJer355HHVrXBPt7KxahVSVcjDwtPB3RABnKdo66L3uU9BNn3k",
  "key23": "mD4Qy3JGfQBsMeEvZNiyUJR2Xwqg7dd8JPqVHFp5ccD7RvUmW4LHQuDxR76vpTEyh1wUn39gnAruqb7oY6KHy8Z",
  "key24": "2v3iHDGwZ96vvgrdgV8RkZCHNT2Kaa8xqbjDTa4btSxxQVqKKTHgN7ToTyntZvPnYng6zPveZJpgkeRz9tUS4CUX",
  "key25": "3nokJrKBCGseq6bx55rjtkQKmV12UkbTXQfsFJ5ELhAoGTHTBmVLtNLiaJt6J7GVAQvYp8qsKb1iKxPMpcZZrxSu",
  "key26": "3VXU8JVBG5ChFeD5QABjQ8NGcqFTjRGRwxQNtMVXzvE5maq39fMpRUjMrZGbquVcwC8t5VrdJTaoyF5WWN2xVrJZ",
  "key27": "3bnToShL9V53SE59JHanCWhny3aEixtdHcc9PWSq4ste6oK4HZkQEJwvmw5LABoEhTVKaWU1YK1M7PViAPLi8QBa",
  "key28": "Q6YQTBkyzYygQsTNchHr8e2JpmLMS7iKs693CtZ9oDUN2w2Lg2ifkVx6fgMj2GtjKZtGGMUJMJ9KwYZegFM8ZCc",
  "key29": "21r33APvwv6zrNfLRkSqzDXmuJcQPL1dNQAHMp13S8ctcpJQDgLep2rwZJi1bBV1st8nCADJk8DM9GwhrMa2Lr3P",
  "key30": "4KuFu6imtPqxDULip91X4pQQnJ6qwZSPB5TcXqQwTyzobYPMHifrMTMrRQw6AtxvNxyVXd4iW8LqCyUjNM5QoHkx",
  "key31": "mTWrNkzbXCHE21JD6zkAU96vQ7FZfP49UPoD2fcp9vuFFSz26ykmc8xmc56uzVNtoVD7uQgrFf2tcYPP6FX8HNj",
  "key32": "34AxYnscxnyxfpi5VPFwF5sU2sQ7ziCiwoRX11GaK61yumu7ST1LGsq6CoiW3BXKHGk1EE8j2R97mh6pNxW4yAQp",
  "key33": "PbmDBWpUm1wy3B1z9z7Z2b1q6YXFag7bFkTFtUbJtBysBXrRufVq7JXwBMyHCDHqdCKdPge2FgTrxZNP9TKpp7G",
  "key34": "5ZascHfvSW2Zs731o3K1i2LNuEPC5pA6FPM9hCcjLi3ZtfE8J4KELSpnYWkRfTz3UvS8AivvQbzcpMJtnapfvqkL",
  "key35": "5LFNj9gMbMccN5bf1vhjTRgQHPudksjSX8AYcH7oGZ8svrbCpHhr2Pi2FdiLusNMBNUBxwNTu6Zgr4i2gtYc6qMY",
  "key36": "45x3TFMVxVWwUgNcp9wesXjGREssn5skSx2uro7zf2m8RmZWnaHwNde2LqY3iTyXhcetGKVdCgzWe4ivAk38UXo1",
  "key37": "5nS3DMe2GqjWoetQAJvjdunQGjdvkGUxrkWJTBwUUbLMhHj9dM5qX569bzPLsFzg3SzUZQkKArpv3rbSY96qX19s",
  "key38": "3RorqxSUKqjV8rfzQeVWaMEGcTyzZDMegG4faauepJWjvVbKsvjKdoKEkCHTjxV8w3DJejB2oFc1h9P4Y5H5LYKR",
  "key39": "2XwXeYHHYnDHQEdxTzqyyApGxgAfngKJnUHkpSbg4nGFbyPkS6YsGqmGA4ZLAiYFs26VAAv5d3Zy1C9gqTTNop2e",
  "key40": "5scoU2JannSwiWJPJVe9Rcuyr965yZeAwhQhe9gHZ5d22iyE1WhjM2tWEDgdEU6LaR14tTbc4YK2pHmyA2BaNDoM",
  "key41": "3Wn7eL4ZgGoSZZfTgD8XoqEadLzY55dqLTEYnnkvnrUFuJyS5Qwv7n4P5TaZdRFchSRy1APG4K3SqDX4hmgJmrdd",
  "key42": "5oAYcBoxS3xhDDuuF9QQQVvMT1awYJusfND3tEvnp3GSsoLA8xGRVN2ky29sx5DuEssqcNJqqU88QSG3fhG45UTZ",
  "key43": "3safFG3vif42fknPKKXCQQYh8rRbyuJ7SjLNWWJZsHvUjnkUyKsSoTVynS5nQN8JweVDNYRGAZJHnkaBW4NSkpA6",
  "key44": "3aeJKp7frBjd3LjwbGLmYdDXgyyjukVMJ9YtgAU19oM99kgvGH5L4s1ZD18dHAtarWTVecZ1Ge1VmGtKJaNmz2F2",
  "key45": "3kdecvybeMe2qo8eqw14KXm3VtV7qNZ5LyzKukqE5Uhims72DJUDfQjVUv5J44NkoMZGUi6nwmbZx2hQymupFh15",
  "key46": "3a814CDT5iGr1mt4JJbEPqfJ68rLmXXz7F5xKKvRpBa5TTaSxzT6cyRWZm1aCuVKXGXnTx38uP1idKExy3hbjscm"
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
