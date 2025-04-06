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
    "59nWVpF2tSDueeJoUfz9CWGp8pJYGa3SzHTs2jbaQ1Qu61ScvukSUNis8v4FetLnqmkYf1PxDs6dGSo7r6W4tQ1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67AjkhXkiN4ZZShDu3DsZeQmvxB7ipbK9qZKb8HFDtHp8h1bHaZDtjKnGBiyFsc4MKEqEXtRGgetwAUgKML535Yo",
  "key1": "3x13o5NRXJ9hy9amy3FDQ5cG6H4sjUhAjZJm36U47LskKDdELB32aepCVKzY9QZC4UhQC4ci7ykWFxCRwRqoaqHw",
  "key2": "3sgw6ru25JLtnidHXnN6wgV63wNaHXfDLcwbCnxxcJkEh6Z41ZuhyAjeA5LpCKURhVXVTZq9dVN4YFDzZNxRy2aR",
  "key3": "5YLRtdNuoGMeZVKqjMskkk3ZbHcyeRh3vpbY8TsTLPSSmy1aNXHXc4SSoLKhaTX24DbJczt7HogEThBYqELXtiFs",
  "key4": "3wAmUaateKsRjjRAAFUHWkZm23wiNGgCAfEet7yijBvVN8wiVA1fNC4gY8gK88krPMNYN2QJp2B3FtMJVWji95SQ",
  "key5": "2cab3Vd45j3zqn25o2w6f47u6BarV17WauZdUY4ZtAepca5T2GmYM2KPoDVf47ggnemP38CRKgkTZudnM45rxWrU",
  "key6": "3wt1teK5EgTp2Gm1N4e3C6FQ5ZYCtn4cRNn4pAuoHndS3HkpyPeZFF6bregegJ6faMFAJJgBV8sxoFT7EmoFGe93",
  "key7": "Ugtp75tGAL3ZN1FvwhdiUJ2ziu1WzFhqZcqfNndps7N5oZabixLDubuSWKMuduwK21uZYQY41KJPNQTPppaELBk",
  "key8": "4N28W5NazpKY2AwUri2pcnfPQACMDnvDUkJksX4f3ZEfapechJBqMYvQyCD6zcvmawBBiFHAqcFk3FdtiTJMKYR8",
  "key9": "4Vdt476dfrsBfU6VNqDDnqnB2XA9gwJEVyS6VD5kyGNAEnktJMmwhNjbU3gjxpYBWDTZrEi2VM6mDSv87iKkzcRM",
  "key10": "4ET49BteKb4ZxVoATAfPS9FgtgAXnUddHz14Lcd5i353XmZ82W6exbahq6qLJX74L6B4oNjNWSMcazWZzLzhKYAC",
  "key11": "61p6bJeGgcZ7ZwGsY23FJ9pV3XP7NJjZCv24NSzPd2QF7bcCXjV7utTBeCxXwd54YMfSqaSjoB6NnUXa2LPwLzYz",
  "key12": "3MjF28xFDUT5ENZkaw3wtuJnK52AqpniPQyuGKFroLZP4CbRALgdZ2gNYrjQkv5AaRw5Zwe7LipLPYoznDFL63sj",
  "key13": "3Gj67A5bcu2sRbPhRyVrscJFjUizjrGCKZEHyfDUsAWDvHCa8q7cwhh4TCMVnJJM7UX8JcJCU14pR7hGoH54R5v6",
  "key14": "5uMR2kVGQE3ZibkpfpW6NQy1Dm149rPSr5VHybYYnUJkz4ewwNY71KZ2kg2itnpve2c21ucRKDKVZjXuTXBxQb3C",
  "key15": "5kx6oMC298DBWz6pgnWuXHLpYs1CgufbM8J7svDmE7WwPxMvyA15VQByoMYrePH7kuiURqovbRP3E4phCXGS5aDo",
  "key16": "5XeY4RTJxa2fFskkhJoZsSFF7cAZm6U6fnsThPQhPA5WoyK8N1p9qGsACiq3yci2L7jujMXFxFdkXG9Z6ipBEBY6",
  "key17": "h8TerufsjXFwff1mbNn2dsQACCrTN8ywGy1kbXWWDUZfSfkkarLSfDh6drKWz1b7eNpNmYbaq7yVx8aBiDuKQ7x",
  "key18": "SVA1xzB4czcHKkCLLW1JpphKezfV9uSWejJDprjqwKNsz27sw9ie4MZq8QWJGtKCZE7BQzF3J3zgCwqrhxNjswc",
  "key19": "5brRrNa8cZj7D1nqrBapvjayDvodZqswrxvfSex4RRT22Xkaaq4dDKyt8eCjADPnivrnsqgpZrbaXZsmCfUZrpn3",
  "key20": "eAAg3xTCc6wWyWeMYbrZSSgHhEXAE8oEZYNETiMug1UBeNMZUGYddAkbgN6bp1g2RUaWN66e9XnW9RXJ6HUcp5a",
  "key21": "4DvBTVvQTKnfqE7NZU3y24fAddyckRkS25osXhrGoxiMuTNnXTHp7CAjP5xKYPUBMzJnKQPzskA7BAscANac2e8N",
  "key22": "uqt7vjA4BFuLp7V3aJNmLXEXxDnVuFxyh5gPA9CbhwvhP79vMM8bpU7Gr2vL7hoFGYZV5sTorTJuogHqffs8HXh",
  "key23": "4wQfstLR95teRc2Nqwuivb3Eav2ENWJjztX1nqgtDry55Q2XF9587pb5bcGbgJsZnKiG99qtGcRgogjSMBqQiFKx",
  "key24": "VKvFieA75MrPwKnt4W52jFncTfKecgRf6ipRFTF2ak7xfR9GbnSnvZ8zdU846aqAPf4PT93HYHidCzB4nL4xLdc",
  "key25": "2gVF9A1kNR1tqhH1jsGbcnb2mA5msnEYwu4KJeqLb4xzesBqdtWb8WW5uNhBhdk7AKjzpAQ56Gn2JVCLFutafwzy",
  "key26": "4SPKRZHdVbtDLNQUjp4bCZwLvZ1uDLxS3P9zXNE41HBZXXhS6VUaNqjvQEDgcVMEZJzmK8GJP6dZL8hBfSLzJMhX",
  "key27": "3iUKmdKm1ZvoKuVabu2DyeFS4UY6YKbrj9iSTcn5hWLwBPhHnhiC9ob8kk43WSFV8Jgc9anyzi61NDtqTK9NUZXx",
  "key28": "2o9yD4nFm7VGuHwugxhygU2kTPYoGEvs1UBEghDUoCaVZxT7BHCydqQUpoQSs3H5BKDkBEBwCdJ72wfEWJ4cWPQT",
  "key29": "52pVEUZZfWbMd9f579uKj8FsXikS5waedrgCvNMi5UUA98V2Z5sPJTPd1kwaRE3GrnwpLMSz6JWCeCNhCJPTQPDr",
  "key30": "5uQA91kMGZj7vm6mDbPfVN7NEtuMWvzNozu11gBKGmnjx1wKYWzNwsirXCnAVAiv7CyM45jKWxLVNDogsfoTjGms",
  "key31": "5ZLaucFk7zFSmGVFFQEeZpCtwGZQvoMtGscFfCBc8yb6aeUWAcHu3Rkvux18Li5QCkCRQsTy6jWEzxNLSwmYaBAr",
  "key32": "3ftgmv5UdMrVn6ApA5XaHLG7W3RwUBjCXrB9T1hsfTWw1LrtNEnfDfCLhG3DGpisSaCLxnLCRL4Tpj9EZkopXzAD",
  "key33": "2wtWbsgzMU4sKeQ9oM9a7tEQsZdn7V1DFqCGtajHzqzARaUjr3iYzVYZiFgaUcMpq7Bxom5QMi8uxEB9vZegDgXp",
  "key34": "4DW3CxQjytqvcmYhzGWJtrWmLKQmtucEVC2ZYgkD9qcmmZMWYCLyxabnBzKpRoikitKv4ku2CrBWAi3dikj5rBSW",
  "key35": "4G7zmXcDbNnojJGi57JcNWF6oXF7TmRqcnMrZy8TtBDZpU96t2bkyxdDcQs5GzoGyARvtZQFFBs6gQ1LtDfdEwWM",
  "key36": "3iZSQP9kcJwuQmYJN9Bpp76y8Cq1JNiqkcqiawGHa9rAShBK7qoFZXHN2BwJPMpgGdAZK1zZ8LzVDbbHSX8oTU9t",
  "key37": "dcFCtG1Yut18edEFWhCVsBYa99wi6kSmDj6JngGW6BLpXkKERKTj1Gh2Yzchimg6Y9gp1fEj59Ac9ccTBhGsVjz",
  "key38": "3KoA52VkFKZsbfgE8ffJEoQHdsctfdSUJiUBkHgfuHC7en2KgeBZNAUdDWQWjdUS4YboCKf4QELwBATiNmvE7Fvi",
  "key39": "4WeuhSV6Qvppecqwz5GanvTu8fj2GJSLBg6b61gAica1MUtdnh5ZEco8ZmzBTB2he4FnDRJ4EUvjucdcUxnPoh8C",
  "key40": "2WEe6fXYuioYkqyL8AjPHuYWiC1sBw3HHFj17mrbSQvJNWoG3uCTKdSze2RsuzyiNzakzHtr8PtTzLrKK9f37z8m"
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
