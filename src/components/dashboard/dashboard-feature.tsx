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
    "4Grc2PtnQnZQ3GqsNBkXALM7xnTXbnZQUdFtWtppxMMfqbPw6vUVzJEjghAzJGnpPXTZh4c54cyQ3BkXqPrCm6Xg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QU5kRthM2z1H7Lcr7866XyMQA1enyUR996omzT2XyaEdEgJB8eMnRFsrCCT7SkXutr7QzV6YSYvCyBGkta6khAR",
  "key1": "2RDTuqZnwn19nxK7Tt6fbpz3LEwShTXfzQoM5LbvKeydm6RghJwtHzjvgBpdV1RXF8GpTkDMLh2jWuvDEhnKggeh",
  "key2": "41mciFUmSa9FmKHgZb69sG4uUwdtwJr5fpVRpRZiQY5iwhzaLwncXxrw4RKiV55vZ8aJweahW2Rk7diE7VkcbvbB",
  "key3": "2k9RCP8YSvhsjftDSJEXPV1LCQeGmFJm3An9su82uMTgk2nqrMfXG1tshHpQSUtGDGx6GSFYxWKifd6rbt3LQ4rd",
  "key4": "ggcKJS5gjycw9qHGhTuaY5Nj4kk8WZAMvHZZA8mxEZtCcCLUdwmf1uocvurxSJXzuXREv9BWnapNcHVqJfek6BQ",
  "key5": "5kU17PC4tLzKXFPUjSppEZL48Tr3dYCzgqZ15wWkNp3HXxCPfFiey1GztTeKmrJw7mi8eB2gvprjgZXTpdNR8eRg",
  "key6": "1u4uqXSaiamfiqS8HcHr63NTzb6jFbHNFNZSENZFGTq76WXazecPtjQpNyzFmdAbDvPWmUG6Wrm6SE5qNzARnqL",
  "key7": "2mH536T6zjXD7REf6zJPDz7exNJhhd4LC1eJ1XBtXRM1NVATP3ERGvW5141V6pg396YjtfsRhfxSqKvBV11ZZ4Aw",
  "key8": "23TvQxVWvva82DHFjrPuemhF34dZaQQ3deuRgpsFjx1XrfXY8E1yBXvVY6WDXPjPoRTyYW7YdNhhyctdKx7CRjxy",
  "key9": "4y5kKthy4xvRTmkLbPFKttAvZmx6EMiPLqbcdxRJXuH62cMaKqt7Jm1BgyxAK6q4vFt6uYe6Ji5hUD3Q85EzUrZP",
  "key10": "4aw9cvHxK2KiwvSXWJsFuXGP4aLN9aeBmZJfseHNqtUvGgz27iaqmyweDwb4RrFcKSuRj9v8nvVpajVYvNDyU85X",
  "key11": "5JS9vgw7jvBfYQt4tHoE2R3tZUTeYVPkn1NRcoVRqTf7NXiB9CNc5hgVtofHC1kGmybCMYAXqb4h9TbmLxpDCJmk",
  "key12": "2TxnYGGXucFZMCAdKi94MC43z7wTHg8pePKEfv7py6yxnDH3RV2nPXumihViRktijVkGWJPhQXrTVUYc48nze1Rs",
  "key13": "4NejLBmKhx8szp99SZJm5cdZhWntJhG7APkVpAAv8eJgGkqj7Tr9NqMkC7Fc6tr5789qXTx69rzsuzyti3npWdSW",
  "key14": "wohZWmvmTBqKDTn6rhq1Gw8k52abSCGs6QjaKm1bELrqAMGRNXapGaC6BNCMnbUVFx769CyBhaK6WuCZ9G4yeE2",
  "key15": "4XmSsUGNCzchj2V19gHDB3ArMBc6FVNDPg9R1evzNPvX5WtdSSwftX2VN95dRKC84a733FKCtU3tAJMDnXN6S4qH",
  "key16": "61ipDq6Lm83RonWBytUGkJhhWK216q23XEUHf3iRVrHtyakM8td3SEpAApyY6Hm72aTZDEGyq1bGZjgN8uuBs8uG",
  "key17": "52dAGaLBxAw5jTPMDfyvGNZfrCxdmJ7XKq35yUxQVxU9dnFPmwbNzFsTYiKWYLrgXzF1mekJrMXWzePQoB29kLLY",
  "key18": "2AkevjaDaDaik4ygiNuohkhPnij8HvYf9Vvy3canYt2rVH5qiLvq6D7R5Ctw2gVF7zsrSoK3LiLV6diBWaCXfa1Z",
  "key19": "55zN962nhLMD9Bo6QKvCXsNUEq8nRBQzctx9YayLsh1rNtBw2ZHZsBDj9SS1TdRE7K5kuy8BnDKnXo7gabbvMECj",
  "key20": "27Bpr928fs9YErmF1GAmgXt3nCf5XHpuhQstNQV2maCfFDUNtcxXMb9YDeqs71YZcNhiDw3kWRxWbKQGphaH3QUe",
  "key21": "4MUecnLdGev8TWzyFeTxKTaweeWpS5A1RPu2zSCkhYMkBiXxCVL8Ucd2hRL8EGWmK98aY1ctQBVzuKVZaoqRhuZP",
  "key22": "5HZCTgUp1T5o9Xyd4nJS4evVfCPfPmTxcFGETc39q9X45oHkUWyv9f4WFJMnQokcL491T6HcAaEh2vdrv8Ae6ZNR",
  "key23": "5rkrxJddRuNdp3FvspX1xtLa13TeHLY178hZKC2wTPd2ZDtepneqNiNhciBkSo5sDsHn4TuKLLB7SjXyz9zR9nGe",
  "key24": "2QcnhRxDTkT5oemEywiv5HgpEfMmQwB4fdTg29VUartUBYsP3gcZaLQq4161pP1dMuhL3EYQZRbDvhHnXwbKj78F",
  "key25": "4sive3RdSQ6hC9xvpbzT4xK3c4ixrqRJLD2viLwf6mW991WHuq9dRScac6G9u8TwwuWX33XaP5gfYuKgXdGgciaj",
  "key26": "zaDrqU4UDAdhx5BSa4qYvUZox48wR3uUtPzV4cCw7zoK4okFBcC3Vfyaxcqi2GNao8Wt2aNq36AJJMZ8JqbtoN6",
  "key27": "2D2We9tDL5Kh9ikvtYKCLy6eq5gYiMGPkW4PGPYcSKWvWHfZw4ZETBp87our5LZeagz1H4Btb2NpWyGEm5vHjyj",
  "key28": "25zb5LfUz5P7XqpfYRM9gccHTWgu6iUoYgEqUuwf8TZGQCkfxWNrU6e7SnQdW5eUzKpFNub7pNVVXr3BGP6FqFug",
  "key29": "3eDWcLA4Ry9n2fkPpL8dACYmwyprYYjTfdBaPMmaCWnKRRAu5w5yDYeMVKz2sXajenwUKoVZDXbVUq8wALqpEKmh",
  "key30": "2Cri7NH6jdK99LGgWFJv3tytfPNQKTAyZM8cDL3X51LUHyjihHpeKzhTgFjBkAmr8qhjR67cKAGaaZjcmLyBH3XX",
  "key31": "4mkm43c66Bq3o17uNTPN4poyzZbNcB1jv1tyc78GrbRNpgyZEgtsDyej74ePH3zSUmEYHAVQW1eep2Wkv1P3Eqn7",
  "key32": "3yXNx84fnJkYJGTMWMegjP7MH1eJQWG3q9WQUwqujXurnAJoZkoUN8Rgq4Q6HTkNMshk3LFStb2KGP6ah3rzezb9",
  "key33": "59m59UKMbzsDrk5NyHS5Qc5AHDnuawwgDDvQUk8roidj5HTDq7VDriexVG3qaCNhLnHNUKFVANnzMeGi7iMgkHHi"
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
