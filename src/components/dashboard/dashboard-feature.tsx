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
    "5B7e4vvXEFXCnRohAQQxL3THpbGKJPiKujcGpDiy94M5WZhYaijcfcRdMRFTwqrVGLzqarbMtkgW7T6vdsVsSSkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UpMS2HXd2goME3HrmpFZcnFKSVhbruQ3Egqe9xLqrDP2RKr9ATtzrhmpk66fCNopUvKYEh8unfocHhYjrD3qvw6",
  "key1": "31dBp8pgDqhci8C5cXCt3cdwLFDfYLgkWLRrEFUNQTtqq134r7ZaPQspkYE2eHvv7n5ap1CxUVdqPRxzsSsahnHX",
  "key2": "4kRSJf9HZ91poWLZrMqmxnzGcU8SGtaLmhLVk7SGC7B2AdFhgBjjNV799kxuZvpAqeZNjUcSv6hwSd4MywjwvWWX",
  "key3": "2vKKrmFTmJKRJWToZTHjVhy8LyDn3JeCzEF5coGnYWaNrktXtvC7DSTv1D5kRowGEi1Mkg7bnrsayzsM1mjdqJJY",
  "key4": "22f9weULDwp4ww9eSwctFSYkTnjTUi81HB8KKT4r6svefgNSDfwiZ6JPXT5w24WuEq968vsfP1hcQDDskUPWSzaN",
  "key5": "57TckU41k6ZQTCgAkD8zuH5q4GkH2XzxkRoUganwqoErJXueu53Uejk3fFTCXm9ddapmRyYqfukiL3scofTjuoGy",
  "key6": "5ujafU8NXKDP3LCeGVAJMkhvQQ1WCdDLrvPcM7YFQnEXkAnKk97JHo5gZ26Jhfr7awxnQCEt93cAWc4nrUdyjEhQ",
  "key7": "24xvfdi2gv3Wamhq3FU39XcP8pj1EEGeVTaSMYrzREahLSDHv3JkqczbtEgmjVWTBXFjQX4HUydRrqJc57QX1v2M",
  "key8": "2djVhrBmcYPY8ejHpBnjfeVG2NgAeXgf8HA1dGNhrpg2pDBtpk41nFjEFXF3Mdjf45VaGsAL5cXG4gyjj3YkWhpx",
  "key9": "5bkRf4vSNMJ24Dd6UkKPbp24coPLMNvV6RLJKeLxo6VLfY2EJXQmdYibzxDFD8jESP9dYWivRUjwPHh6hoTtw16y",
  "key10": "12Px2GHdDkSc6Wf8ByUtUU4NAtgnWdYtWDMEt2Y1sZkXSpSzmDxKSuVcTafC8UrqqSR7E1LPyFkQyMRTpgvZ22N",
  "key11": "22bmtK1EVvGosvCxgqKz6Qj4WvSk2RdJefKgSxyss84wdgMxtJV5uAXbJMqKbeKRYjZ5WDsVJkuSYyctrrto2Bj7",
  "key12": "idj6Nx9sBAqPFGFYYc32jnJDutAqK6oPkNNbbxTKyKe3HMCi13eAbx2T5CnoAQ6s92nTinmFY3sNuZAqiak7CNV",
  "key13": "2CEiPyPLZ5EckHvKmwXDXVsm6bbpaFsFvUxZyoSYJ87RfdQau6JraVjsoYGY5yLjAXgn2E8T5uxXud82bLCjpKyK",
  "key14": "4y2Xg3Df1GESvvCDKN8S1SiAi9AvGUwoSbb4pfYWGuRB1iFZiTAuPTjHi8FicfmA2U5WoKxNyEieCaXotvCcmwYv",
  "key15": "2FdeXpwi7k6DqGqMw4is4zNWh3qhrzfU8i4nQUxcWT6eMTypyHQ1u16NHvsLcagvoKyqRQWEu7FHpry5CKwdTMvf",
  "key16": "49dFgPejzq8conFzPDrGvxAzAvmKoxzaCVKUtZVPggAQwwCVRFZz4uEqgwkQcgiTssiDadbhDPBXUxXgGDBL73Qb",
  "key17": "CRpPG6ydNsPnjZTrKzoAGFVoBQGJ12zu78t4PGc7Z5tcwFyTs73bZF1C1B1xKT2zWGceAYVxtPYmvv8hyZYJ5MR",
  "key18": "dEr1h6Ha4PKe4zKaJRYZujtuCuSBQw4wVxiaPQ5La2tJjoRimGAUYEmAJL5z5GKL2gT9cLBKf31Zso5fyEFScpp",
  "key19": "uqn8CjUq6rBUt5yw5Vj7ADXpKixknVKWct8qk9SsH7LSLbr5D1wPmVuFSFvNACk4vF5uj5gRVW2o4b1ErPVHq6a",
  "key20": "5wKBNaAULyCSw8EcsJpiiUstDiPQdK7V3hnyUiPASkXtstBiEcZN3fQmn446jbaAz1dFaKtJBuwuFmgZ2Nj8wbPu",
  "key21": "2CRTojCZSJ4yafAwNp7tBikTdCiQreWdoguJqkX4ZNTvJpUq8GrvkE1KiCDAKqNHZ2n85DbWVFxpVLBzCP4CnfE6",
  "key22": "3gtLgZABiQMJqnR9QzdG2wZjVF77HqUvkuXpgdGd8pvmCQsP8S1DUYJiU8D1VxY7G82eePNAtHf1uQfjQQWJ1G2y",
  "key23": "3U29usovr2XjdD1K3YxeZTcHgoVnf9yY92ZoHAMA4ZjDREAnbGrntQbk4VD8zyrCgVyXK2HUHJSLBichbERUvyeb",
  "key24": "55myW1zLnwsQk2ZPR4wQSLgXyDagDfgNx5487cdgjiz9pSa5Com9Wjwh9ApnrTBG4EB2hymqADeKqfMAWa6acNTt",
  "key25": "5cFnaF1hPWPa8L64LE18iGF7UQ1UsAHr94xkXu5VFZjR4db5FF2ZoeksRr2rdJwRv9sMByUfjTpD6ZDtiuXjS7PS",
  "key26": "29hxVJtu3Sc34G1dqSXQrGZFZp3ieJYtLfjmPnSwjcd7wLYmxHGvCerXzTrtHcJtAsWocMhmgKWiTWqZBhMYt3oD",
  "key27": "4tSR9TJ1mUdABY9X3UAjmUsvpPc2GcKPnam4DjHnj5RdRpq6iLrLo8Jikm9GZRVDk5vghvRDVcdviGM6dPyNjSuY",
  "key28": "2FgfeCGZBd1gghbUJfxA1GPDQtenaFKmXLvpiTgqVeS4LTWWegrZ5UxP296H8HzB5bGdATfM5oWekdyGS92nhzzx",
  "key29": "22ErMurj2DmH7rwxM4TpYwLkxp7acr6hYpMc6U3AuRFnDTidjGs3fBbCNjLVZU3E5R96gJ5DhRxfkwUqTkLgtKBS",
  "key30": "hZDDEBe4TNFLjyfe9Zg6B9P9q66MKxo2BzK3gRsePtay1bwWdxxcu8w4NdXJZpEyVJkkTsrqCAAmZxr5b97xUNS",
  "key31": "5YaWdrMjBC7ZTTzG8bbfMU6eXCXxoP12DCcDwVe4bpJNNFiWsdf3iX5GzQcq73STp59KyuMExheYh4aEtSyLi2xK",
  "key32": "4pmy7FybJAq2LpQSYFGSpinsP27h6KkxsyBRWNU3Q9W9ivxeq3fYCphJCHj4gtdjYsp3PSTKeLqJWjJ2YM6J2T54",
  "key33": "EWaYFy6eznZ47XGPZyXvBaKUPVbLoSvco3Rezy6jQkhxeLwJmNS1cnbk2jexQz4N4Wh3W3xZeWCaUEwtNCHjjrY",
  "key34": "42ENMMozviuMkbqX9gLmX7ztVtSZmApgLnF9VfawFciyJsfzXZ5UoFWCgWZF13cJZz14dhmAtmUkaPqV7JEiakdX",
  "key35": "5ijVDzyNPLSzjkuYE7rropHvSmLoRX6Hv6GwFa9QpFXjQw4AGFFC9eaFqYzXyDtDZUXiT8jGjCHpQdSdRj6dGZfi",
  "key36": "5P7Ew685nf2yv7qrAtBh6tVdGKvS1SqxPyWgfF1xRkk5a5TPSnuadwmcbx3PhTXBqezFqur9ztDB6jH1KirtBg1k",
  "key37": "2AoyoSy4M69zZvbHCaqik9pDU7X1agmUPkDeZqqnT1urPi5vo8HXFexF7TxksqVdpNLiiWQq8eRZcnUcG5ibuUMC",
  "key38": "QAn6RWDjG1xwEHJ5NJ7nad2eKQyhGPR9MEFmj4HohC8zML8BSgakrZWRLYzHgn6urYarhg7gUt5LTYzF8oB9RnZ",
  "key39": "2s2RqBdviGcAD5xSnCMLEG9Yn4zKRfxNNNmsePAFKfFEuynwNjJPBHtX2UNCuUhxYxvjNETm4TbcG6bdq3tSUaF2",
  "key40": "38N2JbEqtCBZM2Di8g6wpd8RbtcP4DZhSBW8xnMW7qkTKUa1jBMnuxTLPMzFssrS4bcQKAACHdVnRhh95g4aBjgK",
  "key41": "5MDHBuwkoeKDju5df7zQ8JUSz32DCfg6sRuhh6y5JBLDauRxiAv1KkopAhwTnKvHcmY8cmxzR7e3wdDMUnwugrc",
  "key42": "4P9JxZihmQiQavufjmBL15BVfGrQGYBDCFtEu4z4fiEgnC4Nn6VkeSAGyow9R3HNL115f5ioajj4CyMeuKBFvFsS",
  "key43": "3aS9QqstjpwvHQo9NLddjistjFgMMWGhqBqfHHGq9mq56yHEfaZGLe3AXZi15ZPfjMopARp5HjkuyfQWpeUg72fK",
  "key44": "4tejjf6kyEzGDxWiv6KZnm4dP1ZQCFN2o553MfD7WvgXJXuYdiymXipQabbqDx3nq5sAv7mAduYAntPbc5HFLU16"
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
