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
    "51H2WbhX6zmiVwojbKHAcxLAy7d49KQKFKNzvFHtCVXyUp49FCUyYQaRVqoBbB9b4saMXqgGWkCZD1VHV7NwNwxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qKgiDDKHiddtdyPnTgxDD3UTgQSJLUWXPmLiRar4WseMcpARguUAAtw5o1AQh3WQa8WriKMZnRhHBT4ZVshKEod",
  "key1": "4nL4WUAAY1sJRzYHjTUfvj22uJgA1xSsSbNZP1hwNLdbwdK1m4v3qJ3CkUvqHHcjAEpTZziCsvDDzYxRhE3dxUsR",
  "key2": "27J8WTnVVb2xhbCXzavTnTHGaQTKkEGJwNrTZqtWnQobit2Di2gSVHnnamTzUEHK54E8HfS4nhu9vYb6hS6pxpr7",
  "key3": "3YTYB5qMXQUP8MVnASK3qEY5A3MTeBg9kwK3peD1h5zMqkgU8iaCHdQVUstgVHgbdMEe4ErqYHaAyhjLrrSCVphX",
  "key4": "oBt5WgBkxwED8Le5DB3vUh7jzivDnWdPDjsNLqULBa2Jmo6DPKHFcf6ZaFsqygH5Q4EU5StZBfGc6JXjaLhd3mX",
  "key5": "2iGNZDykBYQNp4atrmyUcqFE6PtS3xv9sP2FnM4sjU486bRmiZayfZwbVXyWAHqz6Pbz5z1MqYQncB4tZc9x33ZQ",
  "key6": "SUpTLH6fGsijBfLfYJTowMFKRKasMRGtMmmocqrKJw8igp2WtchoN2xcG9kRu7wxEXJjbfP9eh2sBhkWqjfxoBK",
  "key7": "2LZYmLEPHeaNE8CxcqUC1bCqjSXpVSVeRCkna6BAokP4QWKUzFuKUECrdj1NDcUqQd9QecHz5PZPmzG8qRkpn7J4",
  "key8": "5u862Z74aUwq57MBjh5BzUTLEgoMor9ht6n9W6AQ5cp6M8A7oRr6r1qaVA4ivEhUi6bd41bkk7eqoV4pjtMwUkub",
  "key9": "2i2AziKAJ71kGyr4i7zx4UspKbcZkyrNFHTreioprwCZCGzYfC58GdLKkJn1nzPZz7fKAxpPuvp5Yd5LQQB1QngQ",
  "key10": "2TnSTYLoTpS61ovv2njAbeVduMRu1qYVA6vi1XfKNDKNp4QDWek39V85jmhFGhdKjP43xURxGynAWqFkF3qsLzu8",
  "key11": "4brFqbfdPb522kdBFyMhhu4Hvvh3P2DD6XQ3FAKKZwKpBipkrPQiuVsc5h2Rdow16Ctg6NuCgQnvskouMcL11y5d",
  "key12": "31T9gBsP8f2uqxyzTFJ6pyR2ETmBr7G4ttJ6TfhLB6b2bFFocSQSMoX8BCdqQpQTs56dYjpzQLRNBU1QDs1cRz8M",
  "key13": "5chJqzDXUkcRKVLcirEBVSPjXXMrEbwqE2fgQ7hhBGNK3y36nnT7kuDwGjA4wBhKrDQrRR6sRYaZRUa3yNwyDnXi",
  "key14": "3FviEFv3tkb2BxTZXscuGLkGDcumiF6qprrMXSRm9PCmGhik64uk2mwdmsca7EVPqfmjnggQK4E611DYjEtSftEG",
  "key15": "p9tw4DNaCMpnA7XiJye5iJyKa4Vp2XxvJxX3Tn58MnMA52TiZkbxHpwNwCPcuYZTers1YYNcxpSRy2NenC3FfGZ",
  "key16": "3szUcHeYHgBKsBG2JSBuCuHgiRR7MVyN4ihuRi6WMsHAU96ajLQLiy4g7zXJeUkYxtVPjxKwvVTejf1m9jVo9JZd",
  "key17": "3LnatKTrBwVNjKLETJG4WCn2cYBgSDxw2rNbCTUoErgiTETx2HRCAusHHE1HtgmFDo2jFt5ULdiFVsWXL3dKqbkj",
  "key18": "3jfso4Ag5F1LTGubxu3WGJpgvsUng7NT2M6buUo2Wk1oWAgxoeZk75VXpS4fcvFemubsn7tyZSNbWHmxFtZviAEs",
  "key19": "3fJkE348RKW9CR4pHnbXUE1EFQFv1XX3jH7GhaEDCYGMmtiQiRRxN7wsFh3frmumqZ6DLWQbxyYZySJ6dRZhprX2",
  "key20": "2EAhbEVsfSCtF13qmDRezguNErDv3JbZ7QR9LRn4BduWhEiPQLAAUncMZAiepZTyYEyTSD2jwkNfsQmM4sF1zszj",
  "key21": "4rniGMorYLqHx9fjwwoCCbtHdeTaVSkF1wNGVxup8JAQRy5nXgN3Nu1Vo4qDGBSo9GXVobM9ziVzy9Kn6JuEF4MD",
  "key22": "5xq1dsqj7yadyFS7FVXYuqeNbtyrk8RWTpYprtGAThQfQkiUVqgQcib4x7rK6vj6ocu92MeGwev7V785XmRk2gF",
  "key23": "5QKb28UN6qwAaYh7hSUw3Vu3Jm4LNe1M6wGVTSYfgzDQfp9yzZDaPiwhgCCcNV6UkzFPLj7rRSDk5wHm9B4nQecg",
  "key24": "2eiNQdL4wRVCtfzxdkdYpWwhH1WaQ37hTNgjVqZ7jiPEC3NV7nzHhzQop3XSKJ5irKN6NjQGfAFFH9c16CeBi1Fd",
  "key25": "sFrmwPcFe9J8ZLKmSBQU149atiUA22B5wSjng6S9PEc1QxxYMsZmSbHGRCVe1na7M3zSsXBrUb8fy6MCdLC4izX",
  "key26": "3hb2Ux13dYq7QN9q4LWuANaAi9Mtr1ieDb14gaAZe31gm9Spc95w2eEJkh8yAkRozWPG56Y4KyL7MaFHL4e9KdhA",
  "key27": "2DV5wE2CDGFBmxMdKZAPCqYivg2LqmE1TvXeZMHLAjyoA9WAd36YRLMUTNGtdDj9PPnV6e2bWebUYBbFsf3fZbwy",
  "key28": "429ZAsxjjMFT6gb97xen8rESFQzjUyAbkCRYKqYMTzBF6toLU9XPhp8vVJiQ1PfKrBgspfd9uxxuDG4ZV649auGi",
  "key29": "62yuofBVJoE8zyrVahHXFyEHw5FBAkupK5xhLWDyKtyhYKdwz9WmMWwnuWtGRkHRwgGuHYZqJgjbbu7gWRL8EGip",
  "key30": "y55ymSJkiaf3BTdkvyc9G9wZEtQJeWVG6H3iunVZfwnSXunRdsZVWHmuHaHsarndoww2D4fXUGPZB25NbwhuS1Z",
  "key31": "2FHNPEzP5ZcsTgXw3czHTkMA92ZUubhTTrcSpvKX47upDRuomRitwbZZCPc5eJDvNA8h3YjzZNTL7vADJpA67n7S",
  "key32": "5YzBJNcMsBcMESgAeVoSa9McNMT6fb3XrUmNjVL89AiaVVRPUYcCTsRdibu4aZV5F9Goi62SJbkfsshpHDFhHfGo",
  "key33": "dqyisgK2nQa5Sns7ezJMK1qeV5Eqh8m6JBB94tHckLes9Y75NPb7cRwKHDmCQWmkr7AphXrqxRjGn4qjebWZ8f9",
  "key34": "q3CeAaGwA7aTfiWLTU6uSrjQw2Pp723WZoxdD8NWBvrqwmSAAj3fVbEKgdqSmFQw95LAWB3dX5TMQcZ9syBdsMY",
  "key35": "8jjF1NXYLUSeomt8L7ThpJcLsn43CMfYybKTDHHQggPc2QFwY9Nw1F3ispTrVDMWcWBE1xf4UKfqPtzRYSeHz18",
  "key36": "YFt6D6vrQCNSQQ79cW7jvD4FR9kT2nbzEFLhk6ME3fFrwFsbaDHvqjqJbKU3V57NXnGSSRwB7vPCSg7NahYDzKx",
  "key37": "3DBAcWgKkbpLJ5yNL2goskdTuiJGc4PD9nyAfefPcQT5GMWeqUe3VYxL3A2RZmLZC85HwMVuy5g58ut3V5SJth3N"
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
