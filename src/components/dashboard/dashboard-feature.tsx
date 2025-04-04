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
    "5jfPAHm4ugsqKZfXoU9zQbh6sV5MbG8RXrFv3oZ1pDoSKtQeP1hHBqaMij2HXqGFTEFw2WB612Thi4Exa8TyfCaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qCS3kVSjR7oRf9RBZ4NyZuVmKf2g1fCDK4XprhQD8odyusMhf6gXjRYRyetmueEESQP95hSrGcM4XgbsFtpWmja",
  "key1": "5EgFiPmxj6G1pdcytNRhVjzmsmzHPa5Ua4avWr7xTtWfaX98N3cVdYkK5JVUDaQdHtp7XbdFugY6Cv8E8ts4fUP7",
  "key2": "66iAxQg2Dx4TjG8H8Kdwj3NtoWpPFPd9H3EJh79FBwbRUZueoyxindMgNw6avpDBqqrqp869k5C8gftnTqvh2mzP",
  "key3": "5vAm8sFxha12gt2twGYzDwT2CcWMS9xJJ1a562vtgMCH1mx8dPfmULK1ingCUtQFBn3i2MmWAEx9zDCZRNLQNpXM",
  "key4": "5nrBkN2CzvEE6QJeUT8Bb4MupjA5r2rNfU4yfAGq8vkNMYkJ2SuT7cqeWavrqCj7LFFL5gDXnokbXzhASiFsxz4X",
  "key5": "TnGVsPaZWnoZPDTWMz1UxaqEwu92PGYUevAEEw6UJTscLAVMb5qwD1xHU7y2N9kmXxeA18xRc5qTVydjuFeotwm",
  "key6": "4StBhHFxwxdwP6TNcVJPD7VfqXh6Eq5xuXZqxWn6bZivhv5XimeXMpaNvjQn15ezpsYxXx1jQ1k9K5aCp31FEGeK",
  "key7": "S2SuxEtNxnzMqCYMSjaHgia6e1SD2ZpKwBU6UGBnR3oEvhKg25st8YDDHdBfQy4NqbC4NQhy9qPKpn16o9WbtMB",
  "key8": "2hSuPyFBhqECY9bVnr4awuCgKPdZgFVoZkiKZCFaWWFMU7Z26CECrs3Ph3TDBYeUJXSx3ZeFeJcZYyBR3vnYh1RF",
  "key9": "42i96fq4kYgm5M1RwtgKgRVCPKCifn5rN2U4tkRkpkP9fQ2xwu66g4nVJmLtTACBADmojhxCAu4ZAxeBgVWRNNsB",
  "key10": "3Y4GKYgzqmQvYKemcFQ2FvfweHmW4LNt4qWHMt6pUPqDpQh5B9gqyJUWLjPzzLKpSqjy3JVNcMgcNVfP27tZnUpU",
  "key11": "2qVDts8QZjwWh1ESmtSZ4jCsCDQagJWG2AeyzKEuqoabPaXyPjBAQFMbAoiwcxeoQQoJgvFEUGZf3Q9dZCQVTcGB",
  "key12": "3rtHDJTTYbGfGkiLmfAzPFVJA4xkU7E7vhrUv3yRGz9tvEE4w5Z36Mtigfnqy6P4HqAd2SJtvHgSYoupesCRcnQW",
  "key13": "3Xj2j1ohB4L3khGtTjvcwQGweoaHMZskDycpEmP9JtdL3dDquX8FVVfJk36yUVn1osr3dm5XFxycVT5sm1Pm5YvA",
  "key14": "5tThnD1SXsMFUvHre3nEkqvkwhnvvGEoDsyKpS8mkWWG3HYUxsYrKznWLqeVUnXrSmwv1vG9ksxzsqVs7AZTjPos",
  "key15": "5PadHqmuEdgdhzJXomn6ruAzPYAiCD1wFW9z3BCngULrvHdv8VnVopGWUStDsn8ExLisVsQBYf1feGGX2YBnLi34",
  "key16": "4wepdX4N6uJG5RUhj7AU7fxHSJqXfx1PHCdmZL1hfMP9h771p7BaLYbcoWWJavDyNLUgbJoMDPsHbw64cLfa7fMa",
  "key17": "xvQm9g4ViWyAW9uTsx7KtBmwhpV3HA4dGBektuDsVB4AceZ3cAvWRNeXbi3xuYtSiLZpeJy1gjfeKEhFiYSHk6q",
  "key18": "2qJvWABty9tKQ9rQHbwNtGfmwZU3EM72mzvvJkWEJyWbEfhayWXyK3pUvS3nPuoseKpRTGrNe8CdSyLF6UxibBFN",
  "key19": "64Mmtru79MPRuWv1Q9sxxDCnq5uBUfuNixjNMMe9m2WbmnnMiswtdQM9H4RBpaxe9pMCczHdXqk3XL4yzM6UNq7y",
  "key20": "3v3o5LsSETG1i57pTocU6fxnizUstQYc9RRLTPo57iJQR4AxoAJzpzdP1yYiXggLyKkp3gwkxKbDFbsV7P6HH2vZ",
  "key21": "55zyaZrGSBgDRJovt8DERMc1iVJQ1ViRG3NZwgkPTMHE926tBctjsd91dC7NCDgWY9ze1hwDXWjppRrMYVG5whar",
  "key22": "5RjexZ9NLASLKsEN8Bh6SSCNm8RqTLfDVuiUoYD8uB5xbFwwn19eMEraRZy84hV284FoRkrSt6i5njvyqAdCnUNM",
  "key23": "6q4GmNj56J7inuijCptssLa3Y9z4PYvcX75YG1DaifFCsX76HKmWhssHDHn5Xozf4zEGZ5UwHafaePKp6XnGSML",
  "key24": "2cacM9Q45mQhQsMHCirxxZPtwMP5UQKh9X9vW7Abtk6KkuGzcCBUmSgLLajBmcuGdzkwNBFMFXoYAVCFSeUUaFxZ",
  "key25": "Nv49xtBmf5bcQkfWfjq5mdP7Fx5ybBz9t2uLkYpDR4tqYPEzmY2fTnEKikqwoFjkiBm3QdD7AYB1qSZTPzrd5Mf",
  "key26": "wJHa7UJcWzxmHWBRGSDMSysnzrmENU1xq9pH81RUXAngi18zCDz5w9EJkoi8XGEg9S9Q8eDXuK1Y2fwihy6Rooc",
  "key27": "4uB6sVJUKwJEpzpeaT71YgZeH2aSvh9acuizm4CsWTyGPBGtCUgK1p2uw5xjRcvJnZhYLzpSR2rth7mDtxw7BfEx",
  "key28": "4sHwnZs9DG4sG27RL3P2PuEAEiMkSQMCQHLgPVWNfyXFE3mwDBNjUpQeeLpnKokzUFUzVLZ4BmjZeVwyxmBRDNDp",
  "key29": "3WkXmMoqTuumjzZXUzTtNBJaR3Vq5avdH5FPNTxDuURpNRQGT2amYePvWjgs9bsEx8ofyDDToCodvBsVeLYNH46X",
  "key30": "3W6mHK7kpxFfuAPSq2h6n1LJTvXEXHD4fVpaDPyLsYu7h1xM5kyqz17sgrMhNQ2SHggeCoFT1nnCau8995zdYen"
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
