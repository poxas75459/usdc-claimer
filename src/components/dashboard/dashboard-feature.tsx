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
    "2fy4hj86Y5feeacpwi68Y4o9CBfdmWJMgw1WWen4wQgPKF1c1Tg1SmeWP98HJXMBrkQiVsnoXQZTb3Y4EYnfcMro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uCRGcgX1KrHwDyUMPrMPrXmq3P25JgjWg1i53fJEZx4SDqXs3bZ3Hr78v3mu22jkcLYRDuh2xMTHT3Tk2ZDtkSG",
  "key1": "5Ez2CMrys9iFWCoMtbB4DvLgsP6cJu9Ma6GeJJZ7MMLxFRYmXc8MMkmqqT8X8ig8jeRKyQYKQ51xyt5gScxWbuir",
  "key2": "4q1PBS237YeZfEgG1E9WiuRcDDrqMEhvr1SuxZwZgxFua1K3aFuLMyhg3bg4ZtyE63LZdqFJ3KrYSc4EQfGUPWSn",
  "key3": "4DbuN3LrVberK2eH8JqHpYJu4sGVzqEoCP1KGrxmFgsFKs9SbnZCni7X3rVwWQdtRtUGDLN3aN9e57zyhxt9vDxJ",
  "key4": "2R1gx67pZ7zmbzC54ttJyLmk3MFo9Rrx3WPe8K9E1mcvuLBTkErtWjUAsns2hN6DeroWEvfoJMMkbPQD2SWAgeWa",
  "key5": "5nzT8JYpw9R4E89gGHdcv9SP8DiAxsaegsQLnneo7xYLzCqWM4XYqPu9YDqsUVQX9hMPMH3YGfMsxEQpNqoZ26Wz",
  "key6": "2DVS4gxAosQ5ZWEPH6oiZ4KhkQrSqryUs9d61eMXKMv3tDopw6H1ESGLXSxvd4n2PgTMkeNuWwYrGs8E4SEf4fWF",
  "key7": "2qGepYdYTJNVXvYBTSwXhGEBRRxC9fGMh1Am9akrQDY58JSpKHzn8ZAjQXKr4kq6AsDs3uTpqCedpXGV91Q1sdk7",
  "key8": "45SLvtDgN1EvrekfH3asbhGvy7gkmTzG2K2ZmRABkMS8uM5XGMc42Q7Jd55efwe85KEnnnteHa5FQjKPaCnJohBV",
  "key9": "YwfiR1X9JyYCsKWaooZMrPStvCKGiaE849MDLCSsBbNx3k6g5zjeT9rqgX3hEj5DfgPqUfrkBDb5HXW66nczDFP",
  "key10": "xpLHGXjsZCi8AFvFzBL93ks4boyk2hFD632YR2C33HSiY91LgtXkiHLCrZAcfHdLriwuaaDAz6JGaMXVGVm2bc4",
  "key11": "63LRiSasK75dN3tT64KxQ7P3Pest58KjzKDbvvcHgeb4Mb6YzhuPqF4ZCqMyS1H7tAim5C1Zbhc1aG438RwcAHKU",
  "key12": "4XNvPh31LBVpisACHUrT7sm2HgzzQWujGL5Ma5zTX3iLEmiq53QfUUnk9SEaAgdjFyHV4uCCeKfz7p2oyGkZnzmM",
  "key13": "4TbE3KW9ahEVbaAE83Q5Js8LM1vMLc5f5KSQ7eQAr2KNG6FKSLd7y7vQnAvxgR18Sc7EzHfrs5CQBxUWMgK588mA",
  "key14": "GPBuyjoEfKe7QCsFXPiUfXeWcHpQ4VAu3DEhEer84whQUsZ2q6kFbAnmezk9KJ8u5wUp1SNjxxs9oqqZxvEXu69",
  "key15": "32y3H5NfJS2K1cZqydFSgS3Rp6Gqedp38ZM5QCPB2eSvyrWjxuBUp7Q1RBFadgi92LiNe2T7yYLqEUJ8iW1qKyW4",
  "key16": "5GyJpgcSJe4K9KLxHDEfKxyQWWtwomSTiYsvcgwM863MCoYJCSEeR38yubuH8GGzUiXVafeR2bPCmVJvq93qEyPZ",
  "key17": "3oLgKLfu88A8uFKVRgmjT775mEjKFrsXB9HXrEZDUoWhEssegKssgxGdQ2sDEFAccc5thYNtXguD5q8ffybuF1go",
  "key18": "4rnCytSPzYQKu5qmZfm2SrqKrGE6UudUCKvG59pXEeuVvryQRvyVJSj79LHP54VnAAzZBFGKJgBxwYoecZRvhikY",
  "key19": "4QjLom9xxqRVnChxB3q1YzDcmwGWqguj7HVVmHF9YCvNfCvNL1J83UvzwENNQGg4rtV977Nwv9UAdausQyXyzvA9",
  "key20": "4wczEnSq2cgj4wQDNoRdgi7tAw1sY4bRGThu4EL3Fqnpre4JwFPvZoBWv5nMA6JpczYvKd414R2i95zXDoFdMTL1",
  "key21": "3rGzBJ9rTVWhiBg8o5gxGMzs1xicZYa8siYtgYfbiXtyPytPthVmCBDdHV5VtiJ2oRsjeGZuV4nUmsTmZ6KVhR2h",
  "key22": "4UfpuwRFFMCQTXEwyaDxmhjEAkEQXpmACR7TAu14nhXLbgTDrxrnsyHgvib6UhbWjj1SZ7ckF9rxBSaSAkM8BAZm",
  "key23": "519z8uMUcSmQWitq6xuBBeoRTmdL87AN1BmnvR9uo7Us4MdaLz1VdMMTGoH2dX7HveHAZ63mxTiWEGXPZhVRVTe2",
  "key24": "3a35xKCscU8dwEHVJGk5ymuWHYPv25HhCNVb9AYCD1TUVSPJrwozMgwVqkLAokPgfT9PXy8MwGktNxXewZzqmBWE",
  "key25": "5qr1FesvD8pAWsqUMASEyedkSs5A9Rrjfb5RsED8Kztic3DXwMNixXabruPZSDfCa7BJ8e6P86EdCBMf6unR7PvJ",
  "key26": "5QWYWVaHCrfGD7mkGBjghhq5QmHbovotFSHEaF9XTTXyxcZoQW9bHjrFGMzaHmEiHUvXc628jNNhQKRaRTcZB8ua",
  "key27": "4K5FsVwi9jZoAhpg1XA6vdKQjza4UBUZNoKrTkFmDAzpNPdMqzUUNpKGAZRhKBQKyx8Rj4CDbxWKsgGyn1cQouyN",
  "key28": "6hfwyDmvuG39vij18GSmTELjzYmtE89LwqN6N6RWJJcLHKP1qErAFuQwDCPonoHzxeg9LTahYe4Md2rW1BUBwj3",
  "key29": "2SE5Yod7sg8AU4bthJ7AfaDDBWXHUgZLZoxPKLeASG1NVYGp8XdKVFtbqdHQDXYNALNjwhYsAZnuWEmsGLoCrvao",
  "key30": "64oxWgtHyduqCTtoc9F7qiFpuVXEDCcSjeqUztZdcKyzZKMQwPGzsKjsEP8cJBDHDLbKzxsGVv9y2ZtxooCM62KB",
  "key31": "3ujYXbJKbzpb7Zjocr6PZhqqMrZe2m6ZgHcmXRhjDAuCPh9YS6ypfvJQrkYHPuGkiCHCyxDQJuZkn8yGtKgLwGob",
  "key32": "4jtVZgvHLWDUMMJPZjeBfgZTtm4P7wkorCrjXBrW6f15twhrk2oxHczrg7x2zsZXrUQgsbTfoHQW5zC5xqhAhvTd",
  "key33": "3FyzRzrqbhJHWsvAyx4K87mojrhGGN3pytRc2mLTeH8zaTc9dTLdEoNrKajDZLJmeRP1CpmivZ3xWtBHPaJEBwzp",
  "key34": "oUutM8ZCTAqFzTpsMnVrQW537bqgiPCz7nPksGxRZym9i7pYzPXvt3RnM1dE8chLS2XuqwAhX6jbMGc9Ej6ScKk",
  "key35": "41P6mNSdekHQX17JD4PjmmbwHuyVyvseUNUTAiQxFVXHddhypiiKgr6J2b19VbpkA5a5BwbdHfR8kdH4oCzpf28q",
  "key36": "3eMY1463hYGeVQhkBujfN4yPKjDK2Gc1o8Ltr62Fr57jcxeA9ssTBLMywhvUzo6gSp1GcgUstHVtRPMtsvx2Joyj",
  "key37": "45p6vkGYRRFEkFoiEnEZ1MykE36nRLpMYCDeVgHyuDMoJ5wnnEkMUvke2xLMbMJXuESfCKDhtZcNNo6kvfsLpxcL",
  "key38": "4AjMVvLT3ATS5GdVcr7qzZYv8cWBxXTX4qeQdUTPdufd1vzcuXS5HtzEQq49q8Nxtp4GjfC19wZtKyyRJUUntcBT",
  "key39": "5xe5MMXnu6ncLYzwZ7S1Qem8Z3shjMajmAyLh19aRQkbA5fgYsXxheSJRyoEFkbsYHxmDKNobkumr3NUQrH7mn6R",
  "key40": "4C8qe7u1eQ3LrjAVVyUYUAgRwUYiiYFRLG4WL3nzcm2vnNoyBKAsMpQzyQfdoiRsyPV6XTvcZPedvcwJiw9x8Zkb",
  "key41": "UGjEk2ErtaLQLvULAYDQfMMtH64o163WWFhtWSN43mXXzmgyGwtDbfdUX6JRWPPBaqbFqoTyUghP76q3APQKKMV",
  "key42": "4JGyZu2HzVfRhpDgRSq6kafoMUjjHJxAaGr4pawfsa4am4aqnUgBdudfgtsfCuz7oFXBuJRpvKdJ1pu8FoLw5XXQ",
  "key43": "4YM2yRjBDSYpuuupoZc7LrDtZ2Pzb6oqC7xcCgiJi4VQAeJQxaTAkbYLeK23wW9T6Jqa6dFGfkw4WADhaNs9tm7d",
  "key44": "2oeksTAgrPufPJv2e9neEi7YaWyDHRbdVhdTCvoADVEbPDZfeBwVWCAzSE3bD3A7mD4teSMeoyJNepo5XMhveinR",
  "key45": "5gFSLJgLwGpdfsWYP3ek83tVV6GZ4HUuehrLCkiEx6kkLbbPidFMofMU9ArfNejptKXWoFxDeb3KPLctfg3cYc1m",
  "key46": "4i5sumb81bm2YFv3gQ1VEu4WUSzLZBuPuiVKMuwtUNM1B76Jj94V2BUpz5hLywJ38VitsEXfUSMm4nw3dZnhAwDj",
  "key47": "5XoRDdg8W7tyY2s5KrscEbS9MjReoEz5q3eTJNBm3YmFAFwEQPhU6P6Bp8k8kMvDwGULgzmmSuVodMhXABDFMvr3"
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
