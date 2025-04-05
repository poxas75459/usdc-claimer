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
    "239AJ5GmsnwMs46ecEzpbZcmEsnNez4VuKTjP7ZqP33Cqp2AuQUgG4LSMWm14vZiS9W3pcNf3UjcNbM5toxMfJHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3prC1y29QN3X4ByMDQJPdoxkVp5r9bqNitdRVYL8PRKBk1FqusmmBkhDM2WdLbupu8PYDwPRNCZnUpPgAetLLJqt",
  "key1": "4tRgxeu2vKBkv8ruLNg9EiVwMdNVwVX1C3MbTabKc7n6CU9mGDMgkTQqTvXnx1wnukTD5uSt7DP9cFdtbLwKUu81",
  "key2": "41PVTefM3EhSFSfHSvv4KWSbwirLq9K89KGS38U96wLK6NZD9ymxgteais4TbP8AgKRrUe3WWzPbuseyVZ9KbvM3",
  "key3": "631QD6fSSe4erfBkSFpovYpK8rfDHUKoGsjFFuzS481HkMau3GLZKGi2skNFwEqYkAK8M7w8htgXrDfuo9Va8Rbn",
  "key4": "3bGwox41mKM3bBYFCbPJavNZ7eepScgmbEfzU8yrNqgR2UAf3tbbERubBf2D1rzZhKZF9FDKzEuGDzXut7mAZ1vy",
  "key5": "2VvQmh8RwKrCSKpBCNUdmdTfKNCAgsukLrjieZBBd2qBB1Uc4Ny7LH9JN16FJ38qMc7shkBAPmzUXpno16oVKMsC",
  "key6": "483KhZBSrg9P8pmDeZzvhAbCVEvGG2kh4aAHisGLAemD7BsUH9UZM9CmiWLSSB5nCC1iqjQkaCj4P9PUUacsuQgM",
  "key7": "5TeTw4d8txvm9uhhbKi9f2j5rjz64CZLg153U3zSKQsaguyHQDMsvgzspqqHHmbPXRW7exKCSqVVafaqeVwACyrC",
  "key8": "3xBBXga8kvtNYpePHZjYVGaYuuTdFb7x9RW3FZ48Aj9uDYynRyawXcM6euQFj8BLQkSsne1jqRAqKPjyMczvbdue",
  "key9": "4qewLmcGRcDx6NWUuPHygTpqnLA9KAQywQwDppGGqrLpmXAeBXgupKiXngS7PaARedVNYAwscqZTX6qa7FidxpBd",
  "key10": "48GwMKPRuKXbFKv5G7d6UcGFeXYfcGTpKFFZDM9GJEsirMxYH4BMy7bFpzBjAvF51XZ6N77NnM3i1tzgcjoELWSX",
  "key11": "3uLN3DxBnu6NRrnJDAm3uZx24DdgPw8Htrz98xgLt3WKg8osp48YRDY4QrKFVGumpFGvYfwRXhMjinF2zA3CgYJf",
  "key12": "5gCLP9mZ3yXL4YmASL5JKEzePpoRXTkddWQtkigVk48q9jNPeHn3eibwtWvZTePqH3CRBXprdmSdp6CZhSCAzrKn",
  "key13": "2Bg4PZryorCqRWGZWPKe2LPYTDpgmzKnERWnEfqAVGLQqZyUWgrMDHaZHQqB9uA6Jj4jWJtQzz64vrGwx3waRXLD",
  "key14": "23SgzDZDMUF6GAB7Jbndo23Ysj6RpLFBHDJ8fZX1Pd2JDwxAbCBGuMSy13jCXJK2aAkkvaGkH6duhVneWybLrKjy",
  "key15": "31fuT8G4RspEBYqxEESku7oF3qFxiSNPhMryoCgi9ZR4UNhY7EuvXfYfJvAw85wLfZaF4i5oCh1uDgezGm832fa7",
  "key16": "4ymJm1YeWRwb4Jjn3rXnQX1xcYu7Jnc4CTuQELdvzosJqRgwWvwwDMxujA7T8wPBeZm8C3e3jS5qgZVoudyc1pR7",
  "key17": "3HUsVnEcaaw3Zc4CmjpeUWzDMjiabDsV1aD2Z1VkrjapAg6uiemxAwdsXCBmzKRfDS8815yUoaQG73x4KanSnyH6",
  "key18": "CR8LV3ygAaWMYkhQgJ8oveEtDAXrGhhu3TYKxzmNywee6FD3T1YmxGv3gG3AmZyMF7FbY3A7tjGGpz7JspQcQFW",
  "key19": "UU9j5bfCLZB5j5EGpmrXH1khqw9L6E3YXqubaKv5qW6yHhmbDASchbQ8V9E8aJ96atPwTjVJ3p6DYrSCr9MyEM3",
  "key20": "3yYAzJGja3HnfoQVrh64dcwEqdi323GHerLJxLet7396fSPETwTLvX1hx1bKKCFAv5gAwd5anYUyPVYiMHBLgiDa",
  "key21": "5YQWuuSTbntvMDAyAvuLgHaLAjqafry4ckSpNHiqyL4QL4ky79ifnutpsTVzgnbMn39dmtTE8vtiQSWvjqcLhxBi",
  "key22": "216RVzSkCDWLuz6zGtKspSigiTtpTE4MXNg7XnCsookw1S2fWfD3ccfMHizB8cuprC1wXLLknE5rUDzmfEeUpwdv",
  "key23": "4Ke86K37RqvwAkdcw8rjQKXtJKaa6w38o5SpNfqXmm1Lyaf51SyumGZSbdTWNpv9MqESAbz64EegMcuFP6p5JL9N",
  "key24": "2ds5DswYnTaLZaWVEQ4KmspCFr1z574fbw9rcrYpQ9woYaEgSNPwpwDA4BCoHXq81Q25Xji6ohehC6AwguyxxFoN",
  "key25": "59eTMB3hPkdzJD814DP49FXDmoTDjt6p5KYQEuwxrCRYVmLjPAZeefHYfv2Cvf4yvCwapwZmzewBaygo5cVd7388",
  "key26": "27BWQipDrzEHYkYJ6xwRaqCDPwCpCZuHV45WDmuNQrNWTGDx7Ls1psN9jQEQEsJh51hUmhZpGLNbzXrh998XGJP4",
  "key27": "27BGhztqQW9jWW1AgCzgWtuutdxq6ydFxXN2HvdR6CL7YwgdA1WsamrWriAtDAGwiCAX2yU88TKgMxdN4XhB2k8h",
  "key28": "pVs6fN81pmrbmypRo4NhzzsJ2CDvGJkd8ayD2sMTi8cM4ggMncnkUaSiMeQQyyYwPXJpLB3XJcrMk8YxRi552A9"
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
