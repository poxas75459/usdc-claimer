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
    "54h6HTGgLtFyqRvch9pT4fy7dMaNomfcNfYuroDbPXKv8NGfwqm6P5Nwzad4dnEscBtFpWwC12NWFtrqiwD3swEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EyHuhS7thpZLfT8U2vBqbRQRHQd49nTv9ED1rycBoC7ueMrWGXrzadrdWSxNMJdf7gD1QpVYAuc7Wmoc88EjN2s",
  "key1": "4ucrdQBJspN5JNVfqQM2BaHab4sLMGeZw3BGZYtUEuXJuYg3Kozt4CvLEAnQLXhBoGpZsyZgQ47VN9D35aEy4Cq5",
  "key2": "5nuEus4CqVVN56yzb9qUPLSQQBcojJbTBR4e3V55wgr5PrNWSpBQdTUgeBHfT1Fjv4EpvEGsfT7v1Ts5VFJzDMXj",
  "key3": "8VybypBLXLRhtRE4aCH4Ln9MpbSG7wjRfJmfaiGazqfQ6XyY5L5zpHi8ACQGP58dPG4QgAhokVK1iwomebmD1u2",
  "key4": "44P5QAueEWnwA8qgBwe7E7sueHCLTRzorHq1vGFavwKBdyvwRj38ia5Yqba2Tod8adJPjJXHUXbM6P2NQL5SXL8j",
  "key5": "2T23bqhrk9o447AmGn8i5zdx2f53QPWAS81HBwpu5BLo768RCTJuWQj8DSgHZGD4UWRVwPj1RcoiRuKCt2d33Ggx",
  "key6": "5LDTaJKZTeYNuDPL8gHPDHddYKhqHX3fFn42LRWLSyLCF8NYPXgpaNZfo7N84pcrGFMd9XRvS3apdDNBTCF5K21N",
  "key7": "2fPJ7G6Qg7qnZHgFvaPko3pxXULT8ZTJDL9AXZ8ChpjuzhKqLcmvt6s5tRZMaY1TUE4aYR6G5izkzUSjNawfRtCz",
  "key8": "2DoLjSXGRUCtLoUKmgD1qqzxeyW1ETUyj9UyC9zSE32vKKqWn7oDJLrxrLCQvYm89LPDXyniUszvL6fnRmeFbP9Y",
  "key9": "2F1PHbvTJmwUvd1DjVei2xHKk4MujADp3UP32C5iwWbZoV4jhd6wDphQPgVZdAmYhYdia9jYRuAM96dJGnZQotJG",
  "key10": "4jSH8Tqm9jKDbJGakFxhv7L2g3Diph3pmTuvcL2K4g8KahC3yGriLxxAX81kqkjwVDfnWrkJn6h9dyHqq4814q5V",
  "key11": "3pSmA42dFrpCsUvCbk2s9LyafeLaCSeQwBYFwSoeWFbAXdmDsL1cvu5ttSmJYxNzunTeA7on8Ljgy8EWYfvipoxB",
  "key12": "c8dXiSnacmYbjAdWgpyNEokuzAYMTz7eDrDZzZeNpDtA3yCXyib8kJqLrwCjDQam6nxG8iJBQNMwSfnacYrgxW3",
  "key13": "KnmdwcMMtEsNGhd4hc8fENVhuHVzEctGF5xVmV4VGjfb7X1vt8C88B5KXnMGpFcN6TQbHPbXbgizX6pwzJsfqBQ",
  "key14": "wjYP29EUkWL6mcqyBK4zXhVbqGpWc7xqnNwtsLUa4zvHXnqaLZyceo2iSwZXyNq2JbktAxgocMMpRYEHpz5TyLs",
  "key15": "4ieWBoq2rTeofYypwujkMEimaRnkdiP67ss8HY1BxdcrCH9Lt5cZaNj1g1pVpi5JBwJzsacKjknbLT4vdkgCv6s8",
  "key16": "4kBjFZijz5y22i7CP1uoXHxeGSmnQNpd8w6MnLiA6geoduK6FMtwMHDUvkTUxxA2CxF1AACwqZBu8BFNgaYmr1JH",
  "key17": "YYGgjzyCjyaaKeeFe1GwZmi7BGBQQfVMNwV1vAoweNhB79tcVfiHdyKGgSuMDMzKg4SvBZEXLyvz23NJ1xFB3rR",
  "key18": "3UHU5y9zXd3KZjsRJ4fR9LscpgpBcZYMKeBCzFJJyFmBUTvPiPGHFkYM9wqgc8gs6VHfyZVRLAqdFmqJ7PsB8Tda",
  "key19": "ZUH6yVbjSSwSYLoCGNqTFLqCZPSszXRALiCam9UvhChTeearKw8UML8cB4z6MHRWPPpw2yfMR2pihENV8bA5LQ3",
  "key20": "3EJraJBpgEc7GSCnmBD8Xva2A4W1J1C472jcBzRs49kA32VWdjXoPgh3c69jPS9nCDy1kuGcxb3mZBx1PLP9sz9v",
  "key21": "32BeoHPvYKoVE5ean3sda5rQB7NC4ExGiVoijpU1ZuZ3e8Uw7j2eMRXwfFetvRSm9PTn7yr5PiUw2LhgV8QyW9jg",
  "key22": "55boDrp4hgmaPpAYZ1FVxnD2MoJPXfSroozPEMdJ7yaSuK6ZupsN9WVt29w2SvVHs3rV6YXrUQQgEENHru3ivUdn",
  "key23": "2rnRqJPE5sBmBgpYKGRS9sGnTQgHGLSNqToCDrVRrwDcRsBAUsfnNBWCUeRm4GBSJLQ3MWcHPkCGBeSTaFbVPdh9",
  "key24": "3MkZrtjRB2Vq7CFn7HDhGw44MLeZZbUWz2iQR7xbW3emmyk7mFLxEdTiBGp3CnUpdihkfc8RFJcbkHY8PtVFggtG",
  "key25": "2xBLu4uVUs3BeKPeeK8CxFUa8M1VAW4xnMc7A4pB7jFhrM1BVUSbkGXGxece1YK53GiBtEAYGisfcex4WiLG4EDD",
  "key26": "5Hm9sdrsDp3yfqNFK5koAHDhm5CoiwwVJE8zV6kSQNtrVAmnETEgUSiW9xMSqZTWJnBSdbPk51sWBGj4CunzADmB",
  "key27": "4nzRatYRwUC3iB3MykRn4Z2q4H3Esgjxi3cZpN47fXEq65S43kFtMSVjQKyMbq9SFqR8jqE5kAaWMecD1WXEotjD",
  "key28": "2HMKw4xbYK7ZSngGF34bgqTDMo8m9rxPjYVNoNBuQiLo1Z5ksYuf9SxJkrZvAXJnNmHbWBkF37v29rpmKo5DFqXd",
  "key29": "x6cWBF3oqWgaDthyQqw2gTfK4XGmTNWfJDaNUEU33TvJ1BA3mFme5n76HXtAarVyuMs3cvT6LfzkJ5ka7QE7XZy",
  "key30": "2F6aTrPRUZi2tPmjiHEFYaCptzQMzqVDtk3mFwzxKdjev3Rq1XGbAJUJRepvLTTaHffZmNvAErMjFPo8C9UVZRP6",
  "key31": "2w6LFCNVS3BwyZQfYXGYWC9LAogyBYuQHQwLUGPyPWMZwgfgMnpKpFvizG2BRYr4PCqU3rDPF6gMmxvz5MnwMXRd",
  "key32": "2v4etFe9Wok3LxJNVn36zr4Y7hn3pJ4wwVWQAW94qfbL4ABnQzAg99QZjuqHqzrdMjpmhzvAiKN9BWCPuZ5H9hdi",
  "key33": "5aJWqxSU8qphHeZM719VGDh4seE5GMZKdTBPMYWnciHbJzkFt1gZhT8Fb9ApapidLCEFLzEdtmDzqx3bV1YUajkh",
  "key34": "3o56LpTgSWhJxoeB7BMiuhKd93ySRf2AhtrLH7XyRPyiYJa9tLoJwwZsZxLC4cCRHEV3ZL4MBGfgfqwEUC5Hh6zp",
  "key35": "29ZSu8uEdNztU5njbYZ65pz1UynUDYE2JviWXgyMQy8nsCSn9sZK2yLgiDGgyXMvmfrbeiDa8KAiBvKnD5jJCSid",
  "key36": "3L4hAXBQ88JUwWebdLhANjwgu34Rn95QQid9ixn4N55bUg4gy3kmvdmHUz1dBLS6r4HwfMkf4CCCigmNkksPp3rE",
  "key37": "2YhmmPprY2cjPZcbSpAUAwRPtZwUY8NAqLm9jt1oUkpzJeR9DCGQArh5RshaRmXyXK7ReczisY18z6P7G6Nk6asf"
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
