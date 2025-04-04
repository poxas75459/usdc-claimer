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
    "4s7s1dGKhvZejZXntcDndAabm1pyTA4gYxBXUjYV8sMwhHvnFs4MFNi1rmUegYkAa1WJE2o2MXuXPo361NdoKfpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "324nAjRAEvtVj1aLpCShyJLNmU57F7Azz4jWuEiNEsYQcL7brPM7rKqcbaVUUb2DD6KhcsfvSByKr9krRJ5F6JTB",
  "key1": "b81zJJiHkrsxU2LYadEksL3mSrynRQjSgtUgwubeQNiyCkxKgSkHLkoDWghxuHaXBbVoDr2dUJtGGSKn7c2xKhF",
  "key2": "TiBqhXLq3uGFcXFGJMPAt46dGuPZWNDLVUihqjxPANSnxSpHYBsFE8u5RyGGpeDT5Te2vzrjQTuYmy2zMENuV4z",
  "key3": "4RxetG5gy1WfauJUWuv1WnPazQiWTmjA86VBWVygHySUXkkMskPcaWcQfXJNp553YZ6GXfkWP276a3GHm2XUEKc8",
  "key4": "PaFSq1SzJCuFAQTG3dirrKVwKKuXz9jg5cKfanUf11VS2gERh6wuBV2pek4ao1QzqtTzRXtZaayPi9ghZszAbPe",
  "key5": "kcGch5jTwYuygeLpLFwRydFmkRBb2aU462186YofJ4h7YesgMEom9yVarM48MSSEVZUw8VkRmQdDbWGby7LHfH9",
  "key6": "4ro6Ayn7vZwaeW4BMTZ552oQQmw3LWTiqKmStrcW3SubPypmErZUh9qxML27QrQ5RhHDMN45yQmYzwakcD9bZ3hb",
  "key7": "wZ9Us3aLx2GvjYDTA4TLkVNmtugPT6Bb4dQSmBbWZG53T7JtwYKdqWwhsNHAguJfYkB6jGoBouh4Jx3zjAS4qrZ",
  "key8": "5ZSYyeAsimrk4cgcjQs7xDoux3wfN4M3Nfy1NxqVGenMnhuxJ6T9woWnJdmPnMxhj3B1pSZ1CL9mou5XATEAs4PW",
  "key9": "4x1rTwQCdRY7iTz2Ux3hxEZAW3VByPFKpRWEjaqhjUNrM8VanWWWjKevpFmkFuPbcT55d6sZV8f7XWrctyeYXvtq",
  "key10": "bY6dRvLoaZStApydJGTLF8DwDCaGgdWEb8jP5U4SvDU1kCLAWqNDUKBbV4XrzgVS4XgiDw1daC5YrhR8D423jkD",
  "key11": "2g5UGN5JftaibcStF1LBYUo255BxBgAyWRnquXZtBrs9SsCc8LD3AzcuviqcdDtFW2ohdQ14Rsgq9zqZYRaaZPDD",
  "key12": "3LHN1EYphiD8s7D6siiJ3HXrMgbym3iJTqUcKVdYZDDDfiZKV4VRXUfeJoyE92BtUUJycCVX1b6JhSxngpSadCAC",
  "key13": "5SFMJQzaDfJQ5AAKUzsMrnkckMCDiyf5cgZqyjLrAb3K2AfnAMy8dSGTZtGe2mXxdPMCcJtBju48FC3FuaZRHLXJ",
  "key14": "X5KBs66gTAEzH1mGVS6jLtmbn7JLWQNgpeAWArqRqYbRQ6FgVVQrjUS4kgqj1V5E2GPY5Pm5S2Sck3zaqrssmiU",
  "key15": "ihUviYiPXHUZ43TrprTbyAcHrqML7Df378hvyvaSLiXMWKDoMueYPLWycS93C25rs6AhAzjk8iH7faAr8W7aCSR",
  "key16": "3ujVuEQ6PHVM4YhexsWRXdocQ6CUCd9QGDYHQzJp82KFsLivqDSaj2Ak9qoYNJgUqGdoM6JPZcuCdS364cYb9LJY",
  "key17": "9DeXUuu48E16KAQJM9Wz7Fff9Z5rWoTBC5vka76xZwLGjM2KCicSbYFLVtMYv63UaVM8z2tkUFNzi7u7Kad5QFq",
  "key18": "4hBTxnbgQqtJP4jvLYgPreUpZD5v6pUEuW4jDqfgCLAWnvMFKp1zK7aiVRhe6SapjvRD4c6aACg53Dn668K8xdoo",
  "key19": "eD6PXw59VMouxveri4bY6agHKpbQ2kwFd1ZwLMARn28QhNXF2x9B4DVXjgZksUcjmrD7BPH2W9Nq6A8f4AvMaWz",
  "key20": "53iWq7y3VxxFDsBZUvZXYMDi7M5bCP3PYH9FJa65qhVRmGp5DaYbk7Jff1aeqMuVUys18wM9cpXs1imkbGK5YS1J",
  "key21": "BmcuyAgTTmXFeVXkzsmCQ3oyXs3ryB8v4DaNdFExWJdmPjFdECmyYg3t3cAsDkeZrJHVbenXbL4e8JNeWeWsWzr",
  "key22": "3qLrbpMGmcNu9a9pJiQ33XXjX2PURtbzydoEcPPPPGkPgZMcWViEPDGKXcg8iJXbv5Af6XBnDhiQCCP5iquznCWe",
  "key23": "2xuPZ7TRsBw9PUXBkoFarX3K5Rm9rKurUM1htasNCuLE7MoKvWw8fqk9qwquntt2uJKmWtsiiYC2bwZhZaqizhWw",
  "key24": "2zndFE8YCSGxmi11seHE3ZDN42ipevSak1yHbxgcDsGs3pbmTy769BCb582w7g7PZDAvJzmotNdkWQDMLktaYjKB"
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
