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
    "55AQ4EZoXunTgin1tCdmiGisppVDdrup4b6ekaC7Rmz8fNFDMaLYdbrNiT57mrtFZ2ZxcLjgPBTmwBG7EjmJebC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RwwUNM2yfDN7i5Dwngkmum4Frm7K8s5b4dmm3UiD1smgpVYsNDZ7LvfshzBksBMXcrzVfAnH3ewYkqrebyBpdpi",
  "key1": "poX7LoCjdbtYdW5PadEQpi2t7vuhxih26h6feYraQUzXqjqisKczuds99ARqvbYPfhzkAaMsBFSN7UfXYFPRL6X",
  "key2": "23bRjZVqkLuzNJqA2cNCaCAt5CjuFrsaJ1doV6VqUM87Z4JUyCkueE9yfRX1y1NpBAiUxbRpnRFuHgjCP83yfbW6",
  "key3": "V4qNQiFPhXZEkz4iFu4PCHonMFkNuSRxCNu1qiyq4kh7QkTsyBhY5Pz4a3fGsJ7CFqWtD2vULFdU5hQiJ9LviLk",
  "key4": "tnMJqJc92oAjdE4MegRBZZ2jh9Jh9Xz3yM1635ucwkCBZivCct2pQtGMVUei2P9X6whob8EKqyMyBrbxHqhU9Gs",
  "key5": "5Hp2sRoSRPEAmihkEUjEFRmzWD9KMiX8ammGCMoQokfXbX7ENCqe85fjPSQFbM8ML1C2HBd2Spo3AJ6jjHFShF15",
  "key6": "2uUe66C4dazRYJqJp49vKUiWPkwoVYrCDZbX26R9z5rRnc4rZTMsiaTVerk8fUh1sbjHVUQGdEmw7U3NTyJVXxYo",
  "key7": "4o2jrpRTd2Hqa5kAg3ZpPdhedR8qZiSSCXs5stnSEhwNrNGXgsHvnq4Z7G3ZKB3X341VavELXmftY5dR3d55mxf4",
  "key8": "5NWDNUouUajnv33SAN2PU7gncZwKypFuFrqh9QXQdW921eoXV1kucQsFssxfphpg8bQAiBhkT1coKh569SjMMW73",
  "key9": "K2ZNDHfzt5HSCqkBAdqAjotcTTjLNKnbxwHqWSLPPSYPaHWBmkDXwsCszcHtHnRGfVxW7WqRqQdHC2Z1BMVxxxU",
  "key10": "5vkEcHT7bxXA9LvPNNyKoczNYAqLvw1kyZR2A6H2ShD8pP2B22JAiSjeTq77a5ig3UGE98jeAdRCxuyYPHmD1S7i",
  "key11": "26cn9r4TK2xSS6PjzaDEvENfxGyC9J9Vm9TC6F4dbqHsJxc5yAwSfND3CRPzbo2t3p7bDhmreTE3GsF1HMz2zmgs",
  "key12": "2h4gvQw4iJGRZEjAJTWpBszrR3FY4R5ru6hPnNSHuof6TXxjU5vr2T5LVeyTXbFDeL9SYQbXhMUec6Z78ELCDLeS",
  "key13": "2SKZ7zkHBAuJn7wuUeuawC7gDPyQF9dWbkvEfGrkK2zwKtURFMzhw11sgvd7U7wbwL6DonMMPD88uJaTkDSYDXdD",
  "key14": "8kU2PkXKCT78fzQGi7rtREcR1EXKzBrj1MraFsaGVS2wEHacwoLt8v18fVhberAaV22fdo9zASGVS8YuphKu5Vw",
  "key15": "FL9w9mEM5FrAbgjZ5zBz2LwGc1Y1WXt5jE3kyoXfXndo5ztViAQhwpHtBygLqU9yQooSW9UybdotP99dBmS2Lwd",
  "key16": "34k1FUgo6f4QztW8YuoEtU1qyRdVQ3GmcEdnF9y3jYgqc8GSK9AuSohT7WnRSNLGYhpu9R4CHhYvWmZ9ef8n7efz",
  "key17": "4baQx5RmAmsyN6bUSbLr9k9jg8Nb5vKDdmLfhQX9Q425jHyHBp5a8fHWsvHunfgSzTbogTSGG5Eh5V4yRh5D9x2f",
  "key18": "pbEUqLvTKZSWc5mSn6MPuSuj9yoHiZb8R4PW36sAzW4F17GtY2J74HC5DwjT56YmL83a2r1iX8ViP5XwrS3HUPf",
  "key19": "2gAJWizzkw7ARh4scss3N47ZMmBkWo9GFEvA5MDXJVmSfoZRBA1j9J94xnwoMEPm3X2aRhWNrcRZeq6V233QeMJy",
  "key20": "5jvgQgSpLYqX3CHMUQPH7R3MWCFjnjfgcSK7XokM1rP6iLg3wz3T4GUNbyeQhzSAzYhceFscpQ9a5b5LAMBcG4Zt",
  "key21": "4x9JSM7RYupUMMkafeiR5FGPeHykD5voWkAFAnXKRUhYPA8vH2xJtJ99vCZ5eXwstSh4vCCTtHMLg6yHr3dBgcG7",
  "key22": "65dTMGU3TJGBmjagJFGUKfQjzgfk5TRgVF35PHZJzrj7QKDNkoU3E8VKaD7XSkKhvbmVAxVX5NqB3cXm23gmmGvH",
  "key23": "5qMhV4jjxw3ou9q27BX5Vnrd7uwWVzhavhyK3gtt7cVq9jtdNswGMF41Xh9ei11pQb4fJ9khTng1XUchqymM2rsc",
  "key24": "5MMwMQi5qh2ZcKs4ZHthsg1an51hePtKNk8Dgmn1ss6QZQsvEUNWRoZwYrYkp3NEKA9rddf47uHXDaKcupn6KRvM",
  "key25": "4mzLoaDPEHM2HafqnnGSWiGn2Hd5MZFRKrg9dHz2CXijznrHMMyaDvYizpQmQrUpCckEK8WTn9dxUmPG5DoWDEVH"
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
