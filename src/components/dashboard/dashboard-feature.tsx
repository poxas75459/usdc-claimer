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
    "5pmtbWajQ2RXdWCx14Grxo2wavxZeEoCXMer7dwQ8XfQGmHhmf14uAgE29mnPGp77xSrotcoKSmZngCqs5AQoSb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wqr9vtthyj6wuY1toJmrP8K4GkfZDWrpcyvsycMGbyg1e8hbxG1MiP9Kyyxavk2Kk7bVUcVTQ1waWtRA5swJTc4",
  "key1": "4cSeFTw7x7kmz4GWaXwxChdD7seZ5K7knzQTV7tFWG2XoUERDmWa8QT9nMq22M1PWUVeYbhdB4RQtWMNKaX7iAKB",
  "key2": "5yGsU64xmgUnPfnvbBNHMiWc5oYiSE1Et66qxAEpoBrYDrg3iBu8VzBUybdkmpx6XmK6nwj5qaekCPNw8uULWnp5",
  "key3": "2rtDhe3TVUsbDgGNMNLkVKUEp999VrwFzdruQuwjRpqif3guAfUJ62j8Bfnf4Q6Hxkvsk7TxeNva85Dpv63LhgPQ",
  "key4": "4Uygb1Z9RaYSXFKR8zjKL91WMh9Jj7BmKeQ9ZJG4dkcDn9ki2CKjNrbgFC7DmTYj2C4daQUvV4a15Twgiwx95vJk",
  "key5": "5gkTUbXXAh5ubk4pVMBygPetWbKuKCwvPzvCrs4GdgvJ5KBG3RPhWxUdiVJ1ooDPmYQksjvaeiiV1JHZe1yVmA4",
  "key6": "4q2axjaP5YcGiwiyjB5r4T96vxGLKBeiqUu6sdCxNThr2U9VvCn9FAmMeDXKBFRhoxs9iUtYqoTLJHXPsFdTFq41",
  "key7": "61CHdeZ3T99mx12BfXFpPncy5vem2m24oEaiP9M4SyX6fvnYYFBtK7UcRYC4SSCNpTxeiRnoKm5G9cXiB9aySZa",
  "key8": "4mQbTe2jd3C6fM9QbKZUVxU8ViDZcdcmCUD13G7dudsbQFby7UT6ni3ijZ31FGfQ38acpYox5WRDbFSmHd9k8Mvz",
  "key9": "4j7t2dxEFxMbemJbLi1h7doqBJZmG3ub5ars81w21QxYYNGy11MmAuEVeLJ9mNr5rtEbKc9vuZKd3zcTXnD9Sc3p",
  "key10": "58DzgbZFTD4CXFJ71MTXiCkw6rNZafCEFp8JXGsPphnhaC1h5pZi4EWRQdy5mqWJJhTSTYUsZUtYcfm2gwpuJiSz",
  "key11": "8jjDRXABaR5H3DgGv9mPNk2W6CvdYqQ2RPvKD4sWrb4UYp2nZdRsXXUwMXuHmC7YmShL1rtYtzFnRdpK3t9pqz2",
  "key12": "39rcJkYRMnd5usTH7nCMd7Z6DW2QZNXZiAQaJWSx8QUaQGCqXHznt1h4f4XH7d72V329cQ5xqnikQX9sYjgQSgSP",
  "key13": "4V46yS9U5CyBTAMtkfE7bhZbTN5mwFUQPVPB2gtE9g4JDUNiDhVQph7PGkrhBAPHCmqCxaircT2PLwxmgo52nWtz",
  "key14": "2VDqQm5t4VbJMhYaCNyiTqG5x1UhXwpjGwbE518mPJAFRdAWQwLAsmgeVSwaKU6UZXpjzy7i3Bnzgz33YUSrGiKH",
  "key15": "4UGTb69iqBPmpiwg3qst7BaE3hPbSvEoHZNbNJi1D7sGBKMpsSLsp9ErpqJATExCMhV4gktMittYr8gYErKVwWjk",
  "key16": "3gyKVvqXbRgrY4inTYax1VuzpBJXmZ61Lv6kJiv3Sf1RkrRZWLuYq5CnFKrzcnoCZjsm3XtpPeT5MLs9KjKYaXCc",
  "key17": "24E6jJfZ64ZCy4c3fhKFecK4ZduvBKuHguUScKuXiMfbcuEMB6w81qvYadEiSWfcn8Q5w8z1PC9wQtMuv96BNM3j",
  "key18": "SB2uPz76pSRFaHXeQh4Y8fX3P6ckXcvgNeY1wwFAgqoNggZXFDDMeWEeHcA6a2uKn4ay24SeGxbbvb2hoWBHhSo",
  "key19": "4vFWWZqn2LhoBDZ9PEfRX3qCHHu5Y9bB5PhSZbaY9ZW3q9BFc4BGPykEzgYSCYCUerBwDzMtoi5EBjW66s4fShhf",
  "key20": "36Xrp9G8dp1hRmE9w4e7Sq4isL2TrG1pzEHyh52N1Upwb8ELpioRtHstrL9hUrHp5ynBPZRGFxApSXFo9VLNfXfY",
  "key21": "51DvdeymrXNKoVdnX5RCTxSraKyLuNB2a8vhYfUW3ocoVz3s4CsY247hZ1atzN7r8qUya9DbRXpLPifKFScFfWmQ",
  "key22": "5dykR8ZAEJgZ985LVoWdtsBLF2pNoqu4XNv8pWQKWAo4PtbpHGCcYg7yBMeogAqmpGQPgH6g8HTvtHRrYwpCfVip",
  "key23": "3RLUDuZK5K4xn9AxEosW94Q14sfw9Kn3oX34pVk4ZTX8i2AD2HhUN9YG7p8wi7cZYTrURNYdXbB4Nt6cdXyoAmwj",
  "key24": "3ZhDZprt5kEjmnQr3W4B8KF73ivqkZnZoPRaBvoNZkLHNqi9tzFErtbbfse5qLo4cw7nCu3ZGFir6LyJ9GNZKn9z",
  "key25": "4rwpBn22hTPHV1zs4uUSyZauY3PVVU3qwgz7xepqysj73HQx2qzFdbUPMMwbo4st6dLZPbNDxbizSbzcB8Vtu72B",
  "key26": "2dnHmQLAWF3ZPBMHKNtVUj5LnvJGq2wbursSs2Nw4LeE7h1GuGbhArPD74AVXdBSqSriE49knc4ZJMtWWB6jvjk1",
  "key27": "5QhY4V1cqzMceKejVJXb77zzibYv28bovQxaBUXFBHDSznVCW8mpTqXQ26o3rHUBKwwc1JDQTuWoePfq6v8chnBx",
  "key28": "4U4ze6sxTGqGEBhbuGzziB56KvNaNM2p8xH1fyCsXUwGZZWaAVCKWKAsCMbX7iNKtuRcc4DDXBRgBcA97xnnYVko",
  "key29": "2XHz8kebMbkXj9PFUqQ2wPboNkPLDzkjQJZsEjXtjXF2k1grvzAm3wEZetvjx8AYSX52u4DvtThpR98pikbJ63dW",
  "key30": "2GW6byWyuf6rLttpm3iap7YfzdUBisYzf1ZULiFoMwvt39BxQEjcj25AyG4ncsRbAcj864y55ZQKs3vKtBG8NHcK"
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
