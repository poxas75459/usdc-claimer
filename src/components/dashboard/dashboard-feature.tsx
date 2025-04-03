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
    "3rvTCW45iR12vhAoNjWeafjX8r1r4PLwwqDneH2nhSgmiMc23fys5wmgwFqvKzdxUeGp56tb9QzKP2HyZb46tMif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TCvJYuTuAnNH17ZBj8DaaoSHVbFWGHHxPa2VngoxoRM8qZFFGzqKyjCBUaQP9XR5YEcM8zUfBcxp7NkPBZ12CKU",
  "key1": "2JAWfhqsWFAeiUpsKCsMaVtzPYfQtV4aL9hVkxeKXc1xmEC4iPZ587b31aZSAQo8dQWNp7pSYTfGWb6bG7rX69dr",
  "key2": "5aBkHpvsgs6MdNVG5TN1Knc4mfZEfSheiVR8fKgQqqD1D6iRjWSZ5YuUo2yNeqiZL8CEDs23KzgiRZa78UF15CYX",
  "key3": "aFswWULzH8NddDgVnyj7p86XWpdGwVjjnXFWFSwVk11s8oNG53A7kTAydAyJru8xa4M5Td6EAkzkvX6X1bpDkDZ",
  "key4": "4BBWzqjd7XBbqfmfh1sr9ba8nARQVouyQwvrhjc18iuozfURM4qzRic2CKf3Wtwki6jzYC9xzkj23W8Wn6nNBD4c",
  "key5": "Q3WWK7UtYg1L5c1qf6yh9HHYzCoNizK8zbM1rgB6cQXpxQeP4cCbthg2BWYxWGcrWt9QP2JUWkV1U4Jc5SUScKq",
  "key6": "35Z1pvW4SrXkgPjH5nUuh6cKEZS2ZFWDXs6jSNKsiMyMPyyHEYXeJ7dndbKk58G871ut1HFwNjTWJHMWFPPRngWc",
  "key7": "3Ki5x7ye7bZp6K26DZVgMXkkBUc6MBQFFrmpF7TfU6d2oiTQhP5ANmCqPeh4mMpDfbVX3c44DuQbWxuRcwBEEQTW",
  "key8": "2BusmYX4pqJiDiKigLN6ioAGt9EcxaDSaNaHjg1ooLnUHKSBAm5Vph6Mj1ojuCG3Ltx6YWxnr2aq2TwNavzf8XxK",
  "key9": "3hRucbdFQdcgwfHQA1DQMdW1S4srgAjuC53pQNQ6Y6aTG2g2mDpTN5M8XgSrR2hUPT9iGCca8NqkenzSVonrsPMz",
  "key10": "3h9mHfYCH3MRbbAmkgf92EmRmSDbahQEUMttRMi2YsRNjTqy8yTmuxuFPGrsPvsx5yygL8gQg9WEYqTAQi6iqCne",
  "key11": "Gyj9UHyeEwMopotjD9yUGcvmz2Dai2ZFZcmC4NGVftkrEe8BmjJZsqosYuKKHpWmhAFfaEtpZGdv4hK9aB5Vy9Z",
  "key12": "25prpPqhkWMBvgAxRej4yp4jRoSrHRHD21tyS55X9Qay9C4p3U79xhsD43bCfGrXQDGAQYH8RusBCMJpE5ZcWoaq",
  "key13": "2kcybxSdpANJJkpzX9VA5ouwZH9kS4N668dGciFELpgqdexP44qhRtjE1AtP9GiKvDBoXGnECCqVS2bZqcVCHLdV",
  "key14": "2QmMtk98HjBbEW6FdS8xpoQWgw3DopnetWmSZKSKvmXncduKtCLJnpvQ7TQwYBHTZopCP5r4mxneotGau9AkZHwe",
  "key15": "UEzRt5JC5EraZvddn3MNyXz7V7Bkm1PB3keG7MABmkuXukonoMsskD5VDnoCF1hhG2v5D4CQqLwpof2NSDWWBSh",
  "key16": "QN9xqseG3hcdQW2wsiRq5GBj1NwPY5vK35BMxvTpPy3NAjgAT8DmdGtmB6XBb3F37EEWy6wXP8FLKsJz3fQvg1a",
  "key17": "2sBPAH2VsYEY8DiroKgw4RZp79xyxMNwNtrFdAuzhr5VfjGAnvkufUYvib54Cmz2ApZDEq5Cgur4MFM34nUvwJRo",
  "key18": "358hkp5QC1CEAmWs2D19foobQVtP4gXLfP3wb1agwUjQLQE8Rx5ZnwssMvgLGLp1uoMeucudsvFGWwCS4Wj6N6Cq",
  "key19": "3pugEKxEFQD7nzG33axXuNmxF7TnAQkrmEvUi6GNktoEHoUqrQNm5vuGhMTvpEyrapxAvWe7DgprHYiv11Gm3SWo",
  "key20": "ouYj4iVJ2RLWboBe51ww6Kmc9VYPD3qaJX6xowcbMGa3urvuf6QU35LA5aHXB6wtpEkFPNPBXvnm63c2Qe97jb6",
  "key21": "5rCkEsekD7JRFpVZjcKXU99YDSyt8A4TDrvNMzkhKN5rzAhUViti3b2YoSxoxDHZucpQGWt1vroFezWJMx3Sdr5k",
  "key22": "3xWm3hXxZggaV1Lm7sE5UghrFVMjGp4PjpaLDfnvN8jHf952natr8TSo3gvHvMNt3RCggkj9xdvU2jgJvtBM1deP",
  "key23": "5TcrhKpKhg9qmgu81gvPu2ggyojkCQpTx5gibXZGdcgcp4jzzeJ4dPFS17DjqKowonSUrWjdLtyiVYe4uC7wnwQq",
  "key24": "4co7sV7FWz8VPD9syv3Rua7qf37tnZqXgHw3brc64G7dK3tpQmDSBTSnmQFLHuGswbW1vWSSDZngFzWjpvdnyDUP",
  "key25": "2pqEtwTYoUG8QcjKvxc2gLwEtNNLufa7LYMoCT6T7vVEASVNt6hYoVyy3jyLTqEW7tpjm3hxobbzDXtrRu6a7xoX",
  "key26": "5cBc8gu8mE4vqX3WXN7JTgKdDzAu4HypjRWNMrUuSXxZnTXADKxjbazraizBiHgVcQThfUM2BretYXkJNxrvmbme",
  "key27": "5EeSZRMC4WSW7AnoiQXkhKFbCuNQhWpVitZmnYAuFx6ZwnRNvYqaiytXVqsEGoeHgU5KDSJAYiu7sxkkjsD5oXMx",
  "key28": "4opehciK3qupqEkEBkxmhcbAMM3chwaNxxuP9iQe8j3onbZByDDaSD3mbDzi6ytjZ1YkkSg2d3qtCx9wp64ZaAky",
  "key29": "3J9NT9BRzGuMfxQFiRFLncm2d8P4oB5CZHe1mLcFjZGGNy7JsLe5cgT9Zy22bWbckGs43nNNMt2Q4LbPuPVqFEuy",
  "key30": "3T2EbyGw97pWyXyxbeZ94S84cr7YvgG1VoNEuiruRXeKFyvsxUUck2fveb71X2pcL31wGzNXpc7HrdDJ2AmQ666c",
  "key31": "5UweSwh9ZYbTpsrKrL5oyRurj9BU6tCW1eqnARoqYoLNCzBYf8zHtEPtHzVygXQLKpxR7H7KyjKCkU62MRdMLJqJ",
  "key32": "5ZT8nn9Yp4ZZaKjymKb6RmbYXzWPHfLM13rfwnD4KBhsJrFi2wSdNBbahAAt8rdFHREhxMisGDb3qNjGsFUbss39",
  "key33": "66n5n2ZoRk2rHd5E2wwC5HLxLf6spanTKsSHf2eyt9ZjBiR2nf9P2ASYGzYsTCYx75cmQc4nhF5XvNsuh6k5sCk7",
  "key34": "3iFLohmgsw1TR2DXVLDp67xb6qEKBRf8SyC1beSsAp6uqAtjVsp5mDJoAX6eM27MMLaNQ5YSE8brQgT5AGoMLaFU",
  "key35": "s99Y2eiCeujiaXMqN949hqPzsDgdjSaz6N6XBgt61zNMTGvXNczNLhQv3mrwnCaBucrVNeEhhdsXSwXjbfieRv4",
  "key36": "4NRv2pGb3GuaM1ogZV7Y21omMMH5C1iN1KYK38GzKix79NhGo31nW21phdH9zz4cVXLEVisshoLsiAigPjaUDvgE",
  "key37": "3q7HzpggEUF733mNtwJsJmmqJyY8gC6RBGtKoorD6wayS3ii7AnV4Uj3DsvBoy1szXxSunqPF1xt8zPmkRr8cM2G",
  "key38": "4j9pg9bCG7hKtitWQgjTD5u9HUvkEa35AiuYB9jsSbB7cbJvifgma1VeTZiMnrMWYmd5eb7VoBMF8jG4YrTYLy9Q",
  "key39": "5fWgfQh6sdP51bNUQxq3o6pXEdbMGEKX24S95YK8zxS2PqQhjsmKtGqDdMPg8ETcRgPHgMm1GHjU18VZgJNXzUjZ"
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
