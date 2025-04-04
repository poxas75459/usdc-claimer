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
    "2RtByzGr5Xpjn3YBCWPqz2Kpo3eY1PRfJ8w7JcMZmKrmsSdKMSzweBVuohDedSjzQw8NaCFhg16WYVKdvwwJvaTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DPTQCSnMfgWALPgLKzYM8AVNzoy6YWxYU5nsphufbDkpyAKBwTuYcEhRBECFcKRbmxMsFEUSrv8MVudyv7XoXEt",
  "key1": "3Y2sWgxghHR3qtAbx34n9nknNpU99RvG3cLUnFTosVYrz1eD7PobN9GAtjLGBdKLnurqSAhW8jwi56NYF4y9rWei",
  "key2": "4CeeemPBaVpndDZ8bUWQkftuHywYNUQYMVDV7EgY4b6jXJzXjrMep8Zzvo6WviW4QKU3ccjrvNBNr3535woCPCDW",
  "key3": "4AJNoJSrfjrjF1jUiKNuFHWt5eDeiiypqaFefsK9jbuRaGiBsKaGUboBWWEN5qyNK8oaSJHE8PS7mog64ScY1MM8",
  "key4": "3PouEAZYXWjTjsCQtyZhWnJVywQZ2xMUiFizVanAGMMg4jh3TvakyCuJd8e2FBSzNUdKAHFzJ9g6tQaM6QgdmWDZ",
  "key5": "3sPo3VvG8i8iJeBau3CCpTxDzf6wQnP5q8qBPV1gawgtVNYXk8Q7BFhG2MSqXeB6w5UunVJtKBRwQ29JVrDjxFVA",
  "key6": "5pEWjr3tLqAVZJm8FqRLcVakAzSzB3p7s7zfHoVLgvBbGz8fXUSXtWmQ3H3TiuWvcfexffcFj6PpwoZoBw5FWDtM",
  "key7": "4BFiiUjNaVALBThV3B1JF6fsr45cPN7naMG2RVtnxkNRKXTcttWB39PMJYXNVmhxoWjDS2cTkoEHXSHZfsW4k2aZ",
  "key8": "3JbDMJRxmAWjuMymGC3nQ8dCyjVJbf32jHyqDUYH82zeLvuGHuYCKnLMWFHv2LWRGrBbErGCTFaf5PqP42cRYD5J",
  "key9": "LCgXzpce4tYLhkURm36gyyMbPpEnoeqbvtSeSFkrBxWfcLiwDQkbAwm5ggR6utHyrXVTJhhHTyMgAuggP2H64tn",
  "key10": "4LtQF6MymtoBSCd6w3PB9orkUNKmatjQfphdCa5ezuxEFGGAHVm7KavLQTH15vWduWRgTVZT62y7Tg24zYCnJLdG",
  "key11": "5VZMWBnDmm6kCvFcAgoRZbx4kS4ur1YFNjdUnGfnCuMhh6JshpVRCZnaLufGZZZNRS4eQTt9T3QWDt5jKXAJfbkx",
  "key12": "43wBYAeFDuc7pB8gwUXGpsZc8weFNzZsjqnKYJffRqAUo914vNTjBN3ZS58XCXz61eKkVaPHpyh4kUeMRQy6C7bo",
  "key13": "3UJa15LrLLBJRdedTcNiYhuWENCUQAXetU2dKyRpJMwtWz3NrtDqBbrgCWrBio4NyRv8Mf1J6gs9ABFy7eSULGxL",
  "key14": "29giE4ZN8GrLdy88pbUaYQJCRWXvfddQFgfVmu4fpDGufaEqRjSj1fXvrK7FZjoEa8zb2v7Q81exRpHA1dzGvow7",
  "key15": "3QdQaN3VCM5B567sHrjz5TY4Esn9m2JaVNUhbfr5sDHGewaKna8FPRoh3AZWYvkLZLyVyZZf7KmtNUqdbnQzYMQy",
  "key16": "3ZXCrLfKxpU5D1nqoMUYe7d2Kd94r3xeStfZ3QxYXbKspSCTH9yE8tvb1oTEHonwgpHW5tA116A1JmcbnXBgCbL3",
  "key17": "4vojHdMB9jVsnQaJY6qSpz3LsQ84m336DUUyQE1G7XvjR8xuFZTNDXDnc88EpG9zsX8YBURXLCio2LBGLKjCiC5P",
  "key18": "5jrFbiF5Zo2HW8nS9DTYrCxaEdxD4HHwLvgnyQNoUktH2WHjqgcBJb5zF73dayBd5RPYqqWjfYaLGjucb5igvxqg",
  "key19": "2jwR1QSYLLVFkiREiJapuuZWDpobDtrZwCQHQYUJYQ5fG5u5WyqUzSzn95DJYGtiPwRuqfjbDcf9uMyH7DhyAH7H",
  "key20": "243NwhimvHmDn7Qp7oWGyXiFyPZgTgNejhfmzBBu7EkpNH45pYdxe7Stk4LSES7dpBuLQr1nRUF31D4h1isWLtdF",
  "key21": "34VDzbJ3qWHorq9KsMpUrL6tKvWp9HKqgHP6HnY1r2e3XJenam5qNScwuakFkrc2PupQiQRPeJgs2zcBLCXd1ALC",
  "key22": "5PQXQ22JGh4Lxdv72VK9PXm8oEQEdtvCbryGNk5zxUCM81voUiKQ8qNAGEsEkVipr7HKkwd3SWtNRrmijyb3QuP1",
  "key23": "3HUi5TcqbaWg6dN3sVRoLswyQDuxKakuQAMP9TrJWrqmBy4ussM5DEaQfDDhp45cRBxGuQzZAEGydxq7A1jgzUit",
  "key24": "tMGcZmxn5XrSNRwiWPJ2TCzF9oKqGky3PgewXNKMLoi1T2w1RzhUkYho4VijgVFg4dLhyjfCYXLTc8fX1tpvGRz",
  "key25": "4RLwdwkFw9mAX2MvonSZmBYS3YAYzQQ3bdGqcuoEw44z85eXQ3Es2MH2FtRaZbRaXYNfso7XMxTV7oyugfr8uqa",
  "key26": "4V3ZNXvgWrR3vYn5HSLE73FwanGi4e9wGNcD219c6P2CF3U8KXqyEoef75j26nWdmCGrRCc3va9Ruvw3MjoyJr9t",
  "key27": "5c3iA3SKVpCsYKHPsXUfvkLUyk8p1VDbxZoNvbJquVJuARUm4kS34NryDwenEmxrmaTtqCVzuxesdAS5dVk2YbQE",
  "key28": "2FS8f56pt5metr5ztsnwhZwQMypLSpmVDPqmPsaMBJRuwoSZ2keBSUn8vUV5YG2GgNhQAypF8RdRxyKYdt5HCx86",
  "key29": "NipJULqkGFEgcvWczNA2r9x5zu8fSn2ZVx2uWdBt2WzH5hNApUwaNiYqiG8iewbmoRSvPNRjZm5xCr2aRxovdVp",
  "key30": "3XdjGMdN1x5ThLnpZWfpyhmrqSAf3kCs7wMDhYtj51rpWbMeS1fhussDv87ZrnsDGWjhZ9CktG7T8GB5MqngT4SR",
  "key31": "5jx12N55L5HSC4bcq5o6BULSJts8QRR7tXi1XKwKqU3QgjQ9Ke8foxU4shRtD8B3i7tJzgUDHzUBhL38oyivfbeY",
  "key32": "5JNzrmwQJJqn5gaBXP8o2jS2qTu5jgWq65UJvFdsaysSv2jY982DeGprhQfcY7yQy4HQDXZ6P34vbPDPRMf7aofA",
  "key33": "52FKwBCyv9Vqj6UN17DwqwgZ9dnLtEbje3NSRYWGJzQhUsAyyjoPah3XbuPKzy7kej7N1UpK3YZohfnnq2KPWLja",
  "key34": "A5jAorNG62kxn6oXvs1eMdjo67Z1D2PqtcwdC4ZFoC5Rpb68CTbagxi53QG1xxGskk8nybTBHJkCm41RvBCEK2e",
  "key35": "5XHzA7vRdHP5xorfDUnfhsPXqGuSuUxtFg22Gkw4Z8VwksoDxJGbJuNVGA8Ad2nzR8meLWbFnT3cqhgq5gNFF5e2",
  "key36": "4u2jPJzcwim9hmrS9dg3KwtgwtfFfUVU9SxNXSxsxNZgLK8ka5ionzUTci3afNUv9N2XwLR8Jmg55jrQuUDKn1P2",
  "key37": "3owbbJHffp4Q1sz4hreuUnvZkF3C7qsrseqzncSDUPy9fEsVEfs3bf92VR26cdAj6SkgpQhpUUsD82TbMMqJqVsN",
  "key38": "7yUJMAj5dxi3P4f53ndBpuhAv3ovqXVYkGDa6rRzyzdtK6VMhZKpctVNBj2WCpc12DLa6PkAnjfc1dRSgwoBSNn",
  "key39": "3zG1Y7pshXi2DMcQDKkxgzE2VkgLqgxjFciDhYjXeuxKUBro3pk3VpWPdkom43LaDSPHgELLKhnpqFHcRuGN1vss",
  "key40": "3oSEZuV2a94dd6tffeYDgff2i2xMQpozfYesUkepRXRAkfDYAjmQRSCrL7DtdxRRhZNBkFcCMHZUR58dpfYYdica",
  "key41": "57W75i9e8fD9KtyQ3rTc7LAUJ4h4queyVrdwUhP78ujPUovSGpJZSHanucmuwiREapRt7on8Diy1m556BCV5wE73",
  "key42": "oaTZqmA9Pvot3qbQqPv1UrSjkdcWY637qikCi6jsKynH3cqompPSzDRnZpbo1GehWP2doaAyM1EVFt7CTVuiKzA",
  "key43": "4SoXdMFLEwN7TCnXqVjzemhVcBmiJht6wbqk2y1HDDzFxxJ3r2PkSiyjPyaixAdzrcFMMXFdM39Vb1jcndgf4Cjp",
  "key44": "2yQUAZoNwphAycBKvyjSHs7p4B75AxXfL83yj9kpBMbFUbeEuThETte2KfzPay4MoomTZknZyGhTjR51zVReeUZy",
  "key45": "38PPmeFk2fYxiBCWfd8ct3SxYGwF7zpspQ2NyntrrNiKs6Ed9rVkU3DBGp6rsCNHT54gt5Fd7YyJu9NtzVxAtVBu",
  "key46": "gQtJmZj4rXWxdx1iCTRDEfwQfZoqud8HRBEGTMZQHpeXN67A9cb1N4uHV6TXVMGUfh8tX7QAkEZYqwYET1zyrR7"
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
