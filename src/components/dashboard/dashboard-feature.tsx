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
    "TDULrAY9EVyK6W1j8GjDyKqgExt2R25ghmjSZ14xYUHARt4SjfD7BmGeEK8ENaLg2zMJXrcPNMwp1RLdp61VGdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4APkg7VsAuKgDseQp5j7bsTmSdTuJ8VcQ6piM9BALXoNttCnFGritJDMKGnam7SMs3FceMDnwmjxt948i74iomC6",
  "key1": "3Hbodcvu3vdfCzV5M5MojNSmoLPVUJxXNbeJFcmbGFVMDJfLjZuU3aAvr63wQ8Qa2XAAer2ENxF7L8VAV8pqi7bV",
  "key2": "2Wu15KiqF5TuJYMnMZwRWPfxe9seBnpXosyQx5Rt2ucJVwRDZNb4AquPCEkSFZFhEjgyi4hpAimwA4nkouurzatM",
  "key3": "3ydPuvDiUVagujrt4gtVU1R4jgArPCuwV9MkbMcN1FAqo83DBdouECJd9tNFXZQG1uaddnCwn515sqG9fDdd2YNx",
  "key4": "4UEemvkQNhfm3uAKp8TrxeKrfXUHSqBzfxegHdgy4UGPHkAcaxQZJUAFN6F6LfQrNUFoyxgTv55GRcLNkXwLbSQc",
  "key5": "57C1pKWj5qkkHxUCLaa2ReLn2f38LVUFcqKDMDBWa6YFgp5RHSZ1b3sjdYR91TqCxSxjTUd9pfUWtNoLzgeoDFwE",
  "key6": "288RPWdxBRpDeiBM6W6mrsCRiBtp7per85a2LmZEgLQFyU8YC7QB1aAjmgtm64Nhv6qQPxrUuNj3vx1JudssMNgy",
  "key7": "4XaG4bQLdvtkZdTgShyDJHZMUg8FPrBJsuCnxC8Z1MJ9NY7jApDahbJU3ZKB7fL6jaa2CsWQR8NL2nfwwKcjFwPt",
  "key8": "5BjdNjGStEe7FeBRr4UWykHtjthUJf1TLqmF8EZkyjz4mshte8zyK86LuGUMK6Yz6opHZd273oxhH5hz1RQDxeSH",
  "key9": "5JounHicHgfNDTKdrhCDsm3q5F5RSwStdW3JqX9ko5Po9FiKCxrvikpZ7DJJCQ7Mfjb6THnw5uoD8vJwC8SrAosW",
  "key10": "21QgDrAQ7HsL9hsSjC5rMhVrciP4mvzf46RZR2Z884M5xhEyHVPfjETFBXojPB8jJWDnKLj4uzs66mygoNvcXUQe",
  "key11": "4BdtB6h7m5VSw2aXCc7aMiydhT7NGNfDquio9K4D6xV3q9ntC6WjHSxMdA2ih966BANkEKfbRzkBPDzFGfJLCTkm",
  "key12": "38Ac6ZYi6BqdmTLkesXWPU5fjBLN711Bp8KLgzpmVPPKF1rLZPDUxGFrSwDCsZZGGb1YoLnxZuCo4tmNwhmhcafe",
  "key13": "5mv4rTpPoj7xq4KBzMmRbsC2Mtw4K9eDtuoeaowy68ahsTBtkvy1DNHD8rQbPj9As5SJeQwH7FCfge9iqmeVCnZA",
  "key14": "5XAZAowBYYk8B2vqMzHFhnaTuNmHpHjC1NLDu32nUAeJm6qALchJtPWG2PWv825KpRbTrF4mNtHotWdCr2otarwb",
  "key15": "mu4B8okmuPUztaDqxrRMy83yqTPRJEiQuDRvWk5ByKpf7jXXRA7gJXVstbRhRGwuvnPoACQBFRTZMXNuLXp1Y8e",
  "key16": "45sTDu69GdeYKMSD523X875zsAi97bdBsoe927bqtnrz7bUPXzpfbHsXpG7Rv8a1p8VmQrMmomAXmus4QXJACubN",
  "key17": "5Acqux41EofFxoZXeSoyhAAiboRuQCNjeKSBZMnSWbqQctkqKsnh4hw4BNMPwbMQa4CfMv5kWQT4LxkjEqpEMB7s",
  "key18": "56Cz5e4FRFHmX56RuDUwWX1Mb5TQ94nkH72Suj7nPvap9TST7Nsd3kHZjs35cV7WAQsKZGLSikCxsd76xCrgMMkh",
  "key19": "521Q4Jqd6JRm22EtTpGGXWPijwv9Nxg9AFVdE9P87BykrYabWgPHVXAZkpF6t2dYoWhzkwxghBx3QhwGPj2ZmAFG",
  "key20": "23cyFziv2YsJToiqYzsKTvgDfndEjsKc4ZKqTTENFczwFzFdYqLv8ZfeNmZPMDfKXbsQJ2agQoUuPyEiYaZAUEEL",
  "key21": "4poS1WFLaPz72V7XBGyoCe1AUWRGH2nQmEviJZRVdX3UrCQbK48unFjbbmNAoSvQHZc7f6bZPqTdoWCCKHiuiYKr",
  "key22": "3RXDBqLTnQh9tsr8wCwzmSFAF2SRmH9FGicGQKMnThuBdxnZ1fXrxfK8vxjDP33cYuhGUjoGn6ecdjbf2z8hyAdX",
  "key23": "37QV8ZtkKSoGH2sq5mbpYc8uy1MtEgiefCyApTJnsXrHJrtwjXTu3tUDbyBHkxqAcyYnP5pUEV4w1u6FzpipseSt",
  "key24": "5NcfTCKoENX3jVWSPVPCxGq6PAiNcGspnG3oUY7S1fnRTBze9VhezLjuhyUdCgyMdQDcz19G1wsJ3TmsyK95GAja",
  "key25": "4Y5F8pg1NzewxQNnnr8aTXxfUgemXy3B99UvWhQb7DtMJfC4jD53CC8YpXGBKK74KnWhZ5kVu367suvVWAwnFbaj",
  "key26": "4AxJjnJ4a6xaF8C87jJ3AkQ8UB2hknqxjecoST8BJf3ZdGA3kk4WmawkjsHPcV13a8ofdmncNmShnJnQ9kpioWNn",
  "key27": "59ndFpV9qQ4R2upsVfhquoeB6yifEWRNvCY7hfMZ6p2LpRihCfCf8SQxDQEQrBN5LYYpCCq23XuVNe5kFRmVz1Vo",
  "key28": "2pERjeSYw3oNA1mQ9oEVdWuPYtkYT6ydohxqMAyiTa1yMcjMM2Kpvqt8imQPfuHtLX5eCVuCZRrKNybn9qStmHyW",
  "key29": "4iCwd5Aiheez1tUZNZ5YagbmdSivUwxfLrBa5YhVf73ezEjVAhRA61j7ETnmFrJ7FAPqf7KpokQDq3hPZzVEz4jn",
  "key30": "43tTPGSizGVtjx5Y9R7Z4R4XTBq9kjgTMd8P5YoyhZdDpSFR2qLTUiACVMWFMwnfMPceC7CYdoEmZNoyst4Ntuej",
  "key31": "3SuTh39Xn5GAgNHxfEF717d7SFDFewqN9mR3qgtzptTd61H4fxURzTvwmNKif58nJmDVnpP2uVG9hYZkXQN8nUX3",
  "key32": "4W7NTaebRodezbwwJ8eDM1EnKFabt8PWNbgfVpA4ymXQysLHkyqFHAtNKzXqdomNLDe4BcL3ABmdbwuLizGYyanU",
  "key33": "TYoCYGLwtS6eyHi98C78nYYhjcQLpdMxZkTpg28Lh4pZE6F2cDhsEqY9HGS5rnkfDSFAuM6Bui9HYMnAnLesGqo",
  "key34": "3mdew8nLgUdLkgsoBGpXwbks7Aj3ZStKfqSfX7TzDhAc27XEz33b4tH2vjG7HybAHhrT5HwfxeGYQp5MEAftXDmQ",
  "key35": "2BEEmcCRKBtM5kWLtWEJTRAyBo7aifCUR1syhLrwXR5eJCK7Pu8VYN7j8uQcbkds3ZjChgt5eBMzf3QdToESADgC",
  "key36": "2uFjgAwuZt8wzReQR6Leb2J1XwY73dBTxGcvQ9HZ4kCkkMnE8oCVs1SrLSgHnDECdQpMQ9f6mjxgYewbm3UhWgoB",
  "key37": "2vjf2daQenS7nbXRLGM3LqspCcgvWqFmoA3jr6snbEPtktkVUJEpYus9VM3WBVphQk7hkQiTEx19HTRrNDh59GwY",
  "key38": "5X2EQq1rFkw5fGBnVpvPe3kt3sBmCKxbTSbguAgJAZ6j65MuV9wHauiaJvZLH77vvkoXMYc5n3vg1sA4NiC5TnyN",
  "key39": "3g2KXYE8K9EAun1kBNkr8tPVH1g1KiSaPd3vhLYQEHvefmMEusoBoW5BrjaNjbNKT7J6EmPVy4taGthtWadsLuPo",
  "key40": "9BEr8YFzneqRTWCQAcP5fVwDCpuiTKLXFjLFF2uPgMjzDUATp9rZQBtfPQFAwork7SznVzepPAfUwsSbK6vrHNB",
  "key41": "x9chYGibDs2qMy9hyayF1LvnRseUeXgW8t7DYEUGjD4LRvA4pcoaDNCDV1gL63q727G93HiZ1vt8zeAC6FkPXoS",
  "key42": "4H7d5n9TNtXygnwCevdS3ttkNFjCdc3u1YYD67LYJi35sNE8Gus9sugKyJk52Fu2vXC4JmKVUXRqEiWzZ7cFq4jC",
  "key43": "LDvtrzrBtvz7SAMWhChQzRM16ddf3fVhzkFcgHBnKyWJNCSm14Rk6y6hgnk1CFTvMYi7MR5rPz5upt3Yep3nrpe"
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
