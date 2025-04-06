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
    "4JZEbd71jEvDVun1oPCcNtiBFfp9cWo1AmtQpqTqXaJuzEDHXZG2CpBvEabhcQKUMrZh89KvbeSye7sCe1zViezt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cUvEcKRnWPcgc3GA6KGh89ufhnpB7k2Jz1KFfLq8Qj7cEdKzWkHE3ikMEev3m5s2SZdGXKqzv4zw7hN1KemctTE",
  "key1": "5AU4Ah9cxJp2DhGL7Pyq58M2Ekef9qDvposQjA9vvJxBQc9KmvwUv5ZngNj9u8WrtDcHYpFzAw72fe3nkcqdkUeE",
  "key2": "5XvXVpQouLagkhNv6YbWmEzw8LDtcSCHLdyPCNiiW6PXAhjSmrKfbgSb6BNRouobqVkeeGJVBTS8qu9RihMDUJmE",
  "key3": "3cbSZbT9i1YD94xSPYzHSrYkxGPr6agC7QEMkJUQDjT6m8WkXXCEis789MPhKhMHQg5owv6q3LQ7EiL8nsmomYZh",
  "key4": "3u9LpLhQqcvvwZXFQe8d8vmMpayvSFrhGYWLbWtGKGiiYWzVeqW1seKfDQJUK8knkBLT2sxBUo2Cv7BWGAsK4oPU",
  "key5": "4R6bW7vnepti6144HujkExQ1eMA6RLoPvnHGtysvcGpiWbL2bAqXUfokgfgRzovzQPesm7GFzkcbqeG3ZzvS1HDw",
  "key6": "tgJZgm1f6ZpKYZfepguZZGXqxSoagbBhRKNjPTGfyz4NwRxQYKzZj4y1cwxZAzGrYxUKUP6Z9G1rvi12rWYEN5z",
  "key7": "3FMhKw3pGHPnnoSBrCNdj4SNYwJCb7Qiesnyr1DhF5wrPCrien4TnYNaN255Y6dCJ16q3Gue15AKPoon8pM6RPDd",
  "key8": "29zvLYDFhFgux2ZspWfLYkvjtwovesnAWjGN41aQ8TsfphA3NfWuyhaMrstbnMof9cgntpJsFSJt5phbEdkCHJgL",
  "key9": "63vU9qezWcrwKAEEHbBnHQ2C8g4AZr6gDLFDMMgoe6YtzEz2Sbqu3F6evoNWcKCvB5wTPBsr958c91eJVDyZxnqJ",
  "key10": "4AuXxeJv1ZYtTjAa1pT5XtwyXzvv5z3U2mw8VMnQ7mNhsEGh4N1PvMGK9TLgU3GUKnsPnELrMgAqLNEw7V8AtVG9",
  "key11": "2eFJQqZgQfuo54jFnt2AyDXBzf5HV5evHU4QhueuHyLVVG4Apz59QMUnF9LywF8TqDoU2F9Y4LCiwW3wXscWaQrG",
  "key12": "tAXdAq6P6yRiAEw6PVLciFY87SZtb7MWpKRUpT4xvWb53iy5CjdGuS2X3b2qjhZCqCyzEq15m6wUWftpnNSW8S8",
  "key13": "FFPWi5YEACkQG5BdsXxAArJZPFBiopyc3Z4XK4TW4zBTGyydCP4JBE2hvVVsrSx713TpFs4uQYCYWMBPBHaNuGG",
  "key14": "2tHQdEYMjwGosPaFvGZJaYfGnkrtWEcDmPZnwyYEmhMKLvpnFbYtUmjeFDjEeFk2VRPYDvCYi38DkBgs54zNofkX",
  "key15": "4CPBB5pnWG5UyGAJjSifNAjY3Y5AZ2NJbH3vdY8RUh4SpKQp5JeZ6iBP2ut71ywY3w7ih22dut1MNewZJfBJ7hSu",
  "key16": "5J4WQPTZopN3jWj13agnunrAj35hPgqwejqdNndupi83cas4Ehts7w8rZUvnLFf15Atbfyve1hnx44GEEEQkGJrg",
  "key17": "3BUsfY5CKapnAAdgWsfiZSAbw5GUCjCzqWyaYoE75T81eYSgzWz2C5qP9pAkNEdK2LEBNYbhH3vn93uvcoKD9tRa",
  "key18": "5ZnFk813n8ZF3ApJmfdUmdutF1aVy5gdwG9KVSjdaySs9TGrSq4e7SwdMCPcsYEvXR7SDwTrTs86izSTKtyUg6AV",
  "key19": "5CqVmr9qSrFe9BfPm9nKRVWRQwYApzTNpaBUes2QuypEzBT5hFKBsaQo1g6ZAqmeHjt86zkzb4UxunqwrvEsd7KN",
  "key20": "2PFtvB9N1bTygFEQKpxsrcpmVPXo6NRraqR9BwGjP92xS5vHhAsWZKtW2Qu6bKqp7newqsFwC54zidGqYWbXXTpp",
  "key21": "3h9EgmFvhNpCH8vbsG6pevydxNpx4KR5Y5RverS7nv1aqUdZhCCbB8hFjiaz8XAq9foJ37h9k7rQMWvXKVWqSJi3",
  "key22": "5KWATEMbkjA7EWVXHUSsJnzedDS5cC1uNwJdJQXdtvq3U53XrBUKKtSMBSo2JuNKqAaxB2n4XXuLtUPs54Q13Ejn",
  "key23": "DzNhERSc6spSRBhVbsKRfrS7en7JHWyDFSuZeATSuXS7M68fLnnVffXL8gJPfXdytr6D6xoK2uymmbMqSKHzyWh",
  "key24": "Gx6pugjf8TtHiZsw7aCUwK3FhHY8W7RMjhKDvqDKKWEVyXGC98awAVYbjAz13gPNooYznBiGM7BK5A7he948pk2",
  "key25": "wJjMuqesbMQHPnWW6e94HYHgzhdQncYLpuwMQ98s1eQ8tgTk6v5BzGfqs5tfke2QE2pofRWjtMR94z7fQN5gY2d"
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
