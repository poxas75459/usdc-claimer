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
    "5xMUVL2vQq1huGh744eTTqAMmKD1RinbrGGQ2RN6vKXiDGttrAweFXcnmGYZ89mt5XLsX2zrQuACz7PETCe6UobN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ivQ7gcEr5ENjLyGGiCq8cppnPnyR82nVDZXAKqbBi4hy5dNX4m13sjwNZEPHCcVjc5FQYSsao5YsgqipXuTQsyQ",
  "key1": "3iZJ1fa4n4E9j41CWBsKUETFAJ2SzWnup1K88yziArJyhreJnkYJc4JXcMzNmrhVvfECLb1BvKFCAvZkUQJme5pD",
  "key2": "3iTKbfFgqSD3ncWe52YHbLp1vWmisBC81BMZMie9nt9k1yucGJJi1YtYPkaNReJ6nwinEa1JzVUtanrqW6tdvby2",
  "key3": "5arikXn8v3Lqoy2zx2z44goxaDugY8BwHaCs1jqc3Mz3rpNPJzVMTT1rSH2aVrJLpaxxaRm2GtQXSVouXyWk5aRV",
  "key4": "yAu5T8mNDurT5RJtnLX84ZswqT8WJbgj6fSvfSQTSvwniNsrbzx6BMg36rHCYggDEcLS9STfRdzQzYDVdqCC1m6",
  "key5": "43sygMaynhRHN5CFgQNpEiRrDgPQ8jKG6ki577dxuBtT8m62udENX2HvEXekQ4vkNEUu6QtUotJUbNbJuu6Gmr9j",
  "key6": "4VXxDQvaqorLUMmeiw6UBGTBjLKtCpgc3onKHtgBd9kMsRmqbELQ74RGcbzSFvda6FV3ZAfasYPifnvvmXnH9aoG",
  "key7": "2LBBHssPGR2v9aKJbXnkcxVTbPZeztMDTn1cRHc16Uahe67ZSXH26GVmcq671Qfj7KoWmv6P4E5YupscFrtoThYA",
  "key8": "8gqowSD1R44jrBApDnefNLVFjCRGgNWqPBbZkhVeqFaRjAmkRF8qS2sY8ZfDirHjJV8AtBc1phS4GiupWC4LApD",
  "key9": "2TBD3E9vE2kY7V2MTg8jnn88mas4ui95bxDdntMTKcgk64wLYGiUg5xYePm5vKdhpvqiTc7WQWRtaerkqQ7DsHWt",
  "key10": "638c1qmrd5tKPS39D8k6uCdLN8Lv7nhb6n1XvQerVWcK6M8DCdsNU6hjCE96kFxkHgJPXd8GHncJGNx598UU8ebe",
  "key11": "2QDHqZ7PETCxNXejzdYk8RLuEyK3VYBfLjfPbSyhY7dBmw3jGrzzob9A4SGL891AVY2kruBfHRX747BL2bvsTyPm",
  "key12": "2JNqFsbxfWC1a3vMtcCrnvrHhvptRbsYnKXvWjeScuDxfJyCoJgiHkXJa2ipkQmqYBZyTAWMaUFBAFpRMgiD3JPR",
  "key13": "55Sg3Ckx926ZPfdqLbCivHCXxpagtLy1iWDL6Y1J9tB2pmCWLzRRiSs3rQgkzxjwKub9u55bN7mekLM9tacpf9Vf",
  "key14": "daFhP6gkhLe8KQK5jw5GJmY7CCRPZ9rvoxRQ1WBfEiv4MPCu1sHJjdhjG78s9iGWpPVpSnvgVJthtHMn1qjeht6",
  "key15": "43k6vqrrgRnkhDRppQyJ2N17NynsxGzPeduGpbskm1yQkDHhYbNTQKrpnxL4ESt7YSTw38Gf72gUVBUobw5TW6sS",
  "key16": "4btZry5PjfRKUPYiUF3qmKY72vSLGyz6qmCBBZd5wS2SxM15DXHw3XsRBvdYmD9wyZEPzD23YJ2L3rjknGZdhTPw",
  "key17": "FnrraK21onqiTDHBp4isnk7XCX5ydRQqiUAZFiYXRr82eN6qX1PpRFoKD7VG1ew7UcKhSwTT9dGEmVyFeXPPW7x",
  "key18": "3B19c1Q9q8JRUnfHqfzwPUvLidsPirH8injrxg2jcLhoTjwQLpZcghDcMDb9pNBF9WVpKAzqUKEgkD7yewd48ptm",
  "key19": "28fTTvrfHpEugCtn4yg7AQehiEziB17QkyskE8SUXV3uAFPvuf4PEoZKkJJ36kGVu7ago57XPnmnJCtokdcuLprY",
  "key20": "2wYioQ38eyFSJc2wnEVDi3vo5owRo7GsWzxaN9pT1HWDbpwTtQShtJdqZy3jaKoGBdLKhBqKp1ZKs53CzsTRqyW3",
  "key21": "Bbh4LRose3osf2wkFvY1iv6zsEpNThoj47NbyDzaj6fELG8AsDEvTNGP2LLiafhHacGb3xsYH1XvnPWMwwCvw44",
  "key22": "4vMcYnpydFFW4TZr8ZRpZcQj434eC1MN9BHBjASrzbWorTVQLnp5j9XmbCw4vti8pdZqabNTEQvZCHvCHxnpXuLZ",
  "key23": "4fZXRaYFyZLmewsZyjgHj6UYgKcj4W1mxx9bQp1bXBAwEMySqAd3aMr34iXQzfR4gEFx24ZEDX9MhQP2Rh8EjHfg",
  "key24": "4WA2SeoNUfGNu4M4bbqkxyxgwoVymKeRkVSN441eMV3nxNJrn671VENe1x1aedjaiNbWLPtAivhwjynqUHnL91mS",
  "key25": "5vh5ojjukj1FY3zAXxzdxQ9jTTwDD1NUqh9RcdJdL1C1UJvwocJa6ueGYTRq6kQhEhnL39aA8awFAGwQxa6uRpwv",
  "key26": "669shvBFmC7QT3xSA1zzHAZiHJPqwq4gmUVYK1KNVP9vsuV9majJgarsGEX6Sinafqv9FDXx3XkycmCQ47f7gFMX",
  "key27": "31iHYCyFr9Zxut1bDzBRBZmRkVZZMpNyjXGd3FgzGJ8EkxRwjFXiA56ipbrKYhXxwHgU7wXAk4JHhVSN2CM82riz",
  "key28": "4UJsa5dcB6QoeXNWqWdgC3TW9yGBViAbL3EaQhxMrwdYN8yH4WfpbW5seaQLkoYwuKAbFck1z37bnPL8BWeUSzZd",
  "key29": "5E91bfb1wrYVFMAvkypJL5CWE6WMhoULk4uiuJNAijanvwuvttBJr6JNJZzN1nB9DuFGFCQtqcLXYTZP8dwgr8p4",
  "key30": "5tNw5FVCYgzR2Xrkm5SFrMKndDnZcZGrr32UTyDifTJRw9ijmach6T2QVyn2d5wXNizR5Zyw8KD6WSHqL4r4kKFm",
  "key31": "66kJB52KrkEzJWwBDM15NFQsgpk19JF5YqPkifYDEAhYgtRuY43Z89FvCiWMW8WbMrcEufEn8WwGVoTKpePe9HCP",
  "key32": "6peGh1NNxkfx4kKeMUSy4zMuq6jf4hqv28zBgK3uGX4bkKTbXbibHoc3a7uAZzEaWSkpDSEYamVEt7UzsUvGAj2",
  "key33": "4jKKpYwFrhPMhxxBrxCy6QyJ85T12VKubDD7GvBMrWqQq8v9NZrf5GRKmEh1g7B5G6DDQ6NWne53RCrbFMCpF1Lj",
  "key34": "3uiK3uTv7kggm8LfBJupGmJJEVdAUmQ3AYACcSCiZScYSiYgoUspSUXmW7CxTFnp2CQPJzh47uudMumERKp9QRkM",
  "key35": "5C2gDzkauYbE2rgrRutkpG5vaV8xg7xk9SjKG1rdLC13jJyPZQeS12UpPhUgBR14VVfB1SkHseGjQdk8QinKhPvj",
  "key36": "4EzuS4Y1aRzNgyiJs6DTRy8tXpM9YSqY5HUBVNy9Yk6hyrfjNnRjyVAMGFG6VN4QZF691LVpdagi5yvr8tUhFuB8",
  "key37": "42ALdjexQLFetCRgEUJSjwTprzaNRRgREqqNFTVEZPLAYQxoHypiTYfC9um1ezkPVUDcNXhLHDy7o9jZnSzs4Jpc",
  "key38": "5NiwifzguEe4cam79xBFNh5uFYLTjC1XGNpzFLNaCjKSuapLUAJc4gEMfHuozueGR8gMAMg56KSFL6GepJdijuvV",
  "key39": "3aK8NiPeL3K1iobiGAQTw9dbtcuRQ7JpyhQr28q2m3qYACksiX1ng4EKyeSJsPJqHMDmygxJWB8fJySTQGh8LBZa",
  "key40": "3YevdhVxhdCsAwEgvT7dg79trkrNDNmUEmzsZcR2NPhmaPUSm2vkLvBfv1cgPCndoDZoidX2DKNghfQoz8nGqo81"
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
