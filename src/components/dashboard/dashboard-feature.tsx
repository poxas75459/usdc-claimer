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
    "uL7grwxkMiS42DDV5oSzBgpAhPX3LMmpc2tuwqXsErZdzGG5QBDmbgmynsoH3oQjtpDaRDjToCNVMmm6Q1Yevc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qhc8r7i66pH2X6KfcVp9K53YBTT12xcuWN9JeyCvt27DuJQzQVMoGgG4oQ3fzHjFYTf3JFLCiDKKpYyHEpHph5W",
  "key1": "3mXDQ95vURZFgN9JwF6HrE2fUDmCZMjHhbnYCH3xMF3gsx3ZLn3E2C7GZ96MLbAW2qNaEKuhdqQ9HDADwS94WPgU",
  "key2": "2gLZFFH7szbzarUUSRuRvjyQS6r1ye2b1VT18wBLk786nHY5NANRnM2xMhPFohci2a7qJyEqaisfwkjYP7B39u17",
  "key3": "GVXz7GLwqAhS2SMNMrdNVLJC3217wjzEAk5bbjaGboFPEUSi4KX34GU3EuiGSfycAMUSK7CsYpLcDRo8SdfqpaW",
  "key4": "4X3yosi14evcXz17Gp43PqXwMzrdAPcbsd9Yc9Ce2zDJuy8SqmjV2D4pTTv6fh9BYdp1rgc4tNr4YDUcnPY3dabQ",
  "key5": "5EhBQBicAafoFVoSVH1mNeb5ddUnaEa5N35pFoXwkhuoDc8e3BXYaRad3ejfYi2y1mMNu6QAuytF4RKAbZQYTYW",
  "key6": "3XMB6jHNUn9vYJhMMfcwevQWxCEANNtnLpFkX35QwQhpNwo9q9YCztJnDBtrrKnJPFmiw2msmV4qMMdoM4nDX6GK",
  "key7": "2KGTJk1UhYYKkNiZN1bovK9d3vbdc9ATDyQQhzJuLdnZfRd9R1aLAdfVSj52EHcy4PndQVun3t989rZHJhqKiGrw",
  "key8": "4R1x3ryzk45ixDWjJh77Juweojk9Ejx8DAEStGbJTMEohVW5pybcCDqP55fUryfwC2cChcRTDicWYiezxWWMJzoc",
  "key9": "jTsTisRm63shP99TKVMgZKqTeSj2k5AXZcynArko78UDPzNTgWsMSK1dYCatphBdtYKSACXwgeT83s44AgmqMEm",
  "key10": "4PdCrRKzBvi9xjM5xuerPuxTtCbMScSkDtDrXndP566G6KL2ZZgCmDEqZ3npTgMqLa5rLVVxwSAt7uJgzS3N3FzL",
  "key11": "67iPYWVvZKMFmK53rFJnos9SLtMipvnFzvzxPmLbQ4cLL6Q81HiVAREEvBJNiGTsheN9WvLpdSiqtGihy5djTqi9",
  "key12": "2da8jtPLPvnfikcx5HPucgQEyHBWZtcCJEChkL8rs9yE4UV7WwQChdAw5f4GrAfEqyCecYRLQJ2HDw2mN2338EsM",
  "key13": "3nbWC6mgzZwxxjhoGUALNhWR2ZM8ogwuWhT61NcEHWNqL7TdSZFXYdo9cUiiTjRP2zR9ZPkdPoa9D4zVpiATQT35",
  "key14": "2kh8611F2Hs3EHvNKb3XBhf4t5HjmGDBFDK8skyyEBacsFzQDhR5PR4B1FoXJ17w9N4d3xxpZBCFUh9QmT2mqizZ",
  "key15": "3GQ9NSEm9sbPRtyp1h7ki3XmE8TPVnV1tCLi3VgLi9GRerHWLa16ANNctFgW8HrzSZ6Hn2qg3xY75vny1CRN2VS6",
  "key16": "4MRzFivwgLYJZomcTm9f4QfpZHfHGaSm1MeJi8dW2BVALXafzM1TA9RxNfymPsSXvPdHk6dF1KtoPW2Z3GQGT9KR",
  "key17": "Q3Bw5T2nFrHeS5Xx4q4U7DPrJzQYQ87bpqjFjeBPngcsTgaXtMz5UR9UbjY33qwSUafJVRGrChFJXLmMBex2D6H",
  "key18": "4ENsjNP8RYrMAfyFbX7z9QMwZBvWZHVDVZ9nTaga79uCBmBMDfbv1U1c22YeAgvfqNzmCvxXuCCas863ouwEPZQe",
  "key19": "9BwXSxtr9WEgDh2vjTDAyePRAduD6XqDtoGYiCJBXqbi3QACKMFpH9eF4Qc1jAmxpKtGa2tJrYLkBcucpVhbJgi",
  "key20": "rE6pGtAJZ9PKrdr1GGMa6E4TsVcMXpJVNhBa9GyZiJjp4ARjxEFoW7HATYrfLJ9ALLFKPaECdtn4yEEttvmANwJ",
  "key21": "fEb4bpHLGytKqKNsRbF34xUrqemNT79YtDqfZqGPza6zGdoaeaMNT5x3WMNDKHkQmfFdqQPmnFRBySprkQe783H",
  "key22": "5tryanEsGPwbs9FQNGVnvzVjK12ZGHEHyE7m2x46QnMqgvaBSSHtVess2YZKeun9ZTpSqwY6beUdY5Vey8gY7a82",
  "key23": "5GjpBt8S6rdsVbSPzxqbu1AZE48hFjnHL7ZbjwoMRwJKJHP58JCJn3qJrPkvnZnBnNkvLLjAVGhAVsi85jHK7S3K",
  "key24": "5xdnJe3qYmrAK3uUEHxsAaJv6aSzU5xMCE5Wbd8gpv47mLSY6dPrVdMH6M4jpKDBJs3a4a6W7sz14iLCsQJzuKDk",
  "key25": "4LpXp6SfUVUyx3PTjYWawUB78moariaeNvxW3D3n9hhaUWR6B1kQZ4fXGmvCoupGYYT1YX9dvd5rqfJ6b4nh34Du",
  "key26": "1h4iNCN1pYyPpc3hV2Nf45mXEDagfYqKbrjFhdcbEcWW8y8xJXGy3Zf27BzxEuPfxJqFSFSTFoDoWdEvTyLrPvt",
  "key27": "5a69QccHLEdPtGbn55nS9kTHTWJAjF56rvCdqjuEfBGgnM6u8Fq8AAsgDtGgCt2m3VorfUX2HGNN8hzpJGti8LEA",
  "key28": "3C7mFGkKbZQWaoj26pTjTPunpnXNCzkHeSYsiKH3kTsQ9fT9nb9kUs9z32kXk4gSqChYtP12qryMBPayRffpeQeg",
  "key29": "2ru4ywgVYZUG6t4BkaZPupvwy6akveRjB7NxnVaSo85StXbBDrbFh9nz6L3i2SsVMzvPXWkHqg1y4dfrPhbf95hB",
  "key30": "24ubadDqfHKkb4RyiRYjg3DscugEmB1ZxSyx6EQvFVqUhiyQgDekGVFmhsS81q9XLLiabFPPwVkCaoBbCvsXz2SA",
  "key31": "5FnXdW3gEhLevJg56HP89L2AFYNssbFuuzDzrtxqWyWCXE5xNfGJ3eEy2cdtXDiuMtNRjv1PJWP7VpHPv3PLiFVR",
  "key32": "3PVk6isJWUYKTH3SGYUgMQ93wFhqvzHE2sByrYbq1mhr6PicLF8netCLqqDfK5KWWdb2Xr9veQtnqBmyXn7keakH",
  "key33": "3j3U3z2zqutQPPKoXZStyxF7TEhSVLKdgz7McyuwaJxbY12ChHZF4o1nhSSraXyXTgZPYRsrHpQZBWRFK5WRsbsg",
  "key34": "5oc4Af7mrvuVBLcFemym9mmGyQmp2nM7KHoPBoesVLVrv1vYjPxDFiBqv3gid555jDzcH5k3ca5W5KoZZguFpdgV",
  "key35": "BUMviPT4RKCnmawRQHKnJzvpK57qtwYjjD1RQfqqtSM8s2HcxsnJrRtjxk6PBEtm6ULf5yddAN2HuuDM5Jd5axY",
  "key36": "3qX7vE2LPfWtW7e2uvGNVL1cffgKNWJt2Wxxtr3ot7YxXuTqCBn8jpASS9PCVwKYbFkpvbzB9uRh9LA97qeA2Uk",
  "key37": "xNSagZtffiXqZ8HPaA96sZTLTRmuPNbVvjRn1BJaubGxRfaKNUmrH6fBUquwuWmTMHHKn5HsWS2XoqWv4aZG6ZB"
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
