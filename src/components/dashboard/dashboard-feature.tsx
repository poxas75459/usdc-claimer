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
    "63TG3wK5FYVPCx5gmRZdnvLtWcSbu2Uo6mymqGs3QabNf5UQ38NuTZ2zyyPHXxTmKSWATpfLaNpjf1BSy23vSa11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uh54iReprwcQcpCK2XQgUZCHCBnsa5XFa7vmPTq6FrCsaDPjzmmLcA4MUuQDHpSnTCrycDf5SAP9RC6rqniKhct",
  "key1": "4UHgRANFqBzoxP9rWDx5i1xny78AH44zgassyjrS5vic4VcNUyqt1Hb2iE4nijqRPhMz5Ch296HSaefNtFhExk4m",
  "key2": "3PzSWtqxssL3SD9DibTmDsPW38odDjPQpQzSvQDgqjgX13ymWq9wNbym1GHseBcencRXuDNa8dU7bSe19Y1xywz2",
  "key3": "TV9kJYhHKPSyetTh3nekSJs1paeC3urSpTEGmR6MgD4TNiXDr7NbFj5ECyQXP9aUNwMdYrwWMSxAzsNm6rS5VKC",
  "key4": "4oPHkQtrR5vX6arXup9MbKHyCyZDHJ5DEkbDKRHJWeMtXD4yJxiaKssDS1D599u1rc27d7nFzhhEuDAdxJU217LV",
  "key5": "4oJpJEDMXpcnhuvtjph3Tz1Wa4F9pLL5aEXHJL8exgGs49tpFtAfjF2pEV6vUozsJNJxoHaSLdDUwT3QWCt2qKVG",
  "key6": "5TW2vjQnd1gbdXvjuTTkPq6rRbeenjKZmvHukrWzHMC7vwWvTnGYqLP1rZpaCw4X2MKkaQoe2kvTTyThrYTh3rYs",
  "key7": "CZtbPHkxXcv8eMQMrLwBeWFFtHynynwbUd1jtnDJLYAxa16s5ZQk8mCVbpuH2RTAG4DBZWfZziZkHRaU7bnVArD",
  "key8": "38UeHkBGoVQmNp1EPQx8NSm13qTJbLnRUbXapkQYdydLK8itJ6VERsnSNCNtcSLUYFsAARLN3n9JcRe4Atcuccdg",
  "key9": "248CqFeSjbbU1xo3DZp8fXrzM8a8UuDLTFe5Unc5GrYWHjC7WCxjPxomAxmyKAsMuMbFqcD8j358Dy52mc4y5DtM",
  "key10": "VgQ8MU6HCAbJhqB4UBvMxzh4U5nrmKZRDmLFURt5M4NXKVAwAXsnL6ywPWSA19zjVoBxnNLAoxiGTJK1ekd6uas",
  "key11": "2drFs9CBjAKsfLFJ9VJUiCWRFHxQesLLS7vuDgnL5iNYutcv4Kyi4FiDVuiSNTYHjg2ETCUyJGPNK9eamVQrEL8X",
  "key12": "3MFokvU9AEcooUarkDFvDhQCFh6L4RYeZoGEM1RP83PBzAvZ9Ma2mrBSzXNVQvhVhZqqgaoxhkgQ8DjwXn1ryNUC",
  "key13": "4uAHMsL413xyahgaoU3sLbuy4AJzK9SH5Zb8DLVgR4k3gSdDL75CxCzAy8xTZbArHPYHju7ZyZHxLihjJZcR5ott",
  "key14": "61hP98Lmj8DwxFhiYbjQRpeCuZ2phXuWjNwhzeegoLmeLSzpNoJBZSZbMFhGy683MiGV2Ve3Ppzgz5BonWyAsgYi",
  "key15": "3kVE9A8gQdEhLNdmj9Vjtsbh1hKNDdWsSCz8Te32naN4gJ2o97QHdiExNJG8czapMdrrJHm64GmFZ2sdTshUm2to",
  "key16": "5PHtDD3HorNcdTktj4UKrWJvqki8vAeqXmJYPZLBaD4CStK6zcRBjtGV5McQC2FkxxKPkzHtwFXEja8TAPJPrvLN",
  "key17": "2KKJQJmgyfkJbHovEb4TK1vXBYVrpcVwixocfTpejFQy3JWCRPChxbpNeSQVrfg1TyqAZ3HCgprZfe5NM5kJLLqA",
  "key18": "5dqyJsH9MkBJfLsM8RUUEQGYNhS5Z3i6pJqVYjzYmQGkt4PuG3J8oZ4ChYdXKMgnrDdKzREwwCUgiLRwYTwr52Bn",
  "key19": "5tNZwAnKU9Jet6yF8SNjUz7tvbk9sjkhjzKU9hpW9fDkTxF7ppa4eqjTxW9MijpX75K9GnkikVGXx23iKfYKXHmW",
  "key20": "5SBtxfi9XRCeCi4drD5RR3iWfGiTVdwrLAfxMHUvEL7W74QjeL239GNNp2qHaceHN9XCdd7R9aWaNrD5Y7mq5yjN",
  "key21": "3RwNEHD5BFvvBJLSsAwUPi5pfocDmRZVNwgTMhBfaPYE8ESvirwPpmaygPnXvmyt6ACLVbVJvHc5XAz3yFj9yHLn",
  "key22": "sGHYetX668pTu85RMq7wu9KhVesVidVNju6jufduEWMcc6k3Svqht1cKiEPGbJjRH5jxryYzMrMRPEudDaQcdF5",
  "key23": "4HWkbLeAyMFWV2BrEvf7aaSroUK3GJJsEtpxfK7326YGZwC7iMQjf5LWfUzr3Anw7yRP3yitFrmMgNDTNbckdS9n",
  "key24": "634X7yBeuybdsAtR9q6MWgeQPtmq9roQFo5BrUhNcXzyHg1mwgiDtMHuHyn4WapG1rMEkVe6Cgy7wgoBW3HXEDqN",
  "key25": "4ngLne2rKB7wC6zsUksqAArNSahnD7Xqtm8uEP9z9Cp1yaeTo9FwPmZ2wwzgyhca3W2Kfxc4x3CRN58enydmCPkA",
  "key26": "3s5dZjLi69XFrFzAA3QtKAry66GUA3z5jz5JBYNsQTPAZSMDio5gkn6z1W7GASxzvPcGZwTU47291yfPczwA3NhK",
  "key27": "4SjJ1NG9KPeQd1ayHQpWsqPovuoWdAVFrXWo2L588bpftm739NdMRxnyURfHQxNMovSVHu1BeC4cd3uWGVSaMXqy",
  "key28": "5abDVtHQnKHJUWzTN4d4GBi3g7HgSP3bVAiWV5PCan3QAsvK4GhQ2XySipdvafh4sgzSHYG4LDDvN4LQJaaLBxDY"
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
