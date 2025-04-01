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
    "5ceSMowM2TBfpNL22j2jXC4AGdjBJW8KG561LSHmdtwYYBstZtURgpkSbnba52fc82M6gzmjDFKr3RB47hVQA4a2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G238aoeT7RMkW5rKguEjENMmEhRDSvdBg6DumHpGAuK9FAcqB8asMCEXcdjBpnuLJRwyxwb7TYiVvXBVS8J5oyJ",
  "key1": "5gdzGpZf7aHSzqmm7eG6QEZFqTvs75enqBq63UiE2Q8uT7hXguAivjaAgJ33XecsK7pLgah6f6vL1iVS8nhKo2sw",
  "key2": "4aHy5QidJGRtujxAvPYvXvcNCHF54e5y8jRFxb81HG3kLLX8uTYdWT1R1RGxoedsPtVfs385Crs6cpdU4kXBUuT4",
  "key3": "3ZBrpEZZxStjWm4pwY98G2WbxEasePZaECmTuJ7EjyhaXXL2d3Dxum4au6iXLN2ZmZRsNgH16kKCam3nWVaeBhed",
  "key4": "qwsMtfmfzc9ucLAXhtPUnMvPvRmPwQ3pUkAhnNoUmdov1hHaQyiM8ao5Dq46SyfGBNXxvUgz4NLxZkCRLhVnrWs",
  "key5": "39aovDBd6K8epaMgzAGYcW9vZDRuMjCdoAP4AUSXv3zUCYdESNcpkG7JC6eMFWWMbxrUhof6Q9p3ZeMU91pX3Seu",
  "key6": "5eFMKpvmFCcTTSRTWNCNmqzChsWCyfB5FE1pqd7cXkLVebBa28ZMzZpnJY3ByyQ5yhVfmq8cmfssXdSx2rg86PfW",
  "key7": "pMtrMFyHpnMrWTz947g4W4EwsNkf94VN5q3oEKrbbifMc5jRDyKbAJPVNmTwRcmhGGxBAn9EVPGk788DR6iSZFE",
  "key8": "hNSG9tmN6uX3ADX22yCzqy8qZnBUfMQr1oDoA1GWs6MWJed4sWeP77fZwXA5C4MAJ1VuminVymWVYZ5FW12ur6R",
  "key9": "5k9rodPZFygFW8jYV4j1VRspuemegFRM4oxmbQWTLhmQL2PLZRCHQ3QV1VXjyAKqYKht3bPQEKkFLRKK4YYzoDxt",
  "key10": "5fuWSonSot58gXv6xQfuZV1EGALfu7Jb4ugpCaKJJAyZLc3wcjZ29P1qyPfgdv2mzPebcxmHWBVvyTArgR4BwBXD",
  "key11": "4zj6UdHHJiEZSrCLCKVTe7ygkTdQV6RaABvvZvH3RnybAyLgtB5ZkoNxe26LgwnnrHGHS2dzrpnuAEx79ZZYLqo8",
  "key12": "tJnVxZCK7rQv23SmB5n8b2zRo54KccJ5vUEui7aS66p37tRsRGxW9PWza1mvvASPriJmia1EqknddWwn4qVuuu9",
  "key13": "DPperKRXEnEbCFfNtEGtBtw2Yv4x2tSMeCELToLeFNYgVMtWzYuSjTrcHcCyTWfdbYzBDiujS4uLNTv2PoZipyv",
  "key14": "54eG51QW4qRFc7T4ripTRkcE1LmNgMVVcUVnT38NwQUiWNzj5CsVdaay6HN4MYrTxLM8ZZ1EXYe3YhgTVgYCLg26",
  "key15": "3JtuVfA3SGv8cD6ovpQeLkRX6eAwU89V5mr3vnu6oqoPq8MgZccZTtRHHn6nayUGQpJaXafWstQtB9aDk3qetL6Y",
  "key16": "5CcLShqgeBjoiCqF5v9AYLw2i1QtNYF4ZwnPacTgcEAdkK6Ega5pAxHoX1LHMkr5zRXcPSrMa27fETeKw4u7dt1g",
  "key17": "4AaZEaZ319rKcstyzzGyxmFNUVoZwfC3itG5LLPxHEh1JcMHZefaZ8VqERJo46c12H64HusnKgh3Uh58GyocBwYT",
  "key18": "4BmE8S9zZt3CEaGbWEWGnwgjnozcMeTtXDqStiMWsg8RGQ4ZoSFzeRVhDXCHpBWG6GkqViLao6BUMS7grvwh2qUi",
  "key19": "44MEipkEtxFUD97og9TJi7ghmw71gTXz6hKYGpGf2iBbqzaVGpJgKktiVLtsvQ8J15rrp75qz9JAtULUadoVUw4K",
  "key20": "48URsW8rG3cSZ6qwAHCkkxcmArgGfeVTJE4JAQa3JrP7ku2jc7ruT6y3g1H6mbN81iaaJf85YrG6ueawn9nw2Hhv",
  "key21": "EzxXi9xXLYf94qzwxbZBw6QRjn7ULMAAzMNQqmssXbhJoUfU2SY7dqXg5hsbGEKjeK8jB8evB2WR76Gzkqpz8hT",
  "key22": "2fcQiALdzLRWSZ9ekLtWzeMsD9NCSjWWFvarJyQxALdYV5nY4YVBP7yfSxAdc41ViSLBLGksUpnFEUi56AiicGZg",
  "key23": "WxecLVRzwDygvB4mBLUuniNY2WMUv18rhpgS2n4g4yKKZXLhHEnb5C3Ya6sziGxkaTsqXUJ838vHcgxGnvykbB5",
  "key24": "3aGvUJTpfZvDzKfzKxGyjsBRHX1dgEU8KBD3pCrPjgXCq4mnkL59mA7A84nkuRfWTqdYRg54nwiS3THUpsJyNtHr",
  "key25": "42pyc2ZAU3kVWaSQdN4Xx8uqo8otK5h6dmxND1wQ5rxRKaE54KCzzJ9qmBUvjGCV16Voshd4qvo111HyR9DD3med",
  "key26": "4nY53hzx6g3MS3xkwUPXgzz38tdiqZ3AgWZAVBCwumdtWqhtsfazaViAd2TyT1JwXV56A2h9es9M9Sar2keF2ytk",
  "key27": "5GGzoiogkhC3mQ3TgHzSaCHGG6B7A33HsSGZAopCSjvrWKikdGM9TH4BYASa5CDQhQRFo8GQfj5J4BeEoSm1y6Q8"
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
