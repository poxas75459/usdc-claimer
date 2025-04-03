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
    "4DtAsDyMQtch1gApejxvyHHEBPwoVHfJvMXibafrGDGGmxcVRMyk1f4vmRz1qJCMytceBF8ahxUkqNQ6b3K5nnN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qpW2yMThqCTw4HJfWeMAs3nprJWmn2oC4H5NzsHGS78vp3rDHBwc6UY3dGUikPh7J9Rp5U4WNgbdoeSd9sYAjsv",
  "key1": "321ecs1iFq5c5GPLA7ASZoX2FgXSjRV2ncrTSJDXdFAjL2us8nQ4jMn9vwEhsJWJgKuFfQxULnp7F1kEUwZwzHyy",
  "key2": "3dHXymem6Sz14M27PvfvgHHuUMqu8K82FaGtWgXcEbanMwkjxzgKG3Ldv628UHDJRRPd9CXbBdFT2PVxCGhp3P1a",
  "key3": "2GMA5S1S3JamLee266pKMzPgbTvrr73fMseUSS14EU3QyHCVoUsbBFmanb5NnaKnJKrdqmPwVqGWNp8aNTCmZsP1",
  "key4": "2ZAVoGecKqfuUCeuqi1MuwGf6b4QVRwsG1ZXtJazreYfotegkdS4jjiffoXJ7rYEXHwUTSs7TkwQf9NiqzaCh1H3",
  "key5": "577YBeKDecZJss8NhHofc9wti2Z3YdLCgibFNUeRTRMyazZdLyTJiTCbphP1f2kHxDa2dPZiyeCXXUTt3k7xRXSo",
  "key6": "teoHAwnnHf7bExAtUpvJoGaEcxKPbnNxsT5Qofi4tcZ1e3Fqcnd6CbyZ1HKm1TBkFtkmXCp2aYzZefDr5i4LMFw",
  "key7": "4XkV4CbGfc1wVB9RGfy234nbyquAf3NfQYaFPzZJeYDCfGauzkHfyaKDRUouNkftrEu487ZQxXLK9N2WACHijixp",
  "key8": "4hY4dAsmDMVn3PVBJgWZYyJAfuZ6zuFe2mfWwZX5ypynL3wzhbegUAhiKseTqtSPGXFmmGGNao3cU2SLskyhPrz7",
  "key9": "3rLTCuvQ65x1mjPWDsKeK8e3QfmALEsPusbPP46ihae6U2SS65GCrrt6aEtVPk7bpZoXUSyvawyeMiAyAyocPGsd",
  "key10": "5U5tSSxLEr3r1zsyJoPdSrj21HLJsx5zGNvJWqbXtyHUoya2kwhWgHsvHyNN22QeqAGqV5Z6U9j85GLCA3Ufmohh",
  "key11": "23DsWKWYt4H4Cf91u6RgGMpCczJVUrp3RraZdAHewc3fsHpf2Zg8sH2Px5DRCYrd8N1qYjmZ9wJ7yoXV4dy8WG7j",
  "key12": "4UvKVeNEFiC36uU624jZ8BBL4sogKcL7NPUWsnyLCZP39U8DV9sbyznRrMjYyXzeHCZcdBhjxkdGTsmGHSUFLfvW",
  "key13": "2mHBe6Kz26BeZLa5gYNH6ZZoxHCH3eLZDMfvkDfAdAv5bia3yTXCGPTzHQW395cbtZbUoYKFNpeY3NFx42q1emS1",
  "key14": "3zuaoeZqC6TwEPdG95DdQMAD7vB7cPwRWoktxSVXCHrqeSktgYLvEo2UiRK87GEF77fYnoAraFJf6PNHP2ZtKdsT",
  "key15": "r1HjZrW9ZCHbUZd1Wd6SbUTN2w2uWm8wQPSCBcq97HXRFxRAbz5kaHzdsMy94jaMYP8nLFFs7JednmwkJiZBJNj",
  "key16": "4CwgXXXfRNzss3K7fWKPTYPYqk1YuJkds5dNqP1D8Z6nR1rPRuT6EVU5bMWuNGQL9xZxogSFxfGUPTPXRPCk8Fp6",
  "key17": "44cK1SGcG6oHszW9S2AXa6ASJftW7fJzAkXnWftpAj9831bAVFZ4632SxzXmqaPQo6TZvXX79dmhqMUEb5RduERa",
  "key18": "3mKicDiQo9jbknoj6sBqL3wzu6WoopTqxzT1NMqgsdnrjjs5dogr8EaqddreN8XBf5Uj6Qrg17N4PJfqjtjRraMY",
  "key19": "gqpaXq6j8Hae2qTfMJvCxz9NcKXrCTnpsPfYwC3BE8of4kfFzwGbpieTCVVzdcpZGryu5E3kBoQ7VnzLcXbH9Tz",
  "key20": "4kQhYgodi7sB18FmhByGkDuC9mdrfEPEFqQsrk9KtwXqVDsKZkaLmTrJtCx9j5ZBJtUt7AD5krzFMF3MeP2WJBFk",
  "key21": "5uiwqH9ZddXiZoQd5cx8Zb8Kjcy47AEQg4RWFngeocwM5Kgqk6EBK3jvWaicoLiwirUiRKtuuhCzmqppXdt4muJq",
  "key22": "5TUTSDZD5jt4hGst6hPiG7gdGA7ykvthCjxJzE6AS4EJsrdyBQPERVcvGASgLubZD8oWqqdab9HihQQh7nNnFpmK",
  "key23": "3ANMhtCWbiu7cHcjwFXJPibmmc3ubYCcit1LG2dT95tbD4cwWTs8JYZZP9c1kNTRmdhV7wjXqvU4wdDknEC8DBSg",
  "key24": "2ii44eW6Mip5oUzNNCZSf692HqJWLDyLWc7RCZqwyGk1YdBG9pTxT69L2U3Gid6WXLua6p5PUsH45nvAkmB4Q4hH",
  "key25": "4QTVqTigwJkWXMmhtN9xR7sbQsiU6Dy38yhu61zSrwax4vzaV8jL3B2DJn44sP9KbX6XeFk9iR8vgyRuqfSJV2EQ",
  "key26": "4E7Q6whMdWFAgg3ht2pKN9FprkH4MQYp3uUoKhNioZnHdrm3U6xcthevsLxK84zN3vdTuQAQfrx73Ej645ezG3RT",
  "key27": "4FivRn9JFRE1wXShVVognQxnur1dSdinqMeNGpuZ2YGb1qqy824iNkeVMNZD52SEykJgHPbZtCsT3xErdT8HQDZs",
  "key28": "3cGq4fBxCoRSGDLmmVHX183cbXWw1GPNZEUv2DVFemELzT8HshYxmdvrFGLosGF8jhLpQapqFNYFw7xoTEUyy8di",
  "key29": "3EU2Nn987VX7EUVhbHHeVomnnYPJHVWXWsqvUw7iRpQMYToAECekPcUmwQLFUMEFz71YWc1hcgqgkD3rYhQX3Gza",
  "key30": "46sXG2K5Jqvnss5cJCfSinmKeF8f3PGFYbiji7GbhuhCXD7vzvRzHfXkm9WzNsJ3d4G3NKSutuvZDsc2c4S79pC8",
  "key31": "EyGLd2d4jpvrk9rRRfAa1qTDSAbXaCSMAnk9J1p71X3fjMgVF6kHbGtBti8Qh8Ao9uCtgFgDZnCh8DsosQBq7kB",
  "key32": "39rApkPxsyGmjSNMKfWfrJRyA6xvbPG59ZdmM9g1KtGYSxMsaJm9kEJiFy2z8UkEFsyJDRzWhJRU6B5KQ6wq1J3s",
  "key33": "zXAHvuVtnQ4CgwMvHaBUuXx8awfs2ezdLpx2rSymJjxUjNvzSjBag9HdWS9p8KCDhbJURjEcQB6tmvKEKXF9oE5",
  "key34": "2TqWhDbFBV8AqfU3KCBK6ZX6uvTNMx2cS4AMiamfcsdDwY6nQspCpg3JSR5gC5dqB6F4wfda7Gp5BMv7kSHtSMrS",
  "key35": "5oZy1f1JtctAByxuJ1bbisUcfbNHfdkN5HMrWa8G5rL7KWCS3ipUWgRv6stt5o21EAUQzJtsy64TK39LxSH8FY7m"
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
