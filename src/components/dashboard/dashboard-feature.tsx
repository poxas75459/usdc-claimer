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
    "9AbR4G1oTxBqnS9Myp2ZgupkPEuUDqMekUcXb95jz8dJw4TXvKaW5mTrBaGWuw2B1UF43HzRPnGcc3BwLxRL4Ln"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NoNoRTjGuthDdM1hL1Ej6B6CKcrCRBLSN3GkMMAigfHVMZe7FyMnTKy7JbXRhbvmix8FMuQPUcYdQPiwN9BYjZD",
  "key1": "5G6fuApTydHtBPZjbqmJyM1m5FSydeJ932BWbdxpweVXKoem1HbNM26CSCRgPrgMboJ45jKyEDRfXEqi8QSojcLn",
  "key2": "3yPK5fre55FKXkBew6d8oW5H2HksznA5rNWHdBzyXnGUnyqU4EJweKgCjnwcUrZrUSTL4vo1m8n3EBd8t3MpjPKe",
  "key3": "3bGe1Kv29reenjCcgX3t2dBBU96uj5sU42J45oQoUwWV8gvCvmfppt9BS2yJwbYPfBdjG7ou6m46JPd1vyttjnii",
  "key4": "4CTnPpydRyJCs2JpHmeJLgJY9FcFQuc6JoPAE9oJjP1ZUfPg66uuDLkFtw7yYbdxKDa4vh12noEV7rm82TBHsyac",
  "key5": "4H5b9TgzRWxTi9BiyNaV6bfLV1QyERKJsrwFbg5u3dZrMxc7DBfkF7ar9gLmnUTyhZJ7RMokGvp37UpCdoiGckMa",
  "key6": "4h841pbKPstkpMdR2vGqboEuSxWHj1Tzb3HjazFT4xjnzFYHG4rHZp2kojYjMDsFZ1ZHgUV7yVoEfJERZRaVYbbe",
  "key7": "3iRQJUEhN2vnSLpNTGqeFEyAZk4AnuZZeM96aKnnXgFHEHYynVxeEsAPQJy7Rhk3D5PRGvVTRKKx3GLRkXgzL5ma",
  "key8": "4Zmz5A7GQNGNs6tXkSNou6SQntJC6gh1zxQ62WMMKT34R9AgyTuMcX4PXVDFp4384hbwDGPCAiq6X5vvvozvYtwb",
  "key9": "Uj6HQKSMmoo4eGULVTcwK5ceyVPeS3EENJrFP2XuPqHVkJyeHtgoXZ8Y8CWZi2hgXNUyJJ5PEdyZuakDQVvq2Z1",
  "key10": "4p9Cy68sQWFAsBwxGTcPPd5RdU3kKwZPiSDPN5H5jhT7d2DvdepbEDhscBT43r2Yeuidzna5PoK9d2LgSuiinMvQ",
  "key11": "34azM1wMYRd6bpHfXzsFf3eXEngKSTSKvedduKLqgzajanpX8u35NcGTswUjZ27m1FmjXMypd1FzEsqFainqFBU3",
  "key12": "34WWU7eAagoFogAnSc72URvSnVzrPL7WMSCxTJBnDXn8Tx9D9jnAQybw7rfnC8fZw2juMLwu7QSk6C28dWhmsyYY",
  "key13": "iEeQv8g9u3kSeTHRuZmsgKQpGyqQVxYpUQLiNuBBnHkH8a14HEVrxgiHf443jndSrXMPVQiKxApQTD31u3mrYw6",
  "key14": "iUAuPhsfYiMaqwiuaZvHrsLUH94V3Hnd1g3z6i1KDb5pMek58ies35vBhgkjRa9w9ZwJwQb2JAK7jQZ8CsvjMzo",
  "key15": "LPpfR1EXY1S8dA6LEg2uSSkQjnpiEXawGuKMFeXfmVum7HRAG4Ykh1gsVqCyRqG2JhSzcPKPHHpPjs3nQcoxJgK",
  "key16": "2XuaCUinAUPVKYuqxVXGBUAPH95cHoARE12TN7E3TJ1XJJShsfkNcJCtGSDKyeLA2afMJQXT29moxdxV3Vz2ZUxC",
  "key17": "ZJTok5rGnvPYqPoXBdeTaJbs2W9PmqUezQA2iLKUu9jXmcS3o7pLxkqia7pJmZpzqr7xS2mAaQPAYdYXPtzBe3W",
  "key18": "4TchqXHEzKsYDhx4pDebPGkUpKveqtq1LwSvm8jY1nHUWThuDW7zjygFrKDnzcSsXC4yPGdVNp8x54hu12f8Hp9m",
  "key19": "2PtS4Da1FhcNQwVj4QT65WEBdho9eqXk9ebJC3iKDW4VQht57JkbcssghUS3wkjiz5sTUwnwwFMmnDMVP1hHDLjb",
  "key20": "2aHoMm1gAN25hMD6AWMD8M69crbXjZrr4Ca9HDZW7EHAV9xz81tCAj9Y8xmtg13cNCymX2KkvRyKumGWbmnZs2sk",
  "key21": "wnuRczfbZLcVPLN9k5QPX5LG2EpA2ngwQKhfLYx1A2v7Ud6U5A6tyQUkY9CjUJjBYVZh34w6yW7wi1VPz48gD2A",
  "key22": "46BTtDk4YT8tDfxDnw4KgYDHuCMQCUzUJY8pVZ1UqeAdad6tC4pSdUvg8GDvDvLm8EhZ4GZwPDfuPJhZt4b9dcG2",
  "key23": "4mWCPCUPzzNquV6fq61i5881X45HfTUnpXPyd73AAhSwusQyCGBJzYbsUU7Cx4dU5g38gJsYxTv6AL67sTFchE9J",
  "key24": "ek4oZjGHmTBF1bYFi4V5FLCAwaUq7FkSxUksUA9Jy8Rtw5maVJBJ14RpXhwPtif3MvANDxVY7ZqNDvtCAE6VW6F",
  "key25": "2BbSaCMTCBLbkohGEQfLsDSDurcgG7e2WvuveetYnjdh5JovK9SW2FxikPkJD1WvGL1nnUxTxLab8Xe3nkHhL4op",
  "key26": "4X5S5qUVyKWpvQueU2ioyKNQGeUckQKiRXX7kVuYFky92fEfKsu454FyDqUYCckHpWBRXLPQzhXAGq9X7BSWbHbs",
  "key27": "2TDRHjvCiHW1tLSeujQNEdFuX4fpf8MexuxcwnrFNAze6m8f5PXyCUvaVpm4WSvC5zhbvWYEF8x66Q53ABHyxeGe",
  "key28": "2LpbBmMNR19kkUHZzvFrzZh1YZD9FWcgGG7XUJfexGx9cUsoep6i1zDznnXfWn4yCbXRfPpnWZoHrF2NQZa9JuDW",
  "key29": "3A2rGKSAUyNe3hwkTSEs4d4g8i45EaWMv4eAe5n56RbB8rNdvvtCUSgXfiB2vRD9xvUXkFs5dNTGBSK2hbMdtsAP",
  "key30": "kfTDXff19qc8SJsEpXyQC9qgZjGDBCPfi6sMe7TeH5kk4CaWjzH3s4XWsonadfvYNWFZVK6dxxCUYfzYWDyK7t4",
  "key31": "5416tByikD7pvUxfMJ7jbtjBKxqK7pgr9P5cRMQwnyxVw1oNSspPz15QcNWwW94xMtFC1rB2Wr1HUERZ5cbUodFX",
  "key32": "4uqHNT2WFAs2rmAhRKmUmJBcbBjCs4W7h8uXKeij6GJ9SYxcoxRxbU71hLtZgehgu4PFSwbkTChxEfR2K1Vx57jd",
  "key33": "4wDpDzcDQiseuXfaNzDFdgtnCMs3uryDvWrnXx95AcH5i7pTD6o5XvyJCSToQqBWaNAghyctQmyCqXiqEktVDNUS",
  "key34": "VhWxL56pSpDYRpdMh7SV2FRGvzDbqDLmEk78REaGdit97P8mhhAo7kAfp9njNBA8oobJALHCmd5SKVyfWYVESus"
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
