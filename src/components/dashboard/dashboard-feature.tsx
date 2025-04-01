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
    "2vajJ3gbRovaq4cbzqdyQKHEiZnzByC9iPPuEipsWnEt5z5U668QYY7nWhV9VomPZdXXQJd87ghcvQmJi1xUr4jt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vFoiQW5uG6NDDAPMmojnBTZS7Uz4rha37CHmHakdWhweFPmnFDznQhmKuq4bFKKpZmbHuK2c8TGmdzZoKXRXywT",
  "key1": "2ETJ6Z6N88GxEFRsbNW7XqRtDFaWZr44xvRKJ1R67afv6BqpDb3AfFQVj7TSsVtaF7dmR8mRNJAuE6nse7egh1uX",
  "key2": "dwjAsSCZ8n8a5S4f5hz7d3b5bbL5xFUEsYD6u69JUf8ha6Dz7mrEA3d4nhfA1cxobzg6TSF4LzozaZBPCrZ7AYo",
  "key3": "36j9oqJhHAmQJSmf7bBzSKRqKkGeVXLjXV1WBxacrLunXy1EDGGfSebd93NuyjEshKvM96WUkxAKU6cuwmEoscqn",
  "key4": "3F9YeRyAwaF6sz2sotWYs6WX2Yr7Z4hR4ggYo7fKYKcpEWHAapcetjyampFGiPL9JAXcYtHNfDUsmTibsL2jxWSH",
  "key5": "3gwM22QDksQPWTDf7pWH2hmfQC4r5gxiVYc367F2i6Q4TjYQDzKV5VuSbgXPtfSvi3kp6U6AVFrKUvoF9YDWiCgo",
  "key6": "4QgdxL5NLprKsc4gQtGa3BAz8BGgEtGfXxge4ffAUuHGpuocgzVZwWfCjqjuUxzVvtFGTjcsQLTKpJ6GTcQ6qbw9",
  "key7": "SRR84nJij2r1YcUgyGuqgBBFBQnBMDfvD5AVKJHxh3cURkP2pDnvLwgzBfYQWKfu8BvhJzuKZhbjszgv5Zav6BY",
  "key8": "4FmGVWMPGvCYVff33wVansoaZCWBfQR1kVXHnQfHmcvYgBSHXf1sxjEjQoUfmMkpX4jSM212UUYX2Pk1pnGxxCz9",
  "key9": "2dFv6hRBJqHwhoVYVgSsaCCRH3KkWhwh4EePJRvy6G7KwGWyFdmDXtaWmp6ahzxdbrMZBYxxeHL8wFhUFs6LDF1V",
  "key10": "5xst8U7t11DNhhgiARmQN2K2CtTg9fcokuVKRtg4DeXSjoTeFKWpDWBF6TXSdZZuNqB5rjtAHmL391r7n6PQGA64",
  "key11": "3NkPusxR7ykxiv6wBhhiNCv8ztC4E1aKgDYv1KNNiyVwpy7A7aMLjzuSijhGMNvJgHu79ijAThxt7noJDMrU3RN2",
  "key12": "4qCAPBQajuTabuCjhKqcGAvpWHNMvATaktAdSYpbDKr4dw7qq487LBp8sLGzQmm7cmsD2o2hXydz2xGM8vUE5uVh",
  "key13": "3Hjh54DYk9NuCatLNV5hB71C4nR9QsaFJJCj8g27LjJx1KceMyT8ag5M4LqDBWHdh9kBc3cpwsn4gqvqPu3tDTCV",
  "key14": "2WZCtSyv718aLNvSLxg3VvV324xMNLhVZ55Mj9RfKFa8QvYsh8Gdi9G7Fb1tyTw3umX2W7bhB4YDLB4Vn1Uzfnm9",
  "key15": "294PVMZQehrgz5hxkvVqpCADFdJwNowXvZZkE4aB1hL42LskSNdjcRXfDy1c1jWMX6BLcRYyFCWH4xfS7pcTVFrF",
  "key16": "e2aYEehR6899ERVWu1diiEJ2GrHvFqkCknWSgC5yxHixWjv4kPUrWohRs91ur3kYbWUcyZYaRo69GHo1HYBVrdA",
  "key17": "5fzAqLYffDyb6rkZ3J12AkfgDbp23NLp4kkM37uN1SdPpHnry2S2mALsPqMXcPJHnjaTCUCpVEMGaAJQps2VW1D3",
  "key18": "ZFqB1jzYcRLMergKWUjpJymzZrhFqegyJN5m1FchGtwdmKPfToEazJZfFRxMy5icvFFDhhmZCJ4ePWmt9JQRKZs",
  "key19": "5B69TF2SLp9MaQ83eHYTvvG61LfsJZJoTfg6mwZgnMQYt6ESndaZm7H6FSUkyNUtK6bgVDDAjk9DqSm9noGtRUs3",
  "key20": "5sM2FCw5mC9avXWz9uhuVuauBmmSqxC7k7E99CMtitpCmcK9z2e833dn4qeErHbJdjhPfpf8YRyyj3uzafvuXtuh",
  "key21": "565SxSBNueR3wm7o6L19mR7kdLmuhgLzC48UticUtEXMog4SwEmJc4jTsQvr2QJZiSqryNhUNmrrNTWZjtWH9tjK",
  "key22": "5epRpUPyzo1bKCoQ9ejq78QkgEAukbsUYbxnK4aCtkBAcJXgSW1SJbNQ63TtXaj5bL7nD49dX2bYDo2mqrLeYiLi",
  "key23": "3wmjnP5PhoRhhA2Q2Z9HKhrkBMhHokzQYxEE76DH4t11omYACdkzHFxnTHruPLVkE2h9f1keuA8cUWVtBt7mzKf2",
  "key24": "23N7pVVuskf2xN9ebSKxuKVGiARwUzuyyRDEHZftkUfHjjrboi1vNDwCUuvee2notznNry47Z6HuJ8q64VbgEAJN",
  "key25": "3GGtJteeuAjCyjYHiG8kydxnQAKGU5gYC9izT6H2RQ3EQVDbozsuXiHVzvjRKy2PnYu4vQe7qXySYeteqJXBVVko",
  "key26": "53xT8b9tSrsFEQSsnUM9293yta7tvYrCbhjjtMHK2qR8qHYmt3cS2cBSANAi3f8EaJe3P597obTtk4K65ZVje3je",
  "key27": "2kFHWM42a9AT241PNiBiHyew5Pg8ZZ9fG9ti8aL4EXTbpUucRsX8LUy7Xx7CF2f7q7TyWoc8vpHWfCNDwwMwqTny",
  "key28": "3p5hHiAwvFPAX9ibwC4x3YcWp8Qj6XvwDSXvX7DCxMtDjwPKCL2YmCKHjdWDa18MtDUHrq1L44d6AiZM1e2kqLnU",
  "key29": "5Nwt1gwHFD7rqW1VXJQ3mKAuS4MJ1nGWrcm37R4TZazRGLpUHnhmg6giTFydQBcEmneSBJ3VWeWDwzwbiZAxaawj",
  "key30": "5bTPyBh5cptZRjJ3JEUCrPfgS41qimYSF3zuHwy7LykYUNwiymDDmjVmcUUypvYqHGgP3MgxfENtJK5QPy9zbDsG",
  "key31": "4ENtekUZivaWEsWxFkSvJnjSGp4eD7dxQ64cfQd74QRvnbEqwPtmKmL6BZ2VWjocCAXJJVvNGcet5A73T4NHzZTD",
  "key32": "hcXurAyVJuQRQvNscL7NPyUaJdkf1HT9Jh6NQghFspaX2yvnauLpmKGhxcNsGa789k9oVPzWnHRtmbCUGkbvhLW",
  "key33": "3rw1Sug5AADsAEsC1DnMeFQa4ymorfg2D1j97q8CGGANdoP2GPznnR6sghormL2wPQkWEHJXWKff8BAzcvc8Ugc4",
  "key34": "2TP8rBz487PhSVrafA8SN1LeJMBWATc1em1366pmc3dNLPypYbpTFnWbpHZTCmGdUySSqrevqZcWfQTH4moUFNnP",
  "key35": "22y8Eg1po8h6seN13UCTRzQqR2iSwLqjJXbGqA637DF2c4iW2KCw1rJnCkv1v3NftpDzmW5g7D25w6XS6ddc6t3C",
  "key36": "651cq8LjTKDZJbBbDijsF9cqwpkAyeGEjN8FNZFjGCepbLvQ91Yo5zW4t8oBZTf1gkncecvo84UpoxsDgL5MPzE6",
  "key37": "3zN6a7MVPVTwHp6zrX8UB4AYLmqWWTame6Nchyo49YMvUGYE6uNJsJuLBGaK3fTptB98K3kBAbG8GYD7z2zjDS5R",
  "key38": "Qn4qx8itvxRJSxZkBvYZQswchyRGw4r78RfyLsC9PGrBLJEYY9E42EpQmEURvRWQNN4JA9TuJKBY36agfkHP8Fj",
  "key39": "1ipegCmEBngzuPfgm1RP4uLuZa4ieF8NGEKZG1KBhZqDwRjFfHse6pBG66D2jLGc9nt3UNKC7VBR4tSzmEAMivD",
  "key40": "FPmRC9FDUPuGbwHkzfu7C9HdoArv6NQoPU9VgZmQDdMmE1qe4Hh4ma3yyYdwjbYpPFQF7Hb3cydiZSYS7kuSSGS",
  "key41": "3wC2jvcFToqNCegGq9TZz4ugsFL2upgABK9CpuAbPB31d42buP2PhoLAqnM6j2bwGihKamdc4q1ikLRLe7NaTcKH",
  "key42": "2xnS15JZwbfWrXGaVU51Fj8ppXXbuCjshUyU6hd426RohZen6ewPaDHFto4SpXhekjw54LaJpAPqEu3urq5atL3r",
  "key43": "46NhicYtWU4tZdzPFyKGVMoyti5riFwCccF1aGpoCmYKgsozurCftCvdBXFkRTPGgrvquURgsaNX6C7jFKuh2YVW",
  "key44": "3z9P85yWEBMXD1rsdYG2mBRcjBzdxvdy8QHB8kWbZ5SPdZTPTi3MfhPXt8zqtZG9EnbSzj8ksdRZY75Dm3BNwz9f",
  "key45": "4UHaHdwq4hSJrtDk5A4wRFg55UBTPFXY6w1GFrHTjiLPVuWVfkJ9T3mFsBQp28yxcbSh2riW7QwTUuSyUfSvxGkw",
  "key46": "54TbEtrV15UjgSfMmULz1i5LmAktc247EU8CFK6YkH4Jr3zKbN6RpTQhRTDhsiLY6pVeJU9iBkj8HoQDKAaJ2zJ4",
  "key47": "5MwT7UYqnQ6BHWzVdvEQSH5HFQKGaKhvLGPH53p2SpRAVP3gmr22x77ZifHyvsCm4RUhssWgWxVVhYtS4E6c8YZ6"
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
