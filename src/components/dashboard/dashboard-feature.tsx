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
    "5t9sNYiokS6jXHiVPXakpkwXZTBgw2Cmx93UAAEbVquYN515DynFfgyWjQKknFFCLGMgtc8QRA4WVQny4gwURvTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tPLtxUKH8vX4ah54KoFMAbQ3T8mrBVS6axrDS5zdXYJHR4qN5MMHa29RYF72LB64Edt7MZ52aASKkMfpK4kyDG2",
  "key1": "5ZXebyUgkdooUFRxuEgq748sxdDxqMD9Ux4K3RDJXppeic1rHSocwZr9si6ixRuGsos2mbBoXu6WPGGnpSXuPc45",
  "key2": "4jsnPXYYAyW6hMz4DjW3q7Rsm8TTPuqYrfyCx8KvMr3ipwQLSEwQgDkQriMYGiZNQ3kJFncZXYFmk4Dvm6bZUndL",
  "key3": "YCkQTwQbrEgJC3cs9yZALnYekZacT82m5TactVvaaHCvW8PDwC5thyauR2LDkcyuxZEHJFfVHXAv7NDxQM75R6T",
  "key4": "oTeujTC9UdRi6Wr9Yexz2pZEXo4s6BK7r7jVza31SxSqx7eSerZ2cUcZP8BWZMHiZLd7JuFU6ZSqZxLpqywKMqm",
  "key5": "3G1jT8Za1eCK8DTpy3TWewbMvYbPVuXMyNLRtVwrkYHmM9Mt1siXUwfDrqL3JBpteyVwPT6KNvbat5cyDJ14bdaR",
  "key6": "2wPQDREFZq7SvUpgoB2Uotoma9EMNwX2M2N3wsrQpipqHLcvvR6hXeEYWrHAWr39sgC5LEHZyx4sZWTgtuA5dwR3",
  "key7": "33UFdcpX9E7KtaLB2adQL4bkQMWZEru6zWrn6c9L4VU8EYR7Tcxdp1YNr6Q3LYddH8ZJvyuKcuvec2oBrNYqe23V",
  "key8": "N2z3NfQLdSq51xAD81bVyueeeFZqP4yNfwJhAUqFTZvbPSWUeNdKzVfrWrT4eSMJFHVDQaMacCxjw3LRhM8a8rq",
  "key9": "k98Nebfk6M2oAHdkF5odtNzvcQzjieT5Eijt5jW5ojN3enfJD9FxfCFbZSKhRpxv6mbnmFqHCGTJqVhcE4Ai6aS",
  "key10": "3KtDz4WvVYBJhv8jDtgQENZmRWi3Qr5wPJ3H9JXXPCZAJuFVE5DutYP49z6iKqiCeEpVvqFX5DsXpyw4XjgycJFD",
  "key11": "276tdb9NfZTnP8pCqMCi3y2mRaCAQPHqNwLPk21aX9j33TNmjs6L58MyGrLUG9PMG5WrtrJ7PDbXdzeGXYRyCvwS",
  "key12": "2U7gLvdfcFtE24GyvkbeRjtPuAzy7FpG9GcBciScGuZsvPHiNRg6BktNCbYVWXRPuPEBUUYrd34TvN75biprSy8i",
  "key13": "2TxGLr5PLazRFYdVuAfcyK75q5RA8bSkYghqTw6wHvTdicdXRK9B9XrqdAwjdHBzqzoZBGoBpxSJuJv9jRucthx5",
  "key14": "3vfpKiPfhxUUMuZgcffewY3txkKeSKJ2UbffwFsFvWbEVTyE8turRZUQeskpVTuknwio62gduYvuV6RnP33LfZkA",
  "key15": "bvB15idjQkvHPzQUG9XX7qFgqt1vpShv8TjeDH6Q3NrLfNAZu7CfxPsma3biFSfhWha95VVhvne3TGAwNPw314N",
  "key16": "5rARJJANT9X9x8818S8QCsABKRPzfCzPYhunw6de1bw9cSXrPFScjyP3wh6Vwo8Csxbwq4KdkjX8M6ipkfpMbjAc",
  "key17": "tiznEjXRAENUZqvzY3swdpKkmbyhL7nYkww4TG4Gn9orBQaPDZ4UFaiejn3QhZoqUmj5Z2PGezDTRyLxwVcFdYP",
  "key18": "2fUXJiQWGAMFiKiNwsPJg43nuuYP9pUZqKzYd2kgVZUbQzi3UszZfFeoELcGb3x4Wj5wqsURnHaMnoQsnioGEUjT",
  "key19": "2HqoKGQ7wNgkuX9ijM7xe7SfauYkRHCxP6kHgxahCgK9sypbZxoPWTUK42wP5aowmXGBFVfscettggbrtAwX6s5N",
  "key20": "2SKg9qknFS1NPH5RwYJv4CSxmQFidufjXCmQDtZUKXAfTPtmAkrJW4vWXe8rV6zHrWwrBQ4myUtX8LgU8GaNiYAS",
  "key21": "3hy9FPW68y6p798vYetobuus18PLAKnYp46gGHSrV5iT7ZeEHeVwD8SmNsfvRpM7bhLk1Ahi5jr3TqnuSFjYgmak",
  "key22": "Nv4131RDBDHTJ4v6JPuYiSnFLbWR3NTQMfoduaoVvA7gE2HSktyEfmtq9WBBhvYnr4vUVMNR4WH8odXLumygyA2",
  "key23": "51yvJbN1ss5EY1e8D75roYkNdhQZbCK8k5AHHjwY57rSi5agPbKZLGXVZ341g7WYYXaJGW11G9MPTkcoEohV4UtV",
  "key24": "42UnTjrBthPLLxw2D83ebo5s9K46G4JXVF1itMW8PaGQyTCXf6guT6BMAeuVJia2wfw11AQfqRGLNqS7s6JmKpNP",
  "key25": "RvzrzZjV4bzfpsrEr1gFoyzU1EvEWS3MRPAe4EKXquAyM871FL8Sks58GUZGSGDXwzyN5642qfPV4R5yeQaYA6e",
  "key26": "2QcPVggxXP6ofr8yGtWPzNF3Yeu8AuzMjNP2PF1MXjwqE9SMacoHr5YRfvJu6UShwDZaWQ7hdsehVYso1tmXhUC1",
  "key27": "4fcbnnQh1H18kCQijthPo6iFUPTWnSHMiU4vV6nkMPviqaKTcpHMymvWsLeRxR5nPyVWHNDFWqFBVSBCNtf11U5A",
  "key28": "27Dkhbu4mGtjinPGqJW8stvxDKtSGEFHCE9iWLRjcLjh4hYG3wYkeyMudtjisXJbdtpQsApdPiQqTmXGxbY5vPPh",
  "key29": "2jPMMaSGY1PBCyM33iDj7LSYDbbzXmcKCjZyV7ELprP8hkJv446DKrKMXck1fKC31597LaQNtsHpdzoakpjQWu2M",
  "key30": "4Y2BWiZX3fAt5csUk8Q8gRAdPXq2zfZzunuyo8KFe6zz2Xjr9iRacWC4SnXMCvtjfKTK6LSzaE657VQ7FL6HVsnH",
  "key31": "65q4vvc8LfYw4Bx6wGMQtPDN9JVC87LsNQvSN7rC4FaLGWGn9JGC7LLTHREDEc9Ld8CB4h8EcbRKXJUCfwfMjM3J",
  "key32": "4VT8odRk8XPNyCR6VMQqs5G7btdwZHzakQyJzKgufWzZYq3hvzvKBLsz2aX22mfydjxn2WapRs9uBLrQrFTw6zta",
  "key33": "2qk7FkNdyjkuH5gMGawcPHHGqzhfpuKdXbQn7ciCV7uviS3ZGNeJjQFdvsvTdtF3Yo8cdpSy4goVt9iEf2c5FKRy",
  "key34": "3J7ihuLx9WuZTPbZkiy9v1HQeJ8kTgkfs1kTWGMmsPNBHRNrBRnLPhwtvcKhrhUPdhspGB1riL7xhGybWS95bU8V",
  "key35": "3rFgPVxPtioX4eGCtjFe17Kve5sUfi6VDfvvmPvQk4FWVtQdNi5Sd2MEpnPSNssq1t6vBn1xgfHj1jFA48dTx9RK",
  "key36": "uzRFQWADyZtpuWPLJahTWZEMf7qNwAo29MXSGC3bcNoBRLjVtkZqkQqw5Dn41Ns8DwLbo2ssPJ9ch2v2FNL4FDe",
  "key37": "3Ph1WYLKqBSTPT4858oRh3n7k5mimVRnwCQuNd43FZEtrEtiMuT1b1nKbFJiiTP7dLdrNHbKdhobPUns8t2J9AUj",
  "key38": "4pFG5nDdZmN8Hxs1BGTaTeNbTcofUbisfaxWc56CKC1ti2NHRpHX5LPM9BHt8jKLWV61TA6vWLpusiGd8JVQWDAT",
  "key39": "4z5kw11dS2Aa5R3Y97X3DWLDaijPdgZo36KFz8xWokqfF4VvL3kAmfqbP8ibau3StBoJHtddTufaf4jCaFtWtJ9i",
  "key40": "2cSFK8G5k5d1bBRojvZLQLbeR2XqBQdEVAh4iWBeYxxAjCbx9g5bV1t313u7rG97sLRF5SUiWPFKdVcP7FdgF5a8",
  "key41": "5tYzVXJXegZr5PQaLhRf8dF3JvaiWQTwuJqFUGQ1i6yPPznzu6JErYHsuDMYCD7WfMqD7xr5S1y2yByWL8DUwpsd",
  "key42": "BV6nRE3SnbDB97wTgRymnnBJN3rC7sdC3dFYjq6gretUJ2gCC7QyRKEFhL7HYLj9XHbCfUuQAY8PN8LVCZEvnbr",
  "key43": "2pqeXBy4noE8GJa2HWrM9hoSZMGqUHUZuruHvQDKzbqGiWWyE8vmLxPa9FbzKvx2XwKfpkM3mMSSXJgX5b5GgwBB",
  "key44": "5rANPwCJrqTwqJxMscSLckdv6giFK73SMKBq4BwsftYpMdtLhV1aBiGtxb5M28e5tRqSKdLM2mpZPopY73taqqE",
  "key45": "5nhxKVzyRWjfS4tPh4ak8gQR3wCL6ZpgzNWdMeGvSEaMN8GfUiXETQ3pCDqw4JoUjWqBjY8gBb7Q4NkWK6zFsVZS",
  "key46": "3D7PNApsoUchVmDb99h6q5V7UVV1Thi9a84BdPavUJKoqhBgNMwuZNVN7r6C9tUdaCbJvgmXbnEKHgGkcsV2Vxbg",
  "key47": "fTRXYHYCboisoNwwnPBwEgs9mr5eSbqrArdqtYU1Bru9iGJDQ2dSbU5LynCGUwNB3LiHYmF6d7LL4LCCCGNsu4n",
  "key48": "2jXNZRbYxFR5iRA5aVBYf62Pi1J8K9bLipU6A2vNmHQUgZwdkcV5TbYStByAHjZG2tGLd1GLAkiuhp8ji84ynHeb"
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
