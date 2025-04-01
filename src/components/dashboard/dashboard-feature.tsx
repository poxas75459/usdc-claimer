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
    "5eL9rjkNi2x1rStyziZvnvZZKUP8X9UfLSP3emqvuDker7fF4NFv72sKMqEuasRburiF7oh8VSHmZBsej37KpVXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mU95E5Rcaz68qfR7ykw7jFtJQERX8gZGXtxqaZtSCJwMZRgs2yVfm48wfwEvHfxGHSWBvF5osvC4arfoYXeshPj",
  "key1": "3ztM7pivo9cepbaKoxNFn1KN6kkGKyxm88zmTkzkWaFr29koe4LhkPHPom2Gny6Tm3jzeJ3QQuM8dKkdmGHT3mau",
  "key2": "4BeZG9FzwdCRj4ici9dh2N6hb3XKvUsEmWKLixRuknscskP12aKjPhzwpsL6LH1DiYPj3muvXHCnj6Y64g9uqBa2",
  "key3": "ecspcKX5NLwf8bdz6T7vmNZX5YV19UXbpHFD5zv4AB7UdKLV89xMdREQ1zNxbrd9KKBbPhvzkVCCzBM8uY6cGbV",
  "key4": "4hmGBTaphC4p8ip41Txa6aG3V4eiMKWfsRXaWcu9yWqwak2aqigSuGysxhfp1nQjStdTxxykMaE9hFUC2buo1G5W",
  "key5": "5ZSkju7kJQesHDxCRzZWVUTTC84fNJrAtpyzidxFHETUeqfKypaCGiBpT6Mb7szLpkudyT4bGMjycSS5j417KNqX",
  "key6": "YFFN2fpK9r3CEkbrxTkh4AWcLyDBrgSxPDHJEZuDM7S3RzEabGRq7DdxAG23x7eeM1ouADh31J6ZDkYNM6z6ZgA",
  "key7": "5guR1qvekitaicWNjMvYCXmNENr3iBBJ5RGpxFN78xSi26SAAgWZXAYydAiQtHAA6zPMWufP5H5kNWZffAND7kKk",
  "key8": "2qMNW7khJ3ZZuyST3h375decrVNEVJDb66YkPpc9zEQ1ctp5QGGjW8neNrbimxzYpHLPxSPad9LYgFnzmCJ8rFej",
  "key9": "4nwkq5h6XfJY8VvpN9uM2VnhvYaYPpCuodnf37nTcPj4SJFfPkhRsRF2HHtTMvbVsqT4gavLdG1vvyZ7B2VJyeLu",
  "key10": "2yWSTrNCAKoWjHKmjqjBar15dB3ygzQmiapKps8GFVhf1DGVy32sTt2KUJHUNM8LXysbQutnXRr2mnZVhS9qv42R",
  "key11": "NsY5PSs65G5GohRcpWyQVwJAHqWvoDmrNcrD2W2VVBgzMPStK1j34b3Mt3Bzspjgpz2Kbh7CuS7AkjojWcRZaue",
  "key12": "3eppQC4bNvdd4vuR33ShgvkRuw1hrczyesz7GRMLJy4DC7EuQDQDSdQo1XtipVmt5UsHFh81zb5azdkSst3b6y5H",
  "key13": "MxVMr55PcdHvusWCkAhpmDFXF5VATvC3vk4Rtb98tVjyiRBiHSfDbwPG6s738H12sQLWWAWgdt1Gj5qJ2ikwNYo",
  "key14": "3MhV4yqQScBUahJEqASzgM2Jf4W9LP5nc8djSs9BLsanosb547e1DiQ5pfYcmP62mFoGeGYB9XYVxD3WzUBpRY8a",
  "key15": "51JE2tikUPgTshxxuYGxgAt2N6HQPFPpKm7j62VFhSTNY3utAEHcyKxVsMx42FzGjvH8fp6ZwKKPRm1XUxgMCh7v",
  "key16": "674FdJkYMkWYTBjnTtrdc1dzUs9m28i7NVccxaWJjomHkzAT5YhZ2ZJdGm69xLHaB9JSnH92LdRByPPK3P3uASSv",
  "key17": "2PGG226L4G7BbBKrx2zvvPaJtLyfxTe2jJL6Jr2TTMbApgDtBncqARdHAfaMZtPu8Vi9cH8L2c2jX1aA2Uw7trpU",
  "key18": "4fry8deLTEAot52tca4r9xTMoQiiwzcZmxxXBoLS2PVeFBBviZ2bY53MXJMnrFdXE9zzjXRqMibuNDTeiHb4ovKf",
  "key19": "4Ckprm8VcPyQ8eqqRvTNaELYSggNRC9BzQuDB51Zo52s7ETr4t759n9UsoAA47bzMSMDJZspmLV6cjYYGJsHgRmQ",
  "key20": "2s7355F3ECTC2saKRfFebLNsqSuupELpaasBNEe9p6aSSrNNRt5he6U7z7vsyNbgJXDTSMmFnizSXgEzD1wcEuQ6",
  "key21": "2eKKEBKvcnBveEeMU9eSLutFReuZE4fdA3KDMZFkaBUoGCtdSC3cWhrUkiqQHyUo2EvFRy8CFCLSRPBKXGTxoko",
  "key22": "5T43Y47zXSFASp1VE6Bf8CZj2jCGaPFg2WnjLJ9ju2QUs1V3QJ6oqyYoKy29pncPTL9hUPszTntuvJ9LViWPkRCR",
  "key23": "2yZMK8t6QYmGDDZUgrCtiDijLy5Brx4kypmipfWxA3NPJV8Q5agcpWRnmKNja4QvkRMscsXAHgTENprBnkgqTYJj",
  "key24": "5fmgPgZthw8epceGJj8FeXqQqqNtx7sLRbsjBh3QzdaxFFsRLkMWVaFpVbpqDTuKKmQBLC8EahvWQQ5R5hUPqo2x",
  "key25": "xHpY8tvELqZRU4Rjy2hmfbArsHYcaBRkon2tNnhqtzjtYjUbrmn4wxikgRQLFiVV5gCT6aMisVZZ1oUeSY6zGSH",
  "key26": "4EzhHHyN35SeaAnvfvrsbwSKaSifPQ6y19tfWSdSc1116KwUZhKNx3jx824y89DoKr1uFwddk4XruCCHrnSMK915",
  "key27": "UymgCV94AmPVzS7sQxt6GgxY6RtunzpWurY6sMGSAtCgRuxbfrRhCZSm5jwTe99yDKScmRYrs9yaJK7wU7GUD2e",
  "key28": "5PJfx7dG3qPhd3iNtqNz1dBpuZS2QvkifWPBfw1DHV9yCLRmNPShbfMC2qeqoW1U9txhUBoLrxQUY9v5Fx1uXN6N",
  "key29": "3dW3KYnxY15swf1dTz4TgBmNHy6TJYkmZUfYA2kKQxeNPGuACLKwiBXoA9Tg15d16JaCrkBumFwvxcHxF3pjg5TN",
  "key30": "25v171uq25ijbo5s1hTxBPjqf4E9hUhMDwW6MCf1pDzvYnnJ8KJFVJmsQJtYjgjBcXVPWevAbMPd1VWYYyEdafby",
  "key31": "t8pcAtTaBZE8m7AbX5EnKqPhDqDg5wDpKs2ZBfadEM3NrTDPhq9xdDXHrBmHjR4UZeksxwwYJPLvpzFXiVFovoc",
  "key32": "wADpJ3Y42Haf137PkL9Qqj5taGeKqj4mBpjTBUAQvszYVaxAJrpZ7vFCMLdiAa4yAiv5S8aCptKBjQbGo5shnba",
  "key33": "2Yjkn2Jz6RVzz3A3jDsS58RgyZhBTfCZKYcCfn3fm7Y6CjHkAE1VgzWNu2pf8SFfXfLijAV31xhvNmmYxp6LW88J",
  "key34": "4QE9J6M3RTbLb81F12k84AmuUm8AJzxoa28RX5RyiNGu4vGuLR21mogE999gLDReQYEgx2YsRxhqKyxoK45PR4y1",
  "key35": "jXqZ7BUVmaiLiSzRNg4pceuKgBT1KQXrHmonJhQmZnodchtu2GBr5xow71uASG9MbxWfozuRbGwK63eWCYdKFrK",
  "key36": "36jrQLpurbk4UcigHHDbT5QTiV54ANNwhpS15Dxhw1qq35zPzw1FXD6XMfsGPz3nxESkiw6F7X8yH8PaETbDqTAr"
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
