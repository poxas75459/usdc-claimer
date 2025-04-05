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
    "4VkJ2pjMmTSFdJ5nMLdi4Eq2fymtU9rc4nLXX6GZL3Q5A3ikCL85fzkq634sFcEHtq16SmThMdqd4McLyR3U2sXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PzuGhL18Uf6Zfqxs3oNekpbTTamMwUc656faPMqMKCnxSUM8f1AmMVUJdcVpX6MUbZLvKZZKBB8QsN48g7GTZBs",
  "key1": "5DHj6kiawvEnv9ZwSNjUAMrbYQxpUdvacrKYWbHNHQMKK64snriokfnCWFTPLBeKod1GcmxCs41yH8X9Jhe98Jxb",
  "key2": "rE9C27SqdMGhG7YmMu7fFip4qzvoEub9mZ6ndiy4smSfVBKJ2NdP2o6c9R6KeWrwChGVYaQyvErsbJpL9we343X",
  "key3": "2UJpNHJ5F4ejvmsni4sPirqhJ1SUkxbUjWXoGtppGjF4KbD8UDmP68nwPd4SJWH41LP8TRcDTCZRFAqMbH8rnDbP",
  "key4": "67pPd4j9c2Li1tzq6LDsKug2DCafBW72TxNPsEHioSRvgXLshDRbxrd9duYXM6aPnLvmDTYri4WT9cBJEcZ3FpgB",
  "key5": "2Z27gcVQAhuSoNdxr9tdZoLrgK9vDjGqJjdCa3RzwtUNjckfwjKyGu89xcirZ8R15XrtWYvvQmDw8VKVkaXk3jaG",
  "key6": "2K7pdCDCc4fWjV3EBNAWLrvYGwYJbhCwVUwwL3JmMVHanSZhWkZpKtGHDqomCHVcYiWVBMoAX8QZDh3nEGpguyMS",
  "key7": "2i4xpHUw75QhcNU7E3NKZgRyMWMPy8Hn1iL5neaQRTzJTprMGwYq7nPpKwqANu8TwXZ2NRXs3X9eka7urbcvg17t",
  "key8": "4EmPgUpbiq54Lrf4fkFjUFL8z3osW1yz91RtCdB1N15yVU9WrVQwZaiTmfFggfaN3Z4JXabJowgQ8eixmq1ptcmy",
  "key9": "5cLN2NGfrpUgKAXAV5P7phC3k57h58JTjgC2X26Tg5xAEbnnpU6yiiLERdVF9SWX4Rnq6qtQWEGggdmdzyMbNyCV",
  "key10": "2iQ92eNWXr9XufjDJg9w3A4Hrn3SvaZA5YQNvnqs1CiA5446UU73ArFkYYRHtsnkifPNJzHWjMPMe7DxwYvnt1JQ",
  "key11": "638GccZVBneBCxFekrM6PLGk9yCb2oY36sppc5VywQMDA7yc2TNDLdD5ZoVyr1tgULdjarzvgsCHzihNFPSN8Vjm",
  "key12": "3KuFSZ6y8eGdiFT8VeCC3MummC7qbkPMWcrvp83nLozYU1TD52T7FifdL8kSVnXSgEZdvxXXkT1nKhdKm5H9DZQT",
  "key13": "5Lup4ifndisMfVYbsi8Vt2QT6RoiMGQem7gBgPU5vksyortU3QFwbN2LA241gUox7jJCNRvt7cViueN3XGrAmSV7",
  "key14": "5tVwH2MtrMHXDA2vDgrHUt6DF8vwXMHWESGwu2BitjA2r39Loh3gKM6Atib5t3NKYwEHCALZ1vE1VzDrJ7jxn1vk",
  "key15": "2o3covkHUcEHeTK68xcZNQGakYXyPA4pcaBSBBzeR1CWPabZsDhPbVXc1hn1ujSZM9wZZnbbYizWT34pKdr6zcdD",
  "key16": "2LL1L3DEr8PPKXzn3SBewEAcwsYkuSbjVpzNQxvKS7y3RtAZ6WyMsPqH4cM43SBahkjftebv6Cab6JAxQocVhjRY",
  "key17": "4khsDz8yU2LmKJWVJGtjgDZaGAzFAvzmX3oq2V8uQXSSeaLPN37WeAcfZt6sEhUkvxwmGKPyuPETYVnGFirxN7Z4",
  "key18": "uMmHZrcQoxKtNs9wDEWQgVh5fZEg4FLpWuRHJKmpFNtNMgG77bMwM17WxrkLc8Dx3fsERCbgdjt5dd9UVUFyxqT",
  "key19": "57Jjm4sL9afACvzMEALNeuNZZm5eJ932oKf1vVBAgRqqEQSD3arneGSnSYLQLMmphMZMHfiRNmfMGXihn4utD7bZ",
  "key20": "65bWjroVap99tLx1hhcMBm4dage5U68xvQHKqucjXxbSTJ3BM8F5DtuxHxYJnfvHiYBex92WXg5Ns9Vs28b3Yo2o",
  "key21": "4oStppwdCZE1fyGsNHuM9Y59Xp1rf1J8JM5GTf6uC5j7pcMhQ5jTCBGJNxuVeNkswreREDTY6xvfZTuYJx2q8Lea",
  "key22": "5b4TTyiaSxDgGMGYERck3W6ci6Gw5ZmUEGkzHtxbkAiut7vxQR86AcYGP4vioTzwxgjg12BHpcDtpbq69RERCEou",
  "key23": "Mg8eGH5qFLEXdUEYyyZ9C6vtZ5Rs5Rj7FampVgCUrB9W9thYKPDYf4Pd89Sn4JnQp3saomLym1gsRien7aqbQE8",
  "key24": "5fPAqEhUm3pkTtemdH2W87GevnqkV2Pyfx5eB1JmfFjHLWEsC6PeY2EcNCssAc5h426bDBAox557BYDRn28Ed3tw",
  "key25": "DMfYD9RHqpUfQQJ8JFK927V7jUcZk45Cwhkv7z3MEaXkzt928JAz3UnHRAPTGwGqofTcEQjUqQnoRkoHwaDxzRG",
  "key26": "5ugY3EbvE4keNiDYmE7n7pC9eXbTfgFy86P1U6TpCjrrfNQUVhHa63YindhzrSRRSv1bUC1mzsGrZEer3cMsoguB",
  "key27": "4yms6hggU5rKPi3Yv3xasob5cjvxMiKUhrnqUsKvd1XKavPJkEEYZ8k6D3bZL8K3C69cvLTJ3QXRqUEH6i7zHSSq",
  "key28": "4Ewu6z7nzdDKe5vcVDvK1eCqz4UgVfdeSCBqVjAccvhyVjWyrNNq3oaPAYJ4ePkkEQD1HioAXRLrRMCJEDjfk1bi",
  "key29": "5mVa6jAviLYVpKGApanH1KqJS5kGBrhXycvCESvYCktP1gwhdjq1hapQoVUQk5AVZ5hutckr5G1rJ9zGyErB5M6Z",
  "key30": "5DJkENRhpFx4VCLZPUBNkvP8jsFeB9s59wtHWXM4A1scGv3JJDm8fZ6rRR9VWhPbzQHac3tK3yVw3ibqAXZ4c2Jg",
  "key31": "4YsyZbUbY1eFVSBJP9AF9W5aPFFm6X3Q7s26zysSkPkBYxYzveP8cTvzTJHbJQUSTP3CSUxeAgFnMBPGgai6yKs7",
  "key32": "bMJAYkNGgSR9rKCj2NgpT5bTuSUWoeAMxxEyoRwNH44oeqwjWn7G2jXmhptNTMMzmb6tPMSsjKniyf7eHSmpVMo",
  "key33": "8Few5TDfDcHDt2h2hiTU8nUWWyS29htsB67RXZLNfLCw57et3kWBby5SWWyncr6krHZXD1NH3Nww9WKJwTBYFEV",
  "key34": "4guAC3LhHbuWRd8YRvviJU3ve8gkoqQe6YbsmDZuRmY5ZzYNXEk2Fp1bswrCWqDEUeQm4i93TRwqhXqbXerz6r8A",
  "key35": "smQarJSKmYg5ePyJB93WVAeJjdnNhaJwg9ShG2UwYVS9QEdpHGwp7etdyPmNErsHTg7y3rDeGAXs2achyJoFU4X"
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
