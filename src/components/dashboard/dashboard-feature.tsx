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
    "4oT6T7vwYsHWhohWRie9uaYNvhewKTi2GPSaVAzvZyU6zxxeWY8wFV1zh4fidViasZRw9yGfJGtE87amqBrX2WAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GvfoTetTzSqxa6cFepWVRstawsTR1A3BHfA8ahq1FTA6qEztfKksRKF6ygTeszKesGGKd34pfzpDLeGMnTFzgq7",
  "key1": "3cjnZCH49Fsz8x3JK7cZk8Kes83mtzZ8YifdfeSKv1Ld9LD3DZaXH1wkGHB95eKeuhoee7tgLVpjMq3QK39j9oWi",
  "key2": "3qNBye5vmFycyxWmyesAANZJBTYDEC9SXHAUi7gcmVG4seW1kALEDB5GwutSy5NeN33YFTt474Rp9rXRxNrbPsiR",
  "key3": "5GhFR5okkcXMvJ1LLnz2ot6r71c9Z1LbR33G768j11otmSKZ8X7xbdSigTnYZwZXsRTTx5DWrrjqkva98g9eXN9T",
  "key4": "66Tkp9JDn1co38rsSP9eGTqCUsddCbfxsD8oNuryECLuxVZrtCjXgAxCPDkch1iuk9g5hzUM9SJDPuHwFG3fXgMt",
  "key5": "4htMWJmUCaFMKRsPDqXJH1xodwo6FxpUAFX6MAPBLXzkjFoQ4Ezgf2Lv9auioVytDnnka5gySRWCTFHZiaApXBXx",
  "key6": "xjDEKC9mwbA5iidtPsmQLi4ESE8MQpP2g3T7cnKNnFgcEkzLxpAAo9nPJqYd67Aqjzb5PyGk5s2KNzX7vCPEejg",
  "key7": "32dkxKtmwsuLTpjzkoUJtpW4qaQg8XWAhJfEvaZc4UYzYdijb2vi1qKt225wtPMfhvtQdR7tpCiFVSbkVDurrckp",
  "key8": "2C8vVmwNRVGyM264oAc8QrEL22R4T1d4C9hfUK1FDizgAXnVvE9QKhHmUf45EsC9zEhMwV8k971DBGKjPmqqmMVX",
  "key9": "4vJtNq8HocWXVkv6gx5jGYRJwM9wQTLUBLPRYdFyrKqDcvaGH6KXELsmMMzbUvvftrNj9thmZpoGkfCxr2Ufo4XH",
  "key10": "3YB87uiXDzbjwvQTrmpvpEbVUGvQoFfUAJC4D7iD5uxvgf5MHj1pf8bCEmkwL2mbHE7qSLyJ8T6tiKeGzxt8vBAE",
  "key11": "5k2a92CAjee3RsVu7LsCDQhp8px8md6rYERzXAkMeywv4WeTV37y6dvo58WCH6ARVLVDdJmAqR8UdLw5YcaC7NUK",
  "key12": "zi7PZTgz3FSA5tpNuwi2SzjQZFZKecDnv9MNc9VG3pJjB82ffZFK7MZFCqhTJZqY9x66JYG5E7yngP7p9QSSrNv",
  "key13": "5KjJwGQh5BaPntM2wkGHo2K3D2GJGL1e8V9N2jzWURgVb3YpACTb69jUTeB5sTvdniN7e5SaJXqdREg7m1dP2hvT",
  "key14": "4iBer7W2T7oA42YqBYADyN399u5wE4kwjXpf8Cto52FHDFXpCJtfXjSzx9PmsYEzm8Gnd9Ko3WA5tYPSw7bXJLE2",
  "key15": "4z1GGtHUf8Viv2xm4kjqAh6YyTN9UJMGA3wGp4oEt57yASvXxqqV69jWZ3Xkqnf1B3XrGxbTGKkHYxCuSwQ6g36C",
  "key16": "2nm4ic8c8ADZfJFU14SntUVAnB6tB5iLEs11fDpWQQAfTwrZt2auuPoJjUbgjDwGBeqHwvKcBqpyGGL4csSJR7uC",
  "key17": "579xr9hu5addZ31SShYtvEs29CZV47c2Zw4JEaRgxED1cDqCPS32bqEdEJE4BMnExyYBtGir4LT7y7p2XyG1pAYw",
  "key18": "4Vv2u3hxzqDw56BEjGUBMEcQqWaBVZAqRYYs5NRxQwBEfFY3XyfydTFD9NwQRS5XotNacXZ18QsY7XhWBVjxnquW",
  "key19": "3mnH3rY8z3AAQTDU2q3bEXpGPDEXsj2LULbxgNuDEgz3ZRgFZCL86YeH9WHJqAp665mQhy5vMoGfRFPzAQ5d8KmT",
  "key20": "USJCgaaYiAXXQL4ESDqH7F2Xz9CPCSErftV4vzdVQPDx5sG4kxuHCmvMt9nMmHkoqVSZX7uQSsx5GUMWUrrKqsk",
  "key21": "4SBgqJhYERPcGxQrP6shCXJNznXRRPsXJjwe4JAmg2m72umexU4HNLVNiwWMt1AozfRSBMFyuPKVkySZxcQmKtSM",
  "key22": "5ASXvQbXG8pKKpjSJSHQNqYc3aTRefPVe229zY6BKtDTJhrZaWEx3GzARmVnk42aUoArYe6FUDuTehH4ik9Br77g",
  "key23": "3LJuV42K4c3Rpw9EJWrBkxAwGKbLSD1ewjeX9BZEeji3FZVhzbNpUkShFYzPSjHfYPtAkj5xxBL88fnLSJSa447b",
  "key24": "3HcWW1BcbSvNPuG152kanzjNebe8iVQhYvnuaQB1wN3it7gWWPgykcNKRn4xvjuPkyjGepzNWnMmjJRmTnNCTr74",
  "key25": "2hqv8MGgiP2ZMj97LLHM2Sg3E66RtF7BktsveJP4wNg9thqRvY7mwUxavdUJsAigxHxXMpSCJZsuZsCQR2cWsL4x",
  "key26": "4hvS9YyWvCwQwmjht1cNyNjroPg4SCJrKrw76F2SZ92tdBNPszCWbXHWeP2ES54yssSHyrNwe1tRRGUCEaDD43Hb",
  "key27": "j54kmtj8a8TjCyq8GVqtXDDDe5hdRziuLqtGyXqAu3aaFHuzhgNdUK3BJsZ7zdjhodkQ8RThEEkEwTNcZ3EBbKg",
  "key28": "3Uh5FXsuW9hJbpT29eYpG4LdSU3XxmjppsfnoWEHLZo89mkESo6JHtu2XQjbwFzhUuxJCekcMLwQoGjFSDzyQkB9"
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
