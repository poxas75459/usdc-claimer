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
    "639RysP8vzaGTdYHBhjX2LAQoyY3fU2xgrSqZGh79hNuX6Z8SG6Evnfv6ati7DUFRXZuesBAPZjV7JMTo1YDqnig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nb1AZY8igCai1HoBfTbYBhNkKbAq9wsbaTts1FeRq9zGqaTSy5U5utxGJXwBTNDWS4mm92h21W1Usc88hz9JKb9",
  "key1": "AcmA47agx1E3vzPbGv26WfWFKk3F3E7DyWVG5Hgj4WRKGbvenuYXoTWhkabskHxwzqqHL3QnBmxr6S2keko4FkV",
  "key2": "4N4gyJtERBemYrGaqczBQ6oXoPiBZi58yJ8iCAZaqRbev5XamEZ1mJpugR3U472T7F3UGNSjnGGLPrimBchbE2ry",
  "key3": "4ymv9EQ2YjCGhViUGt89E1Raab132wqjTBu8cTRYySG3AzLxXLaezA9qtHHnLHJ4q2mmeu2Nxarm1vxNsrESNS4e",
  "key4": "4iRabtPLuUAm2DBEpFUjRU4s1bp7QRYX7Qch4dVwBnhobs8dXmp2Dn1UYk3jLSm42vSw4gKpWLk3g8w7tfHGNwYn",
  "key5": "2HgSYN4JwxGA32XhFbJEddLUd5QTk3AtMyTYup2mmWvKQ4DmmKCmu7TZFx6RzF6YNKkvoKccHj7NAMTkmRY5sYaS",
  "key6": "5gKyPaFANtPg1wUz8Mk3iD3qmbXWmpPLtcTutwm3AUQzVSJz6wqJeAoHQCxn41BoAy5JdHQ2EXnhA2gUNeKtSJGV",
  "key7": "3upmpQtkWZjWZNmBtBac1vtPgSNrRB2ahCC3vr3F9EKwY5KUbqgNFLUVE7EkJ6PXMZvQs2bQd2fkVpgJ6qLQiDv3",
  "key8": "2CTd4Qt75Nr3wdC4FNStbFfmMtcGqAZvpfo2PaSEE93kUAHNAozh7fpGFcMg5kS1aaaDU9Q1HVY2DFQyUEj2vt6H",
  "key9": "67ZXQLrAHKLodxUmhp1MhsgfpkiKXFMn9m3e8KoKeCFV35kCujijuoPNGutNDDHXhkSJyxFFjGJm3uuQFQ2o1JZp",
  "key10": "2jDUEMLzvKSu4HLs4obokpwFDhx9ytVghWqRvXvb621TADyZEQeW8La1LL6XosFvfUr5mQJ6FhtCZu4wqUE67i8f",
  "key11": "Qj6acXTbDzifQWeCknadWmeGWPycy6j3YyAjYh8MrV9tfoxeVkxURAzsVK3Wis35bmYxUZKAsgppdrZSwZKFGRg",
  "key12": "5MPCeWNsHXrUq3DfX38yv1VPCky4jC5Dn11dds3JsYNM5ou9GX8kTkRzq7knq8bRv1a1KCdhgxV4qhu4BS8MrBLD",
  "key13": "tAtMwjm9BSmzGosjPszU8wkWtRG8BzNfUukymmgqsYXq3ZHXM17ZFuXopJ1hwgtiazRnuV36y1D97WeiddtQ9uF",
  "key14": "rW816Z6Towf8ixkUZUwpwJJNS3BB8aj75ypreNiBigXpeBZi3jFGXwY8GhUQTgdHFcHVJCu8uLwfonjbeJSwUbB",
  "key15": "29DeVd8ByiFfQQGymQmo12i2xqq7rHee5mA5LnEC4KZFzVVNpTWhuMEC36w2gGJPFaijBjNjWRQLSTtuoRE5ScCH",
  "key16": "4eHeTqf1LkxL2kZctakRHKbxSrqXFdV8JMM87MANBgeoKQW4xp6ALkKNVjDJ2Y4qnnxJrrGkJ1brePCMBzkckbaK",
  "key17": "3LVSz1vUPvEBLgrDWp6hzyrHo9AaR1JxLGS6JZTvEYcpwErGARyWHdU2SmTRXWkYAyE5F8GwYbZjKVoKt55Cz7dF",
  "key18": "5qpV9pPc2UtdNLZ2qYw1nMgxo48Tf7UyB1g3shJrvXbWJnWeZ4L456qnP2kxzTrZXju5PAwpvUZCSm1kBJXhRmqx",
  "key19": "2or8PrPVECRqDzMmSC6jawEoas6LSgeia85vZuTjJgs6BwScUF3NQrfRgwQ2g5S2kk1Q8GtBjVG2h2SKR48h4HXF",
  "key20": "emtKQNXsXVPNyEx1VDcu2d1R5nkniVg9VPBpVGoCzFS6npjJM8SKNyymbWTtQtDNz18ebQHmBYfPt7k7VZjXcn1",
  "key21": "5jWUfcNVLikHaDqBruESXD3pmWzibFyPFGqfGeck5N2XA4Ufzuqq7cv7AbUZK2TbvkV72xtgUjyQ5xFDWg9QHwsF",
  "key22": "53BNicD2yizve2YBJXK7s3V9rNhocxw5RYsG5ay1WVmqPdiKNF9sneHUipsVf3F8jQDcWTeWuSb8rav9EETchRUq",
  "key23": "5J1qGs5JfJyGar5yjWSryEbkjapbmPdG518yRZPbvwAbz6FGT8sJQU8LA2dwXP4no5miGNtAXu81q5JUBfNtQbji",
  "key24": "53L4jGXqYTLuojxSoiWHt9ko31VoDpEQ9Q7Br7jFfKNKBap7XLhFUT5GLgvv96yWX5ck5qboNvociiuKxXPhNdBW",
  "key25": "5MNApjLUq6xPzLp9bYjBVXV4VsWcr94Nur5K2eAi8uEY9A3bPrM1oXkPFTQhongASfiDbD2H18my5FaNLr3x3ng7",
  "key26": "KzVfqnr92xG1zL6yqGHjySaQoXctBP9S8qNwrzaTVFNArFHcU8LpVco6cTAWXWGyNMYcUNs6YKTzszzY3CSPaJP",
  "key27": "4QC1wJBNfy7nprmPbNLGAZJpScY5R58Uphyr9MLAUroks3WX83mQ1WxKU41gR1skQqC8xmVBWFMAS4jrsv3JkubE"
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
