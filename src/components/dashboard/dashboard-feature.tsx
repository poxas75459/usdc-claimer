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
    "57Sg4DKtEMz5dP9Yr6XKUUigBAWEdwjuay1doRgak9LJP8a5Lx6nF8KqPZmZtzksQK6eNS5eH5HnDpScUGB8Pb1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MzfsGKWaWz8781a4zXJJKiNkJjWAYyERizLdYzLkn2qSaCjBaWpZB2UzDC7HC6tW8ENKfrpUqneXNvis4qUZSoT",
  "key1": "2t5N37R8XxDgiXp7kVoenTM5FfspFvgcXPSxWQovhKBmq9my9YEA5MTP3ZzLszrvnjdcCTu7qzK7yvFQ1ucb6rdR",
  "key2": "8StmmLecE1G4DUKg8wPRVgPaiWKFUocijXhGbttzb8CLmzTscLNDGYytaBHSwmJbx9pohk3EZh1hERDAp5tgXY5",
  "key3": "T94g5yrtM5872MNv1UWeXvn6pHqFuS942vmYftqQqL33yKzNgFUYvL6CMsn4Ju6oDbDUiWr3jo49k3aw9zEUrPn",
  "key4": "4bR9oHZtpEGdF4YD9e17BiDd6mLbLoHn6dF8Kn3GnseRXLjoi3DCz9p5CkQ8xjyj6z6bapJihvU26ivq83757jqo",
  "key5": "qEDUkqysNiSDxZ4kYALScQFqNNecKsg6mLSzxATLioAATWDKk9RPxVLn5q4XcRMnkPuFXtfr1YzPpXaoJgmC9jS",
  "key6": "3sthXiCMU6RxXyCK75sqxMM7XtQ4GWSB5jMWjZcrWHqaoEukyMmQk7NaoxUiCCN45jDXrtkxHWUucnZZJXpMsfbf",
  "key7": "2cnqWiu5Gz9j5kyZswXqtuDmhaprMKf66riaCvVmRnWMs6SNfgsDvhk7xYsj5vAzz1jadpdQu7aKbyjkhfRAPYzS",
  "key8": "oBa7nhkmcRmnNhvDhgyG9DGLPKcgp4GxmmFskCFrTTSVzySsEsKgoetuZhjRKAYUZ4H6hFn6JEVXkMkE9NaPEMK",
  "key9": "55hmoPPmtPW4KncvrRQpU8CirzF9ubsN1jHMY5n7huMskiYtBEQbDjS2GxGHumT8MMjyuDagXpAhQA57LzBAV3n3",
  "key10": "5RM8R1C2UJ144SKaPot6iHxrEwhkmCkYzdLwMrGnzwo7XyB3e2JVooSTHSoDRTqQe3NnRtPAJFAZK2kGC13zibXD",
  "key11": "2JxQkqtoyjYcLdGayfuAwA5z4ucCkzJPLGAmRmyc1okTPB3Ceao7bK2cPJo2wgzhAVxh7oA2sWYV5NjfdusopLSc",
  "key12": "5oxtszt2rbEk2NxcW5XEhfEWYq7z4thV9aypntdgNGrKa5PdVPSt7npEwnMfMbwyviGvRry5N6f9bu2h6zmhV4gi",
  "key13": "32iLYTTqXeUVJpTtsL6pRCZGmnktCGr3LUxQc4EbpxhC2KW875v9eYbXskHUXZGyYiwJpcUo6aAf5gVdNCXQXazK",
  "key14": "34MYBwsiKZYJFComM1QDRMUyoTKdAuttS8q4MemooCaCJpmy2AcnR8PzK5EgUNayQX3WGkXopdGpYyeeD3XsdG7C",
  "key15": "22Afid3EyuGG72i6uSfyGiFTggTCkNQ3uHJSiVBKVxDcrTMEAEbmBd3LnKWanCUh3vtB1qgPt1C5kdrHpFckJGmS",
  "key16": "2cpB7CTUBVzu1e1T6BCJZfvBuzniZSGXK3wcVSMkT5wvhnm4nXHosRT8y6BRyCJUS9FesYcv2wJosH2oF7fu8g7Q",
  "key17": "4JHyqKaHeeeKgLigHyBFCbrFqRkCjmfqB2yF1ZFbMAx2o2qUsicn8iKwpPVzfFVNbL6WRU4WKYeYJUJXVZYq5u3G",
  "key18": "3KYFuwqsT1SwuAzEoMPDFgDHLQNsUvWzALsTGeYmrYMRXqZtTbFhX9xGv3HG7MtMj99kqyo1peXokaxrA8LSmz5C",
  "key19": "24DyNgV4UCfTyVQzY6vmkMgFLYANqSvBSYBiU7PdJyZsSMqdAxyG9P1R18ru9WoDpLL97GMYBKUuhMZoZ4jHpiaN",
  "key20": "2tfMNqJ9EqxcAaVafSuEjkyG7R8Jg24YLCEU8Hdoaji66tcDxsYEiLzM54hSBLepT2fCaWykuQoLqXCkyKMW6RT6",
  "key21": "K4wwTqMyKsDXdVyMLGsE8fG58Dcn2WZjgqHFw2GqMtNXntGjA6AEUdrq2UwxLKPiUG8rUUjxzS5BKAHkwy88XPq",
  "key22": "3TEyTPAoVxWTDPm9ncEu3Rg6jxnsVFWZ1MT6E8qGwSamhTPhGPkno14LDU9ngqJNbqVACnNpoU4Rc3wkSMfJUDUZ",
  "key23": "J83gmAbtatcXKn4nEP8JA5fNgTQin4ZD1FEm9rVDHsv2kuAoy63XG8waiV4zxEoVik1BddhLLtadvWmZEJadwjM",
  "key24": "vYq3HFSnJc58UtPREQ9Koa6r1UYWAKRjSyDSWP8o7GrP1Pjf4j6U2ASbMpm3qjwn2Akake7Md2hWRX13U7E3tuc",
  "key25": "2iWECpXoAkttpHAZbiezqCiZQhUPcjLA7NrDUTprsxkK4A1zLWtzPXFNr51g1kfaoSf59HSuvFXESGMXJuQbEBox",
  "key26": "4T336TswkQUBYDXF472vgV86jJkhSeXWQCQ6qwkPFJqeYZMPXEULJhU826CTAQ6arD8UMTSwv7CgbC3RojGpvfAb",
  "key27": "5B98W4Rph8U6vYpu7pKsdRtUULtxfsnt8ZRhLxEC7kuewa5kXdNKgVLZiHG9k3fB7bY2kMhUyYrFdCTSN4aVjt38",
  "key28": "8kFsNYRS5YDmatCaTV2Rb4CGYGJF2AhXDhwscjsHDUtPgbi1h5QDutk3VNiHUssKBVSMS3bbGZkNPRednvUKYbV",
  "key29": "4SPmGdm8yjc3brJXuZLLfqsvUQU6wrRGDe5YtQ227RYswV8e7ZAgWSeHtVn93mhLY1qq6sr3K3L8aAQpYbSYEtBE",
  "key30": "592FaeSCgCGhPgSVV3rSvqKtZ15oxjzTmDzFUmy2AGPBDrWVjdhoBR421wVBm5VQ5AzobtaUwNx2j63ZqCxkYymb",
  "key31": "4RhuVuHGR5XsA71Kutz1Fed2cUC9BUQxLw6V8SNKPZ7kXfXeFkiTzkzduvpMq3aEeLXFN8jyEwgTWeJ7Vz2HZM8Q",
  "key32": "r93WEi6krPAKubZ3dRcbZsrM24zGBaExYZBVya7Rx5zy6r9WW2x1SEDPNUywJMPyf6rEX5TA268gGVpTdvPSZWu",
  "key33": "3Ws6mgWvbov1WWiWQ8mMS9zPpKa3vQPzvC1GqyZtZKNTd3pqXZma72oXrekDhsWtaMh1KkTPSRiePB5QsDuKLRk3",
  "key34": "X7SvfcLPy5zMCKsBxBZWANYxYs7Bhu7p8HNY2FezVXak48xc5bX3vQ7Bmys89et4MwU9aNYTfiSEtnsjkUhApRz",
  "key35": "dvmSngVfnp1uJFfxbnhXqomFyNUTRVRcMRSgm4vhbwvheLiuDczsGnTYaXzNMqwsgKyYaWVBrPGxE91qGDBN5Qi",
  "key36": "3Vmgs1iTdvaZuk72sVme2Ja7JDrmckWTJpmyqNnVnavdqyTNManXNcRaCLoxLiBLkW4Ngdzsv5ZHwYbWT24SfTpX",
  "key37": "4K7PcTPPyX9tQWvjsdCDj3dTQbZFgaHP2HpG8PpMfQn9JLBLd3J2P6BnSvJqafZR4ySruDPzndcnTBfGh3cSDR9h"
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
