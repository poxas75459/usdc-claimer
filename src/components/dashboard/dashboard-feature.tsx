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
    "5J43gCakN2dNccS5J9vQiEgrN4gqU6WeELKu3UCqfXWYuZa7SGHMggtP8YoQSt95zdEE8JwfdA2UUdysGMGTT2iN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WMp3n6ury4a3MeJwU3CRPCW5y1rpvDE6S1HajHtLAwXY6yAEDQGS72cCUV8KNEEBS9M9zq7LWDhcnzAZxmin5Nz",
  "key1": "4AQmK2bUSNv8E5JdQSoXV7Fp6bgNQqbgH4DPHd6wuzqPEHe1u9ArpcnA2NcBkgasftKMuBe9vhy1a7jRCosDPvxK",
  "key2": "5GRbTyYHkxD1vi7AGgVyWALQbViRXxRQa7AV7EK13n4tBM7b72oJ3nJCJVMsNvuUH8ikYz6AEsTLdLbn9dLpCv3H",
  "key3": "2zhpHGR7TVLNLo1dtENR2NQYwAimyBqcd3Uc4SfV25CfEcU2puQtEj7ptEjNbi3puXG7sn136yp1KK1QXt5Mtotg",
  "key4": "jiUfuTTA7K1aBD7b2WoSuDTXcUouT4NKVDjfX914WddYFF548Ajtqhd2S8qtubo8LkxNEG7jCmvTfVE4JYTFm2D",
  "key5": "2LVRSzTm3duVsUoBVnyVwsKEjNfw3PEqn513c5mb4TzDYhyC1Tf31TQYhmQe4oveePe33unxYz3iHBp1wgVbt8Q2",
  "key6": "2ELpHwNMJ5mJbURAwNsB1YzuCUWobx1TdFJZipNWd6rHabUH8puZoceLY83SnGi9Gg1XG3NaK2bTnjcyLBCw4Cpu",
  "key7": "31axaw1Y6j6z2drcjtASbF5eJCu1iDKy7XrYkBeGGrTPbK1GbxcojqvPSKDTfv3m9JL3qGpfewXx7yAcHbXPWakH",
  "key8": "4GSBP7g8wTXtodDvVC454VtVKWPySDiCvre9HJVKj82U7RvR14uYg3qWG2QbLdVxqKCU9T5vYKc6Eht5hGY3C87J",
  "key9": "4a5aSUFPutJXfc7fY9iWJwRNcHm4swf5kAsW31nvYazroEcQQ9tFUerfdvK4DEca11F9c9gVtw2AiebDZgCBAT7u",
  "key10": "44s181cToV6XwGnDJctCXCdAsxybzdQeWdvRCRDnB943TokA2LtC3z6Rx2suL4itANLnk4k3MrRogkprmR6zMQVp",
  "key11": "3HYuvJtgKEUyMWSCTdgrLrYhhsb2bFZnTqtGxouiRiANmjMCbnYXjtT5hkTi1AhKXrxmgSFD7X6DHgjbceNNyYJ9",
  "key12": "2UtDbNbWoNhPwgWQW5oEEq5DwnnMtfdjNANqeD2cT6yM2aJGSjLF3AYJrJ59gbRGXZbG4J6aTmbRgWvT5ux1v34r",
  "key13": "27uVT92RboEYPqQ2DSJS7RB9wUzKuehpaAQq3ycxhRfDwr5hrgQTvZMd4rPySe1H51YcmvEWVVX9L27d9skYrJfo",
  "key14": "2VJWnqqww49Wqbo31p5nH6rmNhjbfrhtUVaVDw1dAY43zeThYwZ45DAWLeE61n4wsac7kizsNNZ33Cm7Vt2yuPEG",
  "key15": "4UBKXpFnqYrwazX35NYyori8TCAb1wzXLKr8AiTGCAc2BjetVpsriQwjXq6s2ag8GaFwdzMxGcFcbgQHzJjE34rZ",
  "key16": "5vrtDRwCDGLHhBnrdRwaSv27svL6dq5r1zVujSBh3F3GmRSjdHbZgLtm1sPyxdxUNEHbMjsRf3m8ZfF6eTggMo2r",
  "key17": "4yES8bojbT8YtzzTrbmpYzmw67sL8u3nUSJeJorFXKJ3wD6oV53rDLEDY9F1uCu1mhtT2tNTXjzWjeoxy4T98yZk",
  "key18": "2pbtNS1BtzdUZQuUkfbnsYCPuHN1bAK1zJHqanZESLaL55tm2PpPWdSDZABAyqWFHrzdfFygCTv4vzi5RRHoApkR",
  "key19": "2MuFfmgifDeq46fjjJMnYNKLEWCLHugGMfPSC9EFmWEM6U8f7Y1z2GNEg1RN5iCxxra8xSXKCEiKokqoug3tVpoh",
  "key20": "4kAqFkVfoDoeQyyq3izmAdxbyyCUVKiQdsEi2voTtFoDtktA2xmC7TSyQWCcCWz2vipymqzpWojiNYvGKuRCSJar",
  "key21": "4t85BmTz65jXgw1isxf8nxxtHK6Y91kiayQdEMsA9t1bYQjPkXtc3A4DMpw7HHhBXcLnguw6wWPJP4AjEtkAm7YG",
  "key22": "5mkjnAbBGoQB28tBk4qa45MfzuwMuPraN8K3HcBnmd8BS8xPNdgdjyjzEv24a8qUQzQrhzP7ebLbbirztm4hsLhf",
  "key23": "37z1LjZoLQTYrQP3DtjSPG6wRqg1xUTre11uCfH17UQxVbK6d2zWW7MasBgoAMDeroLeRQVZ9uXnQUgysD547bWw",
  "key24": "4R7oD4tL8rfiyRx4E5JsuG4zMXFcJU2nKyFtdRqvjuStBu9ogUxDYjUCkFA6mUD3sP3Numi7xkgt53TJH5GRnJAn",
  "key25": "5Km5UFpWtboBAXkWMYZx1Tfta42NcbQ42nax91j612k51xACoCUZ9orjoSzB3JZ3VELTpQQFKQknPmrPuWLpgmtD",
  "key26": "b8Ayg9Uc95zZJozbFicn81izzCJUjtRcKQeLkDHdKFf79DcV39DV84UhSMkioVL3X4BcNPeiYkEkthcdGLhbZmT",
  "key27": "2EQfaA2f9ZmhWJYB6LCH1kBY6VNjMzXxGU92hJqynnUoaxGadwuRspS8fRHAKhW1uCF2QHBNFuFApdEb3jXxurkX",
  "key28": "2A4wxaezUuuLouweFkEHZwearcxNtU6QpCecBEd7xAtk9ikmWgNoPcDoJ4CMYPdhjBjAU6a8eX9qEjVe7pxTDcLn",
  "key29": "3FRyHxu63Y1DKGCFPiv8Na9cLVM2TryBRW4oYG93a6A2CooAJnAwZkNHTpU3foAUWXjpxiYQPHkS97TWxRd41ns3",
  "key30": "5xH9NLFdyNugqkR4qnAeDk6LMjats6GFyx6GU1MAK4Ysk6K457BTzMQVpW7ntcDHRCusjPURQ73wEM3wE2yxs9HE",
  "key31": "5X1Q9DUSGa2x5D7MmtaKYPDNmUA3YipDicv39SkuU6iR4YaRjUtdPNkxReYG87jv7dTR7RHqUyeDtZZ2NXS9snnS",
  "key32": "3nQGX4ufZDX8WsFnExJJ3agrpp7MMJytcsdd5i3VY1L7fjdEn7f8ohb4T8n9tV6XFz8PY9Nv6PYVKCmQaxZ6MAwr",
  "key33": "5ph5KP5V2Nu52TPUpVApBPYLVvwEy6ytW2KrWHVN2DwxyFHWZuPCSfDAR9KsMj13F4ediCZX3K1fkJpNo5bRqdCJ",
  "key34": "27dE9MVY2L2HoANFM7j3yMUfSFEKf59GmF2b7NVDEUHVy2wPoJa41YyFLLqU1cM58r3oXpWz1n6VKuuxiK6tr4By",
  "key35": "4KB2iuduv6GQE8NHC2MEKgQvM4qNtEnathsTv5BbfH1HkbnWqeBSeBPtnymhuE3gQHiHd6igKvCWxmQV3wnwX3ga",
  "key36": "3w5XvjUSVF1GLHSbV8RDdfZa366AoDgAdsXhEjgg2Pb9jBR9PuHdXej7tMuUHtgtzv6hx9bDnFX96WCytqVnnSEq",
  "key37": "ZXB33Qn7JEHLdPSdiDiTNPtgkvrWy3CyriVogqeqYSSdyF92b5fwgkfUS6md7HFWFAHN2wiezLUjKsiFJ4VN6QJ",
  "key38": "5Cg1uJeh9QGsadCS9aU2UgWtmQ7YBYKLCDSMqNViymcFuPHuQMCW3Zc8JkemfJAytuHqXYxASiLr1CkMqizGhPj6",
  "key39": "2uhHd3RYhV72vFv7Uiio8dubCq7hvUPdFcGWGigyPvzbw5EKwq9mJnPRRkwyDnwmDMAQUoHxo9dJt8ezaM23ERL5",
  "key40": "2HR5nF4WM7AympBY5GPeUFX9miGsnkJZxiQ9a6f9dMX6pAiA4RcR6iPzB1W5guSiPQ2orXDquvsYMyuq2sMZ6kRu",
  "key41": "HDFxFpdUdDBTAHDNHZB37cdikDMCHf9Kgw4RQjGKn33GBc6MSkQRazdFuAYX3teNL8FP3iSvMbo8amPWXErpUa5",
  "key42": "2FGfdvKy3Ngc7ShYsXZTzEE3BUcGSmMwGwyurpZjXGDUtGSi3YvyUgnB1E9wwPUD43Mavdsrz4CfmLGy2yTLU8AY"
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
