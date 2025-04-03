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
    "3QE8iequpCUmRti7GU7KZ3WG7JyoBzQriuQAwHPLPz17LMbu9VBgBuo2DNxZi6PR3MKWrbSgK5SoUsXg6KxAQ7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pZuLyJs57qkT14YFD8ovSg1RyEyDbq1V6rHtYvLysrxkbbYAVowD2sggFeZmhmN936LL8fHJEyqCaJ2ocvSU8EK",
  "key1": "2cxFQHUwvHM9D3KBMAdz2D4sMXEMB4fMiJK1zTYG1YA6eZand34d286ubvSKkFTLxuMmTMayvYWbLfknX3JFJxjN",
  "key2": "5VsY9MfTccnfV8tKzeDGeQ8HtGamej4eFTogvLojacc2kaVQVKYzCyQHBpb4qigRZ8d7gadh9pTwUDt6UE13pYyj",
  "key3": "2tQBBx18M5HUBdwtQ424Duip1nVpB6Eq4z7qbB2mFu6wSa18T7ynP3L3VqKFEZV3f2D2GEfFe6V92donPHAkmuyp",
  "key4": "58h9dR2TzA3wZw6kQNwGynuixTtmVFT3YDWhbU7mEDiBpUDRLTTDuevrBU2284MQarXMxbZ5QcCzXubebRm8jTvP",
  "key5": "4hoS5JA9JMXMm7NPessFgRh4cx1xHMz6R2mhafuaUQM89PqHtao3ezkqmkMWfCD2jqjffTAMtLp8UJGC7vV4mTKo",
  "key6": "CXSwxC6uV9TK1kmcYqubi9oxrhLAAfwkruk94xsw3WmAHwZ7dDvkhMEgvwWCvW3PfoMR2a4yU6n3ir4jPzDPHZ5",
  "key7": "3j2EXzfVT5vPviJYJWoLWoWobeSQiDyUm9Ejq1nCoaFAVsT84n3UF2xfaPmZGTDweUmsQVvDnEUmU41RTmb8KXZm",
  "key8": "2ypLjD95FxKf1z8t8znaqiyYuT9QeZDe8xUc4XMKGzDD18kqzX8niSgJMvaFWxtkpVLqM9GSpkHp2UKkxYauwffa",
  "key9": "32Ky8ZgEFmC8TSq1Uoe1UteFmiFgbcUJRuaDpq1FftrPx2mzkahDqE7cPEdPsjhuiPZvaQBqTG2tzBrSLCz2yAaB",
  "key10": "5uLNZee3CioietwMNZbw9i3qcTBWbwctz6hGxVK7fLaLD4bLL42njL8aAUmZvyeg7wqYnEmJ2nPgons4JtQrff3D",
  "key11": "5oLtow5rR1ThJDRvm2yoiaQyiCbJG7P6XcB6ZjSpTgatsiWLtug6EozBNpyQeRcCo6rCab6M2qqVf1hrWWfQ4wqn",
  "key12": "A7SfR5YG8hXkrv5ZJuToNQtjiCNzgp2jyjvu6r3dvTWGtCm6hjJf18xuswEUQQco2pdxp439iPK1kfXvx29Wc7C",
  "key13": "2gY1jHLnRn5xWbbC95ZHJUini3PvUY57bZVuQPjPzRvQdBt5peepNDXUdCs2evtJdWScD7qfes4bx9iPAtdisFsW",
  "key14": "53FCLrfqSoCLJKYAU7uWhNpyWJ6huLEfbrKxq69Pw3VjR7LQKTm9PKR83u2xi3mtPQdFnVP3uwwj32N3GjsVrAt2",
  "key15": "Dqsfkgsd3m5h4QyVMMcbYbRKnvyKvrANxkeohgCdcJ63Vxh8CLKVeV4LLW7SisMJxXnDkJrhzN4NSHx5oQgjYte",
  "key16": "4iXpjMGHTSK3qrBK1nLGiSH5hnVG5tVFpPxSGoKS2aieaFNiK27fqaJUxgy7Mi261SVJtsyeL9eSBnsgGvghzCWv",
  "key17": "W4WRcBLZx5t8MUNJaCYyDYXKgEubhFsQ2TdBLpFqXod3CHeWq7o39hRaKreBojfduL5pM2LJyTfYSDuKcDqwTtw",
  "key18": "4NW1RxZzPW5yr3q1R9ohzb1AT62eLmifhcUdABzvQa4jUUTs62ExeZ8yC7BWBdyv6bT8bqXrN1tJsQM4YagPz2Mq",
  "key19": "E3C2UCSy1rczzvLMPFPZXajUHhEwcvdv38XEdZGXgPLvYEhwgr5nEyrdd3MLy7j4eMNrUNCruw8XMHKv1Eok1ic",
  "key20": "5dPg7PBvkffZAeokNBh86CjUzcgkkGZpSZmb9PAQK9MsQdsTSSR41gRYjMVp9HpsRoVuDasM5XWMKfuXp7kLfGMj",
  "key21": "4K99nRNJ4fzEG8sf4aCrppbkWxMTXgcvvTrb1QQMGy8seMkFU82x7pi1ubws446M35xL1ZvzSxqzYjjevZaBJKbp",
  "key22": "4igWuNtz5k2EMsUFXDhTXE1yUVUMDs1tes9VXPTRCSV9fUn6Sn3D4oYnrHtgRf1pwUidxsfpkfYd6taXK6Ai2UeR",
  "key23": "3kSg8SgRpb5KLibJyFYNBVfbTekydJzPNdP4Z5NSZK7FC4akapFGZU6AzRiVbHyjUnqnRu6R5HAERqF5CpQfbNAA",
  "key24": "27LTKSfBxywz5Xwi1joP2o3DpgbA9foifi1hNFK1Wq3zsM5m6Wzdi1H5VVSLp4i3ncWXiMuH9aAkmw7SzvjzL3pp",
  "key25": "3ebUhazEU4ji5xtHBJuW3SWoCGVqF428PoEKqyh32qoL97Gunuk598BhVRysrQbc5KPWTum4uwD136geszZAsNR5",
  "key26": "5uofmqdMNyJi1RpaX66tqsxiKKDAJvPJ5swUx9mJRMgiXTgrdGtakoutdsCusi2zVE7oWU6rv3mK1Hr3jBCgMmno",
  "key27": "5BrUmVLKzosdbgZjRt2eVUK6UBnXezjagRfxBn7CLtaWdnFBAr6oChRxir3JLHeDvjrJVdFWTCniPRuHUwSv3qY6",
  "key28": "21YdeC3bZAiPVoccKXpMGPEhsn5sEKyRcgqyRLgU8vu7mwFmdvnRosCVyA2po4wCSMUBTWTVC6xaLEoATWrvyEbR",
  "key29": "2Sm4tuLxPyZJNNqiZmR5pTWG38cYasM9RLomE8AtPCteKYguofeGjfJwC2Ev1bPk7KXoMh7ouDA5xGpiEZw3nXng",
  "key30": "BaGrNx91FrmKfzmS4sqzPBXx6abXe4jgyLyrX2jjaq5LPgfPXwPiXWJCWGEfEenNXyeYgMoB6oDfby8M5CbHKEi",
  "key31": "5ERCr6s5i3NWui4r5p3XTScQKqYmkRBQrXjqSezARhD1CKRD48Si2DGrQfSTZ54myfssUDs1yHCw3yg8gXAqCL9M"
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
