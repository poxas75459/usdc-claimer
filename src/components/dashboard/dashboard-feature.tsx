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
    "4WNtibESMGgwBrwiDtSdMQf1cojD7bjnVw1qngWjMzmrmugnjeKU5FCMrHGmecoxbp8gmCiXaBB8c6UiEqht8WBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2btYsAvbiXVmhfuB1dtqwWfkcfGtwptja8UmPCq7nCat7HuYWnWVLcc1hqLhYhukS5yLr26K6nNzm3y17P7wFTpu",
  "key1": "5kz7mNwRPrc2UPwAYPUtrsSBp6VoRxviiA9xzxz4Db1MezyLbyhrYXZAZjMXGKhtNN8QL6DuwSeSZB1sZRLFQfK9",
  "key2": "4gbcRxaEZU62KR4oo48qpeooh9xHtoMvu6RfDCaxx93pqo3rHmkrAsnmKq2Gf4iveMjbkdvXiucXyJMhustzQciQ",
  "key3": "5RXhkwk9xDPtCDU9uhvYG9p4av32LNbDC5e5CHU3YS6xaqMWPZLxSEs2GK6ACzhNJgQqqtJBAAfgnE2PyLUQnE2P",
  "key4": "3SFn8j35Bva74ZHtxFbVDW1iJrYAuMEjBdW2tgafiUy3muJCQm6rgv8p6KaskSLRKGWSJToGoTCdxCUD75ecPH3b",
  "key5": "6xjKa5xsVnir75TNNufmBZpzF3KUjkbDPynGBP2CGxAq992ArCTb9gqqmPJuQ4tw3pHsLnunYQYtEpHstkwDibU",
  "key6": "5hzrbvUQY8mWevDWTyyEZh3Eq8Qnuit1cDsuaEvhKnySurauwDB3TgZkoXVyZ9gU8ZmZR2rvC4otrpnb8fSQPQGx",
  "key7": "5Cf7dd2qQjrVu4nrBNngUweRYKxFBLWeZzq1AJ6Tuh87tCrTUwSdnCbJNbGF6gvhUqz3scmbbcQEPpCHaTyFysa9",
  "key8": "xCgyhocqhYmKLcnZMiUfoTCKqzJqxyLPyVP1itekR5BMGM4khy8DpD8tFwhJ1uEzmhcjdAh8Agcg4gMvJjF7taJ",
  "key9": "3mDfSAdJnA84G2PwuGKiuKd2iN4eqJkgNhpU1j9FogzVihtbxZZov7cKFbimLhYPzH8JRk8rFJgNeDDytrVcxY5d",
  "key10": "Da8U58RkdsLuyHb6WcjUwhhM9cf77Pij78QQrz7VEwhqeCPBYpm84qScKrkThwDcx6mMdHm7c38VPjQPssYqoMr",
  "key11": "4vp6dxx3eEnQCDdwPsHB365uUDESxmbAbzgL11BYFLLXUKqmRY9P2bqzjojy7GKNGb4aBFwespjzSNVNjHXLM3Yn",
  "key12": "2FrpJWYDreq3iC7Nn44RMrgMog7aYSS8ZdnNzPNnNDDjPuoPessmyUXQxSU1Cxkv1rJDYdJw13bRxpvxuj3ao4Bf",
  "key13": "4uHvJs5U4bTbifpGKhoUFCGoQegeTN7QsmzcYmhBFXzXatKPtU6EYtfjwGNDg9k5vwCTxViasu52dEnrBp6jf6Um",
  "key14": "3iNzSmd4BxkStF6MJb8A9Ab6a3GqeHyHhARgshFQmtzFAxyrMchdW2pShS67TeXb5roGqNDJDi6JPRrxKuM4nuVY",
  "key15": "3PARMJxQGgpBa7Vy1XMD5FbcYyP3nadHthWbQ7aHquJU2csCkwVv2mTSq7uUHVVEh3CzK6oUi4Q7r9ebSJvytRnZ",
  "key16": "2HZQWwugo51XEspiPDJZZVwWGGrRHf5HpWF4hqwCrTmGkrcBUr6yj5bLqzSZpi52ZojR7LeahLNyCqc6MUW8gqFT",
  "key17": "gpMJtgJG1HLDFhdXPaM6sSijrLBznDcCYB4JAxTRpxjDEuXHgQLchFfBNCiK93pmEPawf9QN3KkBUf81oyrSNgb",
  "key18": "NbhahPA7JqdsBrkJw9fC2gsoZ4FBPvhSL6av63pm5gSRJeYeuuL8Miu8edouoX4JJdTvDWtQnjTCmfWwr3Y66eA",
  "key19": "fUakxm1DwMR7kk44u9gfX6MhXpoDE4EEYpkzJgcE9mUmMg81auwFFVnq814Y6sViedyc7fP7ogbgKJNBiBLSs5t",
  "key20": "k46UNQNcoHhdDKRH9TY74uezcpPM4RnPxxKfkddJert95jnTKGeJANu9DjpVM1SXdrm1emagpjA9Vfe7xgdS3ez",
  "key21": "5rc1zjLgTJMa3iLJCudqkYBFtFgAY5NnHt68xjiLRVr55MMYXtbk4Payr3rz8pEouYvGXSoV1VoGg4JN47LtRNvW",
  "key22": "4oBPNfb3iW5J7qsrsN8oQ5LisvCsZbNXbuADF7G8QQJv4LpxqosoP3ceCNND5UzWLMFwaYdiRT5bSxDDjAknhT7d",
  "key23": "6h1GxZ4GNqArxZnksDksejcoVerSwCHZXmtWxSejbxbB9pLvkrgv1bikwt1MDLYoeM1KJYUTSiw8zHvDZaQkc4Z",
  "key24": "3zpeWecj4BiyPUtiRdMvhbvLxqMjA2ZU7xsGqQZ9AceQ2QptoPR6kbLka8xaiPSr1RtxHmTyyTWjcQw5hCHZGdei",
  "key25": "CYMcay7jjssBUjj77yAaPoLJ3RwE2ZkLDyLCGbSUucz6wx5rVxNgGofgPcc1ZTnExGEXiguqJBFJBxEebgdUQvZ",
  "key26": "3rBrA3gHBZTPnS22Dco7gS1u9D7Rjchei67TsEWYCX4mFUcrfeDWw2NeSJgkdnWdoPPLhtHUhKzYbrou4Px8dEg8",
  "key27": "iFhQwJmuii6ykGGFzJ7Sf1PxLcqtwfymyVV8dtvAxZnFHwhN1SEveeM9a3E4jQkv5TCjJ94F8GGX9KpY4K4ebQ4",
  "key28": "FrRHLMiFdaD3izaYdhpmgpAGA8ajWDZCZBRkh5m9WUrXtSgkC6FJNp2jeYReBwK3vtrFtBJ9GZkebyfh67VhYm7",
  "key29": "3rH3L8cboadwmugfjQtCLbHe6W4dpExaZbfYSBSbxGJfcAA5kFuRU2kNjhWMih79ApkVDpcQvrSC96MkFXt8VbaK",
  "key30": "5oysSe4ChJ1Txef1ypqEDxKDnWUvJq84eNhC9v8K88Y7vt3p4tEX6txzDSwdeD4BmDWahkFPappK5aTvQqqdDswZ",
  "key31": "4ggqXecXoGRb9QyXiGXKaUYGkWYzAT7g5VW3Petn6aHnXh9kbGA2DceSfKz9io3whEA7U8XQHzFQis4AbmptC2Rz",
  "key32": "58AwzCvZo4LaWAPjbbcXsDZyjuzbG4RaWaSfJqzJgEw6rf2UtQStY3p63g3ycpzyJHJi8TwbXwf8FFEtEAASj6MK",
  "key33": "q4LhoZJwqAPzCiVLqPTzjgu4tA5sNxVYaanjHFc4ThXZ2DnmUQ36D8HrBzXVrfjx77RzqeDmZZhYyQfFueRf7pe",
  "key34": "5PPN1yGt6qjjWEWLmdPqtzavwKBPBkQrx94GsnSgxZU6gc1Aw3ckAKpHQ46ua6jBfmpR9oYCP4D2E9CBbB2a965b",
  "key35": "2e5bq7sBW6MBCSa99djMryNd12pjtmJN9ZYgpnW5eW9DrLesKpssQuujkanSs3Ajfuz39cBjpthnq8qVn78JcQT1",
  "key36": "5hZpUqRXdrSys7V1GPguX4i91rKtRZXGn2G8svPAy9zMdPvRxiRVFNgUdmoWCuhRYXUTUsoxNRgXiYmaZxRpnGuk"
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
