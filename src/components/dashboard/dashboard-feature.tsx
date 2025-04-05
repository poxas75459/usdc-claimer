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
    "5jJ7riCn5PiSjiRVetX2UvH1rprdyaTztGBB4ytJANdYjwCif8K1rBRsk5EABUwzwhpAKJceWY5W9YSu7aiybsoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T8LEF15KV9zBFsYk4gXBh7HUbNDaG9wpfsrbTNn7tMas3YffzcCsWTYaqvJNJea8ixcoLWjRUBcSaJrpcqWGFQP",
  "key1": "3nZpvXsDPiUDY7oQwKwhLNdmiNDisrE8TpPEKHrHa6jHAU95wQhp3NEgEXRtrQ23F2uy2MSLBefCUgWwE41AiZpB",
  "key2": "2iE2pTnYaawKEWMnZwyvo2xAepXtTsNGxrDdf6hf2D7AqkFS3E71B9syHnkPjZGgGZkpv4H4ifNBfrkgBVfiZyRz",
  "key3": "KVKq9zUQYiaEbQCG8CWNifcqLiXVDZnfRrvsZ5b2BVRdFb9ERxC4GEU3L9wUHuPeAzQwkCbXH7ovLrmVJjnP9oK",
  "key4": "3FDc9N62YvSCkQWB7ukbPTWu94JUubvhstmRZP3Zd2AZVrAsAsF1AXxFrVyQg9QHeBxd4ejyDbxLGYAWWRSrjmUW",
  "key5": "5kzc7cW4agey7nWBajxbfeedMNrVE66xPBshHYw4DR8GNLSyYDaPiPZLWU3La3oMfp7Kh1vQ9FBAKcpbpN1NxTaT",
  "key6": "65G5meB1w1fMVHsZFRYMCuy3uCTaagy2ectTrEhM71ABhj4Lkdpxk2Nng4L9rFV8yZxNW3Q61KFV2KiJ8ZWhUWfx",
  "key7": "2NTSfuFqKryJnsPChCPBs3dmdJyjQKUbigu2GJ8AMYmEWECY9xcbiqubkNcDdkdHJ4bRhPKwRJq12fAkkGTYUSAY",
  "key8": "3qiDWxixu1onUhLZPyu4yCkvnofCtj9rDyZXbdARpwWDynvFEnQsFvfo9sgwJwUxB7j7DZEcms5DNAnPcj3JrJgo",
  "key9": "283yiufLUaqnUitcCKCr2w3eCoxHiASNy4ZAGFQiYZix92KsKsSTvVMVzc1PGzoSvkdifxLJDKos8ZTKMAmqo42W",
  "key10": "29gS3Ug1NS45tVq5oWXmfnVYrRvQUbKvhjjpBjsCamq9iJFEDAAwgjTdwaxzq6jmTFco65vrWPqQd1VZTBH9qdbE",
  "key11": "4KP67Ft5t7ByWyMQQBzGJAkGcX3h21TXCjhmkqjwZ4ZeT3tubaMQ5KKbxeqMwKU9EWg9RVfKyM5rLFYhYcbg67V",
  "key12": "3sM1k6vx2PV2GrnTSw2M8XnKfpUAkmavvjhxAg9VsaExSgH5VuN3fYADCpZeytsSbtWZFrqbKAzB6z9hj14oGhpp",
  "key13": "fEAr2EP4SMvC1krkTKrzEqosfWVWRNC6KrnBE751ZzvvjTmbNLsp9GtD9GB8MVZoxxhv6FqEVmuNcSweAinkCjs",
  "key14": "5XzLS5DztraJAx9hTeRyB58CxzaEgN89YjfH4qt3fj7M8HLi59EUDSrqMQ8SKc4e2n6s9YgRgRv8MBdUBTu5j7W8",
  "key15": "DFLktbggQX3sZ7h6jiyaGb9tVCn54oi7XSoGAf1yeYvvyy34LFxCHCh3TrSGcjdDZQXKbBXhrVeDgswxnRty5Gv",
  "key16": "4cTkWQW7m1fg11MzHEDnzUWmGzVKHcjKXY3aBxSajcEzAA3cHzTmFMU5vBjBMcH1MTLDpQjrgjoDuSbAWY5X5TbL",
  "key17": "3gtVer8JqfoHHMnD51MSGr7Rcx5SLtniicAdEmjHESFbhkuBk6S4htZQYACCNxb5CAZGCB4fpAHe7qBEN3MTgiNf",
  "key18": "2Vtqm4Kc1UkZpmcEa8nqW1FYtHyX3QVkSfLrrgbB6pJLENhNM8Qg5NuEh5UHjGJLqR8LQxqq4XMQUyzmtS2kqPt2",
  "key19": "2HbpL2ud2Dcj5fMuuCADNepXFeEq5PCKGD8NbNVVn2QhwoqorvM77gMMnrufTqbBVaxLcRHvKjMz4MTe3voo2x8T",
  "key20": "r9exBN9qkZiui3F6Xya5Ve7hxPkzLiw9VQXZQ2HjpTy8gZydA3SKtaJ3mVVrRVwswM3raAsuFsKAkmJafUhCzaF",
  "key21": "3FhxZshPTM1s7ycB5rrRwSgthPpctLHZ2w63BuZ2f92uCt8s4vctamW7jYFmsKNpHPMyzgqUGb2poiU3DrULedHu",
  "key22": "3tfRAWKicKxuvR3c2mhqoF4Ja6eTsChjEArDdRVrJPVHZdcFT91K4YX9t6JdmDXQ1jUVrWzz185yAgnVX36Abarz",
  "key23": "jDWLLGu3wHygPcQW4RwTDmUsxtVJexb3vdYGX1X8ewnHZXgNi5QpUCPwEzSPimwdFEVJSC2XanaFMnhf8B8WGFx",
  "key24": "2zptnmKrFTn7qNRNdc1nhREemkz5JjzVyvHjwJAHtv4FvUyBtALACgSo2GbcxpRr8FQ3ZCDUgwSoon8mhqW5sEfZ",
  "key25": "GD3XHT8vAGiLPW6YcyWtLKsnbeHtPKrYwsZuPizS1RLJHB3MzwKbNYDdWLq3DyVZhZ5RJz2Tr2SDw6XpY6fj8C6",
  "key26": "MBQn6JFMoM49n4TbmkcY4WFEECDHGfuLsehzfEkoWpPvqmKtedg8wHsCgKxmYcufJbFjy5rgTm6BPcFYJF9kFHD",
  "key27": "5dt6VcWTEmg7LE4KDbM9MqRVjTgXtJ1QEdHHQUmqFC2HEDZ4Qx8wQuV4LiQxR35akzWXign1TFgAMpJMafxaS3P8",
  "key28": "5BhwfRQXfWmx4z9kiGrCGAk8e82jRkZJWQG7z2rBk8z5QYUyvf2W5y7yymzGdApxPcseRvpbF9j4UeGx9WXSNw9G",
  "key29": "2yzRV9Aj24RVYB1TnUNaBjPhQ6qm35Y6hedY3YpWRFpa8k5FcvLSachgDBXaVPZjkpanzHUPNENysLU3jwtqC64N",
  "key30": "3cdANd9ZEAkTEEgKhLhbKTaC8h8RHqA5tdxe3eXZhRWWuixj5vcv4fHaJ3BG2KjhfwJjZKtkU236iZpQUWWnU8rj",
  "key31": "61ewzrykRrXbgKPZsZo1Q11GVVq8PKYtwhea7e2F5Xjp6R2shZXxbhvAZys1qr43aG16zn5riKc98gT1kmZU4k9V",
  "key32": "J6r13wpAY48e1DApYTtuU1FtW8PPgTNLJWt8YFg9QRC9ReXzGkdX75N85dXvrxBsCAunGcXTxisBeD7jVvm2hXN",
  "key33": "3b4s18uFDBFaJnzHsYThMxBXugf6BxWvkj7iEoaT1BC3rhNcNMirvS45AoDs35E2NBXz9bTUXJP6K6Hfo2VbmJUv",
  "key34": "2Qtac7hivgdnM8Md7wmr7Pp9VvaWfsoT185pCPjk1dunXKCCdnf9tmHMYPjXkDP4Zdw32YR8i8NckGAVET1hHwVG",
  "key35": "iHo35zyRMDjj7dRjLrqNpho53pTzFa6Xo8SqLzAyCjaVGNHtmdQHTUVGSDfmJNGY5kKi4DLAebqzsJZPW97ckLf",
  "key36": "4WAVojVm8xUNVT84du12naCNpPqGrTKcej1cjDhXRP8M11zfSygKHFmieCxDyhGpjeerHPRS7sQBcCyPQvNKzBF5",
  "key37": "5a4c47RoEzMmDxvtUTDMZ9nyuAPEUFR5ncWy7TChBxzQ1iHqheV3QAKUiHYKK6nVyoZZMy3gLGgBoCAPxpT5CvKr",
  "key38": "3aFrn7UE6GCj6kdcL7Dq8qkabehmpWMpEF3L3KcpwW8hhKesNrMP4UExNEan6xPGp85ahvE8TVpmtcwT9V8VvFst"
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
