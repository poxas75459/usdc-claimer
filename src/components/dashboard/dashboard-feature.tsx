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
    "ddeJaU9Uw268JNitD9FzFRbfvdAPKyRTV36pU3AmmWK7n9c7AHhvefSafR4SSYX3D2jygQ3AiLD5FTm4oGQ2vbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K2gVddeUmLirLTPzpo6EhYt4ymbcMkRXRTjk3gWfs61iKXDJtZ5rii5pr3UQTA5D61H5GsjnPhsxBJd48W8HKq8",
  "key1": "2hJfGzT8nt9NjdEdTQ9EdwHwYyGomYfoiUParxHUtf9VupHUxStKHdPaKsdYEDCcxA9pPEsT2J5htzUy8rLCmQBw",
  "key2": "63KR1uWhyrv4gzyvHT8mGYuWBuHh2bh3RpGpkhQvoeRep1G5XiAsyu6sbH96XYwWNDHaN8Vc9M7BBuwnpQqZzi7Y",
  "key3": "3MPXLnTcxtMP5jGPCKZwbDhqyKPifrwTA8J7tYGbYhEofUBn1jb6Se7kWjzgXEzH77zvJjbN5kotTr5yHhyCr2Pc",
  "key4": "59nqDERHEVavPV48MoQA3YBiSNfCZ3bXczpfkNp61CM3P9mSLBQydtcVy7agTDTyLZ9zSvgA96Vqe8n3QrXYXAZo",
  "key5": "DEhNWRyEvE2Y1RWoM3r6HhEmeYWyCEJntpTkFoeaJKb7qv8W7b4UiUe87pmuB8oQ1EdNAHBM2FcxfBXLRtngcgg",
  "key6": "4vdUnEqssTLN5A34v2VZXcnV4y4yFVuebwyEU9uM7DUh9xdrnbWSaxLguY9tshJcW9RRhGtoq5eBR7E29PFZXLoz",
  "key7": "3Uq38zT7p1aJE3eskXEcWmFC2oDGaYJxS8M2uzsNpqcvutQJiyMK8Dc2WME7wSroeCC5DZLnSUQEeYda3xs1nBPv",
  "key8": "2JENv3jVa5SMD7nJ7sjsxLctcLJQPkcDvZNxb3G6iw8DwttBsdZWwaGMtPJJfzJJPZ2WJD46rGtiM9xbntRosa5D",
  "key9": "zsQsLi3jfgWcqbt55arKXrnbPYxttHsHSLEhr8TTrKeJpYeKyysP3UN2btjCS98QsE7vwJANLXpDoZjqcFEGJvt",
  "key10": "3cBfrtw7tpLqoxveyqVppsQdpY8BBsDc5HFUio3QyXEJuVVuzT9CHgJbxfERNDcSDJxK2EcpnRxMSstLCSEUKX8P",
  "key11": "2ojd2YctyebcHjzDhi4zkyYAcniPk73JgricERxpL9Exfd2h3zc3gKfTcubrmtU4ocySoubytc5uED26b7d6H6UQ",
  "key12": "5wxp48q4R5sWDUk9fSyaVVCgBc5EfMA2KeFnFWgD2TtNLRKbudJqzVfKeX33U85QSvt623qfcQNsQoyYXdB37ewa",
  "key13": "5o12CRZgBEALEr6TyX5zM6JAEPqqpF3oQd6r2mpzVtmftppNhhpnwUjN9zzEzxCfj78o64KyXCWrVKY8UV9i4CGC",
  "key14": "4eXuTpHADguEmrJv1a17PaAYm25PY4mkycFtFY83xBVDUMfefjk5R7LuQsNen139uAf4dFBvJLPB3KTij4S9rdHo",
  "key15": "3gLY4Wq7Px5nMrtabNjgok3BfMnixp645swhmTXwG8FU3kG6w11KP24bs4ohsqEJ1FrLjXQPu2aS6G7xLUho3Gwt",
  "key16": "44xL3zMs6JPDdea2xeGym4YYJApDDWYjc9X29a2HHj9UQRz9ktbVabTHyuvoLQYpPL6GdMx4HJyPmXouEiQy2PFy",
  "key17": "2WzLGh2pbt5PuN56WLGG5uK81FLyV1nvDkuMHcwTb9NRRaHzgCdCH4RBKZviVYuwDaDv2ZpPnKGBtKidRc1hvrRr",
  "key18": "3JDzvqDosBpet9gBg1b5Ye94Y9RntaEtxoN14QMW62LdAXeMna1oEXmfpnNNc2ugMTJLJpdBZdx6EUq8ULcBreM3",
  "key19": "2KN6DFrtLBpEtupiRZ7kk3HLuatPDBDDGrkpo3jcbfB7k27KEDbiwUc2F24HaGRA5H98cvfzFFyHuis1wij3hLUn",
  "key20": "4rDoqWDmx8doKMNuDMV8NgFhGdmasoWBXvRWyBEyDTkF1g7qcngTTDiKk9m7t5KsvPsfRtCgFRfmZTMQw4z2f9E3",
  "key21": "2BtRykLwbuPMffE2BMExHrDmJAbD8nLgkShGc8T35tWsxSKvaYQwNPnbxwk1LQmpbdiHMpht1sjKuBaeuotaRzes",
  "key22": "aTB7nTEFuiEdjtAyJPHndSbhj27q868dGGY6C7qbEwLYMSVccYRvpczFReCjhtRED1k3dFGkZaFyA18GLEr1pY1",
  "key23": "4PMz6htDYxxcEH94yw24HciaJQVGkQFcRUYrFhRVKkkmVQ3JdRBaHkWW574hbF3aUggT86inTPcMsL4MMhNrna11",
  "key24": "5SzcAjd4CmPfXJCSBH9xcZuLxjXTX7f6aqZhtLi5GwYTJkme7v5f6u33VohZKDHy1hDxCnuSozDEGvhPkQzmecc8",
  "key25": "5zsGQvFZcfxqFpMRNZ3MZNL2z63JnaHpHhJHAQgJN6heBJqF7VBaj8bvgocPrVTi2zDM5hRBJoiwCYUEAx1HvoPD",
  "key26": "4xEAH5tkKREbCzDFBRotZc9JZuibYwjoAcHVgQWEJrpuGjnEykFmqP152F9cmLnFesrgfRaRi8kk39QE221ZKN3d",
  "key27": "fVY5GY5V7nE4MroXa3EPu3fDDFgyq8aC5QdZj8krJ68YmQY7G84AFgBAn4hnM2YVbGzPNJrmUXaU8J26zmhtzQX",
  "key28": "jEkaQjoSMfoRYKhKtMTfemfYsV6cibcRvPHjwPfPb1SNt9vPf6nktKUeC855bauCer4eVhk3uGS3tXA8WFSnJ4D",
  "key29": "3gh4FQ2qMzF19KUyNCPZNgvsFfs4EK8ar9bE1HtWRv7eKU5w3hbAvbZWePrzMsf1ERonoipDLieHmyYvVZ4yKMn7",
  "key30": "3r3xyp51QVjNeC17HbZ7ajTbASLvut5wQW1hGFAwhTGwCxsab1nYYzgqouQC4miQmokPuKAUhuxVy12Q1iUhfk59",
  "key31": "5K3hhKrLWxXm78S3zvfHAizcMUVJD4vyzhnj99JzRQPWx54nCdppu1giUw1oPsDHxzNmSu5HaMCcRMGDMcESfTQ9",
  "key32": "Vupf5Bb5sar5ybMQeK4VpWhEooM6SscqFcoqaJ9kcqgpCDfmfCRNEvbbp9MGf6CMpC3woZ1W1dTH95QRdVrZ9bT",
  "key33": "2YrbmgFvQjMBidXQZgG5ZiEojDK2LTnigdqei45rNZUt9cBJkU86uJykwJjo5KTjBpo4ABzA82s9cU7XWapBf8u2",
  "key34": "4oiKeHd6m4NwT5GNuKWB9frv9ZsoTR1gmHybjRbMR4DtYr7dFbjkyXb329oXFDsQsooLeT3JXXMKMjiWBdP7s53L",
  "key35": "vcszM8obzyxYGsuWn3oYTqMovAninJ6U3BiqNKwVrAAnsP3wMTsRxejk216cfNyy4eDWNxjshmfP2Ld15tyX8fw",
  "key36": "3vGKXwZpDCSCWYTVSvvUvkCWCyWAzcEgyuhuhnrWFtaM983VRcGMnxq3VdgBpEgQhGNxYKqY7rP6Df9cmyX6nCcv"
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
