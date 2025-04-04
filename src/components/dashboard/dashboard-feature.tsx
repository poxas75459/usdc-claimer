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
    "y3aeAxAdkWrD1fzNvfBaiBNKsSZkhvdrgeK5uctyUZj9u3nrPxt7mArVkUrhbADbNAn1qJruj2vpVmHMhzJzaTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s6gQE3PxtscKo1QdmDjvNmim8x6NQLvs9beZpgSYfrovozEMuCemC2QcL5ycmkdEUyf7khWkiUuPejx4tvuUARJ",
  "key1": "PM7uNU6gXJPrXTJFcvUsD5ii1ewUBz1bN3wWtbtav4TUYsHbJNgBWPo7bDDQaS1bPFXDsFpj5Z2Zc8Hs6npMNit",
  "key2": "5w8WKTx624Ceka7aZ7TDhcgyLDSzmDzLNk1htMyBxywwY1UuSq1DoZno5zgTs9THgkduksaYUk31vAziDzKG9Tmt",
  "key3": "35Frg4ECpBAyRnMgEeg42K5tmQomM8MhTKQ2ZA48TiL5BcJVefxz34G1NQnLDn2uyU3SFCkJ6yYLzZYZ28AE7Zed",
  "key4": "4P2DkUn2npZ1jiW7u4N7a99S4F1bJczLgZCDYhisRRkGQP7SFzH8vhMfeTa8o4nRhVMbvQbqZeipUoQBeV4n2NpN",
  "key5": "3Aq3TwR394Td5yFjYjbtDnCCap3u69Taxt28oRvbjXW454RBRVqpt5DrUmjfBTt9Jxqf4a2bn6azJvg5HkpnHQpZ",
  "key6": "3dsnN4yNCfphUdK2jsYx3gpFeq9VBB6ioVvCDEqcZm3yLvEzi1k6yN4musHkSjc6Ri8Egg1E9ru5diU9WzXoPWC1",
  "key7": "2fWYZRCdN87S31juxSvzG9SqQYjEkcCDLc48yzRyWFW1rhYPGei4huiuMpP3WVbTCYbiX6D2vMkhG2mumoBCf7Cy",
  "key8": "3r3V1bh33ymvNSFCX7YwQNz97tQZAavz6hXo2tUhvaWscvAx3tuvVLqhKkgpq9UkE3QWV9FJs7vWLws3KcxFmTnP",
  "key9": "28G7J6XKCFFc8b3oyQfwwWZ6xdd4xMpYothHX9zcGbbTCJ3PjSKJXgJhrRjx1MxfGBdtWTgUv5PoAFonjquifCb8",
  "key10": "3fvtb1CH5z8D4ZP9q4x9e996xzRbcGFv6vZJkdAtWNxh62miw1Yg8gbHgdC89CNYkXUnyX5GSZnT2aem9ny7zLZx",
  "key11": "hcVkNYLCu848ySwCKEqE6HSKEhPadM7R5kz8VdHkRFeapa93eAoxUDtkedUEo2W4h7ajc2eugdob5qgAGsksEn2",
  "key12": "4fu5KisxjSkBzt8fbTNp8TugiLCLctVH856ET4eqiVWPv7KZo3Co9gr5DDEcY8EAwss6W8D4mPWYHtkFZrFWGSV6",
  "key13": "3bZVoQMjENmCxrRF6QKKGqdecM3KjUVPXQqSKmAqHmEiV2Qi9nsNnQSBGvBCPkTE9ahXab2hfb4c2vqFna5uQukM",
  "key14": "4Gq8ZGbYW5YwMeXDg5LVK7ddepqVKUGLsFXhjDCpUYQDtmVVUvCvHd3s7R9mULt3dtuid9u8qXAaKuuW8vLTyze",
  "key15": "3T1VB6qKpysaXNnCuo4BMSjghPYb6RgzTkAPMdoMRTF464hyq53Wt2sGVqtcRpxhnwxD5nvJroRYksfqvVMfndSH",
  "key16": "3KEFuZXepLzTd1TCDF8WH6GurFVAerLNcYkV6yp74Z3SRtLDwBaQnKJywrwKQ8SmjNdKCXQmpPNQqTTFvtjZFj2L",
  "key17": "2V2DYqZxFpQGpVpYVd2ghbuJZDkM3JQiJUi1teXyC8EzjZ2P2yR4eNcEo1bx5LcPE5UjzyEkdh7FsuwWJD31dQun",
  "key18": "27CjdXPdj1Q77zrQb7wzre6Yg3DyQ2GL7VTVXGeJGmYa8cqoqBRJjdV2FkC7nq5Q2X8t1CcF11qqwkj5e3siDG2z",
  "key19": "UwDJygSQigrb6YcAXD6CqTvC4WaN1ZhQrV6RGxenmfUezntfXTcrWuDuS473kRoQrYesznqfb6RhVPM7cTrof8W",
  "key20": "2dtqZyvy8t7jKRzUF3YVYbuX1BG6TCttDtmaUGDzGU9wUUeuepvkUfjCzho3zVwz4pWDi3KtmnHj6Duo1S2Ci4H",
  "key21": "4Vyivv9fRUGPdqfoV95dF6W6pnots6r3GHSSohGMW5wAeLGWHvPoo6rps2gTDnptBHhVTxb1MX27yCotEwTLdE6f",
  "key22": "4JdnXHX95XTozBBy1tgKDrQ4WLLGVCMP5SxRwghoHshjjTj2TzGdUYdGemWZfFwrmuxAuauqwGdfXxu31vsHv2d3",
  "key23": "2M52A4XAFR8ywuZ6xE4e91n1xayqLSPTHFWWB6w4RgBwiDhBgwRkQQwGAXkghRkAJBbxrngaMzDrFnQpKteokjJx",
  "key24": "5oxNjMo4S77F6PJekqqPnv8D8sZtHHkkuKghTBnqaqc9bhvxMJQek54cuvQNCYbBPmaNAZf9rFaYA5NTG54vSG9L",
  "key25": "4qh1zATqy1nUqeMAz7Qixerbsfy6am3iZNGc7suxiZt44fffqBUqoPacKGvEkhVSWcLkYQYhyJypzfb6ZdGp9zrc",
  "key26": "2W5Tu9DaxD5cJbvuHWBF4QJbA7gW13Q3n4JPM7WiM2tWsGHT6AQy9aX1M147NBX6mHVAr9D1otbR7QrFiaXma7hD",
  "key27": "5ffLiTBeuX1cDxjRgrGBzyRBNfvZ67iVjbBntgkBotaU2HLJrcSc8jmQRqRhqzgmhY1zojJqYSMhBrpGZhDk4Ygs",
  "key28": "3kiRwk8G8ojTaL5RHnCEmVUqs5r11CN4uvrgbXFvoUeyAJboGVTg9vfFNyCUazw9H562cFqwe8afo7BU1if4RJHv",
  "key29": "3kXt3WkziMDiX1ChRRmk5mpL3gJ1njyV1xJWRqtVzq64B2LEQ888LpkXMfLrVBt3t5RAVa4Hq9HZsS5AyJhKc9sf",
  "key30": "4AksBPp9wPND3tw8jCxFjwKEnSwNnokcFvM1xfKMJLAb4EVKbFK9EgZo4eGhtjGxwz7rFbciYaqQpUR9Qnb6xvfy",
  "key31": "297zy1Zh7ydqnRknaRG4En1xLL1NFSaxRyngjo5aEQ2xpppwazxcphfhjyK1XU21ZBchtNwdS921FbGdFNVQ7mBM"
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
