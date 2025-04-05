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
    "5gaKDEPUW3X3Qv8eCsh4cVWvJB4c1Rq9XJbNmgwaoBvj5VA5KoYoHDLNLGMfdaq9tvwRa81mYc6Swpusq8WJVyDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iQbzX1884RvM8eKaE6e7YTeQNnhQ5DMvchBb8R717XeehF6iTBE9yM2V38yYxX9SnGzDiLchY8tNoST2vbiGeXx",
  "key1": "4vKpyNsjgVZdnz9ZVZcGZyZQMi6C3S93XgEk9YRCLRJCcrkGDd6ZTkMenTJv4sJYXKTDq5YHwsZ9KaCMjX7zrci3",
  "key2": "5A91SXojiKiNorCPjRSHd18NSLKhREGc8Rb8zqqqE5ta3pwtZDGTbBXQzE6RfTLbKwc75Qx8NaVb9nfqgedXRicf",
  "key3": "2sePTJzw5S3PgsaXZoQwAuphN1ScDqT8ML8JUeHtHYU5PRPLMAYChhvAAEHSwtWMyNUhrLRzKNdUCv3Vp2VkACqy",
  "key4": "29ZVuoT3o3VBxPmwmYzwHVLBUdJ9GHdFeGNK3oS6dJfQ3zfiVisfK9w44tvuSnPpZw5Ljrb5ge1ZvVoJLUupQonA",
  "key5": "3NEwXtb2dL6HFJRq9k5QHh4CXNW4E4zpcmnr4gQSdwvAYfgxeiqD5Y5zT85Z8TsWW7TGJFeuMLqwMvu8HYiYN5RT",
  "key6": "SCswQMtTgVGKPTSLrmBDjzNWAUK44j9VMKmE8GkSUriMMKoC98jMdqkJpEQCZfx3oDqhPYGLWQ1BHG1zofvoZqZ",
  "key7": "5DoorQ4U9ekjHcZamoeE9zzexQgrohxGLs7fdH1J6TPZ381BjEKdiVnv8mREDtPu3wayQBDqPriuiiSeXVri7Xjb",
  "key8": "2tY92D3fn24EhYYCzrMu8Sj9G9dxBVmawgAckMEN7WR7NAkd6qoBQpBZqLufepsFq2VcDaGpEtmxbwzRrSsg3QKH",
  "key9": "3uBWLZw3SWnypcGXJGAbNcnRUL5rBBHnR8XXPcV3drb6S6Ukvk29n1XN8mWHyLNUoRJeLvcQT9J4VJJVQCzdMgS9",
  "key10": "22Abk754h9KxvwcFUY6KVuu75XeNTysGiymWAEJMaGpuRoWP3sJA9MJPzKRfg9gCeRZhXbbDWMYaF58N2D3FBfNx",
  "key11": "2TGdN6kdqWLspVQkk5Vid8cb1dbnUDAREmCUA84YJtDAM4X3ZAezDfGpW7tZQLjCjS5J2rDrgZC3REmPEgHDex1E",
  "key12": "23QKpyBRVjnDgT1uiFt1tCBed2X9jb2hvrnTM4U9KDxjGDfwGJnF7CX59scbtfyhyJsAMQFmHDjD8R7mhhHJ6UMm",
  "key13": "4dbTwm29FZLjDNAVk51rRRmdq136no5GHK8pU1ZJixTVqx5AWSpi3FxQ2varVvA3U2RdzCxpfpWbjFDnDxCFzUuE",
  "key14": "5zPBEHJxMpHsYAga1PJKCCTjRW3fTXdotf2T2UgAJ8wHoHSwdCYFurFm8Dtp3wwQJq758p6TzZHVyLSp4fW7W5A4",
  "key15": "3roq9QDezu4PB1GupHf3LUm6TAGSVTBqAmgGTjpdmpn8FGMivkPRCDgMD29815PuMebUTjgwN6MeUVAWgszbgDsz",
  "key16": "uuLF2HRGZmKteq5nCaK4ShWonp565YSpdF2LxNWvnLPinp6PrroZrzS3BVS4GAN4mBYMov3UithyNnPUUZicxvR",
  "key17": "2Na762VNb4J4YcPXeVXMc3Hg9hW4moNuNu93LywmjkYnniX5uhw7sLg5qn7eGzn6mLjn78zYRmCvT9yAus1fwQF6",
  "key18": "2xBXYWGLPgGtutUT3JFg5K5DRP16f4XqwrvG6L1US4XuczimTi9bHvXsMPX5m8wz2Ek5Qoeqaj27FvZdYTgQAmET",
  "key19": "2MHe31KYdMvr4iV79yjcD6g1n3H3u2SqkTLREJSnCs3GnfDzxzQUNmx8KMAoEPKpY3VwwLB25RBqHpw11jwJcPmS",
  "key20": "Eq9o3ucyWWbPRd2KidPWNvoqjdipqFfvzDxHFbgQbE9eA39TqSm93YKwr4JmPZNcJoqrxhmdeNaL8LcFffiQYZy",
  "key21": "5bJs7BvNgcrcTtQNmcCRr1HLkidUS4VLmEP3raaS9kY1r3JqoCi7P9JohaBtMfd3P2NuJbougAAfDaCNEwWzwkvF",
  "key22": "2hhG4wCjFBvcKm6EnqGHfoXv4SqFJG5uU9gSrtppRye1KGrUupmXBJS22sPrEEfyuyC85XqRphtg1tYMU4b4n7H3",
  "key23": "5LRC8khGioWDWU5RbkMJaLFBVPeArUP2B28J9fwseaytjhfuR6LU4gy7oXkeZk8i16gvfxGYS9gbBWrcgBx4a2KM",
  "key24": "2nGM4WW8RprMm52125yrrpSxaxNFioDfqPsPqbybEbdnd8MGMZsXxxEU4ifoaUzwTyUuHSpU3NDCEgBKXhN4dK6R",
  "key25": "3dQM7EZV8TFGsAUHzWRU5K2jRAsqwBdEF4YDStDJmKzBEarreDTwPuA6ApBc9MxT7b5MJmsaPv45a7DY5fMjcgsH",
  "key26": "26cErEZtUoP5pCc8GUbBkgnXWiaLEUUR6xr4rryoDKinjdGLvuAfuwrX3SjKVy83Qd7Y8fr3k7yyfcCKUm8AR2ta",
  "key27": "2QbMtEYfdR1eZx7DLb3jxtUTeLZm19s3QH3e96so32bNuPwXTwYbYEoiN8RKg7mTMpxVWcfE1oferJwECpEZnqBa",
  "key28": "3dEhE2xC17Bewh7t3GhPQmi2DzQhmeSW8vhQaAfAiAeisywN87CakCN1hAUdAu5SZ7faAa5kVTxnnFoAhxYixMU1",
  "key29": "5aXBf8iTwu8UdcPYRfhB4oqTm5F7g5NZ5dd8FAHc3UXoHcdc4bBZc4C4BBvFrUYx3vW2FF4qXL5Lr8kRbiepk9fZ",
  "key30": "5ftLCwFA6k4dgSNvuYB1Nrs1PN3qeHWLZT2a5w2Z1rJeymaiJAjsGruipFju2f6rZ5LSMVaBJU4QdWeYajZ1b1pv",
  "key31": "2DZTmT2MYqZ9qYpEXTpqNgNm39jgob8QAzJSqYjfRqsNfAVjAxKakichTNRzMHKPLHso8kyNwmv7PQRe1cm7skvS",
  "key32": "4KhXKk4USVRrSrwn5JX1n5U5ahHPEUoauC1cAVFb1A2b3hm4qxKHLwJPji2PAp9SU8iWq75pAAQCUD6iinjm86wH"
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
