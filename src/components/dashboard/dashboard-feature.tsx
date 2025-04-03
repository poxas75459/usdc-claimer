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
    "3Wq38x41kTZaEyBQTbTfuuvrfWKkpUVbjhreDYFFwRM5UzGShVZrzbdErQ2b9gvDJJgANqFBbKPLL2M7M2obhGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "458X92o6F7kn9iDjaFkPPmKfgiBEVegaoQVPTi87M81R1DC7eZvvoesnoCVphVeJaoq2CwH1u6fpqfmwHT4VTV5w",
  "key1": "2rqDejmo4vayH1PraXUY59NZZNJzTSCqdVMZc6z7RptGQ83S6D8MC4RN8G9qVFaiNviG4Q4Qsk6gFJ8wA2P4cvKq",
  "key2": "bbHM6uAH46ds3qM8brcAiujHkXVohyw83GSp1aqTzjQQmJBsj9vTXew7TDiwZmhYypz73GfX7hAvtNKeWk8kjhj",
  "key3": "4vJamPyygyqGLe3BTCwvZnRLVSgLXkUFKLBU73METsarpfEvv9KqUvyMjbdDux9dZ92fn3PaD426Ri7ZCk8owLDq",
  "key4": "3yw7Qwcijjf5nazVhcbvoZhdZTWk2c6oi4CuDzCwCDDfUn8uFLP6eNHkd7Yh9sMKsfip6JfBPbHnApYYUu1V3B6i",
  "key5": "gzoYzzxkMgqhi2KdapmwKRTuJTpGsdKXsmg68Q1HEaMkx3pzbyqWd2wFg1MCivM46vAy87FYzxd165EgVYBzeqA",
  "key6": "5iHfer6LvW5xHCWohdjpui7peA4rj547xkgguG9fF3NHftdPPnWGibYKhQkqPkc4vzV22BtDAfocMTa9u3FqjeBT",
  "key7": "2s8w9kfzHBhcQ5UwuAisJXLzZ6KabYMMqMiaceVZ1Zw1wW6jyF5EkWF6vhy1Bauo2mxaFGUCbYjzB34zwGdDxMBs",
  "key8": "YxJMuA1MdaFmLorFL7cjz9ZwvrM9Pp16TJAqaKCEdKkLtY6x5nw1agsAzHPMnffzjiMRbPPozKRnoeugTrcUvF7",
  "key9": "4EniLse49Jhuggxb68HabNnMXEcowV1azMMKJrrXUFKLUoW6cb7fdH5fz32q3xSrp4aHd3krV2k8AtWvJPpgBzuY",
  "key10": "2qyTeKD9V2ukNav5nMm6jyRkP52c1DVjfxGnMStWkEwXpixXRAUCQkZEw8KN9UpkRXYKddu7cZ7JZ6mi9BYPTxV3",
  "key11": "5jDbYKE1VpzNtetMzWHW7y9YsT91BCHR4jRijbyP6oeTULmXzjtdLSYba8SzD7V2zt6hw7KWnHT1vkwN1F4V6sVo",
  "key12": "4ctVDwrpNLgn6THBVkq6DL1hKaqekDL8PDjpXo2AMo31FVgEaS5tC29276wCgu5Z39oiaqaeXQNKCMAJTGmpxBRM",
  "key13": "VxFW4WoGFQrnUGEprNdi8k9hBKpfwLiJUydXECHinvaHrvySkztMM9GfyfnN35zuhg8CXZ4XoKo59477jcesCKH",
  "key14": "3T824mFfdLyBkZpdwBwHCqmVrSpkydJux6BC2y3Etv8ukgiADyfi3cqmZ8eigxysy6Vr4xFpqLfzLJGnnpZjFkQx",
  "key15": "5gvScEFLC1Xdg4djMag5116niw7hU2iEan9NCPaxn1sarLZUFToz3cWhbCG3bQY1tQP6832mfS9iD2rzKicFkikj",
  "key16": "4b6G3UEwWcrJrVQhvYUESwckATvop1QXCti2Nx9GBQU1BPDhAfeJkXUCFsmC4wQ2h9bRJr41HeTxb1zrCtF2zLfE",
  "key17": "3u87zk4nBdrNLFaJkiUcJ82wtkSK2RVdo1MNwCnwRxH51Jh96BYrB3891va1PBvaukyMHjGqjtu5msGayxMNBG2P",
  "key18": "5ZVKZ1xhutDx7hW2VfJvSxTd8rSwmwSYBtenxJhpLpFYeTSeGwGgKydXKTavxDSyEvjcUVkwkNCRQaKcV6e6XU2f",
  "key19": "4RXCiNV17oeYEs5VW3sF8W8RAF9Wc75rf6pxNKD12wf2zP1BU66aumgBh1TkHbsZWBYnY4ophzbsNJYjpEym7i7T",
  "key20": "4GRoisdTL7rL4bihfNi5YfJXN5uREN2VW42xo43piJwNpHgMbLnvHc3CHuxnh7LNcFKPnanioxbA6nHY4CHh675J",
  "key21": "4dpLikvgpsNgrq3eL398xD999MW5F2ojfFjUV7ipwVbeK9KEV4p1L6AVqWEVRRJjyKBkDcHDrPzSDELGHUCjj8cT",
  "key22": "4TYRyQv1mDoyvHKr4mqcNJin3sHZCYqbLUn4YtgGcBSDZtFrfLyzDdE94WdLDMYEBrDxonHHxxPj5aRjpon6oNBt",
  "key23": "43cgPqZpe6Z53vdW2X1iksjsRTFe7Q6GV4mwDi1yVgVnfqgCQfWaYkoYGt2kouV2HAq6XvogUxiEEeU5y1HGbgSx",
  "key24": "5RAtongibaCij7Zb2jwHe92MGm5xCvVd6ea6a3uMGVAHp4ie9sC8r1cBZhXUwKrfuvUVFEQfKZUw9Co9AfPP83rm",
  "key25": "5heTGDKhxRi17qDtzHcNLGLf6P9YxnhbFGi51ME3GPWHKV6ixLDKiAbVpgZg1N1KKm36SurTbFhLFXk5biUyS75V",
  "key26": "4mJyymNYjuYHKrU2xw5CnGjUM3ErSTexr5Hq327x69ngCDgvTnrqtsFQ2vwcTjm11ueZoT5NwBV9P4VWNg6FJt4m",
  "key27": "2waZsFLhye9MX35AThtfM649bLnX6h5yKWekfiuv5hZZyaYJWfwfiRmChA6honFKTrEWECLzcDcGY5gmr28i37Vv",
  "key28": "5uBhqT89u1tzdBNGQqWd7WPJqMhoQ2WfbekHXYKBgtcNvuoKD5PreuybNqJPkRCYGD2kYoG6PCVjj4dffeD8MiMQ",
  "key29": "5HxvM19r5PVFGRLRMSCu94BbAWBPHsvXc5iL1H7X2jihWYRePMgGMzBDtzxa4QpVZDWufacCDXkjznPuX6fCZLpp",
  "key30": "5uwQGgEptbDDsooCVcKCRuJNN5kHSgYKwageLpfnXomZDcH6zNnu7JSXse76BijFnXzTd34tubV85vk9b3Q5tQ4W",
  "key31": "4Qu5oU2dbNrwXx4Bj9sjLWeSe9mGcENpPAmyxT8tL6eHfHGQQ1VDhU4mdwr18LHaMwXaB3eBtKtHKJCEf5ukQirH",
  "key32": "5b2dkjCY1m7XoVV2pK5gSGEAeXJhTVD6LQGUGyXBnAruiJuCoorE9F1Q8c8oDzuVFaM7MzMTxpEbL2ibeLV5QXgT",
  "key33": "4TQwj4PA6gMyzjn5NJj7TimKvC7L42fV9wKBud2TdH6jwYoaLsLVvdkyMeruiBhPY8qvKy67WEZnqsAMSfhQYd8v",
  "key34": "34FY7kcAqC6qLhdWiynXEoQQ4cK2VWNUTg4moqXSysVBEYHU7brbrBAQxaSB1qzeXpywS42MJ9ARFc2ECpCsssL8",
  "key35": "5N7wJcEuFm521GWhEfkV2PJz1iv5C9SYJxKBVrqRrsp2TSBzVcnvFZtkTnErRFXACkZADgmqsYsnYHf8e7iSngba"
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
