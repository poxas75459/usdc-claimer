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
    "3d6eN4pAiqtj1seC59hXAJEkPhdYFWW9a4cRjAxdbBSGjytDeKL5nNnkytnjVnMf8xn6vSs5QZXGWV7QmxDEFxFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "izYZALVHSZUa9ySmySef2AQPPR7QA5PhNf4fv2uS1YXPjgSx58M4CGVyb4ezshvMVDUJsiRtMHhg8SSQ2RN2Jrf",
  "key1": "3gQ2xiqG9CYbUbfu6VvHNRUsgTuXGoUFPXu5kU1uzazgLCCYbyQkXFmt8SJCj5dtktacLFX8iXH8gabs6W79HX7e",
  "key2": "5K52EADCqLgzUfAqAfXjxDCKQYCwUaurM23vgAmgxjxKxqm7AiEQUmMNC5YX8215buo2HjjDq2dsyycQLjuy4tar",
  "key3": "2nNn5oNTpmFMBZ6NbzGcqBtfVD2q8YXBJQmUuDBNSVQ1AxExEywAEKNqjmPTjhXjN5s2zzTAD3g67ff68kotw1mt",
  "key4": "3yeZri9pVjGWm3uiMYi7QkDsozKybHG3cdPe5cVDdmjCz5XnJS4ce6pbd3izJYCzret5VMvDp4wtsohueDQWbkgq",
  "key5": "5GP52wUe7Bgh1f2FChZ3VjMfkLLrXhk9vyRszdsaKWmnweDpNLAUzPmbAKpirE8QSTa5rpMkhbJGkzZkkS1FkSe2",
  "key6": "hpTMgrPGYr2ycRGq8mzfcadPA6pdZUSo84Gwaet3gFxdZo3UpQyj7yxCLHHv36DMyj855GEqjL5v1okeLUtwk9N",
  "key7": "TfR1TifPgUQykuSYM2xykgLC2cCB9MvTMuQAntprJMVGuha5QnhNsGPJQhYwVSrPgYf7ukfzerhT9witksB6zCR",
  "key8": "5gvipdDoeg2YG9rVwZoyZ6vUULofrTCDVP8MQuB3f1QUqqRuZvBQr4L1BpJk89JRih3kdCGrK23KA5x1ZYrFRDtm",
  "key9": "47iUeUXXAnAzwEsr9AJqqP63V8FrMbeAq2sjhrmWb81obLyDLxbPVWQpQSK3YuYJH4d31RJe6jSQ6KUPgYCv1LrZ",
  "key10": "4btvKG5YS9ZS3f1BH4zAY2scb9KugNPAPZ2FUqqBXtCBKLDVCc55zqAMehACUt4KUYZcN67kLXg92W1bECEQVR4V",
  "key11": "6ErGF52q5jRkwEcVeRnNVjdNQcBgiTzmWPHKkVNZwiruFKAhSsvDmVuWEXvsqFuEyH7kbjLXMhjFRC4pU9SwNkL",
  "key12": "2QtbGoJ3pvHwUi8NsMM4Vw5r1Psu1MRpfLmMLV9YgYrK2wvbF1hSZFd7xw2gu4SwPtGvEEnNRCri6CHEYBV4V6rk",
  "key13": "5LowiqtownSLDfRvZaoKHVRepSBip3LcApSUvKw3tnxBAvqERf9Bdffenh7ZhthnW8rn8x1Gjnk9FCyq8tsTKoqt",
  "key14": "4g17oGPq3NUyTLpFhPkkT3iFwxBVVMKmgGh1o1Px6GGHGyEGyYb9bviBXBfCqF3kBr4a4Gx5htsJJFNmnUhuatak",
  "key15": "3Nhr7iftgkQHjXCeQUn94AosHA2h3kbRgec1rpL8ednN9tSKBEtjFYaLpMY62gELg2UkTwzNK7LVCzmQW2DsPwxW",
  "key16": "24nTPkMazcoemSkq1F5p91qomJV23dnRUc44WPkwU3xix65MoUqcLjK5PxaCdTZoMFru7RTCR8xu8gT5qw1SWCmV",
  "key17": "3EfMiGsU8vM1jRek8mHpGm3yEQ7y69oZsPY5MJxNAPopt5qNGmqywVhdLsKFZrMhfSyz9mV5p9zixTiazwBKdPGh",
  "key18": "3Lc8FzBsD3A5qV59tDrjupBtzCyqVE2kvSeSNYAap3R8q5AjMPWXDg76vKCXCAGnCr9Ah5UKfUu6GazcjCearLrt",
  "key19": "146n3URXe3vN15vgoyfiKgeRayCvMFMchYtYKQoCy4whexrq7vf4p7LU28qMkqRB9UGajpeyYm4GP325TAYgzWa",
  "key20": "5VAVdRnsQRRvPUv6HJLWJK24vGQ9io7rqsCZx28S9pgjkA1HmRMYMAcRLByQDXBgKyVr2eXFgSiXe7WJ5E2kemW2",
  "key21": "4M6ae3cz3CfBWDoftFdSR9JiWovw5RWsP2wvYV2VBqDErvBjyKpcHtvrmksARxrAs6T1MzRgppakYRKb469vixMQ",
  "key22": "EvRkGm1uC1snq2PgR3wmdSc3tmUJEt1GtUHZQiu6sfPX3Wh6sFP4KZHwLMfjftqAKUwUp3dPqEecuRZrngkMX4C",
  "key23": "K91kpfWTnADGZMQBoxKX8Tzvozs9nTfHcZRKnJshTPphmjVcaUPzTTS8Exc27bNYGgkaAcWy4ncVfn1yLWE6D76",
  "key24": "4nq6oNv7PbPShEZRBFBEKDjseJzVYDxb85WRRRZLhFBZbpBTEeUcNzdUHAfGDV66KXsEytvTmzJ1HWAGPeXnLFhJ",
  "key25": "63aw5Bndmdwp1tLSRa7j5xC4qgrgLxouD9M7UhcRFb47NH3DxHUdey27zs8rNoYXj9RMcvfL4KdFhbz4nMupXU6d",
  "key26": "NCKMnz4rtv2tenbwc9akWHx1TBVHhjKzxRU9YkwWUkoVZRRN6UPNMxpEC1ZspMp2AqvCwBXuCk8C8fDhqZpgHc1",
  "key27": "29fznB9c3zt8g7sK1vNjC3kgAqZaithWfRuvp9kYg7AUt4EP91CufshaW4qnSiC1o8CeaQAdAqpQgbnRgfaFfu7T",
  "key28": "raqrGMcJBVteFfFbgtZvdEFAPrsYL6xdRPXzC7wm9Fo4YBf5DiKMjxZc3L5xuc6KVW7ir4tBMZBYwfAsWmakWwS",
  "key29": "32KuhMNFN2rRSXikgj5R7doxvkw1qwwh3aBsgNtQMnSeWUv2NHNi12vi8QuBJ6UFzAmdvvQACAqmo7U2zD6xKvEn",
  "key30": "3AL1v2a8xSVWYtK1TcGvVJG9xjAybxRoF77PWBzSp9wtowRRsrf3CYZQ5kEhGqfcGscjK3tiMVvfRezxmZmejSSY",
  "key31": "4j96davabYMYXLKtUGXU8fsoX6SdXBCWwCUuWoutyUC97hCxkUqBLfyDjcdwJG7Qxh2DGW9VnrYtDAXk367MEkP6",
  "key32": "4VKHkvuUEHi8go2n9kb4A1gQwwMbSfYBJSsZn272YADhZ6Y2gkNVWa3oE3x3dQi1F2j2adipJQejLmSgSoQu8dBs",
  "key33": "4iTCpgPWAgT8Hvdwux9HUHTcEHrNrj8bahw26XkvCmP5uX1XLJ7PTnaRxZEFgyaER851yXw2zYir8PQrfKaZtWt2",
  "key34": "4UZcYQ2KXr9aQg4qroZoZc4ajuyGbeveGP3kxKEfPNjmz1MRyaiU6qYxMmFCAc9D24VkRi2AvE4WnfzLTxKafoQL",
  "key35": "2Qe7PuGqpyedyQCPvwyJwXHLfKNUtkzorkF8Z3gZXWPB8VCwsVtjLCKmRwTD3BZoqc6PEY3CbcXa2hXcVYXSJSH3",
  "key36": "5NdZepWBnma49W2JCSFGGyKX41PMvUGmmM8FAxdXzLhiJ28AhvQjKyV1xzxmFuMPuDDuZ78p2unQ7caYiGQL5on8",
  "key37": "6iNm9TYLdf9zrhRFU6wsd1aumw8jpNePVHmHasbzXZnPL189XLdFPNWt4kpJ1ux2tgkDVpwMkBGtdtLj494MY1p",
  "key38": "66JSK5iXWVHwfUguXZrA9kVL4p2bCwRwoyNwKfQouaSoDk7utpAJLK19s89bLNbfeFgTR7bs6wSMiMEgT8afcQGi"
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
