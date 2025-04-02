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
    "5dFDn6pdSNqMmphnzj2qRih5Dp8VBektWdrJgE4jWXVgTW7fuSvwrcRPSHLAJSxBF2F4DqsSDXrTDJavmLg2aTHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XLBjEDzxAQR6WxfVT1RsWGnXXihJ9gjXAzVqjCgC1oqYSP5eS3MSHfdQBTZHLJijNDszWrPS1nRkutCSNcAvDhh",
  "key1": "2UZnZEdNDVjy9QVBjCbt16bpgWVXfLVkJhijQ7Zqe8jjvNbCx9L69Rj8pgdxRweJVME7KAXpLLBf12vqVEdqTyJh",
  "key2": "vuMEuzUuTufZREYoPz1YUFVa5vwWhp3qs4Kam4djySLZHjCPBmt7WzGxYvSTUQad56FLCPk7vj4h3vjk1xKrX92",
  "key3": "5RukqCqqHsmBMLBSgdGQCSbSKCSjwEg5J4VWLmEcQmBAeGXfJ6LYBVDZ2UKBacEUrVpY4Ysd2D9kPXWRuJ4DxWJ4",
  "key4": "bwiqrLp3QqsHNqp9XAqqFibPDQCaeA7URCCJK4F238nPJW4kSjEGkqBiGsSNwQgMdy4kkDKN1gyBoiLFkuzvkos",
  "key5": "35LDSuYBVi2wodCXsGkdpptrUg2ieToqwrtkLwswWp9s1PAVpBEtuKWCC2CaZEGmBtBkR6j9PoSgwkDZFsXGYitq",
  "key6": "3hpXSKSjcAHx5iKUvng2aCfjrCUenY2NebvKHhABDJwaqbe69EVsHxo6C3HmL3krgA1WLG3EV8498tVbcbNeqNkR",
  "key7": "5GdDEZ9Q99VXKTf6Unw2e2WbsCjBPyChBkqt7Lf3E4p3bGWAQjqJQo7hAgh34KXZiGWujskJwxs1pFvwzpaSdjKt",
  "key8": "2dmbFJhiduFUKjcyLdSnhYWRkeCYTtcR44LtttpXNyzp5ifjPXPSeLDiVcGG9UULTZ8rTVpyNBPG2EeWXizawnwP",
  "key9": "4AiHgwcjM9VKb91iwjdb43ZCoNUMjDsepddT1g872DuMp5G16LZPU7jM5LW6poq7oxb9kCFXh5k9GrreFZm766sD",
  "key10": "4KhmkXsqmoG1aAqEsYNJR8S99QwhCpExVyc9B6sMX6WqGogHiANMYYESnU37WbFAHwCfSUr1MQhsxVfH4SToF6XH",
  "key11": "2gpX1DygqLekSx1zq714vwQ2VAeNicXLVowT1WDJRW1Xvj1YoEy8iuHtWhgeWacjre1kFt2euvo9HgYVAKfL3qqe",
  "key12": "39avcScVd2Mog8Kuqg7nf8XKdeSs88i3dK5U5CdZfPgbLYX7uZ1ETa8NYMjywV2yWopTHWvSAJD2VfghwXjpGFqh",
  "key13": "58Lz49w3tSeYCxYMMCsyyo2Do6VyxmuRGQD5h99uWbtt516tnEr5pC3WnpcLgj7DQLFT7FptegwmZoHgCcXZLXAE",
  "key14": "4BeVRZZ7YfUjoQUai8BUgKfCAkDvFWmGQUy5vspBiCMtr7zaZB4wNAMA9n3SobC5bGj6AuEJJkoGzc7twotjWYRh",
  "key15": "hqQURzhVotk46QPMMwPefhePEyEzNvN68SjX1641yiCoUv5dzsCUbh2jJh2pzWujBawqwD6QSgBrkqugSnaANkv",
  "key16": "3GcbTeiqAMskHoGXqqLVTMG5XEQ7NzgUqF16BJwRBjqSJgCHXxYR6GNM85TQKUEB3sz2vhfoRrjbV4jB9W5enxSr",
  "key17": "PHuStPPToexkSt7UGozfwqQ4xsrcEGjiDHW3GEnqag9U1DbPeeUoMdYK3nEqQvLFv9UP5XvcxXb6bLXjdPjN6h2",
  "key18": "3noMKCRVyXRhTtwhDr2tDtKd9CQGyVPsGHis2cmKzYJX4TiwYsFyKUpqNgyjxcsBmTmTZQMN3Wy8WZznPXsdw7hF",
  "key19": "5snRqzw2C9eG5R4NH24bazL7PkLgCte9G5uPeLonwoYbb2QKarHitf32SnAGF6ztBaa8CCftuZ1fmEzKtSMAQm4r",
  "key20": "4X7u5dVLLNyzpiwsRA2FY5Z8iVARcCinfmqAJTcNX2Wnm2seQk3GfEFWUAdWSCKqWjsiimxGvmPMzmYhKaJhsSjX",
  "key21": "59VshvMfF4QmVnqgMFFNvUV25JZV5itg6y8gTfTTHXmUTYpVZJumxkYCdM8Da5kmXY6eCEWgbBUP9vSMMdmrZRAS",
  "key22": "2kudm2baiKaSQaajTi1oVgwqA9H6TXduQs3ry5wmYjNYsxFM3pupVPDtk4NtYAgwiq83PGyDo3bjHjHD56qBhnW1",
  "key23": "5Kf9sZCDPmY4D3iE27uUcAxFwD5anNE9NvVm485s6x52NJXQtwqJwPDMg7C6FKA2nMwYbcptKFvbrWKbYB5EhuPh",
  "key24": "4zmFX7jpGGa7cR5Uf6mmTMR4bXMkUYQnnmPtnuNQ9q9i1i1CwM5yEH6JtiwNa5oojUAhdNpJoWWZfbz9iNWeDZhY",
  "key25": "5xHXUAdnU4nwC1cDujX24NRQJxxFjwF9MyfSdV7qgayK8W2q59Xhtv5346sRxVdTxXZryYuQ6zoK2Y8jhirKLo48",
  "key26": "5yxGjGssehnJUF5gbthe4gUqwCE2GX9WKFySA4341XLoazhiUczyMnvJ2a6wricsm1E599nrNJedUaGaoEBhjHvV",
  "key27": "41grMW7oBXr7ykrM8AaQdzSpJ1YtNq7UozGSLYWTQnaBu1WE7q76cWxRpKUBUVeGcXCzQEWHkgjuBPg48GMbbwkj",
  "key28": "5U2BRqLrLY4Zggd69GRktnxA9ERghvPBFbMQCXxMZYELftvFLudurLbebCPcPTDxh4AMmXrLEMjdSvTAe8T7VCci",
  "key29": "3hUvFS9FZWaov6T121sKdCfufiQWiBLZAhkS6iWmPsL6yJwzRiqWM7Vn7UwpMALs66iduoL3fGkHFB3H5LbMbmXd",
  "key30": "2y4rWVQvZ3FDscnnBjXNyJfCMvZmfAxQ4H8aWCXVgPqnkVEtYeS7ApngdKz2Z3skNJPEDinLF57fbYt34Pz6Ha8p",
  "key31": "2sM4NwMrHB8GCfmo1C1RSQzWjrKKDGUXCZinPyAGXCgDauyN8MMD9W6UNKFAukG29itScwjN38LM5GWnvTNeNYgu",
  "key32": "5Y1HtFvaQWLe2AUX6Vi9EhnfMEdT69PCTTBX5QAGj4ZMdTwaUeRQkU3PyRFJ9D4L1G4zkzEcTY2JDjazHFTP5ZLd",
  "key33": "422drLtdHJyxPQdPamofvxYeEy6tMqM96Jcw3f5ziCDvzq33vvL2GpqDMpVnJfaAkTykXcWn1xfDFWAP5XAdaH4x",
  "key34": "5qYi32xFHUuXMWuZLTwvPdvEb2eQ9nG4Q1TF6ztfa2PXkaKG3BKy19dWiuoe7pp14s9k3vv72rbWTonR8vHEBorL",
  "key35": "2khMRcWmJFxmkKUomTFpka4AoUhQg9e3Qz4RYxLAk9NENDsxoDvWqdSvgo8uBWEYcWKmGufjLBj1x7tBC5JnAKsL",
  "key36": "2ah7GFmp22XzqcXybsyok6vptxUeCn3E1X3mFUW2XAy8DQq5iHN1j3UaPQPaLGthroKfjP7r8aWP6HG2Gu4aCExr",
  "key37": "5jwDcEb5pHV1KYE2CoxE2myaYDzwa9Sdgz45173UUZeRjZFh1Haoo5YE7bwtUv6NM8eAXQm5c5JFYGYtDpgp2ET7",
  "key38": "2gmE4KwC73AtbvVdNdryYdL8EkaJkBqmJj7Xb3v2TuN3EyKNGBsbJjxWZE1ZUPRcsn1abLAmWV8RYiJ7TUT6vr1r",
  "key39": "unTo6g13GAeu53qqmLX37mi1sAK16ArT8CueUArpRq4fJPZ3Z427Q6aP6jL6X4BcAnwoXo7qgVvod5wyMc13dTp"
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
