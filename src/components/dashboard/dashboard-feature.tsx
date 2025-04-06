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
    "4Q871fUo2N1X8tFtiP2rDAxf1dYoUYBY5aT7Fzp5y7sMbefZNtW98TNg5mpucqcxHLXnvo97ZFFMXiVRAt7N7JNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KdJ9aWe9ZGN64YLjR96C8JBpLpntaHCXhNSq7NFLWqQv8NSZkdsLz4RhuPtdiAm9UH9nFVwvggCmygz4ZEiwSak",
  "key1": "4t3CBNEHXwMHj9cWxKB3QtPM8njqymjN1vcUYfBVNKAeVcNWCfxKwiHUmsHrPwkcBdr1PZ4tCdSFdwfEbKNQwVya",
  "key2": "4vgbJ8d2BjroevTWQKNFXEbM1ZMCR6VLaSKr6Gkdkr9n5M4WPX4HwBL2SDCBuXaCSuuzqSxAkfMek9jPtDohJcnw",
  "key3": "zU2YwRWmgaEfrFwUqeWfyCe8NKAU8hbi6Ly2dk4YTYWPCYadpwQjnbZpCoVHGd9p1LLQ4PG8iu314Sf3gHVPZs1",
  "key4": "3Qpq8cNqVtzDhcugakUQydTmDSHnJVe9Wcm2XpbKHYHpF2Kov5R7QFUZbjZcwTygVRYX88tEet1815iY22rzEojp",
  "key5": "fTkFr97mw85XGCRAeeMPoZPP35FQHvAFKg2bnMNbCktRtqeZNg5qn2Ngh16bedgjZSjdLJ2jitENT3pWA1ErEHF",
  "key6": "pJoZ5ZtQHjTJY9Qaj7Q3unwxnnXHqj59vMNUahtdPkabtwBCZNgP8iy2xZzSdj7Fe6TwvT1yVPHKXABmWziArvz",
  "key7": "2515KAugYtF11QNcmJaqCDPSHwf5cieWJURVwoDZQjVTgQrymQ2XgLerz3CcvvLajYAWxsVpeL2HaJZUy2WNi1yd",
  "key8": "3p6NQEj3gpLjEbGeKjykw898396SMv7QmYqCChZq326FT8PNjVP2N84RVrfa18kaAEzohW9vY8gyJDi5tqD6dbpr",
  "key9": "54XTXK2yqyNL3PS4rgziVz2ega4hRsxtobHRnyyjXkphghrSijBFZHgqPe9JbeAFPH2CZeaZfhQqCvbPGvFg2tb2",
  "key10": "3pfEEXVZp9EQuHntQVg9cY56B4qTm49NLVy6roieYCufQ3osT3p87cS5W79dhCpQxCNSQxynuct4T8rozapeZGj",
  "key11": "2Eyet68rK7KgzHykC3FsPDEFtELvYup4aN8hgGk83DMbGGRYYAEy6BPPDHjXEUP6VHdECDGCTuZmFsaXg1PdxDmJ",
  "key12": "FKk49rDgDF1YcdjTZz6cKEtfKbVCgq5pikWqCfC2JDK3DqosFzyV4rvjkbWLzf36rMdv2d94kgKc6NiXdz9N6EH",
  "key13": "5D3eEhU6Fk7QUc5G3khLRiWjdotfukvWbDKHu9R56bpc3fvdGXJLMUBbZJe3AohvQUz4n5kevisWWMHV7jNTvyx9",
  "key14": "3fhBnnVSZMtSj1PEZ54jQTkwkXjSgmM9PKzTzkzdr9LF16uw9N284SpSER6k3TB3xoJQqcyw6AF1BY8dEWGWHxGQ",
  "key15": "3HM79EDpPWcXGwCfsqnTivm1RhA3RCaxL9LvfBETrmcxJfK39Pt7x1WDn3gVQZTQi2HexpdhTMqAJtKWG5dtUcng",
  "key16": "3sDuJn5S1ZPXNZ7VzjzxuddPqVPudhXNGrwBaCsc8LtNLHxSPMYTpQV8CGmteQ2BsRvjLD3KX2JP8Pew5NM3Tr4X",
  "key17": "icYxuKRZyvXRkAhUZ7zvwoDvvJQvPKPAxsYCq9zJEvHEBAAMTAtQCS3x9pVK353kR6RNs2AgkAbBnHdSTKX8BSN",
  "key18": "65Vmb1bu7Bk1GEhpDezuSx1QN6iSpi9DR7wyVhaEZGL3s35tBNzCd1zV21xT8Cf6Y3jFUKgtTj93usa3U8hxDVAo",
  "key19": "4EV1EAyT8ehMpom7THNsKFv5cC5LNjjWfUa6CqT3y8au5v8EFa6cnybzjUvo9Lj3mRq61vhXDPnqQuJUX2pp2nqS",
  "key20": "482rZX5uukfuL83QQXAUdujcu4mkQ4nZWYRgGygipCLg4pnQew8yyL4FcrKdvTQSX41KH5cyxRSzaPPDp36v2kb9",
  "key21": "s5XgUq6ZWaYaJavTKuo5ukdrKpiBJ8FoKBWuGFaHBYqj64LnarmyKkFX4PNo12DybgjhEVJjWzckd1NETGN1Dwt",
  "key22": "VQAcR18eiVWsESrNgWmmJ3wAXy8LXFNjGJJ5aEALLjKk6kR4J5d6xtZTWFv5Mh6gJbjxobx4BqMN8KqWMxX1cpr",
  "key23": "2LYdWWHCXgPkUScsNFJ1APmjSoFVdZz6434JJypL6b6WaDLSF2fGtLFJTH3fF2GmkpnVYAE63ZyqnUYXPWBtSN25",
  "key24": "2LvWkLsqtqLCSwtLzg7rqYm5E94VBLUsBKS6bd9n1tn94w2VxsnJJxHzNnDpKvMcV7hJw5WJh9CbtgzXn3tX9tbv",
  "key25": "4c5ohLDpjckmaU9TaChRFcXLNNRnCiTp21hG2Mg86o4TKa9w8f4JAZ8DXY22vCmdhuGATVCxP8EnAKVnGkusTvxp",
  "key26": "5uqLrouXVg9fLrhS1QU8D2JxxaeA8btskSBvrUQ7pZaHShhaScxFejyUxKhudz32RzEQxS5mULAzhwrfwAsJCXJW",
  "key27": "5rhAdne9Q8GfZpNdmEUMXkH2syP66v7Eq2PcJJMfGx8h3LL2Y8im7CNQpmHYkUeEW8QKLyR7nMm2oNRhzgTTdySP",
  "key28": "2U9bpEgZjK1bS8RqL8x4jZT7jofaQexFtUNAu7dgj6bx62Ja8omz5JBc4WK9B4KPpzYYYuFgVquyMmjCPJn7mgE4",
  "key29": "5GhLPeBi6TSfSRTVAh3CBFALP6UYyDdgCvyaYEXPU9kVz1AJridPD7ow8nmvgx1qDer6GgpwSBUsdqJ4pV4brKHq",
  "key30": "4rGSrU1XK1aaKUwTbWYXACuJDLX6Y4PVmjU9Q2tDP9syHaze9dUjEYBb9mH4GTEAttuFx1VLdJfbDShVBbYZMDko",
  "key31": "tHavY3bBdfV3pj4wUXrm8zvmpXTCT92iVp7RGD1E8HkEnPVPWHSxgDmGXcgWC9Sg4dT4wFEymq1pwp8SrhkUUN5",
  "key32": "3P1QMYZ4dpiwYdf92vwK2TKDsrzHczHaAnSTZ2nqL7Q72yep75kDf4tNQmTu3tj6pHKZ99TGHQA3f1aqsQQdob9A",
  "key33": "e2eKe1LzmKRUwet2g6DUPBj4p8WipNpQCMzvAZ6SKthqBoFpHX4qXNGVavargtkT4dLQVCkXiHBrdrnDiBHHN1i",
  "key34": "2KCiBLnLMVnEcUnJYbrApZU1EpXUSjPaHp9eHUUv2MwYBJJXoiTx17mqhMv78ugH1GXRznrqcaKBkVEnkLkCgefG",
  "key35": "25FLouAjo4KZEUqWP3r5wzU6s1xfQUQ5MLVBbHvw3zV8igzJfYS9KMhfE2pXBjfPcqY5fF9Eq4CvCQassMKAD3Hd",
  "key36": "skuETkodktbdMVbVzMNfoJQkk8KQSaSh74XKzzRemsNoFv4fuRSDbpsAMt1LX6VkPThiWkCDnhGngtmcV9921wf",
  "key37": "sJUP3MhH2EZTjvykTAsywWheH9JV9ctYBhpKTiSiTqTvzr2RCfqZsyHGajWHLUn2PiVZPBKYckM12DfBanp1jdb",
  "key38": "4HEzUq8uy11QDJrqpmLmgLuwNkaAvSt9FE639MdVeyYyvuzWEAXbR7aX7VM79B7AgGK9b3skQXpeCkkWDTLkAXgg",
  "key39": "2tSzdPSmai9jojLGMkeBhEZZcURQLrkQbgA2TkPFPk57unrVHwzBZZaCVQFsdsfiKUzqUyNqTukp5NxBVWpYU1SS",
  "key40": "4x9oaYfMitgE353ZPLVejKHutrkpjpeTuNEQeB88u45LarbAGXgcU4PJze5xY713ZZnjzfmvrUiwVU52b9rQrwZu",
  "key41": "24xfFKKAhypn7Z2qQWzxVccNoCMNdW5dZQjCbjDBhXwCoSNgjfjuPQUxQh8raEyLWzpX2mNhFuCSwK4RS33AENXP",
  "key42": "5yRrybL2uRRmugXnUDtsPYDdSr9jbVwwRfcniBK3t9TZuT2PWU1T1uuMZF9YBCxYMcHTPeyEvjWrMftewdvCLpbe"
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
