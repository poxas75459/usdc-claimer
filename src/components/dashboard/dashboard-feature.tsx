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
    "4AvK7m8Z9Mr4EAMFUq6SnV4mE9UpVT9tcPcN4eNwvNdXqJ4Wt2baXAqzBugcsZRNcPduktuCmZv5FEmAoq9zENL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zZWKfrFQ6TJHDCvfHEM9RYQdYifg38jYce8hdyR4cG59rqivqwvqmXtxLWWDsTedxiN5YS6oZwwAjvQMgd7sLDD",
  "key1": "4LJoHb6h5zUjn5h1TfWSqaS1zxcuSbBEzFFsRyQxw3UbUa5g4FkPiFHxZLT4kTA3DS3GDev3sQdZogKEg4CvLW6W",
  "key2": "5PfDab2KFuLgZrJQpyuhWtZQGbwFeCRYxmRC2eBZSEnhQd8nRXnGFG4LqqTerKM2rasVXwxvw32iC8gT8A1orR4L",
  "key3": "56NdqUcfrXRQnMA8TE2gYPzLB1WZGtK1QWLbnrCtmRMo4EZLy4qf71dJKkrEJSKpeBSxuMfF4Am12CCnkiuGyc1h",
  "key4": "2KZ8TD3uiq8eKS6eSdjZ4N6HigN7AEDRCYmxQqMuveJ87yJtipZLorHkCYuBrArYbG4gxDz23RsD3ofm5XjLrZ48",
  "key5": "3fhDCfgENM9qCJrz8tiCosJDmPGAUrWn4Dp8a1tMAzx7xUrh5Rf8JwcfCF72vgPZ9WwZhq5H1SeGVqWym7sTCUHW",
  "key6": "4gZacEG16VnJu2PzxF1swJDmW3tzSGEBz6e2ioVwm4xL5gYKqer3mRnZjJJ3Tkx4N7MqBbwQC3E7CCCK1JZWyfHP",
  "key7": "jhDWojxswAGWsUfwYPAeMoEdk27YxwDVCrhmd844ARYQcR5oUi3pZwzb6uGhUDbQchGfC4fArCC49Qv5VWWKBn3",
  "key8": "3MwU43jrQkN2DBJugbkxZhw8BpxSMimfq5UMPe7opXC2qzvcjKY2KGhVVaF5667sMfeW9kNmwnPJcBAhQ6ZgCNxo",
  "key9": "2mLBDGQPpbYDuQZGXYR8rw9CJHDPiguMMMXx7NbumimYNm5PhRJptixHv53bJ9dpvcejjUxBbUywRz5qFgs8AKS",
  "key10": "2uapMsL4ewidEmxFUPf1bj3r7qvCT9KXvnKZjkJd3ocQsS3yKHdcSSxqDFyEXr9LCxoPYcsGYTHuHRqhrPKnuro6",
  "key11": "WpxivKgZhYibo7TKs9obDNscM3Niap6dJSrSu5HmCPCTzAf5XpNEUwDwTVYPjezRT1ryLCyLaDoTuFxrLbuZ93C",
  "key12": "46aKR8kMs57DDcytRonSd1b9kzKHaSTz5FM8SpkijPiffanGPTwzcY1NdrXN4ADNH58CCFdYqtZWRnxb9zzvVomw",
  "key13": "5J4rGpMiGL9ieFm4ifbes9PoRjg3rqbvth6s73Zn8auKqGzdcvavQxFpRTYUHMvicxxJWM6x8JbdFZMZbx87ZBph",
  "key14": "4vMkbnkRfegj8tGm5EGXpkccQKzUnyHRgDZbxw3QjTKHdiSgotStX5DFpGmYdMMf3pGgpaFSUConFwNSZw6zVqu2",
  "key15": "PABmTqA8jnNFb3tKEhpT2dq7AuULnZsFL7HYySvmgE5QsJFD7daiEWJWgVWJeGvBMzovg7jjAf5ytt81CZjc2uk",
  "key16": "3tMMAkMrv3eWSQcvsHYWU1Ri6WxkvQ8ZqFGArYyf3eEBSesJEB45SVab4DWwhNroUS2ik6njHmy8Bda5wnYxJ2LE",
  "key17": "2aN71hdcF2ZcFMd2FtdJb5VmpVEJfTWZuQswc2gEM4FprsYEkvGNJuXY6VgKSekrmPdGsnAJcb45bc3R4QgYZU8k",
  "key18": "4NqjHm5DFRj4237e5x8R3Uci7XkHkJfaaRfWer9PRhYTbt9NEtTtdXwcAqg7LD8GbpqriUMqPfkVZzLcLgQnBbxb",
  "key19": "4nR9pbYkQzdmogLCqZepczmAh2g8o2RZP5FajXZgeaTtmgxf1saSTuPyke9f4JVFsHmSoZYNPBJG2bCe35pTxZ5Y",
  "key20": "3hDNm5gCLK52g8dyDHpCBRbmq7rg2fSR92AmQmuHQWmbd8ehWh1UwgJJ6meddByMQqgMP9bZSMmV69ytQ6o2SmCg",
  "key21": "3v7LfQfvH1pu2UNM2oTbvWz3Z4ehQRTiqYuV4Xn6KsQKrxsXtZfC8PUoSubLYDbRBpo1WmnPoCjixFgVHk7jG7y4",
  "key22": "5YER9PHcFq8iLZnQNmZGHJkCAtYZQSKxp6jHfUnqpoJ4SdRjy5mW9h4fDoCCjtm85b4xPbFfw28JPk2gDUmYW1wc",
  "key23": "2jUB9NqmD8BABkn8KCztcM55M9TTaRdtRyUi5chAZXqHauKD3XrzbCpx6a1LMA8jmCWTCcvzzg55iZLzTbAmDcqB",
  "key24": "21Fy1YqZ6THQQCy5s55JzBg9z5ACwwhrWTTFkw2Dut21LQWz4isdiHEaAMPtUQajxLjwp6iMWQ9dsuJaie8vCh5a",
  "key25": "3j2bfft3y1kqby8j5M2Fb9Duip9Qbt1pFmfHd8xBc5pGCUNCiNS2LzF9uNYLstgTSgpTa4WyLZCzamcvaZy5AZG1",
  "key26": "2NRGLBJaCf4zy576ydkJ2bj1i2v3WtqtFBsMj3qGZSts1ccc9HAwaok8uaF84BhEQswN2duy38yLAdRheUJGnth5",
  "key27": "44jbUwTboeyWV9Po3CPFPJRSwZYUQP5bnzk5p7Lr655S36dUGay6toP61VorRuDhLTnAgxEdegLkdFx3FUovKHAP",
  "key28": "4hWcbJJ6arqe1qELqRPVK9GrzDBfpMWD6tre6yQdcFYDkaY61RbYXpzdKojEKaweFifh3nuig71YmCaiL9EovHjC",
  "key29": "376nbqmNUQUvJMngRRryhYpNT1ZnFxNY3YqVoRC4cV2MPVzEJ1zssJU3cwMo9Sueq7UJiFKLwxkFiVSjjfcSEQzu",
  "key30": "53fo4uE6heqqLTj9r3jymk8JKyoboUsHVxY3QkpCDLGzTHHZEStawjZHfRV5UHETsZcAA8AxRP9iDEgsE56YzZZf",
  "key31": "4EoX5w9iydU935vVZPTCiiZXRxQHw34JBriFuWsNUkFLyxs2JUGV5hjyBvoXxJfSACSCuuUu1uu2vaVZZX7zqdfN",
  "key32": "3yz5ptyoxD6ybqgTp7iDM1Zxz3MtCme1QgZKAWqwgULgV6a4q2htWehWJQVpBkbHq1K9fL3UqRsgLAtGZSPV9qt4",
  "key33": "2PLUAs3SvTcEmQErLFXJ3ZEpUuwqNFV7qT4ZvSL4Svjq3c9UxfhGPfYRaDFg5LzKbMGNiVkzA1avpMJCwPXVeD1g",
  "key34": "45Av4pLGDu4CFNffUJQeggucP1ch1ugTqkLpT57Cg633G9rTfLYc6pn9VYJeLQsPpe8biZd1Lv4rcmxcsCKVML1E",
  "key35": "QTSqRvDHue11WqXcPMGtw3eL1LMg1iWrVxbSEhS7MMHksM4vP7B7fzKAArEEvbFCABZaXrBvt9Nz3XMHhkAiPRk",
  "key36": "5uBGyztLaKzHQ8MZkVoAxwX8aXoBCqW9Docs9BMyBm13UjB1zpdjyF8MEwS7LLH2QC4pSGHFF6WWM5ZygVU6HSWX",
  "key37": "5EE3hGf4mZVYo22ZMbhDXMSFMQryh99CE1WQXcU1uk4qctkk9f1NbjkCFbAjycQjhbDBrefzqVQU9wBK3UXcQt3B",
  "key38": "4K2oWZfgYWrz2i9fq4b162oxSbb5QbwvTEGPfEPCHCFZAaMW332vEnXiBKKTeUvVpGSPWjaPuEn2E6eudfBxEPHe"
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
