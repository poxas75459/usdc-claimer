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
    "49cpzCrUDWVY67vLgzarV1L3oV3C2WTbHPu8GLSfUitqaEobfiC15F11cV1icFC4zS4KousQtSncq9yHXbNTn2u4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61x5dUD2wA2nRjcaGjdHQRTNHg5SKHK9Wm1nHcjjXuX5FodayGVRDfrY5VDhNBCdB41G2kgLXsudKpmiz91FJaBQ",
  "key1": "dz7xWFFgujTKwgXSBAvNZBLL8ehJv7hFNm8xdidY63t15d9WczQWcps2u3aMJKW3J5HwwykYDUo8VCvCK9endMX",
  "key2": "mR8HUbupvrojMEmKRJD31j6NhhUX2BBMVLJw564cm2Wb3gvyVDdpJsMyfFggDHDU7dyTMLB1cGPn4GuDcV1VCUu",
  "key3": "3e3RV77w72u8Am6FTKMJVveRYbNEoqcvQVk4S1KNtUmTjqsDhJKQB1YucraBQ56r16zUozKesPLXwni2Q35ZfVdo",
  "key4": "4AJHUDpz2eTFNP3EGVhwyT2SpBiDRL9mLxgxrsBWzX2NY1Vpq3ma4KRcPsqf6DPkoqr7Tpd9UH41rQAT7rBVyVar",
  "key5": "37Qa6wNgTKAiv4VL2KXGht3Q3fdXDT5T6dwkihZSL2Gpc26xx1JdM81QbSNAyNLRVZcGnBaCV6HhB4vZpcUM5ZZE",
  "key6": "48rafcScEBwXLTaaxiauyMbauK2uMqRR1wpWpD6it2XHejuF3Z2TKCRSpsLRmfvUFPnhmaCbKpSUnUSGKpUv8pBo",
  "key7": "2weRXySv1QzbRrd7o3qXesH5ge15fgQaynbRFNjoqK7WFk55U5y17UZ33K6UTpKg4bsVy5YtCcvUEbnCTGx8PPcn",
  "key8": "678cDJqD4y9oCCY4CRy3c1kjuqygmp3hCtEGHaetaGr3kkUxxLKvgGwirSQycazeUPg3MGRYo1aGj77RtkeMTQjW",
  "key9": "3yVKRnqNb9RA4D8PpPymxopcLaFoAkdxbtJ2qskDWfAcPi9dZ2XstRmQco5vYytf93PfARmSf3Qf5dMbRbw8Dybu",
  "key10": "54wW9wpTZc4zzkMtH6f2i9xbTcdUTZ9ceR56CFSKWfULX9J56XXJghWu8c4tcQYzhAWwK2LFzFLeCUjedZAZMbAh",
  "key11": "5HQKQfJL92acUg2jvD3h1wL5FQwwqi89Yy3rnRbtPGnCwWrK5XFfXg7a35Ghf9wc9P6Ct1JNfd7KP1z8FisqJLKu",
  "key12": "57fxDuGcpkJ6XCBQFzuHdXDaEAAx87E4UvZBtT7Wqy4zBahkqb2s8GZSH1SrUtNVnMHudBzymAo75CMK8Y7Rn9KQ",
  "key13": "3wNoxR79Rbdmk7h8xkjFhWT9k11E6pLbBwsyQWcHLLxxpxM3gaKDXzSdLWpCrQ8Pq5RHenc9M7Xh9hoNfcgtiyCX",
  "key14": "5mWdTwxutfZwKx83C8sCv3KVhyArWL4vKuEXZXexTG1WZY2marQcdKZSiPqS9JF3fSWqkfr3UfH8wmHbiHbNjTZy",
  "key15": "3qzMdSn68cQbzRYGpMoZhDtJ5qNXPg2HWPsZSXNhjApw1hWy64p5SdhbrsWGMrfuXS93myWizAAnK859LmZoLpGc",
  "key16": "5u6Wbw9WWoLGxa5fmHDQXeczBgVoDiiWvzuC9mFSyabrY9TmX4mNTuyPCg6N8JApALa1f6B53f4eM88B9u45ByVs",
  "key17": "LDb7hGJDzpCLtiRyMXmpzLf9oXQxuJFwnT97guy3mqNFvkhnWCCRgFvUmFk8UgJyZnHbTTxXAUKtDKCPDJ6Dwu5",
  "key18": "3mXjJstexkLLeiGeKgDccabTriyamHnmNaBuyhEStgQM7xDMRho42EQGFoPvGYBf4Jm1ShaWP3Dw9i4Y9q9HHaya",
  "key19": "4rQgrE5YUw65G5EBs55DKkqxjHEgrM9gdgp9bMLB1D7QKY68hG2Z7GC2WVQaazgq6L3dszhi9jAkdCsxJcopoV9d",
  "key20": "rDVzLyJJUtupi19jvuMWtVmm5QBr3SwUvaNa8A3a8DrxngQruu1tRv4tr6kZ8TzzvtycUV3WNL6TXeKV2bhF1Mc",
  "key21": "3cy8xwBLKEUTkFvoctebCbwwpvdGeTQ1NpAxro4QknbaNUbormP7HAJL9AGKwPU8fRWHEjvdSxpFSt4LH94cVXuU",
  "key22": "43iE4efBg2ohM23t8qd8BCq9YfGGkdjtWEdt9J8pWDbKEchbnz66DDpyi84myJL3baZ3B2vKArzxN3hfWTiXzRUj",
  "key23": "4JZbpXesd6beB1DTJje8why8tRaLu81FW1us5g9kmpFf3pmyDg5uwoyfYgkQizQZrkBxJ7P17KphmjmjQ5Voush7",
  "key24": "YHjqwvB7e73YMAkGd8hCz1M17bUGeQeDb2mZhr7zpT96Re3dmH9KqwcuMx2DHnQ8EEJr435VKyTwQU6LHm71MJ3",
  "key25": "2SAt7CH6FvDcDMhqXfCesyN38wFTpn2QuS4vVVStwvySj3LaRJknhB2NNPDL8cxGhUmt88YtGP4zCyWf7WMjhBSh"
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
