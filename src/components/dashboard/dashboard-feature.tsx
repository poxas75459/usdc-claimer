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
    "PjkzBARJsvvLxT8LYUkhUmjkWf5AHk9dmywdTX2hqhqoa6Cs8Zbe1ppbkZjz1LtCrn4VvPYNzXEmGb9QoqpqbQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZazPx5rim2AxyqdrReoZUejuUtBw6YzV4mDS6PJh1iVpxmb5hfBwSMaTzXNkcJsVUSkVEpDTdbGPBSirtVTinep",
  "key1": "3HoWqBDExdBMfeg6e3NmrCw3S16ChhKyJd5pM16hnG9fRYKzutwsEUJrvnc3uLxL2cVUn28kgEyvPAs2PmdaKp1G",
  "key2": "NFrX89YXjWUqKCvnxpUMqgF2i4cb87bL2QzE18cN49Vkr5dWuQbf9Xy9m8wjH4RYXM89T6SLEVVybGTJphNrwv9",
  "key3": "Aia9AHNEQitbCL2YSmiarYyRCAaSM1SmK89bVfkf4f1Hzb9LiFmiuVonLgwGzYfPW5sHjxEUGsW3PtAUZh4kHD4",
  "key4": "dSSVXTufgEvk7gQSav9mDM7SWxJZbduPAgVFDgqvhnN1oGfPPqw2p54KVJK467e9mGPqMa74K86tGShbUz8a4yF",
  "key5": "4CEAC62FBT9GE6UGMU6pSxZnSwdtzRTj9MzNiJJNe6jRqCoSBpBA58ZFjomR5C6K46BjkjDfLiK854LkfjunRiKe",
  "key6": "5Sn2j2sRuwENz42PYuqsW76fQYJQG2zgJ7wRyzqBeddvwVyfZV1GKHTsKQukVLsPTbKxuwaTkxqiZMe2iEeUqaY5",
  "key7": "42Tgxf3GByqdtnphznzQeinTgkgFKsu2G7YUJYmE9HRBYiGeCC1EeQGVP8RujVfqzEuyqvdcBkdQiTddWzKQfYPM",
  "key8": "QfgGUL14qWdbDRngesKRkps6PqFVfDwi2bS6JwzoYjzstBou3AHAYzc5BxpS2ij87BruYi153BcTFvqtSwRTSZS",
  "key9": "2KuCqMSnFotWakW4vBDZLbACXLZh8tRNV417TdePp8Vyw8PWYobhSoeNKc52SHWNYdy6ZNSRc3vPkeM12fLnFHTP",
  "key10": "4pW3prKmYdkftriNGJS6d25K7z28eVzrASUXNHbhkbab2yjTQT8ZXjknWpwoqwojYTE21h6tX2MXrtH72q4QGYjr",
  "key11": "5AX5YkEwBMp8HsxXF7K4dKDJyTDVCL4dpBTeHAPfdgtv17e3roKZ7mgCRuGDMbSvnc33tUPENZ19ZGQRe1rYKF5V",
  "key12": "123rqHMnFFkjs1GQsCdq3VFspP2dnq5ynJzp4DUxAy68XZvWc8tHQUstANcWoyjBFeHfRQ9jDir9pHuGP5RS53wG",
  "key13": "4jh1X1JSdMGF4iqL91TsAdHc77gSoFaqkRLLAGrqPBrUVXXJSSnSwzEdMywXQUxvPNBRMHy5akpJoLwgxQ1MStwC",
  "key14": "5cq4iAF5PWSzdRLLQfNQVYT8cWGoWzrN3nbQoojSJJzSHh3Z1r9vrnVYDSJDNAJ5mut1eCbXqrZBLyeDpxGyuATS",
  "key15": "3G2z5pcRSuss6Kw1TmH3y5fSiZmCLBequKvSBRMLD3TcpMWNFQ9Ee2FJ9H3jjoTuRSrQ8rAPEwQxv9yRTzLUktqz",
  "key16": "5XCyG6tnGzLNHS7YmdGhcYDwayTQ2dxkeBHXnx936ELjJ91A1fAQGqThfg4wEpb5fHYwyyq1Mw5pyMaEpY9a7881",
  "key17": "yfsNiCEJMgyf5kCf3kQRwmUKzW3Rt4APW8BVExdMpTxCaVbaf8nz5R9NLwRaD9VBHVB9sRQhuBQqygkBthW5Z1g",
  "key18": "3yvj64MffmQDMD7R2qvs5gAxfizsWFTwoVKrT4BzyG6ke7hQFRLQPt9tTYgaQttuKdTL8vhMymnN5kDkqBpuGv8X",
  "key19": "2bX65nHsXU1Yzp83scB4A8W5MTuENu4BqgeKipdZj4rfJoVry7u6wjrg6D9Rv9n77nxkWZnq7zvgjCf2R4HGSakL",
  "key20": "4uL5Znwro994v1tPgTofbMu8xzHCmw97MC7vQU453kxW5gG3D1UvQhP51fuo5eLVydizCdyQs3BVRYe1ZhaFahs7",
  "key21": "4HtJbwRAQJYRCvcsrkcxfgrauKKqH7FGowBs3jDWjYqUQRqYZg6PastcsVwJvAr4yo1VJY3DoNVFxQ8UugERmYz7",
  "key22": "26PMpUexxNVfZiXVWFobiSssBech3CtkhyM2dtdQiVBKEDsjsZTKFd2wXWRrLCWuWFet9j1zQECLwQb3voB8sDgY",
  "key23": "3JRxjbzGc3jq9vvhDKtSP83EYxaNKYvd3RurRVVwbYcyaFqPX8M5fkJFrLrUVKJXN5c8dRLoLP3pxqWs65XAqsAQ",
  "key24": "5fEtLTf69yWQdbNU7bTs4RzdLNiZukmwBUJ9qbGBqNc2TTxvxC8TSToWCTKYDzniUyjikLwNRVwKAkdLMLqaXDKZ",
  "key25": "35f1HCBxFxe2LtxGigY4ACoMYR6S9ihkSGkabC7Vh96fSR8tKLE7ki3LNVXaq6a8kWvQqfbE84aCWNbpisHXcPDT",
  "key26": "2CMYhyLEof8BifrPdiQmVkce6fQxfy1FRtGAXPoaEU2N9r4J52j5hqbe5omX871D3ew5UG3PpbAUv15cZdMQjc9q",
  "key27": "5fDHpS9RWmxUwNpjcQzXoWSkDekfE251Bg8fM5Xe5F4o3Fn19Bs3on6eApLjP67hnzu5UBjVcU31i5mq4ehHjk3w",
  "key28": "4a48EWQ432ZHxTiCKmhMuJYkm7WRHAx8ESQiYbNDpx5SDifCDLeSH9bPaDeDd8tLwME3GLHp8CPJsVqdELFwZnrs",
  "key29": "5v5SDyzsazRypNZbFnBwbCf3kTZQ8Wu8z5EWHQhMWB9G3A9Mj2zaGdpn7ug1LsoVhM3KM9JjYXZ219yy8uuas663",
  "key30": "2vG1jstLLzfDK7nwmsEm2evyty2NquQSmaEC1WRNPLA2tjTvY4d2LnirrpEaVhvF6AEmanoS8rCv9kbpJvsxgYAe",
  "key31": "4r2Hm9bHayCZReF5wWpry9k37EobyfeiLrbtbhLRLJ9AS6HuX6Eb8xNHcjELRMfaJFuwNCGcvvT4knLtPASK69tv",
  "key32": "5p2TWrR8b6HntgjGFUrdFYazxJkCeNAvN13snVMqUhBG9MMzgGLgLN5B5PEuvJ2LxSqqpxgzm2CiwbQ99r4Btcfz",
  "key33": "6W3eF5iXJuP1B3J6JKQ6nE5KPnyHV58wBxXyzwo1y9yUXLJGMGaQq2bVJD9HYQFyTHKB9QMwD45uViVwYYs5cYe",
  "key34": "4tY64fLRaqprraSo8JdRw2WWRLVKLEFRcMys8SDV9wVogAp48cLQLWvmV9iyWaPG3e1obWMAKkPGNXatVEQCJ9Ln"
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
