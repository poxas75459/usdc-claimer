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
    "5kRFyTHgMBF7dbCcu1TaVtESgvCUnKP6G9aJ65NSAooXJbZhuf1BFfKsA17oQVdTFw65JR6GcdFcrBFRzm7kSqzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gn9R7k7PyBoQmEhMPAJKvg3WnXgjyVX8sAtgnLv3v4ghrBzTQCBmMRswi4MPA9yd8ULAndEA2kXG817BHA4Kvre",
  "key1": "2m6Zx7RbruwjS2T9otDMQo1ktgL9QTqhwArpFJAC89GmUL8DWrhBdpcLPaPiYnBoDtsGP91iYsLAb2cGth6GTBX7",
  "key2": "3VrDqbXoSMrS5kJqvnN1rTdfUAAU8C7CbU5tyHHLucLZeMfZGuUaHEuVfVzZuR8RBTeZeUAtXiKsoq22mm5wACW7",
  "key3": "Lj58uATXhyJN4nrVXqeENmWxPBoLyeYN7RCovMKcijBNkWUmWDHTfnSFMU7KQMD2VkDa4MLENp5McoY1sVR9Tyi",
  "key4": "4DA9LkEmiYKyhCrwZM7CuAy8fUFeQqkdGLe2Rn5w7VM1qmj7zuVQrvAYrGDwt852DeAHy4CaywXno2uDweWUfhv7",
  "key5": "58Kz9Eu8wX8KfLGyXHctzR43EZbJDpdd6DnK9NNzUzKJ1N3LkJh2BBf3CqRaeSYWFSGsyTVbDTnzk5KoLm7gzNjw",
  "key6": "CJtHoxYDB11nHEH8kvt8e2oue8nH6W8iJfjz8VEaJapzGE1sZddLiEd2qPEYffvYGFKV8cGodiZKQ1xKLrdkG3D",
  "key7": "5FCwqTX58Z37kBr8Guv22JcdwQcbyPbi5YYLCNh63aWPQ9sj61ZaVp8vt8sgsP3EBtytUkZ7ZpqvdBKvTK3eTima",
  "key8": "CaXBiuVCszRDeMFnYeifFHFJmDAcpTszEoqhaoUXPoexvDrHwyx92CcGytbAVC5H5NYBmCiAuYis5zq3xq7mz8Q",
  "key9": "4fncF3Z4Q2SzUS72sWjhTqiiLxL9wy7nZcWZJ9RkMbx6Gvt4kFKVdCDwVUpqXj4ZDZR1Rb4CiQRnMpBPWWatPUBT",
  "key10": "qNuBogpRyEhwVmGEoFZtmY141iQ5mGzN6jznpDqP8Yzihgs8aMm2Z6tbSADhfYTHdtgti6iJRpxbSFRAtPN3eg7",
  "key11": "8mXYvfvXjfe4LJAYoJ1cBbvE16PxeNVHfXKindAdBvNVUdeacdASfBdm5jTQZRXoscVZudRZ8KndFy2emicUuHM",
  "key12": "5LxTYHQ7sEB5gBfwTyc7HeMD6PaoAKbsZVxaBKiMSoGhBQbTmzDvMy4q4eaBLZgwqXLgu4AkrpWx5Zrcnc9padKn",
  "key13": "3hJCh76umiKBUYaG2iXdMjevGMbDPLbp9jUbpHoJXrm5F24MCoTWo3KcRLfrdaRpyU2ufw6Ee6XVUe2AkyhQgyNN",
  "key14": "QZSy8Ax9iAsELVRgS1bArxefDMoK8ecVpqcSWLiw4tFaxbJg2DzMbsG5KMLsrDq7di42WGbXGjHpyhjsPPcvrEu",
  "key15": "3sPWSCFjhCCHfrqkH6xZ614yFixQZF6ahMSEkzdiG2hZmKLNqJAhTwiJuaTU3PSRth1uH4KYyfD65DAmWTDzkn2V",
  "key16": "5Y4HT2E2EyCDEVgu6a2oGh9DXbYAh8NNPTsHJeRF9jsdGYRBv8QgrGLYRvepJ7C6EQSrGDgpiy1FHMzZ2i7Cjubo",
  "key17": "2x98q9sWRqmG8p7QmYtzYGFbV1DHtX91tZe6VFLHgSjQXQhAVjj8167qhR8dP3ZQ15iniS5A2DaKryBNVBDC8igL",
  "key18": "2qyUARw5NDVZrysF9UbmHJ3MYguiVxVaKigAbdBxW42MW4gMMGSz5zuLWiFpimEJPD9HHK2zn9U1Q4om7H5DKPwD",
  "key19": "5NjxoxFsM67tA1ufxE3qtGcyDqqiaqPjiGhdD4t2EDxe5JegRzMGvmHn2kaEor77LrgvN866fPZH7WvMBdnbMR7W",
  "key20": "2Nws2N8AF1HNmJhPowkH636jYpgksWTdzs2Z91orB7d9ssHZg8aqQ5pfRCrXTyLwFx2AddJHgMFxKNuB2FntTQcA",
  "key21": "48nkNFmq8bN7VDnrdTsnwrAPhAR4bqsEqyuY2SVs4KDhxCiQAcUPcazKVCtFXLe5f9JXWT1LRahwTUCSPsFy4QmW",
  "key22": "5iZXryEZ4dDudvZM47a2wG6yq5UbrKyNteNeASKWU4KQ4vL51F5GvuhNF5U7wXsgcnTCYTCwJpohWJjsUDsFpuT9",
  "key23": "2QhWGNqgNpEmJHSbBbkVVdVBDJ69r9wtoZi5nnZFNiVBd9g4zRG9XEzAq2CyaBbw2Hs7DxZ6khayeVEL7hqsn5Ce",
  "key24": "2xBJz9JtbHVhpMeUEmzi1RUU7k7pY7U57bw2Yb5dzDVXgad37yU422H3WKmk1zgdMWArGNBqu1FhAGYbXwxC2arL",
  "key25": "3zNZHN4ZU6kYSBXA9oUbLQob5Z9XjEGUgiaaF9TH16Cx7HM9Cj9JmXVgkFrFQ5Ryo7do5aMx9c2qRthi2pxFNkqc",
  "key26": "4xG2B6exQzvVLDC4HRTheNfTLjrKVVaY2oUeJAvTABN2T1c21Hz7d5ahf5tv9nSV51oCNxfzK6LmGRRdp9MQmyDu",
  "key27": "62LB37gfeko1CQbcq8mhZscTXvuBmSdpgKEM9MYMDL8PodQ3yTpynjCG7DW21WEaFrejcVQ9bis3Z2S42rDJ9cG1",
  "key28": "4hCm7gKJvwKZHqXhQeUaq8aKhEvxUnzEMM2w2frBymvYLfMbJ2vkha8Hcex78s1sV7HdYKicCQ5rAJp2X2fsNhfy",
  "key29": "531nQNTAer5Js2DxE2Qse29JUq6yjwJ6ZptUwaAukMWpu14YxvTMZqWGG17hrLjh6ZWXq6UFL88giXMeK73ST3iy",
  "key30": "2C1rLEgHjdPHduiw6YqRuFRuxWz57E3rR8xBS2H55n4Yhuh25NXKscKr8rfrf8skrCnmS7yYWervjconGYRXTANo",
  "key31": "4WDVcsMGken2AezBvMiWuPWMZ8hr3sV7EgC3gCyNzzXTAm8z8pWxz94b64Faj99npCsaGB8j9QePBiX2KzgDrBxW",
  "key32": "2vm4atY4wrnKTNBED2Rb5sq1mCcph4amAwECumbNgd8jYZYsz8p5u15jXiw1KXkGDyikSwkVceWhs2VvjzMPZ2e8",
  "key33": "5bmCZwmjS5WZjXYAZ3Ad9UDrRLCLzi9rR3VE5AZ9AGer1EzHfxPJnZ3rcMLcthqGe6pzsYZLgBmfWGHy5B3YibfM",
  "key34": "5ceL9nQGoFzbFvqYYeVhJ3QbM3QUxGZcqJgxpWHt85qaYTGa8RDT78uRuFNU4KzTK6iSGfCJszAAn7adbtwyED95",
  "key35": "5irUiPSK5Wq2G7D91xEhEZipv8qfnCW9doZUhJadttf35e3hc3S5oZmnt9rhGQEBF9D3rNHWq9u6asJMwCCDP7fd",
  "key36": "3GaoQoPuAtLjxjfLkLqgUZEUCqDuCX1YqkxL2B7cP9tSy9rXqKctzTUu83uyMWqpTEqGrYxuaxfmw49mtK9D5xBf",
  "key37": "5FSYu7kAbN53cZgH9CtqDKGW59veLUXdBXqYoo8jePYfnTJVHxoAXzSXnDiWULjcPks3eaopWHGNDRErNY2Vexjm",
  "key38": "59nwqFKJdtoTZBpyJHFKqyiyTzCY298aS5dYBf9DZLgYv9PEwN3bpwgokeMUxFHu5kr782Zqr5Eb2B5MLoGkzfbc",
  "key39": "3fCYgDSnPpW6YQLkmQEEG5tZb1t9mj3zrtGgWSZdcPPGaaY4jq61vthqd8n6MzZnQunAaVXmTZUgAmjENecE8wSd"
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
