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
    "5uryjh5CTxigLDWZC1UwwtboPcyRX7A3gK1KcEYCYAs3kGmDiEXaBnwbKbhYxLQhZWwPcE9tcCXLQQpyWuaG5zde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KjbfiFYPfFDdaea8FMtAMky1dbYgxFcGnmwR3hgozW7hiC9irKwPcTsQVfLH8z5R2mZ7kWiBkeGuoFhZ5QbRQfy",
  "key1": "yqvnYk1NzuoQZ3bTGdeTNiQ3AgnqeVqX6ahwHyvMxxzEcFDoRcry8tBncVbiavoHXMPZgPv3cuoDqmpNuwLpo89",
  "key2": "6184WGPns5GMYpUXU5X6G6H5PbdBD5Gqg1U6iQKJhTTL8m22RAkbghwFv8eDU2S8ZQ77cK9EAqQuz89s37Z2stY1",
  "key3": "3TYQjUzQ6d1vgGptQo68HuTQ3WWAH86JvrQ2m2aujdf1bncmqsBGtxvMeg1pp8MCpbqAo3YgWSLWbr4rs5KoviRc",
  "key4": "4Qxocgr6rsr27z3QU32tbWdsXGD85PEqp9V6kK2Sx2tD53Xvr1ds5Zw5yv4wZtjHg8GzbSjJ12k41dE9bN6vSVjg",
  "key5": "3X9b8s6bme2TUmXLXgFta1NapBVoNsScyb5uoWERhHk5d1Wvq4tXGD6b12Jpf5CNy9a1HFD821s14HHn8o7xuoAZ",
  "key6": "3QJDW54x8WqhKxsoZxWg6Wz18aTapSZMgmBYWf5XZRXrZ3KWvBBz9eduQdkfAjEBwwBTS8L2AmuvQXF3E3DoqZ8A",
  "key7": "58iKumiWzjEpMn8bE36qnntkc67KZXnVnktnbLqFrjuczZjzMCZGQ2NNKJ7MwvP9aVxBMJXsmJ4xEb2jxHTCSN2Y",
  "key8": "5djJnQM6i4V87iDpxZkADqT4j9mNpXnH1BBhocb5UCBY4iDuKuJxCBx4CmmsAfARdbDnYr1WyRcKZ8EXoRdc7ANQ",
  "key9": "tj8u3x3b2xH9MzFTWrD34U9wKWuzu6ZsfjHbDM3WYk9dJnuwWkCAqtNZjEtgFhjZ2BFUCWNFoyy1YVEVvaSQx4J",
  "key10": "QUjQH6JDj2vXDS4QBLYuwYc8DdrqHEmwwMuJo34e33n8jXqbihmm8TZ8W6t8S19FMhkqE8dxcoLhxprtnjRZTmS",
  "key11": "65DPCpv3anzGEHqGEbVAy2UAXHwpZYRe3JM7CK7hzd5oSmmBeWbp4U7H7qzPcksJjrmZU7e5QZ3WHw66AUZQ2CW3",
  "key12": "3Mtyx5fbPQGiqzSXHY8sCV4g5rF7Sb1o1EfALvGDdaGgC2BAwzgqdF98jTyrCJQ8X2Yy2HUVpGXU4sWwDNYpnTfX",
  "key13": "4kQrYqumCPbKt9tWu9mi5LpwYnQjkZYWn1URPHxh1Jjk591N81eLCxCjdvtYtxkGxkeCn9VQnVLhzqbMbA5e2csZ",
  "key14": "2zFujgvaJLff4zM7DMFaHPabh2PrZnwrwkmk8qAKL3KvU6SMaCypUBvtHUXpKhRZpqEDm1CWM5egZDmWnY3uTFeg",
  "key15": "49yX2T2dkYmuXpkJrRyFw6WPwdBGPpATdYgYS1PiWwGzBJ8wKD939dvNrpHDajszA8h9Suj4SwQdeRx319J4Y7wF",
  "key16": "34FShxyZ89fiJyp3hsHi7y5dKZ1DSjYTZq1BxXMeY2EfyCK6r6vinYRSGzpBSivC6JEvQRkjfjk66PJegU13WK6X",
  "key17": "44kDTpoWDovNhN9YnasdZrMvbR3PcXju6RbUgE7s2fYkKxjq46k84fx2gdUb8Ajre7re3NDf5anW4XvQRNBr37FG",
  "key18": "eAfPcBwTJuutLRCHZQiG5CECTnKtMqSPPTxGC3MJaGuoqRPQ7Eu6VJUMVa1H49DdVrQLjWHkHmoaw1NGqQvXji3",
  "key19": "sjpDjqLjyqub7qxnLptL6QppjHgkdPbEQZFYJtjSyype131JqQvzNJ4EQRGHxz2dvWczMnAZ4ptq3tuaNPgU2vd",
  "key20": "4E9rCkTjMH2SLouhRXrYxvgre6z5Wb3msbC5ZJLHKk45J5NwYF2PUkYSxGNbKCDSCE5mMfsAh2ASAGcvPquUGJPZ",
  "key21": "3F1WQbb4JQ4x4EK42kStQ11Ss55ZSE4WNkSk8a1S9JPZ1F9jaBw3i3WerWxLK8Lkf33kPmGfKYuEWvKd9fHqxu6y",
  "key22": "4HQiDW5C5JQX1o2Fq2qChaLP9LNcWWCtPxGNHmSwWqkuunWMHD5UmUxoRGK7eQGKsGoqUdrsVw3QUfLT3eK86QPu",
  "key23": "3Kb5NidSpKNMH9ZGmJhxqtBqyyqERXW1EDzoz3h21Vc3ywecAhbbeEuN5EnPnwG7AQUnAfAdE72yCy3KSPfZjHxT",
  "key24": "55yn2H7Zpr4cVE8uRyGYaj1rSAjFrvfHQE92txPe6WwW9g6xCbhztDgugFGHgCidJS29dfwaHzRX6G2xzdFfMfLx",
  "key25": "42F9GA8kbUP19vLiP2sagR3L1RqeewLe6AkFJHodUxR8u7UQ8LkPvNEnfc3zXuWYP861BfSpaxX7k1ymyR2GLLVG",
  "key26": "5fSNAyhGFBbC1ubbqHRgXzVJkYekh4tkjpJPPNBy6u28DEf5wDD8oXp3XmsoXqGNpB2tmWfYx1MBQQfCjSxUDsDx",
  "key27": "2Fs43brEqyqV76gY5rt8QAWUwgmVyi3Lsyx4K3ygcW1EQzrbGwnEAjWKWeQVZwwGJUQ9hLs4fd6MVQwe1T7iadUm",
  "key28": "ve5j8Ad5G87KXL561J3o5pSVLU8qGhCFpHwbxXSWZK53G3qoAzBhGTxFdBprxsM1GXjQAJYwHzjiQcwM4rX5cUr",
  "key29": "sbsCnugrX1vQtDvtbZ1JtSCzb7UpsszgG9idLFXVMycSE2nCt23oK42P3tBYvEvnr2K2E8dmnYfst6dCBszG1XW"
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
