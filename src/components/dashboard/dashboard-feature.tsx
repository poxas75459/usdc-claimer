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
    "3YK2pnRUM4dJEhB3tXn6Zy1nz8sz65PdWGqmoVLGxhSmRy2qZk9AzALecLwFyvCXPWmHULTvkYKv9fko6TxpW9RC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yPCHdKcMBC2Z2rJNbTna1BcHMM5XYNX9YyPGVVHgtmBsDZ3pTtwFLQYo5XFjxeimjEjWbPkT2LZf8ZLBqMsis89",
  "key1": "55pqNKn9BdQavha5wgouu3BNEnmg3yUVskZhfN3rXhFUM5Twz9akopnsxE4bpH17vykPLDzPZG37fAnDFafEhaph",
  "key2": "3VU4ob5Wc9BvJvi45UwnG71nSYJM2nZ2T93Lzi3wpycLKBU7eDWBL5amZQf6UYraRGiEwq1PZ6Ur3CCxJ2kZhgS7",
  "key3": "8MTvDNieTo8Uwu5nPGEyH1Fw88gTSioqHb4RXoKcpU8ouCUc9FwqKWFy2gRUaySALFNnd6xSNaUz7SG7EEVy9hc",
  "key4": "3RHohbFdS54kQr8iNWpitebVu1spHmCxXniTyA2ouFGJG5ZZipsQtGmis2jRA2rVFUgzKcxwF8JnEAs4Wn9PYquS",
  "key5": "3AuP9dQLG8514DWcGCddhRKj8YhWyD8zBvDHGfM1o6gt9n97a4uTULdND3DjXwnrVAsg8DTNNr4gMGLFw9LfmAy9",
  "key6": "5eHv8NhY53SCuHFtp1NjStidHrExxUQwJuPA7hFRsZrrtE4hg6zAsvnwmdgAroVfk2MAwHn5Vfqj1j4Lw3rKD9ao",
  "key7": "5kscXeNNyx9Me4XKaRUkwe9fhqUqRp1Nc8fv7AjfBt2UBCijyHJiWeFkrHCaa9XfZRh6WPnHmrLpowr3r22sT3S",
  "key8": "4xFZV1ExTxhT9SXbS8wkrz1nkysqR63WjEt9ax3tz7W5eqzDeUbzvvjupYfAroycHPik8faT92ayBbpsvniYkHsU",
  "key9": "2V8XBPhSK1QrsqSYdXTVRVxR6qMugdaVAZSRKtbD3WmwwArecgbf8NaQdXtreyjLvidXngoQCMEk8Gdg95RyiKNz",
  "key10": "PBT6i6316b1Jae1d45uWYUN6jaVvSiCJWLNkxB36EvAzuFoqxJ4oPJFrALJ5jd8ZZHf1ziz7CycS25fKeDG1ppF",
  "key11": "3JAGcRpopeLPpxVHqcM2Xq2Y58ebFKpooXTDB38Q8G3Ng8U48SRKvRjmdF4ojaH6Xh3v6sxYhfGwHKEgFJitkZuH",
  "key12": "41SJaUgktiC83yxRrvhQETzdxDmwrXviJxyvBdRWhdMzsHN5vedukKXN74HiR2FLqTGM9W24nXiJ4Z3QebfWJ1Qk",
  "key13": "31FXgrM5K3cksjviUzd7DNSum1rCyYf8Zma12zMzvp9PGHpLcQR6UXptWhE3poXYcGAd1FdDn7PcB2dNU9RjpbD7",
  "key14": "2mSKme47eBUQomU7nV3TeFEKAhWH1YuVee9jtniCFYbJZ1negR8uZk7Nvj5JKsLMmXPZDgVHjqmaQFe8xxyw2CfH",
  "key15": "51wqNX7EkWwg6YJWji3QMW6QuSjqFMs9Joy6QzzGcHW69hNrmsRkzC2jap521mXCBkyedNSQguR2z4ayJhwUj9hi",
  "key16": "2bRgYf8jogw4ig6kY8Lc1aAdXaN9nonCxJ8oFX9omcQ4ZLmUqAL4RQ4fupF2vnMPJRYpC1d2A3EgyhzQRLphbejb",
  "key17": "4SeZCbTsTR4kT39AyuLCEDnCmefi1ZhFgpt8Qwk4wewg6ydZWURwD8ykUxckE6TNfTt8z9QkfcbYe8wMMG8wEaA",
  "key18": "64MmDTNQrg2VeyatNHCWqvuZREY2sXitQSt8ANCdMZPsgkhxRQ5zfWavkKh7DDkSQ7h4SJUVQXrnGp38Cifykf6A",
  "key19": "KAYcUumBL74uay4QVk84bjVW1NoHuh4igmRdfcL2rk3jMDHQr2FRLD645TsHmgWgJka7p3dH2U86P6NfTfvEqYF",
  "key20": "3TxZttBEsnxZph5NcVvNicv3Uk5GCn5o4vkhFS1LB9NhCXMwEUBgBJ6kbxWm8uYtbehwRAnMsdpYEFSnVRPwAx61",
  "key21": "5GSY7ZVwpk4MtDsLtLw95dC4yXk9PRUDqtNeKzzcdawiURmfUztsg67355NtF2Tj3EwSDzvDpotDCrJLBWqD7fTW",
  "key22": "5UhjMZpBbD5MP5oyULs7JEQqL2gdxyvWiZ6K3GoQ7xefX9nbqAbW5iUmJdAhin4NgfmNWMqvfQd295RZR9Ndgzxg",
  "key23": "5cfGPSd7Wgwj3N5u7QsbFcqd7aypt2tXVW7SAPb3YTmD8kYgwr8dZQyEBhGixAVs5cK3ahkVdZZBN5XtSUrZ2Die",
  "key24": "4yHigkTBUiq6yvrFcbBBASHUoz1C9sFsBTicVWNaXh7aBbS8QxJnic2PVLuR7rMNYt8NrXcYRqRtsAeyDkeuHvW5",
  "key25": "FtnCMyNcLFAqugrXruv1PzhvtiyFCKRApCm3ccCH2MFbjyzpnQdKTnurnc4Eq7Db9XdrcZERtwXqLxdkWcJQ93e",
  "key26": "4fgRUvC6MknvAsLB54TqP3wXUtjepCY4DbKzvzr34PSbDKosuZs1TVMRsdT9r2qZ4oJPaihGpaXrF3NmyrKPiwKM",
  "key27": "jKikLySNhfexndjqdCGtVB7SU1A9NQ8Un3LAXWjLXfLuZqum3yNRGRQXYLwanWakCVbmuxDoPZZr3PLvwd7Rxor",
  "key28": "5t6PzwRDRcnKGE7ztZC7BVkD7GoepVvspWMNAoHQ4RV72z6zCXdNVYFTn6abmBnHLjDpmgXgVcYKqPQEarAggQvR",
  "key29": "5J5JipHKXintNYFDn3kz6W5DX3GAwqdkEBxdaAsnGRWvV5oCAniAXxW4Katxdj8tXZ2K1d3d6xV8aA1Zmk4dZZi5",
  "key30": "47Cj1zn36UJud6YSF3CE2DYoKs3WaeoSpduZyyf2w8hh8VCbJX5x55gEJG33k1MQT4gsaa5zAbzYz1EZKPDizkuo",
  "key31": "2Mr9u1DzRsVNhkv6joEr5uDUx2Qz72uTF9CiN9gW7fXN6npHRvj35Yf3oqtbpUSeWmhsdPrea9Rav1j9QMKraUS4",
  "key32": "2cXUwNkRQjCp2cGpbpgZQNpr5zf4b4twuxxQmQ2p35mUD2oi55StgpAoxMvzytemVyCZ7tss296mooztzYBHpBKQ",
  "key33": "2y2dyLQT2YptcnBp7b8NXavrK5VbeD2v5fdGK8GCBqwQ99xo7gYcPq134TbhxajDrgraM3ucMZydPjRRrS8K7xu5",
  "key34": "5f2Ayqre2TeesNHWYfWZBQwVZ4iGQWK3139HL1zwizqzN97rUyuPXNTVJqHH5RLgC6mXJhq5H2tAcKa77CPavxT5",
  "key35": "3Y36oebRmJW5GQZHVDe8bSd7x3z8c9afXrKwYTYm7PCn43NNrYinvKL3AYHvwcBB8EcLKqWL27HNk6L5TrNZ5Y5v",
  "key36": "4oJurr25wVCT5RJXd8Ry4KiSeYHjGSdQFefq26QbLJBH3WLEMzjm2DLtoggucPrqN5eA2wc7qCDD1gbaFFibwy2S",
  "key37": "2Ldw28V3s3NEvrKLXrStExLhLjENUmeb4NCcPVM8VKuyxaxTsjDMouEmjskkKv3xk5zKQY2jbCbLcbQoVEYVVZ36",
  "key38": "2g3sfgVKUL4dgpduKxnTX7JQUVw5XWbZK7GCSFDCrMHzNq8HVQizcUnT9Sb5SmTqQeNnBvQptp9R8d56s557EmCT",
  "key39": "3qfbjd8sVF54MuHRz5DXRDjGgzhckbfnTeazrnSsHLYiBw5KvzGdJV5ectZ6tcTWaRQfwTYdoHg7ahMcgRH9LAa9",
  "key40": "2e9fb1XHyR8YtHsbn6JaU7jBKvH6jZFm3WzkBUdq9DbmcGirZoeE7zJhGayQw14rDtU1aj2HauKkqh459Vut5vLY",
  "key41": "36o7R2Brd8D3oe8frFPSyZpfKNigvBDbzwNPog8rw9hVePPkKMDXVcfCcc85rXjiDh6WtT6sa6tWYWVvdAk2FBPs",
  "key42": "4nqmPwU1UGBAfjz8wEd2JhYq5QWdPJZEdNyCwDmQVTfoQnTpyFGF27UDPN6a2EMcUWPmXGKMEpqD45K8rzsMkxzH",
  "key43": "5AJgx7QmStYfbKBkXWqucojgAKHqveorYcnzP3nJzSKVk8m8Y5vCmMxgu8R9YenixjXpEMnqcEg7tkvMJPiYP34A",
  "key44": "66zKUnRXBJN2Bw8zWukRai2KkKccAaukwqPFQCMA4x2oj3bX41sp9Gsm3c2mA2xCW4y3iqYptC2jcRP6WeRNyt8o",
  "key45": "4Sh3fMsjDydCqvL7r93AXAyrjmwqycNmYepjhrQAWo3iCbqghGwKigBvFHscw5ZpNPNAsynTrZ5GhFmAsnXNJsiP",
  "key46": "4QaXFE1EqadTQZg6WCoNVkrWz1ZM8FAv6Q28MUKWrViWDo97WfmZoyKuEAgB1aanR9NDkQVmqPGP3TYheozDSuSP",
  "key47": "3MRYrJAcHfXBQw1KSAgLSVLT7A8uTVfH8XRPXFYY8je738UL4P6fpQ1rcT68tAkshc5UJ3sFyEoKdymfvFwMTzQ1",
  "key48": "3kADAvHgk5Guv3PK9pLVyRhgXvofhJNckqEA3oop8h3UgadhtxqxG52V7KTu1GRiTgrpVSTDUW3r2oD4wcicKQS3"
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
