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
    "2w2uhYtUUTFQQnhNYABXxBpnfDy8F2uuN3EE7h1DnY3hxwhGA5272M15CuXytE4wNPjwtDs42sBq2fDBmroLkgiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2etF68npA7oGvVWe8Q6ru2oH1cwiTroikrioKkEXUfQ7YxeWRzkhooo6XLDuqJZ7JkD7nH9hyz7RKGaAWWhTaw43",
  "key1": "2rWY6VYtqTcTmC3ZwLDxHdLrYmCAvTMdCJPyGTsD3U7cmuNbbeaDw3mjudtsHPtMFnDGA4xAFYTTWHLynBBTZGTF",
  "key2": "2jnB3Ex1JJCAorYj2Lzyq6g4LdDBTbYiHvnqquheyQECiVDwpZ7hunteXBYhte6rcEVZLM1qYJXf7akx9n5oJhj7",
  "key3": "2oyRDY4Kik5ejTK4VazvFzsvHMmefbjLzEdGAhdVpE1m39R5JeJ5z4VWx7Zj5VuGkntmzTMGufBKvpUXiideiDnz",
  "key4": "5BjNttVKPijKNNY3cxggqoYGt8BS8Coq2DRbwDQ13aXQAprNmJDDiUST2ArZu89Cpnjn42Y85ePdf16VdkkDnNfM",
  "key5": "45ybFVqFVRLWN16F7dfoneHysAsqoaUdhfFU198Qq4hED5TRYfezyvQtwzhEwZ4Q8nmgAwjRS5xvr4F7Cg7H3EEf",
  "key6": "52ADjMmrWdv942KymP8u7VSvWKQW1qXnmfuJDgGCRa3yX5ARhA9F3WmT2S2B72JPMPPqoAaNq1FkLsE7Ce2vxQHa",
  "key7": "66nTgsYC3gMUxJmFkVZ8ZpgiQoQyD5175wtZAVgSJHTRH32yLAgh2MZrvD3NeRFDp6sbsesNx3fE9gxv4CC2FShA",
  "key8": "2QvvUQZD5qNQ8Z7TE1jPQR2hY19ubWXEtwN3J3hUU7785PTmakA7Z9WoraHVkgu5AirN2u7CW8ujeYeyK7wTyJp7",
  "key9": "2Tygbm7S5SagNyTguJnJ47bF9d8Yrwb8xHHKLL4NmNC8oo7K2nrBxnB1Xyw8iLaiysMhohZG7wFBu5xhAtKxe3dP",
  "key10": "2PwFqbvRBhJGM9RFhtJFhs3UCmgS26ABygsEpYrXxbD9Y3xs5xSrCsH9Aiu6AN3a3YwpE3J4o4BqmiRVDYXUezw8",
  "key11": "4FoMdeaMdgiws29jEx62KER1HBPYWrsrNi19jCCBHxFBvRaV4Bqb8rNkWoj39wRW4z7J6m9KdE1pTn4r6jK4gSD9",
  "key12": "2bpVWQabatGSFwU8zJYnowE8r5QnhX6MmGoKxcjcJN9jQVWEzJ4ZLgzu7yDDcAFvT1PcohNa3Ga7TGgDSgfagYHR",
  "key13": "3kaLkpB558Eju6DfpM7jFjAYaEtCos6zaZ2TTfWANMZGSQBjL3zbnPqfFvYBfau12DeNjsgz8RWAoDCr2MMQyCSH",
  "key14": "3ibHetzPeAaLm4jnrLkxuoknB39yV666UhC1ARTgAWYqfcZHXNXjyT6CmqWAp6xbT7E6z8W5FPkTB1ca98PqhocJ",
  "key15": "3xwtNkjgyjMgAotGtCunuMiiG8L6qSwpiFSKVTnZ1kfSWDQM8MRV4aVZsoBRxha64ZPUR8YKAu99r6LskwF7vw15",
  "key16": "5VxjHsuZCpoqnkcdxfC2djeEX7yMX39pGgMWag4E7vCZxCcV5Q3BeAjnk73inJ6zgWsCtg3bFEihfA4LopAtkzew",
  "key17": "tNTaTMToThtEoMtxdDmKeeXjHncKcSUHci7gH3Hp6Myiosc8kbL7Mf2mVMtraj7QEJ4UnUUhmiP2ncGZAmigoRa",
  "key18": "5G8YwtX6RojNgtCqMopuPnPRXN3GzCCJC8MNEksGXzi3Q4pNmzjQLv8DrrETqtBLXKcsvWzf1fwXguENrMr1DcTt",
  "key19": "xFuh6hkvr3yTZyrEWarvdumbGY99yTUNjsiz6LNoUjYUFDjBqGmb69AGc8hGBM71L7WytjAkEXRUR3sTR2qqJm1",
  "key20": "3AxVEdyAUT9Lt1JzgpFdmqz6Nsakg4gjbeC238AFjtKGxUpz8aUfC5EzsRRAvrNyGLjTs81DPFv4q6V2XwBJ73yJ",
  "key21": "34TT3nUdCTFupLmCDzSKbMWVHeQUtgBjEs6ciLP1j3o62oqadfSBwS2pQju1WzpGtBqnwu2BqooLz4hg7WCnUwAF",
  "key22": "4kPbyQUeCEa8uJFkozhuq5xoCdTHGRu4odHofBHVvPPPcds3bnwKzCEhakVKdPqcoMcq3TrnvKicu48is9svJZB9",
  "key23": "3sy6qjCQzGz5qich3U9BtM3oftZRqggYLDXvpU5nEeXSu6civyHuCG31t2zRd3QcgEJs1fNcqus97n4qfXSR4cXj",
  "key24": "3dpfcHzC37DHAK4dg9ar7xGTCtjZNvMou6vWw8jUPzy9uKAHCT2yZawybApe9Z52bzGKnDZSGm8ZeGc7sWyxeWuf",
  "key25": "aBujCNhfF2zi4M4qKmc8LQvvdyCGd45vkV2NT4P1T7WYQgXCwaCQau4m8r2vNypM2W5uqESPmaEaftM75X6RH4M",
  "key26": "5GNXPzLJwCiwh9w8KSafjus2TiC36TzdWGfxwmWYH8PKQCTdKZq3CQoxMYZzeYsJePwQHLQUFGC6puw68t7gQE6T",
  "key27": "3RzcdCNipxM724MeYsD9ycMWX5NxTczC9noAa7BK7trZRySWhL2EC4jSMDsNqPLS3rzrHKiA6eTvC9UeYZJ8rz8L",
  "key28": "4RHuNM8SiTkMZo5hq9hwGvfWP8Fnba6PavSquVZkXbHRKQj9YfuN571LvJc2VBLu3tJMCVz7XUftW3wMKv4MJPuo",
  "key29": "5UZQD2MpsQ8P1d9ncUYwSVLvzoVZFFoty11DKpU5r3Mhv9UHPXafLs8Q5JKtRXRTRkNNDknQmNaBQENy65k7xVLp",
  "key30": "3kBJQwkybYHXKCJ8ZKuVuSHvrJ1TyCmghJQNnpuwkBJwAne14aGN1xCwHr5AukaYreXwJDCaukAjnLiqLZvnPMDc",
  "key31": "2stxFxYvCHNC1Ky41fLRFyTgYEmf5QJGfWF3EcyMZ6nBHiFbXF18uPXhtRdkQsznLvkLJPFeYyNz6RpFeDSedodT",
  "key32": "554pMXxYq6pyq1VgwC3CFCKtwCoaH4eXMtN6gwuF8s3Rq5emzjriaEWykyXWaBq1oexXvF7Y81jdugCqzBVgpWSF",
  "key33": "2SH3g9q7z7W7titi38DfjyeJJB1bZQYKqhJoaV6m4GXxqkdSNMtcopBjHDDD8cNkikuLSujsTdTu183FW41o3x4K",
  "key34": "2oX4x58RJk5CtGbGV4UGko3xTW3eM5XoqzhoMbHEiBdQTbyvAmLEVP62NCzE4y9Q62H3BL93LusFtqPkLEXMwwFD",
  "key35": "2YxGd4xbWbaLkeKnh7TXF1ZS4HHoFyEMvFddx4mvsSh5zt34hWeZTvxmsrvRkc2CBwcoPDg4P3XUqEurPgkasuP6",
  "key36": "32tKEpsSPnpxykFmm5gZJkakUhZWiYz3sYgoRRaEsziF7hb5BUip3HSqELnSaxkNeUY1VJMv4KN1GGYtQXQv33JR",
  "key37": "3AnCyL17RPwMQdrDk83RHBQsCUVVXz3z8cLhmnpRbYwL5taWKy84atVD7cdHd1GLCQ2Hy3prJQqXdL8KTwqs5Ln9",
  "key38": "4N6ovivVYHNhdEpFj9TwjgPi8ioXT85J8BsE33ND9AYyRREoB1gnzVEyKqmRNyyLjygJrbq6HnyuPLeGpggptjEw",
  "key39": "65pYypfSnu1Fa9WWuVbLSRtb91ykfBGZXy4GcqTsSyzngpriUD2xPVB1ftmfao1JkVW3yPdNn8f4dDpc85bAZabh",
  "key40": "27GLaZHLixT8ogLcJxeohax7NYbFSnQuVYJCTRYWrQNWJbn8xgngGZH4LjFdhoaNnQX6ibi6aFkCqdvXotXgPbaq",
  "key41": "4nNU6f26QJ4uwxLx3ejvEmmZ4tstK5Zz5SxpstUgBMcQoXVbqzZwgno2EN4vKeEBpVMgsbTq6GCBXWi3WmjZd4kL",
  "key42": "4jMCBHQWQFJoPSJpEWCtfBhWU9Q4fTWDjNRB9Q91KT9S2ak87VrtPfL2Acvco2zjAU2tZkxGzBM99DguiNsveS3N",
  "key43": "3eZq55igoXAnaTkRRi6rfj2i3QrCjWEFvas2JGwwhB1Ao2tmYaskB4td3d1bFMZEXfeDykTt4y6phSQQtqQiSMeb"
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
