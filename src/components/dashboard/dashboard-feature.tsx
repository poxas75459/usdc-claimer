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
    "4qWs1v8w4wgJbgfin9Z8nYrEqBKYVyQasfnPJyLcn52z35t9VPfHWix7u79sEdk4JtQ2sfJvYtSA53xWs4fe9Mfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ircJWXEVsu9DWwrpy3DzpySPZP3p5uNzTiYGK9GHWKUkiykSZTMc2J66sHG22e1YSNt5Fj61aoTEKvdKb7bQLa9",
  "key1": "PgL5rqCJxGDPghiB1qHydDVacxmKdv2ExqHQnuksBDJ1gh1JoqdPEtNETSDWijzBcoDVkX1fuYWfmGqzLTWgALy",
  "key2": "2dv7jBsqg2F4p4CQGgN7gNQLEzXoRHo1WFaznw14Qkg5n4H3nVLvACcQCQM7wED9Pr8bxFBvikB6BhrEo6UMHicS",
  "key3": "KH7pPgmKMLyajHv4K6BB7we5uyqD2StrRTy82jLdsSL8gNucYeX6SGHuWGJSPhf88J54qCDJKVN1qyrU2FbNs3X",
  "key4": "66rXQKGxgFdzakVwzZX2J54xGbVDvTBH4WNC21RHZBZ6Gv5BEMXGYkH6uMhY6xjYiHDuUu4JbW7JUPxFDn7YL19m",
  "key5": "3sh4Q8xRgs3e3oSMSmzCkeMuTpBb1zXbBBzbh62n2xRoreXMg1WJRybhXSTMXEEb5ZnHUETqSgisFRxKTyxw3q2x",
  "key6": "G7xPLeMQjoATc5azPNVc54kZdPGja9S7qY7a6beXg1TbNsUbFZK659sCVt7JMGj2cvbzbxvJ8WcpZE56QuuVrBF",
  "key7": "4wWbYraiwTqjN5mchRzMTshqfg1JpcB7PkfaSyBCgErzxMoa6iPARS9pnDNfYsiAM3F59WikhgRAYR2cNi6hsFZP",
  "key8": "2ztJTPDyNu32NiakeZY9r8EKnnH4jqmxTFjAg7ernvKoE6pUMsaWarrWDjU1AasLef3yDK8ZktzFxiXMjXMeZ5CX",
  "key9": "59CBn25eDKXtXTcbYZhthSjrWWHzjYETSp5MWGUJ3vu7ug9e4Gc7kkVonyJ3y6wjcLdRzWgEehB2BGdcLNH18WhF",
  "key10": "4sxDxfFqey4QTqbAYFLEeS8DSFHsGiDP31J8SYM1S3Q67AmPeocyD3conKkFYdFDoqidFyGFjQeY6LGroU4x2vmz",
  "key11": "36UpzgnsuJ8J3AeiUfqdRrFt7pXcbGbjLnyjzWos14LUw1VLoJ7zRKq7L8eZ7ScHjadN8M1A15HPnAngA2sF6iT8",
  "key12": "3kE76B3S5nAHWFqmAobBNjhcAU9uxNQ6BubHdSpZP71z17XNRkPHhqbDJq3WjjdVTwSeFaKoEhrC259YuUJQzgWm",
  "key13": "dQNAtQMTnkg4h3w359fQrh8uujLH9xDdeGizceuw4Vy4Y4hG1W9z7gvRYL4kJAZm3npVhTDXbaVRQVE9NTeuyet",
  "key14": "DsC8nLWpnvQ56ZFvTZjLay5cLCPCQmvWNdEv4mjXNUVyofyAuasN8qHx5zrdgZWP4bQP1Lr8YZysEBD1Qu2YDuS",
  "key15": "2C9MW2JZJNhWkjUZKsF46NcnaRFcb5HpEGa1vYg58Vxxp3bxEohXAmzf99rYz1o3zVW3SWfKG86E8z14obERbNSe",
  "key16": "2Ti6YTkTeSBXQ3wRCLEtFho9BKrX5AJQ9VzZcUGaHm1MENzHAFdsTQVNKdonro8gHx4gXe9s7HXNWejPoKwLFo8C",
  "key17": "LNBb1hig94yURCys3eYjxoraHYBVR8mERBtzG3kKPMb2QS2qeJWM6HV6qB1uwB7qGarD8GAAzvrrgmajxa1MRr4",
  "key18": "24fTzEDTaLDVUA4HKoKRnegGnGCz9xZLKVTnBdudFw7z2tDQ2iTVYUCtY8nCC3DkDRw1LX5rB63ApcRP63fr8w9T",
  "key19": "5rZ25dax3M79pMAJdxZMG916ieyBCgHbxvkd5eh6gQEqMUH5ubYoBhEEkjrCtdWVBFq9bgzWo1k6xV778crEp2ov",
  "key20": "2noeCRYmyEogk9KGdzvod62CnsnN1yWMmxuwLs3gN5krqCdfeULkqGFo76kvwAwpcppxv4q4ecBwguARQh4Jg84i",
  "key21": "63hp1NgArpuUPg4SPUrMQAJWKxWydgVi7pSgsm1BjKnipn6hSS9DPBTdBezhWwk8Ewxnb5tcEgPtbrsy3FgKnSen",
  "key22": "2yVWiHpq4uSjJ6igYVnPXZ2i8iifxeDYN4KKCXf11bSzrkiYZRGseS6aKiqE29hpJxQMAipEvXwMzQrGPm2BUAMa",
  "key23": "4SRuV52ZpZvau1qbYz6Epn8ju7ZmYhdPL49FRH6q9VmT2vVWBXRtG12xqqftDATLmXUQ2Dp4Kvjw3fuxhev2co1o",
  "key24": "5PEF9Kc4mMkugLUAZDnaBXLioNkUfqF1KdkUUh5hS3RJGBKJtACVFUAuzMkLNiS3ojpLdyZGBQ3voknzXNczKMqq",
  "key25": "2HhFb9cYZk6d2FWA7j8E7cnv5dmTFQSPFGV8XcZgBaN4MpQo1BEY8q3Wix3vsJMsZDGoFdnpKoMdaRXNDX6msAbv",
  "key26": "3y8boDKrEWeScAT3bEbuj9v9Lihh4wb37pJJiYCMw1aenemVo8Rcgm68jtHJZEmoSqc5rSJhHDTNKycGCu1UMhTR"
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
