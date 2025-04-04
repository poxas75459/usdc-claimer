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
    "5LVQDGkdrecUsrNsvA84boCPK3kjdXDKwrLP4HqLpauEiR6vp63a3MaS7n6e8Lzy7MrcMEkNMBtGisCNrKmUW7VJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UwdfRseaXyvuXGLEewkFKMU2tDy8x1f3Bp66aDjsYaxk2JSy9JHYMVeLYL1aV4A9FSd6PKC8GBGqZVk4TemQB3x",
  "key1": "TmDX32vnrznsrmDPzqyntDEiHpAk7QArMtYmkV7qwq6hWxcgWiy5hBEPv5kFvqAizAnyY1CFiVyVzjAi3hkLvnz",
  "key2": "4CCeazU2T9PvHbY9nBULdbaZLienZsqZrEW3v5UXKY1d4FGo19rUVUboyJ8maxHvwpuYbhLiefMZFDPFdhuEi5yV",
  "key3": "3bdUtcz1MBEy8H3vV1arx6VLmsPKo5v8xX8ghnZfBa3dsS6LZ621HHrAeFCH2QJcX8ErhyoPSvGey4sg5qGPYRYa",
  "key4": "5rBScfJ7hUvsvTdyrYNafYmSGPWtGQxjo7UGa8yi4rLNsDmZj8e2CBktAZGVQed4z3v9nXYiTL5JRdCRSpy4rzri",
  "key5": "4wmfpaHfQHtsW8SSxK8tktJz4RahotnZm66NnNwMNV5Lmxf9uCc8XcvwgjT6ZwDgM5coE37sxNi78hpxcW1TptZg",
  "key6": "4HMgbP67jj1Ce3pEprCEdsBwGA6BuWmM5cFjKxMsT2jvFseTc4B9VMCp4gQc5DR8Myy6kNZrhdoKDDnS1hCKBUAh",
  "key7": "MdWZE9cVmD3cUb1umX7ZnFFV7zQTRSgHfsXXDayp3KyyuNh8qA5xXDp4HNAdXDxcPhSF3Zi3futhjDTYyCvscnC",
  "key8": "54YUgcuTchtBwqXRXgRdG6gK5TCSDrF2ENhtoC71LGhuQDtW4vkAt6sdvWx3xEbkump2hRz7RWFesGsq7vMBb3WU",
  "key9": "CDg62CbPdLzXS5XCCn37PS83trg3kkoxhkRYqCETWbhy1NwhybJpRAKtZpdaYtoCrUQSyCcFQCQKzZSvF5oEynt",
  "key10": "KmomhBEFQPfmh6KGpgzdcSikLeJyBVPjQPr9ovVJzZeDRMG8eQsVabpE7hUx4RWBfyhQHfrcAp3UEzRspmq4rQz",
  "key11": "4X6QbbVBYNehY6CSxuA2tpuJGMabRBZt6hm63qnUEtfZFqTBnPRnGTmS9EQwVNP2JpWLAftoMsTWPeTG9AoWE5fn",
  "key12": "XXS8AyYwTMimZLBZ9BYLfFfexDqf8MqJpGEZAPhP2Uvbam8Z3WtWJGXnSvz5tfnyuoivJvQNCpNfEyczJGUEFnz",
  "key13": "619FVTaDrP6Q8Jge2GTikMqcLnb4ubWNfsCa1dyKCjSAs9xshDxUpxEKyGZqfWzvutt8BN1SDRADVetBtMijhoXd",
  "key14": "59mGaUkgbET46YmKmBRkSEKN8i6D9ohkc1r5ZUSapUSHLYJg4TDuHJeWRmkmWNvPXiofCdhqL85MnoUBZAaCYiY",
  "key15": "3GBntTADdpV8eHnUd1AxG6KuaVhtx54kmpiesYWcupP3Hcz6iWTFopbavvsJNoJxnotWdePQLPYmGgXDmHwncNoz",
  "key16": "3uYSAFkDrLTmPxaC9Kra2shbaadVWP4EFmy6Fo71g6tEg9auFeGC2Z5bL5JA45TsHfZUxY6iTZxofHC7eJRPwC78",
  "key17": "jJ3epT4WXQrewM7JmDUpjHq36kVc8br3uhJAWnFAo9mhfgGq85PVLFEFTRq9W6GkbLxutbJpo1ZwKiKoFC5MfmD",
  "key18": "4A19fykonhHiVkQtHq2hk1s4CqWj1xU4cU1hiir2DPsxz4KqsmQFHvGFqejUeD3VNQTixuVLRfqAmGpmcspNZuKj",
  "key19": "4WbnLcHdYp5ef8MaPp4Y7CDg3dbNyNVbY7HXxD1HTQNsB3CskEPrpuCp2JdHRATnuiTQXqkj8kCYGeeAdi78ikxi",
  "key20": "42fkzX5fMKFiBoZvNrAGyYTA6L5vSjoss9SYw93Bve2RnMXNj1Wk6X5fiGXWHjmT7CUogF8kauRmFQ83TqBCPnoo",
  "key21": "4HUf83adCWXGuw93THfLVzJGdW4kNwaorqi86CkWe5PqASqdv6jUdebe4R4NBZV86qaiyiAG43YnijtT6JrkZEjR",
  "key22": "2rPHVJnN8qBtgykTvmyHfsr6LVhfgLnU2shSguaCxjbYPsYi9t4qAgSk2P5i8VLcf2tGwCrNf3FdyiWd68WCcyBe",
  "key23": "3JjgKZHdZQjLGa3KcNUHitC4ureJ3v1GiEqaX7cwZaHRXHQP7wa99to8evGMw6YBK6XViUvj8kkzFU59g6tWk1zu",
  "key24": "3KA5SWcbKSRpgC3qCpbZWU1LmybXTZDNntSjrDQzWHP9bwAUoQAE2ymtdb3e9rvFspGyvVsA8muxkALCKdUbmAHB",
  "key25": "7wotxysUbtvbkmz7Qo78SGVjXCw27GhUhHRBTawfJjX1j3HkH4kjB9ZrRgM6uWfCkCm2xvxEbMp2sx1HJi2NLNN",
  "key26": "4YcgAoTaxiY8ApAt8hGCRzUemK7xs6Nzvg2nS5kD1ejiEFiyUGixC8qxNWV4JJCL7NH2KXpbNovTz2V74Aa5gWek",
  "key27": "3tKdvJUeb2DWVQ2LEMrCV8QaSzeT63MNG71SEv53KRYEzNXwhzdrUa7ZXx35vGtuWu96uTv5Dprjq3fPML8djwPP",
  "key28": "3iTwJkP8upbXxy7ii2x86ZCVXpdoiXY8Ph9MNeMUoFPpHxxrxSUBLrp3PqkQXL4z3w1BXQw79BKMrNMKvwjfsBuv",
  "key29": "SUo1koFS9jqn94kW6wKZr4kUh8sS7KvyB9fSiWpwAUX9DyKiFUdjGAorJYkx7X7dohN7j5Qr8ont8jB2isvx3Ta",
  "key30": "2i1LVMq9Yq4yixPfBdhoNrAD1mkNhroR1WUksgZ1S5YCDPodPEyhXujNyC2t6ExawJwaC1gZRoorXyhnJ84rBK5G",
  "key31": "3i6T8sxkzh4mPfkbvZN6tAdNESioNxmtaitLCBfqhnogeV7ZBZVq2i5Fk19HhAiqWKKNTSeyxsTAC8B4Z7Fg1FGM",
  "key32": "4hKGorcCyjRay39PmfQtpBK2MrJKeP8nB2cj5u8JYavBXY8q2AUKywKM2smaznKmLeiCXKKo2DgWZ9HAFaZrKTRD",
  "key33": "3ucWjkLRR1LLWBwdaRPUSjAhDM7DnHo5e387nYiumppSb5QLycQyhATXdx8Kn2wAPdksvfvU9gFs1VaRM5tXg5bf",
  "key34": "2bFyi6koDJqD3BumwbbVUXYwa74daBBwLdMHChNBnmVfk5Ffw1L1DmvVLsHCqsxuBja7eGLYh5fCek3iChajDzn",
  "key35": "4D9ZizkfgUZhygXayFoULYAfH6Ls9vg4Mib3FW5Z2XkHUDz9zCRXjRshPM5DkKBgGSnTJUWL1hnzdGNqZn2ohVyn",
  "key36": "4RyA8PxjNqdprM5gTveqjiE8FRebARVAEjwxgtRrQskGcT6ZZoJJB6Wqm5dALRJ5uueCUKYKecRtfRLMpj4uA3in",
  "key37": "5mqju3pgEAqkqiAELEbQEwbnV2R3zAY8t99czqMphP9hSDdyUvv6TJ6tP82KysyzhhnwMYr2TXTkrcDJuLDnJEun",
  "key38": "3w973JPMr1PDfx3RCi592vj5x9SG4ZAf69uhGyem2hzwF1uqG6FD49n7TuhXE1rxdQd5ua4wvMCW4tkXAMdaXioh",
  "key39": "44JvNHvQRA1HEg5xLtMa2V5feqMZgaEDDgbQJ6DayajPsHLbHxMdpH2ZcvWaXyRsmAdMenHsqHbCjkGm3V2a4rFe",
  "key40": "5yEcrR7xE3HXzbzvyzwdqtkkx6hCPykm7B8bthHj2ooVc6jRPux48p77eL3XxwgSy5SUT1ozijdxxcAkPbM2a1iK",
  "key41": "wxaZXnB1tbXeGoSGbvQUYmCpt8T1hNdgShhuBHiQP3kPLcyBBNrDA38FfCzBQ9gTtJChxb984V4x9LFRyWbNtZg",
  "key42": "iAsvJoUMmMFXVAww3Kb2HoNuFDGMttGdoU2yYNc2H4kZLjb5vtgzie1EGagpDWpfKTgi21fKoVLXYy5W42fD6Wb",
  "key43": "4p3Ab1oT3L8t7a67iPgDFde1c8VMq42VgaWKUZj3DSBDJtf93cLYswv5DiCvsyJHbPGsmTeheNoLYDW41oVfo8NR",
  "key44": "cvjLR3xMCZtDD1h4sET5ayd8dHCi4xmEAiyKHyUAtpRiBDymmGGzikUzoHZWc2ppwQdaKzoUuMXPPzttJTyrKib",
  "key45": "2XLaQAm4BctxY6YaWrMp9FU9q5CwFkdQw75qoZNoxSLzxF9mMwfVsdf9kRLmu5VnKJ1osiv6SfpuAVE84SzBnUmr"
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
