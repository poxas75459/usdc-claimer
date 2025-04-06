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
    "5STxmxtdtzFUFs7DNyqFLF9gPeW6Q5JDKAsVRXzx4xDViyj1Rjj34MYENU7FJBCeFq8sVfcTyhomdK4yraBBb9r7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q3QLGB43HU1JByjnUzYx1umJR5JKHjJsPxHP63HfmyPFR45RjoFnkEBdfQaWfgM9PZbD3cZKbZWS2gUToDZsEcv",
  "key1": "LAcEmDiDPVBpsoTVsmpPqgyhMkyHgRvwXFhWdpWuueENmia3ipH9uXnrdjhdX3RUniBibyb3fu5WVnyW1JTqJ7r",
  "key2": "48KyeoVvP8HBx3yi9yxaxfEqtfVVnpiBfGAX2PEKLiFrSTw2JvLhvyXBNxKMowSKE8HXTcKNWBsdNbtKXwqdeh3n",
  "key3": "2cscXPzvKXQ8KSR125B7HThj6VaLZ4B9wnNGdYN8QWL5sQWQrswe63A4aTfJaUoC2T8VKomuiw1UZie3riRE2jL",
  "key4": "48getxnKegkC1mZQmctHwigYBjBKTdZ8mrwGBMCiYQkRaFTo3gYAtXgSwouqPg7zPcCggqWzRhsDZjyMpCryvVce",
  "key5": "MU3rXuw5T77sKjwwT2vZWRE6Vy9HVFLX39gd3LHoUbuiZJURJvcY33CZQSMnpwdiWoVGMQzxxwZYKNsJK5cZb6F",
  "key6": "5XTTNor2fsmpPucpyQSTbfyVsdcH4XHsYuYjhrQc9cGX5qrzfzxABBVZngNiAqv4ERN7T3HVU3oT19Ypho8Nu9T2",
  "key7": "4sgnhscrjKkYSFubLSiioTe93NZqYBWN3BXCdDhKNaEHbRVHvbQWp6fjg7StvHrCn3ghFrN8AtU15piCyFU1FdJd",
  "key8": "4VBqhrLPmnszwb7DUgH2fiwszNDkHYxGUZ9dirMoy7LXuqRKkWHUuieJ3HWmDGAmcZAvyw1oQ2dVGQJHs3e5SPVJ",
  "key9": "4yXJS9nWySHEFUEB5W7P6w4uPagyUYHBDWqt8ViR7mQPxNWgDvVYRRbDE7KXTmJGdqu5WY6W5zQTsDZ5mU6wdg8r",
  "key10": "5t8qxC7ymrGG9VnxAADh99RrUuoBmiGG65mYHnCwSWCB2BTFD9N7R2fFWn8azxhzhqVYX2C2N4qtVRR8LW9jRbx3",
  "key11": "3Fvyupz6NFteQUUYRfV4VgnFutYkHpPQ69DwJv1VuEzYVcE8M1hGMYFYyMHjMq4yacRUuYomr5D1xfLjdroVLkkg",
  "key12": "37zCEyywgwhwxG6agjVVvt4WhHzZEd3gKNZQi3Bmcs7d4ZgowCFcfQTLcP8XByHreeCz6ns9VEXhB1tu4py2Tgvh",
  "key13": "5nGdQDBThuGahTmAA4qnSRofUqWSb4vNFcNQRjSfoDsJkWxdVHiY3jgoDPV1Ym7eVoUUZQFXN6jMxZZKqS9WRiBV",
  "key14": "2RzeABz8ckNLHkEMSZTbYrmn4mxAys5XzbiaZuQmCp2BS82n8m2hqYzdtUQuFhQ4TP4kSRQfTgs2Px2Ypt6yp5se",
  "key15": "129THjEVKNJSvDXb8omFeHT6mYG4ceDnLX8QDPYMGfhEZwct88o7CYufG219wSQvpbyWZLUS112bZLN52GnPCXKf",
  "key16": "WyYRXS8LBt28kPX3AUysDqXAoz1BX22KwEtsw8yUNJS6euwsgnFcEnSMjxcChwFiSBo4ECzZd1w6jwjc6knN667",
  "key17": "4CB9uDWzyhGNpYVwVqSndSEmKSjr4PcAczAfoSqmLxkA5XWbVk28TXez4jp1nW1srRY16MD26NiXn1kLj4WC39Qm",
  "key18": "3ZLv4wcB4YTzpKGaPAui1Hs5yMEiFkBBj266wG5EVgUyEKTLATiwAXsoLioQyDVb4cgTJbgWsP52cVPGRw8qEb79",
  "key19": "3UFinp3Qah4rXW7fMn5zieHKmNMNjQB8rKW6h6TEtKkHNxhAQHTS7EhcKi2GKSJ1ry7MBm6GunZHRp1hr69WSJeo",
  "key20": "4V9F9mxUMQXNPb6cZyZnnUKpBogqeXf82r72AQihGnJ871qJ3je9DR5rLTVymQagKkYKi1W7Hr6LsTJcbnNrE5tM",
  "key21": "5jP8A1KMJ2LkiuYyavjLsJa8x4CuJLJogSEN8vZjzGZLUZfABaowXgd85HHm26gEDzYhfKHizQ668jHqftZBYzj8",
  "key22": "5nqfboSF6xUQG7wRm77bwcaEHeSJuR11p3p7pE2BUewPpkwg1jvnD7ugQJuQPAKBZbk6Y2dzj6m9D4KL6MKD3Dxz",
  "key23": "tfyRC1PUc5ZY98e4y3SGpFcXxdBkoZbPfwKFg8EwM1n1LNzDR82Uea5FtAYvM9nZKrE8rbacjZCRzVZ9EZxrrdT",
  "key24": "5DqfqrLQhTb4YhE3F7FRYZqTXUBUKMww492azYzXKb3MzAG7vsLDGBkdvRUyjHXcjSwkLwVQjqM1DQkuahtNNtHH",
  "key25": "5kXTBKAnNeNLDjD4QpCdcW8Gk9YUrwJJhYBSTsnQK6Fdh5RbfSCy9y5He7NsM76TUHw89gy7rmZAvVdU2yPk4VEE",
  "key26": "48oizZsbVmJePWFcDD8W3Z9SB2SqeYDbETu4M4VxPbn8APhiifMRkfP53oQ2Nwr5JicZKU7Y6zuutN6dbcnaCWzT",
  "key27": "3d2f5aSeZM1ShnEFdFohhqvcU6Vhj4vPDynfQPAuLsuMExREdzAe5a7bQUjF4daZVj9CRi7bPX9UNStF5iZatzgk",
  "key28": "4WcLX1tbYyniwYdGaznktk9U56D2sZ6eADUp8EqV3qePdmwRjkWJyGzLj1ooXNhqx1hUEZHZAcq153jwYhekpZkY",
  "key29": "4oW9YVnLXjbc47URu3APbHEoSRqFERBbXJNPsp91BL914LDSJek1dSoSKBWU2cYc2aG7pwrND9Dm1iUTMMWsaRTv",
  "key30": "4UPkp61cgtyyvGyWrcoB2h5QLpQyv4D5uCezyp92Vj1HxdoKYv1a7SZfJT2Dwd9g3bzn4LkNqQgTjE7NzxMmm7yf",
  "key31": "2tWVC9diaEXqFbb3sKAZww54fYi2bRvq1qksAwDmJN9wPRTAWgCyex9FsUQkab6S2LeXkudUWiBc6FjnE9Su7x2s",
  "key32": "2XbBGhagpTpsSPZgc5qZhweTpzd3ZSwPLJ2nmgTz54TkxCZy75a6YDdGysCSp15LVnXahAXqjkWq8PdPBRcUPWVA",
  "key33": "2nCVj6a1TP4bHDrDax6qpRoUsU3kGLPxckenZsm8YDTCaT6g3UzZ6iwLRDrcAXz8chfpo6mYUoYp6yoaWMj9zUWA",
  "key34": "2q9w2jfdNr5KqK8Gke8abNBEuvXNdwgVdCbzBhGEr4yZUczUpnwYCkGGgiWZsKpKyEmCLJBhupau1gyTAzbHAtpA",
  "key35": "2X5fuuMzvTo8PxJxpJZVWbDNn5M6DaJgS1q6um1Ay8GJeF4yakAoSSRxKyrfV1YSaruzY1Fqr8kPFfrHjAYz9KbZ",
  "key36": "EPeRXfeWTN8NeDobLCCY5xyVPh3M7DctAeNdQNJHUxhjt41y3fAP9erYJxt2k2UPenWjxGYTCK5KLt11gc1v5ss",
  "key37": "2qdunVMwhMdUc1wHwXoCPu2QHLUZyGsFWv57NA9g7rjh2NK6w9N49iA2Dtte3PbveoAXNA46WRRdiusHeYiqdBnt",
  "key38": "2pSDajYYABHWADkWR88G4QScnGYnTXNxYFKHS2N2b8GmpAA5vUmEqcjkb3SBx7EKgUexHTxh8KD58KpjSWP4Bhmf",
  "key39": "5KMPavmcewqXeAjRhxVo6dq7U6Bhwwzegbpj3u7xotHX3DgThrK5gMDhpLC9MYBhZCGeHzs3SJzGmiMnRASFpSxg",
  "key40": "2sjkR3yHCqeUgmCQYc32nAnQ6jWfavp3BgyZED2ncYWc3tfJSpZJ2LqYtHD3to74p6iS9dfHhX93LXGJdHxUAA7q",
  "key41": "3vvzCGJcvK2gLZXayAkgQGjYBco89vjiVe2K536VsuALUFKL3PHsGSCZHDumShN5NUi8wHsGqbUS3ysKywAAY8oS",
  "key42": "4WuBa53xbHvzLgEQHZKNwNNS896otLTdbS5rJqM9VutKLZxef8LkECMh7pH1pTjKiVLpCeTCTF1HnfPSbpWYChBD",
  "key43": "2E1dsibo4TJMKAnKGjTFRspvxSJFdFATx9p9rjCDvzsXBLoEYjDRq65e6PX4Hoxi3ZMKeDcgxwY5jXr1wQQxYb95",
  "key44": "5v1uEzGvHxUdgPhJpXkUiuj6KMdSnGFnxr8Z7qESkpeKotNRm4dbYypcrgFQkTppzrHpExuCidZgnUsswm2YqZGm",
  "key45": "5txPSHwVCCjZBwyNUsCTpm4PpzJQM2wXh8A1iLnZVtqc2hRM3PbvbDmCdhKrckdPVGUaLowKZ8NrGcfU112KvXZ1",
  "key46": "hc3SptaiikQs8TZYCNWDNAGqf9QBoK4cUGsSdYdYHr1LzYJ7w4QMvRy6MuzBjAKMRNHwiAYcm6k3abjMm8UE8L3",
  "key47": "o7GPXeGg59xPj6j8TVQA25gju1Ykrugrn5uRSSwbXKj2ro21W1xPV6NvzZuYSSiWwmuk3zaanzWr22NbQrKhTGP",
  "key48": "SPMHVKoGEpGW2TSEpfs5Qqouaxi59qnDUrGDDE83ixVCuhfBAdTnZGnArBiv63HHJWqvhY8b4jCqKeSvorA1cZE",
  "key49": "4uXKPbg8iKysKJqDXGVpQW3ehPtovU3wuwMRqSjqrHUVkijNhrTtabzrjs41kdKF3Mm4StPXfUtM7asjyJHU6b8T"
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
