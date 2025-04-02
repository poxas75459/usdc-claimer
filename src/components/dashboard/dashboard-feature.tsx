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
    "2yLDwfU3U4Bug71Bzt6ryg6MZWvg8JW8ZgxvtADNJ49L4P2aNHsN3dWzXRaH3JG4KPjAc2fdkjdJacEwZXjXk2qJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FkML3ZBGcfU9Zp6TzHQ9FJFXUJMhx8EfvwmYsniAegyAEJ1owcNXqXAPdC8Xx2P67nGnc6WAo1EJ1vTYF51RUgu",
  "key1": "5vFnC9o4erkheNSHjXJQvYZVxZGPKNmVhFQ7HBS3VjbXz621S7av1HQWhCkVBr4B4ceoMA4SeJuG43VmnmZj2UzE",
  "key2": "2EeMauPnpkaphhCwcgdrzgCfGztSGGx1nvLYRWcccdEhLfuujBArcR54JmMD2Kyybpkwo7boMhtcZyr9VTNmN9Vr",
  "key3": "3MkDsYcsrBnJzuQpapGMaAA9PQPu1bcudJ7wQ4jWD8sr5t8nEi8XKSTFZ3TLPCitK2fjKdvaZ6Li7vfA9P7QamJp",
  "key4": "sZRKNCgujanM9wLz8eerpjwdZnBsmarFKNGqeG8jADYePoqgDHdgRBzGDozEuq95Nn51AhsdokYtAeZF8oSj7qr",
  "key5": "4jkmuxCyZ6thJSPghznuBcgg7BGhNwzaxZfNepK4vFWCd1888DHs6ANW2bPaeVHfBQVHb1oXLYSfRSmNRP4H4Vqz",
  "key6": "59LamoCZ1G1mPPNQ8uJ6ET7DUbukdgJv4x1dNkq1BM3YDAVTSS4Udtk2g1STdDxJTg2thDXYQFG5AyBXAs64yoww",
  "key7": "B6tJHQVqqZMzZBCq91mXCqtp4jcMV7pyxhEueNqgCvD5yfppKPmBJmunFBvWtxNXx1ENxAjd2skTRJt2rQFv7gz",
  "key8": "5zFzPSugTi2SUVMZmXGiv31qFZa58dgRXbTdgreDNC7gZsxnKW717GkN2ULsaveLc4vWmumxjR2stuHxzeBmhe1G",
  "key9": "5MPaoycvKxvZ8AK6XHohoDJatYDmsbXdAvbokToKgozFRxVtuYL9fgNTfoGLjyuuStCYBEVDhMdPSZEVrx4wqMBe",
  "key10": "663Fh3g8aWWoWnyCc4RpXxnixSA15XxVsijSWu9Zbtdf7mSo2EsqVCmuDjLYx3Pgcxb3BNPpRGsKkVTd2rrg89d9",
  "key11": "2c4xrR7dZnTUGYJCVFA3XMaGSjpEZh5n4LMvbHDJyxh6NZLUbUmT8BLTZPAcnSiYg9wDSAG4HaxsDh4UK6qbbZt4",
  "key12": "5HU5GCGgMzj9wKbg6jPGdXZ7QF5mJCYPADrPR2RxMN2EozrbLYzXUn7NNt4LmLVW4jf8iohEU213aMCmzZgm9Jmv",
  "key13": "3rP1wBHppcRXNWswwsciuojGn3xC31NfNmhZof3zdHPkxafDG4gbcXNqAbomzcftWHxZNU2VEiDg7Qjz45qTWKXZ",
  "key14": "2Dq4pU6qD4QY6zwgZhDgsVxjnGR2utHCPaKHGsh8VqSePF61tBJdj7U31EVJa4Z1UafmE5cpjRSpCr1AHdA4dTi6",
  "key15": "22gKXydGejX8Z2XBaCM4q5YBbUpJpYpWrXvwEdcGafW4ZGnKTKwyVayoLhD1XYoSbFAm6gD366busJEShrK95GmL",
  "key16": "4DpEoocMPgZFymahMYiPuG5MqUk8WApEmzbYV6M3PwtD8qvPfuFqS2kTaG5Se7sBiqE1kbb5Vm7fFq2rsCrTfqPU",
  "key17": "66QTG4JJL6w1HoT5DVKtZkcArWJtaAYKKBbkihZWMeLp9MBgR2GKbHrtUcb2CMPsMwsKih7MseAtCLQJkfb2V8B2",
  "key18": "3UGN1agfLvTspyCJQW6dXcLywp9N7NPfXjLnC8u1snKMfD2rrDFp7K7soCrZTc2M4CWKgwt2MXEAe7tvrKuWNBRW",
  "key19": "5k3KfHQWPTmWcexMR4FUhNJGUbbsX9N7eBtuQp6axiAxSMbF1inXTMzBM8fGiZ8zbgFmEyZUqXEm7kRB8tCBVKhx",
  "key20": "ENjBvT3tD5eL3bijnK1T3E7cNuMkM18H6NLAsSbFXECT561oFPLaw1UCktajQPQLtMXz74Hgs5sXNRi5gdfEyyE",
  "key21": "2zJG3QiErjd2YqLHSB5UBkSP3Tcyzcih51f3ERP7xJ9CoJ49Wz3k6jS3QVXDLpCxJqVdVs42UvwZWGiWy9ugjiFh",
  "key22": "5xBcduAfad3yJMsaZAw4gZdRRDYUmiTVXfAk4rfSKwtP2WJCXbvGvC2MnTai6poEZvR335vy3942yBX7VvNcGMnb",
  "key23": "4UHkGzQABz5svcrKm719oFUkoXJSxzuPKKPDsWRRnRkTT5vA9J5x5CsRqE8vPf1AUVjxyH1LcKs97fgKXi5NeKgq",
  "key24": "3icCzrZYi12aRVRkQTBfA2VgP1K1DgNtV1FVS3xq54GRA13JQssWSPvriS7SwFGBc5sufM7xGnnEE19fUsEmGmjS",
  "key25": "3KH4SuJaLAztpmBTL3GM5fFVHChUePWw27wc8hpiM9uJkkkerNTCN5M8cqo2phRSJ6ceNVSc2JBxkni77ypFvVQ",
  "key26": "5s9bWGA6PWg8b61XUuhoHqMrWhiFpnemov2GRz5Rzudwn95ZAaS9UwZRyGQ267v69s7XcpQtVxwZ9FYPAUibhKiE",
  "key27": "2xCAJyauXriMVda2MwpMbYBnwzRFKtu4rLX79ERpoR8FAm1ueeqJTzYub7VSQyfsJP6ot4Vv4qd9sQ6Kv9D59YqV"
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
