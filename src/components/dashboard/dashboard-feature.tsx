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
    "3M5LVeVpR31hQhhLEbjdLmwzuknYfsHCdEpfJZ2Q3VMj1Aj2x6E3sx9AjKTDCXFvoPEa4j7z4LDaeDUdLaGFWbVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bEPFKj8e2w7Aen2DpFV5HAVJi6z6xWc3npiw8cEVRpgfTzET5MH5DGnKGBr6icUuAwTshEXxg3qcNf7ozaaAoAC",
  "key1": "5NdGMi5uiLv6qrgRo8Y6XT9rcp8iVu3e1dAYWGLSfV2aE1yyuPKSVRoSzNCyJz85CvepSRVdsmoXSFh5p9mzaKDi",
  "key2": "4Fb9EEtWLsvadUQkvfdaW3duN75Rm22xK7uNwo9GxNBrse7dxe5FmG7wau7Yzepd2MiAur3kkqPDX9V3nT7dmDTw",
  "key3": "2A6rSFa1H7V1Kg19AjZxUH2eKwcESMwEEdnHE1D5gmjTYuGrvmLwccdiaD5CnE8ce4GKAZLauSN6sHKxiMp6RNA9",
  "key4": "JjHqg8QfhH68UfxrNyAAgom5DBNE2Ywb2eLoxudZEcoWeP9mACCL1LXAY4F5DLqtpcYtzfrbMPYqwknzzQf9PAe",
  "key5": "jufHhjRQBJke5X6FyMCRRKiBWR4X67urJ9SBVW1BjtMvo4eKWYxWWpLQjC2WC4AV43fy99Zy7YDrvbzh7wqNFp8",
  "key6": "3nSfwXNGgEqd427YQnrr1NhGyZpLANwkjXWMBZgQvuFMwVpcKJjc565dhxHqg1dNV53rPyMiJP1YCmxhMLEw9ZEu",
  "key7": "yoeSWeYguGgvGQkXqDCFw4KZSQsd98nbAMEY5NgC1Hh9Vnf24aC1qNw3xi96YtWZDjCvGefj155xrwJnpM7wTDh",
  "key8": "3DqAWjoT34HVkKVePm1dHnVm2Ezu5fsUjmPqqYiPKRhxHVGgSBAu2iTMjcTSWuMLuKAMAMPhFjiDpFoiwoXhwxkJ",
  "key9": "413rjsQmpGxXufoi1ucfvx74sFgg1Kze5ZWunaxWEaPcL6ZR1Jxf7EZX2s4FDEJqdaBHF5Z1EW8ihiYZQchNzS62",
  "key10": "5NMAguNoXW2RpMSN9UgRChMLxJ91Kvf9XZdsq1vunGH88mvvSPXEtJH4jQSTWDk2gomzaQW3YHghLeGLqQHAA6VY",
  "key11": "eCr9c7crKQ9Vjh8RCJZP4g31CEz97qGgEPJyiFnPvDpCo3DCsqhbKFp9B5ge4nkG4wTnfcrzrwHUZiDKag8zSJv",
  "key12": "nVTvdPdpJqphx2L5aK74W7tP2YH4juxrKLJHAnUmuXzwumSYaaweUsYT3jNBt2M1AWCXbYwfmjXPJN5Kk5yCxHv",
  "key13": "2HfQpWm7PfDmphJEkW22Pp6iyvWiciiNTTCmP5yFiUNFWmzS8JYWyrJG7zdJtE97mJURvgFZzbB27wPyM3D5RQX4",
  "key14": "4KKnbxX444vcz6emLtQLX8Nam1J2ZCKZM7nNeSuqZAchjD9unKL8b2gkgsrzQTnhzfEDFyePyovvNvrG1P7xoSLe",
  "key15": "5rFYsVWXUPC4LEPGXKqm4ipXtPuNUX4nhz6g71g6f7BU7eXyCqqksaGTfonPhJXXYZfZSKUi8mehKZxNY1g8qvxz",
  "key16": "42a7vpAzmzQcY2sVXqBJoJSoadUfKoCLeGGHU4zSM5fX5wj4rViq7F5vRcHiMaPwfwNqaAkpVRpeFDnY4Eh6i5qt",
  "key17": "3GkJ6XW8Eq2czCJGwCjMUxaCbVmMcN2r1x5BWFipCHj4bEpwDSWHTMz49GXa1mTbxSHRGVxniWasf95hFTpSuYoU",
  "key18": "5zAWA254RMJUbmXyN61HGT8FrxCgyJDiABGkdzrEQCZ2ZJXCEbDfJ84WvfM4CA9VA7PZuCQXfzZ71cqDZj9t1avi",
  "key19": "DX6cyTnFwEsspZGEVzEGyTWuj2N43kuBaX4zkdoCYkmCSALeybYc8zgRoePJYB42ozL1dSMmogieA7zqk619B2z",
  "key20": "DGHHJaCorFFXDZd58hyToZCWresfHbj1pRDsqYCiV5u1HWC629RRr7p1wgevRR7AohuvPirMZe7HsNiDs2M5tyD",
  "key21": "311ELXJ4cuMESQ9PrzP7GUKA3Frzs4vPxF125j3cAnCUcfDpi21FXr2g25X57jnCCfLs64sFzQJ2ZMZfTYfhwH3J",
  "key22": "2aYT5xgbmvNZtBd7NzkNTqy5ndx3aKDHxhbNjGsquWxPmiXEV8tPcCtnoPzoVUW3xpbCTmYZxHMxnW9D9CUSpekL",
  "key23": "4s1RyNs7tDoeM91UxCatJs624g8nbeJRJQVEwE6rkGQgxrkfqtNpszBZaRTAWzAmPuD3mgRne4Mr6BwSiqExG1cd",
  "key24": "23xHTmFDRRZ9NV1nCUW7HUWcND9ny6iXLqnyZBSwKSQRaGPB8dyQ5ZX8wwCBYLuS45q6FxZMPy2zsWdQPNBYtVMp",
  "key25": "yPMpKD9rsp4KNXR2dQgyMbzoyAD6pkbfjjUAYrnAstGyxCpWibUgvzfZwa71gbDnoiBjidw9q7WKoTFEwVKcxB4",
  "key26": "5srZTh6Sq4BfeTAVggBt1q4YictVKk1zPdUJdRZaXMZJ12KpmgALhsRocuuWUmMMgsrpTXXkMNNzWAPgYJhWGgrB",
  "key27": "4vnNYxPhrMiwp5t8f5nPj757W2UGUXmsp92SfZPYpTPJZ7qHvPWwE7vcpAkgetBnFE1BQwbcwmQpwwwRC4FiJ2ph",
  "key28": "37fexfThGzfYfJ8STRewhZDagsyxFUdXPocwPWpdGYzpVKRBZocbACo4s4CSL6MQ6iQTxFPWdmpTpD9H2nWKLTKZ"
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
