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
    "5roweAeKuCHXiuvXKkBHMmChdxA9iEuNFtwXTiRsKrp7boXYXZBJStjDmHTu4nt8S4hyDnopha71tXqJEkBzKbUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zVdCZRbpAGMtyPfh9rQkPSHZBegp46gxPDoHsdEyUZwBoxguyBh1Jc4BayPRdw2NU3kKcdUjfqdhbZ9LWhV6Whv",
  "key1": "3syVt7K2ZgitJcS3UgDzxxjdWbqLTMBVtJCu43vf7sRZ6Ez6v23gs8V7T6XRy8uAUpPG9NTt99MtFQguhiSXSbAf",
  "key2": "26vcFg62WxNDjA4QzzDwNAFjg3TgQS1f4TH69zSDjZGiUb3bae3HKhmJZYNq4oWoVXK4fzBvoSYQQqDMaaLFKmbv",
  "key3": "5QthUrAPXRrLidNKWxPQMqDBuc8BaNVpEynGfSuqQqdcR6aZ6G5RktrfBPX6nKfC5pLMuX4dAer1ggJdgJtqRoGJ",
  "key4": "3rMWafXDqDpN96D2sM8J5HbozqyqM8SRy9ccoyDqof8s6W2qHhsvwU6gmNo1NqdC9WzNuko51k9fAehQci1WgVkB",
  "key5": "iSVmcw5x2SAX6rUAowcg3MiXHpVyQ9xXJLyAL8C3FMCkdHMGKJQpwSQpeGrPwbd8cogkshPr7HTsiMfBiyVSbUb",
  "key6": "3udgmGZWF7PfrCnQmurW8FYFkR1qLyM36naG857T5VL175fiN2B6kP3n11Fo3jH7u5vwdqfe1aUH4dzBjg1V7xvb",
  "key7": "4UEoGDuucnHH5tgt6v5PPPekNrZe9dPpkHdr6pJKCYeoCbXxgCZmRkv7HYxjpYVNGFYrnpgi7p14qqBYwMnw5HHw",
  "key8": "59Ngg4npRgZPMWhB3YgVkbZkYtUxqU91wcMnbcjvg4uAse7UeKhfbNreQgwdCYzeVGmzd7Su7QJGRCC2gudLPY4Q",
  "key9": "434zES9fbvd1FNTe3wN6htXGJ7gih1hHC5gUsrk9eaXXLUNrZ3Ug6NBji2sePqQwFCLpcuB7Hsrg6FmumGNbQx6y",
  "key10": "4VvWmX9248EpAmPswrDQsQqGwQ8EspEt7fi2DQsyLRYj1ssVX2A3Aw8L4C1XysNH81x6Wm5QiXwkCxeCHF7hosUH",
  "key11": "2yQ7yrpwYhgkewP1rEsRTvdzX8ehhLuPcM2SSBxTJxZ14G2FRrqFsqzUriPkhk7gS5ExgBxVSYqkqe3tsbVPWMxW",
  "key12": "5GTaaT8xJLkzJKjwCuJcRSHQMg98kCK7U3Ep6AkiRts7wbWxYje4HPfS18oT9JsV4DbHNodz4rr6W6YdtPU7LRmk",
  "key13": "4eNQY1CvqkXrxaTkBX9QfUjDYsxckLgGJVmFbkLsNvCvEF4n9kzUWBCV2W9MGSXjXxJjx8Nw8miq7PgLNhAUoQky",
  "key14": "5nt1maPF9AN7bx8TyQoATAXxSQhksF862uKbQCY1xXH3kRTakp4hCdgsgpLG5TZtANPQJtNwPtU4tuui1JhCNChR",
  "key15": "41wnX7SLeyq8qs8rwUaEdTZFftnQ5eN8p4bEe9TPWGr4rxtxngBVfY8TkdTwCGJW44B3AqQFmqen2KueQrRkSEkd",
  "key16": "4Avz7DfKzyHRve6UkAxrRmhk48xEg4U8Gh1iPfu4KN2vGkC2nnPEcVNHBfCbMBgj9nYdyzsjFEhYq8VJT8gSCvKY",
  "key17": "5d92EMh3ySpD2DnstRjEvhgoc9BRNM5owUM6fbzgku7KHqkCY1qv7tvhuZxfGdqJvNQFznuajm5RWUNp3ff7zeS",
  "key18": "pc1hrroCNKTbdPabSmAgoPnCgPbQTDRqbixxfDp57x99hkiUgbt1mS1DspD3jh6k7zjw6dgdpJXMoNE4UPu1gSx",
  "key19": "4T8hZnF7ipBRMBm2pWECbP2HcLLreusuBxgriVLYtrt5Sxbw1uXv2U6YyJ12AzjK4SxBqcNyroFgMNyT8YroV1fn",
  "key20": "52tq9HvYvnzcjmrVRLkaEn4HiBMFEYgFyoK9GXXtu6vJpbq3fQLd1Kgy9y1YhVD5yzSF9jrAiwkCdThFHyNFap6j",
  "key21": "4eVs4jR8A5rmht6CxCCYgXbvhNArt8rwfsUYYsHPeNTTBqsWuGgPMx6B2Wcf2KuMBaL5v53enD9uR1wHUeHv7937",
  "key22": "pkJHgbqghmVfwwC67VUniHPgv2juR4qnJxw3e3GRfJFB6DvxSTA23LuFoqqgraLNTDq8oWMFMDvwEQrbLQd6fRD",
  "key23": "22UJpSivXJAdFHM4aw9ueahmjFygpaPP71goesZHDyL9WHfrresSHeT9YUzACU7MkKa3kPevvHTJZVsgZaugMz1w",
  "key24": "5ii8JfjsDcXFmGSQjnQ7RG9bcNYdoJHVe9VbduF7h4GR8uK5L65iDjzspgm9535MYaLnRQkhEcToax84oxL4bmx4",
  "key25": "5SM266u8NewTSNvHyPLdDqvbpQ6dRuimSnp6qDCzzJR3FcUfhF81w1gS59fFWtBK3dFy6J9jSaKUcu97MbHhpZYK",
  "key26": "UBq9Xum9NKZbcZgV2mcio6oSrdhaNdXJuHTwctycwzpFujUnV2kdqFRRM59uLKZvA5io5rtyjgNSB1r6vpQ6eGg",
  "key27": "63rMg8EvMgBUn32m9bSJz7f6e77EKNiae4C4qZVNK4AXzovXw6qPDCMf6zpEdo5y7fE79A6DJo5QMWi73kDyWQzD",
  "key28": "4AfADm3BYqBq96kBZJRPJQAJwhro9kX73kPTvpJqrmhMJX9VieNUA9ZdF4WWLFStpJYbQQY6GoMtJX79jwzowwoN",
  "key29": "NCzBSAKBkRH4CS16oS88WyxGr3SVCkVPrsLHSTqZc1sM9ECAVXsA5NNkyesAAFhbBYVGUAz4iHjE19tjZFB6FNt",
  "key30": "m2WtnZS8T4VzwvM7zhgmm86A6qSCUUasNQ54K5GAHNtqsdhWoQRpJdz7LKTksYMzXYQEwdhocXsCEBUPvDUHDfd",
  "key31": "rNVYBg1pgRRumcsTJ3WYttv9EnyZZSpuhBr6nGCGMqy31PHrPk3odi3gSZhTzp62ZzYWi2HdiB5VWEMpMKmLc4S",
  "key32": "dWvQ8mjcEJJ3rkLFFdMiZ3Wg3i7wswa46AhjMpKJwc2LBPxKHcEyFsuy3Qc9otUuJE8KNMf7Nk1Jpdwzes3P1Rr",
  "key33": "66HhGE5TTfDXuAdsyBSTe68Eii34zzGyKzuBZArywSEpnt1bfgURMdSQ6xd8T3mBpNms5rPrApyes4FVPz6c5q7X",
  "key34": "3d4dr4N2ktBQVeVQjmABErX8asdwjKMosCpap8wmjxL8wPRRdcKnBDad5h7DA4cs4kAGESfsRyMCcfj5gEds3H3Y",
  "key35": "4CwfnTaN7orNj4N9a4LPQFdTjcwUKtGaevdvYaM3VV7Csdas67jQTBc6iFBWxMTktBRCDFdnV83sf1s5yKCe7f13"
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
