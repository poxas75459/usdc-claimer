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
    "4xkv8dxJQfks6FjbMKKXvtTjy91wDKV6j1RyW3KWBKide4yxQsX57ETCEtLR3S5pUFk7KGdtVfkWMTiW2Uxshyw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EWbYcyrG1aKWXxaMredEVzjX1CJzF1W872ER79MFrTwG6WqxZ2y3FXWujVFjqvv92TX8W9HXmD31cPhTBKDAv8u",
  "key1": "3L3bia94R7pLFE6CNKWFed2cq92KF8B8b3TW4GWaGBagDNS3aeqAGV9WNYRAkcoN4DjDhPtnh5JWNCjfToTdHej8",
  "key2": "2KA2smPC6mzkY9LGNsYhT7nidnBbUkeME4qekHKsc3wYYKjuHFTpW1WLF2KEEWtnKBmGL7KTcwk4Rn7pdexdqpQb",
  "key3": "5EPTKbWSUTh4MmdWPXn8nehVy8T8qX1yRTaiGonB23oR2DKUY3EihPMgi5VQA3MwBsLpydqRCVypy5qE8h9sHBEg",
  "key4": "2WEgxEaGoqC5rt7GxKVmoGgEbH58vxuULxVjufC9kX39oK9wGYe8muZ3MwfaqJEvTNo7teNxH3Q8qhB33eDaGYRE",
  "key5": "3xzwd4DgKSenKPuQTFnjLMGvnJmWxvzakW3mLoZa6oFFrxcFXjJcMrtvkNSj77Q9dAASk3GyDQZxo6s3oNTpPBzA",
  "key6": "643RoVVR6msrSFC4UswkHiobzhqXyKjQ5K1GVhmu18UhfyPEzuRMXfnBSWVEfJQiBPadf1iG8wutE4tTRetv4cXg",
  "key7": "TyHW3eszuQL5tzj5ZEQLbebPcZn7dif8kehfPE247xLawdarxNo2siLcKKxk1sPjzGMGDtt2U8CNZLyW71yJLoy",
  "key8": "3ihDvUGBDBfSaWHnmdrU9cqd7Lx7rnTAtjuUSZb4LpMpzXDV8HmcDYZ8kcrNcCniGhBhAVSgAFCb3Bk9v5HrNaZL",
  "key9": "5EZjNBVGkqBzTskzSnbur8F252ebYZJUPb93eCU8nA5V6PXGCoqAvp8SNveqQyWJnpsajFw64ureiQA9ohB6H8BH",
  "key10": "24kpE5dxGdzBFDYZkSnSMnkZWoYa5VRgQSw8ZrBsP5KNfbubYcSMUeT7PUBY9HKt2oE6fPWAbwmB87TjknnJYQzS",
  "key11": "4zdM4ZUrTb7gEEGk2uQ27XKpkT25JkjxSdZ8KoXvrUtY9mBVg1TsiTLNdD3RgfSMUTPZQ42cqBJEeCuGxtvcaaHE",
  "key12": "33WWYV8GTE693wNg3zNurFYD7AEZgjNg1qvqNoviCUNJWUDpBTnfP4fNA4JegmZjGdp4vNHqUx7MFKcaaXen77Fc",
  "key13": "5mzEF48s4rhKJtMWLFWbJmniwSDixsH1t5v9PAQJPLysksDXhX1w4ivj3JkyipjqCFTX44D5EG845yfop6AF8qZ",
  "key14": "3VX5yfXZrf3tpzEQKdPVud35N4WQvK7vwLbJoDq1PhM4yor2oAD3X3ESG3JoLgFno3h6uiNji6TLEWCRvfjme6f3",
  "key15": "4P5sj9Y2XVy8FhYyKj5mHb6ydb28r6Dr5ZpYej1nmLm5D9yomEVssxXADE5Pop5CWNXXLLdpMKV6FpnhvVo1Uyre",
  "key16": "4RwMF2A6836A3MYQxGyJLsfnFA4592Uung113M553PZJ8SLEvS3kpdC8N8BzKipCyNe97G3LCzi8941U11bpoMQC",
  "key17": "67o44V3598izwHwppnHjtsvZNUpKWvMM1Z3ux3tH84qhZdvQvQZeeKZjo9cduo6fcCpz5LNio63H2iCLcjoR7hAa",
  "key18": "34ZgVDuQMvnQkH6XBhvfAcV6puFTJB5HB9MRDVcfRGbye3FVAZ4sBsUD9DotxUPmuj2wjFMvVo8GjCgQ3eTC7HFT",
  "key19": "4YhuMm35ymuY33H9nJyxYTyd4h9uuu1LM1KPFaDFARSC4CchBtwpE6LbkeipXeYfWJdNh6n5xcYjPijttTEz8S5c",
  "key20": "3Rjp8vucuHBHHWyrtieqgmV6dac9nprnUauz6t4PpnnGV9cqQjzomv8WVDMGY8mBBEAVTyAyrdpMNCs88qKLUGiq",
  "key21": "nE6vZMikTXVS6sWW8k3NoZaWW9Fqx99te7SYKoN32a2KWaArvBrp48HaUMySUwakETCgGmeaEX2SunMWawLQCT2",
  "key22": "1TnvwjVmVFobs7zLBy1dCDpuyX66mxWXpiMehwATHWbXpfQDmwoWyYeTnZVuAVWLDErvDSUwLhWCLoHVFDBFKgS",
  "key23": "3GxJmcPutfz4kTuUzmrC9iBHVQ6PHoiudQy3At7XHT9pt6VnpnuWs9jTaAdZxgzPGnQLNkczpMMnuvH8dVYtzqe2",
  "key24": "3mWGPDxpx8VxMfJojQfm3F3FouSPkZLPzDXwupy8ZU1ZtpUZnMq9f4xjh4MpCxpFr3pWMSSv6GqixLnFCvz5BnJa",
  "key25": "jXPKmqHUk4MZsAU2LkV8Jfe54UQznqvSXBsNVQGtvZFuaieBVyuEinGeE4rPS9dJBPyYCaVAGQNYwmpGc614CGt",
  "key26": "31rDKCaFjZQgU72pPC8qGRd7M6WU5etkD497aPFG7D8GV39t5kZp3eWKYdnQujNagjV11gVwqyKraMZZzFhmMyrj",
  "key27": "5qQt2daEVtEPRrbqB6EsGkVnZsmsWmKAEx4M3mJXQiLcWBzj9SaosNZ1Nvi4veNdb8iUjoWzDuqUwhCPz979JjLs",
  "key28": "uRbSqVt9bWtWwF1qZS9Hn8yuK5yuK4LSBozT3mawJsKU3dnEo5zF6nAJr5BkaDj6XWVus4EcmGeDTcAKV8EJroH",
  "key29": "4ij1sC8sgkcXe8Pp9x3baXLdMaRVw8vMNX8AUYexoPni615v2jn5hWDmqaEZTAnRLaQEvpPCLBBjB7GnzJrZNSzM",
  "key30": "PZATVtm2uhQqHp6kvRo9GQhmNmYkwAV6c6JFxhKihKvCew5qWdoHzQN89PiFcJ9sRNNQ7uuBuhWdqXpUQF5b8S6",
  "key31": "pjtu5srAc2c49TnacqZyb2oRdGt8PPpnZQyAY9EiT2uTfKr39wcXf2x4e6rtcwv9kUbYtBzbEKVAT5toDpSsgUU",
  "key32": "mdqWVibCzHE5mhkSyPK4nWhB8RjE4pGkefFutuw8inikMpvgDakmhaS5aee55NeTvMsob7SxYsLzM14r77nbUFo",
  "key33": "3iL6gVTWyzYiPY6r9pFyFSDLvhoNMfhphJ5vXKJKB3z2vW45ir5ETH4dmCrSoa1p5rRs5SgfVL2Fr5xyaRjN3Ap6",
  "key34": "5AX3y8L368Pv1sPd615SVTEGd6nbAQp5EMnWAFCmHi3WByrbp7Az3gTexw82EE6VKwh5TcqwPCVN6QsfZywe6uVQ",
  "key35": "363VnwHGi4o8fvYJxUPRATDo5eL7uFHbh6G8cFJqJrcFV41hgZFwNKUUC4ZWS2pq7LxcabuMSauQzKaa81JwgWkG",
  "key36": "FYse46KStMc3WUQLY1YKpwxub8FtNdxv1ZMs5D1PMK3iukdpua61tchM9Cju7NUBypbfdrnagbZXRunQwqNEPWG",
  "key37": "5Xv8SVGWRy7Q5hYukr1oXERPmpScGBLrkjv5kV7hxohSUzjm53yvfPPNfUKrKXSkZB5Y265JFpFt6XtEm7E7aqM8",
  "key38": "2SEHWmfn5rjNksKmK4qvuHvujn2PUPppKzykTemSy7pcfn4uGbrYdeyqB5B6MzrqZW9tGs678Z6acQZH6HpezCue",
  "key39": "3JdG4q5WzamKdTgUhMQFGN8RPYd32K4yPbxRsX6Uj5c8YKErUdQFwoYZQUEd5pW8a55HTVQL7V7z9qzA8PLJVJnu",
  "key40": "358QimefCvwgoSiByNetsuUxgruBYjsRKLz5cYr2ifMFoFNURJMakjP1sjbb7A8wpaDoV67f1LnceMqBqnwH3cGf",
  "key41": "32kdmcMabo6BwmzpBYAZgk2sQT4HA6hgsHjyRMFJohCz9842tfng9Cop5HAU95ER6Aabf4gBMEpnSDEXi5tLJkjK",
  "key42": "S2GrJ2V9ehFd4VUEyCpaq5KU9QRw12o4DYJvqBAuL1ePvtAw6J33bzaAGA8tz53y4NR73dsaXrkJ3oYe1Mjsu1R",
  "key43": "2nruhZPYKoVEs3Z2R7Pf82ZRDxewfZAfSgVmQr5HzDtTYtdEJPg7H9Xkgf3wZZJZXfcoDSi5cqpqryfM4ZR77YsS",
  "key44": "GzWRfxMGNUF9kprTdzqRgzXnvpw7pqU6r1wBjEeSwbom7TnK33RW2B7Vs2CNg76uwv7gPPG6ucqpfCxrtC8ShqV",
  "key45": "4hV7o61AjdAzujVnbeG7gZjTzTPvnyntRvRnpf515rpwTB3TaHBDn6RV3XE55prGjhcxCEsNQddF1qckaDyYiWgD",
  "key46": "47jtNji9U6WaRPnxduTBe9dtaZtsVW5mnftBJHDChKgYeVYuKTLY6x2f9YefxWqJoXwKSmB8zByiBYMiBGZVnvaj",
  "key47": "4mXGyPevKfwXdLtr6sNwz77fdaR2QSZdEXQuuzUHjrPvyqKoQJE7gXng6rCN5sLBNe832EJqnPTnwviXucR13LFX",
  "key48": "2cdcwinXyNzZLjY9rnxmNCVD5ze6mztA9hXE91eybHX46auvs2CuBCUG54HkS1J9yezKcMkUn2FkTu6rc5vBUVmL",
  "key49": "2p7jY3t7wVjYhSCJQd2bQDHSpci4DN3vZ1RMqCENfeMq2iKhNehPMsHifTta7pnV8DJwym7pGJTRkgv9tX6sUtvR"
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
