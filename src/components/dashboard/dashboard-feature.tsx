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
    "5TfE6rZhGb3yFVz2hMHBunmXKLjj7RTnJS8jWbwRB93pfFDQDNz4v4p7cMKswB96u1L851RmPqN3LzAFBRSoD8Mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kMKQX7xumsKYeyv8EigmoHsRCdb5MQdYCiXZpDeSPiSkeA4uNAA5Mju5aJ2173EKtEJ7E3KZxyngBeGkYcu7zCt",
  "key1": "2Exzdefzd9p6JJouyXXiSvRRcTe6STg45dyLkqEnm2S7Ztxp9CCxy7bAJv3ZAvtFzHgDU2hqzQn1eYPo47xzLLar",
  "key2": "5TurPZgsV5J6V3B3fpELgQQFB5dLNReJMwSaZUj92W3pKyx61ruNR9h311DZy36mwr4BCdqK1F5X1Zxb715u2sML",
  "key3": "5tFLcKys5ecpuiHLH4UinfmH2euDmUqxYALXh3MRTLs9cDzSspG8oyjxLZwxbGScUzaXKeeFz3KnaXFbmtgaqTKB",
  "key4": "5UwJ7Banc8Fhb1DxSu8PhR1Nz9xa57RLciiCG7qkKYGzZ4V4fpvonkKp9FwuMnbcotzE3Ahp8GcLv2mpY2MpXvgK",
  "key5": "3uXk7JMgceDDpfdZ8PHt3Ab8SFDvuDBpWnrEJ66pnKjh1fDgujzLg57wKxCvopzENYedMGFQ52TUHGA3zH6FzG2t",
  "key6": "2gc1m3RBuEHynVrMRSXDYfRJP6UqzKa3zHy1R2ZNsksZUoyfKt16EgpSY8yCnZ4BZnhJBSdJjTRkAd2ur6mAyicM",
  "key7": "BUvC5zGhcV7zxcRU6ifVPXFBXXH485iKxGsTvuAwUz6ujGp7j9MEQux3FRUwZ6gXS2ANosJHY4cXJTbbHvqJe3W",
  "key8": "4CBvw1Lht7foEAwtE9zo3RgPSstMGsPu6tb8gbg6KpGYK965RVitkTwAt9bS8s69apbq7Ycd5NjaxAmsyQFQGxmH",
  "key9": "2bnAbtmJ3y1CzuC6h9t5xJVqW6VseaQJTXfS8PgSUXyeUxHScv6CZBF4E7bwbhccZFgn1pgR52fBP3FXg2cuAi4h",
  "key10": "31x9bwPc4KhUYYbc29pANCMW4k3AdsEopzwiJQefswCxJ9kCeyBLPoEwA9JMQDkUYJsNyetewSFYh3hFGc6YxiNV",
  "key11": "Abnr4gF65HiNwUSLQYVduFWzQpJWFhSnAFmXJqd7U4AEUByigAttBVusHvcTHeYEvtdKLf9vwKUEQe5NbpsLMgX",
  "key12": "9K8kHTRDT2oybYqWMUgSXyMrS6TZNAYSp3KbfincJDsvrvUP21rET3xe2htnnQHwtZmtjV7Z3q2jXHqn2uuhdLU",
  "key13": "3E3VMUECnVRzssvJDir3AVYSrHyjD7Fh6JTQiDqsA3AjqszJiNSZFnvaktYr3XhymbfzxdLvw1H7qaySfKdWPLkE",
  "key14": "3Qo1DJ9wemS179ncH1G4MFDGXGvRRfMzhTxVxcq5WssyMhJBrBGYX8DvBb9zRDrFzasL3g3fnWDGXwPJum7tjCmG",
  "key15": "5RDcHZTX7kor6BB1uTxkhpzBHt3iXMK5M364uoyAznMLxFvfUwBVZpLxS8uyt7ZuU4g34XEEfzaiLi6B1n5WHrxZ",
  "key16": "4mVYtbHRvCXASYSTcdk3qzRLFFXryafjnU6FxKCh9x2UtQAM85rL11RnER4m81uXxHawKU9iZ3FRQQ5uqvsGMLNx",
  "key17": "1gCa6dPfjc4C7NXMmXLGCh4MxexNpm4Wztvzaidp5UxsdfBKKpvRt1QN5U7ikAYp4JxGRvY2aAtvrm2Kb1WxShd",
  "key18": "5Eng6erWUZ4yPWR6JsNPdCMxLLAnCv4XrpLTEhbkY6yAaF4XFseWecdZQgmzYnuB5jLoo1UeEaTJfZ5JCwK6C7ZT",
  "key19": "2HgUDERMoLkjeMpGutZyRJ8ibsgJN8YmD8a1ToAevH2UaSzFePejQ4umaz7hA7DPDmmF2uZk55iJm1A8gBoDD81m",
  "key20": "4Cz1BXkDbHFiub8VTBLSdTYxGVaSnLvsaVaHFSPHCExn2MhKzXh9afuPtXgq4gsEAX2S8WJ3pNU8htCubc4msbb6",
  "key21": "2qr3DD5ZHSDPv1n5Yc65pyRQ5Uggm3t2bgWhCS6rtv2joQRhYnCH3DLCuH3KYUKR1HWERwmskg9b41UPooXhW84i",
  "key22": "vuM8BxejrefxQWNCchbWkFeMrZdCXns1D18wSKHVzQGXWyEy8DujXA6aR6v7bxoq9rDgk5wiYQMkmqnabx1wiHQ",
  "key23": "4q7ehYJs3VwMvtFz9cJgrYbFBY5Fi7MDLSitATL3fbvoKYpouDBYEKNfYdvj9H29KYBQ5br7wX9dJvCmw2juQjdb",
  "key24": "YMYojMtvv3gXa58DyuVSiN9YwtPgDXn1qeXGRPpdkaQ7LkSoNzo1gnfUrmvd2iTd43fMzNeqcHv85UUVXDc8p7B",
  "key25": "5XsiSMwgrP9sA2qYgtKHeQbS1iCTvAjoLjjqN2ZJrxPKKcgU5wHf7m2JEPGRQNdciGSdvgqK9uP3t3nBFNMpLs3k",
  "key26": "5Ub3tCbHHYhsxRxboJhNauE1ZAC9fVPYwivztrng36oufTLrGsFn31itABFUKWzGpxiRwbCXjBiXpxozcxQpnpyt",
  "key27": "2XoUN411xd7UXqLcz9r6cMX2hNoQAqYsiFNcxhrYp2MNVCGwQY6dw7wADeBjhA7K81HdeJzZ4ovoGD2a4vTmdYZA",
  "key28": "XFwVRGcKZGgNzBtPyGtWCvRxcV4gzGH1YT8dhr8C5ren6HUVmJs87PubCyc1qdGJmSwoJCNHr5DKpy9NrdAzNyx",
  "key29": "3uqrrcov5Z2jKvbVJPUbxa4emAeh7wKYeG7xMa92UG6TRec9NUzEbMY3mNLW1Fi7ZST1krs6ARktwKrRQ7sNxBiQ",
  "key30": "427rg8LSNSZTtDPyxQYFUqUN6N2TSYDqEFh7XHL3YzhtWUi9BxoP4aP67dNvp63ARFwhRVWkUhBEuRsTwmkoGhZS",
  "key31": "vUqw8AxQqRovcfyDH63juswr5Hsy4YFb9ApuaDRq5k99ddMpToiHuV6JRoimnviKnrNkEmwp7PGKczN1ba7RnRq",
  "key32": "61oMHseJJ6QccdTVgA1iSxGmxgNyZMNgVTVjYuFpQRYUMfFc4UVVJcg38d8Ldx3iCR3RQmGrziBa7KZxroEDpRg5",
  "key33": "4xDaFXxBbvpuGbCqzmsAPVY4B5EiwE5Zb9chk7toq3ZQrUMD2mJqgbav5UYdJ3tEjajWUGU6e1ehUmRpdiYmh5QS",
  "key34": "36BYTUTXUoTZ5WdzHkgWsfjQNqQBEFPEG3CJhzqH9hURX3tDxguzfryRqNasZaoxQPc7dHFgEf8n8CHeoebXDhJo",
  "key35": "4pD3U12jZ2yxDR77DECPnUnc4qU7tLkxQUhNzhrRE9WbUXXLHpSJoELfXx7qgpGxCbu1uCAQzuMS1HKBBo4nPV4o"
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
