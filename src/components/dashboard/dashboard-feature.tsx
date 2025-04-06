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
    "27jMgnTvFw2V4UauMQH6femgCGXHTwBdLkLrRW3xAfid5VrtSnAodwZLrWkm6Cw2M2LZXbsszhKqZGQMpzbGvzTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rv34BjCc7wfb6964qgNGYZL7wmMrFaTMyhCvD4hUSmgdDbj674is3JqiJHgXt8Ph2amZBkrvYPo5vyTGTeCkLs4",
  "key1": "2PZMjZtsA4wtCd1NZchnae33RFtGfMpSoYepSPaSRBzeaQeLfqvQ6bu1gQeZaegbzCipb1yfNCfBmj55zYZACAf1",
  "key2": "4btkwhqkgdbhZqEnqURiyoSn1nqHJcWKHNcfsihbr5gqtNSnfaGBRczv6A6LitsGGiaFSxEUuJ5dPgccbUiQqUsZ",
  "key3": "4HuhbCUnaeSoXkDb2Kec13hbqq31LNto2KX7hF7AYBisGVQUFd6xGdvSMfrR9B18FqVeh4NRrMARpNq8abV8SgB",
  "key4": "4kvgXpAiD7vqK27geN5A4EbGRWEi7mdbeYoe55KfrsFPrwMQTJuGXUZsL5sDarqmG5aw21jGFqfDdYAkcFDyunUR",
  "key5": "4F5283LNj9BPtwYmMfBbq5moJDUevUfgfZjjoxSL2DCeL9TnXmbdZeS2ERQTpCaeRDZMQ6TiYCPKPJAbjVnViHYo",
  "key6": "47ke5vPpsqrrTTH8trFGk8ucmLr7bm5G1zJaNiAJ9LB866UwkknNpnPhAzT9ubeEXNLUjbWTszHJcRLDvhc3YQWz",
  "key7": "37R31r5mR4bLNoYkEAoJcJ6ARCrtr7HQdZw9HBwC3h2JnycFDfmmEmyY2XBqRcYoaELnx9nGzRdChxsie4C6opA8",
  "key8": "3PK9AstMqW9hJt1NWhDf1Tvjx9mYk6awoEfPXULpLevhfu2AWmebrjKVQgyqB3CXmBakSJULXsqMQbdbhbn6Q2B2",
  "key9": "oa1V6xhW7tgybXoz944EveanaXjtru1Kqppr7aYiMeSZH6xgtNN3pVB9QYFVmkcUQrrZDQs4UoJ3hgVWhtsVzbk",
  "key10": "5UNnUmwmUVJzCNh6wufuH7514LnVkXnPzhrJ6TG4wD23EuTFhYsyF58CvZw2mR3wuF1mpDf87YWn4MtPeZp5rDyD",
  "key11": "5er8kaMVGDuo1gXnwywuvV7e2Sg5a5WShabVKPDRdw7WVKePmFrFk5aiiuFJFQLWhyXLF894jqRPTpzNnQ3mRfJ1",
  "key12": "4eRu5zuaRcKexWV2bRk8k1sAD4p8o4YK3bwod3LfaFSVCrDDAzFkmqDXDEDhbDdaemVVyZKKbsRtf9EdboeopdMm",
  "key13": "rUqY2HbbDZgeaPuxUmx2iY8rm9FcqxF6vdiUi4C7JZDrUZ2w1FLziBf1F7QBk5529k7s8DRs5BuGonCqYH4gDHB",
  "key14": "4ggKr8ppxFA5gzyTadEipiFkSNHuv6WSyCs847RUye6tNLFzaDsF2FU9F42qQj9t9Xr1cYoynvTBet5qz4uzUWvm",
  "key15": "3mdedNBpsELYEcStVGawRGJw4Kc2yQGwZhQn9vChyzdAmBC87T5uoeJxnnfvKCDqDTJgvP2LyS9AfwkoptTnrvPn",
  "key16": "5o6pmNR1JJtvsbCmSF1YWkzVDuLrUNPFYWSVYd4bkvSZ5PCZ5DmTDPJgXNHLhPK4Ymbbyz6R9gD25iZVsFsodoBz",
  "key17": "4Fw6ZRf52nRjtSML3wbhTwZdeUxqdBkVZdAL6zKUCgM9Vjw2qxMJZWRpBKMB38PqUMTzz2zvULpqc7f9nNxdLgbN",
  "key18": "2dHL23mi8duuRbEHdCFE2Bb6qWuCYm53VB76h1FrpgRs1bS2zhikf9gfpLBNEPqv7SxaK2KsqABirHjMbY1fbQ3Y",
  "key19": "3hVhxTxjdTaf4pjD4JAYNyA57ydXJXzp4dFdnxxarGPHTBoEDhxnqVxPUwAC6frJDRbie99GXh6Vqu4uaH6ix3Kn",
  "key20": "28kj7DL4BUVMcozBWQqLU8MJzY97ijpT9M83znkQoZ7qkZeFB99J6ZpNgVTkBvsGfsu9HGVvLBXVPffvwjRiFnDv",
  "key21": "5by62URMVxzfUc5KUwKehJ1ER2TAVX6UMYB7TWB1ksfzNnUavxjenYhUx5mvzK11KZGjqLm9UzP5NSF1CacMk5Wc",
  "key22": "54GkYW2qHDXtS8W1RfWHJ2rWcrBXiZhHLtrmU8LRsgsm5TFCmH59TMytm3hwd693eMWbQaWtKFfop7YWRz7fCTob",
  "key23": "34u9MuvnDj2Z2b89wnUY2hMkxYbqZHkPJ8Mesi6ozFubGUaZHBmUrAwdeHqaBzgbywPcik5RS6PXtcmHCkrCnvDk",
  "key24": "HCRzY28NgUfe1Y6csDco4L6RqedCcQeWTHWydMUQnbZicdvc9mC19jWLSeEGKjwofXzVDJ68uRQkU895hpZUt9c",
  "key25": "HE1mBZDQbZdPx5nSJzGhGc3vRK6t8NcWnzH2f79X68N3Sf5YnrpjSgbXeL7VWf8vtcdcCKkuJBoYqifRcHoG6PF",
  "key26": "53WfU8a5amLvQFcWycvt9BGNtJf1gukXuLAeS7bvSTt3BBxHm1Jb64Fp5NKVyYrpTyawzr4BxfG8ZZvbgP8QACDa",
  "key27": "3QRFGgJkDkFWH3qaURcW9cfAK8zMrBCzyUWAZmSxr4WtQdUnSi1DmTDSXxAzqhvLPta7D66X66q1VfboysibTwk"
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
