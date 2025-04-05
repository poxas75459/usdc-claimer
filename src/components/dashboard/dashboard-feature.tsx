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
    "3XbdgRDrwYgd7bndfBSVs46Uw4AgKzusufsj1tudLAHieptt1BZrjsnBCDguKrFmDixQRRY74y37SKKRaF1YskZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "adFXo7tEXFdiBf2GUKRHD9bxMuc71b8PrSDencSbJbXLmYziNttDpeBDHrAPRJbFxfEf3gAzDbBjRxh9Pyzs1Mk",
  "key1": "bXdixp5C6Svam8po8cQDKPbnq1jkvf8q4PHeUZ1iPRXHPke6djUYQxLN3HkDsFiCM9LfPVwrWE8FvAip8nmZPRR",
  "key2": "644DPsyfDfoVw4qeAwfvTxwqzPfoV24Mw5PGfdzkj1ZfZzoDtrc2miPhLmZnDLwcruVLBirbeBnHqgRzxt5zmAiz",
  "key3": "1K7xPVePfEkGEqCtsDXiyWBGi9WRS6qtsbMDEiHthTjukj5Ct1DUQssx6hpSAJvbu9EEhfHV3HqRr5gNDweDTNa",
  "key4": "ko6mAUkr8rnvbCuJU5FCYg8fparaASM1iRFGrb3Wtuwfhb4HnvCYuEv3XbbzBfUghdtFwpWuvCQ7aeLxBZZTvBB",
  "key5": "5rQU84fsp3FkiikS363tYqcgFNHpx4C8q3kcjjiKMUN5LrPAkXQP274kRs2YcJiyqPGbsjgsqFVzuWvavjMbdQVB",
  "key6": "33RnKmz8QHgn2AS2wVpvwWhRQNqugjTBdQhJ4zGLwzorKpDZ5Ze1jGnfRFKz4hqVGxGdNwTyknCWdXRRjfcNBXUy",
  "key7": "4bsQUetfB16CLJMSEJA99mECefj1y5dKGfTG55xSZj6g2ZhVYpUpq1wzj8JR27jxhwqAuuMn3Uiw1EzrPoNSYXZV",
  "key8": "3K8ydrQQynUnybnaYVAZgwMGcWTTqYrMwsi9BWzE8u7vmKrGGzPxTzhYD5jJgnwc6rxcoVGvysgRAuuZoHjCLghi",
  "key9": "3amdkxyxzGBJ1uENNsd79YMg63o9q1TxhcJ4W6iMckrRb1FK1wwsSdvuzoroYsNn4PxzBQm9qGkPc3CUKBQSw2Tk",
  "key10": "J73Vm7ePX3KMEvAVs4MWyP9gFsEijtWZE1XoLLCXzdFSgEtvFFFefuSk5M7nwB4vaAaDG3KfyaHTBFFxPBRr8au",
  "key11": "3evnPcc7CZaNw8Eed1ymcLhfdsVqrUVgpTa1PXvctS5LyV9fSHUbc1A2aWfM7yrsMCEqVLkPEiiX11Koh4iiFgip",
  "key12": "3YS7tG9ky9GvnWiRcxFMYNBwNSoTq6cWxSdJCXcFz9iJrrP8NtDkrGxuTxwrUPSBagMnanUoQy27XKgiZg1WfWaH",
  "key13": "5nytuE79YXTLj3En9DeSftHvN3Qkff2sHEiWD6vJA6VBhE72Hm9agzUC4t3uc7SuTUCu11iGr99CKEnrR1M2cFy4",
  "key14": "3t95AP1QN96zjDm4pmppjLwViyYkPammfxrLD5syvmqxe85BvqtCPDLUsALW8QQHPhxHynRUjf5VbiivbXJtZsPZ",
  "key15": "5BAQdKj4jhDtnBCWJ4swPz1o6ciVuMqdevX9ruMmcT5nitoq6HcGyDakrEzsKL9MU9c6mtuVcrRAiAfsFTyfQ9ZJ",
  "key16": "2J3qjRgk9fg1x2UyjZh5ybgw1oaPL281ZBAy3jgiMFF6wj37d51ug2UnDWb2ZsFGWVkUSi7VyeA94Lb7ibby2qxh",
  "key17": "Fu82qq2uBSeauef2W97FefRHKz7zkQ9aSUgxDBrccusYsXuJGhE3ARH9S3XYLtMqez26s1veuDrvT2GjcxTnF5g",
  "key18": "Ud4Ln2NKGrdRq9bU7YRHt9Q8MZGDNw47uXsjrT86CfrMcnnZoCebUnRU2cnX2pPSb68DvjdW5gwqokYsbgV291E",
  "key19": "5PyNAvq4j74SxT4vB7t8oPkBtZpM2WYuRA41mHe4tynERYm4Zf2UWNLrL8yweHRk48EynbPiH24tSw8sXPKswjWL",
  "key20": "2Umksh8kpNTCkvAumPHCwrjtVe1pva8ouTaRVKRCWXfv2L42z4AKrRxRCvFBbYNqS8nH3g37Dqe2JZ5gfnk2xV9H",
  "key21": "3JRSTwqCkeLBdYUc7tp7zaoE65YLVGy6vWHFPwXdvoT7vVXeUEkmneiJ3GTxJdrz41Unk8CpETPd1H9gdYmRdxQz",
  "key22": "2wEdnNhf5r29gYRrz7GHy2tni1fyX6LZBZLg8qqAexRGge21A3td4stVJHD1ety9mSe1SA966XaiEShp1mi43LNY",
  "key23": "2jM8Gd2dq74RGVgjV6y98dacdSdcWXZ5d62CmKyScjdpV1KPPQkNJzbX7X3Q5VVkjchtbue8upuVhwxRDBUf519m",
  "key24": "3ZqHoTba4X64aU9zBkBSkjrzuhPLpQQp1AXwVsDuNZPnEn3F48QdFrdXZdJafdJay1Be8GU7sc5Q7Y6nRZYj1h9N",
  "key25": "21utnUcYg5PKYDH1b5fycNhzQ67kYveg9ysVBz9vuE9NcY5KAXDDfH9PHXZCRGXADN8hQiodDNui238PVSR1PqZ4",
  "key26": "rSZ9Gw2KBGNgGgLLMLYTgik9KT85AerxkmGfJnD6z3742AQ5hXY6GSMGG7LsE6Ppvy5TpUP6FrczhgqAkngkeFN",
  "key27": "5Sdt1q9PkMCmy6s6hNrx92HDvgsTCAEd2izhTKzThh6uevcc5f9JyouuLxHviEPULnAp5MRvgL4xbnSj8VVEw4mD",
  "key28": "3zpLiroZCvvRGws3QdapDZ7Y9rNed2SjQyHwUiG99DsdwefzeSshPVEYH3SNR8U9cffmjxMxskChoB9j3csDPBjt",
  "key29": "3o81y32rawsLmR1LiyWMwnQdoH7ahE55Xrp9D9QRcUZtyyGgy2GNB6MorjSBhDQubSht5rsNtqC2heZt3XTheK7",
  "key30": "56xKmfHH4jCVvLhS4N5Z2C39NZfeTno7Fxtbz58WrydiS7w4Y3nhUep1JeBfRLfwTa8UZiMHQkFhEm2DU7MJfhnU",
  "key31": "5vbKRfZappGbUX8Qc7jJ4sHpQSamwK8XSBRUS33PCNC4bjbL8Lq1wVhciJ5sEE8teUNS2XhLeSxdprHNReQKSdmN",
  "key32": "55iehWW9Dk5SXcuERUxQAnGzJQL4mGUgQjvQqbupbaP7Dj9J8ueqYDKHm3qpMK9Pn4nyWLo8UmQfVRwQCCjP4ekA",
  "key33": "oqNfMpcjZJ95k2TMvpJ6xi9taD7vkfLPUXShf1W8DarcHtk3wTXhU6PEb2Q5XKH5ViTjwKUMZ7aR3RtdJsmxpft",
  "key34": "3wEXJ3w3eqfXs4SnWi2nfqddKVG5d4Gf3gTtTJr2eeu1ebNpuJW7uLXCkPXiVM7KX9FSRRhNK6DsmoxnZ1iBriCU",
  "key35": "45ekWPskpoBho6QGxnc5KQDtt8gGiaaKVi3A3cMtw29CnTXGv77vUUF4qDVg56p5irJNWbiRbRbGGsuFFTyt2isE",
  "key36": "5zNCz8XeXyNqShs65dbsszs2px116m7oNmksGusH9S21QkBnNB6b8gZ4HzfVyHwmZoaJR7MMf2T7oymWavECES4",
  "key37": "4eSSQZUXvoHoE9z3R3pU7x4bYZ5HizSeZj4vNg5g3cr5rVfDZYT28YPiwWGoH6ZUR2a7ZsYjewxtqagdkj6w1tTu",
  "key38": "FKtD3qfpANtnHtsqX9YzjqdGGkMHhCNY7M5gGJrARyWWVo4iURaER9WiFiV6PwbAw3pHSeGz6HajVN4VqDhFYwQ",
  "key39": "614shyWJNLEetor9GFmL2WetuX9rMmxaxjqNRQSSP32jnBCyeNhx1GNkeFVDKqvVP8LSDhXCUuaAPze2DEMWfFwG",
  "key40": "qvUBUdTLgEfENxUkoc52fyMBGiGKaey8rXtxfsHSjXf2Hmo6uj7no2HPAiz9LS75NXSF9mfD5aJ24wzqnn6vnbp",
  "key41": "5fakTCps7gyPRYjodvrtQGmddVC5oVu1ShoQ3DKqqECkeWyWYcbqwBbUWC4yDLKoiyDZJs9L5FwKAL4hSMTS4JXM",
  "key42": "5qTB6Qdkn85HkSdFcbEpU6n88c3MFgEoNKLpQQyzEttTRX5HPqFzP4qmqnDAHzkGNgUjdaouW4ui7P4s2NxijAJN",
  "key43": "4pMrwECfa6jVhvsYuGR8WXHmBUEEGkqmDj4H7ctFf5xDRb7UER97TvJuVdwwqLiQC7oL4jWRcfEb4Ah9RTaq2bia",
  "key44": "5jzjDVSSmUuqhchXyc1wGdTzHDbRtr8A4s4Rz5bTJ4mn1Y33Cefm1rr4tLV5K6NCeWV5MnnKuBR9Gb53Jafrkk7m",
  "key45": "53xR7bg9MREmkFRuEAaHhcpXwhqnLZDDGUP3Sibu7pGQGcLfBNBJu3rYbh9asPLZkY2XDhdjmmdnhpDTRZ13Zz8J"
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
