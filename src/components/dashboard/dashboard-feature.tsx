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
    "5qKLiNPrKcePMdCaabDovCAg89zV9CqSikopQgPGKPwk2H49AyDPdHw8H3hSk63SQbygWPKxavM3ZUpgF7q7pDRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bDEs6FvsQnx3xngPaYq6dcjn1SswEaDuJ17oz1vNmfnDoPBTE7pTT5WT3egEmgtzu26GpGjPDdpNHUo3atA9uSL",
  "key1": "5bFDpKxJE6fn8dZzm6MpgCeVnW6W7JFJPZnk7eBUFgy56qNF4xJvbGx2zbzUnaAyiCSK3Jnd5qLcB6ceyFkRqdha",
  "key2": "4bPbwojaBTJajKR4Jp1r1M4e5yLmMDHSniUZohkwjCAM7MWBUrRPgAUtfjauPpndVDJF58GkWDan32QYSLX8nFHk",
  "key3": "4vGfuMawWT5Ec1gAu9EXQ7QwV8YgpHWo9TjuaKWnWBp2oEGAmpb7fVvVhsZGdBYQL3mAve4aR4HLbapgpdntoRA4",
  "key4": "zAFywaHYsVxzECycbYhqwH5RH66r2BH3oXRkFrDPVH6PqNKpezN1aE15C2GKiLNQp1Ufk9XRFisSBQ8eYt9ZaGf",
  "key5": "34TqBY2rkpitUyXCWAzrR5CTJ8xSKet8ixavbXtHEG3vFeYMPiQpu7hBcf7fCbmNQ774rebtUNcY9yh1R2vSYB5r",
  "key6": "osBHwCccFB2JfxYF4hXt5B62btnDoJAAMkxxZexiuU2tibHpUbLEGWwH2jhTjNW6DQa8VPKDT1rrkoLGX9uzSfw",
  "key7": "pDQJe1BusYgnrr1NvhexGsFLTAa98jzgrLJKsBeC1rdE6HZ7Defju5u9qMcgJzmntnYDB2bj4vJmqYFsGX9bBGP",
  "key8": "4qPgWtw1cfVWdFAJhnXrgDsoeazVg9CDuHrBJQ2RFTRLkrGS4kZWjKEPonQp8R8My1PRZdxzaAhEmm4vXPV68T6D",
  "key9": "4NTpstKjNtJhJGL3a4XZCvRRLttwqYimZKZsbS2ShcZjdsaxqrRY5bYcwaj56L15NBJYyNk1WtfvuDuKk6B7UkzH",
  "key10": "hC5D6FVKETETPrbTXdwjgBSvChm951vsWpD9FZPZuRCaDrKvuZC4VKrTZpnBWn19isfxPa59Fb2dyTtLC32VCJR",
  "key11": "wxBHPgiR8BcF4BmZhqnFmrpcbqRPGuKCTPixPA8ihPrgrxyEtdEodX6AEwCtH5mawdiT4SNcg15wAKwhFMhYZFw",
  "key12": "2uVqGEV81AHw9NmxHYeWiprBdNxa678eCxbceV8Xhq453gZsbS6E3V3NHg9t7Z5CwnyfpcKsCuhxrbMEXb4yaELp",
  "key13": "39g6Sfj5mmVKPkcXTe72VSyDb3QxgY6LJ2LrFbHdMcLsdbDnVMMPCGssV4To3HKgf7nMye13dhCHdmUcxkDHPfs1",
  "key14": "6GVHSVP4rJ5KcBo8RWag5bdYtShMU68KrRcuLsQEfYwMtUhpZmbfep2Dw8RoNBgz7hHYAHNtEXe72ZAoacqaQSP",
  "key15": "2yyhKaa3rXcHhZ5MYTZ1KdmyFNcMFLCAgPER4jep9WweCDaBkUq95aZZB5VLPyhH17yGBM2QVoAp2Av2WNDRzCxm",
  "key16": "5EuoJE2vEe6DUkt8mzVccqikRRqHJggvk2FsYwQEwV7fem2JziRc53oDt6SuYofeepxf3EVkDyhVbQsqYBrEKJn3",
  "key17": "5cvpCLRpCEHe9T95LKBqvSW3ENs1WDijFFnDpZvv9dxSFMdPQyZ4mvRvBhKnQDLJJXfdwWRBFEFXXzW9NSVFnDSd",
  "key18": "5oQQPHQsgG4PNDMjqmAKKKTuFjiGvnc3cPPjxgAw4YFksWF7vomQXxASKyjpHJ3VFMbaLvVFtY4EhFho1KbxS2Mn",
  "key19": "TsEeC5ktYCT65ARhW5JX8Z2ZmKVtgmGVbhP4BECvaYAbxrFvCGrGo9i3Sr2oFwdXkaZ9zH2CNiRedjGxVHLDufX",
  "key20": "2mxuGyfc4jYiQrF6Hb69CdNKNo79VnTu9YEoQgkHSSvtr8D73pJbh5d4Ckf1Q6a9JRGTas69tHm1pohi6sJjodKv",
  "key21": "3KSL2Vzp2if9xGD3Mfd6PgzGbgfthDXzgWPuXi3BW6wCzYCvJse4aQUysmjdDchFsVn2FTXgLAFsBTd91H25io9o",
  "key22": "3rq9yvUFjGtB2YhXM8xrVFFrKLrc8utdDYzEfeDBkgcEbETPTwmUP6wcZjNu11fEfNTCc5r2EGEL5o75VV3zFhez",
  "key23": "5v2bJNzsMz5i86P9bT3xqqskaUJdD1oz9XW6i4pUrySxaUHK2iqNDr2HKF7SjKZERgDNkHwTnNNk74pyXd1mPUSj",
  "key24": "zPyu9x3fcXd1fyeeNELsKsEuuKzWBsR7UbJ3h5yzMSzBrHRMETgwXoodD8BFu4gwaHRLube94SNCAqXTB6EUVZX",
  "key25": "3kQKCW72giSGah6kiy45aN8EQCepqshJQXf6DgZ9L2XKBeEaHSjFJgMSeSLbBioheZVYWEzTVC7ZZ6Fz5VJPei67",
  "key26": "3Kvo6J82q1j1fm2QBVgaBy552FTEPGC2AYxUnsP2Gfz5CK9kjWtZVHeQ4oDvy4c1Tv6EstKCU58GSpiMkSBTnwMv",
  "key27": "3eChdpVj7Hj1QBgCHMaYu3zwagwJN4JBEiL31gJyU8XjhbszGiJhwumEBFuVrKe13xW7Eq9gH8N6PwSFX5zkhAhs",
  "key28": "3Mc8s6iqFoepSEtcdUU93bYiak8BQmDQ9BoUdtWcX1bUfBCjjKPd3nhhsUM6cTx4WUPuNhGYxt4CKPaxnT9iqi3P",
  "key29": "E5y1spiDrG7zUNcW7MeJhm8YRQUBfKCELVa3csR4LVN47hukMj7rLF8RLKNq77DCBnsRweNrnqtUiDRzbaJNdob",
  "key30": "6TgFjSPV8faTwzKrvviMVNQnK5x4f6HAMfDCdkb3zdptp4zCaSrCEPD2q71cfrie8HeSuTP8pPpJeiqa722DHuk",
  "key31": "g47ueNhsmrSc7UEXLtUzyeQwqqtQNzZb39g63E7ABTdcjHQ1VpfQPGYdvHZveSijFodJE8EYmbuVAojg6XYYN2g",
  "key32": "4DeJCy4NKYNtEvxSEgb2QvPbCudCFDhhbShBbNnSn7Z8gduU93b4cudTQc7mmNBzNFJ1k5zGrdRUwHahJdCVpgrc",
  "key33": "4A9GTt4CLEZcX63XijD52zS1Ytudxo5frvMrd9fbgaTWSCsqAR1qG2iuhEEufvwMxkcha56QktggjPJLq9A1oCxw",
  "key34": "5uX9aRKHZmFa1uq7F2ToutwHhtntg3WDQixrhMvEPKmLxw1PkDKkQhTH6shnnzq4yLqovEZduoe6k8pU5iifVFNk",
  "key35": "3XYhLmmxESfc6zwxGQCh8qoJRbLP2KfBGP21ccmAh8i1hoqbucEro8EYHg6odkSGb494GCaZBt35dystri3c7oxd",
  "key36": "599VfR49WFY2AcFSkrAPm2zbfqypce3F8K7QGgv3GQcjLbx6x8AMz6qTmPBC1vzjLx2s6NJ9HXobZeZ7fRPmahXb",
  "key37": "4spM6CzWSvuvEHUdmqEDyuq9gQKs6HGUz82yHRamH2rXeoHbqKMNu8nbhM78bCCaCGMC6aQbcqF2TxwYrv8CBcRn",
  "key38": "BDNsAR1cwUcfrknyQ7ALfbfhg6znSCVgR3W7PYLpzDfAmDencJL24XBm7hLSCfhHScU2T7BTX4ydCsNW7GaHv8K",
  "key39": "3EpDH84MqM5decKAYhXjU2fqBKKGRsbZzSfva1jmohvLUjg5LYrUvWFNetsXX9Sj4NLTEUqkgDwfuN3Xmmic964q"
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
