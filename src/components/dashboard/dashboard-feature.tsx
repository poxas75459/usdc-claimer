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
    "23hrfekQMnvbsMTDHrLxg3Hrs1hXK3AS1ueKFMXhFTSkdwcSe3dnTYhd6H62qbgeTAFpYahYvHZFE8xrq8svvVBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AoRGUMKg9YK7tUJdAMqAioEv6ki2hamZ7wdKd186RwHiiKEq7xyNxsvDuGmPDuyJt9MPbx68TpQ1cj92n469zrJ",
  "key1": "4RDwuY8rApkpehj7GEhb7uJUtcJyh4sHwcndmYbzXYXvQNKAvsu3gEumDvVxWWyvv3pypZ9kW9KPt2QoJAMaPbfH",
  "key2": "2ooeHkPJqEEibQqh8qaeDybmsfNJiyvxXRE3ev5RgTo5xXtoCj76m5Q19cZTi6YBBrxYUG1ckEoKbQEuZ5DSZoqd",
  "key3": "4y5PcwHVnX1nSRmNdEJ6zL1hPLD81rQt4Z3AEGXpSCZSRMUsnfAdk48y3yBN78kWAxFAaFEPCuXwEyCLtjzfregi",
  "key4": "3tyqwsfaz96fy9XMUGiuaifEk7rWXeioDAQjYmfCi6SzMb4fzLphrXWqaahUH8MZeHu8sGtPTCejFALWKvVZdBnv",
  "key5": "5xqcbN59QcqkMi6Ra6CLxeYARWivrv5P63rAcPeCMdCDPYUQfeyoZxEkQNK7nhGv6zFma4n6SzWYkLsrz8LunHgq",
  "key6": "5jn8Tmkd4gqRGVCxpjdchKfScVLMsjRERaNgzNrb14aRH6fARCk6aXYURn8Qt3ZNz5FFH9U429jvBjuaiV5G3cXo",
  "key7": "62UWhA8wKWCrEcKZKQ4j356pWXZxebEfeGzV1VGqB9nQKoQcFHK3yMRRuxvenPwRjW8zSrg8GmMMf4TFpDJtPqH4",
  "key8": "A4mugNeK1pcWSDPt9cUpcsymLaXAk6phzrtQqcX9xwPd8SMuQejP7eb73SVetuC6giESgJbY5M1YWk9EgkoCiW8",
  "key9": "HUuV9yigiEx3rRtGudUsfiBDo689VJfQatVEk4LHmjcqpftty31BqMNtVQJzNbcyk5SHJay3PruB2GaqpbKNGwB",
  "key10": "2AKkYp5pmCeijh9kiuv8rsbuMt7jYvdV4faoKyU46aDwMxnCqeLGXJN6WexXRRsbeVKrhVJS138sDqeJETii5Wku",
  "key11": "qPvbtRAbuT5x4NRpqUm7YZ22ymUmeTLfX7vWCUqvyKo1PvH9yemKvEfEedQfD3oSbjuxRmDG4fgV3ojuSSergFA",
  "key12": "3mwhN5arp217xzRX4VYBSQ14NYtKc3WFsYswUgePdDWJid5ZYGH5dkK7ZRSoKZFyDdd7DAFBYapcSS1pnCmZKP5A",
  "key13": "ugc9EVZLQCjikTWMi8cWuv5dwBeZHDD7rY3LujKSYPVahf4MTWnuzPdWk3A5WgsyjZFq1Gfg9qUJSb7J78fzSpU",
  "key14": "cQd1YNyD35MtZiaggvo5tqrE9wkLMiKxqHwRNWCDdWqdKKSf2WYo7wv2sJabePwNEZrM229n2yS9sSvStNxuPhN",
  "key15": "2EK8pPGGsFAJHnFSVT386Je7vpnCNGUzESfhdrJKYzqgd1qsW1oNrgPCtNnds8uFQNnjABj4SK2vDvr9UUt2yfgw",
  "key16": "2hXMgcdkygaZnVbCVktfqg8w1rvdwJRqi7mcbvSywRC9Y4YGE8isK6Nwd43YBh7HfxbJRvMhD5KRUU5p6RaL7R4s",
  "key17": "29XJqmfG2y5HeDN1UyJ4biTqsCBpsdjnFUAuvLMhQWMXNkAmDjYFJpDKrTQJNes665iqpNfvijuNuBpmAuqE2Yi1",
  "key18": "4dbD1QPcCNocCAvh9QH8fQaWvfCk6zYNUzkQL3n1GTrJ6VmjYeEnMdsF1ShAnuTdrHLv3vqxH9gaqekDw9uoszxK",
  "key19": "4vx8JgzjV5BKEhUtDvzK3oaejoMBYxDBTHArH77iQcq1fTdY3yVNHtpW82bKV7svXNyzsSo2SPiBsfBqxLVNWsMn",
  "key20": "4peTgYn8WNz5dZmRtkePstoju78RkxFe7fNVBrBwRdqEM6HZYPYyCJUj3zYS57gXsKgZPH79RvBJQxWPdzyasftr",
  "key21": "2fa39CW9QjLNsApRtLcp54zjSBnJvbdy12TNSW3m5xEG5ArgKAxB8QvRhnGwprZHsiha1aDAzjxY12NbASufYD3g",
  "key22": "4odUTSHyKHXXgUqpSbo5j2GSU7fydjkrw9av6BpDLsTrjzcVHMgXxuNmnCPhVDP7GrLA7Y7YSt877DGjwBV9GXgZ",
  "key23": "3LVGeLH2F7RdvkJLGEZuXb5dzoUcN8MjJDXGmke1EzwAArznj5g7ok7RbPWUn6c5MZsY6gT5zro7wUPkPmcU4ZYM",
  "key24": "3jHAfWLhMVcjZVeuZvSXtN6zc3dFRTqVsZm41kHdswpDMYbxz6bfx1TeWXFjtxkbgBDkwKQpXfxdHsC3711fHuDa",
  "key25": "r669TU7fUCNBrPDQJQik1JmdJNPEpnhdhUKiyEyQPnYqF3G3B53RnT3c72xkn1Gi8SdHKALhRBybTGdjbMwzYfN",
  "key26": "42mibxJyiua9oEhkRmoD1QrxUpgmCG263yatcHKeVM8EtP36dZrXNZiCpN8TY625ZNvPjo3vPQfaVDbXCoXJDz5N",
  "key27": "2HUTYjGJs3Xpt7eCq2wsB7TgCGZiyw2EDSatbBhJTQ8VBg7HXK8nKNR8yXihfQoNoQ6fZp31qpke9QCvVqYRFMUt",
  "key28": "3yPVcrtWTyG9P2cUc7YpCbfp492TMyp8URmVMAq5q497JVbf1F8veG1Y4SDPbVp1yFgr4psy3r8PnBG1ihfRyJGn",
  "key29": "61uHxqvkbJGUNsYN795fitx4ZYGAbaxVai5jnmqPUqqyvyBjL6x3mrZD9DTs2CuGY67v63nehqWoqfMzG2a6oWYY",
  "key30": "5D22DWtUbqP4MJEgVY7yPwStnakDeurBRkteEMjHcW7BKjn3nrkgr9q6bzJCef5BrGM6xAjxrAaVkiJ1oATdg642",
  "key31": "fXWGrFayGHqWVYpA1sZZe9JGL11AZK9DGVAKvcj3BZDbemKkdsvq9n9ZALKMQC166e77ksm6MDZTW5gett1zP3q",
  "key32": "24dWQo8MtF2drkSwjZNBJoHRcMETbQxqrmyWJCTJ33qhdDCDYD3b6jTGo8KX4N7XZJ6LpqBrMrpqDEfezngxDEHC"
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
