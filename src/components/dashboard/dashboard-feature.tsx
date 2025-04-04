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
    "5fg4FvwVn7T64JTH46PA4EVe8yri9Jj1NmAdYnzjAGJV8bRsFiy1jivLPoHTfA4iDvDaqU7bYf26Cdwz6p4eGLaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BrVL1M31V7mCQ7veWqn6Z1WdxkbrGbXqbTLEgemeVfGxuTNz7BEYqSLiZvC5iu2f5B476JGQjhPcPw4PatEhppQ",
  "key1": "65zzF9675RMcEqURoh6Rm8ToAU6SEMMGxPAzZgFuWhm91ThATjDZYk9ckfoQqh3bdiD1NoS2sDTcDrvXFPeVLPJV",
  "key2": "22DJEBRtEss5oRMGnX7VoroaGzJpq3MwJ4UkZPYc6YbxDBVxwsPChbVmG7aQjK2cyC4ujB4CQDjVgGtYx4sxUnSv",
  "key3": "4yeCsJnGWVy459BryWRnE26Mm78zV9pXdYbSNmtvfnmLmNGJHK88wvmViQS1WUEay2y2yAVpX8EoLsyUYmMNr5Wf",
  "key4": "2oVGH84mgUS8ZuB7Nw9W415i2e9XLrXN8LZsKrbmfL8YbqXWwHh8gQhpAD5TXDyEFQaALLh11D65NPjbDdQ1jsSg",
  "key5": "Vb24Pcx6ZWoERwCBYyWogAFitnaCEJ3SjDAfFbGxVLYBtPnbjzfw94m3uL15N7wSewfDWSHVqSCPuVnsFDCmNnY",
  "key6": "BquiLuAgFE1Qow2bTFcgoc3ypZX1RKNtngBSRTDqBCsTs6rsihe27CocCszr8EdQpDSCVrbWJxKKKbtSK69kohf",
  "key7": "5KMCgiTdf2T4oLM3m2R8o5ksnebU4wYCBNdkJX1Js23qKrXBdTNMtkcfxY19AB1dNyG8k8fPm7RnVVQr6PCeuXqQ",
  "key8": "87Nm1wFAaP3vhvwwawX6KRdePr1DuVxiKiwuPFeZxppxwpbvxqtusUa4sDUk7YfKYuLSTcXLrYMDGvVdrNTyKt8",
  "key9": "4bPhKzBYz1Raz7QGh82tJaseSjep1fEoas9erJQwbHeVPERkyM3m8fqMC8djpzCwB4GFEivJZ3iuwiy4C2MGaTUM",
  "key10": "63jnsYss3Xid5EKidCKvZRQdoWsVoE8nLobh8P7ggAxNY7XPwBtRJuwbsd5VYDbroHD5iKC1Xygw8sU3kASRYPK",
  "key11": "41yZSTei7ysyPvL8hxbD5vkGSA2t31HbKXet3AWp1oQft9QffzmvBLi4tAjssdZWRazTtmeTuPeUiu5D9TxBsShi",
  "key12": "4p5KxieADQfDuKwr5pitMcmpnpdohdt4yeELAuJDq1rPQ2MLwNvDpRJfTSXufgP5raZyvy9RJogfisYev6UP76cS",
  "key13": "5USDYsc73nvBAM34rrB7CXogPw1XmtCHZEJgMZSJskcettvjK9NMHEjD6tBUoRw3pDXFoyf2aCvsaRdYaDySRGsC",
  "key14": "4fTHNwhR9c44aQ4XakpTCxy21riHFP7sJFKD2GxD6ytR2ZidzLGuzMohH2gE7cLrxUHbFRKrMmXA9Ji2mfsNL2CC",
  "key15": "2LPXwtto98j5NWgLahxtHz1mNtnjiLfFBBLy7TD16R6S5hAVQhhaTgsRtoJYG6WNwYaqUcrAViEWQPCZaKzC3a24",
  "key16": "YPdkUW979SwSMQYHDFFBZRdz8UgN4wSF2qgLQA7rGGHZz2eBJdbB139GUR8RAf2QFHoFt1mnALDkZSC7QYE7Ei1",
  "key17": "35Aah4Xr3Xp27yMGDyJ7rAHVhwxGQHZV8aJi4CSkjsFv879pK5TJ79YjeQTKbhoi6aBi3k8kyLF3EGinD9vNUqdZ",
  "key18": "41obXg4vMQDbLaFc1b7e5nPYu1dn1X7b6hkCA1LkbwxKDJHAA7h9cPHoHhLLR7S6WvtRzC49Si61tBYpGMiBkhh7",
  "key19": "5FNmzT9d1uC6XsLDdFPXjjj8r57ti56zzeC8Z2NBREUfnvBYcrjKSzd6XsMjqGAvJe9U6jnV4PH21i4iQuqRvDM9",
  "key20": "4dFjfMyWWmaSMRNiY6Vr3z4h718htRbEUrTNTRbeZdFCQHMa2wCBQnrhcrcXjKeshigNhB5EDoBhKmG8Jkb9P3zV",
  "key21": "2aw76VFfBBewq5iWdERAXdYaPkNyy6P5wjyrMFupjRoaTeB1Tr9EHCiSgTNnz16eNVGZsnpGg3mdFRyTYB5qSFdK",
  "key22": "3AGRTZLNpgRptLFyCzoTRtUmBmKXaUDhmoR3sDYmLU3PmaA9Hp1dpqDxXohWhWVASS5h5znsdAM8j5rMNnvdoj6b",
  "key23": "5qhuHkq9vj5pqx6CpX2JYMCQUc48Eo42dF64DFabVdGwtMAXxXkEmSovJvWBhdqtnY4EkKSisdPjTxSRAtqiJ8nG",
  "key24": "gdhtGq73EQJEb5ecdSSGf3GVQWUheb9MfQSb9FsD5VVHPe7SNzcrVytKKJBWx8RwMRKaW9taKVUYRdAjV8QPiTm",
  "key25": "5y2MBufhwqmPzEYTo3bEX7vBwAjCCb31RUaYzh2MpYyiNQyLET7Eyzryo9ECJRaSgpVZwmvRff3n2JKLc4BDB9X5",
  "key26": "4fcFVQtKm3bZdvXv1czAtFi5KR8Q7mwd9MnTPAKJT5BvgUiZWfd6th7992JfcfBVauGQ96p5tn6JYoWn1m7z7pnH",
  "key27": "FjvixUVET5AMdDtbRqw3TxkxsenstgFcf5pBK2W8ivLb3qdm4hYGH3LdBm6j5y3TcRxTWqJkfyhqk4gspT8oCvG",
  "key28": "2ivEtBCJQhmeywFrsW8y1Ls8qhv6KSJS6QiHxffwcpmnoMgvNkU2n4cYptY9swf7t1ccqZvWQHPijHHrRCa3b2mj",
  "key29": "4DG7Go5vpnZ3aMGgrYSAVp9t73QkYnrLuAwFJTpYCY5bTRw77mLNJ8zozX6KdgHKoEtG25YLvpZZP6UPguNuSmk7",
  "key30": "2EAdaowaak8qKG9KcDTFBohpsnTCjENKv5PXqLLbX4q2YvaKpzmuTirFPW6LMym5A39Zzhqds2KFoKVkJQ4GEszs",
  "key31": "4kuigiqMEEtwEc52PWg7sCW7iPsbGCJYiPZpTgs6eNctXbGtKiwtZRPL6KWTvm2xnfGhdaWEBzmSk5UXGRWzLB7Q",
  "key32": "2r9vm5BoNXcrXFfF1TbuutBdi27HCE7zVHYBwNbjEkVq1BU5ZqESU7gkePVTSKY2z5ESd36ACj6QTixmhTS4obiG",
  "key33": "2tY2G8YswZKyzEKwfjht1NwLuBfAQhgBKC3rNVqeiULgFZSFKeDXx3TpiQEgRMbH13o5phDq2AJxRZXYjuajhd8v",
  "key34": "4b78eYkzmjriyQWYSRYvz62GJXBbR7WJUhw1wCB8bccRG3kd6ZVaSW8nokzPk9RETQauFfD6xeEWyhcuDbJvBbEG",
  "key35": "4UGS6c6uqtpM4fF7GG6HpJTqgrgPQL35vE1NqiTWzmMzMP36kgdYtrqLWfwaGMDEK1DwxvAmQxDWrVqoB19fKBSk",
  "key36": "5iB7rDynRxTaSucCQKWFzmgbT6sHcaqDgPrJYbDKvTe4apTX3urm7qYhbTG9UFoKYqyaxCXQEgTHGsg93u4iuDAJ",
  "key37": "3yMdQnsu73EERPow3N56ygp7N2UbghugiYR4p4p7CdtUV9rwijLy5kHsgpsWKA43AL7HmtSi3JLMkSKVWUi7M3uN",
  "key38": "3rSah9SUqoLgrNh3yvTEWHiHhsLHrzpHhZb2W3RXhfqeRQ6Teknc9MbWHnrZhYfVC7GNmybxmi3KWFLAHWecBzPV",
  "key39": "2y1AxZMZKZv3n67ecSFbxgWPmnimERYynuuntGVTtbqysyKZc4MAUEQzcncuWHfZ1BmB56fa9pALrHA3xcPg83RS"
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
