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
    "51BqjssKgcUARreXFGhqzeuXTVdPApABkU452ZJqgF1AGpwxAhjk17DXJonrvj5wZxzZ6jw1UcSALawNYYrY6Vnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qXhiSojJhH2oBvHHkKVWZkgdbX5ovYQDM8NZk37W4QhXPbDZE8FaqLU3Afxyjmi7eVgEeJdtE7nW3CoPG4HDshU",
  "key1": "cdvmCW8TmboWoKDxAv53ezFneQzU3qDa1ukbhmwUeRicipGMN7EiZdcCjod8ag85rzc74QVZcf9QH2Ug63FMJsL",
  "key2": "MpPT78qHh4S2QnmfMheHHqfH9tq9mR2cNQC5t3yec8Wo8NfkLXjjPC2wCidN3Rx89ZY2N8zNruPFv9wDZF96iuf",
  "key3": "51W1hT5vVr5uS5WYGGTtdp8LqqZFzmGQewLSJ95swUizGWceQg3g826TFk9L2uBpAkgndnnZwBarR5r2ZfeLDuE",
  "key4": "4zNdwaqw6EdZ7wAf3zajfcRznZnfK1SWJYez5iYWzB3SXk4p4xH7DnSzCpRG17L22B238xE17rFQc7fUfK6gMY34",
  "key5": "3JGA4B9bwvrHQpZcjbZhSoJxijLawJnm6wrBAjbGuE5bDXYfxJ4MZb1VBbEHk2ZDe8DKFEajEQJqN8QFp4RSPWwx",
  "key6": "2dJHW8iJoTQpf23cr6m4WXhMoJu9uaA255NkYXCZyv3kHDhCCCim24EESBNofPoAwLMBnrRdKxUeVXRTqEQ7KRYH",
  "key7": "3MG5tDuML96N1Uk45JqRVdX1NMDCgE64saHK8SfVXS43j5Cp6o5ZV4ZMUmotVoi739yAFWSuVtYuaDx1kwe57v3u",
  "key8": "SdMQg9Bhfzvs1HanWtcrwYh7S8XieskEm45kkwvpFPFYP9rMiDdRDffL3gqFd7WriygNzXACNkPoErAzqMLUPZ7",
  "key9": "3sFuUiU6XLxpFZy3xAkQ7V2qRqq51pNmDgGfsrYmBJA1JavnCASS1tQBY7cYY6RGSHmQ7GEt1AKr6gjDwo1CKzRz",
  "key10": "4Gji2p7aYfAwaYPKLeWheLQVsiZF6M54TMKS254f3LHGymaLC7wjFx3ntcSMJio5AY3einzN54vdJ2zBg7MR7oyP",
  "key11": "SEUt3QAVvio1BFqp9LENWgAuM7X6kJ4qQB8wCMq2tYANELTLnMy2QMdBwHD1tAbrviZBTSfDokBx58HiisxeGix",
  "key12": "eBGLCNTEogvSD6jx5Uirx1SsSxmEyYf7AoatsEBSy4XeoE2XUezEZYYHVRinDiMhhCZdcsKWKGR8CiTQ4iUG2PF",
  "key13": "BRrgE56KEcxVKj7ggD3x5oFNrc8mo57uKrstirVgtVRK4Tn2mAkLYAEbHV1d4eR2sX5X5kb6FvZ2N9qoBWPy5YZ",
  "key14": "2bh8Q3NLofiDnDaCRd1eH7NmdLY25pNM1zfEkFCwW6RC567NXNEvFv9KrsRUMgUVwRDa8JEUbFSwLdcKiGi9VjE9",
  "key15": "2N6KbnnANVZg47KmfqqtSzCEw3zbhj6RgBSGayEpw97twoWzjPB56DvQcY4JtBjdTCpUd2HcnPMohu764nkNCg7d",
  "key16": "3Q8bSurABLFnahL1YHj9NYcjxwUxMkevzLvABrtRGqNjfbazgksCagEy7wM4YT12CRQLdKmC6MVcRFsQ819DW8Ct",
  "key17": "4gRkWqUXh6SmU65RypUHYHCRr3VVk21nLnJvbvfVNtmm2QzZ3wUxBmAaFyKnrsRH3gAkc5Q37DiHFahzdSD2dAxy",
  "key18": "2Hx36GhGTZVbsfhRbt1c1sYK8jxdEBzP2ML5bmTocMMVY1LjAASrRthpu4PjDXKCMjNtSfnSgywugULwwrnF6t56",
  "key19": "2BXWG7hJQSCUgAP2VZhfHAKaSwtBiUSJ1R6Va4CPsmmnm6vATj3gwCozERCwb1vTUKhwsue43CUmBTRgjCtN44Mc",
  "key20": "khaC14d2q7FSJBebgVphQjweoqCngxokRQVraCCGNjxF3rdVXn1RQmo93rmpYgzGBHu3UqAXL2R2vh6hdLjyKkf",
  "key21": "3xCpQJStvcwNf3JAgwVUBdxKwTHNAohofMXHP8oP8kkhgbdx2iPRf9bdgLiWwPda9Hrwddc79vEZ7WhqDYsr9Xkz",
  "key22": "427mXC4B8oba1fbZD2fS6GWM76yNjS3SbG45wTPBkkhGaH1ALgV1PwsN4UBzpZJsQ8afpHMEK88t4vmR5ZCHnYvz",
  "key23": "2Qoxq25RapmWqW4xR5C9SiSkNX3R8marTeKMC9ntFWL9gRGMa4Qm35GRhkLHC4cLpBTj36mz8cMQiCjA1WejBA9Y",
  "key24": "4LEbfG95oTiFYWoCiVr3HyUBDkZWyuhXfiymjm1aeeHkhVi3Y86HoZWgWcnHp1zXUuv96SGWiBszwoWMMg7XEPPE",
  "key25": "3cvK2pMaJLhZ1XUHHQ4J8M1BF5Npe8tkxQtZjXjyA336jLjrWNhMhECNSkYyoZVys7mLMH4fSSHiSFDWuCiHmTeK",
  "key26": "2Mga9FW2WS5UZqy6uHtwzLUXeXjofwdSKeYsGTUPu2pDymoRxijDd55WE9HmpC4TqCQFa4uK27UgDrwo8F4LxQ2C",
  "key27": "2MQD6ToJnUTBBkoKnVVcYjv9ggm49GiUsUVY4BxHw2m7Sx1KGNkdgvHhAz3i9oFAaTUfsyEJQn2DtvjhFFUrJgDZ",
  "key28": "5pUZLKX5vWuSE9p9GXCvsRCAiuRFKv16uh7Kx3i7G4uNDjnR7rwHVZuFayan1up5wLvsDJrYBZSycrfUru5D7iay",
  "key29": "3FBUkEpHUB1FLjMn2TfNNrJX8sp8Zb1ZogVSccFgZTWbLMtX47uhFJuKpNL7mjTL9G5kjBhuQ3xwTD94Kgv2yYZu",
  "key30": "4b1EEReXmbHTU3gHRc92UYicfNMvnnyAF8URrx2fNiGmN2DV8FiAxRELZ9V9cYpgLNU1xrJQp3qGdpXvm12pbKqY",
  "key31": "2BZze9PcWvoCrykTNhS2Fp7D7BX1V1hzAiP7pHkqt85aZbaP1CTTzEeC26Bpu6Sw9JdLYsgzf4DVNzTTUij3EJyt",
  "key32": "3xKSdiJjX7b6WodMA7ATbBnkBUFTbAYJeVUCn6iMiAJh7DRDpAxr9HgkdnpRbfzp5Y4b8Wa1gz8SgQGdVWn73jbQ",
  "key33": "3ew4M35EStqiCW6aQBQ2NP1S87xo8LwbJoRHEy7PC4TMqu6toH3fYoXMhsXMHLLGh3GeqPkKAK4u1QfthJms9R7c",
  "key34": "33N6ehL3r4arvr8g6K7rm62NsDrAwrPrkTu8vZ7XspN7QNbDg5YtPiU4ZTG4LixSe1eEfrH2Z2m2cp1p1Q3ZJKu8",
  "key35": "2SJN9qb9ZvwvhE19ztv6SqGcca187dCnCviv5yDsUq18snYw4Asc51cJaLnVFohsec7NvMRGMSVwFnqeCfQCNywB",
  "key36": "3uecFPUFA2EcUw9kjCJL394EtwPigx6KQcg833DiaGB3PBYMHPgFpXuRi2yEH8A4UbffXaEpddumXMN68KCpksDT",
  "key37": "3PAdkKTPibmUyxUBhV4LfWE5Y1A3xXwiUtu6fX7uFeByR9X6cXbVTEfUaLHyKA3QzkSkqzoNf3WZs5jBR8sdNwUZ",
  "key38": "3ZEF7bxzuYMfy9c5NSo8QFd9diHDc8Ee7nDEda4sW6U7epNdaebbpS6iPobGJ7y5nRG9iRYhNWdzsX3Lhb2A2eK9",
  "key39": "5hik1aso4SyhSCByErFb9VrhZFQ9BwLHstP53vEDk5L1E8J2aARczKrZDCwZsL2QA9cBgy3y2pYmAG53p5JdG4Aa",
  "key40": "4EZHPpW34tKa1saSrQgaoUsj1eNmon8LhwSPWVD6Umi23LwHGoru9xnwvGrpai9bx1gDsRFg1FX4rFTyQ17c1ohC",
  "key41": "2CL4yGkCbUJfGnUEwZdYCfbuVoiRN8GhCD8anGYBQdtrs5VNk5hmMZu9MChCbNrRV9yAR2meD15L9uJHcVMA6F1K",
  "key42": "4NySoMJLd2vbMmM5cqPeartio9HvBBnrrLcdhpYth37pKFL777KPb91vMn5CFiGGJog5K5AzcpPabnUqmzWvEbHF"
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
