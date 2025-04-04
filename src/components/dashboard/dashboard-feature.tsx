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
    "2dK3veWmLjKCkBGuJm5dX8cjC2oKMF25HcnfjBHqsvG4kr7NjmhEXmfGQyDwyMsLjm9WvhX9UEic27ofSu4Er96J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VN8nimHVvX9aZrP23ZhPaf5newJSrPnxvpeA3Yi6uvmFxJAANJHDhbxb5YmPz2UBBSHNHFRenXHPKWBCe5ZyDw7",
  "key1": "2jRXhfuyB4DX9JZRjz178iqMsWZw9ripejnnoWnxwuoiiDLX7SWmdp21j5xctPyz9JxQjAUGe3xhWGAW83DEurJa",
  "key2": "5MUyNtpVZJAG6rcqCCvAY8CdSaJ4nkqRvX4gw529EzhAbJ5UXVCyd2TMxaPSASu8fBnD5tyXb9xspZfcpE1HEhPz",
  "key3": "24jfJmBJwzCmPuBD9dLh4fenFgjuCmQVEkbHUvxU5XacToRysyeGETAUdSyvDXBjA9vvNTunz8dHTfa3HawQXA1R",
  "key4": "2L3oX5X43t4wMEK5jN1AqVp8uYL3wDhFM6hfkMhVQeNGNDxEXUrPCAbv6ghN8BbMg3P7cVpyP7RW3JRbeKVKJ2g",
  "key5": "29RBiD2xi6iyH9icadayeWoDxSTNL56Wp1hQu1MFHLqscks7JNyav1SQPKjgQ7uQg9zqzmWdCv8srtXS37uC5GJb",
  "key6": "mMqmwAv4cjp3aPpA6veVmaposVPLpxRWz8vkDEcQBxzgSrQiSJ96jA2jveBLVdZrb4YKVQcYUa7T2ryd65pyMyp",
  "key7": "2fh7oKiaip4fc2fXeanvDxmWYMYkuz5ZaZeWmphKMiFrjAxyrRKfW4KRut48jJHRrA2kUcbandPPf6roWi4dGKyo",
  "key8": "2S54goesHc3LwLSRARqK7kcJYgfQtwL46yxyZkYqxpeaRcRjLvoziz9ukH1d4tBURGom13UPfiRZeraapafcgmC7",
  "key9": "5JpvEqferGv7gmxXNdCea5B7954eFRDjD2nXmbjQ39Ttq5PU8pt5r2QnVuMKBgZTuxiBkbMpMjkCvww5NQW479qT",
  "key10": "X3uQLzt1bJW91ZNafCeisZbRW1KZQaazSchHP1pVEG6eT9bFfJ2TipoTaLAgSGe5XTtQKbKqr2cWdVVcLwyhf6W",
  "key11": "3b7p9oG3dZLfBF5jM5WJey4bFv3sruTFQx644FgtKk7MP2jYYxraYKt6EnKYXxHKSpDp9pt6CNBzNBmfe5iskqMs",
  "key12": "2rGaUGQTdwJxRxbhD72Du1Kijq9EAnAxh8WD81NnAUii8ax4YFZoYDo84LpF8Kdgbwu7QVbC6yEMyWA4eogb4vvU",
  "key13": "4GQd7faYJaVe3KsH4QvoZaQjTYYzPLu6UYQyMAhDQxtSTyZHTiheiizJhFG9KeZBR2C9fkoT2eRSgfmMr92qGWDn",
  "key14": "2HDryKW4V35kyQvT6j9Br9TjuwN7xL6sscn5CP6v3KVUpgUnUSn9ZJai3V52pnoGN2mJYekU5XNwdZYwSd6v6Mux",
  "key15": "23u8vKoYacp6sWxiACPXXi3AezK7jPSywi7tGYqioSCRurKuwbGwHVpPttqkjKyoPorfjmmTDifKKVaNGWC64Nrq",
  "key16": "3nqa6CNvPiR5unpCcioHfbXUGesCVQiN68zxWCx4nvoWzka61WLyWvHYy6vdS7Ant6hRDXHg4aBaQ2zCmsspMmU1",
  "key17": "3i7QqCyRdUuiyH43pvYGfbXefV68eWBC1BKDB8LaDCwADz3A4FnMinrtohMDRvs12G5XLfTEUQNH1GBaDoZTMHV4",
  "key18": "5AdX7aTGPU342VSART3RYGEyFYNsuuceEAb3sw1VWV5PFPdc379T1pbyCaMjCgXJsZSW8zMwo2CeujK26gbdTHG4",
  "key19": "3AVCWyd24RrRDZWzM1hrM32Mcfd5dozCgzrufHgrBD2Z4wZjLkh5yK8crWaJKPLVFeVoXSK4okpLHBA4P1yVN7Eb",
  "key20": "2ynUwhKCuPZdu22vR93WUNShXb5UGBMoqxZe4Gztu5EtuYxAWMVtvamgh4KeEWKAxTx52qzEayjAQ73RPESwVbyG",
  "key21": "59izd8nKNoGAoCvhcN4S9RqPeGoJgh5J8B6dqiFZkZiabRwi5E1Sovq9yrecPrX5cbPQ7GvNeUKyHkoSJyNhL5NZ",
  "key22": "2EVuKJMvSijwgzqURUUTrrwXgCs9KoVQNP853T8SXg3arNDLUFpfeJ9ggAFJpnaqdLLSr5tj3oN6ZVyn5xkUPE2P",
  "key23": "4SwLSPxi2sXqngKj7htj4GEYJeEMooxVCGo6Ut981ER8qpeqXJJc6wiCfdob6fYGH6VP9jbjsB6CqE2WNTFP9ESt",
  "key24": "4ogPNGmqiHMwYttdnJ4akE5CyavWcJ1GL9Xwtptg6VxoGuaorE7kBfKJhvtnW7BMkQJTLznrBmqqF14wBEp3Erc9",
  "key25": "2dwTf2RubckcB3Axp7ynmpCsdhGK4jgPV1HoJxS8otnvXuQPgieCepLkXpi1aF3BpnSw6dQr8SYv6zNJ7HykMDDc",
  "key26": "42NegVEqktBC5dn1RDW8pJaCHwvvuZbK8YdZ2cw7SyQ3MuwiYMRgJXbLFZ2JW8NDEpMha4PGvLkxR1HKscEJRefi",
  "key27": "2RqykhfDfmKfGxxyVZJxmuenoghr6Xtq4S7zANBbtLcptLBmGAU46pKuzMs4V93eyxu9JCoT1k9PS99EVHX97i4n",
  "key28": "3Rf24bKD5fTic55rj3xkoAymPN5sTWyiDjoEpGmpcrNrUQrb1TgYyVBUJ8DLyy83d3zX5GCQUQuExRiQQHN7eDrX",
  "key29": "5EVupACxqHTBGeC3ppATQxi5cDnUAsZZAMBdEVLbimUA9JFNZzNF3pKYHK9Qayw4kxTmJysXX9cRhYGA73aCkU9x",
  "key30": "4YUHgGYEk3fDduvpR4UuF7MxPPHNjJdDf9aBo6un7NvUZnhDnd4QEdDqdMoivvTR6K6XDyg523pCBHKvFGFNrAS8",
  "key31": "4fXJwcBpAZr6BU5oyTNG5R9kGudCyP99xuTVyMjwZgVVXTZqiU5hqdQFaMPTxLcKpAd2WhaNmZ5v4QebiZnjYXRe",
  "key32": "2SfEgs7CPbPX83Yf8APWiAdgccmGxc3yBVPYg8X62KyHiDnfQoyhajxL2a93yyhSmCAmZ5nuNjsVdv2srXYXKZa1",
  "key33": "3PQM4MXmuiUeHBoqDYKYZyMdjMmtuQgCNGBrqnVvmGzdd8PPMsGEzqJpKh1KEoMyVuoWQ5jRwVg3vYK2KEnu4KVW",
  "key34": "sH1Y92wEYvFEQo9furXwXYiVkeCbZ3XhJbbHEq6b8j94jcd3jcH1rZHbYXFZWQJrjzjf5yTnY2XgymrFKUxzMuM",
  "key35": "2eiwhP9E99CKf54CVTDPrE9t6KFXJUTeQT7sSUHufH3iC56dhVc9ym8jyY8R46A9oo796HGrZvATe5SoW19aVu9j",
  "key36": "4XJXEaQNbBpT6TXAPLp6Qnn9WZvczAaqh1FEtU7wWBRekYVsEqRhdUSAyR4UzeXphmMUKQoLPPiiZFDpFeVwb1ry"
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
