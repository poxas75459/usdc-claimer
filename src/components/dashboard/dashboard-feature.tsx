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
    "36CTbFG3RRcddRnAepwptAHCvU7qRnnecPogWTytKqTSwMJAdnxUXnD7bkSpVMJpoRhD8vfoZFTa5chxXpky92Nu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UxN43UBcQHEJJ83VrDgCTy6CZsvptPtARugqXDUgTnr2FP8dq7RQSniLtrknNzjeZ53XneQPna7ZeggvmaU9qHj",
  "key1": "5pdbr62n1P4zT56XoKFLziWSMejLGiKiW2sgoKzEtr48J1SgpgS5A77qtQV4SWRgvGMjKNtA3E7XBEoUipCQieMQ",
  "key2": "3rhSKpknKPwcph4EVpjhyjABEMB5BobwZ2AHkkkE1FmC8xEnvX6aUfL14yfD8pecie35BzLCWg6uF4EaqGeyAea5",
  "key3": "14L5BmEGMuuQazw5eyfaPr8zL8PLC7gGtViEMgrpJ6bSDMJDVXkP1WRGGxfwHnvYStcKE3LEWBJo89ThduRyYeT",
  "key4": "2f9GF2fPvKDG9LQcgvkY8FTLsx9xpXQncTwGNsjBGqysguWb2WSKAg6R9vdaMc3hSRThPDAKz2hWG9gRyYkEUKw9",
  "key5": "4QmiZy7KEHqBvHwcUMvZws71QMj8RBXLUC8t3BLswB2a6G1vWnu6UQiqrS5wYqjsGnSHBxEmwAuWEup8ustEdaDS",
  "key6": "52pApLBFBxESzcya4DCETYan7dEKU3ycyvSRSnomYYsXWdmy26tGP3FtGtmNXy5WuaMwECe5Qok6kepTQ1PLS3GU",
  "key7": "5Fh1H45eaprmkmZJ8ipowYUCu8t8wD8QpCxPBfPErS2mNfUFhPwuYyBxpueTFpdFgPihVHd4Jud2hjep8qRnTdZQ",
  "key8": "5PDrsLf4CHJNdLN58RBvJ4f8cwBnDgSbUQS7VSBHuAZebstiywhoMPLCDMWQsRUE89E35onMtPLNNdxAYqRZ6wc7",
  "key9": "2V4GsGo2VSpJQGKJ98HmJLx9hAcQM3TGoR9ywozp7L62ZNiRc1xkch4d6pbxwBMGh9z3BEJb9f4zSUg4VXGTRfL5",
  "key10": "Tou2DvtzxNRMgtPaLCxhoLDU53dRC2R7vLKLvso2PTBw1DmmwmvjRx2cYLy6j33zYauDVs3n8nETANJ2i2Cn5hN",
  "key11": "52Hy6epgUSXfooBw8GYGuKRgWJTGvYX4dtoJ4AMX8UJ1QodXSbF7wkj5z9vUf1XkjgBfM7gopbcbrbbusmJaie6A",
  "key12": "2mCgnU2WH3sFnVZ3xkCbvDFXTF4vapkCrtWhCtLxLojNFCM5x5fHAm9N31WNDFmyqXP4qj5zNRbdN24DMkzzBFts",
  "key13": "56uL5MMd9wa3rAXQTZPcTFzs9WExhCd8XNDZtT2SDCwYv2U7128UAALJEntyJpsFkDbe4o5Qu3jHs2wsmUnUSJc",
  "key14": "3N5xbfdAAMoj8dfPo9EhWZRNPYRYABYDGTK5nwVNcxhDSC3CDUysPzwkKczra3Na3pNPppKV7UK4tP7jVRMtmUBd",
  "key15": "5hWFPRWGQYPBizsYDvrtQspDK2QFZgp9drqhBKwEATX662BarTyn5Rcy1aofcr5AzAfvqbDLFsFQ4zw1TtRoRbzm",
  "key16": "42WBYifJuk7aFoDAf6Djv9zidajpmyupXBriV1ktfbJQCTRub2YzzjrwGV96LZXyJEiSxfqk6Ab38VkQrGEPDbdy",
  "key17": "5SSVdoaJGKvrTRFYDEkuMDEhzCfGhRwD4y1NydSNmh2FQsvmS6krxxJPzbFcdkmyF9JqQ1tbaeEDmRS3fDA6yUzP",
  "key18": "4vjhJkWaihkSgteedBNwdYre6UzY9pqdt3bBn8NEKWcK6fDiGepsSkBhtYWoFN7fzFYJYbdEbJj8NykBBGPBAkMH",
  "key19": "3LVjuKjfLuwWFQfdqrs925hrmavk151XftgzcB5oL1LyXtv7J8wdSMX8HJA9w9evAhHzZRp3sXVgvfTi92r3dsCp",
  "key20": "4oSw1m64Bj9jjA1LAjuufQLDbpyx88AdBXKC97PK8MYSUNY1Ry5ynxba1YwTRTsdeXp6HBqUESx5BNTfj1ue1pF",
  "key21": "2MnacL1aWrZHw9jz2YCnTJWUuGBoJiYvyTuL7nfLV1BFixjQHKeU2cHnXkxAEpmLj4eZcFZdtuvBiwn7MVtybws3",
  "key22": "KeZ9Wfp4rBnvaSWi1NmuCKLafBSU2kHX6bVQ4pjweUpjT37X7fkJ9exW7B57WzPNKGq437cHWwdwH48s1Bn1vys",
  "key23": "5F3LmQx5ME3dEL9UXyE4db9xq4Qy3oab6fd1nhoupBqhfwYPcVznzUf6RezrYmgDkH6s2URcKAczkQhzK6NahCp",
  "key24": "6dXyqysAjzH5efQZ9UbqryDuJo5W32q5TQwmhGmwjbmC35yZjT84xj6F7F9J13Yep2hwA6d8FkV4GqsuH58x4RZ",
  "key25": "5qhitHHSG7gb3b2JwrpxMpkYAGywhJotJY7pgtnBhTHLgXzq8SLWTc2fzvZa4quZXH5sPLLDyTYdmqGVQpZrfFef",
  "key26": "g9A9EW1NrLcWLhZdMVxEQRdab7R5sEfimuqBSJSYy39bJWub7FAuS5nFebQH6dpCthR53LgfycJcuY7iwvixj45",
  "key27": "5gPpduh7zCWaDGp3BojKppfuiVVhBnyAYPjXXyX81ZesqPbgPdAUt51R6PM3H2eav6Yhp71wUZqiU3kqmiHMfiiu",
  "key28": "3dDm4Vkyypg9NJqkXg8qgwpYSz7bqzJeE9uEeESJmXX5DUT8wdkixrxYuNtM9HBKzGHL7dhVU77qApcoFwXhw1pn",
  "key29": "4LGH4H7qNCVQmxjepxcXoPgMhvNtuLQur23z3WzyEAFM9gchi58ioA7KTvKFeEcS9Xr3zKvuscRJo3r2T4CNZBzN",
  "key30": "NhgPjPrzBuxBLxrgjynVaEmrfN3N3YbVLkvmmEsQqu2adixnfM9zTHaMHh2LhNtpr7YzNzSFsNt3hBboAbqRkEZ",
  "key31": "3zY9t67R774eAhuh5wozWBqT5hoi91onmXbToqNqYBZ727VzC5UmtGdLHeZpDyRbagRzmD23sG3k6XTPKW4F3GqY",
  "key32": "VdSVEXK8ExnGVzbzERxJC6cHrEwXeNMHWrEecDCWRNGtMi2FkhMXnfgZ3z5XpiX8xtJTJNKjd2GhDa7i9z4ggXA",
  "key33": "4f63uZwRhTgUxo9R6gpjKFymk59visPc9DuNfkZDNRehFDtJ1Kt3789WjtuE2cmB13yrzCKThpA98GtNXbHWt3S6"
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
