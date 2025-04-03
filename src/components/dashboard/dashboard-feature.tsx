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
    "5g2Jkh8grUhTRNf7cwMCh1sm76sZC3Cqb2PmyVxMjnbx3bscTjtCR5ceAf4VRpHoe91CYUxBDtdhihZ7f88FsfWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XsKGS129Uf8hWXCP1tQqGWafxPE4xcBe7zsFtTaBjo1s9ntrdzpPCNeVZBM9DidokUMWK16RERPLG75tWzdN18m",
  "key1": "xFkP2QvLwpekGUZdczJUxd5Wa6YGHCwYmqWWv6xtX7U9mm3GRcKKMCAU8pS924KVwF5LsdPHw5hPqDuTaQ1FJS5",
  "key2": "pLE1zfqkMWQUbgCtQp1CQzomZTEXCvX3jdbCtyLahb3gg2nKurcoUiNAtQu366CcY3PzbYu7Lh11iZs1nBintEM",
  "key3": "3VZzrSbzWxLfYyQo36WCmbjTRQM9hfxwWdi4aLJNCEmZyZEbvTvWFichd3TbkV8Pc3tErJoSzTZAKC8SrMAeUsnU",
  "key4": "3vXkE2wAjAkzMpC2LYJU732uZVeptHDgGTje2HZsrYLheb59YDNLWzawpaHwhS5X3KbimFEcjBka2jJqhr1JvsD2",
  "key5": "2EnaY89bDucZciUmq1z9Hip3cF1NJnbnwHVagPhS3isNWUiY5BAf6d5fkzRmLZxWH9WnCHZwrr3hE9dDQWk7MR3y",
  "key6": "61nkkFBSKYvb8X9jub1YEXVmqHc756GUHefjTGWo3Vb5Enb1WcFQgV4GK2eHSFEzatKp7nhQN1TijzseJjEmSQmd",
  "key7": "2xuRoxpMQhfu4A65wAg7YGRNJdtFWJNi3jsV5Ly6RADyEfabX4mVD2Lqso3wNeZSB62jXntncSUMwxYJ4LSfyHfD",
  "key8": "26eAFWFaq1rtZdcBX2MPWmJqD13eJdJvoAttyttjDSEKBL6bNyauym9Hqqie6Z5furGZ9arZ7ZKgvQAUN2dSzAZn",
  "key9": "4Ruoud95N4FLhZLYkxPQY6p9spceFGpEAt5wUcw6re7o3cU7FsFcGTfFSzWF8aZ5huNBtfiMtkYp3iMWVSSQ8A5A",
  "key10": "3kY5M87udGpMAgX2G69EXmB3PU9UYgLTNEyF5Fiw98FUMVNruRq4QqEfMj66NqXxhNrkkGV99PRNXYjD9X7oZUzd",
  "key11": "tkv9YwnpgxmpJ39xaLdq3uSUde6uR2EU3rFv8eVQjmqmsvf77o3DjefiQEKuHW6ayxb3QzcyrTnga5t9pRSGHe5",
  "key12": "34rsHuerjVPrf76G5gufXEhUNAzBqSTWgkeKBXDe7Scp4EBBYPNG8KZrA4KSM7Rv615zFnnA4eqLonq82XDVDU7z",
  "key13": "2HbGaEM2pytxgU99KMm88wNqBh5cLZgV8ybsN2F3CAAHKwhE15ju6HsHrcNkAuAs8f7eVE6UzYn6GpSCQBUSkScZ",
  "key14": "5LP37uRmtNf4jgmQSoJJ55h7i6kigLnKsAF5WKpMwA1Pkt6tCah5huQWXrthJADLjTETvLAikzikuW9MDqxhUxEh",
  "key15": "3QyMCcbtxGQ53cvXXknZdXK6hEUSkFY8UwdUhz36hU2X4SbBrmzxfYyuyvQwpiTZsfCJSRrCoW2GR5XMtGGrisbz",
  "key16": "4WBoxztBk6wufWyezreZBcJBoyHZbbd5gKcCC8aPPK7K8A8qbpYMNYn6HWxpHJLV7seQh23v2RhAv4v3QARx7e9N",
  "key17": "2PFwRzaQkPMKxdqCAwxMDbBqHP8o1vwtwnfLGqwstML84FPSjQSPbh33HoG1uejJmwtP1UCpBLRedxrkMz6VBqFs",
  "key18": "2h6Z5KoRjpZj35v1xEuHpvnH75eKCnF4Yn6qvttU8kKjbifGr1gmUBqTAtGvbHdKULdTzfnPvyJ9mfBRJYBFuCW3",
  "key19": "5z8Ve7StTPtwsLYYJNCErZkRTajWVeJwqWSxt3XGKCbyKmXCXPTL5GDm9rYYdrLDcWECwB13mbKP3MKv5wcqP5F3",
  "key20": "2VqFvY4s8L9uTkGpMVAwZcTaQQA55Jzi4t2kpnZ3FkFG2a79JZyASjmJhuLAq9v2UScHoS7t8ezwoRwxaCFqTEXz",
  "key21": "5RC2YHh6NiER1PEZMM5qGi9JLjMMFnm1N9tqArm8x9pWrEqnNu6DumeiYbt8Nt7mP3diHV2bEvAGe3oeWA4QkqkM",
  "key22": "fGumphidKz852hqQy7C5t5rLikgUMivLuu3iZ9eJr4ZMX3dxtbo8Fak1YCX7oqPS5UrngRsBQpGuKZqmxLijVWP",
  "key23": "sCkKL59gLQYcXSR2zZxrkycjCxg7MaqZeUweCEvyKyGETVMMMDwr6XfbRMaH4qHE5HygNY7odpJXmwuK16v6xrL",
  "key24": "HkQv6ExxpSnHA21AB37bkCSxhcnGDnGUhU6x71ExvCoEkSYJokCAV68q86T8Hc3hznB6dbTcfANfXedNeYLd363",
  "key25": "5oBeWkzGL5VajaQPDucpcbEiTDm3QRkeED16FDhfNt36VbLdSqRqA3iYtxGSf9D3un8rVpmq7BJsaM2bfVoDNxed",
  "key26": "5vwj6MEQ6BKB123sgKmQFgP55oPxwhyzTPuMBa1LfciQxsZBZ1GGx2QwJF9TMsECiN2WLKWQwqbx75PB3FvAbfHD",
  "key27": "2fjKpUuiGHRADMBxihSTLeKSgPmAaghjVnk7R3FpTVw6Ewdrzu2iGiuCrYgsktfQxd15UW9CKBo1dEqd58AQ3Vnr",
  "key28": "4GZiNUzQdkfVfrPHUtwxfHVG3ufySTbgATU2LUKVdpMqLBeELCCxCxYHEMu21JUb65GTVhTqwL8sXh7fAtq5QC31",
  "key29": "4P5B8ZE5EduhJxfVK7L2puPycRyAP5gLPYYrPb6HotF2iUMiwT2F9swaRoL8gAZfLcy8q1R1RUQv5ZapkrBK2kNh",
  "key30": "4MqqjLBkFzKnYsdKfXUKwdDsXZBDyRiQXmcjchKNYvg3u5j5erfb1DW76iMfGJPe8urURFEHPtBCpTjQAqgL8WeL",
  "key31": "62x9w5fVcmYrJG4SYpcE5oPqrtMAX7nYKLk4N3M5zTRZN2tzHCcP8mZkW1cpXDXkLsVtoSwVPQp3vUPYnmaE3HRu",
  "key32": "4usBWwTPhbMner6BKyg8pHXFiZqTUTVCN7K17rQ1UPQXjGGuTTgSLfmc992Mm81PKKyUNf9EMNMYFmEZXGL9Xjns",
  "key33": "4TvZ1Gq2TNVXGjN7CXkH2wexpHR6dGC5uurfA25z64ZcdBJMyZ96H5RMdGUTRTJMF6SfiTtTJnyaCQAbJ98gvMr1",
  "key34": "3Kq8GC7ptay8ZErBwsXj3keJcdfpatckZ8RAZLXC5jcobgi4SoUjFCSLGd727aAykMr1pVVks95vpZYqyJLxMEDW",
  "key35": "43g1US47GXijCLqwA4PGC1WJ1ESfhBtd3Mc6mtrSSJL4tkSsc4cfWRTcTNyfZSCwZhy5XuVbaDbFxsgPosipKLJs",
  "key36": "2Xs6nzzYSgqKs1oKNv3dxHSn38KDMn5898UWYCGCFGiaHiHZFFTy4mCBfCuBTamonf3kFiBSc6MJePasYXHyoQKy",
  "key37": "5wbt794RAxM37zAWrmn5gPvsDkXyM3b7vHfTh9Ycmtx5ZrtNq6NqQ9SGvovUoBjrXytzKndZmHUVZUuyHxVLJ7d2",
  "key38": "4Xu1CHzBQembuU6XWTqdEH227Qchisqqj9o53vFD7UpXyneSJp4ZuyjcEKrzD5pgbUWGX6VKanLb3GzAid9No8Qb",
  "key39": "41Mg8sq2kSW8QTKZN85mfKYP8H6aXsYCALsgFfEfUTFkYkTJFq5TnsFv2L41Vjh9uujHHhaZmyy6RCVd6sBYZzK",
  "key40": "3bTMmvq2TdfFDPiFDPAm2mZsMejjqmzBZ4YmPAoVDBcrTzAaVWiYcA3BMGFaQwnbUgKMD3HeQABqPQ1NoPEPhezi",
  "key41": "58QpSZJotgdEufdAnTEYnr6e47kb5dCVyhCeZcYE5VrXQma5c78nP89Ppt9brqhs76hJNdiAPLYDG9wPgP2iPrBh",
  "key42": "bzc82mbbbyxyKbsTPY82mXeDphTtK9aUssQSSMpEBFbP5wzNfwmr38xiYHowAd1qxVSyU7pmzv1ohDLHSKUw61c",
  "key43": "4hGuXmiasfwcaeCg7AAH3KsNYJgwAoERbHo7hhwWfPABa2C81ADKTQqXHmYsggAPMHaESzF935XJG5myFrkSBBB6",
  "key44": "4AW96S6W35Zchm38JnQTAKwH4uLnnvrRiRrFwdNtfQSnYAgcBdYCsTjRR2QkYABo6NYtGp3J7RTKabCJNGNJFK4N",
  "key45": "9FSznnwjJSqTYHibJcvmSkR9MDBH7ghGBhAVn9HWkafsPL2BTmRBpaPEkphmQGrSH7tni9orzfJoRq5T6v3H3cL",
  "key46": "37b2zqWfmtRWcZxmHZ8trrkbB5KorvpynezoQWmL3Sq7fzK2mFNiAm5NLgXGYwE65hmeREhsUhYAZdYSYwMH74rY",
  "key47": "48ZdsS6LHZRS8r8zAHTyqC8Q9B1stycrMqKKJYaGmFJZNY1CVLi8SNsrdMmQVN6ivY667unTL9ZVmPJsxiX5afD3",
  "key48": "3yEWQ7ffT9HC6MG6FfYMhN3f4gwptGiwtHhWi7GTF31FXspNJBYj9jMGHmVwSC5Rsv1RzZMuqHcUaX9TCnPhqQpy"
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
