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
    "pFqR8XwKwVefRPg1QtXvDQrgFJdRC4DqRruAbusRmAYTTdyTqZmN6AHFJGerQZHguZ7UXwpxdZ2UhSQKaxhPfco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49LzANkYX4dkzJwgvYy197fFuKBr6ARksohWJNycQm2X2E3yyBetVF6VsGggRxraHCfb63F3N1iqfCSSkhpx6uVY",
  "key1": "26aA4YTQxBMW4fBxjp4kLFpr2z1zBwPu8Q4kmLzZ1LnLnsssYGg4K8v55wEMH2viLodVpGDgHZ5xX1Sp6ZTYSNci",
  "key2": "2SE9hY4D3x6n33RYigpG4fjUJkJ3CTwHbtcD5otSDEiRSAcausB447XXyK49oAcE5vDrKPHEmeTfMKX6PbhsCWsv",
  "key3": "5XfCGg8Z9wmmkz573ycgVGbLm2sDviTg5cdmykJZQ8BdB57vWsC2i9rzbtrMXZgzoVgXdE5GVNNnZy2WFPEqx3EU",
  "key4": "5yX8z5W3nSGSHbgY4dZKq9K1ni1gzppesRcUjwXbMyckdoFDC2wUCp3fFuyPR1A7Xvp9jRiK1ciy6SyoKcwYrpeS",
  "key5": "5PVZ4ZuucrCR31VjigDAoQXZQYuJUPZK4EXe5qjc77kPMsQwyKJ2U7vCz5wKPijyJpg5TnGSh58mGsbJVxmri38G",
  "key6": "5ZfmsmDvMs3kuzzaHmDRnmz2HnCKJS36rzstt9G5y2DzYyfsPc19pA3NoYLtqwBWQuKY79dvJLfYtKQpdXn8pFcG",
  "key7": "3e8ZBkhJ4nDvXGePDTKob4gSGMnVSVg9PVZw6tsSz4CFgo2jqPX4htk6crtkRgzGo1r7AW6M8qSWK4cjgyHou9Qn",
  "key8": "2McFM21bkCAgJKoNVHkwBTUXRb4QZfpRzvWdPmo8wH5DehiM2ZvLUcMGQHabgTGKnAsBtxvJv4pBJLoZCN1vFifD",
  "key9": "61dFjk5GMsmCKAr15zQYgwK921xYKZ3BZxxGW7h6FEWawgih2dQp29E4yGnaEwd1zeud2GjfP8D27wCpSTzBD6EQ",
  "key10": "3Yh25WUueG5uLmuWfHy89DH6AkoxYJyg7oLpXbxCoxYwbH35Ww6mauNommxvQo8xmJcjpV4E3e6vVateTq3Ao5VE",
  "key11": "3yTnAK9tiLCvCKcUZmxeYKVNCeaQytHDvNo7h8qKMvzDzndD5ZzsRqop5rRuvLY861NfXwCGeoLSwbAfinSoYfbw",
  "key12": "5KAGyrCfuAFEt8msczDkqZGvcQeyYPmwgLu59V4ioWfYkt5gESdcvFFvnfo3jsxJT6PZVqiCp9xfPrZTgLetH9UL",
  "key13": "5bdRgw1Wnvc9mDYF9kHWpJJQGgxf53c1bRF4xLAb4Gx3wJFYd8rwvzDMx7eXASTxgGRjpmLBzo42Vu98JHutk1Ns",
  "key14": "3CcbuZZUvXJWpWFa6jZVENQzqt6cobdt5AQaEhT465fyHwrANL49YnPV9QLeh4djsVv2CJ8Xz2NFNpRp57o6dpTR",
  "key15": "5wkxbRi8jC1LndgsFJ5TRCFmZxUz9QSNGtR8yZAgghJyko5B4Vkbyv6wx4s3HuB7Ggx682kBp3XKtzAkcVgt4bgJ",
  "key16": "5GFx8ZDTzhXHsU2dgfFAxo8N58hJDgJTACcLekUEEPZiHHXZwnvTM5KuRBFQX9sx3RDM4oiwZDqhDv3MCAPvg74d",
  "key17": "5hAqo2Rt6tWYpFnnaN2E7Udrs4x43RRqF2BbYJGW8Nn9S8gFmbrhvx37AL73NF6CAMEfSPkjs7uDyoEybRQthYtV",
  "key18": "51fpw9Np8qYE7LAP8jSNAaBPCC1tJzyjJV6z5AEWu6VVUViz5fqNv15RFJRi56UPaJNSps4owgPHKfuAFrezvHhd",
  "key19": "2dBomNp2j2WtyrVtyjWTDpAsB4gfMCYfiyLB7cZWJD83r5F6Tkhh3CRS7mjr6RcJVW9RP61CVvxYDswqZAFX8Zo8",
  "key20": "1nBoaryEmiDQgHyQz6CsyVpxXsudqxXi7venEgXpZK5nVQ6mzi6TaHL4fg7bw4H78WoLXaq98J3G8jrSCEYtkSA",
  "key21": "4dMWVTRVqrx8qQbRMpKWrLGj2wvgp5oaPR2HDenRM4fi7Epo8EFyuAmaS74uiHR7dgYR7QJYKUvM5jeBpqcyKVDE",
  "key22": "H4YcG5ATB2ixzX8fDfbD43nL3fQnyJ39Js1QWLvNEmANzuacC9b3Fnd7o3CHWbLhSWkuuZA5h8XAFFbJAaFjFtn",
  "key23": "5XrugznZtVXsvP9B2pzMP8rGFwfASs8PAq4ppPD8i5T6hmDbT1eRQE4VfKiW5RYAFCtb4paT9BxaE4m2FXMeUBTj",
  "key24": "3GRyRwhp1PYRhvyXtjnbnD63UkZMPEJaA8GdLJJbsPA72biCqh7Vn3QBXNqyPQAtg4bgqmv9sk4asj8n9PK9ofjt",
  "key25": "wxeLFgTpWPYNzUCpGPhYgQK4o3NCMo4VUd7Rr7isboCVpkfazSqf86pA88QrjKEbCPPjwH8PcdgvtecMtT5yTB2",
  "key26": "3s7jfifTpMdpg1oGvmtBrUFizmZpDigMkWXw2vU9bgco16XzZwY7rWN775EFMVSEg8DLge1Hc586pbXT71uk3ejz",
  "key27": "3sBSNzjubUPMA43y4Z6BA7TZxurRMv8upUiz4zzL2eSiCRN9A8PnUAiM9tA3ky8wrWmE7TK2G2uoENeNPx1acvMX",
  "key28": "42QuZbEhnD6LT6d9biNHecg9BCV3CYu5Gs51tnrU1hMyiQBRAAPjguNLRsACQnSc5tNnDtnmeaB5ieqsqRR2BSvy",
  "key29": "5XZCc6TnFGwvsSj3QdoN8BZsoEC8Jj4Lh4a2tsMQBYKPMPjRR1FfcDGrakuZC9HsN6oNXZcPK3nPDbV6To3JKg9f",
  "key30": "hMWmbdu4aBbF7oY2T8kfisyk2T2bCfzwCfTfot63NHMpyB2pQLZSUTDgFqqYgDFSwCKjWaUUBk6VnVtcy2qCnnK",
  "key31": "3DqYFry6xex7DXX2EvncjQ5aingE3rS3iawYq78ZwKVFFFLoxabe3QiourkdrbFzBMu1HGRLKeCDXkec3GdzDCMo",
  "key32": "27iCV6X6FP3QsKPoFkiMpaLX1JpfgTi6t8bpxsfpoeuiSqP5vjPFG47vaqeAvhpTJABbDYe26K9ADP6C6Rk1AK6c",
  "key33": "3ogVeZxA87mFaM1GMTYibaqYQyLrHMsVfmKYDuoSHP4mXzR2fiygFfLYoXkGA2BUT9XCAiAuBptib5CLB9r3snfj",
  "key34": "4CP6k2BnmwAku8cSNkbP7qCoLvMUWoinMoimQa9CaEADqs7nqPKUxpKutmXUhtodovQQzAP2LnhBwKbVegc7xoPe",
  "key35": "iUwzvsTeCyYUTsA51bQrryQEGvNokRfCN3HvGtP5SSGyhNj5WDySyTxx8f2C7NrFtatyZe6GYar4YnXjEs72scp",
  "key36": "2Yzotps8cUrmPtMMjqDyPm35vD37fRWBUMGt2zyL2yTysWnmjxQ7TmbGiQqhrxBZgZKRbVFEDHmwu8VycfdHcWt8",
  "key37": "moVzDehhZc9SABfdkokhgack6cugqnwHXJ7HafeQn83qaFkWY5GF6TEJLe2DfgnUMva5QBjFRnCurd24VHwQcT2",
  "key38": "2y36VJ68iowxiViRAs3HotGJaqDXeBSNBU6XBExquY7ff7iDnN1wDaYDA4Vh3YKxK5S5R3hycYGyiEgeJAiAtw9g",
  "key39": "5nnzxJNmVB7BDmVxzVMYyezZwWL9S39HG3BuJn5SdrE4SKSmkLAJkhKmpdop7EoqHXheNJnmDgRo4ovuyQ8Qb2T6",
  "key40": "4axfbHTSTtYC458WS7ivZMnDBiR63DAqaTYqrDMa16ePdJpBUB23x2JP761saevoCMnnezPU72CvLcdiXKLZsnjQ",
  "key41": "3RoKps3fcQE8vcEdzAaCRoLic9Rz4tJ6bWCWJXMvEpTLwrADtWJhNNJsiDD2YgViYsKccAo86VeHh5KNW7poEe78",
  "key42": "58AQFx9b91uoCxqZMVpjp7YnXWtfgVZj3og9r1tu9chPhM2of91d4NHddowDY3jJR9AEA1ipmUFtbcpedq2nWbcs",
  "key43": "2a3VKJzfUWc1cLDLMECM7LxYgVkZTYWxbMtWq8C358ZPtN34qc8FDfQpTFr7iSUoCRPqRnHv9oqq4hDxqruVQ1N3"
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
