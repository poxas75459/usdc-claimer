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
    "3XrpMs3xfi4gUJSW1dLnrraFHvJSEiQj54DXFsTSwRLvhiPUDexiTWL8HHH1wmWnaYHY81aUP7v1c3YDi32FWzi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iiaCbnoGL54dWYyWVCdVjsjhgtf61mcvjft2PFJjxvMdq3C8w3Tkb4PeSzR59X1Vx98bVj4J6u79drsRpWbJ5gm",
  "key1": "2t4tGsZ9JHq9Px7z4duEjhnizVRqri15fRYcrGoXw2xXE8bMXDPvhvHrmX9bMmr9im1xbAR31kFJTa11kVmRgwzx",
  "key2": "yMFmbsgdx1tTZXbT9W9DcWYPfRKfydqTp2kJiA1DdcSgkutXddeWsEyoaWCjUG4yZE1yavttRPcMPc6CCDdACF9",
  "key3": "5KiHFp2KmWsjnidiJCYpV7cdAdKeYyMEZJrrTVkZNpx8rxwyU9uJ8weowMrZAranZpxxKp3F5wVMkWBaygfiUkt8",
  "key4": "d8Ho8zV8AysEcuKBae1amsuYKk9o8WR3idwaTDGZQhgNYiP9NADqFq29QUjkUS6RGKw9wPLFT9dtpk2p4zmZBjJ",
  "key5": "4BrR9tiwXp4JVy2e6raHZquf9jnD7myUci5oynxTfTE7YRXxpLVWJ5gH8wb2yA4s1G59JB7VTMcPzHBNFcPkfgKU",
  "key6": "2Q7jACJphoQJuz4xgQ8eEXsrhCYevd5nLSKTtQi6moUZXQSBK12EYVdhSYsE5RhgyTSJ6ifEFGADJsw53kdMNGq8",
  "key7": "ZXPnuT9dEgmfvvkwdcmk3U6gMe1sFP7YzJYoUGnpaaFYUrEcerGZC8xLeZwa9oVY9ek9puEddy1wn7P2K8Aq6CY",
  "key8": "f3MLZECfiBkU82JJe6BPEaHYf5rzwQvYhM5FyjMN6kFN1CY57QDtnrvUdo6V4R4foW8mqKuUd6oU9QP7JiUJhnE",
  "key9": "736LcBpE2jj3AHueHmtDb86oGHNoGJ8zaK9bGef7YBGidXLR7rbawrgbEMQGz8eKymtERoyEFDpZtqUMbbCe8xQ",
  "key10": "twbsqSrvcPxPxHN7iLYwsta17xZEmyFAAJruGs5CJfYZLZA3bVeongfDC4sHietLGCvHV2bkb2kStt98hjafHYy",
  "key11": "3smnqogisJEVUpfBGQoQu8KYiqa7rSbK2j8szdwjpuwTpDuXUXNeSzDzADP8vfurwNSKmmkUFN6zuTcThZinGu5t",
  "key12": "5skNhfXu2oG4Zs8F2CBGcWjae5dvBncXxoTczkkTifzwBJibjn3qktQb83cbv9ke3vRK9fMSZwdgp1Crg5ZXkjTu",
  "key13": "3vfSwx329i453RXq5h88pzgzWs8BxLUQHQxwNxJyz85z94vT3htiLEVBkZ1NqndStbxKeaH2gVHwvtBb6B5tcEyf",
  "key14": "4EeyWUSwpz6wooJjZHw3JWuck44XpiFmWiriU85x6JVo833mdwiP6jSuW68qMa9nVzAVC925DGrtd8Wvqc9HAytK",
  "key15": "5nqN2qMMweUQnpy3EhNCR9QVMLpy6dMkUzFygA9mKHsMLwqkzC6oHC2ayyYUuSca6kmXrBouM4RS76zDiVvrFsFC",
  "key16": "42EmH23HAVKrFeNYwx9m1raEwrTJUCkdymqFpzD6yZEXRcKJAvagJhiLXKJuYvqHcup4zok4DSa5HqCN9szMvxFC",
  "key17": "3eqTs2kVkBNi79kBoCT1Kcu9M9Aup8cDBT38sipQfpc4UxZSdf8eJr3gAkCBPnekpjWKkHyXSahY8fe6iX42VQa",
  "key18": "5SFJwWBffkM1CUJn1kDnqXpS5cd63orvbz4cBiQag7woRF4iteAHcTLU1Gf5h6wanE5Rb3MjpBQ93oaPHGzQ4CV4",
  "key19": "2nkfzPKihWKbkEVWyX4yPmsVQpivtDndXTuKYhG6gro8b5RfQ93mM8HXcuxNKBLVsKr9PwrZMb9Zo4UzSdimL8EY",
  "key20": "5QgMjXgAymnJ392g5AD5DcpjrLuFM5G3E3ebFe4BT78CLxGTMJCtLgHaJ2DNFcKDDWeUw1UCaQxQaMmbFug3N6rS",
  "key21": "39f9qU7HdBZoHNoYtigmR5eaUnoZfhvZnWcuCnWWFJp5Fe9bEi7qFhYdw1mqhrddCWQL9LUDg3nxaE23Kt12duY4",
  "key22": "2NMRwVqxHKiJqKywkZsRwvh3Bcy3NLDokSZRqX1wWe7ju6S2GfQUpsCPF21gYr5TsfMd8Zw1VkBMydGXR9epacvw",
  "key23": "3KAFwquGD2hESXZ23jgrBdzR2UFRTsCrP4jdBBUvLd5xHY8UyvTKouvWSe5ixcGBr4kVbfwWNUg782kXdVNZ92jF",
  "key24": "3hD3iA8My7dF3PX4d3j77vPaBg2GZAdADqwPTfFbP3J5TmViYpYV7T8UQss9T4cSh8eVo2q83mp1cZTwaAozjSBV",
  "key25": "3Sv7jjvLXqnvDa4HuGyLfHD8o3Qv4U7aXhAs6yA7TBmPj4Xc2XJn8VDcf9rCtrXiJw8sqahasW9GPWR6cJ8XpDSs",
  "key26": "4AkmR1K2uYs2DBrKWbztvErqoh7DsUi7WLjATZGFPU33x6GzcVhsW9Vjq5t8PkraVVJMwQRvaGegvqDm2gdxe87N",
  "key27": "5vkGk3XwZjgbSXsUKYRywLSfNVQbdRmU12s8E4EiwDifERxfmSemDRPUc78Gwv6UfGidzjpLn3Dgz4ZVxkRBVT3D",
  "key28": "3pvsQWveU6yPgxLG8HFcxZNq2e9D3AeTcBfWgAD9ToyTPkVughqHgfugncgd47ggGYxZbNiDh9iWsQVJiHZ5Ft9g",
  "key29": "p7zBj4FkneGnKfssKz5c9xCVefua8YWLap5mrSTovREs3tkScXqnoH9JEBNLDqwLufrx7iddGJMAvC2ua4xLQTL",
  "key30": "5Rg2xUKYn8MyxoELtdi4yEr91T4ANJJWoCxmTHLrBZVKhTsdKEsCiV3rNkHKVBDzwdCBMLmhxCYuw25LdDXHtjUJ"
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
