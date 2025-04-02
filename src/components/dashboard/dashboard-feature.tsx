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
    "58PHmYAJsL14uvhosbf35qUWY9iWTvad6SqYLmHtfovJmPZGHbJhJzWoP5dWTrpkU4qhP9hYj61TNNTHtmGPpB5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ciEqdcUadQneMBYdMN9t3mFeBcoVsFWBm48aDLWNzJbkiak8iYPk11SecQGtmKMWbY322zYcwQGnRBESY4fQ9zN",
  "key1": "BytApMettqVQfhpxnM3xTgyaspEMSuixa1Y8AExgWMs3J46vMhmpKmRtiAWB35EG48nVkNKVoDZyz7UhyUT9kM6",
  "key2": "2YQGURhp1FfrF1A4NGyMiWnjo4ApLZLes6ZEbpm1ToCWP3QwcKgHAT5v2axqsCNMVsc2sFUwhWpX7Wn7qkKYR2gH",
  "key3": "2eA1k5SxmkJNRmYd2XTqUyrs1wn2vrc84PnqP9jU7cSskkdQcH77qENwYG2kjgCYuYxQkCAipLBBq7yaprHLvHtr",
  "key4": "5Ai3vTRuQyLBGX5HSLV11YfQmkbqJeFJCYz6X8jNwjC7cftkVFbdWVaViyMBpgFm2n8Q5yHW5qr3S4aWgU5arc4S",
  "key5": "64NJqZedNdHezhixQFqdL1Ykh1J5TsMdkp9aYeGQFPjE7uLqh6vZWFR22W74KrUs8iqZahawHzFkHZ4shq9H9GDV",
  "key6": "3J6m23yfD7PpHkVAgXQq9Xbwb97xaBnibQFqXxrvzq6TGsj6vJDmFaJSGgKuz2FB2sEmUyid3wwT5PrEAwtSMuYJ",
  "key7": "58YM5Q9npRiAEpyK2fUCFd1exeZQNgiw2YHYKgWn2qEMs199yP9pMkFirqW9HqNybPNMcs1wHgPoob6ruBcj9puB",
  "key8": "3LuUfVPNnXB3mi6BfBV7LJ3coeujvZ29MutHj7SippM3WybQpfWpfEU4vQjSAxyYtmzLhxourZXv7iENggj19LUP",
  "key9": "53iq1B7Upyr7hcsiZfRjff7ydmUG1dtJnsrnGA38LHAHEBcokheh3tShG72NvSE8Kq31id2Y5wAj7WTuqf5ctXC8",
  "key10": "5KqZ2X4CJ89PtyY94uAiHwBVtyjMYJv9yG5NZeN7b72KGtLfEoNQjNvhyeYaC8uExXVPg2JCqdFH4NvndEL84Era",
  "key11": "2fdwU4VuZdUVUnpMuziApUxLoYWr4LgVdp1TAxERgoHxLjwCNtcG4qF9pXJGBm4BZ9xuNDwd3Sz2SJeKaF34EkGq",
  "key12": "48LRAFSXXyZ5nGcYfEtZxaNzP3CcWVe62qLAWfdwK7DxeAVinCoSueYbLE1CLACVS7bCuTsjQTvURNcXX74QUsnW",
  "key13": "3xEy3eH1JoM4z17nzrrWrQRW9Px6Do25icR12cxKXmbi5id4C1y1yYgxT8Za3uTfLKu85Qdr9VnmtPfcGMNv97aM",
  "key14": "25S35vAbDHQawC7gKg7Ce8YAqDQdAKXZ1om7zaTEcUgNw7Y8k8JSfaGCs51aV2vyYsCvcGo17MSxdsWPMZMZZ5fi",
  "key15": "bGpjM2BgG8d4SS2uj4LNDP764VAuDzV9WT6N9QakP3SvGyCEXictw95khDURVGE7Bsdwo691dKZS56Eda1DaRwj",
  "key16": "2KcGyRTfwwGhoSHHDbc7tSvDyfdpnNKsV47RzYhQfgHmv8o4RMBP9Fw5KVZ1Kh14c9N6UoLtsMg5B7GD8jjsDBxf",
  "key17": "5LxvxYqmUCF3LhLCNR73vVpvBSyvNVmShi8HyUQBEkD1z7LSpAtYQBDsoEQ61ggpedrJ6y58LU1rg1FSNQLC25N2",
  "key18": "5k6LD78DrHTigcfHj8ANWx5Bp68u2Ngd7XMozG1AzCm7CYkpUacSTNSAqM5hbZ97MykbeBezEPMh5eXpWxQHZqe3",
  "key19": "4rTXuiiVWyTzj5wqHWkaragRjkR8HZBFzf5zdDJD9SR7d3fHBmxhAjqFkwv56ZEENDd8dhSFm1fzHgbsLpX62MQf",
  "key20": "r1AWSy3UgAeTEYKvXcC8L6hDvQgR9Hu8F3MVjTZ5bVErhEmSd2tHjmfzrQjYLA3pdtfDgoyx1neEYswg5LLoHj7",
  "key21": "4caGSayTDHo2hR3kgVUcnPCjtHQha3heMSiYn1LzSoUKcVTPsdqxJyFGMguNtTAkUJvTbVbZqXyTuBfAeimFrJer",
  "key22": "3Un75V7S3JzFtynzV2ZSD55QyztcYAMSi2GmBS52gvGvELCZCjStBvh4GG7MadZsSk4TJ32h4MnN2eB3iR94RJDa",
  "key23": "4MSxfTxg4HL2PBEABUC6C3916bagEYxNd3gwz1D6YoNA6arFEpLDmzaQuLU6ZdReiLs89CnpxzJ5D3gPSSyVqfkq",
  "key24": "4d9yijvCrWDNYUB5D6J8ysafYxm4HjLhuYBcALypkRY7tvDdnRrWWjhBH8p79SY2zu7H4LEfX3xsSuDqELsALcvJ",
  "key25": "57otERB9NzkWXLPag8WkXbrXbnhzPfPeMgjFc9j9NbHDjRmde76z5U3YrRYjLvLWZCKK6jriQxm9ZW4RVvvY2AeU",
  "key26": "4zXJ1qWTL5BXne7rGFbiPRWoqb3RDajGct94iHdHpviAhgqR1faSbzfpK9WcdeB4JtRwsNhN2UnGZQPhgerGukw7",
  "key27": "rXs4GFquzAUu3L8dK7tec7cw4EXcChPtupujFgrLHDKmWkw18CTtfbd3e7NoWw4wLkiNYQKuA8LGT5M3eYuYP9y",
  "key28": "32no6134XioMQ2ZKQ5gtc2vALPFFqZEmjy11AushukWFKN5c515tjHkf9xJHjdQ77W7Mxkg4Fqu6DZhTnyJD9ei7",
  "key29": "38biX5JLSD4M65Zq3GY9betdZUAA6cCepeVWSdtjYcWp3zHAtnAfc4CRCFB2bkFU3m2i1YnDFQ6UZh7omSXUnTGu",
  "key30": "2CK83PHvYJeAYG89zao7B2GN1pWGKWTggF4npo1deMbKLJJvkzZvodtSjZJAmnDAMSTFhMWJFP1cczYoeY9zShFH",
  "key31": "643vFoV13PtCzEmQqRQYQCpuCcKfgeojZjLY5XwFSWgnwfMcoagK8wSx4ZxKMkdrxKHeHv2KJRDDPcSWXo7xoqf",
  "key32": "2PBF7QggFowBsU2dCq7pDZ9ZumV5drTdMmDX3ZTHpUqdon5o9yMjpn5Vwb8YBGhNCVKysQTXwdDUhTGmFNvepPwt",
  "key33": "5rQDDDr7T54xwnmLkBGn8pzRuighHZv3UGBAVEHjN8ivsNYm4AAeZ6y8E3ecLyGU4DpoasnekpMMhLkYWvJV9eS5",
  "key34": "3FKsmMn7HD287r9DRnKDfvm8oNaMk6P3RSc7JtiSQowJdTdU2Em67Z5SjAsRfFqH2pJ7n1dVcKLzsk6TNAV2F4v8",
  "key35": "29CV3HJCaSqPGKp8X2mEkhjWW4tWV3nSvvKXvQ5u5WonpDkMBei1cRGYwG3SZJwNx2B6C1ME9TRu7mq7fHz4KMGG",
  "key36": "4EkhJsne5TaTzCGMQcBKmABiixphAo8Gnm6qYHFn9kJhyGJ5hsPtNAx9aJb9D9epeZ8tR3it7azems7hCeZxuLts",
  "key37": "2uH6xTFBQvcsc975dooyxBEZoCVpGw9LaQivYWxv5JvHEjCcGim9w8Rgy1r1ZKDYwKxbnCLVHtRqHYioyFSESKmq",
  "key38": "LTPP6w3gf3EoCDDhe5JwFZNSsbhbV7HZHNyRoRygJzsPibpf9dmv9WqW4GSaMgcSX8avbPjLHLTjGXDQxVf1ksA",
  "key39": "3rLs58d9FQG2sC8Hb1Hg2igWeHPFM7V5oAxNnWYiP3r8t3AXdZWs7S3Hm383BUkwywAT26Jbg5Lxjs423XFKRkH4",
  "key40": "PzYuCcEgopcQ39itjWVuqhXjQ2BCDHTwQ9k6f5i9y3E1EGUPQ4rWjt7v4LzMy8Z9exwizLFrwz7QDjp7ifVXRC1",
  "key41": "5MpD7yDcTV5CPAP2eJ3uGG9ytWLTZVmmZ4BbU7Pe7mMujHFTS6d1QboMFZkXN3gjy1MaL9aJ823NJhr8Xpx8Ein1",
  "key42": "5RiHvg27bW5eKBWtQhMCVce2XGGSxr8PjbUaxckCuJeqa9jziTRBSdeZMnSXF4Kn5WMK6Fyvvb8kJggh68tmv6GL"
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
