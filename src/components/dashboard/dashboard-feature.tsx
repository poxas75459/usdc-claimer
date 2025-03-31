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
    "49ghoxeYxW78hbsum2v9Uw635ZvCGexxYC8aKw7bUuTPAxJnFQW9sN8MpovkHY1DRgn2ameMdYCTpkkaiEWA7TND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29r9k93H8xWWqPwbn4edijTzkuGTvyc6hQRtpN2CXj7qMfzPhbUbz7WFdrGZG58WZPTN9CpBwhmUWMyXiKQrY4i9",
  "key1": "3g4YKULG3LekQMqrEAsni2yayftXDymDntRTysrsMDJ7eUoBoxKLdSsh522pp5ZcdTC26mhi9xuZ13mLnB1Rjdn",
  "key2": "319S1xGUPcJp5eBqj5fWhXH7pqpWN12Z8L66aLz1SM2KWhtXVcdZrwhVNZNC9kzqXByyLH5Ef61a7Rhr4BaY5EFR",
  "key3": "2Prr88DSYCzPKgDqzofMcnhYrosXFq9XNV9PUUEwsja8TUK57Cf4qJY9KLHJDi7cTDMpQKnEXoXR9X9BKQNkQSCt",
  "key4": "3H9FhMT2dDnDtgicynXdLe43fSRamHMgTDEf12UWRtStpZZrKBGk3Kh53JL2atDe4zRUFqPZ2R5H7XoJajkDBUjY",
  "key5": "5oBUxsvdb1Fb35Drz8kqPysBP9SrjGJRkTzDXzJqfmJmpqdWRcGhZXCaSTDkVY97w971u3n9woPbqoS8ABQqJoN",
  "key6": "2FJUzkhqLNdyrDbtTSY1WzvXFo198PsKNcopsWAAXszD9S7UVZujkVThQUBCvSYR4E7rSxMKi2S8ZeMqw7FQP6vZ",
  "key7": "43xs3mWSMie5GGvksJcAnekY6WxYYg2kiTcrNns7B2Gh3bWHnTKe26ynBmzfii6gt24MDrGU69M7X6CY4XZRzTTX",
  "key8": "3YsvfKzm4jeYsCor9fPcPzMgrBJ7uCJzvfDEmyioKmFL79XWtqkD747Q5CMVkaKkZHa79UFyU6YCVT58xvoTm9Zt",
  "key9": "5Givxkw3FDJYHBQnijKbqj6YeDfS3Pji4MRm1cMsuXy9uapfXeDm2yT2eYgaBJ6nfRoirR8E517tNMxPnFt6bE6Y",
  "key10": "2tdbL3XBEBB2rKbBeVNwCjNsD8MG7SAtmhnktEdyP7EQXqkkUQ2MUzfyuzWXTQoCx5HoCLYy3BVjpqBWUTEA4ePR",
  "key11": "3PKVer7ujkbvzMWXpTg1NonD8wAnLMoNFk9LvLyZoKafkYQ8tMgxE1RXDPcPUnqn2jRVtNLw3m5LkZRCg2NdCYDr",
  "key12": "yptBYv4WPsYNK9bgLCkhrJSm5JbpwqRYk68H3cBGZVociwk6qTwmxavKWvSjeMvBtGWV3rqC6mMBbWEa1qqPrkq",
  "key13": "3aRosBBuN4QxsPHdoPdRgm7EWZ74BQf5Rtz7jsb8ftR95JvaP7bcZJQUZ7adGE26ythfxucPq5bYpdZv7Mm4AkEf",
  "key14": "4Nk25cV6k65KMtHegzbSHJpp77V4Sa9JtuJ3REMfoxvTmTqLR4kC4ZMfZnugVjTEhxEoimxM1cNoLPmq9dmdxvQu",
  "key15": "3EkHgGjk2keZDea9D3GoFKkiC8zu3D26y7NvrWhABaWw3rFpxwfwfNCZ4t1BQMWDXd7gccbDJNx1D23X9pgrCsB1",
  "key16": "3ZmEQThWPw7cJypV46fLgr7GzS8h6PqfBbaRFr2mNKBWmj1dZbeDJ6DkqJizqCJCxtqLCwNC2RXJn9ZhJ1H8V4hk",
  "key17": "jt8YuqHhFb36QHnmfghvWNvwNEB51doTLtfMvLiihZKDzC2Vt9ozHiC4e2qTkeP2fRHsXkYC1Dqi17HUUzkhwad",
  "key18": "eBYkbxARQcKbe6kRzzYVqkDZPUGuYoWCPSgTapkbdmf6cRcH3iMdCihsu8572GsbYp87HFdfcxR9oKJMCy4aELD",
  "key19": "AW2uRUE6ZBo9kCAQo36aSjsJowppKUeXbSzFXVwDLBFFkYrjDqob7YFYcQtXcU16rmte5yCpihAnY2J3qZTvvTW",
  "key20": "2rBCuMoeAFKsfW7FhNGHLQAjUxqVeSzarTMLMEPdrcZ3Bt4GgYYQBCcLMtnz5myXLq9H4cm6rtvCKJFS988Bwj6a",
  "key21": "26LucVNcu5gyLM9cVxQWJhVHwF9cDZkc3Tzc6CawrubbiPTHhvAVEmB42HVxbZmS3fdxEXhFJRGq7Kr3Cfy9ZSSQ",
  "key22": "2pmQfaRcvVRZd17Qj3W3iAhcyNZKhCLAFdLP4vFauud1aMTkWv8gGL41hRn995WdPqLDPn2ufmhFbk4rbVGCMsi7",
  "key23": "2y5d7FVyP5fEz2iNVUqasYnuwSpVpC7SZXDuTnZqsquxSgRwnaZCnPdsPRATN5amo1sccAoj3QWaHMtEQJwjVoqr",
  "key24": "3QPFGpqJ1BZPQY314HxRWeMjvdac2KHuaQ33pQWWJHWx2CEt6tzrbEWuduP7wbLcB97avBidjCj3EUyPxf88nqPW",
  "key25": "ZyFXNbNbFuZ4Za6iVzxmnw3hYThWjyHnyhk7Ru9PgesyYeMMi2irVnWWigLmaohftb7zHLXWrLqufNZoEwJQV1N",
  "key26": "4ydZFfySjTtgu9rFHu8SRuHLVQJzZ1jkzrNwQctdggoMrYG6VzQbwZko6KnDQhxiaorY729CVWwFZhJ9HLtjV13r",
  "key27": "2aqaVXKZNmRsyMHJjttjdm3ivbQ1d5cA5jiC4bCdpgaeNNpt9ZESSbLXYrpAEiJS4ivMSdWCnxzErQsETcQNWFxY",
  "key28": "4pLTezZACKz3xdVX9QQMvmuakeTf1DvtcCW3MXKtZCVBDag4n7mVr2c3YeNkBESHJUKJotnSGwJew1x7W9nAjTr9",
  "key29": "3QBqWJv4cgVhQdk5RqpPiFTdo5aWxh1WcJu7fC9dkEyf7Rh3pd8MRuUbkE8X6njWUD5Sq8nN4MWDGFg24s3zQjKE",
  "key30": "2VkTT1KGqTaVxtmFjGNJg4Q58TmecoKHQSr6TRz6BbtTM7KcKHfczzVhYSPvek4KK5MZocGNapLox7EcYzqkMgbX",
  "key31": "2PpLWr43eCG7DSiS26Xe9z9bcnYNUVnD5hutDNiuLMPz3zADo9tSQVBm5zwo3ZtzDoRErxgMeeDTU3Ywf1YxAb14",
  "key32": "62LpC1md95dLcW7DozPE9mrD4qp5fQWR5yA62HvBjxPUaMd9JrvM1hc8eAbK5ShuHjchG3xV6Pzx34ugJgrhFfFz",
  "key33": "63gLDsQdU3aBN2adeq84UgdUhTM6EPtrFWuLnWEeKWr8mteDFsWDckq25ER8SqPYnbzxGeVefHVZZN3h3gcRtDSY",
  "key34": "3mgDnoFEJcxKaBQxgvqte3ojPRWLSoC3H5qx3oQsvvtDGjA6ufkNhE2BQugWuhs1zzf4rprbWvTgbfnM2UqQ9qX5",
  "key35": "4VHy7VUQam6FcKMThArvkxVoechPTCpWBXgGTSCiobk9ibc8FEFuys77q8N7ACzMt9T5AQrfRadUv8n8NFuZQETw"
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
