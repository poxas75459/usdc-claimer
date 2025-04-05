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
    "4t4ajSdG3qixSLGc2TWf62dBhuSkRH22EDPYjzoGWz4V8ML2totfmTExzACYhza96urpT76pb6csiZt9Gx5JN8U8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KAWa6uCFhhWsVs5WnztzfNueiJnwq44kCSD5tdUwWrFMM6v5tUYyTadtb3QeZ2GxSq1XRPPYT5rgRL6ASG3stRG",
  "key1": "3oJxFYL7sHepVFjrUnveXgyF22KDmQeQXhasYpoMHK1ZjhQCeSqtUUxCjQhpUTb9b8jFUcuSfrMws5VKMDhPNKgF",
  "key2": "2PwW7ysZtZ8Y7avLKKE1qvtzJ8NNj8KRHjjxt7KWMTYRAvSEDJ2KParVdjrNUPSeEFczeqRR52F5yh6bWYLJVVf3",
  "key3": "5xLMDC1X4UkmjXcZ1XeruLbCzUJKFaBKxpLUDBmqnro9D6zL2LQGB5ETK9F286YrkojUZU3yb1xUZMsVzDp3szue",
  "key4": "a6f7R67gHveqbEUvnm4Lv15G83PacVVfQtK4gaGuuJP2KvXgx2eaXdZUsw6TCkP6jd8HACy6WpC8DvSzWELkA1K",
  "key5": "4bNBCJLRbR97eiNUqjKtRDvHvHbQMjjjDBDR2bKMzCapkeRbZ5KEfrJ4fqEhFsTqMaJaN9jJzhd8JmLrp6m4a6fU",
  "key6": "3PyMjfPPTqcknVDZPiqx3hiJCRrnpBeaKyk5cHB4yCh6zGAE87Zyk1RxVsdiQ3CRpj3Ra9Y6BgzN12GGS6SfmKwJ",
  "key7": "5YGCXqHGBoHEWtuVbtmb8BKV65AWub1Gs7VEicQHzTtVtDprc9bJbBAqs2qY9gWiXv68FksYkaESXmpfXoUPRMkT",
  "key8": "2gWV9eA9Jz2rLQu3bXjiXedCU54tVUjfCeU4tLvX4rSfTUJ6mP56x6gUGQ52aq15hV9sx4zXUWL7qAiKSgTnToUv",
  "key9": "3V5cit52snV7BTCZu8SrkawZCbqBhAX1VHhxUg1twm3wbWCwF7nt3Pye28PjdVr9LhJGwiDuYzGeQqdS3ig1Fe16",
  "key10": "5P3Qf5dd2dgD7Fw2JREECKRoJBdRGpa4eSQeui63EbU11yDYC9UzQDSeSp3Va38DKj3aNKscGNyNxQE4SCTYmK45",
  "key11": "3sVsDgtZQFP21dMquDFdi83aFRfR48anAn3XRNuaZb4b1ETefNBgR1RcLFRcmzsy8cdpnVCENeznkzMnj6krbfBb",
  "key12": "YsTojpbnYwDtj2wL5W67oDAq7SCcdVTytGjiskbccjMMQpgNTiHsDcvubpQrwfMVqokCYc1FTk1ZdXrsmGS7bnk",
  "key13": "5txrSrnNmFr2guUv95wUMP6jdHQSCxTVm1iaTFxukXRxhnR38oXSiV96oT6t5VLP1zQPSUkm2WhHyauEbazeuasS",
  "key14": "RiKG3MGo6Xu5ibxa2sxDJRXCUcvE5BWQZzEMZiFcpnRXoCcgeA2BAXZQ9tx6ePV48muXRMa9wdk2rUgGcGfBPKd",
  "key15": "48TQeXUFDL17qKkcfMPb3gjSddWB748tbu3hfxxLXTeLvwqmxEUmxJCeS44VKCZ4mpSxKy1ztmbba5FaiWVY6tb9",
  "key16": "5a1yeHzGmb3QR1rYLTo5LUAvxfb9T2HPwJUKVE7A9pZ3tAsW9fbwJnJ3ZwGkNT7DHJRE6HddJkQz4smi9j4jDU2c",
  "key17": "4WfYa58NjuZQyNrMGNxSAuBT14p4Le13YNk8c7PJJfiV2HCdUbq4kFNwJz4kS5PwzHkKqUECEgwUu7GuicukiD1k",
  "key18": "3WxoU8DdG6riGoKDd44viznWFhMHk9GHUqBiDLqMCG2ESWwde4csdYLjLfJDXoy2E1eo4SfStbeHcoTYBzfPW3xR",
  "key19": "3kas8dzeEuW9YfNPDrYYdL5opBAhhkU5a3VeyMMaMiqxfmGcUDh5qd3DfCkeR3U1yDuYnaps2wbu9TQe5TfkEay8",
  "key20": "UCZXs2LE7TUNAjAPUcC9LsbdmGCoHtS126W5HumnZYZ5m8y1Dc7NhbeLRoCAe9bb1aHHvNzJXGQTRivaGHJkcxj",
  "key21": "2rcoHzzhN6NvhHGAjKbzZf2pjQ4CyxS656NkKTf6zVyGYiT8EYS8knL9xXjwaN8DQrbpQNqseGAY26sexVvRpsDY",
  "key22": "3V5zFohPDC6J7wRggawZ5Ps9Xgfdq2DTKd4pdm5xsdtfifX4JjbF8ECW1rWVDi2Qcpfr1aEBQgubRYLHXqUck6FV",
  "key23": "5kNrtpZnaLBGLf37bXarEg43spnS4L5BNwJSXJBqMCV7SUiP2VhyK5wL2e25ArCNifUpmq9wTFCgr8BsLW5taKKN",
  "key24": "3VLyzJ3HJuLRk4iUNfp92CDZvr1fdG9BEKuAJKyYUMxC3JDeosSVF6UuXCYz2kLFoUCAqYdeRJQfqGNDGrkBZLRA",
  "key25": "4WE8m9dNta2DCQpt9zJYm3K43sx5xc1UeWuu2gNvDRH1hRzpic7LNExQFChCYajMsutyyGaP1zDXnSxgxh17HDpF",
  "key26": "4nSQTcTMoHi3nQFcT5192oHHD6HywHLFcTozEkgoYp8ixCW7WkTobJ8q45i9JsWPjP2s1gFRt7V3W5RfHABtMT2o",
  "key27": "5GKoxjRaxkUJhArqGkZxocuvrmtm8GXaNib7keXmwNG4ndzVQntUzFM7X5KHVw4FR6nbBeaJSQtGYzHbWporw8j5",
  "key28": "4sdLGEoTPJBpXuZ9QXwuBnMw7CeUMu16BJLCLpoMqDzMywFUc5FdsSZxC9sukWoYJbYjwEyUSeg6TrRSTAvA9H73",
  "key29": "CaNyMwPzTRYfg24KisHkFSBu7mmh8sNfGG6mmWvydrFJGCUL4w8h5386zYdzbNLJFtUSFg22oB6NQhYXTmdaioR",
  "key30": "4Y1nLC3eP8duSgBTjmDydw78iscdQYwfnRRY7GWU5RdoWDebYUnaxeBBzGC2WAfFuV4XGqo4bKdrheKoU17zFANQ",
  "key31": "5koPb4sdHCyQWpKgCkBvw3JumJaofdjumrNZPTau7GiLFVUyokq9kArQmHHHK5do8rCEf5ZSUc1B7bKNQBnTTmhB",
  "key32": "2AoFMzMUgWSPqoz9Xejx8kZzTJcDZMsmMqDC79s4Dj8GgJofvZpT2c6G6gaDwjSuiP76SScojv6GZkH5SLGHpYPC",
  "key33": "PTZtKCmUCqm9CkWX8Pz7c1bL2TenNtkbBmhXTKbQWAh1FtWRHb6dcMo8ht4utJja8PVxrhxvtv9ZBFVHKnBa3be",
  "key34": "k2hXUaPUEHiuGwpGkf6Z4hmfhnSNK72xtR3hbDgwkrfuBxiZooLFnm6zU98Ca7PJzbCUdyWjxQKR8S8zCPj2J7w",
  "key35": "JCqkV4pe8kSu6KfEZQePdNkoaQMK6YDhxyPfeTZ31ji84UdYg1BKzywgXbkwAW8qzGWeo69SSHmqNncYNC1ngWK",
  "key36": "4pcgb2Y1er4PVkpme2nzzDePDsKPi463GBUmjkU2u9SCsHZW7N1RcPe5ER4GwA3J75SgnmbQoeAMSKkUVfVBu1pv",
  "key37": "3x93AQULPb85Jkb91iKZzAC4VdD4zd8vzPoKyzL9eAz1bx2j5txy8vKQRZ4WT19qPaRZbN9aoAtno3Rj1ibv863z",
  "key38": "3RmprEAM6Wr1MxZUfLzU8JBh2BTLdWDghY8nW5Zfdagh5cJhbsgXUTrXmfv2yMnVVcdS724TfmF5saFXo6XRYpC4",
  "key39": "4AQrZi7hKGaQZjWJTCoEXduuAnB1yTNGAwFvh6VWMM8b2weqToQyhcBfihW7ZFjqJKRU5L8caUzpqsB3sXySLrFJ",
  "key40": "2K5fudor7dyXBLu7STQ7MD6ZAaGiQL674rfRJE8eQH4ALaUZaFwBmba1wQVgzCvk2kKYg4bSPCHydyWBDQPYDdsB",
  "key41": "2yCdR9dCEat8AfKEYHWmsRPQh1CKXtcLwNfgnHuPSkWD75KzhU8PMW2D9AMJgKLAxvKSaJ5soVu7D3U8Xt8JzFFv",
  "key42": "5Cvc8tGMKdKmE2Stj6FcAV5KZhtKsktjs7g3WHyG2qjkSS6RFgV45o1kdpaojbrukWU8SysRpAXCQEptmpyXr83q",
  "key43": "2fs54XySEkygnA4dJRLdhGYHNdqqGVb1T6YD3XVtJ6ps3W8K3dkCkXikesEJHxDsTX8itihSbj5NHfgpZ5fdrotK",
  "key44": "529NhuTeoW6T3bPGwY6djGnqZmwYnDtFtcD5DSUFYE1crPC7wo8z6EdWXuAnoEzhEQWZ3tkjmrfX1GkgtB59cUnn"
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
