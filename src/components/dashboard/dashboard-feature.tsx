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
    "3ZQKVTxf2bLg3JPvhP34b5jLbEfnnVDiLv1EyHtyZ4CGtakxWkraBZ6HaemGX62UXgeppNU8ycAwBr2pfg5WeLK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jbD5SrWAR1Lm5dDRaYRsYrxK3CiLDag8sLvq6KQJQxcyQ8PgdTHp6Ze9U4zJ4pLFrSwyj8ys9rPkVw8TXAy6r7u",
  "key1": "2ukWT3SnfHdvvNMJjQVW7pbptXmZqezobGNSmLPVmAstZuSifmp66b6eAaMftRWgBLBj9nmRmVoYjXjia599FpRv",
  "key2": "2vQnyn9u1qheGzkN3sqwMHrGpkVcKkMNLfPujxjDnajZQJhuZdi1kc3y93rxDcSxbrKoqDSkt7pnht6BJj36m6er",
  "key3": "3w8UHR4unBUTy1n42kEQTg7x1TXm6bma9qcd4TCJDd9vDTwAr9SEVj17QbyC1ZwSrnTJVrY9BZxtcMxfmN3V2AAX",
  "key4": "4msy4v3MPivGwvuPAhxYvxCZc4aYT16CDxb2okD1zHBKnJow2Djh2CY7meFXd4dwViBEFU5zThTEsvMjL7tFV3qh",
  "key5": "4XD55MefB82dDmxp6bpwPo9U2ypjhwGMGue5S7YNqeTVt3vCUVe8cABb9G2L4uvQwgTHAa4459T3pFSzDYmsyVPN",
  "key6": "4kpDMNkX6G5zS6LAVvdNr7uKygpsqHkFV2kSVAQQLnDWSvwqP4gzwWDf8YAB7jHNZRtJQH59MWYh1cp1HzGrahBf",
  "key7": "2EVmLoME9ewjUAh8tGPfLvRXTBwjU8FopWdS57Q9iru24ctPtLVRJGx33RueNND5X1D2yxRjojZP6n5MaMbBFXgM",
  "key8": "2pbFAzzgoQFz7DSGE9DgPkfNpAYbakU3tEejmbejtH8cruB1wpjJ2TDB1b1xeATFGgX84EeeeiYbMnBEHfKXDA1X",
  "key9": "21okvrnrvPusa9st5BLx3QK6Y8DdgAPjzMSNWMACkRM45j9Xzng3qU5VMjveh2UFY2xLpdk2Tro8CkNeHzauW9UR",
  "key10": "48oq2nTKPWsKjSPCvqmQuvP7EnBUZ5FxNxyu6dTtqFtHfiJa3eB3GX94dydLMD7m7sRAF3uw8UKXWRHGr23SBc5U",
  "key11": "26rPfVof6D5Z3EeLdqq2CJkJs8Xp9fyuVSvTpZWtKYW3kknLTPm5Txu9XrX2j3jQ4cCw8Q1vH2jQvdhMttU3iZg8",
  "key12": "4TAyJiNUMcHQ3PtPJoKZPeKG9qdKkh8hxiE59JrViTGANEFvKxmstvvWVerzg9pTsN7pdxxNUUXFXwB9f3zvbhkU",
  "key13": "2PQ7RRryqBwoyHFeQtX4h798hdok62ZiANuFAkNdZG6M8iLvi1r2U3bts976spcDct4RHtWAFAEaoWMc5Z6RjRvY",
  "key14": "5to6BwqVHKP5r96KnffsrxWdRF5b6au8JJCd7xjyF1jSpi4zUkhKEjGhziDURMDVJ8p6KZEWaoQMRoHeXs2ysAgK",
  "key15": "41knxxmyU7T36BqtEg5Es5gHPWnGXBLkM2ZBgTEs7PZKUs81wKzenHVLAq4DEPaPUp49RJRH4mBY7BED1SryGRZj",
  "key16": "2u97woV1XBrmvE8rhZnRK3LUZ6YwhfaUs36rjqdishSCMe678NewbvKgnoyEHsupg8cMjXPLH1r1QW7pCDxQUVnz",
  "key17": "JCqZiHv4E52Chv8BJ9erxU4hk7n5gcpgarnkSt288nXdDB3QUyDxhr2Ph3KW2NNEy13tQqWwUERZnHueuG3pwMd",
  "key18": "59ipHUCXKyd9Mgraiw4gbQKZuu8MvMMazBqDcsauqqCP7fjZQACGupKcqDhuKLBFFe1tAQkqQjJ3qQW1MFbEVzaX",
  "key19": "322RatDqCgbUf3dsqeWEzw5i8MvTpAL8pEkJoJAL54s9AW8fzux3swWw2GhQ3GygGWsQMx27hyeSYZ57ALh6jBDK",
  "key20": "4AdzfmJ3cmjoAVG4zDN4vm9xTztrnvsiYQBRHd6hXAxMeUVGZYPFcGDgCUG7dELkGKGAQckYDnWKGUTPwV9wKgSE",
  "key21": "43i67mJgBBk4P4vSdEw7khtq4M5JFcgjSzxN5qVaYZn1yxLAUmkMctshmZg8PRK3eJ7m1fnHczCYfgw2xkcVvTPy",
  "key22": "QXQanJYndmD9BcRLCYEaZ6oJniHYniMXUPdS5yvcn2pcbjPnPuTi648Jz71AxPToGyhkGh5DXXJbQALV47kqPdD",
  "key23": "5geKsKzjKmAC2MzJRbR1YtzaSbQWnjfVFCo1u9hXiQ1Pvexr6zy3hoMbxyWT7bAmEgREaKEj4MaNBJdsrn6M4Ffw",
  "key24": "2wruLs1iMwUYcuTExCHySXQJLoUmmWK2gJoNRXNXgzWH2eoSproEYtg3mEdiQQDhNKD41gZDM9bxYXbxE5UvyyTR",
  "key25": "2AZ4ME4LXUSwd3EKz4GrC45ntRdNduGhJkb3ZnaEhbWZLdgLeMUpK7E8MG9FTqvYfqCM5XnVLBSXp6XpRA4ce2YQ",
  "key26": "3PF5mfgNEXGQGvd562EXti1gUsiTsVS41LkDqzif77gj2zt3ioYUzp9YdVzr1LEjwrb5YTQgT8R9FEJN39HxVosU",
  "key27": "3i3omtWTeYcHTwQaShtorWEcYpJXnxAaWGyZFejcQJzGRWzDaZz7NAzT9jPgC1MCkxc7jzaBpPvuRVRcbjAjzb3C",
  "key28": "5v86V7Pf2GgscHMgf6iY5crisFGXUxdT3Gb71DeH2ss6s6fjRDAqESie8eNL8V6bkRRVco5qfHF6RWg7o3VpLWrN",
  "key29": "rP1qGGaDV3xb37YAAEqMMv6TRfvAxq8cZuZx8MYoRibRv6Spb21FX1yq98UPaDA9HfEUWT1GxDutoBd5W7WHy95"
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
