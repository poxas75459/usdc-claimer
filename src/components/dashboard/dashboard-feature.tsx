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
    "5TGj4fLPSj7zfFYFtkmQ1gKxeX9w3r8L7D8yKEq4frpn22iy6fExAC6Fn518e4CdokEVT369P5gSE9WSuZ7ZSGBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z3sEDGeXcesN8jQnhitT344PWZcNQSPEJjaR682ucgNme6Rs6HHZ66WqJb9GcykaW6bQCxbYS2AwXUzt7CMVKUd",
  "key1": "362vsXpSCad3heyA5wbHpQ3KM8ZTQzav9wSSHcoaP99Uxz6KvvwgmpmzgES4zzaAk68P375f9GwKTjAbJXsauQXb",
  "key2": "23rmCWTYEsyHfpDV5MvEbcAiwCysbKkqiam3CFcwtr2KiU2PSkeQ8QAxMZXQAvXctbtbYB3DJw7rfxEiM1YqiD7t",
  "key3": "4C86G5AJA1rkE6rVzVT9C4h5i8pZi6iQNMbGR6FhDQj3dDpFtGXz878w9KLx6z4zjrhLNFqdqYQNMGJstZw65JFW",
  "key4": "4PWSLMVHm9amnbY33s6LAedcBXUYkiqFUw17nSAhhRYaWwoYnJR7gK8HePd9ELX1kHgHbshEViTN3ES4cc1pjia2",
  "key5": "2tJMw3k1hSobLVAvN2ytcFWvpyRi3y9pSxdpaj4paSSLhPnFrKsCvhWe3RntewfDJBsTLtfAVrcguBZ6wzTiCc4Y",
  "key6": "5KD59BHiLpEnGPrgHYY128b2sf7URZxzmZDgfovpUgN2VzNFc8YxcP6G7qbeGNwJ2V2RbDhSxBQwNtu6PWK1HzL1",
  "key7": "3dXJmMEzKFNvxEgJo9H2T5UPJJ4ed1VoENV3wb3Z5YgMnCT3ZNK7deE7T7MsCzU1ka1uD1csjrjmpW5CutQdACKe",
  "key8": "5UXLaunjTUNxL8nWy4tNmwGd6GsmWxKV5SjkSWwufWsrKdoeK2ZKsVUXburErKkaK2WHjESzvfbD2U6L5Xz3H2LS",
  "key9": "KQ9zUJHT8v5JMJddZJv7w77be4o2Wo3zNwBaHSb41BcxWvxwHP9WuteqgieX9AQHXvgfjQSgCa4hupj3c4x74a5",
  "key10": "4YaCBZoX3meP3e8Ycq4YGkS2acg3jwMoAWwn4UZDhyznciQpZGeiwF7A2a4tH63TmzbzzRQpRknK7pZFVhTBatGn",
  "key11": "3i6i3PdJbXhUBFPgDBNu2WWomdB52VF6yRXdVABpx9eiehtErkikcbdiHCNBaFfvLHrSxvc3SdcSbHm35i6sAxTC",
  "key12": "3dK8LSHxoKb1wtanDEc3F1tyc6t9qs4L1e8jgLzfqNUxePSQPpVPM8HuFidnuTnsp6k9S4NRRBjNjsZg6SxtNLWU",
  "key13": "2m5uZcMhdiHfVC5GWkDrPdcR2M8DDgVoeSCxK2FRAR3aVJyjax1apC9rcvfKfxtz25XLny6z7SusuCyfvcpc1WD5",
  "key14": "4nXWirZ82aPu1FY5yw5ey6wUAeLgAixaj9zE6guyVqZM9rxGv6noH3HDyQicSTbVcmQkzFL7fRRvjrt8ArAM4JZS",
  "key15": "3yVjjW1HBDLowizu7qaU3EE2E59HXJZ3xCucRbFpNe8gf3sDqysx5UHPCwHM9hwuJVSHNqd6SzcDKJ9iU16WYmg",
  "key16": "4DevYr31vpeozm95yhtECQutgmtV2EstR1znXSoJ98CQfqNMreLhCazc4CC6Wzy7CTiVDugUwynrYNQ5FJMfzv1Q",
  "key17": "558GTWzuKEKCHDMHd6axMVT1nanHrv2DcCmJZcB21ka9xgVe1zXCR8DJPPKnfD53LAEJX1AjuNV5H5eKWx7EePPU",
  "key18": "2W4Xa6TL8ZiJkQkM5CfVb9yme6hCXXHQrkouQoA3jVQEcsAn1PvVmPZjyzJiWWgRV7ibbUfrZASAQ1zDKkb5fvE",
  "key19": "Hz2FBtNznu1rcXQCV2C6Npbr8vcmgNkj9urDcC5LNNMyht7RN2oonwmJcsg5bnJKZAhRk24X1LmL4bpuZH3rP27",
  "key20": "2cfKPKpSHh3eNScwBMoMjGStTYioo5dk1eRsTGFgrat3CZdA6HCGCNNNapUJyndpSxW44cKfSiyXn3HevtjF8JFL",
  "key21": "29DuAFdfuPYJpLQBCucWPWzd365w85rEa2A9WnKkyqU2qZMsoX3tE3u2m8zWVQFpsBFTvdjri2siTgj9PbvfUkYk",
  "key22": "5o9qex6yC36KD6RRt4iqxxXYpWZhuXwpnEAiognh6r6CnCftj3gSKMDt4epGSq327FWMHjt8TdcwTf8KcTNbHN8x",
  "key23": "5WGapchS6jxh6PbBNS1d2EMozJLB6pSjuxh11wTdsjZGenDaVb3ANepQg74u9HQgLmhBJLkAumzHgbnUpdVmUxEP",
  "key24": "QvBmkTGTG4KT9WeaGv17igmUbzL7pHQsVgDPC1o2T6MxB3SQeBMUXhDnTL2CGvMFi62KccMiSUMZvqT9PWvRDGR",
  "key25": "61yk4Gtsbz8ydcW4BNpWW6nR1M4hbCBc5F9tcsUBQMgWQnHgvqQ2SunSHVs61Ywx5WLEEAzsdUi5dDZipfQRWEKv",
  "key26": "5tR97MkhfNNCyi6rXdidhg6kwu8rQ4yo6uSzMLm1kzAHDFMKRsJCUC25CCTmsbGBDkBgfJGe1Vf8WD4n3MLUKYUq",
  "key27": "2YAfzQreZ4t2A4Ho68B7A1bphW4qapc4XG6LRQVMhqV7GLD83hYQxZF37YLzh6NJE74gFL1XaTdUdEQsxRqiV4oy",
  "key28": "4xUGJFPvNPAN8VZrq179ZvwoVQBr7xQxWFRrV8ZNNSw6VLjb6Cnk5LAa5XgdgANs6zjxRiXs525wrVq3b4HoojM5",
  "key29": "2jRd26HpVjFHLNCnq6JQfKFhj85eKo4VV2PB761j1M1pZzFbQigtuwrBKwLrLx8rNyFKXoE9HXW1zEpxkXqKLiqk",
  "key30": "3Rt7u2WCdeZqy8inJvchbki4PXJ3VG2aqEg6zNfC1UoryMGvVBtxSUKmsSLJBT67ux27BCJHr2HmNH8yjrubGDyY",
  "key31": "ECT1p2Zx878h4rWiQjvME4HzacmFBprm3hmxbvMkL1ByTGeiCyroHTkQqtTeUvwBseQAwzhCCuXLb4nhZPdUbrc",
  "key32": "MdqgWURbNbBtfsdeUCTZE8KVqfGmAjBpDVaaVvREKCMc1SBpjNLJNinTWyR94FLFnCcb8cq5ubCpNwnCcFjR2w4",
  "key33": "63ncvuVRSRYgyB5zq1WQ4G7gqi7DKWTxLqL5txFaqDAKrGSBbskAJcrZwdhoCSUDsBQtVadEzuSRnA1UaLPdCx4K",
  "key34": "2RC4yhc1eLxGSbKM9xX8ofsG57MArGzCxt9CxDArrgKWXMHcCxRFPB1DDajUXWAnQCj8DTHyvRKffXYt8KaKuFa4",
  "key35": "4xfkVBS4Qkhi2vFFEbfdKnpUf8Cv7ua4B76rgMmAhzgXuTLXaYXQoo3fBnrejKQRgG4YaammCTrU2GsBqBd6qxL",
  "key36": "2XDiwu5p5pqnhyXC3Fp8jCngsT4s3hGAWPZEkQLAja4dmAgMHhMWqSs2rDonQYJeYymoH2ggsmE5qLQg4VUWbnMX",
  "key37": "4j9CaZiej87coTFZZhBjWRF7fsjTc3preY3c9UUaxfWXiQVw6b4St1jFYnuswzHBWTtwo9P6R7WFqBs71vjtZMLr",
  "key38": "3khimCDR57ob2oxScTnKamFaXgqvc8hZ2nJm8rQHHxNWo1XvBZtWWMf9wvMZZc5hahfpGTNMwKVVzUup3jpo6ZYo",
  "key39": "4JU4SJ6H3QnuzYoWFkzDFMd9bkY5Cd3VCJjCpdJtdtnXcND6EgZ3u6t96nGfMjyyiYcQiAXbjjnXXmypY5Cu5BuE",
  "key40": "4LrBkQyghU5kd6quRHcDiFjKbKSGPzRQ2rfKNwkWJecXHit9Ts3GJwV3Wq5U4ys4L7PLyzVSntG69VCQeEaPqBbx",
  "key41": "5SQpDbbJKKL27JyAkBtx2sUwfb8XEWiFAepYqfR4MPxUtrjo4WgAzNeWS1Kbexmkpq6wagdwdLpFxhGctdxLpeFr",
  "key42": "N9kPEaDcYUWCjuy4ZseBbvCvvDRv5qiTZbVsa1Kz6Yo48y2M6mx5JEzEbvpG4TKFydD1vGD7DRg7TvNR9vcdVoq",
  "key43": "5pw1meb6pz6zRNMZ7ZxziVhCqBBPvaCVGnT8QhjyhkykY7SCvdrYvkb9tivxQuyBo2j7fzguMmGRBGAJc5N5eHy8",
  "key44": "64tyggXHXJ6m9YnhZXx3ZdvNdsQXE2yTCzT49Kg9vrgZq52c8mfDze435jSZ2BT4BAG799Z6dAJ3tWdtGk9NiRRz"
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
