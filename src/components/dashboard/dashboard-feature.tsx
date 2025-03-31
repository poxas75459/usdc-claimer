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
    "4n3JKNHS3WKUkZgxu4JiKxYq1kZc4jQC92g3nLN6JWb2e6xd1t913noQnnE8Z2xuXJRqJY9jF1jK1xSA8EYWBMpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JgpSh2zfB2zPnihXYxJmKnGjDhXuTK3SQfg7ySYme8DmUZ4xCDnYCMy7U9gNraL5x6mUqTwQgCrMnYuCFjkEPKg",
  "key1": "51idCinKA6CW6XzYcxUUZG39u3Y2sYTpwgwTY1GDeN1XgMhtzj1y1WB9sR9zNy79B4Gjfq3fGJJkNNXCX9BSniLo",
  "key2": "5VZ9L1sKZXWGYNrUFSoTQcohApANZ6VhGAf4sm5aVuptr2Rxgppfy753YttqRjUDgzkxqF7zNKCGiatrXfNL1hnC",
  "key3": "qAFVzYMjhaYskbt8jJ7Hfdss2MSvRWv2tG2toeQYGdoRAAFtmEcg8JfBDCfCjUDu32sCZaFUG4x1QarpxnJT8A1",
  "key4": "25QkroBQTSoqHbDhJm92bijVsHWR9VeyXCNven2sddHmGSW6UJsK5hLscDtzynCBnt19aUmFtPSdZ61QsV4r6zRZ",
  "key5": "zdnhrzaZi9D7FLH9bZaJsVDd5wCyiyFLEmKcBqEiwvjspv4vWGB78WpyGnMJNkeDNBHdgC9RmzPQkShJcuu1Wc1",
  "key6": "i1DMbS27PYiMon13aTVoQCYSUhxB4pLDAo4fGkNeCmDDcTyTYhsLizDRFDHQQgEdDHzj8sydQFtqEztmwKGPbWT",
  "key7": "kqxTq7XXGjc3PyxuDCv1kPzvt2pE6hGmXbiwZYPVRBcAQbZJBRX1HgKjvMiMufbSa2msdszUVT87neH44g2MHFv",
  "key8": "4jHURWrRbj72rJ7Nf9wckbu13tgktTaZLUHMShYyp3a3yoF74GmPrn3dJt4Ho6PvMRhkmhLC5W2GwTMwpMWkMmuK",
  "key9": "Pckudh6hcLCZEfRJkUTvN79b6XgTSDUHdtqzDq3kV7PdzU72NgLc2BnGbHYt4KyKsB8tug4SRSypBvUdmhjib6H",
  "key10": "3HShZkDCsmevTnfsbQepZHzFJEspjaG3DtSUG6eYn2pwnY3q6Yg2Z9wZ4UsLgrpgCSekHQBpEvfqxnxvwLXdGdwd",
  "key11": "4FYUTPMhSmvYkjQF1tqYMkYRje4tvFKo9CYt16tayuDfY2Tc6t7h79sMNi6wFtbwsxxRTw8WCBy1LApg2utqF355",
  "key12": "3mFAjgZ1StNe65p35U3qQNyAXnm51KXEnF7uYfG74ePFMChvPqW9NTxQ5pHh193itUPodRLRZBF4yYTcDM6Z4BbD",
  "key13": "4ZwLMpcPp3bddv1ngKUmdtPpjAsJoBrhqe3776eZSrhJaS15sUCr5yRvfjxba1f2Cka4YMoRerXKyu1uzppAWdba",
  "key14": "3UtnNVpQ6HW3Jkr1tLfXH43L5Dbe6w4tys5dMEu6smiUpHH1hjMQ31YcaGR4HYCTmEFneZgEw7H1xKxA4X5uiahR",
  "key15": "5wk5PEPuTyoCV4Yr1RspPdyMCV6UFEu7poaTbcFkKDp9nTxNwe4iQYFgku1u8bdEjGV2CYJQ9VTVefkTsVCWBrf6",
  "key16": "5pTyS7EfRNuEhUm1LRSQrDQwyD46KK4wWfxpuaEo8JpRamHEkzx6rGDQrwVBR2bL3gUbwPLExqWYJjEHaLcYyMVV",
  "key17": "5YbUBErNgmX4M3i8oY3t41eXsVC5ciF7HWvWUaehJMCUzjeS8FXhMuJcSxJddKyuv6d5e1F8U7xj1PZs2Rf4ssie",
  "key18": "3yrXwPKJvCU1RQZt2mcoz5cVfJzdXDw3ATu8RhAgBcTXic3SYDJgGsZ99UPyVB14bBgmHByDfNVuuxQMqJRt1pEa",
  "key19": "4hszsR1FT14dkUzxAnXUUZo2CRkiJckNUKyqsQ9Zh8JddSAvqyxoh7oDmASNVmznwC3k7A1hp4CYSZAYcQ2MDVYH",
  "key20": "dnT2pbY5BmcPpXUCjWZjQbRorczKNiR7BLndHVV7UekozdWFW6nsbz9izgMEn9p8e1eCTvu3HL7sJtVyyV4Yqjr",
  "key21": "497hfcmuEF3XZBgpwRyEiL7BPvALBqyaDk9aH6E83Et1PhWfZZUcrHKJFc8CwoT1mvXzwW7G6iEtW2Dxrj91X8bf",
  "key22": "3GPUFiKD4KYD8TakVD9bxnJSVZ9YV1uLrSpJFxhYhpSsrCqNxF4s3GTwCPK7QxCwDDSCVpUCsfbBVyTH2zHsLBk3",
  "key23": "4uLV6tA9FYV7NPWgxYA7FccPWcKk5dpSCvYSpxBrjxXqZDRceagrKUjHVx8hxT7ciBikm42RyXhfFR18mzKKYNo8",
  "key24": "4Le9Z1nHqdkxRfNy3RWQto2VLKeHh4JKzafJzaHcR8KhKusSUVu8tYiXHpgD5f8FYRz6nZRzdZqdSpNWDc7VDfWq",
  "key25": "62XdU8YYpSu2rHXEs3RNgPXXezT7M4CoJw4wAAo6Kkqz9d1DFi9oW8T8YgQS15fhAyN7wKxnTbbsWoVQydYxBHgo",
  "key26": "4W16bRwcPSg32f1FZTPx1EfytiadmKWz9JMK1iot8aTqSxMeq8emEgAMK7pchmJxZiGqBwvPjpdriHpxjN5GxyH",
  "key27": "2u7bjk1svFgxNe9SyMs1vypyPU7RMFfRAbYZhZtEngSTQtYn55Bz1LZczPTKohT6SPZ4ro7MtFjfS8WFXdXTQ9CZ",
  "key28": "63kErWp7dDd19tueX4343vaZEih7DvVqSJRUn4NCxwcxTR4MpSRC7FptXVesWfY3ETCVVWEFMRnCUfm3wJCJGyb2",
  "key29": "2LU3tEGKiC7NEa9bofGebn2y2UtvLWwQGtfST16uKyt5TEXSFZ9PTydX5ef5Bu4JhTJ1ZBkvWyuKnVJCmDRtPSRc",
  "key30": "5xSdxr6tY3W7yExTNanXEFLannLVBR69PgH5Xw4nYzANMCjQRWWag6ESie3A5nBiirMukyJ61nbaaZMGckRY7Ccb",
  "key31": "3aSLFGAyJA7b5AEVdkD9qwzPNFVnrNq3M5sksJU9H5jcBba2PUoD9wTH7Xyi6ieq2zM5immodEca3L73q15sDccm",
  "key32": "4pGpn4Ek19LNzhS3iPFj2RRiyGwsxXRKYmwhd3smw5QeDQT5xRTNdK4mg7KL78yf4zJhfwyLAt7eHZivyXDSBjcL",
  "key33": "23yfFwTMZiQixPeoC6i9SHA3x3wwoDmecZV5puMGeaWABTiJ1eW2ofWTs5cJW7MrmkRAZrw1hergFRpwriqxM2xM",
  "key34": "XsXGwzw2pk6xBL85tDU61UUFMtJovKCy77rwBiV497NTCdzEprHzsosdP2KnJP9XXkmwAUjvGr7JybBRAQ2kdQo",
  "key35": "3C6E1erRaEzUr9MsyKuLebtjs1H9ZHWn8UGKrWy6pqtkkci1xu9CMYqgGgJzbeSWj3FB29z6WUqBQwEqB3ZmRrge",
  "key36": "4Lhy7bsDknqoc69qgZ5JuJP2687aiAcXCgr8Kzt5Xyyc2hbrveC6TQ1EpJuCWHTaLgTGp81tcq3UCDdQ3ruortTR",
  "key37": "4gypKc5qzSkXrE4M2HEreBFekEztjF4o3FksXxuQkY3yp95rXApXYaTZyLVmEDxbsFDKRPoXeN2LSKzxmZkYFVij",
  "key38": "4rVUN2V7Vo921ucG8y2HJBZaKtdYWHTffEtvPNFDaEwYB9rXrnwx3MGnbJhWcuxUgnECUccda8EDqhJ3TKbc1Gd3",
  "key39": "5UTMxfDeunyCb2DtALKqRC21HnLiB1yf4K6mKxg4evPgGfibuKwSA12FUv8vjzRLCVEhQddsjq3p49Y2mKoCcfch",
  "key40": "2AQE5knHFLnDVExeEwAopefjqXJcmg49SAa6cf3QaZTrRGpyUi3uzaFqmcaHfw2t5GMv5vAK9wzrajohr6mtNaGd",
  "key41": "3RsV4RfQWbw5mE3nNVu2H7Zzkujrq4Hd4bKR57PmUCtmWcmjrS5MHS5bcSDMBavW5s95tzVGJMaVdpJdQJp4EDWj",
  "key42": "AUnn52uqqFDSckejCj6sEDTdrFgxSBjouCKpz2RRPwxPPXWENezv5LMSaATR2f3GnZWjtaD7KGbegYHVPDkSxRD"
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
