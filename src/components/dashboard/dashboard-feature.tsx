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
    "5mgAGnYf6KwkvdD2DVk2dvuPBzgUFTiCs1dHArynxPgoDW5DEuUKqqWMVkRKhnVJcK16DuXs8XhXH7XvhQBx8DTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49kXQKYC58NRd3tLo3WxGNKbFnPwEePECS1scEhE3nRxgYcdDynpNd4WWjFR67bfmkursWYSQDWomHcMiKUZZhWe",
  "key1": "4MHHT7bi8edvniV8xR3Uiu5qWf7MCEH7F5ABLehMmUsfwoQTYgc7JjUSgNxbzRoUsmABymkh8Em9yJzLKhPJERKo",
  "key2": "5doDeKya4EmdL67DKpK6JsAoMaS4PXUCMc2UarzXLK2LWZA6w4DqngPDUWGwJG1BF3iNytv4ZXAqwBjFTgjEZeg3",
  "key3": "31AXrYP9pAsAHes559LraxgbrdQt1sp3vbWgJqKUeJZFXrpEaWuFuUKEUufp4e5PmNuY6US1VM4n3hXC7RhRZ1AW",
  "key4": "21xV2dS5heVjEmAis4cm8WzcAUJUFu3gWBWRXRLL2sBahSi6Mo8iby7crrjLpqPmJT1FMaB7KA7RgnN3u3MEWEfP",
  "key5": "46QotBiyb3kA9rJu1SnpCkAbvVbsb1vfjs423CKGeevpkVmfZkxPH7o6KUs9noCs2RXfv8Z8Pi1pyfpiJnUUTenH",
  "key6": "3LdNbKxykZwgZXN9PFAfKNcJKbgZ9aebDS1HLd7uSTayS76EL4kUejBswa5n8kvE3vpQS1W9Zbc17Dc8TCtQsrBA",
  "key7": "3dhZJCiBcf9xQ2YTdKawsxKeBcSAuRL61NdndyyzW7cGtkHfRiVQYPLRarcHPDqtsnH39RJuEABsTDDFLDztjGg",
  "key8": "VR5PP1ucfVb32b6vHpAW5yKYKVCwohVL197zCgPhTqZhicKNnq48gL3wJ2vwcFgAp7KfcQBkGiGAHne2EJmnbR5",
  "key9": "2ciB2padYcn5nFmEeP5r8pR4uQwV42qyzL2qbZBbHMHVrefvD2eP47r38zgsKRHcgtVRA5AxzqpV578wyuVtpXj9",
  "key10": "u6X2gGTG4b3KQDbYB3wkqEp5WpBmm1qUiM5foxNxy5uNBj2Es34rbDPDyspbaKh4ss3an5DmtFKjsehtFsxtCX7",
  "key11": "3AjtY5wtrPyee4kAUTKiLF68vttnXRrJjjSgvngqJeyso92B4grJRPNv7MbCtMWnojVHQqr5mQutRwMNxbftvt9B",
  "key12": "3twMgLgNHYFzuLAr3aHWmYD9Tg6tWqJzzydZR9uFP3A57jrJuaq4M7buCSSkUQwuYo9cUQgkXSW35qoyVunMdyW3",
  "key13": "4S6Pau8Vt1rkJXvL5QAsPBeEg1ZVcSmJoVia9CY8B7sG3rYrdNXKf9h9524fBGxRoNCbbes4d9NsUtPPWqxosReu",
  "key14": "5kd2fga9pXx3tQ119pLMgiCmYeKUXPMA5DMN1whWYTePDE8c4oSgBeaekTL4YBeWBdDxR3am65buc5icvEiJY7p2",
  "key15": "5M27dPLDdHdanivbWx2nkgKeshC3UJei5nn8dqkMtovDo1QDvGR98phdPCvdVKVqdnU4ASfpQFwsgEUbKWA8Ckva",
  "key16": "3WrqeAW92tf2YUm4tHPnFDaQmsdtfCZahQ8R6E6XcNLuHMyhTuMJ2Kwsue7qUGEaN3WG3hkAtvqKU8F5EzY4xHZQ",
  "key17": "4sgJH68Ft2UmSqZrGUun33BnwbwGZkZMJCdcuyWCZgR6FFbRRNT6TeqmiwnSqq8w851SP5cbY2LUXojrhQZ39Web",
  "key18": "4pHeiXvPVRms9R8aGRYuohfgbasaEXQaMHuJd5NgskCpQfob5CtEVenJCeigmYiRW2HfMuywRLXZnt9dcXQMkeHW",
  "key19": "23SqPu2oxdAUYwuQi9egrvoZk2pQTB6tfJgATi6g4KY6Vok4znn4qPdVyuTVxibwmEqF6oxKau91a7ohxqVoVCo8",
  "key20": "BAo82PFjoVkxJTgUrkeTMpFpQKukaQRS93oyHRP1nqJ2wN5aDHv82GdcprGPJHJoinh9T7f6xFn91mvc2um3p2A",
  "key21": "3Sf7xBYWnswr9g7zoMz9XnPuPcQnqChHE5HmDenoj5VvDj4rBxUCbGaCr6uiUPshbP5evyvZmKye8FdoVmz69b5q",
  "key22": "5j2vh4A9e9L1yqmHb1xLmoaTXASw8BFMYJkfgyBfYFJubgnU4SXVCK4boRYv6bjfJrzmZCgjZsyLFS37KVZ7NxYo",
  "key23": "2pnTogbhiCDoRx4M88LZzfw6iVC8GE9FaC9VM9ExXJCS8iCdzSyfFGTmanJhpYowM33jNAxMT4vYeJUSLhZKZNZE",
  "key24": "25gTUMWMGdrxABQwp1KUfrkeNfoQEq8i7FszXjRsmLivgnMRjB5o6ZR4oDxxgpmv82JAw3Aw7BND2MyuDyF2tuWU",
  "key25": "2pt9YU8q3PXphXPZerWm4Rn7KasFopxHeobK5NZrCxdJXr7tkNKdXoab1GNDQywPWtHVUQjUtgmbvCVeFpseZ51Q",
  "key26": "2WjwzV7MqMi4Uzs62X55VhJX858nqRHoe5214ZQVbbWfhYZyEivkpfYkVLDWYqAZ9R98nWkL2fnbcWa5ciDQc2gz",
  "key27": "63p2UtkjoeLsSxR7VjKDBB8yUyeSg1gMyeosJZfnUGMDJ8r7LZsSeQQa3FrupD5m9fjwPqdoBMqLkCwFeTf7eMUc",
  "key28": "5Cf9e7tDUGt9mCnxB1FyyBD6ZTKmQxW2bFEpDFB5SWpheUNXG6xtnMTu86kyPubDY8yRwbdWDQUbe1CZdwex2JZz",
  "key29": "4Xsp3XyTmq8i8VL7B4W1YF2FdRGJv1VPL4Vgcv9NewueYC7fR5wwJtJcRFXH4rGYPLkGv5rN7EPp6ktuBLsmPqyf",
  "key30": "2EoqxGc6Fc6jkDq5ssW3PGX8ryE3AysAPHAeDZahBYSLLj47xhSsGhuzeWpuxtxGxRF42hSmycew4ggE1Ya1GWnK",
  "key31": "2RmRhux52eUbz6bi8Czcy6N5U2Z9BGTH5nnMx1zC8YyjELcTTF7SdVoLr9BKPes3hZ4PPNtfihSqnTW1vGLdLqMA",
  "key32": "2MUGNpW8fGwu9JhuRYAN2nVbfdTvVa9aKhEk73GwxB5KYyfvXMWyhnwT18DCGvkhgQy4EMi3Xx4qCXBWVGBcQBTR",
  "key33": "uA4yBerSjLRgJW7sU13bZ4m2VSeEMFtYsRGHmBcL2XYKkMAgCSjxUfbp7YSPb1SzfypeCJJRALCFAzg7ZVCTFbV",
  "key34": "4TLoLRMfNFaaNtA7hLGkKswxGdtCtX52qcBB2sJ57To348t6DqRcVJ4iTKBdBaFV6yGHPGSuSRF4uH9y4LNihjFd",
  "key35": "5J85b4xbUwDKDtkbwvpAgCdpSMQxj5VhwrZRjADNgdAiZofjPa4NCRwyGiG5F4s2qwpCctbqWHhuSLCX18jnPBaG",
  "key36": "43V6sDhkjACWynqoBxuf7uryTzPkquCvzsiMinxdvb2kcoBfuK8WLNmx5frwpuRhQERmXAXhHogyagfeMDRYj6JF",
  "key37": "4e6hFYT9w4D6TVmfo4vaJ4KcrZZbFou1BugabEuU5s6UrQ6UUdBBTNZfZGxC3R1tk8eJYuMPSoYxYTcJ3sXcaiXQ",
  "key38": "39rPst5ejYWPiGppJ6sCS4FdyaRXWY1SbpUG4v5Q8nqHoxcpwoar38AAEBeQKfFpadWjasc5WMNh25BYgFcjdo26",
  "key39": "3aUR54wiEG2HrtjsJ1mYwLUzzeNVRfq2Fhy6adK1KWNsdrcnzuQzaUX5yNFiJPtFYd1ED9YbEWsLEywt1iiFSV1b",
  "key40": "3EswCPPrLhifwa1oTxCNhd3uJxCeVtdhF8m6WpFXrbJ4B3PrkH7xHHB5o5ySQMf4UaGZpuxi6APj5nz7ySWU8hBM",
  "key41": "2mcJXAbBu3durFd8FjHd6njEVKk3nhafSFoxbBnUbnGgdbCExPEFRWdcLf3EaSfPRJ5NAfLeYKg3nrxzicB9uYFD",
  "key42": "4wW6YWa2mHvZ1m7inUhv6NVCWLNfGej4X2RaRCoLHGWzpMk9p2Pg9AURwQbG774UqkeA9wdWZKqN3v3AsfoL6sZN",
  "key43": "5rxYZZVVRsWsRtFZ8QN5Zxha5s7QSjmfFCdBSEoehShRUT14xMsFWdBwjfmk7p8YfMN6i2awaYeQwKu79wN2ftBR",
  "key44": "kMauSiiLhKNNRBZQdjmnqr93bjHBGkPfpPN1j7QEhFD87ockixdmwEjSq3gKGb7eKMMKKp29VbFcuwfJhjJeLtv",
  "key45": "4TGLy2HUi6uV5gH6XHQyP8tdumTbDKSKBHcmHaTYzZurBbsjP4jifD1Vd15a7aHrdeixRnFVth8DzVbFqAF4VC5J",
  "key46": "3FeAAVFC8oqyLSPpJaxX1C5LqycMKgnpGnpEWMuVqpcqtXxDmz6aW2QzwALw5RPoAcaoGZ3rgDw8WhhA52XMCcqX"
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
