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
    "28FpdJCBpwrFdxVHm6SSnxd5NTa9sqThkYfGYEuvHFoeCCLkV5N14BjrJDjprtL9T5ktrrKGMBAP8CbZdsTKheTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WAUgtcxofwJVhgiygQCmmsDZHD7WE5H5Fz9vTMWxMspjpsRC9HyUXM7B8WgBiqApsuuuaMyXySnHko6HCTAHex",
  "key1": "5Y4qGKXJD6mYiQ3jrS4DwLS7RUJv26487sFGZotK78MabHvZt2V9kJnNyHv5VGFcLcEFBWxTwzMUu8LPhK21ojkW",
  "key2": "51CoMaY7xavgyBbeHiwasF8MaDP1toW5tKxSWoWsdtnuzMLoCrVzFx9gDciSTgy7u48sT5UGsYdENhkESB6yhVJU",
  "key3": "3GtP3dTFZwpeMjya8re9N3QNs4NBeLWKLJu6ZmzLD5YTTPQdca933R9Z8Dgd4XeyeHpfF6Mkq7UHwqat7fTevf35",
  "key4": "4KL7f4moGSB4aoSPpfDYpm3MAXX9MqWMsixbFqf57CFUUV9vuVqJU9WCLg2F5nVsfrdGqSJmZnhh6eeaD4KP6DRY",
  "key5": "37v89inMidxkE8Ffx7Zcg5GFXt832KXZt2M8Jhj55aNuiSvqNhgSQC1UBLMjBMpNVaum5C8oA4UXH82hZobsvVV4",
  "key6": "4hGAmRVgEmn6TYhFmQT3Cn81XsoKQvrFYCmASKBNUfpWVrFdd7H7PoRcpy1V9MJ4maw4xXmvmHanv8wfC1xCEEsy",
  "key7": "fFQFYgCK7RpQeJJ3tEYN15E4SS6sNixAbHYRPJC4NLe2R9yJWqUK7ozKXeiv91RhCyczyyEYnckvXyzhKZTYfa7",
  "key8": "jMtNrdp1Cc3wBFXtqdaufsxPqtZCWmaJYrQPTXUtc8VnUR3PLhBitTE1Q2FiZwm1WdeANYjnaq1gxpa1rPuwbRn",
  "key9": "5hc6D1psywKzVHqkBRRLKSedBkbkLAwnTNb1BeR3oGYNZtJBxtnz1WTBULw8ys9xGEt5SjLQfZG6Uze5a82MhmYq",
  "key10": "2Z1K3MMW65idq4vGmcum6Gj3n2iF9Moh35tG63CeQ7ZXbfTJYdwUBsqL9pToh2i626bRRba7ECTNf3nG98VMtkEW",
  "key11": "p4b7MrcuVkY4bpMN52gMGHwtQLsBM4GX1K5QGHHrKxrFRunbEwC3Fxh7icztrJhvaSocrokT5xZ9MQGrB4wxv77",
  "key12": "3DQrNPdns2rNygBEnqdJ6yVmF5chUrVicwbFixHvN6YXUTPbcj7FswAZxk9Pbf3JvoAFu3ewZNyATawAf1C7yYXM",
  "key13": "FFy3bf1tWqWVwoKDQ7vZovkBTsSNmfCN4nCYEBPFAbqmoWq9g7GBTXuMqq4D2Fx6VeXq39fGhKMxycQ4ZgWJuqb",
  "key14": "3oogrso72V9RTwryKdHMNDLYGxs8D7Dfhp5uoPvEJuD6ZD9kP8yMeb2y7YLL4v66KJrdPCa3Fqq9FoGrCm1DfxCS",
  "key15": "5HKURhca2nposZdfk8o5T8cfukKojKRnNebBjKi3c8vvR1RmEtEHD85h6hpJgAdkFbN5MWbbYqm2vstY5v83a1bQ",
  "key16": "65c4LQbwDAc2DRypVuw2nfQJNu4PqxvWZJPTBkE9Gkp5knbvE2AHxJgP61dQMYxe8rgxWeMWPYLw5ZZgPdcn9fXQ",
  "key17": "2sBUXjErYcbkRqsNUK1cGHAPeAZiV5T9k3puCQdXFCCSS2TQnfB79Drb1mNJan5wecsR9cCrd7k5ePh8e3AGYE7D",
  "key18": "TH7X3NBCnw5j7oNfSCdkzB2rfBfYko8jYB4Dxuys5VGUsgwv6y7nV46hsnX94Trf5w3pmxEKuceH48VxtLQbpDM",
  "key19": "4At28294ATjgJMDCdXFqHzHoYjTfuAjEYC6BUPdTMhRUtzZLGQJ3AjQT6FeBSJfxFMyesNVfMh5Z6ruPiYXafb3b",
  "key20": "3P31NYdzyQh6jgkN6yzN4sv3sqQfzK5wZ5oHnWskyJqqqN9uN2A78YqkyBEGBs5x1nxx3H5XwehSa9a5cpMDFSEF",
  "key21": "4wQYvzNM5GwAapyAyWzUCz5DXGzp1LAi8hZbNEEb4vuPrhrsVrzSYtYNduyAx7hcXMqLR1GQe1ZnCJoEgtLg3wXS",
  "key22": "4om2ueoptgkhhKkqFgrJovMqTpoMggcH4JY4gfdaKRtrgomyRUyYeKx5KFPa4bhL3uyaV6dN3KRkKKSVs7YEH7Qn",
  "key23": "7sjFo1DsZEiqQaxmo9BKJkbyeeE3qU39CN4jUN3SFFHn9VdzkpkMJah8VC7fSUwpD24ed25fawkCUyRjB9yBncb",
  "key24": "3pXYBZy6FooztmGbTdEzmCQa2qiLZ5tv8X6XJ2Kty86ZrQhSXPEdZe3gQjWW8aQzeU1pBzhWhTX2fHeCCKLmzJn8",
  "key25": "552Mgiw6xHLdWeEa14hdbjXSfwZegRfBsvv8jHn39TdsJWW54c8anGuqAj4BF2JUzyJrwnqpfswPpto3JwK5Cv4h",
  "key26": "3LwMDxASktHSVC1KPJg8NGW7ZTEoPae3C7nmYZt2cZRpWuombZqtXesE53KRXwoVGGcuaB7Y7Dzq413R27BcDYwQ",
  "key27": "4f2mZkVFGBQfKYKfq1ZHitPSSp9zJNrqqpaXEBXJSgDiG58zqFMLApYMM8jPpWukjwmKwGnwPVTHXTGhuCddCV7p",
  "key28": "4hKaWcSXxLjywBL36UHPLHfmobREUZLqXRRHJhGFTNJMiJ2E2LegftAYMpxNQHnQCeyujV8s1VkGdXTcGitTBjse",
  "key29": "5PoXjf1B7tWfrEhW3jQLcZeA5yPytwbWxWAfWTuyKEfcCumvcJjJoVaeTpD3KSXeFVRhUASqoPZkr3QUNsBDB7GG"
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
