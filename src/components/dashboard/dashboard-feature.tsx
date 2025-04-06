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
    "3K5k9RjjrXUWzt3rQ4VAMfLXrALMdw9z95h8PDUbzvExanEgYmVqghPyKpUgAamsrR8SVsf18LziNcQRaReRXvit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gx9DnGPcpYVbBnNnjSfSnLz51dU5SRBogfxGAEQk6hjPk4zcfCrBWT4HNjqstmBgzkhZpE5QFDMbLJZ4vw9S17k",
  "key1": "5rtZVw6PrX7rQBJUeeeVtYi3LsCv3BEdkEwXuPewFShbSxDo4fPE9LFE2RcEAaWfRxPiBgfjvdNbkJ4A41qxhR43",
  "key2": "2DGFJmgSbPzKEgxBdbDEbwbJmtTRjNJWU22reKXXNP9C9m7qr5KJQ2L117XootqDiti5zT1mhhL55kvXzMyrpgMa",
  "key3": "4KcfV3SW56ZoyeSUnZrBBYNSrkUXKjTeqMnAG3syrsxbv23PNJ2KXU9ZAkxXveTSR5KFJH4zLMKkC3KWGviD39Lc",
  "key4": "364N8YUUQcYh2HAo9dbnwHvayYvZzSfDXYcJjL1eDRXrudp4oMPa3tTgv2vY6eD15BdrHboGemPMGwNjYKAdTBGC",
  "key5": "5bSmvjL512GyJHNAe4Z62CBBKx4TfyPX7S4S96c3XWhEFAJX2GcrGWDD2ziZ22h59cYmdDrq511cvRjTB5qAycUx",
  "key6": "3B54vCRF7WFPW3hPWuKmvTWRNNHWCbyvuS9ZhLyVtmxYftsLZm4e7V1UP9SDGdbzi5WD16E1eYjAncC6Jmv7bgS7",
  "key7": "5gm769zxvvK1jvBXrtYc8NsjioJnATPfDaFpcTbHcVoxLg5v4dj3LCmxR38Gc5iiUXVqRaTA4JioYxm8YDBf6yhh",
  "key8": "2TsvxNPHkLGdyHBjbCjViLBqsvWKX5XGhyhZtnDV3cPjfgYG7Jrvobcnitw4vSKNwP3Sqdbg6Hpa2siUz1856YKg",
  "key9": "3wj9gFtVPMHmenoMnPnxgHimWZY2gHKywxTnPK2SGJLMZpT6ToqC267rWCoCqcbwcY33NEUg8ZE68rUzJ14xthXU",
  "key10": "xw3bAZMdi17axmyNTSQHTr1TGTDxQwTJ1wPFXbw7ooiiA2Rkpg2C9k6xU11co2MycbV8ZHn4imLU4SoLuJCqGca",
  "key11": "26c41oW1xeZ5xY58vboNx7uoWfnchVNWDs7audUJBSSuqQMY5dCJ87PyZ9sQrKXnza2XZq6jmP37QhFjx8TS8d59",
  "key12": "3MTETQi52EsbAU51kXuDzSmeQpnNraM3utYBn4wFSmsaTrgUuELAeaXVM55t9Hd4enJ5WLT8vjQM3svHnwBbFUVE",
  "key13": "26CRhUsKMqKf13X7cvDdfxQM1sHi5sSDHut96n2gitnczTCfePgLsVVBuJTQgervP13QvkmHNFSmCrYukdyQaf7k",
  "key14": "39G1NXYM2U3bhjeKJkMYK3CndjG9UQsWxhBKjj5QHpPXAW4QZ57yUETdD8Ftu3gUGesnngFPpye1ixvJATBNPJY3",
  "key15": "5No4Jz5NtKXYe1Ar2gcBGrHjQ41BF3Q4dQEz7tUyXBRfv9grTMh2boKfkFkVPA9EgHMmVDvFe83CnMCdmzbB6X5A",
  "key16": "2PDqqg6wK8gbwrohnv6ETDUUXzY8CZqFjTHmcAE2bHqN2sM5ZSEJDfddR383JrPqjpHFV6cmuXBPC2GFRkUKxSLn",
  "key17": "5AakYQRoyKViguTJGKiQe2bzFWtEHamPAGDM1MsM41g2LhCqeyf7iU96yfFUQ9MkkpCmnmYX9ZSBHGEP4iCbyvzX",
  "key18": "3SUhL5JVH4Ux17eFyoYWc4zGWTu4hwZEvbqHtWhmo36tDoQDrJ11kaUL36wxpLyWbNwJsxaCGLmipNWSPPeToTuJ",
  "key19": "29V7Y7HEKjxCGUQM1GZSnUgSQswViMFZTbbxNssMoFBh1wkYw1tNw2q2MMhVnnYUUSEzoJug7t33ceQfqtQckuR1",
  "key20": "2nA4rGBzHCqTrfBBvjnZ8YExFhgnb2LCuWpaJdG2L7uHX4NarwF889s8KTESQMnJh9C1JhiqxfoVTC4CLYBaDzrD",
  "key21": "3ANybYvTYK2YuPyAZdfvQp5z4Ctg8FF7H4kfChvGsbpTE8q2d6CsXbV1wJeoxmbVJRqb4VFgFcFbVAQLJQSCEzKq",
  "key22": "4XV4GB2hthK2bQDzautJVJ7hUp8aGH1jgHKkQRBvyBLehgDo5WuRG49x1APV9hYskeS3W4FnmLXr936YvTeNxcdA",
  "key23": "3FvWrCLdL5pi4K4FKY6QgHRYhwwCZbwzqaYZJVXsAN3Cjgpu3MHjC9wDkW1t1EHV4Gp8xXmTaYSSJr5eybSnv9RT",
  "key24": "2Qz35k6R2iWCztTxA4WiZEgbfcxurevY42J3ZXxd8XBb9FrNugnnmHY9EdXAPGzZs8EvzA2FVUy5Utd5RSfhs4h6",
  "key25": "3osqZJrjxq7erFZLAqVNvcnm2gmckNApNhbATDyRKLPoYKJfz2WLsSAuADgEJweXdrzcPR5f42LTJwPLad65Rbdp",
  "key26": "4ev3yuNWbqta4ZS4wwqag5BSxb987Ypy8iGwyADvwhpso4hYej4o4davxxx2mAJm4bepUEXtzJj26h6nAcUwEup",
  "key27": "5q9EkDVLQYi9RPiwmRhbD65QcbGSEA1bdM9iRRJf3oTvuVv2DsQp8unnRArWTRpyooaHVBLvqkFE8FHDaJj6LYD8",
  "key28": "4rBSVoKGhDoCxUzQU5vcybgbL6WsSWjXDaomNRxP6aYqshj7jsMmaXtwtvS49kzZdVEuvtXAxPzBNJi4TL5EP44X",
  "key29": "2Xj9N9yG1buJTWcpxw5145i8rnEjbDzzJi7DyVtnNtGTedmnDeoSKyyp9ZHhn5XpPhMPzj9xKa6yFUe52MoAVmw9",
  "key30": "2EpmkDtYQQEQmpWPivx91aYEmYZt9x641AxNmuqErBiNoiYXQTRtnmY6cWbnJ99dDTJGqi5pLDPtC2xREdJZMUsW",
  "key31": "5yKAzoUv4Xxy9NWshRNgkNyLysRgrMyaxVSBVwAnBsoNd4WMNuQ58RG3kj7qs3CH4yKVT29BEBibywhYYSEovnRi",
  "key32": "rsQMuQbmBGkfR2CB7r3GpSwkZnzTR1PMHorU8LY7xeZfKqzAKQdoRCh6iPkDRKq3G9ysNztAJHgJnaKmPqumoky",
  "key33": "4HSrrwq2U8kLmKLZ6kVUk3cn8N22wKf8mLT9jwPbmcYzwvtX6CXQ9EEHjkkPgd5eZJT6vgt6125cVaxWLEfj1PTR",
  "key34": "3Y2Z4pH5TAETUF6MwZiAEV4EinP8RdA8Ma8jvf8fgCHXqa67eF5BKtJhKNnk4YfrMSpG4B7yLKVSE7PzkXR9rpV3",
  "key35": "2qEhcxS8qrEpWrBJToMng9SthGp6xXAKFcNUt2hnmiqNkRnRCrWg95BbUr7G4UrT1PFSDS97PLfbmeCuwY12Z9sh",
  "key36": "onqmi7NgGbbxfeXUDE8xaULj9VN3DzoQL7FJ7hpeVjwZeQQqehu3vkK2R5PVfau3W31j6nVPsg2Wt6BVPH1YQtA",
  "key37": "4a7fxC3yteHZM5dtxQ2yHiAGiPARk9EVCXAYnjsvPNS5xmCHX1Uqfgvo1muhoNyamSrK3xgQExuPA5DGcxphTNVs",
  "key38": "4XVfQKwkgaHVGwL4qavyawmy8pxJxLvmwdJ72GUzX4yYQkdApDj3v4efBPCAFQ6bkF89e3kGMDTqLqCuZSx9nPn6",
  "key39": "4RPDseU1Dv5ip9VmHCTM8UrSzM5XtQDAKhKVdevXySWrAfKhhTyodGFYUpiCmAM5EsuR7kzP7uUSUD43dGPmwekK",
  "key40": "228c5yhwxj5FvFgAyonMStaosgAtSRUngznfPM3K2oZJd3oTJasi8GubkG28uYSqjqMst5GmJC9TrM39o4JURrdS",
  "key41": "5XmCnPfdEXeaaJHYE2ichNxCHJDbM3VYVfAMXfRNstrjsFxTQG4XkTGnaB3JQWCY1hspxa4iqX2uV6JoSZKrjDSc",
  "key42": "35uCT5JrXqE2xM1UqLYEhVT4pS9UH7aMwrsCVtrujUdkUG8M1JnRAF6kk8wiZLAEbgPexg1x8XRWGkyuyMg7yCnf",
  "key43": "Ea5yKmHsQii8aeiXxoBYDV9HNcL6BFcxVreupQzg5e8Eyz9vT35duGGUb2hFpYqZpfVrPMLfBdBgDgktiqdLbSt",
  "key44": "2CwfZhi9W3uJdwirtzLTFaAA3Zd69thjfc5qT9tk6ELJWWw9yZ6TPXJixzJCyEwJcn2pBiZzKiVU6p8hcNSTodKB",
  "key45": "4rsSk8x3gr5pYjGQqiDVKcfCEj77btrE438QCdm8LLUBAAnaLbhfiSZpwGS26jngzrme9KD3ZLbSTyvuWii17Yt3",
  "key46": "5EgTFT48oW1BhEgtKsLcnvyrx5XH6hfyxSWtE82J9MCjPJLaGzdyUSSEPJJzaMKSv4jAQGtb8CZr5fksS9ZawGDX",
  "key47": "zmSaFLRDAZzniRut5JEJJmydRJq6GQpSfAB5R89MinM9ZQScNKn35DV7WPnewhZaN5vpQTRBkXUP72eNf46YeiW",
  "key48": "44cbckcJuj1tQ3znc1EX2sD9YiWrHaZcBrPmHGnCSjckvXHZE9pNZY2fq3fG4Z5eFJfCbD618TCmbG3zaPCzJwy8"
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
