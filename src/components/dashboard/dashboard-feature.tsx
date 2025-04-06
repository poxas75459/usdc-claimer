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
    "2J3ymAYhgCCvAGXLbFzjmwjeABdqCigZJfZ2vmUjefQUANCdkd9KqJY8jtX1X6Gh6TxPMSLrN9Dps5RToPBgoAeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59g7f1XLBfDZekQTSwpQxoJWvppSTQnHYs1F9V5o1TRynofWFKsK26jfNH72MDxcH1vk1Fpiv7jRNVHwPkw2b3VL",
  "key1": "3owvMqYr5y2WKpKvEV9jpSxxnGpiq2dbezfNmdRBHbaDvPcUeWxHHVsox8srx4Qujr1K1nwAPG3i3nwcRZ7QRPj6",
  "key2": "4iHYgr88UrFsuABErP2hQLMdLkFrDjZZGYVes78vCMLJxKJkhZ65PE5C5E4wUQn7Q2QKehajMSyAQorhiWCD5a5j",
  "key3": "2ETxKDTTDJpuvw5ECBQzSz4iS1jMXRKTzZ3CM7aLmdWSpFo2CJKDoj93LnrQsTgm3s4UxevhipWkzDjFkYtsC7LA",
  "key4": "2iwB3NVEWpUoQMuBfstLudZE6Mp8v9ideLD1AnpjqiNM8NDf83oDbwVtVN2PBrv9zxsgj6NepztMJm6QZTMFsuJk",
  "key5": "5zNsW1GqX5rd95T1bYccp7AC4o3ecBBjrmbaCQjNsB6CoF562WUewpsehM2jG8wBNtBKHjWWEfFMK1YUc7sJsJa3",
  "key6": "4VmXK9ac8svZHoT1P7gfhE4bWvc5tN6eYBwV1DoccJZKaLrenhvRrE4zJbA7Pci4XgTRfpCNzEvkW9cE5do5mSt5",
  "key7": "5T6e3ZVy6qtPqbwbH2K7vctKLrqGGDbHbi2tH2Y7k4Jyfhbancsw9FzjqrcYd38xYCsqJ2EsQ37X7z3aCD5jvAiq",
  "key8": "65aBTtny7UTRQfjrfHbFSZVhSYS4vLDEXNH2Rrb3MrxfcpjKu1KXZkYKcqFbfxQktVB3hmjCMaThNQ7iwTkVvwYc",
  "key9": "4QSsKCAgikCD2jpdVAJSdu3zMji7qUbP9qybqrDsKaCcB3AtULRRxWEELTt5JNRevvnfXZMWaUALyh1w6SqtARaD",
  "key10": "kpB1Zqv8WLSNKrmwVS7m3DoqAYYux7NtPGWnudVfN3yNLG1vppVYGp713yDQzkbPSgs13FwvnjrtEpabbGPCCTi",
  "key11": "58CAKMf2z9xniFHhUtFmdWLPdQiPkc5mfsdCmbTEgmrPpSeGe6CbNooAcVkuZ2w3CgKJuKh6zaBSigwJ8rzwFeWe",
  "key12": "5VWKp9DGfff3gcLPLWnzEN35E51QU1buwV2oPQBdGCctm1BXXuFWHvyzrqp82hKvPztT7SfyS5YZKh725jNzjMLa",
  "key13": "51VRDmZkDyoSb9ufYAmsKkeustkaSS138VrrA6kiuxR94wJC598cu1qqApfpZ9c5vS1xCzqcfkrs77LdSbBYuN2g",
  "key14": "66fJCiXMDCgrXhga5Jh3MSE9cxVGg5Pzt3cHyM3e2xJbjfNhKXHB27UjPwd4JiGzSHSz2UeSqmK2vKRGRQ9u26pM",
  "key15": "4dxAX35HuDwFUiQPj6PgZJn3Pmd7Cb5ejjGuGbtbGy8ZvuybbWBHyoNDiGoUGBxT7mYyJ63DdyaPjY5vKpqzdxfz",
  "key16": "4MTS3iPbHyd2jCNYEqxGcbc7RefMcX2nFgXCB9ks1THwPzdG3UwW3S5xMNnqbLLxAgca36Y7zG8XE3CzAf34oCVq",
  "key17": "3cpGkPcXakyyHUaxD3JxJnGUFSJxfqAhAr3kEk63jpD32M2bRC6rzSff7YTD2ofvVvLcEEh4Dx5cBBjY6UfD6cGa",
  "key18": "22wCWAv5qVrtnimxmnr2LPR4UiYYkoXF2gECN7M46LBAoadNEsgSTrQbD4NMseuRwTgcVF6T8VsUnC2t4Cz4UuSS",
  "key19": "6259WyPxXL4cAJ984QvffdN5K7jiAbLyTzUyLfWhVtTGvhU6EG1k99aEZDMzfbRA6NxHKzHcsw9hzn1Xbbj1rKGK",
  "key20": "H4vaTGhuewQ89SptEs6ckrt1ZKj6LtTMiRAfc2RpmM9QhiFqXg7UcmB92o5rmgFhXDga8WZof9QgkEjLxzXyr14",
  "key21": "3uv2SQZh8SQhiTR711UxCfmdLGpqYaBh9CoXCR6MmqfNMLod9cimQZNMPbF6CD97BENFUZj2hALhihjPc56XaTtM",
  "key22": "5E8USbrhUWDdKjZEhou2PyS5ted2nG8gdYvnkmDJ9rz4geCAf3AE7cxRH7qB2BRVrN6rVoRqL3RVZ8H7YPn6777i",
  "key23": "3JxJjuLSk2RaPxR38pQLVJ5PqXZNkj1xdN5MwynxWaHSgdZtui9FXHv1wSm7pmKmywKcUHjBLM2cvDR7YjW7uR1z",
  "key24": "3aKqWwk9njSF8jxTKmpGdd9y5P22xDMmvKanhtx2Cu6Z4aUC5grQ4LKxapjyeGo176DabghpzpWYs5aLEwxF43eQ",
  "key25": "5wVCefkjYHdpKVE9cccH6hK6B6WB6znsZAAZmiRUF2B6Ss5ba8P6pn5G9hoZ7NBEfhsJXbyLouZXqKRLys6GKYNd",
  "key26": "24qdBhsHxTYU4nxtWaVhgU4DZEniUKvqY3NJXtPXNyBA7P8EU99nTwEN6sBhX93aNjPodHibZjVRraccDezsrwDu",
  "key27": "3g55Uoyv8FcveMNycjVa4HyvQbzmsXJrGT9BEcGFGTNG7Lz9LHFzwrRW5nwFctyK6vbdnF8t6ZHhrRHs7JzrinvK",
  "key28": "5iximSaJopSfiSmvtXSJcyV1RuyCEJngcYcAJuek3QBkitNjmjzbSkcEzcGatQun6RsySCdDTM4pXxA58DpGTFUq",
  "key29": "2SK3kyaKZvWJA4sYi3ND4PXvsdZXZuT83SqUuxJKv4DGAbxgoiTfNgd3EhPDMco7o1kudBNniRgZTr7tKhbr5pXb",
  "key30": "wFE2c31cFdJGDU93FLyTbGtktvq5ZpwmyXSEQvBwFrQawkTo4kpZ4ZxU2y34hsPYi9ZuJenhigXdXg3M96mn2aC",
  "key31": "cKvpadvLjxN7TLtvTUpqUqs9QeZAQTq2n27i7s4mGBqKgADd3GzX2gEWSJCVETxcg797Ezre3NdEtuGfS3vfELs",
  "key32": "2nDS3ZB21xsF2CFc9RfJ7a5snDUXhbqD92hA3kVGAfCkC22eEZ2Nq7ECMGijGr6ngu1RF3KrfpJGCnHA1rZUGvqS",
  "key33": "2q1P6PHt2Dowi4t3pEmaiWu83h4uwUi3ibRbgYpsTeFcGX16orDEcJntDvVMiggML4oAdENzsGha6tbN3RxENpA7",
  "key34": "5YowZ84njXUy36VKmGt8h8SJ5DM2ZYMdSL1PWSomaNMJx46XF8AzGtiTfq1b6vUZsHiw5PB5gRSTktpq2BENmaKU",
  "key35": "5A8W2LLKzY46ek3CgTcUydp58MHFZgq8AQXTvtE4pGBnp9yrunpFkacMC2M1He4G2ZWEy1eVSQ2NYu4MgVhm3ePy",
  "key36": "3yi5VmXysEPDs4VrvmtbefGQKKomES6yuAsAGMH4vX8Rg8NLuG1fE3KrSoC5L4PUVSC9tAifrohgMBKow8qhNH79",
  "key37": "3PxuBToktzqXFwwLJfPWy8E4GrVsp6xMnr2GWqrg4WQL8D48adn7erR1t6Chp2qpzksERpLmEy27NcYq51sWdHBW",
  "key38": "4BNjdd7e76hzb2r1djQbu6bd7jWEaaatA2vN18HUHVxRgUWZiUYuXBdXQfgjjtjESbwi81XKWSbCJvsiec3XxXWb",
  "key39": "3qndmcrug6jZBXSvFFfom9YHUhP7S1Nfrsu72jrb67ViSg5cX53Z4NosGcqPa7yUAXseoUoAUUUQcr72fDYdYMUK",
  "key40": "3161nXeHJx32ue8AvJnYfCSTVsP5AaBSoewux6odr9wXkcdREmJ4FxHxo71wDbjW4CL4Sofv4CaszjwWooGKN3TD",
  "key41": "3aEgJTmUR4zvoRjuJqDekrmFRmjbYL2ujCJD5e9f4z8Rn4N4WDfffuhK44ojB2MY63KRzih3mhhaHnhg6cCqLjoe",
  "key42": "2iwzKv8JTqAbz9jHw6KYnqU3kREyupA7BTLuCMmMgaeSqfq51kxbhUZPVfJD2ASvWZt14N2ahDbTZgq7hzSk2S48",
  "key43": "2GmDjKZ3wn6CTzu8ZwXwJr6UrpevE1Wc7zHrvMsjKjhWjLASsNZWJZgktnaJLSFFgdF26dZN4iHHUDQmR7FXapgN",
  "key44": "3XQeWB9qCvyCGSixVrUrb8QFAy9W8TrqXScdJtnD5ysxZPFVbyAJErzNkFNpJi32Q2cdibUbrHLy2vryRW5G641C",
  "key45": "2faM3BVDWMzc4Gs7jsvcsefBPVg9JkSxzusUgvkYnn3SdRejuphPG3UBqQ9A5Pu6MbR9YwqBhotw3t9vzEWnprnJ",
  "key46": "3D7stU9SQxA21QrcXcQq9k225hEEApq88QNgQNsUJkd8kxMCofM1LsfQXTMPjvo4YV9DChnxzKnC6eTeUDqmg68D",
  "key47": "AHcMoLBoeant1TjVnk1tFTQRytCbv4f1tQQYt9kysMRb4HwZLmuK25ic51nXtqhWLwQcN5EXQ5qhE43iAUj5EMK",
  "key48": "4jbu7uBBgMqowCQrYHxX5C828WmzFAhWkckqLx7k3LnbiWRRAADqJer2VuHnKGm6uvKoCPdyPsbZMkW8vkMb7zJv",
  "key49": "37sGwjtfKwwtNBPKvj1LUxmv9EUDQXKAKrahiefkN2vJUVb48tmhvqejvUQMJDiCjQaVpwRBHEahT9fbGpDJhKhB"
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
