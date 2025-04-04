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
    "UrGdkF4TyXXWoLWcBDVGHgrUibo4YwfWoaQiVuQ9TcwKCZXK77Ymkbue2trUP3XbPmNkKcrJTa9HcB6J51JTD5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ABxFMKkf9J5WvLA3sonb13pnYw4nevsSRgGA7iKxCm3nk9rLKHeYYYQbJ2Vtw45x5sCQoT1uMTEqiw8d8oP86FQ",
  "key1": "4sMU8M3B1EwALkyVm57eLYnmttrRPNK1zzHdrAf3XwjzA2BCYZgRT9W1P4F4zzerCPtKgu4Nmjxw1yNhTVg7TGCb",
  "key2": "3Qn6AFcUyF5G3cjezGAaq4ZW1wXJs2hVKbA9KzZPBYkA61doyszxw2Vucipk8Lm3a89mmqpjb1na9yiUvL69pYb6",
  "key3": "3W4YCNKjZXEiUnGdqLdd4pRGcr55uFeGf5fwcr8MBAfpF1FW5JWYuVamsj7G928z6xKZCByXfhqw1rw7cDtARzwX",
  "key4": "53frN5X7dn1i6MhzFdPssY3megtbat8JBaRUhXwcC9ujRYXRkenbyRiH3vBgRBB1QJ2Y614CFKh8B3ZGebGwXF46",
  "key5": "2xf7FV4PgYs4WHQcnwekPi9pkdiVA7CnTQey6m1TWsUurHB52idf2VB9HWfQ7A3P9udihxc5ubj6Pvztx9N6LZHr",
  "key6": "EXfr9tVqzg5Ee6JKeMJqgh4zu44yGYvv5RkdgKXJK2ZeXYNVSMzDQP4gyhwSS6h3zSrph3HJgRGyCb4dQLtogha",
  "key7": "21aywaPWNEPJwZif3uF7kjqXysUkGf4scBkR82DrL1cLuJjVay74VyAA37VhLeXL5ux28ZgKc4PyquT52pvPaNWr",
  "key8": "4cczC9bqsBroUEyCzBBSk1M6oA88KN4KisxdPvwwh88y4xuMHyZrXTnt8Ay2izn6v4KizvhXBJZBfVFvWcqqV5BV",
  "key9": "3PdWNnqfopcwM1Xn3db6QUDfB38NHeubq6GCZjUzW3DakZwGTVNKvGGRrRAN3Xn4wsg2EegLr8Jz1tKs91n2nT6z",
  "key10": "3e8yJ5SAXzSSAM8MT9aoH8FnunrKVMukzQThg5BxZt7s2wSaCohiA7wGwZMFjsLWU9SbwTrkugG6ysQQrwJHr3mr",
  "key11": "2yMEgpcwYWefZrHcGyQ4PFFWgLfbmukmSCNFQnMTJUBjTi3mRnMb4Rjbd12kqdoaKmhS5pBqpFQNBaH4tenHwyCr",
  "key12": "5Ugan5Zxm7GUPVMMnoKjCkrFB7BuoJpiQJ9C71p3HSbCe2aa7ELJJZY1SWUcY4mesE1skiHGv3ASYphpBs2MBZ8M",
  "key13": "3jMTAXZfbJ7XikGCLG1jMuxtnJZrVn6TRHZcpE3QLUTVJ3bFgqfkCgTBmac9yZF1XgJhjaegY99obk1aaafvjqmo",
  "key14": "44Qv26WnMF7DC2ePk4chUN8d9NJZpc8UtXndKWQcVhLcMFGX636WsVwsKjbqoFhiN5CV4jNYid4EbzAGJWZM3TFh",
  "key15": "4Dicujm8WfnKy4MjQsvuKWRDzLYK6Pt8mRKRNdbz2UJjfjKpBaJCi7G4V29QdUhr9CT9DGCkJUj9MokLLWeuT6nL",
  "key16": "3sesPy6Jk7887z5DERsYQ6FWyCAW8qAbVL4rmQaVpx8KVGa9dB4YpN9KZWXghPmnLJ11M7ttfPDEVzcmBRfrhkWs",
  "key17": "3JnCMJno1GiygREwMCsE8EeJT3XFz1b8VZzSTgbSqxvdGXFr44T63vFKbfUyww1p4YCBnbVNn8fybvte4y14X4VH",
  "key18": "5T4BefFpGyAdbTNfrZD7r7CZkv6gz5fYD8jjLak8jbv9zHdo2nZ1rykpZ4SvBbsKkD4SX46o9mjJmU832CM42mkY",
  "key19": "49gXCKgMcqdZU45ozpDuX5uGXLcdfCJv3nopNL5ZbBL1MiM3eLgRFJmdKXvQ8VQEE6nJ1qpGDNEET3xG3BrH83Se",
  "key20": "4Gb85ffcXT8qggMRFWi3p92gLmuecHQcrjWNh5FBbsTovZ7VmwZwKmxo98xSEMdDXzstwRGo85RQLYC3ayumfoat",
  "key21": "5KMLfbM5uoy389KXXh8gSp6Zvzf2Jm1chPCtNtrwcJA2vDvPX8G47nGny6zhpJW8Qi2mhnFE8ERQGnRax4wXp1oe",
  "key22": "5orviCttvVkZo3afWvTi4PPtDkNejZkgiAVE2zZhTyndm5z2kxHVekFiw67ZmyFUCZH4X62f9y7gubrfm1RQpHV8",
  "key23": "2GuTPqEdvVkpPRb5aKHFJyf2714VakAL36VwX3y2rpYa9hPBjitCZhXY96MT3S6Zuhfzg4H6DUeFMXCEwf22aNpf",
  "key24": "k5XW5MYv15wSR7LjytKpgpp9LgaN4Zax97kGLaZ7DBZYmAR7PPpp7aQv9gMad34jQKw6R6PQcfq8scqeJNL2885",
  "key25": "4k193JkuVv7shD85KPpBctPT6eQ6a1JDwfVxJyoBJTKQ31TB6MHxpRgywZqvzE6TYeb6YK7amTEfUAMWxxtE41zn",
  "key26": "5VvhuQ9Pv32qhbHawaZiThEmpKAzWeJFSj2wYRrA3aUV8WSJ44dm8J46miHDD4FMxVMEQhh8ncbq2DKXZcv5JRMM",
  "key27": "5wLMfdiaDXfQz2TGaMFtmF2JBB9nbdp16xGWBRnDKoPGaFckbLhaMXywdQwpWCzRvBSS1C61ahd8oGpmVmnhbfEK",
  "key28": "5x3yzDeMUduMdLDYmrZDrW5oirXot71uNTU4hRaj6XnoDhxUcpu446J2ipsMgJQzTiNnMsNAHQ3ySANXQXNQKvHh",
  "key29": "2JaEDKVcUsof8wDCGMrxXdHuGav83dt2MxemHKaQ7GsCyJsbZ9PzCSQ553mX6MU2x2jdRkoxzwDiBjdkgWChVwpG",
  "key30": "4ydGJC1vEiJTVinp9LCyKmZpEmbXaHeRnSdtjnq7g6SWf9Dh2Fgj2GfKYzT2ij6hpDdJLGjLMgrNPDZij9Yuy7A7",
  "key31": "4FthgdVsfYeN6vFw9fDkR4o3aUbxkHgbTKxKLtq8dEvdV3ziTASWyS2KwcHpn9qhkt9ToJfgRe8Yx1xWxQHA7iyt",
  "key32": "2J6UWmYeKyTyq8dpS3wjY33zqoHNEPcsXd8q2GqiCLvQArwPWB1dSSN9moSUfcNdv2PvRTELE2kpyAJgno5NXP43",
  "key33": "4vyT82bkZVWQsKhXtXEoZghjJ3ASo3yTsvebsGvJiGE474wFf2F7AHmaLnvnKKLX4o1gBvz2r8K4YJCiWyd31kwz",
  "key34": "3NyxmQWxb66MdJEyVN7Zf9uoyNdLTuvkToWTrUPQfVHjsmUJirg2dhRHYqEppLPdcxUEwroxQrkyjyrSPkY8afYB",
  "key35": "2ckfgmfVbPVi9RtLGLVim8MFuwWFmrcR23k35oHvU22UPcn2BCZMUGmBgEGYfb3P9e4CEFGZ3ZAcaPkK1JGRrFbp",
  "key36": "3i98yqmSrHDeu7W4FbtpdQTdD6M5DdJ6ejCmkK61RKnr1LkW6oHkZVkgb2ZpNfj2QMziDcFtSRRM1dAuiCXB2SVf",
  "key37": "4UwRULm18JCir5C5N6p43e99ujrMxvNTeFgF8s44LvmjKHiiKPyyz9fJnNvbVtxBqgjgWyL82PxbHZTb85qxwPE2",
  "key38": "voLtXR3o3hpoyvPexe73JhdwpY2cUchCx1NUtms544uKZ16G566UR4ez1ZBNJfTfHbSQ9XVsc398nngKxq2Q2Wt",
  "key39": "2AynZgqbQd1GF9HT8EvN1tViguqjsAmF8W9YkaAYSTm6qp1VpbD4PdocEGnvVXpyohuiubTAXxdBVwVrke2X7vfC",
  "key40": "WmFcs9kQd8JdAfHX3AAuakPN2h9jZtCvS7dYBr3Zb6xNb22Yttcsu5vNkBy4KBdBFT3h8uA5UavLS24hsrud5yd",
  "key41": "2e7Wj1aF5gGhjRwJx4zoMX9hjf1E1sv28NxFu7KTNca4UEdgwEEvdsfUcr4U6MWpjHPsgDyjhMG4QQ8xaWL91JGE",
  "key42": "3dXdxsMBCsrtXu37g1xiY1jkc4mfj7aHZDAr4Z5naiTgJHVuTV3BTZ8P1ZaRuHaDtHa5wyetX48GmLnqwE4iEaMv",
  "key43": "3jGCKExuG3Bg6sx9SvocBeX8uiQyJrxGzWMcQjPwkvu9vxQmNqvDMZpRS87dXJvUzemsq5hUeqQ5ttwKRCH1FQCL",
  "key44": "2PRqnjC8N3sPpJWxUg8G4fUK4e35D6c5EXhkCEJK3ZsXyPmyoPqEvAWYQXrLbDsVTtcM4idUvGFN2eFsLtNE7NYh",
  "key45": "21GqQt2LNTaNSv4NxCZUbqyMgqjphExY7WjTHJRzeNQv8GQ9b2FRYwpKZcELABjKB2hP6TSPvYAmD2hoqNAGqLLL"
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
