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
    "2JFs7P32SsyVFixHKssnuGptSvPJLBjPBahSsLmtAqJwGq5WB2GQeJnamEGAhz8xZFJXaxVM9Ke6T96fJe9u9UUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CCAree4g2BJ5ENotnjsm747yfBrCM6C3iXpXSYWz76ZyW8pQbAzpmbyrR53drHsQWDzddCLUSMsNcbo6x4xGv9",
  "key1": "32G4M8hQRNzY1yz8w1T3orjA298tnpTjusT68BCa1Wzmea7DN3w4UdtDRd1NgVZCqnNYgXL4p7QdAUu8iYvVt8E8",
  "key2": "qDnzY4a16mYwdaMdXtuBQG2pRq9VhZASFMwNjgGK9WEM1idSjzHjzqQA2Xy8aVUzh5ttNkX2gQW3mbG6hT9qj5K",
  "key3": "2coWip9xd3LxCyDEG3XHuPBorFSFGsBGtPyxVyzSQQNh6mtv72Z2vK4vEGhpthVhARb4RoTf9Ahx3Aabr6s7Ft8M",
  "key4": "5fvffoh2PCLmZ7NNsYMZiFyFDJCBwgcCiVRRqP3goEH6SAQnoWARHd5KfYrg3pE9QfJF4ueHitc52rKY1uvFsGUF",
  "key5": "5GbBh445LxrnBq9EkaULSiT2tv8kgfVZte9yfHfrNFMuokUMk5TAohFtKwqgkkbLfoVKeLVEDndPzyk2u1R89MSR",
  "key6": "2y8V968PNaMaXNQW7QyWys16rx4mScCfoooCGdGuW8HqEdGwcEBQ5SFgUszmg9Hjzmx9sqW7RQsMPhm8DXBXZjSY",
  "key7": "5UUK3fPSwEmDK5nNoK6moMGaJdeU2daHghNceWiU9dMs3rBkAZxeZruiWnN4zZqwkxHNGCFXK1eTQUvjU3caa9V1",
  "key8": "3zSeSrDFeZBPpiuBw68tFpRdmwVrGidKBB1S5VjtXnXtGHJZmQQ6eLQntE4V5UEwo2hon8UBwVJKRceTKcQakDr9",
  "key9": "4hb9YTbjg7cB7tpZeSq7CZeWEX39RriParCCkuBpMZ33R5i9CXCPiW27HVeYSjAaGL9h6vbpZsYXmXrnp7Jpzwqu",
  "key10": "49MkKqwNjZU1BV9NPGpMuQ86ip9o5PeeSKtNSW9TuzEAW2tgkSv9KKLhpW6b6XTw5AW5CPdDb6KW5DQ7dQvFNicv",
  "key11": "2Gq3pdKSFuKLkdbw81bAeJu77Nn2spTiuKtZuQbfG2QZgw7hpGe4jSCp2cdwVKPJQXVehqWAfPQMaYanFJPoobpU",
  "key12": "3xRcfxmD2U7PCXVauABEjLsKY9rYT9KpqPBa5jiXecNsuvwY1wrS78qBdYBGfaNGr94pL1BpJhgbLwUETcmdtkEY",
  "key13": "29eLxy1NUj89BpBHr9RD5iC5oKWv3GH8MNWr9Yusg4heW94mqWrtr6twZxLRqNooowe3ccLg2PsNhknd7ymSVXr3",
  "key14": "3ypFc3UJWodQzgVKPG4rY5RnU1nKcNABvCs5rfqd8k1okqwXcUSVMv2tpaYo7TPiAhGFdaqAfMhpdT49bAoYvKFt",
  "key15": "2AyztWoUYT7eKikE8NXoJqWMWYTKPRp5gAS13bWTRsHqiunyRiftCsJdddZDpGRWwFbRFUizNPNT9sXu5tByHtN8",
  "key16": "32poktCUjubEfogKuVc5WaAudc5SGtd45yt3UetwCGqsLTyG2LPyuxsWFGcgP7BJzKxZDhsfbGjikhKBYgZP9fmY",
  "key17": "5B53KBbThEpx2uuhpFLzWwKtCAKn7AE2vJvHUiGJEFAJZoH3cYcKxCeSRbvYczVXFuiTV2M7Y3rMfFq1gjgFHMdN",
  "key18": "5QiCGuFwzmab6dP6VQVFUxsgP3tumLvQg8jXhuruqbDPUzWBwkRDGdA64hPQAdLVnx17TMN1EBQ22qFSoQMZHAAe",
  "key19": "4fQHHS2Cg23XkgzAPTijyg5H2qzeXEjr2YZQWVji9wGBLZCv931gbapiaBRDZT9CQT83uMrWvmJm8w16mpmXPv2S",
  "key20": "4gSYsRAJfv66NR2dbWToAwvVKWj9qidcTMey1awWn4DUhvvN4inPBMT1Mnmjx5s89Yd996haMCkM8ZTGFKpqufZt",
  "key21": "2Lzi9L5y67nfWLhDt1wMC3NJMjZRw6qnVXHdjD5XvEVoXWJnrPd9xzu14NwUqjmrvyNkPeB1bkoYaZyuwUxwrAA9",
  "key22": "2BQeN4bHcGsTzuG5QTGoC74FmTcamK6eTRfsCk6bjuKWgPtYpPXwHGbq7LUvv8Zmt8osJk3rUU8rVXRRunbEDYCx",
  "key23": "3bobFuukCfYqooHaXgG3xz4mAU7E16ZxJn79ZxyaTRyaqJ6vpTTqf2Kxp7K6UtEa525vhU4KikLnCMTreSiSUuEd",
  "key24": "4xZCAz7BDPZ2vTBv1gse5xATAdStsapCQRfHATYLMFeghNtsQkdDf7ojQ823jEHJRRTr3p77bN8SB3Ksems2VdmU",
  "key25": "rAedEvynhb4GoqwDxLCXEMyuAop1fWyQhJUA1q5yAP8FoY1RTp31cPMgfMvjfX9gvZRi3kvY8RSZPunXFthLhVj",
  "key26": "4cEfyiwnLjToPVA7okg8eCW6688GRite81HZYoqoa2BxMqzzPN3HTdYZ9uME4cURkiCF655UCSZHBMz1iFD6cmgs",
  "key27": "4kz7pWNEnLpG9HDpTZtNuokPru8NcgQp3JQp6qTr9qtzXHX5dU4ZiBovR3qpc97qnhWQjcJpuyKXwCkhuq19hkJA",
  "key28": "4dK7j3mTpvhgncuhHwQ1D58NSzky2757xjS7q4qaz2bMFHQJeKefsbD1iJiWD9zs6oApJBHsiTpzErJsWffDknBR",
  "key29": "617mSWsJym6aXkmiCVgPL2W8o54g7VcUvBMzFYQs69ANssEtweqSqWiR7rEYrhQvUSVBUSmuJTur2ppt6XPF7G28",
  "key30": "3JScjPMSWSZ8RqWZeFzymZLktmzQu9zTTM42itdTmPJvYF5HAa89V6HGneTQfGzsmrHDWE1s6ZFBUn3CbH5hovub",
  "key31": "4k4bEnwr7QffGcX68TNpCaXbo6qCtxEX1EadUk1uk5msvi6faoqiUCeXuisALGCkiRDCqUaZuyr4qzDBpjV7gT3R",
  "key32": "569fA5bXb3eNix9t3wn7nPTWaTRHCHxDMqLD9m7GUvWLW3k9pwo3k7UJPSTj65wjde2chaxyEi32kb8a7ehKhQrE"
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
