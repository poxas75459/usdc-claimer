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
    "3ofHxJoBDANoMc4dkSkLzhezpuqVssRQ7kqQ4NbfZ5S9wCUNb8X9KMSdwfTyk5CsRwEz3mk9mXWahrgfkr9NABBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wTgzrghgXhAareyrHEpqeuW2DSVS6RE6eNUxzyAcj5e542SZjvy32VgZUxpCbibtSM32EhqsdQncwQpKoupzxwj",
  "key1": "UefHpgKEgtAS3fZRmxm1kT3YUDc1iJCNjSnhoHsHpXjumww4bP3fbQEa51rbs4HBT2BviapsVBSUWircGspq6qJ",
  "key2": "2yiXVv4syC5tLc18qoJofNemwX1taXZVzwJBL3uYBLnehZzf337dmGZ2efa5JxenEHfXEa7Cg3Hzf987QuCYxeHn",
  "key3": "4Wpeb6ivVirb8vDXJ7SRmvivLaGGx7ZYptNpNeD6hpc5RoB9qEXMz4obpp4y2xa1xCtB7XEwWUK3yHp6ZhaFQt1W",
  "key4": "4G4Dw4rhwwSfbJjjFbfrny7gFs4CuKWbnWGBKJSKp2CuUQFPmCMfXfNgeS1Cb6MKX3swGjarJHHyWfRt2jg6JEDf",
  "key5": "3FA4nfz2t5RLDe3vTBN5CmMDN5txVRMmCsdht1uYfJsR3xJhFEzf2jNjfug36Sc42asEJwZuCpcota4qyvVZN1nz",
  "key6": "4moUg68LiNJuripUruaMDeUQzvDoUrjXTpqHdqTHWzVrSoksVNZSuWBAmJxLUaJ41kZUMDRSufDEUGtKJSMcoBUR",
  "key7": "5uBLdnNsVJBYH4YcSjufrUEHquczQAZngSjxNz95SsG34TPZDrAG1rbST3h2VEEHkkwVtsieDRaqhHaYFoyei5dj",
  "key8": "3obTz27KdYTC4mQwJf5gh851q3unrtGg96mVahejX6Bxa6s8MjWHnQVffJTtwqAVsduUnbkefKKYBrsEXkd56NVH",
  "key9": "2UK9iyg9mtx6XEJMyr4Z2wRvw1S8djSi67JuLsgT5PdNbQBCwEVu33zknXN26NLPaxM4YTC7Nx9ri8tfqRr3FaGm",
  "key10": "3vcbcrgEuUsrkj7S1mpHzaDV2Mk4qNGPTnqR5xdF9oyrYVQhuYPbHwTbo77VpSbCFe9kbuD6WNvXmtj5PfzNKqMW",
  "key11": "5z6AtZZEctFEPUEuyYE8FYrd57JA9j6phZ7Hruj5dHVsxSZL3svss8v8j6nT8HuoodaLNHHi6P5xWBzJXhw67YMz",
  "key12": "5G5fZFUZVF51kNDj8Tc66AsezvPv6jaoWEpt2mQ1nvxGrVekwy6T5gzhSPmHGMLqRwZqdJqDaudM8sifQfHFzkb4",
  "key13": "53XZn85LgP8UMjZiULvcoZRbKU4PeqHvAztVugSZj4z93w8DKqT2op2Laj3p39Nv7MAKMs1pdadEevARvkykx67Z",
  "key14": "5Go8KFBavVtnKtojnB5fJM1hqWEvHKaTNaPBdmgEvZsN1huwmCUcd4vJqhTQUF6M8cVXqHkGyPnwashQ6xG7S4p7",
  "key15": "48kjRQUZJtqFNwnZWDGYtcW9HJ2XftvMLnU7PojmfEdg6Fqt9L3tBMDUkL6dAYoamG684RRh1iRe4nCUk3Zn1rJG",
  "key16": "iasK17rk9cr2CaG22wegivHj1cDrMW8wZoCsMvo2uMZjrdKH7Gx9Zi5nX759gxKY7ry8U3WZT6BPduyYCzxou1j",
  "key17": "4LurX1aghpzYmz3S2Kt5G1Sso8pe5KbQpRRceNXwk4iWDfu6bP7kJnm87jWNJ1atYLrmbcqTqTXAoZLiVHmQLBrw",
  "key18": "5JawxtVMpUMTAXbd8Mbkevt9iEo24gFEzL8piudF2WTqwDG87Lp44Zo1zRSyHGCLj9YKjTo6zzgMXtsPsNfdQG6z",
  "key19": "5nE1nFxuidfCwYaMx5ZNajBWUCZ3E2P4ftcJMWemR7Br9cfTtJjXq6CYpKdvcgbEuBWMfTDMZChspBwfQtj1nAL3",
  "key20": "3PFvBr13oY3vLRs3Vtwa7ZMtQqxY7Xid2u61hN3wj9dtC2jjX5CCsRudHfRZs61jdTwXsnwMZgLaYTZ11pWh4ZXt",
  "key21": "ihRou72NL2ugV9eMsPiDNqYyZ8n7zdhoQGxFM6RmsPwH2SBy7i69L11cMgtZLuTpKJwopjMiZqnHbQFzP1tVrAe",
  "key22": "4eVy2XG5oxGgXL3Mn4iCnWddQV2eAXqXmPziaHFmYh3mBHggMwcyP72wVt3pyDXpEcs2sGhet2NbhY39cWzweR24",
  "key23": "4TKnSNGpbo82AsmBjKTTNHgHXsCLVp3AASdMpyApzr4HG5vT6r6kMJfccC26abhFWsG2w81ymGzbxM7sYmeKtNhL",
  "key24": "5SAPrKZq1SQ71P9zqMjkDzDLUebv9WH8uVGvkU8pMuartB8xbiz46t5bEf2E6meT5EMbNGKg8ABuywLajyQ8Vp8b",
  "key25": "5oNfVppocDsyeiNR3kAXGtQEMBBXNCNvi1mJmt4Ghw4mgUm5CMFCZfSYyAo2q6for7f2sUR1GAUqdMS6JGog1ycy",
  "key26": "3DuptTduS3bM2AYMwenjMYY8bBZPPLQF2xFz5LdqpPBXJuMNzJKXfKRxQLi75WtuY9N5xc14LxDEyb9z3bHdasev"
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
