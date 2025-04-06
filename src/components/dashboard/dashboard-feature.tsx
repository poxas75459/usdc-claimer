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
    "eV3YqZdUv24tCB7FYiirUaV3yB263satumGcDVfaJwR6uhSvJvv2JQCwDX7J92aDtV3bEVe4Dpg7sdgRhtWQ1s1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mue2MUEU8sEBadkCKxsHMquDsFGxGe7iJxY7YsrDiyVJ2zvCDHGxmbVv8JUFXy3EykXSu1DMp4FkJmQBCWDeYAt",
  "key1": "4WJ6RPrd3deVDr9cnbwui2QmfKChHwPcLnQ7a2KwPA5NHHErmb2sd62EPR4L88bx2Brp2Av4txk3DkLZTP3hKcEm",
  "key2": "57nH3u1m8dPjV4whC52msiL2b3ve27DtBRXSTFPGoCW5L8jWSga3DM8Q4oVHYaL958WKa6wfm5vpjU7sNzTZdipA",
  "key3": "2jY4ZBGNd39ziVvvFcFQBd4txLoDAX7CBbUCnV12SomCJUVkpNFVRHmnbTZ92fJrVKpuf9nUGcuNcPm3bX9ZwEy1",
  "key4": "5r8bU68H5grM5UXsAaru7Cb8y34ySY6TykFkP2LwcsQvopT3iL8U8T7vASfEcBxgr7HnagxwhMfyk4LzwB4MUHCc",
  "key5": "4dbCRpj4EY7ri6TykaD9QvEcHDqNRhtcpGDch2kLMJCU6P3QcaiEyv8Sm2pRke9deMChsebKB5j6K4pu4Gg6mepr",
  "key6": "5DNG1h4GnQZRgKZpBCvx1PEziYNs3Pu2CJBmxVHDUZqyhv1NJtVaRYgYXQRFUvmXx6mQTRXTjnDqS9wyJEjukzmu",
  "key7": "ACy8Ac4DXEoYPi4nUBHkUHFzWSeN5E7CnqZJWPxsGFsbtvViATrhTHrPwUumZXrsGX8EEhhMuSqpXaLZpaTCoVP",
  "key8": "3iRXT321G6p9Prcts1BkhGL5ZntjV5bQxVatM4znAdGmwpSh4gxta36S4xUNKDGEACgoT3JMKbZSrncC1KLJ3cJW",
  "key9": "3BYrtpYp9wpZizygqHEcwMh3BP1wxkyHjssLC1TH4AWc54ZnwVGAComnmtaUquny7aWwCKcBaxL9da9tnTbDVJPM",
  "key10": "2Et6FRitQQx5U5xcBRc3rV3qSU6LdUU9ttv6K5PUhfL2t97UPnq7tZMih2QpAPqbQagULJk1W6n4sTxqSXyTK8MY",
  "key11": "5ow21eggN7JQ6eaUeqnPhZj5PgmdDXrYhywY3pDyPdfsErF9SwYi3NfEMnsggMsxpQapHarUXAj5EJSFz5u95cCd",
  "key12": "5uvBUsRiYr6hEwbSfRsPXpJPZpMmXEDkM44CnNt6fnzor2aRpVF4Bp5zzed7VF9QADvxHeqhsM45ZZmWLMGYYSc8",
  "key13": "5BM59fqRXJyUHiGL5RNhG6uia4QpbhB6x7SMLSHJxmA6y1SvdYcFr2tv3gmZLSPJVJPqEuwjWvV7GQyJWgv95jg9",
  "key14": "2jdhakUQLbK4iNn83zF3Jjs2VZaDTRLAdHNPAsxAYJW3JyjWepjxMCDmoRv4QCymMqRxtU75GCcEbdyHYQaKpQx1",
  "key15": "4DRFuxy4DtMX9bnfTEuY5qHemYjexbuJZMy8TY4WxXdqDtPFZ8aZSronkYWXy3vJx1peFYr5K9C21R8173m7SaWD",
  "key16": "2N4zN52ADeY54LYg19ViuYnLGVTrrrGjVmChuocxWYjmDw51aL9Zygb26Th1RvxigML2qUuUcFkwRCY9Kn3jHsyC",
  "key17": "5BqHHF8J9kBRPeEuTsqKWs7gaMAqLagf3e9Y4Jgxm7hnbR9xnSWUs7juFtN6XKkFb5vNWqaUm9TCPqpxi9N4D314",
  "key18": "61sBsFQMDhR2MgbCeYzwXhLfMEiAXhCsGyND4fSJ52oJj9cydrEB7a8meTQPyqwsmasezhMEmeRJrwTDbmxABhqS",
  "key19": "4eSxpN8eW2EokAua4jeVPe3jAfsLGr9RU5ThhZsD7cUVtPtP8VmzZt7hJc4GPK37W44zVdSJ5aZPFfCH3bj2bu1J",
  "key20": "2co4pKUBvnBjn93nLXPpaHvPmGYNH1hHTndfQweHLbX6JnzHEXNYxg9LUrvWsbsifJE644196eyoGXc4foKF2539",
  "key21": "439cdoCXXBS6bxedUUFXusTmMahLQrhcdbN39gjVLwoiceqnypV7onNjPAgFM3uwXnHAkdnsnB4Q1V3xdbZArawE",
  "key22": "3vzf5fVyfTqkxhgPXaMiEeZuPbeH81Vrfuwa9TedJLkSZ2Yiv77u2A6jAGDcVZMWznaUHNjadf5r5dJJLjTjMogq",
  "key23": "49xMXX1gF9oi38LnfNR6BStbdnDoW3eWo2iM3CGjWc7EWraGcC6n7xqL1ZBfvmE2dM9CdUN7g8EprJoKLYVpoJeV",
  "key24": "3V83vSmsnvyKUs4PzKLzC2WAzTz3xHV2vFnsR5DVCL89NnpTgQ4Lx3NTKa2e8P93cUSoCfWXQgAXEjGNSUQY3d9a",
  "key25": "YgLnMmpST3LKUttbuc12BZPWrNaDTXFxfeQtgJ9Tqh9qPy3iQXCwkHPAUwRrK8rPQWrr3sh5tjbj1hpBTF1n8dD",
  "key26": "yZgnCcgerdWWU59DPXa94zFBcpze3saoabrB5uLeMf3NvzK4god2bGVESDm6gsLDtgZXaJcf2NadHTgigKqKEhx",
  "key27": "2JRion4qdtDbNEi2BgNpDxTfAHZ7R7QioWnRaY18VTGSkEq4G3p3Vd376ZkzX8CM1N7PdpoDJsYGbkCRi8PGzS6g",
  "key28": "2mnLoZMiAGg8hoxUNq5FCuCHSbwK8Rx53D7KvycdkGU1avhWJJSvQQpmkuroD2GYqRCAoRRB1iNdtidGsvY8gJ7b",
  "key29": "CE8VDvfZJ16jjCqRyyunt9n8uPzw2vC6nuMSVRHFdmkw37EkJzPmQKrghM1ZDqUi3GrkbUn2dQtTMP8a2tmvCQ1",
  "key30": "2ACvkPEF2ZXanfPS1mpTSzcKx27ypb4129YZQwFi61Ayc9GqL9uAYirk9UjM9WvZJwEVTRrLWpBnWQBBEcurHzc8",
  "key31": "2g5WWwRQZ8BpNpeh3VZzH4bb2eCEoJ7GeoSFnAcboNLDvgZm5pnvWSWnSRGWBzBZzooJjzC7xigG7bAfb9webx8n"
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
