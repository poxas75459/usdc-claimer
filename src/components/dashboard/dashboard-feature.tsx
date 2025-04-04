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
    "4PNarVtoWqMMmfxL2RQKbRLvkXmi3Gt7FuD5RQDw28YAGdWQTi614iexDLsk5i74n2zGKadBNFHCCwa3eDXpwhbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G68n1cxddTgMGjY9sPwaW1XAMuFRjGdDfzs2tt52Ewt94vNbS1A4bT6BVzYy14gu647yCreMnf7Z1ghxjJMkfqb",
  "key1": "619geQBWXZUutLY8Kd3gz8KMEb7PzLV2qvhUu6wsBbujT9GDNJKvAUTCVx8PDChmEgd4tUUHTmazVEHiCjqsQQAk",
  "key2": "4prmHLMSY56utLcScVSjDLakjTD2FMeFmArzVy5TGYeiHHCuQ4QjC4V1nK4zoyzacGqdUVNhvcJR9BCy94iWT7dC",
  "key3": "4GPg6a3zwRmKJ9CmgfbkkEzG8BKTjjMjVUuRcX8aqXKvFUUG3es6i2m2R5SLxaPMvnCsCQWzL58WmbpJGTPfgeFb",
  "key4": "piVkUz1aCm4LrBbyTkLDTWNeuWADoM5yD93x1oQXRWWZjWaj2QK9P9eT3Xm8d7qbUWq7BfdvPZaYCCEACihPqJ5",
  "key5": "x78KR4SUdb1Q7MrkWAPppSViDihUadC2qq7AiTLHUDQnEaeC71EBGngmNdSsTrCaBrVFm4Syy6sKrJq4tzTs3Tr",
  "key6": "5yqCyhFrLACi2KvKcwQZ7cFivQHJyEEep7eT4cwCJvo93ojWHWRBRLDAz537NYczFH52kwREexGQ6jsWz4w5rXAo",
  "key7": "4Gsq6zMMVbsnmYKv5SMccwNNcKn8rAUqawTqBeUq6RDxCEikVh3kCrLJp6KLH4KCXvKK38BoQed6wGguE1NywiYT",
  "key8": "2jepKMF94tk2izni8vfuxEgBC4SNSrRQx36xcqaiGMjqLZCLp1JPocEYhh96RrB1QENmfN7RFMtoCyKASMEsBUpc",
  "key9": "wo8MWFg87wMSnHzMyVfFVNTTWpLRA8PZ8cyGJ5xmXSJahDXQ3yM7tTqDFwbvYjEv7Z6mKL3fvXTM3Z9tCqp7XDj",
  "key10": "ZyGX2QJiNQT4E2fYHfYadCiTQrCQvevjV7JKxADwfYkb8cYmMudvWXJ1daYya6kUiabkZ2pX8zeLu4km25jSv5e",
  "key11": "5QUPT5JpES1hX9YzQCu8L4EtM7dz7ciCSAEndG9XKvGFjLamNyrB3LZUXyNvADFDrEvVdwJTSea6DGs1wRV2oFjv",
  "key12": "SPvSmRosJ1y417bTkGDTL8zHpwLxiT3vTAseAdEBPYNKuV4chmqhVKDKK5R1Us3sDrUsRrAHpjVP3o3hEcVdoDc",
  "key13": "2EgYavsR4CwvodExYriuCuBuN1ec798YAxiX1TiGAkCQEZdJii3PmjpwTsrrcmqu4GRZewSntzREuXuKjeYW4JxJ",
  "key14": "4A6RSETcMdkBU51embCnmtB8dFBMwuf1RK27ijm1sPfrV16fEGdddYdgNNyRH9A9iXohbErLfpr4VhnCtGB1YvZD",
  "key15": "2cYLdHxzckcTsq275L88AqWwnYgZJZ2K76mtQjbcPuZDcKkv2grXBa6RxVZFpvddZDpuwgYFsCz8b2fEQjvvKe2B",
  "key16": "2JEg9CUQVs15K6CB8DXytJLCnG8JnYKxkZM5bLGEQdUwjYdS9pRdWJnW3ZkBuFRbKBETEoGY6SQ48PMKBaH1mf5L",
  "key17": "2fKrpw7KZLivna9Fk26fa4oJGrxiuuhWx2EfpoQk7euuY4hVcXbByMEnfam4xgiXQLLL8Sin7svxKwZA2TvLwHkX",
  "key18": "4tHJyFwFWiZ6q35TmYG1MBEeXqz3KPAMhiy9jPgev7CA8M2rXAwBRsN3bdeKv14jxkA7sfEZrn35gEnYQUJurXjW",
  "key19": "4wUF9qR8fxuf2SDWZxQYo6oVHeFTTRjkBH6LHcsTohkZbafkKScRbEehDDrasLGH2RepRa9kK4aEweBVmzGEbbkh",
  "key20": "4W534sPZE7mN7zP64NFV4shaCdS2jsNLtdbntcEvkmZATNj8MfKKNwYZWJd9DmshFMKY2GrGW2SiYn5gZP6YSMjF",
  "key21": "4UEe3s1HJ4CQg9uKqBThRrVovo6p3jWSjfgsNrtY4rGjfxsSi5zwsUgRPevUmcaRjh9ubSzfCCugas2cjFDvPfLX",
  "key22": "4fRVDGKSnGLWFP1inCf9nsX6S7uRVWTvExMvuRuGwZMwjHMapxsAfHpCT1cEWtc55UQLeCnA4npxiqW8te79xcfF",
  "key23": "5eZP169JZ6mtEuBumTF9vZN45fsbziL1kbCDf2mQthzCXsyYHbryictVZnEsW67yi6a8a79CtaF54Pu3uMeHJgzd",
  "key24": "45gKKC6keNdCdAzTYBZsCaHeugnVnUgAAmsfuVbXW7KbdQuUqxBdkycCNkASAr2ez1iAmh1VvGk7wFD5nqc15Yyh",
  "key25": "4WgvShZPreFUz2mEQVG4nEPE6kGNVe9Po1ekm4H4Qjfe5UH9dxmhCSkoLpVT5FpiAFCVft3nVFj94MVUQDaP5zFg",
  "key26": "2Neh4DaPgNx3kBi2BbcMJLZopBjX9zu9c94PCrFjxLMVePcAWh27SxfN1m1QWVHvq7xvo5uAziA3kWXuddEs4g21",
  "key27": "4iDyD7thc9GU4bf74EbMuwFYij9wwbWpg5WfnecyPv3aMMfsAx8bwfrbHd4MfTcuGahSe8b4FrvgsBg77zPw7A9C",
  "key28": "28WtZ5EMFVYaY8Je7n8k6hBJrnzqJSUXzxKn8UXm9qCLna2xekNgLg3dJ4UXJWfYApp4xuzJnnovYN2QbWXvfGy9",
  "key29": "3iuEhAH7qRnGFWLCjh8EpiUafiHTAtrXjBiUKoMrLEsopYPpVipg29J6pq3TSZNtuxnaWmNSpQaYwow7W7BBK3rW",
  "key30": "mdVMCjn26ndwrsqjURQiaanKq7J5de2b5RNbUunHij5J6G4FDjgGBQtiuRi2GsmVSF4NYWLov2JAjNUBaEymPDp",
  "key31": "3AGgtQcbzu5koChKGZxeh9FxaqDqKmzo1wjbVPDgZsRszP7N8kExC8MXJwPSp4Apv8xogM3uovDa2mppoext9ugE",
  "key32": "3E1K3wShLnNQQKBeFgTXLZowGFqFgokTwBmnVeTbTS7tb1fCBCXrtmFxPDzUjvR4TugcdksjVXsq1JrWzRLT7bMz",
  "key33": "3xuw8nWjQrx6DChfrXDBq6DsLkRewrxwKzk4ejaXKi3uf5mnUiqaRnPQMK5yin9QdhUt2mGoHZCTESZoPUdW7QyS",
  "key34": "5y1oxyW4Ggy9o3CmmNon3CV3xGSnQAAJ2GY1BYHGreAGg4SizXFHNfwwjzdDz6LapLa4bufe7RgmsVnC2DZn7gvm",
  "key35": "4rN9a36Fryu8HwkobBvJr2ajudYM1swZzPn5Q6tPAaiJnFyvR42t54miBhzEHeJ4K55wqDt7fDs94TytX3wUvqaS",
  "key36": "4UL9qmm6fbxyFnxsZFWYkjWkKreNeGmv8rQiab8SPgWrHGuA7caPe62phreFRxjWjuLMjTQsR9Hz2Pye4iQQ7h6q",
  "key37": "5DDUvgokkHGKikSH1ctJqsRpyTd3Yr47dezmH4yCvdaRJi7pL4yuFArnJyT6RCkYHtpyAC5wa9b3GCugq6i51C7T",
  "key38": "5GNbhHyuGdbTMdq2hD6LVepzjj41X48a7Lw2SnXywBB8vvPhL3h5VnixNEe5DjxvA3dQcFQ7HZ1jBFDF8JM8dvPv",
  "key39": "pRqCbg66QexSicfX9g1PMzmVhsTWQsRDRauMtfxKFBhXZgnsULaXM39u3jddo4HKPgxqkdnBZna9XZMXkKXCMdh",
  "key40": "3asRpj6LZVoRe7WwLNyU3NFxvSSpFR4b5mrYRSuGPTzDWrQPoYfLQy7ctG9kBUgkMGJC1WYQA5od2mieoqJ8egEk",
  "key41": "3Y1Wg68Bkc23XzG3cxbT9hjCRZ6YUUgLyvqeAcw9SN19CE9DcsKJmygoUugE9mx8joNToxfnd73cYQ4rFHYtxB1G",
  "key42": "4gpj3TAm3cmJxkWSYDHhkgXpG6ZSiGYKiaSyLEg3v2cBo7gMaBdejrDPcU5sX157Zt6J7PLwpkEU7dxpA6qJuM78",
  "key43": "2x8SnEq7i6WAdKdr3MwxuzmwQZLRPSChF9teiKKScFn2R4n5BQdCDDvzvXefDsW9dMTubpVmcrWHU1oLQKtpiwJo"
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
