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
    "63Tgkzad1bUoi2ghtcQiGb2PeavVqCmkLaEu2LTT56ZCUEDV6a3B8TcyqvmA8WYxCbqjP5tKETTbG3QfcbYFk6K7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mnLdHy8b9fUakvc3fVVGM6ofFMUkMA6A7NQ2GBzwM2TYF7VR2eHELQnWrKsXsEMsNtvcTRp2urT1HevG4geQsHd",
  "key1": "2735TKPYbyUNQiuWGrFtEQhKxuiUv9YAq2THxSuKvrE1b1pZqS9w6uEXsJbWmHqhJ2rZzTXN1H6cYg1Jt31NYcpD",
  "key2": "3HiPHLoovpMhRcr8Gi73FBmjsFMo3qaTpCXJ1WMjZvvqHjvVoZrvHUHmaCWpA83FVgtU52YRW3iyaUG8GKmiZWvN",
  "key3": "ap4F7Hcso8seJKbyDPncwemGAJnDSqEM5SckgzZ5nAUWqb8ekTDVwaScsjTn7PZd1i3zww4PtjaSEb4ziCr28YU",
  "key4": "2M533mfEZkeRJgPMyP6iFd6i5nmvM4YqYBwN4cWequCJpgBkSYCv8rsfEdH9H1o8zxyQyNxTBeW61YGd797d5kvq",
  "key5": "4BvEmVzUJWkAsxiw9ZDPjDGdCnJ4rpMZX3g4v1W5Fn7sYthD5BdwnnhGfG8ki3TawUHbjAURkAuSKX9gf5Y6girr",
  "key6": "3yLZW1Ak9q7uXWS7j5wpUmAtaq7T2HXvZjX8is21jKx2kDvqJc16s56aDHQzK3dotexWg4spi6p3UX2gpeqC9Wyu",
  "key7": "hX9ejzZj8Lhr1LAY9cQSJ1dEzptBFJzkwPiuXoSJmF2JPRSSBA8kmfD22WeNyxf7nmWdqqS6XdwdxVHMAj8cyrE",
  "key8": "2Q7Vtn9xpEVRZD3v5f8NcSKkGArT1WPX3cS36aqaNBEmTADr6UZaDNX6bJQH2vmYY9y8JxvK485QRPnv5twq7AG2",
  "key9": "kbopNiBbEidfS6ZrEnCrQq3onegHTL51LiP9CFv7QLK8nZsEXKK67qJHPbLpQXnepCN2ampgegqWCeti7jXdiCz",
  "key10": "CaCephe3pgS74cNAvq5GEbehdj9wPEV2srFESFNmPbDTBe9CDsUGEg3PLLmfEv2Zj8HJKrfmLA7fTN7rnTsLyEH",
  "key11": "2eVDCQfsgXDeYCKFW5ffAs4sEY2neWRSteQMT2S91nncNRwUaWYB4cquaTviNRzMVFiDKAzkowjLGBsLj2hgw5Rg",
  "key12": "4rBC93wV8yjS78WJjqMnoDSGXcKECmTzcPNuME4rnrkcQpPFEsCDArFLw71r1zJcbdtFt1YfN6iHSVXMe3gwTTAi",
  "key13": "5nVabzfpcWdkgSF39QPzoMJ7gScesoxgFebp4RQQXxfgRAf2P9Q3kbd1USMQaPj1zxGHbZQV9zivPDobbiqa6wPT",
  "key14": "4DG5r9quQVCgKYiDYUhVrTxNznVMM8A2FR2mKFzG3oaMQrDEurjH4AwhtHdhzbHyEE7KYnG9TeUBA88JtQCB1UpF",
  "key15": "2TEYoso4BU1iPLimQx7cjXdEjiwnErQ6vjULT7sLqEnh15k2N1jSotHJFCMYQj5uwxCNMbh6vkppzYeApF2d66kv",
  "key16": "3uv7ZPsY1e296SZ3jyFKbBEW2TMGWcxeFPegPCNpRJzQQ8EVop1BECrZcXumiFi9iwor9Jgxw6oLfhPTE5xT1wWS",
  "key17": "2rVCSHSVbnnuUBJorQtwan9KFpw2bws4YwGivQzpZ7WKRfoiFZPJ8c9mfvebVhxQ17jBtV4C67hwRwPQ8CkaHZVn",
  "key18": "x37eZMYiPHQ6nFWpkuaR7Rtfjjiu7TwAQZQGSoSVY33CzzVR1VkeBgR8yuByAQcttUfRvB79xGk11FTY1JwdTug",
  "key19": "5qc61oHd2zELN4Vi9ur2hyV9XtBQSBoaRFbNUG3Etxt1UtHkoweTibtsfGvL9w2V3QRxHZj5Bwt7Fe1tE7YnoTiS",
  "key20": "4kR3WTB8grHgQqKbcyWxp7UMwYtGc82e2s7siToPF1MhkW7Wq7SNkrCqENgXiWQ1vaDTUcizN9iizdkaqbdD87j",
  "key21": "35X4VaE9g6CwXV9eGAHEuG2oumNRDdgwTstzUhtWmHicQMEV3c7qH4YeDmR6cvbCBcBjLHLtGrHLqRmsRv72nMK8",
  "key22": "5PyF4BpVtJGbjHJ1Kju3EH3dRbF2YBtgi5pNKDMXXWaBHiax6ePjFQQoVjMqCBVn77v8qcsQse5x2zk8sLKRD5HQ",
  "key23": "59uqjg4GqiwsqwXVSyUx5tbx3T2gx9z2nDWGTNbBvgTT3KtVxTFhFMawyWXsUsKkzaqNeEGtzri7QRvsiVjfPoHW",
  "key24": "6XkBajfbATFD3HpN4X5prqqgNeGP2y189X3ALbk5Upk9ouzFKYPPbnn3Ac9rGN6hF4xBYcxDDjGhTa9zHgUvj3f",
  "key25": "p1Kz9wDMF5oMKBz7Gm6fPrCxCoyiA8umNzh2miHbQsYmKERXNQ5pJRVMcQyHLXCbnib1CyCaZmAyn3Rfuby98cP",
  "key26": "3gK8PZyYwrT7osdnSLhpraDAsboL68AXbLXVRD7XFc9FfPusP1gtkH9Afrf5kSi1Svw6hMuc1hfFqXYi54gdso2Y",
  "key27": "3Vz5K8Rp6NsxN2aw2TCexe59jemApzsSG5hPVXtRGjQfvvG9PdpHhjZLRwEDwYihtxjzYkfFYkv1rkije8DnrLrR"
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
