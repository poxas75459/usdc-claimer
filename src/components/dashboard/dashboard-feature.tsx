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
    "2p8tjh2fzwFcwhTRQyfrJffbgRtANZF4C1miZb4Lz94AiywETtQaE2dch47qPVrzcPrcGsoEYVzToWS1sHkHFs9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z91CW9g8zSUe5eevCMA2FP26KhuRXN9mAQfQQHo9wvgvHGEaXMX8d9MF6L8WWB2SLLewjx65vTKYfb3x1XvHkhS",
  "key1": "2fXkiANCNfpT6RK5t7Y4qx9V3bd9pCHjeMsCg3oGiSHRCCG84dfnXL3HMoqAhRuPiSEiSeeEqQuPhsARmkNxmCmo",
  "key2": "5DALuppuKgmiEMmLqh6wBBV3LwwAFyitT3gjNfuya7XdtWa8SeUjmMakUpERZxCFyvVJ2VWZen5uSvZvv8NEDxVs",
  "key3": "HkvhrDTKNEoFfC2kw2WvL2rUAPVkMmJo69UDX84yQAcFphkeE7atbKtPAnnPNaSvA9KZsD5dS1U9J8UDY5E7qQZ",
  "key4": "43HARjGaNEJu69HLjjP474AsFUodSQwE8b1wNjkZmoKNPvPR1T2eQe4LAT9mmy7mGPWtWgnheavuGSg9xPF6dVhm",
  "key5": "5M4V8Jh9utMnTUa3FBPe7XZkfhAjysbTCKDngqxDa2XEK22sFZEhzzJssyukoLVWu1ew7yhaQoEEkm3dsvRBFfhm",
  "key6": "3qW2vsXnBnssiQJFghtEA7rEupjVCcJ9uAEMXbbpMhjFDVE5xxSfBsCneYGqEPD1oGYyeECSBS194BZ8KGsg8RfJ",
  "key7": "4w1u68nCGb7jhHUm1bVvy2rnogXHodzxpfZB52dcP8kZzox7pV2a4Gc9LbbUHXnfVXfqNZaVBUsqnoNv3UmP53uS",
  "key8": "24HfwXWKJJ2Ht9d7RAixPc7oGudfH6cyZwucqZzBB3FWziUkQRAMpty6FHtmnCSecssuNbaJYCJSymgphBqvNveA",
  "key9": "5iuvS2iwN31bhToi4ra3bXY8CGTndW3XJQGiyB3PEvVkfPjNVrqRfmfBUXdbRV3MbSHVPHiNbg1rK4dH3mru7Wxg",
  "key10": "51475CSUcAGb3FKH6yN8aNpqeJ8Lv7fQ9mc97QQzPDdSde5wzE2n4b3WSqkqps3sj5pdQ4VuzEGDujmX9gPW6Vrn",
  "key11": "2uT4Ma75QmudtnDwxNTw5gL9MFrxGBa7KM913eFBVrSLEkaxGGV6Ux5fVKNhagHoDKCbpaBdmn9PJUEGLNHyeH1Q",
  "key12": "63HbtzRdhWqQATxNndWx7sjSvvYQc5Hyj1bFy5qksrD62PP5r5oU2N9aieQuL5bjvBGh2Ms2CJBwenE9NGKCiWC8",
  "key13": "38WvtXrqfRaoqnRWjwq2ffTPQmdjtPyVshWduDFCDshCv9hZVyp8m9rg67G6CvLtSKEiNGzr6GZBV7zXHMxqsuLe",
  "key14": "3VPX3WbeD3YZPzP5aE3MVHLxqqMFznyEsxH62CzBninss2PPmQJGo2LzYwJqz4NCmeQ6PCwUwtaZhnwYb219yYTe",
  "key15": "4coAFQuTptP5KUePGs9yq4G8SBjDzE8SNseVg7TtQz36N5QCBLbn7gkzjhFAqW2a3EVwQk98Z8mWskSF63HQa8L6",
  "key16": "5CtnXnDA1CgESJUe1GcBaAfhZXXmdGchRD8jXQ7TARYX4M82R5NdJbDhqJqxnRswgHM3BgUzxzDr3vPRHhuuSL6W",
  "key17": "5NvVZunfCGkZcSyiVrcEguMoapFtuaB9qYyUfqvgNeqKaE5peBTXeb8omNoe1993yqqytyzPpzdGkJLD5LU8Qy8n",
  "key18": "2Rq6krb8qeiriZHtY24TonBnYApohQixthL4cNoYfi12JR4PNM6un5wQPv7FbwH2fi7XzkpqAjxjfVpBKXWbHmKo",
  "key19": "5w5tzYhZR3zaU3BoyuMW2NBHN7a7RT1S8HKHqUjTJN5pV3aD4RLEJ1HFBCztxs5m9udbWXudjXDF2VRH8WCjypR3",
  "key20": "67A27KPbiaB5tP1Jg5JXPUK6LGkCYBmfYHzHrDYZ6KyUzerT8PjPJZUogY3MZudSzySmQC5MaqQysJTpsWfMrHya",
  "key21": "4hPiVntHx6LUSKFvv9wEs4sJQerqnZgb5YN4azPcZXfQh4GCxdVDCUUoFD8GKr5acgretG8AGNMdSrgaW5oZKCe5",
  "key22": "5XzUEr5nRLTPqS6gUwUcjHjx9kVwNULxZLR6dxFg66HW38UtdWBfEnr1Dx3hccm1h6VtsipjFoHxByB1BYMgUGAQ",
  "key23": "66Y5UvWPjxcmZUJiJjtfgWmCAUFbSsPBS7RPMLM6owWGbkzcCbKGq4Kio1JMhgmAMsgFSED2CuvhonvSEpg5i8kF",
  "key24": "3KNHzL3b4MS58V6RygZFDsaPuk9Bjca6qDGbDmygnzPsniBHwqX8EZ9dtRYBfsT3d5hBkkZFth3a9e9VbDHYGRcY",
  "key25": "X9kYbFURN4rVvfBBmTZX2NQScAPjaTVTs6hDiNZzHmPNXLYinVDryFkDBD1ktPguyfHd4Qp6QChsUVKkaQhwMn6",
  "key26": "5grsSSw3wDZWArQpT9MfQrvwjajReujsR63TMqhbyjDhfKnUy54ytWR7SpabHEuvTrBcREA9AnJrfyk9RSdA8Dbf",
  "key27": "3CYzrUip33dWabZfRCuq2zQHZmQN2XXUGKNdXGEV2jDk8Mc6TyEztEQcF3DsKvDRaE3TK5bkja4Soi46hNsGnW76",
  "key28": "3Wn9WAV8om8HNWhT255KCryNqRm9DRed7Wvq5eQvAvicH1k7BxGQBoy3Quaf8pU6KjoGgHLgMvephdv8tDFnayPU",
  "key29": "2D7tsTisa81DdKaqz6AwaiuBry1pW6KYDbjJWh4sKG5o6wtnaAC9Jxc8ELtKFVEATiiXtkBVh8XWfhLX4sioFxem",
  "key30": "5vt9TRMMTbzGxjQ1WW2CKy4vPCt3ehbTAip9q61nNWfzzyfj3RVw2Yw7WgYJuQchz1ecJNDr67FUrXgDfYpfYsyu",
  "key31": "3pLBy15z3PNLVNEg6TGq4ehaT6bhHxEZMkPDhzaMhfx9MFQY24H9RsfZQqyyDbEQqr5NBnXnzX2Smwdyw9E1mgeh",
  "key32": "3xpce1kg1MuyHNRSRmk88xfJjEiL1KQTSDV7P1xMZshtz3E7A9RpJ3G69u6p3xsppusjyNpgCT1MWGFpPrZbkjNm",
  "key33": "2pyGakxYDhVUCE5K1RD9y22P9Vr1GKktcKXSVPMEPLA2vY2kEYfLJmPrLYVyxBBzxexoxNDHSMNXrLF73RLF3y2Q",
  "key34": "4TZVECy67GSXKPgAWJQUa66FiYYPMy4rTXP2gZNAXpJVMtcbJExuS2dxuKCgcJWtmN7t4EWGuG2QiSbwVDCM6Lmd"
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
