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
    "2hQtR63axrZkaWBMpiwVaGU3Y52S3unzzWezpkYyBvarRxVPxtycATXdZrYwjcAVmKjq5Gg8mQdD9fzYb9YdWBoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MZZcCGvUrsdBTDBYGbJvmM3rQT8oeZPtwmc7cFuYsHVHwmDfhnzeWMRpBR36uF4NdbD1c7SFz2MWyPSUSJApPYN",
  "key1": "CT7azaygDqsNSm6EPzuKoj7JLipWb64gAenPEjZapJEkMyr7XrMZKgEgRu1ERgso6S3vPP5YTrRqoaw3f5uJ7H8",
  "key2": "62ubB5xP6NKxz2XxN5pMnJMjAbXzQMuuAjHkBiSaPaudqcQPoQjzjFFGnVLandnMB2ZrqdvmZCQaoiuqVVU1nLE6",
  "key3": "JiP2Exvcd39FbSGdzCKnqjBRFoWj6UgdRFSxsJ37p57yG86Av36FzYHDrAcCg94mTX1UiZpTZLtx52cAyALygiH",
  "key4": "4WGyfq6haVoN4NdDGao3LhrzYAiz9mKPmWnZQxs3Sz75VAaTteFmbvRhoQF3bcHVh2Rmy3xbSow7iZV6iHdE4tTH",
  "key5": "2qeM78cM2dK1QQz1cLRjVVQ6PSkpktRBvt5kiptqxFga2fMWbwr7iXwF95nbYP3PFqqjzZpkKb6kkRiQmXpLJEU3",
  "key6": "5dWDJJ2ySyrE1HVEG9CX9aSrF6gLfSHHgzMNqpcuJTKSTtyEyCw9kN5EDfw1MznvZyXgxKkoxyhyP8HAG7t3V117",
  "key7": "2SmU6gJ5t46uTbpTApUUS92JiA35hohvD3VRh4UZt878fbCLp43K9okQeNXohXYc9Fw7jw3AAhAr3cchLPVe5WAD",
  "key8": "aa3KaVbzfkWzrnVupsDRs8qhd67MSPjMAFky1BVdfbd7VhMLrBLUhCY9f7oxsG3R6WNMEbtYJ2cfiEeuZU3F8nA",
  "key9": "2kVd4o9PxropzaycaKVXj3qaJKV1Ya92yc1WH97joEk4yazUyLWcHKF5vyEYg5G1Xqg5MPBWUBv4oxYWCpE3BFHD",
  "key10": "2jVdqGitYyusCed5f4KoDCKFizb2WZ3hqq1yMMTbUZHZdAi6eDYf2ScW4awxnmUTrizizbR8we4kdCpGoTe6i53n",
  "key11": "UyaW3M5QeU3seE3MamMf9dE7tbvJkk58uAufMikd5WyfYgbiVHnGCF4JbFG1PrDEaGwDsCgVJqD4UcGfQngAP7X",
  "key12": "z9sxx6Xi1F7yLZksokPUbn2D4SyNnf5APjNDy1eAkPzKyqBzf61SCAMTmD1dVfnjuAtbhqutKTguTdV2fBETZQJ",
  "key13": "5r8HYEwNmfk6xS33XmJp89e2fNXY7P98iTEpxYVo5dzRvqUdo4cYpNPjHb9ZkYjqkdhkzAmcLyBEv2kUyh3MzVfC",
  "key14": "2G3J7nrkEEuQUbEJi5YhkyWpyAhKopSV3pDg2bLSkc8mN7fWpPBma582V7egTa8WTtP7DJnmWcunZPNFNXs8QEgB",
  "key15": "3ox6YTtwMnKgQWHwTtLQQuRAwtBXRKcMDeSqjCJCpntFGzFEW1xw4AaFpAHGsSyfPq7bKFqVUtEmtyXwY1N47Bwk",
  "key16": "5MLCKKHtjYrJ9KzJQKxAH98YXY4wqoHe5CouzbDivoP7Bkp6GsUZTwzKYZPD7iMHgqXwMLDhYFjpZiDugPqdcctN",
  "key17": "2CNe4f4v5CxqjEgPkFz7nbXi4dUfVmRzaKzZ971DibKAfco98f1rHELYojzYEWkiSVHp8wHESd7TaEZtzk4UMcGD",
  "key18": "2FDZzp1jMJUL1cm1jy3jj5WPaSoQSQdHegR4aeFv34cffgx92DMbJmTDNa2zRQmD9xQZ6SRNs58P24DAbkfuwzYw",
  "key19": "2uuPEM48bK9PW872PgBWgLKetpGVduPAGrJeQvrqdGk5E43mNGA4xMLJFFSPsBXeCEpC41M7r1cBAVmG6pFvQrFb",
  "key20": "2pBWTLWiJ5kNBQH9PzkmQkiWixcRTb3fMijQfSxoZktmz8yzEN8ZCuTj5ywjyMGdNT7FJtQEzhsmThhYxE9b21HR",
  "key21": "4HUD2ToXT6hjrzvfYcfyPXoLfauNxG2xDHuFQQcDJABjFJ4aNKARNff39GH5ijAvop3SsowEGkjoyhMMhpXXPFb2",
  "key22": "4fpySNt5rRKsMg4o9BAA3a5X4bXbwUYubhLv9phJxuXe8UV54GWypFW33XadK9NisEahdYu78yMAPY5xubacxZze",
  "key23": "63nyXPW2NZtLxc64JAZQtoHdsm1HQAs4qo5fWd5LaCubvVnBJ1kW55E6y8KNXWwprveeyYAMmDe2pGWGHTCbXtF8",
  "key24": "2jGUHBEMDacS1Mon5NJFzY98DcBMctM81ZUuQyQH4PrcEjnMmKDGubS9cYynW6rotdBbEFYR4rSRC4BfwB5aoZ1q",
  "key25": "38MbuAPTfrhAb8gZ9XrNdPRaznMGvraLWE6FBCcNrZQPWweLrR4kWeLS3JcndUNkQ1ShJYPL4FUBmYkKvndoEyJg",
  "key26": "4tWLsM8RkXSdxYSniqqdWABQEx9ZfooVj8wt8oBGvSBYADPV4T6HUTpfv7t9T4rvbDYDxqEVutFfKVp442WbLGuQ",
  "key27": "DnRUBg9UCdR2bTYfgboiw1WRBaawQ6JMQ3Yi3xiHKvpMp5TnqNU8MSmAXewyDeFqanjCCVa7vzq6JGuzD4ZwdEJ",
  "key28": "3VNG1Er7ACw2obG8zsrAeeGN3FH7Z5cV6YHJ1EVqmJpUAWsr5hJesmSYabKcVd8p7TrsDG1DCYX6o6rTDyuwDVZH",
  "key29": "nte6i9kk2wiQ6KTi2EQhYC4JM5iUQQRDYUckWirGTGnwMEbfCX7PgH8VbBhR4D2E8ac7Fj4VmXy18cDgGJgUrnb",
  "key30": "4eyTjWbVdUj4xL2ZzzQtULRy7xA7Mk8g2kFzmKTapnq5vnUzPUTKrdN9PvHHEcM6RUop3sYYZktgkE3oqbWHSPyb",
  "key31": "5hErKuN1UY79xFAc3vhWwhssTD931HpcRkE2pit4cHixFgtAwQRWTB8i9bpxQL64xvG5DZG8mA33tEN9D7bCutkR",
  "key32": "2o2s5wbmR7KRXxmhehfxKvUF9cjW3WWeWQaZpJFBaY4z5GTxNSb3qNSmpNDvyJXCn9tCqProKKUxT6PALfk3p2xJ",
  "key33": "49ovUE7LNDg4zziDLYKHXKCsN8NMYPYqu6DLE12kszMNXHFeWUTaMhCBKngseXv2c1cnfkd1pjy6LZUYNbrct9E4",
  "key34": "dVpLkWVUxvgaxVdx2yMKQyLDLP7xrSH3ayUtsQdAJoedJ3ZfCMEVm23UuqMSVwi19qBfdvi3sV95pqiJiKuEAX7",
  "key35": "4ZcBaEQwWJJVZNXM31doyTfo9t4yQL3EdAfFpP9yDWDoLzha2tokM2FMnZqywPeqRgBvW2ZxmvKSSKLgidPsDFHe",
  "key36": "HFrX1WL23TnbFNZHJpNtXMLKnvBsDeWUTBAgKZhL2qRpaC7wrGcu5q79LTQzN58HSQuSn9MWRWsnGDsZxaB3zXp",
  "key37": "3ZqqrGkNRFYo3zHwmJW6anyrrn7r2qyN2iqnB7sDSjzF5JMJGvpM8vadvoNUjepnBXLsHdyYSdmSzihg19gqLJKy",
  "key38": "UaqvDUPNJGx67X1C3Uvuf1HpbpoJgGQrApJpDjpQZXL4FAhcaAxZfy3dfmt2PAwPKDfTCXnFQcHDaQUK6Dxn7eS",
  "key39": "5SY1r2syDhcKLeZszougrH4MhA4uVzdXZshz22CoFZPKN3uL71cTMNcaSnGFMajDfjnRmYojKGnT2wSjAAaMXv6s",
  "key40": "3Mb1ow9ufPNrmLsCEmDhNrK1XEro9b5fQ8KVDH8C8GdvF1hq4LjBMUnaaxENKcbCBTQ9VaNWPZo3TcNo4U3CgGnw",
  "key41": "5TuqYzvV1ATgcmQkcyLAfMJQ13RxxnxnrUfp797tJyCKqfJcqcStnrRw9wXQs8RTFHdbHKMWxAo6mTq13BYcX1cn",
  "key42": "5a4ajQfXRw1BatqYUZoEVWYHwnt4c4Fxw7LJgLGEVkn3F2sziuendfNcek1gUqE84KWgE8XoNurSerN5rRFDYa2C",
  "key43": "4eUS6mESfxzmeeokJud38PKapZ2GTHM53nuU41PX6zCXvdjBq24FnxFP4CeWEt8vtocBGroqQc1XpkjQRBu662Hd",
  "key44": "24HWzC4TYq2nrUrTokJnqeJRsq3YPzSjHncfqvezgUa7BS8BNX49RrEw8sNUB18S1nzfPbW5whzjXeRHMLZBZkNr",
  "key45": "2V4u29BzEgJhTbZkdhG1J2Wr3nMHiQu6x79Pd3UKopTygT3ySdebdMbBgLXPLoZEtw68kTuxgKmD2QhzGkiHkxZJ"
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
