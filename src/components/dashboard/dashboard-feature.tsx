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
    "5GmE5buD3xAZfNGYqzTJ5LULuaFfoEXKbc7zzfCCHQHRcCu5C93UwhCHykh6zmEzCaRgBxW6JKL811r6EY4hmH1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oThgqj39VCB28zLAHKLav9t2rmo5AcsJPo35FDx6Zfo4b39Tgqgmu4NoXXrHeYqfFUWeuK5nXUwKCNdtfbwvR7t",
  "key1": "xqGzLmQCHrd98E6z1T7zMfVnEdDZU2MUZmrP1yAQ1wXpzVu95mycFt7VGWzouFkJwNtaXE7Dt9JN76rzKFGHbdR",
  "key2": "2ntMmFP3piHafCeRr2Gnt43K6XfU9Tth4Rohr1yBvMMLUMPaBpRUHmdWDTUEPaZCaVb9QhAHfzrcBYPngwpt78XC",
  "key3": "2w5PiAqVBE2vQSkdRsjXBNNRzcUN5s94cn9c6UVyn1W3UXEg5sQsPRPRT9H8Z6HMQxNw3pBgvMJV4HEVWp5zBPc3",
  "key4": "4hDw6FQuy9ZFNTkcxLDj4LvLTwEMd7kdVsxN4pX5WAaePCBuXefd4SCqttavAyfMXWDhaGkjTfSN57YKyJmSGw6E",
  "key5": "3JuSJFpo38qG39Xe1q2WqsGBVv2bXDK22S7vKLZFVQMAv1VMj1aJTJSZZu4qeDzsg4DbJrmDoG2LGKp7c5gdSezK",
  "key6": "2q4A36XbJ6oqAQzMmvwrNo4KSmt6DiuNCnVAHeNj3vtkCAFDtCZJ7uXpbB9sy1rU4P6ndt8Y8pTDZtnuA55LdWLP",
  "key7": "36zgniKe1e7bkSUmG7bLxcXe218eRP6ZyrSKHfT9qvc8oLoyqXvhsLMRaT8b7sWoHzVb6KsUrex9UUdKaQ7bHK1w",
  "key8": "38j797FAhS2jjVG7Lyp85hnWoByywcCpfhdoQu5G2fsgeQeWrxQBfsT4V8uxYDJyb5dHv28tWCLRLeJNnr6Qgdk",
  "key9": "4DeT1fcg59q39EimoSw3Rv5ADrK2DktAKPmrdiWpCnjdoT7LXUwQWcfMj5umENrarSnd7447EoP4AJQ4FjVyeaFg",
  "key10": "5TjryaAcC8BDKstqq2PmdKe1N13WE6boGH26KdrTKbeM1SuuWiSdV2cikkX16hhFz3YwRJcuwDRf7RTHwT2aaJjK",
  "key11": "5mWYgTD7LiFG7KDPALmKCJQQnCAEsBN3pM79Umhj32Su5Sm4mbdPfAeobe7bi7nomJHwfb8cKJS2xL2MkGq9Mj5B",
  "key12": "JkMVWWsmQykfABCXNcs8QEv6YCKc2Y3dyKGqvcwoQrbFZrJqFaH1EUPRhunaJ6NyTUzkgpBwMMUh4vA5zytb7te",
  "key13": "4kJm4czgQ2i8BdJx2zXGtsYzUmrZ8kxkV6G8yJ8Z1BurVo5mCGkicVaozWBzZ9W6mqYm6Wo64YYZkhAWWWm6H3su",
  "key14": "2b1fdai27VUfsc57qoN61MhHi8P6eKWLL7opjwxA9sK9dD88LP59VM9Vowq2jQv1N9rzjKrfXoNpUC6dwktkNoLX",
  "key15": "jYRzZAWVPr4KV8o4Gav5UrzxT72FKz2KWes2Zx6LrLa1aBVqgqBfmAmSyBF5LtkG8nSh9kKaUhSdZ9Rr9fegXNv",
  "key16": "2pKbsPBdBmDFmdaA9SxwZpX8QwTGHJenx8yp1ph4WQocvo6bazFqdFFrCTAgMfoSvgVxL9HCb5kDFKcMtu3xVHhB",
  "key17": "4WyHC6PftUGinfLQRzyesbhWvnXq146pgxKqNYoje44jqq8MUUaByAk8HzRHS4mDhJLTuqufesoUgYP5r9YxqBBh",
  "key18": "3XpHauiAmRb2F9MuZj9T2YWnynsK38A1BdMcMD5ujuPiuMDi5mHojhszLFRA14dPJwVLrT7XpDmxRmdUkqEpZG7F",
  "key19": "5dG4jBhX6tJ84ibv1M9mycrpRDiuT1rWuG2wnNUKGKRkKnbEu8YufESKXdYqQEFE6jXBoCmKjLAMkBq2V2mR8JkA",
  "key20": "45TPQB8tCXZiBwzcGwdr7zbTXXFwu69WotRpN8saBfuBMV5bx6AYXGdbch5SMJQQcfiwUvc27MS5Pbiz9bcCb147",
  "key21": "352mDbXGbJmf89DpqoNdjUm6NdNgMRyBawxhwnJnnaNbMNJtQu5RJX9BTj9HDuT1KEH6BGjLpH3cexYLUcAkYAWU",
  "key22": "4xDHF8LhZ3CNZKcJvD8GBoNVryKcr8ZewqS9iMD8AJicSzU1DRLd21AqodNV5SjTeCuYenyBqxxvbtfyPtxMo1QQ",
  "key23": "61ZQUFZ9T36ArVutuH8KXV2SWeDdmQYewbVabBd1WAT9QH5V6wMioPXh3KGmtJaP2ZwJXaCEi9sUqNPWs1HvCGgF",
  "key24": "3oAhyNXpssrhkHoeW1ttvVwmTU1YheH1yaPnVBBbDw87zMD5PMR9LbtK2ZZaWAPfhMvE5gty3rgqVwGLgSKamzbR",
  "key25": "2eBcoWzFyaW4TJo5B3MY1wuctUnaLkWktcNZet4MfUDqFp6KEShK4UVscFrgiAYDAmSukmfNCxoC8SoW6b1aymdb",
  "key26": "4KRb1ULSn9tgaBTUamacQ67e2kXUTPHMAHt2LXLsjABjRHsSfzLvzrV9Bzi5xm5tbfV724XzRA9iPrWhHJdjqdA5",
  "key27": "aPLXJJxc6qDZnBxkBYWW4Hr8n1Cfii1DNfEsdRCBy86TBe8bNeLtz4i8UEg85fvAuWp4RvmprrVf7dn1uVP1PBy",
  "key28": "55Prxw95srPPPQ4rvcVo3yR4QKaZVDpRjrTS6awXtfKwPFkBiEca3vvgYtHhvTPNJtGFUAEtrE7bgvqoKWCVpV1h",
  "key29": "mVMG26KNRMdnMsPVVVvQdqzvQHNLwczAuwZXouQJBSMj8EEt3Aik3TpZZZ3gfkzsbH487DcU681GCf6Jx1GyXCU",
  "key30": "5JkebC3UvyWnRChy9iVWSvsMNqQjT6AekBt5ttuCC5i1qzMMspCphtWkKRLwqP1gJ9V2Sr2C8inYtFa5HxciSjfT",
  "key31": "344x2pT5otKCqHH1ENPWDPYs53XpSxFo4jCdtmGk3LFp4aLhWWS1bFs8mH1hA2DiUXtbW76AeXpwZY3cRHHZQgC6",
  "key32": "fiUtKygaGR6gfG6m1AetWFYk6xS6kzpmkina93ZURSRBUcTFPTjiS1exPrgCS4AwWRHK5PiPB9dHqJoLe69DGKh",
  "key33": "2jAFXBwLMne9Ja7YXjmN7DdKdcH4HcdRSjrU1KoGVEzmMTb5HheGzcq8pedZJV8qaQTAfSeGYDXTwRwyDyN7T9c7",
  "key34": "2x2ZACnEBjnwhuRhu22PUbehEgRhGw2T5D6wd8XUVS1KM8GEon62rMJuCGQ2RKrcwYkTybB3gfnWS22pzBQCw4G1",
  "key35": "4kL39TmwonoJD44QhPkrN2ynumhS3jpwcY4JgwZJxY6dGt5NfnKebMvEK5BucHzVR6JA99MoG89SX4hSWSwr5tVv",
  "key36": "dVtiC3bN1gEqrk3i8ommuu6KvNVZcjaXJjTGgmuNr2HL4xrvmhXhT8gvwHD2ByT8cggo1xuhK4sz3RENuDY3DJk",
  "key37": "2qFK41ZDQdrwJ14N1Vep8DbEAva4QfHJMshvX25eF9fdX3RWDChZYf8iaHfGqK3g5fPxpj7ARTUnHxq6rzXXiWsC",
  "key38": "WTBTe6kvPFFaAMYsKc1A7HQUaqwuihkkGALerAzVjW6v1giJvPKjGEQCTcdErXixrDhaiwSF4P3ajp3escsy8Qf"
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
