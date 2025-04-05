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
    "3JJU7cQK9xz6TwSfh3B1KPMLgbnR1MCb83cRQvKrFD4SbeeyZZ5yC1oqaoW5GohjqV7a4fZJXkJPNS8Y7cLGBUJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bq3TZq1dkkEBvD4LTkCPNud5LV8u259Z7Gz8Yq8NCUFKEG7f9T98uSVtMKVBrm6Ed13af5vqaXBv29uLqtxoHEP",
  "key1": "5jq2QZRtBv7VabfmphEfWoBNpjXWu4LzhDsTsgvmacCEHA7Ddr82UWVNhhFsKgXj7UqqZtxL9XcsWgrNsUBMVdg",
  "key2": "5jW7VfZ13RMAKDWKB7ipFnGeMbXYRdZGS6KxpWVrXRxVEVuwbYHxdLBPqn6sd5R1gvqHeJAsCP2dMq76y6gjpKNo",
  "key3": "3oF8z5Kx4GrgtLB7pccNuRB45r5uT4h9K4We9QsYQRcrLWm1cdhHrk4oudX5FoqgKDdfRMgfeZEKbcHCYQ3FJ3KM",
  "key4": "5yFT1sZDJkKV6AZcy9cZxzBmhqymUC1CWddaUMAzxPnDenQQ16U5Qmpn5DSr5HyMVS1LXspM9ZHSBN8dSv1h67Ry",
  "key5": "5HvmTgjgrhVr6kSuE3ykE4g3pfxs5hkdsAba6PveNcHr38FtzSrh3b9Mc9n463jfAfzDEz9VAkSf3bCsaCXb74hf",
  "key6": "5LWXF9uvwzcr8asWiTB7aCeMU5GgNHbFwrvu7EFHu8pVQ3GLkAi1MFh3nsVmQvFgq8HWt1weehMrL5nvkH6MwtKA",
  "key7": "wdAwFvae4h4Pb2hfpZhra7VTTci8TYbQpVxvxnZ6yhaDFadV1NUWL5967s6VxQiua5RjyHGAJYwbZ3ioAUaxXfa",
  "key8": "DMKU5iy9SptLPYkW4AKkvBBDJ6Ec7dg2BzkNHZHxQAq11UeUg27oYGdWQD29qeBXRtJX3mccE3NcUStCaxwfB5r",
  "key9": "3RLa1EUiaorgxZiyx5puAngNgrCYQXrbRu7Hhjd9hizq8VA2Uvcai9XwMot4nriKaT1hVxX5nc1Vk4pKSCepS86j",
  "key10": "2P7K4sf3YM8tqKPSRTjoM9K28QY2r1cxCRBtD23mxrK9eY2sq9BQoh15N72QCdK7mnB2wjqxRjhfu7BUSb3ZQuU4",
  "key11": "5yuw6pTQ6oZr5CeVuJaKGebeEP9rWKVNxuQAHSheocBLAiASAapGnHn7ba7bDvouMcHEtDhe1vqSqBJWwZowtods",
  "key12": "2W2yC7sMDAcB4f3wyN8pZ6A3sCqpL9DZ37VNCyXYjcuwmiU5FRvPAGXrj3ZvpW7tp2iZJkKAtdtda3Fouz86iqXJ",
  "key13": "3DkBG3VpP5iPE6SkdgtjzRGWL75z14HkMSbesyn4R9GMMnMjjTCVYSUb2WMoiPYhDiMN5KnxCt1a7xvCX1G2HCcb",
  "key14": "3Q6VohwntNCik97TgFTPVLXjvUiBcfAFzSDrp3Rxht3WNcZqoAEu7Q7fWpGiGS5UvZvBZV4Bn72DcU7iNdgdv3jk",
  "key15": "4oxJ9DiFwYZLByNYFwoSWitgxhXVyjATeDQkwT4t8EJ2DKd6XmCL3ikep7h4WWwXyoWfR1fMMNbyBVcKdmanpPNa",
  "key16": "47wh6HH7uBZop2kUtYy4K4F4u2zR1mUDC12NCzFy3mhguSdGnSaDqQhbSE4DXs3iQHJafpJo7USqLeaRx3XuHFoR",
  "key17": "KntPpFUPsktPPfv9C6MKtYvuPWsqW3kt3TdoXaf4aZaZKCzRiUoBVpQBzYku3Y8T41WXLoLH3Akk8DGPHjk1Phj",
  "key18": "3vyZ7GtsFLGcaByKt4G4FzmaQaWDRbYhaHVkep9Y4WunLFaZ2CfwsFUVBnp134eC1AxApmnU8Dy16kw4VPNKmwaq",
  "key19": "53CHbk7sqpMdUV25D75nnvNhjJm23UR8oLDnK5gtLm7XTQMFvWRjyq4k5w6eEoyExc4yLg2DqXmpqnWxs1REoUko",
  "key20": "NsSV16FHumg5TkhGy2fnHefSxm1s6yqKH752CCz6pt338Sqtr7EH94bDnPHNQ9srL5vCcjohzfXHHxTjVK9C7y2",
  "key21": "3o9PZek4NdXdiarNEq1zEiN78bGB1nNbmUWiCjwN124M42jANPSvunSNgmris5nVWBREqNBicqHt6U28nMksPtNR",
  "key22": "4DXuVH8p8fi24uvu8orBYaBQRa1mktqXVTLao85VUFeoHKTVa2VWbxJ9Egj7m7WAWAVsaznWgLaF685JRaempK7A",
  "key23": "4tL9qpUE8oFL1L6XECqXBALybw4QJnRLWVnYkpeMtE6E6WDCunpgNp6egRU6s6hqAMf6uvXSfgunTZsi49LiDaAf",
  "key24": "38Vw3vLsaKHD2E6Z8NATppucthrFrkRQsGJGgrETCVG5H4p69EQmDvhqzDM19ALQsnt6JmRVDrw6W5JJY2v71bng",
  "key25": "3vGmdoJGfsFoy25Hi4gjLXHTeUhhDFJnVGaAp899Wzui8FWvPW1LGKpRW5VbtiNTWi3cp1KsyqFH6ERaBVF8vinR",
  "key26": "4TAcz4gZsJfFrNnPe1sDax5y7ERByEgPyTjPK5Qjv1DwzC8jNnnijhFTW5v4dHXEvPTvZHQ361yCTkZ6w8TwMYoX",
  "key27": "4sgtfC1mNifPzwCyYBKcvn3ecRbzhCb65zhyWCWSzvj3FkN2mJQXen9PTQUSKSRHa1ZmypP7LYyZ9Xc1ck6oKHtE",
  "key28": "3fd6NhjPGDv3Tbpz3zY7fDkqdzNqtVSUmTDPoWoKhBEhvtVrReY66bt4ALv6ZWyLeiQfQ7roYTn3u1kaisAoFmsY",
  "key29": "2A7Yv6Lx6Gh3syNV8s1MK7FNMAuFzbej6jjxXWCxEZyd1WYDFvZGMu4D6Nv9yp9R8WiQyBy6xmKamNtQBSeJRXPN",
  "key30": "3HnzogRN2NeBPxruBMbSCAsew1CeaHy5Hx7hNqDdTKuAkQ7LY3C2h7RoVNGq8fRoSvbxQMw3gKBK1MiByn4fSyk1",
  "key31": "64i8KebC5H7GJUhstR7x5sY2S8XVCNH1NADz1doWxCxpAzzZt4mEnX7NBxUJzL4A8wt8bRFC6cZZG5XzFyhA5Ngi",
  "key32": "59RMD7daVQ72VjEoqB1HrVp1Z9p6fB8iYDypER1EMXP9AQEqKkp2xbnYeMHd35bJD3wATL53FRgP547pPMDoSvhS",
  "key33": "5wPmApkyXiutzRMfumF19BB1JihEhcJdBvNYccT2Dq3fRpSLtiNjxRoVxAzHN2hN8gz8QDNJw3WausgNsXnnWoon",
  "key34": "5HadzSYik3syoGmEHjmJaNoQQZzXHvhPULqgqEPBj6K4aQQhZauL5U7XTyaRBRGYnXXgpBE2oB7QEN83dV4J2G19",
  "key35": "2mzyfTib2mGREnk5L3i68hTVA51M3oLE4m9ebjYkbuLRB3D3x3T4Cxr92bWwt8avxgueuPQd31QRpJLCFcpZX5uc",
  "key36": "3drtvU2zKrkNJ78XvgFArBzjUiTNCk8C2yd4ChPfrqWx2n35dNVGXhw53S8SVFCmydNCvVduf7KLfeT4PRUxkco",
  "key37": "29veNmVnkSjnfbBN7mUAgVij82uMgWwK1tUsFiRwV4RpQZuJvYuNXiYCctQBv6YLD9EzbALVeXJVWA9X3VL9VRzi",
  "key38": "4uyofTgbuCD6sCXae6ZNU6WCstjaH1AGP5QBjBTVNYbdv6gxvcAsorZh6tX2v2mLHpS39t3EFaoL7YVUbyVgUu5W",
  "key39": "2kjwqYgaxmX5LiuRUT2WCVmEwV8uLTRPu4RHgEnAgmceHgZY37UfHVakn4Hb9ShyNFaNiub6SNZDfFQ3Kx1FaiXE",
  "key40": "3DSEHzUcGw9HXednVabhCVSHSgZ6Hz2VQBzQabpZfZj7SFtbxAL8YAtCKXkdMeesW41Q7kgPP555BF8boq13q1QA",
  "key41": "5RAHCdoELPe31KCNPptW8fZoWxEDNFY4d7bLH8sehqQ1u9nGJiDffBGDPzJEheab2kseDwdpUuLTQXQnJmgSfXyQ",
  "key42": "5FD8TwKFRiBA1yawavbeHZGysEmwkTTWJ5KdPQo8AyMd41RdaRHhmPMxc33qW3zmRXwrHZxZCYY2mciuzSVSkDDh",
  "key43": "n3KDMiEsk5MqrT9YXbN7LWx3rMaXkUGwdv2uhBuZMbAPZkqn81ANMokkYHvuBuEPvu5SyL6mBGjBALGXnugRrK3",
  "key44": "4Z1YiBonxg7v2xNALqrQEx25WgUo8dbixo6wucTRTcDRcubyinJpoTn92m75TE1v56pwTNLveF7Hp39uNKEY7Z3o",
  "key45": "4SPum6DiXgZpaw6qcQ92GhE1XSVDCbrK54eBRdFzXscCJzL7o26uwvz3KC4DbnUeB8iVzxQVhmKxWLwbFCLEvuBc",
  "key46": "5XS2ztFojDd6QmmCYf1HV3cno7n5viwSMEJN4UunscwCUaNg7mfRTYwg83LpgRXb3pF6YTfyckJ9DEZogfPYxWms"
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
