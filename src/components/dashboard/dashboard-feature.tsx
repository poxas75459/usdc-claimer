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
    "41wUTVLQJ1BFccfXP29ky88sYTQkqqh8fK9BCMa6rNFZEVDvWLZxznSnZUaPUQiHCBWiMkrZipL5WXkZ8jhpPRV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b3hhTmtMqoo6wD38j1YBYRsvqZLFBo4P9wHwQBmtyUYkrXi3K1e8jaE5eVgCqFKQVGUmbWcuFTGGvqpEY7LTs7N",
  "key1": "3D1jX9Vb2tX51fXsSy3cvJBdey26gTpY3Sngb9zKHrnLWA8DwafKqa4rd38wURzoHcG3vA7ytbAq7pnd53T6vbBq",
  "key2": "5DurcxnCCooRLqVLYoSszDuUJLM8R9rCA1wKpcnqnbadbLBknCeFngcyzoUpAcBKc9GFsZjnh2CyZRd9KHoEdU6u",
  "key3": "4peKnCQojcDXsB6jQ5xsWXrRpe1FxbuY6jeREjkPBDPmD5idEJNKR56RRhPpvaxPVMNvyZ1ji82n6HoYCbfjRuRC",
  "key4": "3xr4Y68md6irbvRLzKBBw8n6D2JCNZEvHiFjMJ1dgXfqGfeCu1EQxShgApLtcqeDsWRH836Y3hpvPCNwQhx42ed7",
  "key5": "3bxD3j4mNeHYikUyyPn9b8mSUCfRr1279HZLR36WZAy5f9sjxyDUYAs8hNU2LezViLystsN8R5MHbE31gT3Qfuj2",
  "key6": "4PJHnNhd1vgpwbAUoeLT7GvMDBVu9BZWQFec7MP54YMj9RtEmfNW395GQV5rnGYMm6DDYW5MnHcLWoME91dBQJif",
  "key7": "52RfVTdsDrxzP7jLB1bUFDNMnm5DMRXyBCd1BvcjfJRCLjhzvS3qPogVhybSP5Tt4ayVrRU53BvXckybJKynDDqu",
  "key8": "GMt9BQgU2DJEEsHHNXFdgwWTZaMgs4B4TqKGkDTfwtha58w9Fnq5gLvYyuXRmzzNzbSTUU3fvHjwh9WeUrHNhmS",
  "key9": "4iN3Z28gdavRKcAySoNE2R9GpJkVdamKh2kMxJL9F2AzSvXByKNNDDHt9jPED7abXf6pRbsrVonA2e3giKN4L6Ko",
  "key10": "3f4msVNwLro51htZF2Hd3qxPvsB4sjkQDtDud4ao1LjjHJ2V3S2WzWv49KyLtJ2nVRzeSL6rMCeMG8PB8jxXkQqB",
  "key11": "49uA4tMrSfWpauabSH9Q6xHhka7T3bram9imM19f2WoMmup4nz7zWxvLwFxw1BzFTu7H2T4j4qqsfqQQPfNa72rF",
  "key12": "4Q8xw4DVri2fnkQ2U9pPjvLTk1hfSHGKvW6mVYxSPfyxBWRaJrn8YLmxGLxpEPKabkvaR8w9CvY3fanDdejbr6tF",
  "key13": "SQieTLsmBxB62M2dpZfcL8KEndXxrzUY8SCsr5ChisZoNdexE6L3QAgNkhFDGayoA54HNyCYzaNcSe2S87HMshK",
  "key14": "5JHL4vUhzvT3ujdY6w2KxCZnS2tEMcFU2nKhH4PJxyaCgZn8mmUR8Ek1rw7HnWBrfdqbiJkvYx6Z85mSW5LaPypx",
  "key15": "2xK1zUkF9BKXynraTNvhjugVqiWEJHXJocRu9NekuY2sCZK5B2dMtormrwaYGaTER5kw3WmvNxU2ps85ogUMMvc8",
  "key16": "5GpC2pZqA2faoYEP8i9TZCQDoaiYru2pexMQu9TnMdp3cgs1osKKMX2AVBywANDfvtDBGvzmSJGBy8QgT49KB7uQ",
  "key17": "WBq1Pd3MRb6Yy3FoMqjzai4LrpyGECcozqpUF6RVEHSsmVm8hNsbfXubZW1LKrMnLcPiyuJCKpNzWSYdrPx98uZ",
  "key18": "45EMKHQRRa3KGAKbA6A6mMbjfUTULf33Vt2j2LaPceCZjYLWE3ebhjTZNPTL6NsMEAFWRmMituGjAMtVUnntkKxG",
  "key19": "3oEjyFMT9XFt8mxt4f6jmdWfRXeBUtn9UML4MYBf3aDHujKVa4szUz1vVxW62pvz18M8rdzSyEYXEzZh179eH8jV",
  "key20": "jnUsp1ecQqAT9kyEMtWPbZn4vADwHvAPReFnuAftUEHiATg4t89jMjxKbv1NousdYh5kqG51qtiwjsVvpTzvuiq",
  "key21": "3moWqmzmt8qLEuknpZWacmqE1bve5Sob7qNE3MfCWPxtJTY6jfbKXuAQrRGBv2fEasE5FjawLhH4EcuzuEYrbkdv",
  "key22": "5KgFXkoTk78jQz7RRabs1pkgKSsY9AnbYy8NJpcKdYgyzGFFEVWRXoPA3YDLLPB7p8dWxWtu3qtFmSUUXqHy8rJm",
  "key23": "5TwxjFWPYa7uZq7uNoHrkaUpzKcGhn9nAxm2mNHeYFPaBuNUApTFJHjxv18eJVwwePYH4QnW7FDRQdTT94G8QRWM",
  "key24": "2TbZ7dqmRUhT6FFVn3okGA6PRi2WPji7Vdd8yau8sAG8zkyGj6p8DGBJr5YWt9iof1DDaLvY2oj5bu63GU4prgpD",
  "key25": "2uPhw7gBwJdfKbhUi96zzpj14Zmig7X3DEXhQmYH32rbT7tBGTdBXYYS7xUiSEnREviEpHEV4yu3wMDDVEhxYLzG",
  "key26": "43wcPNFoCequwcYv6qYrSo98TqwKRJGSnfGdxUM1PmxLvMGptgFnfzAiNxN94xeMz72p2QFoj2Uz5xfHVetJEPsH",
  "key27": "56J4NNMECJ2h1PvRnxrJ5AnvgWFMvf4iKaDy9D1YSi62bkGG46Sbj7tfUT1sZCwMx3gBd9nUwaWEmU1zap7NVo1",
  "key28": "4NSfTDPZWkT11mwHfZCAHquGu7ks6w8Cwd2gYMqtx3kTxcC9ViVBjShA5NRep95zaQBWgUWrQFY8J8FVuXR7y7uG",
  "key29": "3UU26Pyym3cKUhLmQZ4ozH2sHMtoxGcRs2HCE3KjLgPw86QE6S8svuwwynnmG4yhaHCHcVwE11JHPeVNa1bjAZQt",
  "key30": "2BHdj6UooQoQyjsPBnzNBRrVkStXE6X25TrUgjXtUW62WyPhD4njovr7WQxCnmVozpU89nEzYLHA1TYZmkPYXopP",
  "key31": "2pqsMLMmNdKuTGHJZaawbFcSj6AL3pxvAJ8Ww2sudoEtxU2XHVRChuoHhyzhGzK9QnTxK82Z83X2vuiraYdXkmAU",
  "key32": "2rGRXh9ZX6TPsmHgHRtHg6UnVmQRSPECr8SwEtihZpSAqFLT7iGZQvy6U8qfJcb6hFP8Q6wLQtPqoUvgmjfCCAdC",
  "key33": "36ogfuiYobesCtkXz45AmUBMPcQ65oySbAmaoHPMuenTEybWPokENUyaCrixmcLBhPCd54Febr6jy2Vo6mSjTkcZ",
  "key34": "4oNLmBXoxHah79v5eJ4CuzCgSW8wmgHPpDFqABteaXfGUpwZFnNr9tB1E3CNYbShfvTnNHoRLR7y4zVccEVStEaF"
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
