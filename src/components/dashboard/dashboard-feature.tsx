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
    "4Gm6mWQgmGZ1UENS6hf35mUMrZ5D1QKoSLtHQrRJn4eeKF1dpbcH2e2JnoYAUSAp6iBuaEcrSShEGD2CLuZDLagr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SumCRXc8VSsAXsn6NDEiiwwZ2uWacJ3an1Gw26AEhyRWDktTZmGxYv58htcLxHdYnfCewnEhThHNR6shZVy8B1b",
  "key1": "2rWKJypJTnDc3M81F1CYE1VWwC6vvpm3vMJD1woKTGjWHbrYVww75u88qofRrkctz2krHb61TzqiRJZaE9XEXg3f",
  "key2": "2DGZ2bzpdYz2Q91RBWefY1wMEomyGQjX8oCdUXsVnL93Np5KP7FzLyEhe2MYEsPVabdPuZQ66TYneFnhaBQa9feF",
  "key3": "4NNsJa2nUpwLQaR5NU5GELzR7seBkgVTdbcDPKa8FXE7aXoUzXwoEaVn2hmdNERRhcETmAXapqr7mVSJqfppMxGJ",
  "key4": "4teBD5NVewbRnYefYrcmRS3MEXH74Mn1vAYZmaxqo5Vo7gg56wvKLY23gC6AgrE7fSjZwBKx7FRU153g1iamiqT2",
  "key5": "xLSFyEo1zQZw16pgeWYAdfGJahdCcvFLqmJ1Z5VN3TkPAcTqrboeGQQKdJztS35A7yPPwZSHoq6WqwxPJWoE4ST",
  "key6": "4zKayqtevUsehPHwNgRQPkrFcFV3JaAqzZW3oE5JnruEHhkZaKGFuxS3y4LMvFMkUmGj7YpMBvZQhahzKffzVicJ",
  "key7": "5B36qp287DUKGnJSbfVyvyHwPcdjVhMBa1StKkQsLqURMyTG3EgzyTutHemdXhjv4FcabU7kJd8mmzuJBDrRVXJ",
  "key8": "3LzXdpKFVJqaE7zC8UpNSBV61rYT9grY6V8LNbWsm2aFTCtFMADsMGmBEFjxcJgMVCkqMteW8X2XrfvihYsa3rSL",
  "key9": "2LJXR4FaUJmcwUwmaM5ZNpmVroPrr2b4DNPbsQV9mDdXWLGt83xDa5dqUYKVmHyaL7YoXf9YhTLMmSVJuxDCNG6",
  "key10": "2KhT3ksYSnWGLL91dw4XoeThh5FWEcPV5gHGQ5oxf5YcKBfUidqzbPH17yLsRYyQSsAJrqWBnHHtiGBf38N1tHkz",
  "key11": "3mUzi53DkeNMWrBS8nGmDAJVfSypAZrVVHuttUXs1KJF4iojSDVVsrivYCYYvs464uJtM2sM95iZ4oZBo1ZfSdeV",
  "key12": "23MC2nC5WGejkJ13UsikkkRDDrULraaqEEW3rj5KU2Y5DLyuyLvpBpv4TC9d1BVBeMkW12jMusPpJXEb4jSec8Fv",
  "key13": "4tQymJLjYNveMPxcYrGi5DKfRNCvv8BhL8hRLQvFJyn6k4nyYNMLnCmgpXiwYU8DKwiWYbyEF5nyauqrUGkiboox",
  "key14": "3w7CJZyfU6pQ9Q52rbiEmLK75iwdRkrtvrSVpS9fWCqW9FcCWWLBpmKArL2mDoxRtuvURDTqyYmku453CwnMjr1Q",
  "key15": "5uyjct4uup6fzxC9wgtbLAfn5fPm1mMkWjnMPDxoAmVLkPtP5kD2nNDGJfarUcCkrmLemDTqCV999nAu9JxE3Wd1",
  "key16": "2rm7ZQDMK5sDk3U4VbBw7heRxhBLVr1yGwniHbpwbK3ic3w5raeMHK891neoJjHxBU1BVPcK5vZKrjTAzLzw9FnE",
  "key17": "saA5nhU9y8rFk82YBwkoo6Vvyu8VRMohCXPncjsLAP9KvrruH3hzLsiPY7BXksgvH5aSLvPpoH68dMYXaLJ36Dq",
  "key18": "66QmVxWfCJzVtgUq7TFWGwfYmqeurHrBAh5yyuP9eAinyDLuSZ1r52T6YtvMK6yF4Ubcbuyy7fW2134n9k1AqtMd",
  "key19": "4f8ciG6pA59vQxwq2ZEaZG6Y8fg1cg3SKot3weBnTzytB2AMxV6anJ17aCP2G8PHQxkP8zPbp4Fx6wMv8taQz4hs",
  "key20": "5Rz8eJP217bXp9xeBthor5wAVez6rpvcRHth3NHN2xvHBdhyH8uoU1azcFUv7JnEV2EkT2WyfyjGz9aymEh7E7SF",
  "key21": "4uCC8RWiKB7888ZGHuftfEpPBVAq1JMLYxqxtXdEATDK26Ht4kGLHZE1YRs7XfSFWJmFqiVZczsjtoSHHVP8fmq1",
  "key22": "4JDZskSsFFs3WsKB7hMmbfxqSHzskRzVVrwwzqkPBiVjoxBQ8W9grSd7rhbaWyPf1XUErsut2oBaukVPtWYp9Cxt",
  "key23": "4NZeKY3TN22TYk35xezCwYayms6cKot83ZQG2ydybztgu7JAbFaQxyF6sFtH71W5vK5Bm5XhLx3EgBKMePxmnMXc",
  "key24": "5PCh8kYoFzFQBhiPqVtrzwgLd7koUGFWczySGwZiQPXqsADrVzHbAkvUHfqPw7V7xZWrMLf5DeN9iZgFntM77XZ3",
  "key25": "56TuYaP4pLpqDR971tvd22w2NdBbX1gvAJqSM8KQFLyTBM4Y5uVZwxeE4mchrhXLoLgCAAxr4WbLZHp8c9ucY4zv",
  "key26": "3W1TBdR13TGYbXCZi3HK6SyW2mF6u17eTbFAFXw8XnJ4urNGffD1LZAh3fcfaZMRogaDa9QGDsxBQKqBwkgrfadq",
  "key27": "NqLuyFBG2ZEXRn9SeX9EG5ytUFXUkxN7mX6tCFdyU5Ur3JHxzQ8kdudN9WUZgPmBcWXZsCNUwAr9wWx4CTPv9pH",
  "key28": "2WJC9NGy1sSuvjBz4cs8ef5GnxKL41Do3MLSm9BrftMD42MfGprxxQ7rw6Ju95AzQvysaRGqByb6r4Ubf9hijTwW",
  "key29": "48oVhbLhmVyWXEDr1cXy2Yvs9aEd6iefKmCKeQ62cco4EP74Vr21r6kjNw7eXVYJctpWTZD83NTTGHaH9wEZmNTy",
  "key30": "5eeSVpybN5scyshABQLjrTz3vekpbJZPeav5ThosGtoDBwAThnCfUALyvqt9WVJ8km4BYNUosKmAum58k47gunpT",
  "key31": "4AjzE3p3Gftazdmzr9tGEYHMAAhecWiQcz3zE1nSyQ4gf9u7FLdBQr9ChnVESt6ag9HfXpoRD5px89SrTWQVQhuD",
  "key32": "uEsBCgDzWDxU2cHoq1F1WegUyod7Tq4h98PHnMd5C7KGBdL7R4MnpA3qemZ64BpGgt62fhudyGFaPanSRm4rU9j",
  "key33": "4BghDmoH2AxTSvR99zijz24fNgoAqih3gjSRQC1UXsi7jdvhQ2gubMwFDWkcUM4Q9b9MUx3mPrAteEqGXNW3g4e4",
  "key34": "YmEwAwcaiX458hisRGJdrZEPvhPe8k74qCFujqTLNq7Uy2cEzFKiS9aj3fdwYNT6ZhHR9UYw5FF9zHhdfo8gw83",
  "key35": "5E5tp8krnm1Ly9V1gq3Rt8bnBS9yEyooKSBzpU8afi6WdceEaWNTNBMhU4e5Gpm8nScd96BMqzGeobSYfSfbzHDh"
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
