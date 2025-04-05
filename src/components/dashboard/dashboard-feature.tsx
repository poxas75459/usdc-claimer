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
    "4N3Kxkd23ZFh5UDWediZZjE88hweMrYtQG3phHScEc48CuarCr1Sz6MRic8ymcUdQjQdmH8wXGAPitg7dhySnr7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WWsGLNcRUqUAC7D9LtiugRVXCPQx5ZTNn3mxT9xbYUg2bocQ2hDbacEPmJwtQYNFwsYa4Qu4dszpz6KvGHwRwX4",
  "key1": "4KtmsaqVDTNS7HqSoBDpWwqSrj1Foy9NwvECnvSy4YpaEYNrA3jYQDGsG8aQUqVCTx84ZaTcrd9d9eryXwm22Ef3",
  "key2": "43ppGSQbLvpDpJXuWT3TomSt6zfpBorSJy81A5NXb3ZakzDQLzY9QToQxa8ZPBi3Zs1KcK5z4gnyYLB5ZGK9acUq",
  "key3": "4KAKpUMTA5f5TjH8d3L1a64WaC64BW3MPDo8CPiTuBSTc6gKndL6c11fcS5TSARDk1BLuQ16fHLtAT62i7ysTPvi",
  "key4": "36KZe171Ggb4tNgPK8ZAvmuFoJZMcjqvS4KG3CjzG79jez8E2JyVqPxjeyFNQhTVqEDcHow5KUjFYkJMUJNLHYV2",
  "key5": "5Vn5LJAcbLz76R5V9EyDXbii7Eh1PToD4N3usCjQhKmvvWh6xyRnJgB4TCvA4zHCH67aF7ChLTRNYt6dKs321fYo",
  "key6": "4hpQhdZndE8WrvS5vVDBKCbmsKZr8cdf8dkfFTvEW6ogkhKRVuv9cYKoHfsT9SvuhpjbtVSqYcbr2r9RR9yCcZfp",
  "key7": "3d72yvAhJHMVPnMGkAFhT8PZi3CoTmhS2N3X1S2HxpGv6Gs1EAx3nXq3HzeD3JkcCahSoJusEgYGDZY4w2TgnppJ",
  "key8": "5d4kc9Q9qAcaiiCqKjgtJfBpvX5XFLW4JmQzdiGFpBWx4DqQ8ogVCx92vAib1hLFzEVzNfCNpqGw42VXu319XPSG",
  "key9": "2v4qhSKfLGPF16FFrUuKNN6pvhgsKW9ekX2K8xdWEwMeFVT8hd26FB6nNycpbHa2xLEUmCDfSeuSTPxbZQvXmMeB",
  "key10": "TC45LrsehAvsyYYErUCsY4EsXRNGpV9FivnnHdjmYwcCqAMTWr3CJju7EwUxEVquDLZ78LQbQfvmLxLqDCxrQTH",
  "key11": "45Z9iVn4HTJbT5zKEMU7X192ULJsrhdgYUtLoWpWVQvp6b8QV2Pj26NYB36NTjFZz8nTyZ39zgAFwedRxCcbd7Sf",
  "key12": "4Ad14i3tjTGAGAnNM2zL41fJoN6H6BHXWTyFTzcG4YHBJBKvzk5VoR9HDDqETPCkD2W3MHwg7nfWN4FtBvFdru3U",
  "key13": "5GGMv5HVaxdwVrVsKm2pQgamVsj73yfCZZu59pyc4PTZsxAopdWgmE1RK1397WJR4iT1P57BndWQ95Q7RbGaSNTn",
  "key14": "2JT9ezHmggbn7JoPWsZAkCTmw65mpcCQW6rGf7dM2EE4TyxuH7ti8F1XcFguyWak4xBECnGGFK9BLvb1YhpFoTNS",
  "key15": "3XpqYhYCKEuMSGpZpbYFrADCbAxuXBUsbDHALg4QzLBYgfDmhQX4DjoS8i4uRFkNdPjcfZ6D2wVp84gtmg3HHTqN",
  "key16": "42hsPHTmT6gWLsUTkBpiVNdHh4FjVCqmFH4eHtMJfLHWq21ymGFgVdgBLmHjctAHePoYPUqyBEhEpPZKcTy2z1Yu",
  "key17": "2eBHLmysuEr6w6ZJBfCNNx2uvvU2JHjudcbfRmnJZUTR4AkB5boepF6cojt2xgaZfaZ59gR37hmjCAfwA3vqPmQ3",
  "key18": "gFg5hCsx5doPkwP95MiDGf2qB8ZQiqr6VCyaXbfcxbQNWxraU4qVEK8MFEuv5MozV3cVhfHXvjVdhMTxyH5ySRV",
  "key19": "4JvibdVWFSiw5m7V84AiBwdTj7gPEMKVfuimoeMv5T1s2Y2XGWZSoiY8kSXMBiTDtSpqb7wfd12QxYR11XiH54kc",
  "key20": "2QogJtwp1nvA7aL2LdShse1ZvhNQBcsDB6coEn8AAyx2K68vQnv2HVq2Uy4yn5NUD4m6YQNzVa3DHW2QXxsdPWfD",
  "key21": "26rZX2P31G9CRC2vRAxSHSxazBsg7n5yvrqWjytPdcjvnXqLgDjpHg4CmwMS3akDG6L3yLSHYScxWX8EHwWwBtDa",
  "key22": "5RcFUXFpag1ts9ehN31MoxUxhQ4oQVFEdTbPb7W8B9H6g1yx98mrxFi6eW7fiQYNn3zKFmG4XsUpzgQyWT83QauK",
  "key23": "41krSFBMiZJ2mGuc7JMjJ71qDNbSnrCFH3ghZtmZLHA1DxiFKxh22ERmuFKHndXbqVjxcZBpKXt4QhuvoogzRyqo",
  "key24": "4R66iUxW3SqfCAJ33t5QgJw7p6fgjjpPunXBVgtcwNJJ7KupNweMeNEyCyrBwi7kmzZ77JJFerS5GQ3QLKtCpqbd",
  "key25": "59evKR98rqwMtBVsExWznqKreZseMiBA5CAWpZnzB2b7BWiVZBq8CCQtkWmChmuT7pUbMVhDTHwYXWgKTjLoMeNw",
  "key26": "3E4MeQX2dYA6Nd3fYiK8FKjJWJFq1WA2hcy2AQq7n44AK5vJvVhLp36Mucxk8TfyyC2NFcoqQd8zRBizBxfX3oLK",
  "key27": "5esRZjbM7RRk6esUbjjqVy86A8LJ7TM5jUtYQGEPS6ThKuFSb7FtMotTn3b82DKPHmtefn7uhz5spSmjZTLnkm5v",
  "key28": "3cuztSVF2Q1rQt4As3ZaMWeTZo6QKLxzRwgSA9ygvVHogTFhNtzqzKzQqiKscWjyGGirKhyXp6KS9CyaWYBarn1k",
  "key29": "owBjojGsJbLGSoR1k2rKf5pWQaY84sgqPKDK1WaTch8n9yfZkEXxz59FYiPoyDcQa3ZrZnkzA5h7LquXeKxR6Vb",
  "key30": "2DKutammp1CgnpgbE6Nua4JHadnsDv9EuXHSNdpmskJqTDPWNSyn4CsetKDdvxV3jkvggHgGLYJrippYUTgjpMbp",
  "key31": "3aG8DoHsVghiCiAicXrhsboes5oKtvwmYyPvpGNJ7bRaecj2tZfXjCNKQTt2MCWhr2adxNzZProyiBbLraip4S5x",
  "key32": "2gY4j59H9vbRPAniHheeJ57NEGdQdVeHcJGkute5geEAqErxtJbyYB6qDCbqbBen4ModE1kwTs2TqJmaX3Hsdwn8",
  "key33": "5MTgKJPYAWRjkQKQ3BNMuTwQW6R9QKRvfpdTP3nXr5etE8DiNpYgxX5a88pSVLvNaZid2NtN7ZAqxFqbz1Wun5yN",
  "key34": "uQMNYvUK4CayC6HPFfHcPQFy6PUzZS7pr1wmUDgdKZphPh9ieX612c5Bi3kovNHT1JhHGXv4ouYxgiqNy34E8vU",
  "key35": "4dB3bvRByJ1cBaLNWTP5fcTiGy3dBVKUj8nbrU5Z7CpM9Xo5BH1Yyv8Fb7F4oBJuYoJKjwVrcSjX8n7cFcZnNxah",
  "key36": "RDE3ZNpFYVSntcuGws5oWy5wsmLQp9pdjTsqn5ucWvfPZYDi61jKvwjriCXfEcgy6mjfRefwzxZ7E2uqwJa3EN4",
  "key37": "3LbWWjwFRzmV6Ao3n2As6WfH32QWkwKKa7vtZ3LA3ev6SyPMma3NsttBUFHndQCYumm6eicHjNCRhMx7NiCCQx64",
  "key38": "38rrRZFP9jS4H1S6pmK9MVEyndQeTq4pjD9scBa75ESQi2x3y5jFXa9BQzLE7vHNEtrJb4tB9AW8b8NMfgqRkEnE",
  "key39": "3jhyjiaiFZEkrV6UK72H3kMtrBV5YaXhiFJ9NEBMiRDTeDhWZv7uUJNST8seFiT4U6F15gqQ2yzUB2zMbmdsY7vv"
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
