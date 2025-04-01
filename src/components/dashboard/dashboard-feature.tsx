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
    "3A1rW9sRoDjQTZTJZ4itTwuufbmRcmxFf39BTdsJA9qMNxi5VS2eWQ9NiUFUZKTMa2uNE5UV8qaPeo3KztL5bBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WRfHKiLeHfGbMZpYHiNAi5AuRjMjJX32Xx286LvM8usjCN2Ayg7wqE48BTcxaXyMgyKCzaWXTtCnk6Uuj7xasj6",
  "key1": "2ArjBxKe8WW7R7CNHxYMJZ1pSRE2o7wds8Mw3AZnrdSxVjeXhbeEcq9UMFWhRHafpjgs9QLEsNM7QQAwkXDoQTCe",
  "key2": "JNz95ViSfcCb32HTMZB4EndZ1YZkKz1MEKwpJEdrF5jmTBjSMvYuvej5w1bBNaLaGaDc9kJdPMsEepn2wA7Q7eR",
  "key3": "2SivE7SEzzJhmcB68JqptBnPLPJW9Z8YPvcXmj2ZXRUphTyFUur1CT47o1Ec9gAbmNtAyqMW7gxJYw97LMf6HLBi",
  "key4": "5kxDaMpuKBgvfzfhxZiLFzmT2NoUdBcR8buH1uKAp9Jsso6Coi4sqbwxKd1idHxej1BSbJL6RXRkVffujFyyB8qp",
  "key5": "3fJDQDW2C7EEc2PmW3FBPGZDtHU6QurUcfTbXEeSc2hHwSHJMenHSpv1QXNtCHQmeA6Fm6hvqYBD1EAUkyS7ML3V",
  "key6": "tEq3UJgJi1oJXt9eGSB9XXYJh8jJveXfBYBND55ED56iNR6aDyHAB2Thk4F4Un4dXPuEvURma9FVDyPmXb1X8Ht",
  "key7": "3hyPY5zuAjsbo8JiF9cTbYqcF5e6ayQw6btVd5Uh8iJh6z2mS4wgoQdvRSeAZ4LrkE1AqU9y19cSLRJfyiVP29XZ",
  "key8": "5jisgCopsAtEWcbcnknyx3eRYe8cqJadDmy7wHT3hL68W6b1t4hxTZBbuYpbSRPqSPbZpdtucgJVietUdcCL5TaF",
  "key9": "4vUEBJ67sHtVtApfHuq3Q6zevkpFSBwBoGjN6YeEyjDLEWwDBAr4c2U8nes31F2BcLuVV8AigLicYcuu9ANCK6oW",
  "key10": "3NKDEdSfsZ9gQs1B7hsWX6gSAnNnsKEHykBW4z6WA7qYVPkGwHbzu9eynsDJ6CKb99za2RFCh9mZ7Vshw83JQyyV",
  "key11": "4LLvXgVZYU5NCsYo7VajhQNeBQ86LgqfLs18pNzov4mz37dRUfm4PUaTZisg46RQWPnf2kFFCFnxSyU1kbBRZpQP",
  "key12": "2wAv1nxDzQS7SU9EQ3A6jAvUBfa4uewurES84EobvTZjpYonmnF3f4i6HzigZQRwRrRPmNxwE8CSKGKdXXs3nuWQ",
  "key13": "2cx22hh3Jh1BTAvwjaHefQyUiATKGJaM9kRCQH7gmiHYSxhSSnoi1ordDusLjkYmmN5jDVtKgnyTLuDKVPT7DAyB",
  "key14": "52P9PxRmF3mMwvTPTHcLQjUGQtCgVDHc6SVqMCr52xAfkrW1ybpFdXKoL6NmFtj8bTPFDtKCv1Dm9yUHsjXd9ia",
  "key15": "eDgBHTS3YGkKpTdViokeMFwgCKvZH4zmLwLyRtQAUM1y9rcB3mtcZxwLLnwD3h99e97DL6nndVRRUzu1uVy5CzR",
  "key16": "2AG2NSq5mFHyeD9XThPGSxvFtYkwfL1L9H4pbCDahSx4VQqfEnSSxxTZi3NnZTpdsYKnt2MdZRF8ygkan9WwoCqz",
  "key17": "5wNn1PGyjRdsqGMw1vjvgvFzJWqs3TMkHYhVxdiQzCSe52ptp8A58a6k88emNcigxaqtmpB34FmQ1AY3BsqsFEUq",
  "key18": "37CbPjkqQftEhHXy4d6isoKj2P9dYCpdhNZUrPBrMxbjddczxEUfrb4FC21XixzBFEC6KzKR7iqmiFiK2fW5SvnF",
  "key19": "469RK6rstFRckGfydFMQ71PGsJqTi8bJ2ALEH64kHgHEipVB1DGzQdkCDgGExo8ELPiavTf95qMhoTgxCBarjhvm",
  "key20": "5CrPJv5Jy1AQrbijUz9TSZJ9RngcNXhg3w7hDNce2RCeNT7wKxLCk4tV3wCv23LW9dDzU6fTdXn5jY7HhqQaUyCC",
  "key21": "5BHqZZj5R2cPKuKiAWdSz7y8hNK7YyDprMXPkxMgrGCy33YvibkrhdZqMJJp2r2kLHPiAULatLovpguk3QjhnVak",
  "key22": "2phk3XSG15hGyrtWgySTXsXJ1HUMfdoeBp11tc5wgCDtSbvBnhzoaZ93Ahz9XvK71nSL3yR2kqtvT1atTq2J7Dis",
  "key23": "5F6QyLLSEiSJKanSJEjXF5hwnXUUYvumJvJY9N93YBrFauhdAumgvfxQw2CYDCZyq3aMdxkgJsnNVXuNS7BZcWub",
  "key24": "2gzmcVcFRnVUunSyyiatfR1F6pKUgLBRdb1zEZBziLErcK9UeLQq2Reco1jw9ysTjY6BkywLknG4tvmL8rBVLqMv",
  "key25": "4WEDDYxx39HxmiLg6UqUTZxqPb9GDzq2aECwm8bpy6xUwh17juvhWdXsdaDg1F65Mr9CCfC5h6xLraNNFJnaSoeP",
  "key26": "ov9jawWNUHe9mZNVem5FAxqDJJMy8xFKHMYAbq2JKo96tPfvU6rUNJWwg8cjBq4UjCr6J6gxb19pYuVe5eMKNkr",
  "key27": "5zmuQP7NPkvsxXp54jDomDDuDkx2BbMpxur83Fyv8J9LK1Ss9RcoyQQrR7kgBWJ1ebZgoVrrSgtjVFpdvzrVXGHU",
  "key28": "41dgY3C8ohPUeGwuyb8J6uPjboQ7zcwMHdogEFFeP5X7RY6yiAchEkoiex5DqBuva5hjpY1XDu3f2dpNXMDc9VM6",
  "key29": "57DEtC6r9VSmuD3vwFpJ4t1EUF69o8wmMQY1uRQpv8p3QWVjDcPwGcSh74GdvBM5XKQnS6ed85Dq7zz1s3UnBm3p",
  "key30": "2CpugCbzxuAs1EqGFbtLbdQT3t1kjwS7b8RPiEHaTGgxtPqoVzr88bLyX67JybFacjLvvh63hXnriEoyfzQZcQ1E",
  "key31": "PH3Xn6dERwKRgRdfjVDw2FCLH2FHs82Sbk1njEYPN5uvrAmhEBzh6rSZAejy732u7iQh8jmGNAUkosrcpjgWV7q",
  "key32": "4ARaW5kCM9efNL1zL1WyHxvokqfeSUkVpCMrCpZZV2vBz4CNHtyZP5ehecrj1FRF1PXUnztYgAG6sWGAnT3EB1Gc",
  "key33": "CyYmHyn2Lud94hzD65KwPFjSt2gbgVtGrxPZF4YcqVdtnCoqofHjs6LpkqkCvtHRdcy6v9zZEkN7Tk6V8FdGoFq",
  "key34": "2CoBu3QAGpRFSEJL5Apf6mqvHYKighUuCGKmzrrbvtQJqUTpNBQGUEELHy3fx1JjMxusntWieT9ue18oMoiNdn3R"
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
