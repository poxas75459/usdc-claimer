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
    "3qF2SCGyUNBxTBve6LtT8rGKBYeCkW8jn3XdawcH636Q4hNw7BHigiBAbfB6kfEGEH5qvutFLicjyUWBFiXB4QAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GYikVRUcgjEkaF5iSzkx8w5jJaHykskRjMfnNPrhSLwJuqAkiL92McUhKYemqVgMB2Vj3bC6ifEGhJTDHYjqu3X",
  "key1": "5Rzoogj2GNPikDfUqVgJuXxKkmGvzZQZ6QhSt38ajySFmnweU2u9DvPMNL6mznHw6V8C41KVnRVabBxk4ccaPSxM",
  "key2": "3bEjxRboRtvnGNzYx7VmR7rs6GNaZgqb845LXvvWZDz2sfBk51iWpaxw7vpWg98jXE5NjXqm9HBsz8heerGXWufW",
  "key3": "zj2PyZhQpvgfcjmhn16rADyss8TAXqxrt1JCHxXwTZ8C8fPoPWdHo7JN12zJqYuPdcTKXx4R7hL5hCpYdXEezaL",
  "key4": "5nR5tZUmvykLxNCJKPrFyAckb3KBbNsF9BHA8Ktgvs3zSwDWSRdeEsfAbitETqPZ4uYP5kCRzpU77Hqax5bjQhTr",
  "key5": "57yXKgw8aHP9XuBzBvUZ7UK71empuRcKkjaEeqWBgqqk6UyTDxuCtwnNYFRJpDCvvLHyG4Z1Jx59hsDQ7xPpra9S",
  "key6": "5KNiTQubD8GtKZCkrHGgz9K18m8GKDuLVHsZTyBuDUnDxDG5eY9PNggSiU4q3ieysr7y2g8WuwZDXNDaFJZVxaxM",
  "key7": "21MnUJDR8qKXHFpdcwMmASD8AzqK5xqJpSLuwfmGc2trDX37bxPotYggwPxNogfMJdCvpuVigcr3fKeisSVBguUW",
  "key8": "3gzp6zZNyabnzidr7RkLh9MdevbZnzGWay4ThNsBYgKhxBqXoCiWrsSLJQv9QwRRQ4Fx1BC7mZv8RrQDdU2TLxqa",
  "key9": "5KmReRxUR8gaB4NEDySqCyEPn9n7tY9P8orm8yytuExScz7fE61eBoKNoHcu1PH41899huEYTDGgFcikhgzJZSCd",
  "key10": "2mh9y7b7PfzRHQ8EE586UorPGQeSnHxuBescCBEjY2AECJ5arHeYYrjxyYLpUxtQmaJEzZDNkApnMNBDYrD4wo7y",
  "key11": "35TDHr9GpqjJinKnZxheHVq6aCucQVJLVNhKfufZ9M3f62gE5Ex8d2CAtXaekNfBt6NfuiCwRfnCdtbkusQ19rUB",
  "key12": "phbjoiHqxV5MVPVWLZeE17w8caRTSbUEhax1LoysYzBp13dwAZJcJ2YocKtk9KhiXUTEyizSoxNGkSVeCKYnFW7",
  "key13": "MtVND1ntAdEE2PfugopWYKMhuapEV6FTvvKcF8A2VkHXkNE5uPEDz2zSPrNtL3myRnYjfy9DjumdF9zZiq4xa2K",
  "key14": "4PeDepEX2wfEtLR3vKaS9y6w7Y19dxJKtfBv3D8FBJ7EiX1NbcEL1MryfHhPX4Aci3oDbXRF7p6xWBQe3EUeB8iZ",
  "key15": "4PjTkkbf4eqWyv6qMQMymwSowBAExFV6siHuniEAhmxvMuNwZt9zxanHqsYxhG3bQCk5T3e6bqDXJNQSbiXnybgX",
  "key16": "2354Vi9iEGQHFBz4e1AfkXpeGcJfEvJLjgSAQtX5HsZ2wtSGmVy1Lh3A3LDpeZqjHhDuPG1ta6tGE1S5rqC2pJMD",
  "key17": "4aJQq7s29fsWD97TzHfYJaXkATeiLV7RjNyYPHWv1VZgYoxUWsx4is4zpeWV1tEYsE32KUk4wcrcPcrjEu8ifSD3",
  "key18": "CHFJ6XCFt2AvFpKRKdHd9YQdvj51vgF3zhZQUjabpapPEkd87k2vMNgWMpgc8RzLH4J8XqU9HHoFzTFf4yrQ5yw",
  "key19": "2f8mEBVJKfpyoqKQ31Kiy7x8dZk3cSK9MigSwbQFLcExEVGuJTSSGi6sdpWqqmH8RB9AGC5nqu3JKjT2AduRQSyi",
  "key20": "qTbfdGz3a2SK83gxEZXnZF3dt58Ydo5xenofWndr6jyMsrk9z2swRagkCDT3LV4gsPvUHTvdX7DF4yVsPtKtAyb",
  "key21": "3Zi8tuXdj5cC9aS4MhjdcdHkQtHaUDtxvdF2yvpkZkmrNj3kmCB8cPzCcSwkExLJzDf4UqdMoQUtQWfLUqS3LM9r",
  "key22": "5WZoKLQv8jZFwi93PtJEuDP2htmGSoV26LwtZKNjjDz1bHEGwgCZYxtfRKwix4uboUJLYBjZvvEDomxmgSkNWTEj",
  "key23": "53bfy9YADmE4JSJSyZsGyVkSiTQeRemuCHhoDYQTCrSaVChjg62fPtRu9ZMzWyWsWMHHpTqFuefXsFcP4ENLdeja",
  "key24": "3F7xnwV8zfzReh2HNoQZLcEDtRxecS8eBwJc1y5q4114M8dye9JtrDRDqUeto1BnDDETLKCb1tjyZCorCxHKfbTX",
  "key25": "21HMXDkNTj6A4Y6aeDAWw3y4kGxKPYgbMQ4tREAieAXEHxJDQrYvqWLbEyykUs85G2weW1j3G3BVcPdUprpFcMoM",
  "key26": "2ZbMr87WkYVNjfJ2mNMA7pHJ24tyhX33KjNoVsMCPW7hcWEdNcJsnM1PYDWNUdBKZV6nVV48xfEzu7UUrzzQg7Au",
  "key27": "4aYbeTwfYyajGiopr7YUk46Gd6j7btPoAWWowQxJ866KjbRxJR1nPiBBhHS9AW2shqEyBJNSFzyaQRkdfwyEmdFT",
  "key28": "36EYYyCts9mqTp2zoRn5b5juuinSrErf7imxpYcegkWr1QYUKdvsDmzi41Rz3sZq3t1oNZMx21ELDmSxk13oS856",
  "key29": "55VXoZwtPD4ct3gpKELQBnKESNTebpWpRUeTjiwYMcfMgQDSuK6DYXA73JSbZh5CkNm5BPLGL3MzbWJg9v6hQfUB",
  "key30": "3xhgijkaYVtuocNNEQthX83BPooFCeNpSYUsxtJiS11AbWh8UEtWWBjwNujizvoReAiTnpxbXJLzVFqLCmX5gBnk",
  "key31": "2BoiogiY42ihCJsS8QuU2VQ4FRzeii5hWE8n23twFfoGZu1v86TNZKmu6mymNvJ3or1hjRJrAdNtissUfWQsUgUE",
  "key32": "2Lu1FVCpS225juaTGcTPGBmHe2tJmnMETx3C3swuFXrxembp5XDfop3a4kTB2hqNGhvVXtHpsxP67vmm7WPk6jX",
  "key33": "2mgcAafvU2GdoG51aDjJMC37rG8XHVP9Bi37zjECzVqoem6yqck8MhrD7xwqcUgToDw1GjviS5nscMHNuEJC4qt6",
  "key34": "5tyk7AaP7aMzTHXm4NNkVzFMDTXFDdehmsqRvuNPRnkJL9E4SqTNmHSK7KKMbGx81Koe53f89agtQVrNw3u4oNkr",
  "key35": "3C7Kh49jYW8aGLGschaM6JzLeoFH2s1jQyaYFb1fjQhwzWS8vETX7jdHYRnE9n1Mgxwbf1pzxDB5ubAGM1HmraW5",
  "key36": "5TQaCdwJVzr3aK7nU69x4HyJnMjGYRDbrSeyWXEW1An29nJTPhAPAYoTiscXP1VeDoDswqDwF4qeAR4YsF46wJKQ",
  "key37": "2npFMgWfPjQZcFVdEPaFjwpVw19P67ZsiKdGJDxsNJz3qrZGcqupcU9LXG8SRxwWaGEDWGgxVMPdmqTJK9sFsAzo",
  "key38": "xUdwEj4RKyNusbq3X5gTkxGsbACnF8RGSBY5HLXztgNYTDJaNVhzkFQK9xyg7HtiCeibkqM6LPtE9uQpwZzdo9M",
  "key39": "9Wr9ByYFpxqTqz3Eq7adEmL1kLxF5srZzMj9jGo6gAEhxknA5dH8CSPL9G4RJTCWhqu3ZZGTzneAyFDx74Yc1ph",
  "key40": "2LdeGnTaAdaVyMcFMhSGrhAK7SWuKMSqEwdDiC67kJkrCeAg5M46sBeB1Ap47JPGM1WzmfyKKaVL76Aa8cTGHahK",
  "key41": "3QrHX8w39pzW6MKAPjbPkDK1mP25t2JZWVNcVs1YBZ8a8jmCYxTKFM9fHfVabt5cG1gjNokL2eMDXpGP3B2RH6Hi",
  "key42": "2K7uL3Z1YTi92GeyHtYEuS27Z1UUov88Fi97LqFkLXyrzAgMSmxGWfUMMnqJymo8uQoGLEKgQjhDJZFkAcz9MBCo",
  "key43": "22sjjjWeU5gn92hRqC1qZa47wgrH29mgrocaYhbYAFU4PBGZavK64rtMHRGUw8xkaejVprq8fM2HG2r13KM3gAte"
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
