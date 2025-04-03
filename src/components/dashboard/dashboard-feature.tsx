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
    "5MYiLBTtMyewLG9XpLKX6PoqVi2VCkrFu5pUT9NWDGvYSpB6GNYneJstLZx46hUjxojpGEu7rNN2ivjB7ngSdPwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "389byog6uJcAPEC8XLZM5PJEXsQfzPykukVNBoraW6Dv8TysLiigLwqYDnrTM77BjHN2XQw3gs1wMBFbwPJMUzF7",
  "key1": "5L5ZGrpHMtjzub9v8diU9XyPrQQ1gAvt2ENSttZqMWLpsZNGCNxTALD9YSFAKWT8NRxESebguTxjJZ57XGDyJvt5",
  "key2": "jRFyhFrGBEyjcG42xnNCvTjHhJxGYtQ62oVfq5MKj2ZnVWtP52dCBpML5B3rXVmYLYbUA6PQNaE57Py3C9Un5Nn",
  "key3": "2KPTZHaHQSuKQYEa44PBr5A1Y5S5Fiwu3Tx2rAeDu5qkTNsyYzTccDTGVri9yP84Cmgugd5qVu2fVWcKaGhyYzk7",
  "key4": "38nDeNZWwxCnECWEGo6wUYzCJ8AmzUQ7vY7qH3z1oCj2UpAJaJhVuEYgaZX4tvLJ6RsLcjCiqkEePgBJ9tup9rsK",
  "key5": "MWsdswpLeh5VrboUpY8sG7MY5pV4gwfRfg18nGWtvWMcWLK87hSKguuKqt1QV8cNGUqNC2ihGBPPqV1v85QzwCf",
  "key6": "4zHwSYePQD8hGadSTgs4N96LXhaVa9zvZEM78i2uASKf1MDPAmUqc3SZWVXSvu434Cq7HYw7h8AdLTHKsgobHnMq",
  "key7": "3W4oQbCFqdt96vumAray1agG3K7sFz1ywiMrSFqbfzWzeXXY3J4vjcAYAijqUhLBhidjszuvFi5oNC72Z5HLnsoQ",
  "key8": "dmCfbCPw4nk4YKMxbXM7SR6AJJoAiyFN4aqTsmM6ZpYTDYxsD27vhWCFjLQAFgh42RRQza4hRd1TFmrJ5u7zb9u",
  "key9": "5hVoTEDLNtvgkQ2EuTP97RRpC5DK83FswgyJ8anRQdwbsGBXtEAtw3HYrGE4Bu15AF4YptUUFN7euHjvTiHHZUtQ",
  "key10": "3iDUsMfeFRxfPB4n9TTqrQRm9D16rT5d8W1XeCzoa5cktdKaBbeNy6UxWDQ9Ls7JpQr7yZpSTXQ5FJr2sxQ3CENX",
  "key11": "cZ4Xt483kpEGuWjwEZSTh3pR7bvSQa1NLeZL3B18UBWsyjXTqeQqm876SRvb44rKaBPqrke6d6feeq3BNnVjUVJ",
  "key12": "5GPSFw58UgLMqABgCh1BnN4GBJeuPhth2qtEJoWA3cXG5Q8yYp9VpavCV6PN8abJtDoAYSanBPAkZm6894VU2Mab",
  "key13": "3T3QpeKG12GjRMjoQA5XfyGrpajJxGKebRFKXurDWcrmde5jRn73QRzrwYh1k22MuohsPMFubJe2Nt6UqcXRG6j6",
  "key14": "4Yfhs5X7dJQJK9i3AzhZ8AWKiaiA1rSkkTPDeH1tcjpXQJenPwv5XqgzHrUGvFGayga2oBT6HKYT8gjUD5AEezd3",
  "key15": "Tf2Fzyxu6DpJbyJRdeX17AjGHocJpFzyLYafV1XpFJ81KRMWTv9zy3nCeo3np2CDokaDwvXG4L1nBJewRZCaeYV",
  "key16": "54GNZaNNKPmCTtrP6WQrCEimSh5z2An7wXFshtdPX9q5ZwrDe5rE177yH3ZfcyDwFiSGQZB7BdzqYEh6segJ9bd7",
  "key17": "313wZMnj2eXYZEZ6ETwFsAwH2ndtceqvewmFfeDa8qy15jy3NPW4Bq6Lu46eeRngbW9FTYUziT8SmSiePq8nxaU",
  "key18": "4QFqVaEuLRvXh6ZGsFij7to7BzVj6iEaZcAiYweXUG5fLEVJbewPkUFH2thvdQSrFGqea7pCVagWdXgguupBChcx",
  "key19": "RbtHJsNycMBCGrPcDUt3mi9MLu9BCSUNsr6fjJsKWEG3WN9DZekeKyaVSWuC5P2KnaJ4pw8bTWYufCBCCReEAms",
  "key20": "6rTXCX6CH8ZpNhbZM31vMXUNDGV6hoGq77EY84YpkQYTG4DhBmBne8CRVSgxBQ42ikdhb2Ue5chEzJ3AfhGQKWW",
  "key21": "4RDg1YBvYf5ecLdC91kuny13FyPVg59FzkVp9zRCpDRSpZ8EiTWdDLtPQZAU5DrZVPKZWq9F3Jb21stahxWUW85F",
  "key22": "3kXkWhuPix5sDE8N6eqVagQvC1CDEJCrryATruk3J3rRweYnsmEtRhz52uNGhgUu9oCYcTfgg3Jv1m6BRMkhdkA6",
  "key23": "3tpJRTXFXZdvVyB3P4aL3s3UYFqKHAAU9Sam6Zp8MpDxxf4w7NCAgdoTXz7qHhtRQ2LsYNcZZM2TikoatDYHpAuS",
  "key24": "2PBvr5f8VjnLJzbHxeod519RAQHwKXHCv2xq9NLsJ3f5vPELeQpj9fQQFexCECfGLxkHVDHmQaP2Fxiy1gikmZ8j",
  "key25": "2u1ix6C442FPiZMfh2i316JQGQUw4T5b6PMwF57M5iyDSDhme1Ct5RwAdfyQyyRrC5D6TeNgwvp1itKzs8AD5N5Z",
  "key26": "4ghniKu1qdWALEmszy35pjgmC7C4dEitv6URbnsAwPxBa4oTu6y2Exxqdzz6sLsn57qsVUM8Xdqiac27NNNaKUny",
  "key27": "2Qwa5KVDU7MqCkrLqhP3TXW5ByNhWNzbY8JvdxeKwp8agQop5bmNnjG2uSqLFhWgxpdDTMobfZpmVT2Eyk2KiMfW",
  "key28": "3GxXtRgGv6FUqQJxZguUCHQDK8iPUZs1yUptG7Vr12JWY2R73DP9PBuZGAVZViPbTHwbsjS41SYxueJVxQ4gGXzt",
  "key29": "8S7Lf2Hmwf7JfU9KRHEv8cXq2ozXfjdFrVdVgMKiJLuasbQxAkRUoKru8VnNFYmzUBEmvVCJvyasHmYVBF47fZ8",
  "key30": "22dkS6Xov514tUeoMgqFgoGNZCJL1noAdEcNChkoofivjeH4PXpEqfA2PqWWr7umw5gkxH9hVnpxw1q9ak86RGai",
  "key31": "3tZy7wDG7mifJ3Ztaeqe1qmqVVxuDi5H4w6YcNLWWG299WQxJkN6Tb2KGjw3W1TpzXR2uhdbvoUv9jLPA8CcqWmB",
  "key32": "3pGzvM2bFr7VTENwW2C66rQXppRAmnKKvkJr95VghKRP2LMR2WgziwzsoAVXVzYrJfiPRWBJTUFQf2t23M58Sdqj",
  "key33": "3PoKTZEGSs7N7FCXd1t3sqrZ2KiTB4Se1VQMGZX81wegYuTgRzA157HwaMHg9QSEX6m7VCez8fXtzLocYmfPWp8g",
  "key34": "Q2zK4fRZpSTG35qSSs4LeypmBHast8d43B39qAkrYoQzaL8kYQnCtfaxRXQnTna4GyfcH9LfYXsugrRETiXu6k7",
  "key35": "2MkUzNr69Kt9QKd7WUq82T8sXGYx15kD3eZU3rAvJRroZbxChWqgtBZue2J22ptx9cXsSiSLrSmCGavS4JtJ4GS4"
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
