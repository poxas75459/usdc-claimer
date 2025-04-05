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
    "4b41HFZkL729gRfALWZ6NR4qHQow9zs3eBEfjcQp6CKWdB5MWrJCKYHvYVG7f8nj2ECpuxCsCkwY7c3wsbwEB8pT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4VycxfXAmCF5Sb9f9UdorJMS7Had2Lu4yTxfWZW82VKUJCAcj4QsvMYAo1fGzPaZwxH8no4EHQ5to7GiHj6YSp",
  "key1": "2ZQb7Z75o52DBdGt9AsieRo66VUdSRuZVA3PYHfVnKQsNmi9pGADeR2evrvDrRyLsPf9U55F6chr4k5fhicbrNwD",
  "key2": "5XGGjkX1S418Ntxfbn8VZ8aKZSQdVRtnMBnv3Y1kbCLf8KvgUuxR79Q7SMzofTcwxNU6JkzRNtrFz42zqy2ZdcYE",
  "key3": "ui6TbgCMqDVGAAgwP361Eo5gtwdyeYkAPu5DjPoA5HaK9gkbDXfSitDYfgPZKSTEjeEfxbLEQNVjHAxhXZQWjdd",
  "key4": "36b7sTkz4eYqipQ19NhJfS2viTywRWa8ppabLcAPoTif5K4HN8EYBNKH1RCh33U5nDg4zPQUPanMmKihFeRhCJs8",
  "key5": "2EKP86UTyZ8vRoKcsyBzaBMFYFBouEWK8SxRgPX3fZcH2eZiG1uTUb51gijiJfsyKmLe6Md7MrDKTjYJgqwfA8c5",
  "key6": "hV9fKn3YUm8ZB8BWg3b6vyomhYKAk4q1rnd7p872m2wze7w2PvKDTYkti5aMJzJufikN897arjCabiokqxXU946",
  "key7": "4QpQL1qq5x7VwksJPfJV6JbcpB3H7ToELSYTRVtipe6kzxRwe8gKuQo9fBsGBDCeE84gQSJ4f2PEaS8nPdsgLKWe",
  "key8": "2YvvkTKFtTYRcGFbuMknPzCahwGS3urwknJ1Pzd4DDhbpoveUHDmTLycF5HErPdvXUTtVLJeVd4S8Bn2pZcHTRTf",
  "key9": "4F1Au6Nuvk758zdVWeSEFWibr97S7U7oUk4Gm8yEBmfsSVsHwH3wWVq1jGEpCHb4MPg5tnE9M8gJG3i6KymRuvA5",
  "key10": "MHc54BzcHp5EWNxQ6RwxvaK5QG99LP6JKpaZFuH2kpt4Lp5DN39HzpBtf3W2ki8ZtXcCrGNAztissKoTKk2xB3B",
  "key11": "5ioLsX91veXek2Vimq5g2fQxqZDgF5eQVXchPPPmh62gJUnPWbmz94sZqcWUj98N2Lg5Mx4cG8L3aSDuqQnS6mvs",
  "key12": "3Q7oqgXWARg3sM4qG9Zqe1N43vxnigGUcXABLB8WRpEkFG2hrk6o2KXiGWq4qBQBQoT5mR2cSi9XMsVjBrFaN3yc",
  "key13": "34DdFVfh4Avt73Ao3PK8MESUGkgewKGVUe9jtbSpcQScCt6msjARUXUqhfxaFhoEATzfHECqvsgf1Mgwh9yog9sa",
  "key14": "2PzyQrYVBKkwJXXuGZ2LSbZ1wiv4SEjc1e2jE4wsMB5KbXsQywgBiuFBv8s48VokyMAcpGj4rhSTe9fmWePqEc9u",
  "key15": "2cYRUuoubgi9c6WZgGenGF3kHZCbVehmg63dpaGJfW3zhk6P1Vez8hBZo7VFEK9cwYKVfnSYtDi1LjFBAdmFZP1X",
  "key16": "5VVesZUNPEYHU43vmd9cqhZFJ8F7hi3giq7PPZiCLHBadUDRzUtgDSWekbLin428HHCvGyUz2j5PEv59kkkzhbfs",
  "key17": "r98A8jiWA5i75grHnyraUpyBCq9C6RrhzsiZJ62HsA5TQBEH7fP67ZdvjMDKiUYLnf7KzCPbrhNZrJiZdDN9yg8",
  "key18": "5bVqk6vHhV3gcHXatp4x3v5PH8hczWYgRgA7tgpvt1JHjDPoFejotkERzxU4qzv6VweAn8KyyocoSmSB9UJjczjH",
  "key19": "SxCddNJ3sr3mnWJkRFhYaKbuA5TeaKmq5n4EJ2Y7MZesoPU8B5cCtexoNC19FqmBZCHmPHVQ96wG5L3R2LSKHs3",
  "key20": "31YBVRCSY7kv2zEM8Nfp3jKfps84Mup6jLif47fq4EJJN635H91bScZoftRLKUCqj2wHBpMB95fmQVVqByrjtNaL",
  "key21": "2rsM3uRAV4qekHZVzPPpvQoLeUZBS616cjm97mmPiWvc3zMFup7VwoXJN8ZjZr5SfP5fu6ALskSGMSCQ4MedC34V",
  "key22": "2cMzAkoy4bJpWTyuSVy9HWA7GTheStdLAK1SG1FSH3hV9UXxCS3b28grRaLaDMChtGBCumCJUBMmqiyqJ6rzZuEt",
  "key23": "CHGyuUnex9QwvRCU3YJfg1w19cwEeWGMoe1xChVmRbcCpQzfyuML2DcLPXFuSjQ93tpqcMdsJLdGBkYXkSn4szF",
  "key24": "M3ZNE1JHnMcdP5FEJnjGJcVENLE4ChenVwPqjW5VATjMrfsQvrwh9QtiTvyRQefM1FHJrAifkH7LWBJ3WxvPDXW",
  "key25": "4RXrKQ8aqmvwxbGQXz4qSNBk4Kze3SS8veqDSmRngGhfo1AEJFTbfkYZ1Ax5SwKv9nPHZxz2P4SeaxCjbGox7nWQ",
  "key26": "5NvfwCtFEqHSnxDwYWgHnsiK8pT6Jji2s3AeEDSTESpuqXx9KArtcpGUKP2MWxvbtpN8jmLtuHySX9ytUaD2jAym",
  "key27": "HbjT95VeWAUsSgVxHQVZGugHxuSw3vGLBgvHoritd1aPAGZQqRb5rtgCT5hvMmLaxbcnT5mgBxDAKfhejE3EPXq",
  "key28": "35KSNXbm5eBv9rzEHSxpZ5dKdrRLsNAF3YiF8QTLv9rS4oqw5XfuTbCnXCXYZpbFwWHTRcfksEcESDT5YoiDUoXG",
  "key29": "22EsYWVHBu3hRZaADqjmi3Eu93Cj4dCz3ZEexpPPrAghJ6ViwrdyeNWmoeGTJdzGpv2TZ7TKybSwhoHJKmjep3sm",
  "key30": "2oXae1B5xKdg73UXNhrz38ZyyVJHL7SNvjvWw2NmiEbSCYu126rjR4hP7CJaMPQHViSEUSA9CpWzVYstrriJvM9Q",
  "key31": "4G4dx4v4y287y9obz39MjDCpSzzpeqWnDqSDNQRFZC5iH38JxEiQ32Yd7Bg2xPUDS4Diy5S87Xzct5rt4v4NP5qN",
  "key32": "5PhbDKyjGcrFn66piLS7UcadkUKk2nj8LT4VSENXswkEzwFGQG5Ju2a2BdHsdJYGAcGbXYgBF9nMk7GFcybpafZx",
  "key33": "3LzZn8P92G1ZX3trujYqNe82Km9sDzYS3DbPAVkyHMiGe1YeJ9r21jfEcBd7vP1vWvZTw6h5hfLCuBTJQ49LifPF",
  "key34": "2UJLygmVS9p2souPe1KiM6xK59ffvDcwt31vCYaPMvrgQQBg9YgeAGVEzfQan1kNWYdJXvfiYV57TRbNpxpg6VLS",
  "key35": "2yzs3UxBjyBs9Hei2i11E38SrQquaNiQwt4paeFk47ouTxkZTR6fnxQYmJSc7b7c8VxTiqnUWfGgWosaeX8MAnxb",
  "key36": "5JfYRcAPwxjzqdSqVMJPwSCX3BbcoUfGzzuWo3yBZYppuRYjRBAutr96dyinpmnz1Vbua8jRsVaE3KexBo6eCW9z",
  "key37": "5Q3HfHmfs9ZyXXm8pR1svq2cEJT7NsHgr7hhamuTzUfMwX8TpAUAeCK4fot7qHDpNq3W2N7qmMiFx9XQRGVy2NeH",
  "key38": "3SamZRwWdoHj6CRuv3nWy3UovGDLkdTioLW8TpFWvKFiEZh6oPFrDtJw4seJr5XCwaDeWNWjmBKqRZXXR8P7niiq"
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
