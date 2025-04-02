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
    "E6h43wKAjxFMtxGSxgVrJpJ1Q6RwAfzgF2DG4JKWfgeqDYqWhTTS9RGHiLRVpNduZ9t8gBvc2ZNrLFRvQwQG2S1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EuMRxrTEW72hZR3LwyN7LGre3Bk6wyaqcrgFN57n95whpKqfmHEPBnmNmtFLMg3wFwsBozFzspFQR6zASRnkSmS",
  "key1": "3oJ1gDzc3MTJTjwAN58RcCrtpvotwwdH1LzQnCtPi15F3VgHTbUgaYMGirCacymRHhSXPpaXtV3yeszavz68KN5Z",
  "key2": "28PCc3FkCyH7SUnqfPsQbv5GydbcKFghVuojUkmqWAaw1GVDDdexfYG1PpvEZTLi7RLjphLYYrSSqyA5LCRfSBxv",
  "key3": "5si7WhTi9TVA7uBfSz5sFpczYrLddkUWVqXRx75damKqcznu3H3jmqhZg61Uf1gve1mG729hYvRju5dR4dzQoT1H",
  "key4": "4AL8ZSG2aMPV4NMqZRtJMCMfJ1TboxnDF42z2ou6ciSFwn1SA62Dhw7tnUbcSfDDpXQWBkURApMkbMgUAfV3cihN",
  "key5": "2c7BKiwYncJ8nXGanNo7Yj3VeV9MHzv1dm44YtnEPcDNwqKuZTXicSeSZ3SDFUSVAMV7T2pA5PDiEaFfXnTJxSit",
  "key6": "4Yr4PFG78AEFHjKqXrMZgYsMmvSedEMpPpmaPy9woT1UnsTcP1H2S3FqjPFYg7tqRQfGGQwoeUr63K2G5kZQBT92",
  "key7": "2XM5Wv6xNd35SoUnuuUCSDjpTVmyWnoMfTmjmqTvpFTdSwjo2umc6PBPkCnDNriCF8eLU3nNnrPzpiCTKeeA8Dqq",
  "key8": "3Q75kNUEvSBVKkhGraaPgx4PqjbaWbnXNsvcUVvmwfGma3dPHwkjvxzXvucvWrMj18pBVi8tF8TLp56Gv5ZwFUwh",
  "key9": "4mLZ2pJ8RySrqRSRfia4bgiB3G9Ceax7BMfsmYpEMeo5BQwE1Zx6hLwtrNyPfiVwmgkfaqsKGMvKhSS51Nyosg15",
  "key10": "3BufPtU7xtPZjJHTycP5eNJGn8aetu4DUFJWUSAr7FrKAhPTKXLHnTcopjzfFaeYYu71kDsQm4L438P4EQ5y5epX",
  "key11": "4P1qzPyd9w3Jiu6eUq4hSciCpCr6RVzd7dKDTwBCYJzH47re7aGinqHMWRA5oS4unk7dNrCsmw3hJ26KeU2Xjm5q",
  "key12": "in9HAwJUxEeWkMR5YstpZVX6HjxfBPgrQQkd7yKhXCLU52Ff2h9THvj5ojjP3ahRzHg6Eo2EspouTwPN1ZR9uSH",
  "key13": "2aM4iB5Av2Jeux4dV3hQF3Y1yHXHjSyjzd7P7aEWs5WTH8gS3iDYvwcWhKQZceoDWk1VPX9jvmbk6SoPPGkJcD5t",
  "key14": "5rrrgmADmiT91QQ3FpfLh5dkGbpKr7MgvC4CZrPyeVrkvHfQbcJm8Mm1v3LvaQ815qedYEw6jFDGmCzxK7q9kJEN",
  "key15": "2Q7Mg9bFWTZprFqJn1a7jWPa2hed8DCJfsEsLECFNCfNyGLcNwxsdT6QGDGZV7psqL83AFJ7QP7VfTs84QrVJCi9",
  "key16": "3sRaBnanhh9MXEjkHvqzp2YNJdCUx1Key1ptT7srHxrPqU86WWhCpZtLJYszydi13jXQ3eTXpGrfN4suYjV5zuYR",
  "key17": "3vMvavT5984U1xBgfVn5JQouQJAAHBfRAvzHAfZXhKYh8MJS2Ho56GzBQEUinTS9Kfh1idsmPd7tJPvggC55uDU9",
  "key18": "5hnuG9AsX65dbwPHPq6BMPq7YeeNU575hcizUPM4t4sSk4JUfzzSXVUrHpimBv9QWVLH9c9omvbJN2aBPNpMhzUm",
  "key19": "5Eias85fe5BNz8ry1sahyYduQxNMeJxuePA1qULybbxTJp6vhwLFcrLuS2aFDpqxVJqzcPjx8vyyVDp73jwNGPg3",
  "key20": "25rKxsU2zvpqXqXVgRrdFJ87Dnj8ztmVeHZ8Z3jQUopT1JFGBUFn2AEELyTduc5ExkmJt4SfjbZNPKxojNkoTG8S",
  "key21": "iKYm486q93yEtHGVspj9tnU8Ckct9KdhPVddjMeVzdEDBkSveByJSVEw4LKsAACXoYP3ACrpafqSwC1CHWz65EL",
  "key22": "GjATmqZHThJMup156ddTGAoirhvg8Wvbxjw8rb44sspDmq54RopWoK3hTXKuQbPAp9LtFQEA4NvgQhdnYGaJabQ",
  "key23": "65uDG4WnT36zQG2Le2WstFJhitjJD17KmurSXgLH3RDohLidvjdh23nBpcJwbbKnAGLSQcEieKkBYExTjPEKhp2x",
  "key24": "SHV8YgmfQCcRBSj3kLrXC33NjQUiV8ccf8hg9HAqroF1hPPkYPtYV3dDSmfTFi4a7k47cmhTkQgJt7qcnpx7KFH",
  "key25": "3jztUssCRgDDw9faBvZMtxbQGVbYYZcmYrp3sHdqJWUYaXsJH52YPsxUgsPuy2GURFNtZBc6WoVtPvzqPEXYD78n",
  "key26": "2Vm4tGm2zGcKHX6QUzxBpEsDhNA9JiSJ5v6rRs26j18hU1edEKSYYPFCi5QtHigUGh96uEhjKkbweJMHRQ9YJLr5",
  "key27": "4p12gRn9tk3QLdz3CSjvnPCpb1xSet3DkiAq3BFGjxumpkeyZpTAPh7tw2er56rgngXtaZeuXpkp5uC5JW2W5LX2",
  "key28": "2j37KQ7pJWaHP4omRNEAkSGwGHABkFgpJneK9FJopMbyVCyzGNBaPQ5xQM2g7fSVZaaxGdftm35BQjBT31sdCjik",
  "key29": "5cCoFEuRETKqKYvYWH4d2xDVAv5tP58TV6aZLR24vQboP5dTUMDnVDfovrQo5xAq9UCkVP2it2H6J5WkkHK9dLXM",
  "key30": "4D85cMporzEnT8MpYQHGx41Z7rqS9doZgR1BV28eAeRn3BcjfD84fdtFr2QWUkG1udmvd2GPSLsjxJ68BTZyP7e1",
  "key31": "fwYqDurDt2UWdAFiww9huKVJsHodS6sZ55Ed7oLBBmNfTheAmNznWqiMnT5iHH2vuyJPPsSh3CXXXXZS89X6jZR",
  "key32": "3c5aUjBnmPQQqADMhkhdxuRSXcmiY8jSt12Tcf5nJF9TV4aqhEtuax51v47mEDE5sVpsmGXXhmSCeJRZSwhGDwDo",
  "key33": "5ozDq8DSfd9z9S3dUCW6F4c7PSctCVdShmBr8amDBbuSqjy3EKnf8xNdBThm5gJAUpNELL93YGkDkPkjEeABKoH1",
  "key34": "2Sw7xmGfAAny9orrw8dX5jgn17qKsjBmxgDzxNeXt7vjGyrUgCa5cFhZXuwvQPhWCx8RGizAAY6Wbgesyb4eBDhx",
  "key35": "2JZYvjkc4mR4PuQfwsh8FJ4dVXjhPyAzVjPXPtjKuthcWE9EP7XB2U57qkfwZD8jaQZ7MxgzpnmeAndnAJ8t9xQV",
  "key36": "47DbyfnS2JrnZr4QEsrcvNR7pQRRrBa46AxccLZ8h545HFaSWZNKNSF2rxMJimWEQdKTuodz59hGuxRQF3CDyMEE",
  "key37": "3Uteo47efkGfte6Dq1TFDSwT8uhmz7gceKkYYLr47ymfUFgqrZuiwLQXkxKcPgz1cFT7HNpm4tDgQJTaq9A6Cq9x",
  "key38": "4RuzzPDKvPoiVesqN3b58q4VwsDD8SQ3ANwspJduTCuEngybvgH3sXuyhHK3uomzQmjAoeNYvTQvziLXvVpzMPpi",
  "key39": "5ZGFwF2cj184J71DxMn1BJYfS5KHZAH2SXdGuU1jLU7Nepv3mc7CFh5iDtFCy4Jy5WyCDZgTNC3nFqSy6mRGTnY2",
  "key40": "5rPLRs965YQtaNzMvU8vTDXX2KR4Vbzeq6xC5KwnGsRAWR987PNCKrXYhiRisMWG48YHuwfJnss9aPR6H7J4QDS1",
  "key41": "qwZBqg3f59aZvdGcUJkNTRhUYgTJyxbg28KmiaPEhtz8oGKujDHpBjKLr92CznXNDgRqnvFGf7tptHR4qKmT2uA",
  "key42": "5fGJqPeoXN9x2gdwnbAmoeHAEfENs7d5qtjAQ7VTnTRmJqX9iEVN2ZBHGey2VkcvTPV8xh5DUQjfQZ4ZF3fSneQ3",
  "key43": "5imc2C3dszMC7EsrKMEGBNjHa1BXkUY7aUcLrUGyj4y6MeXeM5hWQUQPQFAizEVZ2hgp9aH4Yz5zipB5UTctwgau",
  "key44": "nMrhrz5NPmqjotZQYCTJGzX3DXVzUVPzjdAra3FGpzV7vTup4CXHhck5THbEiF58hdNEbJjgmwVvHx4gGknP1Ui",
  "key45": "25EJdbYiJL5sPW4owL32x44KA2ANQaBs1tZZu9BHX9oqDwYMAcEn4MxXT16YLSSRNsmsv4RZMULuRNBubLcYKAvK"
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
