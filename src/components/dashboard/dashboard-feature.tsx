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
    "3Zu38wiH4oQAXkRqFY7TRFLtVxevr1Y57ZSEwAz3mZKe4fKk6wkh3R1jiYnn9Zqw31xnKE4QmJRguZe5bH8dF9A5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ah4cqaut5Jf3Yqzck2H7nk9Jdgrar6qzmbeQTfBXra7C9cxV6et5Qk66ypQSivbzxKDLLLyVkEruyiwLhLRu6ji",
  "key1": "382DGaRn7kYN4dJrqkU8YeqQzhCyeDq9NdY1dRQqBb5ErCx81NN4i38DMeEGCseBKioxf11tiyrJeWyJr3pECcZm",
  "key2": "3oA827q26c4Q9yvMEGUmupEedbwtJAo77zYgZNm95is3RttiVfWk6cA9qcn95hqSxfQz87K8vxu5b3hAsTWeeSgS",
  "key3": "5wveyrUGQZptBSUh8V4FFQpHUcUSQcCZ7VEx7buCXcLfTdm5aMhptb3uedMvN4AaHq5FmcyhhFAms5LH3uK9rypM",
  "key4": "2GF8NfLWaJxikd5UCuXQvyJjLkxiA8WYouA9XbSDnErDzFEH4o1bWW7brqXgdNwXRrbNXfLjBbanUXccNsS4FXJA",
  "key5": "3s6BNsDY58Eo9ouHBue7dPJppRNM3vz2xTYX9HTqXiqPLavt8nJ97aF5MsEo7eTs8qJMH1yFm7zv3YtQypJ2zwUe",
  "key6": "2HLfH48cu5J1gPoaBttGeywmytyU3F5HFiZN2j5ZEcdE9zrCjrAEeNQuF4QvaR8fjigeKNejN59Qw7BeAfm8TV4r",
  "key7": "45GV7K3nxBp1xDspsaPdAvVpcpfqKrxV94SYduiwiAPT53AhyMEfF6LhL85zPWho1Bbct5LMXkyxqxmbsFc5pgvp",
  "key8": "5UrT1xctUXNjFCXvCYeJZRw126WkWsAtQVXecwTvjKnUsM4VoUHKji82dmZLGjKtGfr941VkrVPn7cASEVe8TVEL",
  "key9": "4gAxLjAn7oZKqrJP8v7ZhMa5rbazzHUiGECtHQxSmWEQ8rjPLhebQgzRAoy989Sk7WGsSp3L3PX9zKe3sX6dciDQ",
  "key10": "4Fi7kQqhpkFM6ueLzaMSZbY3z5EHGAnhaVSdRQ6rwvgefGx5gfgH8wfXMtwPiUdeyi6bLoi2vtr75iPvvt7HW2pb",
  "key11": "4wsU57313bUdqknAMSuGnbpYyu9EKakxjpVh26PfzfAQgEeKjvUkHPtMMG34snFaHLoyQU6U7CpAY8og4Tb9YQsC",
  "key12": "3AeMPCv1rhCoRmpqhDjhEESM5bU8feizpoPP9Hj7XwXe9Gtzo33wN6URCeBbcnFjSvZz8ypSLrL7sqyp7yzeJAnY",
  "key13": "3bGiFhkU97S7AK1E2ruWMHwGeCgUPgHH7Ze581qj4xqUkNjGRt9e4ByCSirAMToT9wsXSaXhW2GMas7Wd9JdMjvM",
  "key14": "46UuNnouFC5Ef1JsEjuFDcP4mGkAM2PpYhRvCLUs1eAbVuchLKmHSQjQRsbAU7w8fAvRHFqzT6t8hUE5huY9JAeo",
  "key15": "97pRwog9SNiR4BjLDoVT4KTD7c3ow63D73VrHejvZhbk83yctLRNccDqZk35YumsavQqpFH5D7qFrB58GgasoY2",
  "key16": "4nDKJWHimEpd4YUSrsNM75M5X3hbC1tr6Qajb76AYggDfBGfzoCQ7QiMK3AjLpQqeZ3TTVP7ZkrZjhwrTccF3A99",
  "key17": "5gufzFdAeYq6Nj4rTJ8A3Xcwnb9He3p4CTxdjPBASRAJe4FhcMb9xEg2CdhbUNq9bLjGYuhK1AZEKmPBC6WKSJvb",
  "key18": "5LPXc8SNsznNMNV3VJVjtBfyeHRegCFfoPU2SaZsGzGhwc9u2Jco8ZhTajj7Yr1NxiAtNJa9ASUT2tbzSQG59gHF",
  "key19": "3eKaojbfmYsP68JeNSuynS4ZupcnRTVV3wef2pFBECCdorUTpLYvpM4WJp9XdxYewtU9kwF4RR1iVqcU6uh28Wah",
  "key20": "4czzFoJeGSqDeKGLm5wtSqp9wR2a6Sxx8TQprvP2K1mdYcvDMVee4KSNMpuJShw4AwDC5kEGFynfKxEeM53dps7C",
  "key21": "48RnUee4p1gGEDYUBXYuQfceSjw2jKCHRR2PcivnqLpieuuYt925uWD71LGXM3r6HPeV4TxQ1RnH6snkj4xN9cvs",
  "key22": "3QyJwcciWUi3UWRX13n6oJ1377wRFLSSVc1FZXD8gRYcRnwyhSAYemhzkWHJVKtozJhvuoCqLc3omc4eDKjYjvmu",
  "key23": "52bLVNNarxRo7jDTcotcdzp9sh1Rh2CRz6CnA1r7fCJw6jAJphDtr4oiEt5ZvrPQa5vzFrpbGRb4gTS1HnfD8BXH",
  "key24": "Sg2NGYt74csHu8M6cqxn1iRjrKbr1NABhSnBoiCaxTHYaCAJz61QLdVmLuzpZ7LY7QnjKfkUJPMQQ7krz8ndWrf"
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
