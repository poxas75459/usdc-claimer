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
    "2bjZdsrVmr2Y69bxTHuccnS3Cuu3UKTaqmDJDsLk1xZBMm4AVtgBwJjDQRs6DVbuBi8Ff6QQbFkzUSH59Ex6LJp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fwtmbztwifDxLcyQUrCeykC1JysdSARF3W9boV5yYdzC3DbxauWqtztpSoFjpKrZZTxe2L4unpX97pTkLzSqzd5",
  "key1": "3EJq8TCmcjVxZCJaURcDq7zzMexeUVmkp5Gesx7WxppAXRcvuNTU7yRuM7984Z9RQBEr358EJpfn1CNTgrfUCvrv",
  "key2": "5yT6fSEifv7wWSrPsPNpdpHAM3R9sKSJCt5RrFP3zJpMmGjvEMJQrPDrSfEJGhSbKstVWTvhhLuVWqHPjaMmM3AY",
  "key3": "5dr6QJbMWX25jdqgDdRwcoLc1YzEvyspsG8UsPXrBZwXHeWXyc1etpRtKLMJvG32NcM2Ana49U7zzZ5HfempdkGJ",
  "key4": "3CARamAKrhFgXD3cY4SjZHE7NpnrkXAP5VjUZkSU8SUaxJxrRZrhYzKE3oWUbRmiwNm6mFmukQAGE8qWhwWcDABe",
  "key5": "4RsFN7USjZATGGnH2Bebh5j19LLqMYQHDcsXt1dJ5ibX4BCrgHvh9DVasNRPMy2SibvbJxnmsyfhCDo4q3KLFEZb",
  "key6": "5ENQqd6EZ2tDNYawTmawRe49vJ9NbbC58vGDMZaWaUVeLUrC4s4vxDgdJJHT76T2GnH8KDtr68FV6Tc4QFD5cKTt",
  "key7": "2k1pUpQqgNenEVvYwfvFds6cvMVwf8xwiQVpUFn5qJUDmjzzj6K8z3DoxdtQiuyusD2McK6WbYjqvChCKYdmRSKC",
  "key8": "5HPSjJUofhse6emeVetpos7M6TNDqWvjoz9JWymSMnnnyP1xwrmZy7utDm1XtM7oQhr3yCNMyhEKXMLnUcDsW23R",
  "key9": "3NDmFv7cjWsZm5PQR74PJyeMSAjKEa9fRMPLtfrgMsKxsMDQX4qmfggvvkffX3FK3zK4H8icsFNRAa9iPsRNfhXv",
  "key10": "4j9ZEaCtboShkRRjSwseTogrMRzpzQcZx6N666Ch4omUGvpA3uE4RDuJjbr17RejEEV55JYXvhDHv8CwKamedZLo",
  "key11": "4bknX3qg52Z52LDP6wPrWGVptL7FZ8nVnyiHNe5bcqyo3gHNsrkDU2rAue2YdVmMfzZ1mTjAa5Pxp1x2fAxDEJcb",
  "key12": "64M5yEmxTgi6XHi8FBXZWkuwgDbtLzc8BwdGhLApRiniGfvbP6N3UVjMHpbTkTvyCX1eBrZUFFyjzW7ws2LppiwK",
  "key13": "5BVi8CQ13vA9kZZk8aEXUxe1qqKDsorKCNEcjNhBpfqH4cJtzwygbYzPV19mkYfoyW7oei5SP3c3PexLiynSexer",
  "key14": "33ctxkNwoic2EiVS2zWAPgpjcBB5wkkDKmrGb6QWP6Zq8YRkworWsk8Rca45evUT6cAHmSqRTrPYcDqp4pQkzPBM",
  "key15": "Ebb4uwHwBPbT6Ns2upKzQYN2kehhMj1XphnReS8ZHkJZHtTAVwAwF721jMyVFizLsBwUAcXAFXeLmD1xgmDdNLF",
  "key16": "5aT6zt7rPgpFWYTsWKBo4WBC56XvYERunR5ApEeTKFKBiQBR815ZLZDqZgXU7wngtdutPWEJRbfTJwGAV9btrkfA",
  "key17": "4r1VF1kVdFecCX4FcpXjimE61ttxmWzTNn66gEvYuDWQV4e9hGD6QVoVf6fFPi3XW9DaimjbCR6AUb2coKM7xjHf",
  "key18": "4HShtmLYT7KZ2wTjbMYoaFBx9q3VriehKabQEAJo6rYrXA4HK8SLgXTU3UbdZvKAWwpSsCVzVWpo9fQJKFjbKqh1",
  "key19": "2L6fUxhVbUdTcE7Di5KpWzPsS5cXsQFCLqFgRRrXP9ybqTTXeDX695D2HP53pDqiYozkgEei4GJDcLWTD6vSohM7",
  "key20": "4F8sG2sLT8rZQ2mLF5oeQVB6zVf8hs9oYgow59A9htGeT2B4GorkuM2SeH5wTCHWaKuEk5AbiW3G581h9Tbzds26",
  "key21": "kqcoNjG58Ks744WxdqcqoLwQLSuuzQ8oJr11hAvjaJRxrUXKWvKu2UeM8s5DtxcSFcFdYKjkWN6EdK9YaFPBGdG",
  "key22": "uQWHLUK2pv56GH7UFjYm6JjK9Q184NadqgSCBBioX9x6Xt3oeAmSCHRuyeLnD7eNBD71hxx1iRZFzZCA6PiVJig",
  "key23": "5wLCxeAPLhn9u9YpM4QvpNmXJsECr8n9kbpoZT4PtJwGSBW13QLdB3MfM2zA1q4SFLy1qChSncrZuAfm6bzCMcSQ",
  "key24": "3KEyLwvbhar8qAE5gK5nB6e2cYG8YGziM5EeHtc1onKxEhCkJAZwHNU8bngLZoUTmBzTWJ3qogvCyZkJnE5JyGHQ",
  "key25": "1pBkA6N2HznE6T4hFTYCaRYxNScMYNYQRpt4S5KYK2EC2rXdtq47VPL6cuCFuc9bF1DNF4nQnomgCkozZ2B3smz"
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
