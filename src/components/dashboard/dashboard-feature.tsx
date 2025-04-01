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
    "2Lw93C6D5Rz93QvfXwgxk9cMR41puboH5EXkBoe7xWM7uu513mbcrcQQg3ihQ9cBeHQLzqNKGs7gJCcK1zcT66dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hEHTnpiJ17VMxmetRWuFNuxzTXhNwWoSzRwVzydmu7WUhtu6Kr7SLqa12LE1TNx5rupsmSQxrTto9UMMaPPZ7kx",
  "key1": "p6RUfWS86vtE1Em6uFrRDTpAhu674JivcjwRiU6pdYrfhVnrCvUST78GXa5dNR9kvbXb21j4Khr5zXVjtX9cbAb",
  "key2": "4fTrnHn6HYCxFqXkqzBRGsr5xnuWchf9Gdn9Q1bCRZtN5tBfmJZLyt5XE1amFTmDGpq9287Jm4JVhSrxGbxYE8di",
  "key3": "4MRsvTpsMRmTaqneJs4h9XH7HqMWKj2JGKFCD1ruRjDbxVv9EgPwqMi7tAp8Zh9BCYdAhLFQdd8xpkfXCGFF1StT",
  "key4": "5erNUEjExT46nSHhguL9PshN6GTbYXzxn6Abtr89tWLMSWXLWVKgQbWaVxjobJTPyqYbtnM5JT9R9RyijBDmkBWv",
  "key5": "2YGi6iGNgpNWJf8XtM8xaEaSmGTA2NfoEfEFMGfcAfRZzgW245BwaBMFxeob4q2Crmw71BMDAhdJ8DonLKXxEuFo",
  "key6": "5UoR9pFSMcY85qNkF4zDNwravqrove9ke2Hq97tz1nkJQgsFC2tQXzUk1Er8oTCbc5PKrbQyp1khTeqv2cDd92tc",
  "key7": "5UzuAdP6kXvkWfJWj35ffHSVQMS9zVrcRXBVaQc6vC2e8TjQK6HrbSg8YKpYdzWwusgEkNiQapHCKsv9GvWQkQch",
  "key8": "5rS165kph1vzQL9GSp5xH2k3ipXuyCsfubzgCSvF5xUXKX2MM7RoMaqL7tyNAswPs486JGVnn2v8xzp5VynCDquh",
  "key9": "2zzutU5dCrfkHvrz9bedMvDB2USyn2PX7LdvTUwZCGxrfr3kGE6tRxR8sMiC2LK7EKh7XBE5emiJGxeTKbuzcunc",
  "key10": "2g13zvKbgbBxEUNjyDFBzBwiCT6ybygYEjXW9HwiukjmEFqS51wqRrgULwrjuRW6wLzuXrADDcrv338mKJvPfrxu",
  "key11": "2JWc4584Sb7swy3KNnZB13R4TYRZR5ppEVpFAj11PHzEkXEjPhqpiUXVMoNtdiAgZo2VFgW72kCvwQnqZ8jJZsHB",
  "key12": "3LiEjVmxCRyEGHMTguk3w3QVJgBF2rJzJvQb8rQMF6WeCZtN696imLxiTM53DuN81jCyja3UwgHxt5Fk2ftA8ffv",
  "key13": "3vMkzH8ceLhaQ9AtNVymzL9nnC8sHJ1DybQwWFTu1yoMBV1YCvLYHcnWGLYHNAsysDXD9cfA1fw5J2o6sb9UhMus",
  "key14": "2dKPxk6V4ZrcNftXo7KW6bMBAoVxkyefNA9mkDYAxVXqrBBTVPzv984373Bt49FRhqvC3XpMpNTomWoNJUVmHahs",
  "key15": "22jfko2teUkbjBqV1S6boQsg4cpgz9zzZAsq8aPsSwvdm9ciVMUCygJZzFqxub5Df2Nz1riVe4PJH5EM3heQ5HWj",
  "key16": "5wMc2KKVF42HysFwkzx8vWFqmmor6dpBPZT4wje8eDNHemUtbgefwA8LYdUVeE28yHzYpHSDeH5geHYpXTCvgpFi",
  "key17": "vnmzU1iMH9HC44mhyQYy5bL5M1si2hBxyEgAjjKCc4tuQtpL7jbzKDQu18BYgfL7j2FMnQjhzqLMrPncFpMmgv9",
  "key18": "4hbZ4h55Ku43dRuqYfNsAuANrivvLR9Anw3wCnZ2pyZx8rZPqKsTs6wUqz6sjwvvnqpqWoXDgSnLvNWSf3jrPsQw",
  "key19": "5iWVQb2NnGsbGjvj93HeSnKgwgbQrHNnqJVuCrVGWesdNQp94obM2RXZtFesDtPFMHuqTWrEnk5xjViC1rk9fkd2",
  "key20": "5kAcuC495xsS9SBbCMwoZefxnq7gsMDGpW2Kw3z93PYvMZuga6tMxqkZQwFhJ3fj9VDUs23QuMXyrBsqgS4VbRnH",
  "key21": "2Dcm6AEpZpMBJtTkAcEK7dox6umdFqM2L7XXaN7rx4VXT9QQPbMCz936YsSjyYj4XBr8Wa26nuTPTU13fDGfM1ey",
  "key22": "W83jQpC6Wt5mEWjxYjt24Ctx4DiR7ZGVMVYQp4XNgJWr7cAn9NQ2sG9bRDo1bmzqRqzM6M5eRcMg6S8K962LxYB",
  "key23": "3mjTuTCNF3TctuoemmqMDs7rnsVxZBju2d4gMNBxNGFkfst6f1A5dTKycJxi9TzkSP1cDuoYdyMMz3ZCvDif3MLr",
  "key24": "1HVRUZMmXFcP6gHgRiMoPH8R28S74Xy8EEquq3aQ52gYVhp2czjRhARMU2MEzrxqVXdSdB457hJhdMWb7Fwm7SS",
  "key25": "33aCAY7kSC9v9Dr432FoFGRwg6J2w4HzJxkmq3A25VcTFQykmUUu4AVYFBQhpwRQiCbe6UKxmDJ8aTXJW9T3L732",
  "key26": "3FzEqpiTEeoHPupVcxG3XGbhTeu3pCv4bBAgJoFUKs6BQEQStAyJS8VcrWJ6sehyNUh1nyEacFrcYEvVGByJ1MML",
  "key27": "3YvwLFpqT29YQUmJQp1JtsVUmMaPcbQqLMe6PbKA83WLaCDstfMPAmXqwKK5bV637c9RB2byVJ9ZstnDhjw8ZVWT",
  "key28": "5VKz51threG57bCYbPedfV9DEf1JRuSTucUjjvdFdd7MjK2fBnLvF1HhXooG2p3MwXG3XMDP2YehLQwcRihN3szK",
  "key29": "4FUCSR2kbzVRb8CE9eWVoSfX131ySxKzGJEMLgswZsN5gfwAtM3vcFGMgcoC9LjMk2nChCA3ZfSB8ghX7YC45sCG",
  "key30": "3gfEAbLv28dYVdxX6shGbeyjJxWuuivgyTC8ZMz5E7CPX2BXWEuEGXs1fu8Kg15vSb5KxxeQEM4Zaymv182Gshe4",
  "key31": "H2XK4iUbmL4HnFTTg9JnSNj7gRgF5sBA6YoJQYuzUXe8kgbjcFDPdZ8Fgr6VEASynh8r4N9s1NZsGC5cSEaUA81",
  "key32": "3faZasJ9sTB7kda5hQCVoziPCwtt5UUKv2F9xpBjLKDxEtyejDRgsFCi3fQf76GHJSwHfxCh121SgwxjbJKNgBUs",
  "key33": "4bHCRpSWxFpCHVHpcCKCFmASMGgzxQFfvpaLFQBR1QkngCjwMoRw78FYuVWjWKWEjGgUGQUMVp7tZoYhMdqk8EDe",
  "key34": "ViXppiibL7Ux48TsoeLht3z3F2NucfJb9GCg857wPBLwYtdDh7x1A6Wb21ck8vqvZwSRKr7tyEVRudGyZJcou3K"
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
