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
    "2Zn1DoWyucuiZZAuWYRGSVHyhU6ufLatFWUwajE5fVoWRefdyxusof1bnwi5enXNmWb9xcmWagM1ASXyoE9MXXL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "283RbYuC3C4HRreV2MJ67xGsAWL7mCeewB9mAc9z8TgATHzT1EKpEwY1EQ78MidDpnVivDe78xvsHh13SkebR7Lc",
  "key1": "5FpGqNRvdwP8xNAhmiMkSAoMZJtRrJrhiBh78WaBku5jkZ6zMjXowKf4PS54fBRwwZbYzQSVZYHJytZtgtv9K6xW",
  "key2": "2xaUaZJHz2GdX2TawQZSsjZp8y8mW7i1i3TqEd6y6znBVFx2uJny3D8e8yNKiZucrCDXE7DEHGB6gMieH33DW1Uc",
  "key3": "sCBGSxaipF7m2V7FunC5URbsdHKueXswnyVardc5UpwbYceReFh2RzzMk7oLnxNuM98JjxC3jBUYooYH8RvNVL4",
  "key4": "2vTaviATgEhnhREcoWKrYNb2Tgi1XSd8Sbt8FXm5GZURc8A97p2imwPMX2GL9pgqtgYonG9YiPL9n2WUbx6j2Wpz",
  "key5": "2FRgsLy3oBK97oCqPCoVB2isCt1qi2Je3JAM4qc7eRc1ThrBnZ5UArqJtzW4Wp7DEniQ8ETUhCjWdY2baRoSfT3B",
  "key6": "4Uyo6hSLHFu2HeDWPmVtzARCmfPKdRDay77KEQoUUe1XS2wMB1J7k8fPp1bkdwxrUYYFMdKsfsQdMD8QG1396V43",
  "key7": "63ACcyhmyw37GE8xaqyWJN6cokUM7PqQL9jx6Gk7TVWhi3nPyku1j65trx5Wh1LNTd6nDTQQNHcP4XCZnPUATpnK",
  "key8": "4p9HfdEKrV7s6eNf4g1tzRuy7EpukqNGjgRHqtA8CuNM5yac1DgMvsganGsEit1iSRz3S8JxekxcQuReKHUGhGCZ",
  "key9": "2bFp8eZLc5BjY8G9Vhc2cDQ3LtHd3ro9zk4s6739UTBohyQefDy3i1uQtjojoj317gBbVREF6tLAwoWswPcCtBVA",
  "key10": "5QP3xXZpH8JU1xkDynboze7Tt9E144GZ9AxgoQmdnqs54VQxRMWoWBjm3X5QkJSedMWgzCkaCpsQqB31WLvLUWbs",
  "key11": "3GFJ37CRuVd22PZUQ3g3mxCUpDKp5fwTrCMC9M9uCRTUdZuLEhShA4DVfx5xDR7xvH7PxCdAE97ndzwKQ2G6UHXS",
  "key12": "3183znkoR84SgfbmLoxsc91k5nNkdR911xy6R1Z8VxCq9KQNkcd2x44qgUxfb1DoSXePDtv5WnfFCqz6GfRpyJ4y",
  "key13": "5C3XJUoRLtbL3J9HAMHXJ8Kpk4cmRu4NYKmZgTj5WrZKCyoxEmFxk84hvByArUiSUHGVnULqtCwzYRCQwYzDucKg",
  "key14": "2bZAuZnHXFdFxambzMh4w5Py2TMmRz9Rg2CK3q57Mte1NEKnYuvFVyKSyPEGhUHSJ5sSLZuaXiYmHxAA9Z7iKAiF",
  "key15": "2pbzG5poqxngUErBUiGhrraXHJRDrUN9XZhFEfxBE7TnJaZev5XHdBkVFsCUKp72JqwLsCqUYi9YKt4MYvPkukot",
  "key16": "46DAQgsu4BcMJdwYMhRyRL8UA4PGdbKf2opgaRP63JGg7hRgJgNubpvxNP4pYtDxUgPJssZrnUTZmRrG9ErFikC5",
  "key17": "5NqJQQTfoGjApJDhFXrjMAS9EJ1FmihzN62A577gD6GRcB7f2T2fyCWPzcsqsHxtwqFB8uJjFJU3ZMDJFsFGi4BB",
  "key18": "4D4hUATT3UP4P6cbj7trXUN5aqgadSagbNfw46ENs4YuKNy7bHkQqbQxrpyXKYrFoGZTjUAww6WUZ3BzKwYSpQX",
  "key19": "4N9NPDDsggmsMER6bYTQGZR69XM66EExhyj1GkWfuTfVbrXapB3qVBkuMLKVz1jZRz7JXC6YKZstCzdzXpcuwrYH",
  "key20": "aidNsRrxLbRFVED4rLhd9eP1xNxLf73m2HDYqgjypmn1PyhQQaxC6xfYtcRrWXi3qPXPwhGD2Xu2hpmnXNGVATZ",
  "key21": "56eRNpwHnUQxqigGmXVRrZ8yBAot7r7yAAd2oWcsrVexemBDu1r1Kx8hdcDEysKn9va2W5GaEcAo9ewSBPMGxWzC",
  "key22": "5YjVTRSwYs5tqB7zAv8TDkdmMtdKe3xq6BeVJCvBaLJ5fqKXdH5f7LtLtqyzQq9mhfX24ZQwKu6KhVWHzGTBErjC",
  "key23": "4QgKu2XZmm8TaAkFU1Mvq1WKyT9sbdgEyybamgDnm5NqoovuTNh5NwMSF8BSdSCXDZYMwLK8PmcZjihVLFHPubCT",
  "key24": "4QYKuGGUG5wmSoT1SBjDy51ECzvz3NBdjGXPyuUCrCc367qb14MbSVPETY5A9C6adusME5Cwr4tQc77pNLUuy9jA",
  "key25": "5yq2pmqep3uRDmrbeu7FVyQ88nuk1bn4YiL67Axm9ekouzk5dyDJjSw1EnWSB93kHxznisTFzsHVMVJhMmLJC1aR",
  "key26": "67oyvprgWUZB1tHeMSRb8xx5sYy5ki8JV3dsr9s4WHHQ9yXkxjmhitLAUGqG5hxCpUKDcx78CTEi7aXXcSBobFSm",
  "key27": "4nknvdExAFnKcTkdzapz5dyE41x1UCieve1xifFTTPudcBJwQRmrB9Ysga8G5JyeFGi6LTzKH7av5pZpF6G9t8Sn",
  "key28": "4vDw4LiYxTPJ63CcMNJFDrZnphsd6iLEJnRTSPLX38Bmc6EBKzr72novveVH3xQR4QUbrohrga7D1sRk7FA3Spj1",
  "key29": "veEAmZchwFTK6PkTJeut7o28Hj7e1GGwJaGwpBWWps3AnYSADNZCKeqbUgrzchHBNVUS3KLsy3eHsBQ4NGYdw5P",
  "key30": "GyiaCZLapDsjwqd2mEA5aEdfmYh8X3wXvm25YPPacNb8PwCzLrpA5XRxdod8GumktHzi4YqP71zT14Nrhyeic3t",
  "key31": "5NtBjn8wf1vzTwjoKiZjLJ8y8CmJTJ492ZQPh1ggToRzayJALrmApTHQkyAMFak9Gg2m8HyzxsaWfCahQuPoajh"
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
