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
    "5P55T63J8zHocHeeB3YKXcaqquLgVjSGtcc4jSsbZ1zkuo33xm5NwmifUukUiaq3oJvp6JxPQQNrftTMPe6Ap8hj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ikR27nvy6SVVpSsi5ZpKiWfPGeR6oUmFF2CZWkQGDscSRYJ8WDdV5ZaWn99QD8Du7Ku9ADt5kUiHmrCewhdeZxP",
  "key1": "4FRPUeVrbw9bQvDY5b9JmNSFaSrivtCLUQY9DgyXnNc4vnRRgMucXXt6aEoFxcQJGgYGzHqfpcivnhXQDoPpMPk5",
  "key2": "auP5H6CZAru2DPJkERuzJAQJhJiTcTzbcJkrd1KfwyuVwo4FicGuSurcwXJ1nXWixEo1KAM2KTPpzo7kbV3teqF",
  "key3": "5cyVuJ8hj4QPv7NaMStDoGEagW5iNCn9APugNafwxLFMGzAUufsN4B7kh5mRdFcVE7ocSQkFmtHh69s142jsDAS9",
  "key4": "3SYWMNKqQ6fWcUN1TFj75z77WXxLYqsuPS1sQEN4UghWFGavPhxWBkcUqMPxjksZJMqADTpWWxmBXjJYSdJDAn2h",
  "key5": "dzwXiyWkTpQ15y5EZJUhvAmJFMmgC7xRAXzJqCJMvKcFxVnTxjKJrhmUqQEKpfi6fnZoSSKqKgPdKExqostZoq6",
  "key6": "5bA4WW9AHrbHwpF5KfvrfUh5WkmWFz4KP4CEJoUT6K4G5gZQCbdJyH9zHPdQvpdAtNaVTrWCXQhuhpBQiQ3nubsf",
  "key7": "2P81CXeB7vjrmG2ikfUGCNZh1ViXZx4wfvi4TMtHwN3tpaC9odnMjDrHNtKBazQNqThUSj5u1CDT6gEXJJvteYcD",
  "key8": "4GvtS4jjN3NBreNAgHQCDykXgKPNmwWEBaFnLNMutefpi8GkUFPwRvAbYH7dr5Q229WdiccJGtUZcANiYM8BrQqM",
  "key9": "4j1nh1QZjYSAN6rS9v4WKaUupkvmWYCN7fGLxffuStyNHcwBotbLobsvp4AFU835MGiBNusTo9qhJxjw7czEVe8e",
  "key10": "4p8RdwfFsAxEBm5KDfSv9guyErbC9ZmxTUaWpNQEgmSzWN4pfwjDnw4cSnFnnfPYF8q77WErbUPg6sKw6C9JP9iE",
  "key11": "4Yg98HFsDLaxxjoAciRYUqhuiGbH1eLHJf6hN4a5WSZbLZqN52nkyFibP8q4heAT81hwDv156rNzBCs8PhLLCqdT",
  "key12": "41G3hqnKAif6qG7DaQgrrXiDif2kMnhMvT4Cti3eYiuAS9Wa9rkaQ47GBdQW2SNh1ybW6HHK6fz7fpu4XecADTLZ",
  "key13": "3PngDZZDskK5hf4YRkypakXFSjZC9GUWMSYc8qKeJ6BKqRtHKgLARKCPLkDVUs1Dm83qK7xCR3hzaPDVp8MXoK6D",
  "key14": "2SUgpd85KZ6uadK6RGCMvDDxF5AoWxxXLDLXjC1QY754i5Qk1cSGsKbiTFwAQw1S9DWNbz6GRDngCNjCaATZrQk1",
  "key15": "5h16UUvyAuqTLG4cSziRWG8NPUyMzqRs6W6fn223KZcGzHWs269ZHGQMDCStNPdLYYQFbJexfp4Wb2kFPvSBDCzK",
  "key16": "3ztTpAHCheDE1C2YV8QW3VVqP3f9U56vUzky9FRZ61LUUjrMbdjvSpv1dfG9sfXTWQqr27bfumAyb1xRv2jt7azd",
  "key17": "5Fnz9Ct1ekDYjmv1Ww9vFN7ZW9zWZ5US7rxMNWLfw5phBifu2EfxatMKz81Gs488gx8huLpdjPBjyPczRF2ghHtZ",
  "key18": "2hVcXiV8ZX3DExawjN9bzXMruBPu23FUCvwUwqwTPud2bR9pThirqxro8Rveo8oCHNdtvNJwgYLD6r3oz5LMZs5k",
  "key19": "3bwpTSiAEUTcSsBGxEjvvYuhnLMpYdhFTRVYpsv2xjyAj4JZs7PS3QpRm2aGABi3wGrFzw7VvD2DGnQc8819fDwK",
  "key20": "4DmvGW5LXxFHCkskpqR6tZfZc3MtDQFyUDjbU8iPukV9TL7ig7HU2YiPZWZSXDTJ7maCfbGuv77AK16Qp3rKPQo",
  "key21": "5GbkhWbW2xqEeQg1PPYFbpfFKXYskQRc4gy5pRWc9p4Bmy6fpP9pbFH3vAvT8LcQDu3XBAsBr6Qd67MVZT3MXXwg",
  "key22": "4qmhVCgvs9bii9DX7AjuLrEkwcgd4bZzJgwpwqrHN1Gm4FxsA9NRNg97f5926d51QmrFWkVXUWgwgYRKKMVhuAWE",
  "key23": "26HY6xDEkLLFc8JWuYjqTzSN7U3QjnCWaPX9MQK7EJUgVbXRFArg2kUB7oktTXup6dooXtKAB48YMXxgGaujJ6oa",
  "key24": "2K7ebWmVPYrHCWj1r5nZS4PyLbNACd7o9EQoQjHtfgo1eupK7aDwcNbW5tVPbXuLn2d7eNrtJsKXnpXDiEnbefj5",
  "key25": "E6Ff1K4iDaKkYg8MGa561jMcSvNkrdhXBgknfU8gAsi8MjyWUno8DAvr4Dkr26jbLGUjAi3JJvmfYEcZo7RoXZZ",
  "key26": "4eGfbQHRt8hJLYHoWbLMDJzvDw8yifadr91LEYV7PbRL4KfqiY8pNdNW8LGbXHNLyUVgfQsmMtEhYApVcroqyxoA",
  "key27": "k6jei4qi8BKX1C3ZPMcm8gGfGaT4SvKih8ep1URrrn8CeuhH6CraEu2JArnksD1whE1V7KFabXmqbrunmDxreUS",
  "key28": "2mwLxdi3TzZXqd8ReHrgpWFvXYokoQRcow7Cf4vmnHPjkRc8oHX4NKfF7pZfY69K3Sx8NeA3r1eq4Tbh6jUjcLFM"
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
