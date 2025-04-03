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
    "5YHREK9ZJvpaxNuDFWKfb4nU5Q7ofXtxX17iedmXjTA4kZ8ssbAFZsFWFv5BY2ueN4n9DThZqAkyoTD4iRLkpsai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y7fG9R4mmk4c2W6goFgJs2rJ6fkTSMo9aprf9Q8WhJAaRXSDYsJHSwVNAaF2BL2eM99NWWkNY65gQETabu6TbQJ",
  "key1": "3fGY2oS1eGESd285FJkBS5MKwCGGoZkWEKYGAEL7LvVxxkLBZfqL5hUpog4xAmbxySVt7chxcYiDCjk7wQFQ4Vz3",
  "key2": "3Mpgb6KHZvf7Dx8WduHpHjQV8yfsB1tjfnaFuNpaPizgE8a8RXP5sVgCYnai5gRDKGmuqfg7tYqAnKwdL2DrLB3H",
  "key3": "3dWkUvX3xhuNy1raPRQTyBTHGyQRfeAS5GK9htuKLpowurvVKzwf7RkHzgMCqtu6YBDXa79VnNJGizeYYkR3use6",
  "key4": "3vVYxRhLqbqLEhwcYNx5giysmpL2PUoFGn1kF7Pg5T1S97dhXmBaK6xaKxnCAotPC277qXVKGk233mB3GKnutHSd",
  "key5": "55SaDKuiRZ5rRuNAKRwFqyRimjLaZipdskfAWmzVnNi72v5ar373wEyVv1X3g9QeLga3q7owW9tVhXwcejgSrLmK",
  "key6": "2q6YDXVLryFviQQw6pZ8m9NFSQwpwufhCR6idczEB37Q7Pxum1e6vh4rnrpobgu4S1Zyzwy4rstqEmcWeANVJoh2",
  "key7": "5CpwXfcQ4hWtDV1SDtcKkqbU5mgJB4zgr8nyVqGgVHGxGhzn1vCCdzNzrCtVi7H5YxSF1sLakPJFsB14nqe1tNcQ",
  "key8": "4K5JC7eCZFbordqCXpFnSL2wNF7CCXQKEfkqxX9vZ336eAPuVzngDs5YcjXKGsA3Z1i5Y5XDi6sbgEY6hfxETkoy",
  "key9": "5wG2Cw5b5fzEfSd3E46qvFURv8e3QhxHgZ7bjQzS65noKtbQPbkMT2iy6HG6bdxHbBysAYP1uRUrSPSX6JACN3N1",
  "key10": "2ZqYNSpZyECBbrdMxz4XCUWVAiP6V7GQrDuJeAa6yUm8SquAii3D6ikZepaydzHypyKnYrTAwfKD5xWDzHDCWC3Q",
  "key11": "GVZqZdAbhVtFTjL1WWFbkKnpmkEwrGyDSkdaxsqo6juQ3LNCVvXmZNqBXrD97pAx6eesx7YkLC2BNvw3zXSAc61",
  "key12": "X5WMAV1286unk7SHu2MwkVgThNwBeckXborTTF3YJBrNmb5rzu66U5rFNmxMe5DGFkXX7FYdZvvM8ai1i3codqV",
  "key13": "2BRcjdF3kNwRewMCfdrDiNcmZTLeYCA8wTAaPAmZ6w6Bsg7GN5txbiAAFfciRYQUVSqwknWXJiiXGxd31WpQpTqF",
  "key14": "ko9MrvmZ8ej6ga9PYpAviKpkhdPVaRRC7EccmRKPgFTYmSiCyGErjTpN4V9m2g3Ej4xmCVranKNRm1MT9CHGtyM",
  "key15": "2GgTGrKSG9PmwBrXD6fZPrXDvUzp8n37UsQLWGDEfHGB2U8rRjuykbun47fxWEtRv7cXA9XLRHquk8HTfj8j6jYA",
  "key16": "44tjBhSoPENYhp3ywadi2gBbzUxYzfjnWMYPnxiufF2GDPHhpC9ArFpTWuAiDL6ueCw3NgSzReyXpnQc3xyn8WkV",
  "key17": "2dXeKP4Sk9jYPxo7uhwEtBHVxo3ok5UnU2GAZMyEbiWPb4Br3VTR6ErQCtB7FUos66nxr3gVZnYUffGodn5Evogu",
  "key18": "34Gqa9o34DHthRmeHJwkE6Md6XHuhMX92mWDsDV7V12q7ZVmEEom36cQW2Y1dBWgS9j9Gq98VK3FTiDGw9fPbw23",
  "key19": "3xKFb2Rh4E4du4DvX3fdJawmj9GW4tsjjtrcFERik8ZrW5Pm1QMTNjn9utAL3aee5YBJyMzxjmG43fKPPyJWDGyN",
  "key20": "22QN8kYb6tcBwgYc1r8Cst1w5cQ8hpxHBLwQQncTdytFwEU5gacw1xFSQqrW3yi2eAu4csrsQKYGvLXPcZUzuXBt",
  "key21": "2Loh3zpbqCKwSkgf7u2sESJCcvfY4Dj4zG7hK3oiJb7d5ba6Lf9oMfnukYTzvxb8T6MUTFQKJw5vaWcxwjm8PM5D",
  "key22": "3rvFARHAqDD3N8ivBUpaRqk9Gymh47j3DirXGw8NU9w8erVbVn9GoGgriuiioeYQ74otq9Vxpgo8zgik7cEUYkkU",
  "key23": "3VoShmKepGV17v2fLBkR5FShNC1G6NBU7hJeejFwtzu7YhG3umAXwiqtAxvx3cqKye6iQFfMWQ4vmmjCuNZgT6zh",
  "key24": "63uxRUVwhHGdPaPtKTaVB9eH7vG1eU9Peo2yXYnmSsNnxLAJ3mzSpXDGvhfz1QjaGBZHRWTvocz8aNkAdGT5UaKo",
  "key25": "5LS7eqY1eh3YmYrZvTGRfZ7WPSzjUpVAWdWuyetzdpyrVojZyuFr53UqkHhu6wLEuJyQGed81EVspBHmuKx96RzH"
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
