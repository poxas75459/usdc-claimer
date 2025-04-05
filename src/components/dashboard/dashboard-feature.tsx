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
    "5Q3BztAWFBR2n2yvXwsjKmgfeUrknsc6PDrm8qwzz3tLRo4QmpceJiid7YEgkFRh1arYQxehUuuMo1t5RiWUiahj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aHsELPwsFGA9paDLDEVGxngpx4XicXjSTowQ8wVeEyStCofZ19hNU7EELSUWBB8XxUKZXXTHBHpnhFtNT8cKht1",
  "key1": "2JSm91goeBnnmwqcVJsThrae8BK74F9BgayShrHiDXjjuCTfXPHJZdjgZquCtbPFkfUXY2TLkNNvcaLoDfuqThiP",
  "key2": "Rn4coNDXRQD2zXA49nuc1VN4pCSxGPfRSmhYafacchkE81LNQWXL3tyNuJ8iqRqAXUN5Rmt3q573XgomiyUZfjV",
  "key3": "4rF9CSkKmg8jiJNiBeJwRivcseGDB9vdQ1RoZc2EgLRUynzj6UnyXX3nxTjCWG9k9C19LTTrDARnvBWebxpPKmbU",
  "key4": "2Rw8oAe39DZNMSZopdRfFXGPy9wkbTLWhik1pKYr3kppcLGd6ZBN9mS621nVcnr6b4qoZMFmD1Djo8Gz9yY4YuP1",
  "key5": "Yo4v4CvFCfy3pE4qeTFe6LBWJBHUUqfi1KtPASToec9gkTJc9LEbR9s9atim5bt5FgCgARME5k6kxRspqkFJWiR",
  "key6": "43TPB1a8fW4rD9qJrjqpKX5G4m1m1vLVW5FvnTruUTEbQoWw8MX88ChXwHvTsReNiVaGeuhcorszc8Y8cSegzy5J",
  "key7": "di8MsfmGsGGfPEcna6Aog3cFJXPG2aGgQMMaoxdWge2PU41xDers7FfCzrc8GBvKFjniceMqsR55tAkxDLXCj32",
  "key8": "gnyreWx4R3of5jZQ18BYmxrojaTBp1T8q4iJMHhqvYZVESaAkLGcZqphKLpmGaLSXEN5vPmwwWbKxmVCQEKz1yh",
  "key9": "3cfrYBTmiG27ioAHn7gX4AjTMXAD4S79trHqWQCQoJMingMSUfvAxfWFka41yx72FmHJeiSpKu5jaYUmCSTmHaEC",
  "key10": "3bkb5baceUycAXmeU6WkhE163zHe77ySddabkYesRVBubjMmYc7PbsZk6Rk4uQxi3ygzz9WA4G3Eknvu7nEaXD1e",
  "key11": "58H3FJvvJ5d5DJu8jU53whJDhJjzngNgLNEbB8VoHxaPJjaPb8xvJPu1ePd8n1QxbRfSMwryTAFcooQyE8rGgwHB",
  "key12": "3nSebBRpxqAUQ2TE9iTcejKd22nNsMJ9wxBMMinkkwMqaeeM9moQSAK8io3p7suJxSzrkmqPGDcSBMdd2vm9AQn1",
  "key13": "2gWm7nsoPgPptw75hcuqdPBzwEZHAqRw5kHoNDpN1xCiP4c7BhdKPmKhq9WG5P8CXztaN6H3GjxTok8W17edjcY",
  "key14": "5szbJhCU4MTQmhEewh6rBj9t621VBPum82cvG8QKP6CeDe3xtLrizPGopLuirrKNF2Hvfuom5TJ2fqLYJZE4Cn5D",
  "key15": "2NVGtuhRAmkZnDqq7CKijWf37DaRstJDszGQSyJdFZTSsw393uCFGjnTmfM7A1rW7gZFUa1sjoXUwovy9fFSY2XX",
  "key16": "4aoUbbKSk4VoTZ5qjvHY9ay5Wxkz4nCqMMU5qtwMwrNBJGyttU3i7J74x6PHHoUmVTLXzxjrJf3f2qyFEdsXzKxF",
  "key17": "2KtC7q9sdoFUhrDyZAd1MD2qVimSAvPNdi2UTNLhcwagYNyr8NZ6cbqYDwXwg15cTN3etNCUrnEcEdbpPrbdDPbE",
  "key18": "2Zcyvcpxda1b3WCZmHMKEfyybKDUnA3KG7ejBtyWc1Fv8xE2c66WkRaUJDnsCRovmmnkbmF9DMQWHR8EQU3vbGFj",
  "key19": "2mK2vfSeFaNquT8YTFLpmNMa1FRJcfNg1xvoRcWbw2LgYjdE3uY6DV7uND2uRyASYe7M58Q6pwTUAXPmzcb6rV52",
  "key20": "3sBLDjyk3wtA6ZCsQucbB8WpR6C3BFanKEKSsQmhP8qWxqkZ1hdQ2E1fvosKsVKYctMdw54zUcGJ84rGfXYiCq1A",
  "key21": "56C4iAEr7YpMZc5aRWqbjEnJBsQcnFhw4HSMDrE11SFhb7yh3JR6n4yavKWajs5kgQASeMnjaXHEJoaDxK1miA8S",
  "key22": "5kutWjUQeLHXomy54dj2ekmTsJSa9x4J17Lwhc866YarvEPYrdcPbcdciK9TA5xTjUXTXoyZ8NhYZgC4B1SPYUAz",
  "key23": "eMDvySiXfg9ZAQGWPTDXPZ3uYUYb5Nrc44cdHbrFAoJkwrCNzfzMbNeK3Bg4uqAiTzeL1eqZqooiJXGQebm1vya",
  "key24": "3XXrgDiDuAFdbCznSfiW1qY8msMsZkMmyqKWch2FmrcRpFbhXmnqbn9w4eQvSYhR2kgCHNihAcRveuyjG2hQeB66",
  "key25": "4gNuao7aS9vyA19uKzo5cu1QUo1JWazFaT1s9J3QiGzgjb8dYRNEkCzeL776f9ULeAwSHu7cZP7Doxbd4p4MgXzd",
  "key26": "5zc3dxXXBFP6zZibuw5XxwZsCg53h6mWPq7ixzPymEsiDw7nDpcwDg6xEaseqer7ZX1MoUhHjKrrmgPtsZbJcM1p",
  "key27": "54Vu9LJt8iVgcKSEZJ218j8bySpHRddDznWEaanc8evaX2evtmEhWZjHWvGpMuPkWGqdTY9WFbYAzs6jzDLAZR5n",
  "key28": "5hormuBWPCkSRxHjRGtSR98NNKHmQhSp6Rmo1eVqzky9Ye9nQgNUS3mnVxYjNDcbvc1oQmkhgSpifT4LgN7aJzwE",
  "key29": "37KsTyDkZj6TQn5PzRa9LoCdWjdUMsRRYeCVRQF5QEsuNoZPSrqgbpX7gLuNXYw7HnPF4KsTXed9dn4BJ63fK2Q1",
  "key30": "5Z3nMfANHnMBC3uXFBUVGhesft5JSx1CA9SU4Ltkn7oeKb1MUbKH8npK1hWH6j7oVRxabvRAQkfjSz6jayNac3gU",
  "key31": "3q5EbFST2kd1oSk1SLHoFURuEgMvku5UQH66C4gH7oG7t45Sz1r2dRKXxURDptZAF7w6wRj246KrCo9E3aYCihsp",
  "key32": "5sVjbGY5XAp81RhJbSFVtwceHPk7bisBJfHd8xyzvxSnumde958m2TgkZNFeYcgHwb7VPzuyQGoX8Uu451dBLCmg",
  "key33": "2Pm3d4mhFp53DMAb29QfkyhYSarh4oNz1ei6QoU4TNXTNV27hwo2Vba5eDZWLXcJ8WTkyPYYUQ6dHrY3qdMHWZ48",
  "key34": "53sGWoAfRqhXSo8aXSHXCi7Xti3e8jK9uQZhvERUfqG2rtuddCdGZa9eAo1tS8bFSEujfpEdwZVx2WiZLk2GXrFT",
  "key35": "3qUKXfdZSRVQDgFhDQhoj4YnYyAugj6n7bG9axC3LoXiJvZo4T5xaBBf3MxyK8rRs1C5RB2Ex6GNZZCkFZUm5XDb",
  "key36": "kJYEmSq2Se63kCvxVFUyjsPRTinRwjDBvwVX2WrvFJ316BWTzqNLrVwpxyQJvmozWm5UC9sKW5SDgwDXM9k1sza",
  "key37": "5sPo5XtBNPxZmg7Zs447Wc8SksFKtPce3Wwzstgsy77f9LteWuQFc6FsMK1zmqZ8CNDP1i4Lh3kbX1FGX4kbxbJ7",
  "key38": "3Lxbsm3cL31ZsDLbqoA1adKkSg9crsTbeNXxXs4PEuXnjQcCCXH7FSGC8zUT5yhUwUiHzaeA61bHYXHoAYAg2UHJ",
  "key39": "VMgwoNgTU5r1FUvUjucyAALqHdBiHmhciaLAmzFzxG4m7tDEPhgrvwwVy4wfeKqGrcwas3rirMwXsn3aaxGGDth",
  "key40": "5XcgHiX3Qf7eWHwuwVGi7NJMCQYALqjHanCcHBzu3do8chcxSMpireWVLsRwgRzQzp3F6Rr4qMbnqGpLj55Wsj1L",
  "key41": "5kSFbiY4sZomoE5wCoBDFxy9WmTKiYnnKStpF8Z38nRcqdWLvgDWAzWxav4mUdtEWcndQcNy6n697PnkoobPcSzE"
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
