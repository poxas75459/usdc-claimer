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
    "KvGXpTU82bEWrKjXTq3fMttT7AV8aNcZN3FMYxMgikHxnUfKw1MFBsGpRYtEjpu2GTHoDRvZ5rcjpXKy14mYhv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FH3CFLF7tZRxnryT3zc6AhJAwqqZShwT7wv9LryEoE14NmgPmjdCdcsE6mE2quyDJT1VLjpodau4Uq7LBLSiE5Z",
  "key1": "5ByfxQNE1QTCbJLXqausBFKyi1CyEoQYCdJEMXAnPsty848CC3YFsHR3qmnKnKVEZZuZemyuwMZ6UqUF8mDTMaDZ",
  "key2": "642yiDqgz6nLdvrx8nvuQrXcmSs9TsniDvP2yyRoqQiQTGWkbc1eb3tPDFTPxcWurVdo1r7zHDRWKVfbBQKKTDst",
  "key3": "3SSkisgyhsEA8GshPkrhFGXXLAdQutdC9QXb2UiVSV5j2hi4RHko8rLSEBNHVgiun9x1aYcehHQxtszMBntgdeCR",
  "key4": "hBymcNcjhJjMcRMSc9F4DQAbe9b2VMAwfjXzCvELqEz8mhaCDJVEMyii1bWi3VoA6quTDxcwFFshRoK2BQr3u51",
  "key5": "2LjesiVFjRyMZ1X6zZRWRFoEFudA7N6Vt6H8PPTq7RKTjmvLkZdzpC56FkeU9PeEGBwQXy6eF181w1v9ML4Cccuz",
  "key6": "BEYCFeMNNTK1GQKPUSXbMrSsx3sRB64WbbodeA4NkgauTKqFjjzw6Adg5xUdTxydPbke9pQAXcBHgtabnDcbHW3",
  "key7": "pQrEvzCuTS2PWUmbQ5UvMX8M1QStJr2BSwp8vLBWB96JjNV9mDQm1z99dToH5gyjDmrxDtVafVea5FdAuH2tTYq",
  "key8": "45gFsUkufcP13BPFKD8rcsXNTRhtrgkH26jQWjNkWodrwjU5m7F6KEW2tHYu39WgvgmjBLj7q3ZW17Ck6BsL1NL3",
  "key9": "65ZgK4o2HrATuiwDceYhbp8ZBWDjibGA5dNGPjXQJG575d1o3iwbw1MxcMmJBKA5zgW3gafVhwXCxvqBkfNuzRjM",
  "key10": "2FjJkczdYXpN65tJEG59p771x42XcrkqNFVhmKeh1u6jSbp6gwLtRDLh6Tb8Wjp9QkCu1RD5wavDRuphPUmmo7kz",
  "key11": "3zrHEs6KjPEqvhEJXPjsn1ZUnxG4NH4Jgdrfycayu4r9Uz857qyZFXnii6DcTmruPXUrU1FEJCy1fcjZXJenvPgJ",
  "key12": "66nNap2sjQfhRRHdjBZbEK7yLTnenKZb1GiuxRbH3359uWbBQtzNZwJjqkWPbnYUqdP58UTbp7R1cRVBVt1fbkyo",
  "key13": "2WUNsH6FKh4MJ2DTenMdBipE2TKk6K6WRMH3mdSbDCMXHKGyL3ud2zd43LDBznx4Y3Qns22gfnoAekRaCu7GaoW9",
  "key14": "36ZFtc8XzWHsuudfKc3GRnz9Nm9rvh1Djbu7Kze1nzHRwW97tMFM4QrmDJUYVKqeLG5Nfh7eWYqr73YnJsXKNrEm",
  "key15": "3ZVMKfyJijuM7ML1FzTW4NvgSEs3egjANNAkTJgvjG9En1MSbAiuZNvucUcusdHw8upWHCxpY1g3g72ecL41oHg1",
  "key16": "MhKQTcWq6wYAEgpxnj3Yt43LzFMrtekJguPG3kFEjm967XPzh1aKhJBWQ2Ehbmr1ASUjgEjy7KihokmkTBWYQbD",
  "key17": "4pvAya852rBXt1P7Sx6GQLcpGPnFktJ91ggsCgXQhUuHTdTjhTtgTf4abeQqM9tEdDf7MdEz2XFvpbXdCKqauyxQ",
  "key18": "4wD8tce8sy73JamGDACMqvxM5zbfPWHRDx5QS7KB1Nz3Xp4WLcRYFned4iuT5vQnMqqH7XgReeqtdycM2U853w5N",
  "key19": "5r3m5Xhd3CtYJ4nFuY9fi4Dow4vjcMRtdDRcTWsWHma13aVmrWRiCoeAacL4hJucQaGfKfh8iZiUh2En29wURJFA",
  "key20": "cmDPERoyrdEcwrpWnhPsJrNe1D6CVYczvQNgQB7mQRpDptEgFAMC496VMXn9FDYtJ6VecyAXUjtdneJ5yANoWVZ",
  "key21": "3AsJD3NA9PwNM6JmSU6b5BkV2WVnDFrjyDRSXLwRmZbSUYDTnab9zHuYy4pcCy948Afipf8AES3uVekrdp6vnGrG",
  "key22": "2TrBfmsN6v9dwYc9bYQFmXa8jp6sF5QtxtknoKRg67uJpypNJ6z1FRAUKiYX2Go522UUJgbf1MsMXK5LB6GSK2sE",
  "key23": "v6vjmtTygmEvSfwoGffq8gJHnQzGKTWeJyQVFL3boLcJgL9iu3g814ZxQciZ5iuaYXAF9aeqXjGm8CTViyWvkEG",
  "key24": "58reMGTUpXJnVZWa8eTydavEEXmVHZKjog3xnEVJSnudpBb5XnWX824CLg5XUAKhsHHjfr7iBezZFRZojiNdKf5h",
  "key25": "2ThXpxnMTAFvZQ7GyzRCbCodrVvm24aUHm3UbWtn1Uag2BZmHBmYJxCWdAMNGPxXHL43LGAqTJUpW69aVJT1jnwp",
  "key26": "3YZJyzonPAKyhxzPkgX14ZSFPEctqxn2RLf5wVTG6zSUEijKmbhd9Qq64fdWMgDWfPkUoYs5w2TcHtRRZ129BszR",
  "key27": "4nKvbs32UmNxxBj4ECFA97FtD7aYFA6B5nF7nbPsEgjptzjxYG3q4xAeGU22ErqypXptcXHFyvBTJ2XAnEPcenmp",
  "key28": "3SbuyTsRuCKnfdk4SBLy9qFiEkZBzAPe2h7WaWMzArV4aGbQ3Xp7ki9iod9cVJM28Qpso5SbyQxy1we9V2RTM93E",
  "key29": "5MDQP8kw4Bc1WGKiFA83G5U2gwgBz3N78WWxWusxsiNaJof37RCzWLxP85uXC55fMeH66S7xFxjCkqn5cgTBEnes",
  "key30": "5dvPdYoitQbvHsc5VLFkL3XASDU4v7jFWcZkw2zypoLnc8bQNB1e5z3GAzrndToRXP8fub82PPDuk8eaaijJ4Vn"
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
