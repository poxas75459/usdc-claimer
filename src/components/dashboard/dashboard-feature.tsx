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
    "3GBWrZR1ip5FWARLV2maw8eQJDUa8YWWBGpGhzXctELwxo81Q35Zndjvrkm6DSdrviogSnAYn3zeXXeqdtdqPFT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62nJAx7NJGTazt1BxYc8nd3DktW9VwExyDHtDR7Yqe74HdMXPk8RPfPfmyHWpG2pYHSKNeNEYuywMEoDdksceYsC",
  "key1": "4fzVPvLnmnYv29sMrvJ5rTWBx1AhqjFWonJ7MwBUCBBcW3YWiLJMLxWSAk4mXsCzsEMxyNAD83cnQj4pVuF8XYdo",
  "key2": "45H3VaQCiZ1UPSH9gr9wZh3KUFXErsAwqkQmtgEth3N3zXDBous4MLZ7DCeu52imv7hDsTf66m77PHYTk82atTyr",
  "key3": "3s8Xi9Ly7d52FzFUrx4xmabYoPGKhe8L7DtYgzbhWCfMKVYZoEMWAGexYTQjWhdJC4oErASKJmxJjoGYevTArPAA",
  "key4": "5RJ3j3tMEj3M6uEQ4rmtZhhnVKHVLRkRysPZ5wWDaGovcgVju51C5xuG7HYGq3sPnpgLNQrJbcn7cuoga9GX8C6Z",
  "key5": "2q8MguYt44wUTGZwyJTsQHuY7Fee4rgrMDah7qEBGnfXFLmXDg3WaznC8EmYPt8UGXaDmFh5FBWqPc8rQQ98FBmD",
  "key6": "npUdrPLsTwkPbMq1g9RfY9NBmrAXTSVZvnWKF8czK14wiMMREtNASC2KNRzC95o85zZynKNuuvzqQy9mUsjys9o",
  "key7": "4kpDN4BkdZRMGCnr6fkLrSASU8eXMBMDNV3oLgNFNFkuqTD8TkWf5G6UEnc58S8f17j72vZ6yLNwiSVzVUvvz7AW",
  "key8": "3LPanW9Ta438VQp1djz1cxDtdKCWzXjSoLTemHFtA6KUrArf21pghZjegAa9Gbzdvt2e734eV9uLNN5uaBJMMKuN",
  "key9": "5NhmLtxVfKZeh4SS8i1SsGPYoEyMnazZ8J9ojjLnrg8N88ffDXsphsseu2z2x5W5K6fqeX7NChpZvswrGUkthA1t",
  "key10": "RHGS3Z39WLQ6WgvmwKsWAzZvbLEDoqUvmnpoEaXQcTdxuZw3GEGrdRpihy7SUUoVUx9RDntqL6hQkW4yECK9hHg",
  "key11": "4zZjMZT5LoY9k3zxokdkJfurrgdpCcU8jLsqFJyjCRCDTnHHpxqzcqaodFHx3sLWqLboJD3eyrzH3eQhcaySi1DT",
  "key12": "o5PjZdrVQBPccd93iHekUAmxgAc5eUH3DsuRBor18TesAu1rNR1CPCFcexZcKSSGcfHUAVA9J8Tkf2nkTDAnAyY",
  "key13": "3BHu2pJWa7PAL97m9SC35BoZVQmYUqadnFC95ak3kvxDU38rugrmKCRumX15zX6QFuyvSKHsLaZEYc5HsRuCNdYi",
  "key14": "5vKYE7Ac4QWhA9pxpx5BecM1EbBN9mRQ6WbQhsUF1bNsuyjpz3NyAW3y1eAxGhNjCdEL4tugyABpZFN3qzYocWFj",
  "key15": "2rcRFewocrqDVbHSwtEeC6z3uUh3eF1TTzGeSAd89rL5bAz1D6JHA2hbAtnWf7CzpekH7YAPu83u8FrEZ2u9wwQN",
  "key16": "5h8pGpTZXvueKXGQuxhnc2NpZS79DXJBGPTDXA6adLL1cobmeaSgEgZWbwtxwDwoHSLii7QBd2BuAro8rvUzZepw",
  "key17": "2zUekSx3d6hSX2whL3QMRaJXzxoTLqRQ9GG4UHkMDSaAuRbyrGFaaQwXUbqxJuq7WUi42aNGKjBq486MKMBVvffw",
  "key18": "4i6fYaTv8HqQ9AeuSMhQZc7uKExntR6s6XZYLbHWrV1kfGjcTDWzJTPUbpu75aS15YiPPs1e6kMsUjGDq92CzHXZ",
  "key19": "4u3ExGYPYYKv3e5xekGur9YhRcPgBoK3huJsRH5ozVL7qwUKmJS3sVpGkNb8Bb9yMHmrVkDXPrrckdbGRq4U2SWZ",
  "key20": "5HSuAssKMc4tkU6EPJW6eU3XKSqrKZWTHfrTQcX8fxStJHw8DFW9Z1n7hMM1apy5VwsXSzhPbWKySUU4PjmrTYR5",
  "key21": "5zAiKK6jE3LsT7EKtRnChAtNhwvv7qS7z2ELkjD8XjiYrg68zZvH9JPnCXc5dEoCEop1tX53cPJzL4pPhZMsvTKp",
  "key22": "3VaYSMpsM2vk2sQgMXMfnhAMfnAPXNNtCQ5Z2e9bXkr8SFdLViqMUL4xNyNAgtBUKsv1mZ8okECn7iV1imr8LWmw",
  "key23": "5VdCbmDrqhdyLZD1gW7PNx7Yms2a7r6pYVHKiT9qfdKddiQm43G8sVS9gMCauYErejobhzBPksFajB6X77zs3CN2",
  "key24": "427myxpVf9fvyPQFGdazFVLQUTrMqoNm5UXb29FsEgJP77HFHr3wWbLYSd2TJCVvcEmUdZkwqFrSSDcgN8GDeQJa",
  "key25": "GeMmVMLMNQjiFMzD38mBYLA9eMBxmKrj3NrxJAQyTwDySkwi6G9kFsd56hCVab3DRy443tVPXM8jHJa5bzmGHSx",
  "key26": "xHrwx13EWt6MFY65xZ7U9pYAZhQcpDFjuTwqgiVo2ckCerktPGKXorMyS8Uz8eesjvG9je9gru3jEBstJajHAg6",
  "key27": "4Drufat7jwgVSKbmRNxf6UcBHGAtFP7s2cmZrzShLbSsj3S698ymDQzP8J9tdMCns7a4fZ5W5SZmrJifrqpjq6mY",
  "key28": "4jPvoz8RcJftjB1V1Nm5WecCc3YPPXiLfs2sGN9WhuAEvv9GXnCmMMJkLCtUsKmAJpYrpqXYphGBLoBZYMWBEfDC",
  "key29": "5DofnTfheNGcNeQUpmJGEGz2gf7JTuSdEWWT4sebRTMYCtGV9AiFmD27dz1eN1E3tK3NxaTeizhLQKoDRoSFDf7Z",
  "key30": "4jp85cTb9m7rqXSCpLkyuYdqMJAfqxoGXaWSpukMhRmLRDeziFCJc6SCBxHDgLUrAJVfgNKqeL5EDp6DF3cBvju8",
  "key31": "52UJYKFaBkiGinZURwiMW8kxjRkcyzJQwMsPnNuneNnTzV7nSo3DDJgRLdVb1m7V4itjn4Ru4bjWRwz9CviDfQ6n",
  "key32": "2gERqiwYeZr83MBM8He4n11gfyfxFqBBPJzmCsEoqv7yX3FHXX8ti2ZaArHbR1hwyGkMqLnXm4iiv9T62WvxeniS",
  "key33": "2JSoxnEMTDnEkr957wX91FHxuT9kc3sECYtvmHSAXPZub4DCzELpnBjUGJFJMWamCTSStAfA3oDxT7mdjiJBQYWY",
  "key34": "38SsNDvBtLnyKWEfFTg92k9ok6H8KXEP4SxqGTRztxmBtp7CFpXeZ2k8p5jfRmf6uXR9xDgwrjWWQ4gg7VUNLfC4",
  "key35": "2VHAT7DchzuJmpKmSAZUoeU1ZLHEJ6xqoYueEE4dP4rveuw95mUE8nifqESnGDKTSvuvHkqTXtd6Be86bDtvnBYp",
  "key36": "2jeNTSbrBevWVtg5n95BtWAkmhhR5N2J84e5jtVbVUXjv4BBJSwVnR6vj1AHvLCkF9CFtUcBJRRAD7eU3eVvSNXo",
  "key37": "3e9ZxU1GktVP5fH8zvh5grJzfG1dhgV6Ajy5x1Dw9NPkD5DazMERweM7Uvr91HsMWbG3ev2CdgMJtvJuCfyLkk9Y",
  "key38": "4izL16kiaaKwsLbYLRmWCpdtRQRGMdarRs5iJCMXyr2zZ25vnB14nvjHdH5bL1ZXNaiCzAi6Xbqf2QusgXLQ5C1Y",
  "key39": "5AEVzp2pJPj7mKepPKBwSjRwNLsnRfMnCu3L1yT1QLnFjFw2AWrARqb7UwNXmkWg23SJvednt7REkNjdKozg5HPK"
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
