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
    "3fxRV3KofkX8pr2jUYN3cv31J8yV4eZ1cfGAjyfmQRwHPPKihPZPrZrQ6jv17b38njrhqY1nF1ThaHk6Xoeqkes2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ssQV9fsrFnRDUkj1rTnBDuBF76NEVqTQvG7VjyTbDdunUjvD7BfarJp1xjpy51dtQGVWyQ7Eee76umw7J7w7hSN",
  "key1": "pa6b4tHYKZNJ9Gi1DFKJnbvwg8duwevAKtcpQDeSnL7acEP46qg6J3bLXVN68zmZs9PXqZfmfPGW1hUkobQvYBd",
  "key2": "2mPPxQ2zNTdLqa1vc7BPKXWUxKYRNTU3XSdivt2gBEXQYGG8TDrjCh2eXBF4DSj2h7jj6GpopgBoVy5EJjTv1TCc",
  "key3": "65ab7LysTrP4oLcFLGPU2ovgs5i2tXVdzjCnw1CGUGiG1FHyPAhKQsFVV2TLR6qQr2FhTu9PSDxxJVJnDPxFAn3o",
  "key4": "49CYYchcGk3RJqY2Z5ebohDdfSQesq22Tza9UrJSUwXTxwEoHsbXZ7APV3ZStjquXN9gWoMapPdHDkFwXXReRrwY",
  "key5": "ms4JooCwDxvSEq95oSgcAnugwJVZ4wUiNCJXzBBZZ5pqAXjSrxCjEtervXbXsstJGLsPJ3aLqV6YEYA1dRxYKbP",
  "key6": "5xFdSXrQLzLuB4Je6uLQsZwbg35VmxPidedkdosBmpUxmqtt6VEAbA2mh57r7gHpYvzLVcMXLwatMxceM7e6XAAP",
  "key7": "3rb5pZ1YHAnT6ScT8Fq9RzNvWowRFPr65hUhdVakQ2LDFCr5wPbfPgiaEvbQbVvQgAtvQzXkWnRk63Xq428719DN",
  "key8": "tCdAck3Jhbv2Na9Ab9gAz7JZWmcF3wfVRqjuitgna1hP84KsVbsafVfJDaHxTtMU73RzGo1ZcFz958ynU82zdUA",
  "key9": "3PUNhCBGmhs6X1ezdq6nnHvRGxeaTwQJM1ZnJQpoeuhYenwfoQQHYSr36WWVaN9ZiQYXcuJ5ptXnWGgTo7AZV6c",
  "key10": "5Aij8MFaD3hbNT9k27EY2R8nkMiyAkY3jAYZfCSFouoQMa5awRAXf76dKfrvCDbYPNZp6r5qkQww3aonhBgsJRzU",
  "key11": "5xwaoCTdwokP7s4C2BL5NKwYviYnh4mjvuWbhFxRViZXB8J5xVkytLbftXAoPeYJCW8eCiCkiKvFMedwSaZQjUFy",
  "key12": "Ux6mMu7PZTAnSKBdhqiS2XSekVxa8k5giSQ6vJVrqmLhpphcS2H1uJbZUCUPsYjnnCpddLp7Mzoo5dqzN8rizfe",
  "key13": "53fPKf3hZUPeQVAcQ5JKVUqbzPbxuVdqAKQ1QaRH5FcZe8doqt4th5Hepmybwq9ZrkJ1jUaUSTcaJjN1hSmmbG3b",
  "key14": "BKt9DNcQRi8mxybz7x2xeJrFXeyAWZ7Wr6kt6x4cLaDTRMAjo2oe7X1QoyqcKey1FLrQ26VAXWa3nqQKW41vEaw",
  "key15": "5GRXsDB2NKzDMUiHdv9CBaDCJF7tVFMMbQeYPDVki8j9HECsP2usdnC7kfYfGvNTLsTqfsLzyhTaWZKWHNgg5EEo",
  "key16": "67br26uimShtAXYZXQZrxmXChTZ2uBJ9S3vQj2tvativUssDfLUaJjYyNVZT8Cdsr3vzZbgmf6oPAr3rH6yeCtGM",
  "key17": "4XsMU5UQYLUJcUDHUCcURQgGfwVp765dkyZgSoiRrRwhC17aQETDLdHqn63aonNEkAVzqy2qh57mkQWyxCDnqn25",
  "key18": "2iZGA6KBpjR44MPS8zLQmN9daXFpSwepnhHBtUByMCU8ahaLUZSJTKVk4d8yokURjdzbLSY2bFJkbadrz6gyP4Qo",
  "key19": "5hhWZSKMTzargrZR2hnYL2mfReiVYgsesWJncDBXRR5fc6Mn23tF91y2FgkYnMCncxyq87cuGGczs8ao2X4ChJgv",
  "key20": "5RfCxeKGu4XJXvB9KPEQPr2gokTXHg5UyffWVcWqJ5SdKMmTgBvZMp7ZoF77Ko3a7AhmiKV274Jp5bo9GJPksx6e",
  "key21": "26eeDv9kQavA5WCuhLRrUFYLD36uEfhdPuweY67A1AnM6xKYbc3zmDemcoWSDK9sm2cxSqTWpD1UoA8puUFnsvFY",
  "key22": "QJuPKamcdDpathAeerV31A6N56r6JcSEwnEGvHPBieW3BRnpbRrLeAxb37k5QWGbFZqnvNtwLVgdBxmsb3Epfxu",
  "key23": "5PSeNMBR9zRUpMcC4uMKuScod7uS6DNBMekExkXzxwLZb6RcQNPwe5sjv85fh95Lza1yNnXZaXGPZLiYHmyKF99q",
  "key24": "5dyVXnLtemnyEq6gFrQZsNvjZW5iHjjsLCFp1PvkYgiDRzF7o9ZVHpTDFqyNYAQJTCYGAzymKPjf8RaiWt8wzo82",
  "key25": "3Q71M3hcaJXmeUVzkEiA87mXii9NfraXoWP2BrVPnF5qwijvaVm2nUtXLXepsakGPVtg1suPAEUyLT8tZuuLCYVS",
  "key26": "2wxsxu4n4LBu9ABnuZhgimmP8TyYn7C49WsQTxTEtGmF4XVRxgoMC33DsuroWB1oc8wkXNUqb6JQj8tDgdtGbc5D",
  "key27": "vq7TzqSPzi2yWajWsXcng6AWegPipR1aLmeLyxyvs2zhDMZ5oki7uPBmUFHAMXrkJAvVLok1Qw3dCf9xiFoEdoh",
  "key28": "5sHCcFFF4jxTtbuGMwYgoATk8jpMLJv5J4Whg8R3CmYjrTvmBk2hEkWGTFxwJVtpqmcR3fNQEqSHC8ACZHn68Hei",
  "key29": "5U42A4VcnPDX7VWJ6W7radj1tc6kdWKxBHzNmDjgzNg7KAvc5KJAm5JfFB3HEVvLNdNDSCA8qDCdtZgNQuR5Ra1q",
  "key30": "3rfDwWYEWCoRpK8LHqivJQZYZboQBzLC2UceWzAV2jEz3tVEFVfY8rdniWW11tC7J37QkiusdTZwTp2N4hhTQdeM",
  "key31": "2xV1YDEs8Ck1SHGzXXffyfXjPmv4senfCKgSVZc7scBsp5v7Q9bJGwArgjRxt1j7egLNAMq9Ff4b7SmjzwX5r7kX",
  "key32": "SjP7z9eSD1fj28fVo4FLdeBFoQjY6CD3dZEXdjEDWmGNdK43cdTNAYhUq2F7KPKvyoxciFczkeD2C4jjnzT6Fmv",
  "key33": "YUE45dc3HxPVXyELApSYs45cMYNfxszidFVewNgMd4wiXk8xTzoMJaWhzWuqAm9fGRTbpQUUtfpNWTEXFxV3Hmt",
  "key34": "2xvJ1TNLXQUkns9U44Cb1bWf4xjh2CTBXdXdQ2chLxSoCs2UwEWZnrWtVAjWMZ9niU3jgmaiQdCnvZHMLixJxzb5",
  "key35": "55mbLYNRsomhN523RhokjiV1dkaH9VrA4b9hHhA5k3e6sECJtdftBeXVAsYPgs3D9H473Ydit2bHMVXuU9ot4u7y",
  "key36": "3ntVsGvZn2jjqKKRhwT4Cbb6BN3W5nbHUnnphF89PBrVfZ4onJfPNyo3t6tNVtQfmmq4pBwwoRxZLtDreXYZBAgs",
  "key37": "5vuugiiypyEYg1eFNnBaEw84SeUP5AVgqBa4RPrZVkz7upksuQ7XDkkKf5PDe2LhY2VfDKCZCXsLzF1BxWmeaHv6",
  "key38": "3xAAV8gd8pNzRXM9ZyC8gtgPm74bz82vxh7JKntQohvSiVXZJ6yk9NVTD7KyG4ht3ikDcuvwYwESWMQXfQMAQtRN",
  "key39": "gvS6NTnMFwshsBqoDCWxKKZSmkyisQN7TdJ319FMuoK2ut79cZBAeSF3QduanEHWNrjZRAuzrdjhx3qdApw9HPd",
  "key40": "37ABUL3u1eWEDBdMejCRnNET3zzAYdeqxohQf8KSRa9AHbq1cBDEMrMz7y7tuaRQCtxefAvVcrj1XW8YZ3dQjWWs",
  "key41": "65Xkm5EagndzyQWECVbGcaXPsNfVVWjzv9mSid4T22fmKuBFW7DaDC3tEv4t1P8ct2Gp9GwMqS2N13GVBh99yh7E",
  "key42": "5wwsVRngfe1bxdEcKSzXhBfmdp9uFtVb8p41EdZQBpiKc7uPWDtT9TPP8Md8JE9WgbeLVWv5dsai451UeHufb8d3",
  "key43": "652D9yzvBoF1PxzrDkohfMoJnLjJAbvrMy33NEERGNiS1sDQtFTvnsfzj49MekheyaeQdUb6P2BTz4h6A4E9hud4"
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
