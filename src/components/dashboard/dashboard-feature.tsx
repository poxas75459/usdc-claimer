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
    "nnEpjZHocZLKAUu567JkAMAxF9A2NiMPcfkshYFmomu7zJDqnz7AwUYyVx3mKt1tBnn6YximKMipApCYRC9C2G2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vgg1CeNeaMeeSztSCqREQAzRMMmBLWWU3A2C3YsNduckgaifBUfsgUhKzs6GtA3WHEGgyMSds6JnRpDuJhPboV4",
  "key1": "3wFT8XzcNYVKvp7LBJaSsoKW5wvm3wvGMVhh1mjMQ4fgwpryXFdHcLTMne8cpDxepPCEtEHz3V2GB31yXUwpCYxt",
  "key2": "2zYd7PDbY9uDbkTrtUeM1XkVYbUFraLLyZ6z1qw11YpsDsUCYz6U4d7nBBcudgTgj6T7mz1CoTxpqa3xQnEPP1CY",
  "key3": "3E9rPsK8iy869GMgABPPKyPHs5Lx6jW3sBwZFpoYkpv9vFFBhhDMh61boRSs5EQkvmyBRQqLw7TobtNVw9SGnUJm",
  "key4": "29Npj9vgoKQdVw8CnntSfk3Sb75wzdskEgMRSf1z48vWtv1zcdaP26nVJsPSy29QjmCBmyGvcbtrGscwNt7KJ767",
  "key5": "2PgCt4kgDb7mRyJ9BQnggrcoH7FnchUaKFvWhYxY4gxNGSZWJWXG65d44Vg9GRKVsEftzLskj97TfWfHnQ31jg9s",
  "key6": "67p1yEDDbxSn6hpXCyVCMXcHzXWfiUVDR5mbVMwFbJR1Yv648nEiuFgSApdVeSGk6xDmfA6FdNueMtVkEFvSErFL",
  "key7": "ANLVYu1P9SWVmqxmFLrvVDeGNiHdSr2vefy7CYMd7Bpp1CcCVSNJSTH9GisZoFp5ieG8j17E6NoAH2x9ocpDjEz",
  "key8": "4PzDsmsfeYdLGcciSMptKXQSnf3Goaj7NbwNWEcDTjJT15oABVKh3dKvYWHN8LBN3Fzu3FSAz8w7nmunnFC8vrBF",
  "key9": "46QYY8GAXB63c8kccJP1k6qnDUdEdiiGr54s6V47kgWFZPGLGjxPN7nxjXFBgw6sFU6NsCxguTcc74qaiPsm7ESq",
  "key10": "bNFxFbyq5eTQGpcsSXzKX5M7oKsfVWtpRK7ydkaofkhApdhj6xNkJEomUe5BXk27h1RopsxWBkxxK5dvSW5sEwm",
  "key11": "3QKGXYV9x8BdeCHXaGjRyLba2qJTfB8SUVgdavkQY3iDMqothdBUNngX81tgEjtFVnfcfzhAVSH8FGyyF1BjNh6S",
  "key12": "Tn3ExXRYtfxsaocDJkM7U4ky2V9QccFZaZzN1VjxTd7ULc86WDKsFgY6o18xgvR2pLQXaYSzKcVhUsaFju6eYku",
  "key13": "1tev3ydLPnT8ESDRDp9mS63bD78w4U4zDB11rg2SfPuRALd12GE1btzkhXcGiXQZQ7YM5T8eGXyMoRVjLULkHz8",
  "key14": "tpfeEP3CyrgwWYij63U5AfVBb3LtnxUvwvgffeVEGBWz17wwvAuWP4QJJm1tAWoAz4SuJ9MrqCJSDuSX42Go9e4",
  "key15": "3dk4uShfMsjkMQocWQL6PNdV5CLn9S2UytrMfSosJrFo1hcj1Ugpng1eaWaZq5ECivTaVBTdeqVjtP8Z6Q9g8sQM",
  "key16": "56soefQNvMu5sLZa1cDpdFkiNVjHZGMNdu8fiuE8gVkKhaYX8aUbnwtSmicQcqqNRPTxASPVzExTuqDz1HJxDUUd",
  "key17": "3HGASbzptvekJVzkUoVzcoVHZNVfvzs7H6GMmNBfe4cM4E4qYQ3sSMu1JGFhaT7xS5Qpxxg1B7jAbouySm8Zt9FF",
  "key18": "ssEU2kKWLHbLRm4VNH9B4yLPYVg1d8pfL7T781gMSCHNkyAWsqqRvB72iWWKEhsHWkNey47h25PfMpSngXMCXbD",
  "key19": "2ouEwcKzYM21RzuBVoxedee3F278W3n6aGUM4geHUhQSZL8E8ACwhaiMAwTp2HWcWXzGDCK3EFgfPhJuUhNbGcBw",
  "key20": "3Mg8pqK4iB4HUbUqqrbjttAahPGEbHh3a8nFJQxJpT8YRDct6tNQVYPV82NpsKH6YALkCBgRkEEKwc93x19G9GWS",
  "key21": "VumGbhUnsfdbCudEVGF8jzFcb7bui1rNkDjTFAhzfbNAAAcbmJJsGStr3WEcRXTawwEZ21Pix1vkkcSc1rSZduQ",
  "key22": "28BVByckYaPBcmmutCjuyDiiPYPLyz6F8T7j9vURvrTF4HBcGgCt7JbofD2RyE8GxuddDKNiHs9XuN55wXyMneJT",
  "key23": "22X7gSYMFJt9S1ypCr9a2zhRgLaiHheL8qx4LvT3af8ZwZgUsnRUJ1hAvrFLBPAXykPCiAU11dsh6WJKMLWFyKcp",
  "key24": "4eWZBZ4vMvrjhuQBGPG5rrpnmnNRVbHCWpPvhHhX5Ej4xKtauJdTDYs5zboxLbXdpYPbXkENYGtc64ZkRb1MWYyW",
  "key25": "2NyPZuGrMpHMtDxku63bLJbQLXVXJvqnxUD7W2frmtGAVY4xFCVvT7Bs1sYYewQ8mwFMX817FBTGuzoBiiU8Fwyq",
  "key26": "5WuhSpFmRjiztk8Ldn3WfdpBSxYgc9G1JE47DxnXZRwdKU9bQ6VgPmxUEP4EasUt3XP5uqxmRhmL5s9Z5rcDURZY"
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
