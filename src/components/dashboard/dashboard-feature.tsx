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
    "5zS5GTuJd7tdwpu2xT6EfkY8ZC8JL4Up7gTJ3mc8qMDxhRMgBiHaeGMDizptLXtJsj7MtpspS6tMakopdn8cnzfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ddZMtYxpmyfkQrawi79Yok2Tr6DtQk4YT37dWm2oB15sgK7Th3hmcVMhkFMt52rYoZLQSU6miEby74K1VVnXAA",
  "key1": "4MN41Jks9okweM8Zv58AYyARyGrtToKS1APhksq1zXhxhGzLbNU2H6UazCcQidXdtMMnVmqCg95CFE9waRNWaPw6",
  "key2": "4u9BYAc1DRC3fWF6opQ4m1LjT7cNndepZNNDSUMw5Zf89YDtXxr7jEBsPAHJYF4ok4cVc5jdi5cZfKLsqjLCVEJ",
  "key3": "4oNrVXu6iiEVKGiMzzbYF1reSNf2FL2GjV2ZqK8YHrJBPtkzaLyz8A6njgPmuYLmmkmssn3VFLyd6KCpV7seAYw4",
  "key4": "2Mqra43zJ9y3BTMsyDSxHjJobaehb4dchTBdyLfajWTKqQ9Qcg8X6sbrUbEzX3KGs1qshnNVmoDXt56UZSKZftSg",
  "key5": "2CkBbbfEjy5x11HMPGTnZbwBxt114tgyaM1gfZQduMCPqHjMNM2ebYosVn65GWqb79dngPSAycpi4pxezbtfx9U8",
  "key6": "3yZRiwP8Htk3MfpvbPH4AtujuDV9v3pFUxKrXgoJgMZ93cnsLenPErQMygGtXih6xWA3V2V8ETvmcZtC876hWqHW",
  "key7": "5ycE2EsxKmKntxsCvYQJS2zN3Jvd7P1DTa8QvLJmBtD6Lv7yvLAnqDhhJcUCE2aHNA3Fha8NcQEoVAj3bxTjzGva",
  "key8": "2qMxwVxb4738XFSiib62TGPjsfQZtUcgMyz4SfWhxRtZQPebxnha2Rr8TVZf4mfAznASxwu1aXapHtUeWiDbVkWW",
  "key9": "3LE1mcxPZbQAfpRPN4YNmHsbrRehTtGvWxWXpghReFZrrAREA9SkL6gYRyv2wppVTnYHC65JDwNVr3Nmeat4SJDj",
  "key10": "3rqogavWgE4YzgMqDhXETrQfGgyYLAN2Zj42EUMk1ai7dJ63tbJWvRSXrqjUL2f1NVWFoMiKnGEjLkBoK2dGNeF9",
  "key11": "2NQzSsBH9U1uViCFre7gTNjjmyfeJ5svFPu7oxTsDE9eVJQnMrMLKReoTqPva4KUqbfF751iUgueSpFd2Y8FY1gi",
  "key12": "5db6pM4KAiiTfF46rvXevgFTLFuE3CtDkPUuBoyuiVFKoj47mN254wiVzL1nu6kGetvW11TE7cxJLGpbWoVyPxqb",
  "key13": "22q2ZjiWN7YB5pndLKJEennr1nXGtFM5gHUR6uzebZwGiXG7HQqk8aFeifhDJTcHnho18kzWzydVaZSFh671xr6N",
  "key14": "5Dn64hRkkUuh166WWaDD2dPxUVZ7AngKsoRWUtcd8WMEM5HW4u3aE8dcvG4jHY7JgTBK7gfsxVstN85TEP5bho8W",
  "key15": "3zHxD7kPpBsGiBEhEXz2At54yjmzA7yM23SzPGFX8WwVbN66XVejE3FxVgoRAxvt8ZtDWbbx7rwLwb9m4M7JAtLK",
  "key16": "3twTktfgnL4sCuCyZSMD1u8yu4PWAnNCpV89fmpCA3zZkhmG9R55zE6MRsBaqW5RKC3paFiFmaK7Enx45T3sjgzr",
  "key17": "4ttJxYsUAEA5rvuGGbhP5eio4NAAB3CQr1t4wFb9oKbdyZmUQYMB5C4dSzYEMbUGuPGzSAj8FvhjcR6CU23wQZ64",
  "key18": "4cycmdhoJCEm41oEpkjR1vtrK89BRxv9KQCUBjJNV3wyq1fHbP32tWL7m34YGe9792SWdfqGQxf4LX6kcohWVo8",
  "key19": "42UPKYh8rYVP6rKyRnp7RG5YuiavoC5HoPFpfWHg3U1FpkvAqhqJ5wriJVx6mFmHDbdSq4MRfbRSjt6Sq3Kg2Juu",
  "key20": "DjU4NMaDyC7WKUyVtbtgBLq8m4RU4QYScd7f9TRA8nidCZSxwJGxb3abdnGAN5fj3KHq4Gg2p4ZchcsZvL4YAFc",
  "key21": "5ATcSr28udpqBNdipUzMb2KLwjXmJd5fvCZyyN6r4pexpUouRytf8pVqju36rri2QvsXzFrwftGZsjnDpRLhS5CE",
  "key22": "cLzvrwkh9QJo4RxDWasV3zZC2Rs1qBWda8nHsu2wLec27n5zMVrcEPoutvUUh8sBzezdedVLB2WXq44ygzGpLZM",
  "key23": "8d7wUFNjQJuXDb1YrhxMJKDgCP28Eqt63BiDDMoCgjNDo1eDgBX4YyRajvQuFz1GrFwi5cY6fivpihHGKz5bewQ",
  "key24": "45VUhY5akkNRzGdUvAqUDMs7BDtgG1HA4Va3pbujgzFpeNFmuJDa3HTSx45pgm9PbnF2FSRsZmvChXFk2tdgsHfv",
  "key25": "KEfXCwK58AFLsyTSiZpPXQGrQcX42rDZDDHWfyDkE9Nij6G1dexoowJyMjZdihGiJFVHsXUPqcuovxmagz7bRZG",
  "key26": "2pvj97UBBTVNeXLcWk6fxa7wR523UYjBTAusEatjYScrx55Xrogh391BE2u2tdsVED3LdaXKvmqkGWBSAJbM4vJ"
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
