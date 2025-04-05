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
    "4w19oL7QPpcUksWyyszReQYpZMQQrGmWsMd8Xx73SKGHNdnmHdD12prWMJptcHdiaAMHUfZZ4t9yZZn9s8Ljnm76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KsiFeqtF8FcJGgBwVE1TPCWUr3oW9HMumNxRaAviPNR2KvHfrZ1cMfQS7dkH13vWioHmJHNAteSirWWz23PF1i",
  "key1": "4q3V2uoYS47GHYw7mpYDv6UbfSgdNX8KzWY6k8K3M1BqcLAZfRXxr2mvhmkvh12LSXX3hngZP8yKM5J95bNUdTKZ",
  "key2": "5wmj4b1nz8JxkFSgujDC7qM1N2MuYL6ukvQb7ohva4ztnKuMUisb9k5WFAcyNPkQQzB2Tt3ZwyePsXAV8LZxJUnE",
  "key3": "4SSV36E7CKGXzhajfXP7hXUXvsghsMG6aJHCq9ZV1ghCS4XgPS2Azid9gAxPYaiBawGC5x5374buCr8CFHhyQCEz",
  "key4": "3m9UeGZm4rBYJRMXmiKsxNL9qno3XE1MNuFF6QuM1iAkniWztXP66e745JWxCShLGMxXcGyY7B1B4idtYdcuv9yG",
  "key5": "qZ4QbDDTpouavL7jx4jTHnhbCp9uNdhrNcWE2zkxpppApSi8eb6rnw2fHMYZwhbUKu72TRxTpevjGeUbLMGCiki",
  "key6": "3eV5Q3ZUcqkpASoPdRbqgXRVHYY1YAJx59VHCUiYVBTQgXSBfzcSJNEwpF2WAKQjF3s2GNRSUmv6eftUiSr5rBB1",
  "key7": "2EXnfnQnFu7Y7jANBpAie7kvq4qoRo5Z3XpPRY67kEf8bY8oLBFuBuv7BXkybVo1uXHgc4UqeAXVxsBgkqiS8gKZ",
  "key8": "2xf3ZFdzRfRYdqhAKARgecgThYVjvGVdGviNuoVA3BAiJckqe9YaTWCDUJDotHz8RupLiECsKBF3SWB3GADNVvP6",
  "key9": "4izn5NFgwq3frydAZuYSc4uRLEFNDK76igVjRazgL2CavKEY47juPpCvhXEKR3P9HWScs3V8PBvEmfiqPg8TWfYF",
  "key10": "5QZUFQLE8yJbBfJTqbrFGJoWtEHumTXAkaWvNQHyK5DnXULcSug8uX7uPdzdRNqf91CBe3mqUho7GeohXBjtmzim",
  "key11": "gYonnb5ncG7yGc2Hx5j2n5yGmkUdpMrWSpXNL8eKEFu4QacaJnZgVrPFycRE5bk3btzTo1mhJwurg9b8dBbyQYm",
  "key12": "5QeNFaZyhHPeFSM612vGsKU2BXSZaumZuvwrB8ewLneYbbrQfVuHUiAo7t8o5QDExaRgJLnxJ3M3MuQcLroKQsy9",
  "key13": "5dh4gDY3tMJS5EynEUc2EfwzHC7J8JtUHnvSTrocKXDA9ZhmfzrcKhVRTsWNYWVcbpMw7dLygWCDTS4nfhKgEyno",
  "key14": "2upqEF529eh8vBGcM759xnK4HoTe7o9Q4vKq7YWdfXehN5zX8GkRVZHJksUfRu5wYW8xx94jkQuwkhQPasxmqjfq",
  "key15": "5gfDFM2xwNCaeX1cwTQpFRcjQfT8btv13ZRmw1a8ZGYA53AQP8NsHdZK5rq2MgM1CLnKFBrfoDGBqsU94vhnq2pu",
  "key16": "2LnZZgfGt4ymY1nxLUBSfHLpF1fPSteAvNFW4tjxqnxGp2G3AdfjyfuNcxFhUpaZ1nxEv45ABvi3ZSgQCkeFdw7w",
  "key17": "5TwskA4D9ZfpAZk2SDj1uXpjqemRpMQYsTeam9R7z89BhsHnQ4bNMzJLCYff88716RhAmgLHzpEenokoJ6Hv4iBw",
  "key18": "4p8VF4zsQopwDER2Q3DbqCkkhFM3KL5xtw7C9WDNfA2MTgV5JBmJLcxSSt5ipDfqMfMVy4TRPGGNci4ZLuzqN5ZS",
  "key19": "5mxsLmr9GHyu2RfdcP5817yQ1h82BRUVxB9NBdhQdGKQGgNzvjaikbFXhUH8yRESpR5QKvapBnXPXfgr8sZuuiLQ",
  "key20": "4Aq9HqozgF4P6Hf3Lfo4MRjrcz29E2pPJkApSCWpunKky8AvbYwm5DH1vbrAkHVFci55i4BSCrQpZDnx4Ect92Xt",
  "key21": "2pMRkwjtQRRSxcx6iJ2VZc81pAaqftGup6VPLuvDWFPvvmdtEgsmdB4pv7NVM4RV6nXFd6kuHch7m29zyF3i42vR",
  "key22": "aLFsJMVLnYpVWArPPFspb8hD88GRsBT5Z5YgafFUoTNPRc9j1Nvypy9W578WkfgoLEUJ2G9GXFFRhv81Xo8PM5o",
  "key23": "5f2NGBebgNGaaxDiNNGD7NKm3K8Db2Gumuo4ySbsBWWvH19R59KygrDpbM2fnXUJBMnXa9WfsaZUF3xfTnNCqkCS",
  "key24": "TyaqZjxSwrhpLeuDuAovkocNY3gna2FBrquVUXfAWoAQBc57qREWFKsGMUJnoTYk2MsWbroc6fkgdn5ewdf3fGW"
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
