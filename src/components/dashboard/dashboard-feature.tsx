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
    "3M6ozk6QDrBQseaYV9Z5uGPTjd9xwUHBKEAiqDRdjhfkUP6NKy4ZfPHfgdPhSohcqxwhWa8och3YiupacntntcQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQdsWgNBEN9ZvSjo6NPKgMGqVNEkGsnvhGDnFWfpsjw3GBR8SZNt74qghHgCFgfUVvpdjsU3NYC9ZdtwaP3pckF",
  "key1": "3Z6Mb4mAPk2PkLeYVUiZRiXNeJE8ocdEBCCtATo8Cr1SPcEvoiFQXYEr3n4d3gJpJEALBvW3pvgPvHwkzmJ3kGGu",
  "key2": "36h2LvYRK52to8i5qhzwKtj6Th8Y8HKAZGEpwZtzRRGEMu7aFdBNacjWCx4KtVw6QRjPQqr5wfySRsRiSNPgVEzT",
  "key3": "3cYnj7AfqTVgBZp59djTBPPPsBknkgwNwqQCKjvJDyesEH3Qx4TXGRhtYEfFyQaNAzku6Dh1N9EZMLv16DsnShuD",
  "key4": "uNpNE1TGFdEUypKJHHJRDcxzJK1v9dFfTmW8eycAkTbWRURWtZ2WMaLVMD3xY57xMBMgFjvNJBWJzFKnvv1hD5w",
  "key5": "2oeP45VQVM8tHvdVvvSNMSNJWx3bzBSEmaV8S8a5G62EYtW7bCJzqL3CZCPWmV8gZHpAZtvXvBVBtTZpqj5SnHjx",
  "key6": "4qEWoJLWEVXRiejrSfkVQfZTAWPWAAajTTXGmftMUvVGdPXfjPeBqiBAyV6Kct2x3j1UMLdwr3WRiYK35VHYqaUe",
  "key7": "542MKrTEvcvKzXiR9jKg3afKtk24MKkqgTkPhr8RdiMMZ7gKXfD82MWumUea8LgEQpD5L2QY9645Q4u4QarLamNt",
  "key8": "jZQFDXEAxuZPpqEXnNoMzpJXpj4iLasYEjUxnrXQN7L6FZ3ziWEkKJymHVaRb73V52VdfVcCgPzREY1L6xKSwGr",
  "key9": "X8MT9Kz5NpihDEEXYpN89rVsWA5M3RRB1zvdF6ix31hLukuBzCmpKP2FmCrjArs3MU1er8McZdNWzruz2nK15oL",
  "key10": "3f1CWg4BsmEmKJP7YsTQZDMoNuqP4ER9Tmv3nW3yPrtX59dXqN6kBna24E4upVn7GNGgwRXGvdPrBhk4ba6knRFw",
  "key11": "2oAEeMMRbADenjsC96WGiFphkHkorE8h78pBbka77o7paMS8HzpV1sUDUC7tNvnAz59KReJofMHPJXERKB6KUH6Z",
  "key12": "5CyAyBjDKWGenqT6v9jWT67PYvpdvjq4cD7sLpJCzxCX5T8YZTH4CZKxwrGaGfyv7xDap1QbYqQgXdYKQ96zUBW4",
  "key13": "QThJ8XN2LVRu6iMddConot9pQzdm5HVKdsqYSRTxPNA6qWyxkWyZpznTRmCbJZo1RWedwhhqxKopoScSw5Ymrus",
  "key14": "4EXwtrMsiykAkXWT1yHhRtVEmSAZWDH9R64D3EWeGJJwVy44XpCEC1qi5aySpoU8mXVtV6hPG4M8nK3iw9oe4QVv",
  "key15": "5HD9fzq5UdshniaMNTPvY8UuXVze1C7WcBi8HCyTXRBEQ5ziviM1ToYPEheXSuKEMHbUuGb8MNhaCv3z9f1e2Qcf",
  "key16": "tadRaPhsPQQwKAUdCGXrgDUhG2VKxhw6Ay7mfbS43KpqQtCnowqEuVWSzeERQXmRdXMsFPTDzFijfKjoQ3rnApt",
  "key17": "4MknELiggqsqAmsFqsgYmUnhW6gXKShfkRrffvJRfTHhSap9CP7ApfRv8nLdBNfBA7TwftHyj3GSBZE7TAM9QDeX",
  "key18": "4db3Tuoj5oKR3uweJ8dHxGEXvfdyWFoELLjSULneLVNCMbn7kQSkMmH6b8jabok4zsFUwfztFr1YFhW4UumbaP9k",
  "key19": "4awbNtCJeNbKmfN1Hjbh5CKR4ZeSfNfJKDFVjHMTNmh9wcYKpws5N4iaWqWDiyHkUskn12bPn1h4YCPYDj7wS4Ua",
  "key20": "2cPoan7TDYPejuaVNWuFh9CPHADJkcrfCD4WQekTqjmFEUgyonpQExTeRsLPnZgNeYT8qjZb9uSFy58JYbg382rb",
  "key21": "bQa1mN1mumX5TZyNf2UFCN6ga8XeFKK9erg3tXF2Q9CmK6AEe3LEHFE3NPWfmucCecBZK47fW32hoUbYrVE6n47",
  "key22": "5S6UmUZPYE1bjJ6tkw3tUu5TttGyjT76rAxXAqZ8MMFdEVhZstzA9vkZhhPDJm9dJ5B8xC59RY5MMT4LDDfbQYht",
  "key23": "58G3onmJttpovUz78bgHMKYPzpZ3S9U4RUQCmvAsMDVRRKEJoDyDGrHXRWyXyZgeUvMPoHmELZp4FxZVmTctDCPf",
  "key24": "52ShCS6sx9cn9skadLN6XiXTCvd1UkCehVWabbqyrWtnVfxM4zs2iWs5oHceZMbryBtYFTgiMYndXafuBQYTTsqZ",
  "key25": "5FnVKTTb6CDDWk12o8yk1LXoxNg9wRhdyDoz5vHGzRqB9E9EqgLrpag5c8vJGgr3km35g1zm46MWUxE3zbAKFN1S",
  "key26": "2UFcLiTNgaUWLaBTLBiRAcUvz3PFRQtXGHEMVXAnjqSt9V47eEc3LxKauakwd15yx8GwjiybZxJwkkAjpLeb5mdb",
  "key27": "2a4AMmNtWZowxqge8yQw2GjfLKYpyrGZYyqMfJ33ikdD3Rf9NkJ2U2mNSASkSTc63HGk1HxPHA8KVZJ3K9qhBbTM",
  "key28": "3UqjE1YZEhYRmqdEdXSAyKfSgqQkkkYDke29d63XimkeQaNog6cY7NtWPccPzS5SfQGyLFWDqdXYXKdQzkSDovq7",
  "key29": "han89EtcZ2aVKK3zjnud9ZYRDa1YQD8vPfNhk9Bw6VDNhRXPZvzhrbUWpiXvXheh9xntAHZCe4c2hd1WYWP7oGj",
  "key30": "8RHLxVijpy2uzny3kxxXWDAS6CJSCXqqpjxXzpXYaWLcp5MRqUdoeBtPuk1ET6v578gMDN3xGuQtgis2RJ96YDT",
  "key31": "5GX6UZvosVgANj5so8LEvDPXBd2NpZYE9wjocyebK7Xg7bGAadY19jyHGziL4xzJdaUuZnNCiiGYyLzFL9PjTVDK",
  "key32": "toBb2PuxGCFUsj3byaAQjarBEGQUXrKALM6Zrs9U76UxSeHvHW6B2SwCN6ik4GTRtvV2qSuUHp4L8awVhnYFxHt",
  "key33": "62yQTvHMh4LQ9sQumEyuQkqVbCXMGNiU78hA353YHGHNVE4n241qY9dJzT2D4zBtyVyryr76C77cTyXKKq7i6mF5",
  "key34": "REoAp4jRzmVavUbxF35NrNdRdJVxv3rWvkdFstXiyBxE3HpMHdndjr3iZF8acx4S5bT1D74VRC6zgjG2c2iK2Ur",
  "key35": "2rkb7XU974rEvePdKS8o2Zh2n29DxneDk3pSE1BPmr6pJLP4FvVVewS32jbQtuec4Nv9G97DqbiVpARYcMut77No",
  "key36": "5eEHuPJsBL1xV3XBv4Kp5T6LaE2QT2KLPDcpnzUoAtyUK9Pu4UN5VfKgYrMqxJeG7UvAHBkfBTgeTy5Hnfy6L85V",
  "key37": "4Xmt2Ec3iefmgFExChRWzmsmSAqHKixZJURvupFq7uPyzx4hw9VAT7mdpbceQ3Ld6Chnh4iQmVkKYTpzTKi1fYXw",
  "key38": "3RzZwatxmLB5JzUk29SkfccwEsVZi3guoo8sT74ATYio6a5uw7izuSc6JBvTK8jM37JxJ7bwU7oR8scNy3mUAnPS",
  "key39": "5Azd1yy8WzP4L7x5SKiLzMxcv5YrWTR4VhC1zBxdEHzXVNEZFiwgJ8xj7Dsqk2GAGF59JeaS6x18UHjSuAR9sGsA",
  "key40": "5R2QHtkMiZWBBrFuVXmqWoiSTzkUe8Saggx7iAeinsvSdmMnYrmMgScabwW8sCqqFGrwxStcNR4gcoruvm9jV96f",
  "key41": "2QFLCu5iZEYzomVnsvQF79KFMjvYMmdKL149cmK7EiiLx8hkdMiZGYaidixsckoQW2vbSVhJiRv5qZ5GCSs5UPZj",
  "key42": "4ZQ7QW7qP91reKKmRW1V92iVGn5twgzvSiSaApPveYAZdJTodUQ2dmw8GErunqCC2QB6Cayd3Lq6abJJNSLTqJZn",
  "key43": "22ptpNWvQS4d7daDfcmgrhxBpkRphPgUsV21jw87ru9A6mgVNU5fNmr3nMpwbkBwMwR5xN3ZeRW8dmNtubHebQq7"
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
