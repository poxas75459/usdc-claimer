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
    "4sHFgu422ufTvcupidSwRScwZ7M3P3ULZUqUkm4N8RGugat7qcXjmAijDorZmvM3ho8yzfLzgiMC7YHGjvTSJRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sDYTqLmgnEa4Xke4nM8p3ic5S7VgEfyBZA3szN1fxJC8RMqi3Dhz31uTQq6KpkVEkheRVHKxariPd1hLTMU6w8v",
  "key1": "J5y4tgjhmbmBCiPu5bcRdqE7GdUDCNPeADmWVP5mHdZoDiv5fDAy1kCxdTqZaQ2nfSJ5pqtVeDuo3oyY2C1iaaZ",
  "key2": "452DwAJ8oB9n2FCs5cC3JbmdvwXzPdP6gFhSigas9wUTYqfBYdvjD8LT9HVtktanFYv9W14m6E4YiNoxruj46hcv",
  "key3": "4reuPnXUZ8ZzEoexB3xNXA6VEDZhTTnAUGZ3XWsxgKNTSeKRQktSxAvgMJ9JWtGjV3E4D1sKRh7RiomtnS4WawEf",
  "key4": "5VmqmoyEF2Mb87LdusGNTTMeUoUJh33SfKCiMC31CHF2Bk52acutPB1bNnPL7vfeL2xYVFN7Gmfu4Xyfbjt4x6ms",
  "key5": "3k1phE6j74SQgV3LtDhVTRNKPdYsoESyZVH5zhKKyVwXHbV1H82bN1dr2UB8mHs85WCqGygCK3K23FY4Rtj9VHdA",
  "key6": "4iPqnJzujm289BCYcScduckUujwfLY6eDrf4fUj467jhLiiX2nDuZuCRSjTxjf4evQYEzQYY7Va19ZWpdV2ej22c",
  "key7": "5ZB9if73BnJaQqACckLFHRPT7CvJ4XBqALQp6G1xBwa847wP1p9URpDzojvqUQP9sqfevUa1d2nzK1Anh5DpfsUA",
  "key8": "4eG4j31mP32XxcUu3NrWao8HVKbR75LhgPrjDKRqpxrewcYMzmYCXM6RyERw364FJ47m5C3jetq1sGtsS8SmRMVx",
  "key9": "oV46Dcvgai8QPCVZs1BiU5L2w953LCmHn2UhHcZK6SG2LSXc8UPdrRodcSEnhegVnvvJwvq9ThCMao7vVc2uUjS",
  "key10": "G6ze4fwti2aY3Y8cBBRmfwAhtA6xmxasT6X4iNm3G14v7xvzF1ZyhqvuYF3YzTNeYxr2NnwByQRnsfb6JiFJwNV",
  "key11": "3rv7UAjBRweeM5UFoXbxTXc1TCHJvrRpTjwLh5ysWw5KH9ZrjRjVDGscR2upzWx4FS2sR5LVZTFn2VJ1SnssdGza",
  "key12": "4L6dvdQMgF1nK3a8udyhHc5nkkPKNuywNMGd32QCRcHP2Uu7ULKpGdBi6E1vC6xpkfzoQk7qbD7QaAdMnMuLT5We",
  "key13": "3wR5pJ5yBUDsbAFp9TJ4SRAc6bgvJWptXZQGX8cZ8VxoGtrYXjEjZYz4714c39JR27MNy4u1HPYAb4h2ezhXKghL",
  "key14": "4fKMLxy8b5rcJnAhnvwoRhYLr1VjTxFug4UeyLAtUoyorhfffuzjMcT2VgRH97KBf7maJMZD24HoqjJYy7VfPNxV",
  "key15": "gwhMuyGmhFPQcED6ELz27hde8XFBEVeJGxtq5AApbQWE7epVxonrgmr2MuvnTNFWtCbDnbuS5YKXtvoHpBDhZLB",
  "key16": "511bHSKFf2YPyMasURdZEm2UgiqtbQgKHectNCXMHxgapRNH7AoXnDW7uqnszhmMdU4o6cfpN3BEFa8wTyg7D3jJ",
  "key17": "4iGi7ttu3i5yvmjUdGGviyCSG7cuy9eDzxNaoKpkx39WF5xNwAuz9oMGPyraZEpvVtbvjBY5tJugLsNL1rijSTvf",
  "key18": "2Ewncp1Z2f5WDCGfupVRgUBPR1WCgdi5FuKnEZ17RXHv57t7szvjmgcL9ALCFbY6P8b4p5qzQJ5KzTkEHtgd72Vi",
  "key19": "3orqsL8Eu7mjBFRGJ7DJcBEkFFSyLAzW6d6qQSLz86qMN7UNz2PVmaHhVYFzDSgxW3BQPTDZifFxoWfxRD8Rn7jQ",
  "key20": "56A2aWZWs7UgmCUsGDzsAaFTDaGgjG6EENopkZA2CxyQQxG9TAmWXxpG3dNLm2PcAZAnEBm3HZzRP22L1XACcVYE",
  "key21": "5fJmqkgXLcKME3dUxtkzc9DVSjcRTDLvG7A7JaSh7PkCtsfh73a89hT5E4ihWzD9Vbdtk4oBv6Gxz1p8eNGDfLL1",
  "key22": "2ZeR7JREbtAVvPZg3Gmcd47Y1U5ps7mM3CzXHwnRvGY9n9TrSY4VGYDK3Q7bkjyfAaMCLvhUrHTMv8i5QFBgdiWh",
  "key23": "5knAgQFBykiSsufuy8UjyipDu9A3Zaru2bVEnqMpVB35fGubfSVmETw7yrm6MNh51k1B7ShRrQAF91ctuAnmFd1k",
  "key24": "pCRiEdfXmpePM2WTESBQoHDbdyaG2iKJstr1pHigpUN5x7pg8zCnNSD9bxg3YrCe4cmBReP4ipEZVQJSBAZbvNH",
  "key25": "63b4jWCNFg4ymJoApvZYqcWjEt9DNdsS3Cgig2Nutr4gke6rhcLmn7rfQ8wuuT7AY23bi2v3riteq2KnK442cbrf",
  "key26": "4mGP5MzuN4oCibHodc2FwKXKTNyk9Hsh4RpUPvPmQaHALTWttB9GMQbfKMCpbmtqJRDwWPX2xA7qfaFP52KZ2da5",
  "key27": "3Dfe9ZmVJxgSAYycdWCB4dDPnhLwAMZRcb4ha7CHKzhytd1adDDXunduoeAkqUWCPt4NxKXqL29tyR2Ze5Sa3hDe",
  "key28": "5n9JHWwxEY9EJas2nj2R8DAZWQP55jwRRWSFX8E9HPtP9STnQbXRcjhcMWLu5biDJqnBod1bN3CSCe5FfwfaBM6v",
  "key29": "35qxQJ4U6Und3Mmn31TPqVKcvxWPony8oYBg414npJkLvNvmuK2h3zNroYYEVTH6s1Xhrv34MH4viV1n3B55ZgFR",
  "key30": "5bHqM7TNeawzEcXWRVQjrVSSR9HBRZMAf14ibgBgFhgkmKimRZrBnWr5gL96rSmM4MhJSmJazKPEUqQ6bDZxtYeM",
  "key31": "5SzVrpV2wDBBtSRC4TjYPgLwTjitxcRxkFN5YezjTmoJtqzQZBmri27pCwvBDowPbkH2NrvkkGFt3Jm3APCwGUXi",
  "key32": "4NrS8YFLvRqHnF7oW2GNkY4BMH6ZiqnYDH5PtRmxK2j5jUKQBa718i8dWQyekS2RNzWj4FrYrMtRaE2s4ggmaVEU",
  "key33": "2pnBugFmGWLygp5Sxb1jYva75aPyvzwS94mg8UZ4P7bVbTAwNR9ECwp77tMDzzKcoa2H1H3zWxHqSWofTikar31D",
  "key34": "3Aif5eDgK2YiWNJLHec4Y2SXDrCQpAHRSo7S75Mg46cHTA3q8Ugm8LAw8DGKH7W1tnwQZ4QDCJNvwS7Gpx6vP46M",
  "key35": "2eS3SHRQ4aQSZ2HFTuP48EtNxx2CppT73jakNePHZYp6mrmXeNi5CnBQNhYL8GLNQXtebW1WYPUX5WqXY421223o",
  "key36": "TrpyLvXELcne3Nvsuwd9a7dHC7iGzY8t4RtK6qm5zh1nzYgjaVigxBKfDgasgrzDcwtph5n9evWr3LgqaQdFSR8",
  "key37": "3nVDL7Rtc5TFWUDBUMeVZrTJyU89jodjpMSUKRujYPrT3kvS7pmztaPQngHN1QhdnF6cp7eTdQ4nnZQhoe3iipt7"
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
