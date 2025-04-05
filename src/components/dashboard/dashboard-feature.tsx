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
    "2xUEnVhYikBPgKpXarnuf9DmeJcGYsDrYxxxhU5BZsA9rgf43fXBMfdBBk6Z2yafVSjXFNZTgp9PCAFQCANbpaS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n8tVmRKUoP4Msein8gw9CwcQUmgPMrx3rb6o8QVEfHJrTo9L96AjXM936nzhbZATKzM5CAT8tRg4NcC8Md6zQVB",
  "key1": "3LJDBT485jwCppwiK9nSVQ9c1oA6tFmFvWRfqe1CCxj1fGvYxHmHcZLwL8cf5Y73fahtnoWhA9VcXU45HQkyLMV",
  "key2": "BtEL3sejP8nkoKZTHwQHfnP18NCqR1g3K1GrDNeM2oqA2UaC6VoEfJsgpinuNyMHeNEeLXLKY98Q1Bd2v3UJchX",
  "key3": "4xmyo7qHWKGpMWk5Nu51i7jNhuokMiQ4o6FfQxqm1CyNyMdm3L6xEBrzvjHCH6UswqDsMGvDLNrNiaBcSh4Akvmf",
  "key4": "4amtxnEB2BpcLKFbEJ7WHJW5rgvNmtbg9GfTwaWSbF1xFuU2n9ysaapGRATdx6QJ8m8vdjCMbH5AAkCATxrzPptd",
  "key5": "3k2AUQiEfmvshk3CtPeCoHQXLZRJLYyfLmv8YNFC6jrPEaokXh3MfnNiiQa4MbwhJKhnJNBzqWDQartUzKtRncX4",
  "key6": "ZFtLorNbN7cEn1WjkPViiXwUC9edde3qZVgrs1MhmAzXMKCEMgm6eDvucvn7fHoVBD7vTpQCGnvxG1Ff2m8irqB",
  "key7": "5XH4QmyykpzqRQc4oLULQCNomsWjKEqxUtVxZx5rwESjgkvraCdqHLYEn61aytEcBRjLe1fYXVfcXbeRvZK4tVTw",
  "key8": "235Nrjp6cNfeGz9njztwifS9rdgEXTpvtweJSH358b178JTchFNh844cSHTRpXvbw5g4uSnuCGEbjy1JfpFef72T",
  "key9": "346ow6nK6xXn23Z3dzXS996Qc9BqvncyM8WWNLtNNE9W6vhJRYRth4zherMzFh4tX1od6qtPkyfW2FkB91EAvVaU",
  "key10": "67BvXd63h9mMTcYFS7XeZhNNjB8AuSkBFCqvfsNsznUU73RerbZC6Ak9b9uj2a1JiDcbGzN69w37bAHNPtdQe8gW",
  "key11": "DkSSHSYhVLkEXQeK7dF2Aj54JbPm8ScqeyLYaXi2ahC27DRofuTJhs3ZPBx34RyLnhjo5pUURsh5cCiCzfKPRPQ",
  "key12": "4Mr27hq6krNniZ8LiLR58ZyNN4kb67eexN1sqjuramUmLXFm7eDxVBjvo24mAfnbsYDBDsbG7XFQrj31dqVDwCPJ",
  "key13": "3wipwp1SmHBj2MAudWZt1RzhCHxanh35Aejukx9azqwg7xQZLhx4LhXHNKZum6uUNvGcbvjdLdGFLvq8o4RmcqDV",
  "key14": "48kT6uPdxugw94wG3fDo2213f3RTG5MJAdxBke2Z919Wt27KzGn6YmEEki1nyxjb5ZneTjhvmZRbk9H17z1zK9nJ",
  "key15": "3JDsZMoupJZG3zcTexPd894rrBqiRVtyjNLN4YtoeyXoo8hJE4NzJnnmzhgf35VgLxwiBb9FLLU3NJqv2cmsvbSW",
  "key16": "5L6bTxtqyhs7tvyscqBYNainnLV36wBzZCSRuHQUM9D63sxmebcsMeuxJYgYJh92HDuAnwkVDyXHPDwnL1orRUg9",
  "key17": "3FsnzbuE1cQ771sDoG4oWUDrxJ56oybMUKS61pwTbVeU5ijkN4up1NHwyUCHC4a2nzMBfhcrd78QwcgoBwumNaPa",
  "key18": "3giwjBztcT12Y2SykyTy5H7TtyG5ud2wrwD2fbD7gXmTSCGQn6ZTEj53MfKNpEQpQGegXh2uETu2GsJJ5cSH7TEM",
  "key19": "4hjp6w57TtcrJtfsU2f3YJ4vCrrLtASwzZ2Qc6jsz1sCvXNswgU1acSPsk89TwyedasCdjMZDBJHCkGAU3GNneuQ",
  "key20": "4BJ4vX1wYZevik5kuZ7BA6DbrqoX5DbmkQ8qGio3GwnB7rurUbQPBhRwz9JAYkvEQbcB9a6Y4WrwyKuQf9hhV2VX",
  "key21": "48VPYNxWpRUDwbb1MmHuYcSwpGL5JGzzsaCpzNf8jXHc2aYEvUHjhs5yxSDAqGDnZFMhhfePacSh9wrsvNvz1Ym7",
  "key22": "3L4tYeQ4GQctqxM12f2oXDv9JjS3kXnzUjTbpbpyW722HxoG9niNGt8rZAGaC1Z16NKDqcwU2PeFRqgaH4huUji3",
  "key23": "43KLDMP1h3xAR7ToapB1eydKJsFX46hdcsJuqVs8oVYZ7SQCsRhCMdh7xvUp28JhHKCSxPnaGr1qFLaohV7Jyb8n",
  "key24": "3nqCQWyKCNtbVW5Tbf3mXP2Etor98XheuywPg4PssNsM2agz8x7sMQpx2xxDwRgGo3RWmtx9BH9vWA1ZG738MszG",
  "key25": "5QTRZvA3LKMAa2cujoeo46VekJ28UkDxjSt7FHo7keL25pCttGUQmB37fcfbpUcPPRYYXKY71VXszPoXthUvhCet",
  "key26": "4MVagoC1QqXDoLzPp5GxUmpSTgeDKRuWLygLvjkFf99aGyyW2yuK8bMmhCUdirzcajLRZtYmzLZMonoSS2pfZv2n",
  "key27": "5YReDxk11AsDSmQDhYkzVW1nkr1KnhFc4SKyTTJD7PiXRTHdWA63NxtES5Vsz9TrARkdxsDMNFeFUrWeV7GFfLA7",
  "key28": "4boZ5htSyGkCWZuGDgq4NewvwS4xJzpmL3nev8JojUDjqWsvgCHqvkPheshmXKkMwz787hSecg3Gvq6nfhZm76ZR",
  "key29": "5kctfrNirtLgpCMXHFzFmtkrGT3wB6UExdhGWF7StwzcDHQ3EAPioxcdrHRL72tbttBdUQ8KZXrhJk7aiDnnRx2N",
  "key30": "62QkB7StDAng5XCyp2ZKpBzwSfEHHkhme3L8WJLqQofgpLSZRoqWUwBMxuFyzGYWxLDJAMEJA1bo8UDhx4S1mN23",
  "key31": "q54YNdJrJGfUUjSfFkH2pCMFsMCgBq5rnsoRicTzJuNSWee3NftFYLenzTCARx7iGCUu5r6duHNBnb1GyQc6cW6",
  "key32": "2bPFF7XMEXDqRP1xo8z8DtWWZeE5iUrrMCeu2zpJyUcwM1jxGDXPw63fUhUrTUooZ3F5BWrdQyj8eDbsin6dkZy5",
  "key33": "4xDrJJwVZdct1jpiYpWPutiZppd6Jm2x9SSVQjasJCEeAFYX3mxsFBoezDhtWiWG9n63QsvciEytR9b46c2PPF7H",
  "key34": "gYFhUqu5B4McbiFcnTjauqJmqrF9S6M6FXZrLVJJaj5MtxTwPmeJPC6md5tm5opX4VcLBwru99snQsd2HmFDkjR",
  "key35": "3QfhUTz2i6sAsTmJ7TnV3YbypGQbQkP9HfTkjpX9ZsPR5tAU9dYuy6A5Uk3oHVfEDtwt9XsNem3NoKjDYeRFCAGj",
  "key36": "3YrsrJSQnw8Rqs1EUuVKWnHMt1kYa9NnyTcnZ7Mf4Y7G4LUk19cA3SYM4dBJa4RqArqhLV9ziebWgV6MySgYPbyY",
  "key37": "3PKKxY7jg6DkqQRiaMnE9VqPEt3zEMzCRtmo4MCbsgjANwEo5LR7pGYWRjPsrkeJy4g3VYo9ccAnrar2fbRYxyR6",
  "key38": "Q2NN5aPWSC5bRZhdRKckgKMox4V7tVEJCnfG8XDH2jzBaqjrAGY3avnZenPGjKGRFkXNmsyG4hM1edmxeEDKrgU",
  "key39": "ATR6zydr4EnZJ5QKBgkRz5mPfTRinbiM57ynpAzeu44xQL8xzhL8i287BJmSn8bggsfaUnmALNR954HbwJAkBSM",
  "key40": "3eLynyF5rCZSCrucwu3JrZ4ULDpKnZThSMBSPQchNWbkwdf2GjvoFebzJMndgZUw9hN2m6mH9QTv1wZmx618aUad",
  "key41": "2gz8Xo3kukvjez4HJCjcepYGziYXnUjQZQewb4MgvP4boPbKmh5tXLQuc2ZiJG6Z3YVvuYhAyAa3QTvscEDvorvo",
  "key42": "4WCt1NggZa7rUidhkJWkdHv4gAN9DD9ATL5kNMYbxnF4f7ChKEj1GEKffr25tR6xXXPv2aUrua3rNA2zcbw7hVXS",
  "key43": "2jCtV7jdzR7CSNWH2FFEyaiycYCmQ7SnRC3RQ8Q9gaequ3x9eursaYKmN6aEjxPauN597SMDWfrwukbuf89km1aR",
  "key44": "3acNhrZM9JGc2SmKEeUGTdAfScpFErx8PNEZdHMZZJqNkEQXBveD6xJLLmN3T3HMayhg8FMcyK1L3qntdYnfY2RE",
  "key45": "2njn3F5twuGuRi56jzSE1Z67cZt5CZLsCxxNe3fPNnTWHBCu2QZiPmYajwPM68MaVMJiFunBGKxxo6nS2SjkLguK",
  "key46": "8vHg1bygBzMxgz93VPbQ2kDMZTwaZX4g3jUFexYaPeCEDufhBN3bLfRsFw3XoEi7jWj9CJ8JKjUFiKS38giK5gJ"
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
