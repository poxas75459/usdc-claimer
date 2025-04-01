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
    "55TBEjUKukioUCKV7XjkasYSBVRUgcUtG1YxGy4tMo46eX8ngVmT9CZdVuJivbnmeYXwU8hzBCW585zvrW96w4YL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i5ntM7tJfUuoQpDM7XCJiDbV5ErWvzbHeCgrNH5fmnJKhsPfxCb2s12EExo5KkKZy2vrrhueLhdekm1dMTTLrFe",
  "key1": "zPahcfJMzZEiUbweTUM7WwsUNoPKKe9tWBBnkSXM6ktJkJRLdn67ScE6imrPFKsUQyyKrsnF19RmhxXwJQhPtKC",
  "key2": "2wX4gpKv8cj2tn55XR3sZXXrYnxbsyzLTPn3wxv84JjNqBGitj1eTS1y3TuwKuTdMmDCgTp8KaJYyDLWDJ8en9x",
  "key3": "54DTuBEwG9nJDg6u5iFM3LUuftXpmJpE34uZoZunggZ8ayvyTZXiNLJfS17xZvBRvg3Tune8XzTJ4nFbXq56iSno",
  "key4": "3SnzuMm2t7HwsBafmaaH98mJ4QnJ8cekojHvZUJoPUhAKSBJZ7K9ZHsG9FNC6KMz9MTqSx8uUQcZyG4Qh4h2dmhf",
  "key5": "45rSWH44viUNPGtRgnrvj2UPgoZcB4povSCkEtfHxhs4UjzSD3UyCMYveiDaAbU22hgGfBau2mXnqdXs2XNCmVsX",
  "key6": "3ed52RTLpAv1wA4tJqUh7rLPzeZJmYMjtusyCByDHwYg7Ke84UR3RFs7sSrNXGYLpoBsrqeXH9D2Z8umGuCLDU7N",
  "key7": "z3yhLaEWhqSrSUQEjRjXmYeeCc48BQ4RoL8wVRLxg9WiCXGiQm987Ekd31LZUoWdupiyLF8ETwjdhCnHLqm6Pho",
  "key8": "aLgS5NHMLfZmZAmSeeYipDtYhq6F7WrUKyuzALFA8rQP2JmRodHJusCAcqqqpvjgDeKfQtJbpHzeg8nqsdziDb8",
  "key9": "5QetAHtvuy7YZtP9mN6fDZXNYcfie9VokV9CtXLqSRuZjjNuQsmQiwpiZHuQbbfb6SPMudUHe1zCdDB7ub6H5chy",
  "key10": "2WKxZBbiNxJwz3xHvCpDHKFP1QHJur5MfsDSCYqAHV96G5ap4CEKykcuysZviwqznwhAURunyhD3RuLd6c7CXVT6",
  "key11": "5qHHYcA3tDbRuu9ZgXyRPX4XLgWaaLXbyr5u8ia33hDAUEsApjWrjXpKrYtyHCKaBbWSeiP6Foa7zznJxxeDfJi7",
  "key12": "3pJnny7tiZxApKgsCfW6eZmT2cprRWVYhR8cdUcYM9KZpN7VemFNzSKWDKLGVVuH2PYfYJbgqfN7Kzty2RrUgZew",
  "key13": "2yMDvDbeDak6gNxNWjK9rVF95Rnp8HBMQQhWhUVrVcGZFkGX9HDYpfJZNaNTJVC7HbDLaNkgCq8R68DkmcXXc1zS",
  "key14": "4uKwdX5DGnMaeRjVpYjT3QRMcnqqQWtoCjVaRbG7uLXU63yWhyMAVV1PM4fU3Znxi3PjmDnGuTBggUkPjw7tqrcZ",
  "key15": "2iWuxzvDGWjKRYxw1GwGrxZ7mLA5gDTHb7nZcjSrRjga9Jrk3sS6qRrbKJ3QgqyGf38XpcXMhFKB16ghpbRjcp8x",
  "key16": "AsbBd23fw4EEwUzWLYQTwY3TDNSDoxpCRo8iB8MDjYmqRqXmrqMJuKwDzQv8zE8H1ssttQ1PcU88CiKPHr6fGMq",
  "key17": "3yNGYQPcd31Phggd3zGaUqe2VR28E95kVwgRATMypFA9NH8Hr5hvK8HPpak6rpvgNw8WUx6siX4MUhJeTHy2vBvV",
  "key18": "299TYa9bZbxruNCy4LAenTP9co2odAEaGtLQrs821pUzK3o9iurSfBfPZo29KPP9dY45amZE8anGA1AhuMtH4rsa",
  "key19": "4PYujNVHYirHWEQjmovj5Ly2N22mqP8h8oa2KVQycEKDgBUZvCJEz1Bz6tRL4AiT1HGfFHnoQjHyRr3DvPxv23ig",
  "key20": "2C8h2FvT3iBKSJvHmARgmwVfmvrYgLqmo9B8JYAJ3xr1TT88yL5YcwUAFyYfDcU1Zf7qn2DCNJnYGjqHRCNh2ErV",
  "key21": "53YjL5rgEbLUf4kqsADnFP3xoSrjDGy3kHBb28RdamdwAyBVSjodbPA8aSPWdraGERAuJ1bWYhu6E8AU1szjCdjZ",
  "key22": "33xapGL1KRGMkxTKgD77hQueGyhB9cyBahQLGRYTXNFuqqZkH7rWo58kR5pXpSdXR36gkpbprAxv4kiD8y3QoFTY",
  "key23": "4XHJTVZVncbX9uaDqx1cLZTE3j4Upu4LPBLuazpzcfBCiG8Y2DoJdPBtLyAT6dsRZ6cprpDRE769Y5uT5gJQXpLp",
  "key24": "3FxBAqUt7F7srrnZfoZDjftnW7MWUWpbtwUSdPFwUoba3vDeqJ3w5rQ6cCVqu534iPgc9fCVJmTnnBAvifa92WD4",
  "key25": "44TytNR4VeRJ6Bpuq2BNjVASTzqFZgaqP2QoGpYLgkUQ5exww1u23FYwDtzkpqXaKZReESSRooMfPpb3T9NyPfKy",
  "key26": "3JJgnY2eNRD3z8z45rWrA55q1ux97HtKRwTziktXKpyAUqkMo2YoiJnQBPnPE2mEGAzZZNnYLCfn7GWhB59xcGiD",
  "key27": "4VnQkxZXopsfetmppBZznkE3vM7RQRKTxmzfisWAyWhczf6yZkNaJAbA7Unee9zYFriiBSUDhsk97pPPqNJinSpx",
  "key28": "5ukkHYo6L7AmmNfjYurEm4YrZfGgM2faexb27ANxfKFRxs1sDkMjqvTcKMpoenGXBj977JE1fTJvSsv27ZGrAmi4",
  "key29": "5nRFGhedSvqL6rFiHEnihaAnQhFADPLfH7EkbdMDfQdJa3rNMZ3vMrhfFNEBZUqbm7WXoksPLCSxwk2DqxxdpzPg",
  "key30": "3SpKFf7xXAYbxk9ZvbgwvLQ9mTNaZBxYpJ6adHVFcD1MWyAKpbnwEKkqdESGQXyumJitgmYj5B7vVbTS8W9nrSzL",
  "key31": "2GjEMaLqP6D9gmAxPCYM8NbLGfiw5HEXttCMgvxXeZFnqUNUZhf6BrCsXBe1uCLRc7GeeFX4dPJd5yef1SZh3oyb",
  "key32": "3h8nLf2yMeK9P7pG8Qq1VGa3fHBSpF763hM6YcnEgf7WGmup131KTs4t4P6pBCYagByY6J8eqdHspSsbMZyjswwC",
  "key33": "5d34jkH5yD194xAesJKWHE624HjaPrJbDTNTGiJTcGh7HUXg6EkBs7BhdRDURc6PXJqfKqG6t34EmByJcUwU4bbs",
  "key34": "3HwES2bYxFzRUZj47xwYhfWSRYdDuBnSV5L4eeS364Nx5m5Q74YWJ4Kcqimkmq4MQsFuGntYzXALB2nJPWMLtQFY",
  "key35": "oq6S5DaSskoJ9bi5KR2KdYHJZof6okWRkdWoMrSAwFePN5zBPaQybRqv1yYFrE4DCbu7eeiFT4pVPqSzWUqYMcX",
  "key36": "3PQySraXMsT9qpr3PgPnUQTM29MoSPvTJkq98B1jAAzhfpr7yMuFVBAJjJb7ruTQPJL5X7iexCJeX453pYS2jPP6",
  "key37": "4f1AJ2XieyznGYstzCoxAf9hmHbZWaFzRRGd3FPFtjAo1xCywVQunrxEu1vYEAduq2o2RX7oBiCCMo36jKBgFv4s",
  "key38": "4aEjoEdg66NnTS1nunBHZmG7hziaS7DERFnCvhcFtNabmszkjndm48UV91rLFax2jFXrBn3vrZTawJVJuYkTqB9x",
  "key39": "HFHEKxbZr29E92vuaw1HPzcJuAwpJ2m5KvWcUDFhQd8yZM87JEY6adtwTTSbVrVGSWLGvLLieJtANgfZqChPVdf",
  "key40": "4hFtGYpu9bFcFAiQMn2C7G8s3VVCt26SV8ivjtc6uCJYJw1fTKGYkAdjqE5KxLCk3E6XV2vuLQ9NjL1BKQVKR2bA",
  "key41": "5ZQXzja4n7hEF8EYEFyisYQQtrj1ha2JAG849dveQK1u11Bj2J4d157XvDUVtZG6BacbZjx7JNYjxUbNqi7RoXkj",
  "key42": "3crn1uRDQpcjQSHQ7enxb9obCv8X6xWsVmZvpjjcvhjutVBBbxe7Nsos3H2sHf5sTrBnUztZq2p6hpagftnnecr7"
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
