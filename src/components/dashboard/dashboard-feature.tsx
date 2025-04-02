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
    "458FvPRstcHPfJDiG8h3WMLx1h5kqpwad6YuAjeXZRaPuJLbsGdPgEtJBSVJFwadd72YbeQUAsNWC9vviMV52oz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gnuCYehw8MswujzbYba5mELL1oEphLVBs61A9skYPegoyjn7d5DhS7Ryakp4nMpsiVSqtmUsP56GnVjiotaHmsq",
  "key1": "42PSAu9LRp4auUXeTyyn6v41MxshvCjPiy9iopnJcWQfNq6YPs3i4mvWtounjEvny7VvCCY2kvVun6WzbWG7A6Lq",
  "key2": "5yh6KzTu2w8WpuNWj7rbydNL9J6nt9zKsD8v7Y5yEgVWFJxNJTNhoduH9Qxqk4omDcRoApmv9qQSNmj7y6xzZhqa",
  "key3": "FefAkr16pwwBd9LCc638dagRP3EJHVLUdzKsBhUDCSZP6Uv4mfiT5iunhcTBTWaZy6kjF2Ymr8HSQV9a81gm4SY",
  "key4": "JQvmXe6H5HopwXUpH29z7dfAhdg8CFLbFjx5CMcEn8q4Un5Mgo5qUo4PeZ1fqdm8E7kTaBiDEFgw3X5b523ZVJ3",
  "key5": "4hZrwKHfYXypTnJXFB6HhuTQ4N1F1CowxgR6Fe6Ks4WacX2yb39xB1DuEsA7Kn8dgcA5M83WKTqfQSq24yTp7GiQ",
  "key6": "2eZuY3soBR2KV1h95Q2yc9NYLkmt5Tq4gWvkFzHcorPF2vmXECBQEneD479Qo3eC4fuTVDbfbrTaDY5ANhNuxWLb",
  "key7": "pqZc2Tt5qrpWJw6f3iPhUB1cUDJuF5Hq96LT1x6m9QD9cXrFgFWZnuBKMSu1vHfkcQWGSm2AeNcLZy3ZWyLcKco",
  "key8": "5b593EbQthbGn8MrNprFPi1RnnNFadHbgmw37gJkt1yqwV9DDZP3fm4Pxg1WWvZxtYUDdg8ZJom1QcoKd4aBG5NF",
  "key9": "b2nbKAuv1aaRytxC3GfCu7GParJ6etp3YTnQ6TPZaNggsZZgCcnNr71HhdLqF3QhiqbEhb9iSpcVi56MrZPwgSv",
  "key10": "eQW3mTcZYLZ9PxsyW2nScLnZ1BiR3QpMLNJJyPhTMbGHFAiDCTpUoeRx6Je1SyWc1zBARgMn1gu4MPyLtyrmopQ",
  "key11": "63BJHW8oxPbmkxcmgAm9kVp2nNxuiKcYW2c4PPPekPQJLsPd62yW6gSybGCYZL2LZqG9yL2kH3BvTZKg9EZn26vf",
  "key12": "38DkozQX21P5jLRjYfLSaVCg4rfMLheSv5va4yMM3FEy9Djxh7FooSXAuprEpe7wxrb5fok93sxGCpq5tBJuZ52P",
  "key13": "3c5S6kHYreMcf4V4UYgrGt5925o8qgHnBedG4puB3JjiywPkyvDmSwXx31zLfjGDJt8hEy2wCrexXKnSQJfyMeqf",
  "key14": "4PQciwDiiPzwfzVrz4VdCaBwEet1TzsksPXiDGXoTJ6iaKExbNVyduxHaqPKPrF2S7AKvgVZzSzzMemnhCEnaK4U",
  "key15": "FuUfe6AkMgEr1aagonCec14u1eq3eHrKT3J7DBRzfTgWT29kJarVKprmPuPUubZsAGRapdwk1MmCqo5tB8viRAB",
  "key16": "fNZAEFptSnhLLEnMTGZJvxMhgLLvcJWbyvyD6Tx6URXvj5Ht1GTVkVZZd3VtACgZnwurWrQybH64F43G4XEhNkk",
  "key17": "4atcb7MP45vUo5aJxsAh7CcuS3FGnFzyevmcR6pf3yje8iGMCgVKyaRBpugafczbn1KaYoZNUfNnVFgjjPkTEuZD",
  "key18": "35wdb22omeEHh6nZNy6xUExF63SbLgegNPqpXQZH9kA7LEWc3vRFooPsBHZr38EJ9cz37mDQpQ4ZCAH8hPpM1qUV",
  "key19": "3HMuB6SfhfUMihLdYtLkJ3kF9KHjepG9RD4bXU4Tht6Yc5X9gYqD5KbNUwCHSUVK98ZmZUrxbb2mCLKG7Bdihzu4",
  "key20": "4RQajKqzdRoDUfBe8c4FAZkjREMjR3wVxq72r3H8ar5QW5ddxxUJbgbuieW7bTfAM9uQFC4AoJxCKW6eVvc1XYT8",
  "key21": "2cbrwzW15VoD3sGCPTxGkzJKgbggcCRs17JgnKRJMcVsxEBa1PPbDmf2RFxQt4Ss2V8iNdgKKBBJTeFmEJ92Kcpp",
  "key22": "3dMzJs7wuJFK4Hby4Uw7hziFm3wpi7M7wcU7HS8zuPdXQRGndZT9k72Q2v95MibaYa7gcvhgP5wWA4Dndkmu7aBF",
  "key23": "64tiaZeYQ7GQ1UvXUzJUTfDEjtUR1ZG8BNGdo4DDnv8J4qWXhkSyPWjNigoPFSpvHBuEZ31XBayWRiwJXdFRdG9z",
  "key24": "2Wa2jeu1dpheeN9R7HKvjezapfUKPqSMtjMtvbxy42PUT1iMatCKtVE4ewkRpPDGnt8LM3FeCtYymk3vd8tf6qkk",
  "key25": "5wS3A1wAxxKPSabqhMbXAuBUaMMMevcWm9SUmuoRWD3CqQrrd6YdiPR4mRyQhE1zRZwhS7Dgfxb9urb3D84UoNXU",
  "key26": "4svWBFSTiMkKuq4yjqnHCXqRDCS413v8AcdmVdaUvSrBL39BtNjqFszy8M3aaWJgmu9n2RoJwDWRCNcQHY56HAkc",
  "key27": "5vrxpNBeYRuXmGgKsJgoujN8mYTShqAe7V7bPf4AyfHTuynPewqQpuQh21Zouza3mo8wPzGGZnoGUrkyXVtzEBq6",
  "key28": "3A9FToHa66R3Kt568YbH6Wjhuy2XaejKriXhUfhd4BijB4MXCQ5gqpms6BPmcqK8fqjxApjajeTYtDY13GXRWzJq",
  "key29": "4d9c6b6A9aCvw7fNQEtEB2JGMw6FpzhXswDuVd3BVDgaPyt75kKJN7kAJPz2xkhLcF4CpQa83HxeAmvxixNSKRia",
  "key30": "U4Mj2e8xr4BBQDK381TcSkSTqWQpFdyLhVk6Ao34NtRV3KQtzrMTukLAzRbN1Xcow9jfdNpf4uuLgpZprMRpNn3",
  "key31": "5LkkkXhMHnSZnJV2hK1WWcEAxGs4UN2Na662knHhRgBomrWLN1mHuJzgrtu7jaf63pzA9N3D3fWCJWKJciNsnaG6",
  "key32": "3zqbVxbBPCS7ecds3xszFeHsZtH68hx3qo3pBg2hG4XgCg6ezpxsiGkb7pP7AwE5TCiiVcnywfqo89qqJjqXwhtd",
  "key33": "4X9tsUjzUHnKkzB6y42rLjUmAWGrVef4WUqKWjjyQSShSKReDjP4VC5RwaHN9is8ypbEonFGpiazeeGpgEhQy3nT",
  "key34": "5a3aDowamATB6ycegKUfmZyuYoPw2CnsTXTj8c2mxfb1j6UTJhdteX32qZzttMNtMM9bEnhEPR7RECxUH21GzqKc",
  "key35": "4hi6xN9LhCWMRBkJS4pwKJyRRWeYT7kRtigWnXoyPqh3ww2Gu6HLq2LShi13BQt1Ag3DniT7ijXe2GBkAK1EByjT",
  "key36": "NsmwQetoX6Nxvr8JoTzc1m7DN732oAevXP74jze78k6tVhjAqRiaYBYiqociw4JsfHAJE544KvrgbKXMX22nCzJ"
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
