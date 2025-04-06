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
    "51S1WP4oNzjbxjVnzq9SjURuGzhqkzzJdrX7V6VbCEBBTMsoS8AwHYBxDM8HtuhbMmdaK256rAkqDd9m4kQc4Qnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQjWWhuHkGnFXFvGLL61Ejsa7xhHdCRZ94t8geTQTkxqB9xXmFH8TWngLpXwwWzEBZqkMY6SNruWsorKhzm1dWH",
  "key1": "2LZxmVnB6THv53J83m3vbPVADQkBnEwQNDbPpqSvFbnfSaRUCFNdWE4UGdDproPgcqWYRPY1xSNJSbPU7SoVjyA7",
  "key2": "5W7mkc4gKzdPPHtaudQCx3URpxRfbA49jP9PkfsaYPyxqD7si9PBZTtoProBWB8YamjB5CrJWkHXuxnRFTc8SDRZ",
  "key3": "4hpfErPSLyNzkCCrw6tVRw6wFPsNbPbGbDLECZmBX2qdbcBHDG6zE5EfWW6xK9AEDq1HsV97QcRnCN1nzyJNbokv",
  "key4": "2DBhsFHQoUEnPnCfwN66eiv6kL52n19xQVRNbuQZtN82EAoudtMux6Csqt9QfoXuE2sTtv8qpB7iPjomzJbMD2AM",
  "key5": "3VW7pptuH4c2ctLy6ufihxHqbHEMZrDSQyVqHsuchpLmQBfiRgD2WA7mp7DFrp4rXuKHn4FmgCiisSjB2nhhE3cK",
  "key6": "61zA4siccHH2vG4WD5rj6oD3uuCxtszMyQTS2FqGsgFL7Qqaq3pzY3Qoit9Jj6djVfNBQ65Myxv1XepckRD43Czz",
  "key7": "4aTXLXjhVVeKUVgFZyY5rK2QMHre7ARzqMGyH1Js8zUkYYUxSBNztcjD8mnwH54LypaeSVcgiXUpNZok2F9ynwvE",
  "key8": "3sq38n8Lv8vzE6a7zPJVu65EeeEBZ7Nh9nCMvwuDsfPtYYGyhNcDE3cTsmg6RURPjjK8pCu7yRs7ajAAyGjvSt8V",
  "key9": "4vW3i1vctUPWDHHS8mUWy2b5snnpU2s88EWwFCxjz62CxB6rVqjtH9z4hMVrNesLP5vKKBso3GuFawHy42Nx49q5",
  "key10": "mQMtzFbCRQ9D1whxEM3NsKwgWqrYysLD9cnocvaJqsPzSs1Xnat4crpKAGCo5vrS98yYKyhxw6SdQjiGFdSTkGL",
  "key11": "2r6CzK68dXQcgx1wJVGLZ1tA1vGHfet24XsLHT9QAjC1q76qv3sKfgz1gz9yCbCEZbaoK9CYj4H6N6B67uffkdx",
  "key12": "41au48UWYV9tcyer7aUYoybqVxrTuFHopJ5spyX2RFyhd2ZShrXpfxNxKY9Tk4F6oGekcityG3qpRAt43xrDNxWW",
  "key13": "LyMjaveqoT13MV8dS76jGKXRddqfUNYQCDyPPjnqjUcD3d143UYoVYxu798PpxcZKxekCoUeA8Ai7p1dDb3JFLZ",
  "key14": "5JMiPk2FhP8ZDb6wHwrGVRcXmQW89vX9wHAM3vQGzg78tuBQo5wnckvfZqf9MC6EVFWbPatvJPJiwdDUuXxmXYgs",
  "key15": "6VsYYJeKBiMAgvnzH9wybrWF1VtfGm6pBDyq3uyBmaCHN9FakFKjVH94iVHWxdoDccuCDfTGW86ZTybpY5BNXGb",
  "key16": "4kuDrPAxroqTGHfsUrdywrV1vijJwoCZMjAqFd6LQtHjDiFUGz94kk7rJETLSwgRbK43SBChLk1y2hVujPcSkbQF",
  "key17": "4ar5nQhDg2dqtsbHTCSMCc3WayA8DWLhv6k3nKc9bMWGGCCKwBJErMMmW4R1Qe7KYuDxXYKsWtUnSd2Xg7T7hpkQ",
  "key18": "3y7UQaCkph4EV4JqtUeQdpJvqeZkxDLFdsr7cKykGWYW5NKPdx3mP4bmexh8EepnP9i4xCGgZR5LUiLndZiXfVRZ",
  "key19": "4uFKDePH6FRDoqRW5mVsw14U9qnd2yzeLft4fSB4dD2T4Yig2tTKCNyCeVorgsT6EsG6iBw9VBDs4bhNZBCgWCcq",
  "key20": "4WcGa8RAyZy2ztVExq4NQUeghP1CZnex9qiGpzga6fuhQECF8MC6A4N5gFcDZa1hUFBi91SsRDyoziRvjgkKKTtP",
  "key21": "5HUKpbAkYc2Cb5vx8xPL7rnQbyUQAiUaZPkHJrkyK5X7EvhyQM7oVSxHmutUK2WXq5zFZoFda3BArfixdZ9WMpWX",
  "key22": "4eKKZabqSwKYjJKtmwYURnBx4pDUuHtb2LhtVNyWUkdaoUdCEQCmoABuoJCMgAAwdTVr7MD6FcisRfcFYrmzujdv",
  "key23": "4NR35kzCFVr224tsbhdYrExLyo8pZCaZFKb4XpaLEoU32jBTZSGk6EGPwgnGYJkmh96L1gmtZwrkxVYrcGWLKeiR",
  "key24": "4yCZxoW3Ui3fRfMbENLKQMw7r6QGbBkr3qhpvo167HQPwNeusGg3NXAA3uaQrdyJB6xw2nDScneTNqQMubZPGZMP",
  "key25": "2sieTeFFhMMei7QJxNdmjkg7U5M4v8sgiXtW61kDH5owVV15QCUQ2aePpn4U5PsrFyyipVqFg8u2tMpD5fSbaqBA",
  "key26": "4i8gH2iXAkN1WrY6V5nqBt8YGR4cxBE6ZGZbCEZ4tNhGZdc9eKHUqMM59XLkjnFPepqcgiYck1DCtfZAG5fgEK7y",
  "key27": "67gEhWTMsJKG6yH9mE3BTHE6Kukx1KML2r85TjfcjXQLYEMLTeaEf7Qvixnjmffsc8TBNnRt179T8JiG3KoS29YP",
  "key28": "TcuoUtwCBaHJf8fno4iuYxSJSiSMy5MwJ3Tyit8zGSjkiZthAdihfBKBZgwewUpBHWs3WVpJdVjuwhviFAbo7p3",
  "key29": "5aiymiCXQ8iZCRfbUepQwXzbYZFVJxL5RSCRPu6BxTK2uHCywt98x1esbLrnPgAQ9arc9g4p4QEdunCqnqMV6Ts2",
  "key30": "5iew4gzDYNtkJRm8dXLaKc8VZnKmgAAYi4gyP2DHSEgB3BUxRhGx7VrPYN8JN84hNXVG8NUVfZiaCRs82aoXZKiB",
  "key31": "5Eg5qKQqiEnVqhEsBD2nY72vCszqXLQFnPmW2epWW1px5sPWw6Crp5zVWTGuArmSqceR6q5FfJK5V2Au7rGvBtj2",
  "key32": "oqVPCmT2ej7cDd3Rii3AVEyDt3V5255j2kP7A1RhJQqge5dYGSQrC7T69hQGQ1AMTkpJhETTT71eJGYFNHcUR5D",
  "key33": "4y88tB8bvbVVvs86w6MtMoNucFo9F85pvatfzq5TcnvRW9L9FNL2brzn4464ZmJToJfAynPQhKvoxSZU3A2GRbc9",
  "key34": "55DBk63kzNqJjtt8ZstFDGZcT5RAsR4Q6JcAUi7gKe4XdthEW2tjkmWTps3oNjtainFi9JWwx9z4bTjzkbo1Aj9L",
  "key35": "5Hg7Nz7gR1VnMHCDRh6Jg2heSd6gYMvL5vJWCYWQYMifonNjXn9eaZqYh72KFwPCBjt7V3Ah2x88PRDcuuyxpV1Z",
  "key36": "FKVktAHKsjinYJ3cxoFFp7KWNEJQsMRvL9vYJ41Tsn8b97ZjukeqQw8uPUzCmw7nwFgAMeLqtwQUSXJsbqmNaE3",
  "key37": "5jr4GN4yQ1hpPf7QtDqstQrr3Cb4sNVX5xNTmjwyCz6x8NyL4xKarQUZpQ4WE5et27UWcmHBdFhMui2csMrhQVdj",
  "key38": "2jeovCm6C35ZKRwFPZdqF3W86yRSTxikNTC1to1HMafLCq2Jh8kN2mhuphbBbpvoL2sh13tJpBt64zefZyx6NgN6",
  "key39": "4UGrfodKPrMGeri61pZNwxDzqYEbaGCcsE74SkpBkUWbw8hg2B5rVUX5CbaGTxxdDNaBRyjxCNr6SgiEw5G6myCH"
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
