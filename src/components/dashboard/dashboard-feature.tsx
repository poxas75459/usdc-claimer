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
    "4VNyWvUF1qMwh3fdcGYuxND9F8B1A5jnM4oVd7szTmdgWqW8G8gTjSRvErsDtJJv6egcYgWbaVtxd1VwwbPTXBJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BK7TmMwpQrBQP9FoJ3bpH8ZRjMc2GAueHzgDzZhfCkgD2TyaE8G9FawbgrYcZcKpJxqJj89XMSh8APkDnvcXtBL",
  "key1": "5MU3HW7tbFcUDS1yi1FG3SyTikSruCiRB6p2AomEdFqjkKjMpFEpcMZrVtvTcDU7QKExReKRgcbd6cSadymDJWwe",
  "key2": "2WRVCUuSh4hqMTVCBZNBzjYVEbVuvGFW3YMUxefkGrnYbA3JahRPgroYcDHTm2sNHN7u4g7jJxWyVpN8Y9vcXzWD",
  "key3": "TrQ65fXkuKGSJiqWbx7MBL4mH2uqVE85EoG6Hc3J4xNpMqSD9eMKUYHkK5dxfJN36eKef7Hqog2mZBPSrU3eFDo",
  "key4": "4nerXnSsqdcdKY3bDcc5hDfwvPfd95dd1vxHSx7pXC4n199gUEuVZYQvXRSJnHayW1jci6SK63XBEoHirqRQeeBd",
  "key5": "4Dc5pzXuz84xGbJbzbMXRQvsFBj66WPzgAYE26evYUhGMmhzH1MoXC7gRVxTWmiTVDzGg61ZVYYiQuNb7aZGod8",
  "key6": "66CWRMWKCMne9kp1C5otHR9aM8XoeRd2i5JFG8w8p3Zt883DErEgeSAC6K3Gmo6gywVcFGAMFs595o9LSM5qRCLY",
  "key7": "4Ktde2mwpjh9Ln5Uromb8A3ceo2hXnht9745U8TwDd7QKTQPM4mo5rCm9cTqf8WaPTtZzpu33rVkce1Dq43xbcKR",
  "key8": "4d8GpG73Xt182RLgKCMPyTKdYeN6Q239Dh41kaWqDAgjTNciNaQensQdY446LjaVtkFG9C17xzVDHMUNhtacS2Mw",
  "key9": "wuDmrufpRbm6GYgRw3mpLnJHGtBL8nk3KoypzzjHjgve7bnKUFQcLJFkCHrvM9JmdV8dodbb6Xi8L2jiCBJ8KDi",
  "key10": "26jZvjNLgbJCTkEfLJdP1vYaL8cRScY8mVoimm1Z3R6HgcJ2txtzK9TuNgNQ23va3BDdbBU9PRM1HCeBob3JxxFE",
  "key11": "jUUEjMdPwf82NQGon18viAGiRoPGUNnaH16kWi3dBdXHZPtrHEgfEpTbD2PVX71kxBktraQMr5gpgM4w93NZVfM",
  "key12": "xyrFqX9Bs6BXoZd7FgxLnLoMhiN72d4MFQr2PHZMU446T7N1kfyKynwJkvjvtPFV42v3QwVkrjz5QuvsifBiFnp",
  "key13": "2VKTwg2U5Yrk5YpUZYRi1tGq3YnopYCieqyoQLrWpP6oPHmsaXq6wFJTDzDjbrJt5DURniHfDfmRybviU9M7zSxw",
  "key14": "3R29VgmMuBZ6UhS8oc91H7mwCdTx5C1eQdybwMMu2VH5e7qVSoDTWVLeA81QwEHrRJmMGDwh2QFQaHG2mMxQfYBZ",
  "key15": "4FsFpKpYfurPFwGa6z2Z3KksZZBeV89qcqg1uegp2Nf3sfF2hUdGkbS6aCVkU3GdBqWH45yxCMaJz2dbHVm8XiD3",
  "key16": "5xyVnNihPSwfHCYtEXAcfDdW2UyZTiDPkq6QAvYbGXL51NK4PiCJkmsHrgnyCmn4aBZiViR4zfSLCYZ9NDSFfsvq",
  "key17": "5zh4xB28A9pYKs8NSwgzgT2RESEUgvx4P9ty6MfDvuiQH2gabpH5H55PihGWzgjJ8i935mw7eWZ6nZa4UfRJ3ci3",
  "key18": "5GipvJhmqTBQxp3EiiuxoJiTr2nm4hmVvqxm7Qeozh1s14n59BkP7u3MTpLPRm4LjDnHSaSD4Q534TX3zBRuXrTd",
  "key19": "44tw9PkM13yRiVccDwx1XN52Cf1wZuMvANA7uCFE2ZTiuvVetaxoFu4Crtsoq7Rf2SKHLM6jdS6pcG7agioAU6za",
  "key20": "5zxPmYot8yoPpECtyWtwgtUpepudYYziSrwsXcZ1bgyLNmEx5917VwuTdynMV1SmVBCufaiLMqasnPUt3Rj1m3F3",
  "key21": "2iv4yGgzrBNpkBBGUwEdyMxULMooQa1EoShVjBV6RxLuo2NsuRHbDMrZRPfbxW3DwETpttxELPZadYfS157nKpYc",
  "key22": "4cqvU3Y8bRFvncCePdFXJy3EapyKWXzgjQbkUKrAwEdmRztX4H4F9iq1YFDvNbc3eHt7H2xZ39BNNUoVBWs1EVfZ",
  "key23": "56BRqBZ83C2MzPSHhGjjTs6A9X2kwrzxMX5eWbxaBCHL6EqMnXqN75mBoaumpyvdQffXgSBCbBCL2NZH9HYMvtpx",
  "key24": "NnLfZhkmcN3WRcLE4gajxXegscwY9bctNDCfqKCzrCZ7Gs4UkEMKK98r9UYkLAkXdaLepDuKHRfupEm5dQwuPCQ",
  "key25": "31tTJTmsvSvvLpFDX66nEyPCTxryvESurEc5m1MmN6dpBVc9CGEjL7M2Bvey8RfcS1kB69EpWZMrK1iCreEgXNv5",
  "key26": "5CUVMgENGqGEWwwYdq3jm5V8AT5K2hQ7Le1CuyY4Nk7vauMLKQCugQS8MwBNGcZSB8kgf8SKXXpPDYyg6ucapfTM",
  "key27": "4W8zmjE6YYbazmR1oLSe2mBtMqrhupru6smSwLtLYpqtzHJXXgfoJR4e5ciUBRJEnNnDccMwEVJUjHaghUeA7Q8a",
  "key28": "2gcFuVvB5nob2fUBBCECSMup96mFf249LwvkmUENSds3ScdxCxjQHQprzdz8RgijCmeZ2Go5mv3yFJmVMyh4wnia",
  "key29": "4W4CDnFMBfUdami93qUB6Bb5CKryFxwDHyfMsHnfznwZb1znBDDcMaHQCpm93nnp5zyGtWEHBFMU9b5K3hV5uZk8",
  "key30": "3TWgHwxceqqkaA6SUdQ7S3QiBL78FGVuHZN5u68uWSj34BMYw4xoueDNdZLxzVMooG1JxKq82EVQKxBowgAMaAEk",
  "key31": "5SmGWwtRyHn1Nb2T1AuXkq6nFvEKXTukLZA7cvtqXz4cbFAoKqJNPco2ihJZ9GNK12eCF4avXv2k5URMuVsaPFzT",
  "key32": "2DtK4ipj2yjLf9UJy3hgUwfd6WnRDfqeg5mUfMzL6Kg3FosmTf4A28s4nTW1qW7YcnNkrSMTcs1GNBPkTfcWWp4k",
  "key33": "2kYHASLjZFEWfu53WaUh5WyCK1QLjRtJzLvz5x2jwrRcwbBHKurayukpuGufQ263Z4wHv6RhfDtcNgF2DgraXgkc",
  "key34": "4SUPJFTB9P31h5518eb15HFRv4qsEZa5BtNkiuwCxCbvBGg2DDfVCd7gbGvSYvsr8F6CaYTPc9TkZtg47wj9qULb",
  "key35": "4Z6orWVVPdwBrCyVAmdgPfg76HW5DpqCDW5s7v6Pj2fgfgwrUMeb9qzMVprpXoovp1YQW1zCuPbdSFEJnsCBet7P",
  "key36": "5AAp89BgXhezPmLdyx9d142J7hDHBGMVZwjs4rDLm4G1L9qCUr8sJ3TgB1RrVHJVxrFQToUvp6SqMkydj4iPhmEA",
  "key37": "5Ntk1Tyo3muUBgyC11VsBvkfTTtcoRtS2y4u9fiuziTTvyVYJ3C1p8sKzguKNPfBxmwGBXy5CUsB4aauG6dZWK9r",
  "key38": "4HidttJi91XCnaM6bbnT8Jd6LYm6de6rudtzPNnQDnxEv7A6R19ksQyVWkYFB9SANUA1BJgPGm3vbvJ2kBiWXdrG",
  "key39": "4ftVwbbQE8y4e6jcMc4NdND91ctHMENNcefHuxow91QCbw4Rb9YtPbovWJ9s9XiZgg67d5Aw8L8FpMx1YEaCFKhi",
  "key40": "2JG7g6qyiHoX9hmubmnECPd7ppE3tocJ4KtgMUnuQTk2ZPqyZuGLgi9pjXPKLkcoCWiQxeZRAu7nzKj8GkGemKcM",
  "key41": "2UtDpGb8SNjsoa6XaxaTK2pMxtEVDHfnbmwbxzeviW4fHC3g78zkXit1jQ2L1772EHJTDrjmPCehhgEBeHVA8oMX",
  "key42": "2LA86Se783uhN5gJNX8PNXqfyLTAWDkuSTXXkBYXkTTqQa889y5r8CENeejDokhqPM6qnQ2K6r6D9XhWKJsnuEub",
  "key43": "2toM6QkmTceNaq2tmBxLzdas1hirhJkAisWbTmVj6Acygx8siKip47Q5MJkTCszGzzf3xVBt6JhqN6bNTSBbJGfC",
  "key44": "5dpvkFq2BiuikMDeYqgyJek54X7EuNhbxsWJFyNhocSMzNjmftBjYEnojsNJAHw7wYiw45LmfwMMKxhziEG9dupZ",
  "key45": "67hi4KXiE31Cn6Lc9zwfyJwghTRHg6Hz1BkzDi9SGQ865SZcYtnqAFDM9M5ytfShvtCE1QrdzcozLS6RPE16kwsj",
  "key46": "5LHWnqULZZ9UbWEFMMUS2Q7HGNHXE1GxUP9ikVGpYWzTsPjm5KA3KkVFSry7iiVDRTsCSiu3mg8p9Z3e3HKyBoTn",
  "key47": "457qHHGQYN25vdNTs3eBSwrz437eDRtES7zpMCt9zaXQhuZPdHkozDyQz9SN3KXWP7GvjJ8pS3G9NMvTUYGByV2e",
  "key48": "3yCu1XgPnLUCTVa98mWhyj1Riiwyir7cDgh8ctVqPbDYXBSvTVnPuR4pcZbqccJc6jTmwxLKh4y65RUwcqj4vvgA",
  "key49": "3pRXAiy9MCA3zfbyZsPcP947bV6cYpHkT1ncP4zSxa82RPkiAX7eJnmeP8GUAjgwhYopTfrX2Nxeazs9iCeUt5HR"
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
