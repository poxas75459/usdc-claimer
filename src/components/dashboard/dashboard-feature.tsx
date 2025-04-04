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
    "3z8ztxM5uZEpCCWzfoqAkEaaNKcojK2jNiVrbUdh5YVwCojBnF5sskjkXftiGsnNY1u71E8hfvBYT4Q1rBaDijyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sGFJfTKFQWfxjavZa2Mh7dyhDuRkN2cqVsiWDiBK9RcyFYLQTcCzNb9fWDDqL8PZZQrWhu6bnY7R91uim8vkad",
  "key1": "5sgxSnRodH39GN1LWFDeQEZLcmbqXHqAPhPD6eUrbEJ58PriWsUz95BzEMiVg5jK8mDkSyW3PrUpG8ev6kmcPtHu",
  "key2": "259HJviERiCy62G5oEBMXJBGt693tdmQ2wcd8i8vJra2PkmXZkudJP6VRuSLPPicqnBPj2oWoP69MguH2YAVc2J2",
  "key3": "4o5c6R9AYeJWwTtGfKARtaTUxxjZaYVmgmoDnP1Xy8ryfHKs6eHnaWDhbE1TEYLEnjH67josoULNngUJMwfbT2Y3",
  "key4": "Nj3vdBcMB1sD1hzMhkU9GqC9rj3CyYLW7wRF5hMPWp2fbsJv4qVq5DyV6JCYP1XFWZENmQNoNDodw9BBPyDL82p",
  "key5": "LmiAq6Yv4mzNBGVanPpzrCxpW6wZN7NaMB9BaCUjq1ufssvAT8xx4rFtQpGbCJ9MWPztRReHC9qoZXfmNHEoZZt",
  "key6": "5acd42rrLCVujgC2cViXNXNJ48bo73FMsx8yEabods8Y66GaWDpmRfsJpmT2k9LBrXi6Pen8NWuHjBjVWSCQX2oc",
  "key7": "LmN8EubQ1SG5ewW2N7fAYLWVz5FZFfEfRwzw1gFjHv428cJ9UN9HtnqvPzEsnrxTYxq32PNAVtwKkgAvsGyv8YM",
  "key8": "3SVywPoWZdM4wBGS526Gyi5QCT5bkiqJDngVuQAqDV68vVztEevduavMFfvXjoK5ZBRzrNCLo2S3KgUzfEBd8JgU",
  "key9": "5quSHqpCBqQNZ2HnMvJAozdnmiunzyExFFqZodVGnknfgkCSu5dGNcxNw9ZgNi37RZGRsRVqTJqLFkFqtJYzvyKt",
  "key10": "wSyuHmCYC64Pp3N87H4EmCX2R82DBkxRV6ckgoUYKAMVtruTRP5yvHxvqTwdovDH5PKxZZd8n5fCwV9ooBHKpkp",
  "key11": "4CnBB5RBsM1cA3tSQxs35Ch3jPyiuaTztNN9PmCkg4BTbLUU5BzztjsM5nSkCvPoRHwUry8vGLmH9JnLXJtsYoJ8",
  "key12": "4Db3vjqBPM5sNU2VqFsRo4F2sM4KMZrPbm8K9uAEXTHUUba69Dz7Nmfcz5pz4P1FCpaqgD2qJS3H4neH6ePwEUcg",
  "key13": "JJsHD3ngVGBJS9uuoC1kUeJr3MBARGCsjhTZuVToBmwZizhdpYPyedFavGeFjck3KYgJFSwXLrZeVvEPeAq5bau",
  "key14": "5HfGjAEPCm757PFpYEq7U5kurJjhFYid91Libbpmkoo8xPy8XChbJDimEtfSVywUtfZ8AYyAwdSGhPPPpoh6CRxc",
  "key15": "5vWYw6Cs5fBQ3N2b6ehvZ2A2QAutdjXc5cfjdwp7BM3HJ4aiAnk4Aqtsr5AbiQMEfvANAph7LG1rmiUunQ7Xohdf",
  "key16": "5NreuxJXFLGCMfz83g9DfCw2Vqp4aakHEdtTgYHPyYXBzCcAarVcHdJzJ7YiJWweM2bjfWvkL19AFtBv7ewy34p",
  "key17": "USkjT56KWEqXLJpi6Virtfc1YkC9yKneBY6sMAvupk9gKhwsA4pTkRpv3Mjp3fVj5fgNhhzmkRthFTw9CWipXyz",
  "key18": "MAryZPfmGyUdQnnAVt9LysCtqRHv6BDaSTFTh29f3zrZpHimarahqyvcCuu2LATi5Zo7FZe6zx4Nczp6sHueZVb",
  "key19": "m4V5v3Dp3wkWHpDup2Vnh7SUSNTiDpHJv7y5MXiNZzDZNBS8JfURCQyeSzMQZmfX3Zsmwmhbcxg5noCc8Go1eEQ",
  "key20": "5s2CU4RJsyG2AEBNRUduvqmHUhZSghd9g1LNv43mFMHHwVdw1s9pVx8urjNnszsXJXT5BS5nLdr2CaH7P8EjUWhq",
  "key21": "3CDKDLbrRn1x1LviqvfX1wue2Pj5Gr1WZrYJxxcuQ6jM34mohiXYm7bD2Qx4rxFyAUZEwMqYXLhAQHUYVsz1A1uR",
  "key22": "5YTdkJp3dnwd1hFZtJR94nbiLj1pj2vU3N5DzCpfYh5jBAss1tArX4BvAoo2ZWCxt6KqBkVSG4BBD3e1fj7Rf3BE",
  "key23": "5nHLkLfd3YZGZfAqecBPcesXvGXS4Xx9doPTywrVqjTDT2Wg9Rfimp8vsVrQowoFbkHSKnGfYhr9UXGMe2fVnPtC",
  "key24": "4aZaPwdz8qPv2qcr63DCF84hDedjBB4pV4wrNXqahrkJdgjxGLH3XVr9Q96bKX7cvg3yVzFGXStDeTQvEPCdnnyJ",
  "key25": "SK2xUo7TrfvHxWPcspvkH8AfiNP8BKia1o4MbtEDpT6EgfYg51exVQjrw293ovVHYUTmucBUsCi4HJNr4QEzXCk",
  "key26": "3HJNsZTf2VFSQpnZ16HtrCzX8rUnNajN14FdHTLgJhoCCfiVD6PK8ghXY3Ww5EDcSx8werZeZc1J7SKKpJJdtfRx",
  "key27": "2tdt6P7DgkEQt1w97xohGwGnS4Pz1DvavM6nEPQh4j5TBSrteAKRoBfLHz3E6EFVQLSF4aHTscWbj34VvGP8fLrd",
  "key28": "5d7UGNBFgLG6sy6WcrG2GjuuRwKC8rZb4V7fDn893R1zpMAp3DsVvPvcWYjp84dBWtu5iXXfXVE64rymzt7qAYFa",
  "key29": "4d4CycY564x2dotk6s7bA2netooeAiSDEBrpVg6piHSXRSrezdxJK5MyEdBMeXvuCMpoLyRv3patqKYNJ6jevhGf",
  "key30": "52udYLBdVAKSRzVVRfeMmCfbhYxiBCvoMcW3Kc5r7qcUGixVNctp5mXVfY8JUAKCBV8XU2VneEY2jvGy6VJEHexa"
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
