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
    "5qoLvvozTD5wRZy22t1LoKLpjhX8aEzYH7wLtVbkxg1XE2FoEs4pgnAY8Q7hCKVDihC5zcMPYwPfb3iNi2yVzmop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8PQLJ6Pgc7VtxxM3KSPxu6pFc6YDFNDwRughK5LTqfbu5XcTYVf1KsEGA8E8MnXbGdoVVaY6iVPypqRPWRrNxy6",
  "key1": "3LD416cPKC5Gaoh8QtpdY27umqimigYZGUnXjuE3ydVvZipyXw7cP7umTc8TLnvJb8vCaDBHWYcmVZJrQzkfMxFB",
  "key2": "3R8z5qgvRw8RRLJwTZBkaj77kmYBTTzjXtxCsS8bQfx84v6x7x8pBEy4o8AQSMETdCMQdvRY54AHqxWqrtyrPiCY",
  "key3": "4x6gMRiNorwtyZjSp6rtebFz3qGaSWVLqLZ492vXQXniMzydW2w4uwW2VP2YTPNvpPihjk9DBwKn5ZXbco8zZpyQ",
  "key4": "54B5nyE1AnETQ3MLbcQXCJNXq5K3ZioRqX8BYfxq44Ap2sEXVzfd7XnUzPSwqKete2PqSoay2aLF4gxrKioS49Tg",
  "key5": "5eZQcTFcHTAWfjBn4qZa2rQg2TqQbtrVZMomfVG3q84y6dxc2hpf7svRghLMNVesZVSNhDm3RgUjQDwHSf96yuHz",
  "key6": "9VX7wj9r6AzHCQHApG1KnsyGMhBMwpcLiXy4PHLJxJmdB8YQ2jDxwaq3Go8VDJSxWhmMa1faBQUM5s3GCfTtvef",
  "key7": "2EsvUJJ4qZjPfmEF1RDaAKMGWBdTxgLS3iMaA2jx9eiz25CLZcs5VAr9RY8G6yr6m1qn6NGzff2jAfUQQbzEQU4x",
  "key8": "2picUMLA9Vr6VhZFUzGv31bviAVFw7zuGZnspqKYgMzLGxkRYtqQC11Lfeh2HSMbw8eRc8NyrxaeE5wAYqbZv5jG",
  "key9": "5A3YcAf6uxHfi5Vxjg2TVWPxvTo693Eh9WacBnBXiX5J3Vw6BHVQVvEzrcKwVekz8qSEYPdt9e97avfJDtzqeVom",
  "key10": "5AuDHtrydDopN8cSoTCShFukqymzRcv1DVrCMwF9vmM8Aqp9mqZL18UtrvozgHBYiqrHs45KvYNB7UBomZLt245f",
  "key11": "Pu9wCMobCQi3UzuK3jFvTKGfLCmZmoF2wpwqP3cj2n4kWf1wxZT51cYaVCPNfmXqjAZFgi8KcgSHxyy2S67jcN6",
  "key12": "2MTTqtiEPh1Ck69q2s51uZ7T2EgxEzr4xuKLts3gBrFJGUpX7nJZNgXjWuPU7vyubBYacVzMpoEtiCB6RkvJVFfh",
  "key13": "vGqpKo8LJ5YVXcHAU4nXgUNSatXsEtAUXV8t3jWm8dRdQG1KR3ARNAwdRry38vknZhKJNdMa9hGstNJpJu6NUnU",
  "key14": "4akSmoGGEH1ZMczAfD3YuUuqyCNtu4H5u6gg4XXTtQP2vMeWXpgquXHic4tXqyRWf897CD2kSGEJ7BxapyN9vKjb",
  "key15": "2fuMTM8jiPNA5y7Q1GFMfWj8sy632o64qkYPPDDVbdCQihqKeeih1qXv68t5Qdra1i9UD2cHLiCL3v7GTfQ9yQZU",
  "key16": "3d6UhWPhPNCgJiTEa5CV9YMs1RUYw2T3Y5zTd131dkYaLoQnHojBKn2xVS6rMrJXfY1d9nc4nS9ryqV7RfrfMLQy",
  "key17": "2AKKGuizhr2ugDsi1ES2TAdSXggFbYJKxoj8bP7btb3gAT7LjwJrBQpzbCSiSwuG652PijEdHM4sAcg35SJ37fPE",
  "key18": "5Lxx4yhpgPnp5aDfBBMe3croDBmR6aJubZYAdgSuMozwMPfxcM5QHKTC5Dt4hHTJXKoMQZ7Xtg6nMSfDWweeKR6C",
  "key19": "4NE2yAuiZEp5Fq5tiXUcZwwBdcu1PHL5bNuWtCgyrzgJcKd6rEBzw6Ss5C48eHaapQJ7d3aZQiiFrTzFyn3qGRhL",
  "key20": "2Wezep7wLrEJkPwu3irHyPivG6ZBouw1i6B9zA4D69zXtYwobmWqq3P8fJtwgq223mgGF6NszjDzEZgAqxvMj659",
  "key21": "5wvRGnTo1GEaRMsrzUfpUneCCiGe49AvHqso3tv5uZxCFNwo3FMcRvK1xKCjjSHcMuRhF2J7MesWb4fSzAEPKBc4",
  "key22": "3MXEVo329THf64auT7LE7rPs6m56urWuYKugWzmwe7v7tgDbnnXe2SPHjaCqUhtCaC7Jkxn5E7VYo4PdWL99ju4N",
  "key23": "4GJftDTkw1F5dHHTczoA9zkAcWyEBSt4Swf1fqqHrAmEU7S1VGDXEKV4mQbZZpWp1WWpPqZM4qPVuPfcxDw47Eih",
  "key24": "4PotMUcbcbBsdap839jVe6hnH1kmp9rZuNemqfDey2RaAY2y5txHcNwTaoKChic6EkKmXcapuXMPM9R32wii148e",
  "key25": "JJv7BfVcV3VBa4XqPg5Rmb4t9if6HjubNVpjkxkUdZqfUaoyJCCHHxW9Hc3y2Z4N47sz7kjXKjuBNSbeg5Nn22h",
  "key26": "5xrq4SqUmU8EFzxMgzHg7zTFGRo2U8VTwpxamcwNTcTvR7nM1UAbNoP3VkKUXDoGEGZsX5wkhsk8bvnPBCe9Eyfi",
  "key27": "5p8s2HsT2AjmH2vorng38xJoQzs79uLoJMfZQywzoBWpCNe55Yadcog3vtp1HDhW6d5C1ErPH5sUFRBd3ay7X5so",
  "key28": "HfxoyPcef4BdXPoLPTKHUmJhrCRWh9jrZ5LhmmoFCfNEAB7KkiZ3uyrwvCka9hSQ65G1jo5z2zSX33QFUSbxBHY",
  "key29": "2CESzjUNmdjHF8agVJu3MeCUE1AvWVbJRs7WH1rzSjiaGQfyvV1KPMGEhw7SsVPCquLEuCwGQHyjfH2gps3n4JbF",
  "key30": "39dM1mqnhaZrptupjHbrSe6sxnuLX8Koojn7gs2wFRX2oxAVuq6wBXga8zv86D6RvAQc628LwoZGBudqCTaw9aNF",
  "key31": "2t4P2KmWfcYQAruEL6XKcDZmZnhHwmfv1Y9g5kcSxmRrLGkJgY1H9vzxReZbEVKuyi1MfCM8h6oJeJoPoNiAyZQ9",
  "key32": "r6VDJCR2T4UiKn1Xa4eWWyUXNRZZkdbDmhTeLSC2FEiQs1937rgEFt5K2o4oTfusJq6n9GbwdSyz3jMFvwi6Wam",
  "key33": "3zHXxcqXh4TgWHuZz2JbVPUgzL5i5p6WDreCvjjCwey3hcQT6htW7qugZKum2CmySrLVGUKy3Mi5ohSHL4UTu7R2",
  "key34": "3UiuUnZVfkfPHS71AXLdf1bJ4admU7VBuqv2Wr1HzLKPSUjiHTfKmo6qrvgj1gCA8oYJ15PB4NWWvJ95tFhMDhxG",
  "key35": "VbiZ4GLGG5rHQA8pijAtpywghwjmpcmDrdZSHAPyspoubDZt4xex7Cz8mpvFha2VzjZ85LQ6T59KrtSzwQVmF5k",
  "key36": "5PN56Lmhqk5E9P8DSK1wUz8geSbkFsaL6mySBD6rwzQkSugGRozYMxe9X8iu4hmJ75osHihEZjzn1XxSm91Ejb4H"
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
