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
    "2LVFgShhc9hK5PCo6KUajR1KmuWwLM5SbUFMh3pWQ1HG5Us1ocdTtChcAZdAwdpiRzWJMGngRAd8dMGqAu6oMPdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rTKyJrB6pSCt7By8VCHXRExTqYdyp8D5UNCYp1vhojMH4aFtJGKYiLP5xxSC19Y9uNSFS2eZ7Vzt5m1qW64s1gA",
  "key1": "2TVNnJizKVitojKDZcPuhRaf8wFL9K9SGT32PTs2P5zJ5sUKNFTjbWTWk6YxoBn32w6vEkfKUWZBGPQoWawhrvuf",
  "key2": "5mV6xfChKi2KFPUmgeNEJF5jJUnCHPZDHon61P3Th5vkEmTBFema7BfeNBBXCdQq2ToREDbCuwnvTKpizisKEoCW",
  "key3": "54SFHqBDaXZgcgmYNnxJo2Y63eM3HM4YEsXhxAAvfQtdVebEMpMZhpxM3D2a3DyzTbBPoZ6cAxtN34PZUe5Q6K5W",
  "key4": "2YJsnBPUbQYPZ3qgrEMhpMW19A6MNGh49sQPhMLc76J7XdcY7KBwQpnJfaiM9e3Xk4iFwmZ9JKVvx6bnpRFCfy75",
  "key5": "4BMtJ7PUwcG1hyDRxmpvXaEf792yLLdUnphBp6NdTUDbq8NnWtw4Q8SHuEPGLxVHShdrtGyZrE2LqUpLyuFru5uj",
  "key6": "32vFs3WCtW8BdJFKKrA3jD1ixMESTyH7bQZEZib5BWCiTrbTuKtPnL8hKyuEGAYUiG37WeAXAXevAbvLFNu9TuBL",
  "key7": "5N3Y5Da3juRWNppDQ7qX8KkZwbF8A22ScoP2bM4kKMfA32Ho6LVJb39eGGDqLrTJW7q5Yk6SYDiAUPEMbWbRyahd",
  "key8": "4gg75gy3AibrzNDUMkT1pzMsENh7EqVLGNM4pVyDmknfJ6meMBqkyVPVa76wW7ZRmt3ZBMryDLkPQsYmKMNxc1qj",
  "key9": "3krvFipwKDNHVK99rDhyADMgbpqDNeH38dua7eZoKMLP7hrqZfYQ44c4h3JB9SQ7vd2cSW3ZEZDPhp7Y37kkspzC",
  "key10": "4mhZNxrpvKWG6BCNL37dHk8or5JeNtVMYpNr2N7nKrDHbdULfTZsZZv3HaBhBwCyDLs5QbG9DDggh5pLbd1nRq3b",
  "key11": "5HyojKHacWXMt5FY2LWPBBe9BxAYJEX9Bg42zwSRbdn4K2oTpUk7V8PkNkRxFgjoJgAd95WU2chdMyQua9GWWEsg",
  "key12": "2SXyH8ZCwzjLj1Bxm4drUTV8PFwcKrvGbnX4GuXpsKoWKwxCfxMevvF1YR69pi3jW2kpiEmNgHdidwS6Q8jRP4d7",
  "key13": "3EMnkMsU22pbuT8ZTS8RNnfwyypERZJo4PUMLYuGpj2jVX82W4YpfMStbkf9xpwCNB4wdegfDGaB6fVbLCcLsGTu",
  "key14": "fiobSfHKdtrSFRRKFf7KcFA1eSj7rogMV1ehRajAiMwZt6mG6paaLirfwXoBo1UL7149bZPgWT6EefDssB3QHYA",
  "key15": "2z2oun9kYnrg4ZTNz8igL2kJaDuwenBro4UEmmXfctaAnCMbM7XpkZiaqe3PRDtSn2XBQ7aDFGHsdxBwJwuCZ3ec",
  "key16": "bh4Hgyd7k8gc8beR1LFLA5WeCE8Zqmh7mCSnuyyjbLcYxcnKvWBfhHVPAVBFX5Kvod4DQ5tZB6zPaR3H2H9wNfw",
  "key17": "44kiro3P8tgu6FpRUPJf8dsUjYoPeurMa5snNm5QXKyde5FS9afbm9fLRpd6eRSQLfST4mqbcxTJXoTgmoTdptwQ",
  "key18": "64MbSd8oHqBzDJxo5YQRDVxdiqHCMAnBBtFkUsdp7H7pX6iA2J61scx3KV5WQvPT5BSuDVDiDYVYhpS6SqkvhMRw",
  "key19": "49gBCA86Bx3mE9f9Zg2gDdWYKxuE9ANDDKNLip6NYefjoAD6Grqt3yFKBsh7QrUEhR6oR3RVozMzDxnSKcWjBmQE",
  "key20": "uPmRrMDB97LxG1DdopqJ8XiNYou573qPptZU9zZe9EPBcS4fTcGveK4LHUNxeuJCixiqJj8MkZZatpFpTN7wmb5",
  "key21": "3JTt1ztJ7C9EcYY55jai5t6p58nrQFqjChLmYwafBYqXs4rup9GLGvMdpXvtFNGr4veCuY75CrgUp8nfLkyy3JUK",
  "key22": "67PH1dqx6JovsMqVSYvmsQBKzFjAuAwna6wWmC3BCyRx9UWJu1Td4evPaTqFjvaszkSNAkzJcZJ7TBWKuqa1Ef3d",
  "key23": "2bJ68WubjCesWfKacVbzV3p8Gd64G3k2ifQpXHqUT5qFb2AYuPA7zGqLrXUPubLa1bDys6ew1CtXdiY9v3vFfptb",
  "key24": "3Vxn3M21tGZ77aHrQtHvbK7Zdcccz1eLRnA16k15EPdiRBfFELd6aiHU21wSdeNX23aXASSkQMF1BgLeFBNAyM4m",
  "key25": "2aWt1MgTpFrSsKCkFNwocxFJtB6UrSRStDEDkhMYN5medZSuYitAoYGjeY4jRcycY6E3VEz94QqxRvxm4yfRDKfj",
  "key26": "2cxH3gktG6HtXp9n7qJv8Co9NmjjmAZ4aAZe3ALtBUGJE6aZzLsYTvT3pPPshqVTKBtGmPxYM8Fp5kHjwR3WGMmg",
  "key27": "5sgVgkpC9JXZEQNyEJuNnLWbPeHKHMv1EgbdY6pcxzgRGq5nCcC63pRUPpohLtAKsCCXzPk5M4hSMCZmqj6iXrVK",
  "key28": "hRPiEFQVPHC6yehaszctGybWc7ghnzYv3Zm92oqJ5BMtui4iU3NUC8E7HAmwkR9Z8nTYbBenk3VCJxY9rTF9ri9",
  "key29": "4zsHmgdSbBU46EgjzTZi5qeAd2BsXYbUrvnnKSR11E8VcvPYXJvyqsnMnCR3nEwnnsPcEnakp6a2ArejYPAGf63c",
  "key30": "2DsCZjTSfurNZUha6iXkMHS59o2k79U9WVKeMKX56Lrcg7o3UtHJwsCS6meAYLrReB4RAT5JG8pcmvpMCvyRD2Mc",
  "key31": "344qLMgLexUbUbusmdjCP6SAy7neypWWfGwHNY4CA67CyytcFiz54PWT3VH4uynubhCRN4fSuUJrfAuigS21Tw1V",
  "key32": "3jzbvg9v4j2vP1V6gkPo9c3amqr7tyafg3xX924fAZqJb6DFvanDqjFrahYwvkkCsxJoRMqTKQyxUAmNPT2gRFrr",
  "key33": "fcAsoNFE7SAr5FHa7RPYPkGNH82RMtfyoCYH95ZG6J9H3ScpCXp1Q7j9TfLLbryHDCwgzvs4ZaqMHQ7ZQcxeVyj",
  "key34": "2DkuQVgSDGPXAv79149CZMcLhe2KTQF75vee73iwRzV6VcHWzYt2F2QxZq8TbTKBvSBwsZ7shAuPiFxhFYhXLk4B",
  "key35": "318EM9phT17RX9WiAuWLdq14zLv5iXDEFXEjd7nfjqt8pKkyR2eCPMitVBrF51irsGPahqrEi79shXygBJ43YFQP",
  "key36": "HKTZ37Cd9EJL8xggtRkur6NZAMSsrrd8iTL38dDMkMv5DDeg4jmmApTp1CRKnZv5mNZpaVxFgJKJc14eneE5paq",
  "key37": "4VodqyvMS9Z4UREdSrYw2cmrMruJKZmSjQUKTj2hDziXPazmTDjMdH3Mi26TBM775kUuj24gM37awUkhjtvodKYT",
  "key38": "4jfxbcEvvKKsxQZX5r9ckXo2A9pimod3ZM6yfjrwYEfBq8ABPreFTpTQSe4sg2yYq3JbQSzexf6WYR2LLMS1nHFR",
  "key39": "3yZzfgPA1YMqucpdBNmGuMwR89V2pnT54nWfkCupPKfmWVP9iu21LGyERzYdwkBqmAACg1AKo8v1pReNnNMK1XFP",
  "key40": "4y82qmHMKq7hWvM5uubufj46H4aYaMkYcgg6CnuFWaHBGBRZKcWrDGUAWCnDPhYn4qw6EzhhEM6RM3qNyib89Rhu",
  "key41": "4ug3QftNr9c3SJkQ7Dc7nw58AthuA3EY7fYN9bK9W4n7L3WFy212cDphDHy51MSEXUDZQXu8hjGAzFWdXidLFw5a",
  "key42": "2vh2eeBVeHMxtEXtBEPiSKogC1wRFPVFNuq3vr9KPL5qjaR4dJx2yCJEF2z6f1EVS6F1mPBMvEhUkV6ikqRpQXYY",
  "key43": "3TcxJG6Cz32k993B8PCUtWhFj2jWFydLWsb8jpDyickCuHSAku3PoDuBnyqj6ivhzMaSNVpKQdjoWrjEASDVnTHP",
  "key44": "JCjnm854WEzPqqCmjma4AVQGXfxujms9EPaLPV7fqetzKYDKTQmDspwK3Xhpg6Ytprd2722FGYiUe4DA4EtTNRG"
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
