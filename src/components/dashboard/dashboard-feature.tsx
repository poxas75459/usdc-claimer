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
    "4fkRZabKbwxq5qqwa11V4eRGSxzVNGLusUAoPDd4f3m1bKYXAZQLqWGrYyfgPyMYqivXgxsT3X6f4ioPHEK6Q97Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LcnFNd3GLp7PNmLzXHjWjwfjJJFyRE4sU4JR6qeTNfU3hqDFf54p7nzbaTyhYQ7NcFxyfLKbvaxS2Qjfk5sFyfa",
  "key1": "2dJsUyq2QiNhT37xVwprj5mEHgEn7Ld9Dz2XEhk8cshBGM2dHUYCd88iqrPhhxXZcrXGfqkf4pj4jNkPQNRxGU9L",
  "key2": "5rgGWhBZsuTSbMfEKgE2Say4biMjDQ2tJXE6SnfMiPPSGpE3W6ZXLE9ShrJN19VWZkCpedirKuTH27NM6QFNeYqF",
  "key3": "3TZzHjKGAVy9n1iqCSpMaZrH9ozQ7bh7ouzd8doJXLKpvto8pxaybJy3jyij9am2BYxLj7AWKN9f9fxydeQYUsD1",
  "key4": "9vWRa9zcDUMMZGJfEru7HMjcbNAijjiuE7gHStFqkpdgBpVkeupAxh6bp8CGRDUj3EzYCmqWv9kEUwada3bghc2",
  "key5": "56dGWyBVEWTYGrxPwVT8o6dVGbYsukkXwUM1Qf4dyqEVo39PYy3rB1HTM5xR3JaWPGnDFLwL3xa9tJkMDZLbFbPU",
  "key6": "4hSE6QNR4XFoYFtFU5tbKvP1KvP5smg2FNity5w8vV7NsbhsEXxvh8Csz6ecJ1i5pmLGcXS447aN4P18RpG2isPk",
  "key7": "3MEhVTuNFhwTY8qY9KDS9YVu1cQyfTULUFbgDqrNsi33xPYm3YhQYvBkuk4aDswTZ8Woqn6yEY3HTixYq85VoL9k",
  "key8": "4acnEQBJczdRbUpa2gxs5r9L7A2WCfHtjVhUUBB5CptdhqJevZrCSHVMfSu81KLx1juPFmLpbATRUDhNdQYGY56Z",
  "key9": "2pNgVga2McPpXcUpyvMNQ3wvMFgTwQV4ycu879oDoa832QQC9tnbYjufwBGi2jv8tHFgLvEh48VP9eEtpZBkBYPP",
  "key10": "3LDLv8UySsoZLemzUJdPiHNNFQpy4soL6NBQ7pTuEYTnr8FRQSWyGJhEmsNZeQ5nWh4vSA4WNadfBd7fsZT81uLM",
  "key11": "53GAo1W1K9DBPxMdmNxjTWCXebhkuFrwjjrZt95vkD4UetAdcD36jg6QWQRBPdQhsPxjiXLHScJpEe5pnWMYA8sK",
  "key12": "kM5W19Kd1HKtzXy7pmRGDsBwsubMqAenwtCogy9NSqxAwPa7LHE1MyKLSSoHDTd18DySkzZsC2grSSmoBpK1DWD",
  "key13": "22Hm2jzeXx1nqTujjwkkZDi24dSvXN5DEWJyWeDbD9QapKSGDVjcqzdviTHFrfcRC2HMFoP5W8VDeZb7YFFZjfM7",
  "key14": "2xyhF9iPSeMinN8Yg9YTttGnMCYqx3oUNtC6ULURWFSkdSUxKmQJZQhGqJuH8d3dkh2Pwj63iCHFP7UzRD4oYyoG",
  "key15": "dqx7s7E7Pnu3fPQUCYyVYq3emhw9nJYUtcZpYHKD451nDJp1P2Jv7cMPVkcXpaUFnxgMQ9wAKkNktK1b2XUY5Vi",
  "key16": "3rnDcEbEGF3kh5AisDkhPs4TbkvsYXFnrKHF1d34FSDjmceyf8Fwnmwr2LoyQtPrQJcnY5AAJQf95vZQJZVhAvvE",
  "key17": "419KSS3MS5nR2ES8He3HQ4CUogAGK7QNkR2iSmBvaphj4AQukDrHUrtYZrWXfY8FA9odFxad2BiXq3VVd6EM4uYN",
  "key18": "2fFVwLzPjcTMvaWKrGcrje2bRP4viHoQzM5FEKGLWzQqyvtdt3tSvm1fDJeeDNVHQzSX55RnxVUUANAMAQ1bh59m",
  "key19": "3TRtJ193rDKczUTTUAiKbu93DaGhAXssU4Lhvmfqs8z7rMyqWdPhZg3ug1nTKVqPCdMb5D2NLjNJuQFr5s6CVwiF",
  "key20": "7WwZsEYbfp4EecQ4J71gqz3SMXQFNbytHjsstSCC6P3FS2JuCwy9zmnsHpzDX9cPidXYiqRv2wEuB4tFjzH9zcc",
  "key21": "4y1H2paPGdubXYDMuPv87UFeXsrRm7Ky4Q8DTu5UqRt89B5x39Zcs3mfi3wz752oQ8EEYXXKfZvarMmHYfcXoAkM",
  "key22": "5dzpqaaXzt7pNM36DCtiWxk1WmarX8nJkbpNsDmKyaDKwWTHzSeac6HyC5jh47WXbXb4XY1LKg4VnsjCXuT14Mhc",
  "key23": "3xzTtm9X89DArcdNuiTH9b3UYNpKTH44Wp1XWRfgjm38J55tZfQxrSoqu9aiaMfryX9oyHJXppLC2xgBvPR5kDG1",
  "key24": "3XVszVRKV5TsWkdePYFGL9zbPXMR5HrQ6Xi3KeourZWp1RA4UUvMrzTfYCxv6QNcF87foY2nR6tVLHj7wecWsehc",
  "key25": "48fmPePF1vAkade6jXG3oH63CVLropwVKA8ABAsfyfVeR63qZe55NqZygNUtCtzXgKddvNw2SqTezkhSRL5cAAtJ",
  "key26": "5G9tiFc98adaArr8cwzGggjSE4LD4zW9RFHCmSyAsRNPR5HfLPZuwkQ6Tb4isyenyCpyq3gwFmgxDRurQBE4xHfN",
  "key27": "2jLhNfRiPWxFsLJ8shVuziu9kQDjw5NkdaMWekhQ5K2jvrKudxLuaTRNwoUAeuyZnav55r6Q7RMVpBLJT8h9Tksj",
  "key28": "2h9QDp5UwX5rrcoP3VWospbHdxzaS7zM77T6s3v1SQ5xfkxkAtSZR5BF1fLXJUQkz7g9h31dE5pEmWp9WSig9hUA",
  "key29": "3NEv69tEWa2vxL2yuYXSQimVoYaeLz9aCrcbyuouUmnMWcYq7dN2BmmCTUo7onqz3qqiCdohCMGMK89q8Tyv7Xdj",
  "key30": "4zYxngH6eKDVEoB3GVmjGgeisRpnn72a1pR6jRcVpD2Bpi12utNb1AaXykyAeDrzgJuEqpzqWXyJvreZnesKzPP5",
  "key31": "5hDmRshqFcKFKMWxSzfQo7AHMkxWZFTvaZpsyKukdYzWz1r1PqP91mtu8LxGTJo3AfAfJCaLMUAoxzZT2Km7XmLk",
  "key32": "21G5Wy5g6ckpJSnNEr6sjsTXuz6QVTUmgeRFkayWytenTk66GYHQubmN625bVwjze49u1Ta8XCuJAn2mqBzjKfrq",
  "key33": "5UHepEZ8Ug14QwyHFLEGdrRcfjiMngBLcgp54TwZs2TkB7aX5KKeVF8NoKMvbBKeh7AAhSPpbWY7hUhLz7vpNrgP",
  "key34": "66Ug68UQPnzADJyDH4uVLqWtTEAnfSuepMaVeUEh4Aj285WkvqkHf21YGPAAMzf3F5g3QiTwgpci1SJvUFJdDYxZ",
  "key35": "2Mwmq29m3Hg2F9diJy95zkFv7PKTDLubgpUABeSrXsqQiv2bnzvUVsY8fNEMXAcuWvPBqabRQZthsq167N8Hg5zA",
  "key36": "4fP5qszuT6wEXxJ86fkgbTY54q6Ns6VZWMkA3wAaAVwFLJmUnP8kBZExqRhTpHf1RMWpMrwAqUtkQza5P9QjmkyT",
  "key37": "b6Fg2cFJGQnkeFk9phRxWwrYRniPy1d1FHAJgHFpVcJTWFjUPvfTsQXrqH2Yj9yxmbsSZvgaf99SYgFESBFm3z2",
  "key38": "3fUSabqXB1WVVVn1bbQrT8CkVyWzhJ8aNLdKWit2EoWHQrMcFyXtJMVXJx1gBu4FbSDVBJKQ3W6tuHmqHEFZkNh",
  "key39": "3QpvyYFQQ1kL6UP5y6wgJdByjH73sPVhfv7sFJ15J2AhL2PzrhRh4mYFhb4qVvYAbBageE2sXqXwAjLwHByzhMnD",
  "key40": "5J8h8QDF6EZXTKJ85PF9Qgwww2KHbJAXS5eovez89uwZwwzcrA6Kuyrp6d2btr3DYGAHrXVnEtUegy6fuUbNGfKh",
  "key41": "5FbGNFFUGvafyqfV6b4Ws9ptStb4WKnmwfENpcjKMHmi6VBsfg2yAUVQ51fDwfpV6hrjpv1M7TjQhpDZ4iwQA4qM",
  "key42": "5Cv5GjePYv7G11yJNrRr9VpfcU1Yn5D18ByoSxRdAyu1y8wgz3B4RiSSQVqjAdoHp2fYBn5hmFpD3gxJ1i7XMmw2",
  "key43": "61xK6FZUjuwZBVVCkJUD24NtZcLPz7i2FH9aii2NUynJdN8hMyYxjUdMyyMZp4t9NwQGCcXVc3G3YftQke2peKng",
  "key44": "3xLA6cLqfvttyp6DeXxZVMUNhgZeN45jzgmfub4PLU7Eq2MVooidbxPUF5UTnSQuGscHjRS4YsLapePDKv2fG8Pa",
  "key45": "2TZpofaKPf6sk1E5ZzdV1qedoHv7pPP8Sy8uL2649aLLKQcLbqYq1e2xN22hCL4msRHfuusoXPaec5YjqSpMJQ4W",
  "key46": "45QGFEaVRFoBmyiZb2DyWVBEuFTMucasyrUE2QoftW9CGMqmR6NGdPX4Kpx5wn4z8QT38bk1bS8fPBMe66gDABBA"
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
