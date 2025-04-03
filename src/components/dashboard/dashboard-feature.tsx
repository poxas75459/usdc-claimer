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
    "5gXZLEmApXKxFuiu492CnxutzfE5tn5P6qHBkjWuXquYycgobNzPT5wTmiQcK9vKJfTqcp21TmpgFRCtnfHdUXqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uLPLmQx1c6SHvWpaLTiT5HaeiMNWNSeaAv4cuLEwxo5jE8BvTwZpvkP1cKFR6AN9tAxNzwuuFKZMCNcRvjqbRea",
  "key1": "TkwV3rhuGWBAHDjUXRdbEUU2GDVHX9K5Y2JArgtcoiG4Bc67UG7akyHXXnAqncbvgYcfnHsNebeX7MrXhnYB92W",
  "key2": "5Ho8xakWZKRFWf5bGphB9efdsJYmZf3RP5ZrAmQYPKRaWBCyXqghVEuBCXAWLaPXkJwRFnuNPaxDQDxArnhpfZmN",
  "key3": "5CdwzBBCdWGqaKexkEi8EECWLNM7Cz8peENzQa7zBgxJ3aA6S1CkFMbwhwDzqu2zt3vtxJ6gSqK6NrALSHH4Ph4k",
  "key4": "5RbdRGYWde2sJn1cqrbadc97hHX8ALhdMMb1589jdWxULnJKHBaMCbzPW3rjB2h76Nz7qb2nZdjVNN5LbgymUB3w",
  "key5": "5Rz8kx5uhSjcD6Hgq5y3b3bsuaqPHjksKvBz1jhx1WfspQQ8ygRx5f2mJvFZdjaDE2vmTDp7wut66DSM3Ztd5gSW",
  "key6": "N38QDDjFQooGg3geHuXWm3avAYDdpH2RC5G4d6cXdFBuKRxC4fz1yWY14T6i2R94WfHtfvwVPACqqdyg7W67U1d",
  "key7": "2T7AGFWyMGkb6kaWHAhuqgwQsojoBkcExivJSSPCQqXgHE5bzebTzGFqWjGA7XNc2sj9EPCppUsPXt8bV8KEfaK1",
  "key8": "4p1ekoQ6u8kwLdDKFfVWsEsaaDdNzw2fkxdqiRnEDQniMZUXqbiEkd8v2T6VY2N6Eigm3HtYXMjCjUP6gqXPPJcj",
  "key9": "4PPGPYP42hVgprUsDARXGfnAiSEASvTAhSX4uCuhCDeufjKYXnDYvjXiwbNS7aYi9aR43k4C7jLKYFC1VnLjnmPp",
  "key10": "TGmyw6Kws33avXHCsNs2mD9WMPQ5TVbpNoQXFpfNQx5Mo8dY8X7fjtmaVGA8i6cUDVhgi8WBTrhyB32UuBAGU9G",
  "key11": "5nVnWVKrpQNi5e2yo1nfuy3zKsazqPutnzApza9L2hFowf3ZPf9bvHFvDKkhDgH7SrXZZg6KzGzYiLHQ6Xr5yr6E",
  "key12": "5vwrXzHR8xAaWFBLfbrnBfHjKejSW7B6PPSkbRhNqR1Kzwy7rQYQLYwE6rqT4HV3r2NTuPRYSJQEuWvsSoyKAhgd",
  "key13": "65dBUDsAmjDcWZTyvhiBGGo4PSd1eDyv4PTzYznuMvpo4JycmqYxPupJmb2JwBCNDJ4EdR3Y6sgELFZyqvhW9j1C",
  "key14": "2QHKHPS56U7nr7fo4YgSMT6NbfCkvUWDKSxXfDozWxC9E9CTZZSTk6fvSDpQtomH7zdJ5F7fiN9HtHkmshsEPLBt",
  "key15": "enLUEwLzjVNR78mYLD5dAGUk3ajzTY2ja5zhaXTbQuELGb2xgKhGYu6U1yZ8aUMCsCawc6NWCY4FGRNCEaJTRdp",
  "key16": "4fnaULNBjEqHjLMEfdoeVyVt4EEiS8zkV4LXpVVZoCRA5RYAr4y5iPHt84HW4ocAKwhgd5LNtd2k43PLJv1kXj3W",
  "key17": "4yRWCeNUWNE1YjYS1B8Z6ft8McrasJftPQPGFDXmhmzWGy3mAcoBHG1rrgaUfpgpy312rcLwYHTXSSKFXu9pvfkg",
  "key18": "2TAQfTk7HNE98Rrg2A6pf5LcBg4YoJZ1apsscRGCSozFFUHoQPeDwiQa6ew2iKpNKotMvS2yvDjHm3TZj5NnLHBy",
  "key19": "52Ti19xZgzkhcLtoJyuYW5StVNTaCswvHZTJP3SBpPHJHUNtnLf5VNXw1i5mVAgPoYAvErmTCmVxQM5yYUX78vRn",
  "key20": "2VTvXv9wY8zhiGgzdBcYtW3gQDi269nqwxyFrxNhzfZ9f8qNHyF4MzLcSDuwhXLSBV5LjHRPgSRkF5Y2fMrC1xW1",
  "key21": "3uw6sjAbFpN8nrbM96pdLDrhs23E8ZgdBVonPZevKqUkX1enZmbK6ENxtJCjUEnYPjCqvnn5XuNWxqUXRwcmHfAq",
  "key22": "2Ks5h5bk6YY94oXKrGN4nQk4bThoWJmGSZ8y5ApeMvyefUupD6gWLkCHPzbESFoTb6a3Jpk4WCD9tkHVDWbHLHyg",
  "key23": "bP8UTsEYGUY8Ti1euPvvMvDqMZRfYbRZ8QPo21m7Yji2zBNTJTTVTuBVwEpbzq6TFgqyeHJXnv8LUFricY6kv19",
  "key24": "5tPD58vxvwNEy8xyLFfCi9bRKz62RzcqpGXwabSxSv5d4SLyFK9MjD9s5z5VBXLzAdztPyYTCWvkFTSG4CngkJT4",
  "key25": "5Ef7r6ymEzc9aokBD5LXPi2eH3DA2sdYEFpvJ42t21grmUwVkc5k1APG9aQ1q8CX6gG4PMj5QFxPUGFATRC92LVJ",
  "key26": "2ZEQQ8QPzFLLhfZCamaaXwX96Bnr7VsbFJVk36p8kYt5fr5JbxXCgbuTH8y5pwgqkucWRxyzApLje1GMFbHSzTPa",
  "key27": "5aamD65qYudn9fbUhutFnaCodtk1fxd9xx2JkZTX8PfmAQJ2Sq5KnwCggZG6NaAFc2i9zDzqatUY369Hmh7dTe1o",
  "key28": "RqRg6g45VBgMgVw2fzQqvHQUTbNE2Fh5QLTDSj5MNBtULksY93WTV1xqcPs45b7ytd4oyqnzLec8tFUaPnJPGte",
  "key29": "2z1SBYMAv7PJ1KHtDRazwCFuzp7LzMAy3yXGyR3DDhzgxYMyS9MdPSUf1m5Np7rgzQEN3z4mnH6vfsaFA2M7gZhS",
  "key30": "5Efi5vSAwwY81jLrzxSiAhwiA5LZZVxrvbWeTLNuVMUMWd7buP3y9fHpdqxf1b8HLXGUtE766sV4Qj9XS8R6o1vz",
  "key31": "5sxDLveXS9gh7ciTsZXpoYieB27RAeh54wqJj5zaLuvoVb3XWfY1Dozz9ypBJcnwAZ6HjA68vBVu9Hcavd3xkHUk",
  "key32": "2VfktPiJFpNkn3dAUXJbAdoqoELUKpziqAtrH97HCDEcXa54DFAyWDaC7MsP4d2oQHwCFb4F2wFViWuYX3rqwdoY",
  "key33": "4SE8jT8cztXQ5HGpBtmee4HCfvDHkgSXTWjgWJB2dsDr9QrboiJjrA6Yc8xU4G3ffJVxFG3BbRX1cUCSM7PFZ9Go",
  "key34": "2wyh6L456VzhAQquF8baX3jmnzjAYdLT6ydwRAu6ydjVRTm86aN7yHbqEgaUw6fSaDqt6gtDBKTWsCxxhWnRNH9q",
  "key35": "4LyBEEFUhgY1HwzakmJDfPaRw7jMycCQTN9TpBKVeN3rGafthzSCkp6pK3E8GAQvuqW2e9eVu6UzxxMh19fQXHBu",
  "key36": "4XmKQbEw9M54MaGxAJRW9SEBBPfHdPJpZB7ajKrkiMSvK4aqEbbp7TCqs5PssAARX68Yr9k4yGhfoVg25GVKGJWR",
  "key37": "2nz7HLaJogHRQtgQSiThtwxvLrbfGimWb5gM9MYMtM3PVxDMtR44oTHPUjrbWkgfkSaMDDbc1iYsT5tEkMqijbnU",
  "key38": "4W7V7sKickYquqoRMfAzkXnKpmg2619FSi2UM75NGZVVmQW4U9VeaMRuDYWbDneJuU3nvQcBgL87W2LULByvcbyR",
  "key39": "3hwQFGcsACm6G3TyMEe94vAetAJrbC27RnPmzhZdVEm4C1bpjzwP69GMfCnLtkRriDKJ1yvocw4WqmWwyVAXTrmV",
  "key40": "3suGg9EqvoHWZux2T5sR9SWQfax8TM6i7WnSUB6TBfmSPCD4kFaqX6NsLGaPwEXg1mLMMxfen9UuVJuUjT2bvuoR",
  "key41": "5apQPL7pekaNCgjuYRNNFJs57tQrbk8jWZBaHWH9unWP1TTPfeHKUaPcAkSc9375CNsxms2EU3HPucqkJitFfQmg",
  "key42": "2B3KM3RBdtQ3F8rPvvNJ2Bco1v15T1ZNCQb9i3WB1tA5S1GuiUKmVSR5ozUzLfEK9t1q4nrPUfsUn38R9rw6Q8Zn",
  "key43": "36DSu4huvHqa5y4zs64E6ee91RNeWUcniw3A2K5pFAvmM53GNyFPaiNRAnqWALTXncR86BBwAQVTFZ3dcLb3VePa",
  "key44": "2Bg9UF9hms1Dqbx3PtnRQKfYvRuD3z5Qgvwu6gaPZ4iBfTt4hBjEx7QZstKPYVpAY6oywBqAPSUWZBgvqmPwBG3c",
  "key45": "3sKh6Pefi7mqNzjMFfh72Kn14QrigxbWNt6Ujxrzy5yqpTwJtyNmWN9q3YsuWUq5zpp2qZJT6qEtKPoFJUwQghCw",
  "key46": "sq8jt7To67K4SbMsnKsgMfRBixe2JVtgCHFtqbnPApriprrFNRfeRpApgon4ZDbtg7qfXLy2iD6kLHT8FyAa3us",
  "key47": "5GW28uYwhKUjJ5G1opM594N43cVZSasdTHuQra3PLJtWzm17F9yWGKehc69H3VcjtLpYwzuTEe4e665nAjxwkKqY"
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
