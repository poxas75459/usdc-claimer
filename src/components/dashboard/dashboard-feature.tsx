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
    "2gfQWgAMiHekFVW6bbzMGLnqgJWRn7bJYUMetcSbLDboPusxus7sNNWhMPCbP39hXRGL9JwyDYpt95KkkE5GooKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "reZw6dHg3x9m576aHAFLyq9Sukv3VSC7EugTQCwbfUfjCYiwnse7foGeby5bQMpvMtFDCXL9KayLpvStjnXEpAW",
  "key1": "3WezFTnUUsgLgFYQJiVr2X1BQgsvrFx3U7zrPK6LtznAQPjx3Zrd5nT1haf5FoYtPHKEvYbDbJnNmdwgGfo8BEje",
  "key2": "WoUEbeouwrtob6uxPtNLjftPZFLjYajr4PhPCNURJksaCQkCxMJb7TD6bLtwoC6dYsgoDdAPCRuDnjH14KEMGiW",
  "key3": "4GLZYkXiRwzG8yPxaX3SJ1bFu4svrYXfnwSQTteRPTNiC88UCJ4xhQFHijWx84W2TxZK573vFBHC5cQQ388b5mUz",
  "key4": "3kubS2wuixTm5HpmmEwiZ17h9GbifotuUxgwJByjrH2cxQ3dGFZjHbb8nhSjNYUCsQT6TvdrykUm2d8EkJcbTQ8n",
  "key5": "3cy2oHAUWxG2xjX2LTh6NGkoszPamNfS7DsNXGLMEPZyYzHD6zP1nqiJkjic2N1JgFp8eJfHxwqrQtrASqxGDKt9",
  "key6": "587UtWfNrp3Yk5vPRmUFqVnVuxY8tS7y4RhKqe1nfftzqe8P4nxhkaz5hviwNbaiotcaJJS24BGs3vLXP7z1agdi",
  "key7": "5isPCcAvSWiCrhAdF6fzQNtF3ZwMkFD1tgBTvoa1Vt9JLiMBisDndtSM2ydtD8UNMRs1Kvyr55FSXHaE5fDrovoi",
  "key8": "2dHqHHrjBBWvf8YeNLp6KuffHQYCefu1TEeABpBxUCdxzJoyru7XAjFTQPNpxHTR6zqegzRf4HE7hW3eruAiXpka",
  "key9": "2ba14tSk9hGYYKjgZSf5fVJxKsxcbgq47qQLkBoD3k4agxyVwbWAw6bFWYdToLo66qwyGZxjJZYyE5jjxjgiHQqq",
  "key10": "65hsW3nndGiuiZ9BZ2YK73XUQRhBHds9MynMA5qQcWFTu58dnFz24xFDs2Mb8N6fGeAwits6gybNDZKHUNtT2CNN",
  "key11": "3w4AToZQC43BPrPTzv3kk2amBVywPeGHS6uiJoexMby4pN9549H5aUp7TivdL3hfAVujNrhz7t8r1ZeaTFQ5XQSu",
  "key12": "5yZ5NCvCxGKwo3vgmimYrxjJKCrS3BWp3CYcFtJMc5w2qQc5LmSozxAXnED4ieTeYitNJm8t5hcJ7UnNXsZmBYpU",
  "key13": "5QzFgp1Zj4QgBAK2Cx7SngXPUkauXKcvce3kMpswgzP84XBY1UStNbYvLJFYsLSD4w86wth8ccdDMb7tEAYUupf6",
  "key14": "5DwwmnyQjj2DweM62fS1H9JWu9oedGbV6X9LWBmeFwg2WHA4tTyTB2pgur9mWCSns8dvUoNuZt6ZYgucEvvJnKtd",
  "key15": "yBquUbEbDM5GUjKhDQbZMy4svw9MCCrbH9fDsKHDXTVxM15we8UiXckfjCG9j8YEiH16t8KV8Qr8u1xSpZvPsV2",
  "key16": "4w1g4SjD7vAn2QK9XWexLoU6zRSmYp4ASZ1Bgfn4LoHYRVNFL8PP1EqdjrTWDvDjeYN62QAZjoW1TwViHycoS5z6",
  "key17": "5SJmEa16HTu1EphQxQtVdFdanbCASS2BzKCGiTZ9URHCdgY6hWHXwHdnxuC1ovcMoDtiwjqJJyRrWjERa9VkmAim",
  "key18": "p4Z15xHKnhmXkfncnRTwSu4ZPXC8i6uGUxuaBcgVNPgrcEUMDdmU4VLJZVN41UaUpTkydqQ7J3crVptoXhWA1P9",
  "key19": "3srttoPLGr3ncpxGuvhAZCMWmg5tLGQkDgjytYaXTCLo7u55qWQtyjkYtwGyby5w3Qn6cTgqTtPoC7WyNDes2cdt",
  "key20": "3UWQkVocJCabXY9QoDxP4PFdhSVHwJ5h2rb8pRK8MGC3F8pfdnbxCdqA2Sf23jxseqDcz1921hL96rmqRbHP1FDo",
  "key21": "v61hNeg9SmXg3wuNZ5k1W4hve8F2ZVoLQj1rNxsPxpX5DLnhK7moCC7GNK7NxhsK6shByZyXVJuVv7MzWiEbmYn",
  "key22": "3qYojNoxLZ5sPNQJGQwhjm2jEqE9wyxkY4h1t6iEd6i6tazdX2evH7joKgQLusyo3Mz1ee3UCHtu2dYEmuHV451f",
  "key23": "3fjykSWqwGdfP5bA71RqswV5dUWc7ND3gW7efFUoFpNYQeJ5xEuqyeG4fzUb5dJ5aavam8jkwcc9WzHM3rGHWoSM",
  "key24": "26QmXa3BHL8diegEYnPF6kLcYkSsZ7163KbumS4WWMh2rZtLkQ1W8zSZLKkABwUTDmBp13jvTcGczVAQCiihUi8V",
  "key25": "42ArQLbFCCQx8A2uhNUWpgsQMJVcxxdVJ6bgVUGCqcbK6cBXCeRm3xtgrEVBKCqi4HrAHRhqg26HLdq2xgNLaAsa",
  "key26": "3m3pCZs3QtHCwWsLFSecvFaiGLNUKi9nEBwaV1PrXnkqQ8bt7uKVPtYJNmstLTzSSWocM9UqHFQJ1UnSAJPP1CW8",
  "key27": "5WAUwfb46Gd7Zg2XN9g4eWJ1eedkJhmq62U2dgEamtLzGJ56Yz5NzGKngS9qvKohKWfS7pmzb34bhdGQPsgNHaNk",
  "key28": "3GhVXDZG2PJnZDTUeBFgisvWV4HXVaniW6mNFe4Hi5usfUBQEhVadJSiE7ZamCirwc3MkTpBCW8NRoFhTQDrLU13",
  "key29": "51uhGsE2eMbBrgV7pdR6PQ3mZQCDabAGfE8vFrYMiNL846D2XWJhG94zWu9A7AZZ1iowb5u7gkgVeGgbtphyju5A",
  "key30": "3gG6T5WkopW1BDHzAtsvUD1sjwtTaCS6Ca1sASjB7NanSQnBXTj2HAKihRJDJAr1xS9GvCSbyyGSbkxAD4xZSDUE",
  "key31": "5sokx4bGo2MBVgaXa3FzNfXwNjvEXJxw2vNqxLqHKaYHah1qt6ntQZMzmHvxegNL75m7TjmqBWxMq8pR7GAGZyHQ",
  "key32": "3nWhD6zhYxf9tyKbGDXzyfTouGvM7H8ffnJvpsRMdpoRmiebZ8XjTnUXd5Fh9ixnaqge1H7qPNmGZegPrJaCYKQf",
  "key33": "2YHvYX2DQGBpsveEab26soezGjpXn5wPeQSFEZ5cW8MdpsPa2Zs8Tk3b5N8zHsHPbChECJjsPX3s89ZGN8NYQGvt",
  "key34": "49fr2nMNaWqveErxtBuG5K2pZA9ctahUcxCXULFqrCGwi6BV4qVVtFjt15yXLtXsz4vgWtjbMeiPqixXrJkEB4RL",
  "key35": "4JTQcWcGUvEJW9PDgU6uFVpfdjCK5bzizBdyfPRPG4k4MfP7dboE5rmoHmBb89REgrRuFbU14AchM9wCQSiVPVTu",
  "key36": "4iuBJvQUrEeUkMVBfyseaVYzhNU7mXBQNYMeVm4xgyYmaQffz7bV4Lmasb6yq6RJz28o9tQT3YMR9ycsGVWPrCHy",
  "key37": "46cfrddWLxdgWUq92j2YVYjpXuqgahVVrVK3Vui3sMMiq1dLkZR6SX6qU2DFXXb1usHPoVu6btK8RURumPxknBoj",
  "key38": "3SXWTUNis7iJenZS9b4hBE978TAmpa7tzafjiSViocfBqsw81x45YvQLtof3rGDVZfNMBigk2zsLSip3QCtyPYvU",
  "key39": "5gMrF7AkvyNmo7PKxLGUZR7nN4ZkeezFdadoXGpHCAByZx8BvNCbKWnArPYhFkqDskpWQb4xDq9zm4WBfETALpNX",
  "key40": "CBD9wLkSMExef398LEqoU78jatwo7A2NdPUJGjackQsMqmRiL2SWtMyLwQyNcx6LHt2m7dRKJUcCZqtE4YEE5SP",
  "key41": "4rNCtVhL5jyNxLL1jW1iBATGneMPze4QEYMEdF5UjKe82riBzniM6b8DpXYYVCofSGUzJFAcXDHP2c2b6vFriH7b"
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
