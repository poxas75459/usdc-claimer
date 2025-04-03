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
    "2xH9f4jd24augGKt4jwXM6ESYGnbfpDzzvbbxDQmJ858cvc328UnRnWzYWxmZ15GXdiqGReSqk8qb7UqzrHbk3f9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hxPw2GicaQ96GNHxoFnbnKhvCNbv4sE19pjBgaNrtDBrwCSUBZtg4mros4QNmYrGwk4g9MNXn9e49cQjbiAm7uX",
  "key1": "5WHmmE7YS3kjWVGPZBG21xgJR57mTJ2vqXSNiLjUJDcqyWDPcTH5MzAGdMEsbGKmAXEGCjeE3SXMdb7xiz3RUhoV",
  "key2": "23bqAtULHNMMJ9M9Fr9kfWiDB5McxSLW3sBrccg3yEWq2VqcZ7KHXCXtxfVNjVMyerQipsyqwZ67vxXMMLPZ1irb",
  "key3": "p3LkSFMfdPMTYwdTUNMXZsov96WCxf5TMB8bgHrYy5Kg6kyyPaz4gus5U8eW3HD1tV5LRDR4mV8LJ9Xr97QF8q9",
  "key4": "jaBkotUSH2LosLVzJXoSZ4ncZJq3URQ6Vhp9jMEf87wa35BFf4nz3Nfxe33qvnR9sbxnEG5ccVmj7m84ARde1Dd",
  "key5": "5VMSL9wcJSHQ6gBcSRAphFA1CFaixKfDztii2uBiwm3BNaHDkX987WQtSxPaNSKsTzXimCsHmYxVBdBkyCLsvk4J",
  "key6": "5uWD4zCC6iZWyr8pfigosF1wSTAoTuiSGT7jy8MgiYwgdktvdNfj6t9ztuxpMq7psrcRRiFf9nUdu7xboehVrQY7",
  "key7": "4BuTcr9MLoYk1JvaoL5KzELFykQvGqNTt1m2yopUdnW1Ys8VW9SGrmkwEjQAhS466CNersPFsKhXEPa64bgPneqT",
  "key8": "2zvf5XxhimVCeeEpxMqLYm7FTEswA6Yq3hKQRbdcxX1Q8nueJAk8XdnxZ1qSDUJgzYSjU8pE4nfrdXJkf55qfDuJ",
  "key9": "2toeTaTtRymxRjibo3CcDZe81PrHG5ibbbdvFxonbT5mh7bqzp8tUrK7EpEphxRGtHDiKLUwRLyKZGo18oXaeTRb",
  "key10": "PSb9hw81NznB4hMwtQaKhGb7Wckjw2N74Q3Yv7qjnykoo4CcorvVJxnFNZgkstoPfqqHtYEdngoiv259ogj5TDY",
  "key11": "j1kZvGoLssEMKYXnsjjTQznnxP34DcpMeMs3bzJT1PWiNcrY9RJ7QQ8x5d5mm6x9A7dKRwVg6fXRTQvEz9muECA",
  "key12": "5cEBEk4h4Sc8c1fUxBNVKH9tPoW32Gq6kxTLkFdTFjzXtKT7wfMRkhzba8DjiNY8WgRGpHXCHp2yABR6eCc2YHgy",
  "key13": "4kXkcKVfNqYiysnjqkh8sBdbDiubBdWaEPwXYotUU4XGxHdB9WpqDR8NNS5UFhDzL6AtZDMD8pW1zg3gzLfSz3F8",
  "key14": "3nGKjgJnB3YMxgswNBvZmHb6yx8dnw5SuioLAQSDzwaEeDfGnAxuF7zwpEtad9kDdH5FWVyuDR8tHBMykoek6y5f",
  "key15": "3xCVeUxZMNknNsfL6kt9s2VMSmE3mAD98ywGLxn1pSGpVfBuh9j8FgAvSDUjA13oug2ttRWJMrXA46HtNvtqRBTD",
  "key16": "qUfzEyjpa79mzkYDQRBMdo1UXDvQJnzN8GgscuoQwSCFnkZmBjq4g9ZPgYRrMvquKDEHSgeoMvpFJ5LB8fUSXSA",
  "key17": "5atScHJw36ZnPjkzgF1tdwudjtkLvcdTfpe9d9XhjNydk6ohyAjdBVcV56CNHgPxrTdS5AxFQyxfGnGoiLfSpBUR",
  "key18": "2vZA4EoJQXWgxcvfMXPT3qLbavw5AyrndG1LW4qNz2HM1peKpd9NCEE1YCP5pgyKg75Xn8j1wfaQJhxQKXDPqRc6",
  "key19": "nadpXcpdfgnVTfK94C9kagupJCGBvnfdTnSNCwRgcw7bZsqh28p4rYvjM3QS1rBMCbT3SbkzbLTVCvjY8BhNvjy",
  "key20": "2EvBbfgr15rCPAAoGnpU1y2dwLkg3qQJ4iQUsF3UPFuVioubZdwUNSJE4shXmP7dZrG4XsQU1fTATQ8Uc7qWKnQH",
  "key21": "5yYFQqjtornqUTxWR5a8u1WHasRs4Q6rBzaFiDz1mb33ewzigkAVDvVaob94HwdBoFdsoytDYojhZvANCdmQyepC",
  "key22": "2uBCgzKjLcXsun4pNP4odEJmpFa8uLzShjV98u7CNvdBwj3LMb6M6hambFrHJus4eiEsS7XWAiVn4fgVS1oTzCBY",
  "key23": "55w31iWig5DaPTWgWizrYR6N27zQV4g8DZPrhSmKGNLhn4xzqUh8xJd9KT3QaSaTqAeKSA1MKZYHkWQhG9HFHHme",
  "key24": "4rpYBGATbdaiL5MoRztdzFnpF3VjmNoyqwnesHV6fetZaUctAGYwVTvAu3z33rPtEEto7GUAH7tZkPMqtbmCGQv7",
  "key25": "4mD9WeUf5Qw6wqqc3ktFYpvXyaFnaPJFtZxtqaEyKwnixhhmdazrUGntLzLH3bZdERZ7sPhpWazvmxjaoMmrgMmF",
  "key26": "GFZXZHD3kmHGoPgK2WvYpnGjbDKz3AT1uP8dFz5Qtmvhey46HxYiCA7S2twMtYy7z9fRRYVuhHQGVB2xHdEx8Zs",
  "key27": "2cjdyjexoE5mcqWQhJbKXSkrVqLVmXAkbzrDwyzcCRuE4zb3KPWUsg7jwEigGgfS3FtfnQb6Zj9KkeHe9wEV1h6x",
  "key28": "xCX54b2MHxSpLSbqPnvfd678cnsFTccAET9iSWaWZY8uaz8zjszFWqhnvEL94VtjeyoHajyN5bgg6DXyoJos8cK"
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
