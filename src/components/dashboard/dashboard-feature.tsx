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
    "2yEXawem5JXhJenjCZoR3Lds6gUQVuZRqbLCqUaZzCjDaNFmyoUgf1k99fib2r9qXy8VzpUuhTwtPtZn1F7Esk3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58fubsSFQKmaSQX8WxFm4ShNjosmKbWe6YBVarqwYyNSemE1qCvLF2eXu6zshhvJmRkHSa2SXdSesKL6PL58v67S",
  "key1": "SwWR26NHD4cQCYq2W8Pi9pxya2TVm66nptXvVzhSSWwm2FHveALvQicjERd1ceAb3Hgj47hiwv9ZuP3RR1eH9xW",
  "key2": "3vkQxDUVdburWipDUdswnurbrXxn64N9wgjDvavLLrGk8fShoVdXQyWfPuAvE9AJafMgiqjPM1PDjCw1KX1to41g",
  "key3": "3mRcUHh75xqf7vWDVjm4cjU3ZgMtMwunKwr4Zbfpr2Tbuw8JFjKD4g2TeWEkZZw3ibMNe1TdPyHRZuAPsVdeywZk",
  "key4": "5C5XvknLq6Fs1yQS3mN7BMZq3t8UX3QaS4yWnQd3uD2EG3ceueKRGUjUhfTr6cEYAd9QHsiZ272WkQBu6eL63HS9",
  "key5": "34o611ae1iHEfuPvtNaxnfFgP8HuLryTSSRKuChtZEFCiYcc4wjRLxckDStFsEHQhBMPzXXdxjbJXHMjiyEXKQhm",
  "key6": "3r5e6tMT5Yop3VESck5rDgwi1XGZ5Ckp8DUzcC21LND1mBZnDeGTmbsYUceqPsWFaZZsDysYbMaQaYFVgRHFDukj",
  "key7": "24cnybQFC9eZwwMCC8KtRCv7NHt9fykVPLSCtp49cc6f5nfemsFsgXkc1puR22X73RaW7CWEDPrV5zJsn9vqBY4h",
  "key8": "3ToLexqE1Z4FnSiZYNwDUSTRgSTYaYEZ6fNAJ7S55pTC43zCgSkYTCpUrmSLabytZZMaQGCnSYNp3Qh46xefYjoQ",
  "key9": "5Bu3AK1B2urVTYQBguv4qrGQazkNmMwAnnzKWX1ZQePjM4z9pZ26RwvfXx1ujWB8FGdNhXw6AE3ZyF3JicisCXdc",
  "key10": "2XFK7CCTdfUtxVKeLw7TkRfM1qEwsKasikFsve8ghP4vTVLKhiRf33ccvSpoDwuDCiozSvQ9zwfmeeBFoJY13wjy",
  "key11": "55oL1MJgYvttEGMrMFJa4k2XLqSshxRHvfWurzqrEUuEn6tzdNNU62YcKVFMbpbWh7oTE9U1BverpjbUC8GHAVSb",
  "key12": "fJ7bryAecUUBH2QmULjzzK12MU39Ek6GPjXssvCavWx5cEfDqibCwbmVsh6mbxm2M5yyGvi7M4yQEYKvejG52Un",
  "key13": "5Dp5gxgV5Nkaafh8DZR7EpMMZHtGU6aqjRCFiBLJbZiPJ5rhsxVCNqpgUvxGnFQqdCdY49QRuqWBkVErhVijsj4V",
  "key14": "4ZAwxvSxtUZpCLomMa9GXRG6btzFbanogkGNvpxBygyQCxv7KV3yHh2iaEKs54a9cixMAy7RKQnC7K3rAMzf8qXQ",
  "key15": "454WmhqEGf88CZwmK2TJJJ3ydGQxpyYqc9qayw5ZQHGTkzDVsf3we87pPduV4iMEZuTGGWfKSc7WfTwZ8dBohXks",
  "key16": "2g2pYAwKkUq3wEmUaRWMTFcV56JZTqswWiYWgaJv7qXpeaB4TzCCNZnvKmg6B5g8p4qj8LEekAChGQCoue4F3Pef",
  "key17": "3bKbi9GqCALG1co56AQRKcrXwTB7uqaWAbAbFjoESB8bSohRNMzKEPWcnEuiQmdh1ZWXSfeuY9NREnrPGD1Bm8HE",
  "key18": "jB56yCTW9StXe3wz7gvSGiL4a5RpKivCXwcaXiobKvBitMNiJaEynnDe3TLmWPTGwUojQ49gGwRY9Xk4ZhDLwnA",
  "key19": "5oMsa9X3fprG1cHE1KaRDdcVDSf1QVcdhWJGhKTRa9uiF8qoNK7EonTTCGwxTEvboptFT6G6CaFwRRRM9M3cm9D5",
  "key20": "b1tL2eJFCMaYXsNzYAbRyqJhXiFjyJUFfkLqJg3Eao1rXcGhiJGsafzinhEWTQYtNhNMxaAyNcUJGST1boZKiow",
  "key21": "2SBYkkMkpikULdAzrpjL8g7J4Xqqy38wPTssFtCA4umppR3WeF1iqZKbSPTMJ8BhwDB8QTDxZ1pVJaLtGQPQG2rW",
  "key22": "4VnXEUYeT2Yv4FFQLpY4saHC8sTTLJbhCKKQFYEF3oFcjyRzXX6La61vfDcgi8p9bVvu8ki8tWpoQ2XDVwfSBC11",
  "key23": "B9dZpwTw1sg66Yr6aXnj4dvk9CBFcYAFB2U1gdLPh8759sbsKWJBdpvaxeCuuXoBvGDmDDsD1LQoR3VRQgBb16W",
  "key24": "2ZsfgoP5hEWcQrbquwsWv5CQhBdTjA4UN4tgTFdzY1BU1B5U5scn7dPHyoJZFrzmTt4GeLiQfYkb7cLgL6DRbytC",
  "key25": "4E5SV3CEsYqu9Qeg3ZUVhNEqcERanwMPDnHyoNM81ey6fxNErBeLemQ3eT6SUMHqAs8FBqxdB8Ljyvbtewv9ez5Z",
  "key26": "3PmJfA9Ee8ScuAHA8m2fwbWDqtThNcpX8dgnQ6wqg2c6S6j611xHtHGknAHiSPJ9AXLxEJmQ9TcZYKPDCauiAMRw"
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
