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
    "4Qwf9MtuU7iHKVBRq9xFWpMmMKWERD9H9fyhJYd8ghWrvwRX1Bs4umUSHXgqqcaVEh6qnhVQ6pPiLdhuEMSXwcxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e116fx3ZJVj9b9QiNGp68p58kEVSyFDR8FkrT5wyeHzAwbPjdFoXVwvSCUka3oBavWXACc2bippx3ujhdvXDjdG",
  "key1": "4TD6ySEWBV8iVQTrUMwi4nz4PQTChqjeZPjJBdLDbZR6mz71AHA1v2wwLaQfhWeBxiVW1kiEUYfoFsW6JmcVvbs8",
  "key2": "2GrgLTYdvDQ9U79QqjrRGYcQ9v5S74LmnUkdPDmFm2ST1vSspsRoNA3XFkgq3H9yYsRaJd5LhrRGLVgp4LBqTVrx",
  "key3": "51cDsNrEv4CyNv8RUA9X74NPAS45niqs64yS6CfMTGhu4PW9Jvkw3m7rEYnyWmbCUg4JR2F9kKQe5QsJUtCgAAAS",
  "key4": "SkszoDq5uVSPrr6Z8fvrE6kJf15kFdVWGHTkqvE8r6xvGF1cy2YAmGvFqfAjApBWAcAi6iC11LnBHT5T2tHDsdG",
  "key5": "36M6WdzRpCErWoapBpGrcs8z9NzZsfgzcfeQPzEHXs5RMcoR4rigBVz2E5hhm7RWSB9HBjfwDjNPFraJ7qhaa7S3",
  "key6": "5kDNpKuARxMw3tAQVNGKkDVMBpJt9Divz9vVW3gW5ET6qKhCTsVKPMAtsayEBTY5iYX6hkYfBdcoJm4KwCxHhJJp",
  "key7": "5YR1MYqxvGJautmtBCwTohMR88hzDrdPbiMWRGakyrduPiQxffMdoxoFMwtGvePES8RQkrko9bbARP4KkJ8DCxCB",
  "key8": "3NdRfa9MyL8p7wuhSBkQ1bJSZDpyKdZG8du89bzxaQSTdutJTmpeucwWk1Go1mrQuPuu92jhmfCXqQQetWkLVTMz",
  "key9": "2tSfnk5CYp8R2BUp8fE99Z6esWk9mbXuC6N8ooYfTVAUxxcbw88KGjRRjp6dA1zuKTpss4bQheiUJkQWqxaZVZxH",
  "key10": "4eMNqfRXLHcnW6mkhGft8Fc4TZJpjAa5tzvJSdb4YZ84eDF3QoHxTfjzMzH5doCeG45LQhsJmr6vc3MpWFF3Usmr",
  "key11": "5hnLQB9UQP72s27n7dXhWMHFCr1F8YhkkKALttSxn3gB1SfigFhRJmccS3onenyr2WqVYmB586xaFn7nSfdN24Gu",
  "key12": "3Xj5tAmC633vMov3Bn4SG6f84i4zwX3JCNtux48xwpkUbidcuAa7KgNe3dzkpggjv6Q7288AygttugFsgZvM5DdA",
  "key13": "5phk3n4MRgsxcSpktjDWFWjgvBckEHnZwjKrV5FpVpkdPEKG6VH9AkXLQpRfWCNLTx2qPU8biKhGGpk3X59stqcN",
  "key14": "5KtGdXz2apPSrj1xBrYuRwwumoEs7m7EVD4ZbdNaMjtYRjioSULMH8vSKfSMSHs5HDiS4fE5XnVsfBsk4JSJYUbz",
  "key15": "4vfSshvLVZgScvg92XW3vobeYWXSGNCKdJbTemTrBSRMLEjTt58cs7BesdvBvMtZn3v3kJuEaMHSQuBhLAmJ34br",
  "key16": "PBgb3pDRBQtcxxguqrmtXEsDxcLe7ftXuhnFBQLAL71uwNzMxUDj3NSviabLPajbLYuhucUX8vU7F41X3GPhzEv",
  "key17": "4qHbChnWK6Q721tRuf5yfXAQBqjvFWLjfnQV45WerAZrHUPNPswafjR9mcfVD5oo6EHt2fcDQ3QCyuGTqEmPNXLM",
  "key18": "5MctbbZ1FPpkEq6y84ys5pA25XhjZnr1NVmJMpSXVcveQHzjAUkhokfRaDt3reDxatk5m8wH7MqrSo14q79kF4de",
  "key19": "4zStBitNmUq7eJL32BW1cU1SXMa9hg7CHrkCyTMDtZaDCNaPce3wxvsuWzBtgCkBQUXSwNV3a7JCN2XxPk3rqHoZ",
  "key20": "g8sn4pLS6sGPpsYiB1xoWi2DaSmdbT1WMfq74gArGCWwBZvwgXxcGubiLGR5vfEeVjyif5uU2KUbrNsB4TUrPDU",
  "key21": "5TRcTWD6tt65WzqCpUaBAzRjySnvq7sq1WBs3VYTTwTUz6boAREtkszaspkkFMj2FPjjDZ5B7knMDLadc4qB9qGW",
  "key22": "3zzphjADKBQyigyzMur1zvToKSwKqvFFVBkieEvyzttz1hca3FjC1LtaKKE9AWrftE9cnNRNE1TDn2FqHszzDvio",
  "key23": "YPVKrm6VQBMVDgFQHnDdtEwifn24ZKjXaHhoiq1eygZWtwjEwkrSGM7Ytf11XtDRWJurh3ZznorLSkcHQph6uKs",
  "key24": "638jzQoKRf7XJn1uTbZurdirETABfMRWCtn1TvYTGxkLth1CTd7ds8B6pAjScyHVcUvxPGfTqokyevGapk3F6bUC",
  "key25": "2c9Nw86ciXLCHggPUNug2jCjCVjsixKoAVS43RU7qe7nWv6VRE8PDGCZToKH2HYTLJ9ixvXR7VKnq8zWW2o3CL2W",
  "key26": "5hzbLQj2jmE2kvgF5ADs5rpKZNpDqu4jbHg6JCZkj28pST5mcRaxhsi6gfXida44jHCuxZjuDo7K3Zydn1GNZRcX",
  "key27": "5D24T4ZRpVcJ2CwLyd54CMrH3TF7WqhKssF8TJjEzMubUqZ7yWJxCCvCaAAhtx3DGx7Riv5ktqdrnsWx1vweiP1U",
  "key28": "3dj6qWEhFKq4ns1ap99NzkiTFbJEm8Lj81me1uK4DASXASeBHpgKZp5tyeTcL2P86e91ZQuyHE6yNLcBGyxYuXLS",
  "key29": "4PYKCZM7b4JWdEmSVUJEbYSDNygy5NffNjqPnucsJwbZDBqSfm4c3HiFwCDXomCK8q2qVgNmDz36vTuN4Z8bR7Mc",
  "key30": "64AXat83Fk33YR7hxCTWMT67B5NksEUWWZt3NH5n1B1p3pW4zdxsGsiMxfT2zoAVmDEvB1W2c9zCJ9VYAoRqaVVo",
  "key31": "5crUXqG15kR7j948hY2WtVTsXLs91yW5nb3Pchr1WjFHGLrdeE7rcgVpNLz5ye3ZGiGKf2hwUttMqppaf9ZCvooj",
  "key32": "55EyRv2KRSGirrK7EoSiB2R5EDfTJjA7rJ67uLwiNfPVxAxWQqQpM4tJrvj9FGgX6QkyTtSW53ufnTHqK1TnY7bR",
  "key33": "5JMwfcoDNPy5G2aWwWzedgFyxyvhrfvLBXqWk8wmMLf4efHFErWQLQCeygThKvS8zyDGFngnqKq1t54LYJ8syk7L",
  "key34": "3r7GpKNwcU35o3RC8Q9U8pSrScTSGPSYA7XS6aHeWdJbGRfbJ2EFrfzkQyarzSsDHhQRe8J4VqJkgTVNuJCHYqGQ",
  "key35": "3tMRpwgc6qbXCGTdeqsfwhCmjDEVAtb5i7cRRi2Kevrd1dm3TQnbX6B68AK1dJ4HK91kx222kFE6YoLGfWZSx25i",
  "key36": "2qP6DuQXxSzG9aExgDtcFHmhGjhTCMzegL7st8EGE8hRnwJyi4LYxYpiGuBBEu7EWo6YGdjKRiNiaURkQC9PHGi4",
  "key37": "5r8mA3jGwY79T3nvxxmpWGDJ3abVbaeq4kHPiRxGzKXtZbKuo5MBhgzRvDryrDZc8779w8QCRDudWtoFaSry8H3s",
  "key38": "3AumU6WMcevVn29sK6tipSPJ68C5LXYEP5LRhUtXiM83DXkdoiJ7NWs6kgdnpL3zKFHPDaS3aEFBYj2LQ3kjDHtm",
  "key39": "344mQxyVmyGADnTiWRVKcZA9yPRe8KFBVercxMaeS7uSag5pwiBqBATCcJqYe3MsaPZ3knhcLnj8Kd6e2RaSN7pq",
  "key40": "26YTFERZJ2wopP6E1R98krGwvbH4scdSgrvxMWYXMLvYJTwjVU4CjtwhgkD7rdCDH5cEe1VT3QsDH5zWxy15yejv",
  "key41": "4Hcdnz63wbm3PVz8K256zA7ytDCToJACnLBx6LM2QmBVeJmK1Nhn6k5sPzH9NpCfJZmHPKd9KAsgvu4jGCmVfvHz",
  "key42": "2crVQ8zPfMXpoopHpsY4cgRbkp6nHCo99peTLkVCt5rTBH4uXjFu4PqG69E81WjrhMJhzJ5NocFRYebzKJ2dXJUC"
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
