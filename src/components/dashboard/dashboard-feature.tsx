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
    "3oPLzkiQ4wv1h4aC8bZ5MkiGTFqgiCEJ9uRKV8gtZVhjC4pEmiQb279NgLJT3vzbSrscu1VEHME2beSfE5DQ7AHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EnirEKEqWomuNHUPZXhXRUcPkWLdq92jdYmgYQeFAsVvJR295mGuzF9LvYcpmTzUEhsfxjd2Ypb28WfuutZ2dPz",
  "key1": "5FgLrunZ3tSfEWir5Y2R5UXjcnXkjnpzHo2qbeXtJRHnAyPL8hV2Rfy6hWznQnRFQoCjKpr4WuqB5kF9K5fQB3Wq",
  "key2": "2RKThN2ycegWrWMikRwrwNbDcAjs4asvZdppdKDsQiFor86TDoeUhM55ocYfSBP8HQtSFsA7LHZcSWoRkSLMpxuL",
  "key3": "3GDWs1vuXRDDSjWUUFf2G3Cnsh7ULHdWbyMgH8vEWYEm6GJ1N7unFmC2BUhoZ5LhBX1e6n3YnyE3TsuTDZToqyqM",
  "key4": "JafmyUBTb2q2yQkAGuRkecZHYto5sgwTPQAq88SzRX4BASdMV2PWqF9wnZKd5uhviEJwbxUV546QUPkBosA8vjQ",
  "key5": "G9NtGFimS4ns187LYCVQ8qLckkDuWfvZbSKqSBE9VHV9CYgkDBXtUYBCjTdqSBi4pSTxRLhjzrDRBFSrbeQ7hJK",
  "key6": "3PQiXyxXjAEe2uHaFHhA95H4PH1v5Wrz8omcYZzPjru1xGccYSsTb9Bi4b89qJUGu8suqbRTa1peszfH1fFQuzsA",
  "key7": "ysiAkGPuZgCLa3s2DVDqqJdV8Un7GnfitBLKyxRLMqX1UAzKKN9ozQNLM64WbsF47oMX7DZ4bjVLeZNS1JDGSRu",
  "key8": "4iNdTW2pjU3rrWsPFYposfUaeYnUXgSXKjHw7YGgpmL2WM3PuBgQMta1jiPvTxDpvt1s1CDxoxzrikXg6NvtJkSg",
  "key9": "pdHE2HUxkPtsfYUqS45i6nW1AhWeMw2y1cRkxP8vWy1348fRb7MZKiS4YvFDKhKgL7i9iot7p3gZPYzMHBjzKoi",
  "key10": "667wpzbxc5JzY8hYdYVCjBbHEWaDEugF5X5TLkcR4WmCDmz8m2X1mnyJog7YxawyypSwkDav8YoT4wjw3gd4eECR",
  "key11": "5VCfheVNC6VkXD23CsGyANCCRyNsziRi7T7vobLGifmQAS1k9q7ob3MYQHNLh3WWvdnX5BozYUdbNc3M2UrENvvd",
  "key12": "3MCPVAh2oyDLGSNZW6rxaXmXxy7t6CEbwdWXiHjybBPoHwahbSAiL2FCdrhTRPp5vp7f4721oxG9iUVvFP25buVA",
  "key13": "5j2Xme57NhB7p2Zn21TJDoEKrvTBSY48EZStpyiT55c97c9cJmGRkNQzVv7QF12qZ7KdP4KqF1hpBpKefxndbPNB",
  "key14": "3JX8ymcmq8ZJS5MKTMXMXCbcDcTmUDgsZtA2rLWhiHFGpoBWpgKvseqaXViHgHJ9c5XdFgCyzYuwVXShLEa19uV9",
  "key15": "5KomwAynNsbravf1h3ZVmfZjw7RebSgqs15r7y3EN6tkma46t8H5xpMijsYJfvjUzCBD2izDqdJ44z565GyxKpgu",
  "key16": "4NLd6QfnmNQGupgvkY1ngjgyobG9RqLkjyWFPMfv61c3vuTrzbwrFodciu64uaTB4Dno7Cu3nm6WBUy3tBpGS8jA",
  "key17": "51Kegh5F3sZDzDnZdrgfbfL2PuiYSZEAPBF7RuWckQZWDVchCLpaFwCiCB3LKiLSPJYYurtCCB1ivXipMHrmRfEk",
  "key18": "4iEikYibaa6mknNgrvqPYokk7WB1oDRtUbFua6GP74S9XAdsBfLHYgK236A2Cn7or561aKVPGE9pbCbVPuoUfgM3",
  "key19": "4ZwpTq9Sq7mP2wKhJGNDm4zmxZD8F2f8w3P8Ei7beCh6TX3thvP9WjUrJPXsXCizVHZrqwfexxDR7WiRrSQuSjiS",
  "key20": "5NimFLkNa9LsJeGKEVrZeNZ2iJ8ExHngMmpkvMaNtYc88ZVaatVZrhN7CzCv1A7ukMJFuLE9P4CuMrky8kupqFdq",
  "key21": "3RGgUot5cY7krdNCbr6Pye3SfNiwUtnfUNsFteMm57376mtJxNtSgcZztS8N2YzDpL4ohE1B9gmNnTMi1wXZXPV4",
  "key22": "34v5jz9cMXZQbe67HRLeeov8ACzDpDsiYj3bpaex6yvo935mGfAasaEBERUnyb3jnrNnFwWoWFkDr8e9eu9ESG9P",
  "key23": "5oHk7SLYWuyGhMvnExFwvDXUb7a75dAeE1daF1Y7AvTnZQExeDoBXypiDvpQUEuGpWt9x34a3UiGkDQQuZNp35Se",
  "key24": "57JHw7pSr4aTd2d6dkUZBEjjtZf6XQwJUbqX97gDTmsoQj9ymtWPiiFfVWjksB1dkZkJNmD5bkSf5ctDwGrpDeJG",
  "key25": "3Hz31GM3eYbbCBa7jFo7iEG3HLpn1JXJzmh1jS4wZSdVmvdFp9pYvsx2wCsX29tSXbcbTZpaNoqDhJWdPZb9SsRm",
  "key26": "2uPop84ycYDpD3gnXUM1XBuDftCsJ7XMLj8u6beqM9MBEMrszfKBYUtuCE78saoJ5NCaNYWEsjtZk3jpQoSoQqUA",
  "key27": "5QC8tX5t46ZABEAPtqpNPYit6X1GN1jL6WfHhVm1CEE6SmXy2bEauJdiU21BUFLQdFko4cvc4G2LZAyv9KutXVT6",
  "key28": "4NXev6NS1Yne4tTZ1ujqizZ4zBZHxAAhXBh1H3LSrdVY73idaC4C9yAkYP8VYtZhRLavvRQcaA5oB3ifouU1yWMF",
  "key29": "2JQdVPDUgZ5DZfqHFDDCiXFGfCM5whtZvk4i9qyth7BhNohnGN9zvmFbK81bkBBMwVaH6ZuWx4NvjS8vyG7S2LLn",
  "key30": "33Aue7pc5TtzXnpjwd5pWMyuvSiodSQQAkg5BGnfkQDNfooR8HpABE4xotio6Xp9zkaJuZuqrXFg6DGNjDXp6wEY",
  "key31": "2bc7dHZmkDpvLs1PnJdW4Saz8u1r21mcQQjErE4QegMztH7abwWj3BBsgE9L1gufjp2pwu3peKT4qGjz6hzGtYAX",
  "key32": "41uhgESYLE7ywex5MbBmdQqrMZxAzvb2uG9FNEPi8r2qbFzzKMiNKf41CEVhaiRnzZhSnbVmWaB3irF2dWzagM9g",
  "key33": "2Zf3BQPBpa3GZTytFmx5dFMrqw3dv1wADnQg8JGa3HBALgqB6bPaATpLzgZKYhs8M5oNeardAFs9BvgCmKdirw48",
  "key34": "5Sfw93Ky62kCcGgKGYGRo2mMPS4UVfbbk7MmnAg7jqyjDaLrngkP5PUuJrCjv52chw9cyCNL4ST4YHkinqzMy1sx",
  "key35": "2ioYHqiNxvhAuHNjW27WjK26QXZ8DVQo2u8tihtZNvuUdLHiU9Y2UWBpeZjKiszqjBRv1iE1VRHcaCCT3ZigkiBY",
  "key36": "5ck5BBKX3ScMYajJit5jDyeUN8WfgbqssRCzhT8AzTsaKUEkjcBArsgNynGyz8RodAZRqJA6qigT7psUMm724xEr",
  "key37": "2kgyQaMePboLoCR4VjY2Yh1pStgUyinsQc5cugj3uzbg5Pvf8Eos8TRExjapeYxZH5gXdFksfAUXMWdtFf5wiD2v"
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
