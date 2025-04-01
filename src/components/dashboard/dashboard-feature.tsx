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
    "4rL5RR9e8btZjEfpneihpHDHvBTNrw1BtvEMCMDAGN2yg6PPyeoUkJyZBJgPKSVkFMT53XnREVmnwVba4PsxqCLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rfit6GifJECqs821n2y9quj4o67kGxMpCCBcMQpf3j3qjs4yJvgBb88d85w5AA1VyoXzZT6uhN8Sqjm55eYEJ7z",
  "key1": "3Pgp9c47FssWsc6BRzLeEAt1G4ovMT3KYzSfLo58FLgCnRnwP8pJ4GF2VRdvPKzKVQaAs583SxCXE7FEFbiXpiBD",
  "key2": "C3X4uB8CW24dMwwmevjkDwETAJYoR8Y7sXiDAC8QKv7P732EjEGFbUCdrFacZyUKGaMr3jRnJ9kN7ESz4jyJJNZ",
  "key3": "5MguhoADjXz15yv8ioxz2TSQn39yYpeDEFxm8CtxjqVwn2ZaUaADCrxtWKYHF9eFxGqca2TbrYzUcjpmyt4kkheS",
  "key4": "3qdcuWELf7MWiHhYbgzQsuXv2fV7bkNHcyWKUy7RV8NdZycocyqJRz1R1YtMJWw2MKWFKpgZ9PVhpDA52jN4bNEz",
  "key5": "5Gh9VwKdLs1SpV1ufxgNn6reiTsSkVjNpwrWY3aCiQJSn4sTJoqL8ogxPbKZjtoZHr8C6vyrCeEQ4Xema8MA6mwb",
  "key6": "56oJHe1jHcetYVt58jZQNVj7M6dtur6VwKGGoZ2ERg49grojSeUxFW4v1wzDtrAsCxMr1P8oxbufsCxgP4kd5z7R",
  "key7": "47ibiBF7uq9sk4QA7DRyPLLyZyDJdMTQButhZ4gSEk2DFBh8MAfCVGQaviKRMyHxjQEbRwoodiJZNbHby52UWF66",
  "key8": "5sM6hWF5ChgzcMqvCp1W8RQZ9UrcLGCY1Js3wub6qZpJxjB24GQ6S34hcyJQb62E2kKkgfixuhHLmzdpMsw8jtLb",
  "key9": "kNczrXMFnzySRrzgD3xhw6v8NxPFao1GBuYGBZ9Mp6PFykNyk6LUToiNBnVqhGaQzfJBiyUCc2ZFi954jeBtGdR",
  "key10": "3JeJHEQEZt5M7NvxnNh66K6ehWCko1WDekDfzDzRRbyDEKdCfFcThwCZh8s6Qn72zFcxSQFfycBXRC2FejAntA94",
  "key11": "5wyPEg9cpot9MiHhSRESx3aTLMZLQP8jC5T8LS26UT18vVcNNVnBzucib8jEsmEonDg9T1jBg6RNnm2A8B3vHp5x",
  "key12": "537AZeNB1msMLr8AURN75CWGSrSwYA2ZsQSzVrY7sTFEmbPJZ2kzDXuVdUMohCLNomhCCSvBDQA7TYoabUaKXAxp",
  "key13": "2CjVUgjMuRbQKoEQxchJTK31uWNPvSoPfXN5JW41DppAPVWzryJmXEAcXoWsRxzq7ezUKsvXf9qYk1PixSTrffWb",
  "key14": "2UfoNh4yXhhTWqvA9dKYGG1GcoQQV6gG8hwYx4B2wH1HLRNEJJKne4NnE2YydWCv1kYsm74YFZSfx9rwGrcHLAyK",
  "key15": "5Z7MWHDb7F3aEzDkgmxwcmZwzYiWdCqn536HqtLNMAbsBD9rpJXZeqnFue9efcJGmcJVRCCANpy7AKgwLwkdXb4Z",
  "key16": "4G2bWfLpVufjdiFJ5ML7UUdCe8vAJ3V6NSxvWZMAG2TTGFuy3nRJmTm9W8Lif3kokyUx9EYCqoBunb9FHmtZHgWH",
  "key17": "4JgVpUL9cQAcxb9HAn3irJiMHUMJznHJoS4R1msbEj46fcdtXzV1S2oaP69GWh49D3T3PrgyA1L98iRMDjLndFjs",
  "key18": "3SBj4sY3ZUEUpXRPwgJ8gyVfz3GgvVmNU6bcGaqBLNS442gMYTmx2eq2GmkJBRbZvew5V853a7BxRUr1LgbKnCtV",
  "key19": "xZqXLfdHZbbT4hEM9nNCvAxNtEsxPbPHb75XULNRXCkYCZ5ThMjq4R3FScY3P8HY7dMGJRDVYRouQWGHRj16ZfZ",
  "key20": "5Zypi2PKHPjdNtao2snFvd5oSXsEyCeX1nYvSxjrdG1VBC2ozYRLGn8ZW9PMgjbroZuGZboXv54CAmwfVquJkF4H",
  "key21": "yG7hWrVTJc2zAAUX1t8hVMg9xdf1vFZt3vAxxCumLnCzhXwwkKE2H2FLR1PWCfxmKzMRfXMbNPqap7segGxs7yg",
  "key22": "5GvvfZJqpvQgqaCeJY5mW4UPe2z6JPW8f6o1Usgy7q7TD3zubcTG6xxJ3iZhm5JfpFcRM2v4NSDf6UcVxGE3kSX",
  "key23": "4eNQb9tPLHxqQA9GQo1AdKrco6korBqrBPo5TSdZLePce3ZqQvz6cXkRRAW474ydZ9Xy4t1WtmQjxKqKFzAdtRm2",
  "key24": "tHVZ3DEundWgCNxHYXPVHj6a3mPcmVZHDe7KM1N2PjW4Mg1aLcBNKUQJHoBK8wJTLS4j4o6QcLEm4T63EmCPT4s",
  "key25": "4NxJ95ygfuuoAXqbEj3HhiTmRJKNrpg3i5XpA7sqfj6wPatGaiBWvGNanv3PqVwdSijG9n3ogMKJpKqTyTpdGxan",
  "key26": "3PRHES5TpABVCFHpPbxRB7fBURFyQwNNfQny4UqVYSLGDZihKNFCF537Sa9J4g7QwcmvAPo5EhMgm1LkMh69fbzv",
  "key27": "2FyThFrQgvQbkZcB5F1rFd2Ac9NQmXXtvSu18HHjrJETmEymyXuRPoCHH4h7mbi1YQ24CkB3KTN6XjfEMeMtJcpi",
  "key28": "4njNNFVTJCCeSds78Aix1XHFmnyF7WhZX8ZhWvvRCi5ZPMZqgHd4fmyvP6sCyFq6r3quNYCmJ5mVMMHhAcjMoqu3",
  "key29": "2rgTj3M1SWYZMvmqxx7JNAixq6GwCi5SU5KGacpC4SKN3Lg4nokDHF8jxw18P6T8JKEGTFzMfputUwdn9tFWvmoB",
  "key30": "dsZrn7rkXSvZ7LZZMe9FUAoouWc1j1gp8BRHnjGGrFUyQQ2Get1Ppa4VrqTZwaPKedyLvQidBGxbKeX3Lec8oqJ",
  "key31": "2T4ekcbf3RFDqNVd1yPSxWNv9bs92tm5rEB8BHq3xUxNkhD5TrwJ72A5YUMLcnay1x13SkzyScaqnVpe98Shr4o6",
  "key32": "4QWxj6EhZdbpaYC8bGjpQzyzpnjG9ZM8do8Kb4s3HZSwCsiFm1C4uxMn9StsUQ1Ao8BcdrKxkpg7Dnc87Krvtbz4",
  "key33": "2koaR2BKV1KoJvzzbVrwJb5Z5UcTiNTYNdvke6w4PJkyujhu1VNSEuM9RDR1P2oqZaxS4wVFsUPBFJZqcx8c9qC",
  "key34": "3JM7Vj2ECgnTMJVMh3dMUmBtJK33yLu5ztLNhjuvRmiwbKMrZ5LhCAE49iB2dZaEZrCn8Se6wGwpHmcdUM4gVEuT",
  "key35": "46ZzRY5eoUJFeQzVhktUn3VZxDcjGbHNN8xjuafZnMgcAByuTUDLay6ayYp5Z8UTirTY3BUpHDirwKBVXoYaXbvJ",
  "key36": "2Ftu7FDiBrWmZ8a7mQVQ8Vr3wNgY3ViJvZTYLGoQdwtrNnCgjxw8u3k1oTP9oZqDMJerA8ap6Mj8Lot1q6qFhmgY",
  "key37": "3DnMKJktEFp5Bc1Kmc56Dycd8JfnYCqiYcFdoek8AXqNhtXE85Ac4HnciqAuVByFjVDJ1SijtT4LufWYxtQuDNi4",
  "key38": "tBQ93cPYCym71iWr6W9t2GpLaWwkxgG2wqTfakvakTCa7g2bdSBmmPzWYF2eGvHH8mHKZZbnZAhPVRKGk7GXk94",
  "key39": "3MEGxYhyqim6YrgaRqb6FFfsjxCqp1C44wyZ5DdNME2s8X6K87iCWU5rQidF5Ybdrde4qya6tdChFijSomXX9u1p",
  "key40": "3gcBVnFumi5FThEJg6gdCY4urweRxE5X38i8EsuQPhf7M7TUUMVzYEcP6LRx6TVwmozNiowDaRQHyPUHNBtotqyQ",
  "key41": "4Ab3SDNGtogaSXPdDaKE3YKFhRUqTw9VZf8pCiPDf8Hx26VEdeckQWYLiH3tR7MvvDYHE9rY6eRtn9yLVkzgSmuf",
  "key42": "1LQYhHC93ADq7n1GzYxLcwJ29xhnF1nQDcpRusv4irbHRqN3TKJBgKug1xxqFWs7QcW7KtAX2yv6TUDXG53piGc",
  "key43": "gw8EYrUsh2a1UMGPxyP5NT5yaipCAAkd2EKzzPkqeqaFQZsgBEK7kC67RMydnrXe7pwCuV87qDqZS5WqybHzqFs",
  "key44": "2unp5zNVNPmo71AJ2P5Xkh4v3pBW22KJpwPGrfUJffiQU2KRrNDga5UaJdxnJ4Pt42fpR7BFq6AYPfhWnP7TeZ1Z",
  "key45": "47r58kEGFnkHogjxr63SfgnEWDAVyJ7gNuyZ7iFDBZTJMARnmYH2e1qMcBfJaYz1JqdYWcYYgwj2Hgfiy95T9KUC",
  "key46": "45F4mAJBxQMKgJHDoSYfzt6GhZoBHFYccbWNDY4CHBQYrPGwxM4x2VfWaoKXvU3pjccsUxGRNCKfyF28ELexrtUh"
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
