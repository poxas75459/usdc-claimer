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
    "5DSxTnbxkXtfptVBL4g4jJroKxXWLrNaMdmv8Rivgif7uXUrMrZsvuBjQVVaUsV1kUoE2e6GDzPEG8BP5NpESqdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8731T2r5W3ck4eTU8cKukBTmEFzpB9N2iWsYf1mJjzGoHARJWo498otqmnHQo2rQn3iySYwsvJfgYTFd4z4B1Fi",
  "key1": "2mqWXkLdZt1jESeqCnhnjPN3nuZxbiCNbiAN14u5G6gjqE6cmTU3cZt5t5Z96piUGjRTcVCYpwxCj73scKv7ekpS",
  "key2": "fXSNSDu5zUTV19f3XvWwpHBfbcfB2FYULJmNaS7at1rvVaHX3UydpUMENgrXzsuNk9e7XjTsuiJQ1V3BBKiyG4m",
  "key3": "2hqcUYwmLzrC4gnTmkDbiEeiYEDPAgtkPGwcxjC1mVf9vHfqfbD5fmJfztiCgFCwHye3g18SXkSC1xWY889pj5Rj",
  "key4": "2P5RsB8TpFxJifNPc5SPkWMVNjKH2i8GKELmLNSPYsXNYKK6QXuKtsNZZEPr9oonMwqMkk8kkMVGH6r9fvKgHptK",
  "key5": "Z2HPpmxvCXi4BmFp4NQfpV8kv1SRrY5xnhLmYubo45rxDeq6uZaARKaLLoB2rms2S5ivK91VYvm3WucSAVSVtrM",
  "key6": "4EdpMQu3ytTm9mp1EYvouMAN5oVLRLpP6we9o3phWBeHdPopwpWZTQMnP1nRJinQgiCX5yN3QehUfhZYQMGPgzRG",
  "key7": "4r3E3brdGqGfA9cFYY7QdWcWtLW7gzmRew7Kbr1X9Bui7YEVuHk6U88CsNvD25vfQA7uSdn26DmeJfTBGbRsXjmB",
  "key8": "5rtBxBrJjUyWkgjsZMaNVRZ99RJBMjyU3TZRPYNyxAAsSbwiTX4YZBDfKkp79Pzg7TBk9LwUrQzwsHzyQaztEcvB",
  "key9": "5phMVrdmbTRgATCwUx2SQveNp9BWpxpoVFS5FuwzvWBxwH342i6VuhUDH93t7YBL3pnjoTwsYdUHFaxgivgXKTBn",
  "key10": "2ZkQMdCWk6j2z6LwNZ6YhEbPDeQMmgHcJ2yb2Zj7PppPCDvjVjaQf8NUjoiZeLikcDJ6UfQJ1afYWUauTcSuEgw3",
  "key11": "2m22PKAocsH4LBhi68nfpXZKrjnvz8PidteuvXRq9CsyXWiESr4zA7WkvSzoueHVmvsQNRKTSS29UMar86JCbNhp",
  "key12": "2YX2dsRQ35MbhEYAPatiaiDy5HFQKWc1r1nkSgGrg6isyEmUwfYAopKiNu3vme8VSJXVc2yY5B1Vw9simZGc7kqw",
  "key13": "5QFirJMQpp1WS9UV9cJnyR5e73HDuYKSnY7DuuRdNSwuQme7XB2TyV9XgNbzLDQyeiPnURjJ8gdpBCkouh5dWz3A",
  "key14": "4KLBnxQC6pWURzkGoYtCJEk1znCsY6r2ijShpZ3FhrZLPNWJdUcmPNLiJ5okuqKtCow9MvGb9QLrxKV3bdkbRGs4",
  "key15": "49VnNvzMz1aPovQUh343rsvzja9141umi54PdR2PfzyXwxWC7vKEMexKhLTfoXRCWK6Qrc4kTHW64yxRZPa1ZS6f",
  "key16": "5MVKPExPDF37uoXRkhTKchJDtomkEgz5r9spG6umjFZE4r85tPbXkoGtN1RuYTsw6ERB6jBut3ynDtVuVuG7Na3c",
  "key17": "3bkX5u9bKEEZowLR9opRABvWWrJ1goeRuotPCnRVGx5aP7NMAdpwtu8q5NNXtP5vBPHY3DPCZ3i9Ki2XKEz6CwJm",
  "key18": "34aHi8XKWF21rhLwKu6RxsLVDBjd1t6MPoeuCyaBGDF3TFgBsnehbCVgZwmh1kvDMnm1tPrpMT1VvdkZM2czLtVZ",
  "key19": "LsqQmgfTwsTMibkGne6ZGpe6uFpvVy5aE1bUM1c7efeqLSHGCBs4ukmcKCpFmN3FDkhCMFutWsLPPKoZxNVgGE9",
  "key20": "2Av7Tfby6vpBRasLqW1KttJFNNRKeLqBNiTUDT9q25tPGtoAgHa7QkesH9RicyvbtM4H7yStyWHo9n7SNBWhxoLH",
  "key21": "37m4ydfWh2AJfzyXcJxgxWSyEkqb6d1MxWPqWUN6XXeWJJ5Z93NB4PE9iUMbkgFJ31MCVFxsg9tSiiry2XK8DTgF",
  "key22": "4QezGnHXjRUXqSWXRqHa5opRhGPg9GxbDM2rkpGzi2yihWvpv8taDhp8Dg5gz1n2zo61swQmKQhP3Y8an6pYvYVq",
  "key23": "3MSeCn8xq2LGU93KWBA6eLGbowrCYza5QHXB1fTq8RBMNEPegksLQwUVtWZfbErRTxxkgFnXRSi2svQBbKys6p1Z",
  "key24": "4VNwe6kjw5XH8cKuopg5QwKducBeSgmSPGEJ5nSynYihSkXrsWrznMnqWb2gAKn5MfoYMbzxJk9c41mRjRiimodG",
  "key25": "4abqumbx4FXaxEagQdbBzxP9TwZAUiMcqWsXK5cPVuwguffyascXL8EubMC7nLURa6uLGqYQzfzPoDwbWhSqXXkH",
  "key26": "5P8mJtesG4ox8rweWtauQaYTgykQ7ns5xvnQUQQpiiYP2oYTdvG3q9wXVCH5D1dNdNRFsScmASma5KMFSm2L7tBx",
  "key27": "3h47iAZJURMRwhQzCt7Zh821UFRnoqp2sJkBpUpaavApfrUJ6xpazZPTgW82h8cRGjspiZFjr6ihjLHXsRsyP6ta",
  "key28": "jGh4KbS3Jd5DpansLqFYbbLEQ9kan3w4SGeSBvfbbL41bRAhEodbaZWsQH6VPnNi2q4aMXgRYqeCsVWtHorJVYW",
  "key29": "66uU2Xk5GW672N29Pa8YjbpwgrbTGQCnBPSZTrcy4GS4WttV3Fs8s5GoMAsWJFRJeig94EN11UVYCkwjmtDSTkXg",
  "key30": "5j4tevoU6zyk95sShtyqw4ocJ1HGaPKTxrTXYwVTPf7Qm6tVwuDh9EPhsZfcuVbn8TsQ9b7fHakva1ZBsUmkkzuw",
  "key31": "3av92AhXSL2bCT8sbGci2u1iBp7xeq94qwiXncZGb3ZoYvXao7DurfQ6N78TjZ9JMQrFyqi6QQqUNZjrWDfvA64M",
  "key32": "47x5kSCrYndqqWs5a8ywVvmTNu7As6Y27czu6XmZSucK291gZkM3xKsGw5ooHEnnAGeD2rpzreyTZhNR63d8tRt6",
  "key33": "PH8327kFG8KKnbUevhUL8MNiqi9bjY1ymGGFqPdFbkXbdZ6HKn5zjsoHeq5ChFdHcQFNLgbDADqQpQ5RPHYAr9v",
  "key34": "5JBr32yJRCd29nos4zgPnEtnfbnpVofHpwBgXWBaKUvGyt5Jj7GkgTSjBoFEjLj3SDT5e8dwSu16JhhkajJsZ3PN",
  "key35": "66JhyLENU1c1iEbF13DZW3qELaFYBS42gmQ5GjkfBD2DJft2hiEhsZLc7HbQUbWTcbnNtE44YczGVnh2jUtJYuuG",
  "key36": "2BeJ7DGewU9mpnLFKKKuqKiynMKbDbyFzzhM6nZMpKfSGsKmWFPMMAEwkFvdpFq8rG2WquwF8ucfHywc5XszipEC",
  "key37": "RCrjDP49QVoVtPAeBMcNJu5sJyH6atLZEscRBXxaFqnHpgQVbFGWbuVSbVwfZRU6Y6MH8ST5gSiSxPcXJZVJHkN",
  "key38": "5e5rRTo7v37TZnwURHy5tGs595nnPHoDjetRRRWDPYcbAMqsqKJk79zzRAePiDzyySFdXrGEqBvthxxEUg8kGeBh",
  "key39": "2gXVxeaTFkXPA8vz5BdUNufDYJd4X1dbS3F6nXmwdy6CcHgUXwPGmgKXEm1AZ4UaWcAF3gbatxTgiRNqLAjzbntq",
  "key40": "226BfjDMAzQgdipKCTAYJBpj2rPaPd415ZdHFNXMgFNozk96TUXRcaCAHXkrVu6fZTbbpDSakPd1dj1w39twoaqT",
  "key41": "2fkMCiELvHtbshcpZsUFjuph7y8kM2nZYnkfsYz6sT3Eut2ngCqBbWwFXgUpM9CeuFG9fo8MZ98zaiuk6b5djb5w"
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
