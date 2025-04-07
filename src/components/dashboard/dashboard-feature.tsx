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
    "2YvL1RyRtL5YqKG8uqueG8GZmw4rw9L1PyBhRc785L16ZUkvY6hQRzsUVPBEa5v6iMcXNYsi8mSpebJGqTdeSErd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dEHjv1xcaVHwnhwZaCd7CCnyR5x2UNZUVbA3GQ6jd5XXqNn33p8fjUfiRkMtxjKMYiNFF9Ee7n4DJgSi48tXCxB",
  "key1": "5mNZ9PTHQYRXajNav75hFrtNpSye5zoiW3ms92Sjt8swPqgp2yUZfszZqHPEz6KAMbbZdNApnebingArE2VKhzcf",
  "key2": "2sgtwqSktd17GCKzEp5PCabYRoZBVA9erhiPueRV658Vsj6FG7T1F89SCaGhdbHpVBhAuv2Md35ZbCt6HSZjB417",
  "key3": "5o3BxZosdE2KtpeqBMD4k4u9YGP41B9648VwcNNNBrhv6AmhhcnPVN2V2vRiUxx9CDniod5hCZ1RsmVcgivTJ1qD",
  "key4": "vNqhFsRv1oygDKSRvaAHiVagCjCZoLzxE9pVKe46QecF2mWxA2KRBVpBEQDaSU5nUkqEBBQ4ymMYYV18X3DhAuS",
  "key5": "5M6uyrUTBC9twMC12HaWB2PLc8ZfPxVjtF9JZPCRDTT8ZrQF3XNjvWd8KeRphM8SK11dzWKWu4eNPPmoN7gqxtba",
  "key6": "5ujiS9G5vXmW8q74bB3vBH2tz2BNiBNGU7NcJ42dL8q9SWe7FbsBL36L1dacvYoM7KPcPYCo5URetYQLZDk9Cifi",
  "key7": "YfgiBwKBTXPHBu7iPbK2q2FdqBX6Hc2bu7badcc9uXBmJFu6oVQCSjjVgSz5hYmKc37tdZf2wctG1qw31ydCFEd",
  "key8": "3o4eis7CBns2nyiE1dM49Y5TPLqTRU5kUdLVnRbP17C4K13AT574r9GUYzwn22vJA7TA65D2iVxTWcH3MvA1geoc",
  "key9": "5Bha8XaEKtiX6KYBFzsayKBskA3s84jJLtHSupbGxB3tFWT4dGyMHpcY8s3xs1a9qmwqscYYNfG8h3JstHr79A3D",
  "key10": "2CPLKZB6o5qZrb6T3YXjc9NQVUKovM2xyPxURFYLLwSgPCa3bTY2j7dvQwEcJEN3JPC16cpL2SEHvtpPCLv3cUb6",
  "key11": "22xVobQuX9KK3dLRWwhH8ZZ7osVS8n2WAeb1eUJgd8DMwakxcQLfhZuoVYWnKMvSB2KxPnHXkLs69GrMzdj8hbF4",
  "key12": "2dd7gQTaBEWAmbWGuRQgDt9apqjt7P2B3EVtY3gV21oN2Mb6Dxm1feHe2ULFEoeRFw8MpC9ZyihMkdgf4pUVgmBK",
  "key13": "4jPn2Ftnw6uFmyaQaVkuqJfsRQrLrfExpWjNkf6F8NRmvz9grygiaX2VyrWCYUQzdRj7ASbJ8TtgmjG5kDpU1zec",
  "key14": "2PPF9evxARjYYJaxAppQ9yp29VpVAY3KajWVxdH8B4T8w58kdP2A3ECK9SRJM1McoaDBj5ABuvzmiijT9eQBzz5f",
  "key15": "4rtSp3cfNmdqcUKEzapLymfjdERw1CP9HNneiStwGQV12bumzW38oyqSUGBHMgoMpdkvKY8XgBoFVZV6HLs4r9t2",
  "key16": "2o3ZdsMUHamyaAE6qAMdhbuPt6PBMyY5DFCjjYZ5aBrAcwPV3v56f6mmaMzs5NseX25N4eQrFJbS7coK1q2RKh5V",
  "key17": "3S6Gs9fGuhS5jr9Jx77Q1CQBb65eTDguwxMg6oxnitbcWDMPkEjYaxgKeTivoqxr8JJuq7ZzVq9mRofn6YpCPgaq",
  "key18": "3t1CTpTTQF8SBA5jLaCUXoqMT3LyNRJEu4JZw6obC9biaQ918waqHmxryopFBD19f7DSZKdYN7Z37oYYeUpiSGiQ",
  "key19": "mNj9JLK15iTxiK1DX1bYvBUa7zupBv5fLac8QEARyMQtyZbQChec1r7s9N1WbwttsEzqvT2d2nMEgr9jJMTTMGQ",
  "key20": "4hMtpQKz42Hukf4MceZpXMNZgBSmfEvgDZ6Rv7fXMYYzqAsJY3K7hocqEzm7oUgxN93XxTihuHMxKE9RU4LGzFyY",
  "key21": "6zTtieFxf2ipZdbetSPkAg2cjz3j55YpCdHqwYF4o6hU7NHHcDSwVEfuTDeDbCrDunEVdG5ULECktx2oAtKpSvn",
  "key22": "2dzGErrCiUDZqEMp64yhCQvHtstwcjUPtkSvbvSJZf1JUyQdaSruwHcEsXJwDCSRWyQRbMCpDGmHKDdRCvjp9Kst",
  "key23": "4UuGSw1D8Nz2Qj5XLWH66LejKJNMGGMwUboWPx9JgMrjoq67p1FhAmh7squNAFnxufv7ND8M7mEKdcjGeg7vGnnb",
  "key24": "4KXx1fcu1eGyLj5Dwz9AhK1D6HjgfYJZVsyLV6yPxK721vwZHDPp1zG2EHhNK9LkkDaBHNrLLoBoHLWET4T1Y7mJ",
  "key25": "4UiNmQUCr4NVqCqKrjhUur2qWt21Vfb94d9ZCQNoy7rfxSZSotQzcVXryyuxiVVQDAgKpzDwUgs9vYqvvmjZJqpa",
  "key26": "3QGqkFQcaRVrZmgQW854Vfd55nEGEcWxZkiSAmYyTduSjUoeRcgVrDRHEheSKNGXKtWVhe3P3J1TVXJwJntY61P9",
  "key27": "Yag5UHG61Qeqbqs8mPGKYR2YHJTjmdVTqhrohspJaBZopU3HhLaLie5ebVDwqqXFUCUkMfTu997fKfDvPLFqJ8Q",
  "key28": "65qS8yTNbZXi1KGooozPCDmKfFNq4cegn5NbtpQnop3PmMrqYB7KvYR1uUkhcnGMMKZA1zoJN2yEdZudDTF1Gcun",
  "key29": "4DMPmAmAwUYTo5RE1KndNo5FDduSidrN1EX5jpXydxAceZEhdt1fzJ6ikzb4QqsUVcc1UM4jacbuCtFAFafWLXkf",
  "key30": "3AyCkxCRNU4fZqmxbKD6xXgtJ9VvrwACpwYmMYW4sTYhtWZTJsH2aNZnVuAR5y7vgL6YpF6xQ7nC31t6Dj9LHXmC",
  "key31": "n3PwYTZ7qAh6KaMiAihK4DVRmrTgHLtoWtjcDt18hYec4Hpkzqiru5KUFtQa8pav8thFzGCCp8jW61uex8dvwVB",
  "key32": "5zh1LFTcEpXVi81NzWHBM4C6J2STkRfHQc8Wr8YxRuH1hABNLfaoBP1Q2eiLcvCta42nrP5Xor4h2NicxP5Xvx3d",
  "key33": "2g64v7X7AseBWG79TSfCuXXRakjkxumo6pkegmUZsFfduAdL1LaHHk2h6k5tXAYbEGSqC6UCbr7MXEPvxoXcGS7c",
  "key34": "5yRti3hY1JDpc79mDBieQDc6rQJZnEWvSwuGSkwmTekECuDjvuAxfXFoDycDdGGi4NmsohH4uUFnMPFJy77sbFYG",
  "key35": "5puRVZk329ZRSc85QpC1yG36iJ3xKouyuoipfF2QDZ2wQRubdpsx41SeWyF2u1MLgfmKaKjxk5HEwuKAhDYMzjKY",
  "key36": "4FtMETfqA1XEjGuerfGSsTAcYK5i9hpkXwKCoWf8roN4jY6oFqYYQ3fRNyic5hPqnYqy7Fgzcf71Ag5Vuam5TxAm",
  "key37": "2kbUHiVCoC83gYnmcSGXRUjaShVNvHtHtw5mic9PdDKjYW9cxpkwByW8sCqpmKjEPC49WyMsjBALWC4NYgFvYPap",
  "key38": "4tdahgWngCKRstUsdyMtPn2QRDzJqrnTEWLTnjregSPwnZVAC6Hyz8sKVeQcbr3BfU88y3fdKfmiqUzadWTtrFjw",
  "key39": "t9DFzSXmBgTdcEUEPoHvQGfyjnxrxPzGUGbN2tDmJJzWxNvhKdoM8v2N9QwrbeNfqSQTBsDkXMXVnjpKxrowtaS",
  "key40": "33vmhBxccJL95RxB2U8qhV6nvmBk3SQ4hRFiuixvSp4YwVvahCBrEGUWQBAc48DcXbSgtbH7H6WbqPB48exKixVb",
  "key41": "2WiWQPWXpbr3aQSDH2VxU6QpGNKdRGgjiqs4cRFqBf9sj8M2wvqM2FbrVCiH6aJjh2EFLhv8hNUQkBYDcXCHf4ux",
  "key42": "56bgsuzjXJrRsUqdw58H7GGsXiYQsePwNwx2saJ1uEncYErXHMP4eCwef272nxC4Vz7Tupnq3v8xH4XuFAmWaP5Q",
  "key43": "5ktXVcRGRL2Tnc9qMDktGNbkbJWP9iznwFvz18riAaQRsmErwdXU75o594c4GaYnNZFu9odeyGUFuvcj68mU4wgt",
  "key44": "4hb4XFURWCRBcmWwuus5kf3iEW4VTsVYfakarkonSWgVLLkN46328ZKkQqRZQkgVeDaiB6pwdWiYVjXbGagu5L6e",
  "key45": "27tNAodxB18Tr235genAxmRQzQPJq2CyR9UYJBSBbQKT7n6itN4GD9uPasQAH9MDdLnBMPgMGAbGAKsjRyjoj9Hb",
  "key46": "4n5mnrV9FKKjuwJoirxjPVQvEMybdxd54oqC1SEy9LCyu3mvFejNthBYDpPu8vxeNixBprEb7mSGdrsakFSzwmq9",
  "key47": "2v7yiWpp2paQd8MGWsg7EBEyrcYw1JCbcF4dZNyBsYCiu4F6VP9guCt1Zpvru6NwQJ7FWLHcyoeQWD6TcvFYGdzG",
  "key48": "5qjE8YwcsEUr5hhjrtpmMJ9NZDByjiBcZp9kvMFxhEHMRp7o4tFJpgt4JS6RwPZZ1v46yzcZ2C9GibV4gNizS4jh"
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
