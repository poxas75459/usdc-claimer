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
    "3BAkQCZpmSimtnNF4nDuQRtL4UWGUPJYSseuePUaRf7dzGMiE2bWD24PEHcSqstbar2zi1fMaaGZ1ALvqsuoFRMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g5h4vqm7qzCnp2KXrts66kpmLdjVi5GEMyC43XkPqzRmDf7PMUp1RQpMnKPvZJ1ybTkv1HV4ufQB2rkxPBTsx4W",
  "key1": "5RvLHBKrQXAMAJPyjPZDfHyvKGN1XGNm7Mx1wKR7zwQZ8u85QpEXykt1UkM59ZyJrNbs2bzJtc1apeSEawdDou9Y",
  "key2": "3Nqsg2RsoRsyDi4HYz1JSD3KTaHb64x6n9HAaftr4tYBSBnDcVJWTvEEYrrbym4zx1KFXtaxQiych6dkA5ujfH5L",
  "key3": "3cUBLS8FDumX7pm1PzLjgtnYx51mEG2cRMqSB6BGUS2jHVwnwN1ArDCcgAPftoqzbdn7bZymQAHjtiDJa9ZFbWGA",
  "key4": "2xzZkAtEofLXZ3sPtN1Lv9P8aLNALB59e2GDsKWRpdhhbzLrWUEnEVvPRqGHmtABpzYU1egbVNZ4X2B25rgm7o2f",
  "key5": "3NbpLmW5GWwZw3t8iZoarFxPnQBdorHs9mk9XHkFvpdW6KuCGvpQqNc6teMqhNDgc1B9xPt4KAdEjsEom8cAjmzr",
  "key6": "3Sf3kaSnTR9m5x5XGrH2GBiY8Dowo3WqZLMqc99zKftkj9mZJEmyW6v6HaB4SJGov16iiUgzSXEafdKHWCWREu1f",
  "key7": "47Add325ttypwDdcxXN8JZSUHNi69uExyN2mYacimebd2MMGyY82aWTyVweouNkks6Z3AceiFh4wZJqBdZKTtiTY",
  "key8": "36WB7H1F7uHtmxv6cayLrq19s4hWcTVLfv1ggHfjkTQzm3XSxUTfHuh4yfFmpGyy5p8YJZhMvbpgw9prFZTu4AMc",
  "key9": "53ckQEGSddTu2uzE4nj6RJpncPkeCJ4hHydKBFyixVP76Fhi7LmWPbauVR1tMdQyEuCUaJ6gUq5uafKQNxxiiAW3",
  "key10": "2mt3yiVMN5JLSbWywdLN9fHjnBrQnMXvXi6iT3QH9YJJ4czRHeLdY4eA92m3eNKUrX7ktnyRndwADNPnNVpT2Erc",
  "key11": "B5RyJvby8Je3pKHX5ook6poeX4hoiNZNLot57uETTA8bjVYiC6ge5JVgRR34zGDRzFmWifLYGYfx3pQkhZapta6",
  "key12": "3RDTsEgJqM5a3FXF6r16Q9WTdJRUgjG4MdWMZKsTidNCtjXSDXQPxok69VHa1VxCVEXx9ZBu5fNa8eEktm2mbCNY",
  "key13": "3wsVem3vUuKc9pTvNqEKyiT75U77zB6acxpr5Cb737X4j7TDx59dW9XLHVkre6fACuvQXx7BkYnMfPukjPCiUfUg",
  "key14": "31dxqRa7ArgZSU1Q6zD6ahAbYA5qV4BDBVXeJj9dpTLEGUgJYJrsuKpxpfGPc2JTUcHm2EH4drLoEmRgW9Ubv5Xo",
  "key15": "298JkqcavhHxVR7o83L8yqXXuqFFXqrp2pK8DM8Rre6xLTrPdbkTiazrvw584QvfvoQnVMtw54pkaDb9Nht4GccA",
  "key16": "3HRLgS5XvVU5BteeTASyRG6iARaC5Sorik3qeHzavhtryDDwahANdgFsiGg5nUjq7HTYMprdHzYJJVNBvtVsvMGa",
  "key17": "5vab9UtdpCYoJXDJANZvZGgZecHGZdioKRExHw2usvHkTeD66Q6yZ7darpPa52FTuftW2yBdgU1a61wkDhvfxE1h",
  "key18": "3KxBLScz84rDoSyGzSZ6hBzy3EtqLn3vkQ5eXrjf8eR6Ze8Sqt59bER5qvUjtYhjy1hBMYychqCDPkEk63eyiYBe",
  "key19": "nkYePxoA12bnoE1oMeKyhPWBTgb8tn774nbDLtNrtJWytMa5uGTjG3ukhy2WhKTHkZLuGmoVhtNF257oY6mqgMV",
  "key20": "i1RWhLdfp6paTJZU298PSmYbHEqAJbPa2sf94T5vZN8qpDQL331box5zaYFsc11drTfsGFS7aKZfKJP8CYnYkzJ",
  "key21": "4nnxWGj4TjRbafY1ApQDvs1k2HftEZz6bjBXum1kLpSKJB9sMNn9JSw9bTM29KXYcVyWUkcG2srmH3AGPcSjz2mm",
  "key22": "4vjdje8f33AogR6xbNEnVCiAExhssrd6i7NBJHB5gnvSYD4biyM6HRino9VUuKP6T9ymALaw2ky8mD8zUcCzzHYE",
  "key23": "4FLZ6oavS4qdx7xN6fPo8S1xp6aTXLUJM86er51AX8u1svspHWtoKoj8zKC4cuJ3awpP5Ht5GpF3QkWgNDA9SYfp",
  "key24": "4EGMeGkqU8fXsM6C6TC1HJfsuoWCPq2hKdTvGohKS1usGXW8CAqhjeNUGPHthU9Sox922hWd4CqF28dgiEUv9twg",
  "key25": "3Zdx8Uto8rAzFJgF4eEwkT1t3k7xtw77YcPzmWpiLpvseng8USFS68YUx8kNmHDEdD8TjnBmJ1pgsswU4AuU4sZ4",
  "key26": "PN9ow7AP5whZkspLdHm1zQM4xXjwhke6SS3KEUEzq2Qj1ufjUupturcXfDutJXvu7uTU3rViGns7abf6oUDhyGM",
  "key27": "4dFoi6wCe7gm7Qd19iQ9urf6GnqvzspAp5mN8AF7zX6kKyk7LH8k3taG71CtUYbWxZrKmBsL8ZB3GTbx8KKeQue7",
  "key28": "V915hxE8FAiTydDa53gD3F2jCK5Z3Cz1ykWxHHWoSV7MPtDpG7wmxxRorwSMbTLzgWFNuYbkL79ejfGd429xcr4",
  "key29": "2oH3eLTTEyEzrfskFra4cYu3KWCPGVURVKRbtYtz5oDLsBuSnQ3Q8Ee9XiRL9gNwyUyAPrZQ21bk6NPmsroUc6Y6",
  "key30": "5o5AmxAiMm5SbgKn9A6fhXqGKYHjEa4Tce8Mh9963V4dM2nRzhN3hL47PQx6YZuUurjn6ZwBCYXMwKo4aSqBeBiD",
  "key31": "25pH76GLxjfjAbAgmAHinSiukY3ZF3V66ZcyyaBfgNahS6oJtXs2AvTJdeCgJmcP8CAcCRoKC3k5KctbUzCcFzA1",
  "key32": "2f4LH4XRiqbsx5VXgSVRKtkikFy2LUyx7vbt79QX9NkAV3bPmeYSTkWuNgMDmKwjVjvNwAnpq2uRFAH597VKyvRm",
  "key33": "4XN5KJRn8Lxd1yXvFZjb2iPxvx5NdyeSYa7c2zQQWgats6ycQRSsUz9wvGWdB8U3ihD2bs2knyP5CfgVebMJoNN7",
  "key34": "2bCTE7cN6ckF7C2EkvU8vAj3XqvkNWmgeiMfxXQW57kNKEUJ31cmdbzxNCv8YcsjCx8hR2Wak6G6o59qejW2pFsM",
  "key35": "LTkmhUWGSjK28p6SvgmQEQ9JAoPT3LqZbWcDzaVJvASjsR7a3rndkMAmNmqNFzJGCfoH1UnTeopb4TNUXGUMJjp",
  "key36": "D1BT4WxMLdg8DFPeF2pkc5fD5octWkLvZPr8hwJDqpVvfinJA1TLaBcoXyKB3y7hjXbnzFrTR8aQiYf2UjB1HhK",
  "key37": "5aqvstKErxCQiXaVpprodaCr626UXdmpZWAyggmMmhEq4E3CbASbtjcaz5HGUjWPDdAAxqKSiivHRtaComs9PVne",
  "key38": "4WvHPEKMmhfE86ayM55X1VodXaMGzufSjjFQTvxSFyPWJusUvuKXFRjPdZewfob7LUTbUGbXmJ64YjBnVbf3kwBf",
  "key39": "29jZr3P17FY2zgQka48LGqCBeXCyUnSVijR4uDocnyLnPZPrHmGRUc8c8uhUPi359W5RkAPn2GuynEu8QmLC97kX",
  "key40": "5kN8UirYs5gLubmaZ5MCpgjDAK8bnsbbf8u9uSadeaGhdkCEVRArd2SbbJrFBuCqMNFKMVg4ihCSdWPJYpkPUQYJ",
  "key41": "3pjFpkknx5ofYhZZw2uuW2TDrdomYgNKRe4cGYdZWdrVq2efzGruQtpFNxUCHA5CSUov7PNgwdPgDLweTLf6YxHo",
  "key42": "21jQkhQ3krU9RA8gL8RF3P3xSezpLtuoNedYg2hkV3auiDf8zuKRWTK4KABpzqnNGEqzz28S2GxVq8JYQ8cYvodX",
  "key43": "4FM69MaFwDb5gKxxaww4bf8zzgesYN2JDMCTnYbxBiqYxn2mKsGMSbAnKevrzgHuV9C91RkBFTTos4adbznJw6Vk"
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
