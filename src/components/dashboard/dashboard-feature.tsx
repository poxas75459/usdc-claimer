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
    "2uWBz5mSLvrMqgLXoM7ABog8r7R6bVS2gzUtyDVStWFa4egWdQadBtxG9wQaCKMQsYeQuvVsVeEcF5MbNunsZqw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VweLP9LFkKrGrSp2MrmL4jMToC4C8sgHBVULHFdsGkvSrkzA8xLGwCuzQohDy8PGXWNb3phhEBWX4Z4AAFcQVu9",
  "key1": "PHg7F5tvRHGC6Wd86r4yrmSvqNWUQcPsy5cW6D7BW4eDa5AeFsFWCPxiMjsVatCdMZckKNXWPLkhJdC1DWQbAgj",
  "key2": "2kSNHsqT89ELvDhchUinRBUMMx3ugRS8crXELzGwd2aGg1WWLzeSA8dMPfSVn98MxSLKZS1qwMaZPB1mFDrFgg5X",
  "key3": "3DxicjNWBDxSzRuwXnRFsAoCFrd4iDF1wvZjPdZL3KBHGrsjeaufRFzFSAzs1LtsktBrZ9bC1TZcmqHxLvnFNEJP",
  "key4": "2pFQ9Mmef8xoCWpZUw5pF4x1scKfMqqrGc7TVCx3btWieTUMUVRPPCygJz2hMBVAgV8nKJM6rZuEp5YbmLpX7Y84",
  "key5": "s8qFkULutWfgmEXctQfSAj2rh2DD6LH6Rw3GXe1s2yCBYLVtAG53Wg6tur114dSjYSxc8zDzHL8FJXFWxJ3MAzv",
  "key6": "2djzfyzXr4wpFp8DvEnEfY93ctHo7AVX7hf65VjMbey1tF8iLYwPsNP9aXbDjqu2v5oN3vgkawS4Zas87y9mXv3f",
  "key7": "41KGtxsZCbMbXPhpcHbKJH8dg18DnKteC6eSpbK749qcUMwUV8AGxpfn2vpmzoQL6Nwkr63EtSocmXRAHzyrhBHe",
  "key8": "4XKAzmX144wZwC2iZs1hB6CiyrRnqCjLK1WB4jAcNhHqoDLy99azgFwmmWZYKkd4ChS4k9JZrJ6kK9JiDZizLmnQ",
  "key9": "3ZGkEXyK8qLiEqgJJK333kCJCB3X59tqAWKy4cNRPS6EvgxnrUhakFjw9EHQaGTbJBx4BVF4XYx3icwoc5GQQo1N",
  "key10": "2W1Pgdi1KD7CNnxKRzKjHGFaziiSjPQmTv8eETDYcqAYwb9eout73qq4i8XBhgqZwSt2LGZfMrbj3kEyFMCt6CP1",
  "key11": "4t1QHC7dEQXJ9itrwmg6UXBpUkkrBTtEX9b5QsQrqddxnyqyC4mT5YMCHLWJ7v8NdW4XkkHPNbPXfSdr7uVPEpqm",
  "key12": "5ReDGdyjiY13Y3xdXZ8b9ENPxSMAKc7quoPaVvGW3KXba6bo1kLS8YdTawbgcFZB6GrNtUk1o4PB4ZxuXmfCJVBn",
  "key13": "5KuF4k1dEcRBNyD5uXbKoYjyz2cv5fDVHryq2sJxBq5NTDyeHCEh8D68qpGCWeMrwh5s52xhE6gZkjaDNeumsegw",
  "key14": "66To17YkjfEMwETh81MmTx3FQTVX4A795gFSHEmUB9tUNVXmPQsYoY95PgT6qwTN32Lbu69NM4AsNohCN2oDUJLu",
  "key15": "2z8pF8A8i4BpNEFC2vi2ZkMwrrXhkSLm1Lz78A63E5dgpYCQDkMvMB1Sn1ZxQjQYXcSBUGSTswkEEgDjpime65j5",
  "key16": "22V8nmMTyCqDYuLsCNhtLYC6YjacJmjz3BXimBZoc9nKJD8PLr5nqNopRz3dRquXboEoHFofDnNDb5xmP5yeYcSi",
  "key17": "XZQVdCcWS3K1BRvcocbrkmGabV5UiKWDn6pYyktXcdbmHgaQY4EhyUJkP7rrXbcF7DHHpm6FWyhjDabrGg5B4X8",
  "key18": "5csAqNTg8oHMwCJBCJ2ngrQNMeRPv2h4VzR3PE4LGESi5FYyhwCvC6rhMBWV7Ga4gziCw3qHie3ACEvqvtzQ7meG",
  "key19": "59v6nCz2T1MoaJxtw6SxAxPcYEdcDxoZn7aWGNqi2jD7LESPo38e4gPG9nUpMBRPKjXpJEWnTvn8tBvsU5C1GiP7",
  "key20": "4DnoMvjjTNoTTMkqt38zxDtf8PhopSnuAHKGs8qAVRm7JWXGDnmwhbLNDnhusM1ZJ6X6e2M5vFRA54YQFPjR8ceS",
  "key21": "5WSQAKCDvL6maHrGH54dTb4VcTs1SRzB9AAUoNmbJEmW2z9ZRSc3iDDh3bzhg7iEpF81XxifhoFkj3ZQze3dygqL",
  "key22": "61fymoLdwzqSeNnL2tgZxfUcdacNUT5Z7vixoypUQjtXnq1op7a31tq7VY2tBNAnb9K3nNBWuoSiddVYX2cjZJFX",
  "key23": "VfhqxdFx7brG8bZNChjbYNWkiFqHdnEdASYQL66VkNbv2pnJxQAtfk9BaA8HYJbBdfAt63isMvAu85EfYjbftQE",
  "key24": "2KaPMfc9vfdL83X5RzYkb9SCiVT5Udp2HrKbq18TEKHbGHNCiA7BS6hiYsSSbTGLi7PTEB4GC8LriQeK4gRQHhyk",
  "key25": "4C989qpoUVz2hthtDT95LRcBfhmjuMQ98k2dZh6pGRoyYgX1SesLX5LYV1euAVV4wfdbcbSgyoi8Q6BKm7AEXpWQ",
  "key26": "2f78y1BCS3ecrUHgqzpk8CTRv7UWVPFSrzZSKZkTLyzcynNdjW57vdNSgNBf8X3AwwXJwKy9ZuLeSPYEpoUp1fnm",
  "key27": "8YSyMHrTprB8Lg5PDhSt8nGMD7PkPBruXsY9VsFdFnArwph1vQGcH8P9yzLodv8bN29vDxqRNdgALXr8VF2tcK6",
  "key28": "4tmCzmZ5BrBN9fPY6pvrn7eMKHLVnHHWUJxvnLKM2dctgyZs5LkY4SVwUycjGQvXbx5iVZ3tgZ23E3fxCeWmBPcz",
  "key29": "3qSkuL9ocBXK6H5JKQ4pcKZ6X2HzD5kR562ZWLAPefzoRFTuNvDqupV1nbT8ojZsNinj5oTz6jB2K1sKtS41CxmY",
  "key30": "4QJKb8HQ5mQQgWzvcuLroMXeN8dPUMLpgJiv5k4fDirtvpDuLQSrJMRzk3mVoPHD9eUdAPfrp2qE8cUBspoSu8Tb",
  "key31": "Zjg9K6K2rX6rckRCZUZKirJXXo77JtejU4p2BUfgWsMPzTmJXndTBxDwNmwiipzruouYRwNU7KveRja6NXQRMNg",
  "key32": "2uqtQxJL7RzYKMUoLFgUwwuVtG3SXYhGoDm1UpMovhFYCnru6Sa7KXUs5NjhDujyV7H7kjiVUM8XPCwjRgfMT8sQ"
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
