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
    "5avPFmwni5bD3v8vfzY6mQYuZH8tG2j6kNHRsfaKJxZ4DjX3Lkiafy8nmAE4BNhWnyqLyeBs5mYapuPi9wDEvmH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MrCMEBDeGLwjhKZMq1ptJFsnabPQAyi59SxGcS2au74t3Ja8WwMLqfurfZbSVfbCspPbM41uV7xpkCV62Vff2R",
  "key1": "4UXSpxxpuASE6Bfx7XM7tFLpA7cmo6Pg74xuKu5FChELVkZ1cgWGAocqEgTAvyPsm1CxFfuFK8prGjFDUAygkQMD",
  "key2": "p2tH482JSDxLLXEFHizozVKZUYyXao6Qgx1qM9RkBkWLrBC3YBxi5L2mUojkfLMhUogsiXbXji961pensPM7HJr",
  "key3": "3jz9rV9vyaXk5Ly9b7QR9kLGGDH2JcyDG1f2gYtR79XQaZHNEB2xH3XqBNEySBYSXUvxU6NpT48XpKPRMSidCTRE",
  "key4": "3BujPiEdaE56E3Q1c8cLqvA2oWHyi4edHxS4RhtmjdZfVNJZRgM5WWN6PG2ynQxkKWAyApDHkq9F7Nmm3AC3BHq7",
  "key5": "5WHTJpm7mLzLnpfE8jUFmtkNxwd3iHSe566d5patPUZgFpCcBAKnt33yP7xWDLHVkot2KjxoxDWhJ7upUGGvmgg3",
  "key6": "pL4sBsUcet7XbRpdaV3yuqzKarmVSrbzHGXu5oGpF1aeCDUuSrzv2Jq3fi5WSHjBHAwShTJewnuYArwzwFQSkNT",
  "key7": "5Ku9q22zBLR4XuwRxvW7HzCg4iGm3k7JMDRURR6kaMmA9mgJsL7sQMBkwbm2iZToycf8dMniLA6bheQzSGy65GyK",
  "key8": "JMizt9nzZDm3CNsdsMX39bSB3FhAcE18b4YeZA81rtgGsjGNuReJjxLNk1irHp3L5j9MtwH7ggSJLPt96Z4LfT6",
  "key9": "xgU68huTP4DGiVcF2nacdSs8AbvB41tqdTVKSXFpV817VfCH1WnDzhFSiQEWDrtVQFnAvwWTpjC2cCCoqwhv4Qm",
  "key10": "5PabLTvH5LdcWmBaggme55qjjNnSb2tXPLcS6dwJbTtPk4L9F15KbeUpAvMLT6Dk7ZqrUcTqpe1q3ZgwzGyGKkJR",
  "key11": "2jBBZhwECE6Y386yyBsP2BB4YzYDXAUvepG8vT2PeFniNskQnC5sqWcyEhkjZYQmwnKo9QnYbsDbF97ikri4eoCv",
  "key12": "3DDEGbq5WbFrDe2KiikHzEpexsxR4rDykD5iSK13A8LBbj4wfWDMGzvpLcgbKpnKdAv5fZnakXcGPEPawN7srPpT",
  "key13": "YH5cf7VLLuxDBaLSMDfgqmP9XJ3hKFhRG5gAjdLco5hjHL5AFajSakCwT3WLqfgzrtsTZ5pfdGRmuVsQMkwGmdv",
  "key14": "5uDGPVPhp48X97zPvKgR2UhzmZc2pkvfsxHMncpiPUWZ4T433btc2VcWzrLFN2ziok8mFbH8Epaxz29cWHEpembz",
  "key15": "3Dt7p278EEcyw7zcdVs3yhZhijQRRYUNaam1UF5MFXUzppvR7f5TkAKEKSG7rN9EdofEneLBpRxqcQmesHXuDca",
  "key16": "5efnrj3ht8ecTYZteDaFn6621tk7fAZNCa1bmk8FikbyfDKet1XQ8zsywAYD1LWYLBvAYY9XKoYS8vMnvh35WaAS",
  "key17": "3SGenF2dXjquvqeryRVTv26DLK9ZBJGEX6Qa777pEhyyPFNf6YBbLHd8AiNYnNZtYdgPuTQM8TofjzxKRCkaJAUZ",
  "key18": "32MqukYRN6XQ35sTu8ToaXZx7tSAb81567BEUMiFopsxNNy1hN48b7gUan36kaYDH8Exte7Gio3TjUxGR86fRJpk",
  "key19": "3QTHvCdNZCTTpYiUWA2sg3CamaDck4U5FXnFVjrf1NcGuN63uF7ZybA6oHt8KWxVQ4gqPexepNiBBKsKJr7BMTwi",
  "key20": "4Etw3zdqbfVuNoi5dtcWUTFjnStX94meM7jDoQ8u9SRkYd1Dcx5tA7yacbRaZf7N1Jc9QqZqkcTwXGjQGfCDd69i",
  "key21": "3qqEcXTrtPE5H1ZJWg4jQ39wFLXX4V2hzCBem45HqrbvWGsgdvHMivmFHszRHU5yrGr6WJiPyBpSrBH8F2soyQPU",
  "key22": "5BVzajje3HpXjG6QLtHFbxp7UhbwVD6YCAFbJLSGrNYQC4Pie9Jb2gGHXhC7oUP3WSxRAu7AF3vw1xcGNp7JcA8r",
  "key23": "63Jim2TxT2HSeHK87X92P147qX2KkZvHfy7RftyryW9cpp4uEB2KBT718btj8Snq7x1XmxTFExVz8zxhVBtmdaXv",
  "key24": "413AdD1UpewZB3GM19jWYmdCNUmdU9AeuWkVVW7GZfkbwC54tAfQqYzQGzByDKJ3QUj5rXFGSf9SqdXhyqwJM2J5",
  "key25": "3fB8b1cdKENsz73UiYucEMkXXEV2dgJ8wC735ThP5er7P8n9jB2Uit8WLRxhigVHxTtjTvq4kksadDHBEvi8dZL2",
  "key26": "3BCHQL19c5QtkeKP9z3tCd8L4BiLFuksfFWNfoixhMkycaNP9TMqY7MnySoxQdvwkcFWxq9vBEQtp12Artn44jLM",
  "key27": "24DGn8YhHP4HGUo9Wu95n4guMPhDSQhnTfoKv93jrj5WVdwBgsRzJMBDJ5NF6KkKNsKs3wdfLK1P9EW1ULRpGqzZ",
  "key28": "3F9Z74nNEJwQgNAc2jpEBjQ52K4Y6EFUsF3WLChdvDd85FF9Yh5sZBnqDifh3o2FrxzPh85safvrj6meASom1vQY",
  "key29": "5GxZY1TxBy1oL8h1u3PEDzJ51zB5NByTBcBmprwwAV5nuTSruPpDa3HfgEUuYcDqd14vCNARyQbtXdXxRkWwP8Ao",
  "key30": "dnprAwCriGaotnxEK5QwakLuxXpDuqFz63mLMiSfoYSvUyh8UkRDDQGnLp5kfdX88aexb1TYArBhsgc5e214jS4",
  "key31": "fgPCTpQyzPE1gvieFyaGn3CJjqsYomy7daS1g2ngZFzKtdX7ujd7JfYrZAVRebbAvm3RyDSXyEm6cYttCuwJhZW",
  "key32": "3BUzLviEkZ467cKfxb8FF2E3Dkp2DHR5bsBH9uWStQQ2DzF5o2tqS8wrTFpC1iGbVdLWLrDgVe2ybJPy2A3VMd5",
  "key33": "4YqiRkinunXU2GZ2cyzbb13XTMSR2fsnopbL2mjBZnLt3zR9WGVPz4kyQfnRLaH2fu25jEw79vu3TiWkAAom8B5e",
  "key34": "39Z7nCb7UccNbTniqFBeN6VhbTY8eVP243s7UHDYrd5YB4o5DtFV1SqpJbvm1VqkR7VNFkHkcqDkzA8YcbTsfytD",
  "key35": "5iBcNP5dEDmmtvP82gji22JfiisMgS8Q9eta2m4yBkwmnBMhBTebEe2RsA7t25aSVAz6fWUF1Er4eN2FMnKBeRYF",
  "key36": "28kMDe2BBHhcbWUKVDxn52ESUiwuD2tQqpqQJYeD3aeDCMgjStbom32KJnvFrgZ21S8LHKc5dnbBvsUboRw6jZqu",
  "key37": "2saBNon1LaCbrovF9o2JKveWyQHtiNF1UrcJCDy8ecY2TmpLkG6tVFm83UJo9FKodjtdXsFzBLY7BtWFKF9NWX27",
  "key38": "5w6NXtHBFxPTTkKBzGxm7BP6LdDeeKtc3CToej5CtBiP7YLbgbp7FTgDkGfDwpxBmzreQBysXXBxMQtDj99f79Bz",
  "key39": "sPNSN8oiAEUF8kznhvRTpfocnkvng7dK5pMH3fYEeqYXJLPjeRVfNcf343DK35CByv9AQRfcKdgshWUcFW5Tw9y",
  "key40": "3agTKHW733JWr5vvVoFPuAG7tJdx8RmKawqqn3tfV5PnhheP2v4UniAby1xhfdBBceTSY4C3GDYN1MJ9mV77hWyb",
  "key41": "2wBcNridpvceereJ34TUj2MfVfYZc67RQtJvrFLXXMgeX4EkEWD9uqkEChZqRmbA3Ueq3nqc3iNo8uvUJKLURehc",
  "key42": "3k1AyhYzyGcCoCgTE3ysm6XD4vHNj4cpPccYEz9PDC6CEBMYCTLjVqC4k1HNVVp8BxrThW4xUjfbChjKtEwz1ZuL",
  "key43": "3boEnYjeyrhfKpe7qoz39oJZUdtpeegZSKkS2CzUZ3WBwK3QKNdWdyxE6fnpww4XxT4CVF4dSyLMrd31jh5NaLrH",
  "key44": "57xixqGNraDMfxD8q7Zv2Sz2F7ePJ6druCvHRdZrq1VqBwXSM4AV2QzykdgSRoH9xzqgrtPCmrBHv3XxbPZagxRA",
  "key45": "3aJevcapDifumaLfU2KAGGcdhaQmKxr6bziCJgyDekgstV6xbNRidWdFy1Sq7uQRKVshTdqs4BBVUmuo3eyaSMfw",
  "key46": "8zQxZrKZrSGW66rDkt2qKaw2kRfRqHXQYd5H6cAnXis35n2pXc9sAxcsVd3d8RjGsXiFnshHdNYWsA7xyLACKAA",
  "key47": "uiPKwkzTzU7MnadSFJGmqfRv7tA6XqiMpdwjzG78eBzVThN4da2enEVTWA4ecbW4vq6DUhTNUG9iqBPBiP6EmWc",
  "key48": "XbCSNdLawYWeEsmo4x6iFieCQcmBB74hUwMFZVyBZEvn9FppkcNpyUuSeCx1P8XRrX25eT39BWcnVuxERweJmHz",
  "key49": "4jZzNhFsgf77kxugvC6kFz8kgeTmsojw5QTc6ybPDxmKpaRzCh8JicvfZHC1iEgS34SRPxzkcE8QwDjzDWzNTiym"
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
