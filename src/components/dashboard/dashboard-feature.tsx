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
    "41wJpvWBkCSH1kuGgNtcgboC7uqYSBVtnMSNtXZvostoSgnMToWtefaEKsPALHwKMF3d8nUgic9jhthwkywPsbni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sCnXaXPFemEQZxJeJGzMyJ86jpt4kuXrmgFpQp54zXRn2dHZUBxD8TSNEdT4gTk2eVD7epHzWGgxGbWnL5dt8nX",
  "key1": "2ySjzwFXuxj7P9k5uVR5uK4gqrsc1mHMS9MR5gAicSiLp15AdNbLjPL7w67QzxEKSMxPQGhErwM4odpChVNSgLUg",
  "key2": "5YMbPVPU3RYo6TZci274wJASegKTz9WmorEYfzHhXbDN3yazM6mxNqijjk37htkwY5jCJ6Yq7EET281jC71U8mWp",
  "key3": "2gu8bvJdLZMhuff5z2ZCBWjy8oMYtaxWGeqxSdTV6AxxumT9wePQYmixTjz3QM1RZdqywnbJHLCTSDRMLBWpD43w",
  "key4": "5P9ZWucR6pvRE6Ttq7R7uVUGhTFxx1uiXUzQ7LX7faZXSjLuK4k7cBFXfH3phg2YCtDkGz9zDcG34dn7dg6TxXen",
  "key5": "2NfkV8oritwCGTZad1yjDyqaoJEC5tCciFfaPiscQDE6E81AvbMFSVdtG1CH345YJZpKEVbYDPvj9RJV2h6nc7Rh",
  "key6": "4d8WEuxQkzeJedWGhdRaNQfG2gDVGqAkx2gf9wJrtDrtiNso4n65BExUK2WgPpWASdYaf7Mao4nUSyJJaGoy4sJX",
  "key7": "5HifhsymLigXwtZNyo3hab4m528rLTjyTd89Zh8TbU962tfuyVEXjCHQKn1EyihGC2Rqgn9NQBGCLtbWpCcm8z79",
  "key8": "UqGgEtBec1zrV7RfiCMcibqavhJnMHyyEBtJDznP5EenT6Cees7CKheFxaeALSRvyLsNaxDBLgRYXYdp4P7pTFQ",
  "key9": "55Ymd2rGf1ouB4RobRQYtqfFpLRpHRHtjm5b4E3dkRx1ZrbTttJ6Ri78xrkFW9tkS2ptbas1PtFSmtJdsyZhcdk4",
  "key10": "Jt9cQu1PSxzGCbe7defEVw8SFphD6XzEpQC4BV7ffH38WkKmkJgjvAJW9zp7nWfrL7iD74yLGf9rv4i9JfC338i",
  "key11": "5TCds3cytkjE9ZHSPEbD4uyVYkpjwHJEJwChFnrgEWSnSzYVKbRsJLTdmS6or3WFnxsMsq7uK7LXpR2A4e6hKDoF",
  "key12": "jj2NDuSGTzXriqX131Wpng8ovoPBFN2Rq5TPsSKHfZYGqXucRYVMvzQbXL4FtaRR9MdFm1aTMur81bm9xdWa8fK",
  "key13": "PeBVNFiukXE3tF91qasfmsNu9vqHmmuCxGNrG95J9HRt86KuTQbdE2cMaCmKYME1oKLGD9QAXQfVdNAy5poHkad",
  "key14": "3fZZB5T414NGnovPCBte6VCzaLAxnC9eby5gyZswbh2rWjGmRXDLR5gUuznDVWdQo5R6oaj333Dz9yAAs9nGzhHk",
  "key15": "Y2XXUgJHgh3r5aapo8Q2ieTM4rbc4bfnvRuDBpAoxnDofcSYF9WVaGKSmFwH3EUue9KxFPnjvJhcTbWZj7jKuAr",
  "key16": "4xZqXhejqAPCwyzxBkhoyjeWdj2PLwxGF7KLC2gDJygP8x9UWyJZYov1JH6btEufFUEGqxpPFsRdxWvSjd9oWwkS",
  "key17": "52EfxVCz8kSPX6UC8bvz14TcEoYrD7sA9FJd9VdNuetD5haG3dSWzGoEDUZVbCtZuvfmkDfNKTSHYtEZaSxTjKjy",
  "key18": "3yvXgkGMbCgtwGYtrBrndLGWbLAA4SwMRmtDtJivuiDyfjscHsiKYdYUG2Rps3hpZ9q3UYzSGHKydrf4BiybgSPH",
  "key19": "5ovvBC98iHbRPjCu1UFEuAHxmWL6raXpe5MhyC6YqfctAkKue2HL86RUVxuZRyhgCYkf6QGDzzpDeJgzBr6iWNLm",
  "key20": "57taP39gLqA11EbcYj1td5LETcbDzkRRy65SR6ZtGnig5mfD3nAz4YkyaV9XbbfPNsmA9S4b1J4mzMeGNW7nr1Ka",
  "key21": "3HECAaCAdg8PWnY2Th646wW4WNmXp3M9DD5X4txKQS5T472AfyawEzvSuBVztKgJF323t3nof1UMaRpJLwUNsCcU",
  "key22": "Uw1ekh3PfaaYBUhbEEUyaqncy2Atc9CuLgUTHCBRjdWsJe1Q8AQpoHKj3AYUJ67rdzdbQh1oDD8Gru9QG2NLfvV",
  "key23": "5fEuG5aHauscXyJEHtfGy5xVg7g5CprhmMBkbwWUSFUeK1EnM4jJEef6NWd8AGfNv27Tg5zuWivwmM1WCTd2PkB",
  "key24": "4ttViaw5LLt5Z4hvMsL5kYdAeFVv9NFVyraBVprkVuisg5VHWCsmDJRfcWyKq7x6WTsxqTyMJ5bWssNAkKNcP9Hu",
  "key25": "4rsozDwZEy8q52jmvxgiDWFC2SV33sVhTLBe6Fc3P3vddyzuQfZw4ApN4397rt8Ru2TapfjBiH9S6LCWSVY3oBr5",
  "key26": "4KTwn6rRUWA3sqMmSEN6TxV19NSMGZGw8EsCqHvhdL8vGZ73HhyZHP64AfQd4gmfTfw2UfVUkievHU221Wfnwfxc",
  "key27": "3tQAZ2YnzwqxYFZXnxY1zn5La9xCbq35Bb1XAQizH7dch9pTLaiVkNxq11ZFRkNuMXazqBNg9iSSSnXbhCyyuyFX",
  "key28": "3oykUG1o2miqpDFJHFAZ4PDtHcqHpy5ha1ksYLJaWHNZeDQfuq2iViT2y5XrV5uhyPQFkhBPDiESjmcPUBMY9Uxv",
  "key29": "4t6N41NnYCgmEAaV69wu9LVN2SiJFdE5N5AEmrk2WXUisvz8hAyGJ3DfhKSdfxvHpFbyTVoDg9R32Vx9BY6QDn8e",
  "key30": "6578ekiLB6Lv6tyHNi6psRnS5Bjoj9AEyNrWJ3EP7oQ5ytx8dtkhA2AXetKMM3cHtAVoeGibXjCgocEZehwH5ZLr",
  "key31": "2SDm43ziE2aBwNgHs5gzGeB3Asjz5Vnxk5Yn92hHSw1Rx6Lc4FCMhsn9dtf84H5M2rwoZUHgm4fA4jR6y18vqWWq",
  "key32": "4SPrzMY8Lx2vBTgcGC3sHurtciCNB9jEBmHLas7H1Z1KBS7YE7o1WaXVmu43FY4v29B43W7f41vmimBV8Hq1k3ky",
  "key33": "48qP8HHoWuBeWY5kpTWu7J9SerMYH3PxopTn94epj6LWDtZyJr3kMhf8qo9SraTjMyxqjY1qjqYqB8hvJQ7jmYmy"
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
