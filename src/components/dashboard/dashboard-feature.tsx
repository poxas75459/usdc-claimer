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
    "3QproQ5VNc9XxPgw6Ewf63rgjQQvMYvXmx7JCnXHUDgUVcR3Tw5fDKE9Mwwu3mQX3LFfRZ6xJgJBMQT1CsE8qKo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5czHuH8DbsaX16jG1DEXiG8CfvNdJtRgBmt6oa8yT9Zr7SRNXzKp274LRyCnGxusUGSvLMqkacd7aPBjsFJz5LHr",
  "key1": "3UoN4kj8FG1GMmDhqMELGUZB3soKhLr6B7hNj1MUVzoU7pE7kGEjBknKLUH51ENtDQEs5dNpR2bpXiVjhBLBQ7Rx",
  "key2": "5MT3xWdxFQmnoVt3jPeh57aTsXDKmh9uStUAsZTxorm4ihDqWbjHVm1V4aWfRYfX1caPTPAttu1oe3vHWnqTy1YA",
  "key3": "4YipsTqGjdpuiKAx3a5bkQBN7ZrEJ1dNoZWgQhjEJFpNefCdyrr4H63EB95FYrg78F37zPe28hkt7XEqGdBswr8c",
  "key4": "4DBKHu17uQJrp3yNt75zyztVj5Y1jxR9qMscfLQj2hDHn1pRrux15N5cCm5QXDmjGjzbkaFAbj7AuYf6NpsJwEKw",
  "key5": "44N8oPrQmtUWr5rFDqSPP3PXVyDzrHZcsoAMGad5ktGF6R3a8V5as1Qy1ED4MRkto7iVvQXiFGo4MK5H57ziRs1n",
  "key6": "1nvriWgxN57rUtKYiaaThYp9QJp3DschuECFSHu8jLwQUMERNDJxenseSETR8kXHrSr7hESFv6wKkbF47BVVTYT",
  "key7": "4BtQrxFshHHQsRAkDCLPrbQpLh3hW66XE3FkpJhZniR92KBha3TRa3DqeJjQGb1wKzjQcK4yNgu4GbTjHQ1GtYvv",
  "key8": "2NFAvxWxvwMRWKEaBqqQrRXmRLEa3Vc16vpzXwseJhYJ6KtyqUvYS6HVpecKqQV2DLDZzFaJSmAQPywWUEM7bzQW",
  "key9": "37Poq4Auy8qgdJu67zLJ1tf3JsNPVWTsLxFTdLE4ywiNLuwmyrpyomXUwWs3ydP3e1BxjNJ5Uzt5doTikhL618oH",
  "key10": "28SWrVZdeFRHm7mcEHCwo5Z2nDZNicmcSZHbDtv4oZ5MeTxXPZ8gPac92U1Gs8Bscf49hPhH1FhPtX9T11kS5N3a",
  "key11": "33iu81LGCwLHfczGaRJJKfHsf5YDcBFp3wKnFvB8b7m1pnWddbo51aqG7D794nddrGKMbxFR41gmun3U9w2Bwrq2",
  "key12": "hy2NFLaxTDLQX1eWyvNkx1UssDHJTtKmH8fDcNQvdeHN6LKmnDmYGSVaq9VNrh9npjkTmyWemwfD1eiKLyK74zu",
  "key13": "4sSKdudYuDTqV38M1mmTBaU4N45Ec1oUiuCCpRwsMX2JmNiLufV4QH1QtLDgPF557mwdQ6vEhTKLKUcYqpUts6KZ",
  "key14": "ExZhoRbFmhyCsPXuFKFZQhPo8eJhkykF5tu9Xmn1qCFNhDpBTAd4nGJVdybgNcw556zAeZJgHVVbTbnDMqLZ2f5",
  "key15": "2dyCCwQRbSyhuby8tjDeLHc4vUTqxmNZvmoGceP23V3n4VhPzEmJpZf67zWdcSfsUYHnoUUATpzsQRpi3qj96Yqb",
  "key16": "4GnSqiMgFHP2qBcskEqREF1kCy8AuuxCSoJekPGt7BCBhancbUqJEeFf9EYoMknMtTym7r8Hpt1DaWb4s3Efumxs",
  "key17": "mokEr2UtNjQoF1AK8ieMbY16j7RjHirEEMkBsdb3SVfUe1tFLkQVQ99dqts6GRqoJvkTphdGUzQ32YPJRwV6TXw",
  "key18": "3KbT35acgeVSoyyfthbvEq7HEJ1SN4bXBe3yCiEzihLydCfckDTs8mDCHysoZRQhxF3zsPvNTHnwznCdtf8bsLiH",
  "key19": "4vGTf4sDxF3DeuAUjrGevhjo45VK7gBbnBSFBkHZ2DXjLyTD9Ra8dtLUr8ZEzkNxnQ4iS6TRmbNzMr33RVy8k7Ns",
  "key20": "2VaVYVM3cnuvgqz47eVmmKQpGgVUwWbfi3QpUFyZAVR417GJkUnT69McAL9nUKGiRH5pqsKrfJgATQe35z8idTnF",
  "key21": "sjFsgk7qmYie7FMsr8GwhBSwv7q5spRrtdYkUvyd6D7i6G7fa35rrViWZcNTVq3u3ENtAZvAhXnAwyMYJK61vqb",
  "key22": "2zzxNxh9UD1FqqPjd2Sg5yHWvNfMYgCSEGHqD8nRSnEHceZJoiB3GWNFnmt4gJAzqnzAWnUThHGkGopKLwRByrn2",
  "key23": "4XpSzufEbKr5yZmcPvsS1KoiWfxBy68topEQyn3c9HU2n3DqeRLm1HeVeUa9zDjkTGZztkqDkCzFRS1D2cEsUFMW",
  "key24": "e1hLEijpBirJzKgfJXrwqzwj3sM3ZntYBqVAhjXzaWtdwuZUxHY9mYnCtLhjm5ajWVtfCHcsNJ812qdyxD7dTwK",
  "key25": "34jk7QD5kH9Cv8uABojGtYGnhwsuPm31viiDVwodWGbMFXxJFKFbZ6eKDjJHWsdh9foY7pQ8fw24ZsnQKSoZcGG",
  "key26": "73GALusQrb3kxAWAxcyW2r6gwRi3yE53n9Y8ponf17uq2mL6opq5Rhjqq4cPUKKDFci8y9mCAhYk5hzPukuF5Jg",
  "key27": "mHSVxNhzCwVPTsJJVExA9CjzA1U3gsEfq5K65f2rD3Aaf7xoz4k3o3p2PcD4LiZQckBeZ1aXReuvErE64ihu1YP",
  "key28": "5Js7zYNsMqQUzeSKxCvH7hRTtTnLfRPMcxMiG9vLUM9LpZLfBFqhNzJGXzkbzfNT2LF9huycMjQNR5XG9BAtDn87",
  "key29": "32adaRxVASb4Fbdx3sFomqgC7AWQNNNas3kjrAHnXiA8dJLHFg1XkyDUrHPG4ur6cfZN1Mo7mEs5hQmbpLrgWDMc",
  "key30": "4wTE1hrRpBoL5bLd1ikVALjpemLTmgUA9mZo3C6yz2gepYL8gdvLJ5W8rpChbHr8Qd7FFUehPwKsPM9tYfgexD8g",
  "key31": "26saGL6nMFeX4FCwAXS7JSbQaB83C4qSJnmzSbEeQJBp4WpLLtmJUauAU645HVQHezdhGdi9k2UMXKkSZKaG9q2g",
  "key32": "3tt6wVnGUuQKpXnUeoGuS5EsjNP2ECfdmtvaVBnbXP4cMTsKHZbXPjC2tL4CFmShs3fuHLJXk8dGQqsjBj5Y9sJA",
  "key33": "5gFyyh24U56rac8hy75FchXWZYbanL2zhKTNkNkxNBzmpCLzXSTfRvcKnZBezBrEWPBJ2FwoFCQriMK2evsSJEpG",
  "key34": "Wm4dB4RWKhZFmcn6RcivKTTqzDuWJhSqUdJFFAeYxDK3MfiwizEccbic2FnYuBu8FEKGz4cVMknntbsRm2kuT7E",
  "key35": "RXK3tzzEtRW8ztsnX4ocWWCbrJfgG3M4T8Bm3KZp2YfB3zcTWp8Jdxc9FbxK2FYScdQCtDjFCzvuqZfaBRoMZhG",
  "key36": "dKBQco7Gzb6i7vTG27NQwvS59VErUSVQW74WRYmy1HKXJxyT82ue4ZjfyavMgd81Rf6T2qKm1Npatf8ZFARV35X",
  "key37": "23pn9xcPZLyeKXKoCSLZs4M1A3pRSJmcyBrXAhtLkeRf4Eo7X5eqQU6Uv5XoiV5eZx4buvbhjGmNQYmPrUk2rLs1",
  "key38": "row8TFmzhEkJLVguy7P4cHvdEHtu4zgySoAHhvbMaA2XHd3qknnzGgiRyRkn1AKxdd8o9yvbRAgxyAxarJGUPXV",
  "key39": "5RhCQsEoHzRkRQa7tpzmWPmiAwx1u8TRd2ZYNuMTwBzhJnLSz6BGbasA7FpQ31UEPFkMTgukj7ekyJQqXxTTKaAY"
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
