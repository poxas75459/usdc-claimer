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
    "iNL1ArVpCTVh633KcjnsbVtHM1mGT2mAYS9BkYN9n5U1vfziEHRabQ5wcddyEUba9X5WUMMqLtVG1m486xzxfV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e2XEGb3UV25hg8hm4U3eU63jw1DAYMb37gpwxf7A9YLNkQRy5LXbx7AL8sbbtgSvT1JuLoVSLK7pH8KDfGpossz",
  "key1": "38bscCF4YGuQcHH2SHrasgmozAta8SopcQNK2GAvTFkTCK4nS8nAZE5Z2NsRGjdWf3FzR1RWWe3ksYUoYBrRqLru",
  "key2": "XSCWztUM1xKWHZZVHUtxbQg1PzbdRDFrku6C6r632gGPLGAF23Z4mUHV63yCFtub6EcnNQ33uog9HJ7CnBwjAJy",
  "key3": "4yBTzD7JQZEtCdLC2rP6p182v7tTKh7JS5b2umygaLpuHrVKEjcqDpYqQS1WUrZ6aZ7qr21FYvsdvvmWt7fPt7Z3",
  "key4": "3bqkNmNzUmzX7PxkQnkFpc4ED35gBgjhCRs5VZ1TLCVDvG6qtTvLJGgRh7Qzb18LVUva1xrKqyDMWkppRW423X1b",
  "key5": "2t2MjbFxEbup9ASVGmwi1vN5c6M1uUFJDkKyo7zALAeEvWGAcm84i1uuy6ZWdMrmMC68ESFt8astLGruVRGMJZjS",
  "key6": "28fUK6ftkFogGrCdjUDSbFQPSshj2N9kcHvTawcuDqqSv52r8W8wKfp3ozTWba8GkWrU65iTZs5RW2ePURRcASx3",
  "key7": "xErhP8gFh3DW5PEXuhH8RyowK9xiM2uqZtYrTsSK6o6WNHoLe9vs6uH9Ldb3RTuC8eKQeYW9iDmPL7773Qn7FN1",
  "key8": "3a5th6pA7XtA3j4i3qSka2LMb1tD9znaKbmcfcQprxLQikwqbi6jJRtNnUFUk3VrpoYhdpG7SyQLqvixKySkA32i",
  "key9": "3BDDp8K5YJkezDkrAzAz1Po5TMvQjZKoRkF7c7YjucghhpT2gGKCrUwk16Tf7raAg4txssCMVdz6YwGsHGtkQoop",
  "key10": "3wmr1LVaKuRzgseakaCJhJSAp4AAga3fFUnreDxULUraoaKFzkMZ5VQuhh1whojRjziLNNi4kaN9aKtTTR4wadTE",
  "key11": "5e8dWUqV63qiQ4emXZfYNfxHtirMYeNtfdoGSxfxhtogJ9kxb9ijp35s8LAmMp6fPtRTMHhRXVWpNGQV9rmtLbV2",
  "key12": "m83a211dQf1xgHvNSRPx1QuVw7HqCUR7Pc137hecUeXSNUvWiu5PpjEVxWfKs893384bhEnrKKcZJQs19ouBX25",
  "key13": "wHfnPJV3GeA9TzR9d4TrjJqyceUxcaukpK1wGPbx4U52XfxaFXfbwTBWeyeEhPDkyGYmxU3AxmHDJVQ3W2NgUBR",
  "key14": "2HPZBZJ691ZBmPZG5SiUHU6U3YXkVCeviZxo6CXejrczXsAcFN7UBjbAJ5tpUuTjskYAPkukHwJ15RRhupbRdzXK",
  "key15": "n1uui4wf4Ar1fGNPnaJP5JAxaQfibT1ck2ad3fHBFsLKykqK5rAwrECW9E3mv7EM3PyoX67ujJwr3AqLoAEhGgC",
  "key16": "CjdbKQGFL1AV6ZxtBz9zfR4Aoiim5oGkdXJc7MNkEcLGxr2QwowLJWj4YvaSqtU4WshEkF9PTryr2XeDjRYXQP9",
  "key17": "5kS6KXG3uAzV7pkmKCwDttXkHFJZihsLho6e8uM9Br75xfapxZkdi7Yk6WKqhCWfifHJaw9Pw7TN7hTF7VDuHhQP",
  "key18": "4bfvPsJi3bp6811MG6ybB8Ki9rXPv5zBMkmYpf8HQ5rzGtAWa4PjqxtJgBJWqcGLCVkubZn2ZNmoApUj2xuRryB3",
  "key19": "2DKpQdyWppQXshL4xdJJ5h9Gzb37QiBMb11Na32QgmXqLq7Tj8WYDYo7rHAJNxnhZPjgoyWomaKV6ZBrx7QwjUPa",
  "key20": "3hGdG9jev56owvBNp2vN4Jbs94MFUriWkBo1ontqLecDT2z1Yuf2i4ZvsaRZ9oWMqQg4n5FZxuEdwpVxSErdjyaj",
  "key21": "4aYTNg24BqjEPzWZKwmsjYpp4Rq6P1UARfBCUZGWtRU4zMqgZqvan2TGgGVorHJPShgQNXfVzfVEWzYV6iEuJ6dV",
  "key22": "44PBfwAd7dM7XzLvHV26V1NNBkbugUHwkf2oXu9B1nYNqqqaS5f7BS1sbUP3WKAUCFtKF6Zm7ENmHpX5gkLRaFiB",
  "key23": "4sFLSePjLGqF6U1924Lxj1zTkawNkfCQbP38buxWHCPv6Pw62yX6GMdGESWtKutVx2EbiBmVKHvDbDMwUzrFiaK7",
  "key24": "3tMNrJ34vvuZasVkvFF67wwJzzfXKNaGdGbSdrZnJPufeyYQaB9iymJUAhWYPz9VnNCXNp8hs6WLYn1KhREZcCSw",
  "key25": "2rEVZGS2BL6kdE9Xpfg7wS8RQfzo6eKnLw8civA44QtZntpbKCBGphN7zuiZEM2Seri2eRUYZNrqBQzFpDePRRD3",
  "key26": "56voQMNNtitgBYWTx7FCJo1RkVWMS736uo2C3HRuJyHeiARpiKSwXiHGdxWbhU8EHYDdFf2C154MDeYXJr9gjgbR",
  "key27": "5fgGFCv9XHXByzfqvkTqjCJMweaa88xXdpaRJLymW4eRgcncD5XAcLAoBrFZCSM6C1U2LR66LJehQPEP742u4oyd",
  "key28": "3DtGZMBiMihxVUzj89GncaKAUcvSYFPBHwfPpuFSEE9B6qCFFVDJd5Uzk4LST8GbFYj2PgjcVAQL3zogu1uiDpNH",
  "key29": "5GgaeXTwAFifKu9YTQmXKrUiQVDrdrXbUubVApdH4wkDbBfT6zyr8jnyMcqABAj2NUEQSxrbk49JC8WCN2UuyEyR",
  "key30": "32XtMGeTd32q8tYEEckNPZztqZEvgo4GUaJRmhUsQJbAzuZKNNCvhPTENp7RPS7WBbHJ9Y4Dnup6g8P7tG3GCBik",
  "key31": "4HfoMootQowPKdXxUvWmhL1sbqcsPVXreWFTrtaoubL81Nk5FxPHK7QN6k3WdMsGwfaak6mwJ4bxRXqbpQuaohkv",
  "key32": "PnYo8YoEATUfbjkadzLeoevjSXpiXvM9gYDbC5dzU1PTuEqy3tMP5M5g3ktTc9cFNtKkjtTxBArxEiXpdxnskHG",
  "key33": "2mxTKaTbWbnqBDoETqFrnPBxkvCuuHj5FQYv5LDRXcEJuS6TwvvfqqGvgtXQyYSkz8krUe8w8b7NvNjgcgDWaB9"
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
