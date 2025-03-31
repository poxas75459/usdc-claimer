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
    "RUHXTs4CuX1zCMuCyEktRRQhvScGKu5dCt54bbA7T2kJ92FUMJGpX7D1ZPnNm2C69GDLen8W9AhY6gTCeLmqLvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65i8ZY13x6CDoq9D8fE5uNuCS5RVqNoFmYkhSUBGkyAEnqNT95maZf8TFxvTdLFZeana72vJ8oR9qKAiQZFa997j",
  "key1": "4ZVwerhmSWtTWmFyMULx2n7d8eBTv2T1oqGh8KZcGESJ2QrnedAPy2cUohr5dmCphgStBKGCvziKH1NcqDD1uDXG",
  "key2": "678yeWNEntYMgoiMTWN8cnu2pKwy5YRgy4KRuMwuWtxLkDNWALYxm45aUYezX1DoCb1cWs7XD6zWFfxJr9kPmR5k",
  "key3": "4petwuZHgTqWhCjteLyGeTvCLb3UPyrdAk8sCn2FEuD38Go4WSypzcSzk26ggYaKMNrtwDLNznd7igxGxyPZ3QgP",
  "key4": "4Kj5QFzvaKpqXxsdCBtRzkNCHZBQoQFYBGyoANH2rPxeLFEr1Xosvtx1DVFvC8s6X3C2G2cfMJXrXKT7qqVZJL82",
  "key5": "2bEkhmaWqGSK5k8aLnXdNohdzMh3n5oyNGzwn5K2FaUBPRf9t95FrWwZ3GkgetkZoAeRPzpRojBjAitNXDaJ5Uz1",
  "key6": "2zwRofvf5wTd6uBjyVbEeYxGtgKNio19g9rW27MNMqSVFnJaVTWh3kuv7ZxQtmQxVa1P4Ez7Kpw1asL3jstw61di",
  "key7": "4fc1YJLWvPcknPeB6spHetKnPpQcaZb189JLMJqS2Db7BkJw4XeUQQx1tuigVofBbUwQQyyocTTpqknUnxDXJ7r3",
  "key8": "eHqpoNpz9LabFq3DD49d4xXc3EnimuY9LbCSdtbr5uFumdWZdoHAHSBKtCJPZuC8Jh36f4rQfdWPAnmZSSwo81m",
  "key9": "62XqsGeUmDZJu19azAfhc3Rh9yKwNQEE7st8Z7Tqw1cW9jHYV8W6RHWuaWWWxgApknNVbKQ75ryrMJHsRyT7ssWR",
  "key10": "3KGXtcsAyDUwLo4VpyoLbgP8v76qeutCGy5PfZ5b6hG4aMqPUP3ECwnd28HgFFt6Tq9JD9vReLkkZ9LN7uWmMJYa",
  "key11": "9YcqefdKEuD7NwTiLEhYLSAa8j7BdcGRukzNunrQz6xhZPJBdihc3n8qBdBdenSbmVzzDXiynEs3WK5MqV74hK5",
  "key12": "36CBz5krn732a2G9U1cK6epdpLnNtfF6cedmacn7rob4ovwj3XqSPnN8noHVvWTtZmPrVoSJBUH1xSxSJ66W8Wfu",
  "key13": "2nWbEDVEwusn9c3pxjXPpbviKHwHjhRzp2gjQRhTsJYHpJTUnV7sjLBzM95KhaFUbcebgPCaSHEDuJzRbZPeMVVW",
  "key14": "2HQuz8G3CYRyx94W726oEdpnh4gvhEzkzZLtEnQ1ZrLCMNrLpqr27LMxonTg7PQ3FZTU1595nPGWK75j62J1URYQ",
  "key15": "5NiNmTvMFV6YewJUyawBPQ6jffbWzopvCXLLXA1yh7W8iMYCedPpBC6eXM7REbDh9RysRovj2gcrYjRphEQZdkmk",
  "key16": "3GBpavinJYVmdHtkEcd3iXk1y1THukAfS2PKTnBnqWFQzGjcQhtuEgigL8z8HNMUQrjiKkwxLXSUVAKt1BfS7aQa",
  "key17": "5Ks9R5soNFHJeNmBHKXuVy3nQ9eYvtZUBcMKa5jEnX8CoTPcyjV623dBjuncyKdgWkyngBrQjx5DW7xx6EHATt2p",
  "key18": "3Wz9CiL8pMJpWuP5QzHEuiT1vwaFmLqXwWZJ5EqPZ85WapGNAXRXgMcad5oT1UmLk8e4FQ2X2WCd6XWZXRf4Jb75",
  "key19": "4ME5H2ie7SzXpQvu3R3Ma1kJ7DnsUd5DZi8GqEU9vg9nhbCXWgZbqKRcczjCvvWM3TK9BsNyfgBVL9L7SiqGLHMm",
  "key20": "5P23CdJDtL1JUhc4GZC27YwSaTaDfVKmj1VdXaKGhkew5QUhQrVF3RHxSDQ7SSinnNGdLxJwboVgtkWNTPkc3Y12",
  "key21": "43W3AnjEd33D1uLws42funPE3yTwzyH3KzKgXpms6wa7weEVZ521ManR7psnFxvKdxX2ibEp4FrEki4MR7BwJuKH",
  "key22": "38GWwxwnaXgxwoiPg6DtqU8WsB7TBrykajSCNeYPzK6ucSuHjQ827BRrjpjpbge1ahuXyM53rkB7nQawnUprThAR",
  "key23": "DXaJywdFSimDwfmcjoHfWXxTo9CpkA5cfVgRp9PKxYXKPQi5ogsWc7UHtAut6DAueZQ1vAMiue4duQy4pygeGgs",
  "key24": "4Tcg5DxXZzbrCJLb8u2mw4dzpE5ydMJPv3dw5fy6ZQTWTV9SfMoVLL9p8Jkdws5cZJggBYztEqviocecwvuUa8kr",
  "key25": "66ziLAxif592VeQKaCUYVJAZhQRkSGK8KUgAUBJeg7TChBAu5QdzQfeZMw2azuKLHbtALdRGoRUbWeTchYrx21G8",
  "key26": "4XaCsnuxYptuzFsrkj7Bo8VE7VzPXY8MzdkzuduQQwFy6Gt9qc2CWpNC9SZJkhPWP76ZLDxX7eLCkZXRHSRcQWSm",
  "key27": "WW2gbhEt348RGtRtN6JHoo6MsZdgG98FRYBTR9a1WYZjqgPYqbZf2QJPsL5xAg7xLr69bMxQDegnpjXpCjyvLFY",
  "key28": "hvvdeQu96ggfjKLYe4vAJqV3kHSWoisT7HqKFH5ahhCpEeUTGV8DeYvr9X9tpzyKsDwd5NMUNzTHNsh3HHpFS5G",
  "key29": "66yd91PhiwxjjTEHuGDdp7ZpbRMNTNBYKYJkyrB3H6TMsau85zZqa4tyte2WMEfC8izFMRJb6w75iUFe6ob6K7Ff",
  "key30": "2NRry81apuVWCpA7Gk2FLw6P9pqtofZNM1isqfXs6wQEZTX2qrm3swAqFiDtxwNWLCfL8ihaHQZBQWxAkDoErBUJ",
  "key31": "2eeidn4gkQPDZ1BnMKrtyGY6EG3G7B5gbsk91G7Ng7yTpbpkZ45unggcNssPgu4wrFqKaUutibyxejhrkBtsRtKQ",
  "key32": "5t1P6NrXPoJTfKmWEyN7NPddUpScZXC9ZvNEFJCpNH3zDcK4dpYXkV4ZyBpj5xwWqEsGuGgr2D9kiFBvb5ZHDLrX"
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
