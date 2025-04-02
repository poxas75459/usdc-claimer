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
    "3SQcWhqqkMJmapgFaRmP6tpxtrJrh3YVqk975KHNDTiBCtLD78WJZ84XrJorjyKufhS6bV2gFh6qe4ierbyUqwqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gTzyR1YdmLys3xC5Pc8VSF5EC6qi2ZqUY47q5LkWbrM3zuPTvok7Y64fG9Vg3gKuimgeu7X4MxuxwAxa3WjBef8",
  "key1": "fWgSf56U6JFuib2EPyitYBesNSANNpxf2qh1wvqprZ92hgVoH4wQz2bh2XptZUNWoNFJ1XPeNwvqPRb7QFN8HK4",
  "key2": "2NqXgB927LtWhJbnSNxAVLvHpCFiUEFd7UAfw4wD6MnJH7xFtNy8m8aKQNXapKtXwm1posDiNpUAwtf2TSBouXjq",
  "key3": "4sa57C7YWZLddihPynUzvADw6ZgGz9wQuPD4vKUQKC9pdC3k4W5w43KGX8ArxcGMm2SHxWWafZCWFnupiNDye5zM",
  "key4": "4Gji8hAfinVjVxvMPKq63NSAajmztfV31BncgeBd6caiL3M5qs4HnxMAfbJrNBniVoNRpBAk6RHikYEHkZWX1TvE",
  "key5": "3271Xy6rLRTcRJ1WzX8TeS1gTkcNiVPCqMJDFMebUa5fcE9yY7cchHPem9kEUZQ2tj5ydSopJ1EsX4yBGhR3qNNe",
  "key6": "5tWLiKqFA2oyq59VoPfu4tF6o7d7sV2u7Ke2CTwjPNBcCfedrbkc3sCRWEskT74AoAVXnU7ZmhATntpYN8dsv1yG",
  "key7": "4adGqhwmWzDdDkZ6ZD3ToWfysYPQT9KtsBRSo8uYesPePSNDVAxcQdLjmbtVmiTVJEbtGw5V9oqXUmy5HUFBddsS",
  "key8": "5R6zTSEuyRP62c7JD9zYHE7GRBunQS8x7SLYBiXQURZrssgERGKVqpU8yxLcpnDARBhLmBTvDpXAEgGiYUQuCjqo",
  "key9": "4wqu5g7mcJNW2R2oymAdgHqgFqYeFHxrNHohJmLCmZRZDhcjiJbss7QQiA9ZqQpJGKJURzhyb87vYZZSZpP3Kq2n",
  "key10": "53qDZXJWCULgzttXCCMpSV7VbpJ8aWoidBZcZj5Dj7Ci2Vq6CkoTTz3WicRGqMVqVgJ8kEhY8nvV3AL3tB2iR5J9",
  "key11": "2hwSSwTEJNJUn1cMEddaPWVKchMfBTDC3zJmrDErkZtHobiLp5K2Mmw9Eiz2k1Pbpd7tC9oh7FfTBudeJ19zCQwb",
  "key12": "nXymfeiyRb662MjUrY1yTSjS2ZDCYm5JXE7urZRiiCE1n6DXPUE1RU46G89w31aifiqqjX3gheupeBxrJoBSpaj",
  "key13": "5FigAVcuw1NUrEsxkt6NYetLy6NamgKLzFHXAKmzNERVu2pXb1SkwAJQsYfY85N4EEhgJXu3c3NudFqG83LtLZKC",
  "key14": "5DoHWjuVmmcwD71iqqWnJLHRb4DRUFZ1M4Biu1JKCgLq2iuRfkRUqBTvCRuKtb2TaCsQLtoamSXC6Eq9ijiRKDoE",
  "key15": "2PomHNRM4PFrQ7K6Arw7WtW92gmXpgXak51CfDRH46xS728YUSFjPAGaiGY6YzHebeC6njmzKtAuksKFr7nbsbM3",
  "key16": "AbnudDFoJi1GuCSJvG85xMtGzUbZRuWsxwzXw1U1nA7RCEDeDE23gMBXqnpsq7gfrEzswvMVUEM1VtkKWYLyJXi",
  "key17": "4mK4nqfcoMvH5zaAyFiYY6hFdASQ3s3AXKpYJ5BVppMfAoniKgEPCfVGbXLheEM8isNvDhzJArq9UtYEjnT1sVuP",
  "key18": "q8Urz38hWfK73PxJkv3oYQ6zWMdD4meqtPKcWKjCppnBcBeV4nZss3PEvWASdkJG9YDCb9Ao5ST2EhwbDqxCXkC",
  "key19": "5iXFNPkg1pzzPiPNimTdSctsVFrZp8TWt3YzBaTB2SfLX5Km8psjDXFpaqx5L1ws8RtAU33Dc2DpoxBHiuYkwjFT",
  "key20": "4cbnGT3FRvPdqfhYpsnQdcjcu2if1pviUx5byivCmQ1mSrVjfqofgVxQzixjt6oxfCa1vj32TYv6TV89vhaEvMSQ",
  "key21": "2nUQcdGUA9PC8TBzBWcC5NLUitXsnAignYfeLhBij9ctkVcRwLXqbfTaCaZnwo9D6hxGrGbj7PJve5dDR9geEBKC",
  "key22": "61abKHq39eKZU9CpwXseWDGzSgByadAzzEsgmBaGWGUucXz1KsoSUjoCFLLkVXauDHi4apwebwoZuLevxVrA2A5i",
  "key23": "3cvJfjzeDUvnqFxrxKYqmycaEKzppjqbgm4LM5dA6upUMzHHCp3zmFErG7qZufUfYPDh9Qz7tLHj5rzCC2wDKAfv",
  "key24": "eiixTxGFz7u4PBFSBbuDWPDUxaRMjrTdejmfGTyEQYjM9jM5zvGx2NspX7Bx7Mwr175MJszeCtUxBLCKyfsmNud",
  "key25": "25GUThJxx3BjxCPd7FNE6DnYome7bQfMjGZfcgZQCAW1P4avMzk84kkhNZMfzUjh3KCC81RoXB8rgP4cnc2MJXH3",
  "key26": "5VZMkSwLUSAuHHnCLzbfqVDW2tcdHqR8caUj72uzK2wbxHdowjmmoJNQv6VieGwvrv6DaxCPxnyJ7pLbV68gG7TY",
  "key27": "47jgnxz13ZBN6GEb3v6KAiXk1vcjU8rBxwvVunBdTgTygXUypPCY4HWddYH6kFc8m2JZRBzDTorxojZzaUDMUJTw",
  "key28": "5Bd49g2FSaZiKfVzisJUztRBcUPMJgHnkATKmKH9AZf1w3GW26ApMyo9j11hPCUQzRog1F3wRxQ3MW9b7uTdZXLG",
  "key29": "3E8dW8R72m3uMcuVKdFa7yRAFD9cekSqaWp3gyhoKouMUTf6DaCLSm4a8uSXF2TRDArpa95TiCW5C1hyQsKvSveR",
  "key30": "5rTitCNtbw7WzHgwWr9Eq8awnUaCpmcHaEQWzsWh39vbD4Zh9k3mCDV2Qs8YCFjLjHz6jnfjSqQ15yiopofq2RAN",
  "key31": "3jVQMfXUaZSeXsT7XYejrAvL4FfxgY3fK9UQNbf1Lduk7xsdR2myQQ2zB6pEu1omGayWKPfiShLHoVGchve5RNPG",
  "key32": "4wepwfE2WvzJidEXqBenAag6FviE9EC6KMWtbShrnhXwePn5cMRABZZc22FX8vYWNqP2i4NEgPx8HTxHmvzKeYJR",
  "key33": "5z2jzkZbyyTiupDgfK9CoHWskQu9Drx8GSra7GCDQfmKyDz2KwUThTKWWvuqBRm6jYYwDGxZRi5ZWLKtDjECTkXJ",
  "key34": "35o6Mpbot6tytpCLpxPnb3GCKmGjg4AUWa1TjdSVZHHkSEwt4U1n1AQujT7pGF7z8RhWhqJFc9TSamHRoNQucPaN",
  "key35": "3SUM9J59F8VowLFS1VtfA5VLf3wi3BZNnuYbiR1wUxgivXuz32oVtaiQszkmu1P9cvmC66DBm8RuLTsziW2XCLLo",
  "key36": "3LpKny48TPAWSVeFh6dEVUoQSAVuw6QtdUdoEZsSqhdoRY3wfV68sq34aVkzvti26nfpujky7sbuN1GmwRnpkC28",
  "key37": "4tLzVy8PnucQCYFUPz5ksApPtiBpuKNUbXS77hmW5ibDEJ56oJtUnvwpUGY58r3JdeZqndZmyYhVfZACKnisibbY",
  "key38": "5ucTy5dsJ1eS85rS63gEDZaWxN6mzxFnFkDm4weBuaxM7QjSsb5MDAQXJfuPAUz1VxtJbh2bGfZ3QMeKNgfjFgNR",
  "key39": "2VZQpzxsGkjZiiJmpFNxmG2gdMniSSKkxopeDPLkJEBafB4QAEfyhUNWwaetJWQHYUfKNpdbZQdT9eVe34BaEZi",
  "key40": "4xpee9Vz99xdUhhjQrayEw1bjVAyTpiPwrkTDRQ7hdHS22on3GuhFczi4bDcUuJcUVjpe4Toxs32XJah5SFobECN",
  "key41": "4RNeva5A2LWHoA84iDeGqVbT6kE5H9xBQtA6tQYUjrwiWgzv8jeDnzFBeEt3TS6M1YiaYRDSKdSFsF4b2zxnT31N",
  "key42": "3neGquq3WNsy8zLmBoGVap5Vue3ommqesqC9rrL5nMk1oKBvYqY6NsUNRmE5uyErec81t5ysaFEzNbmUABwaJ6GK",
  "key43": "43qHAp6WVyiVD2Lkw5F3K3GL4gLaeWddmc3B8f1pvrohXyvfUhfCvaVc1wVNyAGdnfeRrWo82P94PCvTWNYavXgy",
  "key44": "2miXSAQkJxDW1u6Qm9pHmP3rv1GEqnn5dwc5AiZcYGGjucNx3vpp1DPjfppjsjr4nwJs1vP7rv1MUWUYH5GCeVnY",
  "key45": "4mKKcczCKd3xnWbJ3k1p2U8Ecf8QU3tNT9MBxXY9BEaXmHakmBeh9LUkUS29ErWETwXKhpjqCdYjmnDm86U7tV5m",
  "key46": "4ttczXAVZVuGQ25AFQqd23pKASNoWgeRbYkUxEBwJRo4diDqpxvEZcRYS6zB2s6rLjr5EpdrjbuKFbd6nSceWAef",
  "key47": "R4kinnkz6k4piK97w1wTciyhdiEHa2SXvwzwo6TnGA5JXU4qZykpLTWjHJbxg7uaa7RzZa9qy7Xzyy9haKNyDxe",
  "key48": "Pa5uyDHwuH2es7ecMezfwjCHVnVsu2uQhozaX1k6JarXH1LoS95uT3dG6EG7x76qjioMMWf856o8UWfz1TJVxtc",
  "key49": "2SiLWnj2p7Ld3vbMwbYceygnX3aXWoq9eipqc3aAJm3FbDS5tKVBNXnA1Ux7EF6MHAWLTTs1fkm4JVbcnCRSpkAo"
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
