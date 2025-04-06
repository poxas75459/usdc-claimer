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
    "5PxzieZc27uwfbaE5uw64QRTfymzNJ8MeRVtVZEZ5UGX6P1U1jEqVHhqRUq8WBVFT2SYqwcVFgdEMz1tLPh9N5Aj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65xGDVjeyfb2K1izWEhej5XQFrU9uvWTZVaSftP1vNvMoZSebtmJ2K33abYP4KQLEeawTaAapYT1o8UUqpJckH8J",
  "key1": "4wZn7mzaFg4HhspCfEX6obLSNUcJUKWdt4opZMwtWKMmFAES99JcN6yFhZhW3UcKQiKSQtMwBJKPY7wB4hBYk7oa",
  "key2": "QXSxgdiumpzXBMYELoE187yoBSiT4vYtGjkdT4zo64HsjQEX5SnGHeuxZRS1yBgt5rxT3pAAqR22LukfQDxbvyH",
  "key3": "29UQ5QXNPMdwKMQUiXGMZiqXUMXW45rtqBx7NHCyzYuGe6w78uBntKt4qMj5Eag52XEZQi2M8dX96AzWpAVPXgkS",
  "key4": "2nBME6X3vdnHHCU4h7u7fagtwaXfgMnLR8BPS3hGGJf8yiwqF7CDYptAxSTdkkcKAHnyxjKWmKkwbCswfkpBN4GY",
  "key5": "3q18cSYKuoss6yPLVpUVEABdLD6U2GiC8akWXGWdHE7aBAtjQ3atYHa7i8oz5xb7o6cdVZn7SxVszALHQE9yc1oi",
  "key6": "5pTzHq7xMbmre9Y1SQdZake92NL1eUk2u9f3joPDqVmafFN34mQV1sX3XnTvapXpRELviGsHUrhD8dhg7mq7RgTH",
  "key7": "2VZTd8R5EqF69CsCQUHV2cUx3S2gAJMwD8HKJKMyztBFsXUJZUunJY5W17uHAGP6CYiogxLsRfDzLKPZCCzHRiov",
  "key8": "4Bj6HxBU34NwctZy26gKQygqG693QtwxdpHPE6kHG1VjG2XfvQybrt9V4K49DYyUgprhobt4DfhyYB63xocRqFEi",
  "key9": "5iMJNsvBRuT6afMcUCWAmt3ia8KrkxVC1Du4RzQ6Q1eoUbrNK9hAL1ErfxP1asmrkUTVdNePVp1Yw83JoDuarS8t",
  "key10": "4FC7R85eU38UUGFJ429u8Jz8wnC5TfsnzXAA3QHiLDgdMVDUuuYANLtkw8mB6CFGCkGMDDTXf7CHKrohfUwks5zi",
  "key11": "5U8rGE5L41RrgcL9d775E4CPuxDLMZfVRRDz3t9LZjweYefikMsZAbs9dkYYHKnj7BzrVg4xMKCp16Qshicp2NeX",
  "key12": "3VhwNUcHd5ehMXayS9yN6Jd8kRzBrgfVY8ZdiUZf8e4YfSX1rzHW8mZNHroTyri6nkYTCjq15byunajvcjnKFWMg",
  "key13": "2buwdT8GFPp1vdeGzj8r65zP5DxrDRyLrr2NsBwZGhMsRQ4wcuXhbQFqm2aB8R7yRFM3JMiVLiTRYvNBjsBj2JxY",
  "key14": "4dqgSfrzZRnQUJDgmGjEHzXBMTQPHF7ZWSJGvJP5Z2JpF643iA7tYKKRoVmZ62UtnUArHDpjGegaHezrq6DNHFMx",
  "key15": "22eJUa6obsPxDDdhTHYaJVVPBmnFEDcjZ6qvsSxBEM2XXKhrh3DuurV1AqMeigJaJpLd4x8TZBwthefi4FvkrEkJ",
  "key16": "p8Rf4zHKzmq4meSCaQcn8tf3ckhfsYysXAzeh9D6p5TH9X4wft65hGVgGgQ6pXVpkEVPiuN6LsCHHGSHdKs3wqe",
  "key17": "4D9kSLDsoAnbprGHV5aP4p5Ni5yK7jsNwpr2gLDqYuT9caMewLPUpe7ZAtzhAhPegBUDDvjTfFYdXKsemn29mUSE",
  "key18": "62KuKjiNjbhnomDvDeQ2SLNFXPzPRhGGbGHUXGMPBBruHVG375TLAuMBEcemSvJEjUZRvFhMzHBk3S3TiXh2cckf",
  "key19": "5NaeDoCYgVikKsBp4xAiiodZy6YwjvfvUVLxbRMyCgm1QZe4Cnyp55q72TSELZYNjsDeq5PeAZa7Z1kvkqKffbEX",
  "key20": "5cL8horHffwWyo1XdCm9iDL4pqBkv8wzQvz6b7fWxUhr8QWpb51B631zR7N8hxGGjuVdf8NoMNfZ9anXWG4pLvs6",
  "key21": "2d8konqgoRWbChudvqYVMDfMKyZgpZ919DgSHjgDTiV62kpAvZFWd3TXgGX9Eh6afK5z3yMT23mvEww4XEF7TMKP",
  "key22": "5jRS6mXeaZ4Do2mfpp3oSj8Fr2RdB6TzFPBczSSQT9dWJ2fhCu4j5H6qAq72QyZErQdXTM4BUQcYn9gbatjFKBb7",
  "key23": "2nYYybcCJv17PKMxoqvN1RswFZgzheBiX9E8LbstsYfvNPATUPuyuhtCr5quLjVGRVg6r3dcPrxujiLnWdZR3ZGu",
  "key24": "2QFHayXyATM3LsvLshT8ihtE38cS5LNdk96je5gP98p6GmgRfDkCGTw2X5VnRHKv9Es4GCEGg45NNEEosMKQGBmh",
  "key25": "5JumFPbxpcEnkXjPuGiphZjtZmpEVGBrzCwvoXqdmnSzBBebCLySmaizLdZXvGJBF2WDPfJZHqgysRnWGCZKv8qh",
  "key26": "ULUSYnqHC5fa3i6NgyycA1zV893NBkMFxB49auKsWFPo849mYNKJGHPciMSgndXmoV2PzedoQKjPGT8iZejticb",
  "key27": "27Gfh9Gn2vcC11zHqASnm25JajKhNUE7mNtvxPxfanJgiRCqCmR53AnNqTFWNzufMwwDwrfnnQYLkcUcesv67ukZ"
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
