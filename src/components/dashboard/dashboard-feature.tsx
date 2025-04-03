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
    "3WoZKMEaBKdCbiv2SByJuyLQ89wjUVhLhmoatmUUhGi91BwSfCjbaPgJVP7TJw3fKB8ucHHHEZKRKfByTZXY9GQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ctdKP2uMDjvmdr13fgkp4wCJiDMzhXW4txozLHM8zpH1G951MyHy8AWuFQunNBMRMFtuVtx3VWFLqf1b59pUi4i",
  "key1": "3QfRBPHGGMeLWT4aLbyRW5VDewQcc7SDcgReyXmuCSBTVyHZdU5DYxapZu3qXcNostHBjrAguvyXMGWa9MbE67nu",
  "key2": "2CtDQxoT8ohwzkB6yYrzB21AAj2Emk8jPrpVf1VNgUPXZwS7r15wvrq2VjoMRGJ4KWjZoxfnM5Az4TJLxFrQUTYd",
  "key3": "5Wk2ogoDpukD7E2SB84pZSVFNdGu8EYWiDUcwH7dyFA3DprRWfsr81kn9jxNokhr9mBFwKyFYmhRwd4XQCqW4uwx",
  "key4": "3gPvRJhh3P5PerpYszZYvDSjEqsAJyWbm5hSnqF9ChXUSd236YPLpjsp6Q9bTSjDFTSoN16u4NCHsPkZtiudcV15",
  "key5": "5aThTzfLtp3cf9RTM4PW18KdagcM3VnmePhpB8FB4E1uo8syzDV4MhFBESaAVnfKL4XCowkSEaCknAweVA8SLAcQ",
  "key6": "4n4qrwTqBSQ6AvTmyUPE9kHV7PrW1ZhdZj86ptZSUzqpaRMWqpdcLvNXQxCofRZCtbrURiozgGsnqwrzUA3Lwr7w",
  "key7": "coxxQnRWrR5u3xoPgbGXfKufDpVvX8XJ8F3WXM5CotJgNGZd9a315aXQmbFyXs3WVs39jvWCAYKdT9TJ95gw1vL",
  "key8": "3zRkCzCnMq72P5WWhD6tGSB32rjAfPDeto6V21qmgtNuobXzkYz2yYHHQuZA53mYdbLWTQJog9wHLYd4siK7STrz",
  "key9": "3RDV72ko9jjEQu7BYoYpA9b9YHvEuvYDyXFA3veNurrVhGEPN4MCdEALqZ3fFas9FqRUPw4yZ5bPZe4WRGrTKPE8",
  "key10": "yCR8AdPE5z8Mq6WDNJHVasbAbbFWn91WBotfMqNCnGSceJvbwy8bL7z2FAcA4B8iawHkyKwKpWxjz1WCebjufAK",
  "key11": "B8yas49yHvPU6QGB24hZxVphfDp7EX3w7BrUpsWjg1aiJT8pXHWjEpHQqr1hsH65ZsoGo96g1fg1aHgQFVbFuYc",
  "key12": "3sUuspF4icTiL76m7QEBcnf1tBwZ7h4kTvvCZrsvxETzouk83Dv1yRnqgtbQV6JxgRFQyWYjgTwLqFjHkXFiAbv7",
  "key13": "3wBR7AfMhTwuqmhqCnTDoUDhzqyH3J9dGuGCfyVJgmPF5HNkkHJdZP6PmgHeznykrHkP8sJGwZuBqDUtCQ4VJbD1",
  "key14": "4AeVDKnfYWbxRiuyGKoz96CaJGs7goeS9EK1ycebuncqU3vTcnWS8LmWN51EyATWrFt24dyBQJksFiPHhPVnv8rh",
  "key15": "5HPpkSvbVdcU44xb3iatbnDv4sPo2VeVz4KUTY93VYpc9LWAYKLsvRpXFaRzQHixUzoEchsrQaoFzemjrKCztc65",
  "key16": "5wykkGS38WJH2QGH77ELQCAcWCRaLdVBw1YcMPh7dVuyM8WBtfpwm8suum55fkCZgwGqmgwoYWW1e8sugctfm3EC",
  "key17": "4DgePt86zMumdLGH3CEYX7uXFJ3i3qFR3kU515jenLa7RGYptJGcjerYu4wnudPoqAJE3VWHQUhjvivakuzJFFQf",
  "key18": "4yxjyiv67mgVRz6Gnwp5nBqQYgSxRbbj7Dxu853FNnb3pR4NEhq4fFrVm7ofkLrTGuEyGstx5FBK6fMjRkWGwhnn",
  "key19": "vJ1zs8d37mMCcyj9rowJ7ruxc3HjhWPU7yCKymLedoj7FxhiQM3s3cD9CPMuB887u5TK8CcU5s7jKMxv1s4R8nX",
  "key20": "3qu6J3REStcywYPu7zWkUKLKcFo1E6cDTxPrq7yrjhHVNHFuBnrz6enn78U9woXpbkU6hWos3mVh5DYXc1g6DTNq",
  "key21": "nWp4fX1yTb29Sqy4DLx6eqTVPAZ3gJUVJRGEnmuHuWf5LK2ErAqJJLjMZUXxUWNgAtWfQ59HLLALCiDb7jrPkqq",
  "key22": "4hbQ9oexJseZ8vhKZSWKp2T81sYbdMjGoQhwJL8FE6REr4nPSEqBMKABjvTdU2pR9gHoNfRi2hHSDBYNykwHjdEZ",
  "key23": "3ioCYrVw58RypwRi8YRQgg2CMofEdRPZ8bct7znD3uYsNJPR6mAtdtkxqJJULGb42VzLDxL9nubvFEcSWCEZ5Mro",
  "key24": "4U6PEKfGJn8F2jnWFx5hCeyLya64cgzuV7qjbhYsE6aHHHMAqHNJ1UA94GpPLZDWVTfYizE21i8GF3ncV17CoCxw",
  "key25": "3opeJPiDezMxJVQhLbnaWVJg13ZrmeX6pCLpz6c1io1edJKTBVbL4XNbzoDzWx8b45qN31BLkGmbqUEnyxVS5dJs",
  "key26": "5kCj57eCj1bN88E7hwrjrLW3bajzdQfm8jdSBdKLGjzB1fvvTujfqABxeFcJsA4pYwYGUxDSF8iCSNpBHETcAukU",
  "key27": "4fHcDNoYArxaAgDBU7PavKn7WfA6xL2KBecSafpX3D1QVtGWWtwGM5pM14kkHvffaxPZBNJEZsFTzV93RoRPQKxd",
  "key28": "4gUi4bv46r9Qg3DKdUoYQSAhgzEHHRgakPhN5dH521tfft87zDKFfYeeqXYEGPBVmnwRfAH5Xz7ER6kdQ7dYH6Xu",
  "key29": "2QNR5E5P5fXUDysdMLwX4ysFkUXMYfdzY5MQjW1ZbLgsQMnPFujuQUZoreaekZcWW5AEwtiECUNLUKoaSzJeiJHD",
  "key30": "2xtGWxNtDhrdM7egwpxQMChBupyAEy242WGwgKhPL8aREetRJhTxQVyw5AKE75wDCoEJXw6ZBLND6bUZVzzA91Xb",
  "key31": "4AkhqGgsHVaVA1Y3y5f5PFjWtQZqS1pg2gV9YxmTVFyje2i14GAFRKCJt8V5MgdbqppJnVjtqV2Ct83KRSDXRaLy",
  "key32": "5pDFqGULgras4V97x5msMgMyDw38rwBHU6h1ZhWj6Mb9tg3nL8TvaEEofTVH5DHoHV5pEnHU83R2zFKSSkaVgMoX",
  "key33": "3emsCuTNr4RZ2yJuoE9jYgAFrchFeW89XFCvXbwLnUWD9zQbznbpHBHz7rPw5C85ymFSoymovd4BxuncEqtzFyaE",
  "key34": "3XztnVss5uoyHHSAg2UqxWCLGYVeFJLYKT8gGnFZ1337GJ4tTThVnzVSAkGzvLTtaPSYMr7gdxQQ3WG8SMYGCZL7",
  "key35": "2y5JGCzyKLnQMDfXG5fxjCpMcq91VDq6FooQ4EaC4WUHQRzes8B2h8m4QAZGnCKenq5BbAe2Cs7vAKcy3oMiMMKi",
  "key36": "3DFbGUayUw4nF8KAoKE8w8YCMCzzDKzRrrKgveMMCojC82fog5BqsusyrDASUVJvhw3PQuH9Skm3xpADmmDt481q",
  "key37": "5W72DFZd4q8UKQjzZgoUCAG3FfnxeQW9iMbMzR9vVcKp8fb5wwL3X1GDw6XUbLQcovaVPpBw5YSaS2Ut5cWLEHAK",
  "key38": "5nFPwd1DtkgoSkpjedeetoGfhV2TJCq4sVJFFK3VvZ1Z92oWjD5retNLXbCCYu7hJT8TrubUscw6DnEtNsrdTLNM",
  "key39": "3JfgLdfAjSGJaMtbmB6Q9hPzA2bartDjZRRD3jxqSm1TfcUgkCaCZrSUmwNScf4UkpTexu98pndpzU3qanvyTNVb",
  "key40": "5NxrDZvHAKMfFrHs7kyZ1tHcRmU1ZBFBHFji5sPGQEUbsv7DUrJpgX6c9HornnjWrHFqiVSjcvLJ1GYSdD8M6B4y",
  "key41": "qUs9wKozc1RNCHtDhRqmX2BSYW36Dwyy7i6E1oScz2cSmTCFrq4iHJhLiDbN3Bkfijqc93BrJdLJBN126qA4BRf",
  "key42": "5MCTcbC4JStaiJ4c6fSJAJrg1s9BhxPQXfaRuhG8weQZ4ea7m9xo7dHSyddq7nLn5Gii4rkHEBV4JX1GsaGcpLKA",
  "key43": "3NFuraC69cqsjEGBftHBXYx1rdc1L9XVmnn1SAwko85sSKE4ezY5hM1eKze14yvD71Li37UFAKehjjYJamRasDgM",
  "key44": "1TcB959beZug8PhvHdE7bkxhBMRxjFiCsyuCpa5aghpNAxm4dt1pbmipCZ5KPGNSfP56ewzAkEUGqK1Cv5beU9S"
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
