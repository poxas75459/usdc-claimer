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
    "vpkEidi97BDmRdoZRMNWprKipbwPJD7szUUiYgTUyjcnxpxDJYScjucPWTs8Jqe7zFGtwpRekLiTiXDVdmZ7Qjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BuCXyhst1Pm4upk4ttgZkgin7WKgv3jsFttggsieseKfYk6z7bNjhUXpxWw9cRrE5GktdMEgc4AP3xUKMHuBVDC",
  "key1": "4QKjCAgXHqRR3cTPLMb3TTK59nFD1H3jSCnmLHmZsGXL7R9yJgSswU4H6zMXXF5ygmYRfk48gazKgSwxCMccxGps",
  "key2": "2uz1ssHTCuFSzEtSmFfc232JC46i4ayXRVXEPbE6xvHheVATh7USftYJ89S7R3ZAPizUVv7djaNGyCjpb2wXZEVW",
  "key3": "5xmiSkgMGbRVD4jKEZDKM6s9zjPtyMhnGNBE3EpKta2iESDXqWV3jJEWZtMzBm4qzk4m6USEQG7hqapEy6bHdoDk",
  "key4": "LGiEVwazantaS6KeQQBud8PaKUNpefTUhznhvpwaXTo45EefAwpdYXcZDaZ1DRduCzKHG2srFvy3kXjiyXLVBFx",
  "key5": "MVsB4GSHrz4fTjsZ8YeMBXVEeDWXFdrTvV2NcgQZn9CUR7pH3DMrbFUEHgqZnqwzFVpcH71mgeWCSrVm1D5tyxq",
  "key6": "5tvGfd1CyQFRN1dj6dF7z7YXqutBM7RMYvPkBusVrqqp5HJGcTxqsQ74VRi2visbKJN95gcH5Da56ezugBLzxnYQ",
  "key7": "5tSJQPwuPzgRnEtp9mJnuty6N4QJ7YCD62yYBnrUjkB1gFPGBrnZY91nTQ4othcAbvoASi6oBw1kUs1dBK4nr7RK",
  "key8": "2sq7x8NvfXvLU21HdcRUkRbistdDWXsqy2iQ6sHcQjKAJYasHyU5i6E7ZC9QVC2EFFFgdocTCLs3ARDjF58673y1",
  "key9": "4hbQLTYBc5s4ciS25o2AnREEhnyc5BxTPdco7EoYf5CDZyRXNUM8TiNYKHNysJt8p4oTPUTZqkpeJiLJAGZwGK4C",
  "key10": "2aTMMzkX7TCnTdFkBgg9ugZKdEusrVfTW6kLrbyK8HRDciBrfrvyTDUHuYHwbMnH8KMkC9wjegr8GzxYuGotXWsh",
  "key11": "3zXYJpFaaqkDFyX9187GcewC2tukszEV8Th8miQ95ENxXD5J28wQ6v3PFyduDayfEAHBaJLHTptj71Cdj5NHvYwt",
  "key12": "3tarbcUh5wiNjqkAUV1uaS5RUDKrcpRyKRbaUuqG9x8JmULe5Un62PgGqtLwnwhhU3GvJjDMJJEQU5wGYGSYmA4b",
  "key13": "2cTnkWT8V9VNQKXmz6zspgxpqw95YdBAwu7wrD56xYzU6VjRVUBUhoBMWBH2tJD9umyFCsULs2t3rqXaRce4H3b9",
  "key14": "4wmMtPatUNMp4ha1b3z79K1weYcKhWgk39pC1HZVeRVZeRGh1st7CD3s8HBUwnxusHXofFEyCienzqtiG9dqf2q",
  "key15": "Y47ExHdnJXbwnZM6QsN2e9xzpqacbo29xXVVxJJyM2xMrs3cQj3jS5LBSocEmKUBbLmUze7nC98Cj48xohGXezi",
  "key16": "4HS7AsQxVMTRpyeHybvfGBbayfdGESv5GAspWXBcmiDRVYHoBzHCvbTrHnRk1BUmzrUBaM4skaGQwhpD5mw1NgAQ",
  "key17": "5Cy6cUZ2ao4gQz2eoSt2e3av7VvBydqNPv6nMBGMPvfrV1ZPjEWvP1VHH7BFu36EzoP6ffGMusrFYms93hjnATQ2",
  "key18": "5PQKamjEEWv4PVwuSFqcohPPepe5hRVxZZNjBpvWvX1FVQejD3YEeRn8L5K31xJz9XzqzLWgHc9GPFmfgA6n8HLH",
  "key19": "5jW9jSjyDJNgiFGwRSf4xTGyVZhEbzvibdETitENT6GhjRjNaNCZsPWkfRTU5m1GPGfsCNDSEy3DQVU3UXEU8mpA",
  "key20": "5anm6hZKqH8orm3wLtSTw37YnAPdvXazvdn1icSirrHAPnUCHfCqQWrtNQJmNaEtnA5bTnitSmReBvNM1KziPC9G",
  "key21": "LdoRUk5AMmEqwg5mj96mxDtj22yhmo4PBLApcz2QmiQwkia7AH27FEWcM6aYJfn8BqcQVvkhZzEsEuTx9rPq91X",
  "key22": "4ozcpA7ebX3P7r4MFAVAKvz6YJsoF4Pe9puoyG3UT4ztJrqhj5bUNwqZL8TtauZEpVUZJ8SnGar9W7f486YxGeNc",
  "key23": "2KnkacdnCEixYMuCfb2hk3dM1yyoBsrCfiAwY29KKthdXFZ3TfoSMhUzDUgmXFe1VFLVZqNVpEhtmTUsyxWno6y3",
  "key24": "3rD2UWaxoZaLoX2P4r8Fmyf21eAmMmzhNsxSvK6XZHAbLBrEuwowC68dBQWeKq8h1uhxyJxMur3UvX8MXwGi9JvR",
  "key25": "3DxugGpesFr1BENVNfwN6Zer3YzSnrctopZiXXUsPFKDuTwKVJ2JQce9MEkBVTsmVLsH6MXtwAZSnZY3F6DeEiFB",
  "key26": "5WPPycmFEFEVA5s1qt9RRctwwY44KmUdwefSLia6SUZ5R7gJYxLGreRJpvws4H4BnS5MbnDfPdqCinsK3eUYfNH5",
  "key27": "ux5mEg3B669XVsbw3vubQkkTS9x5B9NzwFt6u8FbFnQAfDj5Jf5SxYRBVh6KBDMF7bv8sSre5Y6UdoFUSLinmEZ",
  "key28": "4yUtMe49jrTugHeZbkxhhKfm9uG35ytgPr2kcxrEQqPP6fb2e95PcCExb54CVpUd1ksz5uG5WySaKFZMLSissv4c"
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
