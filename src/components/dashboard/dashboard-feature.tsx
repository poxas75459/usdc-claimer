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
    "5qHXLzDX9UotacHwJuH9BGF7B33nPRpCAguCiEFRc1jdCiVCabCxf4usmFWFgBXbxC7wsM991hdnHpKYXKfBpZQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ovgtAbzmGokpgoNEKCe9wFLT3ceM6VxZtCUnVNNuanYzfZahfunf83v7V1i1tjeh1Snf2uvveLqLHFGc4FTXnH",
  "key1": "6WgCMrYbgk7ky6AA1qjxo11jm17qXLCbgTg47CXxvcB8V6K1ofaM64sVY6agGyFrHCr9E6biWQyBkWFep8dpafx",
  "key2": "3gp6w5yjZ66vKwwGHej1kSjkvDhDvcPZMdFMe5dsnYx5cUkw7TQRLv5jZYhoX4AT9MK36KYq8sq9D9gi9h4e9ERU",
  "key3": "45nhoWcvTWhNeoQW6Lj1vncYhi6akftBU3yVBRgYB8rNbkzmsNyjox11pSa7ndFQuEyAk2zJawuWposGYz8aPZDu",
  "key4": "rKsH3GyWUQ4ScZc9ynJpKrWsxrwWeSqnSLGV3b7vxM84ErenJoQTdPka8JC2fKSaQvW8NVtJd6YdD5MUomKYY1m",
  "key5": "67UhAZZN1tnrMEFDVSvxxoYr2GTrtptrmf7KYwFaXAAU1YFpPNyQAnm1b7orXsL5sDSUFh39ks79TZdPiqXhM4dS",
  "key6": "2bcvUFvcnPZa6agcx7u4aPcCCALoZa4XJYmzrbr1QRff4y6Q71sXyJoAcvg4s3Yx5kGjZjNfbNoaumqAWBFwyALE",
  "key7": "2n6uTsSX8G4USMSQPssinGzD6epLMpnk2fVKphYUrzNoxwY6FktPpd16HkW8urfJYdX812ooT5Fyp5x9WY5RfkkA",
  "key8": "58Dbks3dcEEaNSvS5i1RJuvwvKJonLTSqkh9B41L1RfwLM64jq31bNpsTmnK6HZBB5vzqMrJDsCs8L3TDCobW4qF",
  "key9": "2zuM1wozRYVzoKFYzSi85BWao2pwLBUa9Sgg6acUpry6LfathCaAoNwvWrSVNHcrmSms9TXHFLUfrxVBkuXEZWmS",
  "key10": "5owMR8Ph8HjK6Ekzx3cMGNKL3GPRRFPGu47CqCdo4QnNVKA1LkBc9p41CvsqENFEDMWTpY3qc8GwDNGmxtBZgcTf",
  "key11": "4Y1pxxBbfzpKB4jJJDvTmjw2bESeoDb1R8yemBPkgnwZFk4efyB6cY94KojgP64ZT4wqN3te2VHGSPwaFd8XqnVk",
  "key12": "2EHq8BBj4MLPZccQ1DY3TW2eGAuy85Mq49EvdYZPFj14hiS5Be7uNsrPrRu3ZmJgMJ77QUPifD1CQtVHnsmggQdX",
  "key13": "5PFxSyF7yiCXkTzPExMXGbrHdFRy8atcfFY6EuePd7UULtdq2zACsHEPLhuhnSEjCLFDDvY4K9oFdWiLaHR5UFHq",
  "key14": "5kzvRJR8ZCTTAPALJoAGoVHinnb7rHNCDdtPhG9cNjYZcc5VYqMK1TDcgqiVVzzPnqWAUgcprLqiC6YXYzwPpG29",
  "key15": "FgLZApcJTqyUjyCx1gj4m4HuNUCWqQA1C2TaJ1VyGFXmjJiNE8kYWJG9EDCvuCviku9kF8shskruPT4eYc6jfXm",
  "key16": "2rkB3uVuuebXkteR19ucTFxGgmipqyofoaq1u1SmkYJRPgmzQzPFJPVpirN73BaERivhk67Pv2mMeC3289i34vYb",
  "key17": "g1acbzmNWX3puAtGTGSPzApEghVEthhNpsKkh15JK1h5jKXaqRHP2S6y11DihTPAUNhE76BJrx8Y9MVbWUEQQBH",
  "key18": "3NffV8z1F4bXnc4xWEaAinLDoML5xPghBCChkskjUDYAqEheVp9kfonQjxjUjZ9a6o1pcNb93Rd7EJwLdeqkbXFR",
  "key19": "4ZZf2hPm9AxBa2pgwx41zfkqxWtL8vVeztr4JrXbg8NtgKGFwYGEeuwyCzuf8Fkan4smDAabFRHKurnScwkaZXEr",
  "key20": "3NdjqtRyyJC9pkQhGEMmiFHcnpJ6XwtV96cSNkx2kYWkXRg5gt1dAvqPccaekYvfNWpZSrUmmoKZ1nikv53KjrgD",
  "key21": "43FshEtXnLKEo6X5j4e5YZSxLe7531p7xZaNEaKrLwcYc5punivW6tf4DjJ8N92Us1d2Eh9RB8rYteDmaXfMCrMo",
  "key22": "3tF7MgVCvi8UQYQAiTucs9XMooQWMhTb3X6mftR6spWAxRzsYX9QRuCww49zeEkQS2tzgtrsyAyGnAULTweGMiiZ",
  "key23": "46zTnASiJ9Fup6JQ9ThfJm84iAKQjbXFUj6wVenU8EoeTzfBcHbQ2VyMZAKed4rvTxXjpkL7F6YgZnsQUxLR3Xd2",
  "key24": "49XG87U9nVqJ6CH6gVTuLfRKp4mFF79T8rj4qiH49BDFLjQNSEViYhKWqkgX87jtuUoSv2ET8dMFR7ycvcHJ2GJN",
  "key25": "4eKeFDwobCXSWDhZdZsrNXzstKmyA1XKcGEHzt1yiEj3WwJaDhbRnqAH3JFeaMQDb2sQ9xWq4NWTLyrH1dHQqvs2"
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
