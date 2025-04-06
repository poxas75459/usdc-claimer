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
    "649vqFfT62RRuzcPvwDZntJekrLCvtFhCdurUp9WiKNdkFyeXDSoogbaxP1ksT99icmXMu9qNBXDUuCWws1dS6Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WPLPN2q7uu81vjzCW4vm1unLBwpRKB94xk5zG3MgmSC68nqXbeNA8VXYC654VfqBAowyzV6V3wSbygjNkce7pn",
  "key1": "Y7Dhs4aUk8QqGfent1kD2QLf1hsXFHrDqmLfmtuEC1XaGqPvurhJMh32obq8RBNvnVrmpcvKsvAQLjJMn3DTQxW",
  "key2": "2T8ajgGcpUnM6bTnvM4QCyvirHWNmnryJA4gmRYEzPNRc86oVyWJTo1fwdxoHNpB1sjy5hhLWVPy5UQLLMtp4jZ5",
  "key3": "554e9SDATA9DEVmSWWbzpu21184oJzSHWTkjD9j5rLnW6kMpjdQZDBb3niJBqjvEvA6RS5WGjkdZSaiyXcHeJ9Rk",
  "key4": "4J1gfwTjxEucRaFNUzRsE5QLnhRAd9PUWe6hPJJtNSsMBFSB1XueUpCcWV7MCi6F2cc4ruHSCDeooKqCn2LeruyE",
  "key5": "3iKXGfzVpvsDRBjMqPMfzrimk9R9bqNox6bwu4bKmUTpSUjS2NvVX6NmqdAyevgSBvqoCWJurwAEwPiRcFGMCNBo",
  "key6": "5VWRvTUVvm2tvjatDoSuuZgVQ8jko8cV1y9o1CnViREo5ApVB6ik18XWxTfbYejHoppDgFoz8gYKv9Hax1yfE5e3",
  "key7": "5g43yKXo7vowDheHgnicnit9TsUnesbmgVKjLjBrC13T6RrpNpvriv3fbuvfv92GupxAXZgQthqXkpsxt5zqwAC7",
  "key8": "5iCBXgAVk2WSzepsYDA6177Uzrn5qjwDM6zGeaQ1PhHGtPRM3MNiHQS96wJG1EepYFCWxDWsr7USAVmjrPW3wdEJ",
  "key9": "3DLnLpVqKdYTREdmqAUHaEqzbYiMrFDJJYpZqsQraPpsgFTjRRJxVCNrtjPJU8jdPKd8P6Fqqw3Z5qYn4JfjzK5Q",
  "key10": "63C2mjpH8JATgKZkihbSbauypxxeT3gKcUiK1HLXXHqvpXH6V3CQe22qeJK3VoL89SP4z4NCzREJTuwpNuv7oukQ",
  "key11": "3rjSfuMiyd47bk5DPa3H5T8SPbZU19UWxcuAQaf5YsShbVebVjvREi9MfG2JMLDgjy1KjBsBkEBCs9QoK6tSkGA3",
  "key12": "32jgwrEKpjiGsv1GdkpB1sW3NfcfnwB92rdj2GK86QnBhfJ9qtakFnLrm4xkzvzV7vzY1u8H4SBa4SvSFr8RBwBp",
  "key13": "3h71rxoAPAXW4oESFx7gATGcyzitGCfWj7d1wdYrN9nJZXCXhCmdMDZBUPYiiksDn4bZxdrUcEwz1TaTXtkqxdkf",
  "key14": "2zWpQCy6YTzB33saMjM4TLkFAMkUaPufmNG8ZmbMXQKqe5SK2hU5yYrgsLyNt8BsETGqCjRFi6kEBPuwAhhe6Tth",
  "key15": "4hHq5W6WLMqaGWWrtBsmiDscSGXy7E7bmW4HzVTT8JuKZu8LXPRt3idg4q2ybK2NGQEwMwNmhKc2rqG6sMZnU47x",
  "key16": "4hmXPmDLmWqRuDwFNPNtx7U4ijgsD5A1G6GrswQ3LPypJh6h8DBc12uxH238JyGr3kops4yqCVVqbtnpxp4oe5AG",
  "key17": "2Rcvb7Dp4gwp1sM3HJ5mV4Ga82si22AuMQt374vY2QVY1PNHtwGwTkbadEo2Vf16Td7E5466b7MyxNiH8dX5pjWJ",
  "key18": "5Yh5sUJT1sgt8b7tcr6DeAgCMX4AF4NnvgQ3WS6cnB3V1fdyVuZ2jarCgrSx5khX5jD6e6H4CmFR3rNQJtEFgfSG",
  "key19": "2S5zWUgt5hV3tgWztfmjZWCQTSMVQkrmGSL8SrGmaF5aDcJqpxhpz5an1sfZeQv7AxDq6h4jnMYf4n5oRJsDpB2y",
  "key20": "2CWUr7Xettc7FA4NTvUSTwSsoefuP5sVNMoE87owevbUbnwyjEtVBRG6vUmD6VSFztkJTZsbytpht2t5pc4vnEMt",
  "key21": "3pmuiAetee5TZi8GdSq3dQggfPYWSdAi1nyWKou8Zgq42coMTbi5Yz3i3v5WQ6EbbCJ1nftXXetYxJhevZg1mvnh",
  "key22": "5bq5WH9GbzvxxuC1455WEfesbX1hw4MbQ6BrfVXjzsWqzcnsRhHCyzQKRnvr4AjLACELMgkGxbsYLFLywUaHanbe",
  "key23": "3doS5eR8BRsNJBmb3fvRE3gCiC81UHT8axHJbGXfq1MyfhueZWv1mh74FaGdxmc8rXG9J33kF7XYe1U14FMur145",
  "key24": "655VFNmcJdYUQqQaPBmJREQ5YkDCjpJiRPF7Gk9CzvaTr4HQyZKAhAVUJQeRMWtUUJHL6qUJ69wHhrJZvxNixTDg",
  "key25": "5utiNyxadHnzwmhZT19yV7yX5yEy3AfVb1u5VuMgBcPJsFm5QCneSXNYDZs5ABM7Z65fZmDEV3q6rjxq4tNESuL1",
  "key26": "TtcuptC6GHhrCJPEL751Qy7TyFjTdLriy3649uHbyQcvSzLDWRoNBvDCX8iFnrCBAuF1yKQ67aPzCDe1sxWxP7B",
  "key27": "4JkzGKLNGuELca7n8iWf7iV7n8vNtdabhVTTewgRFPZeNawDWcevkyiW3z5oATsYcbBCrEwmkBUZUGXd84j8ryk6",
  "key28": "5YDaUd9Y7kC63zosXtPv7461YGdXyM3ohBUoVdhUNZNSC7mDqx8KrwvPfwKCVCQkPmZGCygNiKBQ4qCgHaYAguW5",
  "key29": "2cDhroutL7e7tQAiq8Zi2ygqCEH2T5URy58Tr7c19YUpsucTunHb3fuzW2h3QeioUUKyRYH65GhmbT4U3JZwNF2r",
  "key30": "hVPAqjxNEv5VpidvdJB5QPssRXKMnsVXYC19mznfFMT9AyXcQLvkqs4LGFy9NMd4iEDrAsiNsmRco4QY9ZxHriE",
  "key31": "3g7tY4LoxdDpFh1Nc9uy3AX4HqLQf2B6FcxRjrjxva2Tce4EZLNzqagq1aomatpwhKSZhFttX8f5BtumwD1snpKH",
  "key32": "4iMFPXpQGUCBy7yDWnsTzbP3KenH222AT2jFQnsa9m1SuWy3GKAhR9M4bxHuZASJxeHF5dqyyC2BzMS6n1Rz4QqK",
  "key33": "3i2aajXE9oKJ9DXNDwRxBirxxkXcPim1znSAm5d3YsMqz4WjZm9mNQqqbMaTUU4xHgE9ZFmC85oAPptBo8qFv6pT",
  "key34": "59Xg3tgYYaCHD5BUNH5yTJ5s5fUdhv4jCMfqY6ZYTyyY2ugz1ri1fcJU4nJHSGPk8KZWwGq8Z6Y54pBmb9E3Gvic",
  "key35": "3TjAYcg4QpceZrmVym38H7q3mmpwCneoCyjtFusAPZe9DGATJrtyvkWJt9PPPs4CCcF6BwwErM5sWGrtTeXLh8Mq",
  "key36": "4UbPd6hcWjJHWhMJdTEqRF3nJMkRs5SEC4zR2rEzHwLrpr5PkNuCmXVGWYWyMPcMg7oJoEqNLrqYwDcbXuGUKhH3",
  "key37": "nxBnMQWUg162vYmh9bxXWaTiGHZkGAvNvEW5es9ZZNpxbwLAhvmjBG1YkVzpYVQqdugVemEmuv7KPgYqbnWPzAX",
  "key38": "4SFs4J8ceRaLvQWmGDUZGbUVwL1Gp252e3ZB4Jf9MnpnasPDkn9cqPQTn3pPrNmnFKbmnQB29wpoiUCiJByAfxzn",
  "key39": "4j7B4wzcaJUK5JPgCT8reTp2HJFoD9aSBHqtopBMatSu5CozVNLu8LfV9rpRqYj2oMgwjdG1nMhN7fAqT9nJkj5F",
  "key40": "b6wMvnkD562MoZ3cdzmLN8LJojErtsiAktnFeohfVT7zcqiGNDX65XbA3MaBjuheaBe3fEVCPQJQP3Uri11dy3x",
  "key41": "qmuBun8ks6se18BWCfPjmqzKDwtSsyvzS4h6sYFPtVagnJaVePjNq2toVMkvsehP4pdCVQmGSfiJ2UZULEtsuV4",
  "key42": "3kMFLhVZJe441xArjP6moAoaTpmBeSWkyzAmGcVfbG8Tn8o53BpYwYZQMyav6yCaX6kUx2ixewWXwzFnU2TcQ6EF",
  "key43": "5hbSwHoT914HkhvX3HDC1YQ5AcHiMWTV4y5vyf1qSvE1MWCWoyBFbYNtyzsBWxYNm2KpYWYMTDPTtCcTpwN8vnVo",
  "key44": "4g2ApuUkcoc5ZSNpKvLicZZ2ZJp6KAq253sHKZKsaHtuBLLtznYrVn3oGDggX8aGNewtvkfoBMw3dsw3johwoN5Z",
  "key45": "9QnkNSP2Ed2KD7VWD5NJJUGnxJPgCvYGctiSoT1bEyAjcxCEkG2wdeLuvr9GukDbjFgrUDJ3pP3Mer6anUDebE6",
  "key46": "4Hz7vb7YBaMJkWeaicMdPJrBDDW5qEZZhRdFdGZ6AtTjmcGHWA3AGknwiYujaGE4YDgmaM6R9rSbBfVv4xHWJ2Xz",
  "key47": "2E3dmDMQ5Hx3UjQuDgfcoyGXbtmPiavVhsLSttbTkESm6ktUtwESMSxEfnHKrxjqwBBihqQnoP5RpWaAcj3ErEyt"
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
