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
    "591i1mimhumPuzQdUJFbaLmR7pLvt5PraGYqbiGB6edkCpRY4RCGoMD4Mqu3kAMQu1dkUJ7GX5YutN7tnG7kHsjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CZdE3NvWrRwk3phkofeDkfeQ6cKhg7MW3J9qzYzAuzCEeV7Bng4XiAche3uLDEP67NAKrxcS1aLEpkRadxzVwhS",
  "key1": "3GD1e1244VvbRN5whKZmWwib7yzJ6tee7NTD9Ka1QyDdB6h2E6GJqnHkbpUrDvGbx1GTPGD4UMdpZ2VTUyp26ohz",
  "key2": "N8kigBddUnPrA5xWBNnQEHGgwK3bbitC7Zt9GAHbDjXPCepTWZpvkayp61LAU31iRgXe7RPkD8cTWudkVP25QYm",
  "key3": "5Uxpoevr5jWz3aUmZ6w4XMaiFpVeZ4KirWu6SXEQKDxZchykpPkPHjjtJLpdieh3GMLRx2gjRbeHgAXyREGrzF8s",
  "key4": "eQzegS2ANkLt7t6KKsHwLgLzWHqNRvPgaqWp5ipRLM16hLgapURxYqUHXcCgvwkU759L7nqEjA7xGBcakPgk4ia",
  "key5": "2QRMZbZeWn58vdcdSTXLBap69UN11vcHY4FYBC1cb39TmSTf73rPFCPEV42JrzrxjvBWCp2MpvhdHvr43SpEyC9u",
  "key6": "zzccZFF8NacMAH3ri5zQgPxpMp7kAsHtZ9DMxAcxiF9DGuzVCAaEkDEtCf5MbZZBJDBwRMpH8C1yyYMHPko6qGo",
  "key7": "3UepGJ1etxxTDFEb8EAn1FG1wcG5Y4TBdj9boPEueBpDdrojWY2ionYrDj3dduZao8a3NRgSZ6b4Q3eQo6EemStt",
  "key8": "3woDA5mBYKXPNxzuVrmH9k7L3V8hUGFHLphDSzSPUyeQUVLnSVpQ7x4LvM3JoaXXZeXfBaPhyPKWLXa9gAt725Ck",
  "key9": "3mVMdYzgeCNKbXSfV5Jo921AcTYQf9E84CCb8KcmnFDcvTqoEob2MXu4zp9SzU69mRhetBErFk5poTXJQELCYVHD",
  "key10": "YGYSMgYy3BAgny5z9HHaEeT6hvnywwyXLLwvA7Fq18NvqQCwDHqgZeFzHWzB5KkPVmYgsLHCPJV6D5gmdPkCkpC",
  "key11": "42RsaUuSN5rs2vrEYXQEGH8kq6nvv42GQuFCzYW525mgptQdVk8TwcysAv5Rz44ZjRyERPVgcccsUfvMSt1ewffF",
  "key12": "4DFzDSdHPnwmSmWZzpbutfXi3BjuQW2ShsfBqq5t6g9oKrhcumnuRC4iMg3F4hVyUzL19N4qWtNPgKcLzm997XSc",
  "key13": "4sHNQz2jMeDDSP1ydBDmY3HWi1oahEdyQGMvKb5CLj713vB2pMEibT9CKKFgJQBKefZZQYr7VzJa5MNp7q8Svkc8",
  "key14": "42QywxiXjBHMjh5bZqzsZAGWzSde2rFyAz7WPLLA8LEWNqEbQ6jJhbD4A3NFXe9fbseTpwnVcmkBiCnLa49hfgDy",
  "key15": "52t6z8F5kuEPe6hkWSfutE3X4c7p5y7H6pbY3QaQzNLKMnqq9x3pgCNvdH9NuhQQ77p7APJTavdpmKFgsaK5epbG",
  "key16": "2dyLie3LE3pSA5otnmzheJBJbQYc1FC8ruqhuPzrMHrCQpG9gTmEJNfgZ17VFsnjEENKM9P6bMU41bNi9Zx9BftS",
  "key17": "56uhSsRAqp3KTvXcYNNffrNmuDzrm3pFWpxsuLcB7e6nNaixnKNuN49UiSaWiiNaZBQedaakwpbmkgABz4sgCLzd",
  "key18": "5qV1g8BKUPBMoJpgk48VC2D7rtKaXcj3LmxDPH4akkmmifCS2XvPHAoLxsRtBVqs2KwokQrzLthX6HgByuuoGYS8",
  "key19": "4sAjaBa2FQwaiiX5A5JjzRb9gdP9NK6zxR5TJ6t4rJF26RucD2wycfr6xeqfiDr6GbxjJPkqHqzaj8VSp35W5XLx",
  "key20": "5YM4sjvBZX2fF7Tbj2fFERq5QLiiDfvMTvE5jpWYKfx7U5UYzt9LutCEvSjSoZX9tY1s1ycnNaBoBBtcmzFCK3kX",
  "key21": "3bSvJz9HjfhY5v2zoHqwFVeCef55DNFj7fb5aSXzKVqUjFC6hGLAKk8i8o2sdmejLsDYumbk8opMfTBPYYjiboPE",
  "key22": "5mBN2tF5sP4RCFnYT8XSTQSKyKBXp7iwS4WU4MtpGyNw8RE6WRS2eNPqgjSN9d3m5LAKHdMk7PJJe4TfLxnpwU3N",
  "key23": "4dfkfpqzbKitETUaypPm8PszceXdMPpDBhfGRtmDKGVVSRnfxFBgrRhLnyy6j8Tg23V38UpW8yTNBrkmYFc2muse",
  "key24": "4v68zuNix1SQ7zH8kLUyArgAH3uChYnneC9tPhnWwPxNUjYuWSY8Bhm4acE3RFDs4jz78rw419rS9acT1N2Tc2VN",
  "key25": "55T8wShneozpLRwxyURPPqq5BGyRkUPPvSTJKTXQiXKbdAybJLZSmcwR4hggKwxi1fs6s5W1w8AueCJRyCyQoTwv",
  "key26": "oYefqQ8oBcizWtM8z7H6eXK58gDVAXQmS5VbkWftVpYMZp5taSL5T6rjGDQbqWAotWuGoFe6qrBKpKuL7u9xzHP",
  "key27": "5bgAzzccgykdr1sdpCuqQ9ppF2LoUGaCRztNW3PtokwmfPqhUYUrSh9SV2TWJLtUS4r77VoKpjQzyx5Ku35hEt7U",
  "key28": "KatDY9JFwXqbduh4rdx9RHHbwcuc5PHC2q1pArspguZ9rMhQswJiUhbMxKdccgQEMEH9VMnaFQT3qiat1hkvUDE",
  "key29": "4nsaxcJjqygBcEP3HbNBNMvKrJsqW7bNioeJgumEyPtpvtSKP7GoUBEugNiioKBzeYWxigoXS1Fe4n2UaUWg6CQ1",
  "key30": "44SBc6hWdENBTTaEnqxDxZmiLd1hoyYpKhGa9FgWtBtiG1K3FogzT1YXqLrywppWV6G5ekBTwh7v323H6LvSV6NN",
  "key31": "4boywbbCYgYEGh3Z9shz22T3DbkmEgceFUMGd9d7UVEw5ySKT1qst8CxrKWkWLdJ9f3HJuCoywKsN6DtttsfWKU",
  "key32": "4TdAxdz2jcVry7acVqq2FV6MM1yt11eZxVTkY5nVcv1sEPf3SvmgisPaJNN8xm7dAbmKiv9M74hBjEjbU7mpy3MF",
  "key33": "XKBD9wup5oK5cwNP27usi9cFo9zpLA37yAN1qMGNbQPJJVqhzm7dpQxPpyrpGrEFhwaGcuQ3GAN6X1PK7TJWCN5",
  "key34": "5gcRRQYSed9B9RhhWJe3yK21XVTVVRv6Ty5znZyjuc9JJW9sfkWJ6Dx9Kv12d9FEAUU7u2fq2PwGjmxoD2ScY8qH",
  "key35": "4ywNDHXqAmYqFyaAwKB3VZRUr9PkUsHwpU66yamA9RBpwitaRpUvcdWRFTcawPEVhkd68aMYVrojoUipGkco3YfP",
  "key36": "2TnxrbUxrsq2eTUN2Uj3zpTzmNqubLaLohqqTNF8T8zK3Yb6qFuN8CA7ZFJNdb4ZfXuEsRuk9WqQwdvq6nxfebPD",
  "key37": "qJgpxbMuPvF41FaVpcxCZLRA9ArZwuBVCug3fUyypbB3NXQMgujiHDW3twdfQrwqnhSeZs79ajDFxt8UEQp2KdB",
  "key38": "baMuJ6WHH25fVtWTfmuixuMHkjZAAvzu4PpLHD5ALVZnqhhyop56XoivvdFYXwp6hdy4GdcZ9FFUTGDmETCou6L",
  "key39": "5zgLAdEW5gnbtu8Kq8L2GMTmHwFrHrcM3GX5ekYXDXKRHTGki5zNK7kqig7bmRBbfukRuydFtTHxKpc5UipwgniP",
  "key40": "4fPv7SJcwB3YSFhAHBRPUUkqT3agNCtGYcxd4qthNg2Xnxw4xCvPbccR3V88BaqKcxpNUNZj29ygXVojSdbFP4XN",
  "key41": "4WTdWgV9TRP1VniJHC8ruKZZHH2TictT3DZHuDc4x3Rv7jU19zyaF7pgsWWa7RuPeFLuoZyXQRytxoU68ZXWMXNb",
  "key42": "3n2Z3ZtGQWF5uLs9mofRFyb5KPmXD5DUKdUj42qWeyU1Bg1EJUfwz3jpo4VPUz48EHj9jDinn5XnhZeCrunGdDCX",
  "key43": "4GihZHLB2N9yc4B92joNMcKnLTFngkWV1JtdQm9yaFehYHTt2KPaYRsNytMDKF9taWBNA4vWGTiiHAskWZnMP7Ko",
  "key44": "fftsbp3Cg6yzan1NZt3qgfSmLekjXBgrSYRgmjnczSGSLGf8QEw15enkDwGb6Ms88f4iF5D5mCyRb6FP9re1rtx",
  "key45": "4jYVuCvtTMAqAmZDxrVQNFd9mXzT4eFYs5KKZS9z2QohxAayeZ5yQgWT1anpzyBhAvxhB5CVqLcWUgLpUnp1Xjmg",
  "key46": "iqcRsRhTnuLU2n99F8Rs5vmoARqCVvzoXFf1Z7n43m1GQvXCVPJDgWBNEKFNkaS3C79QFyp9ozu66m9oGShQnB3"
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
