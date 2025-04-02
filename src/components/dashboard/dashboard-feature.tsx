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
    "A3uyMz4KvFVZqKAyFmcbrsCT56oARc3ZewoutCLos1wnXRxKiof8YSXcDVe4KFGKopTaZeeGH1Wau23N3T5hgPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5684dns3sdXuCgV5R9bAtD5cb2NazFdXxCeCbCpxFP7uRS8DAMhTqnTpuTeUNaCPDpdzV7qK3KGEnF5SYyZkKHo8",
  "key1": "5Jg3ZVfLsbcxyQFLq6nGSEJYWoU9g39CxkELDFiq8gLznRnKQ8g7s3zuZsaQugHZbWTsG3otPHfoWBW4hHTSG2oq",
  "key2": "4EnVSjjTfbGKijHjXaqPVVNPTMZiHzctjxzD7roKRpNnctBeBUKVQfcMnFEgKmDH3SaSSdftCpMD1H2h4pG398XS",
  "key3": "4ZvVprfBWp3PiAb4GVYkgK32Vkcrbet1o1JT3dFYVLtVfsmFYRGiqXrdE8ybXgHiWxKQJ2RdPk7Zb6n4NuwWLnPx",
  "key4": "34XNAMAfQCZTVY9nwxWLpBdDU7oJxnBdcFsGFWWCHDM2Us2RdzCGAAEcmpzzCav3R8BrWx4wUGcxYsDeoga2eDEV",
  "key5": "3qhBcX8Km83WSECQTkcadNTRCrWBjmpe7rpzeaEzp5scvbGSh7YDgcA1d861H6FUW7RAoQ11oLJi5YaWxEVAWRAW",
  "key6": "58tkxTBhsbroMXyBcQk7jS29EYrSHkMWkvBZxH2BkjJuX68eijZeJ7TrSHcjDuXvCuA6XT8vN1qTBHC23FSBDggJ",
  "key7": "4uukfkUhHZqDRvWoqBaoC2wCQtVv9fuVFYaDbExgT6prZiiTseVRF6km88mL7too38Eb9sV672jWDF18vgB7vTbd",
  "key8": "gKjyUiyPUdxeA4w4aGF44DA48P5913n2BWnbGKEGoMQDHwv6f6yDr7Q6JsFqnHSLc7qpM2Bj1S9dPkGTj2UU8rs",
  "key9": "5682Rw8rV5hPsmPpV5x2PYQyL4pdAEM4djXayJnCGv2ErQhygmWvo2wUbb2wxFkAWSFSkQoZxAvZzvHWTcWodrpD",
  "key10": "2BsEsW7SoY9Dmt3SVvZeKJLjZdSVoaFQ7LxpgTgZ6JaQAxTaFatQsYwqZ8YvLMC9Lbd2zYwYQseyr3iJfJhHa5K8",
  "key11": "5DhRt5o86qNHVMN6Rrw4p9CHsrYnNot72nj8ZPjhcepnEpaF55AJN4vruwWE7Kf55J7DnrsMS58kH63qTkk3qNcJ",
  "key12": "57edWe8vYgPHdaFgb21NNHepXo61GuWkuuZDTf7YCEjLRFx2bRAH3i1rDTUb69Vc5wupYkeQaXd7ep3mRHrDJV9n",
  "key13": "38zkHB99Z1eDWQG8iPFLBMmiZW5DneBRDhs7NDXyn8WVL8Aim4aPobeQCTaQB2UBQrHdXiJuPXvA7CUjqhxakY5B",
  "key14": "5JqXfjwtHrZPDDSeY6BcsjNvXy5nvsUbADvPNVo7eoVZn72EYnezwDYeB31p2mxGBacVhaQCbEKtY2kCDHfrRkL7",
  "key15": "DrQyfA1u8N2DFNVxtkvo48a6QQR4Z5o7yr4HGMBDd9pp7ZyCcUogbw21ajaNZdkNbKJqepV8GbPfRdwCQc1HXz8",
  "key16": "55WxX5wJuPhVxtKCw22sCYGeaXRA3fbi4rWmGofom2GJ9ZBmdoFaxGeY1YnidoC9ZvdwfgtCLYzAAHEj95Rhm6Lb",
  "key17": "4pRobVRRfpPjr5c41SNkC996VQSMQKQpaqbxRc4Wy1pUtCnYWFQbi4Pa9c9Vgfx8a1ss57SAekTqmcz5V63a2WS4",
  "key18": "24D7NVt3LiHbUfyK6qg9Xpkzs6kuRZRM3bNDzmd5eVb2baJeHVcizpqKeKRp8RRXk3jKggER5SPWiBggjWhVd34q",
  "key19": "oBsyyWjTGZjftkypMm8WWxu5a4gzTfV8q6vux41Z29KTCkr8oG2QefYdFGvH9hw79qyQ5zQtU3fCsasa74dZj34",
  "key20": "3zuDR8BVPTDS3Kqt25aBuxqtDA6ZEfjrfeTzryYnuEV3qdanoWFmp2RCsiTobgoRjUX1DUkLb4ARqsD4meB8sLge",
  "key21": "24q2NLTe6rBAXhwutD4i1BZWKFCytcm7YytUFypnd7TDDcr23YUYhbjmj5Mr2cozdupej78z31mVAftuFcXQ3W6j",
  "key22": "5wc4Fi2GHvmHJMNBqmsNTHAkAzMUJdzCYM94HMwePAnr4ePc1NW9pdY61qHNAnbSjz74AMJ7nEYpk5qaNT5Cjzeg",
  "key23": "2CzGsaohNn5nRLHXkB7pTL3tu85fhfXShXxbPXC2uV9BKLjopfiwwv555rFQf8v73WBTZa3w59MRDhu9kPz4Xa6f",
  "key24": "4Cz1sx8W9S8iB3pjHsy2tt3GVYFjTiFdBzgtvjAJ2gqUwyb1qMzjM2dm1AGzAUoDXNzP6K7ndc2qNAvXSm8dpTsz",
  "key25": "4PyygjP79qqj8H7RBAXh1NhVpZJCw1EPdA1iYj8Rj5xaG7WUEp1gQ6nfDcyiCXRBGBXWY7M66Y48xjoDnHGR3eto",
  "key26": "4z2w9ytjPcxw6j3k4YAf8CZuP5HUmsc3JwLkq3jA7uu3aHEgwhgpGyAjV7jgeQtnTxr9xMvMdZbaYWKF2zqcH71",
  "key27": "64dNLtcFmES1LGypxspBwUq9wFandzt6n57HP83ZXcmjuNisxP7nETFESyRqmKm3ShrnVrs1dbbQTJegvnAWxTAc",
  "key28": "2tMxvid7PVgAyekrgt5vS7Ufiv77MuZPCzW1T32GmCwhviTs5NzB34SaXWjk5znNwS38WD3BR5wXSm87WSRTnX57",
  "key29": "dCA2HqVRAPrzSGEz5Ne1fz5FFQwnPT31yryF6gHmtNRvpB2iaoaJXmPSoLstJvreZzFyYEpxSaLhoS9V2UwiKW6",
  "key30": "4UW4KeeYSBw3x1qmLXJsi8YinQ696PRhvetLzhZJXRo1odJPUeRQD1rcohEccekTc15irLRZzzgLWqZB5RbnKZ7",
  "key31": "2SWMErGyzWQif6znzaGr39LjJqhMcHre57Hore4Mww6Cok5rZJGSGiFd2DrZFjJhviYNF7LdD42gzBqSD4TiLuad",
  "key32": "2xML31qdo33Ex9eX5omvLVY4hS38UtHgKrYrPZ2woJKEsxBA42199aYH8wi29hBDhGyYnKTkeh28s26LLUW7kNs8",
  "key33": "4zuCw3BLVhaUzcpWv53Lub8GHDmaUPD5qJvbHGmXSLYecnqnMu1R9xiEnvXMpxvg4RubhuxtyxMTqF23mU8chwxB",
  "key34": "27D82VNyTHTvWB48vq1chTATSe5ofXAGp94CRV1TpcHsetSxCyQv9BcZg1CehEs7gyi4c8VXiLAzHou5K8U2iY7F",
  "key35": "4ZrCz1fQ3dtJKCeETf9zw5VHYKAsToBFe3D6ix4EmY9npcmKiHEXNnZ4XTyqJ9hFfZRb4omuUmbFNM8aa6Rpj95i",
  "key36": "4HSKd7mShTgXE2bUrkvbbtZJLxWPEHwt3WEZr2WJ6rdV9XRRpRHyYoyxkHdhPyCamW1argtHN28MEETUAD5tV4g2",
  "key37": "4x2NN4eCCHvdTTZMm5MrdZN78j3ypuz8tnauRwThBbyd6dbb1R8eSMTK3qrKXiDJeHgK84T9akLPbX55daaK9PZX",
  "key38": "5uCCeokGLBYVz1hBJW1i2wmNyhkuMe3dTLVbBvqxG8c6ATgQPrmZDQVeE3VnhgERKnPBHvGsLWfD2Esv9s55FfQC",
  "key39": "aUwByToma8XjdhdT6i4U8PshYKEzrD8tByErZcKt4wUYRZSoeZLzqf5C2HE2dBQobTViVUE5CDQyVFkw9jMwsPz",
  "key40": "52KJk6M7HTbfMNrwTfTs5s9SLzLenTjJuUYMdWxQ6LNHhRM5fCXRndThHVSQKRwcLa3pkjkCKKm3LNUbM8ai2ogv",
  "key41": "jLiMp6wzWGVXdjZLBxdPqKYGnPC1a9AywbnEPq9EobxAH1XJguBsb74SYH85BwN1esaC1DV6D7TTmLz1za6KwwP",
  "key42": "4PZ8oCwwsJmhSK3cofnEHTzTFM3RwFGAza434XXiDQWj8MNaSEapfi78kExgQxpZYUsvNympLPcZthys8TDRnA18",
  "key43": "3uHwJwCQxbEDagv7YdTpBfXPM9rQBqye1yNbw4RUYCTBGRxeTkPLFZeEwtPwSJD1tkD5wJd3rsPs6DPXBtLJB1np",
  "key44": "4KVqKhPNusrfkRhLU5Yz9PTZ5Uq7gLPzyiBZb3XmDBDcLn9oWFg3sL7UTq2i18YKPrfkG5oJ9DXs3MXfV2DNQXv4",
  "key45": "vqWUUh6NsykH9p4CSSMRxiBWJFV1LdyAehmMQd7EoLPzUqs6wRaZxMjMBxQZefrwkxzJ5QvY6zNScyRHNWubtRb",
  "key46": "29uh9Zb6venNLoEk3KPk64M1nfYy7B3aXWrt4qqN8GXCEuugxoqy5RGYTzuec3dJmDtSyGoc8MyKct3vkoKArdd5",
  "key47": "2eRRLbsPNSUSoHWXjMP9i1FqQ3aLPR7J1c4D1b3akWX5FqMHKaZWJTyt1i1QLgvGKQkuzUFU2VWhjzaH3jwZMKbm",
  "key48": "E4Y5brEH2VGQX7aYBYHFXMceE38Wk3oGEo8FDHVxsZqxgEvAuvoiV3Hpkqu5pd1d7eoX2w8a2ajmokZbYGr9i6w",
  "key49": "4aGNbrU45HUSMu1fdruUx6AiwLCLCGz3nXpoEUjS6AyGoBYwNho7ZPEjt4gwjqUKqWmr7hZ8beBmmQiyLdF1Erem"
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
