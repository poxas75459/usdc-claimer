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
    "CFer3gwqT2Rin8V4gavMGz5EWJ5Ncvg6Qh9oLsDyacE6Tc9wuKYJTysfFyQBLv6KAezhrxa86xJGepDmq2sqCnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9f2BegXfJuKeYXQGF6futVsvKi9v3r8jUMZZPKSATQtmdtcgxCCtXdLHbC7Fr8sVthwhanZeP4eUUHggG13NNn",
  "key1": "5WKBEsg6B5rfCPKvupoi8vWv99oLGLCqpgUEXE7AtCqTK7a87a5MMsvsnuQCnPriX5S24vdNMnzJzGhAqRFab13x",
  "key2": "2nqUgH5uMyoNEttrvcmFM2jJgBSUR6EbFqK94fwUyGbKXdLAxHKBjAskxgLTMie88nPD5FTDes34qtTzh2HJrJay",
  "key3": "7oEQrGxJaVnR2G53TXTpo5pYsQUMy3EoTs8DodjjDifES1gNGN6Ka1dsmrduYt6AuVDEXpL9TEktubDU9KX4iaC",
  "key4": "4VRnu2E7dFz1VAoY4EMt2c3c1dDi5fD9vf6pn8gcdy7MBVmwV2eSH5S8qCpM8R3mVnbp89ifuTVdGWDQU9iG4cnM",
  "key5": "4BkyoKMPwWQwa6Xvfs757dBAPQdzoEkTNEYqiJsc624tPbWdcREJ6QrDx2xcEkDuy8VUeE3RcyZz5K1V1eztw4VZ",
  "key6": "3379aGuBmQC5f2JkCoZGAQKSAgW4MgXaJFcVfxiQZy57LcfwSsmc5HRJyd84rGMGgXLyfAYnmNppZw8P9sz74gxF",
  "key7": "2XC8WEyg9z6c3Lm9u6SsJpTJfe8FxoHWJqJrcaJmGbsh7dHRbq5ZWArYZ7QqMyWwjdA6gvTgXABif7bpY4ri4fSu",
  "key8": "3ZdTevV3twRaPEV9Z7j7egX63n8n6MnDzEmNQ528RY1EFthZUuDBJgppu2eRfkFpDbaTTY5ANce4EKqUUiEyXiVw",
  "key9": "3sTLAW4pN8xFbyDndhRzwuzXQJ9wgFCNBDYFeUvoUQbDwri2tPgVEBe6VT1WFUm11v1neh8wycNNFZcPrqX18F9c",
  "key10": "5F9grXjZ5Ckwtj3tVeMwUM7ntv2dnrQ9R3v8LmM2pgtMbkC9R8cs3qBodu2fVjey8nBoZxGvD9vSSfcucVNNpVX7",
  "key11": "4TCUjSwvDKtfaqnVFtv6ByE7a8iCVTCv2SKonRymhk1QnanavmeuGWgbP74Fh9NozbTwBySd6jXdgeu2auvC4aUt",
  "key12": "5Uc9UpESbiEgSvMkibWmzr2qqQkHbSZVLU7fwmQbNMJDdA65SSJNHoNvpGCgZcBYJyUWAmHb5jUSQpJey8KViHZ9",
  "key13": "4nws2Gb2TNUwX12T1UQX3AiGx2bdLqvxcFfHMVvh8CWqVrJtsPGKMmqh2YdcFT3TwTbD8cfXUzfqQ6TxBG6XbTra",
  "key14": "3rim7LRpqiwkqDNviM9ZLM6mqgc8G2PZj2pZgs3adj2FcfK32YkKjjbc829w8YkeMwdueJJWA6aNmqFUrTHxNjoo",
  "key15": "4qDzUVxvF4xXkKqMRtZNKB38DQ9xksWzrMHP76Lcgc1LbmWVzRhxscxr8trLNjYQUKmsrR9XNJKXWvsPYEe735Nf",
  "key16": "3958tMrqMogpQyzxuoHvyWumC9k7fHUN41BNjTZ7CK3yAzswoFjALepMBbaqnnfuLjYTgsyhEhYnYaseyP5gfKTN",
  "key17": "YHh4pGVXYPp16Rp5D8oeYuqd9L1PTKJecJKCxRXvDj7of78M7QRoPL7ndwTpEE3L24dfh1nAn8h9GfkKQaxiBNn",
  "key18": "4p7rs8ue1bxobnuBJEodKL8kuunqFeCRUPYdLTxGzzaAdJJNjgAn4gnWwve5hhJrFTcALzB7Rbba8aXrnQccyuKQ",
  "key19": "4WDqANrQxquAehhuZJ32qsSitJcsHb9GesJn9tmNNTaMBZfu5PWFvZPquoT314zMz6ezCKVHZ8zxFHU72MtcUzMP",
  "key20": "4d2a8rSMwNX6M2HjXJz253RGcHKq1FQovSWV6N3DC78VauaV6sFkaMNFu3raMeFZrmQ7SUtqfGKypZwDgUapWVTd",
  "key21": "5LSjK9xFBfpnd3LQUZWynwvJawuAuQpBRNL9YbKLRRbYQhSVJGcc34WUUeeLAoB3bophPmHjE5oUqNWd5wjYvnkd",
  "key22": "mJP5vZg9rAcFwubMRMVieRxMX4V5buqsd8MQVgdx3FDoQbisQzD8woZmZn28LuLSRWU4Fbb3JTVhyiBeWJPNbr7",
  "key23": "4x9P3ovVyW69rPE2RZXfDusTPgDUXWEH1Qo7EgVDdyeSq4FVpDZuW5QsTBzqG6KY1cvYpNX8jsvdfnDrijANTC31",
  "key24": "ZuNkYRixbiocfFo8RsU3n1JifahCv5Dm7P6r4EGQSkNPP9AFZr3ctX1FeYZtQB8YfPoEwCkMMcZRvNac2eygYX2",
  "key25": "2D2MbUrFL8j8sZgtAFBFzYn6dR9mquxbbMiWcgE8jcaBCGHd822fkVpitacDHkvDQ1sNbtvTVAthqssfeurRpsBB",
  "key26": "3ERFa5i97Ugs5AFWct6GzuB7WYXtrpVSjX4s51waGitjqYkx8Y4fK5me2jCv9PnyjPjYHpZnwggcv67bGzvaJUY1",
  "key27": "3X3cGaExTYR7VCj4gHxfwkFbGPRQRHe9dWzLhwEYDs6mitBiLKHMynzGczsmBFr4jwTjafem3Yt3zW8hJCBJERRc",
  "key28": "5bCfapw7AC9mpNr9soHRRkyV8dMJpFWajXM2jsacVbX26ukCtBLzqCfPTDw7sYz9oLFaTj4qLTGCru928ZAztqVM",
  "key29": "4MvKtSKAbRVtSFeCYQfxDwP4ki4omFkM2AcTD7vfrUDSzRFQAHh2toaJFDQ9MUiPr7RotwckFcT7m1Wa3QtWxCKA",
  "key30": "W3CjBsYfQgG8dK88upD1NmkA82v4K96crVWeKBATjNoczwKVPu9HWne3vVDSDtN7JacW5AD3QyaxGQpC8eBSWdJ",
  "key31": "rDRLAcR8uQqKPjKeHUoBmowNeNoPNayEsA6JLcfM7gykvbcYZyjEuahRKmArotNUs5mf5jnTQkWTTor24V1SPvD",
  "key32": "39SDHYQuepKLkpqjTRSxxEvm9Mtz2FJ6fg18T3n2Eo75iQKzGzWdXQVaF1nR8VgxkZxTZyriwFZirvctP7W1MjzU",
  "key33": "34FkJg6tKHhnqT6dVKEQ7uy9ZaGeoc2L7YH5X1KLCTAr613QyPuqT5Tk9f1eiCgM1jAKBcTYBpfoWtncskgtjXkd",
  "key34": "59y6zZLHmnc2Wi5YVk4yNR1HWv4nJkGMbsPGZ79bfZgTTow5mKrPfQyqnhZLbz1uGwvbg3AhY3c3bVWr2UX39mW8",
  "key35": "4BCsseCfHzLUgTQp8Sdmv7wa8NYEVL8bZzzX4xuuxZD3GU4CkC4ixxuEJK1PrQBDpdynUHbFi3voqshyoYoJo5LM",
  "key36": "3mUQaSwo9iRaw1sUVEd25dpzAzS5M6c4t63gv8uhdnfGxrs5WyPqDPAHp5ivvLzBzxmD6tXfuuiijqfJdd3Rdr3g",
  "key37": "QBRL5ycwri1AssBVJGsskRW5JDpyURZHoXnxESCi1WCrKrx4ckmpyJcN1ADSXz79GYKRMHdeP74jEyfhc2CnQ41",
  "key38": "L5URsFtcHJ2YtHnaZmCqovaRYNSwyTcaJ2hFKR5eQXtntijsxZujnAeHDEmRpZe24DGruFNsK2i8feTXstLXFfK",
  "key39": "289qvjV2Z77Y5sFxEM8kU1YvkSotwG7HgEDj6qApCKj6reT3VBtJTcnhGeTvyvUj6ddGofrCx6XAMun6AdFzt3Ro",
  "key40": "2vL3K5WbsHcYsY7MHrKyiHjNhHeTk6e7E2tA7pY2ikcs5qjZ1xorymcJ8mGsB6EpeJfZ4WnVGfcbFiKYciLmuxfC",
  "key41": "ScUk4vDcdP8j6QLa5pZ9WLj7hXzfff9iUbecPqncbuhSbXyty4VKMQFxk1ujgithJ6p44LrrXuspKNUfCN8r36d",
  "key42": "3uEvYXq3uEHnZdRem52M54Hh5vzjGRu4YTog614ptp48KSpE2NyFVNrRu1gmPLnsrpmHTy2gPWP7qaMVTMNZ8XQU",
  "key43": "2BwmW7hfErFgEp9x4C9UwBqxfdyffw41c8Lu9WCndJvYh3o39Pvhv4drBciLAruzbAgkdfiGx3oF9eXvQy95y1wb",
  "key44": "5xkvimeBFe23wTiGcrHCMvUTaNBRBAgbGe18fDU2guWfZqccfakQXDjyCda7Y2bwRyxbnLKWD7KZvQJGHodyVpwi",
  "key45": "L5YqDRHy4XdZq2vHufLonsQmHto34vGprrbzTuwhaKWCog2DiVreBy9Jyid6tvougrWxH8KbdGxxCj26mkLDpzM",
  "key46": "63orDd7323qWsnzNDnUTLZGVRCaBgiVRzMab2Cgb9V4GWR19F1m4qTbKXfeD3RkX7431eVfCwKBbiHtbciCh2i7C",
  "key47": "2GzZsQtYyT383eifRFHfG7VE1uBigqXzQqvNfu5kZ5bn3PH2og3sQ22uiZPL9n7VPJjPpMu1K6BYVKAV7BJYhMoA"
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
