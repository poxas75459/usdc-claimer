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
    "X73VJAdbPJ6kS9MhgUsPAHWzzLoWwUgMqQLwnwQByyKSCJES7ctEGDttSbge8HWsqrwGTN7TWkCMnPFUEP5jw7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CENMaccrxGMDztrpFBs4BeTomaEnLFGJMf1hogNNUfB9w8y1x1f2W3ZKtgTyiKNmR3Pg9RaLsPpffk2XDpMe2fV",
  "key1": "22f5idrJyh7hmrBFGWUTDFzc6BsCfnYxEGFUXcbpCdb7Mz9YU5uy486EWygokPYNqXFdcfpr1SwmiwjQMyaGBZor",
  "key2": "2abYDugUyNB5ahVeHGpRLS8n24VXTGNzgFByoTfX3wv7GgiXoYJybcvKWVQGLogjYvaRb69VsvrJhhVMCGFqeNMJ",
  "key3": "3WiQrzWNykm419ESFSkwkTNzH2gSi4oqmFnwC93ByCyKg4A9aeS3jdGKPtegH7kd5rSrKnesiWUtG5A431juAACY",
  "key4": "4wM69ixG5TfBfsKGYYTBqX2qYwQUPDJWLiNVTyN4dLQghsUf5FercRDDMAXrpicu3NrXcg42b2M8YMAdRSL2nvVq",
  "key5": "2FtLhehQpAfYZSxzvJSi6ftwyzjzdFbAHfM949TTtJu5Q4XpnjsprMNJqygdCEendMz8efCQhhUQJpuoM3eHkvfQ",
  "key6": "pwUFDPLFu8coQgdch9PupndNSqHMaR51DU3Lty8zNvCLLZWYhmPT1RjjBgXyLbz3ggqWfFAziSLTqrH7CoX5X48",
  "key7": "3Tro9CxnoXMSqd7bY7BPPCUDngunudvWtN3VDiYoWFMnG4QZQMfQhhTZiPn3e1pAzGxPPeZsAx8N4p9yqYSuMMoa",
  "key8": "3ugTHd4XzPByjZWN7KZZUtHzNBpJ9EPNeRYoC9NTesbyD5rd1xL3LP8YsrjjS7RYxi6o2EiKiL5v9Hv7D8SohmsK",
  "key9": "5HhApGDxFJprX8DePLa1xnUpcULj9YnPqDTaUqjN9Se5yJjdftWCWpKAFyJpGgRDT49tsuV8ofJ335fj6D7yujSN",
  "key10": "3S2L78WK1KegQ5BLTARBrXUZHkhcqdRuTjH7fvS4kejGkK1r2ebGJGLNs3u3UgviDUXmnLBvaQtwTP9AmT5BheYc",
  "key11": "3NS5c1KvTsUwnKGSqhTtwqephnmY6FTPExHjgLuDkr6C8e9n4vcbDCgMnAV3vDi9yRz5KaKQbQu8zi2t5p75tG3z",
  "key12": "2rnaNTUYCSswEYPnk8qP37As9hMUQfNjB25pGs8bkd8v2x1Ur7tS4jFhabFu52Vjvw6M6MbsTFhQnvEDpExbyTeZ",
  "key13": "61zvqp97ABiQfMEZjM9bo4V5y1EdADm1bSyytjE9SERZocnLyJdhQ3baZqraZEopiHxBC7ZSndd7YuwZE5w16Jgx",
  "key14": "LxFatcPxHF3VgXGdVAqZQgvVAdtTjL6HKnJKVChgNiXjAbywLUzstv11ovK9iW9X3siQ8V1kQA9c8SArrrmxuQT",
  "key15": "127PNq7Wgq2XXbsPd58pceqW2dJQNA6nUhWXSshQLcXXbLoowJY4ymsNKLYu3LDqR7BR3epzCWtmtfyQay665KKr",
  "key16": "s1B7qMGhLSdKBFzoXckAi488AaowctHJN2FpdZwDJCjBKCM78e4H7WhW1KG3765qwGKRorQMu5sGcmqUqvKMaU9",
  "key17": "3dyBLY1M6HNC8WRBtFu7WVAMLEoL64PpKYjoWFj5fJcSLD28CWLhy1UTbyYh154nxA2HLbfizWbDkyCLh5NvqTc7",
  "key18": "4X1JGC85ZAqbDkfHEJ1UvT3R8LM52koYh7dCziHWwhsKjAz6ijcR6ot7Rcoj7RJoHU3ffh1udxFXjAp17k42usK6",
  "key19": "rqpjU1d5EffJ5iLRFwbe1zNLaD5LJant36GEBjE6XF8gu5YdUE4A7gFGaAUid6yWKgFK7Z3cuf2mCW22t8frWR4",
  "key20": "LXsN23MpMQ2bEHW9p2QXpvyrVGksohDoLWbh3yFGAahj1pQyoMrPKWh1WHaRsc9fKg8z3sb8oXuvcmun9smxEjA",
  "key21": "3MnJuJzdo2XrvTWvX7wvJXeN9qyQrKB89yWWk6y7jRvpPVJLjjTCqJXQFaFzw9opNerkTUqs8F36kCGrD7DRPsXk",
  "key22": "3c3UrqTrzjScwZK77rT3MUGBHJBAKNMp5owLTZmwXLBmmW8edHLHWFawjcw5DAVdbv3rUq7m2B8dpeL2A5zZJTcP",
  "key23": "3Hj5XQDtuEVAW3bJrFFrkks3aEi6Pi1pBK6t3R3ZuSspo2nF7xqUUS21D7eeBx2UmzKWL5cCsrmUZyLufHRgsNzu",
  "key24": "4uzkaJes5iQjLUdvPcS1FgRkxPN41dqPhrxawgL5jC3RnESBJwSn7u935Jvb8nU5AtJAYGooRhEQAQsXgP78V8Yq",
  "key25": "5sNpFtFvFi93E16usBrsMnb6XuzLHrRw367Rvv81pa4YiZRECWj77yyaVYkLGw2eeqcLqqTD2cQB1jVc2RxRk9JY",
  "key26": "5QU2qbhyXTR15cB1kdL6aoHhHfRCoEx64zRW1uAFmcSYyJJowtSJLXgBZf1z27rGefzexmgJQj4gUM7BpzYkjBjS",
  "key27": "3FGUkNvpTubtNob9ZvV613GwPZBWaNG2k3RSMWH3C2ymXttCExbMDT2SkHtuokw1PfmLSFtwmW481HHGdSwc6PBZ",
  "key28": "2R4zcNExoiRfKPp6ZiyifCcWqvrWr43rMuCEzPHmPoUDyAg96UYbWh6nZxgNeHCRCiR1G5PvDZoB7qxhjWx9PNV3",
  "key29": "4N2bb37YTyELvbD9toNYiHgz2fJEozV6wu1xozJdXDzrkiCRmmYHw9Kkoo5etLuttC3KWGTfPsjW9TE68h6qXGgp",
  "key30": "2xx5shciho2UWVJdFQkH1BaQNmrEg2FL6kntMHDUsjo6cSddhXRcst5goSFPdZFZJk5YzwRXxoG4o4XuagnF1VYL",
  "key31": "tYfFkiWcSjf8ZSXABqPEfBeCSp4N5uPLSUfmnfgxKkZHL2YhDGhR1TjiQn9iz6wY1H7Refvkf8fw8Aqj7Hy9W3h",
  "key32": "3PCZt336UB745s1LjSDp6wvrBhZ3CqcYjGahvnSi16yZ2xtuEJBD46M93fj88hCvDbgsAcfDH6Nb74Vfo148ck2U",
  "key33": "QFw5av8SMYQtUWqBYRJebhquTLCVDHb9uXYW1LdJPkqWE1oTHMVTv8KV5c9oESVoZ2C7HeqEtF1k1NXmqv689P1",
  "key34": "4j5oCeheBbPLupM4mzFmZyXZ7FP34Lkxes8qEJy2xXE6866vZw8pSdB2RiPDh4AtVEQsMadxeKH86DqJreXwyqmc",
  "key35": "4BXAj6tFvUMJh6H8PHuARpsxz5J9AZHqusWAUowr8qNPPDoUZSarQmErnMkKDGK8sb1KLUTfpx5iZKiQrrbcNqm8"
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
