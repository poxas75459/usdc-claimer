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
    "5s42UmFdXNYkWvPh7neFogZGXQj88brzGgmkxrK4p6pYmCy52356k999AYvTvcZYuTJDVJXxDzZoRjnNo7mfMZEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NSBMBvCcf7uzFjd22xncugpqe8EveXSBrto3VinNCuFMiTntmftkkQXT5KDkEpUiwMAGFG52WL8Jp61fQLPmHbo",
  "key1": "5wNMNxSnyuTbGLShfSY73bB4V1VGXSi31u49gqFNaswwkKVTM7cpGsf1YAFTkt4RY1fZ8mBL1djx8UmzJvZqDB1V",
  "key2": "2ZPk6FnSQeWTRThmWKJf4WxAFkcaprNHgCLsEXi5HAAFC1Y15sn3XDMFFq9CdEkwPRVB1Q54cjrsHCT4Yyogr28w",
  "key3": "5gL33AsWa934DWTnPFPFUL8JvEkLHbCWuWvByi6smurTS1dZqLRN1p5fF8RqccZ9waJvuc5m9UBXrkPifmzKYRxA",
  "key4": "YGvG76tcyGuCHskeC1H11KzmnsR8GdpWC5Rw9MhNpKQoqF5Km4i3uc8Mf5A4oPNus4fKWBrx4XMnxcZxSkUqRCW",
  "key5": "5cuJ2md9cRxqcYWbJgr1FjVzgkJJT5nbhRUWgHofEkiqWftRKtnHiNKdvGFystPprDGMdjtf5hJuPFgf5XYb1j3U",
  "key6": "5Q72qkgJcfdaCjAjBMQyUeDXvTyP7deYkJCCjvymggA842ZuKkeyATT66VGbfaXh6TEC4x3JdZYt2YKrYuo4MBkZ",
  "key7": "57NTEzxp6CXLAcqeKstB5jz76jTkUynZxhRSGaSUFfKy55D8ogzxeY74LiHZzWbDa4RLgBoJ8AJEwjNsbzr59cXx",
  "key8": "64mkMfgoU8vEftqjHJRfhH6HVss2KDqdEHDZgDkeQkpLefTomBEHGc3EUosuXX9qQscnAeaBNjpsfFWMshZPmYEK",
  "key9": "bgnUM7oYSkf5s17d8bWV6T9pPxXhV2FCMT1RB7TZKbnoyGN3Z1LLp3ELF7yc9TigapZqVFg3XGV6wkt8aUC23SN",
  "key10": "5XzfcMazxZGJxxjgKHsFAiA66P79WFsQYqAakhBm99UVZjY5eC81MEnS88E3TWp3VY9ss3dujkj6kTtdxfy2C8CM",
  "key11": "QeZ3ZzTBmTFS5otxqXJPGoGuUudahNTpq1y9uzMJeiHAt5x1Q4ezrtPBoc94yUQLBqFQ3xV7SB8p8HgWb1nRris",
  "key12": "3QAxa9pzpuidJ5pW6E78Tn97XD3oJL1CFzzV8X42suoz1ziwCMaxdnyK3gn22EiG88UCnS99kvDwqmHTMnXmRRm9",
  "key13": "5nuzroSyHC1M2CWjfx1bcL1VgcLXTLbjnviwGzrNwi1VG24RuEZwnHTDvKPGfmCErheU7YhXk2eebXWNRrFLxmXi",
  "key14": "67WQmq5sQyTtHKuUcDm6uUSzvjKaGnPxFCP18v1EQuM56CEPQcDpBf371mbzZ5QXvNzx8d4wri4VM2CR6rztsP2S",
  "key15": "438boiMjLJ36w2reZ9mFj4ZhkufVoV9BqiRzcHCzAYwLPR1tkG7WnmwMZyXMVuZc4shNTdPqAFeuhuLhnHXH5KWR",
  "key16": "5ZFRSqw6sz9XvyS8V7tLneos2ogPkDcDmWsdPpVSUq84atT1RnhbEFoi8yRxcLbTn8o8E3iZ3GoT8GJs5vqwAJW2",
  "key17": "53BGjm352Ewvo4AzMVcwA9Nh981noVZPz2Dp47DPsgb2VCMr2udjax5cASGS1bfnD7Y85f4a7v2LmzbU76KuGjh1",
  "key18": "DnoVwG29xZsst4HKTEWfo1Hzv2EmCPojzSLqN3y27QtePRNLmSaxdQVDdNqmQ4J2ibJaS5S34NtGNxoCzW4YXJG",
  "key19": "5pWyk6NmDY1FBaFs1LbwV6AeLpzVWvr4d5LmEGnUCsR1z6gdy25FVnja7Y7yrZSbnxWtLGVtP1T5xTGnB1TcsEdU",
  "key20": "4XpeW71bmYHg7YwbwxaeXQiYfZHhHT2xvoRooHBrmopcgAXfo7UqqJs6WEZ1hnxZdqv8WApMmat1V4am9HDUWPoM",
  "key21": "3pRZiaJbbN7QQTFVnsVSXpRWe8akhoEpWB255b4S8Epmgk3vJbT4b1G6jU27MJ26ZDonx7JmP1ZEsVQ4RGip8Z5X",
  "key22": "ZTnECLKaibSNahnBY2VEhMJxuC5nKxUjkdFpqjUxPn9oras1Mi5tu4KvYJma7uaq1KizUyLvNnt1PHV4ZzFcgC1",
  "key23": "gXZRzRX2Dx3vjRHvkxL9r3xK5BfjqEBzPR4WsCgFkNLUpBXqnMheng5JQJcajEY2AjZ1FVjCutbT51PzYZ8xRNR",
  "key24": "2KgChsRcCf6U4myBgA78ssdNg96ekKYbk7DLb11PN6KHGAPmLdRv7otq6w66AzGCv4ry32KmAGUuoBasRN1DDfc5",
  "key25": "2dfzY17RzqQXXjbUi3Q1VjYLDhgaKRGkzNnRd12FEvfhCAADfve5KqoszoYCYarPYbB7HhctwW2rTBehqwepkvB9",
  "key26": "3iRNCf3PRVNMc46xnX1KTzHBJZSCVHafmyRbRUZkQgaFLTen45jqjQTnHL22yRi1GdZ7UMsKogy7r5SpokHXBcoL",
  "key27": "2TMA6o7qJQ1MaVYgRiLcFuPQQVFwCQpornmqtVhFGb9U5XLUPyyyKUg1BzL85GoyhydnTviBHtpsxWUcR1KYo7hu",
  "key28": "5brUK5Fbw3iPFS6yuabPbsG11oR6ymr45jezZekS1KbaPfvkVU4ryoM7w3tJ6C3UqoP52tmkQsV2sSF3FcnLx4Jy",
  "key29": "3LD5wKKKxFbGun3xPM8eZsRgtQEFZX3vvr8roBmngn3To1wdtMnJ2euWy2KhHMcXHavSEkknec4rMJ9YUqko2oFA",
  "key30": "3BfGhWj5itZ8kGdafs4hgufoepctXieuk12SXpNbTt973mTNEwketBif9JSfTZDhMDXjkKurUFAAAfGGCr2rjPdk",
  "key31": "2bihX7ska6NMgD66dvwdqFnXxbThsWQKy1TFHgAzcL88YArp2nmo3o9XGRDLmf6yevSzZjecBAGRChzCRwGZ7jRk",
  "key32": "4BGC3bD7ENRgKApDTMTcmXFkHWRdEtH5fWncBb8nfM2bHV73Lo32JGXnnsRweQJa7pDDAHazSiTHiiCu8PYAuWgQ",
  "key33": "3y81EhMepX79rp3mVzZ9NNeUp3F4tr6RES1QtzRuS7wx3rja3i32rsMq9RG1ZZoGCjWku8jCyZQt3boUqWupc1ip",
  "key34": "6KEmC8w1asXBj5oXNouZpE825zMrkDFLLVobA2JAuDsQyCF5qqvNAu6wnEZKRkmDRZjPhgx8CNkd3ZzsmhmHSEk",
  "key35": "hGWsCxaWw9wZipnJeump3cjGMqZHz8zyFSKHje3TwCMKyXtWEnQHUHtBL1f9GQaEHaJB1qF2AWbQXy8Epotc28m",
  "key36": "2zwdGPiA5iA2VSundNk8LFbro942G9ARJ8Bi8YENr192broZZP8F9A6tNcEXcq6RCsAFjzLpLMzXwV63EGM1p1eC",
  "key37": "2erW5GQ7EcMo7P9mfsxbHyhTfEmibVKqFfiHwJr6cmXfB26b8NWpQ5zJyqnBE6TTXibLF7uNsrDqk3kgbuDVmqCo",
  "key38": "tNSMnAg1sQj2s7hWW25nxVNJTwSJgNHhQ4Vx8dAWhJGvgQmibWvvEB8jSYgRqtoTBnBm5CQ3VoSyQFyFYHoLfYq"
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
