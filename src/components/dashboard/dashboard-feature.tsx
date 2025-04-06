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
    "4d7jWYcKWSEtJ7v1FbhyHTVPgWa8waE6dNYhRV4a8q8XQPta9QeW1ZCt9n6eeoJpAAQkJMkWsAxFeARSmb6vuRYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TEhGBsff7Q8uapdbQckDVFe6J5FxbdSoNPzn8JY2ucQYfqpPCArAEymG3tZPr51GsXEm2Zj12uhxZu7nY1gvLqE",
  "key1": "265tgtNuoMLbvCaDZ8XyfHLD3N9xxYBEffF8VhyzmYcJsq3NjhXgWgGtH2GqG3eVrg8XxYH8f24gWcqBcQAStTtz",
  "key2": "ZuewGDKLmecKpwdxCS31U1o42L3EwiBHLkwDTMwCprum4TyQ9T5FdChc8mbEqYXAjFk5sjpxgvEzfi2GE16xANs",
  "key3": "4mKfuJrDUDbnjB5MD8ryWpktdJ7HWtW1UXXzy1EFd9mUtEU4jNhayb6HkatXiVGuah8mTENUxPt9FQGZaHPvsZuM",
  "key4": "5xUmGFnDYDoPf1bJgVWbM4Ff5XLdbShzm2LRrE83boFKq38xQ4P2YGTDEbRP6dLEQmSTeXcq5VfLMuZd4USea9sz",
  "key5": "5bLhgNP5ub8MtPp22Uf9MMxheSKsT3Q36YsuQfTSnuSERpAMmJyTzxM5Tx1Y22AKHfFSPG5GNp6yrVN7CGRNgzUU",
  "key6": "C9oBz3w5Nznt2TAmnxyd5uR8mzZKgicRcZ6GCQr26FWgYr93PvPEzUjcSUaPMefgKKcnggonypwJfbesubknApY",
  "key7": "24ykJgcXr92uvYnKCCFS7YacxkDYFznzcdcjPLpSUWHCgqu6zhMPjMXDnBUJwAmfXUdo5e1Noy1hvCrPasGJ6mg8",
  "key8": "25JPdGpkpzwsnsvtmdajjykjyTSk4ZzuDjoDWdff1czuyBsHHTRueofHn7e5RAgd8nW8yvQ16dVtMR2iJExfkB3f",
  "key9": "3YzmTXuRN6YuebUikFz64SyMNrLUAuTSSc8HMpVCjriNoLGsKvQmdoonrCS7sUKkvbHVMQb7kGRHNhM7jyEiLMfo",
  "key10": "3Ebd8vXQYKV6953JUAYkNjg83iJ1z5GvxKyQxzw17tFaNJTvxR7nyZatRq5Kmwubx7Bfygz1Yh7FpmwGWo8n6weD",
  "key11": "2QD6TLDdHB7StRdV2jkxLHG9fHNXdhgNUL7iqkVRJQhJ2iPfBNvbCEyLPS4WrEWotcFe5oAF3FYrWRP1BNaCb64i",
  "key12": "4XYJPasba8kU5kWAkkvM8KrzjFrgTBNoo6b6WKD84VDfhkprE8iLQ296rZ1WcN82yhwtK9YFCwRZmyAJdXMRmSAo",
  "key13": "27GfLcBWoaJ68SDLfHnF4MrxJSii8VrXT6GJ5dfjE2qtgPtsZmt65868oHAgNPS92BfkPUD1zUdXmFupsRXDxVXc",
  "key14": "ToXq1BsYLrvgwvvvRJvLWVbPUQ2RCuNT58pFkUsvSKZ23VM1M9AdhcngUJw3sjtQZ2xqDG6uDLmjJS5J31jN2ws",
  "key15": "yngjUUw34xjQ5UUt1rvqqACSSsvstyFUDyRkmR2KeFMwFHKMAd89DXy9264kqBAwUbHWwQf3CDjo5CgnHw2teBm",
  "key16": "4Ep1X16kZXLFWFeacFaecZgsE38VZXPaT8Y4cNX4D98E5nNX27hUksBXaqE7wi5Npe4NX3dBdcXa3JxPw5Sa7Cck",
  "key17": "4LMzHceuXAGEBUpZfnVB36srBWMagFHrekihG6CtKHuahBQqNonidaqDkLhHnPrttA3pUuVoHSZvVxdSbDwW2XUN",
  "key18": "rJhsSgxQRUj9g8o3qUUqkwVGoXthu914KdYigWxxJbGW25afiWFJdCAqv345ZeSvhWfniAPzqK3RmnDWLMkQYHw",
  "key19": "B49dcUHwvu4gfkSF3ksdCEuf5yq9MHmCNheU1o4bSNrGZfAXDEYXBcfwi52jYbknbHiU69LLrxA3XPKaWRfQRxQ",
  "key20": "KC7mycivjj7Z1z27zMtcQE4JxKCgomQufzxU8b9E7EXPs6Z5SWzEmtrwtPHsLv67DGMKRD9uyLCuWrMHifE5Umv",
  "key21": "49FNpQxxPRkLN1SE4YTPFWYfPYXFMCD96EBCCcWGtrZGC8Z6pDxGYGFh94EzEoPdqMkWime7PnZ164L331JtbhoK",
  "key22": "228HBSQoNaXkTsWCGMTEDSBbzTddY8YkCKPJzCoNrSYYje3Te5iS7RRVuvjQpBai9ssjSpq9aDWEzL89XjfUpJ2B",
  "key23": "5q9vQUtkBZaTFVE8jyPZyo1nWyadj7jJVvSBaYQ8uFRD83nHWd3umiB9eMVVdwUde97BpDsZwcZbdNoLYtNLU9SL",
  "key24": "XK24cgEGVdm54eZPVLUCb8Pt77QMAUEDgak9g32CjQxLn7jRDWNXsP7HRsmJYAEEc4Be2tgjTbm9w5HErRbFiZg",
  "key25": "4fqCKDeGngji7nh8mS613G43gUigqLFf1xPnuu92PMfWxUNgxuuFiVfDeFsVDYyT9ZHmewHnh3dFUsEsEzbDeRPe",
  "key26": "h6ibtQFUx2RwMZ1dqdKR5fGmPomLnVyM156i6RcvZSff7J71Ud6ecyB1CGhwHsx4VqkvxavtqUDt1JEXWXMZCRb",
  "key27": "4hMJ6mGsXXFnhnrKJ7gh5GAAu937nsc6N1H4bXMWNUrTkncZXVEtHG2fEqb25e9eu34q3ypVnL7HCHzxrVAWj7hq",
  "key28": "2tWN5Nj8JToj7ai6D6Ji9rR2wqtDJoqM4wvR2gSEwaLqWAiHtPx1xNUS78FKYNitGDF1a2ULuHbHRgew4PtREd3V",
  "key29": "kDVPfRdXfwjSVF4BAwZ4LCuuYhRCQwLe9M6ctZnJrn1ieNc4FP5ZrYoCfRw7NuyELwrPQZymnMkwmC3B3fGoBVy",
  "key30": "LNcsmbfXrfssB8ue1khqADsqWzGALc8WU512HupHbLEUHE8GmpXYMPEJmWLmBkmjwE8u7UqNXeUGj4tMqHset2b",
  "key31": "mLMMMXnqSJvcXNbe3UwoP1GLR5rppJLbRy8fUBn8RQEBjDifu5gMW4CcmSDh3hWq9PhkYkRVPvqPdGv2VRuhbqu",
  "key32": "5GrANBcDeWzuVgzGwitYgVk95BNVAa1rM3PoaHUH7JdLcegGJvBEgEZNRCNUToR2mUtwLREvQoQUvTpt1AqWmnp1",
  "key33": "5ihY3DdPyCSDZgmP3m7wcg4G5sRBW572iua43NXQvC6Ps8hyRiND8fW8ZEcaEQ3qzsx48bXp9AFBToRXJnZAZExj",
  "key34": "2hKtgreB3D8w73hFVeYfCJUpRAZfN4FXzVpEVsonscLMuN9AG45eqh3Bzngon1fZkHSbJRPzyTvXnMZ6quWCSYE7",
  "key35": "41RfcqLs5YJJ5deRxMKtnscmB5V1zi3VQZmmMLJBKpmpbVZH1iiw65AfCyaoTx3eoTTGMzLk1igHQDZdvy4LDvtA",
  "key36": "5axt4Un4vrQjrXXuyckEQxra9X6GMUqBEz8nsGjqjGsdW6NiWX216CLw2geQdTM6ohh6Qmk7KZAhpmTRVzEQTAo",
  "key37": "65s18vCd9U1fVmFK29KiR6NYTLuYgxEfFgDaAS2GPHLUYpEMqJXjpJ38uof6hWbnDACg97M37UAo3jaY81eVuqFM",
  "key38": "5CWsgUZ6uzgPTQQyRM16nYbWvUat1Z7UiKD2sSC7QW9FBtote5MwCAYUjcVWqoxoj8JBgykd24eb82FdrhWi1EAN",
  "key39": "ctf57QsU7KYyNV4Xh46bwivdP2rVqstg3mQnConzzQfeyjQw38CofjmLBG4mLpf549Z9gfpBr2nzbup2NBnVgSh",
  "key40": "2JdJJLQur2TZhB3aA3n56vdzEDdkEJVGvtFHnhcmKw5qHLPLJ4jdzXhYHbZoKnKRmfg7xeQUrUKVJrCy3JG4NU7U",
  "key41": "3RSNn93CfpASiZGBRra96QDMKDinoXsBdZ5UFjXnXcPYg7zu7tcqnjYZDpfAsHDrgWJzjuUwU95qetRBMjpZRJbk",
  "key42": "63QcirWFhoXdh8A93vBknu9BApqhbboNkGrHnYwg7dwDQLP4H5u8z5goy9Xc3uoRtdFs7ASU79H4xo44Ah6UWfk3",
  "key43": "2Lg96jDzQJ8mr8zh9aUiKwVKun67srtTS3qZn7Wgc7Rvxp4rX7Yp6F2BZKjdFiEjETbydBuiWisEcWN7ijK4dCBZ",
  "key44": "9J3mP8riDuRtUvxSqw2NdiQSFCEXFgJ3EZRCPsMNym9vvy2uqGSV4BgyxH2jZK4SrwEbF4mSQPNxvHw18TsbxmU"
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
