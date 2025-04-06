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
    "2mXhG2yPueuS6VTxARvuWWkCg1nwiEg5PHpUVN3xcJQMRsPgd24WJTHSb7xgfHnfVsvtbrT3Yx8trRLXk1CXam3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v1LvN32L6draHy3iQWd9HkmcGoiRPxP4BZwnZghR6x9ffXfQDWiATQuNaqCJQ67HBHf2qQLqjLSEWGDg3ijnvjE",
  "key1": "5pNrpbJTQxovmB6bZXaHfipzmmcWcp1BP8Lm7EJpRDmWPMEtqS24nRg6wPnYbtZocGZgHiWz3bZE8wUvaxVBUWPg",
  "key2": "65sA6JDU4NUmzX5TqmwuLTXqNPeMGiYVfjci6LW7SXmE2myoFBanwg85ZhpVwjk3CBqNJhU7hBkJ11nhZCMjddyj",
  "key3": "2JWA6tQ21UnjpKUK3GBZtgLH22Wb8GipnKXqs6FfM9M16QJ5etiRtcoc8jySPn4E2kCK8pfqZf7etPrdhHH1VyKe",
  "key4": "2rLhuDz5RMEJsKf4BxBGgpZsnmah4bHyN6FYymxU4J3YU2h57c1CcYs5xWSHexnSfLQDpiEF7HQTg1zWegSYAHJK",
  "key5": "2ZdvAG1RB12GkTFUrumpfiq2aUH9YKkk1UPVG4Rw4NWnahJJqxJ4eDGqua3xvLEuwmYMKmWVrSQUXEuXUzUjYrka",
  "key6": "4ENzcCwpLNDWZPW3whACtt2gjtP8PKRt4jKjm2GBp32CwUE8eHUZDwF5M8c67sTzvUmuMFXqQT2LaTYvrBn1p1qi",
  "key7": "5napX8aGe7uphSpGVVYXmWQMDrk8pLZbo4gDBDXbaJ4JnWrj4MxC7wPsSY4JXJQrqTHB19YUwuhveszMKQmV3GDB",
  "key8": "4STwCKAdpLAXGayxBC6xvU8Qkn187Uip9PFan1yawRbP5D6GzMsVA5CmZag1ciCTmVZxWDTJo38sRvuGjpBfy57P",
  "key9": "4AJGuPKgKdXZKZT4QRjUyn3NJ7FpYXzQKCRsSUNkyY2JuLsC4spfC3ki4YJ7DMb23SimNb5wxFiVB35ZyKLKCpNQ",
  "key10": "7QZAcAcPwKpCoDQYvajc2aBCGsDv6MWSDXG7nUqG2Ec6tqHYZmLCfyJsd6sbiCHFzejgkLr79EuB4aCSePZsGDE",
  "key11": "3kvdx9TuQnJXx9DBtNiVbaLMA1bjaHadhNwzKGCGXz7djwBWeHfy12iKe946UaHuLZZDRSA5iCJRYenNzBCKYrzt",
  "key12": "2vAiaVUdJhZ4Whs521i2BWBNizDK97ATefqZz9Q7aBt1Rq4Pv35d4zXpFqZYRSaNdei4uAg1xucSP2vABZvHqfGG",
  "key13": "4cHHbDqMdqXUMTuixEexiTb42R5rjfoVC52ovioP4mozK6GZGdHUo6LGjUaKsRTKFahFchhXRc6AyZovoo7q5r4Z",
  "key14": "4B3PB4HJtqnUZvyDRVdbz49HAsqcZM7TXa4zuRHRKDRk3JJLhgDSJp1JKms8FTJjnPFRcqKVbbVdVDF35JkTgZ3t",
  "key15": "3KmZWSjC8zBojimSJoZs2QRKuNrJUzNeWoetURB1CCTuHgDu8f4u2QxxtECVxYTaMLTEugXMbnPWq4t4xfgpK4sx",
  "key16": "5fmfFnRH8K5ihg3UjwXsEYvVBeu9VnGrZ4zEuQyAM7gCLhWAEQmNJpzhdcsE69G7EV6Q2VZ5mUxrKqW922ALMBjF",
  "key17": "5PZfXxfFuAuFV9kArBEbj9ZJ97M1Bji3pKzWpXf6kf8ZmHEA68UoMkf2KTGfRRzM3J6ag1qZuuo32ig4z9VowqGk",
  "key18": "5UqJ3hVHy3rbxg8re22npu3prFLsLYmXvKfPKJJBsx8JkBmcC5Bi1kyo4Vrmtr6xRj9QoTZEKChoUW7gUFdvitch",
  "key19": "5VHXJTTY9htakrRvu8iy67zsY3Mapd1XwvYTia4p1P6TV88sDUqfycvJHHNjCwdKhjGP39sru21nm2eUo2vLtAhR",
  "key20": "5RWUeicbG2yvai5NCTeriqHTNYiC13wqiQusDRuabkCLsmPnpWXCLqVHteU26TqwPm1Mwf4avLQm9JE75fnehQFe",
  "key21": "5uTd3ZQQm8UHooE5zyUEBrszr4FzbKwG6kuUxNcJNBDwuAaJVLm9723vLiU5CJGbQdeCav6MNrDc5tf6TprY1yES",
  "key22": "3R1UpafPUVcNt6Ruub34FKkMGb95yzcdAUskQGZsaUcK7qV3VoNXQpBpzvjfTXTg8NQrLnXotC7FqtLDM8u8yTen",
  "key23": "36an7KtJ4b2tJfmG8CKjyTMAi1E8na1PRQK9Et5dG7xBxU2jrMiv1MiL9HJMjz7P8UFWtXuLmhXt1r4Chs7iYEig",
  "key24": "H44a299UtHEjsWeHUFRrjpZ4qmX6EkPcQYnjmPXRuXJg1dQnoEbXYPCUGyUWmvsaE8oemY5Yn1ngwDFi2eJRmkL",
  "key25": "2DQ77oQd1AxZRT87gjXRmvem6LGz8AadVPyWiogmLZKaP4SatMNZMFhK7WvKu16vfRwCfCm3sfFTXzuL9nLNsZuf",
  "key26": "VmXtV8TD622mxQzozcDM1pHL7zSo7SwH9aw2oktEC9SsnaKEFLhvY8QkbwoAUChwJ6eSW1XtLTRJvYJ2WgPYduY",
  "key27": "5qnZrcdDXjWEaMyL21SerEy7hZWDx7Hc3USHt77Eo29rSC4emvG7y16Ep4euCqhmTxeKm7U6c5EtogJcAFWyyozk",
  "key28": "2NnKkP2SKT7SfxMcG8KGHePcwfcH5zDMgBsgnHzn3xUW19eSocveXdEVzBZKv1NKxWYhF18YTZTGD1CZfyGPLciz",
  "key29": "4BJ15Hd1LivLrrAmBih9qc4wSojau582YBNiNRWbqwzre1yP3xxtAPsBoAn74ZcWZPwctfdJFUDdKNWGEquh4SHN",
  "key30": "3QqB2XjbiH5arMUaXZaoJNHMoUsXD4FDxCN4PtNguwAXf9BzBpy9HWzB391T328dcD7n6KykrUWPhFi8Qkyoxh1C",
  "key31": "3CbhAQQG5SXVqhjKFxYYJhh1RPMa9gnAybNYjW8LACRnwqhuwGSzUZ7wdRuX3o2HF5CwEnvhRV1Jv4c7uGpfGgtE",
  "key32": "2jdc5pVAk5HU8anmTtXvydQfpH8gnseXeftyjNKhvGvx7xcnuhcptCWoLDTNHxESuRfH3npWhj6yW2R7jocwwcTT",
  "key33": "5bXeiMVBTsASeP7GnwZYrvh9gbNqK4YGgZtLhVyhFx8ZJVBBFE6aDScFUzCdvbCyEwG5Z2zzBabrutYmaQad88zH",
  "key34": "3ZPybXZ29mQDtCRcgz7sfGV4az7varxHNSUTPYPdmWnbd5VqBtxT3dF2KF16bbHYwGwKptrcPr6SddsVcHu4cGjy",
  "key35": "62PgwWSYtfz6xkPrUtKnJPzV53sk3HCs3QwcBgbDerqffYxmTZeoBmfGbhR36HYiDMEtP5YMLjaBqkoShoB5Ladz",
  "key36": "4ngRwvpDR3dojDuxyWWawahBgqDqT6UsW9bLQkvST851hVCG8erY5LXVVd31KiAxuxpXXgHyRRnygouWxoUGz5tZ",
  "key37": "YHvVY45jVgFQsR9Jrc6U8pszKiFXar2jZTYETnhJ1rjeLwpHundAiK1uhbXysUdc5STHdv94m9bgYryF4kNUFBL",
  "key38": "9aG3M6Ubp5Ue5zfXLmpmo8D8AWXkKuqicH6KCfgzAtu2V8Zsff27c2yHwkXNnxBiUj8cXbk6rVz5MUC7JhQ6a1S",
  "key39": "9JjjpWXthJACN3aw5wrC4EMNLBr65gsDqQ5GcfvfNCvt8VynL4QNTLyQCcR9wjKLjJ22pbdQeHAsUBYrNFbWKky",
  "key40": "3ozdDzWAq58SAQzGebGhixa3t8PZtFizjrmsJLYytn2quhtvHcEhyCVMrAwU6zMVoBU2hKbXjwczQ15YZwSpELCA",
  "key41": "4eUpktKVSnSNaepw9Hc78QN9mXPxmJKg4BYzujL6muoPvBwBqW4o6csubWjbCCTVxAXVbcTrYgA5bdkg9Mo64SqY"
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
