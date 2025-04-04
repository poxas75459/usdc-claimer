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
    "5YBuh9rPQaCsVnztwKEPNSc9HP7Wph7sAxUKVSFq86QgeMKLZUrYmjkkAvfE3H4r5mu8oPk1vr7ibfocxSY46cRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XtPQPzu5JN4Wk5pYw5Kk64bAF2FmdMKs6w6Upk7gEpH9jk6eYV99J3mtL8PF7XaRFKQsks5s1NtNQDhv8fUPfev",
  "key1": "PQTh66rDpV4oTUdPPkoZ7EMQ1z46cksGMyEhYVZFsSdu7vMfk9ryDSb59cySBHai5y8R1BtsiBgZMP8VexgzRdH",
  "key2": "66BGPqtraiPiKsq12ytYRe6TBaCtsXA6SGdFhrAzioyu67EJGcc6ro1ayP21H4Bi5eqzaVEoq3qhHS4bcKc6piSt",
  "key3": "5CxUQ8qLahixc5EG9K5fz1BWjXBLtD4FRyS5p4cpU23eFCHsJd8xJGzaaWG6Vf9m5Pzzp8ir634Mmy9Tw42BLNTx",
  "key4": "5rdniHpwu4EvLEE48KZoWw9AU6EuexthUsQs2bV53JB5VJ4P1Tmbm9dTf4naHNXbFnwNDDvP8jPigGTGEd8yjwT2",
  "key5": "5xwfFyCRj97DuXGdDWh48o7heMTHQNv6cEBmiYKXdic2iWN1n1KfUVjNRJbd3jWobwRLpAn723xyi5ECZqUMGyE7",
  "key6": "2NeFzuSW3Hu8TRZK9tdamxg7vcrRPsCSZimAzDurjshquHDiCyeNZn3M5o8hGGQxmL7sF7wqmaS63Ldjknh5kZC6",
  "key7": "BwKHMzjxyCQD2jy8ep8jSh1rkkdSwWSsxxMbsAS7DkBKSoLFdXyHKVpBgqbjFrg7TzJzML6uo1Fgzi38mHSyYJt",
  "key8": "qrLLbgMzV9pjwJ4174RmzT22SiN9WbwuAdqPjLDBQy1dgUoTqGpxCQbGqbjd9kNmsc4oeyP8jVWMcXmQTeRLoK2",
  "key9": "2aLhMFRUBJW1GYWhuR5HxvmAYybbvMY5neayVrEyMaNutCDJA6vdaTcdQGK7PNJbGWr5mfFRkVSieEvBc9X2zbQ1",
  "key10": "X1Cum5J9DU1GweRYEqbEE1Ftk8iMPrEySHrpy9s1ScWS1QpQRqmgSWJAw3jpDdi4ioWibm82auQi6x3PxV72PYL",
  "key11": "3cfuM9sUKcrmBh1M5htEaQvX5iYFGsJrfneSZEbQruJkhz6fGDUb4MKCUiSuqWi43VHqpX2ZYkaMtS1hv54amET3",
  "key12": "qVEoNEUHE1Dx85mymDp1hCufsVEEaq59Vpie2iqBys9F96itWuC4K4Q2VTZthnZpAiDc4BBwhQNVuvJofkbWGAx",
  "key13": "2Wr5Gjw2Nr6e6TpkHwC4PdNJHDiRF3rwtVN4oMeoWsM67otuEtCfHqPyycPjGzzPFQ33xfpczeNfdFHNALXKqC4s",
  "key14": "64zePVUdFDXX7GiK6HGiWZ9h7eNRtYtqoSo34PU7Npt2rXPGU8At5kSLPLYS24LYzGB5DXoCUPC71L7vXSpQvkJu",
  "key15": "hvGL3grqmYNTx8sDhAEu2zPmwwSmZst3oxCyqDvwX6YmaERyKFhMNbVXUcsD7tT5kbsWdeDZRH85S5whawHiPAJ",
  "key16": "4MT4RfTybQTMYfESeJscUAimPU4ks95fN1hzNBaEjeM538Fn6DCtZpFBG9ezWo39hGvvZLmXvBzLCsnffLhcjPWa",
  "key17": "29ZzR6VMhuMifQkvkPXxstx24ggErUGE7UF37QKuBZLT49FN2EGAna8VEChHaNL4pxykuZ71DHb3dYn1dz5nfAdG",
  "key18": "BkBAfGkGWF6RE97dnGDKov3NFN3Mip2cSJR19Z6g1gTbQ71yZAarPuiQ9hz3yCznczU6eZ4kmCd7MHfb4FAo1xH",
  "key19": "2A4wR9z6zNsdSMc2Way6PDZV7rfPyjFbBT6qh3kjYNP5XpXk5FPK5WGEz6oGBp2anAc7yHVvZa55aBNJMTcGdzwp",
  "key20": "2QAzAwDvW67rTizuaBtzNWYN1ddHwhdKLhaxMH7zzGeC1hPR1XdbUAkkLHArWokvryeapoPMvGgYL3VEnWWPwjbr",
  "key21": "u8atngUEEAxqmXVjaKTNZzQZq7dhBRuUPsiCSE1RYX5SfNNJwzsE8q1s2GDYWt9dqMvvoyUfCPsk28sX96DwdG2",
  "key22": "27RrDJpScrikiiDZfHx7qhpFGMvHCsKxxVAg22SkWNXny92M1G6Ym8dnu7GggjTM8rr1jDJaYTpmg6Dtgiot19NX",
  "key23": "66qPdG26ZbNmCvrw3JvpyBP26vLSaMw3YzrAW2tDi1Qgs9tB5SbcbN5v8KNorQbdiVjykeMQEZWjk8hpfvAJyE6W",
  "key24": "4KAZXM3P1xJHWvoJD6UyFD8EgjZR1cNYvYCCKUV63qDUD9ALFtdrPM2SDrE9bYL7kAk9nNH5QiHGM6hEtmM63FK",
  "key25": "2qxLiomiYmmb6ubGahSVBL79HztTZ5XBmUbr5NLqGXZkzwSHwDxGP4oTxWcSEkcAXf8WLR5DLrh3Y14fMc14MuE7",
  "key26": "5LXvHpAGBaybij9XtNpAKC6c3L7aYxdqiwZQV4b6eA2N5YX1YhKfAaKiEW78pLFvMkCyYavVDqGmmc4HeC8nPUUR",
  "key27": "P1gKUYmR4fC3Xoo8cEWK2GFMEEaWxmQaVgXprFymHXBM2oR4CQtdsG3AAzVmELtgkMvNT1Hc9TwoGHwUz86wNtK",
  "key28": "4ZGcUzPg3io2ZJaReHhTSsf2ER6rsvWFQqjToGFqAJ76GdDgFwH1yBSS7PPyPNLktZypS46UtNn2zk6ETkmMvz1E",
  "key29": "5bgryT8gv4HJD93NaCTD4c55CQcS8ZFfFjHLRc3fUR92YiAzTTkDnTUA15wkfNkVCHNc8QFCjbnGnByKkzXUNBPq",
  "key30": "589k9LpbpXi9Los7pFo9JNHgEeUqJ5ET7kQvrAQAn6nUkSzu24bnDxtJCerEwkX2VjxiUYK5tFCFJfpFDUiwUSHb",
  "key31": "54HtQ8MxAZHhDAfPc6EQb5qysCsuUsq8yC6sQBmzyBQVtf8mJ73wtMB42ZtYHgdyzn2a6gD32beVqnqhpzbZqBr",
  "key32": "5KC6LugU8GMdts3S65ktSyqrmrw1ivwF49ESfduJX4aY2M6kXXws44MipJxawfH15VBX9CQvZgk3YU72vxs91dxm",
  "key33": "4jyUG183BriuffRu8ZQYPzasCu1ow5NAnnRcdc2GKh6hw21wMYizY64ZDnwLhBPesLQSSNtZeEWKZTMMqmNdQPp6",
  "key34": "4YMZmouoooZVfA2Sh9L7HhmDXbpVzBi8ZY82moTWdUrGH9nouPyHKcLfDv7M385WKN1HCRhxD3dCcS2rjpJhd74z",
  "key35": "9opEVBYn4bMJNG2biprT2eGR5kxcawbCzKP3szgntXPKF7TJN5K68bRT52m6tXmYNgU4Z5TobrnRr3M5Xc6DMmk",
  "key36": "2JULTTgcx23rQCXtgKfWHf88xMfjHGLJFAKfy7VgFYXP9W7tvT3g7cNxgC6ZNaj1wZMcEAD7LGbmHnn2ZwSPcw6Z",
  "key37": "2E1RbV9JjYvVg8to7vCpSJBPKfEGQkTuoKUuvHEej7fsrgPMdCH9HBDQKcL3U889LuhD9vwjeoVxWECx93naNBWX",
  "key38": "fPBtCcpfqVsT66nCX29BMB1xESKnBEpTprqBTU7UQVSV9sb8NUq5hhbkbauxZ7JBKxKqiSxhqrdAxftz38y8Sky"
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
