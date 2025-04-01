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
    "2uMqgQFXts1TwNg9TmLEvke6v45k6Zegriwo3C4JRpm2JsMzhA4aUfoBXTZvP6TpEJHL5vt9f3fXzAuBKYj1gYuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D3o2tebdCoV1bhNJ2tmXyt6i8X8wU4P7pWmRNGaXavCkkCJ4TojvMQHM7nxKaKA8bfk16Zm1CwURzS2E9nMdt6u",
  "key1": "3pZ9BqNqER5STPDjg11EfUyk4PWvtTdKA6WQ1oLcN7WHENGYV3V54yPbeNAxoo1jzraw2jVe57SjbvCNhcKuH67s",
  "key2": "63AmbTWi9WJskYX9EkMJ82gum2bZ82EkbnBm6pSPeESVpJ2skxhMnLj7QhL6CMC2bP3JgmD6GoSugcu6Vzx9KH2p",
  "key3": "2tB8ShP7Ehie2HcTcx2oDpk61FEERjcmbSxWPuZHdNNTkj5V4hL66a2s2UaueJq4pLsenr31DzvF4qpoPQVodCxx",
  "key4": "3QJJmFKcekTZSXtgnWWWghKnaA9VJ92WPDpLq6ifqdwKwSY6asp7CUav7Lh1FnUwang63E8c78MSapSdmpZaomfk",
  "key5": "5FW3iAxsW2bphYxTDHWQbteC6xgoywNYgpsxpzytaHKL36QtvKvW149uP3zhMZ1pdcN5uSQuJzfXx49YWpEDBYp3",
  "key6": "5bWeaBALtbEmERGZarkhTydTf2siyoYVBqoymJT8VNd1dQFkRrFKEgDUoRkmQMcou1UntQT6hpi61p5Kwme4RDGH",
  "key7": "3YgE1y1d8wetCWbkpHMPNjH6xfejrLQ1TPQWisDLBUFWNGSX5obS5wGXkJHr7z2jJE5ZxmCvTwD1oLmDiaSMUYHP",
  "key8": "5YjFfbp47wUJv5xPFXCeskgk4rvMCTpUAg15KGR8UiBBkZd574kiPhvJ33AXnc3r6ZFoV9aG3hLvvZ39ykrtobKk",
  "key9": "3pRX657NVaXeLL1cwjBKhvK6xzVNwrMBZF397bYerzBvdacoV1JczCzfjWPLza52RVTM6MV6R5pQbRYDC2iuE9Mf",
  "key10": "3YRWBTSEbVz8VdNG4w8Em9vu82txksqCknyoG2tffY1HDUtbyR2RqkCkiS3adcyByvESNcyqUJiVKrRk6v9WaGJC",
  "key11": "5D1ZiXJNyCQzTbw7kZ73gqpGp9sukkTfyrt4KbnpaKh126C2P3Hwod6uy6JwB2tmZi5YVCP7EWf88JrqSriYb5qC",
  "key12": "5aVYfnbt11L44f5sTG5Ss4TUJrda8cuU8SnGr4Xsh6mCWivx4774oCzS6Gz1gk54XQCJAcMQw171B4KZutLWRA3q",
  "key13": "62cs4iBP2TNZWLdXR4Yh4GzzYat64am4YRKVPW4hdn9DqKWAKvNUyas9JeHPEqprYR5dWmDjSmjTUsWq1W2qe9MA",
  "key14": "54aeXDKukwrV2TiD4mV5T3vcuvFmNpH1iq2fDKnkZ3QwBAV33pree1TMwf9f6KHDzi6hxy994igfPXxsT9Lo12ei",
  "key15": "pCSUVAtPE4QNPLxXfnS1gEU5vDPZshqyaECc3CUCMBxx9xkoWrLgoXcm9S57RgdQXrfB7W9ZK7cngBVute3XxGZ",
  "key16": "5h3TYMJsWJpASoEGqYpAqSS9iP2eDhoGsddgyPNrzn45bvv5WS7PEJKZVbGDvTTWmxJc1qgRSXqpfk23ma6iha64",
  "key17": "S49ypN1V6bg2PqQnhR8VrFCGgNCPCH97C9S7JF2AFdzH2j3inAVoFG8uH1XC7BEBcKoYGXAcBtwmayR8ZLyMV3U",
  "key18": "3cWsNeU88PjyX8oNoF4fKx3MoaC9sggbgKhqrZM1sqCBDVX8dS1jyshKQzGMyKD661mAa9HdwELtULYYtvm3QHAh",
  "key19": "5NQKFa8nQMauhC8e2zw9DEodTsJDDWrnpkiuruHjzKthYB4kQTi8cqJMkkEFLMAx6MAxXa81iyGg69Dsm3FquxC2",
  "key20": "4uKtPCehJxypp3WprtpucpLAM8C2Wq18DbFCkTYmd23YuGZVzKZ8ZXX8ENa2GKY52FunitHYEFYKRJA25QyPzChm",
  "key21": "4aAVauS2R4KEtProkwH7t66hAZHiFkvi572SqmJdNEze9omWsfQ7fc3gGcou3pAc8rro3MFa1q4kBBYJtifHGbb3",
  "key22": "YCo41m4MqDdccCqWER5Fjdcyz8RztYukp2ji8uSJhKhcYrzCP1JiJn1YcC2VR2JpUwmTtKXtVb8uoGZ7Cc9Ykws",
  "key23": "2kkps7VAuVsvShToib2hYn9gDfy5QPpRtaiLry2u4ZQgf7wXn342qi122yLiRTGY6Eb3B2qd98SHZHXfo5o5BcaD",
  "key24": "4Ei18RaaBgmg8oU45JaQfaKEmR2LqsyC8GiNU5wwmWVsa7R5vATkEDuDvZ5Fmd46FmsddAfdWvPadnNp59H9bY26",
  "key25": "38BanMtspZEYBhPxph375EMfcnwePn7usuDDboiX2vTGmqh9TWEM3iz8RpFzTRmzT8zCa5aejT8HnaohHs9Zzu36",
  "key26": "5t5MyyDMf1RRQkmBYqdsLTbB9LLy96u3pmrbHXRzYdH1MnbPJb1xBd3aPBLPVdF965zetzTQp2MJdaZ59oWLxVBt",
  "key27": "2CrohK3RGYyK65bwVAa5GCr6R2Tquh52sAFcKeykizHt26vzgrgNodLeX9tfwLpZi69jqeveeqGcnhLRThiciA23",
  "key28": "2c6vKEALDtWm7rBoNQxnGDWTgaMk4A4JkcZSsM1gNqezjTKje6ex9U6Kmbd6CeDWzPkaoYhnTpPhArgDREYDzm21",
  "key29": "2qXAC6G8hPtrPJ6P5pj5T6WyR7eH7osojhuYWpzKK2tMvnMpN1hC5To4itBttH36gDdsp53rkBWdxz4gK7QiHpGs",
  "key30": "5U8CwZxayi4UHWNtc6J3yLa4HhDNngfAnkgDMkXz9kuoSB6Wx4gmxHkRRJJCFKP11tNQ4Eofp1PYuYBF4FiBG9nS",
  "key31": "5tRGAaaGhtdAnncaekH7iX79tEZaMnVXssnoQ4Yvf18pfxEr64FC427Pz9uXyKQBJ28765Mhs88fBtaSSSxKedL"
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
