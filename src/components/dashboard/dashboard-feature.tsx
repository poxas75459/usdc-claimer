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
    "2DkcXoB5NrMMZ6o2ZPZxLd5mMapF4Ryy5jtq2hAiPBhNdCocfxN7ww4gwJvo74sapBXvXNBKiQF7A86Nexb963eR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rNtKbiSqQdGPBuPyDBaTgq5doK4Z8o61ag9apQsswrFZSt2ufBCjuvvA5WWJE9TeWEu6cbMiCt6mcFAKwG4MsTq",
  "key1": "3bEhZonHdeTQfupMARteMucbmfeToiTCzUKcs8FsSo6QErbPPbtjYzcRHoHEsVJ8qUJg67P8LGZ7n5WMXAZA3a8T",
  "key2": "MKhr8nYuLSVNXsdej3AECyjVfsPojPJbuhHLvoDvJr7xTcPVq6WcQeJ7qL7ySHe9UuEJ4kegBjQSPYtyUZ5BcAZ",
  "key3": "4mWtn8gK72PhtpWr7kQbzDEFGikUnhtDJXyrbSmcn2xstKzfmAgs1RDCg6XBGXbZd2WaDEGiNB8vZvA5hQgbUcpw",
  "key4": "4fvmmN3jtNLpD2zKhVRwM4BuJfi2HaXS9tRctZNC2UkXetayhffEvWiutpfhA41crFWk6hxC9cgc3W8HQBwgA8Co",
  "key5": "4vALScMvuAgGaTzXGJizsBccMtzKAe7SWSAQ7SCpfzrQjq2miqqVdxJTEuzcgLkq9g1kXmubCGP7mEEHguG5Thgf",
  "key6": "3zRZPihVWKAHr6ri7dgMHDiYmF89bSPwrPHR2aaNHdoTFRnuPJsCsCvVX9sgHinjUDUZRHFJjP1CdkZNECJpkDXt",
  "key7": "3eaFeQRSNq7WftD68YbmD2TfSF6XnCSUmEEtaxo94DyvSqUBvUaentrE2aXsHTtn7CFeA4XwTYX1eZjYySu4Tjae",
  "key8": "3eu39AiAEvvKTqmsN34D5mM5ZLox2sHVVLuGfZwroZx8zEYjZiwCVVR2ht4L51foPcniuFpswRsHrREfx2ZuGTtn",
  "key9": "2SwcRYPsB6tfhSdbpJTqVG2WQscWKWeCo5eQG6pVpmnkvmmBaKc9cFWLmHU9n9SZN9fbXDnFzhN93WiQWLB426Es",
  "key10": "5hMJdmrv7BMPchHj1JGft55aX4vGAp6MY5b66NLusyrFYWEA8URsGsMfGEaGBtxtPH9j7hPM6WZxB58gdEo9vXpE",
  "key11": "4gRmjDMWwDZ7AJtFX9HpMokf1kca3KpFVaKC5eVekPG1epwinRwEo4HNA2wXNi1LpGtfx2jb4Fkfr213hef9cJNA",
  "key12": "5ytibW3JDikAFd5VEwgZEshyBcxtrLeaMbqv7npwB4Yrb7Ueruu4fYk2GYAzYMsXxVrxUF5L1SeXAzg9cFaPb4yX",
  "key13": "2W27wDTgt7bWHSypPYg27VfLzAJ27x1n9NCpdxgsRgxeypyMp3UQ7PiRW4TBArLgCj7BAjb5bZ4XP8Nv9nDHBsfm",
  "key14": "LsAjzyAvynWm3kkohSsx3uuZtKX1b86HBCnKmJSSjmxGkMxhzpcdaKP9B3By6YDrfRuWsn5Mq2uAdhqTV5tcvsf",
  "key15": "3rTAUuC4PcTG58zqyPCnWs1NQt3bE5nH9VjcG7PuvxgCRJTExqsB5F79nHp4qA9PuLNJbLVqkV23z4xyEjrvt7JV",
  "key16": "4enxDXr6H8EDLN9muhA4J9j7vsgtjFAAT8fWKVLA9S7Dkw1t6Se5kgJEdBG5uvo3ZNurW8YkgA8YzVwQ3ceQ9NKL",
  "key17": "5owHARiQpG7dbHbnTXFnz1zr4wXdfbqYH5r7pKzwxhbFGcgMtoWAtNrWmL3dxDTpVxJwak8djGMozQ11qG7MFxuZ",
  "key18": "4Ge9BrQ5cjLTyQx9hcSptnLadh7hnL4KowPAmYcYJFnZzeKF3tZwMYHtLDLLACbpEeJkp2U6qe5jwNCMYdJyjdXm",
  "key19": "3psByhy2ExvH9cGqtcrf6t6DmgkHYwQbCDtjcKweYUrnrvDEjrbi8ZNWVCPbEBpHbiRAxi7rvN5GLHWEQvvStJRF",
  "key20": "5M1xtRBnHtbb7iw8SgzpJP65Wwz16wx1cDxFVPkU9Uh3vAPqVYGr4d4W35SYjdmxP3buiZ5xMLgUojxGce1fyH15",
  "key21": "3RiD7LjWco4dxRsrMma5M4FFsN6rfyGSuckjqSh4EDmRNXA1ktRCAWBmv67AhtXc4waKdFG1a6pfvnf1QhqKrbLR",
  "key22": "39gNVrCTvAYBrraN43fehTWHGVmsKM7NZiXjZ29Fsa9hC8CzB2iudV8E5ZEY73B1LbLnatVAtYJ49P7TU7uTGQdo",
  "key23": "3bRHuf9Xxzstkrb5pM2mov3aMN8g6HbEqGwnTLysgQicV2PUsdFraS1B8bQSC1Dibsn4thA7RTffzB7f9akXyfp7",
  "key24": "5aX5Z5CcGTFtXk9abAE7um4kxauDMRm6Rwj285qgM4AJUmGcApdvxkVEkDwJarjePVV2Eq2GQfyGTHhKDY2poxMg",
  "key25": "5uzHQo4wz6e9K8uS4aimyMcxJWVJe4Bp97qxa12kvVyQ1SQmuBzYdY1yqaseDh5c8x9L99R2nCAE5AVFCUXpc8zU",
  "key26": "nygNVH4N2yCmX1ZqAPhVUqiZojHnftodgfAM5g2sLFGxgFPzZuci7xooFYCduHvKjwhxtj917o73xT29sWi3s9G",
  "key27": "4xd6YuAQe8gmrzToQojo886mDcUKGSWskqHK1ikuyDtVKSD5YAdGpakPr1xWDZ7HwzWMTxSWtfBDb5t14JaMzcXh",
  "key28": "2DrmtR4iCQ4U7Ak4TJePwyy5RtFPnVVUvF75xiV12kDbG6eo7MhoZwUhXbfZydMwBXJnTscnKnAFkfJqJDjA9hv6",
  "key29": "NZqZS7JVxVWR8LcnaHFwMjmddejdBcr17P6xZat6xUoLndrbYH1XauakjWD3oWHYFuzDDTkcZyQJoGHGtCj1eas",
  "key30": "n4gsY8cFHqUv5JtGj1VVmH5Tkgk3ShBDXhtZx4JQBRW4THzw7dZowhduXSrEKYBg6NdbwAgbSFbK1gHRGwP4oGw",
  "key31": "5VskiCSEP5pjAHAPEG9GmQpwngXAoaBt4bLv4yd9CEP9KyRmpKyuD6V3EVtNU1VgwLErumx4xXHXoaAyer3grDzC",
  "key32": "5JJK3KUHrgvcz49oiM4T4cqneJjxEnjNtFfyjun5on5fehbDbzhLKLrht787gZc8NkRqq4fkFtXp2tRkgGFrYUx2",
  "key33": "3LYe7E312KH3tinfzXzct4PP8FwKD8RTMyTuvUFTu7V4iRmbTEY92ZqJhNqva1MRdshpVNtiXPPw6nAUkqwm3C27",
  "key34": "6ezrxfTPECBvYpU8qSHLfDwFDfe2XsFjKKZxg4AaStASHrmTR4Mt5tXP1bifBn1VsfZiPVyQKJP7awXQffpc4Fc",
  "key35": "2YZdJKZrP7iDdmACWAR3B9vR2gfe2YcX8zD25xQoMsv4dJiaCBCeb3FZ7DZBi3DpRYpQSBL9Srs98xeEXbMXtq9n",
  "key36": "44zqqVAKfZcuzni3tq3jm9YAW6XebZ4aX9tvimr14aJbMjA6pCzfdXcb5HiHypP5KeTfennXFsKuoCMp8SiW32EF",
  "key37": "46rADktgz9GLZ2Whvw9rxWXbUFNrEKbhBnZsR5nqawVgWvJYkTUVZpJHhxbK2tNhTjnPCDZZz93Q7JiN4XhUTzQc",
  "key38": "3RjsraUSbVnBZJkv46S9tD1nQN1tPco4sXP8o9zQChH8Vcv7PhcRHaVPMD68RiSgxbWs1FHS454z5BpDAm4fziQK"
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
