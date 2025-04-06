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
    "2aVNVutvxuDJDDLeE6rE8kADE77Q8VpuMMUq93zWUHFBf2BVDFGyxVvkqCEz2Zo8JQSRLR7qDp9cQnUmVQHJXw2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aEd8aQF6cyNYPqxBP1T6N7SvB8hFCcoDHoBDpsHvwZDSvFN8Ps6r8ofNneSjRMU2Eom4mcNTWPJAA7h3pJKo5p7",
  "key1": "2gBNvpLoBdt4M3fSBCCAXoF1WrfEsLB7PFQuqkuRR9Y2ZGi8dghrx4bhmxY6KE6YQxzirBVrZ8chzj3dXBAipuWH",
  "key2": "3SjsnUxnnvEmVKpxefEzrqnnWhxMvqNSmFa9RA5eHAoxZq1dGAHCVd1AeFFbpT3xee2JrEd1qUDpbv7j99bHkxeL",
  "key3": "XumB5YiNSLk3UKNULF7m9LonAL4biY9LvBcLdEKdtMJCUrcMFzuyAA5yFU2QQE9voZLHcZdL24oJ2VEG6JVL1fC",
  "key4": "26Rx6UuL7w2ni7j3i47NK2tRHg26NTVn3VdneYxhMd4dSgQmCHu4Eqbde7LsENYtK1cYavf2DnxioXPch1vmhYHo",
  "key5": "4A8xYHpJqojQcTBNcnenn5hr2u3ECnuoUonX7vfJ7jCccC83ExKa8jUEJ9VjnRicRKhrctFzJczSg5D2sW6FALNV",
  "key6": "5yJDiQBMaVwpzRRSfwCamGknjiGnuaLAodt7E1BgDuPVBZnD5Vy9SxdvqXU4gVuscqm1ftBQzEjvzYBZrwTmc3KS",
  "key7": "5XdfnLRSXhMk2AXZZ7tSDZgAvWaMymqKE2Uif5ysgfqAf37fAJVWG4VkfG3asQPhriacGN5qZkfFqT3z6tx3oqjc",
  "key8": "5a9Djxx3jLzFuSaEtEsbozpjFdDj2HLvuxzzSHDk7XXkstq2Suob7xFjrkQtH46qV68RctQqBRACRdSKCXezoqm9",
  "key9": "4sc72uNmQWGnVLaocwFCBdGsZPFgCx8sCs5JttcKtQs5N2B6ydvYFfGLjV3NmuTjqPbvq2vGebjBw1nFBrrRioCv",
  "key10": "3tQ39p1vwhhrRxPgzbwb7AKr5fTRVJwLrp9JsygN1Uh56FTXVgG1AR3J6TMu3oJZvDm4ifCj9NRpNP7FX9cMPzhG",
  "key11": "4qe4X4mAwGWbQzm93UNMRzPSdRPSqe4dEs7XwBnAiPojJpwckCp4v7hRZKC1SzHXNGY8jcSXtvLAuduDGD2s9tYq",
  "key12": "4aWjmod5y8MZqBHa9astDosJUYUXFz394zQdVRbXeMyTK5A1aW7DuYfkJuHZeEtdHfxXg2E492jUDfBCj6w82fja",
  "key13": "4UffuruGahmWcLPezJSowRL3Y9ysfYK5jqeqH2abjMPz3AYQjZ3ns7biZGMWtTFfSJsWAa4x4ivsKs98LZnkBCcK",
  "key14": "3Kbvcaey1WhKYYpVdnCj8t3s7UPB3ZamzR8Nysk6qJsLFtrBQB59d6cHgar6ngJWPLYoTVnQxCDWa3e9N9tDDXCy",
  "key15": "5Sf3F5UwzfX7m2zijXTdb7WLwQ3NWcTJBQjwBwYVpnukChjUNBtMqeuDERPYpvZKMnL7n8tdi8xhuE8oHA4TckME",
  "key16": "dwUHWTLzPWSaPUFn46myejkL2y1kyLTPAvB14iNaoZ75MZjTkVF4KUMeEwoh4EHypMxBA9TdUmmN8E8QdN9qB9V",
  "key17": "3HwvfCAAYhBLdem6TPg1rej6Jgv5RMP6TXYZo5wvsxNKDzzemsHRyXaxW1fYqMWgLGJK2k9hBfn5LeTKNeVw7FaH",
  "key18": "2Cs5Jx6LtL6CPF8dPf74QGhMfzbR1CwFEPpT2rV3PhRsPGXQVHv5Y5KbyP4LCnzbb68mgsn3Qwezxkp7K8gp632N",
  "key19": "LihkxWFqk5KJ2YtkfTzFyR7SU98VuNjt7yTVFWsmJLBKQXbyCBQbmjgTJVq689VhxENZ9aXhtmftjmwVXSZhKiL",
  "key20": "3D3zvEtyEfMGror6BoxU6BmxYAcsTUfM2QQbxseJ5XGAwqNrMAmNTQMEDtaB7FJQ9ULxpdrdNvMyKpcbuiL4kvay",
  "key21": "3G8CaWav7xvWYi5kxM6e7QP4YpGkkVQeutGgikTWtcFu77SUkUFDK3TS6LcXkAdXVSZafdmNzV8ztVQijD1eYjN6",
  "key22": "5WZnvohqhZsFDZxwrKafDEpHtE6BDTaraXWEsRVcMpajWPdfnLiHyJpATpQJ7H4Dy3Y5vu54rtXbMn2dBsniYnE5",
  "key23": "48MUZa13paVFq2gXQ77dQQazm31mgZCYyKtJTqW4uR7gEssiZE4QLXZbKK4hWPi1Ksod9zh5ucvp8EMAxh46Zv1L",
  "key24": "4idCWteLUSfVGcDWWzQPqPaDwLAwUqwknPKa6wMLJG93fMaZztWDpUNPqUY8FwzwSVMD4bYyp5eL9xd8NqyZ5oKE"
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
