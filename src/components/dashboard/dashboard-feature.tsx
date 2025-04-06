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
    "31TBxDDnhiRmsbdwdnS8h7RPH2VVpBkc31DkSnMeJk9oexF2szGx9kqvLitGnazqHU6XLkyLNP6dGvNQq7mvLZDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fi6i7qyE2easLRCoEvsa3b2JJD4hwobWKzejfMDbNoysZGwwvjaFcwhEGTppVzRiM8SPBbpQh7U86ro21ufAAUr",
  "key1": "2Gnk5eGr6co69SzQT67UPzwoyx3t9LdLCK5ssX2DgMW9JpT4fmvzq5fzNDx5YcxbuK69bSQgT1prwUiDqP91afEZ",
  "key2": "snuoEJgWtDhaAQssbcSBca5h8cqRuuZ61Juu5xV6unJwh334KMAFBDtinrG3UTsuk2UXoDVo4HtPYUVBs5Yh483",
  "key3": "5sDUnjcYmEJYqmVhn4hPd5wDbXPBbFMLnApNirfnNNm7y2m2o2GUCKMLJssmaTEsmNJp4SFBsFVNe6E3P2UEP5Hm",
  "key4": "2hcUq6A5na7ktUdDQWRKTnd49raG2LqcwtEee896C6meYXjfsC5FEn8Qt9M5NT11qzG1yuQrvx2JEt6qUxbqc2r5",
  "key5": "528ca9ynno3v31mn1hvhSroSx1QYWbdv9xjNvona3wDEBNGiE8j86kFPrujewNTgtAwrKEArQR7LyP6nDFvyiYKL",
  "key6": "5FMaA9buiYFr2MpLwDMFnJi4yymKuu4H1VWHcpXVQx9R4HvjupwqfdnSE5HmCEFaq4CUGFEoXzH3GAQpgkuFSMzj",
  "key7": "2ojbVB4evV3q8mwjv8csAHJYPp728NSLKk5VwZvfMCL6RnL4EzBa4fmeCoM54WsJszFUHVYDj3utg6c2FwBpNtuU",
  "key8": "ReVnbf9ufG6SXu9L5rdQpb8nRorbrArYAmmMAL15K3Y3YL16KzWhHNMNPPJEEa8Tf49MgTUvXkf6KE9EupbRLnf",
  "key9": "2PssyqcUB8vw2ce2iJwbfzWfVF2PapHMZyrHF3FLMAP4MgUXCuYgJ9Sc5LAesXwQQ78je4qfKHLQyEZTypGFwwSk",
  "key10": "5nsmbUPVvLmzoLsXjp6tRJD3J1jw9KxmxxRfQooXEDuHghkXqNX9H23xFd6TDc3Ehr7ue3oFLLJYwmFnGGKGkfvk",
  "key11": "U1LdXdB2rhro1EfpEos1r6stzXnW8pbGoBDgysqcLtZ5hS7jT7HZ9Q74hNet9z2LtQRKo5tgx6eKeTdqKRfkyrA",
  "key12": "HaSXTeJvto6ZtNdY1YCg4VxkAqmWL25oVqXbhyvzVbqd6BebpGxdpPtdLD2omXvjeuKTkyFDCPn9TdboE692za4",
  "key13": "K6iz4sQkubNVC4yQADmchyhVLULYMKbb88csQusRQiDvPPVf9TDkNmRBRoUoECfBHQwuxgAfypSC27uXNeSq3e6",
  "key14": "sCmBRwUSrSZNc4AYaFpaqkbdnNs7aUSwXEE2P6n7vguZmiMnuD2VPhSvZVUjhxT1twnG5YK4KPviWZiZtgtMLHJ",
  "key15": "4h12JBsXWCntsCG45aJDLPutnc7b2KbRHZ3GEJPaZXpX8y5BoSCzy78MLvZKvXrkvY9LmHbN4t6kZ4in3ue2K5fL",
  "key16": "4QAZR3bEvsJA97N4Thk5z2cpE7mSj8WJmDhumM6umepk55kxArTx53sMibKTeSGoV27rwKWDgKhf5XTVBSxisfWx",
  "key17": "3GpxqALq8288vwN5bCGkNYx9npT5DnJvm7YKF6pBvnKzLnUiZUdaJJs8cqa88iujWoyYg1HvPkSzaWQ3ekbquLKC",
  "key18": "3UrngbkxF57iuZ162AHi4FCpvNQehyqLHATUzedMBTJPMRixJX87sYnKNQwWzpev8JFpHqoeGi7HWT5Em1mUBVd6",
  "key19": "2gXrUuCNyid5e4nh3DsJTUUzrrDDqXcQ5RDa6imzP499UCyXdYLKZNRtHt6aCMwFgR8UEQ3mXYfKXNdNKBKj7ytJ",
  "key20": "4vjbmt148F5nZ7JmJKtkKmS2U2bzLVp84QLFpjbNxYUvhpS39xMZvFAsvuRYia9szQj8bz6aVTbNe2EVHXShecat",
  "key21": "C4DVQKZdFCTqEoXnhHseEu6QuswXuNovCHtCZzMYBqZViLLVqPEU67WtDn161Pa4mmsYdTGs3CAH3w9mjCXiMB5",
  "key22": "2UUhSSjsD9gJaGeQ3kqdqjy9RwhngpNBimVDkBqtB35xvxCRf1nfrDDtWcQfS3zjhAXoeNFx3pVxH5bJnBJcPiCf",
  "key23": "bVPDx1uuGHsNWyw8dtsxjq6aWXpyutyN6VVqRGeeGuEFzZz9wzNwvyDa9oJZU5ViDGq6UUFVRdm8pZKdU9K38hk",
  "key24": "3x9zcehh4h8mcBSbStNTtEhW6JwxVM7ZasXcZYjviPEqBmL8kaPwtpMkTPpvgcNFh2Zq8AionZ8YYzBrj1CNQVPq",
  "key25": "47TH9W1nATjJURHZHcEh8dgKZ5rEJAYDKNx4shEpEyzoQFbrtih6Ygb9q7qecNWp3BTUxbhoi2eJLYMsRqgzjYuF"
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
