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
    "4FUrkHaZVYX5Duy3mJDAidZALo1V28RR7cq4TubDzcgTUUYRWcYavs4Cxctb6TBQJgwzE1VQGKELeGze9arBWxKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wz3VqFdEr9fh834PV5LqLZEf747QdJhLbTXh4WzXjC6afGpJ2w7NoohYj4SW9DRZAZN8DTrVjszisW6uXHa9vWn",
  "key1": "2ExKsQWJci3D2Zz1NBz2A59dtTB8BkHWxyq1qrTAACsUExYoTkVCdrBAFQmJ5Skbn1nn6qYRYUkxcEKwxyQ76hAc",
  "key2": "2WG5SxXXNB1HnRBsoGdAd54i78LuHdPbtZ5iJsVeHpkyeGxsF5W1kktKGini8ZSDjvQi6e2isRpB72miwmfeb5Qt",
  "key3": "3kgwqpkK96n7rwASa67soxyjHcaAPzUdHLTiDSTRawH5YhXAhwCTfwkLUdE22apt92s3KMB3VD37EnC9bNLdXpxC",
  "key4": "8xW4tgw1qakKfNaron2ZxxBD4oVfLSjwAHoaLWvuCUghztYn1H63tn6Cw5KFhjyz6tXsgP7824y5Fqaycn9rD4Y",
  "key5": "3Hz511QELpFJb1S2gRDh2w1jRyMaRKg9AhELfWVf7NtGeYHEoWzmQcn3go9WY9YTASE3nLQ6fq8EUuqxquc7tGUw",
  "key6": "5oDzUWr8PwdgxVbgu9YQqe9HqDKci8fijc84MTKoEZ1zjd2Gfki3HcZZiKTd4wTEpqrQyh2iuGxfS2ux8VvQf5Bk",
  "key7": "378wQxAEysScNfSuSXLFYGNMQTTGW7idt53S99k1SBWhjPbQA6peF9ByHNq7sToiyesN6VbDynLWTc5cTi6ztzmv",
  "key8": "34FC935s9MWas8C8tYb5Y3FRWnk7K6APhmkqmiBBEnaKAwDU1wjmqJSPMSeA5gB6mtCuaC9WD8yUnLVQ19d2rKdr",
  "key9": "4fwLAK7hwR1R8KUrfUs2iRaYr1vk6ZfreU8yU7vBhdrmregjjf3nfHv4tBv9WDFdsuYtdM5poqK51zY5uo7nxe6i",
  "key10": "wWWgmBy7xRNgNih367N1JvzJHfVTKStZFN1tyD2P8SKJDTwssKNmjt4oJxNVvwuosVuNgVMB5uv6EzzF8oqs2R2",
  "key11": "3w3sBpdiCciarPupqpuVN2rf1W88uokkFjp6M6hMxdvsJWu7Hr7eaUCSz2hauyvU481cvsSRnWh9UFcPzuX14xjR",
  "key12": "5znNqAo4ijrfKZYvNG4Y1AzdKy3qgGcNu2SkQk6F99ZPzt8wre4bs79uBnheZdBuxnoZWnCwiY2XQtumwvZV2YQe",
  "key13": "4uJkjsuL66bY3xnJVufrWVX2TgJ7WtGnc7bzH1cU1ShLpqgkQz3WG98cwVcJ81fGXSN6o1Wf3q87DHrdT9ZZTqTq",
  "key14": "557ShmtZ1XwzMyfLSf9N6rACZQfDzcE1qqMNygnkCGcjoGYi5PM3FC7bokskQWfVqvahXJPVK6xdFJHkQYRJTCGD",
  "key15": "2rLriW3kwoCC8AWJYcf74tva5fiwFneSqGvBgJgKwVqqWtbXnmHLaMerFPk32qNPDDMkC74QdYYKhGnMthTZDQWD",
  "key16": "54BPNCM4Arn8mqrfa9Dz3vf9mtcsGi6WZp1shUuoC86F4BeXXQKcXuaZHZ786F6U2UMrapzMQv9fJ2T8rXic5yzK",
  "key17": "3Mi6Nsy3ynGWbzehYyw7exYwz9R8tuWjJNNs9AV7hE6Q5QXYTqGxDwMzPwJSSS1cCgTCNNwQB4hu2mmjQuNf7rEZ",
  "key18": "3Q5KabezYkTqjRNn11zeBMqKp25SPhLGjAtBw2QamcAnS1N1P4HcCT6BapQFscqinu6NujFwDUqiGj1ustnLWgwz",
  "key19": "4sKNqBCqj9GWdGgQv2LgtK3tCYGn3VYNXMmh33R1wgzsq6JaLAuk2XcmEaP3Ba6BHPNFMMQ7HA9233dEh8rEPpP7",
  "key20": "5NsYmFySq8NusVHRcegrAnjVtRGorGgXfRCxuHCwpmqafZBaLVnXXgvfv6XLHgc1gmzbhqRMSgY8tdHWLVz2Z2b7",
  "key21": "4gEHp3zHBoL5Ug3NwqFKxrxz4ynJ4njk2mJP7M8zuSUKpUSEU65oQeTYLAYxDGPGpgTDgbAsJVkvUMMKusJ7BkUZ",
  "key22": "2JTEvGaH3gL926PKziiBdp5h6C5AhTBdQVyxokCGKUhSbZz7fLDzz4FoHALUTY6trtEe4Wv8LXnLUriq4qTXnMYM",
  "key23": "aV6TTyyBmPYbLV6GM1sRCimfQfYrPqudWUXuwabTsU8LUKEAPscuPd3yHocPfjd9CWStLqBfCGqV9V3VWuF9WJ4",
  "key24": "5kF1jm3JP1Gzp3UiAVNeF3yzBmqHqnQgAGztu1qP5jS4vwWDRo5nHPgqaWHKX4GpVHXfSrDChMqFKkdLMB6yN2KA",
  "key25": "foeHPUcbpy9z2QFu9yoQarbaYdUGeUJ9nxrbCBxAtRVCdAHetmwpxNdQtj78EXu8XZSwJ7APwbFsneKznDgTxms",
  "key26": "44iA61EbMCimjRJQCLx3T4mfxAAw6U1ijfp2rokP2XnxeHBxESJ1G2yH42f4TSxMu2Uk2xrgPJnybx4Gy3w31NUD",
  "key27": "4Jz4apPqJH5He9UGUocUdM4xDkrbxAfgD815Q3aaqeCjP4RXmydFJRikQb6m3NPDrYHkkeWVPsc324xyaNAxp5Li",
  "key28": "5DUdV3aZZ8dkFPY8YfjxHazWMDKXKLS6MkLtTYsppfooBuTxgrVqqAS72B48eGQ5r4vopK7Q5w357PwT5iG8fseo",
  "key29": "C2LkqTFCas7G2G26DAHu1dyA5on4dhhjs4BitrXZUuNVaezYeRL5mG84s5woNgZQgZQgnhzfqSkfP2LPQ2tCHoa"
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
