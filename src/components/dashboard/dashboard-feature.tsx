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
    "4RAcMuhhLxYVjF47KKqy7YRce9pjUnfosQajjYhUr8G7CezJ4hLr7cMoD1LRxfUBHQiUraAK2MrXfyxvxKY3xSnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "icEj5f1sHwsBxRJ6vBydav64FQr28oBRCBJqZoEo79A7CMsSe18zZ1A58YKRnp4keoeh6ywSDJL5M83z7dhbZiU",
  "key1": "5ruvquXhK6gHvNQdrdA2ymdHM1zg65GP7BtDqigDSXVHaZYZNFjQ43hntNKuX5xoXGVYMHAVxdnfNW8djjbjhCRq",
  "key2": "5CPTFfoUYidiTKuqdGwkCvneGrQKDf9cokSqWrMV1FtBAH18YdjGSaC966en7W4AZB7jRz68ZapwV1SrfAWpRttN",
  "key3": "2uB5RtUTbqKQQGUvnAVBCqJ4kCNiQQJcAYi6xuAE2tiN1R7X8ToQ1zEzKcA6cozizkkFLVehK6owUSVHxo8VheKw",
  "key4": "3tavZNB3wvHYYtMFXceU6zXo8SbTBsmY9tAt2vNQDnfvJqMfDPCXwfQVGw7fKeKrn2ftZvJXVdnyCXCcQDM4c1ZK",
  "key5": "2x1ikbPZswhKuDs8wonEaG9QyPHwzoY2Z2YSqZ16jqKsC4yqvR99qtiMvbsZoNkfip8fa74HBTksFDcGkPVbMESG",
  "key6": "2H5K3aHrtCvJAsYBtWeVMXCnCoAkUsr7Ec8JZaKg6gsgUzS4hvyTNyY2uR9mnKQJvGvoddaJDXNCzSKPJd1TkQo1",
  "key7": "2hDcGZyWpfULCduat8iAt5obw2iAwKgSvcEzXedWCJj6UfGsewKbPkrMS6UCuKPYjLtdvQ8Mn2uhtY8vhE7ziqcc",
  "key8": "rdvUn3i7Xi7daGdVZ7oZWWqaXWD2EZZuvvkjCQgC7ZxY8kXX8wrPEFFWezj88n1MPfef3RnqDE5B87pH2RuwUyV",
  "key9": "2Mj558dDSUM1CnHxVoK5ceqZdHHAw2bcrZdoQrxVHKNfmHaQ4sUPVYRCFPNcqJVVPX2ViDbHJwgTBYp4uqkGijQm",
  "key10": "3NzWGcmdGVZFEZ5PFRrwmsS1EcMFg9sCj7EC2WurqKN2pELvzCCdDWf1X1rf4GwNUkxh3tnoMoo1RLXkThXLLXUf",
  "key11": "5EcGVDXM1MzCc8bTzC682E1yjqoMRbJ893aPdfZPZNQfBt9DeCctzpVCEveExujgsbo66eZhHsCiLcP4UHZ7r6xT",
  "key12": "4zeQ1NE4Smy68wVVffieiGBUrt1t2aFG3WxMvbfchgcPxs15PAdML1bq3YP62Rf9onSGEZduRzN2gayaM1GPfUTh",
  "key13": "3Jgb59T1XAh7cGa2TSxVMkpuS4rD7y2vGpnbXjMqCWvpWraEuZ26K4f49JAEHfd31Z6pCUoinVDgbXUqvHGPK9Qh",
  "key14": "3CaUUapDSyoPRhDGGJYQDiVGN3BS1Ls5Z4MXF77CqJSGGRhMVDVpQFYN1SSJmeF8JpHXkXd2AFCqAfgn55PcJ7jJ",
  "key15": "48wvb4ej7uZ4QUBAsg9HHy3Bp5P9QNCG5u3eXZFkMNz3HCtoBhubTW9nMioYRSvBTybSivChQrRwrxV9FGvLeA6R",
  "key16": "dpKqA4F8FHd79xyLsHw9vWfpQtxWLcfyy3hUmZTrrthc3uKevfwYUbpYpC7ds6Ma9QnLY1hSRSRTnWsgqj1LWHp",
  "key17": "qv5QW3AcaXLBx7deFVuPEqHbzabAnWL7g1xA3aoUW8wEPXnZhU6CfXBcVxNCM37GyDrmmUpV9GapoKvtvSieuMK",
  "key18": "3zoZpaRjrUrHWE62VhEeVBqHWSMCTBZj7zg94VhEj6XXFYMxRWH4zdE2VoJggFUcmyui1JQ99aZ4d2wWJqeMCgxy",
  "key19": "4KChdxBXgLVFiV7EE5JaqiPd3bFSH7oz5YYShhDGznH2ZJAGHpJ46KBkxJf5PMjLhbEGCwj2F3vij9FZAsEZ3mhC",
  "key20": "2kSGVScHFoLiLKmaHkuXgn3K9j5LdQLETdvXbXDwqsq632G4MQ5iRnkc99WYL4BwHAgdHgD7Ka793zxoFEKXxf3",
  "key21": "2nTUF5Nob1LQSNAJ8LVTycmYLz6m6ZxUjA4jo9hoxVcsnPy4EW3utDmnRyc72uAozR8QzKYCtJE5YDCwLr7a7Sdk",
  "key22": "5E1sapowsxVPUtuvkTx3YHmR6FAGBNzw3XX9fCmbVsT2AxDncASrEjKAkUqqfDmh29BsoecbHDnKerjy6oHSRox8",
  "key23": "2mesZczUneTK6N8qvQvi8i8byLBknA5nesz4thSoaX38sERtYE9S5thJv3AP9LEgEiVDDSJ6EdB5h2kBnPRSiK8V",
  "key24": "dpRqXmm3k8YMuYRUNm7r1gjc7TJ9Et77159FnzXqY7vFyxp5P1rYYXmGN2a9WxFiv6LnnK82RvEr3rnRehTS1qT",
  "key25": "5NMBiiS7AMikTFDZKShf9BD7WfZsfhVQbSCV8yLtf8oUAdqBCTd3oKQsk5SiN9WkmoDQxyxQ1GJLvddjyJUeKtJK",
  "key26": "BrgtF36XeukffDDFLXmfugEF4eHXAnt9VxEGC54k91BjCu3ZHgQq1iL7s3NJ7vrLAhoiut4qALz6QbgeojAdLWG",
  "key27": "5Ri1maaCihLFcM4tjK8MDLRGF4ZSw3Y1r4VBk4uvRYARwJGgtDjfhLtokPgoSgvmXTjSUQYuC6W9vd7pspYcvM73",
  "key28": "5wKgPhy1miGtsrNBKinHxURrZ8aNVBtdELQ8X6V6pj7wXYi5D7MdDZdsTpooRns3NtDML5h2KzfsgseLnziWGhYJ",
  "key29": "57RWpCcaviH5xtGSvk4CLnRC28GQwk9n39kJRT9cr729CCzEUdrafK2SHViNyP677WBUtknJuEEFWBEGVh8tGnu1",
  "key30": "2LYqxFhiCpzFgJVz19gKoAvvPZQxETwUrt5mHXaY8hsydwwo7szaqrhH6FSnZvKThWaaTDASXJQEvJkqbqSimVFG",
  "key31": "5F4An4Ajrbh7sTQYCgFuKf6aGg4L1Gdke7eTGCPsLb1T5KZ2smrtNgToDTJE9QKFAfSYFCPZLd9eTCiQS7c6AquE",
  "key32": "pPxjpaNkvRnDTrW3Gj6zMXGSfGux2s2tGNLcNBPc5azWtf5mnYiYdyjxa87huvLSiTqVsmTWaPAUgDJW85tRqat",
  "key33": "371P6bmhUE8H23eraS1hPAAjaHZ9QM978mCWnxdqqahTv5PFoKYMAriL44HgEdQMVGcVZSLPczdPWmXp7hVS4eoW",
  "key34": "32V2iNj85fesdeRNqqHSdjenD2aiRJ6XqjyPgb3SwkpAVjdoCohKJRnsCgSTCtyzq9SB4hjbnu1GjWjUBLvgxceA",
  "key35": "2zFsTqyovKGxyhozVfRjenYxuiwWsjmnMrXtiaersXcc21DGXYjEhKrKrh2M41rvJFzoukqdvSmhi1BP9u4Hr2Ag",
  "key36": "XjBaXV8Pq98UjuFKCiuq6h8DLQwU5jLeVxUEdzVs4y9WBDQZdiC2LeBfdj8UmLUa9rV5dCaGHVX71ZZ3a4nodsM",
  "key37": "eKzNknYpHeHWiwhTMHRKtWmA1FuZjqyWQEp3BqqRADCt4Shv4pPtXBLMR6ysSBqb15uRfaf9uWiGfMPa7UiPDkv",
  "key38": "3LvYsdpJHsBmDjHcTe9XtQpYoeuF8N23rpkWShbxqZXGah3LFzHjHrbXFuJmebgeQxADB48eB1yX8N7CsDuJkTxE",
  "key39": "57aFjWsePv7XAJoMiwGGWBcyBbS35DsWSjPAP3ZNbGqXdHwgXv2c47qqVhNehD1znxVyt4WmSjNDnBE6BR2FP1dt",
  "key40": "2vtDZ1DtPFwKiL2zyCHsk8ZFdmg6MuKQyxzRU5rDRqLbabgkdkhDGgesbFm2sPcW4XZZB1on1wk3s39Xz8Ug7Txm",
  "key41": "35ogzzbefmJ6nwrbCQGhviSD3zpgZz8be8GfRaw6aZnLsnfdCvzjfGyVG7YtVFHT3LUy3sRwnsBCMSRj6HcVaSPM",
  "key42": "9A9LvsEipi67KviykcikxLaPH15a96ZFgUNarLhMr4p8Ezo5Mn8MFjeenBYarZyP9DU2LJRi14GWXGVzkaehJjt"
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
