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
    "412gzRjS9JRgDnhdwCKYFuwm4bMWMuqhh78yRVK1g8SjQpci1e2xaGxkHgUZPnALgQ3Kq9UFMF43DKxtw6FgmJqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LYqTPEpwAhDCLgVYvDa2yyaYEMQKrBLkwG4zo77YJk2Gbs3drp82G29wEaWngx71bn57KFUzQ7eK29GpBeWoBzL",
  "key1": "54kTGkkgB75Kn3BQtV69J8mpH9nunwLFCmr3Gt7cd7WtfiHRaeS2L38MWazKrk2ycPSchG3kLUgN59PgVncTxoDk",
  "key2": "3GiMrYTHmtJ2MsGX6YupjvKL3cgctdUcaZerijwTNuJELqt8dNJHqJr5qtf7z2m2wxs9CLETsNzaPncxqqrzutoc",
  "key3": "363PDkebAdJAgY5pzwGHTx5wN7LdaoUPSd9fSdgPPmLdt9v1u2c6hkwd7s9W6ZcD4Zfyyxckb3heXuLQo9e1yqCV",
  "key4": "3vfaieaNEtfE6EwU1rbo83i8XTSeT2AdozttakMsyTrYymjco4SgBYpkMYkDVuZdXik1aAWnwu57FfHE4uhZNa2H",
  "key5": "25YmM75dNyrMX7yghhJ43bs9UycDPJLAtMqHChqnzfdCfVykE1Th374vaLPjHg5csVaYzEv8bgmVMuwNN9eGspzK",
  "key6": "2Rjo7nj4fFyiAxPK6CA3KTgu3eK8LjLQk9VsNGR8qejXK2qAzpFvVYdqpcxCHodskryzmPXwY4rKCNicbRWcyD9p",
  "key7": "2FQ4aKdp2XGEKGEhxgtbpqZo3QWeAswnPmZiSXFUb1XQ3nA5xPP3zobXmsKQAWpPWQStK5s3ALK22zmfBFcAwyKn",
  "key8": "3SARAKCmH6hKZKAQLNxGkgzc35883XMPYo8rkgspoG6sBgjrVuEuHArurdTxUYpjTW17Wi1j4WHA2wVi1y3dbzmP",
  "key9": "5JkrT9nxPSH3psBiQXMzeU4uB5ZktX5XbXX4pLCN6q4WP9PdBRE7veSAtDCmpkwT55yWGSPaquLZRb9o2CUgz5dT",
  "key10": "2KtYnYQssCxzNzNeMPTDbsTcWArNLMFLZmUT4ik23q3JQw8AefsjnbSYXu4Dgh8gs8V4oKutZ5uKdwWyWo79RPBZ",
  "key11": "61H3t1gYt5dPteF2unu8vSaESL4rXMpMPjrCsX6522YvQCmEKEa6PNAy21ovtZkgFG27eTnM3fw3jy98vttr85sG",
  "key12": "4zpQpmhqfRSuZV7ESZ4raX1irP3eHSBDkdGHdwhwaSAoiEuj6H6CMZNC5pn4HNJZMMFkhvn6so9KcANFLzLNvbrc",
  "key13": "3ybZGRwBVLdbbAFh7xwdUvCZZx72pY6aRQCtgakoc4xfBc45syPZm6EbubcdhmvajKKDpfps8en9BVKetEreGUbE",
  "key14": "4KEawGkhkv6JPkBKpFDg2WjzQwnhp4Mgzz83jEqPGcEKjM4tZGJaDehJFykwcRmK8Cz34PHHhhB3Gdu7HwNYNK2P",
  "key15": "5kyrFYtHrSHnymLm1VAbbe4qoMMwGyiY2qsNxtP33rehkYTSi9ZnG26j17TC3BGtbnCQtGEqf7BUrQnM4Nv5M6aj",
  "key16": "wCNYknUdyuHz9CYh9FMbuqnfBSwwBJ99uNg48Vox2CBQc4xcNg3s3yCFu3j2i4DQry1F4iCewRNX35p41FQ4GMo",
  "key17": "4NziKQ4HwJrdx5TLiMswxYMGr4eyu6maRNZshfkQQdrSQWgspnXk4XrWX9mxATLd51od7igkhHGeXvzKoWGyGno3",
  "key18": "3Vn5DNsBZfmPZ4mYpUUQhsc6MTa9yShp1zRXASAC3GZk5ayYwwNLNVoREHLiZCbo5Jxs3RWvrRynUSfwtfCSkHFj",
  "key19": "5ZiDyNxRHUcdfx7mdef73ywpg2NkSnHWEdHd73RHwm9SZqN1dxGAtUuKq2GSa7AVHWg54Eua31ocQ6FJto5pMjcp",
  "key20": "3Y5SkCrfgUv1yH7yTN9LJuXcBmGGwAsLcLEXQpPY4iUWgJ3wVQyvuRZAejK7xfWkK2ZP5vuAm4ycqB17hPX5bBSA",
  "key21": "Qi1zw8JHFcbyQgt5tf9iZBnYhekwQQKxwK3RGA1agPFU53ZsSK6qxbd4zpiuaihAHJU6XgmfoUveKSAJZpMWvYK",
  "key22": "vizkjY99utNyvqq4FUqSDoLiKi18d6enkZjyhLovUCf66sjgZwwZwNuhzt2xxysxs8ovqy5zLEiQ86GTZzNxC4h",
  "key23": "3nswmi792YFuMGhXwcByNATKgeBsRXULgLtYBQdNnKjqzWEf6k1ZTxiqNyH7tpVkxPR9pWUUHmAsxWKoidRKyf9S",
  "key24": "3vyHP1PauFSyXNLWc7B8kfT4Q5vfqQA4PwYNwRX72cRRBnKVeS8prW65h2EgYqH1XkFEB3M4zUh2sJZE4fYAPtXo",
  "key25": "5shqAxVrbpFqG7WwC1p4FsbENRdjsjfsEBp3r7NbwqDfV3zGDtK6wAmhWVxJHBmcXmAX6TvYxBeiUGKYczWnTivQ",
  "key26": "22qCGrcKuzaPL8NLGRtDq7xHxg3DEJkRda19kjrtR95GeqSiWATaZrDh12w6DPUwu5HfbQKsSXzZMRncT9SsRTmg",
  "key27": "n3V8ib1igGr7BBSyAevuCeDxSvQjG7GA91XLWVddkWuHn6hA5KKAjisN2eM4VQA1oRdQ4nocvneK5hSG9heqMBF",
  "key28": "1vt14QB4m2i6DytQPpBuWhv6ymYmUkjhFRXUB2J2giiAeevcM27kp3bgpUxJWboyv6gDwbq5aAeC218473xkgTQ",
  "key29": "3ZwbJz8ktsgWmSPnhVhKCx79DtwbtgPZBvMTyJo9xXQcxq2bjXDEZDvDW8UcvXhGLABjRigABMtSwtxmuzKKMTGY",
  "key30": "45LvftZftWUg4B92b1iNkAXWyrEe4BZhxyVFm9zibgXC1FAcFPDCC9jYboB9PrXqAinMjGtwD3SwrxcB61z5ESRR",
  "key31": "23pEN6qcAtcXuH1wvc5AM3Rfbhbjg1p5bnqypki8L66fggwcJ5V9KX6M7g7YYXbuzhthFM2B7jDCzzj1YRvk83n9",
  "key32": "2BKj3ukrQ3o5pAZcN88CgLcZRoDZUUGkQ2dCimC6GnL2XQFmaDT9yqfcE6A5xBqG1k6Tm6HLeCMU7MJZRdBBQWi2",
  "key33": "2ZvL5JY73JAVF86pDSGyRP8sZYaVW45aA6pE1RteBXZC735i76VugMQhp6ABdpPFG24K2tLHpH1Tn2jocvw8A2rd",
  "key34": "512THj16UAyGUR4mTBQVwSnE3ucQ9HZw6NwZ1gfHvqEPFNYoRsdbC9Qw7fkhYfotFYB7aBJRE8N6LWRiGb6P64t8",
  "key35": "iRV4MjqwDTMFrHBPMiNUPL4Pk9zaw8fSo7JotdeUpqgZVBxzTWB1S7TQVt5YDyQpSfAK9qB4CccuFR2SdHD8eC3",
  "key36": "xigVbakwe3a8VmynvUHsBeBpGiy9MUbj8Y8si4pxjwqJ1J5aWYDYaQaJYaGwAaanGwMwcfaYs7fCiSsZZvojG7Y",
  "key37": "473WmYkfCeFBUnavpAg3iyXQXkCsspDNG45msmd4N3qMzTbucHPj38Ezajuue5fZkXrAJSxz1AWgNAZTTrSaK4ia",
  "key38": "ptdkCB2WY5fVfe3JJJaXA71QfovJghSrrwTPibRtjHvohUywRuaU5Ng2ykcvHx9DYafw9uVAxjACULDacsiqRYq",
  "key39": "4hDm2CXfy6Zk8UtHh7evPTqUL7jcj7icZxKnJfsLbwicaVEmX3rr536FbdUomcqDiwJUe1B3rfQszQ5wyHkBuCjV",
  "key40": "58R1ieU9JB6s5m9CvyCfU9bPghxJQN19a9ZxJz2dpTzEShU2ouC3ZKJWJL5TnowZAi9BUgWUoeeF2aAL2my84JFE",
  "key41": "5nW1m1MWUXEUXYAwY3bXQasMFmcnqavdb8v1fDbT2MJagLU8sBikenPdpnqeFh5yEiqcdbP4Wzs3t9QPnrzF2gPP"
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
