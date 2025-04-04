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
    "5vTGTEahvjjmVozVdV5LscyG6p1cSYR23sCKA2AUV7NhnxgG7W5fvzbXs5EmuZee5dLGRbRs96pGuQtEDcsFzcaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rEvV7SzKwHTh6g4qMZwKexqKpf7xJmepmpJEmuvjfgqrzvmrjbe99AeMxwgLkcgWEsx5uqSPizdEesdgjCZaqLs",
  "key1": "nbrwmzQez66rREvS6kEG95TLNdjvJGjDo9SQU8oUvA9RjYi1Ba8Wg6ZB1rXunztYkaHL2n8cp7oEwTnkejWgFye",
  "key2": "5buYufLhibVhfKwq9yJ8DwhJgNv9WWxTQxEtPff84PhXoTgYFkKSYDPnvWuCA159Qr5yarYJ3M51gbsg9yvf5ZSz",
  "key3": "3RpvhwzSJ2GnR9vkwe9g1HBxdwyfR2a6GMfRpuctVZ4PVWZEnV8ZSBJnzLfHLeTPUs68esKcBP9SgdnDDC6peZxs",
  "key4": "PhXp4wyL3qQJM3TsJACDpW3KF2cJxiJk8BQtB9jW68JbBqzS9rCnmkRGRBp1q1CYoKrfLcjHzhxbM5jFUqAkiDw",
  "key5": "5vdSvATRUkXPRQiHWme238w4dqMwH7Dt1QsX5Go8jd9HZKreGxwAfgU5ujJWsKaTDSkSWBqYKEAXjWyPn8dHop6",
  "key6": "5LwnY2nYVAoW8AABp9JFq6SxCXnj6PNi9144wxxc3Y2awfLo3hZ2vLStz1qBMFNxKmLVAi7AH3BtXSG6DozxaZx7",
  "key7": "3Mif11t8XmZe4mQH9Y4s6RAEp6rPNyj6Z6CFg8D28HDt3iaLdnqQdoq2fFYVLQwfsFVu37pnZat22MCGShb7Skjb",
  "key8": "5aKkDRauiaaAa949AVNDRdYaK2xNKfh6mv66tBV4ad2diHX73PP3iwr3g5woGyi995AW1KP1kgGeZJSGMWfPAXWn",
  "key9": "3xjZ31qo5YVpmhd5j6S7y5eBSzW1NXQ4X2HeXnTEz1csxKjLgc8kqV1rbXS67JbyvQW6JvDGCmz1A1XbJs9gckxu",
  "key10": "5mahPvYMvXHhMcbDUJrzpbkUHcwBxRN4HrtVNJJ8mfW5KSLEV3MLyqyrpcUaNxYPm7WMKHtEFd16tEDcEcL1o5ez",
  "key11": "3uSsiRqeRVg2QduYX3GB3EER4tRG5dAyX81TznNY51hJpKut3rxsfk6jR38SF899Jp4xu4DhtkEkHuvjoUHM6qsW",
  "key12": "2zLHtnzFYhgydrTtBUS1d2TzR8tKWF9c33hA7GDmJdSrYwq2LRUN7hwKojPzg95baLuTGxymT7gsRPx1Ac5QiA2H",
  "key13": "2m8S69XoD9thwxTGCNbxDX4YEb8R8aBBhzws7VyFVzoPaKA5oKy2MFE7rgftrt9ZeKy8kxjewr8RFVPgqUanJqNA",
  "key14": "2QTdUcWF15DaPrmZjzh1WxQGx1F6HkFnyuNggJpwS9NTf1yrPuCcjB1XiaAcXoUS6266yWGz8D3NkXP5r2WgsyPt",
  "key15": "5sbJ1cP5uYShTSq4UW72H1G9qUEkEVB1kTTJWpG7NjxH6B1uLap1HASn37ZPbAR8TEcVvgnVuqVc5NVXxeKQoi4i",
  "key16": "5w4PC542Q68VLKnpAquCs7k72ufCZKPbBtDcfXw7q9o6aqy58sKssv52S1xHrKpb8NUdzDZ4Z23eJC3NsshTdHGm",
  "key17": "3rHS9Rqur3WErtVkqevoSTnspKmJHeWwDKHLLMxzowYvfAf1UU6CuqPFbZKtFZ6xeF4G76NqpGddE3Xh2dR1qA6T",
  "key18": "3GAseNSjrYXByDH59NgN8tjcFLdzDzvCxW2kwnn8x6C1Swx1e1MxYvGqXPkC1D6sdL9ZoMVXA6qk78xU8dfa6hy",
  "key19": "miiiJjQGc479AMR7ZXoQ16Z3UiVuQLeKdaHKj76zFWi4YxTo2BG8T8LobFacwT38andKkbLTHV7u5dbNtvbj836",
  "key20": "2QMC6U5JpuVY1XpPbeHjiY82sPFUBSigU8Z8YJHPwbGwEizAu2szPH5sS5Vy9mw43eGeAmr6VAHnYMBWEm6a4DyK",
  "key21": "3Ca8BAzn1dRC2Ny54WuUsi4yfYuK6s77B6BH9u8Fony66b8iUw7bh9FcsF3Yk8iKwywDAgyEbjic4r8bwhEiuYSp",
  "key22": "3sCsz1WaQ3FZuTjx9EscEJehdK2TqS9hqC1avK8ybHG7A2ATtnJwWVcv1cwBVfRevxuZLF6wb9thgrhkuV9aVCCv",
  "key23": "4fsFGqxi9FmSMm9CNho8Ekm5CFeLGJPuA95Ms5kvgz21YijbrESS4zpriMgU7dbVTLwiSRyGCj9dKYVuKUPCeGyp",
  "key24": "3oMAvTB6Rk79RMrHmjamSE6GDGFMXrFiRPqaX6kSHScFeRik18MznG181N99oBFryHrYS4GmWw5ysvZeS7kTWUQ4",
  "key25": "5RtULYpLUoUNka7hc8fuxo6R7EtK4Aru6GsxMRCsAsUnqq83S8QdgjiJCneu4j5s74ZZobyRAMH91AK2Qv5DMBLr",
  "key26": "4uRb3zgvyP9FBmsskeNZkhZJ5DP7sHSs4F7H7GxwPjzJrU9eUYY2Vayi8Gw3QGGFHsG1uP4apaBy8Qn7WDiSsKZp"
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
