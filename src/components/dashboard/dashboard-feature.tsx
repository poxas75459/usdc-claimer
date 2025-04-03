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
    "5mWYr3ktjzhaTtcRFQxdGE3wbwCcDV35UhvUxDD24g3ETQWS94ZPsF1FDgjTENVjeWqNgicEP2sX33JFA6fog1Pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4unWHEXZGDdcuVUvtCmgQ34qwvqs9y46veHoaTywWB2KtcgChzj7Dn3Zd5sUNM5Rn8K5AD6mAARR2bCBNjgeLWfx",
  "key1": "53Kx7JC7LksAtLqFREWSJuW5E3Ww5pL7gLTob9HkgP1mimjj5MjJUtE61e6yBAwVYVKZzW6wJnZvGiGBnbiA1WJj",
  "key2": "3bS56GmjHTS5qSNkJbSvrTk1YrGEmnPuFfiTHTkCvnUXVGBUtpERYJpMh7GAxfn7AhseqedUDEWJeNe6NrorxFtr",
  "key3": "4jDoG6v98ZAJtXwvan9ZwwGSXEz7s7C9Z6HePmqXG6P5DenRQb8T9xE4QMYHPFSkvB1PvKnD486Uz19MFWsBEgLB",
  "key4": "PPB9iAjynVtHyxbApdVU2WfPZ9WgsK6X8muAMLNBBM9DHiHUKP9x7n1g51oDnJ7A5dBKzRh5QTwMCmFs4J2yPMV",
  "key5": "5QEM6zqZ3pvu4quQ2FrbXEdP8X75uFAZ6Tou9DvNBTHMFXVXaa3RQGus64bWAFkz4bdxLmpxFe1BCAvyts2fkWvG",
  "key6": "2mmg9jXiDSNFmeL4YKAWUnwJzZfJVzUjdSfD3pSHEvBAuiL3gERYzisaiNGDVH1KGeGh67LmuaPK6i3rrCRGsWLs",
  "key7": "5mwrHppPJUv2bbWipad389Z7yQiftxoBLu1bwD4g5J59Tfho3NKSn7TCWkJaZtBeBDHLCEftCXPNfSP1utPsoXGh",
  "key8": "dgih9BG2Df9qr83qeBwyG2oMLwXk48Lu7AMnt1s3CSRJvxXbHvM3mtKWe31sgavVdET6ia7SCrT9dZcgUBz5VmW",
  "key9": "5X5CuNKqZmPN8XBs3TrRF1vXF5GsC1AJKB9WqEktua9tmnFqhK99nvSjMY7J3QDYJCk9zF2a2Gg8G8GS1vVPF4Wj",
  "key10": "2xJrzRNnwVg5MnMSi9qNSj5r4jHw6gUwYGSGiJPpJE9HPEaL2pXewLwsR8CQToJ5SAUdH8Zkc41pxqfRBrQZuHN3",
  "key11": "3YUcrxKZCUzVLd87AwQ28T8qt8RQ2oMkcDDopijQCY6ifQEHXbq39zzD5ffcxeUrx2YjPSweZCnekpPmhtNpL7fV",
  "key12": "2V6U8sHhtgoNwcRivLt7LpwSZ3q8Tn9shCQRu9oXtR54PdYCHtG6rNEsDCTaKyPGVT7XnwHsD9LY9JCVcVm4hZCv",
  "key13": "4efnDGuxLA4jwSi2kHWMjxmkGAPksbnYAc3yCi8RY8DEJ9eGAEhLJrgS1DAuTbpvhfXeUNJGNxVWVbcSnNEUNJqp",
  "key14": "4jxry5nfaQY3KjcaSEwfbqips9ayVqLdoQy4vdXSYESXajcFeXagMEgNLzQyvE1LXo6QLaeRShZdJhwcqAmeNj5T",
  "key15": "2XagxpLr6DYWLBfdxDtuS9mrQy52stEF56CNd8V3GYaA8U3sBMkSKAN8V9XoBzn6Z6zLhftj65t6orrEgGrcZYEW",
  "key16": "3Zv1CgCKHK7epS4gvk1Lze7eG54Hv7d5PsMxxR9Djc47Lq8Xa4ZwCukoBeZjFFrSxmzdtaRioX2vdLsok7jrR5pg",
  "key17": "2aLkZBZZE9bFpScXFwxbgnaBepbK95T8GFcJDkG8diF9eFSuRSE9hPb7zgBCfVXBWZKyJVTPptHi89JZGRyPVkMC",
  "key18": "453QzukNA5aaM31J7PUxYeBmVdh7KnvGeHzifamjMUQySfsZhWWNANLBDsBVUTxw6qWA61RNhSNoJAr1NzVQysB5",
  "key19": "31FEaQaB9gfMZN2MkBNFfu2d6opGznCWpVufTGSrBu4hhSY6tjjyXZHuKc2r6U6gisW6VspbWqzRWEVETTUhtPPH",
  "key20": "5vBFfwXCYo44x8ar5WDNeH62hCuuGuJ93QTHFAiCWNzPwFZ8BN1Xb3QETF9CNdBYU8zMcr7JGzhdqU68VRiUv8rn",
  "key21": "ci1PuknsBm6thQhCYnynZgYhM7oPMB8sDAU5qLpg1sYqHYjJnocqreYfryEkFgqLAVAPdcVD6hFk6xsiy5KE3oH",
  "key22": "5fy9MRNLNfd5UcQcriRj8izzpmP24eWNFJrknDYBpLPGMRZstNstbiKbD7tU1XWyNU6o2MR9gEEw1uc6DdR15CVT",
  "key23": "5dkCs5vVpHoKTVh4a9HNmDKMiR7kUEeFfh9XA3PiDm5YpLYpWeJooC63GtPiB8VcqzMXAwTQBJjYrApsyvmbob7d",
  "key24": "2wRRK7cKnYYGVQXcc9oie1rAt5eojJWfiPRuyWJVTjUjVTXBL6rYnj5CWS1k3r6vbwdCrmueVzhx3BiUQNYEeXnY",
  "key25": "2zZvVgXVrDDw5Qe3XwmoBbn3ypz1LfV4pg96Q7AHAKyhydrTLuv7AbdLcqLBLfieApzdmvkzYMWFu1EyeErAxAEC",
  "key26": "44bhPsdJxukofk7hgvJDGwKHcsaUJDygqxjU8ZQnuo5tKpE3mzFwy6mNqpGPtAnAxh8UN3qS9BQQk8sGYUTWhvSU",
  "key27": "57wyE5Vrtczpqh8BTPbkng2YDzdVDkyjMw7NBCTgYbaVYiESaEeKBmn9hFuP69PJkqTqLXF6H4R7tuEagzjEu3w",
  "key28": "2F4zhg5GEZJeZmk4QE7UGakERaMogALcp2v5iz3jwiWS6emxLtR3iCsLjeygA1nFq8oJmKNPrGetrRJcg2rmjAvP",
  "key29": "2kesz5HUgJDiv98fj5FEX5Xi8eKbhqkgnukptzjd19SMd1A32NNwywzettD5jFQnCqadiJQPCdfLQ1F43F9Qw1uc",
  "key30": "4mPcfu56HA1HVVhzbZZX5k86DYSBX5Ku3yLex1u124P2amFizX5hAuNJGNMrssULNPce5HCy2EfFjxoL7TWZYexA",
  "key31": "5835CDrfMVpa4k3GD2roZquhB35mkqjm6HabrbCNNHMXLHTPrNye1v9L4oTqicNZcdN9updbzjLTfVzxytGGfnrJ",
  "key32": "4XUGNxJmBw1snxL8Z9uG6iGk8UCxcMgubh3eFsG3PupdmVgu6sCmPfPpUZ76EkQfdDjiBxfyeayc83m9FwYRdfjG",
  "key33": "5GdcbbP7su43tFCsvMH35oeZJETtxfLzjMBMjbvDSGUuJM5u5ZHJBkKgkLWMA5EwftnNuj1PUwTSQcKTgSaNEwjB",
  "key34": "SR9gkGZv5WV5kdVmFBSkG4xg23edFZfxVBwv42QJ9smyVcAaSBnVVwvmknVaY4BHaVjruw3U6fv19hi3tWGquFz",
  "key35": "2Z9sNaXf5rpecAf1HxU3QKJuxQiovPmMNw4CUNPNk3KPP6xTDhgvUM6LP9Nm7aTXcexju3BPAbyGwE9tnjz29N2A",
  "key36": "4cMLQx844o2uyopW8aFeChVsaqFDxN2b5f34mMEAKQQ5nKbeGFZjiZQL8exP8ZSmuNy3ZtHGRaqTnUbhnRh1skvY",
  "key37": "5urjXPiCMX5ByFb9GtVA2z7mcDenmCGxU9EgSPd29yPRk8xtBfhgSdbJqatRPPV2xdEzz7EEKf2p3XRFv1HHqvZu",
  "key38": "2GqBGMRAf8cGmiUnJ8i6M7XN7iEQYmuUAyYAWuvy7yZgH1TDijDLopgWbkeYGA3v9BRasxKnNUEf2wh8SMWbHCjn",
  "key39": "3Yopkx6igggCLguF6hrN4Sthfb1axfRwf5GsH8zHHBPTzvjn1p7ewufYA9YSc4eV1Li1ckP8cNsvDFXZ7GL42Qof",
  "key40": "3P76jedmU9JMKYEwV2veHhegbfwwK1Zh6ei1e4gtUmhoPueGKY7m8zSrXPSeCwY3fPn2skWiG5JyzPLaE6tmE6Yn",
  "key41": "3gmpqyKDFDkN3i7jds5T5Lgoyrr8D6Jm7aZ85na2Lsk7WV4geXKAWdmA12FsxsnhBtNF7Hiv7KjyB4XR2VYxVL7i",
  "key42": "wtCof8NGsw184VfQpkwtZF2XgBgFKNUj7fubeZccXPUxqUAS2i8nic1kkmBTrfFdp5dGBLkvt3aKeLWn5iexUTy"
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
