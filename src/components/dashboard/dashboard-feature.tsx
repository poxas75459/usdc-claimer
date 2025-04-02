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
    "5d1fRoGMqyPPBwhmfVFyzVKXFn5VAFuFzAr1kf6d5ghxoH2vRGQvaojbSpYYcf89fjjteoUMVFNGfPGsFqY5UP5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qH2fPUdtDzgkaanuV76EdJRWjdpDBiFzpqMNq83mriRE4ooZXpgzeTXwEmF573YzF6tnvNDnARs7PE45FCXD1VA",
  "key1": "4xRfWUUt9rLPmTggFiCTL2rkSQq5khjXNnrM9aZEzNspawSWAzWcu8iyVCXjAMwi6yQoJtHHjFH6pBKhnn2vRPvS",
  "key2": "fuUQe3rd4d8U98ycqrpf8M8ZUvBEb3epSeFpbv1s562H4HnwpRiSPzcDXXQtruJwb7YouJ1f6NTPCMpJfqP6ZY3",
  "key3": "3kWzonvoT7ySRWCCoeuLjKbZch69hsE5tNWCCJortqDmRvGFWsQQZjySv19Wtu9MVq3ZaShgvFRvYNB7MF8d7zUh",
  "key4": "2kWob7wdaojwEtBMEhj635epDXPvZPSSUK67BKJC6PSSMn8cFC4kocQDb8ZUZcXtQDN8VP6BtbDyLdLp3pUEpRYP",
  "key5": "4MWhLkGEWJ2bp5Wq7uwSCHd3sTjZB2Piv4xiSaJ528YbrQTtK8ZxJmLbYuoCznfRxjBe3KVwz8Szeisc9kt2X5He",
  "key6": "5RBNyCbtEMGi3RYYsdmEPA7WHXYQJKUa3tx4Wed3EFSMhKZrEGa6Gn1zBvray2VyPngVubSTBVqTGkJK2njz41z9",
  "key7": "2W3jAMyR6n63WFMVfjsmyeX7FwbVFFdAk7CHwivt849zUqpdFQEiqHpWwWp4msJFCwYGUXTLR68ViR4KsUy8gd6J",
  "key8": "2zGMRD4q6ZTdQYDvh2rwKM2aMVY45MvAWjXEzv8FjHx7R5YwKmAdyeLXnheoxu224e2yLczkT7VVyesZrya399Jg",
  "key9": "3E2cx8uDhi5DrZmQSa7qvWRwhnYfTWDHnnrZJd8YSu5QLNP1Aq2gJhBzkxjpzJQXsFZTYJeL5egX7F7kYPD9fNj4",
  "key10": "4SyVJn5DBHWGgGzGNHoYhWoyuYVPUKANeLbp1ECXAJmomRF8mvGQkwt93CoNe9RHBBF4PN9ghcpUHCea3W7LXJRH",
  "key11": "5spkkS6JCFkV4Q9cNLQMWBAxCf95KTT4dWDYFdQ1JgFrbYyWA9fKsVmMzSNG8QqcTsfeWfKSvdReC17a3UeDGCyW",
  "key12": "CQP9gzF4ZGWcXwdQc98Pz1EFh3SQ1Zc3vaC8G5sGXNKYspZivQ8i9AkcKP4ZWPL8VGfdepT7y6MKGx9cdaoS1P9",
  "key13": "5nbGY1ioS1Kvzm83BSmKL4V4bB1BMUzG6KQ1AZWd7rmFFy6655BEJyiVthAdVuWdmYJLc2TDFZj1yYKyUCT2RQs7",
  "key14": "3vejWy8iUkKuQDvSdNWW3DRAbP15S1pEhSgU2h6PPYEcGdfBaATipAAT6dt11Smix8LSp96Zm817VXsvfQybWSob",
  "key15": "4i9AWGJe7ZG89UTju3g247Mir65xSAAkEsErLDava48KSwFTwZUt4NLA8GAj6MCVRedUwP2hiTpsQHAzGUmosMb",
  "key16": "4ymhkxXQnALCdawAvC4usUFPFNpYCJ8hLLNQdabtcBVMJcDE72Krb6ci7vqRgJ111SJZb2MoGmn4crPxopEUXDEn",
  "key17": "31af2mz81JcnWVR97XrNE1ji3dG6eez8HBUimDFpZAh3fRtMZEbujH1udVVcbQEyhMGjxKRF9HtzezNjvps6xac7",
  "key18": "2Mdgf7iDp6mVsQypwdhbUCKvXnWUXD9barWz2qHCENDGEh2XQAVKfUVsR9e2zJFZ6hppBmX4EvK2SCJRRPitaUVB",
  "key19": "3VRr8PZDWpRhaM4ME7V1GVVcdeqhgWWkkuNizfAfSUWJwLcnNuqU8x8vQsjkv6MuQv4NKzjsQpNdzVfJPHb53nEy",
  "key20": "3J6Ls7B18a97oTEdRppGqPgvLhhYpekJt2wzfPqrNMmvUY1fbtnkz8kRFdW4d7qM2y376hECbbGZp5mMxgcLTDC4",
  "key21": "4hMZAJ1dWLHpzhSeycn35oVSZFyFVysjfpMj6eUUjL54dB4PVDYbAT2sCseR7YvxcmgrnjU2xQPhsV7aaauMJQRD",
  "key22": "qUy2BHtJXk1SFFdYQYoRxoM2w2kaRhsWE7RXhtmKxuhcBoqyHrDqMnxscKrm4SeNzbrgtRAD5Ydo9j9gikag1fZ",
  "key23": "5Wa1Y927EammGjTxU3M7Q4TACy2HLEVSwso6cSh4iEsZVeq8ZjXNjfZRGfqyw7SxiMUYMMB8sPYQ3Z4Gyon5kZjY",
  "key24": "5hytCbyukhNFXW1uenqidzrPmHWqeiDnH71S8svUpnVG1AKVi2u3MwhAkULsnMkJvTZ8vt3ukqVAzABpRHiUWqdm",
  "key25": "4YBDgaW4DdiJeNpDZUqgTWMx2rkpxFrsZjbR7mXKeoeU9PL5hpeCXKF3mESdnK3q987xHjwrgb4qu6cTnaQ7fuMJ",
  "key26": "3f1Wfmni2GHKKC3FiCR21XY8xQBHJRXryH1j9iyDEgtNaGXLuhvgobAsbHt28XSLJjg9MgNTthn1VhvLohaDfNmx",
  "key27": "5aDtxA8T24h2DZPZRLB1NihXjaCKgSxJDTGYwTHJhCfE9y3CrcEPLFbYKxEGr922PihMH3S5bR1SxisAYpCxwsLA",
  "key28": "84NarL4C25zBKrvCd1XX22kuzxrvnR9DUKABWKn8U4Lvbnq4pncf6Cr27E9pbb92S2PjsrPKVS8xdN7PPpPfRJV",
  "key29": "3iBAAuFfWHRVNv22K7uZHVefuwDUDnzV4dq4xGzHWoRyjzgBiN2yyLEv2w9WMC1etzcHggHxYmz89XR6wui3isvx",
  "key30": "2q63KHpjrzk5PTSs285qkV5CJzSQyCKavYpGmdbvt6K3QDY8HEHeVpb3PASbjqAWWyHfse2deisoUnFVCepkntzV",
  "key31": "4ttGyKWqkAGNKksvB6gsDDjMCFzde3jmkSFcZKCjp6eLjc2vAhD91ThrirQws44wobxhEejHx2ng9hnMCXjr2obK",
  "key32": "4PZHYy9mC9DAt5oXMx6TtwCdmKTMqXUUBx35uFMS4R91gKQnaT2kAtSUZCsfTP8AVZ9i4yBmCZH6agfKCaXGzUAC",
  "key33": "42HmVWw5xHhcLnaiE2YjGvMPhq3Xm5SPBV4Ni9Uxhiv4HK3HxFxzC2ERFRHqvSvJNQHyVAJoC2cVk38A9UhnWTtw",
  "key34": "519ro9G2TDcKjMbhGujSPXBFAD8n7xpLLcvqPFihLxtvq8uFof7SRWCLNDYXKRqgaiTzZSxgG16crzSFaFoNWdRb",
  "key35": "4AQQhVkoMEJvrq9bRnsGTn9wGTqPQDg5es46hHKsj7gKpsGCRFnGwCouWtAyyR4xA5Kznxa1tj5DLksHUWjUkf2A",
  "key36": "4iyhYFVPPUBeXf3vMTWx6nejTVuhpfWtt6DdcYeDZZcJ1ueNqC1TaSCeNRYms34LPXcBXBNXdcvbj6heCRRmWdm3"
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
