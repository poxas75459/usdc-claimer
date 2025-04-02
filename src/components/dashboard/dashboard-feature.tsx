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
    "3ScyM4Fu4N6itR7wd5HmYiv4mWD6oNSiHc74wF6uyFLYa6Jd2ESzgUfKT5kdfLimMJ2tevmpruoc66iCABNTebqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KBn1seThC5pFxfUrMFp7s8SQZUPsLJmW7PLeBgU61Z4NuV9pV8bo6Bq7DNJEhgb8T3PLHn3DtQFQs71k1YhKELm",
  "key1": "66JdHr4gSR2Swo4ijnvnzN1UTgXuGfZk3sboSwP7uyN6B2Tmmk8H8Wj3k3on43pqCdEbYseRPi9qDNuRpk9QUxuf",
  "key2": "3qVtvPRfoSW61gnQuEwT3whmDtk7M5PgFpbc3iiWcyTscs2QLMGJGkUkg9nDLhVKoSsXSD5TgWrZhHhooUVXJARo",
  "key3": "21cGoUimWw4rMHNEp6vuKzU76gT9fyjrYhkcZAQHZuGXsWsqL9NB3FEBWeYTuAYLJu6TY8ijqJ5GfYSct84srZmh",
  "key4": "3m2sXiaXN7tP4EzkFFHdiYRR1BZuwdo1TtXGMrZ4wkZEfG7Mt4SBzjG687DZpwBn46eXPtmeovi3SbtVJ4og4xUu",
  "key5": "4LBwCu3cnvGpZESacqXFVGFSfaKLvbLxYu4BjYAp7kkeHvNugALdLjwqhLQDKc44ZuUB9aEukDsxLUPkboD8D6N1",
  "key6": "jCRB19miwTEqEVQM9Pf5kjgL7NfU35LmRUtSEzsHFTtW78KDsPmw8mnsPH4aHYR1YVbFJN3e5cAFMdPvEps58kq",
  "key7": "38rq8Zkp2a4gWavUs84H7pXMjNb4Ni8ZLdYaKqxfL5tMR5o847QyYjVVG3JeGfAd8R1y6LxFTf8nCrHKDFV1VSEH",
  "key8": "5PpzvqhX8BrfF8sEKAoipxNfQsoUBMUFhdSHV7yArrJ358pJ9AB756BMEPPFj7n1ooKDi6b8TeomCCTXdtyDN79w",
  "key9": "5BXXhWSGckvtr3jgo4uw7qVR6GrUMCGNbGdzHCGjknfJv8NdVeJYZVPieXgLyfXPNvJYrUkSJagouHcUvRW8tpzf",
  "key10": "3Tnos9hTHziEGVkaEbHqSPNGEAAmq3LGweRRhdDFiimRCqdXnz5jBLc2oQ2h3K3yMU8DCpiFzL2UvjF9HmyW7ud4",
  "key11": "pUocXPsxJEnEVgdWEJ53gEn3CZxwQUCqHJnukvTHpHKmq9pRW9yoWAk2DHwdPgPSywsdxR9MKxzR9kj3wFN6EcM",
  "key12": "3PThCMCzCmeUn17To1z3kfMPwwRqpZM1SAoZrnby3jWhgi8J2Z9F3JNyohzNYSPWSKftf4ZZv8A319Ryp6wNJefJ",
  "key13": "2YYzvxwYgNRgtgNtQYsMoRmjNSqWS6wATXJid7CYfbPzirV4Mo1ZP5wtR1DWeuzpaj6gFZ9dkyjRFukzrStta9Q2",
  "key14": "527yqjCDZbMhBUdvFfWR3EC5F5XRzzgzv2PQuHZ51mFRWcoQyThgskKSf82tWx77PNMae4SD1ycborCW3e15XHAm",
  "key15": "5MwoLYmzQtbsASphYsqoJfhP8bRd8D9scrnnRFT2WCuXV9eQH6MjGKmCJEA8agiVxo93mPvii1GGCaY77uHSWLae",
  "key16": "2TTkR7xCFzZvjb3FfGwpeiXAzyi7xRurQpYbHgpihbRdXqcfMUBgyAGr9afD6TZmbEmViViFruy1QZHDD1rbjXFy",
  "key17": "9z6Xe1a5KcxZYm5BLFkoxioJCTHZtc4kNGNiaAaC4G2cbfAnev2etCY3heiPvSRpxi7FPv6VyuYdBKfQcPGCQnq",
  "key18": "3ZSYgZTyDDgTdw2WBmXA1Bg6BiZVokRJ8etZ1Qib6N73PQ6HEc36NxbVvniCX9q7HxUrziqSvZbsmC5pS9NFizxY",
  "key19": "5JGC5WZbWUgVWwtNSTMJP2Vgjp1Eu7BqG74En3Hvdk2iUDJVdCUXZNsjwPHKnR2MPdkjYTBp5vMxXNcj11kqurDw",
  "key20": "2SyxfiVwv4zjy4guvWokw4UUzFXC7An87ML3uJePTtJHJkfctXPB69o8m9dAyBDQCAQTTPo613bM1PWaHyyHTNtf",
  "key21": "3PSURAppZCUSzHqgVQ48fatBqp9FHoT2XBRXmk6LwSw5h2FtuxMuz81WmPMsrs3m1vX3HoMkpx9M4EAp6rfDneJH",
  "key22": "5kKtz4MGd78uuSEtXREvB86yANv1VjucJRZrFDR7x1H8UBWdnwggqZTvh5TJC6W7CRUwEF3KzqRXg9sRw44FA9wn",
  "key23": "6PHYTPB3LNKkry1vteHBHbtrJ56UgJJy8dVWrDboHvDJ2BxCU9W6T3GwLJj1X72dUZYtYnc63XTxV1SA2tTM9Rk",
  "key24": "4vFeMjGSU1WU9R4FsxnqPazsH9uPakEgHQh1QaEjxXHQ3WjDeHSFBTpZWQDzdCcrP4d4aNgm4GzyhyqPtPPHD4rU",
  "key25": "2vQWaoP2miWhJTePkbayPrhfMWuRovubVjWBSSvQnPYHWmpd2cTSC3VyfRKYeJhhWQwYQwrR18Ht6iedKqQXWyjN",
  "key26": "XZJ8Z6Crd3ZwjatGKJjcisUdK5jXF3dDwWyQ4BXzSNWF33vWoicEhpLaZVbqm5rTpGNyQgf2xUXquTUpFh5sh5W",
  "key27": "5WPggLVphucVuk18mLEQniZir9eYQkxCNdVQjjfkiqHKPnWtE57r4VAb5vv654HAmZ41bMsKcbgG3ngL7gbWHmeU",
  "key28": "4KjRSxCLRQRKqB6dzmBT5L2mh2LiDmspoDn8daesWtNhcXkRJwxxKFPk52AEK3LY3pPbbEjea43EtpDwZBc5n9Ai",
  "key29": "4y3u96FMtXnmExa21iLtUvaKwZChidgEhToK8PB9h3Kw85odt15PpFRjqdod8FQpZkE1k1jWGW7NAcnm9ChqHgDa"
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
