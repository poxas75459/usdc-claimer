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
    "24QjRT78wfrWHJDGUryGVLUoKaJHkFSpEy6sw5q6r8ScHzooFDMUiCAeUEfs8Pus4RkLrSJvrxXQmQ8FFd9nAcc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oiZcQiMZuTeVUoaqnq6t3BPPMKyyvfcBwWmH9YvreMvEYAq7aKUN26Hy477Q8G7sBp4RC329UUnKBLuwQS5ACH7",
  "key1": "4ozTCa1in3SkxVo2DCtZ7S8bht6bQNawKvSHC6vg5q4U5CTqtfdaTkScEWZrEKX8BZKA3iksxENEottkqodHxbrP",
  "key2": "21kQA1HDxDXssFmT6VEw4z8R83emYQGxXYwyCbh1vtWxSkuBB2E7L5DDUsth7iAtPsKogA3bB963Zu6pMNiAjaQp",
  "key3": "4urpd5gF3Piovidgj89QmeR8UefsEAtA6FTiRG1W8xQRApSnkz9QkfAkoC2BaTfWWVFqzMvj9ehpZMox9SiPuqvh",
  "key4": "54yBZiTDFyyh2Q38PxZqCdnBRL8Tm3pcXWAa9DdqzCu9vJXutPMXHwCynZHYo4dnzm3CBGPpbkx2YUXtkhmPWgHn",
  "key5": "1nWmWb1BSXtiRRiyvsPHVUwF3S2Nnau455ygV7L3CJN21NxV7pWxTjmZKSRtFFM1SoqC6ZTpvzVQKSWh6NXc72Y",
  "key6": "4rfNcY2SthZ6zCBqmpJ99NG6r4MzniZeAeQaC68NUzHTo1JfrFn7z2WM4w4Kp336drrn8HWSUdqr2h791jcAGEej",
  "key7": "3enVdzdLL3wqi4rPxyG1YmrzFCsD9Y6QxxXGBBCfmASyyt29WsKRwVq6cHusfwiE327c14mRTXpKgyd3ZVSKPnDS",
  "key8": "3aRwKWi9rdVy4NZyaddsKXf52nxcC6GV51pcmkEkaCVBiV8spssfwyqo3cmRR6Ru7RHDFRanbqo31jugUjTvjaji",
  "key9": "4x4BetRXQfkCF9ZhzZ1NQ45p8nbvCMt9TtCB9S4dBtnUJGYdeztZKcgdHuHx2yeLxa9LRCoLWzV4g8QVqcfA1rqf",
  "key10": "64G1hdyv9ed3YdUUEs1ntaFLrSnQXo5AVcRhJYvHKgJmRAc3WvDodbAw4S2ZA83rP68Na7w7Pp68efMV9KTXc6SV",
  "key11": "23eLZpia2LCDrMnx1fACpJQfMB8NMxqsMAw6jwqfRK2MqF5MoVmnF6AZ1bC5TRtTj5LPYYkyUxZPkFf1B8ZRiLTz",
  "key12": "3Sv9jZbcQwckTnD53iXMmgchEHJD4pvf5AK6ciYK6CJTbomh7ddKnEdCm3RwQN4QeiZNAmUAsn4x9WuVyZj952EK",
  "key13": "56BPUy3DXQqzDitBgS47igqt54BbdHf5pwiCjLQEfeMC3zaFFs45Em67MAQc9RDy8ZbTwThcL2tpc622Y5fdtnQV",
  "key14": "3vAVQTFrPWi6yyx6LFBvXELxJZJmxKQmtnUKxQZLxTofxgUHvXsKH9huwLv4E1r4iZkdbvoM8JBkGXAbMBPJvUWu",
  "key15": "4EQCRnK6rnc95ji2hT7nm9d9eruW2T62n9NzKtSbDMzCRJvtE5Shyws9iDLGqv2AMF8UiUhLv4yh5iPxbBrSGV2f",
  "key16": "3RCpLyyn4ghZAKNYA39yD1jpJxbNucn6mbZDrrcvx5CueWDuZRd6y73PuTvNatmdbZn9WV3DLEs7jCzXMHwgkxGZ",
  "key17": "2sEq7aR7JFeEf6GDjqM5s39QYyBHW7Psc7tsCqQ6pMDhE2PvmE2LH8NTPpgAHHfxsMU2gfUvrKnRLCkAgR786x6e",
  "key18": "SF1GpYHzTKvU5NY5WnSvWPDDxFD4oAkyH59axHXrSFiCEk65Zyp62u5PqMXr3zzT2Bw9c3CwgjFyv2BexAoodFM",
  "key19": "mEZ9XaghWckkirisKQMx7wD4snZdanebPkUZX9pZ7n9qMB6pW9RcW6ysL5NEStCgRzyzPJd211WxShBWFRm1Fwn",
  "key20": "5P259Y9mggE4h4bK2D78Mpqmu7tQXYWTQyLtMucdacMwXBo9jZCthaqc7kRRmhqpQ8FiET5DCCcUaXYjv6EcpAiG",
  "key21": "48s8jLz9pxnKuJUfirhpsq6tq41taC2qsPCJ29WQbgM4QmozU7PwWDcEZLki3scJnGPML8Vj5dLg6PvsqtEU9tMT",
  "key22": "4LPRmMWMVJgfxygMuKfnReYYTNfVCywTB1oFsEXtTsN7njfPxHpgLDtcKevJBAot5TcLR3zFHAgmSpSB38uAbu8a",
  "key23": "2GVLSW1FNwjHPgZma8yKjtXQvzvQJDgonVcTssREwPBMsg2NxaQEWTVRxHyJLkEvmne2eiSZtCPTFNmYWRWKHuK",
  "key24": "41NkG2AQdQ2Zxs7VCiaKvpoCX63wuyKmhhRHjZb7UHTuXSuySG8vbRQwF1umMUoJKip3xJMVzs4c7zr4LxRMwArf",
  "key25": "3zGCEepQrZd4tj3iKJCpg4cPPhuX3tysRYCJQzyxNAJrBmxj7FA3mjLHd9VPWAN7amqpu8ZBXW6e1NDiKkXA5twq",
  "key26": "53UkgHCQzVnoFPBtA6zCXhPr6ChVQXrLXSitMK2ddkR4e1Gz8KjHLysC7ho4L7Y8bdQ654bcS4xP9qZhf7Zxfu6p"
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
