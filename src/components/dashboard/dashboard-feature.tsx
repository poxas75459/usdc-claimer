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
    "5Yk34LSRzk5s1dVG8WDDM3fztiGstBgncmL1ehBqTUGnUS3W8Zu1Bc41Qrz3cyiXzsZdMYg7RQB4UzVhgA9JadUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bjNKErSuwUxUeULBphXEBV7fThEMgFCYoFS5167EDmDcK2DoytKfjRTd72p5NNZm7wrZiTUrCy8hEsrxsXRqhqt",
  "key1": "521QiVgUDgPc6YFqtWH8K9YV4h6VhGjkGhD6psriyfZF3PC2HxDzjkdzpLbAjSHd16kTMx4MBadtopqFurgGwXtB",
  "key2": "2hfRyLNy8tTbnae9KCoKKFFLuqKTnw6kSvR9ZXKf3XuV1wdhZfYdQMg3x7kKWfL91rfJb61q5XNombd8GaFNzXiQ",
  "key3": "4bcMYxrE9ME9svCWocUEyLWRhvAiv5MUGsbezLgTcZ6MsQwxSPdMRDnYLMqorMU82VMTPGKgqdoLWhQzGmR88DvA",
  "key4": "22Rk5VcadRygwRLPcrFPvVZ1hoiK3foeW6EA26oqtxBF7s4jhBcm136ftjJjyyNY4TQzsrJgDNeKPu6ubnwefyBt",
  "key5": "2MsRoLvABxrrNam4barE969QiYMbtnkZGq2vJkiSv5dVwoSCZzVs7F9WLCwfmTYsTiUGxiDJLpXDTDftmzbXQm91",
  "key6": "2vexKFpbypQF5oxwB8NXbz6n7rhP5ppKdXtZWMJ5D8FCK2HuejfBP5EPF2TmuCVhNPRaXBKgdRKgnFV8HE1P1PPv",
  "key7": "piEqKEkKhPX6cKkqJ1pcW4SRPbmVKogTx1vzHBfn9ry7betx6697isM3uZxCHDtr3o43Qf8yXK98CSsqryGVPP8",
  "key8": "uVX9C8C5aiGYgc2Um4SGbEceHTXvnJgsk3yMaDq5E9hdak7Eog381vW9yMtrSCjFjhNNwebPY3JsM7fJVazpLDg",
  "key9": "3879if7P1Cfcigwjq2vqsuWiwDbd8gDpggTAqKNxt2DcKRf5TyVaeNyqTdXMhXg3U4KrTZQQ9Y4NXNx975QtfaRn",
  "key10": "4AH8Eqd9CAMJNYvSHi7QysFFJck151FBNW4RCPVHHBKtS4Ue3mgwV4MqxWkQYodLzLWYvASs8c9cBRUs27S4CFLK",
  "key11": "2k1z6MZ36mrmRDb4NsNt7iBTcq2S591UsyGr2phXg28Do5rWKNxTTdBdDExV2R75K17J1XPZAk9GDjNwBFDYszE1",
  "key12": "2u5E2E5tS1GtVkdvq6jWKfixgQDmv9BTS54EqX2HiP4fdBYbEWQqES9YCe4Rua7nLVqKJ65yVGruPvfzD1HM2hDi",
  "key13": "3Nq4Xb5gQsuzYSdi7VdBTkYfWZAAK7dFFymMVXjCVUPjYubUS5WCECJzoh2RCTovUrxQuCwbQrveVTktnW1Wwqua",
  "key14": "4Ebha9BqtorVemHouxGJLSK8GBqhSrmVjn731YVHjcr2VkiKqkThwwGsBhdHRdoGwBvVSLwnqCHTG4iAbfc54bn5",
  "key15": "tAc6DMV9A8mfPVuCg1gVHCENiTV5bngs2yxQMuWBdJrnxQBoNi8RETcomCiquJxsdJBZhqqE3GxXnzBT1ehR8Qw",
  "key16": "Ng3h5oGjuc6bUhpvRjGqNvbZaPV9AjSfSYo6RJoGeHS2yYtsQAbZ8DWMBEX9Wn6bcZsAjPwGTquDXr5LNeBshaB",
  "key17": "5BcmtGbw6uvbZ5R3cfAy2Vw8Hx7XMawzJ7y3GWqVZTQ47Kzxm3kTYBretPU9DUQh3U9xZw33xdxBX5cMGNL9uhrc",
  "key18": "mQizif5nNe2xbVtBr6cZ3aUMiRiHveawHM6mGKZWUMWteE7xoPPiTjvXoB5Bdv7AgztQbStEe7gnDAzndmFtQyw",
  "key19": "4Je3ABtpS9nk64dSgsDxmJs6Br6RStr5QWDixhJgxdFYwr69gSyjMEgc4si31aMVaH7EDgSMwdVgzfsnSeSdCD9k",
  "key20": "62QrhDH9uH2G9cnSC77PTrpzFYKdhk59hk6M3ZVQHZxmRCaYKeEB5Qi3h1CbrUKZULoDvfD3YwFXJFmnxuZAc7rY",
  "key21": "5TmSmCPsoYux3kVgFWYerEAmV4MoW7cma6vL7phCbTJCpbexK3RURTjwbysDXzZFzT6TzmgA2RfrTMFgkyzy3VTd",
  "key22": "62xrMSYaiVxHPzgoL71QwP1bSQdYL2fL8cGLZ9jkyYywC76schb247axLXdZaMJVzGeAcLM3kWsLMSgqSbo87EFm",
  "key23": "3wE4EbyxNzDCrVyR98KpjmgfQedb7kzgGKV55SGgWjNay4DwNVGiqUdEA6fYDfY3wecMoE94j2CoBjRokbtz8oot",
  "key24": "23uvQk84FS8y6q7zrA9HHhnxBw8QheTQEuEkRuSaA26TWLopXE6nnb3kztwA6Abh25JcvsyqykahckkZPmEG9Qs6",
  "key25": "4Q5BaSv2xBLMVtZ6NWHTH5iQXfe1GbNs6dcFNSUyh6G3MYywAVJmjTnoNj4iA8A2D6csgTEXDKA4r5NJhsEaBUod",
  "key26": "3v7Xx7YnZqdN7P6rEmPkN2ze5yMjYbnAhFMQk7J8iDkM2XEjm6bK6dtaNC7poWL3pRTUYBUnGyY5LDMN2MaTu5sJ",
  "key27": "4KJwcGVLjUy33WJRx5Qs2SAJHQkENy6tjiqocVYJiyvL2aHdHZeHgbYbwnyTTmmz8yGBczZeAp1kxcg3V4X8TxaT",
  "key28": "5Y9R1VuyLd8n1oWFtMSZvCtTwkKyNiWgxhDShjYwDJPpSKiECkVwfLJhUhmzdXSp3phVoLtua7bD8HKjfqL73ceU",
  "key29": "D6KvJCixE9MgRihMiQdxxb6HekdpzKafSdSeejo4uvgCZJevUtgwhEsuRQooo9V8v8T5BLD9nZMnUSwijXP5bW6",
  "key30": "YwLxAN3dU47BuE1zYPo9esLEuCcP4zUYYeoTBZUdw7DdxMAZfoLHGX424TQZpfA6UzxavkzBdas4Fwu3r6bzAS3",
  "key31": "2rvPNLRaL38P3aNq8HcWNkVemCm5ySgLeD66B1a9BScbGayGfUy1xf23PUd6E36PVE8mcVpYwuvaHMA37MdpcpGk",
  "key32": "5vJx1xSpYA6hdtWqwpqkjkF2NbwXwomh8995gXfihKiAFBobv1dbXMAgjnkp3hie66W6srTo7ouCvkWQzAZzvMJw",
  "key33": "4VPNFYHoQG75qzL8pN3mTUfxd38x8ABanxMBB7tXB8NY78hpiwPayjLG57tWAYUzyqhT7mRrPsJzui6Z1CYG5hfG",
  "key34": "3QaGFJCahATuLtgJ1nz72GaATfrsJ6fFjALgPPna5FxAmcNb1rdNyqug6xBk1DTRT8jdxWbZkVRx5oeuqHRd3p3K",
  "key35": "4oAWYqYMgg2R7PknC8o6y95Y98WNNfY1c6q4ea26j68jjauRoD3SwvEHwV8VgQ41GW1snDCDdp7kWQL8GVLeYTwA",
  "key36": "3r2pT7C9WF48qqVE4UbSwVaBBj5n2tM8Wf18qPWgLd5XTxZzBAPf9m3XTDu8dQ1cLwcghNrwPqigBgLmHRkBNXJx",
  "key37": "5Qx2JXH2hjbpae3Py9bgCiEYmKg6rtNSd7GsdB427aw62XFi5wRr7YdxysYaYBL4SRxXrydiWftMonjjMmTibfU9",
  "key38": "3uM3oTYo7tdnorspPfSiV4ENVtDWBXBt8Cs5RWwfr2pxomRJR32ZUYF1abTfcxjwDMzKLooYQmSG34KbB1Yqb6ZF",
  "key39": "3JboSfnePmQNgMi6SKoq7TLt1SHNJwaw8hej93nwmTaXb6UZf4ctZ3NKiwwSw5LeXv9PfCinYsL61fPYLneNo5js",
  "key40": "355VN9Hg9yrw56f2Y6qFZCbVcmzs4UXKDfLKZF1pkavfSUrruZHqHQXgKwiz67FrNQYLsf1QFFULLhu3c9YD1CMG",
  "key41": "4puWPeFZFvPDJkr3cmEYEqWDFrbz7U97SCjhNpJNHopYotr7zPHo8TD9R1FigMfPmsRcYuR9SzNuSGTnsdFCCu9i"
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
