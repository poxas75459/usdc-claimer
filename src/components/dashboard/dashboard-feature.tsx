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
    "52s1QuFA7LBoHnh8ASaz4FWY7trFRsPmQTuFaN41PagbzJTSG4VVXU5wVAqijp49n8KSRwQ4xwvLB2soR8PjHfhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27pvcMqbihqQK2nDs6pdeutUGEExeSu3FwX7RZVioPvDUquyfAnnWvJmrPGhZ7UVYE4EMdfqzntuoN6vxrtf9iDC",
  "key1": "2ngiQG3w1K7rkr8wMjsdhjNkQhvCN32VCpoGb5cYQrE1xxkfyxTRyz725dVeE1NECcavjwPXyPFWvAxUNiiqRzsg",
  "key2": "3rmTpQRUviUfvMREcwn2abGAACZrkY7G75Fp1RQRkBoSrvBebfmrrYe6rASxXBAuXzD6rESEk19ZEBvDTLJBkK4S",
  "key3": "39RzzgVmv4oF9wunPFtTCw4s81jSGuEJXN27Y7RHmM1AiRh69eyP2NDVFN9tpFe5AhYD7WBwuPCParDmUMYjyHJF",
  "key4": "2JKhjNbnCnRxj7gVi94CbY4KWY28js1dsVR782JLY64LHpCrWmBjygdt1thiUbLmL8xXsLwsV2o6DwiPc9Cza4Hs",
  "key5": "29rPbGQFdzL6ayTq3CrKqVvWZRoyJnEcAHBvKou5bS39yhWtz1s8Kh7jguFX7ZgoxngwodqAGNoGwR85nwAHUaB8",
  "key6": "op4e11737xYbQGBJU8vwEpYCPZ2e9evRL1vjoqoi7nmLKAGk5qPbpKStyUGmg7A3nQYouE1Z1AV6Z2j6ghi2rKd",
  "key7": "5fdbmsRzTECso2983gMkyvzvf9jmzaND2fdH4fmNJc9KqqcdSJ91xAsj5cNQpmssYqcJ675FAaa5tGJKXtmvaHhY",
  "key8": "5aYGUjCxQAubxnZWTjHwoibsaisyuUx1gwRZER17Vy9Q1nZxgPGmsBBQC5NuRXedhX5ConC7jt6nWrhkJFNR5DQa",
  "key9": "65eMeGgqSRXhYh6WZSz4DiUz935MBoX6iYs2MVnqaPe7nxZprYD3JLcSFjga73MQXVwfmDMEBG7PyYxhRdYH7MXn",
  "key10": "4EAC8TCKa5fKSSyFdAQCCFsRAxBmUoUrPr9ekj8Gu3b2BoBquddF4CxpPpJc9wZCg6TpeZW36Fvs643XXGWEVB1f",
  "key11": "4nbw49r8y6PfQsfWgi2KkeCMcBMMQvHPJC2X8EM4CYAxEGRhbfoa6DHUa7kMjoGLVCShrVGG7Kr7daPpQaERJpdG",
  "key12": "28BHsojx8atBmgwR1d2UncoX9p3VTV78P4UehoAhoQ2q1BcbiTkWsQvuqKwaurjCD94BJDsZW54TSE65gcQqGWUV",
  "key13": "5pLHhYk8j7c5CFMDCVgCcXDSwvURAAMWUuzKPkEt8k7MXYtLhPdk1og6bvnKZxW4fPLzuuP76N2RhoPq9jUKbqR1",
  "key14": "5ZGACe6s9iJUapShAWJeutKpKFhL4WkFj83W7QoCSgttuhpmhhsYKhADch8B3CTxzd1V4bmBhxXZrZFPww2BijN8",
  "key15": "2gmEg8DJajm2CGvbauxLJGfptuGDjyYYqqRCZVozNkTQLb8Z9p7Zs4fT1wfUzmVDC8JcrAKWFzeN3XtmH87YEMpV",
  "key16": "jGAbruTFHwH2YLztzB2ZzmuQu4cKZk5Lf86xFutAfyqtBjVWvsSN1u8YSzAD5q4wX1dSEgHouEm1t96FJfvRjzP",
  "key17": "4FnBWf18we72Yb2JJkhF1hTfudJRvx2fL1VUgdQXuJVR53UjRZDVwN7JHwr8yViAkYCKcvGBMST3owkSPNiE1qoU",
  "key18": "3iTeDxmncbAVJ7uAAAwV9e8nprwB1kRm6ZXcBRTHRnSNdVTVPCGknE1eeHNV6XStpGNdsR4avD8ZxUELYMbbXDDC",
  "key19": "5KaoJL3dRcFCaRnhpJK6dYUNomKXRaUADj7wKaZAU97wYvEZcqArxDueSJgdg8B77gEtQwNvrksGAYvJFnb5PTGU",
  "key20": "5qBfbb1ee6CkH8psE3TUmJxdjFw5wAXj9gpDxSi1bvkWRdXyRDjaUpqBL3vt4RpBHuwEXLEVaHSH2SkqLeX8X5XP",
  "key21": "4vLkWivMWFU5JVpkRDxx64ndmw9mTKoGs9ADjbTzrHzicUv1p2N8rRHtsCeBT1Q2V5SwFBD3C8NHPNAyBiz3X8aY",
  "key22": "5WcTAfoAb5eKfoEC4W9JZ1wEbZK3McKrZqhDCKrwC2Cv4MD7k6VVWmKkVxfo2tLB2tj5eDwh9a47omSuMEqTNAw3",
  "key23": "5jspQSd53pk2MvaqAmcAx3ZX8SWH2jKsq6ddeDHEPfwH9Ukgi6Q2jquxbbnhnb52XqjcHsdC3H6q9DsADXz1AKsp",
  "key24": "2mGR9QN7uE1gghCoGztCEBcj8kMHTtGy8M8274cPkbu9AxouD58wsxq9YKPvd5VZzMoGP1mSpADpJYWUiUZiq6C7",
  "key25": "5nwXyh5ZnFRfhr7w48ru8c6pjk9VwSzdUJnQw8R4CJkYiw7yqiyX64e9uXKGSPN2edwpsyau9gGQTBauoz5PehiZ",
  "key26": "2DwxPAm2yDKZr7ZvEH853nv6pr5noSXMijrNt4Gj5hzFrnCFNzX9CLAwHbUoymV3PfieVKEVh8NgDucoj92vdCKT",
  "key27": "3RFkAicM4Vu6eFayYYEPPD6taWtAZTMJvwMGEJ8XCEM3HfY9L2QcXAv8zDyquAAtsB1K3fiGLVsk4VqiqfqzhbZL",
  "key28": "5EK5T9oMBEXBStQZNmihVMH5gfmRTZVD7MiWawSFoYDkofik9ZQ9zPWoGfRzDNYxFjskccXpr9nXkSe4sJPz7xoa",
  "key29": "3Ub8Xg6V9C7WcarZ27fDPMzYkWzEsc9t9SZK9rQc5yh6LLemih7g1AkCTiesJngTtDeESJ8fJw8r29ua57XSWv2B",
  "key30": "2dNKZaV23pvXy3Uc4PtkfQfAmG5RjNDj528d1ZqGJdfM8o25zXPpHCuCpCgqMfoDZLxRv9Y9qxsKunJSzZ9asA4B",
  "key31": "iV9HKwrnk1QH82B3SW8eAindL8hHVkaL1dr5Ba7aNVARjdC6YsZSXAKn79BVSSv5o8HXB1o1NxhqLQu5dWTFEW4",
  "key32": "3K67GUgcVQRZQ3K8yZ4xuqfkgKYDTWQiEw7HSAeiQGMunXX2N19PmkL4dt48mmTL789At661SZ2eVDBdfabVmCEp",
  "key33": "sQ9faPvKW9fR5oY5fk7UwQYn1mo38MWrarxhFW6CzNSAo5ak4L63f13sqJYZHtqZ5YiTYgfXtqXUAVrYS7cVWhd",
  "key34": "4aBcGNPfXqFBuVqzv7fMBEzwSyGfUQL3mG9tYc1chGx7FLx7STpKiiFQsEhtu4kfafQhFnNAYy48pYwmr5ySwj7L",
  "key35": "bsAb6fLErLsiagUotVLdMdgNNz7FqaoRPsCEcyKFvh6yo2yWV6RqDQy2b2WwMo1UF2Fijey5Y7cw8Wt41JD5Bsh",
  "key36": "4DKEgjGPRHs2iDBLKWGz2jEin4TPq72xTGsaxhqVxm7N7z5ozYzdHLYNEitCpA2v1GRuBB6VScZGoiCfayEbEuKG",
  "key37": "2aUd6PCsHgB2HVhfAiX5Bv8qBR7v7LEfJh8NVL1jzPJAKDEkFkYpTmFh5XNEgZs814uDWcBywgfmzXVyBEB7NPp1",
  "key38": "zFwRexCNpoK3j1q9B3H3nkeKjzSt3tp4hPYj1GjfKYgbLEsQUSUHGUB4NrMWi3oRghRfBJY9NPrjfrqQtyLMV3z",
  "key39": "gw5Nd3rojgBr5aUyc1jJZMakYtLmF2pLp5b87MRE974zmjywmpEAPAMbwp2RFWjLEAaamx6qDs99HPBcacZTvJ6",
  "key40": "3ke2znkp2BiwVz2ADXwKkvMjHDcDuJQ3HAyjS9Q95yDimf9XofFqERHim9Mzqq5fh775pHTrBeyu4wbWpeHU95dv",
  "key41": "sckpSGF9URE4N5pjSEH7eGFnq8EkawnrvSvXV4RWEF8xsH1z1np3PnvXQHt3f2Epqqr4VDfCDGphL6DLMgUnrzd",
  "key42": "38CkxxJFMV37KudkcF7JrqEAGWJbfHykGPnYWQnUPKn3X6FNa6kvFjAAC93AMVw11bv561DjkKgccaUsrtiEnE4a",
  "key43": "4G43FT9oJ1Nj1ZpmFh44c4rWf8psQKTpSva9LVmXidFEeWMYDjn8BUPtW938a89UoyQnpUP9RWV7dqqcixRTcyN",
  "key44": "gtdQihWWXW3dUYxswtB87eft3Y8KsSa2rkYJkLpmvZ56z5ULVqiRGBuwwvVoxSq992GXKVcneNMnbsi4mWfg8zy"
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
