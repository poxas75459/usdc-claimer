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
    "4vbeBkhUiK8u3mMQ1ZVHX6HPgXAo2zchYM6M49XTUxmKVyUVcgjwXFpBhCxd4gLpo3Z9HcnW3vMRkyq6SFD8ypLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yM8HZS1qYmtD3teVpyXPXe726jRykdgECqs84qa5tBMNdkUGFB4DjrMww3h4rUsZsVJtPqKURUiLMUJhweBN4YM",
  "key1": "uDmn7WBkKSzZLHQxwJS1CtTLVFqEebw11uFW7SmEum1xnBCYT6935gmoebJZy7UjfKkpSMSSHZZbSLKSpLicdqE",
  "key2": "5KdoND7ra8WJEJweF8Fdz7xnsPtpeszMJFeC8Zmpyt4TGeKPFAey7k15pREwvnKiybqgDxf1Y7h6gFGgDx1PM8Lu",
  "key3": "3J8wrozUhuvTYfCsQkXkr24mNdyZFWyv5KQ8ki8YZuuMS5H43LtcpviYMbYZjQu9dRepG8ctANSVG5jaBjgAizCE",
  "key4": "54e9msTcm1CXZMMcMbs3srN51DwvsQJoGwwBqkj4fE8KCdEcTZRawP5Dj2WAG8QZQbgQaPFwoDS6Gaizgq7jYyhH",
  "key5": "3NKy6CwrknCMHbRsz966BrzFBMMXV8yF36WBEMLr6zAi8J5kHdR2dk2LgTRHENBCrPe8mjwXhtboX78HZ2ZNB3ug",
  "key6": "5Rxpe3kL1Yq1FE7M9CTpTiyQQzweJ9WnozKEbu5SM8woUkJBJywbrcTcJVk9csDUZXtSZAyS4RXuEfsmSSm6odaf",
  "key7": "5BpigQmyn8kESW2eZ9UnsLE1yDKsb2vmFYvqEYbZzTQMuwhQoGP5Wiz76nXgSvVmQfW6nMkXgKyVuCitxhFwyd9b",
  "key8": "3s9WTwXsuUmCMNvxfy2e75vcvFYDDBqotuTm1PuF9xWfbxcERaDKdAigT1TL8fzu16PVwXBtMhdrpVHw81ACk2r6",
  "key9": "CmM9pvHUEP1oAGYfq8DDwLaPjUE8kCYeGGbbD8mMBJmNannNpY9woorXuCZwC8kGBq4ahpyz54roMqDqurHJCHq",
  "key10": "bYEQo75ZvHjCKVBSH4umsVUiEcDYKPbEtJFNB2b2MA2rVXBWYGDZViSw1Ud7baqLzDpqTedTGeVq856HyDabQH3",
  "key11": "5zdk2diut1UbbUf9XD37Gk2CgsFqPqPMNJQ1iWMKBH1anRC2HDTcWgzEhJehfusCNLhwetLZreVE4ioNymh6tpz7",
  "key12": "3ezU2aqHp2K6TNRRXCXiJ6ZCZ2bdMk4XND8sHqSUPK1ni8qkb5duFedmARpkrmJwchz88kMM1KVazVSJwwpnLvzu",
  "key13": "3jnVnBdCK9N7D6qDLmCyxvXSWiRwNFA4DSDozqX5n2c8bWjLkL6xAhtaaMKZtj2dqrKRTUd2ynAYioGF4qD8wGWc",
  "key14": "4RRXTAZ2JESte4Gym3btgBd12AMTsTCbzm1stkxnBqkbL273jGtKHeko1iWRKgmqsTTAJ8d1uS6tiijAXimGmfti",
  "key15": "42BjH2AKaGHZdsqmvEfuYDKVx9KuddPHWBWBJkovbMN2LHdVcx9os3jxRaBfYsEzKpr4ueQZQkzuPg18wPBEhhff",
  "key16": "2zdpiVz9z1tiWLcMauWSuDipb2anc9pufWbxsWvPkSGGDejEESowyVtv6J9BpuZy8emm3SvcDPB2PKpGff1DLzeK",
  "key17": "2zhju7gn8QyvzKe76rZzmxr1qd3uEGomqC4UoH3uqzhTKvL6KyssUVmfmimCrxLC4sLhzGrxNSCfrXN7ZER7FYaP",
  "key18": "3YuGCqVr7r3wBPRPsh9wK61SdpqRtgfp7eQXQ6b37UqKjQDaJHTM7jDPrv3NZosn2JLw1yjq24xZrbFfojMTELWf",
  "key19": "237XPti2dST1dAc4X6H1wcTExC5BdWNhKZJ2okTTpCuzhDHsGhxibAEmbkX9LKqn4v4YtkRvaoxGQpfS36HGXSTN",
  "key20": "4gLoSTcrzHrKJXq2LK9Kh3XoFgqV4JWjTr5gTExLwkcQUohRY2vYjcEN48QtmhkngpNB6YD3PvHuBiK7mA9u4Pjw",
  "key21": "58wJgA1FTvwhBa7mgKD3EPrkCQfLRfNBNy4QYbFRRa6dxdnkVgSXBrXfAhjctir3PKNdoVErMxfa7xfWGuh5Kjjm",
  "key22": "23Y4c1Pw5SEQu7RtM5z4zo29fbXD61Rf8DF3odKhsEaWTFUBZa6ahNzswg3iYDv7NF8GNafJK7JjBc513jx2H6ae",
  "key23": "3d94oAnxEQBpBAFBnHxt4oEygLTGaCZmN1Zk2MVhD4g7TAN7QnWaMkW5vtsZUiAAMnxWXiphXbV1KYsRDmZsix4v",
  "key24": "25PAQJDd4qZCEthEAjWngTmpNjChmxioZNQdXLyUkXpwb5rN1BR2jUvgomHoBCmShPfBR35YgTww6ABpB5K4Mivn",
  "key25": "5AaEfHnhgGUfnfiS2jy69N3hML8nY45sztdthsQ16G9EjRLFrD2VFzrn9ndEUVgoY3D827FYfJeado8C6gTqjYnK",
  "key26": "4pjSW4kjoqopWuUcW6jZnChux7ZtF5YyLogRp3zbyEuHppuUKdsFUVmj34eFnaeUFUbXkXhfwQ7DL3vSzarPznnP",
  "key27": "2oTUnYzcS1VfmyNuJCryCBWEDmh1kVN8FTQ6YoTttnjKVpPGxFkp1RDhFZGjca9TFihSZc3HDngWwbFzS74AZ8xd",
  "key28": "572BpVFv5N335XrB3AW4MdhV3CjwwceN9uqCjRadZGyi7Qysc1kidhxEJiS8gbdtiyWezEhjLVcYqGPqSdmwsdVL",
  "key29": "5WNZZPWGgqd6dzFNMgYeRQNkmDYEnhZLEWvN54ZB3yzR5kYtsNBWaGBqJBPH6hF69rLFBCKpTPggLARczcf9Qc1J",
  "key30": "59AMJRV9gdumtbyGNXZSoUHXRFajThobqiNVLiU2G3GfMMhCyeqG1RBX73iNtzG3xLfBEqN7DHkdtmbAQYPJVtxS",
  "key31": "CxigaRG16XMSZoCoBXLgvmsCAmBBbj8jS6ck3Ssysqc7TiC46sD1HUBb9wtbKvzQcPk7sFvw9AcTwyz1SemnT6t",
  "key32": "3ZNrrFpScNec8T5Yn6ufZLhyPyRmc4jW1GwJKGJEHw5eh9mGd9Fzb5dVgp5Z7s67DNJDrHtVEWVJC4PmjCX243xw",
  "key33": "42SgAdedtkdBkAHLRnkcsiEEEEUXWnBPAG8LEFrchCPmBG4FhZFFVNjXGQfY82fzi7WecPW4kd9r3HrDKXRaFcuG",
  "key34": "5bApDMvRqBCUvswDkw3azSunE5TSpN4w9kGRvWEBFJPySKLX3gadVTCWBxXvqqpZvmHXkUrFD6tAzpu4JFeGd7ip",
  "key35": "22tj1u8ZFGrjrZos6eEMY7r594MWgExcirht1JjBJTMJegmmMUFinALRzZGsvXV8KBHzSBnyWDDhX6XPD2t4STa4",
  "key36": "2mGoLD3NFgbxBYs1JxHPn2RXU88WFgYw7sN66mrsyVFbQY7qkKD1fPcDnL5tAPjjtos41yKDJaCAgz79HTRpb2E7",
  "key37": "yAAre3b66ZNNU3yhYwJRJvhzFVTFjx8tgiw1zuASzRqoMw5HUqPPcfoxHqNqkvSRBaejbcF8sstZrZBLBDPjvPW",
  "key38": "SYZ6uD4ZNuNom47CQACRVDmdZismBUWFisU8dXSk16pqeWaxWHf4xqr39fEfN7bKLXV4iggiiiruYQE7cgiuzp2",
  "key39": "4KrrbgSapY9u8SoG9YtZNsnUcSSfuR91JYD8FN5TnhMUD6NfFHZ99M44HxrNAV2gw4yZPNWLfa2Zbm2ZLPTCNbqs",
  "key40": "5Mi9z61gBQW2iUn2TEALh3TDjHEaybyvEn87LfUt1tg5CjyQy3zpm6gMVSX9QqjZJNCEWZ69LNrNWXb7MjaMJELs",
  "key41": "586rtr97qcFSz84xcBoD2aAoHpoKmTJjJEvroBxePixBNnt6zjeULffCuw2aZGDZwVCtoaQGiSCbC4rWs6J8kocP"
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
