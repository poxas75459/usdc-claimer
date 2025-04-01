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
    "3tNk9DLeAjy1ECffXWnuVuFpKvni6CS5crXsx8zr3BoXN59GhhCpnWb6YaBtZgWFH1FPXiVscyu8ZHbuG7iazEjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Py8mKS1eNUaAzNjvpbecgf8r3CbriEthFmRHikjQpB583CsB7w7C1Ed4vnxEDwgKRwQCAg1TVF9j89qthL8dbw",
  "key1": "4r6oT7SFehB4SiZDK3tvbSfQLFrvDoUzcwKwmwmzgjRzZidsz1FimedMQD1x9xjeNw7dyoEstyR79UkmBxiiEkrR",
  "key2": "2kQK3QUdnNK1wxCmuV7ztcSMgG1WpvDdLsn3RTtRLCXjKpgppS3ef7BBf9jHCePmt7rd1nSPJFgCSArmXAGpBYAt",
  "key3": "5m4VTXCyVwzHCAtFZEa5eWtdwLhcstdw8EuSU9r3N3v58aCotmATddJJHGH9zPoUVLtwg96mcEvKnNqkQkjbSMvM",
  "key4": "2FUcD3gXxzJaova9GHWG8ktWGmRFs7NjmWsTPvJkKWLixZWi4JRXTUWZLVGjnoCK9U4CYHv8YPhAvHSNLMxn5NMp",
  "key5": "5LXH3ArvzgXRp9aV7WvnQx2wbpNZX3ofHK7ETE1sEWbjZQWwKQuxRektKaP8KgAmNz4EdY5QEtFpkDFhkadnaeuV",
  "key6": "5MHaZJFUcwtdKWanA9Z2cWFaUZqnYN6Husxj21YFVyBnzxAkjhkKmUrwD4P5NpokTKHVQK6zU8ntWYDHEySKVfiV",
  "key7": "4jRUWHHUfWJHPYg1WtZ7dbdZuYxpwEZQitZXxqQY5udsgpKfCRxYb44RdW5KGs5nt56pyCcCyJ78P4J3yn12iQcu",
  "key8": "4ssyXm6MQAaNEamLoizmy8xxov7hww3MEcGQVcSmBr6PsZqnG7BrmThaYQ7HcYz29BRi2ncdU1YYGfkxZHy7kbkf",
  "key9": "4hNw6u7F5y47ntRQoyHueogkoUp552iXGERKz2wcrWuy2gds8eRBVHYR2rXt73dtr8DgpScMpNEzLX9wb4NrtGZ5",
  "key10": "2vECJpvoAchBdJpW6opQTzZEwQoMGLLrpTeH5qTMNpdJR38FqVBmNPnq5nmVh5Ru8yHLp4oere7jNnW22KdeH1NB",
  "key11": "3pVR6Uv7TkTEhum2SKxJgwGDnxP9TxeHPUizXGQjakHWDjWBFgu5JQ8C695a5r52TaACG6u9yV9hx6jxyhKryK8i",
  "key12": "3i99Fedq7qRTthozLWcUCXUwF4WKiPzHEV1WecxRekVbUBdjgvqs9GHpCmg8vpU6qmj3dokrGcNEaqb6antPW7sd",
  "key13": "5K4QggKSZS1pzLg85AwVojSCj3Sk6G6pckUjN3f5EkvwKDpHFsHnTQL3WKANeNk2EU5N6XD3MLZwSxnzRc8trkFQ",
  "key14": "5Nn4G8JXWcuvJHLtg9vQoCEeLansmtBepVGjBmDQoYLWy4srhJF5UxwtK41N7sgwNkQZoLQ5Chxdg61wvJmPTiyH",
  "key15": "5hZEyajgAsiwC2QUaGcAD56WdTqXdCfgZ3wPmMedx94D9KwJ6SSfUMZ2BMLwCPy1MiZJWviVbLWqoed8Eisd5rhq",
  "key16": "63w4mnco8m51ssemQCnJYPUukkVYG9DyjZp8MgXr1unY9TZWyZyZd4t41V8A7jgabcbVGmMvXJZ6UvcK59GDZuu5",
  "key17": "4BYceJ96xcLs34d3PMbdxmUKHmM6Z51nVarvQVmNbRht2ox7CbWJAneVD8PET6jPNhaxLETEgFqyis2UzfzRLHn6",
  "key18": "ARsFXbjZNETuewWnvWKcGtYiYJs37hhwZLdVBaD3xufASS4JohFH6GPC1kiPS9W7qHT952c46LFwSrFpZRu9V8m",
  "key19": "5GSJ5gipg77z4PXt4Uq4KgtGyPm9ayiroeKfoMdz2MW69zUGMavAWphG4ffiF1tDx46dKij7gEFqPRKRJp9QwPUn",
  "key20": "xC6Y2d4jSGACiHEt65G7JW12ChKLvzWHEq2HFcSP4AHipyCRsuYVursRPnqp4sJXR1aKf8qTMKdWnMHuVanaMRy",
  "key21": "3qbtfH6B3dwK4fikBhPbtckuW9XzgpC3J4vUQnqQRcje8zsaAiC5J2pomebrPLgpX1WjXqfTSqEJQFjrT6tuGi93",
  "key22": "3kMJMzuqHYoQoGQkddadMSusC9HaZuwM2vrG6JdYwXJyc3CE9oWCTLcQJqxPBJj7ijzL4em4ofVgpM5BNgpk8ppi",
  "key23": "2E7C5omEfRVXfKa5r4SmoACAEXe8bGnrjhVrgD1ADzyohSn3rtkRoAu2QryxFP6DKUZiaPJZNtp8oM2cJkmw3pTQ",
  "key24": "5YWVG3EPW4He7cjsCDErPjm2FByYgiZpzSNv3JD9LVPJb3eVWeL6EtiFi9gh5Kxm9FMN5pK3NDrbgXn4k3hnYMMN",
  "key25": "4Rf7d6SoFXCsagnWS3W5oSmpjrHj1PhBv3KpuzLkJE4Aw2ofzNYDjyJWQYYxGqDnaphHR8AM8sYWUMsj8eJXcGD9",
  "key26": "CYyZ2dRjCUuWFtAtYwkUB6id4v3CTgxvzLiUMKSdrmm4smG2v7a1fnmERxr8mHjTwkT6pYLmP6oQRiSCGdT5hR8",
  "key27": "5M5r6Vyx3vA3opTJz1E4rPrMKDuJ8nYTw3WYmrZxVQpmP5ph5hLLwxfNni1uk4PxrCqWnTz6xTBqiUv13zvJu1sf",
  "key28": "31zyuE5Fow25QvxsmtRHRw8qFMNEDFSssHbAZB1kZY6VWNsJ9fpb1LyzSkNg77mkfYrT4D6M5RwTSn2MLMXaTz8Z",
  "key29": "4yYfagwcy9j9YLXHi1gqUws62zEdTSqyAGLAXQuKhTgBcjcent4XiCfn29TabbyAoPGiFvbH28qbA7fzj6unQWeb",
  "key30": "5mFqeggk5ysF1NTS6fvwbpDja63JGZw74iXDPAFCZ7dunLzTPJ1Fu1xRWCGfC3UXKFiSdjjdgddXMGgdsz1pQ1GS",
  "key31": "3JhtHsUVKwCttJr7ud9XUFknuQLoeCwykAu71pNmvRt4XCaYnC1Li9RGzKs3gg8V9PPFcuCBZuAxUf41sxMvDYNW",
  "key32": "3bb4dUAbw7SBvGSBwJRFzyrKpxTsUVawbDkLnZKdPh7EwX4RtWioG2GGqdQAqXczXhu4nSEdg5SH1HCc5DguMTRE",
  "key33": "4oow3mAi4sXk96R3jDPeCJvcLnj6spbvWmntpDAnoks3q5NiCHknS6K212RL9Ug5Fm6yGwr2cXC3TsBFVkR8m7D5",
  "key34": "5Dd57Lg37i95iVFMC98pV9AZLnaFMgsFGvzsFpuruLY2EQ31NPcvE3M9xfaU1JM3t3M84nygf4XQR6C9TR4Yq6Xk",
  "key35": "4nAJg38wt5hzufsme4fsAggaHAJQaJx8LBQ6L8tW6Z8Ry1hhei2zwsm34fGHFDn7FzJ24d3myg6YXiq2gwPKuvq6",
  "key36": "22yFR4zFhR4sgUr11R54kW9ZSuymQ1q4XmiwricRqV9ff94VkoB5WguYBDc1vPRh2hntrczdEFypDG1zSVtsu1hU",
  "key37": "4zwcCqN3EkqRtnXcRCU1FBGPr5KLW9mWheTG1v1quXPfEtKdjKWGXRYVueRKZC1oW4dWZU1B4Xb6ufmE5hAjbL9k"
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
