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
    "4LZziX2Xfquty5ceSd4b8eA4KuzTKodpQhZZdrdXQSuEZeEzi5XLvzk9D65croEUjvTcXaAXW2pxzab7GuRwFDsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uFGBAPMNA8w1FV8rhfUwNziuwa2n4ntoCXP7HBpkgU6USLx7MCmbhQuXwPhrMFo7Q78poq9AkpsA6N6Q8PS4Kri",
  "key1": "32VBNrBZHyPVMrdrqcBxSrNBkrhYQCQTfNvdWgdJqRJsMBmwnDTKvigL9guUYAMJGYNxSaqvXYAP2kny3fj31Pfx",
  "key2": "45Zr2Fe4x4fcvuuj6q6VWwTtkD6UUJmssC8fuwzkjL8mKPioXsCwDuEVvBmETrmuVDJX2Uhd1dPR18a5Eyek8ZUk",
  "key3": "5vaYcckA5TB9APwV1i5v6wY4KvYRWdvqhRY94a3obNxpZsczasvLVK1kYhVPkMc4aoY5FqETuGaEicpgJzvy2ZjX",
  "key4": "3bsKJ7MnNT5hEdKmd9y2iscnMBsDrFQZ6n8jsEV3ZAkoyKHy5c6iixXgns2q1vfkFQx3ymXRgyWy2L3XXRBHy21a",
  "key5": "2xTPk26uHdkeuT6eLMfq7PH1Vnopm5bd65yfUiA5JKE4apxwg89TUos1im4fhoJGpZCDYoPR74oFK6BSTvwp7ySU",
  "key6": "2LS2BKrKUnzCX7LSTQad1e9CPisDVcxHFHAhm8UFxjAr7ftqAVjRt1yeaZE6kqJxdHHEkpZthFZo5sBEmDiEvvhA",
  "key7": "4iZidcquAqzFTtQYnperpFS1MApxJTKxaqAR49tF8vjmg8Tr3Vcip23XYApcoG1QeAoxffVX4WM5hEDKwy2T9KiP",
  "key8": "3vgff4hb3msWxAyJTcmVfYLhy2qWQ9RgbJLm88fZZqHWEPX1g4CCNKNQiVz7BvTDDCeUX1CVa5KyximnWgS5Z8xB",
  "key9": "5G35RM5dB8auUQsT7fWpK2ecbzgGRiZmYRPbZjV3tXKC8DPfSzwKpE2PhJC3NKiNiccBgfjL8aBntBVg2zLzRwik",
  "key10": "3tpz2kbDF7drgC9DdPrz43TrGAsDR3BzPUzc3s6CHMNBJSXCTyew9brQUFqtWV86RWBaeTbGFJ22Qwm7XBnoAReM",
  "key11": "spmEGj6ef4AhFpf6XWApnoncryWwhoYfe7rKVHj4SvEQirKRhQvRBx2kh5tTGTUkESXndSP4juSCaYqZDh6eASG",
  "key12": "5FwG7KqjwFBp1zguhMvEmgfNGciFUdYteLLb4wUmFFq97XqeAfvn776bo8qDF9J6sWkA4S6aUtPygmVETUBfwJy4",
  "key13": "3ShVkcfHpB7Z6dbMfyHKmA2vY2sFFmDaaWH8f8eNBcKrK4rAnyscZHfpmABYi6587TrXYhRUybmFVbypXfaZ7YeA",
  "key14": "57Pph9sExFmPCTccGn93VFY9ePeDUfZrEBs5E6bxkuUcaj667epWwQKPJTx1dPFBGkqUefbnoGCKi7U9kzeiUQuh",
  "key15": "V5wsFKXAuEAd4UqSsznWGuQUwGrmyML3FZ6y75oe5Dyqz5VHotanjpBM2RRSD7Q14TyzK4f64y2QNFFYzqWarR9",
  "key16": "4h6Nhv8GcFHhR68irdxBA7cQ1obNpkrPmT2WxHus2tqQvmgafsDF9gi9C9LJ67Z9BXpz8i4yvtBBQWTB1nFHAUoA",
  "key17": "4PFXiG5fhYz573hNewbbf2Lcch7Z5gvATaztjDnB1eJq3VaEiBbccY2b9LJc63rtCr9RiFNQTgcsHZEjV4Aehe7V",
  "key18": "54m7RcQA3HxTD1W7cFPVAMHZ8DUTRsdBjYPTgRaQ1wYEKCGg12NBspjRrB4WyDuQLUT3zaaHk1R5FCDq5mgBygTr",
  "key19": "3V4DDy2ty9RTFU2S2J6vhpdQ3arDmr2kKhdmVjo4uy7b8qZgRkzXGAdH23CEksDLK3zvbGBG9KHnpztdTzbGUk2e",
  "key20": "5fYs4sUJQ5fSXBv33NmN98KffFoX5Hfas87bepJEj3apWm6u2suzAnVC7qYeSvjCjP511AE5TurJ1286hYv3YDf2",
  "key21": "4zuA6pAEMgda6j6VWKERW44vbkzEo8XFkLMCYm177NADc2oW37WHcLHqTfg6PD2rMnyExLypbSYowygLK3146joa",
  "key22": "3VFxapC9iYWdXxK9jpGuqxyBL56iHE64L8S5i33VGL1tPGmsoMmR19K3EUHPiF5hdrfUoH7gbVrkxfDXczJacM5Y",
  "key23": "P5EjHTtKzwWTLkjF3LdF3mLZCf2ekDyvXTxgQtYogUnshMvW9GarxaT183LYr9KdL6EyZmBdV9yBQoFHUdwXjqt",
  "key24": "61p1KJGWt2k6vMbcgfVHYicsrXQcCyKQSNPqLF4cVNnfhfdcvWPJ8w1BYvugLy7Ba7wFTKsDUV66X3YtjC4Nxk8z",
  "key25": "3mqexQajxgn8hjBEDPZBFhEcWGHv6wjNG3JEhRr7FnQXaBGAFppHjutK6NsvWBaqii2XWwgb4yhnHWq7EV3ii9p6",
  "key26": "DFuD7PEBt3Y3is1nU9o8kth5WUMWNadxYRwPc67jwmbtZbwkkCiwhnb6B96FqSzP9pFjnj3f2kr8QQRuyvvHz6x",
  "key27": "5g4y7a3VMVikUp58UYqcod4FuYQWbioLTqgu38F5v24rkkeKxjB4m4Mm5QbsU3L263jT9EnQS7LNjh82WFVYnyZs",
  "key28": "5WQNCtD92AkYSB5Hj6pa8dtviddahNziGQENWERScDvxk3RkoJgWn2q9Ux8cf2eLivS6iCgoEVs45Cpf1xRmkeW1",
  "key29": "2Xdfc1HV2J9XBk7d8uLvHjvEj1unwcCLyFBvrTRQQkeeDzn18wZtCsvXUaX4D6D56cNgbzGHDiB8hLKSY3n1bMGC",
  "key30": "HVDUSmQ5Z5zohG5pQzw8busJyNntkHbYDaAQiV86E6pk26JPGsEnV8yg3D6WAPw9ZPEFP7t6Btr4LqtCZ151xST",
  "key31": "4QneWjEPYxnx7yEfpe8PUgizp8y2EDDE12SzzGrVnEJx6ogyxjU2bJX9Cr7xvdfavUmnKva4B7Z21uJwPjDn7mGJ",
  "key32": "5H7WNM7XE926zV2xKCA4anuFJdZSr4L3j9GULaHzxfPGm7uYTu4BEA2ttCr3U74PFxeAmSWgrFmGSYu65gSvL7eD",
  "key33": "4ayzRhkNRveffXTsVJwbMTX4tzCuaQWDeA1Gu99V1DbQKiiPgoJwadPmbsZFxbz5b8hzq6KLaqpTCNvGaQ97qmXt",
  "key34": "2L7fTkgwFfLcyqBkpiWz6efLKzJYNYHcNrS4MTaMu9yprVZFv4faEo11NVCcn2hoSe2egEsiW8wx4yZwYoxw5FRi"
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
