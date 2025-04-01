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
    "7RJyp5f8ogEnayBK6XPanHG3EmespjnpKw9gFDZG8fAqX9c2gx3akTXYHmRT6LJPg3ShW3NvwvNN3pXXc1qEuLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vj5vFLsiqs5Zb7RF7gZSf3ZJmBmQa62AK32HQGXjd8KysLXoUcokFcdnCo2aJtaaknTzMNrQSiEpYCtTZXgiLkM",
  "key1": "2HFRdCedEdR9fi8pBnW5PXZ2NbZK9NmKDL6HKXHs71PdfUEHgVLhMcu23itMdf2jz5VmyjBAMcJZcApZCNLZDo4X",
  "key2": "5DViHhk6qkQMHmGm9KW4VyRZWDJLiAyJLrp8AamXqBawtUXWGqHPzAwoznMxXyVZyqRrg2u9ZcL1zmouMHRjhdZe",
  "key3": "5rogdS3EqZG2US7hehkdg6jiKgQxqi3xa6rRA84Ha7KH1MW866EppRReucFVMNTGSvWusdUZWeAwpZknxtA7fMKk",
  "key4": "3i485ar6Ht818txatikVDtKi12UjXd74BdyAkpVorc1db4ALqxfJwahr1YuT8viBG9J876snjuKLMbSWQCP381Se",
  "key5": "KaAqzNDvxj6kA6LQSzFBsmqa2AbXL7nT7EVX1zJKsLw9mPnwNBknT9nwD6TCCQPvsXNABJQ6urytKXgMavcvzP4",
  "key6": "43SoAFuZBQSRCVCnJdS1vUPtFiDgepjCpFmqq1BKYF29y8APjyfb76MhyerALd2fLgDjVy5v4NPzGDPXJ15yE5e",
  "key7": "4QHjYbSHxfoVxemZcU9YrPWEqbf6DLLxb5rHLMGoH7SQi53deVsuWLHzYHsPJ6L9trEDMe8sMNoJPiUKgW33XuxZ",
  "key8": "5vCo7tBc5zhWnvx7E4svUcPC7iLbHaWMMF8B8Hdng6hDc7HxoCPf4rdg6VUpbAQrzcF4NdRjwpBM3Tezx7CnvZeb",
  "key9": "5shu5N9AdUFy8L2UjW2B3B2JPa2DVuZdAYmgotCFxG84JuvfJRB4nGc8zuLV2kf8v6xowNkbUb85i7SADp1Yrtta",
  "key10": "5ns8PpFUHCmm1ZahHpZD1ZmRE4LmmggKvYCYuCAFNSHTEjxLMkGy86AhuoY9VcwRXxuYPfM5PekpKq81KH6VaNHK",
  "key11": "2aUeWZJWcLxhnspDzyh6Lx94xhPFr8HRnfg7bYQK8J2SxQiDa3TXxYzGfxgj1Lcp3ZpgoKoz2x2KBBDB6wuWCXxU",
  "key12": "8w1SvtVDg9kQm3uDj5HhJQx5FxmKmTKUqKxevPHkUTNjxCrxkBarkDK5cL7FqnmqxRf1auL2c6uQ8zd1u6xpL4E",
  "key13": "MQf131zD2BPvAdNdVgZ966ykmvbCchQ66dmnhK5iMUfNoBmys3sURHC6JuwrR8ahJQUKd9dmheKApjQcutovVDV",
  "key14": "jGm2CdNVze5b4cLLR8DVBk2YU8KauESAhJRuaHsteqF6vuro6LWdeWUoMctAakXX5uZ5cs9qxdA2Y2VXAev2rGv",
  "key15": "2x3YnKbKB6mgTsYfU45H7J3NKxm1G1VLSnFz9Phxo2XDh2zywZo3v12mzaoSXNidgZor2rzDAMoxdpT93Aqgd6U",
  "key16": "5rA6X4CjkLVTDs26ps19pfbCNkPyVZEXPdWw8BLxsDoKTMoX4uT4P5h1oYamK5JDA57WRQtS77FSiqsY2FSwaPLX",
  "key17": "4SCEwqVveZusaEmPiZXGPG7HRW7ZNb1CK6bcAfWnDWikmFqSdNxF75sQF2VfuvxwxPxPVaK7wjtrSSXbxmZLkj1g",
  "key18": "aZ3GyhvAmxnYRiEztpyENEiqFBEPe1vkVT1UrHEQP8z7TUxE6ydQuXy4CGrSEGL9fY2shEFu3xbuz84cY3kHrgm",
  "key19": "3V6QHqUVvaG3nbymgzbZTUt8JUW8M76siEktFhpeETThDKHJXm2xwkAQunjgRyGQYk4QhuhFcbP8WJoHqePgDpdg",
  "key20": "64tVmfsyRZyayAx9n4jbZdxDAErME5WGQE5A8P1uXMFeb1tF7CkjYssLEmQ5Xv9vcpYZTzY25aHnGcPgee7tmAof",
  "key21": "39k729CyVYNw7DH3DAHsvrgopCscTAj1bG5fg324AizipWcynFAidaSrdz3Kj4D9c8DG11Z5fLsjLoXoZC61Zn8",
  "key22": "31fwFx7dfKwRiqFW7fGi87KHz5SgwARfsMoz3KDwuXjBhWf7QjWRi43aXnaQcs8kyxNwxSgs8NgTiiP5gWtCUHnq",
  "key23": "B6zqZ4dH5sgAw9JXUyzrr3QsgMxFAmfw9RE7kbvnNxY22rA7rXFtEHc5k1nPpdqY8Ku868vgEsqCVbnyG9YFTWw",
  "key24": "3UWvtft3FNg33ZEiywHQtUDbwUrXpLA9g1U83BUX2e5UsHwpY41JEtVVPj14ABHDUh9qy38y7NtWm8VEx5RJXkHY",
  "key25": "2hc6GjVi3LmispqaMRrY1E24yFjCLRhHgneMvzYYbEus4cgmg8SNn9Z9gkrPNioup9Gf44UtW97c2U4Hrc9L1Dou",
  "key26": "HUL18riCaAQ3Ci1ftqiYHMWxsY8oS86DrEnfVP2UXJTQTzz6fmEGEHeBH3siVky8W5L7qiMTtBsp717KKHduRqn",
  "key27": "4JRAQLZWKQDmt2bj2F5tmweBWwzGN3X9zohETM9j2NGSXxC57xLYRCHn9ztrMrL8RiQqLfucRFJ9Pkoqm6LSCdEJ",
  "key28": "21tb5UbaN4ezRtJ98xAho1Ei8nACCPGsXgMxic79SiVfET5V6ynssprxW6RyGr1idf5Yx4otmMDmiBiCm8sfKvSV",
  "key29": "2ZufPvfQbY2axsURqV5RVNgogtfFqcpR8Wp6Vv9y7g7QWvRaXz4tdWNtW7zXWX9ps2kFcpQnUkda723zySMWhD8o",
  "key30": "3TTveQ7hYz4jAUEBHWdssfep7otwRxanEP3LW34qabS7jE48wdV2bgCJ77SSzJgxchHgPQ3ByAU82mHHAU2Aj9B3",
  "key31": "5oXeyU2yQjfF2vz1VJMyYLQ4D9zKEkR5DrhUGxr4zCbFq6HDGR84BNdYHvtJVWt86F9Dc9i2JZjfovUuyjccU4B3",
  "key32": "KSZGPTVa5GNESj8hL1iRnbpRn3C5rb8xCgEJakYEFu4GiFw8Z8yN8js2G9rabyWYcizL6YYunAG9RmAxFtN9H6S",
  "key33": "aHZPG5Tm3bhSbygsjKpVK8ka3DABKmRtnoTm754urutAQP39DXnRAuv5UKQZonrBETE36BhsU9TS1ExaGSPKxoL",
  "key34": "2Z3q1DYeYPF3TeWpa1WDcNddfm7zkhV6KcAA2vnTnsaFkazpbfDaJcKxC1yUbeHz6AZkttGuAUQhswuCRftfU7wn",
  "key35": "5XLR1LKLFRBe2EiqbMHD7y3omeXgtvysmPkoKKR1sDDtaLkxtBxeZdCZbTeg5MyccSy1PswULq4DSKzMv5AhLVcS",
  "key36": "4xPjyAYGvNMCUiu44EaptaNhrshWbS66789k28BM2H38WHvmJenqBLV8x8ymDbfeNjBo1gnV2hr9WLYdDiRYDuBM",
  "key37": "4VNFXeBynGVsLV83rLjr7qJzcZLDN16mQ828zWffXssKgj9sKxJw7Liii7qKtTKdYDyxJVdNEJcvhUwohJxFACwx",
  "key38": "64g5NtGAPZzoUqkD2XXt8adF1Zx1t6Z1T9soDjmsNkmd9Z6sVPhZvDAjsDMCqDbeNvt5ejJZ51weG7a3VPR5APy4"
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
