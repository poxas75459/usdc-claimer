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
    "2czAd57yohTy39pBMC9PpVKqpCoQevMvYr6DDq6ZsfqB4irsBDhNsxfibG3MLskmCVq3SbgC7PyUy7x2Rjef3gFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MhxbTEgEZwjvX2xcbNshGxHPNkesoRXCQPjXkFVnhzXdZySJmT9ZjhQBYUJcr2wrRUDh3pkorDzWSBDdUAipmCZ",
  "key1": "33bEk8WAtZaVVSpSbYRdvxLpc47CBEt3EXCPAezgbys496ZprCCc5NgFrVMSuix6TJQbULUzhzBgEbpQmUp8V4ZH",
  "key2": "3fJMnFaUuNK6omy4CP33QVv9q9Ve1mpzxwCyvu5gP15E6xK5zgZbd62PPwufmg4UbMarft1S6MFE4eeFLtDfQ7Qq",
  "key3": "5QEk8nnAkihHsRYxgfCXcVwuMfnNdsyEwVuRPLtzemFt7JhXaYcUUs732f5bTm1xMrn4K92B5548WijWwd75WaAz",
  "key4": "67HUFR1Kc4bZ2YaSyDzccqDArr5W99gxSBFM6tDqUSHNtZS3qpYKwR1gtg8vvwWczKNr1tZjt5T6WgTfoifN8RCR",
  "key5": "5BcgyR4qB9LZdGgaYPqK1YPXry8aWwAPKQPwqrfWY1Lzdu2zAfanyx2Svxs83TUfDsfncTk5zqmtjQS9xcxZAXV4",
  "key6": "5EG6wMa6t3wWxY26hCiuRUz2N5theQRQUca1KcWg7vayWaGAH3VPBWVpNxRcgPdzzzEWCWC67zKMtPXGmvwyu4ny",
  "key7": "5Ng4YdqihotwED3dHzHxdy3KyXHTG23tGBMsRjcSSnca8QVAyNMDxx9t5mfkUfM6b1y4rbcnnjjHURktXaBwpHrs",
  "key8": "41JoGoSNCwNEDA6nKs2NxND2jTjuQV9StLqypBQ6i45noL4jNyUVkFan5TgvLGN1WhRBCNsYLwDmuFLAeARy97kF",
  "key9": "49UhvtQnyBUVcvKdazrLj4hQrhRqzqnunu9gUNq9HZ1RuTpPALgDqb23ez3d4WWRvTF5NpNQ8hy6QwTGLaXcVACk",
  "key10": "318BzfvhXNBDuPSJiMAjvvbQubasUH1wgSGJYCjKXYUvw5DYLq6TpQovNDZdCcTzUDQFnvkGwSStsqSBe2oT4LoQ",
  "key11": "46iJWiGoYSGHyr3LkAPqwd3EXL6ZsRVrgqJjCNiwZs3FaWaz2Ngh5fdn89ZRqdLwds5cjHsaWhqay7fKMUo6pr56",
  "key12": "2SJcQ5EtqCAN4amXhxY6BvuKTy2Ea94B9nRvHmfEqoP6roFHjCEz1mJNUFMcjRXy7BpCUaWobvrxZi8vBiWwehMK",
  "key13": "2VCxZQ4SeoUoTtmo3yf578hpgoGDfKdnjy1w31Byut4VxenLtgaqZDcUohv6aCGGTerBbwKjqC7VSfGrtr1DeD3k",
  "key14": "5mKkGn46X1P5PUaMvqRPRkCjj4aoEzTo82L58ghYHdspzndWrpTT63pgg8VdPscpm7K6FUAfLsbMWLm4Mctr9ZhM",
  "key15": "39TWDvZQqCsBZCCHxHC85b9HMyHe62MYUgt6RbBDx4nZ3amxLXugQkPPCkMHe8oHJLsAiXw493L533MwyXR6Xysw",
  "key16": "5VRbJXxsMGqqZCZo9Ci3tHk3JNRpRXx5JAvy5n2JbGbJt9JF6iA9NRyunPF6G7VVJ8tYdRisUWQfErqXhELQVtQT",
  "key17": "5z1uDdnnPYS4icQj1hwsrginCoJ6APHqEY3DbFejbSZ4fwqRrLMjdDtLg7ZNW95bs6CFHYZWWkFGwhZ3pvJjgcAK",
  "key18": "2wH9Pg1vqxwbq7u6kNu2HyTAxXLuGTx5FHsrr3DJHnt53DhrZohvPpXjzvRa8TYiFtkg7qFe7caf74SkyTNeNtrf",
  "key19": "3TbYQvdLrctJonwiN8qteqsjcrDWu4rXkyj89sMWM2FmkVCuwnTjsGWe6j4S9SDBdWGX5fhb643cENyN4xZT5J2L",
  "key20": "3R7UzAAkt2nRZCDXBKAoUetBERARhaoD2Vu9hiurPWhFA9gUWF1VTKAhcrBjrDR99N2DgeW4A9gBq9Htoc47VbSe",
  "key21": "2m7v5Y1phTL9vzk78YT9JuXtWTpaiBtLYqQ4ibVWeWzGUgMqfa43C9b4BkzmSJiPZsHyhJFSde4gvW3aUYjkMcBB",
  "key22": "5p9dp7VsTuTQ4zyWLonsBbpEqH9AZgHTjm3ApcCH734dAKuzcD8Jiu4AbMDxy3nq7v9xWQhu6E6CusivAaRt3ogw",
  "key23": "5inR5CmhQwoc3XdqkZESM9xPjQVw79gEnfMRZ5diumyvcR5Np6v9FYtcqwkNRV4q8FHuxQ8GpxPsJ5e6TXp2MqB9",
  "key24": "4Thsu1jsuzJtzmbUGJSPnM7fafNKhLrgh7SphQncwW4YVvwDWgAShyY7huhz21tZMQV5XxqWcM9Twh7SmdK97oC3",
  "key25": "4EuDp4qqGgbwYTFvNkbBPmB7jBfcs1cr8Zm4U4NjAuAmyMTMGaRTbTPESDA9HdfbnpND8a1k38F47GuodhQw5PVZ",
  "key26": "4JRBLGWrSJ7Wu9DmmuGJLzcygcsPdzYZNZgFddrnFqzuULMrr8bbWhm7nPDTMVURLBAmY6Jd4F14Sy8uHQLqAmHk",
  "key27": "i6NCVEQ3EhRVLeQyECbFRzdWjRhTWNPFJRBSNKpnM8ZJVumzsqJsCjFpf8wnfhdjTXp29g1j5UGrUoKJYeuY4Ez",
  "key28": "5XDa4E4X296zgECh8ZgmWF6UvvwrrRVpFEjvUuFm31UyKqEjbnqrz9Fp2KCFcLxbSzTxixt6ib5zcVPVG8ZTeEGA",
  "key29": "4sPj8fekELscFUQ2gycaXKJdgyAhUJ74KU5148P9H1m4BuRuDuRPsg4rrj5ih9twiQkDPYmbXJLfDL5o5qPR2wGw",
  "key30": "3Das8FBB1NSe22Ngo3hnrcdJeS5YcDMpjko9bMWBmofLNKAqV4BFiM8v7sMom5oMruFCQsk1yf5HRPs6bdtkQPAp"
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
