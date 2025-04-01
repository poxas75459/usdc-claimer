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
    "2NWuGuvDaRXWu7nR4AUZ5sj1mwhvsqut982a6aEVQay2pANGutL7rv5gD2BVHy7qEMgnJg7voy4vyqwreCYQJ9Pi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HD8fz4UA151oANBTiGKQGvnm4Xy9SdG5u1LuD6VdBBLgjnPAYjpBJtC4G6VNqYFUfS2qswfKejmWJXrsLuAGpQM",
  "key1": "5W9YK4AvoXh79yfpWVf7Yt9o87Eh8J34E1cvYyqhkk8nHuVzg5ErnFZRcvHJomDDxb2no19sJSR9Hs1pV6MnUC4c",
  "key2": "2YWQKs3cSBKzECbKfUqXEHJPcQiveS2JaEy7tw1WMz4Ep1t815gXsjZC3cDfhuoGVCW2g7d2HHAg84HMac7n35ev",
  "key3": "2JtPwpLmytGxk42rhQaq8Hi1MEqvFCfQRA5u1rnGxgY8XHqzUJtgFnniGKAz3PFQq67D6ZdvkEUKwAFZaHPzMg7D",
  "key4": "Wzug8WUoVPemiQjHSLXhay8e6UrzuawJey82BTaFAFfBTCeDsirVNrsQRXBD1YmKiKUFBkHhDixYH6o3bkxmfmm",
  "key5": "5XAeqmJxew3RXprK9HRncUrEPShDiQJcegNjsBVTPcc4sbPRXMjLR15tD6ygDDaBKQaDJm8BdcFFNmLgko5EFJ2H",
  "key6": "4XN9t9kGbe8KApuUej1j42TWy4sthgd89zFj9Ao2BdtEaxmGnyrL5EtrLsxredTxoHPisPMzL3LB6eFJFyeVoz7A",
  "key7": "5X1wERpoP65dzzBWfk9tTJar5sauTmrT7vfpBYk7AHGebPude2jo6AuZUkqSvGe2MHnfRvvtioi8PA2SY9r8odcQ",
  "key8": "2Ahgamoad5r3xE8BJDmXLn4t3dLejm6oRC89nL4LeAv1sTJLYunBTZfVK7Tqq12iuqAtKuJ4RCVAoMwbU9ysm6ee",
  "key9": "4BwXigyVd5pJy19jFM7ecqbpH8yxa6Ah5HZMK2xBdoAL9GidXyfGUYjkSWawcwQ7Sw9HQmE9ooLzGUmBvmRWYMDs",
  "key10": "2ewRc6vEFiPgkdZmF6KtgYFk5RsCnFgPWahYEzsEbjUvxK11jCF88EnusZUqb7EK2SstPaxt24gzd4kvAkouzM8e",
  "key11": "3bCQxNJnXesQcwkaodRwk1hvhwU2j4Vpe24Bb9aWy6PWxNPtvwFcpTYhW2aKVrSUiyozyXVnNGYV3gVEAdUt1odE",
  "key12": "3HNAqw6meaXBDWLUXgii3E6N8UAMSm2WSqnHmqeqK5Ye8bDatKdopmNttXB35KWmc8UUJYyvgrozcsJArMfdWDKc",
  "key13": "33TQwbge1NvP7G44LG1rsFA1cX668v6WYnSFZ894vSwca6ZQq8VDy356sPAzyqzx5KJAXBkb3tLLDrxa98DBRiD",
  "key14": "48UPxnYBCBhXjVKhScKJVXobRdSFkj7PEdbyppzkrBhMwjh9S3AQfpyxzqG5GfWopcDF4FDBmGH7BTBX5KDBuSDg",
  "key15": "31ZH8nG8TnrCMJBK117obK3S87jdmbfaZgdKBssKncnJ1E5WzuK2aNjJahAUzpq9Nz1gx2pMyTkhHiu1ecC9aiD",
  "key16": "2F6bPRFNuKWBAqyzPVC7YryDcSc2dz2zz6f81WmEo67NCy2SEWqNYngSX5hLb1HCJXHW2cqLrtBgkrbMbX5LvBoT",
  "key17": "4vz8N5U3JaHXvDFW6rac7sTSWi89oA8jUosDFPtLAtW85zpGQNJFxk21TXBYxV4dHoxCPNzb6cEW3KBN7GAm8DGc",
  "key18": "2Pw51z2Ddp6rA1ofKQRGBYYMVFBRmmw8CAfAXDBSnMmxMrNa84fcAisgGBJwcUCxne1nZkhgL2tpfjiBV76sUZ2",
  "key19": "4Hmu6Dqwn5YSSkUV6E6hHmBpfsnX4v4KaryPK7i7stQSLDLg2nwaDCgnivgkq38mJ7R5j5MuawWkRQ3ALpEYiirH",
  "key20": "4vpRaxuQizBXhcBEM56xMRYa5X4U7ynUF3cHw85iABEadC9F5atoHDLhbnkCqQpzFzRT5uFPw1oGATyC1yjUcbSu",
  "key21": "3Mru8y9eZor66TqtQTSqkMwEC7bLyXQifSzZq17EjsPzPMqQBdXQrBFS9jyHdFyrXbUsCScE48181SNaded4gtoa",
  "key22": "Qz4HfUGM1GBBpkDkKCntQP3t1P3hYUJPns6VwmHaZdxnSFuwDTNFB8nvR7t7V3arE6iDVVN5wM4bnHyFTG1AFyc",
  "key23": "2VbVmfWBpExPPAUCoetHKgJ5F5tmnq88YDJzcqupxoyV8QyQW4T4yFPXsiEr14jpvFEF9NT1acVACeVp4Tz8KwoR",
  "key24": "4GnWru9m7YiqVkDcdvKo8o8R26AkHtyioBQupkSEC9RNpCmQidoUmFnhoojB8ymSonYhBbxK7tk76Jhy3mi9FWbv",
  "key25": "3ErwcZgeyY7mG35Hrp7nYGvpa3dkUrLoPLRQVvtrErh3Fsh1r22MY85KMLJTnb5tm553NUesBd4yk5iKHE2KKXht",
  "key26": "63xpU4WcSfvGmyJD8qyNsqXpvmqiJZWWu2UcGHYBDgXFaUiikotssL148ySJX7vsr5Y6hi6EFQHbNuBD9kiN1TK7",
  "key27": "37G8jsazTZtp2yN2hHvBAHs6zGVUFjvC2UGvt6fcJBUx7FcDdLRQFwgposcoCPqvWG3PMNsUQD6qqDFKoZgjhh21",
  "key28": "3HQ4i5yDferkT26SiBzknMJFpFcmtAimCvDEW4STvoZUBLx3cQ6s5Uz1WLGXqMjo3DZQbSPw94Ah4b6xffRWyUu1",
  "key29": "WsZkjP1Hr2rDiXPRVZQxgS2qmeJNH4eL7V4Twn9FeU8N6pPir3BRwPtuUdpzXTAzhJeBi5A6gVDcEr6LG8sqFmz",
  "key30": "5WRHHuSaxTv9SpHTD1gDc1pWPJm8uMr24oiTy6V6BhUnSZgPcH1vcAguT84xEvdwDvctwG8XWM9Birua5qYMEPNL",
  "key31": "2U9fbWxq8vesgYtm7BfaqGC7vBRMJR7JQK5rXeATFr86SZ5sqAtGfqBCfkCrqFR6J2ogcWzPhUNDmNrxjEy2Vdqr",
  "key32": "4VjuqTKeTaoXKY1bCY1c4rUMxreDF5nr4T42j8e24CDr5XiFQijR2q5ZmYcrKhPz4a3YuG85GZxssEoFwvQHK1sf",
  "key33": "3quv9VJ6dccDVyDHAeue5MnpCcHZZKEzq7x1YzRYdF2PTXogE1PQ1R2m2xE3kAXWKZABaXY2AjqrWbWr228tUYk8",
  "key34": "x2VeccAnvvcJNSK9pxgKmdErawMsBHX6s6nUbECXw218w1Hn3fhsydEMQjsBKzBN9vveyftC1Jyxg6tPGhj7f8H",
  "key35": "2uRfS6L9EiLMYrZoRFTVWwjQ9QdquEsqk2Nphp8jCtqb8FRwMLTvQcdzT8P6SwVeXnR4MLGv9pgh88AjGMqyvL6p",
  "key36": "32NGf6TFCaNGQHkBzSRaPtvyfWa7aK2URWh66NGEHCK3srHgtSZk4a4654787PFx1gwF5BuCxnwqBpNZvKNHM4d1",
  "key37": "4tQMaPBndjtLVYCZk2evYLqr7y1gRMLsu3vBm38DKLg1P8pqC7RanrLYGWaDnvnCdXMYsxgwpf2b3YyvjWKKEc4H",
  "key38": "5aunTvJac6C4W4pGgg4KPLy6k1MJZxP6Ghhupr9Vw4i2zwsqcEoxodYjkYwqueeGt8yMxet9aBixvq7EiFigHwY3",
  "key39": "4bENw5JMmqU52kmwb7vUuD6mL65xV2Wkhw9muXo3HZFJYoYCCBbSdLvnbtV3CFL8mKMAGQi4t2PeU5HQAu3euDSk",
  "key40": "3KLqMVgGUXs3WgLj9fMUicawbWxw7RQ6nLAVSrfkwRgwLDW8wFEmn5VC6tfrkeJxcZmAE2ggcXNaUoCApuL7eTWJ",
  "key41": "k24ZyMAq42UnJMvJRdTPcMhm25KepnTs1kjSAQtiiTTgfk259crURQy1ydKbkpX2AeEpsZanH8UunE2CjtMjaLe",
  "key42": "3QPpFD1WAfW89NfFDt6S1ugCswdSJVeCXTgAaYX4SZUY7wLt4J4KPUZaVjyvtqPz8hZJQTofCJ68FJNjy6W2tgts",
  "key43": "2ynoL14QPV8JKaiV8FzrmYXctaBL9XdVVvth35aG9rTvWHa5JAHEi4g7fyFc18diW5cnvvf2u17ZeyKQdBUPPniW",
  "key44": "37k8PWhjseWSwpnJAPdZeNREtaADkwuVjDZYsGw2r3VEnhcm9WQSSpVwQ5oQU8ui5WFDgpcY9uovz9WKstH1Fynm",
  "key45": "dvTQdBgzU1pFpTsgZrGNoRf1PvquGWCT8soUZgXKRzHLVSELse4B7xs1S9xiA6PGmN8ugbpetgR1cm5jmVGhffJ",
  "key46": "3E1jfen7dUpUNnVEZKKR1cdZtVz8u2Tc8yK7TrwuPhTnqYAyRWzUZ2T1SZSpJZb5GMYEaC5VjvArEZMksQ16nic7"
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
