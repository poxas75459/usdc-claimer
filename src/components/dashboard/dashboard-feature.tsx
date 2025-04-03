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
    "2ycRfdsJAWzFkz4dRm82VpLBEBuoAwduALEBV22fR5qPZK4sxRWDyvjRSH41A1RS7avLrkrASNGNfSq9TaDaJ3Ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gSGBNofhKoW9DqVb7tm2FmKUrfPEts3JRBRiaABEJxo4hgDeCvQsAnEZVUYtrxo3XGXCTLcKVfXQPvtt1ZtW1x3",
  "key1": "5qu72tdRtXPFJFbr1iQbgqEC3w4M4jVLk24X922YMSe5WWd8YaRM7fC5uPArZwRtotSmgZsZNf1BxJZVb3BQKDZH",
  "key2": "j7SiaYxSpAqof1gnp9ANyixBdsorvrDviYuojUGRPfDAU5Y8L2Xp53yigCBPVrzvbQb2vS95NxVjTT45oT1o1st",
  "key3": "5rFDTUuMJj5cz7cHX5eXKXMBhSKQmQNuSnkvyJ9EWquFQG495hnfyG8VSpWCoqYzzCdsCrmXG19ui6mKKMX4qbU9",
  "key4": "2a47PHAhYSrosMEcqqj8fZ95zNE95TgHbCQxMjguSM1ECpqLomAKbxhmcCtReoqxwBu45g4njKZP6v5iX5oFKLGJ",
  "key5": "5k5ojFULuN7bLRSyAHmJG8wSH2Hgm3d1k1Muwke37wVZAzUgT11ok3gz4sd6pyymLFJW5brQd6m7VQ2nFPPZXiZy",
  "key6": "28m2U2ZphaNwSWH82RHutKnRW4R6h1kuaTwBBBwczxCU14YEk5WDwyTF3NVnAgCejfqKZQNHho19hpgvuA3DJUSM",
  "key7": "i1ePBtgsMGvi3WjNUigDafEnRadgZ6Tdh5zj9RXeGWe3us7uMQcFmVJKuKdz1LuZE7Gm3CnNGfdaVztm2n379Yt",
  "key8": "qgus5eL4gZKqviWFfVWm1RwfUFogpnZmp4BfFDWALFCuWE1XQU3mUvcpGMH5Qk1Y7aN6SK5obhBcRNwoo4osbza",
  "key9": "3nrs9dX7GEfDJKFsKbi2j1xSPtgzzGGC1Mvij9gxiLjeJDshrfZLeGMxnFRro79ozBwrVrotv649PpKKD58D26xi",
  "key10": "FaJaNtLKLCkBdmyZ4kuoVZWFvgSDiGZt1StjnhHdXrFvoFc9t2h2uBQjHNbYEfvz7pYmiue2WTnmydJCNv55LPe",
  "key11": "2JqftjpBJHgDiczqZzHG4wiDPJ82FEDYC3RvYmFNXm8N251pZSq7MH64dH2QMEqRZaTLgeZa6mQ1g4YSzrHCfUFP",
  "key12": "3KhcHzWSx67u3gExVuVHgfEjr3dKSEtkjcZf82UJ9XKHhcrMn8P48UicJ62xKG5MEW41Y3wdaVDUVBPcwX8fizYw",
  "key13": "4QtjoWhYoJTEuBsnJndzD25YziPuUHerGZkXNvdW3VaLBNurU3UeyNs4QMfNbq25WaRtWxrZaQCVdrHZMTf6gjJ7",
  "key14": "17R1PPt9D9E74JkeDKNrd2MvASALR5eEypHEMJHwGqs8B2JC724DhEvQmEssdALP9JBeqxXuEe2VErvZrBdQbDM",
  "key15": "48wk2Mgv4AX68VZT4yrippMRkjhrTDtBrfsBcNuy4qy5qYgzHQvM9ruoaAmbdvAsYGkobJ4zLACXyCKxARZ7tBuy",
  "key16": "3FnRj1HAWS5tdTgb9sy1w83ScqjnLwsECb38F76M8R8HeFkV4fieGp2bBV618eDUiCMGQRAhz7KziVAKmR3uXHxY",
  "key17": "434w8q41Wk77E25KhxHXfuaicEw5xiACYKmvXvKssSFhpoipLTrj78g3qUAJgK6TTbCnmqRukTLArPdj4maRDiUo",
  "key18": "44gEJqUB7BAfrCUCg8q8p1ekps2dVvC7Kk9FaYZXmjnyYG6CqE3KPx4jUs4CmBiNbuNPTFqEHonADPto5sRRmif9",
  "key19": "TkvoqhXaz6RH1qMQHZnRVYpw9Ym9sNstvNrCDFLTZMGJRmSReeaz76pysRdHv7Bnq6sY2aXTUcxHAU8FASL6pfw",
  "key20": "n9wnrGa3bgA8FrnfGGx52b9ZWFPnuvEnguCjz11BT6Z4B6otbhLUv2HHro8FfDCVVzZSQ7FLfzdPUrmGjbpntNq",
  "key21": "5K2FXG7hcGfCJUaZ1FHVzqqw1aspMvANc9Kr1tn3JVwqbgvSY8h3tRq2V5wpAq4Xa7ABBZrcHnPZEfkcLzpwBRVE",
  "key22": "2oodVihPBat6z2fGzGFoDrXwhuSQZYcirvtLjDeAik7yuuFNr515bTVZ7N9J4wKN6jbhLLJAioxZ4UKNCD3VWQAN",
  "key23": "28m2kgpnehh53oJkfEqpbdGL7fk1QMQ9PWjCVTNCuyEzjPoV5Mj9MV1LAdETWrMJcVkLu87mqDnYxeREnu8jaq6D",
  "key24": "jrXHCPJCPpS7ezvtP1WVi8U2t1EzWZzbDFqDrrDcEGPssL5ZnXptwQG8jF49ybyuWLweiS28oL1kQoZbercXYqV",
  "key25": "3YU7AHA6Eiz81hGcpbE6sEcM8dP7vqfFMrTaGbtqZCo53fpK4ZWSG9j6MuwGd5jqRp4UocZdSpCifXwwmmk72MrR",
  "key26": "5gxQRWW8d4Sa3WUMdtZByVYJAUdqgAx22ULchwQf3sud8MtCcFRNBBQkBE5yyjQqd7zw1ipsS362QzTohgFFF7jX",
  "key27": "2Yexz97zKs457zFdPu34frD6Dgj4Xgd18K7j67zwSBTxA9rmfrxEXJWV1iP1DF3TNQt36tWJawkTFkTtBLtdGx2D",
  "key28": "3JBeFn8zVvkJtPhF26hTgckmsPz183e5W463aDX7fXHKY9XiJMpiUeaD7ir7p34nCp5njYDrNmBJik1cW81E8vxt",
  "key29": "uNFZUb7jMkLz7wNiPw5wvj8ECnriLVMj4n2z23XBpNM9fLPsz9uojL3XdNsnaF2Yr5c87wmjY8KPQDV4DBMZfxd",
  "key30": "4MgTADu315rqRUPm8Gay1S4aRXEqSrhVhDsD81EJyvNDcA4NipUZYdkqngdmegXgrtaL2JnWNSxaq63V8BgTv2cr",
  "key31": "4EGA8rGd7hL9KZ6fwUes4kSytTofKs9o3bu3iYeToqWvcxpZJSZF3kvF4EBCG9pwmaXFMWhXnsyUFvhXin1YTUee",
  "key32": "2UGv29crwdCkFppqtjs7cudZb3SGhachaHnaKhUtTomyRfALCdfQZGifkTzGv29pEoNjZ9uo6JqSmkKe1qqkvvoV",
  "key33": "48etcyCftsXNZC2DkmrrvSj6uB7WYwDSmHGVroieEKMA6896oLnTo3eSH9i6KZbRPbL2d2GAoj5sgJbP9z39QMSk",
  "key34": "2LASkjxCDBPbHc7narczvJu4pbCqUU4sMqp6XFz9WhrDnT26Rgs2JaigMvyj1gYaKNTVtSdKYQLansGxXhnAvc4p",
  "key35": "2uzWno3nBWhbb2aVZm38f52MVg259qTLAPV1bVCYACCDByNnf7QVVQSeXxjR2h885D6KcLBZkBauDbdq9SzieW3T",
  "key36": "2Uko4wyjdY7n2BsqpZmYTTZLdkbwERhgBiKXvFc97iwj8QkAxFpEKX7cMDcyaJ6yUXbQhANnQMApQbyXVNE3zuAn",
  "key37": "nUvHdFWe3NHB2mYYjrAX53qoLRxZQz6HBa12xz16T1Ru2ePf5gg2zHgQjmqk8mib826SZ5ZWCUvNrSxA6oV3ZW5"
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
