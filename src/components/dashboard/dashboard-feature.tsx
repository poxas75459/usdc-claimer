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
    "25jxiyZ3XQEHvX7JPpaswoReAwtsCaqzaLixzp2jT7c4E3J7ueRYxtmZXkr41qWfYbKjJVN3p4QdXnofc2RncAM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JwbJc6joMHWcVckN7XNo9PGfSF3rB73d8REzkiKV5BgmZ2za1uW415PnRWZLxpTE8bb6YJCxtpxEiJ9u2K2Pp1u",
  "key1": "2p8bzNt1k4cospnc8p4KiW1unE1nUQoWnFwm9KDbdB6hq4pWhYZQLagWzYRdzg1bGkshS4Pp5EGEkaotho3yiKNX",
  "key2": "2iP24N8mAEE8nzDWXcszVQVRYXr9mtor3zJSbc8cBRMtbshU2NWPrmuBGckss6hstdGb8JLCmPW4KiWL6u4M9fhb",
  "key3": "5wTrn3sdqKPuQSSxJtdyGjf7YiADAYod1niZZNXn5TkngWLWBMqwmvfbENLF73FfinTMiLTAtTzU64dN8L3tLLzo",
  "key4": "26i1YurmXjmi51AydYcD38fA5MtFbBDhkYGYk8fyEZwD5ZyzC5SDaSVCPsYM2YEsXNEe3WfBsN9MDr4on1vopKHj",
  "key5": "4cD7XHE4JMKztNCXuZzNu6H67Q5CcB6UvNvencqtTTR5Z4vnSmbEboDRvY8Aa8Uc4A4sVJMRaTWXHRZP8KPvM4iL",
  "key6": "44m3ZSi2ceZWWZyuiBMJy9hhJCjS8zpWfzGjuayKZJHsqFaFc4a9KFpwHdQxfnJREoNetYrUvgw5a2yByQDystK",
  "key7": "2G5J2XmUAKcaLu4udUMjPKhuGLWXMS73aBW8TeopHnY6w535PQTBf74BCeUV5hqTphFqjmFRSMfbYH4Baf85Wve6",
  "key8": "2hLsmvmXbKZLPKtkG7Kar3dxQGUFXaB6w61G4eqk731tdqyFboa22HshvP82cCyVUUDyGjXVEzEuhyhzM61etefm",
  "key9": "63177x9sirkq3mRp5tTnHAz4E2nNHCLND4xAf8mkpnUZQVJzrs6hQAtKyFjcHDxW3mdBYFVzpmn8S2KS9wmW5fKF",
  "key10": "5qz9NaMjSUPL6TKF5j2vKi7YqNGjALxnEVmB1uXYC8qEBZUPVLjB4LPKxJWTTyQ2U2rtXL25tQzt6st2PKXR3WQo",
  "key11": "46obkCEWW6xFqHGVR6HXyeyh5w6aHLdpsHsaqu9Rb3qhu8tL7XfwC9YzA9v61hBuSpohanWY6ZRisvwLNbwtFG9E",
  "key12": "64T8rUfzzFzvRJ4wsCjfnHepRfpc6jxNDDYtt3UfYbjgGbnrguMMV29aybLuyz9cvJ6rkbwzSEhKMorzTF2hiBSd",
  "key13": "2DKGn9nXnaUnzvjQcTNP3eSoPQFHqy5qcARWVPJgH1EXBsE2oon75y2JG6LUg97RT2cFA45nzncg7dpwrwFnDnv",
  "key14": "APSMrSu5YQ3nSriK2onw634eieoyAeQbaUixdU3pEx7wSCNTogBo2a133fVhQmEgBxj1rgvVSTSm1ofzB7HGkGm",
  "key15": "2AgbVLPEoSB5jP4bdvd9aMMBNebPQhhCJh6gmaT5jobG3kpFfMiem5QeygXToc5pAEtx972AprDicWbabrhevZD6",
  "key16": "2PNuXKuMxQMLAxQeZqNygkP2TK9kAABEmMf4o3oDTPYLVapstvxMrfG8R9jeFsCxPC9pUnFnnByYKw7GJnRNX8e7",
  "key17": "2U5PiTTr53uPfYPQA4euDDyCw9Vk1FSSN4GztpzMFLjZRCLmF4cVP8bEHmYpwB2Jc49o4KK6dna657NFbHYT3Bni",
  "key18": "2AtUdAJ7dwZ1sY39t8zHnYs9MFNMJG2RfvdzKNiwCfEPXDMBriK3c9Y6Qqu7iscpvt9ptdAZioRhuX7zukakwTR7",
  "key19": "294xcVWjG4caUqgq5m6y5amheUEuzEC7aRCDJUr61QizWeCSZzMRPYGV6pVJEhEFQamxzfV2ruSmL7zyQzqsMmQD",
  "key20": "KqwUUPWBYrAMaG33odiCy8z3Yt2rSSxd2pZJXiZ4zRkSXkrFs5fAU3cdf8SSbxVmsqbuiXRkUjzWUYhk2DWxiCP",
  "key21": "5aT7cssDXusU8hMqTH3EugX11BFS41KZQ4w1GuHLdV5pM4wwtyMBYi6TZf6KPPF5eMZdeDzLvk2ddHq6vm42q8BV",
  "key22": "NVRr9AHHFvCK6tYERgqJYQHKrbD1qcPicxitEwLdCio9kL1zyaLsGbKvEg6bKGtZ7Ji7N1iQsu68VFiDwoiT4Fu",
  "key23": "39PSkEpBqdueoafzZjvubR834iRkuPp21kMdAp9juYULDsPaPzTiY1zqA6VxVd8EKVo7uLRMpaZH7aUtMZy6v5HZ",
  "key24": "4WWRTpMR1iSzZgh5ejtw5AjyBG8KfvytNJhW8oPERGh2gZWHaGu6cREzecJYEaRYZkYPJk9maiV74S1UovkSRpXB",
  "key25": "4eqAh5Msb398F2n4mHbc6x4NkAYxVH1kqkYar8CaAsYW7QxNMh5ZxvMvyz8D1sBmb42VNib6ZR5iNDnmfp6Ro1Bn",
  "key26": "51C4ev4iVJRkPcaHBJLpHspcqqDPaXprWSNg958F8RobnYLrvySPT5egXaui4H9pmPqMuZThUt3xJGPBe4Q4o6c2",
  "key27": "nqK1VVnEV1eWYH1nDXmmdViowZxiPWn1gqTEockjgkfjm8uuBBsouVtP2xLiU1SYFcBMUniitaXzVZC1tZKatnc",
  "key28": "4Tg8baYDAb6kMyNemCrdR9cUYV5rdiYyj2WRAQmQWMps9L8GWQVdmaZKSKbK299E8JZVwSS3Dn66WvMmcFTv74Ag",
  "key29": "4af9ai5t5zT4gLEqa2fc7jDLKRoWJbGJtvQcWaMgz57YWwendysc31UGs6TDKLX1b39EfZjNDFGTAM1ENi47CXE8",
  "key30": "5dDbV3PbLo8AmvR5NpeDdffyuzvFWP4jFFoTcM5iFVqyVZzsj7xkEwDVsDfMXjiRLGGqzj8xg3w3RUjVHy5esTqB",
  "key31": "3rxNMygwTQx9C1zepDnKsc3sekK1ToQxqyhWfFvgWBwvrGZPvXhcitVkLsPibir5FmsxwsKbf44gmdyH4WbBFxZf",
  "key32": "5jUCbadEoLm7G6Qv7KxVVLvkHtAKUziB7hhDdQNSc3f8hf1jtqRrEf2EGeaiNpG7HUSHPciWaq6VP6Nbs2Mmoa43",
  "key33": "4KSu1WoX9cUeu7W1kHZdf8BJ3UdhKA6qwmaYzgRa3xt9kDEbgN9qmc75Z31TshrGmfJyWryX2LGxjVQMV3XCwjbW",
  "key34": "1iRbaNFmwMAcpAXR1ZkvfDuNLcAbz8PPAAj6HNQhFthAhS7AVdF3NXnN9L9adyFxjvfW5rN5o46ABsE3RHBii9D",
  "key35": "3kiBZ14m7czXjZFKxDMu4x87FTnS4LtyJnSTvv2HfXiPws2L4rt8ZPhkJAdPuzxQQW5jnSXwqY4ZwFehcgdoBJv6",
  "key36": "uhYEyxb5q9mHvE8Ee6VBRb5uErqHCwmdUMARxDmkYGk9sqvjeKAn28LTXg4JurkxX8qH4XyvdgJE77vxS8etScy",
  "key37": "4AKa31veErkK3aZ4XTTrrqmJz7qujbEb1LtscjDJhXxqD5tSZkkvo478p6nxg1RtjYnDYf79NBuh7FG2pLZYP3bP",
  "key38": "5uLc5pAU7GnF7U8uz7k2f34NjCKXXRrFF8N9wwqckuj7sUhQhCKh8rhugkRyXAL7FTAPhphynnsK3K42fxqJsCj4",
  "key39": "5Pat5TKVs7A5YAT9ukwvh9fhQj69QKqEVBsWDtSUWDcYmgpYvEkvEX7bzw5iDtEj8XrA6n8VT8az133QBQpzHw7A",
  "key40": "2gUhWZi7iB8Ja3HNpkkfAaaLDiC3H6HwJjd2m6eYku32VfAPthbXAK2gRfkZHeBbtKGfRCQpR6pwsBoQEf5pYLaa",
  "key41": "5aj1YkDdfhe8E8DYCCmiw48PdzVrNTUm7kQbeTdEpxE3sq4oQPBLLL4NQ1W2UmqkXwa2FEASEpi9CiES1jgzPdE4",
  "key42": "3N1Ub7aecHytPMJwWDpCFJJ4P4n1gEUYHQ5KEiAs66xAwgnn3AeqsgP8ZPfK264YAJMajtGyVBbg4v2gBQZxdNby",
  "key43": "64pTCxe7jcmzBBAEENqQq9K167VUZea1kGP3kwYvcDqCU2kj7GHMCvMSwmg4edsjvBiwWiJgKzfxj5CTh3XJPmzh",
  "key44": "5hwQ73LbEefp2WkwUnBv5GfYC2SH9xucHNZAnYZsQnHhkYSUdhD8kudfoai2L2ppSHrGMYHHiVTn3TAzTpTEPvuG"
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
