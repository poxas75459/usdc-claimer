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
    "5EpXHQ8JdMWeZRhQRJ6JDYAkeeXTHtRxtzbbSsVxNBf81ZwswT89WTkmozHjmz6maxWonjeUjuwNCVqvgwkwMrYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z7TnTpqXXAoqbiaydeeLpZkqDtPCnmxaUyVHcGQnAC9h9RoMjMyvrhFv6S2hP4GF5ssQg3LGxGkZMi4NiEngKhN",
  "key1": "Q7yfmQSAzFNSMyBHPm2PrUgDtungGHKXVgZnXcyYB8rsdabSrvhQANxBj9UTb9Z9Yo6evcH7k26TMoZkpUZBhMR",
  "key2": "3vrZpzqtwntMz1xJ6mbdkZ8vY9Kn5N8rtdaH6FNyXZJqi316sQi6YhVSMDUUpZNSH7vwiNSY6Hq4i6xp6DMz847R",
  "key3": "5aZoRKdonbzEdwWHQcmZSdDK5w3Bp2tZdp73e9SMffvUx94nQE5APKb2LzrGGS8phb74hc42hB4RNgxCSjs8TSty",
  "key4": "3HMexErSN5fPhyEwREz7khuV7rXEuFtCVZtUhWXHg8KeJrC9tPwczLDcDncUQKHHp81YsydzjbwB5WRsyfWmhVj5",
  "key5": "4cnkia2uE1Ja5LEkNJEJmewmzmdzJFX5AefTAVEznrrRiavWq8uhSt9xQiRMFK3TGczgxxTAmwFUQdHJMtxCsH14",
  "key6": "2ckFHojFRnStaB8nenu81zpzZ1adE9puogM3UyxPpPmitfp2o54zBEZzmAywaVD27U6NYY5cxWHYXUsLBU9nGJJz",
  "key7": "3yohPb28ZfkB5D3rdyCto4pefpTiXBgJgRdG4vAfJLCN8SMLjCR1mCfZediTcUrZdGttPkNncSVKPahPNeEJFaVD",
  "key8": "5U7Jer8YzAFyfU8pfaqDAaNSwCV38qz5nvNf9Quc9aYWR3r7eaWoUmtWdvqNrMZRiccmf58BdLURNnu7yfEUK5Y7",
  "key9": "4K9YzVDkG3p3LmmhmPuV2N1RY1ohyv9FoQKrKA5eyuUKqnjHGaDNhoMUWqfNuGSfX9MhVD5xkmumse1QVmk7Ykm6",
  "key10": "5hZ6FcpsAPQQVYxLoeJitAYj8QhhHJtyXScVXt7Z3KYgfrCr3vo5KnwXVaPap39YAgRp5rLaBBxjSqezdDzTGx3a",
  "key11": "4Pvjos35gNeqYaT2uMRQd5uvyPm5v3iVz6aW7TgyZQG5cb3eucEVTHG8x4s9EG7hzNeymRF8tG9M3ivm4kYq49o7",
  "key12": "5qFoNKeEbgqaHUZSPKtWU3GB5rRD2syEer16Up35DXQsjZHoHYc15n6w99SzDh8urDGZSP835hQznoBFP3gnQCt",
  "key13": "4nyUqz9ymX69kGLLQhFP1ScrqXr3WovV7Y7cqXFnXNUZrgEGo81bBD8kiMzTGZSjQAte4Ut7UP6WNJrm4BxGxJZ8",
  "key14": "3gzgkSTGc5GQaJudeyEARjnwMh6L9CXvJii82EqUMXLfSTUGKdfetBq1Zmh84JmkVTx6DaF2yoRcCXb2VGvPziZ2",
  "key15": "3V47SW36DyurQiCHCrBQG7B1K3ftcnCxeqo1bipVTsDXmx2K3FqecTdox6p1P5aJ6pSZoGyhaLDmTR7xaHstzf31",
  "key16": "fBVK9qtPzZCmf7Jevwh39ajWUKqdU5McJYKKnZu3kkSYc6zYpbBY52zJD5eDrz6P9DZMZwFZqE6WFUjvmrVqNdF",
  "key17": "2HU4psbfNJEYMCWNzw2YMXDLgijpbL4o9WGBZwMKx2Rc9J9tUZAV7F8faeXca16UoK5EKcGTMrqGQ4NBY21oWQs7",
  "key18": "4bm8zMLxCV88qksokFMMuoKMi4qfzihgXEp2SypFQuTzJnqZHmRap4oLaHjaC4xMfa6amiRDxF1ZoVHAoQXW7wgi",
  "key19": "5y2wxM9hZRNMDbmgxp2vJt1faHtmCgiN8ykNpDgAhPXcxaPn7cC1f4Dn45JifeCu59UTWE8vsC5RTTSvhQjGdqrM",
  "key20": "52kT579467FyftYHrWavftVwR1YCfPWeoQnnDK38o3vYEUjEwe3vwQZxCz3EzTpptR6cHYrekmRutv1mMkoWgkfP",
  "key21": "5RnP3TbSFDnB5j5VmDZ7DSCPZWyoLutRpJ4aZCXY1CdrQK6NYWNHz6FPV2K4ybV8KcgHv1HNXocXDmMkb3fjRnEi",
  "key22": "2THRZSeFGhqdxH37uNBxwiTPh84i8GTFox4RgrDAEmsqHBgSBK9Eo8BywgpvbWMSyxcmfzhJxiwF138vDDSUDmQE",
  "key23": "2ZE7E1zY6tKkrgn9JWLqZeBTj19ZXhGS4UuatpHkAtvTZCg6pzB2ZHqphtewAFdfH1kNTk1SSuaynF2bTZ4nqSDq",
  "key24": "49GhSNeQdffa3q5AQW3cGZGs1kKSppqZVaCoPzeacgrdmcAq6jdmBV8RQpuj3iR3gvwU4L8wc4qZeYZb3hiMB9gZ",
  "key25": "2AqJmuPZ1Fw9xkPgDoETDwzFTcvmxftaeQPqPgTpAqtHZJfVaCM7oXNJTLZzB1LhdvF6HkCSejjN4FRcecH1iHGR",
  "key26": "3mQNMBUP268K1CGxMVjfHiWBpPNcSLTDdQHTfbnuEoL9UWvDjugTrEMppRPsX2A5n8GKJ2SSSECuFEVKUsCfQKhS",
  "key27": "4jBYLYaar9e1e2RyUHgasaazsL7pKqytUPVG7dqc5giimcwTU12S8TeqEVbdpN2GVciGGFq4td5wAJnhQcbmX7CL",
  "key28": "97EYgiqMiU9s8StFYrHb74aosS5CALJADdYkhBSveX8HrwaPtvHiSS7f7D82cfd9e3KnJX4MwsSHuU9HavqQMAd",
  "key29": "2qojaHZ6f4L8afJN3kSurjdbDNZAJ5exD6trmPMbVrrYWAewpSJJGSFvxCWY7etg9CS2TbVbueuDgenSuV6P4BZU",
  "key30": "51Z5QQuVLFZnMcCX6MKvZDLDSVqZbdhFK6MByYS3eWizCWgyHyxvnVartfW6jWNaqJZuX8vd1K4c5vfCMgLBihme",
  "key31": "E3n4CmhXetfXxVDfxCPe6LF9EXeAAofGZLKRM4EgoC6qsPCujL8CQCEBUi7L6tpxi3RE3JbDcYnX6Uhwa4wq6gd",
  "key32": "taoTRPDLEQvziVwC93a9hDucn6EyPNApRycvjgqqBA9UEG1wCWXAKZAjTRt98xf6AaiWrSoJqLD23iwkVfHeHUW",
  "key33": "4J67NNnXbJKDm6eAnr9XSonkeFiVhfMR5zrFgioZ8ptfLKX4KC4JbVfdTWxKA9gGF8KYpq1LoEUkKJxmvqwNNN8x",
  "key34": "5DqwTyuBEnew9XAhS57UcyGVdKC1ignZBKaS9m86R35cxWoHMSC1ietJWQGeAWn7QF4xdCMJi4ciEs9sGMFHwr4M",
  "key35": "2X4pV3dUZf9nRRxCDVHKq9NXXeAdov8Qe3tE4WT9b6CC1fos1nNYVKihfS4oCB1iLQtgQSFrnaorB4uJyrsa7mZ4",
  "key36": "3qmJdcS5XkgxgXojEPecaZ3boeMkAvoMXoYHkcdt8jTTVh5qPawC1c1AfPTCzbX8VLXZUs5fmEdxybxzyFWLnXR7",
  "key37": "4AgSckkVP2Wygv4fby9SndsPVW93YJtxpV9bNVvp8FvEQFajf2VPUBf4GT142B2KiWuefZL1i5M3oiCMKZaM9FvK",
  "key38": "59vaTgxo6rWcPRpGeZJZRrT2HM7EqBK9mfq7ebri33d22vMaALzD8Vt6faZ3Wk9eSFc9VSgb6FVcrvHcMFaZvBNA",
  "key39": "65qrEituuzbvn7Kkf9xm1AtXeM8nYX2mdWQodjaLSqV7q3Zpj8XKZLMznjgMavBgutfRs57LznPKd7zwfSeoRJyK",
  "key40": "55fy7qrxNVLsjUJtsV2kqj3mfZ12tsZdafRmWeSAWQmS3vXzb4fPcSsnNZUPgewEEQj1CQogpWPPQHaruTDMziPr",
  "key41": "4bA6N9Ut36tU2NbvcdHpwkc9uiVRt4YCfSwqgNbG6aAh45yRy4byYNvZBBZyPcnEsz7EiuL79poVYCKdwZ5iUHei",
  "key42": "37VZ7XWueKfRNxTEe3JZst8EXX5toiL6oE9AMm9VetxJihgirA4yLjvN58XJormNCrwGzoNoC8aXfRXmUJqq8eH7",
  "key43": "3rNrzGmDJLJEazwyxe5BgEscqPzZVdvbSxkzRp5qyczWRMKwVczHBUWgSRPX3UF9XKrTwTX8XvPc2whj5xwju87j",
  "key44": "3rHREVaDSYTi9JHC8kSU6zfRNtSuZXGyXVTuMrXmQgH8bWTAJc7LrpqKGqcLU54P2UDPFUe8dsKgg9BFwLhqD2Ef",
  "key45": "31cUvKe1SuNAu4ocTqkSK3hqJwiSAEDHryaVd9NRFBMRjCrJm5UCVeeiLvi31Y9caQTNhMU9Nxw5iY1dN55De4ki",
  "key46": "4BoTRDynVhUq3d4naLPsiJsN6ipteSmwrLqYaveM4swvyGsvX2LDecdYUtK5Uw4EfsgGykmWm8BvEzawVC6Bga1y",
  "key47": "5EwCyJrpvitEZwN5VzRnjkEq1rY5kbMQfp58rZ9UriRe7kB32zQ3m6PazCHrwE2crRJNSNPSn7pQin5wE2DYrV75",
  "key48": "66a4A9Bd7t9mg7j2SxcGR6Xp26fHnUt12Rckyz8i8CGjYuwnfSrj3zX9xxeugjAV2USkLX84aybZbNDRnoKHQR8R"
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
