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
    "nqPpogFf5UHsHsMwW6Q4TAs6ApphcZWhEW9ZEGjkxizvv54YzykfyAf57oD22ra9chc2rR8xNhWmTCD9n3D9qk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vgdy388rsX86GkWC7vgBDLdCYJLLmNLjvTM3kG6SugTGh6JBrGmwRvZdovqRAx6asAM9f1sYxYBWKVnWPA4PqCD",
  "key1": "5AquV8ipPQK9t6AtpYxyGVswPx9DA45YBypEDfjKjZqqTCXbQRmKWQs3xX9hZ3XHLcFo23gfnq2ZhQMUnEwKbjQz",
  "key2": "3pXxnFGz1Q9G6SZRV4VNT3d6cy33zhCiBNioEkRidtzggwsDh9Z2Frqp5o5WzNAbg5aJpSgySAC5t2BsdoGYUDFn",
  "key3": "MwiZivpnP3nLJCDVqG3SZjDPMu8axEQKFsBHsbJQsnyhQt9EWphxCw19S1EbBLVcdAxZS8z6g5cGLkza2QwCHH5",
  "key4": "4rSAoAt5odNwU3ZnTFc4uNoQx15LzBpmtGcu8u8hnTPGyMZWKtkUFThLLLMxD5gXRDwWSFwSurNgpcZ7f5TQjcSG",
  "key5": "5yGGwYBN5KRNUpBwp3uJMSNkLZZLBwi3sh7zLqV29s34Gcvsd5p3MsLSByswLLWDhE9EwMewgKXE4BR5QHptqj8E",
  "key6": "4jAWV6n5oAShgQBPntqAYr1SZZkB3bR2sZNeXZvUmPwE43Qpxpk3uzikak1fAYbwK5FEvokWn24BAtDDXhKSGUV3",
  "key7": "VHA2NkEe3saTEH67B7kVu2cqExoBjovxG4nDYgC4PRgC4YqDdw1zf48PudbFCRVWtgq7ozHyrSGFEaoiMP1g2ki",
  "key8": "oSY1JUcunHRqYkXCh9DhGfKYLc7BtZAyNLWjgpvmDiMygb22Yd1ZdNJ1hdf8XNoUxsrHVydSA9PDgGvKBiPmjgR",
  "key9": "4PoaKGJbA5N6nyRK1JyfKQRmiDJLiHKwwTwwbzYTsZrmUHNkoNi45CSE5ZX9T6qEULFgS88PgGDLh8kgPeYcVThM",
  "key10": "5hQpNqtntXEURx5ghFXQ6ZtU8pz2YqHrArgaWH2xEKfjuxTsH46rpEnJxnS9rQid5GdQu28Qgperado3ecgsCBR1",
  "key11": "3NQg6WnBc2LqneK1WvFAh8PnnWVa8T8zRcWCdgpiLDwKMagcnfevUHKPjosaYWVSHCq3Vc7uzAqkvLmAysY5KiUD",
  "key12": "2o4pn4Jze1cBhmP1sPkAt3xMjPFevxuLgqr1neRiiaSejs19AY4Nk7rsdtC48vVJGGs8Muk4DxDBkFKp4Zq3sYZX",
  "key13": "4K7nisN2ShNva5JTmafxRSHutxuEZkXEn43uDpdh2kMpvmbvhkA6oxvyhFh76kmPSMCWg3k1NKHZQZKgejjVYjKj",
  "key14": "3DL7G9QujdtHWQNjLWMJ7N97dy1cZkCBST1F1wfxvDy2Z7GJHr13wQT1CQSwvERnoK5HhYKVEzqTFjiDYdCfk6JJ",
  "key15": "W7TxqLgbEVWeYT3BSt63UG1Qj8YykTefyiis2WYDkTZSZ7RZt4z4Rpt6XbmTgF7TMr6KpwCVHHxcvjLwUNAbPZi",
  "key16": "3Th4cbkVSGeU26MJwsQ3TEfBUFJbQJZBziFGdaSrLNqeV2ho7KTZhcndvC3mQmW1LeqYadcDwAWPGD6sB46frvPn",
  "key17": "GHY5bTRKyJKAuPYhRdDjZhb3pStfVR8J93vMzg8VobnT2DePPjuwMpTqJRahpbQeFEtgyUkgj5CN8TpcJQWP5Hx",
  "key18": "5FvQBGnCG7s8stfW54ae7ruS1633HWyA8oHMucjFeDSLcKaZnMSCtF1GSf7uBMTavNQy4knXQdruuBk8pECFt4Dk",
  "key19": "4ba8jQAsB6BwMnkvD4Eo2GWjTgfNRRobPXhca4ymph8UKFUC5ymgACtNfYDPoH2refGWrVy4GHc5b5EEHZENV1JU",
  "key20": "UcSu1vjRywMjmrEzzPMLZZ3S5swbp2LAM3Bqmhm8J87TNksCVeUYqWsFfqf7bW94Hp3624tUjQQt1GBchyFwMew",
  "key21": "5oGZJuqThUDJK3ocKFetU5W8VGh76kacDXGJpCUw1Bysf77Zwcridrfgivcw5DQ78bQ5hjWDxWuLqrG8fsQensPH",
  "key22": "2dvp2HH98VgpZdQiFW8zSVeeTFoxfiGBbucPzuSF8Yro7FDr8PgtiSdN7fMsgFHFduCqVbts7EgBGKvcKKVbAqGF",
  "key23": "3UScaWc3JpfUKqXubpudpukUuPYtB9iZS4zKuS1K7vZY64YiLU648iSKycT2BfxgeHPMALfMqiG9W4qAoF3eWZ4z",
  "key24": "3eMxm9P7M4dHFVU5oDbaXnxA5Vqbp7FHfwgd44SJAdBBqv7ABhiZEbR2dKsNJCy3tukPLMZhMB71XXNvm4e5vgyr",
  "key25": "37wx2WoNXHvuCJgTGxoToprGbmq3GSSYy2ULW5LPxj8L2UdXqxQpUYZJThEJ2qP7oprx4UEz3NCVrU55Epn8nub7",
  "key26": "2F3KYAmtc7zej7JY1rgMkQg1tgGGgLDATRyCrpG7Bqwb5DzETyPVAtQ9SC3nCReFJP2QHeGNmJcHQsTXTk6C5GTd",
  "key27": "3SDnyHAYmsH5RouPE1mGYi52NZ6oreC8SieEv6nqhmfKfpDc5mrDBpA96DRcH1gnbWAgxxMHJX8ztLMEYcG7jkJ3",
  "key28": "5VPCFfyJMRvQ6qYcsaSKDtWxFyRYyJCsM3T6mRmL5F9Y59mCzQZMHWydBJRKPRd3b1nQuCki1NWWGK6MAMa8vLwj",
  "key29": "27EhvsDw4BfJTJikWh6jHHwx4KJB5B5MbYVu4gq4FPKtztUNakoJUAJ73daXT7kHQwfbb7SAGLeFN4VrBMXruyNv",
  "key30": "tM12qv2bamRNXuXHH1u4D2xLWsQtvLrpv5g7d78YFdVib1ZnQJFShNh4daPfy4Nra2aRRuvmz2oWCF2BK3cAEHq",
  "key31": "3BbRNor3yot2pfyJJfYNZxKtk3amX6NtHBHwjVMfD1rzrsx1tTeGn5JGTrj7Dp13JcZFrg1sxphffL47E3tZALyk",
  "key32": "5vTFo4naaiWbN9K7rg6GsgJbzr1418atEz4fKR54wZuTpzmoMFSq2snpjLU8zqHh6AhofSioaGQx69SecQUHZUdP",
  "key33": "4HdAeJc8n9KxSzQWFJLKMyinwPifJ7jpihXNJ22ykKufvzV6AnVSK6QR2cscLC5RbZgbWSdP4zWTGhd7UXgmcqd9",
  "key34": "5gRzRKiNTMRUGFFtmvwXoZJcgHii8rmTMKLfLjLisQ7d97xKYAAE8spyGFB9fwyi9RfmDrp9DUvQw55wpS53E9rb"
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
