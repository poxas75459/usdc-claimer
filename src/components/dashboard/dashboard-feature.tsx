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
    "tPh1yUrHJwSkQy6sJrK4y9WpiYbF4c12BsNcspwMfdTyMcSeGruC78ozX7VJc8FZytPY32UQwc2J8X6XKKYoZmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y7eFmUryQSCBrCYtoEHrgu9i2eZjq4dBhSVP274NzHs9AXEYR1GbzYy2jtaWpGSZ93PtwoiHeKHTJkZi4EkedFv",
  "key1": "45QNr5gK8bvXpFq11U4NRN43yLDJppy9iAcRhwYYgwhQ4FLAfRtNWuzShYRdRRDSNHcj33JU4mFrD6U96ydZTYAq",
  "key2": "3wVMphpJUzqXTwbc3veAKwbGEzkJEa92GzpR8AQugWr5Axoe2jsx3hwURQtw8uSdqRsLRbQXXJ6k1t3GCyJnWTvW",
  "key3": "2PTRo1Hi6QuLKMfqMkHiNSGfQPuNQACoX8SDxQHTNhe7awsUBUukz6KUVeGnVaMZ1iKRXR3a5GHbsLjwuikicdQ6",
  "key4": "5ASGa56NAedMog65Ki7pm2QPkXnn4VAxcJw9WfEuGuhZtECRMCBhBzMwEaPHHmfRPwdSoH9T8SMVYbcwq7FKV544",
  "key5": "2Hv1PyAD6zBrEzdgAK8WfGy2wtPgBb4U3jiNHbGHkK3fjsq8DrVF372zqZPBshcoaXabcbobv5tWxqpFjpMwfnQe",
  "key6": "WQAGF527miBK1FVp5N5kam25q9ytttNBUnLqrk7xNCFTobpehLeUyt47c6i24vQU39cyb4Ce6RiHk6zqYdqLWxF",
  "key7": "2ygWfEx5rGCRv6J6TTrcXebMDmEyacG8ayqKZ4Mk2T74CpbBupXhmWMrHmzx1momNeVbHN3nYdUd7EjzU3RrhceJ",
  "key8": "4ckk2fqw3GtPjCws9vJQrDJeAB7G8tJfURGuYb76yw7MBmmaR5iQstni2u1edh56JD2Eb1cAVJxj124GRV4m5Lah",
  "key9": "2wwkpX4F1yefdBeAAVmrjL9N3JFruX48WM4hj6NrVd3rhy9h23qy1e7MneFaVQMs4QLSazGJW2Vk5DY3Q5o5RUws",
  "key10": "23xYPcWefutHFSMZKs29cW2MEDjhW16tvjZMF98kdRhKVTvpcbAQwnXDpehfiKKeR6czeLDkEyvjpPVvjfUqJ1at",
  "key11": "54RTdPCUF3m5gXnrWafyQUVdPoLYBrUrGJfUH1DTmRFukprdkCNg8otLhKkuDYxTooGBXCksCGgBTtFRw7maH6jB",
  "key12": "3FgnbnuNwE8NuGviJXirAv2s9adzBYVe96hFXCJBbSUDUcxkDpsHtCaWeYhaQsn8y2UmSALUYivdo5NX2SwZSrDM",
  "key13": "dw8uoQS7zrVEvkmib5NQk5RTA22XDsao4QP3oC4bVHHy2QkszJUm1y6an1RgegJGmVSsFF7Wcvkvs1ExjLkhqnL",
  "key14": "rpTBfmiG8CREoSoNi2GLxvX4TAM1AkdtL5nXiR334YUxonn1TKz1S4eYY6taCuRSV9b6Chyz5eFDmZaRCwDkgXL",
  "key15": "3uNLWRso51dorAfWsTpgREAyLzpK8eJDVSnYPr7GJLef3wBiY91euLxSV1HMbVvZTo75UMjfnDrCiSSFbsBqGWkV",
  "key16": "4CA7vigGvFBkNj87wNnRSARQYMFCnRmRdY33V8Ue7QLpCH1RXfeGnT1dQt6eLzraRBUzHCFqyEKBpTizp25GqXTQ",
  "key17": "ikEdQpKXJ29jWgCTfmJ13iagmnFpkgX9QQ6FmNQvEk6CdU1V23KSywZHC5Noo82EUCPrhLi2bgbp2BjrMJD1xbx",
  "key18": "3u259r5y7mjxEGWfvvmxEtXVnYoFyU4J4JCHMGSREiancxmDwn2uVoPciC9YuuzfSnsC1XPu6c9frJpD389z6pik",
  "key19": "2hMx5E1B8vkz8G3iqYVf7Ug5QsrcJsGnG6yAskqanrhVRQtouLGKj6RE3wyepQ4Ni81xs9meCbGCgja8aBsEHczy",
  "key20": "43SBmgrDEi9Awd8JccweZcQ8YQf3e4hCQtkwgwVaZYLTLXC16fucZVmwbVbbE4H5Bx71SJwimdZ8bGb8mb21HEzx",
  "key21": "4aGE9fMU4PjbHPD6PxxbM2QaB1vNpmgsSfAQMqho9sL9jbCVweG1drB5ZpcLFfvo4ZAwo6a77NNtDu5jTbFKu8Bc",
  "key22": "2yqJAdmqBGUYWVigyJUyaiUMQanFnPqpRE5AnbZeEhT1YRK7VYDZYPL5BdSHgYx9bWHi9zpa6omYAFi77yZnoRXA",
  "key23": "3Xuq6XEgUxfvGp5HUqga1hvYDs2rQ4fnKeavE25so2gzkEtAv7PEq8rPbTRGPYja5XKdvKGxAVRB7DpgMZEBbuAD",
  "key24": "Sfzw3JnMnvwfY52yYy1jKmCBWuzZeMe1ktaVXgD8VNWeAJxPTTy7CPcpnKw2ijDbHv4tdT1uUtwt43VZLhdoWNm",
  "key25": "ZihJqNpCQEGGkYdNZHv5FaFUqvszEQZaruF8yXw5u3q8wWjFVNdXizQfjngvMLJrP7B4F3UR8WNkQmUCCkN17F8",
  "key26": "4J3yuqy42oJ5f48vZiJqhqcPU7n6X1WsKUYxSVRYR92GmmzmZB1JyMdwLZrFUgNv2ifUhcGiW9QHarNiD9ih7Szg",
  "key27": "4gP54FoKDYUao4jg8PdmD1n1af8JNqKzBRCCLNMus2WSXxXSMVoRMk9cFktmztuzDU6jdG2QKACGv7yXvN2c4UHA",
  "key28": "34CoYyaF4SEzQq9oufcUQ1phCgJfJnycTHsEGmMRgmFsQXnMhqSwydpPf9CcWyfouHXyVB88QQX4MCQewsqdHnT5",
  "key29": "5JaGsfCqTPFzjusdp5N3yJ1P2Tmzu9cKKCZmEQgADv8Kjiygay1WKtCcaS6j2LSxVz5WZJbiBZQMfTeqgLLopPN",
  "key30": "2E3MXwq4sj1stZ5XmWnCYZorsddnXsUmWnvAxH29aDgVQzF4SqaoC6TyBYFTbt9uMy2BbBU8iH4UFChUteTJuGXY",
  "key31": "2HW6TPie7AHHvHr1oLQLpMbCtPKMJ1DNbrri9Xh1yvLbb7HCUwdyC83nCDkvg412LVvU3mhBRgMo9sSipcwcy5FA",
  "key32": "2KL18c2JazVfaJyKT5eCyjEkFeNFSxDqmRMSCneC3wb6HDojPipMwiEzHPEFpXvUgmtC64et1uMMD9q2EMzui3Jf",
  "key33": "3LvDFnfprgaD6tVwhYWxGRUtDjEb4S2MVZ5GedmhJ7WFKJx8KjmjNxQqzh659PrvGirvcxzrnjtwdXAoH57GrfWD",
  "key34": "4uadVBVfVVYCk2i5bn3jHPY5KW3uTs72GFDB6GEZSxd8dikPj322RPVVbAEi5paQHncLqgzefmZU1sNEa78WBijR",
  "key35": "39cZ6ZdG5f4Qx7JHGzng2sVmrGMFoZJcKZSRwZajJj1LVk8pwGowLufYCMoAn34ueYaWHeZtT7BCNnktrverUrEV",
  "key36": "ibUEBEEkRpNDxz1sW5mwjhVqBVqZeDvt2LAPRTgBy19GE93EUHGWHi28pa95FQ1roAe6YiDeZ34WxHkX7ozSfYn",
  "key37": "DmPUGrXsEWSNVKpNkupGDqzbZG9PL4zA3ZkY8WoC5TKNySqEjJUagFt5hQuJZMnWd8aRoz6BsBjJyspgZWJAukH",
  "key38": "2iSGFVnCw5n3mBk6vPLjh6Tw4yL5fmdbhTVCrkLm8f3BA2boB4VCZq8rck3w2TzZQ614Arjp32Rd7F6KtcpyDsQF",
  "key39": "5aZMUVPgxspfqSmV49iAEJKTimXNxNYKhWzQVoGoXWpaHB9mmVc6iw46UM6WJRWWsLfNxq4HDpehLzDYwoaizcAd"
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
