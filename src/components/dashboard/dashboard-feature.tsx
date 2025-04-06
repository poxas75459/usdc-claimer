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
    "2epdgLqfvLuqGyGaxaMptBcnKCEihhJrcFCaF8asctunJPPWb71JX2vGSXYMaXeBLzXpimUbU8DsyAQXJJL7sQrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yEnKXPbQNZYWnCg4rTx4qfJXAMdKyiDNoMSznrdJhu9xuemSVcQafFRLmjXwCq2DTx97ZFzpkD9Hbia8MkRYFmv",
  "key1": "4VCnkARt7xU9tJGiPYCcXaUUWtTFQTsLV39xfRad4ViVGVFpejbUsKu8GQx1L177mqZBUKENpRbuZyE6fWEwZDMk",
  "key2": "2hbGdnPGUQLZAgnykFAs9WMgpAPgEYXNhbikCXVM5V2upg19itRNBZrkWqfh9LSnA5bVGnBKM1DzeuPUZ8qinxaE",
  "key3": "4okuR1udPCVLB6LPKAmmdzgCDWem9cogjJZ7zBfZmNxn5oCa4yc12E1JJd7g6RosFVny9a68DvnGuty9pz5nDCB5",
  "key4": "3bRjyE5yJwdoRjX6WZPmYQ5YaiKvPdCU2MTEK3RwHVQ8hyd1pdEiagNjszf9AAUcLwRf5CKNrkBCaJ71bKDbaJiN",
  "key5": "51AdjRmBVWJk8M6DtGxaQpm16U7bwNScXCkXgyAMiSwLPShT5YSRsy3d8kLzCV9A7yGTZCCAaLk5ePnkTp83FM3c",
  "key6": "4UfvWyLi2k6P9HLpAgcDEssimc4CoZPbVcCbhWtWA9VPYR5CV7eSAE1FDGsx5tHHL2roAw8rNKngBVmkDtpFvvMC",
  "key7": "SDQkTqFw3YC1fmkgHxDV5NJcz5Z2ZjgcFdS5PjSdiJpq5g9uoGA3dAnK6fMRguojYhzuLvhdaZZ4eM9BfwsrnGk",
  "key8": "8DWRt9fNatwEuSAS8iYvgdZATRtoAQ77hBDsgGvsCxdtQiHeSudzEmVP37jNdNKq4Jfs8a1MUHNe7GQcA3oQBno",
  "key9": "26C5cWsJA31FZiy1hSmMNkpT7vBS4zRM1K5y7X752p9h1WGL4NbkZBRjHpE7qdvkCTPaSzYoSxsHgVERuu9V1SF1",
  "key10": "4XVx8gi5hX7zWWYYQwupxjxyQq9jCJAd9HTMeZo6im55YiFdebEkbjzQUgAatMzMoQJEav7qcjycxGYiwsqMtjgU",
  "key11": "4GxFeVNFVJKPBRVEmFkTeei3k5Py4cngT6Rupp9S7VGpE8m9ZoMEYmPWcfhoufYAFkBatjosJJwscEBH38jEoymx",
  "key12": "2FequiGkmhb31q3cffWh8ZjvkqGQpAaywTLQr8xurAbhQ1KbAMTA51YuJ4F5jxtrEPq9pFYaRa4cGLMjhn8iiKX3",
  "key13": "2x9nUVW1AC8hHkwsFVEjx4EKpM6WhNgKKFeB6WnBW3yLDSCqYVWb6kduTvXTCQZEHgZi8r917RWUdsijpi1hLgDU",
  "key14": "3MP2J2wrPgNEq41QmbMSdXWzxUB9Nuit8Uv5qWobXb9MyXG1gxY45K769bMwhp2SJa1tpFeakH5Ggr6LpQDVosTZ",
  "key15": "3hRikR71zTMGMsCxJWiV3Pib8LT7DNdhbnjaSZGNQygpjqhVWVFcLV57zBxRTwYQTf4bjySnirh19GfCborL2omU",
  "key16": "4RK5Hc2p1VfESoDJSngtc1uagBc61hjgxATwxLiMzhoanf2gpa2WbVqUnt644vaLKS3yhajPiE42sS1jZjQgpRWS",
  "key17": "4qUCywuaUWZrGaV3bUPEUXZaZ5SUitdctLw8ZbzpunWQmXdGoJKaBBrbniPrbTa545eQ7bbKTdY67KsR9prgjLKD",
  "key18": "2QQnjRRLgAxx6bWau5ny2E6M5LQBxvBjbd5PA5ZZvLA8P9PkqSxkbiyyZ1EpTP8HXNkhZGvqtxGSr7LiGZX5RrDM",
  "key19": "3NcURNmfMkWgq7G9jYSJ8WHQPL5JEFnH8hgkfRA5zL2JKQYq77an6gSLLvMFxRes78qhm32NuushdeaHmn7T8CGX",
  "key20": "4LWTdyUMjpLNLPM1NxCkEde1miH6NPND619UEtmT5QbY3MU4E7RDZqaRGyTnnsm3bjKKkLZDsNRCmu2snyjbuvtP",
  "key21": "61MW8R2DR4jw7sgWNuhcbQDDYzD129vS42obcdZEiKXuHM5pd8Cif1P4qJWtvf2NYWuesc156v5or1Tvyre1bbKA",
  "key22": "c1DyspeSbt8nt6qQDt2BPBog9BWcphKm6NKv4kfAFCRym3QDjXZ3rWqBVcRqb2yiNmUa3inLwXadZhBu4mafPJn",
  "key23": "5NE9piK6NTSjXVSJ3KEZxxpFe1zdYRL4z2XPctSX6Fxq6zVWBFS425FCZhJWUfYpAuBSaw3Sg3NWrSL3Z5mXyMMo",
  "key24": "2RgoMWQwoYuMLynoMyGaaSq6yosCMHjphfprN1fkvoTdSuFECs2z1NjdCHhgdoK1JnTU1FtpJx14JATTsxbXdA5H",
  "key25": "2YZu4iVJU7uXS3vQqaT69pEoc4sUThYbM8yML7oxRmg7LNtLbjSS4rUypHR5uZkJjXGG3FhdXjKGkEkkVq9fEmJd",
  "key26": "b8CaqWAGbTqwNMBB1HorKJABa36dRHx8wXeU7wcZ4NyxyF4PMRGzLY662B9MsqwWiA9KKKsWYf5Kt4WevneRDWz",
  "key27": "43RD2rK1xPCzTQEQovgYpKEf4nD2njQgDU9q6y1Mh9J3QsS4aVWiTrfHPkx6dAMrDSV1f3QEqSCFKt2GG6BcWTBy",
  "key28": "2j8baj9MENG6VvPpMXqkQdvn3r86CJUFj2DcdqPjPkGQtso7Y1RwCbnvq4TDd5W9BSkwrCWsCTWT9SgUKtJmGqmY",
  "key29": "21nLfyKrUvmW5Sp1Srdy3q6cLQNHXewFL3uaAFdHbhgt4mrRtvSeGNbTi88EiF5QPoqW3f1z17UXiE5Gy4knU8XB",
  "key30": "5LkyE5uWT1NHUGSJ44XnZWbD61EYMYYEhSxQCr1xP9RzaZEUkdqshwrB2yL1BwY4wohmAzx3VML8ZF4KATW5Mahq",
  "key31": "4YmqAjMGEQh6vL4vk9yhMP14TEyCKHV1oHSSZ8CXcMCr8nGTrXyjtVcja1LhcwEgBgK9ERJyzneBFYzuwSD5xAhB",
  "key32": "2dBfd96vKY4oSYKY38gBm1k2xHJQuJLonHANh4b3UW4K81sHKhHTSzPRqXB2Vv6M6U9raEdDrCJd6YCX2ZXo4Faw",
  "key33": "4ZbsNe4gxavgn2P7sx7hZLKCQWwBX85E8efYoHk9naowLkk1avf5bWe4HA97nQr38zyCjjUnxETdHirknPNBn261"
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
