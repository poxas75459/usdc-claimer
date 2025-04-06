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
    "5P27B3EFG1yAaoEY7kBvwApRC9aaBSC7JoP3edrT1FpyUmAbRKTHb6MCeWHLi9pqAExyz4h9Mrg34fTSs4Q1hwzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pDUvKLu9PLKbCp1Y26FoiMi9sc9tupXYrttARBMHKCifxxRPZVgxWPaodK5U3qQDeLmKrYTmVURpqjKgXAjHCHQ",
  "key1": "3EaAJnETWuKbK81cAxcneXoRDc3xX17iqM9i9Vd485YFRJBaE2r58bRiBVV9gvjUcCBcoWHxeTPmT3j8CAW9ktih",
  "key2": "21moWb9b1UheoSURz4sgr8XvtsNCfrKpcDdHYzpgy5bXGB3jY8PWwYrBday5Kozoe9hwW1Dta2smTobaXs2koTXb",
  "key3": "5pPc3pzE2sDA4JnrRGAjwVFACbYrwv9KXYfB6swLUNhtvvUMh8Lwrzgmb9B79QdQsJfF5fd8A6pfgyFff6JWPwDk",
  "key4": "5r1KZPrUam7brzMJZ4FJ54y6DTVPs7AzSDk4VNN1p5Xg8rRBcfPnoTgRobcvVJkHzUQBsgzWfRwRStZsapUsYVgh",
  "key5": "5mGgig4hsvBjKCLrCzHRyszsfXWFToFv4VoJdZdKDNrbUEYhSDNbf74Sf1SeFu1XewtjHARYxMQGBZotZ4MLhnb2",
  "key6": "3whtoKMyEWe275nRn2iEJRPLjFnroEkvbJ1NM8MU6NxuhxmUjb3hF9rcr258194MBKMyn3UYnGU3ENtYkeTNYi1y",
  "key7": "BC22qMBDthkyvQuYVCkFGjgkD2qKFdP1cEmXmKpgjrkj9fRQGLB2DpnHVdjfh6HRRkeHmMZf6UcLWYtLXtJmwqm",
  "key8": "4wBbKf1WzPfe9MNFcmZWZ1HDjcLDCd7gqeJ8PZpF6bMRykZw8RE7mZnkm8Qykd5WNiXX9Du1aMKWvnacYM7wx9sL",
  "key9": "2w8PAsCde1M9uiSCQ6b2iPrUiXqiw5qNhk5zCWKYA8gPkeHq4iTBrGWd43jMYkBsVfe3n6qdcJpQjP5WGdU9DDj4",
  "key10": "2UUJSQZ8cYgqqPdETSrbKpYcRdyjs3GTZisfivtWRkBZUMMHPEkM2Dq5uwzU3K1GL2PBisg5WjZ1sXgnfaatfb9u",
  "key11": "n1CFRe6Uj4jrjMWvCnspYYH2EeL2hG7xM6KkWtdMXGL3tT5UirjzkLxL2dapPAPx2BqxxoevQe9Eo23ejCwRZQq",
  "key12": "26tAPTQsWzWtNdKxPS2ypoK3sVBKvbcaiiNL1R5SRMW7BxsKYjAvhvnmibGc1hc9JP3oFmfjRNcLBoh5zUkQNVZD",
  "key13": "5VFBYj1Dda6v3Q1VQwZwFcfvmnE6Tng9irgcPvrvKHFzxeWHBr1ayjQMoD94PihAYijajjLkM6KTo712EHy4oP9M",
  "key14": "9CDiL1F3ECrnsG1n9mVtTwM9J6rDHuHPmvFdDVj5zEVzuL7NtbrcA7JK6xpsTrEZwHG61MMmh5Bi7nck5pmiPW8",
  "key15": "5sEfhPE9CTGwx4EqZiUrKLvDnRrzrtvHVENXRnVLuQ3aEfHQXEotRANsNPc4zNXqPLEPa3GKKnJyhiTdXyRNUFCq",
  "key16": "4qCWcvMqhSabQvHsTUBW9vpnHsGeLGsHEqSz6YKZeaMfHgaBfvML7TMsR3NtPZb6CLzk1NedibJDY1Y1rRsmZZ29",
  "key17": "5723hvS1dasioZDPtNnaeCp7onmcM7bCHCLmwkiVPZiDm3chz5ewfDVTpg16eRF2rYkAg3zasfFEEZT6Fa8jMWR4",
  "key18": "5XpocDhvyvxAPTikUCajqP32xktjJPq1ZPRU3RAmNpyMTEf1qsnQW1GtHjzvFxNreoivjEocE5rL7JAXJXQnhPM",
  "key19": "61Ph7Ad9cEfFnvAifeNfMK4kZaTouosLEp2hHrAzzx3GMFBc2Pn47pkxGSwE52MeNVtUq43GJexxJfyYsxXJXd7Y",
  "key20": "2wSRUB7RQLhq4SbnqMdhWWg1wjf6YTqgJxNV4ifeJY4oQeHfqUjFbiLeXwus9ciQPVuoygAsmUS9uJwte629YspV",
  "key21": "3aGSS7s4x33YqvmRZ8EmLLd2T9G3iFcUNsQWqKmNCmCmR2w1ScELVBitqae7gEwyzCFoPMd91KpPh3uuwHGYQicx",
  "key22": "48Tc5C962EumZsaVYSUAjd4RBpmRMWaeCadBMzcHFFK8zh3ZEojgGaECXpq8LoYZkwdkRGiy9T6ov2C6tCc4eww5",
  "key23": "2HHk93A2Gdhvn6bEopdB6dAvMQfzoPzsGgRYKZkgAmiwrxiBiGWEF9ovp3yx89FkP1XDCzqGcssZhckpeNtKiof4",
  "key24": "3cgBvPDUFXvfbZJ9DZydkTDVK4MXYzYfZ4KsBvKcnzV269QQdsyqJCXzSb6BvNnvnzPrd4aAGXVMQCyTRL2tNUVz",
  "key25": "2ANZX5MLHBPnH6zq5h7FQZ51EL5XakYs9GpBSEXQa1WTA9RSvSaaudB8PS81rs2iWBKuwf2vgmznbCwVDyMKP3fd",
  "key26": "raDk8NYGFRaNR9QEVT2R74JwWDNjDAWgEpdLLLSqoovBBTMwcfEUkemTVJukqQuYHrxSMNtPM4pAktoo3x5Y6ab",
  "key27": "5Y4HjBbsbruk6oVgXCswtb2GEpzC4U9qUdkd9nRzqvcZiJBnYodnhwCU9jKwvheDc7wigjVAcjhwK4k2Bw4JVBpY",
  "key28": "64qRH56bs6XEx6GizeKyUktkccnnDyy8e7DgizLUSQGJfLCrizDSfXfYbkwEoH1bQDq8GPkjPwbGHnzmsonjrKu9",
  "key29": "2ssE9tGNDmHtG5K5EEJj1dk2W2tB7unEuoKAhB3LRAqWm3KiWF6xUKqHboSHoiwk9bUnAdTNgb4N4UyCGDoWN7z4",
  "key30": "32qtt7J8SEAoDpi1msDLo553szuNVe1qWuHJ8eMUvqaZhQdWt5X31gYXUQDuXeAJS21xUxmPEBq6yxf7niCWQi3m",
  "key31": "4vTAqGjbJBiGxoNgbGYz8UdXg3cvvxqGadQs4BmgGiiRfkUQsZ5pzkVNVPjsGERw2M84x4Gf5qNkHmqB2Ji3qjEY",
  "key32": "58BGXfSXygmWLNBkJsMmnAq5d97TmfHFtsBRZrtcULiT6Z157cASKDR7UYXfapx9imUGYqgXPqgeRbs3bioQnnhp",
  "key33": "2XS9KA1LKRY4Ywwc4u4pCne24JczZgx1QEX8FEhUsgujyUPbAkjfha3ZX6GyCU8Li5gCFSYMoPpWnvQwfY9DEr2A",
  "key34": "kSmgAtbKCfxee1y5kJjcMPNLjSXnjiC8HwmNRiB741ZKG8s619MZKdN3MsrxpcZMtN3TB83KJDZYnB7w2tJ9TeX"
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
