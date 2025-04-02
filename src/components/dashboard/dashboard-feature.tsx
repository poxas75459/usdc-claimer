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
    "64irkudrqT4FPKg1rJy6Ax7t8syAS3BQc5s52qyxf9Ki1ZTnwptzmS71JzhHdKmMrjcLv3xxkygMhRQKFyYbffXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48nEc78Ju3RH5YYJ7k8cThRnobJE1ZWSUonYas5RcfndvJpAUL5i3TEBRsamKhxfGxjnWLBizadpmsLgxo384p2W",
  "key1": "5jss3fzfsYpxJ6DvmrZnAwEzeeKhYSf1WpaUhQaeiBmfcbnDXb8tQWZjivrix2Vzxj3B2AE6U3XixBPm3o9FYmy7",
  "key2": "3TNKVhsMYHghBaTjRju4yJ9CNsgZ4ZcwGQMu6Jc36JYK9LS2h9uNmeiLZi8soZXEL1tJgtcGn49ufMQDLUXxVjTW",
  "key3": "KtJLbncmN4wCgxmGjUywf5QBYKbJaNjb7JWMcFxnS8tjumov4ri21bP4CAigf1zX43YmU74vt1K4YqznnTQafXt",
  "key4": "yqoZecQLwKk9bAPngjSBXK9VirfnYxPsThpNqG2PRpLEdEuyup1MF59pkCgA7vJzsWsnXTAtk8DipsLQFRzM1qe",
  "key5": "4WzNPYgNFa7o66cejAaqFMcGEZVFA89wzNtHoGfufQuYvyabQTCpWpM8fr6DSdZvnSCWBFMTFXrrJPdJTbCZAJoB",
  "key6": "3s2xj3Y6qfgUTuBbXocwPipGeqTxfJiXNDPoJBZXtkYN1gZxDkis1J85x4k4kWepBtKYCn3u8d14VGEuZK3Jwcqs",
  "key7": "kKaVJB5DAfwerABSieQn7WZ2BZyL8kaMUnoAVajmyRJ1DUG6hqFQmunvihb4y77vvLrVx2wPA4PJ9cbNS3QWV7G",
  "key8": "2cuzu4SjCDdSCTLrjPP1BsnDtg6wT5UafkwnbYn6aJXW4wLd7zjDXSJcS2MTzBYUAM2jHfzjHEobrKZgxJ9i3cf6",
  "key9": "v1cBMa2H24csKFsb6SsCmUD9hfro5F8i2nhZFU62n4NhitVQpwq7kGjMRY74cs5h3ERdL2Mx7JJLmRf8y3jJ4RL",
  "key10": "2Fhp9oBnqdr7zAdNxDUXCkUgU1DfNsouNAq9dDmSXuB91PHtSFe53GqQp6RoZWMSJW5gRN11Nygyafc29qPp7yV6",
  "key11": "fosuvV4JEPLrA67wLYBjwhrcPxWiUCcgfNUmcWRcbAEKJNM78KJK6XyDTZUNMGECn9ru7n4JLbPYkcHcoyLhgrw",
  "key12": "x1YEjJXi8V8G44nZ9qvxzandsVjDdJb2x39TPJ3esegmCe1PKeE1Eost9RSgm9QgWX737CQXu5En15kvSyJky2N",
  "key13": "339Qpt28vHP8bZY4SEgRZz8XiEMrki8DbU8qMkskx2UgqS6N9wjG1jmR8x8QXox9ZQd4ZmEih5y243sADTZCREmK",
  "key14": "AJko27uHJJ3gZCQRwRvfCEY4vL8hR8MUn7wwETZqAEwGLYCwyqkX7X4kbUEp9xGJLLMzUjkyMUnybx4LyTwhDui",
  "key15": "3jZoRKW5NyWzLjceFWoNG5ebdUmNfde4y7MnBWpUHpBLVkzRz6xmm7EnqgxAmx9u4y4HZzCkJBZoYBW2GwBXfijH",
  "key16": "26UrFmzDsWkJoHxN4sCcxmpi2vwZ9uukxGAQWTncCkPYpGLZrgYKJqaKYimEwUC2dPiYzWE2uNhyp1FVLodxDXNV",
  "key17": "2EVBCYKHMUGbsByz7AKujpcDjQgN9keJbtQRHoQETQNVjaMFhhu3oGaXkksihK1H43MHkj1QVPcBjPT3tSgsGF7t",
  "key18": "5EFfzsQTsfZh1Lt3ufQeQyTJtPuidNNZeXNNzAbxzN9NuU48Pb7FEP2SKJ9eEkSzsRDheVr3bxEZN5BTbN5MAu7f",
  "key19": "3JBtE7R84Hi7ZeXQ7nTDibi7SSA4aZbwHio9xmwkKg8MSF24h5xqoirhvQJ8nyae9AmRsb8PoQf9goKfz7TWe3CK",
  "key20": "5PD6zXEB2TZLBCb5ukdUrFY2iFTNGTZ6vphSwCRDgRYewmY2H7fLUKXFMvR6CxyAczsXMfFSKq54QY5zP58oEPJP",
  "key21": "3GeUW7nZXQaDLwoFWGoqG1mqsgA4c5u5j2ADB7FPr8KKY3GPzpAoaDMs8kxAKRzTYKh9H4jwiCcd3mwRHAfUNF89",
  "key22": "4WhZHEC8vPk5GYpWry1ae9Y7dzFq374FZEo6eVKwpszZ9jjPrYuxEGZMe9YP5rd139nDfgyM7MMfTWedQxXPSxTT",
  "key23": "23aM8BqXW8t2jSmwY1ntaAundccEDx5dosE86FSfxZhMVCWz7wJGbVkcxNBi6FjeTu9uAcD7M2c7FAxdeJxnsD2N",
  "key24": "3WsBLnggQTDLvzSBZEUuRzwkG7bYPZoineNAT8jxDMtH8TCvDC3QUr7E4yRuax65f4gTMhk487iB8Ug4DTzGSV4R"
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
