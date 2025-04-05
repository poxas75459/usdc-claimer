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
    "2hmaJJFayUcRtMYyCrAm54QyBgqN8y2A27SxoUi1gE1bSus9mY1wpnbC4BRvcH6hojCGkWQBFE4ovjYdfh1DcZAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bU8HkH2QBqhhbioxchVEojisW2CRgVVzMZFP4MEX27KG5Bg5KkEGtmwVg1LcBAXGG1ToB9ivqt2X4L8Da3igurG",
  "key1": "2jZNQEPENAHKPy4858utD5zPK9Xv4zfmi12kbYWAJvFFgki6wr4z9DMKmNRr8tK12HJpTjM49ZJyBGiiKAzKfHUS",
  "key2": "LiTa9mcV8hEGdGS46ijUKN75fcVtzRGGkAo1qVQaukyVjEVpcFTVz9JFCdrZCuWaSMh5x5u88tMpgkfgpkZzb4i",
  "key3": "5NxkQTrzPpVzW1AaDGAqQdCJ4ia3rt7Exsn675nADhsgERFMRn7HiyuYhLgNGUPYDJP8sEHbaVz72dXtxi81J54a",
  "key4": "pQ1HGYKSA8JrvaD1Y5FbFHgEsw6PrjLHJcEXCoG97GuiYMHxKUSYGH5BAiiQPYhc5aERjwdSJSXAHmDSduFAnkP",
  "key5": "5o8Ad3E9XnkaBAoJyCmYxBudBVVLFRebiWJXjX9N89H6e6HG4Sts7H6P2JJ98oGTP3jG8yDt1b2usbcA9dPNE1Kt",
  "key6": "32FhEamSEwGisAHTsTiahpYxJ2ehJMbgppwicgtvgzsJMrtp93YWsY9DxXuGsuqJsYi99Qm14bsk41BHQRxLsXa",
  "key7": "4niDBAXK3H38o2oNS72mcGGKCSpyw1UUgnrZKJu2PUMj7HePhoqYy5Sn8cfKWj2hHZnKk829b1zRrhH3yzPD72XP",
  "key8": "56NoqACMuhUX372XS9H2iskakWw1zB2nGgiuWqpTh2aBWJPQyRpiBubdzP3pPy73AzJL6is4aMHt7hz37e92DnMQ",
  "key9": "55ZTAaVr2GL8oVVfSb2isZi5XwcdWxs8jR9CTwYuHghNVafMm3eJgMgrUorBXe48GLxGR3qocxBHq2GdnkPRzQeN",
  "key10": "TvZtsscUkzvQL5LxpN3mkDcF2Cv1zQ5CdVu1dyeaARXaEL92TdbZ3hsf75ccPPvmAnT2KLDLhufnywCPRJkwfVw",
  "key11": "5EszpLojiwiMDAHKsdtH6BGGP8h8v7hcSGBqEgKscsvoGfroUPRaPbcgK6p8xSqe2QqKWZbmVNpHGqQXy9wa6XoY",
  "key12": "4QGXt8Nef6kupeUEmBGbHa6vV5QX8Knw8UCYjkSHNVvejLjsMCp1a5B2JMfSHWCaJhFhLAry9WzSGGfg3vQEiWAT",
  "key13": "2jvvcxcF1BBK4bNrpsm3SJXbQSvptyRDMZTr7P15hRSQgEB3741R92rz1kiJsYkZkSezrY36MsGKm7pAeLTc6Lm7",
  "key14": "2JVZ9ayfVASBFL7P9ftBat2rMeoYyv1DjyoBfX9bEY9CJFHfJQ865UfYhhsqCma7Hgz9FZ2E4epkhg39GXE9i51p",
  "key15": "2aTWx4DqaCiu6wyvZXR2LtzDMhtCNEuT5BNnAqXeDp2hqvodD2Uv3U5Lsbt4DWVZdSPZnb5AhdMJQy4LWrzkduNK",
  "key16": "2nGWDZ2RMvh8C43GLPktwVP4kQPGTpVnN77wkARiHRT46Npmrn1CXUECVBMbBqkw21F2yaqMNrbtpzvHLU6b7zk9",
  "key17": "5adEzNavi6QFH5YXuE4WL19vrokPcCFeN9pxNqAgRuw1eNDktTjbAWsgvt64TfrjPfyigWfEXmy6E63PMpjLiyoz",
  "key18": "5KcKvrbgR5HwmnKzuXPScNGXyazA5WkiQn1ZQx5brcVtTpEp8TYpZAa1GatonLUbsrKLtg2GywEkBKCCw2vhckfJ",
  "key19": "4DuUz2Vo9wtsbfFWQRr9UPT1cqdGfGr5HPKeBP9vUCYUcTpUXAiecwHZP64rT9LrczL7av5sizKKTGTRpsLSYWMa",
  "key20": "5yY9Lcy4wvGdCVN2SsGFTG63xdXzrLuAVLPWVTsUWQ7BnqBrWhwfeatZsqCydfVDx7vefqahkUUVhNSTozvc6mTB",
  "key21": "2p9cwG9PWnSHS9zbbSPsQ9WnU7PHMYKWn9MJ3UVYVziqapXhVjeYuaDHz5Aa4oJWkwQUvFZNo3vb5nmpKvHCd7NP",
  "key22": "3tj1y3cMj2sMnLgWcZ58bW2veq9EFB8jT7toBhdcMTDVFk6AaCp4Yowf7EuHUccXEKVdUdabCVjh7aLsp8xiFsfz",
  "key23": "5ricpkh1C7Mw3XM9CCAAEUVZe8XWNTBLveUbfiHvAjyBQCMV1SDiKnyiFUN4xLeZqkrCRLHok6cXs57jRDYSTiWz",
  "key24": "3NQKTHjbH8gdnjNPLS1d1615v1Srx3b1MX8S1tNckNqWTXUXycFz1vNME9jtmEHj2ris4J83sJsV34FkYaCVBFeA",
  "key25": "2sUFTKgKmn3UTvmvR1Pecye5KmF5EypSk7d5Qcmn6SLtBTab3Yf2YkTNnLCZyCegSAN78BeC4HjkyKV7MApECqkq",
  "key26": "34T7rVsxcQxhH4DciALT8tuNCanJi9hukz2FdqHJpdsrUQnPD9auKhuWywmKHwcR1UxTB4s21pcV5Cc16VVNiJaT"
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
