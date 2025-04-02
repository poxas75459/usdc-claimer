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
    "2ThR5GKZN5bgoF616UusxSb2igSqKAv1KCqkbK3cs2sbAB6Pn971DcfLXt2XD4pvQ2agLkkNNqvkgg5L3A61cm3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47cCirirJUcD4LU1JVbjD7TGh9BoNwQ386SzzhhiwWbN3g231q6eA3zZv7F3XDiFtD5Et8fq6xUfdr5xKo5D2Amj",
  "key1": "3UmA2eLyR8zXR2Wzf2GVYmD925DeAL8fJwykja1WUKfUfmBzJLSN5wE6K3c15EhLCWmqetjbPnCStEDoKH1johgb",
  "key2": "5fUFSrSUUnhd2Ms1L8gKxxybNWUtFPUFDTyNgFMJv278Ska1GG4B5t3i5Mx98uXPPtCSForFJcaPftthTKqedxsh",
  "key3": "2fgJYU11LgkqWQSyaDqRUhPh9EDEmCgXLkGtGvYr2Rj2hoVvWwzvkh2JMkAaTH8RgPc49zycHsQFfYtVfbiPSa4f",
  "key4": "5denw3oDyNr2kZkSPMqhELf1mARr2x85fUDUtdSmWKGCs1bdRPw7G7e9YSzAzZEsGfJUmfeNSt5DJDdtbaADrbDi",
  "key5": "2WK5aUtijUyhiuAGbvcWQY2bQdHBoBMEdKZsEkGFanLdwqGjGTYJdzJ7udk89emSYtuC95xZsiodZNYJzkJuBRx",
  "key6": "YYGhdXfeZt8XKKhBYhc1ckeVVgFp1gFoz57Y6EtmiN3d8qnGirigUvWwkJrTpgQc1pGc7JjjY35VLNsb2n7hSyd",
  "key7": "23HpY2MKyLcD61dJhcyiyKaPNBCphuKwKGabbpH21Gh68GrWjnW8Q9oHK1VazdSND7B4c63DWXDD3FZvYfiRaqSD",
  "key8": "3L8MQAVTDefsAVxERDpDZJ2VuYX3Tvtgvfc1ch8y9k8GarX3eyCHv5j2CLRGiHZk13NmesKTy6DkeZjShk4uZkN9",
  "key9": "2Cngki9pvofBBJRfGdGDV3vkgvW3PLRvtosSx15EBW5ZKM4grgcFA3ffs3zdpiiUesKs8kaz28FmZ8uHGTzd8eVQ",
  "key10": "3Wg3JSwEjdemGFiGBpJaALFR1TFNpP2ydz5e2MGoMjTn7SF1iG9wMYXPjaWtwtrBQU3GPY5hSVaPTDDJhv7FQYiU",
  "key11": "3sh5gWQTFT5VtPreMmaxotDKJnhK2mYVowhrQ6mgdZUagmUWy1DEvoXk36XZSsCBRwKB6m75Xz9oTSA6X6Q3RvFw",
  "key12": "5FpZFTxLf3yQXZz8s2rVJK9YaYfVnraqpQYzE1ta5588fEgnRqeUc8ew83UWVkLLrXyXtreqDytfC6s5BV1fjtN8",
  "key13": "25NAmQ5B3Y4v1GSyjdmCS1N3hPKDWUDtPxEKsrLt9mABtA9XYEKWXhrL77L8HCj4bXm9bAGXoJoYKVrZvgKxYKui",
  "key14": "2fxjWGjEfsQKPRXsWaeVHFBx1rFwDZ5QfBaWu4CoZ4qVvcVygMg7UqriURUX4ak2WmhMVXZ9tsvgF37riM843GTB",
  "key15": "28nuZhFFaR36EVYWcCkYmsK1ojyrSEkSykfQWRaEdsuuYgAHgd7L64JuG74yrVunYNSzw2apesJ4BSztK1gXNgx4",
  "key16": "4stYJLmhFzUCUgvLR8bbEvwFuZUdNwkiksjSF6sJK1oxbvRZVjy6Yq5f5WaWrKw3Z6h1bGFjdzvdhK1sA5kaWC6K",
  "key17": "4Y1naJUARHdmtt1RraYEyH9fJoqqCGFPBkJhmA2WzMgki1SYvcfRu7tvy1yxrJ6jtFhgGmUXSK4mw7o2CE14wTRX",
  "key18": "4BmCJRLumAG3cjvjEBRw3GgTsuUtJTRxrRYhZ43vPAuqhuwVQxYh6nEgDSdjRLrkUwD7kQhmPCgngRFeR9hzqWKB",
  "key19": "43vpPfLXtE1stGugkr9U6AnEYiTkQvbVTFNY36gcVGJFXpn6JepxRBiMve8Jv3Fs3DnP7ErGo779PE54uLq9xF5y",
  "key20": "BK9HFpmYypch1svyp7buJb242XxAg4KLSLqQYHUkejNpXuMLJvUK7TkRBHpb66ndoRge1MybTpRpE8QqBANtwUE",
  "key21": "2xEKexNm3TLb82iBYUQcQpZ6g97PF1h8fE2ZeMVuUPYnD1JitDzrYxuqaEP3vLjNSfAstYNxxrPBzt5p5UXSxen3",
  "key22": "5GgY7dwYvAcZzaoSucGMkthC7cF1BEobxL8EkcgzHYEBL388SseAHNKXJqtpz291s4tafyYetpJCScMN6kwymfSZ",
  "key23": "n1n7uznvqqMk5kC5i9v9oB3mW7nqyCSxJyHVYQdssxLDmW9kRHCAGv5PuXnnmsdweBFQTyNBtD7MBuHaeqwq16b",
  "key24": "TMHM9S8jwer5Qq4sqek2hhZaVrza58Pro2jGxvFC4ygFoDYFkK7zQSdFBysUUZgkhM1fBjXqZpdEC4pim1fRZ7t",
  "key25": "2xpLsahrAGqmC94YySFF3GjZk6vZEe7keCXK9pcYhhp2xxN62N5giX2CBRo9fu2sdrbZUTQnXaEqc45VHGdEjiwY",
  "key26": "3Tr147aBQQstHwHQqXMubjZrsPfqzjTzmz8NnZqAAS2RPCEsYvA2ATdpDj1YC6CCD4k5ZnDjmCs4t6C5SkSUPZS8",
  "key27": "5yhmAY6EpxLTb7HD1N4GGUTyAmgart68VxHrEBA8D7gDxnkQqHdHxViYDtHE275hLcfDRYBsPfuFMaNcM2CJieY4",
  "key28": "E1xaezCaBUFKfJ1P6iDPxfD7xDQM98oBQDUjgdzZgpSfjgWq9DN6Cyn9zGhtPetHUR9kd1od4QKETWSTYhu4rVC",
  "key29": "5tFR4YBizjdFJzTCtHhAg6RKStbnrZDa8Sj5ySFfBcHCZFj59RECpb3icahVz5NXtSbjL4s5SmPorU3XtJhKHrmU",
  "key30": "4ZtAiD4zmjA7kYtf1q9JLrneCTauTiY7afwx3wGLUsBbjgveVHsCuBYH7XA92ThByuz22UwWWXGZPaedXBUfMhK6",
  "key31": "5oVJa2JsqpC2ttZerWw9ggsXvUMh9jj7PMipfmjhDo4gqs1TymVXxDofUtRUoG5GQoWeHryJgYbUG7t1HvBFcAH7",
  "key32": "4ZyYtW7kKdTXatSB6eYqb1P8dWtvx1NFsUd9xQ1bMgTr4MW7hGLWX15BShY5Zq8LERhrD8djxnJ5gGhCAEGodbDH",
  "key33": "3DDLyoJHLLmWzDqUvkjG9hgaFftn8XUY5Wr6xva9sweG3cVQ4dhEu1nCocj45jhiaBsMUmQh4LSA2ejPuX93konj",
  "key34": "5MzXvSy6iWTzJaZ2XfSYaZkvdUNyNTxmXgra8Rqj499qKAjeSatC7AMv5TsmdeZ6N2iyvJcs4xLWcAbrMu5Dk8WF",
  "key35": "46RsWLuA9cihGZ2kJ85K2TwWEK3MESnv4osikzbUAsFYZfBSEkK7PEiiDSE3ddb2MeFMHntRVTMrHoWvNm3oyHLb",
  "key36": "2QEVLMsU21FQ67pdjwdu33fompVqknt9KX9yT71CNgHno2rJ48r4AUtLVZW8tAdWHN4AR4LJygnxhgr3Ta1448qc",
  "key37": "mhUiv4QZCwQnscf2EssuFxn6BVewhcsPqKtdAghtfVzUMz1xUrAGNYQBDA7cCmTydKsn1dghvpk4EV4w3KWkCwR",
  "key38": "2CT6avefr7Y6T33jfjrM3XNCkFDhsfZ53Z3YiGzo4dhpd7NyasNu5QYzZBfXUREZiwSZ1Zs7mUiN8P5MQnjkWcbP",
  "key39": "5mtTXczJ2dqohYqgomwDegd9DNktnkZriQzfSQTNVrkYqBPzX3tfCAF6GCFT6uw6NYcvgLnLywuWxZfyeyHDeeLJ",
  "key40": "2P83o1MYWdcH2DttQBMZ1vbu1K4gpe2niFWrMsmKqEbxUAyLAFFtPRhc8mDPsCbyyvVvUJgeipyy4btWjLYtfgJw",
  "key41": "4oPPsB3LFiSD37X2bw48LwFxfaHCadGAGWnR7Lg4BGP9sKLw6QAi7LeMm6w3nBShPnakdGtLitDjdcG1a452jufM"
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
