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
    "4g11CFofcTeGyFQ5Vwbs1gBZfyWFubWXDFZZi1XUcJQ5zNozafTAVwcWao42XUSQo7DbwHZ1FLzjZyWPVHWd6Bf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dnk85m5HWPsGhc3vTri3f3mYJeYjsD4WueCyr3mhzYsXaY4s2orngjqNA37CgcDYn5Pna829NTFknXkRKMYXEGj",
  "key1": "cMNckhA6nd75SmJ9Rs7nQK7BV5rfAqM84oimMEeo3cR2PNa5b2tfqGff3763W4ufeV6n1M642UkTwu7gPiize35",
  "key2": "urPcoR47hsEMo3PEEsWzd536KwetZSSTgCoM3jsXfGvmaindFNbD4jmsfKqfXRcoLyM3MzrcLTtorXb2EvCWZdN",
  "key3": "2gZdiCUzUhh44Sm99S5GkpiWb1c98VsHmJf3AyUBMiH13EkMjo9Ai2G6Q4UsVYssaCZobiCFh2tJ1D6v9HhstqtB",
  "key4": "57PHQ5EgvnRq5DufZp4BEwTKoYtPgAYV9YBd79YrBUuc5nEHXiYpCY23i4mwRsAVmXVGf28rd2PsfzxiYCBqBxa6",
  "key5": "pJsjSmhqvxMj8QND8kPn2xEt8WcAW9TXHW7aL1wu16LjX7KGDv1Yo4z4Hy7f4qgVGwfKodJpin3uWiHDxYjdyMs",
  "key6": "nCvVig1WSXrVJny2nQcepwpfSaYDp8GB4w2raTB34n8acuojvCJLPPFmH6PwZXXD2VJpnk4k5RyXu5NJVGFrLtX",
  "key7": "2ZC9bC2czMhAyzxBLiNFrWGAhhE8PLkTHEMrTYykM6Q7B9cKfCpFMM2GWvHa7JxLgLFscVK8ZDBVS8i3HkSNUZBT",
  "key8": "5RPibwxnu8sSVTTK9e5MfoM5ZPDMgW2Sgegp3H14SKgdqmVTZYEVfHJ4hcKPjX7nhcR6TRuwexhvLWPo5fGjZKfc",
  "key9": "5HuWLU5xJmQYHynEf8sXS3c2snrXUsubgCsw6zYZBK9ouDEm4W12aEyyuYvrNWnicXpg2Bit5ZJe2RSenyV7nsHE",
  "key10": "n5Ukfz4wDyjj6DeK9ae5hvXtvMM7HqkpjgJcfqPE45514Bo9VKXoPsbey38XhB9FuawDXQThFGQC9rzfKnpiynt",
  "key11": "AmcUNauh2AXsjfmT8P8t6JJ7ysdBsA9LKw64rKbRLkYTcBy5bNtST3HWwVbgeCLyg9mRFV8FCSoWThaxa4ijaMu",
  "key12": "32Rqd18VkxL337561ezHnyf5eEjjbgRUTuSzT4NDUUPTvbKYFhUvq5dgSJ7tS7jXFBL38rMpWEavPhsSXsixYsHN",
  "key13": "5BD7AY862ackbDa23ZmfWJaAGroRTNmZdgrtbEvteAm6bNWvHfh28DA5JDQPpmS8nv9t5aKdJC2Rj5oFYB1pq8Lt",
  "key14": "32zkwWQD7PVtQ5nUDjJ1oCxbAZ9ixirBHbokRMpqzSTjGR4tyVwhTAnrUzuuJ8sWjMVbHJLSfSMAU5jD2C4MvPYj",
  "key15": "4HJDcoxgPFHHQGUG9AkPYHgPEwR6GaKez36qDp1SpWc5tLaYYaqsvR9KjznHXVJ1HxiAPAXa6Q7b5t9npz6k4UyF",
  "key16": "52BVpfaMpMrFcVxM5u9PTsGsY6xDKBzKCDwZztDR7S6b7vRExsmpif1Kor7QNFGgFmC9ReRaHKVb5HQqChpfpZKt",
  "key17": "2YnQG7DEZNdvnrTuiFmjroBTXhYFjA4LhyTLwmv9TZPjt7VQm4HVcHeJpxcMnt2VNT5R8M8deKrXTN75rZ5nMWkn",
  "key18": "3X6q8V4jjQ4343tX6XcGWR2mA8eKr6nmHZAzrqwPQzdBc8cE2ie4XUcFnj6FWGq5kUuzDxbUvbSK6AnSCfH1bZWM",
  "key19": "5YhYtzbQ2f9kRbRfeZgLepiAeYgUS8s4jF3FoKRsbFZ7Zq3EqeKhmDMCCgpUpCVV4KTeebbBSX6PRHRA54kKfdgD",
  "key20": "454MWWsbZfLFJDRBTWDGvZm4ZEsharno4FGFZvDTbRdCSe9EGAYgMETMvhMtcHHpKCudm8v2SYcP3TJbn7fQfwuo",
  "key21": "3seqg6tAJtNPFvqvQs8FNeqCEyE1i2eq7t2f4yJrAzzrCfQRKFyzMkAtYk8UsZN163vAenCrqo1axguiL7ZZMrqd",
  "key22": "2EXQ1okVNQMXaXPUqfi6rCxuyuwZUdy4TvHWpFEWivTM2rXuMWTLYzsGDJWSu2WsPabS3RForSLFCnXj9nJBYXSq",
  "key23": "5YNWAhRaobwiVu7UuvSwnwNesTsLzMYXSkrM43LULAzyiZpuNAzW67Hjuz6JuD5cAnJNAWMpibtxQyTTV4j2cfpP",
  "key24": "4bXyUMmsh4797snPCHDhMAjeQDDGuraJKWtU4crrjbaX1Fvnprk7DDaNwU734zTEt9t6kLBNUfgkhzRP8CEF8CGZ",
  "key25": "5h9LAZ5bUWttMsSZgcAuGkiwrcUrN5qEfESoCVWENEwiK2rQmJXHxq3EDtFPmKPr5mYqmcnV1gnNcUCWq19TooY8",
  "key26": "3Vmrww4YKfPZCsSyWkFWqbLxZff4Tm2KCq3NXEVSpKGU2xdkBR3uBuKJ1G9qNn2ocBGvJbB5Bd2bBH2uX4sFPkXN",
  "key27": "4kHNxCEQ2xjS9GvxtHfprbUKSXcixhyCadM1vVjpUmrCzR1uDWZKBJxpxj4YhANKVh7YnJG9Mxc89oQKmpzrnb6",
  "key28": "5TpRZ6Huvk2kBwcYsKRL1RA8urogGarGsZRanEoob6F3Jq9ZANJeSA9TrmdEqjQoQ3Lih3H2YSm6j8TcU1CQ719G",
  "key29": "3QrGBLVCJoknT2ZVRaEHuXTBPpwQ1KcDAfVhtn3JYxg9AHKmMfH1eW8jpcXrM5jzcNY3mqDZM8wP78CT2zK8LcDH",
  "key30": "3HEcnVKfzipWgUfAZbhQHcXVMjRg6sMcH9QELCWx7hXLk5jJB8aTSAcvJhDZEmr82SayLF9Ng7k6qwcxG834jYn3",
  "key31": "4DgwxAJKfbT5sfYAh4vs9s9WMSC68xiHUP1Y2HnXxyiYspFgUAnRZUm4gJDoW2k6H9hdLbZKtLJqRKp9fmHrwrRc",
  "key32": "3XAur3s6ibYPV3x9vgjkh8e27einZe7GqLY5iFbyjw7dJigDFEaBkW8gHfkzrdJYNvQCPXCjcVcoWJbjRtuNbgZM",
  "key33": "84kAovr3f9CyYn1CfAxcWc2vfKJCjnL2N2eznQaXq3UAspQgvejngZTFMomc2MkMR5kS6YD9GVNTUWdUcQgNCXE",
  "key34": "NRWm5RZAM58hRKGwHdkiwycdmKZG5K7QJ3vpiaNzXaVKyk9gDWQdpdEweG6Q2dx3paGgDfFGKzBh3uczK4cGYkQ",
  "key35": "2vm73cDHGzMUy9fhSYhwhQpJbRiCaVJH3baoCcGZiLoo822N8jUNbPaTHWtaptdooiBfvGCnfxJdHHqVdu1zFXWU",
  "key36": "3yfGmjs3ZmUnQzXrUvYuQAVxj66ohJQuHENGJaa5B4ooa9L6NhL8Adqjw6uaTG2wRGskUeTvCg3bexK29nFbeFQR",
  "key37": "4cuaFpEDaU2Virv52umrq7rtA8L71ByFZZvnkudcDkMrVzNzann7fNZvvqNYq1miQUvi8gMh9BU9qwHN734UTVg8",
  "key38": "5MkEFLW2ZT4GiSSJixjvh5H4t76WjdDoKbsN1ggk54Atqd6tAFNXQ1buYttbpYHJcpAhRaDE3cceneHJrG6PRuj1",
  "key39": "5i8VAJJENZWJrxGUCBneRke9ofAsXgX5roKr22CaWynBuBSdsJvUzBEAYjKVesxkDuFujVKUEYbHE74SkKSAVXd3",
  "key40": "4BS25UNqkdVYtgoGdWZrCrjA6i6LAED8aTMHSXJY1zGwKiepcVaSJxJUauzNqy72hv7oPUyYgXnMFgnH3SnHgcXG"
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
