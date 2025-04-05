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
    "34YxK8FLFDJL4cLuyta6JKcyzM6Rgpe8iwrrDBbpUxhXeFDipCtG18L2U7hRGGk4ZJJybtwFX8ZmdSUNrc6Xkk61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mkGT1HJKrQbyD51uW1sx6mnTv4ChggwhnFcWNxm7jY8T7D8uq8hZpJnJ3KygcrVhGeN4mgXzFf7HpJE66Q6XibN",
  "key1": "3H7gryhJ1gpoXxkokUyAw5Avt1EA96THXxvd2dCTUzThnmyHfDVVVQn22zGQdMpqKzwy9shYcbtvg2Z79FV2pxxd",
  "key2": "3nR3ipjPuJFt9BeKz6ErRCroPLaTjRMSFSNMXDNgjyivVLt7DKfpqFZNV7DkYSs2x6hBHbG2v5EDMwxvhVhfdggW",
  "key3": "DwF8Rnb8v6ezRNiKEYwbz2jhjvAXD9MVusME2WqW3ZmPiWWEY18LukoEg9dKrRRZSZgAU2yBBEgBof8k3cKFJ8A",
  "key4": "49udvFvNib6sP35zWwkAH2pdDnMQdkbqvevYDR8xe1J3GrXh7DotZ1A9wDUE2y82Kvq71UWZkQEWzivcLmr6vrEw",
  "key5": "4MNRJvkZCtmL87RyMcmsBKXTXr2TTviQ7GDhsqmk3dBrXcaux93MuKPkZmZ33uWcv5MaFBfE9RDZCE1Rpcj31qub",
  "key6": "Qd1tLWEAnDBgVZLYH6R2KLNK5MtMb9Km1aXsdKGMaS47Wf7r7kMyxhgCcqGZKSRCd9GapxayQShpnyWVapDScB2",
  "key7": "2DYQVGpdjkFEKMhx9vDLNqmnq6KiCq2yr8r4kF5kV34K2sBgAtikgAASzJC6geyjum5m5hPfmSwcffxpF9343VUd",
  "key8": "28gW9VPTJ2JdLxU8YZpxhBbS3C3iSRSAhKRzG4jct4D4HjpK6H7ex15ymyEX35tagU54XkjJucfkgQgN8Rsv8QCY",
  "key9": "5JPUdqToLtoNuqH7ALLMghNvvFhXJpVqh1LXybbW85yUhRKJcd9eiEaMsKXLWv8S8wwTAHw3uVSpEuU9zjURjXZY",
  "key10": "p1WKF4NFLgsq8iEjentnMsUeP6MFuYvRHGiJ9XdSVLvRTdTNAAaujLVVzdNyfUxkBZ927i3pPiS8UFSqVmGUytv",
  "key11": "56E8DxcNAfpNimp3kteJb8iNbAGUdKXzKNGbmhyc3kXDHET95SmR3c6QaZ5nxRvUfUzopmx9mYa8edhNvtGbZ7sn",
  "key12": "4eaWnKYucNYyrPZkfKr4zJ5LHgEobbrNFcTVVgGqkyeYrk8HccyVq5mRKJUzKZKCrgTVAbs1ESAjzwWBujfH5qky",
  "key13": "cmEyegDr2vtjmABpNK2mMDXMuaToV2XCEbBcTgYPgYKomvUxoeuGw4NKidVPkwmYoDPfo8WgNb3bf6TSAqDgQ6c",
  "key14": "2DiQgmH64Fbcqmp3f3LjP6Me9BP6gxLTdqaXqZkFEeELToYEe5MzpZaFQnP1gb8EFem9NYqpUUjrTmbr43EnBNqW",
  "key15": "2tdZRRabuwp8gp4hdK2259onsxirZZWJKhY3eWhW5JyDz5XXySq9NoJpS4JgibrQYShoBTTpKaEfWKFBikUEXJYT",
  "key16": "3BBtx7ThYbN1DbWmace4mEMhJQwqJgXF9jM7LVMsbKfiHkKQ91NzE6LxHp73eiRtFK7NugheZqRTNJwFQkjHDVvW",
  "key17": "23XNQoqyYEgb8uerP6fCQ7ZPTGnPEWT4rZWiPj4V7M4jchZEnngsTeyoSZy2PGmDZSQDytxABh2xyhFUFzucWJUz",
  "key18": "4sufzSp7jR6qVsfr6UqnXMCFHaNrWf3PLEnToVUvXtRf4owgjpuH39njB2jL5W28mrsEC4nhNjUW1Fk4p61hAJ7g",
  "key19": "3W7zZPPjmY47mJYiHfZ229YrbwDrvjYnfe7Qw9UGWiQE534F2oikGSM4hE6fH8fYLPe6tr12es7gUDo1Ss9Hr3iu",
  "key20": "24ZARqqAQEFAfMjZw1btW3LNMHxRtvrChfrdEhsJmDrQYgc2JGFJxRKEqm3xWfcwE8VCSFxD9fzh2YHuwXSzLBBq",
  "key21": "3Xcin2LuBWY5D5z3dBNTYtFQhF36gpMyRxgwzs7Ua6Q8D27fWDwZxDp157FZtVVTv2FYfyTaDQKYR6UznBbKRhn5",
  "key22": "3XKTjNSib7eq2zYYWYQTwsPRw7nQ73paJ4nx69saRGRrnKUzBJ7ZsrGkvB75LQthWxyjhMPFZZAs8tto1yFWQMTe",
  "key23": "4eJDe1yTTe6meco7XYm6LmMJ1bCvUr5PyPrTfDwiqYfmE4KbpK4K4qvDmB7A131QbKo9Com6H3sxQMczWCT6JSdu",
  "key24": "5gLid4Vo2X2z7dNSrd2dHQpFNwEbWn1eKFcYEjyYScAfBWkkx5idmDr6ZAEC2C4RWi8AeH8iVjVpa4qwg1z3c3TC",
  "key25": "2zubKWQ8xjFSjuNWEcwDa3G9pTNoeE4SFL87AZ7NcBf1hwkhU5x7vtML297YncuDvcAELf97XoGE2AXtbXkP6vW7",
  "key26": "36FfDnhCRfLwCrZ3dv4JXqvS87cS971B1SidNabhZFPbVbK8WvTSkBzaWQicvLzbgH4k6ieV4CumP3bjVYgYh17t",
  "key27": "iHsjKc5WJYEi3hwjdBS35B5sgpn1hfChJs7hbh1a1ocmBWsvAN2Jk2qVvY2TsBcksRYcLJKU6tviGyFE8akjtVG",
  "key28": "3VE9oYm5n6KHt4K7u9sR7cUhki5nfqpgbWQd3z63ERaQoDJqvYEioUyNCDhJ8EbL8xFT2ZfG5JPoxM2yBZAwAwV9",
  "key29": "2zPWepNvMMhrC6abhoEqkShy5BvsU3xEvYYGUbm3SDRNTejdXz34swUsQVaxk5CkbDfSLdupeJCBDGP8p5bGStxR",
  "key30": "5chFxCPFEnVzu57xUb1p7LC8odeyTr6Tz8shXWm1QEhS85a5ZKF1p1wTxtxbUPqfrBgFz6qtUKFZkNzSrAkbyt3M",
  "key31": "67GuFByrvgvCzbMsitjetx8Bb2eHgWwd67NNQDLkERUpxpbH74d4sSqf64s9v31ZMCB2DqvVMLEpt53mLrRfwgu9",
  "key32": "4Q6vWpiufGg1yHJhPxr2FSRZnsfzdZnET5FmLZuyScxx7sB7G3Z2595vmhi3dbLLBtdpdiUgaC4AFjgqDiSN9JAK",
  "key33": "3Brvm3TKCeFw7JRkTxWSKPw6xev1nrzcdPChFcfQTrXetXfDiSZqsvUZFT9YsW5pxbTqKHVfsBeWaSxS2NXSXkAa",
  "key34": "5XXwn1SXzMSbZ1jkVbEDJRrMYU5xqhdXB4tQmzze2iHpZkj3eqESzTHpFQvq8SLVaC7ULfDWu823gkxeSiTgriUz",
  "key35": "be9q1PebqhXHyQi78saxjpRL6Le8cCxPrubqhK9agnZGYDAinX7mbPiBwsiWJEdxRMDEPMXip9oeZrBB1CS6PEF",
  "key36": "5dMe374mXxM5HBk5eXEw7wwajw9SvgxWKqqykqX1kbiFEQarkeDmRpQjwLZWfEvqvECHrrHYuLouFMraP3BgBcud",
  "key37": "2YWm3ynb4ra6F7mwaHCAi2c7TzqjPrVxJxSpGLcqhQFk1SR9nLd49jayjeRcNNBM6ruDu25iY15mgcn8kXTnXjmo",
  "key38": "3CmsahjiLwd6T28FwM9zonZSrWv9UWuHmB1vxLih9uFmc1tpY2Hq7nwoaUHiRSUhAKzrkKLuxmutovgKm3T2AEyn",
  "key39": "3Bx7cDnXYwhbje2k5722LZYyAsKjjVCt91rdmZ7MfGwDcfggZuCpYVhEkEgE8WSL3g75FkXu5dNZ2d63rhkQPcLR",
  "key40": "5Wik93nZvxf1sDuhFRM3cF5tQYiB2AjYt9CBVGHoRtZZxTy8TUGJXdVgwjZiEoefJ4SYvWSBCCZTMEKvhQkbR4vc"
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
