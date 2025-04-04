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
    "2oZZzEWeHTJpXJo8zmDGZf4n4qrzLs1LCV5ntNcBaWJU6HPWdhYrCgfhvHkHh9rPgjiscm7pZSy3bGBABHemgYNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37SMmZs2pUCUWxP6beLwzEGTGoYkXPm5U5VkamKL5SRpAC4493zas2gAcr2Si6oGRKfzMwWUToccj7Kr9Twvitcg",
  "key1": "2mzYj1wHkGQHc9R25whftQ42kUkRTyvfj7Qk3y2UAPYngDMev2T49FgfihQW7fSDnmv6bnsuFVUTkRYG1iSrW97j",
  "key2": "62oj7XxrKMMeseQGNZKMQeWeKVe85Tge1sQ2fr5frdVRCcdkhcB638oVgSo6XDeuEPXsXfAvRDJuamXQ5JejBgVt",
  "key3": "4ax6rt5SYE7ShiA54pT3PEBzyZiZRepgWqyx7ue7Sbo1hgGD4b8rfft1yUSsYPXRYCRxnXGEsiihFjYaPYXW3rvt",
  "key4": "4LYR57d9i1Bdy1YXDv498wPRLJrvQ3aba9DzBQTBi6eEwbMgdq5ASpDzVkA2xqL4qwyka8XxsYQnT6Jaou67xpW9",
  "key5": "5tmRmqqSWd4ssuEyg78rbV1CZDYhum1UFeoA3u9W5ZFXojaeMHAykNj65Prp1vDdBkmVJ4ciCP9GKFi2nNcgidRb",
  "key6": "hydmaK9PoAAvk3FB3BZVRYrzrea7hKccvVvc5bA7Vo3EAFWJ9ACV2H4ik3iYr7yqC1huDdyMf8hvsx31M1NrgFG",
  "key7": "4fA56CCpzy3r4gvC2xaeFnYwciUC7BLJzqnJq1TZSSkfD8sgcorEvg4D14AnE1sC5pwRWxV2MA2FKMM42VmrrV93",
  "key8": "2XrsWEGhP9fk6b1CTWynsnRRWRurv7A6QEqBjACZ5CZJfmaL6FxqeCrTp2qb5ax6ArGqqc2BagXW6jRKsHwvENBU",
  "key9": "3FNfe1q4ZrwVdNDDp6TebAcuuND2HsrW5hBA7Nknd5d1voD7dk1Qry4MLqqJYKmoEbiMXjQ3vAcMovjXFm91ia4K",
  "key10": "2dYNMXro8HbkAMYZTjisM1L4ns1wh7EXvKTCyGPL8Ams3aM73bkCk7yHNcjvjaaF8EmyE51BgmXvPBzZETyqJkrT",
  "key11": "23JF54Gj2i2ru5BPrgmHocohsqUdfwEeUEc53UmaYXw6nxokYtRmestreEovXbCGpNr2JWRab66wB6747votYnGa",
  "key12": "3EXagcUg4WbfP5emREAw5tF6P32k3zCSNbk9R9grKGt6SzNns1XwPdxgCudVGqXuMj4KeGPPnhMQg1PAGC574GLG",
  "key13": "2qRG87M1rxgdr6oDEAAVdBBxTukRTKiKVsrS2DMKAiif5xt2Pr5yd5BW3Qj57KPvdgLYiC25UwCtT6y5TgPrn2To",
  "key14": "2ia7TRB6oYCi1qXpXzDWfuiLJbh3Wu8xVBjkV4EG6rCQAgDz8ANX9jtqw31uXcBxv3PYkqKKwbyq7gMcxNHxyM6M",
  "key15": "5GwqVZnp2bKfxinyuTAiQFpNvVqtUSLupwBdPS3MgfuXTjFJMbDA8NEodbfmVrc911to4qhrXRBVJJ5gX9ojJuow",
  "key16": "sK2YLpdSBEG1J4MLfsX3hQ62kzJ9QNeJPktp9fDUyn9iZuFm1PiGqadojexXfdrGyJ6FrmEWZR2PSQKoZqS1b59",
  "key17": "5mNEiNuX7MvG1LKLmMfpnYErFr9T7ncif7VR1Yp589JDohVTHXgKtggL4LFk4mJJ95D4DwdMBp6TirUhNCVqQDrX",
  "key18": "3HLgbKuKshPRVnytLu5pA4RD6Yu3Dwwc4AeJToPQ4esxEg9uphdctuajQUELHrvunGceWeuTm4bRNWw9P2Ce9FvQ",
  "key19": "4sr5xvybLTocEcxJ6oQywhKfoBQcJeUET4yygBBRKBoGBzskdPXggX4WPTR1vv2b62uuQkW13bs2baL7Joi3xKzw",
  "key20": "4pnaixBMva8VLSVBmu4MpuzM9282SbpuG5njWvQcDFVsUFX8yk2Rs2BkxZSpaErPyuCCAJyJRN422gKP3pX7EuxX",
  "key21": "k5ymdXMpqDzMb8YDiUrzuzStgKNkSoUad47Pax4ghzje1dE2ZyokRbHRxxCQ3X8D6q47dzWomJq6xBzF4jbLfSt",
  "key22": "3pfBcvRJUzvSy6HfYN8G2aNE6AoEtnzuVH9a234U7fVEpj9fNrBep3cGV2RMT9ehWaARzA6UgMXpn3SPZzop5at6",
  "key23": "4PVwaB6yfBKApY6fGWrEyCy6LF7Vt9ezNrkz7LuJ87tXeSjuGCisDnnVcezArB9vJFgLRkY5t1unbYDEGGotz61r",
  "key24": "2yKji3HdeFzQ2F5S7DwavzThCvvGUGTPYEVGPY4MzRnuKo14QGckvGpdPNHywLyv4v3YabxvWVQe1ozkDT5gCMf5",
  "key25": "4XuS2oykLSkMCbomC9G7sdb1vdRiG2B9fQFDARhgbD5AUZVHnLky7Fq7DP7zyLTRNEkCzUVSveAX6kRsHpp1CkR",
  "key26": "3NoM4WKUJmNkdteyRYJKXm1nhtWMrNEZkEFdAofcki9VfUm1DoXmVzsHJKXwsdcfVJiiq6BayVBvxSvUosUEx85e",
  "key27": "485nFQqk2ozPENh57rhLRtRBzf4hHZiD7aQp2EXcHgQM1PgJnNCdxhWqpnv8RHNrsqjgm7JtN4UfPsSpzoo2wDGU",
  "key28": "4uU3gMyyzMHpC1ZHxjpRLNPRbN15W8xUUSPA1bc2ohELYUDqVESTL31i2L6BYNA11PphmcreAh4o8Wy8ocX6DNWL",
  "key29": "5xNKs1qn2nX4JKMdaMKN6FAecKGBnAZUjzHSv2u3Xwb8CrWEjPv4m3oGfFHNrcECUY3GjNH4jLdFGbMuBB46uuXx",
  "key30": "4G5DSL6TKF9wdeGDS6A4aHY5Ypty5Xt5pHaxeDvZRXhN3ruQNC5xtABviQmd4GJHisrZUnivVWBwWbjY5nzvGd12",
  "key31": "qjU3zXBMFj8R4j4fahC2hTJoYYEd3rUhjaXgnAqFPXjdmuFcnsvcqF4dDSpGjtJdMypA8Fx9TwFnBEbQtAoMagv"
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
