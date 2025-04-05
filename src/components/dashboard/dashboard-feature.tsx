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
    "4XtmMfSTuN37zyjZjpajTsqQDkKXiwZW1SXmFay3yBao76NCrKCvBxRbiaCEE19K2gfEZAXa53QgrvAJfvbjEzgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Gsnqj8bamh2obCqKu3BZY3Mny5FFL6vftD1AQqCfwKngQWHsLjGfUTDyJgMR57y6zUPxapvseG1KptgWQenDew",
  "key1": "r9m9Fe1yVPCCU16uqGA7Vtkn9JtseG34aJ7MGw8f3goVzbmAuZ6RZ1b9ZS6kmu5WdyDLnMbBFhV6g9tUXDmVHCz",
  "key2": "4UbbcYG7qu1Q9wQ2GCEaFtbfkUTFyyvACWiAkQkv3YWHCw6L5TpPudmwCscJgJUXJCr6WzGDMrxkMFzGcH1Cq5si",
  "key3": "5JV4WnGtgLLegezVJzyWp4bA4yNgenAuCZaUt8AGnZpFkLidAvZHJZL7eSoGhftKDLFj98cGK8uZMuDdvD1dYZL1",
  "key4": "4SD4ha2CYAMb1ynsp915mdvyQM7raibGw2QuFVRv4cbhTKPJyUaBD8HwHoYsitzcJdbkbgw7J5u4hFLTJnpDUXGM",
  "key5": "uw7zy33xJtdQS7XpLCr2hjsYg4kyESp4DYSsXgci1VyXBRdZ97sMUurtqQ96LsEcbKrfqWEyqRhzArr6NKycVSa",
  "key6": "5HSuH7PT9nY81MzQbCaiB6XmxM5CYFeW2Ffb3amLBKKZJDcHi4n4EFPQEwGbxtW17sf6gx75h6acupR8gzZpto1B",
  "key7": "64vQsxZxkR5nJmskFh9pTxR5UKtMrsNe9UNXrByaTD5kbAc5MQZj9b1wJx3hpWne1ZLi5YTofMq1QVfdmYdhFJ1c",
  "key8": "3zb2eV1hJTbosmcm1A7V9iPecVVV5CtX8A2KXrYpwzJfewzCSwaSyuatQ8CdVET9kGSnbCkmrM6RxiDc5HnTyGzw",
  "key9": "4bZcH8g5uwGDAjb6sqMkLUj3F8ELmdaupoJjdvDxjAVEF1EYke633Z1saNyuaqSP7tiThHyC7Baxtk9u2nH1Cxv9",
  "key10": "5FJZodRX8aW2YDujE8tNNhvVMJ4G6zuLwa6zy28k1pwAzPjuQ8EkKN6FGtEzPeNaAbTscxCK3BBXDcgJsrgc4PDo",
  "key11": "rPHjpX5ZyFaipQ3HMS7zrSkahwTKTjqLyPw4AXRmkivFZTgd5B6Fh6CqHyBfHaCZz5NmpnvW5bp83Pt5pmfHais",
  "key12": "5Q26gKfJ9wnJctnCEPL9sT4SGJwLwDtr9MGzbX5XW9QfYRe4trChGTRQyYBhHJfZPv5W3tpTSx5nmbUCCPWUspKM",
  "key13": "5tQMGzc7g7Fuoj6PnfDA1QFTmmuZFY25jgk6x1CwzVEh9MJ3MPtZQNQ4NeQiihVDohvum6zsb3csy7bCqZ3mUU7q",
  "key14": "2P4A5W7Jg6HWaoWytm1QPqcDbNWLmKXENqKiUv11CzsqGRhxwNatrEE1aZX4f3tFBDWXoGopRBwiq53EfVLVUgWx",
  "key15": "4aTewfQRYPfuAk43fFbf2ZbZMLmsRkk6vswGKE6UsXMyoMnEnRLy2xP81GLW78umk1VWG4LbgEyZ9DbFjcQLE3MY",
  "key16": "3AuyS1hy9hFmCxYH84eSYukrkzL75Dt2WeSdEyX5F79joFn3gVDu4Vf7VjVhhjpEtgwmSwAqnFwQ5tjav9FYmkHd",
  "key17": "32UKWCiMht5t9XUBN4GAJHL1mma1c6Z5SCKpooJGiu47B7uE6Mj6VsaUrYkZGjaLW63BLHeSgDVaGy1zzkCWMPfx",
  "key18": "4yxXMgBF1moJVxAv9m7eHcEg1D85rCk1TX4FXnTtdeNwdacfXWd5R3Vhu7iiRdZRF6hEZFgERai698WYSdyYnGML",
  "key19": "58wGbBUfk4CL56mg3b5xb8MJ9Qg2927sFiBeTrRBNxrJamukKB5pEpArZ8LdiyXbyA18v7er62HPvhDf4UrHM2cH",
  "key20": "29mjy5MDQ5SsHCRvrVZma1NzW9BDW4xRWzqpWkLAYPbi7otqMA3cuufcCiYcegEsgB32FNqJ4j2PjkLgEB6cSeyw",
  "key21": "3CjVsrK1kdeq2C2W7G59b7etjsYSUqTK5T7ourWAFsWBWgjVLsR5itkt4hvRuzrST2bxoKuCmQt4k1J3C7wtgKvq",
  "key22": "4QUfngALp7Xq3c9RjGpgotzrNwTX44PfWpeZ51JT5DqxSTM3iFYdGC49HWAEfxMMnxwAYBqfhmXX6YR6fYY8jb99",
  "key23": "5mEyDyW545fW4D8XNsGdqzyaDVSfKXhV6PgRPTdEW865WFzSv11R444gvkGmfPVdMBsuiqFx1ntKQVpPaEMwTTvN",
  "key24": "4cbHkoZqgajYUqFaajsb3X7fheyR8ZYww5aFSwrs9LTo2of8wZtcYrtqqVcs86oqvghqwnntYk6zBF7FGKDXxgNf",
  "key25": "61x4d59M3YunvsFBS65uiztFxzkPMoeg8U5gLqFLsxQ22ENxEYu9rEiS3cua7GVk2w1FDHPn4jabBJFn7Dq2PmGx",
  "key26": "4eYhPG35MFEWHzNfoYfnBe8HvdvKaR6q2AiujYdZFdVD5c8Pm8AjsubgSByCskghER85yfB1tegZnuPMUV99oShH",
  "key27": "4GiDFcPHiGAazHj2N4B5ZU9xqxVhhuCgmuB5CPGfn2XmASGPE641nzP235rPTSpEY5XzXR4Vs9mefhKu2skAkTsQ",
  "key28": "32KSaGuixH3Cw6qnwqa5Sr2na1UH7Lv1BrbvQZ5RdACsMTSieuApBFTTV7yQ9Rs6b6CPZqzzD5VeSQGDrAJXoWtH",
  "key29": "3uZPZXFqmwBRoD5MwrwwzwKRyXYedYahMcEHUBHqrqJ2ejSnaMmeXnWsxudtzkgW3VAMsNWpkGATjgSXEuYEdL1s",
  "key30": "5DpDNCwfmfW5omPxRTFtxaPWtreQxkom2ZUAezUtN1TyS3zbF2qyF8MWGXJtpKEHcbE88Cbh222nTF6G7tbAgNN4",
  "key31": "4JopP4ZvMwjH6h9aPMW2fyasDXxCzQoqkKropo6HLEpzuSuuHcSwM8pGQuDSPr4yhiitKumPxsVYeDrHZ4U47h7C",
  "key32": "5VJrR3ax3rZkJHHfNmjobmNSAJzCsDQjyKidDT1CDPyqDhpKTvp9duhub8RAwg1Q5ssMVZPmnrpc3TincZ22JgLx",
  "key33": "3frFK8rNwsY1rxYQy8m2QsRiCzZ9iusMVua2PhBv683djp1HYiuYdx9uRqnPMRCTv5Hpe3cufgajwu5qKKg8mAus",
  "key34": "5F3u7jHHhkSiohuGmRCxVWZahKh6Kd2swBXWTQh8GWkonFRQGGYfXunbxV1wxd8mxaSKReFNY8GXuewsyGKRhZK4",
  "key35": "67NzKTUVRRMt513HPXCVdUpfWX32RjC9Du8JvjCTaMYDK6DtKrSFU4WRwdia1nNbSc7tawGGXYhgtf158QiQ6HEi",
  "key36": "5yqYStPwmgvd4mdxCtSLeHyory4aUEmCokN6ekArKFirx9J3EmdjzrgFN2FhR258gcn2WjHgLQvCupPc2uEK2js8",
  "key37": "3TbnXTcneLk2eNDDxzEurM5tYy2VXYfbb18vvxfDzjwtgsNT3eFqZy1cnJC37cdYMWuEVAotWXkwcwNSE2RYid6t",
  "key38": "5kW89Gh5FkpdwfHZURwLw3UpnTadjyqyeV3QuRSCLTgh6mQVJ2TVdNz3QLgR6UmDL23CFVhM66PjPHq4vzcpm7dc",
  "key39": "213P2oaNyuD16XKxkM41FAZzHzveQZB2tUq3Kyq3csqmRFomKbmyRf7LQsVaph4pwbZTXfEFxvdjLX9fNhFuhNY5",
  "key40": "2ci6THNWHzNnnMk8c3XmRuqMrvWu9nY8DL5RLh1B41h6TAf5CyDzRrSG9bBVeHVtRS5LAhFLpTtBz6c29zA42Thr"
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
