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
    "5iAqrn5Yk9GBiAsrahhf5goNosX5hmtXQQiKGLUSjMiHUhRYKeYzuFQdKiwTEtbXuUwucfjdfio3L7SucMGJoXfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tQqPZ6YLsVRmVc51m36RnFLfZrJndWHyiribfyAUrqqJ3u5P6WfaBJSzBAvucah6LPzcXcUH8EEGRLmpfhvrfme",
  "key1": "33kXLnhJ2kFhaVkfY99dram3xQG7Pqmrykc1wU3BMkBmVNJvfT2RQvmv5U9j1uK5LpzjUFD8tDpj1FJC1T8H4TXC",
  "key2": "2HABry4PKNV8K2KBzXfARdLdcbxf1AiZn51LgzQefEjWULs9SK9inrDJpAbQtevQSE74SXaR5XVA6pBtZ68uPww5",
  "key3": "3cihKW88x2K35PvLwidwCX22faFX8QmuoJp7ERHtDpkKsknMEzofyrmu6KR41ydLSB5W7ux3LyNBGXM31LP5rtYG",
  "key4": "3pkLYMg9P8mHXV4BEiHLonzTwdnHknhChhWn78ycS76hD2wvTXcQRAyxHwBJG68bRdbnHZEn2PU5RD31e8MNHBJ4",
  "key5": "x8J45aUucU8K9EUkNNetHpNCyEB6QjwzYX33JnhJHfmUEpRfns7sJjtYo911gNeQAaXSt46eKVgoqRTY2kxf99G",
  "key6": "2jCvWmcWtQmoV1mH4Uz28pnHW8JmMDAhhfcRbY63KLFLaecDL2y5vqW1inqMxQWRUMvFJkYmkVhySN38ocKAuraz",
  "key7": "5wVWD7TraEuLy8nbQ8e58HKGtTjdQ9RbGhSoBzNLHccwsENYjfZ6ydMm3qsMfXjTgd9DwQE2MRXf5rQ3kYdZ8SEC",
  "key8": "dDtQxKUfDiosTJFWSMTB2bLp2VZzNAQww58esS9iBh5za3ChwM5Ca5XiAPzfkgaFWbxYMVY8buYRx9Zu52vtemE",
  "key9": "5witptG4PXSfCM15M11zVxzCESUS5rofysfZSqZdo5ig3ufJW7aqCdix6kn58VjQkfSqYfzyi1G5vaPEWM2aTwpV",
  "key10": "2Pc4hfiQT5J8d5fHgJjGDJqvVrhzbb1SmJL8tSuA45q9vNHiNufLHm5etYLMpEjtyUSiLnfWCLSGpKanQc1hC63W",
  "key11": "2VnAyiJvNBvrb8Wv2dSVYLtCCCqtaGJcu3GwoLQHWfhfs4Zi4Jbze2hGTH1FnmFySvLC23mhgtWddgr6nbiqwrr",
  "key12": "5PmrDQfDMKJZZKVPGc91yEo71dYmFHK3hwS43zWnFoEovkxooDnhVotfZLEVh6EDnGGCrBdoXMJMfRTWNELcMToY",
  "key13": "3XxMqas6nN7CpgtxTDnmHu61YxpP8DvhGyLUuVt3zrPDtseQsLnTXnzgrHad9RrUdSiCeVAQczyeV268MVfAULum",
  "key14": "5iwBDbHWtV4j3dvbCmxwX8FStaSWrScSdAM3BdTK29znnhYGCPyGhZoJvbLBksYRsgXVX5fYNTJWqwx122RAq17q",
  "key15": "4iPpXmb1zwyUFzv4iKBy2CyDHww5CefMFp9sTmxCQ51KQTxAkxe8VS81yPUgipmaULuvtv3MCU8orGy5EEPHVrEp",
  "key16": "2kG5UXQYDHCPUNqxky3j6WFE3t2igTxZHqbwMLpkfXjquwg3mPbRENPqjcHFJd4EMv81VyQE3eu3cpNc79aaeLQn",
  "key17": "5frH3Ueve5MkCZkkKQpC7Utxf2ZoroE4GNBk759G5m3qjCHVbUAwK8kkBVC1As1JVM6atnxFYKkzMrApcetzzm3b",
  "key18": "55faodLKmhqvzmxpn1Eq2vzxayhocUtShZqpT9KpLLQWkZn8TfFxu5Z8jN6c6X8W3VhTGnAzyiHHb3VNMfHdVLzd",
  "key19": "4UeL2Q9RDR6RLmJqfSjETsE3Wc62ow44iBtuxmL3bipULvGY5USn21t2f5pUR9jFK9mph3WhxMYQQfnkX57vdPer",
  "key20": "2gVRYRV6fv1gekQWWWqBiZSnnm3JwXfJWfNXMx7EonSWeitcr3yhiqyV4kUJxEUSnt71R8ZQEz91vpjC8mCSiyrc",
  "key21": "5JWH5UW5C55r22j4NsbRrVpybzKwffo7QdN7pTLaP96ox8anKp79WTmZsL93rMGY1meLMunCNitNq2qZjSkCTvcg",
  "key22": "2pPzvv8CBfrBHQtpMLqWTqtzANaLLREdVjAiabm3auNP2xMjmdSxsffGhenTnDoxoQg3HP3RpY8oXZsnsgSuQNDS",
  "key23": "K1u8bEW6kZbkiKGwZvU4NBRMZPUwUzG1eUwiUnwY8UbsUoYhydcpYuCXQFpkmLaKGqaoxWWjeUie6kS8Goyeczr",
  "key24": "2p8gAcsxVSque2uuR6YRFCZu4zBLyHtcJAB4jWTY9cvGx8fXnSiHrQF67fz4MvdnLQVjc9NTW69ogfDD6FnvQMdn",
  "key25": "5tecojpSRn1HVHLyk4A8zzhfPEHdS3ABH2BGcvGz3euhTSnWJifn1ho4EU3ySvRMaU5GWWj4TFHVU6XxqSScUpsh",
  "key26": "64itBZwKhCG7w91a5sn4RkvVS2qfpfdc7pcBroinHaTytwRuFpNQMgYzCUqi4NJ93ibp48xdG9PsxbhFNnpnWPZY",
  "key27": "5VRjfFvADxcN9TcUoU9qq8aokBy1fu72kEMdF9Et9HzbAgPJEawbtEoGg3vqRDp6yLSaPKY5qsvmtN2u8pFvbKv9",
  "key28": "3uvD5j1kbEaXTPXrmFUrY7R7MUdUWLQQ5xPXKaKRZ7YVEMRqiGxvLJH6c8FkSwMP7MoTu1jKnDqx2Qix171iPD7m",
  "key29": "5a1sdZSW4TM7SYH4YRaGzt6w1uyukBEUpr4M3wzKs82F8Wafa8w1RXEnyBAvdTjSmn3EUrnpwM5V2HvGz684Kbnj"
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
