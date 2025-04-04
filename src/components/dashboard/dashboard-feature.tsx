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
    "2GY9Gq285thjtc1kLGZzJV4pKSfNES423ykUmoJ7giDZnLQnERdB1tjVbMMcwsZbvwJkWoN7gXtfr2ci1N2iWeA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Esusiub7F74DL21bY9hyoXGi8g8krtvFtVc4p1hW5KmuhR3atX44b7s7WQDg18cyuHmo51fZqiy952XqqBr3aAp",
  "key1": "4VM5kTHydWxkSApxHBtyjWuxcvDuv7VoEeUzrFwe9Cpz6w8t5qqqtFW9ZoKNS4YTBPq8BWC59Z5JuNiMSmiecJmU",
  "key2": "2TsG6Lk8ECSxi6mAYBaysm5FGC4pKJJQw81MaYqS23LgQiDrZJfs1dEjt7gA9YDLFyvMRT8XPYAvCrRQB6N1P9CL",
  "key3": "2JhqH6Btw1UYUT2TU94w8b6yweoVx3xviAQdxV6oSjeMruZfSmmuodrqGLqonzwY4fyUBpwWRGgmqrLEEfVQyzN",
  "key4": "tQG7vLXRr9QU7XB9Lc8MEtAveTFeeEjTx6xXGsDWDgKKcKaYinADqKz54iqi4eveNhmyDPkUjCJ9iJ5P7QMk1ew",
  "key5": "4xAxHSHJLxJENeRCsHryU2U88APpLdXHqPsDYCJdNAsQ3X678W3uxjNkQq4k3pwbCoA9dgV6KkuTShjMfAzsLRjR",
  "key6": "5vMapBtLEaQ2BefoTwLepxj38qjLoMPb7Avati2xmhn53212qfBubsXrH95mogRbbunEGRxXSi8iU1jxT77iRFce",
  "key7": "41UGwjHbQL8RVM1kv4DeSELwSPUw57NpofRS2GvJQioWELQXoRqe4AC2QCvPADSRehL71sqdrbh28yVc5j5KQm3u",
  "key8": "3oQtnSRaxduMvybEJk2Q1Pvm1nmoMjLuWkREn8qE3rMBJwsWBMRBshqw5a7g8vChFpm2cC896YFhzKejvPtw9K37",
  "key9": "57eUvbtMcEfT2iet8XsQjZzvgcC6SZ42kexqVW7s5HwYM2rNRbhjrV8Nudv5NfXKWAK6WgZZvndK2GcShcV9h9LR",
  "key10": "Wj8vRLynVmPDu5PNTi4NaWwBHWtrUyoWj4vEsuPonqnH2QuF82A8w4XPLRXAfNMjUffTZumvaDYwqoYzbAVAzqN",
  "key11": "5CrioYYr8nfARjH58WEJGCZ3mTRgm4pUCUcoF6JBPVNVnWLiv4gRk67QjVT2AMRAN3qNPj3cda4zwJrch7mckKrQ",
  "key12": "2ja5RQkBXHK1ZrKWJ5i6NymFB2NVnbNY7RKkK8XZE8G2onaPMWHFAQERw17Z7NWE7x6omxgHZF9Qit5tCbjt5jYW",
  "key13": "2JNS6TtK6Yqqh6CWLssWxuSoL1xuZiqRarRCaiGfXgLYJBJWBoLdeWCysYbZAM6JcEgsrHgHUg7aAWbzBzG8pL1p",
  "key14": "5dA41Ukb2ib2eCXPGgvySxtTsHUYj5yjgStuoQb51uZoXLGxjQvtuBpqdxLnjUbcZCQQs9rxtEinX3MgaCf4WLhS",
  "key15": "3pGC7FCQnmun6CU2TELYBaX1JrP6Uyim1QpNPeR7WE7e5AAYQWPBExV3iSE1ycSxZ5VDLHZg1vu3ewAHN1J5PdiY",
  "key16": "eyHQ5a8z3i8iCj5uEcRfPLFm46fniHsJcbgzP4uJzDKEtE4fDnqgxamhDBEYkahq45GLaMV6AxtRWCnQ6BVh7js",
  "key17": "4BUPL3Dr5hZaZCeT3i4r8o3yHAdV3FYQv6FBiRZojmggSnTW3Mk2WuNTozN7mnhtbccXwbsrbmD7KFF5UsbqAeW9",
  "key18": "44pusfL6c93hBrLGz5RdUjejnZT57ePjz4aVaNrZ5Hggvr6xaAV4qoCDD6CoxSiEzC9RsMTZN6pr2CXyHMBjTbkR",
  "key19": "3YQvwX7BcAc2a7KZgC8kUrViBSa4LubeybzkDL2AKRG3BPd4JDSqFmyB3LXHZCsky3txNwZATLtzHCHKsUyszJHZ",
  "key20": "5xZrLkHKcfgCfMHLbXXEE1zxojr9bqnBiNuc7DvXfurFieokbmmm4WXtygY1rVtxgMcmn4ERCY6ugetXM5SY3BVX",
  "key21": "3pLv9iriLoreGifcRuRfFXvYqCiChFyN4Zh5nDyCoi433jmMY6u2R7gHe6GsxjA7SjYaM2XmGMYnJtVS9vkqKuAo",
  "key22": "3abYHWPHQBkKDG817nmw7Uudkr3JoyqUN6T9wgyE3ZP7FH2B96wyKYkF7nztksuC98WJu8ozUcdAKsSFfxjJraLq",
  "key23": "HWA1jYywW3Qhzt858Z8yA5wtgouKPzDBpyN4r3RU5HTuUMFLzjQm3RW522ZAPhKXr74ybJoL6mzDaqxSZ2vLzkX",
  "key24": "ZS11rjTHbkhuMH39Rc1oRC6XAJnmrcdpjtKjAqtVXKwU7mqDaXujMSWNcfVLwfz2vVryMPZmZuTnzrX1fA3goVV",
  "key25": "aSFJEex9LnurTEBf5mbL5hz37pyxu1KKQwnURVqgTKTzZfPURzFPwfYHTXeeysiVZZ71ehA4FdJk55Ck7ynU13k",
  "key26": "3RgrCKtYFeBJaTV92QEsiVyHwLM98feaNb7g79D5puGDxdsY1htUZxVRifwkcFnxQGvQrK852crp53ygyQHuiykm",
  "key27": "zqJzP3Jp88Tg5kdbZWZmCZ2cxgKXz7BmMEMZupkK6X4EhctpweCxGf98LRH5BfSkXUsF8MhhMwki2fmCWFovMJ2",
  "key28": "2aR1ey59o65SPXqYXPKNGWKvGDX7joryFAVtNGuUzcTNQQWKSJBhUYK6j4at4RL5jxH1KYhuEcZcAU246hDbnTsi",
  "key29": "aQRZWCbUdQr7tN8kLFRsi923RoP6MG4c5VDATzswMoTePeTTJLE9KocgawprHoz4r9TdrabpuQmfxQ8QNjKeiQ7",
  "key30": "2UFtPnoGneto7sBEbZo5NSFJ51r7TEe5ztHv3UXSFEexyL89QLPw5g393pxdvdWB7NwsiLRNiGwTiMA6NCWTRdu7",
  "key31": "2aEnFEXSatjhJ2uaYUoSwTddsstPQr4WtWuBPUiCDFD4KGwcDgvJ1XceKrGk96A4phcEENPASzK1itdg7nFq92ef",
  "key32": "4hEsGrQpGqKvHEt6UP28YSDCxmY9nPBaVKhBfFTH1UKN4duHEHGXEWYoTY9gZodxK6PHa4de6Pbs51NZxcaLRwZ1",
  "key33": "5aqP1YTf1XVvQzp3C9viQN8xZbunXRBs38u83AAsA7H1795xDwZ9ULsP43swo5Sj92Mq3WKHfJsaFJP8x1aqJSnN",
  "key34": "46LnQHhwy7KTbhXo8ciBAMgta6NUqQGUxmyAM9GYJELS8ZiBCBCgxsmWFdT6dMTeZBBTTiHfF29TV8RSR4cGw1ZQ",
  "key35": "5aH5Wo9LwhBw6LrgCVsTUcGQXKSkJcCNwxTn4HFuUQAGjowbbMLJQJLFNC3oUTrvy9vJ6QR3uXk1MeQA5a3jVYcZ",
  "key36": "5Nfwj2h7yQeZjQdthfn9DBr8r43xH7AWSX6xbdhzRjLhoZqudDQCzbCmj4JJDrTzM2wsA6uJLEkJxhxrD9nh9eBN",
  "key37": "3rrzvfg2F9MgNqVxwTwDSDfvmiAjbPQFacvCUAvrG12j7BcrcT8uLgrTxdcnYSu9C5oGvgjj8c8kAFdRtQHRhiTM",
  "key38": "L9Ha9MJ9rkg7ZK2wVofCL4Y3E6WPCDdfAbDACU3eZSqRSEkGK6ffmfnva3uG8idiyS6w8VstDtMPVGoNNNE1rVj",
  "key39": "5sf5Jd2Q5owrPt48ZesREsyB8BuGrKaLKDExcJXJDN3A78AaUAfeAXE6JJVRALUuwVyypRJVecbbrQPbdheVVuXc",
  "key40": "1m4pMEKZ4eQnPgUp5WZjDCiY7eUANHvm4n3PWpZeq5CG9grtQCngH7jEn1GJM73u7GfwCSS3VFhwo9gnZc2YdK8",
  "key41": "r4jCdrbMd3Wrjv8U189XuVQC4GZMVm4YTomBcKZW3uN7cfewzK4NgK26yfwD5ckbzj2gLrwK2sf1ZxoiZkqCCx5",
  "key42": "4D3m9L7yhcFLocEauuxKGQnReti3swxFfu37r4R1E9rtZnxo49YPUiLa2VaxitbGLRnpnwQUzVfwTqNfH3Zdy99m",
  "key43": "4Q1g7KafRgqzbN3Y47PSKuh7teeVtySfyxD3ovirQS4k1y8tSVFWxZC7oPNQGb8SUpeNmacFDV8pQbedhaazbamd"
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
