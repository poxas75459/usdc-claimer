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
    "nCxUK3KLSpin9mvJ2fMYW7xk8eeN9o2zarcJ4C2N1LwVETxfWrojaPA7WvYYFc4sdLnCauiFPhPdeiax5M2qc1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fy5gUKBV5RRK5WfpcwQLfwJBsEcsgkkrwZe5r8tQbymHpe6zRNH2eQ3VUu8Yos6FAhsBkMaM5RqZasgSB35ydM1",
  "key1": "3NRdzdEzymCR7kNquBjidLkXs9rj467CUCDymixWm8VKnVyXHzuvM7SU2YhFTK2gtMz71niH5a4vLp3Fr2uju5wH",
  "key2": "56uN9PTyqr3MVxEjAVf4mzwHD56UqsYR2yco8xSMEfeFLb4sNMEpwrV3bJpGZmSVwbBKRYqsnAo5FYSBdQUhr23H",
  "key3": "3ZjFc8wxg89sYNHAqRRhTS8SzSE4NtWewBPjmjY8JfqZ2iwt5HBKLhj2XoNvkMcnFLeUN5o8MTETCfRFdN45FUFa",
  "key4": "2hjscPH4HLTwAt6msbAFSQF4RD4wgxd7mTAtEPVFmnqLZM22xAxKaAKZyr2CpkjE1FY8agRFqsDusj86SzYZZ8u1",
  "key5": "2MeAJskdPFE9mvH5bSq79BFab1DmhAGYKbVCXkkqqxhAoJgA7U7juvN6w4XW3HAYfUGTBSi9ZXdnDKeJcb8urGTU",
  "key6": "27QrZfaPWZHDDrg7nrUHPLVYTh2a8ztsVg7gU4YwL8XPRZRY7Q1red3wuqNJZM2hYkDD44soZ35NFhPtGJ3Uv3QL",
  "key7": "k5uy84565EfmfVNnNUCvEtxnqMXi42bb8CNTnnXtJmj6UHtfypwuGgRF3UY2vNKUtvmZY4M2gL6ZuGk72rhyqoZ",
  "key8": "3uuPtmMLaUgLqqiPdYjt6eTJg5Dabzoq12EKiKxavoEj1iTMUNyzRR7XwpWFRGVg2NteGE34jUsxKfD6JhyXf8ov",
  "key9": "2KWqCiagqPLKpwBEqJVxQzR7TxgK5GtqgkTzki3wrfPkBeb9ZfoAp8bKEAyYrYQ1wiUtptVCQr1Ta3r2Dk3fnhkG",
  "key10": "5XVrpZdPFtJwtUha56Z49YbbciFsNgiJ6ocJtoZRKC5At15keXERR2i4Aie6XAHKm3meiY5VE41SBxawUnhAeAwK",
  "key11": "4dZqKnh9ptysnQD2DcKFg52dcK9XGwCf79QFZRjnm2wsDqkyD6TkjnozDiYoVm6vfkJGwYmPSw4cWsiyrVGknBkJ",
  "key12": "5sf7TTZ3sBWBK7NjLX6Q6dGNGz7vLSkog4UkQaM9nRqh4vdYs75bi1LqPKgyJ5WjfKbArWDxc3wJ4GnddbKKntY4",
  "key13": "3J12c1HrzZxkLubsANM7qds6fnJmP334V4oq4G7chyzXstC3gqzNQd126Jav6RhE46J525LSYGZkM43KbZBmoo6H",
  "key14": "4uHb7MupjtRDBywuh52QNQAJcRioXZXgJjiVnkTGPK55ZpWjBqvWUNAZJYxotB3UYJjsBHq8Yq3x1EpktuTv8GxT",
  "key15": "5SqsSYu67QyzJHVej2RqfzVCcq4DbrppjbKcSYTtuY749B5LRLX65TVkNVeP6gNzwktcahq1xwQz2kgaFYT5SAsC",
  "key16": "23HbYyF2dxBWhcPKMfnyGBuB8pXGk2tR4jrAoQbhX2rtihZAgzgJs4Yjjho2HfjGNv5ayiDzC2jXkVeWKGZXrMMp",
  "key17": "2ZepEMnBhh9dX4E4MVhFYx2T2erTttQVQNkZjgkA4Xvr22KzKxG45jCZW4n4Y1ZsQ3giWX3xcyC4HE7LTVpjQwc8",
  "key18": "Zu4Nms4ksaJZ7yv9HvWVdHSC8x5tCRvmpP2Q9DZbLaPzXKrSrTdaDZYzjWEh5T53Q7dL2aYpt24xRDv4vkfAgC8",
  "key19": "mxXARTYr3R7Wxg9ua9azjQTgzhp6ixRhRutJgxobxqvMhRzaBHixCZLx7SqEzSQ2q1Dn7j8vdW1NnG5znL3UzFi",
  "key20": "4YxLgbDzHmTaB1NA99iDgkCymoYn1bQemS7uNeAUmj6Sdezy74CnEsykAT77t9Q7kkweantU18UMRsVvPXG7oBB5",
  "key21": "4BFujYAYpNvf5GsgzxKvEpqRHrYUYwFHvmZr5ntyWGm67wUG4n3SMwNVBoa14KFXPc995HCyCPTKizVZYxHHpnWa",
  "key22": "4EYpNCcPwXBeaSt3RLC5d5pFk9Kf6vZaFZzEh6D6twkGwF3mmeEwKR8acCqhgw6hzekFN5DTvNjeAQ3mKwfiRmkX",
  "key23": "31dW3LzQFUQJqeqhWXnWoBurN2vHBVhzbHWyP7aksgFB45pV33oqPFPpVKXhBX74o9hKVhznXHAKv1nLxRpNN3tb",
  "key24": "4KMQG678ZfZZNTi9PAMR6QB2wofNqPNPJWQZe8isFzxS2LVwbKor97Ap352yy8SdoAMNVTg84WPBYP7hY4ZQcXRn",
  "key25": "3SnT1J1jxFQAg86VaHCUAaVdZJf5pYQmjDkcafYKFRHzjywAXbFsEJHejEoajoKyguEmMdccRzAzzPDqdoHBDUVj",
  "key26": "3nwLFTahxU1HG4Usevh1kUr2cbKs82zmFLpo2KEQ88uSNZ2gQhqg6irviof5PYm5dUPB3SPJR5A37brRNQcSFD1b",
  "key27": "2QP7LbLV8mPEiaxmAbJneEKMPKjXDg1xXwKSYS7evLiaYvsxHcTQesBYkrymY9iNHSmczZXn5xjgYXb88ckTWFFx",
  "key28": "fUFuSBYuZHyeTvLqXy2AJ2B4XHcMpiXvACWocrsEhygQhoCEse21zJZV6DXzcGAMteZ9iNKpLRHHhxxnirVhLnw",
  "key29": "2Ep1azHiM3Niyovfpz8qoXVwEeQh3ivfmCEKJh3etHBmECzgzJ3QZaCv7tR35UU1RVWjqwqepRhzZ6fiukF7zVS2",
  "key30": "Jiuxx7L9ux3FoBPAo5TTYMQZT6xvvGkNxNxPLq5GrdrnGqeaGkuj6z3BgTTKY3TwDFL7GXcK6cQumGKFUvK3kYj",
  "key31": "3VsyTt7bxfBKYqttXgGaX5uHWS4WHAUU7NZ9swx9gcCdZkvbjASibRnCuC7MYPPiDs6ruGMsVXgqBjXCPYXuZx1M",
  "key32": "3ALmy39rm3YkPtKD4fC1xH6F7mQh7YLb68gRpH8aieVyB441ojgD2PRSPySW86gENdoX9ZHcJWanhZDQgkuXH15D",
  "key33": "3X1MpbA5oNGR76c22YpCmSH6AfuNG2imDTnmHhoywZBdLVtsfVFDV63wQRbfyHBy4BuyJ3A8YdeacSpXKAjMpvSV",
  "key34": "5LFbxVzNPwaJGrbVbLeNU8hNwJf2xgiX3igjt8A6XKhmGMoiBgyndMNbpeC8PbQjQvS1RJNEtKfVWqk2TWYJ4LPf",
  "key35": "zFWKpBobGHgnydhAMAsjMUSFZgeBNXYZWcKduVP5nC4LNDbyiiWerRE9DhENUyhGgY17MHJFjhL1QThBC1565Mx",
  "key36": "44FwX9vY5aAoA62N87qPjH1aqcyWUja7DmXSPo9Pei6eAVKCgjbBEhExSgt3p5KFmAzMQae5yzyJ9RxR5NRUM3TJ",
  "key37": "2GSzSNsgevDPBA6QQRyqsBxXTuTeUm4t5NKChbb1igYoynyqUcDP6E6aNroHKPg39UdLU9GdtmJb8FjyUVp2THPV",
  "key38": "5r3bMyzZjbsxRA6WWc9sXCBMpNJwBKv6fk9vBSt9y1JUsMgobsb3SM7TmXS8fuDWN875Lp6hP54xxs7kSnah6r7J",
  "key39": "2oYe6kHKfm4PxkFWqm4WLNjXgdnSKRTW9jXPpMCixSo5x4JvRcu1YMCnAhgggPraJAsiGfVdZTh6yPv9dDdMQcrr",
  "key40": "62xdkFeF3BcGQZ9qeBLGksPgmGky4NQfn4kUkqN44fyVSDdkqKDgt42tkZq8SCUMhiaq9bHVsfSVcBHnnYP3jHWi",
  "key41": "4eiuokcNXbYSBXjXEuhxPw1ZzPk2KrMBvXJr9W6jfUwgibYbctzWRT2mXPfdKZ4QpUMuD42xvHxSuy5KdrobWcv6",
  "key42": "3dskXBLefBoKDo22v49UDWqcqASMQjDNV1eBCAwxDH8FRya5XwusinmaPEwkdFBKfz8ZobjR9Y4tkDUwBiSNJe8x",
  "key43": "5UuK9FNpAJdU46Qxhcj3GEfEkrJTHtyZ9Bi7kqEUtqqpWW6roenNWHJf4AQtEnqT5ScanreuMRN635JeHQaxyFNL"
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
