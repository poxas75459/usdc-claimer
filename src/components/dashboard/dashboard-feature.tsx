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
    "5jxqvLnD42wEzbEToRAtSjrqTfaofNo2YNJUwyjMQmu7aRunsAwkAyS747iV4gURAMGk7JzR5FyAti7G7z6Z4NSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JK3LiKkoi3faYtNTwM1MGWV7S38dF9VnXhLk9sv2bSY3WEngms3AABgX3pkH2EUKk3xG324LBzuY8HwexQd22b4",
  "key1": "4N4vKm8WJt5246X8d3bNRRi15j3JRYi3xP9rAEZTUtT1QxswPCGm7At8z43kwWKfuufxkAziMroEtxKzKi2Z2Tjo",
  "key2": "5yDiFjY9gn8UxGSFRxMrHsbTfuTJwC1BsHLWb12WUNgCaE6WAHXfBHLenqXU8MyrW7bxtd9U9r7C4uh5o9XPYdSK",
  "key3": "5fABkRTqLjCYoVCeK75aXFrYeKVh6XMGghPN46XXhqqtqqVQSRiLvuLUCMmw5YbjCdtNrooD3GUV4JHTh2HxoXXL",
  "key4": "37p25FYy9kd7xMAw2oNUfXMhfCHEq8fQ8YLPKBzMj4Rtuxdd9y7AgExahm8Qeu2mWh5CMQZaHfecRJVmLhxXK37u",
  "key5": "4S4yoLzQhNE1smNqEa4wir9QS4jhPtBe6SS1gGtmRzJ8gRMQqyLbqrxPPvhaDK8bVNQJQMGynZYbXBRUzKT6vUEn",
  "key6": "5a35ZBEb4GZYayx6u61hidpmf7Rp4PwSkCupDaCemzztiBV7NVSPorYYugCxQAFCwoufaCwEWXNjfkJ69dmzAz6R",
  "key7": "4DBEPKUUmhnXrGpTeQH3utBWHyMG2uhNWEMzCkFsJZYGbj6NdsXNape1VfmEQcqCoT7qZrDagHkTenHEzLnwCT6q",
  "key8": "39PpW8zy5TAdwKu4WimwkVULVTZ9EXfU7KiSdCH77hwoCrhZUFtu1VPkMrmcmQbnLWR1HntwUf61YqS9QpWa9coo",
  "key9": "4j3nF6f5QfeuvZT7LvU5ETBi3smjXJGaLbcduoamFdHksfWgaKZcr7uFMpRABYp6Ri2mbSFz2VoPxP38Z7dUBJsL",
  "key10": "5hcpqGKDzZsoTXsyDY7wgLqj13oM1hiaugzCxbPG2kA2V2W9ei1hLCZksUwKrPUpsjkcCk6htnkrR3EmuWPWByBt",
  "key11": "3rUyPyLMkLJnqJsh93weZ4mBemTyG1b2ENyrJJnKML6AxeVygu3tJToqwud9zPnR6EPEHC8TgaYNsw2LZwf3dNqh",
  "key12": "4MSc7uAVW65wbqNvCY6k7uJGieYd1WotLrzaLbTygDuPcw6hys2nW4iydkfo2rb4t5cCXQmtmurUzdJrz9HSxQdo",
  "key13": "33xdFbMf84bhBYRutYibeMVtfmNfSjmnSr4fZuq4TbbZoLgpBCnKjkjXCcJQekphD7Cz47PNTChAhR8a5niFBLnM",
  "key14": "2G8WEjBU5DbCkMj2zQ1otim9gy5NCpN7Huai2SttNzhwMBkt74Q3PZF1Qkb3px26tET3VRZuRkCBDyba5Dmimjvv",
  "key15": "x5ykFNbTp6yJcopekgz1cbUvs8zDrtFQ2aV4YP3UNqwaLWNnqk1vHDcunkJMj67ZTtb78B6X3NdWEipr2b2f2uP",
  "key16": "4dnKgN9ACLbrPYu9qsG2UqGCBRSbxoHuqkbzVGaGu7CSqmsBPVmLYdNXHv8Q5dh2wQWuBm516uAnLUPDweprR7gn",
  "key17": "4C1WbBCR2GkNjHfAaD5mouo4vBoQhyGuwGhxktCzDrsL5dGqFCNtKWxywTKz8w7wggxr73tp8NzicLR5CRxAFAfq",
  "key18": "5YEvPzP9kwH6UypDshtadaQwUgwmvnrDBY3SAUGT8WLeCW2SMHmaZ5DXBeu4ducXQLnM91reNJBysWZNW6jYdwGc",
  "key19": "2Amr5hiEExCxcoPUfQfPReTbBhgY8TCqsJWNn5Jb3JjvuEqSWJqbve1BJsm4rVGKS5xU49QE2orVuCt94UGoTuQi",
  "key20": "3KMu2FwTpznRNGrgBgiPJ226a1bBSBrDF7opjo95cFTnkhXHDa7hDvntxreKMU3F9eQ3TEeuunygTyDHUnFKAXYj",
  "key21": "dD6ZpBHH9MWmMJxqoUsXV7MCyiZngRUFTCctrGXKjX6UUAFN3gDXto9oq6bX9PehW6GKBVpVrTNBYcda7k4UuVN",
  "key22": "2s6zzfgm6jvFdq3VHqDqBosVouJncoHGEdWxR2C5soQk8y1KC7D4bt7ckDWgPa3uJsJY7DkZXkGiu2fj1HrAapGB",
  "key23": "5DKnJCfewuf35w89dsp6YqMQNYb83ZPfby2HFUCMujLur48nBeQnNzuo5bwUiCp6GRRReRcagAzepVHaRyxqnQJR",
  "key24": "5JtN4xWCaDkAvmMndbEQTrR3ciDC5s78nfT4x51xXUqKNFAURbdftSafB11DeZ5jaz5TSghSrpYvmkMaTAQYhXNm",
  "key25": "BTzBb7piL1hzqpnhtAUPgzVoMrjGmjcftJRPY9xLqqBhYp8fCxLdyHvcSaRB3SzEjwyyXPsntwUoPiqidZwfdD1",
  "key26": "3RCWHrNAyRcnugtwM3uVMmgrcNn517bf2G5T9CVnByEkSQzrWKVxGnFVBDtKoJYHujHo6MP6BcpMootHs6oQ66g",
  "key27": "3TgMHE63iAtKyU2W2hvjkfmWEf7okYA7pznrUNMtHxMbamRAXaqfr9J71Paoy66phH8urtc2wbJuqoaZ4SxpeXzf",
  "key28": "4faqNjPhJBjz74aUFYERHmSJQvFjGihjMN1kaq8osrhUmk4XeJDqgYFwAWc2XkaKkTAnL3kJVDv5oSByhyXbWQpx",
  "key29": "4MZbv5e41XMb5mCbswxm7kFqTCBYKa9HBvk2hPqsxXpMB6Ts2TFQ4zp7a6uWpzE63a3W9pfDUcKztJQJ71Lar8Lq",
  "key30": "3Gds6vzkUFVDw3qyFcaAgBjJfF6TofRZK3735tEqKZYGry4mkSuRvv7hZ4QyBcLXN5MuH1ySqsRL83bqxdhzQ2ut",
  "key31": "3uybRaf22Z8mtZWwLwsJvP3hza6pjMcaYjt4DnmCWrJwy1rWWfVRoP8y471Jh9nxMYfayhQ171qoyrCxPDXAv9Y1",
  "key32": "3cfHhM3e8y9BcN75Vocdo1kCyFwFdktBnf6LdA1qRfTXhsSRphmCBozuyYKUtSj89jkEJPhmcQHctT2QvLpKmheB",
  "key33": "3F3gW3R79x6oZgnZoPtAkeZpe5DDTbEWkEA2mbnoiczjbVZAPyNXRz2SQiGGxUAL2b1eykj3Gj19s4r81VFFXMkU",
  "key34": "4vwiosPXU78hBYMsCLziEGVKdxag2bjihnySjW4RYhegcXXy8dBWKgHYojN5dfBbfaiKgC4jQJVdmQwAy8nPhdhw",
  "key35": "usXizMCwepmiKrPh7Ja19bDGES8U7AvdM2o5Gj8hnUfoneJ1TK9eaDMxKyAQ36RamL7K5yC2RocFvaNmHVZPmqs",
  "key36": "2VRrAkV63qtWzJXwCrYd1HuyNvPrPo1RsetrLEEVBNiDXyvRYiqEk9pJ8wvpbqZ2GjHK5QMchm5SSkV7Y916C5vu",
  "key37": "7YJQwdCxjVMXfq3K6w5w72ckxdftyEFZF7ZoEwgv9632xE5uUSWW1TUuForCfMVqnT8LiFGYA84dKXYMQ4aFsAb",
  "key38": "5BdUzhdb2UTAa3o9PTF3RjmAzVTiRS79NGVRtbDd61ARknSCDTsRt4XiHW9jBikGJkBxkbJrpaBspfAfzgU63vve",
  "key39": "4NGiW62oiKbJPHhCA4vaV9xu6razXWEmEwPebQMihCP4ZBfGc8uefFMjTwKJvDXTur18G2eJQfWeefAVcciVNHzo",
  "key40": "4BjTbEHxKUVtpsa7C4QAyKz7mWRsHA6NAkLvcjXBNYYi2LrFTHVvLeJEheF7s8rYfFLa31LmUcFcqwVcD1V5Yd1x",
  "key41": "3uQWS7Ck5wKzMLZgfhyvLZRf7VVTEAp8n7pPPC8tNZYt6zzjoZSuz6XWSGHoGVif3HNgrArhUT1GEtieitX2HQRe",
  "key42": "4aN8tbmbk8PPgCbdTxJ9YRJCJn7z6ipTnLcpToVABiJ8PxEfWoSvQPG5QeCZxgMK4YZAMDMU477xxUZ5RWpUeHb8",
  "key43": "2HndQy1gTKZsC3BAVPPxbeho4Mp2ygUcQhDRJqn89wE8KhUcR9qW2PQ1sNhfvyTAbbecddjUvDuMvzsjznkrPFHN",
  "key44": "54jqMgk6xGkbyjkZueR3pFFgWUypwqfzCy91LLGSxc7ZVaVn9iyEREZMicVqQK8WDu4cjgWGy31JbZHhAtAV9vPu",
  "key45": "2wNzNT9giNbR82Cgqswe7QAVSSZge9TeTgPsb4hjPA6k6Jbcd8bRZdPj2LmvKaPfqCoD21GW9oDBZNdtYnELptTo",
  "key46": "5MeyhtmptooTwmHQ3Gxv2EXyRhH5iKLhwSPBZ5xpWvPxGLEC2yRV96bUpkgyRXrm4vask3ut9iejA4iBm5eumkpH"
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
