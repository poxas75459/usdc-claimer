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
    "57qG5efCRtRVPM3zeg3UnA8mw6zxpUCTaLyiihhZP7cartw1dTjZ7RHib88BcEQ7Cv98uNQKCemb5firb3QLcxog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s7SRGtMXtCREKNh8JGWrFkA3QeH8Z4L7VEZ2ZfWbfgyzR332kHFEdzoZgZhm8D4AsAm3U9Zc2nUZux1EXKVQjoa",
  "key1": "4zJj962UqNLhFiPdDvp4r7enaqEDksyVhPYL7ucGvXT1CwCfqNzip5LKqk8Kctge45eFivh8WhZ6UnANEeSLbshQ",
  "key2": "GZS7sECbPyJw2KWpFSqwWxZ28at42vWZ9dW98uQramwiMB7oT1YRQdoUV1pqZ4sb61rFksfQZNbeokeGWXMHFoD",
  "key3": "4Tr7vjLgmCWJAYje5voWAwKEsnuE5zoN5cCCQD6RTiGYyrdqPNAzoc3aogFi1chYVH8VuLyTH28N8Yo7S45epARu",
  "key4": "3YRRoCpzcCmfUiScqkGiehJtGjeLtsiQc5TbfJmJf3GMKinaHfkgMSCBbeeswWyMeJM9WnwU8XpnYaZivGVQTH4m",
  "key5": "61TaG8NeF1A5Ba4g1evLpcw51gxZ1rDuYh2bgJ1JkLLCfkMop2H6Zg2DnuTthwPvaz13GciAaA5e1Je3DNiXjKvn",
  "key6": "3m4NZ6eELhJKcBRvUHk11VENb2TU9V2Z7WuT7bx3PdqD41FpBh6LP5RHSbQTPKtbcDGrrnQiS51DngndF1s45pjf",
  "key7": "4YpJLL7rbaogcWQPTri8cDXtSpYk4TyzZKdHqbYfKyv7sMfZwCd5suFFqFTQGp6VVvxyZfM7os8y7awaQaCqhqj5",
  "key8": "5qeKvisW6Cpz8SWzQ4TyXb9fbwTxAYdbwNeXQRV57Ee926hByLxW2B1knW44YziVGxZGYAo4KteZSCCK1RUiMy6w",
  "key9": "54s1JYEMnpZ8Gjp5CrBFpVYqEE1vkYewAef2cMbToFFGNRF5DaYTpL998VNnFhPhGRHUYSfT818v8MrwgbH6yJoa",
  "key10": "5JFJVb6hxCr7qcnF7mi7b8dJVDmHrtMeN6ow9q4tLJvEV9k33nqFwXiMipXdnhvFKGqboxhbf1Bn98JcUYdBBeDu",
  "key11": "Mu8Hcmgwak8DqZ2vPJNaepPmjCPMTqTwKrN4ByA9gmYarhReoaGf4CGXgLNPuCY5BjuuAoaoBkbtEnTRJx2pvFQ",
  "key12": "3QfFKphpWz2sXcprv6sXgii1CgLkTJTcQLiP1Hub5NaFpysTKQPqtBZVGf6PcVP8UyFL4rjFUcrPZTKWzpZJkXRZ",
  "key13": "5Uyq12FdCFNxPrdGrebMNAEq5prd1Bgr3PGiQLX8xZExkPUCMaujyZq3vMn5mopHJiGwqU1KLBD99F1zRw3Nawn5",
  "key14": "2z8AN27VKQgYoweVmmfEqwSoUbG9cWuTxhDxAomKRHtdZtGcrmCtf2Mii3Vw1w5wFBdnf3smBY4aLj2qGMirsNwQ",
  "key15": "64ueGuGQjeiSsfPer62rCWJq5XTb1cq4H3rz2nGuTJ2TaQUHXnRxpiUXcdTZNn4HXjQdfcViTeNJ2s2RzPySzBNv",
  "key16": "5LV2GUCJTdgNd3qqEcRBu4WHiWsfwpLXeo9HfwHcy6ypPqyQgRfUpj6T7Rj25JvjEaaesyKT9QQxCYmKPXtUfmnH",
  "key17": "63HmN71YvEjrPb9jsmeJjudeZqjot7M4JgXtJKw49Li3owTMky4Ut4xP6yenq3DKmxpoab6TMAM68z7SAHekKo9r",
  "key18": "4MA9Yykh6X2okGCp9HaPYeP4PDnWJGeGa1cSk1WGStkLeFXbxqy84HLuHcqEEPcLug77BS9xRqCYvJKEhHiYoXZb",
  "key19": "2D2AutLcwywQP2teejXFnd8qEZPnCxvaue6odHdDSqqrTYvBYH5vMrAeePG7ViMoeAixkSmtPcLt9zrAevLfEbNG",
  "key20": "3GWDqgx1iLnJG8E9M48dPMrUcuAg622FtL8Py5AgbLSj259VvPxdjPGDpD3sZpfQUCLn4YmJGJehU775TPSWHqhw",
  "key21": "2UQCj85i5ENrAc3mYjSRzjo5TE9dJuehA7GmA3zL7LEHVHiUKgNjF25FL9np1fMpvekBqvuSy6qd2zYyNSjhaHHF",
  "key22": "2GR5tcg9Mmg4yzTrLqF79Ch7y8xRrMngHotyZjMQhsgCVNXDmmSLXFoh2dANzTcgTNCXpdh7VXWJjBhir19dzqPP",
  "key23": "2ohZwE5fToYUN1RSjecKcSwn87Wazxy7BxAVRPEFMa77i9ED6dsnrzrAi93www9WBa25APZtUtN22YDmuyWRCtJT",
  "key24": "5nAaGkDQTkN32yBSpGkvpNgydAEcg8rpyTexV7osBLvda7qf3LwsxfY7hQzdRLvwUpZG6bSH4uh6BkNC8nii9tPC",
  "key25": "3BhUrnxc3j4CkFiNeYcDNDhx5tdWZeZysPmg8SaBdfqHQJxuy5BDKaip1wM7U2Q61VbePP9hgiz4gYXTSDnUS91F",
  "key26": "2v6zEZbNTEzADUXRyhW1oNME5MaGrm69w4UgQgo5ChLoXxzP3DHzxSkCqPL9tYrK54Xo7CtUzZH6Tx8cupbhEuby",
  "key27": "HkqHhqYTox6fVcXPqZMMnsyhPxt57KZKTnBgRYoEuqiCACFzZqM9tDDc6BMDeK4UtTFu88UFn7egX6N9qyv56XT",
  "key28": "2UM77M6PAayZdUBbmnMKnQ2PVJo9GWXtWtA8eDCbeh16rtJXYtNR6haUNqKee9XGkEELQeQs9hQkJarpZhwsM7z7"
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
