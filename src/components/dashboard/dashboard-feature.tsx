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
    "4M4qTRgMbqPwKVs7MZRhgDsyHmvftXEK6tdZSRRbtV6SwfQfvXaY3NSQYCC2HZaY7ydg27mdp3D7cGFe7WA1EMvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zeg1iyohBwiAQGrgueAc8jGSs6qxV1rgHQmcZwktjGhCRv5vjBunnkMgFQ2bXe2MYGenZ6XMMDev3ZdZ7yjAJEv",
  "key1": "5XkWHgt6z2aFukxHh52xjcSTR1S2cNCdsSJJDWRrmLciVFcAbFAzuxFBjSy6TD8s4gAaREoYC3zpikn6cR7oAXh",
  "key2": "Z8yDhvxGzVExMUdmv2MYyJibuNuvTbsPB481bY8bi92sE6KjXqxX358JQsDXyUQQ422yA8GadczzMmC8LzEfCPT",
  "key3": "2yvBtG6F2bzdvnJqK3keEZQBB6o3ec5yBAV9kqE7e1r65y4vV2g4zL7AEFCamDQr3cxRygyjKypyqueiCkZBAsZk",
  "key4": "2hcXwVxX4ndah3MMAj86jPjqDeap3PbjMDiYENhtxhAtSeVrJRLhe1G1sCdpps7eFc8sqEhizoSyfgKenNzPsEjw",
  "key5": "2UF3cqadqpdjq9BdYCjpBR6mShPJ5x4xk64S3MyEk1cyTV4a2JCwFjwf1paXiWrCka66m1nTHggftP9Kk5ytmnsy",
  "key6": "3WqLLAhd14GCff3Ada4on4YVjuYdpm4ouMoALFwncHPspjj27Ybjn9Tz765vGEUD2hnPST3sqfvveCoGTdBxf5kG",
  "key7": "2rfqLzAVRvpzgHKeuTqjGugKM7GPJwGuM81eb9vfjjTBvNQZTCfpN8SpKr2UEwmEyPe8CnZs13Uh3zK7iVopfQES",
  "key8": "2RKk1Lf9WaNwZqRs7yMzp7Ry2JA6w9HBYWeggZMm3iTxHUm1VB2KKaJ12EnPfJeZJeEyczDatbmJzNAMrHBrzLA6",
  "key9": "ms9knjNoFRtJC39uHFnHunXRujmv6DrKkvtJvM4WP6NjS7uLoiPSn2546K4irfnBnGXRRGczEtfq6hCMmxWwz7P",
  "key10": "5fWwBvBGjoeb4t25a9fHRxgCMsNEPHA1j4F23MWTR9QhxgqE4QfejubzY9nVzQ24Pyfj26sbWF8eufyPFoL9cR6",
  "key11": "EwFbz9i4SuqH8oEjPKgPsLpV9GwNGqN2phgG1RydTj2Br9TABJ46agyTyzYhQ9negdiMyzxKTUj8HNpigyfSMNw",
  "key12": "28SDpDuGUpYKUQsdrdDpqPFrbxSJZWDXipy6KxCrZdNTGnvZisHVi7BKsGZt9RshFzK6WNw5JZN8XxcevpN7Xh3d",
  "key13": "4TCvUQkYQt1aL9aFsHFoGB3wwQS2YsapiuYo7XvBjiUMr5rD4Nv1Z71ykJ96bEsGzRmF87p9Tn9AHzWtdZkS7oXW",
  "key14": "4p26mssxTLPozXHibNUV7gqVNYyBgqqTc6sDAnZxjFA7DubTzRFCj5jdFxUZTJyB9FkzCQCJcecnhLSGB7cnm4WV",
  "key15": "2EhJDxeTAzwTrtqFJNrprvVXcJ8GyPEPUoxbX2AFzSTbAgCvXXe12FQt4mRQnNSkxEPnV3bcenXwvRTir2NMmHGW",
  "key16": "25imsaVUr7cCNXbywpg4zLVkrCKJFZ977RMwHFD8J4c843Abb1cn4qouP2VPWhuRiySnzCmM3zryM97HfVjY4BXL",
  "key17": "3jnbDdQqm5Qk4aDbVWj8PNWDLTf13zoq8YkPnY2TGv2Xy6n1poBuYjGtvk9zmbFUdzhRm6eLn84My5xVNiEbFoiA",
  "key18": "5PNpPfCHBgyjsJnsYzDtu8B1FJtYLvURAQLaFizbf384PF7Uv5BcWgxdHJQ2GB2qmHGHJ2aBFovbTsg2EoepqtUh",
  "key19": "4kjijfeubHmFdi3o1fhXR2RebhYYymW8YnDMhUPGDZkY2dPBfGQuT5yEkpg5JwuK44jkyD4gtzrQoMThxeDKFqdR",
  "key20": "xfHzMjXT8rUxBs9kCvN7MsA8LJkfnf2nmQe57EbuwXUdyfekUnuCzU1YvsgF3GmUVPtyKfeHKpVaYGsjrRHNYpi",
  "key21": "ENEfBta8YBGCpcH7TYoXDRwKj6AWFrwzedPvCpPkj3ihXYcky2saKTEmYdj4MYQ4aUbb4wrWbWbNFfHwEyk713L",
  "key22": "4Sh6iTSHU4VX6C3t4GV5VRqp41t9oWtW5oTNT9JEPbkAK2XJYSmTyjyGuszjA4kDLyLbyrA3tqME3LdEfh8CFMhQ",
  "key23": "49gKUmbKdjYFh5RVjNVG4GxtccTBaWj3bXxnj5mdwgbMeqtU3gmcgeoRJv4Q8ef9fffg3HKGv84Yp6ohBAt8PKAf",
  "key24": "41YktfhPLYU8pGpZ5wNMagRkSzrGZFzaKTgyCNYsppN2BChQw6C1xJUyi36Jzm93Z9WWoHpwfKMxkGTvn4xVaJbv"
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
