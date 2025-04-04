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
    "Gt2FJD4am8VVRebGs53iDUr9Mgrwx6uU25fcMKopzafjPKJKMsrCWYMfUtiTzeshtKKw3qnQZQdLiiEWUbTHXPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ghHoekYDnh2u3YC9brv7Cpo7A5NSNjQWSBUg2bd7riVoXabcmWTT4cnd2dw8jBQQ3BFm4pMTam49daMTiVtnTca",
  "key1": "41aJDJ89NwEdWz19KRuyMRvjm1mG5p768tuGYjsjCGDmRiQmQRVVGB5XsYXj1FHXAdNmhhMsxHiBaaPuUdtBNE4i",
  "key2": "2cr2zBmJCxecvdjAGCp4AxRiCNPY9UKdc9BKa9qfJFGATNLRNm3KoSuggrET96Ak18BqZXVhVTZH5swL9fLj113s",
  "key3": "3TfWou663hgJN38fYGFswGFSscTM9xohBiUEXKAMN2gwhagtRwnzDUAJBwKqaCAGCdr929UNB4acVEqHxaEq7Hk5",
  "key4": "4Ah2vEovodkyYgNJap79KQ7LgZ2sjwWph4mPoELdTqYqmCVMkjeZVpX53qnN36HNdacqKfpN29zAtHu5NNmaA5qe",
  "key5": "3vTvuQAk7k6puQitvGg6ptGBBL2rg6JiUnLrQbMozYu3F5ApBqju5QmzGQyB9UYumJ4LQadZF5fzTjAvKqr9Uvcc",
  "key6": "X6yNpRKALxesWpKosah4jWZT5Vn687D3RbMS4XNjkufdizQ6U2Z8RqVjoJknbN2uJQnEkiz7LDhsmLCobWYXf58",
  "key7": "5ZKTyvBAvDikmKdtZLyi7B6UfwXBSDsGEnaMFbwwj2YXu5eNeDUDsDTY1AvhZTmCdDt4UNT6mZGp42jTZnyQobuV",
  "key8": "2bQK7RUPPSJfoHsvFNWrPk9ttbuZXhAX7D5BECeaMj8QA4nnUUpzaHBaj8iF5nTiGawqRoPjSaZoFzCRhTt2i9GP",
  "key9": "3j8gSiPXVRVzSBowu9HFNAYd18ihdN41jePQgwvNRgJFy9zv1BJutLYZGSHnUMGtoGdXL4Jfui2RmQECS1XZ5ByR",
  "key10": "2sgmZoBhJXBRcZgnHhAYtP4RY7TBru2wnqDRh6bvWmct9wTRJYhUM32q6c9EyibM8HEjyMbuMLa8Kdbrt4dMq6ws",
  "key11": "4guKwfwNtrg72iZqqDFXxBYhavSDQ9Kf7xB37WpWq8RLFPmEp47rGHNeos35cyZWhYm4Y2Sr24oNWaTHuM2Kq92G",
  "key12": "3C68B794hdMxxyR5Z4QEf1qczpkAcbXHqQs634tzYRGyR4GDmVLmfxKh1pawSHxayah4QYKoXZadsT7oD3Y1M1CN",
  "key13": "4CQ26c4onTZbmpXPc6fmzcJguM8YeRJs2EiCZEJ5q7KCkgGdWPJY7ATGhWReEc5AgaJB3S3ugAF8jmMTUcSiLNGe",
  "key14": "5xVE42uKJnX6wK4gbSUbdvhvp9xYqkTSvYS6F7oPAA2ZMfUjiWefcPh8WZDNKdfHEzp5wSdksBSSbsKeV1rsCHKR",
  "key15": "5N9h3A8hs3taxN9b1jZjg6Ya7quUz8XvhcKcnfKczLGkFxbq8wefUbqrJvNqUrKTgmE1AkFcGg1FXFHTeviC23ig",
  "key16": "Y8r8c3jBABGLfj9Ecu14XPAjcWYTCTsWmr319kganmMDGLULubaFBRkMA6tGUySJknKAynBWwnFAnE9bS5Up7ZV",
  "key17": "4PCmfb47knAaNYtpd7Np94VVvV6RpPLDmcc48S8u4yJuSchtDcTPed8XsTjfQXrPCeKoUguQbXcLDutxRajkHZaS",
  "key18": "45W9mMDV98hCy2XzpASG9s9eBSDXVcDazseniu6pwgSmkTx67m8eUdonj19gYYHRh3FHEso4ScW7p74xjUaKXd9p",
  "key19": "2iLRDnqwbbvymVmTbKBXvpeVMn9yhavvxQNbF31UufRcKxzrJ8YwP3cvidL4VGd4ovrJM3YzQt4L4CNQc6xyfukj",
  "key20": "4KCQbgU5tm3u3vPFVrmP1wYG87mTj4RmJJECS3skYESg81WFYeSFZFUMiupwUSbrNyvEhSTTAeGCjp4f8Dwsc5ZU",
  "key21": "3pTVHKdd6jfUqJoxGdniYoWvFjoV631RAFUuy4Xy5xnCSSwKGcnrz8mwyE8e9rNbRyRywngQfrZ7zUokifJXSxEf",
  "key22": "37BKFNoBNtbzXPRNUx8kdHLQjpXixoPEdoKj2q9LUWEQtvrZGpS5MWLM51aLqhiMgtF2ozoEwD8ver1s4nBoPJmf",
  "key23": "5KR5a2XvSwMmy81K8t2k3rikh2P4wBy2SzHL3nuy7VMzaNEhF9tCMLSCNAopTtRMdWiUrFe4iLVf6kLAoapZGLkq",
  "key24": "5sj5stUttvMGWG5G2afrvJKRYWCMFjjNP2Tt1TLB2neLJ8HjAd9TsXTTRJWMhTnQERoPJ1RVMCcugFz2MfQqnV5K",
  "key25": "61ekgA1okXWoeqS1cUKULosPAN3rN1u3Q4rxbDgUWVxfsokzMfqymEq3oQFvnKQZXBFXtB9JhZDbRA1dGUXbGEyU",
  "key26": "2uqdvNCh6hqwVmPkuQm3KYt9qYp7SRHmuUQXDBvwvT7nwaD6JTrMVhDMyPQ6YBjqfdqrmsHcNy3d8FqDeskfXn6W",
  "key27": "5tUfq5CvRQWSnY4y3EDgHP3LXZ7s4GiPHwFHmgCPoZiAWmipE58x4k89xRQbwmy8pgGT7zYNQ9Kz8HUeQc5NLb5J",
  "key28": "qrKUJekbnXHSLU35YJgJoeVCe15ubsHn3wjwnwGkA76uWxC4A3sptDH1J5smjDLbxMr8ebwDYwETKqM7d34KZmC",
  "key29": "2C6Fp6u4pUe7txuwcrWeJsRUQfxhkbYRpL7NXjyGnEBiPEUfNHmoVzvJaTkCEqxf3tjx8YKd97Dw5c89XQSKjmZo",
  "key30": "2fUKtihndwGesBYoWf2AR6m59MFy1WTdkckuQxMCdu13AL9DPdwnhqfcWBybVCspGfYWt9sBstzuHFDePm1D3deQ",
  "key31": "q12uvXofdoYc8iqgmSzvhaCVGe54ZQ8F1x4jtS6cEArh6wThqYyXwFDnUJc9bZabPHTrH9eMtgTsEzciNy37Kqw",
  "key32": "nSiEgACjZ1ha1urDY3RvFek5mKTwBJ1QYfL41a9GKutJsL9cyjYnkdqkCqrzKWpx1CKqxizvLwEDhYxYyr7ffDr",
  "key33": "5ZBDsoPiEvCaDJiwu8rLMe5RjMoasSV5ti8ZaxWp2Xk3H7QDxkVwwb64DxRTJ8Kf2ambLqKwgth8jNsGuGsdEHP4",
  "key34": "5s51T1y1Di3LxM5Egizss5RZoUPnTyPBSRZY61nV2bPXNZqWRKseAbDpgscy3fW8igamAJ65FVh7RDfZdBcZovKM",
  "key35": "3HfebdEQSNykjn6huFyCBej4J8LkQSny6oYShTXXNhnPoYqKEm4EmjeziJms2yBSYaVv89MqyD1KAkKGDrDmUE8G",
  "key36": "4uVNevYJA9Ln2YqvkkK5WuPDMvg5c1L1DswVJbaisKQeeWm4QpL59xjXE677kYpXrxeAgHNNRz5krDQGere5Sffn",
  "key37": "5VPG3TXeSzax6X8noN7Rj6fW5LoeETEskdfboLKr42sRrhAwosCXvoKjEzXK5cnmSi2gt3gsrJDrk7dG6RxHivKp",
  "key38": "WmnwBLbwSoXFMRsUkWDRSBeKyo1guA3WQfzjnXBDxdx1N6HpmYf6ysARgGSyzeXp9Rqu25BGHuqpYCpL8PursTS",
  "key39": "4FAP1hMNe4gz1CHSM8yBVdxekDkuGBvBUCpPwQPkubjWHmY8Geik7XXUbmviEhAffxw7TNbkDT5BhFFp84anYS4i",
  "key40": "3UNyddoh1pv2f3haX6raC6GUgiDWYepqxv6sNGeqC2hCSy1z4tPNKuM3Y29AAuMPi5bvvxkNcdS1SnwWxjBm5qBh",
  "key41": "4TN3wmVMzbqcG59HXxMwzvFLxZ9yQ3qQAE17yK1e9hkrb4cWiGUypFuphzBirWNFtrz3Sjd3agEFLEnPNdQGPMxY",
  "key42": "FsXQHVAWT9GFKmQhAiwdG6QXkQc3H3Kny7VTkNkqHHgPBTiLULgbfUhavWFaUzRaFWkK5SWkJCNrEFxMzW1vjEj",
  "key43": "4eYm49ZMgPQGDBbDzrytD24zXEVRa9hq4vz6BGnAqWcmXQPSPf5omJqkyHZY44wbLU6T2ZzzvsWoMyAcnDQ924UZ",
  "key44": "2RSd4efo1ZS2YoqMYVrHDt7db6CWQNPxhPYy19pk6cCQt2em3xnVzooxUYtjrKEXeac1T8EsBRhAShgTEiYyjdGK",
  "key45": "1r4o3KCniTQaW8ZZgzAPjahyxEKPju14e53e9ccE9UTcbrNiiuMCULrhj7bH7Bd8WcMpB8kdRxVtA5U4agJ2FwV",
  "key46": "3BtbcvehdNs6ios1zzCZoGcZs1AjKJGurNb5VE8XkQKgNGBxNXam7RSHQSjbbdzT6peKdNVcdVtHxHy4W9ba9oTb",
  "key47": "21eJ499q8yqh3vhVX47tDA7oXJLLczGd89atqJw4RrEXVmbTujHHBjjd3dWSiLA86atszsSqLM6nzVLJifaJs2GY",
  "key48": "5uaEmmSeU5hSNS67zBv3zrpAavcHU8FpTZ3ELjJ6XzjQW7CY155yxW2GPe7aM62YyNpatedxCNi5sDVR1dgym57A"
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
