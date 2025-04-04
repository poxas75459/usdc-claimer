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
    "24zDhZ5FzZz9YkjMLz8TPiBEFT2sqjSSPAH4phd6kMmdgs7UQL7JLMUsAk9NcqrPDW4jGenobGZ8d1Qq2Su7AVcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L9vxDCa9UEqGTAJco6QLawDsq3zbJNZ1bBUSyS3nVUFEq1i2MZJZCHeAD8hQvG2gzEMt9pGkNvhJcSSwhpGq4TD",
  "key1": "4c8PLgninXWEis6oEjQCNL5jgr4FQH5p3nJvmkfvfndd8V8hqAL927fGv83Vrjvf886WuXYu8rSToQKZrCDjYV2K",
  "key2": "4Jw3pCVai1sjzoKaTxo9BnfvXf27yAEtzRefLYT6WdohZxxjRdJhj3LJs9zYGuyHYzhpJJzUQ5xBjiWdd93n8jta",
  "key3": "3s94e9kZqacUc2Ev2qoYo5eUxB4sBuJwKsft76Zg2JtmCZBksnqK9VY3PNxNvYjB3614DXzWrYi4cH9DVX4AHg7h",
  "key4": "43bNzBBbwmKyssitrWocuUjZgV8idQvTmDnHG85DBqxkJZ1dnExJKH6wPpuhSuYMctUmeqPzo581fVmjfQ2jwPnc",
  "key5": "4YgMu1QYtQ6G6ycFGHmEZqYbzAjgPoJ3pvxGVrygLrN62E1mHSrgNgEW1fVBK4GHz5jtbnvnVbZ9cYoHe6dwN15c",
  "key6": "BcWhvNkq99uP9BA7LsM1buXPkq9oDuYv8X51AYzMziQnbKTFww3qAJCCy1z41uxNRSRW4AjWAMdmi9shasGjCsq",
  "key7": "3SvjdYkVHPJBMYBhqNZkyXstDiEzzYLaSnPXX89dLqNLdackkoeEdy5j17xftGfTtwhheB3URMf8mdYMeh7ehqaM",
  "key8": "3uE5niRnHkWU3FwWtrJZfakz6U49DPcSzzyxF15uZfJWj9tx4Ui3QSJs7gFUPuCdAsEuQVCwwRnag8YAY2fAECEK",
  "key9": "3tonbpzYXCM6nzbmLCdmwi9pzKHLCXR5nGKvwNYc2qQLyn1ewENqosKYm5E4oD5hufWVJYEvbGTeYtyr1HKT1Wx7",
  "key10": "3D1uT9mTr2uFNV2vDwHpa45GbVWR9UMfaGgWrsuZeks5KLsjHTHfbTTNxD3e271PkcPGNPCaaVAzzzKLjJzM6fG2",
  "key11": "2RFNUpToqBavAjABnnzW5Zf9fdZCgJYtQ2W9A16FtfTL4ePhNJQ82TNYGmdnmHvuNL767vpA3uAMkfrgmrmsLFaV",
  "key12": "5Cv3LW2q1ye5AdFyBXevUivjhwMTZK8rLYiVDWBkpdwNoCMj6S34NEPCwPTaRqs7qyddDjoNN4JUH3HjkSaQBnoa",
  "key13": "2P6ggPfNW8uTesHCKDRwSHSksVNmPNzb1gDDTB4FCjGHEH33DtHaaot4LJRfefqfZMnmtT7G2V5Dbn6f6psjirs6",
  "key14": "3DLFPKnzZfpAkdxUduUzQ7QAL5rCys5jEJF3QcNe7EJoLZHcdozfRWVohfRhpD33jyEQ4VnpCR3uC6Wtjxi29UE",
  "key15": "4kMhJiEaJfCsa5NdmxeFvTR8c9JjjSLFmkBMSgNAWhgaSmgFU1vd8UHZVMvLzn4HX235rUPxLELJPqc7Kg1zBWs7",
  "key16": "5Ph8XCb1bw34nyCQrj4oNDrDs6WrHLGbPQZHp85SVYXgRYddroBKfAmG1yM4A8WNdQjPevcFMfCUyAjLxy6xqwFN",
  "key17": "Nb2DPqZkK82zyqKNjLWrjeno2yjuTNigH5bGm4knr7Uuou9aE8BhKL9pfbXRKKWJki6QPr27wjJyoGmwBH1j885",
  "key18": "4SHzPPqcyuK8fWK1KomaaL1VPzMDMkvPxtgQMv9hohYbr9L1Ae3MJUZhn2xu2y7h5dfiQSMf1nHh6cbA7XrE519f",
  "key19": "7mYUcXXhciAzy5PrdiWCfyaQY8KYgPuKuJzJr1xeEZXE4cpyk2SkSwjhdeDjJWx1dXbcCdx94GsnoTjo4LHeomQ",
  "key20": "5S7RP5KLmwmHZsdmMJHUnSwBaP3E6Zwur3f6vxmi2LNSjKS6X8NzVqxsaygbXquZtKRorLhxSzE4KPhNsNxQrTST",
  "key21": "41FLUzqKNr9NgFGQXpC8xo6iD3L8BMNyUfFDBJV33ranPVGfbJcLj3nk7q4KNr7UBN4vXVBXh1ffMqjUDPWbc1pN",
  "key22": "264HEjVh83DoENsowpAR6YJvBHrnMJEEhSxpo1VuH7uSpXQ3WXDrGQaZX4bfHpXavggjD94N4etAVkdRPRjqMpaC",
  "key23": "5z64Sj3Lv3SYfVm8m1buVSjMejEaMNjd8Jvut9gyBLVjS1yZBnwt1ykaaE92cw7oq7oXHeV6VqU8TzNokv6bBcTR",
  "key24": "ktNzsw9piWXyR4TbSMTMBEzKBCeMTwFhjRCAg5Ut4Cmw8icXt9Qd1kYZiq2gkiZiYNWzQHhBVKcyF8uDz9nSbbD",
  "key25": "3A39YZVDq7H2rAQZLbZuzFmJY55Fz2MuP96n8FHpcEz5dKL6VyWUUmjQM4Lma95vRjpoZFwpJLiv5kYsAr8mez5D",
  "key26": "54wbnexghEy6FmrH1TMvcJ69WvGsSbWBw4CjpQBuJHsxmFjsK61NqcFyujZeC8aACsxzLManXn6Rm1KoTrAnuBJp",
  "key27": "2hhtoCSW5bBx4eqHTgJYwoeKf7hxyRN3rg67gf7H4LsdeBN49rXASMGfcEn33nWJxPsawUxPigHgj2DBLSutseP4",
  "key28": "4WotWS1qR6pqjzhw5B3rXycsgaoQ3uNhNYivxNq3pCEMYDy7yXryepjKC3EbP95qmhM34BVD6UVqyJi32UUwb4hB",
  "key29": "5fGvhmDEyernQGCRi3scxoivY4SKw8t4sdGe4D2oYHavNcMq57CjBhsYtKGb6C6sW8oNv6iMvocTao21Nvb27xjH",
  "key30": "4ATZjVZw2JSuRXCmEgkngKoQH5vXVEdUxc2YnZTkqgBReroGbJTJvb5rPWwBRPYoqtUwf4TwPU9JU6umJNdmzZNF",
  "key31": "4hs6jjS5N2c1CdxVbnyQ1YYtpo1JrGWK6CTVxewGtd5w9hn4Zk9T4bNZNQeuAYL8xaZHeveEy6KTjgMgYehYB9Xf",
  "key32": "65yc967ym3Rrr5kM9NRXUyzKQBBWaDMfxhq1xStKMyJJvoZzg3Us4rRsbXPW5eTvVnC7ns8BuLeRDP2j3Mc3sPdY",
  "key33": "544kPP2ui6ZaPakwC8iKeRRfZGsQhnedw8qcj6NYWFbj6KbE5bRRHQZgHXTRQq4KNPBxMLgfpQSuiTmJPnP4JzQC",
  "key34": "5NxDcvfc4foWuLyMvoJFGs6y8bn31fe737pyQxTV8oTaeQPnx2wEaH2JRGo5ocqW93FxTX6dTaE1mvwk3TQTMcNw",
  "key35": "5cQphkqMDsddF6P5m1BoGBrJYW5mcnZtmcVDYVPRVgNig9CaqcqCmS3c44pTy1MknttywMxzGNy1QjaT7PrPVkyr",
  "key36": "2yrDF3WtMJzAaJDgv21bVPiEKYrfgJw64fW2PpM6UTbf6G9brbZVffr4yXb8grr3VGdjja3ZzK4KUwLszdE46ozV",
  "key37": "3j6Bk9sQusv3Qa6wp9VVHmLWWkveMSVSDZHw8QqoZXiFB9vHv3ae1kU6BbcztjRtLi48ZKUSMr85xP1Qn9r21gdP",
  "key38": "35M7HVNAsWn3RDcvoDVC2N6ZdE3d5imeHbDVLgNRRZM5FPsuVscLSeXHkSgRVjLeuuNYxkttckGScQncUga22AHy",
  "key39": "htW2QXX34nfZ3UeQTmnxsN1k2pvdhSjhqDwQNkNp7VuskT2F2667Ntdk4aUZCUZ37YUPz1AjgkRAsvTQh24sHtn",
  "key40": "2qNqonj6qqH8ncJPnDdNXGEgHkz28QPV7GjLxyNJzb3iys6RqMWD9PX1vdiMvoXjqyJvuTpL6adNHL5cCteuQVan",
  "key41": "3vMHFqAF53NpTPLLMHeAE1kKBWL91ccKusksUVYDDXK3ZJK1mXdVmyd365YyCJcWzYQuMcogPQDKULMJDfZCNCqg",
  "key42": "5pS9CsToj37ofZghW61bHKhKSX1dYofU9xhtZMb7MauAWDNSDrULeWmHxwWKp8mW7R78zZCFRo7Mj8gyCvE34p1Y",
  "key43": "4jkpaAGs6z5EsGCYt4kM7imeQdNqGj2iba7QxmbfjjWRtLX2pQpT7m8Q3zQyGCtu7V92GM1GqcFBkT1Tnarg3JqT",
  "key44": "mZ3FjsNrsE9P1NmuEdn7WrmuJ3nCkWTGsSe1nwbgmQc2K2Z1NPgRtde1MNMXfckuA7apdqSvQdzTSU1qYRKdrVA",
  "key45": "2o1NbL13JX9idnnbrjhArdTaxduuejeQcY9eLSye72Uv3UxAh69fWbuH7zSU8HNBfhfvcnZe999b7bc9kTR1fCNx",
  "key46": "4eKRAmUybuxP26y9nBvaM4senxpNdfvQsBXqgA8m5foJ9m7KiNiUcqVjp4zbbQBTALhCtKXvKpXYCc93wx5is3WG",
  "key47": "2nbkPfzmYiZxaRnvyivgMQfmAtrM2j3QcdTApeN9dkqR2cjEwqoGZDhjbPxNscj6QGBjvjqyYmFUSoeUTf6QdsJt"
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
