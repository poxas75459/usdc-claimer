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
    "2ZRSw7XtZmxRBQQLoLuQyV5JKCVDh6bXhNEc62bUHPxCuNGJBo17VqGbM7NWV8UTQiWrq3h9cx6RpXYP7x7j7jhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ehyzsZQAqVMTwYaKg6qf5VLLg7w7DW66ANgPucDw3qd9dNTeYywUuyomBG7Un3UskP4QNYLKqGdCHQ5Dv4QusxP",
  "key1": "59EV7NivinkhJLJmgTMhrJyHcqhpruSfqyYuxx5XPkUAAfdc1AThbh77vY42QATcwVJAxx9f6sE23Dskq8oFMkYo",
  "key2": "5fvPZypixGf9LGrcvFEA1DHxxnSYh7AfR134cy6eVbT2vTPZwn1VdkJJRmFwgfphHUHxTC3Hay5YgnF4odi9L4Nu",
  "key3": "PcqZaGzChX1oKs3HKgt162EQjfacx782C2tU2SYWe2kwmKJ7BHEdsw51D9S72GPy2AiKRLT4RXRwjMSc1GSWzfZ",
  "key4": "3bygTaiz55dzWFZAbhx3hYGHypof8jFSPxTBMGw3UjUTke9iHAVd3tRLLTRoPK3pP3hdjeWdrwMnJnAnLSHefzm7",
  "key5": "2k1DbqPWTuwKSMhvSeKffJWSLfPgbQk8sDNhfD6cqtyoV4uBRS9uNYtzn3auCgfS1B4hPEp9CNZYHRgj7P7SsWWP",
  "key6": "4Ac3X7WKXp5CSgq5SE4umCAxVa5kV77sSShGPdd4WqNca6jLCE7hfr3BQSY4w5AurVeGFZL8rfS9dtwivMHuNcqm",
  "key7": "43WtynqTFvsHt9k4XMybRZZGumkJPYFNQBPmfHQo6X28cNfAhGT98LSZrnt3eLPSRh3VHEuMrWGwsKtP6W6Y8wAr",
  "key8": "4xkvjw89sey8MgDHAsrQT6oDXXjoXj4a6FbEiEAHJyRjgG1ugkVrg7CpQ7st54S3zctDw7qAfzyU8gTsdNSJFdME",
  "key9": "3kLXsqDu943WNNGKZuvWqT1QdkzGupq12vGoQnpYy4VssV2rCq79tCQr4TGfta9msqQ22TQsj8MEaeUZTY5UDbAm",
  "key10": "5KcpjDJsp5gbQU3HGiAj65cuZ8pyLx5TLDdvTbyNMNw7keQUv3mjf1a8JBbhgack5ucAdocHqpxHtk1FUrUGdVyH",
  "key11": "2h387UFfsfukFWuf4j7GEsazhA1M4DTZfo8btzKQqiwWXo7CUEMwybzTeaKfDBd1Hb34XKHNnad8H5PQzZmZPtwp",
  "key12": "3xgdnCShyjDnN9sfpcAXjVZKPeFSFcvTjG2DLZp2A8P2N7ZFbfjbzdaFG4mYNrD3zcydxxoW6BUnZTuCkXANwzK3",
  "key13": "2NhdXfY2F3ovfZnnb3RduUWBz8RhffH9KjFTQNgEuY5vSj7hbKSC7DgZDx9zQY65MByjTzftXF9ycDLud5aUax5K",
  "key14": "zTBZjTFv19c21T6vdyeS76J7QV5A39w18k8rsmBAU4w2zF2HhcRcDRUuWdZkw8i1nchMj3r8G3rRvRpGy12M9um",
  "key15": "3tNjwau7RiMyg2LezbKheVjn3aYU4EybnYCR6XiGEfhj5fbhsX92fYDeDHbnwXTCshHwhTctADtYEF9QjuSpit7e",
  "key16": "3qSCPPs6rr9wxKFt6WHiERCDWjt9qZn9Qq3ucWhGXhUyFNX2TdXwaTAXKwtywFtPmXKTKShA7dT1KiG61SMSbMSd",
  "key17": "5PykADwv3xuRS8mpiTiY8YdMystvR5RF6dV4dJX6dkuVjar63dzFpwH9fifKw5NFPX4ag3hfcfwuUuPtm3n2Kj4u",
  "key18": "4WvH3JHSXCeNNg2cJFTsj2F7JHmNFkv48YTiE9hcYRNv2TLS9mA3m6GeCG79Va3YR6XAC6mMXc8nGVzx14dqPPeR",
  "key19": "3GKMBL2LSPc61uw32PZqESDZ1LWQYpQyS7jMLssohhf9sABsi4hvBYNB3fFYeNmJikEFFyDEaMJW4Yfj4oS3j1dN",
  "key20": "6118XZzdUcBB4CGBPpvZrTBmQN6tRFX3kuwsQoUWf9nANGy7MPBQp243kTsTA9n18sDXHmDmf5YNzvbBmmGVpjUi",
  "key21": "2qLJU7rDz4fGq3iERj1SPqHrtCEktWgLMFxykNwcd739PSfugkJqpAFyM9s3YpipqpaduWYpptvJjd7nKhRcTpPX",
  "key22": "4GhBHtJfidNBEjD2dZ7PTW4jtvdKPaA2t7vgwUeJ3hcdPnjZvyJbEkTam1gWoXMVxGtUe66e2hJNDKpv86JHkh1h",
  "key23": "4Fddt5zgh4s6XRcjzhKc8xM1dVe6rGpWmVndWjdjMnKLZozixvdhZkek58wgNn6wBJwzo6rmWfNAWXZESE4H7ARY",
  "key24": "4VkaRjQUAHMst8qXQzoGRURx8aG4rPKnhHb4UFVActLgHhgMXviHJFdK8gCy4XXjsFsmzgF4AwJ14JR3hwpbwB9Q",
  "key25": "22ckNaLqWUZnFoSq82g4SRq5Tv6YLNKGAdRSWLPqch8r1w4hPS98pU7praRUKUb9NuPa93tZRp6jcKYTdz2Sd7Rh",
  "key26": "5YzH7QGS32nRuTdtvFu7yaEx5H58EGJZ3ToVkbYELr8sgJJ33GQmxMH81A3a8mFeKkfFUHtB1iuZ76z4uDU2sA9U",
  "key27": "57sUTZ9WzRrUoCSQKxKZ2Y3GhoWrCCfWYEQsM3xtPAQgHpJMeSDTnDg8WvN6QJPx93Yfh7FsAs8fxvYmvBtpq9qY",
  "key28": "gk9yn73VoYKHAumZirHVKxyFycAPauQLUo1kgYYuYy3yFqy16GyJ9X1ZzNewnKX2NrJtQ1SCpcFqqRaQC6iLbVf",
  "key29": "3oxfV9cCkqL3wrgFC1SHWPfkUpaXoghhSTJTfzwA5fyahgZxKkESf5jVHp4kCSwzWwii85WDvC9Uq3PMw8aYNbrb",
  "key30": "26cwEM9tZWQdhHn1dnt41bREb5gaMELcEGq9JTcJWd9T1Uqw6weAmb4ayCVqRdf8nKWHv95vwJJHfLPvYHiJ94Kh",
  "key31": "5i7QcJ4pQYwCRUJzJE6AYKrRArZnw74n8WPXsESZ5R3kL3cSWhhQkJyhA6LA2E47mZHjCfupuVYAQH3igTMd1gVa",
  "key32": "5Y9foEHXqVyNYH1sb9R4h5pLikHu2GrkvyYvpVURaD2otVc8zkiGqGHTZSorJaC5QPrKdV54NQXW4EsbXt4y4Eiq",
  "key33": "4ScddsgTQbaQu2zaPuLj6A5kYyNVyjP1g584ZMSppfyapxfwWsgFzPHjXpon9BJTs4m92GiatW9zJ2hHG8iRJxp2",
  "key34": "4xHozFp8AjowKgTXzuFEo3JUdm6i3eBeyQwLg3LQJLMwNxTQ1ELHxMcsXuFNiZd5mGeramwx1A5Xsrpck2J9d9qA",
  "key35": "2gLyG3azEg7XPsuJpnhCTas15Ss6rbvJqSETNqqMWWv7bfgGvf9XeJMVCgsA7AitxVyVF9s4EUvDYkdXZU1NKXk6",
  "key36": "LAmcytzpJpTyDvoqq7w8gcdtcJBEHim7zTxLFK44FnVidWSvCDVjWkz6Leu3tM1iU69eYveqK4bzfvkUgctRjam",
  "key37": "5XfChPRAvU47FARrtZM6DYdmvXQuBnPshPSLLAFsg3N4D6i3WpynhQu9u9NkSUFCmo1ip14bC737qnt8CqXwwk2o",
  "key38": "47FpLZ6kDsKuvmHmw44HNbSZ1x4C4rsJspJqogM5FFseBhjFnXMWb3xhPexWAy816x7KDvg4KGkH5oe7DCvBp7y6",
  "key39": "45HzvHj6D9H4ENqSvMSqrjoEoYty4AazmLFGkbaYMPWsN52nog3F2Dt7fU1qQm9vnUGxYULQLFiFmDNc5owkTEmY",
  "key40": "5jLCzVxGYDMy31s7NtRRaYCdDensWXS2xLLYJzUiDtqZD5En3ddxFGHQ4dfgBktyaRWCndU8GnYHauVZzCperMbg",
  "key41": "3zXBD62tYqEVqvo8Qftv1vsziCKCq2qCWaPZPEgtx3DVwmu5mFVRUR8DFSroa9hydYrTAToPqBEmUb9NcRpuMsSW",
  "key42": "2hFmSiQ9mREQ3xrkFzDdj4yvc3bgU2n8d3vkLR56JgDMqmVWUTNkJgVywzke8g7ZYJNYfzJEi4Vtw9J5Yv7FHu5w",
  "key43": "65HWLLMna7eGKVte4TrqogW4PRywLPgjM45ZKrSnn4SKUBDHB8L1udNtgqFmZTaeMp7StCzEXx9UpYD3ivcS8tQZ",
  "key44": "5jrEiZYDd4W1QXa2i7Q59QfSurnTbLnCL2vfFoRAFV4Lx6MakLT39xKe8e5GqoSHxs1ndqa6XoQoggN7XT1hhVyY",
  "key45": "3RuNaTMngBn5sU2aSLMmCQ7uy3cMMs8anpeAp4qArRthLUpFJiJuYAtH215K9q1xte93EhpT4T12NYfpux3P5Wm5",
  "key46": "2VkX31oGp6BvF2a8XcMceSZzNCnXfDyts6EybbGDn6KHrS2d26CJSLQBMsP7dMGMuMhDLVRmnw87YBuSPaJZyaNZ",
  "key47": "2WthudesKdzwxPZjcV8Xf83ywCYanp6U1XZdx3SY28Zv9cUqjzSnLA9NiLJJrLNc4kDYz1w7sdBArZNvSG7k4J9i",
  "key48": "3t8JAto7WB3NPSohfPMYQfrFU5rRRc5ryq7Y2iHTkVCgmZZacrE5HQnNvGDneePMyF2dEkuQ5sAdtqMeu3cg8e11",
  "key49": "3WbjeWVEQj6dm5H43Xf9bASAaPpgsHS18Qk3jSmXuYr266ZN3cp7bcazPCiW9Qyj2BEhAjRrteCKJHmknrRTcg1x"
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
