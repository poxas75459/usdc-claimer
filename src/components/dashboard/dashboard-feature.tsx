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
    "2LX79nJex5r6ZJK83phLRHaZsd8w4nV17mgJEiYz8SNTcXCgstQfBn9wpakDYKQNv2EMAx4Y2QYSkhjmtW7Fft9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X5Tz8PqWKFbh9vaGA9HFaFc9jMUcYCxLsT39hQpZAFW6e2Vtzk9MUMVeBF83B1h2aKEVPU1RaCSzDzZ7bfWfC7Z",
  "key1": "4vSvkuERPgYd8Xdiso3ACQXHzW6Gfj7QRVAxAVSPamdVM7ejHw4XL9ADyrCWQTFbrYph5hx4scJK2fAJjtdNUkQy",
  "key2": "516SPNCnK9GcbV8TaXFgZnEp4PQL165mqiMzTcCZMzEYVqcJJCCHr35zLPBad4CTq558M7RdMpn4FYkntXWcthqu",
  "key3": "iUaWAhN3PNfH2ovnrvrqszZxcuND5ttuUBJBzn4jvHJT9mzrhV8sEbeToqALyzSgH4MLaLWZQfVL39yseDAa8Gd",
  "key4": "C7UfB4i65zvnTPHFf425zRfLjYbbu86s7VwZFDP8Mc9mjs5pmJze4ERByDyrtmtbN4NHMa27buxnjxR2s7AgVcn",
  "key5": "5GfAAk8sJxp4TZBK3wSMCAb5z1a96pfc77DVPbwLawq1r8Jbo7xJh1275wmjhLLKUxMxyVKPcTZwj1nKQPgaL9fp",
  "key6": "51Y1Njt7ZSVj8VaSD28mRLzoLoqFUSyKxHAXN2w3Z5gybxHawwSBv8d7vNrurhqY1zo8DhtyzApRQMpy3TXs2Ta7",
  "key7": "2cRZGxFoQtFXvovGVT2kHTnruWXgdWqXpLW5iQLEznMEAKPzVcWJCZ9hMN89NV4q2dDD2W9dK34YbBHJt3LQMbaX",
  "key8": "V1Qj6hQ88adsWoMtP857nbL1Xv3nFSCaJiDnkbnWEMV8JgQfnUCNMW1ncJM5HYJgcgDfq3GN69MRH4H6SgoD8yX",
  "key9": "3dB9f2yYVQDL7xdTtq9wMPY35FzPuwmUtcD93kiSj1Bw8mpTykVYuaSMdbC2ayepJjgpRX1iDj8Zj41u95MhNPeN",
  "key10": "X9T4cVSjxQpHRiUzSg6z9zge1WgWC7LaYsR6iMLNeLsKA9mV1bnbBSZzcgiAvNSipa8w6V3oQWWNG5ZMNaza8XM",
  "key11": "5LZ72No9ivBoPeMqzUDczABRjQWirA6DjjUxHAkk5kuDYAnk7PGNexGK65aW3Hu2UYR8umjR2rNN7jf8qiDDhi6P",
  "key12": "26LaaEDJLA8K1wq6VaqyhYGhVFXef4rkSaATQ8M68yPczLnak69qN6N3xivKUAhiHLBnnPrDFUavns4L9z3GZ7Pk",
  "key13": "3nPW3gUWCFiKDZKbXbaVQ9kT2YPufkKSGeVdMQ4caRKs5VQTczTp5YVWG9SzrMvM3wwANmMwudugsRWzRDShXdQa",
  "key14": "zF77MUbHCKRp4MLeNan4NkN5nw1dcxc5xeCbr7i95HEEPqKezrM42uN3z86Q4iVR4aF8zFGuVgccreh1MpgUhdA",
  "key15": "rvHtMpVh7En5h1EhjK2z16rzeHQMNJQc3AimJez7p18tcTMKEQMmb1tv6kcm3Ry75bfoJpRt2MUMQQpNnJKdecS",
  "key16": "5dK8uw72nQiWjFy51ajkrJBt1SFopSeqRed3r9K6SSgSHuVcbWrxGdtmuLuAzGurEQginoXumftmpDf3CFvTiuyN",
  "key17": "5uaqDXytZwU7GhwnszCFCdRPk3CxBkC3Wn7k1t4B6Y6FXxrZPCZj3EgaejMZKXCu68YeqMX7D4h36PiyDHFEsgx5",
  "key18": "3x1EHca27mVMWMeiLj3hfko3rHAs3CyDS3LPcvmTVxJ6Ys84NYW4szTNFVdMADUEvB525uaCV43YdNVndvvpQS6u",
  "key19": "49dy9ryipPCLbZr921xMTZTwCCZRyg3RsAuqnBsAjPY5NqekKgNfaeyG9DTV4b5qBZDWyKtcYK3EdakaoeAenPmb",
  "key20": "2AJpzgWmhFjF5Lae633HcUBjSAfbFpmeDkkWhYuVfofxq6ERLFcEZCNaiHzoBTpz5cAZ5CUn6QffXyRX3JS3SAv3",
  "key21": "3Y4WXEqnNfjMPDdMMngmwMveX35Yk8obEDaAkFEARDKwnzgKS2k4pyLGKgab874TAJBzV1JEapNvrumKwYVWhWtU",
  "key22": "4mqheLBuA5dSsA15Ebbpz92fLYcP7ULm9PC3mWuhis87njTXY3DgofiUY1HffjLJhHqXzNa9rhidc6wgGfJceEat",
  "key23": "4RBf9qbFEVYUkcXq6UwUrHpLmuKoVSWeZypB849S6QcHebu5N4bExyesAriA6e4cAmtM4ejen3Jy59sWSpi7FNWs",
  "key24": "52f2KBGndKgSpAnC7F17doj3GkaBZ7UTDWQ9ksSTdv5FC7xtG2Yw2oAAgHmNdVb7ZhUTMwWHkJTDLm33qt48THDc",
  "key25": "AtweVUk38dqFXnhEMDjf8f3dVgn49TYRzA2guiRne545d2UH8KCUmyMLoAhTyjtAdyNKMhjHKKShyWZ3W7QiNHD",
  "key26": "A6kEt7MBNhL17kdJsQkSxtwsLzUdnmCFhkfoZq2v2HuPM6cYKfPSwEvSimK7zN1sk7ZhLzZKSUiKYNA7SWwf2jB",
  "key27": "4styFaEk4Fky9mjnfRMqEuh7rovHMdPNY6REAS51Lhx25dYsKkpjpzfBpXja4pCezFujtn9fFDVQP9UzsVUbPHEz",
  "key28": "5ydqcyN67uqEp5fap3vAeRV9bWGkrcxfYHaRWMxnsW8YFYsXnmCVt3tmGCypNq868tBe4GKZRdQCnczEeT7BimN5",
  "key29": "2oMViXKEyaQLFgwubG1FXGJDR79UVW53XjPRVVacZjbMnsvvub2jymR1L72j6zhUoLhARFcSxE6KX9PYqTC85oqw",
  "key30": "5KZDnvkzKU7q26q4rKbNgw3K9s65fSnkLEHHvwPfxCRMZyWDw8HrHD3aQzehKaPYq3gZXZCEB1xqZg3rcSbVnR8",
  "key31": "e1kdMWsVrAuf5skkXysMnpYmSUgQPWwyfCQHSxefjwZwjGQQUmsECGmVPURJxCiXGCFNFeFq5QygvrkLq49RR4j",
  "key32": "26tuYFVtnYSZPwBpLJHyprSrJKGxtaRKoDoNkAb6K7ppFNhDY7grhqj2ae2a5BJP8Rm6jcd4qT8Ma2grbtJSrM9E",
  "key33": "24brMTSDwxNDcrqe9HqX9jV6KsScYazcccixso3s8CQPj5oinzJpdMEXkAdcJ2HwNSfQuEPVG8D8Rf5GmHrUgvwL",
  "key34": "wm1d238X2FBoeRjWdiTXvmNSehVp7hujbZaAuUbD7MndMY6yRmZFCEuTwugvzYVG4hSx312wu3Uk9TmyV36LTM8",
  "key35": "gsT4pvk3cvQD67Jcro4LBEaL3XcYNWdfauEeHXxz97RdaroEWQzNcHSWvYNkFV36Z7qmyaiVagLiqnkZhnvoydU"
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
