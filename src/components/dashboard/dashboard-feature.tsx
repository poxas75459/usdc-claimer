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
    "4hDwRX4zLe58Pi7pPiXUt3ZXwHCYXU2v9JV2NCFKgnFLTNrqL1YheFqEhWApKMZW8SgvdXpZM4msBfa9JoaHqnhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uYHygaf5BqR24L3gS4s3xDFjBqYRuTYrDBFKs44mgG5nWdkEudCPkcx6UmGAxKNUJmbfvXijFbCeNJ4Zpx4hGsJ",
  "key1": "3UUwBTU1Xkbp1PzHqLH7fhUiR2tEEpmwT7i9fLLCVwSwG3GLjh9qETMrdYfPH7Fxf8cqrNAKLRKsrbyhhXUHoTGA",
  "key2": "bMkRKzujZE9QmxU2fp85berxpBKueqqGBtXzCEe4MP7Wwe98rYkKbn47caMGEFa1Rw7h5SkJF1mmsCdsE4Yk8qH",
  "key3": "STTeBdzKANJemt2QN1PaeJFFJPpRCJ8WCt1GqBAj8uFAhUhvFAespAV4L3QYFGuzUTPxWxMS2ipyx8urJLvApG3",
  "key4": "2hLxPAvMkTGLBiAjKubasjiwQLTpQp6iSKh7soGboc3BChjJfHLffcWpNtkBvqCoF3NHNXNQYG3k72PG32cLb69n",
  "key5": "56YXc7cQGyMi2wQaJJGWKixAZjsbJfjJALXu7GLFj9bCygarFj1Eh5R9SzU88QBGDwYhhTkKC23pjqKsMNhcvvFZ",
  "key6": "5eB1auf6E6oJhny6yLPGjwe2YUMRjddDxQVoypcdJAKmjjzrJ2Hk9EDwCoRSmkRwVTUW6efPLF4WdJ9rMKR2PCiC",
  "key7": "4TH3oEU2W6gZiCEpjyKCyhW3SmSmsk7XZJ7uk5bfzesFAjRcwiasgzd4cXntwKdRhx2cATcxfXBjqdkF48y9BcKZ",
  "key8": "4QaDHMhMcVs2NkmM8F1sWvpfxEApG5nPCPp4uwWoWD44LwVzJ7q2hUF2gJZM3ddGtQoYV2LqRCzg7XwJi5n7vZvg",
  "key9": "qGWMyEa1v2CKCbpzJH87DVEJKc1toMHkatKfLw9DXKAyVJ4QGRkDcY8NaRonJQHwvtg9oz7st66Pit4sUfkAuBZ",
  "key10": "36ekcbPqw38wZSZv1UTyo4An7uSJrQo7fdbsBsNT1qZH3Bz3fNSVZXVpKwfSrxt7tKTX71nsyuA8QjhcPDaEdaAq",
  "key11": "2vVuPeyoyFMcy8VmYHsXdZoH2XNPcNpXhnmPaxNEL3x5YVa7h3p4goDwJXbmz3g4Tbik4E9fqyNpdHN2Y4dQxBrs",
  "key12": "26H1zJ5Xf9VQjLieJeLZX7iQVZh62gD1kT6Di5QMpJ2AsiYv1p4hJJZvxR85dn6oxX6D97hqxaA2YuMbTWFgpjEv",
  "key13": "638u8MZQJdqabT5n4eJqCMDnCWRzGF83wYosgqCRoE8M6Ndq3fav3sLSoGEPxAVovwL3XBtk1bfFNchgRL4GSoNj",
  "key14": "3TNY6zUck6vNPxNc5iwmfL18RtuSVJ9SWQ15o4iYAEH9KE5Zcqua9HfwXgex1u4aaXhQcdMcfXkF4w6n78iv7jBm",
  "key15": "4gHdxsSeDoRxrnQryJdiFEv9nBMND1cxL8Byhe6Ym33rk9EwATYznL6dFKi9hz44nJ9K5hyeEjUo6ZWZAqLz6nxx",
  "key16": "2KHzwXURSWizJ4LZPaqbjceoHot2TGbRAnUKvEUZ6cKdhZ7ZEyzkkbWo57zuYAY7DCGY7GAg1bTsHGLL5UTxNqsX",
  "key17": "5ZjhnHRmckJt1MBRumxNWteNZjgdSoCk4prMShgYZSLTZXMiqJ93tFu9iGSY7p29gEf5kqect9TWHVBvEMgqEpeG",
  "key18": "2fXXodff9JXwH9gUGz1TQSA1BuoTd5VtzFZAMZzp6S4BRQ3wMbKKpgbATgU1F3hKdusUHF6ZjMFgV87pdR3oy4Z5",
  "key19": "384Mv7hRVNV8fDufoNEqzEkY1dvm4T38T7rtrg7MsQkDHXoF9TNgCzEGWWYLpcKtgM1CWj9ySmmzy4xkQeX2afEz",
  "key20": "27pjH8yNkRP8NLrviGQpo9va98zptSpuNLQKKNjy4GFGKfgVFRppCV68JuUZrvEVkrC8L8vfCBuyP18MJPwEBAc4",
  "key21": "44xaZcgtu5bTpjCJq5XBo7SVGZ6XjjkRUA9XDx6Z8unfhUTqUwTPuYP2Y3DGib1rtzgHQJvr8gfWJUTQ7zzYHfTT",
  "key22": "21pAGs5b8dDzdqSjxCxzYSRp8s5wBsB9Whewha9EAVgwj52nrHXo7t63tBHD7jvF4sq8K1dpAZNUgtGh9xTwET45",
  "key23": "NQBpe5npgE4VNkZSiFEruab9hxcYcXD8ktcnjWxxBAGd9haqCGUia8hj51vg2KqJBNQ5yYdFwnLAPLMN8Ff7s2G",
  "key24": "5mJJhEvm2fEK79qxKAMofRBPWNAqhBwHhEFnKP6khZ3UzvkGsP5wd7tSFVFcSVfeQdRxTApG57cNkDBe7H7p6rfe",
  "key25": "Bb5wfBpqD3SdzrsKjegJS6YzTRYFR9rR94xbrQ5DuzkKZQ7a8jrdKpdkpeFqMPykNq6Y2xGeZHR6wivGD3nBpsb",
  "key26": "5wQGR7yKHHRSMZzy8Ph3gea2bvSRRUGm4eqQzHzE9B9CV4cq8U1zpUnEet15qCs8nRQ1UnG8KGzCy9HENcVtFLWz",
  "key27": "2emG8Tvjeejv89cXJ7CNy5zf8NxD6HFLhy58y5T1KixjHawbFBgTZqd4udd7MB6udmHqP4TRXHzeYxbazVR2vC5t",
  "key28": "5njUGbx8VBzuZ72TgBf4fgbUu9yfc1zFzBLjtbjZ7PAuA8VMcwiEzDpPipK1NBDmwkTzw892X1X6a9rKduSWBcu3",
  "key29": "pBDVSsqiZoCMUUUF47BuNA8kZ4AYgXL1EAU4rqk6WHfneBmwrgWbMe5EHZ6YUtjGuSXmemFXJA3iz4B8aEFRkRc"
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
