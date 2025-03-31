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
    "3EafkjVj9Fb6F4SM1vny25oS8c6Rxv8ezoGSk3zo9xYAC334hrNoiA1C2JVjefCVfCkgLzxyRmDofqwb5th5E8pQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k6mbcN9coPpvKhhayeqHqNqwd6hcYNvZc5hjer5F2nJVadMsayMc1Q6s1967DoWxbWWcHf91AVnzQAt8aTnYdRw",
  "key1": "3sR7QnfZUEiDLccR9svzb5TbRXe9YZaixn5KVdjtpWrxDNAarJ1unQGPysMFvL8RLBuTMduLoVmC429BswRbhS1g",
  "key2": "5mHVt8EbMcivf74CtfVZRSaoiyTvwa8tjQdP3qBRiwutARhfCvuz2JHrTHwQTF2KXX1psCUUh8MQ4pLzqPHBmsxD",
  "key3": "3J8HkwVH2rmbkrw9a671ggijfxp92DAaFxVBCVFmSA3RfYckXjth45vE8r23u4Yoc2tkYbQb9Gca4UDHe2H9D2Sx",
  "key4": "29i5i3sip97xU3WTNT3TYtYMYdAFJSJqNQHs9UTum9ogK4Lme5WucRjmaRUeV45rskcQoKaoGLBzWYUwzCqMmy8q",
  "key5": "41FS3MT7TabthoubV3xfqoG3sSWBJBekmPJqmQJM9EXvAWdL2G5qXrVdV3umiWLNYwUHHAja1qB1zZvxGuphYbQx",
  "key6": "3cNY7UxacRYXiG4bXkezLXS87rfoZvkvR6G5d3enLzTPqxhJgW3bfWoPxA2MMSoQZiBzaAaxM6FWKq71mhD6ktfw",
  "key7": "626bWbgqa6bkPYCBzVPTNPMpD4Ux6VLNNVUeLEUUu5AhkgMfHjdWpqJf1TU12kFSHkJNXCtjxRkK4q8NvagXyWFi",
  "key8": "4X9PiR1RA1U3BDoJwYmZ9sEU5EYnBY8FEJYEUg8etrZEcAQCFKZ5Y7WyWHtBgbJwACEshVTnVHwbiaEEPMyQbntA",
  "key9": "4xi91Qe39A8fsprr3EnoNryiLNHhZBJTP1y7MQgW9vR79X7cUnUpVnW3kiMGqCTtS4sDFyc3s7Hc9Nv3BzBtViYg",
  "key10": "2dyRSjxgKxGm4jfEPjx2Necc94TTFkGaYVsmhzxPFkKC1tcyp1i5dq3nmdCqUMRnpYBwyjtgq95PK6P8xCDYXoet",
  "key11": "2ksEUK25BvhSYyXK6yrRzbvZ2qToiFZYib7SGFYT9SwKauVguqY2aLmauF87BoBpFbV3e7oy8ySuvnt3Hu8KSfiu",
  "key12": "5RZ8twxAJxWee15TfV6DD3Suo8LMr1ij1288itACYo7fibN7pn4gEtdUd6DXYS8G14oKS9gZJRuR6KoT1bTRf4ji",
  "key13": "47YhJ7FwwNvimV4X17xbEnELkWKNEMQ7pRZCWLhftw8dTz6ctVB9S7MSVp9Xto7u4V6hkybny4WtriDiwiNgjVom",
  "key14": "2Fc32trdg35ai1qk9MFsTXv9Mr5bHdp2QbmwoaWT1KRsa6YuMWi77PawRde21UnhN7L4DfhFmnFw8q2zXSs12zFE",
  "key15": "4zDmk7dp2At68arfgot2M1TnbBKrPUH7kUwkNG9gnPQ1tpA4xDYG5zYrNLiwyK963wFLGjVQYwdikbTueYidxyRg",
  "key16": "YUJj3qhqomYin2chb2YNpLDJ49KnBeHTi815Vf3SRqWi6KbpFyGQf7PdksxQCZe8HHiiiLTUgNbUUxLYX2C8PAM",
  "key17": "XUV5oYTUZsRmtk5uEcL5tsBd3Za7hHkMiF6Qus6Bq2LAHWwXBrj7TZ1oNDJP1npnXtp4j5jPxtwnhSPAhNKM7By",
  "key18": "5Hdad6yJ1SjHWJHXCcP6HqKczjg4PrM5jq9Ygymqwd8Ag8wM51VnZXDwak6ZvC9MqeteZBidTYDiux8noFqgSeb5",
  "key19": "5S5LAjELJyqHqpzJzR29t7EY4hjYYSjp8tDCsmTcMgXBgM8D1w7g4XZQPgSDkPn1YmkZrHCQwaiNiSqDRfLjCi3Z",
  "key20": "4zitpimBBfHd94v6x5GgypqEEPSMcpLPxLBHwqvMU3KeZyVSdXJCdSPKR1CD4hqoKwPuKS5PEmoZE8GXCQRMrqRz",
  "key21": "44L5fjjviPMKRrjtpVdLnKCW1D1eGU7szTMqBgg1zLDnr4TMi3oNuDNJUVvXabiDJxfQPpi41Jj9EaSTnpDUs3jH",
  "key22": "ZPQXnPhZHMWXZZwQu7tws4Qw4aDkRCnGCZevibvPVJvqjK7dbomz3cZeZ2rwyAwEbNcqxEKj9WUwrfy2ci23idw",
  "key23": "2KUBK3PkHhuDGG4Xm26ebYfoPmEP45HqbMzG8zgppoEFVGQpK6uDebWjWRZ8esxxA9rorUMHzJbrBSVJG3faENb8",
  "key24": "2WywfLyzaneoUXCSNNhE2ZxtSEc1LuTiuMgn1TG9LZfjxELztPMn54ByjagpxpjTKaeryBLfQuPvxge2mmM19zbT",
  "key25": "3wxP3CzdnDt1z12FGUdr4q6FXnhmEeqhDeWsGeKkbdBW2v7AfLKoy8heS4NZT5Kq9HjPj3qADMFtXHiLvM9XmUmU",
  "key26": "gsCtWKmY4dyot8wCv4nNV4N2Yi2Fzd5SYD73tojiDzZ8LQjsCsuzBp3t3tJbtDqCfAbkDC1C5jrXWXx971YcCUH",
  "key27": "67HQ1agtQhAL9xGBkEXwcswLEFj7SSp5rtdmsH2RarsCsxerxD62hsJ6SVwrcSrCn4mcP6joXaDy89QaoGMZyenB",
  "key28": "GqsTKih93eiqv9vNcLfJN69JvjQqqKSQHezdTG9EudP81hD3c1JTbu8j713JKKKbnhYgN4TqPJPJpFMVZDQZ18L",
  "key29": "3ATkR3aPnDVM8fSDJpfkys2waTt8p9Dxx3L9rAk3qFs73xaCXAkRz1pYbUWQzMS732KPuyxKKB98egvjiDTq3nBE",
  "key30": "27pk6k4RHUKWHnH288tCm5Y5a2MPnBZGrY1K1mASsFvm7sQRHdijgooXJB5GYU2Y3RrD8Jtm8wTA1iP45Q3bjrrM",
  "key31": "5uxML79x5PHXPnozkzerpivfdF7pdauHxCkhuVdqcXrukFrAhAQpHPM8VujLqRRv9R7NriA33TQdAS3szStmrfdp",
  "key32": "4FZ18xMUA6ZVApjLLhfPijFENKpWugy9VF4hfUM5NcaxMEpr45VJnYXwA7UGejHH4GkJeRJawL7ZBY4v63ATcjjw",
  "key33": "65iU9dmkwqGeTdU9jNSWXzkosYKtBE65XxhTPY1y8kGiFhZTe3KV5BRrDv9vYrap3GV69p3x4FUWZyRBG25BHwnm",
  "key34": "3TnzSdgKPCWZ2p4QFWxaZjt78Eoh6g2WeiHXRFVUzrSMGCfLJ1fQsBHak3X5UNshXYBkNmgF3V4C8D9YGEesHv9S",
  "key35": "4b8dcyhrSXjvEgDa441gYtoysdvhsvyv7umBJXuRJ665pmY13UNpxM8vmDeGasuLRRZz7zHz8fPHyqjefxhJ5skh",
  "key36": "5f3nWPNMXDJqq74XEhok5eJXGnmUu6b4VQFphKpD6oszXgegyjxPyPUqUzfPcjYk3t7gv2MnTwKeQenxHdLFUKfU",
  "key37": "3mcisVSzJQeb8wPxnZdnaCrpQzvCmGxKk9aAghogRHo3TsSbZFFsLJUYXRNmPNLXWHNwBpd8TFQWhQhy2Jios36A"
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
