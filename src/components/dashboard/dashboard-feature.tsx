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
    "4yhMZrEsJ4KfSBbF3GeSkdxFNAFdRpmLDGwJfFRCSmof5u5StAVnEh89soUDaLf3pP2MBCt3q1X368Zn8EPdPW6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EscMr1DMzThUPpZuhipBJacpeCbQckER4FuWuzx4gAPhsZz9p59JWhE9rPsBjt8p9kqS5KCL11Le7f2Y6Wu8jSG",
  "key1": "4osyMHH9TUxWC9wZKxr25vSJxzBusHwoWg3wiZjXEsgbY3ipoxmvYauo29ribS6pz6YYNHNnWv4ApEC7nBKVdcod",
  "key2": "5wyULY3zhMxFB1CyAQyfRxCKCDbX5mU2k6CCvbuXJkxqyNbhAZZhaUoyV6dZonPPjoRPAKwFgegfUH5fw79GcmDM",
  "key3": "5eT1WBe4APD8inGyh5bNbGh6R2dtWvKNA4JRJi45m2yRPDoGhsPPNRR9ACyQ8kEWysbBwnNrgPMmNQ9aq5DAUQ6j",
  "key4": "2ShKtUbVYxz8n9jFW3j81DDpi4kPZLCcXADCY9oXgm1AxLJxC7yf1K8X99XP3oV455W85X3S9DPLWY1yrtfMCZKR",
  "key5": "zuqVaTfQ9j4jXvfk7FigzqX3Cc3AhiJt6foaggarFLbyGSn9gkJxFjF3KhTMWpF7JrVYZrd51iLa5zzvp8BUr1w",
  "key6": "5LfeCDpHS7Bo3VadNkv86FNYycPVhQkXA2BxCcNxkfW8wKZk9Eyeq4dkoPiDL958dtbsAr2QbuTJz5duxfQ7xLEH",
  "key7": "3QovW2BryR3e8z1GFW1evstRKCiFkoovem5xkhXHcUqTT4JMwh6EK8kNB44PueqhscFVnMuAAFyovan84zRwtFZi",
  "key8": "2rScjF5buULXBGUXdw52rysyYXeTBcSxtKK1Jr2mM9QFsxT2x4YvdaYDkEDSMsdZa4Fu14A95NA9pHDDLoifC4dj",
  "key9": "mFMg8aKnAN7hg5WW2rStKu6pXrToEZkst33UfQjDDWBrwkcSyLoC63DT4oPc3G9bbG5rWRbgMXu3H1qdUU6JKaS",
  "key10": "FPNxyYQkYHDCvmaqWMkRAqv4QY2SP3iXhxg3goi8oaMrWTb1YPrAzayxGoqUGKZxdxhHD68wuYLfSHD7PHiLQYU",
  "key11": "5YyqMcXYiKyqhN1CpaaNcq8kHYoZZzfqeBhdjCPPYyczM5ypH7WofdAgqUfyp3jMZgAwktKDkA37xCyGBUsTPA5B",
  "key12": "4NTQAamYNpNJ6GZ9nEvbRDKGEMiPZFBFD6es6wxnUGp6ziei4CZro6W5tvQniTGKE9fFmxeWEi8U9QUcRUX6i5eA",
  "key13": "2JT93iJCUaTuMuuMBjAyfgMv7JMq8Snti8YeZoisQRcaALomG9NLKJzeTTwegc2646pwQmZKKQZGvQxb6Zp6qcRD",
  "key14": "DLvUX6Gva98wjdykRUaka3TqdeDhAM6xCjLBcpzFSqM6aLVchwbZDrgkmVrWUJih9emPL6h8uTuZb327fkyAwhv",
  "key15": "DDVsJVoKq2QU2Hy7DJtkWVxFEiK3WJFvEEnXGW8Rvy5biTC3zNpyEHi9jNJjQe6WzqGe11vFJEym7bya9MZFvTj",
  "key16": "3wjF6xYM5vMBfwmNP6Xx1ZZLCssQ1JmydBa9JNKPEAZdZ6MatxYCC8kTpSbABmfkQATPEc5pa1peyqZMSDKdQCey",
  "key17": "5YC4kCsgyhg62UTYbayprk2oHZxG8qX5qw6sqoS1uns4V3B89XYHKD1S1UaEd2oqXfVVJ478XaQN5NGaqdCcfYmM",
  "key18": "2SaDxJmvHJxsGt6u6zBmByJepesmM6EqMoR4D3jrbNSyuKMH5R3gHi3bYwGza2PV8U1FmmQMNRBKzpVczdT9R7Rg",
  "key19": "2mpPGbnd5tSGaMCm2M9MyMFJ6oJREGkwjHeNhLKQiFDdhrz2THo1UenB1p6DKsJuh3teAaXJKj19cArvpFgGY9yz",
  "key20": "23sxE6hZ9szeJBteeydToStdpBwJAp8cpUvN84GeYQ9HGkQAfZ8NasJLjuuoMgYHAcUU241wjvbVnh6DYwDsuVb5",
  "key21": "2sDByLwfwWASDMjfhcNmtZ5gneFq8wnLoB4m9BQRfTpNuZj3At22sLKTsG6DjP5sdwtnw2GenVTEfTK5jbM2w2mt",
  "key22": "3N7fBcTY7omHuZRCyDEeGXQAjtas4mf22ZA7ENqvs5VVWcf265uKmsRKzWrrD13pDqLova2A5bti77Pt9wxY3znU",
  "key23": "3uFrpw85hdCSP3SC1rd4nqa2GNqkXpDEuJGo4RecghsCKQFBTvWkEyenVKVWgY7VrdYDGZrSjmaB8Vh1XEU2e8ZD",
  "key24": "mXd8bPwZLuqFyjd2e4VuzDiW9RVgYZUpJ6A1QFRJAT4geesDK1ae7o9WrPZnC8wWS13nirxmCVMvWoU44RJzhs7",
  "key25": "2cGTbR6zG9JaxuL4krUR3sLiE9PJUPpDGpUkj2wbAUh8AbG37E9uo3M3gLsixWpd2Ef4GEvhi6he36QrNp1hPdRS",
  "key26": "3jh6uhtyz28YUnPw3jwccVekQ6MkuAcZRcDbcfP6csUx1SbdVBQ1MZGZKSzDDsDH38DyjevCLKREJBsTZ9WuuBTy",
  "key27": "dzwWXQ5ShUEGS1nRnGDNgevSrs1YdMPHvsnmHkXjRCW5WJ13Sc6GQBoYETmMCgVVuvLif4Z3VwUVLTHWogVgYRS",
  "key28": "4rB2FTDAQb7Y93HUqaduq7FQwvEgvMDih5Edijwxfd4iwH4XiKasRtRq93knr4NqaqekU8gaFQwGSdyKSE5KH8HD",
  "key29": "56VpxE9xSpeKuhtC3YoKQZWG1NSnqgy5sDjcyM6FmZLE9SdPqGiUDQQftzRVKLieS8vpyoyZFjtVooUHe2CR1F2a",
  "key30": "4EHR4Q6bxLPUZxmf2paSfM9NksTjFaKuJxo9Vi5BCVeBqVrMyybF7uVS6dnZXPCnYFDtstuWnQvDdUHoCaxdZynp",
  "key31": "1heCk2qQvU3xHdumLWBHQ2visdCqVFZ1eWqGnHCtoiCBQb4MXZ8t2vj6uPsrgk1G7ypQeeVaaBTjJSvnWdKhCaN"
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
