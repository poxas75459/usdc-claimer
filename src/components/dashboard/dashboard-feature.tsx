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
    "3D5tTHRocrsY8L1Jx18pANfZvmYYn2E5vECejKwNaLCrjvvXDG9tt5kcCLxdHRLef9YrfLuT6uLha3BHC4NxBNLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZFTCKYKqYoxo8Fyjr21f2s9oUqhpQkEz9a61wZr2PLf7Tig2vBoAz8SfYJydurkQj1DJCqd2GAqH8Jr1zyKV4Wa",
  "key1": "5WKsU7QU3ZQ9ft3WD8WwfQfYgFSxBc1iPwaDemXub655AGdDAxGCe1Su5QG8wAviYfCoqVWrw7JD8V938pL66PBq",
  "key2": "2riRPV53YHQMnGddi441j3P2x2KwhjYZQ1fgKnvZhpMgguME7J526w3RzPL8A5zTubo42WddYkBaRa15KnxsfNbY",
  "key3": "3dpt1fRRZFmvd9it4nJfyz4z4d7Xh8E4ez4PnCS3yVy1c6YHGRu85HDMCp9y2jnUQ1Rt5Uz3zYsRLfC3gwDHNwEU",
  "key4": "LESEhNLbRAaZtTCdXSTBacFVYRbgaE5KmgTVfgiAWa1cUxErGDotinJHu6K8fuv16iJbQNMhDE1m9jg9YSSNZHy",
  "key5": "62aJZTuetpZtPPictGVTdp8eP1dcHYRgfymmhLCfiKqBHoVekSuLgdqgjAUeoBVoSLwy3husxns4qpyK57rDE3Ew",
  "key6": "2DscDBomHXGReCS1rsZfbCVXvnJaDubypsqRwPJPGBsDgbG4CF639hSbKKRYPHKWnisZVQFXQfLZhXfQ8knGGhhL",
  "key7": "4Si28ZvgRXPBsFS981YosenxcHxgN9GuYvSXjqsi7ozsRboqP333VMRxHWq6w2pc9aQV4SGuPFPMnG8RGUHq5ajL",
  "key8": "24MCJPLKRGAfu3nVY4sH94xpAdfRVXMKvmwQWDPEpdfmx1Zn5fyFaeaXDtN7GUeBNMMM9RTfLGHRTsTE2J1Gb2yM",
  "key9": "odRhuY92ftoLDGthmWEFgtawRyRtXU8ycSJAK5tu93v1FzSgmF4y62z9cCmeLb6nrcCGfTEfRUdUw1wrbJ4gLCx",
  "key10": "5DytjD1wz6fLfqosbSHCKxYDucrnMiXCkpcnXpXZH4RXKYRai8w6QVszpSGE1yeCZW2q8Z5m52ZRsEeMjvEGYuNk",
  "key11": "VVK8znG2yRtnjziLbps8wYdYLSWxVCDihkc64Va12ydSrfvW7ZMwykujzNCw7AsacaUSpbb6dqdNV4Zr28J3UtA",
  "key12": "4VRch5di1pHeUbxB1BrFre2W7Zn3bzMaKjav1cAqeVizdzBDiKeZTkjBgBTeKBznMxjYfHT2U28pSSqPNcVYKXaX",
  "key13": "2YfDWDtYD6QWWu9taaXUPVLKru35Che9LhbfbRyxGX2Koe1HDZi2dsQ7XcfCu3CsMobz7uBA1HRk6GkyHeqSXVcQ",
  "key14": "cr8S5vmNjSPvh3Wi5hFw46XMNgMxADQDTa5ewKooB2oETYBQQ3K6ALwzgwa4boBpnNZfDYRaczpNyS5eMbLqgvc",
  "key15": "5csd5y8xzq78jXueKzaC84p7L8FtzJiP1B73zQrTS2NwQWLgkKFTe8uN6yS9ppr7KbT8RK8gecvHdSPBnRqpVcs2",
  "key16": "Q14GgvWCGS4MGGnNAzEZpUAA4g2wd1wVSWwHeU8sxToSKxhdGrxW9x97Lu5ERDuPFRBs1TaDn8DBq3i5WrWi29X",
  "key17": "ekzgnBgpKyCC7bQKTaVwm31pXfWEW26Z4RsbhvjALitC2if6hBLYFnRvsZw6FqTpGpJcv42Pw9Gr22dPYC11Zr8",
  "key18": "4SDufZxxfa6minhdDcmxiMVszkm3F5QTWFcfL2wf8rkmQppiADsw332Ysnw4tFS4J7P9Hcp3kqjRuZ2NU45JSqoL",
  "key19": "2x7ngmSHMqjcLx4vrfzZBCAtdhBing8G4r5bL8k58fSEYMA5bUXPQQBWNcWz8aM5G1WD6TtMzZxkiyS3aLiUYbdD",
  "key20": "cWDLWtmD3xAtYecNa7MsRksVhx55JtqnPbShpCNsMwcoVYXRitSri4VAU3XHG8gpVSTypss9tk9YfMtXrShRrYx",
  "key21": "3fMwuW27i9cuKY7i6RfZiYoAAxfL8PQFcKGkYzvDM8an9fLVgW4v1GMst7wGTeVpoPx5DUBg2nwibenQJZDA76mY",
  "key22": "365fesV4VvYCvbf7CR5QDoyRQWWQ1TjHq8VxRxgGBDZMzjLfRZ81gnXWrPLqaF5La1upqZ2pRoDZwMRxp4qqxvv1",
  "key23": "674FHr2MruQFR6UbFqx5YSMQuw9qMgMdRzQfWt5KK1RpgUegDf4ouLxvWnEkZtdK3zD42eHzB9QbgXnTAJ3JVMHu",
  "key24": "3PBaaJGBiSbaXBH8YaNa5nNrC9v5BX5eYjspiU3dBwo9Hk9AfXee45Htb3vrps3s3Mt4WUcPzuJHoGcBJa88HMpo",
  "key25": "4auWR2s83cnxQhqjUnjekVJexX8BmkGPXxVffZcj4sFXxfNZFufg7wHcLVMWzUs8frKyPy6nz7mAE1bQKeeit4Dy",
  "key26": "5xeLgsyEUTEZ4C7cmu1pTU6ndKy2VAdNEoK3tArs2iMA3BdmKoF4kR2i9EwCaVk4GUmQXuKEK9pgLLg8Lua54mfA",
  "key27": "3E9BJa6Jdjh5jrPrLrrjnVKbwZm2nJXyWFz7YkoSFk3T4H4NJ8J6AAdyeqNXWDg3k94Kp3rHSVmjjuD3U1ubQzdU",
  "key28": "YYtJ9ZzcknJJe9ugbyosgt1VGhQekD4uLWUUHMBSeHmMCVuC4coUPYTicwcVMSYs8AotAbSSFd9fXz2vkToixKR"
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
