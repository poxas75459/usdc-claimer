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
    "27gQrGoVStHG1cz91BroCZ5dG6AaLpHfc5zsSfrA8h3gxvyu7gr9YujCXt3cBstPJL611o4mfghCoYFnYrLgFSXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MddtnBmLG331er3WtEcVkKcTFbjNfmGvYwDBCVfnKXpvB4bpGbeRNxyB1jy76BHVVHjakitbdxz26H49LeeL18Q",
  "key1": "587uhq8qX6wm9dpZAXWujsnpqqZBQd3xheawuRMDffZeoEmUAeJPpeN1hZcp1efRcu3kvEcDRwspSE3A78m73nGr",
  "key2": "2un5tQ1JRpTYZGmiiZYfK6UFGD5AtCn8HbNJyNsvP8rzsxMowvM9KmpMZ6AF2BuG5jSYb6MyaSky57wPf8gfNcLG",
  "key3": "2bBx4RK3YUwzyJXiYC3doqX8SkCNsMDqmta38naab9NLnu9ZcVdjM7xANSsjW35dc2Jn23B47WUWeQ4ut7jkxdG2",
  "key4": "2Jr8pyftMhW9Ed2dr8wGPYcniteWsBsc382XQ1CUzRSgst3rHLtbwjmij1ckLGsNinpiThPiJS2PTKemHyy5aciA",
  "key5": "u7BsjYY3Yj35vrpzUScEYuHFVRDU1s6WoLorZyA1JjqLpSZLEQGp6DS1RL5UCWH5Hk2536JgSUTCiCGFV42TwYW",
  "key6": "5Do6TFJWgfeXPXvh7tsVi6htUaFEBuLoYwAhMBQKR5Kj7G6aPSHqipiQYcgGxEo1UYsdVfnsc2qq9xsQkSjrFC8f",
  "key7": "5dr1i6GiTPcAAd6EBG6HMKgxfLkAJhuP35LBKCX52KzAxhrLNxgjEHtzi4NJTfENGf54bELpC2tFYjkxEyio7Kh8",
  "key8": "65upb1AGyoY22nPCsmFjwzPY1nowTMuyP4RFwPShBmHi6GoagUNSM4U63EwPfK3zS9m1KTx8mAacw26fN7ongWeN",
  "key9": "2r1zQ22PwCSXJ9kbESUE4aVCAQ5nFbCj9YycWtbyEPqm3juuBnogY2FukNQz1oPTyVGDWYJ6QwwesBdYAPgoU3vk",
  "key10": "3zxdBVotjJMC7bbYauaHpLKLJHAc79rd374rnS31zyehhxspFTyPdxTfzLmcSSrhhWEoDGbB1ZNcJMN67UqiAgYX",
  "key11": "5Wj2uTLAwnPgv8qsqPtgU76hU2VPXapJafdmwsxKEsEDDGxyoLkmByqWiDQXCNUc5dLnTPGSYuLxkZFGxV28oqdy",
  "key12": "j2pnGu3mmXUj65yW7QzttHHXva5Tsnhw5uRRkDDv5EUdieVNEHi7UdorKFGX41Rfe2iYiNKsWqJ1PcBYEDRtf7F",
  "key13": "4mpTccb96J7deWDbwFnXXehSM32mxVgPC2hwyn69BLFkeWE2h7buE7JdpqGYQXnddYonDNC1A4bnzZdTFMTW3Yyz",
  "key14": "4YRusnb7AXYzNvCDEwmQSHjUwL8Qxf3DMmmwdWtPgPFxiTSn8otUo6UsLWLXWD2roqa5d7WKFiCbfmqVurwVc15G",
  "key15": "5HcoKXhcua9AE3nFZxXgehGwVogTr1qfsxQU3n1fHtVoeGpNtpD6Ndj5QQa2tGaB1LLDKc9i6aNNkFceYXfPcBWm",
  "key16": "21xfD8wACgQy7vkof63zytFMurbP9fZXn3UeWS87oeVYS7qjMX9aZHoVaZL8WPDDk9iUkh9V1X2tGRR2zDSn7AEZ",
  "key17": "5hFsyE6UGXTq3xK79W21Vy6C79mmxhF3goN3s88AMNgJKosxrsiT4n8Srnq47P95zxMu8ZcBjSRcCDEU7Y7suZdk",
  "key18": "2nUj3mUr3jRFswxELi11GCUnvDXNnNr2AxUoKEwBoVzAk8sR83gTDkZdB15H1x3LE1R4ZRHu3Wz526Mae8MdEHFt",
  "key19": "4iQkm58qzoKbV2fWsF8eurLxbWHbYwd4guGJTs8wQK9idhvdMdStYRF36Jp5QJXmPRCg2yL6WP2oWMSmL2mtsM8d",
  "key20": "3ydX7EYm5b4gRPiTGTsWv6H9eACSf7W26FMDwZ1DRYBNL3RymzTQZBJpJ1tLVHbfjLEtYquV19fzV7yio83F6U7i",
  "key21": "2xuQD7paEhVqKxK7gijW83jPrDHDLBtTB91UuEV9LgmXmYPNRjbtc7xXGUFqDdrMeoNRwFvyMWYLfAFccmpxztgS",
  "key22": "4xBdM1FQoKPggNZT9fLvn6d6Tvib5HpTzAwd5Q1STfpUPV354KAL19d1GcmyQHUYfqRQQ4CFcUEazGZM4N6w7RhA",
  "key23": "3Jer831JpjAXF8NST726LexZHbvaw9DT6U1Ghkhk1TMrUxAq7cjyYCUkyUvBYMuhJA8e2gFA6CgLxSvJPWmZadRv",
  "key24": "37qxXHq67Y4hk1ch13kw8wSmd15oxe1EhVPerYqpBuPp4rB3EjNaqUKSJ5roaAYLWbGuQ9vurKA81S4EiNghJwub",
  "key25": "5SWsTzLb4oKUhshBf5zM37RKQem83Vxu18ZGMfvvjxWP1jKZkM18wdRYyTX6hHfABzMLnQi6LfHD3ZueovNQr5bB",
  "key26": "5vt2rBxo4twUiBmEXyoTrUc7DjhvmSamwDAxFamA9qB4ttQ3rmFeMYvSirDU2pPqfo2VTPz59KFZHx4U4Q8c7Tya",
  "key27": "58yKMq5oqCyvS9dZUrJEX327sqvn9asEtdNJPnDFQVpqFsReMtJ1Dy2zkGYgq8GYAjEEukw6w4hEkGBxsrzYo4kF"
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
