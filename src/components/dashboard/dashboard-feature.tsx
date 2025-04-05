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
    "3v9XkWJrUaD6U3aZGQGtFMmcjN5ePgcfLmnQ9xAtYQzhXANhPBLjCm4bNqwkdwndooCb14S4ALXKiMAZ6CYRKkpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tmcrTifgvYyRQ7dsCxNRbszxnTPDsVUyZYYPZaQFY7taNJv4AvCxmK2gcGmN9vfaQbaE889tZTCJMgnxLKgGwMo",
  "key1": "3M4vPtdpjaqsAZJV7VWDjiGYSSXAqx8J437aWsb3jDoPUnkGDLmtDV4seXyTcoywHN4nMTPANB5M6Z25LLa7NCMg",
  "key2": "QYzhZQ343cymfbtEHuPMZQouYSex11bxs4rHPEWojVGpKjfUTS8tPWic8qTHay8bUDjtasacN5FQCsNbXmDyCaz",
  "key3": "3TYcjx2zHF9NxgZ8vnNXaDWYuQc5QHrv8mpwZTdeQGVP9ckjvnkddo2GMH3MAkvfyVGZDoHQmEiZBB5YxGaskrNh",
  "key4": "2kKnyuyaUvBK8eJDFceywEHxeUAhwbm9Zu6nY5ZuS1Dfez1QK99Nn54eAfRcL64E51uhj1U9MGFSPVanDKG17JTg",
  "key5": "4HsWLzfbjAB8zvZXoFZ7YqTDwwFqk7ktiQVX1wF933txhWZeC2ka4aq5AcM24kTs6VfXZyTNQFcRwR2vNmTpAVNh",
  "key6": "4VMXx9jkAu7W8raRZqfaJbbWpcGgT1y1GRua4v6GM67Qh732wYXhug7y5g9u1MbSazunYpgPKqbheqZG3VcHKj7w",
  "key7": "2H9nc9Nu5Sk9sWopQUbuzBF87VEbDMRLpPsyJraxdaxCVwcSvgGZWZsTDwcfuQwFR85WbjaZsmhrc3a65BV4Yjd1",
  "key8": "Y71euoqYtT3YARHGkAvr5CphvwbX8MnFrkHEkBE4ZwsJicyqBygz7Q4TERQMdE3RbupYRKEXGwEtxPiFk3Wx26M",
  "key9": "wdLANxosZLf1kTkhjEve6KVw3DZ4qX5vXvPxTHHVMRQ63V4GFEDz1p2DVW9aE4R6kbwUrCtaQUYaAce2RC8AKA8",
  "key10": "55VxqxEW39jfUWxdKXy8YVfseGMKx7P294mJ5QzzbT4VA8mkA56mBCgAxUwgEkWStcdDsHA8cK67CgBRF7CAXwwP",
  "key11": "3h3oCfANXwJT7ZYRa3iVQ2MiS8E7Pgg84rm656XKHtGqBr95kyTpVGLS6VtkMjMLMXLpFvGi9rrRUn8UN9xqzjKL",
  "key12": "4yBVxV8fhQPHkK1BPLa73nfDevVTstsVNaKSfdfZaVDDtEJGSuyPBP58s5LVt32uYsKZ5oVoYk5eWkZBpoQqvkmA",
  "key13": "4tqwjJDyDERMht83CdCPB87XVwZMv12CPMKNKX52U8Tfxqn4At2dAtPmuu3SaPGwPyZK3FYPnyGriFb44Ue8jFmz",
  "key14": "4HauzaLJYDmRyEzkmzwXLgoEwgz19PiW7qbTkriVNhUqt438HQuSGpfHH4RLwnBNRchacsridZD6ezUDrKNDJjhw",
  "key15": "39MjBVxtazXZx2ydrFKVGoM161Z5LWJoktjsoYLXUmb9Jk21zMRkahcQvR9quJcd7QqPnCJHdXmcEtVwqQ2mUEF6",
  "key16": "4GAbFfWmXReCDZqGp99sWBMryMyb5ut1QgPT8oLZGU9Rj8DKQmE2dCrjFAqPMxGyyBdYSY63fBQ7KiVWWDUjw9pv",
  "key17": "5DG5nSBGZ4XxbQtkzrTW9VQSPUKZaPuiMN5k3WJEBzZoXvuDKipTL9B53LS1WgYJQaNex4gqiV7bQPiPSQDEQj2c",
  "key18": "3uS6yFX41RYXJpG5CUvfw9JLAndAQTHGUhpSvvcbNV1WktyaDXF2kUQp1Sr87CqpAhhH1Xf69LAPhnLFPHMxpfdg",
  "key19": "aiKDyyifjoaj7byUKBw93KTn4XaHnTbdHfvUVXKTM1rdUgmQkVPUBxdauFF4V3C5nrk8qQYTS7dYHMaB6nBS5rF",
  "key20": "5SjbZViF4owMzB7jK12BZbpFdXgxMeHDL7MHPt4jVemyDoFTzUF17nVWZauPpG71PkWgTtCmP8MRRFTZfrt9QihF",
  "key21": "WLcXFaUWpQd6VbaNWK5BrMNWLPjxRwJ6Na1SyXCAZ6mu6rXJLpZTm2GyTJTDekp4ZqRXbsZSHX3NBqpCksQhsP1",
  "key22": "4CoNAK3YHK3fwMkrEDG3Q6St6jx2Bo3nDoPU3dgoiEKSPSFKvfkun6yfnKUqBJBeP4d3sqrdJXcps5dwspkzpsmM",
  "key23": "qAh5vJBnmagWbtt8Ew2oXZNsFhRjxbr8iy3QNF8WNEQ2BUJmfPirFiD3zxwafKDHTV5AZyDm2eWu7dhkZuRhBZK",
  "key24": "pbSVN8XAHAJ2ciETbsETffrcxnZJesd3ncLhKe7ch8Ujg7RnkizBbTREtMBG4pDDtQpZ345M9fdskCoum1socPH",
  "key25": "6D6yHx4XvAVre4aScxfgs1nTwX1Ju1bobUUg57BiafKg3PSjbXeLutHN7U7KQCZ68GzqmxQ6uGnAHteAjrt3bW7",
  "key26": "5rQnEhmF2iX73eCny1UMUbCcdBqDgLw9Bfh8esc1SGMZJoMB11ikCmsiU2D3qM7zyjkEvn3kZdyFEcPkqGcTUumJ",
  "key27": "2qhwqisrXip3XhQYxCcAWDi5kPxDGHtRmMXXkFJFsLgsz7C7ZiZJ3RR5d9rCKPEiKmmXZkJBRbcy4y7k3S4ubPm6",
  "key28": "4AA3Pf3u1ayo7R8QVyfgvM6gWY5bbmonNmQrRLkEhc71QVHvyXrqrXokEs55714Qgm5pHRjZ16m9dMfbhiTB3Fx9",
  "key29": "3dAzbqkWEEboPMgXHZZk78AyHZpU8JkLNXS39WzKhavv2naz9PxSTUVx7nZ2NaEkNSDNpZH6dKsmc8SsXWbzyKYG",
  "key30": "5HFrEPJiNyqUVkMXdnaFbzGjbVwkyK8eVPBEqrmNCeMg4kmyzXbA4oSQyF3sgv9PapgEp7Gx1jRJvPkoNm3yriKF",
  "key31": "yegVEnboCKHTDEDGE63mP6axcnwoqThRWUBRYPJBESFCtwkUjkSQzFAwmqZ3ZbZqrgoVDaNhNC8CvqVeYck3pX9",
  "key32": "5Rzps78KbMowEMjbfP8PsBURU4ShcoHnFZ2gfcgijqMUEujXh3SwCZiNgJqDyDgSd1DfHh6UuVLiKYVygzSgpz3F",
  "key33": "VqpzVuiweng9GSgGx9yDVuZsp8tc5SiHcS3njwHELbDHQJ4mrR2MyAi3XWeDD3TTxWbAHM9gYk2EQ5kSA2FmKSk",
  "key34": "5Zo5v7oySaYBHVW8E5xsb4nFCow4Coc9uNdfSPkc4D21PGhwSj2d9VwPAtn4G17YWAyCMhPbq2oemuknuFo52NFo",
  "key35": "5pBLCrFP4NmFAngCK3XSBCgKuHCzMGwGFkZXBTsPTW1UULDxC91okVYd11Q2QmC6MARJfvsYBAViz1TVsyU1f1Kh",
  "key36": "5jXu9h7hYanmYXz1xsV9F8tt3E1EeEHyJxiqu4PRpFXoPVCb2ahpL12AhurrTZkWMmKEjKpT3RT95k5YwYSYGZJ2",
  "key37": "5zJGY53yHR7W6VU6DNkwTXTepxrnpXa4aJD9BfyFa26Wv122co6kpR5tgiv54mKADfm4VRZdEVZLmccLQnBYyiqk",
  "key38": "2pzwPENrZYWqMTScfRJg6CKoNzjsmo39FZzX8deaTRRYK8Y7UFiKCxnUeEMKiHAnThtKTxeFQC4e3FAPaffRTQ1p",
  "key39": "FvtBfJ31AorFZjDDNfzdM89FFQEmnTNgXRXkXSsV78CGq9jrp2AwivhEikT2s9k5Q87ZZLDKRzahwUK19DKWCKd",
  "key40": "jn8YxNunvg1hMbHRS6RaXxAgiuDDXSjuVtyxeQdTZctCK6ni4d9M5L4PPR7zs95mp7juCQam9mXajRhKba9SJeu",
  "key41": "5GxsJvMTZ7GzwwicSbJz2reXwCyFo4h3wbe6PCiGdnXM7NF7mKN1orquS6AwfdRs6rb1nCLty3qy9L5vwwrzsHWu",
  "key42": "4tLfC2uu8UciQ5knwPHxRNC1Kzj6iD2rUhg2K1B4T7CTV3MJT5DHuadWKcLyhJmD5uXPpDdi1sNEXj6YcLJwctJ",
  "key43": "4V6pGFcUraXWLZDcBgFU9Fua6sgDhXBBzPKQdu6C2R5F45QAeZ47mr3z1m4LH6p4pu83QtFZL4ZvYumTLjcjc6zg",
  "key44": "4frjJnh5s6T7zzLHDvfuvaBXjHrCJcJjLX4VLd9huU7UPw9f2gDDn7QVQkCrisNaMtfBmCLcis8ujEf9x5Jsnhsv",
  "key45": "3mgaA11F8hZWJxzLKLQbCNZioCcpFrnoVBeMHoRB1TzqfHeYA3GDaFQWSRF3w4HEpKMDj23fe1FufJjrSFHb7QDw",
  "key46": "31UjLzBmAPueNoscELsfKNkDj84T1TNd6yL3uS26Qyvg5k4ZpXeHpNAsCBva65p5SZiKmHs5s94F8QycYdSWR6J7",
  "key47": "SnZqbSTfqwAJswEccDv2gS2v9SkV6yy3sVeQAT4jvLpwoY2c9gcgA5CXsCcxRcQeb6RJ4BnCRp8RzXsxAA2PwAJ"
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
