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
    "4xxK9gML2JdJqaPFLgwdBwGxCWBFSZ4qXFJou1V5iHtjwzBkKx8VujgTbMTicqnRJMPuQrfizXKmmjtnpd3uMWZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zKsp9KFA4DdmQZRPKQWy2jzcfb4zdLo5br2FtwQpVE9jmKBw68YUFwiobanK8RhwJiEayxxWRbpxq65DMTzkyZh",
  "key1": "3DwTUF6Erf1bkxtAqDGbHb5VhGvp3KnRBeod6V8YEqgsiNMqdYrcFvZTwWxwWARcHLLPv9ai1MquzcJwLyvDYdVx",
  "key2": "2wDzLvoUtGKrfkNDBTcH3Uvr2SY9nvKLdpJC55K2iALbkinSmAgmqNn5yguKY9ZkUjddfZzQ32QzEvZW2cFUqGGG",
  "key3": "2ioXZzi4Wdj11boQNjKSpER9pcQKbjx81fYwTU2znr1sLPAKNVLBhDqEBK95TM6JU9YyYDKMDeDpU22V7wbsKN8i",
  "key4": "XeoQ8wzobCwAnGP2TYtFhnRdVVTufhDYNSpQUVJrKWFz6VS1RpqJCpsJ6RVbhnyfae391pTyGhwXBvosbmA9GPW",
  "key5": "3xKsD7V9g3AxYgpEJya9Zr37DcoKu5xmSB7ia3XYyumBeSGu3gaXVfU1C7hB1dTjwkQ59t8h5gUvfRmw89vAPPvy",
  "key6": "2xyYa5Nsd9Vz7d8kRZcwtiAMMiehDWz68Y3Z3A6ueTvpq2qrK1vUNWhqaUPEwwje6dMLrkDS4oVWhzWPkdky6xxY",
  "key7": "5mBrGdMc99aAXCpUu6PhBCZSfWaShuLJ6op8yGmzhEevh3QL1k2Nuj5uzo5Y8LnH2VE6wy2aiBtrgshWuUwRNvdj",
  "key8": "342JVhYpNrykGLfBC3xAr7JfLnut2zMUwqS1rz924qTBZ8Bnuh3t7VJCV53v8WSNP4Ld9aUqAwf7ns9J69YQdK3Z",
  "key9": "5HwneSESD8tPi7aUJE9EBreEJVm17h3fofUiZBMG5p163gW8zTDKywnFnCoDdrBYyR5vAoogeY5pamRaRsM2n6f1",
  "key10": "5zzhfX31mwQYiufyB3gvrrCe5wBey8x6zUDh9GouEUSCXVB8iEiPxvQm5DiYDSXXpFpoaBxYmHES8Pr6Hc7EiVk3",
  "key11": "4XkfzfmiJJKT7qQic6JNdJL2cXsvs4xRhqH7gtFvPDj2VRxtGRK4NgkmXWDgNiWP8R3CgevebkVBNJw28EsTJo5a",
  "key12": "63Y4FM1fEfApzrfrTFcTBqoFN2nHrxawZAAacRuM5jjEKJ6tKrHX4r8hSyGUBHUafSvcoZ3CLxhHvLzjA9MGo6zR",
  "key13": "3KVTD5kZwUc9iQrqAmPRr9yKwAbPjLrSNt3kQwybXsuLfJLF1iQTSZvkhtKtHxdEqZnP494K4weAMK8W9gZrSgpn",
  "key14": "2S9mPa6pzAiLitUBzCDWK7zZRTpAUJTsgoiUwrtL8z6RtuX8wETRKzBNbc3CmiApcRWvFVKJCRTWyXGLzqfY5oxT",
  "key15": "4SVGxNKWGWBcAUCKqxzB9M52Hk6PUNxnpoPCDdZjwpMv978TG2EWUhnoYFfMTGAHPQEbN52Skr9LToFreD2ZobPa",
  "key16": "21q12cLczLJ7yPPAbLMWABMoHN6ZJs4Y2Skp3ubVrYaNCRvU5iDayRPh2e3R9MUgctEj6NQYyxYHhAv3ivhE3NYs",
  "key17": "5US4BFzEhV2wSoHAk3LgVHaAqns2z1hqp9QBnXEu4Cha9QPME8rKamTT91iqXSGFzdJTKUB2BHAqqvuTot3NcYEn",
  "key18": "3X8ZM695GSPudpzoJxpfu7KohmA1wMV5J39yBaSh8w98jJua2rnepBqT9NaQSmjv2SLgztAakNYULLtXRDxhpJDC",
  "key19": "4TuiCt7UmYfe46pzFPhUdyNCXQsyuvrrKNtgn7HRA1ncSNjQo8Uq674mk3z1Ta3VXsKy2XD34noYtKR5V7uQkq7S",
  "key20": "5WgY7gaFjZLroSjee4DUaWtMm8D97Qj3L1jDsn4U4LGWpTMK73FgRUsRC9N7fvkZVM6z2kGVxRv5UcSHVcikKMZ1",
  "key21": "2cfAGUXomAYU5JtitkYExjLEY1cZ2AnubCdYMtczYpTgDV2s6UrUbdmPsBi3VtWQvj6TNpypB76bszuP6BvVh93E",
  "key22": "2YqPWQDVAAFaNUxpqLsZQb8jP5Hp8L326fyeGarmsoRLMRmh72mU1NiHpC7EtyfxAN2dspT2XRgSfUy6tRpy9dPw",
  "key23": "5osEA9N4Vhkfp1eGVCzesoz2LPW7TwxYedWeQ1RLb4LLcNQLvTghJZdAi7EcASm2AB87wk7DnS96U5y7q7e3uhdy",
  "key24": "2Ca1mWEp3n9gJgB7d2eRKKwG8iE5RvDLqZcqFtDkxWsVs2iPs8oF16ZCe3UsKQC533cPRMhkpBmMyf61ZRxoefS2",
  "key25": "3TBDrJYKBzkxbw4yTDwGM6Zb3kA8zs7Uze5ATiRwX2aVE7JUitRxhqqsSddwRjNPVPkAyyqfx8hvDttHbaE8YNW2",
  "key26": "3tmw8G9eAZa2vdRKMm7DY3696irm5pf6ose56EuLmbn75Z7WzTsJ2VV2xvuTZX5HZoptwvwvUrdW1ougBKJ9Qb7c",
  "key27": "51CMcHsydPkgSEZJvVh7NkmSB1Hu6W9zg6oyXp1XSVQwW3GLKRia9SimeS5xg3TDrt2oHttuCDFi2vRKbCmSbpSE",
  "key28": "5HznVS8LMqYzPdkKw6RAhP3FFUJ4VCLT7vkio1rfEBexkS3uNZ9nbNx7BZKzu5ZaG7CQHWJpnj9qakwp39i96X5N",
  "key29": "5qf1D1kzsydmbBXW4SLZnaXpyu77muZ8SNVJwD6kECuE3Gr1dJnhmFkrs6Z7upvsutewQPd2XQ2qLDnA2UhinvsU",
  "key30": "pZZhK9uKAwJNdWjJXTBt2FNe5Z2PTVKnxnoBJ7FDktjvRJfwJyTz6Mzqxk4yntKx14kjaEowECqmvwVXNt7bWiD",
  "key31": "672SX4ebBdtZpeTyydxmS1ebtYsww7BNU9foidoX9aXxCWq1TmfSYPAEALeGHrCHbzuu25Ys9twKa9uizAcGEBz",
  "key32": "2eYdQigyFC6rtRET7pkpbp3zDVgRV1Xm5GAjKat9gdTcb1iqQXnAwu1eeUuVhsaQ1C9a2ARtUt2CcHFEgyNhiXTA",
  "key33": "3tAhoaPiiSXptjkfYg8nfwF3KWva9WL2pUjg8L2BCYYKP7Vj9vd7ixGYfsJkRFv5VBucFcziqGDUs54poyByzmeF",
  "key34": "2tqmL8zVJTPGnCmTeMFYZWk1QaN6jSXdQbaNA9p2yChx6MHj7rE7BU3dEJSQt4ek9TkEnm94adFZQF8HQLwNtJxN",
  "key35": "s3Ubnro4RLkDmo2cyJb3noLoANq3P8GS8FF9Xr11icx8cHmPRCQGAJwgE1oRq5Y8e3u5QtbNRMS5wpJTLhvSbVh",
  "key36": "D9Vee4i5hrwFozXD8egNEJMky9BoPN3xzbt8tkMdaqxHr8U5g1wWSUtfk9q2QCUM842huXPv8YbzxQFzKtbvx77",
  "key37": "PgFiYP133eRuRkSjuEvbuYmtG185xP6pdvhSMSUbKVMna2cfRVPUEefoBBWcrzsYuaAHnqDXtFCmxHtDty6Lkm6",
  "key38": "7twBFdfwvyNdNmKc87MKYj48LHDUQdTJWSkv1chKgssKvg2BPMcWmYwgTRbmby1V388YgC9SxWwnJXSd87k8894",
  "key39": "4XKTJa8SFe3hZEvLKbR8qLLPbRSmsT6zokS9FkPgR3JzDYL2UcSBXYKSv19pPDBFjFtyQnufoCAgd6JasBHxruRA",
  "key40": "4PcgwNu3cF2ASDxhysV4yRGhhKR4dVAfUe9eVmGezFBLHARQjNz9TK4koPma3RmQuJjXFNmpNwoeUgrwje4M322Z",
  "key41": "4dQkRfnXHnZPwopoFmmLnVspppiuH9xU6aEyJ6rsCWh1xzMcj5bTirXV4EMg7oxkRckudCtcghgmtQaamKBEv6ZX",
  "key42": "2hVzDX68vMbhaRmtRaWPPfxoM4wkWpJsbCqkt4rM5QsZ4T6ET2rYLPGf5aVuptKTobugi9qhLbBQnLAxDPBHoBz8",
  "key43": "34raBtRytrwZtzPviEkNgamowP6cz5WTXfFwWiLvS3HRqHz4BPCVfEtFxjqNfQ3Tu2YRoT8rb4ojVTPoCt1iXf3f",
  "key44": "2W9hiLgh8949cWUcLZeL7qcKeEdZgMoEDZXAG7MFmK8WAByn9wDWsnouijJweyqYBimawVUqNReYSabrSgiMSXkB",
  "key45": "4W3bpfyDTL3pFE5Dp4V3kdZCD8DBMDi7YsVP5bcW3fyfM3snYNrHMqKCC8WSfbz6mC9osW2BtRCPbDp9BLXBMkSH",
  "key46": "4UEVmy1bDsYsajUj3WcwctaG2sSXZRooTcuNCm1L32YfFWgpzGBkTnHiehbmLECoXhXBd2MN6vrY3MiVwNP3kzB9",
  "key47": "5yhwR5v1zFkEGq5ytgLeQzc79nmvQdAFTNPq8iyf49gzfTWeaUnu5VqTdYZ9Ytpb9jehAu8LYvSSf1WsWQwtLbm7"
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
