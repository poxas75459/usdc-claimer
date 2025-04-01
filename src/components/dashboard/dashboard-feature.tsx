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
    "2nGbat56sYQp5AmEbxte7uBxLiWqiqbBCeSfraYbD4ArNJoPaLmxHUsHmnyT4P5sfUuXQV3noQXqgun6mCZ2qk5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WdJgrVyj9PB6TNfVWSAPNsoP2k2zzjX3RwvobUg7KAvvS7CMZfze7mFqQKAzB1oZGTXNbLFtHYup5JZq2JSjvJb",
  "key1": "3W5HuAC3ZosSWDbktjgaX8ZZsH6HGYk43XeoJuhSV282Jx3ApBJQ9scFKAc1Qgws9RN1Sh6TRERDUZgdaCt3C18o",
  "key2": "2GLYNrzkYZuUoV6vdpneFjgcRgD6NrCdcq6DTmgTtM7YAz2XcnNF4mGyXaLdrXNtqfcxS4Nb55Jaoq9vzav68ngw",
  "key3": "2RauPaD4W4bXztdd3bgeNSQ3VVopjj36PyHBfjRG95TjkmdLL3Gg6aLar9FD2c8jqMjcttXHiFomKS8namZSiQpT",
  "key4": "3BhmsgkDyduF3pwqGvMq3zqc3qKbGKnngHPuERe5y9LDXeYVfEL1scktBeUZqG8nKTFPUEfhji1G5PntPNyMFQZD",
  "key5": "3Lw3zHGYw2mN1G8DHZqedNcRhCFkhBdY78k81qekgAhFpFbkp6UE96u6UGt5jGrgQKK3iPk5LeuBqVuqtLQ44sWL",
  "key6": "315mRMvbDXKo9bTyiqUUMCkdLoEDa3Rg5FVu9e2NBGJ5Dtk14NdzKqkUM1UYZjfkfpQxP2XciLnRPCgvhReCaTVr",
  "key7": "63vhvJr5NkmVWwhsTGdvoPr3ciVtyxeWrqw8kmBu921EctSy4r8geFNAbeE8TUkjrGw4a32i66UTJ1uB8mb7sbzW",
  "key8": "PCUzGKFvrcCf8zSrpVuK2WUcMFANPswSDKbdgx1vtDaDL83phU7rMGNrDMTe9Lze9ozW8z4f5S6xpMESNBSTyNT",
  "key9": "pt5ua9X6Mt8wRAkvphmg1LhhibCm9XBwHj4r9Bqouz1Mo9MCozaB75oYNGC3UiANfhnyqzRuDm1VNZ7xTbf8sHH",
  "key10": "wCzb6svZrhXHahrS8krvgm424oMba52tiaidvUTgC5gJw7BA4KLxqNRTErYLanrEAZxriXWMB47g6Y9unh7gqHk",
  "key11": "4vN4nEEA4upPjcnA193w455SpKUTpzh2aKUfbGeqvZ9HfAuivcdw4TDR98SJN7BwsmuMS42v25Qv9Tmb78ZtxL1X",
  "key12": "3iUxUMpXHoQYb8sdHZQ4cYUNv9Z6VtZPgmjEaj46YbKj9ZW87he37oY3yodM3LrsMz7W1gq8qwEkSo6MxFFCKEJj",
  "key13": "AbWGwgPQPbkZgx6FZfGdBvFJhZCCZbJ4Mhi9Y1LkXHe1kVQ2eoG7S8UjNpcPz5y6oFWeiN5Bq8vbnfP6FeZNiM5",
  "key14": "2BRanqpZMqsqzE4HSoougYk4PPBogE8pTthie8updExKeZCZu7C3YfW5dWcHacducwRCH3FdT8Ma8zbwg326snwe",
  "key15": "4nJSrKBC6cNwKJM2UvR5Uoj2uWCs75Pe5ZFkUe6NmFwK6CpCkMQLTydSr2QCkHq5HNWNr4hAYqZJaSCwqx383fQF",
  "key16": "4z3yXWLX1HYF2pRemQFEi9afVSwD4KQL3iLDboNYDXSNmFjfZrTTYRVgXDUv4p4F6zV6Nscb3HxziE7yjkGdpen7",
  "key17": "2YeYAL3A2xL4FkGw5LvwmFs1mSDQQxr8fhvr5ZpXsyyPPXPUxBdB61N7wdhCZ2gNbm5iqBrXqkUdsLskJCCwESbd",
  "key18": "2VBpTde5ZtMDWSvY21gnkF94yJhWHM6feMr2wKLXZqBmwcEo33x3SSYRZp7EGCdJXEoAcjLuqwyfUSWS79uzbTbJ",
  "key19": "yVh8ftzReKTmcc4PrMoEwNyFwYLvjmNqkZcSt6CEa1v9fKvRkrS2Q7re8HujvPtAYixVCvpbHaNBgeqxjdT86T5",
  "key20": "eKvbJbaYEEZFXVLvgEvPPNstJwiprBc2iY5yaPVu37UTACNnMRCYadwAW6vaDsvDemXfjTNzwcLbaJuZnU6Uvfu",
  "key21": "5erbMYHzCGMf3uUk5zycNFFtWURFnahh1EsZU7eh9qKDhACM4iAhTqUtzgzwRQTtut5FKJkhmzBUamUji4MZp9x4",
  "key22": "5PjZMYWBGhwkSSopTQGuGzoqUooh7SkpxPjhE464jnQhAYcdf7goZmGrsMwefT4rN4FSXJRGTW2GDRWpsGaRTTv9",
  "key23": "3NV617PGguFUaF5a5ADaaPbBzYaDgAupb8ebUh6THFi8grSCyX7gg4Y8j3E12iBow3SsoBagsBPucqsZA37tVYEK",
  "key24": "2L43LTWQH36e5FB2yf4MTAjFNANYNqBVFYsUuECuKGvw4uixq2pa6mR7Ld2SNdH9wL1DorpNaYsho72o9V4opcB2",
  "key25": "4doZY8Gp7FHQwcK1Adr29oDBipZjoCWCt2aSx5G8aKWpLxyzKZx2zYonCLBvpFkbfjoyubFkGPzrJXm6sZb1gxSU",
  "key26": "5pdPxircCwu6yHtQGrf9APncPLpcs2WrXnVTrufgGGbcxMXGmFGmCKd8Aa8ydzkpErutMbhtRmaqyWtUzctJj1Q5",
  "key27": "Qtafe1gsW6uCS2RCLgK8pZXDRJVjJpe79G3CfE1DvTeppf8Ks2spT6yt6TPyuvgPAYv1J2FbriEiaZGZh1fHGKk",
  "key28": "5TibD6bKgiAvAbU1gxuiKwJchioRQqM3M8pbAYqUbFheW9kvvdwWMUxLytBX3pkc6QenjPmbkYr4Dt5FVPFiCUvT",
  "key29": "3TDHmPQKX3CESzzKPu3xHyTsHAQHHLgw6nE1oMN96CfZw4x4ohMeoz4KF9wSKcAX4a4UTH1UnuvebnDfbqidAMoC",
  "key30": "2f9wnSU8MqrkByjr2XveTzUXSKfD13hUcRS7tq6cV1h8EiVgArwr9TorowWneFSy7pZhpw9hoZWVFtDw9xtM7sqd",
  "key31": "21Rs4PsRqCW6sc8U6JYxwZUQ2SPFLdSMgrS7sjU9fjyzX8A5jcGHrcojV1KkMYnpSxiJx1UNBPXAGxL6uos5SsW9",
  "key32": "4tPohXWTxy9rW3vm2RELGvL87nutTsrFRXNFCgza4o8FGKpPDex9vau7koRLnZHD2Dc1QXLLfWqr5aycDkdBjmVr",
  "key33": "4SNT1uxY4V6JZyUaXuvkgxPvg7SvSdAcD3KCkAXm9CNkQuBdoRQQRiMoYvgC9f1UypUpbkan3LWGKGA8P2KrGXZF",
  "key34": "5cTpTXRbPQWGnHxM9944nygw7cbi1hcAmc9GzVMJUURp9RrT2TUsUBe91NeAyHnn4X3jkfFGcXo9bpLGaEaj6nNU",
  "key35": "5xjSzXMfzbqJs1brtZ4qSF1oC61Pz9NfCe5xS2dJ2Khhk3hNYnHSwAZmnqiqDBaQRULzaQDnXeb82NoBVM4FbGFk"
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
