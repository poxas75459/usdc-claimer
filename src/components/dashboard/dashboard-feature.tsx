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
    "4vHZTnorc43ZR87wNtAk9XjV7pWUkAMVzTvwWnV2G3t5KavLfT1rwGh12yMDFj2tgMH9dhEASP4wQD5sXxCis5Wg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7wErYLA6SgTaWceHEcRBrsEdmurG1bgCeJ1kSWg1VcNThM8H3kKn1fBPohZq1uzKJbRJnZK1uxc1YURmNi7DZFX",
  "key1": "3w7s3yFey4C4Qj5vfsLNey1s6A4mYUkJD1pv5LUkF3kZ5MaTo8QFoftHsBMoTmSH1js1c6BhHnkSeVG9uNFcG9VH",
  "key2": "3JZcHfHqQ35zSN1Vc3q58KZeWJ7R4PsRGoAPbYnsbz8rvmEkUbyBy1sWZ334x7PUWKQSCmKhGRMn92hVTCidB3ce",
  "key3": "5ytKpQZ2qEF7yY1Yr3DHpPxRzEM5yN3mrPXnKfe2ZUkV4srYQkxNKU7F83eBS69rVn2YawkgHkp4ttX7yyTCDxRM",
  "key4": "5B8AH99kr22gW4yMnktxF2GVwKNsQHN7qyB9APv4Vg4Q9Caae9hKmdvaLDCW5BxGWnqErjVFBPPX6txZfzrTKuMA",
  "key5": "5VGaJe5dBd6HW6AjdTTu3hGSRe3nUhVF4yMUgVZZWpsX2LJrWfyWA6Xd3ykD5aaZj8KcTvsEhauSjwjYDvnaApEP",
  "key6": "5q3tRitJsJgcXmQD3UoTjPGTVHQDptti1JxRSveDDRD9iYXZuzV2KwQYrBXxYYQyQtq3WhD7m9fm23gbSfrXQeGs",
  "key7": "4bzHvZVd4YTq98wwRzZGkBKJfxN7TF4UTzL3mPqmZVStan3mKcir5YukQ1TKxZmp8mwhZegUuAyrXBYjTD4YYYUD",
  "key8": "3cQw1JScMMR162ychzfJjPdwdADSXQokkpHEHsiPsYQ7bcEcS3CfFcsEzoZXrQyxhw6HhoaEfpQ67nYN4EcZVeFd",
  "key9": "3z7Pcre8PQ3C915SnE9EuCV6TsFyw8PiKc9KdKmzkpHJsrT16f4A7PCPi9ABMcvci6QoNqRBhSJoFpzMyDfNdN2k",
  "key10": "3gcJEeAvayd57wzNbiAF8QDfSWXZTBB9stXDuSGcqw1hXdCQwxCNBEWhi8zVdBn5ZbVefyTHpdFguTbc2GCUoTHj",
  "key11": "3Lhdgc1DdezMjBb4n4vJGvhDKHthTYzuY1dg1dqKr4X25YW8KNKJt76nQmNAHq6AVgnexJM9TAjdowF9GhFbKwQE",
  "key12": "4NPaVbpuwsQswwAXo8k1zQPGdB5aQ4rA6fjUY4HR3ZEXX8oDMat5tQi7e3jKWJftizcEWQTJPNwAwGLxLyC2AKnb",
  "key13": "63X1QGffJG3VXrJs38F96VpqbV3ggy6QBdxBpr8Xg5WW6fzenMGSg71k8EVVnrP4jzNqS9QSuG8C8DChVq7yqeNV",
  "key14": "4YUGBpUfNS4nEkGhgHPcdRNzXjk9ZuhgNDS4mKsbSCzhted3d6Pjr5GQqE83HWuHp45CQMmUyz9DpeSBsvTmsZMZ",
  "key15": "9AhUazF4cKKgnZFfSMCs71EMaU2wJKDz1rHwSk2NeEbiJix5JENSqfFJq7SV7WsiZUois2EagfuuLkTTERmJgB3",
  "key16": "3uPkDgwVSNFV3a5CH9MaMw9izx41pt7WgeqzGh8pD9Y4378Jd6GFQekuvcHYdB19MmcPkK3Rp7VEzzzSyLMkEjYq",
  "key17": "2hQncCZ47ZVpH8TpJXDfh2GoVvSsk1mt9LK89Hfn8suUmYUSArEpHfKFz6ERrVdLgX5ghV55MHW2WPkyrHoEfQRN",
  "key18": "s397hLEUoxvWCXU5BazZJnFzmUEuqPmLxHHwQvfcrX1FVFrywVQcyzkP81WVHU3a6a122MYEfhLZeTC6ccqvPew",
  "key19": "5Mh8HYDwmc3Z8dQM8rn3ZYWFmnvADmSz36nYnkRoSzoKKrZwnSLcYHtkhkx7deC7cxsrR7VvGgQV8TVrLZtsmDu7",
  "key20": "2XZughvJS4J6v5TUmtzEiHpPFZb1mMizL3CUMKHmLKifRPwkVCVAEfV1Dvkoh8LCEhsE53aFKH575cFvuW9vQb1M",
  "key21": "qzopGfhENLZUjdYSn2Uw5eDfXVMe2aAYMeVioTocvkajrdSkai2ZHfmt9DSMYSH5gHS2nFQcLob3SpAkSyjNyhS",
  "key22": "3AiR5VcqnUEn6C11fLoNP4beSwitDCkGGL3y1RwQx7QnXVJQZkHjx3Dh8yUVb29gkJBNspb6fXzgi4k3bc1mjvzf",
  "key23": "arYT3ohKgueid7d4uxEnezHBERyGeMAp71Li7QDoCK1jVk6BH6vRpnZUt7i75cZp9r727QbXrB7tzQhca7T7SuE",
  "key24": "2WmNUyKiU3dBq5Udjeat8t83jUhRusu49xm9MG3ypEMQdSk4bEagicjVks1w3QkELqTS5N1csTb3gayGb1DUm2vX",
  "key25": "4xfaCz4ELdnu5wzddFYaP8Ephr27MR2M8dWmvqwBockxpDvANeTwKxhXK7YbAk7e8PbLRVZzG6YkrKMSDMcLfACy",
  "key26": "44kWKf5heFXGizuhb4Uevz1Bm5AyfBccNYcPtUCwqnjmS8DH87BG3qDcdhD3J3HrbzXfJct2Xdq6QtB4AuT3zboS",
  "key27": "5yZ97eRShbCod8YoAzprW2sGkSBHRKBB9bNMEeVyXMs7h4pRdeGz5LE2fBc7bMb7XbcSJJZZxAJsyKarqwiUgSeL",
  "key28": "3TygCN3aDoxEEdDy2Xt7YtGNDysYRkLDAuxxdEJwz1psz444WSvPPziEKbkZYXdDWsAoYK3ZrkRrX8M3QfiVdX1L",
  "key29": "StZ5HMi3RXfrRL9nkooxMiuy3Hoj7aeshfCQZoyDfeme8uvszWAwFWQ4FzF34BWTvikmidHJAfojzfe7SUmDwKE",
  "key30": "3nYRRy2TVJS92ZWbJZruQtxZnLTFdhLaNSyhgPmc7JtHzLabpuxktPiCeg549cKccXvH1UaAn4MNzqgbCmdgsB7u",
  "key31": "b5AWAd3ZYszFfo327cqEqyQtUaH1MqY7mb7gv6kzSqT5cLbDJwim9huPJXmxBSaXAcyJRUVMfoJMxREHAKEYnUK",
  "key32": "3BqPuKGEtsKsqeR78fA1LpWKzMgjw72U17qPG2yc8T6DxDeGGTYYN4d6rsCqvVuRYzPuyHcJ5cXtphUAji1NJ4rq",
  "key33": "392VVSBtbkx7NQEoSGNr43LGNrg9VpBZAHejAjMK1GH5CwzyyESEHsWE2VhDNo2jUa4gNUXHVQi3zAs8kwbHKK37",
  "key34": "iKWrKBjXxr5DjBPQf3fLcb4ukGAbfKdtJyjNSrRRD6HVgSMtPY5xUUup2N3HdVK4aWwokZ9r4Ev3dAVPk565YCU",
  "key35": "cQUHfqz3KPXACN4NgYj6hSPqEkHptZwZjdJaGA79LAfJ7mvb8Uf1NS9ZA7NbCbFjoBmQjRRhcYEM2ydXcEUqUdY",
  "key36": "59vY9A3GXJZeWTrbwxTU5ABX1SaqqFt7EdTggvMk1svdYLK2R529iYZNy6vr48CgCY3JjYYyRxefm9nYJXL88P4V",
  "key37": "4Xp8kDtKaqR4CnsWxyExo1v5MZZsgrsTfu996nwRkEBnZxPakPDRMDB9P96aC6gmrD5v7qcKnh2mwmCNDb6BSSzV",
  "key38": "3hkn1HkwrgbdyzMgaaKkex1Wtmi9kViLFFaAd3qD7RsXRaox4rKfJ831x14u81cuqjJ4tuhP6qXBgNJS9Qeefi8j",
  "key39": "KaTUgij3gH55kL684bvry4gKMQkW28tGs59QQdmsFQvDEwcbPJA2BNazy1Ex4ha6hbhrbSZMVMSa63ZLGBCvNAP",
  "key40": "3VBsYekVw3uRRpVWgENs5V4jovgLxvWFCnCJQwt6GBuPa9JyZBZ7Y1ncrRCoazHoUrvTzzV4X6SziHfqahgJXYHt",
  "key41": "4Ex3Shb6uX7VoR2oZm4wsAcoczZ76nQ2eWu7zRA8DCATCtHDUW9cjV5RiTjHZPKFLPVJqcAguLeZkTXfeTdPRJ51",
  "key42": "F8hVgg1UNeCBPpoYQsojTQjD336gvqbRNJY7vwRrNcjRTU2Ua3JcCLWGHuHsSNg1mDjSSYGkw6UNa1na81zMjEi",
  "key43": "31QYLukCX1UDz6QqTih4LwPg7rRFeTB3hJrgAre2SKBDgyyNsN9pjuiJUf2SSMxy9NkSq7tXEUMFVdS6LPBrgTDd",
  "key44": "2ajYx2HpYv4AZPqdtXc18LK1nkC9V59j3TtMicdehjZT2EgZLcVANpRqk1X4FG8Ab579197wzvAZsoNjDn4sJXyi",
  "key45": "4frcZ6BG8EmsVWHP394HT1nwGWFYQrMN3YB2DqC1dzEqo5bbEwDTMVAFSUji8GbwLrV37fFvkXweR9SynVMQk4EZ",
  "key46": "44MyAbbakUT7PJPLWYKzp25JZs8hTwP9Z7CJvyqeAskj2ZfX3jtpSddSARJFwh6FSD2Thz2HLBUEGjhV88P5XdC5",
  "key47": "3VcAg9oqdYZ5RLqpJv2Hi9RWWkt5fi5TUVS44n2XxWPkSo9MH9sZMgFcbTZh44SkyBy3FAikExBCcmExGssw4XAU",
  "key48": "2CnB17qyJzJbexMeVEqauYUTUSZgN61AAPicJsMZcqV3kkoVekDPtbUVwQnSWiffgDyD2YGN1vkZcE6rRRaSTSsd"
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
