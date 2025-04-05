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
    "5on5Z2eKmfa5AjeJQHWvnx1CktmmjjYtGK4ZsvGsN2qys29pKTUY7St9E4ufUYAKZUT5SibnHTQH9GhJj6N4kSv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NJCohPErLBDEHi7VgJVLsm41Jt4VvShn3D5snRUSSHAd3mPZJqnXu517GjF6fRutKMqNBXQDuvsyneVFUZJYWVi",
  "key1": "4Tn4apSPVyYXhviu7MwG5QX161bRH19wKF2eTR4ibHixDn3QkWasuGYBhGohsg7GX7TD7CL6evEjmFsk6kBcrNvQ",
  "key2": "57Gncsmxjr4PuSEWbUTTTku87bAJEWg5S5Hf37SFiDazNz3ENCg5UuZqvxmxGuxajARFFUMfHhSN2LJ9CA5QE1Sg",
  "key3": "2uENrEL6HD2ZcggUMC37RzG9oLuPJBxcmcQff75FMjQcUeWcvSKBJDi2GGWEB2g6ZVbGtBdSXnRWavbd7AZr7xiq",
  "key4": "eKhBRsYoSHY3nxGeGkudkDeTwiyA7AJG4wWGuxYXKyTCaP63xerGAqYuNAy5dRbFmMyT2xtLK38BwxQagUq3ApX",
  "key5": "2oWfDDcFGnwWuvHf1AfoBGCbsRTg1equDjPGsjAUy5NeCFFdYh56sVVWNdyMDV6uMSXmiQirgG4FNYgHfRY6TBhL",
  "key6": "4VVoH3GHAeoEpCDJuAyLxWrC8Lv7VDF3QA82A4Ft1cnKmo53865p9tkURAdSN7B4BW9fPocjf9qoyKTzqVuJSzYx",
  "key7": "2LD9xCK5ixXmZ6te9hfX3Jh5vyUM3hh7eforG323NaiMwfWwHHhm7gcHaahMFUyYYLaFr1KgttFfu4ZZq98ufxuY",
  "key8": "2NxHFD5B1qDmjLwf43WmzJvwaThFq2TXQcbqe7XM2N7Txn7gxWydBsTz2C78yQj1bvMXP1A9gZwU2aAycrAX8a4w",
  "key9": "iu7UeGDzbe1YzyyrH7nDrVb2TpEdmKbSPDViPiTQ8XpE19bXazTJtcE8ALFaEozfGuNXZ6rqTndYnYXw2Dvbxer",
  "key10": "2tj5izGpDVuyTgbQuxw6piYMnx7hE17BMoKafAFf7u4XMWf9TXsrkD3JWeLCZU62wpPSDGsg6hTwFAh5gb12Qt43",
  "key11": "4X3moHXFwYcAFXGHKvsGerQDgfkPEmqPUErfNvdf5FLPw2TP32AuyP56NNpPyLDcUEsPBFQAx9xYsQkZ9RGaxfjq",
  "key12": "1DSrgVvAVAbxyeWpFeSMn5MA67bTJUCYiD46vXyTXGh2BTjU69t4Y7PyCEV4ohH1Yci8nd5irGrW2EKRfeMpkLx",
  "key13": "26E3BVTJi61mgtbkkkKQMWssuDsU8qmPv93jhB5FNBXeLqwHHGCZGTEtPdKxFro44gBjDeTaDzN8TeZSwBR2sUoy",
  "key14": "2ERCfXALjWbanL2wbDAgjLQNrt6SsXSJ7eiLvzhNfqaaFoFCsGVrnbtjNKFPPPH4QyocTPcuZ6Y7wxJ9e7JJdd7g",
  "key15": "487amhFWzpxoiW9YB3Qx8PUf2yDPHer3DRvXwjTiiTh7i8CoBBezo3bJinRiFkk3eLsMqa6CtGP3wfmA3zbc14iY",
  "key16": "rJwExu7ZomEvD7oMaF2zG2D3no9ntEAVkanmLKcszpfYAaAyqDRv2NNRwGH1cGw4TWY1xFjL5zwBBdrFuiZCew8",
  "key17": "4bg1UvTBMhdyRmFi1MitfVMLhc32C2YvZSpgi2m3j5EoGZ3j1yCjn6LSVmYtPdiLF24C3hXuKUAePbuJi6fKcVZr",
  "key18": "3GHLY5WwJ3i8CDDmCAYCabDik7BWjRpLn8EySKDcDKQK4udngKRE8Piu6rfNNPFPgk91BzDGgRJc6Tre9o85hvyf",
  "key19": "61vTRqzLqieeouwHb8GmzJcAyKwAADY2rYfZgbdFJeMSVqPwTiyZeFhY4dYUC44WRr3NoYJKsrrKtTnN3diYX9uR",
  "key20": "2SGT6rbDa6mbEdJxcrMifB4hX996M9getQomai8HYgqShdr5ywoyWL7jFK4Km1XurjDjZdZvVJ6TmpsCze1Gs2Lm",
  "key21": "2HBtpAbogPZWdhjEZxqKPEBEqiAXvtJZcN1Z9FvvG61uR1ccW2WfHo35h8X3y1P6v2A2zjayGgG1VyAg4sfUDHMY",
  "key22": "4uNuynAYbKAwV3Aa9L4QjXoJmiQA8PLEnHbw5CsAx978ixvC6xjTrroTa1ALCR8fGvvBmcohYbYQ3PF5xXZ9U8LL",
  "key23": "525CpkQgptGJJe1NHCdeCh4CtiAbep9oANaFUTNVrFsZCcA63mniy6MTkGX5GZLEzEr9syv3RCiVgEtt5keLJvYB",
  "key24": "RmfXmM3s54MPdvPqLVutSTDwPvf65GbwZEEHEe5jEao3y5sBy347NGvB6YeUMqSZ31MWTQBEPpnhxNdFAjRQETq",
  "key25": "2Hj62tdnXN3ckCJYGwp7C1JMHgdmZigYwYZbMmZcfeCf7kZhTn6kbTFrcsd46xmFMEqjJjNKjmwU6kRnDLCVszF9",
  "key26": "5dMHYBEKnyi7zFQFbBxFSN6VEUVdZGtKCLZwbUXQNr3uVaV3upqkhPtZYpC3EZ9DcUirYZD24bfGdoDAFyzMrgUn",
  "key27": "57AHf2cZCmdFpnwoePkHnsKCYC65MLKZVus9XvDbdmQuoaDVtB3fKNF9kwakkBcdoRaJY8jGJTBJQWPZAsn2Dkuu",
  "key28": "4Hnw8EhpzLK89pudGQAig2H56CgvtPudz43Lc4cbPJb6nTgbuaEDgJZ9PvdZmzspkF9XfFr1tGZNDbmTuivKiwu4",
  "key29": "4Hs4ERk9HEtghn8sUG1Y3RiikF1XXVCfFnNYQNHfGbsjomDh1FyMWPbNkcS4JQoDxUyshdPgCMv9o9X1FFwwmZGH",
  "key30": "49k8tav7PgP2gw7vxy9qFcrHfVW27mJYXY8qcS9Z2iodYzrEMAu98mmPDFfe5e6LERzNQqe45JuYWHoEYEzgqMwd",
  "key31": "pW1ffQoYreb2cBZ4kcwKPrTw5wZoYvVpZbM2wf4Hub5BgSxYFtb5D4sCHeKLGtzi3mbJfSsvvKtb6RuH9R78eUi",
  "key32": "5k7LvpnGEieVWqrpPrsw6aWhUcFoxGoJ1T35fqnNvRxWKopmZ769eCDTzAitY4fRnkkrJEQKzdk3VGvZbvUBfvA2",
  "key33": "SZJf8MNLF2gz7g2zsAANR4oDAe7XrgprKpoEYphYFqDYvoRLaf52f4RdJKtuHNGdCQfDAqKm9hCEvs5JbhPKrut",
  "key34": "2E8G585WkHqoZjnc3zM56ms1gVkZt6DEFyK64h5Cpsjw4ox5wW6WaUWY6ZmuCrQBy6p9nWxBe5HYbQoaQvS349BH",
  "key35": "uUzQN57FWiswRjoVhhg8tyo4W7mSjFNviEJ2rMvM2hHEJLALEinZRv9zY3xgNFXPoh7hxSnr8ioV1Gu9oqSUAR6",
  "key36": "2ExfPBpykaBwL4pwaQSN1ApedW9TkroAFE6diLS1SEw2n2jnQRY8XshvMz67ZzXjAf6REDn91GFe5fETzJcGT6qk",
  "key37": "2ExHpfZP5pKBeJPCCrf1pAvwB2xusrQxwEP5kcFYAWxVMvrV6jdyFk1t51MphymiC5oR9dfhNvsY55NvGU2LHEFj",
  "key38": "2a5KHNginQKRgyCbUVxkEWTXHppToMgnDjqf8BsjNmfJeeCkCPNV3ipQoHs2UDEPzXGw1j4qVzG5KEvkANNRnf1i",
  "key39": "zo2Mkp1j35jDCqFc8szqjmtUDFoMstBHN4Cp8bWvcjoKZFx2vgb5sALrMHhd2FgTzhi7AqsUFPwk1XG2b9ZfYPr",
  "key40": "4vFdnPhMFpA3Zwiq58xP47GFr9ysfV4c3KLPne1gbqGX6Yd6iQmty5DuKVg9Q6hXkCmcW35Xdsq4MRFDSX7UikER",
  "key41": "4NfdoTW6DnNfKfZkz5Dn8LLWcRAra4r8v67qBSrybhjWB8qXQgzrX5djVA8cyLqb4jDRQd3vFGrtxFxzvzD3i2Pu",
  "key42": "27kPk8n7RisVZG8L5qqeZ3jrhRrZJLCta8xboXkshB812oy3vRvKULZodyP1XVV3qWMuxzebuFoTmnw1wUPio1Yu",
  "key43": "5qi5vAUQLsicm6CUPKLR2nyyeY6jYtoqnAfD9hzSjnnsoAw7f8gLADMgKpsBXVY3BdsmG58UkwbBXWmAg1GPrvcy",
  "key44": "srNwQB8ngKWnQ4BFbJ67pdW5sSpFZ7c6883txDu2MW4ETcarHHKnxFuYBNPXyTuDiRXrSE6Nnqp2rSett5wRskL",
  "key45": "4YtnWue2jX8hdGtThYnUMAiTwaztVcXsVCCLDGsGmMr3VPMhVrs5uj4wTN4z5hZ7khqACNzfNLs3h9eckmLuRRu2",
  "key46": "SndWKNDW5LGMbDq6GHAbcFJzeFuCjzoR7kCsCHE3z4sV4JVczboW7QGqP7pMtjaFtGrYekFs3Bi9TNknHyJExbJ",
  "key47": "2auAUwhfY6ZFimbBq6oYXd839tJSLhPf7jFgmwmTMERbd3VKbf2K9bUAyFJR223xiMtREvs9nJLiUnvDrz41DZdS"
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
