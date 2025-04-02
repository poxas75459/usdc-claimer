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
    "383tj9m8EDUbWk2sDj58i4nLB5URrtiSiWK3Bu3WzwGiuo2yie1Fm3aTRpxvY5FAsnDdTDwk4uoYPMFYM1LB4xeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oqsUhW5VkxXiaEWgEioUehzqKdfX6SQyXQGCEnWqVTavz36X1oW4jDS99WCbymRutHR7Ch1URdfh7EAG5sMjMgP",
  "key1": "5zt1J6o7SgRGLfxK6pfj6LcAFzWReP6GqWHMB3dHQTNsWz6o8iSeykhPuf99pvvAxRkPwnTTadpnNYE8Qam6dHR8",
  "key2": "2paF53M1EQjAAVfZnscrnHwf5oKcy9njBouEwTJeoN4cKHq6bRCzPWPi9hv3Qma1fXhnrSWPF4hp9tnYmwxuYTgs",
  "key3": "51nYuuzfh4Mou8cY9pCSWFSUA5HvvL3mvjNFrka9TVXaAQu3N2hYYb3gR91xT2B3XPLSK29Z3bknwTqAWBFp73XH",
  "key4": "38s4dGfcM6ckZtu72BHXnqJ5DnM4K19sPoQFGZSvxCgMqC5cRMLMZM84SSRSMnTukmgLxsvowVRCmgPcWfTRxzBS",
  "key5": "5vTBQ3uqWKjgiGrUz1zVrL4uNxWvvep3AS4EmKyjgjPYskDHWaMFKLejcfsQtk6h1QKUyesbvrYM3UeC1iH6HMAo",
  "key6": "pvEtrmLm1y6JiUgKkXhvaT8EsbvV3QyGtt2TRYd867bwtVMxGEzHSjmD9bK63SFFbhWV3SVLEpEkYZBNT3zysvC",
  "key7": "3t2BptbRdpcUgFWBf59cnPweNaTgUndsBFeVfYadP2w1TVTCJmtmqTW5wnvpzNw1n6Z2Q8J9fb3Qve31pGgr1P7z",
  "key8": "3cXcQD2mtTpJkne5pj3GnEtBf9V2D2CYb49qswL3tAkv3UpeVBAr7h3MhjkLEfPWmJoofoCrnQwAc9epYx4aHG7b",
  "key9": "5QmoXSrSEL7jaShNaxLSrEJmHDRnTdYTV513UaQRz194PT4HPVFqq2wx8bEADN36ECKoup6r3YwuARrRGtUfB9iu",
  "key10": "ZAP9Qu7VzZf5b6Q1sFLhUxoUY2HPC3VqdwpmUbhuPHuwhhB2cAP1akchJLjqcAzUVXhkqBRZki38ZgpP9WnYm6q",
  "key11": "5gMaHLoJTLm7xTbuhnRBcdkRBp8xhksusXwG4yhAFTw1b1MQhizqrT8vjFUixdUpnqKCG3JGoW2wwP4RX3M2HMGA",
  "key12": "k9B9oYHRQsaCMSxS8ph89SQede9R838VLMdSdUZe9qHvRL1f8p4e5rEvQRwHSPJwiPbMQJN4Ge5LbhmUUNdXP8H",
  "key13": "2Qbbugxv4norV1vZgjBQgJS41MYZRbBvaKjZRnRmKjY3omt9L6qT1bwGzLuCZi78S8F3HYTWRE4NofXaaxD9XDCJ",
  "key14": "3NcdgbPLkTh5tv8gUjdcEYxcdLSC7AHqJRmKW1fB3t1Tm2EweZHiEew1A5qqYEJSrakkXQo14VVYTGD5gkrdHTxT",
  "key15": "2DNDCpPKGfEvD625KijcaTM3JRMGys29VkLafGLHB6Bv1WBwknY9Gy257CfmfM3R98GbgPXFDSmcspH7pvTnFSjm",
  "key16": "3KApkSarPpf2nybV1ZvFgRpMfHTGxAnmWCH8mY6NuAjyp9PnCe2Y8u4atHhojVHHxi7Y2w4kzGaRmHZyp1b1p96o",
  "key17": "2DV4gYsnUdcyFddMFTvWNx8Cv4rzPWDmaGocHS87hQwYRRoyA3UTEThATCLyGnw6Guhk36NkvzsmPnMoJESYZwQp",
  "key18": "3NkwrHLR5evi1J3GFtsi6u4ykMu4vejzNCkiu2FqtPKtceGpaRAFu7P6awYX4TJVqSvc2RgbbW7mDxsjfBpckQfD",
  "key19": "3QEHpsFj2bHy1xTSEQdx38ZRg1oWViNJDLbDsqK47jmMBvNYgeDhpEwXxgxa11Rbor21P6gdZjmViPqUifjfcbj5",
  "key20": "5tkAwBvvhFcHQT4WhciEduZ4darPAYxKTf2Zat3w8AA5Mzcbwypy5xBSehWkLVkpFUAKD6EMLSNAhpmXbA6ioQux",
  "key21": "5Qgjfo2Ak53rsfuubayifmFZo51MT1nRpqKqHESTqKgbmvykamLaG6Pmc7PPqSyw1GZBfuna9gzCfuoiFeHwUUYq",
  "key22": "54apbqpK3LyiLZXe5NDfnndQgJ9Evb3Jp6jf2iWFG65XuQ8akdXBkRRm1UhjdYVKDL3XEYZciCWBPrSYN2HrcXd",
  "key23": "41ZEpzLG3wezofqKj9ZjmkeM7VhgtRswFBxpBrCrQxDAdaAnv9bF1byzkCqZEY4shrLvPpUqmPx7fEGFY2tow7JJ",
  "key24": "3sQrChx4fHLKNYnJBsZjpZpXfkxStdFtuyTgvXwDJxMTJAm6wEZyasLFitMaoQa4abhB2JKj8XvDy7cyvcVAfa5D",
  "key25": "TDWmMS41Gz5YUMJf5fVTHQ2JHbWAH45sA57WR3zPNd7g2BaxotqphGAuGTzoxmnU8a9p7nDRwqX2A8gphC1TM8T",
  "key26": "329SC7a1uw11LHUxyWJWmc1h88R83Z6hsqsVfkG7xJK5upGwDzZCbnAJcqa2FvxG3hFCbo1UMfSYvD8KTFZkqn8o",
  "key27": "PpbRfgfqG6tZ6iu65h3mQo7jKGDdgD3CPJUBdKWYnkp5LDJ6W78YEuRjk2tDAuLHWKtQdrTh2pD9oguxC56rEDF",
  "key28": "4BLjhWkVFwYuYnQwjxG5Px2oWz45ijPQQjTV38q9qdsfQo7ajDL2sh6wa6LMPXBGmy4WqkN8v4fdWdN165V4DC1w",
  "key29": "4cZxLahLU5E5gt88hw6n4uXhqEiDi2w8uKykCxZs8TANk6uTwBZTanQsSCpD4R9XesoPNkNVyRAfG1KybcVkcMbK",
  "key30": "4joaFjmiXJ7TgCabTeq528KkDx1o9hLF4mX38wcNcf86VhAArDXncGmNr6Vwodgf9acnawfLLMqQakKDDuR2syL7",
  "key31": "3Xvhs2NBEfhKZmf4wpYmn91jWasTGVgcYS3vCEuUWkJRHHMwE5z3oEx7obe2RgaGEw8jM3s8hnsgKwdsC3BbfmYx",
  "key32": "3Uuqr3bkg8FXD9Hz3wf8DbfGyCVcA1LpSosjumQYNroWJTVRDTM2hRPqUmawie7sHUPW5ipvLf1QzFEsi8qh5Ghd",
  "key33": "2D419LCziUW79GBiX7gWofUApcnQruCDceKv2cgieZ8GGwUwun3EnCC2QFAna8UbaNkAZAyWCBcF9mVDLifcLMdP",
  "key34": "4tUbETorxjGhDEa8REttzbGRDdgCTWReiYG7oUDBzrvKjc2AMGDx2XiN1KCmNowTDXVfu2wE3cn5XD6FWFCe8d41",
  "key35": "43TMBvJZjf4qogX2p67tfJwitNmHnCRnSJwaUXAedBR87xA7156b8fh3KCgev5di9zzSveAJeKGgxQGSMLVNokEJ",
  "key36": "EmmoZTYdKLzjDBBsfrrztc8DaNX6Cb2U1NAuRMbMPM7QXxwFVEhZecKrebzijmAeCN6CvX742b4ktCnE5F6extN",
  "key37": "42GbCebSfez9pR4NKP29bMGnE8Fi214MSy1ncaSbcoY7VXbEte8LeYxzqAJGj9GrbxPCf57AEx1YRfUREd6QZftm",
  "key38": "1id3wGZx5odK9XDpbCrskwexcWFcNcobzasHhM1Qoehx5SQrTA3UeQimkCDuY5vKb3QZRqFgE44BaDRcNCZvvQ3",
  "key39": "48xCM7fJZypzNq5JVhabYJ4j99DV4FuCxUkMfDeC9rVM2bRKPu4xJfmviivS7BQLLbFt8P85u2MUcN8YGqQqwSiM",
  "key40": "5ndwAknprti6JycJihPnfUSsw5xNBzUGZWLXYhW42Cm1uQC97Jp6qL9coTNnWv9BKu2wcC9ADZ1Y5stKBRXfwbjL",
  "key41": "2KPqrWh46fjgNKr1AbxNvj3RAKWFW5t3rvGqd1Zasfse8u5wFrNVGv7MuhMWiMVC1mnoHGCdNYbDnzW7jaAesUwv",
  "key42": "2GiEzGqkcNr3jMXs7PjpC4zE2rg6fDQfUFKFziqCQ62ypTnkZUXwbEcDxrojYb5cmjroq7uYzCKLCaM3kQbkEKYr",
  "key43": "31jmZpoLfwhSQK8ShzqN55LX72xHmJfTkwkQQGixjrjcepHhCnAdbYbxQsJa7pTDXiLoqUN1WVV9SW9bUANVMFen",
  "key44": "3RxftJpN8ofNhUTc2JJd9vkp5p6kcA3PSrQzDiwEuToaiQSJDjkWZ6YqbVReeW5dLMfRrzDzHmhybmmAvKKMvDXR",
  "key45": "5uimzyJVp9Xqm9fz5btSJWKVtSWZtj2NKkkFy8XSZWQEuRVFs8Nc5UKjNkWX2UgcmVi1wgg2XerEB6jzD392E51a"
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
