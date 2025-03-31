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
    "5H8PF4wBCpbXrL7U37FommT6ZLxhnrFg5aSiwN7ggJJtSU1bRKMrSxMQBz9ZV4TxcRnSP7HJTEcPzrx7rSAf6hy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U2TfZxrsHbiSuonbwePjtLnrsCykmJJ3gxwJdTdC1cTZfoi1vAvwQDL22SxmEbikZJBhjW4vA6bfWkAEreGdcMq",
  "key1": "376H8GNsXFc3MF1J7kugzCpRQ2eTubeewLKikn4nXNpPFi6UaTZxe2cV1SGWPkfuTywWxSRgZrgXnRc9CXp84atn",
  "key2": "3JQPpgL6gthbdBv44eztTgpgGJ4p8zJEgnWT8EuPuhrBf4qZv25dNAogY4wFJjyCKJxY6GnsUf23q16Vi26Eh9ZB",
  "key3": "4zthJyT61EymM9NnyXwZpqr9x42tLqPnxWqtiS83sCMwsxWPj7L2gGhAcniDPqcRC1wCLNSACgsuWnvKrTcWCATK",
  "key4": "3YFcaqnvavqaXiurJqxsfjh9HPGCvTpMnh5FPyXmJwabsEnKXK9RWyidh6wQTWGkUbnRS8pza2Z8BxvZsBifJhKx",
  "key5": "2fQKVWhQimzbyiqBAKLGipmCAoTVicNuJdyHTdzUqTnHM6JccHHGdJ3XCEf1BtAW7JvK8Pdf9JiAd341wuvgL7um",
  "key6": "5tF47RqZyF2x3KLjdZ6YXjv5ywG8xPUiFoncDWHBVwiaVZKactxTZDmbRzieXyusDNxovD6SHdtW3dzYq98LHNHD",
  "key7": "5VfVjiMM6hsq5ozknGsJzwZx8m4FGfMwARQX1FjsgtizYoFYNM5BnAEXzgZkCQhUHYWknjzcHGoMU7DPrqftxpwv",
  "key8": "61FupGV5ta4vZi9PLnNJqiqxBiAcrppfUX57infEiLNuTcfVp89wYKKNyMpLNqjsfZoPktLDJv5ABWrckdbN5nex",
  "key9": "4v4twNG4mq7oy5jpbAFZrBqHwxbbbdtV1Y13YC1ntTB1LWLf2fESwk2X3CCWtJX3bHvPEcuSBtttCbUYoyUkKxGA",
  "key10": "5cb5Texwx9H8fYGcei4EXQhcRxK8AL82AYGeDRzKq1DB4ntayPCSeH1oWvgtCbPXUQGvLeWx3gkW8gWPQ7ca8Ksr",
  "key11": "2TSswbG6BKBvKiAg4QHg542oZ1gkCLbRGoNMMmqZtStcSGFGUR7QXPxmxFsnvpRuoJa5JcD2odzHB9pDjwS4CBvP",
  "key12": "2baWaovKS9F2Z5ZNwgkWMCusk2759d4Nzi8GvuefVHAZDkUrkULnKNa9waub3NRumzHnamH2AqpoFPcEsqBHZXKw",
  "key13": "3YopjsXTNM4KvoQYVix5rmBH5sGVuW4xKi5EFN78DHbkb2tJu5z9agWFtCjxDJauxGotBXZFoBKKt8pPnk8395ZZ",
  "key14": "4AvN1sYJ7AwiPj46Sehu6HnysqexRrg9mcVMzdBmWK7ZPApVQnnFzDwhn8Ndix9R2vWYoWJMkKL3xg2gPkB9DaAn",
  "key15": "2BiAdpxJVn8CwCaGeNX1WcBvuPVXvFkR4aUYp2RGv68FvfYHFfB9rd6psSfp3rVv1bwNL2SspBsmjBL6WASK7iBe",
  "key16": "4AJtJQYeYjqwGb7FNk6cpdVS4ED5F8re6gReTBMhWWrLWNQ3jTayaS8uM7kovomUHxHSWE7RuQA3zgc5GkTEQ8x",
  "key17": "LQLXaUSBQm1cy7Xu86u3d82rcPG7JFBtHbtLDkChus2EaKfyfvFbhqug9kqUJq5qp9kLRKtVjhR2vmEaH1Fkk9D",
  "key18": "5VKAu9NYRYFYKiWjsX4t3s5y8efbuxKzmeRE5Lzuxi6reCcrR86SyHLjDuJwob1BXoRZedn1sjGY9aNjHVyPg1Wi",
  "key19": "5RFrChdncJwQ85tthbs4V3y9rrtbW6G4vx9GUDDD9Pc8LK5tdBQLxuLhb8tLsr3nA4yWH629Ynr1mFSihNpo4Y3h",
  "key20": "2iMz9cfUFQASzQfkXiaQEPWFg9bbZAnRK2Gie7fDK7rim24eAgLkiu1ycknHcotDcQncb3e31hWJBbJ577nH6hZH",
  "key21": "5zyRz6Cayq6YPEE6D1dALv9f29wPAPtdohMnbb7JwE3m3WAeHaCHASrhCf7QDDHGcnv4epR3ZoQJHsHj8VDfNJYQ",
  "key22": "3vDeiHCzzpWfstG5g5U8CrpkW6S7cdnLUEm7MEbqRaYKwdujVLYgdMigEhrC6QipArbd4aR2RwWf7J1bdTmWKYza",
  "key23": "2v5k6LvvmBpFHVHx4tFZfqZhYF2mz9mk1xdYkSnULsBbVUR9WGAzj1GR9mYnukEuUugEF1ShTsSBgoLE3t3azuNt",
  "key24": "wunG4qVYX3w9e3wJfQPrX4YkVj8XpMmLBkxyMV5sQBCbPMUDXjma8mZWimDzQt37Woxb5ycCFoj5XVQHSe7dRvs",
  "key25": "2XQubzBSXdHigP1GRr5U7cjHAe49epExx4JQckUDsDmHF4NGA7o3oJbtLJ7nkQLYHp5xJq6nSp466FnzZ11W5Wpj",
  "key26": "5X2fHQSKkdPWa5HUndxifL2TpkLfYje2X1EEKhdJeESsj9dpFptpkaoqbpwMsvCGiaxV2utawf9SitLDLiCB5JPR",
  "key27": "33qjLCRSFHzruppUFqVT3LnyhQEVs7Mbc2iFuwfRXqJbktHt5ZXT963nZpEWvYgtDZmhbK8fEZjH5nKyeWapDgBR",
  "key28": "55wUWgLkp3YH6bUMiCSGXiE27EzAhMeaPHdXMVrNBfZkRtdSodhTY1yJQGNz6nDStvUkjsTp3ayQ3dJguD9iVFam",
  "key29": "fL5yT38wg1EVcdtCzrEW7asTuX98xtgGbphNe9FsDUrAhZSp4PwTD3KAxr2wbV5r7jwDXUUNJyvF5c5HhYbswjq",
  "key30": "4eQC6iNa1QwzhTzABELGNHeALxC1Ndgi2q78MdoqiEGss9oeEdQCkExrcybt2fFUpEaX59BzzNxmJkjYiTMrzLwR",
  "key31": "59oMW7GM3FuW8Pp9h4x7NpHXRVD4psJVD9DFPbyUicSd9TR8ZJN1k4CysCsbcjFg9tV8uet8BUFymNj8pDNcnPRW",
  "key32": "4bSKrsPVx1ZPTq2neGhukVeCe8P9rFZCSJhhLgrvo7UxcHZtH2RQKqcHPNp4i1kQJTdka6o6swz7yKHSgE2fL5cc",
  "key33": "bwMn23xrnMzA4KBfZoeg4ruK7mD5DUYMUjZhx8NdkbuorZrtxH1TC3cMpTmYsX1bKjF1rm5k8VroEsdThgPPxti",
  "key34": "2V2MraKBdAHhDMJ1BdWod8nVeJNWMonCWDY8bfJBq3igZGuwQV4kYikbX5rfKcpWciAUPoFCooExkc3s3am2Eev6",
  "key35": "4bKW4AJnmS3jnrfGSHvpWdXYHp6J5AuA74W5TydjrgNGs5hMWVv4aHodnbVVQJQxgE61nzK8Htgedm1jrU4YnfLe",
  "key36": "2xPJcmkUPHtpAFWhqa4gkC6U5HGsHd1YHvTSJouVWHfJcCafFBTaampF2oy5qds5e89JUh3y3pphMRCrR1CHrpcA",
  "key37": "5MXDtMXgoNHabTdHfc3QLnQxKz3Esj3V4oSYtmRNYJQtr7Fc1hGDLNXmTGDLryczomzTXEoLHBHzFmnJEbnDBP2v",
  "key38": "4NFWL45N38GhsM2HbtQTvrq4ffxiYFA9GtsNDC6NL9kQR8yQbL3vJmqzHFY9PvPrS5TNgCsTwkd8exEykW5F4FjP",
  "key39": "4ML7AHznwT3WoRSXrquMukwMRtmyfFzsoBqyrKCk8mYXDhTgC42K1hG8aGb9SbKpwCNj1UzX3ua8CCB3xbLWe7Qq",
  "key40": "VCHJCJWTFLJnacmxc1njNZvYFLCUe5b5UkZZqevcymK7kr9FHmD4zrhzbNknus9fHzXBWv4mwGUWj6M73GDGCJk",
  "key41": "3ENWK1wrDNWtU2STpZyRikJLSte7DVtvUpR7iedMtZMzVysBG7BRz2C5kiiXMGBbEhQqFJ1qhigH2mYwDMzyBdun",
  "key42": "xhsC45BMoaotGiETJekibjpiL5wR7sb8uQD8iLAmk5GSYWR6NbBAK9LwTnCS32jPmFUd75uYxst2v76F7aYLwjs",
  "key43": "2EUNR4hrwoCDm9FaygMfWsuWGb5SuJxNoqwDTZAYcvSuXXuMQigpeeR6xdCZ1LX3TD6WvWk4HW7Qk45nnBcJxQBp",
  "key44": "E6YqJuNe3kmroQ9VfWenLxeSYAiJtkvV1a4ZKsyYvxtQKC9Ti5ezNBKhk8CWHR7d5RsLXFGgeATBSvMZecJqd4j",
  "key45": "5PULkAqvTPqLTCuPJCM3RuWyK9Q8sft1bKB22LtCRmprxfYexq6T4ToB4CN3ZuAat63sEKebbJjRah8582RdqCP4",
  "key46": "47c3j9TqKDwxNEJiuomi1X5P4WYHpUPspJZF52pyNRpsgZCEB6tR37GtvfFprPrrvi8T1MbJBQMDbjgDwxqKNQrK"
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
