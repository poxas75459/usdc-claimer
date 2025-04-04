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
    "3UTgGSoVQy1aWtsfMsQDfZsNV1w9jW8uBaYsgq9DAXEqKqj8jW2hsumTktXcW5fdXCi1Jc5oKqJKsxAn2bGTvwxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65jTLD55EJ6DhjLZ1zyW2naD7xfdvvyY5bXhztUNMZZSJC9hQnKwHqgae3eTsNELqc5iEmVbCNSJ7mqy7CgAvrdJ",
  "key1": "Aqizcv739yCSK812hPgAemNuFWgD64Di6SZgqfr3tPLZmjK1KeQBbGV4V8ckACuMvtvUV7SGGtqPgyFPkxfSKj1",
  "key2": "2iKxsY4W8N5ovKPJcHxgTXQeu8GTTaCNRviZAGeECwDe4DNSwUiD4YYdHTPDQUVV7x1FiFcNjUVcLoXfvW2i69H",
  "key3": "39b7V9h75aFQgEqw17cnA8aPCmZcPTiKsgoZAfE7PSxrKuAfCXu8bTrEiVHD9PZSRv6oHnoTQokGvJ6q9gmA7tbJ",
  "key4": "4HsiBBM3c1HCnvc3ddGapDuGbsuyt58z9sfLcccyyPFX8ZR3zFhtbLVDc6ZNfvdbFEzYJkEwnf2Uo2c2wiP9PZUA",
  "key5": "217czjx335mrbyTuMcxkgBFzLN8t6uWG8LZ66LgiW2JMhsEZvxwism7q9q2YZhfmYUs5f6J5U3LqmqS9fjzQnf6R",
  "key6": "2YCNG8YbdKoWMt2iCqj5usmMcSwnkuYt8nPmxZ5rk9MUVJE2JVFSNCk6BxnPEfekfkCwQuAQ3UrKnX3zf6gUEHam",
  "key7": "2C8KVSo6RDkkXPpDRJEWSbnMdzHD1io1UFWASRmmbUxAQgzSH1YbXwS9ntRM5CQZQcsoCu9hnaAF19YuZBR2TBPn",
  "key8": "46jzNr4Th4maPcSWBnSMpH6f4a6mpJdA6rtUJgorzbKwc1oWK4vFEBVA7cq9ju1p9PgNQUuWy1JeZsoExQ5b3cLs",
  "key9": "73seyD333nGP1v9SCEYMRy4rSBRKvP39g5wzpFKXhV336psLpCZuSVPxkryfshumRhUkS5cwVhMCzBE8hjTaWeS",
  "key10": "5s2r12cFvmFkXGPwAwsbaJdZvg9NkY7o1yMf7r91PjQ5pikfatVVehNNWYmbLX8yo5i4oBGkj3xGEeykuEYcgJqm",
  "key11": "AGwAVdNPCPEssu3nYxYZWAX45u9h7A5hGmn4sVxnGHGJZqUCPwXLSHunTDfc6uRM2VJk4ZHySi4UnU6oH5oRRT6",
  "key12": "oKtrSVarrmDgeHz2W6UgsEucbWH2JgmsBZ1SeNdyEkQusF13VPdxNu8hcjoJQNH8pSjYRUs8jSti1qVGEqStYAK",
  "key13": "2SunSeT7NPNVwC8j21RFv1XvZKYyevgbLEUYskWBcF2NENb7WX37f6n3JwRrAc3iXFygYUMiuE4d4eAiwtCFh3xF",
  "key14": "xswwTdHGYwD8bQ74NWuhQ3Ze3Cy1gqBL8qzTJmcBBKx9XGQRCUPSfF1kbsRCtgyaxfaBsNbh9yjWqZjvHvn2PEG",
  "key15": "5jYMgRVxjP9gbPqnKXFQUeaSQWiMhN5DVxDE2riPmXz5zxhvXFouyLtb6Vng1wZNw5Es4kZ2gVDmUVy6RCH8NcJJ",
  "key16": "4iEU6CbE7Czm9MW7ENsyRnn6AT1pNqBJin7ZhtXNdTVzW2myWBb16YaWW3RZT9iQ51tqYkgjUf8MGEQxnwvCwbvq",
  "key17": "2dzQ6SomY3EnSadimyYMRrwcwy389FxUpdoPEpQrMn2N8RCgAWWnQxYsMP4ihK5nJtaS7vDig9kvMAvp63wPGSnU",
  "key18": "4gFhgi5VLBm4DaSLQx56nW76QFqm5Mnx7F5zUHH9gYppT99J1LQSjcKkHjCfqfZiqBPS87tzbjsKX8iLCpymLE6R",
  "key19": "4f8qMghBin1MxPmhNUoju7B6jA6DYPYxh1vokRaNR88HbYpJDRAAVDsULyX3PAkAw18wUje26nyEF19HSmvueVko",
  "key20": "31oSP5XKfsmudBDUUYX7cHgtVRxEuoq5HYLatfmcZMvMeABaR8mf8bT6EWiKNvScefbSA8WFAg3QFtr7cS4j4bEg",
  "key21": "61fsShNRPzzpexUbahZdRZ29dN6uZQWR9pQc5SxitXuSAcyDgNn2apjapKqfPFYivbcpeVVUXN48acNniBMRPi5T",
  "key22": "7DJJDNHcjeKWfaiiUqetTcj2QZAvsfSAewY4NvJuLFw3yHCnRGcRCysub2S9Vf7QpFMp6MfxaniCn1icZiKiNEV",
  "key23": "4FUidK5Q2mnp2LWmNnCNhH9pwsk86SjDCYNDt73A6jAZJVuzwsehb32v9r9XfBt3pK4UPT4sKdbK628d3TxyXJ9M",
  "key24": "5mDfaGBtV8SCVhLwRW9fqBxFA35d2iEspWQ7hmTDzh2gGodtQfaVBkJnPZC4i7crfJFxTVUrwpC2jVTbwDcQdwfe",
  "key25": "2Fx92CjKFLjw6MjH9r5F77rCPWM5PSFe8wwscgNgR64Auexf7ZkuCnoTiEstT2HaydR8qjuFVB5mWu2ygLS3zwY",
  "key26": "4gpUHUjMfEgGfRTSc33j9TAR8m3GXdiZ5eQwS1Dgc4CokkW43Ai41315SP2TxStA9B3XuR9LUR7RqRqh7ne1MGmK",
  "key27": "678Rv5wgyM1o8eAAzU89k6b3HngCf5pKAfY7nBdQLs4RLhVqR4FV62KfryzmeVkGEMGCVjKCJipQztPcmDXttzp6",
  "key28": "3VN2c8HbMvWFUpH8idgKmL1jgrESjrNt5G7GkPXPKbUVFbRpS6V4M8Uy4bmm6AEhbUCuD6B9F9kfdWN2o17hdTEQ"
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
