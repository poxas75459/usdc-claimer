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
    "zsgd2znHZdb1WBiggZ32ehemwQXdiJhexQkU4Jg3yHqNu96kMagbD8w113wAsFC1PW6SKyMLq3kAuYhrP77tPZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bkg37ahp2Hah4LZJamXKuc1tb8KyZ2smTpA4TuVPubpTwAYHUj7fGNXcyY8AnvfpuXFrFtqJicPaFkCyin1rFAC",
  "key1": "5wNvTRqQCqhf8E8nmiS45gA8hWdp51F1QtDoHkmoVecFahjAUrVG5YuZ6mjy9XV1cLrFNcPdPy82PVjtU8DP5QG8",
  "key2": "nhPTt6f1hm4QKqJL4xxoRfXGTignKc1pmK8xatNpixBH57v5ZqpLcWDHyNwUthQGSREQqTv6RkgRrmbVRMTjEdM",
  "key3": "3YTseLVuzMkhgpUY7Fn4AfeqGskzTVY8CS4hF7RZ2qt4HBM1NC6aL9pBQAejhunfQnFPJW4HpPBgKqRYMF52WbiU",
  "key4": "4WPtLXPMvBZhoj3aNoxS7oJZ69KKMgjtyP6BtPNhGMmitWAm9RztYHHNMVBE7H4AL2i758p2toNuEwkFjrqKdtVR",
  "key5": "3N42Zk7HkhZKmpyJiXmvd1jpNpRWFdjJepRoUAEUSRXkzY9JEZvXNGJSs7axNikw5YK9cYp96rWxjUF1jYUNSN4S",
  "key6": "2qovT6fhGm1XKqZR42BchEcVpATNmMS6C1szDAZukyPGXzkZgaHwexFS4gP9392Z7Y1NZdSGhU1R5tAcftRxGDtL",
  "key7": "3JoyTYK3638hSxbv9f4CmTS7RMJtVmorbPrxQj1VPTv3S1uWcKigNgFY8uCWhHX2whky8vc4C76qSVbY9y54eGiA",
  "key8": "237ETBTreBv75JNGL4zS6m5f8kL5uUmibHnX6zEGV6jqj6BSs55kH94kFDQkk8xNAubKXoXrD5WvLadMeiMtnAKu",
  "key9": "46AcUvbe3gZ6z1MvYFhsxtCdNZzBuUDuFJbULabbwf6n7FqRiY4623QNWcVTLYmjHwbK28fmhKYzs56hTwM1qABa",
  "key10": "4YHgA9K1MC1K7Yq6tCeJJN1nb1qpvGFctwzufT9c2jkMizMPtHxQgBGf6Rm1Fs6NJiuftTzhbysDr35PdE9YC5SU",
  "key11": "2uNLqqLdKVWhw8KyQD1vhtcL31ZUnTAjEm1nfEQpQodBwe59ZeaHHHajG4sMV7uHYd6anJRZT5oAAHUU21dsaBDB",
  "key12": "4LvXj4LmgVaWbhN5frtV1SmMuDe7HXFMtDHFCWAToCFHNv3fVFstw1L8CmF6KDnHmhFM3wosXT1KBeb8ai9B2prc",
  "key13": "xpF2Jyy1Z3fqEJEGhJQ44QeLoM4hpMLGahjuvMWZJyB916eMHeYMghVwqYEea6oEY1MPea2d3N3nyyvt9yH52k2",
  "key14": "BbtrRmKBXKAaUpfLirhAu1nqiyXvxGvizL5KrdYxD6h2evKLTyQ1SQKET6KgSQGEcXJ3uoo9hMJAHVRJoACH5ez",
  "key15": "3RidbWzKKjzd1BqL7ZE5NeiMx4UwntjY5MiUg592mqr8XuwfYxsEy6AdkEVs2s3hDpoMG9QW1YoCHtktKSxVZRHU",
  "key16": "51UMDJPRiRvW1EzzPeWyPT7kidkcPVvMJZBLftUiK3tmRhspBkmgpwEdh5iLgLoDfegdgqqEfTML78d9BbCWyqjd",
  "key17": "3cMkz5Zvr65Y2h5Np695LwCh97rjpFfrLYM9UV2g96AQ21dJdWz9MfSJWqU9UT3cSZDBFZs3P3oQYCYo4j443GDE",
  "key18": "5wj8kGPXxgiFrrjVtVoMcisEvxSEA5dpNZMB3yWv2GC4RhNpdwAX44aJpWrPA4KGAkShAfLmyVg9PwkZAwgYSdj7",
  "key19": "4ckgTjJrSeWt1m6xte8dCvNEymCZUb3xgDtgJk9AL8AhHW2aq8pAjGkKM5skgMissSajXCxHDfMwZQUbRn2KTAo5",
  "key20": "eXaMQhufYdSWd9NXcx1jWcSrHR6KsUXGFyuSABh5MfG6Kjb6AyNEDPz2qCs6zr6aMtSRbiicsDBAnVZ5E64TXYL",
  "key21": "5mySS6J8ap6nwsVz2gEbXYpRrtBCAqgnYy9Wv99iAQhmfFucfH9KW1R48gnHUm6gkjSvKiNCfWEDRwQ5r1eLuv84",
  "key22": "5t4Nfuxv7pZNTcV31bo3sLqHCDwksy1eNg52JHa5nxrksWZmsiJPrCCJTEeHg3DmJKwMH4ZKqG3MSr2ZZQrdpEJ3",
  "key23": "59zfxkP4ojWmhLaAjdPrTuxWym35w6sGTqwTAtMF741iwRNY6XWtwm4JxNd8U6HQPnPjc9sA6zsr2KNXfF1XtpPp",
  "key24": "tfgpBuRSixEh3ktBtndwF6hX72SgwbzXLEboyMjUtBQVrm7tk9rUhGwk8LkU7SNKpZidP5caNaKDKQEe1HPCAUF",
  "key25": "5AzxSaKrS61NapMuc3Cscwr8ccbNwp6Hkkee3a6LxagF3XpVNqXmYJw1piaCYGDLtfPbi2R94sq5zL4SzhUeRLPd",
  "key26": "4YTGRou697ogXDWkswwRsag7Zmq6Dhsm7yF3KaXMn2FgCcnkjNRNuoD8sWMsPvBBzrfeRRgBWXaiZwGHAreoKFCS",
  "key27": "2MiL53PwrSnsggQk2Z6JrdA4kc7WS7LU2FuCKfttf1V8Zi9NKJUDX35yDLSH4Ex2DTv98vU7SbQ2n6Y9yRS9ua47",
  "key28": "2J6X6nKwB7nUEa4FvH93BEvaq45zCnJbMUd6bioxVT3FhRZDudRzwvR2py1hg3xwktkfxS3osLwS6gkuaEUrvHH2",
  "key29": "nALzgeex793JJnDY6vYCXCzoPruHAozj9ogS8MYAbmAknb9qfdTrMyFUjbFTAMyechetcpDN16Zgo96U1iqko5f",
  "key30": "2ui5R7DDWaGPwwKWpmijyAP2wgj22pXtVEE1uNRBJ2cwA8wXgpJBiZMCFSZ5S9zCA8Lw4stafu7nLcKgqzd2fQMC"
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
