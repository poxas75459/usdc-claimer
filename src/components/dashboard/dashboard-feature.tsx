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
    "2cYmQ3PvY873RsD98c21RcxSD2agBocBKs817vnY7Qa6fqMPTS6MFBLFDtH697QzEgiS9xUvEBTDtmNXqquhmXDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42xAGN8iVb4m7S2ua5tDiguvVCUSsfakt36ko5855KbWGUNuaaXhZciJGura9NV2GuNF737USJShv2JoSWG9YQX3",
  "key1": "4prVWFCtE3F6VTjRVNYBnh32UbFPvCocxMi6Eb1wF7EHgBkNxc8gAj9WCbeDMHjscnqBaFvtYEb2p2JeuocYBD8j",
  "key2": "2GinNJCZ8y8K9q2svvERtxxnkWxY5YCtoUxgzSV55AcUa6UBnLw86TcsWXV4LcuoZ73hsJ3UXUbt6YekDjZQJepy",
  "key3": "66iNt6hPTRgogyuon42CwasgD8QofRymoeZr8gGMsGHRE2Rz1QsWLAzgJnohmCdspvuEhABfeoEsSYuKVQrNo2zv",
  "key4": "5At32XsWdjmMgmSQ5d468Lk2pBscsDdbJVhiuMc8NZCjL3imRw2dL2VNyby2KjP9G4yzNYGkoVdgBrfGWTL6PKgB",
  "key5": "2Lw6x9ru5K5rHGcGDWPNDf51YpGQnra11WeN3eFkpAawmH2bNUhzh17MFPXgMipM3b4ubf9n13kNNFv8w29945XM",
  "key6": "3zKjQs7snEUvWnYavr6bf7nPiLkwdxQcXrx6fHgF8YBPX4c11zLeHHPUeW9c8G55ETECE6nVoH5rFEYCaFwMvra9",
  "key7": "29wxEAzoiWRFAkoLK8pYhPPdsMZr4Th58byyhWHT7kuzNKg1eMSJfmnBMKNJwJ77LYUMkrh4orgwvwQ3oiYq1LuR",
  "key8": "5UPqRwwPLgfuchzhGWBic4ZMx8io6exj7wB7iuF1h2CHrqVTyx95uG8Mcptbtc67X5zUNYqzqoa7gcKpXgH8CMWF",
  "key9": "bh5okwLxZ5FvQxK3PqWVRAfXYNuXeV263du2kunr2aj9tVNM9qEtqwvgTbpSjtR7rdZBbdDn3tcy1KPgRsh3pyh",
  "key10": "2kJg8Z7RY9p69EJLdUpXkWfaZ1eaWujbjSYWN8i28RD2yoaxkMShA9HvzMu7dRN43ZMjhemdDFChqpFZtExs86Vx",
  "key11": "M8FJ2FHwYWD5W5sgY8pVxVvNticBFg94puh5o2Bsw5Z3YsdSdHubTkAHAYdvS1vEWNtEuu17mcBfrDzXEYVd4S2",
  "key12": "2byjeoutTATHWEZjpJi7pdFL4LesnwSZYRBGnRdaNS8wvMgiiyjnH6N9in3Q9ac9UySS2qE4ptqou6xAVpjTQ7AN",
  "key13": "52FmfG4poUdeaX5yPFK4bpDm8NSQ5xEhbUgQt9xi8kCTQBtJ4QEvrPVneEXUjVeDNyvPoMcjW4fUF7pFABsakTvi",
  "key14": "42m1mtjN2LMknvQ4UzmA5LGkB8fNDLXZMN9Fyyw6aD3qFFfdoMFzHQkRYci7qXH2B3aFZd91MBBr2cSc2kCLv5DY",
  "key15": "3jpGdwXSaYuKjo2Av6Sr82BLeCE2jG2gS87FHA2PAxwXNBqctzdhNH8koszXhEHqAqcDcQqKyXXTaGuVEB93R975",
  "key16": "32rDJsXT9XdBxFfwHtG95wRfiaeTyxtGaESbjipcjXKoVEWdZxdLKawDh3Vgn4ypohKbUs98Lmvy7NmV2cu1Yzn7",
  "key17": "31DmknJa8i1JQq9ZeR39ymrRVK1KMMT5vzWxfmyCGYv1rFehWuntSkok8hQSi5mi4uzQbkSFWNFVy9bbgbYLSSRe",
  "key18": "3McYeEaDpTaTvccdr1bvwQYZuWd5GiQEmTtSpwshxefVaMcZSjL2HtZL2pZ72HKfHp34Ykw7ocSgZm5711gDJFqr",
  "key19": "69krvjEmGDLoAUL2fgzLt9j3jSa73ueyNfqFuG4HFMP3ZVjAPk48tkNyiLZBh7CBzkrhq7ywwjUo2QN1sfyXg5M",
  "key20": "2iEsRKXTNCx46nLTnX5ZbL1sXFYggDJ8MwhJSZQDDqn6S892TozAcm5oxeZuV4wXZQkmj7rMmKByr4P72Bh511n6",
  "key21": "2fMsstXyPJRR489nQBjipvN4xF8wK15ETUToEdHuFEVRNaP5f3nQPRVijTrQgLxam6JqMLuq6LgUikXNp1fStw7K",
  "key22": "2LwJ2JQjMS2PGvMHrcqJr8iTuL9m9E5rQ6Com49gYEqrrwVp7eF7CYUFrM9VYBpRcRyWrVsCFJ3anaFAT5Y9eYiw",
  "key23": "4fedfh1362P9eQ91Q3KAEHPHP1K63XP6t5EXkgAo8GovLGdkbLqHRS8dSUVRhnFkQDhoMP2tPNdtGsadiC4Nmmc",
  "key24": "t3d2huakbyLi3B1DpNMBzMP32Uuud73zzhdNxiTJSna4RHr4HaP7tdhoGHPNsoAaVKpBVwVM2oBaU3HaZnb18Tp",
  "key25": "29z2QP3DDSQhgmKH92Njy988FkVDefxs1H7gVeitHgnFnwwYj5KrtADMpG1W9b99DGG4Q4KN7d1HgWS2ZPfSSATF",
  "key26": "5zFNmcpnq5AJ3D11gUtoEbs1Z8b7mV8JuBonYnEafup4h8wAqfAhQvV9kJd2HFYnR3kiFB514rjNYC2iT9JWGNFi",
  "key27": "5FSCkYCbbLYv3P73DQ5L3oCkaa2ef5WZ427hCHa6xvdXut3Tg5B86CnstJD7ZY8hAunCWnPUGLkvxa68iHza4SkW",
  "key28": "2S3WhqdgsZYcS3R7RhxdQ2W2q9UkKRAS9sDsyh67EuyAFNsB3ErL2pbJHQcgtcHYLVjVQELGVuqQE1nSw4U6f1mT",
  "key29": "4PcR78g2PiKv8yRWu6P7ZFLGQNRWjngqnrB1e3Mc1DADDPwFEzBRWQDVPuckQFRuJwRxPfqDi5doKcBg5MwGAVNc",
  "key30": "48RUAEtgKx9b27gotaTQVtkSDZLptC195i3dcCtYtqQ64wVjm8RgJmLhP4ei1SVkSYKkS79WgBTwaZ6bbEkbeo26",
  "key31": "2uPnVBnFSjrWwH5Td5hiWRTC6SnWE4zfRVEJGDHgfcQTA4ypVknELfiXT4zFwqynb13ZVQJqHe7H5EfyJkG8nrHQ",
  "key32": "w95AnHZMqXn8FmPPCdcjHrCLT9vBbuaqzHHUQQNhv7jzQPqviTYM7xrjY1eoM2TuPoBSAewYxdbEKEH4ituY1jG",
  "key33": "3ySDimhWJUAY2VpVGaAEmwrg7ZizMXfhTPtqqTRQSwNTevryb9KojqbAc4WyiBoG912PyLtSv1KTUgu2HXjdG5z3",
  "key34": "3FvZnAx1GAkm4JQgh2BdvFHX3Yti9EfU9LZHzkkZHUbXRX58qg5z5KLGHnMULXJYHDUDqLMK6RLMpUiuVxYpXCDm",
  "key35": "2rJaaB5bfBDpNGDzceoDFZDeGJhKy7ikwpH2G2sFh42eYpmeERXWzbecbdGes6i7VLks2ZsH96ZgVebVYwyPehgk",
  "key36": "3kLiAi5ChNaPHVKXnweQD8pJc6Vx6GE4Dw9umnWB9CqMP9eCaUaSpyWwTLxh7eMxAa8gXpgB2X9thLLf7y78VH6p",
  "key37": "4vmBHSct837MxE7kt8gfSNWSZRrsHfFDQM4rra3n7rKPmSJX8y2hR3ZxjTJYRDbiomrmitWSC8ypYN8fQaKEaGS4",
  "key38": "5nD65fpLTyiKQDxbJMyM1bxMG4rVpU5J29xat5GHDUkGpUjpzU9U8DykBzMh6Uuqbg2CxCWi9DAE5XMkLBFaTrjk",
  "key39": "4S5oxNBSvfkKbk7TnDww85V7fc3V6tDEwmUTMRkkJJiAEr4NySSUASbLoomRT4NV45EQ9L7YiuaEPWXR18iKztKs",
  "key40": "2RLHnoepJkmB8y42qnydDbnBzfG2XPAsDtbMGeVWHYSg79JDpMqQsgQQ996iqAnc44neLqAcFRFcDShYWLcjyE3k"
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
