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
    "iUMyoqUEynj7MeBrBJDpyZWpSCAPhnzUKeu42mzfV1sh7gwKuYeEmdkonCVTMwtm5NUuroW9F7MCvbtPpp48UzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T6uyKe8pxHhGVm2w265i92uqopNNMDMFSUG7W5ewF8LTwKograxH55Y7DWQmN39mbsqXHQjmBdo6NqrdBTK3fpX",
  "key1": "38aLr5Tmdnf7hKf1pm9LkAM2xtFRtjc812CYMe3T1LXNW6pdVWbUb5gLfDmg9t2pArJ9zqc1rQ1dCgcbTZeADXi3",
  "key2": "4Cqftq2haB4JYQVmDd2P2AngK11cTAYa3155jPSvjEMbTBoj6QQpVUon4Y5PhXY9k3nte6NHXJf4PGNPfVQPh8Ch",
  "key3": "2mhFRorv3gdBeNBog5MW5A6XyCKSBGQpMW2V7aYBvTCGiGC1EBXXY635mM9sqy1WssHDRudnPpAiRymREVFiLu32",
  "key4": "3jbujk6EeuP7djxqcQUVMav2XkXBx1KjpmqiciXwJ5rNXUqxCARHqYP88oRYJ7jYNrcrJmDsBFxSSa5GU5SCHWvm",
  "key5": "4qpkWGjcwS6thq2epvv2Nx1RP9GJcPifiifBEWJZ3ohA66JVZHmBUkPxjWbt32UNFf9bAaiMPmiVT23bTmfh2pw9",
  "key6": "3d6CRpcYgBv3kgUqsWB57zEphnK519zuSpmz5EHiFsWgLhdSmoGvakDSov1SCdmZioMqQVuptL2oxWKVTTF2wU4x",
  "key7": "2SqgyPPsZXNNPzyAjXYHTgaRU82aS2HdjqLvVtyzQStABHBXSHCAYwegcjjjdRfJcqrysnim1GwBsTe4RUAqZkWM",
  "key8": "2tqaFTx5gFSmbyDUi5xr8RCDJKy1Dy8YqxPgZupUqZodLe8tTzmnxrBqf68F6waN14cZc2j7mQJi2rfhJs4HPVc2",
  "key9": "2ijoLpFy7kgcFfk8KSxc2kZzbJ3UyeQpNAehFZLnvumuzhx4DkfZ3kK8JxcjtGUfiRqXBfTPouM6G1cMHKoTQpQi",
  "key10": "2AeFhkXaKCBCRfs5pwuBUUJrGsFvSom4Kg5GcPAMxTxKeHN9rXwHUoUaJq1356Av8XZPxvg7j1qsBnENjYdrFBKg",
  "key11": "28tjqJ529jKJhCFBn15MeAMgzQSorE1nooDsYwxS2BCp8z4TYiyhdWaKE6TrfzdbXzEQP98igZ17XUKvKMb7JcES",
  "key12": "4BaWS6M3T26ymns8ZBrho4tUnKrUvRX1JipXHdePLre3ehnwshVAYisGRFNA8TBUFwP51mgivfhsBqzCs3HmvkGS",
  "key13": "3yZ6bCnP6iyUB5mAQvVmByhsEoj4TBM4asJuztY7MGuoFHor8qsq3yeZg96bH1xPPxVEEDBNT3zMM6HhZ8k9ZFNw",
  "key14": "2TpYc29uckvoi4uGF7EZ35Y2mnXe2T7Ah3Do3wnvuZNHYNWXVKLJ2R4KMUWGeKm2ZSWHFXH4yN9mGdYDsknM4gGj",
  "key15": "3cFfMwZhJUcEk8XZtJGUzkDmHcjc3pY3oQuBuSQ4BnCT1phwqGbnzvDhPxh8XKwVcuCU5R1VrWWviHuCcTLSuj3j",
  "key16": "2cdkQFDYevGZucBUua26HG4UsL824eijsg5zHCGMj2p4Pn7qEjzXaRaeLSK7QEN6fmDziYopmyj9QMUeG5QePSji",
  "key17": "2FviW85kZe7J2EQz67wNNqMNiEyGBcw8krStmQgYYwAtHkoGjU7ANJfyBTLTahUSmNo7Qdp2THky1j94LTEiKDPD",
  "key18": "8LnuSVtGWVeLyw5cHPusAUuG4jq3E6FZK5mWGLzsme2GwKHoodwjP86fKURa7Gx2mUagUCAc5eRauiByhYtvuvA",
  "key19": "3kXPxCLY5uNNHGRBiFtZyEyrNvgtiGgAnFM9RjG8bvjrwaJ9kNRXBJPsqXg7KVRVoH95JRio5V4rBHpvEawgHPQ7",
  "key20": "EtVDdnFxiJTNdJ2hRm2dwiFUxstmkzzYut3oGtwYYEhhX3Tc9NrAtL9uCY53j72LxfSjH5jLUdg7v3DCTVwixMd",
  "key21": "2mRi66zTLM4SonQNJU2bJVySaseDPa38w9Cd2BybUxSRCXnL91gigH1U6XTY1B36JHMXZpJeWHkjecuqM4h6sjRf",
  "key22": "2JyjWBDyttZnNQRTe1PtaqkUCVMe9qiHoA6YmRgkbxonJMdA9zMDarZuW7g6njcf4635BDHjXkEM734EYYA4GdXw",
  "key23": "647dyam7H2bYb6vnCvNpBJoTh3CVn9u2YkFzbGRszJCQ1VVwSDAs3TF5sLRQ6vXCDF5EwmSJp48gkVaLDxJ9ezSR",
  "key24": "DKpyW8Hy9F2H6aiLjiXzrq7bbcuGQigq497zZdfUHSQo6JfmUK5qx6Dhn2Ud2TwbtSzgyq6jhNsUL79BudDJuaM",
  "key25": "3WYFsvbktrvLKt8QgjxHi5Meg2qX9TovKm2QuSPqZvoXtCygwNUqVevP8MUUSujNk3JtxFgUNqm1bYCXwj8ewuRy",
  "key26": "59GJCtn775DJhF3FJBU8V9EUGLVh7F2WHKcpfoRbUitG7REXvE8H4yHWkSXEWbks3x156R3aZ2Wksb6YgRKQKJwe",
  "key27": "42vfHLuEL5S7XBeZN86fHusBYv9MxgjwQQdnteyviU84kaQgNPYCAQ8LodSWPYwqWobvLzqVXAjEjZTDYHUqv3Eu"
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
