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
    "2jf9nRinuoTKcSLJxVeFNpHa1hxa1YhVWbKs998vijAhBGhfG5rXuxTLJsxDvPdM7HPMk9K8hfvGDt8hswDyjz6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DBaN48LB8pwS2uGXpQmJLQLnBB8nwDCSo5MroNq8zqPshmsRvZEfQXBV9BLB8apX9zFiUi8Co3KYpFEnntjyDPF",
  "key1": "3GdaBHd45qVGGN5HdvN3ERex5Q2t1xovcGuMC678jEBbsQR13thrnfrPRVijRisjbUZ4hJ6j1SkhFSQMPfmsy7of",
  "key2": "4yBdjyRhDdAYU7igd6EuFzWeWMdzsYePRTxuxR5DXbvARMJ9ib2eJGexD4bhRovbJ4Y1Xj5LPP21yrLZUH6sX6dY",
  "key3": "5rZaHeNnZTkQYjf6N5i1YE3QZE7BSLAV9jB4xLEt1NpiinQ18o88GT2NRXJoYu2SCRuVpua6BXuzA6HF7XaFoPde",
  "key4": "5exwsRZtTjDYpgucDPErtQXvsA2FcvaJi9fVJ9TxbrwrXpi74YjLrPFxNBn33BxyXZuSDRBw7NQ66f5sw8nEAU2E",
  "key5": "2v7FFW9Sw2WVzkH3BiPNeJnBX4irNcJcGbrw3bM36SoisEpiMHpVug5bZGeFTL3y1n7G8bTSjwxQN2MxWNBxymWu",
  "key6": "39wNiAiUcgtEb4R1FzXuDDQvxG7gNEXzqJRTPktecpxKzcujTjwQR2ngUUdvkCkJbJ8YGXfEBeq8w1QUxzYFHEuF",
  "key7": "53bpgnadMRKqAPoP4Uf1WVNWC6XXiDhEv6o25eQVAxomVKXnRmVt1rDGvfSfEuJ4WFtPi1nAVYvFiVjFTwGkChLS",
  "key8": "33RJ5VzCHKFFHEdXoXoyhu5eXmattbhbzwQTm6YP8oTVrg5KVWwv8cHEJSfPNAZmVhTTrCfq3x58vabad3SH4HUv",
  "key9": "4nTJHAY9idNJR93LgnayWezgq3CmyXyK9Zat8FFFQRHN1eyxA2hGBGyMotKxxv8gaCHxQSMuC3XfptXMqDcaNGtX",
  "key10": "5sx5RS99JcwxcRuJE4vmPrjMmaSKaL9TTv4N9EjaMQ1cqLPH3psWW82krmiRU91iHbpmnGnf6gbuBW153nJ8sdAo",
  "key11": "mY4QRmSSCLjMY51i81NztnGkFN2P2HyxcWNHfviiwfZ5hmNadK2bXPH5iJLMsyaM1LCzVCPxbqe9RuDkzxqsvqR",
  "key12": "5uZiwAhABcUCLhfD3jwBoPW1UL6aTLzHS184fRfb7SVDgj5EtqLxEczYTDyqqMjH9JNgLdMdyLDNdhqsPhZsMM5u",
  "key13": "45u6b4VrG3ygDoNc1wXhZdC7gTP3EvQVVNmrcu3a5jxkHotepqETLioudvTz1McK764wuiNKwvwCzBkwYsqvmDVp",
  "key14": "5cgu38qvspYqu7Z11wA1uiMg556w4bopi7aLEFJMb6d5xqktnhSCmSSo7uWcNeo1eFf85URWXsMCk9vDxdBebmgr",
  "key15": "5rxha2bpyAvBb6E6Uqts9yJs78CDhTnqSB9mZzKvApMCUasiXF9n6Cr3gfMiGGrtxmjdFZURAq1T2H8XeCkMaeQa",
  "key16": "3UQ4mHJhwJrt6BSzDTd6Gbhq4MwvxgfW9N1q5rjCM7ZwGgdHusfaYUjBHQ2DfmobwrBrGVWRYS1o7UxRdghBX3TZ",
  "key17": "5JkAuUS6rz9SXQwmwftCepQ6q7o8vTANvzF9ZiyUvGNyyaJgPyfdj6z4MHLPsw447r2bGzpEjPHSg9kBp6cfbCh8",
  "key18": "2pFwbfp4wxdXTna9LCuYbG6eQLfPKhx2eD1d1GygWuYaQbWPRnSLEmWmdWMRzXEVd53eR1kqwZ9zXEUfDzCuzsL2",
  "key19": "rgbX7Bu4SyBy5oxktd96sN8FuhF5dTQWVBRPgEcjzWBqtGFStWN1N6S8XChqVax5CSGRdnH7MwDnbZ1uCQkngzq",
  "key20": "5jngK1pxJjqPkPyZsdPRdtRcbJZAabqAThRmy9M8qmQGiSzuvqR2WSw7MnGhwD9j3VPeLnS85vriKNjfepsq6nno",
  "key21": "42XkEN2KjDntwiL1fW7GCrAvBC22jSUbEtQgZNWhUKtojLkQ5YDcFTMXcsif5hTK2hx6kEb9dxqqfNf1MVMe5WZw",
  "key22": "2dKHKRw1f4KzqATCiQkTLnSd5WYDxo63aaa1dEHF3sB49amnKAdwMUMmdVNnqiZdn4ndK5Pu3PEA7ejuFKD5ZVV1",
  "key23": "25odHEVsWWgQKfpp3SsfB54hm18awXsWpwSdfJf8nYHgU14VnSHA58iPpfmqw5Pw31kE2RmjXVPRrYRpL3aY5W7u",
  "key24": "2S6iVq8voiM6jkW1bzUUd1dgqbURTdVESUJUxomntpKdpG1gtpsLEjeFyv6qmJTuK1vXuL4htgYJMTpgzocr9Wpw",
  "key25": "3LRgSWmRoaUnC3JUz7Vw67FVn663VuayneWrqrK3Lwta9Z1WDErpuZFChfRoufb5Z4yjKjVVg5vT5eiWq81WMeTr",
  "key26": "5u36LEYAfkFXwp1kL3yVF1xqknc3wznhHqyaQyuJjjRSLFtvTVLnQwv2SH4HaXfeQyUsS1abhCUEm1MGcFpayqkX",
  "key27": "5YgQVzEQmY4rbauSbuJAN2st7dwmnHzX4Uq9d1K5yBhiPdj7rNzdNJpstyiBZ1ZDqxCqvUw5c2RBcNDB4bsvnJom",
  "key28": "2Y4SMGFDgrNeixJBrd4U2UKSPdh24fA3YtWtebrcxqBubdcGtjxmj9DmMsH7hAV6AewwHSGpLGekiEe3M3tTahYp",
  "key29": "X4kwfNqp2LfWgzYy5NWfyFdTRWhBCiFg7CFYg2DXkNuZbi5gpkBepdd4MzLqTLccXgWtqdUsnornMWw1GE7ee43",
  "key30": "3gXY8N43QPeEm9iTpQkQAq8CwqXAXupN1EhyzEnHDbeRStnZjfqi2KXZEZsCKqDNrfC8Hw3WUUUsCSV42mEfivhH",
  "key31": "2f9ZUuNB5Jp4NZnNukfaJFDg37zXGNh8K7uHCPenfbndSZ4dAA9s9rxvnsLA83BcbGDeRqFDiGmx5CTEGpA4gAjH",
  "key32": "3BuZhnQhBB2wPkWdNMaGgtxRQuZh2q8U4EytXiyGYZiuF1yYLUZKnTdgzGhUQfGcYBR9qN5mvdwyLcRzvYhTEd8s",
  "key33": "46N7BfMgbDVxw97heJFxkdtezwg4ct5gAFNBhZmd5vGjAQMNwmhBhavB7ATT4FkgoyrZK7Mkp3CTQi8NDjXaX8Jr",
  "key34": "2rkQM4wcds6x5peNLMPoCrUtpgfqmCCT3uS5GCiRXJaVjUmuv4zynBiybpy82eHZ5Jrpxf7AD1F8JzSgdzDXHiYw",
  "key35": "21DBEv7ezEDTmQVWScefxehg1Dye8G7fmCCiTe3Sa9j2jSLDH6EdBnn9HeTY2xp1FH6o4sKCpxMkZ5T5CAzRq2g4",
  "key36": "2f9sG87UBM2jSFabijsS6Cjz8NHKRsjvbqQbWX96XNS7g4Bg1QkyT2FcGxfC7ZMFx8SMPx3vr3FHdadk64Fszcdc",
  "key37": "4V8Mksy2cA9amjuFQ8UAgBqU39v1x33LDUDa4m5hK6obeCizoEFiS75VhMixhFFoUUJEi9JbwiPY9wijkE2oEkQk",
  "key38": "3P6egEShw4uyxWdD4AcCTDQYjQewxLSTKowvmYaaigBf9ZdiMLveYyaWC7HARYxni2JqpH52dh96z4SGWdUqq3Fi",
  "key39": "5j5kh5PhQcoz4E1dFF5wVsyKo1od7DRT53XEuXciAedgSSCAG9DWUdicemsamDi82zaSu41oZnCLCA7jCUGc7bnY",
  "key40": "2ipPdnbHKLFPig9ZwRfXw5FNhzb9TRACHLAuTWL4sDA33FPqw8fiyt1SK6hxFZkqEKkCcT8Vep8BjAz5QFxgwgyD",
  "key41": "3z6QYDVRAnPLfYDrBfi1bH6e3WVmjcFXnegFQPNcxxZcU2P9EbUdsr9wvHYbNR6LcZ7cBRhLSEf3zG9eUDASMUjr",
  "key42": "425uFXLPP5MHDif7gK2k2Dz9YN2R4eRNMJwGx1Q4xJjbHNUgkJ3E1dfvdCB4HSqAFthoKhndYGzARWgYw2hufkiE",
  "key43": "MTLFWhF3cAAbKy8qzeSEhW2xKRZ17dUAbSFdKeeCX23UBbDcHnSPNoVXup5s4jjwJ3ycrBcYd1n8zRimsgoLhbV",
  "key44": "3GLkX5Pmo65Ticd8XEVLX4Nc6X1XGHLWvViurELyrnPh51nnmqftf2Atz7bXrM6LrytVHhjeUNCxWibuJQ8suaiR"
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
