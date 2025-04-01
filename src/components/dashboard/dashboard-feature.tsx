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
    "2HzLbKxZuirDgj2HSj5tDZb48W7U52M5NcYUDDVD12VYUU8G4rVWJCDk4bxbfVXkk6e1Z4m6QLD9keTKz9iSrn95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YukqshL4zBmyprSa2Pwn52cRwsnZfKxNASSV9vZUch1tqHEUT27MSCufR1MdaRvLEHxBTcdcrngNqbLM37itBa5",
  "key1": "4dTge6DYm6nPE16gF59bC81Y19w1yyRsdzppZVKEuVQ7p13A7yZQPCWPXv1xY2b6YY257pQWFcJFf8PcpRqh9MbR",
  "key2": "38m8gZNgz8ErzvytTu5nb61MLEjU7q5R3TnHQXRhGBtsKsW791t4EL7CHgEz8BpNbB2GXh55U1AtKFHVYjmRVSy7",
  "key3": "4SqwW2jMj9kpNgzqF9PsA2vCgB748CGqChhTxnNZtW1tvgpuURjzL3JhJvN3cUU8g1sn8V7ztF6H5st66CedtuAU",
  "key4": "3oQqVgfvdijahHPDv1GiyFmAG8mD17ooJzRsnHyoUx2GyNYWqRdNd8HDeMDCHKem7DuH8KbdMWCBorUf6sz42pgP",
  "key5": "j4UZWobJigqhp2vQSrNCgspSK6oeLKmC99hBUJe3vr53nBQfqo2eaiMrDyxiZ6LB43W4Byw8jGY95boR6xy86Jr",
  "key6": "3kJPurMqSoQLxc1BSrXJ2rsiN3BVBfpKYXKCxZ7xot9zaJf6hhcdYNZx2AyFUYMzHpcmx4m1aCCZom3N1EcC17uX",
  "key7": "5ZY9h3q3F7SAoempJCpuXi6qYsfr7vcf9BdhhjRD8saHLNj6XajzDK8YypZLyy29Ja8SXCfrNciP3KS4cFaSKoJM",
  "key8": "4Q5PEu4NDJPkbNd2o7ZVQJXPk5TsKiibwHyYYipeuDxMpawYxqfPzj2YFfJp7pP8XzxuMkX16KexrmCRTRYQEbc",
  "key9": "2xh7jxQNWUo7YegiXWM7N4ggcSgWF51yHSpoSj9K2EoSfDqcynHnRkNNC8jcFc9fQnWRwPBtXFFDtT8kFBYaB34M",
  "key10": "3W2ooK5CYgADwwUQg6X3ySj1PGot9x3T7xkqqYtcs7pzyENuASR74wyPLqvxuq54zUUiAJxUgd3Ho2BrLpoWzrBh",
  "key11": "4hahXcCbM1pArK4HYnjZXYADnG8ypFHVeMJThJqB4aaZeCqYtX3i1wu2pu4dVDUvZcfzw4udTrh8JZixXYZEJF9e",
  "key12": "4VuP3p2Vt3LZpUSZH9qaLws6TtAtm4snFfZKbtu4ndK1aTWogc8DaZpLgEDSGMznRhW8bTNPq47WeCZuf9G5VYjR",
  "key13": "5bunZwybm2Wy1HdrsJHx2cR6NJXctSZEpBC5NG6WDSZu1VHLXFS24jzcLoSKHadVbLWn1Yi4b6mTFQXiLWCqABBP",
  "key14": "uSYSNEy4hoXCGZ7EiyuMfv5uDb6CQwSQz2BhSfsEWzpaPj966EfQ9aK19aAvWeYhiYudkBgfsYBssaCZ4uuMyRi",
  "key15": "3EzDLaHugy6FfciVa635B71q9PVrAU6afRoD6Fsg4SARxH8i3tcSpq2CqksirmAvCMAsuaKMVMag4axYFebVW9cG",
  "key16": "42YEWgQKTno47TDx5ohAAHASCJvFJXe8wXn8AYWDccMrgnnjpSfcBugjDwHUfAUgBkLsoMYFWFoQM17yuam19YBL",
  "key17": "2YCnP3vDqHF7ztPizKbujV9xQ8BT99wboGJWxdag6WLb2JShJmmsMoZ99PGiqx8mWM5NhMjR58dwKMPgMKuzT4fT",
  "key18": "xKf2PQeWEXmtBB1E8gM4SSbiTP66ZPN7HckRUbSB21nNnDpHgW3myyGM7KCeWX5f6Sswu9wygANFMtub7xyXXKJ",
  "key19": "2fc6sn98RRCbT3BRHQx1554oBdWcAhN9ktWuuXLeebwkqVjvboMotx2ZUiKra2jWEuvq8y55qJzdwAN36rB8X23G",
  "key20": "5JVSRo1J7LTxSM7RwzUeVexmW9B6ZX3nKQ6w7UGF1qZuRsAKibvFZMjHnshH3Dwe1ffcnGjtmXQCgEQTfhSfoN2H",
  "key21": "5UJbAXPArs8m4ymvcYBCEjHBHnibZEaicbTXXd95nqGWfSZxC1SQjVWkwcqsutpCob4mgrPVTMy1bU47r4P9uHmP",
  "key22": "3JMANpJ6j5tQkXHrsRigY8dUWSTuMuDvpQCGfgSpeL2euC1DZhhKuP1PXbTP1K5q66faza7troDdWchGf3fP3sqS",
  "key23": "5jgRYxniqRwFruxETHT8BKenVa8iaxCszwHUE7U6zN2FYm65N98dtEKEd6u3dAxSbUPbg17aby6YZRAB4VszhJbf",
  "key24": "636AGnvsnmuRvjiPEUp1YVGjgXAXn5kt2E6YC8CMCtRQpjEW2LBLCU2vUQxDHFXLeteubVu1Yy99pmp1Kfu1zL99",
  "key25": "3xGPyQeS2n4T3gJPv18SGp6hy7oxvM3EWhKdEZwX4YHLEATpkcYjdDVgHkb7G4odpwgGGDztwqtouhYtDGejhVRi",
  "key26": "28feac9Kn5yePAjPkaSa92uVNgej8mpUSp1CafSxkFi4PGVVLgkuFa9ecb88LrF5iMrKv6NLNoYLUxaXWmSg85Wu",
  "key27": "4ru6qQTqn85vdxt6YnDnSEF6eStpfg23zrFJfF2qfBfnapm1ZKF2v2D8VnRqznBKHFMG8dFLusmUomr8wvPJ2bf3",
  "key28": "5diMrJat9AKXk8hqWchigGQ1gxyM3Rf2izNrYyUPe4hYoNMqEi7Qv2Cvfa1WfArPvu8Dq4zGFYyFQRbBTi7wesRv",
  "key29": "2t64F96f79JVc9nv83PtM577TZzELqaSdhWRPetugu6hpYgw2meSjU9QfMXm2N7j1F3qC47s6tAEstcEth1s94bt",
  "key30": "4dtesqgnvD2vkPahQ3f2VtVJTXnMu36sw6zUtHP6SXtWWaaVUJ6hY2ayBZ5ojCHA4NUpyqs5e5idLg2defit96Rb",
  "key31": "338CrWBATofD9m628W9m4YS6w8zGErJvoU59XHn8r39LwEV6uXxV8U3G2Wtq3JhBn6KE2j9dGCyQS9C5PuLciRNQ",
  "key32": "2yzjpT5QBqaJiqjXCsbHmTZLoGGguLirpheYNEjWdqw5Q46HUvdt4yYCWqthU9FfU2yHdQQHw3ejiX9LoLbcbCbJ"
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
