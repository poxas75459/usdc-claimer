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
    "4WAuXe7vdZTFnvEaVfmLNNP4co1ujk3xhowhDNDo2ab7iP8cvQ7G7bCvnpVnPCLh6C3yfuYKsKyqUDML4Q74PA5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CpjqVR2JwyBaBUm46FbvUysaPFZbEP3eMiHbVrpwncZz8SZyxx6MLVrAUvtNcsyAs6NdQtig6kn3jN6my5uSPwD",
  "key1": "4AuERtgNZhbvHhWFfxD49Lhr32ntqABAPN1vYF5ovcBBcF8LWXMTCodhANt28faUNGPNia3oN6LetYinLzzmeQPx",
  "key2": "J3BsomJDXVxmtRYWpn9X8LPPkEnbHzyhrssU1CFipgYjxRSsZginVrSACCADwWHPpYfrgGwf5zBq37zzajzsZ8Q",
  "key3": "3xraySHwK1BrFf4GiWSk5TLfKqZerMYmHKByuFYFSK5ipXoaXzP7cGhjQqFRXrCcioALXe41mi9dibPJdBpPMZ5F",
  "key4": "34dmJNbnrB8pMcVTKnCFbkK3PyFB9y8HrRq7fHybErchcJJZXBHzpEvsxY6yJ9dueupi2hUXG8K9SVsyJckx2Lrn",
  "key5": "BwrQ3KK1TXRxPQA8wDzj4u5kvofm5W2wSX9iuFv5CmLDjXaiYrZQUTbyGdq9vB7MRFTHGsqdRKSLoWMpMCDHdPW",
  "key6": "5krepkxNXRuVQ2nUnwKkJHn1fxbcgdEhvZ9PoNz9FoGD4QKs6HqK1QWChbZeU2dvbCqGKvHz3Uix9m128NQ6hrNQ",
  "key7": "5ppuFTCmgkTXd3MuLUWKiChVE43prBxpoFGzpzFYaHEbSYKB1xx9tfVT1qU9jdtUtpr1id1VGxs2AGkGwahqwhVh",
  "key8": "2KwHCJNnGDhwkbXnEx7cFCcpUen9J6RYMyWUiis5dr7HjMV2MtCLDsZWzdEd58U616ggQgnypqFAqnj7JUzYkzHM",
  "key9": "5mqaA4pPjAbDnhPZ2SSckFCh1QoX5VrQ9ZyupET2aBTAbdnQEFFHAR1ARhHY6RbnpZ9WfhCUGoSpbrUD1sdFPyhD",
  "key10": "2UHQikYUF1Wy3ssz3bdnrzrFTrfUU7wniA3KVMxkLCG2Npr2bjvZqKbpdXAFv3Txv698VEVoV3Fywr5kqB7UpnWK",
  "key11": "EtGHnF3c5u5sKwHXFLh1xSrciCZu2Zek6vvjuxeRjNB3uL6TSWY3x2amnQ6froBa8Wb2m8rtnecFTD5y9SfT7VA",
  "key12": "51JyrGKCfQLETSrMKca1UW2gWaBwUTuYUcmiWqPv7q9et4JUgWiGcxBgQTArJXUA94NFVm8BabLz3G8W5QGw89AE",
  "key13": "3K8uG4RzkcxTZfD3eHtbudwLdf5LdeorXwf5E7aS6yfT296bo5AMLp2VMikQXjsZN3haQScXeLAE8QbKrUhDcqsP",
  "key14": "3jo5ebk2mKuH5DXVEsjW7TTJkzCscGAWEfG8Kjxj64BuLnvfyD1LnY8XQqqWRwUVdoRvCiRzSWuuryo9gCnZeiDu",
  "key15": "28ojRoL4e2mAGNCvmzkCofLeBVmAG8sNonpdPvfYjryav5UsxFscFGyQSus8LH1NgGD936weHovCcMoh4L89Pj55",
  "key16": "2ekv3H2EWMmZaf1RjWXEAKKaatAc5KAMFczyh3u2JKt4ARE1M4d5vQsbDwG9VRENzVWxPRh4sg3BkevSDWnb1bVW",
  "key17": "3zA8NC6h5pDRda1HoWzHjrS9eHQ8n3LZgfdVkH1B3XrjssRjQA8WFPEcE7FpkWpybvYcy8tihZyPbZ4UtNEDeMV3",
  "key18": "4MJ412FmJEyfuuG1f6coDi8JAX4YR3A5o7hiCbbHZQ6iMV8ASLAv5my7ypqqbNtE4rahk2HsjEETWHxJVaoe3v32",
  "key19": "4fkkz6pxahTcz8Nb9xFtMdWqfyeK9Eb4Mj3dqQePvrAmEHagNrJJNXN1w9idTbt8SA1bcJepcrMsLyNkt9UmcpvY",
  "key20": "4Pb7cqrNkMCTCZbnfExCCHFyeF7yPtof1oHtvBRw2RDzQXVWGVu5uxm1bPzGeagLqa7rKPJaMEGG4cfMZp2FzsHb",
  "key21": "64rLbCvAmHWsxWAECt1gcGoiEPM3JUNGR46sYe5BzeE3L54oDcc1QpQXU8pBZ9vQP161iFDSspq6PHPjcdb8HCq6",
  "key22": "UWCRAQJaMQJyzdYvoYur9yrmN2oWSEUQ46pK9jjGqbcige7fK5sF3nMwUrXNXhCdkgvuLRvsKaBpaGcdg4dQ1uZ",
  "key23": "27VUBSdKvTqoYTZU8GXpMzumbuDr6gsDj3oy9wzT88hfSeBscxGdZYpiKwD6ZKnsWoUKoXPH7RnSxsyDSSB81fzd",
  "key24": "3TseUwntnazbPqEd3nVYYBfDC1jM8zUyiXgxsAtaNHknK6MxEGyQJ7LrRYw7uRRS9w8wQpGMBvQLbMLZVMcApYy5",
  "key25": "558qVZ8KVwjAL4dPPHyZrPf7MyDe1DqftwkxS28DR24CQabyqDkbrksbV3qv8SCYaNqQJhk4SkVdjXJZmahwZoir",
  "key26": "27Lnr4h7kqzdeEZbuqGjwwmMswpC3xEi1w6bS3ZaVgHoz1RbKak6TiMniPo5XwJgASFExeqMvF6SFUSEeoMcigob",
  "key27": "3Asxf8YoTSJ5HRTAhv1UM6Whw3YRTc7RUevcYjiP6Zpwxem5Bow8swEfHTgAM4yE8FS97GPiUKKJZWk2M7H4exLZ",
  "key28": "2MPg79m7FgMfzLxLE7Egwi3VYR3cLPyj6w6C4PGouh6F8tdXbPJR2AZQXvL8q8nGFgQDMtTMEhTRrZgtXhq53tnc",
  "key29": "63Wz746TZidGEjDKrxSysRJtJMSqhvC6Rgu1AHTYP8K8skTM5PK4GCnaETmKd2Jft7sBHR4zkZ9FxKzdr7oZFGwH",
  "key30": "5YkvqsbUR1eVwuhqQkLT4D5Zq166jwdTsu6Q2MNc7vJMzSp1do3vNyjaxkUYGd38WvifALRPRMGuPYwLUWr2NRoc",
  "key31": "4tQ786HZ69PnAAVZoQYyLpqne4cuBo3M9TFdZiuzQWF2QV5XYa1d9dRDRjoQPRtzGKnXRJoALBsvWa8acpThdBAs",
  "key32": "wid5hVVjnc6NML45HXACszz98K4qmqLMp6oNDgCiBursZfzJ9MN3R2QMgCMfmZx6X77Y8Qhvo8HFNtAJdGAGDBt",
  "key33": "4aKzPKe3FgWd8WPYmoFdhxWpsQdhX5EnqFWAoAcT6mmBf37T9ZfLmCy8WuFLCZFL61syBd3x1iiGCH8gxSCkjDSJ",
  "key34": "5RxDjvWTaYk81A1byHttrcGh8NyfuBa8LsgRu8BfiTa6JJYFYCBSqPEM2RhLZecpvUKRpPGdK9C8NgjB6eDywMgc",
  "key35": "5c2LkYt4WBPgzycjTK99yBoh26EBfN6VAgscH8Qoj4U8PeDYRTYXi1D6KkcS5hTQYWoz18eSintQBpv9fM1afUnJ",
  "key36": "5gmDgKrzKDS2fmqvY1kqmwiX4fvTUzKSQRLARG1REvpgKjEFg2utRZtVoaA3orjQpK2YCakR5RGEqrdp1MKjMTtW",
  "key37": "2d7pUBZeHKVu5vcpsdVuPbvg46HiPqUoqoxbZyX8o6ki9FxhKF1fyXykT8souxcB7DiTFhPCNACkojWRmwRqRje3",
  "key38": "3GDuMhTQB9MJ2cd4YF2PvREGNptcZViUbKLjiANoX3Z31oJywn9WwHFGe83ho88xSytz9Z9oy4iLe6p5xnKLQBFo",
  "key39": "39tLB5K7qBwVwFahLcrX4gCk76eHkTv6tk7azGsg3RAXb32DyKPpVBh5rbP2fVqtkVsVrRnsrTzoHv2s2SwC68H6",
  "key40": "4ih5Ho64GcSyFHCMVYdBidj67SeESvxgPCSPcPW6Bd1ixPJzgVH6HGJMsAtJoUAucjdvvXX3Wpr19jPsG5npGJ4z",
  "key41": "QpVTg5ZUuPSnHEWroxSviGtNpDWcv7AFKkkeULgnhhahuWPk3pxMMnPRrT1HCGA7fcoeuvj6QHSJLX8C9E1grWT",
  "key42": "39hGs49FxBMbn1aRwT8pnJwZXt7STwojBtYFUNLZKX7ckHsY7kx7LnopYixcg5E9uaLXdcrCjSSSeeFXDCK6uvH2",
  "key43": "UNoGTx7ittB5CnfHn93rdsAHApcLHKTCuMakmvs6U8Fro9v4jx7a6Bnfr1frruHi6GiRPs7RZbm8CaQJs44a3d2",
  "key44": "4mq7effPWuXtiyb6cQqEWTAeKpsFugpuGDo5T3nPnxycqwnCCGGCuvvGkJ1Cc1SNJsnT1URtg14z4uoVFeMwMH9C",
  "key45": "5CEj15oKuT4RogHcD5xj9wKA9d1MugNoYPb9EhGUueL4pZztEvVBk7ugoMjzqenUeByBvDqARBBuHNhDEAXF6QFe",
  "key46": "2BKy3xtFg3aeGydiNTUnczJp5MbEKVU2TTMk6jhQAa9ujQttRkAPApoBy7jTenqBe1uxaVt8cdtdpHFLy8ZGJChN",
  "key47": "3NPuBYMaXQrnyAhPG3ERrFKn5iEp4xdqTe9VoPfhXsGNiDwpXRqPeVGd6WG2YXXddCF9xLvb2hQGPHTZTNc5RnpU"
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
