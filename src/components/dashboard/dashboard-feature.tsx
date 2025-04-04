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
    "5bfPwaMM7XzYaHCpxyMnEknSvCVSXbbwKUuv14cyRANbcUUwyhGQafnZeCZjFLeu1z4x6JR4e6f8hw1RkdEcKR5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gVNW8HZK99xbDyzkuw1EQdt6wnuxm76g6qrENrtA974B7ZQ7ydwp1oKuxywKxYYYgbrbrSNYtviRnbdBT3xBDDq",
  "key1": "47585vKPfRUanvuwvy7soP41DQCQcYu6LEAbinBcrkKTmeTYPhwqqohy2ybvxcZje3NqADnVpgdjQCc2GPZQ5fSq",
  "key2": "bwKhfE9Zqk2JHiQxvPRhc8tP1rYBXgh26VE51U3EmQWV2PN6mcXebXRJWtEobvVDBLuBAJZPaZAqQG1uXPHE7io",
  "key3": "3h7qj1K4Xx4e7JpArE9NP2LL8VSFeyrtu6SJBq5RMPuYNPirDpHYRwogMmdJ1SZ1DXr3RT6KKUKGVvVtrP7YJ12G",
  "key4": "29gbdQ1rFnrXMusAoxWhd22kCxE6UGMvJYruVDp3dqmYM5dMLyNNrDfQN4dKe4tip48kGzUFz1XSjPYW9c5W3S4x",
  "key5": "3QiYJERW1eS2JMkfC1uN813mnZjm6Rx41bxYVWS2R16Vxi8YPZL4kkzTRXuYLqMAUhqQXgD9QdfJVWdRbWME458h",
  "key6": "Dd7QeKvVnBPy3XpAXyvEapQySbUHA4vyRBeduTkktgBy8GocnMMSaNjM3swZB9zJuTH7X6t1SNsXQwKeAV1H1Fe",
  "key7": "59C8peVRn2tsaVz6sKC2BQCPFx7KyMRv4tQuTCH3ULpJfo9fWqv3PmeNHjRCm7xeH7T8iHhUoMMQhopzELpM98no",
  "key8": "2pwsnurpjYM74tS9k1wZBBLid6fHQk1FkCUFBsTC3pMt3XFsmXsL5YDG6vgk4sJDo6MtKv858YudyvEtCW276659",
  "key9": "5VAK1hgZAehrrshSshkCi3unomqnpQuCiJcF2oGAvvdCz93wU4fQxChDp9tUtwpMq7DUbWrgjsbutZaGQLrTzHd6",
  "key10": "37f1WCN2uj4t4C2Lkr1azEZ731Pj6HMU3NMEqehxATfML3XsQSgxWjyYgP7wvNEyint2JQpqAyYw2dif7r2KzZ8v",
  "key11": "4vZKEh7mmbMLR6s3sDtCZnSacfoZivJUDG1VtVzJyFMuvu59dmvLnALSVdonTEqZ9WX3ZzUV4Bab5U62xCMTKxhY",
  "key12": "2ApSTySsBc7eNqW6zxpaxozpPjFJnh55zRiJijpUgby77Vt5LiwErA9uFyCtaH9by8wXeAqsH6Z1iEWBqiSWqyAi",
  "key13": "5uQwJCCmr92UyN4UN1wA4DmQpfrKPFM5dHkT29861bHqqWZdYGDJQaVZvwMLkxqz5FXChRuDHgoggSCmaB9vjNV2",
  "key14": "DpV7Tacdi95uxj9qPNfAd9VQofycUgJbupj6CLmU9kksYMsAwefJedLPZSyVsT1Zdn9GCifftQYa5xAGhX9y5JX",
  "key15": "2cQM54NBwXAsdwYJcnG9XvKhJ3tj3LeVdfb3ta37aynx1yKvH8XHgDJqDden57t35622qd4YtMiF1LaTvnMGiTXi",
  "key16": "2Re6bmdeJ42cFNjpz7BExsmGfh2x26BpoUAihVdoJfxgWRE3XviCFSUUUwtcz3FzipaSgEKSjXD3jSkMcAVxBiS",
  "key17": "51KNS4g4HzcVGL4zsUgn7cbCs4WUJdW7mCDSXaz5gQXZKuixdMV8JXnUDJXXgyuiUbDWd1mvc9BVBu6KdyuKRpc1",
  "key18": "64W4oYDyhPhy2tKFEwfx4r8T7eRh1ad6ZeqzybqSZQZfq8z8zie4UidmsQbYsPDCckAXhVrfUmXbi51PuXU4Cp81",
  "key19": "3ECYfMsBVYMd5UyREMFMMdgTLeiBmTWfnQ7V6UYA4t1EG4P6JhXTzhSQ7cvQhUEDQoF7Y5PPmDr9QvMmhAXNZTe6",
  "key20": "4M2PgxZvXQJZLKzPAgonncc1N1vRCn7RxFxF6F2ikYaFK4gNAhQwFZb9vJsQKrsBH6376pQoftGD8asXA6LSPnm1",
  "key21": "3bybp9hV4FfqegBy56sBgADWguKUQHbgGJK3SvhCnyRm9rPGCgTv55jtnLEB8o6Uk7iMcsVDvvRdGbCcYMfqA6uY",
  "key22": "2VyLaBHd3q91xVtFZs9yDmGaZnv9qH37BXHG4sZnGxPTSmiu7gZgWxiMR5BZBzaWMjT8YGqd5D8j3Ude42vNLwyK",
  "key23": "36rXN5cE4kmv9JDD6oVjsP9F61NSjo9jZrH6pbEDfFoeuhqfmUpVFDBviXd8f7BaWFsZVnpiTxsCvLzqy2xiD9uY",
  "key24": "3Ae7g1DUpeUkCR7cUCbT2Zn8VcB7MNb933NVib3aQfphx5SdnyVZ5u42784HhFRyFGMP1Fqsfun2o6zRmgcBreRN",
  "key25": "2cdv9nA6LW5Qjnvivaxapwoapri1wi9RFf2kPfpCptav2CPnw19o6pEn58sb9BgEYXKQfhZVDK9uzTJfpiY3r9E1",
  "key26": "3hC5dQNdq2ELVQn3APebXA5UYvvzFUT3aV1qe21dHinV1nby15RyrdK7yeFu3hEoGaZiesuKQKWuAhcrecH8gvhW",
  "key27": "41NrmY9fKa9h6p51uS1GSHMfJAirGRJRBa8587Uft54QZkSQViwHUTHiH2HCKEyUEHCwSuekTZDB1Vgp7vprPrym",
  "key28": "pdbRoNkx5wryUzrYBPXBeG1FAkm6FmY1vxHvtK3a6DzSzHknb2NuAfXacAWyDaiLGwhojezVktGMQDsgsvqu8LL",
  "key29": "5Mzua7oQ9vmzvcTrrVN9t7Szefg8M1hWhsne8qQ4BCHpsTVM865FCgZkZdjW6vN4sDJuznW5x1n7ewDAjjH1KXkf",
  "key30": "4ZZEAurSF7ZjBKeBgBBXxfWmSPPp44NUhd58TDeqD8HC8E2U9mpVmmCHifJFCpVNMNNnCXJhL6eysHbb9MndTBkP",
  "key31": "2MnzAY3XcF8aeUaWNe4PuSXqT71MzAKMoFgdMue4ZVW71bzKPupbDVsDoiV6t5QvSPBJbirKMep2yas11Y1ApZJG",
  "key32": "53h5AfCG4vEY6zsX77PDFaJh86BCYSPytuEVQD2ZyNGxaV8b7ja638PffmNWKTQgJs3vWJgzDggVx4MYkiXiYb5W",
  "key33": "GsVmub2bHhSev57oxz7EGx1RPwhuzeeJVw4V1drYfaJRWMmoirWqrCxX4ZfS5pxBGtSjAsjnRGyJWF4abnt3vU4",
  "key34": "Xe9KtSamw7RnBmuJjnenRvAqnG3JZF6kPmVotgpzTV85e9i3gcLJ4kvNTGNsPkuq9rJc4Q3t8qGVJH75eSg79eB",
  "key35": "3oosUDChTQ5ciXKA6r9ZEALABbEkLai6fXFH1SbnR86SLvEfjjCddMeoJpSS8CCfqKRFKmWP2Ghkek4Y5o7TcE11",
  "key36": "4Pdgz4NygPK9xj2o3TSsbzt5PecphrDR4AJ92uuQTxL1YE8WBKw1W9pKRxXkU8QSHBUTknryiTAQpALgnQxGtttX",
  "key37": "4dJRPoVRs3ict2iDh1cjXuHKWAMdjqN28uuuUBpYD5ARBdqkJWD5MmhoNzz3AHZJNQ1wTLT4r8P2UxhLirFSkvKs",
  "key38": "5GM1VDqkouL5gr3etSdWFoF7SDBUKVxUuqkV5HbfmzP4HrTBwvuYMev7h82mLggqE6Tuw69ijXSK2Ws5tpisSQty"
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
