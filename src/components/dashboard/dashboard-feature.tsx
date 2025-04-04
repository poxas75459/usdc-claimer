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
    "2VpAmcSojSjXU3xVdYtnGyRKMXLFXm4KGZvBfsT8PJPUyfbEkWzuQnVuSZm7hGRDnQeXZayq3gfYm8pp5GLSSBQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dGn25EsULegEf1KPGeA7LXapfk6K2xyQjm1svFMCaA6VNyQussHsTsBUSAs3RQHQ2ZGjD1ciLM6ume9iGgoePiD",
  "key1": "3eH7i1SCqBCmX7XEcwBQ3BRXy1bU3wRpwM5UPZ5KXm1Wcxvy9hvicbkAUqWGFNvWVH7ZWFzU1TkNmHoofnMYsdRv",
  "key2": "52BWPghiq9JkusdqRBM8FbmsNiB7gfg4YsKASKi5psXU66G9nunNrQHSQkYavmkM4YtCFFvRbG2xoGgjbdXWtbyq",
  "key3": "4L1PnBq16pcthCWsSjRDryuqBQ2Y6X4cZLVAdaz1qhbuciqaZ1iWX511dnuiqSeU58vUp1uUufMZdQ8PAydWMUQg",
  "key4": "5ZVNx1udvK1JsQo1Q8DtEbSAr8eNJhvSoJJUAYqgg8zDbRQgedqhSdhfoAGGkxM4VJp6BwCksDTNndz9nzJTCsM3",
  "key5": "4D89ffCcvb7X2QboahT9h7xuzKGiruWLfoncVWwWEjq6ZUeXx8Dk3FwQoVZbfAci1SRtvFSgTtHQdHdZA14WnXMm",
  "key6": "2avSLXZmL5roFZceSVyNajG6JZ7QoRBpVEjx8nXLWHKfFs3o9sieNkCsLWNRWowDr7JUwTknkypqyefv4dJTvEwe",
  "key7": "57hzZgNAKReZuKRX9S2NYGLU54EaGb8pjRpUCSPUyvAHKaq7s4AKM1SuhGLWhV15jsXtba7UGBnUrqhfoYNfT8xY",
  "key8": "9kRK98sbZYrWPfhMHgDMMDaeJdW4aHuExCPVEEBiTKs9VJq7HmXJvLGgAxKKUFJQgsGE1JWViyvPsiSCZzXz4Jz",
  "key9": "3qNrdY5khbTcWZBuDi94SgSoch2JvkGhNhVmvxRLp6JhMgUHr5uS6pgxfi4AocpUPGCz1bNaN2wTj8UM8PApm4z9",
  "key10": "665mbkkMqyvo7TdA4mWphM23yGzr333VwrFp7ZsBdCHqWsjiHg4kyX4zHUuFariSntDwNdJESGJ35xSkxxPhge53",
  "key11": "5MevGPCLvL93eMXJjBT6mQYaZHhQBVXUJiequPhho3wM1Lp3o1yvRdzVnd4SsTPLVfxjJXGVancLN48jMo8CNGgp",
  "key12": "GwqTRCDKN6i1gH3jxfxiTCYpchbEB3Vwhfq3wWt1t5pMHvFbHWsZ18w4QSKLhvsUY52F5YA7u47HqRqFe4ssmmD",
  "key13": "nkNXHqhfGEBMwBXCQkN3EPskGtfCVo8wKAke8T8D7c7KEuzuLVumitLjUrS6mBQ4P2DnD1ZdufNHCr2bwKGUseE",
  "key14": "5xdei9Vc3f2rTv6hPbj48WLVX8HHnNkyjCpGLyuLXcDFu2aPVsdtLWdtHANAf8a6XywZ1tUhh7hzDGL3aXMm6wC4",
  "key15": "3Sw4WCQrNBCrjkwr9yKzR3ntvKMNNhJtp896GoqSVDTvCE63TrVTnHMwCWAamLGEFuh62WgJJeoazdRepi6RYi1A",
  "key16": "Zh8PA9MSeGZ8gBuiDMzcsGaCcthLYKMrJN2xG95ZG6zgx2wWDxVVHbRfyywE13NoReLveHUpZtYnUbanZd9QNGC",
  "key17": "2rWPFeH7HxyHxV4ph9JzqiD6wSUVtUqL21WBnQQmu48R4Rwe8mVc8qMEHYYMsybNT2ohgAF7Uf8EXSBbFa8EZcHg",
  "key18": "JwLWm5mbpWWggYzQC4ViD1TkWEvcqteAAcE62kUMYULBhcWa6NixkqMho6KKFa9RsswNZ4QUjQJ3hP5DeWTKgAM",
  "key19": "2nhuR8ZzHcaFJCxYXbqqRnHrnnTNwLX2H3SJhq84LxW33bsTbyTruNNY5yMWcNhpJGCULC87gjqhS2Vx2Cxb11Qk",
  "key20": "MQjCvVcbZJWMtU5fuuyzvacYLcvakbSVGgpPwcFY5n94z7MLnTbN34puAA23WKejEmu4XbgJbVqJ88jcYbYGg6g",
  "key21": "44FN7iVqcsbMxFMZ83CYYGfbKwXW3txkr2T1ouKgVun86fiX3GTgUdHeP1PM6R3zf25vT3s2gbyQ2Sx5hDP6iKN4",
  "key22": "21uQDwJUbQTVcwwcaKHszHRK9ob5bicW8SqhCrnWhTYzuidL7F3fP3tXnpTw9Gyqk5HD3QbYgyHayBrw8kxmmKxX",
  "key23": "4VPR9XH1EXg7CPBAcFA3y9zwXu9KthYnXsnqp7KacM7qk19F9un32TzmkA9fVxybBNrxGcPhkqJRKUig84B3fmyN",
  "key24": "GWWhFX5xorBr6Gh3vAV3rUNMiSLtu1f2LiyVhLisc7ABVATTBEaNaK6RhRfTGkJwUBJh9NDLxwUTAi6KqX3bJyr",
  "key25": "TtpVLUPhERCj4Dhc7ouk91Fs92U9w9wW2mJrhfEXdUvvom94ieXCW7MzTjYknqinjP7Z88h7oaTutrHjEsPdtMv",
  "key26": "28eXowEfnaQNbfZ54kn7chGNtgVAWwL9P69SooCc3C3vNpVQVx9SQiJjpC1JSYmP422rcb2gQTLcYjSELCUZmXn5",
  "key27": "56gdcJrctjWRcdZEL4Uhwtdpc6fEnjw7TJgXKk41A1CBUzAxzQd9oaGjioUNrYiCKWfyyYhroubbH5fXU37BcmJK",
  "key28": "5QfSDUu1Yo9xi5rp3DVLQHuDinEzxR7EXpAFcFTquhSbeqMsSkaGPoAVfurp753eucK8AZu5NBF3MjNwoVFKdxia",
  "key29": "5LwXqKpxRP6VKJjorGgJLgYqTNzUuwNE9gdpHEwD2AspoEfoaoFFRSvCp7JcScMiiqupM2Ma6wQ1KbDN94tp1yqA",
  "key30": "4EpVfEPcsSwAkqajnQh4Nk5hiWsByD3orvbn9chhreQXETYHJKiSbe5yz4GNxB78HkfhcvZBxF2NxFjeH5T2BHLb",
  "key31": "4MjhfZeXaR1mpEUuFmLBywEqVKZRYVyH1s6LnQVSQpM8yJRXkFgDnhwnCPH3iH15Fw4NvmpWfuediHdq4FdN6Noh",
  "key32": "59tgv7czCkbA9TA5N6oh28TrR6pn9D63XgEBgFNaEmJ3pdm6kxNSo2uHmbDqX2x7Gm7LAXd9azpfTFKwLdf3Dcd9",
  "key33": "5zvmjHJFbKLMnh3iERCNyvq9yNGcpVAsWLLawu9VHgSkwMdfFxoRotC5EGakM3Jt14RLHZUWjdS7XhDGAacUywfz",
  "key34": "5S14UoFEpTaDBb6EunSCZyVRDovZZCxu6YTv9zF7MsYkoMtNPnjDH3dneC1yprGDETWrfhkvXKdMZYM1MzeLe7AU",
  "key35": "3L9fXjVvvxKKe4Ykq75QUxy8Q2JMvTTjZc5VzpFt297A9B1Ddw758zCCd2GQv1XmLMWdjwyhaFYMSZ7Cms2DVses",
  "key36": "2ypmytEGSTw27pPtVdLVbnb4SdZsf9FHm3dJXgrQmowhvP9jRvVMvitkai6umcpAX4ZWVmpZ8kBn8cyU7z654Tco",
  "key37": "2sqJfWnfaTXvMeGrHKzaodCMC8vgRfAMraceyjyqWNJzXqAaHWZ1c3YfJZVYYXhCzeBPUks2kxdJiMe7h1y6Jes3",
  "key38": "5u6Re5J29FVT4NhsAjpnACwKLg6cTC5TLVSqksyY62SWMATzctnEgmYDhXstm2bdqasMq9dfBTp9CQLWLFzBnCfv",
  "key39": "5KmcLVsdMpeTgUNjFZj14kND43pwDUmvtPNtpuRynykBJ7Rka2w7MtRYf7rqigDYgyBzC6aN9Z8YBTK3X1qDGCmq",
  "key40": "2HP1KyYyqFh5AM1vDESRW3mu2eKWq96Gc8fyEr8kB6VWWVroapfdfA6x4kq3kc3FrfUg2t4xW3jBo2N6bwKcE9de",
  "key41": "ny7CsycbpLDbWSDUqRA8pMqfp7kbiW83HJkj6HR1hLNACUGn6uvEmYw9ingxRzhSW4uMN5bGMhkEjgAuFHCHN2Q",
  "key42": "3pP5gjSVR2HDCwHt2aVBkRcjqzu3kFDmeyDQmVDNNi6W9Z6GgxNou8epL5T1kSTkzdtr1mkZtQkTSmrkYcgv4KPA",
  "key43": "wRCKBqK5H4wHkmbSmBtZg6qRWDw7Gbo8JWbCVAtw8HJQdCu7rM37ycFFNQFRpUyKrGoDfUNjAAZLCXUCEEvFHTK",
  "key44": "51rYWA3afUzz9dYALvzsnYYt8rHXiq5wQPXACY4dsWw5J2dnySo9iLCgPXTRtK16YjDRiVbSqYG526jmBggppFba",
  "key45": "3GuAsJqThBbbje8o2ASdLxsfggJfHQAaxzZAjLB8cqYC7aPuk3UwJVzsYJFCoQVMivb1fRtLMYy9DSyUfiVix8z1",
  "key46": "21kewHdvmBcKWAEzFKSxet8dC1E1oKkEYFeED86m8GwrwGqNTEscCHnH1nsTbbFy3X8d3c2HSiaqhvx7cV6YSnx3",
  "key47": "JrocE1L9jUZ8rmcyoEWefEyNvyzdDM4xwJAHkfuhiNdPaaQjZJwdb2FLsLNS28GBsNjn4119RDZnJD6dvcEDBdV"
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
