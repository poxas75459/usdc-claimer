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
    "5HFWwyeNgQdbhGMNQFEotUvTdNW8yB31hTXag2xVSkXAr6vFFRHWKBdaaNf4mmnZjJ5ESe7jq1SZWqL1CwAxAMut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54h7yaoioQofj1xug1CgLFXAedZJfFoWdqmuBLWrA56QmFzboSB3wZRoCFz6vWNg6EPNuGnovQWc14jzKYSyydd5",
  "key1": "3PJP5Y7p77M6LuBBnacG1uZNRonHX1usG347F21Zw1E4EtQ79h6YPcnPaxnS4jfkunfU8nBqc81E4b3fUMMvTKCB",
  "key2": "5RZtdJungqBciFX4PwdF6ENjzXxH4KCQDX6sr9wJkskzoFrqT514FehMNAyBpmwjea1M1SpM9RGQYiqYK276xjz6",
  "key3": "3AAXh8AbLMxcEDdBSomD8UnkKuPYu8W47ZzCxBrG1hXJnEbXhmtJo9kBW6XQCP5oox19W8BkFwNpR8BqiYV2wBrS",
  "key4": "3TKoJUvKRHz1gZ4QTfmsPhCXYt2bUMMso17f4NohDWXo8pGbdD4JrGULKRPUtrLb1L6Sa78mNKBSPDjnqTjiCrf",
  "key5": "EPR8NiiYZxnLwspvEWVEWBrcApzCHaAtXcN1M94naC6BZMRdVCVMbjibNp2NrNhm7HMdW76SmJjKcUmBC1PuAAH",
  "key6": "5LHP441TLvXomVYumFDAHXsUBfNyjf5LjJ3rbS3DKHo5LZU4swqsF9XDZGYFi7dGAXBe4axUMMYvHa6d4jiiM2fW",
  "key7": "5fWFhMGu945ErMRNing7JohjaeDeRFtq1KCAirVud1VYMkLzZT3PVu9KAJozb8iDMk6uV5SWpxxBPAA6t94mK2hn",
  "key8": "2rbBLvkpgfEVjmVCB8dNym1gRQCSC9fdhjtkC9aayWzQHUYdFfv8GgKGo3eyZHEo8t9UXTDmPZTThYEEEc62TkVg",
  "key9": "4v6FGia8WXcMynsWVMP2vYV1THYBEo8yodbB8sVDuEnSEPWA6Z4kVWLVQ4acXcQmsa4JVAVPnN2ojwrtJ6gdiSZc",
  "key10": "5aPVijLJDnffmE7oQFYgBUDuhfag1ViGDzXWUaaZ2Nob5k1M1AH6BNi1C96wYqBt8F2yMiq5hAGUdxVMzj9UoZDk",
  "key11": "5jmUSLvBaiGvNJetrtpqrEvDiSZwNWnXmo91qZTFaEUob3p6ZxFYKTBh9b9pLj2kCbsL99b2w5tQSX1QvSA5hjrD",
  "key12": "3fyYdYnLRYam4PFKUYube21f29EH9A1yLBAt9iNBvTudUuc92dvcFKRyzQFawW46dy6nqgvC5MmZN3TJwtQhR9kY",
  "key13": "7PB8dkaHryj5uKeKFMydg4j2BU6GPkUFJPSm4Gg24ze9rkK6Fahn8y84ia3uZ8jSKAXPjXimzmaLzwW5fnei9xk",
  "key14": "5bJ3Zw1m85DJFAEauirXRmQa8UP9skdWvmKRtphmdZwCnNyd7kxob6yFUBaPV68g9QB8Paj15XwgB6sm9EnvRjau",
  "key15": "2rgQKxaUn9W6jRhFMP6FRC9su2dWujydu1qxqvyRYwdzqDCoqKUXu9Dt7AcfH1Ntx4PiWnLygaigNuw1K8jRitmE",
  "key16": "eb6BAKVkVF7F4SRFWbuNqzcD5AetVmJkKJXfYK4rbqPd9Ntq6s7smNXEXa3V64A9KZeDEXWn7cjfWMRgqhsXwJw",
  "key17": "4BUUxHUNJR2DzP2cyxkCUe679tFnJPNJgon6vzEaQRuynQPiFjCwGX8UPs1GTuqw6ZqiWjdkUphjpcwtRVhMEnF3",
  "key18": "2vWiHu2SuP5iXAjxJ6Ve8xskQ9xvHLZLehtDNqTLomyyGNAcaNG7ZbDcWR6XiCgwchRLXxk7Ga8EY3piw72oxZBm",
  "key19": "2z92Lth9sgbgEXMqjPoh9AwXWeCxPSzHYHtmq1TWnpMmdViZo8CRPyvEbhiWUBwwYEmeJchahbvbvobTBbH127ES",
  "key20": "5sZbdadwHSLGWVstPEQjxFMLb83z6qGjSELYgeeCokjwrUHkTsS9QUNGHhnj8yUUBqBEfoyRMZ6N7BP5ApeHeKRF",
  "key21": "4AK4t9NtCHfVs8TfDwRMZiNxZKYrHiUBQ3vWQB7MZkPVEW4PdtwqSiuTDZQjLPUYVo9xqiu9yS4JV32Fw3GKNom1",
  "key22": "5rKd2JfoXzgXmwBp88wq67JP5essKR9iyCayw5xKr3ztLMcrWUVWafQYv3fu5wG89ttD89rtA9TaRJ9Vchzpbp7t",
  "key23": "5hHY29gYXX91wjr8AS5qiQiuhRjCB1DxTtUi3pULqrroioYRJ4hiF3DKMzk6ZuU3B4VLyZKo6G7N66bdqQtzehi4",
  "key24": "3s9ZQNjCUs1xWQyfYy3t4j8C658aX4SjkqoUvT8ouXmfZHF1qk7JEDQqVamh2N2zoQYmRjv67UPc6YVfddr5gPc1",
  "key25": "3NskximK85fRntBUuzu7CUVkUPpbxh7S78DThq1yMjByaxR2PWh8qMRT8HWk7gMJiaKVjzabF5onV6mShkR5T7TD",
  "key26": "3zU61mUDa5GbKQQLmHRVj3MMQCqtVms3BBH2MNwmXvghxSSwwDixbQA533SWvaLf8tKRn18awZiUsJ15rqE5Gtjv",
  "key27": "5cEfCHvrWmMzfwHzbT5gQK95YUkkzZu3StZFNdotfjVQXyCSemPmpDRNnCSne8gHS7UGA8a4QDKZS8iujre5MLV3",
  "key28": "5BjfMu63DSTSZwcmZ1omuy8yP2PZU53TX78BPSrPSMxWNqdVHy59vd9bHBcQrim7t7gZuMoGPeYFeZ9JKziQ3x6g",
  "key29": "3fA7xVWznEqwwgy7pZARGhutWbcRSE7bv347agNrSYQMLtB4qMyvaD5kbWrWigWn3r8zazSRwkCuxz3X8pkCUXQG",
  "key30": "3QGiNvgCvvhxkeZEkMa9Y8P6K78jnyS9MDq32rqp9kiWh5ADnbJiUF5Ro2TbuV3GHe7G37PNoC9d5R4mtDixFQ6D",
  "key31": "qCGBeXTuzNersU8WSQtYx74MtrAqDF41mqP3yNSDW1nYPSqoxihrR7Lyaft2Yu9wHB2WegvkFNDqQ8Eaj6PkJNu",
  "key32": "4J5cY3KJrTXm4k69kBmWmpTYM9ZCmkEhV56sRaxHkd6C4HFgaKYCw3oq4vyG7wPC2MQnK3rasQuGspbvxjDCi6fp",
  "key33": "3jVetY2e1PyQxh9xU7HkQ5nHRzyqZ1HLGu4N3BJb2BCpUHC8S8uBBTaiGt3PpGWcRiZqjus11cRE9f23YusRipnu",
  "key34": "4mL5SY7N8qqYQ5E51iJyWZkk1z86H9HsJbKCJBjRgEAbFeLS3X2t9o3fi3pxPD7H6xYdZQQnGNaDFpVXa29u52pL",
  "key35": "2zkb51XT7cj6PFBZSwW6tBpNBFYjGUyJVjUNdHV7P8eN7VtYkmyLK4e5hG3yaXLqv9MrfgNfiteCgs223v8MAVrQ",
  "key36": "2cwqfUSoaeyHJpsiWmDuD7dLextuhTuw2KiYPJF6WeNphiHwqmvA3THHcDMHqRa4JjVfWWvH4giCPuskY4sVh8C4",
  "key37": "3ePVuRkSzyY5nJtgVvLwyojUwPFmn7msCL2uMCpHEfU81HCWN8Be6LaX9q3mmppEiRAeKcRSfFBAEJTx3imwTqQ4",
  "key38": "5CnLFYfzLi2Rj8W9srSxBFNZkviom7urSVVwjTRrRvJHNvnyPQXySw1pZ2MjQ3gxbDfGNiNLSn8mcgSv6tspDM9m"
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
