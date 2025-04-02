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
    "4FFpfJedh7MnM4cYWEnJRUGr2fFLrGJEr5ShJgsFsZPXPohjdeSdEA7rFQkQ4aRG11P44kyzMNXRFEvTXaeBAsuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jonShUrJvAYe95vwfV13Z7y9VJvt8TPpHSB3b6dS2YaypfYVnz8Lutz9F4N9QnUndLjjhTurYFtAyyVrPYWJ7i6",
  "key1": "49udSYwWXafYJyuHmZNdutaxfw82tnUgLzJbRw5xF74surajCjZNWMp25qTsXrbaCEdrBuZPQmXgB2qpFjKoP8NN",
  "key2": "595FUioZv5W6jzSYMsp7swVA6ccjB8AupagNCaE1nFRGdnMSwxuQHyb7t5HTWXX7oTCd6wFFJfKm4PjTPcGdkDUi",
  "key3": "2QXqy94PALKP4cBbjrkCf1QYtfYWiqKyvbGEgdqzGq4K4Mum6RbUQyg885d6LN5mKxyeiKFZPVkiPgUcyhbQQgqY",
  "key4": "4WSzyRKh9UZx4X1YtA1hyZRD7jzTjssRY4FE96Gg69pFQzNWRkKBky2kJzPBEeh2M4JFBErVyhV73GgaiGEXW7Lt",
  "key5": "3nfschssYGtgZwNG85iiCUdVsKYwuSusQE1SFbZKqNBYYQr42j36CJL8dQf465JSxC8Ty8BhCwUSN6zxoJsaQgBn",
  "key6": "hC3dA2KExQXrH5aYaEx9SD2GkDvU6NfyvDcbubpNuVScRAv9hnFJmC527gyJFs3Gu4AYZJmgp3uqgZD7F1xDJch",
  "key7": "ApU9g4oAa1P3FhyMahPxuzv2a6TbyjA4mVaNeL7pNiefQW9uf3YkAUsBXxMhSM8YN1ciGW2WG5xW2S3EhSTuD9X",
  "key8": "5YcNG3FrAAL1hkKuMtzEb8Tg6THYpFvLbqsnz1b4uE9v7BmEMiqBU19nvNSuEQGUVwQ2ZXRHZAp7qpwpsYASBkyt",
  "key9": "4umgutjfBvJ1443ijVjfira5jRbQp9krwrKa48UaoHqCZnm818hg2hsxXKMmqW2f5kBSWSir6AF9FHdo9sricc4L",
  "key10": "5kxHZc9xNXy2PooASvKR3Jq4KoeXA3gcepU9z2YD1RwTcEwRi8919JgXcxFk4QUNfkeRB4opbc2LFHTLH6YHYMcm",
  "key11": "2333QgZKzqce5VjSFTHKw4EHMYzxMrwmh1viJjCKK1x4wnRqsveEYeqQMhZUWxjGjpQgo5ThcqBZp9zLkPQjgZUU",
  "key12": "XNFKcjuGucjttjfnCYQPxnax5gccELfCQDnNs6hP8WKbWaMC37groatZib38Z6jXAgDF9gHqsZ4TMNbZ6juxs5m",
  "key13": "3z9hSWuE8S545ZwornRZxhW7UEKMpUzrYWSkYC119E6426KW1kCB3dz8ob8BGyiS58EyUFiFcZeLJeCQYUjTBSzB",
  "key14": "gvTa8yaCuzUF66VJPMkp5KPdZCTbgSirLbLyqjikUchJ2ss3titt3Hxde88Cmi2HYsaCL8j13CfoZLaTpovH2Qo",
  "key15": "4oCNzHsYB2sMnWSQy2ZoSb65CXHLNm4fw5MMTS1RaFYbddbCWZy3k9bU5ynMo5TCaXMbnYvZUkRHV1HzPdXWQ8Z1",
  "key16": "4rgF6rn9AZJPSNjLDSahpVKYxX8u2piDUXCCUKH4z8RsYsQpyC4m6c6asSQZs38cHzHKAgMxqRvgLbe37ZEUrB41",
  "key17": "29yzqbX4mUjeb3bik7ScTA7GcqpVuWBBudou4DV4D9zZCUw115f5hy88Q3HQzdf4H89X8ybn4M35SAEcBwxWHjRN",
  "key18": "2vzrxijEWyxZt64xZhzzhMNVK3bjSG8uoFD6JGJxp4JDqUdE3Rin5Qmn4je4CKdygE2xiByGngoi5rJPvfJCThwT",
  "key19": "2mri7fHAGv5JYp6znX3XA4ryATd12wvugErys65JcA27KKnC3guNLGxkStCW3qDVqumTtBVNF6RT7t5fgtvhW3ZW",
  "key20": "2THd26Vpf9qpkC5yTgTnXHbW47ucKGGZxEb7ByFS24CgAYd7ki8wZwqAsJU6uTJpt6WDTp9Q3xU6K2HgqVEQwzGi",
  "key21": "2zcoBLgMbrmS5uEZ7nEczevtqapF1cdAs2qK7rGgM72gdDr9n1XwxoPBFPAbxubJyurEVHZ9Vgqr5fqWFY3k8N1K",
  "key22": "5UAwecbjLC8nQHGtZ989FAu7KovaVC1cxq5i5BtAAAR7e5QFnMjjdxysPtieLoCmTcN3aYxBAUcgscEQgUS3aXev",
  "key23": "4f2kYwVy8PSU5tMJdsCprQCKj2yAp96EcpgmRXkYiu3rikezdYsNLLQgqtKsuKso8mHU5EG2anGaVrus7GJ2dvJP",
  "key24": "3h6M3AqSRDU9ZUJMxcWQdyUArxb2szwE3P89QiuF6chQbRtUiU6keBh8pUkubRwKWNV9wBqSLAUak3gmexKCpB3v",
  "key25": "64SXqEyUdjnDEmuPkxCfQzmnR1gngL1Cw7fwPrhYiHyt3y5mhLfXooNknXPeBqZXoMPQry7uEz36jWT3YSheGeMv",
  "key26": "5raZVersWR7ibXhcyFSwwcEcu8N1vPT4utWgBXAgCkrME3dE2wFdY4PehJ4QU5TgU4xABDsxjbW96XKdkgZjpXsA",
  "key27": "1bzSMFJg8kRx2TYowCf1oB1v7kq4LFJdNrFJwyFAohYND1vNyCk73UHA1MgiogywvM8MKMkbPv18XrzHXnM4sJ5",
  "key28": "CNzHGQuPWkZSv6dHCTaQCNecwpGSeeq6tt5XdxdBfQY7xzFsjSKRWA6xCERMA4sKyzyAkw9EjgajSMGZdmG5u4G",
  "key29": "5vv4Pep8FsAYvNpg8s6ebcT1Kb9CkxuuJYdzY3LtfCdprbzySyGdyjjLFosYg6RqvL28cg1jGHWVPp6PMTzhxmo1",
  "key30": "5UnpUPBhNhZaapH1jVqiPoqFFT1nU1yUoMo5V5WZGTh8QmrTQFoShSDxUk2UY15nLwdJmELxV9JDFspGMcCxhrip",
  "key31": "3g7ftRoBRvt4B5sYzdZe1ZvXPMgC1yRCW8nXCX9xbfEqTPmK2cVvQ8hvs2NuEk7URTw2uVs6n9CVeYoozU7A9Y6w",
  "key32": "26LRPbZmQm397Pv3H9n7QpeZt2BxqTdUUAgmomYh8C2GCnwHXXcWwXsBj5g6FJfBRzyNwxJLsnNruQaS5KNoVbpe",
  "key33": "TXFP51uuovkjpUFnbXDXWmrRMmRjmv581SFPJWZgxdnVyXRdtwSH798GSCAiF1AoiUXbBcwBHrqRMdpRU1Ws9Qn",
  "key34": "iwTEQWmibJfFSvMTqpAZx7h37seJMa2NznAb32n3aaik9nX46yWXysHRC4JpQFT1bhDJori8AfpxXJ8QKYaigQH"
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
