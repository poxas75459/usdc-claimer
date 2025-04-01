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
    "4FhZiKTGJuVmLhDmkDd8XZCfnZ2btBbPEixbFBQzsh34biYYC8douy8DugcQYzFuUmLsvKw3v3jqM3fPAsJebG9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4itBuxRfrDBQPycHXwDp8gyAb15YWCSygMBHjL5HSzyrAh5QrM7R5Z9iAGAnNiYKAKGHDhPwQnC1cK7xu2a4rPuJ",
  "key1": "63yRc5oTvUjTwHxYwLJHbMEQ3YBdVfegNq7zFAYEG2RRoPaiX22VNETzfdCoUSsQvS4P3TKeqTpFVb5C5y7iWmbj",
  "key2": "2k6FnDQkZtMApYUSJvWrcdTEATneycyS6MaCNCJCk8HP539YHwxukLHt6wEEjCzSacaVCPBQti2PovKZGyxmpMZr",
  "key3": "5ezdsckTCC5WYnbpU622ue8xs7SU2UkwxYyR5H16bQ8X43ZTBERNN1apBs68pXq4QLTEKkVgWMtVyeQQ7SpFevyZ",
  "key4": "3ayrc2Vjrg3L9GSNwj5QTrntDjPVvnuNZR8UhiuCgrMjriAfcDjggeuBSXPWn6LjvzHgaYPFqaG29cPrPBwdbG1r",
  "key5": "HLQLGj9rFotKLjD9TMSWht6f1eYdHWqswEhEwAgr6NSuyrNWC6M2Eu1vMsSM7RhTMFsHhj78g3ARfchDYV5uDtE",
  "key6": "TvPkx525dbEoVJUbix1Ds6LjvitptfgeSgXMPcG2BK6WDqH4Wfzuow5iozZok4a92wFrcFNu4CCnxhnLuP5uA7Q",
  "key7": "42nSxz8Ydvu1Sx4h9RyfHzcyUWbeNKVR3awnNbWMoVoJ6RVf39PrcEPFBMo1YBkf6nhdr3HqVGv38A5n1PqgDagL",
  "key8": "5iLEAWgXUkNHVL7aQhXnGVAgA4pZf6bAUDKxBk9LXJyDsRQhPuEJjNoAA7cMUgUMJCUWFYFmDpmJNyFLcr3Eug6B",
  "key9": "5EoQjTU2soMhmy4KX6PGBpZ2nGJDEqcUhUaMjCjdc8BSNRbGVJ9hEMu52V4S4ZBEJmatP19Z3AAdyBMYe7e83i7z",
  "key10": "3vAwsS1QD5EDwUDkk4uPj1U6uPEoATyrupNdZ3wJ8KcB5TVaNzvDMS2tibQPLT817L49FtfkjmexVMhtc5eXvXJ8",
  "key11": "Yim2fjGx7Drsg9AoivTwTaL2yyjzWwNFxrHop3G9tqysswmu442ZA1a5VoXvzJboKdggbc9U6CEgX3q1kyNRJfA",
  "key12": "33YwoHdYhbpPLw5E5jR93FFsjWwTaXyTBizQaaPC7c6v6VFrrUXGHGhF3aGjER9dD8ijk9VfstUcvCcx8dHCpqcz",
  "key13": "k56t6G2Vs2UKPk5ebbebDYFh2BtuEW6mpLzNmJztxs4zSdYkupKtyQFkxaJUiHsha8s8FrJoWKvPfcK43xiBPZU",
  "key14": "3uuZCDTB5NDSrxjZpDhhHTujkReHg5GhqsazoReHfkf7sx2UVTUCHatdhid3ekSGtgT8e3M4mMNRdyCTQPDJ8gNT",
  "key15": "4V38ypdgbZPkrPhecnZezzLaW6Rv3oADm47MMf1Uit2VS1EXLDLNmBS2rDgukdVainHa8N97eCxvtAZiKXggYTex",
  "key16": "3DGA1DhR5mAYna3VFWhriUSrTqzn3NHno6snfMtC7JfeW9CQjMCXbXz7hRVgexqDUJZBJvXzHirmjv1yn5uYFde5",
  "key17": "31mgMPUsGBGcK9XbeGNxknwjBRMUAoaLVE9sYfCLQP3y1KFVvWXpFvJaHR4NUEgjrrZfv45oKnq1XUbDBBTLoyy9",
  "key18": "5hrwfLtosrk2MbNLHHKhTcK9rmz9buTUsZuKSJdLz5SUNdQTYBFgRur4csXxqUPXi9EphwddD5hamcNDmjBGnHf1",
  "key19": "5EtyRQM7HB3vgcKeAPPQFs5b2byW7WmKdQ2vB1jBKbP2rbjzzTSmRdudckDnbDhuFamZetdjnPUZ76H2R9fXLksi",
  "key20": "57HV4pcUxWC1hPtthh4g7vqbWgmtoV9nB93zQGxufANiL7WQ22kMPJGHWMGSWhrb9QhMx6GbjqUVBMKsGyvJuayH",
  "key21": "4MmNxwjem6ZPtGy81ygVW3MnXwuMN3WmT2CmuwPdsGXBdUWvZNugLBLePN3pGJWd7P3xeMFzh6NwxnzxUUkkrX4e",
  "key22": "5E1yXFxHyvCBK8WjqXF5KsvPw4RuwHWCjkfRmYWZt4kJ55xPwtcFXZszpuy82HrxXLwHwQqk1jSY9iRaV4iGNa9D",
  "key23": "44BVLvH4HDeBni4Yg3Tiw5SEWvL46ConRyhiGy6GUC84RTSSYGgKYVoseZPZPGERzT6qisLPQitf2Lct3AG4a9b2",
  "key24": "5kbHUgNHfs6PCu5WCU8pfyNcb5b9YSv362wTABmCMN1PkK4Bw5WPH4s1hq9b2XGW7BgqsfAh3GxY4nwWs1i6NWkS",
  "key25": "2LCGxCoyBm4tdLcE7rqxtkcqzB2zLbebu9BkGA8rxizZrXbwvu89gF65ajsVYWG2fapwykWo4LvsJNFQk8zXAsBc",
  "key26": "5cCy9igDw83rBvuzQAfkEEjTFxipzKhvPrQpaHfGrCpnLgheZFar1AuA9AbR2RaBuPdEfEDbPKatWQzTzd82GgfH"
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
