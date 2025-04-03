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
    "4JpNLs1qc21VcJ3QkNPJ5fBAGSUNt8SHhViFuac9FjFpmumRzAGT5ReFFDmG9rmRu9NjoJXuXZdDLxk4rVvFiKtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M5WNYp5miK39XfdGPGK1ADrygDRPM4tdvSzTQzpy1qQ4GKsZY9W3xWoHQE6Anj9Ggqefip5UnruVnJAo22K3C3X",
  "key1": "wVZRZK8UDs59FZvYzXZAdsEdwU7SazwB52cRNM5pt7TTw51EsRYTzMhgamVxMBUn9NRWsA4Vx1cq1ee9fCtMfRi",
  "key2": "43dXjbhqyX97nCRBrHzrMGLERfNcrNwUu3gMsiD5s68DTwNRaa1xbSF7vwxLzx4NMPvsFGHxvvmRBE1NNJdHZe8w",
  "key3": "5GcJfVG4TNHaf9fh6776jWtugHwk6pYopCg1v2R5PHPQ3wNbVvvQW1mZZWPkw9Zxegwj8DYBgtLTyuj1rJqcqPkD",
  "key4": "5ufyrqGVneydSrQKdpEkgo6DSTzEdud5yeaxSgF8uaMpnuSj8Y2qQdbxgwrPU1FvZyw55J2tu1qU25MNjL986oHT",
  "key5": "61SUcf1d1pnaAs6icuq5AD4m2i4g9Y9kTsF91oEeLwnmVKBbcTCLaAbD4KwSw7WhQMkiNJDvcaHPRmg2sFZ9Bdxg",
  "key6": "3FnKToKPiTQNa9ut9uWmy6r5hV6pYBLxGuEaNaev1Ltu4yVnVRUySWUUjDvPUKs9PafXupKznekFAj1yJDJpzvAz",
  "key7": "5V9zDemAziyNd7QC5h1jWWVGS6oaXy9Z99vUq8RZRE5V5tN7DN1oMhnp3XsqNKv175iFamJwZzG259qLiWqFALLt",
  "key8": "28pmVc7pq6hzjGigykQyHhgcymY1twPnHWawXjZEGd9AeSX12hT8asY6LRCYNkysNWHievdrXWdkqc6pLaBiwVsc",
  "key9": "5u68Cni7E8cyRprWrSPuCDJiA177Vv2jncttHzzGs9AisxCsdBcgTVFLeVfhmap9Ar61hVn9MbJXPxbJucC4Xtmw",
  "key10": "4fyhNdA499fZ6EN16ek8bsDfKMVSD96rm4ytwokcBAmuL8Li6VHEc4N8kjpxjRecF5nUueXw1qebocamRweHWJkk",
  "key11": "59cRwddz4kPPNV1NST58SBNXchHyLJbiFFRMZisrRf9JqC3UJtb8fsBa6tea4dW4CqfCe9Yd6BsR7M7FidzHBg9a",
  "key12": "48UtgZZQfHoSUgu8CXu9cf7mBU4dn5ezRB934S3xTzJJgK4Bhiuthr1yyEhXsnSafJ9PAGaBafpdT8zwGtoGcTWe",
  "key13": "3XsCZBUKuJ6rmLwJQDi291fz7gznyTfUDG6F3jyfhxAiAf9bSZM1rrsKaNintB5kYziZQ4oSU6qdyzdLpqvCEwbM",
  "key14": "5QeHS4Yod5g5P6BDc5m6TaWk9PTU6xXhCJ7N1FSo8CenzHTTMnwpiaGpoc9jUVAMK6zsfU7EiigAVH7FeFYX5ETA",
  "key15": "PeLYoC6YLASCaXXCLsk9WF3wELRDoMiWEKD6T8soyqcWfY1UiRQsrKgPyoVPBj7Ww1oVKLdAK7pofZ6tNSMcL3h",
  "key16": "JYyZgt3A55QiMsXKWZp73UWfKN9Kqka7S4qJsiYDFWWkHGLpy6G4peHrTdtmyQX2qbLRmcFdcmKwmccfVwkTu9x",
  "key17": "2KfNHuWbhJJ31RaDNhnGrEWJGsggC9ZCuxHMNcEhPaLejGiUoHv96hTcLoBZMYHbcy6bAoohBN53VHUbmWPkypCw",
  "key18": "4jnXj1T7JVpqrePSq86rGnKAY7rLtbwa1NEas3ZBcHXvcMcPUBnRzDyMX3ZQTvjo8XJ6jfTgCrzc7JofkD4TSnPR",
  "key19": "z3EFawwbvjp1pWdqxNRdFEHd6BcY1uitn4EFuQx2PoMDKKdDmyBZ4YGev5gyFebQ66SqQTYjztdsvTXRgrgVSmn",
  "key20": "4KFMw1W7WuWfjQ5E87ANcL5mftHuVh9CYDF2bBKj3LATkyvCdtFf6wzdvWqF1VZyrsi9NgZ1ip8sjrEmbZutyAf3",
  "key21": "2PUChhrhgAfVG5N4qCcdtHWuFwsiZSddwUSAz4P8RRUG3GnCVgkZhDfzbH6D4ze74XQVibvRzJJrm8TeQoEymWKp",
  "key22": "zxx4yuzvqFjtWzvtFvWYEHbag6VHZ5T4uNvTkn31HBat5iYdRKvh1ZffPL1MFacASsroHbsrGbKuvBVBc1cWoJ4",
  "key23": "4fjXb3HHB4d5YtKncikvRaTt54ghsLd2hp5o9ccRnnY2Skur3WN3DCWjJPkR4biybDPfigGeqQfewCbAeqyDjeDM",
  "key24": "5zfyeW5hc5RpFrv8Z77GpEBzV3b7LpxR9fgPVZgmkjfg8mA7mqJuEi6xpaUBGii2HgTCqXDeTP2yt3fgs4adQhkq",
  "key25": "3cRAbAuQwe4jSnVwVnET77qnYBKUCnN9TYpdzhSL1cGZ17TZ5iPWMFK5qJh36h3DSQfKkJfsrPzBsfFWPMDkubGY"
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
