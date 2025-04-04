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
    "32GnKSGPxDe4bCXTCWLMGjYyESZakbjJxXthuPnabK3TzxDULqNegHW9gTwHiXU5TpZNQiqyRuWoCtzWdzpDJ7cJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JipSNsfwuyGBJ8B7Q7w1Ke6s3bLKNDbFcU6uvuQbDjxTQAbgtSUrhtoRXhPfVJDTM65brwjobK114v8ThwCDJtP",
  "key1": "2nAHw2kx6S7bRxAwiLGCnjixjqUHRbebSf34NewkFx5Br8pYBCDUojWDiEFKaiEXTgiKWsfcP4vgtKxkMXYVU6ZH",
  "key2": "29GQq8Bg4yg7oa1BKRh9jCUPdnz72oRvTTv7s2G4gxheiKzBrnnh1xptNVo1gdt5anYwhLYt96fZqQimHirA4hyn",
  "key3": "3aDjPMnezsoAACXTiT2vqNok5SmqmWC92TNHnbbTmMFvTZPWrrr3DYSjyQezY36iiFCqmbxrvUqBuxtvVmaYXiT9",
  "key4": "4C67XSSoW6fdin6fkRBohXS5qUY6BtdKRmJzpZaXw962ai5nYUeq2DVvxRyWCf2fMNuM32U81Zm4RsrwEYse2DR5",
  "key5": "2nWE9hMQH6LTQrFMYhmeyGDFbzjaxPgRk8M5rfUq8BgSUMGbktUZ93fZ99kig7GTXsRPztFxXByYocy5RmFrB1Bq",
  "key6": "3v7HYTVVMSyXMftspmDqumRzsh4McXJ6sgTND3wFHZbF9WizWLSk7Gtc7TBvtXGBx33EbQHcNW2ijDyLbDW7EURE",
  "key7": "4ksgz454kG2N3m6NBD4PJ9hbmbmWEXf2JtAX5gqAMtroEzWFLcBpVUymUDLf8dbRAmHgB6qarcz53famBmYiJ8pf",
  "key8": "5rGaQ1fFXgRCXLrcgTzSKb98AGRf1dCN2NktjwnSfEk1VGX7aS92ixFDCxmaCEjn35ccZTYi9buX3BAKTavCnJ4E",
  "key9": "421QXrSZnPwW82DrtyZaNEsg9XA8QhwV3yQ862CBU2rgPua2KQoPbVJcnXrmdDePXSCYugkj6YHXyjxaLvLX4xzA",
  "key10": "3jJkz1LcW2MDc5UH8aW45PToVgAQdaW7rX72deWGhfNy14MWNL3C2FsCtvr92aKEHqSBPFKmaexa4zWRsCbvV3XN",
  "key11": "4PJuqWwZRUhym7m65WU5LJ4P97dbC875JcVLPTuBsATKfWdwwsuJk5eH3g9jUNdmP6mXTscn3j3CrLuC9J2GrWqi",
  "key12": "2LrzewwJn1y5jtScAuHM6ZUcnh2DxCHytJ3x9R4CrF1L3mrJskPjHaGLQCQP5T4ZPPMKUTKYE3s2cVDum3b4f1va",
  "key13": "3kbGUiHMj9WCHWn2GLs2r2zrWz4aEDuAbyaRJex7wdpnjiNceto2ysRuUvEe97WEXi3pcmk3JoiYGn7EMYkwJT9Y",
  "key14": "3DQ1UaZaZqTK9DXXR8uPnZ4Foz7kV89LP1dfFqM2m8fwDE52vyXFuUTPQaCSEWHJuV6iioQ7YTj6vWEv1D8aShAp",
  "key15": "2XZW29iE2LACcEFVAWRVEVMdqtcUiTdaU5qPnksj4UFYXcFv3B47qaDmFGRBRiLvYJegz3euMQVEfrabThd2K4gN",
  "key16": "4ZYWMthFYhPkjJneAUvkHc9q6dmgBerLCT4yGNA15N9fAC1JCbnAVKfTnnkuATQALA2LNUh3HkB9WwUY8qTq4m7N",
  "key17": "teeikRJHuW3z2mZoh3sYHzkjVkcGggHHooe4vh7Hbdw9XeK9NyYTEjDSSnA45GFKcKgMQecpyX66f9ZLSY7TGvq",
  "key18": "KzNvwTDHG68r2mtdwKTgikxsfsq5hFNTiDhDMXhyRon76AKyv1uCNWitpHey6o75C6J5iG3V642zS97hZU6Amvj",
  "key19": "2b9xHf85U7Cz1P13L5S1CojTTy4sSngqsfbvDLh9gSuTKtn1KLd7MX8E989xF4cXqqceWcERf535upGQjbWDyJxt",
  "key20": "3Mc3oysUF16zJtVDbfuhW5vafTqq8QWQcC5Fkj9wu87Y5EMmr66jcbSHyZ4JiCA7YrLphMZxBxRMhMmL69oQSKxm",
  "key21": "vYNxa5VDqKk6jNUgZYrirt45nyLBvCjwa7fCRXvsXXwTszyQQCs3xaeX8RPRmFFRmBZHaZHsizd2sbd7r8rJW8p",
  "key22": "5p73mqTxf4Lk5WBQrFZgnvx8xtB2qY7LyrNEbZRSPCvymnM8MZko1jbBGn59fnFZU8wM53fP74eCvJWA2NavemSq",
  "key23": "2E3qhz4F6Gvrb1C9s9RjpRprV8CXmHnho4ZynQHAeVAEE7phkJGZiGcE4jQg6ewUndR3W7z8SrbuiYpnnsdM8bDP",
  "key24": "3wYc7vEsBd4rbbqe6qBsTC2uPtMG8NXGU736vBr2KibHTy6y28nMjfz8GvKZwTqgXcbRfDyTMeKDw7AyVKMMwRs7",
  "key25": "3q93A3SmqLBLn9E2sFWrX88LREy9zLB7ZMPyuGesZbush2yxVhSzuCeMJvfqL52KwzZ27RwrENtb1MWJihtUT5Ru",
  "key26": "33VV5BFkDdzpYSmyKUWigwRLxCwbkpEDqdwbMAe9Umn5eem9muNfe31CjGTqXXwTUSUrSYFz9hHBR9vVsePXb8bN",
  "key27": "5xP5pSPphnR2e9rt3u5PXoSu1RdARisDgZxVjKdmBcn4KjCsZYCjSoz5KdEKHNTw3WiFFYh5FYmGuA5xRnLmGbsA",
  "key28": "5Q4KEC3CyiMpEnvSEeGDEF24E5UxweAbHYmFrDgn5YyjnczVSzvDuwXBaNecrAEJxwCkxmGbx2bHFmfs7fnMYqgX",
  "key29": "uCe3ZxSUs2FB1awN9BmFSTzxiMQ9hicEJ8Yjr1qSPpBtNjL53YM7515m1eFm3wH4BNagTitL9cn8rMAyeCveC9h",
  "key30": "3nGCCzfKRfP87k4CUXmZkZ1iN7HiyChmQQTigzApPvS7MXWRtUd7X6aVSF658bXboWoNUDPEswAzm1bxD5aec7Lg",
  "key31": "DjWEvEMWJ9H5XkfwSfyvwUzAcCyyiAVuDBxVbsSsL4dR3QuZeUkuNc5N3MLJbjXNcDxSCdK6qPig95zibB8K7Ba",
  "key32": "3AbPUYoaednqNEVGxQ3xktX7mSTaNh6dCpUhwe6nwWuVF5PJfCnb8nuMczrr2AxTxt7dfFuB2GwqYMw7ikNNbX4f",
  "key33": "5kQPwLvmWwqdfp1k6RiK9ZkhaYMoF29xuRqD8vR8xGjESKQaMcb9zPGBLN9UXxYMkFDSKwUtcXE8hQFmZq8AdWpV",
  "key34": "fovpoat1fMbCGcJaG6z7Qa7tMqgNbyN7LQato1ciguAJiWAMNBYfYwcihfg7WMjw5Xk2daXSZ3L7Nw394j6sfdX",
  "key35": "4a6Fu9b3uy9NMMSYUiZ8mzBNXiJETSA6DdA4WdByA3YjGVZqbARhKAHAwaRGoMCtFHakqQArFLvwuhsqBvJWJ4Xj",
  "key36": "5fBRPRFaktPhsoQpN3uxccDGSgWyWgKCKR8SscUGc1PEs9dhMQYSNQ31zLPjhkZhvNsM6P4otAHUX5PAHAFKusBJ",
  "key37": "2Rpj8bGCDwGDR3DN3y2idQJQFuLqtre59YLtCdcmuKfeu9rX7XvNGqimksEEaVzXDgakzUagPtuQ4g2cCXvDDDQ6",
  "key38": "4KqD1oXuCSJiFyqMGRzEtXbBAq5LseXkNDvu6Ds6XUiUfWU8mduspWpFLNneb7dA9K7Zzd1AcHsYqfoXCah4TcHN",
  "key39": "2BWVSxE1qYKbrnADxAvCzKJYaWYVb6zxfCdct5VQ9yDU2X6hWmJ3CgcYhHZZ7sCsaqxoQPMxNLuiFKyhmC8CLRU7",
  "key40": "41duD3HEENkMfVAMFq3UjAeoaGs2yef2Gs3XE7bf3Eyunq1fQNym6DB5dhknbJZjW8DTy49UcFk6QR7h45oLZwLz",
  "key41": "Kufkmx6qJvSGKq7dLgzE6K2nsr8cEU2YXN2nErZTNao5WVaxZRYtP8A7t79VbTL2aCbzSitapcYguqSmbRmNA1Y",
  "key42": "4jozgELoLprJMfTHuaY2C3DxN8Vn9uxPSoN2YX8RZQPKaveMfjepguq5JjNtjsafr4QRmao3Xu9qjE9JNrCRTpg8",
  "key43": "2DMWFv1mSECAaRL6aq5PLEq2omNyrxsTUSqpNfwuaB6ZCV3PfgLJVPqMcjGEGxp8RYobVHAqaHgDEFzYbuEqc1iN",
  "key44": "49nqcK4AgNYJogRQ3ApZEjks2ZrQq4yWzZowmgrRk6zdyjTrAcH1QYYSwCtcKDPycnG1ipToX47MkDvL2G4AydE1"
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
