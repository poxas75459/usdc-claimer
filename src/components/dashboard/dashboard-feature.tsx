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
    "fDEEEHzhojhK4QjyBP7GkRTRrq8S8nVvQjCkS7ni3ixvdpb9cbeZeB3jFcsP46TTs8aXk7P18Qu9fBw5EVwxgPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ky4KfHoBDqbYXXxR7kv5YqvCwn1b4o9VmwGu7E5vSFnQZb6Frvt68n355JB5CU3LGs8GpXFUsjmS14TzE7b4a7Y",
  "key1": "5KLi5UvAfRPCJXSrUKhJcyCzVyHm1h2yQbqakRP7Cjz7MYRnGHdCjGXUoWcNCM1mYmC3HF7JxX8MLpCTe8aME3Qg",
  "key2": "CD1hbjRUoxdk1PKDbjTMYFt769oi7smD2wvhuRrYSUmRWDXSg2KGZ75D28J1h9ypA3as3dB9zBLGp7Ha7ZKiN2Z",
  "key3": "5gRkwX5fN4eCyVUF95eZMbFx1ETTp9CTP6G9MGfcGAwiH3MhjTLBk4ffkys689rFokd2x5Y2TJL2QsY69vLfH7jo",
  "key4": "W12nFs4GvynZ84e9gxtfdHT5mGC4t4e1WPUe2dUpZXBVAw9r2WnHbWSnLXzx1RRFa3RvnDwUq6ABKtawwXC7NxR",
  "key5": "3RuBVykhgJikwFNLuXSASeGJES6oGgL1HzJusmKayoTjAuETxCTpumaDvD4TDXrye48fFwugzfAvhFgbSSyihvSA",
  "key6": "565pqESpwLBQkpHAJ6xnvDVzkUKuhMALab2SRbKwdcNmpM3T4zNuwP4MNnEpxG6bBiXK4Qvvxf7zfvowdJHMWY6E",
  "key7": "356uVV9mm9BFa854e6EgbWJ9JE5NYNrbn7vLjeoppoyvPBSCaxKCBDJFJBSzRCkxFiZFDHxqmWvY4xf1D7hb7nrX",
  "key8": "V7hYL11rhZVWh5vcErAbqMFiybLfyHvwFKtQfrG93bXMgXg1zjuWh58m2USwMvoFynPk1BWVR6A3ewiuFBiCXFa",
  "key9": "5deANpzBMNo3bNvxBvGyVzwoRqXHhLJGgLJk4Rywfkf4RKZ1oA6d81yupNBCiHNeCkq6S7oYL3EB9S1sCDzKNA2o",
  "key10": "5muqKYcnwB9XDC4KvgE8WLAECR4AATruedbC7jBmwxKeT2N4Dp1nBVJSxbamX2rGbjBRaLJxGDFP3dYwUA4M9WUn",
  "key11": "3hMZKW6X2EJqewXDJVVz33h23nQHsF34Dh6oQBpA99a1W7DvAWfJGeUNu37XDids9d1bPJvCvLzK5cUsJmdBmuom",
  "key12": "2h7hz6M4BHr4n5vNxzkASK2hAJaQ6GC7GzhRuri4Y9tvx4imjXZ3o61N9Jcs56CXQLcEhXTH5sZaKLoJ1UZvMRnd",
  "key13": "56uMx2Fy4fZZZogn8WgyufoGbCrJ1yrBNWfBuJhCcQZegkHPRcUoAWoBCLUo6Tm5Bt8Km6HQJcAtiJjhHsjZq34Z",
  "key14": "49xfAmWyNYW3SmNs4e4CQpTsjNhAqhXnBA1G9Yen1BYvZuvFvpeCYnA9WNpD4JYxdyv86t2Pt2p3jsAzVGnM7hXd",
  "key15": "38rJkb95vZX5AwYdQ6oGG6Mqwn971A3GVPHQGZZpp22rrTQGorU2P4dgSg7uCyWne7hJdkWbPCTPT1t2oW4tN8tE",
  "key16": "2f8dMxWjJKwimM1ZfjJLfTgH5u5V8enBDJNFguLxXuCsfFqZMjQfrxQRdffVrLDjnUnJyisBGtKjhWXEBV5EkLQx",
  "key17": "ssrGVU9qsRBWjY8GWKpDtfisjUKGskAzCyVHsGuVLVa4KkuyjeytqPUFrZ1mH1Y8n9RzFUy6pAvJETDttqS7vcv",
  "key18": "4mo5Pq3VMXQkUzJxhuHL5dgidNSLdmEBgMi5YEBJExgT7GVgcewWDx2WdjSrfDrUxW8cFhcQRcB7j2Yq4Ht6GfWb",
  "key19": "3m1MRbjbQd6SLpEibAY6GG1mLcjKQCfRPXcmV3HiHwN61dkt2KS99EXNTx5Hbv9sPZoyPMfCv87sdG5QLNT8GpSg",
  "key20": "5HLBJhaQRncXjajb8obBAvFHhk6F1nigd5R7WvRv1BEb2HA68K5XGFpDaABJXzzfJD8vrdLFwM3JYNNULQ55UdPD",
  "key21": "4f6unNaAjr4o6p92h953eZo6Zb2skH2CPk9ZjWefQ2vCNPWxARc6WTKntmChP9Fff5byoXGtfaQmfE7ifwFWGcDL",
  "key22": "3HrMKMEGQf8UJGRT6trWbwPHgGuAUvHtCs4G63tu1umfZAsbB2zmHbi2hqMtaJekonr1EYLs7sMRXmTC4CY4dm12",
  "key23": "5iqb1DTABK6Ut3xyomdQSsEhBwdfV5yEPzqeXK5BSM68YJdcjY6mGiPWCQYG2P8rV2mUSbsZekxqeAiZzQZ4Sx83",
  "key24": "4nP5p7xXKSoUNMmyTCLs2q3CyVApos1GVGxq5pd5MAmUsZdLc41V194euBZqrTKk1LSxK1Ruaocj2aioTfbspj2v",
  "key25": "wk4xzUzwTck9QLKfGxrkxXeAU73LffWhsR3NvmJP34JdhFVuH3yW7CrczSau8jP3ZnaB7PXZDFSaU3G7UQRK1gb"
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
