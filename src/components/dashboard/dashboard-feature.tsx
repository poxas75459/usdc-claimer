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
    "3Uc4XxdVvvTammZSx196RmdrfzC6V4vio6xtzvFpR6jSwTyoNH7SPvaNkgMm15hFzWrUz5DCXNiRiu176UxzAdZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eVDnMPGtMCAEnwkddvYEkSidL6Ec8V4VUFksvjR14KkqENLpyf6DvTBE7j5pXFCkRich5SLA9F3WvPenZqJuyUo",
  "key1": "56N7vQc2riX6vTr8vvX9b1TE1ZCTbd1p9XkMVBL32B9m2Q6uz2QjcVmXvGP3LZPAmDeLnLLdXNm8fE2pD7PbBUQ8",
  "key2": "3C2Cshrdy5QUJHkgUYWEXEFJpKwvGEjU2SkStYAGYt1iwHMfhbaB8Ko97zrp11r95rrdB48941M3BXfnLxoWUTtn",
  "key3": "2TUHU9ZLXh1ZTQCjjSfsr2Qbx3JvUthj5nz4HBkz4FLnYwLsvjEuGbGLrJxgvu56dkWe8LYnumb8qRgQJsgJ9NCv",
  "key4": "4mT8cRdxfufn4Lt8aJvaMesFqW9YcqDfiaBDUA4jwoBCaNNsbmLVAjpPRStSTWPrrMdKFJLrDu8y7DTCXeaqhNyy",
  "key5": "5tghFAK34yVvHqHq7vVLrvycxij76Zhx2yNrtEFYZ2jigxuYBi6NWSsKLRxkPBaxymq7XhN14giGZaaj1WJLAMZr",
  "key6": "7QDmkG9vrGkTgciVuqw2vw9skkLYQuGinHbcSJSM8JtmfSpco91jd3dxg4ysyKEtGDSkvAe28e9oSJZEgqKX1G5",
  "key7": "5x7k1cSag3hYkXs1VpqJLx1AiVvB3sVyToNifaosvsEpjqhAhzXF5m4Ss9LqzuNj3TEoT5cmxWBhTVkjuJZLNDbf",
  "key8": "2m2CboL6DmtTgGYg639oL6KAcHZALX59TdPwMSUBq64ZTeNPd7bUFhTEsmGoswYMgiVotEef79tMDFBg1z54jLhZ",
  "key9": "2W6gnpZn2CaUiKg9gW6YSLhRMUT71aakFJxux4GNfLcgVyN4rmTwME4VN5m5TrRdidSEoQgsW7hSy62DTHV1FUVP",
  "key10": "2JLXevpgVR7GYkmRmZ5FauGhA48MEHij4zkaFqXw2oNW4mfcRNXzWsWLUHyjWkG2n9Qd2pQZV8neYmdwCkvg2UfU",
  "key11": "TYpV3yUo8kapVaSPWna8BHqZCidGoxZ8whZvfxmAcftzVZkJt9mocqxdidj2rRP38zAt5wYcRBwFRd5W951tNPk",
  "key12": "5cGetcYyLdRKz6cgVmdkQaZ4J4XT2TytkJ8shGFv37bngs74rQKL9TAbbhVMJxMS84VrHo5XFMuiSE5Sc8WxE2UC",
  "key13": "65Gzucy4a3xPLVEW4WDWKbZLgs5AwBFFV2vpd6XdBmYfYP2e3BZcLEbR5D89wQ7mYrgZFHJAVgoG3ZR3Wsr5hLcZ",
  "key14": "5q4DDs4CXPUXdt4dzSJuckQBfwCxRThvDrymDNHJo4vhVwHnat4UubKwF4yUMsqE6qwj5XEf98rmNc2w2fvAmQ2Z",
  "key15": "2oGcALUzm4GQHtBCqFgbV158FFtQBdAXKjRyxmxS1Wagb7YYAVAiYue2a3MLGbR9MqQUSSPBbaGdqA8LK7d5TmBL",
  "key16": "2T9ZQZ6QhobFfcKknxTA6Gsmjx4RtZy38SgYMG9d73HR2uQTg2A8fekRYbd7HZyrSgHgmvgn1L8ph6rUsugm2qdN",
  "key17": "2ampieMfiAhZzjiecbdYXCeEgE1ToJGfXToJebB9Jeh3sVcYewmZZzYWjnTEsc6mr9s169dEEg814gYnRNLEpdr9",
  "key18": "31NoSsLZqkWnpRcJK7bT68qE1fMC5Rip7yVAvWgHXN5bJbbYM11EeL4QF5uZnitEaUfJF4AokvbAGg2jD11Gwa2H",
  "key19": "3Sd3x8rtUGgTXNtdn6PjYLVR832YnX3K4Y5BG6VuqQNXF8QTYRKHY1cE7U3Eq6oJ5cBNGXoKVsPk1EvcfSwHh9tu",
  "key20": "24u3mpWkdiBDUUBbjY2Bo7wiDTPsoZsP9ThHH3g2GAYtxtyrjKEAvCersmDGSHhkx1NvMZijpFkdnCZ3G2rWvm77",
  "key21": "61EH3t4HGZ1WnZmGvvTmw8ij2AptMjpGW8BUHfkRQphMSUQKaxnwfnCXdj4tySCWGPNhHHFERC3Sw1Uxkt3b6zLw",
  "key22": "3Q6gWpYhn5RVY5xFfJyAd36BwYpcP7EfuMzXtHaFMveDsZ5xAAxwCJEqbeMKME2tkSCVP7nwJWjVGtLMbUQa8HAZ",
  "key23": "2pPN5sKMihCmHn8r57ApZc7SkMSAcCXxovfZeeff1mVRZW4LmJTQbcSBQTKjcknHNtzmewPaoEgAfUsqiRyxd3nV",
  "key24": "3zHutXRXJeHDrkC4WaRqEParUVsUPPfAvFc47XFveadSfBMadCfrNdBBzCARQq7NpF1ZXkCY8T1BkmR7ZwiuipY",
  "key25": "rFrspcP1Ebwh3bgJwnRVEYWX9kYPbcZBBhWbZhBPei7GtvU3LZ7tBqMY8wvA6PdwTp4q9NJQ5WrG4GkX73J5RH4",
  "key26": "5Yoamke7qPTHMhwGxYKmbZ5jQrLubCPRL2fGdy2dkjM7XvPAdesKPvpoPM7eywPZKMxvmLiUZWyXaG2vgK7wVKHM",
  "key27": "3SdpKmMr6io2uxBkvTsPSfcqE1RYCsnNKDgChuer7Z7oW8JYT3G17uTG3P5x1ZoALRi1aXUvcHAvkG2cx1BkjrTn",
  "key28": "4MRkYoxiz5yjbQ75ZMckNLMBt3BNjd2jSoKBj3ztVkiy5imvEAYZgUZWEKrTN6hAbEUGRVtshYfdLTDuy8LBAHdv",
  "key29": "24fr9XNkpzLbYShjqWHNZfvciL4yzbBguW2vL2wCWMR2VaeJPeGWQbrXSmR68EdUyQ3yjte7S2pPZJoGLkyKGcy7",
  "key30": "2wTGebgYY2NrvhUJH7XKZu7BgeE1ntXVC3EFiDer47V1qyYQDoqUH9gjJgaaQzmtRCykX7akN5YoWRwvxuWXjRex",
  "key31": "5AZ8Yeie2akBzH9VJJK7mNEb6JLturmrcMjkMPJ7XDstQ9bygsdPZsuNEyyQXztZWP67P57aWJZi6eFNugbedE19",
  "key32": "3REu3nrTTZLNMUJW2oyZuVZSvwYVo3LST5PaTHjogd33Pk5LZNnbZp5c4CjETZ6Yu8BtpQ28E3adod9RWzK4Y9Rs",
  "key33": "5x3LUJpjLLLHEzoinhCQwj6RV9i8kg21KNjAe7pPrSRFPNXsn845Z5eeTMJT7W4d36g3GpBdfvn5theLG8ZH76rU",
  "key34": "4NGY19r9ZTuir6Yj6pKHW22S6KYhs3bxdzqdPHvqDXBwRNU2VDByFq4TnoeEEdyTtwGhavhVYefrZeyeeo8pPZHL",
  "key35": "23Z5cSfURyPGV9zogF5Nj346FcaYc1jmcfwayHCoyPs3CgnzyghX8PX3HWz2sZ3sBnWtSinsbgRo59VVuzmJTxhc",
  "key36": "3CZ1DgpDEfg5GHLTXjDiAQNU1NvDUA8QjmQqykJXS2i97RWjHHhd6NQwAGm5uHqizvGBTL4WaKxCRnwmwxPRUpqZ",
  "key37": "3W3YPsHgnw5BuRUoiDV3jhMbmohpP2xZJzrEFHQiZeDBvnNS136Ydbb6kzGQaA72iCYu2onHsZ4fUTBkdiCwYdD6",
  "key38": "21pR4DQ12TcSoMtTSU5GnzziwDX5xfGuSrDyqnpVdagJ2osh34TWRC5jdXczhetGAn8gwLUNpC5dsxDbvyz5v3Ei",
  "key39": "knQj6XUpHB3DinpxxJgP6VHmR7WEQ3BKjVTVrSCRXEJJJfCdr56kXVGBZyrMoYABqawpGZuJMZiYPbdpY6CZcXP",
  "key40": "4BABpEhFjJUp943wsMru48HmbAc1rTGJjGoc5hviS7Cd1TQ5KQciL9JgXv21RJ1oFPc7WrRH1sBRBd9tbZws159d",
  "key41": "5ovD1ymTFAaqpi9Y7wzmKeAcaXDzUzWxirpxK741VrjF34sMtNw6n6EzVmMWbGZ38VQHYyTFE7PhcFP2zhXd2zgZ",
  "key42": "53oucbATsk9GB9D1h6DDp9qtJN6RYS1vL1Xr6qTpPncruDJrCzznCjDkyEc9Gfbzd1tHAVxgNR61ubvixJN9aEZF",
  "key43": "2yirMSK2bGkd8MhcrTDYGTeHLA6yXwyBi7hAfRPgjcxGVGauvShHzQiEL9EDPyQXYsZt4r7BuuHP2MiQwm3gJdmD"
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
