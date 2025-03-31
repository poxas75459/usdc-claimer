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
    "4KQ9aNxiuBu9p1wV278MheC8eyd9BGGfPeii7SUCnRKatoQ666FwkqssBgj1yfY5mRjUaf9BfM5hFXyMgRmHCeTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qQ6V1w1dgQxNr3VkVNJkohcjQnPCExfhgcw9qhPemf2P4hseYVLznDKLvLvy8ZqMBFmZkL9NKnjf2EHG3fYVn46",
  "key1": "5pqMrqvTYfgiB4pzuNw3do2BRK7gSUCT9s4aAgrcwDBRUez9U1mPk3v184muMofwSz7Sti4A1AaxZgzsiHvvto1h",
  "key2": "55NafVM87QDbHd1LRTPRTJTHEHVzTWmBNHMuJL7arzKvgDtQ2HsytWtYWPCyhTPXsdKdw95LKFFssRf2sDy14ZLA",
  "key3": "3t3paJfxVZDKsbgkYjCtfpLKJtJgxi1CyQYe9fJ2NKhtt5CUaoV8BQ1jScgPkDWeWGsZ6gacXYVf1E4ve2A1bKdQ",
  "key4": "2AgWdLQn5cjmopDJYJLxUurGFZjbYuiTS9M79ciM23JZ4WPmLYVGpy9vZqYdtJ66qBhJkEV1NwqJGqjYcXhELQTq",
  "key5": "5c5jgbxFt8wy8s8PH7RRUfKRLrzgCShFjTdwSTemrkruCwSerqhdWA1mdMMhwwBsz8yiPFqn53ieSFZLYGAQufhP",
  "key6": "2p6R4FMFUcxN8NckXGATBhaBXMcyydsrFrLtssn9hCqMp3EGo6yX6yGcEN4CoT75fcd36YrXL8KbkXNNPFSYfxfz",
  "key7": "5tNqrhaUe8JHDmpYYPrb4RWS7j2qJ2joRXZXHfrTZ5XvtYyWH8ozNjyqBzRQUVxKB2pe4Wpw75GsD84LMw1ZqnBT",
  "key8": "5uTdMXSWBLLrMYD6mVBcGFTQKbvWQYWSSqTQFn5wPJ5kvzwE4hyKYUBpFedyQTmZQLKNiiExPbZXXHs8TU2Gh82g",
  "key9": "h1j72Q1VbnH36xVwFeoY2Z3Xf8GXWD7jTsXaDdBmEqGjCdZJeQBFBcdFCkKRmC2s7xRhmpKWUhAHzvUjGV5E3mC",
  "key10": "61QiBD1JQfhwV2qyAVHYrcbDWeuRFYwJ32kcDVQ5hEv4qhmvPpj7AhiNrgUDHgmMvNNdfnyzM6oWsgiHwGsYtkF2",
  "key11": "9dJPeC7Nm8anEfryYm94c5vfs7XFf4HxUYUjitrDRa25i5Get8s7Mjt2jJgPPjfzTf4Yo4Akyz2HV6fNn5stbHk",
  "key12": "354i6nSvV93RVFMV9GFfPZwRauoJsnofG2mF2accDUt7mkD9PamVBiX99A2HFvUw7S5H8EPZEU4qnWmh77LXdcK5",
  "key13": "3bSS3rT28yn7bf6ZH5mwye5Boi5EtVqH1r7aTPz1VfccjVvZVdWBRPHNPdy1SPyk1uVxPbr1LBSAVzuBjZYtaT1m",
  "key14": "3cTopRMERajsE7J76RyryXaQP4pBqrqYfiz8TWQ51Te71jcuGeKDP6XPFJFfCok7Wgs5NaMyx5UWXY5xa63QDsJ6",
  "key15": "4TKD6SuaTfpkVngxeaF5ZSfc6ZMhew5ncp7K4YqxsdBk2tHA21eTkgoD9KFZsDxPJ2wURT4ztD6fxWcHhVW6tN4t",
  "key16": "5oCVCHMKj1yxpQACEKEQF8fbc1XGcucVfi2VAf1XKH7kGjzczMZ9HxTGKu17mUB6jqGZrhT5PQiBBGj6RmNm37es",
  "key17": "54E2CC9UmE7mbJdgdYkx6xfAMXNTZJprinYZbGhWupuNUogW9qgZ73jEH4MhUQc9Gi6QNhQAwGjwMFY1xV2mcS76",
  "key18": "31JRzEtQtWdTL6ACkEzFszsSCGdSmnXoPvuoSvMSe2pBmdo1NjfR7pPDb9cEiLUJmF5SrvnzZ7r6sFcySNvC3UXS",
  "key19": "Shj3mwCHj4Cnw6cutQNiGTVMQHPM9dh88tPdi3B77i5dQByPuurZpi58GY1Yp7fyUYqj8SWwcbUY34Tgp6PBjC2",
  "key20": "3ASSBDYpum9oDUHLrttvzUufMkTDea3Vw9J9SywQiG6L7pr8KVLaoYoSTJKr9ZH2Gp9hoTqLVk6P6uCE6a27n2qi",
  "key21": "47mA2riB3MthhCaHXUytfPxTeBcJHu3jjEH45YqUT89Zp23A7t8qZL3tcj9SNSa2wreE4BDafL5fvFrt41F4ftcG",
  "key22": "3FgkNDUHRGzQ8QxVoseNDoEUFFT3EnmFCu4c244XigrcQe9cCTDVSJzAErPSiV5Vhjt3Bnk3k9JGaAJsTvpzjHZQ",
  "key23": "2haeWwJuio4Dhf63Pn6SSCKfKhqCNCjEq6MrdnYmtiDDjU3nCHX3X3gXFX7CQew8MNBrpoUWbrDwFzrfRt1rKNe6",
  "key24": "2n7dHcbgnNmaLbMnGhQyVFhoV4yt6a61SZQZYLkCV3BBSc6LPzJCyb1VG7v5Jv7vLRyd8SZjHtwKETyMgJZJoE1V",
  "key25": "4LHxWF1dHeZrB42mzW6HNUZs1WZHrYwmdcAz95Rn9abe3R81CwjmiCVGE36QnSQYgwXdsTKgszaTZf7WfoRGcyth",
  "key26": "4wZfox4W6hECJZiccae7iU2kqLdH9pWQSNjEURRwRfRVvMcfq4wh17hLncBH8YhLZZEpsBDajGqJgxe1SSDreU55",
  "key27": "4hxaGa5YuNMZLwPWgM8d7fUExFtgTgaag5C91NTF72Uh17vntCBV7AY1pM9k4FHb6z9nVMsrQS85tLzd6Haxkebm",
  "key28": "5MHsYHjaFnYAoK9uG5b9ZNSp85b8wsJhEyrS2PcXCzb1tsKfrPsKVbHa38jLfgL4WKhqRAzNqwNT2qKbN7cwmqUU",
  "key29": "5GvueuF3Beft4wWprTySshvxCpjaSLfFztBxgdCkyvg1ioEfC2DEw2BLJLjk2ySJPdztiRhytnG2UhreygWefttQ",
  "key30": "FCfFZEEvWg7qCWXcS43d6ZZLDwcC4AHK1dEZ2Tz3QeaTQZtKviBa64ZxaZpoF6HfDLqCLx5cXriAWQbjuLbZ4Dm"
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
