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
    "25UrGBRTsq8qrDMvyGmhG6iWnKK7nNT3sBpP2KYaxxofzvZBotabKf5AnMEjJzrxQS8GRZVZzyekwUPvThaQp82B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rUSAuhbUATVC9ya42NFehVzt5YRp3ZJjLrJboNPaNqoyq4QFhLqgmWV7zydsukQMkHykGzAMbAk5C4CkcvAZTyP",
  "key1": "ViJqpopRSSLqgpg532xRGUebXUv2kvKsFAZWfQaJHL2woBqdT9SVUwodx4rSothXyQhqKb7pnpobGMjjJa1dGs2",
  "key2": "3tT3psWv1NW75euui3cxstmGTQPc6dL3n2kSguF8Wp8U3sbXfPaQUmWnEFaphyizxxM2qFyvz2V6o8W8yFYyRKXj",
  "key3": "5mwipx1WuyS1yJN1WYecGnyw14M4UDB3bzPCbn3kJ1MMmQEvGtytuJUEX2bAxPmsHTwXy76gqgo5TPaDFcN9hTwq",
  "key4": "e7oLUErW7LojxUc5c3dxGguiW6vKJnXMrQiF21233GQ6kAVzSqNKsHAa1f2JyyYCFPwRcGCHm92TBbJzQnEadNu",
  "key5": "43wp69uUtZ5T1XzEyuRafJ8HJq7Mn5xvcV4kmQ5SUEzDYGJf7PD6awya69MhSbriRamTEG56feEkVer8usGGsPgG",
  "key6": "64N1rxfwcn4tpH5pCEL8Gtbt6NKKRSVcnCbF6NsRZNzYWydTX9CzPyQ87FTaz2Gy9Bdmnvxp2CH2U4tQgokWUrGB",
  "key7": "NmTfXVFcZpwERgNCe2P31EKjCGEWfivAPm9tRhopmcFL8WsRGUAFLkgCfhMXzBDfca32Mwg58huBeq74tBtrkwM",
  "key8": "2ibB56Cz2Q7cbAa7PXsmxBJPpZmG7J24r8gjmFK4P5fZ7DAGg4PHeMfYHbV5Ng36bJStqchdL6ubaWYBCve11Sx4",
  "key9": "2f7v5pVfWS5oYCmUWokknJtPHTWK45XdfBBAQkptaWXHfkNvCVjxDugWg9hfsqZXNJtZcotEzZQcAYHr9gDpGPqb",
  "key10": "5NC8mM9CLedeeLqkC4GkLxdCdMEzUmc1M1FFCrSdh4BW7MQC99tmTEZJQgxjGLNMkhwKKWJj68tCQGWSRezChLAZ",
  "key11": "2WE2Ezt7VkWEP7owchLFkJa3Yk6mDET1tyajLj2pYKpdK3s3KeqNWG84Ce5dn5ENsziX9qxcRgSyGgqfdf5Ykmsm",
  "key12": "4ckGrmgakwCvpWsJ8mHUyt8mt3sDH1GAuiicXNg9QszeRHSHUhmfQ9Q7Q9J2RXAaZopppguNF9t2nvDzQht8d5pa",
  "key13": "2dPwd6FhooZwgVpoETeiUHHEcd8uFKaAwf8Ao5g9xVtQML69qp8vrmCCrmLVNvkPwHGHH2MEeyzDNLpuXibuhUZQ",
  "key14": "5YRzmFhm5ixAXc6ECk282KAw8drbmoFvxDpmYpgKhykKyFHdggF1jkHb1c1jaE1AkPNDGjFMoGuvAWtn5LWrZvJq",
  "key15": "3cazHAckktJxHYCT8YNBnciuUpaJH6DARwD9bbXMnaeq7MZEJSbWR6SYCaZer1HFugabjSt4q18yDCjyfttfXMfw",
  "key16": "2mvheTwe3tETjqrYcDkRRNDzV3x2hJJ2meYMRjmW4ZsLEWZoMdxyipmmXcUadducoD8RFyBT1iB5bWivnCw78dc1",
  "key17": "3YSCgHmnCdxJuqZACnn4GPNNEgnt6EBY6NErzAhsAZrt4aKUcY3ucRdvpQx84ZoSocEBLv9rmDcasRzqZ8gzFVxE",
  "key18": "3RHvnvfZAfJ3N46LkE7QGFbe9vsssvbesVJJRhtsJhfzEYJLGxMEU9Q9HMZh2inHYk4pKT9fARUayeCAuRN7fzmd",
  "key19": "2cxy9vvtkXabiyNmdDtB7rAdmj19zvjzeFntJvLaUPQsko3Kk3dKkbjiPZGDQAKWvVy6GDKoCjaoAnqwon8XL8xu",
  "key20": "5mG7wwLdHKCknXuFu1HwWeN1J16rt1mWLJuJZZQxbDaxhNoktgU7bdvXhVwU2YV8xWuwbt8s61gXhPBTQreG9afs",
  "key21": "3GJSMxqxQtqs6RPYBPgDko2Z7NPrP5NGe3bU8VRmtfLRMEYtiMVLvD1QwZFXSea8XCY5toptzDmEojLN2tcwGcaS",
  "key22": "5hfJMf4ACArnEwoGQGz1Q1rVSankGXZA5m5BQgpJrUcZkZ8YH2WBWAjGserB6xhvwSUwLQhAuDgWm8zfWXiGwM1",
  "key23": "22H4fjfJ1NqdRjH1ur3Bc7AJ7WmR8LeDqf6mTUsdXsLucpQxEZdc9dWmAB6TYS2PwqjFaiTEVSKGXeFeBXJvznQt",
  "key24": "5qXUbnuWZWGAgh3EHBFNhavgyJFJRtVGbbu9todbEUh7JJzS1xHFRGJQgJHj9Zi9BwMtYCW2rcTZBLtMXRHoGa7",
  "key25": "8xxpmVxVfhh2CsR2KDXgfhvgdVRxzxHVsUgjcd2PcdBqvSyKvy1ZXMK8s1FCRydjUhCY1XN6bAZQw7Hkpvp6tWs",
  "key26": "5unudFTYPjbwx3hhC3G5E7bfJT4eWNPt7XnW9u3EefsvNwN17xrHbEW9kJTe2S8DcCXtGpYyS53iEtmEUWDpPD6o",
  "key27": "4PNcBUBMiaWvfsTr6bSypqihupyiQNjUovEPAt6fKV2LbCN58Aw5Nysu17J9SHVDxN2tWiwYgXx5no8UWndXyn1G",
  "key28": "65ezdcY52Y4BKf9ixwyzYqxTKTBo37Ea6VHC5Z1tXqnKXbSaBDSE3xKAxZJyY9r85UjsFRT5ZfStBNuB5yTdVN7G",
  "key29": "5bpRssMeRJMGG1GMytBNbgKkp1HbwATnnwYCvDSo39T4LYQeh7nCbeHgzQ8DgpQviUDMsMYPjYEpYdekASUszAa8",
  "key30": "2gJsnT88d9JCYZvFC57RxD2QrK75VxwW5GqiqEMfcX94ojyJizkNW2R32tGb57XAbY4DmKVMkAap1qd31pWbqtFW",
  "key31": "2di8F7AH13unzYknviKxkUxYA8Sob2n5b9DF25j1bkSg8YVCmeX6BUmwcpqUNK2fHTYVv1HpPfPu4efjWBTkjbSQ",
  "key32": "3GWies3RkXhfGWZrr2Ze8RnJs1PE9V8nCBGF19YbxJcX1bF66Q8A1XycH14KGah21ZE8yvnGBD2zDQtvrV9QnPv5",
  "key33": "hmQvpWRLNSzfABrpn849STQnzoCjcQvjKNsLAC7VPofwSzxgms9Hm6x8p9X6w2r4GtBMjWGw4L9GaBKYR4gRbU7"
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
