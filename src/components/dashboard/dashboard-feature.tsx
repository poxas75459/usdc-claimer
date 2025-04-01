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
    "3wVeg1Q4zYcvxkxg7nQKYbCz68QiGbeLQ75oTkAcWZ64qKSdL87MXhDybRR14VZ3XVqaGk11RsEPyFVX8pr9nSxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QmQWamy87XJFdLAjbKVzLQ1STKCmFQ4tgzjgrt29hq1oACDStTmQ2yHhXqWjiUve4qktVBy1VZBGxLJ5AHkjvM4",
  "key1": "4zXzbYeXmRqvkyhJnQyskwmP15FibaPmz9fr3U3jcoWMtR3q7DNtALNq1mBYnvgfRe9m5fjPUr8yEqsC65N79RmV",
  "key2": "JDCCibDC8d4qQACbeeNw1s4zEmivYY8Fxi826Rd5bmiKcEPuB4GA4dNMbU3XDe7svu5A5vKrVGydtghkL5MU185",
  "key3": "3taRcYDts4HCgjgfGMraAHGgeVXXxHmTEDLS5c71x1NM87dGnb2FQiD5J3tRAY4eniuitxWcugYDZwxdd9VVLdQN",
  "key4": "3hoK8qu86kg6Jd3G5srbwNwcLohkkkKvMNcUNYkVvo4v3cm2FBtZctKzw42N24WGjitkhtdcpV3uZPVeKNMUQGud",
  "key5": "5zwsp4cdBvoEKJdzqigSkjkEzcLSgc7Nzt1HUyzN7t1SxfNgivuryg5eXywVShhTu4qo1DA8jVsbtc3gUJpe753T",
  "key6": "5XN3v85Gs62mu5UTxyxqXqNPsrua3hHMvuTy9r1xHgfjd8nAj6dkSuMRkM4JseEkMPCNYNZEbW2ovBuqbWgPLGZx",
  "key7": "2vffuXFDD1wjctFMKPGHhJ3ckXiKJwnFRD1fztYX21ZQgFVW9xn1FZDaSYapUGrx9bc4EGtuaoea5RJNcQs3hyQw",
  "key8": "4jb83VKvnRTgfoTvRCsSfbdf37BXQwQ15f8TBviNMuRUrZ85s9ua1hTQZJgYq1oDcjcQJeTttLYeefjDrrdb8JTn",
  "key9": "5zLjX84cF1AAkzsdZdCdbU9xb6zE3AamsHotFoGE7SLfDKaYn881MMmPSAHT38Zye2F9hx9zV3v4vynpSdxLCrtK",
  "key10": "FKD71CTW8LA1XDoEh1zpN7AvB1nHJ45dHnefrMgfjLkh53F2hgF5g5ZQUhYUfXzgxk5Var4dt7PBAUZc1TjGQnD",
  "key11": "4u24A3dSnqfUeot9EY1v8955Kcpj9FhKzVXDsK6ftNnEHeDULcXSUsQVHDLEQ1tbcGFHHfM7X3JEw3usyMXeefDd",
  "key12": "2unfE7tERqxJTsqaEcEHdoVrvkWwepnLyFmusZRNjv1ZuQeQTiSoGzq5151ZL5NYtekjWbUyYB5GCYxRR6jTu7MC",
  "key13": "gqf42iSrcxzNnDTGHCqsh6NzGDNT7Znbbr16wxv4M53ZQPa2X4cYCgJjJxPJg9tdYuhvfCb5EQHs9PrRGLCDPyG",
  "key14": "4ZYyPoBYq5LpQYVFhu1KSGeQy75FQYrtpQV3Wzn1uaxt9FTzSK7pvqVUcTVMwYs23CAFSshLrbvhCRz9LmFStvJS",
  "key15": "4meoGyZfuH6s5XdRZcRZqcX3VGSN7zo9wPdQH3vuLAkn7gmE1tbDk6wj5zLqyJHSsXSSLkWdXb2P2ccn7FSZD4Bd",
  "key16": "56wDJXCbZXWViyiMkWSFmsUSHd5GtHGDXX1Er2tnbmNMrcPx7cnMUnnwDPeWGguGhdkAMqTzMqR1bUHFUgzch6Jh",
  "key17": "4Nx8VKpcAy9cr5ymMXM55mQmJEw6qtzy8njv4LzuT3cMbX327oEcWgwT6CS66s9tF5ngKWf6B8KPDgfDCTFqe45V",
  "key18": "5LgbQJeus6STpJEHcDXWAKAnHxpLDwVVPwvZd31AJz3AptWjjCRpWq123QUK1dXd2r5b7sh3yfKm3BggJTDbjFFy",
  "key19": "5cXcRENCfKZsWkwEieVNPsbnELYkmTXjZBiEqcf5sxrjTHdg6gh8n5zjaeT2wSGDWGjsd5a1VxU2Qqe4gbBFECHc",
  "key20": "5XdiywyV7QyeWvFU6XJr4GNP12GubeMCwF2VZzGTxumUkrhciWCLHKeuaJfC2xbm9DyUe38MhwJGTphjhkYnpw8C",
  "key21": "4qKhSny3yPAftACwzZ6zrMBa3Uo4MUzn2cW7HtUd9Z1XF9WHGFdQXLbupv6DVrbSStsfsAFWDmcJriBYsvPc9a1E",
  "key22": "3HEDTFxA7MMr1i2x5t86cvV6wCQruRMCHykADF69gJFxZYkSPWY9AEVBut4gUXzSE35WywynH4vFUd4hvq9PPb2b",
  "key23": "3vSguqnYwRAeDP6zz6q8MRoJL8kbhpeNZqLU6xMKx3ngBn3otUUgerNwDMLCBpzyG5Dg7mHVeknCQNbtvqSQrSsi",
  "key24": "CqiACiEGYAmEfWMj29Dvj8UrpBHjsVMJEZ52SULrCsVJvD3R2Sp9DrWFf2VomBmysVzLtUJcwBctzJKsqZRMG1F",
  "key25": "3eLosD687sHMX3H4ubiuTyVqGnWHYzYi46hRBTwYwAoF5RtTsgGaq2FjtLqLBUmTkF7MFz41TxTZKuh9mkHePv9P",
  "key26": "31WwHT5nCvtCjwUJG5tjo5qdjHRiB38qAC66BcXLhEydobGwy4eE4L4Dgq7qfeXGbQGsh5r5vK67Trmx2FiJDgg7",
  "key27": "iVzC5Pw1BrQKbuCniBt3LxCRFFg2c3s7FRR9Sw45b8qC9iuN35drmFzeh1urVM6ddsmeX5WaU7SHF1iwcQt8AFG",
  "key28": "4YujKKwSABsacKYVSDRsxSjLFNYBea96Vy62sJreqdpxjdc3HeJyWfVCEmTbqQnBV1BYACd6ySbQD2KRVH3bUYWV"
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
