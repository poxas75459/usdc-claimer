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
    "5K9wuQ7p1AcG9iqwgkNqdThdhmYBWqR5QpuyoVNT3LFHGjHEUhKVDvJZmsiMjZSmr2gTXs6HUmLu1rdmw5bpDNTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rP6FGMwekMvoBszRqAGpFETVjYY8pLnHzP6LSNnjgrYUmezKPSQ85T3fUZLf2fFwqLMsxxpgmqYfFgbNAatVTNT",
  "key1": "5GsG342XVtTFeTgN72m8JEZeGtiBaov8EeyWdXtA36WkoMcCcHsqhj4gMfrZXjLtWGzDRDZgVCeUeabFV3U7C2G4",
  "key2": "2yFvnv79dQsDERQ7PnkeNMzaToZfgDRubNemHLmYEsEcX5hNjrz5DhL7fhvwCMTaDsfQy9GdxLz258pYRrpL27vp",
  "key3": "PfpKzfAR6oqTfP89PLg9e4WgsnBDuBDjTFxCWNLvq8yjFPx2MjCYKETxmdgKpbhqrPMCsMKHbn3w5CiCx4hmXU3",
  "key4": "2E7kacr8CAgpBWLdGdKwMw4piqYNRNGqmCfXpWAGygmkH8ynLhfTA8BvksbwXscL1RzKfzoBnjBgcoAF2ifyJAUM",
  "key5": "hF6jkzPqvWUgvsRQHYBJFkje84maXWWdKG1CgzkUvnUEMJn8hxhgKQvg9entZiTkeE6HDBRuV9L3WGbqkZ1ABLA",
  "key6": "rFxgsEQFtWsg1MSQeYGd2cXZHem5YuSmtB7kcws4mMTYAcZ3LXQi2Fi4V3n4fX89AoafXiqdmtpj11KMLgpARdE",
  "key7": "3bpQ1sVaNcPKgaefabPiqrKhyut3w3H1iMwLxTRPJqX22habYZNeww2JPPK28ztNQiKP6sCoarBmRRzeSh5wtyJW",
  "key8": "R7j3JfqZTbVSZP7xSix82hJHYHduPifbv9MWTToKUGT6CY7tGJpz8nr56iQm5S4fE43dqdbhDVkZyJthi3ZgDkF",
  "key9": "4PExg1xgq38o4q6zSfxTVxCa9hB2xHLBr9QV3h1CUq9Vwx7a9NByXWCZunm4e9MPoCocVYGf82eRur5eAqFNudzw",
  "key10": "rBRJHD2TpUYrNvwqPQ8ySZKsBeSkcqrpgSwTgXnCLiFYuq16oCS4HpyNEgGkE83RcLbHYgSP6vz4EFdFMGkuJSM",
  "key11": "Csua6SjB4ireGcK9Mw4CU2h8eUppsRMkbyyhXJh3HynBE5qtaNVXZ6iVieXZyQuZj4S8CuPERGTj6VZBVhKJN5L",
  "key12": "2Z4hywmF13rL3b1fg55aEFEopnssPZXLoxscX3wg5TXCtaAMuKveR5T5ZMhJFn4rSpNtCpTBWLrhcZd6YvbMvb62",
  "key13": "8btnFXzvgyVeHM3rBdYCwE7BSYMBpNgzo3nj46SD62mKhQq8wMea7fShqLZuQfzaVETuTEPi2Znhwgibhrc1VHD",
  "key14": "4jZjxq3GhQ7gPUEoAW7mdkpTrBqoLjFU65hHTNBcXxMQQCzxY65tQPw5Zxrkb9rbLjptykQgjWLqxbhFQGMiJcur",
  "key15": "3i8zGgQ4F3iAhBLLRCB2p45JzCaHCee82WHGft2sriPpJNqG55EDDxx2Y4y6tPM2oVLa3Sqc6hQdYFzor4nqHt69",
  "key16": "5RKSgorNiowxRqNT8YfH341QaLtgW2kCropgswFdABJDBmz6cz77JDG2APszrGkZFuCCv78wXQYRPKypcDQUec75",
  "key17": "3VPpAAkHXT3dPgjMSZq7LvY3SegyzDKU7wQby8FkqCtB2T52R2aZfZ6XWUfLEFfRCZWEmfPsntxLr492F3Wwr6PV",
  "key18": "5Q9c6fASvKozcLfRkB8tXXEaxybZDBbiqJCm1Le6urpkVivTGLrzD8AV7DPmVSUprZxZ8YYfxXdeHg3rvjDbGm8Z",
  "key19": "2oCnkF2WUThhWQQQyLuoCAxyYgoXJ7utoQKHNedWCix9keZ5obCR7jcphP9iqKkiU4Zt4k4cuw4c1K3tPNCfKcdY",
  "key20": "5t8m7dxUU4qFN6kqTSsynZBX3HHa1dAYw8Ra3Q8gxm13H1ePhjNvmmrZTntb44UdNiXZ5nNvvkCTHMHepKnKnXvX",
  "key21": "14pD2xFxcVgbF4ctRGqoGH2MSZSrXLHMpULWdCZpzFcRf3ByfzeWRd2XWMNfJKqdcrXWdF8LE4wajSPpCDTGHT2",
  "key22": "aMxLts5TZvHSzNh4iA71KB87Ty2SrRcBq3quSgPBwFSE6qPHkHtWNskKKjNKc7UHCYsQeHZFFF4yQLiJEuJGDY3",
  "key23": "5WbMh92zmBbX5zJdnhrjN9XwiAf6kNYAqga75vgk8upk4bz8r4LZRRLNdEx2HsueFu5iQReY1NWip4Ttgi65opXF",
  "key24": "45ePKUZaVWXwr8aHT9VuJrvLHyfWmBZ6HkMzRnqk5TvYvCjVsWkKiJ79TvzpbW9Yxxfhkt6WBjBYu8hw75Ho7bQJ",
  "key25": "4vNZMWzZ5Mg3UE9Xf352y6SFQss3vCfTAHTojDdgg2Etkr8DQ7S9o7RhQcXCPvnsfbKaDYankDAUDuVqSvYosp7",
  "key26": "5CXwLyuvWCX1PDAtDCuwad3E2s51t5s1DfhrHzu8GVoyHt4jFRZZX7GyBBFWX6j4ddpKPbVToXpNUEDyxRPANae2",
  "key27": "2zVwu7vVWqgER2rG8krb68sUawYoeXn57k6GtZBcxq7s7HvpSuxAzuvSqhzF7VoPxMmMgqfqRv4cfh3aDJgQ68y5",
  "key28": "4GhufeUHPELCckzYiojTfkg1ragCJjaYmQYE4PCK6eKHbcQ5Vib1E4aUpiaewbhXW81xjwjMcKHJs9QMQhHN4gCz",
  "key29": "A3Rn4Ch7GqHsTqxsAsar7qQ5Ex3jenuVLAHueRLR4H4jGTdoS8WXYKF2WNPktPvASyoKBzdQjJ8XYDYiaN3eXon",
  "key30": "28BfmUFNWSKCC2cdN6pTaMiXGy8nPYxtgFKuaSJMk5UkaFH6NrAXME4qT6ggBTh5uzy4Q4c3DoSSNQbznF5bymLw",
  "key31": "66F4DMe8sDu9KFMWd38jJFxFSWi3wRnrhAyJSPJuaNJZSAxds9kdn26AjRLJE2Nzkn1kBe4pVK8xwrMBbcTR25AX",
  "key32": "3R2KSFfCTv8D6Z57TjR4U8BsyKpVm8GVizn1aJ1vzHjSZhXykZpVVzVNxSP18SoovEZ5ytKjDfHNsFPbSU5175xc",
  "key33": "Ym5y3rhaJHftoiaHtqvYHiuspYpdSbjJQnUdQpKypA56ZSKEZT8xCNy2Waq53SwUhW4E6YQrGbQ4CkV1fyUVVw8",
  "key34": "GhTP6saR1MdGC7eHLuJhdKgDjybQvLU2tpbKvBp1AKJYUos9erh3g1Jf45gQzawUHuW5gB9iijd5wpsoiEYpVrZ",
  "key35": "5aEbbQLNs7F9zb7enD4ebTDuLeGEZrYwQJGq5DNKMCAuq3xVKrHevsrUpafKkqDUf6daWabZj4p9o24eqAuoidQf",
  "key36": "3854BE6tkqCMkpERw4JJvsoFtH1LhLt2KAks7P73swNx6xyKUzQ3aqQB7QHLfSf68pJ1q5rnGocM8eXUk57RY1KN",
  "key37": "4yRmcwrqfJB8nxhFDjTmBay3DRgWuzrNigGaDtSDVNFzW1DwTaY61XaTyw5prL6ycXYaziPpTbauYEKr5YtQSxhM",
  "key38": "3i1gkSR1r2K9idkHhx43qBezq1k5QQUSSA92h2m1bKizC8zsXiPKr1qSQqABZLJDR8G7JN3t1aYciDaoPj9Schhw",
  "key39": "4EgHje9KintTKCyJDww9jWMJuVnsipMnM5xMVYkaE2VNzQSXPYW9XKupkax8DU8k8EFNypFt4HeayjzfpzxDWNpU",
  "key40": "45TVrS2yh9jm5sNAhQx7R5eMZXLdpdyjZkUkNW6VaMY9TTh9jC48NjjZr82UB6uLCtndWWBVKUWD7BF6LfyFZXhi",
  "key41": "4JLcSQBcRAF9tcqtfCvBD5Ttvwvg7gqNzfcN2Wit7h1LurLBm9rBiZpdezp9gUUEcJw1BzDTVGuVv9dCjUvZZK1Q",
  "key42": "L73k5KDC7trm6WcVqckeJwbcZcWa6Tap2f763Ky2nSkiYJmkWgzK1HyQRKy9g5U1RY4G2MxRdijFVZiRM58k7it",
  "key43": "2ZRtrTL6BnMU3mX7EY6wTEnoaytgLErrKHyQCFJreUkJfi8A54R1nQYBRsQp26qBfj2yGRokiwPkGQu7rQNW9ww",
  "key44": "679ViDtASUc9jfJsNV5vSYtRrDTTfkQa2iptk61MakWkJQegidJvqqj1bcJdH5RLsaZHHgMwSTNGBSYgHXxy1S4V",
  "key45": "5FhTB9YqtaCmxeoBjufMmsekDCcArZZY61qKCBs6xKt32GSGoA8q9UJZo6sJCTsHCgYDQEZHYGRwxSMXHdbYYq4S",
  "key46": "2FbVst2eLAK6qcjecrmw3rHtkFNKQtPvV2z7K2EepjszsNusn1cg6Pik1kBac7axwcBQK2FbcTh6HxPb4uhwbVNq",
  "key47": "Li77DTrHxFpzP6mucHbd5qw4PCwoEb9u2oksxmx2rLYMcAV25CUG6CNdw1XjfnVzXXiiK4wJmGcEomZyig3Fs6F",
  "key48": "23ne5AvugiwVYmLLgX47WxmDyMUCUiA2cSGwyYeM6aM9VXyUk9dsZn1VG2DdCBh5YjtftfjLKSxBUa3mt1kKDzGP"
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
