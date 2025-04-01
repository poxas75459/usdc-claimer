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
    "2FkDeqBWkDJRxY4PKhDxK5W4eJuPCjNub7TwrmR68VmG349Y5mPFxNCthZbXQxnEBTcLQrDyAQUqzMbuzzfATDdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "262dbgRa3fFjMaTbN4U7pPbbZszyGzJvLd1poEnJBuVdSGcVgHpCcVoHB2Mk4WJULKU6WY5AKuX7sf9SeVG5H8CV",
  "key1": "5vCR5iVD5cn9GFwKMnzL7828gutHGfnHf5EKGYCMAHy8vK2RtKTNJb15fkGJdQha5Xdw76TBtTUnGooadukjvY2d",
  "key2": "2VjoCQUfuFWxpsB95LbVhTNCsbtjHJPX8By4VhtGDo1TBoJB38f1eKBMLhsLyzzmfmEJgrDeF2EF7CB2Jb2vFi2q",
  "key3": "CtsyWhqD4HFxLQHEJPpRLitpAH9C2PqmrhiYJ4CqaBniT7K34eMhsorz3jspRvenwCbDS9J4oFwWgPntxVwr9Aa",
  "key4": "4qVEPFTuC4im91eVVh3eMr6vWpw2w7MmEKz15Hzhm6vJyTeTsRaW7AaGrvNVFHzvMki1m9ZHu63bu3yRKBSJWAyy",
  "key5": "4gAxcaCtiLG4tRxQ74JgDeMmKJDC4pemq44HBVMdsXt34sVrTP9NRcj6oh1RUn38nSrwkGBxFAXM44rSjQohZrxK",
  "key6": "g9jPpxUs4o2aph1oAiBcAR5dsrw7i9HPoXXRG3JVtFjbRqpkHkd3djgEbSPTsEYc7TqhypqWhysVZpgAGSkKNCp",
  "key7": "BBuQRqUuEFZRkqEJ7c9VgTzPpSqYCfdJYbPtz731TwTpnTTCQCEpx1Rd4v1D72PNoeesdeqLLYNhMc7mopSsEws",
  "key8": "hXUPNQttsXGt2Fb9G5V8ESfSfHYtLr7aTyFekUFmzc1odcmsUXHzv1vHsrjT3CNmeyT2N1svytsijmcQzWtb7eS",
  "key9": "3UB4mVLNCtpHEcMSBvRKSZqiYnDTx6kkjr9kyRBCLFSnvMvaGmpKfNXLkpW9QdKD7ARpoaAD9ce99s83Gzdinpn4",
  "key10": "4WiQp7Fyg6e2hCiLZtScXUnzuh7p6A7thW8ZR373H5TJWx43i4tfk7PbVGbjhNqUisgvcB8F9CDRodx2qBKSV6V3",
  "key11": "5KQuwDqZKTEFWeuvptRsu7UP2qguuhuTK5HFXtTtr7XShNgfGKWMbhqHhyTWssxg1oaUdG4KsvtcnJHQL8o1tsjH",
  "key12": "25TGrajGErVCrw1xJ9BCRfzFuynfyZ9So9T5J1hbCC2QasThsHXHfBRenAtfgPJdV3XquJk75L3w5oUsygJScJFV",
  "key13": "33pCuLg9DRBNZubJnBVdwj1QEkk5VJXX8WgktvSnZ6yjsVknJS4FVD9SVR8RZKV1TFEV3pqguaJLP8UAf9vr8D9k",
  "key14": "3Mh7xf4b7RQsEHiVNXx3j5mJNxWptVRjCZiLJjH9uib1zoMqf3s6Sq9yo5yyMJu9G92LnjoDhfChqB1GYyFX4cJh",
  "key15": "2yzQszFgP6mHDAyijK2gHCF3GKexsQDkPKPsJvDkeFJ1GRQVcyPhNbL3KCxoYKgwXFcvjBGCWwWKbYs2aCvHFSrb",
  "key16": "2XkqKhfwQeyL2fBtCbzR6HetxEgH4skYioAkSG4ngnzwWS3eP9fpnSCQxVpM4eP4DZ8QwJ9MM2apVAYsnt3kVk4j",
  "key17": "4p91UMm3KBaCb2LPYZjvfoeLrtyuHvnK8JSgqWgdLx7rbfgx8XNy2uRUkwBkT7vM9gLGAMvEtivH7fDdfygW7Hij",
  "key18": "5VGyUecNBTuLySwxLBxFYRdxcx2cJzNRyMDMPCrSsEhnrFezBH6MkKC9mV33VmmwqCRnwrgh3aLH33HuPMYEtu4S",
  "key19": "4huK3nD9L2PoGXxeiLTG5aByfdszviUzwX1fY32f2dwjKhKfZhyyhx5JXGbqPgmEVYYoQzQ6yAequ3o7vFnG8Sw9",
  "key20": "22dEcbEp3pjmWLF5YbSPgSoLcfThkaMNyhgTeh2ATVTfoij1XxKojBLaMviSKhmGRv46aqamXBbEFhYhMwgxwSeH",
  "key21": "5bP7eSL2TZwB6VQh3nM8CP6CCyNYwBHdx7RVAVQY423F1T7T89E6k2VKLb42G32hfT7NvUf4fhk4P9YNXgTs1YgK",
  "key22": "ZExspmEDifxAjj7tZ8qn81aiRCRurP9pG9Nndizu5PttxSzuN3ou3hjsEjMHzYBFwyaA5qpiPWHpcXVbdAgAV5k",
  "key23": "3rZBUfkC2WNQE67kYEzMSVSigtUBwAgWed6ueWuiG8xxEZ1BMhHvdjJnFWjCcSzTfSTZtt2tkZKDZaXAVpWJW3Yq",
  "key24": "24Hqp4UFu4qiLNmqAjvUNypUszTWwmQLxU8ZzLtz3SbNGMtHZWvFKPgBvZD5rZyZoL8iSGbLD5jL9D19f6aZVXX2",
  "key25": "3x6UxocUHmmdEQ2FG2W8k1n4H6hnj5c5aWehcN55w7R4QBtxSB2UhkBtvnv7wgiG4faLgLz6MJfbyk8XMDMmZPk1",
  "key26": "cKsMUT75PkZZUHE6aYVhcdvzRaSyepNeEz2vivVPMB6EpPeZ7cMfwgEraoYmhUghz5RLBX47Pre6cbkoK8za9FU",
  "key27": "4daRgWfEnMP12AjwVy8brRELbCuLkzxXJScW1s26vcKppjMaHZ9bS8ZQa7zTXh9tNeKyVHLwShC7a9WpyZSr5Aph",
  "key28": "4Kii3F5p31NbGANVQyVjDUGDZ5Ufj3uVF4rDsf6ztcRSAVQiQYhyLycN9i4NVrrkEqRgNRCqMKFa2AxVqCwBLCDm",
  "key29": "5PcaZFaq4L5zTyPCder65pwMDJK5k23Xugra2p5ERPNQvH74ZjSqMKhodhtopsfjamp8Y5bWHpQuVpb6Kb1FBXbo",
  "key30": "QD29UfN2sWU2HVBTYo4poumjbdqfrMZA3W2xdeM27uhtaRrpuUzcYHLynbij57eu3mcyhayDGfXQ6Yw2sA8LUnR",
  "key31": "nVCTRM6EmbvCwtxhYkaSahjqiM5izF7C8ByriDSCG655xDwKT5sm64ovpUepPMp5uSz8WmA9s4hDjuL9RDFsFkT",
  "key32": "52GnshbwyAsPKbGPtSNtwMdqpRiAwmbhfY4tKn1qfMtpKVfVo1Gi1aoErffgWZx5NG2PdHj8QdXWEj9kbLGGKwrK",
  "key33": "cypXv9CZfWYKCRHAS7PEG17yLh79na1YnGcmnyfXxUfpZw3XbXkmStqUpAmxdQfhNZVKsJGXWXwsNMNY6wEhjD1",
  "key34": "UtobbF4pEFnBWPXaoG5X3YTTn4oyNJuHMu62e9tLXCCH2RH2mfJ53PnMt7sENKSchFMj2JjqtKKagoMy43XjPZg",
  "key35": "67UDaRYf1xgZx8Shpk7QjBGP4gQNfrTbcxVgVZbF2dHSQd6uSZHsKVonif48g7XLJkDzMWXEG2WZVHzFxnENKvm4",
  "key36": "2yYNzgcGrq5bNcTB37iGNBDnutS9Cv1H1PDbhfj8CrewW3mpuqbyvenjWPdHkefLYRxvSMVKviHNWaFqnzaPAoNC"
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
