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
    "4HZ3TTvF6rronaxAwNrfWmTe6uMukpftqW5tMqZ4JCxabtJ5b2DkeeVqpoySVfMhs7sj5kTwmTaf84tsVvaMdb1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jmgNRZE1Mef7nVqrWJvDv8eWd9hwowXsA4YzPTbSmEM4j2DEkSu3FH6thY73Z2dKgT59BMfU8xbdNaYYgrzHdrg",
  "key1": "3DAj2chiNEQi1DNXyHE26sxej5JyuzQNy8hQjcgJNvFnr8cxEHiXDr2FN9GtazkX5GapZTTr7cvxvEqK831Xbieu",
  "key2": "5SeCGgKvEpgguZQTbtswSsD4sC32MDBvzAtX3ZCYBPr87bg2ZzBkjcWjoc9NJcaPwbXFZDtdoJouq1m4e3v2Aawh",
  "key3": "5nxhDCYB5NdaNs3zubRCCEiDnx9TvnMm4WeTPQTDqnaesj1ARHS91ujwV3BrgXJ7hBHmmVWLsFrF3kKrZ3HphQ8X",
  "key4": "4V8V5W9HqP6pUeFA8cBz9gFDRSMyQrFh4k8gomj4heUoQ9gQgqTon9TE3GoxXEvCSeEubpcAgnNR1r9mW7tJjNWM",
  "key5": "5DsuKtQWHB9fmGeF8psPQxhZF6CFbCSWwkDm8KrZB3BGdKSD1MVExvAm2nZeWMkxe5PfoXgoYNiuNZTAmf3pBsiX",
  "key6": "vYdBU4HX9MWg3SbErmQDpffZ5nYnpcB9rNZQZbyJiyiiywon1K984wcCdABDBTLt7arz6NeGX359YxxcBr5bHb7",
  "key7": "3Bnapb7MgeWLwcjaaa8iyS91LaGq2B8s7STSiAdAoXjbrDGq15Kh1EyfQQ5knRDd8qbndzVneYCG4FFE3T1sdExw",
  "key8": "5G9oBArqMfDd2mhdGSEVv83iqoCKAfcngK7grFqWUsVJZ29aetT7FKQvrDBu5NvVUMY8MfrsMmnHRT8gUdMxVpZW",
  "key9": "4EbME7gRDJ9EZv2q75kfRx4BJvgienCpGcaj3GPG9jZN7GCMYf2YkGeoxsrxoTjUnVVCZYgoZsxfxjNqRwZsZMoD",
  "key10": "2FUn5KYG1ACai5KtqgNZVNvEMPiUiJqJKd1BEji557Xg2TP62SiRY2RohMc4kuQF5VVP17VtJVTAryV2go9dXDnU",
  "key11": "4ZHpixD71CTAV5pNfVooVEQp8dG7bBhDATeoEwBB9LPYjHniNMspxeEfshYcAdDTRSgBibFNbN6DfPHidu8CJKkE",
  "key12": "4pUn75dpjizPUvfqvfRSncX9EBKYaZdw6shm8Rdy7neRmNr6PeEeYCxYT37rm1swB3PbzsEK3jtr4aLMYKvkmM9h",
  "key13": "4WmG6vkDWvfygQsPySX7xzMZPTFd8ZjHAJm7vBuYUFi3pv9umNLV3FG7ySWzxg5TsfiRBMn7puNtVuwZdQfdVWhp",
  "key14": "3ByT15iRdqgANt4TNAfprg4d9tKMcXCzcLFaUsz6HSuPyd3bodx5Yb4xw8cPN3wNGEMKDPD5stJ2GGuRKDBAwp9x",
  "key15": "2UD4yd9DzqKgnzqmzy8QQGjyEStfikqThV3MX1StVxvTFsTjWPzC5oxGQDyFQr3TizauedY6GmCGA2MT4LEdquYc",
  "key16": "57rPpHxgCiqw1dwjATF586kD44UcKXkrgkqCKatv7QJuEZ8edj3DhAUUu3aUCWefZ9ECpenWYjziR8s4pVxPQgS5",
  "key17": "3nJUAgQqUpmi9fDzh7RbSEK2WsdFpQc2a54uqUFasK6jggFV16LXr1avmuZqNCJBSGYAqQGeihcUBs4hwHJaw34T",
  "key18": "9msFvNxz5C9MzS6Zbu8kAxX1N9uJ5BYvFscARd1uCtg73B2eqY7b2f7f2qif4eMT3HAWLrQyCwX456ygZdW9rZ1",
  "key19": "2MgiwaAYYdHubxkNC1NTidFsjfmKaCjY7FL8z7aaugHYouM7ttXuzJtEUrgs4w1HFXhBLpdjGNMC8LWmasmqPnAN",
  "key20": "zyiqY2jcUwm3DkCdfbhTcVEhe7FJvdV2FEiuz4SUpyhLYJqcKKeuwCNScypVdU2Baqr6aQKdEkwxugsHeUizjcD",
  "key21": "5xTE28cLbRdkhGEEssKLQ41sb7a5XfmSzHMGde6wPh5iUYaJQyjze52rwirAw2QfqzjocSZyvR2pYpviVMpva6G9",
  "key22": "3674kNo6F9rQBxkyc1b1kJ955S4VJ2fbcAejaazgs6TS9zEnCytyHRKo1m7Mkh88ufzXyfrETJM89DdqvxrQ3d2N",
  "key23": "3H1YGqdDSP5k5i2Apzr4rMDmeFVbK1FLZ78kXfZBakSyuG2Yya2CQM65bFbNuQhedEa7VszNJJy8XsnrHoi5SKzn",
  "key24": "5PUbpks4bUUXDz7hSbNCS6zibDTHa6CopHkXNvJ5GhQSiGBunn9RhvsC1cX8FmMTwaDMVoE57i5cj3Q7FbnsriNs",
  "key25": "49SURx6g83iXghzUx2cjSmpVVzUnv6E83g7aiBQwkdAno319cq41wRAkWyeNrsvRAPY1uZDDqnfbWKLzLQTwjbiG",
  "key26": "4xWTvgPa1BSyNtWyM2jX42FwN7nz81hrnGQADdytzXaL7TtYHA4nvaG9AYq7zQkyVoykf4wxeGMjprGwHqVynTwB",
  "key27": "2Pqk28n2QsSuqA5Vy4QM5m8vNFm6Y5RqFsVPsSgQhmgSCBTEPwQa27sFvR6z3Ri4hf5qYLf53Aq4M36bJoGqyD2Z",
  "key28": "3S1346nzVCLNrohkEHYmCvSh5nf2PyG7Mz6gLsAw62ev4hUdst43ncLDsnmUaEN6fTWcWNe8igRyK9ZxVAYmnV8U",
  "key29": "52v2BWDfSUGGDFDETduc5285d77TDFVb9Qdb1Q2vFRttpNN9WCQHPfYb2yZsh3cmjmFFSTp7in9GFEWh5RHeG6D",
  "key30": "123BcFyZVAbw2w8fe6oUFNDyMk3ERMRafRdzRyhszkfzuLJnRMPbUcwGVGEJNZnJa83B8mRu2iYfpTdbHPrBDRaD",
  "key31": "4VGe4XKdpg1nJXugYZQWMW1DD1114prG1v6JX3kBaYbhz9W9NWHT6xgYQKbbf2vHFah3riED9jcK6a9HAn4yH4bc",
  "key32": "NLkKbWZxVMZxmL1L9gCFr434w7hFdD111odbJznkdW81KdkxDr5CojT3rUXEY7UBu8mbLCtUdVfBPaj3kZQUTW1",
  "key33": "DN4EQmmg8fsf1yXEFKwJAouhHqnQ66nt3fvHXX6xo1iyyh7SKtGBJZUMe66TxcmzMcD6cBn3oiKNp34MY3JfXQL",
  "key34": "56PoHfWdxMvqG9UsCnmVBLRLXXSZiXpkeZqEVjBxtNeKbHrhVpcokxGSggivg6g7eZRptfY4mCTQn7CfxxeCpmKA",
  "key35": "4veVneS5HKnPyWSHDn7QKca9sixwLJzuGsXu4MjpHbhuu1MdDunjcMUyLVpkABadbdsvaD7oYnrqqTo9MYguX2ah",
  "key36": "5i4tALx9rxemfsqZvHjEr2SrBaRpBxvvKL8rJihWk7TWNzc5W1Lr3edS6LqPMA5Yi38rP1dAKaGfNkwfbjr7MGEQ",
  "key37": "2qSaahUtQ7B8TwfzznDLsSPa376Rdv9J33CoBRkRitYYej4wANTWbpnfu1CvqYtwWDF2FKodusbjCaWVKXdvpHLN",
  "key38": "3THZ2d6LX2dQMvQBJ95Jx33xVh2nBkjTkfC6APU6ARXvqH2yWHSGnYTgmUu3N4wQJRtr1emdSR5Qrd1KyFtLLY3E",
  "key39": "4j6Mh1kbv4G5z5Yhcna7VgsdZ3cV5361wLZAuLJn8je1k5qzswVo5Y1LPn9ccMPRjeh2dQ9x6PokaxPEK5fdqZrN",
  "key40": "2tfKv16crze6JaStafZ9SaiBeZCuooh2cW4jtMQUcGpA2JLZvuB2xZ62aAYVGbCKimGZcoJ7yTUtSjaGmK2Dxcuc",
  "key41": "3XDoWzbEkwdPePGBziGnQVVy8P9DfYMRvo7ki1BDgSELAjWuvhesWeutn4ag9ULhgD2R4Fp8UMkL6Lcx2PKmwSdp",
  "key42": "3JhBPa6Nk29Scn6oL2dnzUv2XRxPTgojT8SXykqETeHsYSnTWG5W3LNTASX9DArvcYqBUSrGZp4HkrdF9vPWQfs2",
  "key43": "cpTufC51vFh4zEsQ3hL2fhwBq72eYvMcHNGLf2bduYkXMTV9PyXpjWhPB9BNgWRA37PPfhVqxQow51Vn8xakk2q",
  "key44": "4YPABNkkDLKFa3HcHm918B7dXkZFkrrjzYXCWBwDeznqQxPJ7LarDxxcS5GphSnJFNSBoYuz52sPCwUr9pQGJwxy"
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
