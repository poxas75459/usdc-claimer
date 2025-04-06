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
    "3EZkcnvs71kYkPRewYxfrmkqN1UR2tgEFhbdXbbTCxh9VhCGYbm7TxyQQ5ux8N5ZqqkLNj3ptfkxjRY7QrH9qyPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cGKu84KqB8tpdeAor2qPbwEVJFJrK2zFzAvWRtwG8u3f7hZktS4JpoiNP3x1yksobUxLiLVvfAsBM6WCBCyqWtv",
  "key1": "QT8WYS7GpXxNbuuffmTkEjR593NRRGgJCnge85E8zjrE3wnvd18AeXhydvBHrvM6GSWg1nmaWdnFA2w8irjknf7",
  "key2": "4fnRMQ7PpSNVV8MPJ2AH6n69MphcVuvqEGT5uqNVHLk1BXzv8RvQubK7GdbKYQW6yG2Ao3vvzLnZMbndcCLjehJ5",
  "key3": "3KvFfYLxscGorjCEKy863ZdqqMrCeN8gehKdHsYVuZNTc8KcYGbSs1o2UATFwae7g54mu6Kzx2jX99y3rq9ey62j",
  "key4": "4J3yvJnD91VHsEoNg6wedpiqzaFfTUZkAaaqgiv6p32uWGo78oX9UhsU4QcKWuqN86xTicfDhSodWYUcYgRs2tjz",
  "key5": "G9S93brCLboHbCX4PdWTVyx7Vy29quELMZcEuybQBjfhLtLeTYxUq1HnKDHwCQrC1c9FeJz4bqovwZ2bywXZj5U",
  "key6": "aHW1vT8f7h4Greg4ajMP6hp8uRELJD9EUiUE7zDH88J5x9L7hiBTqfSQHFjwsYqWpy8M7XAwPQRDoFqFb8zWntB",
  "key7": "4FwwQoJ4pwGeChTTdFgdH5Kxk9aSF2Uv5yWUrBEumSw3he4fcx1NCGXCpn5qKSt2wtZUTokipsuEBuskqutY8Nfk",
  "key8": "AdsSpqbs4svnt8ETzh5fjG6cQnCGC9bPyTZJxT84cVAVU16h56Z7o4yPBLr3jkfFs5UoYK1dnTSviikmQRpiyty",
  "key9": "jgVAmtk3jWwKB6GF6PxYxvNuoUJDsw3zmhjT7GUVnXavANu3y8m1iBc4APV1GHA1MGCVYbF1UoarzV3kS4mMheD",
  "key10": "o9LK76BkAhwj8dinQEDJC1NqFS8eyenLhUsXEF6w3GjYJgmqT6W7Rz43e5cnyTgEmUnNd1Rqjh58U7M5Cb17Kk4",
  "key11": "8rkt93MpJe5tZBoWn7LLoec8hf6vUdDvQnBKMp11H9Gjp4tVCFd3eSXDfAnqRCbTMTZJmcJXPVss6Gr6HwkGbLa",
  "key12": "2eUyvErrqJyV3MKEPDkd6vh7sUPXWqHvgoKbNJHzgvdoX8obsBGz5kVD3bXjPu4xon41PPqzwXYydNe9tpSrB15K",
  "key13": "5VLtaMfym1ECVjffdXyat2qrA5FcxVsNRRP6JqhfQxrHpSGU4Xx2atNqHfTgDehF1bmGCzVC2LzKENsYC8frYETS",
  "key14": "1JrhcQaErYsvbzMNMD7hCLvvTWhs5FYutBeh4bEtDLHKBgKhFQMaitsgcGD964HmufboFQJ79iy1Bv6tZSVd7bz",
  "key15": "3yAbdfSGAYUn4KaqrUx4WknMNeLUefVF6HR3WbDJP3FW179rZEt38jPKyPi1nrmyagi2SCevVwK94GxHcFLj5B8U",
  "key16": "5wj2DrcKo8c5DaAT5Lkf8Cvd15sT5j9U8SeqaDnZ7HBSog8XBnhAZRug2s4sN6D9Ga6f2Nu67kR2JzpsqXGufueQ",
  "key17": "3TZpv7NWX6pWehY4sZbvr1afeP6qBYMBbEuGSb9VnswFVPKtBt1Cm2BXVPt6nPJ5wjYNn4GWsM9izte9VXX6ec2d",
  "key18": "3MwHAcyerFPWxvpTVoTALcJWC8tjnbMiC7wa4bCnFTXPPxMBzFSoLBbpNBBqzBWTPr4p5pDDVCTZsSY5YCjfxZoV",
  "key19": "3y6iCW1BXzrotTwxHHEWDZNnRvLcZkFpUTA4EG3wCzghcqL9xSwwSK3NKEYxn4fse99fnpqfyxfW9kzgKstC4x6i",
  "key20": "4USXrMCas3qGHKdnGgU8J7NyuAsRuPWrnL71MKuaqSZuMHLDnALsa1TYzM4j2tznnsaSovgM9v1xVoFktmKuTDJH",
  "key21": "2hdxxVppZ88mw2UgrcNKRbi2z84fK7AmQTAvkZyAp2cwfVSajbtFTpASst31tmadTkXH9irjhYskjireizBkgTyr",
  "key22": "KY2UCRBeYCGyfSDMuVwbvqUWPzfi7ALkgFcWrDhvoNbWsMdJbAgSSshBRsAuU5afdtmg4QHS6PtiA4tpNZ26PmL",
  "key23": "5DUPuRtDoYgRJC32J5Nnj85a4RxBBUezcrUoN73FF92dBsheE7WAxhQV14uNdEA1yQFRb7kPeSuckW48VRuzokpd",
  "key24": "2MosdRdsPJ74krhuwPksjwY4QujRZMg6vCTtTAbf3UyobfTvNDJveGfiHqGWWcSQMuJiBJEnWiYKuuyySkr9b8Wt",
  "key25": "4TcaHBdCTB16u4JJoWQ1kn59jSBLTsNGzQND9zNGELBTrGZdYJofnUWXn31KEiFptGfNJV2715y9np4nSvmoPHyH",
  "key26": "449qzhXMHBU1r3Gy8n2qJzo34xww3gdDCyJq6gHbY8oDp3HPB68XczvwRQZKvqcappMzLZxvrehSKU7wj3uRHBWp",
  "key27": "3AEV7DtJRQZ9x3JEyoCYwwkk6ueZMDsW6wAauQUmmxuuQ8GDg2nc5QEQeHJC1gbeM2HM6s9KhHz3wmS3sVbwzWm9",
  "key28": "5coDHnjEmvdP5Rx4jSnbMatdQH2NtxpsddB9rocnKAxCS8XSUaQGTgw6T4eA7Z1VbuHmAi9ypcvDgYpdxXx3h9N8",
  "key29": "54pkTMuGDUaYavLbnN8FEZeV1yHHJh8q42xXJp6uFk1EQqKayyB5LJC9KbE3pJhJuzPSgRHiyPXAT1t7bsjXma72",
  "key30": "4CcqN1jqn8RDfXmvuZmT3pgwfayWPZxok3BuMFkLwWyMXoyDqtetYtmpm4GvQw1AmjFsmoCZr2uPeNasci1MHZXw",
  "key31": "2yMhuf9oxp5SP2HsdYEXqTsgNqXfUBouamaznsxWWSWHq6Hs5QTJTQuSddzTzxxK3KXPeFR2HFMkVXfbsoNsghne",
  "key32": "3nQJViUfrPhL1KwwcPuM41AcGjUbUTQHVVAYNmDrNCPsy5yC2Bixq7tsUB4THxxgjQzESVQcvSSYogFCFDa1B6jJ",
  "key33": "79RXsVH5BwgqJEstkSddCJ8uCcQmfFfV4KoVs2Qj7xe6v5rsazsZTETnX6LVEvGaPCGNLVMwR21AM5tHPzTGFb1",
  "key34": "gMtjytBMDS4wVirnAkTuEC1PP55zjhSRUn3HTNk1mDZiiXhbswLX97i5AwZTNYiPSEzxvGUDUo7DGWvm1kjcmW3",
  "key35": "JiegQthKiCcV1hNyxb16hihLPdfxUmxpLMrqzi4LiUCKskUaHD4ozmwM1bqJw2udMGF6MPJQcgZWQUYNayDqgfT",
  "key36": "4UzapzkkLJgzRvXFXrjiLt3pb8BMhDphQaYgpJFV4ZSyu2SJFmQU31A487coHGh53pbzRmUAkEvWgyLC7KyRjCSA",
  "key37": "xkjAaos1J1F374pWikSufsmNdm672jbJ4fPWCdKWVok4zJHiUYDXLGLikCyq39MTnUrymQvjaZXtDPCLbYw9PRK",
  "key38": "34FqR8Mo7a1gHEfarpiB9vpHBFYVLrFVwVsWtw4bE7ToiF5pN1Gocjqt1AhgB4QhX9TofzKMS5sXfKM2XU6173UW",
  "key39": "MzWFQjszgicm4sbXSxrro93asamQKKYP9hqX1GKQx9Awvj6tbCFwCMkRBfHzXSCrjTqugp5rkrahj8NrS64Xhk9",
  "key40": "3HwSCxqDJ7YcoePCTAvBCPs9aBwWX8xdLXu5Fvyrpd2Kg7LDK6PoU41G3DfsKewuhiVzjMpR9LTYnRcqNQNTpc8g",
  "key41": "2N23B4WfaLkAUrgEQZuGnnXNKEv2y6vYXUke6cCf8Ld6p9Lo1KnJUtsz24enaxunpXbLvpay5aDYB4QESxXRSitd",
  "key42": "46gGPxs7sL7jGcTi2oEqz4Ywg3REZJTHzaYVC9xzxgE6HjZrHnibjqcVhA4dWQEtbf4zmMBChUBR1pjtk6BXKgJi"
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
