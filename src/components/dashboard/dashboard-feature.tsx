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
    "2hEmqecxtunGoW9XLyvN34jEUSE3ANVvqGpPADEmUaXtuPJEcMHM3BVyA7EUQ42gYigdYUFAU9uKRh5bdWxKMjc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yvmgKJcP5hW96hG5Cn6TJfTJejyYBK6RwRMdELr1we1WoizYTQ6TfAvpgCQ7eKoU5qPswQfEuHAnCqR4XbAgqUK",
  "key1": "4hJ71yZq6BnS3cMwj781Z2sTybwytEks3ruXAKN5rsEW3Af1y5yt4EbSFX7RV4GJ3fnxEdtJfDyuvniaJpW3yBFa",
  "key2": "3EEGXzovr49nBE3Dpm4fmV92jCaJ5VxNPUYhdP7gAJNgwWN3iLBJue5FcYD9prG5pKiqkQp1EtBEzvwEQXmkXMhT",
  "key3": "4jf7jAknqbPQ4uziG4LftXLh8FZFS3GQBRLJDcGkSMkSNjb7wvggm9uKHRvJeBJutnZqVLp3361w8kUtSCDisVCC",
  "key4": "5sgUXfCCBf43UYtLxBY4M7dckMQnJkp7TR7DAD1Mb3E5NKALkt9Ex19HWmGbBAjH8Xp9qvLDa1nQeseTMT6hukyg",
  "key5": "BC7fZfUSKv5FjX2XDPYAYB8RnqgmZChkrBseMZrwUByBNEpxCurBqkg2R25JJMwuf2YGGDan7vJBoW2Zm8iVakp",
  "key6": "4NyVbRaUfdFYTghoQg1SQu9PCoeP7zqaHi5tSv7TcFDFbJBvYQvQua6rsQg1E2KYgdWxv6GBNSN4dQT2pkhSRYdB",
  "key7": "3EEW11oKxuF3gjADLZYF3j7AvsxQx29ZU1GaaDB4TQnSc7CVXF2V7LN8cs3p3v4jzJDHucqdpxHSnEzpzW31ABCi",
  "key8": "ncgyryiaxeYc9GP29FUuBVL4NV9w69qK7qf3t5zPmf1vmF8tHbUQcBpsDs9cBJw7qscGtG1HKVfDTe7Wvs9PmNz",
  "key9": "2T1UMMixg5QRHMoVCT2tHHTdzAEfyAu7Emt6DiUiii1hTrsD7QriWUfPF6b2K9Su8HoJijuX8A6eS1J14taKnMuP",
  "key10": "2u1ZwxZh8hi95VJsgjbRB354BA8adNiD4fUh6WNYMuXKXizvWjVDTDfNXz1GzeqJtWxd3Mkqxock3Wk1h5Xm1r37",
  "key11": "3BY7RGHmBGrFgWhzi3p94Q4nSH8wKiWNZyXHYa8HW2tyQJkoH1s15vEvPGsMxDGHqFz1gqSYJuh91cEdwMENfSyh",
  "key12": "5HakjBd8tPXRrQBosXDxL1rwWu4Yf19uJfRMqdGKEe1S7dc9KTvSss1sneundWs8XXdMyYhVqv9Tgwtx4f1pTDHF",
  "key13": "VWjC9qy4NogiHqXjVKxzZeukVHc7Q3JhzqpBfL47mDyDizAU6gyWfZj2ukD9uyb2KjuR1zryY1ESeLp7nGQtuHH",
  "key14": "3fgCB5JzUC3pRe4npFGiqqDPZqNjVEWnjy2AU9gmWoWEk2tpG6PZM3wY6Tzzvsn4JrsrSEd96gHnbe7r2VEVU6EP",
  "key15": "cBxUW5rozos684EMSAkqhAwurtwMZSibtPyi1vsfENY9NBHEmXezFTdEHXyqwWeF1gFHEwFocShKLTp3BFy8t5N",
  "key16": "3eqf5W6bViLv6yADP11Wf7sgojLvY1uRpk86vQohk1D6MM87mAHSkBgCAMLkf5eAYPj5ceuZxZQcbpJALQp9AX55",
  "key17": "5iVffffGz1yjvNCtCY1exdMokGNxWQR8m2GU5cLpY4q3F8LVFb4kw2UpcrV4Yt8nH3f9hHGiGNyhbtFMuu6miUfp",
  "key18": "vUDsCK5iokGEB4Be5YVoCGvc3VsaVcUkgXAYMYecoJMy7yuDH7WH4xYF9E9tt5p6cuhLiGM9c7nctwGB2BZ9fCF",
  "key19": "4hN8bhMUuhucXQyXboxEK3vRL9uPTjEEQ4LMr81NemJ8RvPNg2ASPcSiFmJdiiWMsWS1r8SvjgQy9W6qMJtkJdeQ",
  "key20": "1jc9NXHviTW9WeGzyLEgwoS2W9pDip3aTjrvDR78A1pcNNPrbRh8Gio75KvjfSdGuHXv5s8mniqP3N8BGQeKxJQ",
  "key21": "4VfjPnukH1tJvrRMsUCSz5PdbYBhXLRDE1tRTn7VT6sxW3ouMrqFxse2eoDmWDxReYX27U57QdGwu5YbrofUy78b",
  "key22": "5x5C7VrJkjCx1wtxFuHUnBs2SfVyFTc8m9KaZrxuHyGE5hBatRgZjiNZCuVzDjW744prKMJ4dAzhxocsg9sSyfEH",
  "key23": "4wkVEHTp7Zz2GkRgLECnPTW9z1uj1XaMXzVZrGg87F653BzrX3CVwuxSeeD1e7J12ZbWokh1Z1ow75ggvhZpE7yy",
  "key24": "5Sbh9jFbh68gGY8upG2KbG1SjoHqu9VmkChGU7LBm4gTMWMmQc1HeSYvepw1eQN7VkQGqieEjKcgUm9j4sDgPxxn",
  "key25": "4avhogumqwTzHJgWKsAbAAjRxegMMSZ3nnysTj161jLea1HUwTJfp2LirfqvXPtj9UcarAsT2vkqpLG6qfq4ncMg",
  "key26": "3S5VS4QzLh36GiHXQ4AtwH7t8w6kpDksUr6jp9shR9bWHvhRWSqfouQb7Cv7JHyHAExDPVHeg4WSkt15o22AP6oe",
  "key27": "4whDTLHUMKmns3y4YBA6pjFQ5jW4HrTusASHnnEL4fjqbDdm5zaGZwB3wEX4mAB3W8izum2GDbsHVWAwsaT9fkTL",
  "key28": "4mqazqY6LHpbUBhvYFSg4MRQFLQTosNa5jD11ufJ8LfzhJWWcJLQvaAuXJvprosruFHmM5r2xTK7YS2ci8AwfDuy",
  "key29": "3qi4EED8panzcHCcqfMD9c7BFEmFoEqpHNBCoLDzCLwUKDs2FChSH1fSU6LREMjZZhH2wvJzwcXz2TYQyKH4oHiQ",
  "key30": "2RNjT8gzinH8e4HahdzkvN2ki1EQzbNjc9wH56Z7p7tH2Jtm9RL2Y2rAJgEt45R4f39TMECKEB9Euhh24dygYvs5",
  "key31": "3xnnEMSjEr4ufuHMsEXBAaybc82Ab9e8Xzf6KEiiAxadnxw9ZebKPatYxAXDEN5hjBpguJp6H2GM4VhWCxLeJEmV",
  "key32": "4cPJdLRnTisPRk5qzEBs8j38ApFVoNnKTZYmD1n9CtESMxEtFagbeKJwUbNmRjY3NndXJqvFdtym5VJJ5rebCavm",
  "key33": "2VQqWGup2tS7pG8sVeAd63CX4Fd5jJ72ZMvyPrftdL3Rdg96TPKQ8wwqnTbiXoq1AyxsVZc45BnvfC1EgpQHgkHT",
  "key34": "66Tj2ZTP7XKFUKGcA5s2s6kjPKjd7z9FUSnKQ7q7PCZVPQJJFJQfv9LThmX8nPjfnhdBcLhMtypfepxnnz8iNvUn",
  "key35": "4AQL9t1MnnpMyVm994FdDYxi7NAz1Z58z84mStydrefG9XV7cE1ZXD61aRiMS58hUnHcC6bYMBRpFgpc8jHCtBuV",
  "key36": "3hLsR3eoPUw32oYuLvhSKvsG6qPvYLkQesZcVxGeyeZ9EPgBAcC5QvTUJPdeH57aZPKeaPr84ofW1fATLTaB2C6J"
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
