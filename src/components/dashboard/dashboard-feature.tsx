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
    "oqVpBvUAXaQHR237UzXsGJwiygCbi4S38zoE3bwg4cB9APWeBmaWqQWvWaPzCiFrtFnGsVnoLN1F9xmiQES748S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ve1Rvc36tC1NFqNQTngXwyKoyBjNyUkiu5on8Li33aKVwnGWXmcpizhq7tNPwn1ueumQKGFYW7CUQSzjHWuhWoD",
  "key1": "5VMZf7Wa7z57dGt2HgsD2oDkRcgnAfvC3xvwmvHTU4cr6oygnSGvDLvFMV7s7UYAw9tcbpkNjTSPe3EpPh1fU5P5",
  "key2": "SLbfuSXcFFL4S6DbjAiUf2WnStq4jaR1v3yvtR3ytEb9KLS2wDfPscmHnbexEGn95YKExXwYvVFdhd96C5nuH66",
  "key3": "3ixoPk4gD7RPNYaGBAG1tGh1faRYPopevhSZ6HSJHa3v9We8AVx5JJp5iyPL8gLyTioV1Buk7aKsdvkStzxGmPBo",
  "key4": "4BkVzgPnBPRKr56krncDaQhPpzENj3uwLTjSzPyPGTophe67vEx1RcnhfobwCKHufTz6YHTk23jcrRviewQwp1xe",
  "key5": "4sR5NNE1rfCVmgepYBvnmhkHdyfwwuqUUGk5hPVzMUFTP4bNn2s1Csrsu8aKTBSHL82S2BLDDLSaquRzWSnxZzu6",
  "key6": "aAwE424YufaAeFk5gPPWYNajY8CfPsqvwPnMCpmiiuU9b2kNQMpHZ1qZBP5pexRVxUoNoxsiW67Dtu19G7S5stk",
  "key7": "4u37wVaXGNuE6iKSsYrjSXLGU363DjFwFAV36cm7Fjdc21SAgJ2nZMwz6Gmy4vVEBQNXvn738a11DUCzvVLibhjo",
  "key8": "43QPkMNTFtab5kaBqGFDgdubyvq6gSzSSwenfwmiqiryV2824ULM5rCVfh7TQtuw7Wxan11teTKUXR4bgYQPUSrB",
  "key9": "42RLp4o66VN3Dpa4hCBN43Wuygs428y6e6sL2MBCeF5L7UHuP67TtePKxH6heL7A6GwRAfU7zcTK5DXF7zST5Gfz",
  "key10": "hjgRcMS9G3P5QmoQf4YfQJSUj1fXt94afGgTxv9iRVxzKpKitfgmKpjADXx1QTzcNM1XdRhaNnbKnu8dXmb3GcC",
  "key11": "5BTEnRH9Qzz63k1DQaMP1QM8gFvDKdQx9HoMzXkdCDra7gz63eczGEtqNJVX5rxc1gpMTzwcbeuFsm3g6tUuzA6Q",
  "key12": "bMHqsT2RkQ146WdxYoeV6mhAuD9ArwMBRps9kvM4FULJWbremYMsEAjyNQfreSKPV7Ruo3nskNeUmBhaj9UHn8w",
  "key13": "2Bp46X18pnmHKo5DM7oab6jmtkXMuuB3EpwcTFr8cFEKP5egs2mToug7VfoSJLN56H6uktDLnmYt72dRvwYXb8YW",
  "key14": "scCmk92McCvkg8ekUuXuT9U8cTLnDUsvYcbc1toBqoQMMgpFASEihgWwZP9NEx19rtw7rUG3Qr9o3WuncoGEjew",
  "key15": "4XXdjH1Cya94jhTNKcYzvZfRY9susiLzDeg8e7p8tvaVEEYH8EdGY1UUWqNKcPHrg1hCw2HcfnopdTR3XgmG8eRZ",
  "key16": "3AFa84V9BAwivhbciiRS7akkyrnsuANCAGiHifdLQACPafRGrk6Rgfwx3ZaVbcsqvu5GfYp2Ao3KijEmtLtWdi4h",
  "key17": "4Y65tVi24sn14oiN7DWTf8AJ3akEasw4LXFpXZU8uzPqNbSvKKW75nh3ZwPyqcKBz1iCQ14ycLCZFbDsnpwAAjZk",
  "key18": "L8tbEoyoj2yEPYiihuZwznQsxb42dnnH2WiNKev1Z1S1mCSnt7knaD3T8z1a3qqKwUdUSEsPRdRMq2pg82Dyazw",
  "key19": "5ALiTZZD5G1JrjEDET6ne9Nijs357iYgXooKisroUzGcU4bxeD1UXDePsiBdZ9Uq62Yh4zqtj7L1XzGKKtei93Gv",
  "key20": "3A5PKFKSAF2yMgqLhAVvzxcvBainnFiedSFDDwVEi9Zut6zQ7wyDCERi4D2YVGAXyYa2Hg4Z5pUSuZf42mVBK677",
  "key21": "3jeLgZLd5kist9hFx97X6UDERVUuQ4RcNrjqWzwGPoyzdLKmnGMF5uyTBgB3WTRTTYzauaovTpgQapayo5em8Zj7",
  "key22": "28TwdZjn9iWrWNQVR5WwNxPMi8iCwDRHuWXWNwHeNWhVhZB6rT496dp3MfmNfotD9ELBJkKnhqW2wbRAr4vdovnt",
  "key23": "4xMLs1CTM8opzL5CjsMEVZoaLwHNhZVFkKYsHhgBmvWFUeYDgnakaNCHXum5Gw9cCdbojRdtLvMMyEX43rdrvXC7",
  "key24": "4RYfTG92CwUFB4E6KpUi1RBtJCZbU9HSViQzpbwz4R5MaWSgFoipNM8m5SzwUGHUEMNwjLQ48pPb6VWqZRSVyfst",
  "key25": "fZ55xgwnaf9AP379SiA9y1TTwymaXzT3Fp3FLsneWLcU4Nxn2HPxkkza81yDh3FWV63JSv5syxqFxxDMU8BUUM6",
  "key26": "278jy5mh98GCi8RmnMX8TWjZafSVu6MKK5ZHACxM3JSwsztbEhkwQco9p1Sb6wokrkkoDF86gfYRDnuwGqTgLc4y",
  "key27": "ApP84BCNbRHxHggfjk9CUTZJUB7BsPJ8aN3WmZwv95HWKJw92TQNibALkGrCtQM15Uxuts7FhSfw9nYNihsfRZW",
  "key28": "28c9YnnytwpVFJ5FyQWjJdS1WNYnXZHdX5yT89JPdyGg9P1zapsg2xPYsb53V9DHo9PUJmkb11K87bnXCCBmw94q",
  "key29": "3ajzQqESzDVcBnxk3ojQNBXzBka4YmtPDc8zAW9JZUtK95Lpnmhz8acyzt6ZbAKPVgZHS6iB4wVgMqcmwGU4hE2B",
  "key30": "2ShBahCBL8bnkmjqRxdx7R4XXoMuVtL2QgLaGFbtuPWP7na746ft1xpZGMpTi2twjA9vUS7TBcyHa4HXupn9QmYQ",
  "key31": "5mV7oBxXDuFVmK8XXygoUZM3LfGBiSwoLCAsYuT6oWjJUpZKztLUVo2fR7oXoW4b4VSAX78yXBWWvgzWkwWUuSUf",
  "key32": "32EFFgYs4APbSTQ6jZCitVp9hEuE5WLMGpBSWdX9TzHMwvHhzzwVGmtbHyWxwx3jcFmK39owbdbpNdeCETZtCAYS",
  "key33": "4fveQcGjvYzTJaVShapToXDpeQBrfWpTgCV5o5ZB9w9GuRqVi7wcd3b73WnkuvrqWiJ1KxJTUnzrCsFWqVH8uANv",
  "key34": "HjMS22aG9aDXnZFKnTMuiiNAqdoSgdSGEUe49yqkUa6WC1DGEKGQiMtPDP9zsQa3ru83yc1gEHARYxFGdZpUVi5",
  "key35": "2QzYj1QrStUtKZs3tEi5TUjBFmT85fasvHgc2QUX1BUm2jN53RQCqZBeRkeCiwiKD6pWCNkzHqexutW34FG5h5kR",
  "key36": "2mUSf73qJcEGagLg9k589jMvMoSA2AnzjUJzjMbRCE9Gx7zJCyhURFvYMBCzDQGzUC68par1HkEt9GM8QzF6CSp1",
  "key37": "2vzkGxfzaYooMFpsJD6Fthew7pYThHt76f5xhJHFLv4eRisKjrED4xeFhCSrPhMrcnXdxCV2x65UDgwSUqtEts7C",
  "key38": "2eJV4nFvFk8YeHy7Ue2GfSZoCyNGoshMdg6QGTBfX2eDfsDTJ29V99waQ7kTH2gDhNLxSzfHkFhYxVzhTdkX4VuT",
  "key39": "Fkk7cSiXtiGeHKVioEUvoCFqQU1W9Q1ZjNrXjiMD1S1NjiNeMfYhtbK2KSRcuuypSiDjX3CJqHyGZmbAfktpUgt",
  "key40": "4B1QtpoPtSxCczA3jBSuaVXfNY5Ns8GZYpHXdVLSZ8yMYr7Ec2h2kE2Xkj922Xf3kSPUgEGjwvwFvbf1qFm2GW2h",
  "key41": "5F2JWFwFK6KENZRcKhHac4SsnzSygD3PaGwjHBNRGmqMUdfUMfBcepGABxZEe6JY6yuxCSDLkEZzd4ZhjmCWoaYn",
  "key42": "52S62JE6PFMKwsXsHwSAQp8o889yF5U1AYjRZXnNKwbiUcB2xQpnQK5QRzKZR3C7yA4fWmAwywKSgTeUddLnQDUB"
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
