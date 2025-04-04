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
    "23GVLxWQ6XpqkuqBvtry3din53N7b5KqRhxkdEG3xQ3yLquGoxn5K4DTev1LLJCYvLfG5EfqLWThaHQFSntgbaLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8gYYR5xf65g5CCjTsd9pt3ccyG7UayP8DvyrdwjPQWqQsdREJTAruqhGDR9EJjuS68iyf3kAaDgmjux7W1f3vsJ",
  "key1": "3ofPu7GiRNurg9qmG74SMTcU5qrcjGKXs9e5ZpUtBVs8MvWevcK1cn2tMmoZfv1mTResecDReLx7mWUTNaFqsDa3",
  "key2": "3QU4PVKYoUdvFnkESLW9EDbvdNqq8jFZGjEL5G1bJqsZA8ktezHrAKP2p6F2bhQxxLvDvKxkKNqHizGhkCsvNAuD",
  "key3": "5Tbs6hTUx3Tavnf7wUotCtxqco19pQYnY6oXjmRyi3FKujXrRpHZemp8TUNqt8ZzCiRUMno63vNW7s1ZyUU3ptdk",
  "key4": "49N48ipFCqQFqHHE7UpqKLu1hE6Lo7Jv8VTidr3ziMdTDcC1FXSbvjqvv85P61Zdkc3TnqCHHNiEarUUqtRDUiQy",
  "key5": "3XmzjRGnSZzEhpkisoZgQqST2jHTnhXx8bomR4rPnhPRicpRzUQ1yMxT3jSgm1xk2SxxtBmyxXAk6GHZtSNLY1mJ",
  "key6": "5fuv2VM5BrmruqYKn5UAc5bBUr4CEGmB4E855yUJruE4toKYXkouUZZW4XywQ3ZEFC5eLyKCrfeoTs3AUsihTYMt",
  "key7": "4CtBa8A8AuMaxTjTgpAvfa9Qns84wLfrXCSVELgfAndFHM1YbhQf2h7gGprLxtLDDJraMZhJz1K6j9ha6292Jryd",
  "key8": "5L5FvwF412XZchFAzUKUTAisdVkd5MZ17ghy1niJspr1r25Uqv8ynxANANpiydcoT9ZHX4B1Gat1GVDTcZEVUiCq",
  "key9": "5WqwhtQDkbCkBcRKNkZbXQB1JFLmHGzYKg22KHLKNpc3zbc2A7btPVM82NhXy699FQd6tVDULRTKbG2y3R9EDcH9",
  "key10": "5oEF25XbqdTsLcLbMchhuBQ2p3kZGMFz1GaRCe54J6mfbfdWpdEsk3KkPKbm8SVdmeVAZzSYG6JYuEB7XDREjdYV",
  "key11": "2Pg2BJcs3tirykM59gPYhbLR3sJyJur47VzqNv4gRoosgkUba9S6mxnu8hYMhnnhS2sytb6oNWjXYSYzxNkmE1cc",
  "key12": "57WwX7M4vDry66nioKNtXnE1Ef5eeEjf6qp7jPQnBZ2rEo14Eu3Auvy3Na37Y58xiYuTn4AVDE3YnYQJTBy45j32",
  "key13": "3L9BgKRTDYMoN3VAsLiHGScDCrWbAVayNKEe1F7BDgbEwA7TD5visFYmnQ8ed3FyD9JqfdT2bJfbqid8bvgghJCR",
  "key14": "kQKRcXWx1fQtZQC5M797wF5dJTL8KYHYB5EmbujYPdfupsVJ8T4NGVsunUTUpgF9ZGCm1DrK9fTf9HDW5w8XDqT",
  "key15": "3b1mnAc218Y7MEJ1ovZ5H5yRfmoAf6GngJ54xa2qk5gc5u8q6WtKGyQsM4p9n2awraPjYYLwEzkLCgC4qZw4kzYz",
  "key16": "5YP3hzT9QkFuBBSMsmECNgg8FTax4NAMDRpGvXcTNTFcCD9wjuQP9Eoj4BRA8LveDt93vYYsBFco4yYywgYGn7Gv",
  "key17": "4SgywWb4kg4cPzeo3m8z9xVBefmPggZuTknTA7pwcgxLqSgcR7HEq1qZAoYRczr3u5MeimLECRcXYFWdzWMa5ugB",
  "key18": "4982t2iApx6nTrr6JE3mnvtBG9QmuvLRvaunonn58Hy3uPwYCHodBsq5zQNrtYiaiCc1WSgQibRSSTgRLHt5gKWS",
  "key19": "EBBmPa4H4cd6FjcLVbsaiw33Y86Cd7DypcrZZtbDFUNFGKyNBoP4PVP3VbRSkj14sLws7xm6PTzypZqFVRB1nk9",
  "key20": "43Vw17SbRzdVMYjFTvka5yoa8nmkonXQ65UmxwFwkw4XoLfBsrN4ytBXW1Ax58zCHSe77Yxwc2cLgajccmj7aew6",
  "key21": "4RoKwgbJyFeBfaR129DpNnPXtisSfUkjCHoxWSeyEuJ6jajdofcUABudQfq4cTi4usSH8WwsB6H4LwZpPVmq6qsy",
  "key22": "3khMgfra67BHhDgF2jc89y5E24dEQSahYuztqFK8QmWqiWPaR7zXYwQKqEiJEvJusdc8a38NsvEHbs7keBmE5yuz",
  "key23": "3UtHNs8WGS7GCpztL1d2TVSMwfKdYWeSHZrHEX8Cgb9mR5xjQ1eSHyA2uiA1cLXPQR5H7iwyT1JYtNa22DZB1Mw2",
  "key24": "pP1mLRbUJfNtY3JgDyhDDX79zx1UM5Ze2KsgQ2rEcoAkDashpNrLS6gVe2eonqmkNGzMrJ4K3j5AP4Gx9AgZ1Ga",
  "key25": "2jCaGnVS4tyU2yHeXzkUBy8tZE1fREzGkeqeKp7F9U7GWCTXbSHCTMb6BLE4RWpVAmtsvH152gi6DbcufEn8GiyZ"
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
