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
    "5K4VhUW4gfTBQaupiHw5n5W1fsL4GP9ZQU5P1EvSG7ddr7vMC725m8smSvgscSx4tb57Lg94sVgM58iPYaXv4oBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48TeNso8ACCMoNSzx3BJSiX47zyuw486CTga3n1BHCBR46zG9mWC8qZknjRphC7DNbzNMzEVMyAd6SbueagZ2SU",
  "key1": "21CGBxQat95rJ51Dqt5AxNRY6c5jAXAap2ZjK6XrvzUF9UkzpPPahuDDYJd2nUjL6oU2MfkvNepNniSgiVdpthAd",
  "key2": "3XQk8bNvu1Ub9HszodwmvWdveD7kkmvoMLvPErYSKphAYWoutghsPGN2FUEqW6wf7eH6xURGNRDv8qjUerTBTmiH",
  "key3": "3NTYXtDhWihZjpq2GxCHWSrAyBXaF3i5dReo6jfmA3b7Y43iP6BbHtRUCLNLWuJuCi8JTuf1mEWo3wuw84QQeKyF",
  "key4": "2ZwoT1CQ5bquEgV49BMmKgwsypgadBpen9xaGLA5y62SRy7t4uDECV1VCiDov2ng55pdcKY63m49g3fwSA2kmtxj",
  "key5": "4eESMAPYEbZcZSvrzNkqscCFZYnsN7v9f3h4jouedQhFjneV1ejmvjSCe9yofV2HKAWoJ6JJ6HUt7cJX7x6X4jPi",
  "key6": "57yJ46CtPdaNCmyAbs8oQ7Z4Wq9UuRYTPiuShyDFuTfecrzg3jtNi7qgxtZeQCZKoi9rXGA5ZFAtPcjdmbvFmHDB",
  "key7": "4vwWp3ks2ZX164TaLzqS1pSZRGBpLe2oc8JEbo8bFX94447LMvpVFbXDPUCZXinXvKYCgn5pnY1A4VhrQSwSpjtS",
  "key8": "5LJbMgZKXrEmpyxnbtCcvyvYtcA3tspMvKR2K9HwM9HHQ56JgvR6soboWscySCp2u5MGKk8vhea8axHA6wVKT35h",
  "key9": "3KdoVJ1x7nbmqDcaKSgzY4tTeQQjBWHAHNrxz5pXndbTBwvVxBxauPbAHUU3JrxX6DswzGDSJVRhoaXDVFasXvTu",
  "key10": "27cWPbWZYXKzzaFtSCMmqU9YrJuowqAX4Am1Ar5sbjcpQVfZwL7PQ13JJLFVMAJdPKS5tVaCDkHMd6K2MUYxtdnf",
  "key11": "4HQG1NrNrfezBHWLSRoUtWsmGGsP9RnwH27yToeDWxWWy4pwZtEDNL4CBHRZYg4rp64VHC3sFPH1J5CyGvLc4h19",
  "key12": "4sWV8TDEt9aCM7t2zibiMc9Lmav1szd98YuFLWi2Za9eTjVoYakvGEEY23RJnJmttX9GAvny14w2EVkHZbwHpKxF",
  "key13": "2tpws2neFzGGcDKfGFhPyHs9QG28K7ABR1ncGmHTn3eTRrARJoDfPjW42uRcUdfg3dqxFfJowTKU3ifCoM66LdRt",
  "key14": "2wN4ctjUCwnwR8MwUKeS7SgcAKi5B3ZdGqMNZJnZP3kFEyrhJcBu2KTDGH1VfMXX6suTCnXnE9kgLKLhjrh1crBH",
  "key15": "3fxcDHk8t8Kdr4FBnkr9x1otGCUNH5ya5BVUFZphtGj2Z4FTZZMkuhp4EVK3YrHASZ9EZTf33qbTwEvGgCPHXDDn",
  "key16": "4XziiWxKoZeYD2iwRcbcmzNAhDrrazBxw4e1moa8sud3LPyd8BHGaTXMcTAA2WDaWnRfibDnQuvkmaDEij7uvAvU",
  "key17": "aA3CKHBtHGAuN549tuyESTYsxkoK2hbxQZddwoFR4mxwaMgQj82xy6xpYddCsWxbnvfFeXigrJ6Gu16frUAhExX",
  "key18": "3GjXsfdXDn1QfCX25oMPAeKe3o6197iBfRuRujnjtpV7qFHcRdVuEzeafjcTAg8j4XMfQtESKvCN4VJAfUg6dowi",
  "key19": "m61DzJj1bzanVYvHsiLCUxVFKtXVhSNnBihf8h3jyppkZAREaGspqzam4WWqgcFsYNcr6qbcstqXavrTWBhGEoT",
  "key20": "4ejk1viiKVNY1zQ9H3kdnwzpD1nKEDrk1JrfXW9ubEkshQBCbBVfCKibvTA9Mp6an1EChRDfVGwkhNJppHzEWJoN",
  "key21": "54joW8A6UdCrZgjRXJWUT2HAs6SUY4toqkHUsiYvWCZ6rnwEFZweKAd5thbviSLeZQ7e17Hv3HgQAopsTLn5Ppxe",
  "key22": "5Uw5KqJFhdbKB6de4Dh6xwPPLHpMTcyirsUmomRWbsjELmWFnMeQvbDsaZvJNeZgkM4yG7y3vF1qkiygTqXrywym",
  "key23": "43A5jtWqDNsW7abHKSSGrpKtgVUXoYVNPb8kUpWqYNQwW6SBfEtAkZTUGV1Ntqfq2FsCR26qMjz8KmjG2Af9ognf",
  "key24": "5c9AuzLoUhVYckHhrVqe2Xop76kwG366p3FQLqWRHfHvcLXQqPpwWmXtofi6H8peUtREEaaXKLXXkWDo1cockosX",
  "key25": "2QAZetTE9YWJhLMWNw3Zj7jTU8YtEuPuFPRg293EG6QgUqimUnDGYHYpKAXEmFd2FYSeAy4RCpsNvZhhEwiZi2pu",
  "key26": "37wAtPvuajifnNJABXKc65TaVXKHZTvinY6AQMf4PXw6juSEo84DcuheoCbSqYc1peRedpWF3Jy5nUGtfL8e3Edm",
  "key27": "4wzGuZZYrMDcbXK6dpqapKXKhfXdm2SXY1j7sghzsKbUMfxoX3SaX8YeYE8FUSbcHnr3hsHNnzSDsUwTXoWRkDR7",
  "key28": "4PXMUiEBtVLMLCqP41UsDvDbehoBUBmtzmub3JbRkxKeyFZkPTRmkucRoYaaEUsc64FwKgVQ9A8xEcPondXKufbX",
  "key29": "yKUR5bzVvuRuLW3s6k9mc8VjztzvpuYSyAyRn1SCw6zQgbTPWJRwXyUt5EFviAUStiXFdx3BD4hNgii6eefaET7",
  "key30": "2dN8H1ww8KwARsdyZDP8yjXjiseMMebcwo8vUvoWDbZpHNdRdzf5rwhPiJYstfsSoj4grgt3xQBeNm6c67CoaqkG",
  "key31": "2Z57hyXkc1JWAeG2eGNqseJSnMwCUmpAEme2jqQufsFydRZVmgYPoj7wLXs4Crd77GLWnTCoKkzSr2wkeTcckYW",
  "key32": "5NjYJdKUaehHYL2fAgXRJRkZ9kf7WL9qPQ1JGhV2BYuVSf2dvYUpoEVSxC5HhPYqFiHWLN1THQXLPegnducfnRdZ",
  "key33": "DZZnQhPj18M9hXhyuVcAN9gaKwKhjFmxTwUANMtyYvUmRUTuwv3Uc1V5HJKY41zjaB6W66qHcUFdn8isx3iT5ne",
  "key34": "4kgg6v1gXWYxcgTuSfPWHqJLQUAajZJR3S5JbcFqQeLj9UhrsUwmsa1eUt4SBTUPwHRSj7jStVNKfh1Scq9yFFBF",
  "key35": "3KPZ2nkyMDtodYeM9mco8xStpu8w31oJkf5m2ZYjS8SNBjLZgia4ar1GnvR2JgXcZxnNVUzoLYncpA7qmeuYp71g",
  "key36": "61q5vQtxbkaQoQ4hAn5ayQzBidz2uqbeZhyd98to3aqn1T4AVbmFjNDwteCCSQ9DNeRY3niFjmShTS2kanuEg9rD",
  "key37": "28CNdWCv5jMmtzp8AkUq4zeMj5vgW1jRXvsuJaXgArhmjZg47rPT2au8PfgvLEjKaPx4qrGmusGXV4aw63FwP8YD",
  "key38": "TbdbUgcuSkcZ2PAnBfuhpqgz23fVnm43H5qVjWyoKrm2qprqwgVBJC2K3UhR5rVzUDgL26HcC2FiwX5bZb4pFVB",
  "key39": "4FukFc9UsEV7javxbsB7DCKE7v4oh3ncFEnnAAsQzgiB5Kpda6bWHxQsGUH9TKU3bouHqq877jAua6zb1odCVYUZ",
  "key40": "3kjyaHafKgD6yYKBJhtLXqji5WKfGjqnhhXSmjwW5n6tY2WPGC5Twg6dCejHcurMasKhxjdu9EEmsEMPzMDEngwX",
  "key41": "5cDnRomdbyvYL4bTNBbF9a1GryR3zT87woXyQGqYSohmcGKLwKjXu1zvvjJUjZtm6xQrzK7gvR9NfxqxpzfjGsYY",
  "key42": "5ci6BbAYGpBTrMnRDu239r6yxwdeawmXtKM5Z4ajjGjPdsLQmy7JCMQoZgDxKQKx8T15s2w5D22qJHvkmxLU1nnk",
  "key43": "FFmAA82xjMdpL8WstgmwQ321n9bQpx13Bti42Kuh8L9WFs3iqhrWN8eq9rAgfdxhWhdMxVM48aVgJiPWDUUHMgg"
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
