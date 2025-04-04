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
    "jB1TxTVok96poLNXZm9AhHj5fTtk6mqztd23X895vpHARi9cBtXnDZDfxWFvvCq4Xp33kJLNCrbxMv9NPEEvQS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s3ArR1Rkt29tvPbcY3U3f8NFXJVLEaxaUL6Xh31wavsvY11CHprkHvK6zNbpUkaT5EsXM16vwyU5vnR2oB5QdmE",
  "key1": "25Py7wtDSVQ7gNknEp5sVyTuPhBkY6AqHHJ1eVZ4o5L6pzyFpyuqvdMv598AqP46fZdA5RZJhWuAtBwtVm1BKw1h",
  "key2": "21D7imVvcHsu5evA5g44We94GRwdFgZx6139vJ5wMs2AcXRQ4qK4Mefxdd1cHiaJVZS7zCvoeNdkuasuqdqwPh1u",
  "key3": "5tAAFPk2v3Btnb5e9vxNCSR3UG8xEzenLtomsMFLR33gMZyHHGJuJKKxWTyTqJfUXvNqfuWXdGF5NHSQ3XX1xUc8",
  "key4": "2VzwwwBb1vdYRhtRZrfgmKpR7DRmKcqCXe6QnhAjkRA6FGt1ys7UMXrDwKntuCpTQp2jzjBvkaV39H3oTs9ugaWa",
  "key5": "2V8E5qYW6nDi6QwduLhQKWioZZqDT6R4YKFjA1ztbEo3s6AzfGcJbZJKtuGGN7Hr2Hr17E7iSppnDZbSv3h4PKzn",
  "key6": "5WeWeA3R1spf3eDvYqeSALvdo86oREngNtUPkfysHGfBwx63EmdcNXHyLSRK9feLbafMNgPttyJtF1PrkS9uoP1L",
  "key7": "5H9dYoxDU1edfT8uVQNMMTdPhxLenu8SPFiMdbaT9Tco1xWzE8w8WjWq3svGHZY47a1EjaojJPunF1dSFeBG3Vnm",
  "key8": "5gVTo95mfikTy1TGqmapyKuDpa6MnVyiCYWukAQ3FTHpkrYu96nPK8BYgmrfPW7WXCnUYTV1L3WX9egRrdJmgNya",
  "key9": "vYhdnHrgjk2pg8RG6xKDqq6CUHizQy8DnShiyMPmSQCofJa3baZNSWaE9ctKhxaSL2i5ZZCWkTviijxU21DUxWt",
  "key10": "39DPsDZogka6ehQDwyDrqyd4CPBDPz6ggu8GuHVH2iFyJPf5ZBwX9nrQ9cqChvJJoSDVuz9Vyk2rUQW4gefTRdPj",
  "key11": "YEXYZBMDx4rRVrjLJ2wEc26GmhPLpWSME116wfNEZEqKp8tLwdXG6VFC6Ga4GMPyPKo6UTqJr3t44g4s42maTQu",
  "key12": "4jr4UgevaiAH9kcBSnFyvkauwAzYj9aej28FX211q8hsNz7GXAje8cnV3k9y28SMMmSeKyWnLTMSJF7PjjaoCwXZ",
  "key13": "48hfXxPxXqaTvFy5cMDnaSjwecUtGzQCYqNCfEiYRPof8TdUtY36siXLwLs2EhsAcnj12MM2JgA2hwydtQQSXQ9C",
  "key14": "4qQ2B5UZCLkghGG884A9kJmD6afY2EcPpNJX1FbVXDi7yNfKaESEErTu6Fo8EeQKEJvWdVd7MC5aX4yhVGDDeWy5",
  "key15": "3fJgAcwSLFxBC9CkUUgbRqy5zVT4MzJzTZm8vTNUkNToDqTq2kvTcWb6Fc8te5MDLSMaiag5tV7V12yJdVw7oiyU",
  "key16": "MU389445ZyGnJasHUkocDGTDzGHwuiQPy9cy1Ld8GLrt5TsGDMDGTs5jfQVKsqwzYP8tEuiNDsjANVgGonjVxnw",
  "key17": "2RNm4GQrupMD9SQUsaPSaKjXuVpRqmgpSDBi1Neqd1HuSLL7Ad5r765eqTHKRZb4pLTMUpo5xGiH263Te86b8ytv",
  "key18": "2GbkYFohP7yjHgptQrCfmqhRr7qSmRey9aSSGNwupx2bv5oNnSnMfMmDy7KweNJURX9VJRCa7TBxZuhdwruNWASB",
  "key19": "5E5171V4PXSbY8BRn5zFhKid7Ckt17QtG1pMp6xe3vzn8Kyc6ToHiJ5nHCLxJ2KkLQukjqCd8c4XasHh7n8tjLr8",
  "key20": "gr8o2PNHo2XQBbCQn2Ph5ifuZuvdQKGgcGyo86nzc2GngE5d1VoFUpf6m9oENkxXKNjnSigNai9JkEZm1GeCrjt",
  "key21": "2hzy6asAkbeVW3dwv8Dn77grGoy8wEJcpNTpzk3nGMsUc1riut5ibqZFhpXvZihV1QM8answhpPxGSJBrvMfu9vT",
  "key22": "31XwR2FX8Su7oWo4Gfc6H4twC4nJWqJxjB1km4m6epe1C2sJU8tN9eLiBh3bAgwn6XmDuxUEzTUuVosAcBmMLYmz",
  "key23": "5PPioYdTZGC1225SqKCmCs8gsZCEa3ooDnJBHKJYzUqykpSriLCJ472ruNpGuL2dfSPiaqfLZ1AKCgywuz5QGfRG",
  "key24": "2CzcMyXAUeJZS4WsofzxhLuGrd2782BKBYZHykhcuPdK6jfuVnyHPSG4bcHCrJprbMBS4YxNfG4CjXgMddfU6Sc6",
  "key25": "24hUbFDeyMs7k5DjMYjG6twAXJ899A8kQuxxd991JShHMnTLkWWp2mWNq8ZYWWtyyBNiu2U5J6ErE2hh4Pu7U7G6",
  "key26": "3cd1gam3f1rpkiTARRJqKA6PPv22W1jPDLYej3aX9tETjLZYT8ym9q81TAdAZjUota5Lk9KuBRoW9buFAY8SW19L",
  "key27": "451as3E1tA1K7FeRT2WUjzZiZ9kfXBpmApExgH6S6D7xzrLJk6ZWZWu3fCEx3QXehEpfGDbYdZRo51Vfto4sMvL",
  "key28": "2yHHsK1cgBLRM4TRNi68UYQUUCgaVnZoR4HjQUTcBuXeSKYj2mtRTi75w6g7VaQit2pCXHd2wGL9qSxgimqrC44F",
  "key29": "gkffCeiGeuc7MVDPDZPasvS8FcZhBVxkvtfsdqMA3dP28VTTYdjsgkVakNNYHG8SGhXfsaXsNBogQHkb3GNFfg4",
  "key30": "3yeKBitZbWDLSmdmMCT6CBY8dMzQHxrhkRgxDG3FUYEeEDZfoKX33dhVXdKY5pRhxpVtnqZV5L1KHuKTMBMD6QZL",
  "key31": "3uWgp7TpSD3a4gN5uBDNygPhdvEzykxgiXkM6Jw6tA1usmxMPUxShyjcXbajif5kKRhGBB5wMrQcVDrg24w4o8Nf",
  "key32": "2hbKmpQHvLVT9RFaJeuuMZTzAMtTNNmmeT6wJSfF8YKU2D3kFk4yELHsXG6UdG3imCnJbtNwLR8XPJ5Bd43nA2DM",
  "key33": "3PBhABJFjZunbsAHotEVh8GvDLgLw82yCGcUcMgxHTcCGdjiYEiDr95KHEkg9JR9XQ51HpGnPwSdc4u3hTDntZsk",
  "key34": "2dtP7DNXXBReFfMFTVPJ82fkK9cMFR4UXhK4QQtUCxyeacXXve2bfaAnEtBNsTV1pDGd4NnWxsWtNhLd7e19XBcL",
  "key35": "2GmQuzKQDMJdZJ6Y284VhMXhSqDY5djPfFwtXRcD3GznsbZZMWYvJL4xQxTDTaczjMm9cu2swbVpyeJS1Lw84GcL",
  "key36": "4iZdRxBfcTTwk4pHq3vfBMvRwXYPGs5v4L5LYRZzzvp6DkfkzSLem61gHyttZwAgjVKwkooxLjVWJLQhXtvUFgPo",
  "key37": "Rjd5ENw35s9bCA3xS3bo4VaoFmgiaHcP3YunTJLcBx3dhgCCUtexM8kVgzdHhYjHAysqh8oCsAkM3bkYPYpWwN6",
  "key38": "3e4WgmWyEMxxR2MqbLpnTqeKFYPs7NRkhLUDu8jwboNqSF1u1GTSukgFFnJZnzyrSZLCAbtaye2NGEB7w1xdMMjB",
  "key39": "3iyBfVS4X1X95LDkVfHyYeH6KAgnaQCT5sMXBdBRejzf3V38HAc72fhooyExaxU6kywM6Bv3iwbsrKtPoAw4Uxan",
  "key40": "5ubqedpWzVw1hum25eFK7UtmU6oVcRGxzuLbfGRkSKKxDUdfvrmHUSPJrAtX16zjEFnrtUAEfs4q7Vc5mnuBL14z",
  "key41": "PGCZY64KV75k94nrFBwXzUiypR6w1ApZqYwb8LKJ3BGJZVF6QkNtjg4B3So5rvv5v6ojM8YaAhbexiCbvTuq3vk",
  "key42": "5Sf96mK1xPErV2DJfv2N26R8TkUxd9hZTQW2m4ecS7e3WbaCSQNQA7z7kdaNc4E7YzEyxftA65i2Suv2m9m3yt9w",
  "key43": "2TDs87XX6DBiFgC1J4vKbv54hpQYr53RKKQF5owmanTkadMW89zdwmESPhVsWNH8SmnrpAuGmsMrPWtYpfjQAKNQ",
  "key44": "21gHysdwVR7TivcxAXq4aknQZMP5FRbVq6EpugvLgAkKeEJNUc96CUcMXe3DBjZNsf2aJ8yKb8aSu7VyFt5Td8Xi"
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
