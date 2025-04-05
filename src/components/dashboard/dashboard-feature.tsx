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
    "gGwBSJSNTporpdDAyeMUBgN46Fmwa462MrCSgWy6WJrA7Bq16g3W43fFkjTzDhAw6iyMZrEmwT8eAEFSY7gwcym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r5zw7HxmszinNfVy8BgbFXtEewaNQUFpQEWjeDVLiwrwqc9PpKfiXRjDHat1nf7Y8R741c2ixb7T5AFj1UMJTTc",
  "key1": "5RVbDaRyRewZjjSB82WrpDi98gcnQ5c3338fa3MtL1fUYHjMd9eHByjjX7iXNEEsWEP9uNMH2Ga6i4DedWPzD1Up",
  "key2": "yZfwfntCbKJdStonegGpz2awPfYVFVtg6nYGWsfUGWeyzSdr7kkq1HsfJFoxXWPimEwv8xhDsQTH2DmCsNG1JDm",
  "key3": "3x9A9ceyvQ6FSPDTxTjFQ8AEetKLxomNkAQQYuTHSSbTiMjqUYrnt7w7wsQpsQBUY8UVzyKhjoLCQzdk9LnEPKej",
  "key4": "4qWUgScbPSL4QPqbERqFt3A32vmtDj1ap2Jvca8HFyJ9w5wdo2tPnu5BXqFqu7627VioYFNHggTFZ8ikJWwa97YT",
  "key5": "3ijNdpHvZag8LKGpnz6XQXLWmJ5RA9q47QG1NcuUaaLq215i8pBzjwkwKsuQxayxRfcWTFzAmeAi9vmGCcdTnccG",
  "key6": "2u7yhQPsAyoNxTGbCJ2c1zYGRbKG76gcjY29tt3uPKRKw8eAUKPjGKCxHmffzZ1MB6rDTGPKwKZyKkqWcF9pRdEt",
  "key7": "4ySBadN3RD1FeUVARoEX8vMsQr7BVXx97Y3Tjd2HG5KhDcY3MDTuWpUykdpeazMk3nVpj7snJgEMcZnJbW9p7aq4",
  "key8": "5jsP56nFgxaC8GiNP7fK47UMXejeUFp943G6QyF4gyfm6h4LC3bC5E3AC3qRkhYrevNwpvvKpF2CsV3RWEVybH91",
  "key9": "2psCtcc82RjZeqKrzADvvtVq4SbsenDanDKGTKvxcnxaxeuyhT7yjBV48RUe9GDPMNx35jhNunrYQuShedrWXTuj",
  "key10": "3ppLBRH4oLzSEzGmMVZ7CgcYhhJQGb5ydHnbaUWmoEFHHU2dTovgzVQPChrBgX7wgeFUg52wtpd2okgQYQXGxSE9",
  "key11": "5fXfETP94vTyuUdrHzbASrvxcTXMK26iSRwUHjpnVN3cmZF9azoreJMFxf1v8D42Jdiepw7zXtTBCNBLv3VNHvhH",
  "key12": "57tXodfcK2P9QS5SEycr1i5oNFfbsjgEdxXN96TGzhGXfnh9CCqBp8LB96FvsR7btrXvkCXFLorvVSEEmsoGXak8",
  "key13": "VWD6VNwZc7ZH8HLbv5Y5eW4RbVh1ZN95uzFd8sRScGBxZBW1rDJFRGnH2zTS4txLMr8T832UZX6rjjeEKczf4jB",
  "key14": "r1MxkEj86FNhxQtXVYBrmJhMgFJutxuMZveXc6sPFNQ1b1WsXZZH8trAkeLMksYMynBFFPx7fss57uG1R7wYzNP",
  "key15": "p9rL3mjgdsdaK797i2BF1oontNnWDV8L6HLqeHBGF8VdUiRiR9npUsGW3gwMkCVdm6VArQ82NLpCdjzAJDUD7NF",
  "key16": "4ojxxNGoujx7Vdod6WVsAMeLVhq9gnuVNDxzJwwV2QBfAcNuXNoDunD1HAyt4W2dyS2oaUo3GcSgXV2vtZnD3YQD",
  "key17": "4RetzSXSTU4xkYWQYbrBQz1SH5M3c4psNGk4P6uS2sheMBipQsxyNJTzRBzyFHFV2R1gFSo9bKoXYWPshqB4ScCv",
  "key18": "2XWqnYufbNm53e3uccZokmhq2vTuxDT1TKjpr36xpYgWupgbV6G2iXay53d2aQ6ARQ25mmk6c2wS5EPkrxMFfVrx",
  "key19": "wCEabX9i33FUGba9avkE3pjzV2RjRUBfMLAyqQtqhtH99UXPDJ2d3hDdYXWpYrDSkCpMqHjVP8j7HCPNMzeAnvt",
  "key20": "4PpxCTZxxr8AvEySrGLjiigVthJhyno1j92PcSwGSQ2reYE2difYzd1HbS8hpWSjmJZiSSZMifAmmcb5FQbfAwET",
  "key21": "1Y75gtZh72KmNN8BQMAXccpwVnTwV782KiqGqNzENqmCvmCPWW36bDrWkYuR7R2us9TCpmnsvZvAm6piP6s8cuv",
  "key22": "56BrBZNwNLPKFTsA8e7gDceteCrUKMxuxR83B8V3HJuDrcASjRb12vbWpLvU3VgXGmekNLwoRNJYRSFQmmjDLWJu",
  "key23": "2Xpf7s6N14zdVLdnkekbWNxaSGS34RYTY4QUgFsuxyGunG7iPvQgQE6U8j5zrXiv59qpnbF241ovqVErKHZN6Qxx",
  "key24": "34sxstH2azZPcZKzASfUaPqGpHsnWMVaEqLZpBqPoNtPggpbkPVkgmNkYWJjTq9Bh8p58PaboZsWE3J42wVWZgyd",
  "key25": "4UmJZwGonV5EFCe12LP5ChQ2uvn68wHXkqdxDJg4NsRDq71kAs8De1VxcvwGbq6KRNnZEWbfnrxvuKkaDDzZ6Jxe",
  "key26": "65RZqR9kWDufAnGJwjcguFbYpMEZa7APzYGSeg2FFMMN6NxZJjEyodQiAcEWNYHoXrjBhs488UokHQKJ9ZfQAM3n"
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
