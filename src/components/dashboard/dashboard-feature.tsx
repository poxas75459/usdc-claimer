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
    "4ZTGs7qS5k74GD1bmG9EqZb6aA6371cVNQcVpGTdSMgWoo9XyzdpP5S6bYA6LqVf15WQ9n1ir8FHn4ZbgF9MDQMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1tk4QJZjvurb1ebb319AAi6EErT7XMh2VzbrThVw5GwAfSPvKzatpqHSSXA9SGCUiDm48NcpAC1aVHaQgCsPe67",
  "key1": "5fFujRuW6Hkkke5p7cy9jpGmshuV5gxhgZt3XNXs4sJ5UZpjSA7FcTmKLTT6akvsvymGjPDcF35SpQqCGcf44ahM",
  "key2": "5kPHh1E3EY54h94XLRmmAKU5PocFFTWhdGqbzSdgnpstJ79dYqtdg5u5o7dMEj1B6fRidWjLHZB1pZ62CLVf1ECN",
  "key3": "4HRYxYzhh8cfHma4oRgRHq2scri8uuq6DbpxYLGFesQuktLnazYmC6hKWFADCvXjhSL2xhVQYrDDVymGSvFX6fga",
  "key4": "2E6U4gmhfbLQwAP4VUTQ8pFQ5qDz1P7wq3Akx7ieYtJCZ4U56Rephrs5YFy68qjuiMFF6n3aNUxRoNg6GigrvC8k",
  "key5": "5wwx967iZqRSkRTBMzgiQLW1VjS8mLMriJmiwTBD6yjAe3UrnGZNU39EfhWfhhqi2N917FmAJMKRNuqow7GoRczC",
  "key6": "4aRPGLL4EZ5maJ6rdcHvKfsdm5RFcUkZGjaSXByhoRFJjQG1K3zjKUysivKH2ZkpFYRAm1MfcThz7ha1v3YLBdiz",
  "key7": "5vNfivk2g1HAunpC3w7XeC2JK39wh5LuycVitskpR1jVEeVMGNkWgAAMMczR8kzYNv2Ly3RpS7G6xMuKA9Ve2ZML",
  "key8": "21EbycWmQsT8HfMfcup4DLdF8Kj9sPdQyae51X7aqYbeTexEXSueJBtp5w5C3gjVQjr3BXEJdpCBySiawWfeFYC1",
  "key9": "22NKBrrhwM8v26bb2bgMucDuDSBELVCy5116CtNLjd3kk4hoWdc7ZtRUg1bXV5eDAPPrujfU5s2fpjC2KXMYb6jM",
  "key10": "3XVrk6zUiT1eboLqgafZnnwPT3bGGB6dKCkRgMssnYn8vLNdtcGfRgWSMVcG416AtkM7boibwhh4WGCXSihp2m62",
  "key11": "2VCurD7fgUNipqNMxM9MLSjMSFqZBTHry8Gs5C9hjj9KScHQBAQpz2Mxnq33u1AHBSxyLRT8E8r9xmpxD7edwGA3",
  "key12": "4TQWZkdBpStayR33AQjXCZhVYT6Vg33qNcdYSBeNoAHM3JCir4KuGD48HutQdgikQz2iXzqRuB6BEH28BvTV4z9M",
  "key13": "2iuXbQ8pX5DwWWTAAFYCxNRDWReEMeo1bmDA9YFe4nKtTPF3WA5oFmC1NdZR752QEyxGV91nQXUGLeNdvoSnjrKB",
  "key14": "5rqLAhCf4RLYFQB5Wkxf4hQsvD4HH6x7NxwSs9BTNmmq7QYNsLWarffhSR7JcXYbDvPn7p292k1S8Fu4tjTBzrXa",
  "key15": "2UBnRRwjihoQbFhgLki3x985xXMB4919bmfRRiAir9A94ezY1z6toQ4XKCgho7XaAoFPnRruBWRoaGjWQhfSbTWX",
  "key16": "3dZTVnT4qPt3VAX4PNbdpuLsanAm41TbTawbaBHQLprhmzSN3basf79nQu6WjFZzKKZAtap27nc2xo5wFjw7dox8",
  "key17": "59UQGtyjJigdPPWwpZdDeim9WuKj4SBbg6p9n6E3unLcquLxy3CRethySdUm99AoNjHavGLKjsfwcqcBKvSYsFzy",
  "key18": "4P4dQcmx66bdJEBADXLbaLkG1Pad8m6sMfbSXXdYaLePA7JxtAifUYucvcRjrG5h1ACQhB6Dm4TLmHLsV1mv2Cud",
  "key19": "2PsSWzf31cL9t4A1Y3jaa7iaLFCyvuLXEg7PzL8scGBBBbcY2bu8iiiNpYcLAyLsx81h2U9HzjZF9jAKWYwsBVeC",
  "key20": "2EGw9ZwbZfYXkbnEZutDYPZS5r2mRg28BxNqxieTiNSXF2ppLFCY1Htf9zDwWXKomn57Y52YQuX9qToj1c1Fdrju",
  "key21": "49yVDg5raUoAHbAsSp87zmhsE5piRmti7yw1Wv575v2MbwAaZnu9C86gruT2xwSWmCXTm5oKCsrpLKqGfWVfTpKX",
  "key22": "5rwuSYTc6q3fpvAUKykGv396Kcz6GQvK2uNHcQHmZQD5ZJMqv8bMxNLHJXwPHmGJhshqdaT9CFLAKoNBgtpt9daU",
  "key23": "2WLucmgmkh9ufcjmLemXddsR6xeQCmkN3p32pDqNRomApNjM3Veqh9XTpNBhw8B5pPZmJCbF8W5gBrRJv5c4fMod",
  "key24": "boHz6qMDLZcLo6JurBjEfbr878G2jLcsPv8NHLEXXPZrZayCtMfH4SS1MyYdiRwh5woq9kNv2nPwJFNPWgrBp6k",
  "key25": "3cVfkzkqwsBAconkKqa9hvGiLHPhj5p2d3vh8yFQuQutG7tP3b6jzsWYWXNWw2sWW19aaLGYLEawCXBkQ2T9Eace",
  "key26": "659Lw5YhMCoc2aADbVYbMzSsPHnFPqbzEsCtvHLjxhD1gKXXX3seDBmdW1kunmMEFFjnR5RgfjT2nn3uTrrSscJQ",
  "key27": "48syChrdETkLNToGdgUMNxVCCgdMmP7Tjp3F6osJCW99VtJUHFJH2EWqaZf4Mk7sVK2xx8DPXNFSXQjNBpT7QUsT",
  "key28": "2wquHsFx8AJ7qWmkWZ87WpsZbPzz71DV9Doy5YHDCJjdkCNx1ZBdcxVsqG9GVomMzypXR86cZZCZW759dBrznEkX",
  "key29": "3XZFfNsjWMLUeCq1xttfzesSrF5Kk8RS1JCWx89KJFppmXJdYogfp8pmsmjLzGv99C8oo1JLyaRchuGBGc6HzNCe",
  "key30": "67J4Ao2wSVYwT6bnG1tR4W933vsKnd4JQ2Bgi2J4wVnm6Xh8mRJGxTLi4i76UmQCHHpmZpsLSyrKmULzAM7v39Sn",
  "key31": "43CVaU7iKeUSg9HqzBL1p8Ttui5p8FDXdynJLXNtnp4hHmPeDyeLAQDQHJoDA8juocfCZguTXNDzytCbJLhpGm8r"
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
