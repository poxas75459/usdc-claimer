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
    "3St95Pidk4RXQbTZETWv9EXZtqSMxaMmkZFxUeGsKwGtfypbsdZ1DRxMiUP5oMZrV6Jvh1y9FnocrUHPuMUyk34m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47TXwMqqcnJGcAsmE3MZ33td3tzcu5SjVBTC9XQguEnkkBpFdT1zb4pbhuySVn4BxxkFJbMVcVQ6Wpx4h3D58dHF",
  "key1": "2BLAGN6fbnHMBKSuaaVRrq3Vzx4V2YaLothadVsXC5ZKcPujubTegaZFibajvHAJmGvszhESs1gd3iHYdaj3zkuH",
  "key2": "218rxP3a6J8Sj9R4y5NNQqmyNntqDdkUVK58WWfAEADzAg6te2Nrzi12VwqVLoas5NbkQqdmEuaxdYBVKTNii3cK",
  "key3": "4WfCjn5Gu4VmdyneqncECGyuW882eJ27tFWpZc5R8GeKeDzNpvZfJToyP1a5SVPpKkc4oReCqAQw9sQRUNkFWvoU",
  "key4": "4YusA2Nt1qCsVnutoBw2ManSiuuukRwVP2FQDfwzcmTF48qF3DMymewLta6gHPbbLrMNaDUzoC24Bw56ToJbAaWp",
  "key5": "2VaeWonq6C4uzVKq97mqbD4agTSLW382ZQzkuZNkW7oQZJsQFRNXyVZi8n6R3U8DKm5HAHDXRobueu6uXuEn5fW2",
  "key6": "478RPJEbKW7q6W3CW1Zjd4bpSrFHo4UrxoDtp1e6hKzTnp2dYSSdPeAXJ5bb97V9wLHJ33wXVe8R1RF8CvAAGCfb",
  "key7": "qMeEPAZuQyYoHcDnZo3Ygmvp9NnLMov6CnF3B8CzQE1JZicm7pbzm6a8FmPag9qYNt6oe3kSUrmRxGVBgATJxoY",
  "key8": "4ZHupBR4TUty5UhuandqMPafGo7vz6mEjyYf3FkGzNeJzuBjBmdJdk7bMpZhVDMUXLbesJSw6EZ7hbsjxWA25M98",
  "key9": "4RDdGLcqK36SNShhifozZ4yvdYhM15iNwRZK6mbm8ZxW97SBSf8Wu3YcND63ZcJij7kHYyozPYYMXxHMH84QLhGi",
  "key10": "5QnkfpTo6fWmNUCDFcf1wy3j83shFnaDex8B9FcZHizYnkGSD32n4XPHRZy1W5mosESNXmrAZroyueUznGh3MkDC",
  "key11": "44UCActeX9Zj2C7vSsGipPRK5M3jJuuQTTfSfPXG6RaQdCAHpjGodGYoUhMsXPKpyVvgTns2nH7s3VpqddQu9bUC",
  "key12": "45DUsYsqxCu6Pzyt5YDDzhZiFbnmxho8pCGSLjueNRmrUeu73R5wLAXdK2uXTHmoCPJqX11znAo9ayxVT12Vmqhf",
  "key13": "33aLP1vKUmPxZ15c9NXMMfbstDRkm4Vjcpn2XNkC9f668cE9MXESednEUuLMxyHTWkEGpFMmh3JKS62au5RgdWWC",
  "key14": "5R7TevKm4vJy5oJ4qHBSEeZrGtz6DMMMP9JwnRMj8f76qdzdyZcgpekJjBDDUfhfuJ3vjThyVmAtfCADiot8B3vG",
  "key15": "3eUXTmKLdEs2vyddsGiCbTy3Yqm87ytYP9LVcbjxNFQ2aKJ9awkPoL9ryVv7uW3GyVQhhEVp5WXhAKChL4FbM8jg",
  "key16": "D5WyGsVLEM2E9BBNQv55W7dqhXFhwmhMSFaVN4jJfk4LPrVeNvkqPbYkUDrjuNSvrEuY6N5TipKnKHEc8QMMvFM",
  "key17": "3cKU216jWtu9uCKc1MvNBmoAuttNBvmwWWveE9wGmaJJ3YWoRA9KN8Bq4yXoUHzYR5Chrvatim1Y2XrPEH7RpPLx",
  "key18": "637LN9VrVez8MkWpxP5evZsw9XEWWzhuJNAVddCTX4NebR37vDUA69p8cYfT3egqUbWF24i1nzWbCaCdsCno4z82",
  "key19": "SGHf2ZjqyjDSqcLC7iQcdTSwzS4qYra2MHVWBsyouSLzwJa3Xx9zsp99E6UFVTepvq5vi3aR6xNbpnSgfYKmbUL",
  "key20": "4yWH6CkXQWANZJUfFgQ3R2eeeam1HqkeARVMXyenzLfKquvrs7136rCrVECoegcwa6quNw2J4UE6i8kqbX5w7K5d",
  "key21": "22gRt9cF4aXvkQU9YrM2fSUA4SuzVo3irssCztkesXAqrfdrh4BjMbQnF4PXPWrbYTXK5TKEdgnLSzYZfPzBcBxi",
  "key22": "5JUo24b8oBzGSwhX5tphDYuDRQmZVXAW4uLSg5SNJPXN25vDQ59QmeT7shJYBN4mVbfakLzKA2vUej6wAfmrkYWQ",
  "key23": "3ENb9mmRXRUgmLz1hUiMbYPhtwvybYoMqTDuueWdxkeu9CTqARSTviba5WF2PuQwaWPu6U3dJEKj19oZ5H6zDNJK",
  "key24": "UCP4GBdTiJsZGTLexP1nNCmCAjdjgd7n3JVmHdVy6iHA1MiiQj2RM6KtemgNvrjAf9vAA2ZUw7VZgf8y8Kb4Nfb",
  "key25": "3AzcznuonCSPFBgxMByRPh2B4YscpKUfVnAfDkfiwf6FGmpQ2jDcGhJ9sccCTzM918o3R8KFEhrCiDXrbefmXRHB",
  "key26": "53eAZQzb1jjhgcFfnocvrXstivymcDjiKYc7yXsQrz1sA3QbKhXgsVbn2xLNMi42WkWcy4Ya9VDWTbVFq85mGKCt",
  "key27": "5WyypdYbw8cggMntfMgoVpRJj9GQMi3vJQatFrTYwsY8B1dTkuzTUQJGTzkYt9zGiDsqLMuHHjJ6AxBBRuPuB8Vd"
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
