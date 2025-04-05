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
    "5EnVDDYKCgZKY3DfGyHWspxQPjHiPNFt3Hh5CptXkkbPENf1obNTzfQd44iQDnVnHxw3toTvCQzGuztfoaxxw2Zf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DACeGE9ZUzeCLXBNaAHcpH6LuRpZo8weSWDcQhwtcMNdu2xoeKgsKVT43t1bWuk7bZ39TopVwCS7qyNLDNwo7RR",
  "key1": "V2inb3ewnbb2rGK4REkXi61Ba757GRAcwC6TCzmr8UuVfGvV2kanTeSHSbEV6mtacKk8BE6eTUz6SKQi64S28Kk",
  "key2": "399NGWYvji897rYnyT4yFBMSNDzFHeX2GDtjKpKBhuJY6Fs37kXJ2bZRvW6RgcFstSnfHx6JpjFsJwyDd889HwUf",
  "key3": "5zkyKFpvp3wkwq9dBffoFxZxBkyvVmsW3uLtLqvh7EDEBeRm4CV5HZRbFtWenyViuJVY13wuhm7K9u7nrLMMmUj2",
  "key4": "2TifQ4G3uDUyFJCdt748W1Jmf4qPbs1rFarRXm56XPDzaky2BHSgv9Z5GXoLEDdUpC5LZAyYKT2ddyGFDQnLzH4y",
  "key5": "4TvGgh5XdTnHc4Hp8ZUAUrbnRq8F2oNCGaChHTBVgTt2DY3USNDiF8bFkZuL8oL1EY1hVENbBFSRTYzHQgLBGTrw",
  "key6": "UZvEihtM4m9kjFQBgoab4HQrCYTYcaDDtKPGU3MkJaEru7TrJr1fcKG1uT1VfuXo1rRaHbQYKbzN8tJV886eRgw",
  "key7": "2NaYrFY4FawyMsHCoz4bGaYBWTH9fs2KdCpZBiAVuJKBM78GpSDudzCVoxGAdoNMsWdBBLcUEDYKp3k18kRBY2xt",
  "key8": "3TDHvHciBN4EKxp5EAomoqTgvhtfWj1SW2dm44HQz7H5SujHdPyf33PbGoXo7KbcAdmaE1xfi7eqxuVGtjgFDhUi",
  "key9": "2zqCUG9HyamkRok2dUKSKcExbBC99AvHL7FtAHDbr1k4DKT7yZog3kYkrkehUMYbUzePFikRueREQq1sHn9Bs5nh",
  "key10": "2DUVvCYFG7JHDoNaR62aLUiZ8FPtXu5dHon6Vvqmm4c6Dkj2tiJN9LCN6BkhKTQwGVQJb5QtoDUe5Xq9AncAU7Ba",
  "key11": "2M43HgYUDYaLZh4GpV9oSpAgMEZrFteHzdcxodTnPN1NXidPxQemL7bzpTRFT4RDaE1U7DTM6vqWyJKXrkybXjn1",
  "key12": "51VL5pG16nWDuY3SNS2cx2evyPXo9R8vUeEbPyTRhDXdvc3iKVk2UUkgAB17i3N2woZ8TQBzPVEYfAaPyiFEf9CQ",
  "key13": "5WLTKe7sSBKeEuR2sqyiuHx2N3gk5gqLRJXc4KDMsuZxsVjBPSkE9Lfz8UwxBn3JefseLJc9c24fmZ8dPFFUasG3",
  "key14": "sGTPJvem5Tg3X1egayEp7q3sLtkdPFH1ixL7SdcjUtuD47VmrXNPn1hA84o39E5z2jDhgFrQnAr5F1RiPb93hd6",
  "key15": "5SN5VifpN3W7Rcy3ftApiz6BjDcsDdXMhm6UcBiTEABs6TXsAncd6QEPqqLxeaYkMhb7vWJmq2he34pjcE9TREfk",
  "key16": "3Z9GgxuzQrFyZmuQrkStxPPEue37wcJeCs7gwqiFscpx4rWQTNAbtcwoUukTXmRjcC6AgfyFHG26vXcgqre8Z1RZ",
  "key17": "2dpLhH1Ch48vCHX3DhHV34JVuam2Eo5LMMtSU7r67V4wG65368HPqNZ3LBxPWC5SVEVfaHM7hpbdRhxyENCSnfqv",
  "key18": "65r77HehoZC6oyN3XxcvE7iieE7y5kAo8NYrn11qeuuyLWZ89kgZxpS7t7srLqbANtmgmBjcnhbQZnJePkL5tBVy",
  "key19": "5NC5eDYMthJBuzcBFc4fZNyvD5u4SsKMM3r4g4ktipjERcnQTU7hSHdiAQ8cxaZvw42ZRA5DD2J5AcFBB8f6MPVi",
  "key20": "33G3knpX7dqHEvoDUZsmwRQw25CDQdjtHCfmetqqzvQqwZt4H5hu1v9y7CPKsd8oubVJdoiAPAS4Qxku4SZ93Y8P",
  "key21": "4Mon2Wurj3X4mpZFL9YyZKFWtFnxgYzNvrdpxtiMFfg6NxoRgxaUqERbgHaBiLJPY3qVKHLKsib5rPdAbkdJrq3f",
  "key22": "5ZD3C5vjfJgwF3A6hggkE9arCsR4LmFYQxCVnwivgLZkpDMoNri7ojmuatk7oCXTUpGb5DytMPyfhn3mZiMi6Ug4",
  "key23": "4nQBG9kKx3hhM2VfMwxdimk8hBvi4834NGL1oEfrrqu8uAKJjfZVeuRWHerZFxhxGjsHiFcrMaaB2ZR6r5Rig7Rt",
  "key24": "268E1GQWhbxbURNztrLyKwbGaDfkfZKaQJK4dc4y4REWzgFBW1P9GVN7HdFYUnd3w2tQiDzXAHFBKPXb4LVJHJZw",
  "key25": "ZDojQh41DXDMjyELHw8BCJvdGdK3NKGgQnhmRgAjZ7mq8kGBcyXxv7cnhCy6ie8YTaSkdxMiF6JtpnN6GVfDVX8",
  "key26": "XA2PB44WkBoxysPkLd8eMtbxbT2bVQpevebniKvm1NcvUpize6nUsskXKWoDFhb3t5ucLYuy9qrcV3mXQtVwNSo",
  "key27": "2Xwypifq4JmjXaDXfWLJPisP36py1VqDLRtXRrHw583VoBWeQeoNNeQe5eP7MgJ28eV4UzXyApU2BSZ7wEBVDo4K",
  "key28": "64PFivam9viaEUgg7Rg4Ds3vVVxjWef5Smg4AimHYaEXkyudps5RhNvpoN2FtFjQ9a42spg6qT4BrDvS9SQ7yroL",
  "key29": "KdppTHhQHMor5qvTa71H33PmhfyLs21v9uTLvhyx2iBkRnt5hLdawNz6avDwCoAJG7vZLYgayJtdsVAwZCakgeF",
  "key30": "3eh71Vw5N4f4eZ59kp5bqrht7B4wMdJPY3RHRfXVmzvwCW5Ja6UNqXTSKDmsMmrXibYGfC7jh5pzeNyVz1qouZJs",
  "key31": "KCMbLSXfsBAL8hKES1hbXjwZ1tzavW8pmT66qBsbRENkuiDWpqoibpwt9rpiUamiajKJKCQaktpjqL2itBi6NpP",
  "key32": "3MkhvFmw32X9fxGA6dqSru1ndFDpmMykHuPyds2yHxZqatEFRhzxeBAr8Vh8BgkqFU24t9yML2jFwBj54PM3BjvY",
  "key33": "5ntgk8AzuWbRCM96gEE7nE9hvgXq8TMiP3badtuSY4iFVpNq9qWL9J2uMSvCJfC66kAtpndyv78kDMhSemUysGv8",
  "key34": "4icyUkraLUjMeXKpDyxvCofFJ478cD4GqaAJHS15rwqfet6zjPEcLCQvNekuqBRWcFGooSR7jGLWcM57bCFEcZw8",
  "key35": "WNWujVSNmkStWNAoZWadjmFUQhDxtMy5PVC1usmqZFfYM4o3rbRtr4FiShrs8Wh1z31bfkgpgrJ54tSnhMBEJjn"
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
