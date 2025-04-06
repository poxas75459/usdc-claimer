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
    "5pGnjU6Ns1xBejiTKWdTQpjuLhk6kch7vs5zVyVthWHRdFZnuKuGuUftR6nsuVD9YHbnG5a6GaMrzaKQ2KtTWUNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UrEZFCsBtc6hUS3nWUbs17dYeDwgCsUsNRhbE29tHpiUeNrQcEcFyNNyi58bGjyg871cyvcH8knGhn8K7DGGj9d",
  "key1": "2c9NkP9JBGtrqCyZkMao6dQ1eUJjeB8RjtKvwfeeGiwXWpvSPFsG6dvZSgVyfukF76S4UrecrwGNRY9Q6GnmVm6u",
  "key2": "3tfLMfaWtFcbLmVPxGZ8128AT1pG1jzBhfeXdJgnijFKjp8VfRoKkS2TwnCCw5vAmir8TYw4Gktekzd3vnrGP72M",
  "key3": "4DDDHoCiomvuPh1gLCHG8bDaQkBejs2nD8LSKJxrjmw7gzzs2GehJJwqrcQt7wHpzzHSS2PwmxaQLPhaJUUPmjoe",
  "key4": "3BPSFwLsNU3vLknvVx6ioyUNjXzGXBkCTa5Do65Ntbn1CAfkb15mDdk185JV5yxpHnxUCvHnTKej2jyDNwcuG662",
  "key5": "2fEXRXJvsHKPBpAHGffiWDqwZcZZ1B7YtQMxLvA75VbZyRUCkzJ3BMnbDSH3qLJpNnLrHUurnPnXMupoMr1C28A",
  "key6": "25zsUN2WnjBtHS4aUkCBuhoXXcaK84R1WycJxw6tkEQyzQHoCrXvhFhk9MKKu9qmNfwMWCqHFShtc3RYRogRcae4",
  "key7": "4soRFnrAQ98jSu7erbfGRgAoG2KAhYgupRbqhdNNdXKQhXqvEBghLF8YS6Y7bgjC8dL4KXCyW9gdoGK6x8FRhLF6",
  "key8": "3nWhtDYE8FEHkU8x4LzHWRs57Re2sjBzuq7BtS2zMvpcaAjP5RySdwnWAGrP7qer3vuAbvMre82MSu4hdYRNigM",
  "key9": "4kKKfB8KRmTNnVqBgMMTLfkFox2YE6nM5Tae8FShHcRwQT9kDNhvRB6RudfmiqcTuTsiVcW9sWWzrPrLWeSHFeJn",
  "key10": "34e6Kpq2k9Gk5WoA6thisiQY3XFXz9YuHB9jy3tkkoGJieUnBFwH8kBuQ77YhKcLnaRbuxEUqg2j4ep9Ce1UBJ5g",
  "key11": "4MVegrRHqz9UWMyjUzwg1YBqyPdmDgn1xJ86hbivANc4HMWrECDki1Xvcq8NbCi1RYXFsUPjCYZroGK2jfk9jX5w",
  "key12": "5FV4eDNj9Bx2rybguWJEAvyjMqKjYsw9jRNd4HK4END424MyJpG4yR93mG7Udp7VwAm8hCf3dLZCu7419fKvPwWP",
  "key13": "3KHUydx7kqazbTdaVVpYEcGzQHzu3fq31TRfprvY251VaxvdBRcgbWNSGxGcXXMSMgoeEsLQw6E7oKGwsVb55yPv",
  "key14": "Gq4UrMthV6PbGJvi7yRfWXYyLY9VUmDPNu8bhhyxmz83xUALRJD3MaNnNoksuvkvn52bqMJWFH4JDfqaStfEbiT",
  "key15": "2xVgCDrAQ639i9NdgvG2YVDxf4uLBTq47NYECbzqd63947rJkwgHX16TpcVGfHnSdJavaLn657enV8moFzFEHhna",
  "key16": "48pn3CaMviS6tTer3LxAEjovCrT4An2BUuNFP2X4PjpiqQ9CTgT2fy6xxUCTwJgEqjxi2zUUQE45aCjY6rc4v93c",
  "key17": "Wuh1JQN3L94vrcgYJGFyUGC2d1761XPycxJ8sxL4QExeQ9rXTByihjjSeDqPn2iBBuaK2mQZQHzwsvmCq3q3GHg",
  "key18": "4JbpfSPDXujDNAYf5uWYrobo6mwTVm8NYwpLbVVv4DcRnp9cd9tdAPRD6ZhUMUKGk1SpyrvJbFWqg7TeSuvgXFmt",
  "key19": "5hb56RiCotwpYfCDcWTCRw5PmgzYJgkGsMEdNAQZq94aFdZEqiohm924zPxqWJ9aRxhwL6NUtDzTLzzuapAUKCuW",
  "key20": "5FEkWDCj11W7axXQkQMkCUh5y5tzw8UfscggYq6feyfxjKXhyqqM8sJj1gFojH81nXSKim1NF8bEoKD3gmZqqR32",
  "key21": "4rKzZLSWxxKKWeKfpRAHoHwGNJkQEPmnZEAt7B9DZMqUrjuDnj4TTf2NPYP35Ef3CaGofBaKAn1JKWvhcDLaAkft",
  "key22": "4HDUN5J1QPf7EBUZBRnLmFJEqKVQ7Q4cHAKUiZeCEhq3NZPB5MVojufwi3XM3FZwKWLfgEREg57WDxWe5VR1TCLQ",
  "key23": "pFc2uK6rPGYKKDstvXUTZEN9hgSaNDxX95WFLciR9XZ2RQQPXrdweGjhmxeU4aBj2rAh3iNgMcErcqD8QvWbkmu",
  "key24": "pyK38cK1uQmJU8C2GUxdGY9SDKMBFj3tVsGWzeeTFRbsNXScriumwRSj3A6HSPxsnTiP4S474D9sR6fs8qjr2Hh",
  "key25": "4EabdFdP6X7av6nmXxPyahP7xvLZwqDtydku5JNVGTb3Y8Ke14Enxe6Jgfykc9oNfupmiDXPF3gEfwWT7oTknL7U",
  "key26": "3akVj4vZRyPqk4p1xaMTXTAt6YjDhAKKqNYRSZ4uPXYfLKnJVm2QcniP4UU5f1x1Bv4CAYPtpQkELfZD6WokfbGG",
  "key27": "3PnAQxMT4y7b4snXnk6oWSEBs6xH1bbcx1myBXyQva43tFgSBn4WWMNmx2pUaH2VfnqAmWFbvnbzJChdRUdERE2T",
  "key28": "3HR56qtMRgUM9DBC3diFammFrEz3gJLkBmbfRdDGjPLHHZjRnGrrouZ4mCyVRy2uiKLkAXWiu1L3ZXSt7zuyeaYb",
  "key29": "21UFBqoVu4nnghxaJj54uwqLzoPUw7BdYoiLWA2Y9zcK7AkBnanEUwLfoXwGjvyojdHcRwFreojESXuFu97DpXoi",
  "key30": "32dwQZk1x9HC2Z9imSkxWVNsNRdmDSUxNqcG2DRDe14iEJ9NbuFKXM3hjtY6D2u4D5UBCamApLhBir1qATbkD6HV",
  "key31": "2rgpoVmVUQDbaDgyA6WsrZVFrxBwsNzQYcHw63JE1NoB46ZewNSdmH5berp9fPNzRpho3qJQ46LT5EeygXcQn8qE",
  "key32": "5VnaNEdpBxAG8E374x7LVWCubCAZJc6zVwHvpKuGGMCDrVCfCaTSamdm3DM6Xe34mqwiy5256Q81paHenYeUw3tV",
  "key33": "5ykcamW3uWWJacJyqNuzpaA7XZfVQMGdEqpDb3ZT6YnQSWMxCSsgjs1u44Xdz7QyNEUSGLQ4VtEtiFJMMRKWM2pT",
  "key34": "317i2Uwn9wEwgaPxAfXUhCxY8We2GZffjwySSWtjSsBkYGZa4F4azsvcRSDV2SFKhfontRgMqKuL1MPFt7cFjGb5",
  "key35": "3sfKrZfRvFQJPJfyH6sJWD5YHWSHAoTUwsyDQTiaNquPmagxsTqa3egjDruXuWUfcV2meYELRe94J8Z7XkAhMW4T",
  "key36": "21Kku74n6PDbpDKz9LtLCd3LJwWA8Yu7JJHnXwKBuJpxJcF786UJoP1NrK59w7R3PWMuAKaKJGUSsGjvoKNC5But",
  "key37": "3RBiu1uYRxL5GmVfCekEGgaANpjuxMhy41TyCHzutQEUTXRtapL4dg6hpmFKsPYHowsVVFmgFeNdmxMB45wxbwaB",
  "key38": "2NcxBFFsrEouVFnSfhXLvSUQRPYRt3hiejp7yk7y1V4PppjdRPqiivubhiHPN3wCb29XQYNzTjsGfCRBwGWw1vcC",
  "key39": "4MSStyXHrfdaSpeWttmvarNA72yKYD9haz19w9ng61LZJ1Do8YfDUi2mhr8qMFgczXACnaJsuczSrAqNPZjv1gGG",
  "key40": "2Ssh5auq2g1WSSpWDkCx4f5KMDffUSJxw1JkYWdLdoSNzQVd1gLAS5g7iT9qrf5UYbLBoxxaBvkKZZtJg6zBYJ3V"
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
