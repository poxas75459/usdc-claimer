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
    "32JGW6wWF14CAJmJdPtUJzpxax52qX9AqDxdLdVWyDWWjhTKFqXTRVTsQTL5DAnPJsSK9rmcqdhY3938a575t3GT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VcT7GdsruusctRnDgzhRMPGs8XoxpeL4275Fj6DbUTksYVWQGC73EgjSzdj1j6MPh448VFtUN1qmZtxVFfA8nwp",
  "key1": "3rP5oCS7twfNbFDAZvV548PFNs7CNXMtTEC5PiGVNxvxcS1jzubxj69xN11c9H1PDBT3BDx2Y7cbbX7GwnQhG1jX",
  "key2": "z6BRk7gq4QAay66vjCFrYprCVYqYo1M6NVt8iT4JgXfRqSqBm9L3BUXbBqU9zwQXNz7ov6LM7XGsvgfygVnnwhS",
  "key3": "3oW6uUsDvpnpYjBTL8qu7Lqsn37DzjRV6vKsEiW54vpcq3gS8ShPfDByEqiTX5PcsawKrRjRuKB8bKdG3KDcSFun",
  "key4": "23h6ZNLk97fDJaT4SeqbfSGQQfV2ks5JTFabFdqgivmNi8js6zUWYrzaZQ6WucZVFNLWns8gBHJqxWBNndgZozi8",
  "key5": "6517yzYehUMVDvB3G8JcVfV6MyPtVmZtKgbutM41btizQe1jN4BUYiMkkedTHPU6HqYgJ6gkX2FMctyv5HEbB8Vn",
  "key6": "3TeBeUtdiDzHiFcSfY86MMkyMJa2aFWsec8rGgFznBdaBVndL7HbeocN9pbh4eM4uVxpHurm534Acieywx65JpRz",
  "key7": "5iBRPbANdaUjRoKDmc4upEtFY6fphDJuY6LCGbmBQrik41Agi1cGHgxssfEwqRZqrvK3KS7FZzpkK8CR7sQZmk6w",
  "key8": "4xBYZmgHqsowgJBtrAoSYXyqjskmFJaDuNUnpuqZAk2J6e7x9qXueJhjYsFvReV2pVPgdRWaB2MSVgzk97maYpeH",
  "key9": "oaw6Fu8y5S7Rd8LoWkQ1i2sAowb99nafdx71tmb4T6PoRhu73Ao3mPf4kxutESCiqWVrFx77n4wr5Qso8rQyosC",
  "key10": "4sT3JuSmMA6h3RxSVvdo65reiqABteBmtNPRPd2hqByU14jrcELtRDWDUbUMRotqz1mvYztMs9Vi1HQvj84sRmvr",
  "key11": "5haWZQZ6R6K9Gnp66PT2MjVYzMDURhKkXcV3kWGFhsQtSiYcuBjseNFg791Z9P8UVc1W6Fe26fYgo22CrafWDpJE",
  "key12": "57hkMKnogiv3tX9wtZpe1wTEDjRPgLHYJKiz5nsibA3s92Uhc82ih9KhRbEvXhQKJBEcRXaGQukCN6MmFQDW9Dnb",
  "key13": "5NGQtHMq1Fx9VR7oFHsMFTzpVRjwM7DqetvKkYzs77c5WTAPUfdvvNmUqxUxXsvGGxpA66d6rne4WntQH5PJgeCN",
  "key14": "4gNxByoM9fYRacJRmdkQhXwQgkqQMywRUe9NsmTefD2E6JvQ1dsXrqgFeTfHYqxxHR9t7JCYb5GYkJKPNJWYmWeX",
  "key15": "122jEA85SAEHsb3AsgT1edvSbDVshJcnheyXYG4Gu4kvtov4PSDzGjYBNqUnYJN1NhK5sNkxxa5sNAYzT4eZet1z",
  "key16": "4prMi3Dw1b9mEN6EeUZpyNnG3mLZbFU6pBxBiwE5na5YrpkQXQTMu5F2x5jjBnYmJCc1y5pnSZCC7pTMkKn1MAg7",
  "key17": "4eykgg7VZFnyC4NZ5k3AHjJrkFfwUywQTFjDLQSnrZHEQm53K1GjoGJm6CpLb7Vs8uMvNikfoSY7dPGwi47dRGDt",
  "key18": "2PNSEywvft8jv1jpeLx7YBJiUPUS4gM51ije45MtBv43FqmPuxq2ft8Wn3ZWoXvDPqeqfw6uFVupV7ntm2YwYj7S",
  "key19": "3GLu4Dx4U6y9aMzWA2aCmpYC1rdSXbUXrfsiroZE2aH7NJ4pVByXPhxG13ThJ2sJsSw7fXositbu3zU4gQfNaqpn",
  "key20": "3HR3vfxXwdkU8M3pa9Wc7mubrtCFNmfwG6ATw8gpYyYWuM1keSd2pzBtciAHBUsLM4t9PAYUFKEbkhpfu13hjmqq",
  "key21": "3Y7oWgvoTHvskMWinrTiN3Q1mrUgrD7FDsduQJEL7xeKSpeSzcbozasBtpu3Nqa5DgwgmzLAh5rJVP1JhdCdcQuc",
  "key22": "3HY3qKgGqj4mTadTKti7UWgbBDxmYJX9nTU5UFiAfiPmJcFuUhJ3NrXaBP6ouEvPhJVJShnYGDeggNqayLGCBQqW",
  "key23": "4wb7vWKNuMPPSvRr8jvNPAMJHL19iE4ysUHgh2cAJpskHWfodvewefnTrPsvQchE5Q4Hk3VQwsWytzYwLpREf3nE",
  "key24": "2mKNXevifxQhAZmtyJFRUWLV3A5LqC6sqwkiCABqcPDbFFXWDioygasx1hfrnSPhYZwThAw9aQ4Ms3nmyi29F9z7",
  "key25": "5L7RWiPkhqaJzNDgf7AuRfSJ8hYzorhKfmgu2UtRSYkvzW18XD1rzUr5c37uk7U5bAvqzvfLG7t1Ca1kc4AvWHYy",
  "key26": "2kV7jZmRnMdzy5PVFfB1ocfDgLbLoLm1JZaMwa73EkREqKZdRJf8vneLdbMFwES6ZjGFR2fKENG8r9FJZfT1kRL7",
  "key27": "3rm4GrdSDA3WZPDeqJ3ZdYe5iBYBBP2jkFna4aYzRn5J5J6v4QomnGZisGT6J3hug4kyUjEXV6aCxS8ChuPPxR7x",
  "key28": "2z9VAoo97ExrtyzNwBcr1YtdswkjX1Qwrj934XScskyY5vLNLX5YabNVrxNbbJCuuWomZvSYfDUrroSzhRWkiRXZ",
  "key29": "4q1nN64WQCC4Yw33H2U2jGYytVQ4UQjnmBcyYUSxJEdVpZdwDJF5RK3SMMnfQRUCcziDU7oL2tvDShf1oEaffV1e",
  "key30": "Sxw87r2pP5ZJZyejkwuJM9XiQZ3sDQkfM4qFeDPD5voK2w8hD5f7xTLvSPpwDY8N83Fut9ZYPJ7RiaWyTrCnMyb",
  "key31": "5LkQd9CTYTKoCG292uJKZ1R1UHNAUu4pyhLoboKThBP5NtvtaJkA6oonmEVLYYw53DgnNqzbw95JVLcd6tiP5Jez",
  "key32": "35HouepYkJF1noXZHtmXasUauC8uV3MmX4z5APuqzMVMoeKWwiYfAKLkCmskMWTdiBVgwYrCNXgw1pijyaDLtYNK",
  "key33": "3bfMRWemWJg5tyFGpn623S6Su5jU4vaEq3LfFQXriEo5rDczYkTib8mtMkXNtM7kipP6tctZ6fE7RVMzEnEtcJyo",
  "key34": "RxGf4e16DQTSz5Jyc5bDE79KbiCgiK6k9vhLwD2wbt7zBmsZmqnCp1Wb6ifRGyzX2GxLc6F6K2WxAa1G6vNZDJm",
  "key35": "aUFw3StNpBn5v9TBeqarwYNw5c7AmCPEmFpJhjuB1JGeok9mguskqDt9jexWvLxenzyTFifRp4LQd6YFxJT5u6c",
  "key36": "3yCoFmzKc4xw81o8RWE8KZ6cdVcEMboJRH1vgdLVQhqmn6vozqa81xSq3ux69vpvEAkZtYipXMJpNFhNaJrWXZ9w",
  "key37": "5NJ4D2nvMzmBzd9PgTNDGXbt7aeEpREYS67u8SdB2jotxB4KZ4WxsPbhE4nyXXtpVZibg474RuSTsSsrKbS61sdR",
  "key38": "3A7ntqyrXjRrfSNnKm1RL1DVpoKEWPUpLvrxtb5T3A5oG7dXEsMQHuK9eCjGHUUpKYwedoMgwwBiJNkPfT13cvJK",
  "key39": "5gPEyhkeJ3E2snM1A2FvsQup1KSv2P57NFouJwBKAUdxd5BtkhYhZys8W6djZqAeegAqeNFoLRDdr42XbiKh6Y3Q",
  "key40": "49rLYUsGhAW18o4oRh1BhoS5UkM9mFrxMSBpbwCqv12Fgw4U7wqqDn6tKk2Uujq3BU2Nz1kk7gxgc1P1ZWCF29UM",
  "key41": "QUTsAWRYYbFtXTSL16TjSyoavmnJYNHimjfcezsmZVG9nLDWHdcDaZjbBUJzJyeMTnqiLo5gBSQaRJfAF8kqDbS",
  "key42": "X3DtcAAv8KaEGFiMpLsP9nX4ad6NSLuz34VJZJ855zkdwawQqQVJcSMrucixjC9sMusCV9Gk59gELHGisdYsoVs",
  "key43": "4nKLYTPmWkEcspckvzFbiYmnADCY2ZFpEoDnrk2BwUyTjFtwK9ZKLYLEENE56G5F7pRftkiqeHnC6MfujidtT2Kh",
  "key44": "4df9py2VjTJ8axfUGqPevJvJh9EqyQvzUK5GN3FnY8AffpESEDdLNs4a7jFw8WNjMrMZEi6TVH7kE1DFMMufrcx7",
  "key45": "7WzPE6csj2g4YgMb5T765jGCWmKnj2QTM9Se2nLe2qPY6o5rVC2vfsbGy6HkPqysTWNJZaZ5jE77qvA5ha9e4tb"
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
