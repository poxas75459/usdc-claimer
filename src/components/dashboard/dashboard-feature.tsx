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
    "4F2QCZzb3Ae48UjcxVb9JU1AcNfdfvAEgsE6FujdiRwzzihs71cZkLzVzPFuoX9ZLyhTnaWwKYcz2YcK9cVehgCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LnvHNBRKcm6hhushegK85y8mqiCRwaMxobNoQF4pt7hmzshzvqaYme4WtJUwFLcxrEZmqnLvn9UknwbfPuQvoYE",
  "key1": "4FJNVAAuuYztai98saTAaWB9iN1JZzgbVuDPp1tpQ74LHPFE8DcuWsH1M8kbTpbjsnwGi75Hz59BddQngU5DRfBh",
  "key2": "3sTTkPzVKhts6zGSCcCqfQyuDPGhXW5Rw4xX8DHYqKhndarkHhq2RP6WFLhEF2ocb32iwKkM9yncsHkMxWh3AUNk",
  "key3": "4U6C77YDzi5mKPKxGUtD1iJ3Sag1Xu9ZcHxGqr6cvwnmmSnd4NhiggRqfaCdTaZ1hwSzDpDifKtTdjeoRWG3QU6w",
  "key4": "4LL5GE4TVaEEFowWpT2G2LU5UzAJFQDEG5zPK49FmD6yKiwKW8MZWbTjKKPUqQVkERL3LdPXiepyXjSzzzoegS4r",
  "key5": "4pj8KEDiwYPUFtQHp1ETBme2eAQX2t52nLrMnJfbfpozFEzpbgcnGwisQyhSeHjJEuomvYENZq5sEDweh5L46EUw",
  "key6": "4FfPfR9JpE6g8rL6YEjKUGd7yXUid8HaTcSeMfB8d8Z7X7oKxmQfxpEpsad5a29c7ekis33ZbKAbPy62FNck3wUw",
  "key7": "49JVfwmva3T5x2MZnqn62HhC9XoFwU4NV1jLQx9fzve1dsiZC6mH7hVcH8TzLMBSaQJ8zRENKxs597TgE2X89JEB",
  "key8": "39E4TgAWU9TSHuiBFvx9RjnKV8bbqSEf72Ptjoq8zJp3bJ1FDgRXQsRtu3UbQt2KUbkrucA6eBA69q6MWS2BDAgP",
  "key9": "2rXneNZaSeHMhuoo2uugA9vmgi2DTXNAMGMbnLsViNrkXjoEsGCJSAMZXfraM4VrCEG8brzJrURwcwGgwyoBdgEa",
  "key10": "4o1cUfTr7EPZG5zkTZMjcFWxzQ9KU6RUc7ksiWLxJHSKJ4MQncFC9nvEtQedD1Zi2N2j3r4WUX2DKcBAw677Lw9Y",
  "key11": "5fJ296dB8VeC2tewhREYkLrdzZced2DPyK322gR4qAXjYDVprmXotxiDboPM4Ptebt23fFpApPYxkfbgeBZpdhZy",
  "key12": "44ctEpX5t51WihVcP8dp7Cy8Ajc7HrQdt3n1kcGDhvmxpaEeJDhvTdU3ccLU7oSpPBkkLg44YLTAuz4Y2ADQ59xo",
  "key13": "3zt7saciWeU5E6iTmx9NLuUEspxWwxDkYdxRj66ck9FVH929t6tBnHPSQAiuySVbAmz8Pc1MNJJ5bPPWSXmU1KKR",
  "key14": "4SfHE66u5ALPNJHfxzBiQJ2U3H98bkW6XJAPmtEphbHrHxkfcjHUAB9BsxU6jA9rXAKLpsD2sYUozrm6xaai1cDL",
  "key15": "2ohHvoviwKpnrZ1CKjfMy2qacpaeYuMQ4YWbp2Bzn94C4RhDkULBHejUyK17emp4zbBstu1CBZNnmZzWTawL5N93",
  "key16": "53bceqW3eC9BDkEzhLLpq9NbZ7qMZcGMzF6VXGmsXSmv4ChgszwxHWpqQFLjww8F1GW4XhqjkyyJvHn5GYSEmkZQ",
  "key17": "kjpwDmMWA496KoLTxc7aZNC6w6TreB4thKi27xNhJDqohD8H7cGeJiGM2xRjmvbziKso8Ur1THoNR1zTDZUAMrT",
  "key18": "UPDjGnEyxEgK6wPe2wjDiuabG59PvvGy3u7R3AbM7vi1vDqogNbxAagUHazpWgAP5Ecpj9wsC2DhQSHty1hLKcD",
  "key19": "4o2vYkM2kpdAhAM8sFDdxRu1RmaVbLjVQiwWmEVZwGtde7tu7HUGQQq43n1SmKR9y9cFy8EHMxUK6BQEQQ7KfmFR",
  "key20": "45VEmTyyJcjqpXGKiAjW6EUDrvBQ4w9XrLsZxWmv1mmpke7QLeNfrdi94tfKBtRgKeSB913Dd7xPyK7gScLUVhgr",
  "key21": "4knaoM7eFKJMiSMYK2Uh7dtaYuQcCczB2xhPm7B9KsYhntxA7MfyVF5j3V2PeKPovNJA8WU1qMnWqxWLiiR5RBFm",
  "key22": "3NEtmrw4G1omtmA1N4WWTRXHneFijhh5BSPcKX5Ecq9CqTNLgd4E1McN8gqCksiPviJXnHeQU3EPzTo5UtjQxTsB",
  "key23": "5TeLkhBJjRJrF6Ykwjp7G2548TLyzXPznockU2gNst1BGbDDjwYFhCWeWBkUYTKqbU3U3AupURTy1uYP5G3ZXYiP",
  "key24": "2WQhaf2EPobGDNSPpFqRjvDdC6xE8uy5aYdNUWYCe46s8Dyiy9naSHWsaYKNeDnd8MuL69Gi76UKdRUAgea4WT4C",
  "key25": "sfFhX3penUqSwjpKD6do8MmRyLtcDsCgxRAy8ANhRkEkF61XPk4rtUPuhBGZdi2qX1nkvHu8Qx7rxSXLghvQVc6",
  "key26": "42hoTU4LgnLxXEjniMosjX29fMrC7PSPrbqALxSCKjsbR7ERZRNybwBa5JNwTUX6f4m1eRkgX1YrTG85GWEehmrG",
  "key27": "5XDK1aHW1UDBp9VW33dPMEHe2zqe4GRfd4qyVxEwp5eknXcD6UdhkZwK6RNifCTdEK44utAvTAutMKoMHgVfknxh",
  "key28": "66g1SPf9XgqaooS6HGJ1rzi6B7bVkmEVHaDbER5eR8nmGNeiTQvKDVYfLzFwtcv1ho8it3mTttXJPxVdTaeWXvX3",
  "key29": "424s1My8upBpihU1gMRM6gssqLbXgjno2Ks7H7hQMaj7LhzUxtQRoRASdFEkepUTcbHsTkzLC2B6ybWW7HBPdPBX",
  "key30": "4yRjKbKYgiZXD3TFTwmaifKwfsXqxKbtpwWFkrimoFy3uiXzQLYvdRtQEzYhD6Txxv97viu2Arm29891JsTphagV",
  "key31": "36P8S9hKoc5nnz358zohGsvjbdW5ufoqk7jgs9zmqtxhgP5i3Rnp9U5qemsFDNpnkjkYia5x97QyuaK3FFdhL1Up",
  "key32": "3NjLrjRoudVPq6knHn5NQjKt3yP7sVgBVdsJ6Hzmbh28Tvn3XAxiHZwfqRx35QghfRs9hUmazKj17pNtbo2TPf6B",
  "key33": "s2XKARVfYpirBCZXNdoK5FbhpLWH2mCZV4y11TRxVfo8H35mM37XtqU7kLABPkGh3DAz7cour45942gJHcCXkCA",
  "key34": "2x3nC8CaiEHCJmgCyhWLqCBp7eE7bNn4wsiDFUjsJs4Vtv9HYpXRu6Yn7Si43yTuEw5kFuLxQVHjfrVUGJLbksRn",
  "key35": "27tVP1KZyCa4JoFmga5EwFXsA3qFQ7DUpPdjqCp4Xqy5n8TA1HPfXCTGAJgKDZyKd7E43Ng9RH9DWcERJfqHSHGa",
  "key36": "2FAuQNs7fgh4TrSS3rYbAqPj9fv1RzjnEhpNXkbve5bu6bysknmtxzzJLFehGkfiw8ox4xsxy29WcnjrmdXR42aT",
  "key37": "3ix1hkEEroCvQTQUB7K8fX4LgCDtCyktR7YSmjodZWukXFiHtN6cLzcNgDBDbM5W63wfWTDL3AcuwJbnFzXcLkfS"
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
