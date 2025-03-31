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
    "5gkcVJp7DWG8vf2VCsFRmDXqNQyqQj9wyQmS9uFn1fBmBPUuLRRREQqhTnkuwUZGzx91CeWU7dQFBYYRm6NqaDuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PvgfKTZW9Nkk3UkNUtdf3Z9AKAqAER8HSaZHwQ4GQJie4WYsr9JsUVj1UMR68ts7f6cvoy6ENi1J8g1c3KfkMDb",
  "key1": "3Ku1Q8yPtDC8pEnn4i2TSJp4zL1RvaW3EBjBboskujJ8exdnSu5s2zUmyFK6JRtxNEUPtjizRHbQigVAv78tYoMc",
  "key2": "DWLdmn8awG6usrPWyoBH8mNks3KdfkkGxR7YTfMXJXooDx1oVsDnTfgbo1vCUAHDQYx5qifEgsioRzKsAjpTVNd",
  "key3": "4ubtkSpJqoG2iXMDBFVmsqjC4rKmMBErpNcQUSZtvkWnQ39N2pqmMDDL7YTqihfoNmzmWNmZkCCEbzruLhUVhqDh",
  "key4": "4xp5DAE7d1MBGP9MYKqwHx2MojVyTWaro6KSR35UDML2YMNyk7dvDyTJ1XY3LquxMtkdUPULJu3N7byx7E3GPYJx",
  "key5": "3qt34qASmV7YFdBB5TQMA8N8eyLZmFXdnaYtVM7g39tJDCXPg1VzDCjtz4donr6KEGT8bcKmqx3bUc3y17zGMo5C",
  "key6": "4Hp7DnGv1xeKxZKRPKbpEyPrXVnWXTEcnY5PXSoQWyRFXL7H3tVMafHxzdDoWm1J7VVVYS9TqrweL3zzCzZZUcnT",
  "key7": "5AKubied8sfpop1SFNsEqBz5Q8ez12vZ4Ye6Nk8grd8g7U1vWBRX4EGpHDU9hRRnCytMBriCRruQ1euJcddECqA2",
  "key8": "3475MoYh93K2DihbdWqSPTn8pDbj5J1EfUPGSo4sMEqFKV6rtF79bVS7AzAZLxqWFNwBcqnRZbEinHjQUR3NRek1",
  "key9": "GRfgdb8x8ZfdeV9HFUe3QWXDaxmBk4N4bsVMnfZerLERCdCpjwraRxSNtnyzzMt9LFRVuH19hAe7qQ9WRa4SwFP",
  "key10": "4VxsJYCPDXELrgDtTZaHzVWn64ez5N7c8F86cqV8XXYv1zxa25LhLGpMnAkwG8tmHAnKq54iJjfduP2Jpkaej7av",
  "key11": "3rH2erKSkeRc9he2zqia6pkbjA4TqqGpYRPijzxoqj5igurXWN8cSsg535y4tD7PSUrSmTQEhd9yPVQG5gRz3ipb",
  "key12": "3a5YR3KWTX93R9wVYEg1QqRMkBb53WxUfSibyJUUxW5bs62wGbrd466XeZ1XhLhan9Y1F7vba4LiJ1TZsN9qXLak",
  "key13": "2zLeVcXbYsSdJ9htU7dinKbFBK7RbhcAp2mjag31JATf1FUFG1LLd8sem7G8vXZrGbSdF1a9uSEXCBJNvA7GPpYe",
  "key14": "35FcaFiih77jf1ugf3AiFKCW2TBN6w6kvMLz3ndHKdwnvLXkvPLRcnGVoUTG6QDcKVjBdYpEjKDsyWhfD82hRAg3",
  "key15": "4gHgsGbYrpP5UZX9b5T6sTV5qoLMqRMJnuastL317mHF1attzwQrmX8NHLgLHCryN7U9HX5FiubHquxK9N7QFiqC",
  "key16": "4XyB7MP8b8phQhUNXt45iNMj7GrupjytH1yD8dYwoSCQQ32w9pVqNg99tdDoLrsqaKWhcVskwgqfy5VW55YL6T8N",
  "key17": "2sazJqojrowzBUDg2o6FE8n21dtDwvqYMmCbx6E3vp2EvVZDx34CFGGvjdNVYH4vUNaVc8PUPhqyrCGDTXgzmiB3",
  "key18": "2SNcWpJSGAYWBHeg1nJYLTaZwrkUFF6Wf2KXPZwhcpi8RW6pyER5paYuiP9bCkjvANE6o3QYeLP2iiboFn9nuiXp",
  "key19": "45vGh9FDvRqYi1QB4Xjijjw5LuxvbNkH1mTL45psyZ3JVjcuzZnRL8gBGKryZMNUmQmoeJBsVrrixf5q5fsU7BhQ",
  "key20": "mCNiT5mNAtVfU5RkKsdFjTJwnJMwJxZaezKN1ohneqg23brR13BJLFZtCft48NHca89beuWDXtKsAxT6VgWgS9z",
  "key21": "2PhuD2Y11ckuCp3GAGoPzCyskW1mdqkP86KPRnn6DqVCC5kGUHG3WS6AxdLnoU5nUXL8eobEdWfQXRLkeBj4ZPk4",
  "key22": "qSZ77pERr5gKEsYZSePinTwrBsm32QXmsiU47AE1V95MQ7tkKMwP5hSQSjbs5zA38SgRyAficYcwgdgSua3sz9d",
  "key23": "57iSwDLapxgVzaonJAc64jetqpg1zo5L2XeQFEmR3hysKYhEtxEr3iYbhU2A2yfG1BxTyKpXr5ymhPZqhSmgvRsD",
  "key24": "ePhiC9aRN49SZvygoqB47sYdRnnKaa3UHX8bjYShQnocsBipc1nvYhwD85Jhw4mwXk32HADwvkJ7mJdkqL3ZYeW",
  "key25": "3jAoybAekjYZNLaJv4B2XxSsmLYsT2jt57i2aiQkSBoGzHoAyiGUXHT9HBYwxZuLVSgU6WE6yZ1LvLpuXZmtA2Pz",
  "key26": "41Rf5U8aPr3uby8gYmTo4J2YJvfdWvEeYY5uvjqPhw7yynb8GwYm9CbvhHPYKgH7bi783UqZY8N5kagCuEx9DKdX",
  "key27": "dFvPb8Bo5vuB4TWxNF42w4ZJk7zhwPpgYH3Fu9A9TDRKU8MKNfqSdG8Lxc7QRxwJGVxv5o6RfhRVwvGKzuvCtBd",
  "key28": "4631k77LExHxVey4CCuC11puGkCvTR71BNzGLQLE8kSzStu2mLThkEGXJDQeMhzawpu17xscVjTr9C36h8pJzuBW",
  "key29": "5nG84Fe6RwDtHr7kmi4i1VtE1RRNUbSG3sgh3gEhQiSF3wMm8Vg5vDwdoM8nVMWEb8Pp1MpRZDV8NeskjEpeZ1n7",
  "key30": "22LbShY1efeiJF8NbEfuzzKjgzfLkG87A7FW1aC4iZkVYc2JTj9UiJHRsT4NXZBBHHJED2iSAFukWGHt2DHpTzCy",
  "key31": "2zL85btLHK3nF2MsKP9DRQ9KBK8JoVvUzEG8YUQPc2Cbgk1B9QytTRe45eFkMnfL4FbbVigh6FYsZ6bYhxNMgd2C",
  "key32": "2L2vdiF4nJA4cLb3pY4NPCoePxJSJ9SQuvFfm5xCpEEV6jJVjw6SBDHcLTu45B24TxWrwqWTZE6Br8wHEUo1eUPV",
  "key33": "52UPBT6iN5rC9GAuo3DPYZdvcXbMLeXVhufUZetGEV3mwCTRFtkN45vq2x47HebCVmhP4Esn9qtwLc7WBYUhT35V",
  "key34": "2WCxdVRgxK7Ay5rih7egiXMeExTQLX4YbMTimE6HGr3wDQGYG3xp6ZfCtkZUm1QBEgAzq935uGKH5MUFgsCcW1J3",
  "key35": "gyAtq3wkBjhQjaY9kvu31hu6mvwq5Xk9s4Jh7mCHkchWnZasQPgJVzscjMYxjsSQVjaBPC4DaSXFzPJhdj8pJav",
  "key36": "4qzemwtydZo4M4mTQyR5bMdCqVsmjqQbeKpFnsAEYLaYCWvaEGYsKL7KgyJHovab4WxaWjjkRgXjhWA2nofPzFZx",
  "key37": "4FFjDR84fcNUfPoUHsM3DDyXbTdG6MbqXwrMkYsv2vxfmjsT12bsoE3pidTjwDuPrC44cELzF76fGYFGuExf23d8"
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
