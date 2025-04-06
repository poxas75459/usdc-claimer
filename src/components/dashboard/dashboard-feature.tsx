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
    "4nXJ9YT6Suu2pB8i2mquLP3ra26eqSSzr66VJH1H2xmaJMsMcCEocJAHmU4htfxesvqo2CJHZPKgpvCWt9dWTPM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4izYeQmUSJVDzqC7zmkCi2vAfj8qK1CephUq6FJA47u5WDEtejfqSjBnJBtTRETBfFkZBxa7ML8RUwKW8vDCSEDv",
  "key1": "2GLh5bRJHgyVVU4sjcX98mynT5Lg8t8cFSBZWwVsAe5SfXFpb9kSoeFCt8hFzC9Qy9km35ABSDxw6Wx8NRtvCE9b",
  "key2": "hshHpGPp7JrQEK6NBqZhjM6updpnws2iCNeGbwh9uBSKiwuopEnYTzKw9VpzTKNwagBUqCC95SkDL5jLJ3wEU9u",
  "key3": "cKo4RypY3rGMq9mTsrgSu1y82qnymG2LkrUm6abHnAPu2ERv9D5d8yKDe6EPo8rasz6tN15aYi4uTXCtzxvmA4H",
  "key4": "51PZZYjahr3v3ZSDp3MhH9CVjqjBrYrkoaqB2ozLpphmqabGBLgsdeNZMGWxGG9pdd8iWbtWhDjbyiFAuedTYBsx",
  "key5": "9ffVt7Pv2mhuuYZDzDXrQMAB9i7HCLpmfADFTpHruegoKsEUs5rPP2GQFPiuw7DJnhcHoS5VN4kwUCteRBbufyK",
  "key6": "F42wv6TphG7MmkpL5iJAoTAbSzvDS2ZnaS4puQTV28U2as2q7QbYUoKJTHWN6zGYZcUirnc7NAtCtDJodxUQbS4",
  "key7": "6D3QFbHWysft3bDwR8pekWzFHh3qJ2WPKFyEN6US2tZo49cfuECZXcBFyrYL7i2supzgD8NTcWLBk9hNxt3m3ax",
  "key8": "9viDrtpXGM1PTrkGhvejp75nwyyvqn6QzBpquQUsSeBzT3AVuYtr44AM5TaiPtFMd5VQbHD9Z1fUT4fFEmsiVgJ",
  "key9": "2uNrRXEkLrvgEDBjyJ262NBvRu3uBMdgXveWLHCYaHjyUa5SeVZAV1deMVJdk83hvy1W25EG1EEYtnRqW17Uv2h3",
  "key10": "4NwBaPWgDCmfDPBjA6PoajTVfu4nUjrajFUKAntumnqMJEKtP1ygTaKVH4Wu3UjPjXPRadeHvuiCbgmi3psSLiPo",
  "key11": "3uzjs1SjBFAVYR4eMTyHdXAESEARNUhqJKxh7CZZwx1LTv1RmuCy1ZNPFXMwiJv7qNAS74WfpFHWMRhHsb9QMYFK",
  "key12": "4emmRPCimVydxdjD93JrcU4C1npHHRzBgPRF7iVvk573YzESW7sjdp4hmRDmL6uvokEeBiB43ZPMrhWYvarMLL7F",
  "key13": "66QZuDtnNKdQazKaFyhyxAr2EA33MGSWRJYnFdmxhBWqxXRhmHBotx4CZNDdTzjgdj69xUgQQG49HuQFWWhr2dL3",
  "key14": "5Usa4CUVXuubxLvLJFBy2q8KC91HhM3wbpMgHmbmGdGU82akgXZKA2CNP1P3L9rRK9SbUAKbb7UDL7SwBNQg8HEy",
  "key15": "2cNBBZwv1n5L11wXkQktwASQavmcgn2fFmukh5a2PPpRrj7faaDDdE1PGDDsw3twp9A7T5eByoyJT71WxkmBY7AL",
  "key16": "2k4rbnjsunjiKyR1zYwWXsUme4VbQZ6MfBj9nZodhUar3NzfSMyMhxkv2V4hQmJFRsMRLERBrcZoapjyEaBsYifY",
  "key17": "wFL7EyDzkzgssLXUHG5L3DL8KeALFm6CWrCtEN38qt1WdHxPuG7nTxEViFqMWxpqQ3yuLS1j1iodeVeUXtwzYMh",
  "key18": "2uwfZFJZ8QSUjVWiVKqhV15ABvjXwtj3CBM82JgdiR6oZoiTArRzdNjMrzHKGmkTGTvDRMEuE74BpS2TE8CaB2hH",
  "key19": "48yNQrRpJVkpyPuZkCwSnhsCb2ZVAV8QKi5pDm3GSwSPqZ9zt4jnm3uPqwY9Sae2Njk8uH1T8Wk2ryNSxydppWrW",
  "key20": "3vfrSNuoqGwKUDsgbwM41NCxe8sziPH3RVw67wVbmnGKhzsybW6uwWZ8zoCsk6EVGipGcyusxQNXQWSG9yHo3iDM",
  "key21": "5o5c3bx3jZp6htFaabECtS95Zw81wJDDNHEH3KXkJx3TrczR3t3nCPF8kgtui785aUc5qfbVgaVy3Y7WyH8iUBd6",
  "key22": "hB6MhGmMnuD7myM1nveeiBuoWnx4nLSZo2bPZJJuX3pv27rQEnasqZkzoHAfNBYmdpULJE25TBfa9TFHonUAHas",
  "key23": "5yBh5WG4dfLwd8FbgphBquzkgD2hkrVMPDvnBrbBzzfvkgET9usU8iBdkeUH3UWa5DAMtaeT75AQ7t5kZ4f953z9",
  "key24": "2sJ2ypjEFimXBPVKbnj4buc2SrZ1if5BF1kLHZwh7x8rbhoEoXNRadMwTC4pySHZzcVNiePgS6FNSxy6pmGgEEfF",
  "key25": "3F1wE2ewTXbt3rEvEaaStbpuzPKPtk6bUQ4cLzNVP1RwjvbMn7hxo9ypSekA9qrHf5y7LHJTQcCQSGPRm5pSa2kd",
  "key26": "391N6rQdsqP2WayBUoJADv3LAm138EJALT4r7MBYssJiEUJgXbTcWovNxBJV8rSVj2qip4Zwa7YYCxPW9o3qMciT",
  "key27": "3f3hCe9oDcJ4c3r73Xau92F4BKisvidzx45L2781LcJhgmhNEv1DZ1eiuuuCETGWWGj1CDifPtXdp8zPpxXXFozL",
  "key28": "5DYBUoBoNrJVbkQRkYw5EYbxLD6X1NtB3yagEkWCJJUbWX9TdnH8gLMGtWGPAo7agAvpfsPDBZb6gD2ZbEARPdhV",
  "key29": "2sWdKgx8AEi18WLjPvVzTwYWqDdtcDN2Mv9z5BZ1iFvGKCSJAwsKenhkdXeZtqzZg2UW5bNMCwQVdCUMrhcLGfDz",
  "key30": "3e9YNoNwqijKopE2bV7zdYYoYpdsgSbYpr2GLGaFP7L4k4NmJJpTz8yGE1NvsD74y6bVMvYFcUX27Eb43ja6gqdK"
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
