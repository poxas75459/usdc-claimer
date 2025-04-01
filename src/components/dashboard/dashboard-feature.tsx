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
    "3xqHc1pPHyr93qRMaYbBBRYiS2naNZboPWintMcBG3UjbfQikGkkit24C6ed6rUQeF48zxgEjxBbRjoHRR7HLkQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xqNTdgukgcWdQoeD7zzqKNmKsorPTrPGTcSxJPmMvHeJBP6Gz18BurgK8ArBvJStugvZ2dZW1n5w98QdwRQ4Tec",
  "key1": "5m4gyBJ8Pz5tezcZ42iCajoK95gWBw1YbHWqHH1vxHg7mn7tPJ4D7XKcMHLgRuNaQZf9VXTp9NE3bHTVkz6VDEqq",
  "key2": "2saLCeQfoMSbUYfvUa5mSZjaZcfR5TFDFkSN9WXTsJW9auGS8h9xyZCh8SRqrMtj52uco3gmyu9qP2Q3yqSaXDDF",
  "key3": "SLHPLcthZYZXxP7eqYnFMUtU3TCyfZHjhhH3GpperMyDaQFJuX69QNHfkieBFNi17wKLAJNNg5Y1TkZhj1AmEt4",
  "key4": "zxQYHcKpZ2ZREpQZAH8uWJbkFVDxh95oLdZmS9avW34QYBQ1oHHppMCR23KxqhWZtBs2ASLqzZMNwcJTL1AgBkv",
  "key5": "wVZYKZqpdunjYBmxXSgKb6THbjdJS7xWdQxDR5LKJcZwyAQErz9GK7kUbY8rtX2vA7FyupoaUJxVd4NrjFPLsYs",
  "key6": "3QKuDY5vUDYyPoWtPcJuT7WBTe6jn9d83UdyerRpxKFKs8n5LAAbzuECTUB4xSoGWA8TZ7nX9nnNLKCsMkmfZCLo",
  "key7": "1dr7xGzjAPLTnBwApJ4xedMUd8pDaoPkmS1mTWTpRVbxvuSHJCptVvyg7EdPBUfsnBBpjVtVwjBU9EZQc42oRM1",
  "key8": "2A73zHw1A4uWqprBRx6mB64esTBPpjR2yrxdodqFijygvEs5XLzx7V2QAZpf6BiK3Pz86wV7jHWEP7ZkJbZum26A",
  "key9": "2yxQ7cgSCn1qBFYdD9WTr4qNnvxHkeuywuNKedj9Lnsd2cFFfuh69MPNPH5PtAby9s1Nk7uxpfEwdJuauWKbaPdV",
  "key10": "4ayRaXrDAE9jMqetaPDPT7fYbiE1fGitKWDVEZxLGv6M7M4bsc97Kxdvo3uwxXA6Xf5r2ir8ap5eNDwx9Y5h1prW",
  "key11": "3idyLRMCDEhfxvQ5Z8JKJk7ctCsf916riQop1DEkYcZj28Az42GHaudKCW4NiPbgX4wSToj4coSZr2TEQ77FwTDr",
  "key12": "3bUQYboGKSpTqSQwyx4ei8mCXfuR8nhEErepmZs33QaQQonnMSLJkP2XJ4Y8GophTPDKBQC9eATorqVHMtjNizAx",
  "key13": "5KfkKszYUp7TehjaFyL6ovLZzV8BjkBxUbTKdpoXxTG5jogoqZcmyytJ3pyniRonb1ZxzPSAFYi95hXHEMKoW9rj",
  "key14": "gaaYVY1V4WJPWs5prvKij8e69cTud28Tgvb3yy7qdpW9hySeey1Wx5C7YJQr8YM8FrHTDQuDVdsecGCTiCn4s8e",
  "key15": "5bgRG8kDnzrnbkHxkKKkgwohBimeouSCZUMjkcZamLDmUMtAbnp5yV7TCkJaqFxYkgbju6d3YnPRR96FifVg5rHj",
  "key16": "45WvzpgswZEmKptdBCxX475F9vgLwTWf7jKU6UXtMGydk2QNAHGARS4YmWVoZT8c5Aw2VB3B8dSaFUAaXaGPUHwi",
  "key17": "5Cv8YkGP3ssjZS1GQxEUUHSzVjwZZ3tGe9Ec8fMKm6Y6gAjm5sjJzU8S6RKUYXGVzoWSdvSVFdfEmPfGdEdnz8h6",
  "key18": "2kYxmiNt3ChPWT4byMtzqacKUE4LfxfWuZHtzwt4YbpAJXmCoU6rzhvfCjwEJbYpDFj9TBZF1MRc6zAgVBMrjWtL",
  "key19": "SkR8N8gKPBenyGuTjc2uDXbw4AJw8weTjJuCe3aJD7R4sjfSWCdXzBZk14AeCKEszvFFRTZPxByogqJRzby7CJw",
  "key20": "HpU8CeswDm8MA6aW1Z4eVJTNcN7frCTF7eruXCfZwKhzRfMTo3GkA41jcD3u4QwFPHSUCnJMhMFQSNYU5oNjmZh",
  "key21": "3sNaQxoCPCECTd8SFhYp8g4JGhNjhDx6G357qWytixManrX4EtTqvwhMi41JyPPPn1G6B8XvATAxX9QEpFTJfb57",
  "key22": "63GCV9RgF6W951LAm5FHd1uXcCCoGzVae5Q9iwo5x45UE5PqiepkJWWA6jVJByXmiMRTSfYToVFYaebp15yAi8XU",
  "key23": "5twLZCDMpzDeHkk9QDcmNpLwubcWQX4TBtkyR8teitXEpP5sU19sbXPULnZx45fxkHGTCNSuUGH2zsD18sbbnggT",
  "key24": "9taVT8Q1VvNU2YbfeKYWu8seMxQw7L4uLdtQ1dSCormqp38mU36C1b5vt4Fdzh1xH4SH7Mjf8ZGjm7s8L47qkAN",
  "key25": "4nX4uweyHhBscudMGZW67a6TWbr5NX93xDdR4PBE8DdXeXcHGabQgWMkNR8BTP7idxeWPf8g9TjzW9bvvrtwpDSs",
  "key26": "4qSSt94kKSV6LKy2E6fmehvYHzAPubtcAugNraofS46s7G6HNYeKeBXrjbfEFkfYJYM1use8SCP2SYtoM9XTxWx3",
  "key27": "3hZPywdZFneBZ7UeDAG9ZND3qHzKUoEDQD8KPNcdLkxPweipHzGiN7pf77nCVJRMWN3LKVVkc3QB4KzzLDdQ5LcJ",
  "key28": "5smQYzApMWTCrAnk8CHi1y4foWjLVjdgHNWg88hg4jX2poTL33D9k9SYxbZPNkBUkrBhYjMkC6pnipSsjrUoVD3K",
  "key29": "ipRkkYa83g95FxFhBVe144JLLepQeCR79sqP1ErX1rA2w27EHcwM74hd7GUv2hDQyApwVdwZzxLqQXpBRiSFQGU",
  "key30": "5MSZt6rvC59KPcszg4tsgBbGp6FB8QY6MevZkEhQ7B7STefgNEZJfbYUnreeU5c2WWwNYSbK5S3ChWJAPgKwWgi2"
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
