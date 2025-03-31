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
    "5b96zoR41Cz8HyFiJLMifS17FEEysMbWvq27SRsEmMDtCxCresUbdryPgfADvZ7Zn7tiAbav7UEHHo9tQFnaxbsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxNzhg6Z6VVBNuuV7RnSBheHEPVwmWr4ojh9g4wx5xGgiGBsiuyTUhaCJicqVyaJypK6e36kXgm79PPACLQo8pJ",
  "key1": "3uHPJTE6TGP3nnQVSsjc6xNUiX9Qsb9yrWsbKCScG4o8BLxByFMkagEGaGubeBtXRVLYo3BQFUGSGAoD9yHeozm1",
  "key2": "5rQc5QX21mJ9KW4axka1wMqAFUHMKcgMzA9Yg2qGMSSDWnKh1TZqQ8vWaevDydPrFdYgEvaSPKpHdgqZww1sw5im",
  "key3": "23qYUybmFSfJwFx16TKrPUs5ViftXwBhKJYKbDA6XuvAuVwv1q7Stmjka1Lrgym5Cy7zoVBC6teF9toDcS4Jrpp2",
  "key4": "TYWFjuTeRPBL1brvQxxGtY5U4Mv9dDuci1XcCVqA4Soy9ZpjkvpdM66DPsbgFqfJxRt6Pe2URnEJv44nUdWnAgv",
  "key5": "31WeVfgyWQcambvvhB5tLGAHyU8TjTikcCJKdoGBzy4v6ymCEPD8sturumVa1Pdq3VNGxk8eWdM66ZHCDaYyV57d",
  "key6": "4vFmALMcQGZo7S4DfdUZGWDex37RNZjsDQQAvydeAru29DfQU3FPSrKWSih7QAbzxSTZBL8K3zQN2hC6D19Ns3Lk",
  "key7": "XiVZZvu9YuC2BaDxEK2LcTbTRVP7zLsKTJuWzxdZ7Zhn3fnp5mkiZ62UBDf5JbuW6HGkgj7k1dkou54Egt3MSjs",
  "key8": "3M7fDMuoUz2WxFb5Yq5jgePEZ9AR51Mj8BcHNAL3gnCiVg8BYDugYfBcmLGL678iU4t8eZXqjeag7QFmRdMTepHG",
  "key9": "49daKCXn2dDWQigPQfYxkYdEnkSFUYmZuMhdbGxXWTyFXjUrpUimZUbs35LPxsDxs7HtCXxWu8S62PbpjeVsQoDP",
  "key10": "2nKvQ4kHKPBVTdwDDJtPRBNmLWGYSLojd6dKzsLrgVmqUgXkdzPAQzK1fJRkJxnEFVBPmV3LkLywaNPxxVTASN2C",
  "key11": "4bkpPLcLsAxw2mBNa5yLoyAuuMrzR1gCdijDkSFM2p6uSjCp8euGHWKofTkz9hTDU6bqUS3gDwDtGPiyjH7NPSGj",
  "key12": "3XCnHwbunpF7cgzP6M4DMDfytXd1c2RznWVPS2N8vn1p1kh3ab89ZJR2NPKusLzkTe4bxFx1B1tJeHWHLnpHF3cn",
  "key13": "3mhKve41AfSpRAMWdb1XqFMkZXq2ChGcgSiLNnndC7ujzuKZKbDSweqyRf5nY2jrQS6wt39vu76P9ziN1X83kk4G",
  "key14": "5A8xfQp5iaFyGddNZbCvpfMgsjT3Z7zBeEryt9XiphbquVoEVYHDwqt4ngXJNYQrLq7sSZ9tB2EFLsMjxZ32krs5",
  "key15": "4JHpe4vbjoeQj58eEyE5TzsytAnqGu3vzhZLj88FQSnxcFsknCQLmAbg1vtT9gXecD17X6mUAbWwu9SqucRbeJzo",
  "key16": "2734Evj61TbJarcJBtAiamuteXV8y6zexSgc2BSPg7TnSh6pVLfExf2Kjhw89sF4EsqSu6DKtqPpQ2c9XNxLdnmN",
  "key17": "uuAjWEeBdXArFmw13EZicxTnTPD7HiuQc5AbTJH5SCuiYPdEEHkbQvWe9RJ1NZsiFXZX2wAx4TRDE33mYwSPxrx",
  "key18": "5BKAaZamvjLWmTaSSxQTXVtWFMahMYbJv9eNuoQmgYbFqmjFkR9Ef2b5F7EVswFjnAuYac3d9iMM7TM4AQ5FExCH",
  "key19": "LTugUPL2RSiftc2E8stoaLLifigySBEbV2dwP9ZKZfYT2HFq1KZZFzbwHYHQSn8jQhS3qTZqbuDUhD7sgY16qrk",
  "key20": "FPa9Hf4vvDRexCLF3yQEZWCV7g7K8VVXWe3677zayo74BQEjUb8TqqEvHhF8ww1Cda9npaZ2keq5VLj3zxdBd8M",
  "key21": "XetBD5rEEo9VcFc3y8SyLkXiiXobNtmETbhguC8KWAABhA1NCxvfQY5zXA3cpyRzrVSem6LEsM1HvNLyaCSJ8fd",
  "key22": "4BK5TEBw9cQ8kYyA7TbdjaYkevGtUHNMw99uZ1i6qKHUff9wBjr56ep7nQXguS6LQybcuPUhVcoDJqtGRzrz4huR",
  "key23": "4M4F8JR2zGqkANpTG8tCYi8Zmp3cLSgN7bLr5M1RhU1fxJDKoNmwnEY1yacSo7vuhH61sH5Cf27ov84UxeRNkdMU",
  "key24": "41vFxu3VjEJHu6MPX12poTME2G7rVwDbo5nPRSFeg9t9Hi1CmC6BPVngMmYt4Qfrp2rPw8Rd5Wcf9ZGXZR5AX5m",
  "key25": "4nyZ9aKBkwZRjwF3oBBdPxHhRaTfyz87kHp4xhV2FhoCEotAzL5YipVncrBsbfTfkpFhMVNqmAh1R4H3V21p7tWS",
  "key26": "4bkFKUmrS46Z2Ba4EASdopv5hRPS1ifu7DNwBbya8z77preUVR62k9kKunqGWoLPVc11iC6hVc3fKRFW2kbmX5Tp",
  "key27": "4Qv83p58iHoeutYQNyviVTLhXttHyGKuTLERejzhXEbc1GfgK2SzHvDjQT5wLNxHCUh1iFrd8YvLndDHzS4mPPAw",
  "key28": "4cqFfz4WTXbBm7FkeBZu9FQ7LMunSeWa2XySfGziqrgPUdYsmNi5JH8F7xDnpbDBtXj7dv4YzCdGfoyb59mG9pqe",
  "key29": "3hiQAbGkGrGPdp7nVSdXK9KeRAAXvm7xreCCYKWdPJKM86gE88bbEz2ab86PUNZ8UBuniH5JjgsUaLbYFHtETMne",
  "key30": "5NUqHc3fPGnuu1vGidYEjE3Bo3yhSFd46fa18kSadb7gUpHfVdCbDcPRAav6sKpmLzzDHWvCBAH9ZWvX9rHAbqJm",
  "key31": "2Y2a8ba4SEB7wH7CUJbwxTRriA9u2GXWwoGPgmCUX24zupfkUCeWFun8F1dLMpkLigESS6JfoDNAUJZKiRtwZcKE",
  "key32": "3Qj7gwgFWACZtGMjVxJ86AYv2YsQQ4iw1Dr6xRkW2ChqG8xYAF5H1UiNMdM43DqQpWBmCbe4hbyZWmmwcz4mCRrY",
  "key33": "41zFHcYQNP93XE43EsrR8vrd6RJ4cuAedEH5WsdR58cYucSEgvwbmJbR5pF1ub6sq1y4vEGwuQY37L1WUrryK1Po"
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
