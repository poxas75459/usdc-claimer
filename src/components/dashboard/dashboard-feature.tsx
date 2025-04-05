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
    "661WN1pUoFKp3AkPBfCdznSKJoQgCN1wCBzz2cEDfXqtdMfQMaWr8967SxjNVwX4H4mF1DXrYakavUQVcaPp3yaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e1URBGi9e3KCkeiABtMJkXMkk96TwZ7jTRA18kirtK8Y3gifrKWe5U9cSyx1K5epQHkKtPTjcEkQHmrVusgomiE",
  "key1": "2mtFEsB5P8La6KowFmeN6hxjEVBXK9XM4oHGe99UshegEyRZYkWzLLdoM6LBd4ZQAxzH56KsYd9b7XfNv4An6s6q",
  "key2": "2Qx5z9GwJGwLvBj1WHpysaeUSF5Lzwu2vejBqkv1615HsHVUbfWSodieFMicJjnxworY68JVxNGej2WGCd3iGRae",
  "key3": "2zpmAE1LU4c2AEQ7Fuk94kytixUk17nnLTt6o36wQHvWx73dYaqfJJhkJjJQpkJstpRZk8TiUy5yhWtD1GhRieRa",
  "key4": "3gzRqwkmhEuvudeLQiPfEPuVy6Q9XmUKr2wYgfVcsXLmGPwZ26QT8E1ELp29uPa66ZEi8KQpbAxa1cyfPKSxr44x",
  "key5": "2CAKhfwrqSM3k9tqcgofJcDikAgKKsMcMKYbsHeMyScHLmJLaMuBfzujeSFchivsGQVKMyU6uauKbaCLmZsPV9bA",
  "key6": "2znvWF2wipy28i5uSj6UoZX3TUXimFQriuchmUfVLVyL7qt3iXwQke6yKQmVgDMxdjGLrC1DotJBG8vwZSuWCi74",
  "key7": "3URFPMDuMcXsLbZQa7Ato4xTBZDSgGedC2yiyytAj9Doc7jJYjuVDiJJ1DNsSQtbzkcQHrwPNiKb3vsdX3w5VBJP",
  "key8": "2EbyPa2GdgGMc2w1i6SRiHFksiPfS1dx3WGHyauC9BCAn15P2oaqXNu1tANqr86GKa68VMmAG3YwC6cuYmPzW56Y",
  "key9": "5JGttBBwNWEoA5eofZ2eDBVXEo68spn6PJpmGtLtVEtRvbeybmHryvKvQrbox3Bgu1cDtSnrK7dnDHW3VQcmPtk6",
  "key10": "3LFutkBicc6SBdApmSPLfo41VPttCJ468q9pjMD92nNUi6o4f5dtVNcKWo4ShqbLQzy5heiuuxG15Q7L2vUW31PW",
  "key11": "5FmUFmkqsyJMUafPNX8RMztfMumyS3U8o3GFNeyEdWRXHaG6gJ3JbQR6aNLcuogAN72gkKSuuwqhG6gJXGFQDHKH",
  "key12": "47RA11hnKmMySa6661N2oXcp179RTkZb4GRZBvF7LnwntwoBatX6Q7HgragzaQ9KtJrra6CYnWkJ6hDFSRUx9PwN",
  "key13": "3xFtizn2QKR2CFSHMok6nPuLkwc3VLKQWYGtqt5yFR7qCtTYE2sQiDyWUUcm4YW2MUbWSYyPJHTDv2AQK1j6ZGZP",
  "key14": "5ycGfzUXFNzaZzzQ35P5XysaoUB9D2D5HCqVFYNXewePz2E2F43c1SFHnrUr34F72zuUKAJLuZUMhVkoXF7HTPQp",
  "key15": "45jnDga7YFXyKbk6nXcXesp5RfzXakPeahKv4yr3TrRDLGsLFCEcHR5ZiA4BKKUo8FvAushjk8Mry7kvpVT1cdN7",
  "key16": "4DwmhoRmkK9qQwgQbSm7WVqN99nAdoku4TvbMRedGNQVFDABE7z3cbvWFAyx49VDCWz5TCjBPE62nqfFwgfpmRjg",
  "key17": "67YGvgjmPrDrWPwZWgsRTFbZqktcosQtrWSBbCKbKeFSfEdhj5Y4apq4jYscvLdMDcTriQfwGUJjA69TB5zz9Hsk",
  "key18": "k97FXNjkBdjGdLeM233BxWDYiY7FAYJNeZhapGsfTG4vzuHJEqZwLCTCBWbsCgfwJwPhsJBggqp5JcSoFAAVmEC",
  "key19": "5C6P1GRwCHdSf3oCNuFHSj5CGpHt8jh2qScSgHr8PsXxdz7cauP3pSqtj3gGrfRF76PEKzS1m7Rk8GsXKB9b8K5u",
  "key20": "A9d9bcJ1mXY6oYVDkGLMPsGhENeyg7iHbgAq4hhgHHGzz12Wq8bnuChoixAMUcEPKkEVCTt4GpfjJCjEd4vzpdB",
  "key21": "5CMWYS2YLjDTiLiAP9QcjTzHmENHd1vrDsS686a3gQrH6wvikg2nmdKeJ9jK5j17o3qDHkmpesTWqjsUa63f8NeJ",
  "key22": "4SGWC1Mt9HkygbQysbW4GFrThUukpf3VHWv668MReq2Lev9FxuaWZyH38n2kEQMKXd4zQPZSYTtXVTCLfMQqUaeP",
  "key23": "6kKnA6eJSCYvQcea5QbuSX7sHfvjTVC2gNA8HVzWrJtnLpsxUH9GbDBJC1LiKFihYeX1LW8GvJmwATGdTnuhxgu",
  "key24": "5DykWJPuvxkgpMUWVdSrADjiBBoTP11a41YgJ4dfwe53cnqwShWi3k5BFhfNGSt5PPuwYpYA7qtibBQ6W1pj4DhR"
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
