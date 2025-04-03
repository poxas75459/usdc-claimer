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
    "2sR4ciAVg2ftD7nJKDBrXN5jeC85s7bjnpTufrubCrGsE6W8nK3pDkMQEbPJcMPit2oMFhfBYKjD7bNVtY4tramt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "478TwjdmjfpDcadBFaQYZAujSdn33tmbXVcxAv3cS3CYCjUAjCYg1TJ6ANtVHxregJWGL94z4pqyKpHNYxknexRC",
  "key1": "4vDJY28So7P7QpJRi1fScPwCyGNfzi8PB6g7nvFsUMarq6rqvn5YJ96z9MH7yU2Ja2bwfPogevXQiSrSrK9dCcm2",
  "key2": "db1gMutDmRQo9XUedVxQHksCc9BxpT74KvxKSaDZqTBp1XhwUFA9GDiEzc4ZZU2utA39UN7peA275sM2bhijH51",
  "key3": "DmEWr4BRz3yhT3WwkZduLx5rz3YJAhRdPr4FfhMBLD1GUh7xSfqd6hd62dR9XzpLCQfTXWjvZ7ZYvS9a533ZqXB",
  "key4": "2PDrFVKVH4jent1kiy32gK3r6r9Xg5KmuhxgDx9eb223FZVN99aCH5pBNZvmz2dG1eyKkP9Jxd1QFbm5aYC2QBG4",
  "key5": "2qPiZo5bKzPdcw2uAsbRw4fbACND66D7MGjhsZ5yrbsEMxjCDetKzg2VtS8HJQkopSX8kJKmx8ute6vLtoE1ydYt",
  "key6": "5rvm9sczzo2frFuspSyXQQZ1j2zG1VuNJJM2BnjfqM8vDixW5qSR6b5GiPeTuQwaHSRAW15R4i2BNoGNf9TwSPLa",
  "key7": "3ihpWK2YhuBc5sPjxpfbj3PQNH1VqwnmvdXewv5KXkYfeyBs2oevPM1686dFeo23Er4NZDNurbWPtMzztxhMptao",
  "key8": "5KaeGp6F6TDUEKBp61C3NwWRwMFN5yFE3VTvJDAqVoKtnrJdZqJJh1FiViowCUqgfQTitYCTEYNhpeC6thaGevZF",
  "key9": "2NgaeHUCaYgEDxPoW4n65xXHx5KMuJ6oWtf3ZSPJCE412qYHTndVVfV6dASuaDoCN5Eqqvqz4xekzfQRKGCXbtfQ",
  "key10": "5sYM8qcX8wvqSzGmWG7gq3zWgxSuKrcSr8uBpVn2e4srSiGZF5VPuFHDaDdpJuaDKadbKAsqLU6bjesJdQUEPqhG",
  "key11": "4hVFaJbDHD42aqzYrudEYC5tQwsiE3WyQ8uqjisgm6GzBqQ3ubvUcx5zfhzFLhfyopTuZaADmaeQQTa3BbN9uifU",
  "key12": "5qTCKVG3UL8ryMbh7ha4aw6vd3Y51FAXcTPFvh2k76CmiuqUzi44b6yaX88WNK5YmYs81JDqVNevY4RTR3NJBRah",
  "key13": "uqSXthoDivZzJAY8aKe9MEshetYfPeR92E2A177i7P1Qm7nELM4FWKo6QdKYALep97dDDxSXJvh7kdnrnAjcQ3D",
  "key14": "4sFqGys1r49As85CvxEYgt75L1cVPWNZB8EgZoTYZBi3tAYZJnJZA9Pw4vSruRiGLbj4QprDmhFe45JA39EVxbZe",
  "key15": "3Qc77BMcYLr4XCvL8z3fryYUYj58VyYqvouyZAKXE1gX5A6w8D3RgM2Ku6bSUKFEG45byg5fnDtYMEFpFT3V97X7",
  "key16": "2WHy9VSYSRCNFCaF9gFAboUr3uKGDqChrKMd3cznDzreLsdQZJsknFCHiapyaZje7EtRUSsLSHEeobcetMgHGuu3",
  "key17": "2kCsNymKyvqBQhC7Vqgmo5k3XUDxBQ7fgt8dPrWsYmi6hhmPBgZvZuMcQSkHhQfrkiF4oFkz9pZTgT4LHn5MsNx6",
  "key18": "3itR8XGuppNtemzyhPtMcERC6Dy39peiry1m1t9Eia3brKHGQu74V1sB6FL7Ng6ha54jiJHWUyFGikd7LDEUCHd7",
  "key19": "PMvfH6YUNumVsgtKSujWMj8nBwuQhWTgUpVGVeFd2jBMRbBBvpntoUzN3dgCHkaAD9dHKyKo46GPY2HYYHx4ter",
  "key20": "3ra8GMcGcPwfHPRo5ThVz5LsXbG1MuXkBvnrowVnWmsvWfDJwhnx8i212S8y86EVChs4jedB473xBdAswyKAeWfj",
  "key21": "5coH6dC1vaczgQAfHwjEXDF8UwbhmQF1tjupKFcWF8duNoMqQxXYhhdhb3kYAFEswCGSs52uNMXB3kBGqBbkpomy",
  "key22": "5PVTFQHa7xEuivG4ZFXMK6eeVWs2h5sfFeYwfomxnpBR17dAL1fDWeVg5TCHM5mM4ZQiQ73d7DepttmDAtHXKZo2",
  "key23": "4p3PeEeihybdFRMSuHJWsJoAE8iwc8LUnRTKChKVEyWCYiehLm6LsxPjDyfuXXNWUmXUmemvBHJzWpvgxikvqu76",
  "key24": "2uesmwdqiCrESoQ7Dj21NfeBrAwi9eLiYTXsap5uThF7BLMSgnFTizzu2wnnp1kGAS6SPBTERPi7B1cWX4oMH5qh",
  "key25": "4kiRFYwHKJ8nmvkZcYoDXTdZdNuBUyqF4kJEdGYu33VYzcYYouYdHKLHjG27WfsdHSbGaE1qpEpu655EN4qruSVZ",
  "key26": "39SXyRQ87k7BfFZJpyAPAqzbT8TY3o7W75X1gSa5sptchdp5qTKJG69ut5z49AQnHUfb9VM4nRqrPM5wx9T5s9gp",
  "key27": "5vnPRUrrXk95GmvNGfbFYmb41vnjSUXUgq5Xs13xj6NV7FgSrZandPxtJRAK6Z8tVByBg3q2wzH1dheNgJAmXtDH",
  "key28": "4uVXyErhsN9TyjzGcz48EXFPVzFDud739jjvTDZ7TSVwN2YXCbmBmbRDV7Sp25cLuj65bJPbjLgo7o6Bkgrnouxm",
  "key29": "3qqJBZoiYRMKWmbiK6Wak8zd5ETGVmB6nv6v8Gm3LUbxC8zjfhZPsFSbVzvgTwdevTvy58Bx6ip14SSbt6cuiKhQ",
  "key30": "4XDTCARJteSURcQK153HWPTPgdRCcTcTrRj7rWBcUZQ4NznufPyzsbELumxhA36GE7BSPGNPKuEVsrijkdj3vSGQ",
  "key31": "2MsM59BaZpjNkrYjiu4c2u5AVj1YucCdWJAhBZuuVs3QTah8hb23CkLZjf6tmUkxP2wdHwKaRRo2LiqhECoQkDjd",
  "key32": "dPZNwv9gRA1Ecm5fPfBcti7ECqBugho418uksyBFEhdZQZMLoXjV8GDhQ363XHChYyBVjsr7tCGayCp1YsrnmEF",
  "key33": "4trwe2N7NLnCX9MMFMUCKeDG9GBxkAPqcq1EtmPkWeMEW4y28y1GWUpNezhL6DVYUPqywJPAPATwztpnG5V7Rxuo",
  "key34": "rhFojJ1MCWrjRAd9GiAN5RNmHFnd3sk4c4DXL4M7otWscjPwVeES3MqtKCmiMMaY68tVRyoeWRFP4ZMrKgBr3gz",
  "key35": "5c9Umu2AbBLwxCHk6YbeeGPUReDcTUYAg2FoDcaLyfQjprmqifcnGySnKju8CrL6g2Yi6ZdnDtaXTYpvX4HgWzGu",
  "key36": "4J8ZDE17XaCLehRsGZYsba9C2SgiChX5kMC9bXmYHHjUqQdnsGUy9gc1fLHhrdC2dGGMAVQYwFfcRgq193sNYnuz",
  "key37": "2fWdS6ZvgibaWJzQeDizykEgcBDaYbWLNp4xieVLG2TSkXDqfe5pTW4Vq9Yinmq3j6bJA3K9JCvKbk4zU5SNsasC",
  "key38": "4i16my9nfscDsnz1kXHe8EQGsJLSDFu4jfejAHQSPt4V319D3v7N457oqs3Z6QjTE9kP7AKEk686YFpgjAzHPMNk",
  "key39": "2gJguNAKZBnwcx7LKvmVnKB4HomVuEN1MVJnhV5v3ftMiqwN4mQ4dho3b6XVzchcop9i2CUeoGYva3Wswucg3DoA",
  "key40": "5BFUrjmE3xDjwkmW8AiJPh87GFGgdj2XvhoWsQvRJvwnCSbVaj1cpowVy4NbFZYYMX5xEwmEuy54jGMVFYCGUub",
  "key41": "2pCkcBn5QmpvMoECkKSbYERhAPGrhUsU73o9UcajQ7TqD4rKs9FxHT86XAGGihv5R2f86orHjrN7XjAwWWtpdyBm",
  "key42": "qsbgtSiNaESiU7SwdxZnAF1SdNGhuZ3F36FGbK6wdNAsBXtJeVxLDhq3wHKVC5MK89vaoT1Zwr52oTJ2UGsY7UF"
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
