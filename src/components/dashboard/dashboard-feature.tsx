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
    "2fARykvwvvXn4DcgpDSkmoZ25fFARbf99HCWjWYanytbjTR1FnqNYot4nU2qRh8y9qtsK2q7QzcksiZan5wmxkb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uHYy8mp5G5yJBjHdokkFAGi87VR6Nh6EhUGBxo2P2711p36XDhi2721rxBGRoTVcti3axmn3YwXXZgAc61pzmHd",
  "key1": "4kBvHmN7Kjbe2n1JauANTEQ31Ziy3AjgpvWAWT973Jb74435s9hzY9bYfEGED6UyEE6GnDuZgDwwGrBSq3xMi27n",
  "key2": "5f8i9VZpkwje9TKmEuQkJmctT5FmSAU8jkaF4BeUxwCBeEDBDMzh4xYTidMo227TSFPMD25vdEYfgWchZYTZkrCd",
  "key3": "2ho8Uk4NYEYuJLJ1wAPUHsaE6VTfUjiTVZ7KwEUWUXJ4xL8vK9FCQqaWY6jX62VNFYQkgmtvr45xbhXSpfii9hrK",
  "key4": "4mam542mEoQJonfQFsVYgZZ9L4SjqbgXD2kYkfwhvimDq8168PXDesTonZrZFX4Z2vnUx3F7JFYKxoDfkcX2n1WD",
  "key5": "2tztzja1XDN9wAyHny2YWvsAD4E8L82G9SmjdH9HC8BF1aqCcpeqUWLRjZ8F2sReC7S4eApyf3Jswn5L1LncubcN",
  "key6": "4P1xh3jVKRodgj4gH9oP4nC4LJamjia4V1VFXrTonobtZLBxkqzmWNiuNsEmkyu7HcXNQL1wKsnwCpN94XceNw47",
  "key7": "x5uVJ58FAV3sFGai3tQELTk9pogYZYut4hBS1CF1B4ASXu4aYS4Fp4RVV6n7X6JcUppooErZq5KUWXctGUKkesc",
  "key8": "tNgDaFGujkCx2gKNcRkc48qFxMmsjHDdN1rrdHwpTiTVSBknMrnK2V3VExi4wYHAt3CGzoGsvXbHkzGbj8jV9sX",
  "key9": "jsPG7NRDPrnDCDBWv5LNg39Weu3NRdGiyksEtrNmW8yXPJ5ebPT1nrqHa6u6F8GvKSPTR7pz2szRNoRmrKoYfwd",
  "key10": "3FEKc9rNZs33wpyrDYekjJxFqLpM6tCgoEwSrrrNbWMc2FDJF5xGYETNMrTUprf662UDXLdcHFZKqfhfnMsCTBup",
  "key11": "5mRpgcaL9CnbN1cPVpJrRXzzCCH7CxeUBzg5cMdmdrR14dL22rx2BFg6ffiueBYXLQJGgvo7CrNx4iNPAcjx1Kpm",
  "key12": "3fnBUQQrLcMwdLH5cPukxVcGXpDn8T77N7cSpL7m3zUWWQdRHbjKN7RRXGhs3ay2aHL5ym2sdftV4tbDsdDADqj5",
  "key13": "5ExW93e1W4XuwH4f8h7sDPq4RQ2HVhM7faeefae99YQGwHg8PTwZudDqi3QiHptosECskY5jNtHkU16jYtvudvUU",
  "key14": "3mBBiVAKBr6boS99YkTaoSb2Y15rAiFfHVLUrpvTwT8bgy5WBJHGE8cGpBVJFoYRWvUzFp6gbpssBR5gEH767CLc",
  "key15": "2U8DKAaHUE3KcF7MPoaLNWTKT11URzTk18iRpJhVLjduM8XiSzyMRoyYxjAWRn1atsji6DKs3T1qmmNNQM8tabbv",
  "key16": "3AyD6EYy8iyAuCMhiUeTSk3oXCMYTnSeBw6cLa5JNXd5GqdxU33y1YoGyWSg1tHfzqDT2RaTgKyhkx87mnZhf2cZ",
  "key17": "39sUPtNSnRh1xQeWko7pR7Ct1Ax7c9B5coUSZWcRCb3NTwhS2FMmomz1YKn2XEWvy2JeFaiZZCVhvXTg3T35Qo4E",
  "key18": "4SdsKfpCUYTHau78cEC9AKCcZtQ9u26tBPUcMt8jdS3uv1stV1bEUDYQXhkhAwTf8nHYgQHsQQZrUrNWL54Yd5Wq",
  "key19": "4eu5D7zaGuAVQcGhu2jhwUz3mA4rTZhPxvWMRbkDCnupm79WCny6AVTBvHRuCwnYbwy5GpBjmd7zvUBJtm16r3rY",
  "key20": "511jRsF2g6gRATNBEZgRyi3mKLeYA6HYQR2JccnRe3y1rEhzHnLzTvknGnGxeuGsWv8CmZ6EKAEcjisZNgUu1X5T",
  "key21": "7q666ZqfRbB6gjfk2xuCcKniD8jAHTXsKc6YSZHVRiZNvJu915ezaBNPwha5MSb7DVadNKvKkUY6k8nDJ1DhdvS",
  "key22": "55b3LxhWUzwJJEMMUxr5JPMsbwaPpRxZ2dYTJKRFH33NgPmVijg5uywPJWDrMa5fkRftfeProKre9mjmvXAHJsUR",
  "key23": "2i1v2ti79fuphhkCsHEpZRJfvj47K29fyrbBvMC4WAwPy6RnuNby7azi7sz1FL72UgG2E3pHvoGBC5Hixf7BjcK3",
  "key24": "3xRrSD9KztmQ2eE5Cu2gwSFoqQi5PNnUufDyTbjpbDwyHix35s4Ps5AWTiMw9JNymTp5miaRe8dJRx1P2yey1Ne6",
  "key25": "5ZGRKLTgazdzZvaA1n7HFg5FNEGksojxJsQZbbQsfLMTwSZDEsdrfLaziAn9zkLcp1NqLSH5BJvh2DR4PYwDQwGZ",
  "key26": "2cCkNXe3U6K1THy9ZsTLSmykuUi596iGZiMHYG4sx1XRgyj5dijDnQv8TFXZrPFChtNS8GmX76DxrXvNFs6ACmJW",
  "key27": "28qrD84TNUXUf7GMantk8zpwa6NuWaXrvqB1uWe7cab3LTLDXesGQCh9pgheXfifFNJgmoAWnN3ZHFUksiAW5Zrb",
  "key28": "2WU61AS27mD3N5G8wEtk2x8p7CL9oMBQGX3MpyqPCGLsMF5z8ww44CGGkehjVfJV1D4xPwZbcNEUbpb9zy5EbUoR",
  "key29": "5oSv1CNoek44tDRUmDZBAnyhZa24R5QA5A3dqefVdNctooJLBujHY8mW3DY6kkM9FH7DLSDypUsYeeKA9gKbPH2x",
  "key30": "2RvCH66qMVvmzDp3yjXdDXzc4L5evCVnYFDjNk1CTckQcsGspkq9wPSq6DrshqrchqxfyzDvi5moerPLykLciJvc",
  "key31": "ecVunVhgTvYXtSHncAzh1P8mK373sqpv6RRhgCCmMabWxvEXc3eB1tXpHmhMkPrQfCFtFNK1m3Sc6d1RTEmwbXx",
  "key32": "4x9WeReQqkVA4VS6mU2KBiDYQMQwkTPnXe7oSxPiC4WG5XruSeRMJBaBqqqhfYJd7oduzDDu4FZBWuMnkapsxyyY",
  "key33": "3apxHnmf7BFeBCRLCsYpuzsnk3T163eStxkajDRS7AfqXonHEQRy4FrenHfYywfLwR1XgG2EgY6HXsfYg99eFRFV",
  "key34": "4NPmKS8r9SEMFMjfU65TFzerLcj3JbrHNSzoZ2oitn36v1VcN7achiSgcwerUtKJm5ejhQCA6Qx2db8GwRdLhMzL",
  "key35": "36PwgTBh924HEqnFQzYoH3QbSoUcieVyeSEe5mL3gqEFxDqpBLvvFdF2myjmRNeuEUqDy4GTuiTjyiK1D8tKKZRQ",
  "key36": "2DGwdonxiJ4fEVZu7gh5Hg2TCPHEwexgSbMim7oYivAUyQR2X5qDSQoREeeYv2fn3wQp56F1gRrzrxCAW6W87LPV",
  "key37": "4FxtcskgMN33tH1qpeKVrTqyFheHkscJeNqhHtV4vdPmho9UUm4m21xVex3qKmiPxGVuVZmTJQF5yNj8YMxbRzMK",
  "key38": "3PGt6D1iLhDWVq4tDQkCgJuBw6piDXdeS3UraoD1GNKs1Xiz3WW3xSmarEQxeSvvGVbXxcWeuquNJVzss8Hyss4A",
  "key39": "5qigUQVJDC4hg1Vbn1FQiszs6JwkZrjaqp5YRcccEiCZMvB9dHjCWfj3F2BFsZHZEf58RFJvDBhrHXJUaHWLe7k1",
  "key40": "3GNzhyJbW85m9i5NDYicRd5ortQFvKEoVNTnr1VWR3RXq33777HMn1pm1jXgdrZsqdmDNJvRrJ16AcaqLsYpRuiT",
  "key41": "577nuJRUGytVnaHgvuZFMxcDVv3jyiXfdGPenCkWuHGRWaw7bPzuYXAUqEuaM4P2xmfghjdKiVkefoVRmMqrHsEM",
  "key42": "5amx1dxP4kVyuy5ugoSAK2jXbaziJAkSkVGcxKH8NtkG1Seiw69zJwd9iLGoqfdEz44yxaVNqcFjcb2EqU1swurw",
  "key43": "2Z4j7fnvG2NaZ4qLGG5YkqaoGBuPaNMzKdS654biZGzzfpvz7eoJyzc7A4TmpFXymePV21VmR2HbqQxk4VMCwxcM",
  "key44": "3gwKtsS1hxEnRGepWVAnmQnRaSkgvSawQM29xEw6R1bihcGMXXoYptBapp9dSF1WLmgoG3vJcRKHWLmKfyoFEbRU",
  "key45": "S7rWw5TJxQ1YRSsgySWT6uRSY53AbvNeVofW5QJB424zp2exv2yWv66Lxgc5TYdgut36X6oepJohMNAYAy7qjHm",
  "key46": "3R7jAE4z67kHeoXEUt43GRPS4KZodBnEdPMfWR2MqTg8Hfcvjd9mvqHParxbGVmdo5FPFwkD1JCSvRQVjbJkUZDv",
  "key47": "42TTyuQBT7FXwpjbio5oYDwsJ95H6tEHUMBcDq6WzJVzG44VdZdqg58ceeqvT3emgirjyKYF5qVsDY4s4cVnfHj4",
  "key48": "4XwJqU2KhVdtKM8ogoiD4N73cDReouUsrQfKW5mLiM7daqKcknqxhDe8xRyxeRJiejbcXd2mAhN6LZqxo8rziUZD"
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
