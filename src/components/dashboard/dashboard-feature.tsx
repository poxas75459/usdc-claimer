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
    "4YXMmUzx8PfTkbrQGNj4zbrye24swefnUnSvrjcMg9H2363qg5gm231VonVvfQqaZkb3KBbKvg7orcn5LsKe2cZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "byKqd7xtXzhVYFsRfHFzoeardKRkK36DMi4BGbz16U5vr6EFxXMS46NikwjvDLFgG2jQxUzc6sCxg7gzyeaKTnm",
  "key1": "3ySiGL8CkkYHJJVrwPNQ5p8qPn9waeqjqSKi8xNocCXC5Xg9au8SYj1t6gbgNUQAAp7TBcmuXLnTVUbgPsMHLMjk",
  "key2": "2dwHuzowtbfYq3yiSP7U2c1JfFTqvy8JCG4tno4yN1pDqYTw93tt1AZBaBHuViw8jqmNGR4vtNgU2Dca2r5humo7",
  "key3": "2ZmubWS72n3JzQwLJ6wH4fLg8uFHYiEZPJbb8UzrTW3GTAbVy9n44wXfeHydDgiDCd3gxwkCVcsq8BrvzdbadvYk",
  "key4": "4c9gBKAkotwoegtiteMwpjfVYRdpvDLQuKXKYFz7FVGsvuPd7sW4UwZWMDPqeJPBwQNNC8po2DeWrfxpcd2PzWK7",
  "key5": "5Qp63jPnRZ61yiDVPJoTiLp3dXQS4hRWcjUmS9HFQEWsZNjJW3nqvK5SE5QxRgNN3yFP2pjij1rqK7QeDtj4eQQ3",
  "key6": "5kosfXTuXNLKeZjtmLcqw4nsAEg2fgh7DnaFD1qeMWsCGwo3STwTnW1i14TaR3fwKbS5qc5Ti1QBMaU7EQkZQJDK",
  "key7": "41GKvMtDn2HBy7sDSK1kNac75XW7zXiSmQs44zjKTcdKKLrRq6cW1AnHmmYbnbDyuR7VADzBGWH9pprS14tLk45U",
  "key8": "5Jy8vWmxDL8qMueEWaYXEHipkgxpsHasommtLRwrnunCYJo9SSLpRL1cNSXoVHjPbMictngHkx9Sh9zr7nBar5zj",
  "key9": "3iirpkKaYGU4twDNtVrvgcTFg6TEvGuCcsmHkpyMKth3ntdNym84ZHPjXuyT9jBjKB4jf2Zk9fL8Qjp6fruJd4EZ",
  "key10": "3JUmsN7Af5K9x6WTv9aBE5KcfydBdPaMKn7xsPPoFLkpRgyNwfNnAR1XAdwChkbnarR8PPZ8gxuGj1GsC9NfzZGY",
  "key11": "547nqcvgQ7uSFo4vzNBmNYy6wUo8ugiNMr3Uy1KyGvZU1t1QW8GqxJxESnMXfKKt3PV8VqE8raTeym38E7EWPs9h",
  "key12": "4H9viz8wXUahqB32XafWdMG879cb5twHuRGD3D5kgrysgnXDw2T2UPT6Tehotdcih9phxgFicY5koeGgZWXxmj24",
  "key13": "tqQc6pWNQskYZEjkoxRGEvejGi2WT6eth8L8Xd3VT4YykXkNwAHEt9ofd7oVF1fWeGNjcak4N2hLJ6upDfFC7ft",
  "key14": "4H9f4LrtSfKhPymxbrtsgwUaYnbh4sk2jmkTHAkDvxX6AimGzrZUTX6dioZ7VDsiC9heK2nWLv4UExhFv799GTbv",
  "key15": "2LdZcwqa1S74ngXxDvymurYV92ShvgQvwS7UCtKkGFpUtrJq2YoXXTdYYtoqH5RXnvanX9Wi3sW18jzjmrKAyMqw",
  "key16": "AqGPmoCNjcVHvWZZUVFqkx3F3C83PKQ5WCFduicy3rVtjg79rCjpv8UktupdpRh2x53252yNLLvjKAUGSWx4w7o",
  "key17": "3yKstTdTo7xeavW4UgjR3tePd1ALDSQwDrBDmtftiJKZJ14YKEAm3qbYnw1hcG17tBo2hSnGz8X1AUcMLUEBrTao",
  "key18": "Wh7M8ERXdmCjEkY8KyNWU62Z54p1EG8SDJZg6pxUS5j6SvKnWerrLD6sy8EPYHeSC4Uf6rSj6aLGduVASiMXMe1",
  "key19": "62WKea1aiDwXm6T9W88efW76VamCFmChGterfrSc2nkfBYeHnFkTfNtoRydDUz1L8w7oMwKSguTdHAcL6MS9HUjR",
  "key20": "is16B6NENHMYdPDHUCg4pdQnA3PDK37rwNEXxjv4gEsFJ6Jonn4ZT8zktP6C8ry2ADSrbTisF6zGywLtfu35cVG",
  "key21": "3SCjmQeqYT96FXVRR295Yk3fDJQQ13neyZjq9Ac4oAU8JiwGbHCQ276VEW1zj8Y2qsU8WFRMoWG7bBMxwsRWNXtW",
  "key22": "2KLTeetLT98mFvmY9rtA1ZCUSHzWvptiEmNMXaGhTUkVTg1ZLLAf5Jm5dDttirYaiJnoHkUNbxryuUiFjr8L8Nvb",
  "key23": "2dcbG7A6gE8jvmRobjj9MauLGD4ugnPNvBcatdLHY6eQtTstoPf94hcuG3xspeQutkonfv7amqwMp98P3dv8HnPU",
  "key24": "qETxt8CSr637YynGrYELsEBZP2LDTyEKgSC6tD4nmUwPokhZJ5h3KNGBX8wQUGD5nEQzmExJ9gj8kXYjyLrc5Xd",
  "key25": "4c37vb3uUuAuoGS4MCqV5kFcwVuN24td6uzTaTzAUBr1KR6UpyfwvzCXAwzK2J2gm7wrQRQJ6G3DHbWHyFPr8NuC",
  "key26": "2W5zGPZya2HsBCj1jM7MXqosJ3LQ8u8iuahuii33NFFDrk9uUWgVj4T3nmDCHLpaNz8SyNK9ikvxJrGFYsy8RFYj",
  "key27": "3D8ipG71JpSr4boGRdHxEbLCdqoSf1iKhEC6xxRXbmP6FmRnv3DP8hxmf54JDMAenJfNXrqFbFX7Fvrinh86Ku4m",
  "key28": "4s2Jj5tGnXzbXueHkKFpbro7xrFDsPaQrez5XYD1e7cmfLAADRm8SN9njohKdmtZc7dgZ8wGgCW9e9ksqtb28nZD",
  "key29": "3UjJJzaUaqmLFVpD1mQR9A6WWxLg1qdZ4uruhQ5hiLFbboi6izrgs17zr6cKEH2cWMejWxerZEzUhmYAYmfRnDyi",
  "key30": "2fKsu1efSxt2ucbn4acczVhm1ogPNkTVyPW1ErxBAoDzSUG3qt5JH7XUWbHxFUBoqv59S9iZhKJGRHBNW7nnzxBE",
  "key31": "kbucDHebL7epVrFwy3JvFEHpS2dAapEPJgV8KnuhL1brwYWNKqiui3yxjSUUzJ1hZmpmY3gkWCmLppL4sfh2WZX",
  "key32": "FZRzXxFQuHT56vWNCx2cz245npzipQH5AovcnayuWkmUv1WrcyyaZRe6kR8sdFgfRL2u95WJYVbRAYVxNWn5RAE",
  "key33": "2AooGB6vyLTDd4jyxLc7vyCfPVdFNa9nwJqgCQdX8tpG7F1QW4JtoE9gBDjZMPHnmQNcAK1X3hHfn5kp4CPLh3YD",
  "key34": "4iATUKvT2eYGdWfrGJjPTpSnmoxyRJtz4WF3cRMWHTfoybYL9v7FktvatGxvHRxSJsj6uEg76vggGP2Dg2TG94iL",
  "key35": "5ZaN5rMFfdhHXfwkU71TaeFzCZXnMViRpQwGB2tbHXXCsMEb5AfjuPKDgWbcNqVRqq3xqeVjgsf9NcvurXFebsfq",
  "key36": "USbamZPpRi2ZbzLgSjH9VSmAn5sHpUZfKsqzeutUQ8928M5yYSN1G4JU8YDwszow7R9uUMYavHrHFrWGk3e1MaJ",
  "key37": "43z8rApLGb8Jy5R9nWntkdVyQV5YsLTTH1zkg3t5durMx36eziGodVQmC44MdwsGKyCCjkrGxv62sQY5z4BmkwwC",
  "key38": "359JC8cAFvZ1WSxyxFbgt9R6nz5Qxz9tAMhgBrCrcGzLNcArFLokZ4gzavBSbQLoUddEhXS27CZUpz41nBqAgjam",
  "key39": "5ykxD6QYEfShZq7aX2ckUpE84EiunMSFyMaaaS988VnTSvERjQKL356SFEiGLketNymjcCFinQqLA1PeNPTwZuSd",
  "key40": "4CG5zfmKp4ArxFegeXmKAysgydwSvHan6b9CcRrTAYmzcG5mHK9anBsD43b3f6r8R19EVApajy8DxpQcdVNL9sKv",
  "key41": "3zoKy6eKsqgMjALuV94tDRsGMb9sFzqJXaPcCywXPShDy7eg89GTj38ayU5q7jdAs8xW96YmYwXaLgx7bLonMddT",
  "key42": "3kF3xnBanXsEC4Vi56Lfr4UVW5jNny1Rn1qyRdENa1Lo4np3cr6ARHXuRXd3CmLxZpg89MP32ZAwMGD8zryiMw22",
  "key43": "2D81UQfR7FmuUGDuXoHefydRpsNDMoG4cFGwf92nVK4xoMA6kcdRACNHdAMXqj6WS2G9GSEVUZsUfT8TjZhtuiHy",
  "key44": "5jyrrjtXnJQZfKdfT3kjkWCxK1cUwRmw535vYZzV1eZewgspc616owxJjYhjxBqWy3qZdP6BW6fKmfpUDwgrEEAz",
  "key45": "n7P2Y2FgK1qxwJg6VoUp2oiwkkRoGsCzZjsc2YeRCjhNSSdK9rVt3Wq19Xfz8YGPHwxTZRvrMRukNaoPHXSUnm3",
  "key46": "2hRudWK1jXjbPbspDZGGLWyBzdmKbsM21pru8Qq6yhHEsEiRFpDrmauPyZNtHUvyhQoM1Kt34vcKpo4pBxR1vd6f",
  "key47": "tng6esimxEVMtsdjNXzxsxEGYdufAecmrXjRAtrN49kMMhjpfDYkVaeYtJEKRmRDbdm6cHUfQ4KhigimsRuySjY",
  "key48": "3yacQsXhcQQ1LdFcwgY6ho7MMK6CDGZPGN4UeBTivvBrfLjFjZMbZNDTaPNs3vWkMRoa21F6i4yb6YcjKAdnmqUn",
  "key49": "21WjLcGEYEBL6KxCJqLmh6NJnM7Qx75dsy9QioJi1RrNcum1NfTzd8sSZLYp1A7WaNhy5ABnp9GGjE7bxSJLGMja"
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
