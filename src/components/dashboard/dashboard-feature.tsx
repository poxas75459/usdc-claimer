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
    "rzJMoXdUzoUsFLCNhXPZw6Rw5N9K8f7MWMf2aMjATHxJ6qGppYzZBicJZ1jDSFZQ1WjeMAc7HTsEyWUiaHW19uQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hn7Ysos6AAsX11p89chsbr8R9kFNXHyTKCs2KU5yye5PoKX1t78sqFTNHG3P5uSe1XdgyHLyEP3T1vnhTmjUtXT",
  "key1": "78ZYJ3eTfVesJwYqzhAVZchgcTjQ11RSSWgN2eBgAx9mtxC5XSdebtrV7TD3fRMr7CdELGWi1qj5MF6E3mdjGVo",
  "key2": "4tWi5yDc3TrBYP5CR3runZe5wgkvdzXHAXQneTmbQ7DcSmuxdcptgp46r1xgg7gGWHMovKyVdh2vmyy9ugp97kCZ",
  "key3": "aJ7G9nTQEWwGyaaparwL8L7mCpY6XmBPkfnWL5XrcX2pYU8qUtiS4cTNckrkTfVb16iwF6CnunZNKpDc69dSaVu",
  "key4": "32G77N6CiScqCYGvoPdz2GUogYGrKi2FPv9Y3xEz7wGQAYMapUXhtCAnLoPpEqw9SwhqxFGT5qA6jha2Jy5oaZcm",
  "key5": "4d2PCJga4q7zAVaj74WMCw6rFZw5XiC4vJA7tDGHEBiWPxugp2WP2Lh3Ct6cAP52QgWDfdfPu47RxzMkzNMc7mjk",
  "key6": "3rDz6zTBVHtbk8HF4ZStiERsnQ7n5EaiYywXY4yio4X1nKuAfoZr5ZzrNJd5LsBqNQ5Tmki3q12UMxcqe3thUfQV",
  "key7": "4UMZJrhACLYyagECiANE4oSr6Y93MfFDua7mRhU3ioGjUcLrCuc8wDTLDucFCvF4JNAapRznK4L8sedJyPVAjbd4",
  "key8": "tfJrJuHUcND1YdJUUWWkF5VFwdXeFoVbJ42MhZK115h4UTCYB8uy1j5MSnKydKpp8SSic5zFDJN4FshoXyky7Xn",
  "key9": "3WvYyQUpCwMJBgLhFBmjhmzNjLoH6YcXY6g46YZrRoNwoXqWpDnHQcaCXEZs56eCjQ2WturVM9uNEWJ3vrdvzd9y",
  "key10": "21fsE1i1TYD2vroMSBbVcekepzBwMcUhBDJy9fuwFSrKyA3uv9gvSepQYWrrLDjVnupJpMZgkqxvgvDSo8VrYpBt",
  "key11": "3mGynbpuiVA1HqCfDYXxt74egPhFJ8ecKYhukidmvsFCHM6Uz6ioreafnzT3aj8MC6HNEN1dFPfgy5QEgG8gihvV",
  "key12": "5GX7Mf9cCWBtw7jmqfCe9G9mLr2MHve6ybs9VAnGhgQ1v2frrijqnUMfKEy4eXExg23AsyLE4d1D7mfTho1Ga3tA",
  "key13": "4zhU1WeWFw4rKyL2FQtHqVZ9fCwbBDA6DwAJJXHLbi8hjxkDAfQ1K7sVkp2fzTHF8FQnmXV7ikiNrqQAoabRSx32",
  "key14": "qmKVRKJhfGWr7ohKm2Dtowqcw2s3pQu67P1MG9YhyXXuR252ETodjTMDKJsMdzDJ19T3MDWnCi759rEn1KMuQhb",
  "key15": "4ZNE8QyKMRu28f7y6LcEhaZEdPh4WhSDqcEwZH1EPbQr71Djw7cZkS9MG1bUAgf6DMXs3WK3zsFcbj73YN6YPptW",
  "key16": "23sFwLrRLCmiWJfPWvjXkdjW6j77KeSD8a5fGZEJTYQmS19Q4RoZJL9afT8qC3w1hNLHYndiyqvC23fRGaHKew1s",
  "key17": "qpf5qYPdX68feAVvybZZqQC4ec4QQTaHpNTKFycEhm534E6LXXm2S1dSUYgrzC4fCWvwaF82j3DurbNc2gWterL",
  "key18": "5eHcpZbrstNXzXeBeSrNekaYoSxhizzdW5TaRCoiwSBxiXtNHXvBAKNyV4CBVbruv83E7Kw8sZVtoaDTXFfpCMTA",
  "key19": "4AwURfmC37E9qWNvAFcVZ18r3UqR1XFthc2NKponbnNazSC6igruWVyregDo4cbNVvbu1F3ikCmhikHEdvyVpJkQ",
  "key20": "3RYbLMTUVUDDyQ99T4MUfM9smu7RyM6KBv3Hg1nggs1nAwrgFHV5c4M3wUNN4rmHEBeykfN3U6roVahtRpFirDtc",
  "key21": "4Ez9JSGgkCdoeuyWx7NxXLxeCsPzAWyb6LHwy63LWwLQQfx4tQiqCmFDTMi5LdFv8JSJgMvGJu4NVpikKeUnrFdM",
  "key22": "3prYghmnaXWR15oMtUaxLjVDpNmUoM21RdC4bhD3mWAbBQhvyJ6kHhmdarqf6pjVddXPdFBSxAXizGZkkQzFT41t",
  "key23": "2czu6WpLMQzizKunjAERcX2gKhaaJRasbYZecP4ACiYCQZq7j65yjVcrjsy7HKNJEEPqQdSAb3GbJ3uuoRpD8SCK",
  "key24": "2uTUEjVLpJAESXFYWJkVrbXUj4cCJwtW2LNGmfy9ZL561L98UC3urw8V4AqYT19rGSFmmZrdMvZEtvd43kq9Zbai",
  "key25": "3ApbsAxYuqyoveqPbKUeSWPuKQ37WHtX5ssXSD9eeZKVJx6XVFt82NVae3W5o513TiNCJNWutF8gRtwwEZSaEJhY",
  "key26": "3jFH2ug9S5tdPeAaBBi3AqUv5M7k9NPN5KFfmyfAyRmNR9rUKHfgxqiNCmRGD4s6tYz3qBZo6PpRavyLtjhvTzrZ",
  "key27": "5NRdcRL1j8KxWudvUKURV8pdyBLEyALpQeX5DJEYjTegxthX3Gnckr1pW5qRQgzzwpZrwFYkgf17bLtNrHZPHwKL",
  "key28": "euxhV896FbxQ4FRAEJUfp5VrLBj1N2y75LgYGcNeRtifbqdhAkqfWkWM2niJuqcCBw18beH5sG7JAi2vZJXKEpi",
  "key29": "4WhA34bsK1DcCPQh8trhJeb8f2ji6BrgT21o7izv4FrNHodgGsfDrWdNXfapj5kNbcPU12fidBbWj5rHo64zwJie",
  "key30": "2Npd5AHXCVaSNVgoyk2MT3zTPnWT6318QdRaCVpavrUM5hwJfgnSuBCeY8qYSY1L892xVhriDoBK22bXJyDLh32R",
  "key31": "4f9ddrB1Rih7TDrX4Fo1bjNfeKFGSaZWnzyHJEKQXtVkvs2BVBQV4C63p5ACqL8heMHvtfQir1J6fpqcKQ3Be8aj",
  "key32": "4M9PSxsF1PeL4m7JwCqEE2zfmDAcg6Yrq9hzK76ijbCV4vxur1AbqTaV4QuktZArDc4h4PVE3343JxiHdvC1PeRP",
  "key33": "VBgbkKAYbn6DKs1Q1TiiQEDD4Ch6u83sw53FeCCgbEdnCGKRjb9jKPn2T6bo5LH7oTxAXFQUizi1JVjxjC7eKky",
  "key34": "5VXtgTtH4RiqgoKGU6d5Bo5T35MfauHBNnNpkjF5Kq3T2sura2bCRYpip8cLtskxRtajmH1jtNKB1hiFhg2wQ5Ro",
  "key35": "3ahTZ6TXyb7R6c1epZjQytrCWh8s157kSFdf6QuwaRuc76WfbsEkZT1k4QHoNXdeFg5sMwbQAT9gQ4aizE4E9mgK",
  "key36": "2FbmxbwtohbMMaq41zFcPmwuCJ9cFDwZdVuncgaD3qNdYguMBLp3e9L5RZ6veupzDYcVTrkT35H6xn7x5euV1pPg"
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
