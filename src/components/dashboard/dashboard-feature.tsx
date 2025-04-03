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
    "mJmsDugsjMtjheXnBsdmEbouG96oWpAYZURsGVPiYdzY6og9fmnU8ms97srd55idGWhetdT1RRMXEyJBE2EyzyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WCHzyR6RM5T8jEkcwTU6CrAS38fMxDut6wcVgN7xF7P3hK6FZTvozYfxUDj8x2WqUMeqwSVHXB4kEFEM1y1yWyK",
  "key1": "4Tn4p75Svh5HFCvpFEbfMigAuDDxNfrVsBDMyE3k9rohFyteRdzSDJRQjwizk2P9JWpCXHEXoeZwSCgU5bom5nj9",
  "key2": "5FNnfM3xvJVuY2iDrm73wuhvfLWNSNnkPpp9JwqPg5VyKaoyhPPrfBDPftxdk79s2YeJxcao8yfcupA5qihxzsuU",
  "key3": "365MEiQYmApMqG83746TBZuqr3LPhGciE73FXHmLRqoodbvPXWa59Qg5EmZmACowKAJAxjWqfgoo3jH9Szzof5K8",
  "key4": "52AEaoHeGoWP55TZ1q6scYDkTZEZVY72xSjXvWWNtjSBrBCN3LwTcoLCSY5bjMh38MgLDUhN97Jfw5q3XKdt7k3b",
  "key5": "25kfgF2Eo4n1WqahP91mF96QKwfcgScTQVGAHs9vxgQmqmddTiZu3fwf6LoEUtwiNo7Eazg5U9fYULakbHkDYbrd",
  "key6": "3y9eBXgv5jtsYFCy6vJUYG11jdbgvpyzPaoKkKbGAvEBBJr2YZsp4nwnyiCKJYyjvoFwA2SPvxZ5PGWAn4teSnuo",
  "key7": "5KpVkYxs4wFh43BPUkwECVKFgPQKgjT1sR9m7CAGoocLBsdghqY5o8RDCPjbESXQheLpkYSadSzme5dgfME4yWUz",
  "key8": "5wSW6urVUySLtoqsUAaBuufWR4pCdf55dRABeDr7fdZgLQN54X324fXfWLunVQEqSZF6QQa2xpK5a7JAXNz6XfSB",
  "key9": "5faxdZqpQG48W2mLcqAPyZkphvRZ9ofqX5Wvgkk8vVAZi2jM88WsEruvwgFRguqHGvcWgrcUB8ngX2G6YY1GWTct",
  "key10": "3MQSjRnzB1yA6LbyvX3othzfC1f6TiExSyucp5L7gk6r5vaLXPUJkfMZ73xbYFaA2S33VY4xpYkXSoArnLn8yUzj",
  "key11": "3NNDciuNS2B9ZgF7UaLd2CrwtUZiCsRYAwXVvvUenrdtqEZrxtCVyKEAfVm6mT3sCAt6EisJ3hZrhaF1PFMa6Hcb",
  "key12": "DY2Z4M4LtCJH3pUwR16pL2LQz37bYqFEAwXsiFJ5w4rECPK4Xc9MYivZXmmQNZfq3GA3ceoFaarYJUHaDe6WvuQ",
  "key13": "5Z9nUD3BEsSuPmXcbjtXXgZ59c28tykaBG2j7Xs45Q5Zpn424ScTojvq53DE2dwLYQcWuEfAnxqT44HrbJ6jHagc",
  "key14": "585L4oG4XPtnPnJwhKJnLphxjeAr9G5hq2oULLMBSNncZrn2XnsMDPmT6AGuShAZ8ReWurKY5x2cPX1bA14oqQAh",
  "key15": "5CvSFPREX4AraGGHAjFuhX3Atc3f3Goqegx5eMm5HVLfLorM1eSbKA8VB4oLK6JggR4ShwKdCpRKCaHDNeLVsPC8",
  "key16": "5RQE4ed7w5TZNbY3t933fy1vQDYeXvkQQkPUJhj5ACHxP1kAfKbmtAApPJPsAHBwssVrfDixnY6bzYbeZYvXv78C",
  "key17": "3jsyGAyuGh78ktNxYtD7P8BJ39Djdxw73gxcErhdt1QGCkfoea7nLzBvnCZY69SwhchKXLMnKn7AGgipg1tyHLLk",
  "key18": "3gakgrbxPrXgrdLvcTNbMXdLMepgQLcDYsTFs7ShfLiJdDn6d56krhNcPicQvwKUKT1aaP6aBSxp3CX8xrpRVTEL",
  "key19": "2Wb4FS8QSvZcYJ16efdKjo4M9VuNDS1KFwXNS6vimtLJfw83D5VfVs7EKXFrmRVCMr2D3M4RjYwRPmrGAoMmjTvz",
  "key20": "xgt7A8DafAstCdax5yXymxapNqcfM3d9o26yCW1jqCvK5cJhQXeqGeDfieMgC6q3Hu2AfGhhPsA1F42JDMVPiKC",
  "key21": "5Bfmu9ERWwjLSeATXvSMoYZGgCcSPTU4aBRPYYj9US7r7EUCjui4K8rB6dJAk5t3SCUot6gprTVqkpy6ib8eJStT",
  "key22": "37a17UJYru1HN92ayPoUCzjbcV9ksgC1WURKPvpxvgAEMqYq3jmgLkR7PSE7zPpQ8JbXEZ9kwUP5Z5iecTtua72y",
  "key23": "3uLTvDCUhEvrsLTfb28AYcEWkkr1Y2583HtTFNQH6iRSwPztNzxBh1bRnj4CnLYLMAK1Af2sqWvL6oaroojypb58",
  "key24": "4xjEGXA1TnNwzbusGxe1q77meA4kRpSxuzbZSmnFHpHPK7Z78BqghpBuaeqsvwyJFJ1KMwsJk3Vdmvu4yJacWSQp",
  "key25": "4TF9bJ75HiKKPudniSgpZQbrrMXU222qnq9vMA6Sx891rNeMAhfUc96kQHftw85dYD6Q52cFQy74ddJ8LTJG64D7",
  "key26": "nKMr8CsdQNLgSKBYNRMMYpGPrJokkyQxcPv68YN7NY2Mc2dEMkTN1qsDUhaQbtkaFhaHCcnFxLsqQzTt7c7TA9Q",
  "key27": "61LPTUdoUDfLpd2G32KyZNrk5KkMYYaKUbAdscjRp89CaB13ZvYxffHt7bp8eKvQFJiSSMFZQoVkqerNsA5YsVxK",
  "key28": "4ZPFV6LLSGSHS5B8dj3Qi9ndUFwpDjJwv32ocdSWJ5h9PasE7uBWNv3cqYc6gDA6hjXLj3w8TbNxtkZat6Nbtjdk",
  "key29": "5nATT8d834ogM3yGzdhvhBTrzBcrgHyVWYYCE6e8fCcsQNqrcxHnz25PxxtAy4bhRkorYn2FbbH28kmMjhT71LSM",
  "key30": "5Ppyw9juPCVrxaQuHU1ogoW5czgYMDsmdkNoTyLHMvTsCVKBxcBWC9YR9vejcGFEy7C8iMtdjQbdCPPBvqqDmrX7",
  "key31": "4spb9KaTc6X9zNHSJBfNGk7e7HHhxEYjDvbH1mMAVHsZ3qWrKUHAViLBJh6bSk2nsLvYhr46qyZwqWCT6ZX4FrcT",
  "key32": "4haNsUnNZfTQttxV1w3chE75xmEpGSrnXhqyoZCnBApTnYMoZqEv242GKbzu5w1oqWRZvjhZU2y5NeuaJQ1Q4q8K",
  "key33": "2e9899qDtGsVHbkxAaJtYVz1Mq1QyssYS3srqjGFqc1uLTLwTdSkRf7VB5T5GwF7sRqozNoyP4jm3ivp9qTfcW1p",
  "key34": "3q5NSeuW6zKy1hWJPh39XJZdE5WaRJ8ShAwa21wfanCXb9qhMnMytpbxkYzUYiT22esdTWk68SZug3BfVqHT24Ck",
  "key35": "4RGicLMpSST8B4HHbSoKvhB47acyyYU2Y4NLMpEWN26X47b2GCVmBKvi96pWU7f2Tn8UUkRyxEm2fhYZpkDsJLdd",
  "key36": "5G17iVs3E5LmcHaKWoEd1jEpFVDe7LGGS8w8P4PZgFoD3GiksR9EZdtYvJ2cfiSf2nC7UYmT3zMtNtPpfgJuT13A",
  "key37": "p3Gk5t6xiFY9nWVFgiGaDgEJCx9eLwAYzvXUcpsPMMjZjT9M7RttwiHFPqbuez9jYhD2FFwg48RrUovy4LRrDxS",
  "key38": "31LMEihHMNvrWgdDt7R5dLDaCtiAk23kyUEMKWBzvBoTX2fdcnKJxQ3S5g9hpkf4vtDyNyVPBxshrX9pe9PsGqQy",
  "key39": "3RekBWqEFc7AUQMN88ARw96kt3kLZTjdzd675DkpfYNd6P3jmmXUBvbHbGFRP6s4gEeeLfNSCBapnK63CrnxMbDN",
  "key40": "4BBiMhUKDN6Y9qnd8PHreNuwx51S2PuiXsZFiMeBMXVxXMpZGKFzPEKNea3ezETYeCQt53kidQtPb2UdzzH7EUZ3",
  "key41": "u6pgwA9wnrF59RjHnZ74t8Gq5yFBcPM8pgKvbV922hVMNHYFF6iSSdh2trdzvPJ82JrYAWi4p2viH8KDdqxdGMu",
  "key42": "29pzrTgicvnecB2CRF51AFLPSNEwKYfh6BbFyRbBBCDfbAqJAvU3cnGNjMQGvsZUBZ8eX4BfyBPy28GV3FnZFYPN",
  "key43": "2JLNdzK4LTndLGBCaP3UVDR4R6HiiBzq6K6JuK3qWUBYT4TRYERTMTwozVusLiEd739VN3QVVbamBUQyNLu3FZWG",
  "key44": "WxToQa1ro5Gtj8rztSA8ZmZEDJ6KuS7gnYttibnpnZjGd5BxQ5GnBaP8i5AMM5rm7UwqbrkWtezGDvwRJ4ZetVV",
  "key45": "3qWK2ng3aUnQcDEc4eFsJsYy6tSZtpHqbgvF3nUC2QycZTa73CugADvmeBWfbjHALyh2j9SGZoPRaon1yUtx6GbX",
  "key46": "56LnBcMAUZ8X5p49QfpuvadqXmzdZAVvDVfJPdrGk6DuGRDmVTqKzb8hkn5ruWtMtnFjQRqFQ8JKDfXoPwT1f2fZ",
  "key47": "sGkFiwxH2J8P42vVw7UX1mWwoHUSkZmrAXShvTs8Z8U1d2p15VGiqfxGeHocawS8U3Y2ZCB4t8dEiAgWMGSto49",
  "key48": "teoLcme563w7obBrhRwzMSvTxwRTzkecQqQKXoL9hCTnoAy23sXyugQvLt2HEQSKyxNqM7BD95zvLNDbvTd1FGJ"
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
