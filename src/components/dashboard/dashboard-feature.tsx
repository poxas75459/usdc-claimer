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
    "2d5HrAexT4jwLsDEPhTGqZXaWfnMQJaTGmfupngsqJviaAuG2JEPqjvkJMz28qGujrAYxc1imNiKiWxstwkx2RTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sn1CqxEuY9xiuv4JN5LZibBNSjcx9CR9TWmzz8gveXkijjnaeVtMjQFktfXdvyifvxQ32EoYnstJdXBDcnhAzm",
  "key1": "3chabzMQ3XLPgkvQuVSEWr4sEWd55wn2KDrUHWoc5XMFExZkAQdLgLjZwcvEJ2DdGuaD9C3UmanMHV63TqAJkZxU",
  "key2": "2B8rhE3ADjDffFDcRGGScCYUTmkcFvmdZDbT8EjyxA8Wu3hDzdAEnjvReNLmpsX5VrhcdQnKDDMA8UHfHf7raPZ8",
  "key3": "28aWsH83UvUUhE6LbCwUkC4jR2J4qdVGAysjKXVgmSh764db3uBFJFpCtCF5ECw73v7wbWjQSMFrVykN8Q37qy5u",
  "key4": "2Zva8ZUVYkDvgaERQRmmLCQzKdA6TELmC2R2NdE29WtsumN1xsm4HBmgpCMakKxGayBRBuyhLWnb527Riz7tvPFB",
  "key5": "2tsasMxYyFNatgfQJqsU5LJtYpZnRAup88TPtAPiES8ymtuX39kQVfNUy12eUMqVzpeyqJUEZ3qs4CcvbeZUZjQf",
  "key6": "2rts3dy4DLLsBc2VF6pYidWE7iWTjFxqipUWmiS2L9CFoMmKd8VbXPqqKtyxV8rhtvumSxTzymvm5thCto7vzAM",
  "key7": "3v8CUVunqsTiJYvAU4wxfwtVunpQaFfNHjEVgoMveAJyrDHMejcnXvoy3xXvYeTBTMGqj4picxUiEwDM1iRMoyem",
  "key8": "44U4ncMsLKiaAgNYUD2etZmorMfCk2LPw8R1W1sjrTT4qUW1brptzh6pb1jBTbBaC8aAK2qEX2GrmkwQSLgYzWN5",
  "key9": "4Awo8zgrcpELxMLVSDjdcapd7hRSrG12t8Ad8hdfibetLj5vUxCqiwXuaJRempHhVMxJQiRXYVbA9LHDEBkRaz7x",
  "key10": "rPH6N4piSKfKj3DiT74wLJhTWr2oGyCiK5CXam5CiPXjiEMxw5qyABdHqmH4WAU1BUZBfFpJPXY1bdQCNVWWHJf",
  "key11": "2dExHDpEwmNTmQoPDdU4kjv3XKRUrZM8iFX74PEwWKyUqNMTrmEd8pj4ddsZ5dFRT8greDWXScF5hKtf41XGgKAL",
  "key12": "5DRj7vF1pdyQMN84Ghm5vHmkMQD3wKPJtnfopcnFwMRipmnoxXzpyfsUw8sPNkBHm3Q8tchcFrSfYzcasGNYfu9q",
  "key13": "61TsVWL5YJgqy3Fctm29RWqp5zMKb6VnqQqag8pY8XBEpdZZ4nn1ZX5b7xhf3qmyvYq2NRDx7SZbEG25vEG97zQG",
  "key14": "2pSr5o78QpJ5wmqJmkVcV7PzePSdA5JrxGeXRiqGdwW3kTS7XtTmhBaA67vS4CCtrewMSxpPJ7bGHAcuYyTkW3vm",
  "key15": "4HDC8rGwriSvgzFsVMaY9Dmnn7WbXoB5Hpx5BF38JoqD9CQcwJnDJzceBjnkMikY39ktvp8S4TqXbX26gE57mnZp",
  "key16": "2U9WaQG9wSCTfsUxr7oAMD4JWSDKiEqkrvS9gMsdxeH6ffAw9dQP2TgXKUSzAXnYgHp28Y9cFZsb2zExr6S4NM8f",
  "key17": "3XLNpL6VQbrKuWoguC1n8htAF2act7YXVfbJ9bsiieNFfgreACsEFb9RCnoKYQk4SYvvVzKQZFNdB5kNXvcScW1j",
  "key18": "5EFJbCDHdmzm9Z6RCSeLS5NXVyYEzv1qJHgaHugT2PTqRGN9QtXQx2hCkGJUUXta8Um5MMxPJMWu8oTPvJLTGwCN",
  "key19": "4ozxteQSac59uJyJn17SZczbhMuezQ9iqDbewuNTJsUBqVsVLdvbkfENmBegn4g2nuTP4aow96Zzfz3eSaXHwYK4",
  "key20": "39squQauSRkeqgqTpXdfoM2iEPPuAhq9PgcMc9jDsQ9vxxCtMG94DpvJbCxVSM5gbPRt2xTFYiSRCRTXvkXfPEXk",
  "key21": "5NW5n2EJkpo5D2efpQDcVgKKPSYRvAXy9w5Fu6ugPpTaHKRZ6LGmwUEV4TnMLcYqUtdEqz2kAUNrxeQU9dxu23jN",
  "key22": "3vnaAQUrsdzpBrjk3oJuQZ1waNpMN44AS763xfkAp88is59Q9PqC4qWoe4HWdU7aVZieoeptxEyKqqH89WnXr1KV",
  "key23": "3Qd2ytf7Sc3DETjNWLzG9jAPXdWiNK6UzR2eiHwjaZpFfuJrAT5nNbivhfFdZoWuoQSPg21vJzqCJqQp35WZFiXU",
  "key24": "5vR6whFS6EUrXnu6LXgjfd7mwPe5vV63VLBxzqq6KmVBerCaEcL2sbV28fn3Az7TpDu5FZq9A41Po9mCTu6JMvNz",
  "key25": "4Rcn5nNcSe13XNJRJDzfaT6ba946zbkxG8D94ywi23D7MuMEoCnstZqJGTcwSpjNumQ1TakA92MmZW1xrJav1kqo",
  "key26": "4Ui6sUagMgh53QGeqJz1vX7uhhwuLAbAkPz2Fm1iYYoCPTYsTrJQLN7qZXDfQrpVUFQb6ntnxXU9E3yZdASvfbSQ",
  "key27": "3wWLUD2pj39hn592yaGsvXwqaga8MoQmUXda36j9WzjP9uMGY8G8yvyfCCw2N6kQ8DKi2d7dAZwqzkd62bn9gMw1",
  "key28": "3VKjAoBamBiHat4oLiv2Q6R1YqpqRd4iLTzsJ6kAvsFnx1fiq88fX6nf2sArRVXqfeM9rPMheNbEkSWaXB2HcbWV",
  "key29": "4PDWa3ABXegY36ybWFVT2JSkJkwyix63SAxKE9WfGhrLzGtnzg9CGGFYHDPrUZuGyAmGCidSaPGRoxaJoTVR7EZQ",
  "key30": "wmNDByeRv2UuCPbLXGsYkKoxnJ7uK1Wuj1RWWB82GhC4Nz49zfixEi4cwqAccmqtkqAYGiEintqTrhKZJkCvedg",
  "key31": "22x3qNnBo1QeNSYdKT5gZJxtaJsknJAXD4vMwpcUpmrmoabP1NhQW6aNMy649jJFLn6aHxYNWJfEXSdUd5Z4HuPE",
  "key32": "F41mvehE9PhRcTJKzESK8hzHVaCPznx8neBiCRbF55mhwYqiXSm8CsXFupKT5TkbE42ZzUzf1WbwEZyexCVuCC5",
  "key33": "5TZWsxaMmTpHysgthfig97d3NJoKVUYR2JPRwb2uUrhUyd7gWeGosn2b2ZXAWYK37uHjYYXDeNGfxLk4c2WAf7Bv",
  "key34": "281pWmv7kDpd7TuQHZE1YMv1TB5WKQNF5KioJCDzqfvWNej8e2J9ADmrLD6Uu7goYW4Uw9W4mLZwub2gvsib7ivD",
  "key35": "2cHWpZAQxBjnNJU8d8MPkhPtGT5AWUCYRELV29jNDjuA9mdUaB4rXDEnFLH1Y7oAwFaGCApqusY8xKFUG2yk7SQ1",
  "key36": "3tEAmVip5iQdtXVWejnPxoM9XacgWokcLpdy36byosYubxwp4jqRPuNQtnYjEwXb5w8n6eEpgkiCc9gZrSYPH54Y",
  "key37": "36zn3YpXgm4D81AZsfh3G3HWjJ5kpujuidyn8Q9AKpdvHsCZnDzjGwVkk2HbKbEMj8My7vfZkRRG3umEqC4dDbrL",
  "key38": "2GG2juDqdECBkhy6vk5B7kZJnUrZQv6dXM6MvYdBYn9zvsrFChJt6qGxjwV4haCqKhMQA8xaV7nYGU7Gc9mz86Da",
  "key39": "5FihpEzwCNwqqdGjD6NvKrV4HPtrXuLuWsVKzH2Q4P1H347CEfZt7gcsSUDXE5o8iZ6rUHJ84h2btvqQkUnorMr6",
  "key40": "3NGaosPkF8Fv3KSba68nsBKMYBNpddfsnXpM85FWoQuJtv1meVvaxTGuN1vLjFaquvSQH7c3akdAKTKkcDGWseyg",
  "key41": "44AUdjBc2Na3GVN1DWPcn856zGR9JtgtQrqtjnZC8CwjUuDLH3FQDoHeHW9GHZZeAtFggd6o8AWC75uquiAj6RzG",
  "key42": "4ZwPkmsTDjzZVeni9CPEBPnqijUhuZMde4XQiR6qgXmpCAR4aBM3t77KAHWesksr2K48aVnhfBubEyg1SVAEjprV",
  "key43": "3NzdZM4aQb3uKv7ycGgJ4sSSP52G8xy6sB6KcU7HntMBTMpgqbZZLGycjAdYoUDBFHhPjuYX2DuqzcqqGXyeurrd",
  "key44": "21g1TnrSqzwEwJLpCsgvuGXKE2ZBV3y8tnytgGytiWM2obkXyXisiAqeoqz4JBBp7TUy4LUb6sTUtGoVhS8w5Vhh",
  "key45": "2uTbr8xJ6fkaNg5Weznh9a5cYYDh4cp6gAYvW1eEMLUxhs1UYpgfcNNwgKurRQ2h6nJKDEHCcPM1wn2T8PAB36R2",
  "key46": "4SYRSWSiAreTgqDrd8HqBqZoGK8A5m15x2tZSo5wqJvxv2sC1euWiB4S2pGuYHrZk1A799txNbR5MDtuRL1m7ZRx",
  "key47": "3bBxCGc9jtvRGVk3V5e9jX8uVRUVbBroKzBeECwqkUeLDoVKtK5Mi1RkQLm8zKaSHHucnrcWCJCqdnpkMXPdwzhc",
  "key48": "4jkm5CwTgUeTUTQ3gDKWZ2bYgdwGbyJdezdfXz31AmvixUGGLbRozDb6fN9NuMNrNBBoewnXYTbkFo6JYXLcuPYo"
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
