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
    "2wWwUCauCmmWtcHRBAdcdnDNyVrHhNg1goCKrFyEyy3E9fLwhJv5wG3rurqwfmTrr2woUpvcXBG6aMByFWfCWoPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JiubAusRQX4YanME6VbMdHTMatQj3ngTDNseaKhZ4qjNmwu8JHhNvPyfBwnMnAoWVKcrLQGnvBTTisoyTbkAB5p",
  "key1": "3N1g8ATyYu9kphhH6sM3zjJzemFfpiCkoWWUUEsRtmEK8GzdnPtJ88hqDroFX7A8x7ccm1ExbbC4ZeRQEd9RENyo",
  "key2": "HdRHx7LXekHAA5eTLwb9qAXeB1aqwocMprHeJfrKWFb9P1xwHTYosQT3WuxLPksjf2hZFCiqCkowozX9zVkK4vy",
  "key3": "f2NtFZ1qbEW2EBiZbiFt3zUBs6DmWxLgjc3GvLjoPdSBmbErr8zkNCtLt6ZDfHfZPwiwxU614rjrhkE41CuGanh",
  "key4": "42oB3L4z3scnwPFXRpuinqpBPUVySqJpGKYcQomHaUG3hFSchRE32aNjGkh4LwW5LpdRWpZbs5kJM8KfhY1iwK69",
  "key5": "2UrmgVGjgDHsWYhf5Mi1minA4WTmyoCEFfZsZZ28ZwaFKWHq18tLgKuNYg5N8MeN5RpZg8d7nAEJ8ce2taa2cWFs",
  "key6": "5UowxmgPJycdhDTryTmHsi6MMzHCHEJJsHfo3iNyJerHm5tzq4u9QfU6KBeXkUVh3CGGVUFrEHWewT5HyMT6juL1",
  "key7": "5YpWv7f59TUPJVciFXbTbYws3cQUuq8y2dEUCExbBuSDs8dSzCMqhXqsPFd2bTcMxwauNRhMt8Unv9iEMqvMYU8D",
  "key8": "5LRD3LNpgZJDnRYS4EX4QJjbzrwjmbfkVekyy8JMtdv3SFr45GtD3RSUbbpfjWvH3y7uDiRsoPYL8UuVrgYdBpd",
  "key9": "373MUghn4WU6mwqq4JTg5A4nucgjFmAnikS7dtU7P4hdowRPaeZhMQYtbMpAqPR1SWuyne57CVAY7RBTpc3Fx6n8",
  "key10": "3DGJhpmeaXoRvndafWKMVLgN316FTn7LHCr286GDgJW7NTHX3dNQfbK3AYUtjeKdptom8NQC5yPiibGHpmjwXzD6",
  "key11": "4qqagjN2Yh97wvR8CGLt2vrWDrR4EH98ZPdASnUPRbQUaJETZjEaFB8WUMwViiD2Vq6bdEJe3mYRejLrEYs26nJr",
  "key12": "amh8g1tSXZzcQB2pxddpQhhUQvtuX6H1RTogQsb5pJNeqRQZu2zzLzuRnYeqipwvDas4DHuAxzYcPCJ1jq29Z7W",
  "key13": "a8kgNjK7rZs9DoKySsox8fs5hNiDWzMMwrYm2PpSrj11gA9Mzb5ejxDknMRxLWxWGXSBUonZAZbHNyuqYbwdvWf",
  "key14": "62GKZrTT6uXT51piMJzWG9HMPM9KJzyjbSCCahtMJXmwDeha6PhKWDCR6iWJ2jmsrfhWztSB8ngS9EA6xMU6rruk",
  "key15": "4PhUq3vwAc8mPgtwMjB1jsEo5ZqUMJGCgV37MzdjR4so55R5cD5DLN7YisWW2GVJQrstM3MFPoEMG9ktCeSpzXVn",
  "key16": "5aBtLoBZqtZnnJ18JnwYgpeyvNbMKHUkJ3426isV2Vd2AhHnYnKqZXFJ3mimGTiMaTUY3YgnzjowMHTgyTa7uKJ1",
  "key17": "2Tu1N2G1DJWj5FXyyJCm2FDh8xKKeCMvLVeVu71tjD82aroMFUyoYqhbNR5p5v6uvdw552z8nsfKfUGroRfDE22C",
  "key18": "5HqxK9DVF2sEri3uqF5yS4DkfVR1wSoUThVR5MZUpaJut5neQhZ4qfAyu2MLF5rk8mwDAeZBrGTYb591G5z7qf4c",
  "key19": "LDa572CCSRSC58b9nup8ReuyE2bD5ohCgApGRbKvJVAYYksf6JsTe8iGP8jxvz1virkL5khP7YSaW6VmB6MgShb",
  "key20": "243wfK5UifAK3nYg2DXzJDoQ7JFRmuHtfKTAVjeU6Y5Jj6zmsX4EzggA4dubzqEPq3aLZNCx7JU1kZcjwV6vdtYs",
  "key21": "5V6CDzAAodZGAFUsNSjHke7upXqTEo9GqoViJY196yMbmdg12MF12L5qkNeXbTapk5YbHT5mXnZJ7GFCXGEEfWfi",
  "key22": "4hNsFNYLsD8sSXofUCGDhjryjiZQzFjXqq9NRsnsKWajTohW9iybaXkoK9ioEFPtwdUTrvF1jUHw47AFBrZ5nNFs",
  "key23": "64jNXZweYmKSwAiL5EcioigLKPmL6SNaLgiAxiiNAmkZwf9SUWfhK1FveCm8LRQyBGKynevFA5mWsASk3U58Vq5r",
  "key24": "32sRv5wcf42CPMdM9Thi4PaQ6i6aUEra494EnwpmJhxu98RzDvom2nmjwVpPN2U4YC77Pp7ueAzsJVMTLAvyKfCs",
  "key25": "4PmPkUaKwEYTp9D7MdjWZctxz76tQ8iWmrS71ZGPwnqvdtYZSqH2f7od4iWTjkJxQXsWTi2ui4WAb8NKTkYXg6e7",
  "key26": "5bWo2MDMeYbxAUso8XCycysmuRMBwdx7g1skPpdhNnqEDGfQMtsrGFrnmSkJpjW7a3q9B2tXbJox5fow8pb29JJK",
  "key27": "4EBcT8U16otN7t732iWxhP6qJHdUuW7HYeCrjk36RxBfvxPFb8Aa44WJLr622MAoECFqbp4rfzVW6kbe7Qgjy616",
  "key28": "5veTJdUJfm1v3eP2audgMwPHZikKE1X7Sjcso2wgRUK11JvLPK5goAuMYWL7mtNfunUGbEA6sEKAmreiLN83xo66",
  "key29": "4nZTH8geTjN3iYYR4uDmQQY7tkq6yie8cgcJpzTtgb8Ny4sE6L61oUb7YkRz87gJE8sm1PH6Bx2Lz8ads3FGVR7p",
  "key30": "3PL5Hta1J4Qpyf28W4fXXdD5TpxGSgsUosbSiN5ToDLs4WHvcA1rpeGhAHUJXxRTYnHPgwFBA4yYrwci7dzroZLF",
  "key31": "5ubNuV5PQDJfsRumGq7Bo6Rq81ygSDgPwByw2ennebRkPna6mM77ysMd53zmhdfHFQ2EjLWP35vSG9t7kPvXhw3J",
  "key32": "4mVnkKCjwt2G4DwbHKPJCtitmxQRxu3fJkkHzqijSy33eohLD72N4N1AePDj17aCZQAE5e6KPPooLDAkCLF3HhUF",
  "key33": "3bXwWmQTCtZi77DrNjsqXqdHgJcGF98Lh78ZLHWoZCYNjBxT4nFGRZzjBSrQPHGpkxxwQHwbAVqkXsNZBKdy3Xxh",
  "key34": "2y5fn6kMe1qHJSj99H8XYpGCSgvfF2RZoRgbJjvivvLmqnSdSmnZSggH1jyA6V3LWs7zfaWwWeFPCAPRWn3WJHmc",
  "key35": "31exXzPvyc6BNuWWhbxwCyBLfUunUDUXsAEMzRRX1f4uZwEquRRnwXjjx9fd5kM4Qu4J5YsVtyfNyyWmWHs1E1Db"
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
