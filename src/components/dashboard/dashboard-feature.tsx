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
    "3RX7JTXWGDX8LLKmcu3bcSd55trkJzrZV88bwDfZt1yhCZaTsA4BrweGnKKNSywz5PxZPiaApAAe75dyMdoLjnJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sGQ8KrdryzfWaedQCsFcQgcPSSwZGRk6sdbobZWnVjyjWjbZiYWnnbnK9n4DREJUwSbp44vVnxrUiKFyvnVigZV",
  "key1": "4Rwt9uzpehqzYASo3hxn78boYBnumcHPmdv1HF6PGzvxWMTDVh9pncBfoGKSv84avU3aPDT7NgqPjHwLtftPCQab",
  "key2": "4QXFJTh39QmgPD4vKYHpGxoAFKWNrXJ5d5U5vJdXfsEeJruQ3DMpNARYS8uJQcguZYXXqPNkcS96KnaWS3V5amYi",
  "key3": "BvHRUMk1vkd2kLAmwoRBEaMB512RYFsP9AtxD5diNssZLRrvnUJHGPDJuKk53r9XC3jEcuSUb2zEkc6s2MrxtkR",
  "key4": "5QKCdqnVLXW31niPcJCTfbUgyYAazsby1Fy8LqxvCk2d7brinXsroahx4UuafKktbYdis9gDa9Gv9VDrf9x6mvRX",
  "key5": "3movcvgm2hAr1E9pyDhZPG7KiMukTR3ATjcqtrs5o4Yvk2iPT1vBJy4mEwkSTbFwk8PW6UqWhJHaK2mU1UGpUCDS",
  "key6": "aBoajWVpYcqNG4n65T1JxzPPoTBcwKSy45vpbf8pn4mD9NBfT6mxgUeQhiph8WEfYfzxenX3HwKUpBKVRRvJHPa",
  "key7": "4628sy5QZp9wUeydWhsKV55yMUGxW69oMxUuaxZ4mFixfNSM9iJ96dTNHALuS8VCTDb9MW9EkjmykwEsTFFEJV1s",
  "key8": "2EQ5goRHoe7JvdiAHfiM2hETaJJp3TnKmBUSeSNcMxqyqSmu7KGW7M8wD69it1zZ2H635UYNAhNXYonyY1U2vuf6",
  "key9": "5KcShsKwz1SJCxcRW2gCFjEF8P5RDUd7GEnKojffQuUjkxY6g8c53ZQvA69Xgt487GZi2gpa5cj191AibjN1NEVA",
  "key10": "NLwwGjPifnhEWue8oavTsuHbfbAvo7siePuV7gpziWKkmpZs2kuSdEWWA4JEiqzbbgpHbCfhdtoefA6LM8N2Znr",
  "key11": "5TvS9QrLJdivaEQKjp1x9a4PCKXGsHNDTmkA2CJPUKnPSpvNZHTgvAM21sVEhEpxHkj7Nr8rJfMcir2Gtb3vLJ2u",
  "key12": "4Px6ALrHkr8Aie1oAeTC5UU7PGrxNAQJgMFh5o3xCQATQohjMZM474Xaj49qqkg3fsXRUvoZBdzPNpnwnvuLbpkC",
  "key13": "59VbtsH52hM54Jqa5gkt2smrqjG8YQujRn8zRafMWJFUydbcpEpRnp6KXZq573W5nR3zCcJDimxDDGW6TC8mXQ17",
  "key14": "35tjLvGnzaZjdM1EKivu5wCs1PuGba41QySQ4L1JdCD5STP4nHmjT9gzdwK6gfbHBCK2Z7dCa4Ynyuh3z6Ak9Ldy",
  "key15": "48XMoinh2MKyJ9dycSLhrAofQJ8xusmaD2t2f7B8mZyhBxJTtAtfDqDQURrwyXfTgRE9MXNi9zukSVMnvdmK6PBV",
  "key16": "3jWN89xEyNL2pwerT7UVpper56YcNEZyS3rxWqRTGrjhoJqV5tNiXHtoKsaygVkA2RNzwCC3mmK8Scm7o4mrJUVb",
  "key17": "2FKY1JA1s3UfiDaV1z9Bd17VqQ1KZqLcBGwnk2p4xRk5zxSLLRdcPjfBFHxKA3f9Jk9C95zaDNtAHRYaHJkCKNaj",
  "key18": "2heRdPe5BCAMMKsg7A2iFhAS49E6cz5KqYfhS3QwnUzNgaQh3n1qaf3zunLJHgqaWMemEBXePD2yjFXgZd5bXv96",
  "key19": "4m9nYLmgzWK5PYM3sLqc3hig7F6j9cPbXii3J8yrk3vr9GtAcAy1vnErh5s8Uiqf7tChpQwEfNijjYHresNRo6xf",
  "key20": "2A8j5UhPcwb2f16oJuaMvhWkaPdtMW7U6VVJPgb9uyQrNmEfRnsrFGSsP1TCU6KkRf7sMTHxFaVt4wurY2cDcVai",
  "key21": "BJXBEkRQNN7A4GbxSjwgvPAU4egiuN98Z9JF1vduqvcsv4yFwigNSTBNVtnKkNbtDDk4qv13XNPeD1Z7qozuuEk",
  "key22": "piG8TnCA11X3thwgjCZBnN7mwo6rjfmP34pM5GEoGMYrpfARQ3xrPF76LWCtjYXH1x6n9VJXuF7kpGtobsS9Nmp",
  "key23": "5H3dV56WCFvqQG7WgAjUn1CstHV3RDiQony6JcJWtyUDppEUqTpbSnLxJuy96BfT3Ka5v91AU2w1SM73ySJLzj3q",
  "key24": "3ojFPi9iBh7RD5G8dcVLLfdQCNgHqfybaRhJAyU4ddiW4qv5gDWHJangsKWpNuPVqxxDZnPajjMwVMBwUR8uueZ1",
  "key25": "bHQSkeMFw9korLPygAG6iPCuT3T9UjiKz6uCU7LyQkBLMoPkWwFF6YJeEvgyEkoUMwN9dWQwDT77Zrgcj4eVkEy",
  "key26": "sQsg9X3eUtEKvh9eAnotKm1nWsZZMMXg9prSJAaLLE8u25XNQ5EGE3J641RpiSb6Bi3b7eTCGScn5E2eWuXR58G",
  "key27": "3JX8sCCTdr39n71vRLZJavwKnyZKGAB8S8DLqHsY7SZYaAqjNa9z7mvimKZzBqmPzUFrs1o6xoK1JXNjiAKM6aVV",
  "key28": "5UKK2pErB8nSYtagYs1fktnycfZmNt7jsaSdRW8qbZvzjUrw7v4wV1D4XquPNiaUNmxPovgYTq5C2tAmPmBpwoa1",
  "key29": "CHw4H1BEfRf3ZwFMWpFxX7Cgfuvc6q8KC2gTupbZy9eHfCxQTTs9r7Sd29Eptb2EqCVufwzyKEZGAXa3VxJUjxc",
  "key30": "2iV7x1JP4pF7kfyNV1z1CVmd5WRZ32eUKGd1KeXf86AqQRF7Kd7BQnDQC6s76Z7W852LeGojiVySTD6YtAqUrL4p",
  "key31": "3wjPmJnCXc1RL3bQGNEtt9vX2iJnuwZLT5RrTPSsdKqZSBruSxVuyD87GsrKvFCH2e6rjumuNh3sph4rKiQRXWA2",
  "key32": "5xjovp7aUCVe3moxEexbimMSi45ZHg6ptrTf2arUVGfGoRNr6KwZu3d1CHPrWB6sJ7Ne7AVqyrPAAjkfvrDqidzw",
  "key33": "4SYbwWytXqqYCyEjBmaUbbJdguMVYRzpcaNtHXFkGBZ691HuCT1rcmWrLqCcLoU6XfAdVnPkRRoQtQ6MMMAxRvcv",
  "key34": "5ACBzKQEf4ZbGspEUYVv2F7HFXw5PK7bemKBVuy7Sqh4Ancw2qQJz48j9THD5XFspztfHvXmnoECfotNvMabQBPU",
  "key35": "3mFZVmgzqc7tAwfvnLEXqtHNscSkFk3yxHpYoQJ1giAh6rCkqwisFHUErCbdmBQZGDLWMeHEUB4cRZPSWk4Hii6Z",
  "key36": "4mcEuir6aybKfTdHDCzkq6VeCDX524wn7unHJyfxhGXpJW81U16NueZB4sWwxr1GKUzrRpjcygt1HeAWAMEa2kQY",
  "key37": "5kcxXuq4zCdER69Nex6RcRfs3xjNREyEhvdQa2VryYFMNsNuPZ1M53T3zAvk6hMXsysNAhfsjfmrUH5iyGQxa3Mh",
  "key38": "PjH7buYzuzruvHUd3seAPJKvh8UQ3VTixSF77jLqnLxguTgDcVSBSWumxEeybMpfndNxSoN5Nh3Zfus36DrpVjE",
  "key39": "269E4emcfhUkqh37wairB2Pwb6zthgRAqVR2xPHASyruZANNCDfYPVcoBFvwFjMPFYQ5uuYC6uLEp4vh9zRH3UTA",
  "key40": "4skkxTarkte7thEYgQA2UPhgFDsGfUQDhhajYTkQtX4qYhMZXXT1Mp3CF3bcqrm67Zz62bMNLGZNDZjPvkTeHXqc",
  "key41": "2XbyUzbcQzahvzqSaxxZVaxVwYXysu3pnfRoJhpP5GXVLBTRSED95hvLYrfRisZnhF386tt69Rv1LQPXmayroFSi",
  "key42": "4hvxcguqthLoRzhozpHzo298Lf311jvuCagMrnAFgn92MTn8BL41Xb3FYUcsVasoE2G1WFRNfpiaPvpnxmTLwzj4",
  "key43": "5ZCTtTfWpdfj4qfoQH98xpo4TQEksEgicDdtN9UzrbAEK9ppGqzKW6QqUqSS83EVRVrEQX89rEMY62So4E3Ekvu3",
  "key44": "24MJDHpRtBtuDtQvK8yCQWwtNjPA4JUupwhMuc4uy24bNqVCytc1sSNUtya3x1pMaye651itjiYkf54LnYM8gYcc",
  "key45": "3BDebNM5K47o3Jbi4jL4YsMS7fH1wSRwBCmzC27uvAUFHVfZ1bytQjKe7JV6ZySVTNSL553E3tvTkKdqj9S7HqHE",
  "key46": "2zsgqHzYYPWaY37Y2hBNPjAyF2B7AN771PYrGGh7XaT9a6csyVmCnhsYTNnJKAyTUUmEckHUMvEKjQcCzZruunwW",
  "key47": "53z9vgBiyE3iuFyVYTuDozDpJzXREE52Zndqk7mHUciWg3oUWwdW4vnmP4UyJETB4Ysbx9ALkU1JQ3ZsW2ywt86V",
  "key48": "4RiJwQLpw65Fg6ThN2vA4gRnHUhiY53fUhceJAPrhSC4ApjWZT86ahnmoi14wBQgxrfSjUAaQ2WhDiL9qyPbqDBx"
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
