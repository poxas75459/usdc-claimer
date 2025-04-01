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
    "3eK6JMw2f7Rs1bhvARJeKYy2WBV3XbwwLQYvYL7RGMCMsQdC7qR9MUAw111x9oYTGSAsx9QeimwZhRBTKkdzZi5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k1r1yFJq4SSh3J1KPhsCpeqzFY36AgDXUDbU5kChJkTXuWKx7bu4qzDLMAJHHEj2mWtLnxiFfdid4EYq2ZU6Hrj",
  "key1": "5t4N7zh9kK1h9eqx1gHj1wUwnLQXNcd6zacTA8qhj5nnpyeJAuVB5ZzxBMx7DjsXjYgg6UVLmGtDsfuLS9MjMS6k",
  "key2": "iUqmf9T4uMTdNBT8zAQvmso4n7549Kh8tyCnjtix48iTRaC1kTTrwGHcFokpMrGoQGNq9S28FQdK3mszkdHq7Cv",
  "key3": "6168hWq6PU3VJouyidXaWNwRJ9HHozXow5nY6iG2PGNPR91sj2PDjrE4cFXC6nBDxVBzq8BfNYvEMe1vxpdt1nW7",
  "key4": "5VynTkc46rduSaDryuNxSxfXVSaKSDk8DjFihTNDd7Tdw4xdd3cHxQqchvfah9tAzK4soNiRKtovcNy3Z82rqGAq",
  "key5": "2rFuLAcPXq4byFgua2WGj8na4vySkVQ9icq5WFzBnWoh4dp6vXRNQYZyD2n6sYyrWUE8Y52snZjyiCbiNkKyuKBj",
  "key6": "3mT88ZtWtDyS6tQfYjzzjgyeQfJyeoFefEDvoPFDxqLEiiG2r8gAHWtyzhEcRAu4t73dGXL9AsJpDQ7hssLmjNZF",
  "key7": "3kHMWDUC3hWb4DacSB9Vvg2ATgiQFpwGDidvcFA1Db3awRKrZeHKnR1bA5StTjZqbrojifU4orCZaYpJS3RnQ6Yn",
  "key8": "4hGH3SLp2T5Rgk7J3HavHqpkr8sVZtD972vwdQtwnkh3vw95DgsLxXUSakCtE6BXRRHeNVSEgQwT3Q26qdMQkp62",
  "key9": "4pAqCvmwyQk4LscmJJXN7ETkKgjdfSL3aqvNfi2fLRkwhDayVQr9zz97hyZGqbafW8rQX6mvhPEvBPs9E4rMbFe4",
  "key10": "UL38Aw8TP4Z8uLWQPSJc8Ra2vpFZg3CjSW4Y2Wh3Lq9uUfRDYyDgq56p92cPUuYKwHdMgfKosad32P6YFATPLd5",
  "key11": "5NdSz16gkEVvVFLNi6BAoUuAqfKqL3d7oqGtoUH9jKdtnuLNy7BXMxGXmiJhKxhWf1HSdthJtJBZSuDQLhS6vdXw",
  "key12": "2d3YwQ4adJMKPAnJyjkdVAWxGrsJBy9BKhW11NjvG7x134WHtoU3FRuMYdH4y1W5pTD9xfLEr9UErRHdXwvd9Gav",
  "key13": "CeLkNDoJ1cnyWHfQSDfnYAs42yRF2ULLzpVVDxaZWkvHV65nAQsCxisM5uJvfcFtuyr9v91gDSz3nWbeZj8bZdW",
  "key14": "4itmXNyi7idBmmEiWztDxLd6vUou3X3iDdhtL7Z7Jwa2FReJAk8wNNWa9M18KSv7NZjNuw5TDzmX5EkThQejZiP3",
  "key15": "2k4LS5wxV3pPh4FEAsNwLdMtfYdZvKWdVFtE5GuVrDEq3MTpuTcGeqgqd6hAfWR3NQFSKH6tURriyH81tRcMt5wD",
  "key16": "4J1eEiUoc6ZeLn3jWzWAdNxuaBcimZUF2ntSXhgutg18jcFb2rCmLVpBizvHj7rKDfE6YAeMnCLXmrj1uB9m3hSF",
  "key17": "46QTSZSLLofwNKyLSsVBDi9K82rERCxnYn578piYw4Qmj9ykstW18Jr2ov1WZLA7DVG5BCMtaRGodC5T1TbzuWMQ",
  "key18": "4KELkyN5X7XvbUT724cYVAXTgj63qccETojZmwXtMnW1TKDer33qNrb6hMKP2TjqNKEPENEqL9Y4oCXX7fJDVCjU",
  "key19": "5SJWceb37oSikhRWiGkMUDpfC2Jv1NCvSAcvJTRE3qsmGKsTXZ88WeaEFQWUDe3jG4rXWbqFtFau2eU6Yj2wfMrN",
  "key20": "3tMLTdxuZidb2y5k1SKhsMQQmDiioybQfDKvdA91SuEoVecF3NtcnM98TovYnZuTtAD8S4vct717jp9zg88E1qDi",
  "key21": "3EEEv86EBp2vHdCfEsBGP1Jx4n8sLAkzAvC2PFyXtF8wBDXqbNdfdzJarJ9BBr9fHg8VurqM1ybXsJ2qng2wyYHE",
  "key22": "5NdDU4P5EngYd4SWV8rmNMXSeBS7SNgds2UKN4umvQf8uGxQM9G48Uc4GStMA1J7G2NUv6CNdvhqRwL2nNfM7CNA",
  "key23": "3ezpWyh5bxkZao1rkJKeNniJCLeLskro4a62pKZPAVQpA1bjCLUwTGEL4mVPkRnZQqoWnDX9yp8zQGiRPHszhwk8",
  "key24": "LXviw8ywANFcwNtR53P46QF1P9dkwq3YVQAPdaoT9o7HNXKeYgC6RUUBhQN9VwxV1BDnqudjJgx1PXWDsbttmKo",
  "key25": "2Y7CXw5C8b8zMJFnzaiFQbRQVPhjsfNv3ddhTMt1qVQocAc4f7A1yCszKcQokEpCfhmspmsFqvFz3oPZcAvkJBy2",
  "key26": "53nGF3Mod8EGUHbcFPKnRqQ6CykMHyzy1mbpugBE1mTSNitet74dLBLP7fpFk3vjY4wB2B2UeUW4hnyx7FzSBckV",
  "key27": "3DpyZP3JgsRFk9LZaPVEXqTE4aEUj3eQfRNMxGqxau3LydCheU3Ct36gysqhtcqmwjLJYEG8MeKRf3snUcuVpfab",
  "key28": "5XwyMzykMVDVyPK2ysqsK7YLPsneGj7SdLMUHQ65AcPyD9Gs3eBvWxK2zvFFuVy6uS21HydGqhfrhSbtx9UhDYtH",
  "key29": "4Bt5NhYWiWeQTsi9VdEfEBDTT3N2BQJiAYqRKpAqrpbXBcs1zKRjvs7SWNCc9MGxwzqzqGfj3qLPuZ5M84uTYeM2",
  "key30": "4V4y4boUZXTeJvUZdT7RZNfXkreTXQ2ddSSZQygEUDmNhVBELFVYNhMieLjEVbLpaXD7uFMWbFem3PWBF5BohM6y",
  "key31": "3toWfhm1EupAdMfA8ByFz5dKNyCyQMx5StoaZb411uXeQDyDFSGEHLYafLenf63hqsKwojsNGuiwKSnUagmaXZqv",
  "key32": "2e76UFj1kzFYBjKZMchajEWtfyVKwxrVZAWnZfH8kV1oQaYyCvAFYpbRLmAU4j3NiutiYvso7ooFYXp3E9tWCFNe",
  "key33": "52MW1Tgdx7DhFiZs4ovTRmQoiqswR6XHnq6HnGKsWSuF1hZPH1Dv9JEqKvutF9J8U55KLj2gqRxP7VMe5UXY2ynD",
  "key34": "3CdSo8ruiprTPvFD5MdpBuFS8gHYvYbowFeDrNEB4cmfLXU3FkJhkDRJX55c6b1ovpfgfxkbHCdT85qrUabhXYsn",
  "key35": "2FNFPUdMfFT7HBR3AsmPBMMPm8dQCCcTeapNJ4aYHZmosJTvQmF83XFUx1UMp7jHMxuCTMLdXKe1At8W33UCGxpf",
  "key36": "3fYiDAqVDcBH3QSnVEm5jpW9n8tLPA88QNFHGTH36BRazMWnzkbzTPSqWMLecoBTpUb1ie5CCw318C9zMUDTAQK9",
  "key37": "5YVy98BSihegLA7PeuvQuvskC7voXpshfiCKEg8aCDPebhSKJphGT6idPv5eWhqXzu5SkVMe9ERGftUd6hP5Nxou",
  "key38": "9wkR1BbPpVHGxUswMMvLPFCbMHqqiGBgf7EVEnQ3SoZbX4zEgRudyvcMtMZcy483QjPszFaT6xb9HTZYDFu5sc6",
  "key39": "4H4g3pUxMuFsnrt9qgsVf9PxiSpJx8VKsj19cYMpiXJay3tLvTFgEoQ4Cvmq1cbRotAdeYBbNMK3ZWZcFXneD3bk",
  "key40": "4peRhQHRT3xsLTLtZ5YqmULgQxDg3AeSJmR833xAnV7Xt1gpEGemLDxqESa3s8QA2emAi9Zv689ARtC12ypUP76F",
  "key41": "DMVZPtFH7q262nRnJrPAkCsv3UKrnSCso8Gu7LvDVkuU8dofo9pYTMvc2Kerf5z3mHjhpn52onNG13FAmWU9gZQ",
  "key42": "3F8igS2u1oQfiKxFee9KEtjXWzwyx1TLesCMa4mj1L9oxR979rY6zY6EK9LShFWRN9E7EAPDrAfyJnJpN34guqbQ",
  "key43": "586jdyanvXQxcW7S8zX5u4pfVZZDs8RPsAsSwimBBWgp8M6qVdG3gNQuzspcJxizJSjageXt9X8LksSmLyaiXWaS"
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
