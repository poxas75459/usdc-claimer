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
    "5BYXMKcRVwVwsj4HCN62qZUx2ek5xivfjU6Ba9hKiS68WPZD6jExKEXp2Udv7AqZHUWbgTDt7admdeQRGmujozk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35MzGiKCQqaBVW7wBzMh2WULzC5RkJAcwvfk4Npy6GemVZKHRwEMbqtfvMSVgV93BDkGaGSubLuCTTJoyRuHPVXU",
  "key1": "rAiF2LMmVkvNPDnpZUJNnCyDhVH22KkkffXt19rV3ccfWFyWyUNmKDmxhAoXyLwoXz3oxa8SWEDdLa2k6hLmc4x",
  "key2": "exUFCbygVmFgHLDpb1RvYF1XbM3SemYCyrEPmppyyiYvco5HaoaLD2u8TJiiPwWnimMBJPVGjvsGBju86GkF3gy",
  "key3": "4NmoAnXuK3CPZgrhZijvCQT4VveZZiucJum2hn1jPFbPjXwPPQrKL83nodPUfY48Fedkgwp73wTAjWZKMDCgGX5s",
  "key4": "XkrZ1uvW6Wwxxbf7sSJN9Qiwxt3NDbqo5X98PJuCmJMC5d9MYt6XoYuovSisSGTQbwmevi2T8u9w8LbwaJqdQcC",
  "key5": "4PaqmV2KWBdECdvrr3d2uxNajBv3aFU1pD7sujTLV83yDk85Czhk6Acg3zeQrtSBhHB8qRRMMiMU7U8JbLUhsrxv",
  "key6": "41ajjcx71CCZqYKPd3BBsXbzP1bg4Cw3ELxbwDmHJSG12DpmewcfN2mFoQ25Rc283jVFLyxn5fgC6jr55BY8ggbt",
  "key7": "2sXf9oiWQg5aMeAhJfFA4KKzWzgnZXQzvigJwerDkkSc6sPrngFGs5WyTY92jScmUuvPkUtcJESdoY3NJBwwnYw8",
  "key8": "4JjYELnAD4Qerein4VxKECfJLNLkhit5rVLfWye8dNjMLhYMjV2s33QuJ6bjKLMta3236haPo9Ybo7qYKEcpSyGE",
  "key9": "DzVCPnb3tJ66QSexwziPJn7XHcenFd2A3wsHWTcdxnmMoyKuh9jQiXj1UMBgThKpCEXX3JRoeR8PnVf4eCx1z7W",
  "key10": "3qePbWzCpYCtctgCohhbv2jgjQ3fsogAHyirJGwdaTgpRS3hmYj6orH5SuWRXqL6aHNjNA2xZKVS4Yj4gjHLknkL",
  "key11": "2mG56uJRRXvCBm9szHm6nfJByNrSyXUsurzzsXAu5dPG1ynze8vmBFTTFKkSzHcTHe7P1dok7gZq8B4fuPgpdZwG",
  "key12": "2JWkENcYfYkU7Ybjf798yEoU8Qvvrghgdv8TSRPDWBQgKkpoSW2YUZoEgq6n1U2RBC25adCaJuHh7cvWy3uy3NkG",
  "key13": "5YB9xV3EhSNHQNCusADAcHjMocHJYvPsuHcNaEqMJM8ALY3BQEHuR3f9ujZtLF2aacJnpbG4kq6eaoJo668RxhHp",
  "key14": "65eGuWPtMsH6VvMjELgaFALcA7u3gPZrN81FjQhxHs9oiKrwAU89RTn4mqzZSQ7jQi3B7aFigwcjCDY3prr1Uaok",
  "key15": "2YSMVGDa9pU8ZFvnwgY9BFRK44g7SaDxBjAGbw2FdTAyANNke2Mcup1CvP6VbZdG2i4Fd3N82785n3r8kiF1FwjG",
  "key16": "5VATCJoUQVVbBqLrLhj9Mv9oVjqj5L8ZMAAFzGypdaBoNoRVUt1WC1bEHeYSMD62d78netUq4jDdG2CFKrXC93jh",
  "key17": "2nptfDxkfpbPVcXXa5W1kdBFNr7ff36tfdjSitvLZGPWxyinpCaXDaf4mFHewC9jAKHaEGPyeEbcCsLcJUvcxPSv",
  "key18": "5PgjWpLGZdyANh8NeEmQPYPrbybtTjfFTuti9XWNY7sMXSXLwdJDdBBt8PpuHykdnpk8hxBsij5Xif1uhod3VvL1",
  "key19": "5soNq2i9Dimjm1MfCXGUEa1wXf6bLGJW7xnugAjgkhpLd8EE6KpJVRNTr9HyGp98HCdgBiqWWDyRsMf3zQ627z1q",
  "key20": "yBJexd4oVfPMvVE9iUJfUUEFNoomHy92w9xkXWigmT6czaTvqs3wFs8KqYhvZpwAKwQutUo9PU6M7CEsZxt8Rj4",
  "key21": "26BztFdGmbDM4fjvpS1oUR9NzjYMRWXdCdNeJFZHcTWhqYdR4NuB4Rz9dZ4Jan22kSCmcXPFnPYjkVAh79yg1SL3",
  "key22": "HcJTh5RWD4cGNiXLaK2sMXqy5tGDX2kYTTrvWKoehXwy9NVoNRAYyyVPWKjWouuGdVKdXuGAGcB7Kq1A55CfAVy",
  "key23": "2VzMsqQegUpRmetpo9NtELjhGN6hrBetziV44zEhSbNzMbREP4vPhfgpb5rMnc927yRiQSZpYSHMfTMe6geNHBqv",
  "key24": "s71QvfY5Pf2M5Rn8B55feBRhFAEiBGZpeKnzjSU6UWPWRbiTxCv4DcvGB8czx2qHQmUb1NX888bbunDMZ2Rg4JZ",
  "key25": "64obFagbVSCfTKx1qQgmWyJVoQVzpsLgQbEQDLcmYnfbBqcoLctbDarMVbtvhJTVUm4tPEfDhNSavPzV1sGSwLJd",
  "key26": "4Vv3ycv5VZnDyVNzTibNvfGTxrCEHgQRM2LxvSendXFQ23jwP7wLyDyPpfwXdhy3PPT3y4jX6EiddxcWAiEZoV4W",
  "key27": "5EaTrJP9ydWtYbzu1YRRHdAWuHTbGztucRXGpoE25rxKr7EXVDZNbsgEUWhEmWpf2sona7HjzmC9h9uwqiVSWxwN",
  "key28": "4FZmbYhVHybGboxKdTt6MyZc7pFepWCCYDCmgcQGLLGSbpsqkUaWxT5HwV3crPCEXyyQid62pRyEgSG7HhZk2FKn",
  "key29": "8dQMpu7Bovzo4EgcKvJbrPYecN9GW74SoVq1KCzk2QB98prBeixCieNJFX6YttDNwgM1PJkBCojTYdMasz7C5v7",
  "key30": "3bVWG6F9CbAmL6QafQiWTdnh5pnfH5wFedyNYQN6oAp5WpYEifNhGYJKxADGuVXnFp37chiuay8bkbWyRtZ1ND2w",
  "key31": "2uFVdWWtTPeJesJZLEPcQEy5V8o7znMVuE6dQzDqMzppqsxZBK6cimXrWKEViqPPEaDM6rTGT32nwR3wYyCwoKQF",
  "key32": "2PhHmB1fduffgJ7CfDTY8J4vdqhNGSehGKKswNCPGxo4mXCUsCzCVvgdW5xW5RsBTxtgT1zLsU2RC8Wt13iAKGaE",
  "key33": "3HDFfrSoy2prMWtcDKSxGZRxBL7vxqh5J6RGXERiCvbVRdzyqDPs2gs6d2Krc8X4wezdLAfsi2uiVVJwrEDDmjGi",
  "key34": "56noHLQmNq1YduYcmWSi1iYtaRxE3W7LQA1nHUf3GQJA3ZvfPkW4npW4WLJZYHnoSu5acNu9DxVxbZwfixrNU4kS",
  "key35": "5KK2KiqqXCDsKLLbj76nbKk1emdguU7VE11kPUmDMPZM9pHg7iqbrUBh2fXgxBRPZR2QVyoQZkLjQbG3RnGuPsLn",
  "key36": "2qR1HggiCSzaz7H8vfm5za32XSyjk4ec4okQQsGZ18AB2pccACB4CebT5NzuEtCvNVkvJFbgsviL9c2xm29iRE9s",
  "key37": "4wSJcKW1Cok3nwK2rDfbWzabDKTkvEnDP6M9uSErTB9EinkjqPtfg5K5FwUBnBvoQP4tfRRTBSgAUWJFdpR4srz5",
  "key38": "3UgcWjLyRKmkY8q11N1VEYsPfJXDzbLV2SydKUrGkskDBs6yXvkQFzA33jvTp6NFTgNHfpU4mhf1A3GVj4SSJvQh",
  "key39": "4R1STSKRvxBiSVrq9sVn6EUw7HMC8JTqnjq4x5eoJ9JCc4LMzeLaWMFmzAGnB12vSdx9vDfxBsRHoVH3DaS1WeKK",
  "key40": "598VbzvxBPy7xJN2xDhzuL9bHR7YVyHyw2HcfbU2QTt3hkDMjRoqsxbF3jA8HMmq4pTB62UGjXNKXKjssomib175",
  "key41": "XeMMt7iiVUr62io2MYTck8WBpr8vBt94P9F9S57kRAtixQAzize78uE4wmSKYvm3JhpxGgBuTpFKxWpnvjQDYM4"
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
