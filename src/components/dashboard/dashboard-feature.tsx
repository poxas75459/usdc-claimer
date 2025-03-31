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
    "r1vtun88shDiwrq12yPmxjAM844Nnjs8ExMh4MFnhfGQ5op9GCH3HXMk2bmLL7p3JsnMRh5oqJpw77WY6MUvY2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PZrBkBLv3Xdf7yWrCUPg6ZNeyEGjaoSMZDKUN1mWMneRFMhU7WvrT3asj3E1ufQAQVux1Z18pLYHhqPsgVVacj7",
  "key1": "5Av2waQwVQq7tj93JSN7s8kfRhv3AgU4HQLFvLUstf61vTXzUBfyQf28DbNLuRagKoZrAyv7nph51gbTG3dHTWbZ",
  "key2": "jMCM6tyUg7BGaygwcQpSCWG7kD5T2N8cmkQtvcngt44QVfgB3uFE5VzNzMwbR6yeSwEURxpu9YEPjahoeaj9uWa",
  "key3": "3id9aa1Vn2fw88VFehdaMjJJfoZeQ4qjTSDELAxaMw5gHZEPWpjLsJEy6dsWf5idshBB8tyzTPFzQ3LrU1CBzDMQ",
  "key4": "3693iV2mKxBXbsXJ4BVCc3Y4Eyxpv8JVkjYUAaZTy6NE9mbyqBZVpCvSCa5Pk1jut8edftR1o6VRRxvKeSgY3MZq",
  "key5": "tKSWcgTJANtyyqLmdX8WXrxr8i3DyYXDMhFkSSk3AhtAonhifsmjBDehs7GYS3ciJ38LU9euTE9XBus8dAFFZpE",
  "key6": "4G4XwJA4DtkbyGGEwaWDRo56MHMVbXAvzkUUSHs3KXyNvaV7hmATCCFj35hsoZhMcvs2bYzjaxQiiAM2hLAkuKgL",
  "key7": "5RFbMW5u2mo4JrrzfTvVkKh7EVY6PyDb6Umim2Jp2hruLxzXU5ShQG5eD1bkmhJiYCMmUrPf7wQNBygSdQL9Qu84",
  "key8": "5XM4Ji6YFKmWpoMTPZs3JnXtmvWrxAdQDEFx862UoAbao9zeThALxeXV2spU9tJqcAjtMJftYX91fbiXCYZsJn9w",
  "key9": "2jse3kPfprV3SZ5p9kFYpqR7EFtBcadt8PgRv5Pk5P3KmzBP4iQyQULYtvzRjunM64WM5qbJUemY1DWHsKraeL7v",
  "key10": "4ym2t6wVi2sQcjdK5KYHGQoQGYktKoMuMZVsiFFvq2tkreAqGBWoZBXE3s1coLsMsqqTYRJPdgqVpB4Yv4mcxKwC",
  "key11": "3Sh5xHZjYgCtjEQj1ZQ9Pk5iGytcuPiRE7ku2VHpLuqK3PdoPGApJxiiMnnUwDEgUzBCR6neab2m9eenVjaukX8e",
  "key12": "559YMymUDz6QdcjbTPxHxnGTuD8MVcG6JGRYo8ocB3BC89MN3c1rYUeGaANht1i4ueQgsG43XKeKWh3E7KKM6Ztf",
  "key13": "3pjbaJWcYWm83z48B8wMesorsTDui9RiE3dh4pLxGYMBAm5C7ouRyJUA8voFy5sBnJPqmZcagu4kzf7gXuvH3UJj",
  "key14": "4QLsj8Aoc285DEsAjCHha8WYsW8vMddikc5dcQFxX8Dd1ve35xMW4tLSqfF2UhcRhBjQzDLZJdk1FM4JjMUUUQSk",
  "key15": "S6dafNagRT6NsKkpPhhMhEEtXDZChPo454uRj6Gh6uB63ZKGrDYpBj54PMNBEoYCuS7qDgxJg3wQyxj4cugsWxP",
  "key16": "316AXGz1fXoaHDSRZ2SZJ1V88W3zHhqkx5uW5SseDJDoGGjB4iXbrmPmBB1bmsnNwSx74EqqGy8kYJebRcRL4aXM",
  "key17": "QDUNvwCKCaCXCtgngyUQ2bGWvavDTNM1BxLHsbyYQkrJHWnuJzhnYE4eFZ8L2Ps1hqcGKoH63YvCor3YNB2864k",
  "key18": "5nF6UcUzYvH1azCeMsh9aFJoHcJTPjRQswVc6vPjh2ujdH3rD81eeSj7iF78X7aeKq1Vvh4ZBTihj7fbAFimyrRv",
  "key19": "gKbpzumyUb8x9F1SJfkGcRHj3xy4uY443PsS5nLwKHzDRn7fBivsAcYWHadJpzKxeH4L7vKNgKzkZcBnRyFFT6a",
  "key20": "gw4XhbEjD2DsgpBfQcdv1Ui6JRutYschrVqwFW4KAkQzPMm7rFjgNDgvFQiZLcUd62TMVp2dyurY9t5WirhcBSj",
  "key21": "42VqEH9EeKsG6bqYtrCK8rQQDLfwkn8wP4iTgesB8kLtzyRW8DVDotNZZXQTwopnqyyCQKDEyRufQw1BXrUTuohU",
  "key22": "3ATP5RVN6FeCEFFfTb1vg7KQsNEL5kR9hEa4pTgwSY4AUmmdwMPX1R8CKVCJdLsE1WPGGq8AsqVtkNVPqFspEvn6",
  "key23": "4By1LoKM35RmgCfBGyGFgysN6GdJNg3MehkrvphzfR7ujVi2MxFEnoSvDuvGGaD9nuCKZ3hTw7wm3roVkUcvYLtL",
  "key24": "2D6vyc6xskJaoU7MwnFq94VFMGweyE3CdN5U4ip9DRog3tg4X94HsUWiu5CtAMji9BZb9X4CDfEVrbLoGFSjQDC4",
  "key25": "3y7J1EHerc5zph7JJpSGQwVVoixeZrS72kTEiQoj3e2Yqqgd1RnU66mfXtU494FFUz82ZUkey4sNMko6owDF65vt",
  "key26": "5cLP3d6JBJMKUaN1WMT67YGwcLayJdsLz7orDVCAfUMZEF35fkiMktgGbiRKi9Dth5H67TkezyuZmG37waLQzfce",
  "key27": "2fJELACe9C4ZqPoZHveiXP4vtWsWvJSZTLoGGLhGDWheSLAiPC6UvAHYy7biFwm8cLqFVbs8GCWRZRXQYf8VHpqM",
  "key28": "pUbaorRD1hDuRGZR9LT83eQeEQTLGC9B83dn5CTascMrAGd24K6ZXa54Jotf5FSLYBNSjm8P7z2bhHvu1g8C9Qt",
  "key29": "2JDnyqVH6AhnMFSLukAYYzhqeVK7dCRkgVptXjDACE3PbrgThVaYGRxVUkn9kdkimtCsod184Exu71fEhEGVUS2U",
  "key30": "4XVs4VByTVeGN9WCdHfP1dFygjqkKa6B6HUeZU4XJwEcHkFKQtmgCHc7CYNXs9cX3u78MbKzR4Nt43KT8tQhmf2V",
  "key31": "5uh7N81HSfkTuPSmmoMDbReLm8SQEcW4vvaDqvyGytGmvGc1h4GWxAtUaewHbJrrnLAoR32qGxqfMofHa5By4mP2",
  "key32": "2ZFPedeb3zrWwo1J1cfNbcmxV8NMCGpDsR7LcdsPC7a9tsTUutrQgUf5rtYN7ofzjz9eYG57DStHDB3WuUg3F7FA",
  "key33": "zbkU9sTf6LuqYunenWwJGJWjoLvWCRy6NEnrpGzGvBPYQjzYYdqAB7yNjpJiJThRYJvWnFpUcvjhaQ2v7ho3wnx",
  "key34": "41ExxnaB78au5JpHnDB8LdSA4rHSi6FZKtqvdK1hcXua6uje3Lk34L91vCjChLyNq2Tti4Aj1UbQj69myLHDH2mB",
  "key35": "izeP5VX54pZT5qAexSydFt8HQgUYtN7qinkcTwZP4iF2DrnpAbKxEvCou5XTNZJML5GKTDU8ByWxKccYDRCUrSG",
  "key36": "4pxawWNfZgwkH4yFS4xCj53vvui44NMn9DiB6hR943yBRy9PbVLrgz8ga8gsF9UGb1f6WZKgnkz6xLRofK9EEz8d",
  "key37": "4a6p2N6tF73iSQR3Zf6Pdqw3vL8h34rW6UQUNixJqdpf2ut7bfGvksPJZQwiopabqK5MLyJVhjjb6AA1JkmmJpdk",
  "key38": "4664BrLTS9xFwrRRpjdQL55eBqgMimmPHSzNhMvUvnGanHodBqKB7Eb79UmfGxbXBVpkTazYV1m7cTimYyhVFWw3",
  "key39": "3siGWGCNghU8DtpmsyjnZdgzsa3WLTQiwnCRBk9fbscA1EDF3VdGTfAXPrQtkc7GH179DqzRq6wdatfvcuo4mBbe"
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
