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
    "o8Rq5c4TU8T6WornAUpZH4yYjCoPharvAJ9obtRYWySwmKwgdarpbsEV69MnCn2zfyzVHp8miry9nHRGy4RjzK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5REwSWNm7VisqD3awzM2k46SMYvZiAKCjmMAuNp7rZpJG54AHZtSfmPDUvBrZso1r592cL7ezcuHUqWkUjSTKsQN",
  "key1": "2PhZ9CohrzHndmjP6VpefCMQQYQDPSzq4cjW4bQHykd3iny3uawwuLXVnNcbPtbic1k4ihAzY8qCKt76YscStYQi",
  "key2": "6ux7tQhrzdgEXyMU1LREan9JnkXN8XQBDAnQ17CfajRpSk5yHiX33AMddQBJvkD9QBfi5S6r7qfauTeJ5DWiZPQ",
  "key3": "5YE97CA6ZjqHFET1JFYoFUKvCSMQ857cXXdtmh7wwfkECZvqEeGmpFZuRr9TpKFPcNg2SU49ch9ckpEfqJHY9avH",
  "key4": "4C3YhsVxjiwTayLd6aMcH1fGDL8GMJE1x96unme1AG6V8yJhG47wjRBH9f5sx39RA9bnpnNtoNxbWqcvbMmba1fD",
  "key5": "49EUSV7jd1GnFQjJUaxGMdfXttBcxvTkrzwHVQ7QctY1WPKbW5ycMUCuRksNzPDyScC1vfQ4Px5RHrYx3BbKTcWA",
  "key6": "4bUU6wMsorETvLjKctdqtWsmXM3qzh9WHQ2EfCfro2gkJkymDK4FkaoaCNazuixwNvrTr2qyZ816TtVENyLF8ttL",
  "key7": "4Xsyfpe9PCYmUGcPGnKdPV6FP5hWznwuvhM3VB1H9P2cWypxqkkE7v4pRoPCrLQYjMkthsYQyNhrEYsfqUzFLFA1",
  "key8": "2bgEi8mHHMY6ABvm3c88sFAjnteLNftuynfEdnbLGLsgSRFCQzb8jd2VsoWVWsgZsSVMM14LL1PTj9LrXU8fL1Wd",
  "key9": "3HogL9msqUuJQKve3KYHrEkAFx7bmJyf6SEPzGd7arJfopi8WXnFTX2H44N74Kg9TbTJJ3UDiDwc5h5xe9o1PTEg",
  "key10": "4y6qjPjhQADrT5dYdXuZNGzcoHP525S1k3NVpaDKeGHCuQ38YkPodhzffLxMbh9eu2hQ2A8mHUQhDThzzx4Zvfsu",
  "key11": "2aZ11A3gn5eea9nyrCjhfEhdQBzptD8om5EM5epCUrnE8pHMo7DSKNpY9iRSeEyS8Sa2H8K92XXWjiGFbfDYN9ZR",
  "key12": "4CU6YXDAYLEyqCUGqAYTeDRj8bB23XnwLdoNEzWyvCLwDQcjvf2LEECznNRxqkJNdLNuhjm3hP8JcWHYNuto9U69",
  "key13": "2pQNc16cxE7mW5Xs7QsdSMSuyNeHg3Gmwqy5Qrt8CMtyUBD8K82Y2EZyrNzsAboakQtXtVdnBvHF5fUjuGTtAj5",
  "key14": "5qiCAkuTwUAgSTQWog2Xy5xCFoJgPpbw99ZP1jonn5wnFLyFhcbCXEr4F4FmG3R3iqyR4FYvNASzjB9C5VtAV4Dj",
  "key15": "2wf1bB6eaKz9QEZyUw15bxLb7erNxePm15xfAPN9wQjsmRgdTmDW6Hx1wKCYgWWp1ZwG7EWV5XXccZSFDVAS5hV1",
  "key16": "sQYPgU9Pjo6QRPY6FQp6VkB6eDqyiPeMG1P7Ni7dqTNVxPzzagLYprms1iS6Pgu2hKyyCzXJTjpnErXZ8UKfL59",
  "key17": "mdmN855kxANfPQbWAF3A7sFuBsceTFHTqCYjgbsx4U3ghAg7JEhefAVKRRdQFnNQ4Y869mdj784bXzDaPkYAU5f",
  "key18": "QgJhAUiFPyyMGZzCXHBTVrE5PMViELAnqfJsAZN962LSNau58UvN6CBvFzRQJDHZwu5fWHzptsKuTr7CksYzHWX",
  "key19": "3orB2apYL4KgPi37baRBm85FKYDCNHhU2qgmNF7qA54brrWLGGihc6zktvX3ATXvC3mVwe9cnQWDRgaUsCXpEeXa",
  "key20": "4GkGpdQu7NaTRmScgDXXh1PKD1EX4QXswxpV2xMzSAp3HA2suXDZ273C3mtzw9977RiD3rmuN4Nhzvop3iJMcpYn",
  "key21": "5M9jV1xKZLTkj4PHPmNcCYNPN7YmSTjiXPzoEw339UrkNnPRjNN6rdbCszHMduFMGKwgKQjaKShxuddRCZzyZMGZ",
  "key22": "Sp6fSjb2smvEXqkcCF3KQkxBNopP84Wr3RDDKkdyktuKtUVKom62KhEVzuK2KqCSV62gkfpyvwtqBQnuQpufuvV",
  "key23": "4WC7y1p93QFmNbRFiH7C5G4nj4bFpoweBYznqizkvgujkzLFp5SUWrXVvzxbCwsS3p2HDCssfC7Myra54p4qJPu6",
  "key24": "2ryhuPdoV7ksqH5X1EiwQebgrsaDtcMywSfFKQQ2w9Z6GJuBYTfaRZ3J74DudYBGLfRzyAXJBNS9VouRbymtcHhz",
  "key25": "549KQUSWMt89MGR98PJKaoRFmKyaoL6jwrBTuTBYwhMvx11KCq4HWWRhhB1LzFAYYYJbaQQvjb6X6fKxUUV2v55n",
  "key26": "3LAT2N93UhwQVG3px3kJW9DQ1TWow6HJMFUiVLV7gtkd6cUAYMQJyp6DP7p4D4SbvdfERoQE9CLM2ksJuD3Az6gj",
  "key27": "58MgHtTZw39VELyGxG7t6B6zsKqK1vn9J7JQ6ifKjQqotsmrnj311ayodCrQzxmu2sEkQc8x5K7tJEqoHiDTjuox",
  "key28": "YG2AV5zcBUs11CkBP6C9KH4dKSBWMo3ScmnRuWup2z5Xz2P6CsrEFfSTKpfQJVm4VYHe6KXnD7BE1SVp3deaGXA",
  "key29": "2jHFph6vCy9vue5yAtJpxKYz2oYvqEzLJVyhn5X51kxXVZHuDuVbQhKsuoWsiQgTj722XmmAyHhabfhLNJC26b4t",
  "key30": "49DFyf9NtgoSaaMBEFRXTrzsJ3nsGPBbtMfS6DamdqLP9QjymDoaYude2TR2bKAABt9ZJXfTo112hvRdWHSPALAf",
  "key31": "3jGETzsVxjbiHmYVbnd36ADPMSVtQQC71mWx8U3wxuTboYtrWeB29tE5AL2mNGcj4zyq4h58wj6vCWw4KZXqzVyD",
  "key32": "PFBHQY48MWx2jykhjxEidS79J3rTVKmxhcx4cP8JVHdbbt6BY52STtmaVf2t9PCfP2HiZouDdk8F6bSBsmHHB99",
  "key33": "N75E5xZzfgBEYTSEdJipVFGWCUkNgASdyfV2jUK8b71WWZB5795n2JAy8fVjDR2obV9ZcEFComnSsv8MAMjuSi9",
  "key34": "R6GBDqtVqKk258Gfa368depZUFtc7GQDb99ZApJLquJuJjpzuvwqBehaPDiqTsjrQhJp4hhq9yHBUziyw16hQKB",
  "key35": "47r97LrW4Le3Zrk2nrsqqbV73gvx4kyA8XQ6dKbpk1kH1crxd5r4ndTtjY99gtVbaNhoZMgNCVEA7vs2iA46mLhA",
  "key36": "55B7p1LQXixterbornvNXgP3JvZipvVUy66nQVYLVR2sUTaswpnds4x4VrBwFWWjYC7D3i9wrDRu59nCT5YKyaMG",
  "key37": "JSkQ3n8jWL7TgN4coWGENxkR3pNnbCrvRRvcdroA8P7Z4CL4btGnWr3jGoU8UX3ZsmJvrMXq1H9ciUUajJv6Soe",
  "key38": "4aFDpKyGTyToVdRVFo7BQdd4pDYoA9HPWkjUrnPAQNZyHY4HFekQP5oiKVBvhQUWZoKK8VC4HoxyAuCu3LFs6Zh4",
  "key39": "4zDMzjNSjGz38d2FKABonwAN5zniohYAdDVgdPKGx7pVtoGV2WndEZFhiyN9v7qfw7oDGaZuKv9BYF9juXuYgUoR",
  "key40": "4gGTE7z3f2Y2cTBCH3YpaEpMPuiqt6zkAndjcuw7ZHbgxnsxLvGm3sseRAS5pzkM4SnaGeZPsQEsL2YcgRTHBLST",
  "key41": "5UJ8A7CgZpGw5cRp2aZTyrrxoEAh9y2DSFrVdPxPfh2pVu9PLXcN7Kv6EYECPsFMrHVna9Kmv1uw1xJ9j1XzS2Ue",
  "key42": "3DbwTnbeMkyyfvyEZUHon14vphJE5CPiZTaTNiauEXPjwCwHprbzycrNpbHHX77nAap9nPaqdepg67pkQqE98Poo",
  "key43": "2o2819C1LXyqRaiuaJPDvoSRxGCyyc6PRcuUAYbwww5Yp87PwhRvshh88wbrznEgX9iZshBt1FNjqcUvZzGcecmd",
  "key44": "122WxucshgJVjv13oaWSqhARj7hBsQyxDtqJEBkookDxh27ssnko8dRfZHsFnxj6iioRxgy77Y7SGCmct2nHHCeS",
  "key45": "3H5Vvi4gSjMNdKBSNarEwJMCmm9kpdnBHSnHy6E4sSUYC7GzcSCVnLfM9VWyjJqXUUBwBVBYopVRTegf5AZUXEfQ"
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
