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
    "61GmU3yYFJCaRgYGhLU3FhvxoxaYEUYQr6wrcdbPf7Xag9d7BYtWBxfSjjYpCBCj3h9U2SEr7HEaoEhtEnxaZ7mG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x7D7mTcgBrDVcb2Jd7TDuXYEGACkyjgEq2kPwtLvdkLeRTgWX9sPtr8e6KvHG9nevEhFepdKcZTe1bfQk33jz98",
  "key1": "hwTAUPWQJbgVkgwgjX263SAAj7a5oemHcRVp17Lw7zDqZJuzSc4yvXMz6Tod7JdqzbLhXhLGK38NmSzgNf1XG85",
  "key2": "4c54vKzRr4jJc6qDtUBBQ2fHzf9FVf9U3sRoJz2hWdVBv2ASwFZ1dJWiFWyzK6iFv6wq7t7b6KRYH3f81ZAwb8iJ",
  "key3": "4BJjJXiGoW2hB1RB1Q77igUgryA1j9RmHrX4pg5vd9RB3NeWU5uVUQJUZrrawZoWwUscrSu7qR7fxfSEQtnRzxuo",
  "key4": "4zmJH8xrLoTAnd6J7jrX9LraFHg3Rt3R6gPb7haaLi4ipmD6EkDiSWfdBxFcFt9HEXDUnHwn27fJhAcuwLPB5nT2",
  "key5": "2hsD8KaNu4gMwgsKnpVSSQuugcmUV1UuVfeBNoNy1mcMCULMTNqWpiuWkUG3Wiywu2tR7xBV4u439t5c6ZjyeBpS",
  "key6": "E7yj5QH9t8YuRE7fC1F3TFnJjReKzTo1zhnWT1GwAk7AAMoVD1Lokzgmpx4JGxh87Dw8q4jGHan4cLVdHJzMiRF",
  "key7": "4VTh2DyRPEVLhdRmbHtfYr9DF6G1SmN4bxnknMEbpJQahZVQxoxUDD8p8v1UyLkn9XdCNshH5MC6ggw7hsJKsuzf",
  "key8": "5Grs4iDXQMYinLLfDfgd5HFvfvm88eGwEch2qyK2FBqEG8ufJT5WAEKoRhSrXLYWZppFsyoohzdHFGazqbnbYTeh",
  "key9": "4sq27wg6idRGoCjSKz3EHAnEAcJP8MFA35wWToSHicvB99djQfMBN1VHpmFsHWhBiAYiGF9ARmTbUTH6c7RdDUmf",
  "key10": "5HdrFdNXTsHFfzEdcF3bzxmdXyPAvHks9gxcFoGW1rF5pd2dZXUjhpaZBnqBAbsVNmBknqh4n4D8CXfbEqMMqm9P",
  "key11": "3pHGoRwGV4DRorqYXR5grBhcGbGcqE9A4LaZwQ1jVtxY5QxBmZWV3RUcgoLRLCY1jdNVoKLh41rzQh6wa7yaQq3K",
  "key12": "DY1AQtFVwo28UzzoUsSdoCHuJypZ3Bi7ZHE5NyUeBwERdQPyNcTutzVGbwXdGPpMvzi5GisoYBZbM5ewHCJ1fGx",
  "key13": "5vs1yDC1NfTBTJJQPLV8D7DJ1BfmF9GcSZAAtLPxK4BnBZmJArJzRTAZn4HndGKoq9LV5qPb2tRidRGHL3PtaPrU",
  "key14": "5yYQc6EMeZbUT6ZURjSuFTXaNwXuJBNaGffkFCDzjqVtdE6AYdVwia4kGk5geuLnJnn6bwsV93BEpVs3HeGdQnDn",
  "key15": "5b7EZ2VWWXYK6dxo56i7kqQnvVuYW1T1Svy2DQoE9YfLEjBAYMnAdoJ8vAxMrXg6PTF55SEU7w62RuEizGtcoQpz",
  "key16": "4NT6DqpvN1dHiie9UdvpzGLQacJWusuq167id54BDjPd4nu9mj4owwjh7eLh3oKUSQpC8rdPy9aaLf8gdXnTuddY",
  "key17": "4Vw9xMoeE24L61FUmjSVtuJWxCwAmdTVLqKq244FpjRfcN45MZG1NGfaaRSh9appGZihUs2nGHvbASjPnzxTBYTX",
  "key18": "2haN98Q9phxQFJy3oVTHVs6RwfqjFGVn9ZqBWkGZM32d9yrX83k8A1WEkBykT8wYFVKiv1S2Wia53sEUhpRB3Rsk",
  "key19": "3aZxmyMThnfR4qyic15c9xjrW6USoHGqPara7L3WoVGBaFeGi4YhvCdJVobzE2p9fvWAjM1xpKYdigkttNNQJCXE",
  "key20": "3stnFTD2VTYnnxVgsfemgv3GpkPDQcdxhswQCPcfPyzBcpoqwbjy3Q5mebh3VQ3jNzJvFgGx94nCfF36N4W1e9Et",
  "key21": "4hoGVjLsPZND8WPE5DhjbSrDCNA98cExK8hTVqq26cmxredm6rVvg3LWtZNgPfs8uppJnyKkEmZryip8DRUbZsnj",
  "key22": "268KFrRQsbWcJ8CAsg7JEcyDbo5btAm6iAY2dRH4wQRxDZJPcSysdktWXieqJyhxGoko9SjqcqJxK4YDza79KZva",
  "key23": "3KSJRSBHdXsATCjkQbSeAH6BhfVfQBskKQHkM4NCMgRihQDw1Nrcst97FGCJ37pphqA9EqcARruoRb8cm8nhGJhi",
  "key24": "5WeQTZhRcjcTCKwZxJQyjHBgpJ6x7TnbYsCJ9wQk11BuxtvjtwNZcp4wY8gTDFhkpqZUVbr6d6doiABQxup6W1h7",
  "key25": "5tpiFUjpbjci9TNpG1irnMGQYGsjSPvgAfyXkEjoaGJde3s2XGxQPbtxhJaop8BbU6MW9cTPyGTpNha6ga6rUEgH",
  "key26": "23gvnwDMC1fKHLTgjXdRFDHHzRcotGAURqEXqMvhoWn9AaT8wZQRvicwY3X8T1fvRaFHuJrhZL895fq9P4wSwGhK",
  "key27": "25MYm8weGVzMN8vUDLxhH2joEaMr2WegC1civLnpe5xrVKZpZNSDy2q9PXW1JFv863VvMWy9dYMaYzPxWVR4BkoU",
  "key28": "5F4usZmQPFuBuvNeDFbfsvgx7JBdXynWbotgBVaGQUEvMHeCpN6ePZHfTyn6y6Qzt8q37CnxvCXo65yEiZsp8rWp",
  "key29": "3GGaUuqXPxGbYbFzxjuLrPm8uq68eKmiTz5C2QxFkeTJE6hPt5Qh1isF24qRjER2BXpBRyLoKjup6PuXiAXmHCpP",
  "key30": "4QyQDanA29G2QgtQQgBjgc14reQxmuG6pspQz7qWtoCbjhkz7DGV4t6bESsPgyq9KacSozGvP8aunAFdrKHiCESS"
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
