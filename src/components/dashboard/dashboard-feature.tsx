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
    "2oVuz4wfXCLD5LSsQqSiNsf4ZfB72SWGCUaW8HzAp5CXN9s4hG7u6ao3V8d8GvRpsrAxRAfesm283JAPYTXwhh8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gsLZcp1KhgKsFCQiKkxinVbWkPgVtxe8Y54CLvqMY1z6e6RDQPPVcPXgQZyAqTASX66Unw9jowrN3iPQQuzkVbP",
  "key1": "52pKZnnLXNA8aQ4gApK6CZLpZv9VLgD4ihR533qJZ1422eUqvYtt8gt3RWsbj4R24JVRp3DhEtWrzsnKrKgXkAah",
  "key2": "4iALzSjWWTvMwBE4AG7YeuyKQfciB7rPKMKU98ghaf4V7gtXkcFViheLDQhRJLXscLwba6JP2CW1bvYQCrpcJYJc",
  "key3": "38MzkdqtZ7CUPocjdD4YRCHjCq1R2kRfDWsNUv8x6s6ncEtmXjf3DCipmmwFk5h5bLEa46vw6Dy1bonVa5mhs6TM",
  "key4": "3sKVvZYmDhTokkUDB4CYNRfME9TUELxpBg7g3CPShBqHVvpkB76zL6c7iWhtESjYf3xsH2pBWimmVgZj2oXyVB39",
  "key5": "3abD63MbwsWPvAHkgpv4KG3YozeXTwrto8gyRh2MNAuBsYf8WRnpqeDKaaFUwSLgKmXapBf6iHpBVjDWXDbAVU2t",
  "key6": "3GTCxro7ifC8nCykQawkHWW5ephy256U9zPv1p23eDxX3xEvyzF7VhkUBLvngMGxHWQSnDP6cbszUcQS1ocx9wZd",
  "key7": "rM3yLgUzx4U4rMtCsNdS1rTgNA7Z1nzba81TdN1cbJp6ZEZdUW2mxmuRXwRnn4uTKzfb6f2hYvagDfH6sfbsL6o",
  "key8": "4vx3RF7VuqfjygwBMjMpegPTUe9FyNMfXoSAXGZChaN6N6tezFJhPECffNRTAGAovaEayV4D4a5RQ8teYJFSjQ5F",
  "key9": "4vLLPFt7xvSBe33GHLL4DhMUsVCav3Rva3hNK5MAFqnMMkKRByLqjFbRGsQiSjWn1TD7EqBXALfYuYtdTDy63JDn",
  "key10": "3RFDw5GWRBzDHGJBidoaY4yL4mTxb1ricTd8wETpdmmDv1jgwiDYoVHTfVUSr7SjPkRdTS3caUvHqw6iLhNPW4i",
  "key11": "3dMQo2yTVmkKC1PjMjMbP5SXZpt2x48XUStvdpWAc94J69xiPWRSW36ZRDGAdPGTf5MVXgcYt4s8Wu8ccwYXsdoD",
  "key12": "HXXTomYcPNLF7TWwggZXurfyENL4AaihovwyhVWkGkzwWzto3bLVzrbwXbtMdTT3qskQ4qp96krniAdYNrnsxar",
  "key13": "3Draakpq9S1WCmKdgDS7fu3a5dn8uuf193BFcL2ryJERwteu4YALQp4nWNQvRPhhg89cSWEMkrnfR2iaCPzLeGyQ",
  "key14": "3hLeHaZ2DiRHFrLfxFCi81NT4j9R6DKrc8mdoiTu8xXKM3BsJuxyHYUHPzU1VvswQt4e2xE8yujvptT2JFb6WkH7",
  "key15": "4xGfsvoXvPRy9E3JcaSoyJts4pdXcSDppeT6y4VaybxDJ2fspkG2Pqwi9MBho6CBLmtKb1XE2TkQBpaSM1asJcux",
  "key16": "3X7qD9xTTPhzxpHRXv4ormRKJs9z9ELWfR3p6p79LPx4jEH59WGiccZa8QAxoRQGFwgufid7CZB5eaGrEUSZiSAA",
  "key17": "4nYTbUMF7vHVgL4s6CrRDdpbmUCbGvqq5aTU43G4J6pugAReMotyB7oHoAcboWWhALBAB5W72UonTCjYjPBSZiJg",
  "key18": "2EzfDPoAkr3n1FF7q1Auc8eiEZgXWqC77V3vkh2wo62J1uKBiWskJaagaNxfmcZi4CHKCfhi6FSASF47zjSV99wm",
  "key19": "4TSDN8431CYphm1jHg19BkbNEpXQVCEdgdomQrncjcCh33Dx7z2PEMPVgwkGPc7V3vT3e28kHQPqhKpNyc6kqqjn",
  "key20": "VtKYe2twTp7ukw8sAP4tyfkg4DWxP14d6t2FGAH413DsJySxsHoszbst6Rj3ahBXEcT7Zujsd8mAA7QYLm1JBqf",
  "key21": "ckM3UNNo6RMRMc1HmXHjFK1rgXKuAH1FjdXDGbPBmg76kEc1QYw8WAf88nwAZg1j4nmkWET3DrcNef78KxuH1DG",
  "key22": "2NGQ27fxNZqLvYaqkrC2VffqFK71Lrx8jz7EgozQJjLankh1bWFeXEPWj2633eskeYRzeSnvhD3sNkThNfeceLRi",
  "key23": "4FKQRBpXo4eJFf5eFRVCidSQCzBd3Rmf5AqGrjnf4My7Aftbxe7KzNgFKuTD9Po4V7fLMsQRxdKY5TgxisJdrRkj",
  "key24": "5ovDoMmf4ibJc4EVXmPSBpqpQuTFN2Bn1PHbG6bp3QfhiHqGgo4m6ZR9w3jo3tYJEsgRyhTZjhtrozgMyoKVgYta",
  "key25": "2PJpSeZcZBUtTrVAWGL5naSNqJxSoUcxCHs8QW3myScSJAK54i9ggHDtjXAFbiicKFB9nRzsFRXX9ZCEtE2qKQb3",
  "key26": "5DmnFkx5Dvp1nrPhqkBaE8tUCGmvzPxw59SycaNsmSnv3TyffJibQgwq1tWGNgLDgb85KQDdq7hf9PK8x6Jzx7Xy",
  "key27": "2k15gWYLMtD2tiQCtzJUrgyw8b2puq9veuQZjiVdcbeeTHhDk5MJgo3tJhW4SkyfL9qsoEcWdEvKkExeFtx3kyzm"
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
