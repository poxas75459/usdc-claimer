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
    "DRKefHC9d7fVNKTKPSgNSVn2AqAhxTQUm3jmGqSBa9D9V9nJCbiqBQCuJtrC4Uf8XzRzKWnsEdVo7cQ3MjNTSpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aQHvsAUzjh1HRD3Wz3brbxAkEJbhALZhqfCxeDEZ8J9VnAHUE8sV2q6Y5XccYGhJtXPmbUF2AtthcsDn2oHjUt4",
  "key1": "47GqTXQg8qmWkCyMKCYB6CmjwKeKtgdWgjJwWj5Tx2H3S2DwxqsJeRW5FCJFGuTnjjr4bYoKM5tgbgrP3UMRC63E",
  "key2": "G1Ym8Q3kg6cto5pTMXiN3hPNGuFocE3W9WsNT87mWiyRNdNbyqJTiEfxxxudCNgsbXvuMPopg8z6eFudqkfEkDJ",
  "key3": "4spJwEqQVLFzv3ssYjMAMA1KHswAYdgcDiaySxxPDKc2MNfvLGHsyke7NQyAhQUSw2ekpuNVSGfxB2Mspd1vKtZ8",
  "key4": "5kPuntejoXK82NWtBy2DDVmqosyB44QdA8AP4e1tf8DeYe1UM37xM8wYq95ALPq7KMNZq4H3n79peayKJ9nDFGzs",
  "key5": "AxF8hPGJCrvTkPcZEMJhSEac6n3M3RcPU1tuoCt796j8jfxXdvhhYSbcegp7un9a11nnYtTUbxn6ozQR3yDHisd",
  "key6": "4Fm2Atoi9AB4TNgLj3pVGeVXeULJgyW6pRdeka9QyZ3S2AYQCw361C61KqPzKmRNTC36UFvSud895NZEs6t4U8cw",
  "key7": "5fGaTicnn2zrGYK5jb98yxyQQhzEK8c4CQY3ohoTKsznwo6amsvgeYPAqQWTU8pwMzRx6SNmP5EjPS23itPf3xpD",
  "key8": "XFRUCS5qQ6oAF21t1yXYX4FJ3DTsaj81HzkMWDvxXuJcwYGpEfj9GBer7YsyXKzb2Rdiw68NNnU2QUG95Cuehqv",
  "key9": "23qa7fohxaBMyCHCsnuxL7Kxukp92LHjgU8BLDRM2WxsN9cSgdcEeb2LoXNMUbhd23SkBB7QhAUmf4RR971Y1UnH",
  "key10": "5q63QzqdQN4UBv649KCKmywPfxtFwaJoGkkfuRn9soFLDPf3vBLe5YiqY7GxaLF167nWPKX2PJxJ5zNZPEuqfRMT",
  "key11": "5Np63DfQH6MWC9roatyMer5QfcmiLEYCjqQ2uWzGPpEbXzi7TJvjVYtU33Tc2CzdZTDi2s1xAckHc63fU9JzXofj",
  "key12": "Yc3s9cTnkJELkR2n5tM4ha1ns61RGZTePpW6yttrMooy4gWqi8Azfq8JsqQtsTP2KCAcMPXWPpvfj4VYmhWVX4p",
  "key13": "3YWEkT86GJX8ZG47NMNUpFryiJHgnRDEgXBD6nyhcvDhuiwYkvgeQAX3N3ucAAVC2Tpx2xQYvrvKe4TgyTYiZ1hc",
  "key14": "4DmW9TSoVaP9qr6yYgvvxeMfVy5ZBECU44dsQwPFDww7ABE5H4SjW2PM1qELp7ppT44dbqnDLzThMHQ9qfTv2K8Y",
  "key15": "3f34sjUqLs5haq69qh52uBLC35jC26epcebwWzti6nfP2SzUbSzLb21zhFVv2MggknCyuRXeoDA4thLhMvUYiRLW",
  "key16": "5WVdVSDk3uTTqdkNwFwbVQUqQbtQq9KpP4nAc1h9VXgAdrfMDM9VA7rwAkD5zyu2Gt86vgSuQjf5uCPFQFMYbVU5",
  "key17": "5588B9XCbSXhRavhG6suS8B8EKWGnyd4LcpxTVFpTiW1B5QKJWsiU2Htk56jaWajXPpLYEc9devqhqE5imYJsxVz",
  "key18": "2MXgppMd9RM9owLTjVF7LCGrrDNLqGkhWvQ14tPZpoXstgRGodGKgfCcRizdXmN3tmGNHUsBLZdfeHe939qTd5Xx",
  "key19": "V1v5h6PPN8CcLx4kTV4iM6xUVaj6j62yb5GyZdzmmPKQhCjyFW43D7dKAsWSJtxMCiurvexwiCe4X4KY3zCz6RR",
  "key20": "2MtkkjjAMcEwcRNmkm7JmbXqpvsqdES5CeNbHfp7dhBGpmbSyfPQzeJ98KRMArpEhmV3du4Vr358z5i3kQXgUJMu",
  "key21": "5jDdkTBVd5ockMBJwFDy928E2Nhtndf1Z3kkcmnpBfqUP4uhKNRmttaspxvKAtTxmTUaLvZgq3JZUXKjJzfYHGh3",
  "key22": "3LkYhMFy9rjxcTsuEfhws4XH3qrvWKEmAgByeToAg2zxyq8tyhvxNUoLjiCeipBpZgqdJDQDkaSv8udfcF9RPMbJ",
  "key23": "5dbTsFgiNjoHpcwW4twugVn3dRdfh1Sw65GZUHXLfaa5zz3TU223NzvLrGbLLzf7m8QLv3kZ81e5LqLhZgomZEFR",
  "key24": "4YR3wii2MgMrUk8DhZGFc4orbA2s68LfA5V8Xztx2jv5yNqqx3DojQL4EYwrWNZJNuMWXZndurX4JrrQnYPeXExt",
  "key25": "5XjgcuYNk69oPqwVezKjvnjLGWW2bWkmiXQWCdLvT9FcsEjkReX9DcaBTCTUsqxvNcvqfiGhAntK8uA19jbiLAkE",
  "key26": "4agq3XjDiWUDvHApxoftUzBjjys6GkYLPrMiS33ifyNqqABJkWf4b8tGbDfLfDxLqpLpdKieRn8VXBv5gwFPTkj7",
  "key27": "fkScrMnsoBrvbCDgk9kCab9HBCLxQNakfSZixc1RdSqt7rAWW2syegyoyKgBtaw4GBa2sTewxjwpdDrXuuAS6F6",
  "key28": "4Bh663zzEQvkpaKAKry7kps6Nmreq7YuzRX9KerEpNT8zSihZBa5S2ucrSEigZLswtTnC8CPPbAkVvqVDka5cPWN",
  "key29": "QMhDi8LebwJcEJch7V7uw6t95peKxybkEiy66Cxbrx9dmYzX71TMT61zP4VtXtKcXtMuPsq3452XPWcyuLTDuim",
  "key30": "5WPR1yJ1ryrvFufKuS7PLAoDXdM6gUwHB6uHJE8yx5sCYLAR67tMCgpApsQh2Zo6q8xVnD1GDwCGoMV1ejgWvABg",
  "key31": "2QjFT55UiqqLhsxUK6dmWUgbSLxrWSKVuE22Dw8NRWqjT7QBriLsfBghZ9S6CB24gWFRRrCCekzmSKed6mKXXuT6",
  "key32": "3UuSV1eHTMU23TQpNuWUKJsJ8gSxL6Nn1ad7eJscQyaTdSPwt6pYx6eBCzmnCLYvAva5JY2RKahg8ibQdexozbpi",
  "key33": "2xF4Z8sAJ8gtXS6XC4mEAV878BcRARKGfgc31Q7Yb5xM9LNaNtgBEbkvg1YMqDApPmrVWRZdJau593qJSHjoU7oC",
  "key34": "4nDwrvMUwcGFJwgWy7gcw4QEPoBKvx2opUKsq7qMBZaLj57jxZVu6ScAXnypioahK1CYmGGmcVk3z99VLwigo2k7",
  "key35": "4ZzFwoDsZxAvV789dMKcL1YLBNZNXnF8RxhLECbFT5BvmCLuqxykFMpKAUGVFYESVvBr57hBZK7cHmS3yE3EfKYm",
  "key36": "wf1vvJnU5tanXrv3AJf5b2jKPStjBZPMxEhXhSrFjpcSdProLAu4MyKXWb1uHkun37gKkqxFmNZdt4PnfJ9Yqj1",
  "key37": "59tuNqFSDVrmMT2ax7AESdoC5dmrxj424hX14q5ChXJeviuJTw8CjGgWvpCrhoKf2CqMJ3z12jGMm7Wmxxwv7wJw",
  "key38": "5usYQhJ6KxFKU5NLdrJan9yMzfA8BdJYo4JandBd75mAGQF75JCnX41jbzpibMSET3HaeWoVKGAKmQLgQh9sCYaj",
  "key39": "bYRNj3qwok9jNPKQ9oWjBF9cVc6L4XDnc6uqZa7UGqcVFXLaJRG9LvUQTkfiUxQ92csjVw7tVxCSfhPHEKquSGd",
  "key40": "28YvaoQcpR8Uhoq62sU11dpQJGPmdzwNnWa5xFSQ4CNFtQnBHeeyyusfUyfvHtZ6HeMGfu4oAHKEVAHWPFL7ZyR3"
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
