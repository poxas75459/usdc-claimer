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
    "294cRRs4TtHVPnpG8GmXPLVRF14xbyezddRMLqEdn6nr9vvGPDTofpDNCtH8Jhw9o8uZhAUGYgApCV1HVE4WdGxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yCicj1TqwBSRuRjmNgCmfAC6bnUwCDSU6p4kmfVZ8PV2spyeZCZGSWLuxqbydQJw6aSJ4cmhfPUuhz39DWfwChF",
  "key1": "GaykiJ5ApuwqAw7wgNDnaiP52rcMnNLuEm4stbCWJ7inbiMdVuQgaB6Q9vk2fYrb27ZB89Jgh2Y89qw4tqH2eJ8",
  "key2": "rb9HsdyzR8T6iqj9PUyWb3Z4AQ2YEWaE5aptyt8ywa1NMQtT7YY6CWXEBVLr9pdKeSuHaJN48Dq4ApQVACGExQa",
  "key3": "2qnfaZeHSxiqMLShpmNAKVysoXRhD8hgxVvDbn4NE7nnsmPxFViJ28abMTgVby8oxMriaMFL16ceBqf23EsLzMQN",
  "key4": "2BKnD3fqc3L1xNEk156ckxhFd1SURshaGVDF49upTD3BgZJ5fbgvZuDXzxBdKcbCTAiNSEsUXrPzPiPqi9AW1S9W",
  "key5": "4YnGEG3ScLUhjYtsUcCXMiKhgku795q9JGtNQXFv4tPaK6Hb7mGqNyKaRV3wbCxnwLHVvvHWJWwKii92ExEMmvZ3",
  "key6": "32M4YsGRSxLqYyg8REGVrwfV4qs6CadVjqZeZhqQuAxqqtayJSVhTi9WKKqfG1GEqeC5RQ39WrnDhgWnGvPixj1h",
  "key7": "6yMBe9xM4usj6ydCradPTYW6kvcGozJ3HGyF2HU2ucwCVxarkLGF6FFJSBh9Dsshx83GXXvLXGi9oEoV5ocwgHx",
  "key8": "3bqbwx4i1j9NgZ7Y5NTLBQyKVLvLzVgUXTnL7iQVgjsixT7FCSKkGLsJcpGPFTZ7AmaGq1gYc9s9K2yU9NtAEBxN",
  "key9": "4guP2CcFxXfLcts21schas4yjaZ2595M9j8dqZM6dePYxhADKo1aBL5Pupxas1JBF67YqovG4g8NyG3xg3VxaCye",
  "key10": "64eVRBkL6bmLnAqSytA2FFCzQ67XhJ2jgnqq4Bojcv4bB8H8cmATTXHSKbb4HNTFSFBQf6x627az3rnGcW2jb2DL",
  "key11": "39mMCse6Rwkm6w6e26Ae6ja6n9RK4JV2EfJTZWbiCHCxxxN5sPsu43TF4Xm4h4Xxhk7AnfvceTTyJXb9rP8P9XDX",
  "key12": "4pnBe5pXE7V4By3vYZN6rTwsGBkxS2dPqXjxFr3bttboL9EppMHwF7qhP3DwkjJmoPBpf37qWV31nLSCfmLzs6TK",
  "key13": "7nkethtMNbNEJmZM9knaL9LBTLxrXBhdV88atoEJanEM7227iJAuSJMaKQMJAfaZ7hPSZgKgz653cQDHmVNxL6Q",
  "key14": "5Wo5WyyPZb7RFgWd6hTJNTjtzw3Nf9tMWXrFKe3Wpvm6fqUKRbSdbp9dMZQDnQNx777wgXe4NP9dpkT4faPGnZqd",
  "key15": "4TTUmEZ1e7WynTHJi5Fgf4aPMn1TwNEfuFZKrf4tWqs2CFpCFtdEg9k9VpNL51d1qCChcZ1JEXtSZBxtL8P97G49",
  "key16": "CTiyArzDNr3ydpzavBhVBYJnqiPRt4RykaduufB1zCFEzAmx2WDZoQ8UrPGoHRxsSifcvCpFigeLsF7pngcuZW6",
  "key17": "5rEE7uHMeCm2bLScRJWv5aXMBMMYTRXMdhpDjzotcXVniaZUWTZB5CzPv59az37WC6Au8xdSe44bQbyKoZmhRWba",
  "key18": "5y8tNzPpRxcUrch3x1PPEuZ3PRrjXTDyv6ErAtAvjeARmxFPAP59ADyeEDP2zFj3rRrZivyt9FQEZK6t1f5kZoPH",
  "key19": "3VsucZCUwXfeVWyHsb7jmYYn46qzZnhZwkosrikFwX6UcVJC3LLukF2pvXqqPw13tgN4fG4M1swFcMQwZT5mEgbC",
  "key20": "3v5RguWUjgmkByt489ZvWnH8oJzwbcGmY66qAYhXiJSFPsPr1x5rLDPTraZRsGpjk8nXuX8iJkCvhy9VYmU8ecN4",
  "key21": "e9ri9a2VQ8XwTr9XzQTZxKm17jcQAVqeiwkYJVyQnrDohzfpnu5LGKXrQHeJcd5Q9dn5CZiG7SagpzuzTabQK1T",
  "key22": "5sTLExJQiKGENf74WoX3YJ9gTgzpur4Gx3CD7oPcanGmRH6fDwBDKoVfmCoU2SwHU6hFXrQUJwAgtFzZMJDKXLNH",
  "key23": "VarW4iJdKgsrZFdGdRs6LDjyZDm4DcyWukUvrHkG2SkXJbBBUpc6yS8s11QAhMRXXcSMPhVeqFouG4NmijP9jis",
  "key24": "o5hGjqHXQgTYXmAk7wzGfTdXxiqTfUmFsYhYvMYzSo7kENMLoxe4Z63LYqjRKcEeKghzWagGcxkoSJog52BPrPz",
  "key25": "5DxAK7yRXz4wLdMfGutTJztQePuT1QLpCrvoRzmGQkLXy8g7yLVQZExPSHhWf3qtKspofeMfZJrWQ3sipJsVCWEu",
  "key26": "2naz9Yb4F5ByG65eFfLaHiYXzrtWTGy5PyVQtsUaiZXeed6shXDCyJSbL1BjRPs7CkdfEqJTnkaayHrGUV81v41o",
  "key27": "5p46RVyyXNQ2e96KReCsSeAYX5smdnE42Wmew7Wo6MNomKRNtxf3NMiBdyFc9UsJ6BzfwW6J5oLuCBLvptcwtBUr",
  "key28": "3S1CgJSZC9SZkMTSdCfo2NNy6wejRCLJ81c1XThPaf5KqdRaEgzJrcYg3nWYJTByfzYFP39rF3oWvAjBi8wZFc6p",
  "key29": "4SpedjMbtvwmkX4EjBnTDTSNsibMLZ5Y2dnVSVq8h6XFNJyHuDxwqwjm6p1xdTYu24AtTVzEhiGNdxKPjodMuZ8R",
  "key30": "4kBDrGzvCb5FjGWrK93mS9K25v4bUVoyUyjmvnYf3HYBNWKcMKRK6KfgX3qJ4CcnY2a5Wy3Eud6Fc3Mk4XFkLypm",
  "key31": "4sUkLNLBzKm1GeUkMMpVaSjEDuCKU1RuepQLofCNnHmYuACQkk3aVNRqv6EJztj9Uv9wkruAjN63qUUFd4sfMTRY",
  "key32": "34fheEpYVcwX1jfgWkhpoFavjqzxkrNaGkAs6rkLvTQmwusAzM85eWAXYCMZyiYLMbwHM2wAzGsxd2PFqrF6A2Xj",
  "key33": "4CPjX1CiT4GzgbP9oHnnhoaodt6jpqNsgNRMJb7aUpLWGmRuCciroh8CPc8uafxSGTU78eBStDuCVBJF1MWvMeVY",
  "key34": "4zHbyq7K1J9zGVEsNBM7MWZvgyJ7gYvNkx8ee5XCWfDsS1tbJtuw6tjYJ1kKxyeXB1WprjfH5EMjFKAe2yoGiUfR",
  "key35": "63a5zJZjsB1AgEvNhEJq4DedhfSGip9r3JHPKtU3PNTS1Cx9Ph8s3dNYUEKCsgrEgxeUnayLkKFQkUvJueCEYdBM",
  "key36": "3ttA2zrd8sbwisu7dvR1Dgxh3sRXbG7zVnrpqaRbKuL5g4CP57ZbvezxLkcd1WsvDMxKyPKrJsQus8CANEyQrS6E",
  "key37": "4vm5SdUeLHBvvYAYkTBFdixAiajeiW5gtHC6fJCuurkW63kwy2FqrwpdPCmGFsH6mWWdiEMVMM9nq1msPmqhrfFm",
  "key38": "3oz3a2bnUp7qm98DmAgoVCGnF6p5mG9dHLwRvxnBQdZxwww9CQCQGTN25rpuFS2wHWrzFCA7YmB8NWkccZYVM94g",
  "key39": "3RjKb7Y59KDCszGC7y2RGVWGvvRwoVD7wAMXLEL6PVgxeFY6Sjr1SkMNauugKZeQxautzoyKRTVLX1zoFRTnwbK3",
  "key40": "218LFnYYQHwYYZdyQNDL7zPsHhi6KgCMNLJrW3qw1UkVUiQDPYDPKetxAWVJJEmA5CtxU5V7bVueuCg69v2bh3rb",
  "key41": "3LRWrEmktUv7xQMxfLHhM3aVpZ6P65gJJ7yGEbFuJJv8BApV23d2A54bF8BUw27a5LD7PsyVSV47sw3mXpseTWv4",
  "key42": "4CZgWuKwZn4N62pYmyuQDhVszJg87K3jLkWXMzXvWh4o81q4hgZ8HaEsqTpn4HpVoKRWMUy9UG6mDXX3NsxAWRVz",
  "key43": "2xiHHYYvJdQJTjYs1biqq7erm19kKt9qSsc6YRicj1S5B3qsfZ46nm179pwXMTQVRhdQddFxvKvEPuLTUjiJS11i"
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
