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
    "2aSUa2H6iUuLCQBgx9q3ozwXjCWWmBta1MGfhccqWWfCKR87EZdXUJzoXh96rPDiUnhSepq4kwMPgBmKTMYdsBuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hqbAQTYppYwhaU88FxXdRQkPokha8Jc9CqJLCSSmDrd4iAWrPJ8w54evSwnES7S8aRXY3UupeVLsXZ7bhkFhcud",
  "key1": "2Eq9mykFx4wDgaKP8q8bb4Z6Mopk1RLc35S5EaAEMwBhLXU1jYfFBUbFZHS3DFhwNy2KvntUwuH7LLWgu1NUJwb2",
  "key2": "2XRvATG68392kx9zaWbdd4fbGDqcEB7ee2gKBaKMg7BSMFVqdM9AH9yqW7SnPGwP26ZPd8uVQ8V1kUN5PuFsa2yN",
  "key3": "2VEtY3nwBvt4JD4Ady3dFLpZ1YMZpWoxTTp49G4i73VF7YePB3oTsPDkvxmFK3D6A86vi6kJRCoZChS1PyWvFbex",
  "key4": "2LQWWsFKMFAb1ufMm4QbaKS1bVannnsKCC1MJfwbsLp4NtrZ7YVUTyw35k4ETsR1rWeNtkMvGEJm74BtEohZkJLB",
  "key5": "34R5iiBsogWieTcKwxjVhdSidBfteWnrPyFNVXnqdXtcwbpDVRcpjXzwkVg1ZQsisjUJuyyvn687PjAUcSVYts51",
  "key6": "4LJs7tcL7CXbqUrjfpXrGTnCHnMWG1efTz7fgbskodFXB6913WyQigQddFd9qNEUnyjVJtQNNSAgQXaPxCfQYDPN",
  "key7": "4v4BN2RmJ6dDX9GEKM6h1PP9RbKHLRfGU4444cYzEfCbFrZdQ35LjHgyKPCPF32TzaRNoJ8nNYspVqmhq1SE5FS7",
  "key8": "4tHX3zyWpgFHz27gnDoVivnDNxHX3uhQ9h8S1UMG4gHTMtaq7hXgKAdAc3F8WfNSBHG6qgo262yvQ7c4akTE6cfZ",
  "key9": "4nwqB2Ln2hC48WaBWf3zBDLaoAu5MG4QicgGyqQk5tdj97kEUacuxETgNvJzqiw4KSc4baWD7ppV2ETrwjXDhAQ9",
  "key10": "4aPyeEv3fAz31RtqaG9bkSyk69uyT7nD7UGR848WHsdhaQoYiCwSRS8sdDHPaCtHpZdVcA1Bd3nFa57ajwPt7yDM",
  "key11": "4k9n2Zod3Pik67oifeKGoah4GVkzv8hyDrqnubeH84WjyJxvwW12gzJaTyqqduVVZHRo3NXF1ou1sVg2uxhNucFH",
  "key12": "3FQxMHJpTVAMQwBJYbs4xXt3XdYQRLTC1GSiTCe56HnHMCrXqgagqncS8wEj7te1mJEsaVX8pvrniphxpoXN689T",
  "key13": "5RKQuTtnYoVBy8eaHcWkbQrCr1LFK5Eg5YTBGTXxt7fuubL4gDc6z2xjM8uzoe3KPVRLc84CNF6Ax2C5PfznjkAK",
  "key14": "5RXmuDxGhN2hF97uCTKYsQDihiEU3bFbZswX7UX6D4HDxaqeaeUfzp1KaQyHKGZVacwWoCtE1x5TfpBBxdVnRW9A",
  "key15": "4u8qEoTqnL8LsVTBGgXJYVHdd41TKyGLdBFMDCS5XycUNVhhsuAjiXFZx8MQaEdknjVJxiN5qPha6mYzsxaAgync",
  "key16": "47if9vGHsucCtNXRqRSPyzTcJYtL5aWVtoJiXqw35VHyRLGwb7hYLjkZZ3yxkAZuAwefyZGtdmM2sm71DLYav49Q",
  "key17": "4YpsS2NZFs7xwEyzioUFa4yj6zzs8xqhYnx9YtARfjvscSMoyDA864RcZtCRQXGAryMs2ChYXwTa31zVtqkrnn9D",
  "key18": "4kaGMMMoPjGcX7EQSPw3UhwgLsQY1NU7zEQur1KXtGjXQHsLeMbMEyJ4PzcPPdATzHnpmt5subRrtnHGBhL8cRhK",
  "key19": "3fJScULur3pnxxdoAPStczbVApgcEN7aiu4BbuAVNS7Vhx3JwK9V1hYthSW2PxDx8Am4zXmka4Mqq6EzakA2zqLr",
  "key20": "9dWRU9Hngeqv19Wz1jRW6b91XjfyeyKVmL7kpfMGHXmqVsf6L1p9DgvjnFCyTBFKY3gjdVjgnxzvLnvzDBafhTg",
  "key21": "5tWx2RgwL3wCiV8eY4CdHkWs8m4jek7m7Nsp8RjgoEbZC3gkDNA7BQLSBRaeJ8GdNKaWYoYTP6Cw5bYDb3Gkci3U",
  "key22": "3VWaU9CAA1pyJVqNCJRJKmckd3GCnvqPfWnkbjadiNTR4REbhehWYRdFWXfMPwzuAhEMXztNQj3UaboFfMCsAf1r",
  "key23": "8L97Q9qYBLGyVM5JwWetcYaHsvQpSXcptEwaxuzMFvjAEm8iaRFR8zdB2t71TBQnoCzK6AM8NSFfaKoRGNM14ji",
  "key24": "67Ae58yQEjzPmFroEwPZ1YPhV9Hwwb3b3AYqLPNFVDTKsWntqx5DHU7aHdhkdr9KQvgapcLFEDtuRoM8ezZ9vbqg",
  "key25": "2ducLYm7ojiVJK7DhsMDchnWeP7fVMNYCbtCiEPj22E981qWGZ4gbA1JptDX5g9SzBKHxc41QqanfwAhjUA1J9AH",
  "key26": "CeRGVXcmP4MvrxTjSJuWSJU7iMqYcGVASPbCQGfE3SqnbCs2KShY5prgT7sWV8XUcAJwivihxFRkcARWAHgNq65",
  "key27": "D3D77YeCJEG5GJ1tBxzYy48Qo3XgZYvh9RyPwu4zjLufLLPPag5XJeSE4CxaTS8ejPLkGWgiAMiMzxEF6R395Di",
  "key28": "2JVV1s3cXbafhXz3yvjbh8JfADrjxyDpAHdydMNcaq7U4uqVRSvLziUKYo4zVrVEE3V8oe74Bup5Zk7YaKu5uhAC",
  "key29": "cUR24pZZY6Y3uvkk7rR8SE3dwEHXUAHqkvmke57tppShZN4b37tjkxUTVZEwp1AmErwPQ2y6F3Mf1tGffQbw53T",
  "key30": "3TSzdJUapDzsZBqxyHVhm1BttdB9DZhM3t4bSxGnodSn81z9twCErEK3TSDnEUm6cGZ27sQw8oXNeB3GBrNzBJuR",
  "key31": "2qZZxJ7BVXEN68DrVCMtbXDLkAeE3UKhKX4UbEpxL4AxKdSR9d55WoXZTytrw6Gk1VHjgBLsvDu5iD1k5y6WNZ8o",
  "key32": "4gwsCv2dfMTh5xFyrxcnLJC4KDXFYV1TeHhe1CPeq6AtEZrMpgWSAswcyPrfaHKi4BoEib5ewy3FRjuDg7yeuxdt",
  "key33": "nf2BaY3DE2EGsQFa5bWp8iXDpJBevgc42ybScU63CW5y8NjECN42vHk4Ag84QbSMxS1AeNixsA5oDqX7qMepoG3",
  "key34": "4HvSzKjjKjkkAvtZp9DvtL25dePfK2RuAUwRvvAw2ukvfDRpbx1fquJ4d74N864o1omHTrRYq4uhENM2fSWeyVT4",
  "key35": "3Woz2gMg1KAdDyFzMoEx98kxLGRdWc7rTkW6vAVnHm5JwXsNT9GRtuwk2nL6nBVPZ72FBPwuwBNEVxNj8qsgqRrv",
  "key36": "29TfwXrWYp87ZyhiAEPb22VGRMV5jF5nvJBfLbzTjsAqcXHQaMXcHqfxdadXUshQhZS171EGHAi9nfAF9XXWjsEz",
  "key37": "5JHG3r7Udw1BHpZhU6DbFjXeDLNtvBoE86abrXB6Qk8iWeCcCMRWgyUsKEUnSu9fQFpSJ3pkdnQ6VdgqjhK9ZEUD",
  "key38": "2bBBVgs7mjbK64Cm7RWXCRDaXe21srkVYh3QQrdfecCT1Guwun7KsT7k849FGzeXNb2btpeRKciC8YCwkENC6afW",
  "key39": "5XPwFQdEqZb7E7n6BVAePgKv6kMNgCvNsE1Suur4NwjvgMd56Eh31GkrrxQNYZZPuB3gw6GGachHtRitxXpiy9qX",
  "key40": "3zgSztM3rYxcgTxSPLqoE3eyDkR3gpmeoUrscsCLUx57ybk8iRAicAg5xLcGZvURVNDyXUsSiyM5vz39UwgGZeSj",
  "key41": "4VtHmbN5GVn64zb4gpiN23Ph5YTKw4EY9djYXNczQhMWws9oKJBSHubMUjvMPeG7cJdZ4cxMsEe5VqbBuu4GukVB",
  "key42": "383BbDZdhcotu9KukGEqmpwNGA8Nhgr6ohLU2V5ShfFMov6aKR7DCkxhsJZ2fU3i1dTheUebY1hk7heL5an8SQdF",
  "key43": "PMRqpRomkyKGPCEfqEsM5YCvrNyNUtC34qbmp7T3MqR9bs9V8CTKMoXYfJdwvUBmAejeMMzHoXknkfTDsTy2dES",
  "key44": "3bfC3USAgXgxuXKMvbfVn7WMEJAdCFZwXpWyrgSktePuD35bNSPYRcsCyyhiyy68edRWSqVLXyz3ZuyRdL6cD8BR"
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
