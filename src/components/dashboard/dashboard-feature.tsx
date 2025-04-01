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
    "5Jg48w2gWuaWtGL2CgSGYa1Epco3krxmNwHTzfSPT3jmciPDzWvSeo98Ubbjt6oCSGXWgLWP42HtrNsba88Z6ePZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aYBryavXFL6iDdM6NooDE98mH1o2NBjnriUBSyYKRRTQFwh3xNBvzBJZUzwvydr4Hnkk8Edx5BRvbrPBLoe1Q6t",
  "key1": "5UmCqNZfySYyVoiiCyT3cafV86SZZJFEokT9Rabndibbu73rTJsDFeKQUDoprxiPh8paT3ZSoKm12AdQAe8viSn8",
  "key2": "38mA6AWdyd5PpvvCXC47VxhuDuCyJ1grCce7CpmwZTUrvh1dxz8AKqQimSwoVohPAPxAtMuFYA6nNecqc8MRGhhW",
  "key3": "D4zhmGQg1JR4XXskW8WXfWpHLU5SoPZV8Bn5JWXobf9yQuczCsoUnhyXuejYYhiusE2eqhBbwoSGZzwUWnfPhcT",
  "key4": "e6guJzVbQwZm9HT4qBwmjUVg7vdv3su5ry5CLTe321bhzrjbHUSdsMdtfrC2GP7zmFtoCacZQHNVJLbfL9yKJFy",
  "key5": "4aSHQgWbm8ukHkoWxznZWWTGtNn4EfQjpCYLYwwGAcUNY3EsqfJAsN4SMCNfHz93XmJPfsicFq8ch8iVwEBBUgBq",
  "key6": "UUsKcZFu2pn3Xuvb5kMpZvMd5z982BGaApLDmXERhj9RWGNyDiPSvZszrS8iMnx8kLcrVJdVbjTTMBtFnsz8yUu",
  "key7": "5ZgMh6sCVa3LkNNdQ6XH7eRmRk1mer9ZjfEgTWSQf81aVvQXbxG3Bt9pgFyatQJdJyt6AHB9Wq6qqGKe6ZnH845L",
  "key8": "21ZGr7HLZGcoaWydU1n7JeeBdkBA55AwSxEDuvGaPjjXfvfRtf3WCk3q4oiN8CvNJ5x4Dzp8rudLmgWrFsiHvTbA",
  "key9": "y8G5MW893PRNuMioEMb6sReXw1euvGwb5ZFCRpzvzt3YWRdDq54uvfFNBUSYWq1nmzVmWSgEPm5K6KLKA9Y2kHm",
  "key10": "5QmjHcTsA8BG78wjJ9tLHbJqRvpnD543avUbP1XR5JNEZZoFVAatQc9oUJTCn6fVUou39SAru9iVPvwfpdWbZJin",
  "key11": "5GLrBPPoCL6Q8BUsLUzHcH7nQ6J5gVVC3XpkvW37uZLCHPQRLtn6A7fcZuaxKRjxphfXYbBA8vPowhMB4oPmnCvs",
  "key12": "5WRjkZSV7pVpuctVagx9PyeatGRAnYMxxUA6aBZpPzEZGHwsF2bFfcAf1YRBwrdguqCJJF5tsP9jTd1PBG2yTdMg",
  "key13": "5cm6mhFDrXAg7arveUSZ4xP96y9WWU4bi96FTvepnLe5frCPm2EUGmVVVD6xBNR7Q1nGK8MqHe4BEdNveLS6XEBL",
  "key14": "425u5XVk2KXVamM2U2L2iuwWFa1WYAvCFFc7EQGkqu97odp6gj4nnnj2jaxEzzgDTCSRuTVvtHpBAW1TUqFANoqB",
  "key15": "4ERaNTb2RkvGTLhVWNrpxVunnxcJRDG2ojXGPMyTEMreLUMwp8x8qbqDF5PZaDT6ABXwNy1uYab2e9TQd5Az2UzM",
  "key16": "4gBh3T43bv7QaufH7iXCq9d4BGBNKFPQsqqsoRho7Zz9SAmtUpnzywb9UBoiC5KW2etCFiZahMUJQfaUxz2kq1iH",
  "key17": "pEyCkoEDjtNDEoAYbKUuXJgPCwb632Dmn9XLnmSG4af5or86YpTNwsaeZMSFcFB4qS6D1p1jwX1uLJA3x8RxyaX",
  "key18": "2bxW2KvaY8yL6xdMUUsvWcw2cFsW7F16nQi3zr47vAwtEjsyt3RuuMAG6YpyuYMsyMeGVvAqXHpHospi3CohAbJr",
  "key19": "4GpXT4u1kXBVbHQqsQAJoMzWwCguSAxHYTRTzJwNh9KWL2zxPsyH8ysYxacfeJZiqBm69oqMLkuZ94cKziQrwkAj",
  "key20": "5cb2A5DahwThGpH5nCvWjZ8J5A4pi6hdz3oYmfp8skj4Api8kJSNu5u7ZYFpe8DLgjNBykjpX6cs6qTHMzxGJdWM",
  "key21": "4R6YTSoj1Sth2TEv5QZpd8sE18sjEptGzqzqHrDsohAmezp7LHpkjKT85xT6BkDNZ8bYmkeK7r77NEuvm42Uv42F",
  "key22": "fRoY6RiXA9PjRgvu3Ln5sfG4NpHEdWrh9xidKvzLneweBDetm4qKqCDJ5F5XLmGTkDqtyGqdT4YTqATiNmFFgNT",
  "key23": "2zMtjKCwsJ3VqoEtxpkiRTdRpvddsH6hbej9M6V3QNs9DVvrJCN54uHcr5HGE2nEstvbfrQK1LDSpkQqBSohHTck",
  "key24": "5HWHEQDi54EgZV8T2jd4GSukPRmc4UMHS9ex2N5ySuejQrMJKN56XziBcms2KVVSiDYQAAKcbSrmLJA4ZKaqdMsd",
  "key25": "42nm5YYyVgXuvXHrt1hNtEmanJJXy5L6b7mtYEfDwToM1A9CBePJavVLpkTjjaR3epXusv4zF1q663gxZrwbuTWV",
  "key26": "5BUbw7Njt5LocMqjX2dza18BAEqDxC11ngFHDNE85uiP8xCeUrvvkmetye6bsLCBBcp42r6Xm5yNpoq9XoNt81WP",
  "key27": "6LGUBjcrtfkY9CnKaP7ZLcuBo6pGVnLezWGPdk38pvbiwzA45cKPwesSPddGQpkbegE1ijJ2zTL7zs6bXB77jo4",
  "key28": "5Lx5eEE8FZsHm4PyyNwoXdX5Ed2H6hHMyzQa6WDud1BzEKayMdUYUfc1euxAL5nq2EU4ojpFpQr6tzBDeZwQeoGd",
  "key29": "4wgxpmmH9P2wjWm5dnqhK2PkeVdTD4KgAtXoS7KE9LczsGb8CcPv8ckdSE9JPSVhFQzpr1FHd7BancygXf45pUz9",
  "key30": "46gvvuAJt2xGKJqELUeWK56eBnkgZiXNhgbHDTN9ks2Vj9NA44zFMSy9c3cAUGpTnEUe1tDZPPETvnM6dcuBTcvJ",
  "key31": "3vqsHFn3f79hAMeh3aYBPrdkw2ufxN3BzYWbHRA3mhyzEAaLE1CtPkrkMwP4Fui9NEEBk5b28aFPtz7ry4D8LvAV",
  "key32": "3ApJeJqh3qRHehjkTNM1zKvZEDzojfJxGiDDoHEGrggfAcdvppngaZBXCgCdURDcVznLLRAA7SX9ZmDQ4fS6qv7t",
  "key33": "3PzFHKsg3fEwSsrFmm2sU4YseAVdnNwxL7HZWBdD56eCQum1vkgk952Ca1Az6FAqUhV3wmBFFB2NCFX6o28AtKc4"
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
