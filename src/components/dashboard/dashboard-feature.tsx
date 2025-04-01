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
    "4GnzmoTUhgBymEpZWELmwN54z7FaQhrmXAqDgJvd9UqdjUACa7HigauxE5yAs2A94mGwpXJXoMmKStoRY7xTxX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qFRa67tiBfQZynX9mbEEBPXA26mn7xKL6BDqauxGGY422iKJnvEhGCg31e74ZLAMg2Koac55mPh8ASQg5zY5RJY",
  "key1": "593cmR7vLRWwjrDVEoPT8nJpmCGRiqWmyJbCTy5koGm8H2X25gmmiBDcwa1KqBsesjbCuNCFWkY1Le2R6aVv5Wz2",
  "key2": "TKDuPKycdkgpzQmVCX6YUBWwPydi9vQrr27Ts3JbRKaTReorZ5TGtZEsBva9AGc7C88zdady9qQffBzsyQWRZ8v",
  "key3": "4bsX2tnnknWWy11j8DSxa8xb7t3LRHKLc6s8obrCkqvyiCB8uF3aJs8ivJsFS8kWz82tjJhAkQsVJLMwRXJvJ1MN",
  "key4": "2ynVebVazyKtbRzogbCsyDhNRERQ8JjPw6K5MgbUgY9PpoZDeykKxVpqxTCk1rvkxPgRCnuuBHsjspYsx3Bfa8zm",
  "key5": "NfBVKz37NnqDULdUs2T6auFx8hcf5Yok1op3nkK9LXb8MMjZuULUGPAcfF6bWFs3cQBtZ3kKmJuaNgxHKQrySih",
  "key6": "4vqXHJgnZR8QKzjvumQ3PEqQtfCefBZTg9SA6riBRUKvRFZzBzFSq3guTEbyACij9atmxi8ryY95kV2oQfTGwBr9",
  "key7": "2HD1VXa33Wo93ZEyCUTK6QeXEJLVu3KRC2jNcZqkR7on2cFCQyFTgD1Gvyiv8o4qCXFhk1DesC7LngEPziiphXZk",
  "key8": "4rSod4KaKBUn1XSL5o925A1Vgry5wpHPybsKba1YFFqyiesttCH3QUV9PMQY69DwEtQSFBtjEtxcUKF45dGMPaHa",
  "key9": "AUKXdUE9Yec3CZKwN7Nja1yPA1MkNzUeRqEgPNPMvd6Xu5dGQcEGggAsZmCPumzLL3PEWn1Bxa1bMB3A4mLn3GC",
  "key10": "hw5Ju8TVRs4t2jw3AsrpLua7ZaycQfbJPPKgTiZ8MqSUCz6NTn3HU5BZoXzHm53Ah4QY6RYGLqyj5fZs1k3UVNR",
  "key11": "3LUv62SYkXfVJ2kY7tAoB4ozUHi8i3Tq717kBSS2emau8VaPvQk6Ssuw64pz5HHjjZNyjCemzjrrRs5Zt6GDpak6",
  "key12": "2Gi2BSmt7TTPtj1KVDBfey96QmwoFoexoB277Sn8RWCbZsguuKqtvaiynL14aEmK3bJFTccZfBj2hPKDRgUDBBR7",
  "key13": "4LSLoP4goPSGpqmHAshgw4HKZkSNX2ya2jKmvhUqBKghRL67ya7G2bu3kHRcNHX8c4f8tU5dwUvL1KE289uZVRJE",
  "key14": "4zypqgrKjuTXESYJaDVDeSqrSggz3pyMPy4eh9VcUq1wR5BCQiw8RweSBEq5GUzfMfpScVa3kRvPZXjWz2mJDDJf",
  "key15": "2KWWxqXDCYUvP4ENxwNAiK8X8n2emALsA834hTKu6LDsgiCdTnojYrNt31E7dGTzvLNAQJbLM1jL6V9qSjcwmdBd",
  "key16": "2TnBsqGYFgbjiLjgbnuYNX1k5zCbJZhaEPtgViwm5gRgBWnUni3DUaPLdo284svj3mWh5gcWtbe2Xfv1aonQTwv9",
  "key17": "3ewPYzPSSGSitciyZA25LTiWzPxXVLUXfwN4kkP5hSfbJ4EpKd9pHxF5BEWTmGtCJUTVPMHiqAQ7YDv9xDX2mKsC",
  "key18": "5MUTDoUpcvSKcUTW18tTvBNSSxzSX1CPQ3dmTs4YYpWFdG6QyNcqgTxZfwLQmeHTdkNbMzzJ61x5b8AX6yZs5x2c",
  "key19": "3J1nHB6J7MZsA8HjFMGeBJZ8GLEnTBMUvDXtmGVvBHnddyB4U3Y5wd4SioUjXzZhrAeF1Chv5G74U5oCPPTAeQto",
  "key20": "61XDBzPdXZngLqe7PwLHQuPqFAM2AaqYeNJm54ogmigjVzSneYLNQHJvkfikxzXghLpn1HgrVhddSUC3oxWQ3rJ6",
  "key21": "2LVjEfxBpMtEKhL38K9C1rUewyNw8XYJbYxDHYjejBumL53AqgmYASv2idAXSMkgDTmxGGdrygM4sg6Yn7rg5pvH",
  "key22": "3r7topL76dt53NYEFzuSiY2CnUU2osN3M5xMCvSpFfxmwUi42D6LLWpiW78WTx6Bde1uTd9mPocZcyGHkgPSrUSu",
  "key23": "6MzxkoqVVCabtXY3oTDrvuUN2wMWRJWRovrm5gAnrLfTykdp3sA5SkAD66oJDTgiQoSkxKrcrjiQMnmNB5SaTKt",
  "key24": "5riRr2ae5e3gVVzJuAYjVWcHEKxf5CVbSaugqTr6on3m7EaSa5U6M316Te5Gqrh4AfrTbLb5hjxzppZmsdYg8shc",
  "key25": "4tR2k8asu8G4jNpyWgDxNVmDXPXiCXuyYuGexDpcR6aipDm199gHU8rvL1t6Ve9wp7v9inNBAEQaZEYqXfZP3cMT",
  "key26": "4f6wHzBrEnJu2VJfdUwoR7bSppKTfG676EQyaaEpnbq8WaYqNfTMRQGxogEDWK88SXSb6dNpf6cPHp7NGSfgcZ4p",
  "key27": "5c8JFXxMeysm2kqzCpdFjyCbU6wjWRMexzZNt8gC8dJY9fejRLnwMwG4YS9cRZCWJWbQR9wnJon8xpMBjqKGqnqV"
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
