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
    "7JEDGdKiJ9nrgK8b4t1E2mr6UQPWg12FxTBbEQYEZsPWDHLh1d2k3tcgYQiBzTEkQez7NThgizktANb8aCV57Hp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YNig1TFz164r9Azv29HWyYyPX8V2T3GYQzverSAtMYPFtXwf6SYL8mHdMFUZWRU9DF6h3zJgYWLYVDjyShtwseJ",
  "key1": "4NdijqsgS1sEzpWhgXZta4dHp8VoYFZwKxLWKiGJs6fgdUou27uK7BrYeXR6f1qaAcXDnhBBtFmcV5tZ6Ns8gCJz",
  "key2": "4BchWpSr9F4xVDNYGLGXHAmKC6vZyweuZSRgNmKtCxZkiUGxx65L1gE2PGJ9i2Y8gDp7WHp4EbpHtcWnXTqBYETL",
  "key3": "2rHrmxCTSJ5AJdzAknHyPD1WeqseHBXyBFCAhawQDfNsY1mLBVVFPKiLtapetWpMXsJxPLBEhuSZt53GPoB6GFxZ",
  "key4": "4pGfode8Qi9utUx6adKjfHcHTPQ1ekUESH4yVNpd2DpVLSrg4qCjdYw4s8gEwyrqRNpseBLezTQMc44haGDr2Ptb",
  "key5": "5rqT4kbSGm11SsqRYdz5pHJPtVvN5fbSme8eCHiMdzxSkT72f7kTEgicxn6oSWyMcp8JY6k6JHoWYzsAxSnkwYoQ",
  "key6": "35s8Msuo5vnoeKo66A3xFsL5vJ9LQ4iiCki4FsuCVVrW9HQy2oSMUgzxqoJy9ue5DJw7BBoygjabncbmsYYTFe1H",
  "key7": "4ERb6eWYWVvpLLUqGpR9v67DsaZek3XhcNeboNu2HXCtYAYeeUcBaXAUebdd6KADKcvzb1Zy2pwtoKYtzQVDLSqe",
  "key8": "2ZArwEJKxDVTk8AHCEtS7ZtXcS4Xvn6L4uo8WhqAF94iPWVDuhu46wouvV2aZzpRFRQYzzRpv5YEzTu2yAwBu79o",
  "key9": "31cQAaVttqKr6szxe4NSHutmXvka2ApdvBmceXgJ3MtF5FW9jovQG1YFgzGaozGbjKMkgXFcHN7JnCYH6Ub3RqGu",
  "key10": "4NjRTRuboae5nxRSjYf7WmKJWr9N3eLHgUs2hzmDFgWusHckZikEWnvfn6rV6mEFb9eud31EaBy21AKJdUthYj1i",
  "key11": "2RHHe85EHaKZtDbe6jVHDvf64qa1KwsJ7dx1N28LohZb1HLn3Nw9pUaScijhkNDHwebDRhcKuniKkCToBMLQZX5d",
  "key12": "2ws5CVkNQ3GukzXSWgh3hsXQ4vXw3QF2UqFKsPmXwmrzKyyfzo6wdZpivxeLyvhEcCXpnkVsaH4MSAbDvpGFYNDt",
  "key13": "2Kvt8Rd1X9JZCp6tWPuAvQs5xAmLaL6Mpq2s3tGy3qNap9rbr8iKT8PSXkxJTYsgp5kHnHYDQ7vpjXLvzu1tm4KR",
  "key14": "4zPE9vSGdy3Tg3Fzw7A5KCxj9mkWoFzdDbiopwowFEFbbkPLdfmhwCeAGgLornRwiRKCWPJSmx2jxjBPwdehb9xM",
  "key15": "2jPaPtXEceJm1oLfkgAA9VK3Cob6uypNbmhsX8JRr3VgCe8RZdJmXZXaC9zGa6uxqZ7aaxmUNfEEwqzGcZPk4rmE",
  "key16": "4eS2PQXwJT19kFjPg2ASjXtv8opUeNAZ9fLauDUf5RLbSjV3bL895Ln8iPS4wpswGNaTNME1pBTZLsB11gscLyZZ",
  "key17": "5Asg6apcuJQGZhmyqduc5EN4Hv26y8zQsb3xFzHTLfsgcDksuRMHgeo1YKi8WDviiGaZSH5Rm5rSDNeHiVyeou1o",
  "key18": "4UUJdnwRDCWTkNLQEqEdtPgd5DVSY9G2AszHDawaa5FiHerR5qfKw8e2zf8bc7BbRWqKWr9kqpfo4oosBby94j4n",
  "key19": "TNu1SrMUYMtGaTEHUHkeDnriXL56KZLX24a6YzfSNvaCFJJ8CYnnCbDT3huWfBf2MFCJUnBD15YN5EEewbwwSxK",
  "key20": "3zAK3V4Ub422eHnE8d56h7K6FUab951EaHH5UDAsJFjvyZi9nH3zxqGQRgSwTzQFov3kx44bRLAKYwU5JtdZtqJ6",
  "key21": "2SZuLJmCZp9WgDKctk7FqL8nMkj7oqCj3qBLchj3gNqBK3vj7mXu9FWVwKg54jHW4bstVe1M8m5Ai5wQ8TC2nby9",
  "key22": "4D3PfmfiUDxRspyvkGJcsCQaxZTvmR3DkY8NPD9N5EkQqpXXrSchccXM5xZoGuCU62GrF5eFUTyMqdK7tuw3t2KV",
  "key23": "2dbC6HG772EcVRUucBs7XGDiLfJ1cv78ApDsF1aP3Xc1EwPutbVqMtDaPwedSMqQPfxV5EYJDyDA3yY4GGofiZTH",
  "key24": "4e294Jcdw8Ut55Jd9D7dyB71E3Hp98Lf6u4AqS5VoV9f5sbEsGM3wwipc2m8YWARoUvcJGuctEWRVfQ5rebkWdoM",
  "key25": "gPRgKfAYinZA8NafifWkSUaQ5CcHuanAoKJAryEFn3hSwyUD2XoKL4ww5NAsAJJRkfJ3KnVzWRqwdW4bH5Vz6KX",
  "key26": "5JfKpbSFJaaf2SGZVqVwxxjbPPxb6bpEREJhvtcH8NG5ACWQNBgpyf7e5AQFMD776JBdXU7pSgC4ibqhTo5YSViL",
  "key27": "4PGgc4qXTjy7ivhuJ4u8oH7GnjEneS1mqiky1Pnp7FQELriqAwqp5X28G5Gm9X35eqT4DBK1KUHrXzct2oeVmvP2",
  "key28": "5FEajZXWgv5nTF8ncR35Dxom5wRkZwqgbveyY2T79EFAheBTzbWmxKPEGoJLoEapvnUQ3fCLj3AmGv7uoi3Jy78c",
  "key29": "4aDF54cgNoqcijGGkq7fmoLQisk7XF28xMkibNNX5KXkbS3ieuCAQJuYcP2G8DXpwy9cDbnFLopnVX7u9PzZKrCk",
  "key30": "3UUteGhtZ3ZuaAnFZ4oErPvAuzE4z3BYcxWuYZGmL3UgHCCfr22jtzSgDFCcUxRevvFXfSvYSJjz5WwXVuh9p61A"
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
