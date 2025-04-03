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
    "5n74ud53U6fGRWRDpUHNgRTjNjefFZX4m63tUh5kQabmnnRbstqZ5gGMWqpJL2vMAYM127ieZYST2ioRYQDceRCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jkCRvhWykD5aSRUvffdT6oYg3ZQK37njM97LUN1EzPxXD3HpeLScVfZ963CUYzz1cBrX6ipoq694NjLMpg8oTpU",
  "key1": "629sor9vmF2i3aVZKMeax5nF3sHGH8rPMxJrWkR1KPaGFzq2ujpHYb6Pz3R4C2nKVjWjdyy1p5xsnQktSawfsCEc",
  "key2": "2UskUsvYna5M1TS7i2cRn1uTrQr2MVycgasmUS9fopYpJi88ieU1T91z9xRvYXE7hPzSq46jv86X1YNDCiwaFAXg",
  "key3": "4AnGDRjC1PpndD1kHJmkQjFPuHS3jYwrn7Rm9kh9LYVqU1xgfWpHDw8ovouEceJykVqAjTy4F5bXAbaFHJNzC22U",
  "key4": "RDs9uQwwj9vWm15g3T3Qi1GWGSGD86Uhio6JQSokEqKcPjh9yqhFRx7W5Km3eUMDu2yHFab5uiY5YHTwNgRqcEg",
  "key5": "D5aUYtDK4WcRaJwEhByhiRW6w2hp9PFDYCeaErDuyZWgqjcH2xi9d2cgTH7iD4a2mjFDPmyhtezgpBh3pr7odqK",
  "key6": "m2qjKen85kBPUvLSMimLsBesp3jsRZgHgcpLN4HNAts4dt5ygnAXPf5Tw5mfQRLCY4grn5zY9P1gzLGCytHLuCT",
  "key7": "35HvSYAFMYLFNYFSoDtvtCKgpqH25R4UZDEsrsBK99wcu15gPVBUeoYuAadjvvkUhkYEMaY6A2mmkudxoMHoGWP6",
  "key8": "2mU7aifgdcquDo88ZcDraQDzpxzAyUWznNHso8ZkrSWhumJcaxWjg5qSYL83kBE73ivmMZvdK94GbxoXho6UCfgn",
  "key9": "5RG6sofpvafCJPFP64QvuRJyyhtNZqe99sHh6iPScCvHGxddc8gvQMLYZv76j3nXEigVsLai2JnRU3gf3h1hdQqT",
  "key10": "67mqKqwHo8PtzaPuqtaDGq3VF9xV4re8pSBoc2ZQBFBihAPMN9fKvR3ZgoXda97Cecc7weWQVrZxizKNG2UGd8sC",
  "key11": "5v4PYVe56Fog6s2GnaQ4iVRkhgTJBAZKKKoCnBu7bxro3E9fjwbadsKhWDA9AahCuDy2inb8wEC5JZVyAV4wA4HP",
  "key12": "2MkrSALdnajunpnTGrLapgD474YtVCoE64x3M8LxvX3rga6GEn7X9WvxNU8qb7zqofCZ19sjaXC9wxVft3s3UrnY",
  "key13": "2ntvpRP6uFKVkKc1E7yNqPWHYBgymfsxWfjt5WktxM5PwnVXxbJKZRsApZNrp4jiZ8gGdP2pjgE3xg9FToP6dSCQ",
  "key14": "3mFNT2HgQprxNgJ5iye7v3gcjAY59i4vDTFqXCStwCBp9Yjkjr3Lotr8Fw699w7qpJsMGi8ewiVDte5UC6dajUzb",
  "key15": "JeWRhQcjjsJP3MbBUhocWJgHziTA14uXdZbKrPCsiVYjpcnhc9tbRo3brhg9VTsMGJhpoo2WXGaN1RndpSpFfjX",
  "key16": "3Ns3McssZtCiTPa7bGj2yRtgoMDG3jUtATMdrtWu7QfQrRHfZQ1LwbRZtmspHH5XhaN2K86L7CPLWsVWKeubwKje",
  "key17": "5HMnQVL4Pi3Rpm2BHznGiLcLfHC82hD14H5e7VdX5EAsrDgVqwvYPRxgVnnQ5GXy3DwemN4hewEHrZbELUKXJjSN",
  "key18": "5uJTnZTpwu2p1JsTVW1z99Xspt6KoGar2iVdZ7F9oqmY1cdDnmeDvxDhM4nnqAVSG34M57Y3r6RBr92Rr5uutm5M",
  "key19": "3QSEW26FZMMYZ2ZYd4wKuEeUkm33CB67RpRDaxX1E3m24obz3kzeaLvu1X2jueSLQMJnuEDy976oPKCg31iydxjb",
  "key20": "i1xt9P42e2rP8jHAAsxzfUkNThSgP1qu7HUPLKjZXBXWHdf81BUL9NUKNm5cpfZKZX6Pk2KhkHewL4bfeBCiURR",
  "key21": "2TtzTN473LhpFJUMFojorZWfE9vUsLHmvz3bh7qhnBdSSuNEjGBZ8sGGRuEdKBTd25N6ZU4DNYnP4gaSAwAHQXGm",
  "key22": "4WMHK61dkmtSVUtx3Lus2bZXXEfjK5FErJPeAB4Z4iSQqTewt3ZGTU5RensWZxkJSgMSxWt2GRLFZK5h4STMqYmU",
  "key23": "5hvNC5AHbQ6zExSQnfm7HXPNqCDRMhMbuMoA86vWtfitZxpCNT3vBjjGy7oZ8jQP6MuR88F76eyf3hJqv89nBtou",
  "key24": "4yFvff37HchGqWDH9pSRTeJkYAfY28z6d9iF21NcEbgaHX9zEwUPFt5qxUtdmKwQP2qDjXe4ptugdQjQxLGaJ46n",
  "key25": "sZvS8GS8ojX1Xiw1R5EfFjJNYxrL8VftaKHum9AvebAdSCvWwn2VCDuMdHUuy4SFX74Lo7CnccYguLAopx8NRus",
  "key26": "2fb88w4BF7dKmQp7oeCTAh8QW3cSRUuq9ytnjEu5RA7FmB8EdmVUHYaMQEcZ8iDtH7byXBN2WV83m82oGT1YTG5h",
  "key27": "2ThJjJvcw76iuiz8FtyTwUyPEGNJM5ahv7yLSDxWZkrhjYi54DYJzJNRgHjAfob4owGfWtQyuhMszDaUiTC3Sujy",
  "key28": "2zattzvph2qerUVGcJ9kur8E35MPJboLXy9kXmqu5FVBntgt5BqDrHxfdwZHZNWDQmn8jipZBNmp8Jc2JVoLtr1c",
  "key29": "Ux5NjDbh1rM7WdRw5Z3gdU91wjwYZs1posmgWQ6VZPBx6SDvwQJ9dgqjubMhbS9y8tzbWagk1Foo518qMM1Xe8K",
  "key30": "5XHRC1gzFSeVbPeH5aHkbRxP91nYNwu4hfzrhUoHdyPvGxsi122qYuwMDU1yK8qmjUuoWBcAuM6iKkRoM2sW4e9R",
  "key31": "4PFGmy8ZhD2LB8PBMo1cBPjjX5RCwkz5Bv9E85aSvFD5mgwqHkeuvSbjnhFNvD6pg1iprpv7xrKKmKSfLAVeAS6Y"
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
