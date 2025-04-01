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
    "3mf6RcyqLdA2sfcjvGBJUZZa45vfEwqHxKmvjH9iWcmzn9cmvRoJqU4vyZm4Ljg6bibNYvZZLAQFh2eMGiUiqDqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhj1HyCUjB25RDMRa5WShDe3w17goeX2DRpak5qDBP22uxRm9dyPBPwdXwKDpJo1MyBWjLn41ucjW6wPyhjfNzE",
  "key1": "5G3eBB1VJGpy9vfKGoqsaXx1dp2it694uF9demJ4iiwXQp5CoLgVv8h6rcCtqQ47chNFUXtYCFWTWZKJwDNKzHR9",
  "key2": "NqkPewTqFWjfeP8NV1NXLwqgGrF6zYCfYPZTg7mscEbxmPFbjn6BnJVRE7thGT65DAcnQBUXJWbhoe1aNSbjQez",
  "key3": "5CKjynH9DkyZcGSn9KSJBvZGBQEjSFPh6cSSzycX4vt6KnJMgtwgeDFEjYGSBzg4T5cuj2WRearmpVkEXgn1UP1G",
  "key4": "PZGEAzGRvkN83QVPexwbcNJ2jF7jkgSe2Kv1xKDnMMPe2rxoFcuUEvFco1xpPrddvVafbJNqVANGK8bRk61W1cs",
  "key5": "2QLekmLwgiStZj3kJVPbGcCrryueLPeMcqEAHoAMPEWbho2SDMSeD2SuRmBsunF3KaZTVnsJymT1VVU3SuwrZG1m",
  "key6": "24kasv3qRL4XbSx6uXMaF25UGM382KxZdCYyJYy7XbETkR9zZoYPQ2kX5UGzGGi8KkdqFFsyRFgKqQUC1jfbgTdX",
  "key7": "5ikUXCCzpqWCv4VCt1HDS1WQLNHWaYLmijRmG182934ahn1z4kwaxFTt8Y9x7U6ELu9GTDxWr7G2jAihP8h5DxVt",
  "key8": "2ZaGk2pHRFoszHmr4rJxkrjG3quwYPdFob8GhGDp6no71ZPZuPompZ9UGV86sEPXWSJ1eoGiuhukdaPi6JkC6Tc8",
  "key9": "AXtmMhcCVJ3Aa35R3cgJLwULTsn88YPkEakJYwsp77aXHxQXVqhzgQ2se7uT2M7ifCn29iAu4JvZvhV8GdfNR7y",
  "key10": "43ET3Wf6xFF6h8ocq7n3Wz6fEZujTXW6D85C17GXbxeZb5GG5jURhp4KHm6ViiNy85ysRidDcTmNG3jWY4EGeEVn",
  "key11": "2EWTiJaC4NsTZgrHwhM3bDptXufyhs82Rqo5zD8W7zZLAMzQ8xbMRGKNGgU6ukuKzt7WTmzZ3wE5oSpzEaCLK7h",
  "key12": "fky1skPCCnoBYTR75ecZRjB3BBmTbUMXeaUEKvqhEb1ghaEiEmWV2WDAdtFP6ZPvYNzgqGjgPesBoNa9utWFgUw",
  "key13": "3GKXcBPwoygHChaPjgZ6JpwBHrFQ2QX2xCq2HXTNQPfDxBRsdF1rECta99T9ebfTcx6UTdTuH7Xt8Evdwp7Z3uvw",
  "key14": "28WeDTwKCDYyKRPmmGXng2aZEEsN4XUrYjKxDB2CWtCsXqbree14GCfp3GABkMdri1w1AhPhmHEb5mNvrjuPAijh",
  "key15": "5dcC7tPwq9eyXhw6Pa8GhbMA5Lhznw5gcZ5mNWfN3ixproAo6Cpz5SJBjfj4bzyP8FSvnYvAnxnba54b6yfUdTU6",
  "key16": "2BAYCKPvWkoJyu8TVuWMba79Jtk1Lkf6e1BkRwHc4nWvutsn8ywZZaC3Psyr9J9ceVRoWBeHP6n65xPcrWq3pCA5",
  "key17": "79ideh8LBfqKfbMgn4vH7GJHoj9gLHs8TBJeXAuaBCfmVtx6uDAsJuk6bP5GY6KoAK2jg8tAkcJRRyS4rsgwm13",
  "key18": "3VfQJmHBmJPVotF1pjrj3d3ctkGDze57Lb9Y7iax3bxRsUB96R5iSb1Ejmd4m5KUnTqRbkuqFKSsBFvqzwSriN73",
  "key19": "3jDjksnLuWnM2f9pV4wrgic5FHvtp7bPBfs6n9p2mXHvSkF8EApYy5pbtEMSBgth7CXTRTdQMWsa7FCgBp8VrdMj",
  "key20": "46VuEXc8UXGzC1P3rXykU8MEAdoPjFLY3Tqeevi9rbS55ZqFvw8Hxo62XAx3HSK1usNUYxCpNYdLdfoeYstwHifM",
  "key21": "3YY1fyiY3KuFmN7p2xkW5Ha5cLgypHHvAs7CwFjrfcexZg8EEBDHWLYyfhdD7oE1Q7HHJZJQRQANrCTUwXQotbUF",
  "key22": "4779nctuLwHFcCHwRUon7w3YxLTHw2QDcRxWwyfmC5oRv9qngrr1rWQoQJ3vEo4eh362rh3W6BMiC6GX8G9cxsgi",
  "key23": "4QyKjX7Mw8dMawkgwnWVg58H119ydmTs6JjAoM4mavV5cM3W4HURBsH6CgNGcC9ATAN6R2bMUk6cXegAmhcTV2Qq",
  "key24": "Ea6CFCVvqRgqDq1gvwyBF68vLzq3x9VmN7NxvxAi3W4sMZVJKimq2RGjB2eD6iJi7n459TLcN7d9oC9zuhdL1ik",
  "key25": "sAcrwUuP2gtvvsZFtJ1wHfiUSNMJu5GF9Z1JWLp6WKT1yUr6PSP2DYCHrqZPLB3GKzrS3UjbYwUdtypCDYkNFye",
  "key26": "3rMLSychZZfY6agC2apKVP6JjhfBRJZURvgink5RVPB6UCjvXrARS2RL2a8t6iueetF1YEekVzesrNL2KSueUfxs",
  "key27": "3FKwASS8hbW5Rr956qyJEwUd4xvJvYCbcDJzGUJ59eZtBo7s2vRyj492Ad5x9gcdWWTsjKBcx9eEdi2Uz1m5GmSp",
  "key28": "5e1Coh8rq1uEYSEN3BXNfLiahLEV1FbjHQJ7gB1ftQyg99U6MBL9w8Ms8zjeTqckooGxFdUdzkRAE4jZeSMSHYMX",
  "key29": "5t2n29qBcA1kR5A22Jnw9ThoKjDMRhUoVVigmApcvA3EDU1yqfTxQ71foVUepuFXoYHPL6zirFFSpZtNHfcTfF25",
  "key30": "osH8NpPiRDv9MKFX1KhAhwj9mhSKup7eLixb8typUHowjb4xQ7vmDJDyy454rdCiSHvqzXHGSE7RE27xcRYcLed",
  "key31": "feUy58HkPoPrAa4YGv7T9R4TnCcHv2pYtrdjkgECcSYfGSMdPH3gzyjopTxuPzEPDGAXWDo6HN9KDRBvJeMAePJ",
  "key32": "3ZF1t2JfgRyADdTf6QbvaLyzAAxbS89pbpo7VhELbNHz97onZGNeMA7G4qz3bfnsuooy9r3zRXSzSQwzMrxtg99R",
  "key33": "G71XNoUyanh6hQxWTT84JFGTVqx6cbbP3x8JkHtjuvdYFSasmX2A7qYAw5GJUAfUHGMCdkjEPSg5q7B5VL8pxUw",
  "key34": "5wVuXk1JrDwrSEhCf8vt8NcZPZ31NLozxV13fDe6APwXT5RvqWgHCSmcvXi1ERRGjQvYKGRDv7sLwcLhN6JX1qX5",
  "key35": "2xuxFeyLNJDBbhFC6fLZ8hqNSyLxkxos5TtEMunQHw1z4RHN7aV8ChEX54RkvYgv3A5WMn7dcr1e5PFGwXrKhgcJ",
  "key36": "5zBLGp5Uw2821kgdAQXtRPkaaS2VrrxYKmnj7LdXzBnPWUXQFz11Y1C77N5AHUYvT7urUJwE3rtb4qwiHTkY5nw8",
  "key37": "3J5XBGC5DBztfqyDksihsuQy3mVDqsdqRrM5SzwmKzWchW3epmbwanbirATvaVCss5Mc7V2yYisYP2dQ1HN9JoDP",
  "key38": "5sNW93zMfyGEnqXMgGvMiMU4kzhXbR1AoJp7Bf3VnQd2QnMgTbQZgb3rt5CRWY1eGEzJrW1WkvTGKdon2kBcNoJT",
  "key39": "4VEGCTPRhkr5APVtTVPp2hahskgbW7UQ4w3ydLbo7af1nb52oMbRjzoaZEeKPDgBGsC5bix332W5W1UbgkPZ7PBf",
  "key40": "47TV8ghfP9kHrj7bRXMmz49zoiMXznMDGXUPD922ErrJd4hvWyrvUyf2gsq3sFLZrfW3bpK3qdHqmPuLLdD4dgFN",
  "key41": "5Le4p2MjSMzzNPiicpu9KTvcaJeKeQKohUoAHbvhWrjRUjrzaz4yHb68NXcaNE9yCu5CktNYZqCjfDkctjpLJtkr",
  "key42": "3eNqh5NMbz2B2ZkBCtUDqQJDxbzD5Hfp68Wmiq4x7Tjv3d3wY9xP11V67GfTuG5BuLwWZkZVyqWKYvGRY3vgsgYD",
  "key43": "3o5x4b9Yg1K6rnYtJrYGf8pmsBYYvDJfSmcqxumZJcAREwJ9svHeBcivrhi41oHKPGkCtqb9HCo5opXdfMQA7VsV",
  "key44": "53JSJcefkpWGoVzHe2i1hcnUazuhqEGmar22R48Cw7DreRKDqqGxkKG8ardc5JRBhsBxGfqypvvPH7ZRCt1nZFxD",
  "key45": "5ZVzhAVwus2JuM17zDHGYMnf7Uy6R6Vdf8E1eD9iMUESHndQWC3muj8NLHik5FVix6rQ4LbnftCgttykLu9RvMcb",
  "key46": "4yczepV6qqYit6de9cbhEfGccmSq4txtHBvUm4GidosQgd9md2dkFJiQsdsojWr9826YxGnncrcAQDYrQHUz1hdh",
  "key47": "5JftAgzppPkehdsVVQJJbpddUjRrXV4adECwnS8C2hAzBuyP4bW4c97t8HLr9aAGHWwuBXtSocc749FxL27BTZzv",
  "key48": "55kNweEjfk8X4SqZxFafkDZSBE7mTHuxb3j3N8AoyQiyQu9XZceEDkt5FyTsuPTqTWWbwamqqTUEp1y2qELZY2SQ"
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
