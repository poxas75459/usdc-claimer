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
    "5GeuNyQEanQe6hbCYakvVtesQ27xRPfYZBqzbPVGJBHMyBziWD5SmwYy1zMQ6iB79EBB7ww3juajbYHfU1cWKUfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LVc3Moc3n9rNzdrbecW4D4FUxSASxGLfpLKs8c6Vu1VYZXK3YJbnWcLKaFaejfzfykNNY28vUEJuQi687x1uWHm",
  "key1": "4idb7enSCvkx63SRHAwpsCBiis7aa8HhiyD3pBvNSf78j3t7CfibgfHZtZcNDvCucBK1YSBjHHmVmxBgMucd4RN2",
  "key2": "2FaWAGt13gSntxkMr6WXNk1FaqtqgNDmRQfYmXggfJPhm3QNXUzqUcM6oDqRXKnQp7gA4YAm2xcsK1xoCdX7ZZzE",
  "key3": "66r6tvQu42gDmEpPLFFnx5h5P4T3K4jSsRgkGB4aVT85CCR7pQSmELjVrRmyWY4h7iWUX1t5jwntRR2bWMrdugHc",
  "key4": "2RAcUBanx4a7xGvuf7RpFyjb59y3kLepUrrTohfRs6kYVYUrHZqouMipd6ppEN2EukzVMLeQWEoEFtzkzMxWGNqh",
  "key5": "31mSTb1V2tNcwPdx73qAczzDMGxtcLbxddQ2xj2yDaD9XrHi1sBwVMEvncHHv8vrdFfYZpT4EEebFSRyfyqQRMvx",
  "key6": "3wY3iwpDaLbwKhNtFMarn5e71NScadRtAJAzMpQp6MZbrjyU3dWsqzBrZWZTmXZwDaMHFozTrnJj4VfT1jZgBHz8",
  "key7": "3sfEHDiXhZrT4C2bPeFHwQmC4pBEq4ejLM9q1dL3XYHvaVp5tqzRKHhqx2TwkRRQPhfZ9vtkqKa5CXLgWQvHFRFJ",
  "key8": "5ARtV5uYXhRYq2BtaD2DXyu8TeefZqhB2UKRxsAyT5P25Sfc8CdxGf1uWqmKdutU9WayBFSiPa7hdXuwFQcg1sc6",
  "key9": "DxvjDBfY3MNuzZzJdtsQUgEcZXJNTA6mmzDQwZjfMXBBrkaWaRfW3s5RbGfeMpd3MmZNfnGwBc7iRTqzHG2K1e3",
  "key10": "2SZ6iNHPnxgPeFDKzz7S11G7QZ6muyvEZ3LWdhRhErLy98PDVH1SeLsuS9YC66s1RoiuBZo7bE3AeNxfLTKf31aQ",
  "key11": "2jqvuhMFe4BntEnSmUixTNQJ58BLcsfWN65gyA8nZi1V19B3hTfJkiCF15fdB5jK2NcKcQ6sH5YkpiH5wvMPztKR",
  "key12": "2rbPXZR2kR62C95TaUM4RyRPFKpNM2T5bfxJ11gpYEd8r3Hgpp3HfScfxukBtsuKnJ73TL4avSAZA615JWiTaDNB",
  "key13": "5auwUW5evstMzpwYLrPPU4a1ptEnTSrsaxrx4YzA1eGRn7kmREfneBa3rVhoZR3PuNWDBPiNzwTCyctZFMLfJ9vd",
  "key14": "48YM157SGLCA7Coy78HZrNV27J8qqHwSJSdxznNX3AfR5u7LoXPPAmiLBquVu7my7TjTVeRec5gvfGvqgfrqNADi",
  "key15": "5gSSEnWGEA8QGSA79gLMwk62wDmuyKvtC9gvL1zHMJUUjXGareWFJAxcV7hFmbUWnPcPduQ9KE7rwzcRXHFf9jAU",
  "key16": "3hQcTn96s2BpfxgCBw3iFxHwbBFMzqWQTzX9HerPfv2aD6JF4wcv1AFbg5VHLtoCdrqXfFVw72M83m3MyKQvHoFf",
  "key17": "2Skp5xUXdT5RnVW1KPJoXPZMP4NSoC4d9wfynQEVNjmQZtLkzoKmnSqd7V8bwBmpxpDba92RaCRN2wvEQ7WpaP8C",
  "key18": "pjM8vnC5Kbx22jcNzmSjaEZmuQCrGxr4gtyYMYX5z4yGbzbMMXahzH7nRVsBbP7psLFdqcZ9i5w5hKQ5xmBsuri",
  "key19": "5QPz8ehQhL4BGghRiQjB6VkYoun9zvCiGfm4ggVJbSggqxafUD86osrXcBV6eb3YR8gVhHu2N3ZMuTuyvDUorhK8",
  "key20": "4mnYb9FT9xs3v1TydZm4v3X2rSrggo5brtGVKukGm8icbxjr4JSko7j5RiJaAShD7zZX42UN6LcQqto7sLNQwdJM",
  "key21": "47Br3SAXSRVcEusqJswCyMNSD7EWoHxktc2QxbLjithcFStxDdzFC1jiMfo7e1pVKD328ygatYshyyGk7sJJmQkC",
  "key22": "49PmKFrtU42iTJm85sPJW2Fs63zPMNF5xYjRoobzYJXB5NuF6cdmMo7DbpUxf1teeQJUQZu9UnrMfzg1Zc6qK4dF",
  "key23": "5zGQqXRtE1ridXho5tt9bHu8actXoLjbVf4T8swe7uUxireXBkh63VGtyeaTD2pq42gu6VSHdJCnB4iwqXjNq8WG",
  "key24": "4SjcGoW6U4vL72h62Bm79XixcHupyKRPZdCzizGV3SWTooUK19gCbHjzeJmxsUPeWKHYYGAyfYaZHP8x6TxmSxgU",
  "key25": "5uGaGMfSMbmdAgQSDVTRJT9rpwTSLGy5PNjb2eeUe2eD454NXcNkTPBcE3rvRFCon59xcvNcRCQWi1eEZpSRKFCn",
  "key26": "3h8hSuVyeZZi9u3gBzReJrJvdebzkXze5KVGkAhFc5n7WRTJfsmRqsDbWyamenUR4AgQ6tgcgkhG4JsxAWK71K5a",
  "key27": "3YWLSMYFsUccTX55VXqigmrbZEnfWuKS75qVNdezrktgkUtYfw7AqrcVfUoAHonoWfpy9ERMTEYnkdAR2QeSkHin",
  "key28": "2ff4bxMDP8W8g96TVq2un5e2i8dY3ECfCqnQNCJdcL9vsLfpwHfexBPuuKwqm3N2PACqbPGZejcdF1w2WGnToGqU",
  "key29": "2xh9BsSHgYCrNUa3scLFVEnP9CwZMZPTfCBEzfrAj9bRQXfDpJQwe2GE4nStea6P72grUXPT6BCdAs2VriGgymEC"
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
