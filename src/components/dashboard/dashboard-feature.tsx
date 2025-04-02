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
    "55m8RT3ki9caamFNLFAQA25YtVBaD8u6PFq1XrdkYAeXbhAP2Stcq2DL8v3iAeNN8aEv9FaVhSKzGCELn44n1wFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PDMzgiRdNkjYgeqKjMHgP21xzHRSR3225WnDkvjhrgiQXB7bxswoADhrBGaJwuCEXpAqgUGM2jUjozdXAV5G6kg",
  "key1": "2181ayjPjxNafYZmXk3DT6uHjyo7JZZpbdDowNRSzWhDhxSPMkdWMmBVF7rTvado7FD2pMSRvmX9WFN42trqr1pD",
  "key2": "5ZzTRnMwqEq7BRp9QnBrghvrMxasVmo3bMMmw3QzNPU9fTDU54KyTjDnk2Da4HPgDChup91jXMiu6xHYcVTgEJDi",
  "key3": "4LiRWPYrbgFkTFR2TuEYsgTdGrnUbVaJuk5YzdLHLmvsfZ5PfgShx9XeDjCMmeyea1TPXJyZLvYnHkHoN4VgdXiA",
  "key4": "62NvSHayJZudjv392Q42S7fB3xpTh72cL8ZG8JB9kVT4QsbErk3hnPsg8QZ9y7MVuxFB6ndqF2qJuCewxqQKaG9W",
  "key5": "7kFX6Y4z7Z3DK7h139K3VN9hksc6Zk5cgXWgrMDcVdah6DLYz2nwYa236SeBXx6ZYVfjJhBFy1xA1oR76QCeSPC",
  "key6": "59eNJkFRfnwdZ1dpnQV7YBnraXoESjS1NB42yu4mk9meLEtfDRLGv7WeY2xHnL28iH9wUGDrLc248wNYVvWQTNjS",
  "key7": "FokPhicrq7RafoDstqwNkZvCNqTwqdL2UuHA82ZAfwvifTAFCqYu46y9ofoS89kkQSRTtyLapYnsEn9YXE4WAoL",
  "key8": "24ye8pRtXV1JCKZqTgfZ7vbvQ9Nbn2We6hSoXo3Br6NNUUaVkR4otLq5hiVBvevu5j5KfZAvtq3DHpw5HgZRpZVv",
  "key9": "3Br59AkSURRditPffYoa3JbJgHJFjQeHZouLwehXUPKEUKb7fAzFSuxSdA3kxbX22MScqK9gG3qTDfebYzqwEuFo",
  "key10": "4CyKrTDz74DeJRRWfnqhAtF9yp13mW5SkDHQg5Y1narUgYdSMBcKUDwvC77m3JRBQ885kneaNoscyHzgyDoKzEgG",
  "key11": "2dBni8xzLCo5YD48xuE5BEkShhHgT3nQCW8Vw3PCDPk2pMbLT159epbrYazXcRbPvfn21ze2V8oPof5Ak21V8h2m",
  "key12": "5soGQT77mrf7T7rYu89fATnPqsACP9rFW2JofaGq3jSKufNp4zVvsGCA9zUmwJR4EUzQ3gY3csztfCNUnskzmgSp",
  "key13": "3QskdfmrHRqTC5kntXi6WkcpkdhpCBQYtHmvheh4zsUNtWEYLbopsMvk1jp5sciuv9kQg8jZoYDDL9oHRfPzi61N",
  "key14": "2ywMhmoiP4xvJWYsuPFUuUBFs5bCLxFWaR6CN1636YzWmWeuXC5Uc6gUSuSk2MwVUV9DwB135QkBWULyEU43FiuP",
  "key15": "2jca6vjxeAr77nZF2ZxNaV8MoB4S8MwnzgboSMAv7AzVJgxcqeyZnvUHMB79ikkwAjZgmmsAbRQWjFyRA3zyddoj",
  "key16": "2uDPgaAFJiZqPScKjDjFftTDxhj6pVb91rCqPyxYqDdCs6kJqtguA4aqQEvM39MEAodFTxYo9aKhQKe7sKpYb7y2",
  "key17": "5qqYxTT22pAb9Cx6e3vUn8fBs7dQYZDAKQ3Y7fgz7fthYreXLXKtnPvtnEubxi7RRUBfAbuZVuh1v2qFadGe3xpw",
  "key18": "4nHiqZ451gGmAdJa51GTDAu1qE5xDHWK6B3rYjbyTitUNj3ZoYTZ3tmGssERp7eeELSdbVZ2eSBMwf8DPq56DtsD",
  "key19": "4kqE2xBoz19JZ7xE5Wy6GLbc74FTG9UWn4rn9aR9cmPu6s44uDiCaHThsoVY7QNcwGDFuDbDhU78atG2cxBcX1KN",
  "key20": "B9pr9dCKzEWzFaKPYrspz1qY9SoLG1R3wQLEwbqUi5rbQx38KftctfRQvXB7rbd1Cnxe1FtYWXNa8QRPS4gJmiH",
  "key21": "GSPRg8pkdtKQGPkH2V9vyQeNibgWVQqSW2iDMQ3j4Gg5VnvSDaQf9hupAN7FtX3fXHmnx2qXGdtKUuS9o5yeD53",
  "key22": "5YSthuLcH82XLhvNKkBrQqnyjPtmcHosrQAk1PEivsxE6xiyYzsqSmQPNfRktWRgtSuCN7hDxf2KPWCBMz86d7GC",
  "key23": "VmuJP543xtDjQhoJq7gDxvaQd6g48RNBELQv3eFDVghnzEBpmMYNRaxS6Bj3TBZ25zLtZ48AuPRFkfvosYBfhr1",
  "key24": "4PzPK9k4tMrnyDDTpC4PzvZQJUELtMj825fWBExCY7mH5Wt2ryiEJw83eoUfnazde2AAvcHMa1KbPsq36K72hxaN",
  "key25": "2zUPF6FA6saFZ9RcTJaLUEcCozkRhg2KgiaaBSmTrZZJmzbLywSPzLsuFgC4tpW6E2nDvNGDYw7xXGqvU9uzRDL1",
  "key26": "5mpLxHv5LfYGU8tME37af5qBMPYkQELiWy4cKnjept9xTwUGtV5DMpKtXL3ZL7cbhk7pHtR7c2zbg1oV2TGaK23e",
  "key27": "5Vq56FompNE7JT7F5HakWJxJCtKzwaXJ1JXzGwcrMB8BfEowdFQ1ihgzCKpM7yoPFqdMAebMQP8fMGAiYvWNo9V2",
  "key28": "5vH5cJJ3Dco7yHXxW63hTSB86VGwztowZm1T7HrgaJrmGoQHHt85VJnWJ6wZ1WexeuajDeW66L1XX8p45e7BWieo",
  "key29": "63oyhf4u3pahG6bcgVNLmVJU6esb45ctyx1rXi5jQcDWCQTH8tFHoynXbEWAFeJPW95jTvDF275UMFSZQNUuyPvT",
  "key30": "E88T9YFribaGzaSzSmhGSJz93wBLpPHaSTeGZUs9nJ7JyQspK6ReVimGiNCxKrhnPY6HpvPBB41qqskRLmm9ZAm",
  "key31": "5ar2EoqVu8j9cXPQKyptwNBJrFWLQKdetG6RxTa33btwyRSHvwQriXsWUctxsse1h1FkoKjGYmRQ2NxGqmBcmRq5",
  "key32": "ao3ntLF7MR1Z3fmcSJUJBfF2GoT7QHPLZFnqVREhy6wyRMoUQ4wzEAS6YJ235kd9fJ8zgfWf12BYwkKDiQFNkSW",
  "key33": "3n1aJZ5DPnKUq8ArRoQ1jpZWNVExjaXyf4Fa5fjZzLA4Rvstcc2a19xDRREALQt6dUHmsYUzyuxPqfk2BbCJ4BY8",
  "key34": "4g8oKZff7YvroWWSQm3TCdy7oCCd5FF5mGwRTM1EvbFQfZVdi1sCFYdT8RRib7REGuHW9iTvdjNAatN724FXVeBF",
  "key35": "pFoQjHmnpSKAY41HYquCaXhMXHmMZDaZch7yN59ggq1jCaJypajY54LZtZ3wE8Koy9scndDsVrBk3uFE3hNRfL7",
  "key36": "AFXovb1RT1TZYqW2PNEJEdj7s1BgFV7YcEwHd3it1qFYaYN4Q7zzNrugcd2eABXzTmY8ktwinzQHZUoEhwerhLx",
  "key37": "35rzCnLQyVzNeGELvfWUTqsC4q3qeWkRta5eQ86MnBQjzqwy7pXCnZ25g8TNeoFna5SaTexBq9Q9qffpZn3rYv8q"
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
