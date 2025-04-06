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
    "5ueDTnGieD6BFq4Tmfk4kEehs7QHodouSChTmRKNdEYT174aLAzeQH3zJ6GuGcF72FSgnsNZAC2d1DqKpdyrE77L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39AFpNgQYvnn3rz2Tab9E9qGDp1wNt21FjZVPmXUrqa3BgP4qY7amMGpwGbFs95ZakptLzshrLixbhi82Ky9cZfA",
  "key1": "3cHdq6rykEeZRRZpJ6VrnHE6wLSnyjhk3rj5eamc8b1W5hrG9h5dQaMMnGveaMSwy6yc2LXLmLuqiStf9PGZPYJu",
  "key2": "5VVxcLQPeV2Tce1F2tvvSZKhyxbHoDqDR7wvPDyyUiDD1zt14oGF1cKoVMGzAdsYZQbdS2pxxvQMtVZDt2bCZ3zh",
  "key3": "5bzvF2LvpdkfVnD9mFKvxxaJjgph2Biorpumg1KUmE1U43T7hV7f8KsL4iBFUudF25MVxF4wZFBbcZWz4sMukaXy",
  "key4": "3xGydQQTTw1XyoYqkKQiLV4unLG4v2nfqvJewy1w1GZiLbPa1Rn97eBzSjQ3QCeNCEcVsw2KSnoB2MWSWLFBZDVV",
  "key5": "5mwtDKDHWHaHYVwbNVmHXipYs13x92P7BekvN2nvh9bUAh6squSSPhEYap62s6yzMwafgWPhFa2HsPKrpAXb3gvs",
  "key6": "4S1kurix9qcYRSKiisdDBPoFpw6HqSsymPy6uTdjeQWB45P3kvMdKga94pbPzQvigryNpmyDupWP1KiR4Wms2ijx",
  "key7": "3ppWirJR1ko5Fg2TUj8fi38sBhEjaEg8tCZ2897QWbRpV6R71rnZJ3LCFNTM68M2iTHrpGdvhEbFZEqgJt45FgJr",
  "key8": "4bRCHxcWiDSgXQ9KheNd2myaMFfiddbFRuZfaZi3LbYWLZYgCFdC4AyDqa7bmSPobX4cZro4LNiPho6uf8CYEdNZ",
  "key9": "2JMpz78buHjy9zWE9noLEMsFjymBwbhYUKR6X6SW4XWqNVVuE4YBEEVa2GfPvcKnDGVTuqVdGPVHuycpYSYfUXuq",
  "key10": "AucPukC3jysm2siQCr7d5jgCWR2517tcFrJQSsTMrhGWr4xr9K6jAmQRBNj5iNHo8wXNyaZ8KxP5s49h8MWQ3Kz",
  "key11": "2DiXDmewP9ULRdu3odnj7AZ6CAPZs69WHirxS5azRKXg319nKxGLjNunyvZnkC1epsc6C51qZrkYTVwcEUtmPTPm",
  "key12": "m7JupjiBwLnYGuVdYxsP9FnhkH9KRsRtiQJkZirGRrXpJcqFBCfZhb1699mGVXHAhkiApR7v5N3H3gZ4AbaEWBF",
  "key13": "3sWPK9bjQPJ1YniEo38ccEYjWTt1ae9cDu834pVCFKpzmqrnW1oPDPgQw8JbGgjtxUxbS7raf5fgHSJx2HALh1ob",
  "key14": "56PUenBpjpySxzLmiCAtuEKPoAUttup9z8GM3QMt82LW8cLxb2Wn8q8jFuLAn2ridQ3WDGtkGtVXbfwMNvAAk9bX",
  "key15": "49a7WTYBde2KfcvMmKLd7cs2eMpeEYTpG8yjuUmQByQbG7rsvVVdZipxryoEDMpkgCjdLKkq4Wm2RLvegAPXSRpn",
  "key16": "5HoFtMoWko3ZEAfiYyGWsh17gKfyWDiA42BvCceeskoZZyKeziUhYx18ECQwgczp7ny4WVvnWkS2RibdXqHtLd44",
  "key17": "aabpSPUEF9eQGhGRiSobdztae1Q4JXNgHfs2dMKcQtYULi977DBJzeqedeYheZT2v7kB6SEUHGkSEDwEyyam7Jt",
  "key18": "5jazDaXQQjgq5R5tGGys6JKPDtBLSfvddR7RF1yxi6MjRR3eCzZ4Lubi7fZYDjYpdTWXqXvQ6oTei9QoFnR7jPGP",
  "key19": "HtPMfxoY7dLqBoi7iVoNdHLQMkueEkDFVuh9KnfBH4g286STEX7F17yMCaFypFqhHZdGyEYcCHkpsBdJPQsJidD",
  "key20": "2Fv3cb3QEN9E2dtJokswxWpYBKPwAo88HCULnUA1Qej9XK7nrLAz1X287Sjo4kDvqTRp4svWaF2jqjo9oaJbjFRv",
  "key21": "u6iixMKFuDRfpxVbr4MfFYCoHQTTu214o7GbA2y2tqZtqCjHB1pwNjaEMGYeLLLcZ2L1SHrMYs2KmL3CTw1FtAE",
  "key22": "3n2hvsE7FLdFb8FMgFT7MNgjCuDg5JryuLzQwhMQbygCrWBEmcB6eDd2M9SiBu9XoQrubascCrB6vHk1teEcEB2A",
  "key23": "2M96236Qz4c7jc3HoTZ7WxLxu2fQ3rJYtcmbcUobrzZkVZ6un71vVaSF8TS1bLyconBcZ699wPuupX7Aa9CzmkFt",
  "key24": "4yqTz3zhz6j9NybJy5J9U3DLfLq3CVqVgQRobeZiYPF12ZQKBWTbbjfwVH187x51ay5c49zq4MHgXia5kj3Vpqmr",
  "key25": "5nybxHYBWzV64RZM5RLVVCG2jfE1uGetffzbj9nXrKN6YUjmLpyEZrhApM5xSzm6mJQ2cVuqEW4jKdjvnm61gYMc",
  "key26": "3gQER1pYeaWnekNt7iH2nVXRme5Cr3YYFNpax1xwE5TwotZ2DkVTrnf4WA2H4tY7txwQwRPjU2mNv7YXghWJJ9cT",
  "key27": "2u1utDLB5caxDqjENvAMDB1pnxu6GqUtfBSzNTEXXaAe5ENWVWV9jC3XW4xoGbupx5QDaQFxfR8hdnZR9Sr5Q47P",
  "key28": "5cDxfQzL2xQh7bWCSjHYuhveUWQQLF9zw98z1ii5W9BegjioDqVpMkQQB9j8H7i46PQSGnhwtWpNQoTEkbZmGEhN",
  "key29": "5sVazzc2NeZRXMGXw9p6dTZYoeKYU9ZNXqhsx1vapyG6VGCMoQf5kATCAHvdDUevD1HyfRFf93BHvwxqX5eLSanu",
  "key30": "34pzKYKXtifHRvzAFWxdFbsuGASh1LCBKibBZeLUEzCiCV6Z8NBus143YV3pj4dxjgteor9pxwv4geFijfwya2mJ",
  "key31": "5UsAdSWaZBzVPyngat4ZYZ7USpddThAeC3A745wmi6AxpJuHQJbATAH6b3apsHEJCh4Z9tdvVF2p1UXeT1pfa1BD",
  "key32": "5FWiJfgwb6FS2m8VSmDEcqjqcqQKZ9wxDvxgqLmSzG8CJ3TFGbkCmjQYnnUzBaQPTHCtUWsoD5Uq8X8fV7gmBHn7",
  "key33": "3VdRTkXWiqTa8utCUDF5ySHAeEUpMbZLco74NMvVmG9XapFKKXiFjC6bmykF4TJdXGZotHpGVjd9UPy8krGDhPau",
  "key34": "uY5FmGakn6VpHkCCZw2ag8tSqYQqp8LQjW4EDmhHDFo1g9mpjqkJdePcAzopCcfxBT8VAMfw6HdZBqRPLUFuybH",
  "key35": "4N4MtthZ6DVrJHDrAJeiLPMjpDTwnvzqrCnwkjybLHzk4zbWXrmJ9dyqaTNVZXSZZ6vnTNvLbe9xnyVHBKzfW3CA",
  "key36": "ufxqP4h7YZqdVgFK4gjDLQ4Qyt9ZD7CHJ2eTZtDZsK5W7oQMLdipFZvUiPYc2GxzCxDQwMsR2cwaCDzJ5AbU3Sn",
  "key37": "4dDK3fgdDk1oUR6HBNdUQwDewpsv2txoPS59scgFVHPAsE2Arbnh3bT1b3SSagjFXwnFnWS2UU5Vx12xEVh7q9yR",
  "key38": "CHNm6XWKsHrQNLSN3gbkLLAMUprwM7A2cFn7svPvtaHCj9qX4Cr7hESP72BEchuknEtkdikxVva63WBydSSZS9r",
  "key39": "4u2F9cpG3TYoRSX3HAZWmugcsUzEVeC8EQoMzkjpmeYChFsr89ZEmYy9zm1zGk3ERYwk4SiyZS8j7UUUbEt4Lbnb",
  "key40": "5RcNhuteecpsvV7Nw3j8P44Ct5wyTHEF93QvSbUyTf5wNTeuEk4j2cTWsFpb7tyqocDJC8DCEyast9Rik8Jwbjkp",
  "key41": "5tYx1ZiehwyuKAtFbu5teADL8VeHhyVu9QwAegaLiMTg6tQNUEC1PtSfwvQm7Sjt1nVraUuoA2WK9UuoFpszozGR",
  "key42": "2cKXtYAg4TSTbguyce96FtPyBQ3r7417kvs7jVQuNvjRDfKa4MzR5a37nAD4pwvHBftiM5CNPbRDxAkVfdNd9Dt7",
  "key43": "4hFEpLDHmjq2ocNMzCSwRtpjcbPWAoQXvc5ycQvaXqWrXCGAmfyZQe8ct72kDyuFvefjQp5HR6m9eEaXGmhkJUjn"
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
