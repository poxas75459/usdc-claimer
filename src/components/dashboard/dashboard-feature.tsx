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
    "UbrnVhf1Ym6VgaEd4nxC6kdg1hgNPSdmkdHEFDi2TQNYhSQw2WLvRwEEmMkhW3HmXSniAV35ghpHNRtY64qiSva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c1XYtb2EYCszZg7N5Pzu6hBUMhY7pDURwitihVDWxv9JDPy24Xda8jmnk5UALkQfLyy8V7RN41fzdeshPpifLPp",
  "key1": "oAkfAB3BZB1VZP5GkutkWUYVRiJ2MxHs9yaEoLZJGcqsLFqHaySychsYtH7t2F8zT1RL2jAi3Ybc7jvijjPor7j",
  "key2": "4Cj7NThnyNs1ackyazUwaq4MTK5Gqhqm38cZXp1odNTGY65YdPMZgmoMSVuMsR8kdae38JJ6UgQ5HtbbPr84hwtf",
  "key3": "yyPMz1FqLcD4VNiUyJvq1fUqtQJzy619bs848Vvtb2wDCKGamG4nhR3jMutHmmNAyPko1X7KUaW7Sukiz5CGGdM",
  "key4": "4sbPaybthiqb73pGukEkLe9m5uu28a8TBtVo2tZMQUncT6wUAqAFcwQVRnYk5iPFcy8JeMSLmG3x3hRiJ4nfRmeL",
  "key5": "3TPw3auTEv8awkhDRGUeq9gYJWBYHhyxY3cBo895rWJfaK3iDtzU2EzoqqLsg4R5bXx8SdDFMtb4yUkud5PeBovk",
  "key6": "3paDW7a1hZRCjPpRBxp6WLukaqhyXzFR5PCJyyEipi2KbhsJ9mGqysgabQ7aH8p4GE89XmCw5zC8iyiAfyigAaLC",
  "key7": "1rNEbmHmqUaC9fJ9WZZCW1hjUkXGbp5tBo5EVsaqHw92uPnCUAKjM77B8C4dPPpSzJxQmt3jm8zoNSnqaEcnCri",
  "key8": "48d6uuV5cuzBMNQ2ws56hi7r5oBPBBHvH9SBUTm9sbQLybninSBDK2u5odFRH5Tsm5FbWVCjrER6zPmqM2mkfBVi",
  "key9": "2jnFuaJbRWFZ1Ch68o2nCQFQFRJtVEzJjgvEsPuBXhxfG6dWuJyN8j9fdoDdUPHgu4ucjAqtNhXWkEXtib1sLbww",
  "key10": "5CH6xwxDpnkNWjYB5Rhh7wernyVkNsf3RQybC5EAs7AenUBhkxLUUfg9G9HuMmCmstVAndBQvNVSrc7XMM1K6neD",
  "key11": "3Yj2KPPPGX52NtRHAV1uZ7qyvsDrCGLMkyUiF8kpjkDQHmFyvrAfac346ZLCLpYRKJ4Pg9vcD4yS6oFm9TpqTXGi",
  "key12": "62kQzXEso9pbq4geQ1Z9uMU1HNN2wc6WiP4b2NgR9pT3ZNx8tiaVvzGYPzYje5ViNJC78RKQn4fWTknA3RVeAc7M",
  "key13": "3KM1i61k1MDcnbsGCpmhWWTjuuGLe4YvBpXyyo2CMeCTcAAJhQab8VDANYqNarivK24PXkh2hGV9XJzFeHNvKwnm",
  "key14": "4fpiJtmb7wLnEutwTcnhv9ZioLQ5bq6VALe4heAVAMJkkWaGzTKSboBFGk4mUA4ocePiDXMcwgMdyr5TkbsH6J5P",
  "key15": "3ntf8BgSLNdA1V7Rh1f711YsaSECbxqPSU3wvoMzkJSHP482VDp8GTxtYokfKbFCXMUooBVdy3j8jqNkT4yasqFn",
  "key16": "4ibQkmKegrjB6q3WJZNNn29bsNYVKbN78QsHMtt4z412djoyzgY7gbkrCe6V9DrYyMeigN8jKPE4YASnH6koFQZ",
  "key17": "5ZY1QWvRo9d5EN2uCxke4ag6te2DkLb5RpdCLEKFutfhLFBUq7uN7mr2apLi6mm7UHTG9EaFXkVAtDZ3w5rAnNe1",
  "key18": "2Bwi87ZPW5xCpNCDJoRuBFMCftoAY8znLrAVbHR539LSbKEhG7RfLc3RkorwGz6TNaypVwStizHzS6kvBDBPiAH6",
  "key19": "45M2shzVqwhtMCSJRUUi7D3aBZS5iPpKQhReZFKbWEidEFodWppZb5y5iuFGkXS3jLA1Tqj1AATUx8MD2aKM8KFY",
  "key20": "2tfDbEqU2PBXH1gfZmZ36yBChmpY1BvSCuVEN8rTxeDd5tMAtkuWub41uWB6oiB9V88GMs73yMKgBrHBETnd6Rk4",
  "key21": "31dtHZseby9oAiAowFCC1akgcS9R3kAMh1zX2e2oWsTBhd6R9sjhz1V9gfKPVqSkWcEVDdBhT7kF1vHMPZDacLtM",
  "key22": "2cYKRozUeucHfz3rjScbi3rY75VpG8Sv82LiREY3RqjWuCesarrm54GrH52GenyeHSNEdsQjzv9dbP5bKUt3ukQA",
  "key23": "2BNVY5yRvKJ9U1idLouUbdjbHL9bT73YDjFHcvjp4XYNtKq4q7FwLjkZJvBFTVYtgqM4ji1fpidzWeWsmSRCTnsU",
  "key24": "2Lzf4c9EUSKZy1MSYLX1CQWu8Tw8guYQudJLoR8jzBtkjvR5i8mgsNXzrhB36bDytcmVqyVcCkPtV6PLa845ZhsS",
  "key25": "3jiEdfvRmKhBCjNiyges1qKDCn6BAbQPquz89TCfpa7JipXuZ4dNYzqUJwj9ZJ26iZAn3fkbGbz6CZ47BeBc7W39",
  "key26": "48mcHQgdW438ahiuaqUfRoM8YcW6qc4HH7iRoDjiXbqRA8ojvxnC1eJ3JgTvXh4vyvkYzpFprHCisSE9jLtQAgQQ",
  "key27": "Jzn5ASqStdSoefKNd22eq8HDRuwNYFidadZPh7LugafAsMNNhQxKEUB72VATmMdiC76Dpt8DhRMrRxE97WjHejU",
  "key28": "2ug4p5H4AYNhZFnWhxCcZRdGoJ89P1NvADhTcJMsseZwkuwxCkZesDcM7sMKMEfYvuasYFYBLZU8M9YNpEWmRuqv",
  "key29": "3bGDzF5v7Vw5v6gqyrbuio97VTGFEuskGW1CmZWjLKQdLhEyYWk5HK9sV8YJ2H1G1kfVjRpitjeGa3u6F6Z2PGB7",
  "key30": "4xa9GH3K1YypKLmWcepkEgaSjusLBE6xgVRLMTsSet4zt5p5BSLREeegHmPCarfweXANP3m7PzQVVemjvcRjQuZZ",
  "key31": "5dkY3F6Pe4KDrdGx2BHJ1tADBwcuQPC16d744hMsBbdaJQ6X38koS7DCH6juYdzY4qMtczYWjXtditQDatDuLt2o",
  "key32": "4wDsfk2qUkyFbjZtb3FmUx4gtnXDhoggtje2G85rvBm6KQyKmnEiK51GihTE9hsKuHZKrqAUthSeLyZjqgFcfWov",
  "key33": "3Tvxn4usKkKFzL1EvcerGt5htvLRAi2DvsfR9CwCCBSoc4bTeECXctFZmjhceVRDeRvq3xjPKhCAf8YscLZQmEz6",
  "key34": "2cYvA8KKRTLAj3ayu2MVSGGhcS6j5f62HojDY6HfPuaWUFYRqzBdXtDAViu9fhNRTGvB1UrcQaEnEM8mTppo4o4z",
  "key35": "3aRT21X41f1HTZeF5DrktNFBUBUMeo3pFLgxQg3zSKaF2YFJbhBJGvUWWZJPnkkRnYVD9CbyYtRoKNFRNt6gQ5LF",
  "key36": "2vxj2a3SE15Bfq2uc1vhDwPwaXwDkyEkZbniFVGVsGJFQCvU7Gc9tXDjpypso76BgSQjULAX75eJdd5wtoS7GVUj",
  "key37": "5fJ3gbfPhQNXzDQrkwxikeKyVFQkQNrVnp6UZq4YcngwneEDVDTCqCki11K3wWVqGC5A5KVS2hMSLL39ReofiV8R",
  "key38": "ZrPTRQ9TVE1RCXKQo6TLB7fo4rMzdoFzkWyoq1emdiYFP5HmC2ufMvhaY4fQoGWVL95TBZ989a4WHmVeGJrejNF",
  "key39": "5P34KuH2Chiit1kU7jL3Pu6ajj5ygMsZLbkZDWDbQkBMdmA8QnYdhwPgBvvKNQe6zm8LtZjWFkBiDZNrekE8uw4i",
  "key40": "5rrggFqcfdn6NsimmsBpUe9DR1bjszAo5tZ2pGgBnXeMQYrFQc2FyJnauer8fCgMEX9v6qyFYg5UGKXoZeydhcH7",
  "key41": "3oVdkQnpsfTTbw3k2vND7tGqL6v8Q4EDtuGcgJEPedjCuw4LFrTGgS3PrWqSi4ABJ8kYXDJeSRRuTktT6UmcrFg9",
  "key42": "44kyiBUWpaHxQ7ZNzwjRqGGTVhZ8eGAejtwo3FaVtrzNBhBYzgDgnQZDhVq5EPAEACRy2bCE5hmxwnhHUb7kCovo",
  "key43": "3AE9489SwZi66q3X1aUxEBrphsCTuwjBxBSghqxxwsrZHNv3JQjw17Dyy4nfGsdV36FS8aTff1Sz2R7jUFfBzMtx",
  "key44": "3B9cexX8N4odPK32nZYMoVccQoGyTELZ84xcLKSv1GZU4uMcUoifAfjEzkDQYd6yYjELpKLf4Y9DGcES7FqMZpAu",
  "key45": "5qvFBJ7M5NiSpEq3cpF4P13NsMeXEfutLFM1oSqTQyBMQGAnxN7AqPY6QteNWf289UTvF5SgwpqvQejsyrcZ8RZC",
  "key46": "4fmhdgmCcVgPf9C4UCAT8SSTULW3BAWqzfv29ff853DzkpCPhWR4cSGALrWHXDmgV4FV9GPSH4AJKj5kxsgiW9do"
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
