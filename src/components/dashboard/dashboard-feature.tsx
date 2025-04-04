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
    "4s5AMW4pLxgowhGKo7W6d9VxaWsbK8sEpgqWy9sWkW6gmRvT5GYY9BqgHYE3XgSrb9JHmjpWBH4azJyH4azcUU8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R28X79SCJqsbmE42PQJ5BHRbsQw2UvRQNw6BVReN8pziEeWvW11ew2Q6a9ZVnrVVqDL7vyxyQh5nykqqviqwJLc",
  "key1": "Z19Ef5N4BEwA2yHcPszg3ZcgSZcxSDjTwL6qX12rCv9p8Vcu5T5KK93ysNQL9ntZx6RH2VQAVYhCzfQop9UsLNZ",
  "key2": "2Y3J7vvwtDYLw3X7c9RTzE9Pq4JYd4Gr8hAJG4GSG62Q6siPqeTNLUnjL4uHvmrSUr3bfeAGWvMM1xd9uVkv1uAU",
  "key3": "szH41Hr4UxMZxTPCmshC1B27SL2TCmip81nnYjb754Pk66hnRKM7VbcfQPYiJedW9iGacbeJ2Pmsoq9sjDXJbtK",
  "key4": "5yi6cmjqXsC3bD1feU6ixLenTST4vuwFzed7cziZWcsZCMZasw1S2Dkj3es9CU6RaYX1YBcYLtQsxVhGzdXea4w3",
  "key5": "3vVAMXuvwThHP9X7gy38ohr25YvdSDTjHrKMYWFkeAJx5eC1yKBwhBAqRsotiKYF8JNjhNbXSfV5K6pRGACGsGq8",
  "key6": "3k6uCVwevHsL25zTkToekD6aKysq8rQehxa3wihw2gadnr1E65KoKGjoX7GSkW1CtJnCRa5ikqdBrFi1x1dystTM",
  "key7": "4CrAsvux4HqCx1cKxRw8WFLZiqZQvQ4WGNus9BahncrXYE4qB7PedPvvEbWukWwmavto6PnxAiMnModRUmhkMmnk",
  "key8": "54diRh59sy5RsXGQoF2xUmuux5JjHu12KvuAx72Uotz1aCpgLJJchFjYMy8838FSxbTA38hKmwC7LpcyTvz9W5Ri",
  "key9": "5u6Q6QvQAFXTUngjazkjGHLSnffhWZ2qtjG5QH3voqjwkrDvQg43emrsiKPYWHp3FZVJU6eJ7ZwibyD2KJXwK6GD",
  "key10": "4HdfEAyUDjosXXoiho4GSQzi7gLauGYRuFZ18ThYZy5Xr6dkp2kMxwAuEGpedXnyyKx3sgejFuATbn4nRFn1eSk1",
  "key11": "3vpkGCGcc2GLmQmET1wCoyckBmA9KUxjGYzVEDEEMkY3oSFbhXSZgqU7RkHoh7vAdzMNSpFRzs7zcqTiKG49d6ti",
  "key12": "5oFMinJFjArYiEb594fjzuCmNAJbmnMbB4EoZkaMhkhgzf4Tbej6p9FCwA5DjizgQrGC6oYdpR9btSQDVwyYeoSm",
  "key13": "2UWnw4bogSYzAd2g37JkNLWLddCavwBffWHJWriqimKSRsYwpm98eqV89bmUQkZHv6JYL32AkvKtHGKTY29GoC5X",
  "key14": "57RPEorY57C9tnwTBYxSoMPxaeCCqUwCQhEpRwhkXuo6WA2rTdCg97XxmvWkWyuf4hVW49PLqyFK6GZctVSCwN6L",
  "key15": "5zMbK6FXczK5wEgpjZbcMuEU9TaaL1oTxXBEykfPrtwzqXidruwNAvQZjrg8rrKJavvQNqgdMoP4qwTjSkwVucAV",
  "key16": "38ecRTAjPwJVpUxP2w2X66JYwUonWLfthb3s8WLDHRaL3j8QMHHzKwC6cf7Y4erZGpGJX394vY1eMyHLRmpfeM9J",
  "key17": "ysbhhD2e9LACTBmsw1sBqnPykVV8i3SmkrRuRBW9yjC7UVhs6hwrp9BtZSXnFsWDByv9HzuLGb73ASw4WKVGWKW",
  "key18": "2JxJ7e9RZTrBZXyopLCdcjyVcW1NrHJrj8drFUTyYwNDnSGumLehTtyh8BcTq7YiZnByhL6FVJWezXnn6LtWpgry",
  "key19": "4NwgwsFMFip35bJbBNEkhyzaCnNF1kXWo4ugmKr12Ksh2ubeG61eHMEi9N9WSDCpncSiHATkxsZLBa1vPdtRN4t5",
  "key20": "32pcbxXSnRXLuRDVVmfEzhj3WXf3gPEquhDcg7aWxsDtudzSXNo9WHR965i4RQfi4RWDuBLBkVvHEywBMiwkXpt2",
  "key21": "4rSHBsxfxmP27wHxQA9Pv4Ybf5R8LAkRjmdxGqMTUNcbkvfk78tLS3NG7EX9WJ8MHGXgk4e1MUMij5B121hDWnUe",
  "key22": "ofNNvnTXGnU1BqqWLbQaTbKynPLarPRDDsLsEEXoj7P3ehEDDYRur8dgD7BHc2tBgF7kSdpcruL7ifybAWtEyB7",
  "key23": "4Ptdhu2Zr1onGQ58Db7X1xtsZpBNAsXp7cDXtoxxmasdWmQUCSwXH2Cj5LuP8xsgcihcr2WDs6QzLyBrRiHTjx2t",
  "key24": "5jjzhCQcXpgUpMhXaRJPHSVQkTbGg5CYYMKYsJ45JJKNgX1xYmj2X4oMkqSzheH87iXtrsH3hsjxFvCZjfaeDyM5",
  "key25": "2MEY8sibhujdskzQCzN2DM8wzoxGVCAZofuveuhsRssjeSJRqjUP8rQDA5DN1ixzu4wMUhgic6ZsGkWYD6AXWbj",
  "key26": "2Je5pPippiYFAXqFW3sZKSwVLQVMVB9sTB7ACmBfJZTfUL6VGRyKjHTtzSxAJSegwAhKMrsYnCLuwYsdaDAXeb7L",
  "key27": "2r2MjY37brdRB2d12BAyw26fE9ngc5RhNWQueom7gGLHbiMQb9ZU6Aep5qJKLVsgkXxsGCPCtPXx9VkT1zh6eruq",
  "key28": "527xLAzp8HKrhDvrV53SzHV7X6ivmSHhVbJkcD3pMFgixyf26ytjoTBDBVLcht1JzMq9vb1DdEVXWHqgnWMzEfpi",
  "key29": "4GkUwcLd5HxfuycT3fuHjmsgFtBBtAM9U4jAPQ8dk2Kz6UHgpNsBjszKurJ5JY5kyNeKgosfufd9pxmTiiDztFMJ",
  "key30": "5eVxBJKobG2AwweFxCPqBdH5mrCSqYSN3xWqpadDRWStDagaY6yW531Kvup2z3oF8LUWDZvhaLXLZsYqKRf5hFy6",
  "key31": "4uufDwW818ryj6JG5MH7YC9cfNWEUVZtdRjTNUTTfZ1tAh4b9FQmFjHbQzjH2Q4MenBAAfJUekjnnv2XBUW9rLjE",
  "key32": "2Ao6dpezz8CMQL2JrTJ15ChYETccMC5rNLCnnPZeEd6sKLrHQ4nvRYiiUhWDDo4f72uDLFzNH2118a9Z5vfCngou",
  "key33": "4NcvoHZeEeja5YPSBvWKDmhNsgQey3owdxh6jouSvGEaC9GYw5kgzFUbbUCNmYtiD9MVbxa5fkdmJqZezLqiJGJp",
  "key34": "25uXRmfk3rqytA9ociQLJjPmMUkmF4abit4eKdDeWPhovv8nui34rCbCpDbjUfvqKKzhGEv7mQXCpkqvp4tm8j6o",
  "key35": "41zrQG76e8mxXPpiDLLricBKLNUtQLT6gNqZPz1bqWknHc5kJrc2dzw9ahr56j6eBmW2nwm8HCHwSG3XKy1sThzv",
  "key36": "4BssQWuQMtatiX3TReZzM6xx87KEZQGaatXJJaGiYMzpJFrTTg5hbbemZuR62KJzcJv7UiL5zcuusRQCqE8UoZk6",
  "key37": "4uKJiNo84VkW8796fNo6qW2nPMZ3emZ7WzBGULt9LyRYWWLopmk24kSHMPS6eWZ3TQBEFJZGzetExC8CkktdBJfU",
  "key38": "4G486HVT8n8q4rLZA64D9qPENj3Vsb8cAotwqdaZcqAbo9KSdZBsgkF4rntNP4EyFobdSQ6pbGm6qXfd51dQga4Y"
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
