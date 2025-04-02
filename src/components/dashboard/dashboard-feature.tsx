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
    "53n4nYzxyigarNmXjW63cDXBA9teGxFm2quCYmpjEBAAiH9GXPB9kcdfLzboFVTUrujKWmEdY8PucUvQPrFZvHit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i1jgkTVfe27y5KtXsGdVbcaoo1BwWkxXXLAAwZ1TSKuPo6tRncAd2bUwzGHrSN8jmuvmQJpJBoKWeMCW7T8g754",
  "key1": "GLqTukoCDurbxr7sk9CKdkYkp3sEnDRK4EXwHdK6GAxxYSt15WYdbA9Pz37UcPWW3Bsz8LBpeUVwMvjC3XPT6rC",
  "key2": "3tmvdCzMhpFjoSDLHQ23An8F1RKmYaB5Vu7BwRV6RT5LsJzZuiiLfhvfj3TRJXqMS2YkVu4uhcndHWcd7vRjVvjM",
  "key3": "jNwMzhJPCEndy9EDtf298Q92KgdSNNbdf9zu5ybY645er5NjfuMNyBQSnPy21M54NeK8qi2SQBB5kVKHuMQYgZk",
  "key4": "36oa7SzE1Bs5ujwD9o9WvcKKuXL1r1uHTyJ9F2RkuDYBnVkNdqswxrH58PqUHk5283ugk7diz8SzwSi2BDq4vU8s",
  "key5": "3NkkrqbQmLSjL8ztrozH4Tsp4mnrqZnPPY1sTpi94ZV3BCRYKydd17VUKM4F6Ne4U23N4LNZbTBEoCzXAKN54hT4",
  "key6": "4vixy2sCiPBbtm1JU3cuZGeSVbNkvjQEmU1JXsDUoBUwEpxoRCaEoBtvwyvizZ3Hzpg7pNbG3TavRrEf1mu7Cjg2",
  "key7": "34FymSpueHStmaYAN2yE9HW9BikwPzbLRCmLjqYuY5LceRn5uzE9jQJ2zDCE3cEPsfbvXuFPdx4PNFbES4n7PPqz",
  "key8": "4mh5RGWhMrYBMyPXqNEycX8RMdxkp4FjfwCFCbtRgye93xyYeBcHQ7g8gLo75vZJ7JyYU54APgiAmHiK7dkpmpea",
  "key9": "64bMoR1KBmV3BbVP8DM5dbWLDACqsBk8t5YLFTHp6jFwXpLtaSj4XGSACR4SLGxZX2JJ5CyLb1ryyv53zU7ek1wX",
  "key10": "2Q4JWubpsjQxfSBi7pRyF5PvSC8ptmCeHgowLHhkjXNJN4ggPa1KZM5wU72PSS1vjmbpy7ftpHeRLeueYYFofRnR",
  "key11": "LcZYJJEn8WccdjgUvHUiB2RXaSApUsqStaDXo2Liyw88eydUyWVe8G8PcxfwwKLDfo7VXuwEPg3wfrV1upna7ii",
  "key12": "vzssHp2sgBXekVcCMHTLMFWv2p4yQ29Pge8g38uMpg1ztLEGpJBYwLaTUvU2JdP7p3GyovqGYsNcMVwHH1pKci5",
  "key13": "5Fzv8rRQXTRRnNv2MrPJSoDMpSpxo5nErqL3WW4tmBo5h41mpj4gFFJYg7tRTKwrx7nwQyAsX21uGP1Wq3DKMTwt",
  "key14": "3eMDSY1taN7c2Endiu3e2sPNHwiDsWJoGQAWPQJ1khbC6CSkQndDgkbdLGTjmj1HDbv73qxXS8Rjsd8p1V8KqEmu",
  "key15": "nGBzenQYY2dD9DCqAbQA1qBKDXnC8VjNCD4NXpESo54M71f6UXdBNSncYFzcCH2CEQbj941PhJ5YbRv9nugQek4",
  "key16": "4dTgvWgUzq1iUmn7b4WPGCzUPdaXrFZVSwCdoViTZqZ3fTLC97LctjyXdqTFMwDjYfQT6eKdZXqdZ4u74VqsA9xq",
  "key17": "rywst8en6JYv9GrGLWRFnXhgWaXNGY7vRALCW4Boi8eRXgTj1EaurNBtZZAMwh9HPCcX8VUmc6DKJqGoMB6TDza",
  "key18": "5joqF9HpZT9ZjCA5yFd4XqcidGeVVaYQSEW4N8MXM56W1o1SetzDHd6CKpKAHjst4SuqzK8G3knsrJRQt9h1SYr2",
  "key19": "3reyydS37TVbXynWwf5W18Pdj8F5BR8HJEFgZcjtEc2X8BbYj2sW2QfdQTPHsDzoq5PVdWXHDZ9bKS2GyUsS5byG",
  "key20": "66pV6yiZGZ68SGJQxfmNv6KfhDNnRGHicNNaybQbGLLfmSwohCxT7nfMEF3gWRXYJtBZRoMY64AN3jQppoafwqKf",
  "key21": "4BrALkPg1wzqqRmeRhGdRddHNveeZBkG2ppabKXGa1N3MAsAkrzqkQtr3x2M61eWKmxMCp2Dk4GBvnzr8tLtqHVf",
  "key22": "5fUqYmq4kGVLm7YfUb1D363eq2ZjUw24TfUtmhdPUtNBX7HsTuaKLhtPrNnRrgGZhC61zJrU7UUa35WM3QXjnsTi",
  "key23": "2MdEoV1xZGb9ATrjMfBREiunaCbsN8UerGyAD7nAaG874yuncGLrGovkfKbgb1t6fESWntQrYzaoTmdLRh2hbraR",
  "key24": "gwAtVqpZkqoouM7MGk7XdFaWeCs2nAe3ZkFyaqkLZTFHDgVMZhK7GpR36gXhKBnjRS5Tj7554JraAN4htT49wB2",
  "key25": "32vRY1mRLjsb6NkGA6VeXuneyFnv6sbBg7V6HnZatLyvK6AsYYUPcRDPUMvmBLJZqFUUJqEFcCBENxN2UKP5qaEx",
  "key26": "37PbNcW3m7VL877T34QpxYGR8Wga7eECYSPpjZ3bjThfuRuvN5wzbvojLkc8YDNtbbMyXPsrFvk2KW7GLTki2Ge9",
  "key27": "36pKQBom6owiGVHPPiubNnapJtAvEfv4nBiza9NxtXtZQRF4gejq9qugkEjKDMjbAZLaPzupyYYbjBjphjoYMHZd",
  "key28": "64X9bssgwe462ikVQfzJHKL41T9Tto5CLAyJVu3R5MYbpjyYnLkK2sV21jpwVBTh8Bmc88iHdXwcBGBWa32GP9nb",
  "key29": "32EraofAXcEMGxefv4SP6oT7AZzi7drZgv5ov6KKV71wrRy5MJo2ytW1iTykDtfuHX2EiG8LRBhkER43FpDHacN4",
  "key30": "5GYWdGJk5Uj8sJWuYQ5oAuhLdeJNN4ba18xcgQqVCxExk97CK1G4oXhj99ocE8WBNQ8PJF4mpGP1yVNL97paRMsz",
  "key31": "J98CsTPssnPaN2VumLGnQYCVVagw2usKgLaKQLAGh2bs6Us6ngj1grNa5h4EGm2qLncZuLziseUkas5p1AFRznV",
  "key32": "5aAyrD5kip5qWRbsXPztJ3gK88bQLFnpNY8QVBcgeb72e2dN9c6rW1L3NqXswvZWG2QHx5Kx45iT6TwVsyBGb3GE",
  "key33": "2BLXFSxeM7cczAHvKWxs7ag49wDsR2FNm7yrQjrwdjYHkRXQH25Ls3jhqgisTbQbsgyNr36Hvcf5uhj7cRnfgFyC",
  "key34": "4G9e88zDCSVDJpmrPt3ZJ87Hfb9gh9wb3DREH5vCBgQ3bpqpVZYvbuLDyKvSNWvYSgyT3QYSXjJxDavEr7mvtBC2",
  "key35": "bVncW69ciVGRQ4E8zKrfPRQbgKjDqyZvnmDDYTgTY5yj9YSRrufg1WsfZVHb8Wd6CuSgUkmra6HHKqrjPbSR42b",
  "key36": "fH4mab85GRPLsMTx8KTQ4BhSFibkfwSWBxxWMUZzkACM1RJg7Eh7L2AZPxBRomNgajmkdKKfmrGrgcXiLRs4Sar",
  "key37": "3uUKtUBumHu1BEFNi4bdtFGh8hg6kjXwX4Pd6SV5QgVYkASKxWBZid2sVFTrL1m91oYxVzEzYHGF2R3EMDs9Qn2z",
  "key38": "fRxasvLbccCdkw6yZiRTk1gDvWdA1a5qJSJinsMioxtPKpmw6piwK8igQGvuDxj1kHXp8T87vHjCe7DUSafzZ2H",
  "key39": "4dCw9ydC2zDqyJ8hT3iF1KHmaYeQmxRyJELemTLe3ZBJMfP1Ax9bHQBMsbTXWok7nPz2KTPGk4K6LYxBhXZMA3ix",
  "key40": "4Wmd9XGS2XvkLycPsQkswfvuuVSdvXQxP2aK8SLRtSs3X2We5bwKQ6w7fXjtV6pDbQpN7rR5NfwhpLtUDgLBJSTd",
  "key41": "3K2Lsk6whS8rv2BnD1nyKgDmUeUwzDDpRo6DC2kmPz2fMWeEKJxesx9vdWZuHvMUbmojdrbGdRpRr6RWipEZmvaC",
  "key42": "JxTRg1CTt4WMbCYcpwGZPdCqL3WhzktRaS9ZhoEQXoM1aukKAnZerxGdMm8uBYSTfQfrJLxgoieBwo8EBr9i8eU",
  "key43": "moUPhmnizj2feEqLgWV2yKHLxZD9EmBh1dtGY9cpTysA1i4z79t82GDk5HXvZu8hdS5sj2ggiQB3vgqnACaAEdP",
  "key44": "3dxTt3vHcaPn7xUCgy1osy6DovX1SfAwCzmXqcX1DTLFgQXGr6umnnbG3pbsomFkpXDPbbKoWotZ1esJS6Gra9Ti",
  "key45": "67h9oADuEypsYdJZ27aD4BCc9875zYaACbioZpMSygseJm8av55NnjEXob1hW4EVhDWGSydDiT9HeMy8roqYyT9Q",
  "key46": "4JZrnZMuAKZ3wuzDU5ncPXzdAMdEJPfKRMiz27A4wHcEyXxgLyiwQgt1mrRetTmAV3d5bJkJU9wAQRzV6qShE8Go",
  "key47": "E4jsKBsN8YiMHJXxoJvTwBfygaJmjkz53K5hZfqgRKCyzrxbtWaWKFXcZATXqwxcM8pugt22JaYLkUXRzrpw6Y2",
  "key48": "5AtHSyD9qo1KQK8wL3rtb1oPz1LEUkXeGyftxyqk2gMUwJCM2jZYbrd7VagYawKV91hfuVaTpy3Ts76GdhskpB6J"
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
