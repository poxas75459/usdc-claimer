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
    "3hGM7PaPF6a852uctXPRJciSySX7HRTuuGm9PYAGKpUiRfktt88NJU4BoNecvHnAtCobibnca4vE6dyjxiDecAgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49g1N6ZhET2Z3aWsnQfj6iSkSv9tUPfFviZAPBZYywhdBPoJzFKkJ9VrExJ6fY9uY5nFB6indKvJxgd2uapjYKNX",
  "key1": "5nquWhsyUDaAVhskmorY2HDJYBHeg13A4CKojxENRRKcGsKB2Ct7TZ2s5fbjm6U6rKaHfbcnc1JZk2fmj9eGjeA4",
  "key2": "4mFjqhsTxgYVvQRgYuYmGRHLtx1AeFQkQkZj1UcT9S8dmXeiWoNnetTg2QEpgus95inKcd8eDMZNXMkC5RNcXqTD",
  "key3": "WyGzJFjT1ajDno5zcqvyyD3HhfMrqLXj9b6tFCAWLQ7BV8vVhDaoGJkbdQEv8XdiaMAxwiuMSrCxdpFWL57Dabs",
  "key4": "4Fgcpyy7GkLUfBLo3iVeJ8iMod322PEyRCCge4SnpRUMvfs8QxawrsrC8dC2UTEvAYYFMvv7Xpf656Fvy31tbnBR",
  "key5": "62ZAujJTXJoeDdLktiDG6JXcckG9pyxw4gssbL4jp6PCrkVNZ8ss8weMFuvW1hafVuGcHXtcCpom5G4XJ8UurUwk",
  "key6": "2UhWTJoaexMEC4h8CDXQbGfU7MKKEyQn2G5F6gAALK33b3H2LBBwmwqU1Ce1CStEC9eabQqQGasZeV8nMqBUQj3C",
  "key7": "2SzCmSNHc5gKU3M2C43X24NbfYXoky4cZWw6Xu9QnPUSwx9ciQeYGDHJATpL9VuZidnyPFrfyN2xCY6SkgyX8D3w",
  "key8": "2xJ3vyn5G51NGynRorYx86tBYWWiVpr16jmBh95wQ1h7Fw3ikX8P3gaVmEU1Sti7TmNj841ZkRnQ9SGzdKpdAHQu",
  "key9": "2GHKSM8CuViUHmqwg3cJd6B4ifw2VuBpU27k44TBqwB1yGNp3Z9cX83nGVcvJcMGGNThNNUfZBxfHjTHBjNHgbtB",
  "key10": "2jfkJAMqpX5jrbm2DUtyKJvDQNJsg48G2BDN3PmSfYbaFnjM5qYts2i5NrgXKju9P6RHcDrMho14n8VyAKEVvxvN",
  "key11": "2KYNXUN9dAMZwQWSPs2n6oJZeUEUWwFeFHwgSjALsCx6azYutFTN1r3kBDBJFqJfb4Q9gb1iYQZL6ud7Lq1DkDEK",
  "key12": "dfMk8zctLsfWE5EWompijTUfEujwLXMBP3aENimWahAV3iTZazTT4xhV9vdwa8jh2twnsaVDkaG5p6uG9k2vT7e",
  "key13": "5drQq7rtRjuQy8xZJNnyVQEawX7X3juNJ3nCpoPxYc2H2JYbqbzMuHFruFFhYeJyzPv3WvNakSbMtQXFTpDVWHCy",
  "key14": "2nJW9GQBEY9sgunjkiAnYsaRWrPuJYryC4DWAgzykno6oKJKEqu58mr16tE2kv5tJ15C5j7rPTh6n8T3Q1Cy9roe",
  "key15": "52PqRXS3aEtLYW7MjmDRdm8Q3TLEwVR877UNiCY7vaWHSvkayvGwjM8zHpEcCAETvnqwszQaaAB3LDLpvkGk6in1",
  "key16": "42bZEUEvo5nKZ8xwLg1vL324eTMFabNtNanF1ovy8BxTMowcGTVGFuRe2kK3Y7mVAphJiZzB1y17gRjVqzRv4gdt",
  "key17": "6eiknF7KUigvA751xoxooZ9y2AvkoCyPqz641khyLdW6nyd35SQjL63SxunfZRVZfuHFfPkTsYD4w1h4LE76eBn",
  "key18": "gqn4JSpPBCgrXasFqWjxtPH58UTcLAEokTmwWBqeAnLjMBcFLQ3uWVyxiYREX2RLp2ec2r2HULbM8gm85WqYK5k",
  "key19": "3qaY5zP8Ar9NN4wqRMxo8DQkdy24ovR1qFBRk4XpnNriY9ud9ye1PYBXnwoUikjC2fmcoG9UhWmm2Wtv9nET6oH5",
  "key20": "488rfTquk1iABYVznC9m4Jmj48WfLZiDAgAY79VzzwzzZCT8hikwgmPsoJUuWnpo3ASAaWjNnNrw9sLqjV1r5sZD",
  "key21": "4c9MUd9LSUPtJUiq68ZTCvcKjjxLFM5kC9iFvwcC44YpB29hGmfsBpEdk4PHS2e92BcjB9EU7uLuDJq6SKJPVGGm",
  "key22": "24diTQ86CAiFfHHSKrRYEzBJAZLq52mv8yu2XUZPALFR4yXpiEk3df3ZshCgT2Zd4jSzF5SjhWCtPLjiZXP67BqG",
  "key23": "3UK3AsiaBD3XWrXCGTw3yWhkiQqUCcaoGawfcYsFZn49jiUWq442HpCD8qF1qQGDfLmRYwndYbhFqCcVRW2L4pp8",
  "key24": "3tTyccwznSCDg8UR4YoQHP4KadN3rwP2CQ39bLqkArRbLXqZbrkdw1tVTyjeD9nnKLKuPU3xuG4Vu1BiD3Uz1GHd",
  "key25": "346SHZDXE6BT9iY1rbc573yNXaDeGGgmcRMvn4nkE8wkw8w681TRzUaJnMRyLbnzbhQRp4ybMpj2CgNAVFJ3uF4U",
  "key26": "pKGQK4T2m2AHS5CLAtuSoJq7xCF351M66eQFbVDNiVMGkbAhpeZjMuL2EVKjkkxGsA7GX6tB8o2ftiSkcVnvumb",
  "key27": "iE3covPFb6zyLJJTX2CM9jNjKaVURrZAgftNsYzXPUnoZf2TxWrDuJioXdSMg6kdbJvykeTt3WJoRVAU7LkvvSn",
  "key28": "3MEsPGwXWn9krQZRteb8UTmRge6byHS8Gqz5gSEfGektHcdJA4w58Uv9p5U3giECh5pKxNSVoDasPo5j7esTqcCb",
  "key29": "2uKc9NVqE8R1j1PB4ztSdBVfDqAavZEGg7ZP2bA49KtriAdKrnoPUVk1sTPyDsetXeuLZ6m9Rjd7euaV71fqNzSw",
  "key30": "66U5AnMcEjxHoy466nN4ViXiBkE3Yd47sKVY7XJmBgP7YK1YkcVvxmSqYKTFk7Tmk2wsCDhgMVJ4ECVJVy2ti6BY"
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
