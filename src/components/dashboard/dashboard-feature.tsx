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
    "5noQVZahFNJqwkbiuhikbbD6TyXfcbxnkXzYcnHgLyeAWLZbJXamKJEZSAAfDa1q5HuvmPpZ77djTf35ZqFt9xVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42RCxBcXmLMvL4f1gYzSoPn1PedtUe7KBNmi3cWrMoy8TgnKXc2WHDKtDF4dnyoHLwc2cXLeX4CJTQENkBsvW1sK",
  "key1": "5LjvzeD5sCGShX3uZhqxNF62VnoUtC8RbmFvNmYoVWT8Zv7khApgVCjHkMvJBSjVP6aW83GNGtihF2e5sRwrHN5n",
  "key2": "5TTCmBGis3sQiPAZhCUsaV9irTeqTVHjWyUM1wCR3qTwmcW2bXeMfb4BRbLHZdxkAma7qMTRgdysuHRbUvo4tiXn",
  "key3": "2KD6AFppiscrsVQoEkzn1T82J9ufuqX5K9qsMabui5cqs5GShqL6tzmUbkUGNAjvhaBYGPKVNmkx3qRrPzn2Pg4E",
  "key4": "439wbaewYET2QKJ5s9GLcx6SJnDLP79NzmQ9aPzaNR4wejEWhVsm6GVwUsZhU13Feni9X4nfwx7YKRkRdqwfyPVi",
  "key5": "5Ti9cazSfAZiZNc9VpMYa5EMPQhv7jyoRRDjj3yFB3ACdsckfx57BMHAqAqrUvTqKwz7gVRtjSVX9TJzvqHjeWpm",
  "key6": "2v7X35BHwCVwuxjbJC3U5WMeM43EY9dfjgcotQRs3ntC6vKQjuGTzsP9ZrroyMGexQQmhYBhvMfRvhTFcPnfneVb",
  "key7": "4oif3ekVFLeM9gifYREEYTMTPJ9PnkNKbf9nodN2K7DnqrfEx3PSSRPwrHUSCio9ePXySgqUi6gdJe3Bu217AmjA",
  "key8": "49ooPWvB7BeU32bVaKZ3Byfqu3bPcwvkQo5hrxAySxm26FXLx6TLtQxZXwfL4smiFM3H4wYei2ZVan9kdZnuTZCd",
  "key9": "43KYFz5RWD1ioShRtXoPkVFuoEiF3P1cShg3kgSQdC2n1zJ9FuRvJzNZEHDjGWA8dCD9UbLXESykN7oubTNEa587",
  "key10": "5ihkyGYsXeFyPaM3f1npDjP7mc1EvMzjBSZWHW2bCHVfdW26oF87fLXj4S1ADVG1iYWbMUTVrVEnhSs9KAStbGBJ",
  "key11": "2RcmPc5djqdT7h4hanYRBKeq8Y9vApgtCvq6HZbwJ9QsY4XPLuMTkoCUi4fyRps794LA9iwoFUeGfFhhY3pHVjzV",
  "key12": "5nLt48LjPVTZKpsM8rfopvzW1kUexdBkiaKNN28ro9cs8ShS5gZFU5N1NsrYUEvCCyvQEBxbkJ5C4t2iZ3EoXafn",
  "key13": "5vENQN2RCUr3krrX7iq2SA48u7Njanr63vjDn7S6u5xe4KBGEdseHtCfnUAMVVTTWu1yXDZEQgYXRAVQxmY6k4np",
  "key14": "4fB5VqGfKrVDVqKzsRet1dx6NPeyS7boqPS8txHbanVhNjyPLLRVkoPFD7KnaAEf6HHuviszu5FjsEJTVrU8CfsS",
  "key15": "3Z9n1oXvpugJx9MRw2bLFTp3m13LetNWYwnkUbpewG6YJ2FnqZre22qxBPzNwuwRBjQXKSUhXjqdEE2sSavygqEM",
  "key16": "2PkPyQyDgixXuiysiCqWWVh9Jvqv66mqTZk7iCHXaiNxFVPA3RccrUeHAFiGk64a8SfudyV3w89iZXoqDzww2e1P",
  "key17": "3XvFfkW1qC5SkXCNJkVs2R9RGLeAMJKAKSWQFSLGcYRbxEEnpfZ2VdsGj6kHCMcfRiA5TM1XLqBnP7rQqrwAHVsT",
  "key18": "psNYeCiyRMyJHUUbLtSAX84gatkpHtqN7EdYR3Uy4UawJffH7uKRV4LKNvBZfndeQnYfDTSuAcd6YXq8CQQd7zs",
  "key19": "2nuQrzbe1cv9bjX4yMhc2Dp2YWQM2CqSisBNJ4jZgQ8YCkKZp6rGavYk7NqHHwE4TX2zhGTdwHAuK5cA6EX5H6YC",
  "key20": "4M96qAm4PPdKzTVb8L2ytNvRXenimMexqCj9QFGELbrxdvH24LjRGpbT5Q31dneRjyWSzdCYYhFRvhM2HDfeWuVo",
  "key21": "2UM5CKyhJsLqov7T8kLN2pSkgU8vR3VNLHzEHspLwN6Uc6R1X4NqsUjiQYcNoMhysoMRZ7LENpbZdCP3q4Xa6ira",
  "key22": "3eDA4YhefwtFLFDkVMah1So7VM9G5hrc75V29U8tWcJZKUqXRhEjC34oZxULai6x1w1RffHBrtL2PK6KyBo7TXxy",
  "key23": "46S3gPSePXcmdVPr4zmdtMj6PFAurdRp6s6pG24C7Kuf3eAFskFVLM4Q4zxmH4kNMGWMHPtx5j9abNuuVe3TBBEX",
  "key24": "5xnSankSWJqvxN5JaeW9yHtwoCoDuB8fAyzMaMezocv6fuD5mK5sBUVfzXXWnrRtk8waWaV7WtExfQJyuDLoBGav",
  "key25": "XY424txgDS8zGVe5kg9qEV7C22jg8kRsGK5N9N7V4d6jbLDB8NihgZL3Qsh5xqkwEpGvMjmgHiBSbGxaoCNjQN7",
  "key26": "2xvVXpPbdQW1CUjAezYhuY9u7U8L3oNtgTbz21uEY8G71duKHhz6dxt1J93kvY9US7xLHHsvfATDz5fh6utnojuF",
  "key27": "5nJv4PvfNARsckEHCw9RAFhQNJmcR9brfN3umNMCDiGuWsHFncqLNZdwuFHjfqe1WrMYC2hQUvnzfbbE9HQge2yM",
  "key28": "2dWXpqHueHV1YDwqxtt9Cq6x9nKWjA4EbyxqZej4Fw3V6zxknXwxDBb4avDJoR6gMSx5R75ihGy3yjYmx1DDyQjH",
  "key29": "4nprFmUwpMSsNH4YxHH2pGqeLMXGxo9WHKiyV5x2mtZ5BDuoxUQ6TfewsW73ao1aHMRDnzPrmmJqGAk5zKDzqrPo",
  "key30": "23CEymEhg3aFRraJ9h4idVYuuJjufFHP1FRVhP1B1e8wXQunXM3NzPi2iB4FN36zohauuaabGjpwZHE9mZFwsSdD",
  "key31": "5sn7vSEKKocuAJVm5EzZFhmazahNNpaExcLFjkJQJY8r6aSL4bqgSQDeYSCyT1nvgBsfxkEhtVgLF7VHGrA24dUd",
  "key32": "3FQwdzeckYXtNu79rC65qJrYLmcgaxjwkYSFrsaCRBq3wrghuU9ZP2Frncjvo3NJg2Dsg4YhgkfXVbhQUZUViraW",
  "key33": "2DC651s7Q4qHRDiiYYqa3XcxH5YeUYDGQTCa4Cgqd3qEdJtVJdN38LkfA2iU28PLUJRiad2uVrFKjmPwRcego4Ma",
  "key34": "2hDkmLdjtqAUxNC4ynYBAx9cNdksa851Q26Vij5TANdMpMhZ7ha8xrUKdAeRwvTx8XqHfbvvLW1t5752NNgeXU5d",
  "key35": "2wKtenDHXbFzw9jEHtiyTenLPnze1RgsgZitFwAQpqgTbsw1HxfcuRVGYd5fqQTqZCHVkMnsRMVoBvwnQ98nopcv",
  "key36": "2vJcdE1XovVnkdEcko9gYTemq9BBhSRRem2vjFjp2xUmXDGc9f9XPuscFV19nEhUfubCr2RzzimTFmFs4CNUiWSP",
  "key37": "5JduCJNcppjuCNWxPqbPUc1PBCnkDKzWNV3oWzVTfMmtwtQwFJuKddHFhkWDxScHP6YohXEmw2WKmgeuHDz8rF1t",
  "key38": "rUBdSAtBHY5uqgxqwcJLCGUFBY2hjHD7ySUW7AUFkU4A6XhYkHib6ucVNPavkwMMfD5uZrVahS6C429VRzh5NZL",
  "key39": "3Bp3jnkmuhUVPEZFpP4PgykcbdtDkwj6FXahxWv9Jz13kCrHYukr5XRF6Qn9a6Fah8PxPsyngbXRMaKMMoBLrf8p",
  "key40": "aQ4M1Gd9TisLmsHFx8xh7iYYhDgxFDoyBXpqDWEAFm9PNenvyRSrsV9eu4EigC8i7LBw9AwgMisoPCJoqtLxrGX",
  "key41": "5TnFHvgWNnSgXQF3X5AtoojxWwsPh8dJ9xBdHnvw8n7MqnrkhiFt85RMfB3Nmj14N7pUsSs3gb5eFYYTT5TwwBWw",
  "key42": "3uVUMz9dbiwrHUA4NrHUUZ2ajwDDTQyNGNRytK7WVN7rXpq9ygjq1wdRBiSRc1DrDDgCFvLdL9SjSNUfzNkq3pJS",
  "key43": "2BoFcZ5PSKUCxHVGa2i8xySPbAnduc3QBjiVW7B4QmynxpjavbD77Jmr54F1rGEpVCwb2Xvn3ExcdsmSncXpwcKD",
  "key44": "2WgC59zPTJN1WwvFs1411xqyUfttTTmEqyNc1e4mD2k7v5orjHSKuKKe3G82iokEckUTN147hvTgiBqdKrpgAqSe",
  "key45": "3921ntr3pBZFeKTAy5Qzt6N2tAt4UUfsqZiRqf3g7f9WQTYAhML2zQrb2AV9aNo1L1tozXhb6tztcF38x8njCMym",
  "key46": "5KowAsw2QCu31mSvh8VYjCwn88Ry2E6ophJiv6CRCC7idyy7YDREX8PbjZ5B3ma2ahrowFrwKhxwZ6u2GpWWgCTa",
  "key47": "38o9JsAZTMWG7g9FZWzSnZEmf2Kxq2tQevLuFNPykrrpC69LJqBC8znSfcgB4oXwqvfdQSNJHMW6hBUi7sGQ1sqh",
  "key48": "37UL4ddg41KLdKEANyDzawxRpwBYeVTquBunoEjRrYmknHoDHpVBETuHwf734ueZxat3DDQmpVxft8bp7EaDiZ83",
  "key49": "cAbemrp6QaQ6ZFoHhfjNfuEVxUvw8yWybSF9PuHZNvSrDNBX6R3WX5esDqzxRaGsPDrwp9wfpYEZ3vnwb5G3VEi"
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
