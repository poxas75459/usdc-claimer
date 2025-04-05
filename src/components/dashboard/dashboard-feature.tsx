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
    "62Tb6kJmc2q1ZTBVufS1MKc6XnSusmjNWDiKdorzCNqqH9eAEfGrFrSBryak7pZmPc8Bx4R915Ugk37c2wTAijgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HwxzyZPYdxDN11z1M46nnGud2qCLeFndjQrCsFroNzcby2PSJReasKRCYtnukkh44hr2BnReTdFV5o8xYtCmk5x",
  "key1": "4rkGTgH3i1bCirD1WDUhLgdsnefnSmjxpvX6QyJHtpA5QDH8ekFcaH3dxRQUG13iAiLLtJt3ccq7eWxgJPQ7247i",
  "key2": "5hiR9JiYFAM1HvqsixCkd1HEBYbAYmPtVTtVnkj8GFYixL5GK14y8Wi1qkXFZTz58BWY1NNheRLdAZLjNH59D5b",
  "key3": "48zAMSvJ1R2mYTgnsvpzuXayYRFM63s57wnBJp1Xm3sWyBuKuRk73ekaEn7nPCFK8TEEcWk7pczRgoqFVdP4Gnm5",
  "key4": "3jWYwv9YvBofgaxyKvkQLcsrqPP1CrjpBdFyk5La1Bk2soswn5xJncbqEwQF39ZH7wKzmcbjBESGbFf5sRn8wvxB",
  "key5": "4ZQcdc1Bz5miSFDWboDKqoh1cEEcVuVETzik1NETy5SP8knnAdLiE7qKeFjrkkfhj2wHHGuJW4ZK9Sz2WdfREtoG",
  "key6": "4WBqN4L9oNMdgVd5qQXmrZrvsyR6VrUY378KHwe8axTEPBrie5P4TdAoWU1MNxyGAmqbubs2QGumwm5ybtbamf9m",
  "key7": "4n8GgvqPkMs96Kzq7W14wyUi4QmwFvr6K9vpgLHoVk9N9E5HamrmjABWhD8R42SyT5Dj28J4db2dn5qhfcfhS3mx",
  "key8": "3R6PDodrijneZsStLbEYs7tfmBTj4p1BXNAcrskA4cz6Zz51hBsoQfWayten2VpxA5vGU171Y7eEfPVQMvz7ap7L",
  "key9": "5j9cr9Qh3j7uGzEaFtCs5f2ZzxgLbCyZUS9BEZCXa9yGKwU45Zrg5rmujtEGGa8fKZzgtSrKEiXnyn8B9WkWdpzG",
  "key10": "2gVz1iHwEf5Abr6WNU66UeU3oFGT2DQotyfYuwAH6ZBBC6VUHbdbQsjQ1AvNFmii7UQR7NTYgj7RUtMkLiwTf2bt",
  "key11": "2ZSB7QwSFnULAv95Bt1WH2yt2ToEfQL2isTK5CTeZboVdv4PVKKReMy2pKsPKn37fVfuq2gBwDPfsnnSXg4wb7b",
  "key12": "XUd9zHJ8Rug7U1RMw4Qq5YzxSvFMp43em7v311WUbJXhF2DeXJnbVrbnacSsiRHvKMjm3yZzbRoKpza2CWJQ9Es",
  "key13": "4bcHQCNjhjkDHLWGWPx1z7Y2iitVTTTULvt3ojpmvqFv8yo876Krobm1p7bRS8mBisF6kdXA8sLN43jJvDjpMsj8",
  "key14": "5fZ9xhWGg88cAtbZiaTbZWH64fX5T6r3yWDsGPmN2wXsBvnxu6e3qhHApXLSKGFySJ1t79RugXXHqcwFb9SEMPFb",
  "key15": "5mkZ9mCJGWzezGs5Wo79oZHQRKen8K72groD2kXKA4H17ANRdZWagtH7w1C7M8VPmGXdRd6bC42gPWWrohvBXmvn",
  "key16": "3KFTC8FsgtF7NwA8wDLRGvsQTJ3CEqNz9e5issD59uW4NKJFih4AyUDTWMqsErb5QWsXVk1fmJohB3biM55pThh8",
  "key17": "39QhMD7irfT67cS1j1FZP1woWvWgxdTjebvCYzEdGHpfhuzCPWRuXC3NqymX5GYWEs53gNYg1F8zvt2kKHPHJC8T",
  "key18": "2YV867Tug2ufERdrTcuSdNgJrLyZ58TB4gCNsD5XqzMNWngzvRVrLWB9VNb1yP87h3jPdeUabq3CsMwuLrDL9TLp",
  "key19": "4B3LJSYKVwZBhH1RfiQRsGcJSkEnEBWWzRWw9ioxsXoLcLNFXE91DwLEXD59Lzjj9S6W8i5ipGnS4rJALRRuoCrc",
  "key20": "5t57d1eDAmhJ87SMrQSJUqmwA87NuBPfrhap2RBaK2ihqQrb7ZBWRNsUPmRUipXLG7LMSP8y6DEG8iSoe1rCMQHA",
  "key21": "3wzSMTq3HKbCGzjhL4jdQ1U2yqRUTq72H9aDUWRM97hZ7v5BtWieZY7PaCUnVGH913yy5Xja7sJXTsbJwg2zWJcV",
  "key22": "2LXrfjke9qxQEZ5zinp3y7BApgowkrzMAFP3FrX2PfwowksPXNkF5hAc9cCM7Qwkewh1NDNGxtaa93MtFBzpwWKa",
  "key23": "3vKVkKGhJwAshWFv29hfTtTQqHDVJ24aeZpo2ANiTjuN8LKQ2FoPDrkxEA3iWgVn4LgpRfp9Mca6LBs1CNHcN1wD",
  "key24": "5vDztuTGsfEcD2D67d3py1rjdjQ4wbx7RQpUPRQk8rDAKTENo1FcKt5P9ncV1gEygN7ZZbGdM2eEJgNNsR4k6mBM",
  "key25": "3jX24UfAXxz9iiEvnuSGTeEa96ihjyqyhS1ZQSmDAdidhQUyvV7APXvE2s1Wp5gBEsvDmDuDKXCpDPwRQsQrzTUA",
  "key26": "2jwCMvwM2P8Zxx3AhUyrZVBGUb82LcmZCH5bLGmDCn1q3ALCx1YEC6sMQCuLTPdrJbXzTLxTEvZiodvK4gmGpU7N",
  "key27": "35bqDxwsWaCL6e1vQ7QkStMEczeZQAopvrNymedXhjueXsrixc5dFwMs6NNnNsnsih28PLYtL4mkgVrkgYp1bwi3",
  "key28": "5bGYzaBJLS5yfMg8rrVTaa1JHjWhG5VMfiNwDo1jeVYJbo988JVckKFEqkxTAnF66P8MmGNLXyvHg8DH7EyDt2FH",
  "key29": "5THDaCkkRxpHaPnkc5ETvNzvBaDW7ytjm3aaj4YFaesbTSeqZ3rJwPjmPdfZunK8gjhY5sFYPoDRPYoGVCT8mBkT"
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
