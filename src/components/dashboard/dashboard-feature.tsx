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
    "3j91sA974XVcuUnvAJrStMWMrgDBkZ3F66wq1S2GcyNAtm5GuvkXpRGLoZp3oEQGg6M9HdTcGQH8WEk2UYCLsrNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B7Y1udYUcf284GmJJKuVvWmtDNJYPpZjUaUSVjPerDG7VF286rtoWjwhWUArAL5xaQWRwnujzkH92DcPEx4sKPs",
  "key1": "5rEs29dRftJXj1kxEC7xGzUX2vEyqCvGHPbm562YQck1WhkBhFRxRD2w4HwgP22oQ1iUDdmn52oBHAzGx4PVLWZx",
  "key2": "2wrRQBUv9tHqCcPXAmL2NPmsQzskwAe4oZumrnuNxfzDHhNVWShEvHABJFLba8XFQrKieCiqYuB1mS1pyPfSj1J8",
  "key3": "5QTdJxSCY9E3wEyK1jahydQ97JmJjBK3R5v8zRAj3BaxsSXyBuSoZB1cdYpNVq5hCoaX6MEvWnWW9QUmqKx4XM83",
  "key4": "2p2dBAMyUEBY6cjsw8CXLmq9yWnHrZ1v5WWvFKfrtFeeTm3XqRuU286eQZS7gHwsbTr1pmNPgCM39V2pcv454TKz",
  "key5": "AZcL9Dy25ipm2vLxjjgHg37NYshLcFjjVdDrkB5RnitixPcxkb48bA3SjQw8SgVv7zh6KDHHYapKB5KxD4aGB8t",
  "key6": "5xncWBZo43b2Fk4nCF5xeaL6Z3abw3TDQuL94LRWpfotBiV8YkhR1Ex79YdR7bhiryxMWGhQ9hVZjHzyBqdTRhcx",
  "key7": "4pBS1GYeyA5rnJ48R4PMgH3u3rfvtVNHhz1dRMcwuzdCmRRifbNDJDv4DiVouk2EzHbZMhc3BBxv2TRR9Ucw7oBE",
  "key8": "3Zvyw3jqmn3SSGNnJpnCzwBoRgPWbcpzmT163Q9Au2wvwLkCDiRG67zWMnpc34iFgn22W6J2X88R7g1DuLH6n7Jb",
  "key9": "rntSqb3nJaDeratF1RuUPaMPs3U12HAtrSNb6TRBjBzxToG5aSfpyoPFG6G7yYTJTF21JUZ1cKDiXGQgYCHEGpc",
  "key10": "4aqv9CPx63JhhuCYdp99kuCo5uSs1UqBELMeQarhkM4ywTuF9ieVVDMR4QiSNLRE9i5xtKxVB4iuiECwS8QVZ7vT",
  "key11": "5pX6sGh7pUY6KJoVJDH7G5JQWFrfiZ9n4DWqWcEi8Pk3JMT621FH3VgLGM9cupT8pHFDwtyhZievG5acCZzLddH3",
  "key12": "5CrGcB7yHb183qAjMgMwSz1QvHvxfA1VyGTWkVmjaRnEMJtdXGK3dASyWiqjpZ7SdNjy4gFyEaJm1RWgYUoHbP1p",
  "key13": "3CbptXj5LUJQKq4DFUsQcA241hCAmF8gyNV7TfcSKqGequMQMqiSVuCHYwndy8A6tXUMv4UNMd87EFMPLnY2A6kL",
  "key14": "46HUCRHgFN48bzGpanCjDj2CqBDgnszrEZZJj24nrNX7xbW5v2iHZppcF6i14xUGQrhvQBseXP4C2PHe1KZ1UTU3",
  "key15": "563mxCtNxGXRdMA5k34LMBL6FWbdk38qqbNMnQFWK417NKyDnYpJJQYBbSoQ8VZSYwd5sH1i6JW6VdZMF4knSoWR",
  "key16": "2fdq56uc7KuH5xQhzFnUWRKsiJowMfS7rLL9so6XmKFzw3ZvccnzPUpYPmk58oyZECYa3JzUm6xVuKZhtiijW6xi",
  "key17": "5YEryHd3SD8Y1AZjbXNvFFY7rxx3h7rbCGQYboDjkg7DFbGs48kqdiLtWhgdTTiCeTjp8JZ23oGRjqGXBTzj6wif",
  "key18": "2pXeHtew35ctwXvTayFb2E4gRj4mnLBqMN9dfwWUpELAu8j7BTMt1mQhdE1nU1g1qzQ9GvVEKECjxQS2Pj1bdEvt",
  "key19": "4oJgTubn3rsENzTFkmPCWDF9gLD1jcHEmPy3LGzhrVpE1Sc7kmvo9K9t5aY93gASSKaghrP5qiVY31Gu6r7wden1",
  "key20": "26eauJJzfeQVXPw1RaqGRoCmGJQdLGSzw4vVXqhY9eLKXLuUBHf2PKxMPqwYct7gvvjABPqWKztaJFtSjwGmQHDy",
  "key21": "4XukNSQoxvKcu27kdHQXfWmJ21KGgKBeJmYCNcgHknhHgnkRureggPdtQvVGhLn1ryji9vhPeRYVxhu7cN7KTHxP",
  "key22": "2FdqzwqtxC6E5B1i3n95pK4qRysZVsE4rYr5aGme1sAkohNSrxvz94YyvU6822eyzRFATfrFN9Y8bkfWgqPCioeM",
  "key23": "5tKk5W869mzw5ux2z4YcwxJqXz5Km5uMnBHHC2MxiBssuC7oJmTrSsxZ6nSFtFfhEQVMLFc7bWinn87utQbBjS9E",
  "key24": "5eZ1Tbs5FJyeovAioWjCaKf1sa65gJmRR2ub8hDp1vhxJommeEFfRmxcTvMqTvywTqtKQuLdxhwjNG7PkeWNse1N",
  "key25": "5XUf7SEtNyyFR2bue3yq9cNuS26u5wzEA1G2QFGbEqPFcxseMKsiVWhp543E3VUQsgq1MqYB4H7xEeP8hECd8hXN",
  "key26": "8FoWGAPgVwuFtzb9SXX9bgFMU6sVuSHX57VhUCeijf2RAtJbETyKiDTwDfDH77uXyvev2YLnyuhTQ22K9eEfLm7",
  "key27": "URjhyJWYcWwYNDSDXWokNRycMnYdSUSbgQdwmwxX4MzjszhqKU74UauBh2Wy9m6PcdQhjwwpjYwwwzUspEBgYE1",
  "key28": "4cHgfWqufhGfVr48t9PDqXymVYZvhBBEThyf9rmTNcxkNf55A6iC7sBnrcv2pPCZ34kjBZ1Hj7rgtNNGtha1XTUd",
  "key29": "2xoURisASDHDm15WezJ9bkWmRYy5qhE3vAMZYUZzE6TDLiXxNYgRVSve8tZi1MMhh97KaVPXS5UYjxFojzu8KoTL",
  "key30": "31HUtPefALUmpNKBmjsA6WXFneyqYXqLxTykjUTtqEqZyT3rcqdXc6n6yrkBFjWxFSYHHag8uPMZZgeNuPKhyyRA",
  "key31": "5M2THFDStvpzeQsbYYBYE9yvc6cyc3VhvNdPRuio4TEKHFtiPnqaXDPCxvZGPoM3TchAatw57i2sCm6g1xBYmo9f",
  "key32": "5vQNDns4Cf5nWuVyivcehfrKxg3N2eAnXUmMcG4gPeszTfWgHKu8z5QW5a9BdjMxWis3TbmZY6yQtivEfqgYEsJ1",
  "key33": "535QRgNLNApkLb6msV1pxHfX4E4T5qRW4AowfpmkPcWxDdL6E5jfN22YEhWdTthNNcjndJXBs2WsSBiYNhCXRfiU",
  "key34": "3B7hV1MoPTGqGQM6VS2ux8HutJ5wcGosTVGMS38rhmp5LRTcMgkY4k1pv9q2x7KgaXZLbq1RwrW4yGdutaTfQYfR",
  "key35": "5QKg9UZ3bmUqT3Y6xMsXrXzCbwdtQSaWerYscE4WX6pQ95sKawxBXBCZetcABsdBmZoHujfiNfnt8cvaNEPQXue9",
  "key36": "5gfnz8UQTJN5VtTXCEEySTvDfB239C2Fjc4rpQQ5Jt7kExtNtgzVB5rAUEVGJA8eFhYNFfTLNNENUawSoLro4tB8",
  "key37": "33KMPdpco1Pu772LNgf1jUSKjJ2EFDAkJvpehEpxB28vUtEJD5EDxf4Hs5UaKbJoLzqrRTtxZtqrZbqmPyqkRZpw",
  "key38": "YLCDk3roKB1ma4d949nr4MuYEsesXVBCunYAuJZom3qrAhTvGV59xPbki7BPcxPztPdZ22hbgAqUE6z7bYZiYrr",
  "key39": "5GanEZaxe9WaEw8vUFX1i4hDCC2nb4nfg2tZhh5pHgwcUVYr7kcGPeHLxCcxnm8rvLWPuCvsTV9HRivf7VUAiqiw",
  "key40": "5mAQn2Cqko6iqfgyodiFVZ7vacNmoPgeCRx1KShUEXwYJC9ox5DchK7srqaHqBPef5MABWLwfSJSzgAhzLWWjq4",
  "key41": "5FcC87uQoFBxCBL2HXvMSvrkMFsZcFxCgf9hQHnKsGxLiMfUfqrs4Us8GXEBvByzLnT3h8aRocuQ6RDBpGpAFxzy",
  "key42": "3mS2k8ZBy1gwwCtbfMihFG2MNki6Rap5J1FvcwuoMbud6btpapAUQ5xXJpiBTKzUki51odwYvgsHsyYDeExZHPK5",
  "key43": "FXBhxtPbtkja5v5S9AAY7Z5q5931URWJeG9qCC9wT3gA1wAnAmVL9duyQzXc2EQBxyAb67hJPqaG2oivHgjVfbi",
  "key44": "Mo4L6WSMMwdU6oTDsZLQQ8pbKmvnCn58e1nLcbpR317RQXTueZGHiRH3HBNwVaGmcSJCMJLzu4FCgRszoBN1xGi",
  "key45": "5FKd1cFfh5CwAUjbyTLSLp6atqvPsKcCWhWduQVTWCtSb5Ut7uNscmkiZ12chPiRrJExSdWW7b7KXNhVxTNQxm1w",
  "key46": "3Uq1QPobSPGvQZ3Zr82dJKp3Agf36E8pZuBJNCW4zx9SK4HMWYhmf2PyVweeu4zmsi7UTaavDPGWjpXmhTfDUWWY"
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
