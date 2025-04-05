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
    "qc3UCCQ9kUFv3BeJi5NWq3bdMLsgc71cF9Z85Z1cSi38huhK9qEdJNdcRd16LG31nYSXzrqczMVew9mQ6dtZkUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PAfRPvQvQrmKedAkgFr4jGdTHaTZooz6gPKSFky64kEr1X5Wp7BuXbxWWEiMd6Ti64jE8681SsDALDjfUHKjzpn",
  "key1": "5kmQrEsHTSsp7VpPgBFCugERJqsKi9gAiZybAdwcsqYTSrZRCxdU7Bwxf3WMEqLCjfjCc2tTtPNbyPjeUdqsBngJ",
  "key2": "3cQYmaaSmzWtHYSBxS8Szs6QGgBe4xRKNjFyCmVG8jMA8bS23ApgEbatEkZDkPpjhYYCUBNT3xMwRbXa5b7nxSRX",
  "key3": "2Vz136Dws4naoZ5upAdAKCEDZnNnyxiDdgsd5omA7bLWPUdCK7NXRRHxkGwTwXhEqecR7PYxXTpBne8XchKgudAF",
  "key4": "5zoHJDWXSoFw1yhbxvEnq5xyVgtXreAY4PscTiyVWQibLcZkmvK4cxr4sC89P1dD2EPTZZKxYZLY2ZVGct5bYUfm",
  "key5": "cKzDA23BDWMCinSr2v9iUAjWE5wfxTNM7JcF3rQNSCX7A18SR3EhHYRcti8oZQoGPJb4MPnc5NGUed4dDZNo1Hz",
  "key6": "5imKqWbYGkr7gtBZuDxQZTTAAMNY5cy3V7Yvwx6hNTJLaBjoQX1rVm95bVzHWetoHcd34CA4sWqHvSdedPTL1BT9",
  "key7": "46LhuNrSHUCKUbT7drKtw71bUNUZuWziAqdcUtwKNCfwnJvUtpT7vsgsYRomr1YkLrbBWquNcHiQLV95zxSxsPVt",
  "key8": "4YtvruGbhMNaWa45TBmFdW9c6Q85fb3svciAzzSYVZ39Nm7ibCaCzkk3rFVhXgtRWQ9qZ2Qt928AXkV2q1qunub9",
  "key9": "2toxk3RBw5r7NezmjM1tu4TYguNe25pPDSqreqHi86WnRNDMNGHJF2oUG2XLaqawWkdJf3W3m7MS2VjxubzWviTH",
  "key10": "2F29Aq29XP2kayh3fvSr92D3egNHK4YM8mYxTVB3935MVhpcW4knMUJWHuUVFX6fNn7UqLq5Lzs6LJ5G9DQDS693",
  "key11": "31hFJGm1GgPoPQZqvoPyHNE955nbumUHhvQZvR9gJWX2K1Vwc3waBWWn2Pd12aeFAcoMmcrM8TGmhteKFtj5pkRD",
  "key12": "mTB1QjyBwtsPPFP3YXAboXyCihJBGo7bM54WqA7UEgHSmx8oroiW3jdd2VW7Sq1NLVu21ZuPAivYwpBnCjYgySs",
  "key13": "d1kTAJx6y6eRb7D88ouPfrLZoSEhYPCpP5vhaGM2jF3nH9aVTzTP6tRPkwenEiod4MnQcSMQPR4BFuLGGZj68ez",
  "key14": "AYAXzuUV7dDjuy1xsKsQvG7gnGwxsTpVtRnJrqXMdTXqYd5YvAYeDxTEubiJhfUQvv6jPw3zXLmyfeJscLQqGZw",
  "key15": "5TGEZyy5VyCWQnf7F18WcKXWgMHrYreFtbDA3jbw1fayuaa5jJYCUt2LZZcHkWMJgtDvu1vqX1nDjxGpVTKMSj5w",
  "key16": "3mRRDzkRc25aWSGWWmfotnymSCxo5TtCKefuqxgsBK94FCUBgn9DyTCnVpqSWyk6rzZmHu9PWhpPXC36H8rRU7Kg",
  "key17": "45EVsNUgv1j9EhQeB1r8Y8ZzAPKMVVdzRfPJ7YiMvANKBtzaNdZdREkp6gEqZUP7c5AJFZwUQddmJzttd4C9Ey7e",
  "key18": "2Awwv3x1rR1CjqiesEcNUQVW3BL5KCi1a5XJ4zjAEzsLGPcS1tzcrB4QfXHygK2CqBXTgsBSBNPmBNSe4K7RmN3Q",
  "key19": "2UJoKiWBJPrREv9mcueUfaaHKsmJqemiNgnK54ayfvTBy9n8Lnu5gLMvkJUsPnPBtJ9KkkB87GxB6dbxSnEfcztR",
  "key20": "596qsqRBoDhRUYnk6UJr47U1yhrYJoKEVPAc9rmxRCwHtiSr21ohWaiahJcpMVcibe4D7hYbccMoU8sWAVwEtYhP",
  "key21": "3hSwizUp6Fz66eM4VYXjw5ryWuEANjRR91EtcNEYefoskq89yZUz5s5LkP7eJ7V44JnMyvn5aiLv5uH4XVNEk9Ha",
  "key22": "5tcfxmionwg5dZar76jAe7LmDuS6X57sfxpDkuxjz79MBa5Xo8bpvhi9MJKUXbETUCA9T78vdK8HPi88Dxs8h76Q",
  "key23": "3jRXWZudyaDKZbmWsTvupTjm71SMrrxiYXRwjF5mru4yEbqnLd6hfWum65UGymaxNPcUTnaFmQTuq25qDgBJBEH5",
  "key24": "3aE7RZH3FP9LyiM5qB1kK5BBnEv1u5HkiE7EJ5iXDQZX5nu2Jp9nkAQnesSgD93JeVmhLr1AtQEC1JRfk31ebpfW",
  "key25": "3e4WxCJuiJQihmEvos9ttD2ckVfHrMwiiTYkqHgyEXVxk4sNrjyQSMsJf6xa8y7atdX1fYErCQepm1CoiVEPcq26",
  "key26": "4Y7rHYgfAhpsNSMC9b1CBeFm6z7AsC97dZhbmBTn3bWeAWmC4bJ9Yo8PccBYqPgVLTs12Libu9zMLqLW545QMDhK",
  "key27": "3JyqLPcSYScao7WYuziJK92vNuq6oFQEYqkLC6KaXRv7nMoRHmUaEntk3UuQXNF6a6UkNx2sfkN8DPd6en7KH84r",
  "key28": "4cqBSTqHtKdvGT7nE6NtprqKw9b4u1NzpcTFiiBpEkgTYrmmJKKxezWJ3AqbJnEPFKGUsUBvM47Z3aQSU8BXZLza",
  "key29": "3FZNGi8MxQ6P4fVQTERxLc9j68rStUyC9szsJ3KM95MVTStU5Rt5k4BZz5A6ggQzWtZZYoUJLNsK9xbvjSVi7o5i",
  "key30": "QF1Qxe5wfgMQo2Kb3CiYtHUez3L3mZCxVgTwXrFsVVqjqSfwuama6UBKgedWJYVLL9hQec51BLgWBByyx5cc5yF",
  "key31": "2Q6c3Ep2q15rKes2UrtzVpURZ5W6ByrEv31NEb6eFfeG49RbU9Ck2iftUr7MGgDPS4Qnw5jg9NpotqQ4jH8vFrnj",
  "key32": "62DCtQ1hDwTy9XLWanwf7aKCcvnKG4abPJTDQUF7KPiC9XHBdYFG2G3Tcwb4KmpFZw32947yRFRUKx9HxgJ42xbR",
  "key33": "484ZmHY5bAgTcd2QtRr2sTABo8Xa67474GGrqYPM4upHqDhYtmLz8eejrcFSv1pbuCYqHqABnNH6ZrwpHD4YyQad",
  "key34": "48rsrwyTSt2WgjZvZeh6t6apuEbRr1YtBymMLUUkaGiXQ7gK7r6u7CnGe7BVSjR7LR5XNr1MRK5KPqyMc7vtAvWY",
  "key35": "5pmXP8kaaVroLS19Rhy88RXdK2Ay1S16iJWg4xRy2qVSU2wSXSqcrwM8EgYdbzVDdiZNpEJCGMj1iaZWF2Qy3Yqb",
  "key36": "3VKGe6ZuBzDtkw9gHhhB885wiP2mdad5ZsdazdnoVDvE8gQg9VYeysxoBkm2jye2oJ3cKA4NZsfb4nNHgFQL1A8A",
  "key37": "5KZWErb6mQhM4wcMvTYtxpdSyr2twe5UwqryXjpnH2CZ8P8yq6pw6ido7XaWLTskBcSosr9143Hnt8D6YdSf4RpN",
  "key38": "5pwmk4aNBZzihF6qgEaQetVA8SCCFmenemEGbSyrSadF4bm5QcQoYyS3NncjC9yeNmtRV3iCAvPaAMdwxoLQEuUr",
  "key39": "28RngMFB2Yayotmf3BS9wSWLSpVPKtWnyESsoqaJM4e6coCs1JVyJ2f2M2qWAP3Ax6CwxGfLeqV3rQwu7GKujGrb",
  "key40": "4uKv43jzscst8e3ZDBv3LDnLZuB2Pw9o1aH57SHuZeB5vF9apufdNVPFouBiMWevKP8PsJnxBz99CVp6JTVKebcQ",
  "key41": "2Z4BHsEyDZTUu4byG2WRmhAFhb7z7Wx7hAwwyH9WcKTY7BZgN9KZ7gVP4fnqG7sX4guYuDCc22P12BEVV5jE2gDe",
  "key42": "4EuKReF81H3L6jTzwntz9k4y6kzjmrdvMqHwbUGqay9vD13psg9jYZfYr9qXe88YHuZRPv4Bd6KmQMpovHkJtt39",
  "key43": "wRUGpBtQvdCPJgnZTeNmB8wTRxRZAtBa9Cv9JBgbiAviwCpzpuuPomfLaRkRthZCkKpgU9AyboRYsUgfdYYE6UG",
  "key44": "2NYxp43FpEAX8VbTh61wEDsnNpb5NCa2jGtoiB4S3vd1qRMqAuxtdSP6t7RtFs7ExbdM7wiSVJrC6tjw4npgDhJw",
  "key45": "43httTdnKMaiMDNVNNq3JpmZJApbdW3xB2hoQzhJk7EcdsSunx4Gk2yur3Qq6DycwhnBkmJ89s8YK77fBK6s22sf",
  "key46": "2meiKg3yY79KT84DVuE6F5QFyoTp7pgMh2ZNNefUYohsms5pK2LWD65KyvsJPftEKUgieyHqUP2YH9rczdVGARLB",
  "key47": "5DbgBCtcCwgEj7Zcf54vyEuE6AwzPBJbibYGA6zrG7dANdtSefT2qsND9w5VE7kegs2LPhsghj73nsHZN6pLHRpr",
  "key48": "2oMWh1opTvcosEpz1TyXhbrhqsyDQKJFxzvkUSJ96NA2zv89D9qbmVSK2MGSsNXB1QjDvTjm9mCQ68nFynuX5U6v"
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
