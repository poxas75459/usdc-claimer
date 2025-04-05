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
    "3nP2wugm7m3yPeZoKoWeNr4TEv5Fnab9htdMD7uuQhCxCA6d7rYRokKPUZCnweCkUSp43fbmPWJ32YYvPR55CFod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T3H6FcWHTqjP23JuyaQ6QRUYCe2F5BTTjmKms27zsfmgSRuZyEELsmLmaNkKxhJ2BNVxR4uEhNRvFb9JvCuUqLc",
  "key1": "2eZLVmASm7pgG9VSqoVG54Pi2DedPeoQg4HMaQrmoDvnbS28K8KnXM8SK47jaqP3ZuY2vtD65BtFphKWbYarsp4R",
  "key2": "5ssUUVmxR86ypaEcjj2dug7XB88e4opX9NTJbct6Squ89vwwEjL1wrdvwRpTEDrzDnPbFQdQb6vcmGPWE4FwstZj",
  "key3": "2SnJbAfgbFcnrYua5Ye8CE4E5yvqJZLGemDUHhjhngWmwWJQaJLZto1iGJpzXm6VSMtEv1fzvTS1z1SAFeqcr4KV",
  "key4": "uV33YLfehDsXNcC9p2Z3s4mwnLgPAqaotSFpzozntjhHQJCJFcqpnaL4X8ENWPRYiZj1Ej8ZSRXZtj32gePNxuj",
  "key5": "2PEbW6ewjk3oEJAXdQz32pnVVADSaZfhSdu4YViudszARPVstdHNCAXehKBuKU83SZBSGopCjA2QayaKBv1KmPkh",
  "key6": "5vLbKPtfj5gSJV3DoemP5d7i2fndTVTxCoMB8bPcQwRdT8FxZrBrEbatFwDA4dy2guCf9SKUaxdtN878stVxdiGj",
  "key7": "22jiTfkPywHDpQftgq9w2WrbcJW9eXMpohXfS3tqfwsMetWyKjAbEe8oEaPHxfohAQWyGz8Kib8r4vpH4YPpQp9h",
  "key8": "4pAvmg1wUpprG7u4GYDb1e3GtiJyQLHoLBrzpiyPzr7p4PqEY5jsnkjzLuBtQbHZk9wqXwhuw81ZU7ojLwoyMfjH",
  "key9": "35xs1Es6mtdcHV5G2nyR74ZD2fcC825h6tvDPvG8mUgFTaLGUmd7d2CHc6hB4wWo9Maat1y7DB4MFkMRMPEzhJSg",
  "key10": "ZcAFWL3MAp1TFBeVv8RoGaGNiyt5R1ab7iELDiUVwjWg7D7vXujBBhG51kn2BuHMoJ6Z9wighiZZEraj1YsAKDp",
  "key11": "2LgLYwj3KzePefvbpF6WgNiq3Mxu6koLa5pgRRM4h4N4RPvQVKWB35czpX1mnmsNFWEN1N1PgomJtR2oZomxDALp",
  "key12": "2rwDFcRcToC28oEuDMwfXiWYb3RwYoHu9dZ5hTBhJw2VX5Do27JLgidJSvsmZVWxTNgDy6CnNeTDk4LXCa8fDQQT",
  "key13": "47LRPNcMSAZSwRpmDhsYcSFTA9jiwG8MZ3LcHLjF7rP3KYgYRcdrATpZaWrND5L4ReDcxQ4BLk9dm9zFYwR6z3Hx",
  "key14": "4EQw7p5TRKFf99DRdbDqmzpnb4G91deNN1FUzoq61LZJNLE1Fs9XHT3PmMUVPsLLd6ebeTfKPyyCmqyWV6SJsGvH",
  "key15": "2hhiEAgMAAZQdS728DQpymWvhDc5Rd9oqsLLRBqbhLa75kLfydatNqZ8oD7ye2UjLpAtEjTZ31f63c7MkSoHohXM",
  "key16": "3ax3omSkmMARAaJg3GbribnmqC7hpXzmmxVWec9S88VQeJcRe3y5a1pfe2T8XWGCdxYvYSmQbdjWZb2sHU9rLNri",
  "key17": "5TbRQ5zVXbXtobGmHGAcZvy7GVMrirVCDaj1FQQodVwwWXQ5rFe9PayaPhaCN8P2GpCGWsd3FEfPhmFXTif6hvSD",
  "key18": "49tq75Q5nAVcbJP4e4yq8VBYfnU1ECJGLDUAHDY2oUeauD7gmfKYyoyMCvotLcnpzqkUSLJY7iGvDrDQGHdZD8iy",
  "key19": "Wo5mifsFv4X16Yd8CyRUq3fJGbbdi6zLypkQmRpT5xFVkAWFQ7oFUS4APrQrPdM3G67wRscjQXFnKsGu6xq2Tf8",
  "key20": "2tpahuPGaR9d99yzVcCKeiDsugvY6wwG4uYjAGGEyFW3A4gVpxowsdBKydXmsAypQrmQShzj97SKF6DpCkW4FZVy",
  "key21": "Whqc9a31ccyr6n1mQcbMcDqGpixaH2E8QrpFPB3oHvp61rCXqErNQbF3AFJrsMJTxHVFjtcwr5NWbhsw7huUEcc",
  "key22": "2J4fkDxtngtHCy8d3hGhRJY6uRVGceMMjdZY8iyf42zvB3eDCpz2VJgZLcqykPhyR7JvawgAuU1c4gkKcAKukQ5k",
  "key23": "5iSbWAU8Cna3sE1LShKGozbk39kCeL6gi1zsuGeW8X3XHovVA93MockKVXZTv8h7Zw86CqFfd8mhoWYixKgt7xe6",
  "key24": "3F5CG2RYgVnPbJfveeXjbW666wfbYE4VggMuhghJNHStB4p3fAaENevtJx5T5epTUZtD7vu7SDsArSgkCxuVmH6C",
  "key25": "4XAHNBtDBWtxnojtrQ9nvwn8a9isJb4UVwMvHjGXHxaggSgrd6oaBTgW8SHW7saJznYcpPTvFhVfK2rs4fAStdNa",
  "key26": "bzuQem2fNgcQttoHF7TLKq2XFzHsfxWSytAHZWjbD5wT3zYk4pV2QcMWckAQFjzqaSb3FLiFKQgeJA48jCbbdyB",
  "key27": "HGd8YrnRE9KT5SoRcAGySaSkzDdhWjNjus2LqjGwCJ2W6GJndtA95nDcNzsnhxAgrAG9iTc8r3zT4hfyx7WW32G",
  "key28": "Ynex5t6nUxWSZmYEiHstFgAr3kRhUFFyPum33SdreTcjxWgeK7A1KxgyRX5NMekxnTskJipu81AdJL9BnUuHuJD",
  "key29": "3EPD8YbbducHDnovPgfjML7zyaAxdapskby8kvx33sLp4h9UMFb2TNZSMmxbdDrDvV7oig1VZxDgiN6ebQB2LKpz",
  "key30": "4tTbhfj3ntHRAG3sBdSFJWgcHYy3pDXcdt3ka9n1PAnKoPujR9SurakG8jR8Xc45GjiYf4iSzyREgg9f37YJADbH",
  "key31": "58tJiLqMKYJF8mwsngKEbKiMJ6pXhcNHmPeQ69MAPmkzAojBL69v4oXH5KTGPu65aBqom8RRMNXEadbQrzC8C61g",
  "key32": "64PDq1ytK3qFXKdx4gh83F6wWjSUceC64Ug5EJ5dps9qska2j1C1RntJftci1NqyseQJT9kZphpMaAV2p3JQs9Qs",
  "key33": "26RTPu3CPF77Hd1dbWUDdE2v4RsE2rfHQmZGeSLvU4p5nLCYXqBtGrraMpeTooLMENiVavgxGthTSqWekzinqXPr",
  "key34": "Q9GcjnvB9h2spxXGbL99iPoUq3scv3kr8CT2oxKBrVnHcRuSTBGvyLPMYtenYWyjCNjVpunvL7F5vzS4A3nxSWA",
  "key35": "3pSLP8jFGu1CEzyZzJiAkN8bc1qygY33ZXf8kwkiCTGjzWGCKmk5wFhJMSM6Aas6pVUL1f3hAty8ixL9VAzocrmn",
  "key36": "2AX7nsADD888w4sxbAeAmRYXvU1BAaFoB29uXXPTVmpaxYz75bSn1kpBFV75gpPahK8bFQHvP9zwh7tZcUaZ9WQU",
  "key37": "FVbUar14ztsiKu6Sv6bvGd9WxJbZcGYheQKdtnqLuNtmRMTS4NDq9HkL2rq4ts4FosuANTs2WUKVYtB7U3ntffA",
  "key38": "5cgaJrUaxU54QeEipDZtfWo7vUsYVQFpb5NAYmhPhaVgYD1DZgXqGjgwuHTfjWXnHvAaipPTzLFYrSwAsHVXfiFD",
  "key39": "4kPXz4h5TGPzNMyUee3xvWwWjKiqEuAbXWvec46jvxkpvMHaUzKKak9pHSnyemeRvLmBqRRCAXv33frrSznmAAcD",
  "key40": "4yEddbm9WZmVsLsVdcSxLvzudTNoqXqmrdSdu92seJd9DoemqihRuhkpsW7ZTLLM8hhZFvTbNvpBz3ZffFNaLG65",
  "key41": "3jjaoyDtCEqCyXYyumK33X3qdpHBKaGHzPTrmC2EL2Seupd8vCXeoBMnkxBm2rDwcPUtJzv1o2Z3iy4m3smjbGet"
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
