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
    "4ECGUkMHKq6xCffwd1YTqKiCap9T91Z5f1f2gxMWyf5MFwAZZdqNPHWqhxKLYtgRj8x441SXpCB4UQp3qkAQDBUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JN7r9bv6RanghCR5PyEZeCbsT2ALFFVCXDXEQ3JaDF14gkTgE966S6JU5kuPngJMPZtAm3yFUH9VsjkLbGwNaiT",
  "key1": "qCEMd31xXSBwkKx427xjowrxaR1jbDyhi4D11WvREHAgpfJ97Nos1jcNM6ztFKvvzS4drERz4geH5YAgsA46VNy",
  "key2": "4DVXLL3GjMFPsuMA4TfPpHCGmZFn1xroCTdcxHRuHoCLBPu3PsnLVfioTR38vj7a5ZCk1djfvez2sNLw9A8TqoeS",
  "key3": "2zXwXbaQ9iXQCavtfJ9ZDKqnvN4xMcBPcPMuNWQGZDKcPhYvPV6Y1gU61jafti3jddMNeABeU87vFAnWCfUhriKi",
  "key4": "5kRjqTy8TwP4VXjjhNAnEVbjuPwqxyCuuvU5hHnvWdR7zo8uLFM4XCsDdmFLKE5WijFcNvtjckkC6YU2TUmgxrjF",
  "key5": "3zUrF1AM8ovAPNfFmrUTodS3tAbWhFP6uU2NCLQWrocQgpoBSwRvj7fciLjhfm75TmJq9BdM24Cy1eRtJ6GfmuW",
  "key6": "3Re7o2R5bQUygANWhXTqjVVsBMfwXPG9xM3yDLKVW1yEisRnZ4AEh3ywdNEHNeGGKS4h5TT3HwHY1tA2T5iS9JVc",
  "key7": "4tqb6QKmo71S2eiDAirqHPNanjLsPDAEQrY5iRPnnohRmvHsM3wzcX7aKS6XkRuQaZgvuPgqs5u9amrKQyK6Viit",
  "key8": "2h6h1wLyL6ugMCxE7udf5H4FfHVpce1YpuuXxvfhsgVoFcfwKyMBocG5ePdne4qkeryHZ3b4FXvUEuNxMG3WP6AF",
  "key9": "4YwFCXZgDQHJC9aMB7jkNZmkeaT9jGSz8GQE62TTCP4jFemecYDLTkNjmyoPJPxDUVZp9cxVrFi3rwn2QUkk9Ky9",
  "key10": "c6P2Cu7Nf7BeckQmksoUJeiEEqBuUqh4yB3BJkqadvGeJubsthsjBEHVBYRTbQkNNQyjU9R5M29pVetsgkzzAb1",
  "key11": "eVmCy8MaE32FXWmcEFDDco6PeSQhkxyMWKLxMWUXEWVzwtWZv9SaFBVynTc8ZN3SfMpCqiCCfLAPSPCsiwK5vUE",
  "key12": "2cRreNJiMUh7Gf7tjJSZg9EWwieZorQFm9CJck2JDETQDuomRVNu3Q69sfwZFDrRLVHEMg8SJBKxUQzraXoLTZ1n",
  "key13": "37AjybKigVzEcDPRnzkB3tnn82TVxPvGqXeqbiWVC7s5wMvM7Dy3nJXqtehnhUoqtr3wHtcdNEsyVa9Xsnic7DW",
  "key14": "kttV3gNYPZjQkncKqARAFuwL7x3eUR7Fjs6ZA4qKygBCeWQVCRomk8PUxLtFv1UvFJeaiPJeCg29vCnLfQfS3qu",
  "key15": "4m388XCRx94uKoyD4Kh3t6qQFz76eLh5WyttCXXQ2gdoyfeHJA1zSX7p1CwJu7zRxnrPDPoaTBYo8LHQreziQQfU",
  "key16": "54DqcopK99knQtEfajVpHdLDW5NcmM8ZWcXGVtt2wSjecrURvPEYMx1mWH5jCiPENvXEoWRewTVSAQLiEwpY6BVU",
  "key17": "2j644hByMhcYz1D7WKFfzUfJzDrYPnSQmkrr1gKRrcGQ45jWWfJCe3drzyrjCrHfEMViGuw6iGVwLfx2uubCEeaE",
  "key18": "2wwyX4MnMaj5RUHturkKpM7a36WSgeyiaGMfQHzjrsyrk7TkizoVNLAU9Q17PDQmAkWLKbjMHpFhV8A8kbzteD1n",
  "key19": "S9nPxaPiA8g7Htq5TwcbGEWAp4xZAoRGAVNL5dnCjwGwfPNiCH2HRYuBp5smrPNrY9kRLJKWWxBsiaECAEfA8XX",
  "key20": "4mt81KduxjiL3ojGsN269cJ2rVBYZpJP16m9b6ZqGSbuT1FEy6fkSDKV1uDGrTirJBVfpg4TnuVrmijx7s7PkAXC",
  "key21": "jfzgg6YtqJt9pCiypwYntbhvd3c8bur58qP2ijvkwuZn6kgVCucCw6a86MExZ6MKVvA2MiE5gM1m5ow9v57zrAZ",
  "key22": "54xhXdxt9wed98iPBMs8Xw2YsPC5WAPxuZ8dgrDJmiPiySPKMRHfyiHQ7qkSRL7WScVYdYu5mf9zKUgkPN3CDxCB",
  "key23": "3YXZS347JK26bkVWfGJ78wfTpddfSR2TfFrWzqoUPzB5DWvfFHj75ES9hHhpTEQ1YNkvEpP5s98hp98bds8q4zMQ",
  "key24": "5zJpaS3dhCr75gouWCAW3N1enBgdb8829FuJc9ZRmhwLDshs6ByptHgQrfwjBYBFxLAbdHzofoa5Qssn6CazAgyV",
  "key25": "3ZWKxNcFBe2SVRrr6kFyAXJjTh1d3RvffAYwLV4b2aWkiusTNNt7gaaiALmDXTzMCnvRwsg1SzMB7SD5Rms4t6Ze",
  "key26": "2ivmTunEuBGNj7WVKPFwEwRNXmnAHcXzJnA3V348xQHt4CoJHW6HTzKyp9RY4MUbE5bESKAUnHixNEwzpom47ibJ",
  "key27": "48RaQEvbBaBZLqfz7CqcqdCa8L8qnTH2hspdiCSumk3ziGoM3jdVkPEvPVVWibFCPGZn6whPEQfeThv12qMyeefq",
  "key28": "uPY4FcxX1WucSuRutUjftE2BBRUMRYvCBMSdfnMEzu5Du3RZESbUmuy4LeRiksjiFgqcLdakT4cbHDikjtX76JH",
  "key29": "4XEiij81PmQwscuWVUtKZaNRBzx4MoL8iqtvXDHiuUYWedt9VAdiUVLLVCB9vBxQ2EaffaqugzGXRymDkzXinpRj",
  "key30": "2GKwQozzs7wH84KBuSRAsjbiFV32ic8KQYs9unvmszHeoswxCsHE7yrtSaPwMaQqQoK5Gtw5PtRoqrDcD7oGqvNT",
  "key31": "4S9MASkZpgvMAKxEE3C69nyCqRPvEwQuHR19kZdQktU7YeTUEgTEgD5oyicZJ633VmrHkF6sEyCt3cb3py45sLZA",
  "key32": "41ppZD8akgkm3Y47CNsj7fe41dAJDAHHX2MZjQTq9Rt2VwHkGwyURwJs53gsumXeCWYa6bWbm9FFndEgtKRGQuW6",
  "key33": "5ptxcCcui5iD44johjDKchi2KFBfybAyEuHedp4VAbaKocc7pRodn7wMd9UeMcF3FXhFLggcWL2JTxgUt846zHLY",
  "key34": "5348fhJ1P1xhbtE8drCT8ZRqU9KaJ3QajhyTiUUnT6hCehPCv22t6je26A4Nio8hiCqoQiqSuAe4NwPagPPgwFnR",
  "key35": "47QeJkUNaSe3ax8B5thYijoyXQtjYVpCkF972tVYv3j7Qx6MFBsH8JGiWBqB1p5pNayNHfWeuscUmmrKzeYdXXqh",
  "key36": "2xbu5hQUsF1xUPTFUSKFSTiPzmnXVmzaBLmGyLfBTdmFXicYYmUr8QwdBxr5W5FfUxHrFA8JvqyCqtrEk4vKS1Vt",
  "key37": "shzhHKkeCYTpvJUJa9Z956utHgnx5euFdoNmYnpmPmXERZiBMZVYmpsWcsqs7vLdTQdRrnv8PuEYGC1hNKj3hki",
  "key38": "4eAG5xuAZ7juv8EG5JkcQG3qJyT5dmdvQf4Amco2Q2GoVbxrzPdRnUZLfzd1UDj3gyt5mU77c3rVQTLzpoDqyzAm",
  "key39": "5zN3YKXyfXGeqrgoi7wLHjDTFXz6XzdnbhbwqRCRMt4HMPK1LcZbLssVBp5mryQJL8aZC97ALDbZYfMBsTGdXWiw",
  "key40": "2CbfjJKMFgjNU7NyguGTFBzC5cEprKrVGmHBumpdiDjukYwrLzH8sRNWAPn5hF4R3HawdL2AGF5CLatUzZzhWHq9",
  "key41": "3DHGvuowpWdEJq4SHv1L6j1kRoEfWGDxLp2YtYrHtqb9t4AcqTP53aXE9VPSJCgRk7XUKUDgebvJ28zFu75tXAMj"
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
