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
    "2qBDVAhQtxfh2F2PPWqKKZtbPsMBnaVNHFnbepou2y4ovfiYn9tnGa5hL5JsWMzetzGvGKyFMjS6EqWVA2w9cHgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jKLXzq7j3vsMpeFyDNHBGh8Sb429gSesPhdJKGtDZRSdjdpBjN2V55nteW2ZPBv7VnLvm5HWmXbrJ3qVurRgiiG",
  "key1": "5hK7Had6nSuFMMGRfWx8TdDZchmFUSx4eJSpLkNTqidB8o5SS3WXYgggUDqppuMzP3JniweBrb692qP9i54yJNW5",
  "key2": "5U86Pg9avBTZvc6cPSwq7QifuYnFPiSVZZjLQaGTUfqW7iqKdfMzJNSscu4UbbQ27WKtEEXoCihtdn6M2mXGwKou",
  "key3": "322SmBD8zorRQANw8dC5bEXKB8epxEfj47cvWuda9LTnMDkMuv9havh1PpExcEkXKwvNaAtrSwrrsQMfxCK5A8Jo",
  "key4": "3Ao4DZn2iEkYSpo3Y1ygjQzS2nMMURUxvo1k8Zf23NY8xScJ32md4nPW4RTH3BzZhCVBNsMiefv5vp1suaN39ts9",
  "key5": "5frKpBasJtDUL5RMv7cUiG7XoNS14pjvRWgdzPbmguWoKG27Cy3rcJi2TVPems85q8vRQzkUgrXyEV4ns9nheZgG",
  "key6": "2L8SEXe5bFCPkJbxXXAd17SA6TvjAtHKEJZth9spA32fvi1AtHKXzJaDDCF8zZ4grLevhD3z9ogBSAApGmDWHfNN",
  "key7": "6p42gfFXEoF2Qg79dVS8Ug2U4aQHjw48S35JoGc1xQdTih6BUDBfP16zivhD4jRABy86Ptwb2JiLfNwRNhTC7AQ",
  "key8": "5WZ4zdyv4eUGjdTW88mnNNh1Zk8fTLfiJ5pdqXf9YwZkWscAGb4GK2R14KedV5ESYD6VUiN4MT5eJCE2eN6cKdjR",
  "key9": "eaqE7zjGWzTM5Bdbh5wayF7FZBUiS5bZgrf2jGxZjMGWxn3i9SRZsyAQGZXxpEjJ1aJNi1GgKBnnn6sbNp4rbGV",
  "key10": "35kLoCCrZR8FdrrtVhLthEkZeqQXPLBdfVjWRcGNsqkmUUZ4q3m6uWN7Gq3uXGu95WfpFHTWk8yac78su1PEhyJ6",
  "key11": "j4KiNMnDyYeTuRXdoEEFKDAw8CFKJbJwUYdzb4788vyQzEoUbrs9v2nvfi25hWqJ4dnRFzJFKjNEeU4SEsVWBkk",
  "key12": "2Q8htD9oHh286x2PiC7Zaqbo9SS8CYXEDKSp1BVWQ7kLUsouEtS81y2V4YhcPrVdRaMprNJsvo8GMzeFxwEGRKe2",
  "key13": "3BbqRpr676CeAvhV6Uidv3jETQi22zcUs3SJXXGhJ6QogZsHADJAW6zBLL28qEmJoBS49Gn5J54rxaYpJxeWHiJ",
  "key14": "3GchZTPEv4XfdGScCwrphrymYL4cEHS8LqWegrJboF3kb42R35memgDBRYCZgvYxeumq5gnS7oBJwqoZ4eVsP6Sv",
  "key15": "5ST7koSC4jtpKKNDA1CzrZN7GsGSpTHhyUXcu8PyPpNb77toTonGcGWZDNUpFxyJWYh9mZYXn2QZ1VancysEVvuB",
  "key16": "5oScv17WFvfzAvB9DBiPfRW1U1DC2jieYejsFJq97Mq6RfSSk7PwaoWbpTLvTwoNhTprxS8rBVfKoargFf2c8ToU",
  "key17": "65kL14RPwPjXLPCWeZN9jyq8Z9YZQeo2LbCLvJ3ZSaVPLcvj99p9AvAGZ1jZ1QytY1Fe9imeXCjoD77FjUnssHqj",
  "key18": "4X6n1HkNKpBJRuWk9mJFwmv1L1TX3qcaEfUcdCkC9cdjbH3ytF9AAeHqxBUj6GCTv2WD7o7mqY8RVGhTf7dUqT9y",
  "key19": "23b6xAFTsCDXBw6VigShEEaqERsi2Rieg7FJMNywVJ5LNeKoipUm83AkJYrNwtHuygdCVb1fnYx3mpuEX8t7ZggP",
  "key20": "42hKYAu8k7JfeyhvcgTMNnUzftnfXhPCXRoKDdgnNDPeE8jj8UaeyHoDFJ3468GrC7sb5TdPJHjxUsMLRqqmDKKj",
  "key21": "25dmVQ6uMYFY6RCEdwveN22wedCrnx62WW9p6cPJNzw4EJVajD6jUuCNNEtxCZE6iYH5iHZnw5CBqKjaAhdAbQY5",
  "key22": "3PdHx46AhncGkmzvVP4mn1SaJqSxh5McV9eiPfoEf1fE7pejqZ3Vt1UgiZp9hGVZrqWwYu3DjrFKS4PH5Xf9fTfP",
  "key23": "56XpiLxMvZbHNFMueNR1YY1T4pQmZSsNYqzxrPo4YBLA8xt116dwzfAAML5AVHFHFN8nqFMU2QApS7StXvmPJcnN",
  "key24": "3h99VCEF6UMu2AS7v7w2bmn2RviqmwUKgYVvmnYkUpV5FwkxmzSBhsFQGTeK81vLoNAX7fy1GteuTAoJfYpuu8jH",
  "key25": "5RbuaQmDTYDtBHbkZXPy6evVSyGehSjBZ2b96BVUnyHqCmdEsxpkNGhP5PjxKox1F4AMZuQgFpSLMXENX1x4qsqS",
  "key26": "z6qJhzECeTxnKdfVwt3J7SdbLgYCnXK63zxC12pvhya6uYgBzcu9212FMnVn2f3mx3KSciizJNcJHwiX5sePGsW",
  "key27": "2Lnwj1TCuR4K9TCKtRfZEukakPWD2PKhmSKn4hw5AFXGzGwJpQ6LGEEzhpW5zFoT9f3FtAu69BjiEfxqFbGNuytg",
  "key28": "2oZhMn5VnzG8iMGfJJid92rEL7doS3cS1aa4CFFtWha45D5iwN3Y5F5kYZ17rHwKmCSFSMzBxbDPppRbqzjHGgxG",
  "key29": "2GNnZzTggHGwoHuSzog8kiBvadmgRor4Rkr9r8zxP7NcwvBA3HovtDFQqhoBK4FjvMT4rA5bVvHaQ1BUC8SWpgM1",
  "key30": "3G4yg6w1Zg7tgiBYAXKfXaTvkU6iyhu75yJEETCVP9RzduQ5gPEb8KrN4rdS1x4AcAaEod8oHLeiix8YKYXSEZri",
  "key31": "49RArBagjkXYHZaCoW7NFwj2YhN1YT8HitYVf8Krs4Fe7MV4EfuGH25mJq3Y1d7fky43LqtXcwT9UdtHX65oFBLN",
  "key32": "2pBYYZyabH9YgkTwRq4ku617B59xd7eudkbWavNVSSRovWZEHKpATHDZKk6DuQh9r8MoRftZn1djG8k85zHeyUsi",
  "key33": "EGaaYYpfTud788DHkNxnE8qQSA2Ef6QQ3NA3QYLUaKqNJ28rgSoQtcYxJF3v5VseP78UtFcGaFBUdC466mN64Pm",
  "key34": "5KTQKkAacuQamwGD1xwC7WkR8umNaTpbFQsCCaiWKTET9UTe4EnXHJZS2xbxmqAq4obS1bFuZ7z6woaK3k8AyNn9",
  "key35": "3NRKtjy2YhvB1FjReDKawEd6PogW4NnPLBoxDwnNZuNyG77grqGonwPyVd7XNaAJziwcuzGnz8sQQH3dmoiqk2Ra",
  "key36": "4EuEEWjTUBpFD4FamkWFPehQP9fFpRFXfDVwRnSfGzU7xqBZp1xcgqzwmdsM8FzBAw4X1j4PdCKuu1eeU6WSccK1",
  "key37": "3GkCpjbbEnr4TaX5tc4xUqt6USR32HzmmJg4Stq4ADrKCvDtzsjcvcYZyxP2c1uVuni7Bgrkhn57TW9XYBYfRcSY",
  "key38": "3QqYMfUhk7kYpHjyBrG4ffNL3nFNKTpMB6qsN3KfnvG45WpEP4aPsPjroyPSwod5btMHZEiyuD6AGhTrYMygdcJL",
  "key39": "2D9EnKRKyjkvgbCqG3J1f7XHfQnXMQfDiLKABHTUR4fGDio444Ra1pDyZxSHQbpEHxyiZbc1ZqinLuirktuTUeuv",
  "key40": "2vrGa6jt4cfYfFhg1aspUcjaweZRjNdgooWa1Utw3esBgPuP4no36DeJJeXX3Y8NBMEFkEZ5NibcZc4LEQukHeEa",
  "key41": "5P63HTVdXwcvRUqnFz8MVRATrf4CfzAYjysCDkpnEiKfRgMNNPT8uzFSPAdNW8Ri6LQMmBjd19ogUymp9qvPfBue",
  "key42": "2zWFeSMmSGPM4PMaLES29DfvsvRnRrVjMS3NVXGiyTz8SmrHXzLqEx3mzUgyS4ZWoWMMG9JFAoBof8CScr38rACN",
  "key43": "3XARye7ayNvN6uFNwwTbRAVmPCnszmQt51eFGF64HuS9f4C3QzrkQhHsbwjuGVCkV97QhpuwYKbaSWQARiuFtT5P",
  "key44": "35A5qHXQsYRscSXCc3qPgYWZMhc2uefTYNZcHXiZUAsYWX8iGH14GnLkjw3qqnyZSztrPMHZ8K6eQ2vnA4PEV5v7",
  "key45": "236RcDtizF4onT6NrY2KkdG7uckQggrdBFYzvJnKxUzN3PknG5UitBoNqzsGMmUMZp9CP7jNCbKdH3QgmQ9PLVQN",
  "key46": "5xQBzCatKgrhAvkFZPyLaW3AV8WThAut5VLLdD1fynrd9pzpMfiioxABTz1aqKa2RpZx7HBcFxxbK6LM4354ohqc",
  "key47": "4vwBwCDy3pUcSfF7UqeSmXMP6xVKcf3S3LLXWemhUPQ13hd9Yes1fzJPUBg8Koizos9PPMbjMsKjvLqSXBAgHF7e",
  "key48": "2CpXuQGmzm9ZQuy8m7FvgGhmUUKpM4YRsW6xS9y47RXy4B6qejGeNmfCv8u2CGgFaagDuPGBYRTpGP8zyJT83VCh"
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
