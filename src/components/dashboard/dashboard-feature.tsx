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
    "4mXsDbg8prYnNayoqgjbzwaj24kYFMh8S6GwY5a5uvkeDYCRP69nqxtbspMEnwJb9HYqyM9GMWsiSSuQv4vp12p9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uMoGCHW8wwguedeMwycAU7CMoVr7AfXiTGB2EnxrJxZSPQPAc8HvpgKLwNnzQCXSA3Y2boi7KG1AMkytUMxZNRG",
  "key1": "2BkkqX9URLRaojkGhprDdF8TFyS9mPSZ7jNLR9tCNiqtbDPJbCj8Bd7wUJmxp2d1DkHa75QDvpFnpvR2MSk93fXP",
  "key2": "5zhjuHw7oQGjePMsMeARS3sX49UZpTtx1xhgfm4rTebB6yoaWx8xeSeRGe1h8PV63EEWposGADpCVwmxaCFYA7qt",
  "key3": "bsM7tTX2easvXeJMrRpxyUapmJ5baNeXRTmzMqv729ApHCdoKZyozWzfJR1Mhd4YzXVjUR5dUYwdLdGQAvtCmof",
  "key4": "5bScJcXYoD1xvQKS7uDWMZxmRriAnJ9QEX1Wk2L1ZdQyKaGycYqvCCD5svGSnHG8W8HgMNcUEx3x2kbCLFF3K1JM",
  "key5": "89mhPcfWj3dHt2kZbDZKi6uTkR44BeXy9aMVPCVnbgYxgDBDUHih4LhnA8awVFi7nAym984fyA2J6QSn1PckMEA",
  "key6": "rU5zG2a3mDqnhaVNxSQKZ4ZFt3A9as7FqDLqtKy3eAzS8BGB9KbesZ4Xi1ZWwhSdB154MTKf1Mun5MeuJa56shL",
  "key7": "44cjupykKy2nq2rJ3KDeXHGNbgUgatS2XqSrtos8ktCu7w9yx7kLHpUfcHMCdhEewNRrCtVu6o4r3u4sm6t24MSH",
  "key8": "5MS2MVawv2DDetMQsTpWTtSDxKg6qqshmD7W5nUQXPgCJwn7wMj6HizVrPkWr3Bz3ZhoLwEABriFPDtAfqqkRwz4",
  "key9": "41QFg1TNSLNA8vKNCcv6jrWcFXPd1T1BkS4RDauhLTomSa1j2cqLem9NAtMh5xQLaJuwZyTWqZtNUKbXMBinJdDW",
  "key10": "3FjRBp5VCmrqWHrh1cXeNXyNf6sVxL5JpFKedVxUMCk4tnkRHS7nRHJm5FvDTJ1Auw4yJnrcDg7WoK7QeXHJRjac",
  "key11": "3Bc9GUSUVtujJM1qcAbf6kuTGuoa6KeFHSRt6H3Pi94wG39NnYev67buJMNPGisyJC45VVqDgc1cMB2vDiwujxwg",
  "key12": "3E5QWu31PfsqkarxB7nx5e4fh1bjUsdaBVJyn858opmkWW4SJPzqFHuD19hHhmyJomUevfYiFR3nV6FfqHqUgo1Z",
  "key13": "5whRcij3yB4JBiFrxNawJuYCXnJXHW5i26c3daYNZVZ7FQFt4Ep6GjF5fM6PnTK7vSbPnMvz1gibnYuTLEb3YSW6",
  "key14": "3c4ztB3v3CNvyjjD1xUP5YhMi1tVpMztRt3qx7psfu9to8XMiFbSUJudvegsYoh8Zf9PUmNmGAwChtB5Huu6NX3K",
  "key15": "22zYKoNWW2VXWw9Kwn7iSe6ZvkVJadwsc1XkRTYgzNd1bFfjYaZKnse7R3ydL1pebSQwZiLAw29qEsmvd6m6hHqG",
  "key16": "2Fd2VeygcaAmVS9QknT2cnVzCXHDQUTNo5JSXeoNFesgxFvWuCqoDwhg3GWtSSruRBgRsZb6VYpFEBsP7HhaFZQC",
  "key17": "4KHM7PN7cE26ttvoY1by3VFA89nHEEmaqEXo6ok2YiSnsuYeFnxyjT9D6Bu6Uu3jK47tBhB1nfmggPtkz1ZcCiUn",
  "key18": "4nwq4fuj7mxfFXa5VffDpRQ8h4AWktMRWWgr8zPmiP4K5suHJ52zQUzTBZbBVYrYMitQAX9JAhMzGkdrP4snAeJB",
  "key19": "MY93XYx9fqVEGezmkd3ATm5w6uCAKY6XjDGymGcbD4h7WaWTBCX9ZrWCGbasR1BDoY41HCmHwaszhwHnajAsHPj",
  "key20": "rmuNvQ59WETmdstTbUCwNmXwfdpfJJwf19nugAA4HSppEg3abBtLfGu9z6e92AUXsx3869YCvPZ7CjC1R4u5ok9",
  "key21": "5QfVq1cwySjNGuRmaGp5UzHTd3e4NAwjbRrTgjb1gJmcgdwM3qTAzYQX5Qon4tCKH7DEU3zmENyQ2xbM2Pn1Kwhf",
  "key22": "5bvcYYNgnHbXxLza3Vw5e6stgweEFk9RK52584CvdYsHLDTJXxzZgj4wv268vgnjSVvSoPtbKp3wUNEaHziFGV7g",
  "key23": "3YvU5ae7MfCZEueN32E8Ghp9b9Zb1ffcrHqR3CpNnkAGh8mvahhrckJgoaC5uJZFADg9T72TzHqwXm6yAH8Apbef",
  "key24": "3m9QjWyMeposUvpfr4tpnjtvpVZFW13wCbYY2dXWdW5urdLozJE8zDgV2hteFQVzm3cxh1khgU3zvzDRLibDvXmR",
  "key25": "4FVar4cfsjBEbLcXUiCHFQUEfaTh17r2WFKzjNi1RoKDrKJBrW9ikReQWVVoxaNkQc4GVqcQ2pyFbm6nfwpLXdpf",
  "key26": "5cZwHfQk5RK3rCF1bka37fcYBngNkB9UtxiUKo8ZtGHyzsonXc6n97C5Yaaf8ZC2qTa2VVDTMHjFWciDKwUtM8Qd",
  "key27": "5H48rqWFJRKfzM5ZvStUbWyDoqAQfVB9Ke6yRt9QP9jZW5AhSNcEprcvfzCoy2BKKkaFpSbtSuE1p25bp2kveYwK",
  "key28": "2JJY6TjzrPz5YH5NiStGbdLBvtjCFzGXFvQaVTgRpqjn6edKLvDwVve4FthMBYKVLh3MVtEHbypc1kdws35UARva",
  "key29": "3dZePWLgiar6YGmxvSMrcPKbGA89QU5mmwzM9xNJEnHNmWjnhdN6LSP1PEffH7Z8TCRZF3FFYPaFGcaNDGau8VDX",
  "key30": "3Tsy74z1LLqA12avDD1PJMTzxD8iTbswLiz4MguUBeohbMM8L1EAq5Ws79UaKAM9GFgFZUNua3NjKwVKuvGyzsEk",
  "key31": "2KgV6Hm65jpRFFg4rUqBXikmgTkxEmgjWfgJr8rD7rsBcPHmBnDK7qUCFfTHHLWWizTvJeca5FidzbWgb1UrmNLj"
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
