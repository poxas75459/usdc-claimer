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
    "34795BjkLm7BCmqQX7qX83gSKz99Cy9qKq7ZoEdCuKSsrfZg7Zyjkbw9VHMxB2td2HPEjsq2aMbpsMvY4zs1g311"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UQeiMf6BTmVTuQBwpHjCPqekCF7uu8sBDTNx4g742YFhmgogruh87TfumQc5JdeHku3So6VAnZyLHc5eQWjynX3",
  "key1": "XPercJZbaxKNdv2LbbU8e7CzHmGuQswTdPaSTEvXFG6B3HTnwpUYSWKDsUNPfA9Ssp2SKatcfHntYGASaSUvbjV",
  "key2": "5RR3PM3NQqgcn4XwfJ2cSKP6zmBpDg1foGJ5tK61LRYztLdXfHjiZkuyasGMcQbEtX8u8eKMBxLw9QRVWFNzsgBA",
  "key3": "3VMAXFr4AZLDu1m7fscddRfLvobT4kZgbntikoy4GUfbsjZfYjHLhr8KpzF8rmxxkvNeJ5oEP3tTE3ethaSpHZMD",
  "key4": "4gbgLFvoNMChQ7csBSdpqV5nQu1Rbi2UF6FT9iXAJ8kmV5XB3Z3WgiLWNYBRNakVVsCEJs99SwDdsHX4T8BpbVw8",
  "key5": "3gDVX56CEGk3yWzjaLLfXvDNJB5uecmaVMG3PSois1avxmBvrWmjC3V3jMywgQWLH1A8gEwUnHNc95qVVKASWsS6",
  "key6": "5ZVGXK9rUb2FUhXCKoKfatbWdPeMMj16q7gcGnCKHN2HHYj8Nav9TcRFv2pvzdoA3jrweeuZpYfYggYZ46VysV6C",
  "key7": "5ZLmp4AbVv3dChSBZPcz8e34AYKnK5jQmRvEKpfyHJMc7buffuNqsnjcF823Bdu72CaAdUk9UjxZXUDMRjsCb1JC",
  "key8": "2Fk5trzfBEaHVUtFrAXKnBmgqYiKpLErZzVpvSenHuiMmyz84CJs4EYtqS47nYK19f3FzdXvRhD5xUPyrS5aX7HJ",
  "key9": "yn7pnv3t5ufosm4JcxBkidCQmZ6SPXAJRzT5hWHGnxsW5a2Qm3ssXMPWFu7JHPeCGUy6j3XEuEu7qAiaZgvuEyS",
  "key10": "cRE9ZT2YDep7Ey9yMhNdyjDX3GmWqtnsXs5BRtkeRcqm4APaXoBrdVEqGP4EbrZGrqDm3U1QMPLbJyt5KzrpkmV",
  "key11": "3NdxC5CRSbknDgi84extMCRuZKYVjzJCN11MMJDdeYZ38Z8RbqeqNidh7SREPkmxJWu2U4VD4CkUoTEBNBLwhdph",
  "key12": "5KA9wb2Xp6KqCvoeanLVjm4dGj3qQcEpbLc3wGwQN8QpzQYpnDeJEAiNLSKYaa8KEuH7hpydCE5xN5sbT3ysXSP6",
  "key13": "K1K3BpT3yR2j4pgYNN2i4fLG9xLnZT37P443PcgX1yazQxpuzkgR4dhfFHeWc46VHZpvQLcGgQoMSAYyqCqyHET",
  "key14": "2Rs6k3qoPrEs9hGicaBSLQBmuZPhVUzzo3LXApBvqrT9BcDQeBycKLSSM2KtBSz4HCBsjFxYCN97DqbgsWyzHPa4",
  "key15": "4K1eXMHmxb4p3gHtXE6huADaCLw8NQagCP2pzYbm4ZZEvZagf8rn5pnb1WAH4ZjQTzjnFiBw4mkKrsEsJCeZvqNq",
  "key16": "5iBT9qczWJ1F5dqYu4vYZopFNJQn4REXHJHQeaF8B4zP6MzvmLwgurR8qcsHjaU1xrz54uRpRMtv7bpe8GiUEFth",
  "key17": "63Li29z7CuaNnGxrLRXsdaPQpinXPysYCSnLTwjJo2h9xieKV1yQbt9WqNMTZRXEZUbPGM2Lp2hdCmFnQmmf3svR",
  "key18": "4aBDVPbtcLe45abAjTD3JgDN34bjedYfMoFu2ZFxiyh2gqCvHcJncFwGseTkSejta1Zc23sFWpE6D1sV2X7TDoFw",
  "key19": "4NEZ3Zt1eCUvFeDM1y2LgMXDGSAaCoUbSS7CCGxxF3RCupSodDbHsMHgYwTf4tuWZC7X29mosRkVnzJYjjjjdy29",
  "key20": "4atJdtLmV5YHoUViFmLEyfXfQScXvruRfGbDqhoaMtTrcwce2zxv34xvwKu83xMN6yi4dZA3SKF3siGkePA66Rm2",
  "key21": "55LiJRC8mSYEWDC6XeRn6bjtxgS4cBCw8BYZRpx6bPKPiRrrLAw2bAFB7PWU6bmT9fBr9WNZAbR9DDGxj4uJe5qV",
  "key22": "5nHdZJgh4waT5jHaazCBUfq4WavDP8HvNGfBwrX6H3tLgxcc4ZKHGMbxx3eWAeud7n53XTGomWdkRMxyH74pA2Ku",
  "key23": "2cjUbDZGQtEAYN1zPDMfFVNsf9i9dxvSqabvLJqotadnFFz1woPXVKWVCkFvLKiqWFRcoKvgKk4NBADB1kDSpfkt",
  "key24": "36zxZRJnzLJRiPPo96z5ScYitJwr1d1NFLaRjLoQfnwvWyCvB92ssct3epHJ8762DmsSot3QV7JpUZcEXKxMoCT",
  "key25": "4ZoA67wYc66zBY1zouVTyfhEiXEF9GTktSS8iyz8JxgPjo4DHBTweseUHWPzs1e7ncCBYwvA7Q3i53NvFr5sGckK",
  "key26": "2jpcb8ECPVE3gYFPvWKCHSfbk4vv1bsvnib4XgaTpKoYqWVJesNRzrQXFscZaeSu5w2K1buRRgAfzoNVX5CGBZtv",
  "key27": "21Ljv8sYoGGs6C7jC5d5YdUzqNbGD397HUa1pfm5pNxUmg5CjykDdZi9pU2eR7oMmQpDfoUBzbLakQLYUzTAbucG",
  "key28": "2oa9RRxNsvi44quemkNHwrCALA9pvwkJnyxRFW1iT3ppwJUseUyzfoRiDPnjYpKwP6g6dL4UJ3m4z5tRF7mrJb8v",
  "key29": "43jTh4Cisw4wvZRipjYv1XypiT7gmwPpzCnVvRRPukPBCe94buk3VcZfSsXgN88FSZYs5zKXy7Kd3hA8JJVYLxGt"
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
