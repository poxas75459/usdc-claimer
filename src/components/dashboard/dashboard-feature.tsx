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
    "2vfy7dwkD2idt9xAzfibc86LHwVPBhJRG5RRgrjgJhf6J4cP7aD8mEVgTkuS6b69JPhX2H2Xg4mT9VvV3qU84YrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rJvEMSrk4JN3Rb85cQdqeXwfQkKBgQfk8PjPJymW2VNVT54GehKa7EeJyqnsVU2EY4EUvn6eD4AgvM9nnCNspQJ",
  "key1": "5u2fGPhoAEtxyuDeWRkUDaRB4XCZJHZTrQDB4ebLmWiK4BhsYy3gLneY8MJiBAxC5VTamq4az3eWp4mWnB1erYUW",
  "key2": "3GQHCoP46bS5X3Sdp4AU9G4fLp4YnTG8JTSqGQfYyDiaccgZkLcLcMudKPGnBjNTVL2GEuBNCRcCBKi2ZmJJu5Aj",
  "key3": "UhUMFf7qRsFGLWakr43EcathathkiwkdRd5KAWZXaMmSxp1RxGqayKiYm7Vmk9BNfR9NNCkW5EtumgmTk28UvVD",
  "key4": "1JZjq6iLRsyWhF7oH14uY3e8ZgPoTLNJkc7hTAFsViSFwHWFTKrnU1Mra4RYFYANez5U3QposFSb978Yq9irEA3",
  "key5": "4vmYb8i3GdGES3WqGQkXPPJ56pa3SCvtH1NVJoPF7WBmRAG7AgXF4z64jdMLoYLhreAwNymXNSi2Vaz3E6oJ6LiE",
  "key6": "4LdWbyt5dBPv4qkSmmC2vUqR8o6KRe5zerar11ivmxBb5USL78sfYTtHKAjHnnHKrfUsz2YmcJ2pi11fGmVSfoHA",
  "key7": "5JeV69Q87xz8tBAh2RdFpJPVPucnjUE2Ai71xaqndpCh9WCc1kR79pFQcQrTPofTXHYBeY5Q91TtRDfLQfx92PyA",
  "key8": "SSNPVUExuvSXiDLsEp5nMPGiW1j7XX1ZuppATtTJMyKQoqubUS3AGq6VYLVn5FwfNt9KNeSy6uGB6WWMcPeaKrJ",
  "key9": "39SiDKuRnE2MWkTGKkVHGginQgrq2Nv88KABmN63jDDp1M6EW9UmzzNCcqYHh3aikyEbdx9RHpRHDcuPz6PxWbQy",
  "key10": "4188J9BmyebiuiTjB4eS1t7uodg8EA9rKrabeT865yocdGanbWAjj2qVwY4JV9JXGaAPoTugSebdXM5yMmbaMgCx",
  "key11": "a2mUr5hLYTjZFgy1Q5X5uqVwrFdJDHCn8AF3rSfY8HoALmgN82f5mZfJNZWL3qodxXN52A1X8Ttwtx29U5H9h9k",
  "key12": "3kGZUvDJPFyXLvwo76uLYZ4tJ8VbgwDZ1FZ9BbQE6hpAC252qzyKhEqQzYswhs4P5ZFTLjeHLcNbcH66oJSCfoZL",
  "key13": "2RceE1r2R5XByRJkStTcnGz8eg1EJdJyC4GRBzsybEH6GosDzDquoSdNBNGiqyNByBgpG5NgHPKUKCf8PpArnu2i",
  "key14": "rHTxS5L2VGWiRhDhsYZ6ayvgmGCi1hhZTb4tsxnfHcpDKfa6pJLSotiEdo9rGPyWzMULtSyGLchjpxNf1mDvgJW",
  "key15": "4213E5v8KC6RjxpWFb74wVZxWseJmQZchv3E8YVHp3VezPxfpWWk9xeZMEDAZLsr6YnWnXUSY9PzxszzfRNFZGg5",
  "key16": "5vqtJZ2rRFmoB1dnFm3kfJVRaCQwThVEx2p2ZA7DEUjGXVwCJ6XNFZX4Y7Pi63qLodzfZGC6n8pGUCySP1zQgHj1",
  "key17": "5Ay1HvvmQ8BrzpyMqbhPxRz2BE3NHGeR612mLVfmN7tQYRs5Hb4r8v2gNMRunFRsNfjod1yqJej2u4iyt5zkEjr6",
  "key18": "345LU43uwbXVqZyf27HYUNXuNfryz377XiQBtEeRF9LtiPFtPd5mZQr24T1FWRBzBwGLNPbZZktJfeZ39ff5RaCT",
  "key19": "23goraYMx4LWUXEQVLgL2vNHfQTrsnwD6pkBLrdxYVLL3DS9Tr16NeuRhc7jK3J9pbJ4hYdi3sRqtiyErqcxWKJr",
  "key20": "22gJTcZmsPUPgmmQ5hXofwbbTsqEVww2LtRR5AkuF7GnJXA54C8CKRFZBNxkuGEzinV5d4LcwT7cAygnVvvGuH3k",
  "key21": "2YsjVxcQVZHyqMtfyArq9NJQKvVV6GS2kGvFu3SJYb1fpSKm1WiQFJSdA9WimN5G1YBVgVRizFbwaK55bAt9vGZE",
  "key22": "ckoofuce6KYGNdDMQnSto82mo8jS7xxKyf3jaQ7qEQTi6bq82DEVgQihC92Qc4NFVpZjo7VSE3xqvvMsQNNLmka",
  "key23": "dE6paHke2om8845mGHUjs2k3SFAfgU1G9wW19aC43Q2cEtsBKt4XJB3vqDVfNMgKtHTbezofJgFWAjnzYwYNwh2",
  "key24": "47hvsyDNJF3jbNFMcb4KRHNis46zdNaHz81NZeaXpYthA1bMK1ztjYXGPfKM4XKJPmahAtJuMhop4n8uTY8sFEPh",
  "key25": "3Stk1YpPBHznJCqGeupByiV6mYh1Tp5xzgERJHsBQYznt9xNVfsUdvvRaLw7FSgm2dbW9oaJDwdrgGB4omU8JRte",
  "key26": "4gAjyLNa4Rvvz35S6yZAwXzn1wFMGwHfbxCFGYJjVtiLTsd6NNeZCiD8JQbo2PPnLf4ZJ7C7kQsjVcBx3rjtLvrE",
  "key27": "4tGkYosREAir1wwDzs7spQyDzWa1pUkx538xiwQypWKDHhLGBeCaYd3fkJaT4iM2iXwyXaZiRMrZAteAvNDbrF5p",
  "key28": "Q8sYxicsF4dmY1QcaZ5RwMXGcyK1Z6yf97LNAJc4NXKymuQeDyVZfrkwZu776nb2KPdMxGhKD9Ukgf3UTpn2CKk",
  "key29": "ZqsFH2sxnsikpVhWJx1zjVYsZRf5MuhNw9g5YgSL1vAXkWvS71R2RqWaor21ScWW1ooj87aAQw53uGuN7MxHgBt"
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
