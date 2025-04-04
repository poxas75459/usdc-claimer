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
    "3V2Ms3fXxHnLw9q4XBxQmTtyuf9gPiz5FALeuVyUaNzuupboU89vmBVN3n4E4nssXku91BAcse4uijv8Jig5epWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51tc8S32nWp4hZZ3wxVnFLwCZPZSZZCPa12uxRavbHmJwRFpJsXq3kw5qEpUAWBy858cymmo4SM9nAfY2Ezcys7G",
  "key1": "2PyALQfJ3yjch5jwms7YukUn8HcApz3HskgRVm7pBrCm396WznFKEZZKRX32P6272pzXMNGea2mMSHETKfRFvFVk",
  "key2": "2gk8p7Pj6gSnLd9fivfeZsLzDvmTkYjKfDBD631B8BY4ibuZW5DKxtB4iXcz72MtNyHSLga2YsxwjYaFVCs9bUUF",
  "key3": "3CzSNuEfBApoYBmSKWbCb5yqcoyhVnRmZrgEfKTL5Yn23DUXUEyXnkstZLgsatLqufgZqKyXLK7T1NFUyGK3xDUv",
  "key4": "WUnpudzaJd91ZM5yDcgzhusqkE2i3kbDE8UAfE8NsJT2StwjrKJgFfPgv5c2b4ou1uLFDn4LwvLpn4sEiQFyeSh",
  "key5": "2AbWHbLALwfUfbbkC5HBPLovJaTHQC5Yy8sfF7tSNj25CPQKzRpFcj4rzkEJqiNxY4GXA47AN3i8RPLHkpefsCEM",
  "key6": "5mdEkBBZFGwxFRGcQ1ZmkNsth1iws6VQskLaXVHJvQFczpd1wbViVqYhTNcbaUv1ViJyiB3zjBsqRbvmAFZhGomY",
  "key7": "TnxwyiY8G5KhnNND5saUNk4S3H2f1uJ4RhmSDwhstPajSovXyQ99zrAisSfzqsAAzVVtiQ4rz75AujcoRKAzkpQ",
  "key8": "4xjBN9nAEBrt4Fi9U3sgboQZn3pfrN6bNpUd7ngcWA7hBivLZR4gHxEFECPiwK4rsR4RVzb95Ef9zWpw4E3q5heJ",
  "key9": "s59V6EqQFcCJ5dV37m6tVjncZCYE4F6jxJFJE1sMn7m36FqdwRtSv9Gq6Z4eoiZtDYs3JapqXsE33fztTEq9RZj",
  "key10": "5rFW4hhNUwqFyzvtiyaEK4ZfgMVoQD67sZumtoghZAucRLqyTPoLLF2rrbjYUddAdcTCJD6GGQZ1RfTZG9dRowPE",
  "key11": "4sH4wYRx4e2pGUdnE8tqsRKnGcrQkHnQVNNnZVMHvde3pc6Pm8f2wK4Ev5jhJByGzRtTMcJYda6i46nKzLsx9dYk",
  "key12": "3WDdshkjuAX3eLQxvwVjhC4K7sVRcfPFxjWfq2KfHnhG32hBPEAS3M5xwGtyzCt8nva7dGGuLvnYXaANnJEA8udJ",
  "key13": "3ZpUfkJCTuyvRTsiVAJsmAo4Ur3vr46NhGkXNweZWoFtVkVDUX8aQx9pKgLxY8jmrUhrasxmc4rj6cUQ9kDHpksV",
  "key14": "5ueLeRjTciBCYV6d1vSzgdAWzwTdk9A9AazPBbhVQfq1b17aDPjpFLWDABh6b7m2yAtMWqnvAUrMrRSps8PQRT7w",
  "key15": "51dnKF76QzCpjBUChvEAdga1Qwd3BUiNcGMmGkbVEoVDfyH23NW8gvREokQgWSybNf83vaoCvwhjhcvmmYmdyARA",
  "key16": "3RnMYCWx8dtAuzqK6HDnbU9DCcbfNh8nXbjxqtbJZJbKKLJiHXZdhXFiF1odRo6xmB8MQwWz5gEpcmBSzJdo6M3s",
  "key17": "2DMi4Lz59CrXML7tcRP7ztco74m5CD2FVr3efGAwCtnt4NZRSF6aStBfbBeS34RFLQBCinrDrPXcgk8j61tTJYD2",
  "key18": "2zwW3MiswjDZUkUEyJVAafaNbKnjAEotrPuFbMsvcPvsKDjMfgYVR46MmdyxxS3FFSj8oPbkrHnmrnzptET7oBGi",
  "key19": "5eYH6k8d61vGwwPwMkUy8U5hXHqo2VhEecUnfUnzn3xPpSV7NiuK4pCfXJtNhGj2Yt82VH4FRYivAghy7tS9osRc",
  "key20": "2XnyVGz6FuQLzB72yw5GS5AFsiHcEkXc2iquZRkEF6fnPmkBxN3DboSjyZFDZMoKbHGaCJty7Eua9K5Qvy2AhLp",
  "key21": "3e8h5yx98Vqsiz7gj8dKWWB3jCrUEF97KhDBHBaj31XDorFYUNpPHAJvatZXKZWtLAPbr6fH1gQqmHuag2L4VzSo",
  "key22": "Cz4kHXa47RA5VWRHYK3ZhdHXemMmKDHA86HMEHGM5dQdft6yibLC96PMbe4diAxBQRfrhUy65Vo9ScusGpZysJN",
  "key23": "3vLtw99nu8Hooqbcp9zCUr1GYqa1fUGfGWyeAjsZggaBWvi6cUn2zEDGThoJrag3XJ12dJXnGuGbBGjoz8HqGaw3",
  "key24": "4SKzwYpxfB5vkzXheRhVTXbbxnd9NwLgSxrc2gzt9iCGAjbay1FDqRjW5z88V1q7dDLPHGHaLyV7Zr3DJKyhmeNg",
  "key25": "4ofxVFqY1ykDFPfRGF1dsUtvghcsaBaYoWfv1L6NsiaSfPJwd5Nz3LKaVJ49a9j7a2ESMi8V19j2sKf2u5L9BvfJ",
  "key26": "kQAsAmkBM1PumW8EfjUJNByNFJ558Dcw1F6AH3dX29zjta7vA4eTzhuTEnvroQ3Tc4sWpwNdreCcosZa8DZNHrz",
  "key27": "4UmfMMsEtc8AiNAir6vkW9DYinjXKTegSxmkTM6QgsiVd2yD5ZTK4pdz2YRAn9HTznAkokuracpnTtpjXMyNikHX",
  "key28": "4ZvnMzjP1HoXaa1qbz6cv2RDWQ4mgR88SCQvw5aenD58kQNKbzHjopwwn8N6azDTHpqkR8ngUKBTThN7HEo3uQDj",
  "key29": "DamLhkC7VJ75rvtjDzPCz5DeNcDfgpB2bpogfKZmjo8gP3vQTL2WurDxXuMMWA4pHEuaM18toNZ9haDaWKQ1FYh",
  "key30": "5LYkCRcxVDMKG1BAisr161PW6dbxPQe4mu3K6xDLQFZLASAueVzxDLdPcajcydzcez6S63mSLc9FUHTADV99tNS1",
  "key31": "3sV9ZynJUEXx5zYzpuC16NnxVQUEWF4WA1JJ4grE943tobnk7gpFocdBEfB1tweeJRUtVrv2RvrvaKVpq7eu49s7",
  "key32": "2Wde19fTegFdb5P8sWPPSMpJESVQamu1KXmqEac1g8oxx5D5GBWJMK8h8uvS7BBSEr1CQppR2RtbruNqu7JZDmD",
  "key33": "2VVdAZdM4SdVQs2Dvma5UNYzynYALsyxtacvidGfbtGcvBEmLYx2PktHRjLBKgx8Kyx5H9UbLUQhqTDmabJCoFqw",
  "key34": "51iQ1T1MpPKFPymE79hs3mGBqBRg1pndgUUmoqDyDmWs1SGCuCTv72fe27zA7ZHmjmhpAmGGMui7ApZi6esofEcj"
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
