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
    "2fkRAGcLChfhFM1L85rLtGMJciSGQnzLCaijSTyHFZ8LdccWnr6mzLnQtMPD7QJ77TzLfGPgVrX18g574FqFJ9vS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44pDpQ2Ps3VbaFaeJ6MP2dvTqpNeTFdJ5YMqt8HnKQWoxCVTqm5wzM2DYDUFse2qkGmXiUFvhBi4dEfzYKerZeUn",
  "key1": "41UtHZwPhek1BVD3LtiEXFmbeXnyLV2t63fcQtVmQKRaSzhiqLeSvYCYQugiMwDkWwiicQg7vjAWyoQCX8HmHHAj",
  "key2": "PF8fNzNJwsEycwQ3ToV3Vmm3MAeuEv62mBokm9TL4a8SrMGUBgZkUADo9SDdF139P7296i1NDAk1uJcZyF4bv7Y",
  "key3": "3SRgqUcP7p2csPRLkJGBmYXPHGzsdpHMWEquCzfedabVAdimRtZp8a77kggLSRvZMJcKY6H2YStDWhVAc8W8gX1h",
  "key4": "471Ukasf33AjdE3wpigCbzPK2595yAvLzcM9rKBM5vxedkVuMvQYFjpXeAtVBfGASrPv8CzqVVWW5ZUnzp7ye3EW",
  "key5": "3uc71gW6fCYpCx6WfeovBSVuNRBzrJZoCDjBkyLwUFk5gKpAjcAsZBbPxje2PEN9BSRMFAxS8YuyCh2jLtvfTBto",
  "key6": "w8Ktuk1dVWHXfMCBiFFKS8Gb8ddNLD1MpVT7WbqPfJjwCj6FBUGKF1FMpxhJhAXNg8VhNfTr99FzYb3zLyVZxNA",
  "key7": "5X9LapXbyWe6GyPieaSWgxMn2Fbk28NRc4to8131mB1yZ2UntsnRd3FuoYJ9bApk8H46qQ8kjAv5mDS4mEmbeuhE",
  "key8": "38DQ1UiHpHCYJXEr5HFD1bnhHftD6o8cwjcy5PWsn7emMPYXfA6CCj5nwJUebkE2QNNeRTUjkeabwva6GmH2Z63B",
  "key9": "sbf5QQQSKYiyUd1bXEXPdyn8rVY8gZBhtCRcR8bhmEBZ1M54xC5FFeXFoWPKyNc46wD4pfvE1PaqZTTzT9b4Y5B",
  "key10": "3D6xFx8wA7qm4mQwrEvYR9HGuJsHoNkt1rui5PEpH3eszvewgw3wdVvgxa4Rsgf934bgG1xnzWtW31U9xqPiPg1p",
  "key11": "4gPaRvAQWtwVBCA5jrogeRKv5hKstyGZNQh6hjay1C7omQwDVb2EnvvEXamuits3gZGSKMaWmhK7F2y27cgCe2hh",
  "key12": "p8ESAHrRiwZmZRXG1vxm4cJzfCZjZEbWjiXpfiw51DwZWXSZnHsYN6wggBFL7nq4qShhvCM58g5MrmaX3Ekuc9D",
  "key13": "47n29XfM7V7jJiSLAWCivqNSi3euf5j4RYasvPsbFY8QrTtdkEUqAXYEyZDjcNnJJMWxr9n6sbJucChcpnvNQ9JG",
  "key14": "5Nn6ttKfREbjn4vxKh13iRdWn5L4PHyWqnxbgm9EJ8m1iaspfygqDLbGvmYcbNq21HEt9j4iNtwp9tkTDUFi8h3D",
  "key15": "3H6645A9QfpsQeX9EF2EaB5oJCZ4q4ciZTvmFtxXuo6rEVKRdTZchpBK3HcXJSFuaQLoQ9BzcTTToYTxc6DCmyWv",
  "key16": "FYsG2DdAPwGwXozPZ36GKpi613gHgTqyop3qFkNYSctRP7ANcGYaHh36g2s55Pz8Eat8yk9g6xKTFiGJqPsK1FM",
  "key17": "4EchBLY6hTQ4pxrsX5DvoGi7DCSEE4GAE1WbumEaBrxiT5ZtEPZ17JBDFc1JNkxBz4GCJZifA3rhLoUywExiGafK",
  "key18": "5k3Htyfep3suZSEPSGqHLP1t8W4VP5JWR6d6YiofkepTan6TKfrX31QtAcgAyABBbrnzJ9riWmgQQSzqDrnJmh9y",
  "key19": "5ZZuMgYkfaQ8wFwtJEhN2TXVGvvfBVpj2sgD8RhhiBohdWHvgNwkmomPAFXpNkhtLkJ9djpWfvAfJvrJA7T9uqfp",
  "key20": "3ZyuBatWVSdA49h1hL7obVBpwLXmQEdyXEpyzfFD7m7ciKA9gzSBoN95b3rJmvhoP3DiFtnQqfXeVytnBaq3r95t",
  "key21": "39v6CoH13JMrzB2fV1G8yQxFLLSAqFqZeCKfA1rvZD2Gd4hpUzHg4JKHwg9vg6TyBTFATqiHZ6ikibAEdN54YRy1",
  "key22": "2M3XwNmkgCRqBR1ZnHF6uLp7cKpDhUYQBkESKmeoRUa7phYvP14t9vWCh3s3ER55FdBSKGNQdzUKBCQH5P1rBbXr",
  "key23": "2k3F2h8Rp5vy3ktAFiLPa79ZwtMvh6TowXnNWcNtFm46jkMYUMhexjc8zQo2idbR1RvWsjLi7gxxAZeLGPTBH86M",
  "key24": "4j3fnG9ZPQhpgoneCMQxmoR9zDmuqscqFfEZ1K8qykgJNnG7QrZ6sdXyYTWAFe3EDtoLTCV6zXqh21x9dCrrmhp7"
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
