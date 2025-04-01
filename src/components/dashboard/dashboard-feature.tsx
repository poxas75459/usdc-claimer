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
    "47ZaDC22s4UaAB8EVMT8GzQYq5AvnkmCD2xqP1WFsvkfcYxW9aGGqBRd2Dw2bksYJpxD2MCCn3cZZqaz8gTFmzDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ES1DSyWHuvNBqUMT4cp1PMnZpm6zrZqvgyQULYXffVfEGaZuxwCsEDCrpzXLttr7HsyyfDj3eB9BJdhv9k8NQy9",
  "key1": "65Wm3Y75pK3XT1MTzZwmQk85QSsDRLLYpziWrmLWb2Bd7b8DxGcE4ncJ9GYPXE4y6kkHHnt3LaeUaSfwoFjFPUZe",
  "key2": "2jeHA9vnSDcYGfb2LYC3aR1FfwcFkXdqhR4KFXtjQa2bdVfjBfmWhTmz3zpDgMTG5dxBS7ZvhmPeAS2TXVdrFZ2J",
  "key3": "45JGpWNW8boJwvfKcMpkEfBrqfp32ZvHzSPCMeY6bjfsvTaWZ9zXsfEmEzUQ1iv2XbaKNFBbznkUqqpZSZYmyA6x",
  "key4": "4FFkmwnoJjU68AraSSKHxX5zTxAJpcRDekHAfJmz8S2L3f4GMmTmnX4exGAsRrwE6p9cvFeBcMEADyhRX1pmmpwk",
  "key5": "67CeLzHaLerD8NQpZkQMougiCn8gw6bq6uU95fuKjNi68FRFaWnN2WACo1aB6C7pVk7TWkuXA7YsVt11BtMm5Eah",
  "key6": "2zMWD3oTDW7XuAaxNj1TgWjaJwd8MAZnun3S4TPo3eqJ7C22nkiKhtCJdeuonEM7DLDwrJkGfVHGxa3wN9pR6BRi",
  "key7": "5fCB3273T5yMt7QPQJwN6CTQwVVytWy1x8cjb75ygDXusSFFnnbmtLRwVjSvTBNMZJADZA47Ey5vK8MT4z18p4BJ",
  "key8": "2LqKcsApjK22ivriwMaYPJMBJCeZLs9RvXUt5MUMaJhDKrruJJewCpjrTcDpNpjez186Stb83929dgLQH81sBHbL",
  "key9": "qnqrY9oPLXenghQuziCJs9CbBfZt6Qdt4wqWQ1E7pSZdnJRfJ37zqamtJS5D2Ke8DJHyu6cgFmm48TjV4D4ZKWg",
  "key10": "2PLQDqtZbJ7iqebkg2LZtu7sLLLzvbC6m4UKzLLEGZ3axh6MRtiCLr42mxmR5gTB6tYQ1JCJ44mz4VN7XA3hp7pr",
  "key11": "25yF4tBx1ckPooeWif1ndGDbAdPG7iS68wsr5H6BHXmGC9KB1Y5qrtbnKLyJHVVNySHfQNbG6c68xwAxxJ5vr1SJ",
  "key12": "5yyonLEiVmA1ggHxfuCA6NfU9Hgsn1M2Et4Yw2TJAvPwxxeFcniGxvdPw7gTzm6YxamuiwJrgk9cZ4U929qAZPBn",
  "key13": "4avgADZ3amURUBkUWf75vnEAYMzQQvHz9LY7BFfyv51H19KgjzFijTDk91M7vqt7AeTCi6veBA581Np5SWSf18t9",
  "key14": "5MfNQJtembYcrd5xxyvd2s1wn7nPYu2YFFgeL8NTWyquntoZfXeUDpxfHzfeGHtPNzKNGdkmic9Hx8F5UMApgJg8",
  "key15": "4DQ7a67ixVobogAnwaFF3BFXeN5dGu6TFNtXQm4iHQCmk1BL4RYQT3kbhPabK5kMHqsJJckwPMRPEGfyVpdScoFL",
  "key16": "5WfTpRtV8eRpxmpBq2WtkNTjCZRMfwfzGmWDRptvbyUZYEPK9jM6XE1Ws1YHbrDiMzUcCAMUctp4S62E1ZAQcK6u",
  "key17": "2sxypKBXSUW9xfznpbauz2EDrtgPBqSj87yWd3vZxbvgNWgrcFeRZijvfzxyqX1bRMjkcsc5q5kYsXGTut6mbeQS",
  "key18": "3nZRK6sgAK63YQGbdSRRStmmDDNNXcaPQSek9CLBFL2aNLciWSiDekzt3Ayq5XMcEyMDh3jUnruvXPdjwg6nRue2",
  "key19": "gB3FrkhMnsUHcEQFXZkWy9dkHU9vu9TJjN1LoNtEbHSzkpWLKCySJvmbAeJzBwoXSobqzD2K114s7RbMpFnhV75",
  "key20": "4uKJTuE57WngC1boTyRzQpQfBGUB8AqjyXgx8xuHFoHNmniafXzT9ySnyXFE4xaQzRuBCTUhLSTYsw7wuHy39psV",
  "key21": "uUdwJ7NSH7onncaGHcwdC2zAX6dyTED7SwCqAghizgBbVgzBnscW81cbqRdvGxT8wNz5kyPQL6PNrcRww6JFYDJ",
  "key22": "3wzqBeznmUAGvS5gE273KEfxwa4Ea5caa23Cv6CtGmrxn83YbE4bXAJ33B4BcbRf4zeCE4vriAEt4iVRAGztH27e",
  "key23": "21GqdwQvVTugLava7xU78cEsm8mugDqq1WyWPQ7BRqy17qdMSjikobWt6Y38uYahvn2vnuiKJKeeYj1YHYpv4AA6",
  "key24": "5DP9oRu8b9Vt3n6HPKWK7r4mAMt6KSJ1NhVw7GmStWdyEZKzsWzB3iBwUjpLd2Z36gTStHdZbMXXqaotaK2kZJi8",
  "key25": "2WHY1CFREx3ra17zvw6Ykscefnmby7y4zzUJs2Aa14rZDQPF1NMts2AxMqU5uUPSoCJbqgChHn5s3tJXHwhpMiUk",
  "key26": "pUyLaUcXusPa2noTbqCHLqi483Sa4eoyhdJJfruPEqUUB1n6e2pCKzRpvn3UfpmrJ5WbeQ4USuvKgLeAkrg9tuc",
  "key27": "5MSezpCNafevS1pyYuxULtvoem7GKSgqH88pzZehMJrVw3peMAj9gU8PmuBUstAUVVXSpsHEWHN7CicUWWx6HkF2",
  "key28": "4aiYRp9nupqThzZRusyVbH7q9qpbs8iuETXtFNZzRYDNMiswfohVSEw9uLXhYAzzecASKadtzrWYc9k7t43ZYWww"
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
