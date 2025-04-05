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
    "KALwVNMtRZNJrgnye3j7ohkoK766wwGSiUeuncMXxsHEY2CtpEmMXRu8t89CT9t157kN5CtfWz5tSi8enJWEVnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TEpZZyFecUdUNYriYEgq3trQRr42YSRZWHeCeEExHf5aXfx6zrNo4sJ9RJvkapyBebn9d5hXc1rR4qXn8V3sw3V",
  "key1": "4Bu4FaPNVsQfxz3UVeYzaECeTNHEgiPG9MoN7RfR25b5JbYa4TTLAf2FpPsnsHX28VzKUpusmvfcyvubyPBnvrbt",
  "key2": "LxigkZpZXhNc9wMMuL95vFhFWjqdrhBvPbP4qFN7wZXF2wQB5EBAr9nd5To84ikVRxYyVB1vW4DR4FkngEquCan",
  "key3": "4GW8EP4teEmRSzThTNzNeiyGm71suuePegaA354XdAi7KQvDUZB8QXQmb7e4CLEY6PNfAyk7Ai7kmciX8FgKNCGh",
  "key4": "4NxVpp7kHjJz2sSKQBKRZZ1hhuHWHto8FLZm2hkv56yEsyFfZn1DU6HHy5Aakqhij9mA3mEppKC4TSKJd8o2PX2b",
  "key5": "3TBcm37otrL32Y3e7AHXoEXhtDGiEp8d3tndAwUsEdm2VH75FYwXHc9iHyRqdjuFZti56vzEKf57oMmojkWQ4VYc",
  "key6": "3SmBm8VkdcgzU6CsdF5mfipp9fFCfW24XtFkQTvRvvN3WJk3jsVNmEjJm8Wf2SjFENSGsgPbd5zrVn53reRKbEMJ",
  "key7": "rWS4CpAZa7ZZZ7squRC55L5gjxM9FpL98x4qYMQkybiBTRkQx8h11aDdLn8Ueby4ycUdXT9mMoxE7gRD4Vm66YH",
  "key8": "nvNPfoRpAjhtSZxxXbcQNtKRrvrqaExD3axgvTDBAF7xuB8sbpyTbMKbh5pqjDH5u9E5kvwmVGr8x6QihUEmJPG",
  "key9": "4kh6Vem4jmBjr6G3nSKb3ySRSzd1TajZoTavSBHqWi5goCJUyxUzY3gwYM42TySWoS9mY336U4osJ7gxkGR9sBwu",
  "key10": "3eSKyPd1zLEK1k66LRcpfFJ1QEtpUBnqa9jTx7JT3zetDxgp5KvuSc3ffUDP1aKaUP536o3WyJj9h5ur77GohJTz",
  "key11": "4rM94DpDjM6DcQoimxjC5AAjgdF4a8rRRAm1ceh3zjmsn79adQWv6h5GHgpLo31iX7bWKKXtyLvWunzbpKbPnxKT",
  "key12": "2hEoT4kvifRMmfyRhcgNJBrC3CrGcihV7GRpw4BRZwNngQDT6GuWwxs74j2Uj45wxHwhNZDUSTnkV437JcJzvoc",
  "key13": "UQshj6dN9PwWYt6iQrbeftVrWfx4gaVJR8TcTto1cRcp6DxSqJF65dNopTcTDVcfy3Ffbr42hXeZMgaBpDFeK7D",
  "key14": "5ayWPUxXjgMq8VFccGBARzUGsAYvL2arEjqsZsz7FbCR6uiQAsbUHYczzJkSRgCeD6f2RSotPf9KnGfhcZKqP7sz",
  "key15": "rHNnU2gL1bMQyR1QnUVh5tozLCYYSmoDAfXiE3cXp4SNHc3w5V9Rvn1NDJEW73A2ZhRhiWjs7doUM7CpU7KXnj2",
  "key16": "28ZdcXDQZ98LtQPq6K2y1UnqaPkMf4MYMbZu3Ymv3XThdn5NCkzsjkEzwYR1KE7JLSiDqzCyYgs2WCHpeyeKHQ9A",
  "key17": "4qWqWu9dkfbUXpHyxVESgPCR1rSHt7m6SwpE61JwghUqne1fMh9CiCt98ZEYB2yA3oZW69FdaxWWXw6BN7rpL6GV",
  "key18": "2yWQZHFfe5xEbMvHBnU7c5fBuxHtEjX1vzd63ondXeWU1bJxnnfFy5BSkhRRK4QaWRmd6eWmDaik3e3ihcBP3fNf",
  "key19": "3ofyZciF6iCecQ4Gn114AgQwKVR7pCGuhXPrjtfkqA1PFr9RsmDnzyCzQ5gTTCmiV4MntSS8priKLTDEWVLVsmZg",
  "key20": "3T7GHyt18znouJBCJNdWXqyZMvm36o8SreEhWdaUBL1aM2kwfDpDYsMNQnzoktSnmsQDV6zSXeqdtZFzwnZxY9xe",
  "key21": "5qi4xhbR7kKXwZAtB3m9g8KLuHvPkZ1xcbUyUdrGYsPcp1tVWq2C9mqbr89qgVJ28h6JWowwmnNAKyQWo21GGLbV",
  "key22": "xYocRKqx7xS8VQeRS8LCbFa5MXjLc6Qd2uVmwECkJEG4wiy5Xy5v37DocRMqATL2zAp3aVGF1VPkbJ91uJ1kYKz",
  "key23": "4pGDSsrZqyPw3daB4243VmhPtvgR7LfacCZfffPHXRK8fJS8fJGVYps1LBxdSeZcWaFqLi8v7BWEfeFVYvXR1AqT",
  "key24": "5JHYKyQFex13tyVXJJ23RGiLmzxs3NNakhrpdnUN81Hf3xnhhAZ8bGGEY3S5FRJ9dbjfEGxbBPCTxXoXK3oMjchS",
  "key25": "3PDe2bGGzSGCEgakcUdNyti7UXzuKKvntkb69bAhiEz5ErbfszG6soBoQqys2VHuZNVSF24xR28vwcG7UKMEYbfc",
  "key26": "3oa9NDmzsWiEUxadoCk3ZJGN9z7c8eDRTCdNvaN4pJUJ2ipM8jiqKKLcpP2Fj8UTFARZU1jW4udUBNK1ZGQ9CxuU",
  "key27": "4ShZNYNpfgq9TZGqD7swE96fcvDX9fW57sRtxDe1BrCkYJdRfF8heAg2M4G2bP79G5xLSAJYbZkPVzRWg3KfGKQN",
  "key28": "2m7K1ti8WG91jypUAWPcfkmqB8GPNoYFY34KCiALnbuTimSr26MTVvhmm6XsNvpyjnrFZeuyEGq2NsRkqTe5kq8Z",
  "key29": "2QFtF4m2tAnSU7uaSayoqYZaZHv53grcZXA3hkkaB4E9GkxHBy4Cfyz7YP9nRdVcjAnQXUithm4Z4ZwdMfLCAaUS",
  "key30": "5aPieKnGntP9daaY4wX1DUtBFKqWH4fgs2bQ9e6TS4BbzdrU7iYzSptFaJFu2x371nMQmiB39iZ6YYnAV1wxpYhX",
  "key31": "2tnEtLzi6ZvbY6B5u993TKQj3HjRotdMdmsYdKEedGGZxoyryCqQ91c2GQ6ae3V3K6uVz1bj87nGXjJ59DXs4mkM",
  "key32": "A39tJR71QXxg6wmKoKxcnc8LwiLL5GbwutXYvUCoWSTF1vDsp94fAj1yyNUKUu6dEaEmoq9CDBEKpDWgePv5CHo",
  "key33": "2CfB37c3CrxbaexFP15SP3gRXZLKxmaAUaGs4aTL6LyLdM8czoTnJ38XDo6X6axNLWcEbPbTsbYZv1HXquwoXHWV",
  "key34": "3hM4AeUCPkUKwA4FJPGKzkR5RDXdbVcDoDVY77wnuZqBSTudcnWNfUVeq6W4zQAYGWcKrZa2FwbCDcJJuVqwkEij",
  "key35": "2xtZqtGWAe8Eba4tdCpdqbVKmYiBoKpFDmB6JYQrBmL3eH135r2zVHLEviaRYRLvrpJMK1iToaXCmFq1YyKPxK4X",
  "key36": "4KHsHxLefDy6aXxmsZCUfPgv8koQ9WuTJBKzvsknoH4b2advbNfVbh1wurDELZ2bgTozhxeKiaormU441LqmvXLk",
  "key37": "4BRxnZ4FKEtSf21S8Kc4NTbUhhSd1teTerbArka84HCcgZtPuaBtpcoEt29FC5bKWgrh3U24Z4eUDCUYQzeADiwF",
  "key38": "42ZTj9iSA4Nbq75HNbd82EbHr9btFPt3gePWvW6sfdz8adnaRKUy2uKaPXe6BBUE5wNJc8wafAwQnBCXabscjDSD",
  "key39": "2q7N2EPEQEwR6zfTtYRiYGFAfyX9dpAqpbkiSaPPWeV5p3NPaQ2jpAeaDBJ1E6creLG2A1i7Cez7cG7RcsS2NgHK",
  "key40": "44RJ4JuRY8v6CiaDdjxQgdbyi3rWMKcNzRBtsCgqNi9t8rAKArLwHJHs1xUtEyAaTXbp2r8swTwGzNkdiyYw7toe",
  "key41": "4MFD8PsZnpctZZHMEukrGYgL27MsFcCe3TLwrtw6QaiYT1BPddJmgwLQ21fG4NPfMXzY76M1TDK1ajGHUK4gJLKn",
  "key42": "3UZYf8vreegkyop6yFkKMRzEByhTxGtQ4wSTkwkrCNRUZWvEBpG96S2gQobLk1mbS7ZsCzmKWoMJN2XJN2zzgY9a",
  "key43": "4qut9q8CsfweTiZuhyhwzD5yVxTHvDxeYhYkeDtRkt5wokLxfEViBBsuzPVmKUmYqwxY6x3sy8VsZAVMHkKZeCNb",
  "key44": "3RJ8jxmqa2e9ighdhtrwaYgyMD3widkqVX6P5LAdkUoprpCyhpEs12qM67UL54AkYQYTc8YWUxH4pfCvS7FWAsEs",
  "key45": "2nEAJTRFwzq21BgnnxYwvNdHMtZV3mKLSznDqfZYb3CJv78D48iyDjnbwdFaXYcgDsDvMtwDgc4Yi4zjB8UqM5zJ",
  "key46": "4TBMfQzx6yBbduWwzCd2Sxu98UjFzoZj3TrBTfxk7NJcRKk3jwPmSsZfqxjASrmwjusdYDEFdHdC3VSxhnFUqXXt",
  "key47": "5bfoTajy4dg9V5unDyutedXJNtYjFbU846QPZoN62MD3SAtwp7whyojsxZoXTiT2cFkvArCBRhLUS8aYCiG8iZed",
  "key48": "39387Ve25GRDqmasrh4LBVT1PXWFQGpWWt1qAMNQRz1SppKvQCjR9z5pMWqRdcsNLTjtQQp3ptVA2AgPwihNodUw"
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
