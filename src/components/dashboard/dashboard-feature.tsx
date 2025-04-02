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
    "5E7GW7zLv2xrxPE2RhiPAwH2EtSkezqAJDkD4NJgb5Ypu3rJGyaLPL3b6kUjQhr6keEPJFGayeQkr9UiLMzRhGf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F8wLG6kFAKgw3hsAxAp5hVZd1LAwym8oTfrXTzbj4stk1VjxLRy4vZkFSjimjcoQKgC6mUbYDTrkq6UWh3PCUZf",
  "key1": "jE9jZ2jiFeGfmkbzYuhXkYWyNKJ1VbuRdJpQvyTafZnUL7U1xxkaGqnKL9JHWPDVQyLgnzwgh2WNkAngjk6bQkE",
  "key2": "nerMEC6qGBGC4GxZKGmu3Dgu8TtNkNdpbBMvvbxDbAg91JzxMfvUw1NUAaqQbb8RRwiEKhYTzY8cjHsv6ZwnSQt",
  "key3": "58WH4JY4wCrdWxH9PC6uV7DjTY4VAeKm2jq3qyHkjqH8Kyi6YZRTXp9aHDzttcXULTc5SQFFSzTBTKjGhqNxQNXw",
  "key4": "iwyGJTbtKCAAo6g8AfhawzKUvKoBWNhTdU1gfA1QWMQW1EJZMBv6mopCwNAupHWCAVXn6uxgvojXiZBt6y9w1kk",
  "key5": "3jUXENkmWGiVch9N2gXJ7A113i3BAexV4emSa3Koneg7qRbMQ4Ld4SYcwntEwZHJUbiUExERBbwJmCNR3YXACT5S",
  "key6": "3dWyrd22XRzhNTwuGEdaqHtRm61qEhFhFckQHYWMyfMsTvqHBhc4GfytQ1cY52oC353V2MA6RPLAYEMSRqRGTsq1",
  "key7": "3xrmTC2CewKPKBdXu9KwxtQjfXu1Z2Ui9k5WDsVPffdTrq5bkXyr3jrSj6SFsKi1tstCSBi5hv33GB9qAguSYfPn",
  "key8": "5E4GguVMyGDtCtUwtTiJU4vh7HkCGJxpc18G8Dd9qhS6VhT13fZmSq2hDLLfiaL27iPeei6xDRLtGUisyoFVc99y",
  "key9": "44hbPP8Eq3dRYVs475ogU4VCm6vuFiUhvtrspyF1rxszTU1mQG3mWo7Sg1F89EFbzeoCisWNS3B5bchSyEcp2oza",
  "key10": "YcgRLUQTfkGjxpmmm8i1e2LxBCdcQt9dRuuuQoquNeAZDokYz9Cf7GWLCPCsosQko9UmuwWE2GP9zpNchH8jwDd",
  "key11": "5wTC6gC4pjMGyXRSgLLTRyvQwzv2vxXB9N9SeHhHx4AgythJTQQPTm4Guq1pXYyrAy9TTgpdqYm6r1FNPYzv9s5k",
  "key12": "5eERGfXz9Wnz1Z9kg3oyQEn8TpmpUoz9ksRH92iQjsHsCsvUYm91cJnE31JJH4scVjWteuSZ9WMtMWLqD63dzDNs",
  "key13": "Hzaf8BTq7XvPfbwkV1CxXXDxQ6BbhjDJkkPEAW2E1VgmjAYQsxcqRz1fjobMYakbJPNi4RMcPAdupc4gPncgrXf",
  "key14": "5uYiYczoPScP1WvNp5Tnz4Hy2jxyfQy1TEhXZRoWfq3okwrXuhFiNLniQtLGLmtBHDgYktUS3qAyzcALSME1gi7E",
  "key15": "9pYQUboMfQpfa7QZkJJocUzu1naBod6YEZTzJoXfrDi4KzwkEMsJZjXnu3eVWvNqTjzwubSj3udE27oDFP2RX22",
  "key16": "5uWGQHhtKAKVFwnb9W1UrsiMTXvaGZG3CRT91zMKEZcyPPRhe8P5rWe9hwbCn578WZyL7XKFRSQ5kecE1JiqrYWE",
  "key17": "bVNNFR9eYSvGsJhfNp9epGSdQqugSGkgZGRrX9kqVdxNCTk3PZZ4LyawHQc5C62EUaKeH2SAFimaL57gz9BXfAD",
  "key18": "28WnrGbk9wdLu8MbpAvQD9jZu6VGtxjsfvEM65u8q8WZR6UzaJNm8A7g8nRpa2j8gzSgda5BUc6szkFmjL2oyDDR",
  "key19": "4Yp1WVDAbeDQ4DvswtVnPEycGgiw7vdXCt8m33Q61tto7myUKSXPurQVfYkAGABDLwSuPp3sk9xaB3EoyzDzG9i7",
  "key20": "66oE7iGYWJMqL8LoQHXRm9yVQuhaQqJVhEBsxuwoSzXsQBYYugrrvuuZfHEJhvcoATzLfywsKPAQavD1ySFq4CkA",
  "key21": "EZhKhUeKihBxvZdSVsYMUSttiFZrNbfpKt5edaz2SGzVRVHMvHQBcgWacvFGyFhMJtD2vB63q2PCu2hkhS5x6Aj",
  "key22": "vifCuh5sCmngCNcMX3CVtQqJDCDUpvwV5jBDjrChPayTHSe6RS8ogekuhHHDCbnKmgwijjKi5AtopgkjS5GSXgh",
  "key23": "dvULj4gmuiHreqv27xHy6Chav4QrkdUhJdKMW3BHVNSjPxZUUkFBibQemt86HfNShnT1r3W9AQaA28MCetP9XQM",
  "key24": "61xSyYwAHp6PeN1RBrHLtxqiAt8n6NWP4a35pYTGzbHu18LJPR2Z7EG4yqktnGqzVY7kyHMBtkFG2kw2Eu9oh4Mb",
  "key25": "4eBXEDEE3XCEQmePQ7bp5QVTEz3FZBB4D3yqR8MvMNzyarB5wtkX3jt7fEKRQJQe1Xvza8PoJYnrUoVjzYdbgjNq",
  "key26": "3pYxMLmLhAV82M7hgFtf8rfrqZUfvFpuvxCWZ2XrbAjrYXzTPm3mPAfMkywdVMivBpW5FMmgLJ1MSYY4ho3z1GKk",
  "key27": "2PgvbvQCY6QqMXP2EzCQWQ3eQanyjqai2ypaNT7K4XgpQohuKmWVjEC1o9UMNvtkzFonptBMHfbR26g8xiYt9LfT",
  "key28": "2WQmoEjsTP6DREgtnFd6AqPna2Sumq9yRN6WE3NvDvVC9ZLK2eucUcL5pbzmyQXjXPViiKS19yZwpex3FuncBmXE",
  "key29": "56uAAC8sAL9XQP9EdNCuTiYJjv1MdSBjzgzCo5D4FxaC5tBMXsuo1xkyKPgvRNqFy8CVW23byZHpeuUACWX996D9",
  "key30": "x1kTeY3WqWDTDUZEw58FE6fwPT64nakjMHZbynnmAe2y9da9BKVmkta2995GWu5x38XxuW1D8x4WEPeKmQEXCJc",
  "key31": "2Tpo5pHMHaRwXRRBUsr2FNDYqBE3Y9Nx7TXYJZ7iKdPfdrLbSGe5v1vqV6U7p9Ci4PcdPHebiv2bufExVycSkcpV",
  "key32": "4BQRDVKqurL5AXaUhhzZLwySJBPrzCbgJ1h6xAgeJdF6kQTAKzJoHV4KVSJkW9jxd4M8h8jSgFy9Lv34SwHeYz8z",
  "key33": "hGfE2ovmsUzTvTvcFEdZFQr9ru8R2og2XoC2YqBDHeZMKYaVzxXUMhKtXxuCAvZ5LTajGoLYrGRgabk97vd7Hjw",
  "key34": "53snpbRYbQkfh9GoteSpMz3Di4i8trzUwtdxRo3YAb2pefZRnbGWfketrCjUzRFQPRnitYn34qoSVVqLPCruJxmf",
  "key35": "2gRHpCGAvvf56cw6egkWsnrXbB65ZgCTF1TsrTn5ufeafFp9kiEmCfg1jMQpnCCyxcrh8ECuAMRJutDAqcJ5pFiP",
  "key36": "3kEfdTwQtP3LBTrCNj8jWu9caTs4ZQpvLJa4g31x1s4bEAHDjavQiXgTuK9VS2EtunujJeFB3VmcnyfzSAbF2SFK",
  "key37": "2mTJtm2BPciG2wG5RwYoGiui1zg1Z2sfUQ9aKXZ3ncEps9KBxjrzDvEEkHGts7fgHhjvdb9HKcgvrGfXUA1uAcnh",
  "key38": "57ybmYKUC2rAbX4fPUy7Ej1o5RgEMBgvoUTQzqDE9s7H9k6SYJb17RRo7gCnH1zvuUBmaPZWQ4KJeQxVUgAk7zue",
  "key39": "3kzptrZ12Gc6uqLMGMhs39EuU6hc8fNXC1RaKK2XkXWDuUcTu79fBdyEHZJBGr3WyK7jhMaHFz9NEfJYM3tjk4Cb",
  "key40": "ZwRefTCJ25rC8ZS8L3ZnSYviCbEdiXiCqhfBzVCfE6CVfHCgvb1L7u7NdmsF1g97b8qihvAHwxQb4xpJkCXDbTh",
  "key41": "4wf7Xoz6kdZcJe5aYSKd3Gkx3PbJH6q5gWv9KZPUK3nqebaQm9TT5AYoPWRkmDBKeJnZLSHgADgGsf6qzWoTtc6s",
  "key42": "664Bv9vBDNFXkffWHwkkxXwHaTkfFG3y74YT13PYTbcCvKZYhqfKgMXW9eCcc6nRXMB8qGcuWZB7LZZNFng6KzPj",
  "key43": "4o2mSAuUN1X2BneKqgqRijHjayPtFPyqSnUQDZkoKsjto9AyHif4b9xSseFXZ5Kg8uG2vwsFAD3JEXue6cN3Yd76",
  "key44": "3HA9ECZ7R3BMa4uSwnc9M3QiBYDBpV4n333J46CaZJBTanFX14rTCPm2x9JgZWPNPg6ZneV5UDnz8cjLc42ZxisG"
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
