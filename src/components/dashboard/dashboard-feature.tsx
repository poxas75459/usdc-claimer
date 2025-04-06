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
    "3rjGeaFHBmf1zVz4cupm8skPFVoam2ZDcvfwUQ6AUs8ck7P7RZBN3mMCJmz7ECvdWmUiwf6xGpSu6THrx7gbz9xZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nxaNwPp3Kp3DgEr6kqUjHhGLc2x6dfnRe9MQXSu6PbvaKRNmvVW23zkUB2j2PeJsheVLp6FZeytH5PFkNzQ4vPU",
  "key1": "NuYxTjDyzGoQRDgLDrEN4FEnk76pEarUsJ8YMUdacQYBJnt6anaCCmzsWnbyPfh9dmybycgrN4FQBeJTTqjhRVi",
  "key2": "4wR1Dmcd149YPzqowJ4GirSz9sdzWjEC6C7QkgyPmbheancFMav81RBNFJuJtJbHrvALuvXH7wCnZpGoR7jPASjj",
  "key3": "4zWPg9K1eD3vwtGoLsHUvKSYjnXsBhZwCwRY5APpkk3wtWV6zyBtvjmNLb1bjejau7wotWaeKBiouKcHuvqL7AWB",
  "key4": "3pWkUJUoGTM9GpkvQdDnnx4n7PXpz3PWjPcp2hGpEy27C84r5Mx2jHH4CiDiZvzAR67qrDtaoAZoR8UcoYRUFH8d",
  "key5": "4ftgbqpUzyrpHU4EpN9xaYku8Sqj5u3iJ6WZjdNntaY6Agp4kPt2LAMoBsidbGeQ9AtUQiiKKyXr9FNVkuwqmS1w",
  "key6": "3BktwM7YTHqhyhDN7CGa3gYYGQLfiZDFJobSMqNJwZmn47MsQyZn4vyvYYuFB2XGR7kKqAkYAu5Ry91GGLzS4HXH",
  "key7": "5DYNaycJhYbTorDNWsRHKeAVE9Sc2Ki9v1DHVjSFrdcHeaqXYDdkwF8fePmtgYoL6dnSC5LMWKbVAyGG9ijqRvEj",
  "key8": "5GUzahnRwqqh4BWNgyUdWsAVFhMtxRoFFNdAU8rL3zHDax3qr2wis94fjvfq9LsMrtmDeE9UdWXvAajvRCXes8Hu",
  "key9": "2oW6x8cReUZnf1okJSsDbZZafRJ11Y9qPwuw1zHwF8P3dA88zLE752iA7ekk5hvne4Kq9PBWwbkhrTATanSr14yD",
  "key10": "CVSaNJ3FZQ3CvZwGaBnhk4zJKdfk9GUEE8XJZvB7YiDidGer4UNkpt98rFUDpezZik83c7XKA9Ntwx518cEn1PU",
  "key11": "5ffNeZKmm4HvTYwknUVcyjKgzzDpQHf62aYudoERjAGt1fuvQmsR4CNNjmtDFsdWN2kjrF7ns2V1xn3vQGDnp3AU",
  "key12": "sebBxzBAGzbBAVBd7HNtv9NESMfJibmG1zuBFc5sCtX6vnzJq57vs1Yw67pJNk4JnAgM8EKUQ8AcYpYzCfvV1Up",
  "key13": "5TM7ceunhRxYewaSS3xkHSDQuaHz9we7HWLwUzBeXicZYfKj3vo72PkETHSBfz9qxBF3YQNPw6NKDrbb26zGkLkv",
  "key14": "2vd2npeuteFNfh2hqDJzoBjBTioEVmAfXeENF6bYRJLFBfsQMqGfAVu3HQvFeeghM87JxuKtdhpPvZAGUzRd25i4",
  "key15": "2RcmqxhtH45M8R3opRbWdrn4q2zeH6R8HdbW18tpDPYrmKX93GumyW8nWmrJzqrqvrURTbm6kjBYAxY6TPbfKqGK",
  "key16": "465v2KrzmZK4PG2eaD5w9EjG8yiZXgH7HozvcYdFBx2tYLmdNW5JBAcs8cwpX6NQVKumTN83GcD7MUNYLidUg7ms",
  "key17": "4QWVKrf4hGmetsgNjdoay5Ehqvpwx3XaFWQT3LCfZKC4jw6nXYi4zNnZxLyFacDkJjrgHJm5QwaU42pYG9E97NqG",
  "key18": "2gtuYd7qRNsUzhE4vGN27az81hWPpBGTehtUHRwJXSjbjBKZ32k6Y3wcT2exMcPMcE8tvFHMKYhMXbqs7rwVj8kp",
  "key19": "5S9EN9xR1QfCaph2GCPi1KYyEroJgrcqX1BiAZ3X6h93rRkpdrDGdRhjm7sh88ppX7TSmUV2tvGcvDXud68eeew3",
  "key20": "3n1Y4wga7WboAwJpLUMemLPwrEw2zxQ7AYbiJ96aZaPK7fpLnkTcSnEScyLK755vo9Vv7Sskd2hW17AYF3WwjyB9",
  "key21": "29wvFwstTjMBpNV3TWEDxsxyhSiWHdPRxYmYwnumVG6JQCUMwCB4ZjoAMns6hdxZsYkX4ZSgjFzVUKGCDzDwTtbq",
  "key22": "4Rh2VrceFba7ndmp4hGDu1dLaXHoFtsb6vdWQaN5UPVtgNjbz7jv2FxUwr6GypX1MHF7HT58kcoBPqFH9TmNoiu1",
  "key23": "45fjgWAEmGx82QRMegAA8JfXut3qLpx7HYmf5DXTriNZd149hQCkYWaXuvFo1ngtHZ3uCuVZV2x1aNTyG3UC27zs",
  "key24": "3fpWtmNPbRHuCx8ufouYp99te7NTjS4MM6mpwzJgDwCrHt6RCu1B7Tasb72S8W6UTphnGd858jhgbvq7h5SsjYD8",
  "key25": "29MPCGje9wTwNXsPZp9jPQiJ7Kk1FCDo7eg8G2DoZh6kPFk87oYnVKhNwwdiT2SxjWxRNRe7w66itBbyvzN2FYBh",
  "key26": "5f7shTeWCjTJESV9iaLtJ3AM17jaoMTi3X8DNg9ANvJ8TUeCGgDPh8JGcRbMR2ao1eUG8uEM64qV9JupY8beYRhp",
  "key27": "4bg82jbPHDvSHoTgwx4XjedmVBmCeH6yBDXo12fNCr1McmJRuuUVk3qG3QCVVbPXyoq1MnJVgXUjAKP1cSzdKf3Q",
  "key28": "fcNYWmGfAnArftKpbjsg8XyLsu7UmELGNnbUq7uswDrEuakAZ2k6Vm3Pg3VTkeGs7TisLD1B9hHjYQv8XbfvMVV",
  "key29": "2koUB4fwKnfbEQ5QnyCaQnPQggjvfWZhWdk5bNzjsqf7CjJ2BZZtxqK8BxcQJeXLdG8smypVH1GMffMLx3LxCaUf",
  "key30": "4rFx7WMYVb37vQ6pR5kDf5Rtve1qFBjPtToheaFBjBo9U8qyjvy3gZHbBcZYvR6VnhyhRcN4fSUmW2KLey79GHLk",
  "key31": "2oS319dhRDmbCigDGKe9ERXFPUWTMaPUAkvVRZ8SqouucAjPdNBtvMTfxVMHNfws45AvyppXDjXQwWTtiP5Bg8gP",
  "key32": "EEgakXcNLeSoVUwz8Hfv1k15er8UzGe3d5gkp1viifko8Enjde5WfqpScTZtTPgFo6DQem8UubXUB9wXqKvm1WF",
  "key33": "iaHrpeoDwmqqfAzSJhdjrJhV4t2Tewex9tkVbE7ofWf1qt6dQ5KJrAF6c7jjPpmPj9Zm4S3fX3aMj9RWtQH3a57",
  "key34": "Z6uHCZnQkF6xqbXCERAT1uPkr48YaSv7gLLbMHgyCHQFjoYvRRJ69yDNoy9Qq3qiLg14YCUmAscKVaRHSm2T433",
  "key35": "59t1dihLiWDDNbYALv314y6xN3DyRFgu5dQh2dkiuKK9PMWvCMme2SgGHevnWhTk859FQeibYzwVEY9Lj4NiRWe4",
  "key36": "5jVTyKCshNsSJ6WnyjpQFoa8DXXgLVUtw7CehjYuBdcXR4neJt9qMKcfzPKFcaiHVHV2bXgEq6v4KGTfUADfJEFg",
  "key37": "28abxhgx5PExwjCTq1rueBiSvHkCNsprGGWCDnDzeF9x8oxVSLSU2MSw9TmqkYwWz9c5a81wyZRTFfTwBUbHoKwC",
  "key38": "38c45trfsWif39XEHxgpXnM2DzEmvRnVD3aAu34pXU5ejppYfrWySDrjKxgyaD1tBPBeJnwdm15tDQwXpurXUr7g",
  "key39": "4Lkhw1GDv6jMU3NnQS4fa9JiBYzHAXEe66cpgoD55tLogS2XG9af2kwJrQWmEC1BxTyUzutHcY6mYU5t6RsHNyxV",
  "key40": "NSk47DjAsfovBfJ2unTrBsVwMQQZURnkAo2NhhHvtQtLn1szArZdaohMPmAK9AiWrYMuiJjCL6spM1zZciNbr9q",
  "key41": "2YgHPCmZZRYpUXBhLgSF9qRwRBcVbobMjf7mAB8RLFV4ZXJRWp2HkZmY61AtTnvdECKntEgKFJxw2V37bvyaK2Eo",
  "key42": "s7sTNPpGMfjv2uTGp136nQ5uGCCpq7wwjEzUcDKCdtNhG2sqi7A91sqxK7qzcF96eHMFjzUxAWmwL4wo4Ywj7ZG",
  "key43": "2C7WFx3vxaYBuH2a9Qr3CMUP3RrwCVLyXMMMmb7jvECuzkDSrZsByfBvk1h8XYZcR68jHNDyFa11DukYRFMdybH6",
  "key44": "2vKzmNYz2u7QFidAuQhjv8fXxNDcHdpfq51LozESqgM4P5TM3gXkFAQTk7Jisg6YjWGaR66fqbRuCnZJJ43oV3Hm",
  "key45": "ENi6jYhKDEvhRUWh1ZpSafPebjgLTi6Nb4ikusAfpmeixgFQZ2rshG9v1su1naNS2pxQDt3wCKzXxg2NCMjtGZB"
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
