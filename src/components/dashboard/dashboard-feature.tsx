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
    "4ZosPZKPDens4JxUaSdbmhuHgFWfVJx8T4ybbprwbFV1oqVcUEt49zGExTZBXGPsGoqihKzADgFBJnVHSbWQyduT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Wbf9f5XSRH28taoc7RUQLZApD2xpTBjcWrGf9zkqDPscURL6ZVwE6TAi6ATiDdWYF3rGB1TBgg6npiiXJec9RY",
  "key1": "35e4aPsBXzPdhcuUix5WgjcddDZJZ9QTQA5V2HpJ1iRE4Am63wWcQrcpN3Xmd24zZK9M72TBw5UiHVA94CbyhoXd",
  "key2": "2aHdJaR4snVUQhL4wRLxSokYKhNHJzuJWeNtU61DAQqjZX7oo3QaoPzxu45h63YQRwXuH8fmXhpvUgmaStoGo3hv",
  "key3": "5uQPFq1r97m1PkuKm3JL771pNWY4PEJi1r6CsTWiEsjjB3YTZ8Vy28xdbxhsKAMfUdz3MezqzHwPaNK6FAE1mqDc",
  "key4": "5PD5ZQLDFW124b2UgcdEdFfzJQZ2ffHwqAci5AQn5M7btfhmrxcezedW4XvFzNiRsJLdmy4LsQeoyfXnYrp2tXKN",
  "key5": "YG3eZPvRRSuLWQhJSs8pPHfwM77F15mL3NmkCapy3ERJMWgiv6eCJmyvVVXu4zkoi1etxGVAfaHkAFsyvbn8zoq",
  "key6": "5yCLC8KEPrGRGt7LKYKAUg2c2mxT7fNfHEAeM6ASCQALoV3xw6scSF4eSqvcvucArmpbxRQVrsQbG5f8UTNGKdEf",
  "key7": "nkLEKvPAqTQgXC1MaWnVNyCRb5W8V5DXPPTSWbfYWJZm9P2G35TPvChEZzA5314Tu5mERuZLggoJGcspwzXDz9N",
  "key8": "5LqG2PYwgxaxhZt5KvD3MYfDu4UpTBPgbroojMrJCHKBaFjC1YFLGSCSiB1tqx3woj1LzvsK4NPpvBu3MEbwZqsk",
  "key9": "3ZASUrKvfbS5dFDNms8UXdFCsjun4BZNry4CJi3JQSenjREkQaX43gTsTrSjMa7rrkJDCvYnLjRMMadQTRL9UGcb",
  "key10": "4bxCA9vfRMLYrU5GPgnmovLMcNm4uibbDfDgUUT4MrBa3uuMyrSnBhAq23U8y58jmJoopt8WGzKhYLB8uyo69rYh",
  "key11": "4QownNA8jMKJCzav7aEFTiA8EA7nivemKFSUgUM4dnpxc2DiZBsKZEqsvn5Mh87Rnb6whFmEwWyJ6TxiBEFb3JPK",
  "key12": "4ooxEtk4asCwfFJSKpetRrCFJ1m25p1ZJGvpXm1WXQr24e7m4qJfnxmitCbHRk32LeKDAgHGhmdADY22tjM9zTUq",
  "key13": "GYoUnQvteA9VamBdGkz5z73sfN8ztpnCC8rBdpbUcezSH6QKPXqJjKQNfnQVMu6kj1SzjDrd1fsvQJUHtHSeMEK",
  "key14": "48kjre9vdkcbtjRQyeGmUfF6bG3RJZV4EgGzD41dTsZTLhXvNz5cz58kWQy96bTCqYHqRL876STFHgD7SHpxQLLK",
  "key15": "2VETuEZHiwWMHSdNeDXBytoFgC43t4BESiRVmfAWseMv3XXaQwKvbYj4zagxn9DVRphbATWdeJhJkMPuNDRNoT1d",
  "key16": "Yv9QXrcjAfYPxpquSQt3PBe1BoPJZbTkyPKiC9HpLYH7puxg8hgHa2HU7bk2MAxEhnHybVhjSVrQ5xP7iR1nonv",
  "key17": "4oX3DqmHZHddfj1DnnaLJzTES8QTmZdzk5o1qCMAHdn2ZNvgqct1UUNQToamkkCParPzHhjhY6H5G1n2S6utJDTw",
  "key18": "38KW6CF6PigrUb1HDZp6cghcBcmPcCpdVcFzEwPzpkM5TwghxiHSVr5qcghwAshD3a2Tj51UULN6SKYa2HGkNEnH",
  "key19": "3eE6DgaLMhZjMdv9SdtgPj7Ztamney41986LgJMwSdppDvvuuSShc4vwZmpGUGKzG2VscZAV7X4sYEekHnbBenJN",
  "key20": "3fww1MK5Z77jN8CtVpNySTn5p2pj7m692QqqsXvpTU7MVKX3q3wXJqRmxAzwEBLGrZUBuS2YRV6RRoQx4rJTd8v2",
  "key21": "ru2D5AoaUaTMMMd83jMKSmtfjgKsMx3LWvKnZDEncabG3WbeAwxf8gXBom6CyvevC1dLGNULrNbaKweEm5T2Rky",
  "key22": "4D4BwXyG5fac95PwanF73z8wSMELotssF83CvqSryer8eL3goLHSGHQfDSvNDdWVaDerkFSa8JiVhDsusYMEXHwy",
  "key23": "2MKavCSbDCRtUARevLpumEyKZn6nGWcQogWwgWros9KFg736BQsQfujYdRcz6MT14wjgTHD8JGtnEEbVMFyjYasP",
  "key24": "4N5sBDuFZtDYKiqcJzg559wz7CBzATebDAHHg5zEP1oNXW1MBb8AFYB8uPKXSTFvzeJ9j5bDG9SjmLGZgXEuAFLN",
  "key25": "3zyDga39qSqXU15d9mZWuMij7XmrNqN27ZCNoUVD8zFQHuMeCsSC65xRGwyUj7q2r6rURXfsMyky1gQ5XsfawhYg",
  "key26": "445tybPGhXsehkDAUSPhb21UFGMszUKqXQP9yzxLooxF8awD8mmkcSw29sezJpeadUk5kD6Jv98eFj3TPYn7VqXC",
  "key27": "4ayrQcnaTVBHUJN7Bfzk763mVhGNF6HfB567EJyU6B3VjTCQhoFgttfUV56ccbVyVNoTaeYnJytBAh5ZzvhukzCV",
  "key28": "3vdmwtMHaBXWBjVbBFCDvdU8d2QUBzWHCPETnZMQqT2jEW2rYV8zT5b72CfUXTaDzyqAMLhzPXgS4kYGBEQzTHGd",
  "key29": "wJRVWa6K53ug9VYJf6uBTDRxiNjkgB9wFYdVAAcEwzGkaE7PWygWuMAnTfuRRkq9AGQBtAF8LUKuydsrNM8yHwr",
  "key30": "4MXVN348JnteDYM6CiLxBV1xpi94pqjyE5QvRTagrb3gduAY6F3itCLksWA7qnZrhG4tk4ZWpk2fLsqKfuzPNUv3",
  "key31": "5Rw71ZWMP6ENamxLkmMHpUinWsGV2nZNXAppQCoNBdgJH3tuX8yDrQCvxMbrbQaKG3uY6rR8W6ZYcp8teXbBMtfq",
  "key32": "KxXejwMGxxFW7kQffSTymuDD3Xgkqq98QqV7QJgmURieVnT7atm8UNr5iJat28SCxeRPXFQNUNSYYrYRGKK6BBX",
  "key33": "4cZ1Cbr7HFnQgvNLQgS8gPSR5fNv3vSaCsojQh8f63Pxk3EzHPZEieA37t6p4W9QZKuFvZio6TFQtWgScN9xUVY7",
  "key34": "5rsbZDKJQtUbJaGrT5M4pAhJfmX19G668qZxDxWJKCaFJ9T119FXxvtJzBbSR7np7FiBrgP2umrC1b3DapvKWyLS",
  "key35": "2g9Lqn7PR8GyJ4TsMbJUDwQWUd77az4L8y71tXYfaw8MuC62BZpD6zgkctKStZMLfXX6HmNAPGSL9sfcWMHi9SC",
  "key36": "3yrnRKBngqWYMSf5XpahLX64wmSq6mFRjnKXeqvo1T6bR6dgom5PG1p7cogKYuztDpoyuppoqxkAjkjSRgb5AeEZ",
  "key37": "5UEmdi6RwTsczhMyFSc13K85yipCw63d3K77vkSV34B57KiWuysdDb9pGwWFVaf56EmTvx1u5hXQVWyUH94as2qx",
  "key38": "24xWrthrtUzU57otvKGfEyRaKGLXsBeyuYon63m1KYuRuHRvq8PhQdUqrNZskbxNythyv6iMo4EwYC1itYb52SrG",
  "key39": "4tVSf64HGAAa6ZDGKrj8KgCAGxemSFtdbVaGPVkFEqPFT4Ez8HKLzcuN6jKxu9qBabXSeaYPAYtdQfGGBadqfhEz",
  "key40": "fXHJ69uoXZFj4d4NCUiRZXiUk7v4XT4kVCwsQej6ejLEVnTbdcMF6JqB3H1nwnndsgR6uUUuCs4T3MmPK6JzzuX",
  "key41": "3eAG9jXXHS59zF5vnhhQEA5DK3p9yLaMgbCozBtkty7KCDWPf1iF84DvfAwnZoUk6M8yeXb1fNxWxsbwgasD6HPW",
  "key42": "2gBBMwe9pAjeZFZPfa6u9Notmjx55Ycp2zuzhbC6LPLnkonp2HUofZqBg2WtWkKmKthTeywgcRedL66oHi68VSmG",
  "key43": "2fzGNeg5NAUCGgTyLgABodTFQ25pihoMTbHXkwtRnfKvwwhiVFhxV5rVNnXjvxskpR3JD7qXmpCMYZS6nbjEQD8d",
  "key44": "xSK3V54nG1586Psh3cQXCZuoLnirqne2R6Ld5JYsR1AK8wjd6fxFBA5aenK16bzipkf8ZN2u3zQQ4rGtPV1s9yK",
  "key45": "JRU1aSBQdWZrLuFDtFxdk3KdQqs2a6TGGYeXPTJ8XoA2HQjBdpE86CUuHF8zArhBr51E6qqYEd8URCwBqZGYMux"
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
