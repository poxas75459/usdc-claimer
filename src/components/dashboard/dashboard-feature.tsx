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
    "2yek7ssuee7gFaRBiPSchgtUcAqm6qn8UbkDJtzsGBcUgR459qfBi3cBPbjdLPoZkSxLFhU7WqopZabeFGbDboJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KYj8RRHbwH4wBqFWWFNysFx3kT7GiTRvb3j6KwAs8NgfGLWTfXw6BUX2cun6HwBsJfkVGhcnz4PixsUjKg3yG16",
  "key1": "FMmWpbLsJiQeFrdxjEaqk1XrgnH1xL4nYfRTggqkQv5B7y1MZ8JfzHma6hEv6RpfeV8E1CGyFG3eUi3G1eNzpAb",
  "key2": "Y8nUcY9qobj73g98Tot1n5TMeSDWYuPpSTaFXTByCLrc5X5yWXXvYFkP6eiDm4ugZLsorbD2KHnfVoiqL7WFP2Q",
  "key3": "4AA59aLmNJ7kyEVSDVsGFQJ1X5rh8NTFqv3nxHdzDDzeA7iC364fMitK71V2rR8DqGVDM7Rq3irFs3SwsuXtevNw",
  "key4": "53w9ewwTpjp1xXzqsgnYCUiuhKB4FWwsQvoiX24VtgpmmuvqjVkb5aJ9GbkFHu7AX5stjNJ1Kj7eV21ZyXXorPGq",
  "key5": "4Lrfy1bYUPPFjsk3S4orWuvaeuk8H8GERFkD6HZf1YKRWB2bH1SdquadRGXX2zLDXhgNFncyC44Cx1CJdCq8Uh4U",
  "key6": "Av9SdaSHojqsAARwVZtw2snTyrZDeppcw5hEz3P64kSVJgCUegen3HSC8aJs4cSAxoPhSv84141L5DD85CdCn2k",
  "key7": "23DrnWrvVWfcV1G9kgtG51nSyFEjkFxda6PR84LDEuueKvdAQownjoo7RS5UXchmKMBXSigepbHsFuZtKPLhun5d",
  "key8": "4jNBZ95SswtPc7Cg96WaFZzPcuq89pMcYVGRp7QMtTd24vtnyBDaD927yVVu4tisN9QdtXmQ3xJwRbCqToyDk4mj",
  "key9": "G3CJ9XVkdfPYKJLa6K4dZ66jQyqKVSjEzg4cQigfG9K3Zv2gw7P3LXi8acGqkDLsGQm7dYMxxH5VzJcirG8dihC",
  "key10": "4i6J8FTjWPgAc2JxiHN5Nc6TFm8MFuy4aSR5LPjiHnAoiL1gx9cNqRH1h4tbrR7BQuquL9ZLx87LFQopSwzyUzKK",
  "key11": "6LYuNJcrA21VwJcpyaZwY2S5u1F97rNs3daX3RsQ87sKWAHhVDSPxGD7JYdX56Riv5gdNRmmoK7UU8gxoarFMe7",
  "key12": "2vAEb2VcgxWzhbog7DdpddrAdkiN7r1jQSANzB9CzYgbdmDhu9M2SxMAEbKUGHEoUBDu1WEbXSmKDfzEiQjzRkma",
  "key13": "28npcbafMEha7AkrZdW1AKrF7DyyzueE648TMbEmbt2tqVyR6HmmCMNkFBrFMUgDk9WZSJibSvdgQ41kPWGo7zwn",
  "key14": "2YxKwfGDR1Kf3vThi9o6QwreUu3gGZsEpF8CKQFWomvBQ4q94RPbHFRJVLvuCMeM6BS7Lb1E1c7mQJ1Z2uMFDMsW",
  "key15": "3FQajoMQneQ1BjeEUBQ9opMoC3kt5pJk2e7Vf55E1vcYSmF3BPrB3Ye6uhy1UikGVnbZcRqLgPt26bGZMpQggV7r",
  "key16": "4nHvVWXKpJB8aYWFrUghaFtxe15i1EHaF9n2sbJH5eLJkEkGzLNeTeMUSHPGFBY9Q5GaiqKT1DhpRv4BoGockUuY",
  "key17": "aHXke211ZoQf7QPTLiUKsNNeYveqUzq28Kkr9rEHHJwmQnpcJ3qQk5enopSgHy3Whtm6nV24EyhFEFugEDx8GUP",
  "key18": "3AFE5icBz9KY8r9bgmnFR14CMJq92w4UmgYvZXP18W6uFbFFCWrPHUDrNApKno2G2sJTqKfpVGqQbegsXWLwDAHa",
  "key19": "4FymAjZTbWxgK1xJaUXTKniPr8667J2SUT721MXvEcotjfPBxDTzVShDZYS8HJYXFAPxJ9cZtFgPuEGRFzuyEYX1",
  "key20": "63TX7AFPxgJHKKeZQ37TR3bYD4HFV6sDWpjnG7XAfkeAbXs3AGAbbJLuJNZoPcyoArk9NJ4SanCC77oHGgPAGLrH",
  "key21": "5LUEqAkWm3kEkfyueQy2YvPceJsjUfVxhEsLdwxpRRFoswRRs75MsYERPbzp7wxCCu8qYZ1Wbpnc3d92NBajnvmB",
  "key22": "49QsXLpQYDJwg56i5G2tkqPDzYdBVchWmeBcZYiXbZAp8jFBjzrywkW9pyqMFWZJJ8Dg5AeD6FKMbchDzmDrqgst",
  "key23": "m8xTn1o3nqznqoLFQswgV1AdL9LEPy8qrhrZcjYWFCbadJvSSk8ayABHrRXh74CqGRd4fiwuH7UPSdXhbmw8wMK",
  "key24": "5bKtMGrpYApgffFX3XkDWnaYvYvh98rdJi7KT9kZ5DJAMc62HnwRpskAsj3VRfFTSiEF9LATjDZQYj9tHD7hwscE",
  "key25": "eEDMuzrF37pfWjTC7eGLbkTM6PfAinc7VrNnoXfERTZepUkJvvapVo2AGRoQEfVPpDfnDXGo8LCWXU69MbcZoq6",
  "key26": "4pkwU46yED12jdHLQq7XakJMStztBJZmYQvav98KgVwiNoU13Wx1kXJtAzDjQhzCxXPgBbDPpJXqGop1ekHW7Cqo",
  "key27": "5PiK35bjt1MZQyHVVx2WN8dpEABgFpCgrRYpZZsbdT5ZJNrWD2asbJx2YoYAuHi84TnCoukBBrSc92sGsnC9mQFy",
  "key28": "5hrD3GXGMm8m8rnxNAxNVzmPAohZfzJ2Yw5HJwCmuZRKYf4WFXEHAN6M2MuVMiJeRFU235MWywzuLhQgEPUPvPPF",
  "key29": "4EuAJVHr7Cvj3azsLTYaX4N7VUGjamk634FNGoeeaeuvbmLJ8D7cx9iFk3b429NfuBLDzmc3FSdnzRSP35GuHZy7",
  "key30": "63yxwnJ3bkDJ61wRjyNWNBRQASxC6HCs1Jv7kdC3KhCGXLaHgvpcqenj4F6AefT2MKmsTCUg3SG1wRsFnLRxAjCH",
  "key31": "4RX459HtNVAuiuQvtdHzqMUA1KMJ8S1ZWYWKDUwJMrYuVFVJsGnLfGb77MQnuVQZJcyMYbqHbZvwo8XH7jPNVtci",
  "key32": "4orGj7qDbnLoESJnZEZ61QKdGFjai2SsZ4TPGYqdmt3jsj3tp2bb9RxE59hKVuTtoAmzQSpY1SxexT46oTz4zoT3",
  "key33": "UWVnobMqHcRCkWzqzo6v68QiGgBLsCtfXGqxeccb6PS6isnt96dxqCANEjSL3X3GRVzhUpCssfAaX9CgaReiiqg",
  "key34": "5JnnWDuBimPgMvJ3yBoYJRU2JNZsERKfd1xAC6jVHUvberjc6GPg3piqVbiUCVkVoEWkmZRiUEkavQAUxZADMxRX",
  "key35": "3eMuomkyNpStNWYAcVbY2CZiwaXiYmUPeAZBPxmZGxs7ci5AX83cBseuYbCxH38Lsvf5cjisRNyRiUMXRe2mKfxr",
  "key36": "36cdwUJd7MSX4d3Pp6FtmHtqBBjaKh8i9T82vjVrzFhV14xehthZXMYtP2hfG4m2uQnctmyLTrFzoEc92bHPnmrJ",
  "key37": "3BhoyH2nSBciyZXs9hNd6z4GTyZ1s375JQkQNvGhcBjx1AxWo9GanGkBkn2VUK5v6VSYcK4sWGQQE6NsDf8S1qww",
  "key38": "36n5s7hG2zWS6Z2Fp4bsr13u1nUD7fdrcSoEqh1QqNj14X9NAS8AUTP45mqTTNaUYc9fd8wTYvYDSsbSCyparciy",
  "key39": "MovvRKDGEjWwzPJPScgwTXPwrx5sFoZuV6J8Bq4nSaMqTxzjHxjGL5i4QTtXR7JjmA6RPZKfQe8MmLMkLCDGzGK",
  "key40": "61Tv9fd3akSt7YRZi6bpft6q8a1XyoHBT2Bk9qDta4LGTCW6jWiCoQCd3LoMerDcZf2e6Dg1zvT4optC9YT6ojaS",
  "key41": "5K2fNEatF9YEjjXKrkcTSyyBd3DvnDQ7SHYbmLH18T5eCwmao9Wt9RXpo8CjQjiQUYVmEYFVjjx25LnifSdkzZMp",
  "key42": "4poJYCDdB2oU2viiTef3tTQTm1JaF5Lk5v8VFzhAisvjZppvS7Ukag4eij9LjuupUTHo8TrB9qzDvv1YBpdQ5FFJ"
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
