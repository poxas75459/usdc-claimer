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
    "3Acc4AP7XDWWM1WQiRdifi5rS7ja35G12yVcmdqiCb9vZgiXuYJMMAjpfstgZgemnSA6FDRa7H6H8kFj8r4VctrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JkXSzta5xFbwAyxzKUGc6jLpAxkzELk1AzqkUMkRSouY7Vy7BTBTTii4mtnZwSoqXYXfXg4u5EGMabgewkCc7Pj",
  "key1": "UUjBYgVfJdg7S6Jp7WJr3pPJLbSdq7BWLQG72upkvsNcfpadHj6bat4WpchhmBgwdkopxrazxpB873NKiMvTnvy",
  "key2": "5Dygm63cpBV4qNB7Ymh2MYEpSvzutEM422NTbaJe2gUJXNsv2YuG9Vurk8Wh6htTXtyM2ut8Qarnx5UDhYjUhYND",
  "key3": "mYJ7aT3u1vp1LbduGmjrrwGBGYFLvqkktrkSvsZarB8AqzzrAi9rk1EpRQ9fcZzAjQPaXoiKYSzS2YS1zt8Sery",
  "key4": "2GRU5HUnrBj11brUSShSnd1zYwccPEqDLGDnvqNSZj3eJnoLZGD78oyLs1i94ebnjbfUBkQimcwJcopatzrM5Wgk",
  "key5": "29fhJcM9aXZ6uautGqTUJQNNgSeSUc7z4ThaHHEK3MwYkMxoLResw32zowiMqnMrx1Yr5eTxYaYQettwW944cH7Q",
  "key6": "5NFBeLDWVcg22RezzywoKQtKN7z6xpNAjJNhPJXWiJvy4ShMvTadCm1HpS7qL9ejLV8xzAs8dd8bQRGXioF8UFrR",
  "key7": "68N8JP5j1c52iqdhyFkbrSGZgcwhNFqGqPPUpVdfqqXEUNZM3UUoEAh3ej6qXRSs1Jk7aq2KgDmqcByabmEcJDB",
  "key8": "2RnahJrZM2A4LTGcPe7JdTxCMWagXRwLSVSFjjt3tggkEcLQ1WJ4xAAVwezP5o1PQGr1nj3K63oAPHGkRioUmz47",
  "key9": "4PVYpA6ECVGg6cz5fr7NXJhLMawLdebvLrRB2nyL4khuU7UL5m9T8ULAjZpAxktDPENkPhtUJJN6g1XbHdk3ZYNf",
  "key10": "5FNctBTeZpuMLfswzZs2h7ZmpRU9kfUGRNNv3Zj8qgYCAWTDB4YJe2hf3GF7BxBWx8FckR9Wb3oPnna61SaEzNGN",
  "key11": "4qBLHWLar4TW79WsDgiSiEaVxQW5qrV7a9bgjobLZdKT4XR622vkLK6yZfB9MMxav7hD7YpyU8QvScrquBnkQSvU",
  "key12": "Ai8U1JZwTuwzup4fApnyDJTMipBbGZLRQokoLvxp7doRTG6CJmki3o8FWNVFfz92MPgESmdNXEoPRHsq2Etin2T",
  "key13": "54szfZy321dFgJhDP56Jfk3HVP3pS3b9ndifjcNYX3usZZXsJ5CGokhGP4sgVH5neC8YQpKZdcASaHWmYivy53Da",
  "key14": "2wUXDh1NTjdSz3n2fwMaaQaRrKFWD4KnN7uBJ4VhErF6A96xHcYqssmgnRToEj4SFohtqpdfLp24hDsDfRhQNcuB",
  "key15": "4BZ6My49pQ3Ggy4eXxF2A73QxuxfdDNcnRH65dKs593rddh9xXJ9geQE1cGTdMPE2R3Zrv2XVyf6vn1oUT35xuiu",
  "key16": "3c9JAsmsXeY8aV9Zf1s85fPYfWkwwBhKWaRNEoeruDGUSS1bHm6HHprYbhwit3kXc2ZtpN8bHkY3wAD7JBgnPPpo",
  "key17": "4dk2USs5WXdj6Tir7ZR36kFxcs8smKCipSHzS7y1jg9GVcxE39jyyWF8FQhqXF7m15P4ySd2nV4nCQ6bb9LHnkf1",
  "key18": "LA2GA9hZz8gc6i63twLVkR9erjUub85MFvv3VkWRhB8GjpA3WhN2boeMgA1NTBV26yQtm1rowKDT2svEfccgaYK",
  "key19": "2H8iigKu89gVUQrPpPkMQ9jqLjvJo4rfoihZ8MSmYzEP9xkgU32oZyPoVFoN9Wkuf7UuEwrcinprQgrS2VUUAE2B",
  "key20": "5G9hjTVvZBeyKZZk9bUVgy4qfPyV8mfGtQJD3bst7sfwvtmWcuK3eEng1yabk9VDNdXWJToG1gsCzBsLJkVvVp5k",
  "key21": "2ASQ7cFrSqaJpNJMWSeGAyW6gtj4aKXAdpMMPz8sm4VKqwwdFTZSPyHpNSPNM4NYpZG3op1PydvuX7pfmv5FFA33",
  "key22": "4VU77DNzEDSqfAb5RHBPTRL5ChN2sr2o2f6CsCe63S9ykYtZvgdbQoLpS9vKnFkQC1oDZvj6sPDwpPAujmeBXwjN",
  "key23": "5YLDTpm734662PuUMiJMD1QNmyodTdE7TjKFzR75EPCRwxra3pET2jmQMXG2Su1emnL9iaLu2GnNb9u8Cj5YwMk6",
  "key24": "5xS5Fpra7PRBufQbntqTtNfV41R6MRsWw1bsW8YeYJrtNnsUfeDJHv8jmEsXjnK7qvYHzgc6yfp5zfNFfSXiW1As",
  "key25": "fkXTyiUanpwQnjb52j14w1WR4Tx75LQu9EN3C4mD49ASwRWgnjJuZaeJVnSj6ZTn5ECR4HH7xEMYEr5waQRJoS8",
  "key26": "3irQRQvoYDMytFTondtBmx75SAaMKKrth2DgfsaopWS7LnBsxnYoyJFjpKvyp2Wge53ZCJnW4XDG32RC45jcifmd",
  "key27": "4gbpuy22fxzC5qPeRzDST9eeMhVEieJFSahqybVtysr6yd5oibQxTxdSPDA7Pj5wxYwTR9eREkBqcNBx6TihPW4b",
  "key28": "3WE6HoN62tGfaJCbv26ToGTcjvsfayDHoPMqLwg9FzMCdLiKrzATr3sSAq7kNWhkzj7xLpHwBrr3VsakHp4H3pZb",
  "key29": "3wE8BQyFCSARu4HaptosTegmQvJMsDb7Ah5vtuj86okRTGA9VKUD5YnPXEtuwk2eWDR9Eiovcv8xGgLa9oNqupL4",
  "key30": "4QzssFMak9v53PA9Z2xLJUj9x7dTePNA1TzYQ6hsywQzYkpH1nD1uSh7ZBhekQGekiS34GbLuqbKqDs6zndTiUY7",
  "key31": "y7nnh4EqzHytmkeo46yd8u3usFHb61c6cGCSfKTU1Kz4JToiueEDm6G1bKD5LSL4stDsJCgRJbYhN7MWFa8cLfk",
  "key32": "5Po37e9tjQm4L8hPwMFxodUNjsSngQ995BKxSCqWeHZbxSNGjkf9wJMyBaD1eVuvzcSt2jtUszqf9ND7Hcthj29a",
  "key33": "44kzBuxP4DFtMPaAd13nSwCEvC3sU48jyjrs7sZHvBRrZV5gfKV39E2UDg7MDMFgAhyF5mTW9FD2axkNB1CAgRsV",
  "key34": "5ZLdC9qPeY4sWnsfBFkMDNxXkC8sxbRQNdV8ahvgfiy8AdFwFd1i99VAWYDzMEqCXqkefcw2Gyu8uozdW2QyEsgy",
  "key35": "5pM1zaEXzW8ySxWYDhLhox3L4NQxJ6UuVKo3neGExH9LLsWoenovZfojy6eqr5yeSA6kgQJanfs1TzjXcX1AsHiA",
  "key36": "4VV5g2QfVgq6XTtPNJNEPwwbdaM1nqZkL2EYc9FTr1QZesMFVNH8uDYNCyND1aoiJmtuDnzJVaXeciJ5VrxfZbZi",
  "key37": "3fcFFCPPBERXvUCLGAyNDg2nw7APjWvMWRUKbx2mMTuHpfWLKGxUy65Nvi3ArT6khErK3NwQehseLHxqdnYThrdM",
  "key38": "hCRaNQMNsRLgsVfi9idHb4ASz5otvm2EXbb94d4L4TRrGoFDac46yxwTUdNWz92PKa7rwDVW2y9NJ7wMGNZeNKB"
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
