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
    "5QLfWVqt1Zi2LrHPg5TPciwtxaLkfoEtnNJebzFHduYfqdTSQpWVeVmAkaXujY8UCijT4V5pyXATP9nhKzrxugRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LRQVBmBCw34ZYKUbLLHiAQACUzFJ544SMBXpZuR8bG3EXCKozvotf6NWpUeEGqf3iXoRY5jmKSe7rWLxHAiLuyh",
  "key1": "ZHn1Ra6tEHvCA5sDW1gQiTeppzpv1678YZa6yyuT4Cz893iHUt3bQeaXpkJHdrie4iQsXvnU8X9cQKFXq5B2Ak6",
  "key2": "9MMf5G1SoRo2d4bYtwm7EDn8TepTLRquBS4aYJt9NSeTVGJ8Ejzovb7AY4WBoVoGJRRz86PtdcVm3CMtcayMdNF",
  "key3": "5XvhF8Ve7dzUakpj3DRmcbJyuptoYCZFCNDKoPtXBGBsjxq46F9o1cGKMgjJ2Xik1AxM7Pv3VzvWDFaXo1MVPpHF",
  "key4": "4ykbVy61oN6DYCEWgc8v81r24qbt4TTDCir1zeeimVjWf8JJarkyYdZRaVbNdfv9Jy8ZiFyG66mZNryfvLBAUxM1",
  "key5": "4d8Xy9ktSxSeBnGUvdJ4CPMUSHzFf4tjtY1RrnZ183Gz8hGiFRhX7YcKqBfxATvGRCANjH7FPEpZAj4vEabL7sCf",
  "key6": "3yjNjALWgeXDVKQ7VrnT7r6TDWvA1APQG8bxfagDknEEbFKnETM12Ur6KDPiV3JoZnA8JavGPvdDuNKue9v37gFA",
  "key7": "5aKF2NgG49kHYsrK4mL4TSw3WDez9hsE1J2oi53qU2vnmpdU6fvqp1W5TVP1zQfx4UzNWy2rk9sJDZnZMdekAT8q",
  "key8": "QfLY6QWMAdVmBYqyT9RDqYyziR9xqGyspqcGjAjFWdPLp8qKTSBZ6YqFqmjrFVE6L3jckRbbJqSMEzk3GmN3nw8",
  "key9": "is2b3pRAB522BrxtD8U2s5iAnMYs8pvRiDVm9qGqLez93PZNBwtmedTiZrdTQFQEGmypU6xhFjLxVBTJ3t2vzkT",
  "key10": "2oZfV42CK9Vw8zwMMedpN76jVafNC2hSRMZDxcQNNo57tRgZaqrsN4E3Uw5KMkXabxBF9D23YjX4zm73JypwgVN9",
  "key11": "4ab38ERtZH26q9tVrBaYAtAUw66uHyKmoPDnA6Y8y7VhiRWtWvzAGYd5QVbDXDXTpqu7NHPZeGJAZr1jbpX8msn4",
  "key12": "4kcZooT3EsoC5aoHy3ZH4GsfCoNopNCvkzq5aBKsnyFQtqZR4PCTExnugNp56b52XUCFQPo7kyx9unA1aWd8vJfP",
  "key13": "4UQnRQakG9ihDYA8Y5jU77dVnLgubpuVeKJdgwSNZtwwVKU7cBezEojLhbaJ3SS6ndcjTF4nS1KpF9ixYfj8ASi8",
  "key14": "431XPzZac8HkXAcX83D9NonFg1ryrQqENxtH9DotGn1PnzWRDcjLVyZXxvdYP4H5wbCDPgbFhLcSate5aEJruFGF",
  "key15": "CJ3dxF3GuxbcBHgF4kKAn86hnKaiZTJWBYd2R81ABam15TwjtDLLgjdeTPf1ydDWPqrDe7EmxLgU8R4faN7BTsq",
  "key16": "4PgjrKURrky4G83HgzfQAMMq2UqxsF1hJ8hhUyQAYz46DjyJQhdszL9AWQpLy423sSxjJx8aSxcrbhbCM9vf3dSf",
  "key17": "14fCGm9e5y4nL74zUJ2XYkGBrJvpKkwikuq6ZKc7EqmHDZq1Bh9RsLTLqpz6TshpU8oS1qesEQsFLRrZPCuzSRX",
  "key18": "3V1nW3B8ACA8UFtUecpnQY24puwHBDBzVaXp83PyYVN263pU6cGEyjW4Zcoh7AHMW3zEnNULPNWgzs9tHzh8LLmM",
  "key19": "27rGEYTWdGvnkac48SupftCQwPQ9okbwWKs8M9tvJ26FXuCazTuSSi2vH3EBH4Dhb9sipYgVjB5EMyFnTufb2C55",
  "key20": "2E2syoiyR8Rt1BawxohntdMD3GJaogS3Tks562HLq4ai42RqwSzXbwqNWoPJyY2evgd88uGoSxbJAFTBFHvP1MU7",
  "key21": "5zWZzJYjWyAJjT7XLs13SR52AgaeCbaiiJfqmrp4UWSdHrdgYuPB1FZajofMLXhixXwqfgLYPdsm969w9qHCA7dd",
  "key22": "29Wcr6Gb8w9TbUp32fpR9Avjr9X4VPDby8ftgrpC7uR1VVuka4qXPy5AhdiS6FGTQHY8sEADNRh2hJyvMuhSaGCU",
  "key23": "5TpxkVh9LscCSUZZsmfmz6BAeJa9TS84kwL9k9jePjCWRMJXgBfyxZnd8ocp4PqXsVbFXDx89gTTFUYxh1ne51Nz",
  "key24": "2vv1K7rbHPZMuzDVxng6PizQAfDTxY37kgdBNBFe3cZcGuh8gBZdR2AFqtPDAyqqfqDoh1D5DBW8mcSoSMYWn9o",
  "key25": "KCyhDomC5ChhduPvz6NVCPTzRsHwqPRt2DfKFkmPSKQSWSyQLJv5onk3yBNtS72Dfbby9Dm8zsoYiAuc2446VeN",
  "key26": "3mmWtSyNByJy4CqWogCfWZcFpvvGhosJCA3YGbtBNuZFFsT55vRRHXte9zCwCnD9XfGbG15F9LKZUZJ9j8uRuJKy",
  "key27": "2GnWjmtFvA24DW6eWXtuXFEXEoMvtc35vCsJiM5c1Ahbsxn3jfE7auUn7E4EiWZkJYph6WMgtJU1XDZqADftpoz2",
  "key28": "3wvH7qCG5t1vTLhg8V6xztsatHbhpYdmiPuQvA856ap1hB2RDTn4nAntprHYHd9Q3oNpGgMFCvWZQn2fbxDGjbo9",
  "key29": "3zCUGiisSPt1fLh2XdizWpRSx1uWTSB4gzfpuB11d9Fi8itymJbGABndEvD5vrhq6jS4F6acoAduq8BLFKC2wQJ1",
  "key30": "5R4zapv9dgJ6zn3DuBgmcutpV7FhpXdWrXKTWY1upSzrcdNe3ATYPcLm2h1kkxEnMaoY5fwiVF5t7g4dLE9mYeXs",
  "key31": "27ydkVCmPeYJ8YmzC6FjSrFQGYXf9JsFRRaLvTW9UWrN1YcgW9sXfvVTX2qcdKgPUuEBq4q1Vt66GM5ve1D9ZBu4",
  "key32": "3yyb7gApPqZKKh2CyGCQ2T9zLRzcL8iTpJLxRap5etdvJvt2V54Qavo3je4Vbh9xXS11cJzQtYL4eDCPnf9xrwzg",
  "key33": "2kq7VJex66su5NC1r8M4q8vAPm5sx9DnFuKn3MQigAM7nycGe7WWJgj2iYLmiELTN7hyH448YsPFiPE7p4aEZiHb",
  "key34": "5HTbb5stbTWs13WTb2Hhvz2t8QsUZC2n8YShzZeHjoqR93RkQA6SQWQSWoM2yZVgNW9i87WWEgVdyfnBH5jtwosB",
  "key35": "4GktQa3oBtLffuYoFnD9a7Wdvq9kmgLb6WURR6QZUQqUUfxwa2GEJM37dxtenjcVcCSEEqNuZSbGFCLJ9U1WKbJA",
  "key36": "4a5hYbWCiUjPc7soeiHBFQcEgkVVE6ZeCaLYP6fQ8V2Qf9iT48NTwnyrEJGcHXnxZ5CEJNgq5jfeWdYjKnndvyz8",
  "key37": "24ZWAuZNxCSpUTXGXuHtcMDRdGbgoMaQq5LuKXJSimZonr7X6fBnNvwim1vpFyZKYEbmrDTWngNnMX6PDHY1naWL",
  "key38": "2vRVCNjMk1n7GEFeLrT2nxq6PnaLESfkHrSBEP1irvqXTkTJtqTT9qTtayp5JMypv1RWgtsVceshRvnMiaeJSTfX",
  "key39": "VPswfyEYReWfjc4qvG2g5v9RYiTP6fFPoFxfb7aC1wFg2MFaumXEEPGCvwCpro4BN9mgbzRxLP8K2rftbJ3w9fu",
  "key40": "3KNLoUz3zdA5jB8nGMffqAUsPdwgHQYmcyRQjbqruotvnAHt9SLan2pMhEvdftpvC4is2SMXw94BX24CCWFudsYX",
  "key41": "2ynNgiZ5S1Bjd19Nm814GKMk5duuNtwhkJvZ3yTPybxZHf9tcwcmEnkDfrW14pamkfAL8y9DKvypqD3CCpmrDWoN",
  "key42": "2V5YjqUduxn4KcBFoggpJF8LztVU1K37wnrVpxpYiNP63EnqzvPnXFs8Mr3DVdMRfetZBFvPGBNU29CijBJ8Yr5S",
  "key43": "3B5boVVFpe7ZkYi4xnDMSHJEZbyn9B1xUqTzG457Mn6v3CHCRh1Pq3KEnUAJMoKCWovVNRFntLjq5TeTB63Jo9iM"
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
