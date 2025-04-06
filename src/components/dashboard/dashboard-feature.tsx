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
    "455PJW4eUJxSwnMCthqSK92bcMZoxoA61qVq17soVgJn8KdC2zW2XQGjhFNnzDfZmk9txeFJ6qZGmGrXrmHgUesn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PvdMVXUxE8rxxnJFzBYwVQ68MTDXLqCHDdk328qu1kj8Yvhx8a7t7DVtigAQZK4oAdbJf4xEoq3yzr5X5DfV1Xe",
  "key1": "2d4SbEuboTVptztWtYnW7JAkjmcac4RYgNkRSdkhLebQmUe3pzCwRi6JvJZWCnNsLmpsvfcahPTRbKikZqJtLwJE",
  "key2": "GoPrzozXx8haeAK3gwUndcWdG4rduVYAM6vfJZ4cuYG4PPr9Nwpn5sukzfGGFSDpB3ZmRnjyqPbWfK2bXzrfhZx",
  "key3": "2Q9EbYBj6eeERMhPAamdHU6E4RHauFY4tqQvbheTKVTqm9eyEXQKwNg5JSddeVUTRMeNqF9e8kto3NRkBSYbwGKw",
  "key4": "3aaDVpWtwnvp3kVgxk42SeDgsmmxo8YpfwzGDGRWd4Dm9au3f5z1ijYutMhJ1Nn88pUgVChKMtYttBWrmWVa8Mc4",
  "key5": "4yen1eoEFGwaNVVFNfzKvaYqYWPGzujFchEpzdYqqfmeyGx79W7v21kFYgDpqLTSY2emHCxvxGsqqguDLxzYDtVv",
  "key6": "4Fe1hKx8do2AEkLXHPZLoVqw5SFnzB8KpxzbXPyv1RYQwr6sGPQ2bVB5JgaPztyWNSDBfxuo5eS5m1MM1b5X5CHt",
  "key7": "2GMnwyyycW9ay92bD5Art8VFj7QYimthVoqvFwxP8937vwAzcXCS3TSXmP8PHyGMDKA9b5Rq3NMvPuCHTwTvXFqT",
  "key8": "2w2ocrAA5B3H2uhQR19ECg5nS4j4qo7kJJp6tb9ntWEFcHpJuHDvLgTC86sEbkRA9qchQSbHsyupuTY5piKoVKsV",
  "key9": "2HmcN8ycyYG1Le69hiviYfSur7P9wkyeGYGCQw73JLEULFVmCBVanPvrbmNsP7WorPZd3Bd1RVbvHKkNKNtSrrBh",
  "key10": "4nTwFs4LGdWkXvP7aVbrZ6TApwwGaUr4CZqY263roEzDBYHU8Rm6Njh1odPGxGdThqR8H5FESBEQACHNtTCbf4wD",
  "key11": "3hLiubHnDdLBCwuPfuGhn93Kicxgha4ocitKPASo4XovqQnTTkRhX58wMJq19N7RiNHKBneMhyML4WEJzfvE289G",
  "key12": "53Zhq4mZJieAK2CCqYvC3RMTkBwaYznzp77aJYJctaPkrCg31ujsQ9K2oCvZUzzwN6oUSe1dKhfGwtUCVTaBpbUB",
  "key13": "5Tf9qK5pYkU28GJBZdRGW5SXecsHd1VwHcgXVoHHSwmDBV7yZGADDQwNue9nto6TnYG3y4qCoH3foz9mrzNWaRkD",
  "key14": "2fZP7e6LAZ7n6rajY8HGKt3MUjqXpS3RsK3aejgX5Bh6Wnx2psfF9RNf5EcjLTU61ryh5rUA5xSy9qFeEa5Hf2DU",
  "key15": "35FFcVN6772TCRoytt2qpNTzESNXcHcKkv1k4gTSdVWeU3t5my6k5RyWExsTEJJQmz9cgC4o81pyrBQRm9Bzep6k",
  "key16": "3umERkoyB2bJsoYjXSJU7q7RbX6J4Y4mwh92hZmENEWsK6fD9X6yT2ggThejZXxyKohZRRV4hKeACWTqqHkVUVcC",
  "key17": "3q7x5sabNhYiFqhZSQcggnVWfSS5ePSp8YzTX5vss7p7tJAcrUFaXfjdT3er699S52RBe3FkCNRy1m3LvpBKfWVv",
  "key18": "453hk5vmUNNvruVfi9SLRLEnjCLY3vdZ6YLyPLNUnMN84HbuhKg3ETEBc7rsmzgXWLsviQF2tyCsmsFpTzfTaWPn",
  "key19": "5YCLKruSEM46AcXog1wLoFXxdigsfTy63ePHnxz16qqYCeavzp16MFjpcrxpCDKjqbHeFFgGXmi7rLvrszgYKWVn",
  "key20": "4BE84vSWzaLGmQ7eLeyXrYwehDe25uawGBunFFmomaAoc2zqNYeCjckgtxvTLbV93ZksJBBSH3m7Qfs3gsHLR6oF",
  "key21": "3mPsuYtjoBtfuB8oZrvakXFdggduzxy2dgeJC48GnTkHU8ZRNLzRbEa9fBkS68rKPp4K1Hkat8gyJzxb4b73G6to",
  "key22": "3Kgt4QS5X3vunGSFFTB748vgEdm8EtkkBi7do3PFZ6fhZijRc6vVqJAXCQBHKcgnBosBDnt8GJF5cu1Xpgrep9Fg",
  "key23": "62VPuxXsDKCTjNogqqJh6BPGqpHVEJ1ejerfq6SS5DdC4omUoGnwNdg3TELriSGBa7H9EXG2kCbD8okLDntCr7av",
  "key24": "59CbuP1pUDKApsm4nsqmhrAMCUX2fTJ6TJowhRUcyEVSp5NEE9fr52YDtpRDMNG1ZTPcQzfaKsUf6oSubPEfB2G5",
  "key25": "xyZBLBapLm9TSxi14BukUAg9aiYAybFZjrzKeoeNAWQeNAsX4SLWKqurMXb17z8HPrttYtXEJkVDCKkbtDXSB8S",
  "key26": "657Dcv3125Z643J1ZDALRhHXdnKqj3qzLZMZKL5ShmBKsgjrBPdf144Xeh4UtVPhBEirqwwDHK3fG7VTrHe7sC7X",
  "key27": "2C7mUgHVVmWxfqgLkyj4QSSHidja93p8tiW1ozHAKdv2GreXh1vnSVTpTFfEBU8kf16ypRYHiq4TPG5QRf5VNLUA",
  "key28": "5nPwvoEf5BMr46mqh5m8xsGE58DSb53z9zRa6PVyxrRZJHPkyxyPTGugQzGqbSmuGHX4uvypnpLFWtxapM8XTNDs",
  "key29": "3Ajg3MawJJB61u4bSPqtz66HN6WCm6pHhX8afvgpJB7xGWmKY6ojZBug1fDr2oJYhuVic5JTra6QsZDP3RL3mcr5",
  "key30": "5BwNHqJkk9Uk2wyU1jcjyBLzskFDG7gusMoXDFBfjUP3iTZqPJYqQy24nh4thbypPPDgk8K6tXwBvyGLmdDt3HBH",
  "key31": "65vXsJQhdRFzdDSvBjygvvo8jkW31GKVoUofqq2Nf5mHUphkDHXUuM8T82gduoSyTcHcAThJu3LFcet2RwAXDmhX",
  "key32": "4gNzvgJjMnAsFsz2buw6bzm9LfvXg7QSC3PhF6XSdJUTxtqoQWZAh3Db6CpA9rDVE3kuRYaVELgoPSB7KL8k6YQY",
  "key33": "3gsHghLQY6noZNhqN4Egn9t1WGDoLzLCEZmYe3opevLwCGJzTztrFpueQHLbLHSwY92VWyyWiwEU9zsRMtQp9Aov",
  "key34": "3b4gXzhnGFw6B53E3Eb433khLU1cpy3Qguxj6j38iDg71NSyxhTMiEHjVUuReZuxG4Sg6WDqKsqBL9sitF7VwvSk",
  "key35": "2F8QHaHsL6HERHZ9kc95ZVNbpNEKxrxRcaexYkUcdnQ9tzLZoAFwWcxDSZ3vZx2zv6Ty84xsqh5Xiq5qvL8WAna7",
  "key36": "4K3LpJer1YeSwa1ExP9un5jYTTKUK9TVkZJsSRysGjvuxHijUwyFqDHPYBPucnRTcma8dKYqvJGdwvVcSPC4qVDh",
  "key37": "23JcWrNje4vJ4yokwTctDzydNFMr5mxZY6oMnUGeR26q5v5gsnDG1QEV2PZzTwhTkKg5bn83hrVM6BrDWK3UKHXg",
  "key38": "Q4VeJUTe5wosxirmoD1YfHN21X2DbNZiyFDUAEkMTkVzrj45MgMmxYzSN98GBMazG7DW3BRhjCZKaFL4Ee7LRFa",
  "key39": "2Mgh18Wb93kmMhKdp8wQtcgRh9ipErXRdPURfH6p5z7R5XV9pbDWg2KZSMwA4R5fPGQjkR2tUwnSmrr3AbS6gddR",
  "key40": "43MX9a7uKJib9wZeTe1X389SjyaDDjxJFd2zLXccWHY36J8WhDh3oFtiEdSTiq8JLk3CkA9nxuGucHW99HTE6vbt",
  "key41": "5Wz8Tc23nkGkgozvvgfYiFS8b9ae71tuzRiDWYCHYbFZ6KLgM8nnKGzxCxra3ySTwdYc7ZdDN6RUgVsSQu9azPNS",
  "key42": "2KmMMcC9waNJmhWZRDnTA2p8hacmX1voTjt4BviydFCGbz6D4xMMNHNTS5jBiLVbYEBGaNgUtRVd6jcepAZ2aUhJ",
  "key43": "yR3AhAVZP2nTJi8xQ2M83ypKbuKuA4tMofSkZkKsz23kaus8N4aWV4WzwhZropF5FpA4LYBGd45pxj9v4N3ppZF",
  "key44": "27wSQr1v2mVEKWtQkds61uxHq8c94SWt3k7ojq9B2M9oGuhTMJWPA7rmpHZL1UTXkkuoFjTMmnTj5FEUdr3MUjeC",
  "key45": "5742NWoEAQ3ZpL4Xwj3pHGqwvBHWffTh5fwu8yRkh4nJ4hGpoWdUUhiypnjzPcrXdj4NLB3VggsyzrKBXeNSPReB",
  "key46": "41nc4RecYFWEpmKoXtavuZnkQ2UmqjFW33M4zxCEEWosU435UhmRcQvcXw7pfzNJunRMu9wjQ2kQGPLJa1gzmbC3"
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
