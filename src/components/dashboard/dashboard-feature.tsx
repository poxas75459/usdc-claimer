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
    "2np6CL4MiRd5YLBikcHQTERjmzYVpgiicqzPYggoZ9YSrdwHwt9FhoN44BUhU4UCLpBxg4HiaDJRNcC23PkiAoC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ba5pNt97TfbXYvaAex3VZJkJK9fpt3kipFPCVBJcAve5SMK34DY4GiSQnXAjfg5biNRCERtZoh2oXrPH2WwwHtw",
  "key1": "2cyFQ3qXr6r1GMTbbUYvwGhbBrJWzTJgKAK4c7YdE2LgXqTZkwACTMLtc1SiCEjiUZjmfDufwVuJBnHj57jStt3H",
  "key2": "3PuSp2KQ3YNkwTnqpaC11Sy5Pq35qdYVfJDAWifebYFWyWcH4tvTHdaZbBJZBDcWuUWY4bmfYeB5EF2TjP6XSwts",
  "key3": "3JaMwonWA9XEui987VHwaSLUMzqJbPFNrFzUPCJuqjGjZQyYFGNsXAyAcysiHJmww1bHg3wnwuX3KUQHd16ZMBHF",
  "key4": "35AiBitd6w7h2jikMkFPhe3xyJZ84rRZjDp9ab8W5FVuqgF5a1KfmTqaZ9jiVS8FoT154wPXLpebV5WrgAb1stYh",
  "key5": "3X8A8CedF8yRr27iC8XhTKkrY7Tk9yTZgvueijutEfBaoDQkN7sotqaVuYoD3cJyqtqQ4Ndm5pcZBfrpcBbusx2F",
  "key6": "2BsnJkHoMsMSxBKUpE6KJf5A1E6qdUK64bav1UtqyTRpRnCRm6dFDDiYMKX8uSqkL2x3GquLFkNmx2tucFEty2eS",
  "key7": "4GZKg2QySNQbjg3x6CHC77LHL14vksaVH2MDyp24eNu1QMvhqKLTsGDoXtyc9GSJ8nZRyiEpw21bdJmaaRPiM7mn",
  "key8": "2F9NUVq2s9m7joLuZnGuUw8XVRQgnjvgvLdTKLHbyBh98gTXnRR4LxGwCX8xSshoMsFCdkGi1Twn7GvQvs1nwbem",
  "key9": "5bVehcRkDFhYo2xwp2KFhdTHe6nKbLLquZ1ZhCRdxqoqsecKAw6CrASvSNDVAWk9uUVw3sSH9KcBy1C3tXwBGcqT",
  "key10": "4u3ir7tS1WJVGvzQ8r3VjKa22EGiizh2WkCDQDMNJvdx4D4q379nWXtMfVarmptPtQinxW29FHk1JwCJ2ZHobUMe",
  "key11": "2UrWnBmLGvHNJdxrb5JbPXLGdcPZ3K7kBE9xzC259tWoF36cWTJf4o6v2hw9R3UrhvGQCr8TL9Z1gCP7thfvmKwH",
  "key12": "4heptb7qzpLsBiDWgC3uJrsaAFdcubeLgjcMN4mA5CEwkrGHJP1ZZkNwkq8sVJSb3FD5erBisvbkx4ik2cNL97RM",
  "key13": "5WDwM4MsjZcoNzJPbLXHxajJoqyosTx7KV13fDUsiLqHzHcv8w8UgwrpNtEqS9kVq3vr5qHSrg6FJqWnmjaFpyD2",
  "key14": "5R1yVgsyoUojE9VqStDxvanXq4dSXJb8e6ggZxgVjFG9qspWTS1o3cHLznegbgKb7BK5GV1DWTEGfWYJUaBimtAE",
  "key15": "243niZrgpsp7YUZ2gW8QuigcwZFbxguJ7c4GESgzWxKHA2Qu3o74Ypf5f9LDiBcreGhGuvN9uyUULFtdqXVvNB9u",
  "key16": "3GBSUX4mJrxHcDLZ2xdFxVxw8hREsRmzn8QpanbvPknpwkQgJ9dJvuxiDB4i6swX2paCdmPYLGxEXQsB43Kvh2JU",
  "key17": "RDxg5qzkQhLcyKH8e3ki7JmsjYGsyxcLQSmEDbARwGAva72z8GUMn5NPg8E8X15fxCcJBCBd2uuaJUrqb3FWqN3",
  "key18": "HHxd7C6nxTuofVpujoVM4NMmZEU97mtaLu5ASkSqrZsUd4QiQGRgdpaDNUwnaXwK1VcsfJVgZRmdYrVDmyXsUjH",
  "key19": "2NSLHGdoFXDW6exZRUpoMfeHjU7MoUbsPu376NCQpGpmnJtB2u6FPap94MVjteyVxvLfba822nbML2mTp6m7m9M6",
  "key20": "2sZgNKuYSGiH6q45CWoLHzU3YWgLYDf113pyrLP98gunjf5caVL23EZoHmkLifdN2Ss9XkrPLXDqN4KqnVrB4G1q",
  "key21": "4prgf2EnSU36v2GPK8KFoYrteVA2TMsJWtYsQFbRAGbDkKd9p84gRcfrcUEHkYz9E88QhGLYx2jLzHDCgJmAgYfe",
  "key22": "3YRiYHTRfTYHm71HdQeW7tZCiTj59LtvHqyVitf529pCnXbgtd8ELkQbRzDFpsCS9CcbA1AJVYp3qAM698jYKsVd",
  "key23": "2V46h2CEByEfqNNTRSGpG2AiCkHx3D8fuEa5WN8nwn5rUxaAZzqhyar5qeJijck4jBYf4GcoSnPLHtejec5ytEAT",
  "key24": "4TApMbHXdBSqkoyaEwzvd9ee91nFphwH6nE3TxwuqWtkvxaYMyK7bYekkffQZQCV2eQeM6E1WSbLAoGuK4MBkEop",
  "key25": "2UtBrtysKcYw2eqbALucqf8cEWuwTQBKYKJtcVbbeijQ15YxkWLv9gsV8sAdZAkUxCtDCxkxhgQ85FuiaRLwxdEL",
  "key26": "5RGTyT5JtPhiGYMWtbdNYMaufNa9bd4PvWcrDJb2jnAMTyz13gHXUqmE9aBLzA11m5reFfJWRSj76YEtLAdrhN7o",
  "key27": "4x5CkBPuDUVYGXmKVZ9eY1DEigsizR93LsYCjAzJQSygn35rLVLyi7mQsGVPze8ep4uqcjTWELmKYhUNVKoE5TLp",
  "key28": "5DiMCfueD9bygzrJrBiwnJzzT41U8F45jYKNqvpepTUY4HEGLYYD4HmSdqeuj73g2Xqfy4jaoHEh4xQn4y7B3qP",
  "key29": "ZFjTALEjFo989sGUWS9e4eCNQ7DvcqCaDVnCzMxmXW4bjbpBKRd34dUzX7T74kqvLtKcsFqv5KLJe79UEpygrgs",
  "key30": "4afqALubyHjFnKR6NuifzZy7cEoqUEv4Pr9Aq2gEm53863aW7DXoSzP4NJQhStGkCo3J4s3DExP8ycRW1J9978sF",
  "key31": "4KV5mfVHktsTsd4wEs5RYTgEktvXXkDbUd8H9SPqyPdLt5nuzEYei3LTvbxYGkYLM8yZPqnbwjtPVhV9zEHmPxG2",
  "key32": "3Zt44N3RFMwy7wDmaTNZFedY5DdjEy46pY2B3VT4pwAqxGSofs5qfCUiu9y16AMKREUASQEajs2hzDKjV5NFMn5C",
  "key33": "3yoc85U1miy9WjoPzBAKhVmSVJEaH8bmxQPaBoFnuepc48rE8QQuz9yY5numY7fp4tcMVrBCPZayRF2arczg6mb3",
  "key34": "3h63ao6ecKLrPSxjdu7138XTw388T1YXg89f5T3GW8iWpoZ7W7Ph8ZoJ2yPhsG58jnJx3pVBnVbZemHomNwiFBk",
  "key35": "DRbGuPGPHZo3FK1QrX24h4zfCtShEuDaLTPp9obJoDytJtewNN1uSC8z7BPndHnVutzkiEuSqeaZ7XxYBzS2YnZ",
  "key36": "b2d5ABcghiye9uuBZ5xRde7xji1GiRDEKoCqeGJGx1fBBbw2wtGTH7x4V1PvSAxDtUn1CqpSHtMqqNm1tsoFgoe",
  "key37": "28azPZvwwj96vWj1GSfiD61kzM4vvbdzJB4qWC3sUcgiG2i9wQdhVmbnAbwckGiKtnHkcaygsWpAQshZoKgStg4V",
  "key38": "5GrKVzqaup26WmUa1tA4yzibihPbhKam7EWacAtuJZz1FFTEKsDteFrik76ffTNea9UxTTk8ZHKsomgo9W5LWfSi",
  "key39": "5hjq4U1pqHFJrFwEiKrJ8zvFcGZNXwTCXQjncPAo1fUDR3fFmFaKeiZEAbqDrvgA65TF46vaJLhHapJcxXUGLTxx",
  "key40": "3t4bpjLAYrji7zME7nitbA8MDn3QFfpJx7zYoHinUivVgMUjamydTGhSAbWPxpvFCgGU95xPuBrh7UcT7UpumMke",
  "key41": "48XKa7p8TeyjqHDBn6dR6HUm2U3BLwcsGdy6qfSSzBNCqSx1wG87XYfWPVpg92WGLkHFXVi9BGcQV8rgJHgZ9Gx5",
  "key42": "3EM1Nm1cSCJ4ovvKX8vQbvGDWefJtMDe15HpL2j7KW8bPaT3U2EKvtph71LYSJwsxSkgpZeVz976XAMCULVsEtc8",
  "key43": "5uMhKujM6FbUikn8Ytx8gtzjnAu3DmxsjzSkfVPG5xoN3ez55vJMyKKmzvNDDzg8G7YxQvW3vYJqPt7T9PxDM51m",
  "key44": "4XESMCp7m5KCtuyeKEFLhh8C3VBozuwJEtvNwEsLhbS8PgXaa9prni9AkPFSThxY5ZnKjjac3RhyWxx4JAZttQSm",
  "key45": "tLLhf5ymuf1sm9CtY4XLqWuabfPMmAXDtzMPKLAEWLSFnVnywD9JYqok4cnpARJ399tsVyibu4t5miK5WUBSEHJ",
  "key46": "5ek1oEytRc2stvK3fEycBdrpbrUiJT3q362PM7biPbFpqk6hmHcKyHBvoTjHgGBpXyZTKP7hCK33YG2DjJpfAZ6b",
  "key47": "3xmHy7prqdEqZmMyXn66CrvAmKSitoab175G2ihQwdo3An8fFtxw8HsAefKiyUY5PkSRH9t8H2NK7PuNgXAuiv9Z"
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
