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
    "5JGPxvkrhWhG8W5V6YvpBbyWRqGUNJWJedahd98aPoLGttBFkpfkqCabzGWL64zMTfHt2BwAocoZ3PYTBjozEnJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fv7h2LsfuQoBqDkd5wRw25cEf8U67detzX4ZsZXpmWygfPf6rfJCkUd8LZWfmimfHPRLtpohKmShRMuwDXzsQN4",
  "key1": "khUFgpvUqNjM4sbg1uDPjjDBPznznMhDbh31gPdMu88f9YdQpGH8EUdh9cX3xsXbDLxYcgL26GdH9D6zru5DqCm",
  "key2": "3mNG7h5baPk4pL7ohbBj55mMMx1mnzFnZrrRycKKeVzXwcvGGSJVpC2PS2FkHUFtmb8t8tZhj422oc26tD5kQcGA",
  "key3": "389yUnZCFGJe1TmM5invPqNZDRuNV5RvJR6YTqimsXwDnnko8nmxgeAaQkeNH8Q6qpBGdmWopX5RTpSuiYxq5ZmF",
  "key4": "2FPLqxGBr3i6QHQr8ThcdfuFwbCDy9nw4agRTiRD8dT8zuMFrGp6yoLkyAtY7btnBAQuXNrATVRVz2nF6qRbC6HP",
  "key5": "4Ltg9qDwNXnyYdXNbJsWrdddTGTmgrqd3wytvcTMc7q8YS2WbSsJ1gqHfEhTLYfURxBgc2q8avVgZMryUVFaxgr3",
  "key6": "3P4P2yL6uKJ3Eoaz9HgHqdFYseeJazQeQinvdS7Pno624DtfAbAu4Ph4iG9oC8u9YKuSjf37s2q81F3PD8g6uKW4",
  "key7": "52MSdA72UeZkMcNEruuUYQsPVszShmNkGQ5dbfqgBsbDjZnrmKXss51noxkq4aiCDVmEFQUrrNYFifJwrC2rKLHo",
  "key8": "2bNZq6JGnQiZXHBC7byyrDXTvZK5PBUzEXbgKN4nvstSFF3RRR33HKM9uzfKRP76VxKErxDsrNGWZqZG4pNsnwK6",
  "key9": "4pVJSaX27EhxJiQND77CcVcozERE7WDgjvXuZsHaJyBydP2SnwA9eTKRWkXQLPF9sUGG3EZ48enHvgLqGQS7HwF",
  "key10": "y7PczfkuCKcnvVNJJDcHiAWq7qxGDouatHW7e38t72xv6ZBNhnnXKtES8kKDtfeqHL69CQ8zSnvTSubsw7aQHVt",
  "key11": "xjYPFaNXHVvJ3S5vyJ59r5Z88CZxzaXNjt8FY2MbmTH2v4G2hizAYKtQUKQid49AL1mcL76KdbmY27KWthj7Kgf",
  "key12": "32dL9wQvUgTM6QsvsBEnywUxrdBRqqPwJHdcvbXzkHCPzahk2i6PfWRHJwC8vbV9ykfhQJUE1usdCtsreaDwbW4f",
  "key13": "2DuJhMi8TKSYVhoZh7w5H1hj8ejRBqegmoCBLrVPQzTapEvPdPKuTwkhZciKJK3R8r8sTNHpnrnwWo2Hs767qMMw",
  "key14": "cz18T2bBFc71awQnhEnwFFkoc9goSh54VC641iUK1RSbiXtB2BqqjEEVx7HUZDh7yZNvNqawtycUvoghWgeWrBS",
  "key15": "3RuAjhQ1ckMWm8ferAnoZ6i6h8sBQfUXXbhPrFqNz4NDYydoJch38zZrnscREncXs5sX7uTSDX4YcxAojbvYtXky",
  "key16": "4YFx8kMzjVeAvqiQ4pPG5bu8FgxrmGwY2PBWfF5TyWgnxrsWFi4tkzN3tKz6QKLvdssBnicAiBnFLShSbt2NNfFt",
  "key17": "27Aj44VkKvJTh5fCu2sPCtegwVxR3b3TBv5egQ12DGzCQrG4YLsw6YFyQeuTnepQr3ybfQ1db7k4npWARqh2Rdvr",
  "key18": "24WuF71AqKWgAa9nV4xhKXbXuSPwodP4jY6o831ongH3PRFkoFh4zEDx9HdyZz4RBKjsStLn6iyjNPgtAAqvq1Yj",
  "key19": "4SsmjqmNPdRaytWqQR1XXvzVd17rpQScF7xpxCkbXwJKoqFk5LFp72AK7EEyDgeovun12FRuJxG8mX9Lw226iJ3u",
  "key20": "5pz26eD4X6erjLjGE3sKL3uktRaLt8k7TJH2K8JiAgk3RUegnWxipB9eDPsJuAApmgXwkHfScLLNpQ7GLVW9HYrj",
  "key21": "2r52TDnL3DqymGYNjFWv7jg91bscNhf3dKFByPfuaux4PDiFMg3Gdne9f8w1oRk1ArREkTuKZoYjZN9bx6AX7SrW",
  "key22": "452nAUAvJY1geN9oicmWeWreRLcmvmudG6VDHvu27Xb4sdjNzhhtN3W43QT5Z5CnzCput9N6JNk5g2AbsTyAzxq5",
  "key23": "5uFDovJfcWoi8rjRZAVj3hKU7EpKY5AzBHkL3ENXJ7Axx9gaS4swAqQvzEPxu3nbgagV4n93w4eaFeV1Si4XQEtX",
  "key24": "3vxwyMEspnfsf8Mg3ZeG4VvDtNqXJS4HFG4VN4afQhUg9x5K8yvCHMnWqcQpnbz5vavAJarRnwnh3naR5dLALpAR",
  "key25": "vpheEA6r7peCcNN8mnpNH5uX1m5jrJ4McayvxMvgswVrjJBucwzSVs4HTNnTA7drTX1zXAcnUywDkHXd4sgS232",
  "key26": "8pUyCCUFGkooRUYBNVhZtgLxBBVZsATYch2ee3XqRYq6H5MZX4UmxxHwVz5acMQNjZaBwqPnMrTXjqZ9hbsuUTY",
  "key27": "4ePq36hSCrR5WbvJdtc8scUxBVi52vAbte1Ld1qjAEbsgxnbDiXA5EmfzNAU2KGCk3n9vzkrBXuXxH5F5s178b5R",
  "key28": "5wSA4jH9Ct8LmAjm1ZoTdi2bo7WDQFRde8kNoHyz5ccTxyUAhUr7sazKGdv8wvqQBDE5NhZHDxn1VvJfiCsi2Djk",
  "key29": "2YKuBNrrpkY4e1KBhf6TJHT5mVgmsEJPGguhdAfGh7qjPQrb8ZeDGp2yKFmTHJwsCrCWxnP4rDYWxffdy4Uu5MV4",
  "key30": "yXgSUEFsXW1UXaaR1ScXGum3sEjSWHQRq2agguYMXLkHrNmMReVVYRtE8qXGKcAYU6Yw9M2hV3iqFjWWJnWneGE",
  "key31": "4KGm2gkkjz7an2GkxRM4yH9UrPQS3Buugj5ebPrNaVexLP2kyEoEmkANUsxafz815x2y291N8KDsQHxiqmVCeb9X",
  "key32": "3AGrFcuCpZ4SHgZQ6jPcm7KXyr2hu1HR4xQA42uueme5vC95sDxCGM4hLAXhPRK7bR25aCkB1m1ag6oLgEZdEn8n",
  "key33": "2cWyNKnQ7bvYoERMFsqYRfS1ibBzUrqqaxUPR3F12QENkbfg2mM1pVtaxb2UykkeDxY88nfqq83m2cS42AyUUmdz"
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
