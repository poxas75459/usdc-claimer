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
    "4qKhNAyXBPfY8ojCNXUMSTuV83X6K3sTNzZ6Tg76q5Z6B5vAorSe1PTJhzCuWgx6LKUUNms6Phu6VD1kibpDmXnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wBJMKMiFAPpuCQGxHYS8UGnGurdBmJYwggxZHvt14RQtPuuMhHTkNYNUaLo1uconpEZVYGLsitQnze67rBnCSt7",
  "key1": "1JZoTrZBjAeNq4HmfySt261kPZ3L6p15vaAbt3rVAjUdzsTCsZzEymkudbd8gSJ2XXniJYgmuB5ALVU6HdLsXvU",
  "key2": "39daVgqVU5cXfPt3h8EzdCsnXqPhD7cn5JYCnTMz8cEsMENQW8DYNzVdxmSj4pYaqgrBKCNwPTYQCEJ4gCxkcVrW",
  "key3": "XSSMXJYcTyCjX62UEfwAi7mhFsJt3C8URoX39i3T5mEqVbwFjH5FURtVyaPdF7yBJ2rsArE39Qn61t7iw6PHei6",
  "key4": "2PCe2PChZeNnZYSM5GpLFStoSzgVYuR4CCu1FjokPQXeBsS46pfSk7g2LA64YfRXZD2Vhmn2HzgkE3PepVxWr2oy",
  "key5": "5SiFLU2SoRN5c4YmVxyFsRur5T12U46u426V2du1Pf2YMpoUxLQeAEsmTUm7U1Kp6qWJhRaJrJoe4zzEK15LrP5Y",
  "key6": "3HcTSxJjbGyNgNnq6DcikisqwySof8k58xsyfJKu9kzN4nAvQpgTKYUiPKizAx3F58pPpipCRQCW4h6cyCR1ituk",
  "key7": "37MCMCayKFpsrLiFJEiJYK72EidwNN3zEGtym1iCcKYXWEk69LRqaw1cv1siVMpCQdWRCrECNvPtaDuMmpEZpKrx",
  "key8": "ULw4LmxcVsBJuk6v4yVD13djbHM4hSsveidaxyCEAhXM1wcLH8Mmgi6Ajt5LHqLJhHyUJEaMys5261UC67tLVLF",
  "key9": "4FVAPPNcvYk7xcTt4JzJyK1KKVpZ4zmphSYiJX3KpKnhCr4h69yJ5Vco77SdMzQw9x3VwxMUX9ThLg7KiVMdfR7z",
  "key10": "46PHis2f1ukCw3jJcrVcAWSinqPTmaYd3qv1HcKgJzKmWPkUcHaR4fgef6GAopinujv5cYXMFGZqKnuVmvn8Kvo6",
  "key11": "UHc53XVorSn14CoQ9Uj1bE6pLQetVLffuCEqbb8rEQi3gAXbgggy2b8vaJLKEe6Vydazg4Ndv7L2xZ2UW1zM2d9",
  "key12": "3p5AkMPr8D2BLq1kXb4Nrr1N8J4SspowYk2rvASstzHPyRKWP7BCzarb3buiPnihzcFvqxEVfiP1dh2tFWEohUd9",
  "key13": "4gXt8hDTo4ZFAfGa4ACjQwTJBnANDortqAdYg7cSfBFYyiPNEAYhNzPPXTtjdsYvKjc1FoRxsYzXJdsA52K51Yyg",
  "key14": "4N7ahQiYaRPjxw8BHFbLH1MuJovD1sU5ejdwvSKGw7GiGEQ9Y8BUxdpcxnu77YHWtPbUP3PE1RzBnxESxtSn89BB",
  "key15": "5mg3sqWPdiUhU78YyVHk1g6P585SDnKf9qBjaZgBgBHjZDHsymfBCx2ZpPh7Scmr72QNT5Jj38JAKvWRdoxLQqZE",
  "key16": "4i9gGkwvXHCphKyMQFVyneVsdQPXjCZCjxsko2Px55R9Yu7PRVgD3MN9FW3nVSVWtT5MGswPqLoaednoR54Z1XEG",
  "key17": "4bGF9iEKLherncS6PchX8noGw4xEvrgNSorAKQeV83XMGD5tYdJT95mcRfYucup7J4FkohHFzhFYPjBvBNNt1wYa",
  "key18": "5QPZn2uj7HczMoasRutB1ke1wdxm81J4J7ctfZwC3mbfmic5PBFsDpceVgGCCgi6E39KaBAXABesAiq6icTapdhy",
  "key19": "2Mm7sHp9xSfJQuz8DMLZGYS8V5TaRPMqujJJ1qZ4GRFDUn5sXm5Yu5Kta5ssZ9dEMPTd8K8JTwerVHDkaaJPmkbi",
  "key20": "53wAmoM3vM2qCZ9CZJnXeXuuwrC14Mky8J6vginboU8jyt79vHmExaX1bTBuHDaV3dEroWTZvBP7kcWrqLBn7KT7",
  "key21": "bfKNS3Q4Nh3BRoZZ36zR12LZvDe17WPWDDPjrRkgNDFa348rYXgpDU3K9ESNXAQNfsKkfk4mt6vSvBGKaaFCFM3",
  "key22": "33CoyTmfz8P2zZ1u3YpAuJDKRc27MhDuhN3C7n6LR7BfoWcvVVGpFKLNNVbQdtKypBF7FoP58A8fcNbyuqVzJhUw",
  "key23": "2aFQ4EJq9icy4C4y8SatrBkuHLGwUachv2PZYnSSQdEj9Nzn5fJk9aDYrQWGEwMXmywq237NTeiNnpeP18B2XTPo",
  "key24": "5qeYznazcYcUQzx7ZY8NjzMh8w2h5VwqDQcXKhWYFU2su2sPJUZxb86tWVBBQqoabsd2zFum3z9DienAVoJiKWNC",
  "key25": "3DjygZJj2RoE7wr8pYHedgLt31XVMGLUoTK2GTMgp1Bn859kuYhtt8Zixw4rooWtnzRDBJHn1PjULpvgM6xMvrrg",
  "key26": "2caJKrcuJptrjAbjnWy1y82v28XRfhnnViC38e7mmmgnemDt7FRAyAdixsABVPVSd9uahoF919ifuJwp5F6xuMi7",
  "key27": "AqmdADBX3TfqdZ5LPn87T1646Cvp6sYCD3FEmJ6S1xfoZP7rZrPUqvj3ALeLW62gKntXRAtbXVw1s11StDiwpVG",
  "key28": "3EZKFsNNwem5GJPPYruqgT1w2y4ifFf6cLXPG3BtfHYY1QVRwY6mxKzTcYVswmotCVu2fxKDkgJzeHGZMsNCgqvU",
  "key29": "3xbpvEqrVossRH8uQJuAkPkadzgXusYkLuL7owfNMfy296UhTsT4XkcdV13qw6Yo7B2csEDLK3kLrymrbURG441G",
  "key30": "55ndqzMSQtZ6hEkSP2ZZnxzUyfWiVG36MS8ycZYikUEKD75HWXt4hedgzpsae56ez3e9SSbDRYDEoSCKvN4Pa4bU",
  "key31": "4oK1zK248Es3k16F9648vTMie8aSW39pqS5cjsRnyspSSKxpfoo1T6zd5pAtEcBykbe9Fy4pDLQ2UowZ1KHM7CzX",
  "key32": "4NHyKoNkpVh1jUPHS8WngYSSPvX12e5GKHhUfWYqpuHrCd5DpnbXthurLX1esiHgHpkMgHo5ugw1fiDrUbDn8Vkz"
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
