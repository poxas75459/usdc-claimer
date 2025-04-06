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
    "3FbGkVpcyrFrYA2ahAiFNYk687rDz9FtP41xwo4kF5aYHeNTarCsS1XKgtaK7h6ony8VjjgeEq8veoCyPn9vDXzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HQCAKWYEUXGnNpZfrs5zCptWyT7c5c15B6mJUjnt5Fc6Ck681MxRNv4Gr62AmyjKqsxVEXJi7qQfhfySmyBdZgr",
  "key1": "3gUJMerwMpDB2kXqRkQSvX9oWsN3LLzRC9698GVhp9eidoeERcJbVczCoGB6itqYpddnKRnt7dG6Nh7yJbZQxbWx",
  "key2": "5s2D5te8PogVn5gM8SGfefXh919kBo67uEvKGDGgemR61zV5wBzGM9mUJr2kkAv9T4HGkXMRqwBENvAB4xkV5MLS",
  "key3": "53FdeCCGEvoAbPeaTDKmK4xxLdRayYnviTwmPoegpWWkvzbgRYAnHi1LcXrWTQbia6RjYbuuDMVndMrZwRebjWDj",
  "key4": "2wPgLVgqWSgNHsgrNR88yRcCEHuHxn1Eg11gd84gWzHtEq94ZHxiXHhCLzpDtBAK6t6DH1mHPwQ1TRh8yjYayCJ",
  "key5": "5QZjRHMQ9Kt26Cm3TcGKeLPHXFaVueoyow5hvt9ZzW96H61HkCj1NaWiEmZphxGZ4xxzVJGp7q4N3YsnD2yBNnCN",
  "key6": "5veh72CGhr3p2NYpfmgiaWfecD7bSHsXE7S3dJ52wg2HmavmfkFGomxuZN8RCPooRYVFEtNNKpRfGGG36YSSZSF8",
  "key7": "2rfQ4SJAFzU7DpKGhbj3EmSNj5mgyiLG5yByaCfDfNA78irhQYPo9ZstvCBPZEUpET4awTfLH7x4bUCUn7G3prvQ",
  "key8": "2cRRJwumJywzPoNSWMKNrjNvPBhre3SMzUQoWr894Ta5PCsbsdhhZq86azDhbrLBSbggcxZ2yxarUhcC63NzMKDt",
  "key9": "2PhQUXRms8xvsAfwvkHMS6LR5Ld17y23VBmrLXzZzHSdf7Mhqf2neCK4MdXSyitBbMMJVyWK5MU9s2FSFTc8z7Kx",
  "key10": "65PY4cntRUTxEjtF5HTPoci34rHjbyty6J7SLDRmjudgkqfGUYttiCca3vyaGmBVaKq1S8QWokWHaXukbqPd4Goh",
  "key11": "5PgYQkYfEVNgXQnUzjeCbV39xiMmSsPkv4W55HKyrWqLy5A3vi2kAcvpyG8WuSReN4KxhysLTTxuCMHajX3kSJpP",
  "key12": "3Zr61Z3mJMGQ2Kz24dTiVkJ2QHkm68bzZySrLxSGAXyAu2uLSZA4hGssW5X7TiEGD4gNjzi8vEVrNyi6rDLAmzsK",
  "key13": "577e94cqjWzJwq75fjrizYLvCtxph6yveb7isEixgCMNPiqcxYfSV23vrDHkNr9u92R1A9H6aTLPsTHyDZjWE8sP",
  "key14": "WswWoQ4NKkTwEuFCynjURCjnx5UW3cDMrFH6maozmd5JGUuUDizMKhfuSooSDFowUxKwAVWSxPASgb96CQ7qe5d",
  "key15": "5nSCwPQMk3pXnXx7xfWikwJfUDDAuw7nrnyjghzi7meRXwVd8Gbq37CTNFyKGcAYFcZ4DUDWD8afgTrzCFpTaStN",
  "key16": "zDnjikpmprsRee7gjEcpKfWLNMAJbm7cSVEvWNyrrNmG2vhd1hRwXrLvWhP5fc9P3iay2TEFoXfv9taRgJYEUCn",
  "key17": "YyLAhtW3324nn9eMXuaErcr7mFonbgs28USvC62uPda1bdH4Zd2iwo27TmUVxDMAuHtw1jdXqgMn9quHPG7NuYs",
  "key18": "63cmiGnGyTsVFdVQhkcPk8QhP8bFMwC2Btzw7ZPKaLysTe9vq1UTK8QrSPvTQc7EwWXhHPTaVvCfUtp9x3qkrRgz",
  "key19": "33ihNKV9XW9ARYwn3k1Z1SWTeJveXRZkyb3eP6FHUxeQa3fxipgvhgeqkAWxYzvtjrGTXkykj93nmRtFBbdgDiJe",
  "key20": "3YUFGZ2oBTbCHvxGP3zrSoBekWmxTMhEUTEXhmCQiaryrHUv8dpQHrnUA1WiiJ2uBGuUcbLYNAYhKR2dC778DdSm",
  "key21": "2jx38zG9tLMFToZvGbPGpTvKGmKzwLZS6HDGeNh4sXSY1YktR7vaUx356VcfaGwB6wLy5HGnouTQo9zdFJxBQMX4",
  "key22": "25KuthuvGFPMG8BiZvua7e8UMiCoXBr1duPkJ12zYJyMRepZXes3uBrp8xBreCXotxaWrpcLrBfC88uJL2LvA6mc",
  "key23": "4UuqsGj2dANbgZC5C5iqqu8ARwNspt6vrRLx1vg8WjXKfUYB4BPupPMMFhwabUpmafyhsp92p3VyCzVgsWvF4ukS",
  "key24": "2jhVcbFj1vgkXEmzVTosp6nRWDzPBemVMdS9Ym8qWYwvUPXCqucrCdirbXkzYE1BZHA9PWHqiNE7uXciLRAUfdSP",
  "key25": "5Zy1i54P7QmffCvgeSHdiT6ZPuXGungc8Bxx31AkighVPPcAmxi1VagiTWSenRZYqRTScjhb5Xj3sEAovMv4AxEN",
  "key26": "4AXtxLsC4cCrND2Qo18G4GfhYxYmAoyXPZYgcXVkuXuQBS1knh54jGfg2G5VrKXQ4Pafi4Knkcsb1AuXrFmaNste",
  "key27": "4QTVjRn5qfoPRhx4zgEFhhrTNGagvthHYwKnfKsju1ELNdCvMP5GGvHU55X7QvKUFF6aqHzzN4pM7Bi4cBPdaTPs",
  "key28": "HU9hqxoFqYwntL1qPTc82HURXgJVt29bzsGXgMCxUQsG4NMTkvTfAyZGP8715L9caHmutBB5Nu4xz5HmSpssNMw",
  "key29": "47SAkR6rrfUJD95gqq7oYJYxiWMRY2Lc99gojBpLBCFooKE1fgWydWpyMVELqn3sJFUotcyHy7nWEn5TKqRrRjqP",
  "key30": "HDYqzSthLpJEdaGFxisAbGNnWrRauYR274n2KaXWuvGiatnAyEJdbEJn4Bekjdvbys9rJGeZiXbfZTuNZ6E8W7c",
  "key31": "2FpgmaMC5GN4pfSMtbYVSNXrYCvV8ULYSt3vZcSzEfjXoUwZm4mP9XM56CDXUdfXpaVyg4NVKnEkvqGtjighujzX",
  "key32": "42ymeQKNqYAn4ZRkYwDeaVJiPFGghnAQqNMAarHpsdZ4TSTGSpriFDrkcxh9JL3EGUVx7FUvP4gkiighMg1tHMxt",
  "key33": "5NjhWqLcm8uwSzwsZAChiHHS15jnoWoWhs6azE7LJbY6po9fYmuG7Ls6UvREiSUNj9CbKH1NBdfeh7hQ4jZQw9pY",
  "key34": "5gyySQndfL3xtuZCL9VJvYyQZHYv5L6cK7ntuLjeZ1JzgKWxEFu95GNWC5PhbgGLueLfJWe5Ngjng6oJdK8W7si6",
  "key35": "4rMEub6nGHUdqibwcfW6XfLtfSWYV7K172XYzjy1Zy2Kr6Jvj7JQzyM4BhQ36ekxYy2DWqBWqS2tRTszFgBYcHJS",
  "key36": "2uHdCZrTUV6PKNPoebNC5EmDcuDxtbzwtfiwbTRcgo96V8mVP1akM8U4YQhVFGjzDUU83ixVUx7g3kiAuGEgmi9S",
  "key37": "27dMEuPFwahoYycqs7EUKEKjpRbixzJ91EmnD22YyKZzNsPQEVNopBxqrYKd6xCUSmgTWJS35oRrpYNYb5UKpK2x",
  "key38": "36VsdMronZy6Jq3YdECKMzAtMFe2CXK1yawcyVWnf5M9qXyrto6j6uSBnhFxRJ8eeMpo8G2G55rMFjufcscqWAQH",
  "key39": "4MxdMkYsHpjZqESGaXGAaBJDXAYJQAZ69CAv9yCMYFM9FR1wQwFziTMvFMJGZtHxiXbLjyBb2ZWvo76jw7DYeksY",
  "key40": "3tyg1u3SKNCvTgAbfntUz9RoZURcARYVTyuYHKwP6rcYN634j2s5V45jnKoWzxrvkydKV2uf5uZvxUtcQuUUvRCR"
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
