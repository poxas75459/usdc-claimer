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
    "7Jk8a36jgDMLeBxF3QU5ra5MdstiZQcBzjaTjEbJaKMEg1tiuFmPTHncoJynmhHxZ7M4S4WGtGRWZzdVAbtRzo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fbEezQchYwztikeb7sAYXTSQHN9w9KqUZTMxUii9sbNi4JSryGHJ7GW9HyoA74MycmCNKfknq8xJh24T7fgFzLr",
  "key1": "5imktR6vS4k1EGWLG6PA7zQztcTx7H26D4aknLMv1QuvKpH8KrxLwPHqm8H8bZHMuo63wHFNLbrAp31dB71jmf4b",
  "key2": "5g3zMM5AkTuCuM3dvruhNZHAuoEpJap17BH6nB67NmGMxaapYjD8QTHnRYPyPrP82ei8SshE8JYiDeqmkkeWb2Q4",
  "key3": "59C9uQB7usm1DbcPiyTC9Zode4LAo7Q136NnMSpwRDLrUAXYvG3tjCCiY1YMKvwrGqsUHNCKLzaamWriaqBTvLdC",
  "key4": "5AqyYoMAPwuKJNRh7vQ9tFhgZoruR7i5GJsDH1Uu648nk2Q7h48BUrMHijkphqBarw1wxSLs5SW77n4V6pVLkmmP",
  "key5": "4DL3oJL52bAL7JSvCgHQyeRpwaQTH3nQDu6SHCwJ52FiBmpbX8VnNdpEn1EPLHPahYYWwaRFg6fuQd4DWnoQvNca",
  "key6": "4aQQT5ds4yGto3NVwz24GeVhMpbidTwaZ2mWRU792efUPgjk3DqL541qrMMDhsMeE55gvHrYWRuDPi4XdGDMXP1J",
  "key7": "4URE9jtMiEjpxm3Zj4ZjLSy2zQ9JYnjK2Gv5oF8nt4uesMyaRwcv8m64S9ygLay2yAry6QJVB8p8gigeG8PswyrK",
  "key8": "3sN2WjprbgxuwquBv7XNdshvubxYSS7Yo69v7HsiyKHwCsA28yNbAYvhw2a2kCRuGp5ctogCCSfU4N5SW1NQUsaV",
  "key9": "5Xbh9DRdyQX59qGv68Vqnsf5fCYwhS5MiMTxbZKTCwUrGZXpdtwU8CbqN4xvp18vy6hMQHWgAbmxy8UXF9TRhC2k",
  "key10": "3i8CqTFKSR2qFtjzVB4SsMrFLCiRDF4Ee3SRD3JzucU1t4Wg9uaCN2w1F7buXAHyk379dNqyCZSQTvyA76pXPTtk",
  "key11": "29WAwjesigg6b8d9ybat81B3BwJj511ENdqWoxwcKo4km71BvhoWwUpRDSQbVeA53MmcyaHEwdbJkZfmXZjWruzy",
  "key12": "5CxrsskrgZCkXUhxb85EZu9mG7Whh2MGnzsA6BH94Uzo1QL3pUmuULRjhfZaxkzaqm6YAus4gZhh6PGfN6GCXMyi",
  "key13": "3atyWQwRTZ2nMdvU1Y1hRA234TTCLR3c5zkAoxZeHgpfbi2SwSe2gj8wpHuUrUjG7F1kcRxgxSrMNN1Puz7scbME",
  "key14": "2oVEw4VwxPE2TwK8ohg39P2qEc73X7XYCUkjuHPq6HAu11pcvFyfPfG8vWHkqKPDLXCEKx6CgCpLUkEB4jcUxWE3",
  "key15": "3L3s5VBvBYWvcgyZHDinCZp1aurkfSuw5PANGr3E4Yjbr1y3wL2n61fFMNBYvEmXgqiyTgfY5jkgE8Ewv72RLDQS",
  "key16": "4sDRW8uHoo9GcwhTKAoGnyBg8Twu4YfWHVx1DcWsDAZbAQSoxi5Gw19HCYC1b4WYAVhd3N6uoKrGZA1x3NBXiLfa",
  "key17": "2jJmHdJnJ69VtUH7NuufZTY8rPb5fA2JLi3BRD95vGhRwHafVTQgsJiaqyTgdkuifNiG5n1jHsRRh7F26RqgSz2a",
  "key18": "a2Kb4VmRaXgGntR9XWBndGF84ftppTZ7RP16nCsVGBgtTk4aMPCW6fcFsAXm1LvuUhWxb8QbxULKEZTs75a6haR",
  "key19": "42Eauq8s5mkLjWne3Vxj8JyPdGreJ35126rY9o5iZ9pNqp9TCrFPmQ5iuTyaz2YBrMEhvhSg8GaoQg4ePcsSJyAw",
  "key20": "28ktaHnphXnFB8g3jZNsHzBEEZNxM1EDAhLbRaJRfmgRaDyZE7AMqN5zU6BMsGvZHELwASBbcSiZ1eHEYdubEPQq",
  "key21": "33sQdCzgYobED4ot8imoY87pWrknkWtUPh1JujGQ1jY57iB3VXYw9rSmhYQzgK5hiFoh4Lvm7VnQVM3ugBDAP8eT",
  "key22": "2t1wiy4LszwjN3BHgM6ToG9sYt3ZpCcYnYK58KYpUMTB1opgpT14oaNbRatrSHW4jZhNFw5zH7oT5i3NFtzvzDAE",
  "key23": "4C6PMJ6PDw2ZFYrJUh5b67nkgXSdB92fCewj41p7tUtPpdbXjbx9wbA3UHSrgyc7DWYHw32FThrNgg4DgYdxUGza",
  "key24": "3XSvi2ehFkNCNd6uoioFBfyKgAzZzyXdiKSpPP43sdEG4yi3hTZeoZu9U4FFhqgtZr55E24z5jkpG9YbfxzTbZBE",
  "key25": "376gzaB86T87gwaNZ8xgqLmYJmKspstCFma6cESBGRrhfVkBBSTeKP4s67BWScvdBv8SmhabQhjKpuh6zX3nEhzQ",
  "key26": "8RGX6qo4X14WUHgrttgHPT3yavLjFikWRea3aVNhYtaGTB5pxggLmfpgkx8WWdhrZ9ZP5UMoXUcht19MyGcrbX4",
  "key27": "U9r5EJkYiwKVGaVvLY6pgAF1H1U3CuufFdTwrFwNp18Hk2saAwUyWhnPA2bge6SWKVW3XE6BDWnsQWNYYqyyK9i",
  "key28": "31Ya4ZYCMH6izWxxASdSciKDRSKBQTSxRA4AgeUdkVdSVbK9FJ32DWmqFTrqC9FKYxh3rxKPbBKKUng9gxdX87Yk",
  "key29": "4bkcVz1ch58bZocHowJpE1CvgJfEeAXyhC6eRCk2XxbL6zn5Tm3rirnGsLB3KfP1fdRyEnRp1ZsyCNMQbbbB496U",
  "key30": "2iJ4gwkGXJ5u4yqmyDPQwwyZ2yysHBmMBLQ7PyxBDJxeP8KBPsLpkZzMLJE7ioypaUPbjKDVeUzNhfuQt9GNty9w",
  "key31": "TDgLwsE4ALqn1YuoXYSfQ5WYCBoqZWnTMAQLHZxRyNjHATS6nqM2pAKX43h5b1PgNvHwpwrkvyBoz4u4EMG7fbz",
  "key32": "4wqRpaxPWKnSDsUcAkVovVt7uc8ovp7ZzoUeYHF9HxtShncE4dRB5Z7wHmbeqht28GXV2esToSd6EPRqFqSbK2y5",
  "key33": "2oZMhNacJbLNmwW9gcBa6TVsTDhpEFhgakS3K35DN6opQnLNwQ7oxX5TXTKEozsX1DdgpRT4kNuUdgd4A2AFd732",
  "key34": "5Pq757pgWGqZ2xVUVW1eaWLXqSW9RV7F64or3Hw8LJvRqQF7Yf2t4E7EszdGJmRDfnVKbxGA7jyja1exqu87riPh"
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
