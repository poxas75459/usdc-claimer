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
    "5bpKEQbxb9W8ZR4UBL3ayHwM8cb5VT9jda127wCTz94XtjNykDLTGGaavvmEVeUoZtbGnaHX6ic1BS1ZXk55PDu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c1q6u4TynPZvPuWKz2iZT8iZFWZKNfnpS1bqbWFQW1Whz4RquT4i9aPkQHUQSKB6HCWw5J7NmtCQvq5kfEXbJcG",
  "key1": "4NQyAkhRu6hX5MnPePskvom1QRZXFxWXQDb4PNM6y53Huq4pvuGta5i9t3k6VQTWx6DGTmsJzBSW3g9Pgjm5vs44",
  "key2": "SzmUwVeZ4dq2Neii2TGQGHRJ1RNt4oDP9v37QR98L553meLSemWs8NRs14XP9khSyvRmsvfVPhNEmV1kTfj7wHu",
  "key3": "hrBq6AACNgi8zGFvKiGANia1Upk5PdSLK87vfRB95eUSB1AHrLh4oQ7zA2faWTtocpmoL5oFBGJV2cWX7rkeLhq",
  "key4": "3jzKF7TiH3NgYAW27QaF15BPzB1cwY1A3g452hsxfsBVaiNvFnmnRuie9CqJwytRvDs5dpxSRb71TnEdL7ctXqkS",
  "key5": "5qu1Lqf5i2sciQCRZdBfGASVc3vQBibzDosxuRmpBaerXa9LUw1ZFwZtDGcqG4Hsa8J1mndA5auFTeYL1Zu81zWt",
  "key6": "4RHYuTeMteHwSseuE8Vi9NGMdf7sazTa8pdWyn2PmNzTCQtMhRTmoA85jW4MqvQMszqE6rTJFBqjKtyYYgQBx5qZ",
  "key7": "3MMxoV44GPuWmwN1u3c2zSAtUPnLGcFjz9EgfeQv8c8MpWSr9GQSsGrvjMKx1ZrjZ7kvBbXt6Y7yZGkKAhMiYcH7",
  "key8": "wr2B9AQkRuNTY1ccZhvoUTWDy5aJqgnAbKe1ogc4cwfjbLvdEAJUQBf18Se8y7rMXo9D5sxWM1P3mWAcWUXG829",
  "key9": "5RPduJU4GUQM37kv8BQkVdBjksvTbyr9UhaJwZMdL7R8NJ6JV5URa4Z6htu61RGHyjwsiMfSkGftM7mQGx9YjbcK",
  "key10": "67VkdC5CFRNtoWBdJmqkcZfs6J7Shzs3a2ZsdsqxFjTGY2omLoPQrb5r3gDuNf4wRiZSrrZe5Dyfdb3xKhRNfj8D",
  "key11": "3n7ppXg1bfcXQViSxD98K15HMtLX4od2b4u7PnSrrx7CiuKMW4BwccEhAxWmr51xyy1v53fEV4hhbHmjYojpd9AZ",
  "key12": "44CVq3FPzjsDttes93ndXJZwdKmKKab9LACS5k4fofN4TJW2Ngh4UJn3Ui5ZcnbLarxZxoCHJ7ap1h4tiAqK6dy7",
  "key13": "UNE9q7i4Wrich6bNGhoDJLz5dTCGejN1BFtoppTUJZmbEeSCk3jNKKo57qXNFD61L7YVrnSkwBn7qFA3xsGSDXy",
  "key14": "2EoWPiraf81TRfq49bmf5fkyTLLvpxdhfvC1EDFsm2Wu1WjvH5qAK1gqqRUiegb5rEjAUdCsYfzoUu89Xo4SzaNL",
  "key15": "3jpdxrME7TBSSgGg4VCX4RS2NWQ6h6QXW33D1zRrxK3HEesUrwvNLzxGpp18VMaSW7dbp3xBFDfwnSPy796Nfugj",
  "key16": "4z3bAQbnq3r1dvuQDhLYAy6XquQbPZzsnzh58i9TVCAjSY2jTQKBPcuGTDQWoc7dnrbiHebkgzvtUouetbYDcW1P",
  "key17": "5qDHK2gTsFyfmSWAer4hjYQb67xnbSa3Hv2Md7raU1KzWHHzLUre5HviyniTatzuBWPV5wVTW7iAGDTW8zzSeMXr",
  "key18": "5rAcveTtRyTNKXmJrAoK1Z9F61YvDri7cpGjYbvtj5t8gNrpDXbUWEUtBJdhrH4tkgK53Cd9xtjPQmcWP6gJ2zTL",
  "key19": "2GF6xRY97Kf6cNwWdatRfZraAUY466opoUG9VmwuwB3Qq85kMbH13t82YB9Nm7zPEuf3SLcAj8ncQtYC4pPX8HDV",
  "key20": "4rnmZxQmFCVdKiQbvsQWYer726dhmZ1UQAoKpJd1TyDPMR6ZT3XSQzjafd7bfsKirqatuL1Xn8AwTtwx27gn8Q9n",
  "key21": "4WUZEQxJH1sF7BSTrHhoEi3tPjznrz6wpHUj6xMyZGvpWuyog3TVnSTVtyL7pVDBLfW1ZWxQhieBq1VX7aT4XJND",
  "key22": "3ozRCoQtCsgpJK97d6hf2H4nRS94qxL5zkRw9cCSqZ3MkApLHFvj83uZ1FgvgRQX7JkGhi4X6VTSvYgCf4SgXBkp",
  "key23": "nm6VUAKMcDWc1Woadm29qJw5G4L1GRYh623nBg9esC17AKKBmkvY5isWrXXmvHKTVxcjtKijDKqMCrvgw8wQ5Uk",
  "key24": "3FJmEVWNZi4oouALVoZCz4RCUPKgiC1t4qmYELJ7UZrvbBGK5PCwmY79PDNH4RbdphyRSiHoasRrAjt47rzQQCu1",
  "key25": "2XG1KW3gW5r5E693Ey3wxaMU9xRZz2Gx67aoearS1v1Xx4YNSmPdpsXBBQ7XTYvnPPPr7P3jZ7avixUq6hxFggBZ",
  "key26": "3yUbwQj9hFkb929HX5gB6YYg2qgB2HFyV9fzGbN5KMum8v4ck1BV8ciY6DJxX2cn9Xa8sWyEUqXFQ89KGZ5Ao96m",
  "key27": "5ksvqnC3Cu6C9jk5pCBnLgjHt3gYRLnFhSbXgtxiNLzR81q1WHMqggY4dCUoKH1DXrWbBBBJvAyXVCQwFnAfNAg2",
  "key28": "83V5auXXNm7FZbVQXwGiRVJpRuVDHnttepKsyasECe32xadk5fAD54scWZfAwicmes7eZanWA7RpJzd4K3tJFgD",
  "key29": "5CuRxRX1VHQm529uqrm1Vi2pBzDturSsy7KSimwLhiaMRcL6QD7jRRJJDEAFmujUNFDg7BR1fssR5iyUEnHoxFo4",
  "key30": "537JBNFEbduWwtijDCMocYbMkPiZ6gUuAkzvLDgDp9R5KGD4Lp52qgoKLWTr1TRZAy6hGdzHuwMyL9aGoMkSSGQJ",
  "key31": "3KJ2t37epA3aS9SHRZM6roGpCZMdtBcrCdVg6xtGbPPYwVywsGp3JuSVT9g931Zyh4yv9zmPyFbP1Q3iPvgFRXXx",
  "key32": "32CPWbc5LmSKTXEMYisMBP3bJRr8WeGMBZG59C6qjmxpimfbiZezaqRKmNn6fC6raZQDUhufYXvSX6Cu26BAW2u2",
  "key33": "4trKyuASMBkmAiTLbqACvhfjN89iPZYNEmtrvYjmBRkPJSBHYUoRzvr4cZVo43LA2mQMikdbtFJc6enjeTo3FQwP",
  "key34": "486eM8SjbZFP6Eyj5TrK6Ei5BQfi8xNCA7Uc83DQ2GLouwwCzpR8gz7cLxLNAu44whE3rpxgHXmX62UGoZkcwPjy",
  "key35": "3maBYpa8mT6qDfpsvpxkSfVMv6XRd6hA8UjHn7NHaq6B5FzDsttCmuxzTiHwUDsHsG1iMCNvjPyofFEVcR58hHmg",
  "key36": "44RBKNfK6MTZXcmj3ty8fHoqjznVhpmEVsfjkJxbrwwD9KPjfy4sBqtb8eSHZVcwUBxdWzumh9TFrJnomRAGKk55",
  "key37": "2Awuf5AhfRbren1pYo1cSaJ5mFab8qWDdJRMHFm4ZL8GjX1Av2RsdYRZEi8YE8nJ2t4nqpgRhcx2NcS1nVoKxUA9",
  "key38": "3ifWRdkJhgQjE4T3bn7Vvp9v9dCbiAHysNCYZCpeigTYjijEZ8DtkEyiL6X1kH3mtMs9U32WtqYyotbUBipDMuqM",
  "key39": "3i53kAkAfwQTBdKCTJi5b9faXs91ut4MWb2Fx2ZErUejJt6f1yod1xW2vw3UhWrq1geeC4WrDrpKypNn7kERqJM3",
  "key40": "5bUWCqAiZc4kYnzi4g3ZKs5sodrdq3m74df4dFdQLvo1EWPLBNy2ANk2cTTwdMNT9zqzw5RutmAg6QeH85USmTae",
  "key41": "3Le9pXCDzWRR5KGfK2DfoVeShhgUVtuBuaVtjcmaxyRB1bUEiQan17E1Brnp3VPorkeCC92gH335RQUPKJtCTKhq",
  "key42": "CRAj4fAvvKSLvKTH9c8ESx55kLpwpPyCFVWsgw12b8Q2s7NoJGrUhUc4PvUHHeqjxBbvgqSR8yLardrxC3nomhH",
  "key43": "5Ee6H38B5HqEa5qHc4SHzv7rRzQeJng2HSGDGsSTUJrcAqXrSopVVcDpDfeJM3aBgUbvXU6pQBfmeZw9H5Tj1EeB",
  "key44": "4JG3TcHYYB21yrhb9VVHWwqDiSb4XpvJ7DQFXAvKUqPbxiTLSBpKkSXFF2otCNGNWFqqUojg8e5cUQqEY6A6MxCc",
  "key45": "jZkmGeV8FGc3cVKNde6TSAg3hiGrFEz5dT77CfAwuX68berwASNuZW7dp3vpYy1HAeGPCcQj7y7qJxKJ8DR3EZe",
  "key46": "2pgmtX5tWEqq65vL33NpijitztuvDUYkrdZZ1boYKysqgZ4ipR8zo9kwio3GPAWrb79NTu7b3ht1oson3CeQeKfK",
  "key47": "FuBUtJ9yufFfLDaiCP9iXvSoXjfcPkk8QUBxXa3KD2yraYLKWt2bwZSzf9DAmq7dHu7YqFcNfaBLoygiDqocS39",
  "key48": "4LMi64D4WETsTwQCVcw2CXcf3FsC6WJu4o8R4h1yRQjcr6BTiN5ygdSmCJs4fpg25B9zGT95841LwtryzcL72qbK",
  "key49": "4HpRuetsRv7KNEMvbsMwQ4nUXpdVqFBcTajXPPtKUYrmb9vrGfvW7WZQDqXovtyZ15V32zCcRUSZwiFYpDPPTFuB"
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
