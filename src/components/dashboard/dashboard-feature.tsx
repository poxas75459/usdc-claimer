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
    "3TREwBeRwJA1VNsxj4dEtRrCR7Uf2fbbN2THKH6k3K9MAkZDCBoKYytUjDeRmqWoNqVsJFhQKCo7bvCdB39zxiTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LYEzkp1Mi9UbktB7VzkxxGgRCohBBewjztAF1U7n4HetpfviNgsw54zBBV9imwna3EBXZgs5ceJro78oy8a8UBd",
  "key1": "4P8rWnjHN8hjnvvhNZ8yDNW4hsEDU4ntiE9g3sdsykMbSFBX9jnNHvf9MFDu6etoaUuXX2jWUVyCEHt3wjjtUXwi",
  "key2": "hY1BreaL8bSC8K5qN26zkiJegdSyz3ZEr4MyNMCGgm2Dy4gsTMr928MJrVVMVCAFTq5tdFND2q8SF1axZ9JoutL",
  "key3": "3wx7uM9W3xsUaQvtCSpSeLGsoGSffTjhMgg9mNDAGXeCc1e9CwHVy6S7Dmz7Zj8KZKgRvuXhbvJjBPjxiX1yfjdN",
  "key4": "67qbsWgWu9weG9eNXGFo1RsFwE5mEDyfTYt4ERBrrpr2j9kJvVMEynwerra3rVrUDj5c99b4pqNGmoakKHjkxkWy",
  "key5": "5MZtPUjzcq6G1VcXx9nxftHWJYbv9WYjPJt5HRJkUTajA4kNf3xdSVd5JYZhzFQnM6zJ6PHof1jFHfgXbVH7EdMr",
  "key6": "622aEJK7Vaq4nxKggoQKR44UE9BoYtTZQnAUQWy9Df5j4hhoQBsHbZmbR5S93Sp1v4DWKM2hLVqbBf1qKY9EaABW",
  "key7": "JgUv8CQ4Tx5qn9Xir4F2ZBo6uHT8dwnG1ym6MjhWsUsk2XceWLybQWNwbHEHt2HqLdiZfD7nv4xUvueRyZVauMA",
  "key8": "3Bm4egg1zwKFNKMN7wdUibzpf122KDChdebcsDsPeXHD63YibTZE8uSC8cEfkbCo5Q3C4GdNGZz42nuSikiorLof",
  "key9": "2Y2jELNKDpg1BRCFoaiqx8C3QT3BWCiLJDTSCSrQDXvL9V5UWcbXrGg8byEy36hqTZzBoK2TRuKyU4qossxnfSA3",
  "key10": "63eRYtx5emZTPUz21uvYc448xUjHFtfFv5rsPboezBpkZJWZgvhxzfLpcJ4EcCC1Rt5LnCMnSYG6iMFwbffuyvRK",
  "key11": "2joE252xWzLeEdghcpfwPc9W67NSuERR2EngdY74H8zpxYTu9HUmkjPX2bQKZJ7dPzJsAJWm2sU1b83MYVzK3gz7",
  "key12": "Y9Pn1KQDRA8DbNLi2VHJjNwWjrrfFtviNAZZAphqorAiYC64Wp2epJX8xTA7Bv7zYUNn87LggGaEYhYxnVTk94j",
  "key13": "4MJdCo1caTUpVsiZtV9Mzji4MVPUTJ9RjcnXVueYdGM3J2aaEQeRRHeMAgrMebyrXviEwBhtwHNfvCAfue3SSTKe",
  "key14": "gu53x2AdWRFPX2eZ8FMTmMkC3UWDKqWjcyKMa7GFq1wPVDm7Su25YnJT9rYumwL9V34J92miRXLGNxpsA5Sgayb",
  "key15": "3ZxkV6FydWeQoLAKTqB1zbByk9YvZyr9iL6tNA2rfboznNjuotbuATgKTFe2462HE6gwEtajDJwHM3mfxBCky4zj",
  "key16": "53FTNmxrtdSN391x1TPxofQmhdXKyNozzmzcdJetq14QvE1vxFz3tFysWqsZtDA86cr8q3s581uZivpdPBwdcAAi",
  "key17": "4jxJkj5kXcmU8FcE1n55chvcTKge8VbJNhGsgf1ppH1daPFGFi1FyajJNHxCxukN1vCCwYjXqbYtPHAc7z1Wna87",
  "key18": "5CZ3L3MWdbq6GkqBNbuTCsNGTT4epEtjnRcLfHFviGcmHTCQGPt7qWbGHxUZ42orFBPsJVWXGj7rvMA4MAkgYuUf",
  "key19": "E7gQLz8isqPHXm9ignNVPZ3F1CRbcYoxRYYoqqBie3gokFmbjV2343S4PbnAUVY6mQADEb2Qeu8Eqsa7Uod49sB",
  "key20": "3AgKkqsXQbL4UE9Gg7fqRKxUNmPUKQKGgtvNCuENMb7sALK9MCNdG5tmcm8Uwr9o7o24YnLKS2WiXQHAyKRftJEX",
  "key21": "2h7Kn6yyFApUvno6QSuYZnikmUYWys4thFSDRfunCipF6EEFTr6vuudtmqhcsygV1rfPE4AQSzyYiqigARipg72v",
  "key22": "5Wy3BhBuMMTwz5Y31M2twEwHx1f9koThBgnRboy9H6WnnmtCpd6hbvQ8WexawYi1Be6oF9wZs3VkhavN5m3gntk",
  "key23": "5Zjb3pipwBeiD6fsjGsLXXT6PRq6F6sXAuMbeJZ73FwURrVN6ZQuCv4Xwi2N2VEy9xnYmDbxEhVTQU8f2Mptht9d",
  "key24": "4DXgJJYCFR4iACtziHxTCBmCGH4UsGxLXykiv3LN3SBzCZGr5rB33b6HXogauNNfap35UbJv22qnj5ZvsKzUcyvH",
  "key25": "4uvqyvafQeqVJm8Ewm6B82WsBNHKdoRxabv9z1rwCFRiTCb7H7WEhLiiCvdoBtTSnfeRbVdbMtipk2guKk54NRuZ",
  "key26": "3T5AE4FTAHq6Gpb95YGbXdPZXmDxLVrufbCf2VBXFD4AtrbRFcPQCeh45bYykYz32HCLcWGjvjg1zk8hoBZHKWvE",
  "key27": "4MccASsZqkEzWTeZRj9DjKWbJXbaupbpFN7K3huJFfovG34u1eVNjVCefBeqKrg69UF1gWUS9vDL34FU2qtxpMgT"
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
