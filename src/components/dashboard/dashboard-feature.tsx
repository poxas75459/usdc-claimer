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
    "5db4YQHA9oftcKUMeY8csCBobRAK17fyHN2epFHaG2N7KShuKNSysS2j3h7XVAT6AecogkqLpAH6dVGQsjsVFt9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MhzUJCmPqs3HemHbAiiubUYkaBDPhRb84Sg2U8h6te7QkEcvoqBEiV8sr3xeK5HybA8236cdmCLHMaLwBd6kAJS",
  "key1": "ufbfE84QuX9nhf4YBWV3PaK3KZPuXro2rwLEyo3tTU2fH3VDGofbNaW7GN7fwMfXqrbEWozCFhoupFfKDriSQsy",
  "key2": "5rFzZY68GXXkTB5YW8tV8xCiRsLTLg82KJ8ZvMEVRFM69GPjp8W4nn6qFkQftsFXwHBe3VpLaHWTgtdCw9RiDVjy",
  "key3": "21nrEGFBZp9nbV64RA2C3eJtVwVPVwacQAs4aeAsfJjKD5f27BtoCwtSJVtXuaAVDpebCH7nqpBdzhDrmSy2LNZT",
  "key4": "2CuRqQo2ehQStHuhT5LvQbSQHqWHijMHYA3dgiKxhLbLuNYQ9b5BCcXjTGpkrdbFhZQjAtpSni4R9agJKbLH1M2s",
  "key5": "4QGbAwfv9CRUE7YiZBqRDB7yNfGmxbin8dw6HpZmzt1r5Go9NRmZF3C8wMtmwwNasSaosMtLGKSzPbBiXr3D9eZf",
  "key6": "4NsmERc8WtF3E1mahVwB7BL8bxDkAkd633E6jxCVjZGDPHUD3KZGiqd1Ja5PLuwd967XCu5jNb7fGRT7W4wMgJYh",
  "key7": "5ayJWypRB8ux4L45YNverRQBrS3mchuBjKri1DEfAw9gfAEAk3eFd1MwKkhzVKQ91BxothUxugxyiiTrNJQucY7y",
  "key8": "4m1iwxvqzZ6vaNBXtpzTpuzGApvhAJ32zJt2tbD8z3PsXnEGSt8TYtkRJsZQSkeWBCdLU2db99XDwXox7Kt1moFs",
  "key9": "3T5wW3hZTa7ovN5Wbrs38MMdVEDD9FTwbdZDL6EkkpeVYHy8Vs53pUrcjumNJHEnHSkS9pGTghGJearLsyBnJeSK",
  "key10": "39xvRhMf5LEb49tGXiavCe4RoNutAEea5Dm8JFGynS5aDM2EFwetKeduj1e36ikvzwW73CFtqkT1pzn975PUkC7D",
  "key11": "55wd7sVhNj1QJrvbHNbP2JByciNNvTH3GCiVY9vr3r2TDzhwrjR4UABZmtH6GbmV4ZqZyazZBgiadktHwcDbkFob",
  "key12": "58h27DM13WqPA6nz3ZXrwKkT86VhU5Dix1iuxC2WEqvimevjwSMgYcvLKdQHnp84gZ5n6nEr1nYFPCjHk44negd4",
  "key13": "5H1VpdCiJM9t3GMpf6kB3swACv5rZ5mbETMCTpeSsyZEmU2jEF2ayiYccuWoGRawFR7VMk3p9bNcBsrMyRRmwMVd",
  "key14": "2k3QJnhFuoPnkMQjD6vvRAC6j4w8jnsFhofYNtrr8NkKGAQe77bVzi5Uo3NxxjUQLBJCw4G1JHqHa1xTTtJKXS34",
  "key15": "2v56WtCmGoeJL21t5vJHxhoeskF4tBWYKeJsFsXxRb6dbh8PRsiyXhEFfmFnVforvvvo4ufK42REBuZdGciouevL",
  "key16": "Tw4QWx9EuiLP3yXBmZTfquyBVycZTceJwYdYTbr8TQfHEfaSRBcRKjXq6FTDp8riy8HcmHcdBygryY6MFXMi35A",
  "key17": "3NFtEqGBu48LuXDQMa76yWjzrKwWSDxFvq57Y3Eq6pcxc4MLN6noVWfbfKqg7qzn8P1RANjtNtWQ2xsgZX7zDEB2",
  "key18": "35dREvSZaevnYeWEwRbsmBo51FWoD1ypdVqCc8LiQXWqYDtpnAo2DwXasWBcncQHYTvQei629zQiUZ7oszXN4iHK",
  "key19": "4hFwakg71dt5ryJGgUe7Ta87pfFcyzSM8WpBk5AjwuEmxP8pPGNWzzBJCXipuCW3B9zQLRSKNr715hTPMqaUbsqJ",
  "key20": "3WS1Y71vJ1Wp3pUAQYnKfVCUkAk4rsiYQz3qmEgiQZQf9GvPjCfGJu6RFQDx6TtrHZn3W9B45EgxvpvfnT4zaHsK",
  "key21": "3AiutVtibFXwqvnhLpovWEXs4wofRmvEVQjZuiKZz4URqbd3MzV21zWeK3cPEwxWUxKi3NYhBTaKDhVWHvh187Fz",
  "key22": "4dETr78oACtyQtg8bsybbGcJAXUjsGET5bVZBJ1vzEVF8K6ak7ybw1T9xkgmvZUKb2pwMSbRijKGob6YX4CNJZ2g",
  "key23": "35uLYhb1jVLforYyzGJDWwJwPW9GVNAi2NDCMdXv1aVxCAtjJW8sA1zqUrgenvNSdKjmmKg4uesirs415Jpo1Sjw",
  "key24": "vzarbywGz1mx5Kj19qypcrY7hxGb4USoj9i8TDqiQK6g2qtBD9ysjtvXeKfbVj2KRBLKfYPQmDyGvLFEHKRRF5g",
  "key25": "3vTW7CN81eQPo6mFkUYYyXEvMMwXkvNeHSukEApyA1yUJH9cyM3mVw5dgUoYVzQbtEYNr6sV6LAMazdLDkCDZmVP",
  "key26": "3hi6LcqPWsRPLxChYeSy2DiQJwLyNzDPLVWxsNs2aR5w5k1B48h3piHPinvCtrDaDSWn81TCPdopVX9oE6QTY8xz",
  "key27": "5Ev9VW9FLTCXttbzazAxuUsx3XR1zMxbkSKEd7rY3pPuJKCQhbkTvitYdAhnpw9o7tZAr6eDZVyCnh9Hf9EAfTE6",
  "key28": "Z8K8ggQu9Ptn4fN1SUDDBVk5jH6hBNbTkKafiRQoFz2TggNgGcKs1Azxs9UMfpF6bZCFor4FjXFuF2NqzAxoUVM",
  "key29": "5f2fRaL3TYNdbZKqsJATDufYNEVCo86PUWvahFx1jf32cKDXVgh6s2DJo88q5LL6zN2n32MLVHnWVaJa6u2Rfk3W",
  "key30": "5vkgW2kkkFkiw6qc1yPkFeBtUNRpGj4ktcgxfUXkGe1jP7dA1syWAq3QH5J2coyGLgdFDXjNt32ZB8DaYPHMdfAM",
  "key31": "2w7fFTekMMhcVP2nNMopcFATB1ViJHaTxQ8w8TsHTgCpPx6SYcRQ33gKWhZE633ynWVc1pxmrFuGmFaRa1uTPvf3",
  "key32": "2LrkRJPmjRZwZ8bTnwKhgDBGZnWp1LDHd2JNLwDu2QgdDMLi2uUGzUBzuchCwzrX8oyvd4MQCHVVKZddKWv6AcUz",
  "key33": "33rjER7jDPCH6U97fAtGbfXLrBqGG1xQbkRb2Z9DjPXXshxvzR6NCma2tEmAC2gWfC2YpviRxZhkpRwB82Kbev1q",
  "key34": "2JUZtsDN199Ucxwr8XMbGvrwcoQDiQP7QX3sBRgiXzo4DbMuXzkmymbMbnzTGsRD1MfFWQu3VHGnjhDXCvnT5eBi",
  "key35": "5ADJQKseWw76JiJr1PJ4AdznZ7LAtEXfqBAjqqZjSUV6oEEzuDATwiMhVjkLvn2XS687VFcKYVcaY71oKbMmPWNS"
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
