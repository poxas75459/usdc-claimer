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
    "43tvT6cazAq5HwztzLYQtPuw717LaExKLTahhhXKS2Nz6qaBJ1dCYUZvCVrXxfF4rejh7EMXj9ziWfhZWuKdy8Rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S3k9rtWU28r7iKWm1QvptLEVqdqf7Cc2Zmu5FV9wL81WFgdr6AYypzzWiq6kwATQ4bmDGMPscW9HEFfjevc2ua3",
  "key1": "4RBEpNp4FUYqFe3BrbikmpwrBrrEeAvYpN4JRzmkSbn7PwLKvwuMEoyHiWLxufSCCRCYAtkssXbon7RZw39MtFSQ",
  "key2": "4V48tPf553ef4KHBEekXdZVTGP2NXG77bRDGjt99KmNL6B9QtZpyqAwAp49ue4ePanURQeVsSGLunQJeEfj5jqAt",
  "key3": "5xdXC65XHsRGGub3HRzDJ5nQL4gZTua16Siw9seNeUpwu8JuYxcL7NTjzvBiMhT53LHmG5mMzNzUgnJpXLM6X9Sy",
  "key4": "4MN8UZ3artB6brUwbQQEcddcqZCLGgpQMc79GbadRXcfWMJVGrEeA43mtHkFfXKrdRFgndLd1aZ7boPU7vQ4zEua",
  "key5": "5YxMDPZ91DiLRT7t7tnYBqYbQNMKH683URx9A4oDH78Bejsnk7CJkCoSfU1JDKdnuaV3LJAnPp6TFZjcFaCqLgRu",
  "key6": "3Q9qm8MDda8dkFcPtLPG14VonHWeXNkya1ZgpddckemGQoVv2hi8Bf4cYMv47Hx1ZxFgayxAgtQuKyJodBtDTodQ",
  "key7": "1T78Jt9ZURV1DZoAY6ouHNSJg6j8HAZCFF5k9yMHnBSfhd8cVCN1FZ8CJVV24qM2ReJ6Ri7f7Y6ggmYQhBhJ4dP",
  "key8": "27ujZ8ttfhu1xE1uL2DZy8hy2c2mq2qzDs7yoJdwGgnbtDzr7UpA33594ebehvpJ9tieV6EM7SoyKkbLV96xejQH",
  "key9": "EjKf3uA1nSSWbQXRAFjAxmQdFwh9AN25i1RrgbBXpqiNK9iyThx8yk5n2NYysxJgUWbiYWqQmPD16yNhfd88omM",
  "key10": "5JR9T9Gs6Dru3rAPCFwCQgb4ENrM2WbVckVTsd1BNhtQX4mt52VDoR9Un7WGHRS2sm1PryQwWPorSMEK2eFpLxnK",
  "key11": "4nLfLbWqyEumYREdRYxewmr1RrLth2kjRH5f7kz7dka77BxLSjXKkRg2GWdqg7Ph6Mjpq5o1aT9rbNGdyFAEtGWZ",
  "key12": "Ra7FkrNVcXJHKoQ4Hk6eaSK1H23WJe9HRb6JvFoc5RMUUmZXciYpXGzXXKqe9C3Toat3AZoH5NVPt5hfEHk2CpD",
  "key13": "hbGKGyTV2RHiuRTJCBeNPyV8LKYL3nG9bAzkBdfhH8fsasDhDUEXtovQgcgQfqU6nV2UEB2ZqvM18NGxnbs6mm9",
  "key14": "3S4BgFGuCn1XfgD6azUv5mCpSBNm1AidKEP6Avdpj9wgNYdwkbU89zTveGQ7T8hjYRXYmgqECpCtAdZpiqHphxj7",
  "key15": "3XDWd1m1toe3CpNpKTsasqn5iMJg8KwgbCFWVaXGDnwKkmzqUoLyKz7pABgyobPXN4zLLWjZMksMWZiQ3ds1HGki",
  "key16": "28EPkujhzEqiHPEf7CwDT3ATvGoyCsxEYrg5yBot2Lfu9Lcn4ZeAtdxFDc8JqyRoRes1TuFfeyAn43kx5KpA4uoo",
  "key17": "34mtYEJLxUCQCXGQabhiifWfS8HQF7P5jcv8yzJ1nPzjMKBHM1kVYEjfQs9j9PSYdh9JbPLzqUwscP22b1jVBQMV",
  "key18": "2EU2sH6PUQZr8yF7gjcnv9DbfeMNoVshsdqFYJvReW1YkU2GwLsBwVP4ovWeZHPd3ZDkUybFoH8iP5TKf33aQwDt",
  "key19": "2676ZW22X41R1AM6htP3yH8v6cqTpRFemAjq5CPjCuoa73jdyVoL6XD7RyYSp37kCcnRUnWedkzCDoQgzp9Vbn5c",
  "key20": "2ZMohsNnsgChwfoNwPcfSPKm6VUd1MVHLRZwzufHtZB8rRb78MP3e9DWbHCYpnT2RoByhU8eAYY5jWiAmn5LuGGh",
  "key21": "5ob3SVV7JxsPYHpg8dfHbpwx4bAJQhg8rxd7VhmEE2CTQwazC7CpZbsoYypr3cfQL15MLBMS3JKVCXTPM3mZNZ23",
  "key22": "2PTrk2V4bzHpnijUz37ixFiHd6aqHeeDfcReDCR5XygWVp6egeNXgtf15FekYj2SBXxCxX9t3s8F6ETkRJjkqgTB",
  "key23": "2uU1nadxkB8PQewdom9ypJxhXtu77M5dcRZMkjRtTCQLBvJgWpSU8SCBa3dZh6tGj7PDRvUdgewVJZCuhYyDCQCx",
  "key24": "dZ33t8uDyQcN4awnV7LiEyiSV7SeKBgZo5t1wzGVQCQ7vipjrPH35doTtJBaUBsRvf8ALd16PvnQX99v2esNuBv",
  "key25": "54y2bnF6fWUJzJ4m3TuNw6JWQqq6Vnb7pWcs44DrvvcKnEP3aaKqBSJbnmMmrYvudKizLc1vi5kj6UVR9vMzybJ9",
  "key26": "2QPBfGwctNBQLTNkx4acugxca1jQPRsAk5zWjCm9NFXBC181AUJ9yKudV7QPigBSNf9qGrYDumgi76yqR6GtEM6G",
  "key27": "3FU22oQhyUfW9LeBLQVcjaFHQ1AAfFpepi7sCkU7e5JAGiSKx5trdsnDTztVbxiyLYPvyXR6ABF2u8nM3Y9icai",
  "key28": "3oBkFfgrKn2zj7LMYMMGsG1rzShMTarxwvSNwgJbDgmxBHcQvkYUajiBA4PvFKRyW2htajE1fFhV7fd5RJpb4YaV",
  "key29": "55Rr39cWu62nbGwF6Bz4eH4VqMToahuQbtSFhrRWqQM1ftotFq21ayWqKRwj8CD92ozFXXg3hHDdw6HonJuxpaWH",
  "key30": "3RgX2oRsjucjCMkWhW9nF8rdzA9r8SSs6Bw7YTjVEyCbJZMVa7588mpx9PweH8guS5N81Cmhx3ViLYH71R8SwYnt",
  "key31": "4pUm5WrMG382eZfi4GGdBYq1hdoi3k5T54DD3XavhzGNDBe77wknNvregEDz33fAhW3ZyB2KQS6ccYUB1KhzUe4k",
  "key32": "4QdJdbtPbPscLjVi9uqKBmc6axdykUpw5puYYxkqJpUEAhQHQq4A1JAxxk7MfzrVcA4gkT6A1szvbYdM3SDpf4Aw",
  "key33": "3ctibJ4V3nogTEy52wXACjwNV2ZVhu68DyN6QqtndSFPZwdewhSPaNosHB322VKSs6nFpSfaCxRnoLCUZiGsAfbG"
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
