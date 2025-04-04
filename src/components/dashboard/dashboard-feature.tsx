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
    "4oiVHb7KF2E9yufTjfHFHgsXxxQzg1cy3UHVsMxevUac3GYNULnR8EcZck2jnQpKZ945bE7tGJsKLd28X71ZD7kY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kPCELYjM9X648nNeqxLcatj7eSQE2TiRqdnDhRwF3GWohcfZoo33KczkwsGAEgnu5S5HaRAM6HgktYScE52UiGC",
  "key1": "8yerNPUNhUZ3XrrZcxW5MtYH5fJRUXjCDExiqXRBKhYNjZwhihLg16SVbXv3CuMB7rB1fFGCqGDZFzbth5HohMN",
  "key2": "3m52ZDZJskaX4m1Gh9Y4YVYv4egUyGArPMuom4FBpyyP32wrDZ9z8hN14VbA87xnJdDaxR9CrJv2zbjrbXcsPMwQ",
  "key3": "2CBZ6MqJ34cYcTMRk1DFU1TPNJoUeDKFg9b1Pu9FcjUk4ASrthd6i4YtZhj9hQzWEqAjZZuz7UFRYpdmE36RV59Z",
  "key4": "3V2Cd5ytSo3quxabn4r5PTRk4TDSnhmccBFhVngHxj8eLCse8XXJ3mAgurgX4NmLaLUKjEENbtxh8qW6omLyWknx",
  "key5": "4DZb4PVzPVeG91aiypEdM3WPpweKJHc1MHW2qvoqZLMq22vsTZcum3hEUjceHYz5ybG6igqn8PqEhJXkj2VckJAi",
  "key6": "4N1NVhqCv46Zoeabx9dSBK658T3FHSUHVJ1xeqQKXUT6iomsvPkhZLMmD3re2KV3tL4BUMwit5GjhVLF7zXYQcwW",
  "key7": "4dddtDDb72HFUCtstDrdeSX1kqTJYS6FAVaawSDwLZVU1oVZrAs6pW1xma95JPfRzREkYL5wz6r3SXmS9DpDt9Cs",
  "key8": "4CHsfQDKtntDhjuf7YX8E8mPpNYeXVVa3jFaPaCv9Wtzjo6RsV8YLFqPX2jPYGd3cpLf6fof58Bic2SQ1TbEBHzu",
  "key9": "64mThdfVGdJUTTWBqDBSjyD1XsmtaC7E2L7iCn3MYQ93KmqK8Cczg1uMebDibUs13axinPzaDUSMZGzp3rDWkE9i",
  "key10": "5oVpkDJ14Dm3YXnG5fAjzCCemuWDWtATyCGmZaYyLdoPi8aDvEZCyrLuA7QJibgk4od1b8Ly8MXbCwSJ5StaCT6A",
  "key11": "45zDRYttUNCayQF4sZKNcH6rbt81B61WWmfwKCCmYd6oigyd9YrUP6sBAQ1GFwZhxrU6Y1V6idxhD3oB4ftimBPn",
  "key12": "4vZcXSTNPwB1i8y1uNMiZnMbLjR8XVJTU2cBhhHGtuxsLjc9rMAUzMMEkddLoaphgXathakF8tM9niwa2xmw9xGR",
  "key13": "44VfG399RYTRCSZ2aPEUgVMRXV2QvJuwr1VCPEFfmKSH78tJEVc1TvUQUsHmvNzjYRXR3K719TJNMzFNSVQAFWP8",
  "key14": "2RdYLHc65nRVayVjkJaXTqUgNowQpw73eSTmNtYgus8v9AuHvBtc6x5Mmc9SktjzGSp5c1kYRmUaxKrKbibE4jg5",
  "key15": "43GFtt2wETDjsztRuHb9APp6EFtQ82RSL5TS9SNwWV8BJAaReVaA5qLQhjEdnttibzmtA6mFb4jBpB5qa2oiYcTM",
  "key16": "4S5X7RqKZNUDCWQtv9NuaQhbexUvRGMTXqL65xxeysN67gncMd4utfFwUYosxoogz1WaPMmXkWssTsPQYVFP6Jjq",
  "key17": "2Z4GhsNsX534VqadDb42Lki9NBJMarnGBRaR3D3gY4pd9kSJ8YDk2sed3U14LUbLHZ252W7cC2zmVCtfoJ3cJrrp",
  "key18": "4a6pCZjvUSiG16frkCyPoEmMd4r8E4KwQ2ae2agvnMUakE2ZzKdySJvabr4vKDQyQiSz4gtcMWeNL8ekkhocUBJM",
  "key19": "5RJfp8LAxaaMWQ7hTHRrbfG52QskK5dnLzVwrWNSATXrihWBbDJby5jUTRSRRBrQbczqMXp6sxF9ce9KBo95diCK",
  "key20": "22BUV6YJsR16UTTgedNfDhYm18fK6tvqbE3tgTV472y6RcobGYMHKBQ2XCtPk3SrxFddT57X5gwytmhPaSX3Khen",
  "key21": "3pyLmpM18UaTWTzJfruN5enYAKamxyZcgsBTRKmeWqWdWtYGXk18f7MGf9YP1rztKQVzcYEHcvKpPWqrhfq6pPd4",
  "key22": "T4SzKbbFbWA7XVtzSgkf5uB1kNhoLg85PpupKai2Nheh43yNkT7qxTxWNtN3EjFHxcQKP6GYYQMkPeEsicDS6aQ",
  "key23": "3Cho6M5TgPvUybm1tnoRPT1okvuk3q2Qmr2rJ9nJvzsUZ9VysgF9HxpXPbHiHzoasnP9Hf3cMTEvbvPaPgJTQtBp",
  "key24": "3eDUSvtDxMfDb7Azwq6CTzXon7ojpM1kU5MW7Fcn7cJPkwj7bussTnq4BLauvkMMNMf8RP6cKhATj7Ui4k6oxR19",
  "key25": "46bwNrQPZdsCneRG7ssm3nj92Umwm3koA3gAmkhPfiLtzA7BCUpekCgZjSfUfpJ6kFxaSo7ANjybvniDjnbHGie6",
  "key26": "et5Fe6EoQstPZF3rfUjJTBbibcR7jjoDKMB9fZauaKAHNrxysBj9Ngtox7KNhs1LhVpdfXYGvoxrGAnXzaLn7Wr",
  "key27": "2N3B9Btny8FZzG1h7F39YbiXC47kHCNN9mSyMZNkaZfpLpTSwAYypvVofHpoZzMbwjb7Xzo1EARhJxwiW5vfsau",
  "key28": "4USfHVu8WkTLN6dqNDjhJq79sgBVeMUSY57DgiNw1LEqeytqL1taT7rEt9hkHgmUTfxB8GDbkaRVytucQcS3GfHe",
  "key29": "3msfVKa7SiXpn22HhuJsraiRGcVGa5QJk7spUuWXyPEAfu1ko92uSzck846kvGfMtX7CM8fowcrrhJ5J9aiV2RC6",
  "key30": "4npCFGuJ45AD1eV38rJrTsX7LbPx2cuag7ZzSED2Y3vsGxEKtsS76jYMZQe2AFY2Uf1vpVTmbbsjRxE2SH7NpbDN",
  "key31": "5ZuaNNvhmukFeHvQJpQGRAZUynJkVjbHfgGA3Ht8PpA6BqaVZ6BsS5sXQgGTMWN8EPCUD5Zm3dxitsUWwzjpyFZM",
  "key32": "EjszLSukanFarW26YGbB5SmP8CTe58J9pr8UwFKGW3vuDBi6epsCh8mhERTCnEbXMGR6goKnGrbWvX98LCmtuTo",
  "key33": "izb6BQLuJfxm1vfuq7eLSpuyH4r3i6ArmDhQSJMcSK2bDyZG8cz8cyd5nk3jYKbFofunacCLem96bCShG8GcfUQ",
  "key34": "2VehrBSk5PdkmuLnb2ek8G1y4qpZc8yBYuDN6hiRz3ALpdzgBSupGVraVRuPr4MB8HukT69pdAdQJWNravQqWDwm",
  "key35": "7omAg7triAp4aYVMEg5XspnNiRQojxBY7WbKz5WZvGnNqGZuXrdbycF6kBwFo2KrWxYRhvssSCy2nGsgjkJ5kh9",
  "key36": "5vC1xgwFmRdpkxVFp7ShDQiQH1GhztstPhug3zsMJ5rdfCWXEdvtK1rdJEfyx3LEU7qsHgH2MFvP2Agrb4sPLHyt",
  "key37": "23wZ5RmmTxdfncwNERVfSHtQJqytSyEL1Ltd7gW8ZLASJUoRNYRYTdt4bEE4kychdNN23eLbVT1ABgYsJ8CMyA9Q",
  "key38": "4hem9xvUPgwDNtFCwY87tc2ap7yUpT43Pyd75PPiT6CfsqR6xu7Eo1cUmEit5YZX2vu2iSTA49aVxmmCNq31nXQi",
  "key39": "32jtX68to9SdoHjj6EGgCkUWfpG2HmXu3987jEW57PcqzrrWvCm8eUjvR8xaeUf3eF3PrS7L4ABBNgFKUY81rZ2P",
  "key40": "3c7bfDzghPR4RtGj1C3LdnS61n38saAxFdFXf5P5hubQsge2YwRPMM19BFUbMqgMzXy6j2Uth1jBhj2K11owtMAM",
  "key41": "2DbSzA4CLeCcNUVWSFcFwfKWurPKQ6r1i8vrgHXo7zMrAWXbwfRSFv4994Yq9QQ3sXUCoDVwen3Kktq4j8H3hmnf",
  "key42": "3BGRfZGeLRGswKTH4ee9TXp3jZ5BrtXnQVLWbvTPUFpEoRdawsQt3mgbeGw2ppJ2fRhs28ycLPvk9engNW4NGHge",
  "key43": "4n7Dj7ZUkFiwTV5uxRhgaAQDSWiNYQJ6PypPkqVj5BWwp8hQayGK8ejQd9fNz7uqMvuBPs8At3sLUELtXuFakhCm",
  "key44": "5qktZb4w3c3fyhrWqyoGrhdchUSjnZNef8pcT75NNRFVnhGvrxrdPEPu74WTNK86mzbRcDUQx3uQWRKstTeC14RE",
  "key45": "5WbRBVcirYHtdoxqfUqHtoHJ1BxqbXZ2Jjyf7tCKmiVTmKP7hM2V5Sb2rdqCe9BLJy5FaFBJ4StqmMbvwNy9E6p1",
  "key46": "2k6ntcJ3PfBYiXVgVCFePUcVEXbbeDTFEJLyBN1abNhN84Pez7QX3966QWhbkic6RPRAJj8GuYhi7r5LB6HYbQyZ",
  "key47": "5nQYeFDHcnsamURgohCivjNx9NrySUp9bo9SVAqfgWVmcyd7tMKJKbsjZwroumbqpUtZuBdsou2HqcJ12QTWrjqH",
  "key48": "2znxwZWfyDMwSukps2ozLXz4x5xCSuw94SoAEaajGcMUzyQKLNwem7uV14ZPGmK1toQx73BbhHAt51kqqXQ9VSDt",
  "key49": "5ArJ7e2Ffuz9EHzNKYWbcbh5zFsGwpaue3jMHXqPEcxJcrTqX9rmJX95bjYckgy3ZU2wfXsHjtT9imK5WcWRxZpf"
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
