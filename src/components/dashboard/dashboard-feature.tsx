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
    "cKZNHPnhY6PyE7VeMZZLKCyYVFVswban5VA5Mw8Vuj6JWDpLcRwMEqjR9nhE4Zx42NQwi8bWfr1Wz1MAXrYodMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jGPj7riXw2mZ2tKbw3f4Qsz36dVcW6oPpfEzdPuoTsHoEjhpbKA5u4PMKia1oBxYEhVRpDJ9r8UK7uvYm8HduF2",
  "key1": "qSAETnU4WapCd6eeu4LASEBb3AM2hvH2bSmV5sqnFbPi7MBetfEvdwCr47Xwt5tX14scKGnTo3nScaHwsDMF3Ka",
  "key2": "5gNSgp71nwntpht6bBvsbRZ3Pr7SBznPthGT24gShcdV3WAouxc2xwAJidae9L8ZRsRC79Y6Myzwwp6FVRHcJcxJ",
  "key3": "5W2ETvsxTjhcGntiMXZiUq5E8f21t14jSG1tQrNMybf8pSLaQYNjSrDtwu9veJTeL7aBb6oFsKV68HkVaD3SrUow",
  "key4": "FTMCUVCcEZwHgq6Nwjm9P4TYMRZkLiNoFLY7aWQdbGtLQrQvmQHFMvJzggDgnLnptrgDwY22Td3hYgVSxpgGAni",
  "key5": "4CzhzYjvjsMkgKcLg5HWmhzPScQhzxWEvtY2xok7MwDQZEbB38eyLZuKn5aVjPPtZYekfb1sazeku5LxNxFJXkhE",
  "key6": "4poHVuftin9RHpYdUuogpkCHvX2AkNPbRw11dQtA376bGRtsxqTPKcaqBkdVLh37Ursd3KUw5u7VL57FzbuueWc5",
  "key7": "2GUUpYczyqyE5nrMkUigdisRup1aw4X1MReYjG1pVYcrZERzoWk6h6V5jz3f3ZQekPt5m4vpxhHP21v9HhWt957m",
  "key8": "29AhBMQfbbdJ7tdw6u9j2JoEXXz95CoREeHB4LrYabpYGRwk9FgEBZgDvgbEXNmpv9vcMZ6Qt38RdoKo6PuVX9wE",
  "key9": "5FgYUuYQYp3MahToWAMqyNgns1D6wTmV3Gazb7nUUJFYv9z1MpZ1HDnvsE4MNUcYqgfrfjcT4BcW56rsLU2qABLg",
  "key10": "35n689b6x2Ds9N8Jm1EM6x8duubzeZcTXuV1GTSkxzkJZF2wmoJG8bAu17a8ZV4Pci8cab4343zU81zqxpnhrKG7",
  "key11": "5XZd87JBw6TefMjyB952H97cVNeunTLsYsAnTyUDzM9P59PNUQNdQdtU8yR7396wNqZc2NRJPbJPhRCdw4QAHBTB",
  "key12": "oWJoHRG1wHrKnrcTsysdVZP5FevQhEcQyqZgEvUwu3AxWvXcRnpe9bHZREpYbdYCZXvQx7g8Cz28KQTsrMRpsHw",
  "key13": "66hdNpD17PkfccdrjpuzQq2kYtpAGjX1G73tP4ZU356EJ1C8rXf5EmbjMY58UfXtSTniBwupjbpEoSTRi8wvzxZV",
  "key14": "453YPTyEArmAdrtE5RLPRKPFdkz8gR1QPTyktha1FXQkNcBaY8uUZMAnccWhi177K2YcEbUkdLsfzo2zBC7qWxf7",
  "key15": "2t7UZ4N839a5kib4YcKLKZZ6G9L2b64n3VQRQgaYYHSQ28kTw2HXWwuweeZyZFGx8d49kzKigpjGaH56YE5xoTmy",
  "key16": "3CNvmumLvcHvsfRq8Ngot17dcHoejo4ekQJLtWT7RWM4DE3bJvPhTBXLnVnkTBUNp9Q3mPJ6CkkGKJBMr7h6yrom",
  "key17": "36aghbnuzrXXQmfs2cHK4qqmpeX8g2ozYLvKRRsdTFsLE77H8VX4YHftUd89PjfZ5UL1KdCkXmYyJvMycJzRJUqJ",
  "key18": "4tTJzM8h49Jp6spqhjxWZqFTVAKSRZ5szCfCFU6H8E2N5cR9GK8dXUZdenvXxa8FDEwfgMDH7f3fEhNveix3uecb",
  "key19": "5xauKfrYTxm9G7vtgczzQYpd1t24TLkv5D5oCqVPdDLGZds238Am9Hki2CNz4KgDBWBPuC5Qa3CWzatXe49sbbmz",
  "key20": "66XagG8r82YbMzicebnHtpda1wx5paMN44cPzFXJz7D5LcoZcLjfr13anxC7FUzDsL7mrcNALnr6Tv7wzXvJCJEg",
  "key21": "QXxY26cRdGudqtZAxbJj5vtFAsnZGsJZpFdtU2SUkMaPUzjMxNgh9Mw2xwtRCz6h3qYqSVydCCdjfNVS4pdihCM",
  "key22": "39WxgHcTGd6LHtCqwCfVxhoVmdmQR2pFXcp1KJPxYcRJecMbDgDoBguLhPhPjc5dE9Tu9UYgBKC9e7qYYQGadSsR",
  "key23": "fRiEKyPiQtSN92drPPVNCpiTsXh4SmtdWu5apMJg69N66rAD3aKbXfVqJrnKD8T8sqpUANeD12BUgwYpq8X1WkA",
  "key24": "322E7Uc1Z2FMJqne3B3iFSwTAmCuiMRpMujnmHfxbymp42p1jEUHWJrtLrB1ZjcvP41xYLoyffMzxoMA9TyyuAd7",
  "key25": "3hQev6obSsxphPXY8F5t6GqSzkG1DhYtCT2Uz38NzarV5UJceM4YxkUWwesiCwwXpjY3BFzTpHsWpD1ydUce7joV",
  "key26": "3mXUoCUheTUrH7rYrwtjNUuc685J5VP3DzxuZdPecig394YNFKF8hRm74nyPUuLCT1AES67bPuTJGmBBYsD4w4Ep",
  "key27": "cExd6nVp1T8mdeGn46XXaTbQr9HonqhxyNTf7oY98ENG2vjobQttgn8A1uMarpx8RtpBieN2HJ7Pg2UXYhrEGiW",
  "key28": "673bLMxzoRzj1yrvW4JmUUvseBxtFREJcJiNk5kxqZD6D931Xfp6BRGn1m8UJU4kfHMUejFQm48QewNitVxZNj3F",
  "key29": "57yoJJ3S8t1usxduB5vjjZgLuzDx3TGYRAKQJb2nAwP5962tiYkX1Viq6boHQ8Twjy36f7i9HwfxS6zPi2fXuBGo",
  "key30": "5XRWqkSLkp7vhThSUqDyAYZbEKoWH4n5SpRXK5PGtihoq3HPXciCDPJnKdxizkbmCbWXAhi3XUXT4SxQ1akHFnH6",
  "key31": "4Uz8c1hrXf1TAiCvKz2TugLJMzRsB5LTFVPn8jArtEXLrUJSN455Lukej39GE4KBJWgTe2xwgYfWVt5JqJa7o26T",
  "key32": "D1ACiZ2t5gTCDAX1JeqGAJwd1P73wMbAYBY9QBovogNdUpCqZ3P3CsTJHYscvXG9aSfESWsmY7F6StiKC5HqkRn",
  "key33": "YNhBi6g3WafPPDzZotzCjuD6o9rLiSnB3Wtek3bY6xqAiQyHogpbYRefB4R6GWRCK46PK3BUTb3sQ9PyfMA5UWP",
  "key34": "2uns7HX7xC2G7n74WtxJq7qRaG9KyDycb56cbXHx9grDKPdpLwMyxEWDSKJ98gMm79hNuZcEw9b2mHNeTt4XnQog",
  "key35": "3pDeB7Cy8hiXhTB94sY88wRQhRhLxva4RooPJk4ZT2ZZizwuWCRvQtu7bDr7wgoZAGEt7xhUrf1x9sJBEubGi24D"
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
