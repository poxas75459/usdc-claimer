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
    "ns1DiJFoHJ4YEd1f2WuoStYBmoP1qY6WSouDKWgaVZ2T7xGpRKHAjSGxUsMFPfr4BB6QC7F7trCYMqQL9jGkFjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TWJdY1sXh5diXe3p53JtozUfoSGd9rRGwp8v73wXEwVzgd1Us1iUSLFx6w1rLzPVVKcPCWp1Z7FFqPwHhUQMtmc",
  "key1": "KFLPg1m6LvekCeLX8dxYtPVsFpmYtotx2WojGC4FFy1X3vYiT8na5waBjWosLyb8WoRZg6mKsyqDneGoVbZ22Gv",
  "key2": "3dzahUSunLh6C3Zc7iCCzKCPiAu9SnzXouSGsDrx263oUXRYUdnobcxvE2ADgkiCT9wbdHsaxLUW6UtU2YNWwG8t",
  "key3": "4Hgf7nHo3WP39ye1SNu8baucBNagZ8FfusqyJ4Q3aV9yDeXsfG6yqRZDqWmQCDZ7NLwhPsKc3poKWuKSXz4V9Zdx",
  "key4": "4vSmzQP2xpa6MeqAj82Uyt9ZF8nPUjVu8P9SCVBhn4LTv1penhD8EhM1szzuvEi2XGYqxwSg7C2q2u1pqXh6jJ6w",
  "key5": "3DXw1D5CzUJ2XY9zihapHXbjWJsZsgzpXPe1XY4YKw3tvmjgvXeicZUqy62e15yZYPx43ZNURHbEpET4Z7SqLu1a",
  "key6": "4XtZXCwUtYBqUdR3XyMjKe9nqXYRaLXpbgJ81timLtQ5MqihN8UNH87nqLnv7WoMpTtZr6ByuwiGF4cvNDZiriwW",
  "key7": "3gD9CvP619dPDeL48RnksURo1uZUT3fky8B5FFRCsiW2fbpHEDjqceVtK7dXUB1f8XUDHzEhZe9eNxpuEDn4sAqy",
  "key8": "4A4Lb5ijspKmnsGJLb1AmLndjFRGPzUyGqwuRpke19cucK8hC42h2ecfU3rvgsFR4Px3yXHBepY3dML7bDA1Yqz",
  "key9": "4qbuu5dsF5fMHHHoRdjSnQyns1BSb1gWvSNkmzyvzT4VxXPRPR7y9KuJVpgdm52s7CSkNxQi5xbFS2fiqcMzfkZr",
  "key10": "5DouLv9oxVMj9STayYcGraRbHtJGYosBjKYTUoE9X7MGVz5JhYZwW2FiCm4T4CxH1xKmMS9u5WwbNJDTwQtkVcCA",
  "key11": "3gsEeiFSvYiq32cJxw483GxEHSqxsXt9vAfD4xCnCy4vPhaCRMU8ANLJEuLZCYnfonb3ccN8kMkFYukvbfebgQX2",
  "key12": "5dmcN1d5ANHSLweMUuEQ96z4iZeMTtxbLV1rJfcpiyZkBecQ4vfEoxZuaMpYMHZMT1h2V41FnGH2ZuLE5fE6v1fY",
  "key13": "4zpm5PSm3SKsdUfEcLZsdDQLC7q3Vup1hPDknEukkx826YM8sxCnuLg228diLk1xLgFKMK3yVxwoKZinmaVyg5Rd",
  "key14": "3v2czaL3fziSUDvyFpsjsJD8XFMPybrJDKwomKzbHSbP4G9skveR7bfe66JD4b2znn9ihmBxFWvFtUsnTvocThhJ",
  "key15": "2F5EfAbtngAPCGWvc7NcsgvZcG2oczd13mpJdZbth3fcMVymc7KQer67vFe7rx3M1rZYX76mEjBQ75USX23HLaCh",
  "key16": "mz5K7oS8FSUk9CtVo9k7UJnhpnfJi2hvbQwBDZV4GPhk6qE4Z6Ma7j4BBW5JHBFqaW5Lze7V7dYCiATUNhz1K7S",
  "key17": "4BWy88eWezowUw1PNF8uQpPhYcfbjce2goYUTrwGPyVWnwxPT5oMYrQLSnDD6BqB3hTJ78mUpdXuSQujDPudXV2j",
  "key18": "5mQTu6hdJwt12nDfjbAxMrNvumpN7p3VmYbcSsQQshUuYM3nWBywd4uFetXTwDhhzus8EqUovU6UUTLTTk4S2Ne8",
  "key19": "272EqRdFCeAoc8oGYEczZifdzh7kAVpgQ68zSaPsj3h8WKKrrgEwWt5u6Pcn8K1i5odZK5iWyijkE6pzuqQ4bKaV",
  "key20": "2SmyqgCh9xaSeyVdCk7kXRE9uF9g8a3XkUYhkJxZvAkkaazwqXViBMiD2W1c9HsjPn3u6NZ83aHhibz892W4iQ6t",
  "key21": "NFbBGqnfC3fo6crHKukrGcJc2pMzpEE2Xxy5DMzVFyGMjYg1RFYuEVGRNFFyN5QcTGmCmNQij85UzkYp6mrbHJC",
  "key22": "dzhSVb7YZAaLjvRxFXioCP8THWFQWgreJGSUXTVZMnqdhxnwGSaCJo6c6dHjWjdUt9ram3JNsEzC69QgPknP92s",
  "key23": "4VUMCXvxwccCvyygVyKrdg9hr9xqZc3gXWtJgv8E2xfyAQ3RbwEi96HniK3fJ6HLsEiMgA1KdEHSNoTN1RcQTNW2",
  "key24": "5VNYBF2fuudxFub4yYP4vLvfWDVEnNsyq3K1TyPWnkTFWRGJ2mftCPBurbqQvHfvkgVXYCaF9cF9BsPQYrDxbcBv",
  "key25": "5uFVnQuWVnAX612dkKnVtgh6ZVY6FyKwo5M8HzsatPemQi5Sgp54wanmRxVsxNUMm2qoBZiaL9SXMdCvKxym1WMY",
  "key26": "9Rb6cvX2GzX272LDrBJqR5Mg9rMY22aUALWv8N6kdwhnHzpNLK6y77BXzHaFXFsxqMk7yCkcEZWkqk6iGp6Mcmp",
  "key27": "2jyfyPSWbuZKH2h8GJu1AxYj4HzDYYuEjyvykDoWLCFxeyrTnWTcAMuqi2oPFrcw6QTZJaEkVDQevWpmwE877FV",
  "key28": "zQHDnyYAJJZpKQGkrfbhYmtqHTW29XNoEtebXc6EP7C7DZ6atdZTYHRsZyjf3LPFSH7j2raXKXGnStJergD5ewQ",
  "key29": "Dvng9SVoBgdwEbDwHPyTa7qeLDqzYYqyjiJdcqHR2BHB2PU1ue8CZ3zLQntF3Poj1vD8voVYGFRxWhWhfE4pzgX"
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
