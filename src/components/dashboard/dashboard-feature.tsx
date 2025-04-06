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
    "3Rh96xJxF228PRRHEvhN63DUqDm4HpRMTSRZXrHqQnWg5597ohqGc1n1HrfGkVwwa3wMhPxyJvfENoURfKSrgKc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ky5iCCfN5vTbCxQPEoJUokxomvjA36ZiR7pput4s5c5MvK2R4s7LKBLbKoUu7zuVDDhKQFtMrF93dNVeMXWm3wZ",
  "key1": "4mKHuw1HNofkPYXrrGXTbYPTrgCSbcrc3mUPiJCiuA4wBv7ZdUsTv11zec9WVsi1JsU2iEVWq6QsAozewBfHD3bP",
  "key2": "5moYQoPpYoMLSdMrxqhkcCkaeaPiARS81fC7Kj6dd78ZoDBfHaVzzR5Ld7eQRDpiKiYXr8WbpW7qwch7LKS7f7go",
  "key3": "4k1BKwyNCmfNLe8g5JGPfNortyntDUuchfbE4geFWc3DXtVddfyWU3rPF16pNFNFuw6v7bhnp66TaRjDPgc5wh1z",
  "key4": "3dZn9DMKLt9RMoeP4P7McKo6ZP2aqKHVjWARnd39fmt98bw5hBtxmSXs3JvJCJ9ZVQgfEX9MnDyexdCQxwfWYMut",
  "key5": "3eYe4QsjaAjZyWd4EMvsJEtPUy59AEBmZbUy5rTCyin9M6jmzCkQLJXUWvjducQp5LgLwHUKf8LsRRYndt51U2jC",
  "key6": "3r2h46uRR1cQvvWph81PEeEibMRo1r7amTi2tSCVYEexifKToVypiWUx1cJa32R4r3Lxba7zLEsfoLmn76Paoe6H",
  "key7": "7kXMFuJXSrF637Jq4Pe8hCQsgW5EzGxTTVXGS1AwqKj4kBi1oWrp61JnuiYEEJvTjhyNi7obdT43hSk37h4CnBz",
  "key8": "2Zt2gbF912BwsvwXysu4XdDku2GmguqobRcjzCdvT7vXysUeXpSEEu57rDb9r3SiqG7155KxZKYbNWYPWhCw7oUi",
  "key9": "5HkSzUpkrCKrfyD6PnU6B3pvmBbTFLf9ZdDaWLQYskASxPqHtHQqsBE7fM5b7AJ3q4m6fSWLrLqRamTbUsjN56Ta",
  "key10": "tXpKBgxhbw2b5uHLB9zTt5RaT9gDxLgxTuLdBdiHpxecs2ZGKBUtcSszudYvkhswEYMvhreiAAGGWJ7pkbiqMom",
  "key11": "64FwENmcG5GULdXd9MSt5ps1tkEtkJZkyPXz4dqtJdY1Nyvn2ZmjEipGt5uJuXwi1tUFtS9MFJiuN4vkWVCExfWt",
  "key12": "425iuthkxg41xP42pUAGSEEVVrFzNmAAAy9QoobWJYRkrXfX61hfhzuSXyAg35asH1zVNJnPb6cJaxTdZfb84VE3",
  "key13": "5HLfKf5B8DeonRYkuhpCS43HYqfrGk4dZed4yeEN8K1V84tt8FkevyrmC5Nx7AVxnWaxn1wcA7HphE3mzYZqaF3A",
  "key14": "622eyoWDbW2C8Ua6NEy24NAscckB793LoRviJyNG1VGiGNHWngGUVDMvsSDMRkm7T1bFDQ2v35Pybv6Kb9T9gyCq",
  "key15": "2HF9wqkUqbQepBbUU1Xytf2ittNavfk7LMDmJbWFTKpiqGyiuTvguGXFpwueqnvcScBVZNdQr3KyDzU7JfHdgib3",
  "key16": "5pvKWv1GBJ3nVPT7cmZGG2mTgRkUw2buZwiZChn2YjHRtpLLMDo2C9TcdYTz72rL6K2JnxFU4AdzvR7NCDjwyCs6",
  "key17": "TUTffbkuocw5HJMQGHDStvAAMW9npgT85isci66yL7RNehgnoReAsEg2jGyZvZLEBr8fnJiCsm4GgqErEXKdrVB",
  "key18": "4x792sUfaJRm2FecVCPE6RgqyZoYZsa3TNfwBHFny1h2ysEEiUiv8rH7G2sH2hvME27CPa6BZMd3Dtb4j2T25WmS",
  "key19": "65xnytrKsepyL5B7EjrfEgkUqNFqtbLssWoJaVAxVs1AKRws1AEpDkJNtQ3Nrg2aPgejaf7z5HXXSij7T4VN1V4Q",
  "key20": "2K1hkLHtHhw1ACmNUzFqMSQkjU4bnWey9pyGAj7HQW7VZMbAZz1oAhQF2jbEMAGFYV3pJ7zWsST7jGaKApd6ca8V",
  "key21": "kBZm6RPVbbkyFp1XR2QBJF9xxLCS7GKKwniJKAqfYbSsDvPqw1GZNeCkeJvNkjqkgozr2mRuxumkn7GjGoF6g9i",
  "key22": "61ukfgeE6h7mB3wFY1baosDKCWsZS8BfBueqJXZG8JYuvRH6R82f48BHecKSyNiZPEG5CTSwRyKSVnrZzmDTMivt",
  "key23": "SyA8McKNESgVER7XtWnkVdBXX79dcdSTMBH7txtYbzwRAQJiBVHeWPtqS7Eb4VezzeD1EHavDLCktEm2CSsqNV4",
  "key24": "1pyNyrvFcneXtTgMkWVwuRzQbQVYTCLuJhGyyLyLVWgf8iSKYHpbANekxyZCAxU2Md3sgZeMy6yyH8ACSryxrdD",
  "key25": "nAgCqPLfry33zgLwQTzN9JrBBkLYMs9QprETdWBC8ntzUT6b15Bt8Q43CnHDheWxuft9x4rwpXmQ52cPYuoBMkZ",
  "key26": "Tn8Q5y2qGd3yGkk6WSPsCxukHiSjgjkSgGAJgGhB6kLYWLYLo2Gc5GFGJFtYvEJYXz61fkvWreA1r7VtMjpCXqi",
  "key27": "4Xk1HCnZjr6mCabSghmcKpKRWrDLnNGqVyyr82qbKRqeiMnQrsda8BbB8nfNhhywV8F5JB4vWixXumoLttep56rY",
  "key28": "4PCo1W1WbS3NCXpwfpqy78JWZEoCoZcnrUCj6JAhY5ghgAbMwwSVDSscvsN8nHhSfJmn5cL6GxcN8yRaDCP2gaPv"
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
