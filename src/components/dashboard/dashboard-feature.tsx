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
    "GwpK1tVaomzkivDYs6fnZLQmt9CpQVgpdBjwQU2WkHKHTfmozKDRq2JXSsciS7G8Y7JoTm1pAXzr6EYoSUoqN3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AZsXDbHF8Qeqd3PXfF7cZr4SS4MYKfqowBEAJBK6qtSRCFpkkgL75kyXLoPKVX6YRB2K27BZNYgzeGHxnBC6hiu",
  "key1": "5va7bKK8oYXe5SAuqnVhyVuey4sVv3PEvHCtQsoY3HLzmJLNwCq6sSRZbisgemYKxEHvnasSytYkS1gTx8Ld4J8V",
  "key2": "4TM1eD914UVpc2DxG89sA25aFFtxBrJKBqB7KYMywFTDz7cv3vmGsywDizdpF41cPjYDYdkQWM5LeYMNhn2eDJd2",
  "key3": "ab7gm842GCRw71G5mnGpYcEj7NHqBXPB311nC38TsnC67aRm17pQdiQm1dZbgj1KB48WQQaaYP5FYQ1Evb9D28s",
  "key4": "496Ek1NyThotZDNDXRN9aymD99qEerco64wk7xdqdzUZS7G6UetCwmMbtwGeJPuQpotLRHaCGzmAFLZKV8zFNQWk",
  "key5": "4hbsf2RU8psjtYW6uPfGHYYt8QRnJVk5irwgkRxUfYiu2Mkwn7HMy1wqu9tmk4Z9R5s4uduDbQ6T6qnWQKeW7UjK",
  "key6": "3wHWPzu9HgWsfALpnBywYZVYUGE2rSDYz6ah4h9yJfDZLRk91HibyEx6t2Fq1f5wm7cW1VqfHKJtfUnP9dTwfgPX",
  "key7": "2565ZF7SAve3MhMqbcFmGg4meTGBYhsjmafeLJaQ9oAxzdeuYYPAweZZyZzAGjcyecVH5vUKXvy9B7BLgwtK9qpN",
  "key8": "MfLy99Gnz8GtMweGzpfRuD2Tj2LmnCPQByMf3aZi6ujFjdzpv74aeaihmmk7Q8R7rHyMGaLWBcocNwfbLr4H91q",
  "key9": "5VDVjReK4kxeAKVeYKYsgsAdQYgkK6ujhrF3TMN7gYFYUpLk3P1GQVkajuKxrjAgSF9TAwfPJymo36ygb4bpt8XV",
  "key10": "2i9AS29xsDsPwxmKrNTM7kr9cvvXVCjCEfUu9WkhaHBDs1YSoLpwf9UK5tpC4y8hYKwub9kHZ8U7FqWvdKt7wumR",
  "key11": "3YkkJ9RvFSPMJKiM2v6BrwYGKGj6EPWmTMhadSH8KFKk8dvcHrvECevpPToSsvM4bbvJ9qYDy2HjxeAhXTnCce1n",
  "key12": "3GGHpxAad5YNWqqv856G4cb15rtPvmVqdmBT1dtftTaP8rR2RtscAVZ8ABcLMBGU4qK1ChPh8VojPtkKGN13FGGF",
  "key13": "4sT8yCcnPAQUkFW9yxgxo2hbmjrL6qqsA3BtG5sqVUA86czj7EB7u2k1BtpGLgnfmA8XP43Y9KZxHJ2JwU3APQ2e",
  "key14": "5ncXN7Nk6Cdkp5cdSvot5FqkxXrr9syGm1Cz7HD4r1dqTXyYN3CzAL1iTvnu8K7iUHms8hPKHkzpv7BUfJaSHC3g",
  "key15": "5ycSsNZtEr7gq67DmkFpc4e2YVuS6GDu65UrTMoRUj6NtJ7ktvscMg1P97dawv2HQNJw5JtJ3Jg636dacAEawziH",
  "key16": "5ryfqmTYRZ4H3GETsY197y9g3cL2JfUHBKnPTrQhnfdUF7DCtNeKhTSRthfGeNMrDnnUdZUdo6KpKbPVDyccVvAE",
  "key17": "3qBogcJRzaoVMuBrKnybeqkjR8mAzdcLrQ2KaDiPuevmGjGPVJXyqRVjXjpU9ASxWaJRX55rKFDVUwwz9yxi1ujK",
  "key18": "375F4sbfPiPNgXs1h1RCkn6WtFWcJpUsH5GKkHKxyLAM71iufU7vb1PtT7nUdJJM9hy41eRVLmeY6ixaeGhxjBFZ",
  "key19": "33MPpAqNSBDqjTY8E9aeCqmTwdtTJq6xpSnSf7iPxtm5U9CkyrWB4A6VfdJaBVQXswSvt1Q4U91jDS17Sd1zBXeu",
  "key20": "bqgtPDk9NMHwycXtNnxm71VgzQgYsWN1zkD6fRdoFhyGvYZugkE2xmKqTaM8NfuMwBBuRt96n1L1HZC7YzCkAcN",
  "key21": "4vWWdif2Bw4ZkCZQeB2URNt4gzHDSFT7Sy4dUTVX4NdcSo1MCgjtrVuc66hZgZ3oD3KY5AHco6dr9NDdpTuLUre2",
  "key22": "68g8P8jJdzSUqC4higH9UB3cBhJnydWkACe13xqqSwnvi8g7gDR6UMuYjZN24JHaEbbzJ9GeoaPNKoEY3aj7krt",
  "key23": "5fWtDmLkMKyhhF8XDjbGKDs1rMrkq9RdJHL7oQxHxLZTwTVdSmCJ2ZcFnRpQgwhXVKMzFXES3eMrQc4nuWes6bqc",
  "key24": "5zFpbEPskBdNhbe2faV94vNucuskCwV6rrTKvyk2vHE1E2ET3YJLqD5ZAB3CDjE1cbuwLJJvZKx2Fk16U7QFa2KM",
  "key25": "WD66tkaowNYx9izhqbqvqmHWaAKgVagt59V17LjxGBM4pxfh2E1RjkcizhrjBZAz4AD8LwHXNjGY5FDciMU7svy",
  "key26": "5ttLQCBjpdrjmyES5SLFmDivc7yb3dSYLmuLFNfXiapG4KpP2ia2c2by2GsjQVnBkNuyEseLi6NAwdTvJ9dRDuam",
  "key27": "2Qjgxuwi7bTbm2w5n8VEWiy7zzHKdvv8tV8tUyABT7cVC9K9PzMGzetZL8n4cDVKcwDTgpHs8md9LDVGsTFbJiRA",
  "key28": "4AS2vuVtZteV5pzf32egQksXZXpZuUCHohrQySvAjF4YvAANnskSEGLnVX6b6GJbmQKEQSqyFuo7Efjua7pexLvp",
  "key29": "nvSEcGiNdDY9AuqdNdq14GYQTSiNgJzjxuuwoRdvFtGgPLFXZzJHNaSsB6v9V3YxvxF1KXBHoWFpRgNZPkEUVpw",
  "key30": "3GrHvRvK12QRBL968vcR6qyiaSfy72ZbAehJo1yieWLJniGbzVWd85PPZC2MqExccjnraTyPA4qjwegyzn3qtmSn",
  "key31": "3sHedxyuMCe84DckVophKPtEPWbRrHuQxaCkhXjTERGrWGJotg78j6NkmoY7aS4584qTnHyPu8oSCeLKK8do3vUA",
  "key32": "3cBzWTjWzTBhTrDkpUAaxZ36NZtQWx6QCTtGMt7YHiDcsqHKCJDC8FPwXe9mFVwc3PSNuJrykSTnNfkRUh8eEQwJ",
  "key33": "65WyvEN6hqLD1euk57uU8ZqbrffgM9jEMW3WyVtTPgo52Jgf52ojkxYot7NfM5CZ4R95vLa2w7XMgqtuY3svCiKP",
  "key34": "5Tv5KxjNjx2BA6ouG5X3dQ8ARjcqXLrYVU4E3sozfsiXwnR3y912yd22p8ri6MANFfMWwk11FdVWkH8RprZB6iDM",
  "key35": "4muyPDdxkYv4HPTEU3nfGGKui3Jnx8ULpQ8ohi5mLBN3Xs3kUe3gDbNKYJWfHmNVSyenTbsPPsTnBDd7Ki1GJMTt",
  "key36": "2hBvEa3b1hnedR1hgT3QG9Gtnm2xFxArt7KfaoD3WX9uUoM8emNn674MUzctPrSisjXUxHt2dnd6sxCH61uCJq9x",
  "key37": "2SBKsoNMrANTzhTzNDtAvo5NcFburZHUwC8kFXprU28b3hdKzMoGDyDzwDvh5GTEq81e3k68mz5Ff7msEtEYr5YY",
  "key38": "4DiESNttxgajYBncR1nQjEWTFS4NxjWCWcpGAyjh3cNmoxpXuoqVoY236G3XWa6C8obGB6b8qLHubKfBv1PVi3S9",
  "key39": "4twn1D3RwZ4LXiR1uZS8UkzwJUhL4p6qS1y1929wc1MJBfh28WTcrnbsTAy8Bo8WKkx79XwEkUwWjnJiAahc332",
  "key40": "2HLABZGV6uQMRvbuUGB6QgPsFgt3sALcVX35hcG5TDMpyiETwquMRuGPM1B22uu2h4LneiiiH5uLNSbwB1NFRBii",
  "key41": "2vmwYiAcoiVDk4QVJPyNQDAYPpiDR4pYmGD6wtUCeJzDpmBMQXys25RUE2jgmRQV2KtpSBW6ZrfdT4857hvgEg9N",
  "key42": "uPUtZKDBWnY6Uj6aed6SkNwZTT7JgSsqRfkTPQoVVcWWsMp5SRM1wNL6SBCJQrHakwZ175242xsX1wgXCd8vQA2",
  "key43": "2F5yrgzFyBQyzs6TF8n3qPzyqKnmBWzGygpthWnEVpJfrNna2bnqrmj5MtZjsuVSCpE8zQa8G9wp7YcBGkWEy9pT",
  "key44": "54h21BWyHsdbU4EaabE9nC9bNYT2T6CckDi7F1uHCKH7zty419HkZn26WfxHJAzvNB2NPEV63Xx59dZFhgBsd11r",
  "key45": "3B3YJp3b4qsLvXBoGYaQwhMKuVdUFeSuLxoig7f4XQN4Ks3k3RQCF1fVQsDGVWSEzVa2GQwVSgs5dpdMJC2Wgjjt"
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
