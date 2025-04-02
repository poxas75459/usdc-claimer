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
    "AyxqjTx7J9voDwMjZp57tkCWBNVPB4caVK9rfWzmbojPDQLSAZTDdxKD1WxJmzpbebrDaKM16hJKH1aN6ztKZFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qHJYnys3ie7jjvS9Z8SJ55E2g53Ufvto83zckcqa5ym5pVcP4z1DszfG1hv8dasLssiSFNsG4vvMjVeLkubxT6U",
  "key1": "56wUbkxCqrL4SWCgSYaW8MhTYNtp8tt5H9DzxHRoF1iJZXkFCdrZb6TvBfTx63dspMKFNCdZSi96NpC34V2mLbiL",
  "key2": "Fw7XNmPfZW3Rv7ch6mmg5cjC25CBFXoXvjr86TUJAbPG7AnFBMWXHgqzdJGAwpCUm1T3iNGfdDDWLZxwdXVRqFX",
  "key3": "5xmdSNWSozHdcXKfBu7YjfukAb8KrtaSofXKiSZ7pf4StmMbwMCzPUsgGK9WnjmJZ73CeKrhD2n4UGHX1WYhXoAC",
  "key4": "5NMJif7HDhgRfkX4FAhx3ZKr7yJzTMQrxDX7aeMmh7oCpsUg6iuR2Uu9U2mWtz3MVNDGSTMKBgeqFxiniEeru2Kx",
  "key5": "586memWSCV2LBYSzitZb2iXyi4MjVJZ5BHTviAQsyCLns8KwESYo6KsNqHsW4QSwFMq8m95TxBXjcdkNDJop5g5o",
  "key6": "3m5RE5ZwJDsXSrwAeUkKohZB5gmmGg5tqswsnvveW3cayexJpR6m2APJmjGTFy94AWscX5Fim4tbCnEsAwU7F62K",
  "key7": "3jVypYg9Rbxm5P7JqMkRvQ25PvXTXvUAVcaQA5tnrvrsqCyvgAXJttdrMc6NN4RXWxZqb1cdxShe1HAquSP1D6BC",
  "key8": "5yr9t2dyFt5Vthrz1HadZrdZUjY4nWDwWBuVimW2j3T8zJTprNMYWF7hqMAeR255v2u2ACfQUggDWVAFAyr3bZNv",
  "key9": "26DiQHkviexGn3yYbSVsYV2V2WzFgdu3TiL4SNMqwGQ7uJu2zRMsMPJiMfxUi4vVsWS1LzxJXKg85RH5KmqvfkiT",
  "key10": "3G72Y3MkD41H122fjd3VjV5tJVNMFNeGbt6KkHnmLRefM54pahdaWRWo6h2imxi6uR4szzdH18czB6dc3HvhASdi",
  "key11": "4zifdMjVpnUbC36MCCdUy59eCuKbj5n7pgiFVbYHqpusz12L9cRjWub3C5B2wkTAvW9SR19ENdh3okQ6CmLanWtw",
  "key12": "3L6vAgU95AZDZX1TpapwV9rySc1VR9KHn5d6aVTz1JXLuffYyhqe8NB75BTJXDTxVuiRHW3be4pM99yUS49qsVv6",
  "key13": "4qBAAU8Q1Vt6N4w9XhYXL2q2NTErSrHLiwPstCDwiFVuFUByJGgFKhDJSmvTAhJg2eFm3fwdqr7Y4k9EL39rKyjq",
  "key14": "5yLwwUubHECfrT5Jp6hrN2NSkezfw3qd4ddBf3tgfPDmD5E7aYt27D8vujXhAXECQaueJcdoaqzs6b2Qx1Nwb691",
  "key15": "553qC3WALZ4tW5WSnh1BkeERHF2YXufvjzqxdcNWhTyoMzGRVpfyxm1xuxGtfrdicvFA8ZPj56mht6QdXWmma1bd",
  "key16": "5g1QsjvZd3d1xgJhGyLGw43sUQfDWqy7NoC7FvvgSZV1DLkWn2RFvWTTd9zwz8dTq5MiABQ1yeq4qMogLgxPP9ra",
  "key17": "ambc5mey4xo7Chx1rvcxSv7BRpQ96jVsAKS4oiw2mQfoL6fNg2x4wv9VzUnWiCmNC7D4E4m3gkgV7Dn4HyqA3iZ",
  "key18": "BtB5htQp21eM13efYrYrmrgNUAxfHrk1D5bES3U1s2cvzCM6gLh8au7qtjY16qt22iLBkRT43uDAuwF4oCZxnC6",
  "key19": "4Z31VEZ5E25JUdheVqigVhiumBG21KLPFAQ365dEf3rDsnbqmrx615u1yeSdNcvYVDm1EYdhzreybXXwwHPV8KZq",
  "key20": "Z2v4Ss1NYmQ5aGjCb2fP13e6jdyHyvWqjtGR15WRTPMbaczT916j6sKziWe24JhZx4nXKTgf1ktnwgd26iUArLL",
  "key21": "rUdM4bmZoV7wMcePnSuCAfwuXU7YD6C6cAzBEL87zmDDecNWJhV9U8cwi3S5iVzAr8GXB2cmKFt5cYBj7vzoWaM",
  "key22": "2mdptb587MZ55mN3S69zyuYh2gVK3mwRVokCMh7aC2GLhotematcxVHMKxzQS2BCDHBfRh6uPjTKCWdFYz8Q9QtH",
  "key23": "5w4Pq6H9NKC3uchBcQ53T4FkpriFxYpFYFyfwkTFxC8zvXGxnkPKtZd8cAo5UCcbMzpxEfxrrEUCHK8kuVtoanR4",
  "key24": "4J5DcWnJTutYBpRravRBjpPgGwBQJPQfGWE4BQbeaGwb2AAUfKTwaVRRwqUFCtZH9vRRBw2XgpcApKzEhNbhXrAF",
  "key25": "3pcV88EjeGdC6f2tSL2Zj4BaiHuFwpuiqwKXxHVaxb1WrvPFxbkGWVP3hwUvPqVZwcD1oXxgxfpQcR7jSDNexBCc",
  "key26": "rYoWbukYmiSeR9m1NBSBRw3ENuVAukYieBKKmMjVfwc8XwbY4Lsea2mSmhJXw41xwY8rb7ccvV7oxuAANDvyMSQ",
  "key27": "2dNSgWuHD3rbJBa6AEjjGdaCe1Spx8yu86FchduN14GnXhHxyyBPprvCiCRLbnMTpbiy1y3f8wNc339bSkyBzxo7",
  "key28": "38uHQBaAojt7neQAj6aD1PJyvRjrWEBFMr4p9VKqveEJN7CCrxYzpz7VDR8ZnAAA2p9heAbFqJvJEFJHnZDHKL2L",
  "key29": "3FQ88aN6d1mmR9ikctgFr1eVYTwksjFq7YRkocJkYa8a2wh6ip8SoxdZRiHPV86NDvipty5HJ5vG1VipUrnPBsxL",
  "key30": "213G6bHRyV4uLLEVhJkbubkACUVJATXkGR22WNzbc3aLoRH2v1gVx5PrzaGSxHQyyRMBHgxmdjM66jU8jYKpiZG8",
  "key31": "42rDya5hyrvTnTRkdRDw7MCESokWkwAZHGErSwnMioAFScsfGMwFRFChZENUkq4TZyZD5phTv79sxVHQwHkkeKao",
  "key32": "3Tgk4HMGjPXAmcRJkFJTNQcfMNCPuUBf3TuspiyCGQki6aK8AEm9iG6mwJ5oiQbSmA4EBKP5oyAdJ64BMu4EK6s8",
  "key33": "2SRoyvAQ1nn36PuNukprU7gXU8n6At35K9vFFhn86nfTpaEpHcHusUxPxJzCfxyiwVXNes2qCjkXhT8FubwdrkGb",
  "key34": "hVhQe8syZzgtKcWzSMMm36RbRsN5bbzZ1FVNDN5Y49v53hfNQQmwB5esu9qEov9JpmAfcyw6sUPGGY33GSUF3Wy",
  "key35": "5bs5JkYT7AJZRvZ3Agsc3GgXVwt147qAzExndXt71HJC1i6qPDYMrFJeiSfFERvCZADpJkUoN7XjnFjefcWnTe7a",
  "key36": "Wo36r6gMCy2Mn1CwZCnjiwYVrP6TC5LM8QrSjHt7uPh28BFN8RvdShxRKXzQw7h5Zmhgs6iMPwipT4HjXY3hrhi",
  "key37": "2K6wNVcDHfocNybYgyYfWJfshNf6Z8XtJuzKYnTWLRqPNUSshGGTedz9iXV97i4y8xBLLCdX5EAAhH5Nz1NDhLaG",
  "key38": "2rgLBTBx82n1binch7E9cwkrysvDERz3iDYCD2PuGikn3SWegc82FBqz6RqRDHVjMZj5zNy6KrsA1iWGxw2ngcP5",
  "key39": "59HgoixkrXH3q8BZD4Nt5vt5sF1yHUEzjBqzx2PHpbtrEHx5HVzS5w9WAf5fskKiq2Sf37h9qCYnr2vt2AXwUosm",
  "key40": "e7tS4z3wLRD92UERfvMAfRSbsX2Gu3Y8WaXnwkyFQ61hnzn5aj5jApJmVz4XfD25UhTa9WqB3aAjZq5p6Mo5mbS",
  "key41": "4N6wuHVPvHgBajVeMuSzFXFH7MBkqoQhpn72fqc4Vg7eTPizzCQyjZq5ApW8y2CmjpD4r6ozgV6WxGxdZ1jvsYvk",
  "key42": "4NJcH6dDWoyAPwqFGGnumdnQgVDc5UL8PUDoPSbgbKUkakwTHRaQheRyqrZD3hkvrejENVL7hk8hHLPQ5CB1HD4U",
  "key43": "4A3VrHPGULXyg6xAdPvS2A8fym6eCzFdmuJEP6nT5d3A1EMf1HxEA5Rhu8iFdBbxbNune48zGxsWkg2xdm5f14dw",
  "key44": "2douLdFUyjVUH2hqMFyXfn5n3dh2rNZfqPq1oV5PZWG7SR6NzdYefciAYWhDyXNiXVgvrcoPCbxqH7b6NZSTkXMc",
  "key45": "4sbrXPe7YX5i9t4vFbZtVunTXxxq6BvR48nMfk8Z6W6D1S7FQXx3C5Jx8usxr54y4zviZsYn5f727SnVz9ezWjT2",
  "key46": "yY8Y8iTrQyxG164UDyogbomJDLKzoz6yaajTz6eDGsTQy8Lwss3WTytN8VkshCS3Mc4mdTqgq64j2xtGaEXDofJ",
  "key47": "3VbqAaLAWo8Pzn4ufx9BcXWDwrd91EyujqFNwXp6ALmCihzSJ8rbUcPmsYjZQmJY1NtE8PWhr1xyYcGL62A6RqY9",
  "key48": "C2tTzGV9XCq9TCotcfbfbJNLSgqAfvx8ukzfb2tCQ2HPQN55N1TdWyLEU8RXN9bNY9rhLmtiDNmbdZmKRZfwcJQ"
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
