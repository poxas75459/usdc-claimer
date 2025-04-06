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
    "2PvF2CdLbj7SEmvJ8wUNvKvFVHhxYYhqXUMQhwsctYCnW82uQczM6xTXjBuitmLUGua8MZ6oyJtNpFbJdPUnuYpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pV2d2ufFoMPqnroxWAxYpovjA5gJHvAhRaPQKXEequEcre2m23CHVwa1pXaypXVXBLKhKek5ckJpnfcEqQB3sVt",
  "key1": "5HebvtCvVX4E8s4bE8H9o2pR2bFY4AFdAoenee83PuYEd7ooBz5feL7xVJMmcJFxHBAkDV2USdTVpSvpNCug9Bxt",
  "key2": "SnsgDSLkCRSVjjWyDGh8cuB3D6xKQ6bQZV77RsBvbaY6hyp9VJq8gsMKkZAe16VGLUVVD6K4dZafFYAjQGzxCh7",
  "key3": "2dwoz8tPXyZQjoECkWnct7dy4f8kV995bsDjf2tkzLYYekbbvAownn8xgyX6kd9iJPb38sYXh5cycoutHwWmLcrd",
  "key4": "siuYYjeSCpPeXayKGxDHwxdqoezWnjdPfqpjh9tRJntr7GAMf7Y4PDdnHyvYJYfPe5rXUstVcn4HkjpLdUsbNps",
  "key5": "uinwzn4vJhJPYN3MrBuJAeyFv8J74CEx5nZzaSmA9S37Uyp4QcYboA3Y3Bhe6rUzQW9E6dqb4cePHLkt2nXXSfr",
  "key6": "5dSms3dd1Rqodaz1nH2hToeaJkMbQTZymn6898XsWDnfgHHX7mYCYeorYpwjh3XJFDKj1c2GjgNYrWKDFogKQ6wq",
  "key7": "Fb1jFcgXVGKPjthZ5rdw1x7zd67WWVup8TbB7cW8nMbP5N6QK5QQypWwk8xKf8sBBMtXrCqCZZhjMHbiNnZeGdH",
  "key8": "62wanikVHKxvLFjKsHwb2nzpCD7NkaRVPYgTJPER8qamzLN73ysJy1wnvocmgoeb8b617HyBBGakpLCqduLbH3si",
  "key9": "4im92PMdC7jzTDcFcx3Suzc51mf9Wvp199yuaiJgpERmymL6Zgyd9En1KaxsDAJdiL1VuTna2QMyMKgLnaY3PWsU",
  "key10": "4rb5G5B6JJm7FbKCUzN8fpMm4BkNgcG6Jd6k77LkpAp9C5a7Xjbc1xbHF4nMDZ2zpB4JSkbYccnz7Vb14ee7kqxA",
  "key11": "2BbDC4WngwZmC8fBD8qjBwBegu1cXx3CDSaZU1Hbkjw3aKuZRx1s8Fh1E4U7ktCdfq7a3yMoxuDfLvZMoPDW2GAg",
  "key12": "g63R8V6jqzPZuDyEEzAkkPxaUNJEw91pXb9GhphR5yW9QMxwcFLLLsroJcdSpr8Tk42hXwxALmmQcEGcNiTeGYP",
  "key13": "24Rxnxxt3gBMwtrQMtzH86HgPTEUP2H34qzEE7K727ExRK4JW1YDw93pAKNgNkgBXsUYbx4RdFd9whT4TyQk8VFy",
  "key14": "4VjTBuVttoMp7i6xjQRQJGHULY5FNxitEDNJD9wLfPD6vmptUKpfNhHHkDjvJvZ417tJjNvYNUEPURnnndEf8p3R",
  "key15": "3hfXmRPdxWhtEygx3ReUHgmHdK5BE3mdspfjQMrDiatWk6nKcH1F7mRYqXcAPPoCaMS3dEcnqcvkfi9DPpEnroqi",
  "key16": "3PrRAfNrFK8UK8Nr387dQyjLfqvPiTPor2Q5p1kVgoi8NjDgfVh333EvoD2VEFCHQKFDJeEfrYZwXB9kUCdpKpBL",
  "key17": "6GVxE9QSWB1TXmA25FF6Zk1TTZJ22sPqMfpgDUH2ziQXsYdDc7xoQiKbqVFp57dNSJqsgSke3GqKpNL93UfPc7K",
  "key18": "366c7NZnY6mS4AkQ9gW9ZywhMLaQrAxAZDbEssJ6DtKjxZkcEsFDTEmSK9k6DxBRqPbDAS3EaYDCGzioW21c8PWv",
  "key19": "443i3N5hu1ywEoMsjVfyQkkrgwMonvV748ELjYP8qWZ6LcVVmJgca13vFPuUcaj4rKWGH4oYQoWhgR4Vk3nwGWgp",
  "key20": "4NpF3dcii1Jst8ANJxbhkbZgimvVun6JnFzAzwNQu7JnSZR4jqnFit4L6yrsWQ6Km369WzzS4i42sPEzT1kNWQzA",
  "key21": "2viV4KM2VFiCQ3Y6ankRG7iXBSKfYMMYCNzTatnCqmnZx9Ur2WSZdVRk7wPn6zzfRyL36HBuk2r2H3K8zmiWzjvP",
  "key22": "5EdE4hxDR1hc3YEgWE85fhHb8dp7qGMjPNtFuRVvc5GMURpsnpa5M5D9remNxPm52rZsdL82Ett1WAdxebN3iXZ6",
  "key23": "2puM6AgyZZ6RdZ6uhf8WEoKqHkrWVHUH1cbjtfMPZsJpFHi7RQZ8fvJgDyBwMY9QqJCma1X1k3pfuwYzT4j311xu",
  "key24": "43kfjgyVrhbV3wKoJhcximKntb8W6YN9zwe5tPbMArSCVmArXr78dM6MDjrwDbpHzU2bx8FCryjnty6L8JyCi2xK",
  "key25": "bGLeVwKhcgcjFA9k4A9LamKP8Y5SvpXs5EfRcHBUg5JfVBcQHyK6CTGKiTe1MGPDiipmwGpGcBLxtdbn7RrGfas",
  "key26": "44SwutPJaMwYDq3bDpDcrQopm5HbyFauDWUy12P6gywz9DzwomB9AJJPFgYoifw5382gWhtHNjw2Lka2XPft2yXz",
  "key27": "4uEYKKk7EHrkB2hp3HSVobrZwgC1ySQzHxgnzt378QVkYzCy4Wz6PUATw9WcLPqnkTpm3eXFJKQjYVCgsTfhnLmU",
  "key28": "4uPN7gtNyYuS9RNX6cfQUFqLVZEZ4EVrn7BVpz3K4BsZ5vDJa4zbA4rwixZXqx5c7fztjELSYcBE5snhbdSHDC7u",
  "key29": "5b1yNzjh6NTRCzFh8u6kCNaj1Aifd7Hkbzd5sLudtsbZoP3ESn8mJs4sXb3esDGadJoEq4sfeYj6BHpJGeU8CEuZ",
  "key30": "2TPGec76fYCZp8sGM4qqwQXDaHR932QkGpmUfQME772o1TH8KPyCQU3sPz2mmyFMSCW9PcP1EY1t1hwHi4yApkRi",
  "key31": "62CLt3Lou9emmJv9o81uzCFMJFAodvMAWKSromkNeqzxCp3oosRhKCMsSa3UkqL93qAdb4VAKgiFhemK9q3mKzp8",
  "key32": "2Eot9GUmnKqf1HVgW32TxyXbhAD4mDk19Dm8p2pe2ACxjnVixdVMe1F7TU3DCX45Ab6Atx8anFC49ukmmtwq7ZR7",
  "key33": "21e4ZjsDynnojLjBGArUgEd1UySS1spwphmfXEmNj3fqXQL5tcJ3QKPdjmRfTYecsSUGo3zw7eqkXwvvckp8WdV8",
  "key34": "5TjwLi1uYkVjvAw2DmBbXnQsf6Fc4B9W2hXSDhfJeQZWQ4w9DoJpUH4zuuNiL9ZZvBNpwMyV7M4JWcEcMhdrSrS7"
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
