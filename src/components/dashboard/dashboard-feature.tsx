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
    "2C3EEXrg5JvPHmZghdeN6VrSFyXFY3nd9zov8kCFrSPQbf1dZ3WeWdRd3UJHirjJnFcJG9GNnVP8A2XJaFfWTEMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52z7Rbz2b4dTWRPCtfjbmGQaaygFXkN9PixGfVZ2nfjNhEbd8RivGMeyGkhsjN8rKtPgbgkN1kBKTifADx2LRhu9",
  "key1": "4hxauQa6K4RrUaadEqJmsQDRP3FTiuChAtWDiaVUUCZ8HNew5acFBr2f4zPjCGsUP1LnES7YujjLCp7qRLxa12a4",
  "key2": "DvQyrno15NKU1LSeGzA2exN1kVUCZJ42cDt6ZEGsvqb4DYk9FC6VLNpN8UrW3XZXzRgXokRSzFg9RP4qHapzxRz",
  "key3": "25ouaHqJ4JKorbY96iUawAAW7PYFqHvg3mDbfAdWSvswjtY59tqbTwoTeT4WWBsZYB5msReYM6xqpKPNjrP3CZc1",
  "key4": "49Zzv9fiQ8EZeyuuk7sK7uUsM1G3CGjeC86USLW1URXTdpD4kpAAmnmPnVPXhEGbFmC7DMSvdHr751WWf9wajnWG",
  "key5": "22KGkQJSLatDaYyAWXccHU44s1Qpycc2zw7QwpYrtoouUjjrqdUzLkSfPBUA6hCnVD54k4Q6pmDNJtVcHPkURbFF",
  "key6": "4FijP8BV29QyEz7opXiP8iEMxCn2hJczL47HWDUEGM69RQ2dZmPgtK1rePS22bHWRZUXA9f81GSvajAw3TaNbzVK",
  "key7": "3EVPgtv347TcGpNkKinuLdGDQ1kBCt8yRcK7pjVcCpHMDnbiaCj6KpKrHDG2hLdC8ggUY6ei55ghBZmb5Czb5nFe",
  "key8": "353u7M7TiYKMg5aviRBcEyKnwd5D9dopVy2DYpe2A3ddhDzVEVPVEzmpeGBWizF7qLq35AdE3n7LhpuP9afqqCEF",
  "key9": "5qivhFKqNgzwiaEvKW8Z75s8Q3J8QYpp5YDWd1pTGUHMQYdm2eoFBA2ZGUTjTcc3Pzm179RQXDhtDDG87byKdBvV",
  "key10": "4j9k6eT6kAieVe8WTQeYs9Y2BfiZjM1j43ji5HH5DDzp1d9ga83gx19sfu8v2NmAuSKBL3zPaA7ygu8tasG9jgny",
  "key11": "2oL4t8nFzK9y18pCF3FXWN9B51SX2j3Z2fgp5Bt7FHqGAJsu86y35axj4RNFSeuxrvyxxzuDTzArdB2BxNF4qY6D",
  "key12": "3F5NALKt2wKNxiYzAnUkipv6apxyYx2NvnXTup8xRMpqtsx9LnPVh8Scz88a3Ge4fq8LVz3NmaXMGMJANuWbsPxJ",
  "key13": "3AnMHQsuuLYsRL7qkuEdMSyXcHpbD1FLCrjdKh1chiEDKT9sgDEKk35XqyfvEABWYdTXmMUkNQZyHA82hBhpDTi9",
  "key14": "3eiTKLdEZZaszTYEwBmZMLv1FnunYj3MZkhTfxaW91hgnczjkXou4zWB9smu4hY9nHdB6sqEfkVhGn9tv1kduhnT",
  "key15": "2CTHuCrf1h5GZXq9a7dez1ZeBy2jSgP2rjK2G4ctwV3GAZCed9XciGh9jtmmvKeQJvsVF3SZstWMpxcRVatr4Rqj",
  "key16": "2ZoiDhrJd7CagQxgQJPGTT1pwYPbkEYppZePpbNdQk7DzzsFB33kuuYSddd1fKeVYeur42cdV5Hp4kj8mcGewmWd",
  "key17": "wi5EgKo3C4thAMfEyWeSX9ZJs4WK1wAZxBdSjdw3KFkE6hMkFhgkrqGqC6SKT2i1Q7nHQk8VHySGysTCMpEcjA3",
  "key18": "33qtkpGfGVtGM15cFQw4vN2Gv3t9K6hKcejKLNtj2UUmhy4a12GjYuRegfoJy34yXh2hvmC32E4iKtcHjAfYqjLD",
  "key19": "F89uHz6VJdcbQHSL7u73A2dTBiAiLmaSsDUwqTvFDWqWsYo13wnmMRe63BiH7w8AZugeYehXHkzHXe6jo1kzEmR",
  "key20": "EGWCnqKJbS9geiumynsMBpnmjVm9q7FfcmZvMZ6n3VMaQzV6LHjhjfGAHHMJUNCe7v7FuK5bx7JaaHzja9ZX8Av",
  "key21": "5F75Xr3Ri73Zxv1KadEQ6pwYzQFx2dy6H7ef2bLm9Mzqjph6Pt22r4CmTAdsn9HkuiyZNgjmkb3fKEJEZweqeHeJ",
  "key22": "2PNFFouR2KFx2weXC3EGvAFxEWnfQD6H8gHMiHrieK9Y3SDzWiTZLNkc3C8PbcG2kAAFQe3m5BCAPiaL1SD6avo",
  "key23": "4BZaQLKgBVqU8vvbcLL5azgBK1bugDhDiekgLuVqQb3jHFA5dvj11UeC1VRu2wedZPFkZg3eZHv4iRF85vQBP7vY",
  "key24": "4bxCppsdYtmQubEi2chtKgTzwoDDQnFeHqMTGbzaQGoLw44G59Q64cEBkcV637CT5LoBFNptRFwJdbwJzbLMoUHG",
  "key25": "56nTJdzsEoFxMhRYFn7BN8j5QxqpdDuHRMJp9XZUvXqbxrg28KS22iTgont6bFNNcNCjdGegHFAiXBBABmc6ujmj",
  "key26": "EbQy99KMcQYQvxMXRE8b36NwsqRaKdWnT8X3jGS7tv7PXEzQdwFSatPGEJzveVSVdH2haTjoSwSqpbcUoWW5baG",
  "key27": "44s3y6bTXYYsN5bm94X8v8mAex1SBgGkMjkFvSaRmZjsyktU4pSyNB4w5Q94kXjKdX2tupd2WeDeHjZ8UXFBmL2k",
  "key28": "5si6cqy1ChKhprM9eiBJrXDxATazhvGxE3nNpkVuhpzw9ARdFvdgc8Qhdkqn5tnkeVRpP9dBKohb9N4Athj7KN6G",
  "key29": "RYEoaZFiPMrSXbgYEZwypvH6TMx8CVxDNdPgKZnFmfTnzU5wqikuSXVeNhJemycheHTjKWMWrZEfwE2HwsRS5aS",
  "key30": "4QgetnRCmJPB5WA41UsagzNYAiV8Ke59zAuN2eNt9krjut6TmBPHFAETjac97mEjwBW5YQov1NfgGGJqdVKHSdXQ",
  "key31": "52EQQ5Aww732hnUtHkCxkpLwESx6ZxRqA7QrVGHAavxyLwJc4BeE1dPPxEFY3EmHfdExiEUGR6vhb4ZTGuVdie49",
  "key32": "2kUzMzjgwq8mtpTMhN37K98d6SDP3V8oGPzWac8Rn4zv8Y2dZNJzzGgA6NncMWB9ePkKMAMLsgNVE1njn93nd3X7",
  "key33": "3be1Y841ck3pZkzaTaoMHsqwmMhz9QJPhfVbWb2QgbbwBCD6xVzwWx1TduVZ2AZeHK6RdFGRqrehR527EbAuEHSY",
  "key34": "5FTANE6hFE8fjvcvdPf8yVBrP6rEcY8nRSaXv9fbryk7wqLWvv1oTjRqy3j5xu5tKPsTXyC957DDNRHXE35ycQLn",
  "key35": "3nEkFcJBq3vUU2GmGeSw4oUe1NydwG5upji9vvc33hPuY3jaZQs7K88uUbeLFT1HMf6xfSJ3DzTN3Z4Aze5k61kN",
  "key36": "5Kzyf27NmVJgLv35nykdo8cHY2vHD3TG8fjkbR9kyJR6bmBWoDKqUZetU1PbLspQSfMstpeFmafEW5TgxUsQ2GN2",
  "key37": "5R3s8TM7QJVqngUypFfwbun3p3ZKF24xk9UrW2P7EQeeuZSPBwWTbXxCRodFQ21UTJvVQwSe93TmDaU1GyHgtcrZ",
  "key38": "2PuGxcLmsMD5Ynwp65ZBC7EV2Ho2gcTc7xXKx4RWWYUHW3nmvZFMcHF5yVSmeaXFo9e8TdmoD6Jg58GFaFdZBVXL",
  "key39": "5myXQ11g3SUMDP2MCCQVwirxbyiDWJ75fe9XfCgK3jrvFXnfTE25EtehW9J91jqvWYJ1rF3E97fBpqx1MF95LC6h",
  "key40": "5A5Z8r9e1dVSf2NN4L72ZHXwZkxJ4QuM41tpduptmWBYLMDJWeQaNWPpLSNGuWRCNAaMtiSNjpaKCsSqTVo5UEig",
  "key41": "4wywiEJmbu3riXEoKvTmWNaYCy1uys4cR11dQYhMKBhSEE96BZFNZhkLont3ohcAmYJZ7MmVwmP1THYV7havEbYz"
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
