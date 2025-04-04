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
    "yiNfFdAB79PgHj8PFA3UqfhYKqsk4GLk26PKaRDCMcRiwtaPKVj8fF1fh2k21iBJmJkZZUWn72oU7C2pt32JBgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "121thuBqcUzPyjWpBFAHX2sPuLS239pjz9HfstV4fL8TdV6WYPGicFGw5ekK9iXP27vJcmLppkhP1En2or59kcpv",
  "key1": "23riv3Yiq6EnCmhCpaP41FeYAJASpt1SHqXtStpCdMcRpWhGbeqCPuNEk2NUjHLp7zNTp1W86ZVLF4bi1wr6kNfv",
  "key2": "Uv1F7he9zLUopAchzo2tS6jAzaup37EmX3yVr654WmbjAFuYdRgiSwM7FsY63RsWsNpVXAhhH9Uu1mKMjJzwiHj",
  "key3": "4CoubWcvxzPT4cAErQUDqbwSYzCHQ3HbuWUQ3MWoGd3FfUfpwYBHEkdEy6B3s1fKbBkVEGvBe7KVmuHdMihAYwHw",
  "key4": "2Ks3RruYUfiT9A5ZDeRbUD88zmRyozaJNvBL7Ju8oDCACFdDonZhcWva2TMwFejecr2RF2bG9ebdsyAs1m6Bnmo9",
  "key5": "5p2mSyVsvU4XKyXs7B5WuD2rZXhy9BMnUehCkXb3oDBy6JhzvhwhydkpNvkqwHgg4EqvQCgiAoQxCAZ9pget6sma",
  "key6": "3xnQzk1rUDio7SfijUcoY7LB123xphdbdLt73JjV2z4umA168indg2T6sm7RmXM8erzSu2qVrq2M8tvG1XEK8SBi",
  "key7": "UhpmE1MkuDq8x5fmvztZVywRy5VbFwWf2of3LcuXqyF9m6fagMbCdQvumBuqgbbCo6B5UFZuEXcUfHjfP9Qo8FG",
  "key8": "2ZYtjme5xrvHi21x5TLiBEoYmNm8ZsZycHAfHsGAj7hGoC5YVbaFnsGCQCgtQvJQ4MrsKMpZB9yeHQNcwfJbr5yV",
  "key9": "5kT8GSKfHYvxGkaAm8LGsToJgEtni1ySJ9UGksGFHpq8wL13MLHcKb5fB3gdAZgPfnqh59edtiQGN1ZkQp3Mz6kq",
  "key10": "5nQkBLutXHQJtP1Ue3bedhKU8FhV8rf72iK21cAUNjpAxdJ4yAD4ws5wZKVuS18yv18kkFLWnNvNgG1USQDMh1pm",
  "key11": "5xv4FAKeTDK252AQcNgd9H8T7yARvUReALZt9Zb4Jexi9aqu2FyrtZfPmgyVwgT8eqhJ4M53hiDNKkHFEov7gbUo",
  "key12": "5vwqufvYbPT8WcpsWQYitPhaL7iYxnq5ZdoD65dUACELoZgzYW7uye5aycXdPBhPQiBLR9Ta6WVUvzGsZhJEZq5j",
  "key13": "4F4gSbeXEbx1tbW1k1YHtCipe4F9SuposuQq9rZMevpR1hiLjQu3BznwbxFXhPeV1krF39yWHenxKj2JGU3nM9Ss",
  "key14": "4zjhb5K9gumHybiYV7EPhC7kHC2ftfNy4ZqvFSAwcPtAtQFMRiiTK2kauWWBD9Ss9RRFiapqkJ4BdC2tjMq2b8q3",
  "key15": "628WjcN1XVTvPGUfFxxzcMeuy6nCs6dbmDBuLarXymyyTYd5U7W3kuohGhj9Lh9gc76xaRBbqpL1YK97kb4SEt2z",
  "key16": "49iNbyZ1WvEQ9pSEowVeb265ATHhhPQYitgKDkPgWrEeTrios1P2U7tdGDkgYfqQEuwKYN4F8QkU21q7F4hCE7QZ",
  "key17": "3DCZzC9svfHBBFjMYSZAwRH92YdPSPQDvb2DH1ZCYeJasoTukhhbFRias9zREog9CTPwWDsy1DVbd4dS6AyDkoBb",
  "key18": "ssaz2dqserzibakFGAFXYs7BEw9tjjgthCpoREb4E8rQsTvjHxSUXgDvYETXMndR1zpK1MaXQd1fuMKv8MUTBVa",
  "key19": "5kGfN21cDdm65mbVtdPQVb6dZDSbTzFTDjCVpcn279ERDCroyANnjAy6AMtFWx4NiWcnWpG6LZxRsdU11RSzFqkM",
  "key20": "281pwJa5txhKQe8yftgPJF7uSuv5oPsi7amr35GjDnCrSe7U4CMYD6boiE3HCqcYPfK1Yv3uHD3ib4cPgqhvjS1G",
  "key21": "2VnckiRCdEUntfL3y3agYVTmUT8UstqCxGYbdtMRbDyWUJR3LeMDvjfRc3M5RXgNviYYCD3ZLYW1XxUwQKxJv6nZ",
  "key22": "5S5U2jCsEPxByR3rcZFf721JB5QrZi46WCSXtB2HcNedkq8CBjxEcr4Wf8mbeq7qiUnco283WoRVpFPqpjf4veV5",
  "key23": "3n6QX49Cswccn2W1actiMR8rhXGe3z3p6rXnQAd7Qv5zr1ay64AmspAncLGfjyVXwkxrjr6QSpVzGNzxB7TfE18D",
  "key24": "4ruVPRuxoUYFAQLMRjw73Vt87jNZwRB7k6SXK2Zv2dmxMhAUJMCwns4guHn3Ei5RCYTbBKTq828zcKW7UXqsd8HE",
  "key25": "2FyQY75EVDqzjKSW426QNc7TaRgMnYmb2yhDfQ9AWTAJUYa4Eska7mzM8JcQyPYa3yCTw1PXCdP6FcJ8d6qCKCuE",
  "key26": "GaKSDZPu7CxPh1zWNitxg3BhegWwZuoFQAwn3hMAG1zsnvp3DnmkyHZDP3MTSFk84xfhu4mcWx3nXCWHU2PjaNQ",
  "key27": "3vQKbW17RvWXyNjonPa5ez33bqgDodropDKr3YuEwiCCMpo1miEmSGT1zcuGNAPTv2PfcmeLY1fZzeJkB4dk5iV",
  "key28": "2aBHvuPRKLttUC2k6W2RysbMnrxoo7SKDBeYcJZ3p19UbwwvxyzK4C8wS4QbN5PbSefADiWgBCEgGmfFPisQwhGZ",
  "key29": "21ga6Ee8DPn2GPG939oUx5is5JzMjgUwac5zUHjxG8ReGmNGmD184fSzQ4i6LdGxMBhMqV9nGFKoZzAgbTBDx7hi",
  "key30": "53pLm4A62c5QMGsVU5zKmFkHAYFTdEdX8hqwhHJo43Gn7FguCBpGXqiqbQHSpukEkXE5MSapNhXMi4WaPsb5aLdN",
  "key31": "3KaRR42NtTMyubBHeRrUe32Qnsu5b97mmBZ2iYrPYm2aVdnnLWyZeeJrFdUZYzJRT94k1CJMmWbPSPS7rpWK7Cwh",
  "key32": "ePdLHGyshTLPrcs2SPDmACMtYaX8K6ZqFEL3r4AJ7QtEfxyY9qYz9EJ8235mXPZvjshE6nnZeuUXxSGbo9kPcby",
  "key33": "4XW7jq3Y8JCxrpXiWjGFgZokii9ZAMZemC9Xv7svq8JmKfjduNHEjndxR3s26CCggFFyBvKGbNyFnsSwpHApQDHR",
  "key34": "3NRhFRTPDfFBxPpJZqwcuQZHdoUkq5dvmih6AtF1YcjmuaMBD4vdYLa8FNXRVHcaidjd19LFSBEjP8mMERtPQBL3",
  "key35": "2346xvC2jF6db1AfGcSWXBc1zPurgE86Ky9GXHZptXeg4J5V7GcrHtbJpjq5b6ZL98v4LSBoUEe1LwkpfQALmNDV",
  "key36": "5edQNXnMzkCMpERf7EHTt1nkgGVz2kjftMPuXMXa892QtXQtzLyCdAWLkEtp4krfCAaS5CwYSLD1xncwn9vJZmVP",
  "key37": "cdoWJdpaNZemYVeqoKgWjUKxB65SFxSp4yTtLUmkSDtr6m8ibeYbWuLuRWGVvLWTAwYs1cr9n5FMbTDw9dpkkwc",
  "key38": "8SYfgg5yFvwAGkfNtR4Du9FDjGDoq5oupbjWLLMPQjzBkJBRVwdW8PGiYY8knjd1KJyYGJRHRCLfW7hdJrxYgsu",
  "key39": "Z6SgJ4darMgMUC3FBoDLHSnXZDcKrxdtqDivAuWBPfkPqRpfYq5pE2ruPCWzGrw6qutSi9Upr4SWam1kEB15JHN",
  "key40": "2NWx9hiWPXo1p4CvzMYUC37Q1uzsD1aawb7g8QPmkFMFuWyNxDmqHkGmHkru6xBPDAuTQcqadcCert6mvRBxHiWs",
  "key41": "2GdPXpuvEJrpmKUZhEjNQSX873s5QeizFZXuUPqMd2vDcSztwJ4PwsAiq4bsMTcLJZ6ffCbVnAE6hfyoCQB6kiem",
  "key42": "3ptSoaDMapyRUEt9VYhCsJUqBBeWqLvoc6Tg1tKbYRRdgB9LwmvFRQHMuc7zQigzJbgq9wPbB4oajQsvbyuPUPRA",
  "key43": "2MBpvK5ifunAeY1BGEUhPdU82dyJTprU9Lch5ep6REsEn7v9Wj42jJ9pbmsH6yn85M7uszzuzoCn2LuniwEbcS2s",
  "key44": "2jjhifDLGhgAFyjghn4neCniHQ42kEJUpAx7P7LPaeekwy6JRNQGk7skTNncLqWdnSBfEhFgD3wTbAUvkdWZF9JV",
  "key45": "3c9Yc3ygRt85Uhv39nxASdiUZVXwFVkVMeNkoJUBQe9FDVMMDucmuywH3fPFzJjE2YYwyJ1gUqx3BPaU7C4GTBr8",
  "key46": "3ckQvPTNCGz2rFgnFzAFo3uDWscW97AbHaBbyr4PbBTxgB7yyUJ1aUdfvzHN9eTkYWK7c2KvyvJhJjAperyFhGFK"
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
