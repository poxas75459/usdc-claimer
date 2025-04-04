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
    "m1EDBc1JuyRuuNKJq7xj8EgsU5mqhVWHQhkJDsVhBvtMo3MUnBr61ATyQ5iHEy4gC4E7h1iMCMLTZtqYweN6dks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R7zFkkfKNZgRRceRcSrSQ8J5aVP9ajjBhLJaRJAHkif1pQK8SAKh6Nt26phRDNqipsTC5AFUjLD9Y6Bz67SDkBG",
  "key1": "52aEc9WjkDR9e814yY2TYqB3BG4yC2fePuwS2Go6RSZoCioSVrdoXBWtGNMDchCATvkHuYLMPrdCA5B7ttkkq21W",
  "key2": "3ZyDu1cW7vhpiwjGLAhSxYn8vNftg3hqi5KsYkRrDmfPUnr5h126X29GXoAoDpu4br4iNs61PJHcPXBUssDmngrh",
  "key3": "3Mi7u66UR2xvRY37goXVYxZjmo5GJKwJCC7ueAeo5TfDt7FdzvCjhbJvywrnq5FSvBCrdo2DGR6r8eBCWXzYJszi",
  "key4": "uUtSxAarng44zabUqPzeWeaTt3FJ7THwCgzQ2sNqh8FuRt27jM6tQZQPjjwo9SD9ugMmbXHmsZFuB6Xnji33qkD",
  "key5": "5jbQ69goLtKM5vYnKFXtVgK4NtpmBCFTp1Vu8MZWNG9zjrkxxtsEdsbnQTyoExBTBrHbb85ca2awvKnyrDJKwfci",
  "key6": "5T87CV6vvcKDmUaDbgwUtbwrSmranuCAUhjbFNWBaAK8gFnQju4VWuDWCss31ASzpa4E3iJhLjYAJfXnAz1wZ4VN",
  "key7": "5ZS9E1X1sdr4CUbPur8xUaej2DVKUidfB1dhdo5kkGE8MZCV8mDY6WsWfjVYS8JVMowFFwe4CSyeXKQKTHJSEyFB",
  "key8": "2o1EXQgR2TYFagmba8iLxRSQFSL8YhZeKxcGGSDSu1nUBg1VNqDEfRacfEtNkBDiXtHbqHRu4yoAp1f2B97qEgmV",
  "key9": "33D1n7piQc44TU8iTdBLxxeuK35dnWgn54qRpi1bAubqt5TGSqkJagYrDWhZDRZmXp9V6p2fBwYLh76yVgwnCQNu",
  "key10": "4apCSVp5BsNhokHccgJaSmx1myzwjTEFcZE8sSLk3bYSksUFr5ia1EbwUVREcJm53isa7mm94uUC1SdDxxPzEERj",
  "key11": "JEY8HfDdt6d2coBDA7qyzKkGkdeAm3FXewk4zGLPnKxX5asaGZSfBzYwLrtZdJXo4ppdNf1AHZTKeCuzpKA6B3N",
  "key12": "4r7oPRh6zTYSAvBnmPPX8a6bFpEcNGTzC5sZuf8KRvK9dy9xEkHRavE1MqPrh1ENkG7GmGtSCLuTnoFq9AN56Ar3",
  "key13": "4bZUUzSgQTtmYFj9TtiyBfi1CFeZY3r3b55wHPdDPBJP3k7Ef93abNPemoAsHTVdkXcJAS7wLD5adPTSgGLdcdi6",
  "key14": "vbdUsjdQPBeDy1La2BNosspuhvnJLUrBQLAmwsQPVGwAiBe2SZv5vce6YL6mYb3U3d3k9pzqZdiYGAJupCp9Lxm",
  "key15": "4YouELSEX4X8cgsDDNDGofwdVnkjG8VK9c9LVdEC9kTKe6jMqF1SYwfQ21xc9pMtJtidJYKG5cTPibA1UXUUWygV",
  "key16": "3nEMJaYRhfAPdRMiGG7VPeQMMG6wZUeyVHajseDYieiVy1MZH1svfe7Ssode4NMY5Try2Mt86cUMKTiAR8sU52Uv",
  "key17": "waMpNkoXV2baoARjRZd3cz46kRLUcXujx2hwJaTnH8DytY52Y4uGvb9kC9qzj5QXW5ViqvoSBxpg8aUvDQXTAR7",
  "key18": "4NSkpfxjagDA68EMcfAeChYk9N23p865GbrpQBLt99PtzVXeEU4YgymvkphxhfkjFbhP9caBP26Gs6f99StLo8di",
  "key19": "9r4JXvsk6kcNL3afxayuWL6d8bNmPoP3aRk4tbsxdgJEUf2U2K9nwemo3w2owDLVxR1vLChe5T8VawWZUnP4fGk",
  "key20": "3DDyK4hPVpiWC6tddytkqXLN1MvikbJXEgCthBsN2BdZgET3B2qKCJ9RpEsFiwHHRYrjm6KvhCe1Zsbvi4ZeGmpN",
  "key21": "2uXV7GnSitZArcejtfbwUxC9iVEnDppxvCsEZr2TK8XWN1YDTTPPjyEkg2BhfF7BRe28kgewZ5DbDUycWjnkPj32",
  "key22": "3xDS7pR3sCicPZzA17Cyjb5dWWX4bb1FXixdMaZ1CqLwa9V7Ve3D3sw8rC7hwExeHmLWwwU9PSUH21rcqnaGkcfS",
  "key23": "5qMMqV4Nd2zqbMYRJ2ZzJnREqRXMULk2JDNBdYcwUGwdHbymhmotpDwTigNsCFHfX32ci8qL2w9HbSH5hPt9hUps",
  "key24": "4Qe5enfFKUDg38tzJBvu1aHsuZFFaTXhdWdfY1825hJGVEoc3BzoXQNPxKVjH3roR6JuhUjENZJmo1jjvwu5iqgm",
  "key25": "24qCN8DMoavz8gZGcQnBEf6BjrmG2k2BP5cTbnfLqCkhbrhvbY6kobmxrvhfjFf7rsSTx7w4bcCBHUoNhMenShcA",
  "key26": "UtJKGRU9zzi8fEQHHBN4oiv548sfx8EZ1eqy6Amghf4uhEmfhZiMh5fWwaMQmP5cQhVruY2vXKpkmgkVmgTHxLx",
  "key27": "3yWUFRNSz2Si7PqTauDSgFVmQqV5bWfWTSUnzpmdxWrtU8PSUBZ8jaQ7RKQp1sZUvfPf3UTEgExDe76TntTTpD1P",
  "key28": "2JjPf4XZQtSkQzfRcUnrejxigV14d5zKL4YafWXEduxNXVmnssUBF7GeqpsQFcFbwiZnHt5iB9RAj6scNSezXYAU",
  "key29": "BMvqyvMbHwhXgedaGpNbePeGGBDr5DC8RN5EsmKt1rFcYLgb12whb4aN5CzkK6ZQnz7iWCeX12RE3HUwkamG38J",
  "key30": "5VqEEJRsTDLLaUDdWB8i6mv4zZQgM5h2wWv4U526xMQfdSefETZRvTGFRt1ssSrf9Xxj9RfYua7KoMBDFooRPkeA",
  "key31": "2sXYSYscWhCGQbJKVkjN1CsfWYmhnsYZkQ5sVUcBFZLsjwFC3ST4Xpe7yDJ5EpkwYQjXVPmryMSraYWLHckEibXw",
  "key32": "2STKgsg2Lz5T15Cv3cPJtHoLCbQZNoGbcwYvqHLqQ78pTHf9qfQPqFjHeSgRZx8vbAtjoCs6Bu2jfgN2z6AWAHAU",
  "key33": "hTs2TJvZ3bcFZbB1pb1Wm3PYB4dks7iix7NZfH66hTifm98Yopzn53nR4uiCV6SRRXRgAZmAKVbwtAJnzFX5Tki",
  "key34": "2kMhYzeKBFtSqsvpaASL5Q5jeyGpReArwWhx4S6ynetELZmJgmq2gHxtEhvQMqXNW4HrLGgpxmetzRyVY9rHeSw8",
  "key35": "5aYG3AnMBExeJcxd6wDE6tjw4skZCwkxgfJwsnMzCYUE4vniLFRxfV9hzvM7QuioigT6hsGh5gtUSFbAUTbxZYAB",
  "key36": "2RZmZRyfu43kDB45XV1vZ56dGANKPTHYPvdDdXQiEEN8N8DwUfJmdK3Dza5vMUjVzn4YxCJ3u7KfQRhC7rgaeqbf",
  "key37": "5Phaa1qLoeVj9AdA3YPCrauYwLpYnEipwVps5XDg2F4rnGXM27pVezEZWgJd6uAspAuzE6nN2vghFBacQgBbKVB4",
  "key38": "4v6pVeVbuJdh3Lu9z36ZY33DcCWNnfciQT8RBZ2ACG6Bc6Q2L4nPFAZNjnMFm5e25VHVqaP5otuhNByxGRoiQhtr",
  "key39": "4fnwp6UPTeTGwAm2mtU6LLB3vmeUksF7XT1oVZPphZDoMRbTW7HFUUu1A6Rg7zCa6i3iFtpKHNt3DdXHQCvEUvTB",
  "key40": "5aZr7dZyHvRFJ8Nh6enXAL5MFUcafs5dcr8i8Mxt6Ci4z1X4nPHLaLyTAjgTbqiv3Yg3RhuSk1PYaSf4b6hRfM51",
  "key41": "3sUmfmzzHXhMWNHreCQ5YDBx2vmKZJFAx4MZuoJv9drQ2hCdXr5uzkWyxypy1NvqMLNuGqxQRE3wPmkzuwoXnQ2j",
  "key42": "4TLnwKxeiQT9EpHxhTwi5YDMWon6k8ftK3h4DiXMMse3XZKLwLGEAYyWx7nXCzyJ9wRvGJ4uC7RbBYSaGacbWE6m",
  "key43": "2A9eehtAtTUr8QNMkkkig9Q2eoJtUYerLJvazfH1oxTVEy95s8TtpPWutx4rZuxG62bMi8RNkSdnt1vhsbBvwzT9",
  "key44": "J2T36Z9AzJjHMn2GDU4VNfGMA3qvwkb3E3ZcxW85d111nGBsBDWvnFY6guxSirwZCCqXfpFrvav95dMNEk4UQun",
  "key45": "6162MKpMH7CL3BCrCk9FVhnjK7eDdKsLks9aQLHGXefpM2kYJp6H6J6jjMy5wHGGUSTNr1VCwnhmXN18qhEV6j94",
  "key46": "7reBBmWckvBKTWTGszTvFmxmAuUf4yv13LvQTy2emRn2yK2eKj95KipJsTodKKksRRMLCxzcUyArzbiWzMbVXp8",
  "key47": "2U81vrBRnFxArRrigxhyebnnQazvrGtmcjzkiB8zmEW2Wj7iFU1nkTK61ApnFQrQMrcuiswMMXd26cUyXY7xFZto"
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
