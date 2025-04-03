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
    "SJLxWDGYTrVbMJ5q3Hkh9L4VwGenNYqQeAAZD2JdVcoiZzjaxJAQsteuNZRmbEetmjtLHpZp1p8hE2SdxCoDXnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "639puaxR1xFrk2u18k4rActMozfzqoERyJH2J8cJHLS2565uq1adzDhzjxgutFNRzA6uJZZ5VfQNZR3wUwKKAgjr",
  "key1": "4SmDD931unxjTYchD3pZMtyAtjuVbjtZ3MKDVzXo9H4yedYMDfKakTjdwYAtKAbRQNerDJ8Z2Hr76WMywGEWs84T",
  "key2": "4N9AyzRgFAz4R1EfK6nLSyfgUPhn4Gr3h12bFEGgXMrmi5j3aRd8ECNpaZ3UKjPZcYhy8gX6S4yPdALzBfQq9yrz",
  "key3": "2amUhzVX4NmeG8HuAMp4DmmUNXiECFMtMRYcTeTi3fsHgSKZan29kmwtVYmwZvwT2tjRNWmY7HQBskupypTPLr6K",
  "key4": "3axeXmkWkA7Y7GohgAFQF71oGUJU7ySjWQaBbfpzHusv2QXcsRiNTYDXbpBFqGZz3yY9KgpsavGvUqQRp7kwzRov",
  "key5": "J2y7ZbFjAEFrxDzmCafYtcgiJ2FanaivVx76P3fPmHwppXXxY68CqWC3BKY5b9UDAcNtkQrFiXeUw3DPtvCYxWT",
  "key6": "5fMcL1rNHuW5crtm8uZBLUs6Hy6RQK5Xo7BaHQ9eLugi1vbGotA3JEJTVNQH5XtWefLSnaDTogF53evESe6CFQxP",
  "key7": "2cb6jJLrRvsiKDemiCFhX26vwWynbZqHtbKcAY2XdApEC9cVi4ceJLE4DdCUVbo9oSmxgWnzgJex4ZARUB8T69Ai",
  "key8": "LGquPV1YBm38oMxCDu2sFoczrQDRPCZL2L1bi5wez5qDeyPVFHSAy2QFRvNTDwHWdD91hzmyLkRXfsyYJyttLFr",
  "key9": "dHbMSFpTNEDgKUNSGtrm2k1bufNtKuuEUPpfpHWCMoFPCCvjpH8WJkHWUxBiiiSq1z7hjmbfaR7mhbXVV4Na82q",
  "key10": "4j7HqB3VeC84mZXGMXg5ACSEchrMsN3yBCfPqgA65i7cAJa5pAwjP1FVMCv2BpRwVaw5MVZ9D1ZQJyawSpJCVKZi",
  "key11": "2Dc8T1nEEY3tq7JuzLiLkyifoYT26c5yHtAinU8YfmxqJVHN6hH9PVn7c4bv9P791rSNbUrfzsxseSmkeG1zWH1H",
  "key12": "2UBkN63w9nV9UDrgnnvKutqeEdDYqeHWUuzfy4s4Gf3BkVr5yoARGmx41KAo3MVrhUxqMWH5nqpmziJHGoaU1TAQ",
  "key13": "4FesNNdr1ESSrPpFz2Eh44qEqF6ypSFw1MCaWZUg5DxmaB2CHMMb548zkhACeg5M35gg1ExMaQDw1ogrRhyL6mP6",
  "key14": "4ZdCTPsrXHBjmvNtbYE4oWXHgdCDypXd65JYBjcWu4T75rc6nddqqZH32S1wjnY42pF53zbFhXMny1anesMSN8A1",
  "key15": "3GQjcgxe5BtxefTmFPZku7MftvCGnyT5fnyQhbdNsUcNn5YzpG6hPa6hsnvnJpworoQLeyHyzHztMRoucpY96xys",
  "key16": "3htkv7RS1SAHMxX5Uazd8VoUkymdAQnNpobqh9NBM6LaogjuG426n6kHzBSBE2gp5QUecktnc25Xn76VUyAfKnp3",
  "key17": "3MEchzYghYucC7RQj8MT1wXAJHkr9poSoRuuGzPXbNQAe68xyek5eQo6tuAwQ1ADZF7ozqhDBwEC6R8HRdB7uj3j",
  "key18": "5t7iR1StdRXT7KuBtjyLJyAwugK5ysLU4tj4b7VAGQnGab6W6mnyf9NEKFihRq88T9BwJZKCqDvpVDowqwGT4jZo",
  "key19": "2xmLZGfWsn5gEV3Vg7iK4fnCyKUsbaZ8yVEWhVT1nwA9dhzTprLsoLyw2BTAwBn9XDWapgfJv93E8LqHBC8ss4Mu",
  "key20": "5YWM5zoUULjMVYb3MYzkiMohyJE4PTQd19gDNdbWhtPnmQ4iwpLgvm5pkN6N3HFZ8AbiDfgRkmncaAiFM8wvLfJw",
  "key21": "2NFJGVsuYgF55mDZ26ZKqKaMoCD5zkhYkmjkZhCebvKFQthjB65Wrao2hKqsgZTJMw4igmeMk3zsoxkSfMCYCyGw",
  "key22": "3oyF1MqZVP5gzrr5V7xhWcP1fRFTjbEibnbEFsxiZPUf7XBwpv7RfMjpUAKU18QrGdmQZoAkzrznXuSpnZML4V32",
  "key23": "3uu57LfhTAdRTDPFCWiTAhkLjt3mCPYgC2JA6BT9bJp4VyZ9znyw3AjKwPAJNWBrVe4smYpnV2S2LnFDrgfpdAr6",
  "key24": "FAzgNynVoGkGQcGjMdcfCa1nheziVxqtMeH5TewFhmR3GbGgJ5KgxY7t28t3vftKVXH1nDBhZHuKMstQZZpcPfZ",
  "key25": "23HAoThD8rrh3ykkBdtyDCKEVoVhxryvxvELTs8B2rutPM1ERtPPq6ZqBCxMwMRXQgVBE3QevtU5MGbfkp4dvGtK",
  "key26": "sz9vHzuaZKyfXmdDJsxS4NfeyB41RQ4pWwEzT6gPN9q8NABbTGBDHMqZFKxupzZJMEEsrY9YyfEENV2zwtnnh4J",
  "key27": "P9yeTLmbo7nRJ2vskWzHL3eq5PStqhq8gsJRe2Em7esDYBe2nfvEkCRcxrVQFEA7uxrKohbG8PjkwtdguPY9pke",
  "key28": "4a939gj5VUvQhQ7Cir3RCTmnyz5TNwehL3oVmDPm3kaLcR4tDHyP6bxZC3cMXgcpoRWYXqvi9NA6TwXSe1ryEsZE",
  "key29": "5YCb2sNc8nXrMYDLwHaQ4b8JvPrWR4xb3MmQ8eiMPbjzfHbHKmw7RRnPCSXta3PeAnM1XivmVRJnNWhpKLJZrsMj",
  "key30": "4TYE9R2PaS4hHTXPuYhMqsCDJajsU2XTrT6poyHPWmjQor7e4eMNSKXTHmsCLR6A2h52sSUa6NsjbPkwFiXmHqcb",
  "key31": "5FmPDoPwsDWSUkWZEMLEn3U5bQt258m2GiyFiDoop9oVyTjGpao2naGALeA75bxZWEXGmuGKoxmqb7aezZcdV87",
  "key32": "25hZwgBzqh3riWqphnTUG7JVzeNNEpfCSZZnxRqh4ZtK3Dp8ZYbopjAYg17d5mSVceCfSDGbn1EfBtLuqJyEE9Xw",
  "key33": "sErMTLqxDK4M63gLbGZbUxQRdRhigATQQBYXoYSCfBRgFUE7eETZ8taEwe4AUaNqG2UL5FtDPuVytPHhTMvCZQb",
  "key34": "5moFi6AJd9DxLRLPwNErqvg72dwB8jV9iNCD3Nfn8FyVdjj167Bc1seSqA31aBDXg6R6GBV2xMbAbnarLrjj3znS",
  "key35": "eJWTLtfZB1L68rRmipoSsXVbFGaM136A47LKrLEhVqsF1tgiinL1o1JwLcJcYRCmFaeFPzGtNeHbdTZ3eVN6ciy",
  "key36": "34FDrikwMa2HC7FMuTEFQQ1aa7YcNv5KMwsCv4koYgr9jyxkaStTibcKzBV9XRpGadnQ2jH5LBmwJb1hZGKAHQLc",
  "key37": "5wNjF7vL8tzJBRBkfcRjfWVV9Q33WwjPoQfLuTiw1Ppm5gJUE3f1WA86jC3W2vNhixZXynB7B19JZVYEnhMgKom6"
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
