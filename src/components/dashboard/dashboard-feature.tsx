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
    "3ogKwR7yMir4mhTCBL5hg23BxUhfQ6xfQbQCVJFRzbj9GkxmFCAEfBtnS6PQ97yPtan4YVnbR9hnUuFKKLTwSioP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MFf6owRxktsH7eSGvYWrccRFgd4H8mTSHBmYwm9CQkRxR4UXACsD9WTEtbkKfJKFyfzcCwDwrQTu5WfipdejYmA",
  "key1": "2gfJNrFmrJLAU2UmgKWLqfGdrb6PDK9ZWhnWTLrFDNZZbKTQh4hn3US5gBWii8i3aTpKZNwPSjSfEiqRnBWhUXep",
  "key2": "67NrUi7uixvuujddv1kZW5rNUMLxtmuo4VyD8Catqfd2YvFzWV7XLva5jPXzV5rRqk7Vmdg1bLYB5rgetuxfi4Lk",
  "key3": "2rdaUHGZ5XMrxXGLxPd5pEiYk6wwkwskkiT49Az9omrfTFp3UiAFY6xvghbQQiUzjg25Dmy26MjC2A55dizMKBj3",
  "key4": "2Fo8buFdYMEQ1RXfGsWhZNHg81rShLixf6j7Ma3JmtEiXeKxCctbjziAcYaDeEBAJdWkXsF4osYSd7g7DJSJ1Jmd",
  "key5": "5eKNWQQ4h5zHwTW2WaoSHAAgakbEDiGBfHvawthw1CnnAnFrYMKLJFitXqsduWeRvxjzYar2MZ6597x2yj9yDwhH",
  "key6": "3zSdAJHSQmgjgnT5LzKuKtdQmW6rKm4a7YMJyTyksr1beoM75XcQkkvd5JucNsZyfkeouHszyQDt81H9tA3x2Yt5",
  "key7": "BYCcS8HtzbQG7h57G4DhyTnMLip5wXqSdCmAd4B4qRVE6mJDabDYQ65d5WSFQPYTpazm35DQKgHbP2RC6R3TAML",
  "key8": "5xxx9Vh1aq9bL1uBo3YSnqUiSajYvTYS9nFW6aiW2ANEtGoAYiRHUpg3KpWaMhpKSjX3tFoYoxeGfAtMwZwG8rEZ",
  "key9": "56y2oG4hvq77yDDrikyZdYmzkyiid1CNZWsnxq7XiYHubruPCw5iJiiM6ZXrnkwAQ5CQ1mKyDW54Lk5ExwZQLJmU",
  "key10": "5945Z8qvNA9aSbzVMwufPhe3vwPDJrvCk4iP6PGVEBJRJDkWLciDJy57svKPxeK6n3izMmVdsxchS9wUv4amrrrz",
  "key11": "4CgA2xPoTsyVec3WuaTPtzqm6gRPM8efkTJbckS9WNneyUux2oEh9ALrKrfjodVPB4bsEfB8WzqqTFsrWQXR1hv",
  "key12": "38LgR6DW7ha9ziU7wZxaHMcwbcBBZ1wXiZumv26uNZQBbpE1xz68S8CDRCu7kgv3EagA92W3To1n4gthc2VAjFpJ",
  "key13": "4JxMy9meYpTU8XWchf3t8EGGaiGGTnnCRE1HWv5i11d1VTvC8UW4QuR3jFJvGdz6JQZ8WDTy23ehPD5t6TkKPL9c",
  "key14": "3wih52J5zNR69JFUYikdESPiG5yvnzp7wFDRWhkFQHNQdMWZ1baFTUu4kWZwuTCvsyxwTvcJqvw2WBMB5Gx4JRcX",
  "key15": "xHrJwcLTSrbEtJgmzy9EEZ5h7Ptr3tjeRaUTFoHRspJ2eTrk3reV8xhQq2iUsGdMBpMurSEm32qv2YdQiy4unva",
  "key16": "4p2e9rSesJmqPyQxGgUH5sffq5ntawE71LEFP56Yzqj1GMrAiagMMHiZDgqvpGMfic36DC6HEjSUNP4C3HZ8waDt",
  "key17": "4MY2mXRcsjndf9EsZhxQneQLYk3gjfzmY7unYXSEptVczV6cfLFgyRsWknBypWu3ksgFEynjBbco8Nh8t6g6qnTT",
  "key18": "hSkE8KBVstfCSvhYiKCqYHbd8Xd3v7CmBQrUaHjq17MsjGeiBsaiTSCohSfxsRsXghJ5Fb5FpGRGnq4gpcbQ1Fp",
  "key19": "5dfrCBsEAMfFfqAzeVeWceVX1BveEMsVUg4c4UiFHbAXKr5NvrqZYqbZQBfMF1hBPipiUpo1WvFNdYSrb9fpihfw",
  "key20": "3R4hkkPCgsEJECFHWNrJy5y2LmP7BMejdWLaBybc9DoKBvaYWe5Wg3soueuK8rBfB32FTVwz8ZvoEoy4RFszSpR1",
  "key21": "ewYhXJTuqbeHLd5spfW31VGm42Q9h3CvbzhJaF31S5bKM2Mn45At48ZD9UGfZmB9SREmVFner5B4jCzETmZoYwq",
  "key22": "2YN7HjWta5FpW86RJEZ5E3qFS5gr4GzLQTqZomzwhyRZVXT1Ei8gUwABHG3ueLH85pWtPFrjweefDRefQaunJ2nu",
  "key23": "59v1AXJdY4ttN2so5ijHVfwPL9Tmo5S2dY5fZrFzxnmxauWrKzXQiKBhu5mXCBCdRqTgvUYQhAut8Nr6N2cgDfnR",
  "key24": "3pwhibkN7yHgGRiSWyQEZDPwk49nqTCwMRnva1ofeDteHL9ZRu3iHH9hDfn8d4aAbJ3HNwZvSmdAfqBRP6P5r2fs",
  "key25": "3CtMNXyV6U621gDhTFm8Tgip58nCLycuosLDD9U9AmPrgtZJHuUZ2YpzD8ZPfPs8TN6e13gKR76Rt272hE9U3Uoq",
  "key26": "5bdN7ABJWXemXJQw785EyLRvajoUXhH77w2mSmL1GAQ761TPFMdTemAJjWrcPmytvdeRAwipouLrs6ot3FqXDuKd",
  "key27": "5H1KeWjncMdtAexF49rHgvoUcgFZULKSAi3WN6ymMdPNeEPFUsQJh3vaz88uKGya5ZxrnUox5h5KHAoAXXEHMGRN",
  "key28": "3dfygD5RCkNBLBVUdef6PmnmPBzNa67KEJrBcYibpc2VE8N6jQNgvG1u6dPmHapdxJXH6vNZuXwuZYvhqUdbPhjp",
  "key29": "inw87AtR3W8P4AJuuA8xd7wifoL11z1fyagzGbZHijVgEp7NfR9jpHPNaqaANA6b4yKi7Bxae9Bm8aXkbL4wphM",
  "key30": "54VHvXcQWsf8WNp9YTQXYVgUUdgdN5QcWPTDAhQYmAhaqx3s1kBBqwdLNJ9H4fgkm1nT9Vph3T8KBnNxWi3TLdZX",
  "key31": "2mQTXmT1N8zqx2BHXfpgYGfxFnsfGTUBogufg62nkg5xffFPdvfqQRYgKgMMNMMcADEMmukkHUSxcUU9v5aMvBJg",
  "key32": "4FeSYZXGMb8V321sZjQqBC4eD4TYrTNp84uCrJn875Z8gHCwsxmVCFSQPVdFeVV2NK1ASJHF54iK38zp7FF4Hdys",
  "key33": "4TfFzWGV7vsmJ1YyiUwd1D138W4V14wgkXWTVuMtfd8DNVYfbxRD6GXbu9Uuk9Sv2UxcbdsAThPF9sSvbFNy9bn3",
  "key34": "3KRq3oX7qzzZyxqaNjvbzzEjpGipqdwNfBeeh7qwQHHo226HHqGYhSPESYbP4N4SzMPT3H5Zzj7UGNkazcuGrKTY",
  "key35": "4UbPkJ5M49WMMKGUyDJkAttXv17gPp2YZCBHTWKLmCXcrXxfh5bRJETkNi78tD1pqZwtt6t5cyB54NbU5gSzRsDf",
  "key36": "2L6KZHxGu8BVgmnLYiyd18SyGwXEuAfv6R8MPH5T2EcY2ShQ7fMuMn6efU8S7fGro1bYbW5LKyynXpDsouYZ7hJ6",
  "key37": "56mW8NAhxXwwyyBaPDFcZjXVPQJgXVoJVi7pNpZ3qKfdxhcmWUE22LDzXZDZxRsVysvn7Gcg4k96bXtg7PVuGPZs",
  "key38": "7tW5WiLnXVqxcjaVCQ7Z93iPjDuGMJ4G9vdJFiZSihFmmdv7MnHQNuvgphD4WuM3TwCVVYjK6zDfT5sdeSpwyx6",
  "key39": "4zhNEtxyWuGfbZcWhVGg6NasvhEHAM6S3AQ6totT9GQQbuZGR5rcJcUEyhmzo8SmikrgCiM7qFiEmBWU4K5WZ4hm",
  "key40": "Q3LNUU6ZrHNF5zbfNGGf4ShNxMRX2yVsXtqy6HZcFvt8Wr1X1EpvbiMjP9d8eyYtvjgmhNYevZrbeSrc2rXcq9e",
  "key41": "2ZUGBMkjx3pq1GDQQvPgym1vDDjp31ATAVsAu3o9Gxpm6fNpTS2L6gY2UTtLt5EY8UiRB42PqGdsXCxpwvk1XzBv",
  "key42": "3sLt4zND4bGmKDaNmkwTdent4DCK6ZHLnZNfXTAzLgFqVJkBtDJpnRC7mB1HfDWgDGAqbDXPetEFj3wje1dEciKN",
  "key43": "JRNi5ZQgoNsVW5uXmApUh4F8UBepTPa9fDDDEVYC617sNeNRnrg5SAqqwYJbxUmv4s6uix4a2cKRSxEgHqM7wdE",
  "key44": "4DoJhKAxB91xZP4hSBshmC2hGt8t7wvr6ESX16UwiALWuxXqGrGEZS9rtKN3XK5PyYPQDdJNNJDz2KjQbLZUpxF7"
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
