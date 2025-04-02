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
    "2VQAaFG9pLA4GBEtRKdXC6RTskFHTywq4bErSbW4WMzWx1niS9NYX325fGwHgbnB481n7S7hGoggkA7LrmxUzx1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MHLDCuzaW6UBRaZCDFVAxZyHE6iuQA8mbPJHpwVtWNqoCPsTipcGMNeJLAZqrotCzzPnYYaCfekoAfgQsuxAmw9",
  "key1": "2Jp2bShfc3hK6cuReRDKnMB6TRTU9t615VeNFxRb1SypDjtAmBNSwU4FaGKCzFp9PvrEJrvy9D52cydwTkgWVGDY",
  "key2": "5tHJtpt8XBRgrxgDUHr6EABR9h1yDHqNGCe6whkHWf1tDK6vEszsYWB8wJqFR1MWn1bbr6PFJgEijr1pSKk1kJ5P",
  "key3": "4XCd3KzSkGaGBDM22ey2zASseQHVAsvUSjBh1VZ31Rccg641fUsNazrWCFVvREJAbYCZG5SRuZd6BTAcPZsEXHJr",
  "key4": "3aECdDFhmy7NFZkKRA5oPQj4C9Xck6KC2B9hxyT636dHKvcyk2X5syDwJFYxhiQwWuyZSj9J1siwrXhzHzmVxYnJ",
  "key5": "4nchxAffsMRZh764Ug8j5qqVcns8ZLdDBpTtkvFo45V79RJjYzxyHug2StQkEWNvHaTnaLtN9Vie2Xa9zaqyevjJ",
  "key6": "3u79izgTnrvwigMYiyiqDtLiM8U5SjBMV41zBe749tabXd9X28f7B7WWQZ96amtPTUCzvKNQpM1wURuQSFPbi2JJ",
  "key7": "4BYVvATdur8YM8Sj9TuAhhDxUJTXmNjSGzndq2VMJf3XJ13HQEv72wqqu9oMsNokR5Kks8Edp4V2Gkuz9iJFSoNS",
  "key8": "2vonndnkJMesVmf2SsKuyxE22ahxCM2jvRJP26CswwcspgQZZ1Wj46gCYEj2qWuj3yosz5s5KRneL3eQXbqqPrkk",
  "key9": "6wRVwYaTtxiXKEKu4PVhxexGRzbUkEee2H9p53VuLpZZKCEgNvCBxcwsF1xZgE9hH7oEVoSW7utigVArugDikMw",
  "key10": "6R7PDWWu6C9p3jC1VRKLKLTd7Eg2cF9rmCc6AVrZnJXZahyuLbtD4RJJrU7XnsTtHqdoB57N9aSWwU44MgoeUU5",
  "key11": "4tLGLrCogQ2ihagnmVwN7YCNcGwMH21HyV5VVAs7qmWQQJnvbxApPdUzMzXwdfHG7SHJ3a61Qth8w8g3o16u1rze",
  "key12": "4NKB2VM9vRywzLtSttSe7pDnpodAhJm49LuRumgePnuKDncAMTbV4sinR1nKQ3un2Xgc7jc1ucna4dVpvueAB16h",
  "key13": "23byXu1e9w9R2dGTeujAs1FpsNEpodN7DiwZBLHQ1HwoH5Razq6EWzTD7LzyLWim6YahjGdFMnv2CKXuqV98yCbM",
  "key14": "k1fQN74AscxX4RwGT9eBbQDZ1GpLVDJJBWZdQXDABTEgEMHTUfSFTeSfo97t7rq7ArUwmG35J5sc9RBqorfRRh1",
  "key15": "eAevxVxeGfYwib3veP1CbKpHPfGZKS82NmMTDr53bW7rygie4TskAmCcmU7Tc9PU6Mjw1W5zCbXqUbKE7JHmzXA",
  "key16": "3cK8nm9cSvYkpPyGkcQTpzLUQs2XhEd8iwWvKHmwuKFNg9Buyf4zZYBzywxygXXhDZoxWsHWuTvLRf6izLpgiWzD",
  "key17": "k56QtzmkjQcnp9FJyvcffzBqTYgGrBcsZ8gXA4deKik8S1XEbp5DCoorLHhm9kx4gzxFXgYCA6JMPGZLptdXdug",
  "key18": "5Yi6HSrf27zyJ7G2vhh1L23jZ5CMNsUbfWUo8LVd1hoeSwV8gU7K7V7SfBmZn2hKcEs55xnC9qB4i2GRc6fgg6w8",
  "key19": "3WFVJ51utgTfwUfeGC9YkyZYVDftGo9WQQWpE4thtVEEA64MY8phoqEJaDTHrXVVrB4zkLEhnsDnYuHA13qG4HAs",
  "key20": "2LBH2nrkMTz48KxZfAERfCZ5kG7MF6bBMEcLGRDSDJfAg89kjpZfghA23zNxFj3ihWvzCBpTj3obdYiGGccRm9jn",
  "key21": "64DUWBFRXRhgb9vRsQisFyb4mbmFBEYGJX77WFX1gNsfLWTF2BSEPGscDxytLkka7ZZi5giNxHoxCNNsAfqMZVgW",
  "key22": "2RZt4QMuovxs64Tq4LFSkN7nqcuZtkzE4hryaeaehYEWaja8Y4ccb3CYiQ9DAkYsgMfJ9x6XKhLvcZ2a93aT75Lf",
  "key23": "4mziDPuMQbAAwWvUwEwsmgiYUhdUy8bcLKr9EY61YndL3FezFaoyo95vnutaoMsrWM7uZhqJ6QNGgG15bPX3n9tX",
  "key24": "5xbcuRusgWHXk5i2xADwWx5K3JBmdiowTSiEyZhDd9y1m8qjAySxDnJdEQMRR6piQiB9ZcL2zsc6WCRKPmBr3uXB",
  "key25": "4oPpCD2SU3FYEeesB6yFR4LCuYeYLgdq69roC2ixmgFuDBzHEd5vMDGrj5DkuBat8XB4oSfnJRimBmDdij81sYwc",
  "key26": "2sjMHkFySViH917ezBfqSqqD6qtjy4FVwCLSuWrsjbdLUKvFqEpLo4ittc7LPoDwXnvN2xAyQHuQETt3YcH4vjYc",
  "key27": "4rc7rDYm2vtSA98EF3D7xGe3Xx9i2uc9MwKwBFCb9rAmf1RT53eXJAFYhPkT25ijm1JafeqETff1ytiXFtJHbxP8",
  "key28": "4Fy7J8EyvJM1EXDpjkmfWDnEwHK5PjECegjLHG8EAgkKo5YQKR7jsjQPezfZY9FQTnmSkM1qR35UV6wdx5Z2irei",
  "key29": "2SCoJxemXpMe2GTmZoWpL5CyCrfK1c9oAfyAsZUH9LWeSsRYKizk9Pv8HKf9dT3BxFXW8iKCUR2HSiMqTSR4iohE",
  "key30": "4dxinuTfpXAnAFssCaeh2LqXnxBYFcWUAiDiFZiqKeqHN94Din7ahVDwoRbnymUZWyjBYxSdtXnJn4T2WoZjwTpe",
  "key31": "3deim38RYjqv1bfSpmppcHgtgHqFt1SRquZAJbhBGYR4EFKtLJWqiYKWc9z5KmpBciKQmaBE1Z2t3cdr6CV7GoUV",
  "key32": "5vmvLAL4xK8Xbp8QJWqUfK3D6BT6VEZZdEwAb1NUag5hywSkURXVNHffu3dqwo82XENMtF5uZy4YWV3m3eNvYDSx",
  "key33": "5Uzua8FtPqStkxfzSyUitYC9r3M5mHCRZRPcA8ezLgHHyN4WDuxxY1YjLeumDMD4evW5sSnFJhVVGYnVnUXag3Es",
  "key34": "56Fk564cLGDDYZLLr3cyFapDU38T81v5oqarie2EJprJLDiAaF4ts1wJXZinCZb1jKygbqka46JAYixYvfxTZTLX",
  "key35": "5SpypkYmBMp9aFEpYBTkGv3TEymUh2Upm16zD51x4ut93XwHG3p8QNfrKxa6sQuag7Ypb1xGiWndmttBZG6YLjBo",
  "key36": "3RaACxnconS3wP2ULYXSrWroX5iQUvjPBoTgA11nWaq9ZKZoiK7v75Z9PL22EHWPLtuh1e3LrEYY7JkYkzicjPiY",
  "key37": "3dWX8PWXURkEQB3jUmN2UUkgupkcqCYr8xa3L1WgV8f1VgEUwyJaAXSxTNZbwHABaFK8qhZZsEtKDW5Yt4iGMRaf",
  "key38": "uwztjEcnyTPAKdFczyRjgrfQHiVgmZruTem9GQuDffcBXFURSQESRLeVY5T1pA9JUaBFAYFmXzWXj5w1ssJJ1sq",
  "key39": "2ntyPVow92C8f9xBy5L9D6mJGixXJh8viLz2Z51uFWmhAEqFiQXxpgouCqbZhqxGJUu7DTL1QR3cvtPteroUncJQ",
  "key40": "3PzQjXpYVdR8qjxgTgQraQcU8sivz5y21FkNju4yAJveqqoDB3bxuJAJT94rse8ofbyEfv8L9ThEKbXrUid7LSGb",
  "key41": "43G4HJbq2NBgxRUdqoNVfPLp5ZwyT7ZGyn7vh8su3b1yQcPA9gsWEUp3BpNCiUzKDqos47RFw7PP62gqGCZWEnWK",
  "key42": "4pqPU9EE4fvwaRQxcwaJQgnxRZyiJk45WkaB7bwyNRrwi7iVArL2GmTfDq9TBgmB3Kvmhvn86NjBTLTrB3wjiRdQ",
  "key43": "33cHdCs4ZaEboU5L4vTWNveuRR4M125siuAr6gCtVMLADSWc1urm9q7ExBttL1sPviqRkF9xaiM4dnnkPcbSs9Vg",
  "key44": "jT4JRsQpX2r1woyGbw9N7kAzGLudtqafBXVoD9Eb6ZdWfA4yrofmJRG6yquzjEznYq9uZubFf5bfRh5cvRMrxUB"
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
