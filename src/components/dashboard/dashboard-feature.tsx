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
    "5UfAafjSUoZ4aa3NTieYZ9nkmZNAPaH2Rag3HycUfakv3sBrYqxmwcK8AbLRKrsntMSwR7h9zgmnXQttN7AZ5gqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8AdK8CzY99szhaxaTaW24s9YZGPU6oqfxeczfc3DJxkvK1vHef6XVvXkJhzniDHQGtwDJh8vaBECUyvxm3VbDae",
  "key1": "3aPwVFFVJngdkKKHT8HRYw1KkG1WKncVM3cUVUkvJjsd2D7nPoicLjVaL3fhhSJ5CSzu1Zg68TjqB9MYuB6AubzZ",
  "key2": "s1kRqHTatys7Trsdu9C5tmL3zXfsCCW76og6ZyabBj8cEi5FWd3DSJ3wXLqUndHSmR72HfD5XPADiFudTQdss2B",
  "key3": "5Mq1Vigv61zbp8J7DQUDrjfDoVZi6QZvB6zXdrGX2zFf288m2eTABsrEELe7zAtmu21LAmWbug56SzcAGH5kaSmq",
  "key4": "4iLxBziTAtkDWgx1bveatwLXMDSVeoWJAGGBmswAMUGDSPE1YvjQApVnuLZSRPfAt1pnuiwYqBgvG6pneBj8cXSN",
  "key5": "1PDXcpDF8AWwR4qhzTZo2Gk36tZdp7jPCSjGcCVCqsF1urLA2zpNGLKWsRjqawHeVYENLypvJV2fbDqFSxpqzbn",
  "key6": "58vkRgdcDfxYWRS4LNFXEfvFyipazsf4ZJfxsuJ13bLvfvdd7Cr4rBpYmxrXerGy6rkBqQ9Kh4PC32BUKaGxJwGC",
  "key7": "3XWoVXstVwh7yoJisfX7aY75jvZQW7TKxeXkmWpAL8XMnKKCkfAYxzHSSrfG34LzAa1QwE7dHopMVQaijFueKsJv",
  "key8": "B8dXKWgHUCma2VXta1etDbTXBM1wp5aG6dFPvuKMvEv4snaeFd5i47VXYA1jpuHS6h1SNkgmDFkEnv6uoeMgk7W",
  "key9": "5kqV3G4DQ2SdwMnigP15N3pvFTKWbxy9rFRY5obCisVNAQyZe3ZM1QwoDLnvoj3eASfmLw8Yo8gucK9xXZhz2zkE",
  "key10": "pWxTG49HGLgukicxEKy33kVBB54KLR7LV55s5Q8tFxYKANaKpHoK3evPSb1kTwPW2vkKXYipQCb3SSJAfSueft8",
  "key11": "3xrBkNC1gpWjYDTwSyc7AFhCCRK7pvJGGBWmH8KFbvtpmtuikKxVtGegKB7tFp6zR3wJdBiix4szyP8nZcJ1LoTC",
  "key12": "rM7hagjjp7EqeeJ3RFanBWwyaVGVimA2pykoGFW2HeAZ2wm8juzjXyDiDbZFRqh2LK5eESnimS9hfbxmFNq32iV",
  "key13": "4czGEYCaAC1VJEy5zRy3K6zXsqjpQw8Y9N5uaXwSnZwZiqsVJPRTeu6TDMQm3vuc6bpExtuMc3qUrmoVRDtZbVJ7",
  "key14": "43MhQ3fRyVtZ3YMsu4ygZrPw2iPam3MazBxCPs9g5Bmdvub7dQi9TuNQsyTakTzmrs1qDmNhu9PXDAzHg68qedUz",
  "key15": "5YdNkzy54Duyng2EtQRQBYN8jvqvqqDv6TKMmF4tdfCBn29aKJDi8C1wRC5tiazP9MG8nyHq5XFyQLXJCFM3Xe8K",
  "key16": "4QfY33qu4ZY72TSdzWp6S7fxcnna5amCSLApJcPcRiPNM1aj69V7ce6akNQHK2aosqnuCWGbuNDoCfL9qCRMK67J",
  "key17": "5LwR1QCgwMJ3tiTCCTWw4xwXxxB3aqqGipjecqdmnERq5DNmRjau2fwiW438DD3E9qUFpeDyioCYbKbiqhMYHyNv",
  "key18": "4rZCGkB9feqa8B7QJ1ZYRV9hmPyFtFgsFqXtmqW3jkMP6WgS5t6nk9kEGyxKQCPNak52BaSJR6P2tAqw8zoYPzNU",
  "key19": "2jN81MEuLQE7Ysq1wAWSWh1j4hAD3zS3E8j77fH12jsjt1eW4zXFGSh83Tu5NfxsUa7HVLqqqiDAbNTN8GJFGFqz",
  "key20": "5cA2SPmEehB5usoNJRq5JadsvHc2QceBPaDu7PwiYBQ6SdivkLzoiAFyNdrsNUoQy13XXzkpSGr98YSi21YY9b72",
  "key21": "5Uhyx7783zpah5z4k4a6oWoepJnnrhR2qxxoqrfz9Z1uwL3J9FEuT3wV4vHWxbVeKd4eJssLpdMYJ5dipff43ayy",
  "key22": "2QZbQziKVfDFczuPrbxz9efgg7M1hUcU4WJua7GMLYV8U9TjCefS8dQFXMzzHaCxEjdzcRFUxZDv4YTK9dUAMMkr",
  "key23": "5aZibS6Zie1oEH7i8MMuuZfBEdhz4uobqg3uNkwB4oJyZcTwVR9uGAkap4tP2TgUviptHA9UxCfakWBHogmpLN5E",
  "key24": "3s33VqmUkanNptJmqUzDbMkMDzQEuctKdMJ7hy32z4kWgH93LYRn6LVqNJCN5edgnG54P971AwZMgToN3NnMjYWm",
  "key25": "5xZGKrmPD6u8w6myLUQTAkgvpibZNtDKbaYkUMSDUobiRTy2rQyFk2NsCwXaxwsq8yPBANXYMqXjfwJ48MRgPkvz",
  "key26": "3GbJ7DMPkA2Qwjm5UvnDm15ca9c2RWuJCADHQE9G8Mcm9BAkhUfrsNh2wWh51YTLtDzK32otDrjTW9Uguvubyrzn",
  "key27": "57mws8j2qQQ4Es8YCdJf8fbrpUnPUdMrucnWDzYg6Uk8pdos9Pz1XA3ukjDUcFmP7rg2ccqbhvxxaxkuPDBLqneQ",
  "key28": "61Uacn8t91b3TRYDzEnrRNaooBRSMPFS4to64LDk2ihh4DS5p8ceEBj4ZAnVEGPUS6iY98tM1tEs5QVvPTRHGZoN",
  "key29": "32sCy2kuV3pzxThGddoSgiNfudeVSumtFHqGqw2mjfibmKogoSMA1yjFdpBzw7mmteuBSgZRBeCCntkNfS17LmqZ",
  "key30": "4zSLh63edCPeHhdouuHcEpDRaDUPJKCoovF83dXMK7rWFoYr41c633cZxuv39tiSf6wqrMVxmkuGYnhL4E67kfYy",
  "key31": "34WkYNG2FVd5cEgsFdooS4Zs19ZXDCYBdeRAkcHke9qd41RZ6Sbg4eP7qKtwPdqN8vM7mx38TBB8cuwicFCaw4fz"
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
