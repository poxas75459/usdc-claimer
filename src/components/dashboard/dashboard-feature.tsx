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
    "4Sz1Ys3ztkqXiq55bRktq7HucRdJPf7doRQzzKB254cdSj4w9cHTSrgZ65pkrdssXU5gcT4V6QbLjdvwwByCN5sR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZPNYNrWgsLM2GXNdS69opKCNiF96R81nDnYkvNkhAEhdeU4br6n9SRfw2MDhMM4RKfoBNraPpWWfbh6GgjPxHQk",
  "key1": "vCcd7NbYtyGMaojswqdqgSGh6Wu9qg6RrXjAVBKCc1F7vVUCpAJ1CvXt7FYLSaq5nYZXmkFXjzDBN1xFP8shg6Q",
  "key2": "2zZJ54CznZgm41E86T4Lkmgov5E9mMN1whkST6rNsn57c9S6sWPhAPU6opRsgJiydHUTT7aQGhHWYmDWhsqEBcA1",
  "key3": "TGfjVHAGxCLddKbNEJnNbSz4PrsofkAviwtPswVTcoL8LD6iTwNdyeATsCL8LnDg1VW7izuYT5UDwqjscJmtXyo",
  "key4": "2JuLuVRSbXF9fYy1FsQRPyEfcr7jTKhsntV6mkEmEw7FeoCKY29EA1TeoMqs7Phe3SZrCrn3WVjsF6hxDr6MPbpy",
  "key5": "2ZMWj3az5Zbve7KHPSSDr7T1FpXkdMS9EH53RdPegqLakTaHtaJGurADn1NeBSPR2SnUsMXRkTxce7uLpyYVyR53",
  "key6": "5cs9bxP1AJoupPL48BoQ9EhWiMyZDvPrGTKdSsh3hTC9JeU3KnwwjTkBYhd3VHafaMUSpPBRVGGtneXiMKpEKD88",
  "key7": "4gom25XDzh7QdzHG2ZXDZDQbVEsHHekWjyvEi6HiKrzgcppKRFofWgVJ2mQ9v8jjbSAtavenk7xuEHMPA2Y96SmU",
  "key8": "8cVbFKSTswBadChxG4SfD1r2nz1r1AsjfSbV7ajCR3UJz6DRSMSa18tmX3TCvRv9CcozpoS8Ehmidkhb7jCT8SE",
  "key9": "2he5meEZeEJj7g8e9a2zfQG4imBh5tcGamKNvhf3BN1xFe8pxjJ1Vs64rGNeN6gns1SpbxNBXwXotNSmDV1i636J",
  "key10": "5n76qfDuKADgEBBcRLK18KpKrhkXwmGjpdUAiQhVYKRAV2dYZLWr1dxFQDYiJHDBP2uQDVvhSsNVU2sn9kUBqVpc",
  "key11": "5tduk46LRSW9bd3pXPE6iv73oiU4ww9JEVwjugHGUWTWNxENjvcXHYmeFse41F2mR22mpAubgg1ByqNqpA6Rpiyk",
  "key12": "5pfPBh1LxLF6aXKSe12zWB1Knp9ZGZ5B7Ak6txn9zuKgnv3mmET44jyKnfSixAsaVjeVA3mdt5apVGA1rFFA8Svq",
  "key13": "3WNPgabv9cSDSfQnsrHsVpUyyEyvFDuq1BCKQGLKTSfSbqJMm1JQJd1DxXijNCbnWEJJGuWj5CaDdMdScj87dmeF",
  "key14": "pT9LpA9FFRigpgpXvnJRegZ7pnuta85uVjP9713ZecRn6xaCo8LHJskxYpnD2aa3jEHD6gC2mVNWFKM6fvqTpCZ",
  "key15": "5u5GZn2RApH9nhcLCirsqSt6d5gGMBxod5dyWmQbT1sWT8E6Fa4hH3zoZo42rjU7uqzNGhmwKWdaoR2gJvUWtfGj",
  "key16": "5qG1PpfWQv112jevKhbmVtzFJHii3GoM3zPiCy89EWfD9QVYJLNzoJrpnKVnhpGKjtZ5APNCGoLLFuiVVNKHGv3E",
  "key17": "4pTAFPHGCtHJkcJwSDhHvTZHiUJt3EGzkHxTVmLJVzntrt7idmHWpspuoVPzv86LXw8Fs1tfqN1VMaY6yzPDKr5J",
  "key18": "6Lchbyu8ckpPLVsGaCG1P8DWFvt1xTaUe33G1F4QE3QWknJ53HN8yz4Kj2JJVwzVrKUNwYmxAZx47BMNhm9KwQ9",
  "key19": "5HhFfwhtarEdLP6Y3WQTXRdx7AuTn8W3VQJoF1hLtR5pwQ1H86zgg5sQiZ1nAkD85cQZqaqyojYBFcucPuf5hbAL",
  "key20": "2dvhmb13qokTTGNZPGVo9UU8NUtrYPGyBmkh28HLoionBymn8SdoN8pgT6Gi3q62gpjr8skZjAKzVC9qqyrtgfQT",
  "key21": "BLZhQkQAx1H3q3WVyKJSRYWjiBvXf9hnuiCDYXgVvKPhPhGrogrH8KgyFYyn2Ac65y4VMgHeWidjTZ5hjutuqze",
  "key22": "umSf64nagSF8G7kCaTH8GBzRW48X3WLadhKwthuvHKVtDyPqraGTj72o2XzT6iaLyZZC15V6aDq5HW274DJhcSa",
  "key23": "5wvRDPEmwD43si8cBtyHPamNvC77GzQhVB7YqL1UU8uPcmEow5A5QMwsBPBndr43EYWfR72At6kuSsDQ957x5jwV",
  "key24": "4eSdLfYQdg3Zoxn4bpgxmx1RXan4XZU6zMauEQs8H9d64Ed6Jqv71udUamTZZrC4rFKLD53yuZnokwz2evMgdx7U",
  "key25": "3gjJDppmbYojMeTrMEQYuo87oNu9eFw3N6KpjP6tDwUaKWSXFUF1pPF7VJ34q34PMzBzaNae9tfL76LHPyotqpiZ",
  "key26": "2eP6d8UfGtM5ktajYbt2qvuc2aM15KRNcTyrVEE7zCcctXbtdCtUkA7q6oCTmuhKi6o3dspSoayh9E3K9hEFFUxS",
  "key27": "4JsLr4ALmdpRyRCY2XJqiPZk25fWmHuYsj2Xk9YUNkCmZJ7unzdUQ92khb28B3kWQT2BbTikMkTUBBEhH7c6b4nt",
  "key28": "22efRHJCyZyEfbDa4PnD4VE7mrFVMaDvRttGB38djZ4JYKhfVLVcyvE5VBRezMbRNzDepsvWMP5jxMuvW8ztpnLW",
  "key29": "5iXZdWvqBMSZThhSFTMjTJAgptXhWHkjeHcn9h1JdGfAzdWdov9Rkspvzqz8RNLGYq5SQtbbEch1oaYxTdJXwQ4L",
  "key30": "6626nwx6if4dmWuTnxCoizG8kKfoBFRaaNGah4ZWYagRhPohkJaAjL4A8uobMLtCTom9uuYq1z7YMwGqe1KDh3ng",
  "key31": "XaYq2P3is1p5AD9NVUwxdZWmdqWqouzyry13aYSfbartZB6zopi1WK5ZV7Rab4UrD6tmfMcMHQsd65XZxkGrD13",
  "key32": "3zzZmKX2ge37f76hFVpDN7PtHYRHw5Cttx6sZ36qP8x5Ysi56TaLdBHWz18iKSbQgqUQNTMq5Sj711NGfvNYuiJD",
  "key33": "4nBHypZXpYzyP6eqHoVBFRoLMgbz2Ld11vZBvVHUw8Jcz6vZJEeZPV8nLn1XDaNypaGofwsFvVYXUk72VZZqiXo8",
  "key34": "4hdm5YfxGkNyQ44CKuYgb5sSCareeBmVkYPCRDJQLGoPa9wLeeKKg87V5RHjLiCyDcKhuREVyhqzmNgNox4fGU6G",
  "key35": "HkQpHcZtRRGzXkBzfqeqvu4ktagsYZDqpiNY8NWGmr7bTSKwhFCebvpPyr5dTNVxc9Kz6FDm9MiDhRAL3uLhH3E",
  "key36": "29Roj4W7SoBGmpPMmyhismw72cXFfbjBjKdwgUNQqugtZSh11BK8snC7HqD94qPsdLGwPa11nHLGGPUhQC7c3X4k",
  "key37": "4EToe8dFKFxCmvqWtGHigQB21eaRKp7eFTero9cUeeZZc46x13iSoCGp7f9P8y1ZGaDdN3NTn7fQYhHJxxypGiMv",
  "key38": "oEno1MNqmxi17HQuKg92n6k6QrdaWV5tiBRnE98uRkYtFjnErR91949BrE2s6sXnyELmJSGRAphBfxmV4XXuUUh",
  "key39": "4yneuuUG7yU4RoZUkB2RPjiYo4375ZD5JnE2BimdHchu3LsJi4gnVhvpdvEJpNdbDtx55DwtJApxz31HGkYR2Vf5",
  "key40": "KZn4k2MNYpgbFYoQdyRGoP5zsbeto5wEAzaKADNCnyQ4Vh13w6a3ToDgUME9KwhSCpEp3R17LAEEFokENaqBzdq",
  "key41": "npDoAL1TS8rFvPcxo6D9uHJHQ9qNqpdVJCJkLoMssLJJbAvtbuE4XM9UYjbUgyFodAE2rpsRWgYm6f9fgxLwzra",
  "key42": "JFpmYX7wXJGdNSjQCbqPNkgc5xxmqamLRnfiWBXCuEbrseBLkX97LiWJ3bAdnHc7R5FLSomPEBaW6wQLBCqCcTo",
  "key43": "LZ56jz71XP23wWJrY65bfnMAFRigRd4Uj4HnvhT8stycA8xzj4aqi7zr53ayeqeqx3J1Ui5QkiwWwY63a3cHoAh"
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
