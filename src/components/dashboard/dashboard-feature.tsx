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
    "65aqgwoLuWy2ER8btKX82bHf5eBZLJ6MU8GtiazGiUQNMRGMDZgtG5vhYRjwRBPCrtwL6KoRk29JJ84rhwcEUnc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41t6MxssNR3E4woqUJYD3fKMredPhe4HpJURmtPX3YGAmzr8uymE4fgGitMwxAy5DbyZBrDQSpgudQb8iXbjRCxw",
  "key1": "mdM6pDCk2k97QFfUvvNnF2q6289YkmjVQgenyhs1kBxLmTbM9JiaVhFjcFT8M4rzfKAPo3VFgKsf674WxYKFpRD",
  "key2": "4bG49q5bKUr2WE2Mib6VFr1y9N4FdokaNa87MawFmtpeCRFVn95bN4XKduqAtjbE7ABYv3M2Xj79VSUqeLe8Dn6z",
  "key3": "stmiLxj5MDcWp9MKafk3k8biUeWZ6fYyNHuxB2dmXaavkyS6TN78iTS1UVQSpY6MzASKMzw98vyMGLKLmSvNnze",
  "key4": "31oTe92tLV9fgggGQ5zkiCrc1yJkdLADqHacDKdMhSjL3dcN7co5BvtFuPtvNDZvLx8ZcxGTTDag7pbyLNG5vces",
  "key5": "4ySweciskXromLLoagCgsPevryFn9pGoX1AEHhcunBdC2ah5XJycBDx8rmHtuF14edRRRJB9jtJFJ1XvEFAKdC77",
  "key6": "33zft515NgxAdd2e4BdxTrjiJRVYp9HjVaD9c93DSqhTgkJxZvJ6zgYiFYnFKsCVzbs3cBoXjaSbnVZZPnFnF8vM",
  "key7": "CNbzunnP6hSBYtv42kf4JyMPoBoovLgKsfngTD3wUnSPGGM2KJafcyKmQUCb6UvqSHuMQzrH5JjxrGze5c37uVd",
  "key8": "4LWrgwwX6SKvfvfR7h4GhwReHhjAdGtwDNmHKVh5m2iwWBTQmR8PK2SNoLzh5pJN4njYgm8R59rXbodamoNMFTFQ",
  "key9": "GCZmYWfnXDKEGMpPh6gcxHkfqQbaSz4Kt3ETYPgrQHipXzakEYurpKwEXMKZ3NFrLkVtmZxmpH8B6cZYbGcHbQW",
  "key10": "2ndC751Wh4LXmPY3AwgTHddKvEG4T39Ppr5D3dVsxyUSgmYYR8Vk6ddaFbyecMtsef2Cdic83H362t5wgr2Aq3H5",
  "key11": "5NH1b9d9e7oHpMeDupBuQA5hphN5oNisUZSmoQNPASiHBE3PGbYNCQJXhtatwczAY4tVPx9DBrmLJc7NoWAXwy4S",
  "key12": "4AvA2uoCY2AEc2EvHVcV6cucpnhDxQWTpZvp6Tewb5tGppL7SeTrBeFr6bTRykD2zZGezepaFKBdydaV8w8yYKrw",
  "key13": "2C3kKUcDe2L4wH4LDHY5GtEL735DSZskbXPnGdGighfe5PNp7Qkk9VLf8QM3H2Cqq1cSoEMJy3aHdmipEkM3ASQR",
  "key14": "wZFc4i8WvjvZxgvGTbBH2t54aMiVAb1Za882aGRQqX9eweF4xQmTB1q4o7siLkyGquow34GZP43L3etSahiBQxr",
  "key15": "7kT2UHXkAPkCbVKYeXKbp8k7zZy2eXhYydTzxXG9guQdRF4r4Gsdhdzkczrbox4YiPCQ2bQGBnUYtd4PtbWhiDv",
  "key16": "5PCDy3TeKgfPibwY2yUfGWxQwnNVYmVyJq1d2LsN3SgmJerxNeSd4N5zvjbHayprse4Fn3AiSYZ1Yn7x49und7Ap",
  "key17": "3RxAhG8FDLQzL1F8T2uqA3WWHHgR6LYGfojGke5sG7dszpzqrKCqGAN44sreS4aTvQqbfCXdtPxStqhGoz74k8gs",
  "key18": "2dJWYU4eWEiRKsVC3VQ8cjb6K25LWyyN71iiwNGDDW1ASTjSK1ayHBXQvnR7t2MdRjT55e65GdXa3A1zvJBpaEup",
  "key19": "5in2A4U3wbB1TtNi4sePh5KLaJsoKZEAwNwLpxsKdyCyVUD8iCZpwvNJQ8uSSc5W7KWSYPyKhUzuPhrEFJb8cfmn",
  "key20": "3bmjSXQkg4Uz8XXfGtpZwJNrNJqJkFgp4SRyJ16DMjfkMbkvovJ3ydqnYVg2BVqajWzntxZVJD6qJHcNyxZqsktb",
  "key21": "4dHaEjMx4pFqyBi9aVCDjEcyTqPW3zEGZnzBWaFX3fyNrhapoS9B1WqBYmRjEeNQEkgkH9u6hjRAW2JBXPRS65v6",
  "key22": "4TZW8oQgYJXDPV1prgqK8dsPsq4MufbuNPoDeYuPs6aJiLZdjRRfshKahJt6BUV1XhSqBiTmcidry7THDZToexc8",
  "key23": "3HWUjT37xRFTcdVRpKmjuaysY25arEqKFAGJXi5Engj3JrAQYSfwFY2Hd7sdS17sgjLHYPisUdqi6HunVbtyHLVP",
  "key24": "35iD4iv47vF6dhNLchU8SuGkP2RQ1Rm6bcSxFa1Q1JivJbXtdeaVNdSjrobw4UbCAFJedRrNZbbnEU2QNKgxWLze",
  "key25": "2zDKknvZn1oSXPrSxnFN3bcqk15v4RzoZJvmCBkwqXjZ6hojKeeDqZYKSWDZ3V9q4S68FwUEyHhmeYVCQ8SXZZ1",
  "key26": "4oVgGMZ6orP7B6Lyw4akhehN62Rw4TcbeT7XfxCGpHaLBrJzksMqFYyzq5rNjCMYwKD3u5h87HweWArs85GHvaTn",
  "key27": "Ea2upPx5GUji4hF9u5L2cBT1JGXvPQMg7Skef2FktFT6vKuJsZiSNnF48Dx4gkWiC3nPmLK5yNv7da3n4LVpmYY",
  "key28": "38mtooRjPAzF8FpyQ5ZctoB9Cqe49ktGyjRTA79G6VEBF7ueZpH7T4X3JoN6onBbAvKWdirxtko3E7gjcsqbSsZL",
  "key29": "5CxG1GbHsu2gi6gupqRwbaj5CRvGnXZiByYpdLRwMG7GzPz1ws9PCRHKVga7XbSUERendNmKYxFPNbczdpe7ukpa",
  "key30": "6ziZCgjLLXLx1MG2nTURpfrwjauR7HNsWNVYFkMWTcFUkSkUyE2qBFCULwSWhJLwvLMSHz7QHR5KTaHKxuBLPBb",
  "key31": "5nRMaqboUqSoSKh7RAbm2Ycd2hZy44pGv5ap78gVQwaYA9jgK19R42VjjMpkeFL3SmyWADTyX558TapH6R8wG7gK",
  "key32": "9wLpMShh3Kdw6VYiNovEmsvpxdMekLZCQn2wAD13ZKq9aTFFtGy1M1pE55RFkH6v9uPAuWZpUzeN8FD6sXxSMQL",
  "key33": "5PnAAnXXH3V8rB9WTKY8d5ntxPfYspyzSKXRYBoxLLdZLoWcegwnpv3dFn8JXwzACvnMpRnbLXYBpWd7DnvUYjQe",
  "key34": "4DB6YErcBEPCW7z7jhHMmH95Y5JTH2hu1YYNhvBKEEf1WNtmKFU4Zp5P4sBzQLU7DRcfsL7Q8rywoR6GTdLhiSyu",
  "key35": "4bQyGCU9Y8a4KemJiwWFaQPF4Y3n7egEyuZ7wN93tfBAGpbkdZKzSPQUAyLp2Vf9gjHeuvtmZnfH1ToTRtLxVrJk",
  "key36": "2dBess3JVToucuX3uvV7YR6Lu2L4xYn1ksVhzXZSrjktg1v9SLBS7zmf1dcr1GuGFm5Neb26q7zQv86MkRkxnc67",
  "key37": "58951hQ8qEWQo5WurhKYsQiMEjr1PikhNSgHPaAhjTQseBXNjQdDMCXBppwjAgFTy24YEbfSSrUimP9cNGw7YvCE",
  "key38": "atVjm4hk8CzAjfeDJ3bDZXMrEVcKeAjjH7amvkSWwTTryLAmdBefo5p4Ja7YkCig1CX5Gx31nLoGb4FC5fPfh72",
  "key39": "Rv3v4jfUHWNGu8w3XDcrddLdTGvRiW7BZ67Md63qiwhCfaeUuUmaz8ZvdX2m8hXJepudQWuk3HZgJK5k1jKGsoA",
  "key40": "ihFzBMgXJZiF7isANsFBvRXK8bVT3tRGnVEqVUpHwiYakvjworAU7df1Je8na4UvAxbq2Gga5UPHjDP3bNxdJvZ",
  "key41": "48ukSWqzLsVAkLkACwWRw9afY1tZQeeqBPsGT5onr81eEsLoVqjKBerjuFHC5nfdbHR1oDcttQTEbRio8DrPueMJ",
  "key42": "Exq8DKFcw2bGg1DmfVQqbFdgFToW7P9n7esARoa9H4VwNjEahdvfKuMGKyAGgXbGqFMUSLmgeZK2FzSoEWyLLKJ",
  "key43": "3XNTfgBLT7saGfjHd1Fo2E7ydbpzkHWMAAoEeqUnAMJvP3XSCPGmc9ty8PGCppC3rHJrHPYKCAbWVcGPxL599oGP",
  "key44": "4SCE9UgrxMwvG6ZXnZ67kGYJu2JVypxQgpo88aGxQ91jTwz1Q9tTvqSbfmDp7Z8AkDdbTW4cfeCiNTQvfji2RjyB"
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
