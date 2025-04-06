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
    "4ErdVnLns28cnHGXZDgfkiXSC8FJrL9xvy2TiFrdeZpGq4mZQ1QpJkrVK6qsSUTNybxaF8jVNKSaF6mmUHppMkjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NMGj57grv6ri4kA3947kvjfscbiE9Sc2RgTYoL4A5PTUWRCnUs9gtMTnf1Akb8J3wdFxxpb4VTQcb3dsBUzKV3o",
  "key1": "3A9tnvHPPH56RKajndGwdHCXcwbEc8dehTWBZtor47oT9hsmM4UXoyyQiQHcj3ertxzSkNko43bE4be2KhTwcP7q",
  "key2": "452vKdnLkvXt4Vr7MSRYbsf15ZiyvAwbAbxABHJyamMaoCJhtsGaxoirpH8DTLg8rArb2cBypdPKWT7QLpYfBq4J",
  "key3": "2ZDqXFjGPzcKj8yoCQYpGUykHtSVid7fEH1GQ9hdzpJ16DFq9zTyzb4M2w1H3QgmsaqQPTKLWapLqg5rsdGTE3Du",
  "key4": "oDSnkpR7DnLEHHCYgsqmQ2jmU9K8ysaUEiJxLHEp3FWVRVyAMcjjxS4KLokCKFbHPQhtjxmA5zpeTdsjDw2ewPY",
  "key5": "4ZCCWttikLuyGjVVu95b2TTuct7wkVWfKYXKbr7Nuh2JuEMRAq8G78jRHN58V9qEExD4tkjTPa18hbU6BbYBCJBi",
  "key6": "5AMzjrhepF42TvVSpgrtaSUq9wJKqpn9tVtVMsuofCMWoBNAPT2DV5ADA1Fw53gRqQT4GuDW6HiDg1VKiATxhRT2",
  "key7": "3VPzJqgjZsuMa6VfFc9jUPkoLYwJYSJ4uHCUVQxgHSHTg3SQns9XhU3rDRMVPUMeHUEqRPzGxDNtUtQCUdE2FQDs",
  "key8": "3RF5hECDAXgN6BgrPirfEuSNvocuQntRLt7nXW29YpP9DdLDfkbN4f48RVBngGQ2yevEgjG58N4AWi5T2texf29H",
  "key9": "2PCVVMAMqqj3TJg2C6uNgcCbKMCJZmfqtmXb77jUuQn6PSsuWVHAhhhmPphpsro1Pm39fApBe8Vjix6zbkHHd7WN",
  "key10": "4iRDxErgZU3Prk9c43DC9k78Rqq7fU6Ce7vPWeSqytm1TFHeiMmtvQPnTew6q5PsdGKuhtouVhhNSjfkD3trYthY",
  "key11": "2gztnUu2L5Cssc3WiLFU7NmaUZuJRyp5TgAhxyqjmm93VMTdhHg2esrsU2GVUUbZdrGYEHC9eXPBHMfAgTNQvZm4",
  "key12": "24mtz2ypKekkB3gWxSFTtKBS4cwqSzugVxZR4NevUVJA5Nw2D4oeRz8UnYJed1WuPBBSAb3ZB7RvAim32tAHHKUk",
  "key13": "2oveYawi8KgwfVpDeSDe18xjVyNDUHXTWDbxnNdDCjVqwTGgDKaTQYUrBCs4NLyMrrJ3tYzmJU5bv45ZXGPrM9sG",
  "key14": "5KVqF9vX2X3yVzaJDzHa2imhbAQSJMrGWec422pMpmzLeWQQGHNJEwMQnGWJWXK34q3KezTx1reVu9aGAhvkhqdj",
  "key15": "rTrKddmycv58AweeoDSKYHX7e7QuzuhgDr7mEybbrXdBej9QpPjkwXApP3PJc5cRfo8DV16cftkqED9L9G9H4jq",
  "key16": "4H1XNM7EnPZyNdJBaqpeNqUjWGtMT7wMwCNhRqykeXwa88G7FUzBEQ866bYDUiqksMmWDDef8JpkYDymhjEEruUT",
  "key17": "zE9Dtyw5x2i6jW4qDgCKMyWqkH1uBLggcRhRrMrUBnY1G5ff2CP48iRFjpzZFMrpGJZUB9sJAKY1A12kSRoja8u",
  "key18": "4JTa1CPG2fg8nGoBDHSqxjtakNdBqZW9RpQdKwPWtXQNxCKAPpiRJjtKSzLmN4xqcUU44YSaDUMbdRqB1Cx6RJfB",
  "key19": "24Bv8sBHWQYpYTqHnmagXPa3NasD1fciuSuAbuRpmLhSEE7awNc2hhFodY5BGNx7LBPJ428uc4UAS5UJnVzWphyE",
  "key20": "4qYL3Ds8qNNV14qsNYHGSq77yjPLMPABRyxUE4rnU2uCtaN6Ae6whyQ11gt5Q7DRbNoMuNPCFFBHcZyZXbaS1z2N",
  "key21": "JzbNC27ufbPxB1qd63dahN8eKouQgy6rqi1f67keo1z3giEksNKDfs1xtBQYcx4F8dpGuwPFzxNdUf7mZHRTuVA",
  "key22": "4eFkz23ZCZ63QjhkgqJ8EGAgpioDwD4nKHcoGiazq39H1zsYZu6QBkuEx21n1PCNmiC2KpE3pGuCSLWzEYcZ6KsT",
  "key23": "3tZBt7Kfm34vfybbBFqKp8bJG35QmPjA8MwQP5WUUSs6s5Hkgx4MePVi6Uwjsy5NBPSyqTMr3XGmpNDQfnKUECGi",
  "key24": "2dCswtkyExM3koAQHgVP6fEfYdP6bMMr5VYD5wAUYzy8rgvGCoQiNoQ3gSjuDJyzeY6avKhSYgwmkqPEF8PKNBMj",
  "key25": "4iYLqSj9knT8qFTQLEAXfAehZERgQRHnUXURU5yc5BqioKeEwW2Ydnxx5yE24Cqs4nMvwkv9aU2D8bADey5ShnX1",
  "key26": "hib2VxcuyHsACi3LA48tgRNBLb82SoMWE7MGTF9xRqRW9f5a6pjFcWje8kvJMX5HUss45urGm8Sng8KyhokCEES",
  "key27": "wfXci33zopVWHzm4nVBfxcQow1MrtLi38hSfw72sSZRZqmdQQ4RTVFn4F6SBmK1d4qrzCaDhwM6ZUSVEBmNAyqD",
  "key28": "5FYn3YEVj74AXEcccH5xuajt7m3Hpf66wsRCGsNDUDF8ThuPkVDfmMEQgGrGeHtSjUbvFX1vxLvhRj8S5ZbnPbc",
  "key29": "4oN1RiobSrg44ukB8XBVjBvbT8GFbGsQ1RdqnQaWcEyoPJD5PpdhvNCgprSEg6yoRDwMXv63wvU6MjM7kJ5AgzGY",
  "key30": "4Hwh2ye4WYjdpPztpfrcMbpkpvozQjpgzitK2uA2XeZt3mDJPfDJNxqbTW4ZgRXMnuMj4Hn9wnXzSfNq1KYWncYF",
  "key31": "43VJs1EJS6e3VdaqZH7Vh6mpJZZnEtXVYQxULaSy2bZs7U1PtJK33L6putGiiGcxw8Rs76sbSp2yvagbGNx6FiVn",
  "key32": "5Eg5GpZ99qLLzpNBrMKh3nt7269YeecXzdUcvKDS9VBb7u1PgRQn7BNnbrpMWMxwwLZdHuTyuLKNyHphKNGduyN",
  "key33": "GZs4w8S5iBCXgsK4pdgmJKu5UZPt4fW6fK8YSDbbx1CtsJ5K3LukZ2DetCYkhLUwDW45oxoZ8AA3QrEgjmp6Zvg",
  "key34": "2vSJQdk37ydhHRFNdM5XAFgZS5Z79S4vDQjqyxqrju9hZSrHhzqiZLJfG4N5UTiQ2Hq91178vkx6efPEqZH5BygQ"
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
