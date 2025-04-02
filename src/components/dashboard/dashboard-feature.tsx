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
    "3LYMtboHfiNuYyWN5HPWL5j7ZQ3sDUPSwM7qMkdAZUUTkTpLr8NHPGfu8vbB6LrWb2FnWM5bnHnnTvzkJqNfrHzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kCrBLE4rXnsyKjKvGFRz19MWXdkV3e9L8QWjc1vsUnQ3uQVcoHVKgqMJpc47ZKGs7ZLtWVc8W4Ju7xKNQhN7Q4f",
  "key1": "2mMkWdN2chcD1A4iPPobojREgeX58CKzPwgquHZNp1TDwhr46hhwFLDjomtjFbBnwXrWQdZ21aJhHaie4dXrZ29B",
  "key2": "2DP1qw45VNKC1ushZSoEWQn8y1AUu5bNqexYhkbm6fTm2bSvKoMR6aaDffiiC86rDwwuzWWacKtD56i6vGfMRPBF",
  "key3": "4ktCB3QmoEReAwjuKwZQGHJdYCwWadBZC7CuRsGgC9fYVz4AxzphhRkW1XjTgtf8sBcfYkJTMZUfAGZJkFYUXgE1",
  "key4": "5f1BajXBPNs3MA4rSY3gHNmbZMeNMHiao4mxfw9QyEMoVLLXhHjfdcV4nJbJEDGhuiBrsZqvCUrDRcdNPQdhqCqL",
  "key5": "3mK7ARe1B2XG3ie7BkrJ2QFtbS2ddBtZut9YzNtjy9J2HAMQHk4DSecinwD5rhb6BYx8fVrfxeJzi2SNi72XABMK",
  "key6": "4WKdafrTtNbWtusGm6fLV3nGg6vEKDR2WMmhifWkMTpSJwJdkLRz9kaPkbHet2VnEyqhE5MAQqr8Dj5TKbuKRbCX",
  "key7": "5trJU1izrnpcyF2Byw2TixVGkinFTW5tuuLdXVvPvM7HRm55wCgRYtRGkn3gcii9aUaTNfUwHDCAaahSSWeDJMwN",
  "key8": "mG4RpepEQvD45JdyU45YeCQZXqinhJ7FpxniqV2gz5bUChRxTbYbPGQNQoPmn7bsKygKythzytVhM19pYrnv3w9",
  "key9": "3AGtf3U6ncLiveMhc7HmFrWwVk8bNz3LL9bnidEmQpMxawa6QaNh939v67r8qm143JYS2D4vTjejcNeWXHudiT7W",
  "key10": "5GxSHF52xSF2XmyXkynUqjrZUe3tAnTDsdWFzyb1pvihwbXGzqgrgcP5R3doGutoBsZMrtA2vXHA2z8SsPYm6qBt",
  "key11": "Mu9z7nWGMfEaYCkA77BoLkYqorguKomk91sha7XWec3uDfSF29MYNi7DJ4adZLRRnkPESaWD4dLjiDsTRrpD1F7",
  "key12": "2DMYJ1omLxvtVc1bv6A9fvYR27oP1fULuhFWrkkCTLj1P4P1U8Liog72L3AGs8p6mLWRV7nsgKV1cwgrhXNFGENd",
  "key13": "5FCei8Ec9NDr9dSZGB6KkXf8iz4yqYyNTTJKk9S3BvNNqiPWHC3FNKb2J6ZiTAamSjhAwVNYcbBo96AbTmy5FQJe",
  "key14": "2Wj45N1DDuzP234XfqwZ7fWPZ4MhAxhZdWyhovsagzdHeXjGY6U9bwDh1c2E7a9iqT3iQkSEQDqovADrZRfvnqbw",
  "key15": "52YCmXPvRVxTfjPyZC8vcfQoFCf6cZtXLvEw1Zvye3v5qd1ZSgLaupmWdgr4adA9aqhYPAYj1UUsJNVfnhjVGg5x",
  "key16": "5Vak2tveGvPCDYJMdnTNMjLrdYUzdFz34jyxKdkCjWRH7u1FM2Rj8e6o3xhdGm3xnezu577X5C4F4W3EcdZJW6Kw",
  "key17": "2fvCthVPymmdiNVAGwQbucVhHxaonnPGoXarfBo8jEhFgepC4Z4qo53pjcMzhTKYENrAv57LQqLukgPnRQUkTB36",
  "key18": "3yWYmYrRYiZuDZ4Fd1sNP4zQymwJGcbywz8okf98bTi5rnCKTG4Kwr69GPkqFRtVzfSoQ4njEr9WL3G6RnDAf82G",
  "key19": "29N6AP4kATSbg7kDrcouexEQVrQZBYoeqViH3oF2V6eHDkCTEivMMX2SHXgtYigfxXJKsPoTj8gsW95ymuUhdL2b",
  "key20": "5qzh7z6YZEmrTUqLmdpSSe5Ze8Lt4PdjmuZFfMWuox9bRbwsuRcFmt7TvjaCAcXDMYLmYBuqrvaVj3sC5ZFeZcr9",
  "key21": "3H2xdW1AJidG8tApzfqHoFYPd92McWHGxtj3uBQkJy81J4wthvfbLnivMBdpXZvmozYPDPymKd8mYQZBpgJd2kQB",
  "key22": "5owfFKh9AQt9NLi6wzgqqPyNGUJYzaaeW74pG3QgbrSLPVHuPtv2evxszvkxkhpZ5ZGKcKJZ7Jwu7W8CFnDsdXqn",
  "key23": "4yVtZ2kQbCEZPG3ztNZSvBn1yy5rwDfFbkbDGkfqup4hUtYq3Lh8qghkzLi7Au7zCbacLFm3jfKT6GH3krwCXLtP",
  "key24": "5myUMvynKooPusqGB4hcGdx74BGMHoVUUUWwETcHribHBphMyXNKd6iQeCn5t8BEt4E9WXbXPUTMtBbLqpBD2Gyo",
  "key25": "2bfsWbTf6rYPVRpzdRTaKMNStJCD4aXoVMuHSy45C4rDXnnMZUaChCFvKYmLgAeo46jk94mxu9sdsNi3kidh22Pf",
  "key26": "3iU4PD3YU5GTCarEHVZPUAAJsKiMRL9wL6d7ahvaPDSKzk9pzQB2APg2nv75iqGu4GuBq1DNPcq6fqMUqsxi9dhd",
  "key27": "5DnFCpB1RZUUKM3yLDrpbpQo1jnVndmBTtr2v9kj14fzAMewtgFNt3bTJTQq6FsT4tJACsq76ka85s9WPCff7BBC",
  "key28": "25n9J6yvt9MWuD46kaYN6boKydqwdUwjMSEjuxzEHiDx6NJzgwGEevqFTQNoKuA1Bd3ScCCYJgWFsvFjGv7UwwPU",
  "key29": "5cUp2GcLnds5E7RzA1bnhLvdkd7PJjEWtsDGCpUWjL74U5gf42RkAXhD22VFmoeeHVea6kGNGfj6j6th9iUrs5SQ",
  "key30": "34y3pTnusesThDU3Df9h583kMaAdYS6TnjD59qVLSTAcJRVLw3e9TkQdnfWGd73BzeZGwBshFxwYu2prayYUbBfr",
  "key31": "52Ki2gunApa7DMNgvHeDxcwydtiE3ecfSksNJQzMxypmxVzZp7zU7bDGFPMkh2Zgd3x1x6qAr85YQb1UthRELa3x",
  "key32": "5LyJoBNBNgNv16P1MLkEwMWpXesxh3WiAN4fN3NdhhGKyY5aQV7wXRMa3B9Wmkon4u32NjfknmZ2w63P5FJNQL2J",
  "key33": "4wCZae3z6nU7Lz4yx71r3yKimhkZtJgcThBCgJjNKrPT6oPYA7r22nrYqJku62hib8puUpoqDGG992DcWEgQsGrq",
  "key34": "mq7A1Mkm4RbmbiaW3v377RtL3pYoZaaAjRrJAZTV4dvu11dMP1vpz25R2RZNWqoPSvGZgJ4VpdbDzzEyabHbCr5",
  "key35": "4ZkSXhkLEYeQVgdR3zSoLRCvy6vzZ8uqrcHdnXBjKc8bnj5CtXFymE6At6SaUEGD6SVhbTD78rfj45HQrBb2vhvn",
  "key36": "2crKRbAfrezpUi97LRMASZ1yz4Be1fmmQgXS6i9ZXhGnjUoaMZAFKXMwVRgHcU8Ndn1vgVqZNecvU96rETSG2aC3",
  "key37": "3bcKFiY8n2vDVVNUX7edUsrD5wJwDZMRx2Pc2b9KoJx935vTTuR2nHRHkPr5XU4hViZ1M1pmNuTNinHXHgaR7u98",
  "key38": "55tZiTX2Why4mgfX8HZDNPSMxFpiDigAYSoW3ULWamxqN5jiPsERGb3NgiX7sbFSMLcrCFTM1gbFdx6CmX5gDa6F",
  "key39": "2vciZZdSy3deYfJ5pXCiT4L9gVWrV3qC9xmY6TBsW1mP5th9cbwbozP7KXbDXdfbf5Z85UCie5payjUcKsA4kjTw",
  "key40": "5RBMaGH1xwe3yeVebwdbRnEfoy15Rk16BXymjTUoFoWvCRjfjyp2i8tgtKHbY89aA5tyJX484x7Gx2fEY4URFRgT",
  "key41": "3K3k8iEMkASMzEWgsMQrtzGiG8Dvz8cjmZfuLE4dUA5ScwrfDFtBFWrybjeLn8MnNNa4FAZtzd8VTzESQAYyLWqT",
  "key42": "3yrADPEgEGjgVxarQWyZdWs3fZ51q9McbJjP4WaaGY3eS2ePKWpoVmqTuBmUdK5YTxLJsqcuSD4MhZgAEK7ze7oU"
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
