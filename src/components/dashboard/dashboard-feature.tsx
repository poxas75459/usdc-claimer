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
    "KJosonDsQe1BWwb6jEAvo1EKwUDNUWkfeF7amhbrTZuzFNVxMK1ZwdbrJJeYTDjCu38m6MBBpNVrrmN4vyF8qWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HVLhUMQNkatNPS4YFa3PRkHRgdRkFafPMeaRyHLqTFfW6ey1BjQyTuBPh5mdkwZLWUNpj6zgcDr9GstAVMacYJg",
  "key1": "2MoHFqb7dimpvpGRCQqbph4DFDUPvVfoKh9Z9KWUdpkhYrvVhFitoMoW8rpzE4g5qwcxtXDqrC7JTC6eJjxeYvR6",
  "key2": "ew4yr1SV5VrowPhKKXETWyvSZtEgvrf23a7NnKWur87q35JqnLFpfYeqQy21DH1VnuYzpHAT8ApMiyh5tHCdHfY",
  "key3": "3zbWBZkjDgUmPBUDrRbxgCM9PMKAvgQVQJeR7USefn5uoJvs8QAwgvb5YwVqX2moGtp1PKRWkpU3aX4vN9SWuhG1",
  "key4": "3St7nxJh5Cg8CCh7HMPcF4yhRrJtJPjGpBt3i2i1gFd6SnQ3WhFCNaehfFY2MXZqcyKYTnKb7EHdvhVpGF1ZYhSc",
  "key5": "2dSorv55iH6EjNYjouFisb5SsS39KpuP2NeSbxVVMZWopJ6tgDMrXyvhrFrbD9voM1teSGXFt33BTWch8FxdLrvc",
  "key6": "4SwuQGQLihLBQgLsf3hE9mgz9XrAdFmcW7NsFayd6qu78YwbC96SSHy36H1QKF3V5yLmmBQgrHZ1LdknXAjgEr2P",
  "key7": "4im1XVuRLaVHARbtFGa95iUvbiNUvUGUZxTy7oy3dmNpzsHBxav94uV2a7api1MscXPfcYmppQNsVVPgmZUHTWCn",
  "key8": "74H3dF7ycTvLpDHosoZZikvzPPLLigZxp6CvwpM77wEaeCD2TEY1H9NakERddShaWLWc3idpartw5HgMY7v7hRL",
  "key9": "2noe9ai2Y3pj3K4V2VYSyFveHZnRa4DmaGXnJn45ndWp7HjSiqnYaruYaJVj9G2hpx7sWvQyQodrkviQJcbXU3QE",
  "key10": "3Fhm6yb5VxD1fdLaHUozzC32WDE5xeHiVNr247hkCg4nT6PqcYaCLZRty5MmnoPkcifzWPbmPhph2HVTQGRKFhty",
  "key11": "31QkBBx1DLvqifZUatuPGMASCredet9i7mcGPt2w596uqxkSA7wVVkcqYWgaEPRxzAuthW8AtNf62zpb6zXFietR",
  "key12": "2EwhMr28mpmvAibYSQnZw7d314wZVG4f4tJoMon33vzw9GWQKeRxuKGZNBcot45Sz3zziTLVqNr521p5cpwm3gSw",
  "key13": "4BGcm37cf6ToJjZ39k7QSQxs9mAANLfYBxEJNWgMVmKZjJpJVmoThhp17M5w3VWdYvrySBgU89JLDmSGBN6VtZsM",
  "key14": "61n5rdYZyABiT1zki8AhJKnVnWiiMi4seut2pDttNkfVEfuu3QB5k1zXvG2hBCLtGGtpbEhevMzTcMN9gTuvqiB2",
  "key15": "3gRFWvm3RipKSeQcSwboqp4oiF6eVDkeEumetLThduk8NhKLcz2tGFrioXJxFkt45AK7Tdd7R3wv7mPCtbJGhQoy",
  "key16": "2bdQcFdhqz6dus32p81yiJ8Ts5UpKdAC7NERAeagNp7pnPDgEP6wDM4L7StherUJdRJqjxaZQgff4Np8pnboyVi4",
  "key17": "5hb3vNrYkce4dfaKRejqwPwn2dN6XjdHWpnx9krAxFm1hGERxt99fyhEBTrwQKQ1TXGo9ey8pMj412ccGvZZaZCX",
  "key18": "2Fbw2pBmz3UTafVNaukJGPbivdPVtTa6kRGMHUCUT3skMGjoMjkFXA4uELoERM47pHQ6qMG6TySxHFQGNuhwFcK4",
  "key19": "2jsoVbiGBaSVagNyydvtr8iCKfq3WfDxyhksf59pjbADZk74AdPgN6abEHCdtP8zeM2c8pFk92cWYL45XFYrJTWM",
  "key20": "4TTWDWXacv1cnT2J7BnoV4WisKbNeMHeTG9Us6AY6GX9HxLt46ZAWATuKKhmCzEb2Xwv5F4DETNm543JpajrQRzs",
  "key21": "8SsRapxkha4RhxSj7dHK3XPKkMwQBVsw6wJCkhAC8SaSjthDoDGNNUPm9Vwr5cLowYuDFUSnPV6QmiBkfEtptKR",
  "key22": "2xzic5ZPHVzE8fSTQ4uUGweprLUfpb69jERGqZzH7vXmceU7NXuQgd6f3SJfaMP4npX9ovYXPsowQyBv6CHWFTbD",
  "key23": "4g6xhWz23BPBKiVwduAHdFwtmpXFdmprxTny4NCfMv5HacVdgUkeVyH2YRNFEFRZ9qvhJenoy85RGJHySjsuMKaJ",
  "key24": "4CQmzjmrqqY3bDho9WhsMiUinWt3q6FgTvKtvf8pAYAFLwwn5q9XAdZhz7HjvohQtmDL2oVY39TrjB1iNt8oEmw2",
  "key25": "9WRepcCEpM7un16NgERJgkv41qF9vJw7Wd2dERQBbgBFxjNE1wcgbachP1Fm44BnpwUFx9FbVngkapWtNSFJ8fU",
  "key26": "5TgQMfamhcok6ohpoG4YNt1QQRY864u8oS1QwT6MTGJjhusEnwN1HTxcn1bCbE5xmTtVHHPqXkADcb6tdtMvxR5i",
  "key27": "5mFjKyXvhhZiCuKL9jEuYqyXT6tNAkvNyYZQJW25Mie6TueFpqxECt2x1EN4aB7sGzALJ4buMUeo282P6LCDa4rc",
  "key28": "2Hy1hXVcjHdc7odtDH3uyciUANomc2NiYJy7e2g8FEC5iXMgbutdunqbXTCcVCzqCLCQUPgEWuZCEMDuP6SH1NNw",
  "key29": "5vxCvb1Hv3YRaDPPoGHs9H4px7ZPxZq2JvGTFU4oEjDYc1EL1HwGpJz6AL2ZiyZUpqobUxwxFgRoEzpcwmpZEBYs",
  "key30": "4rL7vhQ45pTg2ULKCuaxrT518ELn2A4EFUsm4bpHkaLCfQnwupFXqqKGfYSKiS8dTjzpNuNLBYPHyvHRy57sD22b",
  "key31": "abRrRYigD19Eoeh5QrvtZ6dyTt8gJtaJKamJUij63eiD1BkAqL7XP91DJSqqE2ayVEkSK9xNVfVBWgLK4oe7JnX",
  "key32": "3yHe1iLsnUBU6GfPBVeSVwhjCP2DtCQJt4T8tUXhgNLsBcmQFdTtAPJLvxWBS3NUFQP9vup1GFGa56L8LmRCQgPn",
  "key33": "293S74smi3ZJcgVnMfajoNDjWHaWTU7WFJFXZ4fRBaaGY9DWs3ExQed4nr168RgYTTRqpxkzx8bAaXVNkqzDChbS",
  "key34": "2UgFCKiBF8UJbmymTeVpZD1mm4WgdtHWgqHzAe3nS32rfCgTdYX7PvhpVfMBEVLW9E7Hf7Grutoza9iJ6z7cYi7G"
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
