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
    "4FwW3aVdJFNtc1Tz6XJYSQceE8B6AUwPgPcW5un1WQd1hVhxBy6kEvBZUQLvG9RG5WD7V7WiSeLNN11VkvwcE5Xh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uzJTtHHXmh1bTqw41ikNa7LFhYGoSzW44iTE6sJ97sKre126nqx7iNrFaizmPEvBYaoqM5MFrZiTYg2uKfq3X8j",
  "key1": "5NPbsWSwB1XE1rDaF7Ujg7StvTk6uLC4FduGUyuHJ67oxXdBjSkAp32gj8tdbtVwq5nBGFnhHpKv1jWfhkzW1KSH",
  "key2": "P6XkiLp8NAw69zBZrDBuqc8f5z9WxSyznbdHXZ8nujUBtTvrhyghMuhUGf5J7MKsPS4vJapUtdyvmxYbz1vR5ZC",
  "key3": "3rDGVWvPRnFXHbwJQpA4LhGWJaw8asZXhr5gwEtcWf6y6nVFYLSrntubEMB2pQGeZEVjnFo5tBXitHWhFAvnpiSJ",
  "key4": "2wWXkPW51gM4ehthScrtqP4Gp35G5woiNay4UxU9x4r6WyfkV55XJJDFUHwBhcMP8xqAbkg515yQE7c1PVHwNWj7",
  "key5": "2DXbkAoMmgCLjKToTARydfmHNq7v2HmuSz6j6eC2zejkTkpTo9DjtqbHADivymTKz1nPcJzKsXX8pjU8vRyJMGEd",
  "key6": "44FrCufGgBBYQNgMR1YLd2BkvSrDLz8M1modig62VXAkN6jCt9bmS92gZ8h3xJCCG4qzSqs3G6UVhBvYgXM8bEgb",
  "key7": "XvMJhmVwyzRXQbtrg3jLHNqKch5JLTZxu2EfWDcLB5PsNSHZ44BPYFK1eezsRU6yZQJfppigyB8jo75pGvA6HUQ",
  "key8": "kj8ZoaZTPc2grtqSgdVwYTkff87Espu4mVuBnJENqBey1LGaqQ3iX7okEQm8Luw5Uyx2jv6skujk8JCQ6qkugQ1",
  "key9": "2bXtRYKkNjTAnDn9Gh4dYP72PXzBtSKXPCzfnp174Kih1ufiM5nquvLmutHt3dhF2WUzPZa7gnJtZAW9hMyvBLbY",
  "key10": "2Noo1EXkMu8doHEX4QnsTp5y11ZCEzwwb6Z3sCijDc6jdaEtBBJtSD5E3UiQyGWizg3pwAnDLTzUbATBWXjnZRyw",
  "key11": "44aK9NabwSKfZknkYwynBSWNfoRw1nprDgEkx3QHczANYGLh5nWXieyQUy43CaWUtvT7ygBiuiVVUf4e4c22qzZ5",
  "key12": "4oLXKFCk57Gc6RVvyepfDRuAzVVhgcMEg455u2x7n1YJBe8mDzrMivvNSRkzqMgKZfHsHEp9ED5j932oPUeAEm9R",
  "key13": "42hNggS9cgDTaKSv192gm4JDX3oYDzeAHkcGXkSCBwCZa9Wqm8o8oL8JX1X7vWy8PSFdTmDUiqYqLPJ5Fj5EVpPN",
  "key14": "4ogEub8KpFq19K6uB3BBJmWjqDBMrJ8BbXDoUqWM4vjiiNWwv86zsxuCp8Nk17ohCzFh8LP6bB2hsEDjYrTFgVxG",
  "key15": "4mggfZex11aDiYR8nztTdgV6xJcCvZHPByD3hWRfac17CPbDNq6BnRdK9uNpGs3mbN6kt1TRQk6K9uQisMLHk8FF",
  "key16": "3qX8wTUooRGEQB2sNVZTogTWpCnPTNtFkARLhj8eKRpqJFK2V7P3dF8TfCqmwxLp8L4Lzr5cDcJcEhvz8afFa762",
  "key17": "BAVEag9PJhUJjgkttVxiuJE2AUnR71bhszKUxZyFqpoZQcVzzQPrXXA4QaJCWC5v5xyLVLJpdcVPyzqRLMRcmhF",
  "key18": "5G6cZd2Tc1mHod4yDwuSY8fNYRuzXUuD791cECmsSKfzbU9WSWQDwFESGCxjNarnofETo2h3kCgpQVkocUc5brrD",
  "key19": "2KH37TJ6CfUmwr7eP3K5L71N2wNaDx6PjSSXMxZSStMVm2Jhx2JKYZy9pVwLJNwSrHuLUs3KFhs5S1Gwixxbnp1N",
  "key20": "565HjvQm7gmUqhAsgqRMNQKMbo8uopyhZnWqHtwGmRoxZW8ZxkJW8cZpPASKeTEJuAtXW8RVYnSmhCALNquFHMRq",
  "key21": "53hqpFugLqZCAVUt9pWSKAFqdXrDq3fBpmFhPdxZvtfMqE6BPzwwzkoZM65TTf6zBN2XMty5g9xibaQuSz6iEiU1",
  "key22": "2mJ9GUscinJ3a9NtkA4SsYW2qyFF5XDSmCBFCAB7c5s6JRZCRZV49oAcywKhHVH7D19gq8MihSNnsShNGPziAj5e",
  "key23": "2ipMTcXSP7MLasRQmenvcTNPqZ3uJMHSVFE76YU683UfKQe7iyuzwKyNapVFSkNtkFCLAA344eJrr1LJnsXcECxQ",
  "key24": "2At5sgMGEyufEdtcuFfD6MFpdKTLTsn874gXu81i9wgL3hhBFutiGEZ4UPoqDyyUriP6Nph9wBEbfeEFkErNsqwR",
  "key25": "31nCKM8BZYEWGbeyRfUcFysdAZK1UMrFjWpZo5QY5kQkgpXd5brKn1uBFvzghEzp2Cpr2WsNNLAqv1jvRQ8mmhBo",
  "key26": "319puAV83aX6hJUoHkbBfwE4JpowTS4oe5zjHgFmpWnUUQkP62jS6H51d8HEWMVDdUPxRSrbcXTv63HYqUMkwXam",
  "key27": "29ScZRBi68gasEGmrQVGK3Bv5nMuLsDShbUBrJHR6pCvvB73ZmuiCcEvNNYt4PzAsrXxRhPsAXzYDjhKoTx7YfnB",
  "key28": "56pri8T19bbT9ssCNd64wuaqsEYdq8m7Y24VbLLT89hnVe1drdMDPzPqhWJRzjcQZ4hhoBamjkNt3rAGxj9gosFy",
  "key29": "2S5EpWHrbudADY4t1vpUvP5eM95spJFUezNmqr98SnfbWhTUC2QUgZHhbkTVJLp7omMuHsY3Npmf21xQwM1R6XtM",
  "key30": "MHn5trnEKh2eQ8PpB64s6Rut1KhRNGRAv2Kaa4npTWevc4VbsnUGorJv9RcrFMbRbFQFpxMg9rZSgoFFtRjq4h2",
  "key31": "5BPaxeoLtnG7hGhAhbaKPfpjfXVPnSE2gG6WSyemRwDGi54xxfQWZdGz8E21NNwE9Aq4Dh4mysQS1vDG713bvyfz",
  "key32": "4T8WvaAdtY6juZu6sqtAEm84hB8CBcvGAqwbXsoyRWDrrd4HKW3evmgFC9VcqNia4kw6fYikQeb4DC4WYZCQEtXj",
  "key33": "2Usn1RwuSb85UGWcY4fQhyr7BCgPb7xpjXkdbkYAZ5rBfWTkJjZmK1Z1S2wwsYrqjrn6gQ8ZM6a6PRKa6n7Ah39C",
  "key34": "5wDXKgUBUigHq9VyhBPsuZRt3XuCBH3bRMAanP2CnqwwmBimEmeMXqagEan42ZPn9r6g2acrcMYK2AcWaXgZaEg7",
  "key35": "5aFTPbaXNg7sKnSo3hcwTr3PEDs3uSU2WoNGEs8ZgWa38qc1jCurLQKHhXrv2vYwG8iimdyH2DWjRkFxqhgStrBm",
  "key36": "66tB3NxAfGwbufEwME3UnYGPZpahJUBmj86KTCMeaXdiGQrH9HPu3SDzTPm4mi5p75nmpuppdfizEtQQnfsohVm",
  "key37": "2yL1qQxK4AYweHNQaXUZ26RCARbiDMCcmZj6pSJLahPDBDdB57rSEJnd1Sj3B2GysfiouTkvUT6Nwtavt5aiQxEB",
  "key38": "nqSpZ1rKyVeTM9UWTJKjhZgxeSFtyS46g5NfGEc4sFdgh6WrkhSxQU2rNMtsj6HX23Q853EY5Kmrcrvf6TksHNK",
  "key39": "3vp2cvUuyRahmWiKpdtLDLF9wwbEoJcR7oUCsVWXEiueRgVwdBz48QCQs7DywUU1ubtUfRsPhTBJkaATEuEUrix5",
  "key40": "5Pp4CRtHFMk3q1YJN4oKpYptK2xXNJqo2LzL8XcrVuW2UsMv9xfgZgr7JjncCa3J5qRQac8DqGVt4fUp1APwYvV4",
  "key41": "552ZLY8267tG8ubNVVBXXgxVVo2qL9j2Fi7eviAkSsds3cUQ1KprAaZ4mvebmyMZP2YcGUPeoLZ8WzKtj6YGo7Y"
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
