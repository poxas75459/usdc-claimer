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
    "2zp3sNFVbvdjnfra5MSamA1QMphNo7a7E7MjW41MEd5bnTfsLZYh4ZgUALkK7ArgMUZ8nDr9kDZ45ansTA8wYeoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bayp9dVpTXxYoF4mbE24ZDKwzFM5nXV4ov8qvaXRmPshEu1YDa2oCdpeJRSczE8x8PVqdeHBat1XWfJkToW9LgA",
  "key1": "58RguJSqQ9ga46x7ef84jcXNZrMjpbyXSKhfztwS4Bph4kLSfWfwNLXAD7tXMFRa5ZLGuUcMKx98zaFrk9imtB9",
  "key2": "5zjEc3oo5xBHfCMdQP53F3DnAuxGA4w4bYfNPZx1q6AJcvXiVJd2U4L88JgXXmhPijrbSShkWZhYWjbB1HmfxZCj",
  "key3": "5RLEg3Dzevhd7x9G2cTu1rQniZoDgvhe6QhmimPEryAeGR4Y1FdjF3tftg7qXkdwDTDZ18G24tENUrzfxdC36JoB",
  "key4": "41KvWFm5Zir5k5mJ1NRGbFWokqEmqkmHXVXs7c8duT4WZtBSisxs4n8Rzpe6zo4cM2CAcHBEQ5uY538H2VqrGD86",
  "key5": "5LPRaScGxE1kSMi4f295EQW2x89X26z6EZ2XwwbDneUj8oftDwzygTUBGS3rpKNFPHxXbC9943VPcNanZtN6VvBJ",
  "key6": "mZbADfv4csntWWJPtHKEF13Z3nPmoZcmPsJRGcAp9UHtWARovwSEU3qWTqVgkJVEn192VRu9RoyzZpMPfFKSgWQ",
  "key7": "4cAPX1JPFQd4QNJTJ7TJpcRTCHWoj15hpNMKcMNX7vq9dDx4orJgUZ8Pf7moR9K2kqw9PCbap5MdZaynWRYE3f8G",
  "key8": "2dzNunYq2eRBzQywcVMC8jXZ1nQZqYSCw5y4C1PeXccaT9WrjVdW7eEML9App7G1iFoeq2jWnHAxn2W5BnKNaMGy",
  "key9": "2bENTi2S4WF8p7FotE9uAN5TyuQjpeEmXYim6ppPT4JXYYzj3XPxhACkGsN6DFAKR3bWCw9U5TTpeNBxksV8TVRQ",
  "key10": "5zgcZ6PiviMHJB98gB1QHJje2HopTGupbCMNtEsDvuEmXdtG36Pr3RNV8AdUKuLiXE4fTA3eapiDsSUiJ6eyDBRR",
  "key11": "3niczPcBjt73TWcCbWwqGvDAZc5fi5j4oddDL4MqLfs2TpfTYy5ATEb8ng8WASEfLaowPqCm3h8tCaHZzMDmgBYh",
  "key12": "3hKz8ctXCTaPefA1amFMRgdZYriBmKuATaDhe6N4azLchtQPRH68mZD7vKc2zdgsY5DvEyJqGXVrcUm9cEkDYjEk",
  "key13": "5xZ8uQYDLfrRobDZD4iBURTrjqQcvmM4iz7MQo8atWPtaDo6CvCLLCPHU6Ec1HbGGLab1dk45HPpSShkaoyK4iUZ",
  "key14": "2wi6EQUsKDG3ebBoQbondKFfySwVUJ3Wtdbe1dcnj2TM6Raahhih7KXPb8kRv5ZWUoLc2kB5U5aSRmDxNiiW4Erh",
  "key15": "4rpc5sohHX3k5by1iZV6Bghch9vTGYZ3kHqYfqtLZKfKoX3aNZUrbrrr1jXzsGFnET5o5aFkx4GS2ozJteYCaeDM",
  "key16": "4xTKhcoACoamSerFwQBzBANxaR2BAqF84TKGRhMT2oehuMzSSqmrPgYfdvgdPY9kikPF7vqafQVktMHRYk2rnmSM",
  "key17": "6cH5jXzHPya8jJQHQGiqzwFuGkaxDcGbqFSwJAB1WtrB3oZJhK6Csu7pAPEAbEXmvDZ94Q3MJTZVtAc948EMuGb",
  "key18": "2GVkpKZzQubwPkY4RmGPLDYUfFKrpuTM7it2eA6BZPSQ9hyB8KAzFSDF8k2ic6Zwk1KXw62oGD2odJAsNkTK6giF",
  "key19": "bXuvhqS9Gdueix5cFdG4kCHTUaSmHChSjkfgrFJjzMWvKJkVCUyu33yQHiaqW6bPuRUvogMC2i3dAMtXPTefw48",
  "key20": "3i9dNR8Vg3k2nVMsSFoWGPhSmhfDzFTtKG8qaV3NuW3pb6pCZxeod3hQsr51kNszXFkaE5HiQFC56RmGSRpajusJ",
  "key21": "4usaEudBoAq6iNWwEoVWanHFL9feTYDP6ByyuqNtigDxnN8Z1x1FJjirW19X1c9NJYPMtEUJVRZ1sQXF9AprXWT5",
  "key22": "5DUYAvn7FVYPemguDUbxSdiSjtkKAT1DHdatCkfdGXLZJkU7T2jHHPca2azNGQu8HoyDTQ2f4GCMjPoct579HJMc",
  "key23": "3KxCaeE22USZaV8KjKnX65uVvWrcPEwAk1iipA25dKkpXJuUTr3F27ysB62DxeFVWpJQLwaRwTKsYsXJ3BwkPmMC",
  "key24": "4GTKodSSEJp2Vhb9LyC5Yiy4xskrcUNL5JMuBvCxV1Tk3dutcnV2nnyKVs1KBQ4FQjMpZ9iqHfu7t9WjpEExXkYW",
  "key25": "43pZkLnHwVNwnPnP7e2RSJwGHQmNr9bjk1Q88XVXsj3uCCKYfxhBYbBqevLHgixw9v9qVBEqAKZYHGmTMQnnyQug",
  "key26": "WSEnGJhccXtJqLvzoQRqYYnjsr5ePQHiCwBL4U9ZkdV2MAUcbUpmzhygVYxQARivoBraFpcWBr2hjr27yL2EGDN",
  "key27": "46yYPgyBv9DtmydmwUPq9NLn4H7iBpe9qKURj8zSTnU3GE9KYxsKxARQ8bsu6UNXHYYJng7epZXtN6BwbFxJwyo1",
  "key28": "3xXdrnzQYMm7chcr84MkJzkFLtcvw9RJKFN4swKrM64rsvnmn2JxzUViveZ6q3qVvW9SYJahYUZGM1SPWJmTh1kf",
  "key29": "3yoVY5Q8Aaj2WTKFx12smQUCo75rGjVynr5uLtEsf8V5yxPnrsmAvM5vmok5513DVyTHqdTWCtTnS2aA64yws9yC",
  "key30": "3rEzTCGNsYPr9JiKN4bULnGTVR753qM9E3H28EUY8Lsa5NnvdMFDNUDujveAqKZmWDZUgeicWEen3rwgrebFHasa",
  "key31": "4jGSqWctV5QRRJEbYkBTmrKMS7Fdi5qnC58qR3sgDf9yPBo7zNMCm8P3BJefShshyvojejrPWV5xnniZmam3cocx"
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
