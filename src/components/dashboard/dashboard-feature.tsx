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
    "3ZHexiSvd5SmSaXqZtMDbr2NhJsTExkqbMfjDaQbWnYyL2EJWGukGdtBEkUcWUjnSvEgR3X5ehKRCGGLoVxLHPg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xDH7X76VB2ufnkMTvPdpAyFFhmnNp8LkMuk4L3CPFNkk8NpLe5yeqgNxYRSn2DfAkZX4icF2wy6T7tzRraAZMRF",
  "key1": "5PsETHx6oxv6W6ik44ybQyM6KgBCsujtbpaZoVwpQ4nPRGERSpHJwHhRB9rFLkAQWhhgxgRGQ9JdhaTq7ZwgjJHv",
  "key2": "3n8zvTtsG7ENLfbFc77K6bNRhJ4xJXmir4oaSJQCJX4pFPctLPVoErP1Bx3eufEoh6BbSx9U3WE9yVfiimgzA2ZM",
  "key3": "59zDNqJu1Zi3roRqpPpSUndSBBWuU6STHUjx7MFQTK76gXEV4tRXjSvLSaryWsT9Wn6VDrPEPP9tp4PtCsMmkneo",
  "key4": "2f6vPD8QSRWbMHPpz48226SUt1S8GE8ZEgvyhuxp2ao5PRhWdXLCN28Su6nhBvsaTgQzqJfejsm1XYyxvKvfRkML",
  "key5": "5J5ScyhimTtYRpjom8VpjtoXLFyPj4zoMv5cuJQ3eSs6XA3qbprqgU79ShBdyYmr7ut8mAJptQSJ3SZmRdkEJog6",
  "key6": "4Mv6RL4hpfexbVA3M7UNxaL2V47ZSAWg4BPkVH3mL42pzV2x17nm91NBHxT97xBTyEWmVfEfMCKGq6EpFBa9UaSo",
  "key7": "2dNEqigrsJyWn4xmvTwd2nZMdnSHCLcutqW8DUHQymv7ZNPNRRHZhtU9uBAbENf9WiCg5JEvHENfW6GBEG7NLc6m",
  "key8": "4RU35LTHeEMLyZfEV9fBgErf6BadN8FdT95W5fNqva8XBZHUp2cfyUwJFiHQueaVbcbLS5ke8iA3jTqarqDG1Upb",
  "key9": "39YcuV5kpuWC2WLjgPLUKZ5ZfaBYHwsiz3mqwUTP5YV46M7of9uX8L4RvjWLVupsYhsd1v5gMn8BNP9fEZzQ63aG",
  "key10": "55C8yXGiFmN5G4hJFsMkcTVYBmTwPsUi6VpCKrWpxxPk3hoD5mpmgrC2CSMfTZHoG7dozmXguL3wQox48FtRcVXC",
  "key11": "2SHHpgWJRnnj4YKHzkhbc8vH8YAHFFZ4TkHtxzx6xz6foo7mf6mtUHkyehSD37LTKgiqNk3VaVN765fAPefDVM9a",
  "key12": "vb3ZY9JZDx4S2i2ket6UVGbDUghWZMVUEwfHNFnn7GxC9CNy888YaCm54ZNUDrMWBtUN4sCQ38HUJa89qJ4YFEa",
  "key13": "Ph4g9a5hc95SQPxCG8wkkCyAqNmoDAvuuocsMaHU4zrUdpvf29gHdX4AgksoKztuCjFiFLCHNNu8CrKenBJ2Ew2",
  "key14": "592G6baXzzLwnqCP5VFkfEcHvZFbbXD4WGrTSXQNGSYJjc8PqeUYs9MxbDTxjHiuuszrcqzVfqmBqYGTzfy63u1k",
  "key15": "NenWrwN12eKKdW6wbQHss4wxE6DdM2poqZRNUK1kLS5Xfae4UVMrSwP7LpXCoAwF7MKGj4SMNZHeG3H36JwmpA4",
  "key16": "5M96iAPFdSG372eHorztHDx8T5UzBUrLRUviCseGNNZ6kz5pomU8uT3CQTroNziu1j1RHrtAEZJbKKFggf5WfVuy",
  "key17": "z69NFZm8fF2Dh7zx2MFRu7GtxWW74vVPrqam7KHe1mYT4kVgYCDcMzcD6a1iMnGEfedkeHmBfNovQASg5xUifqZ",
  "key18": "3ZMgGhgQWod4U4ex56vyTZ3Wkqa3CPdwzyPmBo3ew19HWVGWC6wSVvJmNzcbRDdjGps2R2rkT72JYQbhvViEqx5s",
  "key19": "3o9b4bHWLK5Pd4PxEdvjdDHay6KacBHjcap34mVrz3t15tzQr1M1ShHXQYoAav2UMEPBL89SZet2C7s3NPM8VACP",
  "key20": "3wyDV7aN7xPdAoe4hyPsWzzgGeRvdzQZSRCvuVvnStvv7hYPXp6DfGARft1AHyDHrTYYYJL3WQ9TqP7jDaBH7pd",
  "key21": "3X6ezpFiwVWkYQuiyCzRZb6NWPoYxrDZbSDYWpsrQCMzzZykPnemNoKJLKihDWhpMnRFfcV8GCs9oXBnwHTwcFrk",
  "key22": "5hhLrFYP9UsTtbmdDwPsv9tDT4Gr11KVVqHfNBVHgonhDj8B2wY9xW3wvWuXDfwYtM27bhjVBXVckZmceMQN4nQC",
  "key23": "a4Nmm7KgSMvGa8bpbLM9r9QXtjFNTJZ2NWNz1rhXxRtjmowB2NMvt4657mShStLRkbWdXAoLChiiHnVSJ7RQ6KM",
  "key24": "2oVstpAYmgc1sdFo32AqLN3FzBQCYxUdHFP4PBV88F4UT35giwDjAW1JPfwUPEmjL3WtYLxYsX86Ty8MyuPLMiw7",
  "key25": "375wigDdehaVRdTAaNZf9gUewYYkt3t5b8gbAsv6rESkV8P2BDqkdqm5Hr921bRMFFxMNpZ21un21b3HUWFGZfpe",
  "key26": "2Ew8DnuYpYdBWbAHrimC5nsDjqLXTLeLkwP8b1ZbV57dxMDqgF6XKZx4LR6zRBm9hPwYF5Y42rH79VLRNQ8nuEeJ",
  "key27": "2WTNkfnU1L8oTpDQhRd5tX9bGJ89ScPkF9o1adf4hpm4v9CyrdmnqQCXx2ym8Y6DmjRDG5sCp75q3DHx1ZxWmDBt",
  "key28": "CaGmoJUxofXbzp1R9joTXNqGwzUcByCQst8wwGjEwAHrRobvzFrNNFrfYBJ7joQX4LBDwMUNXUedNDeZjh6rk3H",
  "key29": "2mmRdtUfU4MJ6KVSEZAsz7thM42An9YF7LkjnidLhT8C9SDvTqQhLSPHTf2Thg3PhMznB49zLvBVnZMrnuYLSWf9",
  "key30": "3HXDy41yZm86NiU3mXF3CwS225TsB74E8GNcX5TxRQ58pz3nrJ3TTXVaRDog14TnaefzVmAj4SfcmrxVPMTj45Eu"
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
