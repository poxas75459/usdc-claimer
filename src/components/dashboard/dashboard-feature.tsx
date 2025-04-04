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
    "3YYTa6HLXut7mc5tqdpucrHfhwr67Vuavb7fL9duHQqqwkfzo6LZwsYmsQvRJxVLsBD9KAzqT5nQGuJxQX2ETJL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XRU1h8pTkqndSpEsk6uAq4YRM5auWQQNAwvHViHb62nCshdEDHqdjtczBGdLZ6byBGQuLF6eDStFcFTLg3JmJCj",
  "key1": "4V3DZSdndaMv1qwCtZ4q7c8vvg8GqYfdFbMYcxQwNG3VG4P99zQZpPxkeiVtD4SXwX56BxAQEApGu1bhSB3spds3",
  "key2": "pTqC2oUkrAiBPUmBLsKtXyZT9cD1YugkNNzt5kpD2osbvbMS2Ld7BqQUB8aB2fr1dG3uS7bdAnUS4TCPoCqjcCf",
  "key3": "5YzdHAtLFqHQNggfVha9BFU96zWiqR7BPWcReXgGuE85kDV8s2avL7bFVcNtvqRJxGQXXcUjJZfaFf5W7rwpFtGp",
  "key4": "2qMDUabxcGXmi7kSWo5bZvCpRqPfkJaMXeeiRNUSSxnoRhHFEThhfE6Vifw4HYy1yDRA9o6QyopmdyYuLAKNxfnC",
  "key5": "2epMGRawi67aNmEp9j3kutmvZyh4jL4rHNFw6KjPNaStGJt2ZNEZTSNLT4JFRBPrNvewD4ax1cDmNnptRyHGuUeD",
  "key6": "oQhfavC99bF9vif6yG93xB8tPu2maz95TmxPNqouBFQckyYXRX4Fh7tb2hYpmn12TWkKwm3SZvksY5mYKL7r2N9",
  "key7": "2cbPxJPKXjsL4vWg2HZ1eNwRE7uUZqWVmZuPZ3L91UFgNdVQsjxbqxfxSWNyoxgPY7m1qSAftZjSpGmLvGpyExGQ",
  "key8": "2H82sKyiNjW3ScQ1XGxu23KyAQfahawaQJrvL2yVnoGuWyrhz5QyXrL678WfKUtCMPeRZK2fHMsVABBDXevMDohQ",
  "key9": "3DknGvqBW3NGQRAAyE1n4yhf5WpcSVo6SGRExjz51h3zBm2piApCPAN4pWLLK3dWqv2iCwEiHUWmrrvBx21hfqjg",
  "key10": "5hYUJben1zkiKMpCrGJ3coCFxBHvsNELKxHwjmPZ4ET6giVkSra1pByQnrw4tWqRGSgW2viN8XzgvzDL9VqCz9kx",
  "key11": "45Stzt3zWAJCB8RcYVxwvJptyRdnXtvsUGL7LKnZiUh4DgwjqdcUpa8GMGekNxjFGc3CGDmCn1jtH4h7feCuZPqn",
  "key12": "2HXbTSZHcEbc7US51k1Mzjv2tXgyxT6dDs1QwmjP7PbQZBGoys4aP5HSVAdXs5F3nrCzr5AjXx5KaD18MJkUtrgy",
  "key13": "5kVvqoZWatrqShNkyY3EhXY8hWkPSNdJ5pseqy8gHaXGTBLZ8RpPhgLJRLEnEG1ii5q18LrhveeZGbeY2fY6VrKF",
  "key14": "4xacbQJtjYXYmNmcbqBW9weVxFgTawq4UnXhmzS8ZQf4kpe3zNRntMeyYE8GvKGWaSZgbYz32ffajghgintfikxY",
  "key15": "3jktxEBFmSttPEJGC6411bcM3MrB3r8qDX7pLYvsvPm99WdgGByVzCJWKRuVfwuEWha5pYGMuUmKFcSHXGAbiDWv",
  "key16": "43dsSS3aphiMSa8mdQD2eN3YPfxEV5YM8Pf1HhHvM3uUUgHkvvtr6rQpyqtucLkHBVMUDKv48PWRH3EA9tUNVprD",
  "key17": "4Z3VKPFjD8xHFXDoqLzfGhqwAekoBmKeddEeUTsJb2vL8gJvweMhpQvaty7hikT9YdrM4Esz7DgQUTWEWyCZU9Nf",
  "key18": "3M53t2SkPdY5kkh5qY55rx2CVKSSMcey8fzetyCnyG6xFKk9AVpf54r1hPHyW1Q4mjAwMRqMKhaUC4YzYJsWYH26",
  "key19": "4ExJSHF2gfdDqWcV8Srd6oYDYrhVWPVdaczjSdzG5gPCBKbEkMJ9A3fAGZ554uqM16wdWUMRxE4KWakdPS1SLHCs",
  "key20": "28E4Sjh6v3yL7pgHfgmLZ7B5aGn1rnKRVwvXoLvF6AhnBdERWoecx7f4QVVqoMBdZUQGkGBjgXodHAGWjPmhaASX",
  "key21": "2dCijJ8Wy8xiQmQrFL387Nijsf1sR3fYHg4ZMo6tAya3GtFVETWYhFK3fWPB5thrV8MiZvDYBbKuhCS2X1QDP3X6",
  "key22": "4pHDRUCBzTmonhR2McwHzq34CvkJEza8fWkfaP8CdWGsPUmHCu9mbxNfVGnHnjM4ycr1vjYdYbtBNfaFNTtb76HJ",
  "key23": "58KrAzMadyNFhsNKGF2WwkSpHYjM2pwM3638cXhbW9e66jAN24A47n5Vi18oGby5X5wC7d3UgqW5uPdzcHBFJkUt",
  "key24": "5kh3MVQBWSVK4bBRjFyJiY4YjbbeYxaZM7u5oFLmHLvn1faFgstCeRySMaBjaNsdHYoV2MJckhwkisNZM2MRELBc",
  "key25": "jvApEFRm9WEwcpBqXs7LjZeJKG4b542oLYYNYtFNVzS4Zo19QtrtQr7421dPxh1Bdxcv9soDu5tJXTeFsicoeej",
  "key26": "2wBMkGtEu57YPY382jU6ngyTxZRFGZWMWRSMMYFzDbzd1FqTktmkGg1xFW97dngxTXY2WyeXU9rpAbEqHe1fk7ns",
  "key27": "26cpJ9An7XTaz6SvFgLxqNMVVwdT9KY5PCEqfHhKuVatG6STWF23b4FcDF6wK1UVX2TtABYpM9nmMw5DKNQCkPwi",
  "key28": "4AzwgmgPUbkwdEMKw2rmqjBuxBiSwug9HPQPAmprXgbWv8y6GvWL2SA48sjAygfxRpCbjTmNu94RhsAgSo947CrC",
  "key29": "2gBs58fMyWd5TtiPGgG8nHyX3PidSvvQT42WZs8JcazLoXioLtnihCQYMHQWeaWq2jrBja6hP4QuagtTJCCmzzJr",
  "key30": "K5sLV43qpXws9u4K8RBeMDMWJjir2kRhWqDRBEwnU85BgDYzFxLdwB8KBwzoJhJaL6t9jbgZfRG5JAUBNyC9Mw8",
  "key31": "12ACMvXqHQKfLK5XBAbvpd4wX4RMHwotNkD6PTfyT5apQzZyio3mPDzPwsoaeaTwqowo6WTqAXuQtEXXdx7Z22sf",
  "key32": "5XcKdp976SEGeL4SbqJVLSzCQom7pZoEYeg3N3Q3dywRLirxNRqQjPzk7BgPBCUCcSkubNWGZV3nrB9wCmaoNNWF",
  "key33": "4F2Qq1SPevyt83ihPszaFu7VbTBTaFCTWM7P3SM5mDaLgv9NWi11vQsYgTHaYKKpV9mAfCqxcarudJQhS1anUvbW",
  "key34": "2d63GxqsJh8cJPX4RpbWnYcXF8QqoxEDyeZ1zNWBT9LS23KMrrSfM7orgiQqsuS763D6nDFZnLwny7gKaTzvkCQX",
  "key35": "VHfPbhaDxDNo5skipQjfdHUgaKqqkHAo39YYDo7sQNbv426E2BBm1Zk2ubzpEt5hoCVNQ8jhaCdHzsKvidgdf6m",
  "key36": "2NMUKS9PZbMAq2heVTHkm86wSsvcfC5PJyhbeatjEvAhby7REnsXB1GLNjxnKz98heUC6gf1AAHSRRnYtPpoYgHE",
  "key37": "4BSzz9DpBp773zzkyYFvHriJE9RcZ3ksgDsrs6zuDiYuzdDHVrxdhmFnhe1HMTASRw9JeWijLso56WtaNar8oTkn",
  "key38": "2FqXR8KCfmYFiZwg1DSE7EPTnuZjAHibcE8MZzQZPTFaRwBBu751idBcRoZxmYS8EMnaDJSSbkipouAg3YujsfSC",
  "key39": "4sZrCQDBBo8eDLNFLsLnHvUEP6vwLWNjvtK5Zbw4VG3cFVHXqYgJsatzoLhAY4fb6o2MbjUaE77PYLLSeKsih6zc",
  "key40": "5YHzkRukXsEAge7rhiyY2PCDqWy32M6NdZEPmS59sjQkAuPnb55YvZ8fau6bvPMP9KL41ZhFafwjsidqehc2d4x9",
  "key41": "5e3PL6tMmCGiUnQrXaabRX9XbQyD2CcVocmb2to8675FUzB6c1BfDsmKrbBPTZtxhycFWqvnza8ivRm5vDrFm5Fw",
  "key42": "2GZiy7dYk2RvFzZQ6BKW9HehjLnZtctr3EDiFCbVm1My8boseaNGWzBSUDZ3EPHAX3SsqDb4kuwC2iWaurXMHmGG",
  "key43": "i6it5NFHnCUamv8tTheCEPUD1nYfobx9kmnfgsS9hMrHPKmXWmiayFoCBSZbcm9CAEwXSKjREnB45ydn3gCYW6H",
  "key44": "58kE7eTcUNUqQyB5KyACnWF2azM4GBmybj2CLLDswTGKWWvjAUBPT1ZwMsr9CZRDHGFUfqkPpV6kjSfLXJjWxsAX",
  "key45": "4AaGKg9Mw5FRT7F1x5h4wBjzMsmcQoR6VsvSG41JWzsqsxRHLAkYmYakDw5WUBNESEGzkigTf3rvRGkpTrhHBVW2",
  "key46": "4H7KVkAUkJ5rHSaVvAFKCcnDGHvx7DMZQrhvfUnCVR4gkY3XZSDcHczvnoXcesp4qg6U8Yi5tdz2iEPaXHiev6bN",
  "key47": "4LwRZhuXCdrz1pY3rhp8SdsS5PfBQx8puzs91rsaUxykaE7EjAurA2CYHJEtn83LDiFkw1QmskjirPFgmj77YrLe",
  "key48": "3UZzRq2XvzzugYvPGatKQrSupE5fs2sUj7Uwow4owP5cecwh2wVandsnaRSfXMuPbMvQttarEAar3k5CxGjwDUTs",
  "key49": "21z7DEZjK2e3n3dFfaRQGecxBBfAnuUo4gfzbhZXrGvNbhbEfXqTD16qn1DF95bwEt7fmmNYH6Tuj8VuNe73jY3L"
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
