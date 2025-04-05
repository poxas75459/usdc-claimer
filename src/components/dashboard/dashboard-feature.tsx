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
    "3CScZoRqmCi1N2sNrtoQzS3GsS32saphXvdo1C35q1cRtzk558sKN2WFhfFYhoDVhRzJ42ALqZ7WLqijCiS3buSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NuuuCqCNkPU5y51bq3XzhhjjfTVmbwPHDKXXBskLKP5HLaDHSzNuYB15BAmcFLFxN61xcjx8RhtKKu6CSm66DKm",
  "key1": "5emGwXAhjzwYMTUMkfHBUp1W79ErGNJVdShArxgUiD5juxQsRkvYqXJpiW8hSY5iyXdrWKd7QE88cmj3V1HY81YM",
  "key2": "67BmRXV6WSE8hLoLH1L9DQvigunXRUC4g14QikXtGrwrFkXwuGr744JuVz5GL7MjirjHHC8m61sqwRS57GkbDcMs",
  "key3": "4qemAyn9cB2SvbAVM5b9BVQQqyEx6Wiy3ShJS3V5kPinCkYPQ5RxJy8cLZXt47BvKziUUzWsyLpsYRddRGYK77N5",
  "key4": "59rMiswv68LrWsX17ywJ2yVS6wd9mwqaSY6adASqq3qDaciU8K6hpYB2EUSZhLyJtb4MvpfmaDZYVV6tmMr8Htkq",
  "key5": "4NnZvzoquQihGwgoaJAs7jZmWVVjtkrZxCv7W81EV4NeQsqmYcotgrEA7gCzo99VN9uothgc5Kvg8JyRweW2xf5L",
  "key6": "5r6vfrHk7yxLaSxEaWdXVQnz98Soq7dmQsL4bvNbQ8a4b6Lq6SFDRcx8rZqTugMfN8JDbzrrcPUhqQBks8hzTiNW",
  "key7": "49ZtUAUUmUnPUmynBAHhyWHE2RnDPTXSoWME78tBDVvuhimCyhWKB39pNjC3pUuKMkBNkSonsZa82EbL8W13nWZD",
  "key8": "2M2GTh4U7tw9oVpuGzBBVffQ2SpNcdnvWJtAMnZMwaAsgS1YX2gGj5gdgpdxorKv1nZ59XWT4u1SNQdB4BknwYoH",
  "key9": "qiSv2QjGmwqCBscAHEGRsD9bcG544pnBTQMujc5itxYzBeY4zAaaEMpBVaMKdeoxWyZGkVjpZXAb2MqM9pq65dB",
  "key10": "3sHEp7cJ79V7gUNTRqd7EYMkRDLVVSsiuixCtRWufcJ9y2HnnThx476VPWcuyUG5iQka2ujGpLMANWoBNDF1BMLq",
  "key11": "3eCqverYjfviAr9ckDDd4QduiZRuWNgoL8TZnEH8B2GcQabEnr1fYm3pf3Z967kh8A1PVjoS7SeHvnDDss74uozp",
  "key12": "45wVKWmYRXsHfF8WmoK41Y44m6CEriZuuB5GugjEAAGY4FGFKuhL37FhUeLSxa9aVZQwdHucQymHEjDBMxci2VwH",
  "key13": "2wV8zD48sfM2z2FxAqakXdmLLQkF6GKsHu5shrxtWbVD8WngCvJzALTht4GebhJusBu651etRdc3yQvZP9yenxhh",
  "key14": "5UxBjocqUJrHhfusUTvdrCjTjwjCLyDMgrjo8dNTABBTJWv3gt1UHYdSKgPQgqNdwum4ktKgyriv1ubuS8RuQxFX",
  "key15": "39eA5uPxwKUouA3FL8uRZnmMJCy57qSLn2nQfPeBvedcB6nfAmWXJtZTgnRyjZX4mx5XX1KEwAyzZsKkPBJ56wj8",
  "key16": "4ZKUQgpiZBquPw9HNnfUzt89LZ9dVF6ViAgNBnZQyHFkdqEy97Nq3TxgW32MpmCsdhCkV777XzKK9ozXdtNXFzjV",
  "key17": "3yn3XjCpmcfPDW5FHoaXWmK1aWzWWbFt5XnzTDG1TyeFNJYSZxSsFf7wbD1cf86Wgb9c6seou7KVsbRrD88rREf",
  "key18": "3YYzh3NC46KoRB59YsLso2TwF43Dhy7uQUVHeJwK4iA2xoWZ3jY9iN57omdTF1KH2sboBTRadJPWt2BpbZ37sA4k",
  "key19": "5o6rNAFmGZmU1UtHzaKgUPmcm91XCYkXVj7LWftSzTDaYQXdPeUeXY8mRXoDxMKJpqFoKyEgUQs6VxHsU84ocYHk",
  "key20": "vNSxeT9MSm1rXYE5tJrFgqCzoVnGxqje6iYt36syJ7FwCuaAL33tsUASoJBYh1ASCarz8MY5eS85YLUHQFnNV6M",
  "key21": "3q2RwJ8Tq7JUFXaTtZBv1f2EMSVy2ZTMdTdrqsYLNbnDfawNxdyUve9xJx1Q3LrbZoK7BFuZX8EP4huWwaqGRrmS",
  "key22": "3pXnEyfYMVQhKi9bCnpn9rZ126St2NRf1ikz2Je3Kht4uRGgvoMNqdAKSMpzeSHJWK9BnV4r2P6howb857JvH4EA",
  "key23": "2nDrSRQ4bQCuQsPjPtZXmn15WUPeva3DMRUnHBufGGZJLEFTmnJmQAUh3ECxfbQhfy7pbRdB6RPoABEDze4UraBJ",
  "key24": "5YyRfJAUTJ3hAQFdk5djCYAUm1KonHgaFwa711dPArt17Yp5NmFFrLuvST4A2SiXxtDixXUpqeWt2e3xGDXvvbQ6",
  "key25": "4hCNRvwjx1kktnDaPeuDVuKcCjrPcPLMPKjf4X8ggUjEJLUaPxP4ea5eeJp6RadVQ89ArM9NV4ujugEs3gQJKtKw",
  "key26": "5qjw51i1xBbZ2jX8nFMPZceRLrphQnBeKFeARAza94zGS5BTYhpQWdvJJ4DGcw2Z9h1etruStpekkNGy2tNm6ZDs",
  "key27": "7ZfYyA9cttkS2Z3Pw3KwqzsdxeAYdAesNVoWmbYGRrRBb1HnXGeZPVLi9zgYp6e6AF8YgCHXZJkjusx5xT824Ws"
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
