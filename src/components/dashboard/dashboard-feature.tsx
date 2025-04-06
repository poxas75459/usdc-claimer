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
    "X7jGMc9Bcqo4TxTLiSTRUzWoEqkcQSTkX1w5kPXoyoaTtWqQEceZuJtaWrLmx4n4MNpLkD7HaJa4Z56yDNCgbfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tzehpfcMXpFA1hVXZVjuZ7QhYM3cwV1FtHeA4LujFSdPVP6tpqzA5pJmfXwEJMmw1F2Tdo5qu25t9iucQ2PjM6j",
  "key1": "49dtF2QwzyrGH7HNrbA8k8y8EpfxZZhdTu9sxzetKBHV2Jdxa69Pck9Uub7qb91CnqtxANj8wNnGC8Zk3xqvPJnf",
  "key2": "4yZYkvZkZK9JtUGR3sYGa9LbH6PAGu8PFWG6kwjejZU1ymCUWV3CFc2sp8ugE5THZLc399jcC9Sg57iphcqUoKSv",
  "key3": "3trrvuomVKWPnvCtBkxMqyWZunrBXn5VH9NmM4wqdJEobarQ9Dh7njSTx3kj5qSpbk1SAaQiB6FB5t9HvvqiG5Ct",
  "key4": "hNXoC9BgmE5wiQS7cLJbfgBhQ9nCZMD8HCcJjzq1NbZYPjh6BPJNePsNEy7MadutvmCPX4U4ak5DcVEmDnSuHdr",
  "key5": "2HjW6xgqCrAtdYBw9vEktmowibH3dXWCaLXdcbay6Bn58R3KjidgobWNLQENDYUtDvYj2ZgRzuyUp8GkHF2UFkP4",
  "key6": "Gs9JLhzJAyCrQQip8Ejt9YM1EvbXFEVerUgWMQhyBtC1aJA3Tw2aYZH4evoDS8iEUiXWvhGbqmEMwL8yaR6V6HV",
  "key7": "2bGG8romsDcZenGpRPyFy6xLKWfWU2r2VVBnPh5WXir13dJTb9k7J3BW6Mkqhgc4c2UAZJMCar4PfGzdEuLrDeHK",
  "key8": "5jUs4CNkxueEaXBANhsHbf3nhHchhq7cVptsssvceBxZ1vZxwGJr6Eu4srpbYy2LFGKTAr3EdMkYTgcmfYCS42Ja",
  "key9": "5MAPCn8NJTYL8U7Nsye5eGL2GPq1XqFedevQdpm9deHATHLEX1uut8G3haU1Mc8rvQ8HsB6FQVJFutLdStLSY1Dz",
  "key10": "3rkq5kgP2EaJ2bot4SpkyVi4E36tnrRjy6HUEduqzPxmBWexnjdvWVZ7SyvQF4uhJ7koXBbAhVY3iWRpoDv9wSeq",
  "key11": "54Yoy6FcnP1LCeu6Ck7zjLYwuVw9QKhjnrT8X6oH7raQ84T4ccNUbReACbCvDvkumsTMiTvZHXGWRoN7LGzZPGvL",
  "key12": "4aDvycNPVWuZBg48FqTwweuTJW7WYoKgeLwuw4GzUNv1ui2kyWn1U7966d8ASTuKy7RZNWt5Rqm6eLuqMWk32UzT",
  "key13": "2oM2cpe5oficDCzGSTiQsshbFYxxP9AtwiorS4KZszg7r2iHk4yDzTdGT5tnF2QdgTonUkVh3aL7qoBatMNVPHKa",
  "key14": "4KpUiLnYKipjjBq7XuxDMUEcUrY1c98s7WhUZRwgtFsR86HpnDTzaagiwPgMdbudfhdR2fNqmS8kJnawVvmX2d9R",
  "key15": "3eeBjbCJnXimkJtui9tFnZtbdmgsr8C8Gy3kFHHxRMzcgRDXpoqaS8GLKRBySPQQ6Z5iMq1TCg3L6c8ZzzLXbiC1",
  "key16": "2zV2c5mQdmjXUajie6EnD9ovqbMBCGn2ZVfVPAsHQ9qiSbktw1Akiryrfc6nDJfmsbE1VE9rCEGVXcC1yBonoJWH",
  "key17": "2s331QngDHQaxex2iyHz82gxKVzqK1Kgc7pQLXKNzAvLCPYPY8QuFVNAcathcH5fssnmNcnkeW3gK7FcvTWU5576",
  "key18": "avHrA2TTqAdzZFFamrqAt4oMRuRNdK1ze6JQtukSE53T4eJApaQos34juj98inS4GxKSefpJx84P8Yq3ChP9BwD",
  "key19": "z1RqZL7yscv98nFewLbUa3JMHqh95zHS8BobMHUGFezFnFyNC4tVSz4oZRmikkdgVwfbrJFif8h76eUsDwdJv3y",
  "key20": "2hShGd25Wr97TKXvWgHq9KukX3zBNyYRMnBdzHNEatea5yXpj87GE7LY5ZLFT1U2E9tNX35cmKRQcSJZV5k7rvcX",
  "key21": "1QJKjKHUShWsyifrc8dBf2kzadhjDZZDPATrkjeYGdMN6y2kQrUFwMm4iAKnLR1ir11huVq9nQqcezkQS8kAqCL",
  "key22": "sHzyt7WRg87dBLNuix6ie3Pe8r2p1iaX61wCGTKWAGMT7tNojTSjqkE4t3DxjYpiQEvgnY8W8swENTzzmcz8wxD",
  "key23": "2B2bWYDTqn24NEfnxUXeRyeH3VU2RmudGDYzWwQ1ytdg9XsWXEbwvXMq2kXh2kf17zpDt1AUoR6zMeUtr8u3gTXw",
  "key24": "3GWaGVgXJq6mRd44GzELgeEn7zPaqGYiEXjdj9fUKNgy3AcD78wTqh5e64PkehjYM9dvdi1NPaH8ZF1DFkNgV41L",
  "key25": "8eeD6r2ihqLMHQHJVBrmfEo77gb6hCTWxaErsNDMC4TgJdvsuu7KN8QYR8By6JK95BN79A78tNUgHQDMGZ3NH8Q",
  "key26": "3Kw4JorKUBo8ZzZ3gWE5LVmLCsJu47Zzfvup8GTFXc9FzWaQ2XhfrouQrc8CAPpH3E762iiCa7CWQ3zUqhPcuXE9",
  "key27": "4KCsUKVN6qSNxDf1WKAFp2Wav7jCFQiRLuv5ATzgn6kJbe7mjX4SHpCqxekFDoPZ3BD594kQSzQ7snj767uHC1NS",
  "key28": "2NRHCbyqaY2TyRA4ekKhz9LR11jLKTZYywzNN4AYcJVcWqeZiHCN9XepwqgPvLu248XisLnNA6dLduggLzg28kC1",
  "key29": "3ufeUTWMygTxd89pYun6qPiMbehEeeyJiJkBRUbQrTKqRaBDDrReudgfyMq5ncPCaTn9tFZsoyRxNWZqkzFoE6qt",
  "key30": "fGpjnyPo7e9dNw4BfPMTvWSp7T7x9M5bjyLRTR3Pz1PaCGXpotU4jW4geR6fm8zjrKSEoskBaAzFvd86QMfDNEr",
  "key31": "3R29HfDQo9V3ixCaVC4Rm8rkCB7qP4wFUTDMbk5JLbrDMXpnGys2me4dJ2w6hTwJxT9JQygwjqnKxYcwPAkp1NDe"
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
