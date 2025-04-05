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
    "3fNev3DVNFY6mKZ5RmuRVdGsRF1s8aC7givN9ypEueFAvDLMZEpUcw7P55pTh28CFG9bXf5p7rxRJ1ebJca992u3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dKT2SBA8KrAafvsVqvwrCEReinapezsE5rDg47DFsP4JA6oD1zf4HDEBd87AFEe5psuhNqA7KfgZ1xuE8hjDYdh",
  "key1": "Yw1a1pKCXhPvFEiztWAGxuRMGnMCsRo6CpZBhdaTfP3wY8yocoj2iQtPydSgbspzwAH9QvjwGfygTnJJkTJRVEc",
  "key2": "5XL7Hxrky98QngPMHvwpfgnPTcxK9NdpFexFgTSvyhMN2P7vrrAwNDVhJwrYcJwHsZ9dWu9zeX63XiPdaqR18vug",
  "key3": "4vhngEuiVNxUvFHznyQecUvwTLwq8L3Vieo9FkJkxR6SRqvTScBKFDjzgTWUQgQr11tYoqKkNwHWQZwp8kP8L8He",
  "key4": "3WJqCYQWZFCBKbyvvjJtjMmqDrjSnRqDTxFYoPmUDCCVgBEVYvmLZp2sbi9LrNtjEhuAGRxgYghynbyXFu3xfsYu",
  "key5": "5YcE1mf9U8s5VhBrcv6xVV3qddVfvMuQE9BjnZD8j4DJSvpSeZ17zvM9xHmd6qyC3d2yj9kFLF6XJCH8iPo8UKb9",
  "key6": "Jub37QitAaLKMvTGQZT4n1KStCmQ2KSvtH4txuyhNyXMJkka7PTZSwPtgHuN7HXfiuhnwGUZZM3zS98PQQuL5Rg",
  "key7": "2vuc7a2w3r7HzSWSwgZFudFayt4a1VgS7d4dWe4efNonTxZY667go1KrrVtnRd9wgYbu6yUvMCJrwJY8uhHuXySp",
  "key8": "2zStMTBTVtqxBEAF1EtmcYc1DdehUhs9jGs3GGhgCm9Y1geUHTQNLMoe4JXS4dZbSfSuQDaDo4CL7mHgDdM5tgSe",
  "key9": "42ZksmooXCFiA45V4gieEktUHeCCoZEhtveQ8pAo5Rp4vP78WUoz672u2eF6zUFtHcGxUrhogVSrqCR21p2EbWEa",
  "key10": "52sBpRMxYdKjX4rSxs7oLpfnS1jxu6dkAPRcXPsa78uLXWgXY4GNWFpPTVEDQSNTnrn4hcxxVMgQPcbDvqcsipYE",
  "key11": "4WyoZRxE6Mg76W67oEPeWBXpWCkiXeSjxDWFVvVLvG2coeLkCkiKiT7vYbnbyKWywzoLtWcn5RDwWYHqRu2h48Hg",
  "key12": "4LqUvemzGb6LLemVJmoSpyz1L3DbVk1o5gXACwwwoAypzsE3yEoozNxSiSp2dkVKKDwDT3iATYZdEsf4tpngGPDV",
  "key13": "3tkh8BgAZXCYWcSRLcPwKBZuubWkmYR9QatDA9hPPQxTnwVKpJt87czKHtnJDHVikqAcDiFzf4RBTa5BDm7sx4a7",
  "key14": "4jtKrYpQSpwVSYZJM8jsFrA6pSguzBAKRSuivcFf9ifkzyFZMLBGeK69y43wvUZtUrzzYtc38sC94kAPJ2svGAuF",
  "key15": "424g6zARB26Y7hVBgtmc5bVcg1nyd1zEUQHjXSiN26tb2zuVStg3uwe3J46pBMzE9uc2fEx97tZzCPyCxbhZgimE",
  "key16": "5DVYDXmxcRpavZgNAZabGKurHoL8RjxGywbT2WwKxoDjNfQXX4teKbXUQUyJS44DLfQKNdoBqzjjcg5egW3W7yek",
  "key17": "61rxm7bjMYrC6r46ZHkWuioyf6cEJ7pgdRP54P8p5gpBee9efGjMhjYQjJnsB1gZzgM1utV5WM6EiCoBq4WWd2LH",
  "key18": "4mZvgavxxCy4nzWHstasSfcRt5oF2CL1LVxDV7cwNDBJtq5G1o4UiqAEQD1HoJvEHth66ty8fzXdw48Nv2Da33sz",
  "key19": "34X36qDBirAtZ3CFJow96jpGZ3ofZiDHdg1piuXkDt3aZYPePzf6hE3B4h3A7WBkBCmdZ66khWVUgiUEgfAHthZh",
  "key20": "5CzdCREN5PnCwovE73hXobzK9MTTfYtwrXBgXxBkMEcqeZGo3A9TeMtmgUw1ZitXirti6vxQeyiwHSh99NTYBMMA",
  "key21": "2v69Sxp2KM3xNQg5W1K1shEMnV1zDfD5pEuWfYaRGmCK44Wz9zCwhSfyvksHKRMM7XBtZz6ABQ9DA9kdm9DjqUPx",
  "key22": "4DJqsrrgZg5xU2A65VE7NmiKTjbLF7xMbQjwRHzBwpsWMTrBi4pzaiaCEW3jDoeKrWfQwfzes3LiRMvFcm3eUrpB",
  "key23": "2YKALzRhoBHkhGSdX7rRXFX9VuFKLzyBbH1Qu2cukwpFurQkeL3p65u3MFVbtENMCLzrMA6Vv47HQKFmNYdGdF3w",
  "key24": "3iHyqhd5ohVnJmGuAYA4L1qR8ktHmKNkv8Dbosn2YckBfMXBSzK5tCJVj7Ms5oUjWyTXxK1DhkaQNy8gU1p62nox",
  "key25": "4nwRTVUxbV3eC33yucXyhxEwurq1Summrv8x1adAxu9NsxFr2ijBnUviK9ZzyUdnnuR7sxsAvyi29sKfZMvFd672",
  "key26": "HeYRUBCWPj8rfiwAmAthRpfFSNxp3mFcG4VhtCcNTcAMWSKiE1xmquCLcjXUSHZCASBcexAUoteKzexagdJyPmY",
  "key27": "2AqW7uU4H4KuUv5Vr5d5ZCgyPvediauRMX7hx2ADKH3C5DCrQXFaCpf4erKhFoXcbjkKQj44KoK5LUuSS4SA1VBW",
  "key28": "2M75Lx8knbUU2Vop7qhuMk91w1KTGeT1jyro8fFLPgWYJXPV2dS7BBjkp7yjpJL1b8WUZHy2gDFkT7fezMm3uJPA",
  "key29": "65ZFE3Uerm6F1avbRMBVXASNsBt3EzYrM3wdk564D9gv2BmNn8LJo9gewb89rVLvM1u9PsbumkCmRencXus8mk9t",
  "key30": "45VcgmWH2o57EDRWwHRwaP577uhw5BZ3zj3KbiKyanCrZKX41fwYAiNmL2rshspt9cYoJ1b2tQGLetUZSGBGLETe",
  "key31": "4r1UAxsM4iDzMBQGMkccKq71Ememk8oJf8EBmhkFZ6zEhHJk41knHh6UMYGcLgUpDU583hFuvGekFehJT4U2hpx8",
  "key32": "2AwsgpsJ5STBRRRkYkB5Mbx4s86112FsFtvUHJoZejhMw6aJks6KtHzyS9WnVbawrXp58VQaZAKe8mQEocoevNEN",
  "key33": "2CwKo8kkAQ2DnCEBHCaUu5RMzz1Cctm95HRZm5ryZhhivvxNDCxjE4QcX5TVR1pgXcmMeMLbrYUBsYaJxPEpZRaP",
  "key34": "LKz3bziDTRAjs9nR1MNBtFp8EsVFTXx6CBxTD4GVN96f3ouycQgFAbeLBrmPbk8La5tnDoap8x17okmMEzCyYsu",
  "key35": "3Gs9kGMdhZ44nEu8jntuSFgKVGccVCvQvBKwCwrhBd6NWmC1Zp6DWvA9aj6MHgM4FX2vAE1SheTB32LG5BHcc8pW",
  "key36": "56hWH8UfWZ7fpg7p9FMM8cyfhbQ3UioPvN97dXzUM7boqBqdNEGMnQt2Qt7HiRZksW3NwUgW7nHNSUaKrSjQorfJ",
  "key37": "YYJMUrP2h5FT35amHCzAgyytcu5QDETdQ61j4CSnawgTXrvPxa3hMxzQ6CRLfdb1YsFALMaWxvTJrchqqp1hz7N",
  "key38": "4wpbkkP1Jqt3Cw4v99i3oAeNHuMhgLjByh7yRTDC5Xdd8zztq7PeuNem5uLr2iHwaoK2i1apDM3qJpRybfisLWDr",
  "key39": "2vEvxPrh5fdaV7YA9Ns1D9S6AHkDpx6tb1kMfmVnCBi3PquUYfGYwpH22yZm2zAdyN2AFkWBttBLiFBZMnc8eQ1E",
  "key40": "2SwfUgQeXR9FDA9cnRSeoMSijzZqrbunFtD1jS3X3PhMqYUYW2JuiAceKvnjdECvp4SX9Pnd5vfMGaZJCyDPB841",
  "key41": "4jVCd2ergtNa5FB533fGrMmRfPWXZgpSXnic91zwM8nnNZ1G7TzaNCxzgstRA9vAbTUvFHiJskWppKuXogTxRiH8",
  "key42": "3KAMdDziU9nFUN9ZmsTiZYDeBULGCvVuLitHQjpQDKNXp7Z84X4zf6sMomr1KkBezgn2BwaWHzrMPM7mhcsiYy7n",
  "key43": "5dgeEyj6W6GLFvb6TsZU9kMRw9r1KWn9Rh2y8iX6iN3vemcYvaGnGTMkwha1B498rsH3TRngcExxWtXVTiUhPYPM",
  "key44": "59cHEHzd5z72yx269jbNoNEwCXZAVfde1Nkp4jfp5JdVYPo6WVYEQKhSBTtk7DMk1AUhRP1UFzkeiChJee6tjWQP"
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
