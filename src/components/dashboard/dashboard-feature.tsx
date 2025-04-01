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
    "sXWo8soAN5AY1MMfSwQj9MoZR1XUQn89HDoJr84UDEnkpFvkaCvuaixM33NeP2H1xkiR4XtRti6ZczS6zhQgB5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p1VDkWHKUd44QEZE43L3GQaoUze5CxeV9qh46DEa5ut9G4iYtWwLLtpMKw2r1e55JojhpXeW85v697Hrcma2CLD",
  "key1": "414cPiPc8jruTCXLGVrJsbAckTgK8BVoo1bR4KLuxK2aphNMW9ArpMfsgz1fxVwzQ44WZJ6ADiFwK7vrabHy4xs9",
  "key2": "37hP5XRyP2KRUWrsRhziPcv9bzegu3J8Tk7Vo63ZNoqiUgrAMQ3BRbta4caE4LxtEeGCFVQPud91ApaBp5BwtNrL",
  "key3": "r1Wk17ZAeLxFLmSGu476zB51iBz9KRkBR5bX6cjUZgdaiQbSvuqUVnL77yZfCUKffuwe3fLqvpPRjgzFtwGUV1h",
  "key4": "3rFVRm4who37s8cLA1PfgjYvm2pkWSLEatUQ5NnZ5Y8Kz2MXePRLwGCcKsArBwhLb7KTe5MKFdvFZTSJVK4dnULP",
  "key5": "3C4sLB8np1jV13LxNoPbypGKPepyQxoEB5vRuJhae5BYJHWNkdNxRNATFwnpJanFSF6wSLVgozMZhZraqujbvFUu",
  "key6": "4BVzJj46dkamzZYVoUYJa6HkunZ9dcLoYSeM6aGTkNnBR57ckt15gi1EWEtkiswcw2zzbr8vobjAgEDwYeTndD6W",
  "key7": "5YLStgwAcCdLTFWha8nuWLKd67UsYZRGG3gqBFwBQyVJ5ug3Knkx49q67Zvs8nKGBT4oQFx37EVhqHe5mLFGLjyE",
  "key8": "4cqtnQZN3EuS6RDHEBNURm5WW3ffKSX9rcezcNp1HHpW4FcjGJ64PvSBpnrAyeMXUCrVJrGF3syUa8FYPTKm2vR",
  "key9": "5qmua4cpLAM7HbwFq1RA8ZB1WQGR91EFatoUuBWrtfUU3KSShtX19BdvMgUCn9btViM2d2XfQA7sK8oq9MndS4S8",
  "key10": "2cAMSAxKaxHTFicDNbGxETtJRvoPAaKU5CQH5jWTyWMqKksb2ZhkFgEdaB59wQ2mQnwddAPosFp4goWoKMu6sWk3",
  "key11": "MdSqy4YH32cpkDGCz9oJZqT1DkHhx7gZYpbPTDyoukG6qToBRJcaZZVhHF8NAvKqtpwAvrgqJR5j22UdkMrQUVM",
  "key12": "2DttVaZLWzxDX7p8s4S9yxweizS1fJAch6sBcobp9cEVpdEBm5ykSoMRxUyxcUeRcYYxVrFjCso9ppjupVhqcasJ",
  "key13": "2MDL41SpkhE5Hsxdmb3LcA3VyZPYq2eetayYzCBD6QnRqGSt2QLueavLepowiPvSMUbgQptgXwN9pcHcFBx3ocN7",
  "key14": "3p9JDSScULNTKqMoMbZ8VemrW1DJ4N8maj1KYL7aPqMmjFLLFXXnhsUuNZAY772wsCZ8w2KDDTCPsYyYv8iQeKgM",
  "key15": "btztAPQhBsSLxzdAvYsL5tcvAQh1WQCrMCoLT17jLBFmPDUMhUQzbpj2tg53kLwvqQ9G9YqSqtta19qCmdpndtZ",
  "key16": "2ms5oX5Cohr1bA2bYJPV8nwxbureDGX6j383hsC58XyAEJ5GJLFso7bwiPrk4Vb2sFwbpbsbWDyEXZ1Lc2xVfy1i",
  "key17": "3ZrqSiqyEphFntcJFtmvTizMRKTL2uXQ2qJxrVbtsC2Snv9o9QjQ7sj9vsDoCYPDCxv8Rzb7x3M9qxGr9gS5CFSn",
  "key18": "2MvTYyb4pRus2q84EQ5SK5Uwq3if8q9wPYckVZXNAZyA21tvBFNjSUJCDFyeSC5n5GaWzc9hSi9i7dCqSryv4mUk",
  "key19": "2kCkbKoDiMYPH8v82ZhszyP4q4SbpBGbNy2WEQjjXaX8oY6tMqFECWFTtyyNWebQFb9Y1vYUq5LtCV6bTTFDFV3E",
  "key20": "4QLv76MTJRvYRiRt8R9JPosxLkm7ickAuqGe73dWkbztGgdwxC4KQyzXkYCYg6RGrxXJJWT7yxitjiiMkPd7YbUU",
  "key21": "2H6nFSyXZmf6onsM3j41C4pFiMfJ2QQ3LdkVBec6z2BNKP4xtSRrSaSzpAzojoRixzgBnyWxSpmNR7wqNYW7b7Mu",
  "key22": "3FKA7svKBhhjRTeGkPa3qhNgzTAtxhcAyVNiVvNmpoNmeTnq2JGNBDWHCV4VQHCE37eYabgT3EkFFH1XzJGv6YiW",
  "key23": "42gzSCGtHSEKYoZcap54djppbwT6kDyYoex3hWbfptv6LJcgDJ25egV8sP86iHHXq4CTsey99kKRQ4KdWk5QnWRJ",
  "key24": "47rbypQbC3tHcfpEEzLQUXqQPpT77iW19gFHkp7tiGmcFo41qnqexx89M2nryq2TPvtuHM4vziz4Ks1s1H3tSmaL",
  "key25": "3eaqsbWAncE8HQDdR9MwjbBzEnvm9so672JzubXAkNyEYQtiQinFcMM2yXxyBNp5b99odh2DTprRwN4yK4ZRtj7f",
  "key26": "4jc768cyCAyUBTGC35BHgTqckcFPdaA8EBRYnU6SzdDVxeydYsiC9mG2r7P7HZp1R3kP84da5zTZeGaDMcn89hRE",
  "key27": "4xNLUVz2Eim4JZZWMh9PXKC1RCiBFCL25hvaxRdz1g79AhMLCSpNd53qUkzRo3SNwBA4uSwGRXdrPV9FfjN8tVQu",
  "key28": "2WrGksvv4wDCXGr78DCyEBUW6a1zTurQBbKsctRc6wykkQ5H6qEhv5tPFkazkhs8UVfEvisAatX9ihqWWNi3d664",
  "key29": "24xASADLnKYmbYTFpXbcn66uUhSiYSq8BqKKFjrYitoZreKLLDrGoU9tbdnrcvy4efmLoxrkBDWFN1jTjBW9WTW9",
  "key30": "3DPhR9KHD7LrW4hKD45VnZd4pJnQ4WuiJa9jBTiEdgeZEGdihE5C6AxWnT3vYRXswgckrafP87zFNZrqmE45MqaD",
  "key31": "2fRN9rFBgBmvB3vCzNgFFwuvjkfKwcDqc9X4TYgHTR8N325yMV8ZPtFXWDmNSYE19mGEMCFRsbyseTYM8qThkxSw",
  "key32": "5uQfB4RiZ4Xb298mmfEWvDv6uaBjcMr73YndHK9RqUKup8iA11Am8LNGmg5mmrjNqpGfAJYvHzKi1rRP2sErTSH6",
  "key33": "56DDNbYS5MR58nZpHP2EA5h4qDggkK1p6NqZwqw1MwqouQFdqvJmid335zWVd8y6QCyS5DMrt5Uc3kQPs6xWdR5M",
  "key34": "2rM5hkNgY4rd7FgGn7NLWMVnvfqKFsoTaGPMnJVGgRVYwk2AWJ43FbCh4m4hD3JK3MXzhsrs7upbxf7R7yMx9Mm1",
  "key35": "2c1aH9gzNpbSiRW2mwwiHuVjVqXRengWm8jPoc1EvUW93YVDhLCGS7FVUC5spqB3KHRnfziLKwttXau65dr8Vmrw",
  "key36": "yt6FeAL9ZZA6ZeMEGNypnLLuLDkaqcGagmEojASptS1Kd3uAzS3tej7hcnJ32SUgZKgEmyjUyERwSfKLFZfqRMR",
  "key37": "8egdcv8ptXPUnMirFZJcVAAJzVJRLmgQ1sHNMDoDFerXVpS2jR5peVucUrg5aWato9jvbNqAUQkdgpniBqLbTyJ",
  "key38": "6TNHATgAXAXaoXDry2fWRj36xiXxKRC36iFwaEFwhChTygweft7QqyUmLsXg4pEPF6cvEcJw2C8BF316ZS1s3p5",
  "key39": "ZsmSi6DauRaYcQFFfFGQ3QpVWaCeYqLb3Wdk2wHXp2tPukXcSHcgduK336ma3mfm2119rguUZz9sfXynivEBVLf",
  "key40": "3vBbjwTQn6D5TBQhdoWvCMvhFC9JQ92iqhVhiJACSRDC5wtJ4KipiB8R7NphHnbdaDUarcHyS3faAt74jVTF1sj",
  "key41": "375Sau3gqkCC6mTqKmwXHZsSMVmTEK6mhBjhB9rQ28QSJGJ7rEGoDPF58Nc6YBYmQPbmpXAfzFveAVWW7zA3kpCH",
  "key42": "2rCm5coZtZKmXdYJjNuBLXYzx6LjNpYTfBZdySAPcQLY4d3DvFHMFWyF7c9ztXkne3hgPMFUABUmfhCVdtRjyymk",
  "key43": "24378CgqVF1UYFo1LMaaS3UyY3P8E7a6PP2xUDcUxAsgatEAHAeKvCbkjreUrcXzQqAmdhCwpT58EEqq46G98E8t",
  "key44": "2woGrKAjo6YJrnj1xsnnhd95VCqr678Nv7bAo6fzSCPJnveRyQUJnPGH64mDgau7KLucr5zJgxn5U6d5zL71hiN8",
  "key45": "22obv1PbBDXg1cdoCmqcYqjqudi7xNzHwd1yxvg757aVK2muwCCZWDUg2R1EPTRwtB9AmK7HzAMp6A9xGKmxCN7L",
  "key46": "4Pky6D1MxhAYDRiCsGyQ8KDk7kYqBmzxggY1tHtFK9fYx5TNsHB7QgrpDvs8yd2UpJ2t9MsxtSA1XccCSuth1VJY"
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
