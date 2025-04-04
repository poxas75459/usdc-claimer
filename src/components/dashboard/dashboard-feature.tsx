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
    "c2CqqUiQgVHjy4N4EP9dF4Y9mdwHzthJNnKB5NvnFvga8QEx5Ekb2pzYx5Lzp7nwDubHAiH3Hu2VvGeE8uHhFtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MttByZCAKEqouTBvK6hm3oZat2LWte4djXivdTKmLjRXp5NbxasVkLv8GUir39rBieLFoaopfhojGT18a4r8boi",
  "key1": "2XEzA6jafo9kEg4N9BXey7FNjNW7gAuc3NSZxgwV8PviH7R2v957AwysNB1kuGdt8bEgy1k7Vj9r8Vu3WN3jBbv2",
  "key2": "2eqZoUSuBiz8zandH3QLzVkfp3SotT3bQ1ET51J2cvKDBzhtUG5FsURM7VApDPk3VdPVQG93M6nR5SsUQp9b2D6x",
  "key3": "5yRhsh5MFERncqx3RrgkE8smzRaA2UHLv5bsA2dmLFa7ngu1QafD1N52qZXJ2NFHXrQ6MRKsNGPhoFSDTA3FfKWr",
  "key4": "2isH2yTqPG44hmYZCjsx3E9e3sE499equS329QqpQAtzmktrSeCs55Q7FCSEc2U4bFoJtwch7ZFRQG6dr3NxYVr1",
  "key5": "4P2ErgFBwJhihdhqkN1ZomwGCTzpaU763rRy48jwDzCUuWtr4YDRjnxWgRqrJ926zqDEjSXZ7n9nJCASUPrrms2q",
  "key6": "NrsQ7wbxEFdoB7pceTrjetCprRoM6jMKcY7soWVdpgBJFgNKu5H9hcfo93HvQsHz6q1ykFMZNHBPjbianwahUjU",
  "key7": "4NhpD7YPAyuEo6Jo9Z68r37fFxiTXfK5mAmxrvczuuLBjgbpTNiCG8VS66iYt1amjV8eCctRppnmHy6mekSPzCwN",
  "key8": "4vgQbi9zpL4rQFvU4NimP9TgjG1GptkoVf5XwRDUAfs64We13VHDXKnevBESaeMBQLNRQJ828zGti2cBAUxkgqJm",
  "key9": "43psVWAFt2B3KyMT4h5rCWAr3QHcBLUGoDvSKzmp7y6LotRFbNGyxqEr7RUDriy47bkrVqmc1K7ueFtoL1FeXtv1",
  "key10": "62fPrG42rQBs4DefeSy2MBhVfZQb9A8EPFukCHqofcQr35kYa2hj8QfRCACttwu91KyJTdX7qEokUdzR3S3QHrGa",
  "key11": "3jNvBfT69ubYo4DH1nAoc4hkVr4wzdMYdFeWEVa2JR7bKVtGiVdGJuTob4rQ9wnLXAnurqYriodnBDP66D21nTgd",
  "key12": "4mopXmhwFrbqUFjpgKVWu2xp493stLL2MHiNS3oxPASwG5Hd8Tu4Bj55ATs62kg14ud2acDVYjBCek4qBsu3uJej",
  "key13": "3mPviNX5hq77PDCnLhnmZPpSVguCwaYJrQ3sjvjGW7iU8VnvqcUWxHUccqoMSM28n6uyiXRh5mmvfQ62EFjPUhmj",
  "key14": "u4Cb4wNrNAxUXPsH9GYmXUta9ARySKw4FTiJ8jnC9HhTDT6aSeDH7hYrtAah8GsBfxvCQUJsnwhc6GXGnY8yCy6",
  "key15": "4XSyjuNWpLrQqgGn73Pzn7EaX5njQGumEjVbLhMMNGFjCBDjW53qv6xM9qpSpd7rKp7CMFtBtPNtikNTYKig7hSk",
  "key16": "2YgCeNZgEo9zV6X4hS9w6bp2qR2w2yNENQQ3b6WMeNRVowHCZhNgqXh8hV22nrT2Nprf5HAs4fexTZJG5nrLQFPC",
  "key17": "4uzP58DhjdkNejy5ocwExPVJCKE6EHr8piDZjrivnck4goyqFBvDLv5TWXBRmKW9jjC2D7vu6oexgw9xG6NnQAoD",
  "key18": "fXLDa5Z6jony1JzjKoCbL7ncQrzzcUjViDZ2fRGBGWjbqkYmcET4nPGDBDRZf4xA6hBYjw2Pw5QDiCKyZs7Y1Eq",
  "key19": "4WcjQjnazg7HcexidSPfz3qjtKE2ASdYH1b3kPYWciWAHXa9E2oWqZyzgw6WVKYqPautFeE4e2JjQ9we4wYVkYUX",
  "key20": "RjgU1qgUyyH2Nm9ySGEwpcVYys4aNXeW4a3zZjYKzzQTGwGWdC1LrfRncLgU922KVUmJDV1TWVu2nAocQAQbtiQ",
  "key21": "2wyQA7c78XiovHR3M8hv3VGCYshx25Ughstf18o8oDTFTi6LdK98xnpSm2vzGpJsWQCP2v9MqWZg3Mgcq9UmAGRY",
  "key22": "2jG2Z9F7xmFrZXnLoukWxiPxpzH3cHt126bdv58yD4oYXpnxntophVaL6JVRy4iBM1hz3KhUYkBopN7G8GNRKYB2",
  "key23": "3wgczLem9Co1uKvCj3hzzkMXYNUgakZgcmVjiFV7HUNUd94qXV2LWNMPQuT8CoL7qD21EFCaRp1Ffd6wh3v5ep7Q",
  "key24": "48i86t6rymR71ckL2JQWNJK8shm2ZjxTU9exDKUZZrRuGJAkxSz4SmC6uabvsLMZ8S4pbXGDgW8j5G43aympgdg3",
  "key25": "BHMmeV69jiPgRGioTP1eeja5kDpwsw9Y3YhvgcTS5in22KGSjy2HXaHTCXpuZnwReZcnq4WVB4M9B9B61RekJov",
  "key26": "3QfbwYCaBqZGi6cBByj5NPr8tgWegQSkEoihLuJ4YEMAuPL6DZJ9dxGdKmnCvMg4LEK6f53fj8fFx2ZTKeJ1n6DV",
  "key27": "4Qkatr4C8g5Vv4dGAYb3E5VeJvDSRp6917KE8UeeaJ527SWnDoMe1u1dr7HiwFkfETwutubYhPpSXCVJTqyvytFE",
  "key28": "5ukutsRvWpZ4dkv5S3gRhi6ksHhFgb9shjtaxrABfEQi7Nik2psTmZgTfMnzXbGpqQjSUB1YJFAdHDnzF7LskAtn",
  "key29": "358i8UQvHsT64njFHSkGPzg4o3hk8TYrtcw9YJFzze2BmtCECtzqGPiiEixvctMPA7P3SxJ5hpMw5Q9RcUQE8gHT",
  "key30": "4Uz1qTkQySzhPwrH3D4AYktAJS8uNv2npe4KjR6UMGPsmEAoGEv1uAyczpr6BzDxnkhmQ5cPLvijfyJAjbKriCnk"
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
