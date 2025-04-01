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
    "3HCj2aPfHiVZKy9FNEGy9cvjhRZ4SqgcD93znJcrRjx62serwPBqio16UXJpnbVimeUy9DdzqEvs6ADCqnGjSfTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55FZG2ekjEnvPtMpqTV7g4d1gmmUGHg8WzoDv9nyrGzLC4FtLn7vQPKFkUQL138SbdvPFWhEjG7jMp2uXiZk1Fis",
  "key1": "53hqMEcSgzvoAEKCeuKdAwhkoZ17AZHWEz6isc8MHZQHeqU9W6AvXN1opiU75evo5cst3M45GLqDi7mf3BtZKgzr",
  "key2": "51UiE7joSEUFiNPFdE4YZQtRdnoLkqChD8kCR21NXThCkXfY5K7toVNCuoaV9fvpKyCG5MT4m1xaPYn6ZBxFiPPE",
  "key3": "3MXKct3mEsL7uZwX7f8fTdX2aZCRgKgENRBvoMLJgpoepAuZK67eC3sVwsXSAkGtQHb1UXfsXZkjbScEBAuNciWT",
  "key4": "aAwFpW93a21Pia4trN6EuLRw39wioSXpaKpibv6kx1jyZP1xKinEM8HBjAUQhbcciStZtAT3AasAEavqTNEZgcn",
  "key5": "4muRLZeMAA7cQ6eUSDH63JTef1RajtQnF4nFwYDQ8Z6ouL5WXznFdpTEnwkGrwC1WjGrKjBtuDJUijcry8LTrWXW",
  "key6": "58dkCrsmVKYeiFUSWmzuL7ZAww6QDAMiJHQQAKND1ZfPERWyBf1KXzawnBMg1B3sUQNJ69hCz3Z9Qz8pZbkyiyZa",
  "key7": "3hrTGFVGX8R5uzzFBjTmbnzBrioWDHpBBaUYULV4Ci9jzuqjqYLfuYwuugJCrJvS3aL6r4WCXHL2DpktDeQrDtj2",
  "key8": "3u9rh5Tj5Y45eyN5zaZRKb2bxjLhy5eC4JkUJXPvYUqKRH9TZAn1yqzVfjgaMrZ2cWJcJz5yWxPEMo6KwBbXfZT6",
  "key9": "3th3HuCZDKBEZK3pQ7w9ckJv1xkWELocgMyxF22MypM4F9SicAdBnbKM9T7pe1V3QBTVqGam4xGTkJFNe5KJbx2S",
  "key10": "UFkrWUZCYtdBKvYoZyWeAqpFVazqoWCLvMTzmpgAcWN7SWveLLim7wx6bGsGdPFbBixwTD4jh4bctmJcr2gaopm",
  "key11": "PpANBVjde1WZuxnUr6LHhvCxy1AsesQEobqNYM7Ti7Xfs9dvHvEuM6dCENa9koLUkLP4yeSbXoiJDqjHqt1Sfnz",
  "key12": "kFsNdNqyCfYAv7BV6pZFCsJGU6TSUHD5sXqk5ux8gRNtJYwVDhag4MDhifJ1Q9mGALXubJCPWSUk813a1R9oxUf",
  "key13": "3vm9twqCAHU5stZWjq8azezzR9rXdxCTtALH2ANxyVaXaMj3AkUXtxyUozjx6d8h5EYnFAbxmhqKwtD7jLKuK2o7",
  "key14": "5ge17UEGiSjH1YtYcAQ59HSxbR2795vbECvYLvNxHPssme7QJGkBXMLmccQXvZsE9yG28yFMMH32e9Ak7GALCjpT",
  "key15": "39xG3M45xeSH2r8as8UHnpzPPJfCyaWkNjYJe3FVewzkjHyr8LSzuuWzPKTgx9QtUnna5EUV4aSf6fDDurxf64SG",
  "key16": "EuWS7ZywvWC5NQTeLbXpKxkRsvKdjt2M5fSrbDgsyu8BsWEvKA2qHDjE721m2cmNF4ae8pAJxfuwghbvPH8hkcZ",
  "key17": "3bY5q1FL9PcoJ6tp1FhGmxfpoJM6bP1ve7TiVwvCFzuaZc5bFjJ9QEhK6E1FaY9dQ7ytWEsxQWEjHMPLU4jAXKLr",
  "key18": "5ueB26KeMRpSMVEntxXbRMMoDe4Fnz34ufBPQrXmhpsuM6rwcb9ncSFAFE2sPJscyeaWPkxXt3QB64CpRsRHFtvn",
  "key19": "NenVLdLeqRDLfPPGr7y7mUpfUYotQZjXZ28Vr6MCavRsdyNFbunt7KGZgpqMpbADsyG8CWuW4aaq3PEJH8WJ7gA",
  "key20": "2dvwofwSZQT7TGxJ1Qhn1j3BwKyXbugD3ZQZDVtoRg3BHKgvxrmbykVcFawxtB9kpZ5KRAUCvvg5yPcuoXoAseX5",
  "key21": "iZYDKAa4SRAUygTb4SfgB2fRKBE95JM1BnhCTPwwbKEm88pwGWcyJAGUPX2yySgMvBwVMNz39BHUiUYFe4qYKYy",
  "key22": "25PsFnKLmZxUVBe3aR2w9x4DEvCeNWFPa4o1YH2o1kRXQQaWRcW2Fc3i6oYSv5STrYHJArmhxvnFSQdRk2g8C1KG",
  "key23": "5jCsd4PAnnwArMKGaLmJS489ArrnEguaFMXzeKAqcrgenAeQZghWyYDgr3atMW3cLLnT66S3pPbiXLHUN13gmgUG",
  "key24": "451mLBGEHhHbs57g7Q16W7JvHK8rCKURHauHT12z3fNmMxiGNwRz7kGDWi7hqa16hY1UN181FnPYDiejiSLvFvGy",
  "key25": "4PcZbGfZpPoW93YocHjz4jeeQiMphHZhPgwSZSfdSG5FPcLaJTvYtMkNGCaevKofDBsEoHVcHhFy5s8wWYZTBh5s",
  "key26": "4mPp8Pd3mPCkPaVXtw1t8AARLp4ALnwdf5NTCxxnVv4euzCjh5GEbscq5fgCQfXa2hjX5oKWCmynfn3kwyKMGRaC",
  "key27": "4YBa2ao2Y96HkySeum34CXG7omvTK6Xtw66jd56yVCQWKy2hXB4NbPHdRNj1YHQFw6C1JuXvVLieUaL49LypLt2",
  "key28": "1y12LRkBKVwrdg5bAgrq1LSkgqnny8KPSy4BaUUCBGcsmnnHo5uPqMN3HW4XN8URJAJxAG6mtySSoe53CSKdkT",
  "key29": "4RpwLR5DtPfAfWbc3RwXZ2qH66aSKMd2ANK5buqSF9wmLTy5D6PgeqayTbfyUn8pDXey2n2ZXt7WFp4mBTEyD3Wh",
  "key30": "NJpW1DFzfcqCgADtop3fF2yHesdi2VsCMhqD3M38FprRvDwehCWTdvffbzPZATjbAR3Kt6reKAzaqRbKiym9PCW",
  "key31": "4gq1NWJxib5gjqQAMFEV3ysup6Ajqu2Ly8fXRmTLT8m8FSJcCtY46t1QHx93hida7SwzRRrgJkycQnveWBVEorGq",
  "key32": "NESkhjcRvUfkoBZi14LFuqPJH3w82qwz4g44RferckADFiv9nVbwhZJokmn4ZekqyzGCghm6GSJGJ8U2eDmzEaR"
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
