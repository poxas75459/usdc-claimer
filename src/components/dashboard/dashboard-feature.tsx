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
    "53ka7GxhqYjfccdGD7Fni7TKfT9SEN698HfCFM8ipae4rfspvoJD8tvfokaCQLFdCtZbhkkqQz5YHh7yUCSuiDZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T96LGgbB65EMjY8VvQX4P6MbtXdUrSvqbxvsujRoxkcSWRFABmGTRCoSEJxMU3KEXtirtJtjN2EC6i5stS85K25",
  "key1": "4WeqPAKxyqQeZtehrrJNhmVEMMSVuNR99CCkYWuTCLhXqqxNJe2TdWdyGsXqRW1x498on5Rd7dPN46NNJ9FfBRCv",
  "key2": "44FoYPcQBZPfFs4S4ny3UnmCJV6k6DrAXtBzzJfTeZaHmNfnixCjcnwjeNqhBPXo3Xf7nHjciFwBDQy1jfskVstx",
  "key3": "3o7LQA3GmobpgkmaJhsut4PhqkiW7ZKp9qvwfzorKsvr1JMN2bz1s2EkEEJvF9qzAqEthgaaUUa9v9b5PpeLVqA2",
  "key4": "4MU9SmVDLrnfKtRzTh6KAn31E57njnsrU2Xa9jZxw2iESD9gTChxmgrWMcKteUcuKHVM2CsHwS9UW43P5T68bQLY",
  "key5": "2A2s9YekikP7n4cDh47JikxfSFitHEjGp2judM7sgma16mbcwUFL5tyx8o9NGhBNqRMCd53MWNVZh5dMzhd6kyjK",
  "key6": "4Xt2axpRTMEHmYuwxoDhtKjRHoKuKbtDF7bNJkPBTUB5GifEMH7842pgH4iJS7Pbr1us2ZbWeFvx6sUFPX1st8QK",
  "key7": "3W6oc3nQT2F2Zxmw3xkcQ47XCzq8FZiTfwyDSgr8RgaiczNiMp9WuQXFEk5FEUeWkKT28AqDS1JjFLrjfVfCDZJT",
  "key8": "5U8PbzWG4oKD2qb25mhxjdWWuNr6XFLTneJ8i7L92aZogYLetVJ342qt1HusKs9kaEwdsGxQakzYx1dfbKBdCP3b",
  "key9": "2f6fjTsTB479X5ZDPPwQFg4tiNBvwtpRRrANbGjoZvMJmi9KW8xeGWxUDDvJVgtGjL3D9rpdV64ZFGYVvWS4CSyx",
  "key10": "35WacecwrUCey1sdnEHTLk6cmjegubvEBbUnRzn2VwZPZa2nGs2CDzvH7v6tgfmS2Y6UB8QW5U6RFerRrxtkmmw4",
  "key11": "dmgXmGhyRo8fRknPgxcajpt7vSYpez29uvbxkxcQLY8p2MhyBRShpa2oAAb1VZL5n7ut9MokSzswd4unnoUf61j",
  "key12": "L6e77Z6w9zAzUX756gqXv1vCv6QFkUcqkmQvnw4KF9QmxFWTXz5cjHBr7dhwhnz68ipE4YctwNsmtqP6dyBfuDT",
  "key13": "2yT449igiAdGDYgvqWFddftaF812e6vgcVL6KUtfJn32FQokGASm9oLhZy9GAAE2yPKL3NCKP6gXTDCpPJSJ6zZZ",
  "key14": "3QMJWDDMY9ysS3JJ79Kj5NmkG912CzzWfxPhDDTEfZruz5FdTzB2Nw5WPw47jGq543ibqM3jNiUkP3T87cd6rUap",
  "key15": "627Kihf4TPkPZQNFFcivpTzsXiMEZNnNR75pgE9PuzW6S5jxbBssc1AyVJDR4PuaXrKSCMEEtrLDughGYMncE7Sr",
  "key16": "3ZHrWArVFgqHNzHxdhdZyFug3QhkEu7Yqx5tqQuytktKZChg5Z283qVQZCRuMRrQnrU1k8CBUyJNhm6WHgi6K3CT",
  "key17": "2Jnzy9Mge1nCMNcJggArjdmzZMxENdm1iTos48ryTtpG1dqpnzZx9QLSkQbJDiSgBX536WHYXKrisHRh6fkMM6iT",
  "key18": "3dbifstrev7UJHUMC5YHsi6biwm2Ggk6kcTsCkCyScqYxrvke1LQVfUxJG87SxKn1S1NL6mcPtiEGfahB97LG6vy",
  "key19": "k3qbQ4876DBHcs2zdXUaHazijqH9XEbufAUCCWo6VzUkjeX27L2P3wFdGgpqqTt9piU9LmDWN7zHfpsstStURy1",
  "key20": "4eqTfSHqRFJSmhExUFnRivKw8jnaM3dFMpphQs7vxF6no1vCUVhTJoJxzKir3aM9c14tivd9VmiixmMscxeH6HM2",
  "key21": "MPB9aS13UucJZi9EPutCwzU6gfiEGPLT14ReioDZ9ocrVFwi4sVpYJgXtg1KdUqAYmGDztCkB3cHa3HgxtXFs4g",
  "key22": "6xoy93qJ5t4Xx9DyQFfeMW1TUAWgzFBmy1vaZ9nh8Ugrbb1sCtVVEfdfcdwXZ22fkVAy2yVUSz18jGjRbQAPhfJ",
  "key23": "4oRWgsM4SLd9QyUGbFqEsMH2wXQBfDyqVpZ8aorWtykFpRtxVnrd4DDcRVDdSzxT1uvLQiSqyeBnjM3DNqc5tbLe",
  "key24": "US1WEEG82dGj5PRdGXLukK3eWo68yyiDJk285Jfs3s9mfL4Xim2Vu8AdGC8dPuksMCNRjFr1LBX6738gAfoxo5A",
  "key25": "61NPYuhxge5e5jRcnx5T51fCJ8S65kie7w3fEUANcUbaDWo8SgFxL1BG2cA4mJBqVMTjXP9NcXHMnmQy36LeWecM",
  "key26": "4v4z1rPg4DrE5TkEfJuGdFCHGCN1hv3pEvphHgREL2vWggY4EHRzg3RzqFdmLwLKacT5byfausM11EZz7hSPDd54",
  "key27": "4BKsnZ9d4M7Z5qZng5gcDingzx4USbAAEVcH8oUYYM8WWTNU496j2a9fbyqzvuMtRsterNSk9bDZSyzhuBuNMczf",
  "key28": "RKh8kpiMxzy8CsjNFYYcm9kMpEC6akSuEQscuAC3ptBU2fT3EhQgYdCvypPb8CTn2G6UxSP7CznpjJZnLoPCz6U"
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
