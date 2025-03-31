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
    "4kdxoa9b4amw1BdBku1C14dDv3zsgRRn5e9f51panYJbqrW8FviMyBRMPi9v5pn2ZNhon5GFSRoMivf84uvsh7wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CKpYYnSyh7WHMSkvZKgKXeH9wdiZndaz26ddKrAo2FdnkUwpp6ES4UWdyvfr2VRbs2e8tVgaFGwFfekGQt5LKD2",
  "key1": "jiB9o3ndc3aaKGzQusyYcvgVddVhKFdLiYB79dhrA9BMCVLtcSvnvkw9rmX7jwXgPdJP5JnoTZQ8FKxFhZx9ZvY",
  "key2": "35azxvPcCsQCmn8EZnC6JPPRkiegXWvmHKSaAbWLJNL6PZ8N9psVsXkvmCHGTeWAbnUC8i7e3qUpGxheExKUws5F",
  "key3": "4MkBdxriyRTf36crMgWWrMuDb4EZeodjShaJDeXKVS6831hL2PVDSab63KbiqJEewtArzVJj5NvmVGGmKUCFdnaF",
  "key4": "3KSjRPvs8dU12ZUd8bJkVSXkVEoW4AKiefcjYYTJzR16wDjNTBk1RiuCTu6zAH24kPKFnXVTHA8dXUQiJTBR13wA",
  "key5": "4quEeVmuL2oPPKkTzKdJnJt7sUEFcVWBiqmjEXw7SyfXqm2PJh3cPeCqkiqPRWNTuuLduYmZ8inft9q9DHNyfy8X",
  "key6": "551RSWbKCeAbQS4DCHiRWHNxmKGVeL2zxLym2ZaZPfuuhXr9zWiYJ6GH9ctQJqCdK2fr5NnpkSDh68uTuWVsURAy",
  "key7": "2Nan1b1wMUQLkVR4MJKT5wWf652tSSPCiMnLL5Z4FG69MkCuFJEwZfEMmyk5t7rSxC3DtHdZRgMwN5dqAU78dTr7",
  "key8": "5XniF9vFniSMcFaB89yF7CknBLbajLtYWaAfszKNHgbC7NXG1XUYSzfJ1kzWCAuBYyttXkpUhoHnFrbzzovsPqAe",
  "key9": "2DyV1KHzpgXbqg3obLmcJ1A5GLSW9rZAmL3Eg1vHvr9sKLGr173JV8vpzzHaXhuZ1Gu9ud2p5h4V8YYz3cPPbQ8Q",
  "key10": "7bRkoT6fF5NxuB3iDDKcKMqdeXApdUS8XXNv1LWcbhGypQJdwqWm8XbBqXqq1mfoL7oygfpKLwez6C64iztUo2Z",
  "key11": "YJRdoE6NrHV8fRsWaND8dLGuaBBPKkJJD2Mam3SzdJsLw5ZkGC743rSPig8n4tpoVf1C1mowrzTSeRmW9Zt9YEP",
  "key12": "5Ap9xTdCuNFvyQR7WjFZU7pAUCruFT1B72mNHRK7dcNKMoe2TgM58icdyAHSS9GVDmscTdGejawwc6gRjFqyAA5f",
  "key13": "r4L5kstKH76HnbEnY2rP88xJKqLxFSdbZjBda52pYkx1NbRfrY7KqMqrjcCLBVo6fLbTfLSbQdmAm2smMw6ivsY",
  "key14": "5DC7aiXBf7K6uorcwLRVGdNvVTJ7uT1D8KKqcgybjsHJg8NFQKrNg4GdDukRaucnsEbMRk5DpRLDhVMJ9bBdsjov",
  "key15": "A5LTdvycBgGpCnjJWnGSYTyh6wPHLp6u2RWsM2fwxoY6AmNH41jwyaJHxzNeFfQvZid1ZmUbTHNUx1Waf1PLyAr",
  "key16": "2ttxB8iL7d2hYwp3DufZQNjVr4NwM945S1rcobsUbWySNDbnfMa7gkE2C8gEmJCHLPg14Vii8CQXGgAfTL5EMzef",
  "key17": "VD2n7iNnzuzWA7Ag6TSrA6GYnesXPwEeUTNB44h2MccBo2mq3iRXzQgmMauUBS9NwRBRXPRkQQ5EhiSRBvwshhg",
  "key18": "HRL2FRYVJpekNpoeR6KggZX9hxsdUBikkFuyXtHQway1rdNuimAnKGrFH6jbkrpf8z88X3v1UV988YriwDWoxzR",
  "key19": "273QHnnNXNcwzQC732hHvddQAs8VDMqQY4Y1RqkEDXh3NA1yQzd77crhAJ1nxyJKnphuEZbDPMk1mRAMKynheczT",
  "key20": "5ymepVyjtZhm27CK9BU6tHQx8SgLpUkQzXDS8NuDv1PGSjEaTMUf7aak4oAUkX1V3GJQ5HEZJ139ieZJSgtmKNqw",
  "key21": "5bXwsTtXxx3EcCGMLGBwy9bVrrKbyYSgzrH4XRfSaszagjpg8oa2sUd9AHKbW3jAe532Mnbgdh2jivXPZ46h9zLY",
  "key22": "2N9S5eSffgp444LzkLMjdAAFoUn31FtzEbF5q6ViyYYUopSduQJPVNkTfbn2GHo2DtzvGUnyxQ51Au3cAra51LPr",
  "key23": "2TBdGT6feQCcJDhCPct7jnXx6gA2i4PQbo4k1SJQRqiudAK1U4rRUTXN2MjwGFnWWJecksxobKzFBZkSfFmWsR6F",
  "key24": "2R7Q59KTnxBAMAH7JkU1SBFhywQnvg1AkVpgFjkxV5JP95Uj2o2xZbh5tBGivr9fVdcHPbkxjN5Ps6aPeHuccC6f",
  "key25": "4FvQ2zBBLCtH74f8e8BWvhhUsTYmsrXw2qAGiUvoSHdpZejMuWE82XXBiTbxkmbyaspjZowTs5NNGrwHNbfQy99g",
  "key26": "55uBLJxbghPCzsDfLnpHDCs6uN44QYTS2dPrgKsfBrV9Vsax1R2WHswFr7PoGdWiXJVv33yhg7feuBuFkwBt6udA",
  "key27": "2N2t7hdE9xeXXZR6jpNiJ1ifNtitnwb1vvECEhfiGvAS1iXfHQ9HLWKdSFgGuGG3nbQ6JUxN95HA86y2T1bpvBWx",
  "key28": "4ZyahzWT2sX6NkzT3WCsgTd1wL1hrTBu2Mk3Z6HQuegMeoTQSL4XNk99uq2k3KK8LwV45guz6YLwW8qXvPVMerZS",
  "key29": "QbWNTbobEDmrJVJyXuMVWdPVeUGmGhBUeBSka9x6EcvExfPBN3uDY2oymNxiFKFah3U9JHsHXRK5kqPCW3YZLnF",
  "key30": "2gGVz8dnamt79NB2nUm1YasnFg1zHaK2sQNitX7kVzsGHaKVundrKA8m5yxBLfUr5hGSgfNQnmeD7v33vsvz9mXg",
  "key31": "5DA1Wbrr2mPqcViuGNZaaagRRAYL4MTPWNQrZstzmvP7n9xNBFHLvAM5d1DjKtAyy2idTAsG1EAAYANpfMzeTkF5",
  "key32": "3uUev8NhYCmBPvs2q2W4B5aVRqUP5EdvLdME9jBTwj5cdK37gLqobxfeCewVAKE89qxUk1oTH5bYk3wangQ6N76Z",
  "key33": "5myCXYc3D119d9jGbucDKoaNisn7MeTE5tSjULsNN3Ex7K4DuwGfqve7SiaCQpaQV4rrNw8Htoh595uBv32DxoBQ",
  "key34": "5DbnpU3GFqD6Gc2fm2hUEktPp7LwXntwpe6nw6wx5RVDWPkRVaY5SbvMCzLui1dut6HMnaQF5x7pEcA9335M42Gb"
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
