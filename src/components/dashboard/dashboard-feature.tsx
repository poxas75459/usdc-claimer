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
    "3A8nRHcpn5jGSaZNhZU4xzq6aEo9nzKT8vcPrR5y9BEss2gmMwPtoJRhhSJUyLELMCdHX4Esqn6aPB189VfC9P3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZYMCGiczvQ8G3Y4hyL5QFFej5tyhoqc88j1ct9mjLKYeLFSjKy2nW2RzDLBsG4VnGJsmJsSRyUkVLGDd5eDjzxd",
  "key1": "51Y7z9XsuY7RHiNZwRrCMU1FGHA7umjvbaKd6doFMuhSsRG3btJjq1zyVP8WUXUin65TwvAjMqdCN5JAfe2BZ4GH",
  "key2": "2PB7tvrNMiRfEX5tYZayj1juY5tMA2jLygBJ1jM6BMyjirnakAouBvw7puBWaxbvfx3HSBR8fYwAobhmq4qBXY5j",
  "key3": "3vmTMf2RJeyEczNsUeMHDTGFmKyXTZHS8YB8AJQ2UXpBHKivzqF5H5SqimoMT9bNhxYYSday8qm7SQfDXxYH212N",
  "key4": "5741iMZ3ShuVypEgBL15ih2X35KRNhJcNqKUfZy8qDiRk5pDpLL5yPoYLvpTFxgQpXJMXA8gYj2jLN3ojvLHWDre",
  "key5": "4jFp4jQ9S9z1BBjbgVENNJr6s2SCF11Tw59z1WcBFUaQcmTBSU9LBGfKdfs3htitWZtqdZLTp6zjt9pGeQfcURcY",
  "key6": "3JanTmGiRQsNkrq6ACta9pzGLgeMsm7VBjs5vW4B2HGGdnszAEdygJBdv1own2YdgLzDTKgwpc9e5Gw6MA53owWp",
  "key7": "V9nCxvLFqHuXnu4mGt6qbtoYnd344R6UgNr831x5cwadNVhWQqraYdgHeJs6cbQokTtRYTc7grcG6gpRz6763fg",
  "key8": "3WfBeFgj31moPZbyjsDoMkye5cTnE79AhvunyfxH2SvBxhvXM2E7YfqoKdpd7QssmXQKRenc3872NfH1cB5wmpG7",
  "key9": "2ZbgAhqyNaeMn7dt5QSLp8zbmjNrZ47jq3RYeVRCJNT3iAXku16PuYyX7bZa2Taok2WDgrwVcydiwU6EQ2AEmwLt",
  "key10": "49HgzbqdPwqXCAoJPuERuzFUP77bQzA1QRtTUKPLYPWoKgwUmkQYVMJncvXaT77DPoqcM1bGv3G42sGMafNdVu7X",
  "key11": "5kjQX4wvSFhZMeeTNWDHtfLGztv7BSWMjq4xZvtdLhHWVKk4nsU84qmngdXj2H6fG5a4Uo2UQo15uPhUyqXhThg8",
  "key12": "5NN1w6cXTCCgbSKHGTcaZGDfQTc8KBkb3o7BbWY6zofJYUqJQX8pnVEHL498orGP7eqg1hVCFAhu2nQ51XjeEMNo",
  "key13": "5upd9h4VSx25oCWxLRVtcAZxphzSNnSsxeNCKddAwfTyZBwZ9Mt9Wagwsf6LVizayM1Bee3YWtYPpLNiVvhLXwij",
  "key14": "4sMwCsYzjcn4o36chJRgx4wjtfbbJBG91VpKhH1aY87tofwdfuLUWXeTZy1h655MPK7zDqjKXZpuvryn8dZApUcR",
  "key15": "4wm7KMzupiLmjH64BBHdr5P7MMB6PsjK76BwC3zqiD9j1wJhCWu24g9sfvFBRMU1xXaNnwSq9Mg18W838nNbyhh4",
  "key16": "R7zrDiiCdEqYtix3gH1XZDXBtxp4xGdSF3kVoakSSAxtMceQWhfgJjjvPxXhqZp3zAa9YJJqTbXZ4zuTtMwWfG1",
  "key17": "5mYPw42me4HrCtSkE9HCBpLh3Fe4G23DkLu28fQxDqbr2b3AQwZCxi7BMkp5YL4KJSZWxVDFsnuZqFf1TkSwdg12",
  "key18": "4otHB7MUNEreesNd4dk8hLJKC9LkBRcX2VTRYoDBTPYjCkfnamiqrhegV1WrHoP8wrXHaCGDni3aDjeUzDmcz9pD",
  "key19": "3KrErzjHozQfTjmqaZhkaBHegyE4USxQZELPvrPcZLuroGG7Zj3cKpw5YPhyUiPMtpJRtgGBVWSK4ZG5Zj5g22Ph",
  "key20": "5qijNFWv4jTvbEr6r6NPSQeGaKJBwJ6w4jsM4d8HW7sw93yAKoekeFuycJ7z6tKTNm5iDdRTtyaVGM6SaHZs3ERu",
  "key21": "4S7Wu5s7kHQn6RfKHXg3T9W4oerqaw1rfeQgSRWNhWzW1sjoLG4aLsdRfA91txFXiU2Ls42Sq9MRJ9sj8nxbtvBL",
  "key22": "55wtvve3NYmAx4G3KV9nPDWYw1sWmEUPCaNfTKk3VaKBQhSMQW3XFgPgNiqyTPGj8ZfQPe54727hLYbjngtnWQeJ",
  "key23": "5aA3Xi5FvNrbc1t7DTdFf5SqBLr4DwejyMTXprwro4eTCuLVABLGYPJfBA6oeCw7cRFuZGbKEUAo1y7EQDwT9tvL",
  "key24": "2vnhfEE6dxvfVp329AQXhG3G1v3zjE9Vr91dKaj6D4iYSSL6kau1qdiiWhaw7R2qXd9DHJQZ6avNnR28GzPXFTCa",
  "key25": "qSqt4D1hk1BQVgdFaV9pDSyxVungoCGTzAXxDb1rshJtsJx3JYPQLFexupMBBnVbNZhkY6rrDEvjQLCcevV4Wkd",
  "key26": "MSedQkdRWoWoDJMgN824HCf9pVQ39eDs128EsHM7KdtKPUd5Z5JXNh268nMYAA7StqBpcncXo1RtxihxcS1fo8i",
  "key27": "5cV9up9cWJ9SHwHWokthDt9rTSUCbaTDbmph9snCQQiN3TxUbKdPNpXqeFWF9FmqCaTctNrnZ3MikKCW73zApg7Q",
  "key28": "37LnK7JUGmRXshkXatd8BZoAxnAp5rHLF4vLNzt1Pwuho6Wg3xcrZn1s6rR5zvJktXyGQ5xph1tDh2baf5WheLiX",
  "key29": "5rdxmDk8vATYTt8HqzpKWDDFPNkKTDfC28bUdZZ1W46zevhnL4fXCTTDppkmVJX2KjgvipZDSUTSumrR7mPnx6hJ",
  "key30": "ZNkSJDU3GesKekZZDiGRs5MrwkwpXYnGZdLDVxRFnSqRAoQ4gGUkjQ2v2zMjMiVamK5LkhPFGaaoEEL8Pe76RpV",
  "key31": "5k5z63DfgRj3WJhpCemz1johUSbHKgWKGZWRkDV4sN48WAoF2FT8Gv9NEsNQ3KfnB2gGJdXMeFrGJyJuerUxHpz9",
  "key32": "4DwJxioq7jRLCyiGpZZQJG2es5QFFz21QNehCA52f5HSxuuy2EHgFNTo1TxmdxQ24QqSQfB4pkftbnjnrpzo8rKP",
  "key33": "21RCn4tb6GSDtpXriRiC6DJw3aDdVdoJgJccyRJJ5oDHP4XRopmqdL3XJegrh8H8MzDufJ38SJNYiET8q5FtPh9X",
  "key34": "noTPCMW5wzFobkDkpyP1YaqKFLi53QWToU6yHkGjSf9i4vi7ABzh9SG2J2sLUe54NmLeC9t7XDu4Us8CkrDzgXo",
  "key35": "343w1X99XmcawYLFiCYPF5opH7EBg5HbPcBwEAmzddRkPFwTdYSqqoMGxG1yQhtvVhHwAqYvyr6bZsLqCms35eC2",
  "key36": "2Zi96yyqUZno2iSAfA4dTuSTB2kGV6ninQGGaCHyhYzURhrVWwwkZAbb57T4udC1xdkonRDYQYmwJM9aaterCyCR",
  "key37": "QMjeB46BHTT5tUNyTx2GBYTY1xky3ZdH22QZSvqichEKsZ9MtiuYUN4fRB7eKr8dMS3xANNnbsYJa5rmPmFv2Kh",
  "key38": "3RnUnhofqTwtaj3s5cfRRDZBjNeDvKkkASD7EBXVYmNoAD3gEsq6B96CY7gzSmxBAE2M8wAXJhGTa8NGvBwmvGZW",
  "key39": "45t6SUb9A1UwRw8aPmcFpq2DyXTKEfR6s5R89WaA3b1ktDoEEnXTykhWXoR3DAGBUDG1RmrxyqqDhTcSdBAeXAzs"
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
