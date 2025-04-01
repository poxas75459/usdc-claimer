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
    "42d1i77BGVGrS2now8QVxBzawTuDn9tP9CrfXEVN9mkQugsPPY8ETgH81NhW9ebrrYkZz8PAwmfJem1HkiBfiRkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sWXPokU283dBbtnsH5KhhZLhqXpm3pjfUuUYs4zqCBkejGjUfKwJFbLmBCPTt9nKT4NpoKKgxMR2PWXeLhPBhvA",
  "key1": "5qHtNAHK9K28FFiuxmkQWfBonNozGyQx4f1fcgXN22hUzujpDRWde2wnFbhAcHMqPA9eEc9Xwo3ZiHVtCFYXABxN",
  "key2": "4JysZQiKGbxMek2AiyPdgVWmtMhdu3XDCyyr2oowiyMZmiuMmhQs68HmxWDSMiiQTfTJJA1GiLJULg4Y77SUkUSb",
  "key3": "XdFwNRbAfp5DNJ4vpM7RHitNNjA8A8D779fKwByHrvfY6FQgkAh8oJhagmGE5V6QCzA7aQBuVPgCfjdu7TdYCWs",
  "key4": "24UypjdPMxfbYcHis6dgk8rZFJhfZWaGfsGTVHngZaHzz5dLLpxXwrLvbZ9e7t2aQNGYzaBYC1PEZDCMVis7nyKM",
  "key5": "2x5ZXNxhKbwLEmKzYRKZrWtZrmthQY3Ffj6JwRExR65saAvpsLJySDsq5KBQdz2Mzzxt97oodHzgVtbzUqVeULCv",
  "key6": "55RaywM6ynRZsHK96NNBLUxBbpj4HeapVgfb7R8fMZsSuDz1cMmVA2YWHdMyhTJFUEQ7ZtczQK7ZETgi1mhk4kA8",
  "key7": "3KbpLNSBMWzsjciYM8LfPoexnqyiUa3M1mrh34WR16kzmZjxq2nMF86pQs24fXiJxFMB5BzDPADHS4fxTNfEReQy",
  "key8": "4qRmBTpn2Hk5nHnowUdQUMWWPNEAgThXtA3mZvcJnQ6AgJfqAPB4UXbE99CnR4MpdCy3jBStE9zVp2Z7YKej4Jie",
  "key9": "4774vjPc3yY2eq2JsjY77V9qHiEkoo7jxLwXVyAuWeHYzqEPmqersaFZ3ofVJap5CNidRf3vwpZaBrDejuNFMKGa",
  "key10": "3M4LZHD4aLTD6S3714jBXJLpDAxBGotsKyV5mQqrsSpREjWeq5GTEfViVxwJQ1Yk51kgmMSVv2qy2ExWGterrYHL",
  "key11": "329qrb4zHR66k96nLhA33dCz7MxcZLKLe3kQFvQAnMLxebch4EwQ5MPRB15CLosmC3oqxDDckWXYLA13TdZC8i3r",
  "key12": "2o9Lddin1uBdn38Cio2FYyauUL33kUqV9rBemeKK4vpyf5Ud69PJEQU3LtiPRNex7pmWfuoyyrmkzFKbdBvUJCAW",
  "key13": "4vcBC4FVR7eyeQvv3gDspJcsmFggntsBFwT4pZzMKyRfwSZrRFU5FsGAD88AsB26MNusLoncgqgPadTEQDThVqqD",
  "key14": "5nNzdpssnFZ7fV8nhFspSKi674DKuhVui5e63JWvfrA8oww1acXVcoM4iJwcUEVk2xnD2dXDxFZuRd4ctQvkqStn",
  "key15": "5D7PGVw2DdmXaiDXX9kqgziqgaVF2F7agn8ykMSsHFyXG6H9oWS5ns3MFRniZD6auvWVyxiWupfuWsFtBUPceXkb",
  "key16": "4HSBcJ4BNWGr1y9axDXXCdDKTF1UUyt1qiqHJY7bFQ6GFyW62bdjxiPJfrHHJk3kLw7jL4FEtC76ph7BCxqXRUh3",
  "key17": "2Xqvbh3UoEbrGRpQVjpo6oCSNXBJbUNMxTyR1neHNUhoUraUtSMkuTVdBLkoGPneaH7xC2EusZBJCTiTgw2PDiCp",
  "key18": "3Mh2aCk5J6u2TQv9KFB1AyChPdgit3jxG4GG8Ws4cEYaP7gJ7yc3U9j7vta3PoguVBuhtSugMddNb35bx5UacJ3B",
  "key19": "2c1i76EY6d53oQXYLhp7oNVanPPKfciqw5Ab9c6Tv3coQMGKe97PoaMWKnuEjLWCBkERMXcWLdLcjJLZEPRyPbt2",
  "key20": "EucAvLUPqoP8KzX3eGhe4q4noynuZVErTGQTViPQFQH1TFXFDti9EjULd2EH7cGKJSeDGXyPRDGGCYg57HSRgGE",
  "key21": "WxZeK3Mr1j9yTbvsGekN1H117sRjxLVTiF6qEbhozVcHDRyQVqDyFY1qrM2UKcty9Ureyp2LGV35hGDAdoLTrFd",
  "key22": "PVMUtURM5dchPwBspZYVKRgNkRB2JyoxG9dFhTmHKCw5ysnukLTRNDkVFnbaQZvFMXJnuL3MzwCM2x9QLsevarb",
  "key23": "WYpPRgjZJhVi52gexxNQzKNZ2LZXFpaKkd1HUUkhX98vsNusgYD4E2BZkbXQAPpVsWmqYRzfhT8SD7bLBo44Fos",
  "key24": "5ry4JpF83Eo4szZsAKUHmquB22nHgkbV9cXjXQThfP5i9ihHxp967LvvKKznZjvrm7fLmBjXnZi8QfgRESRCFPME",
  "key25": "2xNuVi3Ye8rJhDEELckVzyYVsY6qbisSHUTaoo3TVNCav5ZwXNhpLnqcb9MVBJfsgirHu4hqPHg2yZNjHWmeBnGD",
  "key26": "2AxsfzWYcu8SRv6Cp91f5mTrJDkcL36JqG3fzANJqYM24D9z1AK3D4Vg42cpJ7T4ARNRMit7wNvG3jUoKEBPb1AU",
  "key27": "4kmkJaS9DSaYqLWSid8BqimEMGP8JhKW4hu2VZuMyZCzJHzSKRA1hEX91wTduteq5NhsfqJzzC3573wooMWnBVA5",
  "key28": "2kdhPp4iFGEQgGhApi5HDqDa94tvME7Cwj7ZpFLehPtpEfuCB2rQ2U43Br9pxFYyHdYmqdafsYLmnK5z34PnppRU",
  "key29": "2xnRWqQtArLML43w5yDyxPfodLUoCmFcAMfWXQHzweFSqDToVBdC5j2UxNjb6a8ehxj6FjoS2zzd48PZJQchTtmf",
  "key30": "3m1BBLLTTG1o3PdgkLBhihNEDdyfLjUfevBvpYRV3L4gGMmBRnQtAyZbEDU76KSuzvtsjwNz2NCE7MiTHAP9eRDX",
  "key31": "BD31WmYmUADP6yKdXTY653B3R6WURurnx1HKg7hH2cyP14vUmBJgzTNTbEw9jdchruXe447xgaSCmpbTmdM7Hmn",
  "key32": "33ya27dRamJdrLcdJ6LHwxzeuXnGD6ZhA7t3wa91e2ezaDNbksArigBNVCXYQMYbq1k4vSHdXsFm4xV3U6ZS6jGJ",
  "key33": "3nmgzgwGZhfNKu8ZtdgD1mNP7nTyNKe7g7v1a8jUWCWDEM7dcvr2FEtgjpw2h3kjhZUFCHivbpNNtvGGQdwrJyAo",
  "key34": "5qymjoGZ9tYB2dAv6myfYD8fjRSBF2QARX6UFvhmihGgUZ7YSgeVvYdUfwvNQ4tPS9prmi3LS9RDoPqexZ1dB7Nx",
  "key35": "2RfHagHTic7ei9xPurnJj51yw7GEBG4aAAvtLGf7cZf64eJSm8Eu6kYGEUPxPcQeJUEezQsEbKyQp4KGJRc3DW8n",
  "key36": "5i85FcTq3g8fHynFhWyFwsWJrVAZfGvz7PsASx7PLQp6QuYhwjVz16hEVP6royYBe8MnC6c9joTKNLpFz3tqhPTU",
  "key37": "3N6FadP4X6NQA9yqU2xn7vfjrz97B4HPkUXE8TTBy8mEgqnksepcWaGTJDzqyqDpYhUiopEDGTSPF5rQDRNKbPkt",
  "key38": "5S7LyEzxn8wFWARAgLRGDAEBERJzpdjQspAGQQktug6qSsUbyxJTUvSPjeYRhaj15iEH5z3AcA8RMuS62snCjnLU",
  "key39": "4qunft1KhC3p2xhr3QWwbS9zXcmqTK2gUpdTcZ6eueu1Qfm22QH22gzYvfAVcsF8Cm9uRvuwdi1D1em9adJrGeY9",
  "key40": "9RFuJLosVWZ5VYWoRzoHXQUQBx9QwN4WFfbkVvBn6FNk9FMtz1AQ91KGyS6cLKKqFjSfpcpxAJxyMRpEwQjHUgy",
  "key41": "22yMPuuYevzzfVeNLrN7pch1QbR8S3GjLpbshrpgU3apZopAXihfFyNUNayveEJienAmBnnNNJSUSHjAsRfyMz8T"
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
