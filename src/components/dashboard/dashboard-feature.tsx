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
    "3acmMwMijJkD2b3r9r8SMQrcFmDvjCkzM8nN7Fx3gsB1FBz2emsijNkp9KhcS4ca7WDHz9eSdRnU5Fk88pfhJRm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q4tf8M4r4bhSUdoV6JTF8JRjYbiqJLNnJyVjoJeY3SzRu5DRhdm85WfTMiVasurDJj5oXe9r9asB8x9Kjz2icr1",
  "key1": "37fihKzjo4jbTw1RmRbEkD3fE1e8yw6YiFHNeYVWzwusJNFsixHbpYVd4sqTAUbfe7bBBLmswHVdhhPdmja5nuvi",
  "key2": "5nw9jEyB5f54mkcn7aLEB4YExF1sm9Z8sR44VwkXhwaHfs6xMeWBxxiUXqPDFcCx6dg7U49i5tLxRtP9PiseRSSz",
  "key3": "2hhBHvi5EJqvKBKUbXrAXdLTdR7ogbsYwjYtM1hbwwomzBUeuTEHHrbZD1DvpkfNaFWC6R4Tu1wndTu7SaDXGB5n",
  "key4": "2NJjdJddBBBhPdVDonQDAS59SEmywN4MkvmFGYSB2LrmYz36TbLdJFgcRJoBtfv1oVHuCqXFnjR6xS2yJz6YkwMz",
  "key5": "3EZBhkjYutPA5y2JFs37HDcBEVVDkt7tdWRou8QaB8Cvqjnmz5MUbujTifLPrJcUkJVDwTA5tQGZCSkp1PfSXgnk",
  "key6": "2y5eQiN1rdW9H1rWG19j6T15Af2JfXzCkC8vLrEQvdQUMtEMunJhA4jJJxaQWXC5xTBVdmEN6xKxyTsdXWrcdEHW",
  "key7": "5CBK2M9pQf68fnvqwfEeeV4Gcxz63J7Z6Y8b56MomGbJoX6XuGXCoDG5X33ok81vDW8hBFF9EQdgEUEKzFNa2eYj",
  "key8": "2Soytftpeoxhdg9eeWeEv1FTRywcfEZfMcaapxMH7TSiX91AbtRZM2htfh1jo88nqkGUHtEim75sKCxgibKE4yUH",
  "key9": "3BwvV6B2H5x145Q92Ew46RMrHHbjCnpxJEnrmHP7oKw2fUiT8UhzUDDy8EqbXsPjhkAovYtZGV3ywYGKjnvszLXw",
  "key10": "3QFcFfBPE2N6EWT7qpsHTV31Q7YZUyAsgtgDiySNGTCtKYCS95oKixTkU2tbVCQ5cTP2R5NTFKuXRzTKPbERJWxh",
  "key11": "3UQ7iAjFS3h68T1hx5qHxxNFb7oLdmE1FaHQt2g7rsvG5WV4v79NhZAv7YCFMHhFkw3S3pJ4uLNBucK4vKcejwpf",
  "key12": "5MbrJGwEMZBzssp8f62WjkcGNLgDNbb7b3acXwMGqyrwfG2q9JoKpZjggi4SisbenmgWikbU59f9vHXgeKKcG8iS",
  "key13": "5Bodqbb2T6Xi96yoZBRkMBgH1MQRcNCtsoy3sFaWoPmUJwbmaCD8boMuTCCj58G8dbGY1VWyDGFkWQeZcaoHWgsR",
  "key14": "g852DWc2qD2r1CH95LzFK31ydSfgUaEJJkL4sU9QnihJfqJUfSn1EtYESgF2Yce9y5NCdsTo5zjEuykxJh9SioL",
  "key15": "3xsMDCF6KzTZWgjFBh6Lo5ub6MrjJ63JCYMFSCgNaWBy4Mdw2b7F9fRy5rg9VEP8akwxUhyt67zx4AxmFp4BLwRx",
  "key16": "4A3bpikqidPqp3PXue7Wqykhr5bbkNshDUp6qsiULC7aG5hwr2pDJ1iU5jG21GAQoLPZpmmrLSERmp5sK5p8CtBt",
  "key17": "ygjWVrYNDpH23qAozd2MoBQjBHZsooSQuczPfqmZxLV2rUXs4q9eMxiduQurEH5Hokj2D6VcBxCKShKsovdQpt8",
  "key18": "5MiAkH88pY1BwFmx86z4mvBWBDWDrdUVgx3BPjeWNveqZXMaJNscJukRekXjKXVoDQod1Q9D5os9A3nwRNMMQnTb",
  "key19": "3nfh3iLgeuDRhu5DwcB4e1fGPVkNsCZ6qdrPWg6egRcYps8vTwe9ywPEgJaKZDBTb7igemp87rUzWv5HQPpVADR",
  "key20": "2r6A2hf3qGcLpM2TbzcmS77URR7ohqHwqjUKjfhvNQVaY7uQtmMN3rrCAeUaiyA3AuvFpkh3Srw8srS9H2wagJBP",
  "key21": "Ai4HeT5DzeWFi4TAzEq76cfyXEccJdY7gc5xzn8tAAUHHNnNcS1atECtwi75QB5Gy9HdRFhVVS1qEubyUcEkRAJ",
  "key22": "2yE9jitbS7SnKhTSTksaKtEUacBs7caGfYrZuW2sAhH86YNHcfQ5kM5iyoq4cbLe6omqbUaWds3hZgAVb2XfWS7C",
  "key23": "GVzQrbb2UmMgDHMS83mNJMLqy7vNXrERY3T6TmXJan4h811hpnxbddSWcgz4XFRf8b6BYWKEe9PdtgrM49GczVX",
  "key24": "2TYzmyTGyA3ZhaG5iipSaWf2XoG5b2CS5DPirvSVYUEq8fRj8GAEtNufFYbKZTtkMRVVMgTF986tjZJcFd3mnuh8",
  "key25": "3jYCJ6XcAe2sG2QKdP7FM6NXEAgY4GGLrNxqW4N6vRykb7rtavx42ZsRpAnMxQVa3xpsCEXx7Lrb3bJP1fiP7jwV",
  "key26": "5YD4jVBxuNjMaWqZ8BjNikdaHhhfDDHF5mjjJRB76yV33GEj67YCWfCBzqTGtL16XBSZpZTNYapD6gqkHELhbTVb",
  "key27": "2Asu2PXGZUrYnUiQ365ibZ7L1niFXaZxqw6EKEZ5SZegyw2RBeUPcRpJNXWFetbUTNcNTnvCe7hAwkU3qCyCprK2",
  "key28": "5UMmuZtnVgNS4wmytzEjosbjvc42rZYxAaXbJDEPbhsirC2aR1f2G5VHojcU7KQHmScz5uNVHfg4HZFJxWBeZvLt",
  "key29": "56Bh3aWVzJWHc2qhsHW93TYsJbGsaNmuPVTLyb5Vr75UAteUCEPdszTgJKBGpQjEMEhsP22FwLWLm8cJf3z6rCZN",
  "key30": "2pDJn8f6uGBAxbkJJqksN6t6rfsyQjQzCezpXEN49puqfBQ3QmsFAb51CXZEAwccX1gv1e1w1V78pPUpoko7utWA",
  "key31": "XQR6ggn21PZC8eZ2fcqnaEB9p59RN6iE8PGGxFmQckzBqRRffV7A46jDBSjVAaW299B3MuPT2J3NifHc7Tab73y",
  "key32": "2hantmxVspbEgKpZsAm2bzNvbZL6Sg2szkEAjan3LQfJZWXX3JgCZXEJ87huBfXZd2F2Yuqzo83pyn7jVBPjjL4g",
  "key33": "4TYsJYxPbspxHNuE49n25hncb4g5DtH3xBg96ssxXmc7DBgq7p2yrYsPwYxZXLWoLahjM6MJzeomc4C4HehBMEsu",
  "key34": "3pap6RpfsP1HEQ6Y8HdCEpufYiyMAHgV38yhpcxJtRTtcqwp5caof8HrnrLZ7wNit2z63RsrafeCJ7nCtY1d411K",
  "key35": "67UquVvEgxWheLsNhFQMpT1paja12fj8jCUhyVpp1qSQaeMb792CMv6ojHceSx9UFP8xMk3CzEfDXiWg4ccQxpnN",
  "key36": "4V1N2CKB976hUjrs6rTeFo5LkrRGKwpsmbZBUNtDmE6qaHUNiy9nCFcGfAPyRUzMNwKExf94YNPVRfkMGp68jLAh",
  "key37": "5ULppnMYrnB7FnUmRYdbyuWuAJCiJnKTn5fMHMPf2g34NLM6BtrfdGMiowhCd5FARjkuoq4ZdqC2azr4ephmTfJ4",
  "key38": "iPbs7A4aLi7eUY9ynPTnXFDR26JzUE5AnXcTqyCsR6AAWWjzjJNcqSHWKhBBVzW1Nf2RLRk1rZfRL9zsbA2HzNc",
  "key39": "5DDF9evLHLvmG7dt6pPtg1ZaTNFebMNxKxif5pEhbBs2kgZMKsdsBhwYM2KfCwLY7KfZ4Xem27Czd2p5jib5crL9",
  "key40": "2n4WB9dcxSSx2rfFeC8YNDrQfntekzhW6A1CHS8EHdJHAVYUu3vhPzyTUDPrW3nykgXyxjUWVs4GH1iB4VZuik2p",
  "key41": "4tPXQU8zWjkWZXBsjUPtTGbLxMXJPtRXK3gqiMJFGJwcpsDcaBo3yWW3b4pMHa9MRjFq3oNvMe121sDMXvUCrrK",
  "key42": "4XLyhYSGfmokS4K1635bDXicMLw5ipB8o5YQmPtgyTsGnmcqkMADJWyjmjSTXCSbjJeyDuR5r6PGdmY5J8G555Jt",
  "key43": "2prH56STWFGohLNS7uxPvzpsvZ9nCE3nNG82rqQ1zufXaaucgneoBGeFtLkYWu49d6PqA3rCmpZof5Lm5RucWyWk",
  "key44": "5aj5b9q89MRM2u9nzermsbKzMwHLyLYts575jkHCMjFbhxq6wJ22rMnXMtsEVZ8pDdxgpVMQRM4dCh2wCXNXSiNj",
  "key45": "5RmeinfssW2e3MmF7rYmSxgR5CH3DVJdnYbJFnCGRquRDB2jfatgN2dV6qeUCJvB9aPMbHfzqapVP1d18iXE5x9X",
  "key46": "4gd5dKotTwGg7hKCsqWVJ4D4FzVJ6HjnDm4sMiCPiEtJWD6WC63xe8PBekifGkwLkm9ynsdn7Wiq4HsRoCzko8NG",
  "key47": "3Biv9xNRyGQHMnRaMSxhmTUrnX8Nj8oTJsvVQWBPfnCCAi4w1feixWhLAf61FhX2wSqDyDBnZ3LLgYh4Y7fGxvqf",
  "key48": "2vTK1LM5YJzYZsrRAnZe49frE6oLwNkbVzp6BAdsRbbVq66eh8oJa8Y3hEfqb49wsSmuoQU4pszKY8CBoKuxNwBi",
  "key49": "Pnn1VU3aT1SYRcFvkhpxBPeJKQ8XDxqFztNXpJ72xsZhiyHRpfG6UKpxzvAED2P3X33mcMuXLzGzuQuns2vA1gk"
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
