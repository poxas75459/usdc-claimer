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
    "4JcvPy1ZDxHN8TACkGakjAWQ8cdoaKkevpDh4jvBR1bS33sz6DoAAcprnGqubJ3Aa5WrXhYV5X94QQiWpaamQShb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59o7cUbfjDna1kzHoePByWQyY9Zinuz3XstguN81fA4hmMsH9JoAF28EfvWhYvrB3wA7y2dZJwqsxeN9nMfaAGkG",
  "key1": "5K5m6P3wsWBoU5K4HkJSVZmPLRr6bdj4bULChTMPJ44Ntjg96k43jEiF4TQ6LFitWp4vjXCLzvF4j4FwGLJqRrSg",
  "key2": "3mXYwR8WZWEyqhFeEahvqrXEnsiqh1SmXySuC5EKiqH28TBe13YKXRczcSbFzHUFmkk8XtwrXfXFtUYNM9aUM12E",
  "key3": "FxbJPVhfARgXS1F1y3XFs7bDkZmg3WwfsHVig9HX9ckVzn54mF5DcHjRM7Xb3SCjA5AU6mVf6Ey6TFvQnLqA7Dg",
  "key4": "47DNUnpf9rEvEW1NAAospVEe1q561CJWKzRoxhHyvNSH4tZVsccSEoSeo8boDfFuvd2eF4f9qoZgeH1qcHkt1z3N",
  "key5": "5Hxb2kMhWQQgvT7RtEWb8TFj5MS3DaKCRPZBDWwqYsxVLHNPW9zh1zQQTfoYRCKreqLKneX3v4duMm9dHLjMhbn7",
  "key6": "DgH22S3ZcAPbk8YWk2cHtYC4jPg7ZMLyu1JjK6djTARgsYHvMzcR1pkc2Af1JkDqaP2YE9ZujsZQFP5jTQZawdS",
  "key7": "kPoKMHUZYNWDnjiAMjQHZ1pvUbeXfxzdQe3uCsPPwTjb9AhERWd7oo6UQX7gDQVRKbUA94ZZPkaXCn16zb5BkHG",
  "key8": "4qTYMagN9GPxm6Hgv7DTMTPFLwWmtYx3fpkhw3dZWdUEW2jhws5MWFic8KzayadBtzRdcfPpjx6ejiqVSoaugRkF",
  "key9": "62YPBgHj3LPnja9YY7jsWTqNybaTLyot4Yym6nGhnBWXHwCi9zY5ngeLRJns8S7iN6GMjix4UpgM1TCtnhTuvEd1",
  "key10": "5AqkN8vCR4Ky1p57CcnXDfxQ2y2JWCyAjPZ4bbBfQ6hLWYqDSRDfMAXqxcJU7cDnYxpw5SVRnEsa887Ri2cq8aA3",
  "key11": "5FU8J3FBBZLtKrR5FgYyJbWCRybSLLVsDSdhbR7MDhuGzce1ZBM51uPvJp9ATd4jivHmagriB2nRpRCVar6XspNN",
  "key12": "25Lx9GBNsuy3MZ6BDMQ3oVddYhdyiPbm3jToYBV7uzAEWBg3g3GvZoe5vnp3jYNMjDJXZW2pu8zgoNYDydHSowMw",
  "key13": "3U7WRVcoEy9F3vzAdttEk4AszUkAmb1Vsmn4q8sD2DbDQmPCoRNYkz6TsmaDoPhxAgWg1vx56kP8YFcXWptsNbmy",
  "key14": "gyUGPxbR4XvFaXYV875vANhJmVSMd9TrTDxYzGGxAL76qjtQV4xk1XbDxXwUNSFejoFx1zeizDzqbgMf5cmzSbg",
  "key15": "2MGu8LawZwuy5CY4VghUqkbYrXA7XagJkpbS5Y5GptoapTT5Pn7A7kTLSe2PFtQL9jX467cYEMEFLbA4RfHnZj4",
  "key16": "2kpfjym5LiRUJdJiAuGs92S2t1FNVb4vRb15KL6jWYrY147kiQ2mBjCMSA35zCL3JFVrKa1rFXCFTkzGEgR6XYkj",
  "key17": "eBJDBqGGuJWo25nhiXT9UipXTprZ53roZut3BDYrYf3Y765E6shWc1Qa1pB9QKpwPvZkrepNP3t6vgKykRLoJwz",
  "key18": "5JU2TesNqnVvxW8pXZmP27iLMfcQgYhY7XxwET9ZwecYEZRxfvZnvWJm8F48nZETJGwk3eCsYpK8nwaQjATjaj95",
  "key19": "4amc6QjbeDDH9DwndoJj3rLshBYZr7D87NWfTqGqj3iG1LcnEuL4yg4NGTvR5rcVD7QV81dvrHxoZ6GZ1UK1nooT",
  "key20": "4udRMZ15xzbGGtvgEmL9i84tr7WTm1CoCjtFaSt7nGvni9DSTrWmT5bUhbWV9NzmzHQAQs6afmdUoES6Dkhr2RmF",
  "key21": "41J1xrDPDBSmqqeJGHUy5WkvoY1D22vt9zmQ4pFd9QRfNKga9Jo2RXTZkwCWKdMhwazp3xBkyBUQiDfXhQQo1GD1",
  "key22": "2scaKGeY8MsjdQAQEbjYbX63Wxdsyv5if5T4svx7mWNbyDM1iYGT12N2Yx8NjoLXt52av3fSbDpBDWW2GJhjdgZR",
  "key23": "2jfxRDfVKKbQ62PqF4UxwbXhtjzsGjFdKNp1AfWPBFtLZGCq3gxc18ef5pqAbwYYyq88M56yRSssfGQUAWdiKGWb",
  "key24": "5krf1hR1bg5igVQBgQND6fo2PoAdJHdATRfHKGUcS4n7gUizKCsRoq7pYeW1L3aQJpZitHxMtwCzQ4JnAb46whCa",
  "key25": "2pjSVqsGVKBPodex25YJPRt5Vk1ZCi8A9kVvZKz3PTkNiw69mNJT1xKNbJjWKsj4rwvxEqxiadEspdSTSCjdYBUv",
  "key26": "3JmWSpdnM8QJUjcBJ6vLUoT9mTRQFtQNBhizPyKMaNZiRSbHc69kDv9B1qDs5oFnDnM8zw5dnBFhAyDyfF9pXcXY",
  "key27": "3gfN9BXz7ntxdqCDcC3WYtbzv6z8Vz8Lt7ATsNSprCxw3gecaHeVmhhH1XXfeW3jtzGYaVVmZKa2PHRoPZ7dH5sh",
  "key28": "7EQT9zdGtLmHgLAayhJcZsUYNamWjSsnxbErCT8du4QHiU2dM4hr8hfWXqvht7DWcqfsBSM4Vgm6dAYJ4obCedU",
  "key29": "bFFCsWXhBLEr61oMcJHMRkxEYgGGsL55P3ctqjXfHVH72iSpP99UjZEPpWRHRLQTpGiFMPh4pBo7rRL5SZMQzNP"
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
