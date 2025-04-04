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
    "2CF1vATVRiHG1BtD2nHek5KWmFfSDPi9xVDQTKYYYmyrxt2sFij6EYHi17GnWyDBdAuxKM2dLsVzHyZ1tbsV3TNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cNMM3LVP4FViRPbmSof2Xfg4Lrz8Z9SZ2dG2DihW42YgBvAtKk1Lq19iDVB7YyyQGCAWybszbdhRYsFxhvSwShk",
  "key1": "5SYHf4MkxeqtRkkbFkNWRntH1KM1fuL7TZSsCuDA5Yi1xQiX2PeVwD2MX6VUT7eX62ftM99VY3M5SCcaasBLAbim",
  "key2": "2huoqNuNRokZxKg1G9qcqCfjapiExjurE8NhGC6WztmoJtMwjjKxN9QHnWzis8zpFEEzasVA8hMXpq38Ew96T7uD",
  "key3": "5Uk1AXfc6XU8oHqEAnrJuC8evRGVguYQBJw5ybaYNgLxMsvrLXmQkmaWZpdxBzSUJ99sR16LoAnpoDbqdsmqcg8U",
  "key4": "2xQnZ1TmN3HPMwF2puuig1xSSNPR4ghhebHa29QEjgybGq944Yc5xXDwZE7TP7RRjkrR6ywyyLq5uEqm9CfJjFiB",
  "key5": "3hUhrWuKnCxKaqh43fq6du8hHEXwAw8VtCt2G1ATTz6M7oP7FqKEjD3bCZGZrLnDFEZYwxcFTbRZKHMt3ADLoGBE",
  "key6": "2PkGqJnhLozjnLaNUpHMYNSBhh9rnrXbh4LXzXozRZF5vSR7kK2zRv2yXWCNMznzejdPfh1FpCm1RGosQxDmjXQL",
  "key7": "Y8QGQxq5qGCyj4DtkcMFGvs9ahK1pyggfTwdj3qF5GTLgKBrL1wuE2LSm3dqSF5FYxeBcdgN5rqjLHbwXLJRFTe",
  "key8": "5xw7vvdMQ7QwtRQdLzT8PyEmhcFjuZMD8SFXJXe2Dot6k3FDbB2mrCSajbECBvhPE34eMnri9gTpyQE7awhpJaqz",
  "key9": "48D8WsnkmUjmFGAtYxjXZGEfXz9zdo2ryGRmC2ZEDAgeb1zgUDvv7CtBQaKxVQ97GBHC7adGyVAbcRLbuZxznJkU",
  "key10": "3CpFqAypUbEW35872bymk8antzBZ1ipLKPSdjiqojfzTrxPX7GLjphcdZAxDMaQTL81PCKhcNyfGYDbx9kNAcrrA",
  "key11": "4nvHLEWWNSujWriwfhqXz2Ubz4YNoShE8RQMhwZbPMBUSymAjeTuYU2cT94t8ZKrc2yCuqLFxCdfB169rGP9SQ85",
  "key12": "TvyZ954gpUMkWS3KUBNRTwn7JiQ4aVakbKdNtRqi1xDRMZNecUDBHucgGS8TZmnZUBs6ZRAemksrMoFzL2MrGm4",
  "key13": "4K9M7a9aUHFNaodcVwDvkCy59HzHhXA51bQ7APeVrLEpKGPkqV4LYY2avpR9etsHarFXCpvNTj2Hs14hYhMwP39i",
  "key14": "3kZDhqmh9k7ZuMW8mzxXxGaDkNZzLxrUvTzJumn5PX9mvaLkNeaqa72762mXDjEVaxppS41U6bjpbda2oBPMWzBp",
  "key15": "4qPkvhom2wvX8TTmPNhtQR1w5ZZe1rHkiYA9FHb9ds4NaXLGsMAL2q5DVJP1KEBHdwYvyRZuU1hWuCXHNANiKq2A",
  "key16": "3YJmS4gQ7bLgarW8CBcrzJPeuec1LVtLtcGdPRoJ2qHFq2u4hLPfcqBw5fiBiqkMpmDveb7ihiWhY6XRa13cCiAP",
  "key17": "2CLQffddGYBnkcdahsUVUWTvabM5ypSr4wNA8TyxwUere3zLpQVbtQzAz392ri8tfYiXULABfqGmoSZCMMLsTCCP",
  "key18": "5XX6maz22UGmLffC3XnoNTEQ5z28fLcE7woN6c3Vdjtkjsy24PL2CgdN29gjVMbLSecXXiVtUFsBp68T8qJv5o9P",
  "key19": "xhmLzV9NcvQ8dw65N4H7XbDLEv9ugcAaD92X81k4C6SPpnG8afp1mTfs7JtahYKczVWf83VAcb3eXaTxoki5pfo",
  "key20": "2bANtBygtWJH3TgPtDswQvKxxfAmHpkUjPTvv5ZbKecGfbK1UjEPC4aK2zgWbTVjLqJbfwMbWHhWC8w9izZG6SNF",
  "key21": "2sTdYEQ2f6uExB7L9CfKYBG82Ln63Ckgy7uLciUvxhMhAjUzEkkRqok66zc8rsxVngUAniudJrrfegSkZbJ6n2dQ",
  "key22": "6gaXCCAmd7SVmFCS9LjNW4P6euScuQdKMF4PLr9hBRNfmAGFY4cH8yXKFi5iNaNvBKbJYbc1DEUL9CjEd76jSRK",
  "key23": "3iouknt3RXNsBGRPvm8q61dH1ncSCd2FVCaQpxMCJhtniBbo7HtcXez8JgF3YYSbhUiEghybh1xhCvyuYuc7oL9T",
  "key24": "393x3DaKz87xoEpWEvhZec8ui8GzBmwJctJnxNqJrWrJQhgEfPxqPB561AJhrynz2VmmAQ1dtDVFwXLa2Lr12mjz",
  "key25": "5S2qwTo16yDgEnT1eioxeh9B6KBfQiQJPF6vxT5u98y6Z8xnvHmvemUYcy1rzxa3722js2KDX6LFR1gsxXgaewMz",
  "key26": "2zc3MyNGCaQ5sBUJV3MWa75f8RJ6GXqB81ftRqU8DuXmWLonGGXuTob8BytQ13oMhGDjnNymZULrqA8geDBr7sth",
  "key27": "4Zm3B2wE4eS2bFSXXcWwe6UzMmUrtJce5vGqvkpDpQ4syFzmCcDhGRVw2FoQAD3dbQJortkfdi6xzs1SQ87ez5VH",
  "key28": "GYya3FskQNyZ3BtPXNTZhPvq5euMfFPa1k1tcrsveFVccLL5g73djBdkKk9LjuddRQiDAQjxzcUwxmQhR8w7mhJ",
  "key29": "4Yt6ZZMtXN5PU8W8ceejoxdx9y5Swf8TweJWDMYcV2EzBod2JSJtKtDtpLGuTo9b6kPe1suo9UMi4KYWzXcgLub4",
  "key30": "5VRfepWyCZCdYT2bBSt8gYmfUwZsnJ4oSRWDcC6rHh3WYZHZXHXChm94LVhsv7kBfGBgAb5ACk3z8qiJ9mFQ5Pgo",
  "key31": "24X1K6rvDErTy56MLAbauTjwnffR7ZMr4vb1ShJvarfPgHT9s4GGEoFnCL1j1c5JBCTusVvf8GfN8SyPRHtbZj8d",
  "key32": "5iv9JGeWP3BmuHUjmfyaPLgcaR7tMMnF473AStHm9nrSvWN7VvfvXzavNJetYVLpnXZYjvckJeXHUaK3p349HS8w",
  "key33": "m316hAFdJ6j2duih5x3r6FCAaPBXPwuG6dDPELU3D7R6MwKGnNARhQD5piqaWiZoheqV1dMZdrEmFELVzNrDHXz",
  "key34": "2ufhFeGKL9Zz4H38M1egAL4aE2ofYnXc9Uga72UWh6GbBzRkhuPxvfantpRZgid1PAHbCAhvUJ8W88ADzmzgzNmZ",
  "key35": "56mr91qpfVf1do7fe591gd5V8BKW9SuGsxoXs9jp5rT5oez9h5xzJkspGRoAFs8oSr96cNGLyWU3g3QxoiHw89dq",
  "key36": "5ZffrFDLXGCJgwbSzUBrctBetqraAj2oHrFNRPkw5enNfoNjeaUM7pj4sDrV1J243FPYxfk5afuizZvj3rMLJYLa",
  "key37": "5XfrBFzuMUEBEAR97zJNXTD7JyCDcaadyM6kJLsQg253ABnedkkkocR1eoJ2XW3ZQAbaeST5ziTDbsQR6HNquLsC",
  "key38": "ttj5Yjzdx2FkU5mG18fXQxsB6W2pnDWToaNL2esriUMkDaYHANWWm3dZXjF9x6EhJAJe2mSK9ydnrUqHXE4ysku",
  "key39": "2vcKtem63DwrWpCiqkC6jkUriQu3Mz64VWXB9aYQeQtR2y3oc56f2q1XcGDuSqVVrNTMunved5QPrvMTZDhBshNX",
  "key40": "4A93AAkEzyv2oSbxQ7tYA2fmTcFzLKxSAfPTvBw8G79nQsiTMBreixCv5XbGn2wAGcrgtgtqa7EtU2YaBzGdiPFv",
  "key41": "3Stnufw5X2xHT6d5FEcjuZ77hRcpZPyNmYPnG4SSqF35vc9ua7U8AARmiA8grrB3GHSgXhsbGqgrHW9zi9LVEQTL",
  "key42": "35kdNRDoTBfD7HGEMS4fZMJNktn5YT9zDwQpeFXufzJkrkGPq7tpYnbZf77yiEyMg6rAVTsdmKZ4RcFmMDURQph",
  "key43": "4dLUEmD374qRh2nhXn6dwHzzqE7zzacZZe3pcsjgjAZnkzxAsUQhcGYRZ5prRJXTQagkEPUA3LQCffNQb9KbFgCc",
  "key44": "zsWfSN8xN5kDmVcZgwTi6i8oBTMwzHeVGEvKcMcSKNWQQbK2H9fcytM1tagiYNThKDEGQ6seLyR4n7t28MsTYJ8",
  "key45": "5AKPU1qCNRiqFJS4vpDzMqgNyXH4b6ZRDrZFvK3zzEmWtDLeUYTsnWyhKEAmFaRprYggn551cYZ5xjuKQ1c4JA8P"
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
