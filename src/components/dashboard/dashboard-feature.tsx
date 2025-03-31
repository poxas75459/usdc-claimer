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
    "QecqoeTtUGC5gDLdscthfx2H9hyYD7PC1AcnMJaYCsDEV8Yxz6hEXwjYgbVVNVAL6ns7K2Q6V9wcMpkz4wPw3rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5txvdojGxYJ42dQPNCGgnen6w7VNFiswDmpEGnTXxhUJH7xhb5Xeg39rDWJ2zQfPoYwqq5zERSnj3eXyGDbdXJFQ",
  "key1": "4fCnr59uTbEV79LNFfGSPBKuRvH6Wm4ye5ubkjx1Xu1PE2BMVxu1bsZFXkDzCDvU3ap7DWqUvP1bNgwTKHeSXbxB",
  "key2": "4UqLHbEfW9RwDrEGxiNrwWenyysfAAYNzUVumV7TcsUHh8RwgKKkXeixfLmcNsf1wcr3n8QKL7vzjBoGDaR822Uo",
  "key3": "3VqMQYYWsRgo3sxcX6kmSqyBh6PKMgHcyy1kGraQuZshuWSrPkXuY95pkLpthb3L75Zy2Gjz2nPUwuamHhcP1V1x",
  "key4": "533jwjQcbCXLS1QCdh4JyqbWU7byfirqRiJgvBNuGzqrStaQYBLk7cRK3jEa1rvEAY54ud1b4VrvNQ5v7v2UNhqA",
  "key5": "28q5525HQCBkGmxzZdgL7BqPypakunv3j3rrZE2my4XeK7j8T8P6n9r3uyBEYEq2RMehUj1ruZLRmsVvTmLeMwJf",
  "key6": "5BKGWMNAKmN7muHEt1ip4BmFypJwRuYfELFq9TqN4QLsQBYnU5GkPyZhR3oo6bks1VU5NeRN8niK2ja6YFojU9Gg",
  "key7": "tTmMiEuBtxJZmdfYSFs7iMmmCufwtTnz76BsDA8NVfr6NHxdrDXhTpUbuLA9Kw49mtqtLVPHeGopjJMvh2UxSt6",
  "key8": "UUV5X7m1MhDiSQiqjVnx9B7fN2x7jKN9UqScXQzfLKptz5V3VD85HtpfSCSMz6byqNm1xjDRuswEmwVKmxUeqaV",
  "key9": "2u6FoDhqeKwBf588PfqwKVbYbN7vuAvFrBukfUF8djrVfX7mCf2xXWRmnLVdkYSRE1XSTdJkcyRLput7VdqGz5Sw",
  "key10": "54rKe7BNsJUrscB7KAH29YVq3VsqpEv9RwEqAmASXQpns1ebQHFuGvFoJHWA3df3PryTNHpQ2A9d91WxBrYxPGuV",
  "key11": "5u7BfuRsFHQrWyUAFRjRmQymKpThYfccZnBmn3nob964n2zZ7JQ6dJ5NeojECbeGpBgwKiMgMrtmacY2o6WCEBr9",
  "key12": "7Q3FhDjECaHbZQpAfGzfRViEQHSGb3UekNaPB2Y1siKhKGAgKiFeXCGKoNWYFR5uA3XfFaaEPW9EceQsP6AgVis",
  "key13": "Tu9jtqwbTw2zZLuek4pWUkT4jdKA8KAefYdkLCX3HydEUczbknk5aQkdTVKtAGdTHToZFRbTt1ZNUipDww8HPzN",
  "key14": "3htuzM29GEDPMDDhCmdobjywqgSTCXpMEnA72sDCoJ6j4PDK3c5Qc7p8XdinwGbx2b4tcfRBeWdJtctaoUMaCCK2",
  "key15": "4mnBQeSnJ2nfCN1vAgjEnarzGhQxM8YFuSxCZyxP2cusMzSeafXyibLWug2MBAL2PvqoSemyGQ48KLrUMwLBG5SB",
  "key16": "3nXhQsPCx1Eo4R8hDwQeE9CcyXpJbFfoPkfYyZJgCB2GR9dDyVTDpBUnErgrpLVthBskWdjBFptHKEeiza4jwEmm",
  "key17": "Q4KcGNSkjAqZgr7JJgsWMUc6qBb8omoLVwJF7JPEte31SJEBAnuuQC36Zc3DtBxVDmA1LpCaY8RVXj27fu9WN92",
  "key18": "2Fq3YiDWcBgtJWv4oE1m3gJucodoiTHNh8F2pBbyDjmAQPngx1Wn2h7RzuAm4tZG3mJSbEikqn1tx2CfsZtmEWSF",
  "key19": "5DWW9ZWtnX3oqcEnbgaFKMvdx9jt93wv5ZF3UB4iHTsqfhcZ4qT6c19hMaoEFrjFgQzJLWprc84mt6uQuDxMuxt5",
  "key20": "55MJWexAxgCxCUZfgpwpmWdtJGe5TawrqHQHXHECPHiZPruyrjiYqZKqtFEfz4Q8XtbFv8idmNgHVMm1XZ5yqAS6",
  "key21": "7jVrAntAWDE5YYXH9ZuSqCZE3fe5vTpDPXzqkF693j974FGWinb4cSgMWMcE42FHC8iJ4kVQaUCaUe26UYkQrCT",
  "key22": "ZB5yHzGgw17jW17NNYiX3yzQmB7tyTvxGd7X9rahxiTLLiMnnWyJkwGbFKitvu9UGTCC79jL3kjJVf11LxzpU3W",
  "key23": "5AubTVPH9idfzXQLKi7bxqgq8P8UXZR8n8ZJSHnBCyeKFtqkAGDQcnKfsknVeFA1eainF7CXNAyi9cj3VSf8Tpdc",
  "key24": "4gQpd11HCtJH15gaFA8aqG376v8owYLSQDWaAh4xAD9Lnp6gvFoX4CiHUa2Gih77NWwSps2PXK8JwPUU8n5DSTLa"
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
