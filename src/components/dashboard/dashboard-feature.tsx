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
    "4UBmY3SgA2NmRZN33uZkUrmaPL9P18aHtWovzJbfpdw7u6fexAsSruaWHEFwbvLh5Bx9XCSnWnQ3AfvA7k1SKYMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "625aZrVXU96Da9eeJ3cFERSJLg9kxf33X57UAs1zKef1e4AYwMZmfi9qFwt1jknhGzYUEpW1MKq8rQPQivg7CVLS",
  "key1": "2mDUDV2Tdpm6Cyt5SYn2cnfFtYkThMZXYqcUkEksQHB4ue97Rr2RG1AtaieSvJVD7uFrnn3Nj7b1UkZWrVRh2jEm",
  "key2": "4h9MF2nXhSSYrGm9PReTN1nY6Mjwx2pBuEPMc5tuFZuF37fzV3gHbCH9K5LXGKHPda6Y9pNH7c7hkwF3BgpEekkD",
  "key3": "24XyYFNrCntBnQTW8hZt6rZKTDAKnuNB5BSe5rtc5jmvk5pcNVcjKmJGJGN76AT9jsGzfieK2Z3beXiHoUNYpAXu",
  "key4": "4idMBXq9LAfB4TVNEUh41NeYKJ5VN3tTvR4uCWSs4vup6DKsFnfrj8Bz6V1DSEuz7wUfTSiw1xzc9gjQinHF4wvi",
  "key5": "5htb892LYAJKXQwPLNM5fdor7NAeZtbez9DhppY38HV8d1Dvbg8kjmfP4ihCpW5Bssaxeh4cdEBfqHuZatSWrxSt",
  "key6": "5Zd79RtYWW32TmTMsRGMkVjXCSyWjFajfZr2TpRAU2BooA9x4r21HzSXxRajKQfnYdu9N7NouRpAW4b52q2yyuD8",
  "key7": "3bS57JvzpfkP6J1vJA5rx4jC4kc1JkZXSYx1QSnn7brvQmR4iNQX2nj3sT7EyjPC25dmVWG3ZR45UfRMVSmDv2hc",
  "key8": "3fi8ouehBJe3bEkMwJHTH8YE17iH4t7rJN9AnRHQkS5H7JD29rESURugzybsr2LLHpCYVMhUQ8Qs5PKHSWSR8J2D",
  "key9": "3oi4Awu8pM5cV8DrJNkpxFp7PySsBLPivWTC3nzXmLX2g9iQ6WPzhQAVRExHbNmQmZFQ8AEF4JUG8CCr5zrmMrnj",
  "key10": "KTvpZTBmDfVvjtJfnWwWANMh8BNpmDipj7VVaPEvbCsr8GcrtsXn9xKod2m4Zj3mdVGRMb4grFTQnxyVQmPAGs7",
  "key11": "5TBDiFo8LiNGmsPyP9KovJvAR4pAeFkTPEA7xSMnAi52FviCkhAnfqCt7meTxokt7mc5sU5vSzkShJFkxbb6Trie",
  "key12": "2ykvZ6YsjaiuiVjnJV1zfR3kUVRpriodoV4pTaTnEV9mKPq9o9psUqMu5XSm5KowSu1REWfD19FfCfg3s4amZ667",
  "key13": "4DzNvu5SFVPw1pvTD22jStgi8a2Dh6PyNiMENjFDnvUp4Mh21UBWSd9mXU4QZmC6UvyczUSiXg8WpcngfsWzKn7G",
  "key14": "3uaLRyccReudht54gYk7fY8mFf96YSZq9iBkapeX4zYZQ5jeCxFZAXBDVTPz5HfNNtVLUZ8uACh6JBTVG6Y3D4Ye",
  "key15": "3snd2G7Yv9iXDyEyQYzQ61N2rKHMSBVzA6UcUaPgkDoSi8iwrfcXNrUv9nVyKDT2Ge4bvFriQjUhrYSArhc1Pv5V",
  "key16": "2znuqmGNuJ82DjS2HZn33zdKRQ4ZpMoJY5pq2yHjpyZVZ2jeuH91TUT9gFGDEs4QBLmRgaZxTz6giVZgzLmudbKH",
  "key17": "5a1DR1UU6RNqwSsC74ax5hFSmBYLFaTHjBFpXm4WKJkLFzbVNHpByLBwBxCsm11F88c8Sv18WxyMk3gyth1UzBZp",
  "key18": "62gW77fo88obUdVvxAr95oBH1ZHY5ooK5uJwCoU4k9jLnj4RWhGWcyzwUV7udomjhKSL4R1xaf4hAL7kTQcNkXwx",
  "key19": "5fsU8msGn8QkW4CfXq1Hdke68TYABmGhFDY83YZdrdTNH9zKT2diGj7i3EE5zyaKkdSTg6oF3sxA85XV28MTjgix",
  "key20": "4VBa8UXtA8KqxA2o5wZz5AxMkxa9UhNNsoj5Rzf7XKTHeujd166Gx5BLd3opS635tFCkV1YtUjvCz8WfehXGuq31",
  "key21": "RN6vgUjGpChP827HpZHEAEqeGAstSAUfBkv3KCJus86fvavAEEnbuZtyTh5eC3fDGYfKfg2u8pmYnux1sJvov9i",
  "key22": "34cpetkrTVvtMKtTGSU18B48PDvax65Cgcp7aVhRDPCWXfZXdrJnkkPVCEAVim3uXhB9HSq5Cda5Pj5zt8DyQXz2",
  "key23": "5GG4trr61PssnS63NqhcYzkwvxPuydcA99mRyuxkjx6nFLgKHHKUEuTLqXGhHrVAWX4zZrr4d7Dc73PEU58mXtBH",
  "key24": "2QRP3qKJiSRqrXBsWzmGiHxKpKBpEWmnmXwtebUEGPS53h5nLDaPgm9BqHBiyee5pKebFWeT2QR3Mg5LPpcsU4F3",
  "key25": "2U39TKMMVAEkPfwHtuKM1QEzpSiHUt98LEnhuRyhWbqn75WbD3mSyi8cEX1yz3cgcBTTJVg1txWa6ciCefiN7dzx",
  "key26": "miNijHvBbpCek1UrDa2bkzSqBsvCvEfuKb32c9vR83gagSB8UDa3Ym1wAGUyP1YkUBwwLCPwbR799WPqFdAzG6w",
  "key27": "3BevccpDwsXqQAaTov8auCtGbsaj75HL5jVSusHt7gw4D2sfvZZo75g9AFLK6XrVFUkNNs1AmU3THixR52Cw2NoU",
  "key28": "AXP2g12PMxNNbHo99qZ2wWzn7ouztpzYwENucJN9pnhkZXeWFYWDn9gKRZY95CrnUwRqbi3QahEWTiZPVA77tZE",
  "key29": "4dnZpRSMrRrJPaDC2i1wGZnQGMFd6zXzPeFMocz5gtG14BeSMCvyRQbVQtwir3eHTKUqYkscXGKTeT8Hv7XokjMd"
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
