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
    "9ndsCHqozGhEPuT3DQCagc5CSDUGLS7gRGe71ssJ3z3YKGTWXE2T6DVEXm3dLfho3exJquhA2DP5jpjhHt7SXwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZFC8puuErTS9qDACr1t6Sa5h2xGJNPm5yX8YEMAMRy99USidhHDfcAU2QcStFyKbm6qs66YrZD2HFNTn3xwdmQ8",
  "key1": "UatXmD7TZ6ps7VTVRkMDCWEgrnivJuRd1etimTkHV9Y4h1r6hoMQpdPKBBrgF3QQHG7JhfikWmKu3CcQ86ttGCK",
  "key2": "5KQR3yPnaMW2DNFinPhV2ybGtdGTzkohBnZARpHwEkZEYGaF6eZVqffDUwV1oKpmy2aMFQoz8Sf7syBGfeiS9TRZ",
  "key3": "3p78XRu2SXX2ow3J7T9ux5HETK84hpkiMN4JZWh4PE1xE5J7677Grw2Dk9mky2fJU7RKRRpcbP2KvcQofvKsQ82c",
  "key4": "2seDPT5o6q41aDW6YFSCQcx2Hbx8BvBrrE5gL6rj4UP3iea6dxymfudJD7UtAUF29xpy7wgvj32GySTr9SDn6Pdt",
  "key5": "ZJismacGYz1iAYtDyV1QL5tDjoMLrkVEuQJqcGFhTFyHEiVSvsEPzuHcWL7ChpLGaVcN1nhT8qEw4CMeWU88BKU",
  "key6": "3HJqejoMfsLNDJdS67MZb4xUeQ2BYEP1jwZGBrejUcosKkvuMgxWCjoUq86VrSZyTKqgHn6RCqiiKZ7GKDnGCn6G",
  "key7": "24yvfkhiZBMKB1DT8r8HqW2yEVNnjJBuRLBLsrGs2WXPJgHu3ysyyRXYQDTDWuSZcVfmZXmZkCujvUNk8MP95Csu",
  "key8": "3BUQ6Zr9fKvCLPqbFdzQSSzEd5bn8kurdVNECastdMiPPgG7yfVAJQWdgw1m5S6x36CYDaf4zdx8WQu2ksWk8Dvc",
  "key9": "2BRvi6jpVEajtxBfTN8FpauF9GFXrGmGbAWdda9gA59F9mNCLeTSMxPqLKQAHdKRriu4p8pJztYhZxxC5XNhWfJx",
  "key10": "XwiCG8pxgybiqkiEVM65bCp1oMZxMuuZ31ohaETmXAdmHetDyfgj8vWUqttfDqdjsV9pgkqKsVPsZS9vixD6cpv",
  "key11": "3tLFkvERxfJu8RYiHTPW1DnyBwKFBNJsdhY3trTUehHSKupQSGLGxPSqvWp7mTysCuVfyMBkxUWEBrsjeV24NLw5",
  "key12": "3dtF5ZM2hKCS2LqTvf2EiP2mxivdfrAHdAuxXWknTx5cMsHxzZFrdYy6eLkUNwd8S73TrL6bCivrzmkKZsThtf8d",
  "key13": "4vRCri8xzqEszWwYwA94wze5f44bL2ZryMpAm2458uepQiqgv9xcE2XLuGme9bg7UUFch5e9RJ3nu1qWCJdvhxyT",
  "key14": "5jfNagtQSTGfeGpkdobEpj9XWJokfyALBDq5375T1QXtzGVncCHYGk29SxFThgCsRKdpCNbN4DjrqYfbTzUocdBA",
  "key15": "Wme4An8pces9EeUcyXbYzTJLr1Q7LtUgEPbiqkFd7u8tf6M7L3eKisCFM9wrrZrof4njxL2g4rkDrNcJpXnZYUH",
  "key16": "5LKksWZwcMA6mfVDNXEQ4uGiQJ3tpWLpAPaYd5BDrHS6YDVT3sUm7ZKX9iajwQxf4uiNrSsv14ASiDjBZVAdheh6",
  "key17": "5CKK4DouzQUPUVUyWsC7RB98SSiEicnBGB66FTCEMxCth26fDpCf6kvrFA1jjp64CV74kFhkdZNUXrE458hXrHEs",
  "key18": "4yAQsAqJLueKVCvh68UdEByGU1BFYWsUvUVQNp2ZHQNbQgf5L14Un3Zkqqgxd13ckGUf68ncEysaUH27VDSAe4ie",
  "key19": "4Ci8kjGM9Z5XvayM3EYrVNDbSeZVFoiMJsFPSz6d5ZRRgJjEFkvbjWNKs6GhyRACCpYmLDymGKj7PCLvF29JYHgm",
  "key20": "6KZikk9uZcrxzxB9mLpNeeDsjL6oesUpNpk72QA34VzwSgHjBiMk3B14dPdokWaxZjekWEkAvFhe1A2WZigHWuZ",
  "key21": "cJoo5t6BTLawTWXpFvrMKzwG6na4MriLmhBowNqDztrsYbMweYJ5WbnD1dUgwKMSWhHtfMAaJXRyzSkDTEkDmdJ",
  "key22": "2hMkXRAmhJo1MBGfPqkQeJ8fiskfWnm86JPZamHpuJ9rgrKtG9qtpKaMgQUrJaa78JLBvancuKwr7tj5gV8QFG1m",
  "key23": "5CEj3uxGvssBiMDsEr1xcQ9QkrFpFYoqg3ms6TqbrUHzvwjNNvxHdvQPKzQuygzoMz6v2mgDCtKPwtRofHVBNEM4",
  "key24": "367rT9cZns9Xc4uQFDEeqXCwZZ5V3z4nxzb19m2g3u5tevuZiD2YGDNNevr8FmPthBaXu91hEJrfbNkhKYzq2MLd",
  "key25": "4r8fMVzfxcGZ1sC3s5wHCDKsiurNTcWDM5noMLhr4MFe1WyhzME2AbWgRM9gwCfg8BDNXEk6MksczHdRwFXxFaD1",
  "key26": "xs8QTWkVGTcH4YJ3foV2yxToP7mtJ9NHEWoaNqepFmgQZ4GvmbcEuKpc5ew5gp6ahVYDYZu4UWYe9ZdWskv8fYX",
  "key27": "3qAaHbbmdDmPAArzoyY9YywFu6Ghp8sLP2RnT647NDyvGMRxgjRoDB8eXg3vhJpRMroFPnrUAR4j8Ntfdy8xbBdm",
  "key28": "25hRgcop7CSCQKGFvAevk1F5uGaUDXKVB8BT3yDUpeZDdmDWRjmH8vw1YYpbBc67fda2R3XomMoN5GM58wx9zAaP",
  "key29": "53VsJCHtqJHF3JpFHdbZ7K9asQXReRnS3t1c9N8euskufgu9BSHbjLKEr7aDW3oXuoykxabE9V17csfPsz3VMWGw",
  "key30": "bTs9XgPfXQ2pmGiugUZrD5w8CevVmTJ2hddohpCpvYG1URUVmqH8bThYvqyX7WPWfnZJ584DbD9pjBbmaEpWMUn",
  "key31": "3vuJb1CfrKmdTZz6jHcZpztPQQWkNtf4nHvzow4iFYbasgyAsRJeisho2ZqrzFNhMh4jcVUt4pX3rHE3PqeeLNwP",
  "key32": "4PEXb7e3yrQW8orxscg7NhvhDf7fuQEwhiaYDQS5ZpbsKxm6NunESqfLtzFCu8boNunmCMNGmbKU1QAxXChJ3neN",
  "key33": "35nKp32mn7sgzgAkD8nijvpbHpwBcb1j3hrJvoqSuibUXbR8ETBzZmuNNLtsXFwYrV1BncRiATRbrJ6HrJF61zq8",
  "key34": "doLfoxp8FDSdrEtCZQKouvYQj5xPcnDPVSSw1RjAoYW7TGKrompd8gf7zy3EpJL1oXKdM2fehB2mowZQB2f6t8e",
  "key35": "4xbmrLNHhwo41Sgheha7kUGxvKT4yuQv8bRPuq1rswFvneYfwy1y9Yy7fQKDi6YZ3K2pZRLRAR6wwL8nXRNPwwjt",
  "key36": "2HmiKpZYfhez5suPbJKtGouDAw65gqJhRz4fWGM3hwLXdSmQq2HW1jgfszp9AAdVbhthdrjiH2mCHWLjDPHzoV8W",
  "key37": "4W73AdG4Yjutr9QZoKGsq7FtxkV5roYBBYCeHpD1QHHfqmSpWThjhYZqzYpBjj2FBaBRG8Tit3VG5fGo7CoGZ9xF",
  "key38": "p5fZ5imPdY1fjWQdYQFcAcSGP6N5kAUUAcn4W7HeWdYgAM9hVTtFBn7NVYZwKzMsPvk99CmhuMC8eLFUXnnkkZo",
  "key39": "4bnNLCtExU52Yt6veGAQH33p7GtfiXPGc6AgoRWYDgrUr596ZkJsQwJaCfNt8JP8Qt3wUiVEqdBDofFkueJDMgLX",
  "key40": "5N163ZsssfWiWkJnXxSgWH2fuNBN6D67rCEoe55c9SWMZUJ2XVPhuD9DN8vMrqYyRd59xj8WBCjkhZejKJ8jehrT",
  "key41": "3bVzy11KqK4XtquQudRdvkKcftJF9LdjJupBRiuuh35NHXrpSPqwz8gHRSRBD4C8pWwqPFS2nqZnyv9Hpw9Q8iZt",
  "key42": "5FryJmxzbuvywknS6NursTmJPdehzMfu7QuBKSaC7aMg1cptYtms7Hc2HNKgri8y2DdeSw4k9n4KX6vGWRmK7mS2",
  "key43": "3L8ddYEmePFU2kWZK54ii4sTKHAnFWbYZaio31LrppPaKfgAWiakdspXm1fjoVNfsgacwqe5SXepihbwfzHUDYQz",
  "key44": "4uoUd4PssuQUfFdS8sRB4bmEbsFXozpHApKFQZKDKLKkTRkzqXytKw4yiBp6ohSnfyS7Qfhy39gUzWwiFzquXZ6j",
  "key45": "4QfpysCh7xbUPmis7DMBeP9Un4XcPYvu52aUJkXcXFbyk3PnaqvqG2iu85ChWcY9FWuNJbFCaEhtBBjn163x7FiD",
  "key46": "29BHPN1nvLs3NHFtTe6gvMDVaPjeFfe75Pguk2BgSH7u48jeunaBLWEv84pd2DtqYCnefVS4heZo1eTWUS3A3uYV",
  "key47": "3s24LxWpecLW2EeATGbVm8aZsSRrbhYMKFVmHASybmVZmqRdBp84oFAHwFUMwDXrMETtoHPwcfctVrLZLNQ1gZXE",
  "key48": "5j9fKpKx3pXxyAG2LyRtXaHTbMX1imTWv2pLcPtPv97udPEvuZ6voN4tWvQrr3fgw1RXNQCGdPXxkZ7FpUsQaXgk",
  "key49": "sb7hP1rrTB3mnZRL3JCmQETfXhMiNkkm6sD2n2ZsETvuJdXUjuTL2Db6cF4n5eMf46mpwor2p5MDCBnB92E9a7Y"
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
