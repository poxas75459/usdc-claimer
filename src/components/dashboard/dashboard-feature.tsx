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
    "4Ectjm4vPNpDk5NVFaydtwuLNLpRD1kFa9YA3oXEdY3Y1VL2qJ97ixqvcipk2Q36JMzt6MSBmKD1wzCSDMijvNa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fPcM4VKKtxnosBd2RznBdCmSDfMP9MjmHwtwP5bqe3mDLQvroNLKrU4zzi9ymTorB29jhKr4BeXYd3dzdZpQWme",
  "key1": "4ZqKZ9U4KY82mtTneJMWzvM7vJE7UUf4hXy3tjKY1bAf7TyZGYD1MS2xqpm3UiT7ZszGt1JZf7DMXKYU2psF4TsG",
  "key2": "pvg9eRjgfJedb52FEG6wbR7jimsRvdGSNUHjs4NjrncRx8e4CwjUn8ZZ1jUifrctbUThgtztrv9bEMG55HBVHmL",
  "key3": "rAPGwbiNQPq8BJ3cX6PWRB9dJzJceLTzkfhv93nNcQLCFdcgpSKauRCDpNARxWNAjniB6E9QYmvkfjVGnKCHMtb",
  "key4": "3ERUPXKrm7gsfNn83BGJ8HmhQ6p68KPVrCaM6ypbNe1ApyaPNroygRnv8UmjPnSHkB3qVp3BLQ8dsQbx9SKHFjtR",
  "key5": "38mT7ggpMcseKUjfeemeTLmjLmoqhXvwtp5Uh9bDGSv8mrtowotm2bJLfAy97VcEgWotXo5oWzoLAPpG9XTRqP68",
  "key6": "4eaSrGTYM7CEWsLriZJXriUxE3jdNbroUSYee65vyLseSh8tZuckErm41KySTRtrTJ7FLX7KQidDTvjRFL13jibR",
  "key7": "3NUMRBcqwTC5wRkHFk4w4oQnj1ndsMj2HYNsBSdqtssioTBdFhQv5Riy71a5DZC9BvtHAhg7Y1tXvrBpwc9EYxJz",
  "key8": "hd5byz8ug3MzQXhEWehxs2pnDBR1jHcVZ82gKNiYYWv58SsH8tVovP9QC3ZRX1p2bvSH4nyazf8tfB8mhEfy3sr",
  "key9": "67V79sqofQP1sTS3cjAm5vMQ1fTwC7V4Wvcck7aDcMjzieXsAXw6628Tk3kaCwDLfMU6iBVsXNUHzbkJahcKcgB1",
  "key10": "hpAMv2BJeP7gErT7BUzTSoYKcps1SpTXPvdpHG1sPcZKNJKut6iRfgpqcjKwYLgVKjkKaU19e1WBDz9wFA53t9o",
  "key11": "63QJZVpvzLBaeyVMSAyvp5AZDHoUVREdJCsQvDFsfrXrTMd4mdTcdAkWh2hWjrtRg8nxkDgz62fakhu1RdH4mTJf",
  "key12": "5VuxAsoMTQFbUK4xEDiK7DJ6a7NTBBFD4y6otRBEEAmxWME9hvZvya5rJFA9zkNtUT7mYJJX5T1MHoA3x7kwwdMP",
  "key13": "2k4e6gDSFyp1DA5xcCNiQLooFauFJ71bdwz5uB4nDe4EN7iLJdznFGR1Ph2CP779iGpDZP3JXU75LjvrCVfPaSGc",
  "key14": "48e1HYWUzxm6vXto3xJEKmXK45gteCpvd8PyTcimiC9hfd78HCAyScox9grwWX8oVUhSQMP8ieZjnqSXHpe7AzEa",
  "key15": "UJATBqH9AZodLQsgx5F357MwFx2rph1xjAYTTS4fbsuQkmQZbyyx1i8YYu1XyhBXYxN7oTgn5J3Xu9u7EMDy3BK",
  "key16": "261ZKPMY2wNr2NvXhuouQaFzVUHGH6WTTz7PcVehq1bSBHNtNHEvaye4oKHFXbpsbtnMmFMLrtdT6Q6A1Puo2Hs1",
  "key17": "2kWymFaVUjokPDVBDXQLHzsHLuyeNuMwt9ENYzZevikdq47DnysgCvW32RDEmNEGE3P3Rc1hpV3G5RxAQq2CB1zC",
  "key18": "3fVsKg57AFhfjfR1FHcqBFRWoERotHvqoCV68ZzYDprowZMW9HojUMBcnK9r3DsEapFHQG6FstFJkvQQkjampEia",
  "key19": "4473JmqTxe4pjuKKcaW5FPnWeX5FXYASwLrEyGWv9ihbo3PuESkgeqXV3NStWpD8wVExv6sKrzdvF9WYnvgKMruJ",
  "key20": "ZrLgBfcdbr1sSqnTb3kcks8MDrFRHy7m4ncydANbrAdXgtEWtgexWtCdvTsKxeDTPYDedwB5vJyUZu7e7rd345S",
  "key21": "5m4Ri7iTTWYPf8PRMXyabzZPtNcuXd21JM6D122TV9M4CBgvE8LL2dQgEZ892PceB4saQHgrwyTH23xP5xCP4zuz",
  "key22": "2ubrJcGrcW9xeAFeTNBfN13W4fdbBjMxMcbwcruCS7eptJRvWemGFSQFEVo57e9cuNujwz82V139Pn86JzwDNpiU",
  "key23": "2ozt9wsGsdo3P486jC3BE3qYsdNgW796HTgAa47xkuKYQycwSqzACmsmDZdnvXVYCNUoNxTsWu5At3Sz6cxQKnme",
  "key24": "5aY2ZibcaDcHb4jCSJtYHFAHSMVPcHjnGMojjK2ZYRG5pe5hRkV7Mfimsb27oenCiL3kdEqL7vfizjwJhRoXQQFx",
  "key25": "2HvhbTwwMxxo7JnYerPeyLqCAFcsnbUnG9gNgWgmZdBxVmxC97Kh5yohAcH41s9DwZb7krWEJn8hFrNNN5fRrxzt",
  "key26": "75jFDwKcduXNPvk2dpLkEpEubvsF8KyA5Rq7CQd18Kg7kP4FjKdXE47XG8PVxC7Yj1jmvofN5ga1GC95ioJSpuj",
  "key27": "58erSFfBJ6LoTAV8itwyyeRtph1RSHjtomrekSmx674bWuY73zKpfnsHRz2p2dh28tqhKkMdmwFh7UhrBZ9AZMiH",
  "key28": "1223SuNtDDumABd3NHXDmyTVdRWU2S5tfG4LaRSyP1jgXdL1a5WfeXDVgLfRxaVbfG1qJDcekKJZZ9EERCvSZP6N",
  "key29": "5t3Wqv4oEeXSQDiigc4Yek4RVgFU64JNCdYJHq74y78eaq8CeFnCxeabogt5AiGMEcWYRmBiDhWYYrXMHqyJrLWi",
  "key30": "UU2kDAjvTxDttD3MoUR16WhBKAPTRdf6w7zEbNy2oxdXYxGbcZe16H2z6K9K2WFkJ6Qx8WGVCYUL2hMAdXhkX2w",
  "key31": "3ZNMb7NBY5u4kSazbnDBdWbiv2ecmXPdhswzN8UBnCoTkw8RyL3GxRA4mwWoervu3YZer6be8UGrYTT4dr1bqbmZ",
  "key32": "4H8WDSymkQu1NTEiZELoTMpe6G3Y9NjMiem4DjrXnG8DuwvcvwZzoB5JkRoM28QE64V7eNUGZxkozYZNECRfp3qg",
  "key33": "NG2uTwoSsfJZDPUi9ThX8bB9rYYZeuxYccRJGqNWcSs7RGs3qwTtHFRtVKDzxEGt8FNpyn6bAEaiLUySiTq6LVm",
  "key34": "4ELuv49qpVtTk7ai3MvoRCNaGLC6yyGrk3eKoNNEw1teQj8X5uBwBFAcewmwsuGg3HYAeKQSXqvSdf8QT6LgYcvU",
  "key35": "53bECycrVhoFVG81LceHz4bETig4T8WqDmtGeCPZ6XJaqAmik7m9khB21v9EZMUE4xwaqyQZewFuucJhxnoeSXyE",
  "key36": "3EUB5phtfTpA7xRVaWCXXi6i1QrL8VnxY6k4zH8MMaitdL3aWTRPZ8msTCeMqT6tc2B2rPyPBdVmpwM8KnbmRRJK",
  "key37": "3xjiMxe6wDbuggzZ4VVNvMLT2XrauPn57x3zjRBsEYKJQdSzXkPqDj57TKdRdg2HKtVr6svmrdaXZ56XKpHqCrKG"
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
