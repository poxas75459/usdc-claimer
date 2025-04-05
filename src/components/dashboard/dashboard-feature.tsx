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
    "5E4Uuk2sgoPQJBRLj7r1M4nuRSK9TAJzayAwsUaXZrEFVUYJLbKjMsJ7XNSU7V152xersWMUu2WiCC43vroXXDUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r89y95Tp9pHKZ4qSkrN7nZWdCFBJSecujVJGXwdnmc78TMTSEAZMUWU2J9rjhnpdR6MxpwMovL5UzDE8KWjR5JK",
  "key1": "5gxKWXG7bZYqoQCmQeUeiqDfy6z36e91qCykPsfoxm88CiTBCCXyYReLf8gMYhD1ytbrfvjfVhbWV7p4Ku5M2iBk",
  "key2": "5o5it9gp3zJ7C7QKsA1cDovfuuFU6g8mtwiLqpztT11EJ7igWrKTDNKPoHgERkD9XkDk7dwiRwwL7dRcnEuk3r61",
  "key3": "5uXwY1noxdahxstzzCGXFg6ZV3dj3ewxirs5uDVn1B1oVNa2uU9Ae9pcVyz1ffZVHcnF4Xo9wjqDv4cVCKi2g2W6",
  "key4": "3GHLQTKXeqjwpLZyAiwz3nc8BpsSJ5hiwQWbrwnG2J9LJbMHnt9CCydZExZNdynH3BQ6mNNHftPejXJmkTn77Rko",
  "key5": "4M5v4c6jcWjS4rj8eVD448VfcXM8Tzbyz25FVkCUkcUHrpd9zHamTPn3qKqn1E1o7Y2YJYcMU7emtXU87NknXfvK",
  "key6": "5UuKKbfnaYXRV9o412NvCocrTcoeHtYieDpSeT7ptR18miUEkykYHD2g5GQq2w3b9bhmR1LQikjU3sADubxM9gi7",
  "key7": "4aDEAh3kskotDymX97hpjrhkoh8Dkaj9ZEnTKxRgH7QvqjDBZxpG5WeDin94HDmzF666ah5SwCWcrVfPGSqQ1Wjc",
  "key8": "4uXx8WnCn5FC91E22BRnLNwjEqiuiHkPpzzjuBSRVHhW2c2xM7PwHfwgoat6FNd1eZRP5grkAmXD2DeeqgnSxYVN",
  "key9": "4XP46ipZ3kZUeSX4R59yVWNrNSaAknATZ1Yh4QV4twRsrjsu6rAXcHgTi8G2TmysP5xEFVxbW76e5ZACDkR3amr8",
  "key10": "gLXcJiSDjg5xdEehgDHDNGm7xnJZ6jDeBQrJLqoVrjQoLFHZTfKSAysxefcXDmDf6kQ2ABq3ui6KQqbS7wmS5vg",
  "key11": "5HcqfML3mkUdXKxPuj9QpdUU8Sukw2rg1AxLM89esWkr8acho9m1cHcF38SjXJd8Wz2SY1wTFtSQMUL2CWErP6ZY",
  "key12": "5to2gGNoUJDz5P12f7r4QuHVdNGUEDAPGgVJUCrSBazs3fDVcVD5QpHYjRJoRQEHLX3EATLQgbNwd5ScpPr7LXFA",
  "key13": "3rzLDBV2oPrgqPkmJGoFLKs191hfA9jvQD5mf7WtJDdEgLvrELVjRmFSB6kXVAwD4A1MQXbrXnGSMpQpGos38bdC",
  "key14": "DRbsuoZFbBPVckE4uhzNTGxENEEKiscKp7qFxwcAekinhdMdK7Bo6z1STWC52Dokx2k6iBXtJmU8MP3MLP9t9Gd",
  "key15": "29kLeMA5d1Teh2rJUPTnqbNMDaKRciaFaXWjanEPrWify3o14ovBEQqfRbzA7R5WafNsBGDmufxioEeC1mp5nJEJ",
  "key16": "3MVpUcjR1wZ3EcoA5KLb4jAc73LavsH8iaVTwnneauYYuLWHJdbgTp8vKDnDucvaeVP2tmgaWFcnpjvSM2uqUgww",
  "key17": "xRvPTeiTf3Ab6kGCTrarwzhieFL2Uuw2MQrPHopvivLW18CP55Zi2iRsP5vVvyGGBYXdFMDeQhhgxPUrMXXHQgm",
  "key18": "3oD2Joy4zFUsBQV38G8Q1nFD6ggRzyZobudbRwSWoHMKxst1dq7DEtaxbeTrngkmEDvFNKsNfv3SeUAHFdTE1tnM",
  "key19": "5DAbn2pZFcwRxN7j6x4jY7Tyt2Nx9xeb5Jmy1zXqem5fFSckuAjEB6z3qxqEyaVGEodb257XG2jLAtWPh1s11sPi",
  "key20": "XAC8J1wTC9UYCe4x3D5HZSZyQm2i2hq4mgoYqryBpifPL7sihxk5zsWvm6wMuj8NaCwQMHXzqcCtuVJdpNpyELd",
  "key21": "sKMynXSVtyRpiPQLT1GdT8mnmviK7JhaLCqg9uqko4QpixQiZpSWEAF837beYEbZR5Qfh4XRhN1DdJnjwvXQEvL",
  "key22": "3eKG8mZgPGoNF9UT9rfY3bLzX967zwTkyjMNo8wX3FR6XagAascp5QjeJF8oWxk97vNtchKakqnEXfPPQbkrqxFZ",
  "key23": "4csrH1FFn3evGtwRWACBYs1351GgxMVDREG9Xc5xoe9GmjU1bAkJEjeGstqBG43H6hxzZuUtbqvfQjW5Ps3BbKHV",
  "key24": "4uHUv1LkGLA8AX7kv7MmSmHKaiRMjrLxnig9RJ8wz548ARYB7nyvqPiXGNDoCtWiKvauZjG3UKaJiTknQg1Mi29A",
  "key25": "3DRmopsmijfwcBnuAWpcP4468dYUcDSd3BPGnah5huAimki5G9ZL61GMqe3DqLURyK3hcZZYgxhBD5oUbiuAVzrA",
  "key26": "581EWEe15BAnwwz7d1t1T2M7CqCshsKy8mbSh1Zt6VwjCCfWBECCS4edx2jHKj2phjm7DrkLrryft89yjjPPjVaX",
  "key27": "HZbFtKoqsZZGejKxs9hb4YPqxJWNAeDS93Jd2aAWhQKy3mPc4L1LaSNsxCfVggct1rroWVwAXLip4wfgSNF6NiU",
  "key28": "46o27TAAC5PbaeJbRb9di1TsFwZjWE26heqY9Baiu92GMDr6jkBLPzPhNXe5gd2p8vGNaPs6zuE3aaysAgafsXAW",
  "key29": "4NYBt9YmsCwJ44HoQkmdUU8AEG7SRGHaiy1HS9WFit8qXhgqUte9XyppM1fMT5mgvrYNBLTXBmwgK45myVCRxHao",
  "key30": "2yicJuJDTQGbeP86mqXnb4k7pyTB2XB7CzReTFKujoE5abYkftAhWBjQgr894ENGdkJ8zMRa2QtGNDoutYVJnjme",
  "key31": "57NoECANYNoocVvrPKNzkx6hJx2bMFbzvWwDR5YczkcTbpTDxeKNofSR82Tg5dxEpNjoyAt4K183i91rZj9VMrx7",
  "key32": "3rSnoJfFWnPXKHsbJNt6KitpM8nfwRY5a7RuVehConrnf5UAMdQosmQANjvttEuUiUexRLxYzGqYuyvh4Sz6GjVv",
  "key33": "49bJHyiUc7aGWDgTcwpoVSwZ8baYzV1o8M3Y5KamPQzxHZFC5tLhLBMKn9EpSNZd8Um4rK7AFaj6JhHHdKuMyG5B",
  "key34": "3KfuGH4BoUj6YApW1ypRaZmsE3MxwLhUxSmYSG8PbL3roiZyJbaVzXA3AqKtw74LzyeThvQdEeHWCcqrgCjfgCGK",
  "key35": "6jgYFnqgGb71LrFYHoHpAGqW8r4EuY6qjcxiduVqPvPtdCZr1TtvEJNVawcreKkRXndGwZfczf6LwwgptwVUVfF",
  "key36": "U1onyERjfkaaMYh3TiHiKP4Nk1BjRrZ5pbU12Le7ntBj5urK3yb9aczSiAopkP8f4JxWsTbUE362NDas7Tsg2PP"
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
