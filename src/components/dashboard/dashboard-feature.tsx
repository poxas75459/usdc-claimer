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
    "MiPd9mXut3x1dstxBwURAPeBJXJLYQVCVR5s4t2bugpXTYUZ2poVVFCThMkgaAGuUpw5gzjYzH6TouJk6BALW9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1jRCPzvswMnbDjvTbZ24fREiMNGWPG1yq6YmFRRBXWfvUHwsjHvAnXJKDGzW1uUXBkypPjnKEwACuYtSHoW23Eg",
  "key1": "4QBVvR9KzU3fuAV8gSUQ566Nd26HY6fAuwFaSPieafDiLJ6H9HF5M6Hspta1F7xueq2vi6BRmjLuKaKZKWqN5urf",
  "key2": "1HUJ8uVQgHJMh9QiK8HhvDPqSL8pvLrULWiuCKxMzcATd77YtWTmQyBzohEFHcK3UbnWG3Bx2roTZWHhM6CddSL",
  "key3": "t3twUwjH3T7kWbQaPhfg8fuYLJ2u4Xzx4vgwTe8rzdwj7q1K5Sc45MEwLw5NbnVsZaSXxQDTuyirxQx4gSMqjMW",
  "key4": "2Wv42ixrkRtT7qTgmvfhyJ5TLKvr1hwh2zie1MqXBeVry1o6Bh1k6cMBrGU5SiVvopqK3ec5yPzNoSy8SFMr4SUb",
  "key5": "p19XwsPxMAKPRPvbCpCCG9sTQvLuNt1g5oPhcgyF9t6GE5bchKG84zsXArw4ASRWm1EwffTAuSGeQqRyNWrDPey",
  "key6": "CkW94knook9eXjDdUxaeWLvh2PRYHRV8rfVNuYC6SZaSwZk3XpwTXzutpEmefhErAQgqhGov5zYjq8qL8Q1y9co",
  "key7": "dh9etbuM6BvMERccaHybLENviZ7sPhWYZBGe3Z6ziwCTHC8fjBHmbGqmSi5TRcMMD7xNjdPVvdprpguCF1tiwzF",
  "key8": "48PfRrJPDiJLszJLg4DaRcWo4eSDjktcqLffUYkU9vbVRKw9VrGvUMwUTS3PyHtjFSwxVLhndovqusvnu1kig9CT",
  "key9": "5JxroNiuspQpjGmM5Z9xadDZgqxnU3bYU8VMYitsJj5Axk6Mu9qTkSw2SCBovTBVVAQyYBGTHWr3QDUj7knHdYdM",
  "key10": "5cRTwuDPzAiqK61ZGRgcxfBG4oazov4jPyRsGxJEihJD8rVKkLyNGdst9ucuqjYZVHmjZNVF1vDqXNiLCjfkjrXR",
  "key11": "3qfTQoMcFWs14EYcoEzeqizaGiqasD91pf7eegYUzCRrD8Tk5Xs5gjho2mYudaTXvDLBdvme3CS9SKC2gfsuZoeV",
  "key12": "2xDGRgrW6GD84wgEnx7sUts5qR7wjJk1b5zVJwivGmKca2FdxEH4R4KeWEv6LPxMfdJyUtLkEjfQPn8pXW54kwvm",
  "key13": "243AEAFA3BGuw5QdvzMgqoxQT52FpaSpVfcrUMQSHdWBwygKEcFAUDrVNZDM2ten4p8HAXJUp2GTub7V187CMfgC",
  "key14": "3EynmQvHVsTt9dXRWBMmmwhQLjteTnR4ZZeFMcT9meDVaKeG3mLfSfhKZRf3ubCLeeVedwg46RBo4DwnSAPysg6n",
  "key15": "4T17h7G24gu17pjGBNzaUK3iWj7aspjwhmJ32q3782hssQLEe6qrfU7ch38A6stoQ7wMBy5DAnsotVQnajP4XeaH",
  "key16": "4hq2oAYZwtsLMTuy6PKERVLX8fe1njgjDJVHgijRb2efHMJb8STs4ReXotChNqEwcis3oScqNBc2KvfkpbGyUWrk",
  "key17": "KwtpoBmzmBcdy6xAWEPRDGMc6dJjgFSTWZRfdW1uYpr7unaQs6i4gTEGgiic61WeLfyyXbFHFahCigK9HiVCKdH",
  "key18": "5kFDWP5LxpeSRgzip9WZbLa4VPTi35rHu694rhk3e2oQGXrUuKZzA57gTWmvkf579CDTfGwRc49mZ9GVgvW8CXDi",
  "key19": "3Z923s9cLanNZMhtizNU57c8kYraHdffMDD3n19pkuMGHoN7bcuaQUotiGWcedCENzFf3Vyk3WqyshKVmT4VzQQQ",
  "key20": "XtkTho87QRuSwhtMSKhduX4DGAHLoJwhRYE5Ab2dPBrqDPCDuCBFH1D25WNdbvAzseUuJowCdu7mZt7yWhnwhDn",
  "key21": "2WrqMwUyFumXvn3bVrDuvMUzj5V1Q4vQtX6UQw8FaAvGMBiWMWqrj5SgQZfbaLHYWZsEsqr9BcoQtb6hoGCHqYKm",
  "key22": "sLDPK6dAihYtjbuQJXSzaPgR86sqaSy1gNn3VYVCX61g7tebs68zhvYp8xBPeJdrsBQJCJPXv7gjNqAdbPRqySV",
  "key23": "vWJWvi7nL9zpNLAo5nkqgbnveyvhgqcAN9swg8v1nbQf2Kbc3XufQ7qLhK3uHbEkDJ8GUDpueawcPjsc95rfUNb",
  "key24": "3gUAE1YZ1PK96sBAtEk1bsxTEh1e8x7RnkyFhZxUUsYwNUbAcaX3RqiwZH47NR7SmNG4PGTQWNCnHCmC7BF7fbrG",
  "key25": "4PYEC9tAn4dSkDSnuBvCKJ6hUpAMv3Z5TEFtbHKVDrBkWbW1bBLoqwqR8ZDcJ8wp98nLwNsecaS8d4WZ1mENTsD3",
  "key26": "4foH4yc1RdAnZ1kzQLsugakfksE6nzBxS2eA1hRHa66FUL4tf9R2spsRoFS3zcz5z5b3B1zeLJ7mcn1gEcE5guxX",
  "key27": "2dDtPCMXT5ZAudDrcarsGZb767c5AAQTfxP3RWVx92T4YhAzn5nDn3MgiQHrJMBR827ZqRAeiypSN76ABpLta5AL",
  "key28": "hFamc3WRToHb8TE51K3yDQHARz7RiudQSkUcHzmDdQwomzRxBJ4QCp7AVjPi5YFj1kWyg8HfE1TMr2kXZEMYC9N",
  "key29": "3PEPP95y12Uwt4atYsGetuUkQH6MsBzXmeWnMXRJQddNu3Znu8HYpb8BAFV2tJVEMpp2vH4mg6BSwXWzTrMsmGYT",
  "key30": "7geFEnLvUfsXoaHMZ8VMwVZ3vaeKmLB2MFpXSqkA3gSTh2EKJbfyLd9iaAdcEssC3Z5aRnxRko95uSW7MVXSDKq",
  "key31": "25QMkbYXr4GJkquDvDfY5sbBRJtnpqDj1YWnvLLRLuVrcf3QMvf8ZJnUEAyHxDCBjjo25awxpmFvK5USoxQVJfkr",
  "key32": "2dcSwH3H6zpBVqi6DHZsh6qidXyUxB66KS1Y5ec2eCjizSMbcaqNh9ZddMCcykBfhiNTghwxrghhFFN61LFECT56",
  "key33": "81SqGrGW5KtmT3SNQkiXNpUPi4fkJb8wyAXPVpkfs9qTvopk1MoBdoJC7VvAsvSQSi52Nzgw8dBobQZR5Rz9VBT",
  "key34": "4qK3g9wsqv8uiy92uC2yik7fmjzjqMfo6fx58oZw9KdSgay4NZGH38rCW5FL6CQtMgcPD3korpaXPEK9QHtF2Jqy",
  "key35": "2eGTjHgqPAtTaor5RnKgoTSjdbtbRMebZ7JmUCjn8zU3sbZ7FiXKDcHCkJGqpvdgkRWpT4zeL2Wv7JvxxEozxnEi"
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
