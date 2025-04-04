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
    "5wfkcSa4vyAsM4bKn7UDgHuYUAbSvjosvEtT9ea47VH2GGGw2wZXLbDLvJZEfXN99NmYys6A51qxj3rbnLPrazYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "438kNqwHCrnaXgyKqpWWYNAGDGVeX6A9fneFj7RrhuYpTcrC2JHGg4QxqedRoXHdhRTiT4Nr9YZcH1YsxrCZHayf",
  "key1": "NW3uZCVQoBb4Xi19MH39UNxtja7XF8Nenu1bgvVvwn33mvvUrM1GmeaV5VKHZMVRW2MYEJEjTwfk9P2fuW2h4Kv",
  "key2": "4x5X7w9G6wp5LZLexo5zKmTTLWak96AbFRvBruhSaS73VKJagBNyopuc5JxMfRCrFKsso3uRMgsTgYpnDvAtm4LW",
  "key3": "4WXpZreestADGXyGP3dMdK3KggGV4YtygBVMweLdySfjptDnDzccCN9xcLXDw8xhDvZuaBW11vhyxDs8aYSLCi7V",
  "key4": "5V7uztxJZN8QFdnBDKUfrVehxDBgmRETjsLT89hzui57V5g5TKj1pe3S16JUpu8rgJAgodN1D2sBPqp16Gbh4Eh1",
  "key5": "3VEKbG22kZMo4vAPQLXNQrEdNy68VjLsR53bTSeASqRHQcqnskHTXUe3WDgBeDdWdxRFbq8amJUds5jbjTtD4pYp",
  "key6": "2ZU39VVuQMuxPxJxvVb5jJYeiepgehRV59qFWtPAqDgmVmaWdkpfADZi1t7s54h7yDHrZUxenwhymghh7mdgq42W",
  "key7": "51BeB6gdeW2oWDs3yUs5rgjt9tmhFN5gH3yvLfbLDvmMCxZWFyMWjaaXEAwAQvkU9TEVRC46AF7WEETRjKXmTynM",
  "key8": "4khKjtkhiMHLqyaqdk928B5SA6vo2GJ7zAsZ4Z4NPSTqGBRt7a4TYQutKKe4HBALA8VVLXke1o8xj2k9SgcxPNFJ",
  "key9": "5P7YQdbYQUP7BahqMPsWyizdF7tBt7mvvHpLNb4PQNjAXb7Ai4QK3MTWNbQuCs6VHDi4hzabVGym7nxFCzyNpx8t",
  "key10": "5ve59RHfJDHBFAXmEMeKhUaPDyga6VkKQpXdN2RSSVz9YBeP8g7B3m4CAquqTRxmo2LqCBx6iFh8FyCWTta6wwcx",
  "key11": "5DysBEWbkgiNeoh4V4vTLMhMkEnyf79PMb5RwvjP4ccDyv4J8FZBt1sYjuHJToxCWRNMnNUrcPVPSVHzSFbkqRvN",
  "key12": "2K5Zgn8LgMQsMtrAMUsUnhbt1e9CRHXYbiFUZ7xG1L9bub3NfDG8KnesGfKx8hCjYV5xCLLN5Nqy1nGuPGmd2NMU",
  "key13": "3k2aXBE7x4dMkDmDztSs7cfPTuu6vejrBaLst7QzbptRi17k8VZp9jbTjPyPwPGbKALZGLzr2CUSgftDiJFXK4xr",
  "key14": "4DqdvA63BpymEinoLoRKibGWsaL8yhCXnGmu3ohbtP4msm9zHX88Yatn1huxD7Pw6xNddHM9WjEmx4pRuzyQK4XF",
  "key15": "4k2VkBWdjMpoPocRc9zZKXjnTbCSHQBZU8b5gVeUTkuDYS1sq6HtfX7whsoxcXWPM53dBJ3yWtZAks5fHfMx3yaT",
  "key16": "5KEWFuhHPzDVsZsURfSPrYvf1pyYpWJBMBxPZx9SNuWNnx4Ry3eJ783YbaMQ1ToN62Hn2tiJJGvCvWhf1XW6xyD4",
  "key17": "3aQdRJEnyz8ySqdJnUCkxYxWtKTMx6bNLoEvJ29CLRKg3N4JNN11TNXNzsqWycLY2z55QhBySSmjp6zKnaAibwWR",
  "key18": "2ztWEQAib2xNfJh8aDnE3cWfWWCx2wEGTt11und27uRd93VzfUR5t6dn3H6NMzdhdbjSNeGhPGungZshu7hDasfn",
  "key19": "QH3Sa1n5cyi7ZxaPfujrJjFaYLYnikZZ7GQBqX86V8S6aiCRh74ZL2cWditQEpNRV5xDSKvKkFzmgVUso8SEE4w",
  "key20": "4YFfnEX1SWyfeK8N42TNGpQTvrM4V8Tx2fjar6JbJ3mRZPn7WUt2LkSXtNtnYJTpHEQCef3uSCDghHjSt45TD5d1",
  "key21": "4W2BXc8zaFJnxrzfV2xp3t7V6tCUHLwcX1FLgz4JLqzXFhpmKSW2KRRrLPnJhBvfz6sRy8tm1b1MzSw2SSyTmLNP",
  "key22": "4D2k3RM1tXban5H7AiBBFqXZsvXxmXSPch1uBouKXUXPsXzungr3s6bmb1ZqwkbtJdL7AUuKNeViDCZexSR36TUk",
  "key23": "5o3YdEnw9jqofFQVrJ7Bw7daDD3FUa5mUuZ72fhb53P1qJiyRUaeKdr9W4B2hfLFyu4XD8WsymmmdfmN9MForCaX",
  "key24": "5eYUoqkeH7riaZfcrpC2qPhzzFbacNH726SoxM9RnPciHC3qaGn3HUntKvYwaGokZvVt8ojRZ1KkKUMJsW7AnMit",
  "key25": "2ZGSeRFeeZ4fpwqdpVFhubqXXiF5b1qbAp3LHY4FcK9EAoifxxryGWhJCGHSFLrC7NqynJ4qrtZY9ghgAD7J9m1X",
  "key26": "2t1SAzmEdMk6Wj3d6FrqGbXAPyQ7dHBGAFroiH1AjgeZuvTGAKz4fC4X5DD7fuvb7HsHbba2tbtwGSnZKT2Xsg3M",
  "key27": "4QaykTfqrd4WoSqqEiKsZwnLActKZ4tfqv3MW4KPnkht8TTmQ8X2dKP6nKaHgQD1KjUq7Nbz8YbGoNWx4ojfFKDq",
  "key28": "2LLhE5cxYWTg46pmNCFtK6Tg6XQwmAxxqdcFzm64hHiyoUDTXQNJPiPsoDSHeHa2FFUbGuaewRWAe1HqeA1PHx83",
  "key29": "2RhUQe2itd9ZnhANpYLCZcay6vXQ3GqQ3vvu4Z2ipDvERT6ctbk156qu7G1yScAB1PuoRUJCGd71LdMohg8chka5",
  "key30": "ub1JGjVJqfpuWXAHpigZas8QatBp2FJppQETUG7RReuiqvWuQuFMdEtqdvUELc52zjcsj6j85r6o8dXc9DdZrnE",
  "key31": "3EpJxeDDWfLckDJLmjGW7PWXxhFxxyCwRTPCAsCV13WVPChEkVntaFsKETFvwKoby8Wjf49dm2UVBhVTciNFRo5m",
  "key32": "65fESeUtL3DsXjZ62B4LfMCjyPzzahAsWeM2xMtPsw1CEviZV41pH1ZDE2fjpfDnTeKnhJbY3F2LyNDPH6xPtm5w",
  "key33": "5vuG4N8ERWo7P6n6vvnfk8U4LRJcUrw9wr3DEXjM7wPc5U531mkYpM7kMmpby5hLPfYYFUoEBouFzVEKHQcVtuhW"
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
