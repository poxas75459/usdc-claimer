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
    "5ZrVtj3nn3S4CU5r5J3s45UR2Hc8iAPRjaekBA1ERMm5W8bRJutVdoSwdQWu5DReS7QVmr1Q7XLGFPSJHTD9wK1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AMMimCjEKi5mqrUyxRzW3j4DkpykzQJkg4K1AmcCoXwhDcjeXaDp61B5Sd6nwZEfE5KRuKYv4eXka68tQbZm8WS",
  "key1": "3VUbhYiwK84KXpEJWQGP1jZKkwmyXMMaMghyc8YFXG8Y9hBLeem7TeJcq7Bm65McuC5fyEBSwCBYP3dhNq4BPzV1",
  "key2": "pYkeXSc75AeDt8kWfNh5Fe2anTwUBk4r2eYRme8uqxE71waW2UzKPYVk4ci3aAcnKehgNP3mhxqtao4GiZxV34L",
  "key3": "33mcdeHExB7tGSdDSufgwa9BqaoYgSuVg5p1rFaJjVr3GJHP2ctUpdk6H6g5iaVJRWGcAC1L5E2tX1wmDVScME7Y",
  "key4": "2QfzV8apWXBtdDQmQbTSnPbqYjtMeBRqgHuUd6mmBsReo856uEXo1Y79rf87zGFXRcEAKAjz9ghSkjiRJvE7fGJ9",
  "key5": "4j32LPxcQVfrT3rqEpJBwTMozAxdRgyV9PipEaj5rDU8bLtbZAG3ifQ7Uujj8UdkXMfhsQK35FdJVtxKnbmbaQoo",
  "key6": "4jpXdPq3Wd64YL7SwHDV61b9anU1eWUA4dMhoxb2AVp29VMY7yoXp4azvBAUFV2qVuXPcnFku6Y4ZYaUHD5SoCxB",
  "key7": "5Am1swd9GK3iev12MNBhjJCUtd894xftF9VDBzxW6VPUx6uAd6J4N8FWa1BCvjdh5V53h69adHpynyhTh2rwN7yo",
  "key8": "5wgHKovax3SfxXVGDpXvJ76X8MgGcQD7DXfbGz52q4J3GDQALfAPtZg2C93eeiPUgHjrcR1Dj3PiLCc7aFMFENH9",
  "key9": "5539kJHPJFUmDmTE6BBgUaNyECjXEKNyP176a7DApLghZbTi66ppbG2PLpBzRtz3v8UTwRJakkj2Xe54Cpb5Pokr",
  "key10": "3TaujwkMFSBS77Bebiftx2wQrwSfZuWcFHxdeaGWc2tE4THFAmnbKx7B4Krbqj3d7UrvSzZAD3x7KJGdQLdEUUrc",
  "key11": "3eq8FMDgVCGmetWhprqQ77bW49Hs1U2R9ueLvR36pHrf5bkDX76KDhaeUi8CKfPR1BAgCL39vKB8extu8FiwpuFJ",
  "key12": "2hbm6n8XXiRQeGhxHPrGTMBBRaAFoc8ez15i1C12wkktdqNSUd6eRymUrAHdfrZrzLZSekLzzbgXAdkNC39eJww",
  "key13": "24V3m6GmaNA9X3HvRGMahxhAPWzfWk5ApoFZyeqQZ3ptX5NBHinN8U1JUsobMjQAAs7YnFv5zGN8NdmEA97YchrR",
  "key14": "2aduRcEQ2ZPzBfs81nvpBkP62hx8gsc5TJWdi5KhhPaPm5MXDtbpc5jNmvYxVnW16oDJ9ikZLXfZENVQAWKzey4m",
  "key15": "2bU4QEi2PyAcqiGKYX6qLMJbyrhXRvnWaeufTDxtqm1Dqvc739ocrh393Xxj3wfvu1KHV9EC2LDvpzZrQTq8zTce",
  "key16": "UeB3A2LcXqEkNjmjMmUJa2nDUk5cPCUuYx2rgNFfvCaKgJubQE5YxNWciR21CnNWbVcnj1HwY9KWSgwZDHfS1he",
  "key17": "3juy3PUaGHfEdRrEuwUW2uhwLeZKQ89A8Jfr4YM6cNwLaR6FTXTNb4e32vTpD4zfFK1FhcioDTHzgTTchg2ufXcR",
  "key18": "2LSqY7ZRyfH5RpJhQcR1y1bATqCPkgBTFzQBMJCATqi7NguXnGmNaXfPpLZ7LuiEkaU17KCBkE4YFbcMs1J6PryZ",
  "key19": "Z8T5rcjRbziCnpn5MXjqxA5RfcYnEHg2CUftYWEtzGBaLvGgTqyFQUVxSD8bNySrDRCtYhESTjosoQzG3pfwbZ8",
  "key20": "2mjwpp7D495fYmhxTvgdTmBQN4Ut1LDohzwCLGuKqsxtTihR7WMLB7N51Ft8ynvTtvASM3z9qxyvu4S4WdorhvsK",
  "key21": "2GCVfe7zWshnmo3o1VaM2bjE3JGP28mj6bDZVp9E416tUTaVCppfWnPJ6meCmtYLm5ydu2rPkx9rg8vWSQGJbvG4",
  "key22": "3d8bHcPMn6GSaQhsLx2pCU3uqXysPzwVgjYDnFTwQ3vfKhqETHUuQ3LaParFraFTKPiaqMATqHd76HpA6ix65kqA",
  "key23": "LuCy96RJ9KnaxXrsbEDHjMBkz6feL3U9tdogu7LzHS4x2zEWnMiBc4ytxv5hoxvS1zHfn2FzzdTGLnr5VkmdFmU",
  "key24": "4uh2KxjKE2AVzEQWzhnP2tFzFk7cZNEBjuVkyH8qEemCt3Mry3abnc7Fw5Ej8KWtMkJDUTbjNzC1rqAebtKd1jsx",
  "key25": "3ejAfJ9zxKw3iSdMK3WkA4kcxQUXJVJp6qyVTqw9Q8grrkUYQcq8VDjxH6GaBtjUNuVx68r2tWsRqiXLTdJSGCtn",
  "key26": "5gT43vGU9PwGV2LnJEwrB2VoyLa72rby5ucrogfDcRpm3HcYa39iJJBX2Le7KZo5UYTSwXFiRnMbrr5mor5ZhTGY",
  "key27": "2YPZksrvMMfCTARX7v7VhakNb5eSvNG58HDnDeUgKAVx4DRX5T3DaCyDjSHQhFgiexrcHepvQRWK3Wb2uDN8NUcd",
  "key28": "f4jVxNBRhhNPRGRg3zQboYCjeDUJPA2fawYAHaSj77ANrD7XYDqYzVZoPtPDQRCtDWGPjq1r6YhUQh4xRvtJDzC",
  "key29": "ugWy6knzYFQ4Yu37jLVepUT2yTH6CjYgYpvjeViY2Fj7gw1tPW7DMZYcYMxhViJo2BAM2ExA2pNuJDryQWUfifH",
  "key30": "5gCEuCDx7roaC6pnUuERJhrDeYJToViqJQkTpjhHdmLKLj5rFA7YSSCeaGcXoddbLoAZaFvv3ivNQjkCduryMZjB",
  "key31": "5R7fTerXnKtQDTpJnjUyfeotQSxrTysMPmZdiHBg43kcj3KyomvChx5hciYaa2w8yHV6U9Fyi2iX3es13QtoRU4j",
  "key32": "3ksti1pjw3ee6SdtwMsvzQayDKDPvaAXP87VUQtyNCubqFaapTbMScaY753Y8m1izoxa7LKVP9m33awHkqysb7fj",
  "key33": "xFExUh7SHhobzFmX3g85cmgQfrtXRk6EuLFUmZ25un1jkgEFfc66AfR7hrfcFnHr7u2mr7gxVxBdQmtEApSAWw9",
  "key34": "3pE7EH3cqJ6Enz8M1fQt19mMJuXXMhSkWM2nn2xnvMiXn5L1z1TWq9drh5gmqX15B3p2ggvo7oZHX46Qi6qLiiRX",
  "key35": "2wMY3zZN4nMZmmfEDtaEZBJFDk3RKmgV9NyZXeq1wvyyiSENfWxKjWbZZ4VUQwJkEZGQFoVQC4PbNeRSRA6y9cZU",
  "key36": "3gaij5mCsqU2TGU3NZnTXRa6eV8Go3vRC8KizZwCachrh5HmRQh4HZFY3vcCGBUJLvxAHP1FAkhGkht4nTcgKqaj",
  "key37": "4RE8CZGbfTSjigTfv58rnpsigCqVZhhwLv1Eyn3eAVLbacrjFjyQnDWiSVufyYbhqdF4KsyuXeoPJaFoCBAPV87W",
  "key38": "ATcWJGYaTsMeW8NjE8zcrgtSGeuppM9gvJpKFe1E75SE5u1qeJ681mX8xVozmqYDBsRhaDNzxMU8WkQ79T8z5PT",
  "key39": "3wNpDbcSb64346FdoVhtbpffNAb42mvsD1JDoxFGNf5b6mMgmESUwm46hUjD7EZM9EKUaNCzA13BfDHdz1dZonbG",
  "key40": "5AJxsCUAdntUXpFMnuJBzC11qVh8qkwbmjkFk6HZdhMwLTs3yFxNAznGe1okP9ZW9xp6mYMLq9hpZMnvUHuaA6AV",
  "key41": "5P4F7C2CSaq2S8rg1cBpdBAndm9ja5ruwHuBL5KVpsDXhXUkbFuxkhndWUBhHPYwiPLzAMQLsHH43B6r8oXvRmkM",
  "key42": "YVELK8SN8Qd7Yi2gxTgWvvAksvjVxSeVbj5uy4yVLiqfcMN31YA3JiMCRjkJXtTJfaQVW1xGvGRHHnJ3hb9LBTn"
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
