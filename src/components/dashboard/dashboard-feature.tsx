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
    "2xzjKoX1vktxF12k2pZZCVGsC5F44VvAAAGQEM8Gvgqf6kd3AEP75FwZb1BdWpbPJKzBQFiX7LfmnxVuAgYfe2E8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vecBaUsqrpmzpRzEZtCz8HL7k9VMTfvmT3pa5JqC13EaLfuXpQkTziFA39EuNVtbvHM4ypogQM83G2eisnyBqUq",
  "key1": "36gC9AUVfoE5VCegCs3hvd5Ft82fxxeN8Us2bA1Yux4Bby3ARW5fQHtVud3VapR2hEXEpwwExr4mZ2v9nD5mc2Bv",
  "key2": "5T5afZkmG57DDsNGJwi64gVf1eetYHrKYcUnkvS9E9Bkd5rwX7C9NzymprLGFzj8e8rbnRHAZ8TLB8xSzLgf96q2",
  "key3": "4Z5FmVwcB6K7rjZmpSTDtE9vDsofZ1ZhS1Mvo4c8jYUhdRFabbZ9jNBK7SZGorvyEkjLvVNG6Ly67oUdMncsZrJt",
  "key4": "4dQGJHGMyUPfBznz3VopKmJRGYdQw8cP94yedgBhoHAm54J1JwdsrjAuACoQU2Pge5gb7QUP15PxAxJBcEBai2n8",
  "key5": "5YCbdWhr4AhgM3SudHhAPLQ4M15TmWKhQrYWNjMXRgJbb4DXJVKpfoKeFCD7rw6eACSi6v4ptE7T6E3NAWfyPNHr",
  "key6": "2MAYo9Gc6h9LaxY6Xo8myuvvJ3CPV8ghCjDzf48WcS2DrVvexnhdTwRZSMb3N7r4zA1Hu1feXkMgTSVzWK5uKSgz",
  "key7": "3CmV8Sq5mRprc2txV1uwiKTzd1vakhP1XCtkjmakCfrcToYeLHN828rFvvhhrWRzbmmy9j9oGY3ivfcErt7LApz2",
  "key8": "Rgc8TrzRJP1DdZNQPCEBqwCrdHRyDcdiyQGa4Gp6HEfMgbahDd1yxR7CKTSg6ADw6PGPxzsR7pJBdEP4x9ykk7E",
  "key9": "3e1oDvPJDqcT85v9e8DXCtoRU1uVAXjHXQ9cEMjj8BVghxdyWFLPnN9Pp3Euge7Dzyr2VJ13uksv7N2FqUeP3Qg6",
  "key10": "24KrPyG1ifpsVMH2zWNS5X6VaEYnuQYjxAFQ1BkdVBjffbhadhp7cwjNg569zpKUeDgWTkLmeJ4owwfL7MnszWsH",
  "key11": "2zUDYLjJrMCo1kjFH5mGugBUrCpQqEfA3575DVoEr3u7BPupe4SCGzef1unKDVNoaXTmNdPRWcPP5CD6K1DBatbe",
  "key12": "3NUP6Ug4insBtQvSK3MXgzADKtD11KsCYFzz91uXazmi7uKmFrBZVsyzvgT3GqT1KBWh91ZUPN12JiQSmWUXypbx",
  "key13": "3TgLbknAodnZLKmsrLmpUHEq1AaJBAJGfGidQ29WaSTfaZHa8SuMi7obRnaw9ydAL1tFEqjMCbg1dQhaedbbwXMz",
  "key14": "436UFLPTcG43aQ4vwpiqyhdvCTfBpm1EPTiEb4VyHr6aTs1y1Bv7Xs2ZQK8rcmyow5UAeN9Q7WShsQTExD3iBvTq",
  "key15": "539Zwyt2pBbU3FnpoVVBnvHZ2PD264MfTsQ5931J9QYPviMVKUyEFcyucwiaKpkWDMw8FfGojK9SFQs3yELaUdH1",
  "key16": "2XqmY3Mjy3ZHVyNxw784KbAhkVXh1AXWPZW2P3dQ8CusD99kFiXTvzok7L6faZG2RzBxr9tTicRpTAxDCgjLrgwK",
  "key17": "3RkGJXqbk5WUJr2ALQD5BAbTTAKFq8YeuUoKmxTqC9fKGgpkHGzsyGLF9FTGoGrfF9aBrShrxdRSaqNGp9gVn3Kz",
  "key18": "3sVizRWPWRdW4pEL7xLvKQ1Au9rfY8cmmY3m8AsT4bb4Zq1WkQ5HXF3hd9xeLLa7YMWFtU6VbyG1Up3cjMFFMrHZ",
  "key19": "5yeaMJWcu4FHKzUk7GTD4JTufwgPjUN5TEmQo3ALXCnxPD9TAtpWG3KagWRBjPwrwrerwjL2mPghCxBrrQnCKiLH",
  "key20": "2WssDjeM7cSmG7Xb2w9D7vpcx8mfYpSwDJncfBPjexrmSj25LAri92RxRts72jYum1U4zWPXXcuh8E2rnaZVsKmg",
  "key21": "4EjBMaY3mn3wTeZHjTg5aDpCTDntGLq333Bi3Lvg9wcvr3dheDCsCsXzv9FBNyYyqJSP74vXbm3FVSRsJjXNrZEK",
  "key22": "vxk1UFJAVhHcL54YJa2eUVYfVfsP8GhY83Mx7XSriwa1WfsAAomdMj6n5wC2a8CJKVcBehgcgJjhGAHoCRyJTfi",
  "key23": "3qyxZXMDhSGro2TdFrBEfuepCbuagTEzZwDEz944zz9WHmEn6Q4nSp13spHLHj2JVPpWd4byPMjh5Nzq95p7fWSZ",
  "key24": "85VmmJzD4TZk6tkXRWUv3GjefaL3nPfTt4xevyDBpvGYuMabkmvUV959F2PYWnsjQHPNUfnroRK2FZPkLJRaXLz",
  "key25": "2nUbGZyYiNiE2vScK1u3AJr5iuKxbvkGkwmycyvyaMSUEWZP1dqiyxUzEMv6fWzbbGfLwBzD5yBxTcwc3AtUFFic",
  "key26": "dLESthTaZSv3sAAPgt5VszMZcMTmEw8yTS4dFghNoAub1kk8vdHJoxmFYJCW21nx5Ke6PzXHQBBwF968TKaiS7u",
  "key27": "3ewMA5Y7YTDkNihwQqCQhjVxE18uG2m5wjz1SpmSCjmii3hwdPLhGQ3MyhLToMoULKkksiMokexyVHyJvdPmuGr7",
  "key28": "5Q94ZYmrxuMx8et7h33aQ4Q9KQBdbt1BdfgigRCz8b7GuC5un96hg7HmvMaCcY1tUzunjukByGsqCJ9SL5cXwyBM",
  "key29": "5uPcPaHekqJvZJDwJ2BARuq9LHvfdmA6AyNP1ZS6RpgsLEjKjj1Ny3rNjA15D16vyv32oyAj5q3acBwkwRJ86bUg",
  "key30": "4AXkmwdsbmUcDuW37JMHaJcQ9sJcCGEgbEqR13uPmufQGWW1YeDnXvqvQSJoAQ6k1ss65PRMPGVTc33fLjxDTSdE",
  "key31": "2EtiEmistntArMPdx6chUJkANaffZKZu34YjRD7DNQNMszukPTtCGiX2abDJaJ7WEpB1djLV1y9pXRjEtQf7VGFy",
  "key32": "4FRKUJxnRA1y2SBcKE2AHy71mF3MJ1B59qjc4aXKCdaYVMhtTemy39AdiHH59ytvza757b8653aCDj9EcMPSpZdT",
  "key33": "5SbkVHaLBdKPaNxDoVhzgNkgLiC5AgQ1hshr2uqNzbrWuoMXJPGSAJ9hS3wXwv2hPrsdaf8NkkTbj38TBQEYQg9S",
  "key34": "675YjY8w4Q95aHhQjunaq8NqwU5jKC4La7sfWQU72gt6ncufYC3i8S7XNYw9GwySCmohE95P3HK3u8HXT2C8wKmP",
  "key35": "TvHVzSpEMnrVzFrFG4Dno3ZoGP3NAXJz6g5tCVqx1x1LWk4AREEcQsBMHDDRbMy9g91mPege9xTy9qTo32VWfzr",
  "key36": "3ZVmsLcASxvcziE8fSSMSuLeHu3b6X3cJtSoHmKLGHuaLHWCHbLa22DL9MKpHH3hdVu4pWMwj1ui63TNbS1qtmSQ"
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
