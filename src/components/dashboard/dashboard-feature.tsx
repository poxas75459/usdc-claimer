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
    "Mc5VgPnjw3EHA1nTdHkTKSUU4qT2CFNU1bsqoCh1Sn3fFaZ2uvHUxQ7Qa8TJc9QrR5nnz9wYjZLen5raLgELvME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49NsWVhD3kq7FSBmm8FeZV8eTE5cCFqyUdAa7xKAfBdKbYGackBaaBRmgNoqge16PkC284NvWQGEeh84T1oBcXh5",
  "key1": "3eGctowCkD6EPELzC9ja9S1y6LG6VVeqadpZSKjhQqZ8FvBDJMHoaK4HreV74njg1mDDwnfYzc264NfvvPZzcA2D",
  "key2": "3euXcFW3vTy4qsamBj3nuLziyC6UT89pg1bhdRRkZA1dzV7LkfwqoSavW8RsXvkdjbTYe67DYr9XCKjrEyEhrPQm",
  "key3": "4FDJ2fg3vXBPXbQsqANNsEttv81eHqkxkPkw91FSd1x4TSxQhwqwWUf788QDPMTcuSEAdjSTLgXgXosx3QoSku7g",
  "key4": "52cjihjRMPXR6qRqoejuyyREEv8Ut12UBXg362etTj7WBhtHGLdiE9aB1aTNUpZ48iLsjoui57P6GXs48DA9WrgA",
  "key5": "5aYMonyQjM8b7hfAgPXQszhz1dc5QoYx4v7PdjQo4q1gpun25WayfFF9PECdMo98PVa463Ljom6AmDhr17qr9QZt",
  "key6": "5mmV5V5g6GLHRXWoXEHFSgiMCLED3XXT8LzEiVPwVsy48h8xDwq52c7n4qAcdYZrFDsfHm5Pbvk37EG9UAFazW2A",
  "key7": "3AhjgLX8Fhec1ine5FjirWRNJGMDSHByRJgqFmhANW2XH6nAv4PJHczsRxgpPUJ1LzPPVDbwEV6Xev84hcLmeGnw",
  "key8": "FP5PT6qZwFm2cHcUSu4fNr5hdDZf74eyC1a6tXbqbvEKnpt3k5VCzk1q8UmNAdScA7jieAoZTUPfnG3GXa2cpub",
  "key9": "5VPd8JYEY5MB5JrEryhPL6Ya9XPAdZvvVZr1ymJE17HhLFozzZeuAW1FvqoMBkq4Ueoi5f1h6ojJeVZYp2qLyKtg",
  "key10": "5VUYZYLZcs1DdgMTGeNKX6Xj1oRd3cGfEtgBraiX9M9xgwUU3aacyvrzestFom8GDDz5Zc2Md55CieDTmk5ckQP9",
  "key11": "5wfkEqQxrycuWhPUPMGPgHdiqZFEYBy6PnfAkrysQH7XuddvH5swQvLyQeCKXLZwGbvPWemWKo7RhWARxV1ryYCW",
  "key12": "4w15DoWLc5Xvnq2w5ukz1F7JajAdh1Sgk1JLMGnRJ6FT79KpT4irdsqvKzqwrGJBDhQ3frckroUNnJXkFrmvEmBH",
  "key13": "2EvnDeYKb1JjXZGnUu9rfjzax2iC91Cb4UvGWzwh7S8QFJw59gkBfiBQUUGydJbZhyDZWDNDZrQfhTv6NLYW1S7J",
  "key14": "4JgFBidP3YT1Q52FgVrDwE9N9wmXCHxfrhatMRu1qc53PqAb8tw6neHvuRV98rf8MvZZCN8evCzqDHxo5bnCChym",
  "key15": "3Si4hpiKUcx2FTtzeRjnVCZgLEuue1NzxMwCS6oAsHuUYo7FfWhwcnb788Wu7K8MN26qgrwCYFA7tEsLSzSSbhnR",
  "key16": "3bfLirBp285ScvtVZxLYMwAsypVMjKYvi6fYaKkotzfke837Fm335A6XycgKxeUKgxFNLJx2pFRme1o3chPZBgP3",
  "key17": "2JarTreroEjcAqGzeBbu8h5aEJ6WNYLPwbhpTSGZDhDZKLKAEs8SuseMcfAdzjBv2PPx32cx8xeE2xNPteMMErLq",
  "key18": "3iR92oAB6sYyPA6dwNbQjefi8CMwdcmLiQZw1YAMXmArAmR5t8dAdF6s4H1BRbvoHuGkKyyzZ4TPpqqQUgUvpbnS",
  "key19": "51hkP1cF4GCtZm8cpBujwguhWcTtwhNBa3Vt5S65yaEb28bZ1aWZ7eDLWJXt6pPNEBMTJ515u8XXEHPw6t1RK2x9",
  "key20": "4jokygDfwXr8yZzDxacg6Wss86CfrxSNRFywcYUs1srXwPxyRnuhBFkME9PeY781etgRqk6SNUPVxF1SgYdnxXQm",
  "key21": "2M1DEdAFr3icdb7qFwBmnrhRsccJWazCAkYPZUTz53Ses8hibPBdtDCth48FVLrySPpbVqNeeEoN8ZyqxWKyUmCh",
  "key22": "2t9cgBxmPokEuJX1E6zNq73JZq4YVxxWBNxMfMXAxqp4Ar4xrXx7QDDont61jhZPzU3JNB9wnRG3qG3FeSe4B1cG",
  "key23": "5G2G1V4SmAF3ZwZw3xViSptg1LAMxXiXp6bmmVScAnaTJW5CP7EGkaEj1J5BKyQiHN9Mn54ndvg7tyN4UFSNgEqG",
  "key24": "3ZiJVX3hxqY8Zph3667wB4gn7oNdSVaTs7ouDDxy8h4jww53M6i1HomFEUZQA8xfb3wi9h3Y74PyCrDmeHZH3d5e"
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
