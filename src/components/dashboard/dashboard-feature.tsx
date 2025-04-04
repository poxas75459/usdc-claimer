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
    "sbSs5VqQa4TBn4TGvgQZtFoZhccVG6Wu9Lgwr1okgS793NYG9vMky9bhTBsPLcEWQVDpMKorLU7n8vsStc9FhdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nV4s7G3M3ZQ3PWtnaT4D787Fhq95QqFDMx9zrLbxMmqUtob4YUeuUZxePRDVQeA57UHq4LK7pdC7wxzUC6UYKLk",
  "key1": "4rD8GXq6zCyovj6mdphWR3qxY2n1GXycqaenY83UY58kjukUSLsD38zywvUzJ7HdrREF57CAJpyh3L8T6mcLDwT9",
  "key2": "38eXn6Th9P9qqnt1VCXRXkaygSsVAsJzyz6SgTfUJD4RpjDDQrphMVbmrNiBvbadZrMJpYNyLtys4FU3nidjxkKa",
  "key3": "2WmMuiA3qw5kaTVDg2NQAwQeqMKjQ6XMVFeCjz4aLdSc4tEaVhBRVoPBnPwKtqeyemVMvs1ogN9Abv2buKcaxnqh",
  "key4": "wJY7A1txP5xjHpar2stJcMj2jwm1ceUgkBtb1oepRyoCQDYE8YcFN1vHMCBcnzb6x8Ds7sUzFzvkEYEfe4wqpfD",
  "key5": "5ahewkPTJcg5uFHK7fL4yv4f7knSvyuJ72tT68QRchAhrHTyXeX5AxHk5kUvHxr98gXpGxUiLjP1C3AiTwaieEJK",
  "key6": "4Mw1ee24Ux2oYzJEpt3LPEZ5En9PJ9NDmFUPttGcwdrUuFyvk7FgzUKnaCsSTWndkBSVXXPrnRJtur3EEsthuNmY",
  "key7": "39bxg4iGbAWH2FiVYWEgskAQmMjHLyeUhmxJPb93UMDsKAJRNdFLpRsH9JiLrJGtxZrEjgWYTuebaGn9Yxq9Dpq7",
  "key8": "4JyH9RADx2oBhU17nxQveywNibJgSvaLTxnkzEyvgdZxRJ28v3Mv8GfMF4xJiA1fZiLAcpcxx1iD12ptRutnarGL",
  "key9": "2QAcqrMbUnxTjjWgYEKwVBzu7CxYpQ2MRDKr1bT1T2H2KjYeAthgwziJg4JDgXZ8P6w7saauQmAjgqpbH6oHA9A3",
  "key10": "2Ek5YYaHwhEMRtJ8PawrCfFzrL3qR4tegz14PpSPxGBkoS2Dgofb1HGtosMwaKXSEmiLUtNhikD3mQPNmTTC9MTJ",
  "key11": "YHgrvLRorH8w2zna4RfFJuiqxB2FHSN93u7tpHfkSD39kGGy5hZKqzh6rrkvJPeaYYSfjUVEoJLuUonX5qaSP74",
  "key12": "4D74YBChZGWdEzubW63xcujXrvSbiBATQ5SUYDcEUTQKfgUbNteiZgRsosonEDjdz8UobegjHHeJ38BVRW7wRc1A",
  "key13": "5nXRSTfyVdpyaUsPAY74iCieanbJNkbV42U5HvuFUpa2gKuRFEv44gSJA6CJJtvNJbtFmUjVkovZWAa7CR5yFWRt",
  "key14": "3qd39RkEELCmsJXd2Lk853Py4rxhAPSwJpCZZejzBrRy4rbGA993wCyE5f7eKBRk2SszUU6D2r3yTyhY9LnymocU",
  "key15": "4UwUoGzzzA14uwn15xUxySSPsRhCZXdsM5cJxxEtMFJLdLLGuxFZQddNSg1fixRt7WHDokvE75hUn2ezZz6td76b",
  "key16": "3Xq1CC9tuWeWG2VDFsEG4V7YDs1Rv1R6S1QPckhTiHTbtVLAJpskZVxNbC7tJNdwToBQ3zTnU5SejngkH7Pypeef",
  "key17": "5jB45X6LbuL6Ws8gmv7XViHqDc2GuPCyEzVDjJbzAJq3RYEfsz86pnFT1qLw7fiJfDBYxUcrVKQCoHaWQnQtWZdP",
  "key18": "3c6XzRFkCk7GirftWBnZoJqxLSSa9qSXYTm7aSZokVHFyfbjy7cZ247oKW4e6mRZ8epqiCSBo1B86iQH4YZeY2pE",
  "key19": "37AQT1hTLeC3tMrvqxFdi9nx4LSPxwM6f54yP2ffXCpWBuh71U6j1Q6i3CYyz8cz85muTqi2rW2gAj8nW3ebPBF4",
  "key20": "5wHKyeFkjcdH1FxraRxX6EAWFjTXtUqv7pxrkRKS1fs613dP7nHEUiBjM6HCpKDkpK1KVSqYV9VM8J5DKUo1AV9q",
  "key21": "469Vx32nCpKnYUymGZdRmLf9gCt5KRngWzQfEU1fkXyVzURhUK11Th4SpKdjGyL8uewZqU7A6Hjp5r1QyXcAYNTh",
  "key22": "65EWEGtGDCZPnFHNim5gCSXRJuAfJobcKp75qrpyBJrgRBKDeSjnaL1rMviEgkxLYZj1NvtMT9t69SjfrSninhGd",
  "key23": "SgJAyr8X7D4uo2TicYkY8RgYnSZu92WVtY2RmYbh6uVuAvGVxLpdCTcqj7kV18kJyEX5ejLieKDVnh381MBRn4U",
  "key24": "4KETgZyF4EXaEHwh9s9jxp9RqJD1rALVz4vEMLFvBAu81wHBuL1873kba5X2vps5Xogn14AZWJrCCAuFBzn5qafE",
  "key25": "esUoXaSts1nfutF7uL4j7iHexB7Zo2efup9d6hM3meVDLnR3fz6njv5njeULkMBq3F3t1YcGDHk8HTmCpVi2wkV",
  "key26": "5FTpE52qRsrMj7YBsJpBm1cuhNv45uT63tg7mqaE5mPMiFUzSewDWnNfFxQ4MPe2dYwJPzE21adyMEFF3TUxXSiG",
  "key27": "3TuZRGhvkf6jxAVaqqPd8y4neQD9jYJTRNn2QHm4rwNzXENw5Q3S2ED8ocFxhu8LGK56MLLvoW1qv2ScxuzTVFzx",
  "key28": "3XVsgtTmKjaZEEponK3zVTXCTXbKU1dxiomQuMJauqwpQZBzdYSBZygMuWujRqArwPgiScrekHgqYnaJzVMzXhdx",
  "key29": "44WaaP3ta5sgHGxwmTGBmKN21us7hUUv224mZiDvdxn9wLeUmSDKP6RM43VadPhNGsffP482go3RvZSpeQMDz6Ay",
  "key30": "4YuoaZpaN1P2WB2HQeWttYWBDNSM9r38pXZ6jW7yFudkwTNc2W6rR6hXs3iMKhZhykHHWAVUuJwzgYkPLv6AgV17",
  "key31": "poujYHbLSKGkDVmh2YgfL12XnQ4B5TapYXii58ZsBxGZEfMUDiskkxaodbLJYGS2bLaJcpj8ZmhH7htZeYQUYdc",
  "key32": "2TNbGrQCrXsXoZKCu4f82Q2yd7QQ16879iUSQ6TmwVdWepFU3gmCdA43y34qRUkVkbvVDHCcXr2kLtdENrWCMVJp",
  "key33": "5VqgxukVh3zErjfQNCsarjZE8QFCPNuf9qSh8FhuZTqMGVvjwwE2pVXvVwPZpnhtzqWEsVoG7GM43kd1vLvzJ8p",
  "key34": "29541wMV4ymMB6eZukBmTehjLs56bRRJbtPw7botvroMHm6hjprFJST5deqGrxU85vMzeFjn9yeCfaEYLP83YMxJ",
  "key35": "35BGph3issXcjBdGeuG7NyBFnYtmeQwqRmap6wYiTXwEG3izy87xuv3WT8PHjGCqRcm4R2gDMwrJfkVjzsya8fU5",
  "key36": "3M8ptjBehr9M4BQnt74p38v5Frx7d6DQuENxiA1axBQrh7Z3FpAke7VK861w9TNsiCqKg94ZUXPbX4zh6wLZtpVD",
  "key37": "SJgiVnukGwdtMdAxGoNQtXe7Zimbaa5XNph91c3L2ABCrwhAD45xiC6yZeEK1L4NwuCpBsETsmKt175nPamY4N4",
  "key38": "KnZUvW54bVbB5NmjtkpUudQBL5yUHDewS2dwhgX1piwYKyD3dTr5nCyQFoFFQ4nFzGQrddATjTTtK7HLH1h9ikz",
  "key39": "2n5k6ACo9BeLf4FqMWezyyVTwB3YANkaRSEM95VaTN9C8qSykkUMXoTW8mLoGZS1ACGVYbGjY2QYC3uGnABeaqKu",
  "key40": "28xa2tKBFFrbzUfvDZ4EAFFAwnr6apHc5cTxpny49o7V65eh5y9CdK3CVshTkp34691knstKqbFXrkGu9Xy63KSs",
  "key41": "41BtabKSjSJKESoBWJ75gecvvpR5rXcJzqveEmZcxg6dEbAcKSCa86X558kNAzP3k1MYdYfPT92tqD57pGpqdzyh",
  "key42": "3osrVpHbsBpaCp2EYaRf4RdNYnrPFB8HMNJUK6hTWhnrR4KycCiLQLDP1ouNamVTyS8AHxRn2vS8YujA1jFisqjT",
  "key43": "5UiPV5p5ku9QLdjCKK7KFUQ5ChSsqafJ7LtyQ5oLNYgVRX4UL83xTeqHiaksbNP9tesLzV5Zum6J4QRp6wnkAyBT",
  "key44": "5pvsZCE6XaCoufbBsJEXH7JC9UcERB1QSYvARWgeGsB3uAnHPXzaV1S8675AhKAHfPm1aYu2dhXL5oQyqCv8pvZy",
  "key45": "WgoKLEAAQrPuyBEzsGbXwSFCPxDXKpRhNMuSHPrFcJfQ938RtXPEThWLKbEzNYgZ488bgWVhf5u2UiYZyjBDx5g",
  "key46": "2LZ9FeK3cc6QkD35YedhsTitwYWSmL4puj5LMBWWbahurPmTbA8kff32bFSokutPataNds4XKqsbi9CLh3wTrLYz",
  "key47": "24JZ9ZM2Buse1jduRC2yQk99EB3jBdnAAwVei5i6mYv3sdpmjrJYzXmFDuasohpaZHvFvwPksBtqMeWDwRS7F9Um"
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
