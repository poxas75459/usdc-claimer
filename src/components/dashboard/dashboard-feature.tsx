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
    "2ZFLVBi6JmCEiv5SpYAMyYUkBEFTiRTuqaJJF5amqi6ym4PtLiesmq258C6ucVhYkeetnPmJuTVsqTMsi5RNaq6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kXsAsQLaHysLoSWiZG4qMe2Kt5TU5vA6hjBpBRiEKvkrcZXb4wmcYhmMN8oeThs2nqAcyKZ8DjhfWc8be1FFih5",
  "key1": "sWTqdoLF7c5anJ1NjjYBBV9eCjDCrn94vgtWmFWBh5q2ikPJz3KUBBYHw679WWuAbJhmZg2rpaFwfhCTUqPriiZ",
  "key2": "xrgze8RSK2cKFsK6U7sqSiZnDqAAjUowmL9kt7sqH19ayaDnrZwbVhUYLqKVKMKCi5e2iy3NP9RpsLBLnvMC1sd",
  "key3": "5RnsxtaCpUfN9pKroF6ZZcBRQbMyJEyEgP8S7Ey8NcjaRzK5CsvdhAUMUtVVagMh16kSuMjsZr9VSRBW94hwMg65",
  "key4": "qW4PhkvyakqR6B4gcQUTXRFcjVZT2KXLkdxHTUZ1UQ9kX1buuqv4mJmw9te39XN9MTbxnZJ5kbBxHmvZV4B1CLv",
  "key5": "535Z41varpdXCg8S6u7RiCRYNVdwm9fqcpDUhmXiZRy2QoAFFfx2ZhtnCyt46bsRUJRuVxzKFhti2t4RDrqfeXkD",
  "key6": "5A5sFqhaRzUp4iCZeMo7BWiNZQgh55aafzniXsRLeRhVDPGdejx9DZWtBJppe7EqLGtPJW83sqfT9X6XGGFdbBa7",
  "key7": "5smH1jMPrHy91M4zi7cKUk168Vk5TbHmBv6JqqLKWvCWbUpiuqDgkRAutbeMhwKPdfKoFe76nZHqUVfY9jNHogks",
  "key8": "DDKxobK1debWDXPE6DT7NdeZw7orgapumdPeV9B4puYLp8zJHQzA7KvFHLsJ56px7os9syh8bw7Cn6vLumqvtNC",
  "key9": "1UAWU3JoDkedrkVqL8NrFsNxAF7ZUDoiQX8AgT9sp5YXRhUCuimvGqQ9WANBF2PSiSJn7tVWVNmXqDzJwrBKo8f",
  "key10": "39yY6ktzwsYXuvnT1TriBKE28jp7fzLg9BvV5CVGXAo6rPPopzLXJe528HvUs4YUedBuEu4KZBDWjS12x7rkqpm3",
  "key11": "4MG18TBE51Nea86V28oMpTdEc8KvyyBPVAA4EumF5R1GDmFfF5LUbD5QEQNGJ2Cb2MXwTujn9E2rQ6gsSaYTjNqE",
  "key12": "64yz5z1FGM72wo5DgLrYumYbp8ixsAkxxUzUf8WGJVvUCEho5VhQNFJVqRbM8pGFXHq9qmPgNRCtNFiYUKHxQyqw",
  "key13": "3CZjUjebsSxfwMCK8GWxC5jaCRaKjcyLqQDSEehu5x4zRghvJDDcmuraFCpY8TvA8q9hAmMMGzHb9wuNeH3YoYne",
  "key14": "5b4AD6qXVC4tzP7TNq9pTViMwWPS1kPsbCzdBhZiAiq4X3uYyUg66rjxGCHFcVCFK76wwHEQeds4dwmE512NSavQ",
  "key15": "24RMjF47DCZT1nR4VyaQKZcdtyK9KdntiX3oyWwRmGc7SNrwihKJuTiejQFAxabzz7j5Qn6uc1XE317rYin2AHL6",
  "key16": "66oDSSWgPBvKaXCeKJPB6Be72anHsF8mJGxSFYQDdMyfJF7bHowctm9dfERMRiBcXDzGXJNTgzZ7HVM6xs1yZNTs",
  "key17": "36urU8myJEoQzZdFfeSEWNyN2PeR8mvBtCQbTxDyXikjFwtPPu8rDEcaGjBrTjLi9ZeNukPVoNoQiHeAkQMeGYg8",
  "key18": "3tgXpU4EXNo6vc4CfKyik6X477ZhHqnDGBbk1NTLKxvyqeNiW8MaNrqfQvMi7H9SWRx1q61UzZnB9wJrMqFB78gC",
  "key19": "5TiiA6KghWXEAK3uTWDnf34V1pBxt1ujFy6iCrq1kkE8PFzP3hVMDSqRE2rqPnJXNsaCuvArH7BvQfPh65HtPtAP",
  "key20": "4Z7S4kV9YqXrceqUzZUoWUcKdo5PVGRuAneAkibLbXuwMnjnScHDYDSZADsuiXgqDkhC6db94ixUe6EWecCbBKLt",
  "key21": "5sBHicRyWPiGdt9TGQpFQthwpFkg8hazeWop348EtnFPobokoiq17aQGx9EUYGUFovyHpjmYwfcHqt8z4igfE8Fn",
  "key22": "5uvG9QxbpojPXkr5sUBsXv6iNT1jzSL3cVxjh6VEQejQsXGnv6Y5nu1pXSve4ATvLT1dno8WXZ8ijvhprP1e5HFz",
  "key23": "3o43HWgvAABGHu7rAvLqqa9PPqr6gQhLDwh3zP7iCyCQvMeAQTxSprtfC17g7hvXR7aLzMkkAUKi3Bx7y7xsfQdG",
  "key24": "5Tqi7AcXSh5n5uq7uhw4fnHqa9Yj6ut4NJdeEZ64Z7G8xs2iJRhQv57LghyYzfyquLwivPtpRXkJnJynpBfhobgi",
  "key25": "28mNQozcJFcv1LgZt472YUBmd8S28m56JZ4QDiySq4AiY2aBFCyTCKB1NqNFFYxurrwvEAGWTyX8UXTesM2hSEb9",
  "key26": "5yJT4deNdeopAhFWbMRqkw2CPbN6KT1WA5T7frSEx2ADdGApr36Ji6CJadjPeauBR9nXyZymUTVYNStUCtR8qNVD",
  "key27": "65TFeUxjR2aWZbASbHsVByb7QapUjhZhnTpnYAx7F4ZtVy6vUhhCQvP5ubTLBHK8dhvw4SLoi7y6fLWMF8V5Zdyd",
  "key28": "2r9tUk56JSt2g97Q2cvDStz2WcW9iYNv6EAUsPrk4ALkoPjKKf9HwMsQWsiy4NhqdhLdezY4TcwEn96bazrVYuYj",
  "key29": "gLvKAxeSsVdUZovFVZjA6Q5ipRVztvgXrMnPt3M69E1WKFUs6Phv8f6nPRoFhxZknvfMF5yRJ6ueg1AiW6SPnoM",
  "key30": "5cxrRyR9k11BXAK6aZUzz8GdKjXGhjGMViZ2haV9x8mannnrEvFYSyqQxyBiYtELZLKuPKBsWBdKDKYxNF9E6qgQ",
  "key31": "5Muf4TvYEUX8835RJe595PiJceeMeA7BhKDe8zMMd8sVfotVk13UF2DDYK1kvT8RdRz2DaZzf772CN9uJhiA8X34",
  "key32": "5bkNg8vuT3ibRAPcJXUJU1bUNgyDAf8SKCKmdUFciPHd16hrfATJD6qkNtMyu5R83MsGeKnj6wjiDXhLjTUeyPKN",
  "key33": "4zumn1kmbf2nEdnYfM6F3dYu8bkZbV8pDggu4nchHvaY6PLfznvdJgtBgjS9jpYYV3s35VJDLZBsnVYBz3d4P6hn",
  "key34": "9vLU6zqoiuvXnwP5ws7Lh1k2dWzYVvPqPyTRR5D79tLAVTz5sZGui29a2FHYnsDUJGzkqV21ECqpun6K9e2Hkib"
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
