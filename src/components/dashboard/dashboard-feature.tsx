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
    "5K7szKwD4TV68AMFKyDPmg6YapKdyjGZmJGCh67gSz3vGVR5qYfqR6tP5f8HhagoYLrEGixbHEWe5iBcXKT6cZF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DxngLcCAKGZmBfyeQ2qhWGsnoBUdz1XQw2gL3DzN2GzREUZ6M6UUm28RjKGGi679ok8FmKNECVTpCv1gLWBStBd",
  "key1": "4rCjKq9oiEF8fhqjdCqNtVRBmQCkb5HLeiCYuMoT8SLbR3xf27yB3DXHZVyGp5NMLFKoMdzExSWbs3G8zEd9ypQ8",
  "key2": "2Q9Js1uUGtvtWkesWZExJwQLnbxZ1LTaz9bPeiZW3RJ86HvgP88fXrP4UMfz8ew1JxPYFKSoNH9MyugRrk5uPkYk",
  "key3": "42kq222hjavTEUfgbbNNb7ZnLkPNBetKoxwhsdizBh84PihdqDZYRZB8dUKHbhriytwKkdvwn7S43xZYQP83YkQF",
  "key4": "5hv6ZRLZT9CcVaJeKuZAecqCyghP5BRWdbPwCc8dQwGcQmJPXvAGGH3uiuxMFCNh9vamNeZ1KgZmQzQsqFcSipb4",
  "key5": "3DEG8f2SGiHf6V1tbCR3AYeY2P67Vn4WbtbRrJHPvC3zZsTmZrxpg269eM4sDudVtA9JXipsHs4qyrak4fxMErBT",
  "key6": "3NMRorTG342YTp7RnXy9LtWoSgQ8DuCyesTmxavaMMrgBsVDtA2qrs9QM4ma86m5M9wVXtjf6xSVcBaPp1asKSKN",
  "key7": "4sLt3uDbNmYKBeQ1vxA8g2fKZpaj9y6r6ajnDb1urNkaCE3gb5Liy9fYcs2aSfViwQKrDBexkutoZhANuFnqdCHm",
  "key8": "51AWNR7Tig89WjfLymxjyorKbqWX2oKr4mJZDJU6qE7FYGTKDLmgCVuFHhH2q5W8HyzLF4s2FcsmG1ewfym5WGqZ",
  "key9": "3BhLMdMExofiZ17eBoHAUXobuZ7FJjMtwud3wWd2PE3JEtD3vjbp2uWuRCuRrpXQg7rfztTqpdVEXKr1Tfe5rf7j",
  "key10": "mBisKGAM8cDtPeh4z6SVTP2nxdogPuW4QcwBFuwNp86fVrjN4dHMNp1m8KDBoDycNGdeMugnEyEVNDEJghECgdj",
  "key11": "5XJuSpYeFfswZuR8GGMXYPVtbkxBSaHZCxGtTroBPvM32ZhztQyRRDtPxQiU7Q7cnzBxmBNTrmQv9TB7xVWdVzDb",
  "key12": "5bZeEM3R3EKcEGxqnsEBomLMTZCBBYdbkMpkxBwEWN92yYaAWj8ofMvcnqyr7ABYQzYx8vtHj8i3opBoVVWeLVNN",
  "key13": "Te42Rfdee4QzwsdwpQzMFwNHq5VGCNfWkp2Re7Xn6SzS4Qpfitfv9rEVAxmgpHTbhFg2AFBSZ9xpKeTNnRefc2f",
  "key14": "2QTeK7sbaRLfNisHV8T9RmTZKamxcLicqzFXqxUBndDyjkXmU9Tp5qbkHFUNA8Hj3ShibXVFhXYK1F1QJbhnygeL",
  "key15": "2kimuqvqxPQCaaesVTZY245qqt6wmDRcq6zTVNiaDaxhV5nKWd3ny8r42FnQoN3o598kJZq5KcEYpvJ8fZAGCZTS",
  "key16": "4H3C3WRBRNSyVhfyHE2AiJS5CF8B4VZhYut6RkuqEFFKPXJ33KsWZjKAwpbWheVRVBm7RTQ87z8VBKtuhL3RW54M",
  "key17": "5x4Dezph7R1GiMKnmFKwmxMNRfKBLY39XoJ1p4hhucUmNCjcruHGsud14s8vZUTQprSt55977e1hHBx5guSu7QLZ",
  "key18": "4h23BSux2xYpbNT26t51XgUDpchoQe54aPgFSM8Gih8ErRoWKA6nLmM3dyPYufLWe6xFAbgPmEKE2NUhxEsPAVD5",
  "key19": "3Eo2UFM7k1VYsfPrSvgvScjRHeHyseqdanGFCGaxSUpEBbcboAVHdV87NtqeGieU2sdfURCFpztGQ5mrxzPxfMnB",
  "key20": "3LFKkUywNJDXvKis7E4E8uLBprmHEwNWSYSSWsAwpLwmRc2Yqb41QcYUUqy3bV1CVxWQQxeYNSeF23gJvRwqZaiE",
  "key21": "5vRLqgBTFKykb8osHn388b4t7V8PRdGKgw8PZQyeLrqYeWQWxVkmYhYsz2FYkk9eb3752mGj4STifbgm7SrqWNCa",
  "key22": "4CNQd9UjfmR96wPHJ8QjHVUG2RXtyWqN9i57gsQ1TkAwPepJmXfuY4PM1oogHWtJfe87sL7H7A4DvuNGRuqLswYz",
  "key23": "5gKFkxoDas7WWYRPb1WDAGSm9NMXJHwwT2A5Yrc4pcyahnEr7hNSf8JaBryhaLZixoF3EeBEXaJ3EwYzFwJPxt3X",
  "key24": "5cmeFo82HCgyamabPGdbBP69eKPs2SfqZMj53DMAY7Fdgkd4gu8e5MQ2rykkmybvKi2RS4mYoBuSzH6zY6hT4Hnk",
  "key25": "MVRKujn4p5uUqx1Kky1gC2tK2pcAEzdVhLWnfrMLChACHmDSp1RzUjVTpT8iSmQ2gvJ1Tr9jCX38JyfB3prKXR2",
  "key26": "48Jx6SQQrogntaG2Eer95QdbtUqdGWcpiJLv7naUnzYRc2fyzBNGLbWkd75m13ztvFT6TgKp3uep4NJp4SZiNBov",
  "key27": "5gUnnp2p5EgEqfKFtETfA7tfcfF4BZ1crErfoGE3gejmvVRBTgRdUmLbJSXsvHQh8tNpvRkbF7DF27TkCK4PZ5bv",
  "key28": "G6s1eaW8KoK2dTjfknqPPPj56MxerVQcMGuVADxv2zntEUqaiL2eQHuKVougsqMBWAi49VBkQmpCWCCpxyGL7wf",
  "key29": "5W375FwWcyHZorcrEzXtSCWJtZjhWAhYbXjrhG7ursHvH7C2nWbXijUGwVqDdYXiNGe1viwdEkogqn4RG84GUckR",
  "key30": "53LUF4kwzWM4rJmAFEzQxgKz7vvXkujnujC7aVuLBvTGKqqj83sCkczB5y35ab4p6hEAD1WkmEUdHNEEPY2GoMty",
  "key31": "4tHvVPEYoRWeSaYUu96kim9GVM1n35TfH15t1ZMfg1QeFH1sncNtWg785z2ADjYBXBcS5jvceq4xEQmHZFcPRZQA",
  "key32": "4UtbL8v4vym1iRyi3nnJEsq4v16mRp9aWLNWYb21JX7gETkzLZYHUJZzwd9jpReoBBK7841F2SfaW4v8SLAoGkvi",
  "key33": "24YvSTRjCENT93pCqVpZmodNjp238c2XyfsvJb6f8z3p1uN7eVMeC7Qk7AQgzXiuKM4DsukmpEuQvk79FS6SuphQ",
  "key34": "3qAsiLwJsgcVMcbeFwb5SRh2jS4SvdQiLmZEPqBhq58rmn6EjyEFw6a3LQSGXyLQkqPEAEwGa6jdX3yBMGWZvfxu",
  "key35": "2yByL5pdvMK3FLJ8pWeaT4CsAQYGA4aYPjK7tHUGGxAogfKvd2tvCPeWvfdfnonV52JEQKG3RRL7fWNNSgX4Yhwt",
  "key36": "5FUvqvXyoYX1bmQTWLuKRfUZLjt698tKAzw7VZz13gFqReqhfRu1FdwzTiTm47qDMjcBSVk7UwGyXJ8GCzmwXEUf",
  "key37": "34j2ztU9PBpKaupZghtCgZbWMxTJNw7pwxwGm2PHQXoUJpmPvw3QJoXum5SzzZ2qTaJagBfDQzwXvpDxegkTrtKQ",
  "key38": "3jVFmET6VXwL3QzuLvbRtrDFdUHAn7EtajoBkJk8SGsnYVbE28rfs1F6zbVtERdaeGtgYGkqxeaUnChep6DmsRnx",
  "key39": "4nJAnA9D8yyyAoSBcHSipswfnniHpCDASrhkFB7zAeEBKvE3tmRGvwPG5Y15a8HQdwSbZdQZdxXtFSLkDLXoKPbq",
  "key40": "FzHR69G8isEwyfWMcfqsnnBsCANGQFFr8QvV1kcAkiktPnuHqMdrVRr11eeqfYU1bvc673cRT2gcc3VoWujAU4X",
  "key41": "saTyMcL13jUUy19r7hBfUaLnSynDyCtZTg1T34ZujrpvB6nN6mhCAwrKMjNh4jWMUketyG3fYi2C2TQUw7fE7Gt"
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
