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
    "4tvkwNkvxU6noGbW783CVKmkiTAUu77ugSJntAmBGDjH7dQKLnLK8Totjr1akC4PiK6iWy9RmaMX29sUag1pw3BG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3miTFMmnyHqS9prrg1Bdp9iXJLBknNXDjMLiaYrdD6YoxbW46TmZLmViGkJh4pXTRFy7Z5BqGM2nXFdXa3HR4tRk",
  "key1": "51wiyuD2htoVUfDVNarH71xTUCR2RMm2QhRbZTyZpXG7omP7By7vcxxhkqeBAuQUuEb14pBiYBML5wPwrzL5P6Qe",
  "key2": "Bi8X7oUwtJ6kyAjczkvX7odjEyQDZk1cnLdHVgfw3ZJtpuTehRZoBdbQ38vEVX5STVuhdCYgiZMdg7XqLiyKfxT",
  "key3": "2q3eih3dwK6dosNnoNcjoNj3wc88Pt5zyrM4PWKB1x2aSn5sPq6nRiMXxgbJ38NHRi2x6SUtBsTJVM1GHefjcKkG",
  "key4": "4J7zYD3Z9qGmePQsA6Udz9J1Asjz6vEmSYtN1RCZW6B2L8v9zToYgCPXYvXfCCsoPBqVUruXJnzb239nHc62hWCW",
  "key5": "VkvjsQVZLhiPXhWN5bKSioP6qrM1XTBHdanCUcNgaFGm8BDdyQzrtNvSi2XvYorkV7XMaukVmGzKBDLCTD7ExQR",
  "key6": "272ToTTD29bTHnZMtDsDGPrNFDN8Xa1wYaYfYHHemzTMZ88Wq1ms8qMDNhmScKFt3y5nuA1tyLon9px5tagTLKu7",
  "key7": "4tGYapd4Z4es7BLstHAHhaDcjxe3BsEDbRxy5k4DiahecGgx19oNbJ9iz1Xm8cVG3RLNNGMdUAhBcajUtZUm16Eo",
  "key8": "3k42UJoLjVT7G5UojF5GCjHRS2xUHEtaLJa3S2UeBF12ENCGT3ubntbsFpzwyhniP8679Jz1tMKJAJVV9tbMbyYs",
  "key9": "5jNvr5q6n9jTudQBKb5q9xsc6DUkpJyG68SHRawpSVeaWy2sMSvkQ2WP1oFRL1LZi6Zw56t2yqdbHBakuJ7Zn64F",
  "key10": "3iALack7SpTP5P2kpMAZo7evtoyutbqtd5BVJanRrZXbxYCafzForqDUDUn7mAgSs9VMoPtjxMqgueFr24SYGKpu",
  "key11": "4B2R3QoSGL7U7Rm1k6cpsScQy8uDJL1kiCVP7zX1dPMhF8gSWWySY6FAdZurRXLPSwRbWLz7x29pzh8bRn6bPS5y",
  "key12": "SWKq12Y1LYDVYvTJZtPjdbjk6Z35PpZLGWqLUBzqSRtynqWaULYMnWHYip8jnBTpNXFkap75H3fCztuTs5AqzG3",
  "key13": "3MT5yigxUWBN16hR6oojwZc2jxLVQ9YKhCLcnVgCETDCmqBxhpeUPZ1jaMFPibFjFC3cy3K56iPrbxfbLag8hAdr",
  "key14": "2ukVCyHYG4A9CdTiVyGr4oX1itoSaE2SvoBKfVo2Wg2E7qLoBAkCNWYVuSEeaNS3hvcatDzga31jUmrpg7J4NpJM",
  "key15": "4Xd1TAPkJGLyb2parhwCpUerRSBXQ74jNFKbTXcGQGXVqmy9cANKDEX7ER8ZfJtjGyTMH8mUvwsdTYpPtoyM1t2M",
  "key16": "3WdPhzrSHs54VhyqrBHjSbq7tcSRFWZZddv24uPKaZGtoE5KWbMMXPXww744yF42RZnqxH5AUxpraTgZtCo3Jdwg",
  "key17": "5PXVTdXHz8YBFZ3bqJd7S1hs7RSNiVmysoUppL6d3Ct7EPTR7qH6b3JKAq9VJUcv4AMFHQcQKrfkVTKPdsNkAz72",
  "key18": "5sTAysm8WNxUTHrFs8RJ6QNnZF7wJNraG2mxpxY957nQYvd5j1w7pcaX17DSuPz7ihfbASK8ZcaZtP8RjYEwrBAy",
  "key19": "5xzxS4sBqhWKTZZBdwH5VFvZ7LStVSXTovEsCLoB1EtxnjJQQeQB62Zqk35BffxtQtLXrymPVh82HjyNuEHvBw8b",
  "key20": "5U8cEeP93tPhZtu3HvLGaPYEePacJN1TAc67cgNWJ2c9LzGLhKD1W2ZhYQRPP4XxFe5qnLgSirZc5qNtM8sLGEt8",
  "key21": "53GiNJJkTAMUbhMj38cWL4BswZBDz87p4rEQGjT1nk8pJZjyegqNx9JZjectz4F7FqtyMCTPxvbi65sLD7Rwv8hi",
  "key22": "2Z49Xx6Z6Pdi53roA1CmdcA8rCtSnk5YDUpbTkJWJJpCtARWiDJ3X9yWGcPWXSKZ7H38eLPUjmB5znLouSkBcqPt",
  "key23": "5dkEGWTamwqwRN23wLppShiS2zYahYM5b13dxPQ1LMLWaNjhkQ1CdVxAygCRTUi535QSvbvHpRk8AWVwDzXxt9Ps",
  "key24": "4Qy2XVL32JtSdt2S9TAaoqkppYPvNjsSAdu3Kx4RJiS9UpnA7KkqvEus7pckUujakoJiAvkpoiCG5mLfYVrfaYhc",
  "key25": "3U15FGy43RKmptCFLE971k9PCJjZFDbiN1t6M2JcVS68HoYRZqaSJLgu6ENjgiqnuMK4nfynZ2YWnhrL6y3fdqzw",
  "key26": "2ddFdtRvify5M91wDPrrtjW4LVgimTF6ecFfKwbNEJSkbZasbJxpkPAfaWyoUKHcER3yKRDMEUA5v3MRU3Yn6nb8"
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
