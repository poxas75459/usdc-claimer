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
    "GYpK4aYA3aWhdkhSuv7qDZLpP7TePpmsN1sjzM72aXCEGy2kWMV6HtFdCHCtvVd5xunSnU7fe34SmEcz3bZs6qB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n4ugtxhUHHqv9k8WoV4uCz3CnQAFgEkUcXt82aZ8B6FEG7SWPs6KMDWayGn7erRYqzqbrHc5CpJwT5HAzTVQ837",
  "key1": "4BtW2MJXvcMemLGCgot47noABJ9icYX8upngAmMreEJ8zLB2tK9ivehytkdsXpzNteY4tGj3xGyiRLDiXTGFuvor",
  "key2": "4iE5TiNhdaG6pZAPz2pg5YPnjedJA8bpYs9tBLUh4NqQFfSY3RQ1mST1mmpVzq2trTdDFmVkuuoARsuxShC1xDP5",
  "key3": "2DRggTNTpewFzN9ZPnxhSeVVYLwF7dpMWhabHF5ZzWTe8rcCKw8VdfdnhR6YKycm6NC2iaLsWRvKGiptoMyWF4bG",
  "key4": "5mSJqeH3DubErRkzW8qT6tRP9sQ4n2BMVaUCBNdyhGdsHM6eoD2P5oStym5vYNozmVseJZcqrqLPQaesxvHzjiYE",
  "key5": "654e27RU6n9xEc17Cf63CmBfT25aBhABTH2zycgD6oJ4LDFWczE2YWUrqRAHqaf9roRyMXnvGXE84JJLXHjo68oM",
  "key6": "4aooBTuj2aMH5881Cq8Bse489MBsTmWhorvSHqCWT1T6zboLcZB9PfPksajfkyKiUccLJg51sja3oAyLukMn97S1",
  "key7": "391g3k7bmBr6gejWgiU4BjyEb135qpRxtnuMcua7nqCg52CKEDk6jjxH7kELbxJrTp7FDwociFHXuK91ooka9dXr",
  "key8": "4ff1Em6ksYzwC9K6CjoXyEmq95TNjKU8F19FWX2vNN3fmBogqDGfNrxJ2nv3Rpwx9sMZVVvNbdmeMF3wnrLE3d5H",
  "key9": "KVKfbYCqeAmDiZBFVSVZeUzbPyGi7HdQWK5C9DonCc1Aso6WQoAzYmwsNEipSrHCf4XDKXb1mBCrb6mXAMPv9Qe",
  "key10": "2MmRjjHC2TbWSdvV5UERh4Hr91p9eZnXudWaTzhMVtbcDfgsuaZq8wWwp7aBCDFnmKjjZW56GjxDh4ZWK7pF8mfS",
  "key11": "24kBb4xWMWAFdeJAbfjhg5D4yV45JeHbTxrcuTwwBfF5FLS4CF2uZAqhCyJu49kFeqKa6zwLQ626hQLBNyBLc6gT",
  "key12": "4TmpHb6Fja7m5kwCFSJTvhGSXwt46zgPermStYZBRB1c1D5kHxRtSda5ahGUvczsvKXgLeNR4JoXk3bWuvGtBTMN",
  "key13": "mwFz1YBrXgC5GWCLbjPEHKryVTPR4NhtTvSAS3XUj75cLJQ2K7Ka1vrF53zQV729QbkooNo4vGYexNm1m3GFm5p",
  "key14": "gz84two23DXGwAZQ8N3JqRUaUfkmDebn9WS8dn45cRcNJyhkqCskCdF24PRMyYgDgdtb8o57DCRR6TNa4zbhjJ1",
  "key15": "2qVQExyimQDkV3mBoJ5rrSKTqumMd1SKTvwUqtJitiuinGYT2YbfJr64jSdtuik3Xcf75QU9vmnVedWMzTrVbqe1",
  "key16": "JXrLCdxVbFtePRrjdQnhepyR4VAZVAtyKFYWxYerGXXfjJCY5bdrXgwVxBSJM96xM41HpgmCbcZzEtbHrMibgbs",
  "key17": "45fxnz1WYVuYseW2oD4vpxzotGosPDWYrLrkGu4KD676CqgAGCjHD94BwZfCtGQdG3BPgYLw21oxRxFGBZ8JXgZP",
  "key18": "LWjqAUnvznSZGbt5aUjuNGbViDtPfBCT2yuD5RRBvtBaEKBEYoRbM4CtDwwPdCAKYGTEjoenS7GAd23ZxBbfk5e",
  "key19": "K4dKdcifLAZAPq6n1QdrTfRFcPVRsst6XguKJL3N3tL9FQQwZug7H5HPMo9DeyLhMJ3BDRUrCEB6zxArjXU47as",
  "key20": "vdmXLmdfm1EL4sRCbr5fEUwLAVqFsMhLMXgXs2N1CrPrdJ5cBkVFhTYdW5yNfSQvfoH3RLamxApZzrtrQqx5Ptn",
  "key21": "427QKhRFzqqxZxu7ha5VfW5HGat1JjRHbEriwUn5UzdTPtohWBiJjTvU3iP3J215Cxd5przwUwP6vuQGreyvnvMG",
  "key22": "3wkFh4khdCe9LkH7k79Vn5pLHtr9XBcfSqBDqmkgzjzy2A5tgWw3fCP1zF3AiPB3krPS4ThHAaR6BLWhJHimztyT",
  "key23": "5afsNzRHduMirsswopAmE7f4Um47WmvqYHqxgBeHQfmZs9mQuBgETAWUR9PvmikrBxR86iTSivY8zwdjnFBpworU",
  "key24": "5tCeCuv8AGgmthF1kZpbH3pU5ZSKuBjTvVCgvqKn2kQXYi8Q96Q3mjrnYmrqB2nJEXeg8ZjSW1rX6vCENUTuyc8t",
  "key25": "28hVM3cV2EZUy8kAbZo4GHRNgHfTju3YoEY49X72AWq2SzfshiPnexXK3bH9gxASuzDXXamQtH4LJmkmsvhw7R3u",
  "key26": "2NB4G9GJwM1MnintKoEPQVjTJy7EbyfQgeeZwWTzrmTrHfw8VMEW8L2jXDW3NYomy6picYEAGx4QMsvdufJHfgYU",
  "key27": "8kk7Hi78MTeS1nMtkfAnduuo79wyFCEFfHNcyuXRoc76udNh8b5Z5pminp6CdTKs78eGGyben6t9K1Yz675UPiz",
  "key28": "3na8vHLgxXCGFWthGbsfjWTtvzDkDLJEyUphT5qRZE7cGppkW93Hk3v7zM7hBv8oKH76KAiNuswNZr5Yx5DzNaaC",
  "key29": "4VQ9GjpDGSD8QBPYj5CUkAJ3DeehNLELDQwggLmZ5k2cibf57e6NZ3vmHZDfPtqnmkphYcGsdT21pY7qx7WWQKwV",
  "key30": "4hfzVCbBxLmL2eRVQUoPNBjCbXz4fsysiEt6rKVYDzit1KGfchZz4x5MQzmQX46E4eRUdrpmFsNt5Tp7C2DcmrUL",
  "key31": "3rnrjj7Rb7gMuD4JvA4iZg4A78cjW51meVSv4qUYrsf8HQrTpuAwuVBBk1tBbVYSayGj9ZRBwjdhExDw4z25b3m8",
  "key32": "3dTiKzXjchvb8TsVyNRax9g7ebZNkCWvB3axF98TNWSGkJoehv1GynghgdWuvAMRvmpEg8v37Hd3Mi3Evv8MqGRp",
  "key33": "3xW1Do6XJPjbkrvSTh9v3FwX2ta3m8yYa8CF5aAL5Cgj3bnhUaJVEoYK3VaP5P6voZbAaXhPY1iF2g56xdg3fcHK"
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
