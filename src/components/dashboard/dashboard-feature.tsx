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
    "2HLCgCgakiq2RweTUgrHyP2AEV2XhNokEhteBXZ63bKXmdo4CuLHL9mH6j4Tw6aqru5Sv7uVTnmDtu5iREq69FCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uvn2N5WfBwM3A4P1VGtQACvpig9AxYSGzubbdsJwck52gXXcvcKDAhgcyHfuXKAdnYcob3A8CdpR8Fh1d5SN8QH",
  "key1": "4D9nCsxwQLJqRUqomVZYXyRomRsQKX5hzLBBGbxA5FSnD1t9FQHwbqKPAKdVQj9oATV2BRQxghai69t8LqM2wEqS",
  "key2": "3mKeXCNPNBZUvhArd7HHo1w8ykSPeMJ4z1FzAs3NcMkUSJYR9WNX1D33PGgGquPYNeUSQRZbL8pydk6Pb6PoS79E",
  "key3": "pGXpFyMJAzpMtsRZem13JXGaCZBkfajqDk1xHGy9Ggh5P2DbmqTTc2CgtDhiX3wqMFtEGZuBVJNUwbdGE9qXsX3",
  "key4": "2XBMyr7kBYshHuoUqKkTqXbwibZKF6s3EJZbNNAh2XCeAd4uP8s8CVSeUPEcn9cnNJDhtVbXrgy9SmqkPRjA2gMn",
  "key5": "3wracYgqPQ7UXbVyJHxEmAdFCcDLNj57FAFuRNxe7YtDoWozCKUrxsYzn1J6SxS3LwpQK3By7e6qSxd54n6dGZAo",
  "key6": "5YaTumEGi2SVddst22Cwd2UdQRbDoWPp21f5Pq1haVGVufVYMXpvjZddzx211Dds37eAUbkfFhYZ762KZ8hH3Aes",
  "key7": "4r6ERqGiDxm6hvE2PqqPEpsRcrf9VUNAJrUJAEpUZCAS71CCDHrkcW2VPxHGaypEAPm6rRqFWfJd53w5f5z7hNzg",
  "key8": "4SB1zYS6WVPRjE7EpFpDaESYLzDVYkQa8nGNEpHU3GiVz25f6gpyoR66foihT5peXPpAqq6U6vnFmdPF3gPfsi34",
  "key9": "61P13HPo7Jn7qcZGP9TYRhN1PFKjcDyMKHtVZ7Jgm4ZUYxHkzcgSu4P7Not7Dhn6evSS7WzxA1kPeKvkw69d3A8x",
  "key10": "4GsrJYCNVTAU6g2WtxxSAYpUbHcGS3jsay6SJX9cqcHS9faPscSuLFERHyyKnngEvdPX7uRkhpLBH6zUtGbsGkQR",
  "key11": "RNGNCB11Hm8evvHikEU1FgETxV6ktokvPPWBismMsnhDsPidNRubqF2Dq7icScbZnywyJZD7NuH59aPgS3pKH3q",
  "key12": "2NipyLnVtByUbak7pCD5wNGdcA7VhcdNpzQcfTKva2eAoeEqejrVtxLKyJHVagpV8C7KRXNwCpZFtT2cKow4zizQ",
  "key13": "3tKe2rtupJKVS2yKzV6HbwQxw6LXVF2eC2SDcVWTpfEpwfkwz2cNJZhufnN1P2MHH2hi4SbDhLEL27KQ1Kjxx2Si",
  "key14": "4vwPT6pMfH9FRj36yMTZ66VyBmzpwoQSfeLMPtUWLarXcgk7QkuSEQ98YFDKZFHMFTGCmXBtDcDdjrztHky6y7Ub",
  "key15": "5Y5BPFxHJeykNchnfTfeGSfBuiwhHhrpxmTWhU2hZcM51HaknEcH5WYEuSxV94vjmXL94n7MZ8dMpubgYnV892AK",
  "key16": "47T6grZdZ5Qtr4cUcTp7S2vnXr8RKPVirZmhADUGF5waJLH4x447QK43rWhAA8pRDdUHp85iAPaYqevSq27bbbqF",
  "key17": "3UhNuEb7Ga7p5NVncaSoAWemQSR8trUoxDfUAnpbgM75gB7ZamDVa8tZgj5HaancSyEV81vi56BiXmnMJFxgHiBQ",
  "key18": "3bSnPzeLnS2qK8f9TGabniD5fJKm6tJW2aAbkVhMPiFANRkTGPwaU5bVujgtcY78HoZm8bPiPfm4646CLmMtMcJ3",
  "key19": "3Pqf96vH6uAbve9K8ipYiLj9mMqY6DdQVfycjzKpppXbSs56vnmEW2eKzXekkc3LBf84vyiJGdKCpCp3ZuaJVQxT",
  "key20": "4xBwTJRsQ1hY9E5fgxB9MgjJrMFLiu5fqHgQPAuHtvWyPzCEkjhdM8ePKvb57bqiuu66Jve7BEEC4AAAxan9Bdrc",
  "key21": "3ensedXUEj2YzqNp5MYT91THsegyPTv3VMSoL7E5hEs98E4tH5qHKovpd2DkBFiCtdwt3BhYMoSVVHSYL7tnSAo5",
  "key22": "21TpLn8M5MWWMoFhJbiZBnnSrTPGMMUNEkTdrMyFDGgfzEHL4pMyucZyEx4e2iWZ3SLyDs3J9BqURAqrfgWM6vSM",
  "key23": "4TLfX68scMpN1KV2Qean6XEuARcW6JD9qfkwq4NcPLWoCoWbhdKoronbdcQoFFhvZpp4neh9WSg5rQYoGwiX6n2T",
  "key24": "2V4DuyYjW32DDFSgeL3W4CguKb4rZ6Vrby2BnV1xdVkMm4JNw5Qe5YUw38E1XYcj1DjTpcXiWyBqas2XMSyrhZyy",
  "key25": "4SAjPmTWSwBnPwcu2uUcbAX14SqsQmXmn7ht5rjbHypN1dxYFQjrFopNZWHNxbQMZiKKcsC6u9cJ2tHLUbHPL9A9",
  "key26": "224swU4uxet94RKxmcMgbtoEvb3TDZSb9kUvspUeXnKZR5hR8rieKb8LqRhoWyv4RT6xJBRXnMCfzYSuQvxLimsz",
  "key27": "3bifkbGt664hngas6uzdG2j93PFALPsVpkvW6fMQLUF25FCKn8cuBTKBqTtSaDRUctqr9MRGdetywzQQZs9ELx1w",
  "key28": "5PB913UKK1VqHu8hWBfyk3j9ztLT4B1usA3wLx4MFfGiYbxdwyUeXE21R881DrV81jv2qSguo9YGXs7x1jAL8Gef",
  "key29": "2QAxkMWEPXC2FWMDW3N9ukF4LJ9s4XPa3wLuLHXFVn3u6Ke7Vx9ascg1ngcR7QpfBVguwZvPUyn64E6DmxKKuuCD",
  "key30": "siuDNt282U33e5e8H8QL8Gwcai6DVT4v4B6P4cjnjvUzAungrqoev4dyZCw6TFbxja19bqUMZm2SQPHaCyKvd5f",
  "key31": "2z1wBtNLx711pqcHUj1V8QgBThgCzU8kqnkfGVyhxw5zjWJiigB3k7qSfsuh7ijn53AsbpzQfabMToeYnLu9Jj2J",
  "key32": "4oVj6poEJYPfcoQZx72EusR9gMakRQfuQgt63YxfCxHCj27EC6UZYYkTU5A8Db5VNzbV865NVZDYXTtC9fqxU6iK",
  "key33": "YuVFXzGfKfdPhE3nGUMqFa9UWPgQTa1SWkf2ns8QvX93boVpd1foF14H4ufTvjDVgoE4XqeHMi826AXEJ8QQs7t",
  "key34": "4idna3NgsYg9Fr1b9cawVie3Qn4gL8LxavmuGURhfpxRprwajEX4n2kvqrduigCUTYB2WzjtdKMgM2qFxzvJ9WeM"
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
