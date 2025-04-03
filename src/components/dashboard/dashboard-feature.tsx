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
    "4ftL4iD2tHuSSJrT2wwaELYAGbjm9BGTSka4KuNhsmczFQaDKFvXxC1JQA7d7ezcgPt4Xm1uPxkxkHMAbmaJ48jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SnFdsb4gDY5REv6majdqzHTNWu5abSFTQMxSneGvzcL3XVZHp35gjGFAgBwyt8xjZbH6C71M7696As2CNDi3WkL",
  "key1": "54thPUNGkx9hQeAnkMf79ir3L8y6BB9yub8DGd8DFiWBZwoYzEjN8WLjEydwDNTr1VX725f1S42Cd3wMcP3to8yQ",
  "key2": "icncpBHXpRFnEX1Zxvf1J1jF946nkdT475jMoiQPLAx3LqEf341eYPWvjxH8qwEsNgJwR2bkuazrFp7m6bPami8",
  "key3": "3im4hbKG2RPo1zJcjCbYL1nffHrDGYzd4Ythzynjiom5v3gvoefnk7MF1j8BPw4RUVFPHFnfhj9pphbFizQ64jjL",
  "key4": "2k4efPijWaaqt1Nr9iP91A6z99qPQRAUfk3RpQTdDcZT5zE3HWzn961kta2QT9jfUbSxgUW7dcWFmkq6YXpbgQwB",
  "key5": "67RKpwxGzBYYZ6fcmAqpfPycHj4MEjy1B8EvcgjknSWTNaX2tYm7FtpL96QaXGQtDjAU5doRbBsMM8iWeKBQ4spr",
  "key6": "21KGn7UnaWqNrwiyASuqRdFNhQGKxiAsefNMN9bew4ub9RRKUpYVjcKgp2JAos7anC5PndZtuSDhabDQtdjeCnmS",
  "key7": "2ht1F19TMTqpHGj8jwY3GfYhyngDdAoeoLRhXpR6o3KqejgbxMFLStSfZ9wLArbPGnJW52vQsDqMrMN1b5vVyAhN",
  "key8": "5en2NagupUh9XcfFSBvipzx799Ni79jYXGKqkAY5eWDtWRCQi3NbSuHxYES9MRxcZot8RRZkJmWCMvs4qrKfHofM",
  "key9": "2bjea1ym5zoLtTdnVTGW3WEP8q5EDaSuRto5j3gkQ1nWs7HTS41LNmXZE4e1VuYEX8XMmhtRgsqLBBifkQWbdGeL",
  "key10": "5hhFa1vhijMuWMmAnBXF3B8kCMEuChi9DRx9BzzE728m38DEH6jxPBGbUDHg55Yy48DsPyph5N4eFmsh8XnDAFP7",
  "key11": "yvE9sptxAmV5gcUGRaLPd9Sk63K9goE6jRS9TSNscapXH7CG38wo7VC9gH6UXseN78pAQA1YwtJMtrK9WM4carS",
  "key12": "3UVhUAFZd7V2myCwa98pYx2HDX3DwWaJY3Safzo6s28p6aszAcWTcYdN6FQ2HoUkWvWsS1m1gaBgz8Ds2rC3ESRB",
  "key13": "2gtZXpjbfy1fD9Hc3pHE7qaiTafEzkH3Zq3V48UJqcDxXWwBJ51y5pfVJutYepzVzXfwRoJXwvEpwZeGNdWAqyU",
  "key14": "2AMKtugnb6WDXH8gtZD7nahAUuxLmRBLkahiNrm6yeRh2F4reZJy7jgSbZHQFnHbTwRk29TPaUW7sQgzcRJwbPfV",
  "key15": "3JH7McwnWp75bR7W2QTREM12j2pWnjreDmor4Bzx9RHPCfRhwZRnaa2mfz2FtymAdTxES3L5vTU5pbnmWNpu4m7Z",
  "key16": "5nZkxQXGRZ8ggDZSh8hqTRVMQ4a4hkLCj2eTjibimfoWZQZZb57gdHa7aHesZNUhJFwB2pz2DGdqcWHYvy2x7Qea",
  "key17": "njKn5aGtu2jZzhqfkkLwTR8nxkKL1PEk1RTe3e9e8oVL31rU3dbTbM3JFYx7mK1QQwPFTC2F1kGQRxPjbb8f6x6",
  "key18": "41hY47npNdKaia8994mrLmkKBrMjJ6UKfGefRtci8ERfKNM8V3UX6kePrtjjkBoTVCiZLf7SUcd3mU9v7KvnKTui",
  "key19": "5WXahEHJzNjaBdnQPyer5LLm1796Mbbc73jqDEusVYT2Bs5RBW89fP8D77EmKScNJooNk1BKfsMGBJDpQojL294z",
  "key20": "21nTyQHbVqPW42EGKFS6xapvStLRmTgQ2FS2xvsb4V3ZF8mp4Rfw6Pqn1S6RECfMDoyTutbRjsLhRd6Z2ApvcDuS",
  "key21": "vyj1poQZYCEc2926Gq84LqGVDppkVhFaPVSnS75TpoSUGUDkfF9nB8veLWfVKksMDuJhkUo3yBtws94hyz7DH7j",
  "key22": "3QTWNdA6ysMddFyJJCn7RCVSioC2VmvBTs3idr8Wbuv1nKtoVPmXB9MAEbK4CiR8suKVJDiCtcEzL6pwUzUxF6eu",
  "key23": "2SVJY8Zgha9fjxorkvWqYYhSaTjEjLZ9zAs4JyVotCgZmtf7YprAow4ot7dDpN2eSK9CNHvTTW8qD2SztJe9UMPx",
  "key24": "2ZTipJnir5ESVRTq5tMgMYFcxHTUJsgyyqZxjfa3cdfCkTQLjfT7VT6tfzXSWDKUuaa3rgtjbUx7E2fFpqtQEtzH"
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
