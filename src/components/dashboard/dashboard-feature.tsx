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
    "5jzb42AXv8JW8g4QjhxpwjFNfeJ7t7uHqQsZH8axZNJSBVFzUu7wPLkyVUiWdRS4RuNmjoFVWmdnhR8GjP4Y8Piz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mJtvduVSbaceqZpwD9WXGjgdnSF3SpqqRkMfscDXhG92iAieoaVSUe5EpMKAev6i471QJNmb9ASKK7f8KPwVPug",
  "key1": "4ABFmN7PK4Htuo3TyTFbNuK36CjtJyRD5as4Eh1AgBxurHuZQUkkz1YaR1QrF872vS7N7sHySSR9FdPW3QfQo8BT",
  "key2": "586gpvXGPoL8QZtNjLjhfvLgv8n9361o6od3hq3NehjBmhyPBABbyWrM4EMXsZspgxdsoMbcN53HpNgVdYe8JRSb",
  "key3": "5xQxwvyGrV2k1aHS7TfTKbkmhqL2xS93S1oq64wdxCoPjpcbcsNPvSXuGsZNiboMWhRnm4RK1YRa6wUGGQKZiZzV",
  "key4": "2ndpRbgfXEB8MYZQ2JQfhvSJwciuNiNz4odhXgddWCTsmnRyCeNojoc5aY8zzuPV3aphnQ3PVALcsFqGKZfgrwhx",
  "key5": "4t2Zj7d7oUfhpynx6FrF6N6LiRxPp2G1sf6gjaQmrr9bfJtCDJSu8mQ4uZuGm6EokFLYpqYLHkMAhQgEcC7B5acP",
  "key6": "59za6qZpSZCkaTdWeCWi7pvPebi9GgXZWnfEJJ2HYLHCNVW6xnptopJw4uFJnoUCmaRLAbaU4M3ZtxLVQQZZze5E",
  "key7": "3JepVXhtTVNTGg3VSuuetVpaGS9W157Gw6Sd5aVdz6af6zARF32QEVNbcNnuGeLsKwca289WGSjWcc1t7WMFhAoB",
  "key8": "3DckcAXuxvSb2nvcBvLLsF7wEbTJaMvUpjxjCZ9K8gsvBT2uvVLtuptFTVv9NvGaqRTsQq6RvW7ozk5jsqwpHCRf",
  "key9": "bKGaLe9nMBkw2N7yuRMaUkLRmMnw83eQR6tbDd2J9KQbeSPRBTqkojYb3UarxCpFK951dm4uWxmKa6W4DzUaDf6",
  "key10": "5Qen3nDWreDU6gu5v8dQNStCtnjVUf33C19KW8fPrc7NknK8iwubzM29gUcuBTujp9AriM2buXCNrSTwph74W1GD",
  "key11": "5Av2ujbru2sCSmeLt17TbkFXmqsby9r4DKAMzVWtwF9WjEf4C7SjxdAMnPe3Nm5tCkk9uzhEfPTgQevQRSpSh97",
  "key12": "uYMRNc1bhRPvd6wGn54JCj6xuguzZeJgvegpsxWV5hpG9e2WtqK9qHKiTLziyXsMLpe6a1fHTMDnKE41kb5qz7h",
  "key13": "mJbAnYgm814n985KrhhHogjMs3CGcH21TuYLysxsN5X4cGg3LAN7W2Tb4YebjNf5mZwYe6XsxpJvNouVhcJTHum",
  "key14": "dBctCJBBVz9EBNPNTSVTLSL95G4Rz1MfWrB3mLVEudJbZMTpmCw8FBgiEPbgTmgA8EQ1PFPNZLVNZL56hBEAonQ",
  "key15": "3Kpz99JygYZS8F4heq78eU3F9wbNhuRVxRBsGvRnzT1r1GpQENznsHXr8EomsrSSZzHa7bBLmo2FLcJWrytsDtyQ",
  "key16": "2KMyEhSXQ7XxCBYiq1Lr42MUG1uQhSST2Jfp6UJGwE4UgSVFTGKcajoR68VqNzKWuvRGf62nc14Q9Nxo2J8oYXRu",
  "key17": "5RQNkzXXyjFLziNPfedAAEUMG94xWisFQeCKLBdGSGf3eg24rss6ZYTjBKN9gEai6znXu7jawidntmX25eQAuqoq",
  "key18": "4WE11oP29goJ5Si9jDEkt9XJb43rPDRGdfp5USWAk8qySHm23mKAUqqVwvoLcqyJdwKAXfmCgpefhHdErBmV9bg2",
  "key19": "MvXiHXvf3GXbB3LmLsxTENCkwQTnJMkFUo1MUdD896suWoTwxWwqRmQnYzGgQH6H5JCbp5t7DeTLG5fJDYTgf1X",
  "key20": "5gZvchYfCjx1wy8REpquAKkqnU3W62HgHe984SPLfb88YpNJKVj6hbw261D7oScBADiLgXZpuWJa8MrxkYhAYeg5",
  "key21": "TfJ6GBHg4yUiY8Aq1GcAKe4rfpWbuvM8vH4We7ik3yxQFwpjk3QjZ4A1ZtjA7534CxNyQwXUUPYthRJAqNcGiaz",
  "key22": "2nbravJikHjY222NHueewttACYrWu5j4Tz95w6hH1VGeipR5Rqx8Vr7qmgPkhoE3wSCLVBDVmHh91xuGnNr3wZkb",
  "key23": "2T1MCWD6zEfBJ4xKVoZZ6aU9phvv5PmnbVsGFvFXzEgpXGzdGgxTj3rjm2jfyLKDWPau7E1eWN9uUy1R3EMb5WCH",
  "key24": "3E2qenNi2odeeSiFen33HHsCzZ8TwvckpvzfDvFC6yoq9r5KaChPiiP8CdkYpJi7HJMkBdUfnAPHrxRFxSWKSvqX",
  "key25": "125FrAyYyVhqYnbCH3XCzzC16jz9DGqvT58Kds3im8bjmaxaSejcuteEiqr1wDTT7rhkdjkm6NHDzEUTE9bS9w3x",
  "key26": "2dsPBrH5sbwouiWBvBAi1zg6YKZuXbpgiihZPvqMS8yzfozJmJQjsr8n5FKMoxnKn6QVG5tq76mik1SpBEA8ky93",
  "key27": "59NyqkPNENH9JEB5C3oc4VdpRuP69CTdnpYrpZGdo1s5jhTCMfzUNcU7WksdmP5rA7ThMWKVa7KNqPVSrsh8eUrp",
  "key28": "5xjZMQU8L7WQVaHNrn76WWypLHRJCmBLpJKK2mpm3RRPT9RoJGP7o8rY8e9TreyBKG4M8ygNs1AicHLGhygPMKxN",
  "key29": "5UzUNzMNSurgWiouA3NWmjdApRTfS5ATo1xW7xCwrz1Lmi7GjDP2WexMHv2ZQ4uMJBrxUyXL32RcUAdaJVw4HxHt",
  "key30": "5PQkBmpwAXLuJqYkmj2MeuBppGniP6cgqPFaYA1zWARHrCx9QmX6acHnMD7Q94KxfyNTtTp9wG79paWAreRieYHc",
  "key31": "2br2YR7ywD2LYYEAMPaZ6wWr1dGdXtQaZUMuVpejPnZri9S9hSpgdMaLzVqhxmn4HAPzfiwHMMXaLvhUgEdsPinV",
  "key32": "21RcfFHuARt4fWqYbwvsAkrYYCp3AjpJpmYFAg1UtzCaqc3ZGexv6cwfs3EssusBvLADCmNXL3rG9GYbKJYdA29o",
  "key33": "4g5qufwcRuUoGeoXy4cWU8ckWLLb334NYppcbdWnT5upqX3APoFFT2rJMYBJCzhhSRWc7AvMNEnXLgqFS1QiGgow",
  "key34": "2cscDpGawrdc2Ci2bqpLdbw2zctsUibpyiWfbCiNy7Sof9rUNbXWCxTq3dAYbGRea9uD3SQPa3NYU8AybgNjjyNv",
  "key35": "iEzK7rknx7HtSeGYhpXebYxr5Tg8jX9HhMPRWvmNDidmAepR4R2EGmfkVaYZBLKBA4GuW8j3gD6ZLVLHTEZ27nQ",
  "key36": "52udfgBfgMJQUdmi5mJsV2Tnev9KyGC9wmS25L4m3gxEx6hgwi3n33YUAuHYwpJrMqiYS7qNpdgBZDVJQ7f4L997",
  "key37": "gX7t2ji1WuTHbaTFqQ2PESjLoJLtQM6h9h5SDJFTjfxe7GKJG3nCvuTYETmSQraFxvYYkMUkvxo1sCjybQ3hS2p",
  "key38": "2Jb68NPpdUSnsmA37CsbeHhKWmUozahdQ6wVSsVJCksMDfZfssZfcvKhub43mG6hG2PT1RJLaZnTtNJP3DthRvLT"
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
