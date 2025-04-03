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
    "22ui5hPJfjdMeASdJhDuriuzriP8BmniZ7NHtofxTpHkTCHWs24djNB5b15h3Vm9D5yVVyZtduuK6BSwB4vYFBs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G9BvQK99uAUkmqtN4q9eBTGeW4sG36KcUYHckeeTrd9B88YiRwyiXRCnBoQ8akkXZYB3mTYr9DoEDPoZKJzN1k3",
  "key1": "4ypg3Nvu7JzNNC2rUz65DjiTESmjvvj6S4cjcemidAo3Fun5beDzz1fZYRJZSWKH5pGW84dqbhKj53TVm7BCHh6o",
  "key2": "38iTjetGGsrHCKGQDL1qwFyqcanFVdXUWNqfeBfGdoVfuLuJyd8pjPLUGWQ9UdufPX1V6g7r8EfneKGh5yKkniAb",
  "key3": "5HjLLMBtNcKLRAYwQ7PU5curW49KNTo8ybctBvbR2ha2hXPzwPYEFaXNhiwVETmyFJPwo7C6UiBNjwpvVGwH7bZU",
  "key4": "5TiuqPWS28fxseQgrfNMMwpf6TF8jfS7EmXyHHJ8Kc2RTwWKobYzVjAMoBtDxaexao6SgFKE4exuNnzEjvg9ja2t",
  "key5": "4BFUWdLSDNFY8GCgm5GpDsHusTb7imv4b8tprKWNSAnkwoVvNLL4VDwB1q9amhPWk26mK62dNAxT2VYgfZjb3QoH",
  "key6": "sfAGK32XCVnELDYhmxZbsKYy9aHu6akRvKbnGF5k9GarBDmiPA3XDEB2eP71WqWGzEsthHd124EWa5MTFfQWPBx",
  "key7": "4bHfAxR9yd64z4QEx33XDNixVqVEQrZPn2wQNK1YvmYqt1bX24Kf736VNeBo5fv527YrSpnG41Uj7oJAvhz2LTqK",
  "key8": "5CbSHgdhoqtM3bvAnAXEAyjokM1qw1a1END92wuK19vaTjcR7eEP5jFYXemMsqCH3YLUQLi4bmEB8iompMw7P1qZ",
  "key9": "9NrEmHMXoSSei5cm3DQFpGGLYzmoXZBPr5LPAHsTtN9hfgbqgFLDKPpAoXA1werYKRXwXmZQFqgqbjySrq6XC7C",
  "key10": "2boRqKJy9iJS1wC2ZwjD1y5cjC1u2eKti3BHD3ExnB6cvABGthbrURU3YPsrYz7iKjR4gDx16BcfoBqvYZXXhXNm",
  "key11": "9EGF7roxcJq1gcmUUEGDgMJajbTem3oEdwGumW9KdCUNPaYUWugCKaz2y7WahHHurVMZCMQs98SVaAuCFaXU1fM",
  "key12": "2Wg8DdPUiLfcmk7BKkwVvX21rSWgCGziPFG4p7VfJH8CMEvEySvVCMo5j9WT8yTD2mFzLm2Uu1SXVkuWkh68MTEZ",
  "key13": "4EUnYs5gnUq97CWMYox1mhqMJipVfmWMhKPPzZAoU6j2WMMu7yoFW9amQqfekhcaHu3Z7bjxY8Qk3V6xjUm1zdgX",
  "key14": "5ut6UbHji5D1bPCvSypcBrpnKyeXWnNnfxHSR5Fvit1A7VbBax2Uov8pErbe8v9nnxfqfRu9RbQbQWTvkM1uCmo7",
  "key15": "27aj9yfaCXrf9Vh7xYSoEqKNc6srFqQuuFPQuMJajbXY6sHMeyFcug1TgivVUpgENaukJTj1SZ2dgyTHEumGS3BD",
  "key16": "wQHqMgFN8DQ6D5U9RvZCWw5R2dXtQsTaDP6RmRoFFsWdeXp3HxDjwhEW7DJ7Gs1Nabje4fHfFwdhWdjyB1zzFN2",
  "key17": "4wTas2njesp4Ei66oHbvivYznagiNZB6aUH6iM8J91CMK61QS7C3zDQWvX5VFMd8B2t8x1C7ciS9RQgYrX8jPqdn",
  "key18": "32t88V2LuBAzKZ1vuvSw3dCPtk1rRamKVdFQyGiXzJFkzVFWGDnHagD2jrN7ksxjdE5ndtnoEuZm2JRB4B2fKTqN",
  "key19": "3GQAM28uR9nEL7mUwRiJBsRxLKnwNUYNDxSBgaRSMiJW4HVu6srwRu2McUHnMjGviY2b7WTu3Lva8uQ7C53NsEXt",
  "key20": "3PK5vGCoDnTbSp61b2aS75VfxK7wX5Q2qXKLHbhNgoyN56wuSCmwWc9a3VdUTQexkSN2RVM3znDhdkAE7mCPGje1",
  "key21": "hZSd4aD1pffATdR1gXkK8Pfu9vWxggSV9uAjq1a8y6xA5eWwd2549tvfnzkPsNuy4PcQ6rU13HS2VFypRzPwqWU",
  "key22": "4dLjc4rZemF4hMDCuPjYctiHri5KscAGTpsJ8AdCCFFohhRK965PsbUhN4SADiFNy55HjPLLDzVYxcBUHo8Nv61P",
  "key23": "41mZmRndgA276isbLdJqQU5dnqqbZQiNoJHpqodtq13tuTTrqqxTiByidjF8PJ8NkQ3PRTmNE1GL9oLP7fRPVWS5",
  "key24": "45on5SB9czduminFR3pyQqxk7js8G7wFqtNnxHwtBDNJ1qAMouRJzo7VHqQxuYvtHdzfNYJXvzSj9215ncYYEtEH",
  "key25": "2qdmjEx4hskv3nvgv5rhcqjXjU19yqCqMqzrvqgytiXTpzrBHG3vot9tjgtfMVXiPCyP3XpJcYDuYdrFZGtfEEoM",
  "key26": "31XpXActk6RDkTzKVWSfzs7Z7iJXAXr5ZUg1LJgA6Wbw2ngmWbxH5ttUbWJCtybYcPpCwxW2h1GzLTkF3R42BWkp",
  "key27": "57SFNQSo1rgJZHgYWQnJrMLMYc9Md6sEpoykV92cMuUuhEeAwFZiNyWaNUvXSCJQURj72TMUKx6zNsuvrVWuQcnN",
  "key28": "3CSo4iQv2r4imiZmrE8yTMQi7TqVGFcwQHABzyFnRDHJoEW3QPp8cupKnonX5whJoZZhToDqNDdZbfy2VeT2y5f4",
  "key29": "43ks729267NGK6RR6qrTzf83d1aaaWVi5C9Pu1bx7TtyxLe6jobQhHRk82r5QQtyizH9mhsCeG1yRdyNC8Tfdhqe",
  "key30": "4bDF2k17QKNyqSYsqF76BVknnjmN8agqDofUCe8wTzQoxQMzZxxqJ3cSg5AGyRR4JgvNhKnwVQqhHwpuk1CDqH9n",
  "key31": "3jASZhqpWDuNFTgjFzdgtynTojbcoHGUeDZAGCu5v9QCGtTDryTFiJMp11y9zeXvVEW5hMJE3GrKPiwMzeWSN6JH",
  "key32": "4B6awpZRh4zSYHsDCKfakW2dNQAeE3w6gNEvnvuyxcRg1544y3TttkYrA6grhr3FGVh9NsWyToDCPjr9cpikgQxw",
  "key33": "4XNsCdQ7vJGrLDyMvmUDzn2cCKnkhn4CissVugqemWTzFRnpqHXxVhJqv4xbPSGmhbZnXLb4QAMSUVPwL76APcBL"
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
