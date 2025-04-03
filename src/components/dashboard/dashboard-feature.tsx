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
    "5kxCqzL6GXV3yUGizQgjqM177GKF5nd4qfaE416JsrtHb69xkDQm7uNFyEqZeC2Gz5XhBrESymKTtDrk4UYKtv1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LPtb3BpRG1zJWkvNreFxBuLgxwcBhBvmU8qJuA2uLxDNr2mT2wqMU8P96htsVy4HuoLHtdvB7PHv9kWzZGcdBGx",
  "key1": "RxdzicdNPBN27tT8jkyjiQeR3YzrLcewLtb4uSYbwMJurpT4tguGANQdkmfJkxCroTN3gpSa1iP1yxWobjBN96K",
  "key2": "31jHjMfHGJacTW6ARVzzBtvCLiPJz755fYcmtGjJqmBFu84fmKK1hhHmZVLehee4nNNPoDaAgjFfLiAs8T5LwW3R",
  "key3": "4zDxmv3tztEA13SqgU54u5HgQbzNRpXNQnNVLGd6RMSaTBaPBYNSYphDXEiw6fVazafkCscUXNRREFqgu6idE33B",
  "key4": "5xcByEuffojCidiKzzvRpgoqTA2q6t8gxCL7g4mLX2uVH8ndUmkC5BNoUCLsRP3mLTH96MQWQ3iAB83TnNW4BJ1J",
  "key5": "5NwVNc1SX1yeDh3rNpnwiR6bp7CG1EH3oyJSNbpXmi3yFqey22WTurD4vSw1gqm938F45uPJY9nb3xjNev9Nzmvd",
  "key6": "2j258mkz2rE7nSpkzraSRCvwSC7ZLfyqACkbGd1nGWdLYmoavUgykcKRhZgkS5ivBuajTxbK3Ebsm2dMAgAQrodF",
  "key7": "56jtYsF7mAinPCzYWMc8G1DkoMTr79ouSEoMw6bK6xpsxSZTze5SW2z1PAJSFVqq2DRPra9P7rWfri3isTS6db1m",
  "key8": "39hyEfFSX9jepS3N6A8LGqhtTcpCgGqqheJxsyUGfoKWZyf5fASsSoqxjNscEPNdjRHBzwiU2P83oFnHFhTKmyu7",
  "key9": "5quZM24H2DjwtkvtM73wRbENFYzbMQG58AYZJEv7uXVsskcHDRWkK1obBRcLMJscVpCNgy9JavFBrh3rv4doCtvY",
  "key10": "5zHDpWV43CPv1tiQBH6UG4bsrLkmSTtKs6nPJSHZxuozvUbcpHiRdCZ4J3Z3uRMrcvr3ezSiohnjUsTqDHApgPdn",
  "key11": "2YjStR4wpDzk2XFoVSxPP9MNSs2TPF9M6HkhTCugy4CHZyJgpeuRAX5MTA1hZR2CHofhFPVBzSEnr6CPA3tnyrfw",
  "key12": "5WYaKsjrnLPPrqjk4qejW8byk2hC2Aa3LMUBNxs8jLiTaLop6oYk5EtHK8KSC8ZaUuvdH7aqfGpABWcepr8AKdhW",
  "key13": "2muzCdm4AiasCcsUR7F8F8eYswwxNbn8d2QaqaodH9Y7Ej9zcMXspYR15QszXxNCd42oZqUApmg3ZEoZMjetqMQK",
  "key14": "4Wor3sVUfe5bcF1W6TCiNKcQ5tTAPAiwV97dfaVeyBwjxjUc9WTPWfkWSHEjzErBhSvmZsmeoUxqN2AEVaEJRSWJ",
  "key15": "3WeWGm9zh2VqU9TpmTtCsvqqQZaYGHD43DEMmAtr92zXMR8vwP37ZWVauv5kV6LKcW23uxnVBvEMYoh6Vob3qW2S",
  "key16": "2svw6SJawdktvXZczr7s7sbds5pVXBJ1YuqhPNp93nHGKMpgCGXJ8b1v8EoKgtd3MHztoZPLti4K8jkwaJYiSDSF",
  "key17": "2TyTBhicdgbgAMgjeUFGN23s5f3GJ2XrZ13XTF8Q4UMGhnsjkM5wrM2wgdV1j3UtDFWK8DuxWKGzekeGnTGjn64m",
  "key18": "4RC3UXSNVbAop89sJxGLCDeFvP2Y1thQ22LZ946UiA6uA5UXBK6wZ3wdpsW7xBtDPBxsbMA1o3894Y17AKLXyJ4w",
  "key19": "2SMbjpWXaRLKCmzibykJwMSUvtxZR4Nn1KZdZwy9gVZZzSwphGuYUZviyWrPhW7XXg9dqL7hPpkN1Y7bY7tQb42B",
  "key20": "3R7MT6SjRcFQSsoKB5LiPfwWitMAjo9f81iXxZpM8RvzUhSWg52jNF9dHByFhFnqUT1fe34FXisGPBHAdAvJMdvT",
  "key21": "2joECrtGHjxeqGiDqoJbiNwgDgXYWP65i8rZ1LHChMWRHWSXTtf1e92iisFQSha2E4qGb69hZQSsXDAGJb4A8FKJ",
  "key22": "3yZN5nyFz85QCbCiTxfBvU7gXAiWgTNYxrE1xdickGwcjnBBuCD3wcvbK4qjXwhqNtgzoDUcJbhTHpdN4YqtXJ3K",
  "key23": "CCgp7Z22RFsGU9sHogUR7P6itQj3AwVA6UPjoY9surw44snrpzpTYzBMFG1hh32nSmJtReRQpuNnAH16bvt1Hmx",
  "key24": "2RntHtdRD2usNWBgftWn4pT3cTVmczmb8tLt139qw6q1Ja6eE5XvHQV157mF7n2Z123bxx6m5YX4xA8oG7XZPKky",
  "key25": "4Uk7RmYtD8EaWgFeDdtZUHMR1gVqH6CrXspBeSub7gLGtPaoSeFa8zHj8n2b5vTaLc5Xhr7Bg9otLKeYCwd84aQo",
  "key26": "3KpSkg33hPKcE7qQzhfe8YoQTrjYRP8yKyNWHPLoT8YDix9XaUmxuTHMxnf1yLBBQBBdVBRPLbjWbtKxPZpqiuT1",
  "key27": "3L2Ab3qxTgfG5GYd71MYoxsVa1twDv4guqV4jHmZ8q8K43A4a9ZKv5XwKyzEQjYbjWEZKuz2NPVWk1KhHaNhbefU",
  "key28": "RhiYy1QjenJRr7PxQmDKVmh9cqbL4XBSzFxPCJryRJVbvWhRbyXs371yYraP6Ehb9hDqN8uiUi2H4FHk3T6asV4",
  "key29": "47VFJ9cUqLPoigFgFQwKYqXXHrMLvEEhtSNwtaYXJy9XXfGLT1n22SoCsbjtpwbwi3mzCj37LCaif3Jk4sD32Zm5",
  "key30": "5f26PCCVAMumUNvo1ZnVG2fN9xTVgm6cQ7dgpuxGp9H5UhdzBA6vvqVArjaT3uphGjpFFtaJWMS2B2ezD9eXJ1mM",
  "key31": "2t6tVbdtUD7wzftp7KALja1fgKM3sZec71a8K5hvthVjDaQhfV3kGvCN6C7JKyVNx2CMaZ9xuje2yd6XptZsrnJy",
  "key32": "H9GJXYfaqXYim7FQyBo3WZDYwWVq2oNKJCU4o9nXmKH5BQkWr9SV56LuACBrCuS9UJT2a4rwV1W9jTMuHG1afZf",
  "key33": "36DRRTHmTDsS6j483RPx4m5gXchRkqmX8nzE8e4JuB9C2pUGsEyPMY8mKkPJicPmhaot9t7M5wJR4sH6zQjiBLNr",
  "key34": "GL72YBhLBe1QJuoY2VdADmNsXWpE86mSsDMDHcnw1m3XWdvC1KEYrryTf1Ps4tCVn3pgo52ghCXhumihqAFdmAD",
  "key35": "3aZjPygGX1awvwQjMcs5gtpJfHNHzr8g1hbe44Ked2NCQ5uvnu9BjE5Mocgwa8AaM1StmB55QWJzTMTuTpxUz9nA",
  "key36": "2HWZoQ8KiuF2RkkrJf1f5d6ZLLGyVEBHUzcMCcWkLq9bwWMwvVvAWePiGBT8RFj5Bois6heJufPjEr59j1ijoVVJ",
  "key37": "33i6gffcuYxeXbgG1Fqt1qngd479YqrTjrxvaeonN8oixWic9nnQAM2xGF8hvEpBbe3foMmWLdL5WGatCJ7RnB6z",
  "key38": "4CQDZeGL36GGgyHX8t49atCKvEJrWDxYTkvRVqXsVZzuoHgwRe2C8hR76QokbWWYb2KUNBwpLrxzamh6cqaJSFQL",
  "key39": "4NNA8tbHei4Y1hiVt2od5KhYkJo7ddqvLyTxhawxncW5DFJ1Mx2FvWt72zkKAa1KRWGRVY7RL6hUQuXtAqw71Vxt",
  "key40": "421eQw9y5PUbgopYS6K58Dbr58zVhRZD4aTV8ox6PVXdUPCkbbw9MDwPY95XKcNQGgtmQyeC6ULiDF8zUjJAWcTt",
  "key41": "ugDCeAMh8YiTcQApY2bi3E5hv43Mj9v7vcN3yeZEdntV9xfJDRUzWAifKv59wDzZjCevKXdqmCQhsZAoHntgpSE",
  "key42": "B3GEKZSX6bJZ7mWZhoSzR69W6KDCDy2VvaTCA5iar9XfoAHB6rqXLJg9RwvARMqYRCJA9QKZsCW2mRxA8Miu3vd",
  "key43": "4Tf53DqWqJ9dXW5bf5pAxoqkqg1TemDyvcWkWqS9DvxKSZXfksJkFF8gJsM5rENgRLHHSF96HUBxe38Q8X4ATf1M",
  "key44": "3fSqBKnenQDJoBVV347mjonMDejnQci62Z66xZjni6WQJYUtqqCKb84i9vLonMMG18bBAh6XSfuzfKy5tmJaNeV4",
  "key45": "5wJZA2LjjQzJCcmowojQHXR9qL6KxfiqsxRaxxyWVgrTrFqF2wjFKjbSpi5rQsiSoc3xKhBGBY4EFDpKMESzSKz1",
  "key46": "3Qf63DsShkd7uRKQmgJeMiWwduHDZb5DXRjXXVoxqHm3kuX5vEbejsha4cmaQdBaEPhg8P1SE2LvJsPzESJhN37k"
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
